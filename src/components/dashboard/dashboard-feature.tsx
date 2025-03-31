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
    "5egrGBGBjny2ohkocZX3A3t7UDD7QAJtfUkvKS5jwHZqfQuVCVyCimW3reokSYqBKpu4wbdk6V9o7nBMDuVa86aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1zrtLogd3hLbjJxZqgFQWyBEU1UqAE3ExZ24dt326ymn6GykxyQk9XEkAcLEKFRfNdyo8Qcn6PqhtWygtUvZRZ",
  "key1": "2qWgWdEfexLx3EUxAbYkaLvGfN95UJiewcthUsGhhkKv2LgtJPiygFYRKsN79sFthU6nac15d9mzM49eJwwkdqhM",
  "key2": "4cK6Ch1UznfPwXPrEK4gAC2PcmJZuaB5JDYxrD9UfJX7CebBNLhgUn9tkzSk9332CB8cjZ8oCft6umuKn7Bkmhaz",
  "key3": "4FRWi5c9sPM3hYmcPDFJ9t5ZiDPqVSymmnxG4DDEKqkA78EeemSxEK31qYFrSs5CUrWhzuJEPEUTroLSSUugPpSt",
  "key4": "4zgAzMV46eMN9DyZWRmK2tv56QT3g98FdekXHEQjGyN9iFpKp3o9651WPkrvPwsNthnEBSuK9mV4pDzZupEAM5mU",
  "key5": "po8WNn6ymDSKYMdboykk8HoineBs7TzdMqurffPxUxb1UEiGtYrjCXdcoNPr7fHpoXiVkcZnfjx3J2hUtL3Ggpy",
  "key6": "1eM5HHjVj8sCjHxPB8EnS8L1nqmZiBZFzjDhDV6fKuNUtyFMonH2YhCNYdgYwDHkeD8WVCS2bXKoTdNo93PXTMg",
  "key7": "412BXJxZD63ewN1UETx8CxSLBVY8eDLxVasfQHcWHHF1gQSGujUbU9AZNtrW1v6wEm6d7RyuppKTckm5UCMuADZc",
  "key8": "tKDXTQZiUWHiXe7eUekFSnk2LvaeceyBys5bN6Ur41u6RwZqFMS4QekNpkgmYBwEED7vJNnX3Tth9kzz7A1qBRx",
  "key9": "oVVXh28yskMvuRaKj7rXu2PdCsuRKA2TDpzyGevwCebX8r3MH2APDQXRk9EmU4qAbyiDdfUgridxhvHi9R3kHsx",
  "key10": "2XqbEV93YnuQqfF47NR8KYXqjMCW3nHRU1x4Aj7b38hcyPRWaZeHTYc1DZFY2XfGXdjRJHAWPWvzPrKpdHdaya4v",
  "key11": "4CR6N3tJB19QWAnVVgQgV5X8jTj5sXwRpknm4GFzqzAdAQ1FmkZxWL7z2kd4vJ9gUtCtPybjJDoj1MVjKybLtqqd",
  "key12": "2j7t1FpA63HuVg27P9SMpgQVaaCzGk1UjAs3EfCM6LocSuaQneCqYJ6BQGxPfp5RF33a8YFf3jNdMHLJHW2nuQrn",
  "key13": "49UCyZwo9VwLuCbYZGZ3U5QgkeiKB5RxMC51gN3gi3tcLpFno3qqM5BhcAh1tYjGhgbyGEtom5ZnRfYEkMaUWbHf",
  "key14": "PRbV6S3cMZH4Vn27dtTqz4GAM39TaxTkNQAeL3CVnErwewZXjpnfQZEydwPGZwT2Jsq4A2vg8sfQNZvFf6WvJoF",
  "key15": "3xF6P6SAYyziV9M3XQ8UZ6jx4pNeF2Jrb12fTa4T4EPhxKSv4rZKx5526zHjhgTxVtAcnYBEhF71uBv19R9WQqmP",
  "key16": "32Hcc8uPW7VyDsZrFo6zrfoWg1AytT8RouVxdh4Z5xXNBVnAfc3xpz8ja94AfYnuvKzrD3JiAJjyWM4QL1MPvRx3",
  "key17": "L7ZtrKkhGgQp1GWSbjn1r9BbjbqiQzb4bu3CrDDW8q3KLqbzwv6VcZUm4uevMf9FqghtE6TLW7WAa4pkbFg2v3v",
  "key18": "2NWUL94prejqi9BWX2smiBMpHwKnQCj8HNVa6f6YDnDmGkY6H3z5MZ8tNT9Pgf9iwSMNkb9jSJ5VUDarbmzHo2vJ",
  "key19": "n7VzDMsFasBKjuxK7Gp7aNYunWjfyo1G8DhCDzrjqQms4UigCrQQfEdejZrubMMdDrFgyRs83AoV2bjxnJMLJPw",
  "key20": "2jdizV4GSQ1XmELH8wPKTVe1Umvd25W3vCxJV74nmQ3ya4F9W62Ti9bGusfroAHGLkyNLPGsmEbcpDayECBU6UtH",
  "key21": "2kFvUrWEKcu1mgqAw5KuCr4C9YAJyEvSiTNzaCu339D8Dzzi72XhMKwakz7DJhoEcVob3gS9QmfQKKQSBHN6Dfbs",
  "key22": "5M7fWh7HU3FWeCcELqLWPER4sr4LPCSyX6muL3zew2iPAiaZg9BYjygvodBf5GV9oCJAR47DnLcCG9Wzd345zrMf",
  "key23": "P2CiXVUdjdhZYGceiHdfTdJU99JQiADB2Kmq1ZEqaZYXgvWVBjUGbju38GgFrSwALATj73ED9E1EMep9UC6y37j",
  "key24": "56muZK5umvfQvDMNRtWaq4EoSuabMkdR6VbNkEebgmGpgx7TZTR3PArtWeHnRm59BSh8oyBD61xCJPcDXHbYdgj8",
  "key25": "cWSxkDvqArm8KsrW5V8ry6q543GCedAp4223GS9xTdkrFzQ6TnxYpHAoVtofYR2fbLatH2JuhVvELho3tAxyEGC",
  "key26": "A6a7CLUYVxLKmMfmGw1xvUXjCGjcHaEFBQNEV9dAzn2ngnSjE8sgaJA7jA73nJncmLKjGXN5zWA4NfFjA75gkQw",
  "key27": "4vX3dJ2f9EHsvLWpz9A2VEYhzFnhS6gAF8FjTD9qZA4wwEabEBB8QqNmfRVwcX1ZS9yVGEKPjqTmF2Mn6E6SPiHp",
  "key28": "3fnhVV1B8xDKqCB9ACPxH8gsPwQA6tU4vaRCiuvWhLnhAmC8gBM1qrxvRUNd6oLkL7ksXjD8CpmbHSxpF51GDn9g",
  "key29": "5Z8GixhjWz2u7AnBZWdXX5FjvagMqpS3JJVWorkXANYCG2oXp6V118khshioeQdSkoraSo9hSXN3yjucSi6Z1jju",
  "key30": "25veqjWqSkc6AXGzqqdAmC9XXG7QDE2GExUDT6cxQ3UTBxvG2PVR3HzHdrS2qgmoQWMSWUV3uQXQtRHbv8WUrdNu",
  "key31": "32EzSev8hfCPVBEDLUZhf5fxpqz1nRKw3G2tq6SFw55L6KUQZUj8y2V7pNedyr31doQ1a5pkAypcLrNGHrrpjVWb",
  "key32": "UzHjHW56YYRvMBBstZ8LtSfgnpfPB4oXkgWhUWiHtDy5Ym39ksLgtCVzhM5LEqzVSaEK8RfLHbH18x4W3jA7fLA",
  "key33": "4TjH1R7RoNLa9wgVYb5wiiYfjni5hjf44nSsy7QzKyB32N3LuEoQTwUov1JLRx4gS3fVTgASBdeUJbJJfT8viwL6",
  "key34": "JcNPT1vR76non3Wg8mmEXHh4qhMpufxVvacwZSL3oRXUwciT7kfBKKcgchuRNgt73gsBviBhmifPcDrVRJKhiRV",
  "key35": "64imChXVtRj86JBsj9qQcfk4R7EDWhyekkzHiK66tPAx4oeboBzD9AwmBJUAfZdorwHxm7NutLtgNJLe6CvST2Ki",
  "key36": "23hgmHgt29FQor38tsTD8xuQVVpUtmLnNvmziWsr1rsjf5KK3Ysv7epPpvvnPb8ALZe8rCGMhdrwn4kjPcg21ECV",
  "key37": "2Nt1QzpD8Bayf9Km1tk1BMVVvJgmsWpuEnnSsugVZyaibYcmrHLe6XSCJZKLkMe543CPurtNjwaK7R4dcSFJU1J4",
  "key38": "4bAo6cZbSfcikXQGFAbiQQHMayTZ2aBG8eCyiBVyC4ZU3W8n6iCvM4D27JHqoujjE8qnFfEZGaUxpn5Ebtf75vmb",
  "key39": "3d6boFhY57bugWVsoY5YcWAA9s8JLNCG2qdXaagk7iGEodqiFvNqBNrpqJ1JzSaVpGXZVU8F2JrzwiAuB9KYiK1a",
  "key40": "5DrgTyrVTc6pYCFY5FVGcyiZj2N8ngHaUWPHwtT8fWtBxqEB4HpYtbg9QWfBZaqppBUDdveusEb5U5dKiGJDgsE8",
  "key41": "64BwR9F6EQgYNNGo9pYRpbm3QVdobVwE2dKcSQi7nCoUN1hJzj6HL4uYKG4gQAorxTFSERhGiRCLt5cykTpRAMNS",
  "key42": "dhp8eVjBUSJEGgbiod1jQtPgCPyUCmKhyHAaukJNwFFgLFFKPAe6CicCmuVLGkbcK7ZmwMBWkdhrimKVedy1v26",
  "key43": "4GaKzkWTMWWo7BbK1PFAejWfpc9WGepHd4Qhec5pZ46knKutxp72UyDUZ73tDkHJKzSVrrq6kqF1ZZaN36uUVJTp",
  "key44": "4p6aXJJ6SNtSjMwtuz5Nmo9vnZNNKi9xN8NxowrVRHnZrfmGme7NT6ZTYSn2pyxNKgLyNduQFV8taTrXdYB1vTtH",
  "key45": "3ZBocd2mG9eTvnuPaZFqmBriEpkmpa75qaAN8JN2X7oJJ83t6WBLYCwm2pSQXYUqQLg9ZbLEBUCKJL6gf4cbg6Ck"
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
