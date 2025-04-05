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
    "3Sg5VdkYRSk1orYetpaj1u3r6PHX8bzFmP3V3W9QD3UYySSXs46AWcTYAg5rGUR47Ur1LrXe4ezXUe9mJmcuikqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XRNDYgbEpQNoqvsGk5Vy5VXeSoiQN5LVbSPg6Z5Lk9D8pQy8PNB6G9X5trWNP7pQPtomv5PZCGvosJH5Ny5PPDu",
  "key1": "5z1z9RNqxocvfbF2EFXrp6nG1PtjXxmFsAHzbEPVHyFt1eTUtGMtSsCqVQUuZ5MGqwwKoAuHR6Ng3BHJcEhwEaXD",
  "key2": "3ND1EjGj7niwUWqZiMtNW3ty2GmaXsP19YQE6zzZnA6irF8UJffDk195kVyiEz4cFNeCCRZutm5CLa3r8wSLwwvw",
  "key3": "49LKzgUKSmY9Wc143CX9QE9rJFWKMnhA2Bczt1yTpHVWnh9AB7KZkaRoQStGjExMG9Jw4zSRVroFdhtMRx4xrdzm",
  "key4": "56LsN6Udq63nc5DHcmYy1KnAijtHHTMK4GNJ7zzuT2pJ9ZVqEBpuCbxgtr8CAwp7sGXbVgqB17ixYcf6sVBTJ9LH",
  "key5": "4cdfUvXGmxaWfrHkWjHdcLhM1jVGxpKSE3GH3MXrp5UC96FfVegAsryayKajZHkyzxnfWsqGciaBgqgQPfXPoCRe",
  "key6": "5AvPq1gUpt7ifTxX9DnrsaEMn8oQJ9asLNuqLUx1SRYGkidtwyZVBD5yNv9ALvpPzChbSB74E6KnMg6mFvi4YNpY",
  "key7": "3EapKDtZBUh7r3HGdE3vd5W6tKEZ3DMCK5qAbY6nxiajzXYcKp8jyzxiDCttTWfcfvB9z3UFxtH581DaJQ9oix8U",
  "key8": "4AKKyeTdP8UJbf9Xez6TrCHAHAU5VbvWp24bs7KgNPwpHZmEP8QEgb6thGKZGkpWou5KRhzyHQh2KRvQp4pStXF7",
  "key9": "4C5cSYJP7w54RzX42ZnTQB2vHrFvQvAbie3RpcX8QNCjTskgmYfZ23zLcD9MB4RHafCPKKGDvA7dt2o78RCYZFJA",
  "key10": "4WHbHTiVRgcE1NyfCcGELM6bCpLaCgwLscEWsC32op5R5a63U2TpGjDc9Kr38x2orSKfhuNvFGGMwnY9x53cTEL",
  "key11": "3Cs76MkGkWoqf9FDdHNVHTtaCJkPswECucnzyoc924Z6PnZrgrPn7ij3K8NLbmuoJBM7DWmwLRf1JUJist7gcdHV",
  "key12": "3YZNbEqocJi9iYinc4aMrqmd6hYJYTUieUGN1oHuxQGQNFYwr7yUciGpeu97RWrJ8mDuypAfZsa3GVYnRJDxU988",
  "key13": "2eGUzCgH2ez3JNTX7RBMWgdd7DC3znUyNXXTpuQQYwc1Wg8MJWiJ4MPSKJ3WoteRK6thAd9tyFvbXczgVrgdbjxZ",
  "key14": "676B5N71PLxP9CNnvZPTAw8LJhiEqgP6J1ed5XDncHpTvofHzHCCayduDGjYkPhSSQfvw2y45ap2RVe4bugUY1i5",
  "key15": "3rC6H4sjTMriYUG4263Uhg5X5AxmoqcsquLVAb5QuNhZ17e2WTkbEyuVQjE7G9Xs6S4BnM6tX6EpBKZUAQKHMPuM",
  "key16": "BonqsCwd7QTV4bXPDcTEDgBwnG7Qs11EmDsTpT4ct3ESxXyJ5N27qnPrqTH4nndLjHgT1MaP21ZPzCXFrBA4xRw",
  "key17": "5G6oDBoZRJHrAgL8TjjKdceCwFv8qWpzLKSuFxd911argpWd8CknXPrcaDeSUEgTQbY5AMBRCBSCdkrweb7NvDk8",
  "key18": "4fpdbe5R7DKYDxDwRiKbeMoTjr5cMAk1e1N98XSyUfHgM2hzmm7s9CfBgGCHSMMGdeYumXP68r94u4CpUh8jSyMy",
  "key19": "4SzM3WtLQtL9ay5QcbrCWxgsAURpvVinaHpj3NHYDuLJKeY7M6fTyQpzaQnF5fkHJt8NfAMMvr5NmfoqWRXQ9s1P",
  "key20": "MX3tZDS1hEdkrnqKGL3nybjm8mJSCwUckc2bfa3iGqtvCbyMmTiFL8DKZZLQQM5pvmwQ6vLpMyo1dGanWvkK1fG",
  "key21": "3fUa8GpCWLtRCpq8Y9Eq4z24VHnRGsq7i2Uy8srAB7fGDBM5APkC3MJHZZL82EZovBfzJdwpAYZT2qcQgDFDSPKH",
  "key22": "3Z1ps2Tzb3g38ns6bTffGTnGC75ozdZaQmgK5vvQwoRV9ZYDJGbr1YvceASAH7CDGQYuQRi6mVLtLqQEypVHzgsz",
  "key23": "26RdhjTHb5RFsibsu1JbcYe5t5dbK84WmcXVq5ttr5dZY8Hoqbjc2gbD6X5Vt17ta2gw73CZP5hscB7qYzuykdiN",
  "key24": "4MfsxFeiAB3QUspLu3eekBwHk7cdHE4Lqsa8iSRfNtF5ky8GmxHpPDkd3HH2EcvagX6onsjUrHJHsVb9R4nZCtFK"
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
