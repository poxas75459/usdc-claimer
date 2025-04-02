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
    "AfxmnhrNbHfvjanhFqUkiurmR5Estz8tafPFPnreL84efb2XaVbewJL1oqxdAg9DH5hnPxQJbowYf1uf2QXSo4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJMtZxXs8RKAwyzq9T3Nm8C9pRpP9UUqT6ctuem2bb5625KyFQqts7TAdmDtpRJ7EjEpNibhoqmXCDhZm4c4kep",
  "key1": "nCT9bbT46BZUDDqaRUfHargBsgEoE3F6V3RwgUPW4zWQANXnuUvWDFbJV2xt7eH7397y9yLfCf3rMjXCTTyLpWW",
  "key2": "5zKfwAFfVpNxhXtYKks2e2sirkJdHGuQCZ3fsUXSMxEoCtevCf22gJQkyE52Xi2sCJ57uMXz3F2uJyXwkncuubbv",
  "key3": "2yJSoEoDBsKTbCRwhzzs58TRVhPonaw5QmHh41jasFKe8VRdtwktGqV9qGkDcEcjAhtsw6CTC1uRAwPUwiiViMfu",
  "key4": "FmNn2LWnKpjqrw4yReqzi4NGZLh14rGtQnu2fnWRaAxfgkhW4sbymG32tByzNGNeTGDMnwU84SgNUX6vyNdCKUD",
  "key5": "3ZdLhJXt8qx94CCWKiy4ZrKnJJZYft9uTdnQrWSnYVCqjVHHjsAuCxsZhKpoY8GYXhbd3jzBeTssQFonywQpJ5nZ",
  "key6": "4uaLYqzoDfAK8DVYuhoNBtRsu32pAE42yvDjwpdRNJz1tjWuAgsqguB8tVMfEyGsKhuw8oSJXuZYESKBLVwCzo4B",
  "key7": "3HjpwrfeShLqejeeBm5F6MNFMipUkayLw5V9H2Bk36cUgtmotrMFPTLsKzJ8aohzPyKirYMMiyGpPsXPFpcMAznf",
  "key8": "5UQotMWmuwApkPsxgSkTsPDJEMpYToiaeX5eKogQvUtbGMuG4CaD3QBPdsCmxQUK6vkyEMe9weAJBNyrvTzcEZKR",
  "key9": "62i2yY2m83crq9s97uuBack9xq73hNTbkbNxPPVdmrnqwVSBB3xEGvnGBNSGX8BwAtvzizGGa855ZpVFFp7dHid6",
  "key10": "3VQqv86KFKMyRcsdazg1MvBvtf9AkJzc3bX7zpEzgLegaCAwL67YJyiVgrLPpmweR3rJ16kEAGtqEXzYPxxykAid",
  "key11": "3QQR6nLqu81971ghvfVhmskWsVDrEppsfSdUXmBbwzjHySmeMzGC4U6ZdpbWeCGybTxF86jtD42ZgF6oVjbjCfD6",
  "key12": "2z4aghyk6QbZ6qxGJYN1q8vD6ZQEGzcd1MAcYTNcFh87Bfme1xtaodSvHMMajiMBZ28is4vMmGvzjjm5KVc2pWjx",
  "key13": "2Q7H5JLQCrtSTqNZp69C2rZwsTKWWBGC3f55HWRT3a5EhDk8T9DMEUh3Q6iMDgHB2gSPHyvjXWnd1GFDZyXW6bw6",
  "key14": "5h5chppuAJpGTxnq5sXAF64hk4m9GbRAyqi7fEYCUSGic6m9KzpxYrXFHNgpgomggWpYJFEojim3Qz81gF4VWYhH",
  "key15": "2JV6fgS7ss2YBLKto3UvXtzsznjbR4pkTwrsvwzSeZyKxo12sHNvYMPEKPpCNVSac6GdSi6BucWZebh6jqMxLu2K",
  "key16": "5oqDa1BEDVbZ8qZuWSsnjZEAdETWC4T24Yft1QVgL1vhjad9U1M5Lk72JcZidMDuikjMmgLk3TBKHykNjLQaVBt3",
  "key17": "27NMAkxew5qWwBUSfNYPDGiB2CPiCdYJa6pgtJv8Amu8n25BtFsBMKE7whDTUPjumqrrA2Z3WnymHc4KQQo5Gs3Q",
  "key18": "5tDhiE45DjfuYe3NU5TPG2CUQTJHGaBJmXMj542hhR5ca1oz3QcGSH22nEYgbw5GzUwhHf4naNLjCvFdiR8syb7o",
  "key19": "5xcsLq79AjBmdHH6DePvxjNMg2fRKdLcRGT9C2LTNjsBYe3qJoj2qKGxBSuR3CRPUw759udA5Z9JaHaUqMmsQsA3",
  "key20": "4pPkudUb632Ny1jMRYYocq9wB1o3FTCxk39jErMyNmmxz4JHYDQye4QxkCxvppUu675APYTuigcq5LSvHzWShp2u",
  "key21": "3KWUvj3xtXjvjuUE8GJQsGD2RKKmR5ua6QzhK5vDctNczExb5HYHpREkTyMhh6PBECUCWEhmvYyt2t1qgHyqGH9E",
  "key22": "56wX3JvsAZMNDhvBuHLeyyZQyGtjJrbenCUfqSpBPXkuK6krfGCenV5MdgtiYZjnhKd6YySpP1ruXFWMswXhTGqe",
  "key23": "35LqmsvfYqVF1CkaFYUNh7LVqfZD6BYwMCLuTpmgywNqx4aiY5ypR1L7jyb1v1aqG6yaSmjijCSxbimweJj4XXWq",
  "key24": "5s9sbsCEvC36KzJRVCrkxuwiqTMYdpadyMs6sudLeWGVW6qNuenBGFFCabhkJFnEfgQ3NryWJJFwpBPEkpZj4MyX",
  "key25": "3TN8tVZZPdcWJjQy8JeddvVLsv48fB57Fxwe7k52ssn6J6RWbHxvRmYTpWMDB6Q8JzvHxqFjbaqgHsM71NQiMDBx",
  "key26": "5YiUtMpn8L5TKqLjqgwpCQidFPuSFbKddwYRYEMoe71wSQ2RMKKkVmVXetoePBooEEfbrJR3p4vJvHcfXVzLqwFv",
  "key27": "37dLFstvQB8E4VxDxoJyWTgBfHJpGYe9cDofiD4BvDnL7vRkUAYd49JgALnRTVD4rFhPAiSH2dz1KewKePngH6yk"
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
