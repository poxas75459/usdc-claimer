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
    "4p2YHVA3rwSS8bZWKKcP5nsGpTQfQgLh6F1YsWVGHEiDHE1DypV7tuXw6p93auzoCUB7qjFwWuJL7LbWqoXkp8xG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WbYuQ9iddsvpthARqxheRooH1vrabRujbEWYm5UCKrHhykrYGTwYKAupTcD3DKQsQMSHPkkxe5FgrZxqvv8if6J",
  "key1": "3N7LFaXoPqBYF9r1FnnPdBppt51yYyKnvS3MwkqZQ4tygJx8hXpTdVLD6cPjZ7YrQvVnNcSKFRMhqxPk1wqhZr38",
  "key2": "43rRPURvGT5ZWAr39BrM1pXMTgZJazbuT7YwoEGU1rAq98MW4GznABT699UBupVPANDeocooTDzLSf5LujESrJ7n",
  "key3": "277x7zhnzQaeVTv8scP3geXM3qkNub2BHnhEv3U7rSHW11yGecmyGmYzwZbPny8cQXSuvXj93jzk8YwF2nwHUrG9",
  "key4": "FeiMKkEz6YRRUrsTJ6qzCrxQu6mvzPsQEayafCS8emqCoSuz9m3wWWxZYeS1tqCvHuDhhqHc73B7twjB8Ho6427",
  "key5": "2BEZfz58Nb7PfVrh5RRxzZb3oX3q47SZ9Qek2nxE3snBCoBZPNKP1225uN8azfmwtnnXMZRuCfKpBxVspWXSDLkb",
  "key6": "4LvTahmQNjNdVfTThhDGrhFz5LBL3L7HL5C68rNnEsLbcDPFTzp71FCJTNiHXpawGTAMYRovP6kNq3eV4pi3Y4N2",
  "key7": "39cNkAyaPYRkq1qh9X6NwQX7YNDFWouLmrT92VPcjmPVJRLCdT5ViRQqSe4GxCMd5wjKZhfdmSDcMbFMq4fNMzTA",
  "key8": "2mzHU8sGtYKSwPFufKZEFWkaouJhJDodUCWuiZq1moyQf2WyVvWozFNZBVrcR86Khkpvu51PSsPFGxYhQeC4WCbf",
  "key9": "554q2nuKthTUDUdiDLkTPwT6qg2P6jWKn7iyMij2KNRA2suoA4eCjp2zPWTerrsnC2EnGrVcFnNafNBTSekuerju",
  "key10": "37EJxxYwD1F3Vt19anr4rY4BcpWvGraRsbXdhNP2xcdgaKa7tqvvpuPEKqVx8jHTFzBPvFsCBitkhS8Ti6mXiV3F",
  "key11": "5Cw5mURqQr8g8yhs2p8uJJ7bCBJZbSJ8SvTmzbcKiCbqfWFAXk2mdSbVrx19LALLiwYkmBrjseau7zs7tSMQ358a",
  "key12": "s5rF2wZhhQpxsTRQK4teRERJcLbBftdAsewcCCSEVGpsuR9Dzhz5B3jUernaCkNvnCXBhmbJtqRDYmpz8a55LHj",
  "key13": "4dhATn6YYH5athvozPJprJURqJutGQmSzC77VNWqTD55VD1TSHtC5cgpfDGdbsRmop8GseNtVMu2S9HF89JsgRQj",
  "key14": "V8h759Xe18c1R9L4rrXegHxDQEbtHsgDy8KWBa1L54iBJLmSZxdQR31zzB9p4FMybTVMFKA3ksYGmrTQRw4Etwd",
  "key15": "28UhGyXdvoYsNWG6XQVz3worowYv7YJEaZK9L8WR8j7MSYcXRX2AmZJVbX1jyKLGaDYJfjzCZsB3u797SqzxGFgx",
  "key16": "sPkcfwmuyXdGVdLPJomZE6GTb8oxVGC9ueVb8Eq1NGuTZMxRMjLRdLhg9ix8WMt8yde7CdWnWXU6d2WKe1WNMnX",
  "key17": "5kRvyugqNYxUC6wzqfMSVCKEPj2SrztJ8GV2E7hqgfFonYtYpzm29F2xgPnyYMeKWwDzAL1Pko4RpvR6DeMZQKQv",
  "key18": "x3nNF9auUULqaRzsdcAySACBogcS8hEBLayK5cwdP1UN6YBym9oJa5dqcUDQLv7NRhjB6NxSzPgSV4nZTDxYbJo",
  "key19": "5y2NtNU3D5hLVoWJVzuE7Det38rPcWgFRJfXU14XEiGysskqHA2KRBXo2Jsw2Jhuam3w2Hi4BEDP5ByXHDEoe9RL",
  "key20": "4HXBdF2uSGZoHcAXprhivCZHuaB1Tf6FLcw81NuKt4cCMDnc3w5uuiDmFg2euKcyMteJPv3dFCZSDzRFH3NmRn9i",
  "key21": "4f6mNaYDvSDnf5zMyoVW2QbW3tEGCdjfYQr8mxTyDdTgfMwMZhdhSFFUX47XQXUqv21veFJHLSkEKRvE4de3H16B",
  "key22": "5c7LfNVmZ3PnMmpzdziNSF64LDwep8FsTKuEkLkTePafCGpfmXbXMer8GMGymTyh9NcagmhUc1xSKCsDTTSqidfR",
  "key23": "4a8j7YqKcg1udvAmVbrMazw4KTZdT5JuK9GL8iVpceEw6H1ZNekEkY3oY3pkT8crKzmxQFa8N1629BdQafs8RyNg",
  "key24": "3McsFbEnSKkadzXtHumcL7XRGSk9qHZCNJFdWUmTfmw2NnWbRPpwYvuboVHbZgSDekBzYERPuQ6Qk4jQRy8eefJD",
  "key25": "2LhmXujrbkjvznjqHeJpG86NSeEivX5P16XCTScJSn6hfYDM6Jx2b8DRvmtMeriCngLGPtN7GBBTVByo4q7KP8Nu",
  "key26": "5YdBiTQbpFrA5g7bzQg4TF77yqHDaJ5ZWKCeCLrDLrjKGJj2xmv53rAUgvoN9gLHnHYGpf7RMSPCUKx2wHKG1TCB",
  "key27": "5uowvDnAnEmhpvA578beww56ZPPw8xcHtWLmNPnqCZJF8pcxyt6FHobxBVR1Q2JBmjW8FEUjFiQnZNKf511f2qzS",
  "key28": "5vH3e65cShw1BWo35uvdVvJcd5iRzt11wtaTsjj9HyHAwNiBbqUbBtN1vDM3ZLJUThUzg9VupihYD7Kd6e2nie6H",
  "key29": "3LqZgut2JHb39xVLLawdqFFobAGdCq8Z8toJwqQRRnzQKVngSxsS4HzDYsAbdzwzg5BX9oA2xppV3BNzEYEjeKR6",
  "key30": "564312mzPjfSBXGZ81AeG5KTZbMMuSSf9rHzMuV59LRFcS1McWyZknAB6JSLxdKAhYFkUVWD3hTH6MHUonRCSX4G",
  "key31": "59w1GQ3LknoW6eeirWr3ycs64gPiUjNvSgiUb7vKjFboTiAGfkw1GzkCZdZbefXnHpCewBB3o5ug1Wnx4SzbvTsv",
  "key32": "DdFMnjdfJcUdFs3NdLUF9AgT6w2qiQGMHVcG8Cv8WAQF2wwzmTXpY5J2bZK4SWBv3AeDM7ApzhtUfmYYAgjr8gt",
  "key33": "5YLJp97eeMoFz5uCcuGkztPrNqhU9YKBB77rTPSrrmiUTGTEVz5Rut3pEar2DVuXZ2gPLXpPtH7tALCtEEeoNYLS",
  "key34": "3gem7dcMnRFPVCJzG6LDrnzRqeiytB3gR42uVydpcDXrJsaCSWfqWWgPeFnZ26fjhiRZidnhKjKQgWBDw6YLh1E4",
  "key35": "2NZ4ogDniqheizvevKCqdCbFeE9AVRbsKLJQqiQP1ToiufAXQjmitrEGhvNaUEPAWhj8RHG9KnV5or1hLjqXJ2F3",
  "key36": "4nTwtfdrrFycig5YxNihit1Lf6hp8nSUww5BpgJPL5C2XQCMvCSj8itvwD6Uc4UoTFMunBbi5dxoMDohxwmf51MZ",
  "key37": "2KzG2CUMQqosNBgomtAbeXwHUiaTwaT4aYHmEHBoAigToMMYsQPQJHYnRCdoum8c1ePwUhf9FYRJ8eaL8UtsXH5c",
  "key38": "2oXP27oeszmo9qxUfA8KK6emDXEoP6EasEzEArVtvdEuEvX4DvDt3rcGg7HQwVzwnYdiQskasUvucwxFZERzidHx",
  "key39": "kchcrN9NfTfhGoCvbsZAt1nKr38yCrXxCWvK8aYC5cFKepk76UWL6Mcsbd2BFMv7FuMin2Er6kASRo8pZhCCnNr"
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
