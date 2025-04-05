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
    "CEuEWnE6beKNYNMGKS3SUbisJ9YCXQ4c3m5yhdwYzfEiWrE1zseHt9yyvuXboYFfydPqyKb796tAr6aYy5kYahf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJJ2iotvpgbgLvL1Xi6nTBoMbqdzzeYbykWFr7mHr4o4vuNa5eqqx96auG2GwuTJMiwdEbMxa8eKmzoL4RLuG9V",
  "key1": "4RvqwYuUiDcm6X7XykzJiUqfXzxQPPCtYqn8pSYBciGP113mtkYnnvkXsQD5ndNL5EZyyYBLvynNjSa84xkJnseC",
  "key2": "kz2j842x7xeXanqp7GAqKyzrTuL3X7UfhY7jLrtzuQBkNtspqxcYZR5fRvwhbBCT4FLtYRZNcTucvPfWkw3y8Cc",
  "key3": "4HDsothbAavqJN97KSdtbxcKeXw8ULuEyFtC8YqR7oAwsXD1KrvojfrsKxHKuqAmvvcyGYg8G3CcWUJvE1YfJ6ab",
  "key4": "5xYTcQtQCmFUfxQeaNK1yLSxTWHpGjaz9wVg4LmXazJKmwEmWt3tw8BAqCYx1j69Jib9DUp7J43HPB64fPeTkYCv",
  "key5": "2eHkFuG4FF34Am8Mhai1DY7xJX5PAnUNWDFpKWf1X4owPhihjyA754EM6Unvmirs3vbG8pFC1wk4Zh6SiKTtG5SN",
  "key6": "35PHcQt2PmhbE5fRy32XMb9Exd1MGLbzqUmr9vnLtwW9My1VrvX9y5AGYU3dW8sMD98xfT3zmcAqKN3dGUUGEeQ7",
  "key7": "4K11nYGv7LSt5U5VweNiSXZy9zfnfndE2Yo5zPHrXUfDRPYRKfQDCLEykRxxpHNuvT1E4FzNYZtG8rf8AKh8wABa",
  "key8": "cJwoQP6hWRBi37d6TfqehXssbDfSC6Nt5BMqYJySUFxwEgKXmrZS3Z9CLPBdzU8iadCuYjrk28FL6ZZKEob4hQ7",
  "key9": "Qcxt5i4Y1CnxMSKP754Pt8agewgDWwck3twa1hsHEtxGTtiHUvuAwbb9TTsiK82v9RVijrTj6ksiV6pJ5U8JspQ",
  "key10": "3YCXAWf83q88HUM8NN8bAyiTVR2YZCo54fRM28DdqjSusp6og3hHhVKWT9k2ZdnTxXRuxitPuwgDRrXBfe8G6ior",
  "key11": "5jnFqHiugCoMaTn37rNix8vFeoJBoXb7JyQWY6hXxXRs7tp6qjKumfFXLMW6MdBhQzPbQnaHbjt8azkqP62Gw5ck",
  "key12": "kFtk5bviGLCkJxSsPvAjLTcvFrgRfuX37yS6cHgmwrx9n55HaWqzedEtfyEN6bH1UNko4PShN4pX8cu73XKKw7u",
  "key13": "2SiQnmJsBhrAN2djDMbHvt7u3gpt8Q2nrZtxEbtFseDPqgWYSLGktbAn4NF95bjG2Nq1wkLF2fiM8xfLDLB5U71K",
  "key14": "v5exMTyHE6UX3i28Ck1KX6wKKiCGTkxqzJm82VihzNdspE4t5vDfXLw3eyFcFEvvN7gwu17s4DWkQ2ddV9WMXqZ",
  "key15": "2qaBKJQPZQe6cPAmQvgkELwYCp479X8ojT2e7aZk2vQsFfNE7MHE6fqucoTFTcNBVhRRARGuujWsUtoFye6Ku6zL",
  "key16": "4h9UsWcQZRE3QCDVLB4DkhXN6VyUBJZM25UhejMGExzC2X6B2rr2PSsxnjtvVEgfTCPJkSonmCDzqEeCvaa91hUn",
  "key17": "2qFjQdrkAJNvC12Knu8yf3oepTzmrbWhWPWvsueoMgDn7kA4DjoVvi7mMXogSisgKvShrkd2PnEyDNRW4q5Bt6d2",
  "key18": "5pRGtKcfAJAgENLHaCWZrTyoPVh19LfqLNnkk3qmQLVFQpsWoVXUhjXafEEazExy2onX8KqEz7dUMux4c6DdiWf7",
  "key19": "2dNugdeCSTpQYxJFLKtVewiia24TWd7nE5i3bZorwCk1w94ZpiVgFoq1NerLBcaH6Z4W2GhpQj7U9UXYWJuKEZ86",
  "key20": "JztfWqCLeNuaUEgnFFJeBg6nEtHvB7LXZzNnijcRALTRJWSCGEQRTSD1hhpabjRNvYXiFnVHffrBkEsW2ekYsWg",
  "key21": "3RPbJm6L84Z8WkTpmHb9xPBSa13NDkiS1g8sijEopy9kucm3aRy2RTZC7VhKGWuvdDfgJwQSbVBdqWqJe6rA5RS9",
  "key22": "2Skb3MmNeBSEQqKvJqqbbDFNxgtz3JiNveoS9uM5K38a7ZbxKosXkMaWPNQfSRkC13R1h9uQbVyijbgfDY2hwUEN",
  "key23": "4HyG59WuJd8nfzT7rZWCjrDzNq94Ms2QFyqG16NAHz7VyecCHYS9Vt4j1buJTdpUsCcF8oBHwN2tZMiYUUzNuizq",
  "key24": "3hs8JKFgAwDBJd6hLxmRBbDzNMf1uSuQRE9riH7ZKHxoGQiK4KV346JFKUbnUc1JMFPS8yoKAr2t1eKgzUXgc7g3",
  "key25": "5Jg6H2uDytqEx5JhVQdwveX969JuXeGtZPTeoKMepmXnF9oR2QJ3ZifdqKakWEMQb8vF8hju9go1YqA8U11uJ1q2",
  "key26": "5uAMCMa554ym5WqFCoJTmvAAnxtxTXnDA41fGdTaSxTfeABYs7JDuTJNyz7RJ8itCqNeiEAHwocKcpsx6AHmg4gn",
  "key27": "64dNYht9swxkUxwn1DxJEfmpDVeq59uqdBE7BzZq8Tjis7qqEaNmpHaGZuKPXaNiwrY7zJB8D6tapGHM7FC8kDkd",
  "key28": "X9meZxr5LAXbuXui8mjf6v25MVP2fqzTWGtiThi8kUquSmZ871aLVn8wLDgL2QEGGtQ2BNkdh8FpYeJvgCV2tTc",
  "key29": "5a6dRZAZi83vigR2RrQUtKvUfA8YCzrk97TeDyNFgqXuLj5i8TYEZ79SraKbeWiPPSeDsoAh7dpdPtXg4CPFBSmo",
  "key30": "5bGTQcVkCR7EQAp8ZrFnF172Bd3LiRFHtXDYwSMsAhxxZkB16Dhrp2RmxXBN8jPXeA5R17ZwbtvZvjuMe62SJBru",
  "key31": "D4BNzTYHyuQQMGSud69iaVVFPtfSL7kuzmzrsGNjbTZVEuiL9qtdBeEUgVgN3yufEjMvhDwmaFSSmj9EoQCD1b2",
  "key32": "59KPDDkP86gK31Fh41C9Cq7wcovTi7tqUEwx4wpF7eswcyximHhyERHBSveWPLMUqsbA5DQGTVFFgR1aGYDutQR2"
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
