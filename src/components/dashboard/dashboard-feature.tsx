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
    "5Qe5uj2HUm673F8dCebZsYFHcon2xQiUZ8FigdBywPAqaWQGnbXPowp7y3dTw62VCDG5YzMJ3vyGppkKj67dz6ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1vJVNWqiTKoo7UaoaQuuZ2uCjneyyjXZbmfnnJBVnfXSsoVruzNd8xygF5XgxzfCH2QeG7ibHpoZKHH8KBgbT5",
  "key1": "2McrP4u3pQB6zAQKy86SRcdrUp5LVTxz25ZJJqVWuyAejmC83ZVskEMDfYntRUvHn8JF4crpHveVz7GsrFDmvT7u",
  "key2": "2Q4QfinDt8ittD6NGjyQYX4wqt41XdESEpYcsMMHoPhyeDixE7afPrjAcVFzGb8XnSXm8G6BEKQFJk8MBaxYjffs",
  "key3": "5dKvQkrrvr3nwt2zD7BwNTJMATTqpSLAgm4rEHRh49fxTozfTVank3FvzV6k571LjBDLAR4wwjv8NdEEybPzwamR",
  "key4": "5ywxGK8TPSVJHBtRTqXg2tyXzfqf7b5V8jVbhzoF7vMaUQZFo61NCoen4p94d7tY9crHgoU6oWJbBzdBnWeQVnVA",
  "key5": "4Vob8diNbWfJMHgUpqQyd6LrdVhRXfzhmWeStf93mwKYJirkcUdxWGgDHBfzWwpw64UqXCzwnf4ERNVZQxpd4prB",
  "key6": "4JAME6cQiTPEAaAorMkKpnEAgC888KPf7xBrvyaiTQiC7ozaSKSWd5QCDBoAXguW9FMAk8CGvKCH8j3fSzeNH37s",
  "key7": "4XdrRTRPERKLgyMhx2oFfBMCenBxaQXQD7bneHnVUSRgjNRxaeTEM4PnH3QDi4sMQG3FzmJzJdnmykGeEPVrxt7s",
  "key8": "3LqYuyyebPSnHEEd34pijoKve8eWwEc6Lc6xVeB2DCQGmsR3xzQ9yLpqXTY9o3ALihxNXwFDJixQqy27fmgfmnbX",
  "key9": "4hyQ4shW5WYn3hmmi6ZAgAG8ZuMPpPSZmamFgoGvydD1As6mX2GQ7yptDXPe4cQnk7mkz6S6rge9fBoSstWQkmK7",
  "key10": "5ocRjShRabMc4owDiFLdb2U6N6fBvHQSW9ech6hXzyawHmTj2p77aZuyt38L3HTaqyjb7oeW7h81Fvaiaq6uUxnV",
  "key11": "436MtXNu66TMFYaiDfgQE51f5QMrjybQMQxXzHNEMatcBDJENpYy5RQ4QHbK188J8VvkiXL2TWv2toonMCwLyYAG",
  "key12": "5JynCM5hCfLDgabRAcPUsbnbV6sshbodTdHFmeZJCUso3TWRmnNu9fukJp3zg5hPi7gnJBBd1iNj3xmybipbFX9",
  "key13": "52EezZg8UXhCyS9w1F3vX8sVCPdAzyVqC3xZT4NhUK639C3JUhwC691xSreRwM3EYC2SHnFLkwrrMGxtHQ4te13S",
  "key14": "4QiguphYg6vrFqotbAuDqSXdQpVcvmYV778sxf5Lt5VqyaTVTgjMrpxNuEFYkFp52BT2mNVP66mgihEbhUJe1e8x",
  "key15": "3RJ6bL314y1wKAkjKa6pFG1FNUK7pxrUNGQbTkyqmxafc7PUBo3dHfBXZfY4x6eYqCJ2nJ6QFQYBqnXwDR7tass7",
  "key16": "LP9kiTSeZJKpVrhcEDY4gn4WktiCpVeKzpVyGRm4dSD2uShCztxPpN7vQHm52FPkUNTZ6mqBMJcNcwsM7Q2U6Ed",
  "key17": "3wihpGT32mD8F3CzesGzx6cCUypJnxFVBv4CHGtv2CioKA9JtqWJRpQ9MhchjAhNsV6cDsGB6W82UbGSzzmva2Sc",
  "key18": "4K25CvevNseqAghhg3V3TEG7WQB9zxzfn43KxnkcKoKb2e6MkUF59VPK2MdcrHVVYfQKUsAaB7Ai2pnZDTesMFpH",
  "key19": "47yGdex3ZukMpnMc8RvaXDV9KEJFgTAyBr2MTFoSDVy8eZwpWG7YvhSWX9hNj3aNJf6T9mxiWrNACpoEXZKivRiA",
  "key20": "2uP9SuWLvQWSCVkab5GjD9jtQa8dWQB9CL1dBdNqPmiggSuqBoVHspR4arqqJsrypzCHLgwVQ4MNqtvDR4v8jTVh",
  "key21": "4MWEQ3oMhs5TAi1HvPeH3m7R6EoQ997HsGvwSChkb2k4Cgpir9tpZqrTAaMR4uHnMgdy3dtZrDtmvKtSRhcDSxtV",
  "key22": "7hnnMSLvELp1mkubHKLd1Kj38jqkE4iUqRMaYLXnzr9uyQ3FZ9Bs2PZDrM7HHT6A6Yz8C2uzN4UFHMzztDpYN19",
  "key23": "55CdWS3ZjKf39afsgq25VQn2zMoz14R76mercc7DqwSooY2cLj27visgc24JjeGFDo4vxEAHKUJx2WGXMnAzs6b7",
  "key24": "5v4A4QNRhzjNLrTecjCn2vqtBXmCA5wLXx9N8J4NfLb4egNx2K1aKbKheKBGUNPV81ZLhkBLtkePqdySuAKh3FtG",
  "key25": "4ZGSz3WeSA3ZM2i9PH3HMdxFGkgn7Zi8uBZikfVtoJJTpLR2JVBFoNKzVShEn7oqPCotrMMgrrJWNLujV1bJZweK",
  "key26": "9Pj5D1B92rV1eEUDqmzUBQYtFq9RFVdf5wwioGmtr9vCnbK3jRHpYAwVEgjeWpSxSCpfKYnejR4QHXnheSEdndv",
  "key27": "cSsg63xf8ZckqzynVGMfFZqG5RLXgCA2eE5pfjUyA35WqcQeCA6xqvvRugDMHpGCdJrbrMnbDk2tPYuYjyrMp5J",
  "key28": "5fqJCA64TmaaNkrhCrvrnuuDEovbBvn78tmDS7FkvzXaZKr2j3TyqCu8i3cYe5zKLYpShboYCMPwHJ15zqZ2D383",
  "key29": "4SR34NZjX3Cy68dhqNgqFoVukgCoZc7uYG9fj1rZsZDr7Efcr1iy4JcGNZt9kLJ5TqzDNXBkCWXjvxBw9opM5FT7",
  "key30": "55SX9B1qGUwhZn8G79jM7HSXUGriVWrLtHURpZaySTE1yzLU4iGiPfE4P3J15PxwbuFJrRBu3drgVQZmGboo6BR1",
  "key31": "xMRy4wyjXmiC25ZeingLohS4DAJZYuPMGSE9KNpwBcin7nf4TDKd22KKekvE2v9SeFZqKLSz6tNvCZAac7RPDXF",
  "key32": "65ksiJq71oJmcjp9TyNqRbFZhXLm7CcaKdbEysJ938DntwAGUZaJTMRPguaWhgvLqKk2yrdsncSBgR26Es873Nbx",
  "key33": "4xiYuDvqBMPA3nZjBan7eZevubFATNc42TX5vuykaRm5ZJB9kG2EEc5DTuTL5SXDiCL9V7e3aUMGSkSAp67G9otg",
  "key34": "gMurcvwvSVhMy4uQYJ664HRDdvJ4FBx1QwZQGBVh4dkNBMCawCEeHPdKMDXRAM5M1stuQNfN9PoB1urLaLGKTeZ",
  "key35": "4gxZ3rZoMwS4QhoCohCwvZsTwAgBVn4VFavnpMK9oNa7cW77mNqnV33Jo3bbeqHxgHrSVe1bLgCFenuy7ZFTusyh",
  "key36": "2p2EfRCo2GXqDVWWpt2b4T58vSud6aw4uEq1mYUcvGutL2Jhw8c9kaWw3Kgx2SzaS1ZoP8nrCC3e6QN9QHFE82Z6",
  "key37": "63Pj1SB8rFKhG4jrGApFRufeA9fy4dsxrzPBAvikAnMQvEqUe4AjpZBfPzsM4bfam76136L42EKMjS9cyGS73AnE",
  "key38": "3nJFSefgsK2cbAaC7aRVpPpSjJTyWL5nWe3Eu9xH533e3iXHf1ZpsXoWrqQU7r5SWcuyCL32eeuKwtfnWuHTJoZV",
  "key39": "4pySjcrCV4MZW4CmSHXo28kDMBoPraGdSt6hxDYL7AQjqQufRR6Sga8NUihFazHfYanhVpM4Scmp7quyoSjzLLWb",
  "key40": "3C5gwgbAjot57qRAPThtBH2AUMu2ueZdjd2byope8BQTRjbra7y3yfvynayxY8p79imyCBZSiXHdRtF4uxNbbLHx",
  "key41": "4wQz3cCTmAJXLZA8uDKknxuRLbMA77yWH32FQZK9AZWE7UWNQqCtPDZpz1SmrZCHXaRcjR9TAiAzH4z7y7uT6QPM"
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
