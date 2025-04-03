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
    "5hqWdsJJBCuiUSQiQ2j62XjhJ6dZkFn9sXhKvWtpAF3KzF2imrVu4WnXrpXmhnEDFbDmnj8G4ceHwAdGFqbEGPZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pbR7nQ9sgyEWLRTwmKmg1GjaZwE8DsFqwwgvgYR5WNckPnHmJ2vnaF4vRdPGYwuS4n2g9AdoJE8UMcKDXphnGa3",
  "key1": "4yKgeauFS7xCJTPP55994om2cUMLFJUYgbKj4HfLtKmnpovTQMEMCUddbXTpCULM7uqJEFdjEEwfWZeHvo7oraQz",
  "key2": "oZExpuCo34HMhWmSXFGDcZqyk1AkvHTjoDEMgHiScZEuZtR483MJUsDavFWXsMQVAXhJ32TNu1UAy1XWQRFJdC5",
  "key3": "3EvuxwMjNKrwY1CJDAcDFJ3dS49MYz61Lu3VsBSFhS5KyUhTXeRcaKqQAmzsFAxp1fL67sm1shHdytUZDWgBxCvR",
  "key4": "26eMQHjfSbPeSpt5bGnCnuuPgHR7NSHvCf1aXhvh2yUvuHqeYW4Pg3zrVorwGfCgSwHcfREFUzaxQbsVoYQsaWdz",
  "key5": "5tkwf3eLKdSuGvAnpj7iChLBDfMsTVHooxfaUqx6wDvzpfoAsB8eKXuJrHCxJACWSnkaTQjHYk5cwrcwcabGaAb5",
  "key6": "3UhHqepvaepNiPtgrpXW7SAdiNU1FD8p8NqkyEkT1y66KapzxHGtJJ2hyLATkkPd39Gs4jVAkpeCjdNyp5JpDQJ4",
  "key7": "5kzYqzqqiC3zsTPUgnGfPMU27Xb2Dr3P2Y51anVt5J9QfaxCbVjw248PZSEBsA9Rhq3GVk6MiAiQgnVGWXModm3f",
  "key8": "2UDKit2NAGExGnQgnCnKUuPpMSkWKZyZSyEg8sr8CoLDUm5CbQ6kzAuBFp1kEyffrMEQ22Echo7SLgcsgPbMegqK",
  "key9": "557Ke3WtWrWYt53vY8HmNRyqcdCShFyFuLPXGXxYJVj4c5LNZwb6ommyXPxa1iW7gZzS7AN6tRoYmVB7kxhUuc5b",
  "key10": "2SbgEoVDob5T3Wk8D2i3m1BTnpN3rny7sEUStV7ERjwtwvfH9S28LEFsb42D1cQHfY6B38hZiVqzFkdv8EE89mov",
  "key11": "EZt97SAWYhFL84hu2K3dciBUHWpKtKd6bN25EHPYaCziSH3EpsERucSX1zAvPg8w1a2XjG4TiRjddvHXUkKt85M",
  "key12": "2z92hjfuhpKsBuLQZpLXn7YMXVKKirVbBA7XSE2cUF79jTV14qVXfH7nQUNy9gsXLdgsKW1Xzam5gXLRip8uyE2",
  "key13": "5jL86TANvkzV7SGejwGk5pDyKe1gsGQBqfhmgfP7KL3wZadzJ9xBV3nZvScH6MLnRrkKErV9DiVNy21kXjWA7uib",
  "key14": "57k3jqYmFLroSKJA9QNxVLVTbZ5tw4Vgkpq27HJjpbL7mSqrp9LNitmmjQrvcf84Me2CQYvzpNFSKCfBfJnkyvpw",
  "key15": "bLGxa2AdnKxJMWPN3bQ9XZENhXNfsCuj4RWpsQoUSmdTKHfHGikPwDftpMvsCKd3D6ViVDFJDiRpCfESvXxk11u",
  "key16": "3GZgUcFLbLqQALz8zC1d27oXRhKpGjTNQfETuHxfHRtecEokMbVMg1VGke4yv2K5shBma3qudAxkWZtL4wXp1E9g",
  "key17": "4iVorfi1jMmPa6ig6aKKHvRFSSnV35xsF2H9ZvTJtJTDRWjFVwLeFkWtPqaHjWTNiyGWr1gzUFDhHNVW16gPvvma",
  "key18": "4bQbf3wSG5mT9mTHdnv9txxvof5icAKKCPnBa6HevwCty2Dny5K3zSqYL8q8y4oR1FCpTMSLnNmZ1MhrAUiX5joC",
  "key19": "4kUZVUtkK1L9DGJ4DREiYvvqaX4Uv5a1DUPyUDnK5Kf4JU1bmUL6QnHCYFLrp66waC1ZfK4vjgcipAX3odFSukM5",
  "key20": "4L5n3GjgDTSwD1hVGgmH1EgkeNLkxnige31TA82n15LDWh6zZACBL9K7JG9FCn5hMvXR5nX4Dxt4fNaKnQnECSsu",
  "key21": "595k1dtP7D97p6J9DEgDvCidRVkEXudxnYKvSDQ4YAbKkxjrvQKq4TsGfPYmS5LELZV7qR2tg5wxpfq6SFQpssy4",
  "key22": "J5XWR3f4HYLmdM9baDw3KF9n71PNEH33hXTJRUcJKftHftU7qFnTmAXHe2Po1iHRDDUEX5eWWuz2f2A1xizyG33",
  "key23": "ZkJKPTzquawSktJgRPuqBHnDfroiTan49Mkcz1uYDwKbos2Wcgi54eA1Yg4i27eaMGSVrc9arVZEPbA5KwfBEFi",
  "key24": "EKf2Q99ocPPmfWXwEvYm3rPNiUf2i8sSaCw5BhMeP7K7HRutw31hnCLZDFYH2YDsRfhhaDMw9seBfS9ZXxaPc8z",
  "key25": "mDnvQ1M4SepnGyRN4XAEGwDHTTZkz8nheMFEZNGUFGAdGi1SXS1KTxdm19yMrC2WVDge7wubkPbJ8fxBwDvXvnw",
  "key26": "VBSUHA7A7fe9EDuMXt1v9g8kpCXsw7ZVwSpPMmd7G8v2WgxqhP1y66Sh1VkMAq2irpXhAZUTJJ5PcHsdH6b5vos",
  "key27": "5WscXYuM3mE8T1ioGtbKLtCmizokdTJ33nUxSNZJs4FcLRKPhnpMFSg6LcLtnVjPiAYMGpfS7xqz6HemvqWsi5aU",
  "key28": "3EZrRDJJUEhG63X4qJTHD7ms6sFfZxKtpwgrtSwXsT6JB4Uw6MJX56854dBi7GVswrQsqdseBbqbA7jBGmprwmVb",
  "key29": "62FSaZMQyPa2zMFG7DLVEp7TahM2dpzvKWx13mebyECZomnyuNFEuW41RLWDAoM1iCugdr44fQSnvhm8oL9hL3bZ",
  "key30": "3GgGZa89s7zCxcPSnKnsqa8tTyyEY4VH1va3r9tyfHoN4JWDk2VBYsLVC57cneYQUV76wckgacVj6uowDggCkATz",
  "key31": "G48NSgnAUgEtnXj2xx7ATJqG6ShFqHfHYwikWU6CBC96h32P8Yr6yGGGzyrsxvLPXxcpvAtvUi9DhYzNpPue23E",
  "key32": "2UrYjgP56Ezo5zDrFhpoU1st4dskSjbpZgHgJC8R1PcpkpEtw1DLj4maHjuseK2rusYbcChsRrTsZyAcx4oZZivt",
  "key33": "35pxThn1MvZMU9VdZtKdzeVrg3Ug4SwXDzn3NEqii5G3L19KtiHrCtqqkTFg1j9gd9wTe6XFRyqVZsi8KwkMC4c9",
  "key34": "5hm4fxxNnhckrev66czSXViE2rMTcujgrwvyayHs5maxBrahxrSdteNQ3oNTh35WRtTat1QX3jJ9pyYhMSN1WZsw",
  "key35": "22NC1aZTnQ5ZZhDcH7psP7mMUsK7QJUDjYxG46XYsry54f2PESwE4jmVf9SLa2BmMi2mJyNQw6vuGoHnb4f1xCzj",
  "key36": "tEFqZHNDJs6uDGjpiRWMjS5s6JP5PAAWjQZg4WebdL9hLmEfFqHQkgvqq8Bfu8tULH9VNaq6QZhyDhFygJ8sMtF",
  "key37": "3CyjMUtcP7MgB7dDuoMQ1WU1W7UeqrLJKpvwKDVmrm29HvSQw55yLnooeU7vs7iPiZjkf5ySeBsWAqqaLPMTkoJo",
  "key38": "3SqmPg82F8FWVviQBRFsKe27vbH6y5AJTd27Zt3VqohmPcsMh9ZRG9VeJYT9hYTeKJ94Dt9MUGWwQN3EZ5Aivsp3",
  "key39": "4ScYQAhFMpzHUGUamZ2W5obm1G4vS19ao5p6AAidNNXdtZJm9iyv75HQiJFLNGUkUXqo1njuPeSqW4BNBEt36kQB",
  "key40": "644NTMDA7dZkcXrqWUCWpUuA6cJtFKtFDVvWmqfUb7KrEhcYxwaWseH39x359k7qpCf7qmxTgTNDZnwj4KYtTiSP",
  "key41": "45sGeGuqPoCZ7LD6V8RnRYa88Y1dmwKswSuqVErfYE2xZXpUorDhmbCvZwRUbH1vt731PCvx77x8RJbPvikjUBjn",
  "key42": "5TAWyRchB943vxjtH7GVNiNuHm9CYLFWX76fnZcBiNg44fwivcwcXzrc4o6pAQYLRaNZQtUYaPzzCTucP4ERe3xm"
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
