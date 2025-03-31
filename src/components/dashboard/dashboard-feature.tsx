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
    "3eC5qV1VNdX1Nq4TTVmbwiYtX5ZiA5woNRwXz2zX3hwGFXHUF9W4Te1LBu5KenDU9DouNumZ8qgMYi2o1rejMeco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuQFBzQ5oWxX8ngzxySbVPyRAinwu6SnrYHS9VbBcB93xEevTTFUQ7iHZQDGZuwRy3z9rXnyLR6UoF1bk6adW4d",
  "key1": "65Z5mfA2tCKg5SP53Vm4p5oQnZaGy9q4vpGUBK5od4sSftoUHMZ2PUwcWYMAiDwM9zF1aznoQMTbLsA2Hyxs3qjB",
  "key2": "2ccDRA66vgh6u9zqPJKszkUSpjpa92baLBGKPpsZaKUF5Y313erj6gZuVctXpweFMp8zY7rmYhvhw5hcwuZ2e91M",
  "key3": "2TA9vQ5TBPstb3a42zvMVgt1sAixwhqQYLXQn4hyVFveeiw5J1rW76LSHfxCHVRprjsB3xTi2NeayoJrLg66FxgT",
  "key4": "t8RLBAYKxScmK3BMvz8JUNF7xB3yU9zUg1iqkz4US2wKS6odBqovWgvbwkbAneRKy2TcGR8VSPnMQSjJg3eKeWg",
  "key5": "3ta23stFwGg1AHxTa6avn85USQqLfvuqY8RzXB5XjVJbyVddFDUbfEHnbX9PkfkqxC9V99hivbZj7FUdotaqRyLM",
  "key6": "5F65Zn9ru8JEZCisDfx7Ngak7aFh5kuP125tS1WM9gyZbqFcrvWYzQt4Fa8LUHV73WN6ireRJPjzcdWXCv7LySaQ",
  "key7": "3qhdZkHRLHU8mbvQj5VFro94He8VnThthvnN6VYVzND3XXqN7gThRoVV5Dn1k3X6GJ1HTk571U9E4QXqEUAsnAKz",
  "key8": "5ZUB7kVEgfJGbD4hsf8poCaLKMq5bXs4C1QNY3DbnPKZDt1eRo7aKAknFSgVFPVecNozj5VFQah8ua4AwJhWBZHQ",
  "key9": "5riqufmQG4qdZSBHZwFWFFzJYYYNUiN4JdxBkCYi7rVQcPdSxBdjrhgXaMmv8P4qJV9Cc5LtF2b8c6wLx8zC4yzm",
  "key10": "owDiaHxsrtR8eUd6yk5S2UV6ykFruxZLe4KeZW2iiXakv9BtKFMhZRh58vjucxQAjC9e2tZ6CpVtgg94uXgBbWj",
  "key11": "48msKGRDvSzxHvqqdTJWAXdJJX7oPimnrJzR4S5qF52w9EEzMh7WEWTQ3CPc35dSMwdpTRLfwPmWrLMWPQowUeYk",
  "key12": "ox71xY9t65hfuZqVp2wMXYk4bbtvwJNWgCfmwZyr33i775c5E47zS6fpXkDiheUFLfLLzsq46jAiwzEd1cEtu4n",
  "key13": "4ed9YSfXAiywbHAevXPienyfHn5ppjn6vgETkBrAtMDc19LXiZGVTqNJu5Qp2zPV8g1aYKxXqgYWzSi1TMKVQ2gu",
  "key14": "3w7jL9YHGn6mkTjDtLNTEr7sQvL9woZXHz5AWo3U4wtA8CCrkLNhqVfSEzHkyR7vDNFvRWKGZo6zCK9n7MgrcAoZ",
  "key15": "2dnP62QDnnMaxkxiF35hrCAchyBDto3cia7nihhj7wR4VkeYAkw5prq7RXFZJdv6UgpqHSC66d5CLB3kfEsxtEHA",
  "key16": "5FtZKeGzYtXoNBHwvdLspWWAeFRQ81cJR6aD2cqJf9ny7dEopn42WfavB2Ghc4BDkVKnmFBxMeD9JzbQ48NUHoMQ",
  "key17": "3guXaVor2skEGVqJDrebFibk1gkr7t88cET4ALBML2tzDPYfs98xPFd4CaKJPxzi1eLNsw9birdUxt6CNq6KLqWi",
  "key18": "cEDy7N4FHmap31572up9MMysCT34QiuzLQx5cWJgbUAxnsFE9PY1ANjExdw719KpfksmgSbGvS9sKNUQ4XZ8w8u",
  "key19": "3WLgFV1xaCAHw4WVs9dXmjaGJtu9Zn6njeyRGYErxy5Zd22TiUSShCoN1wKpGB19ANVKqtsXVhFW21jnb5LfgAAM",
  "key20": "kiBsLzDyQCip1xwvEYJidbs4oCYbdXsgGX5ZBvkWEuxK9p8skRtCL7UKtY38xPdLaVGodFv4Dr2j9Ee5yu783u6",
  "key21": "xqW8y1hEUyJTSxYspL285gjdQstABXHczTF7MudgSdGPDbcfhymracGSeHU9Nn3b5bGLnj4zKLQKgcorLo5idTf",
  "key22": "3QLrw9HkxpT2hDV6zPmorSR6QRfyLLVN1F5uPPX2TVuDe6Tnx267QZ9K3kLy3y1pemKYeUFDF5puTkDTMy3viYaV",
  "key23": "4DBuyTkm9q1KwvVca5DXBypuHD4ebEz1qLEVHMvGg4mtF9gadoH9C7jWoVseiVDbDDtEiwfaqGBbNayVQUsQSk9v",
  "key24": "22Hfjec6QaTMc3wCE6Fvu3EZSeV57nRuyYdfBZHYAusBr1B9kgCH11iSewo7je4d16gXBap51LfXFHirmkquH1FD",
  "key25": "4nQxLHhKQmSCsrzYJ5Ma5tBLnPzeNWpUQqoARjvV9frtUrPyvNkcsWZJjbAbsJSmBedCQ9hMWTE5omNNs1kynsXs",
  "key26": "5TiYf3R4Ug6jvZ3onEZhRbpDLb25KPPLHw8qUSeTAyXH4MmQctedEL6TXQD3Nz1TyQbtQSci3J3n8EfFw55WUkST",
  "key27": "4LBkUnL1TyyUijbGTxzK3re99U14wJgjEnb2vd7cGMVuWrjgQSJEFvxVjeYSAVQgMou3Si8Z4L6aZ8Ytn9PorhtS",
  "key28": "3SM8MniDUsD3ctFDikW6FMshKfzQGo7muE95CAzEE7eXuii2s4c1PHR13s1mgEZtoG6on5zLMz48jWppCtfU4qce",
  "key29": "2KHZkz7xMDgw2n4z4D8qmKeynwSC3t6sCpG16o4y4cecUwn4kGLGKt1TXvGNAbSFukrYsfVfqZvkyZzGSDQrvobD",
  "key30": "7iRPmtz7bSu4zGVQfVLNk7ABvPxBXZ4qhu8VyVaUjeqa7pyAaceu5v6k6bEfXHR7RXNfjyocF8jPyLTAGaHEXt7"
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
