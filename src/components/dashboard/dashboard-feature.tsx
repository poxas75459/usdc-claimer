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
    "3NBnefcGBFPV5H5oA6f3NzMMeNBRxauUimuz5PjJoistFxLSACHwqq6LpcocTMwSfz2hUicwvndTCo52kSFMs8Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zba6GfQoftPhyupUEriRcHNEmtXGUo83VYcsWxZ3cBEF7xTUQcxhLCmrapk17BKVNEaWPFjNQWoZMBMxpQQv989",
  "key1": "3kk78euoHG7qGssdE7XPw9ScUWm5FsNjARhmHEGJyovDdCRdxLqDcrDyP2qqXLUiynxA5TnQ7bZHXhbpebDSnLkY",
  "key2": "2TenF8jUK5SPKjoUSLT3GYF4WNaYFK8uE42f4STtZMe6Ky6BHQXZupNz5TbwqiEQCJnNRk4hjcqTaRaCqEQTpeGd",
  "key3": "2yKbw39GAQVay5YphCvE67usu3PiYkmJo5hPdhLZNsMXCKqo7i6cuZBsJ6f8etkB6cH9WgGksyVbmFyhymBr7Up5",
  "key4": "4kYLjv1gH8mSZUgy7LU3q1yBytYEfDM3WEPirz1fonKBBbhRwBprmeHRV1if5SYY5tKXk3sEcYKQ3QnrbRfaUM4L",
  "key5": "38aB5knNZ9jQenVBpH8Zq8Y3sBEiYBxTbajh4jKcSMdS8BnpM1wsgSFLBcCQhtdP43zTbZRX5StLxWLv52vUUaHC",
  "key6": "3z83wuVap3qX4tLvMnconoG4cQuLLjYDUjwqwk3d3ReaLjbGd9yxP9Hmb9RbcTvaj4jQ74vaZERAe5P3Lx4eficj",
  "key7": "4C4NFG253zd9uycaex1e5KuTdA5ozx8JmSAhWCJ5r6jVRrP7qN3zYdp5ig5Ts2esPTR9fNTvUM3ncsTDMHcyh1Am",
  "key8": "4qXfi6KQNwpyNMMvaL5syqyn1foSP4ZVWpSXcPBeoaAYzUmf77cCgVhnVdViz867Dy8qisvwuXiNeYdhvzBybbsi",
  "key9": "36h3Fs7HNJqGp5im9aCKJJkLk9NfRJ664qbCx8pL3SQRvdxqRWbLUJ3HFiHC9tp9De16Ti1NiRmVyLKfZJvoEyPV",
  "key10": "2VTLyVF2v9ST3evG3m42uHvifuNRkXTEMJhsq1oSRaMS8oJ9R42DmFHUhiQj8K8ic6zgUUR5TSSKYMpVQLBEpiKL",
  "key11": "5fL3oFumkweLGVFWvKKckdK4UZQCfRGZvWXEnxfcsJw7nh1XLXv8vZmcTUAkRUPGumZFZVFLCk7HbVkdxUTjqwLX",
  "key12": "4xjA8bCifv4S3puZf7mgwAEFK8bzHgKF3eCgT9e8LHpEsBgRp7r5ZwUe4sNLH3MTfAaQP4cCwoiYhahLs8NmuRVi",
  "key13": "3srX4fUQrP1Cf1EVTQEAmPK98JTd9BfBjWE92ZdJP46qhzwdetqAybDC1fNYkvqDvTcS2U2NvUzbtAhPCTm89Ho8",
  "key14": "4k5Sxvp5jU1jAhtmAk6bAxeC1m7Cr1XQ7shGvrkpKhAXZPi6w8Sm7DT1NKupapgwQ3hov46og7f6g6tEEJFACZ7g",
  "key15": "4kqFYNeetqfGpYJEHKCaVCWedDSoqnn3YeMG5uS3t4KvQn2nd8fNKbuYJWxN7juZKLDJo7qznLvZUMYNwjCxuip1",
  "key16": "2FNngw7iDSQwsNFMg4iPNcvj5rig2uTysJ9ftsKKySRQyLoSoARTX6eVkeAyiW1mKjkwfK3rkaYVHRBTEPtpou4Y",
  "key17": "2e1SQ4zoBRWUC9G6h8ba34NQzv3KFCsNXfy8twSUHcmzJnBxaWfWywErfvnJNJC3uz3HTzTw1PhTa16yTAn8mg8R",
  "key18": "4DjxewxazokNxmboESFZJtGuyhpnUHQXquhWF1k9FcnxJft7HTHQPzHWD29peRTf65YP494CP4saPNKZBXSBa6Z9",
  "key19": "3Pf1wDVtE4ZRdWid73k3c6uuTTvdHgrPY5cbpSx6D81zZPokbcYt339MSWfjQRuyKibKmaur43p4wfA6chQcdreW",
  "key20": "4N3oYqTK1mu2SsC84n18LizPG2htdASzwujRqU2GirQx88SG7wwKoXEfXt8NbHeM9E77prpMXN4ufSxkFEpcC2Qw",
  "key21": "qnUbQVJbAjti8wViKjzxxhXzkonbyGbQFgmUVF4oZtbyQkSz91o2rPRv6vDHtHivSbuhkt8LQXzZLQnGi8vxN3Y",
  "key22": "3J5XzgNdYiU9zeru8Q3kf46r58je7tBnbGkZqrh2qVUP1eMouBuEgUUFhzykZAFJ2BEXZhx2BoD4PhaYnqSSU1p6",
  "key23": "aE6hgfDHoanpHDuypv3By2JH1Fr9qERhms18g5h4S2rjC3roxSdk8bLGpgUX7T4QYK48TQ8V4nVsSf3C3Wqt6VG",
  "key24": "3MJZahh8YtBLDX5JE6PnWuJaZAu2BXsHN7bQGifZNUDeTRxd51fiXqwrJb46udYuXcRnpGhGWchmvxXAhUKJw1DG"
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
