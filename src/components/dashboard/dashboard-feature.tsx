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
    "p4Yo7uNendXiLgJa8UXS4nUrGBQhU8wtJxwk57avsCYeK2xArrJKRUF9eyBxHe3XwZZWyV2DTbivuEDd4WgH6RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zLwDwFmbkarfC1j5BknHUn6dG9kiydvHhsWMD73KRek1qhn3d9VgxTbJLH4MChKrSGAWwBPp8uabCpMjGhGu2m7",
  "key1": "4Us1g6XbokPMtzwPDtvf7Fmnjuca4CdVKn52R4dvyGwJqUar8jnncukiq8KrMrEZX2bLQok443aycwmdT2aJnA7M",
  "key2": "5GTd9uUFmvRRevp6tcPfA6duE5HjjErEcqFJNx6ASUW2w927SZ8dGMmuCCvykPjE2PWc3ckfLfgSeRv4fQQtYhPT",
  "key3": "uPipqWSRAS5ETLwzowQhbFpDA26PPygjRzGSQ17XAGbfJ151526874hLn5ibcWJEoiXNNCjYRjcKQxgmsYbeBkU",
  "key4": "3jnhFDiDbcvXXQos5gYkJuC7QaV6HjBJ8vWBfxbFRe6YeLx7tvGymPXV1nct3phrBr4nFkXdq3QnZedmMW66AYke",
  "key5": "jPQkNfDaAV6iBZmP9fxcXMrXSpMLCnXvCeCa7bj19KBen78eEHCdpUAZyp7YnZixVrVoimWSaFf5BurLno8eFeE",
  "key6": "J2xeL2ak8Yfq7DF5FuMW4xVgZHXetEUKd1GDNETgafvrEdBRZYJoDL7rbppDUp4AKhPo2NEf1CYGc7cUYtxEU6T",
  "key7": "4cRGc8vYqxFJoTgXUQXYrGYBFNDmUBJfJWNzaJJEwSPBuGN1vUApZiWSjP93iTKbHgmWe5iQ1vN4rjUwMAVJnC3u",
  "key8": "23VvjnffgKSqbPM7EfAPqNYCidTnq3ocqxCYptrG5BMeXBRQ2xTGnYSXtVdGUtFEAawyn2QyukDKCo56tjofVnKS",
  "key9": "um2mdt8iGj12CUZqihk4vvCB4UzNSu7mtuoKyuiUZjUShZ5iRUZtHixPsfZYEYsyG89NDKcM71LEyXxbT4uNvWf",
  "key10": "4ALuJmKyzDcLod8sFsccasdYC5JwLoxwxrR5UqXFhLf3Bx7r7Ay1Z5UFxSqzWNLXbstVf3k7B6g3rP5UVGDRV1xy",
  "key11": "3xTN5xKcwp7xQ5uFYjffEkqXgZyLk36LZWbjfeWQxBvVxB6gaAVMWSnGTgYpGyWyU63HNTYZAniDrEQphmqEMwPB",
  "key12": "5yYQhNXAUPqZChS5AgZkySHNNd2xXV3f1XDJrKKmMRBYHT9uNaGNvAnLgAkq7ToAhvpyYFtjeeQ1EGXkPmM1DLra",
  "key13": "4S4FphQTwoZ3Z2nkWm3Bz36BoCTRSPbhtCc7scmzEQ2VeYWbLM8gRkcAKs4kB25pR1nSqfQCENiVmdGg8FLM2Y6M",
  "key14": "2vy7bZbt7EdQjT5duFC8699y2J9W8Ee2BzRWVTVoRnTcUt6KSffBY59jD6RjZqYFxg18iAk3CTiM8442AZAWDiMV",
  "key15": "4JD62arUWoU8bBKfPsRSzzQLMFgCTXCBvv5sDKL8wm4HPME7M75aB3tqywX1sWFmiHFwSBSqPUUZLK1mQFQhvxzL",
  "key16": "2XY4pGUvqVLBGaiUtCjZoVHLng2iQ7VLaEEpQiBMWCf8ogDDxxuEexPpaH1BVXQ5nVpWXK77aviiAg5NWueYDFvB",
  "key17": "24FqzyG8ScgFQ57FqjPVDDEyLRV6m9b5udpiKSmmJdgu2EwvX6p7FrSivVW2uSFPUgUWa6cMyWM4mMj5A4wfJqVC",
  "key18": "3pNckMf1iRq36KszQBSVF9aMv4WwuNiBRDPuhmuMAAypycE59FfFHXVcaEfDUx7i6nTDfUugm4wmFw54K4HT1KD6",
  "key19": "2HxmDAAHawtVgrtMfJfAPfTou48cj14aqHpNeeooXJ11ie7eXhXPpMNG1nbe3d2wHvjFsovHxLCpT18UVMLj9qTt",
  "key20": "2m8pfLHfh3rRFkQ175F4tthUUNqoSFz8HiBgy76cLRqWpTMtL6sA9sE5xczxWVxzXvxzrDMtoz5RY9uY8sRBXDYt",
  "key21": "a7U1rdJfTDc9nT9b7JetCEik5poqegC5GWyVqDcmQyrS7F1Tn7oBH1RFqAvNm4G6VQXudMnj3zLsceNjyTM9ycc",
  "key22": "vEhNwsZvJx1ciiqyi7rzeANdqz8Qd2QdHZ4qYztFGeLmgHarn8MWbN7s7vm3DZb1toxSBEeD6KJ1RqqVZTSgiYB",
  "key23": "vCRaMU6kiP26KNedMADtwgQJitKfE2m5U21QjLf3aknsAbHd8EEy8kyxGiTGNafjLJ5jAHEcK2uq6gTVroMnEDa",
  "key24": "GUQcWpFvwp1DCZoc6HqB1Tx425wtneUJkafaRwyWGKyepADaeSCPPBPGv59ePGMUrTzGSzmSjeDqpPnkg7rdCNp",
  "key25": "BKoBsCM6b5bxPQiy1YNoxZRmDmAMjcXb4dxuGG2CRuYqwVZMEaCTRoywW5NwGDgr3sHtJCEKDt2eE9je7HNcDxm",
  "key26": "3ZVEJXUrystqmTgtiiwdufXv1jZz9Zkg4QEyzdWK1e3m3wc4WabJqvaksSef7FwhBrLa2jbaZ2hTNAmUBYGtFATC",
  "key27": "4Ho145df4uTuac15TTZ4HrLbF3sbESWcyjBkwPPTFRQ7GCYnxi3sTvrChCs7FMg12f3M6oHF9AzCui7Zr1YSccsY",
  "key28": "4cjXUo7RR1Rseie7VKc8731UWCyhyN7fiQJb2CxEDRHjLZEQoGkHVBuKk6nqth9Ch5cqewnJpvfWDHTpCSgpKAfN",
  "key29": "4ZmWteDyZBFfDJmyoTckpDtuMzDJZfAsGvnS1d63mKKYzLLGUoohpbLpyhPp2j3kpZR1fGkrMUd88tuQJRmYxmvp",
  "key30": "51nQsCXzdYzFYJTfDZK4ybLDAPpcKyhVKLrBS6ncynUAxivYtaGz1oPv5NHifN9mmCdmedNPiEhvjs7x7GaBpaG8",
  "key31": "23k3zLctAfKgNTm2erFVzPGbNhVGFhEpfD3whUhfkCGDcTgMVqh41LtvV1fQsC9jA9LnxRpVcMsunT7yzPzHmb4D",
  "key32": "3yyNQMFC5NdHMFgZ42ySVgsZrNaX1EfujphFggXtt119WiSb7FdXG2ppC5DMRogwUJBQvFcbv5fbBxTgG4qodkg3",
  "key33": "kqwjwYuRVZ2HSk1iTzP4iMmn3Uat1ydn8e3dGf7GU9KBi4KCrsVc8dikYzp6LWKaz6P9UusZYn3vr64mXBvsacF",
  "key34": "5UpHJ1AxmfzMUSiebKo1iRU4AgXMpuqFtwPo62TqQqWdxLVvQbLJfX9sDTEpdAodbar8hbubbGKvKLV6CTnJssL6",
  "key35": "qjw5WV4rKFpJNB5JHw7x15h1g7YrXcqRNX4ZaptFN7xB9mYqiRRwuVMgrFaJWX711BBqAR7t7vEUtsyXHnavVZk",
  "key36": "5CzmLJ5xtSickYRUrrBPB7voyLX9yoMwmkYsdBk3J3ZkN8DWn95GsCCRdtnET9Zk9nTJxDgeqadG5BJ64ZB7zavp",
  "key37": "3X4CTY3mJcGs6TiS6JPTCgRpySgvmrvTentVQaK9GAD8DwqZWEA6TZL5TNQXMn7z29PPpzi9nTtzZ81z9i2PBzUM",
  "key38": "2MNjwuBk1NEaQS82CJ8VJub7j3i33aiwmyE1uphF1iAexDdrBJacxzwK3cKJwzjadNJMXdsYSB1bmrct8PCJ9XHa",
  "key39": "5jHeYPHLZrtNm7r3mQpLUZ2da5jHBaA46LXCPJ63m9dssmyKE6BbjJ1Ka36BMg8ZtuS2r5JVMTPegkfdBpKCAZpu",
  "key40": "2ULXJ9wz8WcRncqgWZaAN7ZTMmDNyA2QXocQ99xn2qggCETDysn7qwwLYfzKntxrwxUB9UpVSzvP3GQS77neuRSV",
  "key41": "5uEAMQXMNYpg6RXUvaNDsTihjRcaaya2Ac3eU1A5M6TbDv2yFTqeYzo4KxQXtFFCBEavhqH4UWFWQjUTdaWcYR3P",
  "key42": "3rqDr8mZV898ZVw7cejVi6GqC8638u439X71eXNg954c3FaiXVdfMD55UQTVXafAFgjA87bFguNP9vrubXagNvAU",
  "key43": "2iWkQfNgmSuLcmeYHFRCqBqmEvNkdBivPYeoW88fSfimkxm4oxEgbZZDcUgv3K62LLQoeJhYp7AhdPC6uUFFidZL",
  "key44": "2iin4K3WoySooXM7KqVfD8PH3yPLmX7SoB1T7TtZGumbPUe49RE8ZBg7AsPdvLpb6PQ2Y3HA9xvwRLPj469iDUr3",
  "key45": "5G2Q4XrcUXYEMNo7y5o2P2kZKLEVA3zZ8kuGKvj4npAoyKnwJMMNBgnCeiJQvntNJFY3aghTFCEwXERXZ72wdgd2",
  "key46": "R4UV3xouxBhECLsgzWZTg2fZpUTmrbpMvFUSpFA2Kc3RPsDzLG3yow3qPEL5mqXJRmCFXopE4FPsGDzEQtMaDSK",
  "key47": "4GSpfA2ByLFAnGvqUAHhiVkqAuqRg7CbnET3fZsudruJxveMuHGXPF2uM7tJmPthuAAsuXXQy5NLdkUPePG1JxB9",
  "key48": "2NPhbxc38UtCDW7rLwECXmo4KhAEK3Gieu87oahp9eMzMjicN8cZR21Q3mt7aWtbEEH7cYXXb4NRG7zmuZrSevN4"
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
