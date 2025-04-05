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
    "5GEqwP8kfwTZ4j3BndWK3Aku4v59JEAXAFr3M1Kfd4gykmyaLsCgvXyXAoDpHrp7SjnvUMZCAX1F3qeSiBNnc2r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Erai3yQEoqGwGZq3gxBydbDPdkvx9K2CNDcispWjBJjxEN9A62ADYEDK5PTLRPV6sgEGsvupLRkygot5JWrPTCx",
  "key1": "2tP4VjrufZDLV6MHacbMG3X2tcvzYM6cpE6APChHoRdjkj7ug7GoiEe8FsuPwQ3rydNcEZuR6img6RMdvdGVaNf6",
  "key2": "2Fsm6zBD7xTX6ZzpQnDqmQ6gawo8Rmayg2TcnkxgSamKYxTiNshcsc8wcNX53KvbwF94XBwr9u6QEt7GR5SjpXNX",
  "key3": "wVL9CFMQLPvHnstrGPwGk1BUmLmnAG2Kwew5WgGSob9iMvR1CTiq8ofPzei57Dv5waQg7PFkVUa3YgiyyXtXPeq",
  "key4": "5zjZgiyEdzYuWMKXqYhK5wdHnBP68DgxW2be9Qbc4oirWb9rfFiBrxgEjJxM35abFEMn77AKTony3vTz7JyEvpUW",
  "key5": "4CkoF9WdJkKawzq9xBuaR28vFoekpNS7MmufkAwJzDR3LF4JCXhoJbsLaWRHUvNZGDv3JPyTxCayABxJWEASDYQk",
  "key6": "37L9qvPz4rP8KFB8v6X3Rp5BVTxiKPTNw2ro9imXQpRRaYCnXK2zBXevnJVWBtN59w8frpnEqhgSkVaLTEBTBmQ",
  "key7": "3jUhHhGNiRaaQpMbzCvwMHD8AjHB1F4CoBigTq4DPZPKMvWsBfPoMm4EHYtAWg7A58vyKwTmevAEiHTZiZjycmNU",
  "key8": "4gmqm4KCVLrHAygBLX8bmZRhkbqNSm2h9nsbMRxheDcYuNL9VzuzCVRs5zvWEyLYKNJXixQoEMN2VLMHHY9oS2a7",
  "key9": "4FSSWWeGxJoAV3ff4MnNaq6vv9fHhfgeqyJeBH2Enut9zEStTTFEWZ24r3uooHb3q2m3cgXGRWDrxzNTxsVdA5SA",
  "key10": "2yBLG7shjSgfdyxMd1dTYT6mgHprbi3rGocTpxMA1svZcRKzU15FtzVjeaCaebhH2vNnY7VUdvqpjPTMsLKPaXGZ",
  "key11": "31PTFzbv1UB4imupBwxaB5ahDcqqreDDj6tDaN1M1AzkaomqbZrMfbhcbWWfP4VzyhrBXTkcNdv9Py9SxpCj6M1A",
  "key12": "2nzveGTaodDbyDGEtAtztxcR2uihNmPxbnsA2CChZ7AripgcEBPgzCr4YCtYsijL3nTr2SkPM6tVb9NZD1qb4if4",
  "key13": "RPkn6iwnRSp2pPNJbswKmySnhBgzAYPU418df3RjVzZXKWgRo1dtPXRgRNtdrqYsF3V7XS6CiGHmve6FUgfcgqx",
  "key14": "P7t6EcudrVxj6ctfu9hjsQHE4a1Bfnh3Cs6gEXnbYBkvSJqTwaGrRXBLWaXsqiis4JU1jemQthi5JhsMnhMUj9d",
  "key15": "2AJGSifjuWnX5FbTBn9Pn3eMESHYqanyqtFjPv7hJQUaLEcUVtProZKHXpSKLCN7pJ23PKchGjbH5WPmu4926wnP",
  "key16": "3YcKTVXFwCrFGxztQ9jwSHE7YpedoE4zJAvbvydRWmkxoxFvinvxxbm8Um6tHB3fcKQt8TwwkDfgkcSPzdVnnXQs",
  "key17": "5w5DkeiFeGGjqfcZwc7B2jYQ6RbdN6eh1W1D4s8sobPz1Y7bStMUskdHdD66G2mF5vXJeX6us9gFVgT8DxGxummj",
  "key18": "272Rr2kNMzTRBANK2EgdiWdkb5DHnRAmJa1xyLfLdfuZ67mwTfi5bsoVwZXWL3bPmVwQyvhez32txxp1KnQU3VoX",
  "key19": "3j8YKJkb3HskudjPsHc4i7CAQN9ZnLwtdFoepkUCjhhF3Nc1xjNiRtAV7X981AwaHJp2j6EojgbLMHkGZ7NZXQMB",
  "key20": "5HDRb2Bn3HuEd3jdgk7cD1MQu8FNpTkCfHEdkkkVdiqhbGseLvxheADqibGDaPSbCWe9zNh529EkUsFBn9j5ExxA",
  "key21": "3C1NT397Qi6G2BBjJEgSLNYY1CE98rWBtF6zCZUdPBgSFT3ddyhxSri8YGYdHdhNjnyB5Mk5sxiC1MTFdmTwcBYF",
  "key22": "5wNoBwzyZYhJzQdtpzo11Kd9Mtrrj7XEedSSSguQhUPd7QNmysjMxEWcQy5cMP7dnyLZUxYX7DQP7CbGu8niK7s6",
  "key23": "3QcrEzfsChZfM4CwYKo9AS2Mm62Eftcv5Ne1V9Fad2PDMcu5vAHRZEdp8CLs5hE5VXhsbUyZkrpGz2GqkPSgiSYE",
  "key24": "3fTEc9VgciDb1VXc2fZtf8b2E24MCm9UdydTXoE4js8VRpQuMhPUzWvdXdKW8xDwHQ4nmS5PTZt7mLdfceyzDNno",
  "key25": "5oEgM6Gy1XibcqEsmi71uJbRgYoDNcHXJt2REA8aPy8g4FJpKVx8q6U3shE1GzeXiwhxPB49Zu5FTD4pL8hdCKRn",
  "key26": "2X7koAvaHzcqfJzAmk6SJVGx6ef2harwSh2ecMkFSNejvevjNk9eUYgqbGkMcixwuteZWx1rrXWrtHfypArqAe49",
  "key27": "44r9cZRfoLFzp7BACYGhvy6CSqZBuE27q2AB5xZv8UQ54AzR1cfy3x7YrF7YhBC81ajzvitAmcpqtpundyXyhtnv",
  "key28": "2bGWHUJAvKCPjPVGXg7D4wwzuac4qcwtGuarquwqdUgBGqmYkXNzSaDWoiuqoDf7EmcbBfsAZhsHaVyhMychW2PW",
  "key29": "4yswGEe5PPY7EaDgbfrD8eGKQr84szg3YC29sd74sTBLWQA6C2nuPfuZLQPv6ezpiXVG8JVfGzysenDjiibf6FRr",
  "key30": "eEXDe3f59BQ7SuddRaFzhzMkJHa5FdbKcovNHG9QqqKJB6FGLXTRVDDwgY6nHrKcd7hxj6ZANWrTEpTYTAmGpKx",
  "key31": "27v4feoFUw84fcadVPoAB1oa6h5AG1egQk6mQemG1peSVMcp7zm8f67wwiXbUbh7QPF8FhziAGp9sJr7UWxxcnpo",
  "key32": "fLZzxrUoskiaENzuJDVAzLYmkCx4KQp62FD9DtH6Aiga5DYJx4Hp2THx9Shge7LQmPVfpDVbVYLUyBaHMqmVcMR",
  "key33": "3UHZC9YhxBfaCmBodgzskunmF6zovFxC2ge55g4SxfRF9vX79rSDKD272v2oDvwANk1L4HiKY3aCtVcGy4ZWNP8C",
  "key34": "2D4cJ8RGacJNt1fbf7yXJDXoo1HpzEySWyL9YupjoQyaJ5Lx6ivNT1TXw1gFyvLZthvh7t35Y58wK1HqYakZxzGf",
  "key35": "45iFyKHHVQH9u1PM42RQgPW1i8VS1mWi1d45Q2WSiCrgA8amdFkct82hmWR2cN6gfaYg4Gbajhuuv4GsLk5xtmsR",
  "key36": "2HGmyMGwRugddz7EpyCb51o4RzwsbX76RPtiwsoXffwNq6vJx4s4DMjtoWrtdrQaMQY3D7SHVNMxa6njaV4J7ZpU",
  "key37": "3oMzzeWh1PGF3Q8oMTxifp8x3BaJ4FfjDHHqJK1aGJkwxFLb5tZiinTLhf9TSL8iZgAuoka4Bxvx58sRY3wgChRN",
  "key38": "5wHnADkAF2uybQK4auvPGqhq7Yz8ehFeM6dBanU9vNgLRQQg5iTM2ecfU56xMo9kCFpif2q19wF7PoSiKWrkdsbv",
  "key39": "2cyGMsNQmz6gd7FQw2K71FBpqNjtduHm7TsDA4xUohApKDyzY85ZzshFUHs3WbDnBcisaZdsBr3EcvoaasDy9Ct1",
  "key40": "2ffiZ8EsYmVJQLPv4fdP3cEWxjGUokD9HfjBjk4HCek3KAsE52fn3y8Lh3zGAmzsvReb5tff8cZcBenBkTTBArZC",
  "key41": "2nqTCo3bsAXZXQMLNYy2iA8ZTNtgYeRghYUWqi8Ho12oSNz42fQJzqcX3aTJnKi7kDEqZzxPvDuoJyYdS5tZK4Rr"
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
