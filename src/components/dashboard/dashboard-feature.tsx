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
    "Fr2pdGsgXNZfQFH3hvnceFX6m5hasSfs5uekhWujdZDY3q98prWzuioibv2AXRYJNsKDLqwi7QYZxjXJqJycsUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v17QJgMPTjB7twWtVsfJxkCK6ART8X1brZN9e64RpwvzMyHxr6CuV8ooQ22uu6oRAefJHq2FssAevJ84RGugxxQ",
  "key1": "egthp8zLUyTs2gAdyyrgfomeTLVZGygytjNPFb99Qc5vPDMcD83WoZYAk1QkvST46uUeRpBD2o5tq2oFSjZBaqL",
  "key2": "YuKpx96wgHWLJdFFX2fG6rFS6GFSSmTgQnKkN5VaVgAcbbSSuobTpBu7DqTxrZkyDqvaovYPhPGNc2HpJiqSpR8",
  "key3": "2WjztZDmHxzbCgprXf4F85ScVpPZn7TqTjqVnQDLWcp1fBTAVdFfnUjsSw4Y3UJTfayubdYyFta6k2Hi8HQRR4S3",
  "key4": "3ZjgReMX78JshDbEkrqrzBFyFG6HBTsVbhZDEEuoHYpbZsJ7pSmKiUe4kJYoNQHNipKbm9thxZ2zV45RRcrWbTMa",
  "key5": "5oyK6HRYUvHxCgNcTFjQa54Wqugxrwfyex5V2kMg7faZGLFmvxsKnDq1cF7CN8ynK1txZZjRZZnEBESRNJSrdDgi",
  "key6": "3nHSqNprZeLrxmZfbBa1NmN81YZhm8B6u7STB3DvkKYwhvt2gnf7NtP3esp9jEKpcZYPSVJBvFm3XoC2EGJxSVh2",
  "key7": "4fm9ED88b2HY9eGZvWV5CgxtDNaDup1VMozV74Ky44j8N8Y2ucKBb6LhYvzELUKqnr1gFVk2wAcSmReu4i951h2E",
  "key8": "3ekEmb2G2hFKeBU85ZZiPFXCxp2CwpGDnhrxniTaCYRzoRQ2eke8fTj3qj1Q6V5ZTTwTH5XXKhUsJW4PxYRF6wKb",
  "key9": "4wNJsmnWUV9LQ2wt3AvMvXLGKkcmkjDMz3rFdJvuE4a39kCdugaUKGCFpbggWcY5oFtj5YuBpxc9A5rNXnQ23a3Q",
  "key10": "sf6KLHyvnb8ePtE4u6tkKvBzmtmyGG2eTZtQ7e5iJ38saM1fpgu5DrRueHbdj5Mq1uiFuiS9hX44cH5gR2TvtND",
  "key11": "24Lsz4eG1E28sTcXKzctqMLwqqW7SJW4LKaZGo3msR4AmmgWr2RKZ7vQcRoZnWYfC9hoZZengPz76KFJvWuLKwuh",
  "key12": "4vUJcQSyqJUjiVRtkQhX61uFs5dXtzuZaBcPH5zLkMAKCZoXpnn2UK1VSJ3QTtfQqfjjU67suyiQN5EAczUutZF7",
  "key13": "5Xkmjw9BEerFbdcKjiDnfCSJQtvcE7vNF2mZAZr77SGq61YMRVQZMQBgjbUgNbtou7o3qYUX5VjQ4QNUDkkhzMrL",
  "key14": "5NG5kfYtA2aqJpW6vXz8b6K3A1gJPutJSrxuf6U3zL1FFkEX96RYaKQEKQbn43oGQRzjBfR3Sn8akagwiEpXpjbL",
  "key15": "c8PECo4pTDUF8j2Q6AHk1rTwEBWmPTpsbhztX21YTucmdJxNiPJnDGvpiVPdBuJj5aYUpBECFbfT22jtxiowuGj",
  "key16": "63JZQpNMzmx6LoMnmDnFYN8rqdMYiD7Tow9xPSixg34eyjqjCmZhHHkjt6JV7FfnK2CU9h1S8Rqg97a7gG4vMhf9",
  "key17": "2UdmcfmLphqDDqCGPrSct6Zu4HhPi1ubevLyYzARgAs8XKtcqQfz3xVUAfwZddZjZ7G4gnqUDeBAGuHKV7cT7135",
  "key18": "4z7ADtUMBRqYKnt5m5v3ssN97dz5H8kuUsAyNDvEXwhhNcEd2xoQNJmYer632pKDvXW2y9kjc9pA6jCMLrNYty33",
  "key19": "34XxGkcwDNMBXEkXViu7EbWdnnPwDXNu1GZaGd4QtTLpV355CnBqq1vQfKRhbTiZZDpgghnPMxsrWA4NJa2pyV5y",
  "key20": "3WUbsf3s5e7NKi2nuLavaShicgfXCmy1b3PYuDy1qb2DZ3HVcjL7js3HHm9YTJFN5rhK2CJhKGPbaRWnUvvCe469",
  "key21": "3t4JcWGt5SJTK58AWAyvfhpe2DRBRHLB8c62yqTUNztamrcHGWGNRZE512cW32sNwuV4yTxtU29btuNUskcSBR5p",
  "key22": "5mWfUFvUWs3at4SyxPQ94vxynipq3cVLsYCrfnG2u2jSyZ2PNVu7B45SngtYZwum63Kc11yg5yvk3HPgvDUJ2ct3",
  "key23": "5P9zJKgLCgiMjf4eAiMruXNoFdmqowVphMHH3DcVziy6emsaNaKkLHMMzCi4qEVxsmqgtnCvnUc87i1MFT7CwbdY",
  "key24": "5kCJbErTyzYwGLwXBKpASt14hrUob9moyNmyQKUNzN5xWuiNqwerjrJ6JV9U8YHQBHoUzq4yXJ46VTtqYWGFeZjg",
  "key25": "3UNRWH1PYNN1nNpt9FmEnk7CLaktGohoN2oYy4EE8hoFc2pugxmYQug4e7s87pu8jcvKXjkNs6fUfn3Mvszo9oo2",
  "key26": "3kzcPxKSRjkCdquw2MCnr25XCkiVAZ1VxayAueddPF4pgNsrYzpJ6tBnrfKv4yb5ZaAdTwrvkuqSB7k8xcmttdX1",
  "key27": "q8cGMt7FsLd25LxaQVJ9aFvqSa3FmRnt7KXXE5BwZmQhYrvi7Vs1XGNtotkE1zagcFuAwn5bGvX3jwPx7szv91F",
  "key28": "4AP1JdwL1fagThVe8TeiLnqyJ8pW42xTWLyyfqt272FFzYWVDwsTAuQVpDiYVJZEHtT5qsS2iP2ze3Zy7ioTaQC2",
  "key29": "5Dr54L3jvs4j9q7nR8c1ANL739nwKP9EGck7TgHBcFremJ2FDJNhnJ5u8oQLBK14itmWXsFEMRYzygGLTTeF9bzc",
  "key30": "2o6iN1UjCBhrK5py9FY8UAjwM3q898GpfBsoMaq3CXMm9rsxog6qQo8v7owW6Lin7yYwX3PqEyenXHfUxiGQtVJM",
  "key31": "2Yhk9sieZe9pnSGZ6atc7ZA9i8CCpio2vb563JrmU5KT2UipNDyFtjxwnDKtyGjvbgGes5TNdcKopi1U1W6y33TU",
  "key32": "5Z2QRhsuYmUTwQgCg2cg3xZvpv9cyQkLJLgPk5JMQWxXh3w5MsRhWvXL26exvrVPcmrjHQ6NR4goAJJrrmCW2rEk",
  "key33": "3jfqtemu58UKggpktk7JZNoiNftucgGYg5AwAZN7ZUCUNoSAYoPnUcXyVciunJvAGiYkkjgNQVNkxAogv99urPpm",
  "key34": "2epwZWC2JhyTrX7ynrxaAs6sNdTUt7eDAKKXJyngNXFeCjycZu73C2EYaX9jxxzVSJFqN4asEQ7rFdC3zHJmbA7F",
  "key35": "3kMmSTDurFWV2aa2h25UWW9L5og1phgYJpuLTMvaCzEn7jLcZ6xUVw3ETyL3aK24TszmBrfBF5wGakSDKEU4Mbyu"
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
