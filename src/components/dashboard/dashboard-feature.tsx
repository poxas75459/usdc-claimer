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
    "37jone5otqibXG8WzsPga1JzK1GEqLJ38j28kCcoDrt6FsFVduasvVrAKaT5yqKayJRdufpwTPwkSWQorKGTf55h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VxXETyQK129xWGkzrsCJ773g7gt3jk7HcFCkkMBGC3JxW9x6PQWsqwFUPHhd3Tegvmojvm96QWS4RjYxtYnecQi",
  "key1": "3m1q9y1kVPjU7zaDU456pVcaeMgsBt2vhLhdCSJyjCSKKZFqMrYmGcGYWgzDcgyEUoohx4gmi9BTYACmrZXWk8tC",
  "key2": "3FN4onKxkrPPLRr4xgh23taDdezyoUNBXYs9eTy4Luc2gX41M1ujYXHoxnm5pFyJaSQfwnSD3sjwyo8FfUTxwFFs",
  "key3": "h5jHmxPtzYN8NArwKMgrVQUKjo7Zt9i3QuaKuLEbL869SP9XEh64SHrQwDqecinf41BG46Y5xLQW5qfRDa3ksiH",
  "key4": "3Xfzj9u8fgP3idKmskuGeucJ32YXLfmhrp8TyfpPcFeY6zBz3Qtg37YSWNVf866Qx7VuRz4AuSiU9gRRtg9YDfJe",
  "key5": "5htprycD1T6DywdYd7jHUkf1eWHadkGhsneZ4hsQ6Gz6Q5CXHyj4y5e29AN2U39NAu3TNd8DAPMmFP28cA7e2EP7",
  "key6": "2ejgvchm8cWfNR6x1inKJekXbGs44PresoNKDfZdyBQrpwgeyA4gnpjG1DEeuRBHqSXSFMutrDHdEaPRsW3ZndW3",
  "key7": "58fsE1uTn22tQbEBbZpKc2PcjiARu5XQ9X6zco4SSMJztFRJTSQ1Jw5PweL1CAbQQh98X7x4mdYwUTGUZxTfcFHo",
  "key8": "2vB9X7538xZDWbBpvyAqfdMt5XLkZH32xQ1qXkZzMRK4SfxtpKciumu8JnGQCAmbvzmsvyi83eisRJ1Y8gX5KVDF",
  "key9": "2NQtYdeNQzg6VvXB9FwH42NXPQT2JS338irkTNVwb9Vjh2j388F7QCNRvhWQQphDjd3mXqgadbCcDgSX6ghaWS6o",
  "key10": "5qak5MtdqRnp8ybha9XiByBCsPZ3HdFYLEpgCWCj7Pzymf7BcDbugbj3HWxz7hnCgsAoCTt9EoBCUkAMFNpKefWb",
  "key11": "2g1HymVtJgzTbiGm35gWV2KFPsu8NvKHsst7QuSkZn4mb8mDCJwyxVkzge8ZwSMnWEGGyE241yFsw71vEbhkLrqQ",
  "key12": "3a9V2vUWUE8GdFxEC8kAcseQyxwnvE3paGxUdXc6uhWX1FtxjRLpJiU4JwDu1ZVwwgcezEeJyrJg3PdnrbcT84Y8",
  "key13": "yCXRJmYYqVHxfScY2JWRcf1op8mowTzapvVbAGmPUzeMuDPxoPxqJUP3Gsq8DKDuMGtH6JN9egUz6HqVH6SuYV7",
  "key14": "5mG12T53byMuVBtjqsPxTifQoRmBcJmUmVVsiGdhcGph6CFdSkV2j1nBmvCKYAVU6RoqYYVUryVNEvTXWAfaa1So",
  "key15": "3zEeginLVAeurjJKCTDpLJbb72UhignQLCfVLmLSL7U3cAKnine9QivpspkgatY3Mu3VPzX3neks5dcwqtuYvAYJ",
  "key16": "2GmQ5skLvhagEWAux5eNPmGfeVtDReS2DiTxDTGro55Nmpoit4gV45HVawBqLw7qmb4B7ve4p5sT26qZLMtNqnSA",
  "key17": "Qn95yAXKTV7BzB5XR2AKTgxK4dmx9i7a2hX4HWhRpeYtmQTUdp66UyejazscpETFb6LN7raytocenmQCtZWhVcE",
  "key18": "2GasnfT8PsyMPJpd5AryXtjz3eu5PzXAK9ZY3rG5WTCgqdakmPrzpmKpkzASp9CuzMzjmoVXXF1igJR5AFySh277",
  "key19": "fDTLxqyWypvjW7TVrsoq4aQV47mGFaWcbZJLEC5dWmnUecUhPCiEJryhtwJX6ryUTVmJoet1rxSejnjynZHkJKz",
  "key20": "3tDvFtJc1rohvKU2MAt22iiZScxku4mPWhovvc5DUMpnwuYY4sDzb4T26M9yzbb1KGfeyu2zbkc6HVoXZZwXiBk",
  "key21": "2iw9X2ShQwdtFhynQSHC4QfczTN35SnNe1KjqxrsveAGbEbETE3eivCz3KJn1CSxJ646Cfjk48hZska1yFWJicop",
  "key22": "21AQDFsgNmmbmmcutL6PYvFis7WwHnSJCtzxC27vvLZDFriouywrDrduQFB1KJbSvyGskuqPhSgx7PoKE1DfsMQU",
  "key23": "2NeSU3fyn3bDgzKk6ZPQ1x2cnvB7noNFQajX99nMrQ26Pe5tB7DaZ1L1tFkvf3RBFCm5JXv3uWU4pwkJaHENSsLL",
  "key24": "5XwkkGZiPucwmfSC32U5NC4gP1EG8JNh4LGS7HiZssNPjxPvafLd2DmKTyWis6NLHALSbYoanrNGp7KtfSExqkZR",
  "key25": "57NSFUC7fmpPkqAEJcQTiSfqzwCSscy8Kzxf2rsK5H5a6GDCQVs3sPLbmerVDwVcX81FvX9WjqVf2Ye4stiSJo4i",
  "key26": "2SENuzyYzfPWwxV9eTnbbK65JrbcweJSnFTzuALEELuFUeHdVx92pFsmcZ8zrydXdvWnJaVKy2R9BbpMF1aGFY9K"
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
