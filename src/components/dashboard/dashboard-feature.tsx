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
    "WQze2RbzhAPDdnTTHvpZuyVikccJoxDLLZeW6cFtapVJoCQqMNSaBdkLu4eDquG5Ce64xDAZiV2ATzW29mvoHZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3NpNqTUtDz7LYQrA7f6QbyNxetPJnmH7Q7HGHzRj3yVB6eoBmLHxPGuPKfjeWjjtbmNbZpczYqJbZC1GwPWRUw",
  "key1": "48KcnzHv7uhkjDWcsVmLcwWRj3Eh7PcNfyWfNrTwBzQiSWMthRaoFybXNvF93R2eX9i5JooQ45YwWYWfXWrUhgUH",
  "key2": "CGxomukf4aCgDjKB1g2PankPCbcfBKi6EMZUjsXzn2EBmnSq17WRvRMy6Eia7pjsaA8Zx9VWBJ2rBLVgoQczN6j",
  "key3": "2g7AccfjAj5XVPJvqQLUk7ogaVyxc4zU5nr4yD38ohFFn4SCs4pHWXNU1FJJHhdSqP6NwL1kCYWNDaZfjXXpk6WJ",
  "key4": "5mDUaPyF8t9ib8qXuNELF3TdDRjrdjWg6M91ehT17THXz985QLqV1i8BYZFPupELaGkEKNueqX1WpxKJDdtBGNhk",
  "key5": "d8Ns2Y6KU2Q6Zap1Q7Q1KRKkPKVHoLrcBd928ry6jjVxj8owWdomNVVLHXf9Nb25zBaHYLGvzhk2qpDZoJAAmCX",
  "key6": "EUJdpbYYvmPLyAYnQxecCgEFMhR8XMCPKVXUxHC7JZZDpHPx8GC9xysvAKZBy7bbsNpXJxfqYd5XQ5FHhZb1kNN",
  "key7": "47rqEYfz9NYdH1PnjM2LhhQH2zmTtkhyr985BChGhqcGdf2UaNqLmm5U5s5RtQ5QeNLxYhFc5btYx1fiUyghCZ9u",
  "key8": "5Kbh4K7VVBR8zyfJ8fWNzDYYFrVBGFfG3zjDbLngPm6DGMV4UgShy2waDVJDco76HpkjFhy7qoeh9KkkGjV3dErn",
  "key9": "4K6r2VExt4NV9eUD2sGL1KBF1yzCGT3y5xJDMdfeYBMuxEZAxBGxe4WD4rPgcwrj9aakRLfuTmrHTxS2QwMEV7nt",
  "key10": "bYNBjPe8A1PRxWb1Zrg4upiZJ1gF4FZBq6KCCNsPyh5hvxfWV19C4e4EUdxA9PjzByEx92v381jitaQu4HHhw8y",
  "key11": "rEywkMp2Hrb2EQDXcuScfrfhdfPhiq4BS6RMHuMKrbiCUcYDeurBKgSTKpTgzgEPEXJPh3QrWWenxS2mBc7UJzw",
  "key12": "3uw1bsL7WEKrBRuigdbYzhsdMjWr3Pngqe7tZkCdkYYhk58xsFBMVy2F81WbN5b61a42PP7pkf9ZPuffCjQy2zHM",
  "key13": "Ak6xZGZCxp6qD8SysRrihPaLMErpXGpiqkpotW86E3nqfQ7sLZfnUU7KeKLr2jAGVwG76PMafEK6pCBsuqqsyqj",
  "key14": "2ohg8iHNVAfTkNxn1vdiBKcYtCJZ2FwGE1KHoYU27mDP7R53db3oBAd9d1swHH4PnzZ8ELTdaGVbV5TELRdifGtV",
  "key15": "pv9Eq2ywZaD6qNTgHXV3fuMzcsJSmBMY5RrgJqvVs6fvVGHQQFBvcEKBSHWuHhBsiZbzkxf3JYZeEnXXJ21Bb2x",
  "key16": "65uR673GTFWJBmSaKo6734P4Z7tc9zYHicvzPAJDQYC95wxxUP3YNeSzKbLCKfhHPeQ9JFd18F7w4pesdmUAnB4J",
  "key17": "48rLVCSPe3edSZVB1V2ndyHcwJ9mZRpwigoyHFHYZdmRKyWDkd3WYhhgvqbDpKF79xmKj91pxK5YgkNW7NVFXiHo",
  "key18": "xYVjR2655DEEULx6PJfSy6qyLtZGtfkmw4swKce4Qqnf5iUPE4YDV1bXqSmTnYTQC5eYCJdgXmSB2QEoFto5rkB",
  "key19": "2wpv1uU9RAA8WMix6csb7F5Kvrp3vzXT3GW5Saici14r1FptjSHLhN2sfN122qeFwQJMCZZnok3jFwp29qUirtu6",
  "key20": "5GpvE56utqeJw5uoVrxCFZ3usZ7ztYivEAktmTMhqjbXFSepicMSAzQqmXEE6Jmq7VMGYnM6h9VYee4Ym1iAFCZq",
  "key21": "3aUoT3ck7gEKkPtAPuQ68LHfa1XXELQ8zv7Mdg1sK96fZs6BudU1akavED7JsrpEdy3Bh9fjv4cjDw2ReZ37w9pY",
  "key22": "4rJm3KU62wzrcV6M1zVFMsrfSLG5nCVx8upUReh3uDGpU6ebduB7HXCD3TXuwPsadgmGJY53A3iPWPjVZryaAUMY",
  "key23": "51xTwJreJoAQHva1bTyW8JJh6nrWvwRrZAbBbyLRwPaoqbfFm8qZpCFYv2me2hswExk6KQTVS4HDZQYqZbz7dt8a",
  "key24": "4uMYyxVGdnMxgxFfABMrCGYveSYLnx3g4RWrRspd6uNeg4L42yUbVPQLMuGvYdt6ZAukxmuBS37QkGzZvmF5P26y",
  "key25": "m6CmHEgkBKRAk6RTdTNYab9HKpWKBPYR9nfjXBWBnzpf8oDifuBAHYSMLNcofLJMiDpuZQNvBjknv2qMp1ZtjJh",
  "key26": "2t5nohErAxbUPdxruR79B9XYrmLoy6ud37hjkiZNQx1t8182SUqzHAHFy1bhXVVG41rEE8y4UhWsRWGcBF87HjGg",
  "key27": "4sNeCbhR1xZWB2bu5su24WzCTAmXR6QYnc4MDvM2q5wueEnJDm9DkyDpKzZmKWbrLYM5vQ9WUuYV8STHsDnuCa3v",
  "key28": "3sDqgoaqYXFmp8YVhLKNi5AiyDhPUsZYq7cCvWV3a4oxPVB8cyyeiXNanKcXFsjzeduL7KGF7qctX2aWyQLsBS94",
  "key29": "wvEd4r4kPpfhVCQQDgvaTD1yn1xyi5RwfeSq2CvQXXuxFqa6SfwGL5xvXm9YY2Wcqji382bFS922JSwYHpj5i9W",
  "key30": "3GAkmrGtUZMf74AorM1kBwUiJMbhNDUZ8JLX3XTDdF12nshKgooARKvunuWycNvBaSPyk1tAw38AC7tS7ZBuovVq",
  "key31": "28FSi5ex3gSGQjXH81BSxMZLJRgR4zCaNNs1PywevdBFjPzgNP5xEfAUAmpJsEfmnC7THuTVvEieheNnR8Un8mvH"
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
