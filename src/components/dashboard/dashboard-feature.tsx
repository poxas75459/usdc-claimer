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
    "3KJmsrVQREX7dk19pWXM78sj4TzoQKQyUxsDMShoQg8RjWuaRVmMLeN2PoHHDjrGPFj8gUoWWwr1h4KN6Tjy2HwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CjyHArsj5CARLTV5XhVV1GN87JGqqWvfotWTw44G5pY1LHWXn8HU3L95BtkMwfBe3hNH7wakjJJnyJwLhHUUybb",
  "key1": "4ghXSWVzPK25EuJbGvCEyRBnhEPsLGwMtU2G5QxbEWTaNC31QqZ7sek9KR7RjLbADXaV1X2tbnso21WgAUzr71X",
  "key2": "2EuvSe52tyfXvJ928CNH8gQ7qaWM7Uq6WyuTvzRK2d4Q4DBkrNjs1HkKHqPogsYcJtZkWYr3JptnF3NcXG3ZZfvY",
  "key3": "cX3ktyhdgCprc97zHGQGz57mhHrB4ttKE9WeJtMNt9GyfhYPGYHSacLCkxRMbBzhLKVjcNak6ZXhzXRoJVbmvqW",
  "key4": "JjmDTR7Y9Eb6PTpGxGWx4a6xxWx5ZMTSjP1WNiabpgQjNwnH5jXfx8D546Sny3Agye5qg1JLT6g2BLDLWW8ubM4",
  "key5": "5QqjPefzhxsbKtWpCLsw5MnNvb5LVQAUDmsS5medjYLmKFzpEWGBGtumZ88BAjDugkUazy4Ps3ddEay8j25s7Fx4",
  "key6": "2JZXnSGMBYrSAHNiSehYZPUNweub26EoHWszYZs26tJfxZyMXBayPBzpHzn5JZus2jUSYMFCBgV5WYYuprJJvngE",
  "key7": "m2i3wJhtzN4ytnkPm5oBDRo4374TEPj4W5ZGHvwVndTH4x8L3ZWnJ976NNqfp2pc3YuUXtp7Wa8ww5zmijpKhE1",
  "key8": "5ftekTVan6x9Nnmzv7bFMr34oWd1Bidrz5S2f2ypnvDpoGUERn2PYbLCyhyXcayrv49iukJAvGB1TUqoN26qmACg",
  "key9": "29wP9Cn4ec4czVzKaXtejLf4YDvQ5xPpNbkvCy8fNQfFPAo42AjjwpyoHKEVCUzkZzFacdRxMDsNRuUmZkhNP4G9",
  "key10": "AHSHpefeXjtG8MTvieA6LbuWuemLNqsV89fB6aeWgh2hTBQnqB5sch26qSxdwjhF4bnbN4faPsrcwGZgRW2Eq2e",
  "key11": "466WzJVabaFf9chspN4bW8oQCN8BxrnrLYBWrFdBHmyFQNm3CiHPtXYg18TzWoMpHWSf4kC8TK5UjevNHek8ofL8",
  "key12": "5gGif7pXTUngMkHnabMxudEmTewXzap6WiXRGWQM63XHBBZcFbm8K6CTNvq72etiJ1KiQKa7ZP1Xh3dzYFVkCL8d",
  "key13": "5WrHmBVbRzqkxEzcX3orVgjdtceeuY5MhHwCR2Lup7Swid5x9jTYj8gdPadDTpp2NJbwN9dGynAq9GvcGSrzyzXo",
  "key14": "VN6h5KDhHooVT1LWwbAQdC7AjHCrDT5jdAa6wBMTfFtuWoRviobNbK7wMVtKQtqFitPyeEEQM1KMV8SFq5C8q8Z",
  "key15": "47sh4HMzYXKNJ6WL8ShpHXcGWVGUYo4xVHjMCsfZ5vgkrqA8n88eABU8kjnENyHtEmovac8zu2bpzFXL13HBn4Fz",
  "key16": "26wJEpmA2VFASFzrDG8LNLVLX7sXogBZfSFEkxwNyb6XRYC7ZksD2HPXPLqmj8nUpViExLoNgC49tKMckRL59PDL",
  "key17": "3B2Ct8DDeVwDRtBBXZ3L4xYkWBSt4RhAcZ9ugMWahRCwK7aVf2eND79D3azsCSaW2Cqm6YfJgpWj4KJhWfnA1iRc",
  "key18": "4fLHTLnAQHwFe41NndynafvqdNM3S521CZbChceuJpmJJH898srh2vCP2bLgqVAM5aDdHiDvRmAb4snaJA8ZRxxy",
  "key19": "5ZXqArrTU81xp7Bt5nU5HfCYHHbGF63gvemiAyHcE3uciFjSHif3SkPq1NWofPKUBQa8NxgAarJRnajia6B2kPL6",
  "key20": "4PwpxeTc2SGtkfFMTGSw35eJ6cbvD5dXk3nwe2bK4ZAA7Njn6mj5ZycqkSR4M6HF7DPS9EL6Hnw2GG576a1dJqbD",
  "key21": "zBjGwZWhDDbvpS4C6RQtp4e5MMU1CrAhqBpzEYW4AXAT3MEBirSGCpzet7xVueJEdSunRqQKssf9Vx6UWsotNNm",
  "key22": "WXAjspEpRrzr9uihjRFcJjHunvZctLRZeNNkgF7aT2fgkMFzDbPMVQm6ErLodASjfFiapG79LEgZYVorcwjvn39",
  "key23": "GbhSrZ5gf3kxiD1KeaZBpy5ZN4kRYJjWv2vGyEqYxm1gptQ9kwhJTPVVUaNhSWb86iAR1eCiptrTorwTUkN8d44",
  "key24": "mawXd6L2WZXSJ1rwqN9KLQLTnT6WRDGhMjzwdANzBGjGxZ1mdd7AxmzK4yAJW9TByR3mgzVN1gzoNC46CMhvPng",
  "key25": "uKB42DXSjwUc8f5PQFx6nyw3Rb3z1RZ2PnZA2B8RsNEftzJfSBGSQK7P2sDDEByYVfyGgMqdHA1e9zrKvhXbY4V",
  "key26": "nGMhRwX12ZWar2MjZNJRypPhtEQLiDwJBvVphpKdiof37JWFDFSN5ZEHuWwt6rv712HPg23m2722iZRUYWXEAEb",
  "key27": "2Ds3iGaU9onXsgoE9RBYsy4HfWu7CHpQSXNaui2CCAQGFxAbBs3eMdqci52AkLdsf5Wh39TzBtyu8bn81xecGqzZ",
  "key28": "2UH4TBMAqyME353dSeUt9NJTVJnk1d6vPk7H2h7C1N6YH2spYx14CjHm421ukG6ZYDSTrzZWnDapZnKk34c5tHiy",
  "key29": "2SffM28MXH5Y2QEcFTgCX4F222QJMx6vR1493dir6am4BSTHSzx3ZmQTvDLg3wEDrfuKNLWFHeP8Cz1qLpxuFfHL",
  "key30": "qorwmxK5fpuJ3PfeHfB277S6AUNrA29ZSmwAJtQY1TMnTo5DpNNsgz2wxfrST65z3o5XYhpDZJh4PosUHVbzM6Y",
  "key31": "25DutCJMNGQCri1XDpsp6NHwLskyaugYbLxZBs9E9HAWzp3yMyrmYtpq9dD91hxVCvgjx3fLfZmvAZD7Gwk7AK67",
  "key32": "26djkqzz5G2bU5cav14fVPvdQkETcpv1hZMouRe3GPhfRLgT5A73i3rFsTBtPEDJDiNtCcYUTsU3Cqo9tLvMKHFD",
  "key33": "45vfwQrUAGosty1rR8KTXGHgoB7aGKh4z9XdMzQ6nnTRDDMDkrGVQcj6ZU2NpKiv8U4BSBrJB9rMVJ5XyPq8ZHDa",
  "key34": "4eLH9h8hnz1PpgcBA5h5WAuiQtkZR3cwiU7mUAPpqv8qis5F7XmWfVfw9NSyBMf76UMDPrgPpfH4N926HF39KjWv",
  "key35": "3EvHxxMJUFzSFeeFAjCiAPkDd5t1twSQWycouVCRpNfsqvFZ5MhiKpn7SQnN9chYp3VF4pMcwczEKcsTt9p5XXh4",
  "key36": "3WMJZqvbvw8FKBNPYNPZaraMyGhE8C5a1J1sga2BAkVGSptVFw8rDdasexKk6wpCb7wwhYrgkX9PuRVyDeZRNvi9",
  "key37": "Di6c5mrsz3qaptgP2rwaVERvyAbZhXegEVQNutqY5iGBqhiHnZnVS8nkqDntxEzT9pxWWkBEeeHMS7fVUufD39E",
  "key38": "2b9YgzdhwUKq64eCJtMrNMnHT16ZF4yhRPaqh4rEptDm4MZFa8xDxrRQKPhAGXtZEoYNSnbKneubvKn9adGXodZ8",
  "key39": "2KKW2vqL2tbVSCNUqgkxLxeFWcpyszCkEGeBoGRhhuVWc7CHD7EPWWAoGKhpbG4MmG1FKjWxvXrrFR1HGfhsNcv6",
  "key40": "1pY7o97aZodJ86B84pJ91wHepTUWD5TMKbjyGwXihSh7e9oSag5DJkTB4ARBAJmmx4SfYVwVjBGSh6cQbUVT6bd",
  "key41": "2x3KjtWiZhsn8YUCviSPPqWNk3dnvnjyLVhzRE3jh87Hx7cGXCD817dLJH3Jbr6NmqNhHeGDYyS49SMM6WRJY6mC",
  "key42": "2vNiXJU5pL7XTZL8Qto8pjUKYU1xpJJoyrZdPRN4uYsShpunV9aoNp2Lf4enZQVBDkVc4Jjdy2V6193TYPp297c7",
  "key43": "66t3k3Xptg4vRf1YeCMdJdWVWSD4zRMAGFaYrAJt4P8vHn8jbiw5MvxXncz8NNJMVbEA6zT7vT9fPArvPZmd7ZWC",
  "key44": "ZhTo7WnXwaMQv97souY1eCgkyzmAFHbJ4Stos2d3t4HhCxSYtn6ts2jumBAsC8cuyEsZ8RAt8C84jn18qyiT4zk",
  "key45": "2cQCGTtVNr7pHTvQNRAgTBi2KgHao8LHgWPnfWvVQqMG3PBsVZ1n16c3TDQ1kBLGziyHSmajAfpQ1cTT6QNfPTu4",
  "key46": "3YrkGnAPPx5G7Lsq9FSbRy7ZDqaSScnNDirA3Ag2wGqSvSubab3e4ScZaPgewgfsYaZwyiCnDAT3ighKYRHj5ig2"
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
