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
    "32nARteofJSTCmA3r7j6KxpV1nFnDWajAAwV4Cm8qcxTaRnypRum2bGj3UDyKSjeUL4jguE2xX9hj2rK5mepc6ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFUgHBuwr2K38y6ETf3rS4ujFDH83MtzYpbbYkhkB7FgS5Cso91VymPFMuLqe2sN4TWfUxJsDfiBvedWWzSW5uK",
  "key1": "DNStCzL46wUj7b2GbVsDPhqruXXMmy2BDrvQHwtpwEM2L5ezHE8jaHj7q8rdM6GDKK9GSHfnFiwX9rC4cnj5XrG",
  "key2": "4t5aBmuUwVcLr3sc9fQifecX2PhMaAFvFHGnJ4BT8ixCg6dGotDW7k5UgURwGC2XwQggWrNLasewB25iHEvMD88b",
  "key3": "4JHS9C6u6NgLxQ9firJS2NxgDG8cDeCNhJgGzFbzHFHKfnCEZzvivW5EbmTLNaMJeoukHAroJ51xK1h9E8SbYZBV",
  "key4": "64zJhoDyWcZQQmUQhYZDRXqR3VCuW8U4tmFyeM274SQQRF7QuMXaQQKUEYCLAL3S2ARMNktzepaVekJbev1Mxj4A",
  "key5": "z5mhxjndZEicBnRyGVXpNHshaLgACRv4wG9joqk7Ggk7KXi9U67qHH519PxzjtLJ818JsSUXGtBTmCu5sYborep",
  "key6": "5Wjx7VoqbvSikoxfGuRbwRLjmtaLzp65jHjh14VFk8Z8h9BhJ9Rc57VKxC2hrAZRMh29hDTiV91Vy4J4uxbRcnLP",
  "key7": "5cXSu7XcpUnDD25JMG3KqNGoKGKBbVF4UaTv5SRjtSnW4U7oBpRuKXgpuNgLpYkcPhnfwP3WQnKixvRMaPGtTaux",
  "key8": "2LYorjZkXi3y2MzSjPZUbU2qHbfryxE2T4B6eWC88ayn6SG8aKQKGDcrZpPy4KwaxwkAZsQ2m4XjsabmBcxgym14",
  "key9": "4v16BQBU7Av3qvdBPpLDPCP88XoYBCGVhS6EpLWyLHh3b1cLLLGDyaU3ckbEHVdW9FqKjy7KPj8tAsrJA6FfNbQ5",
  "key10": "5npk94aSFcvgyrnrJJTffCjpuiNeXbYdPw4iohs7bLx1EdYV6mg6zLtf5kbJcejJvjYMHzrGzWGkCKBiBkKu8A99",
  "key11": "4x5YkAidz9smET5xUG5G49vTrGsY5qYYHLsp4FxeQdtrcit2k7VUiHtpBTBWngbx8HmiaYPuaLYEBexe91K3HqmE",
  "key12": "3akrE12oyyTUrXfHWpKzA3P4tFz8usBkEMdTKwCGbbFHmQg7jWXq8ChHbSgSSLV3m5dY2QwN4L4JDo3t7EpNVNcr",
  "key13": "3bRaDdkSrp4NdEjJWdXZKf7LoTmtxCEgiAumn3ihNwuhctAaC6hci1PaM5qpg7pKdtSH71LoEmQwgbr3NUgyw6oX",
  "key14": "3DGaHAaxT2bFy6CFoxC1xFCN51jhze2wNnMsKiAeTF8PXg4nz6V34DoaX4hA9vH4UKFN9Bra1jGv34MuYgeCY1n2",
  "key15": "3CXcpumuEgLhBJtqMXXX7Xx8QQuKhaSAHZUeVcRgbRd336whDnbZkGdJXoxszJjpxSmzgMhkoxEucDUTtp5jUL9y",
  "key16": "5j5LmcL4DE9VJTBixC3QbgYsBZi9bmzBy9T9QGALEDMU1bZg8gF2FvskEodisP5AbBs574f2ADX7b6zMDiJ46qo7",
  "key17": "3ULeXDmDAXut3nEYCj4sbrN5C5Pe2HU1uDT43d8Zf2hbyaHpYLMCNQe5mNK7zNFqfneRQYVTSR6vZ6CoH9XhYHe1",
  "key18": "8P1MFRjWziEWaNGAprKQfZ2hLahghx7KWmSTmpLmkSHjQpzKSCSNeuDbKZ12nrAREztRXwsv5NU5By2HS7ukq7V",
  "key19": "5H5RnbSNm1sxTX1b8mHCqtDqVFoxgavnURg3x8GARr6oHLhUUzBiXXEQHEx8yRU8ooKgT7EJ4FSQ7kBZ4SV9k3Pc",
  "key20": "3nuCRrikAVRNrkJtLEKj7ao62nJ2Q1emevSXRvYx3m5in31bVMgvgbN4AN9tLUhWQeCqnyqX4FAgKXu5NTSwNhJX",
  "key21": "vVYZrsF3NQUt4k8LipS9w93KYTdBedZJGYXKn8qVLXRWTJod8U7qhqwV3Z2dMY6nRTTPSGRbNkHu6x6v4GCNBxc",
  "key22": "56mZ8npudzcTJ6REV5FyvtExyNAnTZ1y5SP4VcUoDfCzdQJmkgS78XrhnyVDVg6WRMrxP2uqs3TqvZshGxCP2vH7",
  "key23": "4G9g1A5Bj5wdyqezCtuXPWMhUmafQZazvWhnM8hNq2VfZXHxP7vMJ7AoToNuoeQpp8Z7devcVP9ZNgNZAKPDwq49",
  "key24": "4ThXpwhBN4PRZx3j3m1gz5iVSJVcTso7g7LXX2HiwiJ4VhgnNMmFYBFfFKviM8AUp5gDqv99dN6yY3X8cYm8YsRj",
  "key25": "2WHPtfqUSF9fCsN1mxAX7nKSu5643g5FtAFiRqeBSPnKqcbMmeYznQVzCZy8Lwf2Q9SwRyHsaW8pBTZZQhywNVGu",
  "key26": "5Wx8XyiKjFgPUUdp5dQifAQ4Ls8ixBPn6JfWZXg4DzdETnvHPPhVLeLJ1djZyTWoeBCjdAwtwkXKoD81oMGdntPg",
  "key27": "ZKSC98e82UtDK6UtNJDC2Ka2EREevKZmbrVw7yY94ZPnMr8VLJZBQUYhdgs6MtKGiXzSUmqehjq6qRkQCXVXGaq",
  "key28": "3uiRjrJwZFdw47r1eKKd3X6cr3JYQswqY1vs5LMhgA7DegUZMq8eDm67zrPzxh28EMEe5P2R9tDDZUP7bHBseHLi",
  "key29": "52tLziADYwHvWkhcqFonqyu5vGtL6UJLPfyg9G4G4kKj7GUVcteUqwKEv81RuzZQemJ1KZi9iYrKaFBz3EJHok4r",
  "key30": "2kzD3orgR9szEcNsz6os2S3JZPodR3eHDVaZ5xkQ2TETZJvcpcTPycbyub4G3XjBHZ6AroSVcvV9iu1yrNcLjP8S",
  "key31": "5C7YQxocX7jvSnrkVF6fajWHqfyfzcomXxSjtJEtfnrFWDo6b8ZQiEb4VEhA1ibpVoSC3b4kmcR9RpcuBpg7AoNy",
  "key32": "5iA7baTuRQc1A2rnpGCE84hmA2yDK6UD6T9QshTQtWxBGop1Yhd5G4YdSpDV3a5jYg5Nw9eaqEuqgzkvNJDvKLqF",
  "key33": "4U4attVQx3gUhmkzDrZYtH8reiznuneityixANiKRYUbAqrWbNwAPAdHh3Euve4NqFBQQSystAGB5fTi1HmofE6k",
  "key34": "441Tb5ukUj4QUWyT27CBKzqsSGtxJrRC4bUYTfvB3pW6L3DQZ5yCLxn61jrk3DmMgXodkbErFsgZq4qF4LwKs8Pw",
  "key35": "2SG6wDXf1nZ8QMEB4dAyBbE1NfJmUHfDbPQjq71VdCKT2vxQKFDtzVkfydWb4trwS3xqxSTJ82cLJ4GEu2RN315r",
  "key36": "2DjKKNaCXLFAi5gPrE5N84WQhHgCAE2sQumqLxnn7miSXGEd9Vty7ahp9RdMvmqwSLrMKbBmAtABwVP7VhUajQYc",
  "key37": "5pShVnVvf9CnmrGiaBvVKPDonnayfFFcW2g3tGL5ACncuCG6WEZkvqQrBkNhy3gch5AHFE62yiDCUrdh5jeaijkT",
  "key38": "4eJcfBsypCJK7hLwAa9fcuHzuyWjfF75raWsagtjRwBZbufwKnVLF2EzDav4r7F7XnoWBNsxSCVStZEzGvXPxG7L",
  "key39": "3morqPxe6PKKkm6Vg4aLH3ZPdRAvjjG5T48EHR8WbcPfgYR8XJ2xHEXzTeyJJu5pw2HQHVk9WAoy2E47oK2JbLXn",
  "key40": "3CySyuiKkyu14yQQDT2N6SyhQf2oHnyj9rsqTvQr7jjhXZMRQjCfpPXRwx8ig2sAHj4AXLhy5eRmauiGfjQmZQhv",
  "key41": "5M5kGTLRMcQLhNNPj2uNMgPmZWQenhWfD5HMCgVs4F4gaVU3iEHASsPKZ785KhrtB2a8uTrLhaa3FAC1Ziprmo6P",
  "key42": "3PotU1Hc6GEAq91RNyioMdHTjrhFrL2upwLMGTbuhK5gsaXXcd1FiZLpkuNFZqNjT92wNRCcWUzK4dsU54QZxPva",
  "key43": "5g3qQcPBPVG2GkyE7rR5juByDyWjicUhF2sumk4eGq1hmsQncC6RfY8VQS7VhWrsjHH6j2SGisPVLwkKAcjjobbZ",
  "key44": "63YGAJF96jKFHxBLAGADDMWXy1UqLvgesuvavSPmCDqdL1Jc2XGYHmca5cLcKmJKrSrqN4J39qBNj3fCHAgV9so9",
  "key45": "3Z1iL6MLmZWpc1YpVXBSVsBYjW9Jg3nGBKmyzwTiQtYCfxTAiz2jAkDZowG2xTo5dxYccquHmhgiNxNnqNLXjpJk",
  "key46": "2Hn43UMLbVyqEqwjnkWviJ3CSchJcWLRiexKk1LwKzz7p9gWR5KMjQq7NbARrQNiRTGSL7ZPLKYPds6LsjjpH9SX",
  "key47": "2gLXLrkV3sjJDQqMNcDFE9pc63ZzxXiMHEr5xCbxPQm2eiPu4FQgiWGsoExxZjkGo4y1hpWF3QNBKN2vXz3KoYne"
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
