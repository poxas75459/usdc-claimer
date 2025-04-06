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
    "mFPzY1rLq9bmWAAwDE5oQjRejYnGBGHjsjb2dVsBGLGYvHzXTvndSrgFebcByzQ2JBNd6sPaemtVcofJmem1pdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3cUUCMnoWSfKqiqYv9mR4HP9eRVTYRnbCva5ivxT73MfCCXRpbq5XaGb9kxZZd4Kmrm9jeDssfvEX6dD6pPS8w",
  "key1": "3DAN7aceHzhjkHgPZ2PpR3D7gxSqmg5Kxy7FuoCus3qLU9xPBLjMjhaf77mMHibfJvVv4d9yaxXVdAPo9Zbryexk",
  "key2": "2aBpJMEZnyCmKmK5WnqHFUEnhfrmDFtLy5Ehg38Uadfr7sojKStRWJriiCSv2vFtjaReBgyAE7dZjBnTToACkgBq",
  "key3": "4CHrNMRyXbYFWNhe1KNk9Uv79fRY9sWJkeLbmnqHjryE8mseAZiE5UVrVwSiktCgueEew1TqD6JE2752KU6oHN33",
  "key4": "4ht4KiipXB4phNzGJRd1RYKnAbH29ca1JPf9azBEvL5U3hesLh8gynPd7zKDGTzfchYzLUpnp8PdSXFuQaLK7Gnk",
  "key5": "5q98jjzdby4oew7QXfTvM7bxdhcgCGeAoPoBLfCAQvD5aNv7QRDek9ZWfRgrr1yLaAfp6rX8pJj4PNqFCaF1gEiX",
  "key6": "5A666pyATtwndF9MAuQy2ZEomVpfXtqGj2emdf3pL1FGVYYfXo3ATKGK9SVRxrNnhtsi9SsDRTxAtUf2qNH1sG6a",
  "key7": "2qkq2M7uCVYkTYhe6Ap2VQsYb438PsUMz7YbovxMju9Gw3EYC9jTGBSJqR4oQQYqGbZJs2NFvK3pYkzhvVHHAeM9",
  "key8": "fhdLmHgTWpWZD8PB5AKAs4gyq2fgmWq6aiAmvKyRtxruzHS8Z1pm2XfJGA1iMgHD9CwkpFp2KBZxuMAhDbxTu3f",
  "key9": "4MvwHpyCYsWed1E2Jjhj3VYpRirLGqWDH5qpMADYecCki5Zv72SmGBeDuvov9tb26YotA6nkyTAgLyKTNAtQxcAV",
  "key10": "659XaHokhjtEXCcLMsQMcWTitkZ3GYX5HuW464ApvjDsDR5gbbaCyPDWcwh7BU6L9HmV7crFXdBbkJXxyjzAoPyY",
  "key11": "UzmzZsovMpaN5JWwB2PeNnddobxvsHhxNgKLhMHXNiG4yBo2GCQtrpyBjuF1MonZUCrFX4saArqEFyr9Jn8kVuQ",
  "key12": "5nGJzU4Z3YzboqRpxiRP7TFcABDqQtTeeQ4eiLfthzn3e5ik5Rj5RgUWirWYnuquEH92c6XUvHi99Peq3V2DDfuw",
  "key13": "4Yqk6z7GwBLsHbP5WcvjFcaeVgg1TKyRhEdq7vSEVAmKuroXvECVtk88uQ37vvG3DN5opSzHsUJJRTxR5azBTGmt",
  "key14": "4yR4eNf1pMwPYUKydGicHQ6wungRNTzfHZjdwkKX27dr9TZCC63MXVPvDTutU6v3wgYXZ2NTu8iG5GwwSqH1gyQG",
  "key15": "4i95ZdEXsKD2aAVnw3ooQT61TTXoNgcEJ5WEPuvd3UrU5YmVgJBAAKZEJFnLdEFc45GjMFv5Ynj6vGrvgSumnzGM",
  "key16": "3KQGPBgdnZd95prXk5sK9KVDGNH8mqBdtwS5tTvuhK2J3mMxofS6h6WoJZtwNef6z2QYP1LoSD7AqzZQqhTxa3Vh",
  "key17": "5gC5tLjCmrHv16cCGgmLbkKzSamPztdBiKW9MzXij7HqVuGbQgtxd5mmSKd7sYd5hX44FwxZCNfmJSoj9Pt6eL5W",
  "key18": "2Lkjco2gjpTq1C2DgywmS6s1cd6J1q4NL2m61yjJPB8qnhmt4XHP2G7MJp1NDdYJwmFW8C2cM5E9LLp3NZTV5BBF",
  "key19": "4RJD25vk4E7TkTQyvNmpfdabzKtNCe8NzRVRyNztejLxCypHTEwbH3ZDbFiWDe5D71LbvdxdBU3ppyUcqxmhY1kA",
  "key20": "66B6Rfk7H57xXtz9yc3Dnue5ZGbkQZvrxvcogsjrK5RELh8X3bkgV6HxDbrx56mfQUj1fKvct7iGSKmfu1zcSLse",
  "key21": "jrmbb4XkxaXfvYT1dSLiCqy7sht8ZeV8zkgxZo1cw8Sge4TuB8BpH77r4Bs38yAuDawWiHCjZiaBfPTiLsNYfK9",
  "key22": "3G8mrTboh5YXAiEZeNkypvWQcx5acTKiw3tidMui9eRgoiMaRMC5qx8R9bAKBeLcqXZrrcZseDccaR9tGfJHhsnE",
  "key23": "ttEVUom1JeF6Ck4cUaBNaU8MEwWSr7ok3WjHoLGxeuzMDcZMpovRvUjWMYkS2xcd242RaovSCZc5LUfKzbuK9A1",
  "key24": "4ynYKb6nzydDcGzQ6uZ7dby42ghoisY1JEzsccHMH1kFRetQfVADzCozxQtb7T4jbxpPsLvat9xnYacvn29DeBMY",
  "key25": "5fxArmoYQvZw8r7xcncZBzaQuG86hCh2rPBWJU2dFVvoSr6tQdzimGH72ib6PBYErmimKEse3hqji7tiGguh6Z88",
  "key26": "xX23K52yg7EQShcV5bZcTYFdnik2Gvo1akNyW2nh7psqqPfU1TbysLCg5stnc8nU2dUTYTNhb3q87DLbyAo756v",
  "key27": "63GpNr48hqMghdNwQAfBCA7FKkWFjnukpQySg23QGYEgfYPg37BGdV4nEymGueUxX3EmRp3W8VNgH7yJibdSXtWz",
  "key28": "2ZPnKEgthZA2pcTQfBA1TxkvC31v2PDFuUjPs7jUthSGRBXfVtgM43ao82LJos4hdESfutUqt2kuYzTTisSxvrKe",
  "key29": "2EiV2yzJ74E4Edwk76Yp8mf6idaL2zaw33FMQPuZdaRnRYjS7inyrfy4CjMRohkpVZsDQYHzehjJWqdevLaDNVQR",
  "key30": "5LmkE9T5oBjNoVr4J8dS9XfgrrHp93GQ6FoK3NAWGq4wKmhSyRgi6BXy6LWYwaMmcwNntEy8kTJR3ZTgh3aa57A5",
  "key31": "njbBkLsuMFwMhzr1NdANcxAKuQLb75HQie23knXps3SRj3WkicXkxnivNdB9KRMuLTihhXgb5qjbQQdNZ1C2TAC",
  "key32": "h9uEK7qh2iVqqmL2BrfNEW7Uye4hUNQVQoo9uv7Yuk7Ni33zhZHNUjUJJRF1G4sKNFhf7iBi3jaUcPkK5gN3S7h",
  "key33": "5uKSySrv5tjw7BYiTJZnL8e55mRrPybMwVU6oDA8rBgrKa2WwZ74GcGm1H22JAVLmF53KvaSun3GevrX1114Qjh9",
  "key34": "59EgjNy9fbxHqXt1mqhMQYBiL3QPm5KWWV384Sk6oGAY2nxrYUPD1kBMQ6dhrC42gmqHz6tbA1mk1gLwVz7BvmBk",
  "key35": "3TCje1E18gSKZqaNioDSFbR7N212xLyUS2caPnq41ihg3LLnyNQKXfQ7V8GEGkjKXppTk9c3foziLXa1EQq8KqFx",
  "key36": "3uzRSGSk1wvRym1o8Q73KFp8KjbYLdgmNB1Jacj3CoTAgvjoRPxg6ucaW6KSEm7SrHZNBHxwPZRMQp4FYoLSae16",
  "key37": "5VN6fZw8ywqJfnPn6YdRXxixdfBHjtcMJk3k4m7Geexbw1QuaRqkP1MGjfpFTouddUAzEgKhLsKpPyc4tPachH45",
  "key38": "51HKrbVE72ZB9vhizGqnQ4z9rFGKC6CPZTrCroUYXTwMFEx9QqQ75QSSq8NHwtesCgsqZ7WeiUecy5Ch1TMNyPQr",
  "key39": "5JnR3JNem3PSTp5os6HzoDdorDm9pwz43j57JbBrmTq6uCQ8JWosoRDC6Raf8KCFTgNSjwHGDyJTfKRvYyyfARyY",
  "key40": "5DpRHi83HdHjNTXagLKvRcGUU1V6TQ2VicFJXw1mFSue7uuv3joSYhBoE9sJrf1Vm44jrYMifS6b68z98fGBoB1o",
  "key41": "497NFEi5C7x5Rj6rZ4vp7fUkL3aLU5XfKvV4VejbXnPL5hkXCyQBW6qUBeV6EEW87ffEGsyd78ZnmMmJwLoyg1bE",
  "key42": "5oJ9hmkmbEu4fcCWYoTQNxMyG1v9TBPcP48p8iCdQcEzoTGqAKbqKvzEH7qhwdnnajrUsQ9xVTnQ4Y4BinNeh4Eg",
  "key43": "5CbxxGRBj6k7pRqhQkbjhsAKYEjtx1LAHrXEcCgjiMc4bvoiZscnyGfjrnCGQ7Uk9ugjeAYw8zjaXtDbFF2mmub5",
  "key44": "QvGUs9bRC2e46TAbvoRfZWEMeqvEoHcEUn8mWZFNpenc3h6HfaFq3rWwaxNVkZAZA3fUnJ82nqH64QHVUqGGBpJ",
  "key45": "3yy6FSLiNPQz5HQHhsyD6taKjysc63sRibUfFvqmc7cLR8FEhVPuZv5zHpeVL6JisSz2wD7RHiY2QmRFJBFaNQz1"
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
