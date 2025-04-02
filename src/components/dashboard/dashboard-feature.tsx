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
    "5r1QZyeUWREhPFx7JsNVNs3N4xuAw1WJxU4UALFLbsAY76F1jNL3DJ8h4w9Z8ruWpZoV7KNNdqW3SzejtDmMqDgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7dGu3at7hvtffMygAuL7FMKY7QQwcpR2ESUMHfxdftH3QPRMN2n3V4uUXsRhpoakcqEC7Kn37pUTLpoTu3x1KA",
  "key1": "66LtXxzP9t7CJSMZTuzMXGqGJLfzXA6BjaJDPDHt4qyDSuukRHpLLcBbJrPpgdKShCPAic9HJbRVoMPoW92suttb",
  "key2": "T1J6RifhWu2mk9C2PkNMfMUs6nfGkNUefmqsVFMfjmNtaufRj92X3cobeQGr2oZ7mNb6NBUXFttNE3wcTKsjkkc",
  "key3": "5UVGNWznwepugpAWZDQNQiPVnpPFkntQXME9ggeQpCrJB44PfekFiihSfYnQrDtfFrrLVoiqw5KmZix6D2e2rpPh",
  "key4": "46UZuDHLhEq2dqKmGAtu5aGYmA55tPELgqizUotkGaMc9CMsVoMWyQX5eVA7CJA6qZuH9KXh1gJPVS1qLT47TDRc",
  "key5": "3FCXkFJs1rtBfUtGxherYBTaiUz6AMb15H9ZxXTHGUV7FrTAq4opRHUnxA3m6pGWk9U3K4VaWsVHV6VgDuXjpuAm",
  "key6": "4oUe2PVbKjK5znjzdAGCLhftDcNPmNRMeQvadeRcVzCuSpVUi1VL5s9yNRXPqRWWbgg9gBUwrga3jufqGBPToBZZ",
  "key7": "2QZPAB1ZwwztQrRo1VYwJKBNGHwbH4SStxpiGaPFtzhYbmAU5oia9gqVehaFLUfdqisYtWmhM3YNeyY8LDMeExz8",
  "key8": "4bzQwBTyBbaV7WNm2Qobb7hbkfhhu1Jdbj3qGnnd5JLGE6ZA2dcvFPhVxcuFc6YpX22o4Sy8pVMxoKsAHQLpgeAs",
  "key9": "3kZQGCbdBWGGSUNgn3Y6EuEgyvbPEkJtxAKSswTb48x6J9rkTyMfdvW9trwXvaCjJqft9oxQtf4yYgLimufA1EFN",
  "key10": "3x1yMVj1LGWtpRBhtWr3rvDkrKBzd9PYuESzSWe2m8WAjkGMkcBHsijqY3GXeA9jtGyLj9N3QPxsHHbEWr6696PQ",
  "key11": "5YA6vbK47MboR1GFYUGhSu217Gh3tnZ2aE9oYfepQyV2WV4U2LHPhwvsX26orxJ21Lon4S6eDUKE3ecBgrcgNPVW",
  "key12": "4nXUVRGAPtvxtU2VPb8zAKcJ1D2a5pgPbxXxgM9mDtK36yE3ywmaRX8hPwcsvoagxr55mwwn5Lz5xEwe63XDzdMR",
  "key13": "37LxyLn5K3Z2RT6ChjQ8FWyF384iHpyhWNg4U2HK8Qa6Vgpyjvh1o6PwkHf89wWQaXMbbL4H7oEdzRWXgycUVVn7",
  "key14": "5Mw1nheFvp4RJj9emB5YMLVs37XWWhsH754L2XwBq9RmtQFW61dfrzexJHgfxw1BrgYTzg2kskSwKEZ91iWCUXuj",
  "key15": "4674wvUyEi6fPydqxHrBEaX2A71GHrGzChJCPWnpiSaXC4VXymzxpJZemXJqEazB8R3HwWGxy43XfdiSTQXxciJi",
  "key16": "2ac3maz2jq4LSuGDvYFuMVHaTFJCHgxnzhCARfcLxNL5tZbcsW3bAcjCePm8QPRaV86ouobS7wbwGyLBT43rsVVn",
  "key17": "54t9PXqWcSByp4y8ZQuha56VFS84qR9oPdUEkZdgdjv2fk7o4qWGqcWzpNXxQHs4pxehiuN5heuBMiDgaswNca8c",
  "key18": "eohCcQd8U4iM5jM3j17SWj4Qi6W4NNEeNrGdZSZgdcEboTWiQtjhEGkvCkQbPwBUHFLSLHzBtdPMuvq2eBHMZV1",
  "key19": "UahoRXQjduNPdWGqkryWjbZeD5Ba7VpkyvwQWZjqoVJPFWzDVrFYJViuXYwcwxpALPKKbigrYFCdhVxBNZUPDa2",
  "key20": "4tx1uEfXFwp8ApFCJPZN8p4afGtL4vfViCnGBypEbiVdaH6D35z9EJB3aCXEZfXfHVuDuqiz3UxasWST8W5ZB9Qd",
  "key21": "5yivyB8VT5Z1RK2Gsmnw2iBjTdsGjMAUo3beRbLa1ScBpgAkx118NbZ8NxWxc7Wxo4P4tJ6SiPcvdBVgUfmBTkkQ",
  "key22": "3yFWQUeXE4K5HVncJUdprS6145ETgJ23YJqYxnq1QdpybtetubZR7jbSgCPVFuqU4q81jBdUBvT16qizR8iXx73F",
  "key23": "2zJHdAdjJRn3DFBYgh6FsUo3X6Um5QhaRTVW3HBLMB2NvzoJJjAqLJw4dPmmZ4e3zU7NBoqyrjXM8kg46rdLKPwf",
  "key24": "4jz6oGYoXqzUdZHYcNtK6NcUAYC6ymBRrChFg3TnEBCA2pwp1wUXVSJrscCYujPkq5jr2QVrn91dhb8b4g3Nv4H8",
  "key25": "2i9BUDio1qfUu1onWACmhjPJ9XszRxxfmc13ipT4G4H5cZjhAq7iRDGfW2s8xPRBXGwsQtTo4qM6wrWEf2VjaERQ",
  "key26": "3Bk9FzwJksj1NwmA2BgJJG84jb66BWApvVHbSqo6djvoVkZ3qQtoBp6j9oiRmARvWoaoA6gXpx1jKb6BPoo7TAzZ",
  "key27": "3s1WP6vGoYruELd2frqBkjyvawTXLM1SMSQFPbT1sB2sNmzpnUX7yx7aftMhJcU3C6kmuCdWp5dyXoCN1pKSpM1D",
  "key28": "3K6ujkp5xkQFPGAN4gRZZuH4H4hTMTpBjcMMbXbpKoVn4b6eFC4NBSGCrFQ6shcCiMpH7wkYqHFyLS19DwNbiQ77",
  "key29": "64AqsTCLfeXcU1nENL65yBrrmrB9mQSMPVhJnWehCVSTnjZ5rEqk7r5fDGL39ygd9boKFA2qsXTt7a22rpqbJSTa",
  "key30": "2JjWah6wq5Fv6tcXdmXP6Y2Yh2vtMSU6wWgAt2TpuM2V3r5PExKxkDboKPAEE4sqm9qM5P3gNkLPJGoq8vpLUxHy",
  "key31": "5cHitRKd43ZC1pue1z7LnXD74mCa2ZbH6bQV8iUbHcA3vdWfuBXqyCBeGyfBPvGf4RC5Ju1t9aau5MGRzqqLNfPY",
  "key32": "5smDH4UvT8hn4ZN2dtSGhGT83fQGh5maaoxWkJyQztFG3dQLZ2TLqvTk755sChMKBS1roXA32pNvgevkcnEuiiEa",
  "key33": "52JUw1o4TqkXziwwhKpd3r22SvUXqGaiY1QEeSfyyL1A2Nig3v7sotgLzPkwBf4EbjjgM994rqvUx3jwhtsboDZi",
  "key34": "pEtFhBiF1Rp5AFMjGRQZZZFbAgAxP1SBUFBCJN7V1m8QJQDkrL7rsiqB2bZUKJ6Zu3tJMe5froScenKAdwgg2y3",
  "key35": "4b7tgnBSxhyZGnHUcx7PULszPYTpooU5eLE3QGPMLLv3uBtyzVoAhsE9dxvoTb26vyJbKg2NcZ8k6ic91bcx7q1i",
  "key36": "bDKrn4yJKmbx3kcVqcRdPYYQJCV85NtTBb7bJiXub2Fbmbya6pMyavqPSbd9hcC7aYh7rxRU2ZqXNqhYRLDkL8t",
  "key37": "5wnGHFob6oCfFmUxnXUSuNq8e5ueqwzB52NWsdPWP7uDdqPzexB9Zyfhe6ER8a2NHbGaAwd85CTjsWCJC8a2jeje",
  "key38": "UwxM7A92D9hH7drPwyuD8BGsjvpxg48bhpcjnGxFnt1RdR6p8j9LF8q24wJJh34Ye3LWqRFqFDjByZzs6WE9UjN",
  "key39": "5DzgBgNgnLkKba64bdgKnDy2krduVXQwJANS9hLa852APHyriwTqo5VKeRmqnZmzWLM1w3JfHwY4ezdwn8mGVmDQ"
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
