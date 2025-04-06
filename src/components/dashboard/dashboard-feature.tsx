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
    "5NCeehzkcZtax94376hRmsDarGRQcAwrGSxSCP72iTy5mv3C1zvRNHvr8qTmqt1yoiX6XVu6moE9m8bcTQSpynuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJppFztCpejyZAYk6e4Utsp2NQqUmtNKKYN9VcsHmQcAMCtndtGQL73S8Uye7xibiYWwujiHQnpa8fAXQ3fhTmU",
  "key1": "5vSuyWzYjfrAZafxWHpttq3R2iVzT8xEpSKMjUsn1bWG5EU8azW28NMM58Av9o7kSoYEcJZXjpGJhPgZtrZJP3Mq",
  "key2": "5bsvMTdvZDdZ2uhrt7moNvFbxVn4Ha9HazVE1hSUpEhg8VMTndZXRGFMe3mgd4oX7GkRU7bmH67V2hwk9Tnok2Xs",
  "key3": "4D3LU8LCGmNrQcX78BbfszBYyhKTswSGGLQ8gbXNBFso9rZn9Y6TaPPKnmjndj9VRsA2a8ALR3oyXerTcqWKmER7",
  "key4": "4yPAji26kYq5zDedE5v2t9nj1P1ubMwSMjWcNVDd22FHtr33XZ6fDZUt24nyhyDv8t9RkxyJwj8JnTRt442yyTpz",
  "key5": "4sWuZdyFBUTMfiBBS3ZyugzbjnwSa6EcTn7TiAy8bM321qbqQcnXqEo88fVuSQNTab2Jxo3Kq1Z65odVR7ZTFSpy",
  "key6": "54PWemGC1eX7JPZnDvsa3Af7EKbQmUM6HNjhkHQRd6NQH2LVwp7YXddjxvaYPvpJyW3BQkoUPfC3CwHrKsggTYUk",
  "key7": "2bpPdVGgmiy8FouUrrc5WwR8Q9Rh8Q5r7rVXSGCrmfxictGPVmatzMfGExyHj3r1CZQwtqAujoukCqvMfT2t7Ynb",
  "key8": "3htKhNHhG9sDS5ftqvam7tUWoTCRiGJ7KriToJHjM5gtKN5mRJQzYpeBPQjniya2T1LqhGjaNxuoFxMq7dz1ktvn",
  "key9": "4iQeeTU8xAZ2otRuugW6stMc4nh13gRhFrwCVqWQcDG6SNocTzJFASxqaz68vqmExCXpfwdiRsTVY7bMrq6JcER9",
  "key10": "3ksjLTM1rysH2oAkWpA95zPDdSbZiDeVSUP1eWgv8Sevf9q5sW3ULqLU4ZG6vjMMvyUkVAEbLErj6mK4pYVHwPMv",
  "key11": "5dsAYN86duCG6sqsARD7ogDdrFkx1Cdv64EyWLx7xaj85rhzMNzcmqu9Bp4CCPZhD1Ttxie6k2YG6cHHH2T7nSNN",
  "key12": "444wWzDBCMqkJfakdwEU1BGKeaHxi6etLrdTkkZq4CLX8eEppe92dYJ6eJyp7HgWLpbbFMkyt46ZdkuB25e2QtvU",
  "key13": "3yZB8fYQ9E3TArnFVt1hnhLQrTMSdvL7TtRGH7xQyEhHB1n6ddUo3NZ1U2rbhzn3qpmYgmbmvAjMgGtcwJVYXEKP",
  "key14": "3vcfmjT4fXc6MjUfveuDGJKezwAm9mH6QRnYn2TLAXTFYAvzyFCrR3M3fTGJ6AGgonpPXE9s5b9ZPYexMwcTiniK",
  "key15": "5MQMakzgJF6TcbcXtyHDz9owzPe7QBcrahFkgwUe8m6gHmE95WUySUht8D8LzaK8LpTwd1R7jsbf8tETvm7zLBAK",
  "key16": "3JZzDi79UTRvxiW5obT7AfvYsRXthkiwUeEpNnWcjejhDRMHVQuz5VK6PBZe5NMmbF52YPGGaGoftbuf7icxWes9",
  "key17": "24NYeSqKU7wqwL9e3Ba1E1YyJUbEWhdkzc5a5bvwQECtSuX1ebgPNSTWYKYRqLykKXBgRK6ARaBQCZbmSjSouS3f",
  "key18": "4Ge6BnAbkd9BCnLsCaZf4p3Jh6qZuKeSiBy11nDbqeSjPdxQcFRZfqeiiMZeFdmPC3dc9G7TegCkrAxh5Skg1Vmr",
  "key19": "41GieMFWFYHEUtNfJS7q4utJ6NT4hQc1WbPeUtdHqGnjZ5KPEt5HjoR2hhYJvCW2hvn7FAyoqNFR572YQtu7tdiB",
  "key20": "48o7vFdvBPme8KJAhY8R5MuQUqFsSHwj2qF6i2c4TjJPcdZbupLEC28ZTX5bFPaBHNMESm4bx74ta6RFtZ97ywD",
  "key21": "3MN3tt3eWvfE8ACoapphQQFMK3yRT74oQFUoxS8eYQnvftCh7PF9Qnbw8UGSTfE6e8r1oxLRbjdC7FR4rGzBXAsF",
  "key22": "Kqo3ypwDHBgXa1NxQC5eBV4og4Ty7Zq8H73dg2QyMNJuvrjPkLfFkKREVTRZbhcLocmLj8fi6GmxCjhUbq6YC5R",
  "key23": "258tmEEQs68MGYGVsu9AyWn15TdbE9qehPKPJHX3P27EvFzr5x8MFzX41Ufp7gtf9HpuDo4KczVkhgZjDBd1wupM",
  "key24": "dBpjEu8TCQgGUL18vz4bYpsdxjkgxBWPk3a7rw5yH6Fxy6q74UEPr6eF3DwB9gxfW3xt62UFGKimnogwY5VigGy",
  "key25": "Soh9MWTQQdTr3icpTXc4RtUAkfGrxTJwqj68trUSRM8fCrvxz15PLQEgAc6g9FaHkH1pdYDuDnbNKqXAN6Rh7JR",
  "key26": "5GUJk99Bc579Ev9FxARfTLhQZASxTCuw5XCKz5FGgZWkrSVnKBUv746uFnTLW6FbQFb2NiCBFvvumuWRva7X6Qxr",
  "key27": "44CXe9Y9i5LW8J6UhYZBxjMvdaSbaYoEqCC7FxAz7UAehCnci6ZZySG2xmvbNiKAxPqnTmgMRxy5orbMBEHtTXvr",
  "key28": "i4sqq76cNEqHm3KK2Zi6kLJesDwUmwN7Vyhn33tWGjRiE8wsU8ZHmrsCnbQobHziPftqkCcAN7i1JdFF3D3RKQX",
  "key29": "2mqyjhiSzSh3WCQEeajKDDY8bpgdYBGVZs2Vuhx9Xsa3YLWibCmi3m3EKX1H4KPhpV63g9gqAFkwRoY3HNpCpWUy",
  "key30": "55uzFSvfHwxJcaWRFoQ1MSa9WcB1XynXF9LN5qYeX1JKavghZf3xJTjpK6rzCMut2pEAZ3n1rG6L4oygaHNewLKr",
  "key31": "4C1gaG1TGnGpCXKyegRZ2MVRsiS9hEpXiNyrc6mpVvcLG31QK8DE8wuaQkkMHc4pj4jrNhzg15tm2n6mUDXue22b",
  "key32": "9nyNWgT6aaVDHjFYbLXnMXe3uYxjbuU8SAVKRxastAJ1peoeikazYiSQDnQsXngSqAvNDbuEPELeqYEHHzmjAyf",
  "key33": "XLPfAsqaj4pM1PfUaW7A1hFKzTiU3MkS1wZdNQuUwNUSQmKgZhBZ3GQf7U1Gazpotg1wQsoxHcECVqFGda2fkuM",
  "key34": "52xxMC6cLbTPLzKzqDRZdw6NJqbzZL1W2Z8oKRYuPQH8w9NgJDvprynGQG43Ax4vjyqZ7pUmQYNx9kiUyecyLjzJ",
  "key35": "5ZDeUnpbkGGHHeEBsZUh4z5K47mqFnSYCvw4AWLo7hFw4sUFoaQBSdnv241pYiVsEWs8HckzpDgnkQAqFHvQkz8N",
  "key36": "xBHDH36y7fepcBsasCsoxcDCjNthvGji2bLbHhMZ5Z29uZ7rTvLg3hDqLoSM9CVVBTJtUEht44os7h4uo79EJoV",
  "key37": "2RQVzxnCKUUThwpwtCrd7qXPURqdD9JVWs2xWskUQDdSTmXTdjYuo5x6bXfTZMEnVG7XL3b3mqjXq1rENYpT4jHg",
  "key38": "6z83MaCYJev9q34DXpZwKkM5csbkuL8jjvp9boFsV8Bcoa1mD8rZyqXkSyhngQi78KKQrsWM2i312YWLLixkCkS",
  "key39": "2xY19rebwEpz7bu3KLmtUV6rPQ9XQ22sf96zy4T67SqW9L93ZSVo9X9ur1jJwojTUvfmjLe8MY6MXdAK53NZZE4L",
  "key40": "47RJzAe9N7kyfX2xriobgBc2uwF3EdZqRNTDuSRnfhcVGjs9XcnkRDpHygYVqizSUKAvhzBumfJ74GS5LaJNnNzP",
  "key41": "5L7sbKU7JS6tThUpotFXvz1iDYiQYgDhh9Un42PLdDJmZshB4GjqYJ2Boq2JRNH6HhGayWuFbv4pv3np2XCnc61g",
  "key42": "EMzdAHtAchzz3esvBXr9U2fPgkYtVqt6MEwPZFvSWBTnVy18t4T4hcxXR69cM8GWsvX9YPmb1W3GV9dCshvg2Vs",
  "key43": "58V1FnE74WoDTWRMvrtXxqUujTqDLoQeR2JbjP45VSW4S5wRP21EwAfU9Wgobfuxkgjfq67hM3bPh8LQyH9QTkTJ",
  "key44": "5PDgHUUq8gPQLcqEXU1YBJdCAVFCoVUdzZtYAzSB5sGoeN16KqR1Fnx3pXb6xLb5DwH3J7CJrtsiNB8TLHwgPfDv",
  "key45": "32ygAp4e1p8LAsKBNmWGinj1KGHdEcK6HYb4LbgseyC82NXF85i9VokrZrtWLUc5DSvLweFxoJk2Sc8pjKRzicRD",
  "key46": "zoA1VARjSattZ3rPCk3Hie3bsUZpQmWSddFtE9HP2QxVUHvtmxnKGqQseDBANrPpCj1v6kgf3iydpY7JJNGigUZ",
  "key47": "GP4N7MrMKMmSHU1TQfRD2byyDbseTZYkCjoJCjnXEMnCW7GHWHUMP6YQcYnKBJsupv1KsRuNtqtfQthbEF3wdJv"
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
