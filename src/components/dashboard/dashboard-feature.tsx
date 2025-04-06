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
    "3EZuSVNQ8rSZ4VbxR8GHhmgtyZSRGHi8mEmZZJ1Ux4z9JBWu9ioRmurVmr6xVdURVi7ukgJCbAAaRFQsnq7UV3rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XfqkAZTtBYvhhXek2hDKLdAN2DNUW5wxPZw7216uV9TYgYLqCKMFwutKcNhm3nggMrKMcC5kz7nL7aG5asm6WWV",
  "key1": "4SnGhvUTa9jqaVT1KZNouTdtg8c9nS3PRKHX97WpprnaomoPxxYqFTJizrJam4d5ZLZGzLndzSF2CHtQrqEXH1WT",
  "key2": "31U4KFAbewjkt6v3opLeaUNQ7MEEWDyDv1MEh2qawU63WXjCPp18esUAYFHMfPj9Jn24VWJ8ja7s5YJUFR3tvSBK",
  "key3": "5bKJSygD1SdaHqYXa8qt44d9WKfFq7JjDrPCZbeDoR7sLQqiC4e47icLkv9WorJuc82e1yx8nrzeRdz7QjeQ4mZq",
  "key4": "3xgjwr5rubWnx3CmnmupcuowYa7GV3fTPbH9G8j2QAASX6oKjpDubTrbLPuSqu1WngZY5u5Kx7G4AiLkNyuLRrN6",
  "key5": "4VAcsPa9C1ajcZrc3BY1pMsx3YkvYNgU1hzpfDTcJbqjnDXe3kayMwJEKJQyafvZVq2d7c1CHryFXsVop5S7dr5Z",
  "key6": "JE6to5i4QHqzujNBB65cMqJ5dyDX4FDv4uvL4rjfWPunbzfDd1L4G4FanJwaxRNja4UYXETjKLSqkBdnUFqtuGz",
  "key7": "4ZiR7LYDm9bR1TpHr2zHyYgMscpbbrVdWwyxt7UXGyRD6ycgm2Ho5utGeUQR2Mw18tLzhgkNfE3XyMX1fP5zoQNu",
  "key8": "2KqUmjwv1g3WKd3PyGZFo8B7koWqsj824EgLFECQzws4iqAkugeva32mP3iHsi1JpqJeegLRmw9PVMXVgbGmRATQ",
  "key9": "vk2vW8qaHUTX1LCJtiCSqpPAAWru1hweTV1enQK85fkE2VbxcSpS17iWjaECffnXYTbio4T9ApTTyNiRCKgf5vR",
  "key10": "3c2RymYpatU4NjZbZD2BmvwnNg3bJHAfet9yZZCfooRUy5CiYHKKeHtUsNmXFXZG3MqqUpXW8ncMU9FhBGGcbNg7",
  "key11": "5SE6ZtLHqQAjaCz1p2KJFHKFqx1jpcpE56FAmHGxNssS9gACotoTDq82WMxrdc41S5DazqN6zt9KKUF11D6Wbdrw",
  "key12": "2ZaaffEAKbJzTfBpd8V91VmvBBWHxjjikFQBYzjr24KA6E5BB1i9qPDizf7uTo89Ch4DeHdyomaRSF6eQmHHDQ9B",
  "key13": "5ehEFSrwvKvfYQ3zooLCWAKkV9UjSFemKo68GPwd1tQmwN4sWegGdMvcKfiZyNYNcwMVHTKto8pLdQtYtFmcH6Ce",
  "key14": "3QvjCbuNa2QprrLKVC2ve3VTkrEQSDHr4NCKxoYH6t2YuBB1V22J7ymtgCsphmLyUM238veDajQcgvZpbY9DTX9K",
  "key15": "3PSmG9c9zeaMYTmwhiG3Ds1tSSM5CQ1VwsLqYQQDvBkyqqUvM4dAex2jtUtSMGK4HnvD7WW1MmPzr5hMsM7tjKBU",
  "key16": "KC7653gxboQzxAcTjgGw4qRVPZZLBvuZYqAyaWx2p1zuNHeoVj6MhH3bX7DXmsszXFz3cdeuEqKHd1o1VBrN2Jq",
  "key17": "52JXdrBjmrU2qBQEktrWhxrjW5ZZki2ev8QY42XnshgbpPZNvrxJNLcMcG19eEyFmo7gRS8nAUMerMh4gsLBsZsL",
  "key18": "25csWJZFswtP4fXm1zaJPxiE2dUhaX4gAcUZAWy22HyTcNjZqEjFdJ9VpyvRoyeqniiAbzXfkqxEmK5DDBRQ14QH",
  "key19": "3qoFx6AEUxUEYENFLm9hypnm264qjahYX3L4yQFF9hhaE3sAAYtiVH118ZepGepy5AQ1fwTVvTwei1sTEo4DfnRs",
  "key20": "2gQry8PixxLbNEkNVEM4x5hzoAMksT4xSwaajnp6MGJGWGGstptZC2hFT2WNgsDDxgSg8Mye9sda6Kt152LbsuP5",
  "key21": "3tPdnhWCYcKzY1xAttzpz8sQyK6Z4cNEFasiDURLdFCPxbkhA4pdkJtkn51z22rGsngDszxgPdj5qBqnCAsDicic",
  "key22": "5vQHjgpbpcGjqwWpetUApHJKzYxZQLPxcBeZ9gddrzZUsJcougktxd6uJw8WtYAKBgMaiiLnG1XE7ZqHqNgzAyCP",
  "key23": "4BnDQNunHwMRz9HtnRrWDgUCbrHgYVnAgfwCtUAvHD6Wcuq7dsWymy6H5HSUyPveoVYkvZkQucofMK8SVn3q9Nhh",
  "key24": "4kdmkLMHABXDysoEbnuT6p9fxJm4GUW3WNsKx89xcxaahqFag3o9mtBbW6oCcxsxLHxa9BEZ36ncLTy5q9TCQL2C",
  "key25": "5CquD3vYTUDetqMJvR4EiZ9ux2QXmz5GzqNtWb9rNAqs8aeteQA7p8zS3291PPv9qJhXB6TzaRzjtSbxPbKsM5Wp",
  "key26": "2qDLvUaiVDWTWGcZgv3Bsk5zY6Ug5JuLijzfcB7MV3BzePGtZrZaNmqm4sVzMcf1TAVgb3DthKsqdHDMWC8PJ82w",
  "key27": "5r1xfT9jdyNQpcidC6H6hgtPXYwB6SuAw3Bjat6gcR5edgZNuVgYpKSR7ZGLEhFXck7FMVuT6ECi8BX4aP64KNSG",
  "key28": "2esd6xMqGPwHX624sBZLYhz98qKUZhQVBWqb9k6oHTTY4JsB1bAfL1ctUPAi4gGU1KSbadKU4Fo4sMnBMaQUSmgi",
  "key29": "2pigZ8NDnFupTVQBPn7zX8uep3hJ2NjUFh21fzJPLxycAv9Hwos86gKz34yFM5GW8HTWRN1B4HJF1Y9pto81kE5b",
  "key30": "3ixAkAyQ9McSirDHRo1vq12QufhLLSeG9qrH14L8gjdKNCqEAEeMVK3CtavmhDs5NrHeJVezbGXRVdrAGx1YVbVY",
  "key31": "3BpFNWok47JNvkFDknf8Rb1n9GqzNSAtYXesLkHQ6KvFvPvAMeBYWUPcr8zmddLCoRvD2XdaRud2wWJybjEi7756",
  "key32": "K3WNUPA4EPSHBtvCpyBSEcKASDdLaPePcujdw7hiUTUq9iuEydTG8EULtvUgnhQJJzAErRTjf3G1EURAGJT1UMR",
  "key33": "3e8ogNLGcGp8111mqxdrJ7jrcEoLusBSfVCsjUEzwiJHDJquDjPoGG5to9wT4RcxqsvAJUfAefoBdxAwuQ4apLA5",
  "key34": "2sVKdMEjV2UUndgJNMvRu2ngKxh13wbBJxFCwjQCNGcQXHNSz1WyAFi7c8smr2QDMtoUp5meEswckjc7NDgfJn8T",
  "key35": "2zATxBKnQnZJPz8M4oDYAygAT78jywPc26mZjfjRvkdb51QkwA99raQUXqEWnPvtgrTjmUkfR1f86bJNktKS16fb",
  "key36": "5YUp4FoBtTVXoBM9RTfzZXcVquGWxWcrsH6J9zfrtxneygrbUA53oo5X2gXxkhd5WsxB9p94UM2Gs1fedvYhPvTk",
  "key37": "2aUtaNVtWaY75yChvDuiipjHW41iAuTg6T7SpTcWoe1t3MGx2jHXKqZu26nPS1S3WqVatVUQmRStnJGv7AW9RtZU",
  "key38": "2hDAXFZnjEY9X8zrSeeSMdZ4FVGvQP4spR9h9CxSKAcBmvmkA3NhRyLwyByqUunPL4eRdUvGcJNU9NMMDuKvb8CD"
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
