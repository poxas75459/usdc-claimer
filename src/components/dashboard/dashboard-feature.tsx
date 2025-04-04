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
    "62W9AruBWCVn7MzZeB7DUjV9bxFKZuDAq967Zna4kBiKXy5RgjuuJA5UYqQMhRXWr7EGNEyiZ4VpXcPD83HzJpbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MMGpJckhDg9NFtKe9bnpho4N6TkCxPCzStUCgz6YrXUq4WtprKgy57jRcW7LMjNeyEFdYGndjXjVbNFevDkvKgn",
  "key1": "3JmCTN4h65CWQGjCNC21hTCideM4vugyocynSsSZ87qUkJbJecPoG1GkuFAzFkyaWrD6bLSTY4LPv8ddiYTaiQtF",
  "key2": "3hui7kiP9wLy8woa3zHuHN8Kv856SFYsekENmrNH6CfPM2f6nGmxaKjgsfbXCf1i8auiAFBkgik5B8naKmmb6KFd",
  "key3": "44u5EPKRFQWQVJh8fs1yjy2CWXMaL5Cmz1XqT5ttS5LKiJNZoofFAnniZftpY4zMBame847y35NoRu4E9yQZ6rgN",
  "key4": "4CoPMSogZbr8t6oKRmTCntEEq9dwNbZmqfPBH2MdatMMYQcFyUyMGjuf33MW5GBxm1V7dirqUFUfBzEHF6WpRFpA",
  "key5": "235uD6ChmUvYfbDVgeW9YGV8ZYMkv1XvjZTEsdtc9u8tUDiXgqfH9hNknJsCHvJua392nBKrtCgvkqNKLiRaGCro",
  "key6": "47LAz38rTs1cLJdf2MM8zep8anxsn5fDhc52N4m8AyWpxb4N398W3gDweicM3aie5eZ3nQVxB74gGjZARMHQi8t8",
  "key7": "5VbMNuQqjycfW4kEzCCQiVPxSk1Wmj8YXdiL2TPUcxXe5MgaUUn5hvbVUNsaiqHVZU2T3xq5zn5nyHkcJxKXHoHN",
  "key8": "4i483rpxpFn1pBZ6HsMVS8sseVenKGph16nx78PVD9yHvGa2aq8YoXVZfvB7bKxnVLB8q2fRsagQdCjvU6pQ7poF",
  "key9": "3Bsga3g1MCqbLhiEBf6SpnXsriJvreSakVRTVAbdzvKa58XNp5wanQGLn1SZSuVn5EUicHiaFVRUZ6XaADkGaNSb",
  "key10": "2rnA8AKK2u7NozXBrqMFa4chSsXoqhmruKkTohqCEZmfXfWErApuB4j3jB7Aryb9T8EZ4k3mjHoQNAUmwFAZW7BA",
  "key11": "2Yv4TdDeGJgKuRRwvwGREp8YRk63wu3eaNy9Fh9Efgwohz6Pisf8CjSBvraresZxH7D3R4rnhAmxSP9huokyoeZ2",
  "key12": "66u129MBwLzvBRAvUS2TtiqPfj972zynNeovY5xyXvEbZDToSvQToGRCURMdPj4yJKNcfRaigzKgn5pi7qt2sVNg",
  "key13": "3T8PaK36G1QFezXBrrbWrMyA5eqSAS8y8nh7MFSpEsTdvVv8hHJPG9uEPHQd48xfcB7XduJ51G9Vs9yvLuQarNmH",
  "key14": "24sTmN48P6CNatWoXGk7kKofVAKFrLKY2uUJnfGYt3ucg65yAYndVE9a7wajAQiEE2FDnwDgryxQyfT5i3siR3PT",
  "key15": "5u6kcBAH4oXXxfkvgRQmyzGJMjC6a8RNPXKEniT3m4NKtPCzkFSeK2mEu3mY34desURbMRqzrPqrvE8Tu7YfsmGz",
  "key16": "5KMP55GC17irtN31vedBon4QV23zZAYHZJ5DPMN7JjbdPCrEks3e1jX9At2ozsFoxStr2ckhSwa1BBkcdxTkYK9u",
  "key17": "57c7tmm3NvQhJ4y9s1bfQ7hhfxEiB8ArqxkY8PkFNYJfAXuJUq9WLzLRmeNmxPkSCCczNvXEpvty2sTWFWeYjQGt",
  "key18": "4VqwnH3CyiMECRpgdapa2p3VKFYpiaE7xWUk9hqh3vSw98cTF2VqUox6hsd2UhAta11f3vT2ocZt7NhoXV4ZV5pq",
  "key19": "sQq9LHCiJaDCxeBHj3ykopF5GakGBNDyKpai875F8eCqdmdJt92ZgXfd2jPCNFfZgJjTPDHQpnj1sDQQQtqg7La",
  "key20": "5d37nqmZpFKL82PBcTPmj7VEzTnjce9NFZAHuh5gobcsRuKJouCRUMcQ6qoDnDfqfXcYTqaLuJCahnDvK7uvANjZ",
  "key21": "2y18arDbPkn4aFRLmU69EL8vcwJr8eXJbqmqw1fxB2bFZzqVT1Vmv28RaTC6Y7J3ctr5M4vfUyB7YZZ1df7cd52b",
  "key22": "5sc2aSkmr43V3nAhFjLrUjXsoBZb1LzzXM4NfN5abHWxAJqpqBbB1vHgo3ZfjkRLiZDM3wDHGEARDb6FMEecHvyu",
  "key23": "4XM5xx6wGqoskzdE38emDJVoWnGh6ANwnM1dmwiGb1zR1V5HU8Ryjh2VcCF3DeXZty36JZ3mMRZUqtHLAvwFsHRt",
  "key24": "3pgP8VmojmQqq9141SgirEZ4LVYoy2cFoN45actiuN1LX69sPtK6JcB1gzB5JTKsdgBvp3cYnLWdCpYAt9eXPpUa",
  "key25": "5jv5vh3b1TQ45cfVUZLkgV6uwuy6oVprvChHDy9jS6YZmL7ZbZVZWVuo3rrc59gTqNroiegKvT78DRnskEeHCYB4",
  "key26": "32RW9vQbQKUZsQwWKRNiR4sPhqcYxo9C1Ka8ACQ6gtmBNsu2j66DR8f77P6FTiFCKtDNsN6hGYTAQjhotPTmi3XD",
  "key27": "2S7GH1N147iDpZabteEDK6gYWX5g5n9dsgTVfBLHRFHGUr4rLN5U2ZyYdwoE5jTGMhzpwG5ccDo6wr4K17X2hTB3",
  "key28": "5M8Gsd7wVhJY6LRRfjUuMrHyXc2cCv5rrLL8bNgjruxXJ2o1hkZb9eiA8rmEXmw29M27zTzPRFvGzNDn9N5BVqGE",
  "key29": "2hnpxaYUnh8Y5VsAy5iTEduxEzKvj26xyCW5Q8T2CmNj86pkfynDG3nTWjtzQqFCL2csRuhXL15Q5U8xVm5U7ySa",
  "key30": "3fGmKtjfSCtRJp2GTpWkTsyWDAGVA221qWhbRtaY5cBEhEUyrGfv2anbNEvj5v8yYfiZkPv7ETJWA87syuy6Udxu",
  "key31": "2D38vRmcpfHTkbVjAVsuStELQAawPdzcn3BWRNDj4ojezQLCNuRc314kRPhuUvJpbPqJqEyruLVj4LP3yvTRawy2",
  "key32": "NTDurokMPEcFAwGBoAVPvqkaVPQSvRFbxyatiT6uUu8HAnfsetBMnPRjj6oi9RTjPVdvJdWxwWuXLBGm8o88r8H",
  "key33": "zsFcmtWXMRstZR3e64PcJZvgD1HArs1eaCWWmTNUKaiFBtopTBxwowv2dKkNFTirWeL9G1RZXw2x3uAVVQ9jZTh",
  "key34": "NT1GV5VjdCxPMun2S67fEycNtrF7EdDNpKfWgwxxHRQrkLyTe5L82dB3iWebWdjii5NCreMmrajRAFpab4L7Qrc"
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
