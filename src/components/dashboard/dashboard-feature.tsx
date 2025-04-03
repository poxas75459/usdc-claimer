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
    "42Taf7JEeqS7McrbvnaqpKrrfx3QDFxXciK9AFWF8QntB5oytkKSgcsh5vwg3Kw3b8VQ5PYiE8pW6eBKS2agNDks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QebexpbWP88c116V9ffSKcA7ev3okckMJNWDqBn7SiGMWYRw9VhVtJvTTAAahiHFAUiLQB9m3Sf8zx4rD7Rj2Y8",
  "key1": "iZoLPCRnFHo7BkfPGzmCpN7De1sJGr42X9e9JP7QPpvFySEiXmXexBdgkinz1VucJUWFrHSY91RSvRFyTEv37tM",
  "key2": "4vtWG9o2QnpiYn49Zt1a6eEdr1XnEkmrDdnTi2Fnz6xqpqZdwmb8CTZuf8weSxYo9pHrUuUKVXn3X3Ye6biPK9Rc",
  "key3": "5iNaBQcvBEkcpovBd8o8X14DSAoyA6f6re2A3YYYhGeYx5aA7PixVJUg9kK8Sqqut4JPGAPwCihnu1MheesEdLpK",
  "key4": "5hkh6jBSwxkNeNrG2m1QHTSxbaDZdWdcXx8QNxy9WUHsKod73NcKZfAucXEHXz8UspxDYAbJzJLwnwNPUHsANKZS",
  "key5": "61HjeXiP65TVJ9zyTTrKchPbqBx5HXCEVQLnYqTznUEcXdnjq2fkwm4WZM7aZxRDZ3fuSQfkvibxxjgvgEWVswaa",
  "key6": "5c6XzEzWTfkamjNLhR3xFQE8gcjR3tVxb8hN4H5Ko5dwTNNW4H3KjCnDhdNLBhinRvUKxD8DAkAgNrr56NghihPv",
  "key7": "3KhH6x7zMWG44x9A85gWXoG9ahPMv2FrRKMSS46vLy6KKids86DZv7u6qipc2gnacHi1boEYkjkdLhAXaX443q9V",
  "key8": "4DqnaR9FawfTWPTHahrqoF87Rv2CNwR2tmKyoV9AptT9rDkpAMgkjaZLdbERQWomZFUBrhGLefWMV8PfDbJhdaV6",
  "key9": "3U8uHXZZcn9hAF7cNv2h64iw21yhSH8JmVJ3VcNoZ5A8Jt8p4sR29XRg7HMr38XvcTUDZzYJoNSPGgJQRZYDtrDP",
  "key10": "3oe4duqdS6HL15ToRh5nH1hkumaTM9BKEEdDBP1fP5QzuahtM6ExNRbzVEY9pEaLrGqJgAXnz9QTV3njHMmrx4Z9",
  "key11": "5Eer6RfmvipPB1WdtvzKpx6gqz67X251CTT7EnUqJVrikRWEoHaLonWHZezVXtKLiQLkfX21L7uCEdJNCcJccyHq",
  "key12": "3WTLj4Mx8m2jNkcqi8PW7EYnV5ad7hZAsQVC9UsZnEBmzWvn3PYhuuPfY18nDejEfMfMV6YooXtsBmWXbeZeY9Ch",
  "key13": "4Bjjs2tbLq9zFhg5AoWJQorciknRmbpmPvqeLNo4Bu3ERDyfKD8QbUKvzyxTEFdX1fyeZqagRnieiN9CWLvivTm4",
  "key14": "5d61EikT7j1rPkZfzVRNYkJq3hF3tKhjSnCTMWWycRMTA6VxewhPvyo9NHCTRUVjRrGaXTrN1KiFRLQbqTfbaZep",
  "key15": "4DihCMRhzXoRFDHigKsBo8UfhPVceV8tb6zC9AV2MuuCeJF8pf2ntLkjUoA6RH3UxoQwzfgSnLThD1NiQPmodajE",
  "key16": "2TBQ34UeJUDCyAPMKhKbkfu3piZAddvwz4dJu2HhJrxxEGKS4RjPa9L2eN4czLZUVTP8TPfkcUbBZSfGoysv3Wkk",
  "key17": "5A9pJQg3qbtTSFUwMp7Gcgv3fJRtRJk2vnjDJsFWquD9o9swoQWaizKBqWLg6RxhpyJCxvio1v7e2EXJEYmLtgtb",
  "key18": "5m6W7tEKYSDPNE4kyrAkxrn7WZ6Fw53fBGMQW745e2CQr9LAqhQoHfuFa2sDCd8qKrxG2a4TKKdJEo2Ra9EoKXaC",
  "key19": "2U9xzbrRELkBHRcyXTD7LAWGM14vuyExXn6pxfuSXTGFj9DNCTpo4g8wUDwbr7iQdoaozQZrMeUVBwcEW2yzPTyC",
  "key20": "237ejTQTwL9udZAibtb1a7ocHRtwuEb6T3PdqxdEdyNbC3V7kdW8b1vPrgddHeLJtL8PTq4N7y5JyjKCBQVhqMUN",
  "key21": "BVkwzEW9D12EnCqcoSBQmWSftFvXQmzmGREJ19mApuMTeWkV7k9BE1i3rABHT5oy7jZjPksk97VCwiCYYvugeZD",
  "key22": "3v1HqaSJyqKS8NXAVbPcCk5JG3QgRYaCDcguu3FjMWtEqjChMJ8rG2dVwW3yeSBqeH2WauQADaB6849rU5H6RYVz",
  "key23": "1aHZaSDKeJYgRtUHoncN4N9UahzUgNusSPnfC9BzA5fmAfVT54iDs1zt9YcnBpYBJxDZuDme3NXeZqPR4VGSsaG",
  "key24": "YWf5trC6hzNMzfNHA6Fh1XauMYZAV8Mc4sezcpGhxXUo8MAP5gVPRCixcz4yBdEvzEqYmLn6iptMsRwrK7jMVPE",
  "key25": "5ngZBTGop129SqRrRwZJeva18rQEDB3iBAqfkP5TeFpLREgQr61TqdCpAMhhGwjyGMUNLVNufDK1nRjjzYuQt5oM",
  "key26": "64uq5bk95X68nsYjy5tc9RvDb1MJ1snXEZsTghHBfYqZd5GUPiKbMPt6RcWEgn49eweqNE5ayyBe2efKSaTxvYj",
  "key27": "3kcwt5GhC51L8RTucvKgQ9gbWzzSyArwFqjfJjiQC4c8ZxZxHvR9YGU5Rr8DaBue1cmSbUfHSu5UtaBb3bmNDzSV",
  "key28": "3mvV2STsBzf2hfkWinPMVYFz8qLeejNPArgMVmhSUDYqenUtQkN7XubdcY9TgYTFovE4Wk9sxAr4eSVJtNXpfbXF",
  "key29": "5VbiXsbnKzjLNA9Mt9iwv3uhPJmds2VQsaUY4VhZuu7Fkpku6BJe9wDYw1LL7MpL1UQt64ijS65ndNMY9hv89aJe",
  "key30": "rKHDowcz8KMsey5b3Mvmgri1yJSyEKNHUchkNdZPqoXUxi3R8KvpCccJmiSHZyfurBtxnkZigHt5oqEB5uP1gSi",
  "key31": "5nZWthUY3hEYKsBqyvGbPVEop5uPnnStxsQ2xREM5maMN3nmxSTZuhvGKB4PJeEcb5dBJLc6nW5dznix41UqcPcZ",
  "key32": "5iijJ1cchSjEyWNxfMM4Yg9jfoTUQxXEEXfoBaYYfLMomriN4jzaQ5JpqeZNz6dD49cxMjJFXF2S6Vf3i5tMdg4y",
  "key33": "2MNw21AjQ4Pw1AtsRZ46WtUdRs7rpe5s2U65CHqPxS4cZvSURd2gL9mZLJtsFhP2W4QdroJhP3Qxx9ZDo5ywqorr",
  "key34": "2yzSewcRJ2VCckbDGbW4hHvT3cjnJvRzGFp2X4v7iwGc4XpBTU8iUX8E9dM3MFsTi5gQAjfeBH1n1ZYYF6bb5eZM",
  "key35": "2PWoA68XuxK5X8nCkd6hrnRWRDgLxXu6DnXpCEx9MVyvqfkUysjZHFmnjkG6SFVByPutcrdWxwb214rWPGJLEkUk",
  "key36": "uVpQuGZgzBtkg3MbrVn7nDM6QR91fM5jKqY8FD958omni75Zgeeg8RkNxxb6Hxfu6KusaeyVJv73b9mcyEWt3Nm",
  "key37": "4THqimUKBNqGMGtzz97kpdPLGkYEk1su3NBvd9uzagno7o98FATxpFLiE9vjjNFrhBD3AWCRbbMv9KXbducjZnbP",
  "key38": "WZoiri5KNHhJokm4j6ccS5JRvk6bNepbDbHhGSkSCQeCwTnLrw949JwMQbCQda6vizsgYwnJUaE3np6LEryNxHJ",
  "key39": "4bJw8S9J6Drgb5ZFgcQJ6MwQpH6KTcNjfWaiVRkRkXQHfpgTDG59WWD5z83zw9ZaeTbkXY6LvhVgJcrusowNmpC3",
  "key40": "63G3uDGV9dmBZnxDf7V8Ee5W78rwmhn6q2HtJtSnCXgVKRKBg1vTchX9QTigdax5pn8iLHcqVFssqjDDCWaXpifA",
  "key41": "3badG7ehuhmbdoRj13t9FHb5BVFdryvCf8g7gawkJZL1PFDG48CwVU7Em5NZuYaQRZ8PDpeAah5yeaoSBMbtuVPJ",
  "key42": "2rwh72778EA1HFc6ZGT5vy1nrQ5bZq6ZG41azzkMLPxiwbbMJg7zVU4Vcx7wXW147m16muMLat3YruRp5XnXcPVK",
  "key43": "2wKStP5PX33XxtddFG2XxeYLKrv4bQhNsvaZMEKrw4mQuCNioFbVuTfvzFRwAHethvgqcY9SGtpLueBTHErSZQPs",
  "key44": "5Q5dBWJWyZ4rV8STc5tASY88nRxUBn7DnDCPtxEf3d5KA8oZTGhf2kozR8B9YPMHNfW8fhDKTwVDeAUxDSgKzWsg"
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
