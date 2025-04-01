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
    "pP1woBPZjiYPdVwZZZdwYDSrSkEj4pCrt571nP5pNbHWvwQFvrKHufXAp9C89Ar2v3HJSiyxSZGjFdok4PSUGT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UG6TVw25WjojYmCjdV7YtWmR7ESce9SmJm55xqizc3P8yMabT1J4gcuRcH3sWbR3twud7p9ZshXVFwwf7ebnrbW",
  "key1": "48M9YCmevR5dSgZWMbeQyyd1C9MZTxw7CyZU16oAh8x5S8DVvWkJPVk76Ay8RnEhWD44ZK8KaGrDrEWepTkAr2cz",
  "key2": "3i3DDDC1DgKEEatJWKCNpsbFJajVa829zyRH1i87JBGox7gaZsSm8gCWDjH8uHmfGmgFAKuEr3Wgogo7UFL7owhd",
  "key3": "45DNsGp5qW54223vZVp4Dxx9ZczZXKWuptynPibCB8tqLsXVjSGhgHeUd1WjreTXodd6vSqKPtcEsR9csW5a2GT7",
  "key4": "2UPVtEz8bqC5mu4YcFSQUDaTfVCDdgpUdmF7EH3RNABo6qbwnv5tDkh9U5m9d5cWLJateHxA6YEFL6B35othMC1r",
  "key5": "5n7xQZKhSEdMFdf93qSdNxfc7EwFCroQHMCdHe4k4ATvQx9PDiTLD9V2hrtyH6HKmjUQD2xKZijinJCFVrfzRXHk",
  "key6": "5FTqYArPeun1L4NwATz4Wkq45erz1AErKVJyu9bwvQ1RUcRofhzThWQiyN9wLXoYeGYGkTCSmMa4ZvTeSU7BobuU",
  "key7": "42f73eH7fA7ohoXz9TKwjjNdpcSyAKf9P4Tx5ELoh2Ejd1NW9BBTymLyTn7YFTFommTd2zoiV3BCXJv53s8aJcrK",
  "key8": "3Md4athHebvgiwHxfmz6EmJU92Fhyy9GSuJh2paUXFLfFa1dvHtpUczFuqK8A5TYUq58QnUcEenXCp42QakbPgsh",
  "key9": "4PK96EFXZWHFps8bpqnGDk351ypm2GqeirQUWgQexTpwF7NQxDWu4RnNdwv5DfrzkXiLwjG1MDeUZnp4LUroaiq9",
  "key10": "QmPYz4Mdvu1KAAdYLpLAkEJxnQpAcT5HVqVCAsHTVAsmLBE49Anrnf8QguyeJdxG39XRTHEiN5zdAdmchHKXTKs",
  "key11": "5XweHhSZ1hoDvvWrnoFMkrK7rbRgYoLkLuzR7SQNbPALr7iWQsgUom1sxWAqdyDzynwUQUUW5r7Dfi9ZyGuJ8VzK",
  "key12": "26kWYFWZWvixCdWMcCCnzgymeL4yn1Lt1hnVzR2X3vt6yvdrajbE4Qpr3ahca3mukrus4fhHR11A3aAQECbGWFkF",
  "key13": "QZjR96ErQspZ3pjYvNZdJjwYFxB1XYvTyQuk5UWwThf5uoEhX29z4MAjUhHbzn2KzeAeeSU8wuEnZKrivM3KTaY",
  "key14": "4WbBMMfFk89fLoYD4JU9jDEQaVnkZu3oftwJoJZDGAuUFbtt75gMWNniRPwMpazb1n5C2ANfLUHxbVVHdY9mgeyG",
  "key15": "AcXDuAvWidz1TA7tMiHksuRgv79JHyJa7uwzjmM2AWx3gECaeQ8XHwB5XJcDjZTDQ9WBR1mNVeYBY4NDrKQhZiY",
  "key16": "3nDjve1rjN21ZHuh2gAsPe4U5m2GBrbAe2T1ZuZbdAsorqofWTnYSc4iqsRzA8LKpc24DJ8Gx4vKTvWWvA6hkemu",
  "key17": "4xhmz8q4RQuzaQ3yuGDSMoZ6EV2g2ye37ESXE9sTsMSBP55L1oahodug1LwL63L7Me3k2osX6YK3fBLH1AqwTs4",
  "key18": "3VVrmJotUVKSHX7YTnkLyh8TQyjRPBgfxffT9SnkABDsueNT5EjXUkb4m61f6sZpZmAzS9Yq5Z7tAKpGmPHKqHUB",
  "key19": "4wxav7XYpyjDeUv7Ne3azsEPx3kbUt8417BSzjA3NhVHYo1rDkufk57ivYRn9fknvBYRamcSTvk6f7FXuX1BhyPw",
  "key20": "CMRcS3o2YiwcRDqnBuztXBzw6QYmVZV8hD1tdbWBmRoKSSKnau5gEC8PiS6dQRhhudsz1SrNXbpPvqTdQU81B3L",
  "key21": "5KjqgNuUnVingcyNp9mQcaouJ5Fye3RbQSTJJpL574AXtTBQFuqpLwqoCdMYYS2rTKcjKkTi1wy5m16YiPttf6YL",
  "key22": "9DNMrXbzysJiKiUkFFJfPCnezGuURBvziXBXQN6YsT9gdtDoTghhzu4noBikZ9cJ8o383Rrc3jdYHKo7kio3iSx",
  "key23": "67gLiDMsLBQRfh5QG66skNBDiKYhD3HWxdA3Hcv7TAi6E6RjBf6XkLrop5u1tfx8WcJtRpfH5bARefhTropcwUmQ",
  "key24": "2pmz1a63rYgie59QzgVfSRifU8BWLCyA9cV2M2WdvCz35JndTZ1doq2qFpSA7ttV3G3uh9hGXXNnhEGifzjDfE7y"
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
