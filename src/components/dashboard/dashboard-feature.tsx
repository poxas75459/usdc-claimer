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
    "3P5x7NxNEbEXYBP9opbvs3dgWBPWtnvzUch1cscKBtwekTRLBa7JgEPtt1XLfuuEj7kwCuyeaVnJf5MdUX6eCk9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LNjrDx7ReZvw9orisuN8dLFDQ5MyUYbqYErhYT2iZaqnQUQMtWhhNsYTs6AKeYUrW1AtW1JH344x8EZZCdu953x",
  "key1": "3BU356ih9jP6E7ipsHJjDCQbuMWxXPmEvE42WzTPLNWnQ8Woc9rsh1MtAwTtGkuzYTjeLwBUCvEXMmZsiZRRzdvV",
  "key2": "2Piysbw7h7mR7yAcuZYzQZWKBr6btbS2zaURaJoZ7qBbdTcmm3ibHimFARhSuSjkv5gqTovvVmvrQU4qv7KtnaFc",
  "key3": "W8s2schsG32QjbT8GgrJzwiWcHPF37HDQhDj3cdVLxw9hHbpftJ8L1qqq1qwRkJS6ccTH3WTMpVa5241Av31KxM",
  "key4": "UyYJrmY5XJjW98N3dyR5aUaGoDyu6UgAeswN5uFsHLv8V7YrDThmFiUvAmhiHv2tC2vYscUvG5raw41BAhYR3bM",
  "key5": "5AHLXMDRi6BStp1TPVTPFLrHxcUbxdRV4eTdWKGcW6DAFKFfdpSNUf5eRyP4Tk8BijYZZPGFhFETL6An62kqzWTS",
  "key6": "2hgSGAVmeE7NU4qAdNCwtnsRWr19QKse3dujR6ox9yLfh6UySXG64WrnmctZRsPuJ8gL58sZ2B2C3PLzXsbNyH1B",
  "key7": "4KsdHN3UDZYA94uyDK2Bca15gbxgsVEn8H8qz1Ry938PrmwuaZR3igJAsENrCsk3ozbGEun2z5HjU4Rbbcg8L6XL",
  "key8": "2MMFkbk419srZdvzFqen5QhR1p6HKCKdMTmvMQSA5ZKVErKQJAQ761dT9dowKY3Wbj1wxf9akwzyt73L9kkmxb7j",
  "key9": "33V7UifG2vdVQPvUcb78e15E2HAtNMVmWvL11nfxubKsu5ENcriAYMgzjyketFnd45VcF392x8PUXJkEJ5auAziA",
  "key10": "1bZMv3SzX3EvPwwCsFH26RWzeeu6iUcVkfALBdrM1L73ZvBCsadLrhPBEx2hY5ytJa1cwidM7kp13T9upoRjvBy",
  "key11": "22E7uh7GeXqgUJStjLryuCYhsr4NvuLJuepdvePZ5gNmhRP1B8GVsFT3KeqjgfHtAM8jSzwBAZ1GjfqVReddZP5N",
  "key12": "2uMWqxbNkn1KbD9d91nKynGCDCyV58jTqWSFUwJ49tqj3Ay36riscq8Z69id8epLeCEeVT3pS6GvFaghxczFhSo8",
  "key13": "54c7rm337JXbJEWXHkvMCkPtw4qwUiH5HmmgY4xD6zmepNUNXNekCLJucu5H7aKLWeHNLyWLPDCFCdPRfhDjbamD",
  "key14": "5t6EJCzhH1Bv4gjQ3t1hoYN1nqT5qPPi3r4N4gtqjTtTKrGVaXqARPyzx1JqVgTrBXF6hvo4mo6e3s65DCU3s72k",
  "key15": "2q6gXWP9sG2N7Q5ciJAgQcCru6ngGaHAaBJ9PBri8MajHVorbtZGc9n5oqUG7kF8UhFs7auRMCVaJ9qXyi7S5XRz",
  "key16": "8VQsebSwgGxPsWVZU4Yq95EQiZhxnpDEeT9J1T6CjxBe2BoZqmfgvpuzm6QnoHyjyooegp4qHJVcX38NBkVtwGq",
  "key17": "3EaGshs9dRFarZ9NfycVyYuBF28QK1bbS1DFEi4DNbNY348x9kZNJsRNqX3mghXxNyxD9dKEsSj2Kvu7sGPWfnvh",
  "key18": "5vKp7Uxcs4z6s5TEVE16En19HtvLMsTgMu3MV5cTUxdCGzpJW2K1yTMakc4g2vnYEnSQL9E6K5darfwHJhb1QyMZ",
  "key19": "3gcuUDmPszQdh6C6Dn4yVfBLVhXS75yFzj51ch9EE9C8S1ThJvv2qbcbvHAMPo65zDAqUT1SWJ2BwjNXm46XZ3eF",
  "key20": "eKRnjrRcR314nz3Nd5PDJH3XRekVJNixfEnYmUfJPx4wpr1FSBh75pDLTXzjVpDm51jTYQV8P1QCxUM6dcTJuV3",
  "key21": "3TCd7geEdvmRKTXnxMFCt7hAjTpAE8vLRuzsp43pNg24vYBZxPRaaR66bMNbUPnUqw24osgzSWWdx2JNrwEgskZD",
  "key22": "4gL9a1s25gDdFiFw4PbGLjMXJKz1iuhwVqBZRNtD9i5ud2hm74MVRzCz9d9LkgxhcHqCiphEjdyjuJZRtaVDxKCV",
  "key23": "5yBSUAXfFPc6gYUNM7NEqZEuSdCqJFiNU21jSkY9Jjq88bMj7FwCW87Pcuf6SH79ZK3aL9cecqnTC8QBUdWzZ1ok",
  "key24": "rN38YP6ZEQG3LxsPpp5EbdAgM6vHWP3cxhkGe6ETT92ewEavxSGMuC2mLmZmPijVect7UhkJe7JUT5kKu8gm9m6",
  "key25": "2sVrPeJCcdNfWL4t5Lkcg6AwShoTArMAUznQ79pbXMEmEhQrpcxB7cL5o2Ykf1S5L98pMgSfkGMh9JLx6D5JxSKX",
  "key26": "4HASfhsQQeTtS4b8uE9CeYjFM9Ci2SAgrddUNkfVGNzgJ9P2Lyiw9GmKDcd6wJ7sLVQYCS5gBdvTp25J7Wwaq3uj",
  "key27": "5psVEG9r9J43Bz8FtKVG5xYNentERhc1oqmjh7nNrep24infbgLhNGJWEEtWkKy8vxvD8SPnAdotjBhm2mkQAtLS",
  "key28": "3mDzhfuowUq7aXH9mTEXWCRCnztAHUFVumCNdP63dEKcQNZRkuuY88VSqicmn5uCZWSmsnCAYEmYcv21PiMYVjVo",
  "key29": "5NaHZqcZA3oja24hj6CNKccj99AeL82TcLKE8ozCZhyba4YgF1n9aGjdjYWMYrZd8G9yEuN43mHjLUcgFZCD8e41",
  "key30": "3ZGg8apLH36yLpW17rmjQyfy9tJ6xUNcwXxEqib2iDyCoZmpDdxxVtgrbUp4UJ4J1yA3Ainy2M3taYGXssH8ghBt",
  "key31": "49mv63vhNRphzKroCqNZk8yzijqMaexiTWHRxUCBFBc8t3KrnvXgqadacFb4VwPAbrre5LZmq8XJoz7wpzi4v3Xz",
  "key32": "4ET4hQriVLsKYsiTr9nFrkwb2eZwT1dyKfVBn3h1Rgzm163W6m7YBwJtBiA6dteNPAnKP2DahALjYnY4e8UHi2EY",
  "key33": "2o6VvoWNgpCvBYY2wmko7wH7YhcZguWN8kWJrgiukKyc5Y2HM1su4j4SRj3KM1RMpX44SqjjqBNyemHfKPcsaDpG",
  "key34": "4hvmdW1AX8PRRWzgeDcDqvpwHy5UvbNLY6eCWGkEZwoxW9Ga35eRgec3P61GMXb7jXFPeneRK4GdguqpB1i8MSb3",
  "key35": "2iDkU18uWNgqc4M1W4JPjdn3hP7Q7n9jRFSsqvRTzxJp8BbNeozEy3aLV473aK5esBJdhXEiuZ4JUPdHsrwL8kg5",
  "key36": "27jysRZTQMyJZqqzYr8qu9f7gvkf2N97A5MjhmqnTLArApVcCThgtEESFT2qDMe7au5q5USyqDaykeHWtEUWFQSf",
  "key37": "4hPXZspr2qDiMe7X2b3vJbfgh4PpDt61uX9NChiDiKuF4KQu3Fq2RLqGLgAuh9LQbzVfhV6s1G28EDch1Rwt1YpD",
  "key38": "cpgs3ikEk3ufEKaD7r8KJXpZc4pz8iX8US1G6hhmSw97j2pq4fe5mHBwWfkPnLR7HcGp3oZ93HZH6p7sJMUCA5S",
  "key39": "28gDEbaT3x92MQdYBP6Yu97rzGbviUUKdenfN15YMGFdkejVMeGWZai9hGAWSB3H7smWVRigXwz3btrmWPwPykjA",
  "key40": "5ooE2QG666nZB54ML4bnF8zxaWtfbyvJH7ig3htM6JMq3dMEcL8LT8D4TFDhDBQBebg25Ahbyk2zvm485chUmfgj",
  "key41": "4YnLqHQtNopBPiLHzrh2yqwsJCPUa1koEaBtJJSNX7imYW3rcv7vGnv8Dh26Ln68Sdhr4uYonW2oaqBigJabhRuG",
  "key42": "345FPN742bpiZ8u6ejbjRLp35gNNUBUH1rrGUeKE4EVubD8rjJrzhdFdfiy6vFD5iwHPhLRiaYZySMnzBaxusUkb",
  "key43": "28MTyf9qopL8e6cGL4G8ErPLhBxttFG4inCNWXrowaryk8zBPd8tDVQ8D4FhHcU1GKrLeEAC2s5N2hhoa56u1bQX",
  "key44": "3CxQsPmbC9VXekbJKfEe7Yyvk1esqQRS3GDsaiyFk7Ac3eDyrq59jGgQx7smBXq2iUWYvVNtt7Rmt6JN29zjRAMy",
  "key45": "56TvT5YPYqLimgCeVJjgSsVJtjEBErDWknyXoKZnCvEpBDYWYGheSBNxkFBpgLYEX6Pc6TW1kt9SMDoemN8Yh8z1",
  "key46": "ewHKB5eihJPpYpDedafh17GyKBQmktw2CqmkS11bTyCKCTdXnZ4Jn3kGk7Xh1ivCt1yzfLCortippBPksavJs6Q",
  "key47": "BSZ99m97SMJwnJq6Jv5cTuHTEu4AJkoauLUAqbMwoQVXMc4A25sR9BaudSv9c75NS8NmDWj8hKGNvLZStJZ1sXs",
  "key48": "2ooM8AcsBcva1AycXMveCgv6FWbnxRWkpnxLTgPEpMJQeu6RpfZ8QwhHQ3yGNnLLU6zsYkzdUrF8qdhv6RZmEyU6"
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
