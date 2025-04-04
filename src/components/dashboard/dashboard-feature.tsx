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
    "3zAEJC8EvYjn9hVDvP2Fk2ksGDpSb5LcGiVC2FWTyFLgTw7r8ymP5e3JSRTVzR2ydgwHvu2f5iJBzE8ghccq229Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sk6CxDDTkGhWhU5n3CfqopoSkwaYUeD9endtEjecGEDQb2vf1AGTy27iBkBEgaotk9qoG2chFU8XXEu8xjnoGWQ",
  "key1": "5ocFYopL5iXGVKUedz2viGZGZ23gXXPoTZX7ru6KJQ9RdiFk2aGVDa3qHxm8aBcD7Q6H2X9SbvuACr8yFN1W4tVg",
  "key2": "3DE8ZbfDUHnpdSrUYe2hteuCTKwFUfbvJDTGijjLyQjsxdKfEAHnZFykmuJBs7n27hJQrJGV642M4CtJvQS3LMsq",
  "key3": "5Wi32ypK7dXhRnxFRhfKe7L6D1ku3Y5EVe1a8bJ4p5mtx7s31Hw5zwLnk9jFHJx8ZvkQKSbxpZBD3XHqfjrJR57H",
  "key4": "3R6XwqGjhBZinvRFyhyaQW1eRbGAXw4mafRV96nXBsUpVnVmhrzD5eXAvWQLEkYTPmFbRsot7rwxyamepUGGRgNG",
  "key5": "528xQHrToQhjqSkYQnir2rWSwXjNRZbV5SC2qGKdgh1mV75b5HpxxnfopLC6whgbBCBHnNDiZLiDhTu4yaqpc56H",
  "key6": "5pEVN4Dsu2PHJPz58iuujiWR4QNoorZt7YXWSWVmsZQbnAb6x3QXBSdKCNUPczwpuhFgjy8BUHjKc14tvm1HshcS",
  "key7": "8LSxoMSKkGiqeiPGinJMJJ3qQawTUpdc8kwWoMcBiE4b8SSW8jqca9yeHQ3aog1AtwDtzmALQPR1zRwfWuPPWMX",
  "key8": "5s68u15x9LeXTf7oaJ6RCuzUhuDKy4yLwxEpmG3Afn9pATLkE5tTfjdD2RPUN7wVXDnY6Nt6FMirYffRxeGF66qa",
  "key9": "5UJ6Z98jAHK8taw4ACadVpZt5Nz1LEgeu4a4MGW3H5jpnbHoV1ZfQHepcqHLQKewMY9wiT6EXAG2APYePpwecMTc",
  "key10": "4PdEy6mejCHUVULtEgDvKJcSroEsDq99NmSZE39ApbfeNrYX9tHB3UNTPD6H9XKtRkdmpZK8V9DAGynhyXRAWS9F",
  "key11": "3ZD333WxMF7VXbqEK7pLx2pAu9j1nmNdrwBKxEm37Ye49XEGaBNzy6LGeVF12T9HXYSHnec4QxTDUMDFw63VMYMn",
  "key12": "36u3LA1zF1wU1gMEFKxwP2cfD3u9HYdwB5DYr584WHr4UBzBpdw1hZCzqdWE5VBMJhUx1GzdvRATw4C4BNVrCruK",
  "key13": "43qMCkey7iscXP9L1JdbCJaHDscCzddsG1FnMsEBnLexKU94QgvKHR5E7g2Ts8rUetcWC9zjtB99X7ZjFwaAao1P",
  "key14": "gSkFdzs6S645qAYQmKdXbPBc7Ltpe9S47y6tvkiuvuWgwosq1zmZ1RUYJ1QPPFhiQdWnNenJACjgp2kGH7TZ8Wg",
  "key15": "2vCNGzH8S4C46heKxxA1yLMfKDGm2r9zFr41YHJ7BuVc4iRWjtCjKfgwJtXCVCFj5xp5mFoU1cJoKdX9WmgbRCSR",
  "key16": "612JjEboYSgoCXS9PfZY5Np6BfmRb1oVTPznfPYpKY5sNqMbnBeCcAvGPCjzhtr9ymqJadJC9nrNagE75kgWRN1M",
  "key17": "4rAJFPRoTDUEiMpirzkPrHsMWnFwrQhdwMdc2xFkqwH1tYHN4XzmuNQpMpNtTmC3nGTPL6nqQmfr82MP2SVBSgnx",
  "key18": "iCXebNtwFDP6CVZMThr7CZMQxfrLcbWecPyzSjWjq7K599Q2fLcBV8dF1D5mhm6vrauCjnb1P9RB9sRsC9MhBox",
  "key19": "annaRG5ejxVJhnebR8z69PmUeDR612VhSNkdkKM9BEyLm61jpECxB9XSkUpE84zWBfQPRzCdt3ZCp4eGX4b4zYc",
  "key20": "5kBP2u1YT5qGuZ2vNUj7hi37H42vm6owzDvTfoQ7ioGVHLghxLNZpJQn7EAychcmVVWf9fTpSgm6fdoNb2sMCQZ",
  "key21": "5v2zCZVpkQiNknRWdWc5j5pTthuUpTd4boNPeU3BjZWYQgsFz778aBK9wrnrnBZHfbqwVq2CpstPfwHoBDrsANuH",
  "key22": "5gD1QD6BSSWfbaorRTAft4J3nydQr9hVEFn9VtzxGRw3n5hPzSv2xJwmCLMSYXPUhz7D1xt9JP4b93Uh6pMQAJKd",
  "key23": "2PHbq4GxZw7YSxzTrgZJR6W6NjQkpsrXjNCvvrKoui1TfLfj8MbbEyd4mb4qt1U6FW8EyP7oskMX3a9cTesaHS61",
  "key24": "2NtEPDgsmPyjp5dGeL5Ho2rVeveYDV43b57rqaqy13a78FY3goBE7KxLf4FPeWtV68moksTpvwmHuLvdnPxncDco",
  "key25": "5oUBqTsd1xEz5aG6ANfhL6mBfVVkVWuDPuzzfKpkg1WeHzdPbEgMfKn2b1JNib6PKh39WWBDQm9P2y6SoiFLrKqd",
  "key26": "5g1HzbFUMu3xwyFo5YcLHruKfCymSQQ1EmkBN8VWjw4adyHRsbV3XrYts4i2CS4HjXWUerCusvwsBKpM1AmjSCdX",
  "key27": "m2paTRjkTv3bgu6G6HDdq6Xbv7CeKFwCpAmvzJ1CdjR8mP9TvYsJG44XbwsBuZq7wyojrYJe237YCoXkYoDEyS3",
  "key28": "5UA65wibjjAv9k4zb6DYdgUTVr3nyDwUyyXno7RAvgPF5axmfLZRYPcwVozDPHCTMiVR9xmmiTmTvtLas6EYKDVx",
  "key29": "5dDcuNmKr4ZUGJLznN6NdiECKacuKMRYhc7rUHp8uzYy7bffp3o4W32Ls5pWYUoKcvn7Fa1S7o45ab6MCrHeNmeH",
  "key30": "uFoxSpgSNQnu3hbrBfJwHQkXn3r3LH7o6aR3D28pEAvdY5sEPzx3NsuYmg8r385GdbYwZ8KPVVgpoXDYAHT3D6M",
  "key31": "2ZtLXwkuzZXJQ7YtVLAgEtuCPuAPUpKYccZ3NzmADY1gdwqtZannMAXqqTDTK6YAbzUCRbyyuWMwXXFqAF44eNEh",
  "key32": "3X9gkeUX3LJMs2QvooQz7uedegwSvFVBk8P5w783vx2E7YWW6DbuSrKWJB3MmyBNvtAaAHSp7tsZ3zBAXpm21QUa",
  "key33": "5iBr773T82pTENfcc8iRWNrjsTkHeoZ4fsK2JHVymYzVRHcz7jSLNmNcA4ezF9cUJDs7AgKw9ARdj71JfCkGhCcW",
  "key34": "3gctD3T6Cf9E86aSuHcZxWyN49t7XFyyLgfjnbQWfWmVAvs75pYAqn6ZjTGf9UZunygYiFK3oXMbD8qdEWAqmvkq",
  "key35": "2JDPhkkvZYzNTZe5TVruPdwSUubeT95HQ8gNUdv9DktoEirNjzP4CUvjdc9Lxf3gv4ofVnMezFooTRZygFEZ3iLs"
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
