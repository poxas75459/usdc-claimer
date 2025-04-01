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
    "4MMtWCLwmg7DpL8yvEwJnFXYZLjQtCjgfDphxtnpNDeebtwysvJb7n35AhiBPYBYZTKWi8y2fbZmSbt9ubfxJcsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LsYzmfcypCxBUL8Leupk4GUZYEZatL2L5dgHf4Uat8pWSYpwa3kL5HPixpQ1NH9LCBD7GkWZCbn3rvSKL6R8gB4",
  "key1": "5zuZLRbF484YKRsTTtNfcVyeAoX2FiEzF1GBvJvvZ58jKR3HQsVCVtZKszbkeyY8FmUcebr1twucjTYemziZ18pq",
  "key2": "3Sai6GirKjzmpy9xAfpinRH6qieG9W5GQYcNU6q6xvPSSqCHA6pBJZbDWjuuGNjiP2y5wkt9jsZ36ix2yRGhSq6c",
  "key3": "4WJyKBjiK5sxfTPsXpruWNoRRfJk5WS4GC59wyf5P63yNkNE7W3Q5gonE8Qmhz9j8G4DLrZrjjvTf2TTfqEz9QpU",
  "key4": "2N2RitduDnU6eLkwsncEnfzpqMbzrqWVnJn2TGuRcHdCFkZenMHFz2biatL1LMXiwweDmjwXHNFNCFqg3wvb3tz6",
  "key5": "4KywmRzoXoyGKHx7TgVag163SY4qEPeUNGdjsvvS5T1hfaiMMJkJG3zDPbYYREQMPNk26gPpiKHjSrb9TpHQuxQD",
  "key6": "wivwQm2VoiDH911Ya3yLfgXmxg2T5FxaqZQRXPCrKaPnjgpbbbwJnU6vaRcHB1JuHyR4vyRrT3Mt1CBdfHkGM8Z",
  "key7": "2vUstDnnhuwWDsXQ6VFNwt7gHKFd5d22xEMQVPFMtRQY5Y4FZVqiUwMr8fTzNLi8BkCgKB22VPmRwHad52footgX",
  "key8": "cvfHGUK2AjwE9cKMRnUZKvTJJxFhEYdisQJTonwTNPq5tSyqruLEkCwr1ZB6X9nhcHxm2Exf8iBLxAUUQmsBx5U",
  "key9": "5nG9ySxmTN5bDD6Mqe851PPW4SomTVnqPA5bKP2ouTNwRJ6enxUSSrJV2ppKhzM6UhodT9NvbbYvErpGQrWfwWvr",
  "key10": "3nx2nSGHXYykjo3kmk8AwbUNSavEnVSmxjmYdPRiVpX4SZ7GCsTbfGdmyP833G52UKmRgNXq5dpgtL1QwfzoxPfy",
  "key11": "ZT8PR6YoZ7GEPmZrFHFmua3ATSRpduevPUfvE26ruuLsrwraW6C12tbQPUAD9L9GkG2PACC2HKZedHDcyKsHo9K",
  "key12": "4tWwtQnDFwpyY6cmzZRYoUbfndTjyyzTF5d5impWGzDiHsbAqxaFUXmy3fWP4MkAVTuJmPTY1Scdku5c5aW21Qhr",
  "key13": "5DSgeK1MHqUBaoJZXYDtWoXQEJX7M61iaeGaarNVpRvqmfjnCT5PtAw7gozpDtMj5RhFdKV71c8G8bY82JDG37vt",
  "key14": "3jcPEBMDifjYsdQb8UAAbAA5sCF2XtCB2axXsbj2YzWtNbcmr3tkCsbtBSfynrqLNhr9XqqZUh4XozcMRr7Hes7G",
  "key15": "2YJMx2KwDEnQVhcvPC2JvCU4jcVeA5kN1pn3PX963KEzo4aC3WAB1Gycr5saYWeJi6t3na28TBn6nbtVGhzR6PKu",
  "key16": "SwDvy2qEFzcNijtpY4P5uVvaqELn5iLqJExtAUAvJtDmVnj6jpNvF2XHTyo3zaESi1StWUAEri4NFunT1Y2TAzM",
  "key17": "4AKobgMzqcHP783kngr9JsiWkn7PP589VqzsmbQaFRuum2JACgu9NzKJdnjH5puMkuymg4RgBemZfYNfAZU9ouPS",
  "key18": "3VnoRHtHuvz39fNSx23swRiNuTuwyLjo8wKf8sbxhE9diNHn9doFkRUvgSHKMwgNgeYNi9zvbsmw48NjqhZN5ANn",
  "key19": "5mo86NLeMu7ZHZqtnDG5eu1Vk84CJSHWfWw3LtUxxDFWYNKgAaMHT9hjteoKMv91zAMPpXs8LyfsVfeA5rzkVY8m",
  "key20": "5Ya8mXfRN4pQQCCDFyo7AEeYh63eTpzH7qSBtqryDbFzs23Vh3LimWEd4j54ytB55csJHZtQzUmZgYgcTJAzsdwD",
  "key21": "4NzAqqdtmRyotnh8F9GwWaSZ4JwLoQKC6jztYkfs7wv3DMAZWW21W7G1T1L7VVoq38gxbimH4DQWP3Tt3RYkgdjp",
  "key22": "25HM5DkC6ihrvYFzgKpT5i6CtGTdpGy2tGyKbhg86ryTWm2EKXWw9gbF2NYhz4kPz3WHzjfav6jtyEFDDE1KPf7C",
  "key23": "Sg8a9AUEdtBChZ6d4rukzsB6G92oZPX8qJM9imjiZDDFqFNhw1CBYtPwL4ndrdLsTaCNcW4Ra6zQUcAnYdbqri5",
  "key24": "2aF3AuTcv5qFLATz63c5ie3gvW4KhpKbDpZMD34xT3ApZbnaXD3X5swjCiQDCARrAKXsH8R7puZztXcPCNJ6uYpi",
  "key25": "3k3NHjQHshoynTuo6oyxsUdLHW2BftEzzkuRbRB6oSidknUCm2FS5fRn9VLfyVnFWVLN26JGratWsqgWiHCsFFxo",
  "key26": "31DXUXYKHJQUCAMF9BhY4biH4j6pPWoRe4dYsHfHz2CYvJYNMjpD1kDsqLzNVfHv3FEQZPTtiMWmjYdpL153JDLG",
  "key27": "3m1j7yjA6BQXoSMBMPjBDmB6JMRd9RbLCsbAxsGka2Majpc6xFkq4aQk3Et3z3sWHQVA5Rp6PfCNgcsi4cFdPyXb",
  "key28": "3aWoVm2qPR3SniTLsBCkBTqzVTgeYoM61tg84eqYqcLjp162pttfVHTbkaVVhus9pp14Wc3aZNsKX8ovs1x3kbbX",
  "key29": "VgjdidPMyRkzAwjhqkN8PNEfW859Ad6Y7foA5xpbvzGGfWdkfsmb55HJwbLTXcs4TVY6NdNp2GxyRZLPm1rmBfo",
  "key30": "4xMvP9aS5sbRmTfkKUz9864UvqreCCn5xfd9UFCXtyTP8cjqW5PrxzGh1dt3wm17wQfFiX9vS5hF2JVWKPhbyhTh",
  "key31": "NfEGBv2tgS7MfMCpVx7zyUHTG7795mDqR56vKRaGxp2iezZqVpKwAPxsTtAtRtkK5zgMeWG7Xw5Ps7TpSwnkyUw"
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
