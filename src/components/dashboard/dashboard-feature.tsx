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
    "53XC6byF2Pv34oLGiesKW5MiGgs2jQNzhqyeMC8NJUaxE22tDQCqEBqTgp2CHT15TTLBMC65Rxe2A9Y4p4Sx5BSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RQFKrVbJZv6wvSCTa3hSBL5CfakZKkXf73cTQ6awekbWGQuHG8maCryn68cLbemzmawk9fW6RsKZYnErx9oRsAE",
  "key1": "5vmt9KtF6c3FFE727mhH8NqMvEnwiuPHoojGewxH83feYrTFUtap2LLyaGk5i9awXKTRh45o8Zqv7etSH7x7DQvY",
  "key2": "4sSGesnnihUkCBoyTCM6WMPeRspm9VHVKS7KGctGta7zhMoZrNHc7dk1qUkJM8hSV9ahL1BNfqgVJFTC7ftzKzho",
  "key3": "2pafyhqeLoxbSdpuvgR5YT3AVE67XAr5CwGNGYZjr5sp2Q6XY7BwUdUSFr7nhXjJBe2LW6kyrb3kojEBxt9QH2k8",
  "key4": "FXRFSWH73TVoSeUqvC4F8jL6m9wu9wLYF1kHdoKETAtzM9vJyJmdkfdMuHdn6cCfLgBNJGpEnVhsp5CPCQYY71U",
  "key5": "3mxuRGaM9vQNfpViHWxKfWXcjXscVEE1PfHCxULpdgLamAk4kuwTu4ThFai7yrPfPsaExoJxC8vbsJS7i2oWX1AK",
  "key6": "JvK2jVtXnYSXAoTzjnBR26yojdm5MkvPdDsqV3foNXttCjmjpxgxETJR9RQMyYEiXSiByPDBi4dMmMfwdmwvqgj",
  "key7": "4pDsS4YhH42LjR8srafYA5cqsnnhAihd9HMQp5bj32NLtTd4NR3MZQGj9fgUkqXCsWmn92AmYdVMfncVpFwQBQnz",
  "key8": "2JNcysD6Ugrw7kdyY9VStKifLniBNZbcRep4RgB4qZqeLj1SYAG8af17DMgcVPqGxgttUpH53v4XBTkZ4azP2dVC",
  "key9": "5XpQBuYUUiyvqdVQqtAmHFztXbU1jf9AFcAT8HRpiqGvqSwa9XCxjRPKqTcw8WPjp4mghAxrGK5C4V1EDqhzeTYg",
  "key10": "w8m7SATWj27bw3dMdCqdwYaxtsQR7SAeH5aep6aFd2hB4D9CyPLs68MTPsecMqHrkBUZv1eEW1c6RnMcNdYnmbZ",
  "key11": "5qi1LsxkE9NRHMJYEAU1pQiC6ihVLr948frRmbtsAKZBPanQ3PCmvCrfzmKhWfSmKTCNrTyUt5RgSzBGYtmT9ZRz",
  "key12": "5SkEHv8uVVpmELGSsue3XWhj88Ck3rhujZV1VeZLQoo2SkuMWoYpun4y1MwsVjRrQnWcfAehii4CtyawbEjDBgTz",
  "key13": "4wGwXTP8F6WHfNDBjcPx2JdvyXEG8jNAuq73aeQ72GY13kNqjhkdUY1aPwHNP3195csBYxGZ3b94G8uxpPfPqykc",
  "key14": "4adJPT2g1NLPxSBiEo1Poj71ioDb72mq3kj2avMrmZHSxFfgLU8eYWMMW8rk86XVGANj5YcKXgqkyJEioUZhhP54",
  "key15": "4FD4QLqcBxrH5fnpPzQK5HHBjJiHsB58ypXRUnQ6yrsEo1UPVGKfo66b1ip1PrfACUEbTz3Xnr5RQ5jcsdG1Hdsv",
  "key16": "4yHHSRQdo6sCNVSUB43bQUUX1vb1bhrU9smPQKocP8KB29zETMr5VsFC4v1zgpnpEVhh7GP7L3Up3CNcVUsiSMeb",
  "key17": "5MgzMCwHqsLAzuiwnVfvr6mTaay8BHx4BAnjMMJpvgy2ceBBaFstYNqxuuGQ5EFQCvKWEfuMW1D3qVCGRx4sPc7g",
  "key18": "5iCMCKR8Y35X5sdXD765mdsc9TQamu2HvtkEKotBnPRnmekJnoephquer4xZz7u5YuzRrreMdDvUPf4vTj3Um7bw",
  "key19": "3aJwSkeAsTS8ogx17Qsi1qcqSaUmhasbBoqGzqyaHuecdkadh459BfB3KRKr3qewxZPnfgXzReYPtGWLWPDJBj85",
  "key20": "QNJ97By5kdbPETw6Fof4rVvHVPengYzKNJKT4R1nE4frQjEGdLsvFbXcvNgwj6FRCSVX769cBxAncXGB3QBLkYa",
  "key21": "4P59h7AZm8FEeXrpHYgwpAqKhbkJB9QtSSeqYZMurku6YXdMkHTGtwFx7yZGM9hSfRtioDE5tYhGn4Xji8yPmWN8",
  "key22": "5dwRFoVdrNn2VSQHxDJb67DFMpcJk8YtdDx6LrCBLyuag1YHJPUxapvkn8SjRtu4XHNvpUwRj8uvatoe3odCmvu1",
  "key23": "VT34mjbkXjVAyoh3grt8jjcH9rDBR5bEnsLNP1badLEzFB2YV2T6r6B9grjtMgCCzgYGpmCUT7EDEvJbQ5da5CG",
  "key24": "38iTDuborWeabVr2tjEoB8z19hankbDKEP5ddewuwbeuSvDHYkoqg7KbsVPUw7fJST24pvVT2EBGxLUPpEg5v4t2",
  "key25": "rCnzGNgrGowZZ7nizJSXBMVCcvnTQe4FSybXnRYNH1fpHuvP5YbP9uBRw4mubyq6Zw9G7vHLbWwAq3LUDsDZnCH",
  "key26": "3utyh9Uh42hpDWsx1ubUYJjFHRw4CbXFmQe5WELXi8Gm8YaiQcWipYQFFggoxNbPrUcoE6uyxKX811LUAGvktAsd",
  "key27": "3kobyi9U6jWmHwYmVuAYMDJTcXWHvSnqNoCyGxcHQhkCvaWL6zkEqvJV7zenF9gX4Hr4BLF1XJh8SyEEpKCtEdBw"
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
