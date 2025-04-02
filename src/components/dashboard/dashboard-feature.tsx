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
    "3R9LVCeyCKrkC7T7mUwjfRUryKhfyga7DDTSVK87KVo9ZxLSKcmz7yH56C5QFUyN1MjTJxy4nubdAVno8zJEpzb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooHNeWRycJqembctGugSWgmmX3WtboYPQsbGfq61Jq9JWiZSFJPucMuMyvuWboPg4GWLwq6FKea5fevPM8YaGgd",
  "key1": "2cc9XgDoHqoVcRY2LzHXD9mzRgX4ipWxbiuW8iyft2Uqz9kQKtZE2dMtLefhMaCCNLw2wfXMBnTeCAKW4QRxzCfV",
  "key2": "4dn5N7aA2uFREZ4sK9iv5QWz63ACKpt49oC2VT36eUqPZNkVmnnJVK4Y8zMTB9rRiw1x9RNFLvBncTB2sksw8cBW",
  "key3": "xJdGacpuVxxvzHEReLi9hMotZufkzPJgPVwcGNtvnfNAEiCEoSm1STcNXNEX3VEYoZYxjPUJsAwLgopZNKgz6BS",
  "key4": "5TAWv8PmuXCCChK4y96wXp7QZmDZnN1QsrvrxoocEmC2LPyp2M15Rgs3UJjRRYTzV4h4RqZiQCYiyy7wznzqNDoc",
  "key5": "EFMbrPyCZptt4CBrWX9RawpeiAT4c91NT7xtksvsUPRchL1iwtvJx6xvPHreiFu8m9ERGwnPjD2gVUUUVc26YBW",
  "key6": "5E4aPas881b9UNSLQSharaBSrfyM3aqexEi7UaejdH11dGqh4A6yzyvcKHo1KfxMF8eehGpZvMWBtBEnf7dhWXGD",
  "key7": "3okQDdwLkYtZcNvmF8j7VrXgsVmrgHeq9xD14hCEnhFgk74CSt9Uy6HM5gCFey5dbKrT3BiJ5mXqunfiiT4hKRYd",
  "key8": "2D5LikQpXuKV8pdfRkAedYafP5eKdDLEVox9Hvu1kSpe64EG1n8LePr36rwWNwJPbmsmHGv7bYe65FXhURE1ukoK",
  "key9": "2JmhRMe6VrVvnUeuQBafLFDYArysehz7dhLUdS8aN1pok4JVD2ZcmHun3zsWKk5RxWX8xbh8VyYVDAWC2HCHC2iy",
  "key10": "3LS1pTpSwAxem2nbpDAJNm46RRhNdhKzJ9qMC4DKwaxSz5gH4AJFXB4eFw58GY3WnE5vazVZnaNSnk7nxRGYsN2w",
  "key11": "4qjzWBZsRmhe6jnkW5tKLgRvoJPw3vgJyYkpM6eGRFxdwY2VDpMKvwa94oKvEnHrSHCsBNCsA6Lx9PX49iusUCuu",
  "key12": "c5kDzCcVeb16ZWYk2NcquJ686H8jUxAk2jTUzU89EktPwLRCBjASEPMRFoeKSHBBmbcbnF1GpKdahXcMLQ4rf67",
  "key13": "4PR2keJuknnQQY2A64mRDiJYbBfjGG7id7b3ocU3SB6ZoikPVkvBMb1mn28HkWmYfnzCp9E77uYwWrxsPaZuuxdg",
  "key14": "44SPK998Kwbr89nKynYFSNiPHv2nuzMJjVWxPf1k1efVSpVQo9soXUjFaN1HVx57BMyeLtkago2FzVEcn2R4GP8G",
  "key15": "4RsWALQFZ8PjDZDNQ7SGuP5T39YA4P1t23CP9AuRyc9Z1BAC76KqtRo5kMRryBMxMZxvYXJoNBAcrXj9QwpYH79D",
  "key16": "2pzyDNC613D4T6BhsWBSeaU9q7f8792JkWMSWzRZKCSMoRyyfFUGcCLojwNgWQHnp918rNhXKK5GWFcw89NPSXG9",
  "key17": "43FFA5dshZ1VVWiS2ApNti9DA7FxG3MQiN5fKHbowLs1iJeFDALGgzwaGGHpmSuLuFmTPrmAUCxJYZKtegLftAbn",
  "key18": "5j9pWH8SoZuf62bZ1jNcQCrG1x5henXPSYTEa3oWC1zU3pR8bkDxRxcuptXyAYvcdSfJfBfiP9Ka3gjTz6oszWSA",
  "key19": "6686bJxv2NbRLyNYof58NS1qaLm1wFts7GPsE5f4JkBnFjDKQ9GHT4vCFaCKJoF3Vx8b4i3LKpG1ARK9DGjL8Lek",
  "key20": "49WCAY6bHuFgPd2V8dh8Pwp5ywo8ptG4LX8GddSetZ8SigZ7kHcD8uyiKHi649frPBfqobN9rKr2hTxTCdQsXYSS",
  "key21": "4BFpXvy3tTWtfF2N3XRk9igkffQmHstQpPW5BQr2vy7GUDkhhnkE1m5hrikRpDXeCW4LjJS1ES1qvAfxrHjM6mT4",
  "key22": "2PYg2Yen6SP65X7Fy8tRUhGNQ7xLXRFGEFC1JgUPEjBCpkDPgWGodwJAZAdfXgNMuVGzbS9G4xromQdpqx92YVmA",
  "key23": "1B9iruJC82agvQmxA2znd2K6xzx4FNNnmdwnTc4EVAyZUEdCC7Bxapu7V6zo7NRY9CWTUdqosjYxbVdeHCEwMpZ",
  "key24": "4inygViGQAAmcoY84uc1xpsAPJwnQkPFAjXqdaoKRfoNx5Xy9Ba8M6YZ7D3Y8JaHt1dzmZFHDaaRv4fTSHuGdUpT",
  "key25": "2dwxcenff9LihBxTmk2fLgjWbscnU7uN2q5rex9EJqEpxFQWhCzSa4D77pdr1fepW66Ee2PDzrJTXpr8yMhWtYi4",
  "key26": "5c6X4da9D6h1WUwQEUHD5WXznkF2jkb9esYJKR48B3GyFYfWxkm9KBB3Xq1F93QBFZDQ8VH99bcHb3HWrJTND1uL",
  "key27": "RBRpAk2Kyj2qTJ4HBVLMxKsMRYEcnEDj3w6zFiiij5nSQypLWfVFGRgT4uUTYQ3fZWgbhCwWtYttD167UbeS8k6",
  "key28": "3DQP9U91y5dhF1s58TXbHE2V3fvnGVQDWwofLxRJUAsx5fyLVdCDyhHkVeem2qobyc5zUNoBXHKwVsu64fCecz6o",
  "key29": "jDGFhuEmUqgKtr4SDrTvHMPSJaaogrRGrUoFbizqwznh7C8yumRZt1QbWmh1gzZMukKZ59Wgq4V3FvuCAmYB9H4",
  "key30": "Yr13EGD2bfkZQiSLwbTGja4MaZDzRAzb4p8vHFSCAmpM7NNWhY26vwLNCtsYJ9CGidCj3dQGTHGepSyKtKigkx2",
  "key31": "4yqmh8X53HPnJgnYm3VnuDoS9MhpkZmqEm1TqqBC5QPeo3b84Btqs3mqjtXx2dVutcYCwPsJedqz9sWyN7mL9ApT",
  "key32": "3N7RKknH7dAinsVhdbrSN8TgtMcR1oN1gAjvA2mJwjy7AkqWU2kYnes5TVy2B5uw2F3FytcgUpcHteZvade9WZvt",
  "key33": "32FD3x5VTLtzZgfFewULbdeUsAyVeouzXuVb7YBxQ2CdQYgy2zGifWjzUQmqoTKmWhPNZaqsW81J8FX1RZ4wKify",
  "key34": "54WFNFkdyEjpbPQeKnoUp5ScWvXAWkpz7crW9zxp6yLgb8jwx9CHXK179dzEvpwwELpRyjrQAbTMoDfGJQou5p8h",
  "key35": "4geDvTHcLnJaggH67FNCP24ZY29fPspaYKgox1tqLFwj5d7sGe7yLTmnLgV9TgRDExjVYGzW9YVdQfj3e6CrFX9K",
  "key36": "yhnDmi9UoybZr1u2vb9RB6To534nyDDxS7V1SGz8HUjNQPjCQ6eEsBrLr9GK8K7E9AYikSvaHePShFQvNkvHeDi"
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
