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
    "vT1o6aARpSYpxqamiSATXhdDmF5gSvkHbx7LpyJt4AUv2xnFGkzXxdhpaFSQqmHCh9bDfSxXnDKEubmPBH78Lcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hThMwVPmjQFXftVEHZAPhG1oyKrJYZdT41eVM3fdPcB28cWKo6pau3YD6SCS1NuPJDap5hw5YzQu1ysoc8QtTS4",
  "key1": "4xPVXuiK67VpmkRwiopUybarsbRUwcBRphaao4gPm6ratGe686rS9nd8wFr82GmnHabpi2LricHNdS1DKMtaYutN",
  "key2": "5cL8kp4A8osFmmNda5KSgS9fF8MawsHQKEMPcCXSHiqHP2MTZXmoNHgxsiu5E2pUmB6SFuCHVvtcT6oMZLzHBPjF",
  "key3": "5CnX1b3tnnfB9tX6m3VDanuhmVu5496xx3sNgs7sYRg2oEN7NpRhCeokMm1x8xYj45AjwVAmxoUgwDmEBN5FkpaW",
  "key4": "3Pz2dFMTGEL7BghhNVgQz7UqHnANosC9HZwTADSGmqdf4psCyJhf6tKaMnYLptF8tByjd6yByFRgHwQ8w4APqdUg",
  "key5": "A1LCCHBx6ity5eyQwBNX6a3kUgm2zqfTaXv9xhLoxYNhRZtH99D2DeFadfebL14C6e2dFmCNtGVkDEpfs1iMCV2",
  "key6": "5mJi9yjv8kFFsyawMNyS8KNuTF7pQcYdidNWQ8GmmjSpbYFbTcT7Crud3khW8CxZG7uZZZftqmWXvZir79c9qGs8",
  "key7": "4TteHMCBpJA7ndkaZCRHrHmXviudZN9KUVThSrxM5ii6onEPa7ZKTrtrrKVVYYyFKuYhfvQTDmcDdDyAmLFXKsQw",
  "key8": "isXQHTuRDDQfxmPP2qMB8dHxPhqFTukA5p8Y3BbEmqtgDUr5ZULNWnPzju8u2niojrAf9gPKNFLgAjZCGUYZz6a",
  "key9": "5PFUvkoAWXtzT5MbzL1AJgdiajoCBX6inrGG9n7KHXSpXBN2cbg1ghrEHeg7LDr9qf5uP9EANYGQ2vvpLcJSNVm7",
  "key10": "4JP9SGvZpRCiz7rQxuf38bTbSsrwpFKMuGs4dR2fZBZRZLhv2LdEfGHod3JSd26KxFtJrbUgnBqS7XpybyS8Dy46",
  "key11": "41QxtbQAQWQeBhqGbxeV9v2nJMNqorNQ1setwXCTRm73fzK5Ey9RtsTQxUViq9k1MPt7vFD2bCoYxraxsiHoxRFQ",
  "key12": "4tdc8uLs3ppTLt58fwowV7s3ukhq5i1XZ8y7V3hLz9sVsB1zrC57KD71HgrPnXZLPDzirugEqM8Lpate2shuuSLR",
  "key13": "49RW3pB9EYQmZ6EmT3mmDSwogYyDXC6gHoUf2Wefo55JGGcmAD57kBtLJrG5sEE9sMg7fGhCVke4r7ANTmpCZAXk",
  "key14": "2eWY4kHWbP93NLjZLzJZuJRjgFS16ctfai8c97XkmMzHm3BuxKTnHWjPkW7168dZ59NZLvwaVJ3cjjWfgaryb8BY",
  "key15": "65cr3RA9UAvGPLsP4DJ1AFXTwRs9e4mknQvVnH95NmyyYJorTZsaTTmuVBMvx5SVUujho3JpgcAtMSwvvk57juBj",
  "key16": "3BrqGqBAVvkEQLrcgpFXUG7ZtdzcrkUnbX6Rwt2CdtXsEMogpfbFrZxUFsZJLJjPouUeoNjzGVRCh55699hJKVwr",
  "key17": "4D9DpbRgzKw4mUc77WBjq2SrtwwaMUrPV5j62HQXLZDFkJCyVjP4aYDTHYUA8C4Xvpo2nZbADcYDUWUe3vgz17X7",
  "key18": "2Ri4QLP7o6ViK1LnqoToKqhh9dGeYb9wFgQsb1AoB41w3HTzV5aUdEStB6DeVxg99PevzCZokx16AS87H6uoWcqE",
  "key19": "5K6AqmeSzYYVLryVuWcKRhVwnDFgbwCfrWdVGpYzJg12fk9AdrWsXxdkhiZoqzycyj7q5MsHoLMq6tKm9zvvxTNJ",
  "key20": "TMXB795pyTXg1kKwAtut3j4ZHoCeWqRSxk2v9LV1Hsg8FXG9EhtHsZA6fDGK1hnN1ZUbeGHpt4fcVNfNWDyiSQi",
  "key21": "33i72sTti8dfeCfkQifDbnFRYuJhmY3RFuBURS2TriNBQuzTpcdPVRF6FpWByQi2cbuG8pMzwwWiyoYKRBZzvTp5",
  "key22": "5YyBpqLnm6tqoBydkGg1wMRK4MNgGGYnwnexGwu7F22KVJpyA9yW75bPskg8AvsSSa5y45bPfazcLmNBFYCQo7L1",
  "key23": "4p7twkQd9Ut6spHzgQZf5TSpneoeJ5md1YyevdADAiYSQPgP3zhobK8AwL6K3UV93xKHkyeczGum6fjZ8BBkW28w",
  "key24": "5JrBVqAaCrgC5g5sfvVWms389LxEUc5ExaPypG5mLCL8g5zCjquZavyF8EXx8XRVv8hDrEcZvnnf7TDUayr6snq2",
  "key25": "2xtfvPZf7LrSNvBBKbxcosAS77KBRayJ7jkbWeRd8hmXd4uy7XeJQS92kAvv2h9afyhJkdi3SYHZpZ9Vdu9wb7wf",
  "key26": "3btuG6vwu5rqoPofaW7vBZFo7egVG5WLzbVaSiaunqae8PvcktLZmWoxkPPdWnFkAsPCS5mTzYuwMM4USGGZV2Bk"
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
