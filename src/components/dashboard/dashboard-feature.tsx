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
    "6WuuQc6ycfpbxUdxkNUpHdkpqKhKTAvJ97vHFLqmHRASFh4ZgLUuZDYw19F1wn6bti9nZfDwYMHx9MUqBRXg1CK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45YbGeP8j19HVwSRrFmaUtFEukKDtn82CmDKWbbrxfjipr2WeAowxrJJ2sJ6bnSnux8swexvHynvVAjg6TRBDJD9",
  "key1": "6Dax1Wdws29AqPepdVKiQ8tE9ymYniwuR4xt96e1NTpD2pGU2nLqdnsHfjyVn8nvJn8EHFsPfvHvYG1K5jzSAXG",
  "key2": "3EXupMbsAHnjrvrbh9Qbs63Mc5YyoRmzuC3pzLDs6s74eLU2BUGB7vDBKqv2cagh2frRYLc1tnyo2zc3FWqHYSBg",
  "key3": "2a48YJLR5t3ekyXzZkkQeK3SpHYc21okfuH4EjkMiFar8h4gZquwz5eP5sztEXcLUogH2ZJVvWsmmfKwo3yGcjmN",
  "key4": "5LUByD5hxjD5zAWtnNJETetcnkpMk1AWpQL7NMC4E15MELq7wmS48UV5HFkrMFkddjNm9GoheVvf8gHKUxsPLu1J",
  "key5": "5KFzvjfEMyT3rHn9GfNCJ5oxnCyaqGwRAwbLvHZAB1M9CRvEGS3tJ5XoyE413Xc3DQke939CRfCNCD6cEVVXq9GV",
  "key6": "52gdauAxapEUYdDniGwFy7wHQ9fKwLNgG1LZS8mEiwhJLtrL4x6m6qs8TegKHA6JTYL2GWBfLTTG5wytF26rfoCR",
  "key7": "5sscMLVBnogZvZXD9GxxCaPBDKpsPbdfAcN43qdgkUXQbQmqZHDAncaDF9TSbttDq2Eh8fvJ4Wo7rRfKn24qfr4r",
  "key8": "qLiJdadhtdPrAxMU5QwnLGfpCV5hjFZwauC7496LUPj9tcD9RUMj4enFTVULh1ctkCHyvgpZp1PkpzwD8Ywu4wk",
  "key9": "5Px8BCweokjUF9kY9epU5gEsU3bmxiwoCof7jaMm38SaWcuhLFKqwBjZyXxfbsw84yhqh3FLuXjrsVhWCnHQUQiq",
  "key10": "1w82DYzNDAc2gVGFAKgCLnPge4N6p7aoHZUeRNjkXSk6v3v5qvSx8ej3ZdT5JgmFw9ZifEmjsMsRJGQjw315fC3",
  "key11": "4fyCsR6k6s6BP1c3y8Eu22FnQaEw7mvHRU8C26XmcGNpE63PTLBZzZRp2KqHz3xq8q3bn9uSRLyr54JL3ZbF5HrS",
  "key12": "5W36Aw1Zvsu5aucvDvLkZr5gBhtHVJJXDYZXhRGAibtNfJmWzbg85fHjeyVP5yzZ8KFtUHwbnpv8qG9V4NfyJPdb",
  "key13": "5TQhvNYreCkmqNhMY48jz9wstAH1UysPrb87Z5ueTAQ3iGT3Tr2QyHenaWbr1Z1WkK7HeUyCu5cUhsZfMmaNAnjf",
  "key14": "rPUUgQ8NzxKMXPy8WMCDCCc7USGCyxqxfc8B7nc1QaiNR8vMumJJSTo9mJUFxHEWzU97kjx4o2EaguDQ5kcVxh3",
  "key15": "5gtfEAWQdCQveyofCztZsSsAdA5mvySeMgcAfrsf6p3FyyguxeEdQZJ3eknLnPb69dVE7zZyk8mMXbp9yytSR4Xy",
  "key16": "jQa5uvMGFVxPGKnGr1X1aY47ty1fZMj2yAWn5xZvHcaWqWzKqcdT7KQ2GPCQKqT3L5WQ948bKcvdkThvZPkVTUZ",
  "key17": "5qNFpcFivrcdaPryohiubVqhE3cLBC2NWJ45xCyDRJUFKBw8AJaGj9E9m4iPoN7gzFCP1V72ByKhoWpt4vbQ6ekU",
  "key18": "3szVsWC6BAGcnTfq7g6VzkKu3a4XQxTD6kUpMQ3bEjkbrnGnz5ahXSkM5PMZX5QdVX6QhcQaxJDv6UWvWKqWwFPx",
  "key19": "3YsEd3LpCeeTvAAVpqjQijkeBFb6zWMc8eMyMcc6keh7UxL2enf9aNDJwt9wpgywbM3Wes2BLtznySAZ91hPY9ne",
  "key20": "2vqaX7vK7sRAppJYvSiELZ2gCsQDCd2xjTyvqoXgZBMd4Qw6VMyqtsozCswsqPp9GLkrsBRpevbFLRGvPhgHWiAd",
  "key21": "33d8pWsDopkN7Tx1KMkQa3ho1E7fR7UAiqfU9vvPSSDeLx6oUxHwXpW5zyc9Bp7a1YxPnn26m4evQmVYndygYcXU",
  "key22": "4GEG7WSe2Smj4QsbYWqvz6cBfXzsWza71XsU7DEdtmUXoTCXpo793cPX5hpSQL45KiniQsDbNsvRWa1si1wMVoZ1",
  "key23": "4R54zq1jiUersdp9Zs1DbVDiyPZ1ehtNo8BJyutd92AGRytya1s9USsoubk8DroUvBQYYPzB2vZgoCyjjkqHKep7",
  "key24": "3xMchXAa9fwuWU2ogZUk69PN65cGZinQDzzRKuRLEB631Pk7dXWei4QbUik7egoAJYMhGjFBKnmyMsoR1xUR2fkJ",
  "key25": "4ujEgngseW3j8xRNx86KEAvp9xrYYNxtZ7Mi2fP4qcqPR2fjNsD8Am2poveKFaH41pk92Ev3VoSqjjAKjFmqkMef",
  "key26": "2omGSYCdLJNECYJLksvk9oMJr46iKs7wzxc8cAbsB62rDNuxyMAP4axwAHNc6DPUw9LWXDZaPwK4MHSasBZ6n4U",
  "key27": "635ng4E8KyVsZ9JQrxbvnQ9kC9d8jci3Fo5AxDGhbsfQcDs6bEcZG1g3Nou1NiKidgBLBiBARNjmYpqDNo6WeXUo",
  "key28": "3QbdB8L1fUFWL3evE8GsFwsZebscH7aio1GhGVaTUc5MM9ztvGtbpY1sVw3S4PWBK5ypuF9dAdK77yBL4u2c7v5S",
  "key29": "5WYHF7bCFAZxn9HbPmk3JzcNQKHf8cr5zLWUCFgQ9Sqe4HYZdL4kEmQ4mhnoXYnd7mHqtRt4PTJg4Qi8VN2TCAA5"
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
