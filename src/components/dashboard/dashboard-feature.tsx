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
    "23wtTZBZd7zGA5qKpmopm5QEeJQ3S5bJ9ox9Ubf2zigLSFD4eWtPLsozwnrW9qpe1XR4wefEzUXtMWSEJuR1DJgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ojjt3eieqoESAdboBMDz8DV6Dfkq3s6FVxUjoytskGgNjVYasngXpWMyNT7Vfnz4TbE2vJmD2f98EXHFz4omjru",
  "key1": "4stq27M93H37cUEjujo4DDjKuM8MA1YraxGkJMFDCMB3BVD6NTB3ZHEsb7y41rVLF4AGJvvGvRrcnRmMVNqtvgeT",
  "key2": "3jivFuCRUcbbXCqYw6FeHEEbuynhi8E57rw6kCfxqdJx7foLCyyaMKm2WRbYA1b6cJwh12SS7hWPvwM2DdP9XgUs",
  "key3": "4jrWeUZtCNzxmzNMpKghWNQ6pXH6JekGQBe2E78wPsZ21FXPuthVrPFmtA553DJ97gFU2GjpyCzwgGka7wjGFWHT",
  "key4": "2eAeFqbZQ6tjgUVxDE9QjHVqxQpWHFw3QjNKXvk6wdGEtxViMn72BFxyUCf32gSL3EGxyyxwDGhWQqhnsXyJtwQC",
  "key5": "5fKK4naJn6mrE3egUHfHKzuYkTyPJNgCJjRhfs32Y19w6dBLfnVhvxu6YvkfuZPpZB3nHN7sZD7ei5nmS339paSU",
  "key6": "5227TeUtH9ZCiNtXLyeBesodCH8KnPPUJoRrDZg1TGrPgEZYjuRCi2TU3Qo18cqWeizXjpaTYq3pLPBCDoXhkuqr",
  "key7": "ysboaiZFrhbRpuoNgebKLq9JFjzwhW51bVvKJ4ngmQ5Ar6MDZqvHPM7wkrrn1w187M4zyJPDuhMYGpNoB9u9m4J",
  "key8": "4Z9R3qeYgApd3tnaKmKNNZYdg83XFL9B8AQcsKkHzTH5nQ3vtaRKXQjzXoyYHR4tDj6M7ShJi6FovPhp4SGJdUmB",
  "key9": "urMRrSzBzQZVmDEMcoB2ga9fcB9fGoBCbDTA2KKzLnNq3p4gexE3kzPyivPVdKQZ8uV9T4Q6ujupLTqZVvB1io4",
  "key10": "2HaK96i5yXRpWSGEVaid6NmskSBuDquqAwR7yx53XdyZBzBSVe3dka2uirbdUjSQUyP8z8burr89cxBSrFG5RLBN",
  "key11": "2r9B8mfZg7DQfDdyrCGp9sNr4tDbkK7cDNxDRLCYDaSBcdWiGM7keefmCmf8a2zoVnTZpdvErNaY5C4TQacG2K1b",
  "key12": "2n5hcbZoYjmbFHXFzfsHmzxL1x6ABYGwiPWaaLPgqcaobgp195UVgfYTwje2eZRLcTYpGBeUgyJaCG3egw6itgiZ",
  "key13": "4C6tP7Fu9LC8JEodCmkhK8FxuJQiv91DfxQx1mUK589mj91SzBE5r2c1QqhEU1rgHdeLwK6rsFye5bBxyaNNbTbW",
  "key14": "4wMZvgtu9xhaNaYak2Gb9juuuiczqX5F1AiLbRL46YGdZfpchn4g3nzdhf9bXRrDsdw3CMqNpshKvDh4gejied9S",
  "key15": "2DkLQZGuyP2isHpSnqxgUaNAdexBFZ8swH7WtbGVT38GXnonLQTGbyF4u8qyQhCouuumBhM6cqiWgUZj2rsUZAiF",
  "key16": "4ZgfDjbtwo31uQu6qnZ4ucxbRx37CeLLip3o5T4w6k1Kv34Lfoi3ESce16EphTajiwMafax3QGmScLW7Mypz4NEs",
  "key17": "3qCUnedCQ3NeZFter8Ac4kX2rdNZU4jzCg42TXkXYAf9sA1rS4ey5PrbvRgE5K83R9ZWNxdwuCVZStw86TubwEu9",
  "key18": "5C9nm8VG2aEmpqRZvY5mZSMait6GTbs1Auq2c4PTHVRuTMR9wptHzKHkBUwQiSp7KGbXG2hJcHBHjeY1FSUQctU6",
  "key19": "3RUcCQmBWCMCh7As1yqbvgtcDsPj56TyXyjDE88NcuFrMTXq4iHUrg52Z4ryv6wNsTFY9aNTSNm4LMkKsU8aZKay",
  "key20": "3Rvc4758yefAmwCJTE4p5jJ5aXYGVuh4CRmv8UKwVSLej8uFA4EDnYGC2SBw4Y5et3szJdXkPRL3BQXmtqyLgS5L",
  "key21": "2ZaEKz6LDLAUPwK2BZwBHhT4r4mHkcBVM9nPHkzezPfor1EmX6gn6e2bxAZM1FYmHuVGGFGpj8QFeigYEtuU2Xcq",
  "key22": "5TAUBYNWVEiEistqh4iBDcap6iCSRdswfawpi98bf73kFk5ao8r3BnC6nJriDAgyMwK3XCYzwWGKoft6LwDPyYSf",
  "key23": "2FLyeQma55ectq7NQ3x6o2dThpPMMZDzzfWQThKyy66YfYKyeSEfU8bZiWu6smU9umgJJ6S3WNfbCKAb3Y8Jd7E8",
  "key24": "3hBVWbAj48Dx6H8LdLCR7VWseHkiQTBshBvuhKs1B6di7iVb6KymmbF7DgsJuSB5biG6SCLMcBjS5qxE2CPtU1qo",
  "key25": "RWTeZ11Qa8ZNoV2pVT1HbhiRvuAx9aLZk7eA5TvWj8tM1eXkPjrhNwCyLPRaSr6bFjqQJcipYHr6ziss3CKFU9c",
  "key26": "37ypGQasjhNuAjUSLj9yeae4Xx2ibcigrFHjptvpkkwAXdoS2wbgkUtJY6Rq5kB1v4Zau7w7aQ1jK7RBCLvRZU2h",
  "key27": "2JxmG9DbXGqAYjLy5j19E3LXxj43RKxPKS7YDuSqBWBMveNRrkQ5NMjh97ehzKZq4TKmoDYPtJRogca3Qa65VkfX",
  "key28": "4o8Ay6wAsDVbP4ySqYa4UEJSJCe9GVapbF7dhNxbBXkhfvm8kajrgpVqektgJbxZZyf1uLBLDptKa6mbL3LM1thh",
  "key29": "2x7U1FNySAsaMq4ubfRGdoaJgomDxs51xL89Mi3DKk3FEty2ADNnSCFNC9FfVzeN9uABuGUjSa9XawRZG7zaqVRx",
  "key30": "3NFYVXUqLUt8pLENHD7WJBrTmua6HrVisDbYSMAZjHSLmrnYmcMnnMesFtccJzqvWSWrFXNUj8UhkzVs4FxoXRh1",
  "key31": "5Wh5RL61LGwhmSXwu6b52GGc9uTXV3HbDE3NHp9Do1gzU8X2x4XFJkqXbAeWWNmKdaXVvMJfqCE3gMxLhQMn7jyK",
  "key32": "5yBroXPpjoSNr47c5eLddVEcqMX1ehAJWoQTsSVhosTfeNgvkXCArUG4uHKHx3uoRWe2ThzQWEKDGmYpRRefPDqX",
  "key33": "27gtfsa4TkrZ6GL4Xggqr2ozu94sP521idHoAP4gpeuNUH7CH3avVLycKnTcvhB6rbaJRSDkWjwrEK4eVbQWC1bK",
  "key34": "33Cyvd9xCV9Hu7LaYJWwPuXoYKVZ5RuzpiaHeRxsXEGNEqsMfb3naBYtoJxwDhqyghGPofgsX6aam5YbDMWXq4T1",
  "key35": "63EMaaSKRvXkZVgyaYoUFdWTzUV4A4yRkMhgBY63iF2xhxat1xqZjewoKucWMwDp4PYSCBHrQD9K8DPv8H2hSfq5",
  "key36": "3kR8dkmf9C3FstQMJStVp279KLXNBVoqy3nmbW79E3QT45YncXiWTCDEQQG9Gs97B9YdwC68rBWdK1AiDz3xE7Nm",
  "key37": "3FuATuXuRtunRvKaMYf5TSfKvu1Xywf2oWVoNyjz4uS7cgGTfnUEgfoVqfKJWMVyBmpMRhTdojv7SMc4Bk3Gd6kN",
  "key38": "4FiJfMfDzqr53i9QdaEFSDJTr9x6kMsMezNskSgwvTG5XehTyHvEezGxct9dUAYXRMevYM7Ak9X4wPgiKV2mL68r",
  "key39": "29278LwfJeSNYfBFEt4GYePtyPdMqoPuefh8J7fX597X9SyRm4FQc7tnFfW1mCGhMryiMAoSxGxCr1UUd1DWcjgH",
  "key40": "3xHYstaewJptoqx92cCTUJn7ybkYPmhURkmx5C8w84kjx1UstBuyU58jJ8nYfVBB1dQwv8rmZh6LeZq2AjPBrAnj",
  "key41": "Gmanq3SyLnc9uAwufUBT8DJg5g5rc5M8btmAP1JAJziMEmPgUbisbbGLHUbsSMV8Nt9B3kqbysjFfUufZJ8PQkP",
  "key42": "3bNcnRx9zbyXbTAPyEzvRu7ceSPE6oPgLhU3MM3iteG42rR61YSFsLdXZJBLd6CHu9M1zMES7mtmP3j66qF5919i",
  "key43": "AbT2WUMepGD5SnLk4fhZHJXgpZ3vHYoyT86dGkwA2cUiMP8LVNu3xLDUd3piYCT3sMRvN3Jotni2XoQZPPLiniU",
  "key44": "5GXQDt88HgKBfkXoTupjkJhnhkrbkyG4dQzagCKxBnASfBwokUoMgZjRPfvXotmJwSuDprKbhznWkhkXDKNq7d9s",
  "key45": "5FSruV1AmaGa2XEbVKNpwTcWDeaYp8Nnifpg3HusVh7qNZ8ZHWCSFL2xwfgtkbjfxFgmjmYf6ZCAmVbaEiov7Y1K",
  "key46": "5ruyrrmVRi89nC735NxjNP8zPrEnoT8XqP2fZKuLFgdZcbY2uSCez6vZubx96Nq1r4azvtw7td8AiokYhxYjivv2",
  "key47": "gf6vfZGABf8j7tLS7eVYCQQXZt8XgDmUbYqnuAR1iBo3jBaPFAC5NPJzSFBgrrZwmWYciYNbUxXX4Cep1N6pqNW",
  "key48": "2y1uoNewaPvT5CcHtpH6Bx3cgTLXpmKFXPQNrc16AF1pE1u3AjeJDgUrsMP8ikn8op5qC3vPMUfHmA5Qdc8RTxAy"
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
