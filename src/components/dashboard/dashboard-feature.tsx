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
    "3UC7bayxy48gBvpLGaSTF5D9RhqmrnipAKcZirEngzPgfbDD6Pa7k2HExEeiFyQkM2Ts25Gyt4DopGqUSJexhvn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hCWsNTC8sisoEGMHUsRhGT82eARDcco8fiup9ffdBMtR57NM8BTQwb4kyPAdC4ZjeHBYYhwpQDU74VzWaBSnjW",
  "key1": "3XVC36dE3YzL8xRCpa55fX6w3Jf15tsFYZZaBmzmn1SCxGq5oJ8NGmQDgqNSuvi89NhLGvwdYGdr6AfgQGWRHq4f",
  "key2": "5ZMqnk81Ggb3ADUaQw2qpkeh85AibnrNsDeAdX6uPK28S3HvzLjah3zxPjNuUVvUQi98F44MMDr1t2sFKH9qzP3f",
  "key3": "2ndfq5JMJveqvEKLKL28Db4E2Rt7wdxwkz1sLU4gUeuNQWjyUDi2MLteTyWGC5SkZb3zNqrFrAf3CNVfpEqjELEi",
  "key4": "4XLxyevbjcH8ykMP9v2fBvk7CE57rdo5vwrCbQtxRWgv6R91QFKdLuWBcTp5U5VSnmZF6539H3sU1t3CDAEo7Daf",
  "key5": "4f3xUUButMRKcuZJpiu95rhxPcYC2QF9PZU5Qz64MujnSNaHpPrXsd17M8cbbKrF81aQmuYpncWEBna5yHYrJiox",
  "key6": "3hKxZU9tTW4zUtNqUux5mj8wjEVWGFBxfp1iB3eWCZNcLuiHPEF2aYCTZdhAjtppA7h2a8gaCFPrLokMqdPiBwra",
  "key7": "2aSzRbjcGsRYdtTR5U2NRkCkzrqiA5VH9fASaxv2D8irzKSHSBj2HNpKLTiWiAbJ3CjjbNKtp5jmnX8LRvYwjvQx",
  "key8": "4JVftJD5utJZMZ37gDBrBy5MjnprJbk4xXdHz5e2HJjnwfnQBaTtvcCqWMYpS4h7QYpji9CcuDyf1JdsxQESPjQq",
  "key9": "ChSJo7WDSsUnK6ffAkjykDjg6o4ZnMzL5ZVDHTuEidmntBhSJ2zrBe1qx3rwhsqZNaKb8q4kYQTA2nrxRStmCCz",
  "key10": "3j899LFuJeCjTmabxFaCr8cAnT3bsTGNqjLHxD5DHZubUmPMU79tpeEvWfy3k8FpAf2rYG441hUKx8WPqN3a4ZT1",
  "key11": "3i9HPHjYhi8k3zcm7VGEhGg9QzXY7S2k8zccrjrHnr3VZzuvYjma9GTFB5ouhfgATv9Ma8wommSS4nDja6MVBQ3y",
  "key12": "3a7H3k1vVGSeXq8ePQfXseSuD6du1YXfdg7soyGBLGPtc7mFgPAgccmySj2FeADcdpj68t8Ve4KsScJvoWkZjwXk",
  "key13": "57YJKprDEXQSmAM1ckAYASLT2MRkb88tpN6FFL8qRRk9NLAHUByt8PWzsV3ZpmASJmzLC94aZGwKPGnyA1Bf8BW4",
  "key14": "5MeA1okmnFhsCimi8HLZH7hbCRKFQUv3BmuQL9yaGhaXc6jCbrUV5CMepL6YMTEbQYosacwVPyyqAftCkJFaqM86",
  "key15": "5Xtbj1L25jDTBfvsfchbXiDQjE5kmrV1UJRLhJqZgv5pSo17qd4XgwrQNX6niigdSRcqRTfhuKKRfKjhG9JubrXA",
  "key16": "5mvRVWpJSsS7wC7SCgE6ci1nPnBVP1xDdC6bfi1rtPToCiJtQ4hzUB8fwqhEAdZEYzQpHjCm5hE3FwnHXRNqh5uW",
  "key17": "4aeayj6V2of793jt4iomLPU4bKb1F2pRUfikKL2bdG8utEC4WE5LjNxZE9GGmZyJA8Hz1eRSHdfNi77ym1SQAD3D",
  "key18": "yLYHbJBrMMTrAPVnhCzwWAvtmxLwtPRW7y4SLtnbety9wnUaZymH1wDEH9QofHhLu8jnUHE9DYmgxVebfE2iY8b",
  "key19": "2z8j3WToxzs9djQCBxJMmbMqToDLiXYtvsAjK5YEJMx6fU9x9Q88bkLesGUWmRQwbAkQwdRheVBTHnAmiDbKFyUq",
  "key20": "61zHQuwtoDySosGAmK16Gn3XCaLqEHr3VAUYz3TDsZyrJruAV7wpWWHoWeidnYeV2yyxXLtyDKdiw8Axe75DNDRs",
  "key21": "2JqmY8ByYuwa8aH5r1Na4eTYmSCp7Ttq9D2CXHstQj1CSGAAMvgojYVkp4uuh7pPnVd8z7bQ72g1XgijjzboTUBu",
  "key22": "43BVFzguCLPhdRGrphJ5X2aEGy2bRcX9MXbCkNuvN2fcC9aSYwJmFKErMGJiY73cSxNMd1Wg5oG5nkywb499r5Yj",
  "key23": "4gQ4wGSh3rmLkYnxgkaAqpKXTeUmaKBYunh7TVvhuAZ27s2hzjgQggZRTcmmCDvEzPwoV92qgTycBF54Vf4NmX62",
  "key24": "5CqeRPhRFSzKfbo9CcFA3VjjYGQxGpzZhdZUCp1aYEMLwALVxNeppoWvjNDT3YPAKneRb6ThwXSBUCKu1NhHCSBk",
  "key25": "5nwmA5nGmA4Hrcazh5SMsLhBPaejAvMzVNCAk63ncgJfMyG7o1SPGxXT29X9z9z4Vp7dJFz1Q9jQGoHCstBq5Aup",
  "key26": "2fJtubNqDfR3cxRmW4GJgXizgcF782Ea4Feh8piDU4n3UdLDGe1ahmxBzpyABZ21cQA4yaaFbH2yYpgjJq8Jsss4",
  "key27": "5BpKMt61Fo4ePx5jBr59NERTFtmVi8TNNNume7EcNvpGK94Xr21MPoihjXp1PqVS3orxQNMErsT6txZb6b8s7WWg",
  "key28": "3woPTSwpDFHLFgpZUDDqV3qgWguSwa7jDggm8MdHjGRAzv7H9WfvPpEUBtvZgMucst8PhPDVUmgstGhZYDYFJP3d",
  "key29": "52buZHFXKUuBHevRBYccFWQgST89Xsm6pVs34GGyMmSvVhV37XMEPyZqAC3NQzvUUfEXrfG4F8mt491KDyE8kN1m",
  "key30": "2M2cb4qUPbvJjGiTQn3hUh46sTJSnitXsg4pHrGs9bHz6bysXu84fFxGEHnLuzALkNAFtx63b4Q6zhzTSUy2gcZy"
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
