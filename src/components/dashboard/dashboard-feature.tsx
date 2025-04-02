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
    "5dyg49VeC8X8wZFG6o9199T1rMh4D2SsM5V2MTkZ12FddmsHEF4QdqW5dsv91oP1obL6NEb52aiNsB11ZYhZsqvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXy8PBUiFao16esViY6Pb51zfumWMPmoStwVqmEixXCjwVUYEqFYPjWQQQRZMgC8iLaBYF2u7qyTFmoKSbm5qBN",
  "key1": "7LSxmwEGQD3t5D6UpG3DUmAAMuvSCF6R2MU5hz7sQShxJWoJf6J2jLT6YbbVupCaDbj3tBifaoAdoLAmoxqeDYQ",
  "key2": "2V1aot9oMHX7YYJTiJUu2KAERCYoNxvRxVCa3cRkebQF36fWy3yX59tvTPhG5zRcaLzDPrZYY1proejAudL12qfT",
  "key3": "KCzK6miXRoaoLdSqmsnivo3mGU17d4KFfj7FkQMayzWQ6tUCdMLMmcViYrcjxnKgGqeXuM87YLFuC9LazCnU97v",
  "key4": "3QNBTf3NmS1isoNqipaoYsHue9sDGLkTayqsoAeDZJ6SRNTKqMVWxMUsyUqbtSPCVgbvYEzuEpj2DNAp3Z1eERjL",
  "key5": "4dS5fQ6VA8HVzzy3FRxUrQTVxXE8MnoZur6m5QpEcyK9KePA5EHg2PDu2oHFMNww5z3ReNhsZHdqa6JeUz9vktzR",
  "key6": "51eJJzvYMtNCo1C8gQ9bLjmiVxxkFPHeBb3zSJ9X95xwaSW4WX3amVtjJv1UTag594UKHP6L77VJVySwvgk5qxyg",
  "key7": "3NZETBSAPViBiHBbtMt2jRzccCS6mauNihHH3b2tP17taT5XyUMDPsbkFt6qJ7zENGHANAAxuZEpoYmnQjQzskxg",
  "key8": "5mfkqBJo7VALzxuynytL3cYdUur6Bt21FckxBAsXcvGWFeveiem4wftyCa55q3gBD6kJbauCY4VmByVFafpqE7JJ",
  "key9": "4wDGvGX4ziq19xgknxuMfH9b4xummLmo8CPxDhTWPEB3oYgrMHZ6RuCgYQqJ35VjUmTPEjJCWkSzkRT7fxkF1Fb7",
  "key10": "41RhsykLyTNy9TXf7LAagmWxczctQeHkDMghM5YJ2s95Ta82mnpN5d4myP6B6hUuzkxWWdxnpfwrHGfUCwxuKMD8",
  "key11": "42mA9CVrWVFB4ARRWvy4bGtYpRqD1VfZ8kYfxenSk5dVrtB6XobvqYqxGxU65Gr6b64ekaLQ9nfKPscr5Uf4nn1n",
  "key12": "UTxsCEXDVGxeWXkwNhS7B3V6s5kmSStHHLppwVvaV4HYMqwtTdgDG7z1D5mek3BqarCGjjgHMpkH2soKXWUcRnU",
  "key13": "3YUzj9R7ay655KQ58DK6jqS7NY73sdv5cURQoUSiov6G6PDJsbkRgWUv5W2sMPE3FhJaLfxHeHwrgqsYTta52rrD",
  "key14": "2RsXTvudMqweJiUz2nwnPhrWAgK3d3vVJyrSmLPLuADt34Roo8P5YmuivJ2KMngNQ1y2xfAFW6mUgPRiHUvnQxQb",
  "key15": "3pGLWBd1srbKEnjcyggMRJ2L859hoeQJwr4JmX8enLNQJZgAVqZ7cyr3mFHS6j1wKnLAzuvc9AoF74TK3JVnXqXn",
  "key16": "5DS8yLkiaYvV5xdFS5cD4QAJHi28DfZz3eGfk2bXehLwztizjr7q5u6ZHZG2GK5mfgEE5pQPUGxdXSiXP2d8Pdfa",
  "key17": "YTEkqr6XHATWgE4viY6TfGfctVrJuEyaPwR2S1Q5ET8Ku4QwJC3wpjMvmkJVr3vcTT5EFoLAC21BSkSXCzK6zGw",
  "key18": "c2q6du1Dy6ps669fRTigsruwv7kwzPGRZjDenuHQhkGbzaE4eq2GMUjBgNoXBQmCGSnLQRhcCjRNf8FFEq7UHm1",
  "key19": "4Uycegp3gXN2dYkwQWNhqgBBBY8pnUy9WA1sksyrJ7MNSVjkyN9YNZx27wNd1wc2FgRnJf5dMRbJadKCaqNA2NFB",
  "key20": "33CUmG2nswyopLL7jCfYfzruG13id9DSpLzA7qZGJtoUFdnxTd2RMxmFu8qf53RufewKf1mnUNj2c4b7CUdbBSKe",
  "key21": "wntUiXbQiaJWpShXHtMaJJ7Kgy5SUPkrU5ySgmiw4kKUYmXqNgygNLL8RDWQ1UJc3fiPUGgq5z45zda3KJ2KuRt",
  "key22": "5iTP5crGVgq7JFeaTWe1arxLp2Luju1ypx3KvtkHTzAbd1mrEwiQJ9bdPR5ovqiMLEhioGw6qV854Gt3KXbP2eXm",
  "key23": "4Nf8CE8KBrLjtWUhQMG4DiwyU7nc7JMoUTcLFWCj1phaTkCS1b6SFo7YzEtgLZTF1bBM6pPrsXEgNYyMmTw7MicT",
  "key24": "4vg8oavTFYLKHKLXiAgZtpeTqNVd52K9TgjWvMHuSyvAu3aFdAFjZcf5MddNg9Vtjyd4W3j71uW6HqthCuEbDp66",
  "key25": "2Z5HUmA6NF74tPHUitPSVkKugofxHZfsQZ2gQFS3JWsdNKTAHDW5aadmiJyHv9hxCworAp59h9Aa1osvxvKBi8gk",
  "key26": "2uPssDHakrNtwKVpwJDeiZ1Fgz2TKeLUntQ1ePogy1gt4fZq6gCcdLSKGPjk9Rscg3Kwb4CeQXZBQefSnVbEyh88",
  "key27": "468zuEWjZH9BjYZrfpDDpdaX14G3utjyh4NB2UvK4jSgScJ4ebrvFefMHQ17bX76q2KPpWj1K2skyDTtJXL2Kb9i",
  "key28": "3m7bAKwnn55GtNvg3cwsFiZzWcpvkKEQncYFWF7sPPixzbH2U6MFyiru9bmfhUekgpyidK1YHAMNivamc8DZLWKd",
  "key29": "4rWUwnVCYZzsNNZ3qJsFdUtAZDBGbfBaFCWXuJGfBNU9yHYwbGkcy9oJEahsFJPxkuuRGHE9N5GUa3GwyVz9Mnat",
  "key30": "4NSQLDpDG7y1h4wXkGrG1A3e17oHEUbqqu9trvdqVLBjH6fVVpG5FL3r7sZfHcvXsTrUfcoH7SzpgLjcoVxqDprY",
  "key31": "5EJazG1D8jkCMBxwjXa7H6Uj9e8cpRnR6qdKzYVEVVuDGusK2uJdXGr2KmVwc159vjuM1tLtR8YB3nRzkjcYdMug",
  "key32": "3tkZah7Hv7kkncnXk6GXZmGtd6SbMdudgd8EFVFkhwLj9fURqi1etAvZ5ScHBX1Agww16jArLKtRReyQidcZ6QSn",
  "key33": "zqf9bbBfwp6GMTp3D8LB8EkYyEg2p8sPSq41JML6A6BVyDFRVxGYby3GLt7eZekypsJysPGz7f93GcnoFkeJ7L6",
  "key34": "34PiUSN4q7FNWDXoTUGXqU5evXaxc9dp9C7F1V6W2U829GiqU5nXNfPRR8kZgFrhBq1uiFXPMAhaSoLVBHknvbr2",
  "key35": "4wRNZ1SSrh5MLutR41xGhNM5WPN7CXVR6JPzxxfy2qaabmxjHM1H8WGTes9YNXmoBW1vZEYM1qSe46bqVANDS8aX",
  "key36": "4gG2BPPw8Am63i1zbQ3jdkyPTW4MTmnUBAVyngYzLVjsryMDdanz2zTbCEYeLW6ktdjELGLLAM9HcMaHMduaG7qH",
  "key37": "3J8cNgoDYpv4otYKmPUnn9mvFfPV2c2QfarAxPPVF6MGU4vuhu22RoSFjJ5Gjr5HSe6TxKjHchWtsfhMt8Nn6N2F",
  "key38": "3bqxfbrvmXY3MVkEPo3ddX2q7HdPk6TCvHARdgaqsGyxVV242WFx3WN7LWUM4wXAamnGcr8GMKGL4TT8TWwWUR9i",
  "key39": "3yc7fDhv8T7xSHSh32TKgeALCTAmmQqXZWpXD3Wnqm3C7q9tD1iH5oCosVKYtV8SVJY2GSqcA2EH47fyneeAN7s",
  "key40": "2EXNjhv1VWz9tkHA5j5toBhvfAgMihg41akqTvj15qtzztCddLo1scgLkD7UAFUKhvVZVsys1Fa19vABJ3d2FJLr",
  "key41": "ec7ckYXhEkmjyWRCmrP4Ygthwm1rWBeKL6QrHqxkGzTVfWgupFz668UdiVD2vfH3UxXPyezzLjJfQV3VUNCQNCz",
  "key42": "2ujqqNd56qTKXrsLzgoHHqZGXSF5EidT5PYexY2YRib6RRnJtrBypMPPYursEDFbLLM488d1mHFuXhKnDxn5WU4z",
  "key43": "chQjfxPWus9iWGPTdUjTZDhaTmvunD2N1uKmy5huHoufEnbWgnFoH91xjZo2FHn69P7CuTsrWGhEZqbQoikn4gt",
  "key44": "1LqSCT2A56Fy3T8r7P3ShTYN9h25W4cbRLwTtE1DNevF5Udm51ZSgbp3pWrDMHxaoXniTUMTMmtrn4kao2FoPt",
  "key45": "2MATesgpcvrQEP1hjQh7rwsJmjsgzGaxeVDzPEhs4sqFeXxmzXi6n3cb4QxdfDKpGJNsJiEJsUd2QTmd3n5scVdV"
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
