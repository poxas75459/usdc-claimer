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
    "FoHwB7wTBmpsNiDZGwDrMjSdsGZMJpBnyGDKiMcf5JF4fA6tosic7DPu646SdU4QUnEh5Gx7AJz3k3TQnYjSKXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKhtC8FoG6yXyA4K5Kc8imRrZPprdQS3j8oTizCLxfesYY8LdQxfLUWCN1Zm6NXzvwk7CVq9QXGbKzJikn4R9QR",
  "key1": "4DhDQKB26Qo1BHPAWBVBXA9aPKXoLWes2wz7KU8efrgEWiRbrdjznPFHCA22MZkED4tm2PiohvjVEVg9KvMQohqQ",
  "key2": "5n81j6oeiqEoDAESRZCvEKs44dnxiPwhqz3MmWq1ZghjubMpS6c5dBBtXLiiesQByZZEDyhxeibc764c8nFeew82",
  "key3": "4HhXVf2W2Z6isAwdTv6x5Bt3NnJZFES3dQFm6EETVijk7urgLBMxKp1UuXRLynW3U8KCAB4tBMax8iag59R3icFU",
  "key4": "1wiB9mRznLBAB8KquXxusjrbcwAvKMWJW81cF59P4BD9evtMYgs41FMi4vDAgbbVMKfLYsnt4UTYY2ovqf98PPT",
  "key5": "5udDwTavDQcFYk7ZaQMQzwBBXXx1KpWcdvizJMD9MpUpk868upRWbcouR8KN6CycBrwWKW9r5KtCEQwjjiho8wgd",
  "key6": "25W3LRPUMX9xDe5xfy97ZF117W5HrDFnz4TztzXjXsy23y9BxELK2qPKbAdna9AZphLYTbghqtC4zPMcn2JvRAD5",
  "key7": "5WaK8GwVLGvVSVsM3WgkcwihpKkJFz8xXzVn6pFgjDBXx3j9e7iX6LW3Ft2bt6hZ7ybeJPkBhReNhBqEJjGGcAJc",
  "key8": "2vnd76YoZx3qWtAa1XZk5iyJyDAGJQqMWCvKk393KcE8WYdPMUDYoPtMJteQ8aPdbQzXhpTqusDpE9zscmd3hqg4",
  "key9": "2tdR46jHdUqdmsScjhfXhHHYmHVTAMEvzFNne2SFoTRuhC1skPAM6RPTFUjRNwvuYDzXUAjvYAVbLfskErGxFXk8",
  "key10": "2kCTC48R7HL6YKedxwW5DUNr8N32UQMmQmgJBFMzkv4RtsTFvGxdqwxtbgRAxjQqcF4uGgLmEvYU6Zjii8rWTtvN",
  "key11": "47mMNh9diYBMNC6jScKRegdNpsKLE7afjqaQqx9YT1jYmv3cEiEhE1TM7aEgQoWuzkYm4Zntijb8KMJKFvaA66MP",
  "key12": "4eYmkDt4pA5m7df3EhX7Xixk4XQ4ZMkM8h8pP7rkjDtF5UVfVeVmnv2sskS887KSYpBTMw76gvnc9JDgj2B6szwm",
  "key13": "4mJRUVyTXdQoi5bdS5VcG34zMSJxzxo8hBw1J4GojaohVbzAx12eYVpjyMW4PTh7WGaXoU5jGFqqPUteiWckv7sz",
  "key14": "4rhcMiBA6spfYY45UEvWkoV4awTnMTiqTZ89zwr27MeREaEF5N2iVdPXuAqoiX9fu3sZ28xu8WAA179EUdTmSNEE",
  "key15": "4dVVLR6HyWdyojUUjJyzPozcXertvUBUfuhfoqSGDauz98JxjQeYspDxxRxbYriEDTMZuivkq7ZPrh9LYhFPUdTS",
  "key16": "4R3A7odN8hjRFNxjxdL3b9oVnkJNfqXZoPa48GZe6BxTvq9Z1t8zZ7YCF4TA5fC3VeUmiqUfCKdnaxkQVqZbP7Ki",
  "key17": "5UsoyP5MH9RXeGHbTiAhNRB83UYHqWiWwch36ym5ZcyPRBPZ83184pJbfenoRMH2u3aJaAxdSbGmt747cfny99wu",
  "key18": "4hWdghqzet6eCC6DABFQgKaHTKCDbjWMoR9LWAnZSLt4cjPqam7qv9QgEYNygZ8A8dJoW2khrrgEWQUT9Lz3TDL",
  "key19": "2NvJtxJx9BpM5ePnkg8iJYvfRqGcU49LKqbUKRoPahaaTwKvKpPf2s5pMxL5B7KrfcEE7MYHn8ykQTKSAsQ1AK4s",
  "key20": "2QUP315Ca91bq1Kc3vfPFDTE7YHJJuNmyHPDP2PTJiRaKndtZjJSxvuerA4aZZHaAuSja4tGWRFkiWVa8yxJMyvY",
  "key21": "DALVHkdoRb65AjS6mFdsUXCDB6beStYhk2W8krLadKWAiJykGJuDkNYGC5nByyxkG2FsJ75dSMjNXrRjKgHKoxw",
  "key22": "3gx1ZySQWeJFEHmJrau6EuiPuQ3ey5JaP31zLYAA6J6NCDNj9Xx2phLgSy9czsbTtcfH6fSG8buxv3kqZ3mbasw6",
  "key23": "5kxWMMvD3j52oBcaBcmnnQUxegKAmSP9g4g5cY4WaFLjtjXoLf9KpqBhDSp6KipMVnTN75qvwZ7FMpY98vZASMQa",
  "key24": "6KZGX5e3q6J9bQLamoitfk4TNqYA9sw7SMAoBtYwxXoW7cK5uPVYYjJBQtXQCAbhxpZ6VVCpMCN9dbZm7GEpYh8",
  "key25": "oj2JRq8FSW7pGL8jtybXDz7gMQm7UCt9ityU7eBm5ZWXCJPSF7cZxnuuziLaA8w5fyGnFaBLov2r1VApswVHuKV",
  "key26": "4mpKTh3vNv7GxdJmX9XbWuspM2rzngABkbBe9HyHEecbS2ZthEEURWGm8gCviBBBFj6NhaGDEqNLKKk89XsL9k9S",
  "key27": "UUVbgCcsSQF4VaFfcTTNAPc3La4cgcXKfmrFqUYJSG5zLL3ZRuKfX3f4rzSpu6ymye1Zidu9fNk58WFXihRSJxx",
  "key28": "3wR9EQZCwZAkQdwvbWbDYkNht12sEnLb5WcpZjD11uxBdGSknUcHTnsTDY92XhcF8vcVK5Q9KoWKgdqLyGhYyRU5",
  "key29": "4da1Xd7x7kqowmuMGYtpVJCy1UKLoT576o6GDka4wzENvGMfyYRx5b1WS6qgnJQGEaLM2XXPCukZVs587SxvGozH",
  "key30": "Qim8caHhQKPEkExNxv5ttw5rkLa7iZjZhGuaXP4RL5Pub7fmggB8FJqk2uF1th6fkLKMKT5VHVy8593ctJ3bHYZ",
  "key31": "5dN97kJfctyT9tbGvhbLqo3pQjb3AkLaDVLVWAbhuSb4vd5vxbfKy1A5r8S7CuGyGqQEhuCorZyBuyUbKo1E4WNv",
  "key32": "2rM7TSXHnbrVYqv7kVtveYb57AiU6b8UnM6xTooxd1U2J2r43kVe92Hquh3D2hCv6i7nNZVeP1d5XXktpKiDQ3mQ",
  "key33": "FSG21voAhCsEj1FY5yo9efqiBamCyjEKzBnLctjgrAUtusqwV7qE6wT72X6gjvGQbtiBL9tKCw52Nyo4eqBv3GQ",
  "key34": "5BGXKwayJ8N8cvWSip75ydc88iL3hJdguTK5NSfMy5MMgme8UPJvGkBNa6iU759NBCwYkAcb6vmWuzyfZ1fFYXFa",
  "key35": "4KZ1hHffSgotecjZZZ294DgHRg45KHr6CFCv7fRuy8nUpXsVkSSeAxxpGxnyVaYSRbyQRvbguwfTQ1LMCYL8Hgyd",
  "key36": "oSsQcivMdhLrnmmer1dGuF2SWjwrjkq5shVo5Y6jtnZ6ohJCdnkQjWxV24A7g3PrmuD7JWzKeqsMjzd5EhHSbQE",
  "key37": "4NKVYK3T7GtMh5Q4BvghE8tPribgzC82rFUqQswSn9X82v2f7d7uBemJxyL7apha5VNfNLg4PMD8e9T9bUKt2af",
  "key38": "3g8hPQEtJSgqvmGmUJvCBvXmA7Eun8CeZBmLxSuSLpcjwQrbTnwNBQUNHDtpzTN4dEktG6dWvUW4H3CwSbbP7hGJ",
  "key39": "5FPR3zSNb2Qz9unwVZJSyWbVJZ42qW7bwvj2E3ezFkrcEBfRLYh6fjNPpBduSd2C9EJVmVf7JKLsjqsKXATB8Vr6",
  "key40": "2keWJA3Cj2LPjpc8vsd31ZYXjPRcyGHcKhNzYpHbasg7nVX2U7Un2RQvS6qZTov5pWCV365y4WtXLDSPpmuY6UE5",
  "key41": "5eHo9KuZes1GGFyVvDbCorrcR2ZWNSR72eCpQvm4H3F7D94Da2jM2dFx1nibsVhjZgi7LqvDWozvDXeawLHP4Hv3"
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
