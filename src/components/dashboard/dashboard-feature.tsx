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
    "J8bTdqewj1pbTBtEFLoghewfZX44rndU8HAHWeRv9AgAzMiP7jjVcE6gKuWFdmRxqh1kCTGYXGdmsjFwkXiWJ18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d5hg21G2m4BhqV82oLyYU4RkxtVKgAn3YuuTcrQJFiDiRJgX9VdCpVEKbawAue1BEGrLvDDa1u2vf3iRJb25Dz1",
  "key1": "3L2GhT4Q33FGSW3fFp1nWP8GHW3mCsKikX7if8nPCZfrnN7pJ3QvxWgDyJgaDKeSJKEJew3eouX8WfEC8qC9Aq3Y",
  "key2": "65koffPmYfUdSR4uQVGKWgcAufzaeApGCHkxCk5qeXvFQVhyXhqc1Cvn69xZfGZD16y52CFrhVsG3oakjugQnvug",
  "key3": "4tbHpxwfmGDrbvhQeH5C9jMkWjZyfEVHXpvEz7NUJqX5v9ApYeeAbMmbKXNyy87vtSPf9d5vZ1texXVToHDyLiyg",
  "key4": "4wYRTwVqgeVzdZXHZUH7Dg83y8KzmkHNzW7QCLmbWvWQuKsZ9AafzS9DnrA56ZqzESu3AskZELXtaGJ4mPAVczid",
  "key5": "3GTMFTcz6PLCo229EDpeWSWbHS5nDo8NtLbezchRwszzNd5cwbBHDSLkDAq1feLhXc9YZ3UWVtZK2uheADPTBkwa",
  "key6": "g6FB6aGWMkfbhZncWv6DfVsX1hUPQJvqDXugN8ZPAdwcFSn78vQAZbkgwhDV65e2ykojASCpph6Rp3qusqFgZrc",
  "key7": "3EVnGQJMdFDySFSuKPEmgGcTK65cmXHk6UTkgRq7BTAMwYuu54sRRBr5irodLUKtzj2bcKA2n2fhG9Sb74UP8jP9",
  "key8": "3LyhPLEwT8KJDQP2GPcawochjuJCZtFVyG9aAPW7PbV8B3iwMFKbYfN5Z2nimqusRCPGXbgg6o4SHbbNeKRdBpLe",
  "key9": "5N1WyMTSmghPhUxH1nPCzbmhbbBVtAUpRdMH8tJKHeqGnT9QZB1PJJfaANFn5XvFK9ok3f3dXXDZUbQt1tK91Y9q",
  "key10": "5oWSASwE9p9T2h9fuuCYQLVihgB7JM95Q2WQF2iEi18oYsb4U6KKKXJ9nJY25uCNeWQCvCbRhUvAY9C6E6vWyiyr",
  "key11": "4We1d7p6Km556KenNpNfbE2pAhrwSBo1rcruE8mDwXFqJ2rYeewTnWZruHw89bVdqbZ5oGvj7jQt2ezZqRrwLUGJ",
  "key12": "4EEaMYSoPd8AJpN3zAG6yviaQTMVvernoP6yTPZpBvMz7KYkxmM2SrCkMEEt6vMzzMbCXQEcwAkJ6PLUN5PzZX3S",
  "key13": "2jrdfEW83QJWP27sY1eSxEyr2HD15aRBTKHFAddLYiPsBgHvNkNtDunme4ZfixpSUocV2gHMydxBNonFb6WnxGJv",
  "key14": "XMeogGQSxTLz1MRBWbSWyjWeQ2A6TYxf6HHmSbJ81qnYUTv7k9LG7aDofvH9LZPXP2ELAYgJgXLVNeA8cprUB7K",
  "key15": "5Nnn4FSwhgbLgPss62S1tBqRqtyTFWU72V8ocGYZpsUw9UT73onX3CZoBCw33joosdgkvYNs1YChyrBTCFRmPiHy",
  "key16": "527YdMAJH8yk2kPR3aj77ht6BPYPJAGUrY8vTo3zwxaATAMkuTd9ip7GUg7UC9SggQabNc3g4Log2tNR6BU7cjkX",
  "key17": "2wY1g4v3rEDcNzpM2sncmcn6RxfKRqcJzqD3kXnRwSwRWTav86BH13AT1o36XAio6qaBDKU8odQpVenDpKraY6PW",
  "key18": "5r2VmJVrwadSdFvYBt3PSR3FF5m9rKqoBgmtQW9awGcwhqVG79AHjYL8pPoRunnq2bDmVusFZLycLngCFT9UopLj",
  "key19": "grJbzS9mkRsGCiMQE3b4kVmj8gLe8eLVaYaQmFgdDPaREHoQDUPsenBY7n1ue26GrjPYcTb5dqiMVUkRcTFEmCy",
  "key20": "2SzJ2eNDHvKdYm5b39kkFbcTYK2QE1J7CMrpFGKYe83NGmsBzK3RpyQNBVwQfMFG4ahX4pEkcYEAxcA4mD2kWAj5",
  "key21": "526UMV5L9V9kgTLB71fc1CfTdc9upmBmKeVK6acwicHSFsNmyRgm3BrADrfmZfa5H5rqHAGDJQVBjR27UthKzydY",
  "key22": "2dL64mkr1cfxDgSckd8uZhE9YJ4325HGUEEaywmFP4FBB3fGfuD84FwdpNLwt8VFAFYk81Q6piEXv9QqmoBga2zE",
  "key23": "65Eayxh1tp2u1uRPcBcjcVDgn71vhrGeYfu6WBwHzuZh7Cocz1tj97vMqvc2ZicLQk5njRaBHZWLWc79QPVU58Np",
  "key24": "3A33KzpHjdXTbjAZNiw1aUBjhMd8fqy75iyxPgbnrCTjBsQecJAk3GAbzKPMUqLFdPCq7Y7Bv9fTTBAux2DJyEAS",
  "key25": "5EtrmWNUuVbnRLqhriMvsekykxicWTFubjtrz8VA7mGfUhrckzf5Hk2yBsdMMQx86t2Ghq7ZRVgp6EPvLxsFP5bM",
  "key26": "2ptWiq7QRUQg1afRTb5JLTCGdHV3kGBpQjkH1CE13UfNRk9W4nkqyeGo6c5zoS5vzZuDwVpYg9EnqRHALfh3MPWP",
  "key27": "ummQhMgyBo2pcZxaZVUoZvFo41Xr2GBrbwHTSA8nj7FeVqzfJ4pCZ9eJmpdw6z6GyyRQFCQpy61TJchgvC2SV8v",
  "key28": "3oySuKWou6KJ8odR4XFbTGUFaMvJ56V9iYQFRxeJQLzzeWd56EqdHU69tfmcv1C4GxMh1UZSHtBEnnHera9AV4kX",
  "key29": "2wpsw434DQ9YHTPTGDWTLJsi4YWNRdXgSvdCgPcwnLbGXVdW9pULJpF4BYd6wRuzNwhV93YtmpMQumigFPZJkZVK",
  "key30": "3k9rvCjMMXHNABgseYYbr4qk2GDxueuePpesEUACDBGfcFY9F75SRYadFtDSJEDzMsKsXUc4GfKV8pcuf19Z9aip",
  "key31": "23XQzbmefXaJDw77LKTK7DfxFxTePqnSjsgADhKmALdHxsPHAfjEHqZ1HzDKySA1dtBiEWMe7wLjjZoqhusn85Nv",
  "key32": "2EmUTReVVAoEXKnxaJFDGAZHTxzXK1v2Jz3UNkibv5o1ZNvDCJoiCPfvgFpG4HTsgJdJfstpEaBbALqHoWaUBPGW",
  "key33": "3mXXMQCo2mcWNwJXzHkFvqkGKzL29FBFQNYnn75L9obr8kwswNYK23jQi9iYcqtwE7CYhLy8NEXH4iD3dqsiKZ5g",
  "key34": "2riihKY34ZvpaW4YM7cTdeD51tSARWd5PdELhJLBmVrHnSPdjh7BxYLJpr6sncwnZ6Cbm9PzePajxU2jrYNqsQZi",
  "key35": "9PM4DwiMZ61rpe6pfJQZthPWrs1ArfFqp12hEAeGfGDBqraDnaYWvSMWS53fbU77kPCSt588LaJzbxLchmh3gaq",
  "key36": "4Mn8TJzvGzsRnVVagecyApw5PhmZQXP1yeaaY9pBL7usuxQxpxPQZidmJM5JxHpDCMLxXkpivj1QQHfZAiSMth3e"
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
