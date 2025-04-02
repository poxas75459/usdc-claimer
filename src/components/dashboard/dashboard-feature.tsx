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
    "2XWnkcpDST9HQmfHYycq3phpZ8gk99xr5Wn9HJZPs8mvot44sKPQhMs9KZ5DE46DTK5j3UkNLHW9EyWXXTLRDW54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZDmeHHQGuVCntLDCARZvHjrYvb8xdvdTVHavfTgY7n9STnrE76KPotDXbHKjbZqui9cy5XN2GLzHCDzPa818BX",
  "key1": "3KwrVirLuvDohJzuVvvdC5GMwmxxghUQpPQ33EL9dxw58dDiYGyFxZorpwtKmJN1uiRF8icQXsRXk4Hi5J1HazAk",
  "key2": "23UsxD92jt8J6237mk88vfxEu8qyGReMWhUqMazBBk7FVEmkg1yutrd4SmxRF38ZWG7yBmiRnQHWtgWRJYp83Wj5",
  "key3": "2vkaVB1ySHsmVnT2gATodaixdcKS8cNBBHqFRpu4REMo2g2pAPKK5GJMqhYKp9N4db661g88siunS17RhdJ9roWa",
  "key4": "2BrH9CvuAWfD2JaEwYExjEtCjfxvYFXRsL9wTJeAd8imVgymgCGrYvqw2VWd8H9g7HCCVvcJyVP8drsLuLKyxBg4",
  "key5": "EyfHiTdbuD2VG5iS9mbNDiHsbViq994KmK6rruK4zhFQsTDSCDXqdSscQHWmt8nPBLkqNykzkZHMQHJbo8dYXSg",
  "key6": "2KGW88RRSfDCMyXS3tJhe2pS6zp1LaDDbpo6Sv4vRgs4tVp6NhsQVQGiv54KdfxRkVDVwtci3EKd9GGYETtVSyN",
  "key7": "5T4QVdSw4dJPYzLEucG99EmWSDGtAbcbs454oiStdWyAQP2G73r6W8EeofNfiiteSZpyT3fz1fQgimC7SHmNNYh2",
  "key8": "3c2pX8aGMoqFMGtvqptSwM9NR2KKjK8FMzYUHwvcUfdAUaVYvLbKtgk3eDqyNAtM1Ybb19KnYTadgXNCpUdJzRfc",
  "key9": "616YhP1D76cFiaWjxZxcEb3uXecinSFJ22W7wA1JgXtRZWEsrodj4Yht81YnHoquTKnAsLnWBvEZCSfcXFDANhr5",
  "key10": "5ZLVFGaThqPntxPNrs8XWLZDYg4u77rt7nKaP1mLp5bCeiXrGK8Facw5T3iq5v7HUS42e7fLxy1rxmmCGEwhcdeS",
  "key11": "3vUnjzb4BDGCeuPVwuMuqpTJiGShcpLoYomzpb5ECsvQSBqwCEAC5em4jL1uG4LRodjT38RDQJFdaPQx2ejNnrxw",
  "key12": "KDZsfJiW9sccPPF33KQtyBAZmWq1V4YYoC8M4ywSawcZhukTJ1Vv3jYeEfgCT7NnBwjezphuk1MbDLk9xUUny35",
  "key13": "gTjpePozWW2NXPAEg2TiGcb4UXc371P1mwiQaxLsnepYsTjdSVL3dh5sTb9jbBXioKRdfFK6afUTBNP3jLjPPGf",
  "key14": "UuqyC9UhQWZr5sKgKpEjFSv6kHvGt3zV1rWkWbrkktSuAy8HtyS1CRK1JFLDPA3UEZ3YchFdnmvRqMhMZw7eiTh",
  "key15": "47cfikHSHYwXSWk5HsYtEqGK512eqCunfvon7Q7ALHSieyP4vmV43YTUzXzqqJgyBY4S8sQ6AwpFA2PhJ22Y6RyV",
  "key16": "3swzY8Rc6QuyuD1szp2MA78to1Pp1wFLPa3EyYNS5iuJV7uFye8PfWZcTMhU43wfwQUW5XQVR8s1s5U8KNwzVJkP",
  "key17": "4R5A7kYcDPbtgKKc6WyP39vjRChReKYg8tAhrdTcxZw2uQg8Q69HESsHV2PMvLJzyeRQYDFVNG9LTEHjgxkua6zb",
  "key18": "4Ux9hqWr4XAPEtiM9SYAV3psMqJXQGsRJQkJF3P7rdAiPFdR2WoaZita2odHVggxKJkWPrmqnLhGG9iXBxSz29dD",
  "key19": "4LiskiuLbZoVeVZZYAzfz5uiC89BU2KJmQz4Apg6RbVogbKQEmdshgKi1RTgztVyXNpqqZNko3SftHUq8MNL1TTP",
  "key20": "5rGgtFz6zix36hzChZW1qcLTFT85o3pttTGqbN8Rq7u9AkU9D5wJgtUBrydr7voEfKexAtLA7zvAaNYHyRwBo9Yt",
  "key21": "kpwFMVYNoSmcxqhWUkmL1TALKYGcigjM2hFroYrFrdMFk8rCS2JWEQiBXEeBMBFxX6EZSuxCgZMzRWbsjktbsAT",
  "key22": "Q5SPx2zkZ8dQx6XE6eDP8mdYuoV8g7tMCQDAd82CJGQPZ7wfj1HmKEKZUVsuUtWnW5KALmdHU6WiV6f91AxTyAQ",
  "key23": "RYFVRrMxzMXHBbbQT6r6ugTEzy7U8kQxBYzCwf9wenU7bSHHMJLYf7f2QrAnL1TkhBePCyQubQp4HUFtEJjenBv",
  "key24": "58KDxSyPPdNCGppkUFqmh7KtH9uZkqdt3qoAd3M4BdjjibVQ8PJcb4b4EGqmYGTCgi3mfmLKBxBVXe5UPeNzdVY",
  "key25": "sRX2rUATDY32qdmegpMVoyw7ghC6FTRCThVL8M6rVdx6RnjbgbbRcAtd7x4ozAb1GuZLXowowpe4f2djQQZcGGa",
  "key26": "jamoopC4nYK4NZADybkv4s5CxhueYPfrxdPBqSp4qF62Gmd4ycoYenJ9bo7rVuWxTGfFPKzebGJBkKUFWtbkQ2G",
  "key27": "2SPdHZpEZxUwWHAQWQu4KX6iv2pXwYknrb3Pu1DL6jUA79Z1vGSHXzCvnP2amMzeFhqtKJbbecLj185awKfCLbbs",
  "key28": "67n15vsfaFzt9GHi12pni5hHbuCisTgUrGdUpsyz5gMiSqa99H3FGyJB1BmZvKpYeTWKq79xKQUoReJqanQusKYV",
  "key29": "LjLhEdve2HQWv4HgGN1Xotzwkz7oSzKm7n6ov6pvfpeU9SNdy7NxtLU1aWHL5jYraf8NqjLxbXMiJEakjdXQhPD",
  "key30": "3mv9ncfKfdhpkGvWBW9GjbQXY7HpVYiszsUXCQ4x1KT6wvtHJwL2eifBtURjpknUvdUJ4LBohwxkd3FgaghQprff",
  "key31": "5tfW2fhxMevm1R3SwUo5WpZgoyhxm3Q9RoKqP8QWyQ9P8VzrqCBtMrzRozD8GsdqAHJn3wMvCGm12ikWiLfeDWxi",
  "key32": "45AFEU89ki1GFo2D9y5WWwNPS1FiYefr3ss4f5924XeqorBFNhw5kjn73qwAvxD5hi7vXwhoGUtqnUU65PDYvig3",
  "key33": "8x6gTmuARbTHqyqcV8kzxF2mC49X2Xbhq4z4BBE78UxEBJLeA6QVWoP1QJj4vSttJyU5rbWtu24SCeWn6PmqJRr"
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
