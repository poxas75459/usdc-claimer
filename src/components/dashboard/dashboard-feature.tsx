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
    "44qMWA8obrKVAAEw73BeusRN5RZrDA8TJ3r6iovFw6VefCNSjCLBoKgcWkPW8m33W5uCmEuuyRK1e6xvYcJ6cMHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SM8pYUb1gnGcQtVxCoJnmNBs4jsw7VTNK7bD4JczhMGqwoavYFy8QeTpRnayTSpS8voherFxwimN1qckGbDrFkC",
  "key1": "5hSiGx4eHBzGBePt1Zrf4KEHwBjqVXHapiYx7pRFFKp6YVCvVRh3YsRcwfhotyUyYjWZnUESLatFmjWYiaPsyYjA",
  "key2": "2QAJNy4bxMs6FPM5qDuUAJdYVSidmatg6EBAzxALQyJz685YTSXQqnGZmveGmjynEsF7AZV4TdkTGUpWU7XVZMwW",
  "key3": "5gkyf5yz5zEdLet9zFbzHXAKVdzPLYXBWLD8FDjkGraQYKwMM7duk3r4TiBJtXBnTmRxZC651gKVucyf2C9F9chf",
  "key4": "mhQwoo95mXGe6uNYhAubbPkvqcjEPD3DBqqFBP6ZHt2fGwCwmaLf1mH2dGuHjLN1t7RHRf1Js3tdbk4e3PDR5mQ",
  "key5": "4hdb2TFRQRUKwTRfvMVNVNSmJBTSftuhruPtgLLabdWuJe7w4muY8hiAyuFkqzWjBukue6gzHFasMV32MMFeJDcV",
  "key6": "2NtoCTWkdgCTPT3x2aqiHLi3urnJHt4QdHQQ5CvtvfVWhF2iiAvqogEgpAQU2ibMoEP271P7gogpn57vf2jSX1c4",
  "key7": "5w7swiuN39aMneYLktoMdE5sz24modqHncCkE4JzhJsU2DiRTguyfJjKJJE136zm6s838ZnzQGebtZ3KX5Hs2a7e",
  "key8": "2SVhfqdyzxARTfjVYCkZm5FtCG37rsDtgtErYLrvYNZcFygbBH44Yk6Xux2qs7Ddei4boRzvjWR18PDCLWnwTSLw",
  "key9": "3wNxJughviD1S89G1paqCAzEapdc6hGwsBL3PEJC8SrgvGtpxCNG1WiS9xK4Kwji9ZmSBG2hz64oNf6zo9UuKWB1",
  "key10": "2ssJFn59dBtPwiTzUuCJKYiSMKXBxTxXVLiGmdKfE3mmAT8E2ktagKwb8jgX4gsULZW6hvBUJ515XEhoZbAypepk",
  "key11": "pnrhPKMgsv5H4z3CHwfi1vytrfXepXpC7VHfyfY5KxkYGoTj6tD6TpzgaSgZkoGf8qiKXbaeUFa5iv2Hvf9m9zS",
  "key12": "4Zb99QnUfp9Rz2yhFfbQkH738tZKN2MbjfrPTVC9fJ5fbNaXeU9quyZq1XZ3PWTKUFr6dQ3LcNATvtjeZcQ6ms4d",
  "key13": "fJ6esrboKKsWLii2dEgZEZTmnyRJQCCMUMQMY45jwuJ8VwChBeaD5WoVCgvA5euiS4L7dKYC4ruuMiUgKexDtPD",
  "key14": "3VK39a2GqgJ8JVFgyS6Site52L5sLy9roTxzXXHJjwZKcpRfR7GpDbTMUsFERrRXqG5gA8qzS5C6p8trH4PJV6X9",
  "key15": "52EJoDZQCp7ZTFcTQNmXMgyyajrnjDSKiCCzQRkh7KbG52y744paQQnGDMUrgwae3KtCAKXrF2WGvvukZaNb9q2r",
  "key16": "2xbUgiAqGCpbKJrF6Q7KHxEKJzzzKA45PbvindmvEJRgY3Wx3xa77W67mtH5nw6gwHjbXwFwcSEBy4SbcYvEX3y5",
  "key17": "uNtzMiVtuyuCQvKqds3eaJkkq8aJjUhoTwTx9WgJcXjjHB3Y5hmgFg1RBMGtHMvVjdvRLADvA34Wb7bCXDBLqLA",
  "key18": "jeSoEEyDTMQLmHohdX4sJA5qoFJcKd9Tr9pUDVDTM8HeDSgZenYK1277dXKHZ1A8rAXAUmEDtUuV9bgmSbbdegN",
  "key19": "64t9dB5qpYr3K42ydaGhm2FGqxwyYJUXD6fF8p3x5AHLeaXfwNCDAusuwNy8Yv97EptdevuVp3TmGcNAEog2ES7K",
  "key20": "3Vc8RGN8pfjTAHWvXeZZUUoBS6vyyQEm6Tm7Y5JcsTnecKqTvdJfgn52oorNpdtiZgekU4KPw99yJBZySpZiqcQC",
  "key21": "3C7i6hep5ELeDidnyitGpL5jjYuR3U8ZoQsrXx5Lu9UYwDwGerxka1aYWso5vkZKdwCfBQK2jXWASmRWqiY17UaA",
  "key22": "k2TBsRAHjmLtGfQC7QHhyabvGELcbemA2Vgozcp68Tg6gsumj1enVB6jhPoeHU6k14Va2WoFXiphNSzucyGCN1i",
  "key23": "61mWXvzCxSNwDwdgESPFoq8W6NxRKSbBt49QpZCzuxGL2fPTJxZaqUhU5csgsE2Kg25mVJmL4rQG5sWZcm5hws1v",
  "key24": "431njDnid73tud2pfTfzCEpYeLjqaKPVss6DdfMLL9YzTG2rzAWjdSca64i86a4437EZoymotFJundbkV8tNRsNu",
  "key25": "3oKvpN7Kv3Cq7oq5TwPTtSiWTrXss7senxXgrdC3RKZFnTSQ3UjcAYaob5XjHDjBQSS4WP7NqqG4ZLnUW3RhddyX",
  "key26": "4EahofnNJgRXqSvQ4NjPJmrRrqrukFJfiz9on63XhUEkd7ntDsPa16dge9ejUKZSEJFTYxr32pbGZAsKqB4Y4GPZ",
  "key27": "4qTPs2DzSdoCbV1Rx8tAtyPC1QRYgjxmKK3i6WVLDCh7N4GN3E72WNJv66geo2vR1wreseMqaehytNCgRTasU9oU",
  "key28": "3kGLfmnRjqu8bJKvU8nxuKKdA2orFd6Y1wAinnQBNDe34DAo1tN4DKrFbj8Y8t2sPkV2se3VfA5aFe8KT381sGRE",
  "key29": "2QtypR8zU62CzpncF5odP9HESYfEpuPKSfAWeR8BLZ5sPmDRqmVGcqrqxXEMYu85dURqTT7RxqfqKMzM6onhG978",
  "key30": "smi9yn23c3T7yHNXvMEYkhNRBZUWgbkWU5ZkzqnGm6BHtjDMgy7N3rHcgqhAmR4XUcEZmUM9PL7cAnwEmdrSaMP",
  "key31": "2Rhwwrc1XqpzQm7VS7rCseca3LLSdhtiEjTyooN8PdKsJckfTHQiKGBLxjZ4GS97ZRBPg2quD3quN66atKJZuD4p",
  "key32": "5AWjC8YV253dgP6y6TGmoeXYLBqge9FESUuTGrRuC9HxictvmL6MoFzV86Vr4EGiP5b9DxMzCogaWYJvN4BHLzXD",
  "key33": "2yrf3738zQBanqfArEhpr9a799ZaDSxKCSfTajoYd3pFTh25pZByTbPd7y8yS3HwQ4bHZ1yTECuKBuy4wwnJe26Z",
  "key34": "3AzwpWaT8AqjAEyZvWhgW8rsbMpcGBnsATVTp6wSCDmeDbTed3tN2kDgVgteU7rBu2vuZQmz2MktBoosxUqHCb9m",
  "key35": "5MJv6SyjcKMRCD2Vs1kebJpRt3EEZMv5myD4asmMQe38CTNnQi2pddZe3GmEnQHUQQBWe9tGZd99TQzzcTHUx5Kx",
  "key36": "s4FgxMa9qUPQsbECd2AESNPvH4tZevqAS9jYHr9yXd3Rpim2m39PW5LMZRFsVfm2m9t5bCAj4gWnWJP9XJbFdrY",
  "key37": "3YQzCc6eebM4dEi4GuqcixtNrHY9jYdUiwYWQjYNszLbe29S14UwN9hpWeWFdeS8wYd2ddHti4LSSV8cKV2zgMQZ",
  "key38": "oDNW3jqgYvXuSBEbrW4cxFpM5ZedJfg4QoNF8BaLC7Pu5RjaCNxT7UMYab4bLhHN3Xn3WX29eoEvh6ZZZaCogDW",
  "key39": "5C9qRtc5LrRpyEwLhmeCsT2ADZgm3CRDDwEmGD7jtaWtdeGKLiM8N2AdqxCeno8gXLVeS58h3d8GhjjPwH43NS6g",
  "key40": "hRGMry25Ezek6gTuKVLMYnWX5wMETn2nBPA69S4uGdiYw7HBA3yRukWx9r4bWjejsR2oeTPe1HnAUVuaC4pwga6",
  "key41": "5C9qhRrm24J9pBygi9Y6dDosuF6iNjumbFxAUJWhm8zoRihmH9rWPbk9XLvFVLafcfuZK5vpcGRaUo7HNMEF9Sf2",
  "key42": "23beCdzsmnWMtYaFa3Pf5ZskwzR7YEycEKLHxnTnK1XUUH8Sea8w8yCz5iPuSTqzQTDHPZmgwdpXcVoL9MCmpiLg",
  "key43": "5zWzfWTxRAhDoetNjRMhwenfMqtWTkGBeWnmsELZtpMCgYeDGEZrVaUr1oyaez6cMw6eetoCqWzxGW1eXKdqGFHK",
  "key44": "RCkEFdgt86naSCrZ6TcbJVii8qPecqjxHDkgUz5HWUgdzvp3Cno7prh9sjjUUy2rR4vMKGPtsj8YHPhtNSFGqiG",
  "key45": "5puGQJmBPkUcCaQoDHLYBpZBNooKbDJErrEKnDa2xNBZ95M69ksp6M73HznrVN5eDCzEpU6wQeFHVEEtb9K5oM5o",
  "key46": "5JSaqTFEJCigNmXVdWeN9MSYVxYN9f4etoG48tdiBv86jKd3WniPejL1p395HikJ2zRMQvyPiHPrVzYEpTnxDND4"
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
