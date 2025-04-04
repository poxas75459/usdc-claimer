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
    "3mfGS3qPAaqRUS5ahAurC4dyuXuHYG73vkHQvjUShY6gkNCXzyGSxULTbp6AmHbjFiMzmRhcri1fuX9HzGwveHDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHy2qtkRpZxLzgubKuuQUwHbn8xJVJqXk5JbtYuGmi5PAywVhJktY9mBunS4Ym76k3z1dQMEnTHHFeZTKdQQ5yv",
  "key1": "5JHxpjynjhjYuUb9DSsTYS4Xg8DZrcdEh5RX1BpHtkjbtvDyZUpDBW5QtbdavoG8Zj8RPYCSyiin4nFzbyydpfr",
  "key2": "2dKigoauaBj4BgX5u1gqiyG739DhdPXiznvKB9Xx28pbkMwavqTcUvbkYH6WaVLNgeLcczgzVzoXQLoV94qo4JcF",
  "key3": "5bjswZA1kKHQMV8KYGgZ66xDXMDY5Ptc3y6D6cJvo3JMkLmJXticViyW8yy7yVLfXbW96bbKxsyPwE8XKEyu3Vv5",
  "key4": "kqdRbCc7YoQd4AfnswVadwN5TpkkJ6mQiBhgLsgs2vYeKHjo6BZ55NdfZpRa4dxUTQkTvJqajsaowZ5Mvxorvx2",
  "key5": "2nsBPqr9NoxkubbuEvnW25FeBoxr3iThKyrB74JzrdfjaSh9bNgNFh4aehimJga4jSKgV5xfGn6FpMzsoWvxwzUc",
  "key6": "38UUBgrdwYK8LHPBH8jP2oCVez9UG9C1GGyiCLZ9nJ2SAun1pREJ4fsifXDD1uejcbbf77nzVch9Nm7YJCtrCAWs",
  "key7": "2qGPp8ttkP6Vh7tPMe8sxKcgiSH62x1ZVE5WwRPEjYzbHPWNB1K2hB5NTxyCoY1XHMu6hgx5QpZ7GTGNs3qjZy1n",
  "key8": "41C2MKbndnczb4fvwM5FjRXN92RjYNqCxantamD6DfJGaPYeP2s8JY5u5Xy7Hu3Pz3emuVt3jwot2MBaVYvoahPk",
  "key9": "5S3MAj4D3RYJYcRvcwdCn57Zeqvz3XfAMxwbGs34rtGaXTsonXxVvEi19h7yKTXFR3m1FqgbquxADBwhQEkPShVe",
  "key10": "67qKbZX8X9oLxCgzu1JsHu3LoUk7zrAR2HSFqxxqyifQiwys87RrrJSHnj2CVVNJgqsJkrEtFNAKwMnJBGcLY9ET",
  "key11": "4pUpemomSLfA7gJBSuv5FQGnDFVawDPgN7tNo6VtpEgP1WLoStzzny9XjU29G8ScBHyATB1MK2nirjzaWj6Mq3tW",
  "key12": "3CsC4PRnAYuZ6UFwwLtN9ttumjjtruETv9Dbr23UcvaK3gYJuQazD41FTzJDq4wW7EYs22vVnS4qsuBRWULudkhe",
  "key13": "646S4Dh2XCo13FJ4sEmxUpUr3ocdjqo9SD5S1KoFA5hChTLTUroba1LJkqrG2xoUkDfyYpPUQ3LtVk1Muqg18mMD",
  "key14": "2sxKWZnzMHLVoeEhLDTaj2exuJKsfq9zVPBLw97KmvSBfvDMbhgVAziuLHdkQJPgEjFzRcZvgKv4hJWfsSyotGbu",
  "key15": "3nRJDHZL74jEWwE3wTACekKZwZBP2ivoMn7X7dq14mp9Nmk8poejdgPx2x6rDqRsoLXoYC3k8Nk2EHsXvWKnv3nJ",
  "key16": "SBRgfgsB2ixZzBb5hjXEr5pZr8wdWndB2whWx4DZkDdU1YcqbYE1xyuA6PbqtwC3WVrZfgC5W2wWRYJY7jDDST3",
  "key17": "2UMbP453xPuNSSHo79EtkiWWdYikAdVZyfxzx3i3yGSJccUFZ3WQQFEuU3KKxFF6tRyJixHWwgT3FJrE92qVAZa5",
  "key18": "PGNvyPhgXzG7TkGzGRDpAWwSsF7ptePMMDKS3eZiRu7mB15jkU7CWoeRzMuKiN9VyWDoD2Bq7iwXEVFofKhaAvv",
  "key19": "4G8Xd5G9MrXiGpmw5og8EQa2xgP788qDgkXWDg68zvyFasoJeVTxzF6YuXnE1XkR2NSMRufLWA1aBVgVv5S9CPpH",
  "key20": "2adpcS4pb5rBL7nZQ48kxzJgM6CXfjTdPvFxqfG4eYvc79obrG27FtcowBZPdxohU7iebeBdRhBNuacVYhj9QQEt",
  "key21": "63vxEQU1bCh8fXAAQznqSkgafqxbyKD69h5e5GsX3oErv7KjSLXY7ggdLtuxD3eRBetGuwQ83kTVGrW7DG3BtSag",
  "key22": "5dujbn3x9CcmTiLjZnY1bLz5BghRmBuDuoGrsfAX2tpADDmGQEEhnwLYUZ8Smf1YiR6hePsTA4FpzUCM7KCopqjH",
  "key23": "EG8tcq1ZXCZaktBw8i7kjb5WBska3YraJVMWym5YP2v8CmokM9Ckr8NdwFxFV8yPEQQ2KJinERoDzthijEU7bHc",
  "key24": "2EW84nwuYbepMjqCqYLWRdbjFt5HxvtxETgsb9yvq1N9jZ7N71Qajy9j5VketyLFG3dT2vFm868hTgzemZAjSNtR",
  "key25": "h2aaqh5m6zz8SdME2MQ68UJs1Nr6goQqEe4HsAqAJGPXGkUtwrQvwWXVJzpd98T8xaj4xgN6DbahxHewnrd8X99",
  "key26": "3UUzx7Pq2ApfTSEdeFswk6arjXhrcRqmbhmFyxUCwJn84bVNm6GhZx7rZmFeNjS7VpREcK1y7r1KjAJtyXHKdeqc",
  "key27": "2tWDMG7e5Nvmk8iPTCWStpgMQRmL9TDozo8iiXAtHB4Xu8Lmw2TWQmNQVAjEM8t3vNkfBJTPGsbQ76PHnkXwu32G",
  "key28": "3PKgkX1JkzuHMP8rhFpXnuRYaK9Bq7m8veD5YS9PUZyQDAzfW9vm2VV6a98m4PrGAFgwq4keuynBDH58Rkd6b27r",
  "key29": "e3SKGQEKdKwYmgJfad8GhjMTpbjX2zdvHqG7UmSWXfm4NYFUsYAqfD3vRC73Uirc8J3grGdz4SffoMqWtAVUZ4J"
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
