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
    "3MF4SKuTS311FHM2B6763ZDcLpC4DEZ3NaRpAQEUEwRXF9irZjh2BTcDUPhcZruj9ydwPMPf181tjhqWbWSc9gAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26LWEbArQpJqZfCWy4S79vBEJSgogwGZsFmBnTgPSLsfKX1yQrihDycpq3MzPDS2TrsyLSR5VMjncvkmAVg9RiiL",
  "key1": "2CAsWVBPXxw6eZHXhk5gUk26KgcnzAtsdCuPspoCucbmjEJKigWakRHA33e2reziYpV19jKuvwhRUdJ7KP99ZQs9",
  "key2": "drqSnUyNZPj233xZC8QUpgnsuTAjN5ppygAjBYMqJhhgJdBXTZFcurKMhTztQvJTet15SEEJ6g86qVhGQsRJYpV",
  "key3": "4kgU3trjVibeLX8Fxx5aaTRx5rw15sRARJBGWCuRGzN6cJkLhtbDEwfkHu6jHKbxH6ZjfuPMMBFVZoAvy6aZXAe4",
  "key4": "kEEGMzLn75jWsCowectDUacSR2We4hqtqTGaVJGsbkTvo5QBthRUpRUnRXYZPSjXG1XJc1ewSZRLW8FZWrtnVd1",
  "key5": "4p1KfbH68zZxemxKGgN1s9RHwV781nCTsCT4wcTRhsk2nPKh3DQQdgbUEmyg5LZzd8oEafzn7dRGM5mf8aErLxn4",
  "key6": "Dy8GQ2B2aX7AQCDuxZdVdmBwK9zrDKVJVdvps3NqAtnyNxbHKv8vV2mEY9UJZk5xLxTg2L5EZGf7ezeEndgdyG6",
  "key7": "42xzescJ2mSyRA1ghTv1Hs6CGyTQ5KdPDTWJL4WWhtpmQwsCWNt4ZFUDxeYcr55tPAHWZVMNLBNt9FV4Dk2hp8ZW",
  "key8": "3GuskcJnmGTuVactxDHcDbaoTNu1kv5FKeeRHwXDUzry5BXCxPkCpVU73omsFjkk3T2orcU49qNZ66W6DPM2jagZ",
  "key9": "451JbvpeVYJDuLDUN3gN3oMXGDk7giQQ3MSoBvt4bhyuSDeHi7TQwkHp5LweAGhDr9vjaXGVgjaR11ujbeVNiKCQ",
  "key10": "3Lwo6WSGtpSQ7AV7QAJ9JrAM433t7n4NpC7Lmds5rhtP18GDQbuzecUXQn1erPzXMwKpjBjfjvG98NYUDmDMNT2i",
  "key11": "52DB1xTUWvwzou1thArHQERMtBLu5nDfMgCWc5wpdW1Ro1Yp7fe51nUxGe4hH9eqikGpBxCsAbk1Zdk1n65RXBc7",
  "key12": "49HjqozQCAaUrAUkZjUkUYKiRjar87zwcKUmQrLLpqR3tWzXv4HsMDQb5eVWqhP3oHCLE6t873TbW6ZpqDmVsSmz",
  "key13": "C2xfqPw7YMxKAXfJBt1CkdcBtFkmdBA1LSuSTDz6vQK5RtQuD3HhghLmhYTXmP5YVjtNanneSQLGUFTm2SBkBy3",
  "key14": "2euoCPQNzfU2ufLd9tWnjAqoeHfN3DnyWjEpLWUaaECUGhwj8Y3dmSsEHZ1Fpiifw2csrx1ZFcREyJeXBTzsXEQL",
  "key15": "5EpUthhQPkmzY3QX3C7d8nyoFLeFkvLz8neRbM4BrNBPjt82AM5Tc3ha8xB47NaR3ocF7QHSfLLmCjbGKU9UfAtk",
  "key16": "4xiRjZ5dpZFZgoXiXHyZoXym4wkdwfBnTSRperC86TdorSQkV9sU6HcU5hSe4785aBhu4Tgm2LCX7c8ksxZnGy7p",
  "key17": "MumuQgaMurymmd7XF9JLhcUgPMsVZmpHwJZrV22ZPnHXh1QqCbpPwjnYpGP7oLVHx5PcWRKkfC51F8GdfBcXG2C",
  "key18": "54H5WxDEXD4jJyYCGU2feAkrELxVD3pyDr4us8x2hJ1VkGdFsa89Jre3jpwajfztFiTS6knNnhWboGXxVZKrVqoC",
  "key19": "5CJ5rnsst1B7dvki9pKhxurqAcQcL2ARZniTvgMzScMTG2dHxdNR5SpKCPw7FeUSpc68Gnge6cZQMLG4aU1PnG86",
  "key20": "2q49hqHrC7GBkSsEAnVVuhXn7h2zKqqXYnH5qbK5wwyT2r2D69H2B4wmuSVa9ZPn1s15p1hpWqJr8rbUZKFAyisz",
  "key21": "MfTPiSBgNuoCop7wVq4atLNSFc2aWRMK3ax3JM7n7EN7951doG6zby9cx1soQ6PLrsjtbYrdDdp8qiD9pEm8ECQ",
  "key22": "3QYXEyF1VhGdFMyBuTjrAd9xVzeaMZLN9ZD3HAoG2efwPgKGg26Ly66Ru6JypjzTBDZQsANDKWtJEk3Fp3EheP9L",
  "key23": "4kJRbzMtvVvsgYJXdKBou7G2cgQNqkyH2WVyWvhhnT5QX9NyQX7DWZ93Hrs262kHSYP3gcWaTzy8fUjBiDbgH7V",
  "key24": "3npnGaiPe1xhL5fXuWPgtMPKWUtAHhzybMwVa6doAaVw1Afq4cjVsFPRKpxWuKHWKxKLrrximUXDGzAPk1vjBYp2",
  "key25": "36qBmZ92Hn48BMyavLqkUFnpFekpSrNXg1CNCrXPNMkej5FdybNo7Mcvs1ofSFcCkN3ZsvJb5CeW3SFsX8f8mF9f",
  "key26": "cwAcPiWKEeQ8zKYNq5xW7Vnpr31nzuPmm5KAJ36GDF8hj9vx7kvH6cGQVDezUsdppKquHAjH8DC5MZyDu8ep6xC",
  "key27": "XETD9tu6zyiGUbVawXdMR7o2pLS7kWn38BMLWVhKekd7Uh9NV357rmHsw1ks2jc3JvQQS5VjwqqG4pKWyrLJoeZ",
  "key28": "4SjDWTYJwnf95R7fck8jT5iQMuN715YR3kRVkoLDLS5ff1W6qQbKtcSay9Tcp818PGetiykE55QLogL7UFLA7Aqn"
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
