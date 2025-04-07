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
    "3bZ2U9K47bhrWS71537wz8brpdyWyRTftzqfBNAvFqMLR3Dxcbh5U3Nbw837KayV2MYk3mfMiXZzDFYgmHkYn9Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzpQ9i64DsUazKk7Y9c4hSXgNTCjS3VwUUsKdgbr5rdQH6NCdGBLAutcRYSf6bgCtrh3MPk6N8hheiCGC7H4Hgo",
  "key1": "sHetj78MejLNytPKTwHZC9soSbsVT1oEASigCV1Hb5nbyid9mJdTuH3son1AqSpTezEgGVC8LY5kvdqdW6E9Tcx",
  "key2": "2X776egqiHLhNCZ5v1ZjzB3J5DZGuajp2LnevWoGz9LQTJxCm6ZN9v4RvsVdWJSdEAmQTWddgGSiaWTSSxmh28du",
  "key3": "4ywp1voStvZVWCwo8mCokSVtWsVjGErggynS3AWWvYDzq8MJjSp3CmdywwmqDGRj22RNYtxZXnrksJXBecYPT95x",
  "key4": "4Ag8XEVoBeiTtbTKL9LKyfuocouZmFADrCCJvzMJCgGxcsrvBDMsxa1m2eNKgsefVphSRcfkrUJMYadmkK44MDv2",
  "key5": "23AwN9Yn8RXW4jdVw2e11fuQXa8ZSVL5axkaKWP8raBvuLFL4MueTnsU6xw6j2y4bS8gs5SLmKWQtdWEHpG2Ngik",
  "key6": "2ugec1TWkR6ncQxJdoCmmBxYfJREUQqXa4umRTNDgEuGdMoicD2YuC2uuvYF1FJD8N1kXfE5PPkio1RAEjMFieLc",
  "key7": "48Xy5JWiHVhBLjEp7cJo1WnukpbGnJAxmabfjRt4wo3zzPdsY4xF1stNkRpkUuY1Y1DAY3wAsXcjZhQNQHbc8wYi",
  "key8": "41LuynR5YLJqW3V4XCcwKSnJqxKAUKo46DZiokxdir4838tVziYWiQ21RSXdFhPTeh5XiySfh8p4zqsutLr5KgiP",
  "key9": "JBUidNRqy14rBWds2jvNM52q4QGNrnR7CBWvCsmVy4icuma2LiF2XwjDSJa5B4XN2dLmkkSfxJW7KnjkHqsZ85t",
  "key10": "JRx1YMfEvriuggmLdCRdWk7DpbztmbBGcpsMopaW65fjt7ruaJJu2ycPnh3WxvbEPsS7mgmacHFJ2YfKbcXZSXZ",
  "key11": "2SozrfhwzskaUYfZZMbUxTxWbaSWAW3aW3whCmB8b725CGK5jNAWrP5gMBFEauZ5Z1bE2gfCZ6iit6uZV9axF1BU",
  "key12": "4GdAffHCWd3QsdBKNCggQU8XnbxbAn9xkMktpG6MnvpaaQVvKY5CuaKR8P3ngyTWVADc57QwYYMz7v6FdDXkQXmz",
  "key13": "3ZPQDZhHDS2BqVD5fqRagKibAereda1V9piaQATUhK47pZP4L9ko4YKMS9BEDCtS2iLAchMoXWFkumBuaxQP9Ycj",
  "key14": "3LDvXocfLR2gNCiAvFWHyqb495C6tFQojzbTxZhbptrYmxGY1coWxm98pKM8VFu4Ja7Eh3U3PKupRU3HdH8H6yra",
  "key15": "3ZtckL1Zd8ZKvYVFCJe61ThmxLDeSh3tn7jbSoA8C97cqVeiitAvCMAFMvu1v8Anikp97u4HDqzWmnH5PPdxfe9G",
  "key16": "293xBCqxuSgq1yJ38twpxk328KEZN9UgUwNvhkTqSmSkmas3aFTLe1iCGYobNa4cwWhf6FLDXHaiw7YvfbrEhPim",
  "key17": "125HgAZyunPZnXfENhQT6gmRimuXRdjNC2QCtMURQZzqPLxNu7G6chKBvcFYhDMevcsYV4TfnkPVf3igocKDdDhE",
  "key18": "3udbjhrLYLPLcoFwAiMgXMuURnVaswzqZnauNqUr64Nfp4zkGyw3cLcfJP3evbXu4sXt5wVbw6PUV1cov36VSXD",
  "key19": "ckHJzuqJP3vj6aBBaTEfTJSZJN4RkdECppBTZtZhU9E5hdRZWQMvH5AoN6P2gsgSXBkBA9YMHF1Wpv3jQb56a53",
  "key20": "pDBSescRW9PjeJAtt1QLjfiVRVfHETtn5963FYx6YwyS2LSh84BsAbEgxb8cwBhSrKVUdujkSno81vTi4nQTMWL",
  "key21": "2X4W4LYMLDyhHAnGrsXFACowfjvdeGPLDmsXwPAgfn6wWSEHKNyhVMXsek8ezeJDaHgSzVaGR6vjm2E4hPc8vEUa",
  "key22": "8JQuH9f3HidEEKZd35W6wLgdZ8tCJsHfNK5ssXfFh62jDyELwy49wkJ2mHC8f4AkfhBdTtqS61t5DvcnNYay5M4",
  "key23": "3HdJK8MUL9ap8W6Tcihqp6UTajxZ8miocWnCbxd8y85LA8Zqzg2L5mSmv46XFsNwF8FdJbTECwV8VXazexiwEW4E",
  "key24": "3DisDeM5CejpKQpbYdL2h3bZyai81CC5FjWDsTpbBft3Z4UzRm6LumzyYVqMPZpA4RcSdeWaavJ45hks5Ff9xEeY",
  "key25": "5ZP2D2A7hG9HoXPRmdsY4KfpFKJcnU2x749rHBJJTmKqQXJh8JE15KF7JMg2bKtc7zWtAMQhob4yyntgRYgJ85Jq",
  "key26": "51mppQbTmTM2wT5kvrsMjBC6vZxevjBxL97sLPcz6nwrmJ88D9PeWPqcDKUK3dPA6PtxVBHoAyBwYjAFwo7Js1x2",
  "key27": "3U2FynnukCUJDrLWtMf9hWu8Uubf3uVrwg7W4hwjwL5DnCJRpL6kDuwx9YAHKhSJCo1o3ctvnYxdGPc5vbyoeuH6",
  "key28": "2T9A86oH944b4chH5obnkQdxD5GeLQfiHbbMTCM3UMUM1n98jJiqbUMrNEANrGz2NWK1VPwtLJHjS5mtHdBRF4ay",
  "key29": "nT8WY6zCH9MZ3D43wMabiJtC6EVgXH41mBha4YLZ3turv514GHhfz6GfQGh3rCFd1vkpWtyuLKNcvzxjcitvRg7"
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
