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
    "64fEMGEHNYTK73XLs7eJYid7GbjZTfkx1982kap8HqfCTSTPs89Kynkrzpi6Lx797582eFD5pBdTfdA1CBc85d3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEQSVeNSvU19aVFKeYpvHXGhUgWX19iU7U8vuWv34riqP4azvRtCXDMxGMDH7jcMKF4MMHZ7y48wcDm3Np1UvpL",
  "key1": "5JmbcNkcCd9DWe4ewViKso6zjd2d24M7QCrLykXWKNpWvYrHExcNXkHAcdbw9JQ726tUQifaUot4LjXBQZCGmszZ",
  "key2": "EWNtG9URE8Ac1rDfnZKnAAhLmxu3RzG78CZRdCsvSs76dsRLjy96eZHC4v6cCATPdcnYxUEhJd8qz99RWZJ8rjE",
  "key3": "5UTUzL5b3BKtCXUgQUhZSCLnuexV2hzRtwuRQrmdi5jdLQbHHZxoyBSKbWPp7pY2ec5ujKZS4gd4J8qQ4kqhEC6e",
  "key4": "4vSyHzqKCgwzCDLxv6HmhD11BM4FntfvV6hUdZsgcSPpKbJgZemV39XtK8ZCYP4gYtCyk2FWTszqQEA3WLAERNnV",
  "key5": "33yWp46Uf6kmKepiyN4v5A6GAsQdcn9269G5M97KyW1JG8E8eDFoNM6vCCqe9Qr7E2oZ8Upttece8EfVyQPT9yaR",
  "key6": "2bPcJwgVfJsN1neXF9jNuvU8Wa83DSzB8PZJXeAmY1YUKozULCq9tR22GPTbTY1dotFFrKEC6XXbTtScntd2uBGT",
  "key7": "2fNawtE8QnGG5yLyFtTwvsp4ybkvmtnQfNgXLH7wHix87HXFhJpeTh4GJio7G3apKJzvCuKyvtJqk9Za5admPsqS",
  "key8": "37hSTnz2Q9gB5MyqS8XjBpwmqLNq5jmuyAjS2DKy2hBavRK3MAhJQGsMUnHegq8YB5zQKRVM3azDhJrL5oDKHKqe",
  "key9": "21zxf2f5EiDGki6Vo3kM2r69m2jsPGeTCE5ds82NVZMp8T8VUV8N1828HLGrYR5HuEe4pZjmXRx1D7H5yZ8iFmqH",
  "key10": "VVRAkNSxPeuBZmxrgxwzDUukWsHngr16TVVTCcxcCqdrNNuZfPEwbxSNhjw6MmCpD4FRAqQPkMx6VPeSwEiwPFu",
  "key11": "ypKmfZtgRYpWG95QfL6x2B7FbTzze2XFBvMdoc5BAto46vHphSjRdLzFdDv1UPWdmHiSF6JEfg9SwkzQc1gMQNm",
  "key12": "2K11827gu1qggEfDnBcJQozUy7QzVhhdMDrfuMebLbKQWZpK5cdSinp51ueqR4y6KoYpCcS1LzTWUsoh8tVXuuz1",
  "key13": "nuArU6TH9QiZH6JAEQaBGwtczyuMiFM6ANbWek7dscgXB49xtzf7xPbqZwvTFvcMn4pcRqvAdH2TkdwpMnfJmjq",
  "key14": "4h44iwpKag6Nk3tLcq22Qy9dXVeXH2jnzofdNmQcciUrMjMdG61PDK6rqG73WKevnD3rJxKUe5AeBdUifqAtft87",
  "key15": "5zWyEPfgkoFSXwdyTs8NAfvRTKnvMgkpi2s73WtAwGzqAYF3rT8FiHSUpkZgDQjj8LfPWaNUPjcH3JdX2mWZ1igN",
  "key16": "5rkrrsJuwsVV5du8pPDqELNf5SfJGwvMnQho65zCayxrSSYvr78baUMsHzMbpPaapcW11VtfJFehNRd38GUpaioq",
  "key17": "26stx4Eko3sDbMfWDZmdi7TWa3LtvXjjqAq3o2GisYPmXFGgJVSbFU5qZ3qMhRNd4TAoZUdcEFEm6PWcXvvPL9Jp",
  "key18": "2btDm9yVnXtZJWKWgpDEDptz3rA8HcXMBePqY5S3ZewZD7pZ7sBisVDQ72ygce4b2qmXXK1aZhFCp66HzXUvbCWN",
  "key19": "uLGfYmmdkrPSfPTPg9nSdd4EmJyCWoMHmv35jDLdDcdsT7UYLZ1AvPFNaqoTey68rZb1G894db5mr1vR1LFVHbg",
  "key20": "2ErSdN6Qz834kaEojMvf4kN57NNx9XnXqejM9TkaKj7zNszvMpNjQsyDYV5znZbbBKSCQHBiJY4BsdcVTpY5kKye",
  "key21": "548GeQf5TJzh4hJNxoHUXHLmWKqxTWfBPBhD8S8femeBmLyCXyA7cm712zqP2L9CrnrhokjgdZtfB2HSiFCGPVHo",
  "key22": "5xHASUMMWdoEVCSsegncTTamsQ3h5BrEmcerY1yjbn9sjXCisSxfcTwGCcPMrSQ5XvJgkDfCc4U4piMkChmnynNp",
  "key23": "2qtaNpyRX56GhsfEoRJRQkDhpMyMFiXENFLQ6TS45Eo65RWkvyqTHjv8cyQyk86YwdsTiV599twACPUXMuqQ1XD7",
  "key24": "3es3u8ciuq2M8rv17J3Ahv8cmnkyW9vcpDp6WNc75TFvsYXmGNJbDJVgyTPSRsc7dn3ziG3TDSndyCBG3j95Mvhu",
  "key25": "3qPFuZDVLVa8o734mdTXwvLE2EiWX8cxrZPMwho2PfoajnEa8YBmuge9ABp2dXh5Y5vXK6oJnmzoomLhpQoGcNy4",
  "key26": "2SnL56dN1Fc3nfrjpcuq1zhAWXskzvGYQpLDN1UruW3Cprh4M86cXGK9Bvq2YdUz8JKKbWorWMnkyzYMcaZtTsCM",
  "key27": "3RESecB8XkPB4zvYp5o3Afe1ZnFeANkdxVuNQp2QNbhaNFPbEinYmUTh6pF13MFP9NaZuZWm52adtqS5mSZDTkGQ",
  "key28": "43DqrhJFmP8GZzPGNG5aQzg6hWofXB7qF6LvbfTPkn1pA84x8EFsrQ5MgPCJQs8fTH46KxaJy95JCa1EGSveywiD",
  "key29": "67q4589yDvkGZ9CPtyw7gSdP62ngv3m5uRVxncNKhXBYRrQGQZdwrL4LA6fsgcS3atZ5Ko9RKa5ExnWyVnJs7ZN4",
  "key30": "3s4Ntnoxe8LyAcnafSX1FbsZB9zHg9yQa7LAb6kUM4hrjgPfY9dUkJ4ZGdwFaPbCRXvAtymu3pXEV71usMkktoNT",
  "key31": "2Lak6W1MqfkxgLnkUQjsggsL4xEzBjH8HviisoDskoEJ2k85oW2KjPXJEp8VjFVcH8DPLv5D2KKUHLJqoHLiZvnV"
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
