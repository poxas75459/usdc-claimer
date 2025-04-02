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
    "7HT4zizcpnN4H5jKhNFtCEZn3ENM14tadFYY6pG3pM3HzCCRR9GRLnykdRpAthgNM2bZheaqmoJnQQBav6aNtuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9964eaFJjhqstTSuuEitmHEwgcafEsyYmNzZdobTKcmgPvy9dtWj239K8WnLqRnPPqb9yjJGYb79nkxKQvP7BS",
  "key1": "5Fv1fUN9eMvkmosrium8jfp65wZrYPsXPynWaSRZmkDzuyHQHBqpsJ8xS9CfkBhtjhsH81tdLvyKYZ7eFXnYMWCP",
  "key2": "3TpDqr1nkk4vFvw6XULyqouup3wNBGDBg8FETbtZNe5Fyt7g2kYYFEnH6eEz4qfgADDbUjnLqXgNkSWyYeT9kA22",
  "key3": "5A7HGveARRWBK1PDkgLGYLhnpK5xrD9zP4Z8odETu4K25MAuZ3m6BVRDeiKAyQfLkiTZdvFh9XNsXoFsjYvefon7",
  "key4": "2AZ1APGhLZBvELH2YWXNcNHcxutuFkiaDubjWhxxRRdJEbCUCpftNeUKYGbmeXN9iAjVmvQ3oc66QiRt1MGT9JTB",
  "key5": "fLZ4YkywawVrJY3R2zpqxS2bSMfZJQD1yCwu3rbfbBZX1TexnsBnwruMMRuDSDYwow2XjEqdDfCdMVnSKBTWVkx",
  "key6": "3nnf4QD9wZzUYBU8457USRcosmNsWTL15KxFzrCaLfQKtxN6n84NuMYta1kQWGQNMxKPcjs1RbXFQNBW4XL9jxK5",
  "key7": "59UWw2PbSCsRRfTcNHMM6zAANzPd1SnwZRSnNUSTSJiJDHsHZdEL3v6VhbadVWAMeCht2C9eoMN6x5QnwoWczqrN",
  "key8": "3BJCYEkPvXCMXoJtiNP9a3BGZTtAV58bvFSmg9VoCgNsLvtRnvy6XBsZSUdzdS3sY1LpJzV1N4kSRdmz4Jsq4ZG4",
  "key9": "4X41F9Rq7eND6pwyXvCLiRkGECAoE1mSeoZdavU8ydx9UqJXJu1YqRHQtn1YHGpyPP3A8jQA7Qz8KdhRWNoKpWY",
  "key10": "BXCzQJakUu8DXiBR9AQxQPu9uuyXPrSKv2e1yfJpnayKbedvVcTQim66XniToJQTGwLoFkLxqHpy8ZG1TT4AXjE",
  "key11": "47txBmY2fktyx2R7ontWzdAxxUa6mT17a2MBr4Xb3WAergHpuk5gK4ruTH4fqtTEadTk8WqPSsddLNJsPZgggDME",
  "key12": "5hK79uG3USd7T8oJrdYame9xBWK2WCCDXMnzes3yrcsCs1o2DujjaXf4uBXW9GbfWdHBqfo8XUvEL5CPx6X3NTVc",
  "key13": "56Juisfwayvdk8bBgxrU3dLRHJicLqmwna5JVbrAgkLWAocbcuP1jYYGJvbyvPj6mHcRT12g7UioX5Dh7ymsFWw4",
  "key14": "66WyMoNdc2FRLTEQHBDkhD1ZmWkAdPvjiFwFGZvrsisaCbnzBFvp631HUYQ8nHHr89bjittr9RZ3vCHvPfTCjjcT",
  "key15": "PQAhNonyvntW5qHprdiQK94nhhjdUDN5X3enijSrA8Rh9H8zfkhApD4t763GnpJqyhW6dFTbbb6adzaAi1bH4wK",
  "key16": "3aho4SGLTmVkAF8sJcErtQtwqVpWmAND7LRKoVx3Lu6ZnrfHdoHeGfaty5yZZusyQuqrAcxA9DRRrgPf8eQnFc82",
  "key17": "SaD5DF9V2TZSWHgWEz8vQy3uU75CVNRxsmguPwB1nxExbT44Yj7eDmYW9aMXQLpka3TrUYdBnnTcq2JmxjV7A1f",
  "key18": "2Ky3pFbCCECrWmoQ3fot5VvTkiRe3uDncJ7JPXsFnaReKcqrJzbUbzqACBgYS6TAqVibU8xno2FJi5ypwy5S3Ro6",
  "key19": "5NBg8TfjqNZuzGvpFm4taoBupdigG4DF6Tr9x4zyrA25ogYWaAAhSSynrUcL2ed399i9ryEhzj5ATdtdT2my4S1Y",
  "key20": "2NXy6j3nJMqpqdRJHs69QP3gLKHiG5sHsKPkYswt2uE8GHuGniad4xG3BGE5sxkVR713x4BcSwEC7gDcF1q6fxk1",
  "key21": "y3JgjutHmATiU1SL2kxuUBQm27jsbo1hYuCojmoxZruVjDkRsKEjz6cuP1wumZnd6ffuaZ1La4XY9wUiBtZgu1R",
  "key22": "21Kh9h8kh344MBGnk8ZpFt8seUF3xrKVW1LMQs7mkYFE2iet8hDmDvpsHhdpJwW1ByTSdzDgVRNn7bK44w1onqE8",
  "key23": "2kSURJKLJBfbBLvCFy2ZdSQ2DWdNkoM7mTUjVedjxiirAMSxx6y5VrocBvWer23VnLDwJbqPHFeEjsGEcUprAPFB",
  "key24": "46P7bYF2CM3nK3piUEBoGX6QXvatNtMN9rTohs3rHmvTVfvgnFqZmnxi1yXEyiB3EDbwQnMejzsBmGSAa9FxsAW4",
  "key25": "4AkLp5nagEibD8K4zwFsdV7H6rkb22sdLV3NfXBemRCzzo9L4arc2fgXNPo6wEErWsHsjdAcXmNE2sDNKoquPMWQ",
  "key26": "KmkdZBndb7YLzgvipkEc6FQYk6MNv44swnf5eY9Mk2m9s7Yo81YX7KQDgX2kkTVU2TG5QDXuha4AfhNDQQdPhZb",
  "key27": "5VgTkuNnGe3R9zYiXEsXG3Tmqts63yiTGwCjZKAUKopUawaxdFZ8C3phhbMUg32x8UjLaZXwjMCx1nVH3gD26ypf",
  "key28": "3oGb7JWRcPMdZKqLnFXSNVdWfWo8RY4Vfw5qRFByjvDn98CPeZL5LjULjcc8pup538ff7FLaob9eSHxZechP1CbY",
  "key29": "3VUFu8CyN2iDJFW3dxVprbWug4tL4EKMU8WRkgfyXzvfL19kCK7ch2J2QNVmKQEDdGBbz4hDAvbcAcgoktJjpQZc",
  "key30": "5SjSghjntj9BQY5j84tJLLotMFrKrTD8i6TBdDgWKwZKsekTj6PEhBGtbE3rVGxbkB2zn85HLBbixcrX6ktTJyzm",
  "key31": "4Rh7pB3pijzFENShv7Y9CGXspG1rhZVj5KLxqhhhMGT3Ryn28k6XNkuoswH1cz9SnEYwX7oX5VzuRPELZhueLAWG",
  "key32": "5jtxbEFTVmoQ2cUmBNvCTTmzkLtwBXrzdfzDwDUeDzvoZzrL3M36QxWQSDgpHaZxn2LZr6NjiMD9sgdsTWMbNwg2",
  "key33": "YFuYmuvtAP6PGUBhfbrNKxbLxXcL1w1JP9PxFgCHiYqaUoYhHsVgYCNaiKK2TgDL6yB2QKeBsdrs7hJaNDd8p3X",
  "key34": "33caiLrPhkK3pcj8dU2KztXNgUpgpzhRe4a7u3z35xdCsF1QUyjn2S7kcztxJoz7qQumXiPveXRaFQyGpBmUNmzZ",
  "key35": "prYgeo9RTGC9KQz2wwPpMYCxFtN2owwRVRbEtwfjN2xMCdLJf9S8c3z1bUYg9neYmeyvty54GvBqEEZCZgsZahP",
  "key36": "2voYAazrParxQUXXL6FEb9n6Be82EauUgfw5V4NfrteD5aLM4ZGFDBk4pAFR9YwZWX9AcrzghpUg9cKWyHnXpDZE",
  "key37": "4vzYNYrV9r9CjYQ4prr6iiMpeUTa6R8NqWgCfeU7uegGZuKL4NwuNfpCkhzs3GyJ4cBdLM4b1kpbcHL2XDEfWmoY",
  "key38": "5BReqK7CFrPTrsoQLLsaAw25UWPuVPh1dCmv9G4onXfG4fSJHHa6TWymvm7HpL4Jvy5vtNS9QFBJa8ddDNquW26V",
  "key39": "4KXj3Rc3KuV8KQzewpWCfp1jBLtLe9FSgtXH4Vm1aRshmvuSBuNr1aWaUxTb42uuNFmQAXCJ47D3vDGHTYqhJkvj",
  "key40": "5pYZS1CrsQJjDvqtMewVP2XkvYW5gbeFvQA28awHZfgTeTYCpi5Ztrh8fQzd4t9ci8a8Eay9o9DDoAEo7dtKHxi4",
  "key41": "5y97vwA48a2F6giM9ryq9k5VqtbeJj61CtCB6DUXToRmoXfEVSUpMoYNt4YVxfnj4buNw8U6zoaZWgyFuGbcHu5o",
  "key42": "43gkowthLpUFG2HiXSpYssenL7MQMhXkZHd7ofiQG7VJ6E4gr4S7RwQE6uDgUQfHXWaZeCdf6EX7oebKMX3TJJQf",
  "key43": "3ssUN5MbphTNbhakngKxKa4bGkMNXw1XybKkY81FnDy3hVV22FiLonFrSJ8QWnGZF2giJ8VV3DCmPkTk6J4NpvRM",
  "key44": "5GY1XyBdFanHY8ysDUv84KPDQUehWhhkux7wjrrJu4Lap84E6XFc8EFzW95sRCn7yrCAy3426BTQssD456K81LBs",
  "key45": "nG9tUmbWXeNNUz4B5meB6r4ZHKa8MigmCzDWAozp5XTTWMCRdeSRfkktoFGChVA9KFt9cfJ7VjF2AyAZ8eE976G",
  "key46": "ZrFnoij5qodAKHaREEvAZJH2XRzNo5KFGsxK4nGGxJzNbGdg7HCDt17X81ZHLEgpqihboMiU8Bd2aQCiCQJTeN8",
  "key47": "3d2mVzyD7hddDrwhrTyvsK9AyhV5cADKP8KK7tsN9N2frBWAdSm3KwxBcCWKwtKtLk5exM9Y5XqJgAKARMMirFQQ",
  "key48": "22ueHunhkrvA9PM8UMjPgJ7aSGeiPWRVxd9PRnp2H8V6ACjocAPkr5SqyGxTNvgAPnET5sUQ7EpMf4GB31T3XF7b"
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
