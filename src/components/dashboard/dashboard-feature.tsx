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
    "25tBYDYKUsgLpMPWv8U8tQKBDTGKnf4qvYHkEtVwHMGQeizsjakn2WMEtbB5HXPFAzq8Tic1AKdcreB9YcTA3MqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ExXVWnTSxo91zeX61CnBfPZm84a3LqutwWuiovP4pkqJSuhZcs1Ny94BphWQdR5qViKWqn5BZNCaBqaVBHb4hF5",
  "key1": "jgA4K4Kw7QVyrWXiuB4VA9iE6VumQZGYwQZZt3pb1r2yVauX8ZD3WFAoSRJ1FkbQv5QpqXkuowCnPVqZsz9iXfF",
  "key2": "3HSU5XE2b9QDEaD5vvDpYJ4AFBpG6EHezijvKxNjBcgqkXweceUGnQrn8w3Hn941nUGEJe9nX6MbTrMqRm3CKKTY",
  "key3": "2iWjvSTTQExu3vU7jEqgW7UkeKQhL6cVeuXoGGAGjSbHWXM6KtPVEDeU3iA1z2aYCTzXH7SLBNPEVFwjMzqkmuZV",
  "key4": "4MK5cAcAW8wtBeXwQZkMEs4vs5tfCm5aEw4CNgAb86fWCKtBUuAUXABsQcaD1yaXR6742fqNQbfW5MarcTQTY46B",
  "key5": "2NHFN5ekcDyTgRGyk1KJuhw83fT9q8WNSdrR3YmLV9Lr7jzD1RCrjVpfWPFDj9mmDSDXa2gUprEwVvBNBjJXqytG",
  "key6": "5aTvgvnGwTHaGyHpFML7NLVREfLy2tSquEmj55v3aioL7vEQkfgv1V9aBeyCKigtjR9q6XmpkLuQU8rG5Pv8hRTj",
  "key7": "5RJKj2FyCzKncDYhJBBNxDDDYiH7dxopZQxStHKiw88T9FvsoBiWf9UF2pyGjWspAB6Gww9V98JjmSGeBjGtZJ68",
  "key8": "57DLCyUFAsiowHn2HDWioY1yqVk5FTUL8uk722nxjAU8YnAm7KBZ7MLewJXY4ta8J31UJiF9LtU12qrQrJqwHA8v",
  "key9": "3Ly5UK9kjhcFp3bJZ2dscExuSPe5FrVj6mdEJBkJSREWjHb1cNjD9DTfp1UUVYNXscgwfGjgnNsBRwJYe3T9rAuq",
  "key10": "41eAncDb5UVcgjnNsDMPR5ctmsHSydYmRHoDKV2DYxeebv866antcVwFGmEWsHRY7y1tJp1Q69DX8YyeXVKqzHSB",
  "key11": "2vZcw8Yk5w9xytGB34XoabjGjR8GTXsCnAtzbX99jsMVQb7eKacX5JYXF3MSZ4kghyZYmev6zvNRuEr4rqrjwk6S",
  "key12": "4M3ryPMvquK6oteJbHpB1XEUKWykLoFxGvYgQCVcbXx2AtiNsjK349MmVHsyMpCE7TWR4JT8eGLntzBqJ9xod3Bz",
  "key13": "a2vR22ZoVEcbrTWpTiDQGpCLRczurAQ5aw7wH4Fixc9pjAd7AXBqRqp35jimKrzs8eTJaufDVW6eEyTSwoSzLv3",
  "key14": "3z2eQi942C553yLE8e6JkrNx9HMu7jXHCx5im7MhwMJLTgvUwegLWN9UdAaWM8qEkv4Ke5tkHE39eAA35UjLAy44",
  "key15": "2v6ERSE2rvGT8vT5DwzMF5fsVx9drFrLTbmssJsQpU9yiMhfMqdpsVXJfB7q9KeoqqDXMpkd5up5j1wzkw41Lubf",
  "key16": "3pKxsjtpyyLphh5VrM3F1dggQNY4rR8aJT2viofich47MEpKEenTkL85PqvKtPwKc9Dv1wVoNPHJgJpCMjocsFYB",
  "key17": "2aDyjdeApjA83z5YNF6MfdtN7Cw2HMHbtNqrBpPiGARqqNHjDtqFG3qJd5yB7HZ89pWzDDVNJcLQjrNZMhkbE69s",
  "key18": "5eAMibEFttM4A799YtTyd6FaJ8YSdc3tiBAZEvHUgsY3KSjviqWDxSZQhh8zZZ4ivsd4USt3oZy9cJYpyyayYRrv",
  "key19": "YvdCVYVvEdjS4uigkjrC3PGN877ZzzZtww9T2YedHZdgwooXPXoKx36XBNz2SU5U2peTgjfpnAyz6ws1abQwb3Z",
  "key20": "5vN8ELFG5SZaZuXCmRFvTTkQQrPB5wJaAj1T1QH1SPVEKuGL5EiHwdvQbtEUR9JenA5xqSashsJxFbSHmMzjKXAn",
  "key21": "4BDCgWGo3dD9ydoXguLH28co3qoPKdfWgB4DsnFezHA5DMuyTraTQyQE3L51vE8SzrYvKNhjxJGYryBuyAnSGCRM",
  "key22": "5e7N2mhDQKQ6xAcJS4GKGtKQXDPMUFFBtKPg39mDfwPzkAdkRNGZTmzihSomkwnut1W3g3xbTJWf5NEfH6ZJv5Sd",
  "key23": "44JHee4YYZ4hqCTmRCEK7ZU39SDnw3Mvbby5EB3xHY6t29Apwoaj6r1pM7EZk74Jwk8WqrbicKX79q3hd3DBDW2P",
  "key24": "5suS1X6px4mbUUEFVU2ptxnarbmBX7bRkqQ9p2tjD8yKUv9wMZNXxjpKNRPUMM2Dc96WAE7jgWnn44U9LsYYmvZU",
  "key25": "3ayRQxGAkq8wg2WDCwvozoowq44GsFecj9NbaQYWii2vKRJjWroKXAGmpCcvTjfMAabtpBgAeLcce5ktfVZc6L8u",
  "key26": "CH1cC4AnGtsZh7UEHFDScVn1smMDRw9PKnxPHfsd4AajN2mMw3psQVG3YPN6esQDpxvGb8V6oLFaUCS7N9adSkv",
  "key27": "3YYoHpBman8nmrS4saZELKURqN9XuYbZ7RwiS4FfU9XZgyYKCrZ9nBj8U1mCtmVUTAiqpRnkDoRo91hhR1C1oX5u",
  "key28": "5kSM3ZqpWWjgaSn5oUw3xu115DyHeites8SsAXJwui9g5dE16PhXTNQwz8cgywEfiBfhihxNVP4V35G8VU4LcpPw",
  "key29": "3wc63icZBcSVn1EFh6r4S14zEeinNdwDqZWBmz2VrdyVXEgCrb1yvTQix3d6VpZzvyrJE3ifLZ7zDcDqcibsxnXu",
  "key30": "5KxZUGMv5JhBJSGiD7njnjwQzbcHQ6faKbxpd3h9S7sdrhjTVKwgMyKQCyeycW7YcNyKPRvq8uXfDVoTzYVV7oHW",
  "key31": "DE5LzcyQ41bmMmj9ndzMXKAVY76ZxKRZGRJV9vndfN8w36qcZgTrz5eidpCmkhWyTecRZekdSVb6cihT7KuYNzZ",
  "key32": "5kj9BsaZntPwnLHFG16XPoUtTiQK5mimihyQqNZbb4LKLv5fKxw2tJX4EmjevZwXbnghxNxzGXV8jo1pmL3bcMQ6",
  "key33": "5yFqypwFd6p7oPDgAyvnxS7tGS7ksQYyzzP2QqiTdX9UijCM3M7Wsjwkd5tnoGWBVaertX81iyBNpS8dMbFr34A1",
  "key34": "2jkWr7QDP4VMRrr4DPZU3GKSnKYp9YP2N4sVS41c9rfoC8KsCsA17RQbLmLH3xqXTTq8FitRdqSV3Vdmn5DRDhba",
  "key35": "949AXuh1WLTvP48ujrbc2DmT9hJFE7TWq9yYgGR7kzb9i5EUZQQrkYDbx6TCx2d17V763FKhmwoh2k3mTxsPv4p",
  "key36": "5o19niABz7KWHKdvBYuLwnz9C9tTgieWqv6RbW7bgtTC9ejWL5QYePLTWpeSzzbdZqRuYLyva5tRupNpDrxBuDfk",
  "key37": "3Pckit2LD8yxT4BfttLpzmFpYMarsSEKyFBJESjw5A2VBSeGXyvHL8WggW3ry7gcVdGYTLQ3dr9Jo72g3Bcc3e1W",
  "key38": "w1fZiAHrZSjsDGHZ3Bc4zaR9oKFqz1ymtHVa8exPXh1u5EhQ5wTMYFW7mjpbjCzT7ZrY7EwRSfvZAPxQNw7UVai",
  "key39": "iKFsFwL3aQ9LAJTC4Kw33B4dm9xiGTc7xsugeR29ZDdVvViXbyGZzRRiKZafRr3qU5AsgDxwcJRpy6vos6bYEVA",
  "key40": "sDQKmu3RTmbPnW3r88XQ4ZgRmUEJzREMicp6e61Jch673cbYJfR4JWJ5MPup9eWKxoQx2V3uQZzuGF9TcX7Rjzr",
  "key41": "4rGb9wgQ6KXqSg1pL4WyfwShXquvnB2vtxL2FzJLHgNDUKunyZSXPBnGqiY5tyuUMvMfvEXXBvkYdFQmvQXR9tBr",
  "key42": "3F4Cjpo2aCYT6zSeYBE4rKxtd3pvW3g2JdWnS9rjzViQoo5U28t2aPFXzW5HyGsrUJj7G1byCBULwG5SeyssTRcy",
  "key43": "2egnzW2dXBhqiBePn1Wjyd84aB6JjiUf8rg6cviMZoatMEtmwUuDSfNP5wTZBt5PPvaG1RqpTBLitAfAFMbKVHQj",
  "key44": "2V1EPn4Kd7UwnAnXbEstzGNxwQTdfyHEzTeXuBcMVywsSsio7KotCMaZrv7PHg3JwuBy1FozSDX3X6TtfZimaA4R",
  "key45": "5Ty86RDHB1TczHknxx2WCQ61H9V9BiAhPj9cTe1yAG5VSRkPGYzHhnDJdTYREpQgtE92PoDxvFGpRnm9BvpxCqsu"
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
