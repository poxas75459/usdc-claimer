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
    "5BehDZ4pm5aX3LxFzH6vz4HEbh6MtRvKJshdt82tXbZx72PXgSGh6nimqbFiSJBUSk4duu5bK5ucH4DaUvnr6eNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arLhXSvA1KAZaCdXtCZYuQpn4HvX2X7VCR1q9JbpanQgfHU3RTBiLUpVUpNqtnSLed9Y9Dnjkkk3PLWNtoXExqi",
  "key1": "4SWYHMW2LWi1FGjCTrTTUnQoHh6FzvP7nqkqTUvCxhG12SkZpKdJVJyTpDevhvLPdq4yKYKP4TwRVQxSXcr5mxyT",
  "key2": "2jrZcnWdTisy7frYWseYy5yjywyAfBr1BVz1N483VYhjeqiHAVz3DgEHrnztumboE5wa45rNLVFeYwq8LrktCUvY",
  "key3": "4s5JkJvZE8Ei2mBmNx4HMnRiBvCGfCYqCnwzq1g1vRzf6Q9ZTcp6nu2Pe9DhyYmikmp5CMZK7fRAY8vyU3sPJMht",
  "key4": "3kB4Wg9UQQYY8yPqhQZ8xhHMTRZkNCsdp2Ya43ai9YzbuQ6GWRjwAyYaX5485UK8XRLdky7LL2euqtKFJu4wZzrz",
  "key5": "4s8BMabtRepsHyWeULYmaWtwSuwRyHFegQL67kzK7NV58n3CpiR95peAMrL2vvqx7krx1sYYzGB8DNHchP93mRRN",
  "key6": "5uAcC38WhZ7uAf3pER2dTyKkpYnefHoVkUYpMav4RLBsvJaFYPhfwMEmkdQDpvFgNpNDQtGTWA92MV4B73bCTwKZ",
  "key7": "2EbxAwuewXwQt8sfiWJiVjbQ3vXEcpTrQNP9d6hPAEWCq7ygfsNWkzJZWR9mxXWtyw8CQu8Bux3NrtEmFpqg3r4S",
  "key8": "21V7q1SzHPXvYe8VGbhkTugKUBrwkeD2uhWmSyEJKgUhQMaKKQsvx7M2SkkFvaJoQubpvQ4xsmv3XL2k9UmXXTxj",
  "key9": "51kLooAZNLEaEvt93NH2zPhtSYihZoxTq2i7UxbLS4UMofj4NTsxCjYwHJDeDL4idndBYwg5vDm6z4pRp2WnDJc9",
  "key10": "RCHwg5EHASknruoT7zbB23CHBYGK3xPHWvmaRwyM7dwzCQ2ZRba2eREGtZocMqb3bi2njnjaBJP6VMeJkAFzsnB",
  "key11": "28tLXb527r6WsqEA7qWuSCbU8Udofsrb2wEQpvWTtYvn2yd1Ry5dmB2YoTzdW2ZiqCCF9vo2qtULpiFPQ1dc89Dg",
  "key12": "5Fmj5tybnB62uZVR1bPqjzDgzq3zmtP1kVvwvTdA29HSvqVC22jcLqAqJueN7ekPNrvUCZCLt4phntqEUMEX9ghg",
  "key13": "2Ms2XFjdwXDt9Q25BVqNBRf1H4Z5b8PFPShXt4m7R36YjKjGWbrvZyVuYJEgHboRJQxMU6ZSaAVFHx6TEsnWUsDm",
  "key14": "5Hwc1n19c2VfirpwNDavPVcTWX7adkS5w556s6MwxX3n2j9dQpD2RdG8UtayuGQVsnJV1hG56KsgK61yxrMDpHZF",
  "key15": "2QVw3xAAS8zGPeQW3UaJhc3zPf4kzqSgiZhCKGxhMMibYRcesXiJRQTo8kiCKdNmvhfBXavMCvQ9wxifSgKeWb2B",
  "key16": "a9x6jLCuvANMxFjn21TBMJCdnki4nFsuEii9uW1uT4mEYhNmmoL6vPcLBr5UWkPtATVhffSSp5kKCJzLUTcKDiW",
  "key17": "o8uLixsKmkmMvrmT3mAwn8tX1dDBBDpvaP9Df9s1gsUjssMgnomGL6drvi6GSaCo4bvRV6xMWvRvBZS3nYCBGBn",
  "key18": "2o793pjvSE4qZsdoCr8HjEo9dj5pPZiqdPceGmtRBk1prHkz2BRfhctv4hcoEzFYLCevVQWHRUNQpAxLGFpqQyj2",
  "key19": "5Ngap8WiPxK7ZByRUvN1k6j2NRQef6eLcsRMRKvZo5B5nXSW5scG2tCRqxsRDjqiLq5KP65hWnHUFbhNLZnzYXys",
  "key20": "2yxVKb2t2vic1n4Laqdkn1i6iZCZZVs8r3qdwLvrAfZkxSUfjB8EwvQDiDdMhHQqHtzYdkMXVqZcYxLNYkt3iMep",
  "key21": "yCCmUFYMuV7cT7MP1GkciAa47ypa4cpW4LbLpdpjKZF8pKCdopZeAegEs4GGVi96fGGvPy3P1vDCuTkwLWsSe44",
  "key22": "24WQS1xNJPw4JTL2Jf1iE4o9psZ7Y1jYRrQvhHPjrJVfoZMmUHxFoMfdgvk9VQKo4y8aj91MKBy6rnD4u3mYjtB4",
  "key23": "4M7bbCQ9nT4DwL5MZfYHUD9SMjP2jw39qJZkfjDt8TjasjkYUryA9m8e8GFEkGwvo4Vwsvbd1bHmMf7VyiF6p41R",
  "key24": "2ztrVUP8Km9z1PN2PLJi5vUrvXq5VzufbD1Uuy3ehZYnS8NmqMJLZ7sCLu4Zbr32KYWBkwTkKd7f9UyphUvm1QCz",
  "key25": "51rhdziijmcePJLcuMFUdwFugtD1Gd3MRZP4UygbEnKdhcKe7U8WUzKYiyqbhMHHdo3cMVvdHncDuTJ7CQyGXisy",
  "key26": "st1KCBwBJJRWTa7zzJNFbPvRfChFMCPiKKCgVB4j4GEVx5PvNnbHXQntYQdJCGS8XeVbNa6mC3VCqx2BB5KXeZP",
  "key27": "47A74N5qgus1vNB1mHn7oZmuocXkMzpVmkEFGpHY9AGgj5BXUpnm7vzuvQtVi9kAtdxodqYryJr6PWxogAMH1HYT",
  "key28": "4xJXoaHhazzSqNzupvHEc8bNLo5wiYcWvvYdLUfeKiTczGqT5ftxyTEqX4RD5oVG33Np3si2A5gt7kEAiotNZnHk",
  "key29": "27vMoYS1S8K6XhAAcay5tQuhtNZbXZzYvpVzdRy4ZDUbkJSEtqNxF27tNy4Bi8Bx8d2H4q7ZxaJmom8iKNGMUxLr",
  "key30": "4vhnGktDs6fY5qCiJBe4w5chQ3Kar9YqWJEiezzrADZQFqzwhKwpjxCjnNeyrJ1GvD8Rt9jGYjWjbTwa1FB5YV4k",
  "key31": "5FTQBVxNTnWoEAVxAHRcdnjvXFSCeJUE4bDEKJwzE6vXRBmJsP7oAYvFa5WXDPQZwm32n5TmcmZA713fY3wim8Df",
  "key32": "4Vx4YPkCHdM8mKGXNsYdMhw5JHQMXE9tJrgdB3rzAezRVc57VZKwU6TR95qHzEsFuMcYJucL452uaVbjoi5bgzbv",
  "key33": "5Egxup7sfbbDVsavTDCXE2bcUTz8MT2UrM18oLReQ1PtBxLjhcTe3zvvNhRJRjR9RSaPWuhq1H9zJsXzzXRizH3",
  "key34": "4HU11has9vt2mghiE7UC7P8TTJrzfPzHPsgZChGyiVLuDWsfmqLUPWF9x3Y322J7z4R3n5tH85jpNBNMnVAaXtBV",
  "key35": "41VCFUrU8aHv526nDWNJmyy6ULte7tHLn5dqa5MKAAbuuYCQUWCcSvwKaW73AN4V3hTwpAF8VHG4EvBZNZpLP15V",
  "key36": "4ppjjvs1McW1cquhJLi2TuzuapA3NHVWFNorpW7msXp9CjbJaxmMwZm39stxGhdw5HboM8TaS12wqBa5QRGtQcGy",
  "key37": "4gfTzcFDVCgcVCoS1mAMxZny6PYm7RcNd3voDskqpBtJHAjPsw2nQrFvgp58FeWEVqTpcyxFFLWcfBDxL7Hgk36x",
  "key38": "4LPwhTEWqcEFfYYfDnLusgSpoKPBfWyzBC1J85uUcN4WLARb4w72Lm44zfpnM9vk4PXjCfEwvrPRrNiupRNEEDN2",
  "key39": "Ajxc9sGVSYao6dk7UkN3ghXJrdF5MCfPwMefWxCj8dS7AtgMdUKVPhi7RfCh9DxRwDiRodDmHn49B24i1Yx3pbf",
  "key40": "er6Hp5gFxAMyN45HotCiSijf7TkcHYGzCSinMfamH79UTmMsS7Sn5DtER3TddYAZYhSZSRNqhXf5rV7WqJbYvRE",
  "key41": "49zfhMQGTorh3gdKDfphUqcLLgyj2Yb3yMs4LajVLiqM1LstWnK7Mkb81cDs7YhER8vcxPTF7bEcGRJQcDGimRwj",
  "key42": "3CEB3Qxjav9hkqMyDkUUvCwn7iENyjXzBAkHC8xEdC4xVYkAP5HgUJHUXufB8gXfSGjuX4pPpNdfx7j2U7imvoxN",
  "key43": "4f1qYK4ihnEfWT6pEVFs3oTCFFuu3EScnagc9AeNhX2hfy53vdmUNy8hHqyoNiAALi2XoW98FT7SUMPCLYmMYYxx",
  "key44": "5CwAec9ERuJoMKB4pPWPnqNScUJMMRLUi1jXaQiS5A1XhSU21n42Q82mgYraEqM4ioMShDU38wgQxXF7y5LQkNe",
  "key45": "3oqNPgZDpmhLioQbxiYcLm7jUaAmAuEigLtYCF1HhauKdMaM6PsV8LJdH9o61b4tubGdrepBJn1bHtVzDRkmCRyb"
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
