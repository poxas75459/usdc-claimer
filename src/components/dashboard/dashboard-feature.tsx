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
    "5F5MbTd3Z2ZfGi9UXYU3gHM7tiXfLQEbGkHEvX3rwBqiXU5khhfGTDSh2g7TNViqhkQxtFqU31JF1B3avJpdBm4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGWCTiFg7ZvtYhhbnATcPANvvhtLtd38HCWgxZWS2D5A55RcLJebfcyYcGvwXd7LEyg8NZGED8V5HEMQtncMhDK",
  "key1": "59CQ7ug8XZCrN99DE3ZSDipQurHiV2kdKhnhHumkjjrTYCmtnmnHPAntdgCDDrmmHWLZAWPR1cGkT9GkPZE1Qc5t",
  "key2": "4CUG79NhdWgGoy9nmvfUU4s44mDydU4dSqNsuSWwsGZsMe5fhHAy2WJgwXbKCdfDm1e8fpNCKxeCWTuXbAnhuZA",
  "key3": "3nQiXSMGnRR8BDV2LqWzzgtTphZyKTc8nggoNVkZsJDE25uPPhnFr56UrLB7NGSUMtyKRZr8ETgnQCkLU8d95EeD",
  "key4": "3ZE6z3xPqFNuUWbYnrGNd83xpc4xtFwdL6UW4NnN3aSwproQ2JAhk8anqqeyN46Z2stkmVocx8s6BHPu4TJLggb6",
  "key5": "5yKLFLYKi9cXW25LEonjyz33UFfpgJH21ZH9tiX7q28N6JDsP86mGgPmQieNva7Ji3oFNg24Dn5ZhciH2LrHWwVS",
  "key6": "4qowLpgU6kANy8ybdjohMXKqVWqy12raAVEK6a4JAZJ4LqtpGELfqJWHujNhVoaHL99Gg2DpLAMVKe2w7fZMsCRc",
  "key7": "5beaVEhTrzrDnhAeFA1UePN6tXBV6bvQcwFTw4JgHcgkCxWRLqUhubvpznQiHfw6WxJjobArQ9VwmPrUD53hD4ag",
  "key8": "kmV98NfX8EEky9xd54NTgShdwtPBmZMw83An7MDocJ4oqFn4SpFDooZkfmjXCk9dSkeeEHd4UK8wKRTbJsNpmKF",
  "key9": "3m8Gy867CTz9pULqhXUUGkXof1N1biChGvX9QSbnLzKHUWZja45XZajiYMGsi5f59XLUHMBj2GmcAHE3gXuLMv6q",
  "key10": "5Lku876A6ZZbzB6THGdfXVXV9p2SUusugx5poRDQd6DwaXW6SwC85CG2Kiv2DmqSuec4BDgd6e5BHQHX2Fx4tnu7",
  "key11": "2nZi3ChVo9Gnx7qi6YEBYsfbAJQx92uDyGDEqjp2koY8vUqZ2qeAqFLH3ZWBFATikzatPiVbxbZe3KLQKydC49db",
  "key12": "3VAizLaM7E2KRJm3dDCaihGtrYeYBsaogXPTU62LKNZnMkVpuzr1U8rdUfFCXC5B4MeVCMSAWQ7Uj9cue69T1se1",
  "key13": "4erFC81hD8CecQj3XvpeDu612yqTGVVLfiuky34iyGtz9SrmH7vhRiVKPVSSmmGWNoGWs8kTYjgJPEppwvmqDorD",
  "key14": "9MbX4PSBes9RsyJmQzP4oURQbV53rUJJipE2cgDvmptWH6NEB5Ue4AxE9E3XVTmZEt5vbvkDpXHSSSTYAar21n8",
  "key15": "4KVicwB8L4JQuSTsBNpDXamZnktMusgtzAkkrhXUuNZriJ6tVxSYcPwyRsjwS35dxSZFTWX7XnBpdew2aKcnr3ss",
  "key16": "35gPQqFkDcC8uGF2oBRM1aDzYVTp6bUFo1uesSBzVfsqPeHbfaAcuh5tnzeFPaDEHKfSRCkAABY9uam44YHP5fE2",
  "key17": "53SXherZQc4Gi8WkmG5AH4USCrKBy7FzwS7ZKjewTuwtAyJfqyvCMWive98NquDBMf4dD41HYF7qNnVz1Sofwqgo",
  "key18": "d8b9hfbWvTp1STh5Aa9Uj3ACVGK17CE9WiBoLvJoUkqvx6YnrMqcGR6NVnUgB8jLJ5i4n1XR3mYqvzrk6sbzx9p",
  "key19": "5azWAiPBKt7jaxDZcdjVhVgXkr6favPQUnLNqRV64w5hcCZmMTNnimktPfKmM3fKXc1yyvgfUopPv8g1wMrJMudN",
  "key20": "66CiXyDdTZQHX4Eb62NQHt14qhF98v3MGLfEnP73VbYLKr85JZQLXcGd2FaoVk7TRnZLHX27SmeH7T5TYKUG1mDp",
  "key21": "24GAhwvkBNUUSZPgaxfbep9nU1xEjX73NGdowc4MeWzxzp4g9ZSoeCiogeLbsLgMctdEmFAtaU91NsgTd5239f21",
  "key22": "4GyGfVQzUbEJ9tdECfhjYivNtGdabnpS3gHoH68adrnD5TY1wXZ3BvcLYr7SAPcBVrcoLHM4t6fkqnXk79Cz16Rd",
  "key23": "XNhohMYTZGbGFwG67rgd3DggUeJtu6WRpj68Cy38NJVzn4iYmeM7QF3EWTBwAxUDfd5dZW6Ften5RGe3FJQQnuZ",
  "key24": "65cdxFwdyFCxfiFJPVScCTTNmNBhuKM28UEDTmDBSdSycSC3H4KrXUDwWinuvnNgQqZMyiVWPHGUZeHco1sfrBDh"
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
