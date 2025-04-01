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
    "2MuJdDeeXRcYC72W6t3c3hHnwVFTX4NoXmejyDeKV9KPAiPpyhJ5MDDKvX3zfVEFirbi4rWwwTJGN2itptxR86rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dc6yTePCCWKR66Vh2TsQ2NeCJRwycffj2vY4SRKF6NKqixoibe62Xq1ZkMQS2HHJ2w7vDR7vN8Gc91Lt94rYxtP",
  "key1": "4MXyMhY9rBFGwwgCNo1oDNPRAkb53frY85QUsTAgonYHTqtLsQBzrvnhmnaayKsBhhFQ37wHP7X6Y9QMVpMLC9ex",
  "key2": "2ARBAgJhg6VJ3QVgc1vMLJRGwAP2VF7diJKtbSRotkmiLShx6ivs2LNDrVYou13B96DL6tx3sud1is5rjmX87QCX",
  "key3": "67TLDfkMusuhJxwvSxfF8444chzRF7Ww4cHAW7ssjcgZz7N8eLn5TJGUF7pVrUnGf6ZeD8rHF38oM1sojf6eMW9H",
  "key4": "5crNhJYVUqPNZ3JEQzyXJLLXSGEECX63GTJLKxbMSGRr14KDp4X4iixYY9CN4zbSjtj9QMk5XqY2aQhV9wN7E7kJ",
  "key5": "TbzBdGnkMNVWmcyCSnJvtR6f2EuiiahN6uarTLx7BRCNsWNts9ozYEZirucXSiU7mhiBkdUag9aeTnDNUyBXev3",
  "key6": "2GrsJYfDYSGEUPhBDcg57KTb8mcsYsWZ5q1mGx2g11xkW6Ph1dJXNgyyx3pKRNySNruojtHrLhhGiQjW1qDupMJi",
  "key7": "4z9pQaUi3suXvrXETjC1scQT422fPNVpyszLvEgguHkttQcpi2x3PXZ3U4jMy7ibAx5Fy296yeDtjmZitqo3eePL",
  "key8": "28aU9RYMndUwt8YFT2jwzKoMpd2LvSbcZqQAaLaSvGSzProeKG5xjC9vLt2Qdfa5kRAzADQx4YXtLUCLpc9CtHYu",
  "key9": "4Tz374xpCsfTfGM1WcAK5sAVormoa3wUnsF7keYpaCWJygbfSc8PRXmaopN13Ui6E7XEHCFTmvi3A26UmLJfX9Hs",
  "key10": "5jo7aQiyRQVCn2TX45eordxyMbNUchRHCNzeywuHo6XnBbEHSE2WPVfuGEndzjKkGYkKh8NKoxwpKtCgTH8dHCw4",
  "key11": "5Hf7ooL8ehNrCsNWMKPUDpQopgpsZsJWaJwKmkkTsK5VAopKXnHd9NxNkpEkfRsVYZZunyinkWeLLLwQm7GJZfMm",
  "key12": "y57fvBBg1r89RZQTR8JF9SziAEXxHdQfwrT3PriQS4EeFX8LjpadymTQE5VhU596yJdELJXYo7mUJRGse3zCSYc",
  "key13": "2DRputsA16gYpFEJDBGSeCTw1VCcpywjEVR9rNCpLakyRBndRnBaiu3sGjC5mNSLJwbqGWkqfhNUgd18fK6Ge5cQ",
  "key14": "3cTPcKHtwqpYw9pJR4fdtcg1k6sGvYapGJzwHKqvroHo3JoyKkzXRGeCvX2r7rLaDs25h2WpSEWnPLVPWMhsiaqg",
  "key15": "5zwNQhLvkbtkwUjrtKprrzsLvfF1v5Sxe7T7Zpp3VMurciRByyC6GVj4EEhrMKQiJEqdzo7B8La2YL9ZSSYkWVa8",
  "key16": "wNqgCziqqK4xku3qizUr7tn8eiX6F4qemBN3fRrGKyHcfXAzm3J1cKhCU6K3SDSyJjqUKRMMhDw7rNePAHskDcf",
  "key17": "21FdExbPzXmJrtxRHdqeAv8hp2gEfA8RYV2oZLsddQL2HhNtrkbZA28WZrh1Tk7jzvGGW2fXRRfJ7don2wSQkuhh",
  "key18": "5UgvvfHNb7zvig4Zsp5QCJ44yzU4uKDnThmDyndAWD6t2kL4oUdr89E9GEcvvEHZ3EG77nJT2MRYEexNDtfv2sSj",
  "key19": "dT3CAPE7MFaRgkToArkAEXd4D6CfNK1g7qxD937VhUGdoDkzkkf848v3qLknHBexsRPhUFxiq9zvhT13Bw5Tgr3",
  "key20": "3UKtq6HUQ1kAMPvhzyY3BmyNNePX5Af1fsiHpzuqx9HezLtdm7q2yyLAvuorzU5G8n865gJVB2qhwKrwJWivhN3T",
  "key21": "pbJHwDHivmZz7GMkqu3gQuMb4pycnDxyR3jtv8ZcUJXBYpg2aHpDMpFnDfsyXSFe62Ci2o4vvvsfvJVZkkdg9Vq",
  "key22": "3jvQapgsWTzCNkP2Sa1HwS9kC4SeShJb16aqVYc6vMBmd3hAMD3KpDV19bJrnPZ9y4KqnPpP6qaJFzov3hwtH2bg",
  "key23": "5gmp2thAc1726HrHux1rcHz6cNvzdGw7L1c2zKBGZd9FnAEn5hBGSHd52k1cGJTToUSrByjDTFFasY2TznZdJqkk",
  "key24": "3aHjkmjQCAqjok3u3gyrzJWkEdYrSppL5ay7krFVxoX4kujUqWouKgVzkXwZfosxikfxHmfMNGBxdSEaDm5u2yeU",
  "key25": "2tBgSsVPSTpsugvB1WQN2o1dGXhxYjzuahJeQjtSWfK23BMRR6VP5jsy6Di67cAiTAimmzPgtrCGoAPiYs1V8AGT",
  "key26": "243K1aFt2spd4nqxCs8fvFUiU3qWCksEYQGzwMuf6k86zjsCB7juA2uqEmABPhDw1WAmfW5QgZuMxGmWWj3gbrhm",
  "key27": "JmiHpmKpqgfBE5tEyFFLqv6thvE8KYvfE2kL8fGBzMVR7fka6WQDzXGj9ZrhLSFb1jHF6bAFER5RXK88iJG58Qx",
  "key28": "3zNC2AqZ2f7QZRLwWNg51GzR7FVnNiUXYvyeuVXC1EEuVtoWo9MrsJxTvADGjicyyHBjYjAAL5fNK9qdhTruvhC4",
  "key29": "2Tpo2Xu4S8MkxfNbzunQsdE5Ps47TwakM5AyF5hoUWi9i1xVtyPhQtQ8rWfhPr9V1UebWLLBBFpQS9WTWqHE84YD",
  "key30": "DkX1nHCSc5CBA3RttKyZNmmkHnHLdWMfxAYkD4FyiUUgryM3oQfT2T7CVpAbS1goF7D27BezLkzQegUsazs2Xj1",
  "key31": "3SvkJj9f9QLxxEMNQqcy3Jjgnwjg4Ns9QzEraP3mybFCw8om9sKxi73ouJ9K78D8Jd2eZkgxDCDS4hfzek5oETR1",
  "key32": "4yZhpgnBfSuvTgBomAr61GTkfZLyMreRd3e5F9XQhm7cY5nhFffH6222ph1gpAXTJKHtJcCaCP85y2FayemHTvZc",
  "key33": "4kDRT6vPuGhWQr74Umox27nYCEEMCP8XRsq8UahohGAFLeMXdXSG9KUM8qrBDXgQZmTM2FszuxnL5rBNEucy6PKL",
  "key34": "5ne5oidGkib9H3L7vf8YiAH4N4wNEudFvZhcXrjtJ9Rbx56dWeM7dTtG6PHdvQmkNfr976f1wa1TKBfbZKX8S52F",
  "key35": "2NB1Dduq7sY9XCZRFAkkrxNw3YKbV1jBNsayta8g1R3Pma6y2PwNdsJpCChySbJYHMmp5ErG2MZyPQJX2yb7YAbH"
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
