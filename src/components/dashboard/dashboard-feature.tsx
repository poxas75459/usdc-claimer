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
    "5dTqXAz4TG6iRK3aunZG47oLaMTVWhtYGrxAWUJyJwCJoG9puXYqVopiX4etH8Kp4FkJ4QR5NUk72Nd8frtBMRoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5thtVvUDMKvfoMNKz4BumeC7WPvq6Rw9L42WnPADmmoJ6DWStFcU9iFFkv1AGqD9nT4KeQeqLyVrpX7ctp5R5bRD",
  "key1": "RHwkgdiWSuzkEfowwqCjmQ85gGvoAqYW8UHan2Vjg7WMQKf9BKRCYNcbxdSWzzA35bDaxG8ZmwwxPyAsTbSpnqr",
  "key2": "3pV5cKFS8M5qy64pWmvKRzybmeH1pYEGJeQruxAnf6t4yxwrz4yVN4Zwsp52H2G6Q5JQDa1mXnu4DMpsrgGN1UNx",
  "key3": "5B4YCXdMSNqpLB5G9c5goKvvwHeUQRJdaaNURe3jsgPGDtzoDxJkdPT7NjcNUE8tf7XtS6PbNrx9KWALi85UnyNr",
  "key4": "3kmAFSoQ7Q6B9ytGkddbu5kWERoiHNhHa5Ncb5kqEXPrR1vhF3RtRU4RnRRPUVMJNZNBEyeed542fKFYZxivbr3r",
  "key5": "53XDV1KCsAnESNeyYTYMUXoRJYZZ2XtSXXoHYGWeLDJowHsMFyjzBfapcmbyEZng43njK3CSofuqk6yF28GvNHqT",
  "key6": "58D9XtEVYxCT91kdLaKbHCAa3tUUdneqd9xYhfeuPRcjnGQyacfSxUNQ36HUkv94sQ6RnSCr5Ezz28GTHsx8ejdD",
  "key7": "2TDoDYb4RJEFwWDFwuaWxh81PBse7Zv8QsyTcev4N9tdGkdFfCsmJwTsRgfTCkNSiANxYpME2sRqTKbmqYWtUNGx",
  "key8": "61vMKBsYoXJTjeoD5LgaaJEQemaAnovkTqFTxyde7GH6wiwtkspvPjrhS3L133af6zDa9zQ61vVGQDTTbWQ2HLoA",
  "key9": "4Xczgt8cZuRLVdPAwbQPfeCpHZMeJn7Ny7G1sQNkb9p9sYMaY1qh9H2dbY6oVULdkTXxZJ5YXPHfgybkcjdkS8GU",
  "key10": "4XWZ7SYpYfTX2jC7MFuQUXTvZd4oxYuViHTohHneyqNP237jpYdqZ1jdakpb6Nv5EtsmzMD4joR9fZbvTFLG9MLD",
  "key11": "4TpE6hUNaEPo3mS8SnnY5pH6CLohGRyJFo9orB2RDpwLwFmrdAnA7dDWQA9gd3tghxbwHDqMvnLH4j7ENKdmhWyQ",
  "key12": "sWYBv2RHyUYDna6vaB45wKudYZLL8aBbcBVRSQZXzSY93ETS9mXSqcttbkc3fdqGhHTr73E8bLEWLhrs5EUazeQ",
  "key13": "46sGQJhqH6y4v8HfdvdKDWB4A3WsdM6ivonV8MBTsRJW9xQqSRZsqtFzw7ZPdZGHAS5UUmHvQThjaJnqCdosUqJ6",
  "key14": "2VDt2Twg55BpytL9WpTcMSwZpFrvZPx66cneAQxWKhqdvKqKTBR9aRHrDN9KXUfiGdD2e2G1bKRSbsAixu9uEeti",
  "key15": "4eEkfA5essH8ZejgdEYYiqDNAYVs3yJEw3jVK7i5DHWbn7ADDQWmR6E1N2NJRn5jFW2kU2BYYApXeZMjuYGHA14V",
  "key16": "aQTfrDr3ZUgtarFDpAfii3LsLgV16ZkwEVAApsK3Wt6pjUgPag4t2hXMRQ5vG5QhsfcryzZ8UwwJsKrhaUhzY3A",
  "key17": "2ztkUF9apX4eKE89vqkwp8UM92ksgGmQwastXwDeXwBU9jsgscAYgzNge9rP4Mm3pFhCJZX22vVhGCDruhjBrJAs",
  "key18": "2pQCdkjKKcv88suGmvLotZaYnmiFEngzVnymh4z2JKKsVSWa3VdKNZB3hVd5qMC2rkubntzo4Ed6YfUKWZpJsAd",
  "key19": "4LLYCsbWSKryS6Ucyf5yLtdcYfPSPgQ6dqz5dL7UQBFSN77vWHnPwEmtEwDENGM3W5JR4n2gByoL4pP1yfsDUpZ6",
  "key20": "3vVHQg6pvvLi48iPG7j9ZMtefjA7i6isiuLFMw23YN4EHu3k6iJBu6znM3D1X8bni5ii6qochy2RnxrAbxeVMYjc",
  "key21": "EyjxCxczYmTokZWttCvZXHoL8K48yDSVYRPg78h817NvJR416mPUbgEb1KatzCQiEE8asVMhbhVRsUA6XRi5eyf",
  "key22": "48gGugh6cPq4dTQvXHwdsKoZY7BvnjqN6DusPKdMpRYMnSSE8TYFpt7vpa1osg7H6qnoAzqNgFL5CxhyjXGfuZj7",
  "key23": "3c3Hx2MMa5MHoB1a5EjaRsHS5ABGDfw8aMpBvPC1DhEA2xkH7yp8h7wFzjf9RUeXUXYqvH26y9ftV746ZDgLKusm",
  "key24": "2PUsKfYyLcwZbw59Jo3541s1x2cSwFM1yyvsyzfZpNxzKKPyjm6qrbjsRNWrEVDeoWBJKLQ9LmoV8dinZQTLwGG3",
  "key25": "5uNg7b2gQTeVfRWDmNAXpnaKciqGPojZ3K1tJpRhib5X5imnqdBYocfgwFe4Svo5joSgbbet75ZM8V5TF3XDJ4Tw",
  "key26": "3VPcbrqfohAWN3As5wZZPvExWfWhcfXU4j95Bud5Ag5T9SvSByyNwGeip1PW4STXkvQakCAtkXChuZvGTfgNPnwY",
  "key27": "5MxHQ44xuip4BmjdZkkhQkYJL5STMU2ew7C6aGvXkTBy1TQZrxt3jdefipdLswiWmy7RWXSSF3dJu2FShoZEBhj5",
  "key28": "2c5jrtfHNmeoX4k53ecUP6yPgRM5RycnTQsAMcQG9YhTyW3A5Gyazd27VtAWfQGyM5ktxnA7VVS76fvMR58AyQjZ",
  "key29": "2Rrvyq8VE8vJm3prCineqQeZJeStHT3yFwA3AdboPU7YmV4T4ESvU2LxZzdzMiiKozwuFayQzDiBaPJBDwcfKhcz",
  "key30": "53Gm9DXv5DQN9UekHa1S4iibiRZnmz621jBQxtMJvUpgNunRecSXGPFftRYfz2mEpse1M3x4K7VhDgjDxjDrGGAc",
  "key31": "23UyeSWGYexqnDCjVsV9f64jAcM8UVUp8SoKPuEDky54FKFxtWCQnjCFV88btNFQgKwJcBJdZ5RB5ghheTgvhRuG",
  "key32": "BTUxds16eKvBYxogP6RpU3AHAWAH23si2tQiKGShEqyTjsNrAPX3bKK9diSFCfyEknVYv4sRkDNDoJTdHKWv4AH",
  "key33": "5bTqExdcJ6eTG3yVX26mYuG1zpze3FNBwPszojhBcWe7DneCQPNiuGVxbgxhuemCTWtvZcc8sbvcet6dgPeuUp5n",
  "key34": "4HG6UTKiMdvcSKYQXVVk21ouRfeZivLBtvppoPSfQRHfHQJLWk8k52u4LfJdV2sqHUz2AnyeTs9Z9rFMyU8ciTfV",
  "key35": "53A44ZSwrLmrHpD67jjdSZUZVrUaCsdS3JEywTmDHwfvMJbS4bwC1SzFPzFhrhZja5ZpK9u5ZctVerbxNxAarptY"
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
