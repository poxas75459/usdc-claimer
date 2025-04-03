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
    "5F2UE5Rd2tem3MJ78XPLGqdeapbHV85CEtGEF4u4Wgarn1eU5zKTReNbhgD5yoRwswLSvzyZLRoAvvZgUZnYA75i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJcA7gTdAWUWMAqn47nwgG83EFVy1bt7zxkBEhKa4oh5YBQo3KvLDxpNffKiCHHEY2NjQvSVmCygPUetrGFCJ2f",
  "key1": "2dxKRBWw9PW99bp4Q4QTMGkRZGwKRavimvTko8QY3koxKbKpAmEML5eUfKiTi1BaKU2b7Y7wG6xkKPymggE9urGk",
  "key2": "5EnJUqQxvS9ku8PBrR9LDbfHzJdKKVr4Dh3whyboyCCqf8aGyZDFJ4zhKda5Ur9x4mFmkjhARxyoBzsdWgFZDpgA",
  "key3": "3UPydr7SGCnLwkQS9APUwDQpq8uC9vuPLeF466veJg7hh2x9hmcjmbY9etuK1chHMVwVGmxYyVwc2KaSe8uNgWBe",
  "key4": "27gkVyUJFDXhAzdqegyDZvG7HiqqqKDR7VFp7KJAnZzLwR5FJ6TDHtgd7FLdtyzhXjwqLk5VGb5fKR7JUUr8teui",
  "key5": "2YwnhEPCNibAFeKKt84TpY1fuTrtJaYEAjj1XBYgyn9MKsAe5StAnthW7vJZutbZwPyB8wxhtbPVKBUFKzi3hZ6B",
  "key6": "TGCDomuXCoMja3P7y4HP4KJjoZNqSpmfiyueR5ueTAJXizFus7twv78qjCtTyD5PRtUaRai8YfWgp2JtzZa5Eb8",
  "key7": "2YBozmYypRsi2XUjJEcWYGseMQpVod3a2dPxu25HuzmywuuvJmzhVZV7UvXgo6VRqMWRuZR6dHntu9TSuMfVDjox",
  "key8": "3eGrEVHbwJafYuDo7ekQdvUQ7RjZuYS7oWL6CdpE6zqpxX5WMpPFz5EVETeWSzJzAYzspSp8ApSnvAU7j6jZS3uA",
  "key9": "4MuoMVqcfNbRHW9aNGHw63ToftSG6nA1PNBNQcF5Yy1cYBywrfYQeEifxLWCjm5oJeH1rscb1yQpFx1LPTcriLRh",
  "key10": "4SKiWe9dTE5RGtMD3WthBckCBuk2K5k5QEwFKJJYvtRUYYEVVdtwgqi2Kf9DCK9xda5LKksr5Jo7a9fovXTvSY8r",
  "key11": "2Z1s2t8xoGZ5vjph6rjvMVB9N6efg8aWvq1EMYfWcLn79JZFvVdBypUhkBDKHbPZ81sTThpgWLpC83fqM2JAS4nY",
  "key12": "5SJqh1VzVCRGdk6EVZoktmUDMFvvdkYwXuVex9Ny3eoUZbnnwnzcY58j3eixTVRALE4WQZKCfo74KAywiPGyZxfu",
  "key13": "5Ks8kdWbNvqh3mZPqtcioURErvvnvmf4xt9aKLrqKLaGWpMjgajauZirzZJJ4Fc7bk6NwMRBF7f8aE3tQ7nZsyH",
  "key14": "2H4zvZ661dv31TZTVAWE5yFsxCwKbpDMmbRaY5vWHT8rHXnzBthQFTE7xPavCYbaEPb3A7AZxfvmmRwvJF8aVomb",
  "key15": "5d4dTenu1kZGeqfSDa4usBiXfAanrHGCcUmASNQrMhgCG7RWpwA6GqpjFi9src13Wi2fDTjSwaeZ1MWaqjwogVyq",
  "key16": "2hpXqyqcXE7NshT39TQ9orrq1WEEsBfydQcvyF11ftPrgKozoPs1vWTmJ1hVSGDGmCM2MoR1nvB1K3vx2vW4SakM",
  "key17": "5xAS187rjBvhFQ1TVbqWsV6Bnj9XZ6CbLFoZxHN1ao6V5BsryXJVxzHmDE94icVMDoRJu8fs6vC29Tfi5UK2isQh",
  "key18": "5Y811H54mAcrDwjuzv5t5mtjdAxFBeojsr9wBBgDNhU9tCAf5DCHLjpsJLww93JZCGW9i6f1QpTBsZfcS2uUWXC3",
  "key19": "3B9xrD8Gf2LL45iDeJktfnq1o2vWdDzrPYzRZoEXqF5Bvr2CjBdyCuw7oBsGpjTGgQQZaHGbc6bJxLZgAwkepGoY",
  "key20": "5AT39K4ivgvudthDUN5BXJ4ntGimknEdntFAcBxv5NSomga3agxK9xjrNyKAV3R2XN54d4kZVBadpEo3cwMeVYaj",
  "key21": "NDZ9B2CgUD3cp6GyHWUcNsmxuVakdSMkZD8cnk7D2ErRbbimC9taSBMU23Q5oUcvd7owoQCawTxVjPgudMYDrK4",
  "key22": "53EYfQ7LZrSR419jQSGwKGSCe3Nda8MoGUKwW9iLtvf9K1tE7YuRXwoDXMwvJTznWmiui6B1NZ76wTyDfcHareHQ",
  "key23": "3ZbCGhLpZ2krwZxf7srnPrK3FUBvwj8CEmRLji6rs7KYLnTboJwDdsDFaGmcazPFm9qirkHEWC6Y7vSAMv2nS2SL",
  "key24": "4f8tdxaLdazn9tUiwxzqcg64wSmfJUtGvrLuqBb29L1KNoqXnvUk3Q3Svq2NifUT6cJiD5HLrNfHCPpXAfisLLV",
  "key25": "3wYV9knMYkMm2ArDy7QmYCRvGwwL9L8BEmTdy6n771oCVoVvST3T4sfkhYPoWx8ge5drRK64mbbtNFKbDooNs3gQ",
  "key26": "54TMKxS2wg9USMsjzbm7i84VAhndw4vqecDNfUTFMuoYdF56gtvV8U2LeYLUYCD7oghyPCNCq8QfR4QfMf4F81g7",
  "key27": "4UnNSZPzAVShnVWu3BZpWMXn3dYgMwHL1aMmi5EkxvsUb9Fsu7kdYB7E7t8E27teakG8JWKxjtD86yt2gb9diy39",
  "key28": "2Azo7BfjrAdt45oyP8mhisGwfmkwPcbUgpJt8bnYBysXzE9x4PLX1mt67eosYK3Wo27RiFrpVb8F22cNQBJ79YV4",
  "key29": "5GAwnKsqtUsu8yu3AfbsQcCt1jpc5oq8BiiquxU7eUGcgPR53p8aHcRkJq25Yfq8bfU2Gfpit6j14h47prRmk1Yt",
  "key30": "3YPgbHBf2uJhR6xj9eqxs226YF5mRccx8TMY65Bar46yyEK6xx2wMbuP7yMriogYaqYdZLj8Tq1kHoWiSRLhvm5V",
  "key31": "3A2FP3GU1ki6RtPgvWq3zX11BPtHRdC95BzqAZ7xbvQWk5LkyQXLjAyGCRHeR65XvWtX7jvSt9VBnQEja9eZngXC",
  "key32": "ETLJjwuNRws4hLV2g4Q1sWji1PJ5jGpbJBXpYhtk4amWGrm4xmWfbjA7kVvdCNqznvTyJUqfx2ij9TwQ74xgLuX"
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
