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
    "2gD8Hbm4h4AGre3GzTJFQ6MdQAKMrmo2TDmVWtt9FvUebr3aG8dXgT59k2qz4SfYSKDQ5sLVmkPrnDpk1nGapmDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7kVUaU6g11YEDD1DkFByBopo3DfAMGxhVPrZ83KxUHqj57QdEukEd2MTKqtjc1QLMfDzGPpS786nPZHpCrk52E",
  "key1": "E2afq3KEzLdghBrnqmVjRgdKafMk5CSjDqv1jNYoHyfoSRPhkFLqrgQ268kCo79YNJdo79tYDgT5s2SNCFCNBem",
  "key2": "3HnmeJZecmpx91iRhpaUtyBZo9GMc8VyRZdDWFScdgVviF4tRz7oigAWQNMLWVcb99yYDX9arN4hbfoUkFEzzeXo",
  "key3": "qfBfeNKHsAHCaKSFnbkC2bUMG4JKandZuBvHxWcmNCZtYfoGdB1gcexCyD5o2xNoFawbBxt75hV9SaNV8XU5uJ2",
  "key4": "2Zz22VFj4GBqeugh89WYRc7jakLdyzijy8ev1ADjkUrv1a7WJiD9E2iLE8ptcX48jzaZfWCL69bYwqPZmovwiWLA",
  "key5": "3UnFFHzYit4xgPRX6r1Tu5GGQxopJdJeizucqNiVuTkXcuhsmCzfEvxjvt6ZYdp2k3GTLgUSD5JKo7GuePJD67Df",
  "key6": "58APfPVKJ4oLNo6KRA2KB7V93bi73AEGY4htwgAP9L3Hk1uPeso6CoeB92jmJFeCrT1RXFraAaFmAsegdEXWyVFS",
  "key7": "4vBeLxq9RgW5Hwdv9cea2mxWx9q8bstMgaf9Sg9U462GJtELZAe6Xd92kWN5KbLM4XvGawJj72F3efNM9xWpJvLu",
  "key8": "54jQZxLtoxSAgFsEPndh9ZGPF6raqLo7MLmmH42zQZRkfyTydpuYJVLvohrDewdEgPAh2Fj3aufWP4uEnrq8K8f7",
  "key9": "2xWk1deH8qLJn5v8eRGKbeYRVqyNCuHXVh9GYuqJ8mYBghNv1GuHxRsRLScryieMoHvtg8QdV6iidCLoUHqn9R4b",
  "key10": "4R3TZjyRVLjwmamStqjsvrtXdnL6akao8jfBMdZZWjsUkCxeTvQATiz9jsdGyo7w1r4kJdHoUVBnkFZVzm4Nfite",
  "key11": "4ngnLAHEuxkTAvt19qoMrLUwbE3Qj9XXuy6Vgs5fuXf7Ht2NtuHcC37eCvcAK8zbg2A8hKYczQbYYB8Woke3UzvA",
  "key12": "5x5J3doDHRfrai8L9iWxCBPEC7eye5VsQAU2twL5J18Nbya3SsFeTay6TnAikXcRm3q9237ziBfsBurLDuaaTmD4",
  "key13": "5ExiKmBP8PcCixawQNWiob1EC9Mp3X2FkFg5p86RupZjSxxGyyPBeRAGdFeqEFUVy8Qd2HmfdKV4HRbccg8Y3UcF",
  "key14": "51GzVibL4YfC4B3GUbizFTTNaRC8S6VQ4WA7QRzZeCeskYprNgCvAM5N1NGgUnFf3CqcmsYpgnwRWyN42tPwr9o9",
  "key15": "3zPnrUdjGLRSTutrTvKFRuRxDUKC7urJmA7upWDZhP6FPG1BEZzHDUQJMxfGLAu6UweDTtiifqNaQMJg8Wiig3MD",
  "key16": "38sxRaak3RiQUZzzeFzhtbMrMTc4t2CZoHSXzK3C6E755tKVJw55GEVrxehDqR4JcJVZ93oeXzb37xAFmzb3nG9p",
  "key17": "4BkE82Qs1MRdgvfYNE7GtFtGf3oJ7gt8HuZZPZ3ZFaPoCZi4YZxaaoXjLo3rYRT3sEY9cu7AERgfnvXsSuJERH8v",
  "key18": "3ELcH3d1pREjDmbF9gvFdzWdH6CYujd8AMwuaob5odcWeKC4MLkFXVnNPqmuDNgVdSDMjrDbq24esyLt19qMAYwC",
  "key19": "4kZmf7rFoa5pFPPDsqSzeG5h4yd4RQC4bFEeP35JW89eULM4c2MCwG7tAZsFdrV7GwgDhPqJ1K79rksV54VgtkHj",
  "key20": "5BjaC6gzmU1bKppSRTAJqTydc1ofRhsgvQrbCMRcavTwcLE2m3Hhk6FcstupReEFZUX9RuP7x68iwHnoxPb1Fx3N",
  "key21": "2o1Ld4UyBCcnQV8dUir1ApyurHrUexYYPcwZ69bjWTqfMQFpbADffLyzWxidngXNxCxEAWk5zWoFk7VvbdHnqkJY",
  "key22": "42JfNvTkD4JqZ2NXrNCQ2XzETfDV2JHHJ5nwjySXfVdoAN8LTmHDCLZzD4sFceKaUxUb9fsCHipjAzxW5oW2QyuC",
  "key23": "YxznaZ3YNki4QN44HVgauLEgSacrKfHdKmC33YgZrWgkvimGwJVJfuA8dkPJWdN72tESQZpDdz4qLEfHTgC1iMa",
  "key24": "2U8NwD1EPXd2NqbHjhqwCYaiDjfRxBdTN9zkst4qKdNFiFc8z93C1qLwy5VidrJN63eqFHJ31NrGcZwLP6tnmngq"
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
