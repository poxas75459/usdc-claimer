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
    "48LZYKAynQfp55Cc4oSgUDeoyXTCLEtDp4kVBQXShL9yVDxTJJQSiEutXVCvR3UqGuEriiNcTPMD5egaJ2A1YJjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FpfjpjzPr8eMFgbXdCKXXjiYmxn8Rcb5bgwHnK8h9QNXCLf4QUr55y7XMN5CvANadZocApAhN6Jcavbfsts7fkj",
  "key1": "3E9gvkwG14uxXttYgnSMtVjoPF3w6Vi1wrgoDHEaGokJyfwUpQrVJREdMtVvYQjvzTUF5rCr2c9R8UexWDDfYWUz",
  "key2": "2TroAi2dWxC2jHGD3HK6WY7ryqPUijoqUdJf6Wfz4rYiSzkVjv26Sf9X9jxyhAwLzx5riZ5iWV4TRmvCTZC6oQ6c",
  "key3": "3n4jXxefTHS3UBEaht9DkXUjcKSinww5y3x7pMjFTrzVBy7SRDWZTuxemBJPEUa88Qy9B8hemVTGBfnHCiuxqqRc",
  "key4": "3svHUtRepSzxsAEWbge9QaaY2BogM15bVWWSPmoj9G1LmneCVHVr2xxJEUCT95Q1gmAfWTLRrhXBxQUZZABb835q",
  "key5": "cp1uLGx5GAUQfChYL8n5r92pCP4zHYRFqPhBVTGUS8NUoWGz7GS12VF85ELLKFuszXuXu7PCbW5ebCuYnsaEduj",
  "key6": "4AVubta7msq8sTJHS4e9BdBEJJJ46rRJzC91XAuK7GTbGN4VtkShJerZ3fpJAN3QZQHAskNQUU8RNZw8gXz4AswC",
  "key7": "myqrygWnfsvZX9pLSMtKAVSJxy7iqmRyZu1QAJdGk6a9XMER6d2arXvhzEbrAndhMRBZqcuktXmZ7zddLiQx8gu",
  "key8": "4ptTkm5LkXsbFqJKSeo1tAa2r6J7AtBouN1zSYQZfqVARgpLMLQvcvGpxQLBQ4jgtWA1A7SptugDegC4X9tbrDN2",
  "key9": "3ojqjMwe5nThzXu7PjnmpA9SwYMzTyx8m7yD7u7jKfonwHgAcqg4V8xEaUTzBXAMcHR1rqFwx9ws8e9zuUESZpbL",
  "key10": "5MeihWCEp54vbWtSxMW9EBVjDUmGZEL3BwF2chMc4STUjDK24KPWqbPZY96KGDpS1TsvZyYfDUJwmuUkffWrE1ce",
  "key11": "TY21QvYkVVCNm4S37gq2eY9NXjcYhHa2FSS2EkLxoShdJ4YTCr9hJSC386LDUiCUEKXBEvUY4cnX6kfX2UrKofD",
  "key12": "5y2zLeBbMLkUWFqjfJPvpvMTi2cbKYDcr3KzGPWwt5dgHfahNYSwRxHut6U2NfPHcJi1ooZdFJSDMsJZzHpL2nEf",
  "key13": "mLrc4KniovNr3hpkv6rpozBp7DxRZLzFAoZhstiVjHDchEYSrYk3okoEmiWakvzkdpPbTdjBF1NAkbvpiszADPR",
  "key14": "5z2wNRKs8C4fxWvshv65zuXL1dhVCnjdyTTGp6p6MBBQMeoLnjMaP78XZMwnmDSozvo4CEDajWMS4dyqe8kTSY7g",
  "key15": "hXfhCZVD4xgAK5Maz6n8HZESuFAW8yaHsbeaG1zcpW4XwYYZUCq2Jd5bBgTn9LCmY6DBQVhxFoehCXEwQfApAx1",
  "key16": "5CMYBCrLy9PxkfNu4yUA3cH1azKrXwGDWTSsqMeVBovU6xE5hEzEUeKSXj2zksnYHeTPwd4NtGuKwvzH9C7S6WX7",
  "key17": "3rsyqTeRvEU83XFqgPN3a4ge8FhKpjDvu1PDTcT2mLKitSdyookPrXptpJJpfsJ4zNoQL24ZSJRUTe53z5T1MvfT",
  "key18": "kQpqK81gRD3zgKuYs1xDQHzmRBXc6jhrChBsdgCMKSWgXSH5R64aNegJKRqT6n6Ao9PSmDNYHT8NpwFNkprq5Ur",
  "key19": "DPQJnCYcdMW48P5JPaDULwP6fRBPSH4vfxwCWsZatpAAf7ogxppsYwpB1GQhJXJjep4ekerEejf8e4iVKY293fn",
  "key20": "3EcJuBpV7kmVEh78Sw5mTa9wpv8f5itCEXVB9bcRfCBYaBr7sZGYgDJShmJf9qHhk1kqnQr2buzQM3h97rxGjjFt",
  "key21": "5xtESEqaxdUjQ61SkWa9LJkBGouqfQfmyuDRyHP2mFwWyn9vygPKY2SruKaSDbPfDGthXuTQeJ72H796p5LnYXJA",
  "key22": "2xKB91Xzi8yvsEVHp1bAnVeef4V2hZRefzWUMT5kTXySxNmaSTHjnWFVF8rVsiWfKXba9K8JyCvn253QKMuCx6Ao",
  "key23": "5VYwBmxXwzRrwDDxR8cYUgLhhbzUdfbjWEkqNpkRduSz3TG9PhiZW4Mjq3gyXt8SoNdMGcNbgzP5c7MD46AuKJzX",
  "key24": "zHTEQj1HNYqzbMMWXsGFXqe5WvbTZoy1GvLjB53y9M2rX63me94bBprsx3DwrsNBm9LUpyujGp2VPandz9WceFi",
  "key25": "3rELv8QkAmAN5Uh7w7esaDvz1uMeLXXmsUbvuZc1c3Pj3DqpFYu7ALZuZpK5ycfgjYC7g1YWB3LnC1Wvwwgn9kwk",
  "key26": "4hKQQPqc7JiDArQbEVfWkFtzm533mGShN3QCcD9LTB2egSJoMrWDuQbWQZEhmC5SN2hJCBt3KJHEKAmWk4avgJVN",
  "key27": "6218sc689wGB1uME52fQiWr19GXR3T2giduTpih4aQpfRH2wqcoSxfb5zE6ik3sykLoAAptzeiwPdEvm7K33TW2W",
  "key28": "3M2WBk8wiht2QNhmHoRXhx6LZVHW8NwVUHNm6pRhTqD1bQ3fuSFenQS5JwFGrCN4AAAMFWfYdoLnCbxNMVKnHXzo",
  "key29": "3WdZ2bfiH1YCU4ieUzkJ3frk2h89hy38GNbAth28qG5FQQJJdoPmxTEADyEm74vi1TdHCjFhbWUuaAwoWDgV32AW",
  "key30": "2bDEvjU4gQxTQkX856oi1U4aLZ3DVV9K5YNt3XMjDZM7QeHZrmo5asZM1Ff3EAxMasrGvcoo6fcpn84P1qY9QbsV",
  "key31": "27aDdPt3PLBJemuyd1jkARcUDkgem4yaB7gWkVh4Y3yEhNshzSSp4ARhY1AdJ4PaqA8nC2sDNUuKYmf1osFCZXXs",
  "key32": "rbw5FoudEDYqENKd1eFABJhomxfF7gp3VvYTu4eqqoqSi4dwW5QpvTPzcgy1CzC4Yqc2SEGiUvLZjh6eY5Yd76L",
  "key33": "5zg8n8MUyjjmpi1SrrdU52wZznhotqUkdU3eo5GUjrbar4LDTq9gABgbuvFsXRYq2f6jeApfGBrucRANRiTALSis",
  "key34": "2Er8r1aiNg6ZftP9JChbzKBQuwiVC5i1codVB1uuSvPYfNjm56LEYE46R1sw3RFdBaW1ECpM8V6ie44JXrbQ7up2",
  "key35": "Uo8oWQMLuRBXSqPELXFMGnv9okCTNUy7bcReMiaqV1J3cpCqBhLpmD93xXSSkZbV9iYZx9UdnZs9FWf4it6LA1C",
  "key36": "2JqDjmcKKxMniXtocJM7N6qVHFenwuZJcg1mp5ZRxng8Q3AJpRvBVQmQjFKdVvfcknqzgVy9X3evhQ4PuPpPYSAb",
  "key37": "3S7HWPfyh7cJ9ptJJBgYBU8X55XMiCnEwsMxL43kFrQ4Prjz95FXmcNoWW1hPAzNiGPFwWFtmgiZ1iw185d6urM",
  "key38": "2DcrPgoDczQzYPu2bNnoA4DhQ7eFVcn24Hp6bAcFnFrYvbZLqa4ZYHZGhiGGMVUzCRFzKtw24pqfymwCYt8nwUVb",
  "key39": "31BZJNvc9MhHvsLv6iwcp4YmT95vUCswDcSvdBBqpATgbqEgNrHSNQtojzARbXfZKPqs6qAEYAaqQ4WS96jBmKuA",
  "key40": "5msfnFL2Fri8ZUtXngsqrxzJxwFtVd9AxHMFkw4DRmrLaCdWYFrj7k4MgPbN7iqKBDYcbDoiDVD5RBrfS4jVshpq",
  "key41": "5S7a4JAQUjZS4fE6CrEyZJdQd1Mb5RkwRHWhFY7E56Dvy67iGVEZrtQ8tJoSRvm1eF8upXmK6T4PLbBY3KffGY8U",
  "key42": "3MX2MJbmeBuZzyrccbMqgvqvG4iRyuFnLvPodgLH1JUEd6GC15fiYXyNXJNnG8QX75SLvVWFXv2Sxj1StFCcVz4E",
  "key43": "4LN68Sbf2eFzSKnwUBf4oPgzEL1RLo8eBiKm6SGNo924EkBHbARCyavp4HJNK8Ap9AC3gqwf5PkNpBzn9NjBdXaQ",
  "key44": "3QXCmHPqPAHXsS4nULzYGmQsBn5NYgiPbpQSBhEmwEr69smxgsCs2mCE2KM4YYFsbTAuwqBVA3MJr7D1ZrnYPhe3",
  "key45": "5VHHAN6m6rQuBGsj25NwqerA77EyXDfKURBnsgLa6Nw6BMnw4ECwHMqAMwhaktJKrQRTZH7oRKWJ29Z8813zmRKk",
  "key46": "51gajSdrpVZdE8pSy9NxeQaJ58mU7jgBmNVGai8CFL9rEwv34z6G3EKXPLZNvrQpn2GZUADCGBWZPUb9hCBSsAsZ"
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
