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
    "SZH8G8TZpWzc2zmwRoPVKuSzt6Ug17vP4rqMkpUT3fQva8ZeTDV5dhuxkhzqEvYWSRUxXaDK2JoYdweQeaHH8qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316vNvBw8oBY4DGg1zKC9TJkRkJAWuQ4JKyXLiwenDsy36QWmZWVA87QYEvZEkpiqhomAdzpEtoUKNHFByMcMJFM",
  "key1": "WeFvaZbUYbTjEnX4ZhTyB9W8CJzCZ37bmHDsD8aD5MhZPY11dYVKUeGfinN47Z6NHEHosmgnMfNcEZH32cEFfjE",
  "key2": "MiKuBeFwkzk7bFNewf9HFCXv5LN2Ty9xrdUxYvDj1FjdJgQrjGCjtAm9Y5vohG7Ykn8Yc2W6BHF2wevQX9avndL",
  "key3": "63ZcRbqzx1zWYd5s8hEJnkoEXFDg27EsMfoP7EEy4MH8EESHvjPRtPnuW1YjPzajEZoCppkFkP5NJxRvtbADjZfN",
  "key4": "36kAWCFR7FY3v6ua2njk9P4pZyuUFuUDvGJ6GsQpkrzyeoUcW3TRvQfa3RieMuhxyhFmUw6Rw2W5pdrMuZ3WdGsW",
  "key5": "5sRHUDNeEQJFXi4A9Z8rXKAJwiCZa16Y7SpXpKFXFi8WVGXRgN4LM84R1B9CcTz9RhgLujBWFkdGPAKXm5KjnNYo",
  "key6": "48vsBuH1KK8Q6k8pRnYogZtBE45YJkzdeTU1CKQz5T1ggyzfCcsWu2XeCsP7MA9HtQn4JseDeTZPCjdtwL4UjMY2",
  "key7": "5mHeCjrnGPkPX5DbxsVFEoT4bz3wcB83SY3aPR28aXig7gxuikmp8zdb5ErP48LZcNW6w5CVxG4t2nDj2LpQuEFp",
  "key8": "4gUwVRXZVnQ6T74eRyiGZJzDcyrisip4vJfd7hDsScAMxLkWw5QBtYMGczw8pB5kk5XUEMpkAYUczY7kYR7K3P6K",
  "key9": "4mhTPnimgAzBhofWFFD5JE8eMUou1bmyZHi9qkVVfACoAry2hDMj9baoyoefwCnzdWp2XhG3EpXyAkZBsqwLes5m",
  "key10": "3jxxSQbXLBjUsK7cP8PX8FGxDmo5d8AFYS5gq4oUCX4Ee81gCY9QY8qRDTXGfJYrnkFRj17FdHFQRXLUq8BYC8sw",
  "key11": "51nQqV6H5sivoeF4apxkJfE4dHAByqRuxS7RB42hnhP7c1gkMAdHk4NozH9YHABCsaazaigZhpWvjLjWGDVvJxGD",
  "key12": "51BbrSUuApsNmmhiSbrgNQRUL92euedT5W84x8xWpsuLHf3CxhrJm1iPESecb6opCF34zJcEJt3DWwXY6TrtnHw4",
  "key13": "kyvRPv4HMNQcNwVTDe4FGjxgfo3fAzjvMY32DBCPMrpHSzhPLJv7dSo171Ewgt6DdKESi4a2AtDsPqS9apsGZHy",
  "key14": "2DT7vsBccuoL9BtLiymcTHf5LqpH1yfRKNPRxBrBJZ39CXz5QNyYmMzVzQcdJeQNFTUY6UXbYKUzvULvJ4kuABB5",
  "key15": "4Sm4YMAFRpDJCei1xDxxJ9VKukMLU5XjhneoyMyZ52yGSxpdgsetBk5A2LNCq8eYvCyeZb1UUvBe3BtKWUD4bwi8",
  "key16": "2tvMc9PVnwqDr1HZBwQnNKxJqFcXXLJvMhiQ5gA21QjjcPV1uq2Ht21DjMeTTSGmDSNUVAhnvQktp8FEw64gx3TV",
  "key17": "5qBSA8vLHQiMzBPxsg1q29oNmjqenHvBMc2zSL2tiFfcvktkFxmFjwvU31BHzocisb58Y7ann5zTjC8fLNgPuekw",
  "key18": "2BEURrQoYdzvR7eewvt1Jf7Se3vXBA3QLzrywN12ekuK9J6BhZaXQe1KBAt3a9SbCi8FAc9a2YcRBMwSdkAZeJsu",
  "key19": "4cQeZakUDXR4zZ8PbuQTYhZFGhKMp3uSofN1MVrzg8yZSvhjbztWYPoHQGDW1NuJxxuYpdac8bVuoCQdBnkZf8hZ",
  "key20": "C331aL95hyqEF1Cm2cMcHRbkogiCpzvvApeeuSAcLLA3zsqAtg4yq5BmYGj9CuHE64KNE5G1D3JWxYEFw7tCvVn",
  "key21": "63wR2Lktxg9QtK9MSTL6PA63q7DaJSFLe7Zow5YW48HGFKDLi6jpEWJRrsk4wtCTRQE9jLehod1e73KSB5tyJ6WV",
  "key22": "58pEjvewYbfyjpn6Mx2aCv3xeSZC13w5ARbwRNvnHDSDSt7SNd4ExLkBiMVmuR2m9ggjW6x94abCqYmCwixUkUiu",
  "key23": "4WaxEnUGNEEmGfT34ZXSidUXp5rM5xZbMCq3wJeEsk5HfLnVEcBeyqTxzuvXTakhZafmK4jVxdN1CTbMcr9Lc26E",
  "key24": "28kPtW9JawtrLWjpuPPkk8tvuS5QP8Yinj5GxxEkhirXHK6qSmzBfEABDErCUMqcoGd5GEhwjmMyE4xro7FqXDzf",
  "key25": "3UDDYf3ZKFKCHNGigDpZipxePMgWVzkKzUkPVRcKh14sVps49K9DqUPPNVYSQq94UBDs4KS8oDzUAegmQ7uRes8c"
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
