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
    "3oJWEzCQ3svVBQa67WWg9nM5RqizXbbKHftSmZBarPu8DUiPq82U7pysTBrSzubAwS1SYy9xeg5nJRRi2r4uyXdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N8F2kLex8RpuD5MLNKepyPTtrZEp5jXDPmkZQizeuN9ye6mLtmELahSjzmEHijkhTYGELTfFMqrHjjy451V5iAs",
  "key1": "3CZBEzNTUNnbz5oacCGcA87V4f3mMWQj5E7knyfAyanPRtqVHUB6nvnogyEP65EpyYGmvuAvZyWwtwwwWN9ZQL3Z",
  "key2": "2RGbP7V7CNkAGzvtLxV9xBHN8juosKLQyk39UkuH9dxHSZdTzsbmrNfJ6Px6nLcT1ReGL5gRQZHXixjwA41xcBGh",
  "key3": "qYGA2XA6b6544gLE5UePHdzzivGF9z16VvUGnCtBtxdwqwKAxx3JYWBMaTJ2mzhmiSxJVRopCsSFNviCYjaQR7g",
  "key4": "4C6pvmninfGenu2RYHPdqu7RwBsRkdXbunG4e2zPwiXtUHnaPxyMSuu4L2t99KWkC8HZzxbXqv95gLSDcScfPTBQ",
  "key5": "2tMYt3HyZ9fyApp5RfP95zSN6zseKqj65Kuu3Q1T12xhWV8mDgDptrTYnyEA5E7hZhLsepfU8yfhrB1tdzEqLqSx",
  "key6": "Q3m1jdcvg1TDTnrfMrJ5jog7ML9usGwfTJUy3ys2mDD5nN3yLYLFijPyctroLBnUW3WBRXA9VwAv81Y8zN8uRcd",
  "key7": "65JJ4ghQFvCJKommsk4u2SRCbpvvYUTphqB66onjt3Bz8Q1GsSJudK8sLAx9uwdWHusNz7FKeXbmTvny8Lwzp3w",
  "key8": "mzTxqdBg1WtE5dzjuSCYknmzKoxAA5sTMpcwbpiLL7YwoVRYReLbjfSuPmBD7EKPtdZK16tTAuvV3hEkLMg6uvr",
  "key9": "2zECrKvFQtRyBjMSybwbLHQsFkC3yfSBx9sHQDBNxZaTZn8tNVErCuFJChqJkEeZMFyaMbQkYMJ9TrdMLKCfUvSQ",
  "key10": "4eNEVKZ1DootgSSgR8Y1j9geAsXhgKuvtEmVpjLrKbdDcw76aRfAhWLJsyv4bN9giVD9DaCTsreKVUQfvbGSCgnB",
  "key11": "bF3ht7cmPXeHvP7eZVfKuunMshua5tB3pEL4hBG2Dfu9HbthskCY3QEkB8Nah1UwNYajUwMfB2zegLHAyvriPUu",
  "key12": "3njWbX5V4e3RBe7TkcukhiY14FxqZjdvQ57vL2UYTP4Rrxyh85Bvc1ixknAbn5B9v5DTH1q3CeboEW1XK4KRZwyQ",
  "key13": "4j1TFfgB917FKLsoqxdRBiKDR2o1XFbsATdZ75CUgHHgjWYLbLYuapywkNpZiXoaSbd8uaCJqFCP45WSqisZuzRX",
  "key14": "4gByJ1Qn5MajpEbEXBDuEet8c1Huup4qvJ9rAt4TtTbKLKSPvynY4HeoPUSbP92tsevUP8AX4vNnPVnScyzCBSTs",
  "key15": "52UVDW28fryWRfQmVMe21nifzaGsbemveciLE7h56QPrnJv9c6m8R1PqdwsjFDc7ntJyThcrUvku6uydyEgN86fm",
  "key16": "a8eN1CTfpL4JtYnV1ffe5FocUYnSrg3WecpcsK5np47fUyt48rucD4nchHARuCaRmuqLVWYb5RZ2yz96WKnbCo6",
  "key17": "ag89Qj6R3rQy7rQW6deAaepUqteTjK8xpqJgVhU9eSXJF9Nv2gU3LGwPzvyXRpZwbSXjqoCsnnBhEYdrtvBjYTC",
  "key18": "46JPqMLYDjU3CuK7Bwb76bhF1SsfzeAVrLdkAtdK9pjVCy4DEKUpByYxyxRH3ybNpR33bhU2bFK2DFYTE7D65Ye3",
  "key19": "3DQZqLYzLpRbN5f2xieh8ZjSNyo7ZxTkPuieXTs9Z5uVD1cLyCtBXL3YVfVdwdxtkT8YaQ32pNQBsTRAjrnvYUK6",
  "key20": "5RXnrRabhu4bduNTPYC8kueUQMBRKjSRZ7qbd2i9zpfPgN1udVVTi599TomdbzQf6gPcwatsEE4wmwEvkYY8QRH1",
  "key21": "SMKnJ9xmbuackcq8VJ9DEUnAger9KcXCB7uUK9xv4tSESV57EkySzC4LPJYD3HrenP5LMsH2uMEneTTL4C9iVFQ",
  "key22": "5YAvDE88NExKpghdihj1BjgRocfZHfWD96sXbbvzT6DmpFgehCwKzM7dDKAgBmtB71985WepjeRg62PiE1M7hVQx",
  "key23": "2N4rH29uauFbV4wkXaNLTfWSJV4G1Gj68TM2h6JANwWsQ85zcKHU7nLgYtkmn3es4aCgDVUXGwpFb9fuKRuAojp9",
  "key24": "Ccvo7jDkr3cbmcpof4dkKRUqkh8Gbmy6uTZYpGCazNGe2oQbYe1WvD8uzv6kpwkzKJzS848RhT7nc9MWET1fYKn",
  "key25": "4MnBaGpn6cBoE7Wg5Z55SKuoQVbNqPNdPaEfynh8De9Se7q2a9atvsxFZ4M9HBFq277eS163TiNFXnmNUqhmAzUD",
  "key26": "2JEMELFqhoysYkwzNGiDx6KUs6xb82Wp3JsSMC9KpxnpRM9RsRUs6NhvmG42WFvyQvFSNCWYPmTg3xErePnaEWAe"
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
