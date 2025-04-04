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
    "5GsgVJ5vYKrbNUEcyemDgwAsEAq25tKYjCHJeFWkeeKGk3BET3mYgbc2pSDtHWnaYYjAYEqSQpbp7kb7teGF1zxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u9N2CYKutjiSW6LQmdzhdLJpvXs5qumc2Js8muDKnkWpAkbFS88Ckt4QBkNKvPhfu7xs2XVC5m4EVSHXx6NnJHr",
  "key1": "2htRkJKAA8j3zt9vqL2yvrRNn5YGyTBWokZtAbMgaqowR9YdKxxiiNoFdzi79jCj5qQaEKJgpfE9B1FjkPFQ5phK",
  "key2": "3WCs1TPCjAmnDBMWMZCsAKryPTUHB6rnDe1uP2zRJpXdximJ3m4wY6UbqohH6qrRHZFxa4CbK6WS12mQVtnHozq5",
  "key3": "2TtfdiVvT7BXsLGkLS9gMc7zpKoxZV8NKgWHq144mFczEkbxcU4qczLem9ekUuTA4MgG1o4VTUH9FTVWhaegBYmu",
  "key4": "3owPY3yRbNMNHGExL7w1j93rP4yM4XzWf6v12HSnb3fFHUgeNmqvzxamXmFHZqUBzjUo4Db6x3XKbvwXPUbGmMbv",
  "key5": "2BF2NWtXP7S9W2PUE1ETZeWJxXREdTFs4jenpNTUPcAPgBGkEbXvHqadBNjGQyAjJYwc32dfU3uR9Ap9tYGd6F68",
  "key6": "dhjGL7TL9ZTdX5MSwhQh7ZgoLS6J5J5GN3M8aizeMX6fJZ53AeKEC1JtPfpQX47aPJmhaLyU7bNr6Y873xyjUKT",
  "key7": "5u1GPoxVFP6gNMLELx4G3irLYCPrTXjwhQbozdUtJS7raQZLW7tWLKdgqgLxZycpyirSxGWsE3WoiRzjoPUHsqcE",
  "key8": "okFy5rYAKpMdqQZErcLci46nskYAXnKWDa1rv4tfT24MMbELuwjVE69bRQ33LNEbBam2gigNeDwG9SShcTKMZfy",
  "key9": "3QrpESaJouSGJGkdViMi4VSb21fzF4zANR2szL5172Aqetd8R34HKwCPb8QzaEry8CKrSGBmSjgiyJcKfah5phmj",
  "key10": "4LhhUPn8NWpdND9Zs67ztxBFfzTGeuVhHGWF1Z572sx7JA61pqWYr76Jdao98dpzoUr8345grb7aiKTDiYaUsvCs",
  "key11": "4ynVKrwEGAPzrFj8VgtQW66nu9Q2DpkuiNwuhNhtnDkeG6xDsc8ciuTjAnxvjKdzcyf6hmKGiSztJ3ZHpBi1bjma",
  "key12": "5Legg9FpHyzsXnyZ32SMAakPWVntdfHy68b1YwHVXs2owLugTyPSv5FkhMfM51Nrdf76qQxu9YYN6isEbi9aDYNK",
  "key13": "3aZBgNR9XLexgkdwNhoMUhtEwT8EGHFqXVvFLaH3fjxExTzTGeYYLAemJoUrkhdCKrZKK6raS5kjbkLMPuvwDoK2",
  "key14": "3wi5NFW7AmzCxpeUWXGpRQdR7bZ1waDBRc7aWv7jdGaqnUN4fpra5C32jwFv8hTz7hazxtNovWS6m3VNjtePARnj",
  "key15": "5B3LxfFfkAprjexKw3vWmHPcY9696NVLY57VpDhXvDA1GbMiRZ6ZFY3oMWUR3FjKJrmmD9wiXD9PX8rx72CJ1YU6",
  "key16": "5Gvjvzk71jzA1kdyKSi5gVtg93yrLUww6pcpzdjBfrXgaLj7ppZ8LQjkXN7h8QDVUL3XSHJqzDYqGTywhBhDwTXF",
  "key17": "3jsfaJUwFX7ZUkJ2wahEh67KtJ9R8quQCqbj9Z8uZs7ABW4MfmaDFsqokxmdShTjHXvggizN612TcEHYDMkTHoZH",
  "key18": "12tyHPhNGTnZTo3SjhTvhL3yg3H9bxjAUFD4pvZF2q4Nr29Bx8kuArEKAJ4o8XoaZiajMry4BEb3uo3Y5Edrd53",
  "key19": "3jqPUPV7LaNTSfETysRi1qdgJJmKx8634MQ5YPXHepfGqePWZLzK3khgW5wkPSpXMPkZn2sy5fB5VLNVStHwXyw3",
  "key20": "5nNYAV2dqyiMBQXEYDmLK6aE7nFXntiv9ZaypPsuAQQmaXVxD2ZSaEexesZrDYCW2BmiQ81BBc6hgCGSa8KMtwXz",
  "key21": "4URg2tzyFMnPsdM96YYWEqEgmtjRBBs5NqvHedSK5CGDRNoEd4yevZvH4iVxnauNp6SLQToPnzftcYgdw5JmsbUu",
  "key22": "4JcFa6RXp6HUyKzENWn6o4Yu6H34n1jB6cBK9QDVS7sVEub3FGnmaQkWk2eCNZigsb9Y5P2LkJvQ49s5pcikuJc2",
  "key23": "5GUcAWfqjqR4RSnNC6deKY99TKXobKd6ViQM3tZTNxhP75AQg496yUDuBbfAE5HSmMuBdbtTMZ5FaUYso3zDiJ6e",
  "key24": "2xtUaEpgot5LmKmJfu4pvDgRu3msvGFscpwRFTEqmTpi1vdihXdCzgduDdC6qXpdenXNA687BjZHNPkqC96k4HW9",
  "key25": "32rTRuhmAxWUAEQQUFahUMsWEFunCNtrG81ks3yQfQirGhi9i6Ldp6xWMVJPGKY3t2okxZWP1HhMZ9JXV4XoBj1k",
  "key26": "4oUZCocE49Gaka9dQFEYbvJkJ3oAATgPwUWpX3ooEwRc2DLeBraAfpiGDi2kfPLjXt6AxreoMVrALBL1xNabvkJc",
  "key27": "4CQTgKfGDyWhugWn9ectgeoRZyPPnnee4AcJMsJkgvSvvuB5BidQf5FHWBf2CWwzDoE8wrk3tKPLj28Suh8tjxj5",
  "key28": "4cbknS3TUzgDa1RGwP2MLEQ7Ca6cV37ez41LaRziCLfih6JZEtS2xuxnkGo2uXS23GxHtoByy6mXXMzr2pj8MAsm",
  "key29": "4WGExg6Zf1L3CBbC5eAWWiefsLAc6sM2iM8Q587K5iNZoDq9PVUyA8iCWzyNqBDbCZGaACYEiP4m3oiPrbUQ2eBD",
  "key30": "3nmwC19Xz5QcvXrEsFRT1xuFShaVyBzm7Kqb7NQuofxwQtop3Z1xUBx4YtZxEbpoEtMXxPtqphqEVYmJTg8sogU",
  "key31": "4Tx5ggdG1epEmpUr57Z6jMXjSvzijHhZAS7KgExndMd4YaBydr8RumkxjAZ5FaNGSuRS1qXBXFwuEVixN5jnshjU",
  "key32": "29XVvCg6aFKdCsgBVxKTbrgWBzFLEFH7nxWahDv9eo2EFqvnFaaeHEH9fR3HVogXZiKHCEYRv7Nou7V2HqUJLgWz",
  "key33": "4RTdhteDoKCx1Q7H6brkAydWCqGVt7BEFn1aJpJaDvudEeVcjmJJot6Ghy7A5tZoKCn7iL76nXrprwLrkjRxpZKp",
  "key34": "49MZL8YKJjiuqsM772VtBbWw5dETykfMihfGiGN36zN3KfH1XP5ZcAfXgwQy7YEns92nascLQaBK7oJZ4zwqNCu3",
  "key35": "2TX3Z5WMYBNc8R3b6TKxzi1eB9pt5jWtJRG49UEmfT6JXHWLcBWVkWc4xD1m1bSvqhd7ZV77bsZJRRtGhw6FoQJf",
  "key36": "4YP5ptJCzZsXp91qu1oee2b9rXDvR6EKGZkv4sKyVB7g7FcMfqEDTb4fUsnAeBZxYt5tk71rouCMRKHLLqiQh54W",
  "key37": "5BSzA5oAXjVjmByR8MkGqJo7ZE5WWwoAXRckp68FLgbpJQSB2QTmtHiR3Q6FWVgkZ4FGSxMtDeNg9FnMWHQQux8g",
  "key38": "2QwaaNqyaVrMY9Npxnd9NSR9NzF9hgofjY1J1tjhVvaJZZhVbXCFnrU74Zs5wgCTU5aFWqoWwKKSwAUacywReNMA",
  "key39": "2Hm9W2Bsm3s2ZzT83aW9qLxeP3ESKs6NdmpY5dK5KvUA8PAApCCRqy58zZyxa56AZ59boS32hefdC3gAvpE1f3sk",
  "key40": "4AQsFMPgh1t1h7L1F6gm5neJkD6KuAcgUFHKoRm8sKujvi5cDUoTQ5tDxdorf1Zu689JUxJfRX4us3EyS9c8bCBE",
  "key41": "55iHXuDD8aHV8R7w4mw17p8tM6mxb3T2CinpBvtyT3gXDJgDseVEMUaf9XfyJgfdxe6VoXY9ACL6VmEsmy93NXp9",
  "key42": "5Y3bhTjp6hXCUfhf53g2ffWBhnRCfewDt79H6W6zxSUU52J33ip3ZNLvp3uSpMGcGqahhKiX8aTv6Cb8jGewrNRh"
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
