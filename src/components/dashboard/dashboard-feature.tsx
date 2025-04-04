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
    "5zuT8TbASPwe9zAednr5AeWmx8soDbsL3Zj8JdrqxqoQHiajqUEnZaSKezBqVF75QJfkoezbwqtNiKTJQWmZbD66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnQXENwDmCKvdsrP9rXKXLvC2Xox8qgyzupfNhwV6b2aBE4xTUgKnwjxbeNeB5JVBMuSTTdcgvicVZoYNzvqz5X",
  "key1": "MWCY76eFqWvi6dsXXNEatq4GaatjjSgc6dTrqgyya1WpjhqdVsuA3TeJKA7HzeP9MpRtLZvqsxS8YxPdb8MHQTg",
  "key2": "2Z6WUUSwwucX65LzpMHEkPqbFGBBDcNQVApc577vxJfYQsv1T1G4wTFktGjUXsX67kES9wZAWDwCeJCgJbUKoTbQ",
  "key3": "2ZxE1HRUNPt8WqBoYMQ9Xy9tjbtcdDYFRQntAVBmbfjthZSgPCFGHi9NkZNajpov4XzcwiDwy2ai4MSeSq7rXRM9",
  "key4": "5796syNZLjtAY4wGd3HC5K1XQNvKezQxh6JrxbFmWFdyqtjykDBq9vaJHXEAMcNeXTXf1w4EQpvBw41U4K7283WZ",
  "key5": "5GCqgCMzLG3Tfpchz7R3WgPrSUbqxmh2LEc9xzQzkUcqSMps4H2KoHKAjcCZ74y39Ut9LRGKS3yGcWRCkkLVdHV9",
  "key6": "2yz27bdBvxCBi5MWDRNqYXU62Z4unD9aVWLeAHee33XvHBbxicSyQhXb9P6qv28TLnDCwQ33gc6QpAQLvkhzjXEu",
  "key7": "j8QNLFx7ZVSphuxQebs969LBNxvUkvcMio5oRadimMz1bJepLn8eYwoQrWTbHQTfittKFB2g21hkSyMEsusA43o",
  "key8": "3GHQbEAnnR5hxnyHnCb1tgqeKWfduSZ4jc4UUt75J9tEY71m9cyAuanAWDk2K1yV9rpE7UokZZCWE8sUb8gHmZZd",
  "key9": "3vQpFjMqaCSQcTqqYroUWBfTZPmfhYakUeGRkYmJZbYkbomk3mNzKN5sSBSMrWnGhDG9fg1EfAGhDpNrFfQiHrjX",
  "key10": "3hzFGLEnQahrVYNMRjqpd4fx67DfzcRmwUyU3rW2NvDgnwM2QAZPJ8YbWadGuE396kYefSvwmpChP1U8yf35GTSb",
  "key11": "3SgwVYmuGzgyoW99Ji2Rb5YtJasr5Ks3tDkJFXXWJ5FggXm6bEDxCcZPfPSV4Jx37eaVWyf9j16m89b93TPBQMxA",
  "key12": "2CeToueGhoy6Wf7rrpuue19hzKC3ZU9JPP57Yd4bmt8X2noFtTrSKxJ4KTFSn2ZYi6Q9b1jvmC9rDpZKgzV5onTh",
  "key13": "qL89ghM9scGhm2DyD9iN5j546eEZzQ5v1WbkKzCchyrDknusdXsfaKmMwPqQc67FswQ66fWJsoLQ5WLZawi64Kf",
  "key14": "o32vVBqfMXGf7JwSADsohyCYHRQs8XzWiw7Dy1pQDPzGhzPMez6ime1VWZR4Qt3oY6KYaM46SGBUnw218VShaE7",
  "key15": "5K3q5HoaNe9taXc3qMQBZ5YQ9F2c6vh9HrfyPvDxch2Az4MpTWbWnfcCWBCKrLPPWWFvxVC4hc6hmHbxVqNG6EpM",
  "key16": "GkCJiq3eL2y9efeiyaJw8Bosgr5sYb61M7FvMvu24btasBwtv5jT1ZouPFqaTeWJvRuzH4pXnhPuJ54JrP2Evfm",
  "key17": "jEEGJnimGP98sRbWSMk9fFqXxtukzJzoTM2R4hMFezBAU2TpFbYMnhaZUwpE8sNjUikKjVbZmoB3rXejS3pAuVF",
  "key18": "4TkP1a8SyaZ3dPzSbmqaMXZXPFamq8nHv8wVjoZSRs7UNMst6UQR2mPSwmKE1AVbkjpq3EQNGgjK8A6abThztMpz",
  "key19": "3TKsQtDFCi7NHtgjDeGiuYQR1MXQcD1anBLdzKoGd1sjzAqi2rBgZ9kwGZMpeTjoJb6jzLVLUkpM3FPJEcuTrjnx",
  "key20": "3R3UgV1aWCr3RgoX1KBN7ML68r34HZGf8EDJTqtgQZG4jWKvKtx5Zg21vbyZqzWpEf3Ux8vKXPTKk1cYkUy2cxge",
  "key21": "zjMWcQ4ZdXHDm3DWwAT5652TdFcDp5xmHtjnuLV6nYuyY2gBZBemC16ZFHhgyZnEbGEVXDM3SLTmb1bdhsmbL4P",
  "key22": "5xrZQaeqi2WFiegQPBsxVxF1N4RCUqJZfFu8pdnGNhtYcSxnSqXSeD2fqJ2Hpkb3uKgteupG51r27V9haF2xqzmj",
  "key23": "3X3yYU4sc7J9f5qGvpF6RYdAeaa9Wmu1A1kn7DxLxY4gPWDpCFZBifNYjsASnVvX4j5ryQAVLEtoMeWtxMQ97GbR",
  "key24": "47YEWfDS26tKHjciUY2LAMDisiDDs5P66v3BgCEQq5KpqxuhsScRHeh84eeYcJhVw5CZfdr9KFfagfmAd4jKBSbm",
  "key25": "4QTi5WmGUnePTuJYp8Y516sXcdxH1FKJJhAUEY39PtaW3W8y1DhSiAkjCGoQK7jDpRNw9PuJjTCYbku8bZ4xTdHD",
  "key26": "28ZWnLtBKyLP1LDN3CoBFnwEQaBZp5sJdhtGubwGgTCE5W7kxaAgJmQguz7ix5AMyKNC97NMP4Gb96rD6i9KuU4x",
  "key27": "eahhU5PhvCL764XmtVoSQE8Jb6WheT8V378PUsUcBzs5GU2WBLed2L4WhhAwY8wnAqsW3qp3Z3SJ1W5982MhuLi",
  "key28": "Un7h7Z2CJ7edUA735VcUcUxvJCpNSLk2sKnuVMkcBLLfjpJvuSQ8d6MUx7QqNuV5fA8kjnzuufDqAmed45d9kiW",
  "key29": "32BtT6k7EtvPofABc8ozTy2mdkxh1sLhSp8mvSwbAmV3FkavfZrt8EwqnZCzQwExuejoaZBhBqknxwtQmFqpFk6k",
  "key30": "wc2KtJyDP2eC6MTgR1wodVXSuk1qQk51AwBsZStMbG1RQ1dw9WotbQmAMFpzPJKmvAuRKyG18PSHw2XC9pJwZ6o",
  "key31": "BfuRbYD7Re8cbphR2sgXu6BjuHA5rz8KQDp2BQPCspcVtzNKnj8tFZcP9JW77HAzuJ82uWZFoJ422qnyrcLx15V",
  "key32": "a5KsVZQRXfYTcYE4rErH31qZgrswh17HECh8pMWADmD8azfm54tZKeva8o92Hxk66r4Sk4ULST7tpCWHTznm2bD",
  "key33": "nfNKPmwkFUR81B9B2XMCp4krDy1kerB9CeeFKYSANkc7H8JwhgJD21e1GkrYFnxcp3puG4rxuvydMHDJgWn7RGc",
  "key34": "3jLX3tdFYXtKuQRr9nFmvS14QYwxRo8W2LEbJyEKezBhZSWFBjtANvzcXWPX1PXkLxcTuCU767eKTyHDdbStGnW3",
  "key35": "Thxnd2mdWpSCm4V47LFajfM2gtszRdvGx2EDR6wBVb7mnZuSGZZVNA9dG1kM91mL7QsoKMh5VwTU3xtMqDicDnT",
  "key36": "rCmQ4vPyu2bcPvthBLofVs9X7WCtd3DKbAig2iA5zhoxmWUd7Rc9KKtT3xrGXdnAAQut6pMx24wEzYqjs5Jfv1j",
  "key37": "2ChGciQRmt2DiewN7TDmTVVtfXu8jUNXqy3veYGmugAiFYLej4MKDjaUHuckuDAgemn9RJJCE6AbTtyKggJDRm2e",
  "key38": "5otpzi1RtTXiE8tpAS6UoAzYQ7eunZVCHGUFAbqPdN76dUfYxXS8jhCqLqoRvEf5Cijcw7Lpn5RaUdLonZ6f5JrL",
  "key39": "5bjK6sYQfWUp7kTeCzkA94W4f6na34vVb4Te59Vbj3cENbAGQsQPabHLKe7H4SZQdDb3Sjg17shrm2Njc8i3czhs",
  "key40": "25AuDYpBAgapBdVzhgbh4tUJsTP8PJ88rD5vWKoqFFkarMi1Cu2ScapJxKYF7JZf781GW4zbm4pYxijKgiDzzdCz",
  "key41": "4bmqkY9LcjAa8FYKS1TWuLUcFECpSko9XiaCHAoF1HTkAwx4fzrqzFTW4hFcH3jVp2aB3jHcqAqt1tVawJyjCAYT"
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
