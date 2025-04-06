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
    "4oPFtv5pWcT9DQ9JMpzyUF8upWf5L82WyaqRzcAvbx8ZRBdyBcuiXvg1roiDPARg6g7WQLivEKG3C9QVjD7hwRBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjiuA2zpQDSoDqz7fo3LiVX7ZtiRAJVA48RgGdbVdsG6nHNrURFYALtre2Whm9cGno3fxfk4ns33X1SHoAVcCXb",
  "key1": "5BLvoofguS6sJDeDCBcHabWzg6sLH1goQ5BkebmYDSNGoY2TtugzCmdbpvgnBAPGZVAnsraWpGi6VSiXgBqjf8SW",
  "key2": "2TdqrUNgSVNunZaoL9GTAUJd1QoRdNujpuLR77uf1n7w5bU3HksCGSmLJsvzyqJzofDLcKYtncn1TYLfwXUHzG6u",
  "key3": "3fcdcyqjSGdC4jryv3899KDThTfputL788taMgdnj5nb9nTKigGtVtAzUP8LDc5sf3bFpiuAiTk3qb21f6TeKRd6",
  "key4": "5HYPzyYXW4wwRrgPN34hrFXCzHvJacHBvY7n45m31ncc6y6z671TVNtm7yrT7N4pEdawj7gkc2nNe6tscM8C3HCK",
  "key5": "49bytfMSCDnDGyQ5jzVHKT8Ugt1qQAszckc6mzQZzEhJ272rpv3kf8PcKq9rd2fwU9ef9KxEd6sLgJHwCwY9VfzZ",
  "key6": "4LxVB5iS9UPrHTsYdTZuhrQNi9P7QjiX9StEUvoqZKuj4nXPpYsXggZa5muHK5ykCgbLPfQq46XQjoKhZ8R1tWWa",
  "key7": "UTEnc9ibjHecZNZN91CEG9xRRoxfdGN5FFXRp2TJ9JQraptYvsxRgYwkJpBd7unLmmUf6GgALwH8c2uabEzLvxa",
  "key8": "3csXr9JUcz3bRh9thYycc9B5FGi831x6SF9k9Y1eNgCpiLH5VWQy9S2sPnUB1F3xTkx2FRTYV5WyNPesHwA4RmaP",
  "key9": "4nL5JfDYv3rJdGepVCSPLCpZtQ5bYyQ23WupWNTF6P17cKJKnsBWPGm7jHUnJf1Vs19q2TQsJzA4doDsuhFAniuz",
  "key10": "5WFNm6o2c5rS3FtvuuBMcfuZ3HaS7rzN858wnZ1P2Chwz5xALGYh7hotY9vR1T7cz5yU2JhE6aoUDTH7qjWsu5z7",
  "key11": "5vv7furvoYzLLRY3kSKmvf9mBCskG5URPJvEEKuYfi56XE7D78bztdRtQtV7hhoq6ZTpJEdBvf5RcmKa8gdtF8jb",
  "key12": "3rCnygagFAjgv29D1TSqtTvvdNNMdMu5MzntTj1bvA5zFgvQjrH29Ppa7v2uDWBh4Lw7w7VZAUt7otX46ZvX9BN5",
  "key13": "3e3d4Fsp8MMgCFxefNaVMWq89qogceAApXXyivGtrgKhxE8VuRaLmSTZys7fEnQb2XgcsdoEJ1aQSqbA6taLUiz4",
  "key14": "4V32jZ6ssEC69sPBZKy7S4p1kZcGfSv3vG9S21LeQhS1EYmwMpCJ1f2k74LLqy4CXXnqnn2NdFKf7EdvwCnANXqJ",
  "key15": "h5nVPEJSeZ7eQDr8qFwYD3b3cn3JVPSTdjXy6iSdD62wPQL4qvFpW5aXJjymhqBCuAL3Yxe5LF2756MGoCQVuHu",
  "key16": "2MAPk4ZSPF4chtH42vMQJyn8spswep6f1mFDi1GcqbgzSGF4d7jVdbaPiCh4bNf13AhfZR189arj719dWtRLL5r6",
  "key17": "4mxRpyAiGJNtKTrBmZZNfwdrJ2fYhbPAdcgpoU2FTAB3DYre3roxWquvvKT9HKyRpDFbPcJ8QDE5X43HJAE8JHmD",
  "key18": "g7NbqgcXvqzY4ZeexwHZEairpvijwjsrmQWe7yj6PFLjHjAnrYoBhWJY3qM8BGuPqaN6bk7nBKgmf5Zjzvmf78s",
  "key19": "3WHwFCjBCP5BbZ3tybMwLLc4tKDdEWLeJLVViwWXDpZVcMDKr7Y6a2MmjmBzTL1jcU5namnTouPuS1Upc2FJBKoq",
  "key20": "5fG1mBqyfEFQATzKwD1S1cyRuQpGbd4kQzyxZgYQ9TRH3gR1Eerc3fiRAQ1oqZqVne2TTF1qzc1VCu3H3HRyaqpi",
  "key21": "4SqWK3QvZnJLXgqgJQ1c9bPH9Dz74AZien35psQmBLRmey8v8nQCUZEK4ApseyvW3xzweuF8FfP4phEwdtvUX3AB",
  "key22": "5yTW3bifbB4qUBcM1u8XA57YnGHjWnJUCsp5xhzzJ5PVNk5jLp3AyPfscnSgNbV5LpVo2f9R1U3fAB1EC7mwYaPE",
  "key23": "XUhmszLLnMGHu8e81KombvADkBxpnR3vUcPSiVE41d3ULRpifUcz9K3h4FKJRNvjBv33ZEB5JhZZUg9Qi2emYbc",
  "key24": "4voxbWBZZFzchfcg5JdX6rbitgaeewou2JzUHMyuwmw1PYAv1nCrwFgwMhYhkf4bb8apSNQPc54HntU1jTejKxTC",
  "key25": "NP8gNHfSfg76SSjJGUGFWGNPEumUELrGCnh2NBwfGcN6xGG536TvcC81EmG6Esjr4xtuYrAvENMxBnjDSxMLmFV",
  "key26": "5jaa6z4VmQGA5fbUNYE7EXbgcCKUoqZA1sDuar2JTxEjASArrWSVjEPr77EChp5thq2SWb7akmjWi9FjDRywVugi",
  "key27": "6tLYaDzfLtT7WtRwj8irNcP8MLSYEZXSYKMzBkQA18nsqCxHeEXXVntRW5RCvdVA3MmHdS5XuyAng4teFGNp1um",
  "key28": "2RF1y5HrM3RWtYjfkqWLSMUx76J3nwv4dsCLeQjJsA5dK1Dy3jeMNiH48E7HcPJ1PmKhn85iX3ydsXV1v37XXheY",
  "key29": "4dfo71SFVdyumkGrw8BD9nc6YWAXyMTbTKibntXWu6v8DWhCJRdhJKWe1ivv6iBvxhzPVbKeBag7oz1WRetQKtsm",
  "key30": "5UzPEpYNNGDchiVxuLVvvU6HZpbQTJzsaX66QmcqMQBmZNNFdB7jW2pastQ78innwyKigkWwxKnfYuyWw7cYAtTv",
  "key31": "3ZgZDBHSvEBdC4GvDtVgvy4BhiWRNHgVahiFY4ZRS4Av1atSdzBrdZC8ANUBum2dq7XbW4FnaHgYoJjXRYCjkXnb",
  "key32": "3rJRFTMKkJgMmNwjGHd2wLqgAHsmCaFFsr66iFPxQqvf6zgbRfFTKLoJpijDKPKj3Kngsn64RMzZ65wLViyewapp",
  "key33": "4xrHWFS2eEYMGZa9xFEqVzydaugHhomYnAZ4jMCro9ZS5AARTwuJRE7Lx8muzES2cTFWSdQPh2AwninPZp3YUB4g"
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
