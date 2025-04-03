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
    "4Lt8HuZS6Zrqu3ER24S7Yd895KvsMf2B69tXPbbhn56HHDcXgt7rRWgWgesechK17XYSCUrXK3btz789QFxJVJKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QABk5JtMrRob7ikrknQGxfjP7vhGmsBj4B38UDgxFuAJ6WksqMEmZUeAeZ4kyArxpFfcf4QWhqwL93BnthDYkiJ",
  "key1": "2A1xEbi7NsnrNY7T6sAtGRaBhWvMgCpK8TP5FANQCXC1MAHzDkwwygraQGd4oz3ihFd2hmwzZRHfdbWLP62MLGyy",
  "key2": "spPxgHS11dspAfZYDBREjRqDyaFUzeqfS4m5VrzDSXZ48wbZYEmLSu7XY5JDxHpeSeZ7kxwXvJZ8oPswN1C28qD",
  "key3": "3oCkVToDM6FAHwkf3pXk7kCxfVca47DL6zw5VMF5xKGVkvgbyrgBFm2X98PwixDckVZT8ANsiXeQsMgT4DPWFu85",
  "key4": "4FaRVyrnVVTT2dmCcpC7jT7dpxWqDLgKzyR3EH6pPseTwpQpXuc2i9TDKYLvbCof9Zn1PFFQZZiXyJUmMkPJGf53",
  "key5": "2ZtQh9qui4sQkPZTeji5tNc3N6mZyACND7JFLCiJ5mUvHRCJKvjnuVwxnLnsYgaXrQysQhPgwk3jFwm4wJEBfUfY",
  "key6": "3tp9meo7rnmYi5H1nDvaywRnnwbHmizR2dYpKh587HgcyUQyfnVbK8nwUAQT9u88qD4asAUCqJRKMQotW4R1FE2o",
  "key7": "47hnrH8zPryqD2P4FobEVj7uAWF1Nub4EfEeDZtYCmSxWbmUB8UXHpkacckPrwMaPNyJ6GNjahGRD2ZtYohHZMJD",
  "key8": "3o3uzEVMfN2AMAeVAfMoGSo4uJdNLbPHtdHn7fomNjYXTpvBJVGhXVyNes6QdbNh9FhKvWCG1diNtJuwTvouNJv7",
  "key9": "5sioytH2FGMRoGqQ9AayUuG26PKmJ6kh6Lw6x9dzCNvA3NzEh5pCeYGeuhuySSkm1tsWXugANwom1LVHUgBgsFzV",
  "key10": "3fZfPdGu8fMHCeTwau3AWxMtMRystMM3MkqiBuoVwuBqY8FJvxP8KnmaP8NxyUKZzMgkYcXqAnoX5NqHZPbAStyG",
  "key11": "2ERnQQbzGpaYrY4BwSWQu4kFbxsEoSEScW384DYs5mmtzpGYBu4qqYqjwUn3yWeTd8R7RaLmUkJUd832DXL4SQUD",
  "key12": "64FFjkMthdxB3MBDWDHCjNaMG36zL6Z5tUwkYjP3zDjvrA1bv22UEyX8381QWVbwGKqiTePjmJErTJV3DKmVShLK",
  "key13": "2ib7MCDrHNiMNaYeoiDtip8m9QB2GG3cfK4asx1LBuwzQVv4EXwkKwMrM2TVxQKsBFxRbqUFw7Mru9n2nL6qzeZU",
  "key14": "4xCz8zf3jzUQXnfr8R5Zj3DiWuJmQmKNPjMuiNoGKFLaTYSZ4WdG8a74cjy75tYhJu1Sj4jjpkxNCDkU8JGerBBe",
  "key15": "33YESiXeHBmKELpry9Kz5cWYZMWqap2wRJX3vWi2a21sLjoP8BaT5vRRuvqqfz57tUbtxmi3i3dvSAXegaSDT2jd",
  "key16": "2bURX6JXyrYfaPp5YVcvVPTYxyBiXeoveUx59ZUZMRP9ifUgcha8b5zkaPGPviF7qr7eT3xYbFT77dVguWnXKhmE",
  "key17": "2F8GHJJtTrgaGVB9Yis5jGymNPc8yrzuMRDQQKb8sYUZbJuS5rxvbtnpk3WRZurx5HZwzpWw5c4zhFM1ZpQQEDsC",
  "key18": "5FzzKStgwts9D2YF1ffu59SJSf1zqFsh2kmwkZwNUhfrrx3dR1aSc8oGXGFFxCAqtX5NbPRwNkWSTtdjHx47rZJV",
  "key19": "51g5e3Fh2YKwjRjwkL7dhJJN55A64Q8T7pRvuyd73Y63AH5mEurPtiD7q91sMquVYb21x4vBJyNYL7c1wMALcxX4",
  "key20": "5oPJsRacDbMAPWuLq8mxZmzTYbUiYTy6Rmz8YtbCvYZtADkrMFyFPUEA3WJzC5T9cYce7y9QaFeF6vib4XwKcwBq",
  "key21": "3CdeiPbJ4kf5RGDhR8rmhjMhLyFYTVSYRpV3rNuB32bwaWzHMXKPwHVieqZyBma76Jg3RqWEMQQsy2txVk7Q7tnL",
  "key22": "3Wh8SGwZzyGLf5rUQ1J2THfx9uBVJ8v9HuyMVusJBUgJgkTt8Yh4E1pPaDFm7G9D1HmhspJDZNA6hxD48kH1tZma",
  "key23": "487f5CqSb4b1HDCBGMPnWhzgBzxMKT4iJsU6Ya8rEnLVk6PDrX9gQtEkMQ8Wrktn7H7ghcy1YCASzNSL3KbisJWi",
  "key24": "4GQqNhhhQFwuwUcfSrTBfhPtXMNQxD8YZobr6gAHBMxRzHnf6CGXgZ2ZuSQe6peUvfoqaemH1jVihGjkqyeoc3KC"
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
