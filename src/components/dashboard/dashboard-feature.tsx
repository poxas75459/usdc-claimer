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
    "4kxWfmvGp9chE9nDBo9dcrregmvwzitDkrHNCyb7rwyDx6jLUNYSxTMmDpyYabbZ1f5Q63tZK8Er1auqR6ng3dhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56PBosCLeypq6kU5XsW1fbmMfeBESY8qfmijvR5XStVu8vUX4Ph35uRMNy9WMyXm6i42PedexfWQGLnNiCHH441r",
  "key1": "34wN8YMpT5WddUxXnscfHuxxsk1TsGAGa1sUFc7W2oVgrptTqY3i5Uy5ovq5Xf57v9tbDnUjeBSXEdtUXcXJs6fJ",
  "key2": "5KZLx7E4QvbNrZbgA8gU4ASWRzwWkEE6WhqC9h4CC49KmXkV4oXPddnr5unpk1JaPjeg9qq685Sk4P53L1A8jYYd",
  "key3": "52igpZwub9fiZQuuEnTAvN1asMqKKF8xdD8fFGgnMsyAmG6s497H4g3kUDfB1W1cqkVi9ym8qaQeLnVAFLqgQxN5",
  "key4": "yUgWeaeUFqxDeezwmewvprxefWRqK3ebPxNvqyNAzxPnDXCMJkYczgrm29RGYrqV7VcGMXt1AVGsKXUbdDXsDRV",
  "key5": "32AXRWsokfqNPNKJVmcfei8g5mX4F1UGG2hsea5kzPscUg5aJTKALUMLgRTHPSANzhZFdDXEy54RedNWsZinEv1o",
  "key6": "3dNyJjj48x8Jqp5CEq8f2cAgTaKzZu32gHwJfvFpNn94eb9ZLybZEKz8NveJxMtB6MQHMewxsEKbWnDeabrveKV9",
  "key7": "4kzt1K2nUDshzfhZ11e8K54XpfmMhNgVyscpv5Yh8auhHKPD5mk78m6D9Tr3UqEzTC7t3E31YgGiBG4R8pJdGVbh",
  "key8": "49BsN9Pd8aCtxikp7PKUZovFEikN3eDnKbBtQEEHLVxTvcYhmipDDgeH4NcLrXRCot3gjHvC1krmE9FJnwkq7HAu",
  "key9": "2PBr59eRabWV6pT3Gvktjxc22cxL4pWbxPYaDSakLjHvyUAvdJzYbtUhigtxGsvdT1kcUKk8pVHmw7c17Uk3pZfj",
  "key10": "5WghLE39zwieiRvMS9H2Zh8a6LoHHk5ThLPvttrk6QT61Z3VbpdPdB3KcQtTEkxCu1pK6voVwtEPuYkyCiMZaX3x",
  "key11": "vAnmLnfEtQRh9AJeeQgAA3PBX6zvDdUz6MCJuE6NzHAZkqRHjiEjfrT4yVxuGfZ9fNWSi8HbgWFsBymsYmH3x6h",
  "key12": "4uvDLiYVjP5n7BZvvb4AeC95cL8KrrX7wV3A23RmFJmpXGfZNDJ4wMfnXuwgBtmNWiAvzJwxZPYuboHzF66Cowj3",
  "key13": "yDXCvwX8pkxbQuuYhCJYFX8P4uKkMDDN64tc546duqwmAH2aJNZFFuHGjGkYhgMXAfZJXMBVuAkmPFEuxYbGHV9",
  "key14": "5TTWi7Q2TsKBJB5DdxxdWTmFwP8A9yMPtJL3nLz8keQ1P5YmeiUZxioo5oC848WQfd49AjZwFvETzRXpYn93p6XG",
  "key15": "4WTTJydQL6Utr3K4zdd4ShbEsEs5PkqeYMesjdcEdk1HYH2upX2ovGY3adjpzGQ5CX65irmyJziBgbwYt7sbmDLo",
  "key16": "463VPEhtEsLU6fDMxYM7nuqwMvMLobm7repn6TKLi5hsLAqWMiKrHeHzqA95vGGXUi3LRAPzBUeTJ6xQoPPj3mGG",
  "key17": "5hdMdGAx9DVwmkmoRgcywskKyTJVoy4UWAoeBGy2XSrrzmUZNTDixmQwRqHxqjkfmBfeT4icif19AzZWzaLaCWHr",
  "key18": "3xo71mWHFTi5kcAVMaiSaiNTfp9QfJSM8sJLJXR39tJ36H5sG4hEfUyxZsx1gVfm1SsuhxPBk1B8CbV8CQE8Q3Td",
  "key19": "48TmnCxJ4kvnNVpWpYJZS31XAfbmvA7GKj9Le6vadTxy5wNBjKbqAd6Wy2wyUZHCWrrYWZyoup4DTn9bWvct519t",
  "key20": "4mHkquXWkT6kvjGChpRx33Vu6Kr8MWvNJV3RDWpYBKSscv14XzLoag67mjov8caySkGSbgUDPVqcyTwoUiyT5Ejk",
  "key21": "2TxTfKDjyWw8u2EYD6XVoypSjMa8UttmPPw8AhrZvPsv8aaSuyWFEW13H2uMfK8vehzTs1dVaBBys93awmxW3kcB",
  "key22": "3swtBo8qzxqjqskkCDUoaU2zX5vt4BiRJgNkMNomziUo3hP7xi8rgHkqJgcfxfAjz8wemnFQ66fY6MLcuhgwzpjB",
  "key23": "5SEHTCJ2ptLiG7gbgge8AiU2o7HDAKKbmhT7Z64SRkFNrYTrRwztwenv6jyPDfK5sP1CPD4nnzo9pUZa7YCNWNZx",
  "key24": "2WmFEfRJmt7pD9dYfctFLnpGSLnCBKtCMRFSnnSGw7aMoHDksZdYVSwmeVRyXEzSxmYkqUME7sNAjHKEhcJPCyS9",
  "key25": "4xgMBbuw82EgMwbfSnCm4ozAnAY8SZGkMgrtvHuxz8JCARPtShNkbabrVCwTAzp2c5D1dbDAm31Bac2Fr4bWaxkR",
  "key26": "4ZKDgRvqoL7rr8iq7dkja6M2KG6BE64oexmdUy195qzcns3NqEhY8CDU9DgXgpCapcSnFmveL356nuhmrbNf3vix",
  "key27": "4kU4twpkAymtpcv6QtLFvon22fpJbzgpYE7567bkBye8orLNSSn3P51tJKJE9VMr2zwkYmx4d3FfHSBpDyhTNZA2",
  "key28": "31816VBF2M7ddY3hzwKxTGFEtoarCxW6Hw9a4zAH8HFzn2k47sHARbrhwkoz866quAUn5dxKvsbK8jS1fiub5iEg",
  "key29": "5AtbJXHWm3hHBwUaezFH2zbaRfXgqgiVE6q3Zz26xewesns2yf423qTzBW5WFfVR4tCoJxEkmJUUDyaxGCWDExtY",
  "key30": "ZXFV5V2DTVk6KNrT79iwGvRuPgE9KCRpcMgrRhoaBjRxTjeJEb9ES6w6V26art2TVYvPGRS95czTiUDogkezujQ",
  "key31": "4isZsjBZMhguwqQTU85APZzzuNgGn7Pw2reJ5bH4drAdJryt8cacQhmkTkg69YnDtQMDQC3a3QQKdBtX8T7y8uwP",
  "key32": "f8WQxbhAXiWcgzZxd4mAF4NMfnvGDCNMZqNfNpcG5D75FWXtRB3FdkykYjv1WMMZmGZfinoAmh7v47qFUQM9yM4",
  "key33": "65wQ4tHhyDBp2LE5wgnhYBV8NzNNJjJybwooU146rG1nyFNNH7xbZrDmqGyAPwAgfs5tKr49ZjkKMgriRzobfVJx",
  "key34": "3xsHfKA8KigX8hXNdHkY1cfQq6MLZkhXMv9FyrZcto6dg7bhjGvfK6rVyc7nmTj5FSbDTe44ZDX2teuNUfvnBJCe",
  "key35": "5AoNVXpuJ2rM8UyK9ttBJaELMJgdvaaj8GMnf1aZDPMHEu2xLx6bVPcQvsaGqd2fUucTHARUQgNdPmfSUURBZ8no",
  "key36": "4FAdBA1CjZnLTHguDUouSYxBeHo3MGDKmBs8wYFgSkcK8XcYM5rAeqcac9y694ckVKjUfjxeEp981LtUDLgwyoag",
  "key37": "3B6CENEpVBhTDCYDfukCBwqvjr7JkQMiorJkYDGMc6YvFujUXihJKCMd3bfvUEfXrCNegR2H1ZEDQzY4vTYnNmCw",
  "key38": "m1dYvqENrd5icMhA4ncdD15iiCPDEQ2Xi8f6vstVz5LUd2Mjy41aYw1fLJVBmz1VX13XnkJm91ozyVsSwm91oiM",
  "key39": "GS6qUPzYphSKVpFFKZPk29gc1TbBvwdE2qk9Vp9bXAHQN3xwgtR2HKHVHSCht4JRynzfqqQ3NAAJvJrQpoN9ogv",
  "key40": "5hqVNV8A6aQptA49F736RFJ1ywYoWqeiE1y53oWX4qcPmq2bRP2SqanwJkkkm9ew6MWAXCR2k8YpLq9FFXF2KFuL",
  "key41": "2pZtbVtJjHKJM81Sc3CKCTfHVPeECTTsjFkkdJsCj7PtaRyK6ZBKBTPaeEnLinBtRNeYbq9rnmRNtfLENSpDZ6KU",
  "key42": "2WdQb3wJ3Zpkyp9JKchAbJFmZu5VTQbbktvEoUzrSLPQKYWFooyrMtEhYhcRzeekyDW3mSwvgFSabvvgxoXp836m",
  "key43": "4CFLthKjdfCvVaPjQWwQ73jG7VKji9korpcsmKMRdxsYzspTBko5MSPbby9TzpvRT4b63gwUKJ6nzcefzPd4MToU"
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
