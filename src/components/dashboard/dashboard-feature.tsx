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
    "5XLb1Y2fn4UEZMJomWdyCbqQGcjm1sStJr5RAYmgwLkYYnevZQBFCZmYsTjasE1ZyHQAUmrfCPjZcTkYKZVr5yHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dU5PdYsoJaD2Tgc2zN78c9Asjy6YxH7TrXPQPqwG8YnQwbypksTq9J39dxMEdCphvtFMvCCKVDLtTXDZenP3qce",
  "key1": "3fmBxGiDbu5ZPopKe4hTYzSVRga5T2PeSJTdgJTKmNDPCRuMpUnVCzX2BFYr5rf2ZJ7qPAkksjoUmKkpLH3Uvmn4",
  "key2": "SKhLcL9XnAxMctmkaAiXkHxoVNREiYYJTFbH49KnFn3RBhYTdm6xQoyp6pEgFtPP76pmwhxPCTdjgAp3ZedrZrU",
  "key3": "3u8vG1znaJytnxoupdEQijETsdHZjSUKACsk9nghAV4invLMQwQtqiihPd5n6fJSgHLYq3K7EALX2ajxcEVMEEkd",
  "key4": "5yiTQJ8kMo4pZ2ZFTPFAeDC7DG2NSSysSefk7S5bLKf5bD6kmgXWXM9PV3w9EAZngxsHTEAS3mBqn9C4GTBnrYFG",
  "key5": "Zpqpsr6g1TEShHcNZPapRZfQdbjWKMBkN8KcECsLg2h4JuVWc9TwHUkqBDJnbiop8bPyN5DMJwUQW3EHdS4AJre",
  "key6": "2KCV3gUbWrQevtEf6Ke5R8mbAFbFf2EZBRuiA4pev6vQEBdeUs95tkqx17zYT4Q5Vc8JYg6oEMSx6XhggXorEb8o",
  "key7": "2YNpQ4wmiAr21PPddjF5d12RPDuLyDiJiGzUxpnXQnw5cUzXkmP1YUUmnm8o1Q2vFxVVgiNHaPTfs8FAt66kCXbX",
  "key8": "STgsqGLvLfRpCqhcwjbhaKC3mWc5AimuriTDXbFbBewk3MdtDAQxGAYahQ9w4okuqM2i8354FZ4myNgby5UHL55",
  "key9": "3HCDMyQjWB8xbKHLptKBoDvVfeb7idnWeVb28HjaiK68LQiwiTe4kXNsJz9mbj63y2pvA7u4sRiShN5rpMR3yHxj",
  "key10": "4yqwM1FrNsbLyjcGhdzusEgfbeMDpebq5zocmEo6WquK7CRucpnDmbSCVr2La5scPh6SQVhHNouPDNv7QCeKQJUc",
  "key11": "4jKzdXWWTXWWoBtK26C6ujjqAdW58ruwoYUCssPMLbKwNt6ru81FEuUE1TxygKAknTLAER94zUW1ubhbefxuNtJ3",
  "key12": "4CE6krxK4AenRpAw8uSGyH97ksGp7Zsso3rGLAX2vWCWZMzz7zt9tuBsVepDbC9BpvDqJP6KuFHtWP7hP8HfUCUQ",
  "key13": "ukcpmXa7Dq9DPKis5LESmXveP6uPgBkMCmkXonD8MFQoF6hULpTzpSh8uEegRDtpSGuBcrEBR5JViV7EhSEpCAE",
  "key14": "bcczRmD73vRTWzVr32UiFvgGih77bULs2MpSpymwDPQKHG4EpbJQbo45QWSLXQqbdDAezc2wL43ERxL5jHhdsqB",
  "key15": "5zCMizFzhWuUFnzaKMF6G4bUdrbaw5EfjRJC3MzcgpcHc76PukNA9ymNrFQrwmr99xxynNeSAenzhmo9P8pddSZF",
  "key16": "fREtPnSRxxqtjV4nM83HV4BAnJJPf4hEBQTW22iz2oMMCHdiLaHWmVfNumvVMcmxowLeQFzmpuosYSH2m7hdXq7",
  "key17": "28ZVnJMGpomHLPgf5ToXb2M9DFtDy99t1i6umUirdfDz1rAQmebYNZTZFssvb8KFnArAjP5xqBnXxgTjPtu9wCf8",
  "key18": "7Mi6JZy2n8JzmmNWZbNXECJEJufGFeUHJrx2fhYP75GRFfokbqgAS7sRzzwDcBeWNWrbNVfSWbuaDvj5UHnqukm",
  "key19": "5ffe2u5Afrd9BKvvZk51j1e7vN8UBqdLaLwiFQwbbCtYMn495Jeg9oHPMd2hWauJyAqN5jXA4MFMcFRKg1KZeRRT",
  "key20": "25RuoY3Zf2Yb9s1sHVWz6YU5p3Gw6wSMT43pmX3G8BszXUUyB6ne51gqL8AJeCmVqz5nPQJ4s2ybhrPduX6gewMg",
  "key21": "X8Bo7qYPS34kBaHzVjd2QhSX67HoaQ8HwN81aLKAV9Soq8YUKEAostgVpbdFRV7bb9kEFVvNaVE5JaoGXGKS3Gh",
  "key22": "5z1FZyMUNuTTF6A4HVJ7Zws8F2A56WUbgzDhBBrkmNp733NZ5UrfNuzpDy9xjJsk59pwZcRFaFn6mW19JpkeS9P",
  "key23": "64wfbhHYnUyLsUuhkc75Qh6T1CCL3PajXonFs5aobzRzFtDjUFLQH5z1Fo3rfyqS3b2i7mFnFNQwJ2wQRYy6SxXP",
  "key24": "3fMcPebJpT7Lq21BqTN86yFgVnLPoL8w2G1Zgxz1dWj3BEiXLnfNNagsHC1LNsMxJZ55BEGuYDmop7ry6oKaeyBr",
  "key25": "gPRu5RQYcBv3CGf7LHrAUfisSv7u2m3pzmpVSe8Uau5m4aMGN5P2U3nhmHjwcho23792y9xnKugCsfsaihm9YYJ",
  "key26": "4yW2rFwd5cJiRVMPGcVB8XQxvPDsqUdWQXFEeKZ7JpXoSR3QqbtkHHyveN5aTGdeCXNSEE6MNK5K2BjNRnzYYud",
  "key27": "49G5Gby7pmdtCLgQJGBo15fTTuVtUogabs1KaNsSmLcoyYRdp9H4nBdYbpM8rN2HbY6Myn1oTCWZvoMNejXicZzg",
  "key28": "ZQBV4DJwEqG3578S4cvMDY1KRfYcWAtYtWApk78bcoAba6VgJCHJnjPPSh6ufSkrb2ZQ5rnKY4mA4PvExwS6s4g",
  "key29": "59QWMi9fEe3UqNaR1Gfwd3o8643bamRH7r5wKQ6mArK33wbA1yGfNLR4k7Et31cvjKTw34gEmjG3GaS8JSktGGxT",
  "key30": "3C9rHekt6S4BzwxSnzSMjBYFKnE9NAQXZ7ts6PVRoH7vCsssguBgieYXzghg5kiCAsa2pQ7NVSTJuHD4zU25pbp3",
  "key31": "2tnphNyGvrxtLXQSJ637PyGgpVPnMymCKtJkBdU8pfi1JeWGv1LKc3nHent6v8kGVo7pwSeBNDGK3NrucFLqRNsA",
  "key32": "6FwQ54axv3eDdmULP2s5vkauVz74Hsy3QVC3prCBQHVyryhixXPdFJJ8t73ZfJPiJHV36XQw8fE7wwoy3YVbMLV",
  "key33": "XHQiR29Su1Pg7MEWBkuxpW3WNhdPDuBeu55wj9ASAMf8dWTXTB7agow5B1wUMGeRnxETY3BdvtTtdegYdnsFgEu",
  "key34": "sbZzYqw4n3H8To3bdwKP7K6Jj18LzEATr4HP758D2xakWSfSWcxTUD2dQbxSi9q2hPqXYn8YLVQeK2ftwwqBi5d",
  "key35": "4zryaLZ3BFnACXC56jYZcv6QBecKaWKZt9HrcdNzeRd2qJk77dSgXRrqoA3o7F81n24SinVMuK9HdjSYg6rvurx",
  "key36": "2CEcHAuBXEdJZxRKW644W3fxfesNQWQw75A4f7cHNEcCzfDAdWioAV5c6tenSwmCH2UD7Xi45RVbcyVGmoxjqmTc",
  "key37": "3nWVkorayKUGcVG2xGKDmgfp1RYbpT19pLHqd5qNdaUdrYX3K12kVazyzxTy3HuUf6ps88aEccpSPBwc4VTHuzmE",
  "key38": "qM3AjNPYyAYv4ySvbqWUm97USigHAEgNEaMAeNhEGKFqRV1PATng4XWnqgpoVfKRvjvFxoqUDVvanDvuewXgCXK",
  "key39": "4L96kh65nbCrg5r9b7LJAAhD1deVGyXEZrjg97QE13QvbQvphWqzC2LTVBGAv3L6GfS1szd42zyzZ9s68ZrZ5Gau",
  "key40": "XrhPBtf5xRzt1ibZwAzwmnWcviS6o16EMGY2ippeqGLfDsC8C8LmtLbW2dhWBHiH3CDJcJ6WK2MRMv43XfoPegB",
  "key41": "5BD3UfWwcMZGDy6wfyoPpoHru8YyKda1DaMUt7H9wANoD74T578ehhBdRXtxqfiec9mjvfXmZ44LkQyqkVZypBNQ",
  "key42": "5pxuKrfiruYrmFGuaub6a1VCkNy1QesoVqNct4c2q2Fmx6TXcbehNyWArWNr1CQJQnGcShyxAZEz4BdCjtuRyu9K",
  "key43": "49NHYHienVJatgeAysQScXa5nAWvqEsNxsFdnepGvngUurTgW7ANwYrruQiwSthCr8SSoagLRAoE6qNh35wGzJ5u"
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
