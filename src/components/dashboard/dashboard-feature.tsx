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
    "5KhysWwp9yCkSDs5n1KnZ3tiPKXabzKmSMBiXX75vCzVXKraYNpxe9c6YzJJEtDknEMLxTtHtKei1WaqrjYmMTeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYY4SmLUA4pEbuPZTnzgqvCchWaGwRZts4xazvnTwKEhLHeMgPZBuaQ7imXxeV6PqrQKgPauyfGW7K1QKJLxTc9",
  "key1": "3ospMG236enWfexx9Y4BVYFuBa6Q9fibNBisoV2C8PEMrsSPyMpvDTvMcWeFrJpTZhiVrUhZ2Gb9EaPRzJBvwBZ6",
  "key2": "3ui7Qo3GPrpg2yyrTHUEZS9YNYxzsuSfqka4GgSnGsqPEVjXyFEwHiPR4UebrHxbKK2K44WN9zUEKEpeaNFAMrEF",
  "key3": "4QZyawGnvGNNerRv87P5ejYdZ4Nv5eqdniBPy58dD37BT5sFgiXH2NNRWxZdiDA7AGPbiYkzefTuMrmRx8v5ydGz",
  "key4": "2xWTqTmt8UndFSCoAT9nYpBgJDnsGfDbB266TPDLDp2rpQpH6MPokQEXbLyxufRjpGAJzwGjoDS5dgXqTfUhRa3e",
  "key5": "2EN6C5VZ8aTSb7LD6udtXRcT5ah6iUjteV2VBfLzvvGrGKYULGcoS9f6Y7NzHoZEJt8GcUSaDnUreWNKHz7yiABw",
  "key6": "4Z7xcTRs2MUQcSfiWRnTcFgaCWLPwkNgbtbUQ7ZZiiScW1KVbAT5F3uGLKuL7ejNsVMoJUtrfrHArDiTXwoa2YXv",
  "key7": "4z5YrJn69QydBDnm75c1nbapakTdeJ39n2zCWE3z7esVzAqSxzwAfzkzdQYyCWppRkzwDPY9sWyQAqmNsXkJcmZw",
  "key8": "4Bqf7GpTwzTaZNuENizQ8BcWBtu2ACcFRj5CHedkNpUUpRFVcbjKN4bSbcJAqpEeuY2JYEDUL8Zv2cMK2tZEUJMi",
  "key9": "3pd9HUa1ENCiv5ZGTLth5fqMpNSFHjWfwG4tD6ZKH9WaHpXwUdjTHWda6Taa4fDuzwMWdcaCKPm12XD5ZgMEtRh4",
  "key10": "4cueZDQyJ5ABDngBL59b6Yg6ikbwXLABuEqioEz29U8GZeArQWbYKF6ZJHDcFSorfhT4dCz1HeYmE51xk5TNy2u6",
  "key11": "4uuLgfKqbW2xUHk8C96kcqMtnoFtkzj1tZSUxZ1pVyLRfJRL19nfqAvKrPh3Jj99wX3RqinL3F75GXpFmwF9mPgh",
  "key12": "5LbiM5qfyJcC24D9bkXs5ZikxmCU9nkQdtXKuZ25EhQteTyw8SbD9vLtkBkmLScxuv3njXJDkWGXS3YoGjabNow5",
  "key13": "5EtcLpKGUDJzhSDPrDkWuL9zJaX6cxjvfx9sayMP7vHKK23nhEWqu12F2VGh5yryZidTNMsoPXwtonUPTG3Cun9P",
  "key14": "65QQjWwNsHp6kZ3jgn678yEc8pC9RzpBh4qp5fUyVUcVSS4B4aBG2BXUmG7mWrSdZ9S5udXiWLNqVwEDKY4zYjUF",
  "key15": "4jRCTo6KevmU9ppy7Murc2KVMFrYdjzf3p1yjrrgruxTSS8fehV7PWmvnfEdGgsSZyti4M5q7G3ZXRnWa42NCEEq",
  "key16": "2kACuiYNw7WTnPoa8Srrr83zdiMG9K95ZSxuVBi6qvywj7Bd5tWuAiaQPitVV87d4UqjwuVDeVynivki45GtNfht",
  "key17": "3zfWGCZuDJkpdeRGeUDRx5B9YcoBTUXZseh2pZEXJBWGamDuJK1MvJrNPfejHvBe2aNhSWEH5P6uY5eyExvYLw4G",
  "key18": "TjDobWnEDB3Mw8hHJQZuHznWNbTRHwWkNmSzVRd6yhZUTTysVcc9tZxfEygcUcoLFihxpJY2ZeMLFJYT7rpRp8w",
  "key19": "48PqSLfLYbySFxDzVLzSKNHxTUo4GJdUowPSt8ueTghWj7GrgBrYEVDw9ZUvfKQpCgPzbgGRLRaTBPSWHydjSt9W",
  "key20": "21NMT8XcuZJbiqEYsoRsXQD6RFtiNEH9ww4iv8x9xLDsiHFigCXPmQhmWadd1aFv1cV3Z1FnYouPFDfKB1AXSdAq",
  "key21": "2ZeQ8KPkua4deEqNmFSgMKwdGPPZck1Pe99Fi6LMiBiMzm4kNXSmvkmccmTv1rmXAwfehfvdUiodyTmmM8MxhbwF",
  "key22": "2C4sP5GEBeiBPkZh4fDTiS6Zr8ukVksaPZGJrLJvwT2QdVqSuRVTaE1hK1H3Squh6XSfG1LuUabEdgtKjL27MGSm",
  "key23": "5CmMrajqWmwievDjk4ytT2hBBQBS3mSzpDvvVeho1eXfwGq3ccsdg8XWroL5JYhwye7BLTdwyHUhyLpU5uoubeQh",
  "key24": "5ZW5TrkMmnZ9UgZMZb1Yc6EBKVJopixsU7A6fHZrUXCrXMt1E1x6X1uXsVBNpntBoAzRfpKqdZtxXkQbmPJZaJpn",
  "key25": "4HjQm35NtFRMVzB4mWP6G21q38wm5mgoARJXCarpXfqigTVbNEFpkoezFy71tAwgvK2Wi57FqsxRNjmkXGvtHUz8",
  "key26": "sBUQKD13wZtgoky7V7XcykG4KNfE2wvcDNMfiSKFD1JU1FumSif5L4ZyMyoCPEFbm9FoTXuCbyJsdpPtJEq1UHo",
  "key27": "5s6HNz85ApWD7QKibWJRW8MuoVLhnnLGe6Q67oADSsU5TM58Dp4ope9Bd8cg54RDL4jrenWxuEWonsxZiQL91xim",
  "key28": "4gBsuRetjBadDw3UL1pvcumzFR2nn1nQ2RTuDFfxE9AM89keEozGGNpJGFRA1P2FJFk2sX5Ruoe2KhW44RnRePB1",
  "key29": "5b9VwyRGJ5VgBg6Jm9znSXkxFEgKcWExrMWLjnNd7KdSQbhxqm4eoQHdyQbnaSBMLjFjcb6UNFBckkgQfhxj9o7j",
  "key30": "5ADPSLpCjzubxzCvfErPRK8BQjyYjyhYY21QmydskQdD46UsXdJndyoL4Q3aKeyVuxiUDnTpEhP5PubGJpnn818c",
  "key31": "5PEqJd9ArHmS2uV8LigjoQpJsGPyA8Zg4Xxvsic9MxNYBLpfPTvU69L1N6BPYMcV3Vs5HJT28nhK8R36n4btuvcv",
  "key32": "RN5xUPo3oH2zwuzTPY2oz4Sj4gbQnc8LuGDd4KUYn8wFh79LVcFb6yf9i1H4NKEcn5zSSSnECUJRrF5e2oxchmw",
  "key33": "3BmyMHs3RwPi7aBGDRHagiWGgRj1mfBwhTLC8GZo4cWKYDcD8Cy3qZX7xVpss68VooucdPKBPkn3h5jHjUZUV3tZ",
  "key34": "4eZ9jkeyrNfVsuDpq3wJDx9n6ctAupVaZjCeLPZcfBpa2vqMHT73KuHcvfVZPJd8p73rFiMaewMiZFYdZQAqNFt2",
  "key35": "2YXRCEmFHHu9iSyvNmXgdFEiphBNkvCxPhjR6QPb913BpfSsA9bYFePypwWTMHfDbbjUv9uxTKdiXHYMs5CRE6Jd",
  "key36": "2rvZrzb5mx3qFvTFpXzVT7uto32Bz5jDoDCZtfwqXiiDkKwGSFgU4xvWLR5N9CYBQwFkukFxesnTeRaFHTH96Fiv",
  "key37": "w9yWvL4tLRw75JrBJp3ZBEDnxA9wo8Jf8gcLP7X3ruVtf7B8QWdTK64GMHErQF5sC6qVGwYH1tMi53gmSrDSPuX",
  "key38": "3r9GYJU4ccnixdwxPKbPZGUagK2m9Wbw13rA9Dy6kvHyhVacLd7b8XDfeeH1RKw4mFxzSgb5ySZ5AURCJV2yKp8D",
  "key39": "2wkA3pWSyXMqvHw3eLrcGqpU91AmrPV1YTTrMrqa8GgCGUd1Crd6NQ2HPnLpGFms38Vogh5Z35DXgYDsmxspsSMn",
  "key40": "4KpvyhFtuEa4gv9SWpmfsbrrSrPfD9tscHrVHzMxi7J1nFT5yZ1nKp3Z2XJSsZj2PvSC2ewewuuhhtL4avbMyX7q",
  "key41": "3HCketqocdeHDm61uhQHLc8PrBjPBWZ9oNwiW64AxMgMURgzGNFLovMkuxrdDnYVAkSEat2Wz6uzttr9ewRx9iyq"
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
