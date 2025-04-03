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
    "GpYUvpFFLn7iVLPcxfY6NPPybwCu8N61o7Jf6KaHbcxjZQ3xKCbH6dxzj8gWGdXjz9M3Ka3aamGEivn3bw4cZXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jtri7neZD38891QHmEu9D2NU87d9uLZwUipNdUD8QQepFsnAWCbbD2a1K8q1qvS5J6Ti1P5rxkpC7o8CBwjo8gs",
  "key1": "26JnrZ2aZsVbEJipqH6c2KUXS88TPf3AJxEdcUSXGYyR3G9URoii1n3nshedRKc8mRFJttfVG7NA4k6VedGkmTEm",
  "key2": "ZmtE51Ere7YXHsrnFhKmX8VQ4LS9d4s9D4gNK9tpzkYSf91z19boKMgKMhKTDBKUweqGaPnUWkN7XXje7BPhY4d",
  "key3": "5ap142SVSC769LsZ5PrpvqrRUvwiRaV4Vcv8JrgkXZ88QQFWLDW5eYjeXp245VUHp6UTGcJcm2tbGVUsSKkoVega",
  "key4": "2numggpgCJc9hHVuSgY7u4ywno95QF7U7B6ED8dgviTW8wjXAde4fcnt6DVcdhhFnQv5n8Nvfupva4MwTTj6JXu",
  "key5": "4yLgGkBWYmWTPPBvncfxqbhPNTu5y3poeqJP8QngJqYZFXv3KqT2PJ7J8zKTat9K8YJYcewyTuQKv7RXd5BSCaDS",
  "key6": "2KGLRKXrf9J3MGhbt7NcvY2HzX5gKSUu77M8PtSWPkRGRNp6HzgRmxtJNzeEyq1bnKCiiGKEFRbD2YsxqJBS2bcf",
  "key7": "5Wv5XpLqfawaWqFTzozBibxebeEEBmUTPhW6T2LCHAJf7qjxHsYm8vYMQnQiNUMwToXXPBpTrdEcoayHP8vvdNau",
  "key8": "2y326YGhWoYNuVcb4QH3PErJTXxkzhNc5skUyRA9TLsNbQw2XToDyqw6n7DM38P55UR1tt8Ei7oAU1aScMHtCZzE",
  "key9": "4s4yVQnJHA6Sq4ZfUAUBEXxveAJkMRxYJjtcEvZGVGj5nreQf3TP9xfiDQeSBELy2SsjW811HVqsv5nbB8Ei7RGZ",
  "key10": "42q2XzGwLkdi6wyu3gZwbJZgm1eYFuea2HGUvcMswptqiQ6mktVRkwtCqbyUUYNS1Jr4Xk7dNqCFXvcKnk8qdhWV",
  "key11": "4zFvAcL9CjC7kvpYvceuDazZtSEQL9DAANwM5p65eKmAUJb9j4VRiyMXQXMSTtKVUiRUXXAnD3zC5nX4PrKKQEJC",
  "key12": "3KDvccaNN8jNV2h9evUjn1B7fYahNMCENq1jr9oJbF2V2Eaqv5zifJT2uxFa2H3qsmz1vQivQceTRqEHTnrASwfi",
  "key13": "5fkq3Gz6QBpvJQgUFxLFDb91aYZBfCtxKU5S1vtcj5iQ9uuEWXAhfNbn16xiwByqVH3vij593xTaD2pywAv6UrKi",
  "key14": "36RCbeXCUSEvCvpJsFyskKYxbPeuPhETQDvF42kQYZPVWbwD9mvHkphnPT5h7Kifw8nAo9HqrK7eR7f12PPbrBX9",
  "key15": "3f79cDiAkrxX35hksE4HKGL2rmWsU8JskcGmwYN61LohWWcuTUpCLggib1CsfjxRsdAeQjmFiiVU4gRM4dEqnuiF",
  "key16": "5ifesAVf6HozjdZnBQrzGtid8cCcWksrmxFx9Rbj1n3ZQ58EmqndEyNd63nLeL9iDhtYoUk8LvpW7DdcnU1WL8yQ",
  "key17": "3B9f4crfUZP7Zsw3tCLM9kHWdX1Sebtkd2D3p514xLVE93LoXkxejLckNim31BDLyLPzy7trK62cAh2vNqidegtU",
  "key18": "3Zj5aGuUSLdDRGeQSq7n7wJjyyFrJNTmmSLEirRVSDX9tuR2spxRMyhTqpcY9g8X1Tes3Bmfssc72owhUGiemf6a",
  "key19": "5F5g55eEoSHfyVUw6gxaNyXL3ZPPuFzKuZxDGwfqMKuLwPnJGjm3uzvb9SrnNPhLrCgdZKtqUuAD2Y7bwejP5mRk",
  "key20": "4TZZMLmBmbg2cbB5oHWjqMPSo8sSAnxHtPEqJQbnKevEMcdsez8tonXxUkLV7XFGZt9XumxG4Gptw3ChQuCQ2XKi",
  "key21": "5ZPDbb2JJj746Uzs7yq8jf6KhDzAsswnpzwferqveqjzA1nnweMUMf3SeMd4qVd9LSqX1jXXmoHHwigXuwFtoL6u",
  "key22": "2kfwZHRDLjzYBDba9NTRsLn2wvuitU9g5PrVcjiyvmUe5V7cibWe5NY7pktHFqaAD8x2CurHRMRvaciA9x6B5ipT",
  "key23": "622uKWargpzGauAJ1sDdM7Ab9qD8r3z3UsTFmS5uPecPY3Z4imUvoGzaFMZJehoQPwfe9HXXV7dTLEEtx3tTxen5",
  "key24": "4vb8E7CKn5jSCHnczv5QBbwbmrhpofXBT2EU9ASyLQDnQFbGxMXBvLoZ4NGfadXjYxFDoeDxsYNtdpYnwV9JDQpB",
  "key25": "4nwCcNK9HKbV5ig5QUEqLGgUQ1P5PAbVPSk3hSkM64mzxS6kgdK5hghWK8mMbiPQqkTbYz7WLGS4LePpUNg86Bo2",
  "key26": "F5kx33tnNrBybie39HK3DM8Qm5YfaWGwn8qpv9jqxBSaGvcK9buxuheWXsNjnVzQDyQScgYW49WxsMuUG6mir8J",
  "key27": "WXhfNjyaxvV1MoM7Hj1gvPqsnKURBMcTuFrWCg4xke9BpTZP7P5UzMrdbKVhxaqwPLFBrKvrBz9wbdptyLB49ys",
  "key28": "5uYqsX1au23Ct4RxK1EqcHnLKA2SQFY3QUwJxtHQDB57Abweiv1sjWeAfD1oMniamWtunFrircRbNX16PYcY5GSm",
  "key29": "5UFYKagY1NjExyRZozYuJNYFEuDNBZrXCyKV5u2DYBHXAKoNoVy1UtxcXYLxYi3oexzVuGhHi9xjafon8PeRucCp",
  "key30": "356Cq29zPDTAFcwu3bdZpuEARjiG6E2gWkVcNUH3wBXiPEfTYb83dsgE8R7zQAxuux7s8YtaG5W9shxP9mgSF9cb",
  "key31": "3jJ6epuVuUue2ddT8oSaCmkBqrr3VywZbHezWwPd1MJhStWyaFdjBMKEmq8npgTW14kjrTzjjtczaimxnPFGYaPR",
  "key32": "5tJSrhcJCVQqAvz9gnkA8Mc5tHcTQouhTC4X9gtUYECksJoir93gpVJJnDc8y8rMAJwTqhocurCDELafgkcHDGsE"
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
