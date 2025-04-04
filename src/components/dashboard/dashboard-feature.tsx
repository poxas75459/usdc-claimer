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
    "bYJJrRLheRV4QJgeeogwVGaoGV8LGjFTRq9ZebrBNLCqpBBZbew73S819HeajLcPoQXDAN8ikR3nrdXXxxxtsuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ckDkFXVrJ4ztzWyBGkpmyRZV2fhBmUecTHt3jaqRSRXvighvxKTBMcy4MkEurjFhXizsSKow5s8EmyG9suVYhVD",
  "key1": "7FFX85xnmMTgGfFdCY3jRZHTNKjmvjkTtx9uyMT83P4wNkzRqnkrAjAfCqGren62bSBFjWG2fEefEicxQtVamyF",
  "key2": "3Pwkmn7xeGg1Zxk5cGbYGxbLirAqWdocyMMKAENqFRCxsTSC6PgKryPFafAzrTzNEPrZMbY9S4NdsiVmA764o3WN",
  "key3": "2UkswWs26QjEhC5Dg25BhVVQygpTFUUF8CuZzhzGUQSJtJH3fDtWpcVGKtEe8EBoAdSdBGTqcHvCSrb2svGm4qZT",
  "key4": "2t9aMnEqbJsmxBPLJ2ZgEg43sQusdN87mJ1KhQPdgepMKHDtnD9wCjD8ZgyyRyQ2mcgFnKoThoM37k1HvdB4dmUh",
  "key5": "4tJq49vjsvMShq73xEmD1to4T5yd6QGFTYv7cdrAkrxaZ61SD8JNxCGfToVwUVRNogCC7khNRR87irrRMyJpdKLX",
  "key6": "2aT59GomQfq7Uzaeh1ZaEiKhnaSG3odGbDVVbVkDHV42vETRokWUPdc5HDuSt6S4fPha3VnqvmfN71sSuQ8TSQPf",
  "key7": "5vbrZRnk6BQDuVv3U6ViNRtt5rvgdbsFLgNbkQsD9XHU6jGDzuZuBswkrGFfrk5Y65MMHJa8ByJM5iZFD87TfMd5",
  "key8": "57vKvWAd1FsoUgC1WHUpGKno2kmzo59k8GKLwXGrbp1NYod8ViRYn58Mssc7gF22HVoZTo3MP22XL9FDA7E86G5u",
  "key9": "2PuWEMrJUSpcBV8abPdXHv3ETnQJzk2uKKK4HCAZE3cjegUu7ogmxSAcZCHrB7Qzs7SutsL9oBCDHBffvT2sWv8H",
  "key10": "2P4BY7K8cVaLCnGBWxwR1GkRKoHoLZ1SMMB5qmUwApePfiGQZX6bCHE6wDDmjfo8PgCD7GSXieyEvTdb57B7WWho",
  "key11": "38MSpTLn6zmdopXjCqDVHZ95rLxAy4a3WeMcTM1TLuT4GYiyM1331w32oSuiLkbQkPZDnsdRStJSgz8w5AzAQpUz",
  "key12": "2wiuSQtLZeaYeMBDxQZreagLwsp5ykhZSh5wACUDRC6rraaauFMjnMBhZFoGgiWSmTqmT8rrsn7rAdqDopQTknUD",
  "key13": "61z5QpAXHpqmS8ubpgdvb3H8BxTv49X7KQuphWniu2VBUYuZGk3Czpp6RDmc3WjjgH5x2HGbgFBELwcuBnMEHFMN",
  "key14": "nFoQhxpQKAEw4892wdTJcPrrbs7fdFqiZnA9afVYuJehWggQPNCXasvBGBSb5X1ACajh5xqkjGVjucXAXaXyLXb",
  "key15": "5WiU3JVzXnJ7U3f958EZg35ExDsitLrRNV8cGgNvRZQHMrpkjfZMaLagi32a5Vonj48vsUiSTgfMmdeCtDppr2YX",
  "key16": "3SXF9PYWBvuFB3apS6dTXPcC5P15KjtdgKjw98xrQP6GEKwvxJDNdRvb8n9wgBFPhyZdcrKRSK3JZAV6A4o6qfJN",
  "key17": "4iJSmvZrFJKMv9gQ16PniGR5FsXeyNB6bfNCWKwKaJuxQG5rX41mCPTcQJkKD4pAaaTNLftFAhxMki7W2CXaoTsH",
  "key18": "5yRniLr95K6mKpegKKxjqknDdN1Mx8uKMPJvCHKfQUvegwkKoFotUALhN3kRJHn76eX7gtKL5R2uuRcohAFbDD7P",
  "key19": "4E9SZjy4uB9a7DMApmVMkVgqjRiytWjT5KQyh2zQfXj8dxoAzYguZkNJz1CNBHBbvA3VuVQZZ1aXnDSBEJbZF65W",
  "key20": "5E1UQhZTWCgjMo88shCFL5LcobLLPcmhrDJKdd9u69UXpi3o8Xet68qSJhNygyp3CxdcFq66Dyfe1KZcLHti1fRb",
  "key21": "56tzc4WEsV8FpWqRU8rxQFFFZafvSVBgZWgEQFW5iySjDQG9Y8wfWAnvHJubWPZLJc6Rbv8TMzKkAhnno17JFU1o",
  "key22": "oGxr5y5RVgjYrHy8T121uJHvfb56u6Q4qeC13fxWTYa1nqKweJv9xDS2rAexHuZJfsV68wmc95U4NJs96orV9kh",
  "key23": "4qE8Pz2h2MqpwUYM1GacqicK84s25YNFaLDU7hUe3Wu6UhF4qsDx4rqYDgqhaW3CKxse2M3yBChHofEPUinCA1Y4",
  "key24": "2FArrHriRs4TV16pVBfw44BFHuQm1PfXPzbWxymDa5sVM1XwzoeZsDCmiviDztgJEPrhi2rjDZF2z6E1rUS941ZT",
  "key25": "ocjynZTBP5E2zGfYb5hF8sr6VdFb3s2wGdedKPaYzJSqjSFECvErSXQcqqNTpKiRBwKXGgy5dwHCpgxW3Jz8DmC",
  "key26": "5dz3afqrQfTaUYAfgC3wNiP977yoEqu4K5tyDKEzRjCp1yY5eyCm2w8eL8GYYWRpGKvSAULpR5YVsrfWGa1KPo9T",
  "key27": "63zydq4hBWis3ZzLcHtDJxnpmRkTLamrLcvNrmtFeWgUffVPNmzYBWcmpFMquX3mpRZRPVjncjrS89yvm6vF3RQL",
  "key28": "5AUVVxFJMJACxXMau4LmbxmG2f7W4VzfZt4JCobVSAEioifPzUsieKCX91fzSe2YZH2jSFMPMSaZxoNwpUmwsRLY",
  "key29": "3CPcaQT12DJpGp6xqVggTdkLVRQMf4hXFyLoqoXfAEhSo8Wi2qxP5SCmvCDgK9m3bbajyKvyKtKuR2VbQ3AP36Mv",
  "key30": "3eps5xFfmHCwPaG8hXGFVnZQP2kYVEjJdGU3YA9p8g9LP1ciTfRoVfnPEJFahaiakLGXh8Twoh8voSDd2rJXxawX",
  "key31": "2jWFPDpyifLmWrUX8AWY24YbH2wHrpCh6JN9uoJBWLzhYbydXwd8AM4gjrYAfj5X6gYPNmkEUYTsRFKWnJ1EKrjF"
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
