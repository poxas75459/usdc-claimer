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
    "4DTqsDpYp1R9u2YZ9NYGqg6ST6WheDgexNxAPGUuA947AJ5Pz7jFuC45JyQ7Kugp2RbRq7W5AwrvjT51fgAzbaRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQp5gzoatPSUu2jYvnJiJdEPoXHbLbsFLWW7ooT1oGn8g7N2RCJ7eTwpsq8ttpPSLJQyywS59XDHwJzaGtBgCKu",
  "key1": "4JFms3dRrJeVFS9kGdkpb2322k4VgCJKMEbaetGhm8Hiu5uccNBzjRftS47ZBmNN1k6U3y3t7rNxBbdx1mwhG7Tz",
  "key2": "24oHKjjML9BDgmXjLZxgwybXkgZxjE5YBqRraJBJSe26XhQwcvj6fxvU5cqS6BDtkfHvVPe4qptPPTfqKQ3ib9LW",
  "key3": "2aw6uSd3LvD9TeCL7pAkRGYSJzEtGGs1nakrqoc2y1KYnuJCNDdHaw2NAxet2KDnQeDVFWqEoF9pqZZJRpQu7gnd",
  "key4": "3xBrfH1Fkrm1HZqRdVHGT5mpLRrNMpvNZhuWs34G5qmCkzmhiWXZev7cAcyQumVDVfEaJkeQzys61YLTLZupHsmd",
  "key5": "4HtqQXGdntNWw3tzPcDJxDmgWiEvaGLBfbegBTXiwqm1Ci8KqWUgV3o4XaBPnRLPrMHW9i124F1v8Ykcg5AbeHF5",
  "key6": "vdZqC1i9htBz921ziuW9dkEKeoKVEDXPbCDB7V5phSCszr2rwU41mDbn8jV928Yakp9zg9XQ1V5kVy51jpseNLx",
  "key7": "3zrvwXSDrocv3esAr34zfwyjDPUacRARs5wbmtZT9dboy1wB1gwuQs293irbJXPyzkNRVKiSm5qM1RwQQvmtrFvL",
  "key8": "DtN9ezkf7uG9cnqyaDr82ciYxK9GgXQbsdjqzTkGGeFT68BSyC3ASW7zMieAaVUnQ4wAsuhtdjKUBBxmRAkjdqX",
  "key9": "TqSXnTMBGsowEm9YpUMciiARB9mY5ZkypCXVf9HJ95Qjj6PKtKXQeWX8b59vXVYdPvbjfwRR5ivPFsuetQkakgu",
  "key10": "65MvCueqzSF5bc9NuApFix49uPYdcb3E5WXwTnuTabvUkRWrgiSbxvB2R8pbyFBjwKL6HEypR6DGzzN5rxwxpMW1",
  "key11": "4dJLvoBsMpEAmQRqPmWA7QVjAQmTwyDSz1XjhziNye8r8jhVpZBgeVxRCkZDkApTziMNmjZwXCeZz1a4fhgAA4Mj",
  "key12": "xGcgfYbA13qHpA7F7Ss1ZTaVbmJGGqd9f4ADi8UdJJCmbPDXJotATytvv7CAmaxg1rdn7PK2BPfvShrTws4WjMj",
  "key13": "54ncLBnnruaGH3oW95sbWA6WaRVeVtYWF5awPTAA9uz6sG7XpL66fmoNaz7kgLygdit5uFHu77g2ugWQq1de1UAs",
  "key14": "2AoygKConyZ32g1xqFxg7iBGmQzSJNksXkoHwnx2hHj3sqkLKf1wGogZmLQSr95uNrFK1gNm8hdwJpjCvcKYGxVm",
  "key15": "4Lh5hnbPy8iZwRgDzC3SUFA5YmVh5aPtzmgW97fuF7d6bmQzUUeC5deZmMMQUUWJwZfayMJz1FbveTzV4xEig9sZ",
  "key16": "3eLbsZi5UicpjNKVdXu8Y7gD6RYMT2aeTyh5UncehXxv27FAy3wBs7M3ovficRD3R2HxeB5k76QptYSBPQyPj85t",
  "key17": "2fSJKczXHJSGBREaqBgJtF79QJeteQxEcNZ9VfoaY9dpHP1wCNdqAwFfJ2oAQGzYveSFDGhCZFs2Ys5iv5FCf5AF",
  "key18": "43u8uz9HVbt7VP5s14u8RM11iWQdPKmbYrxzYa9qZwhYvU1VMBSUTpUHS8X979TMiWUQugZYx3jR82WERimajcrF",
  "key19": "MA5LzW4CkxepXfbBx5tsN5N9SNVoNRPfwPm47VdqR3MFPS5zNHsHGAB91Cf4BaPesLqqHNo7fZDYsSUauLx38Gk",
  "key20": "26fTmCtL5HVs4iYdKCc1UgTjmkHGKd8JdRN5pA8JHnAzg8H5fPcHLjHvZQtasK3EDiHjgJYDStMhhTWmaoxHGGhA",
  "key21": "25gJdiZWZBVjfBRXJjvdHn83rCYgaQW2MmqR8mN6UTry69KZHTTuGnTdskrXHkyeCBXAmbK95EsvVzwK1ZpCRY6T",
  "key22": "4KHemeEfn7NxWcF63mppegxFVD4AVrycZ59TxB6BMhgzLP5TGzdWPBSmr3GgeDVueq7GVWvM9XL3igMFVEUULC9u",
  "key23": "4y9nCEgAv4VEMtD3ycPK3ynf4gpxHZtC6DmoCQZgpsrqJBFDL1ohuC5nXRhxW68i8UsziVtR86Cf899mPffx15c",
  "key24": "3SXghjA36M1CFzn4Yffe4TWkwqS6B9UEoZ5RAiqyTFg9jLs5ZLbazkTRCcqp8u9YSbzk39s4u1yV1vvSBuYJqkvy",
  "key25": "3pysABMri61KDiTpNufsNTKo73s9geiZZCsPn65bjYsBtqVU3wbrjM6K9H1m8Hdn6NjQesLsHB5w9EPtAZAdx6RU",
  "key26": "5FhBnYMiRf4yCo2NbPyfprVVbw9nZfxkF5BoazpAKZ6v4SyrSQ562LL9PkqACWQBEAUGbL8GKiYeHqWR2oCAuZq5",
  "key27": "2TXuhcLo4KDU1jHzgNqriNDBb2GcGkzXSK8i8uEWasQSkKK2etGr1DZXBCd5nBGn8QkQhbEDzCdR4MuwN91tA2LS"
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
