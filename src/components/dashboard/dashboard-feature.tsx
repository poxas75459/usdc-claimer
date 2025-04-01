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
    "5V6oWPykztUGNYkrFpNVQHonBQtWXRrLGqWLAnniLSJehyxQqSignjcUvsGw4vzPrt7cCDbfJ1RA62Mn2sFbbJ3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqt8WEhh8WCpGWk8aGxVPaF3MXqbAHLYdGjPtMv2rs1veuDcNteFVP7WsT9iC5pfUXbFRVSoqRP5T6TzyDorrL7",
  "key1": "4NqR7bdyL5DZmnX1am9BufPUtoFMizaNNStVnzRhW3Kb3zsGpWUDrsFarWQvvyiJQ6wZeF4ejdRui5JhvyHSdiKy",
  "key2": "3Pt8fGzyhDio4VRnyC5QGwnSJMDhU7xUpR59Da3Em333yxssJgtxXovkiD5dN2wGq91wgAStD2NQy1g4MJXRq1Nt",
  "key3": "5hh6ThLjJdri2ppqqqQkWHf5RCyfDHK4J1AC7z3sR5jBzqRgTNEyw6ecHeADQLAqUoEYvGhyzFzxBovVe7RQtyt1",
  "key4": "56dd61YrbAZJUPsYkj95WMi18LpB75fmRZo6YfKa5bm8rCQKvK75zL3ko16ioJyDztxpLkDqiW3iMEbfrh2b1iXi",
  "key5": "4FEfGZb6824iuvzwHiLg2H2CWmVNE5jU5PwsTWzHsoScTU73zfZFggFHMpugwL4NmbEjzbRGLEyrgNvS16m5Kf4p",
  "key6": "5yr3SMRUXStiNhonVnd3DfKGSn3EZ6vHL4YdHD5QfE9jiSsAFstq4shvhdz3hrcgPHWgLgNiDsnXWp95VMfc9UgY",
  "key7": "2QCNoGEZC8zVDeziy8QSrQvCgNm7qYDdL7TbLDF3nsHQsGd2ttNZeRiAUAMG9UZmmXQnHSXhXdUzYNiwX7K1487y",
  "key8": "eMzWR7FcFv9eUu7BG6BF6nSretAtgi1pCtDyNXybuetCybLKrD7kcjQ1qgD8C8E6NJjPEqBssejt1UApNekTP9M",
  "key9": "4HixsuvGZjVPzTvTLYVmb3r5Yc5FxKuhX96CdhufEwfF4bakBVtcxUqgrXFAL9W1NfMmWSHrQxgF4B9BgjAZXuZj",
  "key10": "4pAhzwxMomaYHMCrbn8K3XWs58XQD8Ro6GxyhfVTTdH4TZfn8D2ew71obrKMfaPVZrGSoJot3HkdWA7aQrdapC7B",
  "key11": "5KFMK3AHZDApJpcDBP118kfXZXADj5VcdBFWSLN645tVSrE8pcW6a2UNbfhL41uLp69wPeWtjYNM8rY4skEeD3XE",
  "key12": "5e1686xswzDCvnNwntUc7wJZ11B71nXCjWbhYG6kF7QdXC2nLgYqjWWpD6QT74gm9s4JB7kGXNZAZijWUPErLTm4",
  "key13": "3yrvPCNdwyrA5ZbvbC6vagHEDfCPuf35JhxZWYhuDPLMinTU5wTbZC3Liy74m1WWjDdfqgkMTLA8K5WizUQqtPZL",
  "key14": "5zEcZzP7bC9HPw9BvxGJGuG8NuiPQi2h1qxLYY5pVqvFTvPoctHQEo6keFUAdXquuoCE7ztkpCY3vUWiZMmh64S2",
  "key15": "62sx5BTDUe9NFCwFf4cooQpqAZwQRGCubRDuxEuZzHG7p14TGiE3gMLG5yZN3BzW11jcwQjvGTANowrbbmPM2jFG",
  "key16": "274KLzp7VwHewHjsFsYoArTrn9JRtFima7TDzbKjNMbwYKfEk7evGFMvem9f3QyYkU3rMAfxZ1C7xipj4BnULNBM",
  "key17": "5dt3BGvpMd5XRSmRHdqjNhZ2Kk8Zma4GEgsb1NVCFVFh2VvAaTp1zuH1FKcnuomzQeM1hmUhht6VgHsLywcHSMA5",
  "key18": "2fyXG1p9FaFTEAG2XFqgQm5ZRR1nyyTWNdDFgtjPLPsUxz7SRMzzK5zdX8ycfqQopkMPm91wprSgPuBT18iriv6j",
  "key19": "2PDe4DPbz6mKMeurPfPbmgjduiVBkqgehhSH2Wh3YpdT4swdYSxCeTjBjFrhk5yB7WxB9PrMDMVXyiU6m8tEVr6n",
  "key20": "4vfEtddoMRE4irXqBzMezoZeFtGmcyHdVkoCcvDVcHbGZL4xbRRG4ZXiss78JTUE6Hrrnz7USPW9ekbR99ToCc7g",
  "key21": "3RiUogKTyAR1A8ADkaW5C2tvLfZd2mXvKEV7NE5RKoAW1wxAFLAHLgmVVs5nhzVSrZbag5JPLYCAMxxoF5LAYegJ",
  "key22": "2cfhNmGX85wpvtAZE7SdgivcEtbkBxUPDvwAwYBRUd5BMmtKcnceaP1ZyKuhb6bzXq8M7y5MWWStQzWy4tttZN6r",
  "key23": "5VyFQw8fBo3XrrPEMk2xnCczsaKxYKemz8a3bEPHrSFjgrecWu35dcpGEN8WB6GnaPfp4fLSbsFJJ7VSG7ZjFP6x",
  "key24": "4RH6EbLyxp2qTie8re3UmfPrbPtLLBVwbmWTvzWuJPJk2j9cFPyh7eRAhwJBvvYZnMfv8ZSw9KHqZp9WuPuYkETe",
  "key25": "5rHnLkKiBH6oTYsiDe72YhkTGLbAaYikucekbiMnndii92zVdvZ7XcBGBJq1oSwRhawv3j4C8iYC24rhK6ngTMy8",
  "key26": "5WC4Xqx9JgL7FZDZg2QVPzLAHPtUm51qv44iUvDJJeMQEwxLm5Y9SYg7t8PYx33GZh1vgmqkgg3vGFf5XEfuGex1",
  "key27": "3jsJr8Ao9c1uvUDynhMFWxFE6nmxzFNTJw6hZBA51fewomBBvuX3b5oF7Ls51jKJkyoAvgD8yTZiqDBq9ksFiQFt",
  "key28": "3feDQraLEqb6hmEsv85taSVT8csuLq9TZBtARkX8SkeQozcdnKJ8iLh3aLRrFR5jyuaCyeR22t57NZhxXaVDawZA",
  "key29": "5ZoibesUhco6DcnYCh5Rs8tuCbpazaqy4MSjdAUerwQLFAyCzUdaeZyrTUkSXxy64Nj3DBA8npr4uqWdjaV8TKjs",
  "key30": "2pGrbCoGZgjT6LdjXkzCaBZDSTLhmZpxm3eXjT6KLQvQMa8gimH9YyJaUB69mF9FjyJcRG4zoTQF2vR6KBCwSByi",
  "key31": "5TGjrNEbpoA7q9uf7tFYjDk22DUH82o9ywPhWjRncb197vsaSbzt2f9UN4PpcoXbaETZo8QNc6ws4MPbM6AXQFHh",
  "key32": "zecy5TR9AwhqHV3P5armBgszWewsmHBQs49D7xhjUXsy1rSuNiV9r5TNCm2dPywkM3Ye5LgwdQ6Zsh2BWd6VCBP",
  "key33": "4xRXetZ5ncbYtqr2wBd8YdWMbdvZ53GTUXb8Q2sfyBQ7eRXuzB5G6euKMx4q9UYEKCbgVgJtc6GbdeVxGLeB2gMD",
  "key34": "61WxxTpUAkKeyp6YRm3qZyfCzf6hp2e5Z3fcevmiJBxvwxTuhdYwL8f3FrmRy6YuQYg5BAmNRWkowvXRFBZLf4PX",
  "key35": "4uaJmkXC9wjD9Zo6GJoCPuPjT6XJ3TrhxfUVpVRF2jUatj1L2TsgCgKeEphvBBDbUv2UbsiTh58k5WLxhRB3JzZj",
  "key36": "3bZo2Zea79MmGBq8zAXEn1nFMS5bsYDPM76YNM35keoR7mioDZVSAqWXcxc1SwUxL8JrgC4NE5qyV6KHuA9Nm9cb"
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
