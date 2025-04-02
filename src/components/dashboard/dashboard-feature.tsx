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
    "3i4g9ZT6oBDYTJCABUeWxnMXA2BrEZue3hPZqShM6VpkHUSHi4PbXq3YSFtpwd7WbsYmQxLJ3rceSWJffNniH3m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHabZvBYiF16BAx9BJRgbq9EzTFqJNaCdxQYNQ9PxZZGo1GgVUgs2wwqtWsteq56JWrP9KtJy9wGPfMLyjPf2jY",
  "key1": "5U4BvNXkAKsvSYAsuNPisLb25XWgHDcmQW1fZrWbWLKaUvxXXzQY7qRLgVzBrzg3mJPeoCTKAgQsihHAxZRSCc7i",
  "key2": "S9G436YHmFttc562w9uQoyC4gujRDcviXVzNoiVAmr5o1pPsQXvw2Qn9f6VFfHea9b4AV1HDgtZnHsdeTJjDpL7",
  "key3": "coe3phzkW4qCuQ2yhrRk1J2LookMoPQJgNhhHChuUJXq3rPePrLnTH8h1kisDbohiaeteVePF1ewP7eNy2wGv7h",
  "key4": "2xfuQqUpGrBv6kVEXVDNypCkN3JKQiMa2ZZejQc642q14x3HWdEAxrpkLQyRni2AZ2bFDNDLw57H82G9mNKmkcac",
  "key5": "S97CZGMYtaZk3wJFRpjQsoQLvVhXGUrgzWSuX3KKwqoPdRwAk9CKo4VcMgoWGjnSVpoSZVahmBiajoUpZ2gaN59",
  "key6": "4h2gnMXe5BQDHkTcPftjFGNY1BfkrscwRJ5eDfZxXcfmNcHCFYzBNxG1wfBjXqgUh3GaCqJLQ9zjvpEgUnTGut75",
  "key7": "pvu5aNmeA3cdBeBw3n7r3G9awJXwRBCuMQHeGytKecWCkvYtLxDC7dC2DgN6NMgS38L1NTvRCBGPZrddE7D47Bp",
  "key8": "cFLpf4SZmHPgVTxvzsxbKKNeWZxCg82m5nmUiwBzUFpNSYET5vrfRJeN8SfvA1BnfskncFi1qgxwgLXBvK8gPYh",
  "key9": "3RYt5vKaC84SsbB9b4tm7ZD6fX1PUe1eAYhyhM9D3M9RWYkK53Uef7ijxMFwa5eAUGC1Q2Tvd4i96AgEWYwXRLVX",
  "key10": "4LpvUkJ9hFt5mcRCUgFJAen22NfV5uEM5wSxj2rssbaRXNfM7xReGe71fCtvMPBU9HB75Yt7W8rrfJRgspwiZKnL",
  "key11": "3ctJtS9LEzkzHmCZR7hsVnASEietzSjgpjxLpU9LJYPSen3GMd4ihgcZKT644S6BWRTXD2Q8ZmvjQHC1FDAK1zZ3",
  "key12": "2WhE8w75UYbFnQqHoWfZoweVtE1bVBqkQKQidfZ4NPauzfZhBDqgvxKnutrcfpGGv5C723e4dAXjkaviHneCWNmm",
  "key13": "Nr73GFaiormogBtendRW3Eat3tCwFZAQLawYiHnyVGrKumNeBDQJv5hdFBHdeghre4BxmCd1tboF9wPgD7qP8Q4",
  "key14": "39Swd74w7HBERb4nuMnKNUCQTwpgv6dt5v1RhPzGu9dtaAMhNjWRpqJ6omG2smUzqBY4ZfQn8BZ56FJk1AH73SiH",
  "key15": "3MBwtbbVQBjJ6iEuDJKaGbTEq5yeFur3BxD3p4V2DP83Jbf75NYWDZVg72P71dF8EWJCNXtNpk6t6RADjGMnkQT",
  "key16": "56U1eSsbavADJXXJfgUGYrAAXQXpGQzvJctUaJqs1CUWde1hfpoQkwhDzFFxXcdqFaHBTcULWMWziHMLgp1CB3Xs",
  "key17": "3GpBPyYCJ7UGo2v8APjzfdbJTzBCKjU6vSwi5joSYTRtiHrsHVD97ksGMkgMxA77SD91eM26tdDsfevEFDFbnFkm",
  "key18": "3pUpk2cFScLmbVm8s5pLXiKwb8dpQ4XZX4FDcCpNzTZRfhk5kGzGtdz632csZEKj6ErG7qpL5tZhvwTUajyXHHNj",
  "key19": "3N1eRDzLQG9Fgak9k6eWp1EKUZUWJiPDNZRkgveAkVu47Kfvw6RfpmvB7KSF1zPzpAycakCkot2q2tpcd1Vttrea",
  "key20": "4FYpVZCZQYs3Qh9PFoYTPuY2TU5Mj4fHtrsRmapg8PFwykcWgvEHqgtfw4ZH2AjyUraBHuqVQjTtMw9rkzpA2DPM",
  "key21": "2naK1fsZ7Lw7tgSsNRV3KofSY6h2KwnboRMWzCCkwZbN92JuFJxsh97YXaXTHxSNHyvSWdPBKXHcRF8v2kwb332s",
  "key22": "5grwTYsen27E57xDYzu8Bai6wmW96jJwgaY4VW2HGJDtLPEvW9ywvgYuYvF8MsX86w38WDQWYW2Ka9EeuSVHqb9K",
  "key23": "2Mmz4UnY1zgq3KdmFuFVm56odHB4Nwju5jhVVhefzaFbxfezFZGgLV48ngeSm3uWc6Y7GVVdWJz52iLgdhPjS87f",
  "key24": "mq2rsxTnNVJPgnAsFwbJubUbh6dJcPj6GeiFg2jGXsF8kipN8Mkbnt99hd3RyMBFRwwqSwe4FjNjRcJrprBUzX3",
  "key25": "5nhGyfiyrxhfqh6ZcG59vAMgxrSeLL97Pwa9kKA9ZeQ7vxmBmVrQrUMsKFu134x7xTke4XrUsKEi9CcwLraTMDyT",
  "key26": "455J8Lni9Ytde3q78AS3bJ9w4uUr5kDmb5sNR95tmGajpcNEuppxuLXAKyiNviwbqhHdW22fXdQbmDE3h7uNfgiS",
  "key27": "X3vTJSNhTisjUN7TB99sTcGJXrbyB7J9dCPMUumrKqq3NNHo2tQsYazu8443Vm8QqghnPKzhdo6fNAARL3DcrP3",
  "key28": "3LzruQwA3LJ6N79Yo8xDUCJTnj6x8VHZjhFzkprKh12sDTVhmbhvfHtyneVPe5cBDHAJb21fSA3yhzJTU3LxZrXv",
  "key29": "49uheZovxnTf8vCkmCt2RfLHfKMWwzFFBG6brkamPcqXP1bfametoNLUT9z1xW454bsawUfsRjwdxyHwZjZHzywN",
  "key30": "rgdjFzy2MNKmCzn7qAbsuaEhbz2S49sytvPuyEKcRWu9J5DdHskYNhFdK5MBk7uN7XrdjVEKrcrqMCCJqj7qM17",
  "key31": "2p4sJaK3Tba19NgcuutbqLtxEzFYctLbEZdVS7Y5ekY4EUf5Qm3whmf4B2VbRtdvZpXjVZeDVTQc5GALK1i9k9N2",
  "key32": "5aok7hrtKZcFEc134t9RG7MN7WXw9jzB4TKKB3LxAqWQzJ5Tj5Qts5Y1GWELcqNXwGA6xqFpFzgCZVud9eYFpbp6",
  "key33": "2AiQrEUb2jiCStWZzh2dFxVRURkbcCn5iuBJy4hvEPbviK8u7hiN3MKrBGoZ6t9G134KahtimpoPxmBzS61e4Po8",
  "key34": "nJVkYszjfsoBQoHp9JPFcUxFYbfpyGnQYqNPWHsKuMQjKZJ6M4GyZoatfjqomzw3JH6EQaVhqwpNp6P4mz3mszu",
  "key35": "4rzFoszE4weprDRhRSbWM4GWvTY6hWAetScY5v1nuEtgRKnjWzeS9d9Y4hhsiqRv9vrYZBJ8QakueaG3iXMQHRq3",
  "key36": "379TG39DAkDZZmzBhdQut5X9aNab2Vkw9VDMhWVMRJDUQkLk6124cqc7uWajUwDTuYyKdHgg7aLE1Ai6JEzujNpD",
  "key37": "5UmXsxm1BVAyVDzTKgPEtvsxUoR1sD7t1idJYmWLbMa3BvjBNz9vhCz4CTCNymq2JKw5i8jdbCXDxnJRce4i2McY",
  "key38": "3fQNc2xUnS3Q5umpSWVo9mAzU8v7F3LC5HAf2nH2zUF32HykNmZgDxirG2jH6JEmTdRC1jEHrdDudbYkrrajXBZz",
  "key39": "4bvGFTEWKft65Xcos1kSvsxiCnFbbEJDqDvoGKjTBrFKDVUCdtpCrix4DWEvgXjvQwTQrvUVaZQz5UhtikA1U99W"
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
