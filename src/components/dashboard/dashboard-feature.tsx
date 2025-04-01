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
    "24bzLecwgxVDYuRoqShwe4CLmymomWWqRfofur3VDhV5WYiTxWE4Pe6jDcYJ8RfWFaCgcqEHtFhQntRm6sNjdkRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2JY2CzdEz3xVHRba9NV5qgYXiKSoBnFFzmpbV3bDjGg8UM9uLe3isgNe6VF8mTnRNwTVPpa6YEAH9y3uGd1HzA",
  "key1": "77VhvogZWRozKz54jfaL8h1ZUhUSPXtGrwUTCmYrZsHBsk6CngN94N4ikwbVVxnQufwAHjBSh81JHX2PrKuE9NP",
  "key2": "5jQpyFHac5WWyCVfiNRwuQfa2brbNDNjJ3bsrMYDtX4ddN3pszees6GSWdUTqhJRfYyLHjeh23JzP9ghvwbJ2iNa",
  "key3": "3yvEv6zcU3WUWQHgCs4nXWQiDaCvsSAjbVVgEqQUx62DCyvWmmr3tDMkvigS26h1JaUN3o2VE49KN3KrRQ4PrxCp",
  "key4": "yGDtQxehzKJbqkKHfgtQac1z5j9ctkyoowoRX47HmWEbtpCxDtNX5uNJgyJbGKXGTH33G91buPBwfboqvgHSkNc",
  "key5": "jk2V5mB7ZndNUg3WPKQDQAFUNpwaAnkuc4A6xGLzQrq1yKPDHES2gq4TMRbhPzs86BVbPuyWjFEwcd3d9cZYPwn",
  "key6": "2aiv7J9NSJmJA2WvjaNhphpMSjkV3BK5fy2y9KATroaaEXVSW6NiCYBk72ktpLHgB3Pr6VzD45RJse6xwPFx9yBa",
  "key7": "44q8H8eYZPHcjFtESt9Mf53yvc7k2BBuEyBqn5N615yn9XGHNkYERsjeCMqP2ikvSJQv39dnCbvxUFEMeAxvYgA",
  "key8": "535BtbH6rkjVB9KYAhirkkNZZVrPXUsqc6THoZ4MMnXX3Lzgii5bsYodvHMNvcT6m6nP5JPNVHNXPHvQaGqu2BTN",
  "key9": "47vRidKPtjuhqMf66DpZRPirLqDcKEMQf2DCa8EZncv8ZnF7NxJ11x351AYXeGkTZBcy1jsPemWV6qp6wUcMFtCF",
  "key10": "44dxQPk8UrygRyJ16hDNXFTVzrV5mrBkZYhiZtP9MAYp7rnxK21NUnKgZ2CruzetTyVAFg4GWEnLBgmp8DjNZhFC",
  "key11": "4WT3mgsXG2uxG9hp7LisWCdp1hqL55zKJF3v9Ztk7xAZ8AwF3TAmykcSpQ33Yf9hivKWfmDDVcKW3b8rkNbRrGHd",
  "key12": "WV55rP88vaZeQYqC5pusi4tFvdWbSv2LiGMY4v8Tw2cBo2pngmMDcBEpKhHSXQ6PKcSdBo65MycfLphDah1eUg3",
  "key13": "3rHw11K5cNnhTQFmosWXK91nZZemNjRsGiYukRvno2oWczvoB5X63mZnNXotaZnS4CexFVxxuz3x98vt1SgttRKP",
  "key14": "34pPQD6vDpfcr7uUYT98XjK5eJo3nvvpAFWu8CtSntNBxuBWqgg57H8cX7oB2vyeeH6LpB1FZPyZRUJLLtTFPGif",
  "key15": "3iL4gp61ZVAhxiqzmzPzUS2DFqyiri4ZaU2qa2sNGhewPTobreH33fJTYQm5oCnPnT3R1rmwjjfDS5pKoJ5Ye6H2",
  "key16": "5DXw2iowHLM8yuWaR477RhtFbZyktoZ24BbdWvxWs9pUCg4h1EEkn2uysN9JFjXUyTYGbHeqQ3PNj2kyhSn17pi7",
  "key17": "5YXfHtZwrsLbFELxQwZMTYpXUg1iiWvjTCJe6VwSKxMmriAhe3b3EHZzBEurX5kpJxafN9JLmpvTGq3RUZ3LrbV3",
  "key18": "2NzFE7XUGkBaSdgEGQzzp71C39VoXuz8UzKvesbm9dXPaKXy5bb3WG1aqdKnLHZueAUj44j45ixZ1VB2KpxokvZi",
  "key19": "3JFzxQopqdUsgfFzPzECWVCWamBHFeLPA1y9quEmo7XsYW6jzVtfRFpQDrVNowsF6nac9Q8GPFLTKo8wfUDHY5fm",
  "key20": "4dNkZQeDXrpprn7MtvjhbcH1taSXDnniXW4xY5McEETyDM99x6CxnAWD1e5tmBSRS3MENXzEFnwrcrDfTqaPdeyb",
  "key21": "57RtEiCewgjut4rcDDKLQgxfNi5Rfg4Z3zMBPYcpEtHPnEts9gUULceJ65NjAFzTwvkiYukoEXbNJbVYFEf7xA8R",
  "key22": "39PbC3TBYgJogrSK6SePmpy3TveVumpsCxhj44iZv3V9wYcZTGC1rTT5d9ZTcfoPiUeY2ncag634M24fUZt545zC",
  "key23": "632vLripXfUQBb1XS35uzA9L17FmE3N2TsPbWoHkoMH1jd5is8qb8xhpghwXagDXcEck98Tm2mgUycg6A9rvdSU6",
  "key24": "2AdXaSdJzQzViHVEd91syCACoRsGFnsBtGK2gQvY998UYJw9GjEbVM57QgdJFhZikMGBePxrZ2xGTD1nJLDZYnFD",
  "key25": "4dLkTKqEf73ZkaZPbx3hLT7VSFZYx4PX5Pz1kjM14fNpb9mqAbQmCMg6STTvPkLD3wdHchmFegyHYFf3CuELjb1L",
  "key26": "5DqkvnPXpuSaYcnDpoNSzuAtcEd1w9D59EDEWA7hNwAPUbBBMscdF3WG1mx9u2PXaVxhqcSNW596AFk7kgw8TtD8",
  "key27": "5Ziqg2wALc54nnxRYS1Cj5tviwUgvekhfVpyyMGh4wgEGqQcv48KYgH23iBPT3HUWys762vkmpCAofCeW6BaxW8W",
  "key28": "2CtjkRwWuAfPBwquj4PeiPP8GQyvLz2U9NHoDFp5Ji3MxxrYcD119ef8CkyHF67aeVTgNe7roLmKXNtA7SeDj3v8",
  "key29": "2k3uUGxyDBG7jW9dJB93zGsapZARzqSsjMM1Jjst4tYvKBoRzs4R6S9QNpRRmqvc73BqZUFmd4Hshk5BHveGzNCt",
  "key30": "vCsgjmsWnKq2RajJGDmGaYvDPKh85Lr8WmU9wy7jP2E86fKqNxWEXa5A3r8wLAxfS8vwpCDVZuJicsbTZFh6udV",
  "key31": "4kE2pgHM4aJREL4gGQBpNJdqJCKfHS2eLscE9rJ58ebUWqwC7yCjdKrWHmjUYeTfgydMbNhxsyBhWcDKg82bHrQP",
  "key32": "3d159Du1QL1NyGrpmVwsRHUCHh54qC42X6rLeee7haybwUPdJZfQQUvtpxio6Gebh2ETAxKvxgwPCCpHeo46E83r",
  "key33": "2PDJTCv8q3q5Y8AjHMHW8fifomJv2Mjgb22k8wZu9Ge7Ff64TdP3iTVrrqbixwQaMTbW5C7uktfHMQ6eQdXhna4k",
  "key34": "5dzGdRP7LoQXjxgKdibTaTzGeUXGrzBKHtesLsj1JGvzShbKXMxAFCZMJPBk9Tm3GJD8h5ZaniG9dzRgbKJ4r5g8",
  "key35": "3QsKLJdvoc9HD4Pm9d8WdXwcEzaGX4kUpNxJMndTsvEK81aNuGcikPANvioggs92mDuu5Yg9cpCFveSYGw4H9z9T"
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
