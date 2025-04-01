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
    "3WDBB7qy5yPSvhMeY4Xu1yieMogpSZ82WVfw2dGh2KueHnMGiEUNLX6cuM9D5wt2v8PAk7iZFpFgaV5KWWZr9NqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFk1R9k2wSMgkTD9vM7PQoNk3bAT8fe42EhosAW5SHJKpNm9kwkqkhMjeNFacSPBV66UDH67kZVu6wLL2WUEbVD",
  "key1": "36CzgPSNXetY3QTGvrhFwAMHu8JxbWJgezvuD7fc9RaGFKMszXEA1frNLNzDCpDYLofhJEju3jZY547e49AoMKXp",
  "key2": "5A8dBANGJpEJEYLeD83MCaCqBUrRD1pQ5WpsKU9vXKkGNuzcK3QGdy46rJF5YPEC6XAT4ivYmJHS4fQ9C9EnqW4k",
  "key3": "zLcfjuXyJvoK7UUUCEThFrbULbxzKmjnNKXXTdNqPJ9BbEaBiGb1WoyFjUe3xPSD8Jr3aoPKjr9Sqkc8V4tAFB1",
  "key4": "3hf6GkunKY39KnrZU74X4GYdpwAyNwBfVZs46FC5rrW2G2yQUUDCDKguV9kkTv5k1Ww7VG1yb8iRVLDVpjHt6NX1",
  "key5": "MZdtAX7EQ5XCJpfKzaR2PD4psEcFqSYXqbCSrYWQz2LmYbiooFWuhU6r2GoqZVAnGtBEPgRv3QnqduVgfiGRjCj",
  "key6": "3KnQTvqivVAxXeaHF5Su3jqe44n348cvY2tcMRrVes5VPoFeSGbsmbpLfZz21HR511eqvxgEGMDEBApJwBAQkPGK",
  "key7": "acXZg41WRYFYBww49XVJJYEN9aYVGuzRNjHVXowbyGpMmks3pGAARWmYJ81z38VSKUhshcaPNqcf8mWWibAJSuW",
  "key8": "Snj7aZyhoEhGARM9sH93JwUdgtCSmUmVbDsTfNpv3Grj8QaECNeVeQDyQWr3CjWhji4W1QfM49yGCkHnmfaySha",
  "key9": "4Mq9ip8r4t3UscWZdrfhwQCBx1w97ZURWLLzbfSPr3389kKy87f4DJ5QfKXfxrod6rAitB5aauBkGNiroyWcCAXw",
  "key10": "47fWwtQi2DXWAgnk2ygYLTN2umrpbP5FaxdEsSzepuHTuz5YAfNgt76b2brzPqdxtW3big2qwUQ1nNSMs7WbxFUJ",
  "key11": "4xgqMMArXMydG9MmT1K4GwmEgRjHHTXwsVabUY4mytP1RfTK4PdK25uEvbRD5fwmpGqxWZD6SQLuNGuUrKnQtkJq",
  "key12": "4mwzV6x8c8RCWMgHjDxTf9AK2DZcFEdCBLu1QE5kT53G2vmcViLdNK7hZm9y11KPTrRqhSCc9UUQGpwVaLFuKVaP",
  "key13": "4Dx7oTKtTjYY8ZWTxR8KAYZ3a64LvyjJSWSLvrsoXi2eqyecWUu3TGPYsGazWkmrcHkWtikXHGWQYKYyNa4RgVAr",
  "key14": "3w2csrDRcvYFLvdykmrnRGiBdPke3DRkFZ6822g3P1p9DufmdUHnkZD5sq9j8g8imrhpiCbVmbAQ4tqVur18Lnmr",
  "key15": "4zPyZkvuCFgH9EezcVTexHTJuQb9TTAw8QvZA4SDcpZze9PsFMygQupfJH878EVywSAFkQnSQdLg2F79kVf49jay",
  "key16": "2UzpvLq9wTHaW5oN5hQzbeQRh99TrLbpRzsWbgLeuPjqYUWRuGQfzGLpo4krkj5YbXBwVELUot1cfBWvG8YN484t",
  "key17": "5iKpgAyMDphUi7FbVGbbdgJVTkQyJ3j6nMyi2nKgasPMajBArKygEc5HfKGPC9HVnd1GQ85oABgU2Dfo8jpbCbqt",
  "key18": "5eUhDAUm6FbhR55TxuSLu2L2dEeFFrNAAHdir2uHiSKJD1xgiVcnfPuycbGW5JdNqYLAUBZkyQ7id3di6Mvw486d",
  "key19": "5SC74osaWYpZMyaoSYV8Mt3YhykJMZ8UFUb3KLGRqmUuZvFhdkK3aGjwiCZ9r6zy1CN9Drkq7KCC86M3eXU8tCat",
  "key20": "3VyWycSEYdN4gj95oD5uYtKtNJ3gv3SZ9ZNNdQJKLmkWdQsttGAnpCBjLvGNj1YJNntMc4wQmN2beoJxa1CBj7eq",
  "key21": "an35ppMnDRVnm1jNyEFXjXiAqFQWodJorCkYqpCafahY3Ru9CwHHv6ZgorZr3Y3p247AbctKnQQXScFYSYNneQv",
  "key22": "NxqCyLHzS1LVuPXr7fAWc1eDTQcgNJXK1FZuRCLCdScgintThQYyrdYixsuMWYPf7zuwnf7cu7Uvb4Kc64pVmhH",
  "key23": "4Z1jJB2jFR77CW9xtvWTCra7XRS7AZBkueYURyFb4ZCAPtNkT41geNaK1MAPTuGq25SKjKs2kuqVQPs3rUgmV388",
  "key24": "55hBN7Kjzsm6SjnM6yd8mwDoasJ3VFcB8DjBDXAT2ozP5cyBw7so8xVEb2RYAuvfXh5fFSwNLozZHtnzxURPVAVa",
  "key25": "45Wf7QgxMyqd39cMMmBa5pShRj4FKVbzdRYsvQZogHeE1LkLLoGGn7YvivJWMx5FWALuj21yZHEtixepeXkjLEJB",
  "key26": "5YPcoHissLSjX9oDnbQd9F2HFFuwZHhX1UkWru7hzPBcCQibNwi7Wsxu57qqwYMXCBRpnuCmVeRH6gQWr7nFvPQW",
  "key27": "3LMQaK8y8RtDxm6aSzXtEyZSx3PcBofAiTdMoDxXwmvNeShGqiJh96fugHnctbaGeiDEDobh7CzxmQUiW1YJmceP",
  "key28": "3ttVqzMtcoh7goKvhVAp9kReuBB87AvutDkpxjFwraGgonF68HMCLv55rku8i6kvVEFEbmUdRnQ8bkyQT8UBQW3",
  "key29": "2zFHgeU7wHs9yN32SxY69tNajvxidD5v7xJoqd7gZhYoLZKTdRipimgepWCb1DPUAtZoLUzzkUE24Zye8sLhrnxe"
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
