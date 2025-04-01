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
    "4i5wKVoAgXth4hCYr8XRpXy4ras46a8dyfFV29CHpzfY47YLyC5N7VLE768b4vZmLCbQH8hdprgrEaCB6NgZZygE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnFGmzHChcCreThwbBez3A7aXYoSMmmGmgcmF4rqTQQtaAZpgKromJuos9EXEGQetmsYQhxVRPQHkeVZzfvF83M",
  "key1": "35i3kLYXkPLv3oLCoE1sCWESTbw5nrkGNaNsze2hmbxZTyPytpkCmTSpBN7RY6YoCQAENfx43zMc3sRiHpChhgzt",
  "key2": "arWN7KaVs9vAiZBAYAa5U2BB8EdBmxJXBDU8aVqsgNd7qTYYMddf6TfoRrr97UZDTmsu7NV2sqoL6Kng1ryWWsi",
  "key3": "38dYyvt2RyF4bCyuTc8xCSZbQfxUhWbnMTzkuy5vw85uNJG91eLJzgiXgBFZYkdV9dGRBEwERzZa6MmTh67qEdzY",
  "key4": "2jWk3N2z2ntTH8gVgKhWu5jSNAziKDgkk7mxURcsBJXpU1T1viGep16SJdTnkQCheKPksBq4bzunomsbniA8Br5o",
  "key5": "46yXgxa9KFZ33c3DqPLusYASotUXJHrR4RnYHGUxCenDYKj6d7fz6LtBDCj8Wxccaa5Moa75vNZd22uyjZhPxhZt",
  "key6": "5TRrjkVUyejVAuMRMYsvcqfEC3GEYLTAemQKYp2YP3VjRFugvaENitCfUV3sqbRazMUGQNEebLAsUjSpwvBuMtZh",
  "key7": "aP8LobkJjdqSkAc2JocdqNSsAMACFM1RZvjbNu9G7tPnZMfZvDefmmPRhiW5nBRUkEh7GHrhBcH3KRimAYQP61f",
  "key8": "5jTSP1mLvURZ31jDi3pefCbMFf43LFKVQBpfkQokwSkxEbogfqz1zEny2sqmKXmYSXUiTEZchqZyJzQ9wj42ZqQL",
  "key9": "2cnpKNF4gJ8Q32AbhSf8z1idtTtZFZzGFjRDLjrvRm58V3fthZ1pZ9siEj7b6qScQsG3uXJzV7GsrkXrGHDm42io",
  "key10": "5Hu3eCGiQSZJuVxmmzmj1nNtYiukrA3JvvqBCU4cCk8kAKMZSQK91goh8xKGXhpeZko5NsejQU23nUay6NgjFyAg",
  "key11": "5UoE3kJAh1qJb98odJNSSWTTUXWbTn5v6F84T9q91M6wHQVnk6VVCHYmitZfjKD8PSZmfxvWKwfPifcMKfpmnUqm",
  "key12": "rPFSNvz7cMwK1PUBmySH35WnDcTV6jWuoZczDtei5Pj9J6Hx9X3EofBcoHa1wJgcaJkKuWyXNfVvvYpQ4chcuJs",
  "key13": "3H7AcAvm9vNYF6o5tbZiZQeks2SbEnCmhjgoPi9jqiYHQQtE3613SHG1V2RuXCcyd9B84u3mfzLLzLPLxCabFpFC",
  "key14": "3g4csnnk8NwU74frDbXQyZ61hCzowFm6F8YVMoXf8bNWQVhg9QRZJdPu8WR6rsTvzkZJMANnhsqinRMKgGg2PfZ1",
  "key15": "41hgxkjFfuM4oRtsnKkKNQnhM8h1D226hZdXhfXFpdYRdHdAwVvvZkVH38swuj2TmXkm2MZSnUgpe79W6ENAGiy2",
  "key16": "2W2JFixMFJJ7wJF3dzH6sH7h191rhB63cBSpA6eXQoAJdLA5QLjE9zWXvLpmzT1Pr5NixpBFtjmTEbfhr3TfyDb7",
  "key17": "gPXSN1t5n1q66MAkH57eZSqeQBtMsk6Kxq7ftWG6oiwpD8RGrJmaP1gHSGnrpo2ETMVjwdpsQkdqdqcCKvgKh4G",
  "key18": "2uB6CepGVru8Kk631PBHGA3tyZa5kdkfaJn8XGFm9gHq7X3HJQ75kNAtfgK71Ypdo4gEQEkPYmBdSuiML8X8CNuo",
  "key19": "4sMcpZboAVniJkGGifkV2T49KcrFhujXNp2UQ8kaDzvzxHZdakZETnJC5Z3wYDkDs6MjFFiN2kWetCD4h8b2MKZY",
  "key20": "zDiB1J8N2PFXH52ULnnaQou5yyFCh2eSybSyXhhB3JDRbZ64rK9m28o2m2WqiU3rhY67EwxQrrhUo85ep96tARs",
  "key21": "21xetLFe9HfDe7jExNqYkcaBWiUuGR9FaTrZqf1tA7mP2tZqLRZ8Dk5a7zFRYSVnJPHQX7MiiEnocwbGfwHwUaJB",
  "key22": "4zaYA9HQSsgYL3oDtuJqMWe3drVsP3NbrhdfQWm7NqmMWD9hzyQysbP4LJnjfrgd8Qx4RRNpVMDeTqHKuwYE1Wyk",
  "key23": "2KUzDHfTE488MqSj8Wuopd1sWjqLr5Z6sxHywSX6rznV9qh5mqYmC3p8gVKUmLurk3t8k21egcFDqTRXWrSrSTHj",
  "key24": "4Rfs6U3XM2s132pMWZ8JnTKJhBSmZev4GZgHc9XJqrcP57gdv22Qn4irnWYpn4ow7buwS5MCUaozUjmMrtU3w8rP",
  "key25": "mdKQdUmT6Fpg4rTwRNzY6RWs3JMkCSgZRFfwnDyHSsK9UuiAjhN6cpChHZoHppP2wetkxVfrzehvhx5bBMe2uYL",
  "key26": "4E3QzysXtJYbXenuQpaXA3UgPNgYKZJmYGdswD4x8BNgEXP663pbtbqU5419cjYwBC7524WKyRnE9EEEPnKrFvVE",
  "key27": "2QFUUPAeMEVL7TtaoPHT1MBj72TwXpzBK1ZhPwVLtc8Eabg5wZ1fJaS3xxpmx7fmKrGC2a5CVGfRVmoZjFUcnjwz",
  "key28": "2V4n1XEARGmmYKLZ7WJzL7LAHZfyd6kFDh3Kb2DkhwpiajSRkRJ2RvkwccTHx3bCcTBn6YvWoaUzmWCTYcu58kd4",
  "key29": "5biyqftieS7XGTQgPhb1MPoD6d9sCQYwy5rB47cNQjSZ3NGAJiLPotaCRyDP7nzghDRtwYE1p1AzVzrhLSThfJH1",
  "key30": "5sp67knGNbfxqFA9bHPkaKZVfH48jAWtDZ81Ha6zb77rxD7ecATMf1J2CRntSwH4UWvEfzu4YhJEbEBUdrGpJRke",
  "key31": "4hLTL3XkzypQFf2u5czeraTJR245fiDc5MeAfvb64DJtgzATF9fzSdyDhuAwRU2WQ7Sv6YcWZaachr35bSkfksFB",
  "key32": "2GWQ52tWgNezqMTpJE1cB8J76fPTnvxZ1Fte19GmjZK841P5P721HyQ47rZYQBptySga92rta2w7ETot85TgYadC",
  "key33": "59QPs2C1MWvWcrL8mbFJvm99UJuWaYpQonAB9JWaKYnKpBdbifPdgHJtXWFvevH6bpHPntcZgti32tjJNMgMzf3o",
  "key34": "5iAHVz2epyD9Zc9no66C16LuJeWST7LGZEN6ieZgttfdfXYFPSDTFThuM5rh2bemDp3NbW324DuQJ8vtiFi7VNoV",
  "key35": "2AzdxQv2LL6qtdC8ECNUkaC5x6dBFaZjFogsJ537jde6e8toU47ZNujiuJSE4qRj3CTd4DoxPeDKXkGkVb5unjzC",
  "key36": "2NK1cBKi4DC8h1Q3urqtVjeaW9wPWHFXtPMPZn4CUZt3hT5tEyEw5Jrq9gn3ryHy4EykMnvmzp5Gqg9abUwQGmwn",
  "key37": "4RdkjGBwGtGKja8r7si2PYvEVWohqEmK2omCaKsfEHUh51A1xQNYgGHmnC2CT7MajtEJXXKaxQXNiUwDMTb9LUcx",
  "key38": "2qEBJshLtqCFNXXzNKNpiBBRka2E6JHqYtjoEFF4WyKNisjCRK2yXb7Zw6usf5SHoJ86d8MDbrcBa8HicprGuSuC"
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
