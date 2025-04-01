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
    "4jFHC6S1JzNoUG9CRpq5k5R57WAG3a6eQoiVaPRE8R4ungqE5ekL1y9JStFpKuaX5Y948N8vbXWJawTRwqMt1tMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MeZ8Z9iMPokD6Vqg9uQ6gd3f9FoVLkgr9rWsNmE7wHHmHLLT5u6pzu1JipZbHrZHAD2GWqLcmyZLUSnK3pENFgx",
  "key1": "55ZBo3UmnmdT3LCcsQRdqf8C4tGQGYBXLZX6NRDJjBkozPHF7KrcygLNGFyschmBacYcAbhNMYdQebUMD6xooEJM",
  "key2": "33go7UXq6oXbomNC6nrusGRBG6E2ySKXL6tVcP5MT6cn1FsqVhNUc5fVqPNQuGC71svRrtmST9cV6sowkVF69nHy",
  "key3": "4JZAjmZBGRaZ97ctYLKDXJYVMaUqUBasFq5HJT9xcKAcQ35754ceDAyu4szy2sZaK4JFwea99HXCuhjMAtMeStsV",
  "key4": "5v5CF25YyDnRPnAMM6mLwTrHtaHJoEHkA8zQg9c5AH3h3mnAbkQwZoWik2xeAqEz3fJxsgLA9XdAKVHFSdbHmWp1",
  "key5": "8NmPuzATXnLxdND1a1TMXUvKHBZbe9vM4SZUpLPtvFJDjvHHLgCSghCmT6vzdkMk2DrjufZ2VViwWykM8RFg82C",
  "key6": "3GAzNP1QhsYCDX5SK23eDd8j5zXFA7U2k4Ny6h3v2TRRoagn8AQdcGMi2RHbf5iXAEPC9XBg7s3dv2vhtAGZsy4k",
  "key7": "2YiE3mdrxjp7vPWAo9HKgrAiKybGqpfwhAbjsoMaCHgwodAJ4Hb6iUaHNEUKAtz7MwemYw2f6yWi4UybEnK2cmCH",
  "key8": "5ownTPVRNEDxiybDowBKzLWBr7efk6pGhbPh8Aup1EzAeXDHhSoPQ38bKeMet5DAMvRsfWgRv2JmnX5UZVpeWXpM",
  "key9": "4HdYFpVsFTen9GvD7nwvHWJH6MnXqJT8Z6kZzduH4rPk8pjexJ7bdLH98CNTxZhs4Fxjiaz5ZA8SrkyYgF42KMZk",
  "key10": "2WJpUFDTbRYBQj7KwAf34Z4S6cDunTPndcB7kiyGPofUV3Rd1PFP4rGsvD54P5rwvjHckhe3z2nBfnEGfjujcxqY",
  "key11": "3B1H8m3eUALKx2NnLP2pAtXnvi5ViS3ubVL2gHoAQLqt2bTktdZYQ9ZhkVx6BYz59ZsMCR34ZYrLeSi4aVgAcuni",
  "key12": "4Q1jkGpdVvJSJZ6brCVQKaKK6YA2S71inncZQw6fBiibxnjN7EeXtvxsxogEVmKXGR17A1ctgBiudnVEeJDDnzP7",
  "key13": "65H8Wrmz6KyeCsSDo2iexFUG9ggzmT4ZXNZXhiNiR7JMfxQX6i6KzAWv31wWReqDuSZojMSncv5iuFfv2pqBukoA",
  "key14": "3ZhbhnVUHv3FrptDrnJwnKFFeNqsBRmzpaDvFFpP3HYTpq6f9NbsmAKPTfnEUZuJZn36CmaTjtm2vuPe7tzKHQ33",
  "key15": "3c9THWjcjgJSdix1r2Npy8Q7LkKoiMhUXByFmjmon8tfgaDtxWHzYrDPT3h4p9K89ajboov6R3JQA6YKdQuEJJbc",
  "key16": "5QcyTySuw6AbKWoSbFiRWmv4rh44aCvAPUDFMSCTmquCAEPGyJdeyxXXUPWS2Hteha7aeAciYwaaBZCbJZ78sgqD",
  "key17": "5vxvCPjWDV5LUMjCDpbU9v8WvRSbR6tk6DGWXs5zcAiVXMQhcr2bRdc9KLSmdxprppg1nF9QMHCgjZbZEm6UtQyQ",
  "key18": "49uYjcE2dTfUJG7Z3gKxLhmYrw8Czc168wuqipA6rBFK4K217s7r4ot8CtiQnDXrr2z48cmTWVN29CW1GyfYV6G7",
  "key19": "2wtGFua4NBXw1NRS8wtGgrtsKYp8p2D8fV5ZEdTctUbbFF6BvTz6YcHwnstgd8mEBtLBjiSZCvxsRpgWvTvhznth",
  "key20": "VjX4dfy9PbCbAjdx3ytNtN2fvHHFbnM5iPqdGfq9SnCS98qxj2WuHCvRCUmrWtiUJmnfS1HYyikn68UjnUEPGyp",
  "key21": "8jVEun3K2PEgB6idBwP4EsdowZTq5stvMZpwovf5A2hRnWtCTomZPuyUqmJG1d36KjG7UeTRXXb5WuDDZwZk6aA",
  "key22": "Vqh9AZnX6LjSE3L2o6vHShUWBqLkhSJTNDrcd1Qs1dLxXFN4cHKHQtVSF7LypfkUXimFLAmJQ6HFQuAEEWDMxpD",
  "key23": "2ibzVPz14KKoactjiY5qaGom92aA5Hz7Yi7vTKNoQdiw8VwTrA9Qzs1Fq71EYtbhgvHNYijPp8xj9BPA9nUXfu4M",
  "key24": "4ANjStg6u9bMqXGfwopa1rfSKFRHyUyUprD8yd3xcuhb92twJArfsFkHisTxQv4cBt3dQmEs9tinTEHqFJhkV9R9",
  "key25": "2M2BVqnBUZsnisvCN7jZJ8LFSx5sMLaWaV1jomm9XexViWbFPiS6CFAsPGnhaSKHYMdT4XNWrHtFiLS84u9DQNQo",
  "key26": "45fGuJbLyMoGw4cVkoEzuWD4HiPFEdHVtqoxLrMsGos1up5GMyeyWU29TM4oi28xqw4eeN9PKbMoPKFedc86WVY3"
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
