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
    "4ZbC6BvHN1abE9jhGcTkdn1GWq2ALZ52cLxP1TBhG4mKSF7JwMiQtPBs6A2gkH6vUrer4XDZ1MuMw8fXQba5LjpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BftBqKDyMwsCXb6DkWWUoKbEwYEWbdhAJkx1ooTAXfv4LStDANm1mEVwy19XpCiBfRcC4txyGouFQJGAaSUiqqa",
  "key1": "VZooNwMYDvbSKc7K5cufc88dz3MXPHRXRtakvXdNu1rk79piPAMJKVUMU6xTj7VfDhQ2vPv1H9Ebc8XY7qi1sjv",
  "key2": "YWG8yZpYSPKv3EufVWCYFRmfiKSgMfZQpRzufYCLcDPCtpLNSqC29tzwNhSRhB59SKWqEwz9NdgVb6GcFX5ynZh",
  "key3": "66PsBrMM7qXhy1ErMpxADx1qcsa3CZF7i3WTRhyHzzzJtA5PnPX4sN9Tp9H5BeJGQ9yoTEFy9hzKp7RuTwuzpsk5",
  "key4": "2FFjQwfHQqkstM752YLssf1FNf4DrYaaNA8FhzC9x2TmQFGDu9JcwJpdWh4oDwhwcEX2rEPoeinnxvMTGwJ8Fb32",
  "key5": "5qxzciviAeDDpnWNE8JWrGHcnKN126RXGCyftKSBbUw1WJWurs3iJMWX6u8p78qx1uZpeQ4grRybc4gR7BHUzKSa",
  "key6": "63yCUUJ8ZP8MVCM9D6hk37zCn69nnU5KoUJHK3i3XBPZR7SwZt2tRqwNmRN2w2quqV8vM4DUXHsaJyDfgd1XJPUs",
  "key7": "VuVaePPhbEoUMW19aYvyphNJ7f5Zun5Q5sjAZ17hLXiWKXApQeLq8YmWbgzaCK8idHLWdKL6NyTQiqKki9Z8Z4M",
  "key8": "3qFNqC6CEzawHSBmjcZwaZc8NfC6XMpG3otdQAvedd8gT5NMvCvm1BYvSPdHZYe3K8tigPfiVaYirTQPpTbM2iiA",
  "key9": "64a3nzRNY1UtyJjunW5SEQy7JYrHAvHfRoee1uiBxiEm5J1DAtKZUb7LwVxXWrNx9HmiuX9LP3RcLEdz3xBwtvB8",
  "key10": "572j9bxVfZ75kqaV2y4AeMjRMJbdMkj7DVxXwfSxJGGdnyv8GURDAPp7eteabvdDDqbArfD1YEwXBPUEYgFNP4pA",
  "key11": "3tDPTD5F5TjcMCbKZk5JApS249vYMSWy5tWhLM2mUYbpZzFvuX1GWQawZLT1Vqh9MZ1WGW4XpLp2MmiJgSKzGriN",
  "key12": "5BQGB91o5EUA8qoVvfmJaoLRyH7Kp5zpFQWdKKg4trBnMM4tvfTNFGRj9bnRFCMwrtq2YX5bsa5G4mJQZ8V93LAB",
  "key13": "5BLTfSqFAbqe7M8uWUwWemhhirmA3s4yFq74QmKyg4cxcUntZKu61Hq3fYnuFm2a1GBEufjgLXzgWfDwheKjuwwC",
  "key14": "3Xhy7CLyuXRReNhde29J7cX9C4BJT9MZeLyG66oYMnJpDPZ8iKDCnvA2munptJ7ucwmUVUv5j5pHL8FsXhsUXb96",
  "key15": "2P6SjomH9BPhW2g1V1W15P2LK7BZRqidc1izrH9nMM5Mrj19RdRhhDLnV2rNC3tPLdbS8i5xWPQC1T7y3j5HS4ef",
  "key16": "5qdSzZ8UEn679THx74TmNGyHb2EhxN4BitbQkXU6PpVgyYBL5Lj7iL9LyTcU5LXbobKnZTv2p5cyUuCxuHP3o6se",
  "key17": "41xf4uCvvYcBQyM1GS5LdA8qYqNKcpbLjJxhtw7R2HU8V35Lem4Qa8REjaDUGanTAHPnXUEPdueFEpz3XRXK514M",
  "key18": "X5UiCyDLroUDADKVn1ScMgFaYpwG6CP8paCf9Pbx6KkCn8LQ2XoGseH1XCoxaLgCyDZcFLXQ7JX4mMAUWCxZS6Q",
  "key19": "5PSuQ4KCdAiej8VTB4w5JT9SGTif7DaDd6aUoFB8tmCHEXvFc7NKUu5kUqDjqm3Mcrqbgc4gd1kYudzexb3D3zQH",
  "key20": "4eGp78HPvGPM4QZEp7YNfrtkU5RpXpsExnbtvso4wQxDHbyKPiJRRUCr4wJeXpPKYfoD1qfoZ1rJZa9EaWfMNuxh",
  "key21": "4vNbqpTgQUcyP3C912e91nLTHBZ9SumCQMwjm3UXd8cqsWBSXCsaMejBXsGUbk6EqVRL4VpwmFJkdThvHVhQLywx",
  "key22": "5MttfcWwum5o1Py1gv9eBxvaDTh4uBhf7YscaXwe7En9nSqJxoogq9WBmrwV7TGmfoHGHTQTdfb1zdff83RZgBSh",
  "key23": "2YH2pE2ND483w2WP24aEd74MqrsVDU46G9HyZeMGXFdfhkHC1TpmmQqLkjtGiWPsafErd3ZVAjaVCqtY9ZkA4q3U",
  "key24": "2DJJP2WE7gPQ1pansMRS9V3zt5ptUttVRhjperkoG29mRoYxyqwGfVLGagiNis26iNiGtdjVdCSZ5weSyDYsDxfw",
  "key25": "54qyjbB7fgHpfudA7kyK1F9XRjdG63fJwPkrbR2btTM1ZXT29XWFo9RUtumw8psqkniqYsGwQrHqHsibHCX3eFco",
  "key26": "2EmJiWzzV2TiY7MCke1XbxqLPF3b7ftQBLyhwUzNPntK27ZQqhZJTxDDUZ7Vq1ELNoQDQQtyr2JhM4PFRYwXCi6e",
  "key27": "65BH9e52zsGaSWsFX5dkyCC9gKL7sDPGwhVeKnADwveaosfPr3HUmzK3jqysCNchRCnjvTV84NQLhoH2ZvAqZqp7",
  "key28": "4wc22pTVaSwFxPx1kQGfW27eggNBiQHKLhTCzY3TyKmCTk42ePb8wAADF3dh1XPraZoUVwtvVcZXYFvFjiLKA9EJ",
  "key29": "2xyhhg7Zvr2S2Va6YNHEPYwgrmAetmSpykBNtGXHjczPVeF9CZRoqWreYzPa2HSdfvmZVhf2tWmybhKDGireKCyD",
  "key30": "2j5Dzvnp2y6ASa4WSR6S6k7NE2nCUhim1K2EpQ91Q497AhFbCKMmmYxH5gSAKzkt1eWfJENLxXnkohajBoj1yuvy",
  "key31": "4fKqWGdRP979g8RbFaRTvPZ6jxAuXqxv7YYAe24k6jRLNtWsxGBi7YWqb7T4MyDhVrsKvaGBhzQZBkSUrs6DTBC8",
  "key32": "27ETBzDksp6ydpYCQM6nUk49CTx3RoKmqYhEWku2W27Epsed1Lajua9j5DWimRSH7i8zMMykKHc7Fr1owqR4Kr4H",
  "key33": "2dq7dSGGEKVksekXrnSu3iUKXM1BCfkMcVKgzWSbojVVKHQWLfjapP2Yra5iMePyj5Em4TkHtvEV5Ds8Z5zwZM1g",
  "key34": "a4poSYXRbMhGqQWYgfXhqZANqoT8hXdhorPCJ3KDhPf6wmcwExcitzc5LWrBZH2DGXRHQQvm9FSpbbsL6EEWc5a",
  "key35": "2McLMqd8TRaX2XYnbsfdminfnfvrKoQuqrzdiTwxcnseDwxXyE1g3ULqa5JW3jsQLFVeV5eWFkUerMAPAb869SHJ",
  "key36": "2Z7BX1kFLxjYcwTup5CQGJNi1LsGuVtJPmuoVHobhrd7vLcyG7DXou2Pf3LzJTcfdi16t5hjGGbmczq52CtsfjBX",
  "key37": "57oUFTHoDukz8fkyWbWHi1ZZgbCAyPhz7FKJ1SoYEAH7XJNkvg4M5GFBhnSX8pPxDvP9RefwChmEAhKkwD7n1UYV",
  "key38": "2HhDCc63yhX6a82Lx55hREdjFniNHePsY97FQ7q7VgTixWUFbz2RTDjUwwCHe2Y8tBmtyKRYdfAatX5mRQ9P2T16",
  "key39": "5ETDMu8cPQ9KbLafvwc3ktLUfjEE2qs5kff4p6FPvHjjGfdGBXUCB3eHyi91oU5yWzu8Y3txNM8cgdyZjRh8wcBP",
  "key40": "64jm4JSDpWdPBkb5tB1xfGdxVaWwfguxqySnQxoocpWxnDcWVxqTCX64KTiZ9sGXamrc6G32VRX4BgCz9YXLRpLn",
  "key41": "wpvJmZvc5BtnEjq9mVVWYhbypLN1nmvDsWutiqVLc3vxdH29BiEsZNTxGALePXo2rPDASPoqCwXipnNrzebFjpG",
  "key42": "6actXfZe7nztZRxrag2xvxQGfuBm5jr8EzY1qTxSGafb4fh7u76WuqpJxDfVW7wjH7JD3LjRnkpMFVthntNtX32",
  "key43": "2ka2a3n5HuyZViDwK9vcfiPDJgZcT8PBH9Vi1VgL7Fa2kz3yHb1oBTkDDLSCLh9VBJ8yr7dmmbwmxmnT5vagRLKw",
  "key44": "5QsNVVLsGycTKEbrWAS6LJBVr1BSatibdFw2VeNjSoFED2qAWCTUp5sn8VxB5TVVhEGYZV9StUWAqdWXUjYumQyt",
  "key45": "3FxDnREDRHmsgF2B3KNPSfhi7ci7nNAFBG9K8qJUDP6jhoGW9PMnCznAMnNtGDLtEJsNWSTWSE9tT9pKuYxq45p4",
  "key46": "323geW6hGvVS69dRRY6r1EP2xx4eTqLi8J2SkTWU375EsbRvR3B5bSD84uwLEYGTNd8dwRGtnrXBS53km1t3UCeg",
  "key47": "3d3jfJb5h5HS635KHdyUnB2K9A5gorpFcgh46cC1EDgs34gVBweUt5NsRMf1kxNbfCfdBhPUBXozBmz4jigYNEiQ",
  "key48": "3mZUGsUCHJ9wBjsE8saECtUSBB8XdUjzzqryVSQA2ayTedaTWCN7pPSVhzyBJRurkFMskkWhxTYNwarX3dcjoT2W",
  "key49": "6dmfAALMCPzNRRqx1GV5FvCvx8qWy4SXRwcwwaCaMfMxRvat5h7DMQTstdRLbJuJ7yZhrCCG94XhX7tz21F6ZTu"
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
