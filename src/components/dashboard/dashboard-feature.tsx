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
    "2AEN8DcBmSSczaqv5MzFDW1a4xsLNtRXXqhWaSFTPb1hDePkQR2DysGNH8m8kQSShLssTrd3W4niH5eix1novP38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnYYPgAXXp846WAeNn3ag8XgRskSZU1JDdvEF83yAcBAoBDNMTc71WsmyHRJFXReUYaPEXR4kvYv3Qg455ogRuJ",
  "key1": "TW1g1nP6qpfgjLukYw66nb3PUPoCke75HkU7g5SiNmJR5cveEaEmkveCKPk4jwVjJKX976S9bCgZhRtfD23AqBX",
  "key2": "5Tb4AtjAanjhLZEh2iULWUxz6jwd3FntQpSxXa98wLREdgsnSArji7TJ7em3DhJsT2GFmAfbwZeCRc3q1YQw2SCQ",
  "key3": "2mnjfokWKJJGuqbQSLbKoK3rdieLUtmfVb3XdsV8RAbYrU2iEvvpwAkhRapydyNr82ZBmsUZD1aZpoZh2VG3zDAR",
  "key4": "3edKvKLmLaeZsEHsPepGmMPURENL1wzAnhoR2Fwn8xbGVuy6sJeKBfwmYcMc5w77KnF4Hv5UhSAUyRuXf2z8QXQ4",
  "key5": "3SxSWsgbP8eqKCR7LnXSQz8erUQNLzh3Du4pf4F8podNGcWwE23F3btGRKvkfQdUDUfxFUPpUEYTrF9VwtAb7sMd",
  "key6": "VM831mXGUPPaQoWsrqx4VWu3ELnMiQdcWKY7sUDnxyVeSSR9PcF99z843ZWCLFPBhsaehpStPY7TbD9vEzpc57z",
  "key7": "2vo39hhwV7bzkcWetj574uhw2rvn8AbNKEhYBzvwrX6TdGzhP3dSy3gG7CE8QjwoyKH5J76NHMjbwgSh624Mq17G",
  "key8": "4MrBi36qtwSAyUkCH5UWr1c1q5bbRjUDhtA9qNDPQQWCfSUrYkK6Ek8z5ysyGG47JtF1eseW4Q7ugxMJYoQb48Uk",
  "key9": "4ftRenCkMm27i88mCs26VGALZWLDVA9a369VeB39rBLVcdsEZLdQaScQvDVx3dNZEzyEfcjeuyuVMSD9eSaaDyv1",
  "key10": "5rPkD6VdthYHH9ag9bxif7SGzV6vKTvrBPR1bBDSW15EvgV23gtgkXEnUMV7xH7qCJ3wtpAPUGKy5EJUbTbo2efR",
  "key11": "2RXbL4EuNT7k9hqjW9EnSUCoMecSY2whNvPQUTNfNKfeRy3djJodD7JRLSfcLaQrejAmZXk1BqvX8to7Z8RWuh19",
  "key12": "54QAWsCqrYiA1dkiveTbdHeyYwoc9igJXHDL1g8JenNbpBEPobZ2R53GdU91LPJWj8NPd6X5YNie6CYgiRFdJdW5",
  "key13": "5BuT2c1odiZ1bSNq58kr1PfMw8ZJDvABFt8V9Hh5cKUy7koUc7Nw47SomEjFpZrLHN7Bwk2FPN3curQn7mgMqCsL",
  "key14": "5PtMCkTfMcXgZ7xPdw6L55DKMXys1rKMPmi9uhGnEaNaCSytbz5DmNaDz6RPCeMv26NpsVXoip6Xq7amTfG2MzDo",
  "key15": "3TXsis3CTKcu89TuKYKMvDKeBYvkXSFLCA6EB77h9ZYXjYxP29VaocqrpCxRXpry755jybJgL2ijhysgt427MC1N",
  "key16": "4NPLKGRkCJYSeGhDKUf35uiyaXMbMrF759PN6XesnWeBtZzN7J5uuziNjnASHkCKLyGPpWu2ZPKsYc7HEbxZ9byh",
  "key17": "4pzyzr3pgZn2irYGFULdBmsCKQuZwvznH9fdLbbngDUojznrMEUo8pc8H5g6UP1fdGJQpr2pVre1ZxiKuhrdUm5D",
  "key18": "4A6B8GPcLTDFgjSaxsB7gHhXFi7nTBXnLfBU2mgybkCHPgo6eSpj3RabDySUyWJfRzDRaSqB1RRASegMDCqqB4b3",
  "key19": "4yyYNQKMBPMdC8K2zTWs1pEhjBfKnXhRwBNXJ32CyhLSkD7fiLJSRvF15EtCFfH3cyUZHtVYGhgqLEsdehtXnrZv",
  "key20": "6SLGgHWjcqCCshZvb1pwQUen3XVWVqYZgzqLSvWMWa4BiJRfpn1Z3ufQKMN9TF21EvicV3ijBgKYtD1fTihqJDz",
  "key21": "58ABUnNNu7wAwgdSomKDGFazPqpPzYw85Fdj9QwwjLPDwXvBCSQbCn3pAXoByHy3JaCCrQ9K92Ng9z5NHje7YXpm",
  "key22": "3FDG5X8QBxm81xWTF1aHhPmkyQCQU7k1Wk1kn3GGEJKFSgun1umDpNntv5YcR2zNkZPkVy2MkmSL9YVNzKUuJeY7",
  "key23": "5hpza59qju2TL8MxU4D1pY4pTV2wAbCBqDjkGM8NfMggGAmkck2rTgUw2x3awdb1LivfgY9YcT6dGFgeVxT1A78M",
  "key24": "58GNAdDE3DDnhMM43rinAzaQJJ3njxqSUzF1rxom4BVxqWahpevGGFZxMHMPeGRCaCaJqkqxjzRMVHXS1oJpdn1u",
  "key25": "wQNky5wT5d3Rd9bV1PQhA6GwuKrUGmpgmSSpH3mUpYWd9b6i6SmiZDsRj2bZGz3r9L7Fsouq5CseniZFhZS4nYQ",
  "key26": "2LwbPByZuBqj52DuBKdxQqvKFXi1pCCwgdNymZ1k2kCZCoUp4Wny5ZoWauRZ3JKRFYLLCMZJ5ETbtb3TB79FZPsY",
  "key27": "3pEJb9CNxuyujb5MKWg7mrBpiW4rpfMP9WiVkU24TD3MxsraNFPshiypvoA5Q7Mp7qC2oLJ1vtwLHyqgWG4HAHrH",
  "key28": "5Cw9eRp1ZRt4iT26ybaxrv6xpKoeeXUs5aST4v4crq43zjRs3EAkHDw9bakQ88BEhyz7FRJqHdZmLw2wjWMHi8cw",
  "key29": "4yY9mdkhspRioZ8jSxh6zmyiyrmNaYsEFRUFqipmHMuoSx7mqxeqtKs5qrYYGVpk5AtPFp76o2b7vwt2rzGvsx9e",
  "key30": "2uD1kyYvbKdt8tLduP1eK7KhkXR48TvTcNwKiDGji3UBq48UmNeDznHcSVKePajvKD8qz5vyLEJHZCP5jTsdTvP8"
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
