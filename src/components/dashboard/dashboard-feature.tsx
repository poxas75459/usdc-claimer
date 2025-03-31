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
    "KJESsXXvyhDXydB8Gh4dQLNP5gHeMJxPDWedtX8axzri8fpdYiAyT2jfYm5cgKvmHPRZetpUBzHHXPAXA11ArYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298HkQ1J69ZLzt6UV4X6gfqxKsVMtGR2zVvfMVmzc1CrrkqdBvcULeLjgtiZK35qo2N1FoDMzZeSVbAseyjnq68r",
  "key1": "Ugia2oEiYcTKdZpu72Ft4uULiA8zMuDfR8T9PJUgGfH9LZi7Czc2y5fbGLRhzhrYW1YVBg5ojHa25g5C4axKaZL",
  "key2": "4Lfhuf8wsdHhSM2NRuspfwGxJvXZH92e8UhvFeWukK4TMez4Rfv5uuhNmyc8agytexHPPz5BC5gFeTvcAjxfj79w",
  "key3": "4XyZsjcTsxDDCKHuzCsw6jVH9QMvtwE3hZGSVTJzLEZUyhbb6ju2yLaWB9X3jRy5KC2pUi2j57V3AMZo7KY47KsN",
  "key4": "3NikJ9efXs1vKPUezphknmpVYMuBxCS2DBaXEnYwnNkeyxPnTFg5SdtGTC46Hfh8duZ45YwHJsPWogxtG9GJ15LK",
  "key5": "c4J47Yu1LqsATM4nYp9kkvuB5o7WxyrXUc42yNTPsNxxptZe5sh973rA5ydABrzHNzzkmjbwi7oFpW7yrGvMTQW",
  "key6": "5Mgt2ofNaVsJEAy9J4ToumXGkDtDAtVXkXxDcxV2mXrM4QVrZNa4MuKxFL1Soe4wz5NC6xBUhw4EGS1toxAScb6H",
  "key7": "5ParqRtvU3drBzCemZ1GrGVBKh39awmrE1eqMSZ4nZZGZLiEdpTcKzN5gn4UP3oi3CCQ1XHpYHFctYzjXvBMJ95e",
  "key8": "fL62o6DcaGCBiAAUxTcdLirExZ82QByBFmUjbWwuw1yVddxCwq5C4WGRFFBG7kjM6UJkenH7qCkN11rM35hvAsq",
  "key9": "4HwHo2pLfZv7hR9DbMqKwWT7LChuuaYdagjoBWzxzMEoYd3pRJUaYgJRKBdQqsBFPp1SzjrEXS6bEUx6Zq1TCnmP",
  "key10": "4LgyQmnoXAcAv9eETR3L4L4Nmer6M4oZVZbh4PWw1g9WWTzsxbYq2pDwUgud6MWQFh9VWZQ1nEVUijAgMVAz6EGD",
  "key11": "JvuN7HqhTcLKB7DFyviEFhZHx7LhVdKdWHAAsaEecJKnQqCeGEXiKyUT9ciUUsPgcqUX7LWbAjCkjuW11v5uKEy",
  "key12": "658mdJeHs5pxrA58aTc5dEcx8xbBEVtdfxyGCWuGFoy7kND4uHtyfWHsYrgyvUCvSSvicAZzRJGsJVNgVxrTDMWN",
  "key13": "31g8RUJqQ7rk9eEEC56nuiaZnEQjWQuBdg3kSvNHno8csLz9xBVYr3TVZWzcSDu5kskztKe7epsrzU5B35c3sZaz",
  "key14": "5aQtbU3VPKNGzkmx4yj59Yp4aVMcHuWEs4UyGGfr62vdcJYaB9qCnXU9LQAn1pUnxisJKiA2kycAkVCkFQscBhvX",
  "key15": "3tCL57hAwPTBBfDd2eUBBUwVPVAyBdaupozEEeUpASx2mVrnKSMRTn5f3gWd1G3mzd56HLGyJJNffTAj93tensAq",
  "key16": "GJUJm5JZGmT7vQsVPUgVdf2Zm3kP5Ztvva7AAGU3wc8X46jQ7oKtv92P4UgKmyJ9KBJPvMwbB1hvYZLq12YbdWq",
  "key17": "5Ev7zb4kQ3aGGQiE8cRa6GqF1njYowmbhHHY4skgQEGH1mwSaNC4txHHB1eAyxDvCcEN4ep2gW3Zjt8etz6wMczk",
  "key18": "4KBW5EzaFAzFVGN4c1RDWArB8wTxyRhzdCsr8GskmLfPmxanQewDgVTUCN8Aw7GXFYRtwXKYLs2dzUCfRoDdbQtD",
  "key19": "59xBtcdzQNTxJoEVudBJgFeg2Z3tjDp61ZTnUQtpb4kcyTFqbBuJh1fUbefe49JnkXExCDpqLgKUZn6iVuSUkMgM",
  "key20": "4yKitESVpvTy2vNiH79ujVk2Bi5nKDPo6E6LQ44cUB9MKoLpXwCtX9FSPmEpdq6gxmBRYQaps4Y6kzrafMmSRyvX",
  "key21": "LZ5rjXPZVP8CvDaV1wgmEdmg2fd9SHSe2B6r3nM2w6BNcuLKHBPecrnx1rqZ3r7nPhpNLHGsdQqUcDtKete2q9M",
  "key22": "2bcEEnj9W3SHj2cstMWjeZN5cPSLvhKTS1dMosQF9CisQWo1McyUdfLqCY2uEZcRu5VCnURYFtMbVt7UFLX5SouB",
  "key23": "23yoguyWRiyACzZZTWDZpmczFVR7V5mmCfMp1k1B2D57qiAmupUyg3NYNs5hfP7rTJRdm5htkf8ERqZ9tmxs317V",
  "key24": "3CzpgA12QjKc7bmpRfqu7XgyuhUjBEXFzbozrBEgpEZWmp6c8yC7FqJcwCAwwxrYPcNagGJmuQmxRDpY7DzDZJDB",
  "key25": "2PPmAQE4A436dFEmunK2x8Ksb8wfHP75egMUaNtMzmYMJR7DBDgeXrhMrMbZBhYXoUP49C76jyTfBTMuTavSA8Rn"
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
