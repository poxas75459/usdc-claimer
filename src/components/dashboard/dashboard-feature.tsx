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
    "4fHyhzfnS4S7tU8rDiDzMnzhVyiDPRBLUNmZgrmjBAvDCsrby2wiLSzCeM2fbob2y4hsH6ws9npC8SQEZSokuTxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6158dzZPPj2jMkrZdQWjdWQmNKqdf155n6g6KhD5tEEq1RY4wpGF52mS9b1dgU3v566KDQePXEpUxQb2xC2Nvrbc",
  "key1": "3KrtQ7ccgutAZhaVPK5gwXNGeXJ8RV8qucAQA4F44YBiyJ3dDnxn6qj27qzUqxaUjXtcPtYHRsLnBKuV28hnMim4",
  "key2": "3mNx5GCE19KYCNgdB257Dmv5r5tiRphg1bAkUyAaZL3wWsF3wRAJte53NXzzAnqYxaHHE2C7CS4ZAcZbyt4ebkW3",
  "key3": "55ra4VnfHdaWzFWZoTyrJeGb7K3EaSXELpstJdz3H3EsDvtZgMLEKAaT6UXgtfohLE4EaUwtT43RJhxSLvzMxRRc",
  "key4": "2uHhgoWboumHBkdPQHnQHTzakKrPqNQuFgDpBDsHYi77UKFB3y4yQoU4L6FDpyXXupqXHW1pecCcQwVFDmUCXvX4",
  "key5": "2uzXC9xychpeiqxSxtqPkct9onhahfy9WdrvmfbszyX4kkSDKvkf289isEH3GFwqsgaaL8pCrqbPbrbYoAjqeBkv",
  "key6": "2AUigNa2yRZn6zNTNeF1ozM3rGDFudZ1xyZCCr9KS57sNg2iuVfy6y2NUavXWVwy6peNv6rqGtm6mQog4yTqoqXz",
  "key7": "3LV6zAyzkWPAsWQntqnV42jBS4XMGhasVL7GxeUB7q2WFSsnYFNBFj8yDvSBLae7xYbE8uMw6j2sFS3HQivPVUfA",
  "key8": "7GSx4mQzhiwkQmz8oM1AYAyRAsXmv1vXpMgmNwV3KBqPcXBNiuTzNXPmLmkYeh5Kj8ajZzt14bcqkt4WvUgTQVV",
  "key9": "2W6iihdqgWB4FWgP9uTviLPD2LyzEuTrJpHbDdMb8AjYYYgtiUttMceBRqtMpYXZTYkqAtRPh7Lqptk5j5d8wMi9",
  "key10": "4kYg7WC12rjcGtYdWpFBedqGMMdVFUAubx4LBYxnCUtyaAwSwvm6HD12HrFagLjPd6QbwUPtjJktbFjXme5tMcdg",
  "key11": "5X7Z2rCeLcbiehWJpB96nCTbBbzqJ3VuEnVXCMeqXC9QREj4eFy1gaZzNZw59o5miS3B9rauJYtR7JXGGjLVAR4L",
  "key12": "4EDvys7GmHvUwdp4nhkVAPGjTEtm7zHGzovo6oSPLcs3A2kQEA1EeZ4MhabQSYJ1BZzZ5cKetrJcHbkicqMtZmsF",
  "key13": "2QtD5vrT5SBme7FJwdtvbd3v1udWLFG4LU7epfDsmARie4qNw2aJajWXf6q8KatqAGVTGf4DdwWGN3aVctP6msA4",
  "key14": "5KPspXpkykdxxmcn664NH85YHBybjkka6Dnp5joyUKaeyUYxcnEkT5GTBBgkiT98a8mniDqiN1WuZADisa22DA9f",
  "key15": "5u3rRXnyHHRzi59jwXHphLNpsAJP8nUxEi3LBzADT1iBSgD8jUVcREV4DmkgbRsbNbKizPxaHU8wrVC6pperGLkm",
  "key16": "23aFpHsszx3K4gZiFxZZsvUTj7Ts7fZtqTsEfMwKAnCwVDj7NnRG9Bsj8zfXp1weVf3SPHQX3DbueVNgLYjGwcXR",
  "key17": "TQK3pLQjiynU3DetGuVuMBDM2wjU4p9UnvxVVnNvodrdT5iV9UFB662c1tm6cbnJ2J5jyrqTRRG3VmYBR8XCXmn",
  "key18": "2w7rwbJyapxwdgP1Dc8QzVs4yT7q8oHWvhRYztTk5Bynev1mTPTLyuKiQREnkJjjAjC5QybgR2hndg2HkxoifRXx",
  "key19": "uTzX55A8GwEAQWwB2t2jBxA6hRdG9i3nA53LC3b1NQpLa2HLQZUnaaGgQmiqeSkpb3EJACTAdny8n72FjY8gQw1",
  "key20": "4XrjWy85JxfeDgNkAkvb1ASvXYTbcyUYqU7YLQTjfdegKEXawqqGYHNA2Aw2Df9kscBW3grZjUWH6bZCyFXwnJYH",
  "key21": "3xms2VL7nve4RR4sBUiWtzWR5Bpo75bg8zSRxFE8dcRBUZrzyVigbuVNGJgnjrp4p39Wv8aexr7PaZZ2SrcRqmDh",
  "key22": "3P8NnTGLzqGMsa7DB9JiduRyLYNe3WZNLqZ8Du6QFN7gkRiDtrse6mXEZ3bMF6vGuARwpB2R6mUPL7JoXM43aLiy",
  "key23": "5hLTBoEy811owkmVgCnUMDBkcEgxfQvuAABdZkyzpsyAVJy5btDk3BdKHFYp8xrx192qf1udW8pCzg9d97XakSh5",
  "key24": "5TviK5ymCeXZnhBqqrkLvXmqv5rbvDho5KvTMWGdbbYKns4KoMyPJNu8FGEd3mmjYBW4xwgke4bSdZfuM9tM6w86",
  "key25": "3eoDccMnVGarYVkwDZViWGkjVFkU25L4yfhwzESNY2hDExvN6CtMkwP7k1Mv9s1X9tYNg9jv3CbokK4tGh5YrVm3",
  "key26": "gmr9aS6smbaMFCNZrpHK7mSx3y3HFKSUi8LCnxFcwf4KNCEF1qj3wqVpy8vNzeamEKEryaY69TpEMfhn16j7Je1",
  "key27": "4hN2xTBiQajrUzu6YhmPaTa7n9renSqaTw3C3xyAhknHfvfvnWMsvUJJNVjrkjcfpXa5rhqo26hrs3kCnQX7o8w",
  "key28": "hDUpJWjW219z1GdsuSLfpNh3kcUDVcQhoWcrCoV45e1RhfY2dJA3jGMrnTWLk8rP6EfEzYp3i9rkkrZerdqVLpG",
  "key29": "2Muhz1rP3Gcuyzki6fGHFgH834gyijBEeyWod5SgYR7pghAA9cmGWSTdZytiqkmeU7PZCXsBgudkMAe7vFvPjDMZ",
  "key30": "3pF8JmkW7mcvzdA8Tzs7vvRN6A9quy3eLBKeiNoRSvvYTkt7q7wUPsVSNe9CxifELHcfHoW1WumsCZeLfmopxihn",
  "key31": "PzcYbQ2JYRbDGTgRPQrnqULau9EezeFiAKGgj29RBoSwooJZWqg81kCBnvNLYF9rJgk7YsiqG5e84ZjFi1KCkpo",
  "key32": "3ypMP118nQ7apsJFKnn8WkwgHJCZSCjU7s1FJzRVMrHnhHHzYtnEURs7tzU15VFLr3GEtmW4dUMx97DfSuLFAA6b"
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
