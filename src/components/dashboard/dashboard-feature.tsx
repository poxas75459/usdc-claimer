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
    "5wW2PJA9tYcDrTFL5jA8z6Cr1NzQmNPDnjHfnQJcGhuJp6u7MWLgb8gzvb3RMvR2TtuSHKaZsuJPJvffKVEjcBBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsEBmWzYjFCu32EsEpcVYt6HdGcMiBiXKDer1sYcr17AsjSnpQ7Xo6mBr7JmZ7P8HvQwnuyQpUKxTe1dPD14CrJ",
  "key1": "4iqpdwagtowtGJZr11MKs69ywUJxeApGaob2kU8eWU222EUtVNn2fnDvesmduTfSfCKt3v6pf8T77yw3V8nRGxta",
  "key2": "3JYYArk2F3UGYq92iZf3zSAW4iuLsD8pmtKQEosxsBPNENFGiBnGm4wwFat2iDDzw5nTJ64MiD6xp43oo8R4kAyB",
  "key3": "3WaXyjHyzpZwBn78fT1uCU6zqDpYi3BEXmBZ5zTj5vV8YusD5GTmhhHUxMBWVmF9tKPxugH3dPpTJUVFeBWvtEDT",
  "key4": "bGuYiCqfeKPLGTonvhYFdazPkBEGePQ6LTFapjigJYNfzcGh1tU2Ep4jePK6g9fFf1XAE5iA5P3xDnFWMtWur2R",
  "key5": "Rd3xucgfwvAKqkXTGWf79xqQnHAyYeiXb9FZ94fNETr6JrmB7VToryh2PKn9HVeaqXVcT8rQrdhVi9haiK3Ee4N",
  "key6": "1CFqeVGqogibwb8CVmMBPZhg84akVzsdTpvZiQHyKf3rzB1Dkggmq16s7yXBCKeGCLauSHcZJExnoJ7dVCg8vRp",
  "key7": "5HJeecptzLokpH5Ei3RVz8VEv3BauJ97tn8N2THW6MRTRg1b74aFbGGNTsC1BsNSqP8q96UBZ3AvCh7uXzb4f9BJ",
  "key8": "QPMc9o7o3w3PjQmwcpeuhwy5zVGH1JaYocmBb3pbxMRPurQPMbUzmTMPe3FUW3BnfcP9tioBhMLLtk3Y1utjZpD",
  "key9": "4iKWT9EBEiCMejpvtEDH73vPnzzy2zCPAP9Yf15jwULezRJ4TaM7ZYCDmH4RiKHnfpGHv6srgbSD2wYeivcV6fyk",
  "key10": "YKNrnobdfBobnhFGvk6CNLBSDHTqES3Q7mnPAgWZg2rsfMG6qNZozeCdA5PGUTqbWPDobD3noNN7v6DRrzAps4V",
  "key11": "65PzeoFSbJ9yP58UZqpar2Ed6Tq5rwaxD2yF26pDHRrCAWQgmg5otJArh6C2358MCNdA7jdJ62bSQfxPuUZT3Bt",
  "key12": "ySrZEe5BYZfwyJNDDwbn8dbvXpYUY7kEHTkhsmnxh3SjrHaSg8WEzxE5RHvAwHBX8YGfwbnuZZfmFjkSWnaXoF8",
  "key13": "3gkAuTk1Q3X12THpqH6AFPRfFDttmMcrg7ykePBvGiT1ndsc8mG4RqHQipybgCyQgUuh7xGWMKXmaTzBbVbyrQuF",
  "key14": "3EGW2CuGN1c7NMsowmkuQ9K2LaVH185ZMJHsGiaoZU5GUpoTzpsTDwmcvjJsRYRMvWo57vvtnxXLSfLhmR6Hi7Y1",
  "key15": "5JQqi2GLjyRXaVAFePqTWRNrbU8BxPRh3ySrtnZGXDtxr9KNSb7oyNDxPNSW87AWPpizFgqk45vybGvTUHAGS4XT",
  "key16": "127Sq3QKpoqEdKxpTHH9oFq3K2Um7YDSicw1bu7f6WYZ61uB4iuzsFGuaJfY5wT3SqUXvsFnFRfZ7Zk7W4JLNEu",
  "key17": "5GyQVWkr7HadgxswmsLK47zqJVTQ7ZhyXNUMEpnh2Zm7Jx1o31qa4bFJfJvRhXadebUgdAjxuVMxzgQm6YZ64jkw",
  "key18": "2TRmqchcTtfSCWZ8buBd4y2FegVXgs9HC9VfgjB7eAJyaWBKWNxCrS3JiAPHxT9rLBaK2Fk4Yn5qbCBNHy6kBMY5",
  "key19": "2uM5932JbAe3LR3RMzfQVYUAKq2utgnd6fiF9EgHcGVyXjC2eBuu7fquZUm9yF2TRxn1RUNKL7WSUzKfawHAXABQ",
  "key20": "7kUFZZ2XhSZ3iSJkYzoTuhRkZ1YD1hYFUNfdY5QcSUkXa8LaNAmraqgtQBm1w1XoeFXCK3jtdj2QYhtrD8Ywcng",
  "key21": "1oQ4zzM6kviNg6BxdWPKNQGQekzk1uCUNhn6U9aqRdjWvKqun92DGnFwykRNTMiYHy1UWZRrmqZYPvbtcmmvgwg",
  "key22": "2pg8XUxBELG7G5FGQt89XTKUxLJZNKUf49Ah3RLZ1A3QKXocUwDkEQrR5qEn2oZ6ftVim9uoAwExcKvLs1W2aVhi",
  "key23": "3bpPUhDpbjZ2FjMYPj2qi3BbA6FSfQrSM4XzmoPavVFGkv14A1m9EhsQLUB34zVSJgKTsfGE9wEihMGPHoaQWSeo",
  "key24": "2qEQapx9kc4RzVznrT6RTbBqJ6Kensj2MyZpmqSJXyzzdMYUYXYsw8pBXiMpJVM16SWSw3jw6jG9sVMUPSceQpLU",
  "key25": "5TeWFmVBZUeT31ks667Hx5Dax5FLFuDDsonvhh6gv6sQKXrzg9qn4oiCDXzvSCDfezLyfYvwCqnidE8bfEP3byUa",
  "key26": "GogtTvxQKVDxRsvpJVphJFucjqfbd9d4r7XV67vDk1wNE3YbB2ZFzHjawyeJt2uuNCuFVvf7nLTMpNg7J2VjU2w",
  "key27": "3wRjq3MhftpEMa9ahn1AcX9zd2KwnjASsAPVax6qaLR5VeHGkqn9ECsT9LSzqUVGDqCgV1No4UvrZfKPKjX1dWEH",
  "key28": "3LyV17HzYHBQ9GXaMi8Y3Ct7eixZRs4i3NAzAf1tCDFxETRhAdEE743dwXkugZhW4znYqeuafd9kvXaTTvTkeSpZ",
  "key29": "5yoshKPujgdxztqeeFE48Mxk84M59ezkSCTvUJkaKU3tmcX3a6m8QgD26whiZ1ex5NBATE3VTm2tVToVkefpZCXK",
  "key30": "JbfZmVAawwanvomEksHEv1sXVkm4EZdbcTWukJ9ETYVQ7UiGLSftUmoFw9cqvCngvMosS2NjNK9wRU4MfWyMXHT",
  "key31": "5Abk8jpH9vjS31DsbctdpXvHGKsvPCWoEBvJex4r7fPr9P2E3rDGg1vtwq5S7dVGq5aWSJWEW9siGqAa2PErBczT",
  "key32": "4Pe5NnDdF8KrNdcr9UMKX3aAnADvZMUKiaRmXBhMYATvKowWSU1qrYUi7takajDgzWt1v2yhhGKpm8TmAuGRgmVB"
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
