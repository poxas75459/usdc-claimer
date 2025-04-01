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
    "5NVCBrdPtkL3zeESvPiLoWXTFVy4twrrwymbJzoNGY2i2eU2yFp7VTqeSwC8SLK8tLoMKXnoweUHJB4KvL2sDdjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BXHizs8PyCjcgTpMHoq9CubCygQJoS3FQE2udTxacLHbtRgamgiN27uwxxUvYi9mgEjDpYAEkdEuqWToDBhw2T2",
  "key1": "Lebg8WPahQH5uPnN8q3Fp6aSVBqZCPYj1qsdeBQ4dRPqPFKK5XSZSY6Vc1ztUFw6BGArwAy6qD5gUbpuXKX9WW5",
  "key2": "xohc9D3ARa1gDqX4Hvk6rjk4Hg2a6y9px8wwiJRrTWL8cChGBAwcYbZPiguPQGfNNwkGk1xpAaKh8AVwtFMqXZ4",
  "key3": "28DSbd4aM3RqGx6hjNzRNgHJvs5ZgdUGDRxaWyakJE4yEV9UPgAGahvVPQtu7YTwM9VwwQvjfh8R94Z7ezVRCjrv",
  "key4": "4u15Z27Fd1oQ7FV9MNEkz6iKmiStk5wma9R3CHNTD4p7wCPvRA1xYQQ9ihjJ6rj8rXwYiaLWcnn4yH9NEmn5aiwt",
  "key5": "51RcheSTj15gLPPsgFFa3RWnvKc7QghR13jDEMEXqejprnGLydbedfY4eZFo6zUjYygDfmE6dVL5Mm1GJvv2Wsu7",
  "key6": "2vD8VA1eNsRWawExqhGyMDSqppu7cbX2AadDeZdQNCZmbAfvCTN9dnWR8Jn1wTvrDDEyhoHRQRQAd5Vn3cKsF3st",
  "key7": "3K4X4bJWG2tT7gPY5L6E1ikUmA2iJeRwa29DSds6pxxBzBvu9MDbsutT8uGWxCJ2r9qn939LFQuCnvxUjQVobekw",
  "key8": "fBksQNQXMMcfEUvsNw7xNWzEpCsb8Uiddfo4ACYggH8Mwd9gbTk6XTTgGP39NBR82edSHj3veygXHTGgZSyCb7f",
  "key9": "4bJCn85PmJbbW1F4dAfZ6EZAupDfkUujbGAbXt9gNXZcmMc9EZ58cWCecF97vJiAay4JqACUHDbLGHF5CdwDSa96",
  "key10": "5aYg4U2iCxKFccTrAPxshB2NUHFSyhfpChMcEjTSDmMjrooXdAqJirQe4ociK3nARF2VBsGfAk3fgmSUWQ4cdkNe",
  "key11": "BmN5wb7e7fMLofeWsUsDYaxPNQJ8PMDLXCNH2Lp6KHeUiVMmpjBuBdbb9nTmYPBXHABpkJqHayrFwjBFBNgEvdv",
  "key12": "4PQ6X8d4ygRKwRmGJgSRKVvytB4xk5gC9vkyMsMgyG1ztQsm2SpNW6E2fWRNyUqJmFeCJ5HHXnK9TRoVhHPqGfX7",
  "key13": "5NV3QgJW8Jdfs5TjehtDqBfKLRpCf4W7osr5BfND4K4uu4jKqVVtHHyPUddK6PmtiMF72CAY41zkbbGn4SykGdwx",
  "key14": "29JBVzcgfuXxnNEMFFENACd5Qya6PhUPopaegjaVqBtjTAzSxKgU2TNAiHzavHk7zDoCYw51DjKitSK2V4GCthjQ",
  "key15": "3GKnd78ML4yzG75e2xsqPoNT3WaSTqu8gMAsn2WnDQUCCADjY85Dpe4L628TYgYcnggJmNuzMJdaBr6o84kDhKan",
  "key16": "qpEkkwJCJyaWkmmBEx8C5GHFSiG7magSmMeHxSq9eSPV2To5BG9JeELmfNdq8MGgPYyrShwUbxjF6MJoWPn6FxM",
  "key17": "436JaSRFhuXjaPe8GhJwdnTcU9r9a71jbhXQVWcyjnWbSCEHNuLfQ3ndJubeYtQm41nt1Bj83KXQQqR7yf7L6cpc",
  "key18": "5TXvBemTKyBUURbjo6rdi4yHz6uyPTCQtCLtNSabDEs2WG318gCTVk8cBzdMShiqZeCLkCR9cNVUnP1dTzd2jS4k",
  "key19": "27QNentoir669jJuXheacrt2jmeXS9Mit3SoSH67Y5kbdMq3AiYBq3s7HisCc688rQQT3iZfdjbQTCC2Fy8Eo91Z",
  "key20": "8NdWpFgNZKbeec5afxfo1gXpC2dLZooo9gYTvFqZ5da9n6uHWEeCRKXEJ5N84ULXuVKMVFmfxC25EPVfNinRt7v",
  "key21": "2xRYZLDpLF9odZExJvZZKsqM4zyTpbs1aUg1a96mdbnt8RJUkmikqVAm6LaY3qaLKUTttx85n8c9JnThM6uZt3Q3",
  "key22": "2NXSJA4tsKB5FybpLWqhANh9Ch29Dq2bytfpFWJKes8VAPgKEWXq9CLWY6gojYKySF4VFcSKCMR5DhXJMubY8DAW",
  "key23": "2vYkqtdEC3F2m4yQa9EY1LLHZxT5FykF8jL6TVkrLTPSpvhqCdac4ShvMjUV2s9SuqmvrVQKDjXee1LSY4jfft82",
  "key24": "4Lpsm6Qx7z7uToqHFutjQD2HrYEtfewX5GEoccPStRedFB41ydpnJEvscfAhhfVVJEc4ckLe5PX4PfjaD7hSQKaN",
  "key25": "DbVmqKfAKfydeogWB1ehDzMEnwux86NUBPSDrUvyF1Hyp8TbywHnTuGLzgTcFAhVvENqKj55itMgHX78YhCFymj",
  "key26": "2sm4eSQJ8mqoFN6ZUR5b4hqZMBnq3k4JVZV7zvNqfcVTVyW7AoxzYAnzMFGf2dJXk93VKu6rcJRxJjzhfznPSkTe",
  "key27": "3Qnk4KQvMMgETTtJWp6DDiC48hK12tzHCf44n3nB6gLJMhu3ympG8wCAzpw7nQUMff9iWgmDQdKa4TQgSQbnnSH9",
  "key28": "2TQoUphzDPVZrANJtkLTmJhuiBQiQjjrBhUKtor99Z5bcoN4TpHu412NucLBQaNZTd4fbi4CqkAvQZtqDexhSwum",
  "key29": "3FL9DHPWup6y9ChH9wRFwhFqMxjtkK4AGpUYgkDVhHdRwCQKy1qHLHb1yerSFQqZwZ5yPYmqFmH4fgMEuWThWsvo",
  "key30": "dbKYHJefjPX1KWF3PBdu9tn6DtQXZpg3bB1LtkEqnn4PSXA3Cbfb8n3HneH7uWeP2iEihotts91msS6z7zdsBTV",
  "key31": "3JXS8E86xiCKH33GGco2hLRpEd8WTJRbDhvqyZ4MfrwgPz4TcrVRBiLsBWnBrE1a2XjjYSNxnHwbmtmcentofwZi",
  "key32": "yKn495suMYkuhJEYXovi8kmwAEugQFgBN7PbhthzZctjena59VTrrBUdbgxeq1s4MoQvqbKLtHkx58Q8eiDN3Ej",
  "key33": "5zFbeFtw7KcCSH2EYZorAjEToXRMneGrPnePoVHTLSFJdaFHm3FPBNDS6UeroKkK6fafxVXpZ5EQuzuyb5cdDNb3",
  "key34": "3o2i8dMYCGAiRLLre4aZa93hRsYJkdPcCZZuKCkgjm6NbUK5nhe7VQryJPD73w6hrkGBE195dHw1cp1HhceVSXDL",
  "key35": "5iHpuH5Hyx7ys3uVtPmxGQXPbqVpVoNAoiuubCcZEvshduJADeGyfB8uwxAxMzTrJC1ZUhboLYb8nyTiuz5bK3hQ",
  "key36": "55vqzCunoGz5KPb7z7DRxyhqmf5a2FpUPrgMwb391Q6vLrZrAcr9fpVEWn9DdHoCqNbGd6VEL64oTLz9P882Gqxn",
  "key37": "2vgNxftDSpGiuno3LbLWRkDi9Gsn4B5ya9UE8rTmTJVf9YaoTv1kQNLp6qfDxwXFuDBcVrdMgBUccFJgfBzkVvwJ",
  "key38": "3SvohB1PCiPDZvdPSHZdiVU814oAbpLR5W6vTnCBnYXQ1FXMChPpRXVc3PbtJFxNR51wwiW42PryU6G9gCgc7C7E",
  "key39": "36CK3LU3YEtRs7yy2eYA2vbzZbEZy8XZyMo6E2PS6rjAUkVSAZuMUGLKMZCTVxCUYsg4pZ9YBLiTfJn9WUV8F621",
  "key40": "4hE8nG4xdm6R4GG6cHXtutwR6wJKx5KFYpjXhiDWL5ohFmNF7cQM4wXTd9TuvYtA1pwmGCvEVdmwCkaFuQy3DNTm",
  "key41": "3JKQ4X5YbC9ZK2V25TMAcnUjn3Czam86YNrQLWX6zMDGZbHxdipFK7KPFqBHq1bU7dvopwYFdWmeEjvdzo5127eD"
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
