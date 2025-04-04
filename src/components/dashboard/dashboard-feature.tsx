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
    "v5uqCcS26UgrFbBX9zapZYEGxZwY6hLstKJriVheZR2E4ApaPBZxUwrvyhFArefQ2sBrYQTjWBghW4nbFLTEsjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6yMP8QH3v7JfJGfPX8YzKC2DTnzRd7ismEWyF7j1TBaAkcNxTrbhkzrZNvtmZ2jyWpw3ihWXb7nB5ipnvsjwf1",
  "key1": "2aBtjKZtbop1eBRZ1KfPHRELpUYD3LHsKcCxfwayfTXXkyLDAuSLWqRVQs4JwnpEfKYRaJVLYUG11WWTKXYvzaf5",
  "key2": "2YmDKeD3RJEes5neUN5wNmZTXyXzY4GSk42AVrsU9nnnDDSo36Ei4DStbr3DK99GyWuULAQicvgs2WBvN21uy8y3",
  "key3": "5nMxqeUCBbVp5yA347Z9HhudbMkxH1ojM4SBajswTN4C85vzNeEiVsbqXu8rRr3bMXkTbApEMT73q2Prs1umaxyK",
  "key4": "5YgUYcj3rB8NFL2XQBavBTGWg8QptZkYKkHj1rzsYJLQWs68KNauuUpr3TFPzcSGpUe6Jsy2rTJiVuWaVGWpdxZu",
  "key5": "Mv8LG8KzNmekHGPw9xNn7Z16dsbvKNupoaYXUSxaAvqJM82pGZ5ydcGuYy4bYZan8LfjDEeNJXPWbMajkAVQHdf",
  "key6": "4chsVCw6yPr2TRspM1fJH8vqc3KA9FSKRK3VCkSi1gj72bRUE3S4j2QinAf4jPX5w6WxmBvMF9wbAV5CJ9A4E2dz",
  "key7": "2UQcDUACQap8VR5RvVyWRmTKjwEcHgrKb6UrkgWbUzfiT9DmmsQUFdjUnrKqnd9CGjBdRrcLz4vhgRtXBUoHzJq9",
  "key8": "uqhGKP8xqdQhipS2kRRi5GJ5PrCBiadyBErHCsZfL48XVn9p1n9tW1LgFbR1quV5M9Q6nZY1uU7QcWebs8Hh7BW",
  "key9": "5nYeXqX92eaeM41QNT2H9PbQFTYURb3d77cgNPDA6ie7nx7h83vEtjrua9kuzcskvez9awk1EkoUUu1ZqNsEd16Z",
  "key10": "3J12jtbBFDjh4zyusF7C6eJKqmBgwKBqKfeZhst8NbCzgoApHfSPsnBMTageiPDgBVupbFE7r3wCcj3UkH4Mxr2R",
  "key11": "57BywL7ox9iTqUR3tt8cWhG1Mz6mCEspCnrxEKctTEt5PftuE7Bj8SdyR7BfbQ4sHthYKtdPFPd33HY7AWkectPh",
  "key12": "45n4DsN6EPLuBRB6vUgZfWa5Stwy5zq3V2WLPFSBnM6Cn9ZcLT2tEvLWYMbSUct2c9GSQzgXDjxZ1nFNcifLGrG6",
  "key13": "3bDXvxPNZpPaYNhcR3cv4EbueAQrdZM6mTJq91SgnAHW9vMhit3Av3pzzg5RTsBfxXHmJVggzsEbSSBkgrNFpV89",
  "key14": "3knCvL3i9pF2RNVJ5dfRHrHYDng6xK1UmPF3D9dHNCX5ZjD5ax4Umpg5xkqPxjW12KFLyZYPQB4KzEQXqv8pTVsx",
  "key15": "4JwZbgYxRq3EzG6S467168t9n4p3nP5azDNpEnu3qHpe8c4q2sBnCmBvUUaW76BxM9cDaZpFxt8SwSBRpAmbPga8",
  "key16": "3TAL9ruyRmpyKXDt9LqwmdvdamvdW7qbFiKUrsLsdahinoaHwzK2zmbG3QQVgU9JnTj2eks3Emdx1jNPwd3UBA8q",
  "key17": "EkjHv5DVUs6G3t23PJCXMcLAZ479DjSBkGz4PPTT6GqExS9BowUYrni61Ed3PZCK5pQixeaMkSgQDQfKB63AniB",
  "key18": "3YyhkefSRD18ogZe7EG3LuegHSh7p9G86H26bf4uYu7jxEWrbfixU2xzy5mUGBu1CESsZK898EEi9nhPNU9BetMX",
  "key19": "3TLtxbCNntPW3htxZxQRZYrsY93UgpKVLitcp9F5LEf6ySvdRNAJnL3yThnNhLjfXETK7z24yYbqcgpfBPUWMZDh",
  "key20": "32mJsLWmghet8etyCsar5piziQeGry9Dtdg3KGfCuG3aX1d7DZCRMCy5cHn3UF83zagfBdHeXfsByB79qsqFSCcz",
  "key21": "2RbLgvL9rzrBJVFXe6UDaWZ4eWdEEjDTRCjm4F1gKW5y9LNVdiFGQzPS3BiZEHLwww6HSwBc9UEt6tFDkCSbXo5x",
  "key22": "4XLG83EjMyZQ4XdLPB1LQEkVztjUgenPmzkmcSEkHJMM3NMCDLrd6mB232XnZXQKgdjWUwZnJ8cxvEmqyiN1kHYT",
  "key23": "jtdxRwuY6G2B4RB3etp5E6vzeUERzFmBHLZEWnMG7kah3smdxoYD3q2VvuggXchR9T91hEwfaKN1HpxmuC891Rw",
  "key24": "3xNfHJzgcq6HFWSJ5F6f7GYzNhGqFuxhDB84HekgVtZ6jErvf6me8n2mT9Rh3uGWUJrdMtApu4kc44Z7diKHxpUg",
  "key25": "Xk8FN1ocomY8Dkjg1akgjWJd2Q7jJgB538sNUXPw9MbphfMLM53CEmevJeyUA7voN9zs1vuQ85vhoJBx8feksxY",
  "key26": "5RDfntH4fycCfAbdXV19ZV5d2GPg1wN8ggVGwJDnf31LhfSbyXkfyYuuD8XLmraCTPV3o4aP7Yzt9B94PzhDFdtr",
  "key27": "XP7WbHbpLzKdwxeAhLdxk2oTii8vPo2LveY1y9tfZLLtbztfNhhp6vdxg47BiSV7pJUA4vEdMSosxaxft3rRA8j",
  "key28": "orNcdQRK7bF8MMuu7TS2oB2Gfo6sxqBq75NV6rA3F6bJ96cUz24zQ1xUxwWRYqfU4QRzv6fTpPa522NpnqRatG5",
  "key29": "24gAnck1pQ236KFLWVUGk2PYEAzp4746tr8XNWrgV6qsEkBXHdA3hcdB5e3gyQgYpg2LKzdrhU3z3Yj4zErLKS4M",
  "key30": "55D2FiS3tvnp8uVcNAKBmvY2tjZEp4fRWN7DcsUpa4x7yPNtLu9taaoEo6m7zJED5Ce4VKUrEKDXCZqQpihmrwif",
  "key31": "5hEcXoG8tA9gh6jzq832pPR7MAebyWLJ21sfaEi6UGJu4HJsTEsh3gxx9hyNq4JuxJspy18TGNwxTmXh6hMkrfuv",
  "key32": "4vUFPECjF8ZBY1D6upcgiMLbk5M4Pih2d3xRLGGovarrJf7t36rvM6PiBRhZ3k14GBsUfoasDb8ZoqdpoVNJJNVq",
  "key33": "3n3EGX53gkQgNNGpQNjyV3TeBtvGnj6zhPYKkVCu8X7bhg11ZStvfK21u1AHDQqqYM5pGKdCwQDj3JMWa7WnsQoR",
  "key34": "C1RhQVw8B11h4y8SruZ8VSjb6DYT5qVW6ypyAWg3Cu5wTPPbjqsj6fY8EZyhrfwMynUGzyQMH2zvTAUWjFXwKoh"
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
