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
    "5RuhMwAyQjTgT5hm4AHg57ZoJVBqQn82499EdExAriyW5F5zrq9Y6TGsyD1DtR332Gh7B3ot7hrrjYL1637TUN1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pvrn7pp4hGx1nZERrATjF9eLtxf1wiAGDyu7L7yQY2uAQsbXmGzsdK7Cgkb1PrPrBZvP934rV5YBJ29qJgFQtMp",
  "key1": "5PVrw6YJzR356QYXWFCqxke9fAXqeik28JRc6L3KHiBiSoeR2Y9D2XcCbzH4sosNqdzCpGBNCFR3uR1oUgGXkHfb",
  "key2": "3omn5VFNuY3UQ6wDh829UT9MgMMnk7637BqbrhnbHdbj9RYNBy7aGT164q2R3F6XzSfNnQJ4fE47ywtUUE3Gxhr4",
  "key3": "5KMcpmBMova4NyQvLCmEgeR4UgLB5L8S1ffAED4jvHTNiwS1Dhawiw15CXqqs5Soe85MLzEZEETHAXnfuaxRynBH",
  "key4": "2EP359JT7WknZmxV4m1P2jVvwLBc6msHXkwJnrDTXN1A65WSXJDJGVcqhM9RpuwRREKhirAt9h4TG4VUvT5pqjtN",
  "key5": "5GDTguMRYK1VkAVbwJTPMtKAxm3Qw1qrBQyyPb1wZCUztyMMEstJvaP8UiQnedY1VGNSf2VhDuPLE72j5aMx89jG",
  "key6": "3Z6yH6kW11TnaC9Lx2phurY7R1KsbPMTcohcRMgw8xEB4bkpEEnzHKXD4iRsqKW6r9fCu3TEY6zqiGHaT24cDA4A",
  "key7": "27hTYSPMpQ7TbQyXK2R4qJedue2w3nthRuJRW4iNu4UAxc7Kj7oB2RyeyWAY8k7L6y9PLLWGWoz95GGJW9VsUd3r",
  "key8": "4z4zeKshByFZ79bLMqAbKKnzxYJwW3aHpFyj3Dn1ssWZ6PuU4DdkXv7TBRVJeGdFLdZWjty1qXGc3rP436sHXsVX",
  "key9": "3QmhTh2feRUEciKD5hfjgnJ9SmfSpzNqHfqnHLHpwpuHSWjzPtnW18Ygp5cLNsRYmEeSMQqedwkVxMy1UvUgojnX",
  "key10": "3QN1WCFpAkP85o9iJwhZAB9wmn4oZEzYxZyXxFMPukpx4c5EnvTxzVHgYHwBBYaa9qsuVUR31or5hYev6rBDG5sp",
  "key11": "597SwQr8KQiB7YLQAxWH1J5S6A9rfuGhrshkMP7o1Q9do4YPic4RfeomNhgL2fgrPxmj8YCvMbKzYK8CK9yVvQNo",
  "key12": "4ZVx198VndWgABFkZr69obnhZDm1eSyCKNEZQEjJSkXqsbG6uGVoxfHZChGCvrLKA2P2fzmE9EsMYKTGDXMQWKEn",
  "key13": "o1VxiJ2gYyCUqymfYW4R8XYRxnCXBmkA1o1kNqD7SaPHZ7DstYUGmPDSrZpDoyzNWQXAQKSkFn8vUCyEYMRJvqt",
  "key14": "2oA4UXjBtvKLeFKRWSgRArnAjsr2nyGYGAVArkmVFcmcvsiV45iV352bA4WWL9gy3ZBRi3AfxUvdwGugf7WLck2e",
  "key15": "2r93tYSikER8s2KfChPbwkFKQULxzRuCKxCdKLD8dYZSvmmNFbEajZW6KoQgkFbhLmw5FkwK8UUoJfAr9UF19kLF",
  "key16": "58xCY8CopM6xv6fgnUpFQvnMzeK8RREcH66RcW4FCUy27tdhMxJGDiJiGUVQVQo3bNQ3EafTcagFAe2qqWFLrBT6",
  "key17": "4kEvVs1TZHLXQuk8Kpggzr1TtCAA7xGactozrPVVuqhv6zdeBJ4uGs5DRc19irzCn6LhpbKAapbpC1MZarfDJG3d",
  "key18": "4bRdXNrW779pnJ1Rp1BojUz5K7CyvXgh77HrVB3LdvhnC79e7LoAfbJmJpAhiubyvoq3aV8Dp26Zen5XPm5s5jUN",
  "key19": "5gKWJQZcYH7BEgnZUTXhkZwVNyGpuJ5J6viudPmt9YyDr4MafsPUFTznufW7EmhwRCC3kvdbigPVkrSz53WPeywy",
  "key20": "5tDQo2oMGSbvxibgFuPR6EAFFck4hABWTunsteEQy4ce2KV1CUPTn3X9E9nEqDUbqYm8PJ8EvEPgvN7LRP9SBKW8",
  "key21": "2zt4uHjcda5FcwaqoV2KxyZAfp3haS6hfttYzzz3555bZduMyhZTG2h9k3wRgJiy4RmC32BRi127G6nVCU5YiQq7",
  "key22": "4d7e9Bx2wzgP1DVby5ZqDqBo92H6UbikfR1ovSJ4KNYgaKbSyov5q2PG9Vmami2A85cpMnAghht4sNvF3cLdtP6E",
  "key23": "5u4cEegX4M4XuL9Ho4qq61knf7dEWqvkDi5AnCrCjBsyEHBX87zA1ESh7uWszKPZdWuTsx8GTDiZt8PQc3jvnQvW",
  "key24": "4x6rPKdZFY2ajWVNgczaSGpfXJTHfs5dgWQz8VKKWqW87WjEnXHfi9oKVNd281HpQAGuoCZHuZNxdM1n5DwZKEEr",
  "key25": "4zbsr9nTcABEn98e2Cvy2AJWdSLefJJDGzUfWd2T315q8ZBSzsqVCW89xBzJCMW7FBMCHJNW1JMzFjabDFVkR1mU"
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
