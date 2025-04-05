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
    "5uB4NyvYEY81GEvVApr72toQvs6jQyzWbcJ3CS6yqaVxfGG2CqxpPgSBM3CUpyyAQikks6S1bjwGKTizMwJHwStf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbELfuWPjN1riiDEdPSLkP1H9taz2vtR55T135iC5NXJcJWwCaLNDEtBPqUHfhbG8YjC3d9Qrtz5r1WsRQjzx5g",
  "key1": "5ghNSraT6t1CHudKLFScNyCjKb6KMmuxCTYn3CXbkPfeUcCSS1dG47owRK8d5hLMS4Dpy141srhpqpYctSHhFQaT",
  "key2": "4ug9E4p48c6DBQZHAswAedMYpdfyTqtiWNYFja2mJyHncyKeVosg7zmiqsdioS7icxzgaWjw7mpHRJJZEmVCripJ",
  "key3": "3DvcnXgcVkWhbWBNNyRMWMenfK91BivTmMBhM93S2NbpRtoUfHNqJoZePABe1cVfNPibm4aw5Sw3GJFmVgcYwnY",
  "key4": "3DCoKDhbuNZ9YU63vCstoNJkYC5x2ivgnhfUFq1fXNrGxkSsP5k5DkTxJEHgmdTU2sZeeBGwXrhWH24zcWAihTCh",
  "key5": "ZWURDWGP1D6PMdE9u8SuSygMHdxq7NQ9yxRVt13aaqemuSS9D72axohxmhw92VzgDNXB9RDTTN4k2YhfxJ1xKns",
  "key6": "LAWRBQ21qTxUQC1qFwu6kYj8nUWnxASRQgtzeuGeAwuUm8UshNGujPRAcL9XNJ4RLkZQMzNWYTeAp8rMM2Rtv36",
  "key7": "65bwxCL7DpugAcdLd7K9F1XFTNeY35Dy6vqH1cuwSfwAad1KCXt9REV5xefh5rmjjcFAPpXq1aKjDGBkQkC5U5px",
  "key8": "5jCrV8ztzrLxSmc1VgFaHytVPM9k83mFkMnJ2rgYwJSHjfrC1w6y8boppCcEdLDoJNkjx33Ws68mwSfK2eveVLkd",
  "key9": "efq2XcDr1TytUCaLr7w1D8FDFpVrJsSByCDZxbXpnfirQCFSPT3AXUNXSWhR375jr7KZBdcp3KWsG3mR5JhR34X",
  "key10": "nFNmLHDy3QUjRo8NL2wPXQkNJRBqe4H5P5ZGzwmNsnmehrtBxeuwVvrZcd7nbtaN6SWA87QV4GgKspnyhDoZQhU",
  "key11": "4u4pko6FzS1DXNo1BCcCL8y38eMDNRSUSLzNXeLYNmdPumGZb3WaCgRa43FxCjUhtuSEsYUbMcDdxT3BGM2QVM6x",
  "key12": "mP4uddci3H9EDXRYLquwfQ36AQ7sE8VNNSBVZZ2BZigjoYoEfMshSdYR167Ysc1K6h4ABjaR2svk3wRqeVkPEBH",
  "key13": "294nfK4kZdwWKUFPSznwGi6SFLnX3m1aGKoEDaQ6KWwTSqtrquxV8S1U2SpSQDt4YqQPwu81pFsxJ3N6cVto3BhE",
  "key14": "5Ki4HoJ6t771cHk4Aa5nA4GtCLRchMn2zmU8qC4ekX4ASLq3nE7hTu5L2HGRVjgQNvwhTC2L2SWronpKue7Q7hDu",
  "key15": "3Ge4sn6AxBzTFd223SgcFRb5KqPV1Jc8bmkc2E7hcucoZWax3RRhDXqHU9VAYpkng3iR4om2smVfw8aofjTAeDPJ",
  "key16": "5JdjTDAdHjjfGWMMqGJcHVqjy3ptqdUYUvHep44WHuUZNTiPdD2AGDc46ZM2gq9eEko7B5pNMbHadPMaGC75CKVr",
  "key17": "w77CK8guJ6xk3dhmJQsZVVG9KangMmPn1y1zdN7PhEGh6tab964U87eKsYotmZEeTCTQiYtDNp86dXUWJq1jVoQ",
  "key18": "3M8z2q6F7ggbYCgscedrgbKBoxFZSGAcNKfSyxsu7rfoci7scrzHBsFY4r3BP4VpyK5dqmTWvwvSM7TUZEmAFQ6b",
  "key19": "4GpcVXC4x5WkArDLqdfia5eLkoB1MFct2A8gctSZof3DwnqM9Ms4ijskPxvRP7MmWE2EjA9Yc3NMQdSrKZRHaU2g",
  "key20": "4SGYynkdDK7DA3PVa1fNsRq4j3gyW2jsxD47YvsLuEVZVXiqPghE9qDEHwiSDBLtthM5NCx25nwArEMAXtLJCpT9",
  "key21": "5koPDwSFqRwFxcjRssCUWvNcHyjDNjgk3YPZqxzMwRciRKduF4ZVb1Fdad2npc6iEaPk1UFoKETtbNkjq47bhQeP",
  "key22": "5LAhkphDEtkB4CRYmhtHYdyGKu1DZ3YtymRa6Q5Kw4dEnXBA9Vru9xpKPNPrh9wfhTCdEgDe8o6SfxzpUyuwLbTk",
  "key23": "3Qo1tw3qfA7th6JtKXPeUCmeQ6UxR3W2iWKbndDfXTuB7hkYuaREHtTnS4phYxvMRoWWn5s2CwLfRuwQmhV435xm",
  "key24": "5wKoJAQXVWaXCvggFYEeRjtUPDwZqZRZh2VB56hWV1ykw71Ak4hfM4fdu8G8tYY9V5dwV3zat9LcGByEPGKPXb8n",
  "key25": "5Kf4xDJvcm5zrXXBCLnnsEJmHBgA2tAxHTRMUVW6HX16RzbGgjRrmWZDhYCACiUWWCtrXhrMqfjBEYpkNRSDahhv",
  "key26": "62qYAUSzYEyH4XNd1eJR7UfEKZUkDK6tgvAFm19KJZjkti5AvgJnS9PVGKPkC8QTSP7idWXDSTE7mRQUVHqa2Wws",
  "key27": "5n3Qe7DvE5mRAXzw7evwuBarfq4iD3EibhrGAbY1yVVbcAcV2FFCdpHLQHxXcbhqv4hxSnpRKiTJuLAxVBKYRDf3",
  "key28": "4JPoy15jFhHQ83w6d2qeg3ZK9XNhNhVmh9F5vdpuwvHGnxS2aDvn9vuXVAkBdWrE9ruRXEMLGn18wFmJTJJUCEpK",
  "key29": "5vmV1x6zX6ojdWPxczXuvQ1rmuzA6rUTj3ebngTb68qVWosN6yPSCx6ZTan7hpFgzQ5nEsdm4exsvBt2wVnmYCJw",
  "key30": "fSv1dGUuJ2HBXP2eBPk1vGE5VuuvGjPsx7o9Mp3DSqu5sq1XG1BEPBvWu2G2VihpECqQ8MoLRyrsvvDNhR6aX9S",
  "key31": "3kWG3iJ5TeUHukft6zRyrwHLhT68X8A8JSuKhxwURAGHiwRDFH99TSQh3Qxrnn3Bhw9nF6Nrrf7s5BRgimiiEtCg",
  "key32": "3eoTSJTMZasNbwSkhj7kia7QPWioMP3VVogzRZupEpUxQiE2oxY6YLjZ6mxQK9itQ8tsh7qeFwit1kWU5dNRGcZR",
  "key33": "3cbC719HE2CeDi2Xg9A23HVuRsycSW5v8rW2XzwpQ7DwD1ZSepuU4DKGdfAVBqBante4BwfzQKRkjKRUEACNzWGq",
  "key34": "CWcpDex1H4aQknoMbJtm3zrCHpbcvSpPgJuS1n8UXhSFAeVBsdfwUYPxgt6PqU38d4swSt6sMVXf73ayPZ2XPJ3",
  "key35": "4yfC7Hi4yTP7M1kTdyaanRtqjMqQKpTqfYXA2rJxesMAqntWWedzRZ9Jg7CXQKZ5ppkxYcSQjASs5gCep9b5PZo9",
  "key36": "3mL6oP5qvijDvBrhtbV3CY3mGFwHWshZFTTdEAPZFrmbVY2jPTF2LamxNAwcoDEwFsiHyRosi2tfbTuMsuYbBXGW",
  "key37": "2LNFA8z2YVbVQd8SmARz4PCfcxRb43YQtVuL1xiv7LcodVkzFRQc9qktExToHPJqAEejDqf1EUn1V9zDUZg2ujWY",
  "key38": "4YB1eu4MLoHSuWSSAnDPcjRTW7t3nCFpNcrdNCjh6BHE4ym9b1ZYA7KbRqQs9xuY2F8UUU17k9cdjyXAGthvqjVD",
  "key39": "BozBTioSynPAaKDWxertL2DvzfDakDzsfLQv6Jnrg17WAXHScPvPuiLSXB7Lm5E1fpMUBftSSwCR2w3i4NAfLRm",
  "key40": "5aM6cwMnwTY78UihPZhxShnR5sppfGCASKFJ22o6FovW9xxZcTTC6fQKWoHg7opCMoiVccWSr2jrPs3K5T3V4ZM9",
  "key41": "36WtTc6a5tL5VgKv8tBxNwqsW6WpaKRjZM9TtqPMnbzwscK6HhmkKT7tv8x61xK8bshiYe2Yvncg26fBDeiSmLmE"
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
