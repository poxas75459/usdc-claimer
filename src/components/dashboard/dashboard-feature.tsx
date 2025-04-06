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
    "JdnMNkzGGkcW6Sf5wBiw31Lgfv5gAQJCRAt1MbJc4wHJQPUCKvM1eVUEdD2WHNs1YqLNSjFVJ7ryGVE798heK2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwA3XbWBSar724JH8v1qKdJoBrxvGagW2AhwG9wjCJxd1oaof3bumokE9m3rPmT4jFxJtNsXMYjtfptqyFoGseB",
  "key1": "2ddtFdxko2LADN3uegePdqQjSTkJCcefY1TBWemVBe18MpAo7XiFxhzn3T53SzcQWraGckzeLfubFBgG8uP2Utv7",
  "key2": "2mMbdLCS8pTTNSP3JkvzbhRjEN6gZuiqZopywgpPVDHv7wRw7NvoyPV5xNfvdtvx4TmTHK3cewTQoaK3pMZzEhgR",
  "key3": "47c5kuM4GfHgx9ihLYxgryF6tbCzhWupwwH7x3qbdBNwFq191hQr5Tdb5ki1beZMocEn4CpTNqk7PLhCWAjPf2fL",
  "key4": "jwSGu4kDeFsrzVMrk4bF3btKexw2n5cNn5ZVSoicT4U38aceDBrAbBrv75K3w8ZR1r82DYBQ1j8LJ95pvk7Jm3J",
  "key5": "3GgzGVKzocmucXoco5R6aSQvaEiCY1vgrdFBTBhd4ZTHi36QZZcVBRwQCJSGE8stTthCmmrZtquA63qMUJWA6g9J",
  "key6": "u13n6z2CgWsQJDCrUv7DWgrnxtvrhsaUtijAehkVx7edLWVxMurfN4yzTDcax9mH6uiz5U8fi5qVyeyjmhpfWvc",
  "key7": "GNNkEnSx1DVfa45FvLvhPPdyvDg7ZcYgU9t4CgHz9n7M6oo6aF7EYV6Mip97ckJMNoMb5PLEwZ4yLqxQwBGKD9z",
  "key8": "3UV5QTjxGec7kdwYM4dxikaT31vJwLpWwt1E7wcSbJSErD6eV4AZ1RZo2FdNu34HHAyevRB9MRV28Ez93qURjMC7",
  "key9": "5cuhWDaeCHQZ1D5SmiLPNHKZPyqZshARCBSjnLbjKU35hYaBoBenHHdwb939cnm6jjtEh6v9s2zkCVqhYGnYePAw",
  "key10": "5Zc56dMRwtCgSw7KRE1bdBK3HWDuFoqDz9QBpUuVDygMzVsX77hmoVe49pKa2vVogW36GegF9w5zg4uZ1DPt6Mwg",
  "key11": "5vws4wwTVTU2F8K7zymAvZAA3u4ZSRVg6m31Hncw8aL2L4hUuDWi6aZmisrCdTr7MXbt6rrvXe8FELPQKns87ZWG",
  "key12": "6PokNeaMwKvxHHeeBNWqxpcZvYZ3ZqzCzeFJGWEfYnctM7xGXE6MgktcN5DVQ7wa5NRwKsMwfahhwLHR5jszWcY",
  "key13": "44ho1kNRiruTD7pnt3GgKDYSwPLEU7zJkhhiddWHZStbkeqiLnxzBg8npZYH8cYSo2ohWsLixbzwMsMgndZ9B2A8",
  "key14": "4LbPWM5w3p96c3Se1WtbLBebUXj6mGtxhLCu8ULiiP5fXZsDVpLYSc7sAZDaBffVcxLxjtbWPxxCycYvCnGYr4TY",
  "key15": "VDP4kwmneAeUSEvZqY7XojYbCbdPF9BrnbfJXyLxAffFCJz6GHfQNTrCqJNvb2s3Ss8rnHJMM9jfY71ufYnzhvD",
  "key16": "4EcQiBCJ7o1utipADHaueM5EqiqN5UVjkzmZjGYPDwieUxYp1R1Qbbb7dVtxwCyMscXVYJMKnTBoCbKRgHEjnrGo",
  "key17": "2ig3RjuskWzNtVR6yUumVfBt18niTyw8nYUX3MQJtUguMMB5X9RLS4vd7WF8bq2beDjPjvca5QmSZJaC2KJj3ybi",
  "key18": "2jtZhaLFzikeRD41avCmz4o8WhNGRNw5L7pD2PzbBhLaUndQ1VHokynHXGXSPAciUNhfE9fJtshmNYRqs8wBBKQ7",
  "key19": "4ZbUHhSBmhrKj8JJ8Mc3o1Drx9hr77fCjSEXCdhyGNFo6xtdEjpLfXoLCYArtxzxsD6dHREs8ohYPYAKR9Ec4EJZ",
  "key20": "4kqqvKBbG9Tqb8RRs4LkN3RbCE3sJ76w7zPEDfBLS2U1HB6xEDtzPTg5yd1z6YiajXtneywgxo9rJUQfpYb1e1K6",
  "key21": "65vJqFZjZsqVMYJz359Z3ayaVnzu9WkWb8Qtb88G4Ch8zf7jbrY666e3n8u7VvWemjeARPAu1bajGAQ7sYafbxTW",
  "key22": "5RbA9ek5ZqABZcc6ycqdrJuuh3fp9iRoydd5K1fYmhQhY9DxNPgcrv1xXv6UqHJSHEy429ADJ59czg6JyejDfY79",
  "key23": "4AaVnASSLehLrRTdASNoBKAHA6muYKHXWHLP1WWJCwnuU1io83PnvM2PHf3ZrRMhLrNCDAFH7PLsTEDo8prgz7u3",
  "key24": "21uUKskByerzCBTSLuuDWvDSjbxJVVFNwUL9n4zYjmzJgkWyhNawykXxKxubUT8KF3sjrAvrwBfQbTkApDXts5PL",
  "key25": "2kgEaH1vpHwXh4LVgDM5zAbtEFFjP3DxBXV7chZ3od5xoWpe1ddyb19xAgrXpH48crKfnnR5vZQJyPQaGmJDrT31",
  "key26": "kgDUX8uuYoevLw5Jkw9E8RuTR9N9jafiv5sEKMDnZmMSS6vuq1siegiGXy5eRz75fm6xm2Q7a5TnJSjTZyifV4c",
  "key27": "3SxdtsZrwcJPRetSg1kMjMopX9S9fxmLDyTS3CDKgHK6tuJhmSo4UwqHQVGLZkuf2N1yomXAjqqgYV9Ms1vXqavj",
  "key28": "53oJqUBQWi6UVUD81sKcFLE7jbBU3cNT1rT5FGEjDwejh6w8gZJpyh1oEmFsjNCYmkEssagGwbWUiwVdwbCt2c9y",
  "key29": "5sheYnxJZxv9FSdYn2zhQgZ14GUVgrBNepYVp3uC9MMFH76mWDdqhzDpcK91BKLbfrPFBqz64iLWw9neQiSCdfFW",
  "key30": "27kAYTQLrqz2aGXsyxgDYsRLTkJ2mkGqYj8zPGnSUJp8xhctGqLRdN3E3fhyxbG9kt8p7mCm8EJyTkpSLz9vPPDD",
  "key31": "37gFvZ9iZL3yyVr4sX1cBw1XkHBpwDePSAr7wgKXcMWCQJi9e96NpGyAu1JyPzYoeSuFy5dyFtJbAiKeXhJr6myg",
  "key32": "35QnMChFUGZurRKkgPuauBtibH7fQofank7Y9BaKLTNXLW8n6NrREaw6vs8GWg7BcofuLy2BhVtCF7Hjhs4G9nYQ",
  "key33": "5Mnz6s2wfF7UBpRGtiUmTiCYqWrdykPA8dNFTtkwCcimY6vL9LX35bFTz7ZWxmX2AHXxybXp9BnpkbCmPsxc2Poq",
  "key34": "4gpLFVXHmqz4sgEfGHPZVbBmm6G5u5WX9FT5nTwLwDfSbCZiu34wtZASifybR6rEXjWdjKZikBSjfFiSeaztQe3k",
  "key35": "4rgL6pd5FqyVu2cfbrdt7FBcUCpPL98WvixfqdSobxVvLRc94kzET1oVVAgmDnttGJtewKFp3urR6r7C8QQZJ2id",
  "key36": "5PY4SxBfmHL1cwJqQcZeJZNAvuPBD4XCbmgac5CQRpRyn3Xctf7DBDAoyCKCVC9D75RHseky4sp6QS1kRWx7Gjsp",
  "key37": "5CrCfSvem3zWKstdrL9EN49Qv9nszF2DgkRRwjvcEVw5LP64WNMzaZBEwyNuVfesrbbL9XdrxXBx4iib8q49jxjD",
  "key38": "4aerHg5fvvXM1TbCJ958RhY88vjdF9Tk7jNrETPuMCKFkPSuDuBcpd97mPSKKfXY9UmxS4J6pjQ7mjw872RcVCT6",
  "key39": "5FMsk4JamCAr4nRa8iKjnXF5CFcCX3a3ErbmSGXWNmGJXJGUayTt5AzBDecazHu3WZ2KfHD7MtnR1WGKncKLEUqy",
  "key40": "3VzfKgcBxQdWqpukDGw1medhxM4VbbuQaeWjhsPb2vur6buMdJCP3dLXrMeaL6eWRuQ3wrF4Hi9urGVjH6Cuw2s7",
  "key41": "ghVmHFi4cs7DiSr5FABMGvFU5Hds97rs9XQuTab84zQxehtwaV87JArhSMiCL5npf5vChNBjqf1gqaiDwi2FHS1",
  "key42": "4zoefpVAa99u9kdiXA4XomCHC1z9P4jJxoPr9CzsZZSJDyTu9f3jFDhZ8djz8T3a8itL4jSAXZAJ7aM1EAVMC7Xp",
  "key43": "3KojGxjJxyCXoa6mXakR1LxxiKMcY7NsXMR8sBetrbo9axHsBq9Xw3aTEREnwgu7eoy3vWKnqRG7eU2NGJGi4Ha8",
  "key44": "4bYQnZfd3qoUrsXhHZiphfenHt5br5h9iSyzKJHLaxySHgiUdaqcDwzEUyD1NxVuz7oZ1jfpSiNo14qJuh5Sid2G",
  "key45": "kVZ4T1gQVhWFBqsHrkE4o67nBhCNZebPNC2yaGfJBppHwY29YPxXFwN91d3HJwSo7FDacKf9ZMy4o4FNUeuzdDu",
  "key46": "5wT92PaCaNbs3ZTk7xCvN4yBorA24hZoWnPzkJUc1cZ4TdmkGQhA9pxo6taJNRQ9Le2BtN9imQkRJadSJjmqzfbX",
  "key47": "5sbLVZDUdvtNwCSHSk48JWcvEY8Epa113JBsXqn2bUjcUz857monx88Swru58qHa2Nezg7jQZEvPpAnTNBNGeZ6z",
  "key48": "yX4HuxrzdUvt6yjBS7GLxwkMVs2EyXerxcR4aBHxRCALdMUQLqiVp2Q1h3g3Bg91h2QuR8uoSbRU4AZKvpEqhqn",
  "key49": "2GoLQkuRGTgXi3AEV6kgkuMKkywng9gQ75kSjgMDWgJj6yJT2pyUwEgWCTS49amfxXezFdQ9HXz25sGtLWk7d2DK"
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
