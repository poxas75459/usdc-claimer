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
    "2djHqBRh6eA3A6VRAkxg21cFAfeU9f7U7vMCqjwQPy2LQN7QaX7eDULJzrEi8cQpW8PT5yphEFTcGQwVK9UJe4AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKxm9sjEueBiAk6MMPTMwZzz1Z6MFSi9t2H9EVbZnGdA2ChRopLffjtZDEqP4KSDbdPrXZxWiUXacdynNSRFGvH",
  "key1": "3b7xcNwg84CKXZJTPUDb9QPR42NTsGL4D6WDW2sKWxP2hx7f8WftRSi12SzZ6rXWin13NAG152rKumv9tFvWTW9t",
  "key2": "Drc6Ec8yFbBEggDpUU2A1oz7AwghFqikz8pHpSmYRJYtEAsvh4byW46XkfmL6APangwi4Xc4AoAvLihSJWkiYz7",
  "key3": "44HnSZgXkBk92rp1uQPhW18ZEGjY3kWjGbuqwqjMThJ4wpjncjRFQUrZWXwx6aRj2oxvy6V4hMNx1fghkqU4s7eT",
  "key4": "2LX2JNqnrQeS5hvi8hdYEbVx48CeSzdxcvXeA3EDdmy9PKHfTK1k7BGmuT85ukJLVHG1EiNEQrNdniJgfZL8gRpH",
  "key5": "3KX1dQwFwqB3BG6PduRvVbe45a3pMnSRaTxH8wJFQUDTuqgb3bfDHhKyMpYnBgFhf4GqmHLkvw6HjzWpUFBbpYHs",
  "key6": "4VDWfXGVmoc3WFcyB8EXY4zGwutQm21gwhM2E134yzkML4nTLAQk9ap2RBi5wicbFtA5vMJoUPNG2XXXUSVB2biM",
  "key7": "24ccqFKDqqD9hgWf2cnG9LoBemg4QnjHx5C7DKGK1q6utS6VbnYuRwpSp4oigtogK1hwFZ7uQzC1CbczpvKDGatb",
  "key8": "2bYHQwZ5MYkRmkqSZAqhSnybXSC9E2NamimScqrAVSRZ8SYnjLqvRFjkGduHSTeV7ergAgApCQs3CqooUsU8GpQx",
  "key9": "5jsvMmRBwA1zbSiWkJjf458JjUAKCv3Lge6dv8RZk6MaKHzVNuQnSbM9xQCfECZ8bHiEVs57LXDp5YvXndGgvMtP",
  "key10": "duSBwEsTfp9y46Lqr77aY61nAWmypCzY46pnvoykitMKMW9sLrK55Q6skytdZjyNrUThGKQx2Pd7eEGq3X8Zd9X",
  "key11": "BoeQEqCRAzocKj79ofo2puB9AjqoWdbaiV2QUNSBm1vxT3R92wS1Kzp5VRL1GPNZUHjRFnhkjYPX6mZsbTSe8ef",
  "key12": "AtAFXCKASfjHP9gpd5jVsLSRbNrzpPVFckntMPREnP67N9MjX2c719P575XrG8yTvvwcsgCPy6uyAXcbquAi9ng",
  "key13": "2AxUfNJs2LgUm3rVS8NiDMXxii79cfDCsABovpwkFVyCQN4ZqZ4xQvw76VfVabAht12QCEWSm8nFQvaCTesC7zfB",
  "key14": "2Uw4NJSy9rpJ3EXsxtUcLf9We7nQ7QqFwXAW8jNrnEu2Zz52n5xntL2Za4HntqqtEZn8XN2yGAHKRHQQg2pwx44y",
  "key15": "2wUwknSSvAshAyuJTxDJCLr7dZuJ4QYJcWgRY9iDzKr7EcB63jYBHK1gzCpypPoCBxh5sGrLvdshoQpoW2VhQECs",
  "key16": "556UdmNkZjbErfnkZPedmxCeugwvMbwZVHwiEhuzVTM9EjBsPbMwJSQjF3sBrVNi5U2Q9nDT7XLo9qy4CZEM2yGA",
  "key17": "2Hdb7tPWzhW2FqwwsTwsrMTcfWCBm4zRtG8MJLubQ1QAPAsa2qs3myRAAoVTcGcA22GWJuSasMnjphqgeV51BFfF",
  "key18": "2Eii2L7jLwyg6BF8MmjtBQkoXyKNwfKuvmWgEAGatzT1xQ4yBW8MNSshbHzW9wiNWBecNUdTcntQRBa2EdBvE9ZF",
  "key19": "5mER2my6KQSPJciidAPHYgm9E8DhmP4yWuTdJErR1fttoN29SoVMB5YbJg3Qntzsdb5Xx4veiaPHjZuJGPSPmmGd",
  "key20": "41m1osJ9QMA3fMpYX5hogmYuCdhT85hMJtWKxajiUhMQNVEVKMtPBXwFdCEZsTLZJKPxto4hsMAYEboadStZKpz3",
  "key21": "2CsnTBuUt5s3cShxHiMwSv5JvQyBVyxJkkEVSesPEPiVzfsczuUKXtwasS8VLL2jkb29eapxB2ZMa8EssuDpaMhF",
  "key22": "3gVTBUmy9Hfcd9PFwd5CSrgxpm7EUziwPmD57nSXCRgFw4eTuo4ZRowqjYS2P16Vj7vxactBz6eSh9hMniHJipFC",
  "key23": "41vGfT8LHiFiwLwxtDRuCnbk8X95R5qm9aNWW3ioiQgwuENGSszERkKEpW2spZhREU7pk47LSFnpn3pRYmWop1Pp",
  "key24": "4vUH7XihYFeS51hLM7cAhAr8MRJyk34XhAQ39u3isABXBv4FS26E6JQpRSZTPtqCJJgo5Uk2ZEXeQFFfNHvvk2gn",
  "key25": "4oXX7wnL6nzewqsHQnxhHrJiF5FQF8ZFg2V28ozgQV3RWV86znodFUvoL3BfVz1BawPRgSisztBLR5remw7zRFeS",
  "key26": "48FpVUc7mk4w6QCojj3P1XtH2yo28wy3VmixFwgGi7LZVsMGQhnGEEbbRfomjfaxHiUwgbeKXVYmeY8nzCHUrJMN",
  "key27": "2SqsZxSnNfnarbKBtoGQCQmxeFebE36QENhdtVphQ3ruKXeVrAe749PUnX1cz9vYnLLUoV1bgHhKu2tozpSPrXb5",
  "key28": "3YRAKfjMwbM4W5nwjqQ2WqexYawQKGk37sKHNxhMzF9EExMYfLPem1qMmK98BcTXTJugjZ2q7534iKJo35Mcx7aD",
  "key29": "4iGPFESMauLbdi3ACaJqiVtEJK9PYx8HHRJ12GSPpzVELvNHWxdhkWD3VKLatDKv6GwzFbJxqJK5pAdHkoyi5ueu",
  "key30": "2pw6vLdKYiSA2CrNwTDeKWGuYLBvLAV6X27WH26KFVdcQZShw2tJGw36aokayji5xjDhK85gaAseWLujpj7ymsrT",
  "key31": "4FqXTPZCccjPnS5ABYiYpXp9XQmeYqCnqgXVe9Rr5dtuo6d8947QWUNvsjzQ7dbD4gSBd2Dq6yobsosJAcZMuFZs",
  "key32": "5TC1xsEAEpkiwydEDgcz3zHSghBkN64ko5oZFgb3T6nSEGSUZRZ8XSo6LeQPLLnHHZ4sPcpGBc488G41CH52MD6f",
  "key33": "62h9PrHdFoEwvMvcuQYGZpkNmrtp5NXh845RCLRnc7W9Lm9VqsN1pckbwjfVQuB31xbibHD2pF4284WRK6qRxSkW",
  "key34": "JSMxmyE3XZnFQJxMe8fQAUgPYLQAeEswBG4yT2KsE82dHAUyNfVrLURpAPmncdrjpg52kfkzBx5Z6M8oXPXCNDf",
  "key35": "2sPkMEduY8bzzF93nZuhC2XYUndsYebvKxTzCbNYg4McFdVgPSYoRa7uuEGq9zuhyHv6YfGA8y67e68dnoyaz8kE",
  "key36": "61zoFA4rmaHUwivdPACCfc9r8rTQJnf5eicVx1PgpB6PCJhpyUXkkcBJsaUb4eUVE7ohyD6Emeuhpv7ugKJyNGgY",
  "key37": "4rvhZjFhgMzvH4JDAAk8SXgJCsYnY9xUCpGmaPKDG2UBKK9wZefNcaW63BbCHrWhkapCuMKLHAiS78H8TZXnW8az",
  "key38": "QUVTWx37cbR5aubqHNTzwsczuKqY7AvgHfeAgLcxzSsfCQbsAFPXMmuyZKYQwNYjwH54VKJpbYGkVWyJf7EKdxw",
  "key39": "5fYzx3V6nW4dgyj9a2zhiFukGPHtn8wZFQNEoLmiZAzZwzKaMpiCuiCtgDvqZMcxJfx59YoyQJDDxkV4GTTZbQjd"
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
