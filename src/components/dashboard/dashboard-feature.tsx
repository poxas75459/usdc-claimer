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
    "2pp7wbT9FTEFzB66jhr19BAYETZY4jyTRXUzGajcPAmZQHhepqGjbSbgPSDmp99v8uoGEkUtN47VvG7LmQUL1bd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56V8XLGuvSGDdmDfqNH2aiMo3rHz4F2oKQHtnEexioQ41VzmJLZiz88iWNseUsVtoN59YokKCfGujCkkuHD447EG",
  "key1": "U96SqNBZPmNAqJL1NDdeBpLKaJPo7nbvo697B9qGRjXKb9hfMx8J7ajkMWdgskro94NNfPAMC6nqJSn5nDB3Cfh",
  "key2": "3hEQEpzpsX7c9Gh2ydHu2DApESbfjhEMQ1DB2eYRub68o6iS534pWjfUquVUpAnejpEvUMeSD7hoemLLWVQSXQY2",
  "key3": "2PhstpN6AsTVs5qvo9HNNWgq8Xxn3zc8cnWVjM6Ye1SNzVXHCPmXcuccqiNcLDbRYZ7j6LWpfCqWZW47kWjLJi6e",
  "key4": "ZeYisJ3r4ootz1LkQdiibvwPxAx7FGns42eqHkDr9odaYpS68G9y1mTBb24N15za8mAuPpiWeKMqvMyGGDrF5Ud",
  "key5": "3g7uwSeDFQFfyoCu1U2ZxSXjAutBLtxaqcApUwwtscSqD7sJf2L4eCY1JjTtSWy7tr8e8MuzStLxkmZbR952wFpu",
  "key6": "2joveianPMcGvUvKbHpY2XXcqfyHPWo1LRJaa5fuiDBsVMLWwYMh2uu6evD4r6GASNzUDo2aNvjNNmdt76PxJJpL",
  "key7": "2ZCZ5ozL42YRJZzp5ewVV7HSJdXKzS8ogZFV6BnRsttUY537f3B2WfWYnpL59VC9pbK1fCfXAHthyy5mDG69i7sZ",
  "key8": "3zF23cPzVjgV4mtvbKPPHGMi5wFdW9QV8bmuU4yXtmufwAivwUgsYPcnrXi627u5N3zVhMKDQtDskbxazSJmdhmG",
  "key9": "34tojriAXvmToMu8f8AanLT6tSLjuAwmLCsKUsBnH1FFj27D6o4xLaU4NsvAnq3FvfAnAHGUGy5pUscDFuuHUCkT",
  "key10": "3gTY1kwy2gF29fzZFJmSQQU8m8An34KRYWh7HQNqUPrHHKfK8bHeRZjnYkrn4N5Srba3dSv2WkpyDBopQjsYXJxu",
  "key11": "3AM3nyN2XPVSW53YRdLsde6KydgKoQ9brz19KLy1wjH1i6mTPUtpFhDFZNf199pHnekZjsDL9iRgXfQiFSe8yGwk",
  "key12": "4YJQp46jkkiXsVQ5qPqB9wXmXwLrtc2s9E7yKDbRs2k8MfMVfEsgt32eCKsd2j3yBTBfofH6FMM4UL2A18eyNdQ4",
  "key13": "eFmw3j7bXmfkm7vFewuxySZQ5PzjA1XTV5b2mbqjL5Q9AQjC18aZkgrbXA7Yws6bUiMxjDdNt6z5crwo5Zp1UXV",
  "key14": "285e2EqGZojL7wJ3pAviEDMYQ1f4cLUaW1E5gNtSFzyoqe93AruumgNxD2GHmgjH7fKBZ3LbmFbZBUszcceqn99J",
  "key15": "2KYfdNqjHXwZaicX6Fj5E6gGyxFetxa3KnAtBw8hQhXm1kocxj3MxQznmiav6HA1zK9vkt21dbdw7djK62aduMaP",
  "key16": "2UVAoEuVJTMcgnGXMc227xywijMzD7D2k1RoxppLPA3wrUEwWET4DA9gVgF3q7Apj5SarrgJ89e7sDYMQi3JUrQB",
  "key17": "3Wdg4KCWJLvrz5WBguQrLr7jniHEDUrjFnkpU7JywHW74UETWKNSBuQ5oTS8skMU7vuNq5DJGn2WkKHd9HgWo4Cf",
  "key18": "2uRahS4CndrpyGvzj7NyW5gyMEbcd67x4GtKcJU9wQdQXisNRgA9fMwWP4snkUg3as86N2pa5uDDpMQfSvx8a9F1",
  "key19": "55nM8WDdW8hAya6w54rd8WQZRpxmSsiEtujHpqvPh2Fvfu5JvZjfj7sDdELnM8BHg7TkRRXRaAmA7FnaPwfm76uj",
  "key20": "66BWGbPWceSj5b4iLYbMb8KGChpJMwdAmHxxvZDYTejfpZSNug4NEpxHMYvcZd1QMeeoUVdb1vCmYvfnq46aQSW3",
  "key21": "35CE4kv4TyDzeZg2ntLk51f46qYJmnevZrZTrvrRiER5ySzCzwSZvDjVSFCckvsWRu9jAhR9xCftjvzfwok7ovTP",
  "key22": "2kEyMnre7kdKB1FbxVMbze12pgRRe7DofJ9qcZKa6HCncfS6pFZecLvZ2Rh5ZL9mEE9Ro19c4iYjuuqUw4vuNZBq",
  "key23": "2r6M4LBnXzPTzkegw1ZFMPe2V21nxfjqF1hwGMphRLm7R3uoEi5XLgCgTdQsANWuVJ4R6PX5q8u1MwR3nuw2nRMw",
  "key24": "r14NwrN3JdVmWxmekNcX75i65rTogNcrReY7JSvp5zPFKxKhoqETURH9p3U9xKfq4ySHL3tkthSKGYqR9FfPipC",
  "key25": "2Z82WQNTi94NvXbo5ut3ceBtYD2jQHQu1iWZBi3jh3ryuNc2bEJtT81wQYeGqunVv6DVnFSH2bsL8ZvyyYYiaTrC",
  "key26": "5E9WV2Cs3mqdWwMwxpGgYJikJ58snMFDRKuvaEgXqGwz8ybBijbzHvBo1mti4WLj25Br2PnhtMvMHPspqm9WyUUy",
  "key27": "5oZiNVbqeRKntPGu2QgxaUjPvszRt1N5XWQLTSvjTbWvge8q68Yjw95VpKCeYrqrsR1oPbgFwtSJ2v2c1yUyeTbU",
  "key28": "vUn68MLhpmFqBWYLuHYjTE3wpiyfyukTQMjUrQ2wWyTaDejWokiThnXvBuk6YK6WW8p7gAWSzcZRZMb1Vn4cpua",
  "key29": "khDcd3nTyxrsZ56PG29hsYetpy85GRNz1rpdHfksRsUiXAqwKiobSbdSuZsjefDajwNFtSBX7jMhQDkHPQqo8ob",
  "key30": "MCeG4Qe1oTEx2YoPf3DBpqjxGC9gGCtF88TF5XZhnV2WtMsyNKGWYz4sVcRb8SuYDUyJX5VQgXifXsYjCH513v9",
  "key31": "2PJQ4AH1doQb8fr946dEkfnczTsJ9rK4qBrVh2oR9r4KjqNhWBDn7pfLKDmLQDsPhbHWUJ1DvxrVoYd7bjw3Hm7U",
  "key32": "3jyb7AsJsxHuZ5XACLNqbGLDkC3DR3W3BgWfEy1QBYcrKgekvvNx9DZC7CtFcZZTaM8jYu7rTFGXZZU33cGr7dDP",
  "key33": "ah15XWgJ9HWcqFW4Q5NQfutWuwvpZSs3JDXX9bR7JBpzik3MUhLxrYA2CpjofEwc2PvQFdR4EQu9K3wDi4roUcb",
  "key34": "wSLThtJsxoKSqCTdwJwhnXg5SVu1xJbYpBHzqQRiTVzpuqGR7erVZgZ1ADfQVvwccwN4EczmBnEKF35Csr2nFCN",
  "key35": "5Vb5k55StSzvcj7meXeEL82Yrr9uDdAhX9n19PaiaQD1idEKTeCE5Q15eQtgKiCAs93uCakZUEpoX2uChPzJtBad",
  "key36": "3FbYFMGjWDWTVNMw1vTYGzZ7uUM1CYs3NAi5EDJqBJEsXxEcAKuZwMq2gi1rCqpzB8QeUZok4E51yiDWG3h2hSmV",
  "key37": "2v4m9saFasr5XwDPCUjhk7Dfq4UaAxtNGuNAo9muMRLZX6Jg3FBvNMfrVjwFN3q99FGR9zS2GJCyYTz4dvoU1Qbu",
  "key38": "4aoaoVMh524we7sCxMNn25xbS1NpsSq3GFLYftJuWBDfQGSvs5ZHKvSuo8mY14iztqMHMuaak8ztePWQiAS8jNM7",
  "key39": "3HTKvzApUZfB8SaLFLX4tG5fGxhz6mU9JwwGAoua5sveaNePgbs9dPgbMAUNPdJmniV9ag8ashLQ5hgWxSjQt98i",
  "key40": "hAohtnXnCdGFWMzY9QmozEcnxncSWkLJHBEQ6g1AqDY3D4TCH8hdDBnmEWQikKAuwxt7E3tke6m9Eumf3CxY9zs",
  "key41": "4qwfsohj4vqr3siFkZNKPxYcQjybjrb3G8TWSSWvGKUfxYre9Wrv3Ew4xzbM3zsBToQ1d4XRwzf4AAnJKqd6Bt6t",
  "key42": "5P7ER6hVM1uJBVEMuqasEYSUL8kNwQXtJuRw2SHCbzvB2AcY2mX7ZFonmWkshKwc5mwBp9mec3W61LqidknwNBBy",
  "key43": "2XCzuBxFxbZ8MrAqhAnTS2M9mYcY2QYRxHyuh96u8G4u5DmB6UaZLTT8VRqCYwi4TncgFrDpT7cCndzZFNR4HG1W",
  "key44": "53M5Ynf4WNVwsd7eBwHWyVL8gffPrMfiCWg77i9cF1tcgbHiyCXrcf6BzRqZbrNSwjDQVYC74RwHTJ37K38Bkkdk",
  "key45": "3fAC5M1TP4p3DJMLgZbpY9MYLX3M4BQg6kgXX8aGZaPCAVV2EgnTspEXv1q1sTseZ1Gn6TP5sp1HrNLXG92WAjwu"
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
