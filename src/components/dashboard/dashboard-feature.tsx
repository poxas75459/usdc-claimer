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
    "2w9564FFqf63ALk66EjdHdBUiEhpVEZG6Bt74RHvwRbatHAbEMsvjXB7ZBiMwHXAF8ypbEZaCqurG5cyLpyrfKiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wH3dJ64BhikBcc8k4xjUpaDpo2Eer6vKeqWqsvwHjaM9rUUW6iPBwihetks1VeNAwYvMpvi7z66YcLUJbQ4Di5M",
  "key1": "3ksy6FrJrCAyaW5bHpbg98srd94AHxNZNbbUpf6B9wJkFcfPiNrBsYrVw5RiEi2uZRVFDXaoFriNZht2k2DiJDS3",
  "key2": "4yEpogmVXzQriyELx5tPC9qGos4BFrYgzUzSiGcLhdFRCRg5reZBWYuPJystzGCNJ5roBk93azSQmffdTKFSUqLk",
  "key3": "66TWZVMT7SgKH76Bes2WXr5oM9otzKNW1FsxHEat9DvQxGGXFgUS9aGGgRsVk8QzWBcGBAmSmDtZuMNZx9wELLxe",
  "key4": "4ho8bfGxdQeqQKssdhRe5rpY8VD1YRK1LpffCA9LdgxJpycK4x38vxa7MjAAKAc3bTyGbgpRFeWxENBh37JRa7Xr",
  "key5": "3wtYzzdHEBiR4U23D7pyTUb4AFyPpCuV7LSo4P6FBBEzpCoZhJL7QYrPKoRGmeKnMsz9YFJGiv5nGDnD2Ra6Swqs",
  "key6": "2XbaFeCyw96MgFC6AbkugwX5CXcp4nSzxHaTTvMW9y72Zu9UpykVEKjeA7AjogJehW2E3hyZpGEue9aUDMXzixS8",
  "key7": "5HxytBeahcihxzePzzyEj8UrcY8RXtEGYcUDewkFViQupFR45TA3bWr7YHsnhiCUsXhfxEJFeayZihaC6sYUCUud",
  "key8": "2wMcPQcoixPiSLv62425tSz2NkrCb7rk1kYEdC7Bh3t41t1uknP8vWd1mhQ6QWpZk88uEkt2RyDQfUkiY2aGe98",
  "key9": "2VimjyoZAt2DGPDyYPJpY6HEMRTzxrRFnMyZFTQvbE84sBreB49Uk1nysJE47ro1p8EKwuJJhTwm5Sc1prcGNTSf",
  "key10": "dVCdaY4eqZQ6e8XvFfZLsRqJksybRPXLDvrWktheD21cpxPjhH3fp9JVhxGebwsmcdKLAMd57HkMqjNWKFJzYDj",
  "key11": "2hQerCkaTy9ZveGhGvH3T4qJCYMW3MPLnD8XEc7Az3BQEmWMvA8Ado3JNPCejHv1RQn2vzQ5FbtiYEudCXPk5UQd",
  "key12": "4ReB6K7ZUAJU8hTWDxgGyo6q5CXZwL4iFpp6ygA6ym5ykNj5TMabJCju7qDubRGZreE2yWZ7CSPuobFwZpuiUokR",
  "key13": "5Aa75rm33t4cWAdZuP8ixzNbjwKj6997FboLXGJyE6wSc2bSTQdSoDBjdnbneYc9SZuhegqBe2mUNvT4HgpEp7SN",
  "key14": "Dvx9m6R7Bsm8nWUcVWx3CPQZaxeohsG4DJ9SQVYbuyuhTC4mqefTQXDbjmRjcwctmY9z5uz7AYDK8XQr8gsc1Cx",
  "key15": "4uA8H5BNgLnFeR34kSRfER14ESLuYcYKffjpG26KK5VU3Uj98aJ6rhYCC5VFYHtoSCPZzTywg7aLS6aDHGnSwVQL",
  "key16": "mr81v4yUhXvRvb6S2A7iuZm5KbbsnqmJx6fyMBeysyNCNiRiipkXNumzHQvqkXEqQbwbHu9K515nheiS6jtUa1f",
  "key17": "58V6TPS19pzJiSCEMdc9LDs2izL3mwicKzuVGP5X9fuxniDZckwhWPGr2Nqu6PrYkaPaDytQeczvfMsf7Ng4Yvhy",
  "key18": "3DDFGvefmRJGuUQijDzktvuw4pTKkU82FYFK9jUUXQyPGRLHNGrfPq2NQd1248qUfqkGaJjjCXCBZN8UpiMvkUW",
  "key19": "2jpnhJXB3tZmKSeYwZGs9wXkj4HaKRqAV842P7uPyKwunqA8cqXzKuCTobBSSiVPmijbkmaDCwRqFRMRdwUVnEU6",
  "key20": "5JVAD7UcM8nrnp1b1ExaXynV3CBULqKAft3XbhbKpirVfGcrLWexqhHzmFsG29pB25BBXmsc2NKNqT6rg3JrvqZ",
  "key21": "2kv7Qq67hXGUDnXarspUVDbnMEcKEW4yF8hQi3ybyMMBveRm9gyYhhEMMqpK6ymPg4ie3aM2caJDRnf2Ds8dpZVT",
  "key22": "4kwZbPK4GJTWU2RoaY6KbKVCugpcPheo9cY1T7ALShQ8wZGEScoqDbe4M84CYN1QR4NLamJkviPSm4jVxedEteeb",
  "key23": "3Qg8ruZ7CeVMyLW2pUHxuH3wmAmqHFWUmjjub2w8CZL2vc7cBXxhsPqT7Ao3pqnth61h2TfT4NGYS5go7jRRmrZv",
  "key24": "3YixikMcCtpEgwJoKT7FAyuNJQ4Kki1sEb9SAgF1wG2oQSDfAzKs5zwuYE7gc5UdghgzjnGDeFYySepVZCU8gcUM",
  "key25": "289fSpuBWTus7CUpSA3Vd3aJEiRMxX6V4LyCdovUi8nYfDQgTRqsRzXuoH62DKDozdaBPMdvoG8w2yYNzhp7zmnS",
  "key26": "n8nHJEEUVgtCQHEF1YmoSjKV2XGbuELytBg3A6foHovhZN5LjXy7sKM5pHiACAufzMqCKoT1DE5Q2bkikygrAvK",
  "key27": "63g8eqTW6fEjyLyJXtfbGZqRW7jHX6aCTnrpcAfTQzDx1ZkmjNKBijoJeGh6e2trTnqAZ8TnATT7NqzXsqUmKpQu",
  "key28": "4NnJcefEABC7njeqCUdSH9r2UBhYJRWqoEyU6VRWaXRc3TMkmxXNajJUPGjQob73eKvYJ2eGcpfEkWviiATdzsir",
  "key29": "5stBPCwfoN3w5xNijFFV1cw7h2W23NY9BNt6JDfdm7NeKdHDSJuTEEw9MXM4fuYqE3jzfjxFgSgKdtwTPVBD5E73"
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
