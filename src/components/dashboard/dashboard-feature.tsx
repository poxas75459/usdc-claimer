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
    "UShRnX8j5pYVrtatBEfou3kpGfX7bewPL4dXZToo18wUVa6zYN32wVyXuLWY17j2AKNdRZufBqEBu2a5KGGyReN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7AoTVpGo642m9SFhXniTUcoaur68U1Mw6JwEuMfTRQzt2qYdeuuJ1vpBbCmWQq7GaydVSB9dagA8AoGEvGNkqv",
  "key1": "47vFcfkRVcM5MHYCFPzXgLaZrQaYxTjp5u52cQvsFpmMAZGCnCdttKf5byxCLPnfFW5Hg56HBSftRBQpnyq5ncQy",
  "key2": "2byVYW2L35tCmWTLADXxqqUqS8ctgSwcSTSvBZ4zjd97LSSvfsyz9n7JTPmFwRSN14U65X9edmC38s9YA85rVc3n",
  "key3": "5wcFf5WehxDBp6Zjyybzx3r6JP6y6NhHgLHPUDSNKj5P5Gkovmks3qF1hYqZ68v2hnUCpENazVEXoEDQ1nDHdgk2",
  "key4": "3HfvYeGKa2Yvq8yCSLzfHhyKVQBdiCha4E1BatTzC77N3ywLDq9g1AddL5bGnkvxEx81LtjfJnxZJD7E6R2BLjK9",
  "key5": "4mUws6bbnsoM9R2BW837cScqK2FmyyXk9tan11U2p9kRET3oLQgQfjfKnZGZEFiBdskg95mWisHCdWmh6oQx1V65",
  "key6": "5hH2TsWR3WycJuPhjDck8gSBRL4TgAu1GdKsFpo4tJ6tyjYMDjhRsjiA7mic9AuRq4PbNbE3PmFzk84t1dm9i9XC",
  "key7": "4egtk58DD21G4ALpTCjwQXExHCmc2UxNU81DuPnnG3tVmvfbjyqPzZvau3HGzK5LvsBD4ZyyJANCEEUFDfbMYxoX",
  "key8": "2fkC6Yq7uRrBot5CR9eiRv2FCcGiQQTrajCtN2w4qGBmDi5aYNG4hLakf5HuDTUt4LUHcVaQXM5fdcL4bpbBsiVA",
  "key9": "ua5TbzmbhDVyuTXqsDEp3jf3sYNrsR8zy6a9LZsdAHXxsXVbtrXkyvyk6jUDNxPGbQwVmC8vcsM6LZ76rmX9n52",
  "key10": "GzJGK3mfTdwWKCkugPvR1kgVHApzRM6gn54peT8ptT3EuaDx4rCkqwBupeRf88YhZimb22qUJNd3L1X8EZ823Zc",
  "key11": "5YiFUXxUHo439tv8FHLfmYXFGE3UwGsHwpDn2u1trGNvNBjTxSfH4L7LeLhDPKXxEid2N9VCoV8MvWDfRoMQUx3d",
  "key12": "2XHcW9djDRuh7JJbma9mRPms7UmAPNg7ZVKErey4oN6vAfG2ZWAazxPg732agTokdkt9CkhVWWDE1BrkkcochpAT",
  "key13": "3tGLxpqNCLbxThMA348zdYJFwsnhvgY5WRWSZbjec3NFkYhgfs8jpqKotSmzAWw1K6ffLUoeb3yFzd81v7MLfqRd",
  "key14": "3XVWwEWXHWMqa2WTP5k2JJ47q3EoWjdN3TUpohoPR4rjYqoEtcrFhBCGDWv2BXpqeQzRH2KdmX2TvYfYV4BfSXAk",
  "key15": "5YWfXegtmUdnSKTpgXRqwFKQJdo7gyPSqXYnq1XHSxjaJyg9uveCHSUHdckEw2oxoShWWqntEMFsRSjq5jT7UtMQ",
  "key16": "2YEDV8qjFt664444fSFqDKQeTCCpxXo9QcBFc1bxbunpPXt7HWWtyNqDHEjUMWYHY9ykoUGXuBAbLRgq6D8v6xBf",
  "key17": "4Nvfm6v6vXgukHA69oZFEpek7dBhDhCehCtwmjYei7f3TAjSjmaTXn3Jz6ZxamPgggU2HbqgMJGWtBXhNkTMVJBE",
  "key18": "4heTadQ4XXyuK3un6sbg6VsoMiysrqpJZ9tT1e4HuAbsGrwDjkd47f35XgC875TsvYfFFVscX9ysqVTF32ZPfU92",
  "key19": "5Z166FGuyaX13C2o2pbpTb41kgGAJf4kpgTurBreqv26m8rQP9MW7gNTXytZ8fy8abDBbvcRYLFSWNaQun7GdqR",
  "key20": "4Qe2aN9P9tMnuTeAeriEhrywNrF1K9pQUWTf3LyVE54qPk7Qs1ssf9tLFaqvtmgE8Wq9cahR2xeaQkBLUDW4WKDJ",
  "key21": "34CCk6GEivNRp9e1Zu1nJdprLBD3cPUeSF93qNNXPvdsLa4gbGoMtxQtoGUCwApRk6tnxTShZJqGrvTZfKh7TgzT",
  "key22": "5wV1TjP8DHiE1YbjVYQpDN1rw9zizYkR1YtTwvz93EvDXhos26LPt2sRFQVA4uUkKUf9poLKcEt675kskp2ojMgV",
  "key23": "aX43iS1vzi3BgwjHNqj75YVGVbdzmcG1dm99nWnLMX5CV9PZaLTGkYUiB6jJA2hj4LQ4wsYhN93HEKPrwx9HRSx",
  "key24": "24iJNBRqpVwd2LdD4TLutpbhjGQGX7VTkhYfYHSKossYzXNXHUh6P6s82D6cTB8P3Li8dwRnJuzLmgVYHYrhsXo4",
  "key25": "3UfNWsfufS8WCdYRUoDNoHsLLoBotW9FZVDxCBcvoRdjME1mpU3m2DCLpQakKvRpTAh3YpBHbDkNXvk13aSqNsoE",
  "key26": "52BQgUu4SfD3mrqUxEgJiZbudqRNyAJES1DmLH41omCM1f4NEFbzP6jbWDLEjWGqEG9vPyg6EKYS9PGXqhAoakGE",
  "key27": "4BLUi7QmEghgciXNvVVjSoRzzWBa9w5VpWqLcQ2HnRoEmhGmXgUSbapmjwHyUwJEzFgndDpCmdtQ6wmTFMaj36uA",
  "key28": "t6jCL6Wre7yJHPrBVQF8ciZ25TJPLkDXK9Z2k9wfW8RvjtJTiqyeiUK1gNrumRoU4SuBky94RRVeJxaFu91g74q",
  "key29": "ztAZhZguFr53htYxYeBLAkwEnpNcjbrsRLssjgJnmq1jXdCBLdfLbVFunViZR8nzNPmXeTUJ5BAb8CeMskESQwZ",
  "key30": "UhKEj5MFXV265HnwPpzE2RBtETCWyvhUcVErfNXAjXTbmJYN8oCF4AdhtPa25QNsCdhNXtgAGhkjLchQR7ufAvp",
  "key31": "4HRpDsh1JDEcHAPVKMUQmYmMgPuNhQvoLLrFcbBC4fhZsptQRxc5MrVGrN2pvzk7dntZkm9kSZ4b8zHgKmH2DPBC",
  "key32": "5aEojaqLSf1hnESWkRpbJzZexBRM6439ZaYTJUsiZGJQbaiRrSJxVCsoiEgBr55GMWReCV9MXVexsb4LTBRBnNt4",
  "key33": "5wA1FVKRcTeQP5L7hxNPpErDcxsHtStTLMBEwUc15Y4CsqJcrge77mKKXk9xWdu61ugtZW4Rxttcg6AXjQq9BsVW",
  "key34": "2toT2SxfrxHUFJeChz5LcHvyEfdKjH1MjXM5VsA9tTxACbQBkKgf2RRD4Jmqt8NFXyjBQrbELNSnYctNnmaX9VLM"
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
