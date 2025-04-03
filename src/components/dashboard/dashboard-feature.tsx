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
    "bWRipWpEfAjfe8oKky1iLtNDJqUNnRBQeMTR2SoozUgaSZ353HLzWUUAysdiYF7L4hzKLhMv5gzQJJAXBPhEM3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPZarNUHHb2PjE4syz6U75S5cBNGp1yi1Nm3GYpXcnQ3BgrohNLahhQ9rNeoAjDAH4cFBARG6khkSP6oA7j9xGm",
  "key1": "9sLQHUXM1x2Fudt64AqVwfy721VUksEVz6cjtjzMgRrnczERexoxKpLvccUs2GVxJtTP4VysH87NMjLHx2Yf1NE",
  "key2": "5PyphBoh3RyuHMqkPV18EkGQ1qSVCWV935xf3uuLEr7ivm858A3rnaYh9M9Pqap5Q7B3hgZGf6twR3f6cNZZrUQk",
  "key3": "1JSkKDvRpJidVcB1EmYzDm5nfpysSHLpwmfCaBuPU1ZZ9qCaHTuVCHQkvfGZ6DnT92wbGE78AoK1HNesZR52L9c",
  "key4": "5Y1iXQmk9udn8q6pqJLDJSqWibpPJCrxLjhwzyd2sWhDq12vN2BNbND17HeW4ruxMUxUM6ezdGxNiMYiEa4NXZe4",
  "key5": "5mYRg1QW64TztQst8hkPnEpKVygSznKVnr7rKb8VUtJHAyBpPYZ5abaGuUo9AKcB1hBURYEVNJYBURfQLz93ojyE",
  "key6": "4oi337HepoLpSEaqvSNdTM867EXvRqexvVoHL7WhBvMn2zUwQPiu1BGmgRL5KE36qsvvqyviE88PxhgishXxX1Zq",
  "key7": "BhC5PNboRXAKajFMaSJXw8Pa2kq9ZQAUooUNDvcFKHXnt8hUhGyRgT9JuvEvBYTiPmLLJ5CDuxuXh7SBxxfqVhs",
  "key8": "289t6ERvrwZ4xmUnVisD3vz34Nid99UJr4rLURG8986J4wwZxe68WbGbCq977AXRmnh1sCZdSsuzE7RYFKqyjTVT",
  "key9": "5KhmQspecgsMYcTAv9pXY2Frrtyn7rnjnPjzCrgdzjbDES4oy8QK3iAc5sHeg3w5ZeZRU7YF9wfrX6DGpJjNb9ov",
  "key10": "5vZ2dCiij4uTDfpdkqaNoPXjCYWeE9fBKYFPrhSQQiqNow4GLYtgmFXMdpw1Bk6x1yR8wifU1GPeGzNxT4jwVLa6",
  "key11": "VHmXcqgHJoiqwRPQcLbrXoSBsJoFTWLQZvyUq4NczhLyy6gpdocaukjmXSJcFi8vx2jiFWP1EQmDBVMc9Ko6Wvw",
  "key12": "2s1miDANCwtJhY5xCt8LyNqPrZKPz7Fh8ppMoZkbKWvafa7YJ2FvLNg8NupixGB61AAQQtRmQBtaUanyrscCTBF",
  "key13": "3djWHVBVZTQzUHFb2fTKk8mEgiEmZnm8ep48weTx2Z4AY14hZ32BDkh4cZtUnRhhsxJJMUUmV756cvMbEts7CrU9",
  "key14": "2VyFcyuusFBh8i4TVSVVhR6RjH8MnJLnsB33euXApPBJAzp1hBY9oPhC3Qh1gACnYoR4K4CTB4V7qxwiQ2AJX2sP",
  "key15": "4R1HriJNy26Tube4BGkBsGHgnKbhCy7cwHZG8tMhRXNQcTccWohxZiC7vKrNAeNarETvCoLsxZYBsFfbcxEGeR4q",
  "key16": "5UnySpiVnpNzHWcYRWZrjLvsvqSPS6mixdb3rNikFVfq7EzPx5KnYNYVxaBCta7TW1FXFhBfaqRUJvTfw27F6kNz",
  "key17": "A3bSCjNC7YDkYW2KTc6c5YpMJKyqKYp3KEEuiBzrMf78o2x74LU3W2cTezyHVx7GLVCjRSPwzjR1H23LpyeDWWe",
  "key18": "22NUS31X3A6mzEs55kBBZEU9VfBQxo7CtJmKnsxM8bBzgjYp4Nvs5ZBGwiCqmxVbxWqDs2jZ9tULhHN13VMYJ6Dp",
  "key19": "5XjSY9LNbxYPUtL89ybQyLLLfhJoH41hxeyhsGown7NWFP2bFwQ1EBn8Z8i6jcAdswfE5TasJVhUN7mTproxFYgz",
  "key20": "ooeBBaBNZipgVFAb47AJ4qtZ5nv22Wu4HQesq3kd2mWdfenqj3PsPBtGzrQRaeQWM1MdqArHu55froKxJrV2Che",
  "key21": "5HAnfTB27Qd1kjSdYXvteSAwCNzwSd3tPLQggpHpzum1uDHUnY4aYUdoBZEAb9M99RseaTawwdaSHSJ7rBU2NjdC",
  "key22": "5K6WvCzvR5W2igP2HPFX1jgjVSWeeQgCS4bMTpkgMezXMumQid9F83K1qxaBX9FynLN37zQranvGyRxasWirBN3i",
  "key23": "8c1NfmVmcZAu3ouj2q1kAYxG5tPDuG62QszeaG5KCwn3pD1bb1wG6qoezFYiNF9Rtb71p3oxX9vjqbVvm1ZfkYu",
  "key24": "emDtSS5Y8CugkDz4ttF7jqTCZUDL8x9epjk26U8wHnER8PtRbsspDQ5VNLttEDo9qTfFUb6VTAKKhnpXnxeMmaV"
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
