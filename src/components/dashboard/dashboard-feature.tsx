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
    "Nno43Bbxfe9NGiNnYK4TMgCUqYaDTfEee8fdEB8itH2H59oB8VPNbKLHRer9yrPhgDKnEtboUCtoQh9CK8qaJcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qmpzHcUrKVYzHL541bJ8cegV4JoomGBYvRCyaPRKjhhgfrPWXiBjQ9d6jsXbqYgygPAg617JRR9zjRSj2SWhY5",
  "key1": "3jFvYfWaBEAcVjNnoUuCQZULyhU1UcAFNU1SGcC86smDtfd7W42USgZx3W6G9K1H32ofB1q83wqkzTL6oGRapfRw",
  "key2": "2Pufwfai8TUX1nyqaxYBJkNGpUR48cigAMqz2PPNTn9ToXtbUZJaCDcgAJxpyzncbbGf7AVZ6ZuSXdx6dvg2NT6W",
  "key3": "27AUXTdTBJ9GyfoX5YDRA22Peo3GW3c8SFdYa25NhQJhPiUamLSdmo8uzcoPsnorDNvjYsjcGSeSmGgsDwof85yz",
  "key4": "42eH5tPhEBS8axbt5LR1d3WCpzzPQtvKusgLNYsmTefBzHRtjnaWTEAXFJBk6uQxKz5ALn6muiBuuH1Axw1VrWNT",
  "key5": "Dx2PRKiVkEHrLrdms69Sm3NpLgwAJBdsyjRS5xYjZWkfS4nc5wHJwA2yd5YznN2bJJVuxevUZFz5JU6HmBbTQ3R",
  "key6": "5C5vBAEVLb4CXwwijegYorCfKWGR4y5CD7Lsd2VMpWLdHjGfjQPQ2qdEje3ipEgMRU661xF7azmnVXNoGQA3WCgf",
  "key7": "4rXsHv4cFRQ3dVCK9nB7krEuHNToGqdGeq1izTYCcYTzL5CrBjn7zr5ffQXsd8oVN1252rzqe1UGfrDS99gmzcHZ",
  "key8": "2qpEDT8heBru9rjAMiYFE7guZcMU2WPCuzeJGhdA8Rt7ab3Cjv9BSQR3e6azqCeMK66Nd9ki386mt2itwAEDsBtn",
  "key9": "3Sn64Sqigp3Mqyocq2J98sqtPz58bWSd1quwCgw1CxyFQqzXz6NEH9t8Zop1mnpHAF3fU7b81VxVU3sxermijKRK",
  "key10": "2wAHHrqFK4QCS8soBRvXYacLDQdD1YK7WhmLae3c76tGJuur2N9T5fnFNCRMyuif5rd1TEZuhvbXmNMsXgxw3CHP",
  "key11": "3DHYrQEH2MQoRc79GfAvcmih5a4nF2RUy6CxzT2z5VdfAayUMabTPPxPVv7WEUnKxn1zutqPKjB2VNDvidvgzYWp",
  "key12": "K1SjDUUVGatJy8EZYDsKxzUx4fEJkyaQvkajnFc18fc5NFatLgXS1BWBb4pMWarYRz7C3Um5XJenCNPG2E4j8pF",
  "key13": "4LY3WVhagha7kbxbNga9QrnuB19iVN99njFDs27LtjLMXyniiMezJB5kcey2psC3qodd5EbM3WfAS6AWtXN69oXZ",
  "key14": "jpkg9SebqtYa49A1m4d55PucJRjbWW3VMpj5e5r6UeDPh5Fw4CVapqVZNdk75EwxVEH9j6EFQ1kFkkd4H6XAxfK",
  "key15": "CedGe1nr96MhVqZjd6rMBHMSmsSzbWRWxkKAGQnRNH2rfP6FJkbRW7JAJ4EtMbGxGW4wobQxfZgouyAyAHj81uY",
  "key16": "4YkxCatWJS3TUzSd3V6TswR7PSUc8JJ8W78auvVzQX8qr15Hcz2ut4cjaSA5FKbquT8c1gawVGm6RNFRKWVhz6mR",
  "key17": "3KsmVCupc4ku4G4QAtK6zn63JQes2iN3fKaCfQN7w7gJ6eVTpECUxn21EbxhcS8c1RZumVhjWtzVqw6X1H7QswCy",
  "key18": "4H9r5mBdDE6tTucKAVxHTjtacsAXJsY5XMkAuXb6kuUfpJSPTkU6A2hEXTwaMxDiTfULWTsXrdm4ZCzYN5iZFcgp",
  "key19": "4rgzuGMCE766atv5GRZarVEmuv8SbV76h9RupdR2YqdaqqfM2ohMKGsEwFUKzSVD4fKfRh2GfQs58xMVBCdxtHdF",
  "key20": "3ME7c4FzX4w7XFTsWtFCK67MNBwgHsVNjTDepRVRffgYPsnjbjc7qLBPPjGnQqLpwrsjt3orcjC8SmTytAf7LjxG",
  "key21": "5tSzkz59wMnM5jYqbDSfnW6ok7wEXF541Hg27yE1m5ZfLeJ8B1y9TwA1wyfyDimrzdDk4kjK3HWunnfcVzRJnu1u",
  "key22": "23iyAviUTz8e9Yuvg2krod5TQk2k9m4ymoPLELBJh7WiUusK2n6E6RrixCtdhQBwfm7Z49AaERJGG2itXfgrWAYW",
  "key23": "28DzAd7pVB9i1MAwSx78NCYzakwMV1hceTYUa62uUfK3q7ZtAbatBuzNuTXGmtDjQC938c7vWCsnMgod5HPVHeTL",
  "key24": "2qoqHsm99T9i61phBMwEkLYrg51xZECKWH8E4mdWexp5tUaj5CSWLVMW7fGAayAbFhnp9VXXCJ44Um2W8VUy5bGa",
  "key25": "5mt67FoYe8GN9xwrDPZmokn5K9E1ge1dRNnzJbPtszLQztduFs5ukL6sPfSJiMGtaTpkpXhgJvZD55QEnioGEYiZ",
  "key26": "3UUv6473zvmUL1Co3iUpp9u8pC4iFqreCQmpyzJprkvv9qwDVXnGL2tRKp4kjmDUEvmWzGFa49kcsamcve2AyEsJ",
  "key27": "2N6ULe1Lyog9Jo1YoaMRP83BHkVMAQQhY7mDzW6MRZTNQSedLpccRkpSrzLvBmojNmBVXytHtJFgwo3rarRopyff",
  "key28": "4RzQv3memKbjGFsjdRAsVGdS89LNtwUCWGmapdJJQFrti7Z3haRqr27TsXdQuqX9xRq6y2MqJVVhMTgH7dE7PbuD"
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
