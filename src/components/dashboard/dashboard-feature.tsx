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
    "4REH8eouS8ij9eyesEQ1oJkvqPVRDnUCMAUdCwDeoSD3TLXMCasUHdXQw5YNukGfrX5yDntNZAGFpVHQh3rRAAhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KeuktWXWtYNqGrL2ZquDoruEsX8x8eaM4nrUVhg7KMGPCgJF3LCTbbiwMNqnWx7kcSiUxXNzCSiU6RmLrXa2wzN",
  "key1": "5uH8tAXPTQhX7NEBaueBqU5wZn7uEMj2EvjXdN5T5GyUkjFdhV9o4Psker9X8X8BWGVgintVDJiY3UgF3xd2xN5g",
  "key2": "NVfMULXgQGp6Uai1M3ZL1UMpzDsMAQayLC5hUrvqbiJ7SgbkMuojXAL21R3jF8he2Diouwn4r6Tx54qG2GkejeN",
  "key3": "4Dcc5sXodNDxvmzE9bQgbbkm1qnpFRVFpGE3hsPmh1LYnjhgeWuNwKdxdmZhzU8esKZvdz6hxoKDDQ2jvvm9wxbb",
  "key4": "3FWGYT9e12YtZA16nb6oicwFdFBc9g6WA648J6k3zwKibFo33dLxLaJqHMjd7ZfWyenGCM1YthTsnM3CP4FSFPwZ",
  "key5": "5XBqhTi9hoGXBfRkC4vgHkPqGpFM2Gib7SBipwN7BGZKQu3eR6pB8bM114hpknjhRgGi5wMvBs2G6HYZwFVXbscS",
  "key6": "4bpKLANJZXK68nE9h1puNaG5xy3CPCdQXpPZy9Cig2SKG4cSeF9TWaMmCJfGfeCRd5s12bnAFiUiHxfyWPB3uSe2",
  "key7": "3XFx7NDk5ZNyphvjNcQ7MzLWpJG44HveFcGJjZuZyydLAYU6uxi1XewcYxz9bmdhwg4xnJAsHnY1cKPm1gmLqUbL",
  "key8": "2B8vSHHHGy3Zzt5hepQy5U1QL9RBXuGaRXw4ED7u2aT3SCsLS4WG4oGrXeo7HsTCMcivztVtnEDcHnU2cAnJtThz",
  "key9": "3Dy7mwvm1FGKju5sGTq4Y45JWTiE9xKrLnzeHvZjQnCi6MVDrm6a6PdGobKb7Tv3qU6V51hPE4NVkRMNGYW6X99W",
  "key10": "32WsXscbVHAzXw2hz6YoWbigcucpSCkfck3ABkMtZh2SwTSir2GWs6FsfXf8yocteyrgCfB4FMCEEs4FrhLjJrJT",
  "key11": "3k7XeF7tu5TFzEwaSaN5fGG8E5tpZhNxTdaDLgZpxWwB8nWt9sVUTdDYACLiCn5BXfahfPdS4ip77WequbkHrNGm",
  "key12": "4Uurhgicx6uuPZnjgTJuiz9D9DLTLfDSmaLaJBr22dtYkC7ATPRghcr8vpUbwr3qMnD2Nj74sPoujQjNtNPyLMDy",
  "key13": "3bLezbJPLogpBpD4mcN1W7H6QeupLbDx3iUrY6ZJqHnr1idwtBXYUYrzePchT16EudAkMstq3HQfKAhV9SMmfAia",
  "key14": "2iL8p99z2fnrrMgbhPvZXHundqbMpdHmXqYVykGmK58A1hh861QKEiQPWxZSBmA453YfAFygXNWJQKdFudHiucHX",
  "key15": "3jeDdRtqdowvMDkj7FYrJ2ngJaTaCGJPYg4QtrUN7H5vYHHcCMJWvBMcSQKuJX4CGDiJy3CDygY15MGqcUYSxjMS",
  "key16": "M3uoknV12E68GAMtdvANcmGpjoaWVmz4o1zUoqw9ndHa1A2qAf8C226p97kzNuAnVM9o11C6YGK12pQb9d9KRCf",
  "key17": "2ctBgY52LxJfXHDr6Q8fV5i4EmBgZ9iTNBXrpjXkEpsqEN2NANJ9ixAGhcS6gJAYYaEjfkAkiVmFcSSZ17Yu7N6b",
  "key18": "5ikFn7Beotaw5cZbMPixrdX6ntE27wi7c1PGpbax2eor6YSMt9JQSWCHTWMPabuRAWBHuWwkGKgEMYkMMBW5SDqw",
  "key19": "5L6eVg8MadtLnS1wto8vizMYnXSPpStBWHDjmt2FJhZGCJh1JMqczU2j7rnqBVHguFQy6pY9WwRy5oxiGHEgnxXT",
  "key20": "3tDWyxzDRhZizHFZ3Xxu3QHGahXqhZjYQjPfSkMXqHk54TokofFacy1zAJG7NC7GdvtQkpFiurEtJX2ysfBLhpP9",
  "key21": "1Fg5Y9QUuYYHsSiG54AcQn9FZwQcXZsqQ37u7sYm9JrCbPR2UVj3sw3sitkK7ntLcDyCcAkm6eiWNWVZWTAt7Ha",
  "key22": "5sJmkWFJKYmiUyLwKmtPeX9TXzQDVDbAFJirPLKVUXEtfe1YFF8CTCB9957paVXjGMywSxTUBSqz2DXPYTv69Ke2",
  "key23": "9kdMRCr9TvDr7eCimhf2r1Y8r5JFLCZoCRVWpfWW5e6PZ6v6jku9GdxhFtatZLzeaCayy17WC27hezj5BxRvFoZ",
  "key24": "hf8dxUUuiW3Y6jX2vJLTRtdTGHxG9tBjnTRRgaGRH9iBFLTfeUJgD1f5B1vSWFiC6naF8c7UxUDihwSuz7bFw4D",
  "key25": "3qVGGhxKzzhK1e9Vj5cVkYhickCt46vdaZrzQyWTFUyTticWmqymEoqSef5NABcdH9d57GC76QFyCp3iSthtZSmU",
  "key26": "37y9jaGarnN3z4dPUXuve4CPPWTD8VctdxR3PqZ9WvPCcE7uVZLvzDXuPNroh74Y1S81HqBh5TZRyd5EUSAPq3pc",
  "key27": "4xg7vGnWbbnKKQMRaoBeKRuUWWrAhMDjiyyPysN9xUAGJjJQ8U6BR3v9uVqQMZ29jKsTEn5s5RFc8gpUrS7g8KYU",
  "key28": "2B4dSVrqCURHDW6t4apsHXxbZjBKav8VuVGp7iXHVwYccnAByFtDEbqjozrgGqEQqv4WPnDwN1NySkYXzmBtPUeJ",
  "key29": "zAgsyAbhPay8N66nw7BjfJh3cDbzNSvpX4LNErxWW2Bx6dEETZLFw4Ci5UJx3e2PFfUYBfeNVmE9Law1ovZ1z74",
  "key30": "58syg8a9PfDAv1qZai4r87jSMF3UZhjj7JgnCBKsxXyYiYAVQRpnzNY7DpH1NFntsqVBw4bFFxDTVKnhYM8RvAgL",
  "key31": "5x6Bpt3RyPMaqrgFNYq8kcV4ToimactGwWPPy2RfoecGm7jRGNQUKeiP427K8GCE27LYxGR9vQ4cecaodEqQCzqr",
  "key32": "3ae18yJ3qic1RA27vF6vnDUPgVnrb8hgiA1HZkknfwZbNBeidDN6RvNbkvfmhYmg49Jq167v1aMPQQx18R1LMoC2",
  "key33": "3nVrZ6VN2wxkc4Pfoz2m2AKWdgeSqERJVtcxfamwBSj2v2gFenQpNxAhtLRnjpnMWtvRFARGkopDfQhNBdNjbh3w",
  "key34": "zgJpNByEBkiE5nBVgyUCDVhKzE6SyQPNxfJLPewxggnMWporhRrrE9d4qDfp11jpshMHkEg8HX523BE9kmnN1dt",
  "key35": "5eRXu4GAUiXKB9xGqpMkRwRs9b8zFXLLxSMwdMemXcr81FCBQcXUYKJyWRg3P2zE4hgB1HzGwGJtwQNHRKWwMH17",
  "key36": "3YZ7kreqz53sFAUBL8oemf6WbzSnsjiHQ7u3G5jp1tpG9Fr3ewXSQYVSU35D18x7zvd6pvZq7Je9AhMVJ15iVN8A",
  "key37": "2WRyjce3ufhT71ovmJAKFNagVYLWm6kUJAj8t8gAhinuQn7irUBKPc7DkfSaQsjZanVkHL8SxqYZiJghm84q3DCk",
  "key38": "puvNdSo1fzNgTbnXc7dPvpH5AeWA6NsBtSUvtkVtYQfy1ezLpZmMUDFHzVKV1AFFE9Stmff71F2uAwTunXixLky",
  "key39": "5f5t2ZqG2giYmdPrUFQxVTrf997k1ydJzTzyAMYCVUbX5MNZaQfk9ofdeub25EKh817MZQcUWMaFVxMasxu32gxC",
  "key40": "2qENZpSGonreY8ewojQZiXTPipUEePpvJHWHYT9dtq1XUXN9qteYVjrK2ayfmbcUxQQ21PXHT6CJd5KJmmt2Np8N",
  "key41": "zerir9gzoogc7BhFSL7NDHJwQvSoQfXarzjvMhyUxuQGTa6WDcXDu7ByPwAQzdPX8F4qATdR8FpnPkXsjFmvuWe",
  "key42": "4ANEzMKMmNiH7zjUiSAvvdiUcgYmBrzymyLjmfwrjcxGVVtfB2spkdiFKdY3RmNNoS7Ye98b1wn2bFW3UjuiaVxi",
  "key43": "58SrBzd82d1YZgvxFfEfo2L4og42pDFPQ13pfFdHpU7RHs5gyz61aLsSCCGM3eu8j4ZQunt2sJ7p9Kx7yy93eKPR",
  "key44": "57YrYH8mVC8gfdx4oWXS2uaTeoGJc8kUajSYLwoV2uUDvejKEcr1RXxLpL4J9yAGey4goNg4LQv5sWDCyFdTmDWE",
  "key45": "38jLGPrd75tsVUR2jVTrqHjxVR2mXYqC4qUWe45NpHYHu9iHTzh3KVZjscofsf4M4iLkW5x3FsoQ1r4ERzd4Rh9R",
  "key46": "21QkcW8sDTR4NuexhYEPRpVXK5Vvuf8vsuRzjMHF28orTsyUk4NrpCLqJE6MwG3eVamYbcDrKNMKXL359rHJa6fP",
  "key47": "2cXBx5wLRyxYeknXecSCywcTUPfUNWhQYkar8JTGqUwHboJA6Ct2cuUc7mnYraeTXxAsK9x39cLA1hDieBdXTrN7"
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
