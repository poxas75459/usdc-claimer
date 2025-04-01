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
    "4DAKBNaEaTMCLTo23tH3AxSMEXnRSmrRws9aFBdbNZWHZTR7hi35NqQj8TZD6njs7LDT7VsyKqJC7v83wsgpAdX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGvhaiGmvLrf2mKT1n6noLBa8sBHN3RZT8Zez88oJocR9f1cugpWtpj5jeByuyMwm1Ze586nGg5TJtwPXRzKS6v",
  "key1": "5iJamF31CioMyRDbrBeKMyoN4C6Tr6xi1NXZVRr6zQzzD9EZiC2mzAkHJJy6bg4aGP1Br77NkvxqVSrYxkAL3rHM",
  "key2": "4mGosVJkzkzJfaN5Wbtj1Dzi3SWf6xW9tBQBUEe475FBcMLP5MQuHDJqRt3XG7VyZWYS1kk6s3VX7YWMwjzn8tHJ",
  "key3": "5eURYRFdALHdnCwJeVNNS3fdgAhjKnGAD8B1oDA8KYjR7rA4WjgsmS4jeorYxa4rRMwDyGekbCNcHT1ytfngkJWP",
  "key4": "5yw6oQRCGiCzNAkQzbo57hoBNkZQsG6qkkmZkmYseBr44DiWc1J95QgKPu4QsC6gzag5fy72fptc2BAK7RBhx2g",
  "key5": "B31PMPQH57NobYs7aLaRVeh6EjFjFYKH6ydBmsvgzSQypMMcpC91BXZLp7AbQN87EXwQ1K92FoZHKPX3ojn4YgP",
  "key6": "4Pr8xmG93Gu5fNAtAWoRnfhNGnpFkPxPPw834hPu8wnMXZDiyqnSTixAQGeZEzbZULUGB8ANV6cc7FQhZdcS5CYC",
  "key7": "3AwgbYp9wLSnNcpRUzo1zW1Pj2gn6j622hFmvpD2W7Kjen8NuNx66Lv5JoFMs1tVDhRoxhdYwsSJbYkPnVTwdWAi",
  "key8": "5YZVbVntdDtemNA3MeMGTsPiE7K1K43Tum4MMQnj8usatrpEzbMGWUmMRPEA5k1zwpeeZUSQo42RZ5NBeQHtm7jp",
  "key9": "4bUmavm58jp7fUesgSfmrwtPq4Hannb6URM7VSAwKNzSk7tckfTFymyVwTUNo2y3Jrj4WQXPAbmKu7bFyZJiGUQx",
  "key10": "3ymMsp2C8qEv332GWtshQhogEBitWU1aF8M88dKevn9cfysHrEE6nVH6BQU9BpJSHGcTh89PJHkgkyskEZYp4eQ3",
  "key11": "2TgR6CVfYunPs2iYCEgeSLuFPoh3PJmE6ybqJ6fuxzoNhiFuUpLYtmfLGqS6koeFUgdpF55C1WGLhpVLmutQKW1M",
  "key12": "oNg4qhwdVpUPGTNfnpHwd24XKKgK1BGN6Q3UvM93Ci3BhvFg6JKJcq8zJTazhWm2iHNV3A9jkNhgp7KxArmXofA",
  "key13": "e9HAxoeQWTp6NRsVH3gRy837cbyT7ewrrtKyJoHViazdPJ6dRSMhV4YvA97AwmngsSCSMS2EmGpYF7fGPxpDeyg",
  "key14": "5Tf5Ye9sSTsTQWZVgyY5BuAy7jvFnXCE4P4hyJCiaM1rtRk3WiJvrr8fuAGCS69wRbrvcRndG1FKpZKmPdxDCQ2Z",
  "key15": "48kG3q2LRYinLYZTXqTSVv3xBDShqQsbU5J7EgJkUtxZFJ3Y4ef2Ay5fZUpboCJRFVPJn6Ngn7AohBimLZcfAxj3",
  "key16": "5Avz9rmVrtraVLpnxnRTJjQD4uzukpfSvL4Ws19GQy7wMVCR2AJkgyz1L22RFGKGKwVHAVBzoqKSWiu4ZijX8wKo",
  "key17": "YNotEThHhRHxt3iCqnLsvLrpJDnwQCAKP1RkBV9crwJhQ99nSVJhvR3WBd6PZuxpNXgmRbMwrDVxMCEjsANGBQS",
  "key18": "YXCu9ETH2cxGUFhrP4ggnGd56yQ8q2E6CS7e7ybykDEUAFBGEXEWZqStwvh9Fi8VesRdtwebENttLCnSczDwuiy",
  "key19": "2SoQ6yn4SerwbAdZwK4erPw7TKhUwp1sbf2zKw4zXzV2ayWi2wo19TswVkwCpmN4GwjM1JsBjxb3tMv5NjjT56jM",
  "key20": "fYaSk3Bes4tbvH9Ypb6xxMkw3Xs5rMeA32BtXdwK3WvmUNxQDyQfs4vbuPdiajwNWPpHpdaPUeSXCkGRW2NddtP",
  "key21": "5DytArSEpWVKGvfrZWVKBW4eh4V48wM6PLXRVYXFZp2ZsU4n2jC5K5v8qsjsb7D4YDzxNQeD5FWHtFSr52AvcrQj",
  "key22": "35YY3gr9idKHv8Li41MyJRvLKYnc9zeoTj7JMkJ8JomuFoqdnW2DxjvXnBkrqi33rpeP3U3qJSRkR3nSgjNAkmuE",
  "key23": "2jucFVPjpveqV82zPEGg2mUGuyHM915g8KrorgxNat1v5j6kLnSeujiLZ2ni8p17i9TmKaALBJ7TtvXMNKNGkwj",
  "key24": "4x3wL1PwZdxbn41GDi7NgmDUPy4CcnCPkKwivibjgAH29o5fqJokprrMTP7XigpL2XFi9ASkjSEhcmnVRQHHhRzQ",
  "key25": "5a94juZQYAMpNwX1GJCPZUWyrTsKe3Nis1PP3NqxX1LcKm992ubhic5UM4wiaFSsKR7W8CHi6GDVtH6tfWKzHtSn"
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
