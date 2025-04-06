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
    "4E6WQDS8D4pw5XD7WeWPQze5pBbepgDnANRfqJd2nvczsezDveQ2HrLYAdxkpUcm1qPsX7RErr8cZig8f1EqxRKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNMxMYwfF53VtWa8BDmdRAAFnm5dE9u3UfMUZaFv4F1Mr6w6RL4mrF5oamxusLUq5Rw6ctqwrAY2mi9hq4bWq4w",
  "key1": "4PrTsmjYzhuzSFXyPShpBLT9ddnQvWZRqP7jMWwHbygq6VHcCQdbLLVd5M1b14gv1sGMptm7ECcd5P1eWwVkpkMJ",
  "key2": "2KerFyY5g7Xa9Dx1TevwovwDbrhkwXwnPoH2SspHTkytZMCmmdGUb2ifQbgwH36JXru9tKkhiWndvg6LpYgXtHVa",
  "key3": "NUMkX8aYrta5ppHY6iCma9mPWvYyDv4nbNu1BB8b754DGinMcBnwrkD5GzkCfug63RohcW5Dc5UjYk5fDa6JubX",
  "key4": "7yU2g6aHTx2fHnVA2TMxz53vhdpS1k1ykrkK9285U1mH4AcszD1snFA1TefSXwWpt6JH8H7MCwsR2FdFAQZPSCS",
  "key5": "S7ZgEVRXemjUBkQ8xHxqA387PLdSUWymrr9x8Ymqe3GUraPxzaPDF3RzVxXyA2mtRqt595oTLRuPhzibUR8TNDm",
  "key6": "2Xcpvkz8hF6iM8bT9KT1cev3UMz75kMgTSkNfD38HezZwpxRsUAqmqtGrigm2w4FWQ32cjTfL86x11TJUfCz6MyH",
  "key7": "4bPMQe6sTq86Vp2eUp75xmd3ZsR9SiNV1qhaR3Sp9eBf5u82Zfq48Bas7ipUzSe4o7bX621TF2su1qou36Y2pEEw",
  "key8": "2j6TH5qZKHevuogw1kQhWVabQcQKiNk21eZFfUCkzdBsjAMF9WvV7owQUZFHbMk6NnfA4rMFKEGLa1v6m49g2bEi",
  "key9": "4JgayaVMVB2f8bCXWp5msQYaqMLAtUinNKparqYxzRYWALNCrWXzmTTK4Y65FAnMgW95xuJfeDn37HYXNfpMS63Z",
  "key10": "4pUAp9eF2dwGikGCR9pdENeMwtshzMqgcWGyFCZL2Hr3cLvDXyan4tXuzc794JyUn4E4pH6pPtQhcRvwcMPumrk2",
  "key11": "3wJABnQpnyVUQAZYnL4ajfyQkWye8Fpz2kx8kZkC63hSZoTe5ujcDB2AFcbsvATTtFL3rCCDzcmc39NSh3ehbpwp",
  "key12": "2GbtyB5p7dGFycgHsrVSXzMqmnuAGUi8uBSJaoxqB1USs49HSMc5BDKgzs6gkK8UgronWPy9FY3YobLMSTjPBRBP",
  "key13": "3D6LEPUati1ToxZQYjcBEQWe7CDDpotrHgiCk7cqDCu1eAs1VDZSNNo96b4eujPcAmZRje7uv8YZGkBhih9biSnP",
  "key14": "646SW2KXTzYSBGPmhxCTogXhnAq35tPMG4ZWFX6oS6r6vmmXoQmFnjfSU7dVxQeaSPof5VrzSsULpixfZfSMhnz8",
  "key15": "2Fh3P4Ucgrg82yCSGaBADZFUNbZiYAQW5uu98iQjcJKHX9CvtL1ZoH2BhxqB5WEW7xDd8ysKbW8198YShGFmwtbJ",
  "key16": "2goy6oePWpBCQUarWvcx74YpspWsqhhWrLqenCVr3RXbssgTKvSeKdSP4dqkaUS5ijErbeTEaQyoCAeLY2TdHZXD",
  "key17": "4Faxm2xewqANyesueitNMnASXgyeiiDmhDDix6g1SabSVa8Aiw6Y59D4b9CVpyQ15XpVQhd3adaCDnDkzgSDJwsZ",
  "key18": "S2XD7Q4HaYeHe8dAtoTiAJx3TERVnAW2YiTGm52GQ6pQnbMiBnvbeAjijzsepRCKdTtwZp8Mvj8AfCNcKZLVF5Q",
  "key19": "gdVffbiEgrAh5o3Mb7n6YCyEh166syf13FUQJc5i3hPsPpWtaKt1DUwt6yg1yGbTvBqRcgns1vbj98QYwSnpF7t",
  "key20": "46nxwrUysjA6MPVQzYDmhDTLmrrpazbTS1q5FMqyEMXvUgVjLym6dLLEke6UJoW38w6H9yio2knNBgAZCf1v3r7C",
  "key21": "3EZzjQxY4q95kh38zTyhz8Pvhfr9H4geb2uLVAmuaT4bnw273sQddBkncYnDTvCtvt81x3ZnYCNN95EVf9MeUcAP",
  "key22": "gZqMcMJwi3dwWDyvk2oU9xMHsfApzsrxH2VM2ojWHko3J8dxF9LyGdrtcmgz9mfm16jfA345bedkiGc8rtVJLf5",
  "key23": "3v3FqUwJxjSiXJd8PHwVzDSexotBGM3SDEpDYANenLiAFpCxwXzkHQLXS9jd3ewQxYDaADrmjGfqHqkR8o8C2mBG",
  "key24": "5r8BM28bUAiff2UjQCzp4EZimjddsYTHnJYKsjtbP6u5DiPxbYYT2cUsQGj4YLESARkGujKcDfmQ5z3mjWnv7y9S",
  "key25": "2rtQUaRWgPTmcHvuNtKAYLoxyXnRADpvZgBrpgLXPtVL1X25PypptCXRojwBJmW1YHdJydW4bM43Y4PtJk14HPRX",
  "key26": "2Fi8zxA8McmsPE12wwyRPZaD24S2r9isBuJFuzsGNHMnqsVuggYzxaBqrzysbPNVQRzQRNPXck65uqXJHVnrNdFo",
  "key27": "5vu1gPijgx1KfaqGuGEjTikSei4R9KwjusPmqYnadTtLDJE1uN3EfdXFe5cJCzMmtxxfjxm6hoBdWpAG4AAg1EJP",
  "key28": "5tpkuNcUmXF4yMYaeTpVGtZyoLrEnrp58v5shXKgxNP6qUXBdsBgSu61vdnSZDRDRH7ACbXjdzwkrpkazR64iaSY",
  "key29": "4Mn8bbNGY1qBMUJzCzTFwgMZdTpjVWkUVx6p8tnkH8tUwtgPFHLJ6wzYkr4PweuLwFAT64wQSoSgJRwotk9inVCx",
  "key30": "471xRpZpzRXkLWXjhmK7zkAK4Rpd9tZJeHff5FAyNCJem9izboMrkCDGGN8VpZUNr99GjmYsMoVRicfCDrmC7svp",
  "key31": "FjECyta6QNaiQVhtaw4etNohZHPom9MksVCB2n9hAnHCYHRSvbzbLDhBPoLeGVokEa7e9SZezuLeqUSB1isVr2L",
  "key32": "3haSuWe8jocXxeUaBFKftNtbbWh9z2eaJYmBGvBxQRHhSVgKw2vp3BAuYNeeriZccFp35eFKst84Sm8pyBqsoffN",
  "key33": "4vCm9w4aqkEJb4FqzFj8FxADRDbBKv3kMEpucyTJhhYmPEPENt75MujvR6R5moe3vxjmRrgcfs16wZuBGFkvohAy",
  "key34": "4bY79b1WrKMDNJyRK1aBErhxUR2ojwLQwuQuZCcZTqpYqWPQLpzAyb2UFBDtPECLysyAtFe37mnFFonPxW8Wxgvj",
  "key35": "skyedHAsEtNJBvuEDQTBHd8vBFEhpSuQQadY99rbYkdtrxTw1PNnF3twBkTSXurcQX9cSw5vZAGWhp81qSP2eMy",
  "key36": "4oZYuZ2duegesjX4FznQbocsUtiz9PiN3J2zoe5BAvquiVCNewMj6UTrG4WauiGx8mV3aMxaxt1u9CW42SVaGpNd",
  "key37": "5kaLTFSfP8gtSCYFE1U1KphYJ9JzSCqvk7CmzqZrLtuY19qoqwtw9Hv9syDGujj1AmeSQT6fXTyR7bqxsJC8dq5M",
  "key38": "jyuK5CNnEYw7xyupofwJCRpK8Z4Cfzo77NXrFG7cKnxqnS3y5mQQ2jDKgcA3uJGmCfRP8WcRPnWT62jGBwzTMyM",
  "key39": "H2HZbz8WSdfkVtQJ2dqTuTNu9cXBJAKQS7VTJR9ZUbVyxFkrE695SGryGDhbeE1GssVATcfM2wFD9Hxv7KEY3vH",
  "key40": "3QuZpzbPkmmytNEhKUG8PLTsfMG1yYgkkAQBpgeWKMPGwTkryDqMAuVcXDCEhRVXnPoEs2bXnUEyruJd5BvsDYJR",
  "key41": "2d8vMz93Kc8QXnL3FVRUgdJKMGd6JgKU8C3E4FsjUfwr6fzo93oVX4QWgcQDKqon4UhepqxovYP5XyN7mt1zQ1da",
  "key42": "2ufoE7qPRuYcNggVzJ6mfTK5nu1BmHxz34b16k1tDXGhzeEQsqrgWEGhks8teBcN7FwHHiEXHC8wShFvpAhAx81e",
  "key43": "3yXwzZpZjT26mZJ22mEKcW5PK6q1gy3tyUyLxHfMe3S8UszTqZyPnwe7EaqLWoUBXV1ZUv4MRYkhfSd33MzDhAkm",
  "key44": "5JVV7isqZFGiQhMaE6eGtfaWMYqsnoDR7bF8s7n5kJ3wmA6Tmw2hLempVhLrg45wgtMtC9i1GiZgCcis7NYfF21t",
  "key45": "671S1arcqx1vqTTtCcuB1nbQnTLubwqLCme2c8LZh5bou4gzxd9d4moUAQnejdmssVwSSdQkoZ5TdKWQ7bWuBPsy",
  "key46": "2hSx9sHDrQfmCQCNZB3mgn1ugjvccT3dwzkspfsq7YEp9fnAs9vdodFJUy2jgXe4YgsxaN1kCw3uR5xxEK3JyUKy"
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
