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
    "2D1rXQzT7xN1qy6YHPMYtRdEfnYVBs8Msm7o3kBXPqvYSqoacKPs6RengiwZd2AmVoedA69A31zquprDB1zdXvds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4femHMZ5Z5zo79yxPhJ3tNxf2Ca7iQ7WE1AybN6yMqmHuQdBLdkgKK2o6VLrZbyMoaq6AKWrD4muESqLP5AuZTzM",
  "key1": "2rGpxzJrz4iRDX8LY1nVbfy68Nzd9fGd83uwewDW6stnnb5PikNj5jfNxaVgy7dkn4umu5GpdrCHHPzynagkhddH",
  "key2": "52kjDpeLS7RDn1mKdW4Y6u8vt6tbWzCbkNYkXNwc9aGddp9Krc11aqwkXsEF1M3wf6fxy7YB3YcLQxnEVd2Cudv6",
  "key3": "iB4kY5dB4KVFL4ejxL3d4uahM9QeuQxNfARbLHrUh4pEsZmuhYne34Mk7TqmjM8zVhphzVHxv6bGuL1ezz6J7Fr",
  "key4": "37sbXbVL3zTongvb5Ho1F3qzaeNrWND5MFMLHqk9HFD6QkbrXkFVCo5tL74juFL2pDW8YtpLU6kKueP9EqRY6Q42",
  "key5": "5LVtZEzvhCn6fwaYrzv1qSGjCpgirML1UMZPeeR2FujYyDFSbmUia4PFzFCEJWWjF5AiuQ5tULBShtXxuWgERR6o",
  "key6": "27N9TPR6khdf4gruXkTFaW9xCRhP985KRqKtUC61L8Ua8ZYgSGEqHEBSnFj2uRE8v1nKka9MqkVrPYWucPLRzVk7",
  "key7": "34UktJG5K1bAMwkAtjnjtrqmAaQfqXGwToye23b1LaZSybA3GQxRHzxEQ35UVapf7QVy9kCSbc1Av2WDbW63wYhQ",
  "key8": "27n62ENMB8aASDjLHjKb32jdc1wg5d8PHK2t88s2n6kGVLc86b4BmewmUkP2wjXSivrkiDqyzRKva1c3FQyWTxj2",
  "key9": "3uMkazYBa4F61Rtvyx3SNsqkCvR61Pik4jQkZedehFjWFsHLhgwsxVM8RAyE4SPjUtnFqjwJvAYZVNcDAMpsz2vX",
  "key10": "2zSxXvAQvBGNW2pqAMqXkpQKdQ4e8rBRbS3ht3Sua5ajczNaMMkf4HLgC2Vw6qWrUP6ZA6DLmJ4oXcM74NDfqtHD",
  "key11": "2Ws9EJr1ij5QQx1aKmArS2V4bHpPbU13iR1uffdwLPWtch2vqbQujsEr5hkK2TgUh1DacZoKjcx8Ui5CXr8zMPHZ",
  "key12": "TTJyizWPxa3EZMjSHaNKyCsmLDRPtwhGgttAKijtC4gfo9gVqG686ThHLfDHh5RfgUMmKWPFNToWxpuyh2GP2Jb",
  "key13": "yWHD73sVZPmCiG2TuLCRb7FUjyJYhgLTYM1UdyegFJ3WEG6JYr9gABqnG9maf9dYfA7hHxWmCtFJiZZ6AR2dKdN",
  "key14": "3NfosKtTWPUJH7bqkskunkoyGpzFb59QM9t41rmVWY7AhYPSzCtvrF6eSv3xsqnWdg4k2GUV1XgHJEbSrjfKbj1n",
  "key15": "4usy54ka6nED5Y9sJCW4gNcqvhEHW5mAbFpwdLmbN1pkTe4HmYyZQuN3ZnJHB4bupNk5dQKaJzv4RWhL9Wyr68ma",
  "key16": "3NqA2znotCf3ph2wjH9kkeQVDSZSwfDXHrP7Pih6vMpG6SUNqmaxZ6LMwGvxyorjqpeyNRjPciqfVLn1nYtDREu3",
  "key17": "22HYz2XagvDeMmFd1xWFn8vEvkW1emShjspKmXRRDso9PeUZSrwwnnqD8ZeZE2JHVgtixBtVzF2E8UcExKai7sWv",
  "key18": "3rUT2vgaE45pwTrbs6inCoBXaWyL8PPNxLesWEvnfixKbhP9vHZaEQrVKQVSqWAtnFQXYqLTfz19MXm75472KgAg",
  "key19": "4M1ypfh19Xz2QF4448k272bM3KbwjXWHeFrPkHTwaUZQTuqGbVNreYXMkSZyncWdxjXnCp1hivZ5PwuWEAF7wehb",
  "key20": "5fE1a8WEkaW4TLoCbcA1wiNuCiQ5d6AwGxPew28WD4jzJi2taw5Vw7xE5d8bpvuAhx2Q6VCEfDJZxXhskYZK68pW",
  "key21": "iBp72E6La68uWuwvLghkZu5Bu29SKeDtLMiRmJwzvczE7nt4JkrNPRi1TpMygt7BSdWELEY9wdfMdvZvobb8BEP",
  "key22": "3MptvwiceHCJAfgfYtm8BFe6a4U4gYUBvpDHN8wGKEFc5drgqk5HTWfncr51qQUgee9RCGF1bUXY328Tb8349DGq",
  "key23": "3DzUgzt9D4e1UTpkQvNkzyrdeqgxWEWWpsnaawux4idwcV26teZQQwNBkHu99iZAagFDTVwcXo6VpcpQGMXT7oG",
  "key24": "4ofzC1rQ97W7tQnwrPQVLwSgqQyertEc1RQgweg5hEcF8aW9xoFgaviVbZ3cXBXiMuyzqmN2ZAE1H9VAdv8meLkn",
  "key25": "3wkNS2CFWv9a9jrgi3kV6v9qBiu8qMPUsgm6PaFEefG1SiSV8zLb5yLLgHLnjpTXdNM7m62PHyhwjBeW682vApSA",
  "key26": "3q9UcRdHL1ZgHk4mDoFED9GivSWeNQqMHkkJoQgMkeKVxQaLuX2rmoZWV9Hy27x6d4NJN4eFJC8acKt2zYujFZyn",
  "key27": "3JniFEzNXYYpxBNw2NxqggZvuP8yDPhYwmeR4WviqJfVduR4xqa4NK4PgUc3h3pMrqRmVoTdNiE1XosQxbVuGNWj",
  "key28": "2wt1FzfMHGqwq1QiHt7B4Tz6fBCkP846xgufPjFaxnqFEVictAkbdXgxJgVLqrY4MYQEN5g9S4B2DVFcBGqc7Lr3",
  "key29": "3nujeYr8sTGrpTXEu5Tbgu1NtqwKJocVR3pifp14TugRL21paR7ukfZxHuYadQmmL4vtRe7weYW8GLJiQs1b7hXk",
  "key30": "ckS3kbnAVBtrfXd3mBgEBCCPKFJCghSCqpMjpxZ85nin5ismCedkVxxyd8963WaPFZwoGvQNXYQAwaPLU5NZKaj",
  "key31": "277kuwYTJzi7gMbZPgemmtYdcywD33JT2grp16RWScdGXrXtoaahzziLWq5DxZvtrdQHFu51Z8dEoHNyCFXUtDvB",
  "key32": "57jnVfZtfHf9m39pCse8RHZh8hPjqcKuJaA4JT9yj1y4zwcJhyJivg4FqAzcsRrmCtDLMsX3oNzexk5MWqVyvNxX",
  "key33": "2Uanu5eStQCsgAqoDiebWVtY4nWcWnNsAcALQbZfSGhJCCPaEHYi4xmB3RoPXzcjypBYGqKryBoZSVbPpdiemfWz",
  "key34": "VjXZkejQBVVrwPa2sAkGQEtPc364gkr8pyLMRiUJzHKV74oEoCLjpE7R9Lv3Xo1DgQTe9ghQEazXiMxSMjQqprA"
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
