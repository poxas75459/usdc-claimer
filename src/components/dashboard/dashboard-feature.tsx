/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "gUoGDChvyQZUP4Y6TiouwqXqJh8St68vZHQx4GtkpaB12pGuxW66FGjbJWyA6J2hTMxQVRdBrcHndqvAkvsLHrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3VYLbX4dyyw6HLS1BsVLNdJ2vxksgGpfUfNCvVyftxheA4eCvVWV7trknkqcbcUazibGnCcnME5JChUkRsxPjb",
  "key1": "2oeZ7ZSCxSnAZAa1Dudo4NxBtnLPY67yPNaB5TRWzDJqQcWjUik44xiGhJGbDk8vFCaHnTJge8xu3c6PcWsSpWTN",
  "key2": "57KDRCcgqoS8351nFJTwMXwTJX5v9shTztwouQ1rDqPU3zuDHsD9VEdAC4WWJfD1H1EwC1FvzbsCXfFXb2WwTb2G",
  "key3": "5jVLZ6nGhd3T5WaxqEBTVvCi6RnRVK1wK2BtSDqC3NGAjPu8deUaSRz1phRskMgx69xpC8dKRxQ5jHwwLvGddbaJ",
  "key4": "2nW5r2Y67tz7XXJM3dcx98MRJTjZHkzmZ1Rvd6LcEEc1JcFAJ7e71kcwJuH1PmFxyEfa9kcfV1xUtNFddS9dfVXW",
  "key5": "5UCNBkH4fc5pJmh56XE4jsVCKEXASajns3doy2NeTJDEmmWRyPWX5pXE34h9sCfELZDU6ypeQUbaxpc7ihkJQY6G",
  "key6": "2obv8KHgxhoYcnBGceQ8gKG1G2yLuCshPN6YfNTZeE94HNzFtU4dsXMhZrn45fqK5mZ3F2vYtaD7sN6bYrg4soc9",
  "key7": "2aArNhU7coDGHsYwjpHPWpf2amAXa5DTL8edCrmcGwtxMLRUYrMbpAkG5GqjKyYy6WBDsSrNbajwmbBzSy4E5JCz",
  "key8": "2X142kWFrFzR45X842ccYZAJEtSVarDYhnNyN6SxpivokpcGtPB1DyDnsiH4xKjhpZky1seBwNjwbcSFtDC6xYcx",
  "key9": "3hWJHZz1ymBkK55HVDPg7QSrtm8RtiHior528DymAMpNhahYbbLZ89kS5UcoAAZoAxPWh3K8ZiPnU9B845rzPKAn",
  "key10": "3bHAzFSFYMAvuMzvsdhyrJohifethueLuvDwqJnY4jTTpTmb1cy7EbDwWRajjqFn4oAK8u9GhPtu3zkMYYSJikxJ",
  "key11": "outTSWsC8xAvXD12gbea3VYJwfPBxkU3EbxGDvVTDSir9GuWfP7eiR4QyEZjxtU22DedGDJvTPwU2qhUPTRkouz",
  "key12": "4PAhZHewXbNtGGBK3pBtaPQYL7V7yhNvZ564svkm5dtkB4bTVrHCexLuHi1jn7xGLpGHfahw2Wuo1Fm9g7zE47Mg",
  "key13": "5H3EmK3buX1qdWkEazim8ULWCfM9QiVXLNrne5FKbU8N2SsDWUKyj6eu4w1JjutUhyiP46gkeMCrr5mU5Xjpb19m",
  "key14": "1N2qY62z1eZJZfdTZSVzs2ZimxF9zcSarqxGnr9gFnhQWmb9D58eLDDwhgxcw4jfCfrZo7Pqf4F86YACHbVCfuJ",
  "key15": "3WkYfw9aD6y1cfhCYMFYGyZ4wNaLusHayp4eiuHndEjhhchikKZeyotGaumhsVXWetkgMW5fTwnchGuaV5veN6Tr",
  "key16": "5RC5s6XUfGyTJDQKMjuZwpzE1UThBUTYjktEiCcKivFvf7gKFXsQdSv18WrtDaYp7yLXobcJhuTcGpz6xmstxnYn",
  "key17": "4hUDyo8dBRrAJWmaZvVQYQjTHje6hLJa2rndFyFm3HBZ5NQPMQDu914bAX4KNNXhCBErAByhmjjnrprqd1o7Bbmt",
  "key18": "4mcme1n4C74wWG2aWySgHAwZb7AgTBTonfGo4XZYANKwZQvF1KyA8MsyCJkkoAKbq1v3Jd9etuatctu4vTb4DGth",
  "key19": "4FnksLaz1HSyb2u1eMbNGNbdL5e6PPsCSPrmqCduVvnNucFiBoWSyiVw3ELtmqANbiTsWPw1UTguN4bQiFM4zEw4",
  "key20": "3RrFBZRaWHhxNg8bFx31tGDNiHisA6qJsJUouhSre6VRtfeyS7FBiKGfnVy3qKKg8eKkYMcrUWLL7UEovNF4b7w6",
  "key21": "2hSt4KpXPhZeUjXtZbjsfDfjmNqXAXXvuFhTMrpBYHXpR2YDVwhSq76yqQJdgs9wG4BBZvPpyykpPcAK7T1JJbKf",
  "key22": "5T1LkcJtzsdMkhoQKPdcWS3VYpLWM7iXzWHJGveRqE2WD5fiwM3vVwKFgc7C6SWnpSX8rxgYBo48fxTjLNapdfq2",
  "key23": "31nJV3H3SfUK4H891pU4j341CCymnRDKE4z4DGuiP4QZDS8e8C19frdbe24nQybARr6nLTRVdCqPJByrykv3Sown",
  "key24": "eYwtSFE6W693UF311fMYJDE69eqkhtGMwjaoLmi6m7KK6QpuGBW61Pa4VV6bF7zX8xA883yTRP2WqqKkYNVjVY4",
  "key25": "MNiQ5F5pE6ofCG84PmMyNNdGLkZaBniDjZkBHYsphNTjN178tnkcYvhMCwW7MGndZePAgGpui69JCLn13PNnbDu",
  "key26": "4o5SSfWVxFY98UiS8csfkdSUeXsqXAtpV7uSQHSSecrFVERfaHyNUSKpM5UkMNyCFsTyDxeQKSnTFb36FvW1SmgE",
  "key27": "5KEY7meuPdoDW1VcmQkFepDtJutUSRqS45VStConLymDXos2d6kkcVGPT79ao2UjqtwWczjF7dptRNAytbLvu1GN",
  "key28": "3w1tgR5XpT6fbY3qcUk37UQ8AR5uDKjbCmDyg88fdDg9pYF4PsFbUvLaCQgpAb9JdU2Eb9aLFPr678SNKwnp6jz3",
  "key29": "CS6GwqtoaMTGQFcY4AjSD52djVyVeoEohhQusqeQ5KwpSTXmibrwsxAJ1FhPayaofXWPPoAHZoA42Z4v9kZtfCS",
  "key30": "5TX2T6CXnvtisixgS6Ci532acbPQ9hHb1GPE32kT1JWxrK9GXjCd2B7yKo2qKtFBdiH5ezVY8ACRRhDC9nXYHs7R"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
