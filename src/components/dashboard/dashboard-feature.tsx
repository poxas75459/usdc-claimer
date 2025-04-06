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
    "4ZtU14QPdPVsbYypaBadd42zNTmW3ZpmeuynvBDTmnskj9UBbV2mvmY4h8PBx8GyE3ioG2bEiczVG18Jiq1v2iAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZhNoLvkbMpRu8JAUuyqbNWG6K9FG1hbSgBsKWm4QUVueEjSoR3XWZP4BPGxLM3GvN2QM1VLVU8EjFxC7V87vvr1",
  "key1": "5xUCTzZE59aCgiVR7uGS4vrou9q9cvJFauSBZmzBrnxoCzPN9UHQi4Ue7HXsnKgs2XKftWmamqPCzC97qjrUy5CD",
  "key2": "64wymxwZxMC2j8QcSqXNtZkKi2tF3QHDziiSQkUqGVjydWVNAYhdKq2ybEHNmhem2dEPRooWRrStWrwzS5EcwfVy",
  "key3": "3jpS3ge3sp5pXBjnghDJv6sDDVyYB1fEaFY12PMPosW9h51UrSjB7NLoarMd44aU9DPjSqWYf5aavPWC7V6zt8oc",
  "key4": "2ugLpmuzPT37u44pTCcqTQiU2tKrx9QW3GGUdEY9ennRnX2Ghfz1CBmebaaCeqNcjbc8fWrEJWe5N3e3F2xHS9CV",
  "key5": "64cXP3fdUrZxyVTJn1xsKggY78JTpo5uLHGkz9MmBwGkGMonAbK1UnhwSHF1MM4DKp6z1LH6EUo6ryp9fNbYG2BK",
  "key6": "2teAB2L7p9BV7uuFbfFRK5iSgassbnKfAmtN1MBTPMd5j8ukAFQ5nNC4CtPZUwcSxHfnazGmGC9HJXampdiJVsjm",
  "key7": "4gcHuGduFYxrc5yAjNrccKQhxXXFfL6Lvfcr5mKGucAbqDxbRoG37huHtWRexeqWSnaFZv9cvD9qz6zuV53ZcgHe",
  "key8": "2RdGJG3tfQETZHT2Nv1gXWMifhobCBd28ZqzFDYwt6xEtzZi5T7ccF3m4DEzJG75M5zgHwqdReyPmxBvtmvHKWpY",
  "key9": "hXk9nGfxNwHCM3nL86nqb9N1PV2hkp1ZiPg3RV71xzohDcn7TksZ7zntfSQYteYSpA7LxhVkXbhE5Vg4Sd5SCNV",
  "key10": "5p3BAgnPErDPgiwwfxT2w94HhuEK6fVo4YRehLNrB2mALE7z6ocg4KS9UkamyCi3szuQLYPebLHJwDvC1aXjUB1V",
  "key11": "3kdReZ8CLH3hTqRULGUYS9bfLKsuzuRovtXX4FDH9XQuPRUbHjkMnCL3hk4Zoa8HLJkpAD6SvPKdrzKFm4ZYdTRu",
  "key12": "2qb8A5C9o9kBRjd2J9AVYVgbFLfGLbvX5GigrG5veeBhMSaVdDG9Wmsy4xrQBZWfDcPKGamSbrWpxscv8YiP3zf6",
  "key13": "3yCKxXDapMzCABASGvBzd8gafB7znDfWDqkhtWcKWUVq5ikwiiMa1dWhpCka2kXsJXT6dML95Tr4BAWc96x6WYpP",
  "key14": "22kwc2tU5tLBgrenrwJBXMaMcMaqmGfHvKEpQ2DMpJoDah1R2komRWoWvfwPT2RWPfAW1uoNbB1as7ip3A6z2hTs",
  "key15": "5nr2qUUiJVRT6Qm6d6S42Zwe23DTsNmoGshMEinDaK773nB7qjTqDe6NYrCReVGQ5PAmEnwS9RNXoxi5eR496nwS",
  "key16": "mDH6xpeDZPwRyoZkhr6EERXV7x6CzhQ5AShjQr9graY6BnZnjtazbKriURYBnZQcY4Tzi6tXEZUAMgaTHyTe5gA",
  "key17": "3qt43B9K1MdLTcWuUSDiGnuXnHBWDRZHt3MGtzEWRHsnqJPjGqjn3DuU1VzmWercz8ZeSBcZiTmDVHCkSzaPN78p",
  "key18": "2mQykV8gZBEBEAsPLE57uVVqGfUQc4PZNhAJYuAR6fA1WP3aYDQDgPAgCdPqvbKA3Q26mngPD1qwt1qq4BnkZadH",
  "key19": "2nVWGPy5kvtgLmwve72BxLUCdhQsgN24yY1sXvLJi8CS38ZwjuJZYoxe8TmtqVwZU4A9veu3xjUfstyvv7omPjfr",
  "key20": "37Cx4fikwqCv24UkWL96KfSgWYjPonf8FkFK5nmL3nb5x2y4KBinMS2UDTUpzfk2BiK3qxmvktL2L4QAyB4m5xin",
  "key21": "2BwnQCqgGkoYMM2o3ZhykahN2dZh13u75KmD6QbG2jmru6ZoyjVkuqoKG5h2iXoqoRdSc6YjKyJe1HDyN5QfehR",
  "key22": "3WaxrDpmXFbJAGxzHokASTYRtD8raLzs3F8yZUpt62uhybiJZp2vkiUZjKCgzxYzWg5xPpNyW77FoYnPpz3hXAvx",
  "key23": "3zqWo4TjwC5y4zGGcfejZN44jbJn4Yo6wjfXUuDMMesASe9QDsvYutpcjWrmbYRZBTRoQxYasTQy8k193ZiVJU2F",
  "key24": "FunJgTtxtkrxS8C9yurBpFSsdpXPXHyNBNJpobmjEvJ5NUBUKdSQPuvZq9HKDbq7V2UTGvAWB59Cpp1q1saf475",
  "key25": "4fDrnbqUFsexjipyPfhEWphW52UQZnB6Zq1QLoof7XvGwQkZN5PqBSqQLQ6yCEFp2wqnEZ5rMYBoQmcpD6y7trGA",
  "key26": "2pfuUick3WJRkCmJuJv9T7FYFvrRdUchymVzLdqD2iWvFdwByxrVJWYFWuMeZdnXNvUAFhASVzQc69eJkwSsnJnj",
  "key27": "4xSDD2kVZGG4GmaJq791PquT66Dmk5a7chnbxqPiEH7cPAPTCqmtpicEWXU1cRMw2r3gKfNuiheFCaj1e3cwbGPi",
  "key28": "3YSJ6yoaDdineWAF923gFMpCtVwAWh1XREqjT7JbysyJdbJAU6i7Jw977UkKtGvq8h4Nk9Xd5q1cjHriW4nRY8vz",
  "key29": "5BWhBAkBDUQfnZ4BZ4J6tMyDeDf351tqrJZ2xgmNCyuGVM1Uo4NtmmQNMk5AD4YupHmjYo1B7usFwh338RYLLSnq",
  "key30": "3v33HXpgsjV5FcQhgjDfW3g6sgSrWKY1wkemki7bNSFVDX2V9xvjkqXfcV4bjBqQWzKygPtEP12wkJxsVxifsWcA",
  "key31": "37wWaB8RLb3jy3Sm58hHYMcWSJyvRsYutju3tGqJsd1W8zuDrwn3RcCL1i4nG5qqv9i7hRGTAtKMbpQH7UxXdCZb"
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
