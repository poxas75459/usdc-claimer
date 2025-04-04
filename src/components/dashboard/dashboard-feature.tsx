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
    "3hL6XoxC1enSpcsEgrjJVCTpsWSkbNq1J35q3s7YUpJaW3yLkwJy8Pz72MMRjJ2UwQsnU2bm6spRGVaFnBy14zRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y52he2NqdAfETZDkU3dpCCVPCL6TUYZTLCcFsf6Hn24nL9v1ckbqFxWYc1Lcg3yUYHF6ikhGZqhjzyGURnpJ5DR",
  "key1": "4PzkmSzJzYHEQ1PLhud9sJDFF3gH7qHnx9wzm5RxpWFPLiJ6nUFiDfyrsZmoZttb2ucbv99CzRUDg7M3WKQrnyrv",
  "key2": "3zD2XzCcDsVvwUNoRgiZCFF4V2PQPK6b5M4HM1AwFnGfEjYsdhxNouVd4CsiD2TyoGanC5JZddchjERbJnM1LTaT",
  "key3": "Br6x3bGLwVH5bUbhWSnG2QPE6vdkq7DccG6UdWYUrEuJPy4rqvzdx3YiavKmGhWZTmnpaAK4dgYa4WvGfJPsuzQ",
  "key4": "3xKEQPoBt1FhAkkHKripGKpT1pDKmV5dvjhpnuwm6ApCNXqizpJtXDEsC9R2upvaKVdGf4TrBubWFVyLyKDgpe6a",
  "key5": "2uBMsdqE31kRB8jjgudKZQfALoQkQTQS49YraaZ32zBD6oYkRoSZ5EzcuC3WGZaCokGXrHUXHnZmZJqrwfM2WnH7",
  "key6": "5xTNs37hgwB1G5pqn6wmwjeQNj9VPPBMdRcdj5eUtovxpSJeXWGaGNfLbrWaajc3ztP8Jz6uigrPN5aUG1Kk2hDY",
  "key7": "5AVtybLjMqCGCUN39oXcrUJZwt7fY8xg3jZE4iLeXyPDzn9q5zeA54VfPsQTRfGfHXHZMz3C5Eakqjrpoh43DVmb",
  "key8": "2qiCdPcw9rXmaMHryLHD4TSc9wbZpweeLki5H9ZcSM5NbK3HbiqXXPGXzhdrMsLWv8fL5cB4eVK62LcY9Bc6p3S5",
  "key9": "3iPLQvCMnPxvZFf46kHgnCTWU3zUHivzTGUfeZv2AH9VQt4ZwFniHAiNfc5iQsPbbRfENw6GiUbWr6Cnt2ajcrs",
  "key10": "4hjS8byCgQJmccWKeWLf5pjwa5owdrPVVdKMRpx815MKKuacA8xvkKskoTSNP2TduSAMn6Qe3e83RVq6Vc8TRmaJ",
  "key11": "5Jrrt5kZRPymfKs3HNFebP9ScHnUznrR5mvQi4gzKDi1Atv3Xf5ER374xEVtMJ3iLPJVn2qEQMGaw3xAcL4qg2EA",
  "key12": "uzfpr8eHrqHSEBKjNbu6QdsAyqirypzPKkWYpxYopcfnLXYHtNGR9UDMgEPgPy8se17q93pXxyb5pUtJeX2EJYx",
  "key13": "4AF2CE8kqHmBfrK76it8G5TUYqyqsVkqHuSi6CTGgd5WcXMcY5X2CZhSdtxNQvRzWQycgdnAk1UsKkeSNhaJNJSE",
  "key14": "4Je9tRZmg1UeLY2z19y66K7yHndb9MRNQU3Pd6kuwiRQVN1B8hHZCskctTJhE7GgtDd7855MftEqCAB1iHVgxH3z",
  "key15": "3tMk76FUZQbiYraKtxUcWSpm4zuJs8sC8UQFi33SSDA3dcC9K3ULgqdYDZG1KyXn4HEw2LA4M6ULCijpXMkGkQmr",
  "key16": "5dx9xRzu5Qt8ZvVhqXCixFGRAmekXD7dSQLfH3nhc1nmLWQ89NhnVCv3cPbfYDtAXppaHPxQ1vH2eQvcPpqeuxDX",
  "key17": "SrJNTTXxWM8EqvBjJVTJ4tTFY41An4cUiNHeBq6WgGYxeY86iDu7rHouxYVfcAcBjAevuxPpQUkHVx2yA47Ahmw",
  "key18": "2YePMwoJAuRDMYweJnxaZ67wFwWB1X24GgboEe6EdJf1SGfa5bBs8Tj9FPjm3ogSocdba3h9XkgDBJmTMvZDCNzq",
  "key19": "QsRtTNGLgLi5VbwKiB3waWd8MPsoLonBj3rStnCxAiuUQnsxh5Nux2RVF3qLMvUBU34q2doJ7dW9jDvdS64Urn2",
  "key20": "5uSYjjRdDTX913DLpZg6zH7KGfvnkFgs2jYTM4qAHbF2kaEk5gMKMrjYYtyKWUGYS1mCKKzmQU6t66S4vg92aULY",
  "key21": "5KrRao3PSenDgxEnJeyTn1o4M2LnSaqx6dxQvmqH27xLa4vwsw3LFauwkomJtTbkwGKb7khH8iUhzQks685EFYuk",
  "key22": "57Zo3yMB1MMhe3GN3GpBHT3FCHmrkwiLyWAiKAB6J2dJY9KpkK35u1Sgf81EBXhALgu1vxDYSMYV19Mgt3qZBBqz",
  "key23": "4uqsaKJfizurWPRqUkXzCh2nTSKHRsenZgbzUsrMCqt26yMD8GJF2XMyLzAk5cQffHWQ3TV694mXLdLaSyFg3j2D",
  "key24": "4ho4E4Fkg4PnkYdDz5uAp4vQwXt4qVhm8MDs3Ah4AVEHXVEVrGTyGJTqzwTP9JFaoLMTL7WakJaQyovfFdcJZzUG",
  "key25": "43hm2YPqmSooQZVprQrsiAHw5LdKi8zPo3pkcaoJcJeYo2RiSpeGJKaKCpZJhAfGTN2Vt9pyQPP8zyk66mRpcUkG",
  "key26": "tknp7xydBZsh2DGGUj3iAxsYnruoQTSSTu4tTJfdjQ8DgBkDcLyWNhszXMgSKFGy7FA7Eiqy8kFxgKm5UN4FnM5",
  "key27": "4txw6vm76cV2LxsucwDGfEX2RQ8mdY6h39a19KfnQwSk5f5GSiFKv64Kx6Xf7Z3BJLNgEmAHacikWNhwFMeFw7nh",
  "key28": "33MRwmXCpzrpQ7GuJG5GggSNCNqG2pf7wuGoZ41Y1TFfYud5P6aSLiugpXfK7TojxyL4CXXq1f2BwWyd4w7zeDsY",
  "key29": "2CScDQgaTt5C5UKNPmZFA4xYDRahxpp9RysoshUaThdHU5h75tGFXzoFwW6UxveBMWwK6HeczatLvFEbnvfDppj5",
  "key30": "2iRFc3aXoddL3mt5SCBh93eekkavwPuLEoRR9vLMXu79Z3R6LeMC4n4ANbXinfuT2pM6xp3xBa4H813yfmchxRmT",
  "key31": "1jPF8gvLTj3AsTAKmeKCaZu5YDDUubwTDqY2FL3XatCbRA6tCyh9YG2m5RDL56gGySMK66Nw4sHcdPdvR8PVBFm",
  "key32": "52gfrHzd7VRu1cyWSVv69wXuQLCdwqjb8wyiuXKvS987ej1SmaKpzcwzTmfLF5UZ5haE6ZVKcE7s6j7kX4ZFEoav",
  "key33": "2itUzbp3xJ5RENexBxLhUTvD5HJPKmWWdR4ue7P2RJtHDV5eRpAYM8wzSkU7dSRYWjs721njSzKu7awCSiT4scdN",
  "key34": "J2Bgbj763Kdw2cZCHo5fJPgvXHyQzLjiN8zWZahaWPL7n1MuEUqyRWi37xnDdzDKQFDLzctMe6SPKmYBi7W8isL",
  "key35": "u32WxujU5s5ApjdCo9hVUDEeDPEd5DRZyxMzybejftkjpVM9cnYSQdSE8AmAeQ7GbzBsQWvYrvjz4PYP7jzQjmQ",
  "key36": "UPWCMgHeWtrBQruiDUpfBT8HhkDmK9S2hUX5xEbYtfWc72fkVBteFKuUkxaLahx9SMoEhzfK3zUQ3a189DHNwms",
  "key37": "5huwQcJcwDSTbyo5WfFvsF8dQeH6fMcLtmJh4xgreqE6vjM1y2gwa2Xu6nA1KYZ1L9A9ZamoSSr94wWCzmEDdoh6",
  "key38": "e75xAzCus4LtrkX6o7FKAuDUgfHrYHn2x6G5fafF9EmXZxYTKRZgugufLJ1JgCGw6SCC1zTcMweasoqqGB8yirE"
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
