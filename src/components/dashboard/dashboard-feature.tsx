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
    "3EDmthMRjFg2KvUZ7LFA7yreN2KuFJQzwFsD6FBPccpwGcaoo5xeeSVyhSaFZV1mjJ5L5ADMtVP3DSs61YmbcR14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XXesfUUBscY33qkaExBzkbgcqEUdPWRaVzifU5VT1gD974PkThwZebMZ7X1LVojPTq114QMD5hzurzyHR7DGjKc",
  "key1": "2M22ybetW3bY6x4fsYiNEKX1gUxNKDNwRm1TT6K5NqKZ73AGu6jQgBai93nqeUVd7UnBxsgGwTceNQ358xKKPnMy",
  "key2": "67HN9uvKov1Pkpo3jSHtbvpp7SD9FeuRoGhcE1U7WsgQd53aP5rqoRZe6uwkav22wPM7ejjMYH7WD6FJ4T2GExep",
  "key3": "2Qw8AWEw964KE6J91LKQDBvkDntyy9VvH9xWdFLduwGcGyS9J3y2ojrtQCvcQHsuLaLgN1xnNJZgSg98LZMMcZLf",
  "key4": "2VFz23QpgpxsjEAkhoDiPPocExRX3haBSVFrKCunoGKoB4keasTyS43yeTdTNfy5AmTCgME8FGafb3J1qMd271jW",
  "key5": "2NLRdGpum2ipD5PGHBrREZMkWrZgiDn33zKMBpK554E9Lt5JdrXe65v6U2LUHMFGMFLfq2KgyMbMQes7qDypoaHy",
  "key6": "59tfuiTdegvgw4aVGoaFB6o3fx7wbCo2ds3HkQ3ck6pZj2DTEdzp266rfTVGyg7n6AhXCzcHEfXwqRx1EZnsSvq7",
  "key7": "4U4UJpG9qJ1kVnaXVBDZ4hKWnbs33wCm8zRAnUGZGE9nLRtBzVJBWzFeAFugdbkLUrYVj6cjhpQBE1zxCZFCneju",
  "key8": "4eugSUSXYzEGy8n6B3QW9FXqfUky3gwgrNT6HJkMTpcCJMJLQptNfo3a2p1SJVWjPCdSFpTQXU7BW1pB52WjXokx",
  "key9": "gTgtBpLSDfk3Khk6sZYafpysu6kti3xk7KfFpozASaxKytNAsfBLgsWYLcDhxFNqkjr4RCckRK9V1Q5Atf7mjQV",
  "key10": "2mer6wj6iPBfmt7QqmBNbke8HiuuixvSoTNrcfhjsEkEDMZJzhA6usXr2xvMsVeJNWEkDnYQjFkJigSFQ8ARkLq1",
  "key11": "4cs9RHSGn73UEksn52TG6HJzHZeHAP5VwFyjtpn3o3JyAocNTPuQKCoszSXAJ1BiJpeJ7SW5X1f3Lwgj8n9YpY5c",
  "key12": "3FipEWSVd8ZtUebpthrvhUPxxhjNynVQG5eZUy9EWGgCZwtg1jurTqAnhf3KjdgGCtz1S9yVxjDEFU5u6MHiTSfZ",
  "key13": "jKEL39S11H7HAioDvomD635x4Zjos8d2YHRqjB2eMqWUKpEVBoqxPLKZtLd4dKvwTff6TAy47wXf29veSE2xfzy",
  "key14": "59C28EBgaTkvYuNwmvu1dNs3zKkq6UU6DKuLBsV4oDaxU8a8WrqMnAimXgWp7JNTT3HhhtSZMDRyYNv4j3TjAR1d",
  "key15": "5kVTYFaR6EGTFgMidFtCSxmhvzCbdZ3ZC5GKL4eRTbmEUG4czVyGAkTeBgXxRLtuf3Vzzy8gZCjbrL5Kch6jxBFM",
  "key16": "5q8LEaxJ7wvJyqx7Lwf6UJS72CtPidnjtiiPu1rFaWP8KyJLrq2Vi3LCcxY9AEuusrS168u6gMZfbQxpVvF9o7dM",
  "key17": "3dU9bSjS3j5YC8AdqJWTYAXrNEquZ8GspEJGVS7HA8ZZibkP5kjWw1FmMnt7QNtJbJGae9YpEuDPTnJBeKETPpTi",
  "key18": "32EBqEC9PpN6HSP8YQwLwFmagQPa67oneHaoTnSpByaZoWZ7z3wvG9rPnEif5wMJfuegTurWPECs1sf5tCaEZag5",
  "key19": "2F4tFBR47eAttfinv1bS1qCT8PcWDrSXXGDveTT4gUFMi46oXXUZJAvwJE5K5bDo4rfPPjxfSUsdHoHTEikRX4Y4",
  "key20": "2kKrWDNBMLKn56tTETgq654GP5CnvKLBfLb3Str5ie9H2K3tQrXgXLn5R5NjSP48yAaHqXycDjUqPijkT8vLEMKy",
  "key21": "5SPHDwansBvgEW8Uq6iHktdZstTJdq1zwvLkwSYNTjtqrJ4CHgQPiCabBEKbGa5VGR44mhRb8YCBCvAsfdBGBymJ",
  "key22": "H8RkSdYPwR3b75dRqnf7TZiSSZaFrfUGKxmJxYwMnTYg39dtgAzUm86pDjFbvpcLjSkfVJjh1ZL7RDP2HANcSDm",
  "key23": "4WjASjDdbRwgBL4ervibgd8yKhovhFdopxd9ZNq35gsoRweas35Neka1TNT9fjkg6Akxvv1u43bg9FmKPFdo7Kpu",
  "key24": "4uPc42VQSGgmj3QFq8iQz725sXHcbhej2sn1pQLsxAKecwMF99Brrk8L8Q1Va1uQZ4tTpym4x2d1h7nJ7fFfkW5y",
  "key25": "5YWHVwZYgLgX7RBdhxnvA5HJQXciaJNNYN48mjcGQ9WWFq4R5ZhUGErJXTproLhWxmsgKpoTZgtEy1bN26Db4Nwc"
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
