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
    "39m6YKLN8Fkh7bizixEaGyiRtP7mv6YHERuCheU2653r3EZa2oXNgZ3NKL9Pzc7w97z1bgA6cWG86em4CeJooJZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ns7RHkKCQ8Zmef4uUq62Z55LKLGHyWxm9PPFK6QWDMxyhjxGL38c69duHwbo2qyzPttixYCMmEuKCH8mFUynEFo",
  "key1": "3toGCVincWn6AdCTxcdqtScGpRTPoPe5TpXMh8xSevXrPhhNn4X2LHKfkcubaq47XGRbDBraEZSEq743bxr9A9tD",
  "key2": "5RuhdoPijfkcTfwN3tpVgg8Xyo8bmJcLeqFMrBZyMrG4eXmKx726stPKSwtePEyf4wQw1EVqgc1RY8bL7kfJUQC7",
  "key3": "c74VKwqiqz6qKcSJaJMttGNTWCeTienSrzf95w3ykHcsv9Bkz5cV5sujnREyje54oDFnxwbPcTkW1d2VGBAQaeX",
  "key4": "sa55PvtksgXmvqHTHDcmohNpSc3pavFpVPr21oYBADpzipvtgEi3yKpbxsbJQGarErtQ8NTsiiBMHhEFheyDJMJ",
  "key5": "2LD13WhNc9FSC34qjMoDBj8bBCaMifadiay5HhT82gnrD4namcoWzSyLzCN4XpsgdHoNM8Gu6Gdc45x16CKAa7md",
  "key6": "31NTDgLNxTnFJcvhXjS2Ge3HrhJ3b4hQ9M8iphY6rGQSawenMyXVKnjXgobZRNaATm1X1pBrxkN5bWpsKEM8UNsD",
  "key7": "QrFoGQQR4nJUWR6mWv2sBZvuCisCrG8YdgW4PuJqg1BVJmhwxywEdGkux6TDpctmxwfU8KGZEm5x3EA2MTt2Gof",
  "key8": "sFvuXL5vhk8Zo4uLoezt8hfULPtVivZemwA5ZMhF5Em6n8uQbsRZZ8YSWZ9fkKHPRZkBJQjKP6gfsHZZyRjtDgQ",
  "key9": "dFFYvvX46Sbf91cpXGMp2BHVas8BrZF7u1udycTciyMYZLTSnXd2zQvnqagwbv7xgoxVxH718GR5p9BpMJEBDW2",
  "key10": "bYEY3T6frZj93VnoVKRJzTgmaCUaFvSvASJ63Udez9oE8ZhBBTRccrwiobjxqWykmwvFveTZUyw2fSXwMK2NJtb",
  "key11": "9Xqxjnj9SeoGMXiCcpZFQEJb5AvzYqbUgAtzgchEN3ZnVhp5ke8v8UMG7eebrMsjMsLHYc6Bxd5vxSW2L1boD1L",
  "key12": "4TvwnVRkDmuFqLGoNXR93n6ye8P4XQy6EGQ4EfPggfb88z6VewigNhWyHQp5ab433puBGZykGR2nDHpw9gdeYjzT",
  "key13": "xgSo5jR3zUKwVcmNLjP7mcJnZQWFTi3yM6gqGJtEiUD1UzgdmeVuPJDCbRhsuYq357TYYkV4zLXp9N1PmvBP3Uk",
  "key14": "4B4kfH23pEN7Vfrwo4EfXN5kj9oy8hbEFExGifreRy9PxMKUcKC98Ze2shepfdCsJnEKVwgFVyV687qZ9rp5gQE3",
  "key15": "P2eEn24UNvfqp4S4NL1NaeeF6hHPAhwm66dGgLLuY81q8aesJF1CBfe7KowJ3hMtniVhCjovp7bkuzdEfYXsc8k",
  "key16": "28tyasBWUMrkaXux7MugaiUUyVg575QoPh1ybDTLXt7aB9VJcHV9HwbD48R3YmbxJBHPiMJ1kpdaZoCiHNL7fweY",
  "key17": "4qzoGAckoVeBYmhHiuE9vGhcNrYhyRsndkVeRqqte5ngWoGxcqhVNXfKxp6Q5r2j96BtTNTKr376bSHd77JMoAsR",
  "key18": "2DPRHiduabZ3R6SdhzE4dRFQirZJmcfKCECepP3ZAv54deV4oraprb6Er8jRqHCe6JZ9GBpV6pR1JqHzujRpZJF1",
  "key19": "6KGe7iZrWSjiddke1b2vTy5dJVzPKZ38Np3dWqvBEx5WSrZkestn7UEzUu2o8v4BrWJtSDFuAR8edjZ57cDn9Jf",
  "key20": "32eu7LWdVRvta1jzpEUubyuH39adB9AVqJoXyR8m1EU43VK52Qc6hwT2z6kxiwgqu6WK12PhmzdiAeqwUxjdLVk4",
  "key21": "3wfD4msPhAtzaUjcMkQ5zpopY4rdeUyRdABKkQ9hezWT4kvs7oUM5AU6BDN31hd9WEeRrKqZ6crU4LTZYi5z9zMc",
  "key22": "62iYRCdj7krgFpRHpKwYLeCPFPynFyjpapwVgBCiVZm9ChatTPL4n37W8iT1ihp1mB7YSVxiUiFJkrfCdDFpq2YM",
  "key23": "2ec9e2BdT2TvnfZ5BS6VR7fxJvSvGdrfE5iLWDPE2CLXAZMiRDR26czLXQBJqF7WvtY82u7ZgUhZQLWfwoKfMPZ2",
  "key24": "4rQ2aCKQeMLEoCGuxZUUv65b8Vpo9eT14kubxzUc49sP7mho4g3bTf2Dn2VVH4wbTvfexcAfGsB3E1XaZFMDTbsr",
  "key25": "4PcFi2TCxLCxwiJexrpQtGYSSobbdtBKf9WxxyaXmMQEV6BihPqe6uTwGCqZAvFrj3YZXMHfV2thy1UDptYh1pU4",
  "key26": "5p7SLurioQYd2aCyCCDcbB5wVEvQG8kpVNstRfmpZFuXn3VNB69EqrWn3ixeJN1YBonvRCGqRE6JQteamhn4a3xs",
  "key27": "3LVTgU3E63t5e7KotgWPQ969jBbHeuQjvJdtaGbnerx4hxNRixE5ciGDZy8L8UGSfzuM4MLAip8BTyZ4keSUqxtU",
  "key28": "3WmoQny9qEEYMg4DanuSei1eGZWKWryRgsjKYUjbJ9rJaqWTYbtizwYse4mMcjS22ee1CbbXFAW64CLmDowdHJV",
  "key29": "4oJWpQuarQ8KLAQT8YZDtVLe6bhUBoDC5REjuyDpeHvQtcjXeqeshyLvggxep2xsoaQoGRjLyzzD49pfGMo4JQPP",
  "key30": "2MHynmd93KtXUwUFuBWMqr9cbWCPk9AL2LZ8T4hJi7Z9Pefdh54d3sxKmXXqDAXL21GZmavM356LBov2agijGJgh",
  "key31": "aKtFTJmQqMULdf9A2Y7MsecEzTkyac3iJJMu4CeRi6e3Zw7VAEt2t6LUxZ89gSQ2X4o31YmGdiNvYjGJrqSocRG",
  "key32": "4ZM4LdnGwdhTnVPpaosCDyZ92AYPErW3MVRofKJVEv9kxj7bZRmKzp3jcN6hGmYpygaiGGnrxBdvRw4st9TFDeTJ",
  "key33": "3ig7cVh4RTboAcqi66ic59HhUnHMYBd2mvMGsok94vkBxjXzzEJ3Vi27dDuGxrKQniEM2AgHtCxJR8hhfMpDyXT2",
  "key34": "4NERwbSW3sUSdyQ4RUBKHXLGjzHBcxLWZ9165upuHeDwYtAVa6dcNhtqfjwZKEfsABwVkWcKfhGK1wbdzQ4ocbRW",
  "key35": "28ogtTEXo7dQ2113KE4FPyrJSEPogktFANXaBdLKQV1ssNDxCdXs5ohsqyzMeuZYAS426PQ2nTvTV3wcsenUaaaF",
  "key36": "5ueprf9nfGk3NokEG2oVzT9i9afyzBS7CD1rhRjUJQdz3Q73vePEwpFxGR4iBtTgMaaJJ5heuwNz7nP1XM4iQrn6",
  "key37": "47sF8QCgimttFBmgeqXcTokjc7v2VCQ2XhQ8Xm9dCktqPFfw4AKZurhFyuHbqjEN4E1ccTXwEJyBdYR1NMwkd2z5",
  "key38": "ZADKg76cC5mkN36EziDkeGs95CGWsSrj4JnhbYoCcXHt8PVJiiPdHYdJRbxSANgi4gkH1Zdxuw1j2u6rzev6DuK",
  "key39": "4RhhaVoxWd6gDpqqvycyEhS9uLVFwaRuGrEGdFmm3oBTN1UaQdrvC9QRDTJktxB2fgsmgnaTufTpRZMNS5D3WAqo",
  "key40": "62J7TCzFTsVpSmjGyKTiHXy4CQGY76MPPYsvP2MszZ9GCu92kPppjUR6q9dCfTV5LiTQjj2dLa4Y5EQeb98xYu6q"
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
