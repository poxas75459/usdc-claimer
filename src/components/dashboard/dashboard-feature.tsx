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
    "4ZwADztAr1UpUE2sufQodZCYLkWMZMAmPTdGSSXRRjmMvSU6kftQkGq7C3w164PNQuearg3YB34jqDXFMyWEkxv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TXjTdYevSwFqmyAWnr7GiMgNVoja9S1kYpdANwLxa2UsBqwUoii9P1TDQR8x5isi55kBZH6kLaUPgfYGJaVoKz9",
  "key1": "5ZV2AnZATN6DzF3MJevMenD6zFEEDsz3qdpcrrgD6ZsnSEJdZkipJ2FE4EffgK57cXAySxKtAQGPSdwk3C3wBcAM",
  "key2": "5NWqp2HJBF3M8P8aNQV2iVdDZtK9PKYyTuZQzVuPSA9aeBmEB1HAnZuSYNrW8bfHzVs9TuEgxTS4iWZLe8yAs7Qy",
  "key3": "5YatvEwhsbqwxKyEyg5PUiqzAtAKgWCLd3qVYaTeh9hkgFb2Rm9ekXz4mNbUbPobgE3yQV3PoHBFD5AzSd6DGorF",
  "key4": "4cPC6rRH3ghiY5x4w9suXxhizypYHo8mPdGLAHUbvqbMtD3TLTRQZotorQi4DRgKPxCtyCfoMau3dF79JcD4AE5u",
  "key5": "PKPd1UD7b8RQwvkTKccuZ2UVevUeJn91eXLAqJG4XW2gyDDpM9bcpQ64j3Dvo74SJ8zYHcn44JrZbr5PFQpjUND",
  "key6": "5WhisXsJN7MU2jQP632Y71kKbv5xP5sJfh5ujj4iUFCNs8x3k6VA6GuM2v1n8KAB5oZjwfFjxHTqymESbMbXbzvo",
  "key7": "CXKCoDQg6sB9bMgQDFVdVrUSHUBND52WXtBAbQafQV3zDspmVBjSeYioDqoPCpvqEVt7MMQ8iUCwnxM6xeWrELN",
  "key8": "25TTpckZx45bn4h5qmTYKx3v4X9rwvB2NcLzeNx7pkN9KmT1SUKd7mQfnwXax5Ka1b6docsDhDMqXdSqJufWsKmD",
  "key9": "43HA7rynm28rZ92n52bCZAUT6RonH9vQgcby4Vrt3hrRYmzcnqUWZKxax2KvT6L9UWQPsBuMh3BwpCYfsbE9jJmz",
  "key10": "5KnvF238c5krZ15wsiNdcupUsx9bHKHWub3EXrNoxsdYL9gMbPyPVHqfcnKbNaeD4JojuvRf6EwPJhYCGQorRWXn",
  "key11": "4xA69G844Utr7KhZj4aJPS7mnmor5oBsgx5f323gCHsSJ5BunxpFfJwyuy1rqVef5gwsYRY57dAacLFLMDqAufMU",
  "key12": "33J34M2Z5FjE2YwefTiK48uUmxnYkNFRJTRYJUH4XUXtgoQECy5UtuucooyoGuzCDQbZbrRnFvc9VWK3rgjRjFAu",
  "key13": "2wBsFEkQdbiHpRuwogbVPSBNPjN7caLpXeNJQGBZYqMAaFv8EsG1eiZjRk1SZBsijwX3pxn73YQ1LxSK2ETWEn29",
  "key14": "5tpPdyEWePdrZobqADdp1hfzGAYhXpiucUWQVkz5f6t885BYKLR3zAFrL8Zvfv9UFjCRUoaBjxEmMgxYqjRgjhJq",
  "key15": "5fYx8tEEwfwo8ejr2bA3hKWJKTnf9yZ1jLY6vMMBEaNXLBzb7bvm2TtAfrtznWzrG9L6s61dUk3twb3k1eQ5qmWW",
  "key16": "4yVCfgGC6Kg7Vqpunf1LGcwde5CdgB7vrSfz3gSax1zvohkwZYsy1xgfk6waXPPusBXcuGyabyiawzoWQn2QV7Uc",
  "key17": "5WHRENV5WChQ4R2hLpyemzoYbCqSUQLs1pHK3nvZKo2pqXmmqrAYVjxZZinNCRRLAx7CmkYYiwLDzSsGenxu1QcP",
  "key18": "5uCjXCq9jxUaBv2vuVk4XQZuwsj6EJFEci6TvxZAfbdC7ZTYyz9WSD5rbAsv2B1B5LcEHZKvGAJbSZEJYvFYJZrW",
  "key19": "2xHLf5c9bd2PXmgbDQqyBbfBqqXCvL2SSSRXafyDpeGUNKMdR3ZdJvif5scwLG9y1TH9D2obeme8VX6oF2Rujvfa",
  "key20": "421sAkBoyHyQEGGhNufnbZZYC8kyArNzUfQprpj1KePz7BUXUe4E6tabsvS5MLmT8eiR98jkRUJVGgYsVvD3XKwK",
  "key21": "3fTjoweAjL2uuReZyfjLvZ41rAHa6zsXethFZChkNE54ZzoKzzJKjegartNBxXKTa5wS2oHM331hXJodgfWSxnwL",
  "key22": "4anHCAVJTLAxKDhGgrzXayvXMTAcJNfBxKumHuPhYd9uMD2cBWfQVXurFBTAZ6Lxoidt29XcTVDSZWVgQvn4yZTW",
  "key23": "4Kw9KqFbwJaGxaMkZcLZ3Gk8JzvhPZZNQhyABi2BktVA9ovjHwszXbcNyFcGGB8yiwSJX56AUHiVUywdi4kG3XDQ",
  "key24": "VeeMTackfVoKVSR4uthtHFjZ2Qhn37regnAqaqRLwbQh6drJgAEbm561Vj8JHvXoiCRNFnrSASeKgQn4NWvohha",
  "key25": "2dKmeQRE5HtaYmtaEzZyaKetUGGYo9gdNkuaF6iXbTSDQqUoK99TSHNGUyN8uJyMnaRMsyBTKtXt6HrTLMs8ELMk",
  "key26": "5frAr3twGWZGVeNAoLvdjWi9c3UsEhSzxCBL2gko87KnCopiYDHZCFtPs3c5TTwpYNaEkUrx3BrNQdY11dE8a6sP",
  "key27": "2EEcZEBZA2jLXTaXib616NfnUjoZzz23ds3duVmB7k169ue6FEaEaho7gkyg82ySBynHwwjoSXys4wmPhtnuxKQ",
  "key28": "3ho2WWfvmjMUBTaF22WQYZGfDAfi5qsmRGU2ptwiCUmeCfUjDorBsjKeW1AjWLU34dNMgiHwQnsYB6vMwWFFtnof",
  "key29": "4kY9MhjVgvVdf7qpbJRY9AJyYnMM36NuNhpQWwG2s9sqJthJuLeATGmSugazMQ5jehYQQSzYHwPaLKPjjHfU58cu",
  "key30": "3kBSn7WVZ8KCVgfxLYiQ8LHwLXac2fvdJr6qFMezp94Jqy9a9C7J6YUBftkuWgq4ADTxQT1RZkk38fSvjnbUf8D4",
  "key31": "2GjJJHZF5rZ2PLsKCebi2P5B1kMJg9qeqX8rUs4VbYWijBnwP4ccPMJBubvvSTwDtwRsLwZFMBYNeoV69tTeXuQb",
  "key32": "4FpDGKC2gN8jXtpgbo4qsTCpj24zseGQzGRrgyH71x7QUf3fH8Go1yVWCC5M1xdDeAmbKD5zePZjRu46wBqTcRuf",
  "key33": "311JfnV5QKySRygJaxzh5YES8s8YWtU3VDfzqTN2kV524oubGwTCMmqkGwK7PwkdPEbsLWGmxLyNRb2a43Xe4Uk3",
  "key34": "5jQkhhMEUpboYpHSMN6eNaXkKbRgjhSgNjMG5uWjaq6oJAfuxxhFh62bLfYUEnJvpv1hN3EeQQFUEVCvzBKGWFSB"
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
