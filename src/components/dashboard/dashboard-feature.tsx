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
    "5hFfhyLcqrZJNTU1x49LAcihNo6sWMv67Z2WjXan7xB6iqzy5akWRGvbMRB27tA3YordeTJuxw5oMNXiytRbLuUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478Hgc88wzWUZExdUfMMs17kVkWif3VSKkhAa56BqhRffP5bLEpv9MeMnkp98Egf6Jukfk2ho4NFZev4rh9WBv5W",
  "key1": "4eWUQjLg25VNuKSGxYD2nMEuS1L1pHdHV4eFNR8zMFS7bSzdGGAU2qY7h7BkE9ATeoxFwewPKL5ebNw7R6mEpcec",
  "key2": "2viYoKJv56jDnmmD2QEsXj7fLmZvi3EB3rnWQjQD4s9SVKW59FuhtrT1mQN7Bhi2bNH6VWR3NNmXHNfV4MPs6CLh",
  "key3": "5VjPtiPs4Hpe2FNaR1Kex85rFc4nfwcYGrXecUjD7YVPLwnyCAawiyszJWUKGodKEoW267tJwHu9G4sNzx22Gnuo",
  "key4": "3dyfvEo8T3zxpuoksysXLHSTrAi9TP3iooddfRKPcZYMYTweXGovUdbKLU2cjMPQ7VqTDkZRJatkekrKZNsr3vx6",
  "key5": "2VJMidJFZJ8EsLKPGHidEFz1qAcNyxfepvPBjh1hUV54GvGtCWP72KGGmYuuAj2Z1UHEkADfB4VbBRkmempPMZRU",
  "key6": "dxr7J8tjbthtd4xYGiNXLCx4YSE8v4PhLzM5sGNWpR7P7WCeD9ejbkYtPc6ftEh6rJ63Ai4KfAurMNqMzXDexsa",
  "key7": "2N9E19zS71oM74kdyFMoaerNbAkHzuk9N43uZkHFZjFdLiVtmWtcwGtAr1E3785TrNvB4QNtvHLxXr5kz1kbAbW5",
  "key8": "4DaPEMXbAhwLw5et1RK7JZaCuKLRbPRtTokdQDQ8SgW5GpD6hgfJmJaUr7oj3fE89ka4gWuWvirCHGV1EkoUjhNs",
  "key9": "3nAowDcjBJbkagypxHsPopCPhL2Ngry1ULXAWD1XJxD19PUe1Gbps9djTnfUpLrT2AkPHiNTLieZZ63jgxeRGZe",
  "key10": "4LrsQDUHq9rNPJJ9dvZsbeQTqXrhQQHtjCiTbKBQhu9NbTYVR5j9Csrh1BPfPTp7nQS6bZxTZJWK4FXahtX4MpY4",
  "key11": "fj2YhwsmQUxsryCfGTtXefYF8FnPZpXtwHfCDcSu4krhcToPTZrv2Z1MkAshNHuUvTwSoEb5EYsy1Jzb2BByfuX",
  "key12": "4xgk2rxMK1qBrqmvSYcbbNjynMMPWMWVgzySn4a6omo8abhoNLWPb1pvaaSukLHrqT5JVH9ye67qexozu9eZZCWs",
  "key13": "522Rt5eFnucRMKJTVhjczyqByqL197SDGDkh3GiEeV1drCMw5b8j4jN3mGTZSDSSTHiw6qN2YgKHp1kEzJHTSmD4",
  "key14": "2ph5dkcsN2VDVYE4D1xHjn6T24VnhEKsNoWjh4Yyx3KMPU3mBzTzKyhAotUqnPjh1xTQJfwMfQpuhzButkqRiNhE",
  "key15": "5K3eLVWr5hbRV4Znf9tULEkn8ZiBqzAtkyQ9dpr3vxtig4KiTWksV4KHsQxb3DFmuFBeSBBq35Q9LUfo2V18zZtY",
  "key16": "3dpwts9L8TNEkyPCRNt3N11j8VMnKvCkyKCq2JgduLggZbHPiKUzpppn3iGq36EtWW6VSGgfDeQV559qqSpb7kx4",
  "key17": "3DtWACK4o1We1aC3J58YgUX5iXgdpHv6c69B9CV31jSkHRZnC3bY5Uw6npP4ZUhzZMEmrx6YwK3jGcwJ81Yh4oPt",
  "key18": "5hS7Lsa9K5xsP7CMKnR53FFYTobeMax2fwuStmhG16Ux9Y5wT1Zu6bhJgqTc3tKPu665GvyuosBQfmL3q44rWZNs",
  "key19": "2KbJbvpYM4HLQqMLmvpeMC9GR9WVV4uxd8oJbj3N9JansUdU2DzrgZyCA3ygjMTFcYtMMDRYwJccAiABbRPogSJt",
  "key20": "5wMERzS8Lcun5MB9RzSwmMhwNypTn6SqzocYBFoE2KQaBGKJTKeXdkx5KCo4p4BaxKKEvG1513GrU4z71GzieFn2",
  "key21": "39fzWLLg5tTM5FdQPwVmZFYpK6aTGsM6WcExvnMyjXqpSwJrjWhoq9tD19LRgAdW8GFtuZnEh2JSupxhaHRHKjRs",
  "key22": "4Bz6ZAAKRHsVAna2M39WwNJcK9qGVu9UTnHCNhKMEyuP1HE9UWW4Kd85SWLpb8yjjGJYq7a8e1gGcZe5fAYsX52",
  "key23": "GSu7NrJ6sJxBuvi7cXmLgVNMUm7snEYQKqdc9UL6Lazwg83ZuGRNGCEGfV9eXb2MJAJhiPSs7f4r6pbHktALtTx",
  "key24": "5BC7tf6KFnRrWrEbc5TK5tfhnwKWW9RDKoxxwYXksewQD8xoT9d7EYHUUrdCxJbycyxG6ErDBkcuvQv3357Zg8b1",
  "key25": "5f2mm1KzwW6tLmtUVET6UMSiXTvTnhLpE58gD7fSwVzzPZxcNr48z2kUFqt2F6ENpd8xVj2fH7WVLWgjaS6vM63z",
  "key26": "uyArxvzzsFbCBjvx5aiHx1UqQ32sryM1NdP25C2ry8c5and2WG3qA4vst73mUEE8AHhGYjouxUWRGg1mj89Wnu7",
  "key27": "3bCg3zhw2gQ9JpFDHjMfSRuRBc3R7CkhUowBxLxq1RG9hykDKTdhKazNDdhjHrNzmFzoH94fVRtpAi3Xj9wn5bkn",
  "key28": "3FMEQkvSmsXgnKvoopTA7LSAE3rk1PZnWHHun3UhWyrJBrh9ZXBtcRE4B2kTkiPvvsEdbVBBLn85BYEG6tkainhu",
  "key29": "3fK8aBwhQ5CRDmA7y3EyufzZ2Ts9Q5RwZHuCMGxoafZekqEqJoXdciZbq1dFU2AwoorwwF1YqFpZi1NcVW7sGdRT",
  "key30": "Kb4ZK9zz6dyMGNrjhMufVDp4r3r6DAWMhen3zSRq8fQmVTLNaKo9dcreW13GPKsB4yJAH423Ch34k3Yh711uQhs",
  "key31": "5nqsnqVNN9dKMFv1Bs2xaCnQk9wiBJE1CrzfAZwacqBEqwBqqvKVGukZ6YqKprjati93kws5suGwQy9m8VWtAqRE",
  "key32": "3uTfxh3zztf6u1YFwiXgUavaUFtCp1AK8NDmQPZh5mWa7F76pTFxF6jQdfWEQoFrEE5TjJYNvu5u8j5qq1niiN3j",
  "key33": "25FjcjyXx68uiN2qbcK2hjXvYczAfwEKsNEhXo1ctYqQ1TNHFwoPQYaneSHgqZ82GdRepJv8nzDo3yDRM4H9fAVL",
  "key34": "2iPBWuniFgkdcLVwcWX77oG9oK7uJPu1kkRJJ9bMeTa72WX47bG3gVSPKroMS4eRpAJneFbWd5CxQL7uNL67tA2q",
  "key35": "2B6Y4eeMUmDFEWrGe4RU7umrQUrpxr8Xyjrd6UF6k5dmSYdqNXBPB1XpaVWzwn91FsFJq1sCM8Lnsm5Poxyj53K8",
  "key36": "4u8AvZ9r3sRHoDkZ9Q3jJnd3oysb29twNorGbNqoqdcy9dvBatEtcUDWuhzZXxnaS95NJcyqV6YLcuVZ6cdSEVuu",
  "key37": "3VRPUx8k75djqLcgi7a3p7XJnevHdxXHh6xDTUWBkVf8d54f1uEAANoq4o1kazkoaceZJ8bidxp2zV1yQaGVJRJ8",
  "key38": "pEadq4R85cJ8otnNRPKM2FftRbR1khBcmyi31sYzETfjg5baYuPxbA813AR7Ks74dQckweJZuh5Dz6oHSpLRdjz",
  "key39": "52XwwGybBRSiQUrYBKzwXDvWoG61p2Fo4wpdjLUvYK5sGr3Njs7TDh2cE1VwbfWC1qqcbnFSY2dMKumr7iE3Ta9d",
  "key40": "t1yxmdDcNK463ykM2uJuuiDT5be2vts2HCyM2eizv8PZjwubkfCEivkoez2WzG6zVDiSyPRgP41N1ymwUrcTt8h",
  "key41": "5DhDe1wBbfEpzXbwYUVme76w6H24UaemZZrUAQBWUXEbwsAna9r843xXKuVZVeHfbhWo92DYsU6B58nRhkusZQ5Q",
  "key42": "2iNgLz4G6aKsg9iYe3FCireMCCMYHbUzoeh54fGEuAca2vR6MyM7s5u6KwaaU6R9c1wu7tPLAewExaM8y5aoMC41",
  "key43": "3CSBSGperY28dXR5d9Vq8H44tJeKr4hrcZvZYyzhuesaDwRf6F7Z5XVEkj5T4jV8jDGzEDvjNGwQbaf2VsRRge2D",
  "key44": "2TN7ig4bjiWcHLoGGXXrPExhA1WM8g9uRvs96AG39uBpzGpj3E8rM8CEoNqL5aLgwo7Nwb2ogn6wR8RkMTeTUqgH",
  "key45": "2WvESp7s6SEGN6Gj23oaFiX4Kkm5vK376V5uZJJixJcMqr215ZSeLzzQWjBSicjqkuxv8tZNe8YxjMbfxqNBZH4f",
  "key46": "TcQjAsC1mJZzD2mkdEEgWvTykS4uZ15KiBSfMDP4mTyBYTbXAFru9Dnr3RkHfwgQf7rmNGFR6FcqEskd2kMSkAJ",
  "key47": "2ApGGGYkaVFa7cBFWFybPMDUkLKDJnTHLELiC5tHMS4Mj8A7DQhWmnzWUU1XuXeEGUHaL47QnMKZRXAU3LcAea3F"
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
