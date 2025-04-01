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
    "pJjwTZtnxeiaVSrrxZqMiktFPH2tYFH3JNV9sGkU5aPx1cNfjGL2gaSzwcSHeVGm1aHx6RxKsaUQxUT7Ri4Wd5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XeCTXyrcEnN9L9aco3XZD9JqtcreFynJVaC7mLoME6N433vnZoX1jNFQnhvyg96u6S13GrKZjA1pQLE4YifaERj",
  "key1": "2LfPxyfatcUbSheeLrKqNdHGfbojWxkrM55TdqkomiHiXwdua6zexdEzmVfjm4tD6o3AJAYLEtGJapT4NiT6fNiW",
  "key2": "3Hpk6VUhjq4m96GjDhQyAaTaUBwJiAZ313tfLiUkup2pe3qacVeCiNSByKWxifdcvGkzztvHzMHDyxfTCDwyH7o4",
  "key3": "zMPqJMQMixQftnv8Zcfz8t6mkmTAUQ6eVzaZpWWyeEwefSf61n2yrpfs6yMTdnwRZQkL74mddqP58NLeoTPJGk8",
  "key4": "KYJvvn9KD53bseDHEZA3i1sgoeygmfsJQb6MNqW1tqywxZzVDEHdAPJZ1XXvSDioYtUNTSFm9joHv6GRtLUQjAp",
  "key5": "371wwbYSmp7jmQ4jmLuXS5mLkjTbGRkxq2G3QcizH4rH98bebVuuTfdkNNpzFu2beGhUawgyt62sS881rVMdMkzF",
  "key6": "3GZujKF7iYFpcnQ4HgCMBgeyVn7RR3GK8RoRFfjdbUVd5CTPvKRfVj4Uw8ANbjZvpZriV4U1RbaePHeeZoL5JGxk",
  "key7": "3zsypee9dRqW7GerArUNHEhqRdkapTa1zrBRZ4jY1kVSR5uA4nU9k9zYDrRzHrkpDCumGFZgtrGvoUq16chJneUB",
  "key8": "3SuFTL1JA87KJLX5c5N915wKKtNZLF1vrXU5QK2sNUhRS8gtARZuqjWCdZmWjMKzVngdYemT9gfyKCZg9XbfZ58b",
  "key9": "47rHngep3U334Z3EBSHec1hbUE8rKkdHHgzNdip5U5gkTFK671mJPku35L7XLz3X2cD7cxqLnSYKEv8dYhNVfz74",
  "key10": "2JVP4pqWxrEvFU3hdbxnbxowxjfHRigDmSrWPKoTHU9Fhqnuc4a1yc24iiHHou1LSp4KbXws9twonXETjRgrRXqM",
  "key11": "3Zzv1u6iaMVdrJHrzrdmxeyTRNG4wfPpiZsgKU1dohWvme9fvjtJeHneAUwU2esJJACH5o2vKQg9UjHfmzFuKYdz",
  "key12": "58AMYL8igHPe7dneEPTC9rwniWn6myABRQq9RnFF5zVi6FotfmcX2foZcJgXgXx3K1V5M3jqJHRWpbub1ZyqNYjY",
  "key13": "5EkR4xdgVqEzJXLUXj8TNjQyq6H9wgbh8LoR7nEK5gb5h5sttfCuSesbDFSYo8ZQzWRkFCaLQaYDmr5vaGb5tNtC",
  "key14": "3UBSVNYsUbGrk8BjzawzTSsAJ9dZznTvxz6N86mMa5TXUijA5WgMdMsHTJAGf5RQzqjXmSi171ujhN4GvJvqQZT6",
  "key15": "CZqnt9EWmBSMEPkRKLXvbrP1rWgDxzTRd96wSjjpk5DH8hLS9nnFiyEanBpP65opNsKfZs8UHgi5YpjPuDjnNWZ",
  "key16": "pw2P6rU8fvs3BpFvk9NhRH1p4ENjC21EDfbuubkCZ8MmhmqLBkkUm8T72nvB5g9WqmMfzyGZWBw7dTb2JgqnSHP",
  "key17": "3BByeMypcbJA7Vi9GxfTP9cuHSfAmNdTsMa7fVrno5ez9ARc4jw35mdea6NEM9uswQM8Gk4ELLTKwBZhtNZhFGG2",
  "key18": "2g5keAEEhvhP6ka4D6sKey4Bq4qPuRbL5JtKxQrmfoupn8Z9CLw3zEnA7w4PNxFPhRzfjAgojLVeT7nPsEGy8SjN",
  "key19": "PaH68PE5Ug1VFM1KQiBk6grXvY3k2fxciJm1GAVyQzbySwQ79kGZKttnU3qNxVxJGG4CQKCCAwqBqQ2RLyC3c6t",
  "key20": "3xHeMvzaRkmMGVWS3ZRusUKiavxf9SHwrYXaDKKpybocCd6VAemdzbTU6oq3vaz8noaz3BC4rnL1Kw72ufJEwDc2",
  "key21": "2rPAo2pHaMrntfkCa8WTL7AKBff7v9fYuBaztViZFHVT8qvKSgnfSaCsyFz3uAQU6xNt5iGVr6sVk421RRKhAhu1",
  "key22": "5756sA4KR9t5DjvEJnv3eGTs7D4eRWPw7JJkd2xZdDZf4Pf7FeJMfphzPe4UyXJBhVCUKLLRYJJ6Wv5iDCDedmFH",
  "key23": "65AkMe6rsB5dJ8HF3LRSabcRJWKmoSMCqPqB31XNtMsAPv62k7SkDraEGiquoDZYeAotU6h8n2nmH1rbj9dMuRK3",
  "key24": "5zi3TbLJDZWAJFJJc6apvx3ZgXLSehRogQscdTbfjwWw7yis2cZTKBvNj8ao93xfNDFsVNALKeWxA5YN6TWYTywq",
  "key25": "2LwZ3h4N8DV4QS88dqXwwYrnvUoHZLEpq1PDaxrow8QorWQvFvgiHcWh6UdwXRfZ3VtxuszpjrGYUTzg5cCAXHus",
  "key26": "4sjAP8yy82eWAF5wVR6cixaFDG1fjL98dn8PNzNEZJBFwj7hMPfkUHSKCemBPKbx18LsG6vPyr6tefVmeGAinrLR",
  "key27": "61UaBxE8EAefuChgnwUoPss2qgftm9R3SHhQUvdYpsaeYASTigpDVymUeRLvWT3U2oypiZy64rqd4c5u3Fnz2RcT",
  "key28": "4t3XAGZj4n1PcN6TLNxTbvHcbSQeLhBGUY88efzE37JMMuFaZEiUEgeBhg7HNAB7ndn2fXU3WGrQhLd7kCW4hBzm",
  "key29": "nWmn8zvP2UrPu5phWWKBwVHK7655HMZfXofCB98AH996L5MDmQyZwBs4fQdtJ37HB3Yh5gbgjRniptUQSmz1ruj"
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
