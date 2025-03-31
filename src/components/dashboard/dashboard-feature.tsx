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
    "5bwgCvCqqPH2gkZDx4WNxY61hYPFksg25F63518nXkhvmbpDzEWY6R2TUNSsaTrr8vLtt3rNrkRvazE7s4Yyo83b"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5YYAL8DsDnALrzEfsexptQbGWWRoZCq9ubYXD1vEwcn4skwwSGRQY8K8rdG9XHgdB7zkxb8ZLrt9ueTi8hQBYKSp",
  "decoyKey1": "66YvcLwUQQzrSdJ1Cbkg5figkQTBxZDKXBRPW1jMHnxYrxoXicSeBtqypvNFDfCjy15TvMo2H66H3CBtvFs3hxks",
  "decoyKey2": "5ffMbiCJn4D4gaM9AdECdYMomdZ6QvrbXGcXG8d6FpCKy6JiSeBCaMtAMGWSfKuEW4j2KF8Dp8HmxfoZnQWi1bim",
  "decoyKey3": "5AHuyTLM8GNZPM2jsiNuUnYMTTt8KvfPZLmBsXo1JMH3JvFiXXNUkkwj9ayaQeQ6kJvbWjQLBuZ2nAgRWCvpFkEA",
  "decoyKey4": "52gWnsX9vLVYZXRTVX8XB5mNe3Ev5gxgH8v5LeF8in53czVadPqY3gLRem7VPx1impbz2T53oPNP9P57ENZJkBSw",
  "decoyKey5": "zzzvv3j8WBHj2GXQi3GjhEfwZi7iG1NEuK6DFfkk5LwzvE9ZJKbxDXXHpC3tGiLvAEPv3kyHhNJ92BDzuMStnjU",
  "decoyKey6": "5AbdKWiDn5LLh5kAr4HQYKkozxp1u5hQu2dRp241FaGiRntL17jRz1WX2rUqLuXtZexKXwzvPoEhcS5SDor8Mqb",
  "decoyKey7": "25io4E9aePdtRJaaM9KsWMTsEBvYGtqJp1Wm7q8142q8xkmgik7HimHtVc6jYCA2K5F9UjcqiGwkZfaWgANoGNso",
  "decoyKey8": "33F6vPUxqtfjL9RwvLQQG6ZK85fNED9JsusuPqQLXhERB2m9wozQycJt654rmAn8hcD1PfpqpsqhpdpT4MHuGV3C",
  "decoyKey9": "oEDzpFyBngaqy9iXbnLYoRQuUAqKtqyAMxGTCFiNokp2U3mVfuM4ZHew2NasLSyDCdikvAfugc2cAXjvWeJDQt9",
  "decoyKey10": "613JM92HwfdFVUatJFfdDTYtmkB99p4BT75upz5u14PqThRshFUri9n6L4nuX3QxZ9wQFAYvKxNqiQZxvQkLNMqF",
  "decoyKey11": "ih488F59852KsLKwfaiV46go18Dd1VshBnuNPSCpo8UCMrjJxS5LDzBFFT2c44WN1eRScdmutHaCG7ifCRYNYVT",
  "decoyKey12": "2N1LxY83scE7xaKnNV9xhZUEhR4jyt2C6hCFJYc2CmC2YN6HobmWRw9VMnRywxSFEKLgU1jS3PNmSz3sto4wfgSs",
  "decoyKey13": "HbPcDqiVuMg368RezAZRZqKy5JJ6fa4u7YCSozUonoebVRQKuD5V8G1AVtfsx9aztfkskvzBunadXjgawMLkFxE",
  "decoyKey14": "59nsSACiPzBKp5qqa1e7sF12pyb6AxeeyAMVB2rUx5USSrZ1QVMTY4t6XZzSD8epwqyo1MhGbaCbJKAQq5RjfbT1",
  "decoyKey15": "22SpEkueSwRG5rXKxC97f1LGMwbPvXBdx53NuPgFKZbNkqEmNYhhVpMy3YEutN3AwCTW3WYufFh4MiSTYdBwgUg9",
  "decoyKey16": "4UrXv2sKUphHqbimuNfcmmjd8wMrAKiAcmaFBxvSaxme7bcKjHZLHikpJiBmKgLV3iYC7wPaPkG9VXDRqPr5JcRu",
  "decoyKey17": "4UoWnLfrGconMmBxgHZb5kdaXnvFKodkJJePfMxVvU6u1yFDfUpyRgQestzN42V6QBNRtoHtBkDDM2K9rRzkRXns",
  "decoyKey18": "5qjE7HGTpmpid6VQzzcuZxyZnzb7LiBEQM5MkNLE2vtmRMA33A7xQWDRr4KfGfef7NWAfn2axkF8W8qTTvrzfrn9",
  "decoyKey19": "TsxUYBz6AuCnBWVMSwcRK4svj9yXmqcAUiYSPgnavWBh2hP3nc51BHDf6S636zQBtG3hdbGNUQoiWrzEx84rQBs",
  "decoyKey20": "EB5vcoG9qKrUoWhsRKuikdBvYCgUQdC1qyhNPCwFWdKX7yw8mhXKf1ofHHdJN7JncQ6hQGFcmaZ52YyCHTrvRfy",
  "decoyKey21": "53G9hHxQWdjR4DH7bDo6TVQjyNU5CfaViuQbZZidq7qcJ2tKBV4kM55JAwBpJzZa2Vp9AtSRFXMzyh7pJyPpPed9",
  "decoyKey22": "2em8EFohpNWnkEAUJUNPH4CMKKkcbwfDQd2ZsMSV4TPKaEfzMbF5cmuQs7nTW4LYTWunw4uS7CZ5Sj9QG5FmHaJu",
  "decoyKey23": "5Sc6ZK85tridLSeqktMUjLRLVwSFoGE3BfpYDs88H5CkMKXRTAC6SNdzRz2kHtNsbuoAc9XWv6zZ4Bx7CXYtkwoc",
  "decoyKey24": "5MGknLPmHkvDTsYjDPPfwPWatDGE5jt7eSPaZBgFXLFG9NHVRyRrboEMCWnwnDDXXuE8T1v3hARzratVi1DUAAQi",
  "decoyKey25": "5KQFZXusjV8Thny5xcti1qCqsTNFXN9gJhabn9pZx47iyF1nNRQyjEqqSSyEPXjyXMxDvkVUyfJ3L4Kzp2Z7EcyK",
  "decoyKey26": "2Pe1caMvVxQMCLSba1mMDuXgjoHsdQP7rs7k2QcupzG5TZM7mwqZtKxbXxwMnk2PcbELuLvnmYSHTHfQX3gRE3Qn",
  "decoyKey27": "3LuSJKmSyXNu8Sc9N6DT4HKa9Zj65ALc73rYizCGByAzTZKUfvpaAxDVwfF4VfMjqoiyK4DCxqDmpcQHC9v3WRur",
  "decoyKey28": "pozi6kR5WnXouavKSMsuosAiqZQWMuHBPLqURASLB3WtLdDgLJG7XM9NqdAUumABKsJkdcfgj3QvGK5hzxcW5XV",
  "decoyKey29": "5Cpd1KVjnZBPse5hzGbX9m6yz5J5aoRk6V2X8xmSMYn4BrHeASUrPTG5KvBgxc3FAxcYeaVRhx3ERT96up45s7Zn",
  "decoyKey30": "64SqHahtZGsGwtUf1mWYY9perYgV3nqxMwEwiRUMRcVkyDVwZooyWvtj1jW6xTkXHQV6f9Rw1NykxBxGZF2NpVW8",
  "decoyKey31": "FtcM1VraMqisU3ugSk4LCUNwhXRi1ps8wFKoauayH6egA2NtefKKR6Frsd7aY1Dr2nkqGHchkw8uha74uPpofzg"
};
// DECOY_KEYS_END
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