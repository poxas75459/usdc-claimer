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
    "2kQvsTHUpDStksRePugjquntARRW95L89UgySJJkoxnmLY6RF7cuYoMsb3vnqB63gFCQQDbFwskCxmsSQ3Q82LBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9WfzbsfuU6WASfTwDvJzEdWKJn7QKpBD7aSHYKjrqLYpA5xnk2c2dQ8euAchEZB1mVuuyL974x9xCThnq6F8Th",
  "key1": "WrZtZqDwrCLkf1BNv6pYykQvC9tjvxjGhDZDeh9LYxbozqT3LmG78ghBAKpdQGFGnKZDrQ7izfbeToYxks1RwzM",
  "key2": "2zUjkcktp3t4dsJ4ScWamnc4emoPAKoFENH5HQ1we6v6SEsiiwRB9Vg8Tta427LNFUsvhN2Qrrn4fRg5TMiFC2ix",
  "key3": "2rYDeBmyP1SXixs95BNWgQyYuTwBUiujUCYDgQc4iPz9thYt4w2fPQVK6MmEt9vmFb13ptJLMRcE8yLFgqe3v7Xw",
  "key4": "3S44EEKmNxPZgop9BeBoeZmUMExqLGSKK2CNn78sU8N4XmkzjwtCiHETrbVPkumRt9a6bbqZdG7ZcbexdkC5kvSZ",
  "key5": "497LMEMHU4WNp4VbMD9PGS1PK8y5gTxHzrBDtMC1fDLe4zbB9jKM8chMqg9fSoNoTMr4so1Q6Py2qoMzPkcTw2N7",
  "key6": "3b4nckWkH74QEzRsrjaWWuYiGojXCWuQAvw2ay9hwAukgwPS5bQqhTzcjtS3vvzLKGq6UoUgaf9xDLbDTQuR9VBW",
  "key7": "2AviuQnQXJEWFBK18SeWk1s8mrEbtWaFwy94oWwts2ZjqXxpM7HVmH6xwJGtMLGfVByfA8hEPTpPqHvNxzHhM3sq",
  "key8": "33C9dX3fgCUr36BxHn4T8HoEEzWb3NYv4Ljc1vVS7ixH6biX6QE3itGx83onLMLaEUaFKUzm4XR5a4rX7MdC4UCi",
  "key9": "356Qf22G7ARbWi2wytwQRCu4dTApM2DeraM7bUFoXtbXU4A5p2Ymm6Wv7AMBdha1fRAHH3S7gMTnvYjcFFWNHgFB",
  "key10": "3N8zbe8mEGTpKu8C8jSt2rT6fyzL4EYZYcqay3eW9hm7dKgRGoYrdKdDGKJEE16Fba8mT5L7Gx66rWRgciPgzdrd",
  "key11": "3PJuHtwk4aFz81Yt8yJDX1Mb9YX8APrd3g6MWrriJJw3s8K7Cxh8B7KroF2YYgz28FtQMLnjC1ahj4sfCFvgJmNN",
  "key12": "2sJBqJkXB6vYJd2X3Ks4Ggw54WVLJzHmHJmuUmS2Reva6yPrTLqV1XTSBZSMnWpVZZ7mnRvNyCmpr6fJ5yCbE7nc",
  "key13": "5XSNWXKHcgGxEXNMDmCfHX1tdD9b3szyyFp9XTEjktAv8CxwAVRuMxmgkNqnoHpZauyxWDqfcdrPgMiS552NwjBn",
  "key14": "3t59Y68xQCJ3TXJYguxVwW9xH3gQwNFkV1jXf2NziQ7kD4g3MbjLpFgheaDNZfzutmUWyrg6R6UVY1kJ96zSt2Ai",
  "key15": "DGVdUr4BrX7XC7noT8csQxfy2mRasYuhMQqyacyBJwTDFEBLzhhWLQQ9vSUyLovjBJktgZrytKAoZaAN8unm2Wz",
  "key16": "3avmavYPPtdBgRjXa86PenNNkUxqAzDgEANxEvWQkoTYUSJv2t47NgKmQst79JUFTxgq7F4nSxmuWgyM1rhGbtxx",
  "key17": "2RvGLyVLBThecZMFnjMagxHtZKGdSZktSa2cv5d6rnFw8DJoHctcq3pgbvG7QEW9DxTeQ76E1oGNQscdHTALWAwa",
  "key18": "4aMGQradyekWWyMQGXDtMZsRGdjyb1WRVGKKLNGrArSpesgyQvSATnLxvfxuue9SXh5VtVKxy42QCY3Li5BaQraB",
  "key19": "5b82kueKieLrBnjc8AjF4D3uG48JrtpkWK7Fz8LihPdkMp7Z1gipakcA5LVFeM6j53mVRVfxJ7r31xN4Ls2xgo4d",
  "key20": "2sUYc8yQV2JA4fjJmbqsiES7ZgjjLnBE5tWKjzU3nuWL3ZKZYiZTEyt5PXXvC5bJheQHBSkxK8e9UkY4dQQk4tN4",
  "key21": "DgqsCcjynJA424i73t67HBeHfiSf1odj8qZqPifUqBUCHhvE33uaZUD1h3hSiVJoeADNvkvHbMdk1uQhwLPLGvV",
  "key22": "4vwtNPAXAwtixoTGMiP8JnVF1nnRx2uiF9qMJBve93PeEk9f7VkerbiWNn6KRnormaWunqdTChs2P6MKdayCJkCg",
  "key23": "5qJE8b8yL26pqKgwiYYZ4tGUiXs21Quke3N1gNXN18SVJzYNSjVeafoxbHMFG95W3ZQ8txJs3vsYGxHGZpa5PXb5",
  "key24": "2s9TEBqyQsvQmUss7nc68qBwxGPFGhnnNu9AkDKvoKTC1QnMqgMrMYMtiBoXeQTF9dyc8TjLDJHBWGAjYuwTnBUs",
  "key25": "3xExz3QvxdMSt36tcXywZzUyRYMATC7ZBdk4TU3JjJ5K6Xv26S1RoSKQJ5RSy77p3NEv7p129WhijwMgmhorYVTQ",
  "key26": "3AfUiJGDYytwM9zPUYQnqbN5Jqz6fWYq9YQ4TYvdLv34UwLHi8TfFyNXVKd7GPi3awGYrdh6ymXV4oVbcLfmv78H",
  "key27": "2uJPuEzKUQUvuu456k7DvduQzCJiyatKpatR47aF26y5CiQucQTFccNuQ8Dtt2CHPWkSR1KDRWqtALGuavyijt64",
  "key28": "26vRuLcX8tHWQxKXcAngrtfxSW9aDq66hyEn6gy6Wf1ZXHT1Uz8MMKTxtDtMKvxsch2jp11Zq5vt7cseRw42iqY1",
  "key29": "5KwLP7XMsDWwtp3aWvGe2DqX4mz4dghCTcodqgEegw1knJWRES7DiSxfxiZGUQsJtf8bshcR6eL7v3cWZbuFjmJr",
  "key30": "6uN94P2snyoMz91LNVRQLfJHzu39QjPStTSkeWeDEywzygaWYbP4u9CyuspbL8obpir7eJn2nYX58B2MF6Wq1AH",
  "key31": "4QKcJh3F5BzVnMhRrNtWidB2gE8GRYyqS8sSdRGVDNpAHaAr2wNusx2TZBJ5WX8sqrTjnVCHqESkT3HvzKd8hVyW",
  "key32": "429baDvq2m6MkihWZd2EaEhgz6ALK4J4U1oXj6oG4TjQzz2SGiQ3oWoxdQxeSJ5J7uhx7arqNSJeawynUnTJnsk9",
  "key33": "4WHFYFGoEvhq41BJ9G5pRZYpcFnu79zTRAdDGyrSMXYs4oXSbnMbUjAnDbUB8VpNuXuRzqAmZeHKgQvD3veBvKg4",
  "key34": "zLKN6v4pFtM4yfYnTiqcqH7DyeucasMD9EcnAvGk54zpaCfGLDEqMuHK7mP9Tsozw4Dpf7ySjDXmkAvzvYxAjgt",
  "key35": "2ZP9k7gA8JVZ5QDvqc3VtR8JPkscKMERftwmQpWeLoJFPhs5gQwwG5SGRbBq2w2YEC9sbaebgZaAPkyH4hygV9uZ",
  "key36": "54rywvQaaD7HHApUAo3hPFUbk1HKnvySE1SDvPeva1yk5CYSnzgp5VY7tTMrJEW2dQXQAc2PLRMvtBqPasw8g7Av",
  "key37": "4Bkub1FnqqCwc5hg2P9o1Lt8xopKpqHhLQjTBjjfLMTKdWjh7kPEEE3zEZfFMujChyVPC6tmkbXJ9bqK7YKo6c17"
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
