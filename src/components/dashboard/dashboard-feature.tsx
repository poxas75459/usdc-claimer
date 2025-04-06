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
    "4a4PxswsgHaAEyopEbvP8ZZVr5mJFNa3tKEYxP7mfSiDorQkgtcDP4VKuPGCUcLmJ7ZV1uns6pFBhPnv6eknsi2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqMPpD72wPkM9WVQhkXGhJjf9V3RhuTEauuzneUm6QDEetH2myaCZRShDfrQtJ1SMjjFkNmRtmJi8Si7BkRSjNH",
  "key1": "5y7eGkju8QWpCzBKupGejT4bPYzjBpYACbF1uaPkQoJFQxH7uwyvkjuPdDza4WKQJ3hpgKN1nsXcsi3WuWkHnq9S",
  "key2": "ecMWxYcsd2d9z1gSdg2KxqrVTZL5yUkdari87rFXdd7RNaejcKxnxRSdRjLXTHDHQfgBYBRzq4C453y7xKD62m3",
  "key3": "5W7kfKCxc9TRDAPyXCT9DRwiynvPzHiWSJbLPmrx8PxWcLf6iT7g7z9VGfbyyLZUt3YbsC8zU3A7nfeMFcAkrCda",
  "key4": "45UpZSaQWoEKeUkNLD6tFQt3UhUvXngMYZAkUjMisHhTdu2Bg3FLYYRVW5RcgB6Pm3FboY9oJ9YNFMpW1YL8rzWH",
  "key5": "47RuSXTyyywEqBtHDEbAoSV35ctivYN9HZKt1WRLSbxbFYvnsDia4MVy9RqPt1WrkF9M31nGzZ6Gixv9jXhLXGJQ",
  "key6": "5CtFAFYwMQ8rEUiustDgrBZmVeoNdDbQNsQWXtU16Fgn8Q26n8pXEfGtLemAfeb19gD2etFpLLi4opdMxa2k3HRY",
  "key7": "2i51Dib2JsgC615VEL3BFwRTznsZVVsAqZG8KwcAS84RhEtqKhTx1anALL7LFi8ihemHWaqYXYFoxd8VABL5r9vW",
  "key8": "5JL5SZ5fmE7E9Lw6a2SrPSWFJ1SVun73hU1vMoWyiBgTiA8sJx4iV5NzbtM4x6vs4i4eUESe2d4TkpyV3qKofi2c",
  "key9": "5crrPZPhG4vLzjVxrGdGiVEdNSkaexc4GgNvDmK1e6bPb9GLh8Gfp2rvExX4JWQWaGbhkwwuww8fwWRDivmRKH1j",
  "key10": "b4Z6bdJCfGbDH6iXQPFvzR2DhRWea9Ju9PYatTbuE5WX4fQiheAd7HSHkZeBMDQmHWiXSQocdaQQdG6Pm8M66ET",
  "key11": "AdRqSvcbwZBLLf8esDmbdnGU4WXGouk98Eu5sRdr1oeEUigLfiV7cLcsPsSZhNT8FqxA35PvymgbPdUk3MFcwiz",
  "key12": "639L46jjEpchqZzYfxJJfcj14WGZxp6Ltwj1qR2JoTCkcJUKJGVFQ1cTk6ugHAzjKnzt1c6v4XwLpSjWjv4XZmvR",
  "key13": "4f6Mz3ShS5vc4bDR89cDZhC7oY3Sn8DErYQuXkWAUNTsHZ8jbVaBVW3HhVEHti5NA1ehA3hrHFzBApDz23sFbKZL",
  "key14": "5sdP2cwK63kbdp3PSHNkrQpeHqsmR6KMUtFo6jddmgw7RRqTPs2Nq8x6zu4nbWqf9HdvfA6QUWVGDEuqWMScufkM",
  "key15": "H7ZpxMdRsoNa4ukAB9H6fDRkF131kPsPXmN2fAB39mtvAUky17QxXKBdpPusZuTG4iBUmfXCvwE72BHk3iEkNyS",
  "key16": "3KwW9BunuY96qzsGLRYQUpxhF6wv455nWT7ui12ZCjs2z9owSxh5H5an9QnjEJMwkTG3fWE7bfMvgrqEfFjaEYQH",
  "key17": "1bNfEc5FTrNMXXsBL94CrLPm273o3wDCMUR5y33UBQXn4ZEChVgY7r9QuTg2CDuNe2fuspsAiHR53FckugmMCuz",
  "key18": "5KR3gGp1PzfeFC9uoHozhw9iCrKh7EFGHCRRBRzncBUsf3C5HudpxVZgx9NCe2iGG6uXrzD2aJTh4bbyQMADLh6u",
  "key19": "3A27EZXLPjCDjcwWcFhFbR7kd6dM8CvrwiePL4Ufwk2pEcPzuiZAYUGzgRb5MwTeB7xYdxJfmSfRbwxVq1u41A3H",
  "key20": "27uqx2gbQVCu3vzjrQD2MiEoxUkz4GKqKfpLR9ihEJRf5kDYwzGUXDnEadK6LixVszgQdMAhe9cJy7wXucfojCuG",
  "key21": "4ojmFYDAqbqfVMxac9LeZTZZF4ZFMN18HiUDaCj7R9bsGwLHXRdwyedzQC8YGRdzGsXeVH7EkCJVSosZZrwcSMpB",
  "key22": "2XgcuvVBCG5baEdaCGcExJHDsnvc1BRTvphuxk85P8GpxRzyqhpFwAS5aYkLXvcenQdzGWQR5juiuGfd4Aj6mGh4",
  "key23": "5UpqbPQStCTzAvyEVTRpENh8EtdvyJrbwYxGTbtmsPK5dynHyq9Dom4AUCp5jDigjx6ADpCLhvWeZixvUVANHRHv",
  "key24": "4mZaK2TQdpk64PCvoayi2Biau4AygUJ8Frot13TJhxCZ8oVqmDCAQGKzSTA5JLBZmqBX2kRLyNxEHJa8qcUaYR2u",
  "key25": "2gqkD5jiWvB7qhE3QyTgTZZZ2Pyu5vwvpvWns1Ym1VVniCek16Zd5S6HoFWnm7QD4kzFeqXKB9SMv7kfH9xUNJAu",
  "key26": "5qy9JzaMqGD3NErvHL7WYpGSxeWGw5i8zPfKJERjgZbpcaJioFjg7zUJDPFqWEyQE7LVwpGXUnw6wQDgMfUo5zp7"
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
