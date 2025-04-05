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
    "5gWyNYJ4KWidNhMrjmBWxsSHwgb5QAQYh2AT9ERPuuBL8fPVixA7ExKtU9w1BJUECs9EVrdSd645AfaXS8BNkF9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qD7BsvdysirP2UBAUQKfCrZWiesWRMQ3RTh18egF8QsrYqwpWJJHEYjDsBC4WZbDk4wQs7ZswLLaiN3nv8Zw9fq",
  "key1": "4en6jC2twFEWjN5WVn9sQ1iTrW7hQCPKGfKozAUmcbJ4PLDwLkVCXumKwfmAX3mmBSRAUe2EcMVN4JXtdnPvbRJj",
  "key2": "4zn4xD7Khek2rwqdpQs5i1LPEMzL2b1hGKGBoqiPZDi7SFFNVJFMkTF9xd2MaZCaU4ZfMYyKXBBPKoLL7qBwAngP",
  "key3": "28szsegPjA3gqZD6cL5gco78StotR4BXbveqBoLRkXFwp1MCL4UAoDmf28XxoXnGPextXbhftPCmoPi848mfuozg",
  "key4": "3Aw7sVZRUDyFsgxA8V2ffeETt6vuxf1zDWnUwNziWJ8ZueAQQs5K44tvEvWMQLKGZfqFNv9XbmyMSWvEkhju5FDP",
  "key5": "2p9tU8Av7YWDyAaLqiVgMeVgT5kneie3c5uS5yxbcSu9zd5k127x4HJjdUEW6PXx9baukUAwE6oUadWzbkSiAw2g",
  "key6": "2VzUuGCfJqNCMuRYjUfJ29aEsekBNRfMTp5fZfYhr1rMuGLonyehak5UA2HPGXQEFuVZNxzMUdyxpuTyEGxJzFze",
  "key7": "4TxH1AY2SpX6dUAChi52RRiNBCqZXocoso9YXmrzcKwZvdcw3eDponZb6st43THdzrtJWbYs3X6nZ47xbBvm5viX",
  "key8": "5fQBYAu1kYuCci4hK8n2Ak9AD4YuP6iUPpXjD6VyhXyTnXA8iqNJPkg4qvoMj1RoAyFXQbdH7PoYWgH1YiepvxbF",
  "key9": "QKBfsR9m2hoDFxZvpAHYTs88BdESAogX4DJ4auAtYbnCKCUdWpFLRUS5dCruL9M46U9DtP4pFZNej6cXXXdDz8u",
  "key10": "64sKa3S1S5vQDzmsAinGWWUmtnGaJD9LNVcE36PgWB73t4bAtuJabzt3hoiVU6AsYoCbWV4z7quLww878C4F8czG",
  "key11": "2AgfhZ2zTa3RU2W2PJNuvhR5RfEkkEM3GRJT2enHCTADk1AqD5eEXtRkYrKbvWAZugUhuMg5XoBSMFdKqj6ekfcX",
  "key12": "4w7XGNvQ2EepAks98P8yPNXP9cPnqMTtQHHXByq4qY2uXvKGUDGTH4ExgpB1FkFNLxotwrwkNxcsRVw7F7Fm2cTo",
  "key13": "5BCptNhK6iCnh3WMWTZbAnxueF799gCEVgTTzm17L9eGZtwn9ZbEBXi3euVmfDxLcd3QiYUJoVxDDb442k8NQc1Z",
  "key14": "5FRqyU1dpu12gJrz6332L2vM7oe9QPgty4cN1s8n4ohSNCBQEawqcEeDJPt8wYEoZK3DzcoqwFkFbVaTEde4GeN2",
  "key15": "5uRkXgrH8RLcGvyqjax3EkybEraWfFjJVFxMzxusEWWb5rwD6eVM9QaJBUH9eJKfPsdLrmacrmL2Ujk1PSJWZcBD",
  "key16": "4A2q4KtG11mp7qRqxwkBXgFtHJ8nD7UhtHk7yheMAqLE2uCnUwTr2cdUSeG55daY4RcJDNhYVBbDLyBS1uXiETX1",
  "key17": "2MStXDFEGkU3FdgB7yi838zXrszC15gRBn1Mqhx2Lg55vLgo9hah4qPp4zFvACqtQG7uZZZnY2d6baY2hEnfYmFS",
  "key18": "3oDhEn8Z8avWuip6sXhJzPPmu2zPoNDLjy7eu4LX4mNxNeNSfA545m7NAo61CJaoXsDMbmGa1RArc7YXT6S63tfj",
  "key19": "3H4fZsbj4gNPQS4nu3gjb2otnQf5gnaMHSX6BcrYepX2wN2h7u6adZrTrpexNKS8y6xjjGmBJfHsAQfUp2dvHYWm",
  "key20": "64zNuJKSWm6xSDaz7DdQ2QeBVohfzJskzd5H1rzzFG1CSZnGR3eTJsJ7n4wzyk4ghduzPS8r1JFjkTo6fW3WMSyc",
  "key21": "51hs8dtPtEUQ7VuvePNYtA5adETyxGc4LP7pnan8sA3uSQqoD1WVTx8vKM2TzHWnquoYz6TeffLC8fsmPoymhKHy",
  "key22": "9QsSJZP4TLF2q5gBnSDpZHYBAPQGsXTcFr2Up8Hm5V86ykx9vNWWXzwrh16ZsTVbBtFY8KAkUTCnqnNJe7CkeDi",
  "key23": "aqoVyPdMKCY55QhGfeeAxwiwkKqegJV49cKBasftVv8d5N91FzoctoYrYNkbgjDaSCHk72P6U3vq3kKuwkjFVVx",
  "key24": "3JgAtRt5cVpF8P5XekTDuvquVn9YUqvKGGTJsb88gE1XfsYpwoU6oojHvi9bJtYV5QSmwNPPT3QcUoEuivGT5AA2",
  "key25": "2ET3qYuBXdYsQ9y6K5uUd9oeAhDxap3G8ruCND5vud6NHdrkbX3AqdTsH4PJkZ43RqEmc47vGBLV2xXocEMSYYiS",
  "key26": "4zLioip4mBYnjHpBcko5o1oDnQYFczQSWFpjQDhbDUBGstd5yp91qGnf43vLox7pKQZr1PnScxqPojnjsNbdi1iJ",
  "key27": "5b5dfwXPj7g3HPGNPPThE2erhm7igQmbKRZRim1iCKFKoTzGY1GEnDLNN7kosR1zPMa1fuRLy577hhTuwgd1V9J1",
  "key28": "5GRmXGT1TeNScn7zqeJhLnrXizoMykte9rDdUTcrFXsX2H1GfbLVXaXoyZYdYhCd6MWzq9CC8w5YQn11RR33YTum",
  "key29": "2xskBBQpnEvmaCrg1Hd3cZQoJgbqXdpPZwxyqpjutWXcpgf3QV581uqZB5HTZ4TF3HPKdxSgw9YgQMG9uYQK9kHN",
  "key30": "4rAWfCbsLZ3rwzFwHPuHnGUMkeo57rSnU7voVahT1MCHemjAZY4ox4FA52AkVBpoa7rp8trUGmPPY47GKnxzsQrn",
  "key31": "3ho2wJVB1Wj9b381gPzirKqt5HQAbttiKjeEA6VbfWRYEKavzphKGnrDEKZJDaQdoNdCrdvNjQ3qi7vARGn1NcX6"
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
