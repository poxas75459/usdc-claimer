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
    "4jVd5Goh8B4iFXiHvPAzaKtqhnd9LPEaxhfu2REJxfSzfAv7wcv9oLDtLePq3LjyzgDHkXKYaihYJKHVd4HRmLQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewTEKAFT4QvY19CMoTAe2CakvEQvsE6erQWpubAqDk3PhLt9VpVGNsLB476axkbYwviArGZ5Jy5jMQsNsjHc12W",
  "key1": "5QVpp9UGQBKMGftiR11BarFnaXJA3jJ3apvkqi6U17v1cEF9qj4CXxojXaXki8fgJdMipvJiWdwVX7kaVDV1jLQv",
  "key2": "2ZpdHnpV4EsHpPELcyfYQXQ5cKH8FK23usiM4QaAcktgWanciwX7d5YH4tZ7RkBMkwAREZcxJNJAX2uLWpXngDUn",
  "key3": "5oeVAeZi7eBtdHsexCbg7iasoVgJW5XwF1RDHMRywU3rnGwAsjJ5oXWiejhbjsGTnGz4QVmaaS7WnuMVnpAoUDmE",
  "key4": "5Wy294bwXMwzrzUNft1yv6YM79xaK7QByXXH6AoV25YDMoRLaaR61D8orvo8afCVgcVJw8T1U2hgkZuVwA4HVy7D",
  "key5": "4pqm6PmvkSC3Qq5HMVjh86yhbheyMvJMEwwnUsPL9MQksfsd6VwD6obk2XYHUJRwzobiHm29Xwri9XroYmhhudaz",
  "key6": "2eoTeAq4Bo92HnqKXpV6xeyeGFEBPs1mm1p32whaQP6EfEwk6oUShHJoQCVhkN9P2t4Z1HTTwLUYD3WJ67FRbzRD",
  "key7": "rmHHfubDqiq4fCHwpEHEMVubeb69vQXJrMnw8zJQQ3jydqN7akq8G1KHe6JqXL3w1JgEYdRKfgoEkm2JZne4RfP",
  "key8": "4LEvPpMjFpSdbWNp4SrFAvbJCGyg65fTU4sco2UZ61iFhmRp8cm9hTBGczP4Yb6zLJofxVb3VouJQuWbPT6jD2Kt",
  "key9": "2vDwikktfg2xFHHc3y25oiTiRWRi8Rs5trgEkXGnmEuC48f9ec7myECbJhcNt4XLFT2inbbqA3XUXwupXDCgLArj",
  "key10": "5q46NsxqinVokmU9PdcgF1qyXMmBnK7sp32eLBkmAynVGr5N98tsNW77c1Sz84ZKtEFZL5x5hCWEvgaQkCEjzkKY",
  "key11": "4wuHBTKKakwfP8BcYQf4HFEVe83pXePjmrRBvnf2Tin3FbVrr5CqAt5NkRBoPKUxWCAMkR4tW9KMsowaeTrN3Bcn",
  "key12": "29DAiVChDQcaNLprwyhNnM8HBwP46YVZ1UakAGU2uX928ZgWh813CbpppgP2c6ACi75V4io7NyuBh9jFRRwmLewu",
  "key13": "3s5yzQowwd3QweEQL18mByHdJTgYJEZeCY8rFreMePZfJ4MszjfPyXwBa4csjRyyyCfzBXShho48ijap19MLhrdW",
  "key14": "3LJNKuCxBusCvQ76YvEX2raTbYksqi8Goi87FPGAnP17LU3MRAPUuLdBLyNGu8WF75zC17CFH6Avb8G9THiwXuSX",
  "key15": "483Wt2ihrmhnHkzhiQgyT25EP3WeMPdDKax9eAS3vmfVhbQDGPrFi67Wtpupwiu7J3Fn8qSj7B6PYyVjRKhibiew",
  "key16": "3Gk4coq5PmqB3rytBYrcDbzYqzMcKZx6rQEJy77RgPKybxg9N4S8NXi9aNTRBF2SWhear9fNZ4p1w8UJds4ufJoF",
  "key17": "5qBvwZCCwqxapjiwgPeCtBmUfXtYKmZggdcBynknkXqoS9zKpnpM6RTx8uoLapFeXxxNCSAzRJWHCtUEqR8F2vNx",
  "key18": "3oV1eBoDVBkiAHxy1RjzeTZvBgPMBVv4wQp2bWw3SiAc8ZzyigUdE3igjJ26DNE3p8Awneg7fJXgRe5X9P7L6fUi",
  "key19": "2tDDkkZJ1fUMTE3v9DCtoNX5dAGEBbU68DQX5zt9LccQekR2Za59EruAzDHjBtBtDpo2Ruw3TspZsVCZDtVPcSF7",
  "key20": "5gjeeNd9WsYkttdT398izk9som7nVxq3NY9QnxZKFccHiUMbD4Ft67opR8XrGGrrVRWYH5rGsvqwMBem74rzyYyF",
  "key21": "2nLmWjLqw4zfTQx4J9iMFZoqD5q8Wps1rDoMZY9JFwAKNLYCZ1tvKBMp9CUHKEdvWvDvcjRAzpAPwh5egCX5TSuy",
  "key22": "3vULaFwt5CFpxVbRMTAVds3K681VNTmXqPYe49p7Ya6V9RtVJv1NF4NbvTzPakFvbjpz8hNed7yCFUbgcY6stMYy",
  "key23": "4m54sFzz26gedxvAKnhv9GeHJ8WSs9onqqtHBLFjXViF3dLyzPjhnQiHVw7dvDvWUvwzchwa99gVvEoVEmsGEeq5",
  "key24": "5ULDEtWyNhBFshwh8ieUHoaW1JtCDtZx7uNt8d1fkJsenw8Ry76cR2bQ1sLBdGupzte2Pi2iEL5QY5ZxNXLNcy66",
  "key25": "4BP2wQd98eoKTitMdboARM1TH9A7LUXxrmryK7a1xcGoSCVqaqdzeqprSmAzZsLprqQzC6xNeLLe6KRGzxuqbbZq",
  "key26": "2TKATZBjHFNALBDhvkywABc4UtTKNTrUvCU2ohYYbDW9wJyS8s2dPbFxQhmF787ghyxx8QvANQDnkaR2q1AGB6y7",
  "key27": "5Grj7d8bX9KDThcUrUP9MuF98sLitf4UPQTEJ3boFK7qxCBiDGt2Gdy8ubE2pfRCJ1VXsdLyVxz6UHoxwc5Ct2QS"
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
