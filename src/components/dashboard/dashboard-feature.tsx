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
    "5Vn4XzyonWWvozdncrqV79zsHRsZVpQ44f1NZVAopQCnmVsqQNwSk9mzCcSDRJoW1WLz7pUDMzNsc8JaE5Pjv1Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y65Nm2sx5SHTQvnzYbMMywe7fh2BQXHJmckG2eP8xtHdcWJokd2QuxG3BEwH5pxTghxQTeNiMuVoMwsmrY6zGhm",
  "key1": "T5oLJihqDiY41gwpM1EQUjvavE3fMgd3mS46hYTLZyy4QtrNQ6uT2UU1NXoLEZJNetVNdwuLmwAtc5AcHSJbP17",
  "key2": "5wMNziU3BNLF2DNSaMZjq32Fx4sbuF73iAkfd2Adjtvv37CDgusm8scUqHRuxXqY4y84kLSwx9vm4yCoAUx6EJ6J",
  "key3": "24hzTCaFEAQpVDYfixNHXiT4bULXtj5v7c9i7QXbVaBEhrm6pkTCdCaYyp3LSivP9fJw8hsKv4t22fDqinn7vXqx",
  "key4": "2wqEKXdgaJBsRwQczNupeZkqxaYAiYkrggdd2mrUyuq61wwGij5VkTXmMLvYXUmbVrtt4cx1Xbkbfz9rBYKWrk8X",
  "key5": "62nPnTdXYUMv5D5DVNLBQYKYEn7awFfDhKUdGoDDYiv6LTwLDzaxz7PTJUpsdnwxG3RB8jBX2GEgNrobbJXp9d58",
  "key6": "4M1LmrQSJfS9vZFSxhyJeAwdaoHCxy1Sk6qEoJy5feU5FgxzMLoJbaD2p2Co4RFA7JE7YZ8v21GsvDpvTVAt1SBy",
  "key7": "3VjS62Z4mSAeCecDJT91wHdvnRAsw2gGnFTqy9RkBwsrfNPPvTdPktbbg9ccf4z6NkWrSxBw9KEmJvZ1wm2kEFut",
  "key8": "3tYL6oBGhroFyZWfqBLQsMunbMHvBeXj9cmdYarvR7q8oi5vjf7cvHZEMxR5qTmh5Ck597eN15spANBpjobFd3nY",
  "key9": "2Le4379KN47uGLg27Udr5YEcMfc3MZ8mWncyzGk24QG7fbpTX2hM6K3aahgwo324d1xiKqgc2FQTnE9ACXHCeFNN",
  "key10": "525ZdRAVDM9LBBHiFGB9bvgN5QoZSaiMj8PmqdNRSQ4Km2nd8ettNkuRnsVJ9xZSJnWp7MMHqn8NhhYV5b9WFt3q",
  "key11": "591HGDAMmJHXE6AWvhTHSjRyHMAAdmcHjqwh3kZWm8FixMSAUMfaeqT7qA3uWDSuiDwNb8CQUBZpD5W6sPaf8hNJ",
  "key12": "2ZDQeVZTdhSDPsdt6veaZypXTY4sH6wgD13cKA2cGnpUFwjsTUpsAK64VUrBc5rRX2hacBJUZ2Gj2AnBhif8EdRc",
  "key13": "4t22TKremuoXzUSCWxRd1QTEvyR2EDEPRhhVe43xiUuhQPrndwvnUvzov9VN2cpa3KjUn6ENCiDgNZP27BnShkCA",
  "key14": "2kJwmxLVdmrSryVZP6uMbUHB2T7q3QrCkXvuusCDuKG4Ji18RX1UMBFVjXXXcxLR86cfSiNxTX5vKPLYuTUZ5T3A",
  "key15": "2vJcikttTs4CJC5KJa9pK1uTKtF8aJRBCVoGxDkbwN2ntxyuttCtY6XqQ29Twwihvzc7a1UhmeBrowR6JakrhzYP",
  "key16": "3RLai8oz8Uxe4vijvb7bAYCXQt9TnyKEtCJ7QxL2AhTvbEax9VVVdus9pCAcgoSyFaewyR7h3Ztf3Cg1KB6AqjMw",
  "key17": "mNhLFCFSjEZTZRQT7t3xrB8tkivGYjVsmwvVnN1XGcNTZRtmzDkSdDG9XXNEK6xcBPRsd2tTbXCdyWM1RKDkCXT",
  "key18": "5aTiWjrKughQ8TY4wPb9sH24vTJPhxcu3sMbgeYCRskJM1becYFbnb6J7PqZBN4sLzo3cZYPLXp7GmVdGHqSS8Jb",
  "key19": "6rKizcNMQN6rckMvwXi2p7wRUWzEKwKpaEkNyqLh8TKzxFzQF5HgZ3nwj9L9PuEFw6JnpcHeSSeGQhvuLN5Zj86",
  "key20": "cb4VTg2caAudA33t1nGCTsh6hWwP4okpbM6ckm37yfVbafHdf9JiFnJPZS1HjyUyWSgpwR6dLZHodbfxQbKqbZ7",
  "key21": "ZP4EyU9eopjHrjqSc7fcU84DobsVVHx3EN1GzemWr9DjSaTFEG8wjwMUZHistmw8dh1nZw3aY2ZeLwas58ELMtS",
  "key22": "4WHq4u2PtPSPqykpCWPM2t3byLcaureNj6kHypyYftvDtUQa3QGw3jY5rpCWYUSUcbyhRH5kfrVJdyJRkPw91Jxw",
  "key23": "5EyVQyBD455XVni43rTfws7A3CLSz1J3yBsQhKmy2ZEK2NnUCTkX6qVPFu3nb4MVLTvXnwhQNzgSvYjrg7tE9Ja5",
  "key24": "32TJhCaNG5Cx2uiUefXgmw6g2qR77UXhCRK5QhFAeuQrS21g8Nyuqtbi5pJ1dGzaxqfJ9QMexTgCUpegaQcERmDm",
  "key25": "5Kx6jzsC1JB59PGhqLAgqpQ9U3zrcyByPUoBuCVSkkHn4HP3LRLNmL41W2Gm3XG5obo4RUzvGbvEXMN3576HyfCQ",
  "key26": "5UTUHhPsdpi4vejP62EFKCa3txKhztstCtJrik2geCkCRboyGk5cr8oirLHeHoZaHZbpzQfdo6uGLD15ofwNJshx",
  "key27": "4dDZrjQicBk5qbgApQK27rhKUzZjMnNKFNFhwWbEpcTn8W36aVwzmh2JTQ2hCfyTq3qpPmS8L5RB4Q8aMfKSSKuH",
  "key28": "hkZWwXFBMcTeyXhHrqcUBCVNwg9Mu92a6M5DxXvKKCHvacAGQBror2Mhw87zasPnx1nHgCKqceMKyxhZvHHEPP5",
  "key29": "UhJ2gXzoZLWcqjqjKJDPD5ztmzg4UCy7yv8zBbCorCbmyQRG3pRUfJRXp6n23CpNqwhMqLnuNE7YSTxpQnXjjFo",
  "key30": "2c2zZgS2uCpu2UwSAdHb9iLwwiY8uFBmPU1CCnVf98rvPse53ZfiWeGzPtAK3DmaRwS16kg5zwdR7CyKdKwTKURy",
  "key31": "51u34M6GhHP8nsQvKayZMeNzMRVdmfgrCcnCPdpXeV3pe74yj1AyvhmiSthcsfnMZ5gGQ4u7X46Xk7ebyaCDQaXg",
  "key32": "511KAv9TKwhDcLUKJwFxoZHPmxW7JvrcQHkdr3qawvMu9EGnATtypACVSo2Rw1oCu8nUCREeDsbhWqKw1Lrgtjft",
  "key33": "3MS2kNtFasHbDWMsn74jcQeVz8mw61amEvKYpr1tGQdyeRFTaSgV2grHt7hEsfrBey8RcevXp2TKbNvMZMU6WBD5",
  "key34": "4dnEzsNabg1Fdi2BdwuKBqARoJDgiLKxXyzUWP869mtZWakQCF39uPgcs3y4vmTmtmCX6jywvHYP6wiyNnQRYroe",
  "key35": "51LGEG2eNkpivVou1iRucFFr1vax2AvRAT9RzJ1tENjEydXvs6dkce5UmPaHvvWkaUQeEth1ZbCRKR268PjPN1qd",
  "key36": "5tUfmaZJDbRLVfFyXKfFRPYgVacLmmvC9LXruPgCriPpPRNj5fVEZwJGfhwBFU1gQ26MNWvEmYHux6VXF69hb8Sm",
  "key37": "S3ew9m5D4iYVQXZHpjHTEbVgTBzyRNtECscgMnJ2u6XfPywExk3jewt5vw24Kh9mB5xyPV8RMxpdYmL7RxV2umu"
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
