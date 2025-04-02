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
    "3PPuvJEGHjFTdLkxJSUSTjo4EWZ4KjRcY5eYnXFiqDaessPHe19DJ5wJUJ3kLmPBXRYtmvfvMiyGpQA9DLWpirAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DT9EG6NsGmaW9Pp34F5NjptxJ8LVqEkgb2SECkJajV26tqUJ24Wp7oHZ2J48g61BsiZ5t4FVLpwMScGE8KZ3B6b",
  "key1": "3cUCui46RLUBueKMvqszxVGR6HY3f7dSriFLZm6pArgqksX9Tde3UsezKxdQGqgjqrdBdCwKcBhDRoYYKkrCMyY5",
  "key2": "5aT4sgV6gHBYhBa9Tu3ayMAKafwhhSwHxDC7WKWRnDYtEd3qSruY4kAB8hsKCdghq2KKWxmNbrodPfLV5qv5Gik1",
  "key3": "3Szj9zHPyH7ksgGdQ65nLsmyowxpTJ7qB3z7jHV9LJ4CHBT772PZ4ES1zJKoszqu6RxirUQ5EZAkCZwqWAbfvktk",
  "key4": "QwNFiKeevoa1K8HQ7vVQLRumfif2juSRnwGy8F6VcTzeEBjZ3qMUn7HrrosCMLNkugVTPPRsAyCxMs76XabtFP8",
  "key5": "4Q4Vt7TVdeBe5yW1wKaRnpkgxLfLYTtNNjfL8h8mKtnZXqsyQuwwQmCk7htmoiwUvYYCjbpC4Mfh2fEGXXFCf1FB",
  "key6": "4rmMJgskeSDEAgkdGQY2Pi2hWtn3pWVUPm5Uv5jqYPDX7qUb9vKnvhe87SGpPkfWYoAV6KDdokxDiJ7G2xQTwPTr",
  "key7": "5GL5ePs3PNWoc1itDkra6GhifrMKQfxjQRqSXyhvhyRYDmfGv13JS7i2C4aHLNr44bV6z3YqYdXGgue9pPqcBMtE",
  "key8": "bngf2ZnSfErBWC7uUshsBNKTVzsguTJhzbsChMHw9z8g7m6jPAAQwr3pJMufM36Qf6xtpxL9nLiVNw1JqbgWzSe",
  "key9": "5eRtYdQFeqeRmbu5QyWmU54YDfEuuDYN285QRZfnqSeFGxPZfCa7SLTsW6zfCroVRfmxdt27hN1oFztNip52Jyjj",
  "key10": "44p1VHWAxPRZvy66rk1cwhVENTSJ32o8qv3Ujrarag8KNV62TXv8mYc6fWYJRtGemgPqqnAQTUfoPdyDPCaJQPmA",
  "key11": "4bTTmuwnjv5oe7jkJzntV6wp5V9KPLCnprxVbqtrAf4yVTrekCUJaFY2NNr3yP5Cx6ZgUQjm4FvKSubCR6t7i3Zs",
  "key12": "4P6nX6kwuBKg2tBLk5TiPtvXy4iedcZ8fpu4dFEYvEZa19Y1odWUZSAbTU99iwQYKqMM4HMtbqzt34FGLV2Vhoye",
  "key13": "2TXJM6B1d9wmsVU7KQPemY1xjxUNJ4PFKebp8oNWmDDmosCkEJtpdZMViCi3oCZfo3WSgXLprc6T6vgKJX2f4djc",
  "key14": "2454x94m96iYHKQ5tkrX2Dx5WEMHHq8qLhpmitkySCz1sSkYU2mBnUSnq8hzTeTsRnNx1iJns23fRhSpRUTVqVhi",
  "key15": "4vY1JgoHHMoCNN8HENvuTF8CXUBebfKnvQxY4HeCbw1yMSYBqTdo8CnT3Z2GPJJKheNbCAJtxo3nTFCPJm2Pwysj",
  "key16": "3RpALJcQmxaDqj9oh7ACkxkyfcCACGqp4JZiXwGu6D77jbPQzDSrh8ceaennijZPec9URmhn16QTuBFgXkyR2Ez4",
  "key17": "zgppqMcQMGBsUoQtXvPnyRicwtWakJLJk6LLX47pRqfZzuMfV7Hcz1diVBh2XmvUZCbwFHwpLPePsVWJSSD2Czx",
  "key18": "4qeR7nLdK8tqFPwrP6uTwNMSPRXibnF6FzEd2Gi5v8HE2h1TB83vAhrmLqS2dejTb44JtjhjqZvst6MYpk7UWR5",
  "key19": "4brZRuq7wQkYDorjW7eLQPWwP8cXFdRt8J4qCcb9b7oMnJft4ofiR2XHLHjaE3PJuNL82p3tByZrcRfecfsfSL8u",
  "key20": "6SXtUfQeUwq4WBPzSe8AThfuUyeQsQ9KppFEkU5V4Sg9UanScfiLnN3Z13sWVjjmsPg9Vb973ko8MLBmYCUfaXa",
  "key21": "5tsEySU1gL473d8nihRHM63HL7TqyucVF8eDxczhsfmjeNbQ9Utop9fdrFnCmnMQDUUvEg6PaEAzaUwBoHMceETS",
  "key22": "2D6oJoudi6zBvGinyyGiWDGm8W5pqMfxjNUShMFA1Ecm265UgDo2JNn7e3PBQNt55T6XyZ7ywkYwCoD5EJh32Mta",
  "key23": "3jbuyZGgFRo1kNfAJPXUevEA4kUxPGxJuS8io7qaj5mgGXKu4D44ebgwrB9xUs7N1DUmgtfSTcyPbofvMeXAHTfY",
  "key24": "UTg9SajWGrcX8Nh2RUkTdNsptd88RUsQ1swW5wWoCtXQSjrVpBd6GZBLu5f6EEESEvze99A9VMFmnnQY6sgfwbN",
  "key25": "5sxEN5SYDgMpY9ivrYFu2k31c1zEZHCzxoCTZw11j3iVJMuZNjdJTqjFc6bvRPwgAFMmnx7MsVvkcgCmLfR7ux3o"
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
