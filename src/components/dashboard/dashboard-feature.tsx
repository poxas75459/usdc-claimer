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
    "5d2gatib41GA6vbKBPFJTUPTU74xpBawQUBkuJBgF5Pey2Z1mWEaj3AsmgamTmyfiz9dupg8w7yzgjGEWQSpdPd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eH3X6ziQz9PSi4CuKr8UQPv1geZfsK5c1Rks3ZjiTGbH1TzmLV2uFaCUEDKyFvXmexafXxAjWNNPzQFz58Bj8W6",
  "key1": "3Vh1UrEQ5F2hGi4R7ubqwARXqu3fP5xeRPZaVZNoT31genRQoNd84iAkVkRXrA4sDkXWhMTsjQQv18J1TErakZ1n",
  "key2": "675MnJj9zY4yJM6s1kBcB9JruPtsXD2s6X12c44i7LiRcmDh1sRCo92P52meQz9hFX8ZSpSdAVSCTZiFg5jEHvRq",
  "key3": "basrQqtwgX1sBBehu8xBoWvfZUAWPQ1btbpfGqEDUG1qjR7UCbeq1b8gJFX7mey4tKUcFQn2nFgM7T2gHXaL3c7",
  "key4": "3ZXt1qdj4QsAKuwxQqWajkCougW61W18AtHxDWJikCjStUuadRx2GMWvGBHmup6soMicFyXR1dW4YSK2aVsegUew",
  "key5": "4gkx9jvRFdocjwLeVuK4aWaXmnDv8WM8nBCXsSgZTNX3L6y72LFiYhVyr8vCRqGWMUqAL7LvfdSc2bFGMs4Se2Ly",
  "key6": "2oBZZZD7rBwAjQV2UWSuraGB8p8LDt4zQNiCtkQymd63b1uWGahys91cu9p1kjePP6php7DZP383vb6eJe1XirYH",
  "key7": "5PZuDvQ2F5zuf9A7kD59TYewnAHgYF4aZVyejxLCURZbzR9cj8N9MKGTuuFcUgmsMe7ytdZiBEUqh78Nt1rVGibZ",
  "key8": "3XoJvYS5HFYLqncRLEy7av7yVWuVJA9e3EGWMogKZ7u8dVYgk1mj5hjticnNrQsTRgVsDF3AqMUr56PAZCiK5Bw5",
  "key9": "h4kKuUvp9ffh5mXiccq7epRu6gdwsKeRSFyGLbErwB1Agm6Rw6BcWB5rJhhoSDM7uJx2S9UsK1d1ZNqPdKDpsMc",
  "key10": "4DCmaXrt178EyhvWz2JZfwNq3PvaWtWu7YAJcnSmvyop3cNEDdV17KfWPLgyUnEWzAGUtqba7BTd6Uxzz5eEZ3Nb",
  "key11": "5UjyKCnsjbsUqrdhhuUYzWhPaphni92AaUhVZbpufHVN7jyreTXh3CEWFs5z7GVRBFZdbPGz9tFMPg6nfeuDjzJn",
  "key12": "4WYgWBuLzUJ3LNEpeT8aUWAsGHyTosTaJ5A5XtL9myY1P1h8vgUe1oQrgwJUVtjqAnwdWHS6tJ235kPdvHoj4jsX",
  "key13": "3wUgzEhgY89UmjsgQCBLAocZupMBBnP4ta5EV33FcW13t68ShrSd2zJh7zEk8ETPSZ81zRomrJ5ASbqVuuviBASt",
  "key14": "232kihzA3vEfbqMFmtFwMGryZojhGpxgrMaGZW8izj1Eu1CA7N8Uc3Fw9gBUYKAecAESCtKPmD8uHndTYFb3fxnZ",
  "key15": "ynMbQ8ykKExrxrsmYaZDXNi27CEb4mK1MpVozbvuf4eEQBx7v7PefRUy8m91Ue88sG69mzEpmFW3jzcXeeVEM6X",
  "key16": "2akrUgUvN745HUiQv6V1jYBeGVpNNuUWAGAutsoyHBBx31GJNpYQsBVhYvA4YviYgGkxgJs33rnrR9rh5z1tJUaH",
  "key17": "43uT98BjFZkeEtfzEZ9uEfB4FYTWXe1shLW4WKMsrfjEqEtb6Vn648yDV8CG6GJL4VWaLatJf2KGucJVZx74mjy8",
  "key18": "3NTg89XMibyeqxDXB4SMoWFL5YfH1eY6p7y2WT8JTv33mYmqaMQHkVgTEp5TfQQfBbpWtDmKuukEVCcTFu23vgjE",
  "key19": "2Epqww5px4WnWFuTxHUHRsMCjx5rQyQwhHLJFFbVACsoBE8gjjwFmr7TRNmkRXnjk8yfxvhPUQJMWXfTTNGVLz2h",
  "key20": "5REq26TH3o9nNmFm8X1mi3dRarxyMfsp8qUJ4TQtQGriSgVCv3vmPRg3YyEciHz9TDAGcoJPkRPzFAGxA2b8bRx6",
  "key21": "38JF46mPqjipxBBt8vtj7BENUgHd11KzUWBXJjzUkz85sWRYPJGsDvRJAyL7NAFsga6DEq5CFdALkTuqFgEg1ysB",
  "key22": "75zfdWBAakre7MQitxmVYdzT5vtSL1SfYUY7tGEtb2r7QnaHs1Gs6RrQoKK97cpnb6n15ESaec8XpqhdLyHESFS",
  "key23": "5X2KsG5EcYPbxHs8xWF752ib4CFf4wtpMrMgJTNL89r8d3xPX9FLTLcnrUPBBKJG6GmYGxnApc7ouaosbqJSxeYw",
  "key24": "4HpaS5BzGPAAUrBCsxQaM2DqkGBT6pUuqapkSqXqtTRxXQ7ggMoUsCmbR9SHhJh1qfaCyz7vcDY6kJt2bzfCEbuy",
  "key25": "3Xt6Z1ZCotP1C2UmQ8xAV6MtfAq1Q9wvkzJBa2QF8pJQErsviMjz2ksMfqAPuztGS8nEcVNDSruyhzj2KeryBLGr",
  "key26": "nPjLVKcqHawcqvTfn1jLLZRe8vCN1uLt6Fc2jAcdjVYuoNfTBXejF9pz98UgFmyqanT4Lw6VqmnenhPA45WnBkN",
  "key27": "4vypHGcAQ6vzuKpVEA6CaGsbud35uSsZLcf5LmFAE2qAC8Ma3EstiYu2cNtQ756C9WhZJiN1pQJ8ZGh2pu4ofKyV",
  "key28": "4GfnFTdpdULvY5fAm8NnMoH94j9zRGtMM2ax2ysA7inVJc5FfUyCxuu75Pj5PWdm5d7M6Hgq2mr8ohmzj6TgwZNQ",
  "key29": "3Suiedoq7aSSkDgQUU44KFJboR62md1ZpMj7ZYeoZGXD2Ubxqso4ePmz5KXUik3XvQogrXT3rEor3jVB5YTkZzLN",
  "key30": "4R5ehWaNUGfvf4ArhDubbnkFtKkxbLskkUCi1LqweiyU7VvrsP7x2w95QzpwQgBnqSuN2ccAq8gwSzqkbu8pUNRn",
  "key31": "kpGppDf2Nj4TPMgU6UeFZMCJxR3fajotoCoVxM6fgX7DJRSS3aBNpaR6x5nzuWHNthCzpTVyai82AdNJjjih6KN"
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
