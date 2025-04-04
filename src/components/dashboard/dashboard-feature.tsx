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
    "4YGLk59cqFsv63CFuDaFuj7sV3Fcv6bFKopPgbZZA6i1gJFpvJNQzxy3AMEn2qzkb6zq9KDbhBhkKvX1r1xLAjbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mmvy4NmmnHueCkum1RjradXEw58runWk8kSmwpksB18EQyh3zBDbCfSwnvshwiBLZDjmhPJB5xK4gLt8ZoJgWsb",
  "key1": "4yBFHpcaZ7YZMg6goj4RjG6MYLDMDNuXtTx72avR8TevQ12w14FGe2YZC7CHTTqNr4BDrHGN3JuHYUXLR3T2wKxu",
  "key2": "G2LLRyQQzNUsGgDyqJwVLaVURBx6Nf9WZZqof4gWScj14dAzRtPBDFQEDZvEVxmHEHPgH1veDkUhNn3d3BgusE5",
  "key3": "2fG7zpdQr4AgbdKfs3wEcJ4aHLqwLAbveLzreSv7rootrQCVxP8LJFidvQ3BJ9qhTGPnvtFqDsT9RGzW4TbRiinY",
  "key4": "2d9BAcUqMD3KKTQrGHvV4JG3TLkF36LLEoQugGLQhs9qQZW5JWcyiUj5LEGPAmb1azhmsQXxz1QfyWYPphTwQbuR",
  "key5": "56uwRyMHN6NzGK4YJQzYb7xwcRd8JHQEEshBBtr8mLcBfQ5o1MkUBhbnVt6NaG75K6uaNNqftYmQ6bmFL1rbkea8",
  "key6": "3JmgKAc5Gi9YBv8kHX179tPmNDgGUHTnHwy519ReQQrSfLXtAMBwSA1wz1KwSMQxLaJ14RbpkhEUXw7h6QMK9DoP",
  "key7": "2Cc1WE7A1Ex3JLDg5App83ZAuPUbYPrYjac6W7Es6wxkfGf1sH3zifmaiYxfveBbJ3CAY62sEEHwwDXyWsGZqttS",
  "key8": "3cdyXR3V355hKWzTKVipJ66EMSFGA4DoxwCXE2v56GoP1hdhbcPo1BW44n1tgAmSHYLRMZjaprn38ZxJbmv7sM92",
  "key9": "4LaSPFQcRUjyLvaSXLsZHbJ7GcF8pMj55sTut9iyr6FAd1TtovUHt3xfNAC9aYzSbuCijHSYUTJfDPVRFw8YhwNk",
  "key10": "2fazwd1rLWMJ4oGBNPqZTg76cbcM1j9kfhEBzwbiy29v994VAnuwmd1cK8HeNw4dYSnDX7jyaZXGQ7wCgsgDDQL1",
  "key11": "4KQmKDTZdut3qbLWV72dZxkx9gzRjsvWNrhUeML7tX2AeRx9g9C9SNnEMFsi38jd4PkXph5S9q41FAmsMUquDUve",
  "key12": "ukcZNHatsqruz8EJ7tAaCKa9koydz5uMJa27GX1BjDtzUWxjBa5FAmfw6pDt6mRKoHff31jnbuZPj9vyJKVNHPc",
  "key13": "seNBdm6iALq5ro6pMTTiR7CTU1rMYaSN6LjnQWtMcu8qNtQftFyvn4VSbtH4jvwYTkQpwASRUsMcp3zGKBj4Wir",
  "key14": "edQUNwqHAyk6wcZnjZkcfEyTV3ua2mk9yCakW5NHaZJJ3SzDamFT1Tsfrje154o76Q9DnWxBr44efSixhHsDni5",
  "key15": "kxtu82Cvtk9BR1icEHoAEggiXCRkdVW4EYRuz8uxYyF7iQAfwJuHUgA6e8y4GNSWaxLfjWwjJB4TSy4BstukNbz",
  "key16": "KQWyS3Lf3tkQc6YuddETTuGVxQ3NxdZ5CHR1gDRGSeEFEoGaMdrV7DNmbEVgY5ej971inV2srcxGezWJ96d5eEe",
  "key17": "5xHnqhMWbhwqVjWaJm5f7P3N731YXmaXCtbJUkQoVJY9aaFCYnYJzAvY9aNrWNEBLKLJz9Nj5hDDDK6fd9vVZBGN",
  "key18": "5NDH9DCz1ncXKKpQyj7JCxM4Ave6S8QqVLw2Xu4mjHUcagVWnxoo4PH8XuzK1riNHVYvuvZwr3JkpckUykDRfvos",
  "key19": "5ZhCrbvZYayz7DqegujRJvA1XWd9eL28pBuKwLTzMZ4ErDeoRJ5BNXyK21VNTE22iJR4cZqrNdbgv5CjGVvtEPLy",
  "key20": "3xLeezk3DbqfeHVoAWGVCCZiyhLr79L2MX48ugG5Xct5zjAXPX815uQs7gNQAR6TwwZwDFSbcB2bHdn58TmDDuUi",
  "key21": "Dt2uhfUBfZHTjD92bVHA3j8oBXMMN2b9SZsYCK6pZF9VjghgoJ5G7FXm5PY7sLiWtCM4H62TAxbee1jd4ErZtBB",
  "key22": "2CY9EBFx8sfWQ4yKcxgjGuZDRE4PL4nP2DHPmtTqMxNKbd3Ez4SmouGBhCMxVokYajnbk8UD69LxB4kkjaUR7VXk",
  "key23": "2EY21VAGQJasPeMtC7oqqLXrT7UkRiFVgbumjDAN5JrvNf2qHFGnN1Lbm8YCGEE9jvP9r1vZrC2a3r8n1QqRDLws",
  "key24": "daYs7LjcGiN8ywCLxKQKSbvA29Bc95qoHXNNCaCddzE3vJBj4ru9fVMYvYWjeLCsxkMXyuTGFp582ZzLqExpRud",
  "key25": "45UDhqqS3ZFYLwmJCHYJisY9EQhJvNrmfRpnoPBFXviFWHJyaufoo1oXzLdH2KvKnsGUuqoqqNcgCvKDWnZ8d2Cx",
  "key26": "3XWNkCHmguC2tDLFYqx44BC8xF7r5jZBY72RKECbybrAvmNzshfa5VDS825vMNCe8FKQuaF5QGSvDrUd2MnGgHJY",
  "key27": "2FdvSJ3yT4SzB3FmahGci5V5qZZjbmMhLBEKumkvRETWGspprvYD8W8Zt3GLCL9TRsDZfuK2B7WjyJFBh2AZi7iZ",
  "key28": "2jJ6UfhVFquqLsxhQWdyJJ1U8VuvG9gouwPztFFTAY4KMD3qpMhexHYxfbcazkkx9MiArnNaL3W1iXjitkmrN5py",
  "key29": "4sSGzumUbdTxR1HMfFvuwj5uoJxGCsschgNotTnfTHAxe63Q4SL4oarJbJZuMpwxDwo3PbEeJUdX163Du7uiUuuY",
  "key30": "2yQFbNmocdWsiYPojWMWpUtkMhh8WB5ioYHqCsZ2gMsmLmctwfSxpc8iZw6Hxrm2rpaCy32TTnTwmT1ikNcAWDDH",
  "key31": "5PXGKdxLwmXacHsb9nCmkPyvj48Xp3MszVhzjqRzHF79syFLoiv7FxgYnD4F32y4xSFpJjPj3tqG7f6R9VSDoYfG",
  "key32": "2mrfjv5k6QTtiykWWgVwTt8XehqRrpUp3rce6iaMASVM6hvCQ32cUbVHv3qfKZPbRdqrYzxewuAgXFavK9Muhq3Q",
  "key33": "4MXbH29arUtTcHsT9E1fQpZAaVeBQWQ2ueGoeMPjJ16VtX96qNcGusb8F4SBHWiXmV4zkk6frps4Xo45RtGmK3V2"
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
