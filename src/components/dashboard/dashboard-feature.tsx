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
    "4JcK3docZSGfUvf4Sk444LaisNS23yZZhZxdS2uzxacR9etTCW64wKu5i3XGbDy28FCnbUSvJ3gD6dC5MJ9WKMFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAU6osPQ4XAaouS3AKgYxm4Crsh4AYLbPWHb6N5fbMPRB4M2TGip1YpjMidFSdW4JznK7B6YbTML6y47A4vSjzZ",
  "key1": "5JHfLhW1vkJYrNB5zprDRyqe7eYKAcLroyEHXtsdAASVmEzBX9PhVVVDPFX5GiDycx54JEw9Sq9gDPVaK4cZcd65",
  "key2": "2VZfUBP1AMLv7BP9YSzgNV7D8bBeQN9hnMvJjNt84bgfEym75Yys8K7sReFvChen2WzShQ1tZ1mjDWEx2AnnpTo5",
  "key3": "3AG9ymNeNXjBHgMfWG5wZeHx6MEaGi1ctYJcntM9HvUmbbH4ecxLoyqRJFQCm5FW2GibH5GDASZX1SFSp1R4bcp4",
  "key4": "n3H1shccuT3HFAHoV2cfywa5zrSp3yaNm2pBdnv3P7nrnDnWt1JGCpUthYMzJVyu5vnp766av1Hktj87mnMm7uJ",
  "key5": "5wVQJXYpcYonEmLmV3rqdJW98S8U8N8bFAEhcMdqta9jQ6GRWcqjRUa3LWG6TLV32je2pXanfGKhDtfCwFHTXjzN",
  "key6": "3YowiedGbdfLgEZWwbveXrmgmvjPaSL9uAMuHSBNfXv83vtBDH2ZBmcKXwXwLpAnJyGr6hKoFYNgHQFw16ViaEbu",
  "key7": "LMdWDeMxDDUJ9vZUWtF8cM6SMZQmHabWNRjKKTQGiU5B8wYr3p6u7NAkDmMYFUgQT3CTCfEAYh3dZ9MmeTz7CrH",
  "key8": "4dczRf4eFoXsNNThMGeJpdgTiEeWwiANsqcqzzTeTDdbFECK968DSQvmCuU3q2gV8BdTk1xebk7sJMnTw4zu2H5A",
  "key9": "635K1eBi2U39V1EA7NcUJHGQ5VRhVQLZK1aQZcEYxffZ5U3AhditXDJ6nu7gLDjXAAxr7XpLc2Zx9dCFTdi6nkU3",
  "key10": "3xqPZYoUzUCcrELECT5rwCp6Tihjpif55V7GXuvu6AFVboeuKRiD3VDRKtbWUE1MJK592JGwzj963HX47yYuqG4N",
  "key11": "5zpQJ2Q9NieyAogvb9uiv69avyH7B7F55TPV5Kxaxfh8uMUWXZGsWaGFggpdshckcPSdoN9hYd9aufmrFNWf4bCq",
  "key12": "4PdandCrMHeCsE4yLXdzMA6Ubmrbw8SgTpT8hMXCruNpAUjpgtS6nNZ8Ech5G5U9V8i8NzHK5fDX4dAVZKyRbbpF",
  "key13": "dWEaQtoTDqhGsiJhKdGDUTpG5U8NssDjzc3ya4znfuNBzVqpuLyZsXtiz7nHxC3EfD7nfWVzL26WzjY9rrPDLFE",
  "key14": "4Qb5GSWauaeDkkRkcpQ9dGxoEj63cJDBv4gtC3xbREJoZiDojVAmMKEHkaYw9W7iiLZekMbWYVrWeZsCqDdGySC3",
  "key15": "25uyTkQrE3gd6WWoVNhkBo622oBqYYfeeXTFvuYaKXaGTnZ1cEabkjgtnJEDBYNneafBT2qDmiWPbG96ekSvwMx5",
  "key16": "2CLjY63HwwgghQqaZvVJZjZN3pg3AGpK1t1frqKcMqHFuFehJF18jGEs32cGP5S8rkgTMVuJxMDDbxcZ6o2ap4tc",
  "key17": "37AZKogLeSXV6qTnML21bpgxUXbAyHmtvdTj1yykENGzpZSprJoV6MMqFc3KDgUJzFLCaeWPGTrrxcyve7mNG1wy",
  "key18": "5iXA12tLwghj2kqTHvkvEEiFuXNnf77dG7hyV2rTHPvYN6grbDRVXtiCjZXqoGGPNfd4kzBF7kZqoc5Uk4zB2csf",
  "key19": "2FaAdt46x22uMrNLPMEpy11E2oXWAJBkdTgyJPaKys7qzQgvKZWEgjrRA96TKqJNMiRS3Sc78e5sA8z55cjp1296",
  "key20": "4ze8L6RuzopSyRDW7AThM8YwjhHHicv3F5LXRaE4kpQVyRce4UynWZxGSJKAcYx16MHTzup2YkW7hDRUBwxSexd3",
  "key21": "5BqnZZLM6HC7acrTqvTZUC54cTQde4GupghBCGqsvYeFAv6QoooofpUWFzTuJzHWJa3Gaogj1GjjuyRxyWRXHxp3",
  "key22": "2kh8WW1WyLUC3WTXEndhfxb81bdV1dsiWxPbbcMgMSBAHKmTfaNx85RugdiSzQkJbQVPh9j8nL89L4pSc4h4jriQ",
  "key23": "3Ldpp7pTfJVH6sdhGgkAHBkziVDHEy6vFG8VdcxhuqQCXrJN6Nfj8u1N5x46oMDFf2A8PcACD6JoXZFU3cDZi7Pb",
  "key24": "5vFEDbuW1xFiEHxLNKDZpeaK1BzUybnaJzjYnPgBbQh99yE3Z26PysobDid5he4AHwkqMb85GXKmr4oAqkHv2YzB",
  "key25": "23MqKvw5ixXmPEYxRF2fqijrnYLzR7Y8Ltq6bhfnkJkJVe1VFN2NpE3YYyBURiJgm5WYmeimUnJxPvPUmsX8pksG",
  "key26": "5frCLBi6h181VvT3uRdWyFhw3MqdVJqq6aSzDcp7Lk5YJqo4jeLFVrRVEA7DHhApywRqAKxruUtg3tG4jbfrJJo",
  "key27": "5dshAFoHkuK4oPqW2a4H3QYJCLNYN3fVMoxnewctYVs1LThqivwdSmY4zR9Ru6gTRSz94N1kX9pKggARae2sbZdt",
  "key28": "52KF9m1wFgpwcAAzVfo3Hw5toWWmyZYnY4vvBNW2TDQqgyw7i3vgAXzPCEJ618CZoquFR1cVUdSKGSE2dWFvgY8w",
  "key29": "PNkUdp4mZqJiGLwXwUhFF2KpPh4ZMZjvoakk3e8gkovpKsSUby98Eq13Adjrg6s5QsjjoEE4ZY6cuZ6p55eyeCf",
  "key30": "5D5Px5wcQtppKar5kW8qKEYK9UUh8eZwoVD9eczEhBu3xzVMN9Bjq7p8ZEQqYm4815nXkL4bu3RjoWNBa7t11LA1",
  "key31": "55iD1TXFim4VVXGBHp6Pv9EButuYQSjUpo89g8Uqr8t9unnR1DwcsQmasejTrueF5QEjG7MidD66eFKa6JHR3WWj",
  "key32": "1vGj4S7S1wcPVgs6a7n3ueKNgmwEwaB9Y8R3435zNWAvQEVA2dqAzTfKjrjhhBABe4En2pVBDedEghEEfrMDPwe",
  "key33": "3rgtmnhb5YAc2jb2zib2BJEjqNNYSNZ71NiMwzYSorzDbwJFzJ3CcP6tNYdxEmsHdKXXCozs9aT3xPyb7uXBAgnK",
  "key34": "4JBikwazcaurWPMvHJroPNHxDVvQJ3baCCB2P8MQnVjW79td2PA7W4NDqQR8aRKUtEVVjrfVBUyYmtawazTAt3kR",
  "key35": "5furKWvxPRGwwnyK9Fb3EQJ9pA2E3SxZYb5JTgTQcVDKKs3FQsPsPoe7z1DS5RV27fewePuZ3brDG1Tx8kDK1odB",
  "key36": "4iniZSHJGG31CCyY26q7Eahr9fvMLFvxB9g332L225aWYE9gF3cVvbABPu44jnAxTiTr57XcRxjJrzBJdJhQu8FU",
  "key37": "63G2qhP4txaVxa8Ds383iigSeAQK2Nmk8SSjmBggPGQyyon3hqZRNuApmohW5xr6jx7qdWi9zEvfj4kPsCdfsydt",
  "key38": "4wANKsy7xU5SFaKtRL5nN1VKTHcKdhzM5YdCJB9QV2Pz1vbH2hJXdSnsrDe84ipGXLHPb97HQKQFp19ZeS4WA3qe",
  "key39": "3Yhh4Ao5SKqyafNgTrQmcM55zFhAL87bVnmY9JRMjzB8ngzAGt65yrm4PxJgFdg4QJ4CtZTnAMFBoVrg9xSF7h9W",
  "key40": "eus8sGoXYNXuwCJ6Fk6UcQnMDe68szmJXn2Vhh6zpeSjW82uiWqxChNa5bCh8bNdgXkuQ3VnDeSgVLRKdPo5w77",
  "key41": "EoL1uo2Lkb9yVwS5Mt9kZPEyhCBhMqF1f4KVTpXYxAVfytcUT18VwdvwK62u2go7cRk7ik4vrDeK5hQgum4Vc4h",
  "key42": "41NFNvZqsQK9Trc6WgChZ8jBkeZVdnuKUZBMpHSM4YpouxyrKLL3qg1LpxcvgHjVfPAajRwCsh7C9FZzRH3i8CPD",
  "key43": "3RK2n91VVHNZtf9eWYhm6xLEykBohF7gohHefmkayagV3xvtv9vfTXXRW96frwcovkZoA2qAcERwNkrDRFkCG8GW",
  "key44": "28CEfAhz8ZrStqZJGrPSRN41VUfSsJEkrBCHkS3S2ip5BTpgEjPBy3gUwypjMtK5gHG92yozw6uzHZUbuMuqdT3u"
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
