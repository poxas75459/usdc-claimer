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
    "iFU1LTWoGJBufLzGmHxBr9g2uhkoqCwLvL6SW5KAG3nvvaucjYasLFf82CAxoRUPANUAoBkizNCzEeTui68eMTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eWLSM29REPD2MB3GDimp5vhNEmbutQLPWe2M5cZYuLnzHSUwv1eakvGDRuBQUZ1KFUqMKCbyowjZp4jumMkhHYi",
  "key1": "2LZj29kqaiysyEppX3pDvZL4srWpPtNHnB17V5deYj6jK8Dfimu6KoD3bx4FBnkcAZmUk8MBhcjDuoHpSGXeY1pZ",
  "key2": "3ejjd1AoKxqLmQDvN79brUnuexgiktcREiHYGn1Ki8pdtXcg5MtHUSZG4nQH6ZVW337EvELV5f3fyFdbwTKE7mCA",
  "key3": "4bqabL7ddG25wnypMTxskut9bnLVuPL1CNhi3DHAzjsW3fp5f8wZb1ck4ixLuWdaDJHZjZegquFKvZyzQZTULQRL",
  "key4": "w8q2Zn4AtsXSP6B4WJuFhSA2Xb7SCkBoP7aUgiVCzsVvHtb9Nvs7P3LruTag4akZZpP14qQANFZ6TPpWfbFm5BC",
  "key5": "4N8euYGefFsMRsQTE9su834Wbsy6QPKA9JvZvn4YpFGskLetoaPcYZcBvEhR9iHAU9q86t3RiNQbMFM5e3LGXwre",
  "key6": "naexGLxQNfYaKCz7NFQv8Aa1cVgK4qqX7y65PSnUdkU12n18VbCFWfzbk3XjbYRtHMBDn3amdpfgzjkGo5v7RBc",
  "key7": "rYASGu57n6uzGj8Qzj6Wos7TWXwfBkKtuw5qjPj7XNKK1aLMeaSvLqumXwCz1YQQy6hcfMcT5odUAdapoUa44UP",
  "key8": "4gtCLkiRxGtm9gUS5ZHAaBcYgCfHyQLFqSEguXYokcqZabRF3Xdg3kM3Y2KKmbTVziNmk9aAX9kVBU6h8FRULQmu",
  "key9": "5jTTASPcm2ysBFPRyFZuCcwQXiE7ZuMbotTiMmUGKA3K7cbi9NegmSqoFgqygsBcwnwPGTXo2PNSA41mXY19S1aC",
  "key10": "4yGXmCf1yxBxVRYwsXf3ArwxhSDhAUnxeSoEvbdiKoGSMwNhPrSBxcapGkqXQJeFxqjBBBfT7xSb1Ge7Pyvv6DYz",
  "key11": "52451acwP6Ssu8sRonpbbLsi7dd9xKdZwiPWVpdu5XSjRs3xT6mcGrueyBS82suUrXgZrELKecebm7RZYcihBv16",
  "key12": "2No9vK8gcn9PdcY5bgHDtpnzS4vizY4qpZpKG665bCfjnFWbvYXv7g5bhu2yECE7dQ2RGT4EowSDL28zxZEwzzKg",
  "key13": "2VsBM4uSqdKFok8Nb8Yj2K5M6PD3Z7AKoH1Wz5d2NB5PZ6T4eApWP2TVdBNkBXjbtaPLWGAFnM28eCaGcTRFkz6o",
  "key14": "3hcaA4Z3GHJMwyhrun8f3nMTxn6MPeRf6Qymfk6xwDVn7BZ1jdGAmfV8oMZ7KvEVZGjjsitPRB33tbwobQUpaDiY",
  "key15": "4tRx9fx8WzvAi8VPab1VQsnQAbcZAyYNCeyE5km9VeatdFc6yJWbhMaSQnto8zYc8NBiRHzafUqzvSqkse8qxUf9",
  "key16": "PPmKfPP4e7mJ9fuRB24SZohcdmUujychAvQUk8SnzFVt8T7adv3aT6bzyaekdT4qFVCV3bUtYgj6PR8dxnrJcWc",
  "key17": "3NrtEPLbDixjrErBHsMbftihaecM5iWKxZBAnSJWR7pC93gBGgcK8RdDMaA11FkTeuX3A4zjZQ6jiqzbo7ciViAG",
  "key18": "2bdvQ1VPXhDALnyYZWx2G2TupAMLbR3Z8azm9Y84wAZpQF6fTdNKUC61Z3FqzF6ppjdET5ZBfhr7C44RF1iiFD8S",
  "key19": "2X9TjNWtfLM4g6SmpStbTbk6CGggRd82iLua2FCzUa1hBVcDZszj96mABY8YZuSdPWBeMzaj8oCMbmNoKUwZf7ed",
  "key20": "3Pfw296ZgCVT4w6U1nwUd3jaR4mY37UsxVYq96yGwBx6TPiVzbEiSNifxmf7GG9czohtErumVcJmyMrd76ffm2K9",
  "key21": "3TRM7iNFZoUxFPyLXYbmPsvyhRrrQeYavf5aFt8Cp7AEo2dfB6E6WRw7QkuRw5Wz8psvjfUCoNMue7tzxUgTFcSJ",
  "key22": "jZgL551rJitCUzpaVqhSZ7yRREQfkSv8EPegFk9VjaS3bCNZFKLNHYhMJ1AoRiUGycBnSxxT9Gt9QRMNrvCGDcy",
  "key23": "3WbhWDsNdWpyLrPFR6D3hszLrnPuGCPXRcJPxrEKvSRvbLqSgBajotPEoepyW4KQo2wqHNRyyeYhm6u4J88iSdyy",
  "key24": "5csHAFA4amiKaiDJxV59UpXzgajDvAahqygfapRktUVE7gz6jUCxsNXg7m6n3VU1BZfdWCCxbhnd7nzjTvKQ7Q6J",
  "key25": "2jQBZQoQm99UGPiEVzuGFb8HggKsosJZLCjSqbdmJJhh6tByFe4Q6fJky2Bs2gWwnf8LenLqfE7aUmn2mSUyQmZz",
  "key26": "2jJzAdeDx2ZoNebXUH9NJvShitxJTuCNiTvv76gPLMWMdv6q8PmNh95nXzmW4U6DEdpECty76UUoE3oaEsj6K6Fx",
  "key27": "3gyzj3Lamf1HCBa3gMKrg71baRuiDKrPFGNy9D7Gbeh7bsqg2F7N4s6jZzvyhEMuDZggDPuJ8GHxWjQFA54Yb3ix",
  "key28": "375HH5SEjY6Tygd7n9WzMA12DgKUANH7kuWkwv1bSv2uJS4gs8PZ9b1bri6fLA1JEjhdhmi3VRHAk4j5TNWsN32m",
  "key29": "47oWNxqDYYovZLnSMrTsYEkT2DUDkFYX5Av5kbp79a1UHTGEcfXAyGKvwXdegBfYdSzT94Es1xuSZHUNwRTyxu8P",
  "key30": "5Bq1SzKtyVGKary95oQmr7pLXa9vJCqLYnkc1Z8z9qctLiBRwvUBc6c5GojBVVL7pBe3bXZyDdZ1E1Z6FvAEyJ7c",
  "key31": "2rX8zbK2XR65UD4P5pxsckP62SgFx46Wd3vk4rPp6NzVZwFyT1zkrmgvzMGvjbQjKHZeh4QiF2q6Fhkmquj8wS9K",
  "key32": "2niqxpF61fHvX4EinkJVeeApcLPC2g9wGozJPraJ1MC4RRuUs2HyvZsoAGCVR47gkJ9HWKKjXDxUPzt4ufdjHyYy",
  "key33": "548vJVSWofHNUNPcLaCNxCmGzyTuS6pJYkxt8yR5XDuVHQ5EoikXkhsTSM4fEzubPyRwc2BUgbwH9a5tyTfgrCH3",
  "key34": "2HAqM9YW6zXPawb7eECXAKSc5QDkVm1XDk15WqkySxEzFWtztzjpB7QrYmkXLZFdCdrTsRkRbP9TTqmRrNjqcEbd",
  "key35": "3DbrfprKaFrVzyDQG2No1soT2xfjgMAQPtsfpMEQC6ZSeNCw13unk5toMbhu2QWKYJCdGDn8QWTtJzgrNx7hqVR7",
  "key36": "4soFM2VCY5pmYsCYrqARcCHeJms7kcfywrmFwhauDqVQUsdJT7GsPmhvcAmz2oVhcR5AA8ach71ry3yx4BeJNfbt",
  "key37": "23JzuGjNCn22YEY4jDGbDv2CXBmJWRPuLZoBn8LbPAC1u59k1p5GAi9r6q1uE8h9ZybLGtYGrSfhodhFoedvG9Uc",
  "key38": "2ZAo1HoeSEZbbfg3Szw5pTiCu7KTo8RbpjGX3Uz2mYUsN4zeZrSvESoHanthU5D7LiTgsVEwcjN5GbgC1qCEMKPy",
  "key39": "3YzK6bJcWXoLSEdU7YeAPEUfDKBJJvHNUPkQPwmuxrB14LddKt1LPfmUkiCtX44KsBwTsswxMgmVgcnNAYU4TiAq",
  "key40": "ykGK1gTcqeUCKULeZUMxgW8aifT3Fg2HJGZoxHiZqwhwemQyavycDaTLZt47tqTuoNJ75CcpUAziMvNgMvtQgnf",
  "key41": "5e7YAiKdFaDmgAtLCX22nwFGmpL6xfLvtiQ3PXCs5eu35RLoz5wMFAJhNHMYgAgGurwKvfEfXRuWzEeGME2tEd9m"
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
