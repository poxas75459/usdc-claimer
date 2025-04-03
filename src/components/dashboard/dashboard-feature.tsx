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
    "5phn6Z7hT37vbzaSDg39jCD8TuDbaGM6v8yVJipfxGkCXUCJpmnFPi7ExRjiXxiw8VYbBEmUTPU5XDj2EyZf68Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dk8zPi3xo85mSA6wh38pF4fR34oNLk4RTxMrZX3bBm59S1cB5DFao7KSPQ1fGshVXcn2UDCCEYDFWbcVSYNghJh",
  "key1": "5rfnwbt72HsL526jZcQQpbUowLaMBoKxEviWJr83RSQtBBu6P72y61Uu4jzJ5mMrYnpBzpE7UGEgz4HjDKDscKh5",
  "key2": "23C6vvkUVTBu5gqNgVd5FGFRyvM8AHaJ6XvFLLU7tXzAwfGdSxu6Lvsp8c4rQSBfShqMXRjiY3rf5rkRCi2QgP27",
  "key3": "2RZ7zQRgfSUBRbvc9P4MpAjS3K7YJFAsXyJUQaYXxre95Rzeqm1AjuqaxSmb9TJSEDCNT36ok4xgR5ZQkqUWff9m",
  "key4": "5MMpWxASfsuWLuhPxa2QhaD1o16WydL7rRNpxUtmcJ4mmSMLkxje4RztBp6UDCpaU5Q3k91cGDNGa8gxuxe3QbYG",
  "key5": "5eggB7gVyw6fZv33TeexHJCqeF8o3TyauKjbmeQidf67FNsd8jA95ESbGoM4dyCLLt7Vn6S3G2VxD3F7XgBzDDKs",
  "key6": "3vnp1XCU47TnWyo3ixZLM68urQ3tXcMCMgSGTVpVTz7ovtgW9tbGwjq4CMmhrrLutS8b5HNSGdzdS8yvDCrGi6A2",
  "key7": "2qkNKJ6seRqhHA1rH55tkhPzAXv4wXQ5bD72uAmLrsgpX8Rrda2JmtmaafpopchkNnqDvAnsb6nGT27ri2Tt3Svv",
  "key8": "3cRu6nP3xyg1m2vLGNu6gXbBrJLYEE5qyHsT9HAWchowaXboTZ7PPuEpoCX4w4qAfrZwCb8H3VrHEuksHo64tv1m",
  "key9": "5h5oLowtPNniGHmJVvgpugzjPxtke4KEYwFMj6EEeTCYi1nTbiR7E6LawwUaMwDS2Xn8nUFGNmha7jBfqnFGsto1",
  "key10": "a7TE8SwvtdKJBdi2Nmscx93r11VgbnDgrTMubrXDSwK7Ppf88y61gHyJtUkXc8K1iGJ8pqQNjMyJx15VMdZGGGg",
  "key11": "3tFG4brQygc9YmtELDRRfbQrton8YVy8w1zYu3DevLcLwXSqR3f8U25Vojm9bCSUXgABgN7oGEXSW6ryCkQXe1Ka",
  "key12": "5mctMRukjA8dtGPCCsgafWWGnyKHEJPDFavJniv7tmQk5zA35Tu6ri8UgQWJbeN9TyqGKfQk9Dmw8LHRk9su5npG",
  "key13": "44kSMFtrmEuhoDrKd8oey69K4P1ZTGskoTiSgJZNhNsh71VELZTDRLmunrLC3vKbm9EWf4XS2htZAwdjgCRJyRCB",
  "key14": "5evfiGsoGHgaSaQa2WJkwscuPdg9ZYQywwn7TFDhxGu3z6NJt3gyZRCELy1bbcFfYx8ZpHgGP77QMjnRMPV1mELz",
  "key15": "39iuYNWFAMYnZSLFpPM99jEu4hM6LnG6DoZ29DN7j2Zk1g8KYaJH8Sf7ahKKt2TDUt2f3Fx7kVMV15k2e6qCSZFT",
  "key16": "4vqeKzGeGPMS6oNL9zpfK4z7imbYuePUxyvDodzoVJ6J3iZo3kgtAEMMLNBjTj9rS8mLeVkKm76otGFkxKB7RYLi",
  "key17": "3QCHRKrGv4pruWEjz3d4WdG9noHv94bNdixd2pBKEDAxoAVHVmd3uUv5Tv5DWuKDFtLbjxbaTy41WzyaHDxcc5cJ",
  "key18": "5r2WVTVAHFXWpHP7zqwsP9LThJWhxXzsUQ3QvCiy17VPA52t5Y81cwTA1aYZX2CshJBfyvGAY3ab18sCBerKT8vq",
  "key19": "osjnPMkjW3mATVD1PHkiGCuS3J4ZREN21pgABwEgmTX2dFrfveZ35TMsWhUEfXAhHrRNYz58vL9Urjqi1sCFwmD",
  "key20": "xfZ5zJvqS7RmEf6pv1zpAiFEDNCzcCDhtFxbPcBmfNXosD4FChWa3LWANuZ3pGqhYPAnjbfyVtcticxRytdqBGy",
  "key21": "ZDAMhtKmXPghtwxB9EbdBBngoC5YLFBBF3QEQgejEJjQdteZkRzrwM9GsNQZ7n5PeNxGxmrcMvT6v15kz7J3gn8",
  "key22": "6tZkgaCkJPV712HpYs6cBdNB4P5yL388WhtiLnkckj2kPP9MXA1AhDEvM6x2RpaUyBHSTv5wmpC8MwkUBRGNtbD",
  "key23": "5rn1NiT4B2gDZc1iTwYTRKNDT3nN8zkNhgPpB765cEBA3UdV58qFGuiPNtbdXyRPFKLqewETTf6G4vFWWf7n47SX",
  "key24": "4bDyLTPTFD1Dz7KV2KcTBHoxeuVbKaiDbRDMz2EfkuatQf4DfLbv781TpR5ChFBQL16Fs1rGzrZZNesiH3fWLvPF",
  "key25": "2b77QS8AtxnhwcMer3fTQHqy8jPHbYEXPpidqKWLDyktfo6i8T59PyZ1zSipru9iGBhJwpQ34Msr5dEhZv3TH7Cs",
  "key26": "3TQZ2UyAGmoUuK3qVpuc4JZEH5eycLnbtCi7pGDEjeN8eV6U47jtoSUgErGMKkabQ7yvx5K8Z5QA8Srbv4QDrAdR",
  "key27": "34vQYGB9MQzhFULa74rn3A4H8fz4ebKkADmKH4hPVcLoVKarScaA4jp8jwvL45LrNFCnsLU82JXsrpxkBBediw8p"
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
