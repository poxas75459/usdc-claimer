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
    "3n5gw7rPggu7tyQwkM5Avyb5LdxeXgLbSMxfy7PiXnm6ggGhM7az1vWfwGGRJCXNaryYosNVtQWrZkHUgnCnq1Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DqJyWnVrgHJMw4vycF5xcgZnustYT8TSgAzZcStKFeZVCdhNgJyK3VmYxVbAXx3VSytYj8fnbJ4z2fFiQMEzSrX",
  "key1": "2tEJQzf5WUgHjtHWphkeN9xJZyvioVsnhcRRjrdypVYanzMAsnZRHVQStYA44rKsbLejZ4eEqadZXeyKug9Wmttr",
  "key2": "2aeULbrFD8Ndq37ovJfs1kxyuK4Lz9tv5m9MFfBfXV8gNuy1S1WPHyYre2gJHbZCpjUZBDvrj7iJAvUtuJQaYMYk",
  "key3": "93qLCrSPkUhr7m5BhAKJfAsuhxEFgrA8RRdCFhuNa6CtkuWFXD8JriWzK5aehSxspGHFPETPCdyc6reFtE8gWFe",
  "key4": "5xFxDDHaTeZnTbb5ijHWBeqPaz1r8VDFnV7HTMFbGT6AG5iJQSm52HQKBvJC1SjZfM2ytEkpHCfsujgDqWYoUPia",
  "key5": "5x96W7HJDjxA6FsTZoejECaYLEPWnGZunfXyaTij6PEesPwUuWx5FSDyBHr9fC9wu7Dn32CgzVBa1XCvTT7i3fRA",
  "key6": "2KxDn8xJ3TYWr7wZZMy8kCudAvEJ8dR2uj2amxF1SvAqnn8PAUrd2NoKtb8dQUNTTG4aEny2sKQmZQpLkvML77HE",
  "key7": "3R85RAYqmFzrb4PR6RhAYDRozpUZtcfyApgdymPnQh64g839LfjYdshHboLbzr1HWhZRzzPw2EnPgu4QscZrUabH",
  "key8": "3ts6m2HEacmCeAY92X3rSVkq2WKFsr67FzJq6Zw7F15nJJthHt7ciLeyJogAHSef9TuSfcHLkm98GWbrr8iPVcQr",
  "key9": "zHS5P526CVm8ZNwbvmCHmwT48jSxjHwYvm6Wv4VjJCtsrGzLrEUrABYR3ibvzNSSYpDcBz86ArrmQifm12JdXHn",
  "key10": "5gazY4ySASsivuGwWmzQ4km7c3oKnq1YujnZE5AjvQ2Zgrt2X1LMUhmjj2TGn5GBt791CtWHszLLL1ET51SgDfnM",
  "key11": "5tRSybKKECoL3x2gEoR6DvEspV4g6zji7Pp8kEGYS12h5N5hcZkVSFyvpLskcYFi62uqD8PdqrvhK2Lh8jccsJCj",
  "key12": "2pCWtHXzwbdWbQLZZdToB3i1CUR5wbbsHfB8g22XKgQHUgrgy12HqKhhBVJBHQA7nMecUp7gqCxhh6CYshKTBHVG",
  "key13": "3CymhTcaUMxc1YuYo1SQtb89hoqiNd5rbhPBJWnhBKXoP34ZZCSrrXMcmU5pMKtzbZSA7CtFFsAXxcjt9BBuCNfM",
  "key14": "4vkTGQYVLWi9pEPBFjTXrCLx6t5vtH3P29FdiftiKdvL4GHYscMWZiEKyKzs7okoxYUGZDkghnfVyfW8DPFEtTSX",
  "key15": "432TsexYbpbUAeN7Gqt9i2p9ti9KrKpjjUnpWNTxTFRfzw6UJpXGEFhQBhBW21tHrjiNJNmZUkgMDHVuVUFce4UX",
  "key16": "4LUfiyD2GyTDu4JnqTqgQMLskAQSW7ATBT5rcPt28CVJBTyRsob3SrYWmPyzFqR7kE1uBUZKE7sE8iPHGuqbXpRr",
  "key17": "1TfGgq1haS9222v9tNhAtxxMjbJrzNWtMrheDqcBbp9RBhatEew1GgfT3g2ygjzDpFNPRGdeAH7mZ8UMavnGgTR",
  "key18": "59LCHkUqqFsZ5unMWw14jQ3L6KCfNGFb8ySTLEw8Lb5AXGHvGD4jhpHUkgZBiJoNgVr8H4h5Qicvb4g4NUAQNtC4",
  "key19": "2y5muk5iHpTQxrhwDgNd2Srw2DhVqebSm48g1Zp4ktJQAe7BDP8G7bTefsAinKtN7Bjsz5FVYjKHxWBkjN7vBKGS",
  "key20": "3cJvpvJSrgwKnakXuDFZ7fYyizQjPWsLhrkL6itPQWAvsxutzA6B9uegi92QSwM76bQotLbNq3A6xq4Boeg2QkqZ",
  "key21": "5ygSKyPpVcwsZX5E8Nvjyp21KcfFPfgUE6D5TiF12vNw1ejYkpnnu8yJYL4g3AiAGmV9PEYd1dtXfBgBmMmqTLhy",
  "key22": "43dqzsVFxBRaJKF5TT5nWcjw1Vai8E6k3MQcCpNJFKU6p4exw4APw65CNyWKeyNekDPLJG7WziyDxsBkUbSAboqA",
  "key23": "3vNW71BhfjZDntbj3riJKaGRW1birXRYEMKqjtThGvkEgd1eGKKWQqyAEC747MwL1efYf9FmwsQcjff1qZ7uXG6L",
  "key24": "2JPFTaCtGZ8dM3kMKJMmRREjVgoVmW2XC6TV4CwLpMVArbpXt2usWfQqxGgdeLtGpR8VqrhnddhrFUCMguSbgSK8",
  "key25": "UvjRfrsknjHwihLJFEks3nKPidsbERy6hHcFo4MFSPw9hccYzgzxJe2PAQ46AQGHiWfWrUUd3ahmbgTRC2PhDkx",
  "key26": "4znkboLTdvYcyuX89qzVLBwrKhiGGDhc5H8LzZuo7aB5iUXJGasXP61EsoRwsKHtGPbsFxsE1V2yu5xUX5qYyV1F",
  "key27": "2mS4npiVZcegkNFJsLeKeRq2ingyWMr4orfAbN6VxS1xsgzLL4gwm7bB2NnRcBWXiEbeY3V7UwZExH7ojwzN6nou",
  "key28": "49RM9gqZtJJEctL9uoxxos5BGtySJKYJRpcMyn2proi3QgYsJDDYG6B3r1FfPSAPrwPAY1tzSbgkwSVuuXqVpq71",
  "key29": "39LWShJ2Bz4Cxke8FBiYfQY35o34Fk3Vcdmv2ZobGh7FaVCVCjzoMYurBk6t9uPPYkaxGhmBMM53NTyqosCEcQLh",
  "key30": "Qqe6bWUkSSRw2uY8X31BUh1iprszEboMKVUwDK13qQY2huTYZeQHjksgMGbXaHpwPfkSTZWB9GfHnHxWEwD2iVY",
  "key31": "3W1ToTFES5MyiBFuGXo6poXUGCxWVSXvVyhwjD8ayDTBXrpqAmiE6SiHAodPmjUmm1ie9B71n5rd1caVYfzyJBax",
  "key32": "5d1Po9mmEX38ZrxUE4iqGS1kWUVQXkrVSRLiJaLkASPNiHRJUWHKc9JhHWLeLb11mQ8ajfWFp7YHKp9Yp53LK3ez",
  "key33": "5DLYa58Yhf8Bu1WFW5eYXbUFTagc2eBgsjQq32jpikSZUmE8uBQhCVyzjj1biKLWFPTua3EGYUuYvjXEWq56uNSe",
  "key34": "5SRonsdzDZfPetAuAt5DK5vuBQyNdrLWDDiGrW5gLtmcXkvFAmQUW14D7EC3EJ85X5DC24wxQairDEbydDV4PXud",
  "key35": "5VZNHWdd5Mk7QYAqFx34wyZfvmymu3RNzPeAZxA4QGnNpBtgqDsRZnFrbVCXMkVAx1h9Z1Ynx8CvAhUmhk71sLMn",
  "key36": "aLH7AePYuQk3LPtPZMouTFjfJPFUkars6NuvdNECySpearU775vETm7jsT93TXGSvvx1hggbPtBQNEkpcbkxDAZ",
  "key37": "awxk33ugRBjwTq53touTUGJ7BcuCDSzRA1PUCsvWsbeYAVQwwc9BjTR5EcFMHZaFXxdH2t2BHC6TfL9W8QURah3",
  "key38": "hJbcM7r5L8FhiooH9Spr1FXCF4yQyrHc7Jo495XSMdAJCmkEeUURqMbBPMagxZGNKPSaWRnD5UdMTWdxnW3aez3",
  "key39": "juZ9kmUeLJXvYs8aWFLPutAmg8x27cVCxUAz878C31ug9fSFddEPjPbzftzEgMQP3kDUg2K7CK4eCidh3rDNoNn",
  "key40": "2MrPW7B7Wf4SkSoyY1ggvya29RPQB7BzTz9Q9F6pnWiTM51ErcPpq8J3UWe3DU6Lrk1EP4X9bjjwcAX1uMpTKXtN",
  "key41": "qDQBPfSmALBBjsaoQBweuKZDQJzZp9cJGiyShCDjVFf1YSTNgRV7PykqALfZeaJkwq7vEpHQpDitd4wnZY7jxnh",
  "key42": "2x3JKKM8xfKoWisrMoQFhs92zAGz1ihJkoHRaoLUzeUvJr3Wwxmf366uUqZJaSLLvKC3ypdpSi4oemnNstbuY324",
  "key43": "sSNCGxZB9ygjdtcF7c6E76gxT1t2wvfcmTq5XTnPxQawMUykqGK3Aeqz4G81fX5omzZCG1bQUgVxi6V4C2c8L9g",
  "key44": "4Vw71mmjQjZWrEPpZPgnYufpX2uQqe6Kd4KTWwTwQHDrbAL1afNQA3ZrnAWX44E9vbsY83hfUEmKHyswj56S9fMC"
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
