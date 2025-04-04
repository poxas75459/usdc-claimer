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
    "fzfBL4YJ2SfvEnP37ZkTR8cwgwCeoQYa8FVSU14PwJiNAhztA3JnhHCQfrz4jwsLm8N2wiFAyXnFeKr9d2z96GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m8Km7hU1Y74r5REi54oRrid3LRB3wCraShqqhGbNMnhs1oQXZbviPnZqYD2KfaiX9iLDse5Yx3oyEe5v7em8MVc",
  "key1": "2QHM2c1ya2k3f5CTj2F8BJQmA3X3HYG8eMGDSMnGprhYP8VWy4Nu9NhgCBL4ZeCibMhFrgy1XJKmu9K4nJi4Hq1w",
  "key2": "5wPiPbXVx8sK1FS3xVY91ZiFDpJchVN69EGcNm4xijoeGSLRs6t6cS1iiNDZBK43ZXos1UpHykmNXSURjQ17iBs8",
  "key3": "KafgMY2XPvWSMir6W2adUwCXDksTZ1U7FNJzXkcRCUZ8gZ7hrJWZ4kMB9x8H3npsuw3KNR7MJkp8Lig44rNHmYp",
  "key4": "3NBQGR6gTQsL8g2ZvUodXRYseTFzxLLw5yqXCtTTTzqa3s9MJiCh14kQoURGVcTfHodxTDuPZqDHutrdGoqQyWTk",
  "key5": "4KzRGw5ZfqwSSpxUrbA9nBwKJAHm8u3yp4XKz1vF4rDuTxrgDsBvp16cbRvEHzsx2taq5h6hptNoQMskme7HrgDw",
  "key6": "4AgXjsQZLALXBxH4TfmFh6aMuBY6pcDJvGM4zgWu9KFyweT9yy1z3Lua6MxPMxTZ2BaMw1BczYgGvTASCkJX6ndZ",
  "key7": "4EYghLogM7YZJqz9wqMe1hEtJx4fgSpvTKNF5htBsCEmtwLcoYNFcywG1XBwgadBErjy9tuFn4Z4j7Pz6Dwq8wxi",
  "key8": "4qxuNYi8kY7BWgv9E5aqmpPC627WKJBAFB4Nx3YmXWd8sN6EPhNh3Njxkuq2xf6xHkTzUVBpwQ6xUSknkUS64owL",
  "key9": "1ZvfroEK2FBukcnjaA46sHiFGM4ZEg8CAM7KyLBjkC7jaPnjZ7Vj5HZ1BSeNQDB5GrHMst6PBWG1qw84TtZJg4K",
  "key10": "3mjKg742L1v7jHyEHWGdxJf7DzToad9hXttsYJKwVYs8mdnmuYCQqxAtXqKYXgk1FWk8Mbv2LqZcKEFmmD7tf54M",
  "key11": "2YkZyDDtmDPgu4CqvJ8zSojFY8HLazkCQJ74XRvg5UX1itNKRMgRPSEqCGhhkckoSzjUUHpKeoA2qpMTNytYDwPH",
  "key12": "56biXDPVTK6uNvWouuSuvtBfPY2oQFWECTG3wCtP2qoeTLjsDWCcoi8ePsozwzqrmumK1rqVtwbZXHheaVE3tDeB",
  "key13": "5b5FiUeEfWNVt4zi3A4WU5Ha6RSDf6RDa44UkRt4gFpxAg8c4jPZAGDCP4MZAki61jG8wDQ1dEXutsiwZGeYkX7y",
  "key14": "4hU1Ax4U87pZsFMx6jAX8Eb1JSSCJc8KwyG6wvWeejeEgAHhKmZ4XP1T8HbpW76D9AZ5PcPKPhEeaZPgRfDG319T",
  "key15": "2qvUvJYRttgc5dxu1s8jtdP2eDUUsV9gKcRNtayDeVsKWZ3pg3ccLBasPhj9n7YND26UiAU9xXwAjhNqowHxyFd6",
  "key16": "2hP8Gf3pqtnAB4Qb45VXowHDDsphy3D3o5Q8f1idFgwmAnQ9wmbGR72gx28HDBvMmWUm8N3nMqr2Xk2oKdb9LjvU",
  "key17": "RGSHw2XH1gpS99kevQixKFTzN7YmAqQTiZDMtaZR6HivHRkegrhoBeXxFXh6LvsmAtdSe979BDKdXbC7gpDPU1w",
  "key18": "4t4d4uzxaJ7DePSx7Vu6XZmsBrV2kY8LBA9NeyjWVStAfUziUX37tXaDJTa161x94DVosX5wd4Am6cSCXqbCpWWv",
  "key19": "BnmNreHAx2bLH9cRr6ecveJeiFynD6XsAWqc3CetDDksUeDywvzgQc2Dgiodcr94G6YJuYUpDW3zGB4NDvTiUQ8",
  "key20": "31H4gpwvCpT5ek5bcJf2ZSX7NGDJvpSmCY3wBcvs3FvNTtdQJ62V4u2S3aFUGjjF9qJjo6LaE2hn2qXwtXnqGLFS",
  "key21": "oym3JvjDzRkTT1kooAkCe3n5jTpUvmST7xxoDpw9jggLCEWFZwSHWEoxNeGmodJFWqyehfd9uYkKd4EyDf5BLCd",
  "key22": "oxipPUmxCXzpnv6uWwFyEeZcfsU5ZoFRQTgBnaUT23h32ZR9hybfsatvRn489hKBuz4emnoL8Da9QZpWjQPZtZr",
  "key23": "5Cs2MgaeCyU7knxxFrUxxmA6dUmGiUDiQ63WrwZbdyYj1ALf2kNXpLQtThTRczuGapLuzrEQZxDn4qfqGJAuWFkj",
  "key24": "5xJJuegp7P8bVpCxBTyDSogApXNGE9gSWeKAQkGwtiHUcHcFpXkxAPiXf7aSV3WyQxGJGpiYTCf4yBay2LbdksaZ",
  "key25": "4gSeE8YcJXjEMP7eNHhVPNkRHuredrkwpFbHToCAbPsDpQUK4EER2wvq5dmCSwSU171w6S5WFQYg2m84gniC6BAV",
  "key26": "4x5wasehAzeG1zBqoA3RvqpDYNPzBjqd8tz2hWxf5yxboeXyuiVi2cAGwgvMvCDQPMCbRhQVZwnsvNXRWmgDFf26",
  "key27": "4fE1KHjuHKtuGosDXn5KDeGbhLQfBRBNcwTN9DQVBn3MYuCNQDRKEwQxvA13BCTjXjDMXgwyspZvR1y64ixMHu3L",
  "key28": "4BdZp9zaQu1vumWVKJNKFMypaBeKbZgv7jtzVJJR8aspxBU7FuBp2GBNWZGjxK8M9WBmSVPNq2VCzJq31pVTAUmm",
  "key29": "4EWTbpVeoZfiGdhyvnt48MD6bn1WgoqcPHLWCMSmqU7ipWCRseKTSCB23WZyxjDJezT3TnZPozQ6VDMWNHxjq5e8",
  "key30": "5FQPMGZeihUXTwQJCn8eiySJi1ruWW6qPt6ak3UzoKxhkjk254md5aNKMUPdJ2MckpA1jS4rkh7hzMueSvtQdfFX",
  "key31": "2QA7hLX9qtztEgFF1Fd6QLk76Y3e2DZoncJFdMCkgYfe3ptmEi9ygNGKQY2pnLsi9opm4EivRLT6kLnSxVUXQWSH",
  "key32": "5AtHkF1rvMDTGsX8AUwi82LMU5fdEJDqkzm7wqHZw7zNe24SyyMgmcsYEryZPXbAJzqh17rThqqC3u8qbu3uJWWa",
  "key33": "4EWg7D9GDY6htLFgToBByQwFVUKUjQ5C9hhQhV6ju2ZoeE7T7hm93xD7qBjwuuWfPBEf23S47VQxtq7BhFnQvYW5",
  "key34": "5egLaJ1QNAaREPTbnJQdcezajMT4Cq9gsYhWcLnwsuCGBqtoqHza3Dx6DScG2kpzrQcc2bWxrTmKAR3in7bY4Liu",
  "key35": "419FW9Fxx2E3NY9q3cojw3HyYtvpcRSRYd1qyigdKLRXyXvnFbmHmUQo4RS8snUE3DmntN9JfCPLosZzWJWoj9HN",
  "key36": "3GxKnvkybQ1fpQKpVqufNAWd5JcnvuM7SJg28iADYhV2G8iFaWhaedobwQe8mY6mE3ATkD1xpbGrFJxA5YS5SHLe",
  "key37": "MLfbzjvFGYytyxAkfZ7iMmDeUoRNiSL9ZBMHWrmHee9USWF9nWZfWuqyxBKeuFHBEB7xWwz7in94jzJnV3Swg5E",
  "key38": "3VBU8P5Bgm8xxf98iM2aiYxyNyr5K67qb47W6fTjKo82cvifn5KQnhPDhNtKJCMV523Co113v6S4ZtMSnxKUFYcZ"
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
