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
    "32yWghuWQVBwDZ2HnQyV6axpS9cvbj3vSdPGqdEHEKZLL56cJDxzntPUJ1PCCsn6uM4Mi1QwpuW3dkCEcS8PxZ26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JmG626FsA6ZVAuaqeprtYsi2ewpifJMxvkNjYez5CSsBt1d1xDiPSUPo4LgC4zdf8KPLDWWEQvPonD1RpFcpMLY",
  "key1": "5RzvGGNdVuXHKTWbgt7N1qVSs3L7yDnBjGs87B9nHn3McoWa13cnWAizfVFmahfz5St4MMpHvBnD2ScmbfGqwMoR",
  "key2": "5kGWLmqf8dtner2tiz78Gsze9wXvVcFJV4srJpsSuatXR1TCTQLpViBmRaziJ7bf9jGMPE13QcpeAz9oY4kDuJsV",
  "key3": "3rLjckFyXZRaYsnWXRrHcZwLRQji6YzZ2CmjDwfxk9jYT67PgpunqXitgCYACvLJJFTHzqpkGr42Af1BNB9c7gbg",
  "key4": "VXBs8fpAjpAfsQsHcAS7J8rGT4427t6cpq97SZ7KDDvDi9rW2uD9hHXuaR9XaYLVBFEz5cuetzXp9Xk3VnYtxu1",
  "key5": "2Prb4fTfepSBMMuYQNPMuwvHagZb6KtAGXge192edfYVj6MwmjYqRS4vcBV7vQQMBEWaP1QNNq9cEGj4iSgyFmSP",
  "key6": "9iqb2Jke2CmNvddXUGomTFbLdFaxtaAfyJCpBkgnB7ZdRKQZAZXTqdkyY2KEf6zgh3QUp3ZouQNEqjxtvS38tE7",
  "key7": "2s3hRafxtuX4bUhiBHBbK2LVtPhFPKF9uo2hYsHPNeT4wJnuoYkfMY5VJ5Mqg1Fc9KjrEPwzNXMPjbep3zuvrWg6",
  "key8": "44P6s6HM7vNkJjqGRdKpfcEQBNQANYQNKKYRbCpcqm95gmNb7NvtMPivgy1Hab8KhGaC2cgj621gBJGyQCCh16W7",
  "key9": "3QjRY42BKAeKzuB22DaGM7FKgFWiP1KHr8CLzPDeDtodMnha7NbRCB5MczQ5HtSm5qgyq7tX7NaedCu6byc7Jehi",
  "key10": "4S1u7VYpok2zNyBRpxTymm1gvHG5ruqYd41rn4PArJfNptJSHRXavX96sPefmY3rp3a5GwusY7L3JdbX1JoJzXN7",
  "key11": "54DcVi33sEyhYMvp5MUCSz9UxPm5fKkndc6z7nFEdsuotoKjF13f97CPTUZfR28MeeRx1ipnLDa5heeZ9H1UkZxN",
  "key12": "4BWTfg1Ke3mMxCYgJFFEVWAj3yrbXGbaSF3koWkaNTLphZLaTqN4PUcHLYG44Rt7NmeVxkRUoTWHQuHTRUrBZC13",
  "key13": "3Ghb4QfBTLR2od9GZP86f1DkmdfQTYd7DviRtsi8hMJP1x8tgSvgAtNogNhxjaUznefbJ2SkcUcGgThbaVivyo8N",
  "key14": "NKkePePeY8nPUTm9Lfxuc67m1Uzf9NsKeXYiV8E2ZFX5KAiRPWuutyPwXf3VmDrczKUKdRmv1hh8NYXP54xEroa",
  "key15": "2KB25ihZDEp8M2ts8Yu9LwqJqPiuGfmADZGYDnUAfLez3X86awfBWYyyJY2foosaCyqC2hZJywnqQTCaP9PKeLmN",
  "key16": "34456E8bEBKGgLeUwSX2jPC5v3cnmfJUCEAy1Yg3mkDW8bwbmh6X23tvXg8Msdp1HTVzqvRbdk6V83ypbrcgnMSD",
  "key17": "6u4p73NQEGWx7qpoj98cynbeCNER1hfcihkQUKt5TcJRhanzQVDr1sRAKJAGJnDEvXxoKEQrWCXjCGp8rkqwxte",
  "key18": "3LvHjHMmmgy8WK6BShPifna2Bd6QaYKKhYUDDF49vfnf69tt2H66hdYjGSvasTohxy6d3HafguAiRX18quRbmzpo",
  "key19": "fbKRwzGmfagnianCP3UqW9VfFS4Z24YqygMbUCne2HG31zDUQLSUnLtzyXnsKKuVrUBFAZXsCs1bFRZg5T52MEL",
  "key20": "5pheXYvjjZtSC3jnqewdBgEzEt6wauW6SPjQr6ouT9S5wschdXHpyfHdYAddAWdR5P1VrRttwu2PzDuqBEEsq1QT",
  "key21": "5x4jGrVN29teecJnWKrYruhcwgyBYyU6U8xZakmDe38uTQxY4hCukF25NLwGNeZkLBEUDyFWm4pDfsRr7f3Ty8zU",
  "key22": "5YDsenocS9bYqZf7ZTq4o9zK1RWF6QiQZFRfKTWhjQcbchNwz8XPCX4o7JCL9EXefCKSKN8CPtz71d7LLPsTBTUc",
  "key23": "4KnRT4t21QxH7h6wgZkNndeKzEhk8q1MqL2prvCMJaUHKJjDwMqhBXQbqAbaURM4ZA4DaoUYjKkND9VDZiMGGmoz",
  "key24": "35kw4fZtNugsavQsYEDRPgTLHzw1ahirTqPDzJxxJLSJ8LSwGiNQBpVefvMjm8xS5xZ9Q4VHH7A8uF45S9GB1fgw",
  "key25": "2QAydzZo1Yc91g2cdhNTzwwzUA83mUVohmbZbAbodxBRqMAvdnDmibsxNhvNnyw9ZgqwYnM55bbDS5uknoBsH5tR",
  "key26": "4hXWF2MR9ov5Jn7HXt4yzEiTPTGCW7QRNYAaZgJ9eybyu3g82qaeP1a8HXdZDbTkcjoBXyftrvScnwTCukeA54xx",
  "key27": "2dNPd6rsYPbVABEMZhzSk5XVQ3o3bNkVcJoUQ1GwLbv35roW7nxnwPzmDmvjAZ289unLa1SXco2z19Ee5sbCAFYp",
  "key28": "62yUMT4PPuoGFGgBnhuvpBWckHgJtxB8CCqTpAfYMjkjTh8ydC4DcEoRG1bnSf5CcfMfMYrnSeL2j8CjLFG6ATHP",
  "key29": "5x8U5NXo278QkPcGdoSGXCS3rQXixCKssTb1xec5Yz6JRSL9mE3C6DhSLXNV5DMxYYNuHQhv6wDQ72es4kT3tY5D",
  "key30": "5XAVSMgtkDJvdzoR3487rir6vmSb2a7K1Uk3c2hD883XV9MmX8k8o8znho9EXpzypxjMPGizTjfc2CimNq5RUBjT",
  "key31": "52mxoaEJWJi9Gxkui3FT6vDfLTbfcDrHVNYuJFHD4BB7Gfxux5jzdMVTiuewgNZnWrYVst29a3E3u5sNwtD6jHfx",
  "key32": "4vuPh7rqcpXBwBeQbyHJ7NiPa8fA2GwoLsmQoe6r32VoEsejsppFq9zMmHFbzMsBaUteSmAWBzkACqfEwy3AV6iV",
  "key33": "2eTL5cZn34AbwUxox5TAb8LpXu9pN94c9VPJsugGkB1VqqMZE5yQs4G2aGxJCgygMVBeRJNxwhwo4pCmp8De9n2S",
  "key34": "2saxFH3mR3dmhXu5mFtNvf7QaYgSBpDLhmFYxqiis3PPRyDezDBhAup7Y5xEa8Z7vjTEzzKCG6KztFi8WbdXmZLK",
  "key35": "31qF7j7odeVZgCYRyKJnxYezF7LUyUE7AmkQpsJm15Ew6EXHB5ngFB3UFNgwsv5AbXAYXDBU2Pwo5ytnGu4N2ApS",
  "key36": "C7fFjRyduV7Mm5wFqZ5Hmwh6eU1eUAFJhTy46pU6EeTrDWnYuwAmLPAei8riyoXm3FMhcY2ZLMPZdDwMHDddg5B",
  "key37": "wQNZxNZezQeMqi1UN5obVrRUeD2YKZ7ub9qrbYVfuJKHwqzVUnBzZ7AHgmC55pFXhXu48xgcRKQdatQpNrf2EDH",
  "key38": "2F2qZA9Dn1ETh3CBRpXkTdtTMqShC4qv7BBMDxBjMPYg9ufdQPjvpWVUDZEPtHgUahcraCPmPuouCvK9oukAvJzy"
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
