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
    "b8ZeAGfyEujVmz1bbYCVY7EV92YVBrXXfL4DaCgPoKsYVbP2fhjt5XvwSVMptgE3i73QHgkv2cbrqEQEi9pKBD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQVpRPaJ3wSt84tfxFcy3MKRsGUiYbwwDTAX1LgtwaR4iUvQvJyJMhE6BdNaDrTK4PEWWZ6odpBRLKgX6PWs7pv",
  "key1": "5KXKq8KoRSpTvWdg4zWEUv1qPg5MYxuJMaXT5FUormdLUCqKanRAvVYfHJRVV6JF7qfnGKxaF9dCV7s9fqXSLrzp",
  "key2": "4VeTKhD8QvQuGHfFX6BMejzs8QrBioC7wUWRNpaH4mUerJdVgwWwDcXtSMScizv5RYA6Y5pVeHYYxPBJSTmGGiM4",
  "key3": "2SzofokictgGw6GZRL5nWWHNSRRs7kMtfhLyfbDNZ6ihmuPcCYRaxZA2cPgh4ayiURjZhEUx3qavsEdDjq9mssmj",
  "key4": "RX5cKP3wrkYeFGQEKKGeqz4FjEbN34rUteKcS9JcHZVGbr5g6gWrWzy9BQSWPafMPx5h6BeExVxasAxEPTRPR46",
  "key5": "48TmVXTLttECV4TS6wBmapQm8DTfyEfHepvDGHTyY9k3VKbfmgLPrpkhiyXFP8bFwZRt8yzbh8UtTGAPnPr2MS35",
  "key6": "4eP4TGneqfHU497fr8wuPeG7QoP6DzwhrCfhL8Dvp35qy6uFFx391iHpk32X6EQ2a7h4d2viqZ4nrWWWZCY5Xij2",
  "key7": "2sP1D1ggusgbpTug1CNTvnPktSrq9FiMQToov6MMbQRF3J6tTZajkjqnNYNqhcyWijiDUjw8vd93kGYD8moJTcPn",
  "key8": "3yGFy4E3kQAo5gwBRZeMepwcwuaQ3PffMsfedCBj9kxvYuodrEt552HyNCVtiPfhAHMZ4t1wuHCSFpsZBhfGMtuk",
  "key9": "64TTUgcn9raRLDXdu9c3hsgpYBVjf14MGuKNxmGsGLzc1woVmt8zzwwjsaiWNXKFy1qdQywhe74akQNULioQrBT4",
  "key10": "5PbrY5bVg1DzboHbGHxtV6LaX6UU5R9NMYrDzEJy2EYZ4wmsv5kZRjPkGrj5sYsdY4QdyVmEG1G3S3zwtrhFDLge",
  "key11": "RUCgmMwcwkP53y7yPcNbe3PcEcnK5vZqV4j5NrpDm6PNpmBSzndi638muqE92x1QzMcdsoDmPy1yyy5J7bkUz3j",
  "key12": "5Wbnsn9uoTAB5gNHfuNqE8SJsmHqL5Z3Rsw9Gx7AB7TZyxiJzz2mAodZfMfCHgvTpZLfLEKpu4NZqzryQimJhnE5",
  "key13": "3G7yKeuDdP7kZRjjRGs43cPfGrKyn2zdBXexPoZoRu9bLHdtRQjGUHFq8azEsf9d5XNCi6z61axQFDNPU3nyz6Zn",
  "key14": "5VLa7qp6HFbJjnzAJQUBdMt3wE65RFAA9HG79jQqVFrY3wyxhUCtEHrPeUGFNwmLJESw3LiaokWCLGH57TzvaiRu",
  "key15": "4BZqp8YRkX34XjueHFbDgTQRRuvhBzEXyLL9NkSWV5zC4wtNBCPzkrdWRGxV9fBJ7ALEP128HhPyfazDxVo8SWV3",
  "key16": "4RJBmae27uSFwhV8RZ3KeChCjJyq3kYB7buYkq5KiA8pDbAgnMUGyENUmuyV4cv6tDWdfUDSA9v2FS8FqQXGjfpH",
  "key17": "4dT7QN2uYbm9WNwAJtUkAm54Qr3xMLePEQ6Dzna7WQHGAx8r4jqeLXvYzftFUvqkYpZajXBE4uaS7MNPaEJkdRLN",
  "key18": "531THuXzRCVpW4HqoshJL6tmWPRjLZFCiMak12hZLjdzXwS6rTg55WxTbtw3aSi5fte2Lmz2bKgKzKepCe8mk3nG",
  "key19": "LuW7qHfdj1WPnhKnNtSMNp8V7zs2scqFT6o7YpYssyDr79TDeodTnvx57SSGm8RdCMEp2K736P1DiNcrR7UHMSn",
  "key20": "2qoh2dM74kXwK2iKArop9U6tLXkqKxHkjjt8xhWsFvhJEWWRMczVNGxEi9XBu1qURyu1b1f5ToqBYAciNYGQh1Qv",
  "key21": "3j6WPx6h4CL4epSEn9XhC7yu6GUWUbgufxEQa7mmQJGoPzzBRVuN2BHAMDsopKP5bM1iMD2durzCmczqLVNAC3dx",
  "key22": "5ZYAgMnXZXom4iBoXrVCsVQQkQU27RDxq96gdFE9BmtbtKgCLFpAGDgBrxt1GsEnBo3Tz9nAfixRokUJmp3QVPR9",
  "key23": "pk9gA9TYc8FrjTVWfNFtKmgxQvRSNufAPDfDpjWcyRcD5cPqCjpsK7mgNccpY9T1yz6k2NhNKoSm7jm8aZD33eL",
  "key24": "2s9ZFjgWjUUjnD6EvWUfy6d8UvE7LhxnjZzzJZbMyhrtUdySjPjgkKmeJnG8pVK8XxpuxpN4ZDytk4fhBcdUiwK4",
  "key25": "59cA8gDdR4knoe56xyij4MqbjTz5CsjM7ow9JSPZc4CeCWLjZjkbXE3NfePtJQ8Nabi1j9iwBEpyLKqtcJzFTLh",
  "key26": "3EGbMQwisgcAQZtpRfQcNCtHqyfjX5NCyeFm4arh2QuKaB6daqAHZ4LWsGAa7ds5LbfzUvhs8Ya4i91Jvgisneb1",
  "key27": "3APepoKcxUEVAJ25c3jJVaPxD4fvkcbkP8GSZ34TeStP5pcDFnTKMAUdFqVr7FqztVbgw8TdHHZFAtYxyzcEivm3",
  "key28": "2tFGHoXPS3YvLzcTU6rQXPZFUZKUrfYBNhLD8y4WD3L8H9u1W8JM5AokpPoaXkaRCsMyXAaUeKdYGzBuQWSfJSuS",
  "key29": "4tLg7DmTMmVhsiVYP8aiGEuNVZUqWC78zcjxVGec8p6Tw3iDBsNE9YsUQA39RkyGSyFrG9bbHDrzvyZYJBM17wtn",
  "key30": "eFYZmq3tywFkvwHGEVda4P9GT8X7hTrk6nNpcz7kkJWs13zvMMTurqasqLKe7VURqSLtw5wkSyFF33aFoq6NTDJ",
  "key31": "5GkuvuSHyQfnjmDJp8GqrpzqsXKZ5Nvo7nuKRFfTvcq89eTeM8TB4VmYkW5eRuPUxUWhqyWSW7Gok9DRikdr3xL6",
  "key32": "3YToCzmvrmTfBzFWxLgtnS5TRoaTtdT8uTvyjyP1DjzTPowV1QZQrKuiHQNzooGhrKHRgz2WQgsR1SkGLccTTbqW"
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
