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
    "4JyjJaGjBZy8piVvuFBDeiyY6BZwtHowVqXsdyBUDTZQKnwhymFQGAwJhRomQdsAnuebutVJw1Lu8tPMnf6T7B7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeRDGeugxnDZYBMVK8TswBP1aNqxnKspahKJb7w1d45PBtpfq9MRT7NedathKieYmjdw28q8Xw1vRnTgfcVUCRD",
  "key1": "2JoGbu4tFqzSHV2j7p3p2PScc3p7gGK9MuPQAjQshbsTyY4qLvWBbX4Geky2gfaDzQCy63CpQJFjYV45UyNa4Mcd",
  "key2": "gZ3xPBug75CRXaizb6YnsTSobpzZoZk8hs3vScmbrE7o8hvAGa63gtXcnVsWnLySSkyugqe83BSSMNsWfW9UuZ6",
  "key3": "4KxP2eefazjZW9TbaieBtd8ddLtQJenq9V8d6d3xxxRumKtjStwTDm35y1hbTKdBsZzS8f7KfhuXwpTpmpEj62KX",
  "key4": "NgCjcEmcctMhFFQVaPeLX7WB227aSf7Lxarjj2PUyz4VQzfKnqJFbtDpKzw1ra824J1hiJgRWsAL1PnHJaXX8xo",
  "key5": "hEcYt3aRFYCoTKEBrVmxa9e6NYnAg8cUU3yo9E76zuHPwPnzDAV6L2qmgTRCHSKFaQEAJ4PgGsrFH8mgfSwfkm6",
  "key6": "28Kh5cQCWdmDjbTrKLRR7C2CYTDnfarjcsn51Y5L8nArNrF3DbhXc9WTM6nFRmP9q2zRwiv87Vg5Ys4Fz1pnUnSC",
  "key7": "PkTP9pdx9sPjip8UYNSygG5GwTPnXYf4JvGztQA7Mub3JtwKX4nfi9b2LrEL6g9Y74QfDuEuukd8p3nhQsYJURo",
  "key8": "4QpPLBRgwVPeAnWu9PQpvXLBX1HLNgManEWxKD1ecoLvixvDpvfxYKSm3H82qCEbDypjypByG3X12Vkx227P3Vrs",
  "key9": "2eWZg4ACccbxqTkUFTB2iAhb7o4FrUsDoQD2wuUUiaq5jvuWVFkoEHS24GCCRKXyC2qjNor5oS5UKxJtoES2fq8o",
  "key10": "49kB9J5rcFpXnVRGj5NsbqcMquPi8XQ2Uz6rtXEKCnS5XC8Qvj2NNoF3diarcMeRj5TD1GpZNuUsKM5bvxTrhh51",
  "key11": "5NPQsnc639w4hpfn6AFCSveqntFErYVTEetHhvNhtQvGjmfVB4AJMDdn1tsSWe64GRnr3WHNiy3K3JmAqhAogtMC",
  "key12": "5YDDNsctd8FA79r7cgMaRYvLuJ2EgmAQ5TtLXUPA1DbUxGR37SJ8bPAntAtznELsxAgTn41EfBaKGaDcwRS4UrMU",
  "key13": "41mV5icewSX65qADtSMy84jn3LNxL8fRMr1H3LAdgkXbrBSjAWwesy7LxZPVnmq3yzkY3vMz2DnSN5FGNKj79ACm",
  "key14": "2v2EfMTtjfohCpbnLwT9sRpWSFNGT2BAxpQU1qyS6ovf5VgaVdAU7XGH5wEaSsNzReJHaUi7TAxX4YouLkrFwqCr",
  "key15": "4yRQ3yGYqCc97DhiqAUuHhZ9dtXEtWuhPfLHkj6sV5nsowyWcwB53Hcw3mLiiLKBwLmdxCEMVfefuQWgrpYvZxmA",
  "key16": "275iDsuAVM4ZCjWHXtQY1eQXFKPiDsiVoBv4xBASuEvVWyMuCaqaLuuG1di5jnd5GDdxbemYMwgmUR8aV4Tf5MnH",
  "key17": "5vRoyZJTigmfHCCMpSGkBU3CyBQCZee1L856tv6rHo2XtUkEM4jmvCDpmS5VUfFtWhDLxGYWGFjJZPvKF7Et7WYy",
  "key18": "2fqvNKFD5v8vWeeA3aA6N3GkgUhKCSgf94dCKoDtdTKGkMpZbHnksdyGCeqyGvKwy7aDEBognBHdAdnrXWFjjpW3",
  "key19": "4e1uUUJERZc2QSPsgVLcyfZayHeN3j7Z4dUdHua6ve87U4duv585sDFYbYGf7VMiu7D9UYhBeAVjcDRxMqsVYdDF",
  "key20": "3yu1svSyz2bvQtcPEdTnRapB1VTGiABvvvpQYYe1sqnGveKGYLS6YkoVxNqj7dYYzp8cixgMrxkDgArK9TkD9xBM",
  "key21": "4Dd25uRTZSNaer4aNF9B49rQjnJgPRmSdRDj6RNyxykJgqz6qYkobhpCenisdH9ZdsvMJttZc32vvbVoUYdseUq2",
  "key22": "56vcJkjtwBcyw3XPma8dRKxTGeXeof69LwuNEWDMve5XB157LXoAR2EAcCnHG4mDq19dKfEQmeJ9Rh66LeFMHv8g",
  "key23": "5JPT4wv7YPiASUZtA4m4LgpVTpmxxdagJ7dG8hXovsVN8wrRHP3BcKMFc28qy3bvb3joCYXWADJY6hnbyCHcdnLo",
  "key24": "2uGHJsTJbPAL97sP5MQtYfca8VQvU8hfDp854qkV8qvhjLQF9sreWUY6kk9gcjmAtPBNGY5bGvqkDCMxpJ3bkpmi",
  "key25": "4KF7DYUthfWXYZKisU17LVNRTvqhJpXuEkNsupkBMuQXbzhDeiWHG76f3UtcEDx5CQ2UzLzcT1Wb2vgBV9ZzkWV8",
  "key26": "5xf2gPdCsm7VRP7gz11msPpXGrtCN3eNnD2nad5G8Bsxh5gCiYcdm5HttZh3ZDck9mnbZ9RZnJCK2WUByeGueuA5",
  "key27": "pFb4TRpzYgwCiv4eYWAJ3Qtpdp7abVi7Me14AJGv2rJP3L8Je3aMPeN1iSPwqtWPLFXq1nEEKbtVNroaGephMNj"
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
