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
    "4sMBGMeVjUc8sdyRY93oAmrfAfdympEBbh65UpTFJTBpGoTrwwwwKawon4BEir4FwjS9MkPEuDFRqju5nef36yhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54g7iMYuQ3qaZdeJDC6b9Y8DotpCGVEDiuUgs6pzpY7tP7p6p4jusDfEKMjthnB1b4BPyy2uiL9KbpkoWFA4mSqx",
  "key1": "3Xj5bQvYnBJN5fJEhTgNwK5mptVrhrsWhEqpVQDMbiBUeFeqtMnqkz7GZXEMYi8Kah3n8h463nuJVkPZqFU48Dms",
  "key2": "5AZqQXvybtyEj2Jff3ACuojx9jhfBEbd5n62Rtyo8g7MHnE3Y4zxZGFdt4Pe9vUvQdXjmmAa54jWic6AC1Ua4R5J",
  "key3": "4dmZdKXgg1oAow8SpCBbSynuup7A9kSDsQMzWtvQvngrZn9pWrnqnKAavRVAfkFcQF8PfeFz89QUkbEcGpTcDKY7",
  "key4": "51eFhpVe97e13ZGTSV1vU7qQoJsJovQh3QVpRMvPt46bij4nM9GdtPutBVuwKXWCp25FFNo4dFgT2km7yLUH11D6",
  "key5": "3T6eMJFGkT1HW1EeTQMogc3xJTwGTzAdCPgCnxtdDo1NUH62EcntX9zJYf1Dx7B5YMJwEzto4pG6y1qLFpLSygVc",
  "key6": "4L4LwRxfzSAkgrPc7wGfUTVHVN7pdTqgzCHEjuwbTMLf48VBjokS8k322yHgiuaWAxL1NRGzKPZKs4gmDJgtK7XT",
  "key7": "5vfVRQhfGgqX1ZuvC4QPNvMxoKMZmYLm2Nj9VTyYfareT8VFJHhCz3rtW5pSYfop4NyqXYDm4tUF6m86cWAHVeaV",
  "key8": "2126z1YmwM8rXSoSfbf5kGA1GinGyFeqB3nVkoFYXyJo59LhnVF9PSETRfRw1AnJ34zkHJsQwFFFa3mHkYwVz911",
  "key9": "5a6diaLrPcTTUWq1xK8D23hwTp8uHNTFgTxXfVxxSu6XXHxv4tyV8hDtqXJmEHS2LweBcDmtNGecKz5h4yyRr1DC",
  "key10": "3odB2vm4qzmkesxkAgWM9sRjui1Jw1FfCDTXLY5SwuwZX1jNEMjqrnaPecv3mx473TbyzEygD4xgyMRMr3wevx2L",
  "key11": "4KYeNbv8P3W3bSapNwvYxhhDM4DeTtXZRD7NpjRq7D1UdXM4XTuF3PqnpGmsgMLu83HgTnbHemCoWg6hGM7kuHhy",
  "key12": "2vpPvMXpA6GCG7NRJNzwG7cZDhKo9mcvpeEE8AN9LPcqqEmnAMBDmGUv45tiyXsxCy13oFbdbjo1wwBc79cLPLNF",
  "key13": "gj1ndZaGS2eqFERJ93G9cjhTPCbNQNhCVAhJZQ4UWoXu8vdnXB9JhciJaPixzhzjE9dM521fnVHzUBfDeiL1r3k",
  "key14": "2PH742XMFV9makg6CYMdfig92vKkFWG6umzSAA3FL33165dPh4gXKt4hoKtQTErwVBrh9atYWm8oKcRvZueYB22T",
  "key15": "5eeZ8n2UaXL1NGyXkwGdBLx237FK7ctRPUeFdGrd8yDBHHGQrK4V6dBrMPftzFwAwbjqfyvWVedtinSEji5JLb4D",
  "key16": "598Co4x6e3jFfJr5bQp8YgobKexsp8VgiJqdgPH5twAiqzpUwuybk9cAh7EsyyVX6ZV1JRTFbNiAG1fhsG6k35Ue",
  "key17": "5cqeQ2G6cNZvAUHukRH7QNCddHbXzX2X53ebBkpM54J9LMboZWUHfzm2iueE85S2ryR7H5LM953KEeTmqPgui3WY",
  "key18": "3CBhxvgAAKdNNcznJHpjndY8n4hXSUxFsgR6rejjaWmJi5Awfb9JTo6RHg8xD134U1CeZcRRfS1x5BiVpqhCrwPv",
  "key19": "2RrvNwKAifd9NrpAoDkmcAF1XEMXEmWgEKas9oyMrFrz5hoPYoBzVuwg7YPJg6PsFqMSZt966Ny5HhVdpAp2a6is",
  "key20": "DPW2BCAV7BPcoa8nxCtXG99JzCuvy3Xv9B1pbZ6Z7K1QEsGqAgQCfcPgUmeXj4viv1a4Ajqi9r9ZH9mnFgR7FsN",
  "key21": "4wdR8eWxjFsqx8LrCtBY3WamVo3j3gV4qmbpYx6FzNCLNUdMZ16KJjXsMMdUcpL3nqFScHQvkU8F5eiEzee963bz",
  "key22": "2zyMpUM29Rk7z1xTq9pZKEySvVAL5THdwpkDhwjuB7ubZrrFW9nAkXSgbMCiyno4DGpe9DYesJ931nPJvBGp67DF",
  "key23": "2BTtFY9VcA59N2sowkZAAGZdpNn3PUk7sevC7UTEeh2o8B93pP4jtQTjeasbBgJ2gyUps4M5eKtimLZvgUYPZnFL",
  "key24": "4DMn8vbXrGasuSdrJ776wJnk5Yq6AuseFztCVGJYEPkJ45bQD7Gbo51g8QBYEN6Dk7LhydbEdfDrtfWQCYxtuZz6",
  "key25": "5esashVUUWLyopm3EdZWDwoAkTFZnbYWLrnUyfGiCciAzYNnXFYPP7Ly1VQbDrM34aVH2RVUi4hSBcAMojrXzycD",
  "key26": "UAwMh6jkXkbBa8ZMdyPDptSAuuoMJWAcbaSKpD4zLM28zx2kJLCTNpQ8aQBzcWPjP1UWyCPkTcXz2FCoa2s5cCX",
  "key27": "576g389wLwg23itFapGMVmKfZo3eZ23kf8MTgqHzaDdKx9yf5hAscNZu1rUnPYEovH9hocomkPWgxmNRckvohPcT",
  "key28": "5QusnwyivTUjW638o4Wmndaz1zaftRUqYezsKfRH9ZSBshgYn9fVgQBPx1xg1RqRh8C7dCsSVC23ZFUqBbVGFDtx",
  "key29": "4NEH4RTxPrWXbT4uBtJTBGmCoiwDf3maFiLDcJwquoRveAUpFFoemLS2VG2ENDWeMGXqkyPsLG8scVUZBh84H1KW",
  "key30": "5CMwP1viNmB2ZrR79R1oqh4nSh7iud2eeHbe5e1GEMLAa3QikJxSTH54nrhxbNE7naWQCP4ZfAjf66krNm5c24KQ",
  "key31": "3nd3PRhDbaYLNV3bztFT3Ak4Bt4oYSWkc6iwr7iH3FGQkwEVmyGbV4E1H7CVYX8eQhsVMVNgw7iqdYeT9yuJXRF8",
  "key32": "5auvp2sZSpX4wLiwC6jGPFusBp7THeonANHD7DdkNCrsDKHMUNRxhBf7U6PAHtviFpcjpkaYV7tjHdea1pp8VHyR"
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
