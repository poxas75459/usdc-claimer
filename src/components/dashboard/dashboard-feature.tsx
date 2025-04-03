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
    "texuCDPqso1iw9EAd21h1hbHknQXuaYDufNJk9X9Z25kPKbvRU7Z4v9ZjQMnvYSkoRaAkPGhzSuiZhEiofvYPBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfisqNZ889qr9DiiJ9sCLRW4tWsFo8JcpEn5m9NvMtLjwDr2iK7GDmngrC7HMKqRxWjr6TS3UH3PXjNa8UP9NGc",
  "key1": "3dFsb2sK1LweRb5Z1UpTE35aTYXbbay56UEArv5t9ZSeM5VdUKMi2rLgPcQ8L2fTtsyxUphTPviyJjRershYStoD",
  "key2": "36gZsPUv528y4uhgzfMAiVDcPDFJismKjsgcaVrvYmpvwBZfyjmrXpZS71K6reFc2JB8HT4ZZXydWGBdC3k9pYBy",
  "key3": "EPstBdZ1eWSoybSsVXXPE8EfS5aviX9soE4d8VFwsVwUedodqS6Vguyw1hfadrQTMfzd5SNG8co6QJf8fGxfApp",
  "key4": "588ehKpVV1wtuwTXRkMY6eeQ5wk7WnsySaoyrSUGEvyywMZS5WF372G6u8NCNNLksCBxTwKVkapUUTZRwFS5xnyS",
  "key5": "38AmKE1orwAT3UA53sksJYHehwqXXMs7jtHcFw6Pk1vt9KEFekpzA5bQzLFtQh2CusZBPf5TdX9XGnnr4vNhE2PH",
  "key6": "e9zaTT1aCb4xXQtTzBNkeWt3oLTFGniirQv2iBnjuvSYf634crZipRtwkLtnLxgdYb5GNbDtmm9pA5SjYBHFH2q",
  "key7": "3Dm1aaom3bJkjmZzejKoMjVYf4vwfmurA4XTFv5mmQKCMDwPJ1hN3o1DZo1XA5YzwKEzTj6cpBGd3hPYn5NXsfZF",
  "key8": "a1CmYqxC7Bp4kMaN2yR6bsxz5im1U9AmV6f72bmyVLoABtq48XRTLUazJi4GErcmnXhBXQZm823qUjo2ors6YEe",
  "key9": "3B6YutNWWwVUqsKzXyJpknHswL2U1c3EpmpAYN6HU2SdQdquvEoVjuUd5uWqn3sQ8ioko6eA3i8M4iYWAAMKvwAt",
  "key10": "KC1JAmckH3eERFex2rH5KHLE2GVzjrGDaKZho4ngfpXtPTiXQTmsnUVGCRVUEQmqa8HoRb31hexesKHocGDc3ZF",
  "key11": "4FbgoyUCN7DenDThFfKgfYBVFuAQBgrQA7iqeqBo6U2ptr1gDLkmW1RP5ZUoDpzJDXCb2upd1Tnx4SbWuaKtXHot",
  "key12": "7g8dQyzXzaWijhTWp7r612dPayFvCLjuhYmNsgYQjnFqSHW5SKrvdSqMg7PtRGaAyvweEpfFNVcwsNacgmKzrrM",
  "key13": "2PD56eLHi7ULf33RySPpEJdaxhinrP1NjaMpMhaBhTQdZaPCviSx2rXQ2diWFiSgrgsmLd5dK4TV3DfCjsMKnZHw",
  "key14": "3BCt7pT3ogEhnZA31YDxcxyLUhMLZ392hUWpyoodM1ZvwurDMox2hVLFh5QxjW5KA4tmWmQAXdXs3EW4TbquUej5",
  "key15": "5nV42BYqLaVoVEuQeBvoo1m1aRAeCZgJ8UJBkosDGkkLLWm7XE5zuKtZWbJAgWx9DSSjEw8BrxKmuzQXWn6yHMGK",
  "key16": "38Zv2grEYb6tyswpwisFH8weyXVM9an66Z8QEtT3ijEPx8eyN3N1mEZLAzBAFEsVZV8U1dAVCWusy6dE71EvGJS2",
  "key17": "3T8aCGoyDTTigUWsSiF8tCFSVTuNhGdQKUCK87goZhSkhae7DkRmCX7k3FDFGgQSFzPLYwEJvofuDTZjrKY2GvtL",
  "key18": "58mCyYYwab8zVtPorkFAaP9ZhNjMyEriWiD6gBRfEsfsn5cEqisyfWTrotpFTwWA4AnCyuXYHEb1cfhHypQUY61Y",
  "key19": "2nfX7D6CehSgYuWhd1t2gQAwDHNHeytuevk7E6xVxRkmSSoRwYqUvxtvNCERqUYQhhvnmGidyFU2uAkCacXMMCw2",
  "key20": "2rGPpxnhezwcq7c8UovaZnnNwtdzwA5Fd29oSgU9Yw4oVzxNaqmNQC75DiGAqCQabRU8k7o9hwddewsC3wnd5sPA",
  "key21": "2cFWRfiQqF6dSsWxK5hiq9zAmEVFwmLqHH58iFHNbh8KAnVnhqvz9i2GZnTapvJiHwY6ep13FMbVpMkB9Ry35CW6",
  "key22": "46Rf2HD9oVQrhWjKsuQgp4pEgUnBo9HCbboDmiiWNYVjefCgLV7FEsxpyaTPqR5oJ1snERRJ4cv9FHwZZCwtHL8M",
  "key23": "2wKtwembNgoX4bL4BZaumcUrnuzxCikwQM4dctUSogtWuPomMSVgg94HG5yqUUjW5iqfRSfcTx5J18TJytgxgL3C",
  "key24": "341bXEERf6K9ABKs8NXhWX9gC6SoWHTPP6HCqtyG51EvpjiKiZiQLYHAmZVU7zspNWgDKJwrDidrqFV3X2WFGMcd",
  "key25": "Ep8X3WmdRuAQTnapXojonf7iBWfZ2ytSkWjqW2qyAJxD11GsezsFzeEHxz3bwgoFrY1LXzwrMLTnmcBYyY5Fs7Y"
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
