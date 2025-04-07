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
    "5MAKCMetwq2qvehMVtruVojAdL9PLkWsHRxgJ1QDegGdxS7iL677ktxxvjFANZT5sbCyqwx2qEA5sJnSitjzEPFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZkB9n4C8xb7xnJfdrEr3CnpEnsg3Nhi94CdCC8eKggxZcRjhHDig9f9vQQS1pU67Uamj1TezZPmGp8dJZJstA1g",
  "key1": "5eaxHpMMtEXymHkWbAn22qJTMeTXLcugr6MYUwBNXcZXazXjXvYpTTe5fpo7JyoCmn6ahNUxVs4tn5JtHmP9CHNH",
  "key2": "2eEsN2sRtDQFyPQT8JBDZfdjCQjk9Up7bdGWaGxiTvrrhmaP5AqSP32k992EufnbhJuqDW1HQpBsoU6cLjxqCkRt",
  "key3": "u3JdsN9FhHXzMvhE8LTNgsRU5TeLLWuGamekuL5soVkSa9UiK5MVLUwLtsA3p5W55VJWAjZ7dpd5fxotAGBmuxE",
  "key4": "M8tQyrkrLKozXhBTdYgozgvxujnmwipyjzM22w4iPvt3ZiYGk4fmdM4pC1xuapeAhhpT7qPJX6GMCnztATBrxhM",
  "key5": "5iNeDwxLm9Vqz2BAmAupffXcJgykqaVZfX915BoEf23jEZckkxVmnCGUHDUT5epZ6Hh2kiBxTBk19Ezpevev7qmd",
  "key6": "2ihWUQqW4MVP35AsMEDHuJiqD27UkyD2LxesuYhFjqzuhiXHCRb75UQamQVHn5544GmemUpiBsvcX9soNjdUfrV",
  "key7": "CWdsF8C3Zk1cKeXPDiLVMFRhxWWPDwXh45pMseyfYmxALdRVRQrC96GAGDqCYsMAsAqZs8aX1sRvFaFRmd4dLkq",
  "key8": "3XT2GKGr7dVCAELZibsirNRUKjtUyAnoskxsYcPDbDdcFLFiP6dAuc4jbNgctvYN9DsZDRhhDSe4e5WTxtCtL33R",
  "key9": "452brTEU2uVgoGBDXmtzkmDC6FX6wxNcpeszmyhSWKzBFUgWHAfryBL4qHmmqAhYC8NPuNQ6NdpMTkGJ8tRZkdbV",
  "key10": "PEuTCTMCqM5u471XDU17LA8hPowJakaQYf2HFH2YLAzbCUpCr7X6mVaTLLbyHtN4Kd54aYuyefkQUxPZEc7aztd",
  "key11": "52gzSPSB9LFh1FhWkKFQypFFv68eGvnoSmbi3vbi26E7WMk37yG5j7gSp7a55FiwoHh43UQGDnkvW58dZPsdt4Fp",
  "key12": "gTfz6RdMoe69F8Ygu397gZtFGYHXr2savVzVKMZWgkgEJzNS8tcc3eoPgEjtSyZdoRaRgBKqvtmci6A2a5Ut4AD",
  "key13": "54hZahvDXSHxFyaFjrbVxQ5BMRMgmkeXKsqxzSrxiNYLx3VRNiJ43wuKRTAR2LoQPLmjX4aZYA3o3ECk7NVSfmvn",
  "key14": "4zMZ1UCj4vSdPCL7dLAhHWnrvtSE2hMresXxeKF4gVgEkCY5wwDmPAMLDSJQYbgXtfqVy7B6PiFswhhbAD3NfXDS",
  "key15": "4JrCjTsoqcQ7qo1MVy4H9fqLwLgtWZ236eLK3iqbc2EqRGEt6dKYcgELTs5acq9F6UGLFmndRRwePSDGg6c3K4T3",
  "key16": "37TEBEuUzhHwzVU2r42ehQNoKpjDceDQbXdbp9Qs2CtqR1iRo8iDubnQyjhXgREydbm7Z6VD74WwDofvCcPo8rd9",
  "key17": "3nR9x6WUN6XuyakR1kkDSxKe6GqonKdRxswEr48TxMs7UM3f9Jch7ofBvdUTsEFgDxxZXK8kbzunJTYmpv4JYMEn",
  "key18": "KPaEietggfxw3GStGVbYpU1gN5fFgfc6SJThERZp1dPWhyFvb9rEEZyokMAKmxCgM9h9dCoMPA54c6d2ft7EGCn",
  "key19": "5AFHCKUUsuBmhtkZE8GbTp68uMAtA1quyDgFWF6wmHwj8gTaS1kFButpAGwQrMWMLqsPzfh1pJbwttCWXPi6Rgu4",
  "key20": "28zqsDuJji4FMhq4bawyFdxukiF8aMxp9ofmX9Lp1kzdDrGQgrW9AFY3MdUYS9iTKtL88o6jCdwGLE9kfq2xuqQn",
  "key21": "rVC6BtcQQfKLFxD6b1YKL15mJ6QmcfC62d6r8dfwQAzAFHwx3Nma6y9pxdJouT95d1Pu4hZuJkcazVBpNfWoFyq",
  "key22": "3Emjk5sCobFafGyHQiibwH9xB4NxQ7sfwChXh7phvuSxbipkvgi9GTsP1ZEAyNQnioDt5HEUoD79BxYJWuGybC2V",
  "key23": "3GLZVa3dDJYeowx8C7BX1hVmBuD6kARHSBjk62D6hGPo3XwGtqVgsk6CXgsTmHKzQHGYDLXZhuArfrKef3HFXxSS",
  "key24": "2RTvP7zYae5XdV5DgneNV4GsrA6UV37Lxv1g8b5KPHYf9eZdbvbnuGmjUed1UcGh3B5CsZC1vk73RaBZsKg4fwE",
  "key25": "6BbwkvZZvLJeSf1m9RdS1SK9x7YGYYeXVPe1abz9izZm5YEDLSm9wcUnnSkRP5sJQYYgGMN3WqdBNJw8ZYsaCkX",
  "key26": "5esjwiDsCVx5VsoHRihr9QhweH98YkLHTcZa6VMhP77pPvT9QZJsMhbmcb53zRb49RqYNTpUXJmnkQ3TpV2bLBKh",
  "key27": "42VogtoGQAnxyVbD33NSpFuyNxLGSEYmvdv9gums7m5CR9jUUBKhphzVBMv8MgiXydUwnRQiTmjWjsStv5b8oCq4",
  "key28": "2hruNEXxs19TkVtVx4UyC8f98J2firAZP4CUhEo2J2VkSvWPCM6J5Knj8ztP7565WN9T71pyhGnr3gX74RnFjzUz",
  "key29": "9CqE4aNwzUuBJciSg1eiSyCAPunzdZJmCgbrD7xHtZiX7NfxvTFwyhb4hEkSTYtMfqptLwtp6w6wnYpeuHX8zSL",
  "key30": "3xWn72T5E2ESK2MTe2q3KtY7XyKnrNmXJNqifPRx3yVVDEHPkPPoy2gP3VxNAjwPGkNLU9voSQAET8bBhrLJjkLP"
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
