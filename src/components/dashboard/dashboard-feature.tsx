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
    "4wQ2BpFEKwbhHUXKtAV8PAVg3niFRBukYaReh3ppQsogF5KR7TPPXBQm9EF3q1ccPEt9gaxrrhcXj9BZg21117mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CjBT1fZgRbzf4gFNvTLkXyUSQQCsSbFTpU1xU2zE8d5HjS1opYJbwrvSZG6TMscJ8Nh2wisv86oe6cMuLndxh2u",
  "key1": "5hqcVG5G6duC7XVJG38udd28nJW3schrJfJK4aGSGSsZitCQWP47YSyr9tFgz7TwqMJwQ7u4wWcGMzkpNqkPRLpM",
  "key2": "2myJnoayzwdfYokP1qNBsDHxic7uh5SbE2tuVG8PCruvdCkwQRdskgQW16db8rzdtj5WyznVH86vENxuwWZoAqz9",
  "key3": "2DXTC24TutSvk2F51GBks389QupjepbnTFDiyeiiPn7KyAH3CU5vXjNdQUAf89ZqFjEobVYZtPQKVmgAghiqCn4Q",
  "key4": "w6a5cu849XshuRqaJomMUbQFTZTowdwsVi4dqdEB6VJQvpXkE3qsiAfPF6d6VwWqypwZJCMK9VLBQgYmqiL8hRs",
  "key5": "5AUFjABqoA2uFjh4VjQ4KynhpDoJr1EYv6NhTTsRvrjiKavRFyY5nSDpJozCnVphFTMjdfqRawZW7Dd7nonjr2Py",
  "key6": "jUvMzZENDG2sqfQRQvw8Xd3WbhDawAPP95hgfpfZX97xs2C6xmzZPsFKVm4mG5kZWo78pdGTZ6wEyDs6DUiP4yR",
  "key7": "gDukJYy9byb2UYdzhAi7qXXNtEWq7JE4UYndjequrKWMpFwG46Rnow1B5n5S9eVQjsxxPPpeKgTLSjgFoE2zUYD",
  "key8": "5dJhDE3aMeWThroyUpTQ3c94iiGN1ee7FNXZUjZ7kytmsewnEV9wyAnVR5uD24ASYCwtrBjcYc8hDC9BBScR7F2Y",
  "key9": "5R4Hvx7QnoZ6X9nxsrWrCXRCgGWiRwFX9oMutmpHSRnDBUxSMTfNmvQX1tiWxYJhXzHEC75yyjBQ6A1jh13bW6ZL",
  "key10": "37whvJp6mHJe2GWEiJyW1VKsKUpGJ3wv2ULM7z1jNmzJzJDnAao3Jao7dT9qpDmufszvWziMzphvx541d4FVTUz6",
  "key11": "F5GsG6XwDqWK64VMsQZRXeKYWcXenXtmn3g8Tb87MM9WfTxusoBeGyiD6Fhuegc7qPQCch5rs8FGZFHKYBW1M6x",
  "key12": "2WYTsMYV7iqGxMR2exYHV6GLqzBbgs5eDDdBBuwd5JAw9Aj73Fg9CE8AesFqBWfZsffQu6ouJi3VcjCdbNaRv9wr",
  "key13": "5b9h5g1gEzRfdYyUBYzpHfhVy3RVovX2V4kNPyh1XxJ9bqNbj4DrQNa1uSEyWYLcJQCZStHtzksXKdtb41RSrdQX",
  "key14": "3GaQzGgyqTRhWBpdP89anTEUpfZTsiZsqHdoN4yBEnHGDXa5ewSewWbra5VA5xEAwwWHGUSTL8wxYxggDAwdUzu5",
  "key15": "2xHW1v8g8KCy48ZEQNszwKp7SD2a4sWvpANjHNF3tyCqemuBZve4faLK7x3Evu62bbYL6BBzrhrP1zCtT5hwSEXJ",
  "key16": "248tHsqPxiKYgoCdNqWxWrgyMavac75MwsYKBVLmu5F8psdeXfy4EdfKb9iLYuPdhZLEX3kUFiEzMAWJk3vXbuBY",
  "key17": "2RPYrcK12yjbSH6nbP8Yd7Uxy33w27GLXwpzW14yQ24Pywudu9HhE3VLQAPYQuE2znuDFbDcBVANrHhVMXmcTJCa",
  "key18": "4rucANF2L3uXHtcwaQMn8q4vo3wgX8dB2yMt9kfYtoe2rcrx4R2tTewkLyM3eh7CibkZJgNAKxXc7GsfoGiHJ3c6",
  "key19": "FkMAZniLjGxyoWLhV6T9PRso5UkQ2GBFMAD7zC9Du2SMoopQfDBXPLzRSPUiZf3xJ1MkTVMTAGaGwhnpTWX9yC4",
  "key20": "4hxLqRfdTC6uAnta4rSWFrq2Jwj5uBspCC5jhuQ4TcY82QxV7GMNV49as7mDmB8ALMNc4a2Jm3qvJvrDwPUSjNNQ",
  "key21": "4Kee7eP9LT6cjRV1U5pnEuvL5QxqgkMUEyzQWWcbFTo1yUYzMJmhbmBq8gAoxErtwCxQzMWyrgb5G1NRjFFATpu8",
  "key22": "5Yf1nL4jbc6dnY73t5SkewiM3cgL773kt5zh66Go5GNMyJLVB56cy42NLqAtfxbUfqSzGWCfs2X4SGYwyvf7x2yf",
  "key23": "sUiiDZurbu4Z1Eu7Jor3rxbk4dk2FMUStSxb4oX4YGWWSjgyL4JFbCbboyx6p4RFB82tBCc5hkD81D8e1UyzEsu",
  "key24": "2YxtxPsR8FL7KrKJgXUN1wwSix9nPxqahorFF3TYLNacMAfZQUXna756f82yccaBrCiu9zwj8SQP3EQBN6SesnYR",
  "key25": "KEQQEkby3RhEpBWZDwmkRsWxNCsL3YpeCT9YLueEJxFKrtqbDSDJBmyHmaWCs1aR6mrAcHgNHPdYp9xmFHVnkuZ",
  "key26": "2dLtZEHHEYBkcMMs62sDZGtHCNxiy8qpj4XfXuXHsDBCYMTbaKLEUMvU2HFLdUx4tmM9eQQ3TYPprifruDB1tjmq",
  "key27": "51WtmBh2yEzTubWVawDKAL8Wt6RqXK5kH2wjYXpLTVToZ5NJZLv76Y2SDdBbX5YAxmNTXiSV7FcqGnE798icPugB",
  "key28": "ai3oMPBeybGBgVHvF4JDZSbxGuybcdFq9QHAJcwejUDpvoxNwLY9D9AyE3Ntw683RJecRRkynmki6wjGV9wvYR1",
  "key29": "3cQuHYHSgKnYien3zUNZnG2G8DrS5iGy3ihNapeusuCz9QE6Mtt9V2CgyZNtD714XKTJA6JNm4J7scYSRVrRuESn",
  "key30": "25uvAzUVD7CkvHJTgQKN6zHAToXguwbs8zF1knRmxNb2d7txXJbAS6mg8BMkeHhWpASLaQcypjrJiG3X8BhuhyAZ",
  "key31": "4F4Ya95CAng1ZPWAbaQ7fRt76pzS6drsj26TwRNq38WwVAe1Yxb5LkrJnvp7c4PtSQhX7ykKm92jPbiLGjtx87tg",
  "key32": "3v8EXzRhy9zoHygKAC2CEZfvvNZ7GMSFk8gkJtzgLU152AQT1XQwLfDbep9VxYjS52EMosBwCUuhSNjtHzmzuyBr",
  "key33": "3XKyvbFCsPAqg3o8ZrQEdzKPUZxpkde2TRkgPT9Tch9J1uXaDq7Doz9uwPQKByNuW9UwbfJj82kM9g54Y2wN7U4E",
  "key34": "61rbNFhLJsvH7iQcHrJcgbTu9f1NyuQCAijC55Xa47ioPp56kiLo2hcCJc1rTLgvWBsPAFH4unzmkG3Ks2eeH8ZN",
  "key35": "24ymsqBvJSfVVvrZmQTsfTy8tuPtXyTBeinDGdtSgbT5TLHiK5NJxy99tMQiAm7Jg46auqijxpwA4FJKT6TF972C",
  "key36": "45pHNYQuNJMYWtfSA3gE5XWnHub6zfrt9qoSo6VdXDbm6aS5PuhzzwqkDwGXn92EVXATWPncgnvZt68RJ93Z5xR8",
  "key37": "4JZopWMMTXk1PcNswad5qH8MBDxFPK6Yptr5Qiibiz3f5hnnAndhRLGvvu4ognSvvnvsZiZ4KwQkmccwJAWVMEoV"
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
