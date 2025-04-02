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
    "jeV4xW5WkYfgjDg3uV4e3vrwWzu9NEYt7PrLYDDbT7p4aR4wE4Do5EWhf3duNP9pxDNEJhA1UYJp5biRmMw8dBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uC7FHnC71ekqphT1vQSzyc49qbRj93Sd9wCUHJntEGj9sEWiAN9zfPc5vSrKU4LPnwVqbdHKA9BhJvscoH5LxCW",
  "key1": "5LgynwirCvGMUeqTUnq95qfWHpoQ9CSXvePWLy8cm5Z7WS4f5QMgqVnw5FWSrNYWtTgt7RBbmBsPRq1V18yMJrLD",
  "key2": "2hHTTfxvmVRCFGaeyJoLZz82VbDFP6ksTytjab1C4PbYCktMNt5MaTBddyJkJcYa6woTW7EBckgZNBSDGWAVkVb",
  "key3": "3ZprHXJ7uPAMPRGywwJZVdYXSXATMQsnZwFYv718w427pEFzwLvYmXFXe1WPMhzB43VjKC82muSBBFWbVHqRzYA",
  "key4": "2SVnKZjhKD4ZptipgqHsPiFSkta1ukK5SAV8zaCtURcC2FFf3JkVKrD3ZUDLVx1U8XMuT8bzUTPrb2J8ywoEKBoS",
  "key5": "SALC7rgz9LkeS7J1qe7fohpXGhnuyKuVKUDYDabji5KfYJL73E8BPLFUiLniFSoGXpzBvCbhqssBdqfWgVc9iRF",
  "key6": "5UM2HnPBEojhncsjVu7ND8QUogVr5267fkLb2ArLDpgJSARMNFDtakpNqPPzZHRd8Hd74aANDnMTipk484YY6MPE",
  "key7": "3jNnDJH5ZpcU7nJhFK86q2odyoBtJY6v6yHReVchkqYxPiJc81jbCVGD4buiFHWJQUXysN4JbzGjpmGv547dhPVH",
  "key8": "2fa7NKK8yTN2YgNHnxH52fXLCNAXL6vGgqtzPzfgiEZZZfeke7Y2GdEDWbGGbvrWbigfcgiRKzuT1vb7ciQKbo95",
  "key9": "2XfRR7eTTzPN5F6yGsLXKM4HC8i5uF9CQJHSEfD4K9KmgUPFEn1Y5S2Mz5be6SpjxwdUyFhFZ3YSFEGuCJHTf8V4",
  "key10": "42ox3uKhnbmGWFdu6QsnVFvRdjDHMEwGJuA1EUKo9UkKkYVjiE7dwSEo75GmUj1kPRk6jPgnvoA5hG2Aa3c9AUKY",
  "key11": "2SdSJqiwwMZpXTabpBoCgSbJXJwkCUwrxvmBtig1DbUz1foLfeAsuF6rgRxqG3t4YAXyQTLyBCdUGVXEC3WArKcH",
  "key12": "2byiCztwrKuZSwEZk8PXcYLkjmtk1Fq3ZtdLxMFJEetgDJjw63FZnSKjAQMUCUgjKxuLxFZUwmXw3oLYgpghb5jX",
  "key13": "5HZu8cYaUn3CzNjQbx5RwHWnQJnGaV5WvhHbT6FawadETEJCy1nYw3yCNFVZKagaHToyN4m6apzTn649PHt95kAF",
  "key14": "Pvd2P6GZxQ1EbzuizB4W9rj4KgXcG4UverjRd31atj1gZ7bQKRG7DHGdLrNcrti1yPcjXCx4NhrKo7AoB4VuTDW",
  "key15": "43GY9vsWibm1iavCKLcir35migQtSfjJMoZenLwEXpHyrfcPZGUiLFqziyYVXR9cQMRahAcFnP68weFjP68z7cYq",
  "key16": "JrJtA3mL7DGmv2aN7njNsfrT4nJDkdNdLmAvYtyWGCCfue9iu4KjbUda7ZAvhQJ7hHyDd9jW7hhVU3jn3JivSki",
  "key17": "3HoBMAXAa7FVffELa1rye5MgmKTD4pXuAufM8odfo9ry5oUkhiDJUaBqgQ6387yNZGxEnA6UNjTo1h6JFsvhxR7e",
  "key18": "ACem96LUYKtxziYanmEi9EjpT4FeLB3enyGdpgFh4o18uz5Ztgc6LwET1mvAkYpdKDz8GfYUbHC26qCTfT9sNrk",
  "key19": "38kootKdo97nNwk3wXnkrk7WwJDWAXrah8tc4qMMtnBfeqCnnX4K6hVqkvAidePp43U2Bgr5gesPvuaQH2Nk11KN",
  "key20": "3pGEEKUGhsxLFRu6RbnJb3ZVRM4CzvWen2YrK5Ax1Q3kepS3jpWFv7YyPqksosudrNQFHEHtdJWmAsJGc3JU4wee",
  "key21": "7QHSXNWLUpw4JqtctZhCt3N36HdWh1s6GCDzkMYCCSSvbYiHWjqphkg7B5mnQT3pNnswktjoRVTZAjZDHTpq6XK",
  "key22": "2PLiMHYSWfkSbMUo1kXtr2TeE88CsUuqBP6aG8aqEaJZpGWJFhYvtah277ZVPdKMYpdCXPTiCdZg2Genb58brV8H",
  "key23": "3RXNk8qNT9L1XmVKJ1t6BeFDBQHgSbBBnTVK1uUAr79piRqBJzr67WtCjbt9TdojWVb7aqd13quuF88WcFDGbraL",
  "key24": "5vEEcKMGJXtx59cZcJMc3ShaYejHgb4Dy71H1T2e16EHYao99KKu78EvX53rE1Aq8yruNmXQjGgJ8oUVywEyp31u",
  "key25": "3YaQmxDFUAqEmq163e4y31ALqbXPsS1YaVd9NxtN2pH5piyfmU85m2qj7ZaeVjf3deV6DQuh6CzefgEVvP65v7Wz",
  "key26": "4WUwJManHLA8uFMsmA86CJdeaRNfRzPg1T4rsQRqY7ReE7r8xyAxBw5a8atqSoZ3czHktwL157PSMjiaMScqh5LL",
  "key27": "5RPFvKYeJ5SF3JxfWHN9rR1MKKymbfwS8YMe4k62bg7L25QjiTzJ2qysdAqdD59mmZ6QVPU8MPpFMLXDxdogJKcZ",
  "key28": "2nru2JAkdikjkKYuJb29ytVXbEY2yBAHzVY6VaEPFoJQNSkhwV1UonyJazHKBkG9KZJY9wCcTbERkquhfiRootDj",
  "key29": "5spFNioCzcZtgTnUGQTsMS41i6KpDso7QRYeizR3MvSUJ3pGbyFuJCFNijT8SCpb3wvGsYAbxbBr4DZsZTf3YJLg",
  "key30": "2TAW1kwefD3ZG3A6ssi8Yw5Ga6NXchYawY1vMAFW9cHU7KKxY7nhxq5359gZ37UiDKho2iHEzsrUp5SBNA6g4f48",
  "key31": "425LWcQFZNUunrp8itriiQP1pFEVjcr3QJv9WxrzKZva1EU11YHkFmoEGyruP9TQeBuKCDUEpwayaamASd41wZEB",
  "key32": "3cP7jeESv8Scvwg5KbGfJaHrft4AKRviHZCFCSRZGgZmsVreaiwv3rxZVQRFfVHHMMDeq79oLj2tvUWx44hUdJTU",
  "key33": "5cGGyTRLr9XpHms5wCCcuFAJL8T2aaur4U6uKvpDpPKWhHVACEE46Jak7EPrFRjQdbzcN993NhbXVyUhsq5KjXZi",
  "key34": "2m8Em2m1euXmrrN7TYg84CbQaErycsLLiC6S5MvoEJgDQYekz6Fwjh2Er2LAs7AejWD7a4HZNLNNRuSrm7LNq9hh",
  "key35": "3Lcwog3K6rk8n2QpFXTgNwxFVY7dUW5xMmeN7NjssdXqUnbHJAw5ERxrwECjXzLEcVqZPSk1tPAhyzAEVGgabWQ9",
  "key36": "3ShVdZZhL1uEENtESMddC43xHmsAgqwHFNKmF1KdWgmua7F5EMJE7LFmuqnjAbnxFt4VeTQt2okAZeT8o1Fmcqjm",
  "key37": "5BfYHbdZJcuuiHP3FCcmpepnYsRw3vkhufuE6GU94Jjorj4z1T9kVGYau73H67fKpQkReJf1KBYVkZpGV4t3tK9n",
  "key38": "2RLrpo6GSxwfKu6b4RpBh7XvwcXyV6H9MogxT9ozFf6zwcLfAA7oM5XTZCnsUiNa5YezLxQyYdrNqUUWgjECR7k8",
  "key39": "46rZkrNByhs6rqfG29RRayhv6x4E5rJwueKTpz7jo1WH82ayjKu8ryatdojCSMAursEqpu34FK5AvCLknVxXWbF",
  "key40": "2GZ4YG3YKYDEkjEFFGSm3tEN4nqz7SnBrBRakZGMEiNPkehP26TinMn8Av9bAAyrnKuAHyLFEFdhydxFRvyGVn3i",
  "key41": "5u3Ndo44vuhnYQPYFtmYZ467uuzbgygg7ohYQUdzRyUMwM9GAA98q8d9MRHti7NQWCCH5vjMeVizxBw5cNMF1nwF",
  "key42": "2rnsBUzmtXq5Mw6stJAjDc45DGijVYn4NfX4ixCPWPFx5xx25EKTUDWo5aBWYf77My4CNR8sL7X6UGRAa3NtdMHg",
  "key43": "Sk2v8HJbfYXLdoGBnQ76dtrj4cBvR2fdfvaVvP1G4GMYaoA7rzSPbhS4n35rzcCWEdaGcLLv7VAstuF76GhvYfB",
  "key44": "3aAkbPo3Vje7zaHDdeshQut9aBTA7eB3xzxRjLaGrzNf9ZP79fMvcoGzkS9eyHrU7MKBGqoVSEdmU9LeSJ8cjuTg",
  "key45": "2yf15pFwZZJLvpuSEQA51gRg8s82NNaJrfhXtouMwBifygGw4BpAsSxjGrWSzkzKb2ryZjxXPYnVXdS614FxDmow",
  "key46": "2amhMepRq1XNYfXuzZVSuLneKbwbAB8ijpXfN2RQM9ibEhxWvevCrNohBpbGuUNHHLGWDi4fN5ZzZR4jsXSaAL66"
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
