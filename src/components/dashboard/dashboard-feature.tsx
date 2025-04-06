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
    "348aydPwJJyE5nPGfH6zGJxt2Hs3sJvP4xrTEy2ECzTpxqwReHCRiQxJU1newRRbwSNASy8v8fTLjppvQP7w5ikQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2atwqNhBauAHKApvR3agkjpUESGJs5QhhBfmoHgvZbvyUK63dKBdsYqwxuNMxHDdQJbYfsgm9EsCx6jbSP81HJhi",
  "key1": "3iNZJghqpjoYsdV2HgY1kZC1EjciBQJVoCvPnAdScYHbZvFiv4XUySu1AzRWmTAhvfy3ci9qAphw1LtRUv8wB7dY",
  "key2": "3TPGZ8aYMJi3SL3bd7hCAd6mtBkSuzyv1ahtYXEuUr46YFnASWmpZjYeDm11EjSeXPSRh37FTEnTVmJoWTWm4ohg",
  "key3": "3Wp8XAXqz3c8KpsYEPobVoiuPVFt7SGEs1xC7yzEfTUbTWqkzARpWKBZU7t4H8c4zF5SvhJJnaLDBr4y6x8ygcwL",
  "key4": "HUaTYyc1ndfLHSi8icbwEsjGvFQRg5ERapUmvsQw7aN3rF3RVX1VjVzUR3HjpvseMcyZ2stcy6oFHRH1o4WVKuH",
  "key5": "45X6vU4FbeGXeUNVzSBzRXPRGnPCzf7knWREHw4iM5rvZJitAxZk6UF8ngUhdyyDFuUjzBTHD21C42ktmucMAuNt",
  "key6": "4EqkWAyCJvuRtPoumVLF5y6CorGvUW3CmvdCQhtSz5HbeVbnEDyJRTovYoJjjFtKUkVRJJ9XR1hictpfWQmWxhBM",
  "key7": "64nEQRZLbrhCrehZo28tZR6aMv8svNiZjcjzH2JH9swTYgcRmpVcCX76usGz6tdN2v8QjBaPE98NHwbWkLNZqqvw",
  "key8": "5qp1fHdyt1xCNPgjBPbMp4JMupbQbLU4Hg7TyohD9QfaRoaFPduZPYXcHPE1cwx4y9ExCYzkzA3NpybJUJcmMUBe",
  "key9": "2pi3hwKyKo56NBFED2XQnknjSjvkewXReTRPZQaFRLYdge6qWKSSwxDDHQqLsAvrWxmrNA71Trxn59CZsWr5czrU",
  "key10": "2jEo768cgFYh5kgaVMeUj5uNvK5CxPhjtFBqJu91FpipTj1ns1jmnHNK4XetpxREeK7kasi4uAoApDhMoajLtadC",
  "key11": "56XZ2kUiPSxcU7N6TKqMWi4ea9CZmPVLTFBp6W2o4ZW88nFW9wRn8WW32CTPcAf2V5gxg44zpg6uhXNy3fXahXf7",
  "key12": "t8eW1aNt3Qc2KKSPwuXhKyPkbjAJuHBasVtzNg7bTewX9r3foTxxGFLSvVhHEsnhg7f1bakma7HJf3B4fjPHcQV",
  "key13": "2H914eyXyWt4ThLAp7ibcTqn3gExwkvWQ4bLvDpRJkjuTtEDFtaB3P2BBWeF9YtGJr4nAyVxK37mGs3oWTFEd6LR",
  "key14": "B67ArF34nBYpEWCrmHqkK5icRRZWUenrf2VZwMT4opiB4q8B2FzwB7vyBnWQiyLbpZNP4oA8iWXfPgghUYhorAK",
  "key15": "4gAbw4bw1qdpyoQ4BXxf13guJaa6Kw8hRwNKUfTbS3WHdf9QXBExd3EGnVBjfdKEipzowCkPXrZ3rqXLtjApT1ev",
  "key16": "HVLjrqM9mGH7kbq5n8eZYmAjn1HTFYASEe9gpLskdCoToJgLuJq39aHt6LDHfKES4r7v4BzUQ4dkKtmTt5SGP2F",
  "key17": "38xj4GfFGsjhoDaB4o896svDRzPXBsRzCugkvEHY6URs38LNQwKS82bTS7nrL5Y3GGddHhtqpA7cgTJ6wZ4TANZg",
  "key18": "285YajsCqmmZEpVS9NZLg1YaXjWRDziQvEURKSeAaGqa87q751sp3uPmd2JBYag5N4L6xeTfQ7WYqCpXk5YiLECf",
  "key19": "5zcDZzxj2chPvWWtdKUdEitAngbEisCuxR6Vsw4yeoARrkw1eCX6ccqAJfjSqhBCxAkxqFjJW9v2pxDQb1UNuev",
  "key20": "4oQCaZFPVeQuch29oHmDGRo59rKTUHXYohLdRWPXPWSgPSbWWB2DQdi4MD6WmjcjSF1GWnZSrCgdi2Ksbdzvtsx1",
  "key21": "468NnQn6T9wuHRxtSwYUVN3X2tVrDHJwVW9n1FtaM3zV3yuVFu9nGAex2T83J9bYAVx96L6bxvGckTVMVJybXNM3",
  "key22": "3d7oNVnx2qcBoRygcm2ZVfr6wecL638Ca7kBuJENhK1C6A7WkZwAmJvnrSHrddqKZWrUJp3ydySs6DsKWyiA1QaK",
  "key23": "YEazYBJVfBJsdMjQTiQYdSTi2nz7oiu8XWPyremgTpDkEENK6z9yJq7Z1j81JaHPGxc5D4ssVxr7XWJwfYZ3G3J",
  "key24": "T2eVxw2hZwSbHgirbQeYgeW7hikS1sU2pLyZL5PG38WzFzebtSpoxqczcqigLpktbfkMfMbrMmERsXfc3Y2WYxX",
  "key25": "51w5R4V4s4wM8YPPogeZsL6Zet9jNM3PfSwu4csSySZbYuoVjf91NH14r4a3FUBcfC5WP8bmMttDQKsgLQ6fMFSs"
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
