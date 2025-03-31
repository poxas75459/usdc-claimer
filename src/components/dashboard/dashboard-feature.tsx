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
    "2XKrZAmukzKVYGHu5ZwMFGmsA8SJGi85HWnw3pU5bfytaJkAuk752buzgMQsmpbkE1ZPBC8RYPhBzNjn9ovL8Gyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VGnvLNroVxVb6voNe9sPCqwKJKjkHno372qDqfgLbVN8LgMwecSk6u8X2RdbE8KSRcmsQkgG5G8NiissQ6fjjVW",
  "key1": "2i1WM5ot3CpRG6QaD4WG7DifqN6q1oQMKkUzqkTFn2HrVb7eqc7rCGpZoG1yDUi4GdkbvU4T8hhSf7uVGM24gh6J",
  "key2": "4VVGcDqAJs4dMA2JdQY3WZoyQScPn26C4uwuM4GKvUx4iWPZZaqxA5sgedYDX1M2YqHHmoyi8T4EVzKozBotcgwp",
  "key3": "KdetXdm5qA35dbuj6smRzcXbyEjVvV4gUAvN6QVv9fDfvZz2QNNXHXAT35RpPAVzvYffDqLkV2TycPveduMcF6X",
  "key4": "heQDP8Ku7r2iSv9NdXTRNRRTLuayqjpBKGvPEwYUNa2s2AePVBHXMDXV3NJFwH9iGjhSuFmgPZ8GNSUCdgXYUSB",
  "key5": "9aY3gyQBTVDicpkP7pP7agm4d6hHYvuX36abGoQ4xGshcoG3rB5Y6bocnY9EdvCk99LiEabXgFJ76fPhtq6yHXf",
  "key6": "2gfv7kvjGLCtcmDo2uk9W4d9QZixEN9KV118WEq57egehzzFU7tJ64BiXpSqm2sCxm9u31zccJQfa6aC5M6wZBu4",
  "key7": "5Dp9niWhSMc1hJNitSoGGZx3pS8gGDhFeVyua3kS2ediZMxZQm9AerX3zbWdTqzaxcHVP6fSzE7LDCkijmq2ywno",
  "key8": "3wLQxiipRNNQnQ7QJnuoxb6eRyAUVPC8Z7sEZuFkdAgWGhDZkCQ7BY12BwCdkDJ8RBoj9QyQMCCirGenuz9gAHWr",
  "key9": "5EZmPepRCi31mMsvGJQ7ykbMPYE4VmCeTXkMfDMRWZWcShpAda2QSB1Lt5GR3nVuM1qXHtfLdhcdvUbn7A5QDeik",
  "key10": "RB5Eq8aAz8BsAFJsgr8W4WC3pUbsDFC2aCSFfZRfZZvmfrYBRgsGqJ8W1dVRUbdMGoMx7gqamYDsBY26T9LgE9b",
  "key11": "2Jhtn5zZVznELt9auUTkjnByovP4CeAz5v6Ntiqg51xj6JCdgVZewirnMn9q5arBDYryTTrc14HBHFZ61bqnC7jW",
  "key12": "2TxJ3rLuusUsaKhqEUwiUth4FqpST3vo7MYFfx1Wj48vEbUh2Fgy4c9YiRHuwfSpfk4uZh29wakaFbB1uzGfzm7R",
  "key13": "5MbiHBt8M5Brg3cUYni32S2bkdiFekLD7NPete3yDRg2F8RM8r8MBJqJ3LfXCw48t7EBpNmnrb78YVUz7HNYuxZT",
  "key14": "3CbkxjVbNTPu7i5cZWMqXFbW7XJnJ5xCjimx5ertHm4wpmcPNPjBe5zPeGg4iBhszUJdoPAFkKiruUkPrGZ7J2nb",
  "key15": "5aPdSPdsd49CHasNDQzoL1kPCwDAoJDShyPG7fWefTpwaEow6hwFWhjj7YUBb7z7BWGrA2Z99ZtpMAwib15hYc9c",
  "key16": "3BLphKxzmzKm4GwZay4KoQXVawPeUEa2LGdZgAkzyzAEmPrb826LqTQmDWQToxAQMqDsvP2YF4qh9JohLk9LNDrK",
  "key17": "27EUobmdShpMju1E3HFaPQ36rRD8nYB9vFkYDwLSdyYpFzX63zdRu6EkD2t9NPwrzCPitCbRHwS4N7iM5d2KF2sN",
  "key18": "4ihaPA2oAa4R8CjZvi15yonczgPrGVsaZrJ282nbZYyxpEKkGhZBk4G5Pn9JLtMin9AVd4FY75y2QBuZXuvZqdND",
  "key19": "5yHdb1JnMmuEpCuJx9AHHVAaAGn25SiWm9vyaKa6vAS4NqZ9qKLkvu8hxQhSzmy396QYdNFM9ZgQeUh3L2FzDx7X",
  "key20": "2W4BphgXaxb6oC4QzEKAJa4tx9u5VJ5YiE5GLw5oHVmdnUx6M4Bsij1tvRJSKhceXj8oF9VsPfk7P61uucP3dnwV",
  "key21": "JYEDiM44xLeABBeTgs8AepA5M2k2VX1yt875VTxF8nD98ztSVfZgbRUx9KbAskZv9sR7e2qe1RuSTh5sxM9QNHn",
  "key22": "ySH3C3xaYQGy9GCSsWi5Go8yXhWWE3cQYPTHEdHfqmZqupNHJbaEqZfowNKHaur9sxGtepsptqJ8E5tkcqPJTfS",
  "key23": "46tWKWtuBBTb9Vz8YTXTM1U6nKuqqp1AAwvcUgTUQGSKvcVRcohWYtBjgbBUn6MFKRErftAkmVQZnbcH1JKdmxeL",
  "key24": "5jA12J1DQaiJJXSQvgRWpLdv5FTFCqMDEsRGUjyPhW1ZSVu7GYpV7K99y3oz4XhGETi9bh7ypRGupSxFBLjqKFP1",
  "key25": "2FfH2NdwXkm1SmMA56NaTiYMXZAWj3YkCWFCh851gLEszGNp1Zbu8pLy1mf2WVpu4mQaD5bgVAEoDSzWhVa9PmH6",
  "key26": "3CDYWfHqcigPNRDiVLwL3MtWTNDu1jNzVQ5YNL66HAHKoJGAG2ix3Hmyse8iai9Ci2Y7feVCYxENQKfirJ3N1v3X",
  "key27": "2NQq6RpwjZyzvgm3Mi9xtafnWK18GDCTC7fFUnvFbMJdpPMNvHr4dfuBtqsHXfyKFZDgPBidr9p6gtpdy7SmQuK5",
  "key28": "4CKkKQZPuohbDKLC6ALwQUFFrfpPL9Kg4eM9rs8ydakananTpsCnG6PwhEm8pAmjjRQX2YG3Un3ckkwDihbUDih5",
  "key29": "zZZocp6EDKXSDKa9HmeAvbPiqh3ueKKiYZArqf6sHytbzxFRv6iSMFvFtVA1Bs4NHFW4888bfL3M2MFWtGwi7Ku",
  "key30": "4wxKURMwJGMzRsMyWPewtmxrvW22cox11FhsizJS5ph8Qd7FJNG4Mhsj8EnoYcL6wEUvjMty1YKCJTCwys9hp2bg",
  "key31": "39aK4AB9Ww3oSGgYDaSrgUj6paD71i9LRyZCBw2vL9X9jFJpT91YcP8sdizy4Rb8btqauHRZobqkpcWojtFtqRfQ",
  "key32": "qGinHrkN8jUFuMR8cWNLgxy1x8cFPZFtoCDHDtoH16BuLtWewnQwbK2RkhKUTHyRyoApyMgkDkhAiujXY7PtP1n",
  "key33": "2YL2Strhvq6UpWEmF1krwJHy2cHi97r3hQ6bR3QwK3zDEdA5Ns7WNroNKKmCZNJZ8fMLU2LYBn35ZciZ8hR4wrFT",
  "key34": "3mhXw37uQMz66a62vBfUYSiejtax72xzcCB5oN1dSBHAADLp3L1vaTX6rVLDnZjiusLFYuaLAnnjTvBFtZSaK7pG",
  "key35": "3jSRBgFvSFPELD2cxCbT6ZzbV7muaNR2gHudUaz5YACWmFigcspNoRfHHkEaCm5h4kqBARpqHPTPiyzeVxZJmUcs",
  "key36": "5p1VBCYGBvpCdYC9PA9kRAkYipWG7e3CHiw8hFpo5PzVxzsVwR6PMAj3GmYoChdpHW1zvH7w8iuEzYzj6ms2s8gK",
  "key37": "2qxbGHGreZxFKA7UBsYamiH4Q38cjCytJL87WWB8e1m2nTnVzhmAno4Wq4YfEHhcagcGDQUeoDYbFYARFWL2Yd1e",
  "key38": "3NYeJwtShc9GW6mkve3E29LNEiixXpyzpUW6SANmgxneswLBoHp2nX6em3xpXBpRQWFhXPHeG841z4ZCGfcAriHC",
  "key39": "37RuwqCGsCQG5epSuDsJvxsuknv93CLqU7fVvV3zZ4ieHUTMFkfL5f4ZaUCnub42ki2ZbbxuV8CoPcfNfPhbdDWC",
  "key40": "5WEBRGsA72FnwJHkUc4naXdPB1RmaGviAyp4RLjaXugFjUVVFzQtUcVdB8u2LrDmeksimJgJDvJuR3fmJ9QSmvWs",
  "key41": "fonrHAG58iAV6bBMJRjwkk64VKnHP2Jh9pBDBfCL3A1UM61qZa9wkwt5yTMEtd8D8j3trs3FqQWtMwppNqiVbq6",
  "key42": "5oSFeBVUHZD3W2hcpWRotQf8TLnpymNdJ8b6UqkojFWDsaU1m4zKyU8tywZsqwr5keXWmzxBAXe1A9HN12T9QJ6",
  "key43": "5JuRUe3UnpfAMBcNGxLytWKokbmoMwHGc5FE9kcgXppmrZP7drQgBgjAjEKGk8QkzzVR1M4wksi2tynZJCVBGErW",
  "key44": "2UkeF2wyCQtmhKnLuP5yGJmc3nkYBBWZMDJKDyeNaKk6XNojctw5kCQeoEHdMmAXrAx1Xe14bUwD9ibngUaoEeSX",
  "key45": "LsVssc5w3zKZD9BLz2WrrGYCRbNW88kgEi4uQBsvyw9tT5fTZxYuWaqj3vXb3uXG3yzoTWeUzJ8M9KQkCK1NPRg",
  "key46": "4PQBQEVMkodNV2a7trhkNyGZ5fZbZ7kCyqktwiD4rSppCiPdiUL1gfS1T8ELL5UNW5u8r7VJH1TLs85QMpvbXjjd"
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
