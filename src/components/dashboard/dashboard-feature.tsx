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
    "2m9H7bjxgbmYA3mFhHbq5j5xwRYgtKnqsTDvpAm3cRx2r6RG9YK6ybvCeGQkUuNphksUsLtnWoKqumDeXy6vTCXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HrMfZzMWpTSU3E5u8rWSXMqB7CcuyKnApwaZ4VqQYc1wRGLPQUupairhW8qPoMdbiVxge32HMTw1L9jpQcxbRWb",
  "key1": "4BjffBcoTbc1ADgPWX2bJfDN4QNku8r9qXXnknkCPtU6Geko4BSVnHAStCGCvefy3ZzH1sCUoAwGtF4tnhFcUrxp",
  "key2": "3sBfe9Jt19WvWHxRo7oCUozqBHcxKzZQo4zhRiARP5KuMf2cRLkguu39t2yfwDvNydDtt2BWfB5kNmKc4bC7VCJi",
  "key3": "2PV6m1FxwWVQNA3xAfZEUCaFgATveSz1eYreSVD3EjTHu4nyg9JBiSTNP41xat1mbNaqa4Z7yV5sponKHG7AnyX3",
  "key4": "2c2yHoE5S4JAqi7hAk4TxcKccc9pZJQSJa3WK3L1YQh6XtPzaxbvZaA9pXLbrmg3scvTmLTG6eGyvGzw1E9yQUWw",
  "key5": "h5AUueMzUWGkRuye8NzBDG1REizYS79u82y4CfJqYtc7tSRh7esrDWE29jvsseGmh7betLDw6x55QNfn9H8vArV",
  "key6": "2sFM97iYuGGHngjFoqViQCBLW6JjpyxgqyksubeVaeWTuSKR5rjwXts3m8mBEnsneZkJnZ7mRFe5SqcSEaUrKQra",
  "key7": "6HPH9dhk8xsa4EYjZtfEMXoKwnFKDyg2ba4UTeJgapyM8ZAzjUEuxFZYM8YkSwrzJwLgCLWsK5RXVJyiJuqA7sY",
  "key8": "tekjunsobzkxAEpJ4uDp4byGuTDbDtKFDYJH7aeJs5iFUfzbwNzMUZ8nJF6qD962Nk9byrxo8RXaZNXRMwYuB4q",
  "key9": "5p9aXrFRpNh7xoBogbH8AKn35T5Mopz55SfCLDSawbftCkyXJ2S75Qfai3fCVNu8kngAsAN1iosg8Pox3bmjEwwS",
  "key10": "45fPED3g2hLUVVY2zDiuaPkZnMqZ8V44H4BtXAyLwcD7U9N1vHFksiLpuxB8RNdgjggWB9EegPLXy9UPS1U5CpJs",
  "key11": "5ZCHn13w8EbdPVrmDPnCmHwfmMVmq8SFTB2vb1jFtDrTcJNcjSWf6aMJqByGhKMkTobvJCmq8PbaKuUgkHSEjajc",
  "key12": "2KKe1dKcMV3Js9pKNuGosu9wZgZ3N1MiP8vH2LfX2KrYXRpT1bTFZKWKXq6JMUda3sWLgMCW5JGVcgQ3FGVbiRbE",
  "key13": "29rVCZgt3UYAZ9b5anPpHRRYKvsQQ2nYM6HAP3umeCoEYpU5iMdUdWrkyjV6m6w2mMqCv1NXoDTpGDcE2pPYAj9q",
  "key14": "3xCyYh1YkUzeMtB5ZRjouJW17LPYPfJXXwNachgWpXj9eqKWcrquptU3UzfUuMX7nZveJ2pgS6XuLieg2ZN2BGUQ",
  "key15": "XRGLN7uUFWWGMVrHDWB4PwQ4m7ARQTpVGeAwr7ujRkY7gEwHK4vWpkmsrmrgoHPSe9Ssm8a1r6T9bw8HRvUeeX6",
  "key16": "ULTcRfsF4kWp8s7SX5BduiKEF58nnPVTbncBpbEJpfWimxbiJmTEvRx2uRYBPDQppSvkPeeVPHfk1FvcH5aRW7H",
  "key17": "4Jetcz8kKQLgUU1RP3vM7gUxfWiwmJzyBrvuTEpYdwWJ86CJeSiv5LXzpoXVx2Ahspp1U1idVqSWNVr1PCF3TqRz",
  "key18": "5vD4u6hctaEDhYJNGUqNEoDUT4RyaSc5fRM4jx7YArJXhfbDF2TekG8niNfamvuZsYWwPnHfBZ7FRZpyHnsnBbfk",
  "key19": "3YTAawVH9gVDbYbyWjCswoNNqc8Srm6dXEYDSc86XqLJRxNJhUGhAcxdysJ9Ber1W3zfUuf9NwVzqDwLL2AT2h1V",
  "key20": "48HS9WKu92pQ79rcZwt4tcBb4KYdbHi2dt7N9b4gdfFPVv2dcWu5CKmiC9K7wV7H8qGaDNU54DZU65hH5SimknZi",
  "key21": "4o9mbmK6TxDLTJqpLbS5WggNYjdW4wq4z8TKh5gQArNFcRR7LQUBoUKTBUWFQ9PjPuwyr8hvaoJ6mbnJT1oP7isf",
  "key22": "2MstgCjXdBdJA2oxWbs3KmHqo95t3K51a3s8wySX4Hq9hSwcmMWpPNcNkNoXE6W4i7VBvpjkww3dhfrT7hXsSSLQ",
  "key23": "3FMW9XYA98zEKFTUx3TAJCyYGsoUfGCMvoxdR5GJauz36b9pyLobkUoAbfM92k7i83f9ryVJZHJ2aidUfTLVGDyi",
  "key24": "5zimwCXMTrP1Z5tSGUQzLNFYqBdoNVFPgG1mqiAxdiUMLxj2YxUAjAwxESQcsKLpx6JZf6aQoizwK7CEzUm77QAN",
  "key25": "3GSpi8G2V7WV1SPzpKdpUHWkmTViJEoNcLNeQyJgNcmkbyXwpoeCcEirXRT2zwMHqArKutPCnSrtMzmHrSTVeCbR",
  "key26": "4TDJ7BeAhNMgs3PvKTDHTSSqmNnye4YVvzM6fKXE8PVJjkFa8bVNrxHs92Xa49QE6eaZKTrniKnRu8w5CnP5bQTU",
  "key27": "2JQNTYEqSVYGjkmftvrFE9HaMYghSeDxAAK7FcyXm4cEZKBSUJvjJnW5yRSs2MbD7ijo1DSWnjQjUwXeSdYBMHfQ",
  "key28": "4H69TA823NDSZXoNU2gN3QB6LuuQfSF7mtTqVNkGmmF1LcGk5iEqPMdPxPox1ZNckAVkt1E71dw6uTNgWcGMPnsM",
  "key29": "2RigGzFxBQ3Tmv2T24hqeTpPczc4HSNJfc9fBcwXpUix95goYaaYo73t6rSeCocR2GzTQ5MQPHGwFii5vtQrx3sc",
  "key30": "37u8KWy73hbF8rKeG39a3wQaYZrA63zhcy2DwMvTrLfH8WMhiPchDRWv1ofXBoYQtTYupp93AUxAT5479vvkYtAa",
  "key31": "4Z23Tzeqw8ErHQxQ4WydL78y1gNYhkcTeK8pkKCiLdXE67KLHuBx2epawsB15EXFKH1RB1NeVJpfcKkSaLhhPa1z",
  "key32": "51xEAfwmNPRubojYGm5ztKHeYubw4RMHR37o9aTXQpJ4c8QDHRBrKGsJP8TvnoTXHLkci1S6dPVYE6wciRC3FaZ7",
  "key33": "54kuLfawWuerxapGDQ2WPsocFEZxV92azqr8BwA2gef8MeTFDUGy6Vy7dGCtEDDHa2koo8qCM2R7u1hxmxyyLQGS"
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
