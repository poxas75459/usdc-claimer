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
    "cJ1K5HdyzmboFZrkryXXsQchckiMvEVbWryEBpbb9YDe8TWPhyJVPvnNAq1EEzoRHdPwGRSEhB9KrfRBVEA1jBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ju1rBrmYB98i3Bk5UkZw5Dcdu1mXmScV4YPXn3ZvgB24donVymXGxES7PJn1sx9D5UuT4Z9BaJnnXTt3DPokYVw",
  "key1": "47mdcWyk9NmH3L4m9AESo5mMrKpzRrKLGwDrZ5n3Efm6sZh5kLHY6nqa6cofxLbQnNnn9okQXtbAE4WUtvyxhagS",
  "key2": "HVxSxE8kXW99AsNgLGCKzoMqphMpWCvhAmrQKDjamkTkuvVxmxyxg9Q2E9ta2GEwWuABVjmzkDRMJXLzt1kTAes",
  "key3": "5WS16iDRK6JW75oUjrPTJ9LXZ6aiUygZKvS1PRkQsHWezZEcAPbPaPkoZt8mRJajz9WXAKQRJB7KhuxENZQvJ3Dn",
  "key4": "4QQX8R9t4Nk12XMmfdnU7vR5QaF1sNhK7E5kxfNz5d1T5tSTd9pPVt5u4uGWk6QoMQXfkDrQKMTqno6Cx1hZYip8",
  "key5": "2Q8mwT8Try9hVNmQhDtgRd6Krb9Ywz2bdSuuPdDaWp7gmXKcWdov4iCdd2gkiBx11S5yWRkkXDtn3wnYFz7PMxiC",
  "key6": "32YLEuZF8VHCTCVw9Nu4xJzDmUwVd71MdhngQL6qQzpudk9YbEZz5o3JzEqV6wfjt1ggaqFKW8gQ8Q2XFv7m7fYR",
  "key7": "5rDMkLbPPfBh96fsRHNSKMGg5kegEpoyWaUah4pAhS5ETMr9Xwkz24QrEfragGfhRTimhm7m6aEdbE1FDrUcBjz9",
  "key8": "3m6w5jXwz7e75yCyMnnhNeACxufjWhF4jagCDoLmgVvQGadKH8oD1XTNA9KvVEzCzVwzsqTrAEjXGahrsCcxLJvi",
  "key9": "3FG1eagwq3XaK5yCwKgwAwHH17kLPVSb89q5ZuTRfqXRyELRDRiGeCcRpTwrxqh5cQreWGFmfBSXzduUMtfySz6Y",
  "key10": "2vRGysZXZx2FSmpYfBKjhixFRqcETk3EJ16rK3aC8AiB8t8VLYUx5PqygrXtunq9FAZYGQjxP5d12AyKwdUNh9SE",
  "key11": "4S3RkiBo7uvfxhF5ZcSb1kquhdSvXuSMGTEh1V1H9XT5EWBfG8pgnHXMkLo5qMLAdsRLi3h9fcgRGVq1x7Vb6g3L",
  "key12": "2NXv8Re4knk3czqYPj4v46RoBEdgjGQBqFeQja23PA8Sdf98ZxojJKaGHCXmhyTsM5A5tHK1uRys91nVPahJTpdd",
  "key13": "2mtbwkqc84qAozm1QvSqKCJ2QRS29Pusn7JGcarTS2vLEb7XBRiMdCciH6cehDHZtFARTkwCgX2wujm2p3tjA2RB",
  "key14": "5RiLtTCow1nfgAob6kALvk6hngT6cJmSzSc3jaTcozFJFQDEippTDDv4Bht1Rk9syb48hcq6xka4ZnwgWRTufESi",
  "key15": "3TrpEh2am5pKxDLd6gKhG39JiXzKzjyYq7NRhT7bg1dGa4yvzmHn5MaA1i1hxKAXUrtydhxe7dsWxMijTDQRv3zk",
  "key16": "2bMzfhrSepdhJ8k4BKijdtsHWNYaFQLmokHPzgr8Y6HwoRNazQzLhtTohvRKHgBipj3TybJ4cCaApUXZpCnM6Goh",
  "key17": "4g7GxFnsS1nHGekKiBH7Krg3NhAGwwGAWiBJUmLMfRGAJKBcqRSNo2goYYQQxhhs48mfkoDTQWBANnoQ3TjbXKrs",
  "key18": "5Zkws8MDzzNWCRABpE6pVMtjEGeQhSjp3ziqrvmfvXev25uF5Kyij5jpzfVDQ5pN5JV3tzvTAzCUx3gtB3fXvQV3",
  "key19": "5QokxH3GZQ5k8Y3yCcUq393X33rVwuWBLToj8zrx6FiRf97fFpYnGsrVPbiXRc2X6krrspdE2BmumGu3tDBKDZy7",
  "key20": "3MzpySFn5ptaowUR8FwGNxB8X2Hah53DiQZDaUp7zToVDpbo7C83pa4w1VnijddTAjigh16veB6umLm2FZQqjqwk",
  "key21": "2tFAfGMHNcBQQkAt1d3Tar15jR2LbXSwg4miHYTwW42MhUuoxgYUFbmbjWfvgWzG6b6EjST5Ea7V9mEzAoWyq2qx",
  "key22": "32jAkBetMEW2G2CRyGeHxHX2jnM4EjWWGyZ7axKTVEwE6qzX22qfHMJoZtHu8gb6t1u3NucSA23eaDLBYFLtwDEg",
  "key23": "5yAoUj1QELzrT3RZyVf2VMyRETuFhcis7t72SAc5EPjwQWGZhABCmWZmQiXtafAQqk7x7R5houmgNMoXfaShpCd3",
  "key24": "Vn8v7sxsd35AZfTvdN4EBGT2es4otjkyq4KGacJwbmmoKuvi433dQ2UbtgtNswDu3prFUv4MrwGcAQdvtfiS1ZA",
  "key25": "2XaiqiUAcq9utR4jsj5aBiFtKX2b6s9PHfBWxS1TpQwtQpiihG15d7NusjeiCkBVvVe2iSDMmLoW3qTZSUXWKuY2",
  "key26": "3jeKDny82oHoc2YVBRsNjwe1g3AT31kGncmfJUb5djCVY1ksstrr9zKqdRWja6sqimTBsGBkUcuSLAxwu8kQ6u1H",
  "key27": "3G2LwZb1CdAgJB6T7Xj3u2Gso1bvNonR55qQQfqzjn644J7w9THQq4cW6jf3wkyyo45jkeWHj5mn9fMbxWtECc6h",
  "key28": "5DAkWuSoRXsyjXo8CFMwHJBYUiBq2fENqBmyMwB77R6CgTfJxDb7mZHvEpwR2XDmSqMjKHpooa62uru8Nix3zQKK",
  "key29": "5nEbNgw5cQf5mtZq6P73wuwfcMPLPaGrfgQZ3yP4aMYFi1AM3E8qqwLr9ofsgRxZitFzcXXrsbDjD4RTvnijpxLA",
  "key30": "8mino2WxrU1AxYbeN7MSMGxt92MsN8B4gKvZjZMtbiKQnCrnrhKyHh1vttqiCE8M8b3K1aFCcVycf9hoArJf1pW",
  "key31": "39Nh1edArRouKeM1Lsfgx13gzcrvh9xKC56cBcrh3JpBz1Z8K76osrMfEwGACxuk52SDpBkErKbBvwTzExymBCVb",
  "key32": "4H4veXYFW42DtLbj3cxHBP93B8G228npWtY746C1QaszpHdcC4wu1GnoS57WwgBpRWmHBADR3VnhFvEmJdPPCrVs",
  "key33": "3BF6BgBxjiaTX4S9yS7VnDiNh4qJLAYvzf5y5ziBtufaZVCMoY7NmvbpjhKSab5fT9ijKVrjoz1xKWxrhrdb6LBN",
  "key34": "3PEaiVbZSkbwANntxpC9nY8tGPcQFoFToXF3rSYSHgQNKAmZ158WxLnzayMSPiSWC8jij1n7oe12uxKsjeqoDqMD",
  "key35": "LTTzDh2Hjjjn6QXwpwQqtVzRMZndz1ou2wW2VZHsiEo6NTmb2VAju22YU7ahuXXyAtx4a88zE9AuE4NhY4Z7opt"
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
