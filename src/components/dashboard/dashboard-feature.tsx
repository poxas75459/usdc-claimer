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
    "4mAdJgZvX6kYLGRduq7LtbF9e6h4MbKp9W1c7zpRkuBd4nCPXZdogoWnxdtitkSSbJT1REZdvEbZw2PPu9Aw4T1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jMYVArxoiED9X4nyepeYHCDc9zXP59SjGJs9JYEJmBTf6x6iKZ5U3Djs1i1nrfW91Mq6SqYDZADCGWA63GsDcX8",
  "key1": "3darazaTkQnpjzwjyn1sp1qjrXPtDHGjeQ6DmQbAguLJndJ4QpCX3L7DFVGxWEVHJeLjSUMPUVhcgfXBzh6fFhQE",
  "key2": "Bpdg3QMsT1kzGcKCpTzVCX1tP36T5kkuTuiRTVFjoqoNwGV6JNtwtL1EJZUdwwiCWqLaQpQGrA5mkDsG4KbspyH",
  "key3": "4M7ayZcCk6efH6DH26HrddjMgFd9f8BzHxJjinxrmiA6WFPkYu3kLUBtTWHKRn4DhuxdiHNBFTkzmJ69BH7kUWDy",
  "key4": "5SVWtxLuRfJ9XpuamatyaCL5gZEzA6i5kMXTgoNWezFFQpBe7XogYUWs3HN92aTge3tZBmgGk6fg3zgNg81Z3zYF",
  "key5": "3fbk7mVfrKoh5YTMggMo6MgTrcyzXKRdsK753nzPhgMDmmJLUf9H2VpbKQoeyV1fMAXg4wUEGYZMXhoy7VRiJoQ2",
  "key6": "5XpNtqKUwW81NwrFRN7axm7TZYExSiY16WBT7f8QPefWc59XaSgitJvrnkhJQz9S8XDga8sP1kLaR2G4sDSuvsKs",
  "key7": "vHtDEYTyNsVW2s6PMxNGzEXLaEArrazPfj2PsbWvbixUtknvPgyJAncS47AAw7PocsNGSdVcvBp5Yb2EJHvHArK",
  "key8": "4f7s5PtMXoXimK2FrADPov5XsgwZi3jA59nkuyB5x4GDg6EqAB5iqMbqoGHSzktJrnscDx1PBVkwBPpoB7mywYpL",
  "key9": "45G445PRSRqcpJr2Khe3ofcdaPgpHYzBmgCq8ZxQ5uyY9RVXfqR84zKimrpULGH4emh4hoGFEVgn78eGFMFzGCJn",
  "key10": "5WUa5A5pky5FzsaPXeUe3sH2rriTX1ND7NwdPPWkukcVg3tbW2XE9dzk3SBdmEPYuGJLmtuM6nGJV768tKvLuUZ1",
  "key11": "5eZU9DehmbFXMuSmYtQJAPNashxLD8oAXSpAE4QTSyqSeAGw5eQLrzqBCeiyNmHnyowi2YVNehRD4mYsUZ1wMzvD",
  "key12": "235wgPA4ws6VBEKz4GmJmqxVWkV1pr1UBC3NRTFrUSfKtHeHCkgfaPDtcq2gWxYQsUB4TCKH3TomQ6rEEjNXepfi",
  "key13": "3bBWH1zQTLtKrY3ZzWyWAMHD3gHvtRfqd3e2oGc3ijzWp4u7gZjMRGeMfr6bvkyXgkfpcdWzkYADKLWy5oLKHxVv",
  "key14": "RiaCn9YfGg4Vxii5wafEw9jZeL4QVtg1KGHnj8sGkboTwiHduXjyVFxMYab3JNR1CJiXSpNFTowittm6LWvapNo",
  "key15": "2f9zXwAvHZBG4NkA87r8PhtVTsxf9Va8hQAw92SYNVv9jtF1QHCKtY6PCBbf9vrKzYEHaqt2YWhByt5ub2zwUEPH",
  "key16": "5WnJZZmnDgQ79pYCbwsDwU4ksAUNpomqzkP1ZJAMXV1KRyyP51SB3ncqFp5BEcjsMx6xb6g1ZrTwgkVUeBpCPYNs",
  "key17": "uUztwN8x1HTZ3euXQ6dmZzBS1eqCDENZgmUDPP2K11WhnDi1YCtwMfCvf6PLqx9sSfi7WxCQA78a3XCqHsSmGJr",
  "key18": "5oqouGGdEW9n3hYroTHDswQrMDnqYCzQJkkXR3XncAiXYsfdhyTRXYXGJSy3bMYTpP24kyxT8jy67mVq8Su5UTQz",
  "key19": "56yN4EbM5WKyGr83AKUibjXsq6GQwAy19bZXpWRY1TiYp3PWLnxsE5bUciE1CM61UsePhPkgMVSjF6JuExWapCyQ",
  "key20": "5nsAPT4hVavF4RcmYsB9pZnFBWL3ZNqv6US5EHJRjt7wp1WSinCMEWNzCHR4QqGaVoa2DZUXzgyv3RqLugDKCtET",
  "key21": "2m5Zv9TxJfwNStx9P6LTtuXsNkN3XfYzpuXUEY8s1Zme2XACBCakwGiRNs7RVvuBEXbHUEdaEtjLChxU2qDwdgdE",
  "key22": "2Gd3282sVHvLwjh2k7U3z9WqeZeVDhUSKYCqfvae4PbZdSoAcBcasyMG49UuEM3kQuZSwXVFWjdPbWtRLfCyi9LY",
  "key23": "3SnPkwmwCgQZc6hMPLmyktpJoZ2d46Kn1pwy1NZtGXjhijPDvFKNu5ycmWXtd5RJPhhF1S3fVC1TxFEGztQSFBzN",
  "key24": "5acnFWs5Q5nAg3vXtBJrP8MXRnocvgJstJgyAakfwoUEqsMXeuVEUyX54NSfMR5tJEJ6RUsvENFPqUjVRQUJYjAR",
  "key25": "YNTYuSHJfb6FMautJLgfvvkUuqNHYk7yXEkPQsAAZQr53ckPGaKPbHFt8pjFFUkHNxT5Z662BkN2fuzaVgD6asU",
  "key26": "66R9mhCbhzDG9fNnE21M67mkbbMNvGEjkPvhbsrGXTbMCivexytywqNW2sMHBHCWpFJkBMuPtmnSa6qQujfBqL97",
  "key27": "nBJcXMshxDPpgVtfYEvk9q3JLP1xeVpThMJVdUx3cBSSy52BCngT6CMQ2drWr6Rzv478iN2mcrqu1JpuHke2c8e",
  "key28": "611zQQkEnHn9ZwGaBdYzFc6fFCMrRMYfMcX36KBenQ1HSwyrUegGoaVEQ9MGFwRbjSdD7BXR9vnHwEB1BXMBgqkQ",
  "key29": "JjEmZ22YheXeFHoSa1VcKTFw7R5xc3d3WRsAXjq7dQTVbLHeAodfr8jcKW4fpdcfKbQAgxZuuxSE12h82Vgk9JV",
  "key30": "64CtCUNEa1tkbQNSk1wMwXrh4U7uTVM1r6DnmEXSM6b7bWZnGxouBhfkTwaT6re8BmzmM4RmGrrECjyPgRkMBfF5",
  "key31": "2iLxc7Afr7y9yp7KgnFPR3MP1Civ7i81rSZXKsC7rNMo2mYW2hA27nctyrAymqSVHVD6WG1EUVbjaUZABoJ2ZUV",
  "key32": "38eUMQkujcch9cZqNHj9AMEmSywp6MEef6FLinM6EAteN42ZEEuTywEfHY7AmRN6pZx9wMr8jwqr3EbtUeeQxc8a",
  "key33": "2vC57MjsYdnKxzGZqWQFPjLbfJQtwCe9kC83bCsAhTgxS3BK474tHXjkK7Ca1zimQxLjApxYb9VQjR4eU5mU2fcq",
  "key34": "2sAEwg5BC9yq3fP7GhYzQbZWdrL1XVz6DbjAPZTt2nhPqP1SfrPSSFBwG8BqkamFhj6yimSup8pAbVSJxpT4jjkU",
  "key35": "21jGciqspiMxmoacEMyE241nWRhVH65a2Qs7TTLv8Ebgcbw86cKUmT3MWHMPBP7yidZwVx51GKMfXVJMW4cFWL8W",
  "key36": "5DJry1JaHreZsbbYTgbP9Xqx3o38tcLmJVhDuR9PYu7Ge5QXLoaqaUkvtxhn64Ba8kypDPgtZr2KG68JTiygNMWq"
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
