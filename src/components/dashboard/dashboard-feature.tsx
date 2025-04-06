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
    "4HR8X6KmkDugsJgVhFL5fE4CAgetiq8iBgk7wuGMPHpKBJn1x8qv9ns6LD2Kviezqom98F9KXhwQc3yEfoHjLhPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CH2272quSRubpAzguGkrgBbT1fvUdt3RxWQ33bmTjnnCDzkmygS4MwwvZBhpxS8YGJg2TtSq7ene57dhMNfec7F",
  "key1": "2MMbTbkrCjbUzT9prMcZFHVhXkB4yUtsPpV3p81ovCW2ppa3NAdtifEhgbb5Zvbhm7eYLCiBApjwFau96zB1Lxw4",
  "key2": "3CWa1sDbsbeQSBP9YtMcLiSvHGni7Cj9T6hTKsoMzRWz4U3TL5V3k1x75pk5MWWeWiFXMxQefbXBWHGPy9UZHQk5",
  "key3": "3TrCadiy7G8mcY6PbGuS6dDHHtpE9qG6aNgjmZqc2RBKeaHq356LLxcrd2cXKDYMjPabGXHAPe11NatpGiqdCjx8",
  "key4": "34u5RpB9UqTDa47VdRrBYrW9UKtNo4hCrQzVDxpv9fPQSG879gX7H3Sau6yzJGAJtCVCCyLrnDPjxkwNw1rCc949",
  "key5": "2hyGnq33FtM112APnyrSKfKn982xUDSUP2Sd6rVzxu4WDDx9937N463YMya25BXWP5BZG6WTREzLN3c1NfcSsQ7v",
  "key6": "4oirzcurkuvFCuCq8bCWnfdLuN52ctkFvJ9y63gCNgV2vjdX9ejvEF8XGikCPxbmS4fXynqwjAeDZvTfwF1Xtzwf",
  "key7": "3XF7bGryqcydiMikQn2zat67h6VTX7oDsn21pKWDp3KdwLTsxYbZTacQQWpy7BgjgjgBG7u36dwJrXMdRrneLYBj",
  "key8": "3YozZh7t1MPwWSLAHhgEge7yDrKsg8jmM2iHLQR5PZwLDRBkAixCjwGkhAjZCc5sd98LE66pqiwb7cCE4ss3x5xy",
  "key9": "5TM1SFbe79o889GjYzhX7Ae25cjajzWLhk7W6k1pcSEvTH7RyZj6Ze4N4ok2onP8YBWDNzH3ZFM6otFURHsYihrH",
  "key10": "4xKEahG7E9rwseczcHs7wn4VJRgFvskL7TBDf7jWBTNQPevyrdTEj8mEuo97ovSdteYaMcQfQTUzYzw4cMTzTCko",
  "key11": "4z9diTpYf5QRbR8j5KEFYkmzMU6C6ossvGQ3bZsoMhi9cUTJSWYNWpyV9vyDh9baEYCvUacKoDa9bGqPJ6fqAZ7a",
  "key12": "2GYBFDgyggKKSL2VMJLrHK3pjtW6hpgHkiwhbBzSJvMMW1ZgXEdF2E4BNW2ZCWti4rP9xHcENumsNAcxRfUC6dUk",
  "key13": "59WTJHVDbsGFkFnriZxn5EKJZXvsyGazrX2PhMZSeh3cKzgWK8E7agdxi8ZF5gQi5JXRLqVZdsUTPULA58Z4DAik",
  "key14": "rt5fhrm17q3fPhYrm3djpi2dw9V7PDHGcgXfMwDPKyVhCLdqxMmAmufni6UBrsSJRLzjFAjyQHxBGV3REm54fGw",
  "key15": "4qZBghobFaFkfCGca5TPtrHYj3ua6qGp8SZ1rGiz3vgiHKmeDypUL5u4oYYFrjQaisUUEJrAfM9n7pBnuSz3F4Lp",
  "key16": "65NyvYwQNCaYTw1Mr9ySuSTKwaqRdV5yCSU1zaMNgJF47qS8DXXAwjvkJnNR1X7qx6SPNWVBc4NfMoWgPEPsk8Tf",
  "key17": "3JZPYQKoN1CiQsxFVc8CayFNQE4Un5UnQw61xN4YgitpKzqFQ7cspaLudsz7oSebL25SXXxgTkm1HyAJ1KgcQcoo",
  "key18": "3d6bP51y6CtVGnJzo6LkNCSY4T5VfwjEk25uRFKz6MHz2C6vFv3m5yJS37FHo7be2eB2UG2qWJ8NYu91r47cnuxk",
  "key19": "5FGVmZGfPhxgWUvzYGMfF1FPE9UANs4BwSeSeXciZrfgXUBdUVULmemFPRhxKoUu18VfwGwJ8uWPRZK7dhREUCfm",
  "key20": "49knnnwXEnfcDJfRi5DpjDJdHeZdJgJJr8Tms9pCDL6cCw5jeg5PZeBM6YfXT4uM3r2A6V56WhYLXnCZkj9wdc6N",
  "key21": "4PThgsBVspVtzPo6uLP22ww3Ey4QFNHMpwuK4bLCXWECYbP7fgWAKeSeiUJUSN6Ht2LfGywjqhjWdi3bR8TSPzWg",
  "key22": "4QCiXSWuhQgD9b6rUrFTfGCA6dvU79GEJrVEhaVDeB4XMiGNTyb53Q8cJPBPESdW5Mr78VHdqeeGP8pqi7w1mcAD",
  "key23": "3GFWwCDj9mwWWkYYuBu2WpB2Dyjrq79HPvXNVeWQgwi2vLdvEqUuQiGs1WWvR5i2kGHBVmYzWrWWX8nnxVnhDVEf",
  "key24": "2zTMTTxoXN8Kb374Bv8xvXsxoCfcJLXbwSFNs2c8oUe9uvfPjMM3t2s1FopqtBUKLra4r73GayZLHzimTFvj861T"
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
