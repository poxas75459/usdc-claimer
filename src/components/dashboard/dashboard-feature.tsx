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
    "3px9hiQpZTD5aKxXGQSGgvazEES6qWKgwDCtseJ5FHLuNXksLPRCXnrx5BG9saqAv3PM9Uj1FgsPvqC8L3VXVUNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Vk4Pwxzkhi2RiFxZFF3s2BKcj42dXhrhyn7i1VzdfEMzDNvdc5z3CHTnKo86VUx17gmBy82yGrNBwRexPGq6Hc",
  "key1": "3hKRB6rELFtjwH3fPNGV2op5DbbfhrvTK3j3G2zozJ69yhC78ejUsxMgjsyi5hYXTTyFkB2DxUy81PgM1hcsT8XK",
  "key2": "4izVPN8NeGXehwu4K6KqBfUZpD5h6qDdeT6gafskiXypBqsUFJAn6jPpdXZmkfxYgo3SxwRj1SDuT5XjksFNBvVg",
  "key3": "65RB5Lve3CfAXbWp9fFSZUxt3fNqBRavDLBgiDCyFqCQp6TprNc1z9NqsfwfzCXktQdHEoWJpiDbMoS99agk5tp7",
  "key4": "54MFLfAqwKLBpHcTLhoRv24BSHu6eG8mGiHpe84kqUHqoqWApoBnzcBB3QAvkDiTCZBXRBtKjBvQ4chY5dHm6RCx",
  "key5": "5YLMbzd1sW88JxZK5rjEjxcCFqJtAXhLodm8efETeKUsiGi8xX3Ng9TH1HwjbcEyyzTy58UpDkEoKu5gUvyPDvU2",
  "key6": "sap5vkpqVs6zFn8u6kYfc25QvHNHPWs6G1TtgTSAymvGPyZsfuaVXAZ5EcQLVEqouXRBUmSbuTB9nTL9by6iEnU",
  "key7": "crggC65BC5Qhn9y9PE7xRJdWKNGWyj645RE7RsK3Y2maaSxfMCesFfQHKD18EgmamAxoKhdqkVzbgTpifDFFdfQ",
  "key8": "38HNuTpHQFkeN15HSGynoRTftH9LkGFrbuMQrkjvmRiS2siQEjG4aphwKLFeCVniddmmpKUduRZiNTjyZ2YGGGeD",
  "key9": "ZnvfcFSdti3eRBpK3oQ3omX1WejqrADfg62SoQXdeV6FxB81PGwgJvsurgwxjYuDzwijNhtFdcnoyJtm1yhAqbD",
  "key10": "3jFFAtXusEWP2XQkYq5BMzdRS4a8ZZYNfGU9byKDh1zpocgXt6S8kMtaJXkAHSiUiHjFvpJsbEgJCg8rXLZWF7QD",
  "key11": "2vin15N2uHf1jyHuyPTqdLn15c3j1X2gFeBHCGXMhQXbcctQV6hEaSh5BVmHcdid1scMZ3VtzufbDe62vNsoXAeg",
  "key12": "mbciLaxuEZK5fysGUP13BV389WHza8w9nj9sJhEZhyGkc92Dst5cKJXCrEQ4KnibtLu7v3mnWt2rzK4rXzXbSdv",
  "key13": "5thduMw2RGEU7LptLdVAnWvhvTHH6gFfi8rsm2wB5aDUgbVFN5TecCATppetaVDTiSucqGc6h5pg3qK8ESqUys3c",
  "key14": "4jccCTiWedThHbV91mndsDqZhkDKB8frGCTGzpFEQMHqCuaAtkDwxLCN2JhjnFXzgZmBtzL1GxkwBwq5wXjev86e",
  "key15": "5YyfJAS4cKCHecyKoosyiNvv1xKv5b5ruKpBU57nMWAjWZHQaE9yc84Qv8YUShFdvV72YrSUKTKuDMRh1vsYpG1X",
  "key16": "5Y6KpzCVVPydEVzSxkCcsXwZmQdu7Mx5M7AWh2BxgMvuPFLoE9Rgu1kuQ56Hx7MootzwE6f6RJa2LgcGe5GJuP6y",
  "key17": "5WEa3gLdJvzMvy1GtNWotJGxWFXe1vWQ2DFrkQEQUtmL7QxSrk3viJoHaZaae6re8eFw3xMFwcpEyvy2G2n3J7di",
  "key18": "5cXK7TAVww47uPYovTbZkgTQxtxgHnGHCTGHdG6XUB9dbR3bNQRNWX7z6qEDQtmFKGfNVSFEpdRChiZFbjtSbG63",
  "key19": "3JB19m1gGanYSH79qxRAp8F8ygmCSRgYQesTqr3KE6N9yq1dZQDnPJsAa18Z3CStM4oi2bT5Z9WuEsVp7r33P9Z1",
  "key20": "2rv4jMMZct35ecvo32S6ewsBKFYuEMhLs7FGbRxdzCyqY7Pz9Y1j8bcXFqThKj9tgLMh7gJdmKHFqWpxBaT6bs8R",
  "key21": "5bT678ZFvJCbwHDeSu61yppKtjKA1CuHKhMyoas84jbwo6DbGivQ25bvtfNL3WJtkfpNymv6tvVLY6K1J5tRaJbf",
  "key22": "5JvMBDxdLkxV5Uuu8HiPbWp59tQXubVEa8FmibtJkV6rrAuaNpGK5cGDLbCfJNhsWTWC6zDb6ofVNZoPCQwr7EGs",
  "key23": "o5NcrWnayTVjCr9xx1mwqEyYGHQE3eF2a8mhbAPUVABzsVyumAugzyoU27XUmvU2zScNHQb2tDq8CYX8jiDbSJy",
  "key24": "5xN7QhYLvGGxDZveM8Mu2EMd8AcnHrNJL4ZaGd5nMLGQwxMsiEMvtQcjKiRAS3e2JXf9ABSFLPveryLPCD9487Ry",
  "key25": "3JJdc1rYXd5VtVK4ukKK148WVYGfTxi3fDmqSWkdwhSHnUDTpaMfvpw8Uq3MSK1FhBk1Wk1ZUjcipvGoNZ68r9JY",
  "key26": "2vwh89351pkHLoCJDXYU6kEq83FhPvst4h6G1uJJLsyHQDc7cUKJMEY4yKfhkVJRrvBfqN65ipDtfDmjjV4NLDCj",
  "key27": "2tkR2TfQ6eE6d7eauympY98AxUx9Zc749vfLtmBpjwtbNR977gRBXpaymsU9cKeb38eDYnLrQMDSrekqcv3zDBg8",
  "key28": "2PtoVoKCoucUARgVsShuiHQdoM6WQGES5aQpf3B4sy3fPmEuJSmmyoCT7f51xrg1gfKsXcEWWkEULfzkHNyhkTeC",
  "key29": "zxmLhypuc4RqZfsqzeLL13ywLChHKFqifZcXy9dHgev2wAPHvbL1ZFPjHRdCBCAswcbwJBz9xxipcGTMeTf5web",
  "key30": "2KbH4NXprSzM8XAyaD1SMe3iYLLB7mPUqFof4HW3F2k67PjqgqbKenRu4iRtiyPxwyKEYbsjzBLQhLafjZ2HrmZb",
  "key31": "3i7ZWxqmKQZJjrBKUKSPY12MxehfpV4SiBebC4c9zg9YaKok7zFkRuexSLekhb5WBjnzMa7x7Z6QUeoyrrjUvnAq",
  "key32": "2titpqbkDqNQ68eaiqyh57CCYAKwXvXXYxUtyd4u6XwLMLJbFkB8E1JLhZ6KDCgR3KxRozpwPSdUgGzWmp1PAEeE",
  "key33": "4ryC9CMnCLX9xJUfttefs8XhBXsLBdNoMapiVNutTF4MCXXNEgSeEKddnfbZqgaS2qeM4hs1sHsnr6sktqW8VeDf",
  "key34": "24XzE7s6zjKXFcUbsjMswr3TvMSm2WdjCMpqabHEwCfg5ABUVoCxnpQFgRyFS5nGCFUfThqUFWCZLfzMCHrjGUvB",
  "key35": "3EHH2SUdHho3eMXrHCGYzWhW4nL351YnpXiXjUbaqKcYz632psC89EPAM8sa3xuC9eUvPog7NT1GzZioo5VBHtxg",
  "key36": "62DH7SDqzHdopD8wYttkfTA6t9qyLM9NE7w9xEZfyQuGh4PuWTQnWoirx2ma9xZZVVRCoYAoDQByrucSV1GJRnB4",
  "key37": "2e3J25fkUt5idvAA1EPS1S3u5REJFKThYndoCrSCrHnP8hCcTbHWsHPW4rh819hGWuorhK9zNCrnzq78QYUiSV9w",
  "key38": "36knraCbjnRikghCHrRh5ros8MSGGvo5S8PVL2TMpHnCEJUZ3M8GhxV2vZfuqU1JE1UhYCBdXrhesyMiGRjmaV1q",
  "key39": "59LMonsB17ZdjdEnGBLacrngYPfDLEbbjaVRUQZkkM9XRS2G8bkqyMqjqKFdCeheTgKguRx9RRe1iX2xCcU1PF1Q",
  "key40": "bq8mi2oDHTh6SRAkuoq9xUePE5s6ZkicDsAsGipFu7yq4S3rfrZHR6mfxpiym77cQDL8gHsRR6qTGj1vv7CtrJZ",
  "key41": "5D6XEXPDVzPn9A7WJDATPqa14JGTmit8pqi3QhpjLWKgwrsXt2ye15nsdcE9nzgGKBsQ9uoGHRJMAyTyWTbJ7nhB",
  "key42": "3L7ensjPgtaxDig6HwxFKDJF7iSE9JfBnf4G3rGt2zuhw33Zkpp1LuJLpbW7ymfV2iWKPvxBPTuxxUo4Cewgucey"
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
