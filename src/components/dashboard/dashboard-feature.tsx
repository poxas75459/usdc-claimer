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
    "65W7ntEPyn55sHDqK2cwyNLFhVZ6LJgKgcrpVnfmcvjZVc4QZwU47izgSekNwYGkyu7TRmW8wxWxSyVQuN1fLHRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gnN7aksABuiXwRqznsP96jWuTdPcp7NiPHgNUAyWDCdaGRFVLzdD97EFijPgBdCNRLZbCzzMMpoqXRAALRoav6Q",
  "key1": "5iDAAof2UyM5GxEvsNPBX4pXFqHH2n7sdzFjHGfH4nrgYKG4fUdm3uad4odzVGbCJ26EHouHnNttwEZ5Kd6f7i75",
  "key2": "3GmQgWicLLTzz8oUXC28NvBVPGSaNqiKJkonGMDdoWgodGyGBNMUMUNfgxCNSwf82zUqjjggFNZQnVTWraSpHYTU",
  "key3": "Lu1eU4QsTqX5mpFL8ZbKYKdjBLADwhV3ma3qpQLAPoiXzwEUhen4Yv7yzPa3xYwBDxxjLhFcTchGA4neZRa4Kx6",
  "key4": "2umP5pwvUHr7JopP7n6A1DbGkcGq88rUkZAzjLGRbVKZQBYPdx1s6xjFjJHsP5NuYQTWYo2jHXJq7vq526EBTMtL",
  "key5": "3ohAPCUG8LnKYE4qjyAA75soNZq73vEd1E4XHFgtuozyi4NwHSeSZo71z8KCzVhAGNLJEZvVrzgwknBbBeyYRS1",
  "key6": "3xtrceTwbt87sFV6ViAkZo4oaRg9Z17mFuPSUFbJpN6hZjSfXemNqQLKmQQjzrqZnoL1qL9TJQonBqiDqUKjDexN",
  "key7": "3DfX1onpWUaQxEYEXW9nMdgwBNujkadjVc32WKeNpAh5ryVZPoSTmvwoSn7x5GtrAjNKm6U32TASJ5faisptA8uu",
  "key8": "6e86dQXNPrLfDtrNMX4RdeLyrEK8XmR1xqEpz3pY7VoXDAvPqpd2jn1u2EScADFyPnv5TSSqSFo3GQrAHUsJgrv",
  "key9": "3ctaRNNLAe9AxPJ6oV4VoTSW5Jbmkfq8NoggEi4peNRn8k53DaeTn8grZ4Kch5pt1itHAYu189Qg9cmDW5fQhqyt",
  "key10": "63zaGLQA6uHiCWkNtSwBJr5M4UXuut47CCJQKvWjwdpRG9wfk1hgR6vBsrP6vyu41BmB6keydQSMd7sy7ATtEU4",
  "key11": "2oiCGucjmPXjuqD2VWemF5hM1s6EAYsx2zsshmhgGs6mMPTdmav8WHLWzvBHt17MEbwuD2ooviDRuMoyiMQv7dn",
  "key12": "3hTXNnByt6iRq7CgKY9cA8ZrSCswSg3dNVWmhLqazhywxq8orgqk5uJusNvok844wSCZH51rmKMzwfptQWnMNUMA",
  "key13": "5igS62WRbAni1zhpUsa4fDWb2gz5ukCK2VGT8du54yQUsPyjJP7CsPji62h3BK7K2dQxeu7TTzZbCykF4kR52xq6",
  "key14": "5w4PHE1VLMqZSaHbsDeZJnyw1XzfzKzr14TnDYQr9WJnQtnZVNmTwjBnwqJsgBKWV887cFnAqoYRGA8NPk5ngkQE",
  "key15": "5ckHSAqp6eTAWzv7PmNkUbWdC3svBz7NBDMtrm89L7ySpsEZJrru9Tb5RdZrVomDwbo4UH6Z9Mrf8s7RN6u3475A",
  "key16": "4UDPUZRy5zHE39CJ7qzCq6qVKczuzp9zSukQJ5GczyDzTxpZ8QeLB4m5TgCPNTi4feaL8Z1UF6EYLoeNECrXYpBo",
  "key17": "2MYfhuEjBHEDGy6rCzbDLyzK6LwBXCYLupQyh4S4kCpXAshp74KkV8NgtGhzRG5mR41jzKL6ki2auLbwamdiYwuu",
  "key18": "3hgr1HuXBfBhzpbUDtL26YY34BBaBBWQRs2u8QegXpPTZoGmVv4RKZtMYcaGUMRwg8kNts8hs4neha6XPhjsivLQ",
  "key19": "3VKneUU8BZ4ctg3y6XxB2KwF95n4Xn4o8oLMYgXzj2ATqgbB7fxfxbqRgHFGGEZshFbxRZbbxLkNkK1A2SKgjK1L",
  "key20": "5nTNJYDS5W35KCjjCC4CCqheJURffrNdLrJVhHb8b5TdNyGYH8Zx8un8tKSYqPo3mt5TD2E47YqgJM3xE7xUdp5G",
  "key21": "5e5tsgvCapMV5rMwLKfUg9Kq8UtYkR48BD26aHy5KsV8aBm8ac3jmyKZdPZgdUo6PzwH3TpaNXdu2rkBNvNmdqjd",
  "key22": "2YpZMsPLm6vdfCWudADVhiBSjcAPXg9FZCwXJh6x1T4sxvSXDNC6qVF5aRQu1aSyfQRY5m2ttm1xgsfCcajtccJn",
  "key23": "3i6gczsmSDEZmtHRwHsGsTZSTAWNEDEFEiFfBYARuDspu7o2kSR64QJACcZzoG5jJrFCtV91Pq4RFpjcYJdPiE1P",
  "key24": "42Atf4RVnmccG9qz6L18Rp8uiN3hnaTyfQy8crpmgHM2xMizokFdx9Xs3BLL68rcNoD95M7dg7JRFAL3Qx3167Ki",
  "key25": "5psAvTFWARfkykijK6pLPcZVEB65xmr76WcnvS6CCnkNBnCYYu5qVXzJH4QBcH6N9TSTtazfbD28LZaZcVKz2iSc",
  "key26": "rergLMfBu11MDpsvE5wuBaAFnkrTGpSMMCjikUJXBoPpXXYa2DT1m87MUs9HHagyHjLYbdWoFfKNrRodWUdAsUU",
  "key27": "3ts12xFSMMmfkpBPUW6AWu46PYwMrxkHG2FUvQi4niVbiHdcEUXQsfAFKhRvXGaM7DNMq3c1ipTJeUHC92AdafkC",
  "key28": "hagWneePkQinfYk6uXNiCiJ5YJCWCUjb7ECvxzNQqe7rVnBne9ZHRsHReeHQ5grMyQgGyVpjBqWfpL2nAt4nGLP",
  "key29": "3L7oAbat9LkDPPhBbxcitjxLvQ9vFyA9vZSSwyazQj4DDfQrz2NGoynso9NTpLJRn2RyKXuuH694xnsd7GCdeP3n",
  "key30": "4Lz4ybJqcMsMzPxdg5jr4FVPMoehCmqTDsBfWXP7GP9hFT8KYDLcpnFVVRzaSwfvkyyi5G9HoUiKtrMNLDgLhfW8",
  "key31": "5NdbKfdC2VPxap3EnCULixt9dn1yYCLFSjvqyMNvt1XoAj3yNJwuPniXznfWN5pZvuSk5zN7VTwy1LYtcwaZDSWg",
  "key32": "3JFkNFvyK75ZgdPu9VFy5mHjLnLUrkDGGDu6d4yWEKTfph1QwbzEt2budfv1GS2wLbxMRcwnacxyKgyWzawdTnk5",
  "key33": "2rg8dKeo2EocqNYEP3g2pKyBb955PNGj8cmPset3eTJ2tGUxwY2SzMX7ZXBVXB1X3QyXgSMbCB7QBnvPbgy4TAak",
  "key34": "2fmNdZcMmpspuwpH2C2T6uKhttXXp9eURzqSNVVe53yPoPpHQC3eNdQXVjo6Wbn4CZCWFMgQ6Bjp9kxU8CRAXRn4",
  "key35": "2BGdryeCN6iQb37W2se12femK5jFs73aRYcpgCDjdUuhvNDTa98HhL5eAjzNTQwbx6u97pQuZVx78ndJFGVLXrpW",
  "key36": "5ZmJ9mFg22BM4aNxGJhC812LjX5EEKQ6TBmRsF698sVywQwDx9bs2yyJejSFXJnp46e2r4C4db53xE3pbT1Gcopp",
  "key37": "3nbq6qzdaefyC2oCLwPbRvcV9G1T5Zp2o9A4jJf3ENNWKN82wERpLpjZy6mynxoz4YzcBqt2iMse9sRXH6mS6qdX",
  "key38": "52Bhj3X4mhYyFr9LcMhkK6CDy5hQSevtVVqoYyH68BRiPPY6DscxrtGP2BKisdoqkfaCY7b5ShNewGYB3VBCn1Vq",
  "key39": "3fWpntoBU566sAVLY5QKLoXPib2dWBiURWwUsuX2gMqAcvk6XyiDKL6JFeT83rno5xgnEjVJXVkAyzMikNs7Yzox",
  "key40": "4MfssqVqL6Duztown8r3XfkjzZJWjAby2ny2daiRApmSer4b4EJTHLQaxykgkzUxwhpJTdiNx1yUadYMuL4cZKV5",
  "key41": "4VT7fE3fUn7ayHjpybU9nbrhSQabu33um8yxp7TUvxZTgwxLnBCAHkgeZypGX52M35JzgaUtkLicht7pNK3mSijG",
  "key42": "24ATPJFageksRVmd7jPnztqw42XB5iu1GDDVAgZBuSQp7nfa9aeqtnQBDcPZNE5K9yHxLgGumuk5Ssksgi1YwaGq"
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
