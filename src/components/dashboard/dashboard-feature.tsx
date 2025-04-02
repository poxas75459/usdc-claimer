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
    "4hv83MxriKxLQ2nNsVPRpQorwFVmFmpCFENchiWo7TGFErJY5Ap4WokK7CLmepnnWUxRghX44HeUepfgRkt8AdsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBYNMU6TXktih2JdyiRf7ZKYd9LtVSVyizSZ2gMJeJ8zo9DySJp6peVeusUEWyfBjiCohVCuSbmptjnEfe8vbpo",
  "key1": "51KhioYwxkXGW2CCkLr5Tdf1773rUBn6yvQM2D5ChVfeJmybZFSJB7hhQ3yyNsnwdqyV2rRQ63PPjanxhtnLdySK",
  "key2": "4A3gGKEezQiYqPKfmjA26RGae8pFQMge9DXMSQBpeTzjJqt7qpL3XHP8FuDuwSrgJ3a4JFg8MXDmMiXnZ38jkWTn",
  "key3": "4YcG6rgg1rXnhwPRjvSEEkzFK5T1e97A8k8z8HCVmemL4F3FJvgZGhqYrXyWzVDUWHWSyhHiiE8F7cMjw356fjin",
  "key4": "3hQ1BXaN8PaBn6PecUyyxNGDXMNQ7HzAhGUpm1bn1RP49GFzBv6hEowK77Fp1HC6YbXjMwcjBdc5f4XaWryuWZ8v",
  "key5": "4ersnZX6TUgLkMA5gP7bntx6zDa5tDVzwsGJfTuysMSUxGUQyd3J6CLDz9SdT7cfakzRei69QghCdEKzpREyeMC4",
  "key6": "4rYbimMtZWZbwB7mqSEh2MKthcFK448siFCxfkt3octrAhn3p7ADGw1GSeJPA1o1YfuHswPEJEJJzhmaTS82cvDd",
  "key7": "JMBHPRPmEUaTGUsWuaCkx1zuQeP73Gai7hM4JPyhquKLoVA3uxL8s4NWf8AMtAPFVkXhT8ubK3Vn5tqH7MaDaAp",
  "key8": "5NZP9KcXw1Mh6nzJH6GxfKnHVeUkstAg9ZUtxaJkzaxP6ohAHdi4m4bAQULACVy12cbYXvC5SGaZdVV28gh8KAbv",
  "key9": "3HwjnSxEGKeCcXBCMBht7Ao1N5bkLxzgs8aGRsRFD3jUXorL8mjag5GMvVsYvmVqrjrDJ2wuMEq3n5ves24ujVQ6",
  "key10": "2fkgFM2NAqRgRunFgV3MoSprCsjYGKib43tsrysz4qmRaYiQx4sxbMjvCvd6ihpoPJtHW7k1zDMdem3qJrCnFrCD",
  "key11": "56Bf3LnGNb22d5LvAkdtnneRx892WEPqWG7sqmJyLxVUEDRN65ArAJEBomXdRkg7XcT8ZQLetC59PoxftZupCUvQ",
  "key12": "3sGoxyCidWx1PQregekintqv2NfgoAebkgnUQP1ENc62wcDuAAbENswz61dsxWUKZZp2CdYETzeGrQ89kDMbrGEQ",
  "key13": "89EeA8WAqADptf9VLU6e5jDXYUkGe1QSGz23X5QbFmzRxbdYdY4r8ZZt3H716oxqubrDB7AApYzJq58ncFw4y6u",
  "key14": "JjAyPyk3ZUhpMMwVT3yBZo6RiiKH53R35eDN88jcmhSo4aBnDsUApwKHspcS4KZ7jdAp6fRKu5J6GGefn1pXTKT",
  "key15": "4QYUA9GN3nbxLoBciGu1WjQ1nyxMLMRGaZ83DDNKXfG7S9hsJU5n2rjZMSyEEeAAoidk1i82NkyH2EPy5vxrvjgM",
  "key16": "3pKBUFGQz5oZTDoocGEJyYnq3iLirniTFPMQVo18rkSnYoLPrJXdKbLgPyDwiZG2e6ijdQaF68gj36LxxUvwi1kP",
  "key17": "45tRssUyZ773fAtnuZQ6ik5h39FFiJa3iD6YPEHLMTDdD42vur8BQGGdaSj3MG6AXxSukxQa5SeSjzHj3dCGv6FR",
  "key18": "39FFyTfnPEwArexjVo6VQvqXQ2GppKPFSgX8mwyc2bno6yBGhSaQFi5xVq3q77a64BjSCJvKdiTPfHNJgaGaURko",
  "key19": "3QeiaFegvSXeUCd9cp2z1HzKLM9YUzBfM3dTtxeyU7zzAB7bo2WfK61V41kJjWWVNeHKupa9M8WBq4eShY9HpJ5J",
  "key20": "2WxVEXjYPCszu4sGimSUhr3qY94MnrVhSpjwFBZ4otdMbX3bU8MWTvR1jov1LyenyTH83X7DyjY54icr5gF5T5t6",
  "key21": "5w9398uASXhPWPBFvxA2hM5kQYA9qEhxRZ1asvUtXqGYEEdUmSPRqn9fdPdQq7bUEjSYhyyqj3QWKc988MQ4zDXG",
  "key22": "2xnVGrtDgzGqDjD58zKhaFjnrko51oNFs7RaWAMvAZbbqwrkrcJQezZPoxwzYy4MvpEGZhGdSWE1JgUekY4rHqGs",
  "key23": "Tsbhdu392ohx2y8J87w7e5SDRvq77cDZhRxKBdansnf69Tx2P3KPP3UB9gx7XvsGSg8Mv8zYrJqDKs27Znbkvam",
  "key24": "4uRRRD6jkpAT5uQW9jfShj79HBMPQmnj3qrjtTAtLJaKrg7nb3L9Ww84vi1zsKqvS3GWuDfc4ZBxEnvVNqMFLepF",
  "key25": "3Kyoesh7PFYrrZztThJeWeKZwk5GHzvL4qU9P2xLfPqtyPPy6rzuQ4Jo6LHm1YQvqC68PnAQJksCjoGGj71miAF4",
  "key26": "3vqkqKaMjiCeLa3YCwGC1CRZx64ULDwgjcxVggnE45MU2mo1QoraCjuMFZhW4CdpcgKSiHK3BwMANccJVuCVC8Ni",
  "key27": "27CUNWfAu9VrvwqSLnnXNYFdUtZqBsui119SQNkRrqpqL78ccmruHqqYyGXXjbwYN86AmZLKo4NYzWRPmkTycUA9",
  "key28": "5SZthrQP2xc5D1ZTgoduTtk3DqErAqxTiHkBKjB1EgchdNBbscdxo556rrFgUsydA7BNFBfWQCVkT8jegQ8zcfr5",
  "key29": "28WXSKmF5o4kEJyJp7Noe4EdPWsXEfDX3sFTTsye29RDtZA8GHqbGAkwVqKraqNpETWdhTWK2su3ytZhnbGK8QmK",
  "key30": "4aerm17rRSCNSS2L21HR436xtxAwNKMb2CJeTvCVefA3NXCmpoDWhAyoB5iSvTfPCTm87KPpwS4oGWj4PqFq41qa",
  "key31": "4WLfiEdT7qzURRE7piXKwL9XSDNEHdiHCftVcVmwVTMTRgWv3rVypY4qHnfmFEu8dDwQR9PW2ngw6kkBDdYuPsbx",
  "key32": "WfHkpN5KuAEtoAykVVJWuGJkJT4xwMpkZGHRNBjJiMCR7EF5GckzRztvVaXjuNgKoNi8Hz4XkhSQqi6cbzqZd5L",
  "key33": "3kenr9eL7nEnjEDegqGbsG4WjnHTxKd44f41T3z4wbLueVaraJKF26gkZ2iw2iVoCRSzohd2PUhvd62NZadzskxX",
  "key34": "45U887HCJ3tsVSnVTY749nyQUjhVCNJLP2ehgrzVcKy2kAs3mTKGbEri1gmgF6BpJAwoLgDwnGgvk7GFPYsYdWsm",
  "key35": "4Qexq49PRqnrZ6v7r5qrXeVeiFerbZTXGUxGGCUG1YZafLcbUKy71SK6TJTihCPMk4U4us6icLwcFznahaLkuzy2",
  "key36": "4pf7FooFvgpkF4LEViNvVUpRnWe8jkHWuykTp2RpiLSAqEaQtLzLCYPRNXaqFBBiVPjUEyt61HmTKbFYyr7wSPMD",
  "key37": "3dx4wVjaaBxULewpwzjB7VEdoWofzwNb2hkM76Mj7h9NaweLqWsayFwwmZ2iDRPfRPrRsq8H4zG8w8Sf35qqbbJ5",
  "key38": "56j29QfhzY8JGzg9ysUv61Bey8nvc6DL2YDyqVRn1wMKXcwoojLbB2QxvyUUzMz7ELgRiHCzb2NpmoEehfoJ3pDU",
  "key39": "5yuiJJyg8mo1tYASEJRNjjgKqVQx8YyG9tBYs78VkTqsDAczJzpR5kBHUN2YHEWTiao8z8vZvb2cBuKeroSAe6A6",
  "key40": "3r4GYieLJMsh44N9F6ZRyY9WFYktde7bT1NMmD11hSMRgY43nAom61e6Rhvbq81UNoUhGPq9dgQPbFPDQLE6tLaM",
  "key41": "2N7uFy8rSRrvKwsavMaDfCVGGDPx9ayjNQfatDM8rdomxbKTKpB8j7BWZ2JLLv5oTzzc3tiDisDX2cFMGvRXyiTj",
  "key42": "4RH623XQoBGzyDmiQwWFWyQQMGbwtXoHStkgpvZ7q4YRRK55RQH9pBBkJkujYiLHLQ1imBFgr3Ghf8sdhYXCV7Xs",
  "key43": "4VHgY2tHXbioir6yq47iVmqwfgLxNrcar5XBhMpVViYMpZQTKrqgkWzyZRDvuZ7orUjs7oYApQq9RoAbvp6V6RJg",
  "key44": "5HBn8oAzqCbsqWD5R43rzEQBoqCJnKPYvuETbduniUqReNkTq2HQr6DCn1csLkP6NYBKiBGR5XPDCM74jCY4zC4e",
  "key45": "58RVsfmCZf1mEkWqUXgWQcZ3KDAV4BeKAEvG9EhJkp3g6C9KiZDpYhWVsPPCH4bTz6ZKH26TUxDRpscivrVZSUUQ",
  "key46": "3Wt54rzFaFkGJyT8eLHKNHgaMnvQVYsVkmNvVJZzf2U3VheWvVoBxxFQUq7nbL9QSv1JqN1KsrnWdDiU2GrEwdFe",
  "key47": "3nJsuYWYF9tAsNh4LRYcKftp7BM4jVai52AQ3deYXve6hy2aME9emKZiwH89rp8B9uWfh7MDyqyEsWq27DDdyLzC",
  "key48": "t2ru2fViHykSQgrhZWPNZ9ihHLvgNrsNetBXtHMUuamskq6ZpRvYnzrwK2boAcGngRG1Cyie4RcQqGY6uoT4SCv",
  "key49": "3qHm1TCZoo87YHq134s7tzdHodxFEArPVozyyMLP6qCjFPbhDSwW6siEvQpFXWBQKY4SHpDFSvCbZoFkDAcyeFeM"
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
