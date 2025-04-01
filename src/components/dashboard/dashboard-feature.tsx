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
    "4eDPG5eGGEK2DwPawQXHqMXaMstNRicw9rnaGuzMMxptFXkpPqitpej7fCKzbEsq2p11SQXcym9sWCnTFFHTFh3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hk7EfzFcVdkSwchtrEtwXnCHNm6A7wGbyU7BKS15xShX4ELQSJJA17pPvjiTxoDz4mtNsZPXS6XWDHovNCjE2Qt",
  "key1": "4BVmoZh6p26iym5FbfrL5ZUazqy6C48WGYpyx5u7XjqH9P29zXNQT9yYVX4oA87iSVfDrinaJScCc5pG7mtKsSxu",
  "key2": "3ezum7DhxUzRT73xWPYzxYb9PvEt1q18LySNHBu5zT5Zwk3opSq5ULqGKbYPy6rQ2hJGrkhyFtj9ypwVN9UYqykr",
  "key3": "5pS5tS757f1TkzRdtBrnQ1G8YtsbDoREhQ1ShUcjVFfEqMfLdkeqT3gA4fQ73gYgqm9eawXn5wJXtqfeC9BYbTUK",
  "key4": "44vNqQyCw2J69mbLK6bi6zd2kVonzpFWACu8tHgCjH9eiqBmokcMPGVUiZz2tpzvnUjUy4E8ajLo6quQZtvsXnGX",
  "key5": "3c5Ca1kgen4dJ6kygR2dTDMmzLo16G4BFZfAwkUJRF7oE4wxoduu3R4886kkyQmWoSXHFuBZMYvYowEdBFY6ELhD",
  "key6": "3723xvPXuxELmmjgkgoSJ2GxajHYdHYpahP8xcUG9PYD5GQrgh89v7TCHGjat6NNsBBi6Ci1tBAZi27r6CcC7R9h",
  "key7": "64dsN3XwTAtA9u6tE6Mw3CKKJpmqysgf4VYR5kguaM2bjfVJ2QDswp1sPJ44hw2Pww7YAjWG7E6dx56aYZXCcexf",
  "key8": "5z6QG1yVhFf6CgJ6fQ93prwLbPKM8qDEmgdNix6i7cAbajRZa32CQCGqbHHhP88Gf8GQqoaUpeWfXsPirymSv5nr",
  "key9": "2LqjGAHrU96xHZ9Qq5aCFHNbqqYev1kaPvfrSWFUSTsgWj8MwUp6jTXUKNrLqjZSTNu82jMgEXPzRBReqFFsqamU",
  "key10": "2X99rvWkgLzARbpJL8ntqQ586482rcTkjjpMc5Ux8F4GHRaJBXuuHdvz4rMmx47Tnu1NtCPg5f4T9Mc7G6MVxeKT",
  "key11": "5xUoLfLk3o6eRJPSvYXx8j35gpMR7jhjmVzKw7W6VrHPxwhqGCpwPVXHPGRvpeifbMBGkqZYa3Z85seMfDJSh2A7",
  "key12": "3WRpj4dCBvfG3id5Xf1VgCf5qCYQ9fHcSiBVT5LeBuGezebSBp1nAS5Kq1wQgPMoJ1Eag2vj8QH432zzHRcSHTst",
  "key13": "up1X59iQ7TJw2rzoZKMbUvE9sisHStoRteLfvJcHwP65dSnXyR9tmjmqKnKEEbwdxQVfw4EmhMmtFcPE3fGBmYi",
  "key14": "5AgQ5ztJfU2ZJ2EZbM9FJTAcNJoyyhvZmsD3yNEKjBACLcF5ZypZ6v3MNJWKGQYyxJdqYPCmdGTHwEB3xXwUZKPV",
  "key15": "dxtDHvyyci96pgq9J8KznL2TzS93sqN9JvLn8kajtyyie8xJfmE6x2gvMtm19Btid4G9DT9vhXZo8QnwAj97S3N",
  "key16": "2trpP4vCj9RU3nn1wPQkbiYdUoqYiyTw6VVARKBYYHSTSYPu1a9wVsEMiJEQimg2TL3Wd2zVm8heVw7ECfXJcH7",
  "key17": "4WhQzWJpnb2JnKqxe6oYuJs4tguYxo9Hnj5gw87xbjZDp5xkQpHwnZwds9opK1AZHTPG1ot1HkjEyAnGMThbA8hM",
  "key18": "2YBZ3L7qR4FSYigk2ARujLpH1Ts6iotVwHCrzuk8WzxEMHoEUKnMu3cGZwFDNaDdsbrWXoUAg4sceRENAhc88hxk",
  "key19": "5Buif26o2ezCNu1iRysJrJqVWKvTnVn11qJMrVsKBTH6EAC56cuS5FTPZ25hdLKcVWem6R7C9tbYJn2xhFN29K73",
  "key20": "2g1fAKR5YFMK5tTeTPm1p7EYopxjugM2baTmxfE1r3R6d6B35pan5QUuoCpajvDJ8GmnEXxDXvk7f2PjYuc8PLzR",
  "key21": "3LdMm1N43SgfrxACoTmFQDjn2WEYEEcEZi75nstfdY8aRw84LJFZSJC4WfNqD6JBc1AXccYpjfpR2ZVWDHWo7yH3",
  "key22": "4gf6uMPxvN1G3heuvU4W83yjPuYPMnvfJbD5q71ZZhv2J5tRdzGxwcSE5gw2w1oSo8uzwHYFW2873pVsKKJKb7Ui",
  "key23": "4NgAqA7BhFrX7YW6USgJmTntsWHkvCvxoXc8YDthUGubv3aQYmA4pEP9ACxLNKcPCMjo3QAf2MJXwQBjKXmWUihE",
  "key24": "MZCLc8F3JQYKjMdfq6JAnqhkPdoXdLZ1d8i6nRq3at5eSnoU3LVMpCLMTwfXf1WeMXxjQzPKbRL6nJyCPY7WWAj",
  "key25": "3fQyopvKSKxVwiAGq7QSdw1HwTVCPwhaaxg94pMzfYPHBHgoYxqERTJudmquhGcf7XkhVaXyxjW585Z4yUrDbJnF",
  "key26": "3JobyqRKx4ub1C9c8Af6HKscHVvJAcVKRqgXjpgA2zzkDCAvzgdpxhaxuEaRr3Jb4vBMfKxfsmQ2CSJgDW7Zq5yx",
  "key27": "tDk2WsXbFHJKvrUpMsVEyBkZE5Aj56xRAMRjAnrUsx3Wo8JJbfnczBozhnVMwxbrDNdfDmi3uezPBsEQqKBUhx1",
  "key28": "4z3SrY7VWWNhSBUE9ZyKSbzqUtgMADzUHepe6PMeHcnHEegHBYtjUMJVd7kz3mreM7xxPUiE8TkzuffsFpqEAGPc",
  "key29": "32QPxgeUJ6BvvtFSr1RAzNr7YXumcCAfh2Dh7ACHpc1VyDpvaUsKHirKZuVVQkKAEAXnTwduCzNNZCmsXhn1uZeZ",
  "key30": "4a8VEfB71NDfYJQAbxb3LC49Lth9TWGKbA4Uf2dBUQfeyAJiTMohg8iJcMkH9ewsgQ4cJkWRmZs3iuRWxcstHF8y"
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
