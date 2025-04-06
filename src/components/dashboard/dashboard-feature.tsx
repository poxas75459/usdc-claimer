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
    "5AE3uxVKfoQAkNtpvAG24Q4EhCYtt4DuuDLN7uA6F9StqgWDHfbfRrKra6HdnChtL2SWBBGbQaW3FbKcJ9VgtDLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LB5oja4Z2goVAsBKy26jQ1AVHEaqWUuAwpVzDq6zTQ3fMTpZugzrC8tyCNHJAQkXNYLqKUyDgqxkmYmTQXxyQfn",
  "key1": "2Q7tA7mfW5SDRBRbtjXn4ondvqnDuhTvxYTaAqEfHmEeUgKPdMbpckHgXo8HP2qx8gNhy8p89FiNNFopU59V3VWG",
  "key2": "2BhuvmSLGqZcKrnxCKkvqq7MWEaTPV2D1N2aMPedYWpkRqT98QniHRiyLLTNhZTE4vGXrHyR8iXa582w31owu83Z",
  "key3": "5uVeFyXCMvHWVWsDqqNq6hi2GBeQLdifMNAi3GY1UaBoa7XiFRc7L2d4gpdX9Wbg4Cs6psi86fxjwLKKNjdDw2Pg",
  "key4": "2M9BzDeXSPtsmRyUBKBo7mfN6FXKF8bQv18NfvYfDvPbLJHbJ6rdavLKZ6Z6nHpVHW1XJgUXJip8oRMiA8ht9nhF",
  "key5": "2mLxzVUsgBGAu2SijcRTbocLFjBbSeSDjqwVpB1kLWHbzPYXzT8GEznLBwbWxY2nrs9BhpNrPyRbA1yqVKzSkaTP",
  "key6": "MUCnWidhSRaTvadx5LBkXREsUG4Y2fFNKhivEfSofJyxscbnCU6748WTG1ULnh6RibCDCkrUrtVtbo2Tqh7NsSX",
  "key7": "2E6TMVaueDUH8nb5hdt2yx57vMKfLgerzTGUB9ZzqMsknp4wzC7tJ2aZLaHWKtnHLfpp7Re6WpYbTEq2mqQVwhai",
  "key8": "2t6n8HUxjSnwNby1UH5BawtBgWgT2LoSmKwn2ocdwc6713w7F4xxgJg8mr8bnorNvc3gEJd5qbHj32gezRmWmx93",
  "key9": "2MYLWJTKozRDXkXNVtdQcxankji45riCjy2FS2QL3sYNuTorTFGUsw3FFiWA7wPix79KdFZzDTkwo9mEwuvAFDaR",
  "key10": "2YLrgXmySWGE1XYJBYudzabN4oxL3Vg1Zno8buxD42yTwhGKazpmG5eNsiUGwkMthTXCnLLShJPi48PF6HupVrGM",
  "key11": "4pp5mZLcabBMzhncfMbRojjy5jv5ecHuaq6Kh9DVBfjg2evuJp3ohtH2ttu9osr7ZHMbsbhmLwcseVyAQFt8rByx",
  "key12": "dPCBG7kyz259WMPJgLujKu5jUvJFbDQSgtRg7jAZJuNEyNTZv8LojUt8BQ5dH3MUW2MWRJuQif14Dx4c8MPHjEg",
  "key13": "3jFdDsugvxAdcpsoCq1AbLYhRZKSzKkznWWcQFsKYucRZ27G5HXT9zLEwNQMDos86qxueiGdDZRULBRoEkDcBZR7",
  "key14": "5pP4XVAVUQRijdmbtZnHwi1W1Dh6yMuuD1pFf9EZKSL3WpDW4dM81zJNwEN1m7UGbvZG6YmJuoFSRaYhqL2A3A3y",
  "key15": "2rBf6rn8yDKh5Y3AMUU1sXV2jWJLG42KkSaG67aGk4SYVxfRZzjg4PMZfu3not6iRtY1JbJyjE1Pgnh4yoVu2cGD",
  "key16": "5nhu1gnoCex3JTR6MRUbh8mbmLytxnHLCAEM2TJ6845wp2cNT8QYgKYW45w5CtGtx2iRX4kXGkG7eTGcuKGkFubr",
  "key17": "q2x8LkLFTG1nrVHGKkPUUuShDQRy2TZXCKBnNZ62Qc8NuZdzcadJdBTkEi5XXxENYUGk7YMivBfjUHXZPXw7vS8",
  "key18": "4dnMwtU29MVSvxATXk9BAJok6VoyEtJ8oxuWJR9k21QSCWRq5LQSLVKS9odQog7afZ2h3jHYS2h7xEWKks2wWiy4",
  "key19": "4pDGq7cCfTuRsugA4kpZx4J5eoWRkuY1A5DS1ey3yy4vdeY7UgSrndNhzxCofHkiskxcp8NxRUN1xSSZDLKvxKiC",
  "key20": "3wr1AibN8BZ8iEngJWdJRC1sLNYHYKvpmyNgMLNj7EDvMLNrnC4XLAQupY21MxrqF7hrCKRW8q19uJRcQkbtoyrk",
  "key21": "zGLDHZjqm7Vu5AVYCkiFpwCQEw1kGe7hCmb2V6FhfjmaGYL72x5H97FP1A7tqPt6gJpo9yY5orBUxYSKkrXhP8g",
  "key22": "5EfFH3hxpapHNskeioKqjnujy5DeAfz6UXRcnHnWLTAuhjq6hQZz1S71Q2Rk18fpbnENFCa9RccYaTUYyWQGA4DS",
  "key23": "36nufmBzaSBtjidLsUjStVvE198DJ7hTYCrfavyqBembNv76V44ru9G3Q21fEXDzeshfej7zqXT8TrMNT7wQA7mJ",
  "key24": "4BNHeoR4Hbsm77mtBPENgRFT8BgF2iagee3f3KqhzPj9XQ2NTNMr6dcfkZfuJT85UXf87vAr2XoCXZqyvvFNN8JS",
  "key25": "5ZJDZM2sPEKxoBM223dMz3xyJ93DgEuSsjAoxxt1ca1PZQcRxFVSD3RTEi3ZGuzVR4NmijqPCdMKEcARK5JfYp5H",
  "key26": "5R5uj9z92BCGDHLWBuZrAqzrFqGArEfDdaSG2B7LEYsuv92aFhZA51TyK4uPRqjpECf9gkkEpbFscECpbRVSnfuS",
  "key27": "z5tjoSqk25MSVa5rT7Skmy16aBAqZG2mA8KJbPdUXkKu7dkrKa3bsTg1q2WLi4xkRQwTysEEK4AV12VTsw4v5TN",
  "key28": "5KPr3rRUh1Sp9Ubd9j56wYLTiiVCA9XTBFe418deR2uGSb212fCF33LdTkNA6tdX4twfyGLc8MqDs9RGuhdLZcaT",
  "key29": "48gbUsLANwi3wurpvcCbCgYdnZoXn2i4kFvLjTZJfhFbx9si6RZPQngCTjcatx6VtKeDqnCQVkX3AT5J2bKMVb4D",
  "key30": "3eVQmNeeAzcHN2WHwDUvLtZ7CsBpZ7Q78M43hEM4WeMmabeiMQgXctYkJv4BLgKVfCctxng4anEiwHRcH3ENHJ2u"
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
