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
    "2vpmDqzStR732QRwRAou1VKPEJLsA2P18Ex83bBsGAtjijsxRFscjoGndnf9cq3q27F31UBqtH8bG1o4uxFdMpfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VEjR53bg8gFjTpqdhVCddA5spUnzdkH7gpTSeYBUHRD9udkXh5wVwoRXg6B1MKYdPgjfgRsxi9Qr7NQGE3FpVr3",
  "key1": "2sEUEf5svFQ743XuFp5JruVBrhpm5rVaoFiAEae5MaFi8wdPYxVBcPfQM1hjUspwKDPZWGiKPzvARpUeYCLs5pZ6",
  "key2": "5AL3Tke6qTEkHDL5Zp1drf8ZqRJqcQFUGDUok7TbtiaEwvHCoLLwaRxSy2PFmKji28pB9emT5X9gMkFAi6pigehQ",
  "key3": "2UYd3BzEhRFeAcvHCPEdbzeCPziXHJJPKZ7NUEBhvkiqYDB1Z5YxQMftA1oro5eWuREKEfznUWMCsNkMVcq3uxs6",
  "key4": "517bSdP7xSgG5ML8wq4hmBz2xkbHigWFfHvAfupCA5gYshzViH4Z79YxSUVPFJd2iWKLh1izJxhy4WfQnQLAgbNU",
  "key5": "4xYbbb4fw4y2CJ7JZFZ6LWjaFzCCsUmZJQGAHdSpkDt3pbiqc8ii9F2Nr7JKhEPcPGZ2nrAJQvBVV2vutNJaPLC2",
  "key6": "3LvFqnFu2d77hJp5pR9tmjEPPVbiJzXHw12dpanFsGJgKaMNdNGjJEKe5zB5Z6Gtae375PfutLMnhHNcZQ3TEHeY",
  "key7": "4pcd6RCF9Rf6CxJw5cVLUKN5X1bEMJ1WyobQSJ6n2ejrGmPRRCvJRUd3emubVTzvJ1x6SDzLiw81efw1K1Tt2Bfe",
  "key8": "5pkadLkzVvNLkAFbDxhr6V7SUtD1cCDw52pdXybpBcoF5ewFk8szwUZExDEWuK4d5KYknhrKapjCVhW9sgyLEmhc",
  "key9": "2gnWwfF7WFMoXzHTt4Zv615cjg9AEiNn9woPtftnaz64VVjLv2UFJ2XFy1epD3SKR84zf68J52KiWbcCwE6SN7i",
  "key10": "2rvdSWFtKzjE5ytvbqjkUagdBKy5JkHKqWgzm6t1HT1j2MebGKCn18WiT1sTG8aHBMro1CPVQe88Ke79Kd69Fwu2",
  "key11": "29hQAbCvVfojXL8qYwpXkMf5nj7h38rRm6596p8nf2E1ePbJag4yoqqy9iMhCyHwT1HaBn3VYXur8n2PanUEi1YU",
  "key12": "5HDn2ZZWA1oxEk5HxJ5CZJwuU6hcXpGu7T6vRd8wsbTZbQfE7ZLVvEQpv45pJAG1JopGfAjRb8SzYgqrZMhzU23H",
  "key13": "CcGYfRYWGvJv9u2ac1LeQKX7ssxNEMQT8eb568YV47nLaxsHYriSf6R8SBP5Nok5KZq89f78hADkt5Nx3nV327W",
  "key14": "5MwRABc5YCRX8D3iRjtii3gGDUJgp3KBa5mRUZPc8vXjXpJQFpRadM6EcD87LCzULrRjkRLEA1YkJ5x1kNfY4CE9",
  "key15": "3JmzHjMYEErJqRTwSVkCPEf2DZRnrtchKFVFzsNGZPwL2rPQKqnyWLx2Coh1kRNjzbR8LyNh9uXG4Dsfe6qKCeri",
  "key16": "3hjLzTX3JmsxPufcUVt3TUpqp2R9wE9NEpWgaQpzRHQecHSAsdUCphzvc8UGi5sps8ijsGFFbNuQWojJfhcKg9zQ",
  "key17": "54sheCS5Cui4TTaEAjaddmNxM8fFkRfefxCqVZbi1SyPZrEUALFq71k7v8zpTnfPvkjzUGtGarPCYWP6eoHaSMod",
  "key18": "2cYLNbXakUMHGxwbMh4HN1qcnEwWyjYWZxg5eF6Ewf1ncjHhGanv4YeK6uoREbDXxtsKFRwgiA1ARJUvznirdcg3",
  "key19": "4qxShPJZPLE3rHafjCd6wkVxZBktg5BdMCNmfwVDFzrfAmSEtWRyd1R8gmNZRKeoe5Nis4baxWA7JkSLLhTZgyJd",
  "key20": "5JzapERpuXGdSVVdsWXTbfwhJQRTZnLv5iBrqQTagi4ysLrq3VryBGJSrzsUDZV3bcAUtAtdgbGM6A9ULQVykn1Z",
  "key21": "4p1h94EF332o3ApHWSPrnm2STUa1MdQQyWJVzEnifdzGeD3MDCGY9voTTCmmY9Bzqt2Yq5C7gs8JQftmvGCHayRK",
  "key22": "5iMJzdzifJGS9Gj6mfyXcYNKVAgezE9no4Nh5fgXZykYkEN8xoVa7sci95vngNheZs6tDMNxQCpQMvndMaz8KsT4",
  "key23": "3iysiEC5VAKJV7crSLDhLA8Re7SUdeJ4mVgAFJqvHi7vKakdratrFijBKEdqxDj4dBVEoGLZ9ytjv5VR3RkPEu7o",
  "key24": "4drcYFTtq9VpfUzybpZnAhK8yjBgRAVX7K3E3BvocgHkAhJpKyH7gMwFv13DKQSTUcvnSs3TKxy9UFCoDA9GNVu1",
  "key25": "S2bsas8dUWbt58H13BNon5xWQdnciTkRwwZf99tv4szJ2VXyT8b2H55g22PMwgMYPiNSs2wA3ecNHmURz9bNqNM",
  "key26": "VW2Fp2s7WApUtS8rtanRkKJ218RAEU7XotRTH7QP2inqav6z2Fo5PmBYTsRu3cBZgBxAvm5XrWkbxx7fU6YHn7F",
  "key27": "29KWHMsDybKDYqAdk1obsN2s2DauZqpei4aDBvorvX4Gu2493pBofcxrtMPGPyn8x51WTLEyfyT7c25vSeDRLHSW",
  "key28": "4xg4i7evFfemxUCM3spBp6ATuEeR8Ga68ZRemGXgkkCSUYUzhwbrU6PK63EvymamTNwLP4NUXVh6a1ho2gRK85gF",
  "key29": "62W7a6GEahWm4MSSLEUDMt6SfV6FYSM43QMwHxox85SSz5rXTHAicsoNiyubrAZZhCJpKCr2v9iMCThggU2cLpYF",
  "key30": "545b5xuJBipkkhjfiQ4x6rDKbWvKtjGSKye5oCwjSYxDPt5rQa3nxBoT7os2E73eKdaVRZkUinYA51Bvqhz9r33j",
  "key31": "4MwpLTbc296cUScYCRZVyG9Nq2tuTBSBsfwpgVczRAGb9B9EAYNCwRJom9jnBgaScQGbuy8FXvJQ432sAGKT2RXW",
  "key32": "2ujSPuLCXwvHdyG1Lt3fJ4hEpypoxzBwX1xcpawz75dfDCDcQKvAYhzDZKDJH94KUowVjf4edhEiXZ6P4AvsPJT",
  "key33": "2UumcoR7pGpW6cdmEe36jeTDywzWCPdxi6tntHwsug5fDzytpP4ohHXLHhp4TjFiU7MousFwUJ7KFNAEcw5Hsvpi"
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
