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
    "SfHy5HfLmvJYz9ArKzusDHc6hWLuPWpsSkcEnA4txAPrs7kp2Pgh1iMrw6tkwduPyY7h2KHAX1qo8nXndtUpTKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBwyFVTkP6h9F6JA2c4dCckZdgBjy7tEGsTYuXJ9Z8aDq4o9P6ycdXjFe9M7eSDwwvMr6tBrcyXXzdYcM89az9S",
  "key1": "4op9xK8o9LVdSEZcWfrVTwttEsgrJXzWmHoXvQhw15Men56iE6FWZJpCHnYv5DwGmKkksC1tCNDDWT2x62vDDrCQ",
  "key2": "3QD8sb42EKi17mv4RUxASVU1JnUd2eXC4v87LuEGDuWeM6uyGohViZNxyRjUEuC6qBnRLCo18TBncsoRfoJFYjb",
  "key3": "4TV2JvNW9NgUX7czrvLj935qbmynEf8avU7NQ6y4TMaPfh1t5nkpzSBAbdupwuo4f78WGP6YtVETuEEPA83AwHgW",
  "key4": "2Jmkq5vwd1rp1SRHuJeh2jfF7bJ513dbxAf6LM8sPRZtxjCuHcFu29HbvFU1YbTM5rX1VGRVHzaPSTVWgHZiau2N",
  "key5": "5v6oDNdLpRWZVWLBkWxGb4Hy95YPLyjRGWGTWFKUsch4k3mQfVuqhTUiJPsLC4Y43gQAQabAjRWNXyDtj7TRGzDu",
  "key6": "2DXHS3AFFpv5DPh3g9Ez4FVxoaB9Q2BYXnRHQQfAaHLqkpC1FWfG9MT1inj4737xzSytxpxoc4HSucuo5YExVZd1",
  "key7": "xo3bnyntTcN1gUyTbkascjcZ7KszdxiRj8hyf5qMpYU2sd6MzTrYUEYjRCnwNpiUTYvbnxPxJaYy5FEHsAnoiaB",
  "key8": "3WJdr3Ctvs39Ww9GKQNCBL53r9XqGpLkqgaxXLhUDTtg6NjYXVLe9TxkKq3t3WRHqmH2kwq5b67NezjMhYPW8Gqy",
  "key9": "uX9894UFaYykGKcjrHWg9aMzbbne7BPB2DNUQUGqfEmVRAButkyNtWNZef5SdMXTvqGGgrf5PNzUqm5pERpRk6f",
  "key10": "4epwM3eukmygK98vvfHGWdFutTy1eMhxC8UAse6U73RFAbqsjZesq7EwSNBUNMy9kuqgydGaT6p94iaaJ37PwNcP",
  "key11": "4SWqFqCttxvT1u5CcA4csWa5mdhGG3FtSdZ8UBWAscgDhP9Q3no5vg1jc8ipEVkmTofzLJaNYQWa9pb8mEcuYUrS",
  "key12": "KLcxHzRcmRq192LHaiXnbxdBKaV67AM2nnyT1WRAk3tDuTenCaoRHrSzVcPcx11ZUxnb3VFZuyx3qpdTvsMwrxJ",
  "key13": "448FMScQ6G15HUqVdtuwWtV6zB7BMGcm5t7BGHkEQL9UJrR8Ti6U1TnnWq8DL6LuQ2NMLMGFgSRSR3brRyYPffNb",
  "key14": "azRnZBfwBb1RYhAASZYi96KR8Kzz7SuveE1EWr1THwUp6DWyWPpYnthzxcXKrieM8aXp87wg2RyEPRW7a5sK9u1",
  "key15": "3NWHG7LuaMzJVgRK1CeCbce9N9Qfzt6vHg6ouNZDciAn78TVNxQCJ2H12UbKrP5vDG4Tzf434iEDjpLwXu41ftrR",
  "key16": "25a915vUYKPtfUfmvyQ9psHwQxgTwCfzMuMpQhtgg4WEDbJQ5apAgdweXi1xPhB8WikgqnPC4AHKvdYnqvsGzbK2",
  "key17": "2sgsfDZDraHctvogZaFSonU7LcDnBNm5mAKrszyPnRtgNpvcA1Mawz4nt9k2c41cH7jkg3smT8Zt77w8Pfav6hHC",
  "key18": "7JAJJieB521YMxP7yDqv4oUgKBuRhc8M8uta2wAHcLgCFfj9PZ61QLxvZ1voyh5ie39o5K8iVrL8efeYTa8StPZ",
  "key19": "2XEtTiVso4k9VhnhoUKh9bMXfwz7LFgmRfeoNuwHp8P7ouPfCgrqxLQxU5LpJmJwD9CGFEWu8jXnPQNbiqc2pU9Y",
  "key20": "2FUCUKKU6MoNP6ATFWCDeVjJZfznc6gbTwUpr7zwunUkcHBniGjWP99Dm1kAJY83XAiJhS5UYNZtoGdL3AaKU9Hd",
  "key21": "3q2Zp7bRvvKFEPntZPerw5jaoiYwskZ94aefxBcBidTYri8yHSjFECL3P1QzWGAETPZ9jjfqzzkEWiJFZEEG6YF4",
  "key22": "2eSp1LYwdsY7XXnbdAaLsAZc36VNY4r3XNsuSi14cLfLaWDabD1vDQBVFfPCW2hwZrt6fAxAwZyq7JFfXkHLunYL",
  "key23": "3QjV7MXX1jyY5XSd4p3f5Z8M4obpfsHewL5HYUV1SE2LfFo75yq1GSm9rJjwSfUoctPrWMjJTvnZihUt6suX9HDP",
  "key24": "5fda6NMdauCzANohbAf4nASFedHRxPemiwLrtCfUzxa8ijELieQCsKyBNYUXU4N4D7d361futLKiyxFYjUktpFSv",
  "key25": "3QRNYan6ZMGpWg8sgzz29DuxwtpDwkPT7YaQXyL6QiLM5RGyvuhWWWkc6bUbjo1YEEMcqHRxz6gDpM2xrfv1mHjP"
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
