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
    "vn5Mwbo1vgsGanc3LvQjQtnFwMq4wPk5udKSdrNCGXVPAaRtsZpqXtw827hdVsUuHDN14y1sc8ZEkT6GqAVPZVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HYvwcvmckV9mVaziLrhdu4n5J4R4wdP2e2w7JQdoh3dyk8CFxCWFmTdidUYLFaDviHM8nJL3AWQLzP7oVi6v5i5",
  "key1": "2F2XH6SY9ApSUxspP9uEaHp3QqpqmCw1NtxX2xqYWVpfdigZA9tfx4PsTy8RbeQWHFGoMwfVFAfZrWipfF84vfSu",
  "key2": "3nhHUge5FhaUxdUm65fQRSpLgwTVG8fGKU554FqiSHyXGcsfzyPyGys3Vk8VFtbZnmVBW4VmshKUqprNkgB8NScy",
  "key3": "4DYRXe9k6JRPQdqPMfruDRuEGHe6HWBGMAcnUJYrmiesKcrejhhJey96kHLkriF9Pp9BSZ7FedkVa8GfSJgExu4K",
  "key4": "4boi1zUQ3XaxEtocRRbdg62vA4ieurKqSjVDyTjJQJuDHT5S544dKn8DyMJMAcN8yNVufK8tCmDzySvugutmEWXA",
  "key5": "5jeQgHxRLFm1ht6kSkFjsEARBYDZEQYZKpePLZ7tuVaSYfh3LCtwaY7mmjiPvVBYLtHAvErj99bzby3HDfrp26i7",
  "key6": "2iZWobXruuPogoDCNstprWtiaTJsQpgKS2aXGfqkQqUNLkprHGtJeLVwv8G6rvGL7qPBcsoEy2u88MrGZrsB7mvZ",
  "key7": "5QGdVrWXoknx3NjZEM8N6yPajeFw56nCPkqqRoWQkRELhzzuemhZC5Zn1SCU6KTbh93brQxyLBh7ErCYGH5scSzb",
  "key8": "3S2pXqWWcMSSW6MMfdswHCkgUPrKLKVQPpLqnk28hsBtvSyGuU68zJTQ1vksJt2k6mjGLk2igBAhjKxcfL3iQ1vT",
  "key9": "42ypyCKHKdXceKFwjHQbKYsqBxmkXHJ99RXhW5FnksmRJoFvR3UjwADFPwvFpuY5cFHnYQxVXrhbgqaFKeLWkXSk",
  "key10": "2Kfh6PVJWtutsS6zV1kg8NnWQRJFhfq1axcGzUQWUjqFX7sTkcpgCkZ8QhiLg94sH7ZEQ8pWsvUobtD51UXA98XC",
  "key11": "5cuXPjf7DF9KPR2nhYJbwaMMYmdhcYYWU7HMfWGLhG8bzFot7H7iCVhRM1EQUt1qqT1zgJbiQrkAtDTjrf8girK9",
  "key12": "3SGPAzN1FK1REScwV3crqkeTg1KhaUaQsgALr8zw44EiXjd82zYLhpAbisbo5XxH4ZfVVBbiHaQsDo2wXa43yciz",
  "key13": "2uNWZktgpWPxd3NEgwusn6ij7tU5sZDghmFkRzLLf4NuLK2isSg9KRLwYKsBCwWJ9QP9LuSTdKHx3eCdv4VtLUgC",
  "key14": "67TJ8yLZ4NLUC6WtCoosNVZRbxzUzkRZrDRUckEXbCMTj3RYUfVGJ9syAmDqJhFvShPpv3dE2eW1AGStq2wEodVn",
  "key15": "2xutUcJbsFm5K7Hi1xP6h98GMLS1vVQCHdoNxg35XypduN5gNPVvstvVWJzwgyorprgv1gvsenM27SShMbituDyx",
  "key16": "5akr2cfH8gV6DgjgaugCG6DSzN9YsnbZcnt9SPZtpucvHk5d7ujPS3rYYzSyCqEkbTwo4q48ioWGHTPTdNE3WBHX",
  "key17": "2LdccRfTs81dLm5w2sF5KPHG9f8v2cYtL1du1b3i3HLTBL8cYMaBHNFKchhCMno14m7enyaBSqA1fhsGQqevdgZQ",
  "key18": "4zUb8V5YbRP6RzMUb1MJX4FqJyYFZPKFNcaXv7xBWmoRMrx63XwqKpeTVUnvQXbsJ4iA1sTGsEp1wZaQoEtuTCSw",
  "key19": "4oCiVDPR3RnsuG5MeofFmwjtnVSWie78D5Ms2UYX759nCtTQtCGfxHFY65TDgRu7MixeB3D5q7K7HsFTMz2dZrHF",
  "key20": "51RbFzBYGZBoTyPA2HipRwXA5VuR3jtyqdJryBWbnCtgCkx7iLabnBToVhSZU4m5jkNWcX2P1KYvx3tw7ND4NeVH",
  "key21": "3goELLCUgCi7zbbbttF5ewgy6KDVL381FN5tunTdgaSQNCTyLfKQYNE7tqw19DQA1ZzRPTYeA5msBjYpMQ3qUerm",
  "key22": "62cstG9jyUmRjBJT2x8nmPRf7CgFp8XAdkZeQUdv6KUCxCMVt5hCfUnZkinBWaBqvvsFBDJjUgYxRWYfeXMggs58",
  "key23": "UrbkY3Nyy3GFyBuQ7w3fJQWxx1SVTyxR8JUUnjdJwWxWA6npyZN8qa5wE7goUz41Vq1VMnU3eM3H4VeAN5j4A2Q",
  "key24": "JsD6x7ELzUDQudYWCugfXt4CK3NMoXJc3ACH8pf9mhKd6dH7hFywHvhAnBDmTwaqqn2sESq937Mi4AGSaaLjbwS",
  "key25": "2ox4rmfoxv7qSzJbsPqfqiMg7jcDjXH8qXBbiGKowyFcFLhHk2SoBoWePP5VS34SvqSc7iMkodQXxiQnU3pmRkBN",
  "key26": "3ugvCE5PaEBhAomtQNMgh2pYJiidC3HVBLrAVJz6s1ZbszEwrT1t4WG6cb7wjpAUXXYYzcW79EHr3vYdUrqo8nut",
  "key27": "3daoDuR1UomThjwKypeffc3KaQv5pBJ9ny6CK59MCvpBkDJLHHwgSAEb8u5G9Fcp6dXVh6RXrq6miN9zM7Y6Fg84",
  "key28": "2D34ULY9BBbpqLvRLhtWPU3WejWsSmd9p9rRdGxHmfJNFeijzbUqeNFCxB6ykpxxoDbhy7FKCQtmXxtFGYJBWNG1",
  "key29": "37QGX7FrN1ormNE23XBFbtWLTYapxp4YCT8w4UVTm9TnjRJ53QyNM147kiYAKN82hFCwKPDnvf12rfrV13Jbe11f",
  "key30": "2WBiQUPdHQoQWBu4tE2JYYkpktmZ2GiXsvF1M1G4NagXLDHa34CeigB7WjF3BeKeBiNwTsv1GG1e2bGvUdX1HadG",
  "key31": "4gzRkLv81w4ffZbhgsKzBsX8gPuakLywF3k3waBBY2EW6yhF3hpf3X85pnHPq7Wfqv48z9zDUR5FyW67mFmTMmSy",
  "key32": "2DYR5Bb6ifWYfEwo7eYSoCSFEthXuATASrxT8EYdmf1fHdeBRaXm8fDgu2b4HMLXjcE9rQJEUbFtwnogb7P5Mqam"
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
