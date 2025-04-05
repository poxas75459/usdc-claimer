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
    "5PSX8U5gdmQJNr7yP89btpSJpkVWiarfVxpYtZzepEsLVeeMstEMBASPjegH1dxd6gpzx59P4d1LQABmHdWU7H9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MDhfFv35z26MASJmbCnCZpffps5yw1ThLYPir4e7iNDmfphxAHTMD19wSar536NjneLuFJ4wFaqV1AkNYPzdyQZ",
  "key1": "5G2tZSu88pHEiqBfjpsdgHJKg3B7H22fjm31T83Btq79VjZCXSCndJWL4jLvvygiwvaSmwWL37qkPAcZ7SKgdYKU",
  "key2": "3SSqbVfnpzgabUiuT7u9it7i7YaEMHykBdr8fMM1wucb8BFkCkAUkRxTPCYSpBSuWvRMAfU3WWCTGmoPGu7sHAPw",
  "key3": "57sSCrhza45R9wrJckZyM5YM7NdpjhieCsn9mMvwYpa1ju3wEPfyow2ohfXeQ7Znvi6FoYzptRjCbm1UtUQ2WefH",
  "key4": "5XShr17zjjQ7Jp1kVfAWHiyecihPbYxD3Mg5k7oapAxRaRKpiGvRXmc6zgyev1hJouZ62Z8GAQmm7gxHNTkDMBYV",
  "key5": "T2uFg9RBqVwepcqUXvt4HKK26wjygMAzUADrywptiRjqpxUeBTY2uyAe85R7kyGQoWgxYYMu1m8oDZ2GEj8bAnU",
  "key6": "6t4fhkGoP787vgVaLeK3A95MnNUtBemV7QRC3ZtTXsPybwc3ZTd54Ts6CChYBGfbqfPDxTXJKMrqGzQ3b3EQrP6",
  "key7": "2aC9fRrUSPhcx6yZnWt3VEubP6jHjR3muNcaAVEpjto1rzEaVY4QNmZaQHs8gNee43dMSPgpLBFwfaoHdiscsBkz",
  "key8": "29gSaFMvAd1J9D7LosRn4D2Xy9mFEL4perbBZ7QRxndc9ZugyC2sKobVRFA12sR8QCVmxwqdugHXppVt2iFD1S54",
  "key9": "4fahQniZos7y4nZjS1x5RR2vaXQZHBgCWhGvpYFJ4r735CKE1LgfkdB6oHnQd3K1zkPAEyHmKGdMjdc3LRfA8jsF",
  "key10": "4NVpDBH1QfJU3i5oe49TzTnJzo3EuxrRKdTB2DLayz4QiYumE6rXYCikH9s5v3rNTciXLfS42mDUcTphHVjh2vwE",
  "key11": "4cd5htxPAbkgbgD2DTFdGHCovB3yF8neXFyiZGoUuLtQ1ZwE5WY6SibAUUiseAqMgFoEFvP5FqYv2CPFUQG1Cc6B",
  "key12": "2FtQDoybuEef5wTvTE539Qwvsr3E2eSz5wWCaV6SPiiwwqUqbJdAYYKE1dbzrfkzjCGwUgaoHRbtm9ftvJrk44ok",
  "key13": "28ZTeA6oUzS34Mhjv81WrenRN6FGoLzPqAcB4gX8NTtrbHbP9k3ec8NSkyAjFkuLa6wdttKRmHF1iUK84CbdH7C6",
  "key14": "3hnnUDjZrhE1pWhcxY3ed5tZFsLeCPEUUyXcTys7K1fRiXn3fMpC9HxyomFXMdis6fSvJPFSxvhcxoymTyDAKbDP",
  "key15": "5Y6zSDgCNSPbso1cQTho5ycchAA3HUk8dUVxvb8Eye4PDEmNbo8JM88LRkwaEPsgorsbNNGpnY5YLqhuZc7gbcUN",
  "key16": "3BnHUSMhoAgTHUdjFxx38fC4kvnTBMZYmCwR1kWXA3QGYkSP4HBBNQ4ppVetXWKuYvV1Jt1eTwYUmmcaTwVridq1",
  "key17": "5FnEN8pR1QDU1us3wSZUHXsUufXHjEFadr4icAT2944P6W7TykvUPeAjL86kEDnGJHWDSae1M8K2shf3fZ7FbnGD",
  "key18": "4jqm9C3N9VW2aAhXkyjsBsdbkeHiDY4R2U3rBWi8P11RdfvPsABQFHg3roSzmqyjS5kgiGBdbhxFpjNNyuWBw6dn",
  "key19": "2xAtwyrYSXuyZgEPKgRnnB2S4LmBoiz3sf5PrtfabK8Vhg6Z4LrqSofw9iT4koGCrW3oLigj862rtU7YUXGcn576",
  "key20": "3LzeFbPXbGdYYN7ept3oKXnUfZg3kW9AzcDwkwL87yE8AsBbvzPW13yKRbMqtozK9QmGNuqdtcDvNHsrije11Ht9",
  "key21": "2cJPY76VcH1kZHd3hABaT1fkqfkPCBQNvh32ybJudz4xfgRYxFFmyc8e3sjgvG34aLA38UEMCyFtzH2NKjXXfi6x",
  "key22": "4mTB4HR6vHPtL4ZCXVRMqscQDztadSyy1n5jmdMLcEcqrBDEKXQnYAPTrHnssZkCvADJkAttbswJ8jG2Nvnwkx8K",
  "key23": "44Y33hvt9vAPGmSsQZwWM328hYcMqCgGYqiggsjKo8RAVn3PA4CgQbgBGLLfGtvo2BeNueoowLyTjYPL9qffLADq",
  "key24": "5AekWALow9mNH4eUv7P2RzPmsd56ucp18rkDRB7nRvqGx4bXSEpm47XTGArz1x5WnaqS3fpTxQHjLiv2rRFqs4En",
  "key25": "2szxbacPYvusvnD32BELahePNJ8q6jwxp73LYpYk959ar7eaLAhDeeL8V34bjRYjeiJSYxpyuwL86HEc9DTf3MFN",
  "key26": "4Z9MhBjviWZuikhP2dYnHrzNCXqQdbx617Runyjr1EFdQSqWL9aZW5Mn87tiDeBrpWqaMbLAmfwVebSFpp5mzryY",
  "key27": "5MBjwkTp2xjD1hquUziw4yoqK7qXQxGo96Mr1h7j6sie56sSQTPWXsJThiXwmMcg5BurRE9aheUFV5SW8Yug5932",
  "key28": "AgjAHzDVan5rr4K1GYkgzLonTrTYJH5wEbrzbDh1Ayo66HiuRDwTQdrGUejPu1A6d5WPSXwVRGA43JW7b5fSGbu",
  "key29": "5C9yGDhC9uhnSbpP2Sz6rHcExXvxnJ4bvidqsgKLP7iVVS5DZdg8JsQANaazqvReihG9QNe5Erz51MXGbZHucE29",
  "key30": "3sw4a3KYXRfz2v2K6P4z5kpPiUnzgAn2ZcV2781ny7Sf5X2BjhFoAmca6cdnqPRGEL3JMGNqPfhCZEa6q1tydBSo",
  "key31": "4gqmFebRjaXwPJudrKaBmLzrysCtrEbdzdgAsMNm1zSiCREME82JBC92rc88TdhFf5CM5PQqNLHbygH1FU76zRSE",
  "key32": "5w9kDaMsmX2MRqwUKk34nvC6bE1JR12sLn4nGf3QWnMNso59EY7abTk7Vxo9E377XXqsdyzvzbRAqtdoGwYxBJaH"
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
