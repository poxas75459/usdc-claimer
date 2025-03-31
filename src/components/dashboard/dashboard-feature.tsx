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
    "wjAkP4k6h5dpHBm4pnAarov94f93oLdbFMxE5h6M3XUbu5ws3WQZvmkd5Qjp4pwMjHCJqjymu5zrdmsevXV2jEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24UqnrV9jRBVnRFrHLqhxLvWX3SgguK7JX8gBZQ9Bos4sSxug4g3cE5w7Y5d9uxX1yY1EDRRfhzk4iJpyu41AWSk",
  "key1": "3187x5yawDRWm7rzSjL5w156iDSfWzTcQXaftx4xu35L7Sd99YNPwkcnvidWbS4tavGMMGPcz9QTVVVcLZza1GDX",
  "key2": "2BcbJ9LegyW1AHizavzreWTYWtifGK154ijEsdd3SMhWMwzSZYnZRAyL6jkqbHeAaq4Hnx9VjJddEjFWTiWWnD9o",
  "key3": "4oAxdo9feqFELxu36Hx5ACQZpF7C86ey8UXwM2evLPcCKAb1vjkHwK3kvyN39UtQBqFyDYNQ5XquynmyEixQUF8F",
  "key4": "P7SaQtV8vZ78QZFaMqKeaBhAPFaTZ7YqwtLDAAizPw8GbbodZePT7FXJMkumyHjF54pWdMa2N8cn5sRFcDQvc3h",
  "key5": "xGHq2oqM1kmRk546zehXVLmmt4CGBzjiCmk759c7ozo9wXYGzC2c6muAUQ3ezmq2HvmK5vo8FLQ1HQSYGbe1aNR",
  "key6": "2BeaMQ25NWqCTAntzpitSobspiZ9FRbDDq7h21JGC5jRQ3CFeLpWcXEp1kuYHG36331ZrMpR63shF19jFPfFKtJb",
  "key7": "4sHFM73un1kNeQJ6jJ6J42CuJyhAgakH6yugpMQzTisfXxCFdEJFb6PSiCNm4ywTqZF2jDyoNbhd2dSq6wzvZPsV",
  "key8": "288Ec9zKNRJ4hD89Gmr8xT3KbQUMucTCZNtiUrYEYhBw7V1aLArTSK6kkD12J2WTiePjGd4x2QmZaMa5boXEGwJx",
  "key9": "2dQD3kMCyviMVnd5ANgdAjXkqUmieDjUtCR7xwJ4HVf3FoJEtRSDxxRgYVRUrECFt684sYWYn2bBXReRD5PBFbp8",
  "key10": "5TsF7g85pxQdV2VaBe1Q476mwyidhrfSDMYdtVLPXXQk3wVugd4bqvLg4HTdsEKa3V382iMcXRLizSY8Zr9Ujrms",
  "key11": "2ivejZrdsGsh6v9XmzLVDxTD1asuepP2ENpSzn8T4ZobTy98UiQ8tSdk6cQAtaYvk9hH5UFRE6Ybh1WX4zXSWsd4",
  "key12": "2BCWHArEufkhupeEXk4okoSi5vYTje1YrUWsbeLaB6GaqD7APrT8eBJYHV8fPfRqeNHg8q2qJKoPKre2RKzs7YWX",
  "key13": "65zTcoWz1LoupWziWFKFQxXMjTuf58uHtVdV2LCBSPd6Ks7QmubGjo2sb1uZo3EcBLX4zqbiUPVkzKR7E6wiqNea",
  "key14": "63GmZMtoorLPz4V27TzwyupjxTFBssNeoLNeAnW9wxbiiHZ78taevXYrVCq2MWBAQgu7GiCHp6t4SkzXiZiZN8aj",
  "key15": "2Gxe7qFbVe99Kvhgs5sf4VA8qPFX5Vt9fXkbaKYwVaHe1mFRLsdBVhz1vvz5LXehMKmp3LCLPLfoPPyiCQTWc6TA",
  "key16": "2dBvmxCsN5TTro1EEVUA4VudbaeRyn67V38MwhqeRrXXJ3HxyJWtH5F6tG15mToS2ZQPfn7KHxmWVUXTAvk4NGsu",
  "key17": "5hA83R8C8iYTqn3gVsZAaga9VaLHPNd1ddVR64a7cCvcVDYaR38ZkmCJFzehbS2mkjE3KGuNuAKGLoNaSfsMs7Vo",
  "key18": "5ETGZd4sxyLVoq7kdLD2HNAivVJtNAissMQqRABaHzD2Af8uieLY9wyYEgLD7BqLBmqKrDwTi178NtdZdwf4fN3W",
  "key19": "5rGuJgz2GwapbVmvcAvM6XxEViUXLSRPX88GYM13BRUvwkumweRUCA9uNZ412cH5yPK35hBph8ut9FowtgmvHG49",
  "key20": "4WDZMLeQf8uFybwdJBBw4dPjNh7FT8EvFeviiDmskpkahSonbjctmBvwq8E7EKvsnz6SEMvsm4GWdr3Vd8sWpLMn",
  "key21": "5nhBpeHQRmbFbWE3h3aqj6GwtWRiL6A85uEaDt9LfcmQ2wLSrW5wfxhzyVgdHq8pyNdoPFzsgQmYRWyro3RS71Et",
  "key22": "5YyxgbUFH5aSvKP7rs11RL75PKvHnAEHyWjcz1r5DRnDL6PPNTN7yxDhAepxAZ53ixzJyNEQBDnm5w3P6bZfACCf",
  "key23": "8CuBcqHTuuovkk8rBv27FUAcrbFfemKx8piKeVrtkUhrgcj14V7rjWVjNuynMikDw2dRr38SJbWrvt3wBnTdpN8",
  "key24": "pfyMkVJhRoPM6TYmzbRG68pYT2rHDw2nL7xPMSMAP6m8fRJQz1U2FivKzEKMDwqCdfgwzhx7mYmFU7wZ6pd3jHy"
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
