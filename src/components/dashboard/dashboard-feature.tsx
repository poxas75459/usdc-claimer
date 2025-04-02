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
    "3RToDVgPndsmSpiA5LW7rKC5w6iWboGAWw1awnrstYogh8AgJPU97PGGSaGD59Uhfcc5wiLkwEMCNNFDHcf8QZJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7EBw2R4j9mPoX1UqgEAbEQLFmMcYCsB9XibrCsrr5Z8e1NKioj5FZ2R51cFMcCmdSBjHJmP3DjLqnQejTNLepY",
  "key1": "CXJj6ZvpbVL1y9WWEexSWwELoKmK46fGBCXJfPpkfftGxi7KD94PBr3NjHoUp2A3P61SK9tsxdjhDaGPNvwP4fN",
  "key2": "5QRkLd1r2eZSvYQFCg9hQH5MigUHHRahLEWeHH48vwL1Gwnw1Xz6Q1zduwkyRnYDnVLSMm2z1f2QDCZPrmf1X6BP",
  "key3": "51QCMJamUptLpHoNEad7Yu8mng9D8ggUhho3W3oZu6yoCQYGqwbRk1kRPxS75pXKkz7fHWfHVxV4KF6rGncjHoVR",
  "key4": "2mY8gcTUEfEh7g5rA7vT31HhdFNPpzUzvKQyFe6ygrQtToKpwH6oWKLppW5EkbPVKD6U4XDUsFXKVkGs39qQajXq",
  "key5": "5Lyse1N191V8vxSYyVta8G6CxBeez2giwc94WymwkytbfgeHovhGaPuK6TVjo5yNgKTXZXY6esVV6aLbbm75V8Wg",
  "key6": "5vh7HyDtEPPWmAxYgyDJMK9ZoqMj4oLPvzr1PtNQnXfSXvJKj7gWTeagQkTeh1z3vNndcWRvYRYyHirbJXn9257C",
  "key7": "2aemMk6MZq8qzzXNbTNbrWW84QiFhg4R2ve9oc2hKiMtWK2FTANSG4xmknkL3pGG2L9EXNX4SPJ4XgXZRVVE3iyC",
  "key8": "jTbPKrxy3HCoDC9v19RwgefWuxriLjzVDrpNp5csxDkTUV1GadtqEfDKYCR68qiEB13756VtkfRTXH3WL1GDbWJ",
  "key9": "4SQJHFT1NsUsDhoiAfsLMVF4AMqNgQuHLW5oFPo3zrJzBKqGrkL4yEzsg4PumNibkeabgERkj8nUeeqVnAUCcJDw",
  "key10": "3dJDV4WhbwJVNbhz7Q82BXaFSr5tJ4MWf8x47CYMhFBWqs9fjL8WzN7Y9xMwgYsr1j3yypKknPhoaGo7QhKYQtkW",
  "key11": "21PsktSkbGD3ioT2icvT6L3WdHSDbkdj9SB5Vj5L7qJ3yh8MhV5HsqPqTEp8HGN73DLvjVPtZe6CFWYnbzhVQGfm",
  "key12": "wrKxwcXbLvB82kvqv7aZZy7JKfdm8f2Zpbt7RWTbuvs3vLJGeyeoAEGNozmzqBfR4iwD7AFMbMTNeoptesKj6fe",
  "key13": "29WsfovjpbD23axzGC7Dgv4frnZjypi7fN7NEMywUhTbAP2VHXcngWMxeS8w8FZBbu27KXvSbSN11JNGP9gyXxeJ",
  "key14": "34oNEeXkATiq8jyx2fET68LgEikgMJTy1p7H2YtoaXjYZQbxSvwTTA8uYr1c7neuvditNQB96feyM2B2Wojoe8bN",
  "key15": "2aMhZMmqKaadTL39CMW5djnBrSggq17QYFYbs7648Gts4TeJVNexmoPFXP9Ni8TmoR3hDaFqmnp6Yxx36nk6yB2B",
  "key16": "2EWPDf9VGMKwNoiAqCqwizXeRz92h6b1AFK6jrn6nZRSoQdGYCAqiU9FUnXcNHb26pb9kEBXtvUokPyWAcBPmSPc",
  "key17": "zr85odqoZraPMemd6E9Q7CvSKNkxB6Gy8i9SDWrQecBtWjT1NLjrg4JtxCHX9CrKMdm8kyS2a4YgtnqCwheaE3T",
  "key18": "4WphemxZBhdG7DPSYZMXEbBKB8kuK4YZEJK5y5fn23sjXBu8TVywt9diFBuEe7kZ4XRSinNqcwwVruxqLuy5CGdd",
  "key19": "3RJgt7S4gCL4jf3dbUsqVHXQ8edAAMjUZzbJYojTW39Utik3aRVkbtD4feUCeqhhguvYUSwFGJwoQh2t5aFLzoMN",
  "key20": "69QNxTg8a9P1SVW2EogWAXw7Lm7JSeXNKVnyfmCRDVrNE1MUpKA3HTjgJcpmaJV8v2Z6Wj5avyYrhofDnUBBS5g",
  "key21": "4ybjQssSQPY6hU9WmZvx6mgbveuXoWRUDcrYqZRkjHm8qVco7qBPRHTYpSEs2iuhCaf8JuTzhq43SaYhvu3Mjdm2",
  "key22": "5rhU2rfAcJ9EfbJ3CN6Ndr5Mhv6ZaTZxDGm8JXjqZiGMkqHovVJu19wJSJop5TbaqneWtxsdBvuKuetC5NZWNUii",
  "key23": "2Fu5ZWugjQgAYXJLncLiiQP5JY7KCgmjgQCkntE6YNHD1QhG1qhzwwWKoDKFAw1cJexrziLtEkzeWofEdXQiwJAU",
  "key24": "X7BukmbPVpnTsMPFx9azpDivnBJiXc4wexvsGrzmup6786QKgHMnNGATzTfgSs4xpV2nBjwriEuHRkcqPiZ7Ur4",
  "key25": "kt6DBYmUBMmzQbgdGQxqWTKqVeoWcqwCcpaTY6wAHCCY1xvDVTzBZCWJtExDZCCCXWmvrkM6CsKc3oHjybF4eBs",
  "key26": "ChZADUdXGUnCZCF7S848ZDHWsSJ77EC5ArMTQjK2kRi6cnspuqpeBZNRfejYAotqGSFrZwn6Tw1cC1jUVBv1oQp",
  "key27": "2jifoqszhhERo7sCCyv4UHgXHF2EbBNW38WcMETmEcHqSNC4X9BUNgsrBcX336fKLhaKJsLCgp9W2jmbmn6aQDgD",
  "key28": "3M14b4kMKGzAZC2HPFf1Rbckmm1HDYfXYA7twXRxGFQV3vMrvFxX3bgrrUyEEW468ij191Y5R8XbJfyTSq7VgcrZ",
  "key29": "VGNeni6kAabaN4GUGAoxWqShaAUJNYxpgMLe1v17McqqYeX8FUwUBQq1Tu1Af6oeDTJMUh8jkF4Cik4jVKCH8YS",
  "key30": "2yNermQ5tUneaoabnkFLFfR9hrbVsNrMPZiCQYJGpGDXRgEFAdGinE7EZLMWMkz9dETQhwM9nAuSeot9sEezKYab",
  "key31": "56H4aFn21w3mDzrRJmcVoCjhARSNHzP9hgKXDzMVka2326nTxM3j9YDtXoGCSys5xiGcQ5nMU3hHnr2h1UZQUDXh",
  "key32": "2Q5cpy8rQxXb2397xCZtan31oAy3dMUJauGm1DbZQFWhrMGns9fzeBqTDG4hvhprdE9siBLKHgZDrxskQJmGJdyy",
  "key33": "5Bm5ErUhH5kix5GX26xn6VDc8G2fQxuwaK9yyCR4BSLbEaLUjg13fKHx3PjBQRSJgPBUZE2UN3NmiYg1ReDUa1Wg",
  "key34": "3dRL4FmZmYcmRyaENsCaTKhQf9aLvRZowZD3uUSRY5PKo7P1L1jC5MGLoiXLpk7t1FPuxWzGkk6qYw7dDddLEGme",
  "key35": "3wq4twf4UnWgYZtYPNNydk1aqszNpVqKUHTGVJ7qrmr9uES4poQK1UrWkpqW8ZiSCG4qXp27aFXVkLjiZqrxqMrV",
  "key36": "2Hf1jkLNdw7WRvsRAi43p2ZXfu7k5Ztunoj3nz1sJNEMSSXrMJxh6VM9rMTSdXWyvV7b43PXwuqHpuYZ6wavNQuV",
  "key37": "5qWRKoBDJBtTLFjDRMRvAWjtSwA1oKziCYbTmzE51N2GGoMKU1bv6TNhfEaDN16fmiHpkFtfjw4GaKyRoTh8hkK2",
  "key38": "2QGBsqGfLUp3S12A86WN4U4Vv52CGU336tAHfVyk5AAps9tVXkHdhbHBUVqCbsdgHoN4qtVVX6hJiQNS4kUpVCke",
  "key39": "5igvAuTgWYSHR6nvVXmEgoxeTQAhwpN6UPqmnL19STpJWmrdLT5sbsrrjS3x7xwKYP4exxWyo2qi4LJAMHcYoHT1",
  "key40": "FaNk4Gj9TwBswfYhxNd8Zqv2pmkVosp4GQRyMxkxbi76JVgQNHMfk4LRqVzt4cfZNBK24mpprSQLP6TRbJVJ1sG",
  "key41": "3iVAXaAXnDjaviPoEaHA18KjY9jCX1dinq5j2LTshyG7Ddmx67VvQbrd8FyyuZxA2ZeHY9hWTS2dJ2jiwt7kVHkw",
  "key42": "2UyXWEBdqQn57TYbUptnYmKsE5QM8GteKAKtXrabzPT93LzE7533wqt2jJhD16GafU3e3ViWWrawyiey76fiRCyz",
  "key43": "4HnxBUTSjCPsibMS7tTiwENbRhrheWWz43M4nvKa3RgoYkZKcNeDqkt21kViW9UMT5tQxzVkTdAUwdUgEfQF2i12",
  "key44": "48F4NKhkh3CzKrEqJ3oWAqqTgndVy6LaCNmszYjoGizA2r3yKa6rFPNNKrxVY1gj3S9SVHXw9TXeNN5X6ctKWR12",
  "key45": "2HsErh9uxU6gcGVNWu7FDFYcsvp2BnjnScuEa7uh1RuF2LajkkaREmcgkc9HKABX7PXL2ncVri2sTQDsuzhH9faD",
  "key46": "2G5YLrXs8VFhpSkNFJkAAztUTt1kygjKksRA4Mxv5qtZ7CrNW1RDkkXMaNygHT42iQnKbP3ST2xborvh4UyUTiyi",
  "key47": "32X5o18mrpUy6N5bVCWQ1uK3wt36cHipz4j4NH4797WubdcdSR6fM776YzPWsirbkqLbkwcrKdAnE67MRizvmc1",
  "key48": "43wYDXBvZTziRB6hVayWLfUVkQ3a7puWrCAWruLgoiPKa8aR1CiBxfjzSeagXrBySpAkxFrbQTATpdQW8Y4qXfGo",
  "key49": "5XFrLt7WYV7SxJmBUMNXVoNR7syzaFDtdYL438hPjc6rrXkXqsvmtssLGYU8YPDCum3CGXDq6hTcD4vfEspcxN88"
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
