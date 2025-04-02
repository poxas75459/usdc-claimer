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
    "458ELmoUg342SzG4ZLy5wNvq5ZVtt56uRpSRyfmrcuyaH8TAn4wP8yd4WFHAsudzCQnWTvEY6gupjWmMHeso75H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHdouL13YxPXh26v5EgPD1ig5n4jchsDiujVMdWxjVt3q3HzjmkMWDhd8soV1zYZDjjv5EimGaDE5WtzRmfQ5m4",
  "key1": "4LyBDrHQi4aB7Hgtj76JCRzchCDHP2Ac4bGXWqCGHCi7uHv7A2hvvJQ1nsHFqGQCphJpiRQVLew1NZDfRcBkWypQ",
  "key2": "4ev9zWyVwYNz6gSoj8wHKBFK2rjbAPioVQtohnRXbdD7UgNPSUQPfq5Su6sVgkVibSiknqQmG6BTPhXZLaETiRh2",
  "key3": "4fL7KgaBTPHdPuzHCgqSQSGCyJ5cXzqwZ1ynNT2XMCMixD8RhRDQhnFYZf9Fi6z6AcQejwbmB2TsaNNAKVndjeBD",
  "key4": "4D7Jk39wwJJSSATtGr2xaSqMpmyYbkSvw9ZXooCYDF88xqxFWQ7VTBBghhEpWWvPp9knb5AL6FPjdt9z5nn42H6y",
  "key5": "3wwL9WL3PTXCGuemDX8szsvXfpL31FMhoXxiqWVVWgncuhsRnhucpjTgTQjd5TuFRuc7NdQRDZ2Sskrv4TevBHFV",
  "key6": "2iKy2mN9ktfmwjqaBy7Ernhx4YiKymtTcQjPJ4oMRtg2UYAQ7LrG3mXhVCHaQ1CuNh4aDV9JCRBnHJ2zmLkzmVHZ",
  "key7": "29U36zXsh37oyXvBHeSYkPXeiEPtzSnAECQcxyVTLg5FNcQJuMFia3y4iV2feASkNEKkzsMi7unsDVYc92ubtZe9",
  "key8": "4qSH1aVv9cQg2fxHuPMSo8WzfG36GzSUZkE47te1ymWSH4sRKxy49gZNVwWjP2Uc4NVkJbxSg2229fAryJLQ4R2a",
  "key9": "4i1gJKsoASxe1rLnvHmhannJvkgjtti8nUn373DbQLUZALDtzHZYbPuERqcUsRxeBHr7F3AmL8ofZjKSbKZBzpV1",
  "key10": "53vLpECogAnJZeAaoR7sektq4WaANfbkVCB7B3wzNkfDMntdud8THHzr4mrZwFoG6udEZzB2Kfbf4dhCSGV3Ls4E",
  "key11": "448QNSYLte7ZPW3vtk2MWJe6SN48LGDJqFSzaa6qDYbd7ZBwNrb7NQnUds4Tp2Bf5TdDKaoevTCSz8G4gVNK8Lat",
  "key12": "2sxQditAPSJbmchqZkCueS2tZPvC6FBmbu9XJC1PMhGPbFQr3FpfwZW78RNiBJFzJt7bLNYDeW7FEMQMQA9ySrpV",
  "key13": "3e3dkn6mk6cJiXFYugJrpmXq4vBkARJJtVjiLQiGQTqtMa1vXyXMQo1cbPzqq5xLgVSqKPrQRXYiuQpdhUdbwq7G",
  "key14": "3iA1w3nVJezfsYoUs4ye7yhfYtG5sRnLnzWybn8L53DS2s3FSLwmigp9nZMZcfEy8jmKBZEvqMSTaz836RKS8s5F",
  "key15": "f4rrCsHJK1u6uLgGG1U1pQkq9cRwFcYF1Gv71cuee9S6JzuneCZ5iwjapgNLg9nj5uB9gPEd5yJrxwLYziELi7P",
  "key16": "5yzKnHCZwtS1PEfpDao5fzAfDxu9wjS1ooNEektxttwZyR65YuXZ9Mw6bMr8yAXLTMaHFUYdgRCdcwdGNAQ4kygf",
  "key17": "4X86XZCoMUhWTgDF282KTQbuNVU89sTzEsAav24MZoT54zXTryfwmPJobSAaYyddytJ7nPYNxBiFKAGa7228Mmhu",
  "key18": "3xKx5ntcQLGJWzKJ7CXaZhG4uNpuFyDweivdum8yjZFZkA3E781iV8i2Z6uPiUciioYzkM46NVAzhVvcvfwoWN1T",
  "key19": "67ffEA5cZdEezSvVP7i6Go9fT2nuoguFpKWBsajswzzyQima3wgXkStBzuQJiStLMKXNMznLQn4dghpXLt2V7EN8",
  "key20": "gcFqjeMfJGwDAnC7n5sCUafJNHUTgoUsMWmGyXXVVtDPbekAi8Gg7LxAZzkdLubtvvX4Y6DupcDhAFp9nzfHvjL",
  "key21": "3KNdr1oqVbtSj8eYciEKaWKNxtxQQzkeYvi9YR7v4EeVXdirXeTBSKtoD7k5XhfmndVz6gYTYn3nfWd7uHLoZWyM",
  "key22": "4Xmd8CURqscrf2kqHJ3PU5F2g9uBQtPzKydDY6Lgof8KMKkKFX1jogHsWNd1xnw8Lkyj7iWzFXNCcz2fYnN5poj9",
  "key23": "XG5Db3j3L6Bi7BMdXT8xvsvY9auSgF9WniFGBpEp7NMia22RECCsstDF7kGR5yjpd4Yt7y2AySzp54tGGHPcKht",
  "key24": "46E9HpswUGP7icV4gvHiDpJoGWWFEGBKw3hZyBBiwFVW6zACvsoZ8V7xKJtzcEvpJGF9DxvW6uu4yNzPGR5Rv3Nr",
  "key25": "3veSiHD4KRa9W3bBc4MiC1UKwkSU1W4rxqBnme72qL2BCmLzQmyFDXUQEMxQTyVUGb22gRJ6wcieX5ot91Sh9ayk",
  "key26": "4n3N4PNrjTB18jPHXnER6Mu91awMYU4upUvBbvd96r2WCWuN1p1di9EQSxbi4pPKdWHKqArZoKZ44vPPjaRQ33s8",
  "key27": "2X1h9GUwWKTG1ZzXXNpHiWgXAmXYKP71mvYjZpDh7Xy2iNLNvjJoSSRhvGSvCeVq8tq5S99HtSMtFKdMzojXCNo7",
  "key28": "4kGEXtVMSV6pnoYCyDkEJ5iz2AmCKSmAwTj3aVBwPBf8acqSYCmTrFs4ZsQMmqH38VnS5nVzkWzR1WQMgexKTGBP",
  "key29": "2LtSqbdNMSJ2Q5BXvYxJmot8eLRSvF2EVtkibyZKhWssykBFh18P3FvdDifuojHxYo713r8bVTgxtMpzDMRrTYuS",
  "key30": "4vjDQEXP9Er35BBQNeqZ6LJ4KtZmVUh3n7JTRM2qgQpjspscPMCm6w3DFSqLGGcdVsJrm4Nai1J7MiZogjNY3MAj",
  "key31": "5vjWLsLHXdXEefveMNorLkUxf88oSA1YJrzPXnkTj24UpSbs33g6bwdihh113fPZpT47n9KK7uDEqQarwaf1GuvA",
  "key32": "2bhZTo81L9pMbo13X19Jjq3mKV5eHz1AKXDgcYoXoMa4WHR9kgy9aDKdsLDze2bSNop2MhWKxodR25DnWccP2do6",
  "key33": "23HdU6ndjrfk3nm1wo7T8rEGWuDMQzduzt8knWtzzTxTYpi2gzWvRCKZjYRzBSw9jCp5PtNBb2ukDrk5epU5cQ1S",
  "key34": "3euRuRYv5s65UKsZovyN8TV5SUZiRyTgeEDRteJy8q6PTaL3q3h68FouT54NX7bSLoS3LGkB3NJPtX5KvpNbJov9",
  "key35": "31SGKBJZAREhWcGeL4eHNwEZSDyjug4YR8nEFjJf4HQ2aWHEAJ6uifCTSd7V8HWW6NVr4GwLmki6VK4exuASSTi4",
  "key36": "2kLh1x3EjqsyGXWGqVrVhTvtediWvQzQB9NbLUiPR4Gv328x5u2UcpBbDMySKz8bNzFThe4MAsvkvuZUQzB5fQnQ",
  "key37": "2yj4WG5b6mgbSbZjinqE1FpZ3dLJGvZi4AwzGQT5tfxxEzpGxjzvrQ1vw72s2jvN6ewPk51YnjCrv8Y6iWJhdrg5",
  "key38": "V7Mw2gsfzRePnGYDb8RXnM4XVkij3F2GdBT97jkj8HhUgUkK6qifj44qUDS9UQW5aG6JHXxKeKVYoztZS3XngDd",
  "key39": "5yuA2xzPJeXeAbjcaXWPz1xUVNYaWzyhWgLAhFWy6sXF6ahNDdEvQ84pJDEd3pruL1naghXv5CFVTWTuuWPmLRv7",
  "key40": "5KxJGXmAkj19hGfcmasePLs2eVVhajnkQPSzjgzdZpZDqDoH8Vfkp7zN1HP1jbHa2wGzkcKwQbTuFYFEV48MS12c",
  "key41": "5q2hJeinDTJLbkQPz8GUUzqsEKRjpfjdokTWCvhTwzMGUTvpEVZDLdCYPCQmhY6wJZDKDybPFZibcnacNkK7mjEa",
  "key42": "45kGGhnZfeZJzk2wQabwgVbnyLn9r9hWjXoFYFSXRZ56yGJLW3KjUaT2M1UzC9krxYCVn36wG7qZvXpL6BJyGsQt",
  "key43": "5NGwziAK6ZwdcaTB1Nm9SUqcmkTXXYqDhECxerUE1SUSV6fpUjzTae5sNa9goAwmMkvZ3otPMoP6U8mhgpbGd9Cu",
  "key44": "25KC34EMtrAeu6MVidHMJq2Zjy4QdVuPufTmuqeHiThAzKLN95s8KnKEfLYmdhTaVsmwQMMutagccxrESgNKQLM2",
  "key45": "4M29iQVcpk9ikLNc5qjfYPLurSettrngmChtqWx8ndJKaE3EYHEVxFoFcGUsUHvesNrnJmtKW3vr8Q3Uv1pF4D8k"
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
