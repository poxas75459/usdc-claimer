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
    "2twm1ko6tStj1zcxJfPHFSbAu96Rv47sizkigypKepyJmzqaPAMt1uigCGBP81Eo9phZmK6KiZNGUaD55MwpgJ3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59G15xbvVpvhqZH8Uw58wgVwNRNKUmzB6QeVyA3XS9fqThDYg14EHmyu735SbnbiC7DxXhvHHkB2q5P78eauLN9K",
  "key1": "2Phn1XVqTNGjoMaNtoFvYKXkc3vozKEuP9i5SaZhJDcUT3gigKow3DH6BqosgNJhUdPY9fW2qKgA1asqdoU7SYVZ",
  "key2": "3Y4uhMqXjZHitPGWABTELoGe4RmuvMVY8iKEkQ5htwSP9F7R8m1nVRpnShHswQ8MKG5MTVp3QFE2MSw9D4GAzfFS",
  "key3": "2yezVXy3oHEBDyHgFCbxENb3GySvetkWphRcFevakguNucZVx3pAFseNeaFtG24xJygMXeV3KtVX7WrpRdY7wEom",
  "key4": "64QchnLc1KdTymEADUTAmbD88kxyJpVT8Nxtate1kPhE1hV89mupiynFjRuEVJqz1fUMdz2BZpJtnKyyfNcau1om",
  "key5": "KgWYa82UKNBQjjNjdG6tk2piMFv6VYZThPjbSDnh31iGdX25a224QstGQjdXj5i9D9kWQn6jZ4mn5PXqcgcuo8N",
  "key6": "3L2DMJa3z7amxnnsvFXZDvQt6weqzM7e3iBSkDLaF48uKC3E7FrkuHXqTeLkm4dTsDGnCNPLSgtpWWqyrEVRXqTR",
  "key7": "4tzGtovPn6vsoVqb1zm2c9JY5NHmAMLCKFBdh6ZoxgGBXoDhBSc3Ryp3N4Yjk1d18D8XUvHyMSd5132EPAS3CARB",
  "key8": "xgyjZyMhAMk52qaN9waPrpPG2D4DVfmwssSCp8VvWoyrgv7sK1qwz57WLTCyrXNQwQ6yKeimG25hjgc2duE1mZK",
  "key9": "34p7L7jdnEbzHGKi5tVs1NEXm6EQ57MUzLLwSSSeQP5qBeD4Pqf4YCz1FJ7GcAm15vftJjsrTbGpPvcyvRz1Wy8V",
  "key10": "2aWJdY4kRd7ZzRQ5Am75ET91cu3oFPFWTcqc7vSm96L5KBxEAhByQk477MNpUxqhcSq316PUTGoriXnNcQnU3QyU",
  "key11": "2uAR13uSp8ju9zjwb1cTpWZR32vr8z2pqVF4HrK24RRHpAntNbMoFd6aUwLAdtWLKJdLUT6qtVAqhVQ3dYa6TRX6",
  "key12": "5e6PCYc3wY9JV8jN33U8guVvzJ18VTus2yzfvdQmTyuAXhqzPKsSEmFFi9CuWyDj9YmVh5bbogbATTbsWy1QwMyn",
  "key13": "4aUcKkcEqw9m8VWfbW844e5mjVXbpHf837HMYmvJApYc4YrQ1dfaoidmuSBiMG7KzBX6nfr5ExdA4Y27md6gGMzA",
  "key14": "5yJZ6Z1kSgNsAVEHqAqrnMAnK14TBzKPyRm9ggMnzonmH4RuaKLqgqoiLExsFybUyrNY4KaJ3JRuap33JqUKSfph",
  "key15": "4rboVVs79rH6XF17TmZXh3Fibjd6buBfTHQjhQxR8x4CqULLbE26mAyd5yyWyvZPo8irYuA3PrJCM4EDG8op8KSg",
  "key16": "h6gA33uhrfmWebtTuZnDm2Ff2u1tjnSTuocrbvAH4WNZrZVA9SEdYPUeqbxLJ7tfYVJZtkUhAUG4CtuJmTRzCmp",
  "key17": "5FWTG9jRcRJN4sSJY4bNjNjGwS5F6NXR9qJcrkrjjmxc6wA4WwDKHzgK47b6FwXGsB646UGGhc45r7EkMAKqpZnT",
  "key18": "4nzxPDvJN3fgs8oFFoUyTt1SZQzYyXczzmH8oJvSP9P1MTe6zNFQ1U8wj8boJURPrHfrtTfRhkXp7CywsBecE3W2",
  "key19": "3Sd31nyeEy9mXqNL7Cbhxab8YzSb595jTwUeLSoPCMCSpsgt4uKyGnhxJcTJDfdda2Ni7XtWi5eNFkxQ6MaPyAVv",
  "key20": "MnipbMZ1uYhvfu4Mx6r2nFJomecQ5ZTHuRLJ6u6AU6L5bHbLmnMTb5atBALws8mCDoVuqpbaJJ9iSFBVWuVEgo2",
  "key21": "4f3A4q54u54DDzACbRXiPyy6fYANqfySmUStQwHybr79fuuUfta7NGnstWbcosqyBhGDMnXjb3GN79bzJNz5184A",
  "key22": "4Ny96t57Hgo58jw2KngtCWgu2xV4Aoy1eA3z6vKJSs2uM3ibvKgCfDHn71xybAr7jWtDK1vq4Pd9dyEuhE8fhNX8",
  "key23": "3ULrHFeViap4P2Uffqf4TequkkuVhU7YwNN5pK5mxxpavEkGvAjNSXj46VV4AW7LcNTxDjFAX9nkwKuymVntJFEh",
  "key24": "6555vCnCzTRvkJi4TEsVh7Nov6ijQQF6VtxNgnFHD6PVq4chBHUjhUL8Rey6VMUJiHfzURnyS1ScJzZVRdsJTdHc",
  "key25": "3dn8C6peW39KAz985GVPnbgHHSsuZUaUuhAjr7T9G11GHzKhBYEGnXfgyNHQEVVvTDoYk9ndYJqYu9poU4TDQmt1",
  "key26": "4D7nZy8Sv8amxBWrnYhTDHWWjW6njLAxPBzVE1hETNpQsP44H8A4GVnR5tBYwBQEXmHeLCgpPFoQDVPom2g35V76",
  "key27": "2sNMBN9h8DvGMeGy15G4VYPNLeSVaeZVdEqUwNpHGE1uccroCU8GpEvzcB9y8VqSY7Z3JCXSywCUibYPSWz5QJsW",
  "key28": "27QtbwNbssB8mjtBCndRynjmDakPKzgVu1JGZKMPjW8Bks8TNL7Hs9f1WKkAAY98rfJhYyXbiht3rg4cLtjaVhtc"
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
