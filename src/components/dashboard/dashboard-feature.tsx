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
    "256rfZ9zTDy8oe7ioKoVy8e8QYnw6nwXj7KELWVqeAaAHoWmddCHVFkrjs8r8Xp93GmD5SsoGHqoJr3rJTdnYKc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBzW1LuY1gzTVuqBr9mBDrkHxir1ozPnZUFRjoTk5KsQwY7DjwxYY43p2MWNuSjbWDcRbhzfaZ4kzPiMp1K94nh",
  "key1": "2LSsfB95N33c9b5G6Uozae8tqTupVt5AB5TvCYa4SwvoERcET4Um1wCbYd8kdugsgYauij25aqUe6dCEfCBP7wUW",
  "key2": "34UrNasBw8UkBRmFwJ3wv9EPtUpzvU8CQiGLhAk9Jt7TRM2QB5ZLFM7891LrfECe1abZUiFkG8ALV9Hi67x1yGxo",
  "key3": "669pBJbSRnMqsahoiXCLoXdX6B91h7ZJN7ew6JCAjC7cB4UHnvj9TBzc4hJaSVwiGEWqFMbdJ1WCj1yPUeNiCXbv",
  "key4": "2aqiRsPBRxAJLyJLSV8ox537G16eqHHJCneUHGckqVHpKzrGaNcAUXgtgPTWMSgyS9EbJJTXkTHs8tvq3shYrSxm",
  "key5": "3nweBSWiSZ1pvEbK1NxzW2rZSpMEYrreM1LCBCd4s2uhx6bMLDnCQ9Xsd43pqboaDZwntr4KDyJvXSQto16AoEWG",
  "key6": "ceC3dfgGtWz7czx6cZanSunhkVgVvkjwtg7KanNacvxn11BKBT6fZu6gyLae9MMUjyEAos7VHF3xMEcRKy2TUSN",
  "key7": "4xuwsXaYwUimCqFCPdxDux7Sdkj8TjQTSdobPPmCa3tk79nXkVEzvgFxeD3WpQSRCvERTaa4DZkFHBczv8Ztmbay",
  "key8": "4E921QqRKtsjuXkkir8AY1tM5dYkT82CBKf1TbwfkJD5BPiDe1KxRhAMGf4vrMFQod8CPDLWP2yYWqeFWscKu9Y1",
  "key9": "3XtWqLBzf2STSYB9vjvM7jBbPauud7SZnFudy3guAfeieZhQDEtTH3GYjXBkceDVU3t8BcjBQUMKHVrHyVJMnVZj",
  "key10": "4ERNTq9i79pPYjiky5XCEqY6gnDnduPECoyM2fHWn5AMuWMEYnzYg9WrR7u7sA9QS1NCjHtGM1WTaRkUdsAka8xA",
  "key11": "4M7Vx2VrsYxLUYUqwmdoAvav1fGpWNiK9apgoZgPNRCaXVhqDNdLwMdwUgDgupryaLA3bKyrPsmBCzz5GPWChTyo",
  "key12": "2H1cpDZk8PRnRoxJLrH6GceY1BVKXLFGCpvfoCKstTiEPQxYosrJFb7LC1VscDsH1amGb17uE5EjVNiRZesrADDq",
  "key13": "3u5sLS6fop5M5gz4ozkUa6w5xa94WHhAk2K2Fx5j3BnhaJUia5u5dDh44EQS4wCugaNg8j27aFNCRUeGcsetAM2g",
  "key14": "nMHUqUDFn5EjQD4AobLXGbtZ8Ur8oLj5Ss5CyuCKHW819BDz8vTWfSRpKYKhxuSPgjFC2qN72Kucco9EndZBBY7",
  "key15": "43QRyK9P6xHrPvnJE3nYjHFEAugTyNYW7tWDv3UsCW74mQMGuAHiTkjeb2n7CWDbDNm9pfhigSMgZKJoBJ1mT4ft",
  "key16": "4tMAwaweEM9HyJDuGTYmXiBtp3CST3wTWBs1c2p6fHC9eSyr9afKg9gvafrPaQVkkXn9oT458Y5AaPDXBiW52sdK",
  "key17": "46TmL9Z29rzJAbdSTG7eK5gMwARTDStm6HbXQiUDUBU7s4sCuzHVrimjTBKsxofcUuJpjwKo1gg8xDWxfCUDHUqZ",
  "key18": "2sByZFE2ran2GjXLMfeT5SNW8BQ4LuoVjmTLXj5BiX8ytsUg1Ld7kPowgL1FS8M9tAKrG8iayAXB8PsAp5L6q6ia",
  "key19": "3UX1kXfd73262kyKtNmT3Wb1vnyuorF1WaDf4c7fduTHEok3HCYbXNccFvU99zspmoe7suTuwrgAHTvqh5XViaGt",
  "key20": "56hdgNawa3pmmVoECy9ko6H3HcuhytC9xhAEsJtHyzqB95V7oV3Y3pyB9BnHQCkaDqL23gxCFsv5HAWV5Nr7S89L",
  "key21": "qZhygFwF3Z9U8vzTXnCuy8rgVAm9Lh3REaKQCeMwDog43Jtqn5XG2D9pPKdUxJ2dvfnjnfKwSCuHsumDJPJWa3N",
  "key22": "44xQqVsZFhometpeV59e4rRwYRrpivU1nA7sSN2SBcgzg4Mhpa3rXQeRUExxnifHQH9iQY1wzwsAruSCaDbExcP3",
  "key23": "5ybxoz4xvMXE7MVuza9ESsJmrZSXt3EgPCwbc1eQ6mzMui7gn8NAn9pNSkXzXMYp11GRG7t3chLtFH7FsEMionYS",
  "key24": "2WUxPCqBmDBt6cRVrDMgSwLayes82jJj4FJ4NjYWKLMEavM2y6CX9Ttz8Sp8HTEsw1bUe5EK9mJFU7zQvc6DFybF",
  "key25": "5xFCXw1brcpyUxUddGERpXWGCTQ56JBngFSSDWhquxsdhEmr6SzYm54WGCyGHaAQf24YCC6vYV4uCAhjApirZMFm",
  "key26": "mMCYm1dWXcULfCnRMrYgGm8ySHa7q7U7yBbY3vgSocvk1KCSGWBqo71YAJ1662U3SFVDGC8oLtTtzVjFpigw85W"
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
