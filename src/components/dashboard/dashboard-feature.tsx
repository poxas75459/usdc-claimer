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
    "4fPmZNgPcpzfsoSFfM3997Ht66MTE4MKXaNMpnaQotSEStimGSqcuPoz4UAYGxmuiwdkn9AY474njFzWaMUpdgkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNxgN4DTwvhnFcQjaXUoB5RyW9Yxt8tfSLMqfoeQg8TQoFkCgwiXmssFwTuzPJtXCtLvBrKWgEat13z3SupqnTB",
  "key1": "39ffoEYPjjn2MdudR2nPPrzwJ7viH93LZdRcYFNBDfgeXHeSkXWsgm7PGWvTajx8Xxk4EBVMMpATyJncJkpnB4by",
  "key2": "vkZ2M8G9T73RbLTNrXr4dR8mBHgxSbtYfBkJxh3CzVxD1BXtB862hG4nTLGEPKoAzPLzsBxBWtNsQqe91bqbxZz",
  "key3": "2sQ1UUuEktV3gUuutWZvJUL6yEAUSSFovhuqumgcsnRBmMTEcJJdombVPqSWdEXkzCBqfQuzhayJno21MmGLMzeP",
  "key4": "Ccqvhe4ai3trCykTV612E9AUA8F271JrEmbLXQBwDFzb2fu1FgS9HmYAtraUGtLytfBom5AVuS9hVFEriSUs5uu",
  "key5": "23TahWuJrTcPSQe8jJvbjPJTqC1PnBE1DFhYGEm4anyVuH2SzXxxo7f2K3U4xBx3Y6tjB1uXsptqFapSAuZJjvu4",
  "key6": "GwTaNz2ysoWzSqconAquaFNzrx2qXyJYSEW8vcWL5QQN51nED3D1EFq6uXBjEWpWhmNtHRXR1pBSKFaJxk6nata",
  "key7": "qzqVtFYsBVFdoMqsFnJivekcgPFRb25tKze1u3A9JUubi3ftX3uDh6BmVreCiUnetmUPXpcDKimftpGdDhAG3QC",
  "key8": "2NGHGQd4oXjNc1aXWeuT81XB1GDLpw4sn59WYvCbsM7kQySR7wZFkrA6hfXP7nFqZJyzBVHMzAPv7oxQQJnEBT3a",
  "key9": "4CuzuaTDKd4QFCsjRQ2czMeszikKSxFYsKJavUd97DU1zvwWGy6uyhKC2bT8V7SwMwD7RdJUhD9AiLwry9ac6xAr",
  "key10": "5ZvhsSoxZ6MKHbQhh9kti9DfntkRL73hfgyWpfhw1Rozik3jvorG3nJXUA2tJQpuSJNdYr2Lvcbx7wBDE38Q3HR",
  "key11": "59NUfhpup9urv1LDvXsvuHfgEa2PurkaYZFh3fTwPd9kReKs7ZenFWgtXVjK3CakcZdz57KNtb93zf9cADhhCmer",
  "key12": "4aJUhUQ2RLkSevskW2CsiWo115FLNdCuAbLkv9eRLhG41kKThtrWihw4aZGwb9MFqpiVNuQbmiTdKnvoqwaw5qX",
  "key13": "3RnygVfzLhw4ewBX3gndMQNSp8ty6BeCmx3P5povPDV9rcYZsZKEjeje4cTaa12LATetDz6oSTVZxouga6LTHeTt",
  "key14": "29vZaPLu3ZDzz3k8UknUnk2LJtcuvJwRM3dqJRPcYtV6a87wRicbb9mfPvRhep91QJCPABzkWjLaRiFrRZ3DAGE5",
  "key15": "61yHLwkM8E6nXDLK2c1rVxeV3VwUyZo59fpicXRCQ6vQf69XcFeMLoS6KMxWnZ4wYRzQGBgtvx63Tc6bNTTyN9Ga",
  "key16": "5vTaX5yvrWxgJ4oARDUNTwBv1Qb5eZ2peHDhbWbmcieYykRwgx8asv7w9qF1Mt8QicFifKYs1JwQjDFueX5fsHuD",
  "key17": "2ZtTUfqcniRWMrFRSomBHuV6FKNY7aub8Rc7TL1cRGwvHrxfFe53dPXQR2s7vXXyCfpdWmh5xXRAX6UTFKfPFBee",
  "key18": "DVH2cDDapc2EBzQxz681FH5ahdQJyW8gk4tATydQP8BCEaA6E7jJG1faynD3dgVXj5jxsC6BC481f4grN5GjsYq",
  "key19": "4MNWCGE3jSfRxtowSrBF37WGzHTJA5BzpNm7CPumi25qnoe5dfszV2wYPtBKfmWqEEH3LTQesi39UAsCYxLbRuyo",
  "key20": "3hTrqcCrqaDPrGqyWJrN2aKGJv1XakJTGDP33em9LNRgdaqg57fXWDtK4RKxQKtpZbGcfrEmSTUiNtptFF5YAN5R",
  "key21": "4Ak6jB9RtAePuKGDFAMrdoj9RQpZVwDUfwg4Zudce3t9RDBkuUTzjbfEw1JS4Wy7nQ85MDSxR2ofEbpDVAaFMir6",
  "key22": "45KutwprMQKPhBSQn11d6Af2jtvPizSLo8FzRbYcCTbbV3hgt5xTuMU7dLPpFCYE3SwPiS4jbgvB9GzGGjckXKV2",
  "key23": "4sRnUazSECG2XFtwWFJe1A4bkduN1CE3M3yJmtDTxhhqeNdJzGdknUP89ckokxfn2xekiguv7A5isNBDCzEFiyEG",
  "key24": "52ewrdKrqHs1r6N3y5SqFAGipWTK74hb32dMFDndPuTCfJEXkZmxVGh1VZkTvM1sNDhk6bquR8Qdn5pqQhMmXweZ",
  "key25": "5NmGta5EyqS67oeWEQ3BKRJtLN9kU1K679qKVm7LtZpecveZmt9ooLDhNrBqcoQQSAAcCMrjaiAM6fLKN1e89X2A",
  "key26": "462s28jQscN1rLp47KyKf5p62i5e2jA3tq23u3BuqM98bHHB8xZcK8hfnkPoefqgaU3ZhEQMDo9qDMRK2Kj31nQT",
  "key27": "2NcGzJEtXEkBpjRR7gZ1h6tyzGxsM5vFACW7Z8T9ZGETEW5gG39EGsCcDGtDpNMpNvAQ1ZEg6cPRnfuNoRfszDuP",
  "key28": "4Gx324bn1qfsbCEMWDf7ULYtzmrPmWqULYigHtkFx27i5EAJ9EMA9JgFvq3zu8LU7VJGqnhZsrBzRwzeRq2H5Cad",
  "key29": "3aTLFHKrCSTSPstPbt1a8qVWtPqfovX1XrYJmATWqMracV8Sjxroq8MyU92v2sWVxg3YprY14bHhoVLW8ZHVzzLV",
  "key30": "5Yv6A5exrWNLirR32pa1CVDKLRnorMCpUZd9yP6FLWBSDrCavs2emDSVGfvKrAcMy6s3b3CmxS8VykBp3MM7sFSA",
  "key31": "5FLABFLkozoZgrMAxbuBFWtUwtANEwrHXRDwX6W9vmdxMnjSTDWYjip7ii6KKXdT2U2x3VTxu94AbJ11wyeRciPg",
  "key32": "2qLCJ2ENZiRXQvDjDiunFiuWMZGLyWDanAg5f1uGjC6hDu4kAGtxbZKsjgQUAKTeajyWZRjhWsuXQVCQ3Cynpvyk",
  "key33": "5yfkRXAMZdd6Ks6ZKQ7fADjDeAqrL1vTrvwKsFLz7UWiHvxnuaoiV6KPveQyaiNMJ4rgHdRENd8XbrtVkqg3WMTS",
  "key34": "5K89uhvHNWZs8by7oJ2xuyFeNvbto2nT2zdoPWJ1Fd8sYgAAyQ2i4q5coSvEHyRtxp3KKQxG8Vey4SxYXoskP9EQ",
  "key35": "3eBygPxNBKoNzUzxbqV4ZzQ1NxZQYna3raLCEEMJ1N29sEbuQR5ySHGZVFevEcNdDaadKff3w5pNcEbki7XqUwVf",
  "key36": "3B5aph1cF2MYoEi1LY3ftatAeT5rBegdGr93c6Gghns9uMfUYuUtRRcEvEPWqucHiFbiTK2smfGcMJegVjykRzyh",
  "key37": "gxsoDFR1WkpMWydzooZcP82AosD4yZGmFhE87FV1bnuJxPGrpEZXCrRRTejzkwoTntCsJL9GVw4uzGXTCePZUGV"
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
