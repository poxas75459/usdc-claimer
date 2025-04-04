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
    "5SMFZhUx2uGtE4kJnRS41Akms5Cm1PtiSpRXkBeTy2RVMMH7vyHGgMfFH15VZS7vsjHBeTCRsyLiaZH1TPfs6JiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5zD7o1bUFkhLQLF7AFeNxSSSiMTpGx6FDbTsQyF1WjXeMi6AmayedJC6GZb6o1DUjCpi7VRXuQ3fK13JnvunnF",
  "key1": "3Xaxp12azhypmyTuuG37fsTLr5F7G5aKUqDaVxSxRNBKKorka62rAufny5eG8iBGgPPXc5MCCSFPPQRCmkHVAGvz",
  "key2": "2bC9bHRN9YW9p7tHgzwQ2cSDcXMEzrbDLopj8PfEiuPxyTM8CNx6mC2sdd1Z7MioNBMT5r6Kvd9a8ZTNpHfE2L2Y",
  "key3": "5uh45CUm7efrMrBBhen6S95smRmWbsw5umL9kmZsVaayQfZT15cDiz7q38okqMhLQSEwYnCRVdCT8764LTYJWVEd",
  "key4": "45HhFoW4RJ9UUtKcQpNFBNAF78LHtcfr8haVsL7utTGxwPiyxskz5aQuBRjkQHAHTSaKH153g5wibZj1hUjGKAMX",
  "key5": "2bg2UFj2sB8HEjsVHg4ejkNAa84Uq2YQWcq1FRE4WZEwEFdxePVkWE6JnDizZ1BF3PAxh1k6VUMCLS4WuTk1Vd7G",
  "key6": "3NNaNtxpHrmHXAWo7Cn1NNd9sEPFYB3Ljo6JceuPm8PfvbtkknyK2GvkcwD8CwQgxCg9JVmHt4wmQJhi6kVjWfdz",
  "key7": "4X4JZuJCdPQZ1TUETpP7zuYHujtDwwBtVS4F52ETpmVzbNSqcbS2RVz5WQ9D9Qdq4jcfapNtsMP78WJ8sH75azAi",
  "key8": "3kWcUBgaWNBAStw6WQG34eab4YjwwjAssPeUnexsDKmaauP9ENwqYuNdPF91ADFKcr14NkHdi8tra761r1yb98GP",
  "key9": "3h6oFa94SHGM1EV9NSS1jfg2ZYabUQfDFNUzVUJGBtGmNQnjbX71Hmqe75SL3MoyHhnqTMEMXtRtq3LBZTpHPtRC",
  "key10": "33QydXE9vs8grms1S8FpA7nYMMg2FgBEd4oH6GDZLMPwCxxAeB5Tcu5NGnexBEgChUWHVnPzhGPwgJbegDkp6RRk",
  "key11": "3XMg3vHRzBM72EfFTW2PBjjCCLP7RYoGRASERJJ8QMxJeuMwwduqYi3uou8GHMD1RvMX9kmRX9F6MA5i3Rc19ZMX",
  "key12": "tarqi4nondumBXJUSz7xVDKugkum4phT59XSAmFjETpq9MX7iA5P15aGXAFeidPmiywqnKLmn5gxpSnqC8fQDCa",
  "key13": "5GymFc5GvQzh8uUmvm66ZjeSYGqfKqKepCWvxMFAKwaH1nR1Prz1bGeBWdWwZWZVBa4kPPDkHcKLkgukFYtzsukB",
  "key14": "2B59oU3PJGsCj8ePJtedhiPDQqWFB53EgcRBdDrK9qezRQDYyy3ahdSidaYrJVYVvJwJxE4FjCXoy95ZyVRmfHkD",
  "key15": "4dDUUKadKtCXKGg2V2NfW3kH313qJBKjW6cqqRaey1N1LqgfugfJR4BfTQnxbJV7rNZC2rr2dCZ2C85pW1DwMk7B",
  "key16": "4wDJGX2dQ1MBZGpNxjXvYXw3eppSBc2J5YfsHcAgaufjcZPNdA4ujhUWs8wwLPDNBsdt5DGskcvogvnpNJkV9DXM",
  "key17": "5JhHXhS6qqWqaYQa8ErkYZE2BdXixXYNVFzgZ2ArAhQuKciMQFpXMtUsAAtPksrJYUaTWZLonRjRF9HqYGcWD5FX",
  "key18": "uBD7HmBBxqVee6EtT6Bj7ZHTCHNh523UZJmEgmtR7bSnJ8mtLA5UcEoXekMndT7Ub3KgP9WthSL7MG9o7v8BsPo",
  "key19": "2d5aAzmFLjBq5QjjqwUBoHM4qBcZDs22qEDfUkz4nzsYJaHtwC63MSvcamwyonFd42r84eHiBMEakDxR4fqcvn8a",
  "key20": "5LnBkKX8j68ED8d49mjJoeS58ZwYEkD2oxHnQrZh8Q3GJMvshqg9LAqpZDDbbAvGnYbCo5HS7EkhZh45bjrg4UvL",
  "key21": "5qhCMS6Ef9c3Nu1SFkD3K9iqvrnCxWqpiBzrPMTjQ6UanvMEf9R95FLY8TUouhe7ji2zdsAA5etP9pUqGfFVgrYo",
  "key22": "3U7K1fymohRKT2zQfRXhzTRCvk9HBUfeMnxJDkxc6NmDKRiG1yM9JJ6gn3g7HLBE6y8c2Fp45mmtks3RoaL6ZhYn",
  "key23": "4q3DKk7ttYuc5kHFjcHkb4rXRBRYcbRdHnwKWPjR2uH9dDAQAQQCesUXxpUm8a5UQTR6vpoSntZV8pccNYtjMQJ2",
  "key24": "WHH3edBntb1Egwt2r9ZytMu1fwjUZCrnrKUyusKwaACUYNAFmUNLMjSxu2drMNbUVBWub8h7bRiqeMuP3SarcfQ",
  "key25": "297fW7oqUvb71yW6yo2LhvTdSsimLkDraMrSnCyUDvi5MKWksrnNbYmn9SEX8JCZyjekvbNGWNcLrzrauQn696Us",
  "key26": "3EJYHVXqdMqtFZURHwXth5E3XxLmTdExViWNbg9KWgNkBDKXJ8UahF9io6Fi1R3wG2pij9R9d3yVfptqxAAPtH9Q",
  "key27": "5iyTou1VJ4Mg23sdCtEAiHddzADtGDkaPR2j8F7gmxe4ewsw7wYQxbGZTkRMJ8ATvoYCsUkf2qKmc6rutoZihk3c",
  "key28": "2suiskCpByQrtosiHyaANCJ1RwjVxf18Hm4TH7tsibd17CAJaociHZYSKs9iCB3HmmXjiPPi3N6J9JFARP8Mp9C2"
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
