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
    "3pzUHSyzsNbx7W5TmNaSZhCQEsTpMMxcEY9qbMCqLLXLVJsAxh9eqVgoVtfH4kKGnfcSKa8BgLrJw8AsNo8jUwy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wmFFgmKEEQ1U3VM2SK46Vd3f9rJbBmTmZ7zxCC6P4pAZPPxZD3YRzQt5dfqsvNDP1e9GzGzTsSF4aJbvfizea1C",
  "key1": "cve2u2qrYgWYynvGcBp65Njn2y9kYDS9QDCq5oMZYkvJrU4JfmzmmGqtQGMCDVe3HPNPj5zfvJ874wzQRGBDEQb",
  "key2": "54U8R5TbDR5enFBqJ56uJReFnPjqFE1dDcpNaZhbUJCUSP4Eu86jqCtuAdE7Cu4ZZnomGaJKuUhQQ3JEhoPaygwr",
  "key3": "4xzxwJgtLZY41aTyiMMZQAXsQf7zDAQTZ9PRNK9hnHTgdsw98Sbgwiscik4yZiwbwQb29AmwpkUNfEaniekW4viV",
  "key4": "3FB2P8oD3hRNCYjuV63cNmbStkJC1hQQ7g2SK8vtUqsyKkzVY3LAhF1W51Vyg2MQLLHbr51NbUYdWfesy7h4jMPq",
  "key5": "Hpgi7y2SQHm6kAAfUUmzXGPVdEyPDp84UkjWvx7ngdZJ7xV79edsoKDhoEz49dT44SwYP7H7Cb9u18iCLJ1VGyJ",
  "key6": "5McfkK9MmqpQrm9wtYfLMBsVTq1UKLV6kiwahYFBr7pbMaxFHtVYeiS2Q6Hw39F1orEuhma3SWtVMVDso36r5Jyn",
  "key7": "2nRvzbRDNDC4SDAH93jeoavgRuBNK1ycDLuy8bQnQPRjHUTQEcZg1AtQqsZWd1erk8ZRPczkHaPYsCPt1vk4PQ2G",
  "key8": "5FXUjpNTqQQiwxf5DUTWmWvFmvKMfQMYAde7jv4uqhTGmye8vSRLujpdjUqX2DihXXwg96kC4dsMphvQv6FciHaN",
  "key9": "4NexdGHiNN6ju1hGMDhev6rQDt4PtSfJmctNXz4pj8D1vBjsbXJmVP22av99Dyui5HgkbdKqBj8UFdg2NVL9NpFE",
  "key10": "4XvyFCBpdmoa9cytiewFgfFMtK2w7VRYDvKhs6jsGvCMRWvSt3bKsULr71psTLaWF4SxYjcVmit5zy16aYc3P7a8",
  "key11": "3E6y6fbbQvduUzQB4kujLZuEHmdxtbWVFcRnwAK27ADWyiPBBBroQDTeGzpxXLRJmkWuEH2MSHYbfYdobzGm23rc",
  "key12": "FDJAcUEdoSfKLzxuj2XXPgSmCps5ED5JCkGy1bb7ortH5BPz1b9JP1dYbM2T7X6huBCdeD9F7nQe5v9QuYbqBHj",
  "key13": "5N9erPNnbAQeVxsWYeeXS2Fws7yRi3cnfFm4JEr1VzycPfsug87rSXx3VKX9J9YCQs5QBrMGJK497e16YuJM8MpF",
  "key14": "5dccUgDkpTosSnCKQhohzXxz1eY54FYU24wmwSFh6rGRhWUqD9jVeSnWPGMzxugCXpfwKqS4pAr7vhKhtPW9AAjL",
  "key15": "2oHnRq25r7hyYcpfXPuByVAPMUoDdzhwZVRFJJksZFjoD7z2yUS5NCYFnKC8giJ7U3JyWqixPwgAxnVwCLDyAMtp",
  "key16": "5Sy36jrxkaHuv5TCB1TMjarroXzgTihwuXPyMXpJBWjvYtbtXW8MTqRRkzju4JFKvfaVVrK4kZBKmUZ7GyJyaBgL",
  "key17": "22jAHZU9ZJ7VJ9eLjspWMU3zXaprPKRoaaKwQbLHpMy5XvzxxY5kSmcyyf5pQ3JvQWfwguw1jD2CDafXD1Ehonuh",
  "key18": "CMzGTgUCXhDgcicvyEmoUnDFJ6AF6QBSEQnWD4d2vEc5WiGjY6D1jFgMcnaZseXy6YZQj1twsGJLknDcukiNVMi",
  "key19": "3xvxB7tmTpuhMKnyV4yQj2et541S793CZPPesoxXxDVopkjhL1QTDiZVp3wJEjVcFm9oLa231JwWmAN6kzKRega2",
  "key20": "jd5fNRQ3jF13j8vAd8C4LwMn2yPLvo8tAnXU3KMdJstBmWa2LMdMHEMtpbjNi77X47K8b7v9NSQDJKs1nAk1Es5",
  "key21": "2CbpWnPgVmxgwab6rbHUvTSCaWReuL62idEXcxoZsBPZqbkSdDZ5eMhMARcSDmmrWSBPD5yCqsUfMRcvGZArMzQN",
  "key22": "4Wc1MTM7E6dDEVSbx6jiJV5jVX2j1aDDp2WZz3uTHpjbTN23n8cR3pYc7C5PFUavAWQhiaNeGzUZyV8s5BLFBb2f",
  "key23": "211c3vieHuLUfn8nfzjGZqPwqYWm2hZubz9SiiJEfXMAKCWtt1Da3AdTKZqxJ5mUYy8rKmGjhtQBciFMrv8kXi2E",
  "key24": "2hBY439RYvwNjAb9L1dJfMXZ2StYPvJq7MUZ3PWNSwfadDyTejuhbrMuRAijYWEu6tKzhPRnziFb3SiGSuQhyimU",
  "key25": "uHt2DtyzBVqVjH7smPPUS78tF7FUWkGSC3oSqnwBt5tUCzHh86ZpBsqMNbWeXw8uQwUF6F9RXbBN994Mgi4io4n",
  "key26": "5gdRxsBw3wesrF1N24xk6BQw3TZHiTt7GzZHz7W1MauAf2AuNBgorMnF34SeL7maYeebSAaNBxX3MZCb5b79JE6h",
  "key27": "5VbBqtPusnhqC4ukr9dmRPUnEa9LdUhs824ZnVop4nP4XB6MDQMqKg11RxRtQCZtWa2bUp1dN4ajLvrPxVCgSzbn",
  "key28": "57xmgEtDz2QRp8opaFQ3Jrk5zPTq16xm4bjbJTkHps1PLrkC86CqmHw65oGdVPYMsSoiCYe1XDzQaS46sbB7fxfs",
  "key29": "2oHPozBDhjxMWGUUHQTsd1BMegeaNMJjdHQQdWFe9HHxCmmMrGm4PhfanTzX7T4RigCfzDqyMjj8BV1qTzN8khjj",
  "key30": "24hGkCH7fqSsEVPsCoCbbiGxGdvJvt7M8vWwztF4xKBJf3zwZN4AcMn9DrhoToinbfPffENve23hTr3CJSfa1LxL",
  "key31": "5y3qyTEY4trjGEEmhppBubZ5yVSGiWCGWKwNByXMkFgJ7iHBxCxsiqmnAvx8YU2fLUKefKu29SrQEKxiSrj3NFhM",
  "key32": "3Kh4WNkvnL8YL3v3FEtsqet4zDQ6wkY6eeQFfYq4WVaTFy6y1hB3iZ1ATFh4F651HXWFCgfogza5R6UNcfzMU7qM",
  "key33": "5BP7FaqDU1StNDMdSgPXvurJeXniEf2xKzrEysqjPH4UsmJnEGrGvZCaCU9XgThRrSiYXd6tguocuKJ9jWZqUJYX",
  "key34": "25HBiyz7Qgx5Fdq16Yy2Xs1gG61DEvNVpyD3dfZVq5DKLahHrr9cssHTy8kSaHdX9bWWaxNg1LnPc3svQncMXfgr",
  "key35": "2bYDvMcmsyMGGgqKcee9Eh6xUHqchMYAftCY4gVJqHAMyfbB8DnEHW8XXRvPoY4rhaBymcS9UAxbru5zCQuM8nDD",
  "key36": "5mmT3pL91Ro7q8TgifaC1gyhnyb6KHXos2rQUZxeWzJYvp17L25XzU2bs13pDaDKzRCvUTVu36LwNw2LChvL2RQQ",
  "key37": "cQtgQgDEMAFj3v9KqqKgNEhoY9JTqLZ1R1zh6MRqWuAovPq7euGP8DeHny2vjk8MEyYd8b8Efp14VofDVWA8Esr",
  "key38": "9kQiXbqFWSYgGbNQFX9rmPMNS3daBtMx2jzPT1xmc6BsBmP1MHUwJQQisXnx3xNTSFFXjiEdtZi2oAzrSLExmHK",
  "key39": "3XvqjY9qfzgD96Uyc7eM3e77GHeZA8DCRtXuCmyWCYuKvpqX4e5bcsgfSq8vAkiaiU4Q98nieg6BPvEZcFQ1S4A2",
  "key40": "4ZPWAq7sNhFaqudaPc8Dxc7qZnNiw2HeU4LfAy6d9psP34jVZMzm7Y88Gcnz5wvU9HYFwBoiMGY1GG44BnS5rDec"
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
