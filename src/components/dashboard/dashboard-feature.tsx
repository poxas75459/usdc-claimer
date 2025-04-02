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
    "4HaMCBAKPeUqsWke3FQtNyVeJE5AWWiCHSn276qYBxkSUdrqB3onTJguCCgQGYxEYsPuHRAZA9zrZsncJVki2ykW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHhp7dfCjVMHZxfY5QinYVgFwpF5wAenaJSXGmzEYMsaUuCBAZngAq7DAxpsmyFqejFXY6kWPLeHELawsh8Gwsw",
  "key1": "RnJWKWzBuCiFDko29EByyqusjk16x4fgo7pxRVQbiLzpPN2LjejgqPGbVdmS3DzjuoNNtouyAn4mMU6FpDxJ1r6",
  "key2": "39vbWvRCjedx3QTq1QjxTQws7YP3JZKZBLj8NDfwJChe6cWTAVcQM1s6dUNTS9y6q37vZnVVHA6ZnehxTL8P29z9",
  "key3": "2VSLQx69A1bSFneLyTZkUP3uj8qFJgWmicUcFeKX41Xr8neydqtkooDWN4oKmFt7fnFLYdbiPLgxbrHYtr9pxQbQ",
  "key4": "3ZCXJnPatpcvAfMNYrJZ7o8gB4LsU8dVTpSuii1brubJhU15GD6yjVHW4akYbZ6WYpy9NJuA49xP7r97FyQc6XSP",
  "key5": "kzxZpW5dJcMQEdsAsidiaJp63md6yaPWBV7zkZRn4mfek6WF9QqphTjA1z3XjTrzYyJ5YeQPQjfY5nFPVtibJFd",
  "key6": "2TnNFjzFwDWDNZ7SkQHVjYP6YZ9AdkN5NKWa9nW2nzAdnSpYa66rTvsAijeCaat5NU1FGLZTHprdKPwKjQy648xW",
  "key7": "3uEPz9fRLymzeXJjPxMZYApKu7FXtc96F94izBby8XRYKUcHcp7PW4YemWqwfPUkGJjXUCRwQk7rssXJsWYUKhQB",
  "key8": "pZ9m4SqTcTiGunQjAbkdyd1Wb6fFdhiBXyx6AkogXFprbHHUDq2ykJZ2A9JVEZgkv83VqZbh1uCgjFaGNG2NoQm",
  "key9": "28t7PU1pojK6wJRME7pH4W8xpjeTkcEw7xjARWsuGEqUy1KwBgfVz8ySEmr6P4AuoiGrXt1wwnMhMXifXWk2Z6HL",
  "key10": "2AtRSsurcMQwp9chrtHNo6WeLW9Sya1WBMNMQXCkBM4Ld9KX2evNsjZWgvApz9SLDeYyguEeF99D1X6KEL4goY4b",
  "key11": "2nuWAZcyLJut69CFJUCwkpd2dHPA85ekBVYvbFxzY8CkygvxcwM5RtbppJDg7iFQgoKDUnx3fZfFamWDRxzv1UYq",
  "key12": "5Nad6jJz4akRSUFKzv15NdiAPW833FCKqpS17gHjiVw31BprjPRYLcMZwGsoVdzu9fEcBrUtyz5Af6WcT3nto5mz",
  "key13": "2KvtFfiwcitB5fDfWKbHjyJSJKANWL2SBRstt2pLe1UxwyNvizreAkoK4EydaXMWeP4GdRtc2SEiJnaKuQKZsktz",
  "key14": "4YNshwSGWgHf3xDvT5YwCH5RNYoZdDGiPSaMP2u8rbtaaY2mNtegS3AkfsbkVuALJGoNWh7NB3g4pwpSw3oVL5Jp",
  "key15": "2qrmyz8Tjb1AoFvnhieTP9KZQzwE28xiif9ZGGePgrij9KYALBqUZJePSaqJN9MGv18g53XSvJGUnWWF4B5sNHFe",
  "key16": "2NTnBJfzV1YdhBB9cnbEashxAdpBDyPpFUjNaoUPxBZpTrdQoDdo6fCYqeRqrMm58mMNRmt9Uxu3JbZtdjnL4b3s",
  "key17": "3hZDsjPvv1SrDu3x25RufYrcWfrysCfcm4CacoTXLQEaAW3GMkyf2grg1NfkC3vtXezSRKyi8Fei1gNpjSRsE6ZH",
  "key18": "39Lxwo2QmkLsWkjdbKLAtby4ZspWCHQC3bBbayNdBZbWyJnW3XCfZMByPBdxyCQ4cv1BEQDj7KaNShnxYBweN7W2",
  "key19": "xS3NDVC9SVhY3AEmeEPNSsfBZEuRhVj11JgnsxqvR7rrE4kHhpCNUk1R4bqLhy7JhsVqCzaQFSB7huKhJXZtoBk",
  "key20": "X2M496HUzBNgjFCt9dW3WzYxm7Cmq4YfLHqeRqX5md3GzLByRvBM6P3ZGiKuAwm9G6KwUqCreUjZtuT4d7DmLZU",
  "key21": "5x1vTS3LMN2mX82dW6DS8UP1CSZJeEkNhitpCqSnLic4tYHHqL2wDEYobhRbVUpiEtr8He5mDsL7Eu33z7bmtDdN",
  "key22": "5aEFfFvfFtGuuptSTrWG4pohAgLeDRFofoT4M6UgeYEBPiYeBjH3SU5JdAtq2XH9a3aMffbofLTwifrHfJznvAuy",
  "key23": "4HkdkhEjVtNsVcmzMCRgAG8ysB1WxeAqPVyuv2KMA7AyM1JW3Z1JJtrHzmtctcJ6nKbUbMgJDSRhAERCUCvoEtTU",
  "key24": "35hfq7oRwLaKdjj3eAtRU9bGrPyrv2Je3KTruMh7WfczorqASwL4H6b97fPqvL12RQ5i6wZvvWsq2f89tb1HaQj2"
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
