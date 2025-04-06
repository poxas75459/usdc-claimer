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
    "4C1vE26KZKeKi7VfnAroLKwAs4YV6CT28oeorBoX2CTu1sEHoewjxf7CpSWAXgPDQ2gLTDgDBDGD4SKEiVAqH5r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zxSqqZg5AoiFgK4C18hEWgKPmXFxaX5EfECaLrAayuKAGKMEJVYFcd3TGS8Q8tKmou1m1ustMxHdxoEzEHabQ4K",
  "key1": "5ADvZr3k1i2R1E3nar36ZNQdx8zP4MqutLDvBWdSntgGAEtUF1rV2Z4goXHK4HjUMJdG63ikycy1bKLD4dr5t4Jr",
  "key2": "4DzUSdQQW1Mg6eRuQZQBWcvFN52pZgSu8txwbjxjNBmbGCKpUCgXZq1mn7xdDuqKPwf13cPQbobT2DSNT6bVKPPo",
  "key3": "3LPaibLAa5p36Ew97UBP8bEsZzPmcNXopCzs5Hmgze91vFb8p146XmNc3YcK7kSab6dJ9hMdcaMMBS3wxBsi4CDo",
  "key4": "2y4ZX8M3KeQctmkptFNXiVuX5g5rX1N13oqx2MT7tMDXEWNJi1DpzMxW75JB93hH4dUZ8hHXTYKwZgKiZqudU6Zo",
  "key5": "YJ4BRk1j2ZHDn1ojGFs5oJFSSZrLCtEPBC7gcWWRF8XYiopDUtotKqpLRHhMTYkxoqTHktfpMrLvtd9nFRPyiVZ",
  "key6": "4vB4P58vmoKQbD7oELB3HpoSYtn8VyY1u6vqY6H674L5w9osj4yzPsAw3v23S4GR3JJnzD7RKXnafYT35ppVPTmW",
  "key7": "4i8LApXTYBAtUMhkY6xtcRWu6xzYr242YBYvNDziHg7UvrrWs2Acsw1kR8Ff9f8YWY6MTxjCSJyPN5SYSt1W4m1D",
  "key8": "Fie39N8cAutpF3FyxAwwoqoL9b9oXKu3mKsr21r56fHMm7gkNTqiL9rjKmi3ij9JW93qVgtjhULzBop4ToMEjnF",
  "key9": "2HdP8pbo54W6CsM9V871ps1rn77PqhY2H1uLZ9ZqX7CMaK3U6h1k5S8ozVNq9CqETZs1Tj4vy82Gi5eUHAUxSMkj",
  "key10": "FHArh41tfYrSuyD1smdaBDn8MgCFBYUdr3bSUNy9EB8j8NEozMcEjNiv8oikchuF6AddJdpjJdoH1qxhuPVPjmA",
  "key11": "32P7BG9HFtZxrikafAhTs2SWjYge3QfNVnBz1BxESYTB4HjGuo1n4ibv1vPTYGAMHiCJrS2onxdrvn4eJx2zJMfA",
  "key12": "RoxcGtYwZEdnVMSmpR8HjXyhyNdoa1gwHNd2B7oGWvTB6wHiTS2kq4yLfNwifi1befvFusWvh39wGgFd13fU7ev",
  "key13": "2Ei8ujZLSR5WEPrhP9vGe8EucLtq9tovF5YEBRviWgwjQuWhSMcUyzJn5hxs75tQyHcmi7sGmNQm1ThzuEfo95Xk",
  "key14": "2fJ4B65m9o3bEWRZmLvrmPnDLcTi61MLPjuoBU1Giknu322HNStZN8562TQ27kByGKNKanxQoDerNCDwc94qHUwh",
  "key15": "5LXbH2UQnjJKozGHAsnAdh5fTUH4RZVEifdQfWFPm4Mov4v6xvzyoNuULpu9jpJ9BQg14jSJ1oh7C9R7SZBKGyaS",
  "key16": "4A3YvddX32YLrpfNacfrg1tzeXuha2qnqAkPyNxc3gqVmvNfL5bc7SKVMKhri7d7dmVkUjWwKQAnAyrYKmVN4ejW",
  "key17": "2svmBHzgHYNe4oSsg4knnQyhbsUJMoEuN2WPJ29JkbBMgiN13hSyaaRgCJjahFo9Bzx2pjsgrT8D942fYU9tuPis",
  "key18": "4adNYg5xTw2Cfs96GQqr8nsEX8f9HGsoEfM5s7t6115ZBGs5SNUSjtdLdPnkeZVhVwVPAQiBVf5Ti8dokV2eEAWM",
  "key19": "4XaRFpDazfNbtkNXSx6a74v1Dqnn3dnRz6Jy7dqRV7ViwB6v7STDZXUSvF35kMkUdSkTsZfXr9bBZmuJzw4raFzh",
  "key20": "4vWnmAZJ8e3xzSWdLe4znw6uXkVcBzAyzGSfcLLh3BuVUPV2M7pk54GfbLNf1gREr3W8gJpZRsAudgdLEbpZXYFZ",
  "key21": "4qqt1RWSPmoaozV231KES66hd7mnLrwSfybgBqx9voEWrHPHkxYGg4NLKuGQx4VbeDA4GbLu4WH1VPKFYaeg4Ea1",
  "key22": "3HyifyjXjJ15b5GnQAgtox6eeJLSmBVVWmf9AADBEzkwoVwt61NLEwEtbLPirGR6Mc1E8sb7jGborJkvsAvU1vcB",
  "key23": "3Dvrncvd3f3ZU4tq2RqbQpdWD6SnypsnByF22nLLjUTF3cWwLGnBUpdP9WLLe2u54mrjG8T1t1VGjChSUqnszo3f",
  "key24": "5nzZUe9ytC6bLBGJoxSqXwwZiS187PiuJaYER6giK44CEEABehwu5Avnm9SE2w1fJstZvZVm7ufHdoG1NTwNtRjD",
  "key25": "4hgX9yKdcXuZ2fRdS42VoLLYH84EnJ2HNcJv1nRLFUKvAeZL9pwasnbw1a71Rw4r1b3hEXGy1GiCn2w5yLkmfwo5",
  "key26": "2MeApLctG5tEW8zfyPFMQNkKfbbKVqvGKkGCwRNAUZtCMZNm7tv88mrZkPgw8v9jmq4T61x2da64DsbkHeG7E9JM",
  "key27": "3Kyd2CCXhj9vbXJmo9g3oRB46QAAL8DS9XPNNar5tHWvdXRgb9eyXKHDWTcacmUQiztAJUzjc2QsYR7hXjbiQt1c",
  "key28": "4po5hShwCZowqyoTBpV3UsNkzZb33bPErkoLiSDsyPmP4E1PsmzKMDEGh66PpAbABC27zeQGjscQbzwjR9RM94C3",
  "key29": "nQHTbAXGnenwPaZFBgTzEWygPWpNQmdBbqim5ktJnNtmisJVC7CKhXaCrV3AJPBNVahV45yQ9SBej4PCwFDB3Ko",
  "key30": "3CWQrmT5SJxBbtorGE943fS4euLs5pcDKx2pPBdFNH18xrLcFjom6DMHZsCdP6GX62Xt6WYHNuaUsr9qWAgogrpy",
  "key31": "5XVZYaw5AniY5YZcsfWqVT1d99Rk5sZzf7LdXndfeaEMGui9QtNsJDWTQgbLDbqP4my52WhVMBsW8dbucHXBfSaC",
  "key32": "3njzRpweycitzGCRQEKqYy7wA2mo5fw215oeCqpaGpZbsrF3UCgVhubRNbXCcSsCXNrtaYhCeWhx7ZnTr771E3a6",
  "key33": "3T9vvYTJEgQd3XGLrx2DNvCQJarMUsMoG23YfhNRBoYJiu12EN1PFLbtdc8qbCBbYLE224KipCgSEB2sbvp44RnR",
  "key34": "4nnM2SSmWDo6DA2er6fQhNqoKAKbQtCyAgvtNbzXDHpAtKW34sc6ktP9QHWxy4cfz1kVfmGcVmf9cwRTBGnhsmrw",
  "key35": "3XgwNVnwVQpHuPP5T6csVV6X3CnXkDpEbetYcxvF1tWrxQLAKMUtMMw777934tEjERuvCZ1dxdaKbZbiPxS4yrkD",
  "key36": "3zKhyAw1gB1HawTe9zpPjZ4M5SaAYpnTFKCFkngnAdFexEm3HLQX4uihH83KCfuc7mzy3SHsjoHy8rQCuZ4ZFByj",
  "key37": "bjUZyJbjv2Z7vyHipAnJPEZXfYgYM3Kf4xk3WapPgvn3BBJWQjNGsGxywaceSuRsJUYgzX379EjoKD3qQ1nokD3"
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
