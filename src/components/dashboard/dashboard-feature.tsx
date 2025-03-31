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
    "3HoBtFQ4XS4ceL3PP8Sv9J477Z8keR4mmJVwMLedxuaGbxKmg3ye9txEvgFCiuWCdXNGGNzL58XGx63XMkqtU8Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SgPEm2nW6Cgws7MvnNTCqHoZEh7zqvEu5ot3L7Gx6ityiQ5ZvxSj3dBfAAMy4Fw5xYeduh1XuC4yFbKGA2wcE2",
  "key1": "4MEAkQHKj1P5K4N3AFo8UEUTmwQowb5J5fUuaSxn2QzSYotSukHG9ZJP8JkaCCfCMRwFyCmpUk1ZjYoVSN4tuaRq",
  "key2": "VP5vGakhmWaoJbfZWzPEhDqMEoffr1MX1PS9SizsXzzma8QdFi3GCvoUr34Wp8H5uavCMj9VZmc4DTZS3R37T5o",
  "key3": "24w3kJTggQcQy7d4QrepGSDYAFTqjzna8ZzVedKfAfRiPCtnmDhraP2aMJBvpBHfaWEuC4WN61653ze7zty2pe1g",
  "key4": "4zkkqFaUoeKRxCK3MEbGrrsM5n5zLQpaJVLQiz853fC3vTt7nSmTMXiQN6iz4AMMrYmYTYFZjGATnoiTLv6Ur3Tq",
  "key5": "3m5Rgut8CMzK19f3zoqaJGGNJE2KVKLk91gN673cbmqpd7x1mhLwqLbRdgzyLUBsd62iJc66X2hbezoQufFyg2T",
  "key6": "5Hs9CpJEfMthHJns3uumCUbVTs7J3YQXic7KRE17yDwhnSQN8htUugCYYi2WADNcDQyb4doczdMGWbaR5gRJxjNp",
  "key7": "2LVBqR5qTcRiEyEeotPa2sPs3s9WtSn1PQAhMMr2mnQwDwhWZteLGAXQk2BkKCDgutYxyowS5qprDNyYGBaq6YUa",
  "key8": "3YD1e2pSRse6BbJ7fFUo1o5GW6P9AcX5NpbvtjwhWRro6oZF64ZKE6UAs7pCBUXENXPNk6aKvDotQkP2ZVZzRjS9",
  "key9": "C5XwCT9sMKTXNgh5Ars3tegNKduMwuyc9TNgMiQjMvGNpp7X9KbbHNhcYNRwsjh2JqbfG5SbB5j3knEWwUBBHng",
  "key10": "5fcMohFLk3ocBb2bZF1eA36db6otavApUbZzjC7quYFKcRHXvzEencR1R7ALFRSAtMf4jo8jxtiFthCKXTHCdPTA",
  "key11": "5T2gmRPfmQSf7jNy2kJQvizmDSjYttWwU4AZgcMSPMgJcFPx9aNti3WRgLn3YmoFPk9553hVAVLmoBGVb6ikXD9v",
  "key12": "4QUXdagJKQBJ6oFhAsQdpbJrKj7aN1Xc5aeb2rKxZwW8rgiUSCtteYDPGYwsCmKe4JayHFtWa1GYFKeX9tNC33Xw",
  "key13": "34mUWiqB9sNe8VPy6YhubeN9FNc21zeYWaddB9eC5aEaGNE4XyYcfibDCv3Kt4KqzLWmmmhfaAar9Wp51ZseAySM",
  "key14": "3QUqTvpHj1hzqec6km6F1vuF9YADuda985rZtF6DxNR5bB6DkNZm58QBBUB36iHmvSQBQLnJUNT7S6KJZaDzqsZb",
  "key15": "eqDLoDEvRVHqCXM1EZVyuDU1ZFYTPk2T8fwDeFHVJe2fjEkKr4hM4Bdvqd48jyVmcSDt7VgTk6z4YZt7sw8ZCmK",
  "key16": "3uu1WY8aCPL8wFuTLvrfktZ1qQUZqUMUua7kdGRHStTWMoZYVyPike8XtFSn1mKs3JCNHLDB3yR9DpJeUCg32K7r",
  "key17": "5jZLyTx14FX7QWK174owFjRS12uunV5rsajQYwEKDuTJqGe1GHPeqCX8pdWJoKDL94SaZR69sZ7pq5fNQp6R5Y6h",
  "key18": "4oet74CxyxaZGgJt56HHyYxniLKUD8UgCsgAchawpkGw2UmcdMuMyPsgEH3ysn4FU1y4tV1taiBisWaXGTLCB9bM",
  "key19": "2FsDy2eTcP48KPNKx4j2eZJ4RVAXa5Ag3n2LAXzJcM8HrpySB5L9TKSnmGhJYMSgqFKyuHNwao65JEeaK9HvDewT",
  "key20": "28i6SEB9EUgbTvZroJyLft4RFQdLMCHSmKHxpaXAhLTs3HUEMZtzczNvbRNc8N1aNk9VcNxCb7J5pC9YWzUAzM1g",
  "key21": "2J4fWGpNQt9ytXC1P13WZDu2ex8urPmh6nk7NYasEW4ApceYpG9CZVbULPQAfL1CLwgyztNLx1eXSvhhsdCuYxXs",
  "key22": "4wY4BugSbHNpKWVHDbfWsizSeDwwCYuJTX77qzMRoqHa2k5ZyW2XjzKaJkfsxy3amyxit7noosrhQFe6mTDrwzrS",
  "key23": "4PjietsESH23Q8M2VDxyzWsrNhiec5RZceX9AVbnG9bvt1oLqE6nVkwGFWh2JbBNG6brpTiKaEiPfSxsbgzzRnQy",
  "key24": "2GEXHKoeNw4EfntKGRAKM4aKDfyyM5FXUVdFFa3FoPLAzfmmEXrHsiprEZkySUqFkX8eE4zsLk1v5aVG2oyVnTbQ",
  "key25": "4DSjucTnqjxDXiYzGCYmTTac4XDtt5sK2tSkH7d3zM6LB4ALA6AVn4n6E36TAPhY4bhzRnKUvDqjygd22e7UAtw6",
  "key26": "3gHFLjuTi8EHC8jyaZM7T4a8fkTpEjnYSj7KfMsxYBUGEkXpHE6wBNJALhA8GzxWDqMt5QkExKP43Ub1PxDkQLQ",
  "key27": "4W1QtTVhtvtFtcPJrqcz3uq4GgCo4SSNecezVtNG2sGPuMUdbq9zir4A4HTwARcfkSdUCEWVgEbJmS3Mqaez7WEg",
  "key28": "3MFQvzfkmFNboKNszJZSWo1XNdaW3iFLQmgiXbQUUnYbQZ7tp8D8p24SDZYn6QCpnRzNdq6XvRwoewMp3s6rWNAP",
  "key29": "3CrmsaKry6c2d9pryY8FChHcBUBWUoJuECJ7EsxKfhtxdQmKtykZcTMCvGhM1EZTLFMbLrCj1ZH96MZCEJGk8PZX",
  "key30": "3QVgffrBjphQwuXbzpHCkEkqU8DW3E6vxF5gLVHn7XWJgRcvZzNwkxiG7cr2MjUwwRLLBzZw2WCpMu8aP4tucZgi",
  "key31": "K49GRfXiJauwq3HF7q7mCkdufu763AQvW3W4qTvQq9nfchg7qUvt8MNVhbAAkYTCba92Cp3y1zoqEwufquDuEuF",
  "key32": "62EiaYDpLR65Ag5hv93yCJbwXYcAaB81fQU633zQxHNvW4arBLu9r1xJiDKrDJErHJwHewTYJK297ViA3yKKLwhv",
  "key33": "2rSutsNhjjRUTyQCbs42x4Wfb7g83yPaAD4oGUhqfUmp7Z6EuDBcNW6p2KAiY6iNoMFB5kWYHBX9zveZ2Pk368r7",
  "key34": "7F2x5b5S1DGuhQYKTBwmZTqynNq5UzrHLkJ5DNJVqGyksbNTB16fvUqYTnqdib8R3xgh9YNLm7cWUEBp3FyhKy1",
  "key35": "H1XBuMERSoX8kiK3XXLLTkMEi92NkHGpasEGcj9hwXAAGLhYq9wbHK7XP5Ysc3MCV4VwaJkzMdgtMNCNZd1U1ss",
  "key36": "2rD1jnTTa6P8DBAfpq7t9S2DybdQfeegKSgAjfGc6es5xaz8cRCDPwDT8jBaZK65MqL67YUDtoAi6yXU4UGecjHm",
  "key37": "qe7GHkZ2Np9wJxW6r6B4etDxw5VWR5ppvF6dEiU365toN1ejHHz5xCnMafGVit8pDca2nYdf2ViTn37dqvTpaNc",
  "key38": "4atveE5daYFFuZDWmAWk2fxsDHqMGCxbHsGXJ2Zy4D6TVEV8KDFfJFHkcr6xKSJ9RdoEzXffKmAnL39k1o4YdtcC",
  "key39": "CVJNaCxWNt9ecyNN6auvhq7jzupeoV4AR6d5qHpDHz3UCBEysh7CiVwkkw2MHEBpWX1k55eHjNkaGCR7ge5rcVd",
  "key40": "3KiP3MLQq4YKx4bwaSsqRPUHTQC8p5WcxbVx1WUrqnPozXm7crcFUqnMoiVBEHJa1RJMDU6w5i45aRtgjNRX44Bv",
  "key41": "4hH7Wbcpya2seDcEdvjDVf9yCUUdFsNPF2VguKvFhGTyWCqyAFjif1UgufpEUvtraXcGph6s8HmyoXrYmAnY1iK1",
  "key42": "3t4T7rFkDVUGLRseWiApt4JY13W2HfMiYoEHn6e9fZ7ChBbFDR2fxikz72kpsQb6MJEAjtV8VSym3hs3Tf6HDg44",
  "key43": "esjZS8QiiBMUXE59KHe4DcejXKPzR9ipkewyg5pvp5M71xsnZkEaqQcUxSZfCaoiT8eMcZM4GEDmyRFzHoc3U7d",
  "key44": "64qXEmtoYdaRWWhECJzKRxSrJDaKfNZTTKSCztXPTF86KC3k1CneVHNF4Lx7prG4qXrPodKxXESHmxrpRtYZp9g9",
  "key45": "2qQhNVJfxGAW6UYMh1jpghFAsFMSkD98Y7VJkUidvaJjAD7QfBpc3Xd6FmSBCDZjNQo3Hme99VPoz2kFUFzceB6b",
  "key46": "2KUukjSbYzeYGakpFDB3H17Gdr1wfv4EUwjXSAV654iCbj8FK1FY5tdHY8bzMkFi57rfT6AaoCVv3pj1RVtWXFht",
  "key47": "5UoULH8zwmTFS3HK1V1wr5Zi6edpRkcwrrMwQa2u6Ek1pZFGdW1we1JFy27as7qhXRQ4axdaLitthJtbrF5Av6AY",
  "key48": "3ZX6hrC8DFva63BLBEB1gDUaV4QdfGx7Xq9YVWd5L42s83kNT3FXbgqpbfYmQyQ1MR71PyRHyhMRfatjjkRjzaxJ"
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
