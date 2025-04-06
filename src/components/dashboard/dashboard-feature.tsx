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
    "2i2HFG7kEVfJvU2LHKkoZJxPg4w12MvtgfX4qBKZgSDSTdm1FPFeZduj4eiDzna1ydLGDiNWNY9K9PUE3rUJRtQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1GgroX4f15xyahU5W7zyzXZ9jYFQU8DDMnqAXby66mQ6ot4MZaYuovQzXmN6QWJd2isrg1hDmn64zHmVkGRawe",
  "key1": "eS29AxniJ7pPLTLrKcPea5apDiXwimzsFktMk5jqgDAjnP32dUQyQMatwXpokckK6U4MHecrALCfqyS7P1XdT4k",
  "key2": "uH19kbyb2sKBEeEWMt3BLArV6pFXdaA9md2sD3z6ZvXuimDx5htqhy6XoVHr3vgCv5RZi5bd8HeUXQRgqdMTpgs",
  "key3": "5kNq3HvH4e7VDcf3f8g1ETzPJDFbuuN662WqLN7NZKPEpdjkuwfAjJcWivNNwJKn5fRUU6cYzwpYUtZ8EACh7zaL",
  "key4": "3CJ56R1TgLFGkGUE55Ld75RVjWDxP2ixEPk2iiYQAtzHpiJ4jT4zZwhoGNnnTJ4vrekYDmEhz37oUh2Q2rKdA92s",
  "key5": "2Y1vsWKqbtheuVL3HZuQrvnBpJ2WpN7KxDk6Mf2huARdZHU2DWGXfiHxvPPoacECwFvdwY5VukevjoN8zaRzUf48",
  "key6": "4hiPdWJTGySS9UBDi3LSxUAjDM9ScfQjXmYfBb7Q7iqWgYt86xGS7UuDKcng3nnDAbNjdmzYkkiJqEq2L4vAwF9S",
  "key7": "QqQvL8Fu4m8wZPHJnB3rcLN2qCzEp9vn5gr6PYPzf5kk38K1fsffoPSerR36gxTXD3tf7PnGoHTy2p4tjVUNJtf",
  "key8": "5QZomaqs6YgBMjZVRUvt86qfzkwvfDwJe3phRproH2bkavvTqjHzFroGkDpyzptZZyEr2r8unxrNAf4fezpouyL7",
  "key9": "5pihA4oHMtueF8PhTUoRj7zGz7qWcf9WLtTyzT5yjxnHGsqtmm4UKHrgMqGb2PrgvEJDEbswKa6PRBhBKzQqt1u",
  "key10": "4EkhTPcMr2dK1fo4SC3bY9CPtjwmYr2o5zauKJq9WqxCGxfwFF6BmjGT5oPvQTDnsyv5cW4Dn3bi7mXWhS5Utzfx",
  "key11": "7ChYunBukAznidNLBCpzdNvXbjrJQKivPdDrCAZ1oSrMJaQfuNsmAC6KCfTMa1t8Ltom7UsrAa5z1uFijANVcPr",
  "key12": "kxDFUySs5SWKDaa5NdqtD5wpmM9xdpWhuFH22QsP6xs1JcKY1dDESmryzRkVWpnFewrobwU8sVR6hHsfQ5MV8ro",
  "key13": "4ETnauyCz3Y9x1CBMyzsjvWtUskbJJwJTtNX4c8fr5UJvWW7NdzCSs1RaVY9NSYzZ7hZPtvTkbuoffMHj1RpdTne",
  "key14": "3URYVzSEeH5cHT5dnUgSScWvEZbkAeD9KcR6KEHSca9A36LvoG4bAtFSen1r3tWSC4U214USurZxfqJrmN2QVGPu",
  "key15": "21hL9TDPTFyC1anGwTDN7LHzfFjqoFj1et9zsCHrDg4mhg6XB28EsQNnPhuLgBsWxxd1nULxvUxgDy4ZBcBznpd4",
  "key16": "wKEa1z5LqAQKAvUH8oeCcypcHumajmZskaiUJ3XYsbxdinJ5zj9UQNT2m3E55LtUpJM54iQNUcABbnubgYzqWDZ",
  "key17": "2Rxkdo56fiwmrXEgyW8oWtDHwCATMDvG71VnzFpH7iLrsriR2GVssyfdFKZ4g8YqwYhZP3JpBphFt7n7xyFRpBi5",
  "key18": "3JMzn73J4Znhm3nebkEJhMbxE1VEfWsXuaSfz3FQQtyFwHHdkLNbuyJh4BTyGUvxbi5xPU3Y3WUhWeh4DdxHBCaH",
  "key19": "2Zseawhix8FR7RWpDP3HqrgSK55kneD4WQ2oYfUX51p5qSDxMRAkRvcmamwuc3QE2jYZyNDv4qkzzUiJy92Gd5zi",
  "key20": "2R7KBjUrQs96nYzLFxvV9YCKDLnUiRgMA7ywXrF5ddx4qvYEDG8Wtu18S8rGyU6CYgTLu3hbNj3K9bU1wpV11EMA",
  "key21": "3B4Q46zwB9NM8ZP2PMoe8MTpVhqrTRNtbu9fddX3X6p2oepc5qbWbHkMExeHYSu8cLHZp4F7dwfbYJLZ4ZCg4NdV",
  "key22": "c3rSPREZRxonvZFe85orQkWVt1nnnzevM1ka36QA7ZuZF2NRynBEMzknvgwxNNhTkgb5N4v18jLbaR4nztVWaZx",
  "key23": "2vezqRAT25hz8SagbV8y2aFGzn8U2wWUJLV4xHEPQD1ALyWptSLAskUeEx8CXisp8CCTgV4AbFXKYwRhMqtaWuix",
  "key24": "73m7Vo487RAVM1iaQfmo8MktHP3sstBh4g2KEJawuY67MQbAuJj9CEJJMmrEksY2Qgg8GXmCZzXjJgrBhXJB3Dr",
  "key25": "2AJqkVCpayemjBQfC78xWNAQKpZBLBDSN7KzL2VzB7MgoBaJJpVH135n6ooSjNkWt3aGn9Wsnw7uEDJKt8XBMfmY",
  "key26": "52KxC287iMafeLLMJv4mQaMZxgPB7r6Dr1SX3MJs4qmdNAnEUrsmLLgpaV2Z7cSHuMc2hj4wsUTW9BstBk2CXZR1",
  "key27": "2QNZx1RSH1E2AaGa35UEug1RqkxeTGh3Wg3ySJ34gvjWxF4d85wTQdEjhz3SoLiV1eUTAgTxuJPPhH27H3siySS8",
  "key28": "2yPfaLcf3nzCa5z3hRiEJX1Xc2VSUgFyisBSaqnaeJ5QZ5t51wL2LGyyxxXBbyDCTwZoJdV3TpQdzZ5iBKEv2wHJ",
  "key29": "47tJfuGPdo8jqtpPCYedoaVZHnnmnS3ryKDtnM9ciBej7UXsQVH1kiqBLGYqiQZjA9FSzownGYSv6zeUpiWWDAxQ",
  "key30": "rosTcmk5M2hST33ncfKZNRgttL14xmpX9HbdTBBRE141i3FUKuwwjcJo6ARbRYMuhcGTiwZ8q2GgDg8wTZKJWpg",
  "key31": "52zBcAf5NGHbQEbjpcbiZPaKUngM66NbTdTxA3mF9sVeeMUJycPf8yEfAu2TjVQVrC3bpEX4HJyZbsn3xMMaZBPs",
  "key32": "2JK8SZr9XqDYJeBTrc48AvJkfnDrLvf6GrKTGxcsHYWaWgwm4EhT6xWTscsWB5b71VjNyMwNoxZQtaGXB3gLSjo9",
  "key33": "21ETxUbdnBJBWoZe9FsycjNzJiGmRfQBeWsV816SQE8tXJJG1uLG2ochtSaBnDDXmRwqzZFt8fZZG1WwrHu9VE62",
  "key34": "2fEy7asZuKZrZ4fWtG2SoTUSJiSWGsk1eeASqEcEzcmvXACwKSgg2fegq92XMDabSQs7VtGnZjLCywPxPi59zA5x",
  "key35": "34RkPzfacQTDLDTRbzuaTqEfA4A5ATKkoFAApLnCDnCkvxzspmcCWhtAwwjoxcihWGPPmD2TETSAimwfGdDGCdfH",
  "key36": "2VnG2MXYs4WaKfiQYCvitKWuJC9vKPgkDxKCLuNX67QwFN2Wz9Stq68yqk8ptZvnoRHfdkS6vVv5BetdhMMLYjkG",
  "key37": "3tx1dvDnGfjAYJvuKvZRomoP8TUGZUZZ5u3DQAR3XRdxRkkU82r7rT871PYRGuJnexe52bestqytgbPPikX7LxUj",
  "key38": "bumEfuKPFZxGhgezZopTLgVgB261jkvSwmXWZ8Z3X7bu791iHYXqenKaHfoWn7MNcAMSw393UpEywHCkngAM5uF",
  "key39": "2iyHnARFt6KBkKVTuYnC5V1Ak3protNaNRKZ4XEVNwxRPuahqPT5zebES4DGSUSDwudhzLdubkKpcimqcvbYWheP",
  "key40": "63ZQBTQa8wPYAeZcbMFeoSy91KGsrncwDqX22XtXqD9FgdJ8NBjT55Swykr6ZZNEu8JXtSejZQ7gJakitPmAT3Ln",
  "key41": "46VSfvhgBUnATqJVLJ4evg3CRQoMQPPUsDtqFmJYAv6jkvr9oTtgak48SjQmqPa2yVGUHUMnsby4DyPUqPREvs4n",
  "key42": "fetj47YGwsC6SEdyGEAF1i5zqtGozU343xfhvQUc2dabSyefvCVYBYumQ6EzqA8bUxba66MFtEGmBkLMGKgtFn4",
  "key43": "3oTGU6g6XB73wycJWETw64vWjUPhreE7ruSTecgvjFEyp1WYyjZNCZ74XWJPt54A2LZSac8ofZMjaY9etLPnATnv",
  "key44": "1wWRE2ZdmPqJF6H4CQQuGKcde3wQmbqcGqAYQPf5BcBQ4CFrLZGBsG4yroYhHjdGZnwFDERtKq1i2DdU4Tj6KCy"
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
