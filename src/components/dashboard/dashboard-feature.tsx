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
    "Hed3U3cv8KKSJzzNuH7thXhPiy5fmxD3QNzLCmFtpSYfNr3rmJQX1RZ8FRGnaXmCA2MadR1XGPmpsgM8tNb56YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gRtS2BaQxba8fjPrDdMotDf9MTsbLpc2XVXPvMDoj3s6QC37MHqQ65YK8oYpghazMJzcaxRsRFpkaUpMvBwHkiP",
  "key1": "4Am4drav38LPR11HvY9d81kJ6MCz7Jf7qAaqrC6sDnDGjks7aoGy22FTRjyyVJictgL5NezTKspbgwjtofEcoAUb",
  "key2": "4TtDFRTMztvbbwcfDRjDJKqFVdtZnh4F3Rxxzh36mh3XPaAFnuFtfigG7qFSU2vCTsHWBTVgoC4F3JhzpW6HhmJx",
  "key3": "3GxBqxkn6hBqec6KNS99qJKAkfE2cojYYMXp9P4xDLYagwyiT6AGUpJKLBzShvAgYytnLoVprpiaEnLAsW3y9rJc",
  "key4": "2DU5GQcUthNZwhHrFgjKo57pHgix5kQ7HXvCS1KFe5hYg3xVijikYtMNjy3B4eAGCDkD6PWRTHerLBKuVD3Q7Qfv",
  "key5": "66TTx86c3UKsfhmzb4ZrHZqWcuwVUS8DF2XDAHFfzwRvJHPdsEdBWQzekNWyDYr2Xz4ykaR71yE7fg7ub2qw4HRr",
  "key6": "45yxEeMhBjzp3iqawgKUywkNJw8Mh2vvkWZT4evwP9qCauZSaM1DWy7eaqXDHQY5k7Qn6EphpT9qzs5qQaY9VCfs",
  "key7": "5CrT7qZXWhUnpMG9m7VDFFphUZfTr1DNAs7TGtTKHUA7vBEaih4sZEZ9edYUzBAywRLJorqmo8XUGdAuyxTHdHyg",
  "key8": "2EAT211ZoNMVgFpcBEX37j3x4WhPs16g53PUnmjYGRMC4CsK5uikJkRnqxf8vYnrBzkTyunUj2ene8cXpeKJQoJX",
  "key9": "3upBQngud8nCbw3zrZNNXEmrV7i39hDBdw22qXirQ6sxMt9WsvTutF3AxphdGhLNS9gYsyFwHchQEkkq3n4hRzSs",
  "key10": "5U1o263s3H6kDEdo1r5W1kHfaUfCTpusXRmvdxSRW5Yg1Ta1MP1toQ4EsWCT6r2zL4xmwVPhPA2wAkAjTiY8Lova",
  "key11": "3tfkmw6MhH5QQ6atUxmB9zypTU5DupGGPjzQaNeLewcULrjdqUm5gHhovyMHt6SEVDqZ3FoANcVWLo8gMzyD4qYK",
  "key12": "XkczWJBknRpt4wdDSkKYHpG5haeg6bcrRw28dcSb57bVYnLKMHSTABFo33h4ax9RzgNWtSZDgbDeypTXR3DzN2r",
  "key13": "3s2Nr5JEBbCe7p3bjU6SdQW7dqzDFKYFiLHsWYD2z2dtPMJAAJsnE6F4TfQsSzn9n72TQa9SfC4XRmX3y3VSr5kR",
  "key14": "3FwSei1UtR1b4SYXnGaVa8nFveuacapeQSkZ4dhNV1xtRKzS7YDGL4siznXtnFducUSrzDv7XwUS7tn1eANMcx55",
  "key15": "65Pkw5KNBBVPH1UB1t3sN3Z3qQ6iPtJZmvjWEqXYRK3UJf1sHZWZN6PKzAMYhsAntyegiyANVryfgutfJicU9xgw",
  "key16": "5YTBYWhjEvCQ8pDFDui6DYm6iMsiVnzkqPsTTaPDSuehNdfYHgNKFsSikBwDnmRz6hVM6WQZ9Z57yFuVx9Xo59xX",
  "key17": "3y12jVE35GtZT7HkAoHCgnVDMnRzttTLRsZnCsVCwoyoKgt3ykybqGpdD1tXtQTczLknpk6QB1uEoxp8LPFtSCUQ",
  "key18": "3DXfuDEnzRKCTaWiPQEe3fodCr4FEz8Z1j6hP2FuGyZkbBQTxq2vmHq8LqgddmxHsWwXoCMWJrm1FDsW2q3RntS4",
  "key19": "eqynxCT1npFu3cALKsGY4yzEFUJww7nHzYYeDsH7mcnrJ7aMtqjfbtyDTULsACJxSnTbgKWWUCFVJ6JYExuHcWB",
  "key20": "4uYqRArFcqjWS6dvbXyjANupLz8PtbQ3eFawJz8dcrXXfHGSatxsWrHgRxgCzEZ6wuLitGnARzBe4b9AdjGzcXKZ",
  "key21": "2SZjapDNKfSNsn4VcGytiHNoDNNKwjAxRU8vznzfWEjK58Ap3m2gDSsaBhhHCU9butNUdv5kq2T6FgYniq4Q45St",
  "key22": "2Tmh9yrpSLWhxkxsdXcGUhgu4dbeQJ8tA5drUreZcKEWeBRSEqgkfhopxSjZcfKP7wAfDC5wYVjsUUigtAjAquvu",
  "key23": "3hcP4M112WuPRdeWw7dfPVfg7gMAKvV2irkqvKDwy9nhYC976Ctj7phcxeVJ9m93B44fXguhEmKsS4hUhK9tbKz",
  "key24": "3PTvXAXyXEUNDcZu3tDH9fKP1kJzVcyTeKZoiVPaopMTXs3oAr3vvpiucxahbeaJMYqYMKxxBighnvioSVNi6GR2",
  "key25": "3DNKkH886BngDFTuPpDtqk9tpphqpfVDwHnDyaop1DTr15Qtpb6cCDey19yNBPzEhSagF2pVgAtoARHquVS9rRpw"
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
