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
    "4dahNNFd3vupZ9bQy3va4SdPMc7otsKPPY4FahRPc71e9wHcWLWeFaJmZeKuuXG7JqF7uZBaR8hjuSUx8gf9s2Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2Hd8PqsHmEs18rtQ2hLcuJJB4c1tNtERAaTaebHPfR3cxCFddZ3xE7yQUUYjoVrAXELYTdGrSfYV7VX59fhF2t",
  "key1": "5Rq31z23RAg2WueNzrRuLVYZ6cUzgPGwJb4AdYeB3pe7f3EDCewm4AzEySpZ8gKvnJMGtNnoE2LeYNBKQP9Rzijn",
  "key2": "2Pnw9UVd2RpSBsn6iu4CvXqoVumvP3yTrvtYvQHMTNFsVNJK8CZYEbJfE3eLPU6ZGj2Tt78ZvwPBpNKR6KmpkHsn",
  "key3": "5httyjScVNyLeqTADjzSHwhUKsJaQe8hZ1d8L2rLScoL8LurBpVnkpniMqmCazUbRV2YhBfD7d8v1fFiL7chSzMA",
  "key4": "2hzWFr9t3arjhTMPotKxSCud866eg39jcymT3dTWbAzHfjZfUQok36tfbpD6zoEJLB8uYhrecid3Sq8PXSgfQzJc",
  "key5": "7tKF58pkBmnmBXG7N7nSg1XhuFFi4NZf6pgWsHpLfav9eUPLXySvsMNNHQdkfEatREsez9Dd6doUpYr5yrNFcX1",
  "key6": "66KBkYSHpgQCXjNuP28g4jmJktuY453xThjDqMThu83TzEE5wzgW22bLWFptRFp4FeRa9CCopCg4EvKnVbemiD3b",
  "key7": "wU5xxANfQkg9LHAXoD8BfUrJ4DHSQmFFrJe49oUb1ashuupdJKsAWuaft1xf6t2pLawcLxtPgP53pxHUYhgNBSB",
  "key8": "2gygjKLP8JZJcPWvQkQfqoWgHCUD3EdNDCyzDYEf5NSdkKHk6ctpVnSN7W1DQYQZK9uHAt1gCjeNFdds1pez2uwQ",
  "key9": "kvWQGtmW7HLVBQzkDe2B7NizJpmfmrR6Ja44N8EyxgM4T6m2XUqAGTQ8DeKHfx7h7p8dpoxmhNQEw5g6aYswSZ8",
  "key10": "UAnVmppbyGyqdYXNaeLUyF5okyi1HVC31mFpog5T1DdeNNke8zq7JhM1VAiM1HNpnNaf7fHkDgzikkQhHZs7txa",
  "key11": "3MzxXssmzhQ9yFQgV7hem2jvU3gFbnB8Xeox7eRY4XKntL6BuGgtdVrbtDXb8bLv2sYEVGSe6Xv4LZtj55UbeaUW",
  "key12": "38dihvKFzFPn5HnWukLsBCibeoBU8PeUuoz2G4qwVpuX4iE6kpXEHdDpN9bMGa2H2er95uNDngy9Y4xjMuGtsQph",
  "key13": "3cErpP5WfB5A1FFnvKmG8xNF1iUiDTfLDuEm6SwyxciVYzDVMaSFRXvFLBVqC55yCxvn5GXfRxZ5S1tQCv55b7MV",
  "key14": "5oxsdsGJr2YFJCZBXqzVATA7E7gU6Xgg45Hy4d7d4BrCAEZumg9T2FwNwqGumFtenp8YQnWD6ogUQZbUAfVsbHDp",
  "key15": "2yUtu3AV52CxvTuu6ifj8fFYmPzinLaBxv1v3u7DL9hYQWd7o8Zzku1KXyNMkBThNPKupdkyXihNfZweUjuFeH8d",
  "key16": "3nLDSMAhJtm74uXpFvLU33PwK6p99SDrj1L2riXy2RbM9FRTKNx4cCusYp33hM9n9ipCTfzES9SPCkF5HSQrxc5X",
  "key17": "3syjMF6xQdtsvt3EGmCEsymYG2BKZktZygzzBDvT8DynJoD8a9iGnoXcdTRtSMhtmcKuAiPQRHwENus14vMqeXJC",
  "key18": "39xgLkf89YQLAHCpYDJrxPu1vMKLReK5WY4c2BVvBAKQhKabpm7ct8qPU6559paoPh7PhArnGbD9MEt8R5DUeieA",
  "key19": "52NpARPMdDCiN2AZZjNbrLDCJ6vQhcx5CAWYcY8Td68BYFttvudYiSZzMg8oUHTWEL47htMfgbpExXPv1HMi4jWX",
  "key20": "5De6o1MxMUCPofDXgcwMkmRcSz2ZBqbr3qfkrPjd2pZJy4feuE9toZqHdimddt5CG1ZenSqSUmetTfU13yS8fYWe",
  "key21": "4TezFSeX6VazG1s3a1kC2f5vpQU81apZE2rtSBKhDyr3o1d38ccbwTbJZGjPtvdkBH6P9geVLsBciSDuggRBkCb",
  "key22": "67F6LpMhuqvw3goBF6iJYE5f6jFo7Mxu2ieQigqWyAv5VWPkVxUSD4WuSgkGA9JNZNzcPF179WyRhTUbtF7UHd41",
  "key23": "9GLrM6mBqGMCswcRYAAP8L7HmJsNbMoxdpkqS4HW9aCrgtNhSAqvedXTxU66nZh5Xxuyvt2TRqMSiXo3TfZ22ya",
  "key24": "2PKmFs3c5swsVYztQXbKBbahumGpzMb2wwdg8TfvoKgUmxjq3649oyE3fqockrU2TLpXSaCk2GBZhe64vm3Xraa",
  "key25": "JG9DHNcNEHMookEK5T4y4snWyVrZRDheHwnyrqqspyUbkkG9ri13GjRAJywScgbRcvxDvQFtWFxuNVQPkC66Yk5",
  "key26": "3GpLJhjFUP1HAG38ChAXDaM8kME47Xar1v8qcMN8W83DvvXnq8tVgws3sk153ZDumoBxyRUGyoT4AFTSWbJM3Ekq",
  "key27": "rHLkFpbHUY6Y4Zsh8krdG7ypAqDbMc9N752rzoz2uk4Apj1bwezKiLp3vNo7CUorVVTN5n4mmSxbMjzohn4WPRa",
  "key28": "5TXEKxveEpK1a8uEjTGKUuwj64gJzrmRSvooKAJGavMZjsTZ6egvNsazKes1ceXmGfDfiFDuEBKZCNYPTqXm9Kme"
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
