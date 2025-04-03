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
    "4EkN89ZhXX8X76xMc9UmRi4m9q6rBrNQY732tbiY3x3A9E8ZztSvLynhbk86YmZr6rNgMwUQWieTQzM6FV1f2tmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bj3mqSCtYv8YZ4zHxWfib9fEaH58hmybSCwoSs57N1v3X32xczwyuPtyHDtexJuDjEqMk5NiTk4y1EfsAQKJo7X",
  "key1": "VLQi3BRroLDasB1EQ7qC8kEQHMCrd73BhX2L9WkwaEDtW7UE6HqKqzfwSV3DjQg51BjG9j74a2AdpN1hkXno5Ce",
  "key2": "5ZY3HCUimjCkbdmWs2ioW4zH6WDz7Gq3e6Pj6DtkbfZFuduK5qFZ5pUf2rCpWAXNUSun14fDobpn442NBt9spUM3",
  "key3": "2XwaMuUDC9cA6rVExMXqH9NndKUWSG4bjTmh5PUKfRjQjaAfdzw3H7mHbnUukBtYj5bG6hnBSHLPm27ModBE84Di",
  "key4": "J8zGoqzCCN3siHqaTnUv3VDNJgCcQJHAKpVzBSF6FZyweSmfAuHmKiQ9CWqaYsWjviyon34bU1TQjowR3WUC9Gf",
  "key5": "gD8xs9bj9idHxdxtZM5eFK4LYPX8KBmiFN4q73WAaAYd7jf9aLf83hF8qo5tiQ4YSSw54aiwCz8mD3GwQcgCjGm",
  "key6": "VZiwmH7Z16jBydnxrfqUNvknpQvY3EDRYcNKAos4vLW3cAchJcPn3SBgE17kcThnzyo652CbeR67tdtvtvvYnfv",
  "key7": "48AJ3HXzKFP1NYfJiuysZA3GMzSBKxwVmHMZ4hGDLukUDrmcy5Abj2kR8rvSTTZ7zAPJAAKawMhCzuwJ8TYGACrc",
  "key8": "Mt4mMx7XPoCYc9Q534qU5uvmCZKvghAWzTzmMrJnwGUxcbeE6vpQBjzoSozV7cXkVnMejC6sZx3jQcDJe6JpqXo",
  "key9": "adkEvGPNGAC8ihH78RDg7bbey2PyzPrE2hQjPcN6dLbo1EKrX4Tx3F3PKmGETEMkEEpZE6hu2T2iRaEhkGo9ini",
  "key10": "aAbsuHRNUUmRF7PhNpFerQD8XeoPjAAhfDf4v2TFEdP126GD9GS1SZEpnDpLd3UoyqfBAzxGJJgB1HjGzQakeTT",
  "key11": "5JkXk9ZQCn7Wbtz31owYzaX8Tb4FatfMAiqNU2uEbrHyQMSx1KMbEkCPcQDqNaMpSMCRtF97oUSok5HevpFZmjMr",
  "key12": "DNmhd48GDu4gDoZ8jcGr4BurruLamP88Tzp634Zfauw6F8bDjA2tHqMk9FK5PZEmiySpB8XJQVqTuDpiEqGTicb",
  "key13": "AEMNSN56Vmwwt6xtK8sCTcensi53M3d2jRt1RjPMzwnLtDuppHB5KAtSqS8ncp8EZbZSnT81pLij5mhRZ4yuc2C",
  "key14": "3B1s4dg9u12nq9PGQuoJ72yYb64zKBaSjGq6V67wpVDjJUToZJiqEGi4arKnrQwPX4toG8VSDkXcfo7J8zgQVrne",
  "key15": "3ahc52oiZ2pdHrPmvpb2dZGNYYqhcJuB72LMwzzyesDtBpihtftfV8PXaKAYqXikvZKtti26C5GpUnvG8RJNup1z",
  "key16": "59nSyPh8cFzTXn5Z461y5gSiWUAZibW1qxVRxMWrDmbZx4NZifKhff2s8X7ZHYJ6KdrqLPQnohG4YYDLMsYcG2C1",
  "key17": "3haBfwrhntfgmitHSsKxmGTyAqiZMWdFmKmcjyfGohskJ68g9MD4BJXGvnDSJJKUUdLVzi22R4xmkHfJrKVePQg9",
  "key18": "4NdzMqiUKNj5FD2kaikB41Yo6NGw4Xe7txH7rsxZGRAGbPJeWH4hqYv44bGfwm2dbAArTqrwuFkMM83Qu1BmLPzj",
  "key19": "3EPJR9mhaCPekspgHoVsNNpQE4EtpJEhumg7jamupfUibTWKhdfBMu7cMzsoVDuP3diXuMejFNVLNQy9hALsMKM1",
  "key20": "3zSV9j88BjAaf23hEWpTWr8Ue2HmRj9sRv3bEhKQqEAZ62KZ1GxURV4PoHkdbgMmZozAhVRCowQSHHqa2YDad1Gw",
  "key21": "3NYsSsWb1AdzbefN2kkodMKWTWCYfd4LBo87qyWbRQqrYJeRM2xd33XgDD2aM6ucbzdxBmezGV9MxE3p7qi1uFKi",
  "key22": "5znhqaXtgwE59yiPkxktrQbatU7p9nRWFU4tzK21vc14ipSvYFBPfiVoyMwQrvh7NYpgUFJv6snxiaqZCUYVDk6C",
  "key23": "2PX2NDNpYrfqZyy8zrz8mNXufJY1BW3fUoYuLZyxrPRnH8opWoQpyugs9aQJmfZnDtGCjhCDx2ezqcVbMyd9vKx6",
  "key24": "2bfXtg7S6ePyTRNJe2iAt8eKPvMKy469NVudZ55jYYTAxGMksHNWVbr7kyCLanUXNQNF2TSA6J2dHWtzTPVzNV38",
  "key25": "2YFufqDAA2kf1YaVNAfwj4n3qHUTdfHGdQNQ26XxqTmEBF2D8B1xMoa18L4VCXZBdRaPhcSktR3Ve4yUMosZth5u",
  "key26": "2GgRteM3EMwDPMrReSFDUZt8fR68GVei56rZ4tVk4tefw76cYW5vG42d6Dk68sc52SUmYn1uU2Ca3d8B54R6ZsHW",
  "key27": "QCfSqR4AW6H8i5XMeLoEmai2HEz4Jhn4h4VDhoH6KgVVAtdeRTGi3dhDMDYwonVU7iu7VbC9KYFJ4Y1iH7gqkqX",
  "key28": "57eCp8L2beqqJtwCZz3aRPE2wR7VsQcPUxbh23zMgyxJJ7pxMoRRZwbZckX1ADA8LNFNCUBFazXTPawnz19e5jZu",
  "key29": "Q8q676aou2wMXQCLUZQSeNrGWSnpjZsjhVBYfQY3jxMoajo71g2aGLNmFR1t2TqyHh7tzSh35QXKttPQKD2Q32R",
  "key30": "5adaCqbcNszJDtzGo7g2AguijRWMQDVBbm6tD3yyCYPtRox6Prmj4h1Wu9nQsRqCJjP4oG6DnkL1caf5zyCKVumw",
  "key31": "24EJC3qtLQHk69vgrAAHGrbMxh9yCLBT2zEfa2iJcwsfEe9AJhEgTCkKkCBwCQKYamvFCvz15cQd7RkwBBmg1JWN",
  "key32": "5X3durby2xeed5EcXVfgUTRqCY29SEfb4qL4mWcZXYENkySZ1vqLWnNsqsP1bZ3q28P6sg44zqcGKq9GujYsXTZ6",
  "key33": "5CHZb83QeYvfQoj8u9rEDVW1L9enwTtLFYCNnmC5fhmGePk12cJB6toCdoeNVCh2q3dL6g8vvKR2uVRRoy9NY213",
  "key34": "4RScXgGmM63q7BN5h4vZoqoBVGPEHVFBGRXfGHbMBKHXnLQNNG9Y9r5zh1h1yyDcEFt4HswMg1fz7HxcL2byasQg",
  "key35": "41WC6HXT2cx4hKU5bsq6ddxwaWMgjebAZWYFtNPSHcCgUJ4gRtfwvRM5vNQTNCjvAZsSTcAxE5FTNzdbyLeukaxY",
  "key36": "ibp54wzyfiu6H5Das5i7wQ4U8PTwfYRDv3S38gpQbW2qRkBXCsPmuwbT99CzkqJV4CasXifcfqzvgHZRXAKCd74",
  "key37": "K39tHm5mbfw4Gh79gfoxHNiAdBjLpVio8woUvdPHJHGvcskwwK8gdCVQGpPRWQWYtkLfCBje5dwErjNQz82exzj",
  "key38": "423QULLQMSL8Ze1bKA1CPYHRex8KntnhnnKBS2WKzpnJhXsqtePs5cTfyrU1SEEoGzENX5j1VzKmqd9rj3XmuwR6",
  "key39": "2V1CQ9onXoBUp67RrrFB4wrSw39uQLeZ8Yoy7S5wfRUG1xpkBRjHTjE7aToRo8MFXBUTq7WxjPRtZaeymfKUBoJy",
  "key40": "424vypYHznUZ9GfYZugpswJnxRVfRKUFhQU3dJPLc4f1iNhpMWFK6dfSCdH8zddahiF3SRvXqHmpNoDsUvQMNPDg",
  "key41": "3nX5vXcSb1SfUo4NcCaqEcDFUddZz9XgjoR7svAkawpGmu7nrKhWKn9LmuGveYy4cmZz4fVRNLYDbTd4Ba1Q3Rka",
  "key42": "2at1SefnwRe8QrT4smF7ww44RARqSQGo5YfSiwHhVF6P1Xc61emRhj5EJjuUZhg4K3d7yPBxGsubMFcPfgjKJRDA",
  "key43": "2NQBe2h1SDHuUCvx52k3RfXhibyUKUnzKyKAXtC6kU38XEr1v5RPZKepoW5n3EAGA1KgkdLLRcxMXkQVDpPzRUeX",
  "key44": "2ZwhJmUcvqbWnkQFe1SpaBWfs3yt4n6vaiH1ATVKfVQEVkiW5etGzP7ctfp6mwknHqStqWgd2ewufvroyQqdGQEW",
  "key45": "37CaXcgKN59K2BD2Mkumqt1HA1itpCJUFFgTj36j4tKsbZaiJ2QMQo4EZkutA9DhekArDy99hGA6zHpRfc44VGY1",
  "key46": "651ibxXv9PbfNezyssKemhh4kTWShETUr3uEhgJewK9n9BjMFNax5ofSEw8KpFt2ARGZVxyJN2zp5fgqMZDsnTEt",
  "key47": "5VJfk3TCQTH5GPoCZmnfP4XqvJPmdgZkTkMqKz6ayMhWfHMj8w8N9x75aHTRRwaMVwody8QZ96M6JGWLJJxuH7tg",
  "key48": "37efuwDRGHDDi4fihovS45e6tU1bWMSEemBKmgLn73BTAkgP2ZwqSM4zwAirHQ4RkFzVGCEfyyxgwD7gzGH9kiNk"
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
