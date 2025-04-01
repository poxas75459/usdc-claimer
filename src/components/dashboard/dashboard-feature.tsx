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
    "4TerBuL58sqvmZRjnnq5he4qeLsoLQX4wemq3KMdf9UDqKTQMaqWZZHBsmMKxqmWpHF3nCrSJ1pKEXaieoRzbgXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N24GiA4NP9DPNU9JDv7nDANZdUqCXYHmUMYFfJCSVb38WMV6NMykEM6gDnchcnREyxJUp34S3hh3fWcigUhJcW1",
  "key1": "64nEvdTQ1N63zM8y1hg8xjSHHRqvrRjz4Wh4cNH7611NzqAjRxMXkgNLvZpsTQS9qBL67FM9LCCi98Dz6QHFox9D",
  "key2": "2Yyf9GpftwngupJC1ykZUkU6hh2RyzbnHW9FbeFzyLTJegwedYZd23rYLuTCazkuKPEdFbXGceVfRh1EVUQTs5jj",
  "key3": "DZMBpYKmesCVVbmq4BVmajkyauALo9GDLsQ6thnmPYmdp6rS2ewGWXfQdDfgj9GWNXAMABA2KSubQ3PMdcZjurc",
  "key4": "461cnajaPVqQFUfbFPdQ95EmmHqPq1avgoPRAmbd8EtKPgYBPBQUgwWHLPU5Ea4iRBtBLtbDmZ7dwGCnDeFUGNDy",
  "key5": "4m9TDZRDiFDwwDrMR6iFgeWY3twibWqHwqkLcE3RKdHadNUhqkTXxdMrMQXng4zPWESmRUPUHqHqKMXWTdgpb2kn",
  "key6": "5A7u2vngXb5WeyhFHvDdHGGYMS2RXTCkSH4ALHXPsezTDGLC18xdf6VGR9EDVdBGBkVMrnXWnH8Run9XSLVReMjp",
  "key7": "5Xxny7TtN3vttnR4tsAgkhJrdjV7nYd8vvPcYk2hssamYkuU97FJWEtMbasJLma6ggedos97LU4Vx7CJ2qEMjitk",
  "key8": "4Tb1fBvmKuat4vzKaxYjBimiWRkF4hJkDhb8YhpzkyiufhiggaNJ3VHed7f382bozYgsQmNuRNowrzsFqJzLmoUY",
  "key9": "5KtgacpVgutehEctpE7hUWuGV8KYiqqxgRF5JWc7a4vRMfnL2SmDLyVYn969sXeqzn1L3k3hja2zuwy9TjbH7ufc",
  "key10": "2tXFf7rRgWP64qRRvd7QfpmchExzy4osd8oWwph45GqrUvbssQ4CcoQ9xn3rbFH5FfwpzefwQRkewWbAmc55JpeV",
  "key11": "2W3PuqVMtMxSwQFkQuEcvM7giBNM6adKKTrsLVPZvZUAaEHQreiiYE5JjnzTKEBhXj2MTaPH8ZDqgxk3q7XSeko3",
  "key12": "v19SuYKEh17kdpnXndLsCBqbMLTzVGCryiYPso73beBjKHM9j44CGPKZ8SW5Rra9qNdBX3uaazXP2pzDvecy9g9",
  "key13": "411LBMPPRfdB8E2XnhcdwBNU59gP7YaV4tGJQrwBMzsK2zGghWFP4tuv3eDXt5Mco3SpRHJxL5vYdkeBfGLc2VVy",
  "key14": "5LHuES5VTwZ77sY8fBdy1jJ4grVTd2pj95BYuTD6qUeaJvHqub8cpP7cnwveVcKeaqYQfkY4KRpJcRkqCrqPm6NR",
  "key15": "4cGER5GqraypZi5vakgWcrQ3AZNkCKMtRHmHdLJPyZYGq8wd4Q1Tpmbt6kYasWGMd63LM5nyJE6kELELvrR7qtd5",
  "key16": "g4XQP7zEHSqXa633NB126Ec6FEneBQVsNttx1bapB8a63prP2t2FVdFqZf13oy5PJZqBNjECeDjZ9DR8AR231ZX",
  "key17": "66phWXRmQaofnd63c5BtGFYGUvULp2d7RKV9YQPCAoA3TCC8EYBkYZ6A86QVVcVgpj9GYfazUh9qxijy6aXE55B",
  "key18": "4DBh6GFQhs8R4eJJPDpcbb47MGvne535B7JPspcZMaL6ecbY5ANsti5t962GtEekjBb1EaX7S1V9fp7NHy24CS1y",
  "key19": "3ASimzoLygogDswdNptaEVZsY79VtwTxEgRsU42LVFtFoTT6WdhF5UkzMVwY6tRYuBqgdYo2vdMetfFpLitvrtuD",
  "key20": "27iKNqWm2dbK3vUU4Zqnzp9fBv9UirtsBmWbsKKoJtqDDRxKeTfvUWPkMYgoUrnTnr78NGHNK8gpW51UG2woEf1j",
  "key21": "5C3dUBWHU5krX34ZNARmqxCMYnzQdJ28qAJv2SeeMaN1L5s4iPA5RpmcLGsyG8ewpazpsh7WGNZ5vmNkHn9SAUyU",
  "key22": "42SKvaTJymBLhwSEv1ATckQ9pfiqEnNwuSroAFZ3w1u4W7uce9DcPtJeGuVNjD38AV2X1Sg4aLuVKR1iHVvA4s5",
  "key23": "2ACgqqnaoPooJWDTbzejX8MHEtiQTA5Drv9xhbwLxfn9dpjqLdqp6yR2RmUaAVa8WeyVpPrJBnpQLhvSgse9DYGY",
  "key24": "49vE5aqqmZv2QKvk4inbHsnQonvMYLtUSNHQ2zpAWiotyETj4qoagnTJXQoPtYp6Vb2ZQtHz3f5snmetmUZ66vsK",
  "key25": "38b6hRr5D66YZ5bua27ijtReQoQLY3ojAdow2HtApSc1Kw1p6YgUpqFL2GzTT3NsrUL5irLcX6kAdbva9BCnc9eK",
  "key26": "5turbVc1hgdGH1JcMVwRKJVE8HfLL3vgW6yqVF3RkvFtyVArjtw4KhsNHQwxRwBfhzYCEWmiyznJ66dTtmTgy6Q7",
  "key27": "sY1Gfsv34KxfYfbYtgWjP8NtqbQ3DxcRonXVsDXUQRmXHN4zzVaME592652Ff12oaj7q7ejSxFdoaUSNHHZK2SL"
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
