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
    "4sr4zyydzWg3pd49vs4mRNEDQfSUMGtumftT76yWBeL6ELJzzTd6ZbAYt8462P2Nogdj4AQ9MHSzf4c7yvYxXwZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Su927hWvgbg5t3WVZfEmwUiXuERKBxH5hMEQpWHmcCDtpPNKXfAEyQWTv2HBxMJcgsnAc1mM8AtF4opJoLVJ5R",
  "key1": "3imtxuxeTo1vtZjQNzwq3H3uopuGsBEaxWiB2seKwPpcassqqJnGXphkP1xPsyVrpvj7f5C6A24fuGUgkjE1VmUm",
  "key2": "3gRu2DBT6YS86yXRW3LviQREBT1NzKo5ptsSMAZQ3DihaWSRPZhFZ5bdcCtr3vXqfGJw6G3JTgmCAsp5Tpc13Ahc",
  "key3": "uT2X5NwyDaR9B7EirmVNc3bonDqC8BzescKhxHZquZxgshtKqqvJGNHqjot7Rsb29faig2RrvZv64f4wfr87UHB",
  "key4": "44qZA9VcA5XELHHPViLB7Yjn6hNTvF6uiJnFkfKcTSkDSRaZ3C4TSsW6ea5NqUV39578Ht5Z1oP66nx2gSrKbHGD",
  "key5": "g6kQMJno4NWbJNfr9wr7Dmvgub54BEQNMErQksQVfC2D3GV78dt584ptbyYS2WPLviiDbRB7e35RJj6LnuuGUP3",
  "key6": "5VrWESeesWHwTtb57etQ5oxewypTaw9Wk6BLKjmEtBFETWyQtFXoBN4bok24wCXJqzNgAEteN9nwnDaVV7tGQcNj",
  "key7": "4DM6r4RkCFt5RYx4c8kH1goy91pdbm4rCwwWEdyiYyz9aQpxkPnocMcJ8WyTyNrn9XR8iVqyqFaXoRMqA9jUFcVJ",
  "key8": "2yok1JfgFr5gtw86c2n49WYd9yAbVmdXKUnCqqo9RzoVM2tDW7NEWyw3oHn4XYd8zr2isRZkKNQfCLcx5o4dnLYj",
  "key9": "UEQaGzqUahniuPNV2sfMotHWkqJ6EHsfqoBJgpKgQSkx12NkWwGc8KwrRmpSqmQZYSQACrVokDWeKNDQXrUKS5Z",
  "key10": "3CbdRA5E1fkWXgjvyAcBpdoBXefVar7qAcrYVBPJHki4ERTaMTFrCP6PLwTtecUfrgd12uQgXjz5XUWGiGaDn4ZK",
  "key11": "3EtoNfn8xs6BUjqoH9oBAqPAVU89GoxmsJnwUUTGNchY1zhDGg11EfCtTTr2xMCmg93EsmK8moR53JKyTKP147H1",
  "key12": "4WzWVTujwvzR6R6wvbSYLhXt96Yu2JTtrBtJdVtHJrmTDkV3kL3PvS7XrjzzcuXU7p7VWaoz25EfV5bxydxV1FwP",
  "key13": "3FynmhSpbSvva6NWiibVa6RiqDpxsVb7ZkJXQUFqwDMvLSmSTrZWwwqd3TAeYMVeD9jzyhieN9bRRszKhhUQNHCC",
  "key14": "2ZRuj3NPqKaKTzuaYsFoE8WS37dw4Zws8GLG8c5ExRFzptrb5cuXX4xeAZZHe25qMis6ZDT254qNYPCZXiC7f6oy",
  "key15": "2KfbKsxfjwX69giB3MV8jqEHf914aPh7d2c8i7wPw5xLppe4RUmWmjnCh818AcCRPXy6uCUsEBJZrU6HiFSBLY9N",
  "key16": "22JptSADoTYgzK5LTAeaQErNL1vRozrmw4DSuzSRTLDrioxLsBtMrMDJB4MvdAMGhmzKgF7J5EisgGaGcZfVQiXB",
  "key17": "5YLZgUXiSfATMMo9bRBddPR4qzHJVNgevifgaTHwwusZzpaCZ5UKG1SF2ovFXr7aXd2QRDRXgmA5ys5HtzDiMhWj",
  "key18": "4Jrhm5nv9aFBP7v8kwL1Rf4z3XtsGhkeSQrVZj2MzzccSTnmagzCb6XE9cLNFeZhvtLBNb8gGVEdAzTmKuT3Jvk5",
  "key19": "51xGsVYZt2D3Q6g1JN7Bc7FbGe7g12rrzXuMKGtoPsVoCtuqZN1cXGwfmwxtKvSHjdgKBcAJkRPbdpcRZMK6pcaN",
  "key20": "2JhbrLSHETqp7UrcrsvmiDm4D3Hhn7ngkoyMyqWa1mFXVGCk4wDTdA3PJMSTKP88TWVcP2N2CSbw1eapWrTPM8Mx",
  "key21": "2RoMLMoraNYHaHLRWdxffVtPGXdzYTC8ZFVkRv7eugDZoHZyowzUwyH1zkSGxj63xrpQtrBcgQeijMWiKcq7SSea",
  "key22": "EAut49XxxHz7Ygm1enueiHKgZRFgcFwrgD5xrWRkLcC8t1MunvKKvrXHQiFcoGPA56jEYxVfmrjNnjPqMqgJ1kH",
  "key23": "5cRXgpVKHLyvjXN1sKG3rYQDbAKd6kXjppJ4Vy9pigFmUzRs2bsdmAPxcMmdnUtpNBk7fpUTjmDw3x2mD5NF918k",
  "key24": "5VdrLk3CiNfXM185hESy4sj2PhLHBs35k8iC712C3zZWdL9BT1cVqVtG7qD7cxZVvrvDHK6dFPvvHLxzSWxr9Dh1",
  "key25": "daZJRV1v1RPWHRZ7ZbswqoNeeH8Bragf3QcxxF2nHjeZWrK543Y9CmN37P14vaWJcAneGMaqH7EKZ93HreGNtNU",
  "key26": "4oGQvRMQE4Bwy3WAovehRL51hbVDR3bEta5oVwXksP5RcQD14KSDv7WNvbLXqkwwedrdbAd9M7bDtzUvQnhWjy7R"
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
