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
    "4Z8DwNuyJmz1pkeSrfWdZTGovcz8L1LGx5mJq1wJ4rv5ES1L7FXHrDXKFgX6LXsRW461yc4iSu5i6Dd89GqgCD87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NPgoyP2H8RYEPHLqGCYtYuN92axoY2gtwg6xXgVyciCPKyxD65G4MxE3vhJE24BJ6gTE8xAm1YCK5kNthwnAu2",
  "key1": "3QM6vogtQy2JSjYmNnTQ6Hd9PWegGfzcDypdAXYZzjTuL7zQTFQHSEoeBDMWzuNVSnWbMwPyBtTVzPKqgmJr3UWC",
  "key2": "2rhGpTHJseJzEGg2XmVb6ZuUVPgKbC6m5ibyZG43xCkCp6gNbyAHc5FPLUSX9NvRjjA4T8MDUHknc5fgYE1Gwzvh",
  "key3": "5ifvfGtE29FfAUK1JTuc6VyqxfPgR73sAHZ8g6rtwqw6wbbcMR4dEtaek6GRPsJW9gc4vr1VJrMqctUEgQoFcZQC",
  "key4": "58CFr73K8jveiFezt3itExqbVDChkZkVgvGK2iefL7vvSfRw6m81U7QYys6MdiNwSAHdjfQL6ns6BqHvt5374oq4",
  "key5": "3JCWoFvXASMQRZPF2cCuDEJQixhAchVvjzFYyQ5Rw2AJixkyijmQo4gSN1t9fwWkrJx3bctBpaiumEAcDoq9wXzB",
  "key6": "26bFwjWhoPRKcQnWvvS8SCiZzhk9p5Y53busmQfi5E6yQ4AZokQqmLUByK8ogLZ6wXGnhgHQ6UbaReF9SwVWgADQ",
  "key7": "5wixVCkFxcPJGHhxriGDyQ8de2wJDhDgnAS9fHJdrpM6HVcjWoLbFFYVqcFyeyBZzukXP67ov1khpf4qwZj2KP1E",
  "key8": "2DL73UQzX4hHdpZRHkCymLkoEPsD6DsAW8ppYqGSwv3ijuuR46im2X7dbcgeFFsFhK6WwYgn59x8U1K6xm1rmBxD",
  "key9": "2ECqrVr3fAJuXqWmKD1LgHCir71WWwwXhETkktRTakSLWUnXeNq7W7USqMundJkFcaJ1fjvTG95pZmB6kZbY1chv",
  "key10": "2iACCyF6pF6xn9h9EuNatiKq63trdrbsmpmM9R5ihNX1QLpTGr2YEcJR1vAS6gYQMWsz9v2Hgb6zCyiypyRG5hKP",
  "key11": "3zA4Y1CzxHNP8FNezKWszLHtLHRMRxdEUNuZcmX6iUiUu14pDugC2NYWHDd9Nse1kik9SNCbHhTLc92RCWwN71vp",
  "key12": "5SKgty2FGQy675WJXhz17g6UaqZYSixL3TX82yku8QriVQ9vrotdaA5kMBRwUfThN6jhUL3PszvShxr8eTnJE67N",
  "key13": "2RwnUdCrWiaoePaWehHbftiyGWLaprK9mCozaeZBYFRCSoajE7oKg34AxibFMtqjGzBseBsSNVDTDuNHdwVYMRM4",
  "key14": "4v6Fb29hKQ1vLag3c5aDuezdeGwYBvUTW7QqfuDebqGGEHz5pT2xvjN1ZGcaxeGGPddUuFajEjvLgUE1nCyYG3f",
  "key15": "2gg89yyrXQ2whRTtjgwvpni3HEc4vawRLRaeFUPXjNSMRW9C5Nd4r7ieXhPpBFzz8EthCH6fRvDY9W9fHNHb3ykX",
  "key16": "2D1gnBNGvdeR8z6Pqa4rf5i2Lz4AaARgvVxW3CXuVvZhoAuB68ToTfP1QEXRyAhSvKi1kzez2W2M49eBNMG9CuBM",
  "key17": "2bpzd1CYFTJArFz4zzgXsxvdgAwEtwWPrg6twjhf1H5ichejHHsL91zqsnKiLa54vL5ZYo7JGtAgnFrdC5L8QSjw",
  "key18": "5yLNRHucYZ1uoorMbXYRyTwStNwcMBFuzHfUsnaxjFJtJi386jHrAHoqVCgs3McDArsE6Msf51YCwqicbHQ8VF7Y",
  "key19": "Wy7n96Bsu25qioid4XKmaByQVMBNoKtqxBDL1VYLciSyejz8y12qo4pBDka3hYpPtasS1aUPDG1KeBbJG1AgrAZ",
  "key20": "31Pmg6LUju9HnRkW2Az4RHLQZPX1GjC9qVRCPG8GZY5wbTrQR9oM9SSpjsB37fU9uxdAhKuv6qVBNaBwmzXw2BWG",
  "key21": "5EKYJnFvjsKZetDk3ya7ChhEuVN31DCGkgS53ZQqWky9j8ztiPkA4mVgRPBf2i2TDn5K5GzroLoRiMgiko3cfAPq",
  "key22": "2Ku3Ag3gU8Xd8v7HWYpsxaaqoZJK3zZLYSyKj1Z5jKF3pkH1kfeTpms3BGUBPCGtXS6yvQUJcPqZyTsVf9YnMvmE",
  "key23": "31CYvYA1VeuoKsD4RBgqzEGGPE8MPPD7BCBaxtLNWTbWArPDmFpna4JtmFmLL3RnwV1hwYzj3EW5D3Mr5NQ5uGk9",
  "key24": "k1n2FqP8puYjamJ1WSFQV21BJeWtNRUSVQzJZJtVLqdzQD51yJv6aeqZvDEa8RWSgZDddzD1kscMGaLMYc49FwL",
  "key25": "4FkukwijJcZkaRoCvqAJ6ceaX642faqYdZqbL8RZJRRRz37pEftSDQhLDW2mvt8tD9CkNGtPyKLYKVZDmr1ZuvsK",
  "key26": "21jtmYbAM9tcFtQA6A4GBK4rqijxdGtie9w1FGLiEqD6MFxeR7tN1psjENQ3YhRZAqeaPrc1b3XKepewmzR4FDTg",
  "key27": "63EpQ1UyqJZdLncwvZKFLtmVVRPqX2ri9WiujYdFrFeZoHn6SERWZpNqx1f7AsuJTjUM8QrAPgY79R81FT1H3g91",
  "key28": "5SmSkfwQK7Whxv1V17q9V1ANPN5AbLr1eCF8wzTFTuS3Vv6xGFnYgryhuQ9ba6vDFiz8i4dyTU4wWKhjt9NLpkQT",
  "key29": "vcChnv7FXg9g91a6Z51ovYKor8FeVaeyDMmc3S4miifUwKKL4se6rCTxtGwj3quWurFF92XG3DCffQQmMxfhgtq",
  "key30": "4cPj8jFLpcFaKSGZfgAzhnVfNCdFBzhnKHERMxqVnFyF1yQcSBNs9428Lh5zNq9XS1o5JotokcBxLpXrJAwpRsFa",
  "key31": "5FryZqMBXqpWfPTAXg92mpqK5WbSCgyfmmRPAWJPtys9XmDyLFffg3oXs25U8yufGibb6BVhuUCscSNnxdqDVpCE",
  "key32": "2kFfgtAbsTFsnZ5Ve4sn6qyUGsrXa7EuUQKN9qgmW97V8ANxByan3w5Np8FoeZ4RrJLnDGnUGguKDBWVn7eMQEFM",
  "key33": "2SXi5Wwfe8nn6MidxFj7Ka6PqiyJDTmSvHV6kWou2kCmTfMyKL6qc1utf76My82ERXGNG19uCzNYhwexTDadVZY2",
  "key34": "2boxyVVTDNN8ehwBPKhbRRiM7y6tP7FQJFXhf8cbPFHssRrivzHyZntAZZa9RmsxJz9mVyJG9cP3E1WfyuPzgxhf",
  "key35": "2aAiKdj8q5oT1rmtqVBGJqKyzDRhwkpwQ9GBCyUEaosUa8WXKVnyaSossv1xxUEYhADEMeu2L6DcKEHD58b2pRem"
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
