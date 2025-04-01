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
    "CJdvZUdXUKzMtNdcCx89TR6i1Gjo2VxN7YbapaddNabmUDZsTJNgTAgp9M2cHX6EjY7hcxxCMhm5kGWdUZX3Xx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwAfwVEV2xgqug3AJHcEYe3JYFS85xMvbRLDuxgVizkyxLdmCBxJkEzLBechjM8kDZnB3UQMghRXAVQEc77sjR7",
  "key1": "5z3KxPVNsUticLxVF9KCwH9ECJWG94horQtVjvj8VkHoLFzthYYs4uCsF4DP8zWe557Zn8cUdn7H82s4iNtP4pPp",
  "key2": "3sWSfGc2Vxu9McJftpRHwWTES2Gmx7GSfw7wKmJxSRXzcEjxmWmmJ6HzoawfHgGuJes3eFifCve7uFAzCixA4p7S",
  "key3": "4BRRQmGQxjW5zs6PDqXvN9QGUyx5FUcpRXUpR57m5onYf3BKuwA6boubsfgzNFjNzqs2PSTNHXZXvLwJod8vNvL2",
  "key4": "2gwr4H5bjpaGV5dxnxWbiDLUc1u5yH6vD3LbTF3pC7ct5oHu1snPyFeSJn9vFcQcDemmrhiPXVrRZ8bz2uSj6Csn",
  "key5": "3xb9YGLDGnAR3keJUkv9oEfKWHtyMnvZhE67tnmJRwjhhVT6WrW7izRXZPkW665s5SxdSBYDwKNXR7PVANARs4mQ",
  "key6": "4YaXaLozfr7X6HvwmgtwhXZCiB6AHztUKWnDdvUk5c48pP4pPwCaXn4svVZhZqhkKjiiXJ6pYtEXQNVWVTwVJw4f",
  "key7": "51wUTgVntzSjQ7TSMkVMN52L6B1XjeXrSEgD73keFaWpJhqWqdsKZ6aRP51aJqAVK64zvjVPTzPzkksM68d7ntSo",
  "key8": "qsAMgNnnA5NJwwL7czGBvB8qUsEywzQJBYgue4YFFM5C5JcxXNrbciKFdB8QvozaqB3WvNhCA8HxDsvMNUBqK4i",
  "key9": "5f18F6cstq2jPz2ZPKBGzeGAGo2dtoPA3t3HiNkzTyHwasrtvg6Y7PHT8NqTDzaSoraFWu2KW56EjL2RJrEEVD9r",
  "key10": "bSj2ZgyNxyzXdFfv2vnqLqmVYQEzprYNgr13qwCmc1ZVe5ZyHJXxGQDfTa1fMfZE2C5hzRzRJNFxsfggk3tokk1",
  "key11": "5FwJoMRX9gvBLFmksfm55vapRBvyagGymtLdSovNSyupGMTSmHkPAa6kenBe7EdoedCppK15sc9eNWGfg4fQaxTX",
  "key12": "2GxzvXKZPosDk5XG84qh2m8CzXDdmy6e1KTkAKiis9Ybvk1f2XyuW2mNBAbcLngViZF3w4t5JaNmDpVjddUmy3UC",
  "key13": "NRygU7q3B6fwAodqyBCa8kSZNM8A2biLHLPYLL3vVVhw99N5Vi3CRygWjewSNCfZPHHYFnKDCyBem5b6uRJUH4h",
  "key14": "3K6c6E7RhTuKiMcpHQjdGRURAqByFHhmwRndeYXCsYDJZnSJzq3CfC3SddxpGGpDwBccZWMQa5Fx9gyosxZ3SVrG",
  "key15": "3FBym64Dvr6Wda33QVpjjrTB9uspSoKUMtXeUpkUfvuXfAwu5LR1CEBso4wN1iNKv7oZn4yzPPD5PsX2dHJuquWY",
  "key16": "2B4yTWQKP4oP2PuUDVkMCP1aHuzncHQF9PfGv9RPKJJqeKoN2LgNoU3QcEpmRv1Zsu4ajHMnhLJAAvHqVWTgnnkK",
  "key17": "5FHike12zgrfHUneqC6PpsHcTPBB2oxC9C7CJqrvPskb9ADasaFioZRoG4RqZNFbVr7NqabmQvTk5uCzUDv4S7wG",
  "key18": "5Qyo7XB8Fc4dPqv3QJuS3fSHJp8P2co6ZHKRiR2Qr1KqT1izGkMHUkDTB94Jym6ScWGXJeK2Rfqtjc7uMdWpRFpF",
  "key19": "2DkXoToeApUdVrrBY3qt5Rj92zVexQ1EJpqgHKCc37Gpks6edZUVjMCAUoLwyiR1311sTsuxZQZpPbgXLCDdTX6k",
  "key20": "4e7deUaqjdjifD8CtdXUiYPyoRvq76qyi2L2AanREmy3Lfo5zctzQDHGPuPVvPQwwjRg9B2nPs4VJzDTF4VH7CmT",
  "key21": "4wreeXZYqbox2cD16Px7q1pfGZMXxUgiVTm6CFnr67B1AmPNyaQ9RHMc6g5rMKgK1g22MRRGsmpS9BsZtqrPoe91",
  "key22": "3QL9aWES5WQNLiQ6BwMxVBoRfTsNdYWHJtuRo5W9pmQd1xzzMs1pW8FYXzjsQE5epQ6aKkqevz9i75MDu9tNHaL9",
  "key23": "4JdXxtQuELXhhX9sHnVk9evsNjTM8kMhp7xfnZFezzQEh5B588iWBye5xMd2Cg7U3rz2aphMUsPpLDT51oQLgnwP",
  "key24": "5MCei9esVnqG771tTVy4XjFcWDXUCu8cYDHMH39fwwnyqTj87iUyihPVhshSdHgv9TCKzAAkz6akxuPZy8Ste5xh",
  "key25": "47AnFv4SyoH7NipNKEBuYG4hfTmBfvvhDpa8eQZujxxPBuH9u4Nj5v7RS3HdEKFqcPu8xGcACMywtYZTWie4m7jS",
  "key26": "Dd73z1T1uGo5u6MjtM9Fdg4RsrxJDXU3qVb2FtoEoTB1oc6fxqkFB5z3kKwDqHmAS2U98imM9XvA1PFq3QTWSFn",
  "key27": "4bFWe4nXBfHMydm83DBBUwMPUy8vDfgiHHjGHnVKfkYFh2WJaPNGwz7t9JzGFEm1v2Asm6bhtspamDuP4sq3VWyZ",
  "key28": "5cp1bwxjaEdjgooKtgpHP5weuBb4iNDLKTKS8fUyR7tV65SwdjckGJ68U91T5WZJJgB3sKd1VuDjnoy4niMCYBfv",
  "key29": "fwFmNSjLJp7EedFL9vh21aswyTQTvC5YSnUKfv4K4x3nHM13RSjr5TmZ8Dr5uHkG1iVZPtBW8neHHZyriygEHg8",
  "key30": "4kjsBRgwu98xQWUZcLyUgqnm5NV27v5rCtbEjhPimSMqkCmA1S5xjdG3pcVxy72igtjQz8gsqvcGo7h939sPyaTE",
  "key31": "RvgQ3JEARv2h89WHaN1dsMT1Lcp64pyPT6wzzPc2FgdA1hsdpz2nJj33TtgyrTXeMCR5Pv7Gc7cx1Ltf9yjSkvR",
  "key32": "2PjcHA5AikhVHpc828vXdcqHCrZzmFcZ3MBKQP4W6bMu2pjzNddanqFgRsTd54EtMWB3NLTSohMpCvhLV2yaUX69",
  "key33": "5tDXVYF7fiz7JfEpLR3mNM6VdHkoszKWfFWWiVg8MopcS1mF9pVe1KDvudVEP3ZMuTBRyMtuLf6FMVUsa3bZvBcj",
  "key34": "2QKvFL7kKtfvHvpw3MpTUQQx3NpXsUjStUn4EwWwvR9p4Dwor65LVabPvgnD3dXAAcKGpDMjLtUZdWBTtYcVJ4ZM",
  "key35": "37U2oXAfm87BMTpAXLBXcZD8HgR24uddy4wzzNeamcy3E7ihYa2nKiU5KEQwNSRgB5xD9hAFapFxrw8kjs61X3mG",
  "key36": "2ywXARwSSfpobnFS4Ry9GCi5nUHPCgRsxr662KgnnHtQvcuHqiqTBFtcfqKmMyQXE4CVHWKFqDv4kSsVg4GwVPES",
  "key37": "4NNTRVhJkDAwQ1YDGa6q3n94AYuYTUHwjZhiqbri2jbKqohd5tnDgScYhqDWdH3Dew6A5Q386Dt62f2cmkgX4jVy",
  "key38": "4qLgjWRhp6e25C2RGUtFyuqpovfpP7wRofhFP9uwPP4TjVMrnAe9g9tL2bybrf4NYA3BVmV19PnroimXLC6UorBC",
  "key39": "28FcUjFXqZpFXnac8gGYs3yyUnnnSypxyEc8ociZxUK73P8pH7BcVsCwxva9anB5R6372JJy4f8DA3eXp5hfiV4o",
  "key40": "4w2BVnSrxFzFR1HK3mvee7WcaVkmtLY6sig4MU6LpVTr3HnWPRCCRPJYouiPhNoLZgpAUbvbDSbdTrLEPKcE8Vrd",
  "key41": "2mHBp6Di29i84z6nQpaRTwGoagccQ5m26ayNRmdhFcL44skFY9pyQvbkjtSBoZiqQdSjuNSwynM8uiFf8HEtNwFF",
  "key42": "28NTLckssZjBTAYBohvx4HwhW1xS9swsmvW1e9HpAjVxDmkjQA3BpDb9WMxQSkceA3WJB6W5x6hdfMmKpuRmxizp",
  "key43": "5DRra161j57LCEfENNE25Mtj6Fmve4nYjnmVUQGUhtMGVtAfXUcGTAGKfGjhZC21E2eJQYpThXc5vxH9iMwWmDoT",
  "key44": "Cou3Nz6btqPbeH5FNTGqPuH2PJxXPp23nvZ9TXS5MxWKU3Rh1ueTCvKwucRzwxvZ4bVV147judghm8CA71NHhhd",
  "key45": "4Ngxr1zDP8QSze3PmS4UCJKMLPoJQDgPdkKZzDA99dXUL5RDNBTERiJLS4qLyHxwgPjbmjMq4LMsQ6mB5mR67QJH"
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
