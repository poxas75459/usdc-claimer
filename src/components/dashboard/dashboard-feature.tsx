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
    "2o4EqN4pJomNpYPvtRZrT7oHcT9ygbvU6FwYzqZbbBTCrpnVgJjUKJnPhyDKi3ZGcYgaUPLpeU56FGm75aDeLdh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtdsFFzjDZwm9GsQRD1r8XFwhka6czWCA2vJWXo99q9sqXbs9jodtjHCuvfvdkp8YCjHpTMnS24qQcJBA86ArZP",
  "key1": "5r4pek3CqXgFiTsx9zFYhXePFoiHE157rWXtxwZqfMYZ4s5znzUmA8opCGTNFgwbuSbYKkCYfvnFfQv6e5wReDUk",
  "key2": "37ZgixoiXbWnNgD63FnSvKdmxTpaDXYdtxRcuDpAEbAAi63Qr49gcqPPnoVz8ssL1RKVrfjJJMAXevqpMjgNoiHG",
  "key3": "2nsfumrSiMSehpru96QxSbJGw1aP9tzMaaWv2U12C3SARK6NGEDkZu3iMQW416NwpXGsnG4K1ts3tuBATkwh2MSV",
  "key4": "5CRgdx3CNHQU6UpqMNGmvx31cGBf5CU3HcmWwcKVWUtoZpcf5YPkwbKJsUET8MGkJ7KhfGLQM9ubbfxqLPdBBTrP",
  "key5": "3C2VbtNvJPkcpReEyAcHMYi84on9wP42bP23piCS4jMRAiaMv8BGhiaEfL5xGv4LqrWUBP1foPhrYUEFKrCPmZ7C",
  "key6": "2p6XL7x5iZPhyqgJUDf777DvZTQvzhd46VAXv9e9N5oBz4MiFgDEP69rwsvEDBcCnLmCX59wEoN3ecU1iAz7o9aT",
  "key7": "587YFD24QxCwn4AyhLGej7q1E3bDQ4PUrCRPFkPMGx35aNvXKG3QtzhSPZg8KpQzRTqmqDBp25c3HqFwQNm5KoSD",
  "key8": "ANih2vW2Rb5fBgTfSMyboJro4YJaANgUrF7W9DxsxNZn3Zps69AekpoXuSkmuSiqzadrHwkNoBYpmx6pgehxDNH",
  "key9": "5S43kGNWT1W3qE4fhwAPpyJwtVBHjcAsJmMcpHssa3thyXV6GiB4fLAo34NpaoAQgK1oBbVoArYPiStxBrt3cqSY",
  "key10": "46mQZb4o7c2ivQJwxwXQBsyCiBkLr7mAJ26KJWQsyr8EFb6YA1NmwBNx4VsHPBJSiiJUw24a6XEpA5emedtpMGv3",
  "key11": "2PUFcn5x3sKA8iqps1sFwCN7ZQSrJiJg8wLQXutwet3jCHL8U5QE9pGJj9drbXXS4krWME2gf1JAQk9RmUVo2iT4",
  "key12": "59QwsrGciTPRMoLAQZFX1cPiR7pitwY3MieuiScJCNePDrTzGvao45gFgZ21if4ULCC5bRev3YcisNcbBs4D8PST",
  "key13": "4gbDbLcYFbNLxQwEtXNovwt45hWouNeyBA1mjWP2qbhgUUcN73vNT9eiy4KcF4zH1uxP5fp195MiaoHjzkcAhiPq",
  "key14": "5YDk2K3c8M7fdZmJUKJUtS3smHMFDDniGKqdPqAUyPAK1FugHrnKuNTou8nagfE6GWWxEr4AGtrvroHc1bKAeo76",
  "key15": "46CNVXM1xdK5xcRku916AFJz2dpaSsqwjY2M6FrRhNm3SX9rGVGSBzt1dE3dYKdw3j15JgGgdpRZZGECbq7n5TWr",
  "key16": "4t84u2gUW2piUTz3BKmBjEhHKPkHQ3wwVCLbagqkVn24KRB3KAUM896fvek2sA6xZaV2HYZ93LCeHWZ1d6HuoT4J",
  "key17": "nJhQtoHZ9MxZqEQwDskaKwp5yFyUN8ZYt4XmrJvSjcwWUgptF6L5QV9M73ss8Ae9SJTVfg9DdHt18R2o9z6A4WY",
  "key18": "eLayK3guBrXJq5WdQukTSWPGqmCFk32PqJ5X2UYkMXDYkfZZqvYXAhiXcny9oedUQzuYSF4y5SsaJjW8ReRKteh",
  "key19": "5VMxrwwa8oFiZGSrLcAGhGmCpVfMCTZVRgvMqvkoEpHAX8BM1NtZSmVKf6djGiSErQjknBC6hLPHPSxXbSNaGcjP",
  "key20": "5YPheqbgbRx5WeMUdcC9VE8Hj3H6iszpvdpH6mBmUo8kGvRbr1dXJipU1S6EstUnNr1sRrqvahfc3FidHW21wpzV",
  "key21": "RGr7M95NL89KNh154stKubxS8hzsaigE9ZvEcLYm2G3y8pmVRKDdfVZW81ccW9Xv5ufgJhCAGFETm8itfceBEJq",
  "key22": "56mNCihHzfM2ENhANp7Xae434L5Z2RUpumULW873AayUbh5SnjLk2NZvpHGMhxTxASna58VkhLyF8abVAzsseGqQ",
  "key23": "24i4fe1ZiKiBJPQCJC2gKzK9j2VQ4Ziiq9yaDmck8EwBu6vkrDLtKzRCF16G1ciy3LNcG2f8VT64rFtDJWNpc32S",
  "key24": "2Huo1FEs5uezMXUeDooLcQn3WpBbjxCQsPutnVCHDyoZReY1E8X76JVSvn5b8HCUU9h895NnVRGaua6YG1xqLtR4",
  "key25": "33M1b3Ek5Yta9b5JPPaoP5QnXp3AbQ7S3bW8n9iAKNSmBeiRDUVCWxfd9rAXEGBawtAwXfz1PHuu2CmLMWMW3jjV",
  "key26": "2oCXRNajxdxVNFGYHYXxrba3RNBE9s6856QhAK8tk7xgwrAAjdmp6T188UfPwt2Y7ZXosiqGMCVDoc3irWyPf9pg",
  "key27": "4HRMrmCcetZgLgEUczvUzd1uUSG2cUN4X918CJ3fz2pqCkc9BbYzmj6xGmtopDzpqW73Xb4jugpQFJD3aYgQqu1X",
  "key28": "2wJFRSfMq3fUMnsDdcZBRn9qhwsmEhEeCvHWbAVqVevvAyaREJAp8NC2aUF3GiZgdTnkyW9SFWzcRJqvHpwQ41zh",
  "key29": "4BYMCUF1RPPwdHBeTyTtzdWUQvxaTMNw2A2H6BbdoCcaLw5t9Gy1KG6n7cne9QBZfSgMWLQzmXV1Gz4cT99PQmz5",
  "key30": "21ZRoGcHRmESQB8sC6kZAhgGSvH5DYtjZb9crdCuNvXkubaCzbG98p1MngYjzNiTNJnCoWRfjwFegL3UWSoGzdrR",
  "key31": "uRcbfpq9jDzRWLKRzMe3ZGRqtZwCpfH26zR9aFEhnzdVxSttmrgEWyma6sm4MjCWhWpdEfKMWh8zUrux1yBFGp1",
  "key32": "5FWwjm9H4hk9RTVZ2W7TZQcKaAXupz2z4S7QKh36hgJnRWKpq2W7jAgKNxamtesdRz8mrEA7FtkpP5uq8iSEfrqB"
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
