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
    "2q8oZ9WjcUutC4LmeE2P3NVSpfFeDqZXNRBoz9H2FWt1voqZsKeViJh7H2rmojRpMXVXUpe6TSMfLbhEn8cA6AWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GFQPNrpLpFaMqeYod3xdJLWTvZwYDRmp6ZA5m8BQydeG8cKqYFf6pzrEjpPmwZCHFo45Xzkfvp1fSgiHn5TotgG",
  "key1": "5NhJ3KWBbz6Rywjq8RgkNbNHBvPt8cDkRi737nRxK9NmFjiLwQrmhR49PSiPmg7FbPLyn6LrUuQW5kX7iC5JWpcs",
  "key2": "3c2CLP4qCSYMGQCB9osWWw4oAqNxnpLch4WTmqE1kGEg9VnTj6WrgGsaUFLS6mrohALVqgqRp2PiHD6VJKGWiDX",
  "key3": "5wi4vpPHnPYhgZPSUrtLm5Aq2ueUUNeCJZfKHWcSCmCFyhagX1XWwWkmxGhKJh6yrpa2g4oAGg17VQ8ibX3ujX7m",
  "key4": "5Ej85x49WezqRHtypdcUY4WGUjTzDtyzaHMx4u3NYHo7V35kcU4rmAt3Dxut62AQwyTqt3EMcZzMWVGMQVxbtzFq",
  "key5": "622jyCqSUbNzmuX2q4EZN7wjpEqjPE3vwUKXQKAi3G6ouZ3FZcqekowpqfnEv8UE7esJDbVjabJ9kqQ66zFa4EqJ",
  "key6": "5qK1p19EksEVTBoyMcXvH2KD1YMhYePTrwtoCivV3TjomiRcGivfvehn9p6EbgqNj93PQXcN6Xvrt5DyXoL8dg91",
  "key7": "3e7d94HzTaLnbwzUU3DzNnuaYXR6DWoGJAu1FNS6ezfjFab6zJXCtMPerrWcME3HzN1RBMsi3eLdHPqopGTy9Gsx",
  "key8": "4QaFpxBHJH3LTxCdnuWU5tZeKVu7dXkwqdZv7FoYzNuEZyLK97Li2kkqrSyFssQJ1G3HkydxuQMDjrMW2orjaHV",
  "key9": "gPZ4sgb9JAW2auWbRSV6TqicJRBEDd7VC7HTTpdyAk3EBByFKWumcJPHycfpckvgM2YQ1D2EaeJboGcG86c9U9C",
  "key10": "ndUqq6ki2usSr7NjrupBfrqawzas9SUTKy3VECQKtqmBw57qLr3hJzdAWVJwvcBU1bsWEXRYCoFM8BGm8tH6j4a",
  "key11": "3q4kMKp3E3hthx2GuJRNNHrmwcU2m2XYNrwqvmbte8aVemsLKGSbJoXVQ1ymeFsbYmWtC3igccJGJyp6qqy5rEnv",
  "key12": "3b3nToh6BxW77Lxb8xkRu9bSDSWr86xKFMg25amsDvcsdwKB1KUkwcFHKFVH5uifjGiMhT5L1DxFjnUrYEREVS2M",
  "key13": "4x9uBzwXQU2Z4Bxt995tW3UrnERKHwnBD1Ufa2dUrScRfuMVSQyWxZ7uRi6APYnqkn9Zu2pvmGvoiZHPRZ3EGS8Z",
  "key14": "49WhXfbpC61sxR3x3cC9ZtnrSJ3Wp1GXZuysUuvC5A77H9D8YpLKgKgdmbLBLDPFNNWFxgB1JMf6Lb9Judz4VNsz",
  "key15": "cvq7vK8FogFYrbCConebHkTwUug1QpfR9UGpPqYh87pkCVpGB12FiNt2oS8i4G2bYeZBYL1srkiZ6tKRCs7Xp9z",
  "key16": "5B3F43SLkRHxeCEiKafcuVcUHjYbXL6PMjEtYWoSpQNxSuDknHriDaEbCerk1dwKDck2Ra7Jr8hfNCQT2P4nxVPQ",
  "key17": "2aArdN7NmZy167tUEujffxx5enqbAE3vuCJKfh2kzjKBodsXZycMAxoppz5hjT4RytkjJrJg8iXnpsp2dVD9GnYe",
  "key18": "HysinrDeQemqyL1YcQsYsCt6fy4UtupLNtyj1VrzHuvmzFVpV465DJ5jmb9UA6EfviCQUvhMGPnhapRQG18Mdnt",
  "key19": "5CW9CAQdgsEwYDBRpc9hsbBVEtoLXx7XUQys88EFoiwJLo2PjEFpR2EQN5BpPVCN3TsQNBu7Gz8F5mHPgFu5dxsW",
  "key20": "4N4BcsAt4GYvC3QaXSBUPtxC1grnKUArTEFwp2UqMBaQohPdVfWteErhEDjXHEiG9u6zn8KDRbxoUKcbsUXWLaxe",
  "key21": "3Yxzkbpzoe4eovVbZU9wKD9eDcjWqkUkqfoupYuk949HWxfTLfGT1pamGfzBzPEx52qAZjVFGoAMV32KzL2HHpA5",
  "key22": "4tamxFHeZwCkb9QrsHxCc3BX967r6whPAZrh9VYcm2vyBvRDws7wc17Y2z248A5V4U21DP9So2MZuaaiWCa1LD6Y",
  "key23": "3Jjn4G5JJXMj1Gp2kvpUQ7B2pfzcKQvDS33Vg6bagd3bUGrm9hXb5nRjj97q5vgeXT6eYVwQaxwvvRPxzZhoRKgx",
  "key24": "3QxNbABeepxwUq6znGPQ4CSVD46XiERE1vWsS3pUrgpmMq9dq6jV6YKu2W3HZLHJBL3Tdv5RGQ9bpbcV8W4pBgDP",
  "key25": "NMvTuGXSoEieGCwoJ75d75yMLZghKKZzaMJB3z5cjqLQG7yPtZywpCsSeeaxGjMeyHiHM5DrYSPNWs6Lbd1e9oH",
  "key26": "3p3ofjb56fvHaJ8AkGS6ukowgsKG9eNfjpooVJ4VMqfaPUfiN8wTSMEjn9VPZcDVSGcXbna7bSmJL17BBHFAwvan"
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
