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
    "5zm4DZdjNxcNPXeoZBsi4mheCfUiABMcQJahEy12SWXSx1dss72e3Y4gFgoytK56Bf9RMmSCo8P7fHw7gqMzBPA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnSdKqxevNetprKKNDAcoeTKprc59zKafXSEyud133wF4CBmhuhb1n5aoxcPtYS7viDZi1BUNiwtNyw7d2hcpsC",
  "key1": "UvHJUDT7duddDCWkABKiGh8qvPPoTbqha5sW87zCukA4JM6kTuA1faGZUCHd3F9p1yZbAfC7awSLRoneVpaeNDe",
  "key2": "3aU48RJRgxf4mKAUsWeuoq42BcEmPyvjqQsYsdvo8TciH5r73UU8vAaJwEnZHTAXzzQZXcKnzEFuckDoeT4Br3Go",
  "key3": "5jQVYBQKXNTw5rxnPiDykPFwgQKkPNSTduFHUg1Lyv7Lw423rA9sG9TVbpxBWeoVCeyCSS9AfwvFtxQYWxwSe8Pw",
  "key4": "2RGv9faSErs3vpyvimBk78F2ds9G5yu8FjHsc5wXNczMumiMyCaGJNw8AreYJDkym3YkVsyHRdyUQNLcJeRqwujZ",
  "key5": "Kq927U9C9brbPKwMUGG8SyHAU4uN57uLhQnZd6eEUWnpN8uaa9yTskJMTak2hZxbAhGfHH1kAfmVm1iaGqLo3dB",
  "key6": "5LVA8UzFECPreFSfza8nMiCyEQBFxvZcA5jcUxvFbdeLXZtmNhTQmer3rdjf5597qm1jWFkNXvyqgRbrMe9iNCzy",
  "key7": "3RaBJpGvM3UwWdPDbAsGhcxjrhrTTSB5rdQDWo3nchPW1DXq9PFUhDaEST8dBGBesPUbuuBovDzxkoaad9ZmVd2B",
  "key8": "5gcUyhrPkM1R6UmgQGK8KADwUSD2hVaW7obs16au3QwNrQUHs8d48i8dj1rEzHm1sBoj4L6k4fhHGwiLmrAAmPZA",
  "key9": "4mJE4sTkdtFo7sefeuHuV619rAX5rvZD5DP3qmRDdJ25TQjxYNVCXQqkFgEbyzYWBwBezgBKHQFtFYMFjRfcaqW9",
  "key10": "5xrDfFXpd5xiAM1ZL8DmTXD9zei3ZiPuJ8p3oCQrvnVH9ctNWkJBRe4Ny7rdyts2s7uSc1PJx1enjHhPMiEmsgCF",
  "key11": "5ie4czkgurUFREtDBZJpTrBMtdW9m7UkYqQBHJ7cp2qbKpL6GUe14j2ZWibApHhDiiqiyhgFM4XC7UG6SmhZrgwu",
  "key12": "4aGgftiKZD7nejUngRA5KyyBRfEMHR1xNhUJVSvDYwzuhRdg8JCv6QLNNc41LsM8CtSNLNY39pENVVpngTHpcGy4",
  "key13": "48swJL5Jw1TGfQe1LhrdBd77aJRvjgagPAsC9hjDhjaUFk6rEwdcEG81y8oLvjwWm5xGst37iHoHZxVTungeK26S",
  "key14": "3sfDrFki4nUFKbKEL1gJY2yC7ayFRKB3Aepz2Kc5A1CraHSYJ9uPCDw361SLmq3iUb7EEg1J2QXR6ZjouWXmbT5m",
  "key15": "23oDy3keHLaNNzgZ2rjDgRc3ZZdRsjSRV2niLroNGZ399pAASVyBTmZexKmQENd28L4omeXQoYwFhrZbBaJRtheF",
  "key16": "5AKrthjL12pjPXyKd7G6uaNtPseW3rVYQ2RAsxX8p7QCaQtaFyU2KzzhKFWAW1dwdPvLqozfXc4xrd3hjGzhRgsF",
  "key17": "FuKEi9E6e6SABAzfHx7u5HnTZfWEPxCRo7FDavSSKRMjLJTiTwRSfk5MxvhJLuMQScaEM2dYTYeU841RTDAceZC",
  "key18": "tieo94rZ6u2EigGqdnFStsdDWpk4impf65uw8NC4fX7SyoaSyVG4fwNVLfq9Bqkbj8hq5nvm22NMqpR1DH7gJQY",
  "key19": "DJpZjbcympaNQbmfwmgeb4sgGnuSAhfJhcZhd8gBezk9u3ihZQRgGryiJF1sd6EcSbYCxaci5m8HoHpSBPCTw7J",
  "key20": "NTwmGxtDeBGsyKpeNUzWixaUhcxMLFJ7oiLZHZgbWiMswQt5VcoNfiML6T7Rtpvi3eEbDQTzv4zgRji1Lp8f4X4",
  "key21": "Q5cwUHvo8W5aKdEszPGNHGNMTUXCQ7YxW3k3bvUT25XWnD9TcqkiQThmTLpsu8KgcqYiAaFxBeVqWH7aiRyZjrY",
  "key22": "2CFfqojJRF7tSWAHxXLFqGNh6AuCTLrAKX3j7Bjqv4Vsrdw4NvqK26poVL1xjJCGgQ7jEqFLQm39snzdXowkQxum",
  "key23": "5TStXzhtwdv9RwztxUZ8osU2rGvCMz6v1xD78H2zzdknXmhk67AKcujkbCYVD5AUyfv8XQujGiWCWD7hf7DngDb8",
  "key24": "5o1PEE1R9CvbNSiWZUCCgrP3i4nFNLquYrWzLxfAbmPn3LyLTG6AXh4bJ8PESzitidiDNTFQ3or8NWpLrMcW19GU",
  "key25": "4p7WoFLERwJVrS9UMWa4u1NkxfUWoW3EW39AJ4Cis7hvry4gaAGRTByjb2fnxB7PHSb5ZmP5ztmUpuqGtTYrpzc6",
  "key26": "89Xrvg7Hj8kT3seSCvWcrQ7qPJCHB1hSia58GZoxafqeT8VHhJU4XVKQRFzge3WDZcuPU2rN6ihmFArk1rJmBbg",
  "key27": "3idZM3msxnzi1grPPTCoEKtAUm2rQnaiDfNiZiDHoGGDsDss4xokB2p9zDMga8LUo5nMEMmygmNDLASzvNaeyMWY",
  "key28": "4kLknASQRB8aaSLCDQnjLLD7K5Em1AzUsM23irACKziqezN4wnoZpbYEz5w25s4bs6bNkfKAqKU5VHDXebQeB2be",
  "key29": "2oT6cPoo8Q2hqqDp1MyfhNbQEmVpXQDXB9RrWLf4An3HWScQuRxd6FbdykHRwYEpgMPVwAoD7wVz2hvWj2zfLMup",
  "key30": "3hV2wgNzFFoNSCdFTyonRNev6wxHGMi1Gm2LU2VYKWi4hTDN8ec1yC5irec8qG7vvVtAXEVP6Mnn3ZcWGHdHzQdK",
  "key31": "eKKc9bsCqUxpLJ9VPEqsGnS2dsAoRN7ykj17stM3DzGiMywsquhY1vudsy2Bhzoqup4wTzFGnravFVMfd6QpDg3",
  "key32": "5VLww3E1q4mk4MDsZfjUhUoqJoXJXqi23J8evV1X4qz7WTkzswSK17xj9MCn6QMrztdzH7SShs2xqFjX9SBQfj67",
  "key33": "2AEGAhKkTZFn4fTftPqehfwSy4fyczAGJVFKymABFKU2kNG3HamU8bst4zuEcAXP2qpZtFCohctzsoFH7prwYiap",
  "key34": "2b55EFWJkBbnNxB4mLXDVtGG26chiMvXXEPcp5jX2YbF6zyoFLJ7rEq1dHmVSRzDnWekVm8jC6qi3rYW66h7Ub5q",
  "key35": "PvY7eQ95wY4xphHZBMQG7SUtP2LsVgjPzob4mSWjgppPdAxrRN16duqGzCbQ3GDL8FqHQKXqVjQoMtyFFn9tvp2",
  "key36": "Gi7pAG54WdcpmZu4SPtFb71CeigqumwTkdnPvkWBnGJbF9UJjbLWHxkrFhEUVRaZr7Q7oBKaNLYaduoDXHfXd5f",
  "key37": "3U3HT3W98k4QYPMBbBfxd6ncXuMvoQNwnuRr9R8vmCq5cB47hSzqhxFzFSu2vTrivDC55uoBhVKSgYRJaxsPUEk6",
  "key38": "4xynra5DnfDphm2quwprk5Ww6VBS9R7XwafSPkNTor92tBjea4s1dqKRMWWCj5JkD2pNm7KDcnwsCbdKZ8B12tST",
  "key39": "4pGpT3zPzLLjHcbgosYrwjCATmQCJT1nhKknhcMikDkUKP1gWiqjE1gmnhCPuahwptDQhsu6b1ZVNfKW11ESFAzQ",
  "key40": "5rbyCrq3w8tqjANE9UFtTm8W56brVg7XsCmf3d1c1nidu1psmhUT12n3J7EyMiZqkDhcADYfSXkAEyKH4K8NSwoX"
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
