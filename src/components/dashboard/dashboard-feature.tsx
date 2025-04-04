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
    "486n3PysThSStJ5Ahwksc9LrLztH2h3hAkf36Kny1miCeQGsHgrd2gsV83RXyHMaeezeTgmzHGSw3EmdpC1LxgMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrG3pDEh2eTQ4m2Y8KHBYThH3HVpqAzswa7AkaDbD6n99xT1t7rDppHsNRxKsqRFt6ZyZRExeiQ9pdoSjkhyWuF",
  "key1": "393p16GQ82o3yF8nHpQm8zasvGFt92eTacCtjspwQ6uL5jRhAqm6dZzELiostLkBVdJWBh4oqjU3wxQMfSiVMXBD",
  "key2": "4ieKnn1zRBTvuxTnYnyrvF3tCAc2zrbyrDZ29yFh6fUC1BbfNojK9ny5FQQSjdwuwqKHPbChr3E6k4ZuM99NdSEQ",
  "key3": "2H9gXbuV8jeVG6xhuLvJVQy7hieEaAFfybebuoBUBgk26pZCiLh9rLTYqvtuKZZetUzazmjLVsLNQvyPBecC6jX",
  "key4": "5V9YiBvYJLmvCVx2dEMt11mqwrcGH94xCjG6pjYBStpg4VZJqrs9CgncjS6Nxihevsr1LURHisF4uGtbAqWy2ip7",
  "key5": "5RshxKLmavj2jPzyFYE3amLyKKX212MBMF6MKk823GamUBKetrhu82h72RR1w3WNx97wHFtDZKJ8zu9m1nNcEx7q",
  "key6": "2mRNsb2Ce9UGnNXr7ufgfm6HyUFWxCJdt7iNJKCXMMhbAVBTtnes9kC3F568tUMGTND1vkKTykAFQfmUYk4cXuKG",
  "key7": "m652t7QgBL4vMiCAtL8VULCYfZ1E77T4Hnn8SgVc1AaynXAHDpy5w2whjP1PGNeMRyB3iAXFo5eGf27WDZVwUyF",
  "key8": "55ZapyGjcZyAMFvcQBHwC6d8QcC5HtFSKh4XAJjtYJuQGWaEqdiLwyS5LX1e41aBPVJuUZ2FH8rZc1NvnwAMCfnX",
  "key9": "REeqvV4yFYsYsKY4BHZ2rFEK3VwYXHbLcGrmDTi7gzQo5nv7WHp9ziJWSLPr8cQmbGVS8RJBbtV62H1N1dJPkwq",
  "key10": "HMKED1k5We23XYCKQNj7BLFQRj1G6MjnPDxH58bvdd6iJEzXKSb7tmxC8UFXwuUaHRssdEejtVX9zAC56ErPuiN",
  "key11": "3j7bynFXV6LanZydAX51vwncxJryd8WgZUChT2oVMi6XYiSqf9BjAgFbBTA3RRXh4Mcn8VzvqvaMW6LivmQGFbwX",
  "key12": "4iVfr1nkaaABp2FvaQT67bXUuE2Yt84cWMPkFBjoJzr9kLJZdsRa8XpXTPwdoSDGE6SnemfhgKkGJDsY5rnp2BXd",
  "key13": "DdQgXvb9bu4WEeEj8AicFoB16pTqBPssMDW7xUGswSzcHEcsWL7pNdsxroB2j5BTYHGYecPvDF1Z8nq9nLSYe8C",
  "key14": "4R1goPzz3stoH5jw3Du4RbDXfxbdoHUqN1XjT8Nri9LgTT8DzNggRroxf6Lj6eYEr4YSQT4m1Y6RU4qeVSf2EhLy",
  "key15": "67iz9huYHM1mrnKCoNdaZhQ4VNEqkMkGLUPdRy5kzzJoigG9EUKKUUg6i9eSGyJs82JTHP2CZb4zg5opy1PECMNa",
  "key16": "4GruQkyjGTC5H627s9vExbfA2LVnhsGbpVWGpuSJjKva5JLjZuAMbxuPgBxSwLVzcBDGEV7eotgq5TPMJR1XgL2i",
  "key17": "mQhj1LDPBCaNGibQnqHUHNC2BArCp4WeECZJsgXZTZoTFnnDRGRxZmvWf2mVk2LYdeMMJUgKpRVP2GsZ6hKmhzA",
  "key18": "4CefJzNdEu85v8q3dk4Q33gBQJTuKx7T9e2WKkyUNeFVZa33b4cEnbKaByP4Nt9KiBkG9DwP1AQGwxbEgieoMG1G",
  "key19": "5ftZMb1HfhCTm2aNwakDdqJP5Dmjk9fk74VJz17GT8yatrGQ4QKhVv7dBvVfZ6JsFvprizbDjhmNeST3Jdr4bBF9",
  "key20": "2weXXhYpzRuA7LjwZS9jBHv6PN5Uwe7vz9G5aRsZxJXa1nmqQP5irRTzW7PeLiKwwsownWNgaRqM6YzQ4SNdQSv1",
  "key21": "5fo1ZCo2PXPiHFm9Ybimk8xk2pLYawgtdpvwUmyVwFbNEeDVArAonovhDpAjRKNuHg8jzVPhJsbzFLwsos5vh3Av",
  "key22": "5S59c5QpLGdciEkJg7UL7bkxsYB1zgGjHi6d19zUpfNaTZYQxMZthU7vuE8siTsMAbUqn3ERsbqfdByPhtZFerCf",
  "key23": "4BB4NWSuywDMRqc5BkfGQ97wTRRCXbSCXkY6RzbR341qzAGm2gu6CbMKrfEFHhB5V8NJFkTKkhgKEoqMSChUBJgi",
  "key24": "55yMej1dcGkSJfPLcAtSTucNzDzVKpxivpAai8ho1qdtNxYa63wvNsGhoLN4vcPgrTv1FHRh3QRf9YSKQk3G7eu9",
  "key25": "2n85GT7irjKH1WxjvE6QeK2PoSMBsvHB29Ls7AuPTF3oq19ySojxG3PUWSRrgwxAwQ2vs83ArCkxYPyuLKk2J7vv",
  "key26": "8mwWueY5sDYxJYmLvvHsNphhcwyA14Soemho5mTxaBpGFiv9KZXYejEqr5NBLAPGezGA8FsAVK7mN1agucEX467"
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
