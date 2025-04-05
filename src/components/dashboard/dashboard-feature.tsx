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
    "4wdRkgmCetmXUmfnqGz7NXtpYHv6H6mGS9VWUUbCTY3dBhyccKiYk3jYvfi6CekjUZLx5GhEVbV93WjLbdWkfnE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFGgCTwSJQJdnZWbZrLKcgETNVhMpD3HsKkKBZG7NhspqFEdcc6Yp2zUGXhNmotsRRBhNbyFMit5e17wbUtYHGJ",
  "key1": "5N86sNSzGP1BWcVD4DdnisQ2RcmchtQjvHLqahmtNdg8oVQ1rJ93tkHQ2AUwKyDFD2pJAcAc1apZtcnuvU13ZU9D",
  "key2": "3UBFHnZWpoVccqPaGgVXw7Lk5wFnx5rH7xBftncSddHvjKVvF7KU7hdnzapKVYK3cYbgXjnpyLEbVr3H8byKUMqZ",
  "key3": "4medBuSXj9Nxt5j2cn3hQfRrfUS7ASYgVLEy4hdjo96NWZCseE71vrWbQgCe397LzhGwvugJeW22PLFzNvXzZw1u",
  "key4": "4V8S2hus98k5AZiwUQqNCNq2N98hDfkRmxjM1YXveeDEtHXwP5yx4MDkFeKK7mBkapBQmhQ9Qh2Q1BpXmge1Y1R4",
  "key5": "2Em8TKV9ip5iDXMtUEj97aqjUxL4zKZBfSeUBCNHCeqdMXA9zr1NKUQ64TWHtffJf9VhfSzQBmeAkTWFZDD4Caw7",
  "key6": "5HxSTQu5Ey9sQTZCQ7gKLxPZcXyfsYmNvYNdFQYhYv9KywLo76JkfergKdFHUfeTPX3R6J2uXrMin8JwXX95gm8s",
  "key7": "5HrwjYzkhS92ZrD1g9GhSj6CcLLYddT4gP7ubDDjGsNAQwVgTWptk71kGAg6E6jx6qvphEQkbrUnSpimyFnhcxYx",
  "key8": "5YhgHgZXPvtbrQgQup1CWz4UyEWpoZkh6yKQaCFvMSc7AMtxC1tBcoZcZ7nv4WLwPunSWRqYZi34emCFitKH7uxP",
  "key9": "4hJz2BEcowbjxcsxJNmHvn1pLWSwPP2WmAFgvdNbWLEjPrtft9jsx9xAHwx88BexoRhmWuSH19JVbiPGg8s5SB3j",
  "key10": "3ULow9XoSDBru2LTUJULXtuP3y1uqrBPLo882g92XevwL18iA5uA9M66oPcZPGNur7dXujcRLckqX8sUAdNPmHAe",
  "key11": "VSnud4dDJufnHttGhcjpDFBGyDymEiJBRqd2KLrzFrCgjS1AiPujY6nVkjWSXjcdxJcLd2riJiAWFw6qrtf6p31",
  "key12": "3appFtbuJeYLku9ZN9R6rqsASDW87CCYcJafSwgn7nAusEB2i2Nw7gEZAFydFpd26UJuCvnudKvw12Xyt4a1itXE",
  "key13": "5a4G6SRGXzH1aW5FUjaNxSNBfo36hbtfeSLobnV5RFjqLhNRS3WG6XgX1Wa1fXmipi6zcYcRqJkxEV1P8qpcPaHE",
  "key14": "5nWk1eQDPKEmcHM1iBGBKVva5jiN2mhUqqH74Lw8u63tkZ3gAqdvciUvbL4aE9XLMctv2gUmD7rwxCAASsqgqGeq",
  "key15": "kNZSt9UaReCphLwma8odL4Emof2EcHwCQZBXjzCF9FDX6mt7Z5F6py7ftkAT1zxr5aU4JSTVt7FGJ8mowvdhZzD",
  "key16": "3SHTLBbeHUrBELAMi6ydfWxgaqvqDAL7FfHMHLJhUrsLQgvKqJLJufDx5hfx1Cc7PZ5Rc49SNXixEdxdkTq7ByQ1",
  "key17": "57WDyVmotZMN6xXkztp4RJPv73QkE3F393TT8BsahMhJFJo5973VQ2rZRgLfuHzt2uzTb7pXBppUh7LD8rBpcBj1",
  "key18": "3Hhv2deANGAmrJZE9hGm8TF2vUQwK4fCTgbQXheQBu7oDzFCmk6UqJeKRmUsL5j5WFZGXKxCPVXmLogxdCH7gx1V",
  "key19": "5mBp7G4u4MfoV4bv2aYCYZ91TUaTqBNNH28cPy9Dn3QEXUAGXzeE7j55dZwbdkoGDuUdqtPSpUh8mqucVx9SxxBm",
  "key20": "52HX77cmgg57kfPq2vnaA2Ht96PoJuXAcECFju3bzpz4F2YSnz2fR3cTaYwpG4nTGV3Xn5WikBd6RkTjycHFsBpY",
  "key21": "2MXNAcVtMv5MpyHV9HiCrfestoJU3BksFVDPGJvC63CgfLtmtjAhYneGM9H8kTSkdoiuiCvPGt1KwhKvVsSiK6a6",
  "key22": "3dMUbVehyEpwTwSirVi3jmUtw21tv3w87sHUyWtfPzSzgVx7Ao1Qa5R8LmpcGNRvGruEZpxw1KNiYi6hr6JNocjf",
  "key23": "b4pih7zDFYLTTdmYhK3GnTe2MAELbnModNuScxgBdhJmGKvn8TYuA7hfJV6cvCjFw7yoDgvqvVku6HWPX2iYBam",
  "key24": "4jSDwnHKQbjBgpA9ZQ5qArPJiCWzYC9wS3CtmzYpRFzqGpnLBgvRuxaZhhAi8Z9t8bfYQbvkMYMyLQ1zYpGUxxqM",
  "key25": "juLFqxLH8TCTJJgtaoTxuk5m7peyBNFikUZvyzM1gytuCMGeSjVStAHHZHYbSq3AZ52wUqkWKnsV9SLEsBJEBZR",
  "key26": "2vrCKuDeWS9PoYqtEDThFkQfZrBJwsp3se437Z7NsiN59X6G1ozptQEsebo5DS8v7ULotcqhyYRR1yn1o37B62jG",
  "key27": "4DT47vkZLJpeEAAWhW8Pra3y4rPPgu1FKYXcQgKyvi4m2rgp5rrTb8VNLW6oCYttumJnVRCNwqpCXTDZNzxMzdSB",
  "key28": "4pGJJakkQUxKBtNhtifrprnCEHpqMH5rZYah7ZfRfKk3AbBPtuLkHFiE6AuPK42zdZdfpihgRZf2eouv7Soavj1v",
  "key29": "apaKueFJZdhdgfFfx8uhFZeAxn4oquDTLg8Tfr3sYkV9oVGMHSSewgBKGfACaQKdau4JtNmDMCbJcxgCJYXxaz5",
  "key30": "2cBANN5mSGq1MrSRwHjuD2VQeNJVWktmLJLeyxaSEpgEzj8dyN3a7qGDTScgFEvsL9MCW28EKbTKzPmD8ZuRoch9",
  "key31": "4wD2XmpC1tqpbREdJdXFeEe64aW6ydtQaHdqRia2VCrBsBCRzrrNXDJNCG1PWqwQMYDqfDJcFoQU3tDr2koAiBrP",
  "key32": "2KSHp3Xt3AZGXZ4Ni3ejYk9iqfsm1QDfj5syG2n7EFon6cH95MLxdzKsiihumTvEn3b46APsevtvQb8wuispYq5P",
  "key33": "3ff94kwYUPBpKLehzYi4uYtNnDLn9tkDWMKDs8Tsg6br4F8ETzuebjdQGfRPKH8NcwpyveT3YSnKsQdJmEoiEer3",
  "key34": "2TtZxWYmHB8gX783Pg9Xv8URUktnEQxVmAujCAuUEu7kon96vZQyQHMpc5Wsw4LozwKUeaRKjUqLVv9W1zaCxV1K",
  "key35": "5RNzhBTXT4gv2CyGh1mTiLW5ubgtdtNKAAfdhYdKTQyMgJ8TWrZR6Yxkb6azFsvETrw7xS75yG5gdgdz8osh6iuV",
  "key36": "4dj6xFvdTejhctH4Wt4ArZcBaFe5isK88mpH4LHq4naqoZbrXLvuhGkUakCMRRoXrbKQAVXsv9zzoz4nBcgx98Kz",
  "key37": "4eUD3EPHboAwhYcqWmGat8hB12znmEs6VamvZygPMfgVkExnscUr262BErL5GuLRHx29PWYgvxfvM3khnMfpuF6Q",
  "key38": "2Z6EBn8c61ChaPySQRvBPF1KDZj6VczUdN5Btg6uEh8VyyjCQPkjVHmKzmjZ7vTg73KwHDfoksnBoYQXZEBPm6Rz",
  "key39": "3HG62qtke4KFa48G8Q26JM5uwD1UC6eYMEMVfsug546PtVXUNS2MWxzgMVs62b9uut1mBGoaDjKMR8f9EFb36JSz",
  "key40": "33fEYx3cmtzdFJZSJ4hLj3LcDq6LmWidtbEgq7pmi6UCRjRnFoGALwkdEnpeu6thaQwzAmnE9x9rFoQXavXrD6NF",
  "key41": "rbtG6LPSgCcJGBpnEMZuFVLBuXa7Cus1eBLyizxxwqNqg1sKu9mUPJL2qzqFWPUgnXPPJAxx35Mz2MuKdtJY3dM",
  "key42": "38Luyyc3j62VdFoWBtSsNEQUqwdQ1kWaGX8xk5ma4xKcrPWxQCxVTozc2fAuahJ4zC6owHgBeADWFR3CyXpTfG8R",
  "key43": "2EBUKoNtikfeKKTKG5fyoAAQ1LN3nTPT7Ez6rYksomTsPmQnYg5D8HsNqcFmPa67NvAYwD8BQ4hsLXJhbrziTyAx",
  "key44": "2ZgLgEACdQ2M4PnmqCCG4nQHLLUW8xc8BtBi35PskeCY8P2se3x5UvH96SkGiMZJFri8wHE6wRtmvL1JDvEUqEzt",
  "key45": "t66xRF8Jb5XcDxas8rQwcHfeHqoxuswnz2wACSUH6wfAf4TJ9QHY3gscAogUHtD7qXJwXNGvkxmktVcQTE3cP3j",
  "key46": "2BmXniRWYa8VyN8anCFjNtfiEusUaXPfawm7aruZwD7TJo9zwvAbxc7pEbV4HB59i9NZBPrmS2kuuA29Uz1SsuHk",
  "key47": "4Kc1hvVqG4DjNuFmcuZJn5X6FSFyqVmMBuJXSn3safTW4EuTEdMtDPmphs9AL3y39Jkd19Qc9sJcBwYd1zMBCWUa"
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
