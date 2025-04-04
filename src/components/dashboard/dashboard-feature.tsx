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
    "4rsYQ9hbqkrYF74wQ5EhgqGqsrHtuTxbmQfHNPTSHj2T1BCVqXt8HAb6f8YzPJDo6MFZSkzKyFXYuH2T63HGy9X8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZcVyAq8c4LKLqsznBq9NSsa4YuWKmEPMeaDeyZ29SUczVoPPbgSu3XbjnHP3m5pjjWtTgX9k8nbqzApC9fws2K",
  "key1": "2kwApjiaovmSE6HCz7zqpXx8saxKsYNQVFLuscZ3pBc4cXi3tuu8wptKyJdsHqJWbEcT1hK3WUU5fTSHMjEQH9pG",
  "key2": "435R1hpckpvNPkg9zV6TF7uXUrGFp8oaHjpdD4QMhmVTJiczFceitfAHxgwaudQd64y8dpTMLscrUBXXaF7y8dyR",
  "key3": "kWUujsfoW4KskqqMZjY5LgyW6UnU5j5ccXekRUD4YkPWYSThiSknmTeBPcK5NNn7tCXSVmoBuxardKGUTMaRenY",
  "key4": "5hu8nQdnhi9nGnvBtNxETg7vTT2n2e7syrHoDktrxVgHQZ63GWLC1oDhNTH4X95omNhpRnusvvEsrsAPxFu5D3YE",
  "key5": "YzsKcwq9JPPy6NYUFVjYh4ECMEnEoJN5FfKk1MNLNudV4frSVNFEieDXDeQKncZay7HkZ7tW9GENBdgZZWU86eg",
  "key6": "4ETF1oZoZkHvceGyXVjiZuF8qZ29ienDb2vbf2xvgxjxBsmcFtDGHxuW5LEwqVfQnJuyJY15VSpFQ2AAX597CC9x",
  "key7": "4WpG5yLLYT8VxMJs2Cz52bkw5deGdHqHbHhXRpBwW4jjn2VXxWNtrRqzvdzq89QUXirmdazfM5Sk79GWurA9dJus",
  "key8": "4F1TBnqrLCctDvEmeCG3uhra4hcNL2nM2wAEzYDZbxkjt8jKi4QN4Lbz33EiWcKoJaDaHf6kqmNs6PUYFo9gbXbj",
  "key9": "eMP4zg9sR2f5kVrAP5ziLjsZC3K7Zo1u51K1zBrjNUoZ5i6NkJxC98gsAofX8sq8DYLGUTUvgT33xgi3hcsTNUa",
  "key10": "2GqiEUv5bi3gF1ApjQAAK1pXjE3e52Ps6Yf21iUgLNCZnkRCWUdTMPs4x4HUMRZufdu1jULjygREpWicbXVYndZx",
  "key11": "5ECutcRhwYXBMzZM3fwYpMPPHwNUy7vJy1kQcKYXwPo7DLNNjkwyv3JxR5VNZ1TLVsRSVe6yWSECSQb5pqBj4ftb",
  "key12": "52Rdv8L5pNELBVjcJkgTAwKS8Y4BsrfRdoCjsTiQtc2E4CkCYC7LvMdV63K82yxe4PrUGH9RfsB1ABtQ5T7TgEgi",
  "key13": "3QDZatCvMpvGcint7DaLNe3aAFbGSpNx2AS5Yaw7LsmTihseeDDcgUp8ivnsuyqhrgqAw9b4gGhHawkQCA8DABFk",
  "key14": "5DCLmJvRG2Gw1oEN3aEuWNEbnEUhgA1E9jUSgHhAxGkNkXpXSAxkKUjp851Wc7f3QhFv4WfXdaidnB8PhVWZghtV",
  "key15": "DfHyo9zUDTZNNrL5Y6VzNJ4HbnbJifKSUp1rRiZ3PCc4sEZifW9NeEPR9Tc7RbxYaYJEDCfi5K1kCdf4996vBKA",
  "key16": "48WpxQjSWRrDcHaZFqDskY67nk36Y8acMLPbMvrBHqpZiWmrmCtQhswhSBP3wVKBgvvaKeCsdhtVtxSgBHjLM4vh",
  "key17": "h37hobvY8LES1jCagcAkrvxeWfTKaHjAXth5qNKmocPojzMLsQXeb1mKVSXaVcHeaPSbESibNjD9FhKsrDMYsFN",
  "key18": "wPKHzAKwFcgkBycqZw1v4sTRrctRN2D4tkhStWt877zg5ToFQ2mf5xGyKe3Xq543PNUjMJy5jTeVgYqTQqQuqVp",
  "key19": "5E5Dpeir61EDtSHYwT9j53xccyKMo8mbKHkEMeW1Jzz1axanBwp6JnNVhpfyjTeJMFTGpD1TBoTWYyEDjkhaEsvz",
  "key20": "3wtxw6iGaiunMw2fX6z2nHTtVYLaQnB2kPb59YXXE4FK5TmZppBNxjoUkt39GyCwMjexwBN4pXopxZe3FggxdiXF",
  "key21": "4YqPu3f9zb38go1Gb7LZTZhz2GKq4XJjmFV4WceUdkqy1TkW8sQUwx5iQKfNa1ms51AyWasZX3mARmzYCrJNb6bF",
  "key22": "464fpg6AonW8ffRturehnPH92SJFo1aDpmFCWYskQqW6862maWsiPiEhKVXGcNEh6aS9D8s8k1sxtH4UGZ3PDjz4",
  "key23": "3mhQ4KYauP7mxXGwa1r3PYe73BcBaLQu48rcb6Z3JEBgooR4nXameEJp2CyzfP6PLm1VuzKFaisU7kzsGjFhUkdA",
  "key24": "4pD6BuDMJzUDKcWHhGTSx3PTa1RzF2CbQLbPoZATpkR1fQTnHGssnzkyYpGmX5kdgD4KXRoSxPnH1EpmPhyVDZoG",
  "key25": "ttVtWRUsAdJQMpUJCLRF1jHzyCWeqBs1qdgNxSWVQ78VX1EjQHnUDQFNsgUCEfTkhoDZHnSZ6NMoynyjyifkuoM",
  "key26": "4TaJZ9tShg6jjYasiQpPEMNcLmgoUAgVZaoCC6DoySm1Fy5XyMa1SNdZ2UeYFKks6wtYNX4XW9914BYphUQk8WhX",
  "key27": "3Nx1BNHY24YkddNRFxWACAy6Y4Q2GAVVMLnKv4a31m8xiAzftNqL973z3EDA5fMvN3gEb4wV7ECMN5SKgPxm1Wqm",
  "key28": "hiwHKvpzAjmX7Lpbru9TrCmkuoCpm5KrTgdsGH7nMWfwhMNZPDFn3en5eJ4JCRv9kpBjJSrZvD6fJnSQbPUcAfa",
  "key29": "5E3w6UqmAGvS4DecvvxKoo6xBzWy8AFVDsQYQ7viGk4VBSjSmMAv4UjZLccnDW5j52fbSq6rAqDB24UxXwKmUZiv",
  "key30": "F7EoYNR4tCoUh9ECNbMeLVfDRn6cAmAbo41hk1P8VUeCUJcKHbCKD79fW5fGyzU1MDDR571bAj2M8H8NvMs8ALj",
  "key31": "3u6BHBJAHfLDUXRbvgBZg2Jw5YBCyedysp9SuCyt8SFy5khWXMFGqC8AihkyubgpXtXThfYuSzm8gvjjCq7aqQoj",
  "key32": "23freu7Ej6nueAdT6SapzVhNjczQTbiAw9LTHceNsPAdUYY88jsQXNM7jyqNQGXGzsknzpgrN41T6Y9NgW9stWed",
  "key33": "Cckn7yCDMwQFfpRTJ3Sko3vxY3p2E8SuUZhQ2kAL9c9FapB5af2ntSR1Cv9vuU2czfjmJBZEaxULf57WvXyAe58",
  "key34": "5GLSWxNQU5apyEkyA7Cx8qkGM31jdX7V8SS9qJWUqCUmq8jVud64FuSzf7Wd7opn8JhMpKb9psSKy4DvFKHKqL8B",
  "key35": "4FKbDfrKFpVgJ9A6v3roLaq2ZLSCZugZBGSxSrLh8uQAfGBP8ToUUUia6RrFd4VwXdGPSdwwHXiXEJ6MjcZ992B3",
  "key36": "3WpvXQGU9zftrXTPz187PTHbDKtGxBE2dfkLV5AjReRtdQufTghFQNDJT2DhgZxRMiMJ1PaCAYVoKJmG7pCV6dv1",
  "key37": "4bjFESmnrxH1ZncYMTvxDniyHGTu4UHPNHZ55jY4ivJWU3TdGscPWyYSUwRpYUxLDU7vR64JQokBVjdSw7KqZRva",
  "key38": "2T5cv5h9KumkfdUGR45EQadPiuobHKPuEb9o6rTAR4b9gJsaKdpumsM5N4xEQGnd6dm3mCj81kgdTjQ3j3YywmKN",
  "key39": "oSMVjJUDNve3J8J41T52DLaTczsHVKBtNfMSHxDgqmRUj5xnTLMWdJQ2XHFfqAcN64cyjrXdXNaSjAKEAgGvw6T",
  "key40": "2Jq6CRBdJCpygreA5o3aJxFTrLMQNvmfgcnKbhJPTrdMtMFnqRa3Xcez3v2v3geJqrW88oYXX5H83JV2Kh7gSk51",
  "key41": "4uojKN6XnvBNs2Pb9z8zrYaLF16Sid9DVPW5DodHUayhUWqD8JE3LayVyqbxKfXRpf3CjN9nkVKj9FABhQ8ZmReo",
  "key42": "2WiRr2BMaDXs7z644zP3fikdDZkqR51rQfF52rLtEmN4CF36npEfCJXs7sDUqDTjxeoi2Xcp8XtjMVDUkVhc752p",
  "key43": "5NcpVMtANRb1SiSb8LbcCBNAtKuPog47efTAzoMzpXPm2VpbzHVPDGqR7njJhZpSsNzUbpPWDPS9cisbTMR1hhB9",
  "key44": "iEaXZu4mH1Ds7knyBgE64d38xPCdNix3b6aEMotG38TmSqcKsBb6KpdFWBVe53t4NC791JJKaeUc1hcAj7Ad4EQ",
  "key45": "WYmhoeMX44NRtqu4g5JcTzSDE7atm8HNHGRxGBjGfecY4f8XrB3W4e6tKsfPNjMw2YuSTZFHGYEsyoSDnj8yECA",
  "key46": "4a2V1h96gjp2StwPZ9GGAVZJBKpMitDxdtmoCznmr4CyRkHZ9Mx4jpw56RKtvU7gZp1dgi3jtzbN85m9gX259Sau",
  "key47": "3hhzLiv3rZKqtvxiUcDFgwuByp7pjpkYL5mMxLYXpQwzyzhc3WE6LR13XrGdr9fV8pdtr1xFR1YnAoL8JGWwvFwH"
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
