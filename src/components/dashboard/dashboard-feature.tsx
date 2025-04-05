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
    "4wML2pB5Fm1qJHT4Z35tZP4Bbx17yC4TAPxeBVKDFy8uAQDQB2EN8E8jA7xJbwH6r8xZonHcUaTFhLtjmyEwX77G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9ynoXnQ9SYVtHdg2DoVE3r54WvbBqDH5ocLoZgxHrz431vp8xo7ihsEKJxrMoMWqdEb4VEWvUw65iCZszWLb6g",
  "key1": "32teyhuuNCX2TWRM9PgLVMVhn5iUWZnhbcFRj9X9KuB6LxLMKCqScuY9vJdEdYccaZyfyzytVR8TCh7agy6hrqnQ",
  "key2": "52VjbZn5M3gPdsfqNiHJwLFA9kuiqAQ9UvMQ4aEKWFV1j7up8fiKxihXhZPV37MMTnGNakxRiHCWf2CsKqUBbsVz",
  "key3": "5bSjmLSnHfFyYKu5qRieSRmSDgkZQewZbn3dD2DSqGjTh66zoA2TBgNFaXKmF9u3jTCtxsFqjtaTFFA6rki9r1vR",
  "key4": "2953BwoiRvU3L21r45b8TwKhpM5XdTk9ejywuchpMk88yDQm1KF32guZq1HGYad6ffBK985bti7ZLDj9fQkfnUB3",
  "key5": "3EbSPz25sEpdSa8YRKGt4T7V3rq4XZTwEiwtn7EiKT6DR3QpepeXBoka2MLahTJUsdRMb76gPRuZBosKMVyDrJ9f",
  "key6": "2r87X2nTneh5QD6YNxNHVivhgSzHGUMpNRo8TAGRjyUYo9oK8pr7NSGtnFjTsVFS1Nu63DXMMo77G1PJksFrraSK",
  "key7": "5JkFNfcaq3TiS5Sz1jvE5jtyJhtAXeqeZ9ABxvD5azhoCFrTk1KGy7Cz1nHBPYfVpwCRDKJg9UHTXgffeHVAcjnW",
  "key8": "3MFzLPvg46GbZsRHr3BbmTthJyFreL8p6ED2qchrPuEScHnWCWvudKnB26yY1Za3MQY87QXdmZ4vZvEo7iCAup9q",
  "key9": "3wGhQEMYVeG351bGsVULkJ7ZDyRXXvVeTosNxt9oPd216h35afMDKjPBR3LzmWobj565HvSkgdqhhKpQELNyFJ5",
  "key10": "3RT1UKUmxzfrWGddhhmowZuQXnMvcj4A9BiUy9eyTrw3PVsrez78FB575V8tcXu4o87haA8Ef5xgMaAsNLSnrLve",
  "key11": "2QruW5mGSkTKq1AZEpnUiywEABZp7BPvGDWBYf62NyrfdvbTvNjvwsPtLnGZkgiePtKpWrWR3N7QuzSMSTxLhgtG",
  "key12": "4uKhH2dH86pRqw1VAmsrCFFcB9W8iCXjQhXPTzrsFPjir7YnQgrxB2MZHSFfQxehFg2JPPw5uXZV3tL63eHLjo9M",
  "key13": "5ZdaQV2Eer4oSG69gnpzQRjjFoatx6Po8BFRFoEY6VsufmzUUkEDcHB9XkNGJgX83YzQCKEiwnU5xGuUq1adK4Ja",
  "key14": "3BHutrjCqVMEtkmYn2kkvDMxGmzk9eXEFbPsVrNi5eZCLjqQWPJR6x29ABTFz2YwAnwFaByWvj6fPjJJcYbtdt4M",
  "key15": "5CGrF6xbBuXcVzrhKmN5Gvwgyg4nk7Zgo4vGjZ2DAjFJCLLZc5bCGSRi6cRdZPXhRjhjHPfe2sGEd3x99TchKdky",
  "key16": "3ATUQr34iD4kiGm8yWzgby3uRjv6WyA7R4pVNvN8JWXtP6d6pLfhK8A22BbPrCRJsXcXCn2UdzokJ4L7GRuWfaPD",
  "key17": "64WeXtSEXihndbuZVnKka3rKuYoBH4fWgnCa642F6BvkrVbfRiYSdzVNqYSRF7GLa7kmrSBJGE8bprXViAQGfGiq",
  "key18": "5sHZTndMkvWbBbWFrfy4PvySfzvPraX8wmPJWWPJNsTaiHNgYCWrmB5YZzR5CixySx9yG8RL2rJFpYFvHJoRzMo3",
  "key19": "xSMeeccNZL6QEo2fPH6uCYaLaSqfgvcT39KtvY7rJ8Vnxapfg3Wy1vs4NyUCLdoTUr5qePSmccu2oWHHmNPGs47",
  "key20": "3gaXYGNLGjxKiZsmhuWhCdHKySa9Bo2wCPXFNpaYsLgPMBkK29U5P411cX9PNTATsahBk6bhntteE64J6HVZeNoN",
  "key21": "3xf7e14yhpGjuj7HCYtHfBbUw1hN7Xj1YE9LSVNw1hq4Nk4EdTPpdn4f2QUWF3CPPud7yho3xQUHRHNHgMBwkbEB",
  "key22": "4KaVqfZTgzQy4wNQVgKDSyRofx62RozYQ34TM9hnxztfQXMeTpJbM7QhXL8yTyT8Ug9hXoY5qZsuNP2cn82hsvGw",
  "key23": "2sRuPFAm6RVYb1WB4jzJGMJc4ByBDh8nmEDxbqeLBzAGd1AHq5MYJv5cJf1bj8e3gpgJp1tsCvpwUdDefW6KorTd",
  "key24": "3mvnvxx3EpDAZywnDNRPxnjiaux72hPtfQu2g94GgWnNsP84wpQWojzWU9CzbsQkvDAzNhLzUF6zp2cf7dUHCFxr"
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
