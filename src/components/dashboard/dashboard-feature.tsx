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
    "4XsPmCq3joA7UDGeZmUsH3maFrvcvLmpNbm2fuMcFLDvsSGxqe9uoxh33DfSeQww99Uqt15sFDcgmKAiayKHBJem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mm1fYbSLv7zXGUXeXfiKxr3j6Jm47dBPUqCcWRdvkb29zuBmM3YdZu4kGjLRKZRT8RpDnNWw7M8YpKYLYTvCauh",
  "key1": "3BiR4aNjBnPjxTxPGLuvPH3KrUq1mVMaEwDaX21MNYuMPyvhH6VKYwnGLSEmh29BFiwkBouW84EgWeFGRo2T5WC7",
  "key2": "4RWYyeRYzRyrh9gNFp58gDmjaXPvuHcHMML2JC1pTxVejgqgsPNUeb7SeNdRDCoJjTw9PAp5zj14scLTdP2cUE8F",
  "key3": "5ugdgD3hcC5dKXRNaQeogfiGdjYQ7w9gRdmFr9ZYwhvk3rfTrmQdwq1nXAZ9sJbpXQbPhWqHkaRJdZSYwyMw6XWn",
  "key4": "5NqwfnfFe4BmHcmFazNebiXZCFjnreJYUnzHqtYQTqqr6Q2TmxLZqfDGnNW5DqYnDM5MLNGeNfFRAk5izMBUNQfq",
  "key5": "2Tg7cMcYnjowMhERGQ3942ivVzUtTXiPxgr5nikmKcCyGjgZUCksDoVTkgZdN9dCNwfFrcGkcrcqYkXiu4ncJViD",
  "key6": "3d8XHCVZBUA6BMqu6Yxzb1EEo3ecRcMoNfrZGxQvPnCdtGdcrtanseN82TGpnKKzsdFm1eEg4E8REksuUtqguQib",
  "key7": "3s8gJZLCpruQ9dJkWpUkdKKs1L6s33FUwkAG9gZQ4qe1Pf88uUXdB3266eLzPQtHxib4iTNpyuHJ3Y9AAT1D8jEN",
  "key8": "3sWNAWzwMxAbBi2pY6NmK1AHpkdib286kUHLQxR13CgexuLHHimESKovpGA6WsvW7TidbdmvvSo6mX93o6EXjRVh",
  "key9": "2aKNuBczuyTUUpYxrZPBAY925ZkmaWJ7NnLnp4vcPeUFYd8VmLY6Ze2HXorZ3HbRP6B5LjEMLvFZt76vRaWvYKyc",
  "key10": "2JiENArS7TtxK4wNtXKaGrhmUrFvNyKFzMfwma6frcASSXz6pFpfqKHUemyLRC9LFRThjDmLrpJgfmU4qoWfNX3P",
  "key11": "25TGqy8DXeziHSWyz33g9TSW2u3TGwLkEAUatEtXJsrKp9VDHkLi7o7fA5v3ruHWrmBXhGnxkgMxspPeXMgHnapS",
  "key12": "wyqZAHCJi7rZSLDvrgwadu7cuGVhNZRMTfdrhPgWjj1kKCz2hbtfRD7fctsiXd7YCrL1TjyB7FeX1ukshQqUmv8",
  "key13": "3tB82YNJzG2PyHY7BMHLfCFJw994kUCqKrPqfFwyqY7TYMzvgpHio2FPGCGZWXn689qEi91biPNKZovtEVgcuWvG",
  "key14": "47WaHD6sR6LR5wcGAT5J3h5s7bK2XgXjacqnugj5qSKLYCsMsp32tjTbNsmhEKQorD1PtXvqFKLTs9DCEsXvRBKo",
  "key15": "5oartavQd3BBrK7s3KUipUGciC8AxV3q9zuKQhNFDR9ixkmFRrMSRi7cSh6kZJm9T5FdVEoJEhxXEMKmdE94TZpw",
  "key16": "5z7hs5TzqdETdDZerLu3qi2aptdy2XpEAPBXSwHawrapkVzHi46GAY1tLjMZM4kFCuZCsWr1bkgZxiST448kUjQq",
  "key17": "3ZAXxk27pihsr3xrAzzr14migrUH3jHXWS8yLJvNgw93pgxUC7V5fvXqKGgm5QG4xS43HpjVXpXomQmb7dkZCWCr",
  "key18": "5pyKGfbuNin2vGW1HCgqyAgP5vdZekYeJU4JF9YfNogFuF1syNFgWHGLnAhWAaRdUMeGVbrLvkv22w21CKPrXy6Y",
  "key19": "5LVX3rZsQAuvepX4N14Q7pMw7NRyoxPKUU5YfJzExbPtwFJnJKwmmmmwqzbQ5h18z1ThAMbme8GpJyNMudqTonH6",
  "key20": "35saq6mnXEyvMz8FX2CDcM8rqmsUFhEb7C4hr39JvEe5Rbxs5TJ3npP5FCmZLzPbx6qHkmT2Qdhza3UP1NdqRGvU",
  "key21": "3ZHKDKZmYneoh4vXA3PS8TKpXsa67nhYxMc7wWB1xTavyZsQfjrd29hPU8fx52toja4D7PqTHGcRaf3KLzJk4Afk",
  "key22": "47n88HWuBuLyTqkCjqtPLmi6Au43ySbob55jxbKHgyNrXN6irHmCycStMybAus2JGqsEALwj1cFEmbQfguyyXL3L",
  "key23": "2a5f5YQwLamL32jLKLVufi9oJJorwG23q4qpEGgsiyNUBtQZuZ9CeGv84ng4fk6gqkMo4AxCFVSs15RNAqyRwa7V",
  "key24": "5NSLo6ckjY8Mk8tpFzYVWSfWuy75M2EYfzCa1GT1Y8ZBkXA9RQy6c3tjmNHWL2koNpXDixgdLHPzSDs5SQ3fBAaT",
  "key25": "39wS38PpZZ9DdCcun7rCxTrZu358BJkgyFGZimBFtQQYgS2MCYYWebQoPmLSDda7oYkGVG34A8LZaMMSuZcoMoFe",
  "key26": "4Snb4BLkYAjWo7hgYnnY4EjiaM7J4FpzJ1bm4QHW5tsxeiotZNeYzxi8GCxaoM1yFBX1rBKjp6QnD5KoR4wE387B",
  "key27": "5PBXNiEN9ds6SNaVeevi3wL91xAeBsHaZGr8kg3nYeHwhqmNV79XLCQvzreVbYsnZLXvXnwW9AEuXpA5AthachN1",
  "key28": "3tG17dHSHCEfKS6ksNfsdXNdtonqziqbYmNUWESDGsc5sMQ1DzCyphXgjhZ1uxfbikUsL33muaqUpTqfMsmc4WHq",
  "key29": "3D7UTDnWBgirdqvrbNQCjqScf6PZEHhwCbbNNkiCfvxQ1yPZ69r9UVAR4uaMVTLfHXwFpraiZ4ZbTh1x7Qt27QVK",
  "key30": "3f1VsUhStnRKrPEyMs66mekDznkUCCBTLpc4twHJBHdy8DyetMFB8AsSYnsWspVAqAPzSCvudCqbLUJbJPqFBEFz",
  "key31": "4Fu3YuBxn8S6pheZWnZkbLNqdFDDdJCicDannXwPep48JRQ6HwVb8UZgiohaMShCcisiBqbaQRpTE4fHqBXj1S9e",
  "key32": "n9os9vuPADmie8SzHVhQwKiEFYKdiWXNJR5q6TztmWU6DVPRn6U7p3r81zDrJgarYEwZH6AnR8xRVQd8LZhGETe",
  "key33": "qyeVqhkcyQds6vfc8cDVH2JaVZXP1n9zeCjKXnK1uuLmKjA1eZmxwBkTCqF6Qs2SFayoeL6dY6gRd4DtYBr6fqs",
  "key34": "3sdHD4MxNeF1RpyZLF4wcCU8D41yc1Q6XktceAunkfvENb6HjBsavuahXfA8Tmk97zU7RhAxJqJedawXXsmqg7c5",
  "key35": "3Uv8A9UgHde7UgDHDjY1iteP8Qk41L4sZC4VSiP9bCAWt9riHBCaDXQCmuKuN6e2vG9SC3jyJAnHpmcLyZ6RQLF3",
  "key36": "5mgRS2BcGptpLPUwabX4aMuw7po8VdvDfDNcta9ptvsC6RLwdCLXhSthhR8eqULsHAwWdJG4DMSfJPv77J7o7dyM",
  "key37": "32Zs1iZB2FWGbC2drPN5qUSYBjv2rQtaomxhfMPFFHckZxYaKN4ae2f8FNUsXvsmVT1UWwWSASHo34MsJTXm9p1V",
  "key38": "572uxwigDJQ52Zz3s2tivQqJwJwdfGGcooRNgBfttHQ518z4cqNDpdtfvVNhEoQmTjBNSQFShcY12vt8nhpBhs1V"
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
