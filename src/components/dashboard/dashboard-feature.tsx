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
    "4kBLj234xRL9fuLVbYzBPSFzFocjpfW5es3iobX6c93w7uA7M4LoMjJuMaAS3EXtTYmchjEk7motpvQnbcFXVBkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atHMZGVVbLvFcGJT61QLYySAQpFbhoNxqnjs4Siwp6NaXkhHopdsYz8DSitTLRGmugqk7spi6A6w9B3v3j3oa6B",
  "key1": "7epKr9aaYjATAQKNGPyeJn7moexMRS6ny1YACULeokzdbbLTaUwbELFACWac5LcMRNurtZoFYqbg9LJzpRAiyGB",
  "key2": "37FvgA3AY7vLRiFNzwsiWxvVNwez1Eaa3F97D2PSTktUKdgFrmfYy8R3wS5WqD4d1cUcTrggNAEGTAo9U9xvvMZw",
  "key3": "5aHqYE4zTVVNbUthvVKefZWhuF9VgiKsknmTXPqkSDCubDTTs1cuuufugVh5fHKW1hHcrUJcsFHpk15LPxRtnBsc",
  "key4": "4XnDUVeYD482iXs8d1VHDw4wazjuvW3xvJrNicYYudywyQAcRNGVn4nhT134kUT9An7EJanenA8VGsg2J4gDMz5M",
  "key5": "nV29nWsqDQWjqyRiMqmTAy9VjFAxvELsrsTBtUKJBNnJJtrEKK8vXFWHzVsE1rfht41DqQ2jEDVXQdMLRXmyitT",
  "key6": "61MEEeDnTdiUvKHZscSxCz13RsukhXAhJaBPSo5oyNHZnqaGTnXg8W7V5dCUpw4kAw8ihEEL21KXsWTpQujwX3or",
  "key7": "4envt4CXnkXZdg1ECud5BeNZDzzviQcZn8r2gPuB2VCZ4TXH5t1CAz3HoqsDNCQj7fCB84nAqMSgFjeKm8VbSsoo",
  "key8": "3DW2dD2xqdv9vJ5P1bL6qQ7WZpTZgNadza65Vfn3LgobNgqzRHykPCRQek2yXe6qnRQuTq7JApUY9LQAy5sUGb2d",
  "key9": "5DDCzdgA4nTFqwj2uRtmTynV8XjdK7Zdf1F12cNJnUPZJEyzoiiHLfwx5zjozCii1uwWToXWcFwAtkkcjMDqcuoL",
  "key10": "29tzr2PLSwj4iW1uWCgHuoeDkfnkBG9twji99FF8vbXKSNzLdz8SR1jWsoyjiv8rV5UftPPgGoEZYa7z3zuHeXk7",
  "key11": "3BjoXywPBnJZDFGTcjW134vqbbuifNH8sBbpDvfrWcK1A3ut4qeEJM3pCvG7iSvipjvwwx1qRuzAR3rNJENjy1qq",
  "key12": "65S9jQ9Wt2NSQ2Pm6gU8BHWfzJEqjeuQ1N4HFUDuGbBHnodmpooDHKh6vRE5CtpGty3UnhdxtM2obS1JM4CdnzAC",
  "key13": "2NmZXHCXFibfYdK2dyHQ6LuPm6TqvUfDPHv8mZiFy1LGkhZkwrWHpsYxpXdqM84DWksGdggHSqeiNBHd4v2GTzdV",
  "key14": "Hs4V6tFCNihqgxW45DCnqroVym6b1eVRmA9Ysh6Pxyaeg3vCqxByrZTM5uyoS7dhemUdiPnH6LHVwfzDQk6zubQ",
  "key15": "3fCCQ9Pwhoe5jg19zcHYvEJF8m9nWZKSvm7PB4bdYuovFCA12ytiQSbKDHGjDgxCbBtAjzrCFoquisW5g64g3oXk",
  "key16": "4s68Z1u5getokVZKn4Qfc5WY34QCcNHivB8b93jiMyo8bkVSVZx6KtRAC29za7pHoNuxFTFpFjYQG2M2Sy29UcmS",
  "key17": "5hZsmgKQnk7vMfHjJGNX3GTZPdVrTbfi98hfQyep8TAPcmKzsEkrxtNTDGvpfNKuh9Hz3YBCSBeRiqVYW57avnaZ",
  "key18": "5zkiTHoemY17YL96677udrSbf6gNpxhjyciGTXiM2BYSYitBS43Lgqb74jPfVqgpMiEnLfRbQLAnnrMv2WzHP5BX",
  "key19": "mcFW7TyXTLbD4WN7HWvx2MnjR7AjrPTPU3MmB7Nyj8jQ1VDTveD8VbTFT5r152SFYm57PyfhYWm8gExwAF2GGRA",
  "key20": "2hXemuogkKUkX86Uj9935NcL3nFoZptuEESfjX6jp7MRp2WJxuFGhZTXTLCUjrrzQvBvkotpjHwnmfEwZywpF6zi",
  "key21": "5PpEshjgACV8xWsoJonvgRV9q7jDxPXqbSy6Q4ajsMaDQZKWVXUSogM1HgP3UC81WN4HvgEVeLdUAeYrihDsYhj1",
  "key22": "2xUHpwHp8MzKUvcMKTWKKSpqygZEj474XiJxcR3EyHR8kaWqm8xHWy3vcPx1mDPoXpd1N6xVWB1Tpp6aL4Nag4V8",
  "key23": "3FTx3yhQo6J63eyLHYpgTcjd8o9MoA9yg9sDkmquqSJqeA49MT63UiBGSd89Haw9mRq3SFN3U6z4ffrdHA8GbZri",
  "key24": "65H6cPC1BdzzPhDWHpVFeB9dSWmrU4MyVPogcmaR2USzLvBMHsDscDSc2HPFjCvJizpjRV1oB4yg9h15bsJJCpN8"
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
