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
    "2g7ejxtF5DMjpdjiDaAKzGRQDhGYiLMoQJHZrAbzrEG55VfYB1RucyaFAad9ej3RW9tX4hMdMxkHZUNz8XBkPWm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1SANn8JwXrd6gxmy2hTBanMgtyJUujZPpxRb9rQjurVtqgyfjEWb83BttTsnRai7PtdfjMbSnn6YhTUavwt2ag",
  "key1": "5CzwaCHY1cnZwmhv555FAY3y6247nhTYeZX6PSGSrxeAaEk65iJJdYN6MtSFJUCdMvXtaVwdcpaaJRqGhrSDn4Ds",
  "key2": "4G7RWdVVoxRufgptPMQ9kurK7MhziMBb4aNkxYJE4UtRHp99tz3ARGVhZrajPRpoZNRHUQqoxcpGhD3Cyu4u9sme",
  "key3": "4EbcLb6AbHReJwAYdVp4NFTQVnUAtVjDWFjAFAPR2P9uyWDAw9JpaL6agdunBQYrHN74MhkTGnuJdooPUMBYXGie",
  "key4": "7scE7NEH4KG3vjoiSaaaSnZLuQBvM65RBWNHzft8wBWCzkJbwUFcBRVrUAwpHZuXoA78VQpQMCnLWpETchp63Bz",
  "key5": "3LgKK2f4bYdo5R4U2XUiPqVomeD8146Y8RVFqa6pvdWQ9paYp7pUontiAvecNpUMnhLrmmtu9iQ3arpSoMaFKu1C",
  "key6": "4AvpZhjyJyE62Qd786egZ9bYo1ezvV4uAapjYNqbifCyoU8eySFLZfc5pjtrUanWLSzaMmV6Ez6KY9pT6Su7BMSB",
  "key7": "2zNVgNjMsdraHr6WdeLzvzwk3m2q1VBzccDMEdqVCQYVVKi8byPTQbNGwCcpJy8mymENxnPHbQzLibx7Z3ERc8Gq",
  "key8": "3Ycr2hDyDXiXjc1N8LJP9kKF4PAe99fAT4sLznMZMm9gfkXH5bRKQDrCyY86cCFKtApkQZNesbApwGfUX9naZ7jp",
  "key9": "3iMk6fuFeBZ72CbX3h3TSJJSd4rCHL8mR7Q8intDfoZgHT8TSAUzfx3JmhFodVaqsV5zshkJezppqXbysBHLG8LA",
  "key10": "29LJxJBadsNNbDsu19LYFnSy1B9WUC8rcaugdXxJxZgfibD8CaeaZkHUaybSZdvAJJVazDDj2Haki3SkTaBU7p5X",
  "key11": "4AqDkFZw47nSPYtQhFLX7EApS4WtDB9zNh2zmmrXsWdbqKTWNfaUNbGo2BH2XNuzfbctdEySnW9R3mLZBau7RsrE",
  "key12": "5XWoSWPLroVLwV5v9VjkgHGYRNsNBMGx2BxRrJmdn3rbnNikRGmaBeGTGmGetX99PZ4Tubxkjh8rqDHUH6ABKDY2",
  "key13": "4XgLfTNS2uzp4qicLXDjUXSFdzsUinVAt9y4bHiZUrh2ZP1rR1fNkQjjgi9KmVJEUuyyuPzmRw8iBGBhBvh67L1S",
  "key14": "4irV4KdRNsyDFWXWEhj46L4SxnevuFeJGbq6H154rCznCGNfKJjTNJ99m1j8BgRdpTHTrWZZHTb2tbbzDtyJUcBU",
  "key15": "4L1FW3hjGVwrzSxEZWtGoJdMrUCgGqy3obenuC73GL1e4BmB1owkSwSGP3vEfJuXRH2KQtqgCEFnKiqpvsnnogCr",
  "key16": "4dkrWyaU2ZBGtwLE9TBAVJfxRb49QaSG6uAcbn1MaP5H29AZcrfxn7voJggRkBSjZA2fbFio7PLJ4TwS8vwURWjH",
  "key17": "4yVDKtfFBKDFKsRcTwXSHoNjhFKboXCDkk3y3oBYnjH1ANEGqEKKoxeugH7D75GpbqmnB8NUbLyGdcaSPbzb2ou1",
  "key18": "33cLc82t6VAvDLG2vmeMMWMuuH9SYKNEb9AVihSScDAGZXeD2Q5p6Rw58JrchMaYwA3h6ZsVJDfjShY8rR8AL9yu",
  "key19": "2D5boWMe9ZT7mBDuibm5xrgRWYF12CS1dcPXXNErhiRnk5YieK5N2yDoQTgA8xrpA2i8kEZELaF4u7ymipkemt5q",
  "key20": "kyqAxrQXz6dJW5EWDv5eWVHrt2aC3i9tWzAYiipQvh1zkFX1GsgEsq2MSUpiwbc1Md3Xbt59EY7ekkLEoZxBBeD",
  "key21": "4gMaifAoCQRwXLUpEUU3Qn9mtLmnAQjuTEQcXk3cHYGTKgoL3QfPETpCt76wcNAwU7DdxtdSQQ7tT6tmJBB8W5rZ",
  "key22": "4FsGAfUwdjejC61XWDfJ2AZ4uqkQL2qGoEssiv7Fm8Z5PqesqiAco3BAdQitAyykBVRJ3yJjWYa9WfmEiaNBkVz5",
  "key23": "zq9Um9VhnhPhCMacLxvMcnfFMuv3gESzcRqJzKz8TtM4negv2Xeph11HnZoUysBdSJUP8tq4yJXVhQoUJUSmb2h",
  "key24": "3WSm1Kfb7vonaJ8vciWrbAN6aezePyB4VzxrFz4KGB9KTbwWGKM6JR4aLbfsTpMPcartpCVFkSsRpY4p68tGV4Uz",
  "key25": "4oAYRtsvDUYSVdTfttWrjXh3jdqjdcQeEA6UszHSkwEFcriGixfqxMBfikK3do4B1teaZZ5JmRG7Wnc6uZv8mTrE",
  "key26": "2b7m3rdgJnBZ5aCDETxhsqpFejB5NCZnkJyDA6G9VioXA5EVb12RCQXAADwb1g4SK4xZQp4yu2cmrzZndnwo3iAZ",
  "key27": "HUP6apjgod3FNVQfPvyfJdpyAykrJNMxWBLQyfzYKtbwemaCPrdAfDsVGQxDBmNN8XssQgDDTVpRjtYYKK5PM9Z",
  "key28": "3YebTJjwKA4CrjwdEsu1gRNTCAFwo97qaeZq6tpZP68cq794v1tPD7WvDHAA99asQPmNRSgvCed94ZJjTe7MfNhR",
  "key29": "p8SFpNLxk496XoNTtVbbKUdaRkJomPNS3cz75zEDJwKUSgJwK1uupaDEysMM3oDZfNY2h291ywN6F72fuhkb3nU",
  "key30": "2ny7BBqikGBvbHoVzoLEV2f76R8pzyb4m4vf5mSDonMfCcw3iqSArTXZQhxvrypXKuqoPzSPrrJBYY2o3erLvEQi",
  "key31": "4xfTQRP65CpDpmFmhF8Zsd77Rmw6vSEf9FtHHS4giZ7upw24fEZghsXJCrjYLf3eA9aCFJAoF9fykvz23bKeFRD9",
  "key32": "2rmkMXvn6jFd1eXFikBzf6x5GGYSWk25rXhgwQckWfRgdNF7nXYMmmvq9BmShbz3UB7yPM8zKG52DjCh57pKostM",
  "key33": "66P7Q2z29zJgGsYPG6Z7XpSjYVhgN472B3VaWJJKaAjXfT7ddZ9RgTnZu3nGZ2maW9hTvX4PyxaVjLMQznUJcJ2p",
  "key34": "3qD214Q3uqMUUiGtcmSuu6pYLJ3umT7XsucdSSnxzSkkr68jEmoZnxT1h98iJJLLbxfcP4rcEy48pbhmkhbbWHJb",
  "key35": "4r9k5FGV4UQosNxxATaovJFy8tfsTzZdgtJr9dR8BfqCjkK83mh4oCTcH18wMEXvRgppy49epkLVnSqb8jv7zFwK"
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
