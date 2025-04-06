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
    "4NHnSZpkUWLmxWKsTYH5x9BkB1LkB6452MBUhSYNJKPwZMhAPueFnJr6aZUVYqUhNJM6aJTLXdc2dWQyCLf98Ars"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MgLyoA1tTvS1T1CoC6wUFn9gkDkDS49DT8Cnho4c62EKTDMjh49W8F8XN6yLRYugyBimGMcNUaGZ6ECnCowWK48",
  "key1": "4MbPyRDDYH3jsEP13VGPW9H4ReDWTxpzhsTrMu5REC5ZjF2HPtBmb7yCnNQbFEUfWuGdc16RhvGG6uKxNwbM1o5C",
  "key2": "DkZiagcni9eiBD4BYc3DjaippreiRhhpeC8iHZ1r9SBzZ5zhLhRWuKcF6CETRDvbPViUPBBSKLTT2S3TDD86EJY",
  "key3": "mGS8NecGVDAKdrtfmagCQF3xTvGzSyj5CbvRWH1emMU5NdoT6xarW3vy5BoYJFywrF9HvsNmaFt3xbL2W8YEpm5",
  "key4": "qcsN1vrK6oTfYdiBBa53QJ99JWjaRaBPFjwcnER3ABDg5Ao5bGiX3uhRLXmW7EvACN2z5CBHtqzpEvK4FRisaPB",
  "key5": "3MW6sDPZL5xTNAWKgGoTvj9vifp6kqBunrLCoKW7JwAZs4W5VRyEcJkb1qJNeJU2i1JrhNUjqUEt4zH6o1v1xjhb",
  "key6": "5iXr5bwknuDxFAir22Qj1fhwXAo5u5rFBt9dUHT6Fs9nZkamqdt7jDeMVdL3Gw7aTvTdTDE6H4ir1CKHuefuj4Uo",
  "key7": "3cphgSiPgpZFA5ymwbXobsQszh3mfQjL2pEP28hBtfSTXRJxnUsexZzRtxzjFku3mkRcooAHQGeRE5wmpL7PxVFU",
  "key8": "3pq8MBzuqVvz2BCjGSBzxxkvvY1EXrSqWoJbmBLa1TMc7xVJXMwsuKwifCZ32XsWQDHh1pHzGzNZ7RXukQtY8pjj",
  "key9": "5jFj3c39sAZmUYi3Rbhe31hytniR2m5NuvWiUNg3ytw5QmLEFEqiTupBo4CfVk9yJZcXPm2n4T7eJF65rF5daF51",
  "key10": "3Vbk5PaG1FCHGGWRtEEZXsvRMCdkJVBENdfQL6yZJBG5Th1KDuym8u2sZduZ94BewVjLi8qUpRGV4HzFFkWJJuuL",
  "key11": "SM1HDUyWwCfxjhKKxERfmHaLt8eySb5iVr9j9zpdAZn8BArr3exGLVKqewGiCwvWasMJaAc6qb3kGqX6mtoV81t",
  "key12": "5nWh93PBijwp5zXHCQiv9JTLz4MiQerL6U9kFBSouojbn7ZrzEjQERSUpgo7y3QUJL5DUDVM9f3ei8U2FrHtUZD8",
  "key13": "2HfkeM4du1KUmUfzCEcFKKpr1hXJWb2Zh22jP2cw2Vrfur4xLvXFieVXP82NsEUSosgLNUa4xpvKxtpm1bYXGaku",
  "key14": "3uoPNdVGJF65TRHaLh2C13Nrrx6zabNU6dPuofToDaSLBaZAaau9GPuGogqqRY38mFaYXTi1y4y7PSLANgpQxmid",
  "key15": "2GXyg9siTBKsmoRwUTfZsEGpPA2kxB6BUKzKsPPxpm59Zn2mMhkLoNswDcaDDJDAvPizwzMNLDLJ3hgVmJaw9Lpu",
  "key16": "4TLGmCHvPBydWFYbj1BCioENHJVUMBFNoR5raDfhTgWPTNKRoebtZvsAK3S4xNygT9x5sfQhJ5EMAwQyrE8n1GUo",
  "key17": "2ubtosnbGBDPZAyjYvZTnHxeYHwLDNQQiZuFuQYFx5UctxmYsx1wjW4wTaprrQ9Rw44xy26v52SFurpwQ511CKkc",
  "key18": "478ijmzF7WhLB9PkPb9zU7HCLbvBsZDA9CAkG9EjariUpVEgftaTB6eWZMvFeMfa4DtBqqP384beVvhruGfNzvhi",
  "key19": "5u2yrAfqozFTCUqsV76PpRzJecQviCcokCbimKgExHG9q3hZtPXaEi2NbmXnnumqKpeoTQkn2ZVzqveVi8wDYXLP",
  "key20": "5W1rGwrWCurywFJpSaAmd86wtiRA8Bnw7K3txbJnmdHVe2vXWhBvAGmTMDiqzDZVGXLeF961PobdaCvhmB66yUyS",
  "key21": "R2JcHeryLb757TeLU1qi8AsRCm59tdweQd5x9dvv9CogbVrSaDximperpx55MfYdmwHmZEHfVMvAdN8TmaUgo8d",
  "key22": "2BLy4T18zPawvNXVuDN45AyKfHHoXU5C8oK7QoxGFkRtzr33Nkwr7Gifzc6kN6XxtnwZmSWGtKHPrRUnShbP7oVX",
  "key23": "23s5VY5XTjfFL6ytaGnxzBT1S6JPbsKRaniRxkLyYT9SkGGLWw7fESUV3SBx3JXCiaDdmxkjkSd4Wmk1bMhNq3qv",
  "key24": "TvpD4MhGjGJoG3wbTyWHN83CBeRK2ddqTJTDmw6sphLvHfm9zcaxZHXLgBzD9ZeeKDgsL6pRB7ZuemXBgZe8jFi",
  "key25": "4KjEiV4gpr2aTa4EnxuZPif6LMznWQZP2XSHRWJQqtw6BEa79eavwCwwZ4VdgJnrMEGRvwfFNCK9eT6XbNok8e6c"
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
