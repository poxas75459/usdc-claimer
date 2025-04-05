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
    "2GfosGkQSMYYuVsDptVq8QzoXfkFeXGzpdWTAnooZyRWuNVttsVVXcVFcPwmyazmGuvik29AG94aSvi9m2qjYG58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38cmjxrwsp5bS6kQj3MgFSqqRBjU7t65M4NsHB6hioSPQw18Snqg5vuoGVQEd3q9MvwuCLmtf1wyuCqHc4WJJ6N3",
  "key1": "8bLzq1xzmDRe2niWWCrS7U8Hs2CjvCTzHBzJEBNL9J23VHU7jQE5tHsmz47jAaijt2tZLs3kwrGKvcQ1FePpQXN",
  "key2": "2VGwgHbiHcEqxKocxux6yUjmgCHPUUX4kRCGX5tyX9n4BM6fXMXtdMJRxmUbK7WfG97NiPnntuvBTdzhxJNLJd9j",
  "key3": "51eu1yYDsCxMzGz99FmdiPpdZkLnppr68e3TRjP4wpjaECMd1fLQdxYNLdH6u4W4LGBPjbzjxJSs4x5fyRLGUwgt",
  "key4": "4noxpzxFdaG95EE1F1S7qj1DUMwu9vT4asYSLL9ajRWZ8st6V4ZkbmQUpbx9pKAQmaCssn5kPz2D4bzQrCZ1kUsp",
  "key5": "jCJcdA6bafN4xjnyAYCMm1dssbcikqGrQLCE6HwDUkK8wQzc18PqggFf2k9dEiS5tPTxNMsy6KFrH2uKpb8nZds",
  "key6": "2vSaPhxVegEi9M1MxNkdGFepG4fpJCuCaFFEQ9oYZJV2VXwjoRBvgV1cNd7BtHDMukSpsbPfmUo1SKooqqJWzGg7",
  "key7": "67JzGpM6MZ5iMNiqUd2CthJ4pcypxaYwA8zijpBCyMvgLojqh1F9DXEXt7G9fgobsGCrCCMGq5NFUZobysaoewTf",
  "key8": "4wgP6UgmdNmtniBtbL8EHtUFn8jVPAFJUm8Pctz8Un7PBza85W59x5vnauH1LGEcfHpmktBdHTxBD6wmFPxc2Fqq",
  "key9": "5gDYA6jmtmMkthiDBUKa3MyzVCvCH1Gg77TayYe7TRAGJGkb6LCfK4sqESqG8uSV6xKVU419xz4Ap8wBiBwxS1eF",
  "key10": "3uNeUy7eiSfH7mxsFZgkggtHhtaciRe4PfCQwd5hhUw33TswvVEarDeAbJYoeFmGGktbZSkt6yHbRcLFwhdem4PC",
  "key11": "5qGTxBHSWSXm5c5WUAbTJyrBry5zdLoa6AdZZLTbaLK6J4tN5BcEbqPspMF2hswjHBtJVbHhDYJtP5twHE5rMLoQ",
  "key12": "5ddTCJmdBBckmo9sHKvwzUqnm4u3tcx9KAbCWNveU7CxHyU6ZNdNkG6xg4h2Um9GndeJDLx83CsyELBTF23NtjD9",
  "key13": "5qjUX1e7XeTaDdfCMXe6GcWvMXujQidKs2URHKs5afixKCYEmjXLK52aBoFgRhLiC5quDzNB6dMyUWTs7yz2WfnN",
  "key14": "vAEzP84XfKLJZNcmhJuYWHTjfBqX4KwvBRc7MJxM9o77HovfE851NZnmYakqF7FLeVoLYYZpYejggmectkhB67Z",
  "key15": "5gWrvRqj3ExVtxtoBYv9M9h8RZhx6oNHhe9FcL3m3BtmmFjfor6nYo5Z6Ys6s5PWruW6zZTAySg4f2DzzdmamztQ",
  "key16": "4sy15neJPysqatk7w3w7qwWqFq4aMYR6uGFppbuBZ8g1M3WKKnZiacTaYVMxzu5DXNR2P6NwXMYoQ2Lp78f1pvqA",
  "key17": "mfre5UzaVkX42UToLPX2FFr5zUGr4qdHJVZfZTGdeiVhfmbvfvm9a1PKUa9ZELp5cKSwBuMknqnFPcpM9tiMW6U",
  "key18": "2nFPLkHjxajFmH9viLjw89wbsfUGNRnFTgFJZTXm4qMkTnD2SoPLthtQnpp351a2fCVw26xeXUtPBbZgxKP4dmbD",
  "key19": "2Nj2w7yjE4bvWKXdSg7J8VkwNZyN81ynT8fvBaibTAcChhmggcmfzECUw3qTDuP43ixZU7kZEMZCrkizsuiiiaEL",
  "key20": "2JikPnj5M9AmGtzwDQ9CyiPU1ceAspnJQvwhXW5Cr2i3XsxBotzQZ5DfPd3T1bCwUPfv3bsVcAzEAqWrttrTjnzy",
  "key21": "uwJY8y5VfiLZFdids1FFeeK5zuK3Y7Xa8sNQXUFNgCy9Fni8itGwc5PGF9QMqK3Y3fbBXAdGAPBBiWTvMfEQ5eS",
  "key22": "2uPrw4QMgdcjLsT5KqaUDNGciKFpcR1GHoXimFGyZbxct9bS94cVF2M77CRpPNF6HY3RhMHuYKu7k7bdXQAuqoXT",
  "key23": "2iAeVkBCTkcV7Go9ECT9HLBny8kEmJL4KrwbsdGVbke2JTNfXbmvfyvX7YQQZzBohQKm3dtHzDXxWCPCHqdm4aY2",
  "key24": "4UDALVEk9kTWQivXesHuaD9KCWrbWRewFeqxDwnrzM45SxasNaWx6KH2ovbpAbyZXrmVvNde3W2BPRWMWUWNYXXZ",
  "key25": "3DDJQpSytQHCmmhPHmTWfFjtD6Jwftc6tAQ8ggXE57hEnKUZyzNvznuV82G4nqSQcuEYfqxNCFN5KtNR7uMMSMTg",
  "key26": "5x9FePXXsAti3odwufxinxt7LxNqPqxBwKBrnh8Z8wrLy3XFq3ragXzLiExjX6AUEtkbBc3oCWdRGZMp73w5xeWx",
  "key27": "3v3FX8JkAj9PfwNs4gHTPcyrQcE1J5LhTzUUhpWXCMWtLKUyVtURfDMeieP3c69eK2wohNfu6D3br3fznX9pfh1B",
  "key28": "5FMM18wjLws4mJ4o3FfL1mq2om3em4D6n4rQ6Wtme8MfTivNZb2DtcwenAuzPi7fpFUQqqvJC5GjdbC6pUwPfZcF",
  "key29": "53AqJiDuHiFZtMoJbTNwY7bajiZrYcZa3xMGwWep4gsYmh562DXXPvFebrF9Sn1AcKp21aZ5PCvQkjDBUCpyqej3",
  "key30": "28ULCeKiwDT8VLddLiTGtVk3m6Troej3qQEgzvSMEeRvkwmbUqjMVc3ukAFnz5qQeYNeepskZzA8CUfYCQ9jBMQm",
  "key31": "4mppcFPQUhdgasNXq5nsZrKjb5wW1ibSizBSiLrhuUWjGrvTHtGmHNUGXPvWxwX77LHEXCQHHMeB2rG5i7Buf233",
  "key32": "2wYUAjXbaNyMRXP1tE9h2h5LXKGCNrifzTYZAENhkyH83wquuJ9uxf14ET2GcE6cMVceKCgxtvEJauzEVzmHFL8f",
  "key33": "5crZs8fJ9qaorouCoYC5pGBihsXVJHubHx4Nd6YHUZ9JsarNnaKu4AqF2xK1F8JcLx8wyc7tT2TGeRQttM1jDnLY",
  "key34": "3nUHwizajFtz7GcmAXASPTXo2cdEg1wigE54w8bKUKw6UUcnrdb8ZVKq5LdcV9vzsvgk3B3GE4Nw7tAvUmxDotUY",
  "key35": "3qf8R7oy5yF6jEMZR9z59KvgyTrciwLZWX5JxiwFwwZMs4eVYB2VrggKQty84WmgUAbQiSZYni8VRimbwn63y5U3",
  "key36": "3M69JHcSqt34yiYQmZYuE6AipecoDeZTz6XUC2hVcomUG9g6XkhFpKu8QqjpUUBQmgKnLa5i2ofKmoks3cKxao2s",
  "key37": "yAnBAgP43hMU3T5nrq3Ut7vZV5a995fZ2DaEG5QhUMDTUTr7D1pmeAR3zt79Aoxu1XYsSYvTeUQCPUj7HfpqqRp",
  "key38": "542C3wrA142Gvau9qpzhYboMaY4EptnYnxxFtjTmFeQSTRZkAsXK5ujxJ7uzjKNaDbUKEzLEnWyfZL5uPyGA1haH",
  "key39": "4qKhDicqSUdoU1wHzgKHsCnJ5nPF7fBiTdtU7PaaH1aTifQU5kWCYxbmpme16f9V4xJBHDEMjoVGGmjemJqLM3aN",
  "key40": "5LgsqJwiRhdgY8KLF6k5HvHpU38cYBVDUaUKvtD7bXj4zAxYH1zBi3mgGWuFXJArSi8VKWStGZRaxKuNCCLQoSzN",
  "key41": "49VreFhcUy51tvNQMUnAYMtCPadJhwGS3DjrJEmUZCW2V6qgFQKkcAqRkeuiBH5khQT7iiAzu99642iyAtvB2THA"
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
