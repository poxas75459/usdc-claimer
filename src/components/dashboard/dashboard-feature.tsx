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
    "3ZgG85mDHcUa36NQiMWGo48N2tUR7TDKG3uzLewRJrfJqszDZQg1YVcqtjZ2wrBY5NJ5SSb17i1ZLJKiUUHR15ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37quH1yMaqnvggJjpbKbdXmGJpjAGeavYJoVXwjUX1eJDsYJnd797zJoiisW8G8ipe8VPKEFk6y5MvJUyrFM9xmE",
  "key1": "4xaBUBewiaxbzqHPRBQbSVyKvNqB813vL6GuNVa8rfJWQXdvaDcLMjMMQibeDM5x4LS6C7WfsAC1wsmm8qusKWrM",
  "key2": "62F6AzWz7PYzRoNHCeJYuedSMY6RTX1M3756LHwuAeSYGLHUhH3sQAXqY33ffWvPqgUr7KBZNbMeHcSrNHWjzxDD",
  "key3": "29juLP2h4zzZc38MvfzdXSEzZUH8kiStQrSq4Brrs2gTSTND1G4krTHJhL8kZnEVG3cgEiGRpufvaPn7Qu3zb2b3",
  "key4": "qwJ7FGtkDnKd6sZhk2Fywhty3zv3THgY9sDbTUDQPuX3FAj7E4gtwErGX9yJAucoQ7XNfEUF9C179EhwPxx2ZcT",
  "key5": "46Bz9uVW2huUtirKuUNA8nBTwVMGpiSxHHSCFE6MJYZQ8Li4N28A3UDhHEpEGFrX3oxa9B3aaXftvYFZ7LwHQ2RD",
  "key6": "WjBATiAuDMkjzKwUUBq49zEab4TkPeGGWf6xUPVoK47PhzBxWPfG5er9qXx8Huc6T8MdfnSKD9uP23XRPYFmud6",
  "key7": "gWk9HMQK1UCioTCvEvPbwZxsbhn6Pfso7RQUsRiwV7Pex7sxAGiKghBr2GfpeUkoBVS8iCistBT1XKjd9FKw78K",
  "key8": "njkpG7v4ASiBqn6WJg3MRiGJKJiKWxYctxoAtDiUWrCn2ue8LEYjo5ZFH3aDKz86JzTLfTeK19XuuYVphmR4VJL",
  "key9": "5bFvfG4y9tmABTqh4Y61MyRLLYJxVRPhErmz7FzNgECfrYMnjesU2D5MsddupjieWvssAk4UDkNwwGzm41MnsgLP",
  "key10": "4jQnd1WiRkYoY1EuwMbg2RufbaLhJPJLjBsLFEXYoh91dq9pubyPus8dR8vk8GxKHEwu8QWK4WZu7eNm661fi3dR",
  "key11": "3HLdYHay1FLTMPgpGYVP372vxWu1cKDMazW8ktht7qZQXHWvgRpgwUa4X4B4uMuqmb3aK8HuDiQLtL7SXgDKvCX1",
  "key12": "3oKbqwUdTwt2vZ4159gGjGsP8g5YRFKDLmUQkArhUsRKfkBvKqPu1quxrceFZqyZZwZaL982DdXo8L5LpcazSten",
  "key13": "3iViczvVzwB2KBKRETgriuxALz3g47byJ6tAJjoo7p9Fof9FK2knfEdtBt65EZ5ScoWFssGfAk43jXijAtWuEZwc",
  "key14": "3yDbmMe7eZSszysSiSrSG8esiurehacPmLaQyq7A79P3sdkUCaJ9VsAp62UWQtHpiYTZ72dsNEynhCQCwsVMEvcw",
  "key15": "xHBG3Nt8DFmZBKQG7qGZWJp8gCViAgFMYQkHVXLjUJXGnGj5cwiMBawS4GZXp5e1B3ULDsuo15zzcetTuxjZQJU",
  "key16": "2vJsu1So9xHHwwmb29xAQ1e1SHAxtJP9AZLP9tpGCrma5FSBF2KytuD5cHeMDhVwt5DktDX4KfKYLzJYi4gWdKUm",
  "key17": "34a4Mt6iwxEtsAvsG6Y8sMv9HrDAippacP2zu6467rPfqC5Pyx1mrUeEYJqceDndWLK6DXAkgtLi2877FajX1Yr7",
  "key18": "4QqoBkv5KRhBqkpwxMf1chrm3rrSMTf6SuZQiGQdyVTHHS9Kr6ZprVsZogPrR3b65zpYp3Jv3KvHovn2rA8zUTkt",
  "key19": "2EoaG3uRWbNeViDvcWt4aBPMwdE6wGU84eFhMf1kM645X3VLfAm1Zce4eDmvKvYyyCYAf3wWJVeAtKCDxnCn2gx7",
  "key20": "2p1nGRB5eeCjFAALeZAKGjzRkp2Afb5JmBpMp1TT9hRqyAhee5kAbugi5Urrz211XySBMkbPDYfvVcVuQYuNZ8bd",
  "key21": "5UQinJwn5UDaX8oQ8zbxg1NE9Y9oSrkjMkPA7BnZDGKTeT1ph7RYtwrQNeQzVPwpapaQnAjXeveLLpcPL6F45cZq",
  "key22": "2iXs7BeEfLVGnnhQoyDkADeCoQnZ2poTo4WnnBHEP4j5RGhj8TDu8Tsxdr3un2uQ2KRCY6RPHexPWUrwNUpst9pc",
  "key23": "3XNGk62oR2ACeVKpXXscfJPzb84M6KPjUct21BUtDG6v63upTRbbFaY7sX1WuZUmvYaq1XAUL484oEJ6mso1n2FJ",
  "key24": "27qf9wpQC87Kbd1HRfLrsxspDJTfGCR62ZAtd4ocrsjsXBwDNn8agXTZf2ii1ZezdcSGAteHZ6C8zzC3vdvrbzDB",
  "key25": "v37Z4UjBctHj8GjErd7zZM5GQ93tfMHHkj7ReccrgboRVFmqMHMHhWevpYB1R2GkNrMC1dYHUpkvMD6thnKQZev",
  "key26": "4q3QpkS1qEVHZGdDErbkGYNL5jYEr8J64tUMHXLM7953Cyv5rEbdJHX4JN3Jij9FEBePBfrNgu419f1AoKLnbAVM",
  "key27": "3m1FiHj8oVAUX8TLR4nva7VWUrFLSwE8Sdk87AEz38cVRLd7GJ5LwezNnSLoWDNdmv14QdSNXZuGvHWLEQfirYa9",
  "key28": "4K3L7Ji2a8G2imitxakDuvRboChwcMPohc3xpaKmRutVcNitCHzPmP4RxC5dYvwyyJYpZFqZQNAC5kmrBY9fFjzL",
  "key29": "5DLoJD4jzkQvE4UhzyXTERANmPhmaM2FtjFNCMdb2zmjSTcTQ97WX2H1iYoutN4n6n53RibNQVPp9npLncReoWEW",
  "key30": "46JjmRr5nVMQrRGdDdm8CZqCE7tMAjQTupdjV6vEtdLtnLpVgAh6ESA1JJCAAy2nw45dqfsqVHphdbEfXct1idnj",
  "key31": "4crqAVsVT2A7AbVzN1Gp6WcbbiALPtb3MaNs86gRk3H2eRCucjmKLA7FntY3d48CjCTK8Ujj3KZptsBoNdUxY6cJ",
  "key32": "JpZymJujbyWbtxbbepMq79ysEVopZYhuxHoL89xU7GRAifra3q598hNTv3zF8311SWqLfV6SkkvJ9cXJmYjQAGs",
  "key33": "3n4g1PzWMmYKkmEC2G8k4tt7Hi4GAjoXQtVwd2Lcn25WgLV2rspMrG4eFis7HCMcsH5dF8zKzS3S3BEZ5EwDaat9",
  "key34": "5Ldg3X3fnaaCcHisM3L4RBv4N1iak5bcAqHK8hicGZGk7ZZkoezEpQWxf4iNPsGCar8BjmSzvf3vkxfY8psXMN4s",
  "key35": "5A3HqMfYRGM5hpCfACzDuS5Md72X1CJb1XUitoEP6e53BAUdisKUsG9K6e19Gmfq3XVuuJJnt1xMi6MYXipQRqDW",
  "key36": "sagQkjDbydd8Qb3j2cfC4ytrEms3kYaRYgyEt5RPZwGgkp2cFx7k2yknW2FWHSj2jSFuCX8UmnC4gTprtmRkSJy",
  "key37": "5fAe1d984Wo2NvZCDwVKcXWCHgimwN9tRk1oHDUQDkmYm57xPBdvjgduayKzkREabZ2PBNpjt1vYaGtqJDK66ort",
  "key38": "2aPi8Av22d7TKn2DKQFZVXUv8zsD8Jfb7pEyoHCFkeT3hEAygTstKNaKegmfFTnecQt8WyNWGq64oKVGWFDSHHbt",
  "key39": "2QkFpXkMWKmuGKxAcdcAiANT7TTTuHeJetz7w7ER3msL7e65VevnicBsYpqp93Yew2SStABygdoRZfk7DERTuo4d",
  "key40": "4kRwaher6caxF2ijEEfUsLtz97Ec5xYS4HetMFKxnfziAW5zx8cLkjYL7ugGp6Aof6sVTMqNnTwmYWkvka35vkCA",
  "key41": "2wLTLtc4rh7magLXCoLivxsU5FhrxNDxPBM3epSQoA7QKssP1rHCNK5L6ZvEBf9oKJX4XbGztBofo9c5kvB24XcP",
  "key42": "3RuZPsnTkBeS3YMyKNNgL4H16v6rZMLnKn31YAD7z7VZtbgcRC59NHrmaXmk7T69Uwxshgmk3c7wSjAayn3v6wC6"
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
