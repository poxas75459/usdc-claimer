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
    "4rKcBHAjrePvuSTEHrKLwkFQeuXUDoZnekt7YsB2ttYgfUbu2PxDuRy7xAfMRsL2x2arwaCmcMmtZZafXcpdz2k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y5J9or1WK6rBijC3BEg5TYCfHsAJ5qYGLzGNFgCuT6Eh3jh4JKrS7DCEKwhkg5SGawqsXAQaN8H8s9Fa6YMoi7a",
  "key1": "4nCNGZN7mxgxhRKtSxv2QzEZDKPrGzT1G2p72tGrf48kRmrzMUnm1xK4kMTaZpBcJmRqjRPwj5F7wPje1EqqBgkn",
  "key2": "3TfRN3iFv5y8sXKnwMaALk6uST718zFo8ZwRTSLauzF2dn8aGL4n8ek7em9z6Rf7Kms1tXUKLN9c4DqLyr6HT5fv",
  "key3": "kUppeTiBxgsGY4LfvwuvrhQPvA8Gg7kBCEJw6HBtiwuPGp5KUBWfkxvRyK9jX5FMHgjwxstGSS41R1hrNckRpT9",
  "key4": "4tuKCUPqdkLnvromK3SdkeQXPuXGJCREjqBgxx5NkARSDqnBEsQ3ik3AcD8STRECCeZhdKNAP6DtoPdbQHyKWGgH",
  "key5": "3cVpAuuuLk9mt4ZjHP9yJgWDHN9P1BuHAWbsDzAWfEX5wX5RQduqdkHTZLRH7MQw8jUFn8wb4jxjf2C1YidW4rLM",
  "key6": "2WQJKZxnizS2bWk5XDtG6GXFHDauWexpPa8R6mWAMJB95SJx8CHxE5d4JXGCY77mcPNN1YX6EpZRH18eniMTMSqS",
  "key7": "FLwbf6KnMLHgym1J9kVaibNYDgXfnFkP9ZWUcrGVaubxGeveTg6ER2h78YArQ4DEFNJJtbCix91EUKpuYrAxuM3",
  "key8": "2P4frkDPwFQsR9NZ6cyaprsgQZKiKKH5npVRErvomtDKhVSwYBazv7b4aiuzwMvEF87oH8nR5taPCnr1vLYbFgX8",
  "key9": "a8FyPQNw1vzGjTK6tNTuJtufSQevU7QQddeRZCEjM4RQgB2X9cQV36t1PVydoJHRbu9ZmeVyaowj5CpEijyB76s",
  "key10": "TGJJcKVE8GkgvPYSKd992yGzPdtFMvhu4d4C4Dd3tdFRSX5DANZ6Xfa4Ht6Zyg83FekS5i9YZYHJzi2wLu5aqfS",
  "key11": "285nkwHcLBCnZhEAGo8hnoReGFS4mFUFh6KeNCceGdgN1ezoj4QwbimunBp2EjDPFA2kNTTPcRLgRE5k2JM3trL5",
  "key12": "UjdybGj74VJsaLaPwuBr4D5zL2xx1jZU77GrGUWJyvg3tSK1jhmzFbUZAHZ8gT5EiwF3wALDJQ7CCfyjPEQdyzG",
  "key13": "sc3DihVKP22adHPTDSJh3JB1aY8mYfuTwGpoCQz2R94AFTnaqDtrMBU91Pn3a9xZXZhZMQMaPEUnPSw5Hregt9r",
  "key14": "3BQq3MPc7V8EoyUcS7N7sidkZXFFHu82VDsQf3iUWfBQo2GRwX4MtPczy5DdC8pMC4wAUeYn8YYbCoqDZTaCvuLT",
  "key15": "2eKp5w5Wtn5dxiTd2w45dc8oNWsPD9cdqh3gD3TyYXmQzbwc6uPa6kGJazZEm13DPx6RZEQ86S9M5whtd3m2zeKt",
  "key16": "3J8CQituEBuCLcFYaeUPu7bJn2PCwZ9xRQDo5WKKUKztczTVzyDDWze1UmK5ZQHyKpUZbddsqbA92NM5xkLWG8vk",
  "key17": "vT1Vk5PBHUwukRn9g54BMAeKDHt5yd4g9DtXVuKspN5zkKL17Z4n7Kt2qBczF46tGyCw6YAy1kjRhHnndYjXbyf",
  "key18": "2tyzNWhNriiTCkLsA2FkPDQz7fxdESgaqNJrx8493G6WRm9CA59McddRYEYWyRKf3VeBpuowcds535kSFTQkLvkr",
  "key19": "2ucrt1U5JS6kaKQY2gSE7C8MeHqtZSXZ5aY4oB6UeSH9NpzN53YVa7KXJ6NUG8tYHfP3APy9Txvc8EShFD4whY6W",
  "key20": "2o4SyQzVcP6EJpY729s5KvQ8xmWPWoAB7FuxyKKufZgCsyTbfTnq8pUdPhVvtjFMVgUwKK4JLvuKfmay6o2JEVny",
  "key21": "3qzT7DZGXQvU9fJhJxg18aQJN3N7oFQ46e8wWRycHTjVUgt7FE7yeV2CPTvXGxDDHJxDX1TvdCXsxBMAxEKgjrq2",
  "key22": "41aETsmSgbexhv6DLGap2CSo6mSr647opzfNLefy4hcAXNbtTC2DmAJ7K5Bo1z4TLvELHvxVTTPZFk6ADStZMg2j",
  "key23": "2c6XB8UGJqE5BfVFNfSz7Uc8hgDRwEWodULKXPxSnwC7VTy9CbuFAfMfeSFRFgF46dfiqoctfVmnAoFSzS1S1VZf",
  "key24": "dgVmiVQjsmDrP2goVqZvbYkw3Zq4Q6cDVskDYJ6AxhK5tzzGvGqrFYs4MA2V2f5Qe9nBbdsYGaBLMUA7GZGmfrg",
  "key25": "4hR2EiyzrsTr3uQ72vdqRm8nV2kCpAfiqeC3B4AYCRZgWybDvXuFdMDm3u5bLbQBqKe5y4AfcNkv1MqSkQeVHSN2",
  "key26": "5UeaBWnc862sAqDRrfdhs4J62Gg6MjnfGgBAhHo1JFo4mzFSbL3dEKPMw6mYds5N7mXh1rbWVcLWwtYRcN5Y8ubC",
  "key27": "2UbHuoFyAgA7uRtThLDW5KWz9z9A16CNqqkjmmNNsWXq2vRwXU58y8LSvehxHcjr9BX6ZdkQ9ZTLmfWjpbJjbzZ4",
  "key28": "66W5YBwbzU94SBLs2wq1WskBycUTv1zWW2kRAcyo4RnN3SVZp2ayRjyXPtUqbK5tQW6eCicK1qZfLi6y6KAfkQ3N",
  "key29": "5usT1SzC9vcM3SVqvNgeWakMsSxUwmWp8xzj52ADo8vRmQavVEFYLyQJci2C1AyAfW4VUT7DMWXAsAB2mnad2JMD",
  "key30": "3DKcmmq3z7u3Qt7qCnNuuSA4yZydMBYQqziuve76kSmBfustexLnQGVmgN5eJA5vKND5QkhrzNkKwHcQsHEZMmLT",
  "key31": "3vY7QSJ1FSab14pPfCdmf4vQoQBughajLNJGhT2acXqtVaBQEa5dhWvsaSFTDxva3Y1JLVdq2J8p3KKdiRWfGBLE"
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
