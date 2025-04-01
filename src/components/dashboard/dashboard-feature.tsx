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
    "9oWHKp3PmixBfwfPWerHaQftsq5xMvCMd1SQjrpenBTh4qKPgVHXUD3QhQYSFC7wtRgsnRt3fDyVNVeugeqh5c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxtU2iTAWbHKuqCWcqTMw8zJFTwVrfHqAgVAGpJTWdBtcbcrcWBZVvMsnuYU4zR6CAiLFh5DCbgm9DwMfXCNTmB",
  "key1": "3o4Dq3mKshtQ7JjfQyLNuQwybJS5oc1YpT1346tt4mAdsGanRxUrcXX78JkJTD7yeR7paWaQRgfCNAkjThHukda6",
  "key2": "2PdMTS1caneqiLxR8sJcwkJFB6f5s37AwLuGpC1ZHUFi2eGBBoXr6jvvJxCBSjz4ZDp828TGtPY4hZQVLAhgQak9",
  "key3": "5KTB8ENVZQXdnYgAfJT9rTEg12yZ3V8tSnmLRN7FtnwuvrrMnzXPRaUeC7XPq6TUfUt3Sh21bC3wPoYbPBDpDL5F",
  "key4": "28ny2KSyUp6uS2eTQMfkYiEg5N2jveXmRk8X34p1SB4Sb6Mm69PZXuzGxd8pSfasiPgBBj41ZG1XosuX6HVNdhNG",
  "key5": "4ZYkLdwPprkocSEG4qo4DfkroRbNrYuKyxnLhpfAf2SXYiznZfn55Rts2oYA5jTDgrcPwFXyX7sxbaK9aXffjYu",
  "key6": "25XmwP9wA6NLzGgy1ahURabkZRXtLunM26kBzRFhehwk8d2JNczF5rqwe61AJgS35WUVRUXLHbEHaFjbadZ4yPL2",
  "key7": "eYUwSsdShw1gfuHGQwenKT3wBbb6rBJuH7yAeJNEATWJxsU1Z5fVYon5M9ViYfrvkkKrV8z1Ao2o3fUM5zU5VTe",
  "key8": "ZnMztryiGTorkHnxt6bBntK7UfD6DDbnz7Uz13CRQHWbrt8VLcgFKhR84X7nRH9SEQbswzZKuwcpehN12DLRaQU",
  "key9": "2CPAhhA3UvNDZYSPkx3Ymec8teLhu7Lxy6yg1vff5BwDQwHoaLAZo4iNMQNNBWSuNhghzxjRbgvYTLBvqtZhcy3",
  "key10": "55eNnG2jx8MoEB1yHbmPhyianDdNXSYUY79PHFrJ7zw24igXGxtJs51LqMriCpr25gNZ18Jawg3RLQpXJhjnnQCA",
  "key11": "26g5bgN8QYHVGVvz1eFGUuprvUTTGRUmSYEs8A7oLwK5EYhVbUzaqJs8JX7G1yiVdTFGKHX6hXuWUxCk8q7bJeoR",
  "key12": "4N2t3QpuYrVDm5UkNarP5Hqyirp4Cgs21XcDDB8NZm7xZH34t1WR5QNbSipFwEvmjFQPGXX9gUKywvQvrQLSHCfe",
  "key13": "2Ev6bCq6anbpeKWQZV1dUFNK4b4REHzDnsZPgymPecMS6v94tWVvVVX9r2TWNhsCnSzCHEYQGWgKLi7SBwF6UVeX",
  "key14": "5uHH14aSDkRqRTiwADVuKzX5e3n1LxKUqZy9e1u14QJProAEQTUAiYH47zkm54h8GuoRCVwgEKJ5ixe9qnzb7B1x",
  "key15": "5qGDJCXtrRZGCQvAExaYZEf3d34BKACWvHV18Pc77HgXvCBVBTGgNubvCWTGNBjFRgzdmzXMHzMYARLzkq67mkjz",
  "key16": "4XzANv8g1VqQ5h5BTMwkGr9PQdwfCo1tGCmDiph4zyBXWZ5cSFhJwJuToiGbcjSEGQ11hRQXqShrV7vDrAbws1HG",
  "key17": "45XpjqnFRXtVXFsXyCcwpSHdfNGGxyoj1prny1SMW2DxRxAK8Jq5W5T2DFNdxvS6mjhWPF7ayb9o2E34U8m4ePcm",
  "key18": "5wzv7YtZZhpfx3r8zdFM8eEtx88jgxiFm9saJcR2vw8QVgKwnLQKetbDnE1QAYt4BhcWt1tT3rFFa7xMgLsrhvUL",
  "key19": "5Nf2JJ3GDx9J8xd7LE8AMQ2tRs2VXFmRtg6N9FyCcm4aKEteiijXmiC5mbdGA953whbakg4hxkkPKTc7aRGxyBHC",
  "key20": "WmGRJdbnfetzgJp9q3jjG5xj7wY51TZnMeFMNAwqxa1PEkXCSGTto9sW6TT6JkXuMbLfXSUdnVjC6zpRMmaYWwP",
  "key21": "4NryiNCMYbKd9JaAps449wak3J37xjswRpGVrdHzNXPLH1fqtSBfdDxQqt3Y27cw9UeCMn6w51jZ3tdXKaogJHbe",
  "key22": "2ahN2LeEAMzLdEvhvFcr9m3aGaaBBxHZAG5tD27EXZoP6atqeaiYrUjTQ6uSLJMJBuqFperxVxhX68zSrSTvLjM7",
  "key23": "qZ3QJxvY1CJxXoX955fdu3CQhxShbw3uKKWCpsoC79Fo3BVUUq1N5W7gSQc1SiUbM5k3Xd8pDoTAU2cKYkEJMU5",
  "key24": "5McApEMHz2d2w8Vv3nPBt1jaShth3oKAf6BPcngMKboyzipd4EbwVcmuhfc5fwizq5uGf5WRCHPFTRW9PAkDiU6t",
  "key25": "4jXCdVm7XmYikgwEHYio37rjm13fZpGXyJoGADH9vwJfRTuQzFz4MmPqX4KYB72nW7QBj6wYnXXTmoFCtTED7PKN",
  "key26": "3QssRdKRxCEqdf4LqnDrBsEwUKzt65F4MmucSRwDGbiKoo8fEFChuR77ZxFXQmbY9FffpbeWFpFu9wvPvtPR4qyc",
  "key27": "TpSQNrCqS4WzGFv5eZi3BezKFCYmbir3h3azZo7uSbuTXEkFsYkRYt6QjQLVsRJJAYXVbtXUZoqRQitKbSfLEzg",
  "key28": "3PB5RhNeo5JiaxFdGe4HY1ZRsWdHyqDgddHEGWBTTaqNU6Sp6fkuC7uXEx8pNkTQqu6G4M7PwtfzGooM5KXafyGD",
  "key29": "4K93g3Aya5JDfH2qMu6Q5AHw6bwo3SGQvvi5BXidkLHixdTchTbkqAzkp5nosqLWfTrLBkrJ4WbTed2bvaxcLAuX",
  "key30": "5zEdgyF1C9NopsWLCxd4QSKcgurcx9rpF7ZedA8qnFwUJcQ9tHkTKZcuXF4d4pEUwRhWPh17F7Gc1uDNSLk2KxnF",
  "key31": "4JT2pFgZYQr6rHQc3waYiFe49pVPFgaNE6JeYCw4Dy8YaofCif41tJUwtfr11sqQTGyUkxWxWZGesPoGeYK1JwnM",
  "key32": "5J76Lrej8VyV5AJ88qc8maMTUqiByfWuFa441aHMocvoUqgWbfvYopQegr33w7hXEJQEFeujWNoLRts5T4pmeRoV"
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
