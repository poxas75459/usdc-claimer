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
    "3CEhb8JCRUZ7Qn2iE5uyna7mhtPjUMQDjJrPowgcRnso5GjkUCqa2UMNbQ6Te1sTdWVhktwQq4tkwTEqZZFBTgTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTwqntxBiChM5ceBAjBtsYQ2fYdbBZwGdzoDCePpRDeoHnuHDyTRs6q6shCSZJsaFWnWGNQUxyPskXyVV7QwHYY",
  "key1": "3GBas1E94ovbWo95D2C9MiaUygShCML1gmt2hwk1F9LWmAnrGFDewisrjhQ8TXH8dsvm71HQzgZvyLtMVee77Tm3",
  "key2": "2pWyqgcm74GsxZoTUnpBc9EXryU3VV2TSYLk96HmuuJxPmjRdfiW6C5KbfwkWgJMaFGPEL9qv4jZVdx9NbAjRiNR",
  "key3": "Z1kksmFimqcf5oLHyKh2EMBzS8YL3GxEY1oCWmF8TKzwsdsdgvKSJkhpufGrtTmyg79DGATSAcYu3zTZFJ32ZwM",
  "key4": "pQDQQufGK2LsiZyiwXP6FaHqFCxWEYCaxMaeYN6y8DSzsRVm6XUbpVPAhPM2iTvebigxNAK2kJpGi65GJkCLcFQ",
  "key5": "4JTBetTZfQatt9JEB4MuMGuXvbjq6P1wpoH7U2b9doqtRCaNqUcp4DfAJVnmTjaadG11VKx1KUcYCzaUA5C4zGQ2",
  "key6": "52E8eSjW3cDWBVujg71oZdhp4zGBkz7HnxXov761TW5che69rSAVeVminKRguNsss8AekcggGMQdZkB5wyfXDVj4",
  "key7": "4JWaHS9HNjDC8H5Ju7ttxLjzK9ibPfc7FGbDmVAZtjeBL9VVPVbcnHze7dfwR3ZmTRcjJyiy5qS93CqgEU9TTc5A",
  "key8": "3trNFHUggW5NSLRFxynx4eYa3GsyUSNQz2zpLCicmUUMoJ1Qjv5Xoa6JUt3BfUPgPBypfJDd5yLVfj1sR5mVVKTb",
  "key9": "5hhokbPeJMiPXo3M2T9KZfx7rkafxh1n1HrCVGkkZfuWuegTRfe8BHjappgw1dtA1U9HVMrW2NLwB4Hn7uAmWHxS",
  "key10": "89QmFTQoosn2MCMZqixVVBdYQPxtQCKhTKN9zgEdRjiKQ7Bd3YfrUf7da1YXbsR1E64eVHAYVUvkMYKqzXuo6px",
  "key11": "hHg2Yg8hm7sZBkCRjNB7u6wvXWkDt2mt63NKhiyrip8aEgQFmZmrzd2NVb8qRL1cK7uFuqUZeDZThCFWCyN7RwS",
  "key12": "JhYx7qCVAFbYjChwKvD4sXpQtKrXG6LaU9E4ZsrZm32ArFdWBwnAxohxRrUcDBbecN9DC1DU9ydhHg3Lk6iwGUr",
  "key13": "3oZFbH9cTf77nFFbAcFn4kha24LbHTfNStXtPNt7AVFQDEyTisYEnFMUaB8Pa2unWazN8UL45iHg7r7ouDf63i4L",
  "key14": "47JftRKLjYNxvyimnSYyJZLrHLbQMgPUYxkZJJ7ZKW2WckBZVSgJSCTwaaMtgYbSJWgDsFFR3ebTWdgGLrmS2Axh",
  "key15": "2wPCxt4dutN97FrSxXFxBxz4zqsunJQ9WgpcK5TF9gGB5Q2dGDfTB7Pjv6GevzHRH7ngeEWsoPNZ7YY7FdSD49uf",
  "key16": "3MBP4W84LzyPE2nrEtKAupYiSdqEJms4M8cynneWLfPwh7CLS4nh97jQqCsB4RgJXafsceig81pDC9vigbUQsAEG",
  "key17": "5JaWD71fXYC6tuNXjgcq8jKirSYtAU4PdC7Epttx2KBoGxfzU2969ZkPMN5FVExGKWieDDzeH4zm93B4KGQggmmR",
  "key18": "3WPEwawa3NB6tYmoZGitQ87ibkFcR26AaQS4bymudB3LDXsP2rZTYb5qG6NbMfmvqxbzPrAYnZgNsLF1QARoZ4Hj",
  "key19": "2N9nVm584T9sv9NbUVDuUk36yiEFceDkH6KRATm3FiPe7jVVE48U2ohvkB1yc1dybnUZfH4TP6A48HWybA7Ffwti",
  "key20": "3woMbJPNt8xrSdntPEdDvDYGxVwhZSFk4iRqQQboZhP9z371oDrjxomYec6iUkjFaxfQf61swsuBkzFCWZTFyLE2",
  "key21": "3d19w1zv6Br1kpwgdYUp5dkBft6yhPCHoBiAcWPL9M5GzgQZmPd6H7nxzpitd4QS5Vt4G9CRrWo8Wq78HyWu1cuJ",
  "key22": "276egMPMUquM2yPiLWzMmhPYyUPo6nFVtWb3GMrw6rbNSt2BN9fTYkXggc7KZPxLMnM8wrdamnLCrHyq7fakUAZY",
  "key23": "4ZTtz5BUNRuoR8wJC5bffy7bui91wxNHi2iitUXiWF3MD2DdR1RorWxFckqSxt1r8ZN4sDTy5w12mcq9kE3zcP1K",
  "key24": "4ZToXeh66o5zY33Za3BGDzQtbbmUtUKSdNN6LJn6TEJjwCj9cpqAVuiW2PJ4FtJbWCqc4KxKKhUNgge7Tsy1R6BT",
  "key25": "3aH831UW4JuqpR1GSczSXCjLTp5vKfbDYURGyamxxxPLDmFKryUMfDuPseoUss3d8fePMQDw7o3DBEMcVWZX8cor",
  "key26": "2HJ6zojnJHuqzQdJBJe5FyunPa5QpDWb9W3XBEy9prwi1KgPJ5HPJe5mZW2gscCQvLHpSJvws13kStikJ8M4W366",
  "key27": "3mQJN1QFXxLUi2yhyuMWncutPJyKzJPBSfvmTjuVZfnUMnBcP33kWVgRwiUaqRZc3Q9JDDiPTpAxj8NdeyR9xfph",
  "key28": "4uMLqBiyhbdt8TtKTmQaycjZSedyigouugyxiLRuTMw3tcSf1uAGWBgUGrBENpyrZnAv1s6Ub5X3vJZUD3Tb7xqP",
  "key29": "4BKdTZWycdk5kBUH6ufKbSntBEsuJqMt8Q19zfRzyBExvJHY8RdBiLz9FepSppqL3Xn37Ej1vgDgkjNhsec55DDZ",
  "key30": "2r7e2quxNMJkPJXWqZDiP9GcdnCiqiWMKg459Ydvk8uabWni5NWqMbPEKW8q8LeSm9g2F2yb6SjbTB9qWWtkznch",
  "key31": "XcRLLpPA1DB3DoR8epX9f2TS89afsxvJbzXa3giQAQoULD8aLigXpVNJvFBu83Pob4rEbaiUKnrJENwu7PuZJxU",
  "key32": "3ffaq1BUgTfotELCCg2CNoQzJMoeBxtN5LWvgsx3kh2JQe87Q3FyMk3dmXZe2yyf6oAuP38PFhMaLsuoWuJi24HU",
  "key33": "2wnbTtZDS1g72ntKrjudFVGWofz65XPFtkjBLAWavPfu5pDaz568Byc1LodhaLhnGu5VzDfgF84Gw3j47PhH9KoE",
  "key34": "611x1VQaJ5csaK3TUDwkFvQhuhXAW8YuDmRuBGQ75yhxHp2d4MHL5L1yoQLsYr8zW6JqRfL4jGvMLnmspj5TnxHA",
  "key35": "5UjxZVTchbn5KnVN2SuxyT5HeEafjy5PJ6p2XXcHhjHcGnUtgR4enXzAd7WggFkJ4wH7Zb9m8qSroKr5spJyPpMa",
  "key36": "3LCLKsr7PP8FcHXpprSyVedmkV8DyH5FTHJSczvQfEGHuxcdngFD9QXuWb7tj4xnv6JPzwDhY1A2G5AfHhJYBL5G",
  "key37": "CPmbF7vzgjLqoziew9UDZk3gqyQ9o8zbcfaT9UySCjKrdfosKPbzhJGHzAUfcry8MbbKcjaC3Sm9i7eGHkpM8Fj",
  "key38": "51UtnM8DBZsxwkC7naJSDpqtKe9x6kkowGWhf2HyrHryWmx2cePBgarnNwEy5P5NyGySDXJJ7jbbGyjvUJaGdB4V",
  "key39": "4reJRFSZLx5xeuuZ56uugjroGMdUJd1jpZg7cD65J6gLSVSKEUirVcD7E5o5Zwhy2AwQHuE3aGUJywM6xXUcN2xT",
  "key40": "2Tt7HhiGzUUTBHdFUZxdYZBdwxJEpbfGKYxf4cd6vnr6anYAeDxyNQUTLPCHpuwuNS3cas9j92i8og78tKLM4FP",
  "key41": "5UcvAjbmPmXr2RFG1pHJyYh8AjBXVUK9TV37sKqreYhNYG66rdUMZ1gWRwgUJVTpCnViFPMeetExJXBxXaZkvXoc",
  "key42": "dS3WxFdSe5uEd9UTGaR332M4gzMyPMtsUrohupNbgbj7TrheQfi9zfuwQv6cLptBCaRsjJTrfHixPkRpP4Qi79o",
  "key43": "3WLCgigX5xs9YZY4ZNtSXC4f2R4WiCYwqP5itK2R1b3WiAn5pc19jfj1N5Jh7ww9E51Fs6r4K5v42bKQ33u6rP1w",
  "key44": "4oh1i9Tr9qVe2t9LNH5RNBP5TtpLA1KB5R8uxN59rGFAqjsYd8Q6iAkmPTfSeq4kTD6LSo2Et1vsfQBHg3GmVrap",
  "key45": "s4PsvgzWsS7PP2gGwYjDDSoPGzG6YqZdpbHbpejP8frw6TrJ13vEXH4HCKhLbRGahN15BS12gutQZVvC8aghrmm",
  "key46": "FDbTCCPMhGmD8LRMhZuSBiwvGpyMzuzcWsxwjtW5byBUQx7bpLsTPaL9iRhHjop99qaTQE6KtxbbcC6bjMEWr5j",
  "key47": "2RS2sTUP1TB1PtKBrzPBiGM6tJwXVbDZRwPmiS7NkM4TT3x6aPVssScE6mypfb9DnqMtZyW1g6PwC8UHebfrc3Ch",
  "key48": "5XLuqEjSXuEdpfVdBnBi1bhjAuSX2tf8GqYsVrCxZPTwbHa1WqXom5P6VemvnSLCus9ue3UTe49dhBM6HceQU9Gv"
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
