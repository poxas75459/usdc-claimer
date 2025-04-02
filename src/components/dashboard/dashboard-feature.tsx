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
    "5ZHAHyeaLpftmken2T7fLgBHT4E59aF17CbXLJzpgQ4vtH68XJpXJYHVLCqXUHemG8fiQa8hunnocKQdTyYViKXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szcax2j2cDJX5BQxXQvAiqhhrPkvGziTxd2uL72TLqRvRpL7syrVbvtuGkAvfhS4KLBkFLgiDa3d63UqKwbLMKj",
  "key1": "b5sbV9WUfj2RF4mYxHPWYTV7fkfEkZv1AxzzxXfyNVWt4bw5KhpZpj9Cz8WxV7tn8TTxf9E1CDWLviTtCJ7yqEg",
  "key2": "5XTxYT2SLSynnwiCMjix8h4WwML6BH2Znn4vsAEefEQbgAZbpihLarAktf3VcyihbpEJkxrLRoMtSU7n4kZ258Q7",
  "key3": "2Ye2fzLyofexBd4koaR4A3szVUMHF7QvifKWw7WCqxnhYVb9szhvvujQZ4kSev49XcyoYqBVr1QmzFZxD4L3RB15",
  "key4": "mfKDVkLWVtrPffC9mSw7Dvu1ijY16a86ZjsZ9psoMEDoe1Jrv3SLU9s24pd4e3piEuqCN6CvXvXA7fPKDoYdHUE",
  "key5": "3u64C2KewCMpxi18SYKSWswEqPFXdx62U7DY5iSqPC6Ny2izHE1VbcuCoNWX8ZqMx191EBLDtAa6WF4xkwowwss8",
  "key6": "49Ard2R92RfnuMsBPMsQx6JhNhQQsdTyqJX32nPf2fXc239nntdor7M6e4gduSCJceZzH2PVixmYcfdhrD1W8mF7",
  "key7": "5yCa5QYJqpRw24QaqegWHMSwAKpG49toeQN7PUmfWXT4rf46Uf7mEEbNBCWzv7ApN5k86Ve92sizo4KuTxmYpomK",
  "key8": "3WmZ3A4fVkAtoPDNCzkvR9ukAuByfFmrJLSXdxF8LJxPcLXKFDpFG6QR4UdjekA2UVA9asabSQ5yrXUPMwVUjMjA",
  "key9": "4ejTHwaUTKxS8BvndHGV1hcewE4LuX8H8tL2mRPShF4esPgRFmiM5X69jm2s3wo3jWCKfQntN1SF2gcYH2JjKBjD",
  "key10": "3dJHryDVrNiv2XukN5bBczHLavD99QuwhmdL5eBDPu78qsSFAjhdLoXQ48Jj7Ca4j82ad6PmN5ATwvELkz1LG976",
  "key11": "3KDG57VpfeFKnB5iqPSZHe7DdyWEYz12qoMugLmbELVuhFRXYmkGJPU3CgYmpTHvUcExWVsdAQeEy2ujH1BEXLQm",
  "key12": "61NLDuqFpznukov8632oqh27WiDXXbeWkfKphEU9xCW6Nk3WJ98fzMrpfvU9LFPZZvwbHBdL2wbYvb37XSKd1ZA",
  "key13": "2tWZbz6yU1YmwH3Wx5uZ9QTUDNjcBUR4u3XhEGPvLPCaWdNSRyhb7AkSdmDj5jiPZWSY1bwV4apWg66CRhyGbBsy",
  "key14": "3fgdhPVDHwgzYH8Aeybhe6TXZWjkxTHswdL1SFQD9xU44nuZAvPMgL5Rp2n3cWUwqXpsf35LHyrg6eWm7RNbZ6Dq",
  "key15": "3h42yUfHgmWEhhTxSK2CskRQdyJHpFpRumZ3JGn5thkwp2mDYsMA3Eb6o2sAzNWARwU38vKk5uFMs319iS3omYmo",
  "key16": "2bRLpEuW5TSZpvKbiVRZyUyAgJ3Uz8gA67XHTNgMyH5KLb9CpYbFVfxV447wJB4Rdek5bFCL5XVqdpKTZu8ftCnQ",
  "key17": "3qVn5d8yeEnDAL61ZJxYw9nriqcpcXnkWGPQoLseS9Um7hngiKR9unmRduYSeu41P2vPBGmvK28dLkz2JwXVqnVZ",
  "key18": "2k5pmKXAD2B98hFSh2nZ5FXYJ5WuEmD7uM5dJjhexpkHynbmTzsX5oETSteySZuZoWsBumk5oxCx5x1g618oiQPL",
  "key19": "2PQA12YaMJm1DQibqEcqfLgePKiRfCCpvuizpHUKKGNmAXYnRdx15w8C7DJai16ksFeaGYhT2v7gr16mE1wLJfdB",
  "key20": "2H4qduyajwjGWQ15vHd4HqC2s4vpS56XZHbhdv9ZrQ6Jms2sZS9pi5oz1kYv21mj4UUpCWVmL75m5zQq9jq3ae6j",
  "key21": "2FQtb5Sq7rXQ7qt3wNiRX1Ukhx67Cfg39xoQfXQNQqhij6AYvM6PPTQ4zSrxvs2NVV8jtLg7EavCQhMuiooLN41x",
  "key22": "3w21Y9VGUPxSB9tj6i6CGHx4S1PGHijbE3ExZ8z89sZM6g8gByxs62Tq81YgEh2P75rkrC1guFk5DtcJrqCNMnqP",
  "key23": "4GJwCbmKnr6kGrqqdGyMTeRTxp8DwC2aQ5uwLqiW2HVJor8AmBxuSY46dRtBv1GXDrMJexTNyvVaNk9EtS14ibcP",
  "key24": "5qeN6wfDb7vsNeZW4s9S6GjM41cqhrxQSDZDCNuL4WDQL7asK9A36oTMso73mRyrG1zcjRW76cBYTW4nLgAAVjZo",
  "key25": "4tSpjjucky8Uxc4gMxWFdtZPA3utt3HrzbJkutroiUfDKk59LLJAs8cmXoNvTgNsxmhYESZJrt9x58W34E2wC9PJ",
  "key26": "2SorngeEzPabWQeJAsarnu73y7k7TMvMPjZFpu2xai3KDvsJtQNW8H5zJRWtdZxu8G4PT4ofwB8jMVFwaLuJBJRh",
  "key27": "4PJKoXUEFYTpdNGqEEeZbfVunnuhtnngZFWRJcU9ffNwU5L4CZBBrsMNfaYqv3c8MnxLdrPhwsqEpW1rUrLwsfMe",
  "key28": "3weV9PxQNFn1H9rPYTwrSpJZ82VdiCQdYWxuHfa5Zt3uhwv9FYf3h8FM9BYGpkwrZB6bF6X5zLBVSgdYPbAwx2zq",
  "key29": "2kHSxDwdg3WktzvS99PB3FUsWYGE7ik51Jnz7RPYcACSp4ZVELGVj6vQxPo7DdoupLmWrfs9G4Ve6QhDWvg29Ghn",
  "key30": "8LvPzTVLgQNTAVatwL6gjBSQxueTeFYcmcipGQ1MFEb9AoyR7zbnvxssSW3EE9am3ACdnduYtd7dBVNbfngYTZ7",
  "key31": "2JqTTEphyDwcSALa3yQTftqw5YbD11nKbc1vYFbpNJb4XnR8jztdHe2rmYBUmZu4AxAPfdpjWMr9GLju57MZQf1c",
  "key32": "5rHjxsrhGYeDA5gvpr7nH3VVkQohWiZr7if9kbhdsf1bETs5GwyRQpiFNLtJAchKyR3QHztqw9xMg3vxZwze7oAv",
  "key33": "4dK3v3Um7g4M95hQ7FHwvB7Fenxh5T9SBrvGF9BhhhAEZJW76gfbvdgXMuJG133s6qLqBM2XamhYkwqUqHCTWh8Y",
  "key34": "4nSPR8epmJ3zrNi62FnaRDkPyMcYYwEVJddYS4ATeortJvGoJQ9Fien9zgTWx2DS6qGRURtQZvcq1pPmB7wNGZ7e",
  "key35": "bbjouK53k5WxL22TjE9YSY5C9Sfud9AVWbEBrymB3af3ivP4Q5Ez34YDrpb1r5EFU3CC5C4zkdocqrTKE8zgo9X"
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
