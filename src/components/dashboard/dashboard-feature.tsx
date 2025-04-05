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
    "5f1a7PXX9smR8zxjtNwLAoMjkCWKejA9sQsGnZsSAbHzvMDoq64RHiiRfistPNz85bB2HQtB33byfBj7KY1oc7iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcJEf5ppg5M15YYbCsCfxK6PZyaUDW5AL9xfaayszSE8EbfoxjyG3EM9eTnnyBLMsm8ACwcJKaJ7PYJWoJi1KrN",
  "key1": "5UJe1wVfdHc5gftSvrUTvjJcFQDRRDNFiUiqFCPzApCrbg4xJnhCrKkh2zq8TgumdLa4TECrhzaP4f9qGHjEw7rX",
  "key2": "3M2fGpj9s1JrG3zVPNTJHQga5YHu2imWPkvzbvZw2YEk75hwzV9QyEYAuwKuFemBeNrJNFRfZYUUSTRzE3eR2x1c",
  "key3": "ZW8bAp5GETVFuHAh9oTsG2WLE1VpMSNopZm8vP859bqSZoM9vkudFtzvAdExU1WYmGC8wR48RyDtxp78QBJaiph",
  "key4": "3BrL4jfSiWoZUZN5cEQdUcHDGjBpxXeNN95KYuangFSfNpbdaUf4b9cSTo9qGq5cuTMxN7gimBrvoQr2AhKvkte9",
  "key5": "33YP2uTT3LasTaYM9kex4ueBWN8XjtcJ3MJAuX79GyiLBPFZgHy7GKh3U5XSsVDrzrJqkDK2bT4pkC73KHT7YQwv",
  "key6": "3AE1Ss1tUs93biBJ5psErCxcre9vB5q7V9Z3tsmQey5NdFXxdpoESCEzPRPB6TJKUE4oePcMRTLRBCy1jpoW5iNa",
  "key7": "2bGhYz8EWs4Er2vCKjjcCAz76aNntD66biu9GZ9KGAHA1bAJyomPbeNJvLv93VyDSTb7m9DFfsG7hiDrTfXSbcR9",
  "key8": "xzizEpqVg3voy8RqgtJSsYF1nASkBc8dGzPfs3bwxvdVE4m3bLxdERKgss772RFSHt1YimVJs1uZXjSPEjxyTWr",
  "key9": "5vBJRyp7iJVgwKgB5jS1ey865UC3KcYSVpg1hbhQGVEszNpxPtUqwuhEptmPtmZSo8LP4FtFWzmKoZyASU51v8Rn",
  "key10": "4xp5gEmQNqaWC7kv1dtejRsTK3mcM3fBTNKpEJezFLM7X3tzKdwsBDZqN6TCRmkvwiJbgVMyacynFmMjSAJNaqxV",
  "key11": "5cUTVBE1ymni3ugajjjoYefofEjuEPgz7AbUiU4Wze8fhcw5WnymqEkW2xfQkqJy7mRmDjGXDdYDpHkfG8rjFMZA",
  "key12": "3Nya9q8BhrjRLwMuJrc28rpzEqYEiJMpywa9racVoezePSYBc7B8ubXCYYCnYjQKEBbiA7Gih3fDMgUUDyBsZ8mE",
  "key13": "4KYL63HJwdENVxXabNaQaMEWMN35pUp8eLikenvGFwouB5aLsPU2nVQpwoKvpNPw2Grb5NZ1jNXBJ52gXUaBK7Nq",
  "key14": "4Af36PATQD6bCtiJKtEm6vSHAzy44gyzRrQxhFec7MLY6ehevUoJCb8e3yP5jL5wYQY3zZBrrrqNkLwajWeSf47H",
  "key15": "57tWiS1GV1Fa33a5AmpS3qc4cD5TvefwU6vYHYxfPL43jrWEBHXRqVB43vw7ju2pQp7tU7BeUVmHRxGpmDh9DduS",
  "key16": "3CrDWZ5fmSGat9KfrPWAsvZNJiKYfDC9cmQyE1iJLqC1nLK4aiFubbCoeQfYZxb8gYnMmcNLMJMjnLQymN2jP3NF",
  "key17": "24BDBiSQgPwPr3VFJ17VyQ1p1BccFjF4FVCzSFc3L1ZS6M24CqcQB9JmFUX7GhbvLnkyMLhafTEkvJuB3BhDGpHm",
  "key18": "5DYewQvZfk4b5EeTtLECar6CCRto4oQ3m92EPic3pBwAFydiW1FmVuWG3PbZ5NaaN4tCvJWc9GdWaHnoeNGQ8g8P",
  "key19": "4g2KKbW968Pp4o8MpP2ogMssVshM5woTV9qbF8YJMzQWHWZ9YgMGfud7HBDEtLa1JExHjUAm1uj8HMLAk7wzZsfk",
  "key20": "wBQpKLoN1F6G1QVd57hzo8qk55awY31BmvH3VhDfxSM7eKUnSMhhELvHjLikHUk5zh7DbEwfVQeXit2E4TQRQck",
  "key21": "4qUUF2pqiXPuo2esrWH3x2UAMV5E6AFPtG6TEyrd8aKCLzv7RKzarHEGUVyXzWp71RgGzrDm5YByqH8ydXLaLkTU",
  "key22": "29eB45YYt4nz6Zc4XsiVdfpEGMERsbsbCZsWxLjWBVMDKAYeCxyqxaYzZiX7E1M2AurFyUta38xscoR5Poi3tsZ7",
  "key23": "56VfbktJKyeNWfHnpsXptxJWCHcb9y5cVYyDNjdtZ63krh5wtvnKzKbot7PTcDn9k5kVBEnhcZsSG3KCRA72oEb3",
  "key24": "5keGr2UiSLgMZK1M2GYKLTQxQhMNAXobfWhsSPCsGtzM8r5zCiztcFAoCNFQaB2zZTXHssy8Wj3ziDasfdmmn1Ef",
  "key25": "5woixZmQQzYbPGETWd44swSRGvkszzASj4C1rFkP1DfD8VDEXJvGvxZhuWcntTgFAnHZnLLB51Y9D2Jvkmfj3VQp"
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
