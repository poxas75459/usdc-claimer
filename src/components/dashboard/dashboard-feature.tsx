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
    "5YTwhZF3kav8DSKCnxX36izHKAAjabHXjcc8epTSyVBL4HtUYEViLLbsYaS8xCaynVgNmd2j14kRwVzwefGALs6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JtLbKQNJWjucHeVqCowQ36SzuJSFc9CM277m6RU3KLwJR3Cf6wQYvmqonmKLoFjdgRdbsTvtStzuDxodwuveLvn",
  "key1": "54CW8ja2GBLtyAHFUgZMH73vRbimoJnqhUYi9AcehKLzK6VuaBLrbzqbgbpYbdk2S8GUUrwPmJSYrANgPbxjx2jo",
  "key2": "2SZ4n484VrhDUeq2cBx3QAcnX8ddAgAzUxjk3DzxiLV153qkPunqiU4vHatNPJfv7Z7sibDgzVcP99ZhRpSBFkQB",
  "key3": "4ZpsUodpbz6uX5uFWrie1xDqwQ8V4octVAfLxkz5rddiUBFULTZt8PQfQVoeE42AsVz6BxXUJsxWnaTP6iSzkmBd",
  "key4": "5mt5bSdV43vj9uBJ57TPx3cykRT14jU8WLAgLS9RA5yZUhrpkvt1SApGXJ91rKC7ktRcxcbB26KDqzn9F4PmxwLX",
  "key5": "5iWZLv4YW1J97gvCVDYh9RxKJYpxzgy6a5HWkRSgFfRqC85QbU6exLVo8hJnpC5PDVtB4ANrREBH5jviqtSejfCs",
  "key6": "2DHG8ZDvvJ1QPjPgN5z6vCNDJ9gjZrEw7a38Q76yX5EyaehcFrh5mkjbE3kbsLoBL2CzAwsKM9So7PePpEJMn9hg",
  "key7": "5BkBbzc4ngFQsFe7CpLDhju2WimUwqbZNZduP9zVCLuMqc8cgAGBc2fuG8qx8crgBmDTtrM23VSJdq6w7HLsXRMo",
  "key8": "4mBx8WZ5M3C5faXLPzdh4k2anpm8o8Nweo8s7pAtPytYr8vVMDXnhEKHpT4gV4fmS9ba599MGEVYVZ3SCKpeQRTe",
  "key9": "5FBA8EqPaGeWRTYtQbc9uPfx9Cdd5rD49WvM34LdoRQB26BsXgpaUWpHrsuSvXiYRj5Tga4nLa2YNfAGjqhfojEq",
  "key10": "4aqXymdCC7o6M5ETmgdfeeBDphSc7krDAsekpkQzf9MfGu2MiUs1Ebbwc6YU369WJ6zF4TTNjs27iyxRwwagm3qS",
  "key11": "2fmST9vngSNpWEoWCH7oA5R4UcGkRjK7T3CXMBLzLSZe3XQeESNdTJ6vFvsV8j8HrwUtAXjPNYJwDCBuL1FrPTmL",
  "key12": "o489j5kGKfY1WHcUJZSoryewJDVqoWN7SRZh2SPAJVnKL55VZBWX9hiJCyFKRqx9Z4UMoojbCE6FrS7KRnKtkCT",
  "key13": "3KJRS28FLwd6LY4SBUXYLkFjYu2TM3ouRXqUvEaTWnHzzBziVtaCUth6Rn4XFERQQsLget4VMBaJY7CgzG2j23RS",
  "key14": "59gqwwwkKSo5DSi2t8f68Jfp5oHnnaSgtYW5pAQywhaqH3uBmESP3tLLSjNhAo5zfDEeVDrbeXXts35C2PptPDgb",
  "key15": "3qDbEFg72qPdtfJZpCSEweSsurZ1KwmPu9u7pbLUojpBwmKWaPLhBCcvh3qwG9hmZbn5VAHXpwvvPABCqSFB8DFU",
  "key16": "2rSEqqX7JwVx4sTnnhd758ZVyFSuY8meLiCmLXYwFvmkrJsvjDjgSrQ2RFeDMvvKz7XLCeX1HVw3GqjzmyRgdbg1",
  "key17": "5xnhspdkWTmJtYAcREZbTk3LERRfCSNAJousPkHgbb6ivhmi7PCkoWKRaUE5SUaacLpQjXyGfFJgZhTkf1m58n5X",
  "key18": "2fV2qu1fsHxwhWGGkJAS9uDd2v9xJmbKrvgyZrB5soSsoVk6r6oLQavLf7QPoMVSAhk1jB6c5QCmgv6WEaQKKEKe",
  "key19": "EAuFQ2kAVECJd83HNyyZaFDL3UzZkmr9K3B9sRS81DxzCzRjMmFYJjKVEbd23tHbY6ERav1hSdrGSQUk4r54Hke",
  "key20": "3ULophsoa8y9VBpk6E4UiwGCAxGxJVXHrUT6TkRZih8iLeqK9CMcYNodzmJbuaoJiNED8qm1kazoU6kUdqxvNkjv",
  "key21": "54PkLR79wAhPXiSTu9Ae6zxRMxgZCLEpWnoDiN63oWrRmE1SHQaNPzTws8EGbkH91HU2PcPf642U5FyeySiRRwcQ",
  "key22": "2Jb9ZmNQu3JZWPyAtvwsdXyCUyLV63f1P8aLmq83sANNdk7sWhniHyDvJwZ5PTS1bN1Wz6Lyg1GS3Zrc3eGZktCQ",
  "key23": "QPcZNJTvThQrZpZ3wRpBgVB8SAyG8U4YCvTqSJTAdCMFvpL1rickps4zKRnDCkeLR5W5wcvx6LqbXaXs6iADYVh",
  "key24": "UWUuY1fwTiJyq7U8KEaXQe6ktDLEULyVkLBJPARvXQZM2uYYtgjmZH8Hudu1SsYQbqS4rQCEYKu1oYibonEQSxx",
  "key25": "38yyBSauzjfH5vE7DVZAzo6AvnGjz6Sqh48YdcLcnEzmXe4SytXvFD8zWujuFhV5VioApcLCc4ZGZ1g2Wz4zEHVC",
  "key26": "4DqyTErCbkwXoH7hWiUZ7oNL9awAFHbFPodCSsSTY34EsAKDkjqtcHMhWfGMz3stTdWtwgASse1f2FYv4k1jgsk",
  "key27": "3nXZ6mdsMmkicquQs2Mt51wLcCxyjbGNSxBo8n3QALQcixQ87sWu5U7AmoQnSKZr4zDf7dzgvheD4uCD7WVqjDzm",
  "key28": "4tXLAioeY8qMFFJNFBnbySGUvKEFLhEncxrinHEUTfT6yW64UHadY1EFc9gofzhktDn6YstM3DPovy9b6bnvXMRQ",
  "key29": "4YhPNz79KWAnNkmtVqheHXZQCaxByvDA3sonDnCEjBieXQn63xZgDJS8qu9bX9R4x8PrRX84WsF3Ahk4DwEZzZAv",
  "key30": "2wepC4mXHTEVPXs5QLQJ8c5RzLDsqXez1dq8jRUH8z9a83q9R68TNM5CESUyfcscjB4XTHs1cY8hZJ2owFd2THti",
  "key31": "zoBux89d3rTrvTc9mbN5LEyFGxp8E26caUJsJ3zX68qQdPVu6J934BApKJarY7fYH8T8HhmZX2DXAmP9ELGzfTq",
  "key32": "V3EwYoC7WnFNo84JmgtFAfU9PkD1EMxP3vAKDUWcgzvpLuCWCD2QnzMYc7SDDJocAVGG2PKg1SDyBezNZoncE8V",
  "key33": "uJWeouAG4rtSC41axuLepG8e5bT9gt63zLkxDdUVsVA3qiZRm5geHPqqTQER89W3GeHiGWNEhmfPhhNB3tz3Xdu",
  "key34": "5yyuZkWWSdj55iAyG1kn15nP9CJ6tpHgUm3zYmJJz3FAcphRLntLAP9Qy95FwoPYy12DAL5tQHh1iNCstencqE7L",
  "key35": "5RPWYmhRbfdQ15fb8jAEmnCnTkeCnFUE7VpDz2f4kefztHyPffvQXSgpVYTPgENvPzYtwmkWrnu2HvgTdra8NwtD",
  "key36": "5vuGmuoH1MWT4nqiMNX2aHh8axdR5Q8Km8EJhJAvUPX3DNj57i2Rx8fN8nAX9Aifqe2zCvTbVfrRfzHXA6148N47",
  "key37": "65dDgtkhgdyeV4FW8mo3aHRWFYx2S8m8UGWJLF4gDFD4gaEhGdpKEhh4zTo83Ju1dH1fqUgVG5M9wSNz9vT5bay6",
  "key38": "5DUKkrnnfZqr38ChnKikrKChshatknBDSdFkepBdPueyKd3GVAor2U8NNd4eCZgsLFXBzcsn39v4AKYW2ry4KHSN",
  "key39": "4Yh2FWhyBJEf5faxsL4LYfkGMRXeGioHfaKXQGt6chZoz3SyKTsjWpbfNM8qdZxgEdkLquWLaqfaTvcykhu2QC25",
  "key40": "gBujaA24e1ZUe6kPzNjavuoD4VuMdFUXYyKfUrEYJPU9KgAMpuFWbCmtyQvL2nKmHEwRMK3tnomiX2GHu53N7V8",
  "key41": "CWH9pxw3gjWdNq4V9xL4FeAfWfwNF9NkaWkFA1BotmxvWoZpbidSsSiffyCopFdJ84e6AyvhwDMLfk6wUzLERcz",
  "key42": "3RuUkL7B9xZ7Wf2VYczKzS3U8Ery7cUbzCirjGrPR45SQAoKXjXBS4AehRtrMSW4CqwAA5HrwnhcHM6wZuWN3WWw",
  "key43": "n7FK2kmui5Zd2rM7vjRwwVLPAHZtH8yRKAHKAt9DhQa6SsTt7kUm1Bp1WG7fQD8Hms7RhVjPooamDPcAAdMBdP5",
  "key44": "4SkU1gEotPj6wF6A9sTwgUJp3EEUKPcuYbpaQi4NZE18wb48Qud3ZFnURgwxXNCUMumw3j9WH5SFkZ9xf51x7wr1",
  "key45": "2VZAgFVboqyxKr7whxAaRYHb2LwkwnNjFwp6VWHnkkcWyZoQCy8v6aU3p61jdrBiG6MU4zeGfXrf5fjDBGSD3sH2",
  "key46": "4paHxtWpjzZA26PdnxLaGjKKha1Hh1W4z2vLKyzUmyu3ApzhUpNi3ss9ikxAtAQyGSh9AAtTQUfc8DG4HEMsnTgz",
  "key47": "4LoFQPZvnhRsizPhbjEQ6dZL8bgukBdQDnE6r8xskqYWbXNZQao2dXwSYnhvs9tKuhGoqsQdGGYdrjj83VuncUhB",
  "key48": "3KQ4YJMtgxCLaFqhgmKud8JJhSFdfyLJ6ZA47PTVh29HjZBF3r8mf39asqaZkTtRQf61czcBcJcWMLY9fsuNQMwX"
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
