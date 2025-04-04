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
    "3y5fWzcJBdkPrchHh3M5dFpBqS9RtE7bGX8yeU21aKhUNjAXC25Am2kCE8wPkp92dkT6jf4LvbxuPJ8vLM4JxTYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adF2BJx6tx8LKMWA4MZZbwqRbVNG1L7QMrUHhjs7sv1N6DCjKHYMsCXMaAykQ51t2XkbHf5iNTsqakd3ktNRB15",
  "key1": "3aZyxFVNQ5n3LFmhoGSjSjmVyqJKW1DMEs7DUbTRyegTxdBUdhL8s57bTwiyWsfu9ECk3k3TG1aZCcZzCFR892KA",
  "key2": "FFVkLBgajA84X9ZYBVMxYntFmNahnUJTHoKtmpupCaTjVyUP6ABHeRtZZ5YhSjZbhaHvVTJH7X7R3uibxkQ5K9B",
  "key3": "27Qeu8BLDdsBDjZfu5vUNoZ3UaTpEXi91ccMarXTLcguNgS8G6Q8QXi56QYbNe7Lq9d8dgHHJsY8FpdpFQFL4cbj",
  "key4": "XbFazKeJ2MKktFvhjEetKh2agjo4AVyK3H8eVxpt5wDwy5HwjhJe8y3URSuL4FvebDVv1aCv1jnhqbmWJPEwjgX",
  "key5": "3K5xnT9AVyvR9AKsiJejNPww8nguLtjnK3krtH6mk6GLQ79fCewxuQpW1GcSTiEVaQzT1y4rzdp3R8ZLKy4n8Zyn",
  "key6": "2Kg41UzVJ1TvhJUaWMapPoEteucGz96LpDH4oZ1PKnYgPLSdEhPCGA5KMBrQzksKZSXSxK7sAWsuHvnkaQ2Phvdq",
  "key7": "R8MiAi1bWSbMQhc5J87zNtL9pMQKupSeRGxrdWXgu5NjcHRqW7fLb98LF4nkGdUXE1cMds63BQjLeXh7FHdNxt4",
  "key8": "2YajQaXDK8ZCDPZML7pP6zWzAt5ktAfErWcagR12s5d3eSZNPsmGUWdauDbbrRqxFV6vYGjaU7nfafWN4xKkCH51",
  "key9": "2AUSg1umPQyp29EvwRZSGCeSTQdnzSCXCRmo7SPFZ5EK9Ju8XYRfxTTMWMpykgN2fCugGmnCk75us6Y2C32MQqSP",
  "key10": "3KnNZyYgFCS1QhWvPub5EETEsbU6UpX7311aZBZJ7QfTiYbmKsWVQzFDSYGAxHnnjBQmCch7G9Sfn5rg29KUuYD6",
  "key11": "c2ymo12Bprw8JwWy75TD1Fsnrh5VgUmKpdZBjb8zeBjMbYNWB6DNJkU6y5LrGhmzZomx4SHmJHRyZ7x8B1bCc2N",
  "key12": "3663m9Y2jzvMEouZhsYSzgdu8Gxbh6yJtCQ6TqgT7PTAVrafKBh873AVegyEqx8aLPgC62CsJxCZ6PAWeNZgrLsS",
  "key13": "D7oZEwQfJgWTLMoUMtuC5CtLdkVcULoye5DnSXXajS7s5KHyv6wFL21zLL41hSt2mkHqQfadsrPPFVpCS1ZesEL",
  "key14": "pC8ggVuFPpYzAGYnz6quTCsk8yh3c9MQ8a45Fw4A8hrWezVy5Ujvx4Gb6TrW89Gj7v7dawm3aN3fvw54wZL8DT1",
  "key15": "2K54gZyb623XdLFz87S8T9f2d5wag6rrpsS8zyeFFvErYqM7f3vDGZMiBY14FezZ4vhhbPMFBuDZe84Zee4xRLts",
  "key16": "23MhuiPzaGSQBncy43Ha8LTmfrQWsrrQeVThf14yU1imFYjkBaddYAV2d6QPbr4YNnEkSqxzxdJeMig3B2R9vbzr",
  "key17": "47xphbAUb6VPBVvPviCTAMqb1vGo3hCYFroQWqRqFYS9HDgrTDLgFtAyi1x36N8SbAMvKHJCNFAepzrxmgWb6ddQ",
  "key18": "4gobBVkLfbBbZpCbffm4zioRKRwjfE8YcVTxmg9WSjohQUjFCTXr1Q5jkyboYAcodLXfDg3xj6cuk8q9H7FEtBBV",
  "key19": "nBavoUepL3miy5TUGnwggUdKEoAe2FTRKuZgW2UTJiop2thHwb3YQLPH3N7fdgQbzmhYSmV8m2Ui2bVSYuF9kwP",
  "key20": "321wVK34JWXAop34NjMr9dfesaGdNsaRAEnBoaxgCsC98zBd2bzrp55WXMAUd1MTaLMKcyxkant5iqPBioZc5YXG",
  "key21": "34XjvtWbJqaDRwg28K1pgJZztManrMWWLPmNGDwHnGbgbWh8JVpjScAwt8Ge1uKRrDAv3pkrswqtC1yUcTudMHTD",
  "key22": "58fWLA3sjHEFTSUDSiu1MimweJGNvMx96AT9FofBADpUQwShyVB1Hchjhaa8pFor61LphTGx7Tfs3oYGNEEYaXVL",
  "key23": "3NCAhC8k6cFM3iwntzPkqUWHcy5BdJNgxiNuVNHozCbYKiYPq8A6qVKjxuEfVUsfhJ4kJpEfCrH1EAmGbiSQXR5R",
  "key24": "ySxpVvr1dp9aQTroK9f6WhuuqnyV3VrbWiDAYFfvgJPvR97WsUPv38Ga6QzwxjukKHtMyaDRoutqQ7PrxsDVCmv"
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
