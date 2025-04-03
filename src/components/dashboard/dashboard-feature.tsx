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
    "41msXaLz3MCBhwcmdd2rZRzDcRspLoDHVC1eDu1Cn2Rv4hcaVwsMmuFwQCHn3ZkkmgPZLrhcdJWfvA1B23csHZo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gr1GfeehPi2jWjZWkuQnyVTZCc6AtYRiqThTFDXRvmTft9qwk4nwHckbfuQVusNrgJns5FC3etKWUZvuMUG1ZpC",
  "key1": "3WHfXExjYJukDU1dVqcb5QJEbqL7CXmVxvhPWvHUUVnvepVwCX59PS1wKtoNa4sWN5zyNn6712mSK4W7bkSazmeA",
  "key2": "32CZzkEijpUPsBV75yN1L2Sur2NqYnccUwzjpZVrQHzxTBS6ivrE4xFrd7xEviXg4svumX5YZnVuU6zrxEZEFzCa",
  "key3": "5d5thTgKKnfxEQDBEqSBWW4oRiSMLjjGysu6jHerbiVVwt5RYvQu52NmKvyeeSpNP2ftG7owzW7XfxJX7RQYgEK2",
  "key4": "TUDg8S1rqB7rhekn7PphowNgdei9ExFXWCyVH97mB1csWh2MBHCWhX64pUAbXkjbQHyQefDyZsz72HAXyJnouUN",
  "key5": "TKGijnBrZRyKkvGDjK4UiXAFdoQWtDCn6QadVeoGf3C3ij1sFpNbntqdCY6deeboN2VmCx83EbemrmrPe42RGMz",
  "key6": "5MqWVvZxNThiLTzpSk61zUv2tGCSuNLvDVc78NFe2BBoeVX7VhrDYjwfohDQm7CW2JxihUosZLWmfmS882uNhoye",
  "key7": "3LrnpbcarCZwjTBnaYTNZ4877zNc2bwhabEVytHs5kesH4dJyEH4bubETK5nrcxrMxXtkYa1ipM9WfnUyv4ZwSsG",
  "key8": "5kZiCKbYZ4DS3C8FzX1TshFMbLvMDhjXsFBUvjkHXnTqVhs2eyH8Zs4ey9SwVAdHGvejqApy4ueDQLCuDZhppqwy",
  "key9": "QSM3jDhykVSzR7ZX9DvoavXhhiodP66qzZdp6mNUEymCKwfwphRmu64ecAW4tTYwURgr6aRyE5Zr3nAfh4EaLza",
  "key10": "5M4kEzuhn8YhFRn6J6yRnp2AfSKURZ2HL7oQkwhXLAeuttS4tGsTMMk3USvvwpeAJp7SJakm6u9RczuAwB9HyQdb",
  "key11": "2uGTQxG8Mr26sr4Fi1YEfY3Xys44tmdZPLi79oAkjoptBhPcWSijTRUKawVqGWEtAET1JKEyWbcjD8pQczpVcFNd",
  "key12": "3tALpkbkmdxJGr9MaSVcefPgXA6angUkbxVEY63Y8z7HX7Zc4c64ixPGnc2afsHZTLyRYuxGTNfDymw9yyAG8aCi",
  "key13": "4EdiNEELb29NnYdktzYyX2SvE8fYQJWiPMCYkTayKhj3nxu9Pf4xHVBgPVvPhMypDcmugpKYU4vuSMiPMWTuctNn",
  "key14": "3kRcKkGoySnXWia6m7V7fP5ku35NHc7E7GaYBzmeW8xsUHyCRNLBichzGz3b7NZ5gPdtEjWRdHuZWT7DSYXoWWF9",
  "key15": "5LgFSDUvhXUQe7faQMpD5vw5bXNneBk1NJmgfUKg3KBhm1LJgoKSrmYEDX6RVcLqp8hJcqvJVqF5SHm2opB667f6",
  "key16": "4g4ZVGiWDriQseZjRntas5KWTgtMDg2s1gMBCLMW7cq71G17oxntvrcZLhbLj1jyVrL2rBTntfzeGKzQPi5ryawL",
  "key17": "mxcyU1hgz2hR5wFkdqdb96ufrbor6xYksssrW5PatwTZvdMHRAvdnW3FGT578WzSowhso5BeKjqnuQW3XucXCRo",
  "key18": "37fbqdNCQxTV72TSoFyVzL6mYwsxJYKjHVx5nmWkDv9iSvDmBB4L1ZfXgyimy739Ft6spq9WnUyGWTbcWpB8DHj5",
  "key19": "CcGGDTzmENSdD6MMgGF11pDAV3rJy7T2KZKD9UkriGw6PqN5qhqVoQgnv675a7NbnhrEg56ubiJfHsGziWZbP7E",
  "key20": "62wwMnBWywxH1EmxxMVU2C2ZdcgPm4mtUhqLVeU7Y8GhdRdicz4bzLV8ZuWr6Sz6a77Tzr6kbaqicA1EDXmsC4PK",
  "key21": "2beXhw7fi59cwh3UgrGLRDJ8rSmHGWodyGJxVg8o3FoGLv6CQNeCQkbTqTveaSs9JDTM289MfCa5hadM9e8ddE1T",
  "key22": "36sTGtwoU7BojqRwnriFBXF4DkWWAzSnZvCGV9aqFo4Ju85zsCZaRouWiudhhPqtPqVKHzrmfB4ZRomJFXy2TR5d",
  "key23": "43adQ3WKnxJd3uHuuRFqBAuCuiy32gkQGbRaE2C3Vh4XdLkAc9ZWoSFsjAMA4yRRwMfAd3A1K4f9eUeP2LViHbzW",
  "key24": "5fCF7ee8x7a57cvzTCstycYxskTCqkxgn2hpsoSvfin7uanMqjfSEgWA748QqXA62FVtEafN54vVR19aw7YpbzcZ",
  "key25": "2B7VSA3zC2NTQPWiUvHK9ZXob5q9FGUcTp7cnWwo9n9v5hmGJQg83NWtNfTxiLbZASCNdpdNV8fatfHY9XwE7CFi",
  "key26": "41FmwgG5Q2pjcQ6AMe1VCd6GqCXbRmNhWABxtPxgrews4i2vuS7qmyxghR3HXgbWMT1Yduo26C13h7NKA8tMiXtq",
  "key27": "4jgvjus7w6NVUphprTNZ5ZzukJUGAvbUM8br37PMdF1m4yHZ5FuWrAuhduoBKbwCfFfUEqjmcdu7wDRTazATF5Si",
  "key28": "Lr3PLjttKHcKMc8HyLRAz85vUYy8oQYnwqeM7or1rrTmCvAfEn7MPPFiy6bUsDsB7sbhRteREVep1txssidRFqD",
  "key29": "5GRmr9Yt7Y3zYNe5a3sMaofMX6FRxXB6qRhAfzZB8rXf59PNmHugnxFqoNefQaF6hoxcV4mH2X5Vi2WhTzJefhR9"
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
