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
    "34Yai8nztqQJYMWQW9szgxz3DRqJa3peAFycadxbVo1Ju1JnxfFzHcjho18iYkmY2HFAWfk4tykGAJcgHSDbcdsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eut6UBpmeVAjn5eyqQ5pzChecRrcMde95LWgHBgpD634izn97sQs5vKtcEh6rAfGjMU8vcPGjY9azyAMneauvhx",
  "key1": "6J15Ar7mxk3QY1dg71mSAytWvdK5XVbKhB3oeDu71QwYWK8iNxkYn5QsZBjMcoEFQhYNBSe9ZGZ4JA7tckBNxQz",
  "key2": "5afcgqkDYaEyLH8bKYKdpDTf1d8sgENCsJEGntitjKTeRRknR5V8q3nx2GVAwNw3gsP5AUHpJv2rnpp5DkUNV8Zh",
  "key3": "CW1jRWmvcxFN7v7LRC3np4VaXUiJN4thLjEvadfLVS265xWFuG2XojJz53cGvNmnBZdqyoKJypSNxcKJy2xtHsY",
  "key4": "4RRNeHiCvchzPxfoHjRbxwkYs7VcLo1VGBnP2HPUSnZLbWK3FTbJT1wLJAjSUF5kv8asskBW58uEJZXCvrfSmrjw",
  "key5": "4tp7rNivhZzhEk2gmU6vJ96Seif5EA8t9TTstGwexsC9sAxpwbPHY2UJuMaHmVdF9eGmP6xoyveQ6faXzFoE9me2",
  "key6": "S5pxG6pwS8hNfFQTLfgBoBUWYbYHmKrHyay2z85YMv9merxEhn1kKjEFfN4jKCy7fLDh5bhtAvJzGeLs5ratJ5v",
  "key7": "4xRw882X9R5YihzErmw9HH2YbEfeR5vt6iXty85i1dRPzi9NdYrzEjdhCGtMAQc2WrpgCnJ7UL3YKMdC5xweqPgS",
  "key8": "4HqLRtrNHhcpCdWozR5cxsvAoSLqcehz63ZeWmkf22Wzqr7op8oWtAWKBm5xumUDeaC5AbpG8CJs6YoAXxPsBQEA",
  "key9": "4s5Wqwc7Pic52HYn7AsdtPsuUQqsMnjtcHVgYZ7uL4EQVnRdUrCupDA53Go8ADg5xb5AsnoQ2dkyTK51PeMK9sqy",
  "key10": "5NQeREAzkJyXSBFDeZmT6oo2uXidozktjsztbv9TW2JQU41hnEFajppZWhxK1KzYkaXCrAdotKdgjMkmsmSpp1Pk",
  "key11": "63kJAVyGLg9NxdAAmPR1QBbW6cqyzEYyVpkAJcMaRPJdNiiGHrdeVDruC4XTmXfdAck92J1w999Ex5s28sQD5fr9",
  "key12": "3w5UUpD2gmef4pqX6uh3CoK2PBYsRJWTS7S1NNtYdNqnnxxjasLsRAA671LP8hrFEzDfqxr6WkqRiu6h8YYwLBGe",
  "key13": "N9fLi5fgEQDU4Kx9nExeXz6kexe2GnfpqAes1t6r7s4Bzt7TtBzZqtJDvaH3is3YLAig8MQoU7J61NBMqaZtYE7",
  "key14": "48Vu64qCTRNZDcwqj6Fu7P9c5ZCmgYMJjH3SP7ycUPehUt6wYsgz2HW4hBUb5bCeXLcbaQLRstxC7ny8duGpZjBA",
  "key15": "32a3NvZbBvEzHcY61BnxZ5Cf4yxzbKrEVGEaNUuq21px8Uo35bSTY48fEYkjPs5UANvXBAVooZsXN7tws5kQ6z8M",
  "key16": "5K7gRuTMoa9QkhAkxK1yk5JfWo6f5uYcjwXYH5EmS23hsLqpsuFmvP57hHGJmaUmrPnP7ZBEvafRi3JMJWzF3eGc",
  "key17": "3QQKNTkXFizqYyNbhRat3FhR4Pgbwdt7xmSkUFxeqBi4yzrz4jWX2EU6QqetvwDneyB5n4sZWd5xrzS5UDe2efkv",
  "key18": "5s2Jkfnw2bk8vwxaHeWJswWMX1UFJJHuJTfinfAKPw2myW6rjr4o9xARsyyrndbGMcVbCgocZT9nGwQG92vHHpiU",
  "key19": "3RYjDQHpLV8zerpM67XvQrz4bPcroNhmrM8QwsCk9u66NSgZqGta5Gy9jh5CzSyCeAozSksexXg8rKtHBRYHvsCg",
  "key20": "5WLDgonovC8K2J3gEVvWoqoDL8N33mvbCscPdpgJLBj6y1K2PYofwKidVXWZs7DrJcTxdUcfxxrwmfF9bzpSjhf5",
  "key21": "3CUynrb3YQ4jZh5jtcUkf94e1NrySw1adMptNZQCsNcgcE3287ha33PzisABreUrsqNb2Qc3TEXBFjKnHsuHSkz1",
  "key22": "467xKYnR1QrGxCiinRqp8aYUJGRsxUT1wiCmVazPuXd68cze2qTc4C6nwWrwYPcsvnTELYedyrzPiPAzmDcoAnV",
  "key23": "4rvj7diN3q9AWwDL9Nnad8SnkNPRfjkBAh5oCjBZHQz1z9dAfzcat9w5DwvTeZxps3cN5W7xERrGr5YVNW83B1vt",
  "key24": "5UGsNHRPwhKCC29yYBfMTgpHR1ABMZbPqQNGbD8tujden2M8cCjBDB936EYUbDcKDZU4GswJjseU1pQt8BeXGiEN",
  "key25": "PMrKq5ik1VskZaPgbQac5dKwtPiMt9c7SstH6VVRYK5jLTNMu5tYrH23vjGwxAeaTNdQT6Q4Kz97xArCJy5gtaN",
  "key26": "3PLw9UC2YBf3XRiRNN4t4yRkff98irD1VhavY1dTY195VQ2AfZRUjQbPpFuT7yE677PfRzKEZubbY8h17MR9sXDc"
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
