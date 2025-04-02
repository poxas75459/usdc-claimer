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
    "3USpraCTnMBhXnS85eP2Y9PBodD5njK8E8SebrHYBQESKZU9qjNAtSbrPitp1EVHwWath4cqFEn7Px5mmbDXHVfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyBbLQPkWR5JweKjzoSbuRZotfuWVXrAKu5b55BT2Z5izVVuELW3HgRgjsjebzC9sZSmkiCfzwB9gwtLpaxTF15",
  "key1": "3mjpNDdwaNPzgHom7png6HVy1QPpEhniZNiTyriwazaLawX2CkjL6dzXZjpjtjbdSrcspNLcE7kDyUUz688XYBPx",
  "key2": "26EXqCC6Qw3cxVVdX5s4Xc2SaWCDdsq6zdZMUwuzdxzNyy4bLamD3MkWiippB7yadm7KTdCFHxczzrQqcCupKedx",
  "key3": "5EyfyfU2Xm5prJwXFMjJLjBhYpmZcNNn82a7A4cRqPm4qT4dLtsKHpAqNkGSuvcsEz8TLPydSMU73mBEUNcxbx7J",
  "key4": "2SKaUajNiKUaJgh2qE64Z1iShbZtJPqo5mer1qUfQJ4nP8jEvkE8YK59We7jZuc23yzAdc4Zqkjq43a7uN4CgzUZ",
  "key5": "5snAiSuwEWsgBehDqgDfWkaJ9hmSMyfMJDNY55k2HgmbGfP7R7M8bepVJbe84qq3L4UfDDHdkEwpH5sYPhefxiwW",
  "key6": "5AVLaHwcEcCq3VwBLgNV7UBW7CAFxGaBD2QTfTZcMbX4Gw6bFdMMuiVbACwx58BLxhaCDhY7NK5NtAr2VtdLNgkC",
  "key7": "3XYrk75m1JUa2NboTLe5QTVyE4XsTJ95d6kBXcLB18A2McEzwukchSToBu4Z9cEZeD57x25XVNWEShSZCXHKEpEY",
  "key8": "SAiyWriEucLW2DR27KVr5Es2ZebrNEesnCfWJAAMXpuvAazwB9ojKEz56vUeofUFKTcJx8EAbEVis2As98i6yrr",
  "key9": "5NznEqVYZ3H7EL1ypabFPWGKKNsEHoPL38vBfxeqVes1WQ9TEjyaADjmpFHzJUkZb9B16Fo3BdBiK4oYaiiNqzKe",
  "key10": "QkBzmfdZQFuEGZjfEgRj4iR2kpfwZsdci2UbyN7dGVrMmuMJ5hkccnbKvSRcLsuGCbrZ8Nn5nZBZ3oKLpriWzbH",
  "key11": "4vKjxfHJBqY5ktVPq3UNzwM6wAG4pKNnoibVem3tcRkC7VsyLPq48NM55AZMQCzfuTiQaQytrYHnffko9Uw3m2QE",
  "key12": "5WYFAUoApzRhwaGPa4LACZM8YCqVaknbEFWoWy3KtawqK3bCvtdTcB6bjLL6vL6dByoQWed3hd4j3pkkDYoXgmGy",
  "key13": "2NyCwCGyW7eRWWQkVQ6CtBNwFKkWvpryoJ39Spo3YKtNsWSiZfzMs1zJbJiKENqZtdfyyg2HaAsh8BRZmYa2YkcL",
  "key14": "3scQqbGCHEpq7Y1h4vJ8cR98tFXa3dEAYv4e9uPgmDMW4t72gZjWf8mPDkY91hKMymYShZfWqwRcuLtFhVTeJHh7",
  "key15": "5j334LAfVgfwVZMEBYiTK1MLApgMNgQfWp8BWf97xAGFiPJNWA2RwqKrMatRGR8LbnkEEAfhZv8z75MNVSRpcUK5",
  "key16": "RRvPrzQCqNSuqjn3wGVPkPXZgAJPzpL6QxEktyU8kYqYCYTuKog6o6WsKcS8sUNC4Dn8gVVJDqThYMFF9M8uNcQ",
  "key17": "372nfwoUDZRiQcbzR318YRYDSe1LdChzMptFfjcTSKjTqHFYVzmNoDERMNk9CN9DBEda5J6LY5P6x6eA4o89NfCb",
  "key18": "2cy926o3Eb4Q8KrfXNdjFSXyV9rDEhcCGn7ne3mLFtHgE78eQH3jWWTgD3cwFEaWcGmekyoajLZawZJKShi18Kek",
  "key19": "59wxSNrdPa6RRrfDmnoyVhczZT8FHGgsfsQuueEU41c9deN9qRdyytWd8pe48gu5paWFtgQp7gFKxzj9vurVchvj",
  "key20": "5SHtGJdCgfqycotb7MinpZKKjdsCmTBWaGrKbqz3VyUKqxKQSenJAVYNdvCzWZxCKSJv7T3iYw2iH2zThqe31XsL",
  "key21": "HPH6ihYFoAhBgpgiGWDz8FNpgdDpVoDCV7keYUEqtZxrmwCF318Y4zkM7uCnADW7neotWecWwGE81aB32vXbhdY",
  "key22": "5DBBJnkEuq66nox6ajKWSbqLshfRnYdL1DtgQXsE9oqwoxmqezyqngReab5hPCifyLPSCpchvmEKn4ZtPSESK8qD",
  "key23": "2ge9GQG5TJwCZJCKTFUJpqyVxs2hS5QJozf2kPoyteKMJK341sDqv2jxtPmE82XRymxaKqZXoLtDsDY3j1Vu8uv3",
  "key24": "5nfzXhXCJ5qzM3XaKsfqn9znEsTEcB9mSBixTsvLRF98ajsUaAEmVAYhEYYgbk7tnMQYi5y6UsjvN135y4rR86xR",
  "key25": "5iVW1ku9kmWzGHcst2CHXBbfY6yJj2BVDXavXAP37uPBQM3n58F4ZNDojSJSoAAN4RY6QLsz94LDak4YccxhCQbY",
  "key26": "379DutSSFmRdTqwHbjzUJUJxW4knyaSEkoz1mrhKZSXvXdJ6rSuVAJ3yFLPBHwnteYLFW8iVqVQAwxm3J2tZjLW2",
  "key27": "2AEszHvqoqBXy3p9h98vAr1NM1WDDtj8FEY7Yw7eeweYQw38DrDMwuAL88BBAUW8PSaawsPGLcLbhEiMRJuneLkQ",
  "key28": "517V5b7djyC4pV6TXbqtQLnmnsiowUikns2DsqAfe1wo2Hnf4XPshV19X7DtU8yzzvHkL9fWkoTjq1fkmcW7qGZi",
  "key29": "aKBRpmETbZcikfuNwXHLAu4rfdJdDNWf2U2xHxJgLnkPZkRaCDLtzQoDqb6QmDpzBZ6axxFnRFAoq6CnBQeJ3aB",
  "key30": "4i4B2rEsaFjkg58c7S6jzTiAV1iuDafWbDJRzenwSqNnpjqyb58BmDR6Nw1JZ9ixZ2dwQx42tSStjSyy8ZZevfzN",
  "key31": "5AP955yqth1F53UdN9KXo8uEcYXmQTGSuNF5CSgYS7CyRSGXbEbqKD6wmHAPHf4c3JB1LgmKgeyC25SxF6nHUTpy",
  "key32": "64XDj1TZWJ5uS7bJFGRrtZWv1KrGjtGF4Fb9iABftAR9mS8xKPf5QePHkYW3z9estFP5q9RXTs3QEWJKbkRsev2d",
  "key33": "9AnvCVZy1ML2wqkHFpx2q6tqtFVae6XkEWfGpaedhvBR3rnPXfB8DLGVMedxEfhfCSLr9HAgWVbVnM5pxWJ4yMM",
  "key34": "38iwjLqQdjEE1nFdP6hJTYC5fp4sYpyrhtjmsiiUeYGnRJNZAqyssPSDmhumg337iTU39SmoT78BsRcGP6EE5EcW",
  "key35": "5YvPbq6a7SSCGF4hXmXAeUcKtL3nZmxMw5cUFmeXooVjtYix8zNshs1AHAc4C2n1F2y2hNmYGNBZRPN9aS6EdqQB",
  "key36": "2HbXuM5zYnPps75zVC1VqFauJ8yQL4Fef5u3zHq4Zg4GN8YtDEurApHZncrAJHTD8ZuUGeZhqQrVPiAh56pFa3D8",
  "key37": "3evCEHvn4oGeGHzMrSjpbCJz6kVqffYLLJRxSKHk4VadJi5sNaJ9sc4V8uSjzjqreqg4GpnLYuNR1AsxyxiMa9Lt",
  "key38": "3hbmiBzkkqBmxtLZ835HUSWqejpySceqMPwXpf8W4gw5GeSmBTuVNQLSmZKD2cfFwMQ43iR81gsWvEPUuFaijk35",
  "key39": "5cKczCGQTnDPopdCJYRXD1YXzuV8J6frmDhDB99fbRdCNE1Z4urqhrDE8nELvWbKNsBxskVGEcYkpiidfc3v224N",
  "key40": "35RLc4aP5xbV8JVHhn4ou2mHZb6ciE5EJLc8goxVs9ib3PT2U6heUQnp16UvREV4BJNvz5HbfsH43CDLVPavePQi",
  "key41": "5fc1hwGRwA5fD7RGbDvB3KpcQphxibSPbggrxCFT2pz2FmwRcnm2AuX3GFvsXxcFgKkesAqn7TvSdXjMyG1A8QHw",
  "key42": "5gdqpZMujqYXFAgHNsxeVQ8hxXvijQJPmTdFW7uMZfF6deQwvjSDYJDDEjX8rhtKYHN4St5VvHgst4YeeTesLjFk",
  "key43": "qhnVyJv1kFYL8ijjLrKDAxTxzDRm2zSYmsCrMa1S8VJyWcNxn71rFcftQijHRG4d47YRWAi93AUwRYGq8YsT2QZ",
  "key44": "1meaWQKa8K4gK5quKsShfq1YDjpwW7vm2w17jFcXyv7i59S3CYhRcfqQGB8oDvY448ox7dfzZYgegEfnyuKhgj1",
  "key45": "2skdydSGZGx1m7j8TV38EY4BUudLFnqtryQpdspbqT5GpMy3WC5XLmPB65eAxfFNmPwk5J5n6vCrCAvVwS8a8JmL",
  "key46": "38bTG5qcdQGb4fkXEp2uXKJnJTTkabRSjBXPiwXvUq2sLL4eQcfnkWQ2H7FS4yVa5hh3x92T6UXWqWMgW7whD5HZ",
  "key47": "4Tk4DaZgwNfEnAX2uJRBYBbELPnxR6CX7BD54vKMixcp2CZZJkdYth4QmVfvnnBoE175uEJapzVpJPoDMrMJCPVo"
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
