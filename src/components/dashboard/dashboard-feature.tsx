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
    "5CSVJZKZQmkjpp77vXyEq191VsoTCja6bo5WUcizS9fD5zfaPb6ehvL587oCczZoHSRqQPG8es9sM1kp8otQk3Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTmohYaxLX38mvZ9G8mkJrbFuzD7cWSLu3qbPRL2ep3ezn6huAEjLeZsFv3jg184in3pdXTZFpmd8NYhySQcnfM",
  "key1": "5wJEefZbhC35PDQ6fXJqcSbPjLMGoiZ5qmv1LQC36RfznzVfRuKN64XaPWRXWaCyddtY8HAMLj6Qx4gvSyQQ41Gt",
  "key2": "2zsbWd8ZXqAzzd761t5BdsoibkvqkPutC6F9H9uxGvEM6TCAAUMCSgyLiT4ZrrpdfZaY75sH64J9KRgmMGECPBtk",
  "key3": "3Ws1K3Roj4tc6gXFUkfLiFvTv33Nxx9Q6KvyMetYd6RNngQF4hD2s9e5LjdTGx4xVANgdTAjh7p4q3p3fjAga1cn",
  "key4": "5QBqnNEwvugCDEMSLVFzZsZqsX25KXa3cmsCATf8iEuT8QM875ofdSMBQLy4iPhhM7iWhgcSa4hkhNSE9GWCmYq1",
  "key5": "4o4bAYNMcS6XWHo6651YYkUK5fnscx5CHFsoegYTicXsh86nrMF5BwcR6stmvQgw6uQqRwZUD5yoLqaF9bAHH2Wh",
  "key6": "5CF7ciBfg6Q8akugUV5ABP1aGTqD13q4r3GchSB32BWnfakdiH6TpbrRu9CfMKcycyaRbNBbVkYpdcyJADG7gP3g",
  "key7": "3Tow4KoNcHLxf1WtQ8C5y9QzADcAEXk1Gh3UE7Bg8E1V4nh119QR6suPkt3MSuk72wj7g92vAMLmJEYQfmSqUi7t",
  "key8": "3syePkaNTxr9HhrYW8QXDZXEgCcppf1rEagoZHo2g8T3dN9uPzWNwdXz3pHubboMMYGb7WwJnmLx1vB7dGLvhi8A",
  "key9": "678zDU9Ne1nYJtFsmfE14QAXEt3PsEm6saGKpxqbHqQybhGCBkkhiHr8ohdUjkqf73vqnnz8rEcTvq88v4yJLBUS",
  "key10": "3uCghQSTWFsmotpCVLyw8uuPDoMbvmceDxqdxywSW8Uoej6VjGAvsbdgMeuv6P14bd4Su3Qbi3AYiixLDc1WEiHe",
  "key11": "3yNzqcbHDTM5w5zKag22n4bRkUt4yhn3Z58nJVVcCdCj3KpUYj2DjKeyx2xSWYTz5SVE8qkeHhTBc9DZ723XrXng",
  "key12": "4TXCC5fjusgbWgqUUX6szT7aeFCKi1XaDH76nXt9AimvKzCcpUjM98g1iWzDHWpEnyajdYKxxZZT9We3F2cjf5Wt",
  "key13": "32JQWj8df5tcpeFzWrva8shuBUWT1eZJAq97Zu5SpbhaaLM4seToRX8HNaVjCUjxQjbKNQYLT92CXDiKPV7pB4U6",
  "key14": "2RJ5uRZEzUQPaPPCD7SeEXiSQZqfm9YrX1pdfqHus5XkYWavwkKkki3kV983ixY74sDyDKsWmNVV8tDHnjbQABNW",
  "key15": "2neTZ6WS5dDhLwFaby6Nv8EnDRCdgEgK7dMffbyX4oHt1oAMZ2ariqrofQXJwNNMjHjcrX721YkF5ntFVBUyRoRG",
  "key16": "4XnpdoqjD8J9fLCgThasQf6CyQtXFUdFKLPnuhciPTLeAEYAkJrRFQcwzZ5gYq83SAMJCmaSYJLTUaD6EVJBTVeA",
  "key17": "5HD7Vex8wbBiXD8gpzPbMdquZ7WMA4ys7peckpn7Xni2YYxXQ5E78h4gqMRmQ12BmVUPKFR9RcWgBaUThPeyBiA3",
  "key18": "3qwTLhetvYUcd9E68poqrY4MhVnVYG8WkTah6hv8MMyUKBQ365XY7c56TnSizUSQmwYt2fW2hmGQW1Yh4UcC7ap5",
  "key19": "3vCCD2e8VnkffDBhbEETPuZcaZuyRPVxGnSmLMLAXYLWoYRxT6XeMaTgv7WZJxrXSZDweS1pDnSD3P9H9zLcht6w",
  "key20": "5KGMZo3VGYFn5kQTQUStyRAmieKyMf9yv6yCXoBc9PyVtfUoxRTc7HswPXbau9B1EhBpXT84reUMZkD65jdGUbi4",
  "key21": "4tegvmraXwx4A4n3vKjLbKZPLB5dfcorKF2iJUtTr8aRsdqV3TTUDzwSm8NcTp8fNy5CdD8oHvH2kaPn5c59YV2h",
  "key22": "5JfPFmjbatUFNtNLj5Ed6SHBpWe8nLEYFWFr7CyaybEL8QsPnUYQTVv5prbRL7mCvxaBc8hdYAh8z1fvQB2KAVAr",
  "key23": "2jZ8pbeVH2uJAzHTdWXkNuUfVPAmbf4ZrdRJBUi83BXCY2b71HW7tS5NGvk72Hh156625ZfYqDbhctxRvaggZcb8",
  "key24": "5DyA5m5GCmZQ9fhMaHty2EempmW5S2haDw3zUrkwhUBMwMqGoDFVuzcd3fxsgdv7A9xfBYHdB92TNY3dEjJegpdn",
  "key25": "664WYKiTHMp1YFDkxxQW23MfieVZR6hV49rhRivKN4mpSHHyhgbnEgW9Pzxe98LKvXEFUEY88ceJ7mYXYhyvwBDm",
  "key26": "4xt5ncagNDj44Bdvtz6kYBq9uMuMz39VpHcxom6kFBRH4BFWXU8vg43bbMUm9egho3Vic2KFCH47H4N37vbEYrRL",
  "key27": "4iDrefF1Aeh2iuJXCCY8smsV5Fqg1YhwJXY3XWy9SpD45YTo77pUtSpXHQKUCZuiPxjdnRyAWRVkzjgorDqMoZxZ",
  "key28": "4XqRcKPK4hpEvTaTi2ucEb5Yj9UuQLax84wdJwyr42D43g5ptiNVsziWapULazh6qzZRqRrGVwL5KjEprtjc1K4K",
  "key29": "59vYtYuGaVvYBZhGMshPyjwqS4Ewppwk7Fyin64MgVuf5KTduAy42TTa3XNmGfxGPEFpSyFgniEUAomW6tuSrE6x",
  "key30": "3eUxW8UNmVTriyz9L9oVgD1CSJxe3f1FuPKhc8JxPGbuK25kx4SwmEugw6wU8KmiC54USWjuYTd6Kpz1Ehy1qTtZ",
  "key31": "4knmjxtRg9h1BunFrYLup1HdcYfoH1rqwZXP87xE8NuboHj5XABtxNBx5QTg7ku93eStznvWkqW6ZCnx6SF27Rpq"
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
