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
    "554ACwrrhPaLPnCbyDnQqhwn7VoaKRSJyZ8XekvmzuZ1YsaYsSF1REjKeYm4zcZD2LBfiCLAKC13dphfAYbezPVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eZZe7tNQK47SKPihyHjDJrtX1daUmgnHqe5qqDTTX2vwaLkF7s4RMn531gjx7joUmmi6xTWu2CfVzHEGf5Xao4g",
  "key1": "3KFgQWYretnoj7DtBGsvPhKSARBFDNw3W1TmvSzGAQGE4nAgVqt3W1j6ApJv3Tfb6xMn7SaHxTxsDryR1L8P4UBL",
  "key2": "ZFrL3KYdpnrfJyDURSRFTxxzSKx9wbLWSWLo6sVa3uhbgZvSS752aJoq9bnbUMWUTuaxvdpr8zdGTey7L7h9c9U",
  "key3": "4dKVnnauNyo1rhRoKaEQvsXpZdV8eEuhSTtAGAt5LX7aTTFL4LEL1KoVupYYGBEx3Uo2qN16CBno8SqdE4iHR96x",
  "key4": "2w6cKyMtnZQ5Q4B9WJJ5rST3cWEaKvepViUJWQhEaefJpU18RncuYqc9jjpjHrh85Cm5iz2rpxbdLzM3mgZg43SN",
  "key5": "4qzkQyjtYk186NPXiJ81U5hirQYTbu2wKbbwFqVw4iuqdNyB38G4CfikzgYzfEwtqEoYERCqzAg754fVnNVHiYZ",
  "key6": "43Z1soXjETBLsqH4xvkMxsqFY675zKWsndjBgAegjhgcKkw5jTBurqEvgpDpWj2Rim8qekA6mXvixCZJkfA1CdHv",
  "key7": "4qFaihSE33GjfR3mRfRVVnZCAA4mU5TsiFvnttdJjWVfu1jSTpdpgTrDghTav3sZb1ZxUqQY1Es7fdxe2zxkKg8k",
  "key8": "2R3udyymkbKz2wg9qLD4sui4t4RKxLBDSw7YCmxfZWdXpLc8m1VVkQaumKyC1DhhMwTJbZiGNbT8GpZG4SeTYmg",
  "key9": "2ScS7rpeVfWvj5prBWMPCqWaHvz1FsKXM3x7oTjMNtDHnaPnrD25kzAGHwDm72NV7sXT5SGEM5gi4uvrBVj1Vxa6",
  "key10": "2LmAU8Sfg1TgTJPCR3n2e72MUM3JW9EAoyRZrrboSTecogskTVYxU7YxTRyMWgtyRrCKn4MvGgYAjNBpiwioo8vN",
  "key11": "4Fg33oG92crqNWPat88Wv7MrXGyB8PbcuqXQ4qMBTuAExPXPq6T1GQz6x7nkcabP47oyRoYSpGdaxNmhGyKgbxot",
  "key12": "44nyDZFfPUqgASMF9UqJ4DjozKvQYoDNimJ6B7BMQjFxEsCjtmaKtfanCakVLr5qpLTMEKpkoxxRCWCwkiEkFX9C",
  "key13": "NjvLKhnjhhntNi8s8Uuyi5YFUUvUpmncg6U5dvgZGz9j3c7g3xFxbCrM1rM9dP1RRsPpxQeZXjeGsNgx55yFcWk",
  "key14": "5iAueWYQba76BtX16yi5hxLtZS9ZwfiGVsJQErKTCntyzzhcvugTxBt6qEzFyThf6nSvfCdnemsLWvCWtHqfuv1X",
  "key15": "26kk1kwz71pwRqjbYGMLNTmBRW7burADb3ip83qes9nn5QExAGTEJbQ3KtM6e6AnS1UkUr5pfj6jXCFmtwNBvB9x",
  "key16": "46c9U9nTZ5Wu3TrWx8tYeucSxHfz2C6UfNWBQgFFVjk4YCAUzyXjJ3TeTAbF4VjRTXebhZW3XPjgM2riYzJ62yW4",
  "key17": "3Eb16RDTh2KHnZKQbffbsPH7Nrc2yjENteAjuhqPNHf7BRmyXdcHErEU3o1uUpwPSuf83HnRiKHBBi8RiYykTPoy",
  "key18": "365tNbkur1zpaUYRXo848Q3BAsYAQthFShm67UE1P3PUwNkgvxCSXTmS4QF8Biu9jFeZWSLJxgMkH5pXmqAWVLj3",
  "key19": "3XKBJ3Ag1qr4Y7jTvrtc91aM57vh7YP7zkPmkA77o8cvW2s4grtQgsy7CA4t7GjMdSxjagCYY8zfB2fqmcEBQ3g",
  "key20": "3ihdAKDnmUXXWGK5UDRNmNPSjRvU81P6FtG4EmHDmR9BWnQGQDLteAweQmfYpjEeUohWih4XSuRavp5V6Csq7PZM",
  "key21": "33BKeWzjTdKvHxpaBV1N72ac1o8k79ivFKm7iDH3Fw6nnk2PzYgEzz8iUJeHwBGUa7eBX6XkZ47u64oBFJyzhBD1",
  "key22": "5BLhCfVSvcr4aQ3sZw41wwaRWEbtZ2jV3MNko6kk6f8Eoq2hq5FJheuqd7jgsyu39PLNnZMJoFGFdGgVj2n4jYc8",
  "key23": "5TXxXXxjdEzaJVF4DLrqRp3sF5uunzw7zk6iPTgKELAoY1QTUhXJXZvv5CwFsA1k3S85iVMZwxDQUUcTHFJneZX",
  "key24": "5kaVRrPqDpxCqjpV8JzkQmcH3Mpr7eHrPfsWy9iim5Rtx7REjTt9cfsbPRKEUpdnmMqmnNvbodoJVdDLBd1L4YjW",
  "key25": "22AmqN6fDXGYwSd5LAQtXCkBfLWEV25HiMJW4cZEKC846ptodWBksj5E2aAKtTdW71AAzLovJUj3y7QoFwxCPKS8",
  "key26": "5cfcgBXLypBBQ3Qwy6fbJX5vAtZEfRDdNLEYnHB7ZS9rNF1df3F3gCa3F7ukad5FnLCDP6BR4yqWmFYmfcTuPjUr",
  "key27": "2AP278B6QxXnHM8hoq2YDE8geipxt4vqyom3gKBEfnRt1UVSX3RSBkShSRdEQbrc6NV6H22hBWXM4NcNv8K4twP5",
  "key28": "XogR97RLpDQYbpHBvqZHeXEHie2AgcqjEFiAuS3jyWVktkQszVANQdV3NooQB8RXsicQDBuquZjrt9gEA2Robe4",
  "key29": "3pKscBNfw7XuepAb8X7o9r6DjVw27X2AHZxPZMehb5TaMcvbW5z6ApuMUWhf3oJwrwNTFaf65EUotQ9N7Rx84qmv",
  "key30": "cKvyxfd9RYHXNwPWsxcmRUw19uZsxMTEntNWLzN4H7KFZyixwPrT76UJrJibWXpmiZEdR1BdJFbvh8QCcyPKvBa",
  "key31": "4MarCv5JJfNrNvU8opTLs8iFq8R7wDFHG78ySj74f9qcimAUDzHfx9suparQBf3oVZVqpEpp4GKCuLyiSBWK9Lyv",
  "key32": "5Rm25ysj6oZKXEjWE8J2ENUquTvzss8A27bJDB3qdvCtSjBdGotKac7eeo5HWWam224HtDZjJtEZSYiT2Ggi28an",
  "key33": "3RpQf2F3xMXYRemER6jJNqJdm2TaUYisamTBCNKRzgxotkRfDG9Ti5GEB1eEM43KDcxMqxp3jMMAk6DZ71zb9Mcd",
  "key34": "4aqhXH7ZeVXieFATfhtRjKW8M3tpFEgMQ5AqNeEUNkoaPBmNYB9TCCm8fSb7nedUyCXEnFfLXKK9Z8kkbvXpwkJf",
  "key35": "TJhnbmZhfyP46vVVJzPE6USgKL1NUi6gywBYZaiQtY9PqE22PdjfjpdBFAANdHHhgM7fX6Bffw1wKsiXGPf2To8",
  "key36": "nt6iq9Jk13Zfpy6t5sy6WXww717DxWR1JrWXDovGH3Ey3akZqCxDzCFr6rehk4BkgVybZ4nhNnzsY8Rt6csHRNT",
  "key37": "2Wskk1EoZzGRdMbzfhfXqiSH6A6ereoqJXzhhMy3WJ4NERwwzFwfrGf38Rx1Zn2Qd1phdBuqyWHGSpVvXv2jb44j",
  "key38": "5kfWvnfRwXrFgt9FsCjxqUjmQxSLo6rjC9c2eThcsBJtS4wbWTWU6jxvZrrzcJ6Ao88g2z5YEihKf4V3QkGgntPw",
  "key39": "4RcsT8pDntkqDTScSTRaM1wWjHpcmp1NBabEP9mzaLbsSnyqYULVR3zjBvuW3Sgjh6XDdibC2WGicsaUahqDi4kj",
  "key40": "5BJDggb4ao6PhfC2hrUe5DwEqKDkriYNA2DsPpfxiWHa7fZ84sTpZCA29dLXzF2Z7n4mZ4LBytoQ47sSRcvRMh8i",
  "key41": "4j3CbZKjguf8MguudrYxJGVymQY3oFxXC1FW1FCTHoqEDaDVEZceyyaAZ54LJrRWE5n1LQezku47c8EKHpyHPXMe",
  "key42": "3Cd9fBi2d2USKoD2cqgm2CtEg2GjpfDUH5Da7WBQEqK8YYg92BGpRf8S2Hu7rM7vSB581bUWY1SVT3Zc2FsqAhNv"
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
