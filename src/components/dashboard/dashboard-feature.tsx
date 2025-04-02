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
    "9ywpFGQ2LEaP3BnCNSUHuiEz9bqqfAvjhGEhxJ52QAXRWAYDDkV4fpMKDkPm8oMu56R21kxUfT6t3DZuiP5ekqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kcNWSr8TUNcXCNrxBs4rRTGHteYiw8stcJ1CwFpocXRF1Au7itaCZWGCwrLVejiDdKivX5aZ5RRbSxMxgXnu92n",
  "key1": "39YDSWbjaYiWKwF5gzEHGtSZpgcpiu27GFn89LkvBtFjayrUkELrnWkGAA7EjKzhTvWd3JjwDWBr42wkMbuW1pBK",
  "key2": "5ZJffApU1Go3DR3QcQAjBD1482LmhyP8NQ95KRgnMxLsC75LtEqmvNaHmWUruoEAkvbkTekcdkLQG2c59s7dfmN5",
  "key3": "4gCSmA6rNvUSyzBhwYqHM8HhD7eLP4LbUK6ufLMDMyrP1x3242Nj3zypUrnKveRCFVHkj7rQ1SMCUyWvNKYo9cSB",
  "key4": "5cC7rP57wfWa449dh6x5rFm3oY7L2bBRLpXffjhbEEFgsnPsn9EmDPp3D3uTLE2g76KTvwKwetu5iGbU4jQKxTbt",
  "key5": "4hdSH5yMGMqXP49i69iV3PfDd1VwRY2Z6reo98DX57FHmkJUUHrnNt33R7SvVVUyvFap1y9osH1ccHqSgXvjzAYL",
  "key6": "65E6sRG55TsgmvAb8Ja2FxCakc3asgLjDQ2PfMavnvfSywFo13chzVCvxZskpriFraq9T5WbzzMJdAeCcihHp9uv",
  "key7": "4TmwstoJ1jDweLhVCWgQZNR9mjSti5JtDJiB86eSRypLpMob36eBh2v5wkb9nV3XqjCUQzSquiLSs8GxAWJ2QbmH",
  "key8": "3hCk64F96oH7obwNa5CG95XP43Fhh3sJNpCaD1JP26tEHVuA9Ye5aTB618Q74ihPAsBo9sF46HW39BBsNGjtMRZF",
  "key9": "2oLCzkHsP6jbFYxuXWjdRiKeSSBp8QXJsCau14u3rhZQWJ5sFM9jZ1hbUuJMY6yTtBt9T7NH884qME59e1oqsGP",
  "key10": "9FSWQ7jYneR7CuU869Web47YMKBBngStCQL7qSwis3H67mueiWG5axd1vaCPLJ77oHX12ar2oXxtRxCoFLxSLnZ",
  "key11": "2DDtrs2hV7h8XXwTmsuv8ms5K2oHbxTboU4tQurD6wdGpnYhmc9xuLD5xL9XasHKGYF2eJo5ubB9BeZ574DWK8fk",
  "key12": "26sPMxtHca7vVuARfmnZhePqLM7tzhuz3nFPWudvD7WHkThFqi2aM5vtTtYyfJD3vCjsVxCzTF1RZneycohHV8Dk",
  "key13": "3Joy8D9i2uqkE2KyDo4xES657Shg69N52XQw55DizMdTxdXnG577ZbMpJBjt61EgiwZV7aWKTxtJvymBzCdt8WNz",
  "key14": "3GKnfmXowui8seqsFbW3AHMcQvkF1kFVQ1i6KjEJG11nFkq7kH4d3zBTDtv3bXEbm9LppmtEG8Re1ZeihpqBvRNz",
  "key15": "4ty6kCLAQ6ZUcq92QJ4jUc8BppEFgTMBGoXEGAMo5JjfD3ypKyVzUvLB8Z6g7VUmPq2gMCEmuvq2H2FRGHRqUC8b",
  "key16": "4PpJzcxmiry9u5TEKUpYnixW49PzZWVoev38TSoEZ2JahR6PEA7uaqW8VGhut2Y1H6fGq3inib6ECdhiKWNPZcci",
  "key17": "3nmLpbmUSTReuDNTXsNzEzPMKAUPaDe8yu3M8JnDHACB1whtgfd9EAoH42w8RYifeXWEADTf9cneDytCFmfnDX7t",
  "key18": "By9TWV1LwEkDCPqNHuUe6V1U8uQ6trAb5bWu9cuYKXxnSnE3sWoCKkWrPiL5TSm1FuetV54iR89fM6FehrPhR83",
  "key19": "64wi6hsxexGrmtuopJ8n94AKNFX8XJ3wYFKJGUxUWietQrM79GZD7cfWkV34E4EnthSKxPs3gz5RJ6R9xkHvhe97",
  "key20": "2BggagLEY4zrwgLFDGWKdnRX6KU6gZK3p5Gc83u4R1gcKcWWSXXgFLFSrEjp2ezjHjBXBAwRwc4vUAKWwn5whV9k",
  "key21": "3n6chf6ZQckjWsnxEUqoszBbb4JR9D8jAZYEFW2TJR2D3oggvmH7xkq3iKH1qv1B4fYG7kmxr9huExCQsVQfeWqQ",
  "key22": "3LzULGiH6mr3vkmzmJf2aHgYxP1ZfWHEAKa2rrBe1zubiwaFkwisrovTm4EAJ4BVxbfnSAmx88a6czE6AKx2Nq5k",
  "key23": "44WQEQ9YM4Ry2VtxEE4keq5fK1CqetUCwgDZLqzrLLvtZSU6XP6ifMmdswfoDNwBXXNVchhewcQbLTH77H9B8fnq",
  "key24": "5C2stZe2wEkETTwY83B5Yev7rVYJCKFwHAovDX1uv7qPMDargmxS9z7DbCRqiTtgW6hpFK7MMdnbXFKzt5MmY9bC",
  "key25": "3mCZScZV8KYyLwdh7H79WWaAM4NTBLmi6jLjHtg5TuQDFB327osJnbf4ZQyGy5AyNzJFqDEBkvNh8y9PETNLZMXv",
  "key26": "4mYh57sWeCZQiNha1B2ozQsivf7nuJTmcmEzvG6VXURs5hKtqPjQE4NmrL5pK4w3gu9q3Em6LeEwacs6MJpYLEVZ",
  "key27": "4u2b3Sd28rocH8j8hfQt3kjrP1GwkBJuv8YkSWozveSEDriop9ZstothiwFkxSwsoQQnxrUDR2QTWSFTTTSBcBVC",
  "key28": "2aGru4XYECLeXSvW7Bdr5qUDg4gc3L9E2vV6Cy7VuLzWRsDMPYqXPwKh1S3sF72TJ2dWUWLtUtRc7Asr7einjTrt",
  "key29": "FYjS7oZqax15ufJCEEDnuA8XwXCk9PzP61GXyBtps7dX8tygKPJKordgMNfQ2APbdQnQLtGF2J2GVYvzBENFN2j",
  "key30": "2QDkgKCg2i5Ziev6ApgcafdkpehVmJGhDAM3XyZ4Pn3pokQy77uYvU9nhrp2JqGccHRJyzV1RrkuCPpmF3QcMvJk",
  "key31": "s6jMUEeFNt3jYYGdaxzrYDyYWpX8uFHAopBA3ymsTDRv8x1VyNza3e4hjS11tcS53Kj489CK9ZP1YuPT28BrSKb",
  "key32": "WYtt1bANw8phzjur4ZkgodKhKWGDkFQ9uN8K2NwFgVKaPT3RpvpaevqfcQqX5Uhr9yDcTQMsXyhLRGFXdVjVV24",
  "key33": "fdNXpzMRBLHps9rGgS8wf6bc99cA3XK3Wg1xU73x6YC2uQMmDKA5bRrjowoNb2Ar7AWdyrWd7X21ehFf1TqCZjY",
  "key34": "2wFjNmcHZFERJarnECesCKLnXywHMPTEgVte6UXaFrr7PUehyr1up8HyHuTSYmwozEsG7Ki3A57Rs4cAcD2DaF7i",
  "key35": "5bPNbvo5PRXAA21zLLshTkCvb5yF35Rph2ZFv5rQy4XzXnmpiEvM9bE4H43K7WeYuRmEnmoDn66PG3iWinL7qfcP",
  "key36": "49TjuAjD2rCjcyZVJJP2GqQNcxBK3LBn7oVEEHF5SgEo7Srr9PqgBtG4azjtRNCd9Vm8hwMya5s9WuqwbjwGUNYd",
  "key37": "itP4US7L6K4tFirTus2r1StUVnM99dsyCNyKcqBdJ12WtBmD4sTxpeYhd781hQ4Qo2yrd5zqkoDFeA4kZdKhfoY",
  "key38": "3Rf8rBD9hC1NiVY9n5Y4FGHFfM4jJerr1udG9kHUe8qwQpjeoka7S5HHjkun6o4By6wVPeotv7oBmwzrripwAvVx"
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
