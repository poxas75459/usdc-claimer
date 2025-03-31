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
    "5Z42pXRu9W5BUDytYa7cQd9Kj2G4HDPD3kECUWeMUBRCXQkHYoQvi2dLxguwaaNxvVNWLbSpJgop7CiHh7reAzvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dJ5mrqBccdF1wUjUPM8tAoncDMeR7JEzZavWN4Rgf4KmscnXSc9Piv6RtNsSFGKdA5KSgKs5dw3Z4AhSNGB9uP5",
  "key1": "31XzsUabtb3YtEeaWLnme1Zb3u6TK1pLZouH6yqgDkufD2mF7jrSZJySCdc8Qep3GNWQyHbs5NEiPDZzB7APjxoE",
  "key2": "eMLsoB2dhRQLYU1JyqwPHD6RW5GDumXVxPyGXFy3trmGhwschnWq6PPbdC69p94kAB8zmw9LtEoXScpTaG4x1bJ",
  "key3": "HhHqZjGxos9yKn7tHhpnPJJJSopZ8ESTQAP4dN1wUsqfWVEQcG8FBwpvEYceZN3khf4w1HHxarZ3T3n73uT6LPE",
  "key4": "54UzCBPfpBkbE2HhQhp9gbVngsVeefkco6Yqn378hmQXvfACcGejVRkSi2mMA4PbHd5UhZuJVjMsJJm66hmMbVMb",
  "key5": "49wpmk9YRUofAhThBzEqmZcvTsWq5JCWRRr9en4EHTGA7wNQf2oFUJqRRegRpHFsDC7dGD8X8byf8nR8Ah25nJ1A",
  "key6": "3SyL2EXJ7DrpXzh7HQ1wsEBHLACxeoHKLQjwn1GonpUMGB1LCx6BFGWK5S8tDTEH18zUXEjSwYHmqbhLZVqkXp9b",
  "key7": "8DPz6EtRSMoNqDN6iW54XQSJQyQMpzxHb8nouGiHVqErumWa43J6fSUTER9KGCMnzsxEBcr5A9NsMfrLAZXiygM",
  "key8": "3fKu7uG19EhRQZemJqeGgoswrWyRXnnoKKn1SmBLuZ4hNAwnKCYpn5egVBKS1dXWV1PMXBHaDVZ3aivBb3sbMwBK",
  "key9": "38pAvvqWjqVPs9ts2p2GiRcqNAd512THNunNDZTahURshcq7jj4UXx65sbJdFuWy1PVZUCgzAyKpRqGZdpFtvCW1",
  "key10": "2U4n2eNFKnmgUEgdgtavmVqCyvtQ1xJz5MsfVHxLGzARX2J8NW22F9U4c3ZqZany5zXFaaNjqCmLUAEWPYt3ENBz",
  "key11": "4aVw3dkZzUc2z2TkaF4hgyMP8nUgjMAkV76NA2pr59ko64XXKYcKJtceZXGyCc4HtgXezHh3CXK9nFWNxcHRsFdQ",
  "key12": "3z59hu1JtPBzQPUwh1JJ2TQCS6nTVXYkudFXWEnwYsCQYQ6yDjbmFiX5TPQZXGAGKBrTgj93i297KdaKyRTZyAZx",
  "key13": "3hmW52mUGmQy2jpQ6ZwPYCBpFbHpiYHoQwVsFWnVQaXKfJMRZSo92qp15ibsfo1h9NXXoKoWM2sxLvc38ZTdrr7J",
  "key14": "5NttTiKjVzdz5sD3CwKXVqyM8VM8nNTBBkREbx8pNHAXFFPkyYj4tUnYWp8sH6TdUVjfmFqP2V3LdZVZi3RmjrDq",
  "key15": "5zwGknJncdHYrjGZ5UmWFnny9oarT8iJSCGgKzqGXCEE2qeJqLu9XrvUuYxGt2TDqXEjz11rQZtsZsPhpTJmqRq5",
  "key16": "3NfZiqZmGER9CqstpLNxbFrjtcNuerum2LjGEE6tka5w1gFDPEfHKXqBQVCcXj133F45s4N4MspS44hSFqYbBfXU",
  "key17": "681mn5onWvxGp1PcFahbzP78xKFdnBudy1Yi93jdxsDB1StvwSUMygCpGEGqLkzmzWSE4wMGRpUXjsJULV7Samz",
  "key18": "5mPyLjw6DE5H12n4EBEfkummcvA2cGNXrPnnoBkoNCqdABVnKykjBkpjNKM2dYDNW57otrAk5SS9jw57KoXYFFUE",
  "key19": "a8334vNPjPRScuwCFpS8PoBx3qTtzVfGoqsUuMwvuSrk5xtN6zE2JJs7sZqanPF8ebmZFghPbG58auz1AbtwK2N",
  "key20": "3tLhg7osAcyCzevxytt2H51u8c1m2kXQRYhgjx3WaD2bRkmRVgPdnpo8PSBfGnbCok38swWFVjnyA1nUymKss7KS",
  "key21": "58QjokXGXfPpSxPvbwtwWjQUZEmQRPVAcHxTuAgbsPU8ASBn3SGhqk4uVjbW2vafVgCe3iusJT2HaFmUAS6RLZXS",
  "key22": "5DpSzaiMheHPE3X585BiGkyKMxg41hEChhJ9ySm6hhL3zfTSgPinFe2Tr2jdsefJCGUwe8f2MLP8SbQe1dEe65jv",
  "key23": "4rZZjoLVAYLoCfppVUY2vq2wkyp5wY9HQhyURx9mBZWADLpLFnHykXD76V4wPcmVphxiCDicqRhgnpJCGK9LnY9W",
  "key24": "4UsL4edx3ZRG8QzAVjM1fm6cDEf4dvRNSTMqw3XjYDftwpjKn7b3HUxi4vG988ywrVHxRr2mJpxf6htnu9czwwv7",
  "key25": "ppRdLQtUVXUvi7ECuRUPrmswT9CmNGMyB4Dgzbqi5eeqiqEdFFCxmAzTC4nAZMU6Prn67fgyuAJ68PD62oiNLkY",
  "key26": "3ujKMQNc7GjrtgQ4XMTLRQC1bjnitBo8zWySSa5k9HxsKjMGqtUKYgY5hPPxQbnMtX6YMZ9tCdxmEHJ3GP3H2RRa",
  "key27": "4urLQE1tZZSSyK8PPFMHxm1y7pt7EyDZdU3FoNuWhooPh1aTwSoHjVdYNS2ybdeWEbqG5T5VxLKpbewKxCQhky9c",
  "key28": "4RDeuKAc5y21CCnn8S1T6KvDk83PfNB2PeqTtP1VHy6XUdNvuuEWX1WuZJQRgRcNNuPqj65unjDANjSYmTSbw2ya",
  "key29": "2AGRamsB7tQQzMrdYE7nyWgYJ4TeA9pSSAssB4ZYQUrbmzLE4BT2duCHyF688H85ykDoktc7DhZqPUBX54f43ym3",
  "key30": "5kW5QHLNaF4skFyku1tbqPFFLQ7KcLvzso6eKBdPXJ2o4CrrSN2gZDEn9kTQnDuhWSSfuacV43hiEkgdzSN1GKJF"
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
