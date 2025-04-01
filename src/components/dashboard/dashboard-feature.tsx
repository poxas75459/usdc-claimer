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
    "4NXhsgr666Lsjs5vy26Pezb32rzBjegxC7T9UfLbrn1qEaSRz4XXrKuNPV7xv8ueuYuKBf3m3x8Xd4EMnoEwsWP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tbno1LZguhw3BkbcHQoVZYzxQrabxL7fYww6ZCcyGRQWE8ALnd9NsJK85Cy5PVT7ur8CGvsqbx8gBp1m1Na2pnm",
  "key1": "5LFnaAa1yuTBEEqLf65LQVsJfUHGAfQTxpidb6AuUkjUKnQtqTqSNmaBu7A4JvdN14Gc8QvCJb4tX8QSopBmKXM9",
  "key2": "5uSkcKCdisaXMFeNZXaWzYqGYBvPvrapMc9aq87nXZmZ6yEVXuidDZdsnU1bhYyoS4WE8c2V8gpnKABskutxHvcv",
  "key3": "37AwKZyFTmcgXni5xeA7xZ2zKoNio7KvQQqT4SkcRFXRyVkBM4yX1bZCuE4FCKk2CvhNifVdakGcT5QwqX61TtnR",
  "key4": "2qXcDxxMXxPZxbJpwxkKefjMDoynLHFTRjF58ndiAyDDHMYSpfzQsYNN9C39VKD2WeS6VtXSJRcEHpPY8peB2AbE",
  "key5": "2xZ1QigVdYVvmYAb9RNKMEeRMc7ujeCU5e6Y7xW8VDNUgkcr4EVmdGsCaet4tXaeBb7WNJ1QyCurBjUuCXQJqThh",
  "key6": "wsdpBrwbjhNUPZFDWyDBwZVqGL565WaJFp3ZyahL5mXUXkBRzchZ3jGkC2ELEXnwC7MhvFYXY8Xa3twgyzCKQCf",
  "key7": "hNjTHcUQmW1tPuRzikR6WEs4yQXiediNzzvyRGrNjLr5L1P8pnnhu6eMHcEakWywGMmCy2S43Jwx4Vgo1bFMwWc",
  "key8": "4UHaAwg2ZVVpX3LCHWCXCxW6hdz3DAELVeoJ22PvPfQFQnHasP7QXWJRg3ph1efphVP6SBh4mhV76KpRaKmK5EDp",
  "key9": "4aF6pFaanTor5TPmKSowYriadfxyQfjS6SM8g68Q9m41yaSaakG9Mcw3ZrmNavWyJihL2sqEvNQzHg3L8jBrd5uP",
  "key10": "4EYBza7epqeK6c3u4c8jLHCPeYoGt4gd9KShCmcvqe2evGcGuboofbosxs9uD1ZMoE1vqYPg2Rd1gF7p9vr9RmgU",
  "key11": "EE1wrhhAmNmWvU4gRoLwAJMZJwUHjWWY4Uv6rn5KmevLthjxZBU8U9Z55Ni8MFbCHvJtQK4kS1CkZeQPNxG1eUU",
  "key12": "XhYM6mhAk8jaG1VT71qyVRf1FM589fgzKvmS3ur28MUru2k7uBacTzrKxudrYkkTBUnRdpywJzpHvRYCxBQdcVa",
  "key13": "469w1PyFPyXhVg6sBiG3wUQGz8Uqzq8qKGbYouLXcbWnkisgV5ne4djLhrJGkE8iYsoQgQKi3hnLV5Y1saPKAE17",
  "key14": "49d7jt6FJipESsnWMhDHoUNiDp2AJ2BB7ixFMzTDnk36jux7xN7DSLz2sTWZ1XL8iE7if6qUyxAAm3v47vZcA5Cx",
  "key15": "4X4kbsezKYqESC7vRqWqc9VJCUR81HH3hSmNxxn8N7GyKq4GnQLMBEtnD2fLVrWVBKFE7zAE4ZWN9ScYZEcrmRAZ",
  "key16": "4EGwACx7dTzuqYXnXesJNAHHxReGvXNDkxLq72zfWcNjGXM8TsvPDPEbTa51tbxt43wiMJz3zqVFQR3At46om6B1",
  "key17": "ZYy9FwJmuyUYGb8NLmZ7uQQcMYz8r9ES5tmhMnUd49GPZkh6BXwisNnErqgHMSs6kCvb2BCPk79AqTha2bv3RWN",
  "key18": "22jHtjwfhUMsojsqGs47ebjHp8TUEcw3N8LEQtmoPWL4GK8idKEuoFRBtrTTTMNhQEEs6FRGJ8oReWZzCTZS8sbj",
  "key19": "55JQftNG8CK9eEvea7uS9GxhF2j8KJeeSei1JE22Vq2AaEBYhKW7X15TGQcb5b2thNKiKKVzDfxK152W5G4hQTQZ",
  "key20": "3mh1zyAwP3hXh6zDYdmuZPQjXf4i6qvZGYhqUu52pwkKRVyeBXrpBJC4yt1N1QqQg4BMeY1vZjbGMsK2AHjG7wKF",
  "key21": "5Hf39FW1wii2Xk2YHpgLiknhDBzvJk7Eg76kCBuv2xp1CGRKWoft1Muo5LBa4fusLiR88YaYp7evJ1WqyZGNtRZn",
  "key22": "D3RSWqdzRhvhPA7u953vEE9FL4rFubdHMmLtJe3HYbU9eDVVL89ozKBhsWDpe2zBRviih4oMpTeEVBbHzVfy8H2",
  "key23": "23YBNPRtvciftQUSqeBQ3wdnKPh2b75VWSadyLfh7chu8AzN75zq2CjrVoRoCAyzkWJkUUMdr2uupaVFjAXczufk",
  "key24": "3nuXdfswpwyRMXmit2xsCKuYS3KUBpj8qZaSvmtJr3tBGoJg954HkWa1ee5FtzP1oAg1ypE3Zsepf6av5fttv18u",
  "key25": "5wkHjqhdCqfZiuYHAVZ5MuLLaKQKSBAzoirwudsd5bUHmxXqt6kvpockyQHPirsJFng9cwCgczWZhBrow6cwY7T4",
  "key26": "5Htrib39xA7JCZ1P8WLG14M3pSB8LU4jqPUtvhSKf3kKsoaHcLKu6dGSD51ygVgKCtfZmq3x5EgYWnTA7pjBrugb",
  "key27": "5Bmpwv9CXnCeAgksiBwTW1Gjof8ZzA6BvMWzmxCqKPmf4YuHq4K3Rrs9wvHZSzGtLcpU7UiRQikPtiP67ZS1fEwA",
  "key28": "5HSnPQhkYS3k5ZomqTjXiumvZ3hz4jBsPkaQsooujhYg4vxr157wzYNcGikhwoBfdqxiBKMu9VoqiBNRHAX1UeZ1",
  "key29": "54Siye8FXmX4XNoNHjBNccrpM6ZGmKW6L7rmMP63rUwebQmdfxG9x8W6QkDL7KG7AVgaehEosDQVooArGo72EMsm",
  "key30": "5WByq5T1nHgqZZuaqcFH653bZoE9uE9sKW1cCAictcN3djhZFhm3iLw4SpnuKs3Jt87rdJkJSvygbUb2kYdE6kLn",
  "key31": "44uuBD5aadEB3VrcXtkm5cCrM4RrNqFcxtY2ycenQycYwxye5VQihLtiPZ2krcY4oEAWHhwtg51kmKNFEc9kxf9k",
  "key32": "4X5HgDBBTV7jgL7Gr23UXvyjZnsDBCNc4BUr66xZgsqk8mWcRixYq4xJsUqJ22po6dJRzoaCQCyzvSzimyZi3WFY",
  "key33": "3whWKXr4D1xKTA1t3HYogvQJssxm1D2vxgzj6pvuM4DM7r3TdAzuXveYPEM9f69QKW7DxLKs1HFCy24FAjK42Zb",
  "key34": "5A7N1tJP6H5FkUz4TY64XsnkBbKCZ6eM3CppnXEHPbW8znj7ATrEG5gJrKnBnzN2Q1nRe4LaHMfgcptF3MXPUPuf",
  "key35": "4voptFuvaEuCbUzGWqyg7yJ9Khaxq7uMJEGiBrdqtGY5XGgyjB2HmWqNFw2JTUhmh6tSA65iJskGgpvjHU5WYa2K",
  "key36": "5QbNwTMV3yafe5qmrgmunkhyd8xSR5zm5YzjQGmtsWTVS5azVoGFyg98C8Hoi2BtfgtreUethmNEnHoVu9xTJwhB"
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
