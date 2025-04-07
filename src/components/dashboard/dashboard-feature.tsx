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
    "XmUhNLFxTZdzvUHgbCt5sJZteJyZgba9Ep9wUzvarNUcsQhe6cEbgMgxKb21o6bNnpvKEnfWQE8AMGbT76GsZkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYePBmN7gEsT3GjM3Zbdv7VdBGy3Fons6Hqeikx6ooCs5BBtDg51JdaCSK9nDNLiS1HjoJzyU5pDBLcW2cSavGf",
  "key1": "53NwK5Zfaugc4UJSwbwHoDkR1s4hVXFSugWcPxEUySzPFTVXCD4vYCZDzkn4CyCmx7rDVsLnKZEA9sSNJZChxgtf",
  "key2": "4E8Bpt9ovjPTN6ySmzCcgqNjBvj1SmLG5pWNwRXZf7ejemgPu741ZUeX8aya9UKPLYW1z1QJdEdGxHGgnw7N4Xv8",
  "key3": "k2ZgiSWcronyMhErHTHBXFL2JtVxu28V2naYv28R8aSfF7HrPTJhWT994SyKZazJusRd3156gvfczmCM9XWFrMM",
  "key4": "5WiA15vmUCvY7i5r4Lqj93b4GAsPgLNwUKc8YkUKCToBavem1AKJbJjed34Mv5uCNdbgoL3G1NEru3ATmA14KdmN",
  "key5": "8qnFRj89e2RJPuwPV4uYDTMXMoCA631m1sLgQsLkBKJAHyycohfqWnZ4RhmwN8hGWhz3HaseTkamZ85bPzsX2ZX",
  "key6": "qLZUFoT7A1XWYtCTVhjKfY9N1b9W7VC1UdyR4pzTWRBcH3RrALTkZEHhbiYjNq4Ni7VEJwmR5dXwYUuFwfJj6Wv",
  "key7": "KtJD9TDrGRefdbmBGrUcyhsK4BM71GFTkEu2Awtat8iCbwvSeZLWv8ZHMDPe4okKV5h9CD84qD7Ra2nUVFwe6cp",
  "key8": "37iype2nPyi7NZUtvcHACrhYqFDjV4NsSsXJE5ogW9NKKDjDArXoSsndXyX6Xh26WYM4k6VnSuBxH5rrUTNeHVkh",
  "key9": "4urtLHCxVAfWmX2TKYvshPk5UzWRLU3y8MHMxVwG4taaTNsmquQsE7zU3o4sAgvdoSBDQzcwx9DCREy8nYo6vzca",
  "key10": "4DoWW9V1gYPzBrTtrnWcCYJ5HLXWxDKVdQ3ZSh9988vDaZJ1b43SvDt7Ue92p4jf23rmeNbBfRNuzgFwptofr3hD",
  "key11": "33ysFzuoyG2gccTWXKkw6o4Nt98MKSMghoSxaTxYnjdMFsjbpQ9x46rXztn7GFtRwmKCZXB4VkwEhaVSRHL7SPvo",
  "key12": "J3xpAKFeqdCVi6ZEHsEVxXfb8Zp9xrzLqtViPBWgQBXPr8y6jK7kWG5XxJQUsgvYw39myQbW1GetGjwkjsDLSBE",
  "key13": "2wc8e35kynzTGVrNhKriGkKiYCfHCrSkP6PHPvR17eujfPABs1hwacVoDvuf6JwqpLcFk5P9ipgBGxPocmr1zBUd",
  "key14": "CZb6RUNSz3otxtvKF622cLgLRDm2Qc8PPp8Dm27ch1ioLFjoxkkf7mPdg7ih86kt8yhCa8uD2QajsJcsR5xwHcg",
  "key15": "2wM622xCKaSHVt4zU4ZMJVKoXEXHQSXz5j4yRMdkU4sTXMBWTe63MrbjyorPVhr5bYEejXFwCLDNf7pco2caDnqF",
  "key16": "4NDf5CB43xUMEqMvGTZBJjS8CbVZqNZHNEYovxeDiKPDcAAkJnWiWubHSivsjyAruK4Bo8962dhCe8DspHJ2Kcof",
  "key17": "4xnLaRUTGtnoPFyKzquRv4A1z1nLTrmgjHGnFrWHAMZeovUtLs6GpJUhmJN2rrUvHzSzE9RBwtNaF1bEMca8zWB5",
  "key18": "3kejEsBpv8CkQnFJpQKRWLRFrUJr8FFn8ahdBi5i9w1hBRDYJNBTVgYQfQVyGDqAKrMsDCYohtj5GLuVBA317pmp",
  "key19": "5whDrkhEqZLjxTuYEAbvXYK6fg2c5qWGmzd7Z8JpA22Z9eYaCcxnaNBYbq4qtu75hUAuWjiVyo131xwWFctrsSEK",
  "key20": "YanoeqmmnYiGmAn9jJ4d9Juzu16P8MKjBXPybETRHW1UoH9STCD3hTNM9B9KTFLZKkoEMgfsCZSe4dLu3Bg4u6R",
  "key21": "59MkwTdyMguhoWPFrjoUX9EEDrwv8MMFYfgbKkZVsTsY6a3672NQhEjCjHxeSugATqpfiZgXdYYkyZHzv6JnYeMV",
  "key22": "5BFeW8W3pnUhvLQ5eRD1VJTbPM8CaeAUYZ3hv7Q2s3dVe5RygmA4gSKbNwXZfA3MDsk3NAbLM7hBcHRyAtSuFh4s",
  "key23": "2mT7eGxRPMjgczFeibWq7ShYKuPhmx3G4qtshbLqAM7DBztCghTShpyCf2am93Wv4EVh6sg6E2qifsa5opqXwKzA",
  "key24": "59itRr32q1K4GciD4n1AWo6V9dtgp33U8y5AGzKg91nxQWgFN6yz5XEk3zd8g2fnctDgB2C7df1GeaMCiq9Xjfrq",
  "key25": "4rP2LpeyfaDUzibJSd2QV2p5ZE7S4shdX6oCTbsNT4ntL9kNp6PRKFVXVP9gfn27MAxre7HovszZ4z1K6G3HDCWB",
  "key26": "4ANK14eY7f7DShEhyRcpvchXyXK9Enz8Tdas7sp92HUcAiacfLRTSjHYratpqxk46pL97cekMMYxHpkn1HnF4YAU",
  "key27": "271r4MR1UhitmGvBmeaxK8kmwwRK3X9857QSyxmUaTVVFxARZVLENcRQNeCWJmRVqDxKuFwnp2xsiEFg4FnuMVdB",
  "key28": "4RM7tCp7FCcwaW2Vb5CvbxPqBqE1HFJqfr3f4Dk3GV3pNyU7WNyRiJPUWRiqynu9Xgk3kJ6MUCFdToqfhV2K4UTH",
  "key29": "5wUaQaP7aPEhCdp6t93dE2RVvRcxEMb5x65TB84WDU4Yu1zKDBuCwNJs1r9zHWWJ1m8gXJLcHR9Hz7m24hVPFGUf",
  "key30": "2G5Awqe4qoKYZ953RyiXdepzKuMUxBVVSB6gdtjXxpQwU9w9Z4vZApB2RPRR8DfG5rp9jp7M9uvmWtcbZ9zGkWw9",
  "key31": "qcZDLt2e5qVnsJjSPyJx2UVuZAafocGyN6ux9ZE3NhMYyZNRDvBvk8sr9Q5aE5mR7eg6cM46deCERTsBn2FwtQH",
  "key32": "444ieF6773y2jZPSPvG9BfEKaCaa9KUsqnQrQoystGLTgk5UJvtLMNmJB4mcroYiFRgKV4UBKsNpivKQ8HtShyio",
  "key33": "4dTEpUSwgF6PLQjRzuUHhDuG3Yfd7vEEALJrhHis6fmptgTcaHrQj7yFJgonwVijVXXrPWAgSj2YTBC1nb7M5gQb",
  "key34": "qaaxx1eqZqjwCZ9yvifkDRcFVRbscDWLxidX16oHSusPDQp929wxyfKxyQKni7pg26BCPQGb8t7Q6a4LXCRCjuH",
  "key35": "5CcGTjSMNQWMFWbCJFMZo3SWcdXSe6jHChcQXLfeiKNrDFhAWfXzYoRDmL1njrBVeWm2FhHfVzEQzioMxzM51Td1",
  "key36": "3njWNyfZJMZ9VqSaad5eH4br1jF6qWxc5vtTPFTWcgDKL46p3oAmyFBhSxTryKCVDQM1hibfBRk4WmShnj8oAdhj",
  "key37": "3SFGB1HWZavz6UtLYW47i87uUsnQmX8r152QGk2J8xWSiTjNTkFoRSErb4Vcg3MZ5pnBk9N9FZMAifLcfnq9Hd6g",
  "key38": "3hfMqWiLmVM2UabmJBWi1BXn1pAh6UwEx2o1TcPx43P7SQigWm5ijVLXykkfTFNLs41ugLzafgSr5ncgUdp9adDf",
  "key39": "26nJtsUFBARFXYBKd3tmFYxUGDCNaZMYGxUgdJ8V92wwGg5spSzLFXUWMDMYixUEH5kSSGeL5p3qwMBdc3qm6Cac",
  "key40": "4usypX7ta9xmKcsCMp4NMeEmDNnZ5TQoMUJFu2Le8ULxdThaktvhqhabNQ1kwpnx9W3XqKw7aBsaF8MZiMTAwVCD",
  "key41": "fHBW2RgAbfYJhKYaqaS7pRF3jKGwvLX7vqDrcLkA9PcrR796JtLPv7H8dhNwYYJiFzpYi2yc1c2FG39yNz6jk17",
  "key42": "23v4Fn1r5ikkQXnBp3VQmqHmJGgMX6SjfY2w2cca5Qu2En1icqmFBHmV21R1CuKSuThQaPni2Rn9nKywB2GrSThD",
  "key43": "3174FZbF3SuecVGFxk8yYUaYcp7GMkWLRZAqEiHUWfXvbam3uwSZtLstuMK6xnYz45yagL87sXaicKngc1RJghvW",
  "key44": "uKsZFg4KD8Vm3jv4SrzwvHcLFjsMj3htb9i4CKzNkUhy7b7fWeVHbDZVVADz3DPb7dZtpQR1QEaTF6Gs91UsRjJ",
  "key45": "48vhfA7dQgR469KPnnUVRAuZQTNWAe6PvWAw4cqQvzsMaLmrNXKER8nD4PwXVtEgk2ToQZUwK7paEB9hPApYhzcF",
  "key46": "2nDybvTQ8wHRr9ePK6rZW6AToyBMMTBfwSrApMwSHWBzkWuXxaDGDMWgsMFaACi24koKk8xqCzUXAcPsDmFckxUE",
  "key47": "3sgRVRDd2iDkzHF1NHThubeLDdBKTsXjVH5DxFhCLzTJfa9ZqwN4V3o1D3XwxPTRNVdc2vAkWUgzXK6x5LzzC8mS",
  "key48": "2EG4noZjUAkeEAnvm47jLyHGNvtNV8gyL2X4qinMingUu36jWZ3Lx5ip62smt48Qmx5VEPYva7HD8tJTzhoqSDs8",
  "key49": "5HJcyFrcwhr7zomGcEDeBrPUfKJEWjxobK6PaKse6fwdf8Zd7L75HDdp6fkiRjZwDLHLUCFgRizeR6rFwUfeuWHE"
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
