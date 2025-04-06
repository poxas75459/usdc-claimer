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
    "qDsSe4zcjxZFguaoq4oekvEJjuHmZdsYTYHHvpEuj43e66KxmtJs1xeNTp1aJ2nH4SP7YGYgbs56uENHPR2oBHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qtWMqrsdqn2JjJ1KEitQDQT3f7KeDHH9Rm3XDphoXArvm8pm18sY1orsJi4rNRYTmc1TtRMhw4SfNqJy8yQ29M8",
  "key1": "5PUWiXho7bLzZYBzLXSUzfVi6SN77UGVwcW8FA9Tw6sj8fZHYuyuBPaST177Wf7yS4PvKGiwcLDRErrWyFRLftb1",
  "key2": "5v46wuAGwww7QDWho9yHgfH3euz8cEKVhYBhJteWyJgdygKFZHTcgHnqfu14RWdbJca2sFX83UitctMTkG36p37a",
  "key3": "3zxsaywXSnwzyP1ki9NiV6M8dAK5TgyTNA4bfX6pKv5vah3TKuz6Add4NUqtasH47ZdB65bNJ1CAQVNwyYUH1euM",
  "key4": "26JKfhRQMeWin8cfW8g8T8gfb8MAw2nqBYWXx9VtuVxvzsEZpoxVkNp1LHah6k9NaPMQShffQTCpGimTxiRCZT7F",
  "key5": "Hf4pKgxBq8KJTvApt28GP25a5gRRSWTNmV5FhLr9fZkAKorWVZp3H41Mx3dNgbgkYXMyKRz1nidvr9qDNTho6bM",
  "key6": "4DvEGLAmCFbovyZH2nRrobANXzKcavVGGjsRebWe1gAVxhGZ17L2MqQgRo7xVJvF3tsC1pss7gujkWFaZCkwrmy8",
  "key7": "LMHAjCbDPVqr4nAxufNL5HjuhSPnNsQZDmQKqrsvvzF69fDbYzNyKXZtSCuBNSx28KBikggx8magMXAJu689evx",
  "key8": "gAy1VivJXmL9Ytbi5XT8bSjAeEHeMsDgGjsqyrxDdeq6Wikvuba16zP7vANezg21s9gzDPSe74kfUGFzGZKApUv",
  "key9": "oLMagVJvqU53JKicyByH7pazupLU1knXHFpYqVx9YH2qyUnhHrjGnGSshmdZG6JrzYi9dp8S73XJM8paZGaam12",
  "key10": "3trYnHrpyWjTtSyndoe1Ev7n7jyWZbrSnFiSr3daKn9xf4KYnt2EKHxt2guUcHjXEPu31UvCuvoLiv2CszYJWeBc",
  "key11": "x7Nn82Bt2AZcZxPAUmb5ZRtiRKXPz7gnLS9pTWxuSwQuDUYGNaJxeHTo1PbQWz2KyqsuGkp78at1j9cfBJF6dWa",
  "key12": "41HHh3nSM5q2RxcjkZABzr3wxxQmKSRyikA4TSwDihnsPYen1KqAa3rafxPV8ipUZjTpTfMWcmvJTduJVASQV4Nb",
  "key13": "xrCD8ng5hpgSaXppFz1UXJysY8DU1RDzB8sVH2QPwWSVJsUrEjY6yvgXUr9tGfYvvuoJYAzaYk7DsQ2vjMA5TTb",
  "key14": "2mho3H7buY7WtyjijdiKxaxhxGtiTJSQc15fc3k1gkqhp98DNPJJ739rJFpj8c2UqRkaWcLHdGtYHJQAKkKdfu4k",
  "key15": "51JA1LymWZso6s7tc4tsZtPcah6tQLowstGmbhvBtMLr6A8sVzmy5Cye3fsYSV7iYy3AC2GEGuBQAm4VuFMZU8UR",
  "key16": "3fgDA88kmwPKXFrvpRacqDdXBNy8WCG9j3YoXD2poLpWnvxFrhtohVJHvabqpJRE3YQnMWjeZg2S6JGkrc6oHbdU",
  "key17": "2N7GBHsXnf3zymNvT3TLybxfeQrK6YWFTxVv8iYne9NvVBNQNUkAoGjQbAfBS2yyoHAVT6kkdapfVx6SyjDrWH6P",
  "key18": "2VCnrGSULXspTc3FnkmXqWbd699sUB8eUXUGUomPzV1yL4t7NzKoAdR4Y7szL9mKVpomPGgNzKeUN51qbV9LYWXw",
  "key19": "64Y1hnD8sBPrBbjCgz3Xs6EqneYz7MMiyHVWFKj1YAVgGuNQwJu1ZaVYWGnA8hnmPHu2qyjRqvBjMbdfpo93oK2W",
  "key20": "5vKzBZ3cFoGXSdn5JVMrwdcN1dU6VdsSjsT2Wgb34iNk8BUjCzCzeN2JE5ViJ4GAiqD6VWJEiyzuLMreRMVVoN63",
  "key21": "4HzVqDCfohAr422bdWXobETUQj81qnFyUvSeVdSr9SEJtXEwYTS2WW4MndxG3WrfTXsZniQjjxpcCzUKjZsJRRJs",
  "key22": "35EGCTFkFfi1UtSYbyVZAAo4jPdVrQRZykMGcv7x7mPsoJF14qSsRoDiHtxSZ1rYMbRLsobGgcHThJmDYwSL6dts",
  "key23": "3917xKFhmXDzEv5fbFuq7xXMCpB13YVx4uYbBu2SuK5KeMF9CC323c4MxcTG6w233viKPFgXZaPodU1rgHHJvXHN",
  "key24": "2tm2Dz8a8xzRAwXAQFG884zxff6jzMA1hZ9TVWwFucC5HJCqxaxrBo2VS3rVDcxtRdAaUMQXW59SqguKi4m3GwXi",
  "key25": "pABTpomkGeqPJKAm6Kf7JzFTDsC6tnDQXLMdwsBtmo7VY1SJS6KXduhiLDanpJWCrGTVj5SEpHafYuj12H7i9Ns",
  "key26": "HygUUVUDPyxPdpn2Z9JwwuLFoDvBYM4ujPJ3fgDgwVvpT7DTyw8Z7exqPrUfn69ek3sXUyXHkemZnwmewG4tGnx",
  "key27": "3a9fSwRVNAniLky6L6dcMQxjpsUQqWx1rt8bF92GRZcrhzd1Mj99U36dWocRav3WPj9My1w15z9ah5PrAr13YoKX"
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
