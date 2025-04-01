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
    "2PM7LmmLfaA4xEc5sGkiMy9KDSyLgKPNoNfVjxpRxManuF6m7z22UYfsEWj58nncxXu4xQjoeWWHknzxv1zusRVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JUsSEUz5Bqpshhs2FDMEBREfuePHiPCaTrBvxEP9FZVfAXnRV73PZ7EL73bRZrZqAhMbxpRVfu5JThDbqqYeJ79",
  "key1": "48KA6rPqXCHSZNq11tHUqm5u56qMcNMZnmMxeno2yTrfmTQdm2aBXhdEW7KXkgB4tp8GjSKfyQiDLXWWLRiCd7Jb",
  "key2": "mxkpGRFtkvpWXPb5WCjSM82v64Nyy5ftQ3md4Uycz4JyoMkPs51HRCMXuU5J3Vfq3Cgs1NdAEPT5ytoo1ou9AaA",
  "key3": "jtZGAYiz2WFBAHURcWchhbNBcCnH9RuWM3k2o6dt2BjktvVJbtb3RW3PXEzkpmgHfeuwNbh9ixy3dAdVuKSGTvx",
  "key4": "3QNJAs8pHCQ2GWQiwsCfdd9dV8q9bVbcFauVXSSFx43B2WnHe39pHti1Z9krGvR576wmyeDCP7R2dMtqCoEXL6mx",
  "key5": "2fUKFiznavwitPkzWZhbK6r4ywaNyNGZ1WmtmWNttvCrZT8pksJ6r9kAZP9RWesQmi6vrqbVc9R64yv7R43fxUsw",
  "key6": "5Z2T4JnRnUqPXBhLy48XobfZmJJeQYVG3ZAdgqkkqwaqzHNJAuvHHAUp9e2n58z2uZcDNNuNqKf3DJVBv55b5TWn",
  "key7": "4e2zjW3pwQcMq8ZXnxu2b9TktNv1Ke9Z6kCL3ugD6uEJDUyEjnwVYrSoJUJAxE7QhpdoLoDvUe3NPfdBtWwZN1VH",
  "key8": "39unVNCLYjD5Uot6vHr5UjhPTjuKG18DE2v6Kx7y6rhPXPoEV3sFJA5QnnJzwUMqRt6ti5R2kqpqKmueTBJ4BtJB",
  "key9": "1mC5KeCpead7E4pQMCvafQYomdeoUujXaUZ1v5UGbDpkWCDT8czfkhiyvKwjvGfwQDgh5sJCDeUALjjqatqq7J5",
  "key10": "39ydij9fZv9PwXV56cFCuSWDgEkPHiNxk8rPjLTm8ru58vLcE2eSBxGMvshCRNjX8CYMaypJdC2u6zVpHxM1wFKy",
  "key11": "4744uLvitQdb9GC2THen362RWjdZSScuTevVSdF3sqFf8NTVrXUczpuT4Pj1wrUcehsadPBsTR2bD8SbHtuzJLFo",
  "key12": "5Sv6pWEikv5YRRzCQysfVCAHncfms4D2BQUKNVjpByWx1QkHPe5rnYHGrLGsJqLBkuf5aDZ3Jus4bF1dVMESgxuQ",
  "key13": "gLgiQrgvopcJDqJE1CCqZZDr7KAbYES9CarxmN6Hbd2fzEHQfvuKgPTebUPZWfJU2qwd5Bxy2iLHyAf7J476Qz3",
  "key14": "25uUUVx9wEHm1RaA92oVJkbdY6vStZz7qBTYvWedSs1mw5pcaE1uQExsu3jzGRDPXErDCde2ExzYEV521R4cLKS1",
  "key15": "XXBk353iH1fdvjsmVJghoTXGxtXVjxpZKEQFvJbypxcbUiUdL4ELhvLDNi1fYuccwvyB4Q77JiXpKTEuCs6G45M",
  "key16": "3GzodtVCHohKeZYXQw5UxfYqXMWb5jn6gmaNEB2Tm36ac26cq1Y4VJZokBgPHsNEWkymAAtKdATmXneQMHQSP5bU",
  "key17": "3Pcc4q2XThRNJrEgbsnY34SrbWn57wsJaRZxiy1JMZma28vk3GvLjyq2R49n292yaAVtM2DYG1WFFrrS5H3BGQGu",
  "key18": "upFCPVhimL1jbcPmpZjRmaQFYfLYa6oRJKGWs2izEnff78mu27AMDgHkqrvMdXyQxPHuV8cGcGsqrNjck9YReM7",
  "key19": "2V3vmDfQV7JhQwTQT7amQzEpbbutyQuAKDuRRnUrDtiGBe9oRr9tQWzAfeEAcYes53PjbwS6Xy9d2Q2mEFCoQvrT",
  "key20": "5QecNDA34SGwewGvfmzWFMpeXmtw8bfxYELA3ccxq6nsdV1jeKsjFHzjVwPQxAwMoDfhXUYhHfrtTmepbv5ZVZw3",
  "key21": "36d1eiZ7Y8pQ6YvxS7kai5ZBUCYAMF3pfxfCALUPbj5ArPaUuFpxeFhsFxYo7bFvYgA4Rzwe5BNguEe65AAwg3tN",
  "key22": "2BM2hCKv1cv1eXoo3eyvnD2SHteou4VVATELo9DXrSDtPMTZPyw26U1E67FRNC56QdUSscqhfQ6zMtzxUrTnm77U",
  "key23": "3C4dcgoTbYwspUZJVd5ZBtaebpQnBiHnj2Ee25PDf4aKyG4LjFecv2PAEbdTA8pqicFxLps19BGwcNzS4Z58QdBd",
  "key24": "2v3s5kzXW6wLhRwXGgfHxJvxk86eMfd4RWgpDvA2rdzJg5YHfgWrEQVbJCWeQ4oNzxhL3pji4pcUihSYLPhuqLAr",
  "key25": "ULnaCq7HXUfZtShoNezDL9HhGZXyDrG2GzAJriXEDLRCby73VsZjnhZw7BJoP3omKAL5WmWrs6Nft9JJJqeq1Wg",
  "key26": "3QePDa1XBnjEBkJAGC3sEeLio4TtmHBVERyqh4keYjgM3g6agEqFtFB41cPF2btCcFSMV4yNx3YhGZuxyWkZSk6J",
  "key27": "5roKMwWBThM4SEeV6cKmpwj6BmCcupbXgX4qbgPMikEo8cBrKXxX3cBKmzmU2aCdcJxXz2Kzv2wqbaGHJLsTB27k",
  "key28": "2rsa9oFNWaWdDATK3Xr5kS7xNqtgDffEeSKCwRzBtXvaYoBr5P6HwR3XAXm6sG4EjCGoP63FBxfwKfZz4ioN3SKT",
  "key29": "5c3shG4mCQbSMAsR2ccRofQ5M14RAJXzgzBjhgvyqJBe7jSg12GrGeW7haFRgFq7cSCKKE9E5vk23oWYunhF16Gi",
  "key30": "49AePskKUTa6H2gK2vQXqzpQNVWGM4byBNcnbtaHxh6sJmkjN2ANyW1ZA5bF8axzUFZpNxA6CaBUmHWzbERKJaey",
  "key31": "3kdpbq1hdcA5YBKLoTa25Go6fnZdnDbtXY9iucwZjYEjDhgSE38rrFHdx4hGXbZRMkzsqZFgN7ZsBbgcQAyQBPkR",
  "key32": "2T4gUTYt7iKVz81cfNiUFboXZdTyFmq1amK1ikxjNky4a9cR1j4CvcFWpX4tQx2E1hGv7JWZmu6QHa9qGiPa9Nwd",
  "key33": "47VbqniWubURkbHb32s2DgUNfMe1VEZ8p9yq73Xg5rRuMNgReWEjL87wbA4FbUXYbjDc5Kg9uojxntdWRhMa7euq",
  "key34": "4oQd2MhyK7bdjTpTP8wWsBU7ERQZn85FJCVooCYUq52HvuknxVjmA6goDq93SNxSmcs8jjP1FDWMbyWWGXJxGryE",
  "key35": "c5fuKk6239hzx3oZvLcU9dZxjfQnSHLz7WX7PKg82KvJr7ZkvrkX5yy8CaC45fCu7UJx5EqumSc3CQKjpXArGhc",
  "key36": "5S7JsTq6d2crTpTPn6GA2mR39FDcZC6YDCRQ8eBmQ4iPzj2R4iYBciTHQdVvQkzCCtRWDbKBoA4aeFCmvKiZCbHc",
  "key37": "4ukmNvY3SXG4DUQaGWKBF5g4JMRBf42EJb6qcLNGNG8QuLURSbhtNF6YdBPsSfjza1BcX1nEo9EXhFLvUhU3JZo3"
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
