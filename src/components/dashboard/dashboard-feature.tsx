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
    "24RFXYTJZQ6NZaPM6dsNKTzfSh5yYHybf9uocoL1cuuE1zi5oJPRFbyvACKjQqsg52t18Y7wSoipgEvhavZnAaQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owgnQWhE9yeBxX4yN2sKaf26Ha612JkmmiA9ee8LmdKFcZr8JsG22DiZXfMWPEkykH5ESFT67q6SEgVSCC1MwdM",
  "key1": "3RdigSaUDgfhJfX46ZsqjitmgeEgWCo9pVUY7UNTkzdxYJfDBH5Ww5as5ruscfrPQYF5853iQdasXSXiB39rkrtw",
  "key2": "PPuRfiJd3AVTa4BgFcHevzzxyozF8GcD6tWvPYfEiuPHXv21KSSUZmVC7ZskPT1j4b98pXoCPMje8Egug7mLK1U",
  "key3": "2Lt2GCZeY5HJn4zgUMUxFeFvpJUCPAneAwhodknN1uwtQTiD9d34UGoGkdkTHJfWA4SVemEhfUEmCUTekdcJqa1D",
  "key4": "5wL8xj5LdVbjitU4qvBFEy4Ab2CL6HizF6Z8fNKXrWBWHufaBwxCTMrpzYh7dmKJupFDUSSpGyPLVtDCptMm1EMv",
  "key5": "43h4QSNo4x1UQUx8EcZmWNTCn28QtEPvRuHBVv1HDeFwjhETBwwKVfWgQ2mUWeYyLjEtmcmN4RhRNAu4nzbyR6ro",
  "key6": "5gj3NSDwHcc44zJbDGVRJ1X42e84VZKRPBLKvDPKKxH67kXaZm7t5YBiubAfsP5D7vYM7gr4sn2HsD53HrQHMYKC",
  "key7": "2D5wkTJ7oVMk3d5S1Qintajskmq7oNRmLQpGjD8K5xxjrhGJFaUgCsNrBuTqrW4sxHeaJ9HX4NKoEgRKke1kpdxc",
  "key8": "JCFvazPZE2zsVgpDJTkiZ8HgJ3iY1LBp1BHzhHauf3WdgAUvkJyrWD9G11dVeqdqSAmrFaVeZy9hMtKjrjuPAnb",
  "key9": "2L9CJF3j9YkRa5tUi8wC6eS2wSpUAQbZAyNSojK2Dw7NHaTHJEVXimVHDJnp4JdCmFvVqfHFCsjZz9YPp52k8syb",
  "key10": "4dd2RUJWGzyDv5Kpq2z98ugQAzQxhhJpyGpfeCVNYrQDLnKXboFfGFTVvumf6eCnsBuNa3NtZ5674raiZtGkAMoG",
  "key11": "2RTFfNFvss9siVoBhNJ6q3jgWvpprKa9i82P4e15L7dkWza8wruz9vPQ3HsD8hvCUMyuPhuRLpo9WJRkTw576uvj",
  "key12": "x9WmVfmZuzYvBAv2we37viorTciJRvogetGTZXyoVVeLS2itiYSbhHHQiTuSrfbf8V6qJ2E2eDL1Y19KVfzdXpS",
  "key13": "2xPyMZ1pFtMjTyLP1BtwcitPVtzuQT5vqJgfKhuyegsn25Co6XniWfgUgnqD9zQALJgaNMCBrLhE6bfAXKwwkqzs",
  "key14": "TophViiAW4SpZpRQAYSCSJKwmhHrJVf5PB8SSkPMg54ce8GvEQdpvhaGHADS1Mcegf3EVESaCxprFxJPLzkdxmB",
  "key15": "2kTdxmrxwozD4EbZDVPYLMyof8SVnRHCH7g6jRvjwsfVV67zorkMa4szqjrBWSzbU8yJNFbFhDPgi4Jv9dbzcygx",
  "key16": "3NeSWYjUHemMszimptwxQHjmkXLgDyx9eNkpAYtxZpGTrxbiSjfepsoYc2a4XYsnX4RDuQwBAx4VZTo2jx1ySM7z",
  "key17": "7xnWWW6aybJZyJUWegXMWSEiSR3sS4EtEKbA7YTHoKL4i9wWpSZmgHghF1R7PCzKyugmfxrqBxJUpujuj2zj847",
  "key18": "2MwDAcNZQewHXuFqrnKaA5noEFgXgYaNd6VpjqczCfnVNzfFtKRiN8WfiVqizD4KC1cfBMKLLzYwh9QBSJFGfoq3",
  "key19": "UftGEVWSgE4UUJheb4RbSn8EvY7s2sbVPFA4Sn5MRgod2mzMduK63B2rD4MU3tJdKyCXrW34RBoxKe6yMv9Qwco",
  "key20": "44LsTVJ46N8yWLRUbcUkVfPownspVkD2KckuVnnqHBCsnyVn23Jv9YFZRRuWDP3MEb2rcbdzgmgrv9yCbDJH7wtw",
  "key21": "2CgQwfbMA6vLRJZg6daRsVr2NfcVDaP4Ren7jpbGbXAQXjfetZkkYMcj3uLLXtMhBv2AvymcjPhDZNaMNLo9njNT",
  "key22": "4oLjHA4HTqqe5DcrbWmgHNBEU7AtjK2thNyDQw9iCWuYCsNBkQDKFvjXeqvqjFNdjcnn5GAyrE1LwbRV8QUaDoGk",
  "key23": "y2NrKEPwdsgU1Ksgfxim7tZhtUiHqxDuiGuC2qDZbiPDXRL85LP8WnimAyuCsHN2wr6QNDGEgWj94yF2YNzyu2N",
  "key24": "4mhDYqLRBvFFU5ekRGscPz7anUzwRzATKZmxTovKdpndT9NLkznE5J1eqN8e4o4Wcc4qJyXKJapiKz84qcqVqZDj",
  "key25": "2U3SmZHqwqw89nJGwTsawRRjNxXaaGdkHhA2yKdm8bHeWKa2ee73DoTwAKUpnFK9xNmTjgpqzvgRWVyXXnshapzq",
  "key26": "4nzqKdwB6UPCYommxWLuzBx89UXHTeBRfTajs58zLns47AjyvihWRhFBnXpxKSwZTrP9a2Hu3L5B3HyU9RtaxtFy",
  "key27": "5Uz1Sr9bzQyxSZHSsEhzBbmwsK6u57ibbhHtLujgbyjEXesGTddJWLWZ3jYLhc1dGWvtXcAcWKeHoHHGQxh9gsSe",
  "key28": "5RZbMK4jWps4UrfrTK57uW16c2T33zn5KJiR8mFiCcA5hfFuMSiE3SzojEDKDXVCTET3BKan5RCpzRyzxKLjNvVk",
  "key29": "2QijV7oA86i3mNis5BmeL8LHtid49H12qxm2f9s9iZVLtgXaELqUQMpcsdv3airKL1PAR6xCWZnjD18YfXiyhFZt",
  "key30": "48BmA8jucpEcaCW9soAFfVomwHSFFwKkBUbKHWaijeeDEamX42jdzwjyaGRWCxfQSgA3iP6RdhczA6pThGp9nMHj",
  "key31": "3xXw3gkJ9zFNwfgnxvEk7MQZCmrqXeWNixZMd2PwPNyzQoNTmQebp1KS1PWcgEPn9mwq5WukpwnihVUkJbSezMJC"
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
