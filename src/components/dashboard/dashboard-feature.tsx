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
    "3B7rZ9LDWcz2UHqYLqhynkivsgYn7dgae5ZXG615twhmdVapTiQgVi5PdRXXatgTVFKzHvSNdV5Zusc61zGDpAqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCTzsSpEfqbbmCSfzvpN1eKgKkdkcaGGszbpxhQu8jGujdovppEM8eYTwJeLTZspcGXEHYLZYsssiZt8ykxjLkn",
  "key1": "1GyEPZjcrTvobQLmm57qvppqVmwQJAgAVii5fnZ1hHi898FUHWENHWDPybCf2b9eug5rL84iwvX7VzpQKYTCNu5",
  "key2": "3RbB32YBRxyGfYCfLdcKzHvnxh82iFU3YUSc3caZk6S9eNuht4j7ocoeckcovJPJjcBnHw1V7ahutyogwjbWHUw",
  "key3": "z7o68ggYd4jdU4YGerXzAGQPbGCHaxtVJT3C9ZS4f6kN9Y2fCYZGrVb7hPrmyMszS3SWF76VuaA39fRgA1me1KP",
  "key4": "5DfqS1GKKX78tGdcwbFNvwfiyY4Nro9pLryjT11EogKVSSfkNP68ut1JAfWr7jXxhDjadzXBpEwyjjz21nrCymAV",
  "key5": "3CPChcdbcZJwp5nfLt22FChFAaf96BWcvQhLdyxViLsRgQ3Px5L2Tw1gDTum653oBmo8992GwJUzeM31cJc12V5B",
  "key6": "3ub3ZSFgVsRs7DVwmEHPgcMZsP1cEdoU7vJ7DKRKqgDGzWQ4dnLXTvnwGAKxZJv8cHkeZRyT2bMrFprYTXpAJL1Z",
  "key7": "3WGnH6ZvoZpBBLpNTGrgVd55s4rEAMEWMF28AjgZQF5CfA8x5BxFg1sFGdVSPY2kTKHF7Ekk5o4Ru33xd5oHdvf5",
  "key8": "2nCEJpCPaynjvEQyX96FqKfd5JFTXQz3ZfY782UxQ8AXaE95xfKE53pVquyM3hEwbWmR6u94gexY7DJ2mrMALC2c",
  "key9": "U1SW88VFRzsrAbw3GqwpKrZgGWxjUFMyKW9xyJ5MMhp7BSnfaC3fv8HfdzJwh9tuJzoqNQgehFeX8VAba3qDbiL",
  "key10": "5BXk4C7L5F7WrNoV85d87ApSByvoc6JdD4f8X3XRPb4vmB26sYhHroRpuBgnPBVTaqLyNQhf3bXQcEx36DPhcLs6",
  "key11": "5NAPVcnZTrE4bn5BPj27kjaNRbcFZtBVGNiv9dGuDPWzQd3byxUbMhcbmYWLUahEjwjpUuCNax8A4zAYCFnhkEp3",
  "key12": "5JwkvTvRfuWbogso2XgEyBUuaJXXohGUsZAtAnxf9o2MA7yFVWMhfuSquWi23wTCoY5qQhNcqW6QmC5JyChfLTD9",
  "key13": "2kPeKPkNeRrhD8Zt2Biw9ZyU1XBtPHiVVu9QCfSNCg2BWTNQv8CX8Wi7x6CEK2dr14wbmikgvfqZoXpMEfxQAnK6",
  "key14": "rrNzyQSZ4KvaofpjwUo91eFsAo656V5MokPyUukg8qHkV7iFF6nXeQsCazt2zPJjjM43AN4Ri7F7k3BvV72mvAq",
  "key15": "rLyz1vGbdxS2vqnKWYANSg8Dum9pjxHTprqqzwgxs7PWstxyLVDhMmS4rSrzbLaJjssvPftPgeFB7mRv9mzbR6J",
  "key16": "516fzR1vr5AD5MW81Lvcoj1ceTdBnFq7HDRDdLAzySbhBak8Jwv2Rvr8A77EhgeKRLFkZ5mRDtCCpbziHoozmg6n",
  "key17": "66CPgDTrtXdxeNSBT2QuxBqDN28mZnZ1FBeh3MEv93U5WyLAsVggsrrfHJLcM5wag7v3gygBZXgtYHHXT1daVV23",
  "key18": "mKAVxQytkS4s3cTjfU2VQNLH1n2YzbYnHMR2jEiKJ4xYHFebEEpz4885QNengqbxUvaStAvVXfig7ZdVnwv85DQ",
  "key19": "3WaPoaCi64Ysdns7sVp15TskayiG2P33qVptZi9rvdYaq4gTHJqWtQjM2EmUuAkRmKFd8TEmbgFaSHK56awa2wRU",
  "key20": "5XJyigVvPC8oXLHULKN2ehJzimcy7qWqEGCwv923T6PnbGsyfC5jR2AXFxmssHKaN4Utvr3xAkSQF9EgdKnMBanh",
  "key21": "4hpchRNvAfabUuicZzAPEXeYbja4nTekBNoRnAWMcCM2WdUGSWFmckmSiKV4DXJT7TBxzM3RHyq11Aab4Lay894i",
  "key22": "4opPR8T1Yn58q9Di6JpcozWvA9C9Tb4hDhwmSofynFBQBP5FuWxY7R1ttsby5TfsjtivUHQiLxbgiJeu3c9E27L2",
  "key23": "5pBZj4QyxMuDUFDu6oFoNprYKqFudSVqCa6ejM7sW6vAK9kKEm6cUwaURVVTHkUhJcFap43S5QhUEMS436U7wyGH",
  "key24": "D7sJF9dy9hSAAnYnZkaFMVTVtBe6Zbjw3jJ6SEJU5GQ6pUiUdavLtfNDTMe5JtGjxhHjKrVz39T1j3tNHZbzChV",
  "key25": "3yGvo9fxmH6GwW6AeApGiL7ZB3cUEsgfgZcn3DYBw2AduEfmvaS394XXRiJi1Pn3VKozr3fffYwokTiXcJBKAzgW"
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
