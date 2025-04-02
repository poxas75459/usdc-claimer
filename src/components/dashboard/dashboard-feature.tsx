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
    "2Ar97MqeHGYAp12owPWKomd66nBAA39A2ZXAEFjS3JLSazbsnwGTnnqWEN5iMYz8XQ4Lc2JyvnxxG1WTdcTYDNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yyFF5uYhT5ULdPyQHBfjaRF94cFTzQ4ZqX9gQgHgNx1LPYsarp44cotXa75571jFoFPhzCRtHGDmDfGpobTGfzx",
  "key1": "KfHrVWn7KzMgkJcQLNWYacVzBWG9TsYwpcJ7AkXVXoimedL8DndzbJKXFUxUE5YRsRqiGoDXmCXSxg7tdTWoSj8",
  "key2": "7qk8kcbvaZ5zpqrww8ggK2kwP3BDjp1PfBSR29ToN4uYEBNagKX3wBoBnnyRAXVbMa12UeSpLkYLzsNQqtnoMHC",
  "key3": "45sz7CpZHdsySN5Z5YJGNev3PfBoxUCkW7rXTkRw2G5KrFyAASok7zr5Zoy3ZgG9gxkoRMn9ZNz62Ut8eT9jUASH",
  "key4": "3nguT8RM74ZiC242WGHASqPEgiaDtHWReQneNgiWVn93wUX9eDfYhsPDAoqCTJmw1PKSKYSQ3S1gA4Y8J4RaHqHG",
  "key5": "UFLz9NeCXWG7GvEBq7csUUGkTppNfzpVEG1Tw1GcRbr3rovufs8JHyTP9Mm2HvChWkPLLvTwY3KxVVMGQfkn6fk",
  "key6": "4ZvJtr51sMHLc6tGa2nBzcgMCUtwwsnu4eBmzUno5oEnd4GVM4RzwyMFhvfH6C3RF4vgmaEHUAuoDebUhcUunyiV",
  "key7": "4QrTQE6nyE43wdp5zqDGyB6ExVeUwR7FNyiwzLpPGyuaV6nWeUmKYdqWJXd9xLSKPRahn2XMCqQRj89resr5yNJP",
  "key8": "hJwHdxjoamR86QHNYbCjpDMHezNppy2SSsonf2ikJLAmbfX755fkF8dnzDeUQtxceNnkg5tRjyPEPy3g4uNoPYw",
  "key9": "3EnhgNbRCPaqfBaUS21AJZiYsMxdon2GeTVGfMvzCaBWXjVcjsEVBH8FaHfjBGuVpf4mczaaS7vBWcXVU9nz9YEr",
  "key10": "5wv3UCS1byPyU8fLeZtp5ndCUNAJVyazbgDA6tK3R7rfgztDzb8ehk6HE9v7KPUirXbvW4kARnEDpSFTz5r7UM2w",
  "key11": "2idpLoUgGburSqZ3r1QAjGUcvhHESEtpAKUDPL4SGbPtNEwxaatouvYb6JkivQaLENBmL6EJ532nAJPhBa45Q4Kb",
  "key12": "3qbZKoPUEjSBobemPnW4ngMe9J1xAGVEqZBN1w327B3Mmpg2uoe3kRHwR84TFSnqjGesZYSQWrG3FCrNrrTm9vRt",
  "key13": "53EVjksi1USVX9VrupUHboznaAHFRZ5p2yY4ZofMqWgYv4PtspDKB1R6JH8vfVaCo5CsqgZhHNgnB65Vdy2vV967",
  "key14": "3cs6LQRRijk2nNvUFGD3jx11MLP9GnVM9rNQU87UNY5V1Pe27N49XUkvzbiseJzwz8MpHmeu71eR3h9Gh8yMmNs8",
  "key15": "29FKaTibd6uTqWUSaD72873V3dNfpoebo1qPHPbaM7wMaQTgKRRy9ScfD38g22NXa39gsJefUrmK5E43q6qmkCqG",
  "key16": "5xCmm1G24hgGUp8pEBWyuMVwLnaYYp9WbFcsfyXA56H5vJ6oDEhsHGvn2odAht6CPb4psgXaFbgz8E41kjNBc1S8",
  "key17": "cDDYo8EjTdCzoYZCmcEgcEmJpQNpNWFtJKv4X9Tw6mKBJDtBTpCcyFry4g3VVnjyJSmviA6VUF4iFwKoJR8YqRK",
  "key18": "4r92EMuVNdUdpKX9aqk62DxuBUpWqP9UYeGNzEQZve3tZN4ymLtuHQ7LuMbULMSLcH2iuCDgT6wpwSKnX6aKVEo8",
  "key19": "SGGs2ocLY8xrVUmt612QdP3Mo3MoSu7EzbMCsTtfziECVWuSHJs5xHVtRD7jAsgEEgRPGo36fjMSPoYUQmsPQxN",
  "key20": "gAdCHiGMie9w3WTdyFEGZazLrbC7pKfQV28BU2BNSeTkfG7L9MznQ8VTxj5TptFUS7zSnPuLgiFGxB1g3BL3VUV",
  "key21": "2DtJDeQFc4oXWnNR2qG2GrgCgJDYaZF8aumy4LfuqKJzqF5ikH9wKF1UKc12RK6jVPcJpXK3YmFztp8RW267r4i7",
  "key22": "34rX3Ft15yS42Z1VE5bPkdaLJXV16euyGQ9hCjwMeFdgjvv1JYKGvZFMukJQmUEYZ7EJsGmwNUqKHZXk5eVUmUyB",
  "key23": "5e48gKFVHcsGE2NZrcoHP8y3b1fedpyW3g98YZki97t3vRcKMZXSSx7FmZnzokjKx1sn6GiiDg2bm28iDwfPydjG",
  "key24": "5EbQgxJN2pXj5ANo5oJB4rSPF5hk9847yVSLURZXiki2Q2sSsgMPJtZ6MbNW1z2TGiWodm1HCAunkcRKFs69qqHQ",
  "key25": "4mRJMJPcya2BFZA3qG57KFxihCGocbJYHrSJ7f8CBbCudj49tCoaH7vp1Q3YMNC6EVkX5YAzHJJzcx6Ck3D95Ynd",
  "key26": "47uThnHXHzrhnvXCg51bxwD1pfQmvtNJtRte9tbfBMgJMcFQc4NcmTrNYTFB48cS6Wpn1dYbKnFwxHdAaDJQkTVS",
  "key27": "xtHmMeuaXAjn1zAXrMTPJd7wd21oRbUKJdxCQiVqYpp3VGNrM6Lbkb2jgnPJeu2hxCYVe17YfgHAprz8Wy5L61Z",
  "key28": "3eaVqn3Y7fcateLjRhVFqBhMuZDazWP18f43wg2vjUpqPj5B5NitXJu8SwQf1wSeKmDCcGbQYRa4Urde2eJ32yzW",
  "key29": "5XKq65QjoR79AuhstpWkN8iZU6zkJjiP4deEsGM69XhXpFyfa2BA6vAafiqq8Jos6DvEo98R2PBaMD7Cg85M53D5",
  "key30": "3hAUX3SQdoVUzetEqkc5nbMtodjRNxJc491sLxLMA53ZGsBmjmXAEpa5SqpJr3GCLZ9ThYFjRZq3xCjyabLf3qYX",
  "key31": "2ppME5Gsn1ea4ekkx4UWWUW3pA94niauFQnsYSMVPN3uaW6uxCKMH4UCECaCVH67JCJpgPgH66CFkeTpjJ2x9KTj",
  "key32": "3LEowm8GkVyV5WfTUM6D7kA8fa8NZ9xufKpvCgWkmf2LA5yPChP1FRhxsyVHzBDm6Zy3PcRayFCcHuYXnKLQnut9",
  "key33": "5VCFxanjBmgqRiYHD6bCnHa95H9vq7t6MyhGrYgXe3MxavYrWhG5gNBewWb7yogRkyQ2szgftMzBRKy1eBKqZRdd",
  "key34": "5vHipfXL9SVB9gHARwWKkYNjMLdZscTfCHHTNs3Da1QwXFAU1bCBhYNsg93oZNFujvpbMvzpAGdKH8PvbwpuKo4q",
  "key35": "5XmWV8a39CgxxWgUxZMJME1VE9rHNmAJ1Uj1jgjRXRyhGepBD4pddcSG2HkmDh4wmWtAD74eZPcnmgPSQuE9cCkS",
  "key36": "3Ju9XheGcrXAeK5pNRa216ScBeGxUthpEiLEMeDjWZZaAuvCRi97hJXw9BZ5MJWBNb6qoxfvZB2gyzG9aJN58p6V",
  "key37": "ty5QxubZUq5yMAcb1iAkyownrvLrn6EYErcGYYDME7q5HQRxskQ6Xwe2BKn4fBPBSfTHTMVwkzx3uTWuFBT6aQc",
  "key38": "4bcvHBCxBcD9tEGB7hRX9P9QBe9YtVe4KA1MkA3No7znRbXw1BNKiVR8aHkCtpuKas24Zx5f2K9WSSNi5WUba4wV",
  "key39": "23r4xwT1RAh4e73BSp4qdgkZoVoE9Dj9CfjKbedbxk4iW3aTL7A1LeSCw3vFkwtNc1tryUFubN8UN3rW8TXwQryg",
  "key40": "nXYs4XCU6nj198CenJxUvK9k2UecmEETeBnWeGGGjP8Grp3vyPpCzGiPf3RnefpU3eH6i22D5whZqEvGTES66wk",
  "key41": "41peQEcz3uZbuBcLon4ervtZn1S7wD3Troe1DaHX6JfjfCUe8GkwSTgH5YdVNEh4u4SW1UzPk79RSUfBSmVVboNd",
  "key42": "HRMthKtsfrtGBvg8ftLub4nQwJYyX6nHj4yxqHiw6w6jheuxEw248CA3bT7Xrrzuek9dW49mgbFnjfRzEk71aE9",
  "key43": "2c2e8gySWU1n5mnqnE9EyUtBSjgLuKkbriyie5KBGPejjVpYzxgg5fR16PWhFPap7tFXnZDENVs3VD76dYepN1iR",
  "key44": "2mmK4BRznTSuEC6Mwv7PgAoNPyyScqF6ascfe6ifoSzZ99kbWU5kX5h251G9qxqr9QAzMbiTZUTn71xQsuiK2xFQ"
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
