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
    "8WrCY2g2itBCgNczH3wWQiZbUbgp49ahfGpEcpMymj8kCC9SePyRkXdtxwiQkUERhAMuHp7RZ9cskzqzngJtPJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGN9MUoqYjTvK9uBgsCET7x8D8cGWg9fQ1iZDBcY6MoDrgEm67Y4txCgcFnxprwG3Q7TM21QPpMMqcf44Yxuu4v",
  "key1": "4jmFcCFjfVUnK3jqXeV5GEH6bs6td97RW7e48HAF5DA7n495qXqETeWUv8zHNTtED3GedHkWPnobJLvCP8crNJaT",
  "key2": "2PLmEDLQCEUQqZ19KSvPpB6rnewvDnepYWiSEC8J9D8NLNAkgMyjtMeGaZLYoSpCvVLVkgrBPQgL2jYN6jpJbFYs",
  "key3": "56nCwTABtfpxSXvip4FPZZjPd2QEimYFrTKbwnpb7j31xmBqGUESjvb5heNQGYqvZMuvTZ2aCxtcr14kdUU7FKFx",
  "key4": "Pf8SxNWcegGD4Ypxp46Jt1MxH9b961WG1idHCYaVB8bfTDbRRiVNN1iGv2xjy2AgvSyuKvxpeVDE9nXxk821d23",
  "key5": "47jVNEk1akLuBqh9hvdFQhFFfJ2QyVG4eV3f9ibGVdKacKHuTQfMHkJB8xd1VeAhSsYriiW18BejyRX5QSq77DWQ",
  "key6": "616S6fqX1ciyGiCKPrVNqxxUJasy3Ejkw7mqKyNqn7Pc1pEBvY759TSDfooyK1XyQVgxF8ZFoZkzg7G7rDP6wqbd",
  "key7": "vVNwCL2uhd3F9FRTzS8o5CH5XNEBiHYvkgH22ziNgor8EvoqWATz9JWcFojbRUCPqnonF9kJ4Pmy3CA3P9GN83k",
  "key8": "zEMheLyCToYrCHmuoZQbDZNHEhB47XU61i3q2kM5oyYHbvREm3EG6eqSNB2mTni3C2V4PEkXpo8efZRXaQKKAwJ",
  "key9": "4FFQJMRQnpjMA1aHgh4B9THpWacCbdmcTGd362fMNpxX1bpv7GabKbjxo4hnQT7gLRoZ8DYWN7ZCxLtgDD2GteuV",
  "key10": "2Y1BPquAerbnrhYsHoprNdxktTDig7i5D5N1YShr4iG1jQwZU3fDwPjFquNzRutWXfU2KjkRZuXnUn3qwK5r65dq",
  "key11": "wAqWWGEXtSqUHLKtJ6FoWfoPCPf1vrc1gcKcAvr14juFhwbCY5yrYvnX7K9wNZPSdou5CXBfQRLziZAsyQ4ZDGE",
  "key12": "4XCLZiwBcgnkpUKQjsZadkuQWBNWzJKJ8zS1yeDpt7XQ4pARRdg1VoCrzxMBt1vZqGsmbVqCxBkcNFdJESyDQ1dv",
  "key13": "5VZrHboiffLULfsYAjZAwZmzZvnodGisr671m1BKh9wpxPy9bsyWEp2NvzfP6KGdQCS5xSnWhpUbTKrYawMP6wJf",
  "key14": "3MiUqzXiqfMtZZ8EytDJwqjpN9TCwz3EigaxAUgQH6mziz5JmrfLK6hKhDMx92u8km5r8sQJWgzHXzu49ppaj7Cy",
  "key15": "3dtAi3mmXwP5ymkEwKE7x8vWJZCdRX6etBN63yzDVD3gBmYoobroos6exgw8cj5BRybgC9K4PZEU3aFsbopBxRMt",
  "key16": "KxMB4oySfiThtSoRNvBE3VyzYynnk6TpY7V3DK2thoj4FkugSHT2WvnCQr3giayq1gtKUtg8yR2gb3Dq2Hd8M5T",
  "key17": "649FzbofWe2P9MHRi2q62boU92z6sddmbxDyMNg2jyptPZUDhRU5WkQvtK9aS3DRVonFWwcqsxEH8aKj6DwjZ37P",
  "key18": "39D8dhcoxX1DdFmaaH49BEWUx9oEEnVBaFJFfdRCfZyMhai1EkHZKPhVPnoBcRq9GYQn92BeyetdmYecLJfZCnvP",
  "key19": "sk9YMeoR5YuPCSYXmsiLNfuhJT8Yg1BQiGTfDQGpF4EigjcDUdChuJUZ5rcuvheEpo1fLvg4KusaGerbnb9tYDp",
  "key20": "4VJFPfByJKctQNV6466J6hMxSUCfhQmb5jEBixnQ1DBVvgGLngmXkeYFpfYFWTfrHTwrVx6hHX1PjGgjvUZ2E2Do",
  "key21": "5CFfp6GCvYdqQNu6Aq1bvZRpPoHH6B9M4u4uCrXxnnyXeSvFizHRj3Fx7WUwUFgzrEJx1xKgchM3MSzYJ464H9Lf",
  "key22": "42Z29GxS3TLpSpCZKpzka3BGggyU9EPjDoCaQ8W35BYjWcQ2h2TReWgNVfXEzW3HUQuFn4rMxM2EHRDsrf7Kn9v3",
  "key23": "422kKgNpmzQ4SLsiDybRvwJtszjHgepxK6y5Fwj4RjLQT7qfjutntznKRiuTNNBP3SHMW8xMZZoeZ8gR4CU7GuFJ",
  "key24": "kC3JDeVnj8aX8bh8zB8ugt8fELGT55AN6g6STZenmGK8r3GfQ9jmPWCcFdQHm5GfBviYzvNcitopUgvCGig2FPn",
  "key25": "2jvZi4qFujNfzXRGp5zEkyNz4VPR7gJyZyLGh1fzkSbk6c2hV8w64N5NQdAKM424Jxo6ybRiXutSxAG9oaHANsUW",
  "key26": "4bCa7sfQz7owFYGFBmebZVtavGtXjAsY6HbBtUXGRJeiz3oNw1jU7uQ4xB4xzcesWbyL9PH97ndV62AiWYQRYPXf",
  "key27": "4QPqAgU87xFduN9G3xd8i4Boyanx7ZbVhiY8UiczTFZRjo2LZmcxU4JRa1RsKygEjQb1cVAipWh4KexiPZHGemiR",
  "key28": "EUxEjEVviRkZqzhYYZr2XewRVjkLDDo5hndiWovpBiY5Trc9pi3tAsfMEqGuQD5kcomQNqE2A6JVQndPS3NtnvZ",
  "key29": "3sDaAvb9qf5VxcNmQPMSEq76mRbRtDjXyXNsHjVbR4eTAJ8Y2HtwNuaY6t4WVoNucrky1uQVLswGeS4wosiq8rsj",
  "key30": "aUTQNxhetoaerPHYBzR7ELeKBC6QjwHzMSe8VDpUqxjeacc7Axen93oSFc6zmfkAXhdcxe7MwVByJLDVkipHNX9",
  "key31": "vLMXUpD8rZ7yxaT8Dkxa1UzV3ygLkccdMZd52Hi5H2VHC2HVDy3thQi4fYny9cwkem8hnKMEYRYw8SHMWGvooqD",
  "key32": "3PMHPn4zJjpVJqeeRkSG4RCjKK3viB1GLJiGUDUF68S1y37UZ6tHTyYuTuP46icNpzMo38cAqUjigeW2LDiSkqnf",
  "key33": "1FuXDrGjJKF1QGTFudeDfGLEiUp8Scj6CWMA7jFSzyPgHPbTGDXc1AZ4P5DYGwK2qYvBMZahsMKaWbu96T2xEbG",
  "key34": "3HuaZydVz9aEXpcPVS9TN3GdsaeGrDyvbMv3FCu7LvYugyRZPTguAoBC78u3qWC14LnoRUgbai7yf5GiuooKA8qU",
  "key35": "vWGBMiEJ3gxxKiAJqYXoGZ4qvVVFb1DHjk5Ldmv96yHWEYm6GigRbseGJgTL56pEJnio53nem9gz5BUQEFxHNUV",
  "key36": "66AmgPoGkaoKCXs4tUUC1ayGLH32gW855qgSrxbdZ53vkMZSn87jdzWxwFxoGs8U2a8wdHXG4k2F8tPN88tN9Kuk",
  "key37": "44pqndSWerjWxiPUhV3qKPN4RjHmeNxav9WR8KnvcVS4tRebTpA1LJntqqPddVrwvpVUd7vkeqrQ9TxXTRHJAk2T",
  "key38": "38MkxMAW6noBAdE1eE83b3t4dzP3jj71TqSGJCGURoJX8XyTe9N1or1AktdRFXNfnynYTyeRRih9Sr4HNhETPmPa",
  "key39": "2oP6qfRD1Ln9MWBaTokhRgjMC1D6RJbJMJsciWr44NZDwRYEFuYGgQESCWGgn9KyhCbLjGqZipsbNQDigPyjW4Ky",
  "key40": "62v4gnaHj4ZrgxPVAScEAR5hnwnAaerwez3NajkdT2RnonhmM2svyrwfRPQKsb8MqaLfSXgn43NjhTacMhLF3XzR",
  "key41": "2X62f4AEncHMHEkjN9wVRNRncemFUni6KCCjWUy92fFgnLb5AhPsjJMe7ckNaRKKGX9rKBgngvvrGvGMTfPA9Wn",
  "key42": "5eQZr4yRaDNNF9DAKvx3xcbCx97sG1emcRYTSoU6uzis798MWCok2qTiDJBtZf2ZNYUeJJ64JLAq75hB6wdJirPQ",
  "key43": "3t9v3rD6dQYC2xWaFxa7Vi5qdynhdiBCwDyRkP6AiPSLUvVzZkLHH7p8BZT4AqpKQhkdBMUgHxt6bhtVEatTXedD",
  "key44": "3T1cKk6i77XMLGL8SE1ERK2hcbuZinWULSbJDvDhbgEoJXMjGd3NLeQWJG1ZLyoeNic9sFwwEXKQw9sfAnPaUh4x",
  "key45": "2ckWRcMagCcu2eedqqjdRKyJshQEj8vPSWZmhhXEqkB7wwxZ6SLbqnkwMrL1JcQATmYvE8GSXS5wLtAmqhLXnwS3",
  "key46": "5cggAb6JaNQi7LpHgqwT3Q13BABYm3sh6ncE7p5SH9VY2mSPumYpU3dgrNg6Ez5SwYf1yJVeTiTEvGtdZ8BLH9zQ",
  "key47": "4dU7aQkJEm3mLdVCCg7VLTYSxxXYuKuqun1AkFmcBqhg6fvmYcd2fKPgXeSsncGamdpG74jBzxbDg3uBRe8G3gfp",
  "key48": "5Wxe9F65Ut5dLEh3EZrgYPhhgLofKoJqdZU32YbkBxTxNJCuS9FvL1om3oFkNPp3HCgGxa7Ha1JmUy7eXLeFkVZV",
  "key49": "4DkZF3upBsN2TSd7czsmBxdsceD78epJF6ecJvMDuUdaUhuk6khGbxG2tf9HftSnHY59xtz59ykF6FjESqFMkLqQ"
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
