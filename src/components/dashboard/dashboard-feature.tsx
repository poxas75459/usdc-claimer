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
    "3peL5qBtjUMRafxqm7fJWjUNtnKzFcMrjrNGhxbgU3eLQh8hq4ZW67xPMkoxwsGSN7QDcCkmDyioQHMoAAkaNSuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4278r8MpYsLQepqh3NrYuhzDEhPfERhbGMtdcCMSThUmyKDjAJKCUJWT6rzfdf7p3kBHNHyd4ctFjEjPn7fN4wyj",
  "key1": "5uQCDUMKWiHRo7kV9MxYmoZf6MH6kRzJtHRqtea7Kb79u9xgvoNZRdtVMuE6RWLRiTw8PyZJYoFWWFkwh9yBb2co",
  "key2": "4ndYzndeu5inyWRSccsaLRSXDLnMWw6Nz1V9g1x66Rg4HcHWNzpw3nvvzUqtya5wrdaXjmuAUnAsDnZT2Do8B9NT",
  "key3": "5xsCNwAPvqFk6ESdhYLuZqM3wSgKnjTgZt8XndT8Vp6gT78YFwLAdWmrFV57nUbJf7xR1NoFeynmDdGWXEE5tVtK",
  "key4": "dw12jx7Fr4uccbJrPkAHwmfkLEYSmWy2tqYrri6SvVAWhewT2NnW9C7hzbA9jpytbikD4FWjNBmaRErq1R4uLgz",
  "key5": "5EkSJS9z2eQ9dxyRF2ueNHD51gsdR7CdGPZ684eYXDuqogf1nUiqrk2Y7ZyRUNPsyKMkHvwuGBKheNWa1vgGLbgX",
  "key6": "2icn9E121FQg8qbVqePz3XECFxnLQPzYUtX6eoK8gpziJMriLcC4Jp1kopCiEy4oT9sG6W5PTyicR5j7iCy18PNK",
  "key7": "5zngkQCfuVBo5K5siPfzRd2BMdSWDvUbh1aNhrCkPHsRxmuVALbRSNMpxCmZUYwcpdzqKYp8hXShBZ9GCsRF9prG",
  "key8": "Fw8aBJxnGzWr1E33GU7pWMu34xar57BxuYXAEHMxxtpK3wbvqSwQmZrcWUt24p5uXVb62i442i9Zdb5zM6pYZBm",
  "key9": "59YSJRaq6XyjviSbaBYJwQjBmhwppSAWNzW6ueptSYNm2pA8vBNbTHZw9FpRKwVyVuVsGeo2hF5uEtWirfvzAkjD",
  "key10": "57tbKiqqFaNGobMTdL4AAHtom5AaHpNajU62jsT6BguqHFpQYsi83osXU5xE2jqxc5kZsM2D8o2DFfb7QBJ2a4uG",
  "key11": "xVTD3wWM91uFTGEpNHr4VUV5makc9xGck96nHdoNzkuSXHecvyt1bTxac5zhaKoGT1c5ExeYCnWnbsTYpB94bdA",
  "key12": "4tPPbMAtPBetRdrWMXuxgEDbHcC2eV7eURzjwxwJheSQ66uNeyPGtV4jTvCW27GMdqYKAGQ2xJRg7yZasVMpUT6i",
  "key13": "5238LZyeEJ8qwH1cpHwJBb973p3571WrURc4yN5JmKyF76YcL7cXt8YHPDXWN5yBarzn6fKYnQidSN39dGFogkCd",
  "key14": "oiz954NHucCDXPcTJZKryXWzD8tsEsXQC14d1DFKXqa8bEP5juwNZoJn2iQFVg51SWTtwVdeiaqYJeeJ9pJgtjX",
  "key15": "RjArYvgebaduNLzqDUvrA747QwacyDgULLBbrMMMAA6rvmuZwYqMdPSCttbEenEtBrhaXs1ZpQFiBKWVVY3mtmV",
  "key16": "VKiZpWbZvbE2kWXzDpSQVXVDiDWodv6gKPmvCpCqRPzrR7hvvmUT6G2X689rMTzKqNhMHGXveS6GfCxFaqctqa4",
  "key17": "4aXdWyBFa9kCKV5zC5CoBsuHSrnbmDvC6M22pHXbi9LETxv9aq17sa7Q8LuQBCVrSmWCbgy5J9HqybcxLZSCNx4H",
  "key18": "5MV3Yag869dvhKHzefp3hbzm1DsXcPR8FsZSwoCwzfuHsF7zH3EXvBvPogpRvdtto5gH9yATSmHie9NJB2KUqRba",
  "key19": "3VcmJevXmcPmm32AUSqCsYh3jy6zmTkPVvWpvAARo7weLZuRU6oF9HAWPaiUkbhxr7vYeze59HaVLmnFFN7zv8DR",
  "key20": "4KLRyt3kGKK64fdCe9AFGK6qMXHEjFHZLwyRQtKN1mWcY6pa2ifTbu7mVuJwsBo3X1G9e16KyD3mU58a6iUF2Rcg",
  "key21": "fPNZ9Y9PMPapUTp92ZJJ3VF4EuAwuoikb89v68p9eZnvKhzd7kpuw3ebE8CmkU9iGkAyR4WdvnERgfytuSaPmQc",
  "key22": "5R1ifciLNBzbYe4sxfkjybisVUvhvGtTMjug1jp49vKhhtY59KLczPu9hh62Dj8hrbuA38QpuSD5VPgpjaSzyovM",
  "key23": "4kQ4mFExPCma7Be36642xJaFxYoWMLoRiCJQmAS5Eg9pFZhtrJ9pXiZJV8UcVsg6ZbaDenjUytctUBsreTdko8rp",
  "key24": "9nPByyHffWi85bUM5hiWpQT8HJN4F7DzNXDJkf7ptmi4wWobU1U1HycPER6i8ExHe2XW6BrWuqAzW313qqps2qx",
  "key25": "2WECRmM5KNoXndR2LbAXtZ8cp4Wao5WWWajLVDP5MPBhiQ6qTutPcpCxWqAcfXBUqAncPtNUh2hNXU8ZsLZLqi2t",
  "key26": "5n2cnp1jzZq3ka6ay69ZEArDCxC6PJ3ac5kRorD4HYWGmtNp3n8ZQnBCgYgSH9C7CoXgeNMMqJY7faPaZh5Zf3gU",
  "key27": "4DizXrSx1FegEpUNsuQAUBE5tjabJALKvN45E2HHm8ucrxWPXHmyNwedZrC8r791hKuNg4goy1KQdpxQTcsBW6EC",
  "key28": "cdD9VUKrSHAcAFTdVdgJTCEMFgXwDQ6gdaqtyt1GwrREPZJEtSWjAMvHhWhnyYKpsB5stt2vXsBD5Aagtzc6hT4",
  "key29": "5rtDAygHHmHGfw6VzU363SsiTdv4qW2LEvhyxTuAt5dPSPYyfk3ifvhRFWttk1k7bWKZ2Y65L7tPobkDi8Ji75xG",
  "key30": "5HLv8fqtqHgMfwkcHhi2y9a8rGaWLMukEzJnz5HaQugc79HmUmZEo9F21Miy7SDXgvvVNUyRfdVsnvJYqY1ofKXu",
  "key31": "3mWx4frEMXYYZtmwt23Z9wHqxeAfacDJGqxSyquphGs4VYDBCv8RZ2oU6rUjPYY8ST7JgnEkJNKcZpVCeUf1VXih",
  "key32": "2y3PWEfnzSs8HbxcnTQBQPj8BkeVxzUL8uv4sSbfAGrXhhx6cLVEW6AyNPpbbAhSPfwKrbkP3mVehEd4obeWTWZ9",
  "key33": "V9RMQMu83Dg2bZSLmT55ExXmWQvZrM3LGNPiAJpqhbTxKoFwFYFASvCX8eNKygpbz8fYWY57CchDYZzadTKG2Yh",
  "key34": "24go5fkukWpRoCX9q9nnGcvn25WCLyKPPC2rGR6WHpDAjsmM7D7U2uRJ7BwS7pseCNVdRR4QHZMfrwTXbhPERUdk",
  "key35": "bJ278dEUQuaHtRcP8eTVgzh5YiUWjY9XFnSy5jXS3p5t7qNNENT7Muue8mRHgPiPc1viwz6oHkYJQhKZ1AhtAMQ",
  "key36": "iLcJii2mPCpDYASNPpZywfQRQKpC5ux9ThtvbRarr9QERx1KMp8Rh7DKXeQaKMHtWT5oVFsFPqetzMmWsGhios5",
  "key37": "WVtR1rjkEXEyw2w9VUPg5MG62gffvFrs38UYGjiLHtE9TJCXah47mCxz6Phjf7osKEHE8z3duqQs1vuSVqx1sTx",
  "key38": "2tJBRY7ivVRfTYE9iaVsYGaKCATasqeqcQWkso3YitdeKSFz7twxVf8C67XocNGfQqVJRdgHMvXt6qUG1Kpb2qr5",
  "key39": "5C1j3zxCLX4yaTEV2jyJSSd2FCUB1GBCaggFKJbPxE5uBm3oUtrqPJQGrC9Endr8sGUKz4fUEDU6Lt4zpDYsEahe",
  "key40": "qgKAo3aKeyVdgCi6jfZ86MMTcsAXuxMkcYWxuLYdGXNqkdUTYJDa76dGbcvGNzf5oAqc6iipeGyXgC5VaNPTyth"
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
