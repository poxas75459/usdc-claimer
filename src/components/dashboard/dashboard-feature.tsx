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
    "3brq3sypG4ePAJoUgasuuB4mftyKLYMQB2GpHRWdm8hmWyHc5kfciKug6SiXZk4EsEb31ddtWR4pyusCp3x2qyGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pps74QFodn5SqRHHnfVCTi8uXZieMjqbbyJy855bNLDskafGomxXfjVRFRCDiNE58n4qe22aqUh4YbxQHXrtXBb",
  "key1": "2FHBh6npJpmaGf2uD8qoAt5pHVvwzEyYsCDT8AFpJmMJibRuMjxECnksCsuoDjGme8GLkdERTC6ogkoJKzJ3P61s",
  "key2": "YrwruNbLc7Fo7HXQx6knMFdkdGPkeLB12myKpvgintH7tVf6CxcU3wdYiJt7T2Ywuw2fy67z6HFt7bBUVNXvVKc",
  "key3": "KoM1mnsAydbyePRa1qMZzvkPTXRyE9a51E915ULjueYddEzXspodEPQ4gWAen4y9uZrie6FtMuFhfEFwVpn3RA3",
  "key4": "5rXTTLorM31LiWU5x985cnbNpbS4Bm7jFqH9DvTdFpsFnXGAgs8jXnZXZESY8H4YZWU2iM1EQ73eMw1uXi8n5FhS",
  "key5": "4mBrbjUFjWMoovsfWSV5kS8gB13jnEhoYApTu58tiSVeB1nwkMFoXNyLZh4BBKmS5kjY7Yvz4BBCYbjaufDkgGFg",
  "key6": "BYg7brpkiEoDeWNhzjYcZ5b2RTGEMHwWPJ3PArW4s1PTKtiMfzgaLKCcht9HgrFg6kkLdZ3kPf9sJktRPW9CZ88",
  "key7": "53NuJL2q4YoyhWqrB8EQNmCnSnfCfK9sxDfaESRabWZksiiJQ6kuKbVXgWin4PQyJq17zVvUMuZXdZvu6fWtegDn",
  "key8": "1h6nMZQ5Wx9MjbP9UhxUaXtwtNaAhcRbgEgXZ1Pbyv7sWXXvPQ6WEQjMnAB83wyzTvEVMEcYkuREpK5M5WfMT5r",
  "key9": "a1m4LcqXxHWjUyFvQRvLug1acMi4RKnf3k8YQZoxyiezJraPZ4NtikF9quNN6bcS27qcE5qsZuvxyFHHDTJSF1b",
  "key10": "5CfpxuDEJnopNVkwmpE2zBF3dj5uXStSony25wYGYQX7hW1UF2tEJFusTLTizUsixVYL9b8dSqrgkc6wQmrZc2Jd",
  "key11": "2V8S1KjNofongdNUWztF3yj6cQmp92HoVA4hw2TrFvXFduf9qLDfcjndHTsb68fKnyvbH5qwmBBmE2PsWAviR9tX",
  "key12": "4fE3F2VvfAKwSEpCEdD8tuxMvQTZsmPsA9AWgU9n9vHnvSDhS5J1yYTKkFkiBXehPV1m8HwcdJMG9t8YKqSeZ6ie",
  "key13": "nsZGnmfSTBfT2zqowtTrtLmue5x8nbvzjoUR2ZftzCqGND9f615pNz9qWrazyYRomEWWmN3pVCkWwScPa5HY7uR",
  "key14": "2ZDegjLhmVKJoXNxH9Dx1usj6iCTkyAVDxeutvuFSz1rgHcJ7hD1SSLYauhGmBh62zSLUnTkuahavBQVBA1o7WSU",
  "key15": "2wad7V57DsAkUE2riqniJxof3mxTYsZiGev9y62yGZWP9jgRffAVLaZqWLN3PC5MKiZ35asd4rBRRw2AR65aN65g",
  "key16": "8y49rYFjBj9QVX1TEF51npXQFPPjfJJC2EovLh8CPNhQTy5nRrod3q3rmX7T1yTdd7BJzchrDUDcEQyVgWmfXuk",
  "key17": "4sB16N4YkqynyLKvNip99bnwvYKkJHivFuTAxqBTGWoWrV9xn65f13zWQaufUKj9GuKrPVWzDqPTnt7SQ5wCK76E",
  "key18": "2QNZ75v8px6YywEQaKQWmo7fMqZkkbuW98sfzJDCn33KtMu8QgM7q9G1PaYsD3V7ZE2f9ehHn9YuwuaEypDqAv8S",
  "key19": "q4ZWksdd2oiEhXKoDeWG72ufquaD5gTkwvYEpymSCBNmK35wtmED1JADJ68YPhwYHjfqtdH35EJaVXwwF5sg3bn",
  "key20": "2jZj54L3kpdpkmCyg1ttMEeZrMgMsWbfNiWGoFA1kfGAY81u5f5WgJQadc3KWy5rzaWbtZEKA3U2cZ6gyLhxYvDy",
  "key21": "612R2NnxitLNZCvVKWFKtwmb36fykzvcQ7pjJer1Ux4LFZEYCVY2aeHQe28WRLUKe8m7ya4p6kJ2BkCuuX3PGpRg",
  "key22": "3mRmrcQs9NPzxaEM8pkoWyABugn532F4TkfHCXRo15me2Bfrqaf9NeeXdYMKhvXJ3ZaXRfZNVY67tvhpmTEASPrB",
  "key23": "34VcS4A5BcofH2gx99DNfLy3vHUGknFj1yk1zKHvxXHqXzvhMwDVSKydmEQadXVCCzsUtC8VHA7QXcvQPHfbvt5X",
  "key24": "4rpPvtMsHze36SwsJKWFgeiXVfKkzLaejTaiCrg9RHtUNN4soE5ymQm2XmnKcr9XwebMTAhZXmAKeyGQTdxJPQ5A",
  "key25": "5RpaTbnSG8pUfYT5ygjtr3dd4orf8FfQCE56qCv3DwBeXugEbQsE1L3U7nqE5PodkAJWtCQ6G3eYqAizog85Ad7f",
  "key26": "28zDJ8Aydo7E6hZo1rnoyZtENqm44vCDTKbK3fvSFYBLwVBvfG8qxdxjJujTfvB8fbnQWBakKLFbnHsKPrgCLCUp",
  "key27": "2Ea6dQjypKXvuuhebQDN99RKyuRxgUDiu4Px9qRoFaZcxEjUfq1Ywc38dkJ9pfqn2Lgv2YsqopUJ12xRwJMjcE1R",
  "key28": "4rkT79Z1SnJvAU8RyraJCAEvfKeX3cxB1cWRfHbXnnD5dr3466pZoNYvsXzQCF8CpHRy8KzQgk21DxJZEycgNr1K",
  "key29": "5i6BCxTibnydBDrDnUSX3spbv1GFckoTgTAoU1ckS5pqEvfSEdbUgHV5jSEFY2gQCQCQzvrAYBVtWe3N2TkeNxxX",
  "key30": "3t7HABunfsJsbTSSnLFSWyVoJAR4EEHZYSTAY5YTpNTbrFS3RNibK3fi3A8eZZC5aWtxrZvTCivzg1rWwB35MCkD",
  "key31": "5Ke8f6rdJEeqBoBwr4qZiq4MnkngicB1rsMuFendHLcizYY751piA9bqwaw512dQJd3HajfvcecQFz9n8wqXCHUE",
  "key32": "5R8qKrF9uAzc4GyZBYCgkjqnaCSV958K7trZ6UqigH1t7eCAGRbH4aDZLZAP6BfbvuA7yq28WdYyYjRuBvMitEK5",
  "key33": "21Kuet5kWvh38uSq3c3PJCtwrrKDQKRgXGFWqG6rtZEHctUA3HNKgA2mApE3vUjUGHwWMTdX7XNBg2o5Jqh7bsCa",
  "key34": "4gZ97zZFNFdRFxMu9FtGeWCpggZtZ84cs7GYVHWC8d2vH2inZkrzWnjLHK5PmZJV7FfbmrwLe1oCC7pgq2dycaRr",
  "key35": "5fTH3pQ5t7NtS8gqbhwbPBJFybFVyp2ThQE5rDV5RrwLctFX66WAKkPC4MU3Wg5WEYdb6oQxJZ8XZyrXSgP8ezwT",
  "key36": "v3vh1mRG6LkuYs9qR8bh4D8nutwfJePdUc42a1KTWaEUJJVL5uFTY9x7mQJ8rmyoG1RUJydE7cfcfRK3rDXHrgS",
  "key37": "2vpnAdCZMxYicK2vvU1jPya1ybfD81kb2kchneZLf4y8aXXGEVgcppymzh4ESnefvNz1oLz2VMuSrFxZrNu4vfGh",
  "key38": "4PxSLWHCn7m6mCHwA7PcVkF9X8zSQ3nkkvWVJNWEZaLVJyq1VdnQhP56mF44SDa6vyTUpNTRN6HGY9Q5GfWyxppS",
  "key39": "48Gf3b2XdQHQYRNX2fJ4gKrW7FvDAhdW7xeBeQttB6QSs4yFF1tt1d2BKAV1yNj5vgVZGoZJVdNsji1U35nESUu6",
  "key40": "niKUonwRzsKogygH6qz4dQBAHMjg97Uh2Z3TFrxnrhBgZYxfn3nw2AbF5myds4mXv9DtmvrzHrYUUb1oqXP9Rkp",
  "key41": "2SqaUYXRv6D2UvqUejexUZcmRYEdkwHQ6pDxh2VvziaX17o3BvczoCT9nVhobZbyQtRAqjV53AhVZCYMQaneVuu",
  "key42": "391y9hoEj8jqoB9pFN6m2FZ6MvsnN5k83JmUpHquDws5fYTqeR6D1K4Sbgvb58WWBQDoUWdaTjzqssjJ2AN391Ww",
  "key43": "5MoqN7nXHfL9MdHq6Wb7p5pUR8Yhp7i3Bs8KwEm9Grp3svWxNbpCyfpLpmVLfUphwiMxs5db2KSaWAJyCpH8DC6j",
  "key44": "2m8txPZj3Xv3CybtdQUpm4m3wAHArogxPimb3Xg7h27avGapXPbtF2UqvyhXVbVThnLUxvHVHm9hxGDW3fBoRcV5"
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
