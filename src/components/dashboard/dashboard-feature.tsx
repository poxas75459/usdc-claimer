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
    "5fL5F8X6H1rpi4wr1bWxK2fiUMWMU6ZqHXriZ4Rnycif7ct7RWXS1trFsP5tqisqAv9xGdWeREoJ2NTkdPXJUxNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZ5ArheYEswChL8fde4ZV3hPEwk5pvSftG4kJnA5VTkFfSnBKSxHLwYgQqMeXN3SGbotNzRXRiYaT85HzKsUm5c",
  "key1": "3LcycvVTQe7YGenKGuwyXjD1sa1bQbdAvwYB1ij2DFwBX6iMH7GgBNA1vY8GBsarLETfX1QqBw5TZUTGfmRisyCG",
  "key2": "2y4nMoEfqEvTG5xFebDvxxgjx6x3w8WiYUjRSSYenp1DTju6dj2GUM1VAkasxyxVvTLPp3nSmdcvQ8pKTRign65k",
  "key3": "M5UJgaNhdBXXx1Bux95iDfqvgPxCPksUk4Pk8G8tqMv6gqs2yeJ8Uu5v2gCwH9iWgRwCm27SYT2zva8T2qqtVPB",
  "key4": "u3RE8Z4PYY6FnuzWBXgpnuJPyoXTZjR9FuG92gE45iB6za1vvs6Sgufm6D7a2oEh8fAEMMdd8UWvcyZvkYpWKzo",
  "key5": "4HWX4Fi4tBQxMiuVNnavrwrzqB5v1gNfvtyb3ccJpFK4cAjX7YWm8q3is3zz1rmB4mwUugFnDSA1PnvAcnw7U1p6",
  "key6": "PDw65DpdPWFA3LsFVYk2rVSMHyk9dZQVRa3wU2995X9Zsq4Pk8fVyQbLbNZB9oVVSx9BE6dYSW9rbLUKeSZW24y",
  "key7": "2LCQbPf1uSH63SruVeHijTsXVZDoJ2RYvWxEUCB4dMfQoYHw4e4A6pw7ZtrNmncgA94XritLVsV7U2Q53iGNntNM",
  "key8": "5nUYcir8GyJBrk1r4tuJpxyDVL5oHXtZVfb9ByxHBePmfDfNqzGFj3qFLquCCan1CbdMYUvT31EDdi72wVH7mn27",
  "key9": "2uYW4bsHyRno4AxpwtvXGQ7b1E4eodXPsxc6Q26EHR2wGbAiMtNABGZFbHPmwLNYWMM9BGzABTcK7UPrNLwq9NEi",
  "key10": "5iLHV4T6DruM1uc3ooHu5zUyTxn3UBnmMAtJjTVQxzUYiwm93fTZc8WkUkmN1HPk95WNMH6okiDPiYJptxEqA9rm",
  "key11": "1oYjpkd6TvyojWpUsZcwaebhVhyjzBQjtMBfVYGcvqfWd7UzFj8ZnJCk7YrmPfc8LddC68v3kikx9ZP3tpCGhTU",
  "key12": "xx8cGt3H7Vgu51tnSopjmkPsgJWW5q2L1AqJKPXk7z1T2absNMhu4i731hD1tn7VX1UfKMMx6iF3kfjwhYkqv8a",
  "key13": "4K6q4JLpuxkutbEYucR3xmxBmxTvp6nosDkPiTmFqBq964Q35qfbuJkadj5J3mSf7jLTisvd46qUfefi6jzV7crp",
  "key14": "3hMQsZf95SD4hAWVgc43FLaoe3sNvKDi86JSsH8vFYCq1i7PpAyugDdXUMazunSCF8oH6xEtu8LzywkVxj5dymDh",
  "key15": "5vtz1aRfcZWxCfvrwWRGdVtYgNasKPyF4CRvJBfEY9Biyj8uPCvn3vq6H5qt17NYCXNiLnY6U7hVLoqYYVQbywS1",
  "key16": "66FLktnKeRJYbZaYcaZLMyCpqL6rDTdkncY8zHCrpgezPQYMA8otRfGvYbDb96zEYr7NJyEddYePNkb6SmjwQd55",
  "key17": "Vi8sauikg2759KZk4iyrEiEUApjC4DvGVS4iPWp7RwEXK1Ygm7PmPShggF7L4bzqMRXFk8rZASh1nAMFcZLxoxt",
  "key18": "mCQUT2KAm5VVyspVGAYrJMphjFWRNB64FrjpWJm78jWQ8S93j1y68CUfgvEDMYxZw1mkkAD2pYe2RHeCFizknik",
  "key19": "4e7KWuTtfwSjfsbYKYBZEDVxg8uyzNbMPJ2kUCEEWQL9WsQjkuyZrHS6PES1mBAfE3JMBhJ9175dz46Q5M9YGBSK",
  "key20": "QpcRtQ6uY5JjKNXS7bBoeTLGubzd61kV5WmB3bSBXqCQ9S3Hb4DuRvVM1qU4N41mkBQuHaJ3UzBby6PABDzeNUd",
  "key21": "2SgvFV8Y9adRoZDoBvVAALhHj8xBt5ceyk3JQ9cp6Pgf1rjzSHuaMxfEuWDJgDvXhNSSuWVuh9ZP8ExYxWz7WGn2",
  "key22": "Rr2xF5jVamJgdkUYaNJ3KiJXXM2gYxBuHkRutwdgHiFFHYJSbrhXFCveM8ztb5Bxsj9YE8Z2UbSmep5zZ1w8M9v",
  "key23": "3k7Vt39JaPLhpot2eehat3m51DSVHqjtCeo8Akf3CKdWNs22g9quEqj1kuegiMzBFYbdiXYGTEJkqwCcgrCs4vSK",
  "key24": "qa34KABuN7YgQad967Haf4vB7M8PpAjxUA2FN5iwvmi9BF8j3uzZQR2dvC4dWFrmphc2oLbqptJrqFcxCtfsMFm",
  "key25": "5PxFHES8kYnk9CLkD4S9Z6BkxFgQ9mM86BNbQNdEa8KpkE1gVNgkxSvMUFNMMuNptTRV3veLijmBSU2KMqt57UJN",
  "key26": "2kDjvyWxPYfbdJ9Kx9n9a5PULVQGoinxkgbMUkBNGWfYmbS2UMp1yoxwE8fe2zTNJo8JiCVQiw4gu3fyGwzsRVLD",
  "key27": "3PLSHJqRnwcsbJ3AZGtMqfeku7byFFjX4kGhNYBGroNF8wMTRvgovFxcegEJJy5tXQgzdu1q1Mr6UhqMWSmEncXj",
  "key28": "uXGZmKpYA66TjEoY9pNLbZqRyiY9MvQo2cfmnQRk7oUZift8UcSWbUNAddGvWfoBkp6awyKdcws9jzB5sDF36JP",
  "key29": "4ggbK6u4fTQ3SMHp2WxKzL2ttJRBV33M1doSYkWYXzcpnV9Zs6mJx7YcLYmsXmr5jRRN8jsQ3TFNhJLEopR7GTdZ",
  "key30": "4Fpkwgpuq8rjJ5AAheBjU1TyykLeS18NLN3dH7VdmL11fxJs8XNPeT35zBfwGgrbjZr1BpTk2VijYWML3sfS2kn",
  "key31": "2yzxfHy3ciqMFbt1gmTbXS2KgNsgNpeFpXRQQHmsTrQx1W9Wn8oxirA6isHF6otwiMHrBBoriPzTtdUE3E1gnHLk",
  "key32": "2W7YXv67U9PqqBYcUDaFovDAVdg5UYb7fZckjWpESz8vgPiL3mFv6yZr9k9XdY7v7aTufD3jknohNY1yoZymrJsG",
  "key33": "2PbGAGzx5LbsMmvan3hvHbtpZuBtLprtYz1naFz3isg3cwMwGNH41B7JSEZfozLL56LGvQ9ANDPskU6PJmsHcgoX",
  "key34": "2ZMpaJng9YN2WKUxFLutsEc77z4Rzv1qJx7c4kLebWNJZJeM2Cxww7H3HBZ38Ma7Ct6y7AWkBF47fqCMHo7v1qgQ",
  "key35": "3E78f4zjqS78XyjGeyP4AAoxexA2BHmpPiqRTYKLUtkhKRmcf79Z3DoutQv7MYSP3QGqA26M8RJd6EoX6akU96B3",
  "key36": "56rybZNjkmCwGgDazquqzA35PqiCks5wvXog9b8K4mh2JEzpbPJx9vgRRvDDciZKLpiyJSeP9mdbSebU3enMxeSi",
  "key37": "5kgeLjs4odyCvgkvkA3auPopjUgnSwicgkb4AY69MRPCsimNrocv4N24WF1H9Qk9Y1ZfjQzLQzWCmgJxGcRm4KyE",
  "key38": "5eQ8R8qvpmFeuSGG4CpBSthfUuaVAagMp2NLs1kqa5mqRSFvDikr6fG7ghWUgqF1tozsuYogLkStEbaPZswSg3hL",
  "key39": "2ABDiJJeBRAikAyeYySRsZVFdbvxFZKZUNdcDkD4AMjHjKpDBqGWF8vzGjijhCaSRprc5ibQPmgCNXeMAkLVfBch",
  "key40": "3fRLhwDF27F1QdMkHaAEMYASeRArbju32stknH7YeiWjn2U7hfs4RbmSRfSEMNgQiwSKMd9PetbYLuQf4YecKB9e",
  "key41": "3f36jeZpEcZearUyrznt7Zgsvx9kCzYUmCvFV3QmVefYS4MTq5Es2CU6qW4cmgdmR6pc9CdgeKHxfZGhsuBKDdmF",
  "key42": "4oF6SUj7S9nFQvV62LgYs4adJ6PeEesoLjzrme7e3d8MdTzGBPVNB1TtU6Z7gChxheG58sQQZFgvzhR6BbE34WjL",
  "key43": "32NnJbnvy3yaWhhCHwbmyZeetenE8ayrKEY6GHP3AWYC3zkiWFAMbJX6jQr3vjnCa5q6oRVmiSf158SfiL7tpnPf",
  "key44": "4p7CYsPrs1v7aiMqjfteopkEQbbusEH23qFfPFbs8WSykVw2Fjp1BGga2cy32uTs2oULot9Zpv4DiBf7WCdMWxXF",
  "key45": "3MtfbTcP1kV78w2kq2w5jiPXiXFxSZ2on2qBePkqS83UW2VKg4GtVHTV8Ky1J7nS9BA6NeGDZw4zHpStsuQqkb8N",
  "key46": "3bPGsLCFF2PeH3BfhXNsQwK6WZfE2WdmVFjdyWBzVzUkn1gWn7N8ubBUBc6Yra89Uk5X4LGM1ZcpBu5JGtVJXqai",
  "key47": "4kmyyU6iAejBg9tkPNH8RU9ny4T63tCMjLEwTAFHAEhd1W6FDGrLYDTHxiMyzXoTGNjdvNV7vGq7eYidSWK3K6oq",
  "key48": "48dj75njMaxmDnwCA2iury15fdjiNaFyZudtu1WkDN4ZLBsovRBDnpmN3akPTmKYirgYz24SwimBEqa3mV9QJG1v"
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
