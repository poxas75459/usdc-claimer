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
    "jrwzjSn9iFmAwb9Z32dXu83Au4nonkssDbR889u9gx1MsQrFk3XUv6y53sDwYGVTz3GoNkakCKtjYJpeoDpm6S2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qosi5zxME53asshEesFDiv1TySt4z12swLG2Vc2hupSBNgZNWV7ZuV5w2YHK3eMee6PCotQNawA6j7LpSFVUEUU",
  "key1": "5FyuLQ66wj4jFpDtUHzE3fsBCTVmet9YwgGubkSLUon8gE4jf3NcMnd9f1faAr5Pec6iUtRkxDh9daaVnXRVz4S5",
  "key2": "3VQMBkGNnwNgkMzTsvKLUK4MgfqmxDd7m1CFtkCvNcWmp75hZnVQ7yHxGBB5tXJybnFksoSLh4DMp77JV85grMNg",
  "key3": "42ZTeTY246Ug92Sis8WDbsTAc52HAyidhzMUKPHvMDAd68ThVvZGVq1gNctccMeNS4oc9vUMUNzVMUKXfpoCU3Gg",
  "key4": "5cjecv4XuH67eUzsEuHyPADuJqNQvXHTsu4ZR24o8xdwa2DAxLXhdZJde4RpVEoAbJe5oM3rQxeecTSJUWp6heLB",
  "key5": "KeZCYoyFQTJPuye1saa4YVZi2mYyopCbhmz96TXYNrSGTEwQJmfT7z1C3Qt4kH2asTW8Yc3saqTA4kEFmepMuPG",
  "key6": "vwNUruGy8xztwVKZZgQTap6c241HbEU7BNqZNQZraV9c7FFGpQaC5xDwhCCsGnArZwLmUo96hxiy8PypgVy7UQF",
  "key7": "4DhYjDcEwjJGVwNZgouNp2jhGWosg67SRNwYF12n7Cbvszv4WDKpnqQCuAMBHyqxhyga6LQvPsU8xtPkJfXTQGYp",
  "key8": "36n3Rv3Ftcy5fJy71QoJSBSkyEMspi7VbMkFSW5yo1cyjdKsuqBUvnFNCm3A98ANp3msqprLXuBn6Sur3FPqxAgw",
  "key9": "4Ax3uaXeqNajFL48UjXAB7dR7ZuiGe1qR7LxP9dNF2Pmt85EhUpGG8SKMrCvE2cfcDpjFxcNtS9RZK2F2DcCtFFw",
  "key10": "5uQf27AFhiyGQZgykEAWubFNSXbcXV1N8FawumCorwLPS4E3D8keFyN2c4nczWLYfrk2tzuSzwTTynJFn5GWJ6m2",
  "key11": "3F4Msayiuzi13PKo3Jv5jUphJ7jyG1Yf8aNgk1m3kEEBxwFSc5WCbyDaVWSxMF3zdceX1uvyNuh373HP1ikmDAyL",
  "key12": "2eiF6kXwrRM2m9fLxvwtHRtoLhH2zSiyXsF1GWxS37LnaAautw2xYKtGv7zEVDTjiREuNp3uCZAaHDNKhvy94g4o",
  "key13": "4ukV2uAiq7Ut2SgSTwnFG1nrY79zruBiHs5qgKynzzgD2ckxpGARDptSeQR631SrMb3pvRvJAyrtfrkWTqh56smo",
  "key14": "5xyRvSEaNA1NYBQortD6BiK5RXkieWGdLRxV9Nrf2wsGzCYRvQjS88EzasUQ28RanMBb8FzqBETzhuPoGfUVrMy5",
  "key15": "2uuSi4bzH4BZwAuJomdW6CBHpwmBq5CLToxwaWGKhW9HfUpuSd5dD4HVYe1M2U8guBQAPGhvTkEefh9a4R5v1bPg",
  "key16": "VUhUueabkGwBGPrg3RJCxnB4MVFy6h2iivksACACmy3k24knrqWiE9KuTqSq1tz1JSxaUmH3RJaMKhjWn4AvefX",
  "key17": "EhyuPtesp8BzyWsvjM3iKhofjwqSJ9ZfScm2ssqYjmvWgEUHEjVjoUXivzRNbdCi9oFhdo1SuG7GVaxU2KVqdn2",
  "key18": "5LyPUTGTRv169kqosiebM8iaPJ8ALvNmiHWqZHMoanYj3ESn565HQVh5Loq3MsfoFQt1y6NpnD6f9kBha5nuJ5yb",
  "key19": "gpufeQHxaqpcrdnCGVXtgNVkgJkggxwPHRsT3oFCJHyDUHo2KhSNEzJLKEb2ybphUxnxbGexfaYBJkYPnca8RvN",
  "key20": "4U4JMcerrkTjrEokrpgCowL1bP5mxWfcEuzSnz7hAradwkAsfGrodnpEYjrQHeyVLLmAFtBZB8CnxWkzSUzH4LEz",
  "key21": "2wz1wSM7MWrWRuF8AvXwbJeepXw9CdDjMgGXaJauctYs1AkHzXCTPd9oaK2yuYWuFmWidjLEyazEJzMyd9zmDcDi",
  "key22": "5jFzAnvfqTHWbWAjN4P668r2NTz9q9nQZaYFVgscFRDYSqaPPcw8zZaUyvVb3L4Zu22EE8Qhb6jj9K6q85yuXs1y",
  "key23": "3RJkR2SxeeJxwKY1fBFxtK2U43C6CK7ie5Xy12aqLnstY5mHMq6qBL14mYyj6wXbboJgLx8ncAMvHSen6YRiw9vB",
  "key24": "5AJAzmwPkAJnNinUaHHBt38p3kSSrAaiWUvBtetwFVGnzAQotPsGKWuHZye9McrSsLrhojBx4ii3AtpwGVSfsRGb",
  "key25": "26QQQR7kiA5PWNB2G1EpcFwpLik19cru8E9JtSZAc7ysM97WzBaLiXCU3TnnSAydDo67uzUSmegpWYQFKPqmdA9V",
  "key26": "31aYwtMddibXSnbBv8kmZdbqvoNtQ9QAWUZCxNrNptStgQcnjyaV1Z3wqEDaTSXC6DBCPKSSh1eLMZEooLp7TmHA",
  "key27": "2uVzKbzZ2cTX2oSn3XfWCCEoY1vvV779SMDT23XUXMf5dMkKbHDkUZ8iWx1zJZNAuLTLmEjm8tACnULmB1eJsrbz",
  "key28": "2PMW5w8tNq4EEsPa9ofupVBrCdAyHwEnr8hCjRwZDuEduYag1Nzvt9VxGubyQb6gQo6bKJfnvewResCL1sFzKQz",
  "key29": "3f9catZPcq3QgvdxkqrdNrozjCVWWJY89izbthVwzF5r2n4vgpGZqi3NXHD5k8Twe6LDXPMfUFTFmb9RseQAoy3D",
  "key30": "3zQND8Xm2exAGMjedxfQZvH7P3UwNKqSEa5KSoP2wjjnmiK5UKFEXGhaV1LTuXJDKdqCUcBp8erVVnZ9WKacCERm",
  "key31": "gGhWT5URCtu5pkeTVJn1pocjk2zdV8CvgTsBo1gjCUUcHhm9YYtBrbXbMbmsANpQF5XXKQbaBGcVDMFerY6PHZH",
  "key32": "5n6EwPudmKWpshB5rSMa9kUWMe18vvy3Fhv5qGHCKHxdBhqvN2Fpt4VCmNYPHj5yaBo83SxQx5HZeFidsRNGM2hP",
  "key33": "4KpDWJVZcPDZewvuySi1v3z46ZxBhq3R7KdSeNLPyanYX9Qa7Ui5s17EZPLTxnTqVd9y1DaDH4Nbyk2GjRouWj4s",
  "key34": "3egfV54SrHsMN1U3hyyw4xiy1SxfEqriifTF2be6h5tAd9xK5keprdm8jDFs3wamgFPAdv4Mp8mSa25d5r9Q8zG6",
  "key35": "4LYiC9GRG4kziiCHCjZdzrREnz8GvqcP7hsy684AMnNaTGhPpgB9idpMCGCuD66tkHjS6S3q26sL7zYWFihaPzTj",
  "key36": "2xAo9NM27GgEqbSaC7VQSvFSxU9ZY5gCPLm1ji3Hhkn5R68TbLCA4Wp5JWFJrh4HBWDu1x847eWYoB8ojZMM1w8u",
  "key37": "ztZ2JJSVWyVQLNos3e7XetCBVYfaVsQTS1W4tzm3Urmdv5HU9JiRz2M8k6aVvKZbW4G645CvdMC9CuaWQkKMrvR",
  "key38": "4XwU5oumPod95wAycYCfNEprnq9o7a5CuMemKYtc7JHF5ScVjtLDLaY1DQpo2RsGmy4rrbXNLfTB4kE5kWVMBqpw",
  "key39": "3o2cyWvQrH4Tx61BtJwwfBWfd4Q1W2unekGJ4YqjWEUeMJ8cUgyNHLm4NuqaZhbndVcXNrAqzXfsa4EgKTHtEtqT"
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
