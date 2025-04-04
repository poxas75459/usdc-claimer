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
    "6XMuobfwqH4Xepyo1fYnzKvyBVBZS26Y76KnuUtobZK8Z4MPeV5xMzJUm1H8axVgXQ7arGdp1SkNK13u9kdPcz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWSE6X3e3Usde8Nhmm96qcKJMCRbwTd4obUu4kRkvwEN4M2XqxdAzoByMGj2YBhJk1XTxWMwK2r9fLkbmX4Dti4",
  "key1": "4u2r5T9CySX9pru4T4sQuuXKA2v9RhB41DfB8oNEFnxoGVR7XKooomCcCzzT551zooZ7WbdgPH6b4g9s1qKX84tv",
  "key2": "3VbBuXNEASQXAmb2tMxQFHHDQdXrTyoBFqX3YeKjUyuoam7X5djuJ9GrQge1n3ZrpS25uTPNP9U7fiw7z6NP6FCj",
  "key3": "ftP4NxhXw4g3iH5jvSSV39bxUA35yWqW8zkyFrDmbmSQvxszwGSC7rirasmJMEGx79uyXgvTxYPjVkgS7C3KQY1",
  "key4": "zds3gYga1r73oa4ik6eMRYcsCFbcsyqagxsfE9k7qUusCKFFwW885b9G9tq9y1MfaNDvL6mgUAydn5fm8pQRKmL",
  "key5": "V8xK39fS9qrXHs92vj68QCnph4X2y2sVuuxyAcWudmze3K61toCU8x1cY1iLBuGvTG9FqHGe82Z8fwHQMBEuCrZ",
  "key6": "CAqzxPvcoqrr6Avt4dLGh4cuztf1i6K1EeCXsWNKnjZRsD28C9AwHSmC32qPgtJYNzMjGVSBzvLAe24qwaU5Vpj",
  "key7": "3S32brjWUqUfgtxnnuRcZDFJui9n7M8qh3HtPJj2GHtHq33FSNPhDeLNNejJMdAGqNuGqHDGcn28a1rZFVcNqEEt",
  "key8": "3rtZPcRjgVeE954CP5DsnUd6wuDMTqrBKvPwxH6Vwwa77Vp9MGbU3SftJkGhvB6PHRS4UTSgVh5Rwmajv7t5qqoa",
  "key9": "5twsvDWoV2bRRdr89xihAajg37bzzLkojhRR4gQg5hCTivCuixowfFwnpi8mXz17cmkHSti4gWt2akgd5SLXyaW9",
  "key10": "37wDkWmtwvd3XE1ENBi9GYbsqvFLtb6gWgYpRzkc2S3s3e9wvEgTVTwHB8VNHjJdhVMZJx56NrS2phDBsSNt244J",
  "key11": "3rgjK778XTS2mcjoDWy5t3muNJWwgwHjatyLBCE4ijyNcnJ49PzhFetDV2hKsVaCqGUPazwMvYgsvAG9UMiMWVff",
  "key12": "5U6KwDygZMZV14Qkee1wHc2HJbMxBPxdHq1kiVDmzZAUMoCcTKScQ3qksaLYkRn3XouC3S5ZBVLWyYfpdqzJmpoh",
  "key13": "4PbfLYSCJiYHkxsqtHbABoWsDdYXA9DTqnL372m8cE13E1oxTzux53xjbH9qKQQHzayZFMESMAdaRuLGLQ4FCEHi",
  "key14": "24ofQh2RD1tKcZUh6zqET2tC9YtmGavd5y2g6cN1E6A41mimgSkjvcceMRBQZd7kfe1nyWNwWMj3ZcLMYayBzqSg",
  "key15": "43N7fWdrm1bZKubiHYDVfDjBd8NwSJQL8kvumvCUhcsfswu97zgDYKDZL8Wjqdu21MxSrambwLQNTcbcKPjLQW17",
  "key16": "5M5AhoJHthu5iU9nKhkHB8dYDw3RaoAeWDobxpJj2UfEbxxyg29fLUWGL5m96Vt5PiBREGcUUcuxhnBN4CYjhseD",
  "key17": "2uppbWYRG342wCTcSLUARtzjEhUXKoVFHtTyLB1VPxoHk9owsLdXYvZKkC776Mfj1aWKsy7hWNALKdb9jWmMhFpa",
  "key18": "4VsNzP1zJNzXVKg9upLjj1q9z6codotFSmrk4MQmdWN5U6uYH9UbLoA8JKeAqj8TMYXRwS31wbAnE2vXu1N2HkqK",
  "key19": "5QsnAWqMqWxiwEqvdYUTc39GYdLXgTRf64LVcceECPExRtY6L5VrGe7zLH3MQfy8FbHZsSZTkDT67Ywjm2Tk43sh",
  "key20": "2tzUn7U637F7c3mDR3Y3NXqQpkQBiuMK4Pw3k3bfckRCmpekuSrgCRP1t6vUYdtFqtTRnbiwUiKwApnAmjMTpntg",
  "key21": "3ubVzQ8cKPmpxb9xw6kJsqP4b3s4qGNRHvDBKtAVsVHN3LYJxWAMQJ5SEHaDYGzKKND52J957Q8iMXAd4fHjwgvT",
  "key22": "5svQ2rKjnHL8g3WEZ3qSn5UJXEXW6yFnmthQCN3hmfkiJ8ZyQg6QsUNqbes5wh1Wbd6t1qoEpL2n1GzUMkWEwG5G",
  "key23": "35faEt9UbytdRXZRNzpguVUcuNgcmsqWmCqekitL2KDxJGkorRqdF43sxohPnmjhqUvdYVcSooKVpVztN2TQd8K1",
  "key24": "6mzpfA3LtVDTtmq99E4dDzF3RtJ6DP6NoW5DBww1oz8RgEXgKeYYykf49XMA6QCrSP5tsgU1gGFnqtzmjYGUTeD",
  "key25": "4USGoC8g7EAUFTQxCqKGCv546DjnLnWSKUUr1FLuJdAUN1siC4N5sRTk4KRSoyQg9TDBd8WAUbBVDMnoMwf6pu1b",
  "key26": "5vGjEMuaA9WwyAG2GwpD93tjHqAWnwMKDA8RvsA7XNawA4NogmJEYjoPfFccgLkGTHsSLCHPiNEKMffSkcQDoFxo",
  "key27": "8azq2AsgNnFyykgVewYtKitduZaWodfhpega33Rz9vFCcKUPn464qrsScbNSECCBBN9ocaqdzhuSpg9116n3eSi",
  "key28": "2nHnXGz6MP8Jna1v7DpiYXomqeiZHFHDiWZQUyA2YV9m1PEDDEEZZY6pLuUcYs8geg1BD3EFph3Zn1U77fC1UmWC",
  "key29": "A3Z3YY3f6A6YWKnUi1xgp5ZXGvQcNNcsq5fi1Fm61EjbdsVKDXqQBS9cxk59qzg1BxapBrgmF3mU7pw3Jv6bjuh",
  "key30": "29ZaNPf9w7Sq5U4jU7PAAQBPKnfg64muT3Jsqv1BWaam85B7WThpQ4tNxdvseJT7Hp9wqQrCJknvyX3ySnG9pYB9",
  "key31": "4cXPufRdSKZBETSijce8baBKmQAhEyZswZyXQPoHdyKBxjGt8X1Tx8nB5gyKN3ATWJHKL5BXLBnRXR299k6hLng5",
  "key32": "VpS6MDgqm8QNuSM5oUKVCFKxv9tV2dVTM4hWVkYVgCgnLactYLn5GqwoanBxVa8FRUBNUUQmBzUmECTx2Sa6vCt",
  "key33": "2eQAwqkygrPNwnCKuyMvu2tbMD73bQMkvxUijA71kf9YN4eVeQNiCG6Au5NXeY8yLjAdD8S12U5AQCtF175dtwvG",
  "key34": "iFPChtFxNgmDbTmBbRFR3uLiW6aqKqJmJihUXdyg6ZUR9g4ryxoLe5eSSpBP5pmxzQwdDe4mJN5hMqQ8H82fdY2",
  "key35": "2oF5CxmnXUBMmKPFHgvPd5aeMEyCBc9uWuRUmShUzKmPVoFhmMYKieKjvLnPbXQMSwbsW4A7nNLNB7rPMFEeWHrR",
  "key36": "55HdRqamQMFRB18A9zZkjyS1TpQCX1TYwNMTGuDy99aAerq3gqTNKbRhUyQKwL9amcyYmbA1B29uhhga7oGbViWc",
  "key37": "2qRtPCfS78znaQ9UoCjwSBH4BMqFeXK2tQrpkRBSDL2E1drRSRAZqz96thfKgMLkY8Lyku6B2cw5auBaBDHiiRby",
  "key38": "oAD2oMeVYLZfk9FQwJzpSSJekndxSKB5qD68qKgez29fBoRUUeaKeBFfbA5EUFtRNn5vUKKrpVYAMjLPujZFnYF",
  "key39": "3YNXxjX79DnNU6V8NXfBVRKduRyLVTVyiQQrAZTXbqrnpkNFhdQZhg42DK8ZhPTFPFQFdiLfFuwNTXmhs1qVYesG",
  "key40": "3vRA2p9gLWKbBauYBhpG3EYuJXBCJxZtc8T4JWaSxoCpVN2cXchGyJtycD3BTm4J5Bc8Jtw8C5Y8axJymg3uoHhT",
  "key41": "4J8beCVuGmZNt1hjx67UKCUwTcMUA4t8wPXHkJoorL5sQhSERQcatRsvpNng9SG8NSHV8pWfdAN4sffdTLx1jRhG",
  "key42": "2f9XkZt9yB21XUpWiZ7F9PBhosry3gNpkPNRGT7PMLfo7pAx6z5Tb4MA9PkmeWVjErajb34JttkTnNRgnndnLcXw",
  "key43": "5phV12w7EeggT1UjdznKP3Dct2vwbEZVy3oXNHrbojy6y7DUQ98E811SXCaC6dehfP6NtSui9Ry8oMuUKK4FmJXW",
  "key44": "fvYLmyieh8nZ91zi7zii1tb5XCNWVGXV4SuwqnMifGV5hLaN3KNJKBQ4ZbPGwy19nsyKY6ppaUXMYc5VSWNYg9B",
  "key45": "2HX66WHoj49AjtNNaKfT7co9dTPRQ2xqiaSGb2MwSn1UWquT3TfmfpLLsxhzdfNMmbVmpd2pxjDEb6UvLfy9aRAV",
  "key46": "2zDgoP8zwtChGNijxU1NtXxP8agKDxKWQMiVrypu8SHwKbPW3zHjYVrVWruzmUjdx53DAorhK3pciBYJtM7rsAHk",
  "key47": "iwS4yYuzypYwQHqkoTyuH6P4oXJhJkgkAd82GKcnK88gjWYrLoUV5HNDpQuGhhkdSMwYRsQDXDNw7HPey3PMq7n"
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
