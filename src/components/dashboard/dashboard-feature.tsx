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
    "4Q6DJJFQGwHyCi8UjPPW4Ra4Bw8xx3xbdu7TaSKkVNNvT6rCRMn9Maf4BbCuFZRSnDCrsBdQdr1fkQ9UV7SVrsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2Ke9c2wQPDgTjDkgk2KyW7q6UiuAg7GdoHpkssjUBWgCkSMotMM5FEjKhadPaFRnzPvER2NiyUPFrN9iYgXiMe",
  "key1": "2KcdkaZWunaE2owB6s5914dBTrafkp5QbXVHfhGtHhX5Rgiz79EY2oJLTX8yW9FXgNHutCwUREA3HYyQr7jjQjRJ",
  "key2": "3eeDKZCqD2gFZgb1Lw3BMxgfQgPztZw7ZDS2tYwFbriuDicA6C2GpSGHYTYNRgg6EQ8C7eECJJqkRc9ujzsSmNu5",
  "key3": "4FN3qqSxgY7LGmN4ajvMPS2a6Q2a9LZc4VnFWQCvqQizU9ESSwB8H3K65MK1C31vwS4Pf46GCxNphaGiMoPxa6T8",
  "key4": "45f5BKYNXgDhHNV2yvrW7Ja56bsYktCockLVir3icM6f4LkhnZUBoGdzapy7HfiNkz1xRgFfHXoeTuXYs51mkB51",
  "key5": "2Z2r2ifEAkRMCwQrALLNDT8CLbso4YTLtyWqLN9KnndbJFjYEykcg5z3ygw36twyU67RpVhDhDhn4oU2W81z4QWh",
  "key6": "wAkk8ajddjCFdmwud3RLwf71WdrUMoThrE9YjeHtQYrrZ4qUg6cSUoXhPrvYBbMRox7Z5NF5vg6C1o4bv6ehsd7",
  "key7": "31HnoHuN6UByM47NFZUoZGDgNfzLtTQMoq6z18oCcQXP4wkitbebTbB9A5z3319ZeY73Th4UtUJawqgLDKNFwkSg",
  "key8": "5cJUHsaDRorKRUSVV1RiwLgYmSV48JCtfGUwpBrkFCg8rR2xm1hG48F48KMo1423wmcB93o8S4ydYBU4oV8fAP8y",
  "key9": "9ahC8My4JBZQPeVUtXcyTR8jHFpkGCbhL8VLVgxDGEXLD5uJSvqvQsRFretTfHdG4mWM7innaHS8d5o48eX9v6y",
  "key10": "4XGzrqpTmUcxUuCfw4NrXywrFCngoK1VM2DT6PYb7yRiynYdjdo7o5b8gLxz48TGi9ReJ6Qr6hX4HTRJQXPs88Ec",
  "key11": "KF8Cu4ig5hLpYyx4GpXvSnpyhNDvFaNJNugpuF5Gi8dpxTjMjtB1TzNRHzy1bAkdPaxxGeXv2LviZ2gKDDU8h5y",
  "key12": "5Q4Z2pevX4RZA15r466ppCtRcS7L9rkVe5YuV6hfp9UvNosTtRsi1p9JH3QZR7GCH37sZLw6mbN712E8PexxKeio",
  "key13": "239BmX8AJVTY4sAM4mTL9UxhxnEAY8YwfXDBTsNF5mTVK5mfZZrCGe3dBZKgiTV9s37vrm9rC8hMkYdyFJm7ayCo",
  "key14": "2mNsSBqRmhTLp426TeKAvQzkSoDbkaq5ru47EdJ8pAcHVCMxu9NGSyiXkapgXn4fAbjxCy3Zrb7EbpXJjHJWvNwW",
  "key15": "2Rdov8wxQv2SRwe3tePPB3KbFZd5B5wz221bsqyWPDgCsZeytU2HXbM5si9eKiquRwMCxNG8aekJn12TPsPunaCR",
  "key16": "zue5aTLeJwqhoL6JzAHz5Gw344YkU51oSbPjCxT5GHVoeFiSgdPR3BMg4kWL8BMCow3ZLgy2SitDbi6fEfNxkSk",
  "key17": "kYi8cAKx2rKaYTuC99Dq24u8jHKCZ8my9c2JMcVJ4RfmZkmjCe4kpDFCeB4D4dkPPJQK3rqat83bQZJguPPMCG8",
  "key18": "4hn7PpGMuQCNKVJdoWqUnW4nGgnH2Ug9VFwqJ6AyFTaT6hYfLnzWTnt862nYWVV64fxi3RHVFmAcapkeVRCdsauF",
  "key19": "5VinXr3Ggd6PTeAAK15gWHP577wHRkt3yXNzTYMm3VRERGSho2Q1WgJJSqibFFQhBT8TTu6LQDtZqr2q59VhWZra",
  "key20": "4DbpmqokvSj7v4YsNTRAm8Gv7xXga4VukgVYg7y2xgokRexNx24pPVEpkZQs9edv2344NnCYXn35JDcQAQvJLm8D",
  "key21": "5EfvhM9RbbP4piqN3EwdoqUdNAMY3ZJV6huK4tDnTfXJdbeauL4vCQBKFyuz6zw4rZanCp5dNUDmqmmEad9hagKP",
  "key22": "21A4HLTwpYWgP5FBCMjWJuypjqZe6Xr9WivBLyJ7ehRHyJeGMF1AmqLi7Wn3AwwTzeCNNt1bt4w9bVedWAPUYJpB",
  "key23": "5RWpozCoyk9BKyGuzAQnhTBiRfNMuEBXiP9RyzfbSpnon57J17YmdxzDh5MGkw9NPd1RhFhZTeB8RfzMCFspeNkS",
  "key24": "5wrRNg7rS4WdAP75tse5bqJbD7pZt7RcTRdTtQj8d9PpAzNzmR22GYbsoz2ZqdN3wLPALxtEfPbJBpVTmBhfkWe3",
  "key25": "39VpN2kFaHYuy2gQ16pTu6ibDDQQ8xor2dHuDPhPTKt8j8wEXfBPmRjCVw9yGTPYsNwSumHiDVmFwaXuffLPiBfK",
  "key26": "48qoJq6R7uZC9ku7Ct6p2txSVyHEMPghmBFpf7cu2SsUtQxUknnakYMRVS89p38buD3qizC93Q85xEsVZMizcZYK",
  "key27": "55iPVS7gYjWzErQ8zT4HfSr9ENVKZsya6BJvEjb5p4qdVpajjC6Ap1mEW3NzntLaz8ri3S7swEyouchhnHn1bigP"
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
