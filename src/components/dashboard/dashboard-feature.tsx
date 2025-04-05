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
    "2TonQJy4iuXqFwKzMRhucvpvxRNH9LmkqDP6bEreTkyhk7zUa2fcCmy62rtn4hLnYywbNfYAPQuqp8mKduorr4i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hy786o1NbdnH9cWxbJU8BAkz6gFtRLktbKntgdX9JugpQ5nz3joNZGF82nvZReQKMg9EjqRhMFhqo2E934mUFqU",
  "key1": "4WDzHdMbcpu7yfueKFs1AVDmUgVwyjkzKxpcmaQTYmgV8nccAm3cAkdgeZnoPAtnFg8JBE35Tw9556b4A2qUpvqk",
  "key2": "61a9zngbYFab4LzmyzAA6T3e53Q4S9uHwAsuSznkZx9Kt8AUsHs8kEBTRmpsdHJ2YVmSXSFkbnHBrkE6vSX1icNU",
  "key3": "3MvFyJkFpgx6HHUocEY8mfSCXmmEt1ndjbL2Q8uA4Lo5sf8uuufssrEoHaFACGW8THX5JY5LQs8o6trKCZ6noTiB",
  "key4": "4QM8yA7vDP16NTMbLgnFUBgvDsYZeyTazKQqm19BxqtJ3aEAHc1stwaZixRrAaGbYBqgbsPctXrVrniqtsTezfyS",
  "key5": "5YxRcnjoenRcbpG9kVNqzgqGmFUpWT1hN9VVe6Xf7yfeYwnFqGVgEutc6d7fC5QSgjtu4RvdgHVeUiTZ8FsnJ3rZ",
  "key6": "5pi925Ue39RQJQaAyJt2qPrfDUSdtswm22N5eN1hymexGmDcLkiVfETXAERDPA2kmYH468Qm4e6e94q1fmDyL7DF",
  "key7": "5LW955rQtAPXUmjoN6FE1b3UK4Wp7Deq8R55hx2ehhfiW1Wj1a6AD8EURkgf6NVJzTDbthxEKo6Fm4qTLFpoivtN",
  "key8": "2wgG1ZLoRjonn2sD96cpo78vZqDh1QYDSD7qKCz38WBfm9soSQTGRdDQ1iV88s4KEqaPdt6KiB9XQovXcSmtiHqo",
  "key9": "4DPhRssrNiegJJSEHqnQKeeVPfCKhiUDhMA1zp5mBukKbvRAmXJjujPCjsvobrb1Yahs344H2JVuwgiN4D9HAee6",
  "key10": "5jnksRVNNk7W5BxWNmv5DtxNQdoHFUo27aKMLGi8otM7eoipaeZdXLd8UtHgALcvWhCsFJb2yYZmFLqbG9GU9yQk",
  "key11": "3ufgaRFVCuLWikkcuB2yL1SZtD3Je19AFhkBmAzFiaxAYmyc64p3Kdp8Hok5Y2a2r93YfXf7AvG35yGWwaBaSKFs",
  "key12": "4BNme73j6jNqbMnwCNsn8KtXbHWk4WPp1c79WMnbuMbWnjPSu4HCS3QyjJBTjWYC38pWm8fjg1Dnfpi2MVXRKmWq",
  "key13": "oLZuFchtZMyBF7FsfQqnwkjFiuHbucT265giMV1Ns7Noi76K4GwBtoRjcY5Vx1nU2uf974RbzbdpCyvQU9FyXNk",
  "key14": "5cGka2k7DGx72JKt4EEtLvsfztYxMHaQJR6VKFJo46yWC3cp2466R4frAVWbi91WNndVThLvFNJwmjixBcXGBXxJ",
  "key15": "58kZuuuMwo8AVuUY9NFx8ke5WQ9bpeRisfRTuPNfn5hUk5gFoBg36UbcZnjLCpyKVq7ebxGPT1bgm3LFofoTtExw",
  "key16": "SLd49yRWwfY6u8U4hqsqVEaUkRgjCHdHqFdEztXzjY3tqvjnYKaU8YkAuPGBpeNSBGzp14MSBzodsPjMDhbMrMh",
  "key17": "34NkA7KRb4ikazf7tTazH8giyUq4hn7UaMoZSJifbyeJX6XwptfFQqKvnaPRfMe8ufDjmV5VbhpnHyuLLxoSJsRj",
  "key18": "63wGfqZ7cA4CVjCYAVnvefxWHVSbjpSBTtoNkFnvfPa5gsbf3KJTDw6mnbcKNLBr6W4X53qwqiNep9pLX4tApzYG",
  "key19": "KrNFrzJfvkqyE2jzDmx5ZHLhUa2nBaWDpPBwu9JW5ZiEj1YKJ6s5FRvMPSLDhR41imECiwwcZwDKb2ty6FLzJGD",
  "key20": "3UQSgrxi21GZ582Kn3hxt4RFJEmP2Wu3SsE5q8whou4Bysi7FbaBgKwMVWMJbLBgn9neyeiwUXzv4XTUhEtZV9CE",
  "key21": "LwPcXoa3T7WBMpTGaTv9odt23XZnKPVnv7nzmYMgjHXcsW5zM1dPYvWhVeeLs82t2rcJJvKmSXSeebnKMKimNyq",
  "key22": "2L2SEtw1Bd7hcp8Gotjg9q3FhuT9dMA9ikRzLgNQMXRR7WxSUiLva22pYWXaqJRX9XJ7epptdy2RKVecrKuXGsSh",
  "key23": "3bjAAC2i7k79PArMqto78Sdvckzt6vtJHCiUk47AXp8esdqjEWxZPYw577SiYoxf6fdFpyyMhKpRyGs6f2bgdpuf",
  "key24": "2yqCUdbFHLCrBCL6rNSapGxY8nWKBjtBtoHvUsEnbKqK4qPaHxwiyBepj2hsLPenJKfsW62yqHLqwc2rrBHsGpE6",
  "key25": "5fGDY7c9EW6UpPbBmMmGtJDvLD6azi4R5fPTMbRCuQN1QHeQrQhiJPwHNbz3A6A1qB4pqs143L4Rohn6sxyp3JF",
  "key26": "2MtdXsrCSWphjT8KRwVBSxX3t9PRVWA8NgCraHY13hHHk6JgzToJbWWSL4ixkadPxGCA9rd1xB4mQHkk6N26LyFA",
  "key27": "4W25JagodeEr5LXAJbjXwpU37B1v5VmfGBib8WnHHGVS5WWCeDgpa4cRQxxuQuiriBvjrfg17uXPPCM93BbC8k9u",
  "key28": "48SENMyj5gjJVcsV7dLkARhwPp89fxBcY75e78M9WHRpM6GvkWMX5wLvBZ1SZQxejCnBJqSyedu7JuimD7iV8cSK",
  "key29": "4TxjSwC6i8qaeV8QKpWgZxnqcVTWbkM2u5N3UdVEsaAF1G6bRNMgLgyKoEyrALwsZ3CjYsQg94HaCbPVEsogNKAA",
  "key30": "5Bq7msKUXQ7dtuApstHNA63xqihdzRoFnKJonMuADgjFHDJbg3QRBGx4U9GS41UbDE1HA1KX2YsoNsyQZaZHLpXX",
  "key31": "4LvQeX2U7onbFHfQNURvcbYDN3zExMpCsi919eLqu51BZGHvU9sqibWXEiPQcyYj3kwQoRSVeLzk5SpTnV2qAaoH",
  "key32": "2nXxRqQKgwZi6wSh9LEuBzZV6pLYDMviuk2hqhxtRccTxHYQwFVSuFVaYaf487igrX6MVU4st5q132TNqCtd1y1j",
  "key33": "5G2PUbDGtuYcKwGRbZZn6NgdaDezexAKU7yqRsaPvJkkFdM369hcPPXMKZR2rURaSn2SWyGoSrMpCfuTFyBUa828"
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
