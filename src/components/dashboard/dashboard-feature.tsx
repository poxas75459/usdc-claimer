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
    "3yFsvHo1GUDAbUNXZYW2AZ1r5ix8QJCfdwj6sNhQeVTHcy3qAj8Cw6KxhbYxmr4Q5qvYo5ErQ45iXdBarKb3aUG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjdUatVBSkT7WAehyG3Q5XmoAJhppKDu35ZyjDYF9WpNshoUhwTH6NPyF2sw2Xrc2SqEecThn7TKdxPhaCwM6K5",
  "key1": "4Hfw6vRBggs416Za8avPesZiiRyp3xwojmnPDVYRmNNbojRcqo78LqBgR6AwekMAtEhzFUhi98NHJK1KkrLfTJj2",
  "key2": "2ayvTG9ykfhz1st6D6RigXrTdqccLmX73UmgAUocfsBwP15GCTySxPZdQTwScqywSAPPWNFm74ez2CC9N5aej8Pt",
  "key3": "ugBLppKY3BdnLKHYpsScUHfirjr3wKipM3juihJnKAosraHdxWvpKhvuMRCynCfgKCnfzLFuQyixeYciiKSsqhg",
  "key4": "4HSE9iXLm6RkQPNM1cgoRuvfJ7CT1tBKkzN6bixV5x3PwB5Fj7W8GWbg6Gzxczo2jH7gbayxdsmXX57ircXyWinM",
  "key5": "2xgA3jZqHcNxBGapqR4uUHADJM62CjLSpg2ef43E9WSi7jDigM24SZsoCadVdHE2f12mD1ivLkQMnDWx8jbotuVU",
  "key6": "4SrNqhqaBrV7jeJRpBm7wKHU9EKHBYdJFSc6SrX8VnC16y9eiMoHBZ1mQ4Rpv8NByRfsh1fqmkq2dBnA6mwCJztm",
  "key7": "28uLj2PzHfBFYNDWDvLJAppqf8qJzUH6vMXLHaxwV1iKTGuLYYGfL4Qq7ZnTnWHSYLM2SnPf1mU1sXv2jtGQGvHY",
  "key8": "3YTzZBGxQvWnx25mxfXofVeCytmaVHyDDQMXG4YFBPery6w5tzz1nf7Qewv16qrQNioU4kMW7Aep8qjYNhx62TRk",
  "key9": "331Qn5X8CNxW85tBmjB2DdibV4JjYAbFcS1ni6gWB417Qd964yndKrxV43CcmnxSJjMyC6Z5bRmoq9kMVzpjvPiH",
  "key10": "5cDQc4BcjB7cu4CnLL1rGLwBfgnEG5w6L5raeFeCYBamhPH7Bm4F7n8N84XcCzxfmdWRzeyPVp4JVTNYUBUPp8UE",
  "key11": "2WfAfKEAkp8ERNGPkR7S57zNeDA1HTtpKcs8KxFxBv3WDVN4mQCeZ5aQM94gqbWRxPKb4peeNYBipfLe2bDShSJ5",
  "key12": "2mpArL9sxm77SwgC8wRfhAhiGZxZqJ6CW1oPqiRAARudKWynxmMJ3MBnMNQAno9s78X7AorJ4vRVLHeoKrTc8uA8",
  "key13": "2bnAuC39Ux8sdVooRpaPPFXoBPEgnMeYcCDS3WNUWsE1AL9GJkcQiL9WRh7bnYkhSic4ZeBH5mJotnGPk2qB3tFD",
  "key14": "2zt5MJG7t44nmjmFmo31pEDH5eAeVDXDbGMwbkAjP2yuaKgmbLMhhgwx6pkLiND7vvVGjKm56oV68Jka1o7zXSyK",
  "key15": "4HVMhvVWP5eeZVHzp1u4qbwTt1CxA3aN1DsW6U8PdwF8ywZ7TbTJxJcZyEPfAZQWpaMLvcmF7DiB5S62hk9hVf9k",
  "key16": "3sKzUU8sdK1ARmG9d3KBMD6Gq4bUbQb67AZbmHYiPEsVWTMHy4npFBgcK95937GsZw42rmYRF4z1MjE1JBWU5Pbu",
  "key17": "U1huTnVtcJWjuibTYbAnRRkNXHcFJEvamRUAF3dGoRWH7eeby8R8wqS5hADepc8YQN6rLyD45HEjTi6EcWDfLyd",
  "key18": "4f9RuhANMVW6gHGuRxhGjhg7oR53JKXeAGwW7zZxPAxfhqnzs74rsNxXZwf4cBiqF6ThtAqCQtMQPHJF8BHjNiSh",
  "key19": "2rhPtkGtZAvfrQEpuyuT34L16vDNVBjpQpqE1mn5TCq4muU6NLF8AcGP6tuNYZfsMDksNo86mZUqcqdc8cEVsouj",
  "key20": "492DED7DQvusLhNZBxWrCYfqavrmPsXo9cRLMfW8VvdpB1wpR88Bn6wgpQ3EBbbK3Hfd8553S4AzRGJdn7Z3okdK",
  "key21": "4q5cWKE6hpwmvx5ZgtfZRphxvpZSa9vG56YTQoBdAZgSDXz9Smo9xDpK4fVTWybCQyNJs4Ad13tRrn72tMHUX2oV",
  "key22": "3GQYZGFchr3Heo7C8sRctyPNxsZqXj5axpNaRR9e3hzNCiTx7N7RMPr3Vf3WuQR66NQz7GgRsXV3t5YMbnqGcKnq",
  "key23": "NpSL89Cq7LXEr4zuL51HFAij9jfzbh8EU7u4jTm1r2CtT4cS1cC2VjmbDbJefMXTVoMe8QHggoytij2X5Xkug3c",
  "key24": "62SVCDDHL33odKS6TxkBWNuePxdjGNSnMMfeCZRYsNfnLY2rrENAycwVPsH26jMujdPfkcPT1NvXJ1fdF4UVvowp",
  "key25": "5g64TUpbsQarTQFk9hJzjZaSfnicvHZxt73Ldd7VHz4C8RS22mCouWnbejbReECbw36zVmM4Uf7w7VYKnPD38KEs",
  "key26": "31crNwwEM6ny5vNi9sjBqwWcm9sPkfhjXxPkMyMxSUYsnnqEuBgfZwoxaAsyCCTxS38YEBtHToFqp7tnwFEvrAWK",
  "key27": "3cpwZ3wk9F2S7YHaxD1CUiHJYjWtrW5339VimAdQZEH77tr9y7nqMsh6ntXjYsoF4Qme8wgLBRWx4adBBwYSWF4y",
  "key28": "3b9C3hNzodWucdDJxb8GYKGGj7YzyGCK1mgcfJV344Py9Qqh3eNPLhtJSUTRjvsqdXk1CsRcueoXT9dgWm3D2uVT",
  "key29": "3g6Eva2NvsvU1r4n1Z88RWiGjX9wQRheTJnxW8JSTepMqAf8S7fy9bX6wNceeAL1hXaQkibgzmbkhsPiqQ8rEKiA",
  "key30": "4v5oCeitgoDzjMeWDe2xuhew1uTz9Gr7Sh2tdFqtrToU5J93o1A2RgMnzucU7nbqNmpEsi1E14gxkRXxfCZFWiTs",
  "key31": "36UUusXuGXyCynvoSbDyJKTTS8Kn627cWnkU6UGYDCDDfL9oJqEnxanXKrQ1skfoiFaMKAcH4J9wojDcqqXMb2dL",
  "key32": "iGtjMdKmuL6YmHaw7d8648AnBNsv5XG7aNpduv6kTytFei16WbaugHP8J37RW5D4mJV2TeHLXgSpHyzDgU5ZCWX",
  "key33": "35qwDNLT9zauasEA7x973DftgnpCaWYSVyC6tyjL3Jd6pNvDHxgrCmFWdLFAuHo3p6TeEc6b2r8v8KTrjCw9hhsW",
  "key34": "5SZTLrLNWvPdrzGnYrCmcaEf3oRdWCMDBkx9R7Pcvp78MaZjnsGAcLnJsKWJQWm9szKXu2Auk9hgmzmhceQcrRbW"
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
