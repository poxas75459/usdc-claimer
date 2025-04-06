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
    "3NHJ6zGVhZNgirJY3HKdj3Hodu1aus3As2Av9ne3CtrApmjiyVztLeR7owAuLTyD3HS4zkfRASom8FybSMxMACHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N8tHpdEtBKAc1hNMWpZbiKXSWtyKtn3q56bwnEnoCRP8tvnCbFQakdr8hVMwKc3DwjETKvKvrnH7KZLYQNi6ykp",
  "key1": "2NRnpHFyd5ctAcvcrSUN3Yg9Gxy3o65FXAjmbD8u3qTyYgvG6z6nuYmoJ9NnkLVZjVuVotM3nWDFjinKfaD8ERPX",
  "key2": "5xXSBuUwjE4BAb4YVoWDxB4LyUsWQUwYJz66pGLHtQPMNNWwjv2ZYJRs62BiSLNHQE9AESxyH8H1VL5PdAudTBEU",
  "key3": "59Zr383ejZxktRut63GtQekYAdnGGTn5StKkCYRUCWA5KMHvwvjnRGkdkRxJUWBMfjd3uNvYgTAoXys5wPfhvEDR",
  "key4": "w2RogpZ92q4GxAt3hJ22W7Ebqm6wGEikDZTzbdKkVPcNKmHkmBTcBWJXQbaK8XhLKx9pM3Q9nk388HhC5awxLMj",
  "key5": "5s84b81zFjsjm3z64NFBRFECUuSxDmDYdLtXctXhFacLFGUFsEpB3mhgGag5JdWcyHTtckPDx4yaUF6DpUH7HwVd",
  "key6": "4At28QVCj5CWqRvzeFhuttAUDFcGzQkSr4YAwegXrvw4JgV9E3KmGgpJew4TvQSEEXWsWEgQaqAMZfZ5QPatX1Sq",
  "key7": "w2HhFe7dkuArYtsmCihGRzfSbxjSdNfzFnJhFoJg3U75VdyNABCsHi12xzELG2WcMD4CeRBxJ7K2HwcNu1tUpg7",
  "key8": "2oUeCgCy616iN2uxTRZMYEvt2KNrDQWMvppugXuWUPXN9q6x7tU2Jx5ZVfbArqaM1GKUe48PL8p88QHjvP5nhW7N",
  "key9": "5qwgGqSA47HzeUcsUozcU9riibip3t5AkBrwsygbZidU7JPhMka5UaFndNCaf6mKiQH9zSZcjdMwi7kzfkD4ndRr",
  "key10": "5Ak6TbHnvFj8Dm8ScxBK9ghsRTLiq9MtaPPPovGYVJoJtLR3hJEASYnmeTXmYjx8ewpM5PEcxUNwuChU3Y93dd9C",
  "key11": "5WMMgVWdTP53He2jkYEo2N1BJbwWDwYT8ZHpQtadyBgcEjWaUqH7L6Fct7NqZTKbusD1x5riz2Gm76S4DsxF94vh",
  "key12": "5DFLixtEFYLrvopUs5jpUtMUaBcB9r7EaSFSGeSwUuxNh3mgVZhmBnn68ypfyUEJRCRATwiPh7RU8tXbH9ZuLtXa",
  "key13": "2UMx5ZFP81EYZVDwLNjUSrAph479wRT2uUYb6cxq9UVyCo7BxL9LVgnzEmM2L5DXiPdG8ZqTFo7EURXEUngnsVTN",
  "key14": "rGdevww7EsPgv8iDgwv1SpsJcByU8Y7bRoVyHyZxTNnruTzGPw1tVgDtXKyVp3wPDuhVRkPzZpG4UsHZrBp6ntt",
  "key15": "2SRkb2EyEx2XTzBQ3kzfsF8ReMVQBTQvpP2amsRLQzDsW33W5oW3wPu36DjXSxEM2Nki5NRDGtguzrTDo3xDcr7d",
  "key16": "49tYBwpUZpoVrnR7jEGhD4HkiT9MMTNii8mgHS52EH2YWse9jHSpxtT4kZPwM5MdGh9e8FBPmVzmqByzXgeS4WC3",
  "key17": "QdhAEo2zjK2fs9WvqZrXqiFopJRdnGpDxnYMbtv9TusKgVMmvxfhpCTsPsddMLgyuVHdUCDrAKv5E35u1zHPwYG",
  "key18": "4nTCZGVQHiSJct4Hvg7FujCwcBf4JHcD6W1rTKFnvLq6zK9KiPLLLVAcWgd883BzWLnqYDKjCnhnQukR359w2r5U",
  "key19": "5yxj5XVGgEnp4HMNFunHiGgSm5ReJs21RmAvHs4BM4qD6nNwFyUs6cEyG8PTDEY7h5vjbvkQ3bERvJkazCoaUAvz",
  "key20": "4fwCBea1mFrb4GsahwFrNWpxaq2djEaM7GkqNe7kRuwm9JCmUKYbofqY63W8wWJukKXJc53QUmPVhsyNdRNBYub5",
  "key21": "4cBcyNwqg7ogVxbc5sf6ZkfXhCFixPoicBbAmHtCNRpqtfHM41tfBopE57yXCcMK4MY7LGA43TEWwgXcK8j6twTu",
  "key22": "5r6cYpfKt7rdvsdqjcPmV3J1zAXR26sgHnsgQbL9crKVY5z2BKYh3vwWtLjB1ZvGcoWjfH5SrhZn4fpe4JHy9oN1",
  "key23": "3rugSAA2e6NkWZoa35RxzyX94mBhoUfTJpn8MZgLKmh3aXXxSLKJw1NuqFHgBqiPwC4vjBUhgeH9WqGX4yWk8o1a",
  "key24": "2tyV86MGcgx4q1SiFFqBMHx86Es8F8rrPuEdQrAZUngpAWz1H5gSgbzwNvKUUyVMQR5DMzBYfWiTvpzSDaWEMwvg",
  "key25": "4qSmZjW7Qzq1TUCMXUMjdMXNRwGwtWkEiYdhpDyoiNbvFGLBZHCagsqKqpqzDV91xR4Kqdt51BzrMhbADdJx7NHk",
  "key26": "4BATWvTnxbKh1SMScEirDtGxJyUTXbpnmBS8XrxSze62pcif3YDPM9c54FMuvBxqhVxKyWVRv3xwSGPkWVTutc2F",
  "key27": "5qKhFpyBEin6wh8wwkhCX4bcFmawaVx4zRFpjUBykukytcC1Ep7aUX7k228GVKA4kWd4HespMcoeS6fisuQ4YqXr",
  "key28": "4ZJZdQpEN18Vd2LYe4LvAyjo1yHU7cKTruNMcs3cRrJ7PoK4k9UTLLqVsukDrz5PGZWHQSuERjTEHMdFmVCupi3C",
  "key29": "3YEmBJiiVc87bwMqtbPY8KotxNEc65j7YS3jASVaGun8VzZVQyo1qtuXVzHqmnxpj9VhYtmNae8r5gZuPgWDJacZ",
  "key30": "3LGV51udbCixiDbAz8CM2a3c2CJLsfqhYPm2eo1jdzQ2u4NnZhagsaXKf7pktrPTiRoDoSnPWHBgmzeTaFHtWvnT",
  "key31": "42Nx5T6Fnpe5mnBve9NqtRpCgdtk2u98pSScApo4mUVGcp7fi66iebukYToLfgofeagcuAQeR4r7arPyQQp1KdfN",
  "key32": "L7mWkuLhZJ4qPRZz9MbXb4zo1FHdiupsQMTrHS275Hnny69qo3Ankx3juVvcMqJDjEmTkCr47RVZwMSFyVqFcoi",
  "key33": "3QsP82hRxygYxARUfdJAxcGELivNqnx3WUjzYZBGaLqFNPoVBRm4AqkYsBdWL41TsCpwHDrPt2X8Nxh2w5TP83wv",
  "key34": "2aKU7Uq2bbpvwKcB7nmhiX6d9qyzQSxmFEuHCpNxQ64uv1P3pvGwDaA1Xmc1ydC7akrca3RDcodMmHf6v5CQBdLC",
  "key35": "z9R7Bd4SwZFKicVe3c3oWT5gdsDopUzAE5XXMMrn7zHHbVfEeErP3iEp5jshxDK19QFqVtSoLZGv8WpcfFHsXSP",
  "key36": "4MfuyZMc1uPtoq1KoZUNEzUaUDYkKj2bU8mCU1cQ3n3sESRyuG1taPJZ76V2CEyHf2uUEHi9PeyEkFk35CxycdT4",
  "key37": "58yx1p9Qk1DnW6qrxQuDiKLWwwfD7wjqJx3booGVDcburkPvZ5xQfXUYC4wyHLRhcKwDwMdLCkVPseUf9henCFiM",
  "key38": "4CqYuqePuCiUZs6XABPP6EyMRKRaFpPa9XcZhftSh1uTMZEbmJHjLMfEA4wU9MT3aj5NpKgor3BKn37yJ9bpFe8D",
  "key39": "3UVCPQHgbQWXq3aB9NDyCFzxLLXskG8XEz5X9Y99fP2ykvgmyzp47Mcn4JsVM4y5uyY6hWKBiGg5WQdgQcQg98L3",
  "key40": "65rU2KqgywJQZc5tuiEnt9xqs1YSKZQQUnXgKLg5XhPT3j577wr5uBhh1ghmBBmGd53VkRersr2pAa2McGamW91Z",
  "key41": "5MfqhrH3wBcAYMmswgMwZ3sDigQy5j7SL451wtQS2V5FqRQdR42xbEtkHu7PNZ4nY64xgabLTXNnUnA6ohzj5qe7",
  "key42": "3RgiKsPNZ3GWU2EVciYiTU6xjxNnA6mJrFEn24WsAjDDuPMfsLQDdC4Fm4TQggh4qxTEmrBkcMzgwPKzNwY9JE5n",
  "key43": "441MckddnSYzGmdqqPsN8K3XW6R9vzMxrRpWLxTzaRUzX2NtCcbWNpRpze5NtvkKsKS7GxeRffESyRPnwoYVxv7j"
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
