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
    "Dm3GhpkBWSw3cB9f6nULQp2r5sM2r4vQe9eazubapWBjMC925wTgUALbdn5mYp3SLrd4Jmpdv6W3vcJ9SemTLPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339DfKUrojpLhXVhbmTCDYRWfZAu19E4c7JNgWfW6GPTTWVE71mdbfasrJaAEB4weig3SKNXEQz1u71JT7DnKdWs",
  "key1": "JJnoJfq8mVVrFjubRTDFRBKJEtpvEqqSXNxJyStikUm6Aq2vqiZ77BLPZKvCLBPcXn2qW8jHJbiDB6A5JMFNG3P",
  "key2": "3cuEwtGWtuyYrZNLPcF7WYjzssL9pS54iPvBPnhBJp8ktw6e1WNDqvbTqrJSWoywSXpWFGcjhBjWZ2PBmuLKeYyP",
  "key3": "2JWadTwA5eS8RoA8ZxKkdwj1GKJqRHUZv7D95nLHofv9B4zNHeyQ8FefszAAJLC4DNhTtLaFjPizH5aFgxWx2nzy",
  "key4": "2kHKQdFE1c5bCiCihgJ3CYHTHRf9tthZVP8KCdDEPE6Q2BSr72hYugMDK2EG9ofXuLqW9Rf3kBibZib5b4PPSa3D",
  "key5": "4qQWFG1RnpkSALR8C22Lp3vD5v5WiDy9BJDVhm4aM3tQ62S7JUDLieqodKeQgG1nMUixHwmZoWhd8HCVzuWmzocp",
  "key6": "5b3qEBQjnWhfHB9x4FnDTZK7scojrBfUfe8kAGRy4kaE6aESY8o7wrm4FjAaUqmSUWHjJLR8sqVcYPuZdpZvwQEK",
  "key7": "EB9ezRY8G4ipAHfTgXMrw7Ds3so51yrjgnYrASB3VHWLKiDEq3gsyoJVZamEKgWnUT51tB9gGT7JNW3zwJxAYc3",
  "key8": "3FrQ2FvJ9bVnnjDQmrePx36mJ3v1YgdA2xarbt5vaF4Py1qsA9xds7LpZ4hVNN8o5wsrbxbz8g5aLruWNxpSkRwH",
  "key9": "4cwMX8qTdG514UknKREzxVwc7fofxDHYG2eDHnYwyr4zUHtR2jUFZqiaK4c7ybGBKDYYHC3RrwxXoRF1UyLjJLe9",
  "key10": "4NXTmZnhjNE6JdnDcqiANecZh1UsFkHc2FhUGwhaMRC1ZcsPcQwMTPKvqmxyn6oxr6Cf9UXdkRTWmry1NdCYraYA",
  "key11": "3uGyLKnerPu7Y3UqBDNd46Yg1vRMosAcwVRJnXmuiK9JaZWgC38ZhkGnE3kN8GAixW7XgDisF2cetUNjx4iGyTFs",
  "key12": "htdR6d8n7SQa9UT8q9rCrBEdoT1SzuKfrFd75y482sD8ukoQ99EAn66rvtibVS6zmBkyCKdqvRzf5Eg8wVuY6Lp",
  "key13": "45rzsUfnAZLUxzFTUpjZCUf7qi29LDyb5UUzCzeS33R91KfnPAin6sJ8akz6af4DmaWSTTGqNFF13EZtb1ohVo13",
  "key14": "63Wcjp2VaiRA66CnRBSy1cMhe6MrcXVAdafUAg4SFGJM4ro7sVvb1RfJXdWHTFUh6erKeJMNUjYAjH5KH5XEdtFz",
  "key15": "5Pe7LDnf6t1TGcGnhFdE37rwagsSKzqzPNKN4kLJroGfKoMSEEqVwkXcHha6gHnaQMtKhW8q1a97T9rj1a3zDry2",
  "key16": "58fLZARoyMNeHd2VuWZWgy8zhyfB1UCV5437Yosi38GkznYphgzAWb12NQj3cr1Bok2yykyUuKQcexukWEF1zhyQ",
  "key17": "2L597Bf667QCdef3om7NrnQxWWzmATpnPUsTd7Q28pfjFtqRpqc22mCUgMaBhaRBsRfDNA9VzEmtQHswjNhWyCiN",
  "key18": "KwX9oa3XG41HNHs3DS9nfxYepDV8RyVTDr5A3JGeQs59iHd26r467kgSPHrZwJv5igGYc8c3PXqPdDrdpb3HYMQ",
  "key19": "568pcj4GWfWzhpLtvRW9t94UfXLQs6bD3YiFhbzBriKJJcxuRJJrqdRSUTh58YccPgosv4fsop6sYYetjd6MdUDC",
  "key20": "5QZizcFU4R9EK9c4Cfq5h3bHpmwHf3SZazytVQZZRnW8HCyuDGvPLLaM6nFiC8iWTanXRNEw4ZRKXkQxKRqETvzC",
  "key21": "58oUP7hGaDWDACcinW8R17cKgmmJwpLGm12gLFPKmTcM6EYosdA1xWdmLuA24QMjvXJbfYmi61JcYMnM5NmyDXUw",
  "key22": "4AsJo3xBL2GqXgqaWRjiuGMScBHG5m8Mgz8W4Uzck4eajBjhY5Ksdx7vNudCv6pF2UvghjRHNgpmfKLWATaMqff5",
  "key23": "TkzfCrkMZFT5GYLWL2JZRuxEqzT4EHhGn2zi1q2SyTomMm36ZHWXNzG8RaMa6Jx6sjKhPkuXnnYp4p2423HCTD1",
  "key24": "f3HyCJiK16ey5NrnZoPu9aTvhSco7KpnZifXbnuEwc8mReTQjVFVMpd2EozP9rdR73BBnJZgLYEc8KUtQRESSno"
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
