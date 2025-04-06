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
    "2JhhNfMzkN9nvpiPP6D5teTgjiKeq3s4XQwooMMbs9GQVoTEo5TbWmNwzzBWV3ox9y2W5JU1riWcuzfQBNAoFrF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xzh8e5fifWCgK5CEy68YAPjthuaZzrmiWXoj7KsA36FpdM6WjAn22o5CnR5FQbobUi9UD339rc89HDjuq2zk1Hx",
  "key1": "2ozLDQcwzFqp82mf3FT4b2hSJMikEH1YxxSiRj2528Hx9d98dG2epiiMN4KnvdP3nUFNiVHvUMa8snq9G5GaUN8C",
  "key2": "4ze5myfrug788k2yQGEeqbrNQigZfRt1vBvm5r7FF4Ur3jL6TKN7UaU9m157RzvFLv6Jrdro715ezsK9wC7MDVzy",
  "key3": "2x1FeGCmgfRZXTAeeMV8U9BoC6LuqSGakBZWvwnmDEUNxEexDoJgRaqbYX8NRQ9ZcMVpyUDMfotzwBFAzqmdGzNJ",
  "key4": "5UDBtcjsyzd56QXvyoTPZUkDAreCDK6SFejKajskXfd4qyPwCbGLsEAnhsJuBmU1YbPvKE4twPjrEiqsYwUD5Wf",
  "key5": "2tNEpe2UDns13MyKymScjApwV4bM4V6qskBVQ75gKZs3powESYVT5vFyRCtexSXH4XiUjBRSpreTcnE6RjDSUpVQ",
  "key6": "3yvmTaanAzSaDYjEJKYMrDLEJrpD85oag8XBsJQvHywxH8fop9oiSyVdQ68CTofdRFPG7PKuSzkEZ18v1tcdyUxX",
  "key7": "4M18Q2hPb1r5EMaCiXE4AcBYzNXH4QgjmLTzbCCQan8XzLmaep6mXk3kKwkFx147LogqGYVHwHJuawMxvHJjpMQV",
  "key8": "2KNtv4MHVPw4DYdPiMJ9yAoX7WKLfMsbYE6vxFG7UDP95jiHazBNAiX6hgHabsNS9DoJaiL4S6HvFsQ426KYz3jA",
  "key9": "5xvgdnsbLDrYqC9N7XCZsn285zPRworoX7K1HmWtLCPDxLVPeB8aH6FXCNHL5hQGvuxkoiAtdGTBLDBpPHe47Jkv",
  "key10": "4mQKLS1kDHX78Bgj2dmskW5D99fM2XjMSm4iWo5uT1ej3p6zuncdTvgrQdQZcnB4BwbwfQ79UzJrYmJMckJs2Kj2",
  "key11": "25V7qcgsKS6U1eQUNcZ7cZpG2EUXTk6QHhtHivnB9gWwWnf6W68httfTVR4vc3daD4VupTBrGg5ytdVvftHqe6cb",
  "key12": "4Sh6EeBnGmiRHAfThdU5WEaeaUJSsRWqPxYzCzKn9MzfRgbSyqmQVmKgXVHF7K8W2Zn1fuNUmiPLCYNiZaXAkp9d",
  "key13": "45FxHrzprGdU8xuwviY3Wv4V6axRxCPd4cpmPmfrRc3YXE5Tk4UnMQvyApSMF7bct3qN3NUNx3g79sZckpMgfyCH",
  "key14": "3YSBtmchYc35HcPthDnmBKWsCMGrsrKHS2vjT1Z3YZT6bYf65i1fby2yPQoiHqJVaJFicH89LF6WiB5i47GjS2A7",
  "key15": "4R7jpcjBKG3Kg8uBiwDakqb2sMmEVje3LBu75f5KVXMmjTi9ZfKSF7ppBYbA1Ge4VsHX8mF1AiYywA6pbNBWmKWi",
  "key16": "5dhVHmKY1y55DDjf4vqoULuBhPY7jT5rCx2zAnfjbXvXfpioNHywW6rq7G2fSFiGDC5NFJpEiY7W3X1kUGzc5W6U",
  "key17": "4o55M4XBA6TCiNG8JbRvYurEnaKih2xBkBYqp7iBfMNZHkczrA8mrwjKfRQAnrZSZii3HktJxAyUaA8q7Z5CpTS7",
  "key18": "2d7d15AwrN8fZ9Nxf3GiM9GnhCii3XrM3QPoFnmJSWtzDUXXQFZbteWWPg5diZCTpMVAQNRnkEBdG8iSLKr41juF",
  "key19": "2dEsNWhcxK1TCg94RaLqNzFU77V6Dw1bQ93XbVWzgRQZoaaWNRmNpKzCYUcw9NZbRUnPbQX3De5pPcc9rRFZ6gAN",
  "key20": "2yxQPcwq8KydNy7LzMT6sho6n3aFSB1rcUAoh3a6C5urRrb2mG31TYiYEfr4saqPovbt65Kv37DEajKZC47LDAeE",
  "key21": "47K4HLbuB9JHfm9MxENzpPRUEFMmd2wZMpTpRVnTR3EVddSFiwK8tskprM6QnkkisyFoCeWZVaYknMxzHz7P6uEH",
  "key22": "3BNUbMGE8BNAq7XA81NTP6F84v6XMZo7GFoGLzJjsjX4NXf3WVuuVBE3UVzKYJ2SAFjHvr3a6NpDUU8sMB3PTgJM",
  "key23": "31sHPYWJMyYoi3cMkCs53Lv3QyLno35jMLHZ3SRirLfcNowvmbZhjAbTTjinmmzCVCTt6yU3wV4JyNkNTgnzRZJG",
  "key24": "49DjMayBCFBheTJ7Z7SNenBJGRn6cgNFhm7vCz6a1uZ9ZVhbh8sVvYGVSvXGCnBTU3BofqByGE6zzQDgP25BFBMv",
  "key25": "5aGdp9Euc8kPA9DsXQoPWZincWsqN5SN9tLBRWhybuTHNAE4biPmvrUqxAmob81z6uEihfXWyxmS7GZ3VXxNF8VZ",
  "key26": "Un3sYffPX3aTirVvw1WMottNQdRVKgZT7p31ufQcdizqYhGnaZWeF9MYjxgjkR9mtvWMkFLwJo8qiSSgtogarjb",
  "key27": "3bH26tZKhWBZB1Xuv5hsTXNVm678wYVPkuVwdLbjfgAZWq2hstBjJ8T6ncUpKJeuiaSTZWVB9ck1f1B5VNBGQxAT",
  "key28": "2Gjej2FqmHvbj3Q9FpXbi4EBHACBvxwEeX9CtafX1GViPBcXWkPSHpKk3hJBChjSQfHyDRG5VLo9Yb68nbDtMDG"
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
