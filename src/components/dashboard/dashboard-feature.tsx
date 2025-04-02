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
    "3DCDuC59v1EQuZvugDmQyL4ECUjiLPLZdAJGqzGt4aikbMDHVTFtqrf9TCRYVVx5qN6udRGsV2M8rnzSZ5ALqMar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3ePZMR86UiopH5NM9ZGFfmaSsrQwvmGb1iXi9T8Wmh9nMcfd2aQQ9F6v85tGbDzhHKTRyfK6Dk4k3VkHcNesCq",
  "key1": "5QZVCxqWGsrQxxpTEtUsXraXonEMCoU64rMxA1diJ3KKfPFJNhpcDiKReLs2eurSWSEEqGTCTRSBuHTSUTiWiekL",
  "key2": "5pdVwvHuW6Uk43DyY5ernvcv2QLk2XgznrFftKdHqENaDq4uE9WbxzX1WxeBirYE8uucEPd2CxvgS89eBJeh66kf",
  "key3": "2MdSKRReoJxJM2ZZVhNTVvi6udGpA9JTJKqECh6nJMPZNQjURKvvi9StpALWamE3kpteMGsXFDq6xENN8iqaXMWm",
  "key4": "35CsoXWoBUG6XPsvnCR21dzLvxLLK4vcAFxHYMKCyYUwrj17bJ1kBJqcTgonzjjS9FpuzY1N6A3LEYqEHprupXKg",
  "key5": "2ZPXjbGnLCtMKDzHfBXk2Uew6eWRvzvKC9vrRvHQbiV8vcPvMfKwjSznNATWFPiigBhHxDQxfopv6n8XFmGFM9DA",
  "key6": "3xAgRgVaGj9HBPb7nyL8nm2SKRJHK1ExmE2EEjAmb71Y8fBpEkvDzmsGuwSn7HzKFCchydzp2NMDp3mQcnWMsL6v",
  "key7": "3y6LtSUkrMtqLabGK3kU9CyfXAQh9Bz61RLyxsJedi4DbF9xXqscbNAoYwBGy62eNpAiVG8UuKxCFwSdvozE9ryX",
  "key8": "3NpMJG1XZ6vpLs8fpHJaPCFWo84Vm7XFSUw1rzSu8LdaeLoabd56x4eMkzTEr724mHijwNbxRt5YjiCatXAzpoCK",
  "key9": "5xLmiuSHWTvhpybiD1UVeYRzDhagFzQnLvLURWFUiu5koRAMGJWqkUKjeyAMPSAtF2rCv9is5hDVeCTxnCRFLedj",
  "key10": "2a6XVPFdppCF7wLeRHApSh5gued4LEL42AZbD8HL3SLQExSQX33wiXaXjZEigMrpg3j8B3CuPbtFeGtkTgZDacdJ",
  "key11": "34XwFTmAxejLEKZJpssXo1w9RoCScURQwd7PHY4G9tF8CpB7rw9QjNeWdeeSfVX6v64yYa1d3BXqxuVEohnz3uSq",
  "key12": "5tJPNbwXQfBD2TK4y5hUht9XtWQNv4vHnisSaUX83U7hHsxKo6mQwDMNv7yr1ZyXzHbKgAnQYqFZ67fU87xLQhUN",
  "key13": "2AnTXHrHBfNfyf8YXioduawdD3K9pd6qmpo2QcsNVBDn3NANFCsyt2VMQ9JTwjRUzdo7H7VMKTVV8tcC42xSj5Pf",
  "key14": "ouNEKPzxj1FA9yj3YEKPMuGGNHD1pCmqkEopPNaHK6v1nYaWjm8iPAmoEKq87QHeZ9MxdfaTuDbixC8bqmAqj8B",
  "key15": "4iG8avEfyfx1iUgMDmQe3a4vZPQvjT3SQpmXmmXk2GvzvoszcRukmnbHnvukeWY5kZJMZsqzvTqB5eKTAqSgVF6N",
  "key16": "5WQkgjrEU3XJuDo3yzCCzG85QEEab6cicw371vBSNaih1542LVnKMtL8J8xjKXYRBRmvkTcaZF7NnMJYnG8gx5PL",
  "key17": "2NdKTjKuuEGXRXL9y8XJcaQBa8M1TPtQanNSPz5XvZ2bfj6hJ6LVEVV5EtZVJFQTwVvTmu6PiyFf2Hm6mHRYGRjK",
  "key18": "4xrV4E2CXv2nfFXn7x1DCmKm2V3XAyHMUDZZx4q1s1u3DaT4eBXTnshWmVJpVkfHdCkzDp9nEBa1ZkHi7SYb5cyn",
  "key19": "oxkbbNgqt9K1ak6DPGoLfWCgWddJ7Qa2uTAMyiqfifWR7GJtEAabYjzW323AvjvF4p25cWWorx9uwpKGb5pyAgK",
  "key20": "2nQesgS1U7CrZhXtdfPCZGDiC4rQzSNqQk6Fs1DvKUowsU2Hk6AFecPGU87twLrQMRFpCSoNyVDjdMaRbRGPP4oQ",
  "key21": "3f8qgUBhQNZcrWj5rd6RSpiEZsnk54CwNUMibXmLwnkR9i9WZj2t5udwtMEwoAB17TnP1G7Xs7pAQpjL9TGmpqbC",
  "key22": "4ftrDXV7RKC3zX2iXSdY8E6kjEYqbQ6oEMKJMWVbWp3w3Ri5WWWBVvCNrkhYgJpdMcmPQc56iCyeoJ8t1VRFJUoC",
  "key23": "5QRnifH5c6Ng52uVUUmcnz6igjMJ2nSbBNoysb1LP2V2p9D5PsLC96PQqzdbqyqRjQDqG3gqmgkSeSqRVcCFv1p7",
  "key24": "cpEy2AfEUtfq5jaQtRYzPMT4NJcY6s3f1c661kpSgs2cg2DbHSPkMgD9hdoGrNDGibqt1bFgfhpHcGLQTvsMSDA",
  "key25": "28tUUaohzc9eUprzco3vQHjhXrnULNdyD1ZNR4tEs2chxEMStccsaGt63Vkn54Ea6pgb5GbqMqJ9hUVo3WEinAS7",
  "key26": "354JbKVtpDtHBNfRVkjvfgxjKM8xFWzKQrzoXAJMxqvEqwXHSCoPh9fc35VyHWs71dKGizuKfA6CmvDZUtHDRARo",
  "key27": "bABb5VowvDjvi5v138Wkpd5TR9NwKmDsgs7D7y8K4AnKawa7jDzbxckRHBfWZpjAWumys6zToctVyB82Yo75ufL",
  "key28": "31TLsAvRVi937C65yQwHRUZA7massHTpVMv45tUefgDFS3zafgXvU1TVS5m146gs1amKViCXZt5kyrKm6LWPJu2Y"
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
