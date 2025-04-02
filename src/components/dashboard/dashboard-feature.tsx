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
    "4kF3PzMqSR4iQNxgBPTPdDy7nFs4LnoXSodjwFsVndXQCEdHvNFXExGBz6abpGCgc24ggAfGs75TAsQJ2yVJ1pmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGZpPMWjPXJoKN2C7nwX4ARUpqNqAZ5Y7FPXWXtbBHQaMsdcm4ZBZ3qwoAdH2ukGXvwRctvy2Hq8i8yUFS8WXQa",
  "key1": "49xDCfhCX4LU3EfuxYTN1XbM7UmaArA4DJqhHUnhA7hZpsjHvW9sCSCbmT2uteQTsX7g3Hu7njL2Bp2wiRNjHyTA",
  "key2": "3y6NmzJQgJVk4yh4XmYBK9yKTwa2sjuwibGbDGezeJETj8FcV1f7tcVsrxPCPwLEp4swL6pBbNKuDEHwZinqnRkW",
  "key3": "4qbGUAxj5WshmGx9ArUFiPHCnFbAnjr7aW4HgkDtHRked2C1hbUxhxWJrbp6B32LHSgYRYBrNp3SwhK4VqhU8jrf",
  "key4": "64i1GbqHpbDxrFq1UUiQUoztPGvCTJJpKDXBmK9gzjupZpNT2deXkqCcrqmzn9njoD7fN7bJ2weGJg5SmTNWCYLN",
  "key5": "JdXDVbzP3Jso4UT243XBqubwfobMdDX6tofZFqe7dPoE3zMrrBTLT6uRi27qgoaLkZQ3BozZHL7H2SeXd64rzqd",
  "key6": "UuxKKMEdcXsxYxEhR4sDqcQvQ6UhQoWjSpv1KJuHTnKbcrDKxZAs1Nc79P1VDYdg2AxGWeEU5Lc4iWGH6ZjzQJc",
  "key7": "YdJFCRRgD7ZGTuNYNx4qYVmJiGXMYz8wAYde5D9mgPuTUsiDVGsyoSvh9eXLwbgxm6xnyfscFBQzPhnMuSRsLAY",
  "key8": "ADgzFjuJyJKDhe5hiuJs5zAUVwnCcWrcU3Sqemtu7DEF8M9JCmz1Rc2c4RYehruHFj257Rc3gx2etUKCsJkGxPz",
  "key9": "4PSGS9Z6phVcCvT5xk5oxD57R1gXPiHTwcDm4T9z2rfinoTCsG3CtG9ZZfNxDqPNeBDn3uq2VvWCDMrpSP7jLrCV",
  "key10": "5kVhgTD4eMGa1SVyaCzgMnGrECV2iSaLyu924ixdtXYLXjpLnvazmVdTYWX4BMNmL78m15TxrL8ZaCqqTQzRuNqd",
  "key11": "5GSSAC52gyycUkpjkG8ncGjSZSfn6jHZXWKtU8voAE89iNJ6Mw4VPDB6r2fmRcLh26nFHzZan2kFAFgNCTUZgRPR",
  "key12": "2i1g7hQ3PTapiT23YxCR8a5UVM4tt8QTiHcehxYfP5P76ajLLLnWVPwQYd19vm8hBBUw9DNh3vLUmUmas1HmAa5t",
  "key13": "5PS1Qv6wEGYj1nLtaLNAtt9puXkZVZZw6kUUBR2KPsmmH8xTbwDbxyCcNsGSRkThcv89XTvG1sExF1fkMSYCDVnX",
  "key14": "4cYuJ3BHzjKmHEWxyhXxDKic1J9SQEdxY1uVWwUFtoQF5sSMVpmEdAaK1PXqdMGzEDDjWmtMB4ssf7MWt7QKfsZ6",
  "key15": "3hg7fJfpUMsjxwbiuauE49YpgTQHEKWzZXjcRchwJkELx4pK4ej5NCfzKpWEKMDScQPi5KgpifsrP1KZW2MhRdfM",
  "key16": "2ya9RqbmH8DvvVnmiwu3M7A9JzFLqh8GQPZW1cJ8NQAHSgGADzvsLXCZUQbkvh33UYFW88W7LMSn5iS7knJDoaFT",
  "key17": "5cLFV2WkxBCshAoXUBT2aZXPR1b7xFbH8c24hBJy6aK3cS1niNKLCWJu4ogYd1SmtTpjTjcZzSgAs7vHxEjkiCiv",
  "key18": "4DK4MEbYGqEzqyxi26P6q46yefK7SVTJ9CTxTzxAdihw4R8xUyDkbXnAteburmtJtheogWaJbKpVXogCMKUuaEvh",
  "key19": "2uobAeBSHSkTcJPMvyRpC3zmLm4DZyU5KsLHtkwbFktxvRVtKDfxEWQ9gdQua8fbmhvgqbmVtLjuHtUZ1aLJrqYB",
  "key20": "2vCqHHeP1L4T9GzC3tCcB3jN6ZcZn9NXZcxBE9ibhLySgrFiQ7cf5AfHgjJCGMD2nitWg97v5oVAABy1uYKkrAw9",
  "key21": "4mNtyLxdgKq9XJbAQ9rNBXXbjHueZpgRZtPsXYNYXenQF2qLuoY9ABbnQ22LQqrE2s3hDSccBSpRze7MJCSjEgPz",
  "key22": "492kirWbXuusfvpHva66KMpPmE1nczLcit6rm945xjRKGs4ovnxjy4bsb3PP8HrbXtj4LHAvW3UUn8mAR1kmsdxS",
  "key23": "5on4zV8aTJMewnFYnNUuhe7tCakRASn1C79MgdzWG9mgq4E8KuAFg9S1qBN9ebPnbaMFFXpGUTBYPbLEoLQTxima",
  "key24": "2gEVpnXrfhAGiUXXNh1MQ9BsLfLJktZ9qDZ8TcSHxEw6C6mRBm7HtFBXf6haNAeSBLpyKVKm95SEapQdjyFywPgf",
  "key25": "2w7KSEhJABtNQz6QVWW4rUEF9uCePLrK8DL3xjLpQRtHiXGToks7uBbKPkFGuLw3JCgoNvEMkU7pX8bzWNacrwpp",
  "key26": "3FdB3xmHMHwEHmH7Tev8v5pKpEdNtiJLtRptiUd3RBgueQbXpdjiZZWwjjgYjDNMjJriHzBuqPLHLgdP8LSwj155",
  "key27": "4RM73GZDQtEGtrzyPb83Ggjx6ArWRBe7Kw3Cmb1vgJ5PcWTHdvY494GgcbVJb82Vc4c1oTuojGTVjVSQTpQynBBL",
  "key28": "2Agi13HCPdnsY1pkUdXQwtGPQGQkLmJvJ7Zq1XfrxpY54LWECZXs9UFnJhDPTro4qcH2LCQrDmNNRLiFTF8AJEA",
  "key29": "3GPX6PJzkxxXzHcWDxaTt7zZ3mbfcsHNkbc6no7bLiAiUyYbypQUkDvw1V7UTKdAogauBfMHbhKmvvx4Rxi9abxy",
  "key30": "22WBFvbYyGCwETRYmVe8R1arbtTXPNPuR6tqRYXuuxG319WkdrvVZqkv9nTpfUo2WAzED2oGLT7EU93BR1D9rf9N",
  "key31": "426DSeuob6iHfW6nbtLqgzKJnbajDpSy3YfdcVMcxxqUT4kxHprgnyb1cJxzgBfH4biQBPKTdvXK2pUAZrgS5sWa",
  "key32": "NZFHhwfLPVKvrFNjZcTENDdNa2r7DK6ffHJ9qGdERHzEb8dCVs97Nj7xHvggK45gGwP9yRrKdWtjy4aNjeh8Adp",
  "key33": "51nAEwBRDFCea3XvJBWMjRmQHaD6QZxTRhFwWVZrR37mX6Npz21kb4KtvPBU236odXgAw2xeepdrVKSmnCbqn3VQ",
  "key34": "4evpnr3AVMVqw6unnA6568eQJr54DzDk4HHg2RXMCcjedq9mz2QvqyQEKfX8Anjo3kgRivLRSobGqAw6NUcaM7Xz",
  "key35": "53qoBzrERABCy7Azdcy5RzYe4itoV5ZDyhURr7p1Fxcqd8R9ommYtTwrwNuJzE6YG8DmfV7KqmMuLzP9o4Sjjdda",
  "key36": "2V1aW77EwnF2mo7xzBRpj34w4wFEkGzN6HkoX2zAFoGbmQbKvLCwAxTHghYQFEwommPR19pvLuiuQGSEY95idy43",
  "key37": "VZKzNPTzTBX87ABQNrThWLavswSrLZtMg1nuuM6u7Wegc9ZbaduLvoc5tjTsPR3enCcdk34jPwbsjZEa6nkjmfq",
  "key38": "3kYgPWVaY1ESqpTTdR4gmCRyLL9zVZBJKq8UkKccTcXocnUDiUpL5m5wPatVCMYDVsDTmK7ZTKxqRRcQ6AggeEj8",
  "key39": "5UjbyxAaH48PRGUTubbToNqA1GeRdTFxjZMT2umxV99w92GNP7BVN27KnAps5op3RYWQpTwUeV6zSxxVeafPvE8u",
  "key40": "m3whGC21xMWUPMJxgc1ooMRuSZrX8bZkMhS1HUn81Ku3GEqBiKYa6zQWGFmcniF1XxnD1Tbg16Rmjs9QH8BMGdR",
  "key41": "2Vu5SAbX31LmRAG6FBzeAzj5UpKBM6EH77MgReAoZEyNuy6jDLXeUmFa7S8x2qNkyUprfcmY5VvC6WK53pWFgB8Z"
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
