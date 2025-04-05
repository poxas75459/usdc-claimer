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
    "bZntQxzaisFjkVtkCPyLpeVcH4jDEgQ3dThwMknV71mhLyWTQphJZSZCGHMEGScxHLivNXNM6gqkDqwBDPnhF3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vaTuDLYYtfBGEtA3idi9Vn14GAWQAMEaUXAEhE45k7AUXyfDVsPf1qJ5GbLKaCizLF5ZkXFnY9yJBuDZhf2P1mn",
  "key1": "2ZAi13gHa6R2sguhfmzp4YBLiDGkWPgYiwbVGmeoDfN9spcLF7DkyS4Vg8N1tGBxSZtBezbniNPuuq4aLv9egTq5",
  "key2": "4FUzzdcnHSf1fx6ynbwLKUWP2vFxoKhvj1Zw7GQvnBm1tPR63kAZGq1A9a6oz8vNNDWaGYksKzVM3ha6giohAoi3",
  "key3": "4WDEb1k7wPPa6Xf25ysWVSitaJEyhinrhZFy3yWBknJNncGXF6i2YZR9AYu3qVDVzDHaaMZxjL13NsbZ1kZQcPmt",
  "key4": "21GMuJUW6NfNQRJppMiVfUYrSEtpgVtwuNNwViBxPLfDwLsbV98Yg8BFuHDPmeXocPFZXNExM53v4nHeg2yDebKZ",
  "key5": "ZA44eEVYEutsw9trZPaqzoHHdd99pqUSJPrBJhd9wsRh1xuLQRHKnRRpeBvcWuk2p3wesAeKbMAiT8LBbgpcXpF",
  "key6": "36oaLuWKB4LZiSWsaWfVyMtoS4fYNjjcTpyuCeWsSCnuMS6yw1QsHspP51T9rtgkBgPodAS6joRj8WPX8VZEh4Uq",
  "key7": "4i83GXGPEMSiEDCS3V718Yx23XETVrewxziPb9q1K5vDZnDbxYbwaLGGt8osp6QTqMNVEekxC5gAVj3jjaVEczm4",
  "key8": "59kBDCMYRZX4DZTPDdyyWXA6bRq1YgNTtrQz6oiHcRtCS7vxtbEjrsyaJCXPiCgopoAFNyuGuwsxu1etRV4dofhU",
  "key9": "2TFSxdYdYmbJrr6EBWSZJWemfedJHwdSsCpv7NebXHQ865EvNMvrRm7UuVanNwoMYu58W4fsH9uFJDpGSEYdxGAv",
  "key10": "4VD9HeYRvyCcCchteLdTVmBk6bb9xSWSD2ZRLFCE7VXRRXDXZWLH9WXoNWjwveAMgwbSbwBTThQVykw4HLMeMjMc",
  "key11": "4C9J5zcFN2mQYN8EiGhGuLQrWUm2Rv9V4YfvQ6JStRYKdyt46BzpP8nD5WCU1wG7QKH4LhNNseKJ22aCpmgt9chY",
  "key12": "28C3K9kpKb7dpX6QCuGQK429qmF3rYkbMfoCwAUmcPSbYFr9JmcKKeZZgrrhUF1iMM2YZqoRPmVcKQQmnnbMYnLz",
  "key13": "s94Eu2zD43arbnygGmaYcGtRXw8qphieQ3Wuszi9qeVDwtGyDy8Qi8enrdP4AYqzNcmjVSGuZNtE52EGk1g1wW4",
  "key14": "3L1MjmWX2jiScVjM4DyesJPHjtCj3KViontvTekdRutLZ2vS1bWkMMAgEjcVrapqRdP5yZ48eBZ2y9UNW1ueQWSE",
  "key15": "57i91izVCHivNAdMQnuUFGVLP6dxCkgUZTexU7octMmrjFyriBNrcGHp83K9qwn3BXtrNMmE1r99ELJzcbX6QRn3",
  "key16": "oiL8JVc7za1hscCfKGraFmc7RW79eJAUnaqShcA3RkUNzL4gbGxkPZY1eN5yy8WfcZHdvYP7cAmYE7KUL92uZqh",
  "key17": "2A24d8KwbLDH2Dz8yMPHm9aDh3pfFQiLbkX9eKxdpyayFHY9FgpF7nHf7YhqFDB5Et7idYSiJH9dB1ZkfmY4UA9D",
  "key18": "b5WKbzxbBSZr5jKYcghtay2ucc2jAvrWRMGniMzNAHugrrocnSLdGjSmxuK5V598jqtUSHFhjTkugnZ9dRX66v9",
  "key19": "Jg8sPh86SDu7oqhU9fs4MMPX55QbPUtq42VkzTHApZMKc2iTzUQd7PnenCVnvtjfX7KMR6GRzXshpZmLrPAUppN",
  "key20": "36qjjQPQJE3XrWQJFECP8TErL6UjcyXjZBUSSUt53mPkca98i6eW3qH8BxgRfwwK9qPrAdRtju3CzuCZRsK2njhg",
  "key21": "5v49c9DEwuuYEqJ86fLtwr8VFN4aE3RznatPj3E5CwUFTgNrqxTRMtWDuTVDuWivaUzhdX4bNpXXejJPoDuWmHyt",
  "key22": "4UGopdzYRkvfQjbnSeekEEk7MsFDWXGum5VdsgWmBvHRSLqAkUxej87rBEq6vPX5Q3S9aL8C7SiYsxkfrUXS8Lro",
  "key23": "3aSmYavhJVECXmiiVbbm4B7EwQZTeU6wrmDTk2NE1fzzvxSyjhnjqB51Dtw8wpVZTrJMW6oc6kX1MYgpJMQ1Sr9G",
  "key24": "48BipKBw2hHKwaW7rKmbzT5hgGSrzni3zQFj9ygAgcyGm9aKW8JwLDmpFBxQcP65nAdmoUYwPq2s2MSqWG6obuXb",
  "key25": "2VAhWTF8Ut71A7maxn69R7JEg29AaNA9b4fcNUmjhmG4fLDNoBVyNGrzLGcr3c8BBEuJwc2VBkDkZ7PW8D7cfrb7",
  "key26": "TDeUs92M7SgJETMJo3fkEJCKQbwe3KsCkbD6yph1pmTYwiDUs5Zt3EnA1RGgAWWnb94qaWcnocpTQkJHZQ5goGN",
  "key27": "4utd47WpnChChySpx4BbVFMyioe4944JcxnRsTEaySKCuhkVZTXhHwmhso57Py5pQFUS44uvMZhKykcUbF71wA2N",
  "key28": "66NiL2f7ojp1km7nEfGwDU1LH5tEpEeHix5kn2g8kZ8eEffep2kfHvSLtns7dCSTtCVwA1mnearFNC3oLsEq7PFv",
  "key29": "4ehSmAeF1Z3RDz4TQQg6t7qvny8UBj4Eaxu5qVvK23sZM886TUg9pXMhbLdqLTa3JkLtvkYvXFo527K4su3oCcc5",
  "key30": "DVtuWtCqVvP8AUYUmMEZXrdWt8cxgS3n1sBYACVhqmUJgJzhDF7LfV1JxhazM6MkDQxXiPy5BtbTDoGwNf1FVYY",
  "key31": "2MRNCmEC8m2tMoRkescHuGHZyDwmmPidhxYnFCjSx7k7ShupFUs3fajEM4jf7u1tQpnWGF1tp7T5gaLmdCKAcT6v",
  "key32": "4X1fCoYbaXUXzZFSkDCMgtmnRNBbCB5mkR2weeJ99He7FN9bS59X5fk7xn2GVsoMYxRnWcBFhFFddqNPq2Lh5zzP",
  "key33": "aDQa6trLWAkyCMfz2wB61zLsT3SmRp4oTZvm9KzRLRH59NM5yi68fa8eNuqZoGctrYRTqMTSopGDmWCpne7rhxy",
  "key34": "5MWavYissdeKxDp76pgajyUKLuh4GuR8GHydc9iDjJM4Fip9XydJ1ebavfF9ZxQ7UqijZ3btHc8BHeNxZp3XPs52",
  "key35": "2Ak7CerTfUDUmgHgA8yPRscTi54SxjrQb42u48DJuX5tGVu6EDtEaYyqiURTatpEn6kk6qgSc8VaXmk8maxQixVV",
  "key36": "4QkC9QWsKJGGrUyK65Tr7yTdRLusxfq47tVjmitUgbiujTN9gwsztcQgWSAQL8BwxJP9j1D4fkr5dwH3nH1SABvB",
  "key37": "44SXCcvTwWMboaxDSrDdFvayxoDcJ7ZuUqNMQRdDeHnb2pLvfEShSapzyomiPpaKQH8jocp6MfUQ4G3QCtZG11ds",
  "key38": "2d8fBHqAHfh2PTHvCjASBYQXLEW4fbwHuvVbCRvbQ2jGTtYLkxDBMaKof4kL4j7jsPc5H7RjjaGv4hyxbJV6orET",
  "key39": "2fK6b9v9KqMVoRzLXHqoM6n3Nh1BcMMPnYuKPGLVH1THYBtUzdz6cA3rvYSBVpZVFHrMnkZfyk24bdejZxTJLmdd"
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
