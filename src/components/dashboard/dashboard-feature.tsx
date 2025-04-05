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
    "5CkcRPLZFWw8Pqiq34361PBJHhSJAzDx97CynzJMhKaoQePchSqGRzXEEG9mB97xjsBd2dNziDMznSawkEf7unSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MxdPcbvLpwyF23h7BNrerpJzvvDFvbkdScRvWZauYZQD3yKte6dznuCAG79cQATyCpC1eFvZJUmoQKowvq55uBC",
  "key1": "5ixBywgE81Nroe1hMqBGEFv8Tje35ETnAeNQ1Gg8js3PrzY8HdMCbbZzrcKXJrpBTerRzygN93zvFY9D8BmVaaZk",
  "key2": "5gumMjDauYgqPyYd5hGesTyGezktVEzRaWUdb9y4B5MNzMQ2X1WjMku99FtCnoo969xk2ABPLFFLfwtW6iow3T7h",
  "key3": "2egHZihWe5Q9ZvGqfevPFDBtzUibefyHhvA3sH5anEaXyHPeSJTM8tdStdU24jDr96sK6prztukrgyyhCkqEUYCU",
  "key4": "32b11kosiTqGVMQy2MDbYoRYE7A9Ni7saRYEFn5Lm9oKVjcXDWCoYmK4dFeMrq5UzjuTFWzWAohY2cQpxRgyhaR5",
  "key5": "38pysEdnVHuPK7DGnCo4opykD2RrN5owzEoKJ6xYVgY2RtM8fRvd5SS1j43XpErcZ1ceq728GKkkDzhXxW4Qk27s",
  "key6": "58GdeqcGFnix613eoykVF9RoCnMr9LEfyXHo4rrnnxqv9hpr73g1FacsvQqXCCXrdzP3ZFdu4KVXAygW95cUQyP",
  "key7": "2svMLGSfVww3A7p4jx5c8kG7jzMFHTkRep26YFAaaPtuLZGB3gfE7fnATnTrACUaCCmw2pNH8hiy9eCg4dnC4PiH",
  "key8": "251ABByFRre2yH7qKNW7X5GfUqssJKJhFeTQs6SqLTyJtw1wrZYyCR6xFBDuxcw7iZxsRAav9WGXGFQWXNVJ7yJ7",
  "key9": "47n3p7HwBV2XiJV3fsiWBAbGRb53wSakE15dg7dfBfcgN8mEkdckQSNwzzs2AS3b5Yc9q78i6rXBvoUoHTFCziKf",
  "key10": "2cKQrPozah32SxTp8fb2ffxZv2iMG7Vq2dotUBUGciAEWqzXipKigvLw2heDnMytYGrq8aS5eFDrZLdH317JdQdL",
  "key11": "38F6m88anKz4a94yNPR8TLkAkum5EfGhTbjxeNV99G88b5ouzyFYz2yzvQNDF2AUfeyTG28BjLeA4ApXNWkT2nNt",
  "key12": "327xubtKERvv6o1EdJ9ugrftwaGtTTzkJxnQ1QsCmDbQnnU93oLNbRDVsRUt2eG6QEeZJQT7DNSpHSKz94KmyWLQ",
  "key13": "MWsL9tcjukT65dqEqyUAJLsQHLaGWSxnsgACsXhwTBbvx4bRHGw6mwMG8SypRTwLgQHAyo6i84Eu9c4TDMhRd4W",
  "key14": "5cz1gEvqbk9cgwYB97G5TQ249rcV2384aGRW3584aT1SsArPQR3PFtv6FhToovECngiouiqnTHVMqcswG4fWzX7p",
  "key15": "5DLco4WbhAUyFKgdR7rLqDQmYKb1TpEHJq3G4D5NKoWoP3bhJvo4Sc35P44ygV3WQg3SxHTaaHTYptfTpezoNagW",
  "key16": "AouknfFAmRmfff7vCJXrbVby8RmtuVaooHcX4sVzXgHJ1AHnjqduY2uwwcHwjBNmSPZTCwuq16YXiski6ZCKCQi",
  "key17": "3bw7TsUBtiCck49ZFmEXBmnGQnRPDMjZfEAK6hoWkatojEUCG3FAXV7jn1y5X7o24mZnhELLppakLXA8zHKHbEvU",
  "key18": "3fWWtTqb6qf7AwY2LMsaSDek7KbBNUqANj1HiJbmNsccMxsLLqDnEzASq2iumfbnrmCBYoo7VFM4ZoZ2KGf75KWs",
  "key19": "J3Z1s15dwgbvyRustZgQfySAjJoQMUGurE84k9GUAwvqQnDtLixFXtBLNhfxDuHeKwyhxh3njSEXZaovVM3ofjn",
  "key20": "5LyBES1MSb5UYChT56zfFfm7mK4oeM8gaGSmLbgAukzihmcuNAW9R9hE15TTBDYRs41CPo4G9zhY4LTQsxKQX2ZK",
  "key21": "3YCzNGvmuN2qzdFhuYiHwWCAJjqUaQk1mh966jebEFBiDVMWXGmaMB3m7dZNycSYNwDUFrwr4cu9j5cQrJYaPbkq",
  "key22": "tMWYEHPAQVYigGnAuLRvKRoNqCwka5Nq72WZNFhEmoGZnEumkU1KVjPc2tYx5tZ39Hw1wRqu9tQdHcHvq56cdee",
  "key23": "4DK3W6hP5ApWzE36JG7zkpLgxq7AfqZgEEyPyXMobYYAipWEv59qfjFnrzRhCweKPzxRmWwFrnguQ4YoZCBA4f4F",
  "key24": "3T6LXwhPXGGdAJAWfktP3S6sVDyW7MnNfPDe7QwW7vPbtRWP5jajTmNiavGd3BcczezF4eYR6HRQj4gNUVH14SDa",
  "key25": "3zMttZp9DFdtQiahfiAF3ohaWNnz4g7yNXEAYb1ZahET1R4aMddjqn2f9abQ38vTtAp2d2idWHwLiZbHMoxAZuq3",
  "key26": "5GBUsWn2zt8qxyWxUrRCxm8VjmgRQwHqBTacNERCE95U5rrJKPbyPEB4b7jzVWjWS4ke8WXr6dCUTUaZK3u4AsCu",
  "key27": "NN959tBqGKJcADpLdLQYe7HTMaV9GThtUAbaQ1ee1vqsenwJxPqqc7NSTXBf6t7u8evoHXhbRg61tpJYssVkwSy",
  "key28": "7nmqi8mkYcELEzSTZq84vWYqmrGHCoKPtF8ocVjkh6AuSFF5QdkknozdF8hTUKvMHni9jC56RTCu1MkgT9k6Dmo",
  "key29": "5jhEsVZbbANPTfsKDgym7gJYdqW3f79pgQufqYxLdFzC2MsKwqDcXaPKrtpt2q497z4qsD6Qng8xw6Kt9xkr7LSk",
  "key30": "4jHPdaLyor5BTK1PrJnDyfGSWeXq52NqK7Pub5cwRr4jdQcr1F3r9ayEzPsBYks1C3PZVmiPunF22SyLmr9tE7sH",
  "key31": "211FVWNoBn3UuPyPXAfEZnayfyZvYmMD93HmGCXrTrrQuqz7RYNW9NeGD6gmgeX5GjKKXRnNqWxruP4EU7pvoNAA",
  "key32": "LpDXduyqCHgk7yp714fnnXt1LdsbufJUmevtSWgQrJLbTYgVvbCjirdowW233AmMXTNMmR6LC2daAZ9StdtHAGt",
  "key33": "fsUFCFZcKRjFENR49akxw9wU99EqLCD4VzSfSqKNLkDZqV1TtNdTEJCpgKEQSqxoMTd2QqY3Y4ytPHkdNA9nUes",
  "key34": "24hy5fiLyZbKqJAFwYW8NqdxV3Nm2zxeCktT5biY2eefobTHbjo5H1XJNicBXrvGQQX67ngBviqMkymynUurA8jq",
  "key35": "5dqeXUzkqXykyggpQbNgwGQJRdzqu8x6i5h4CsYEux85S125cciu4GzVcr51wpgBh4sMqC4h7KdrLue8zjbMip5E",
  "key36": "3K9oDG3PY4sL9o79ePmcEYvw2HTn1MKbVwoQ13726a2z8yxHZaAnHZWeQJUcGiTHPo9ZQ5pRi2uegDDZguevAevp",
  "key37": "4uLcxVfrhGBPxdY1niWkjZVWpgLUXqbB9DuNTFwuqp4m9G9NWrbE2rAPTTMgZzvRDUFXXNve69ipcK2p5RDAYUeW",
  "key38": "4N4oT3rdmvhkCYFKuwEnMtp4DDzRyHtSv3s6yZbPiqdBLhXFGRi81ghXsxw6yMqzedCXcys6SjwvYNyNxN4EEPAb",
  "key39": "BiK1YLvtp7y7k1cFoDG3wybRGdnH855GqaKywkqTtCxnvpRRTieovo5qdyvtTXMJepJiGe2oTHcFjMVbeTV6Pvc",
  "key40": "3VCTie6gURRG4BLXdkUNR1EHHqgMM64R4oeH6XxPMDyb6DhsqEMeR5W3TSdfJ4fy1eFzZeLXvJ7JhAiCwZLV2Ko"
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
