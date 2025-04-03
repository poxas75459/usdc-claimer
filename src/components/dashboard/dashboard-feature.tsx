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
    "5TYQ13t1TMmtvgUxoMAbheDsRr7BTcpr3apyZpQ2kVPqv8dCpgVdjzHNMJEjSPzMeLJwE3LRktRXiBhpMt9bUZWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LbgooxKYSDt8q7qMqxxJJLcuyCjrApN4ADwgs8tQp4KFA7CBQiUKAhi6rbpfw5yBQtuVggE89s7qa9rJxhmkvLN",
  "key1": "636RvfAmU27quyKzELf2jvmHEEu4LJWZ7MAnAPRdEJ1ePwuArzEXfTDUBEqPPyayGDrnPFSQ5WHyvyZioC4F6fTP",
  "key2": "XRiBPSoNqdWbgEbmGFesyA1LoxYGtf4aS3VvUEjyGpeEy2AEhEaz6E45ewV4o8pAgSSddRU91A3NoxLZiXqxJwV",
  "key3": "5HWh3at66GG3TM2rZnHRt3HBTHgxdcSXRTvBVaticGhpWSBFx16MYB5xYoDGV1nFTtb9AWVgsuWkowNi3CNs6ENV",
  "key4": "5mA6MgZ1NFR83wfvRB4KXqFq5UYrzjmNrWEX9EKsAouZao1tJvUAvpTcFohPRZJmbmspnX2ovbccocTRWryJHAbG",
  "key5": "3aYbFwFxyeGpsAF4o3bZVtd5gbqbZ6QopavxVvVTz1j2uCS7T9qy3YWGSiBRNw7DGbaeRtx9s5o5dUHNZkg2Te2P",
  "key6": "48a3Vd9unRQrvN4CtPRRMFqrxeWKfmHA4ac2cVJoDevfdQnkTkbv8NzAEUxiGxhGr8hCuJANDL5SKcJfsSoxcZGr",
  "key7": "2uJT9cw3mRFN3yPwEG5ktydfvM46X7VKfcjKsTMtwWofNTbXLDxPdUv17eG2Y7aDnrhFUAw7ukWwrsnM3WPQrGpd",
  "key8": "357wJQpifA7UwvpPgdeDH9eQY1JLWt691G3UcHnKu4W5oFTXoBAy7KDJSZPxBCYm42Wg6ZaBjfj3H4HUuRWYLCt2",
  "key9": "i6BXbszopAjbXv1pKKzgbC8HWiT4b9XqFU4THbnVYg3DFTQmAVKYdwG8wcEyZsykPpWkVJ77waGknXddoHBLUbv",
  "key10": "4doP2w4MY5sYzcbJtn2Ppqw78RWSvnv1WHaGTXmJGNfQL8yRdGVFiBcCfgCt4xxxYFMbV7EK78t94VaDQTFDj1kd",
  "key11": "3pUa9KdiByRBzP2GaxZ1RjD8EWGhK6YtugPUovKgFcRJvPNUR5v8SZYnVCc1LBwTrdsiUPrE6MMZ3mrQsbBqxyoN",
  "key12": "5htBp4q2zxb9ahGyx1P33XiGhqwqByzBNetTVfMR47AtN9kzmKoshnqZ56sdcfr2RuBik9RGvFAvMwV1aAeNUXK1",
  "key13": "oeE6zvTALfT5dYndh3XNUvskyo74Tx2ojfBQKx2tGAmMwPAnZpxx95fhkiAUDDvpoDo4au3eu3su5w74sdPCuxG",
  "key14": "22VADhRwijJ5Yiif4SSB1Toq4TxoX5bZjxKaArxdn3f4Fn7g42C76jMM6GmVLG3j8Q4qBtoprCPAYm7Ezen8Sjm3",
  "key15": "4X5JuBS3PhuRXDFEvfBRi5Bi6vC2d7DiynmzmipZyyPsVjLSgMTVRMu9jYjqBmGDjo88LRj6UBfpDdRV3HtvJXDN",
  "key16": "37XjkLq2zTb5kWYdP6pDX2Fe669RRMoYc7iVkXDLrcjkCGr9AmghEGqk4bWbk1ErCvE27D7r3eKHgW1MKrkUDLKe",
  "key17": "K9QNGeKeWJ5ve42eLwa4DGSGQczBqcLocp1Pv93sjMy8MZF9gqmxFTwutFA7t6sDsy7XPJWgDqb8QdoXrxsGRoF",
  "key18": "4ctTiefiVnSkuDeTXmQpcQ5xiWCDuSpGLc1wuW15GeehDxfQyCJCm2a28xA3Kq6LxmcouEG93DyBb5DfYGfL2na1",
  "key19": "58fcLj8HQPNVCXFUiwruZic4A6GXJ1VXfkNa3DYvm1MFFhGtFDQETyVgtKdFpr3NksiToa8cPGsu9mqZPJayd6zo",
  "key20": "2qHAggToNRB4Tu49j6xkg3LqH3kubbuWw9isddzhWGx3kduEsXSPrpAUJN8TWWrvbjEGXPFeLp5xrrE5L74GgsZa",
  "key21": "nrHsa81rvhxJ98FXr3VPjRPdzegcuXJyQ5P5zUVyfLwoamPhw45MrguJJVVUSBXCKZKSe7ADahJYzq16sc4n7Wn",
  "key22": "3yrHCKDYEwbmTptqrdwyXN1GnSUiAait6pF83CoxsGRrH2vuWdWaNzuHPDAsb5dbtdjDTy3cfica6feXNCsXwqxd",
  "key23": "2XaWkAb232xpCFWehkBCC2YXuHFwghGsJiNKPQgGTjNTs29RzE4PdJXMcBzmPjxj7N9WjMzvCBrH64Cev9q5MpnD",
  "key24": "es2Kg1KrMEND5hZwhHeyvcae34Ym43cV5aoQcZogdRQCJS2Xqf9j8bF34Uh55NGm1ZiPx2JydCYQoNZ7CrrFYtP",
  "key25": "4hgAivYhimkHWj98XPcYRWMecXyYu9UTSGtWiC9sGZ3k9s3fXyYJQreTmXMhNhBNZ5LQxr9UEES9WA5kUoroU2QW",
  "key26": "bbw2Nk3fWU5WTbZfU9E1A3aZkM4oSMccrzi9wFn9HjvGqoecb9APWbGsCapnvaXgqxeHR16JuUK3NmaNzRSGx9h",
  "key27": "sQufAfFCvjgdBaMhPZgzuzL3oB5pijsSVR5T9NaJnmSSesFNNLpHpxCsLDMkobuKnRa6nGNXPiLRf85rcafMGhG",
  "key28": "p2ZbYKf6sz8z2onrTuNhd4qyBSPAtyTKxZ5Eb13HDku5to5QFqAAARWo3Qnd9qUYZAojmibmveEaBFuejX4uh98",
  "key29": "61mQ96xuCHC2zSE2hoRMBWX7rUAEqQi2W3Buam48kBDHT5qhnx3LoJpdm4M2z1dhZS8sqqhn6sum6QgvegsG45fr",
  "key30": "2U6tu9XgaijKXvyursAgXNhyKL5xNdDtHcNgmG6MtmWtdBuecxT2gCb5KJ6j8KyPXCMYHjcuMTRh2fBvyFFmjjTN",
  "key31": "3AD13WrmBdNAbUfT41ZGyG9CpGbAZjAmfDBuhyJEKpNZ84j2TKJaiYgFR67ZiX3o4FpCcSsuXfbweGtQWfYPuxre",
  "key32": "5FQ4bfsGtKuJiU8PmJerHssAETcEMdbDdCV9SBFj5E55QQ2GHzJeUCeqtsHMX61DGgf4n1UEYgv1dWPoEtGHxqJX",
  "key33": "47tcD8U9YgyJ6kEcyQh6me853FPDaWokJkb8nYe2XeAGPjsmrxeHfDYjcsoDuPfecLF8gVj5KAd8TqfE5uwENFjo",
  "key34": "2xpcCXRPTenqieS9uvWmM25VdsdXQANmSCWqKcKi9MNQbtQzDvrLNn7hhrfByPxe2KyGuzXQxEytfPPuHiDkdBF9",
  "key35": "48bFJptY5D1yMEcWgGRkSnrjZ85CLUadgUSwugLSwYtvH8XM4C1dzg6iYuw1jNGpWVYyT8UX5u61CacgkVPqBdfc"
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
