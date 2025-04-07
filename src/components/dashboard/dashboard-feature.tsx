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
    "5nb6CzVjqVP9iKNNjwwwc7wLgRBMGCbyiBXWMPuHjG77ULreHGHaAk5F34tL6bcpVfToPsgdeCQrZge11vn1wA8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eyLoYbk5zheprw4U2sYgv1ao8yd8RCNb1sEe2kHuJ4CbeeCe6pw52M44cMQfTan5kRk4rExnpmoUyvP3naXgMkv",
  "key1": "4FMq8pWMkuD26D35UkikHVF5BuJjyDbukd75EUtnvutzqNUfv41B54NKeztr56CXwZV7GoT8gqYDamYZBQKbw4u",
  "key2": "5tyYgM4b5888LdnDDK4qQJKRXktYf1NDnJgMEzXvmuxQeJ5pvvmKn5HNAXcqcJVb3n7Ai3YWFrzmZbMoJBoHvkjJ",
  "key3": "gKBmmJDt3tBELFY8sKPfdZpUSSfv6tXkotkaVMdSwHvsZ4EEKKtjhmG3rgK3LHENMzNCc2Kt7dEYQsvPiVTTY2s",
  "key4": "y77Xpmf3nX3hMJhqhgMuqQ6ufzHankYynQLZivLWz5xAAUeN1198uervLZ1DvmboSwP1soduuc3HHFr6GQ1iZMC",
  "key5": "2izP5xHhYaYxtiYjoRdr93af7AaksNXeVFEtnjg1Gn7fTk7PBXpSNStcUEDDZqVYhMNQ1f4hjiUremDtjm1MenHX",
  "key6": "2FhucTMQ9y53XveqwoqZSQjNs61yKzxwXN7uF56TjJ18Vn2SyKdJrg9risTPtiTSZDZdHVhinazGnmieAMB9rk6W",
  "key7": "5vLFSDmHLd8VbGJUMU5SQawEkd3ETHhkV7UWw35rPprfBpcDLTgpftDMEdzLGA7KgULRHK7dU96RR9pcL9BDibNE",
  "key8": "45Rtyt1hgKvM6Zr3uRzbB1f6zAhTZWvGk8UzwZrs7hEv8KLahScAuC9zUtpVXCVQZW54gv3N8SkSfRqzqGc3FwFb",
  "key9": "4twZjkMfpKU3rezvuoWmvSzfrKMVCz8nCu631BYycoiPt1CAWsXPP7AfVyr9hEMsxYMJxrnMd773YwwPiucq5XLR",
  "key10": "3DKtjewmh4JGBzdiFoH6BhRQjJjSW4zmTKk1kKqu7caAbdj2mkFkfLufLsifpVpModJcfg3h5YygxkcacJn8kw2Q",
  "key11": "5NdEyueDJZspZkBHbwm2ST7Ts4ZjRff63suKGdSYvaVbGRzLLcymn2HAKupxJHxtvcucjbqpXoHVmRza2ixcKf5o",
  "key12": "3uVifUM9xrjAqXGb8JyU61mfDp7FsfcjRV8uY6S2Vha4JVCYoHHgNdVyZDGPrZbgpBLHWoUPeEtuBrhSNv22QREQ",
  "key13": "JiHXkjB3sLCfGoQ3biUYHkjmPALZfG4K8mzDKhcM3kgW3GGVjeEfRnmEMN1SEXjarGzhn2c5vEQejvLYG1BEikm",
  "key14": "615LWDVnqmu29Bw7DZxJHE5ZdNHG9VgeXYGVJW1YfTqCrcrvGnV7GN5HZWVJeBcAwsQNQwQBxbUMNiysMEu22MEn",
  "key15": "5RsBcjeSWMwbWc65uYtGcEcehtZjSrMxhGTcCj3JVDpDMzzgLUz5Cw4gx6vfYUabNRf23HizeyQPYuX5DgpQK3Dy",
  "key16": "S3JYAEtpDEpnXPUih21yPq9TARJoSCaioBcc5uoHvKUkhu1uUocE99Pgwveg5Vwvfvn9cvzQUvqpeeyCkqNCGnj",
  "key17": "4xSUgfu1njwhd3a2rpZeKQJzSYCGECV6AzYWwfiRh5R5f6ZHQ9xUzVSb2rbvBtLkTdUrr3RE8dpe3jfdt6p5erTy",
  "key18": "aSytigMQfJ6PQJr2KYc4vC81oTWBAFnfZwCHPKjtjQip2Dry5pGir7jmjyYcX7toaA47K91Q4czWazYsRpEGeyo",
  "key19": "3u5RbSRU1pehtTKCxn9pSpG3MoAoKAPabHEQJYfZd1uUu4uJTTMuG7FVdejwrhuCC4SiBx56NBpEfTY4eccUzHqX",
  "key20": "3ZWcMuooSJjWv8gkyB8Mr9ufntMpWn2hoazYdXFuVuJj5zTbAH9XUVoaaZvhBdjJk7JGL9MD9CQDGv33CTBQnhkY",
  "key21": "4sLvZ74XKPztCLzy1PrJxqGnAcCyWZ6bx36NxTW2NiYrqbTSFKJxxpRwvYbF1c79fbQSVhgzLaHFeBE1sTGY9oRg",
  "key22": "4XkKQeKAXyCYghqqfDKUp21z1NQSRrGiUxkF66Yj4Jn3oZRHuxu6xXPhXbWHJN3Q8bZcKHZpwzDqPBxeZdozuFGW",
  "key23": "5fDev9EbtpxAaizNqstERgSsoL5SyNgNhL2eKub9e3LbaKsdoiqE3QyBmjNVdE5riFMHtvid2w3mQBmUuzC9MR5y",
  "key24": "4ifrLatgZQqCAHuqPTCEuEDT9R4gNAyipnBydVVdLmTygiZpd3ZKCYFfRFbMYpniybE2pyJLuEd8QCXHyR1iUUXX",
  "key25": "2aH68Rmh4URhyC8TFUQzwCzGzdS1wwBtzhhEuAHoYehaYAwqmhBXE3J1B7wqAFPU15XDaZJYwgZX9apw5WZ9D6P2",
  "key26": "2NtKYbnp3ZcSmHJKvp9JYFJaFMY4rrSGq1uQG7WeGc9LprQcNT3AhxFPrvJ12SpmfrmTpTy7Dsge8VSMW9qPHzDx",
  "key27": "4GKYGtvSoMFqHqKcs5f8BX81hSCksP7ckmTrQc5AcN3hFgVQfV8xmWNeyRBjap8ufKfu97rWGLzRjrBKKwHBdjqX",
  "key28": "4fbVjWEYYrtT5fqEmTKwSffUkTTWBiSLKForAFLFe44ejie6Ctdgxog34CU8NT7sk5hazYtxDtKzgh5WVDJnUfgs",
  "key29": "5hjSgSZ68PqfASdMkhGkwTBW4Wcuqyc2XVeRkWmu6TeAVKb1QeYV8sSuGhcCqvJeVBN615DhkfxVGq51vkVbNt6n",
  "key30": "4tTBQFQssGZPQgygtKtP115fgPhvHgngvNTbkEEvukHCQvmUWoZThT2RGFmVAP9iF6aAL3QAgAyMmxPSrwLEUTwx",
  "key31": "5DzZPQNARF3czZ31VYXEvHqYf8mTrajLRqBdBeCzuEwc7Z4kGaWbUrvBwD1AecEzC7qtcWzssi5TCjQDLNbZoYFv",
  "key32": "gGyBN5RJNDPFTBNBSLYGhgaSAwJKi3PxrjadYzRPtSBENNMrbaq3nonKHdzdLY36YG1YEmEseEdJMsLqdPf6CWh",
  "key33": "piUHo865PsX71dZBS7C9kj7mBT6gYLs8fqPSi9ynWYHVMLmExesVaoB1F2E3bR1uBgX5dRd7sJMt9wDgMWWn3ic",
  "key34": "41Si51bGwsHWdchVov2d5G1mPXFWQnrMvSWDAPfYKs7qUKEBgYUDKWFhFJRWK5RuSuKSt7PvL9Kbb1ASm3rpU8Gf",
  "key35": "kJcCUus6qpMM7Fpsqkt1nmhUJDW1vHfoG6AsVNU49RNnzmwWnXxaA78rarPH6dRek3BPvdoFnqc8QNet8C8RSFP",
  "key36": "5cSe71gPB9nLtCKXTQSXBTMDKPDXQ37TBHMMnuButEe1WdTajGJmP6ABjpe6Uym3cZVQgf4p4DGQLhDvjfKtX1UY",
  "key37": "5fTfgAymzz9NAm2jyY9r2mbKDZXMrhnn9qYFLpvSC16DjVSUU7oL59jrxgz87GmwyyXRb5sxvJn4QdKgjeHDWgWr",
  "key38": "42yc3BpJhXM6tDmz53GuwafYYxCWLxmsonpTKE7MA8jcYL4U4C3Jt14WkFVcTzneEdmBcCi1TVFgZyVLYm4vZ7As",
  "key39": "4XvKNZ5Q76pjKpRQdwc9YJB5ecKjSLC45dmvSi7U3LZCjUuZvWshF44b7pDJaFUzFe8uh5zB1yELUKmsejTuPtyn",
  "key40": "33wtxnX26g8LD4Tdh88Gs9vm84tpCik4zvU7TCpF5G3BMLwq4BaUnUqyHMQPs3kQCXQLh8yB8NHVtAv7nJGb95aJ",
  "key41": "3x7qyXCYzW7sPTegXCcXwjW2mGn9tZ8bmqbExTqqPiXt17PokKQby7VKNs3NQXt39vpN7ZkykHz1tdRbwUaKc2hR",
  "key42": "3uAEPWKGCCr1mEbNcUUchWspAJMkTpdG3UhSeg6pWTrkQTdBFbtrz6tLVzVszCKQrcysn8yDWcuBM45hsfbgB8p1",
  "key43": "2eH167SJC3KB8cu9iLmHvNcJgfobEt5MRywQk3xZ72srV8Tdcnn2CCHUPvd6D6ikzMPp1SHJRtrr8hNJznNq6744",
  "key44": "2bDgM3BEEtmqiGfdsM8azGjX2jkvfB78ft1tKwUfDAYosqJNBSSYJS8CVMDTbNhxbSYuaKwYnFfDw3AZBW238ALt"
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
