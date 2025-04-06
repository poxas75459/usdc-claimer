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
    "3FhKikm3y8atkDiaZc25htzcGxyoJeYeNKw3YJ9mn6zAJrJnnM552nLJBWC4QQTFkFM75cxFNiwYjGGK14qsGk4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rhLxXT4J7GAfiXDHg1X2dwuUUZu6WgZzwQ1hkoyiP2mWvd9PA9GPij16ahEmX3vWo3YktazCQYjDqoXVDdVrCNR",
  "key1": "64S2yTQYJfMSXi5PTNU4zgTgospGRYvYJLSkJFgEWZrWMBndSdyhkubJYFmx3r3MCor1auXv4276t8k52J8NMtc3",
  "key2": "28WjzVBmVTnUAPviDtCdLAAJXLk5NybuFnqbHLkPRzHxXgKLJaKsdpTApQoLk95DUzmXVoAm8JZ2KHaYWVntdy9X",
  "key3": "5EWAuMKJAgSovjrcEip2m3MFbagJ31cHpRmUJduz5mNdCZgUJuDmUeLG97JxssmrpNeZ1X2eyvounvTkFFF9MRZF",
  "key4": "Y5hg1pV859YpH5irMzcb5aAAJYjuZxdUEDHqiwggEaqr8A4hRq2KcQoWwTHto8a84iqE6KJ4An5MTAYyvLgdMuC",
  "key5": "HrPEB2VdcdUkdfi9V6nb22sB8pNSMjMkDrJc4Attm3j8ySm6wQ1h12PerKR2p8PtGYuB6tFAqXrWH8HR3mjD19D",
  "key6": "5bGEhU33Bcqwj7jVBSgBA3hZzgMZYHYTQz57UpfFEDiu7vPrCsvkcUxyBFEDLDiVrBLoAzEAZhbbw2a515iC713f",
  "key7": "cMPYuULwLGmiX7ARZxLpsMpgDD2pYYHpF6Fr8vHnpKZZycYkrGGGqRuCyFio9Ewp56XzkHHwZmX6xjkkq5mRti8",
  "key8": "282wGviFkWFd39gn8tbPErKw7BMydkcNCxHd7wD5pE2ywhe8BpoDmDUGicMxT5QtFsbzRrPFTjaozD5DVaDi23vU",
  "key9": "4NbSYmyZw2SZCvPLq7JErrbqEjejGfDKmCf2Nut88gcKmcvnkJwLEhuS9VzxRDESWnLUAU2MechKnjAxsY8XaJ66",
  "key10": "3dayfq76aGHciQcnE6nsLFGbyDw3b8FXVerJ4MZnYeiWZu7BZwbrVoC2tE3vGHqhqhL1PzKqfnU5YXabcuw74sUT",
  "key11": "1EDXFaj1XTHm3xScDy3QfDn2B3Cpq8dk8eCNwYL1hekNZnrmBByZ8wUjotfoFLxhS484CWq4RSux2acs33JU9ee",
  "key12": "iMjZzbsoibkzp8XpTuBDL5wX7CL5H3xb2H9wvPeUvxoQLazW5fdYekVjDGYWnJ63aSfYokXfqqg9tQnk8bGnGnV",
  "key13": "5zEmwNpVEp7oaH7M1vtx9Dg5C5Snr9YHdFdmMoPACgU1KCBdG9yrf6FUbukC6mmpZ4u6KvMtnou8Tjjf4BZ3YJLg",
  "key14": "4LJwcNy98ZWQETFcz76HNVQsd9ES8yELER8j9jhsdFvXs1TPJCvkta4vnseZp82BFqkj7A8iSVsWywMF7mijTezP",
  "key15": "433AwQSwinGXh7TRvyDPozWfuBpuJADEG4pwmx4RW4nZMM4NuyyQSh8w7fAzmphGpuPFFsoE4cfTuwJ3KWfMkfba",
  "key16": "2935vcSJuaujxDBpDCv6bf6nDyoQcE5o3j7K3ZedUDkqwC2jV8977RuiTnquSh42j9psQxCHdB2LZwG6WYNZFuFx",
  "key17": "2o2SGYkSn1Uk9GvspdkXkZpmDkznWvWY5ZZEYbttGCPf9UQchFw5DUPseWGZnvfjvG7ywhHPFXLbhjD8EsMhxC4m",
  "key18": "4Yeb3ZgD8Sno2duGPCVFvhnrsSBfJaccvevoVtGnYGQjP1F9YJDaXMcbuYkFVjMb5xV8VFZv3WiERqQx3V5zCZDi",
  "key19": "wXWiZ9KxycW1C5Ur5734ktVh7MvvTwEY6tAYjtEzRboMuitpXVTr4XSWemHN47SsE2AcBKHXeWtbuTy1SjmaKRu",
  "key20": "VHd7zdKUWcwq8owiaGvw1fFHkbMsw7Vt39ThqhkDpSVvxNeRfvYQ5XFSz9VKk5ZcHok7PpMr8PoGiAsmoJYjXxK",
  "key21": "3UsF54RaZWayqVknbZGDzL2HJ9w9Koi84ez4fhVKnA3QK8uMKmF4PnkN1YeSmJh786sYgjLS9crtuXV3YDBEmgYC",
  "key22": "4HhuFRDmAQmN1sycYmW8cHSkdEwpSc5T58Jtv7XKMwBqVTkzzfXuFV8s6hgY9w2cP1X5E7UiKfFjBtwC6AVzLHuT",
  "key23": "5BD2m9Ct5ybEshgeSTM4B3vKLK6p9sxQhbcpn7DgK9hZx3NKfM5cME4L93GVYUiAixEWBcuZTRzsazXqUBFQhUxj",
  "key24": "Yv8i3AEGLX2rzkQtoGPwMZZkbpxWn4kMNM2ekshD4y3e6oxGY3LXf9LptTU9o5LPUAnFx74dUS9E6yzZcodoEtB",
  "key25": "29Ro3LnK8nzm8KWjKGZhxww8xBTb7MtifnEHGvJVw1EP6SiTBXTqiTZjbW3EpgahswAcmCwT38Xce3Gedp7XhhRJ",
  "key26": "2hPQbTuYYZkodGq3TXpnSmorTMZDLZyVnEX2bT5Rf2xsBwV6pTHDPVwfwFuTGNGRXYVoDqsKnrH1b3ht1wKgVV7p",
  "key27": "4zBhYo2P4yD6xYocrbRVaP4bj5b364RFvcMkwXkfp37cJYbfxaCXR7wygCbpY4RY1uhjxoZnyjac1MoP2kixwWai",
  "key28": "XTyzgBDALJobdbrj7UGKhqcbEiBmFSHAai4G7axm7csFBuELhCQcTP9y9b7dpuNsDaQvn9Lmz9SBPGg6jPRYEBJ",
  "key29": "4hfB7K6TYdaoToHMgNZgJMeNFAZE948SmxNj7oiqA78w2ZBxD8wXjAYQTE5ukCZSHf1jUqZkMKKCMvRrdVFVuH2v",
  "key30": "3XZCmLksuv25uQ2WunjB57ochxq8eV99jXW4h89N3uNQGvf7yd5k32DScPmtjpLEWtqnYzuaHLz8svcEQGhHB8BZ",
  "key31": "X3kRVm3wUNCRbETmqpnxUhNSib4xozDj4gb9fiGZdvBzB3kdcR6TAEQQ1rcSx15sTFd7C2thnbMFE2tY5u7gHkh",
  "key32": "4yaFWNwfL7uJg89Q7J8t3mooPFMQMmLwPxaf1n31ZW27ufhdusd8LLHVTLiNWHQQu8BjNAH6X7MAai1imjA4YzeB",
  "key33": "2iFbABTZ5pEYscY1eKV9pfs2uS3SX3h1qHSstPVHmynqS6w7pWieY39u3ZNfyNRLmhKf6ov2ewWCsierraWqkEdH",
  "key34": "3E43a7NK2DGqhTF7aPnfncwjSCpqwGqi17XwVpGbB1AiD3BiAcAGeKYxdMB1WxtmEmX1QY45CxUyP3fSxwAAn5wx",
  "key35": "48hARTf79Caw2qPYtQ1fBKgNbUiAU3J9XRf1xQWvuQhocMAoE4jDs8S3o3M32TDJj55Dbd3C7eYK15A8jqssxDb3",
  "key36": "5kc5z9qDxt9hqn5yKFeTMFdGs9iSvGct4Co6jBWLqoGdEemgNhwg4Vfh2mgNe5WREAZmtHLHmbHU1TqtYGS5pmjJ",
  "key37": "4UYeN8bsBEpn6cci9Y2ivGZ3asRsDG6gXtB6aPVc9k1pEVE2gyKTcr894vGDjHscSJJ2RexeapLxrbFMWfNFtSFD",
  "key38": "3kU47N5qEa9eQGvViPJKJZdkSQ8HZzpVNSZuipG6MpVQ1txdbMzKZXYe8XJmwaGN5m3A7XczECd9bPB2CiU2c7JE"
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
