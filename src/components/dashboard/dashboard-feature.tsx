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
    "5CLVH5keJ16isQuXdxfEcyinMLxXzVxkGE1MGYfMWEJ9ns6aJWFzJwnG2gsnhfcTgmbyB2CuvmRGk3yVnsMj4tbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a18ZJnxc5dJQgAX4sXUfZquBMNSWSywSPCxuKTMpKiUiPJY8nduonJyA3XbjfT7aaK6pAfz26V2d6Av8YfP1P72",
  "key1": "3MygzEKm4m2R4NXQnVS4Rsawx8k8d8yE6JgWcdeeVZkeCDHJpoMtkrynYqQooQxwaCBQSAJwg6Pq6ajtAs6GyYhG",
  "key2": "4VAGzmUkwLjeZcQLx45wAUN1zfVeaHpPnbBJJM9YttzQV7NzjJZkR9ychpaE49Mbjkk5XJirZjob8Y3XDNpNeeqU",
  "key3": "2f1yZ1jrzFoepF6maA1AGR3NX8jyFw4PJbzV2GktdbxTaWJBKvDbNyhVzqRf31M7JajL9LSoPGKvDctHjYB6aR5r",
  "key4": "56tHfUuFxBf4KBaejgGyN3vTK8e1Jwc6wCvD5cdJvNqJuvmNHrBnkqwr4gR4UkhQ1XfrNnyGzhaFN34QVN3qsYFv",
  "key5": "37PVH9fyjqBgenqqC77jckPJNX3wdVyqQyEZMVGiF2avxLNG7yAb6ULXp5EAFrXifX3tR8r2egiSGQsZ15C4dNQt",
  "key6": "ChscQ8rz6YLdCRmUD8V7M6VZow4YYtCtTDD7rkoSKJX3BVBAuPFWpMxTCEejjzmyVPLXg6WzkwbDZhSFyy9qYWX",
  "key7": "2n7vEh8xmAxPYEW2SSbs77ku7wQBrjcR92XGXrHQRNuiYzMnBsycYcmzTcKXBTqPZyTfUMsQ2wbPD9ccP3KFE6mz",
  "key8": "4gxwtKr374kJmFymStCVJ8dQbwcAHkxckuc3dSP3ZyK5YDM17CjZAxfzE2yDWXRg3KiDumf8WJ7AwrYAvEZTCq8h",
  "key9": "5JruCrdVkAsmS2qriKZvZenEUr6jAv1WPUtbyXkRDmtCuREsVsBpPDFvokVaMCJZmMYxpJetmFmpCPXwXmYrTALy",
  "key10": "3DUv6sYXVFKYNPVXceK6gSL21dJp5cKVraCMq9C7Qh2pmwzzTuJjr3KpFnb82Rs45k5wsGiCw5u598kiaijE3FEU",
  "key11": "5UKz5hEGbYpCduKGEoL9enQ7jfzc2YkSU9x8cpND1KGjsVKVMby7GbPsmN6FJDF1RQWtoQAKzhipShTSLX1STSHj",
  "key12": "RpdHVKbreUGFzreS9P7NrNWkP8j9Z8LGXW1jGNE3rYFtQyeyT62F15hsbS9Wgrw6BRQh7LeRTJ9rb6Ei7qGyw1L",
  "key13": "5rHXo24Vmr9AsPh8mmzE5Z8TnhivW3uAbqXBYh6BPCMPbrw6EJ1E9czNm5QxemjfN6MSxgxaDdWLL38YoHkRd38n",
  "key14": "3wh38G3AxejuMQ2rZRGJAPe1na85hvmenpYT2oa126em7GKCCcXULnbH2EPzr17LTAu7AxwdBHLSXzZXEbWeKWjT",
  "key15": "4nndAJpnPa2AeKCqPpFXXjy7rTZ4khX83CERowhCgXGBHHEHvVDkWMpqq68N1iKMW8VEtU3FAwjhkAxr5BLiGM2x",
  "key16": "1NBBFyE6h3R4ga8pF3qVUaePWLsLVkKv1RnY8aBuSh8YnUH4ryW4h19JT1BVbBqwyHHDTvvMgCJwAUmXS2c1Xkk",
  "key17": "53NCvCAz7VuKyqWibE4gdSSWqY5h2nCZ5QUvtpo5RyQt1ogvKLX99nvfXTdXwaqkf39RYDfvyYkuBAZYbsixqh35",
  "key18": "45VKk7y1HorBEJpY1a2wh7oPiu3Fo74hCZobpWrfMXijyWAUDp4boGiXxnL4CqSnZACKADXeuDpGdzKYrNfzxsPw",
  "key19": "24QQTfuQULssW3UbujyFvnjtUoX7Ey7TnjMbsNEsywstx2iBeA9jzcjugNWjwJypSAR7dkM1bV5JJD2ekukNTvGd",
  "key20": "5kJnhidBkbwbQQU5P4GKnRqV66mNTuWkrPR7w2JP3H7QGzv8qzA9RqkLVowFbuvmgRnAKniVFUX576Wp2m7zJkR3",
  "key21": "5dzxbPEvmRL28Mwsrdp5GFQj3V5Uuvsi3Q25ZzozQZWqK5seQjMn6bnuXEYckYYP8yUmHXAEYs4M4S1C8HeFJawS",
  "key22": "3NkdKyirQhXGpg6TqwdZo5QGmg7wP9ChMZtr15ec9Vak9wUz6Cjn7R47EmXaN7hNqUmomyPMtccf4HkKDgafmCzH",
  "key23": "519bWRds7ETD82ELYmFJd5En12nreiVPgDbxqpRR2ssd46NKbeD6JhjgfgByg7XkiTtvgs992f6fQy3eRjU45Xo9",
  "key24": "2U79u6q4Enm6pLMgHWBHTRGsH2KUWNWhnhZbrTqGssfyXYbfqF38L6uiLMzTfBrxnGRoHuf8e3xLvAACS9sY6oU1",
  "key25": "55QWR6aUsFnKnAwyjWN3N2Fk1epMvAHtCA1wrm6hRe8nXwi2CMVBXFPSSQAuM1a4mR3qBUDYeAu9GbQmwWA9LJiz",
  "key26": "4MKdBsKv1vtvAczSDKVPvtqkkacqU2hPfGcbR6PT5FHiVE9wtpSq1VEUmRAuUk8wqied73K4wNpiaEokyZ6TBPPL",
  "key27": "2NF7BMXawhUDUZFzvbKYLXUtR2edRMVSCgUMHegdjMcTaWnUvLSWcArWrrUc1SdVhDYiMscaG583UnGAoe8EGvtE",
  "key28": "34fEs2TReXD9xeLgrD6kB9ZaYDi68XSTPRWFoY7cy8vDfAwvBr1NrQh6dzLDXZvhGgJUva539mnLEN45PvL51oPR",
  "key29": "666XXctxn1UrTSmveVdeRMkF9hLbitWpyKZCCJUZ5nk8MZ1kVnfJNT6uD9bbEDNbAwKkmdJGgrtR6Tr5sM8m341R",
  "key30": "cegbWq5Bv8PDYPLUADhcfDRye2JvRDjhedbDW5aTrqpZLo8NPg1wt3gxpostfGRqKs25FMb9PPbiwrP896eNykf",
  "key31": "2mBTc9MBpRkH1W5jxFAe2maGdRKBzFcdkooF1s1WPDbqaXUM6cd3jF7YNsDCzYyyfW81tWDFs3QNszL41ERxGTqf",
  "key32": "3TAaWwY2oEo69J7FXgVyx7vSq9bvBPXDRj3CcU9F5oBPvZWA29EYfPkDZ36a9WFUqiZgZRqUugutb8owJ2aqgi2V",
  "key33": "2gMprJi21usHUG9WxkEyLRWZgZ69jHGasjx6zmfTLQV4iHrVuYxsxsz6pXX2LFueV6xPthZrj9Xxi37vDM8EE1CK",
  "key34": "26DY4vEByix5GGseViv3CA3tvA4odFc5HAuWxCJCdo2WQrCCNYm1UiBqP3Y3btC5CcdcYbNivjs2qoaJ2XwPv7Zv",
  "key35": "5pTCLtsmK4iEnkZ5fkuSNMEDr4Y8yGLiyqU7sKz5AH6fr3o33FfqdJzMtFy4Zi8nhHq2jsRjtg1X48eyybsHH3tr",
  "key36": "2TWN3omHyz6dQqB5VAyfkbAe9rfyszasRihLki3wyENYHN4uVNyyPPnBbXdPiYVuQH8WZQhnwgdEKE3kLett9xwL",
  "key37": "54dQWFV8a5GGUBk2b52vcuNjLfaW4gqqq7mfjVVUG9ajABDDn19W7FtdgTd7HAB3k1psTToTLRrPhHmrrA74TgwN",
  "key38": "4qi2BqzdPuDX5bwgreSAhuR9oAYiYpE8cG3fzKFpTsXUynW4p4NfsCDXfeS1gastyeEE9chZaetdK6mS9wFrXAvY",
  "key39": "5sV3wn7DusSN89xgJudNZrWzqv1SLzW2TrfwchCQyoXvhm9zdcdnwht1qtW8CVZWR4KQzNtH4rWxvk3N3Sqh8X7w",
  "key40": "3w6xgxXnfafGHLAe7Vgy8rSPwCm2PeF85rY6B8WBu6rszfjsSPRikL1ruih74NYpuEBbLdudx499x5g2XAVccHZy",
  "key41": "3nM4N9ZoY7LzWNP5HKdJamaXwqn1iN4jc2YZRqZfEhTc99gqxNdURfjnYuusVsLq4DbD5KiEgHEjk2CRFyxGaG9f"
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
