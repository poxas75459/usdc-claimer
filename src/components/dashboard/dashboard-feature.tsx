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
    "2o3wJzoZhvVA4HSycdWS69zr7ETiPiUdHpAc75y6uDEKJKY2kC69hYdkcht2uUPXT4oU23KdjvfoJ9cpawXMbeUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rq9e41XLBS3pqT7vm38zpBw17UQau5hBSHX8nof2d6kndDnRpATy9Mzm6966R14gRhFxzaMMaTwYya54x3nkMvP",
  "key1": "7dq3iueXvyTEViprm2ykg2Jax7BmWtNVB9XKf2soKNHDy8JHAqpu6wXKmS2sVbeRYiaXQNmZufG81u8qsxpSca1",
  "key2": "2poDLeGnGnHtigy3Y2S5xWn4kCT4T7FHwQKTYhx4cGnfNT55zMkWHyuPwgpDatdvWBsNSuW9px6i1vyxg5odBGc8",
  "key3": "36JR53ijJW4GwQoVpskJfHNFr2nrYZ4HkA7oPKs16KwdwLYR5TreGKqnyAUGrWB9f1EpR1qL2SiM7S9kSokFnneB",
  "key4": "uJH81LciFyf8b16Pr1VDWWKDHYext3rQ3d2NsddZKubS24bXgCGvujEDz9gdYEfCqAcn1UjbkQacfWWxXV35MCL",
  "key5": "2ErFYtMD5rsiQqJcoUN5NdsoWFhmavMfE1nf4tSvTWTB3bJFc2TpMkc8v2B7as9dYEEhELZKUaqknnBC4H2tvoTR",
  "key6": "5MH1HnJXkaXwgskKSQqxVJFiXLuyeuQQA2dUBW3x8yQGZYa2ndzjo2B8RwhqFbzgT723DYAkZHFZpLKDRPrQFB5i",
  "key7": "5emdydz8iLntmAsdt4W572o6cNqvoHEGfjXHoRhz8CJtkeL4yod9vNMnr9fK4PGmRV33sE7n8YScsJJ7Z1Xdu1x3",
  "key8": "5h5p1DF1Dh1RiSzUEnDd28hHTHksbKPeCLeYxZVeBzg5DTHz1ZemWr6SrsjvzmacAs6Ry3GE86pixBgug6DWSjJs",
  "key9": "2pixpeYH5HTNtT8xhfRrZxvxS1pD7aPqHwBXXaPbqyUpAq2Zt9zWQE2p9juGnbGmPwaU3gySAYXEx9mu6sLR8S5b",
  "key10": "2jyB4MjFjhsB4Y9AsLFKNAxTLVNpsgryCWCjAJUctZdHcMH6jJa7DdTCESbr7uJ5K4kSTH5xdqF2vnukLXJYq8nH",
  "key11": "4utdKfgAew13ajRib89LvG9kMnC64VGpiiq2S43riEXnDaBzmCHEQNykhrfMnsZJAKa4M2hoEJ6sPwjoVYJtnKUT",
  "key12": "4tieHdn9br9iSmXkwGhdMi9b5xqyiMgyEcRqGgEVMoG57he7kfLpuBee1hYzBxb3SVWZqsqZQ2bMVFCdgESHWspB",
  "key13": "2HsAEuBba28BdfzpTgKgiQyVJdV9THorc6qtyMNJkgz5GHpeHChC3cqcBDgnGg25RgfKibLAVg61uuUdNgo6gxRj",
  "key14": "4toecdMB5s4BhLaSZKriDCFLTn5FqbyyQZxz1scAYkLAtBqGZa39soHdW81Gjx1wYmktZYEcifHj8xfsmjsFxKAp",
  "key15": "3NYRjh3sRPjtrgf8WpcXBAMFBioL2VZNDB13GJnwJdTzZn7WKmTmADSLkktjTBqU3CfgZXeNdDp8uKv4jia58ma6",
  "key16": "5hWu4x7YGp1zoY5EmkiyhGqbffEP3PvHbdz51n9eraTAxbP1tfycQEXVVXhLLmyu2CEjDt4oVhT3W2p6iHZ9a6BU",
  "key17": "5XaTxxAPvWiiGj76CmSv4Kpk4Jz8F5UvLrSDZzMVhiFgJDyWLg4NXBYmbAJ2tY6NPSwd7Ymk2yqo6zqAurmoDyXa",
  "key18": "5J8ue5mVPxoSyePaPG86G7zB499VyRJLni8mGzA1aRqdr64nv93vg5vTr7ADU5ZAZiDqMbeeEEnSQXX6g2m4xQru",
  "key19": "4BxB12ixydbB9Qwro1Ae8cQ9QV6vb19HmF8sn14Qw9h4WqeFEfSZ3UA2y76vkwYkRXKe6uXWtY5wktBbaW3Wf5yg",
  "key20": "5SNN2ULsCwjbG6BgDGfjJYwvFPAwka8Yoh87t6B4vsxTUz9QrxvhPNfdNYbcDM6f8RSZJEmVGFvPUgpwrxXKsc2B",
  "key21": "24mBYf2FboxY5Hn5iCXShV9PdpRYstdaczbbbCXXqx78RhhzrwNeSN9rT2LkD97UDBtzg8U9nNr4j9RTgqpAyJCB",
  "key22": "5DBba2awUBj9mA73mhYjefbpa7FsVcingjs1xpC67r98nSmomoib7ER2KZvedjLY7ddo8uKk6g66j7UG1irxJ7dn",
  "key23": "44dVL5MkPpu63rNtpk1bHPfGe8qV7FesKmwxbAmTMK8QHiEJTGumAbKkCH8Z6vPP3TXGzsKxozJL4coCAGdFtr4X",
  "key24": "4Wv621NBQzveUn6Ls139mDu8eB58MexM5Dd6S76kfPzJgDDyeFtWEA7q7FKidLdscMQ5eekmp8XDLTdi6Azb6ab1",
  "key25": "4uSRrdew11XaQpyzUJACgWF2SNDfaQYHXNQjrGYRDCd3RQk8z8XeFH865pWNtFpTBuUiFtaN96oqrwWLy5fNdexH",
  "key26": "5MVC8eWMLH2cPm2sj2Sx8Pq35G7MVUESd4kmgWZTVf2bZpZpKj8dNomSGs1dFNRUdFvLuhazkXAw7B6SsaTTNuEh",
  "key27": "UxjBvDBmqHxqz6v2ZsV3oWFpnrQUYrYtZXJtiLqAWmyibJnXQCuoGW3UqdqYGGxxzxpNycQ4RbdJt3Hs9FNALrP",
  "key28": "4ggW7DAbXUx9L2sLq1Qddmr31eG6cSEyUixpZL63We1YGwAa43BwfJFS9Q1mgQpseThyGQttJU5v6cJhEnP1psUo",
  "key29": "3A8hrWEipZWEv3E8envFHKjubHdc3JyQZhcP3bFcgokmYLcE7WGSmm9ubTxMXtVqeHsGn9DaMiuEzARvStummsXZ",
  "key30": "5CmwtzLvVcpkkMjUJ4xTB34KRnLcNemnSvPeHDqdWhDzLeGq3MAxhGrwsa4FPxXkjrfLcanE8re64yyi96bZvCE",
  "key31": "4bFoNptx3mSPrL5yGJFYsxihNYEEUd3qS2BgT1EMMnrzP6jQJkLVoZxuFSvc78A1prDoXb3QCVCke4Zu9oNmg4gk",
  "key32": "2cv2dUQw435AHzvEqdm8o2b3azPZ4UpAytwo49MX2gZy3i9FcmwaZADY1zKiiFdC6uCcFWVsxDaJhAcU1zLXu6Q8",
  "key33": "Ck9cWXHoefNyHGk3FoFf7iEhoLKkqZVHbuxJBqjtcW2VeytyLeLvDfEHMzWnidp38sbwFQzVmSiYv81zxSajo4o",
  "key34": "5hjft7d3jfdPRymKZgBphFPFyUeKdKKke61KWMuU3kL7GmMNT6jDYKRNZqQuK34Q23cs9qn6jHUdnLjSpV97FgHk",
  "key35": "49fEwudzcGymLocPni61crdKEUm7L8xhdD9Js7Uyiwu7EpKyY6qoKHZnNQQVk5QQh5RV8vrD8Gy154DSgGUBBgiT",
  "key36": "KVJqinshubj1Af448kPjqRuKmii9nwVmUKifENiTPyB4VJDkN6y8kSKitiVpU9K2sCRsAzp3wBSsV7z1taigkfD",
  "key37": "43XZUWVJBJhwjigjcrkpuqi2qhBcMvdeBAPuwkQyJiSVFKM4pY8wudd7ba5EDUJgpBCFmxy4UZqWyT7KTrh7kXfY",
  "key38": "5VAcFEpNdSi3tBzdQochKoi45P9JFMvGvsjXULoWtXa9D1htf74TvEGheVTu1oeVompNu42usqX2ZDLggWcG4GQG"
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
