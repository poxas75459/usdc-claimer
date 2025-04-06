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
    "434pzEG7RqYJ9ssHHRQH9uMobWUgk5LP62QtnoAphiiJ3dwyrafqRdFuNqrBHaV2gZ9oARHSvtD3vcma14FpEXXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xKF2yvUQeXXSnNVfB6v9NB3vb2DerPrFxLbbJiXJdbtQHPvJGigcZu6ZFNroWzSi5p6Ec7cvwWE36bNBZfqu9EJ",
  "key1": "2LtTTk3XS3PVs2mAzJo4Zmgq3pNSjvnTbCRdbLWa44FGbrTNSX2VU9ivbe6PEMVmneDwVAJqUMwPz7rviDH3F4ek",
  "key2": "R94m5u675KMNRkRSzDW59eyCaGmJBw9FhpRyhXYBDfxYtp1gQp8xXY8DwFJG6QSwMv9eL8EZ1hq2VsKNuq5fTHm",
  "key3": "2HubrhfntzsPYhMLwcHrLPxos7PXBWXYuGiJSG6V87e5qqpreG79KtA6KW6fnEf7sTnuXDo1dDULM4NmuCcXMKXN",
  "key4": "3jkKXyYbvGpwP4MPXVByxQz3dzhwcXsJYXibdjapkNPEnMiTG2SHSrLPTSBjEP2rUB3LuC83meagPyqYEF2QCH8Z",
  "key5": "g7V8iGmPEKBztwAiqueDNnzkug4mqBEDPJoari7C7PaJf7sWPbF1mYF54YgxMjJtdSEUKXahwgLESZVxEXfXEDN",
  "key6": "3c49qaETPSsvQJG8LCCx6C2cvdZoyYdjfuwyrPuTrZQxXAApwMWBHuTbxXomp69j6nSYehkmLXn63TXKhe4maKvC",
  "key7": "5pnFk9PvNWxsVzd7ar7vKPjKwXC84qHKmCPXzyJt8154neCNkUPT2EpmTvCRgTFSJ5uqTGZeYXnrYJ9jbSRdVsrZ",
  "key8": "4eu5S7Dv8Mg5mTudY4mRAmGvzCs8XDAZoCNVomH1n3K5ShUSWbTmo6ZbLXng2f81TtyzC6AMzamFdLtoCD9RaYzv",
  "key9": "2aFMS1i6EEY5i3qr9bcyCLapSD5Bii2xfdVeKMXN9opib35fWUPGTmpDJRiQkx9RGJCAoQLJ75XdhTPTQobueAQg",
  "key10": "28iC4z7AuUCWwy6p1jkQT1ZSRT7kL4VebVk6zjktPxyFfWzSfTzq7ULgG2L6g3yES8ThNuRS2x68rsRZU5JW5rH6",
  "key11": "3SNMepDzhjDLT1MK8ptp41kAKkJDuD9yqMS9sL62sb1VWr7o6szwFMcAtb6WjfjKn4ePfmFe6MpGTWQY5ntMLtXJ",
  "key12": "Z8Nu9iSdnqCrVdAdXQaRECmVVgiXSDiXo5V28NmC4djLx3z76KNuweojgSBgrTsDq2xgZ6tDZeHUdtAWyVuc9kL",
  "key13": "5zmZRTsuHHfhVTC55861XrWPuquSpv8vrfV3gYduKAhkookApiQkmUYoXhUuuvHYYx5WddLJJtUru36RFAqDkcaw",
  "key14": "3PnN7DKnUecRBu7aMHVZjRbzm22bUbApzb1d2izsaCWDqscaQdn1osjAxTQyPC5K8sQqNZf4eQEWnRafZidsKeL8",
  "key15": "zSqeQMpRBC7Dg5zdrZ9JaAatNP9FcEnPVCLVFa7n2wUUv7oJkEjGNgoM3efkt4CbvutSfGHYUqJhWd2DTTdKM52",
  "key16": "yi4i2K77UPV5UUtofR6uNxaqM9nGtfkKobk3dsx85DM3c5UP8zwPXHZE8gfKXHYE6ngwcuQJbuVYneZynuUVmeY",
  "key17": "4r86BTidMgFjNpQse8hoW5P14RUxKf4BQj17u5Eq54zvfDeWnFeqKvQx13DKFPTetxviW9nQmNL5dJcMY78HCrK9",
  "key18": "WG9KHCMKuWm5gWXbR3kyhFYb2nCDCkXj8wdsgAq7xbdZyUmj4ju3CUF7izEhXvRLE7npTy8ewCBBvWBAJhu9gbx",
  "key19": "4SrSLYD5BsfNJM9Hjbj4BuVPbwWLSJBiEABEda1kGV4hVLbCHvZsTADc4WZaq1JPM6GAkUC6HNVNoGG8xPrGP5fL",
  "key20": "2E7ts8EVh9xynaPgCRQaZLSXzFyFkLdpMcBd5KCpbxyWymak2TL47dGFeLHvsp3z3sHXQpGX7AzcXeGkZ7hbrM5C",
  "key21": "3xrvsQcjpRXW2MRTFQnvfaskPk3hWMQB4cBnYYkaFLtWr3MwaitMGPiWy39uqdoG35RFAjFBo8rAnFgkeLAufqR1",
  "key22": "1S5cRMbwWYPZY8tgk6XAwVvrRETVksEcnJpSYkYeiozfjxa4ZLkz4fJb19vBUhA1jvDk2Sp17hDsKbpynaQZYUo",
  "key23": "4qnesg8QccNfS7rHs9MdDGch9B2sCG2iE2pLKopFp9gerEfFBDXxbVrWkP6oTiscvo3VBQsnJUYx8C4ZG1bTqxv3",
  "key24": "5h19BGKnhDL66CFNfMbD7fK3DbaGsVVViLcVMocVxJajKkXQ6F74viJdCRQgkV7XLwaSS9EFi3p3cWApECNiBihB",
  "key25": "3BP1CAJ76wRoxeggLAARyrHv2d1sufs2CwXVDCqGM2CjeBfj9JQErnnudpzoe9Fs5VgwQJCMtYXSeNaH8USewWkc",
  "key26": "4MNkcJFFQuEvdDqiCxvNPv72dUHRttDV92uQQqpyJwZaLaWHCTiB3oUCucsdZMznX4rHnhPV27MeqEL2AWyNrhxV",
  "key27": "5fdBJqFf6Ks4PgKfvjNBmUY6puyNA3xm4nkLA5xhaUBG9dWzBuo2X8VqJCRTbmu6YS9NtJ4i177hauhR5BqyZYzx",
  "key28": "57F3rJM8NCSQwqYYaj4tsqyavonhmrGvBhuN9GLmdcPcnwHvz8A3e9XvthQBXnnHNbaS2oRgCJ8WNWfYdhTVZY6f",
  "key29": "32qFS2hNzckfH3uJchtz35nckNnJuXWhrC8XsmYuUH4jgLAkmiiDLUkXj1t3GHuEvrAubHZTEFPjZQyy2r2Ubnc7",
  "key30": "ZTDpbpK23fKGL2ZGy2EMxAufgf64JSgVHgJ1X1fERTd18uam9rSNy13f11X9ar5pGgZuaW7Bt3ELmk4SLPpHPYN"
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
