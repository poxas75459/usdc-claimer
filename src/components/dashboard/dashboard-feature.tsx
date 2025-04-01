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
    "5QGfJVE7whyW3K7BueFK2HyW1JqV9knhqEuPHiKyCUFJATjUmsWQLnvP3cajsdt1FcrXxkM4MXqMRGGtDN3kVVeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUeA9bApJGTkU8TWR3YjhonvoW2jGwHaFzNcYezF1hkn8KaCUzYMHqsmUHaZCrSQVC7anixB3PcyMG8Hroyqze4",
  "key1": "Qt63z59YgMuKbCMp4LmqPNpUd5KvsGo6n5FoVNDem5PYpAe4k6dSF2sDhth3R4jNmRmndjuZVBfRKkPLKJnkSnM",
  "key2": "5WF6cWVBJxmDR1LCJeBGunpP7cXR8CP55AKyAfBaqjxRfeMZNhShFBYjpmKqz9VUVNA4aZXhCHXyPCd8HMkso9ak",
  "key3": "xAkj52y3MnwAtPxBSGmmc3yTrwAVhKRA6ESo7YQcXMK554CLmBNXUdEAMksJdrPV4942kDYMj1YAgtySRgKFXxG",
  "key4": "2cNYVjGgsCGhVcRSfjaFMNY1BQfU45eU7THkkKTQ6K772X8SsgypzHFyKJwrwk2GA3RSKJv9X2ZEY44thUrJ4dkL",
  "key5": "N6wSyqy4wcPhEbK3TyazPs26GUakd4o92AbaFE7Bphcskpit5KUHYg2EwhtfZicskBThAWAsmwVtaD3y9Wtn3nt",
  "key6": "BzhAFTUJxswMJmgz7aUBRFmR4iWDs4XhoaLcyk522Pg2bMXGqdo98363xVG8pHXuWhMrNPGRpcDDFJHjCaQQL3A",
  "key7": "3XkhZguCbZTPvEwtsjK5pQmedEmuVG6YYPGV1pbYowogu48NJEp1KqwTsegU6Pzij5KLjzhUDkw79JNfKDYwBaPA",
  "key8": "4GWcM4icTDQT3CY2fmsWSpcsLL7E2fPTMMGgyBYcSUfH1wVnRbRM3tbYwu3R5nTiYmAiw7ZHstN2ajD8n7GTFS5q",
  "key9": "2zDM4xZT3fkH4m1a6nCF8wFAWmqhxGuPXDRj8JLGe3MhiNPj9dXVapSoUtVnbL3LzMJfmcRAjXZh6uxQh8FhV2L2",
  "key10": "578ZGmxkhrsiK1teEgxddEFk717j6JeE2Mz789WvX7SGTdKsrNvky6yxt56he4DumHqiTxh4tEEW7jtUG5HFjfTf",
  "key11": "AZXi7K96No6jqU2MkE8n6ZTa6WiKUnaDnyRYPH7mzCJXmTmm8N7Kr5x9Zm1pmZQ1fA5Lz9MnhGqXWqh8xFWKCMn",
  "key12": "4Hbxmfya2H3ZCJgPRnspCu2jsPf9JuMR5toH7CnHW2pr8vJRjmBGMb6ngsVLVAZS9iZTf4mxG6fcdftArpr74Rau",
  "key13": "4egXFVLX9VdtVryfhTWx92oDEcCj3o7sxLX9VPT2PuwbL6yaVSeoAo4SCzoB5YWdBR4eUwzwKj9fxG8U7y8EcKLT",
  "key14": "3U5o31XmXuyy8S59tz4cdWkrzYdRDJ9G5SC4cVuvc7UWYgX8rYQpMcXrbXegNnjgKqVB9VKYbmV5WEBYC1Vjpthm",
  "key15": "2K4kEtesdnd4Wf8d3X4AsPSTckqqe9FJriwznTN6xbkDHSxzqidBoF4wYSRLA4ULxCp8WptUZXuXvRJEHEhZKPWh",
  "key16": "66yAqQUcNRnvvh8ac9TvctF8JDWw2QEmwfyNBVGUrB4zzvREjs9gRTQBFgrDT3SXq91412i2FcVYpRZ79aNxoTxL",
  "key17": "2NSNk8apNucfFG6PAALhS8NdbTeVQao4AejzBQYoVFs72vtVdecfoSGcob4HidEzHaz3Xy6F33Ls6aNmj9FBio2v",
  "key18": "4AdUVh6rFtKooDzA58TCRXGxv48eQScizxvv6ztjHmDvsRKCvDXPkwwUDoR6FRikAVVwzm3f8oy9G163EWuiiu8J",
  "key19": "2KgTGvN1GnYS1ixv4LP7aAinm8TYgMtJ2z6GV23smkgkUWzWdDaqbTRzKhBRZv3GoZswWZoJ9XrgKmMaZPTXdE7j",
  "key20": "5SFRf2xSoZiuhpKJFa2ei3j73xcmnKraBSCn6T6prTAdd1AUFEFkR6v9Mf2wQoYWtGPGZVaN23UQG4FwbsZREWhr",
  "key21": "3k84EHDC1HFH5nseBgppicem2bAWFzQcTm8sT6ggxUHwCzQop3BDzSSu6nswpXbM7v3SqzhHPurvXh8SRW9ZZhBr",
  "key22": "f5K6ZEMWGcAXxDWUZ5ghTFbS5KDViR2ypPddRyAfS5RqYmbyPkvpYJrs6NmSbu6CVeyLKbdAoGAAmnYr38M2Jpg",
  "key23": "2MngR1RUGtYYiwsQrkKrFZdqvMEuNWV9bRcCBHEgZQNEC5TTtVo8PQ9i2eyL2fd1zB26bzZXNmcYkx2ifkcBXc1f",
  "key24": "9sWJcybs3skzaDipD1RQgH7rjsGjevztdFciSgxPxaU8xLREdFpbDGPowHsHkT9NCqinVzLXZREevMD3u4Y75KJ",
  "key25": "31SBcU8PopfkRcQXhEs46d12nBtktYatjgDDtirk1VAHycvW2wYbn4vR7ezfQ2r1JRSpkKucYL8cWWjGnaTRL7N7",
  "key26": "2j5ky1dVwVjhskCJ55YTV3g8qcF4dVJqv6gide1jiYVFxFJwGozrLuioXMeg3mk4JbHjmcLcMSdp9J1p5m7usn28",
  "key27": "652zh6e7VenuBsQAFmB6CK8gWEAQiXA6e1qz5qD7hLUFLyyxR6KqUGcsQ74gsDsMVtGpGtHRWKcKWRGMQ2k8qrLX",
  "key28": "2sMHoD87jWttY9ovmiH5XdbrMBUZirsi9yXcZcVhgqgW69AKPHKMSkJgwt6ejxWMn5JGUHPz7GD4NY7oarCT1AhV",
  "key29": "LJpW8ResNEmCmyTFiL5Q5LqSVKgk2aA9YM8ZcsNumDRYeWp9uR6sxxokBiGNx4PvQ1KsWeWy9UgAb3bn4y7ygRM",
  "key30": "YLLNGXnjuwAtKFQPRhVmAAjHvpLokHU5cZhDLUbNTtqJ5dfN1pwa7a7QUVTgANpRHUT335ar26EQV4U5MxtxAuH",
  "key31": "4a5UwdQP5uyvpDdrQqWyY2Shjii3eGMEzXDzf5kuqJEiTNEvFjaLBKtfFqLZYgjmtZNLz7VGG9sLqdQ4z3bqhf7w",
  "key32": "2wMhE6riDU55aHoR3y5sFqFgb5tdRQoAh9SHmBTouXbeJYZtqV83M9NZbrswjPJaTbARG77fYZgwr8wnUxYHC7CJ"
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
