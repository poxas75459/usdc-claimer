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
    "KaYd5LCSf37W39XoFS1kPTpdqAbp9HCVT9tDuo6DMtsHJSo7vfwCY1r4vrLTH9cnJcqXYVHUS8TuRY65QypNcv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xvtzWZyBnA2TKwrK49ccVUXNS7ApmgrVgyaGuXgUzciPWR44qtVmQsH3nZ9kbb58aKFtaiQjnfKR5pmW61KM4vQ",
  "key1": "4rs3Z8MNmn4ed333rmcUcK8mKSDQHAnfqwJ3kDS5ZngPsFgJmmM5eKCTFzkAnqSi5e8omathS7KU3GzcpSm9Ry2F",
  "key2": "2SLtHGo64CyW2CsrugUJKqSnjUBTEUdToJf9SjvpFnLFdvnRxMmWcyH6T8xAJ7EK96Xz8PHxnJBe7RrkxRknEJVe",
  "key3": "Nnmb276jxGevbifpYhEotsZhmn1Ho8AYszh3kAGxpjcxycgtzVSoGLHXqb3xRj9JBAUShJLCEowu5nenj14gQfm",
  "key4": "2NuBP6yGfdSqSW5VmuLgEHCbMBAJnitGRjXUp3gEe2VvUCTaXgeuEjWxYd9e8rdDfQ8gsWoxCofY3izVo7VtTQ4v",
  "key5": "4eFczGYGiQ9JwfATy45KCg7qSf4Teov5rYnRyDDmcgw13x67Rzn75XgS4qGFCemhGJAt2bn1vuGywGmYvBJuYbQX",
  "key6": "2Tivb4HycAnNKNnSWWaREb4Mb38BrRgFm6Hz8qyhetuxLRvgVufQ2t9pWGWgDGd3AnH5oUNorFbdTmw7GXJwWjju",
  "key7": "5Fz12j8Zesukq68bajoJQbqwgRbUQH9D79iJBoGfKFPdZc89Vs7ZhrJdVixcBgQBEJvWWemn6KnoNZYsYiRdHPpQ",
  "key8": "2qns2dMiSbacNKdV2fcMCjFdtMg5qk1tASYRNXiAWMZ2RfkGett3qRLYCo2tYYBYevxLqYTNayBsLyXFsvMr3mTd",
  "key9": "Qok7sux97tpWR1NBS6gQ3PDqDeJPBzMo3cvX3dCvKsmxFtkGcZsucHHBCF8XVXDk5AZDfSXXPveB5c2g8BHhpRY",
  "key10": "5WhcsCSEFZiB5qqDq4f5c2FPiZehsG4okfceACuLEQKjcNAW4PqPJxuS76eNyC6zXUmQnoTsz9xUcg2BeNzrouKn",
  "key11": "3rx6YcdKSrC5wXXe64s6sVP7CnMM6zk3DEQbmhfnopBZnWf8TFtMk263jba5rEGdLFJ1yzUrnAfPfY3TLhw5fPpG",
  "key12": "ZcwBzxaJwh2uT7odeQrMdd4YnzXtAu3y3ipzcuVF5JiqgScaw9mA7zA2tbGM3yhdHRS5iUKQhzowRx9BB5ocTKz",
  "key13": "4MCoeb3dFLPiY5pr4ub1rXvYGUoek6pK6iRJSRDRFjJEkcwMHJKRcpbQw2rXDms6PGMRZ8oXS1BSbM3qfJXvEm7V",
  "key14": "63VR7Q7MFT3sWFiKLyCPRJGREzuJMTQTBWTZiskCbugCpYVFxfUDMLCo1Z3P248UFCTv5dRGPZue3zcukBNRBDsg",
  "key15": "4yfWkUoPAADBUaoW6fS1LaskK5n84soYFXAzDzHJfFmqbNyB5XKFB4jpf6kyMRK67T7iE48vARAb3gYkxzSVd19q",
  "key16": "2rdHJjR3jFEgs5wTKio4eRBWT1TVMfxhDSy3EAomnSdnKSiHdjR7WQY6YdLhx24Ffmnm21JcyJfZUFsSsvBH1Npu",
  "key17": "4SAqoFwu6dETFdnGAxQqBdr3PHvEjmkAHCdaeycb9hXezaTE18H4vGLMEWU16Qxia8uv6KnQ7GeNrc4JWkVVRi46",
  "key18": "5YD7CoixkmF1AsLCEVDPNJpzkqXyUaiaATFSTnKJU5eTmEipAkbFKtRtqhb1a2DQuiwwd46tVShbe9Q31Z9XHkwh",
  "key19": "3Huqn1HiwhLBPMZTmqsqMxrnq3mYbHBAubukimMKw6mLk6cqMHyaWJHFu7xJqqKuCWgvQcCvtceGBdLPjjV6Vwy9",
  "key20": "3nSiWhhG3WSuWwtS7KSgps6nVcaKz3Ef338y1EamYd1q4262mnJYwPQ17axvKDrr8P5bTLew7CeVXX48NKu34XMr",
  "key21": "4jacxBfd3QJRssh2N1jWrD9zeECEPbvJLtvfhGhZ9rNicmTbXuQ6Q4cJNktvu3Dw2opxpc3Uu6Rc6d6xAvadciSf",
  "key22": "3sYtAGtfqsGZJrLpYZv43idy5b2ybEALVrENQe99KN3k3kuLXPmx2XVXh7aSbMqYhpELUJqxnWBWtQpMv5A6z54n",
  "key23": "2jhBuDYCsBxeV7AzCEgQETEsBPDRX1WuWFXu3aEXvKFXLCUwwnU7YhASDJjtfnoDBAp5hb7PU1CNb3Q5rXTpqF5f",
  "key24": "5diSvVYoD6w664TTcExvET7YuZc7vi3RETqPANepkNfbAVpodcV5Xae73xZqArnTnXEv1NvG7hyR2XYNFWxHGy33",
  "key25": "41jhrEGWzgPCg7Qe79hh2kDtqw58jqHXkqqbUBKSaB1rkZnVREd97B9xTsmAC65L7bUkokbH8ZEwLZMLUz3LidMi",
  "key26": "21MDUL3rzZXZgXsywKbPKbQr2YCpeSRT8DnsMRZKdSPTphvWBwekcPDigGwauwu2aP27r2gWfwC6jpmsY5NKsBYZ",
  "key27": "5P2FdYjoegxL8xU5kWkeC946DaAQjEpv6fWSba9AXLF5dWpUWvpaSZTX277A1u8naopgmcf3hXjdPPfcJPvuRrP1",
  "key28": "2YQ5hFkpEWLYKF6Vt13eBEwcYYiPXRtevYkADJX7tT7pD5muEZC3JMHmhZmHwKWj88VQUvvddQkNtQ2N2U4aCfTn",
  "key29": "3W6DpYmJNAvYnHbywJnAtRvGvEzS3CLefd6vTZKPrtso5VZWVwhxtDCnjCTwtNRCaUCFoUavVea5XHgcWJ139axx",
  "key30": "xFzZtTpj6jhcw3nesYi7rCNX3P5xKJDJkEcK2AqjPA9DCWCMrHCgMHrRWxP5S1L1QdbvDXQdowRgLz1ia7cLVHh",
  "key31": "gR4bWFfZXPZPXEDWqwcyqakF3u6odYSsdvDM6cm168GMEaRXyo4iWrBT6LeiGkiiPimazQsNHPmoxPejWpDWfUP",
  "key32": "3E78jnQNbsiM1AmSsUC9ev5jVwcji7np6xmJmvKUoeNaqw7rJUGGYJf9183VLEE8zQU77CWc2dvmpG1Sutr9QiuJ",
  "key33": "5LCUuMuRpa2jgAeV2k4GeojDyHb4NFdAnzaotforkqtBu4yDetk49X8D2N9mdVqLa33UC83WiWpJkHC6R1b9wGJ5",
  "key34": "4MzqPbM8bAiU6ztXp6muZEgTRquN1jLxzpHWsvovYJnAky62N585t7GDfu7FVPNR4Q4Xm9AvCjzSnpPEwsv4CZtv",
  "key35": "4QcT8spmVzQrAA5BMhBni5erGc4npkztHyWrwyXfFdv3GsppJARsHyZg1BydWYXJF3vLwp5b19fmD2TnkwAtbrWx"
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
