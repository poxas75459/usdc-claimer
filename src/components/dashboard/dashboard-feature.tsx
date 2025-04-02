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
    "5DDZAWxrrYzibJMxDMPyQrZb9pCBAimTF5izUeryHtbRbBUEsTpyy7TEqyKmak35iKzwziqkq4ALUzAUjwVNYTuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRHUd9wLW97WrEqYkXLXTStquh3uDFPMLauHW8A3mShNscHYYepgrMJ3KYJJcG5aZugFeU5wXdM5UNR6ezdXZQG",
  "key1": "2S5eShtnFZa2f6UjhwjiNfUECMnZmhWKXMZEVhNxKEPhVbDevJaLQrY15sXjTB8AmYtmBb9pGTUGGDkcPcqiZoCr",
  "key2": "gWSuzJNffWKq5FphCHCp3a3Sra8fozQ8anGKzkaR3ykjtvkMCTicbyD98hXU3Z56xWATajQevSVPLdYST2MTf8x",
  "key3": "wvhudLcoAQmhQ3shQrAXndbaZXdb2bY3p4mo8FwvioE2EcCgcXrnYpkdyiAJ6qYm7BYMjgNHzSqbm5oChyMwokA",
  "key4": "edSEifVdaPA2ARDMFTnWL2CjVvJxF93YY2GTb5i9aa8fx5eefdXxeRm2h8jRXtZTLF6cQAEK7u4MiJdv6YbrhsW",
  "key5": "44qbwg72Qk487yjJWjCqmZ428no26BptwxyZ1JcyFF52HaksTbgGHKTgvJFRytmjgsYR2Y7mRQ1WnZvkoDf2Yge7",
  "key6": "5Yzf4gd2kfVGyGc5DLRmREEHWqYpocfvwzAy8DbcjZFKfWKiQuCHFmK9BRE44eee2Zo8WS7PEe8yEV3WNsxtMjAd",
  "key7": "4N9cPk4eYWp4hmjREkAkd5gW6hit9PUMvyWKZ8bkRUDQnKFDziTM4itcsnAGVM3ccANUjQjaGTnpiW2q5mshp83t",
  "key8": "9jp3xd5gjybkkWVeLoUCAX5KpyChokkiGzGt7aoJDC8x71StUiSQLZmVXwzCSnPySWNFY8S6TvaRVhFvE79MN3s",
  "key9": "4cEJhAnNGdVHYW3p17NyG8Joxp7xep2rCb5S1z5n6YCp78AkYsrK2rHhPMr8DvtZ1Pa14qV6k15bLVqR834rZaax",
  "key10": "2X546FjTZZeFoKJN8JBsMCBg4CjGGWPg1swLrVawfy18zbU2AfMB7rWZabzqPwrDR6CRV3qsRuLEMvScSquCA34i",
  "key11": "23KuG1H2JTReXed36ZKMCZdu3ktxS8tMov7TmVKFqfo3SUUHjg3vcqzwCQUdMRpLdgzabyqoiJh31L9uHExgTYV4",
  "key12": "3TBihzQEkAGrWrqCKThh66uPg8kPf4WZamfc8UBoHFbAvgrA4DT6Y6VWhFz229U6y8swArGmfuBwE1A78tqpVkM7",
  "key13": "5qwDFcATr283KzgmpQUtR1rZBxbikJLzggp2b9byYhSTu1CWdmvHrZ6QeKuDp5pqxfJw2QejeTXN5njdyFTd5gHL",
  "key14": "2JuobBKpcHaZcxkdXhG3BnZkGpJJWUaf2YCTAmWfC37ULMksqsz5AvVSNcg2CpJvevpTUYC8ZwPYuA8zX3BkGQbt",
  "key15": "44Q14WbbUhwiEzBkGsPWxeiHXfr38FVM7mf7bVB655ncxDX7gs6sjWfRnfHtMzuwKzMHPWFSMjJp3HD3bdMAYrvB",
  "key16": "grXYxdokyfPivKqzV9wFcqn1tSmCK6MGbM3e82oiaWbu4szStF5rLmafFXVMA8rk1DzaLeC3qa7BmNBx4ZkMFx9",
  "key17": "zF9HpVHByHXGKQXKHL3jnxYbrGNyhECg3cBJgFzirArEsExBHXtTACWN3Stm42YqHA5gVr9fW6yaYaJnSSNJdze",
  "key18": "3ysda1HtSxjHH5KJ3etoLJepZPbmqd822SGZgfc3ngN4CD4UKRCrkPebxErTqs9Vnzy7xuhDCyqoLwVwBL6tH5df",
  "key19": "43FKHGoMabSNZjzUVuL4AaBc8y8AdFXoCDQFh9a9aXSTNPBnScPtYdQqXyGdCMGuF4TYPzqXe8F9doUyJKMXP1Yh",
  "key20": "1BBzwVXcmFkjiikWe3BkmqrwwXgNPdxHZRHYHabwjkfpqJAM87EG3rkxoUXDwuMBABjxLEKpDLhiXLHx2jbeCgW",
  "key21": "2EJNmnA8XeFyzAPW6ck4C2QaP5uCsEjRqiwWufAUaF4HPj5nYwYUyitgReJL9vvdLyKpcBQSUUAuh3NfByNrpDyb",
  "key22": "3vT6VYP9gjazoxhR1PhnQn8uL1tzuy5xy4mNZirkii9zEp6zH7VeUBQss7ohGPKfjUWrP8Fsfw5t93xWaqHioNHC",
  "key23": "3V5iX1x5rX67ugxMo2KMeFqc7iDN584fgv5qvs2ZxGVdpmQ4dmULLKzjRm2kEXwX8ZfBNHP3eAsdQ2sAwpEgWRFN",
  "key24": "5zcaLn73coAcvWUrXA9PtkNB99TpeLEkrvQE2sAme3Yw9TJ5Kc3NPH6bxE4XpvxHa5ToSAGCnPXSiiuHptrKVRkB",
  "key25": "Tjbgm8rF2XhugDCG4jQvM7iefHW1FmLeX9oFwEwZAAxou69wekheDydBjeZ4r77EysMsjrafkwcgyqpn4qptE98",
  "key26": "5g2Q4WWzk3hAfHeQmiriFcboNbu2dt1VsLub3EMXEtue7T1oTdkrMNPdTwur1SdQMpZRCA6vsDifLKJF5Mpy1WfM",
  "key27": "5CH1QaWDK9sHksHQFfDuzqccRhoj171Sdwm83iZdqg7aknf6dJUCHdQtiMdDmLCECUZeBG8k8goYMBWSC51qeJxy",
  "key28": "5WAEso8iCS45v2Nf8U7jTJEDwweWqZ2QkjG9T9os1wA9YtXA4BL6RzWyQ7ri5oj7DmBQayo9qCAurGd9JyRtZp1j",
  "key29": "3bzxtSwMk3UcNMXPTUjz7QgUgpFxLhCZNymbcYYSXu9Nmektn2DCxbEmdbZxJmMWoKfqMFQHQbcwVZCxY1uD6cRD",
  "key30": "2dWeTrM3CNkzkCgvwmjZP1GV5C6D4WfQF8aNae4hTKhzbohZggeu9JGugN8N9MvWZ91pFNv9y7cBizc9aoYj8kcu",
  "key31": "4U1F8uAGUGsrQcNjexgBxxxNSvhrBrzuPxpFYRkjzxeZSCGR3toemDCa2GCHQLdRHzqZmZfEhnWKPRzkHBeX7Fxm",
  "key32": "uX6oQx2QMiSF64b4adhAuh9DhYAqVEd8Qu1Un9cGbqdCjuhXadmndTAAYjoZpE4kFjP3YBM4FH6KeqZEdi44tDD",
  "key33": "4XY8Wia73R8JRYoXnbDer2FG16GaA4QCB3mYJtd8t6nCFB5zXWZKuXBPmYPLpz8cYyNKHbBeMBzVpfqbHMqNSYqX",
  "key34": "2mASMUxLmJiQzgcgBiJHubSF8Ax22M24KdcYGJLDavVEbiWrRVXgcd26wys9rh8J6caVDREKp9HxXjLfFSkp8H5b",
  "key35": "21yjDhVFHgrLgiyTjSAWvxBiYY5AMLrsGZrvwKpFGmBNBHaQTy3uHubqUZyW7cahAVTpPxp1SnMomt988LoTrpDL",
  "key36": "5fyKRiAJUS3VZ5BszFJdLFiZYBbQnNZ7CRkUsazkZx6eCNHe66zXWPQxLeTGS3qK8ytyYXFUgNxUub5geE9kBLa2",
  "key37": "4fY2PaVT1Dj8h4mpNGaxXvHvc9siYYxH2tdGF65YBEzCgCrKDpinNdDeMnCvvKgeXCrAR6dPWfr6StA6AKP2rbK9",
  "key38": "kdVN7sbFjwprCDQZj8YGURcWBdGGxkoBzS8MpKus3URB2vW8KSKobqdbnwtN1L8f89GRD5bz8N7m2kgXoz6M5YM",
  "key39": "zULmMwfatXywXyu2QUV7tWjnXuhHTFd36sbGfkJEJMRxJXh1Qmng2LhoZZ7X9F8wArhfBaYSMCvvAp5rFJ6YfvD",
  "key40": "43DNzFZDSYhQJvZjz18t7YEJwHTLuGmB1wXC27ywPhXDw13cnvyocgjjMK9c3vh9fdXupF2j9p3ng4yLMCWD1f83",
  "key41": "574QpXzDPazx7XkUzjeECxnq8VTvV8av75KSYPFGcjM6W8WG58Cpzqn9cwuicPtb4942Fo6QKJJt22WSUZMCenrr",
  "key42": "H2ELJyCpE5FnWCvACGkGUYiCXASDSAh7nndh4VU8YzaomqD9FM9R6DZcEj3eZ2vz3LR8Hzc4UpeKbVhqqQUvL3J",
  "key43": "54ReAcRdZVWxbXob3BEz7bAk6YzHtQRTsp1rrk78jcGKTAFZaqK1y9XYUF271qtG81vhgsPM8dSfdE1qhXVsCdVu",
  "key44": "ad6E18dHqhLbVB5R3kyiA13K3jobZHVtFsmH6bXLdY3FHVWFowd2HTn4n8VHeYRbDpvwR3BMVhkddk8gT7kjnY4",
  "key45": "3JqfBMcknUUqgABoqYUNxJvcXFJK1oUY3jpcsEbxhFmP7EWtff7zGCjSRoaMjkkYAnGSYv4XuZ6gGGASDxRaBoWr",
  "key46": "2iqtyYLUqfvgFnydnj1mcqZboxJuXzxpmAmjEuNgKdzizZ7BWTU7rdmwMVR3XSoxUuPvhAw6e3sJPkpDMXCcyEj9"
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
