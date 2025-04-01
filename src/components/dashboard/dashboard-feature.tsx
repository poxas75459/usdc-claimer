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
    "32JdBSSzboCdtBkCAPakRzS1FWd2wkC1CSCA3N3oaNmzF74BbTfuDhAyjRGYKxmt2EWhHZvJRfDDwbqg39zpZBEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jWeaWoztGrw1jf8vFhBTnjbFV3T4sdAhEm3E1gZyW5ieFRyKoiXMqnyZaksmJ3nzo3xGiyrVvjERdoRkJj1XXh6",
  "key1": "4bBKV46Z8mMV54r2d9KwJpsoL7JrvYQpajUVNxVPk2AXHXp1PXgWu3THj6Wgi6niRXzM9tUVw9GJX4LThoXHZ2hD",
  "key2": "5A4Z9eHKxqK9HxZfy5ye5XdmBMgUZDXajbYy7McPQiW1Ymcg1GxHCfRodykVEmKCYeaot7Z2cQYvFa65jaUSrJiM",
  "key3": "3YXDq7F86NzFMErtZHUW3aE4abmiW46Ut8tezCNQrS6CCga7Z3hGjkN2KxkhqcW8WDzerFZGFQwRtY1fMDA3kzHU",
  "key4": "4Zk86F2f4ioQgrGQsonnhpVXikJQq9iYP1tvu69d1vTkuQsHm3tcZmiP5VN4f9UtGC3oPmk2jtaeG459jiVuViM6",
  "key5": "2n6x9i5SsQQgZnf16yUTKw75EVQnqmSru94VyPaWrEvqS9X1j7ssM2A4mmAtr2yg354Fa8BjXoV1oWDaYnRFac5w",
  "key6": "5Cjms9Awm2oF1vQENzQZ7wLWbX8F2s9gmEBMnp3aMcmjsg5cT6M6vv2HmhbYSaPo5zaQFqkFnTwzAvw2WUGTdF7G",
  "key7": "pDTP6UMg1YiDeUjVdUPM3YhC8NuutQ1MUEn2GUrx6jCcFwKRAufbiA1vkhA9PLhsFRprQJxSFLJvCkENCtFyYxF",
  "key8": "4M7r4AZ9dv4vY3Fvzh1EDdmCz2yB9e4rRzMiBGqiM5N8AbybNWVY2bc4tzc9dWPdF75HYQ5V1C7amVwoWhwwbcHL",
  "key9": "5K9zgEwGwL68mrkypEXpUUD5e8QTzLhHvyW2UikDWC4M5gixLhRgFkCo6tpFMr3HaCkz3j6WmB5HyV29hnuFSSBu",
  "key10": "54Tm6VbKpQkZ8w4JnS56ndQx3LgMURNqaL9CjLbjzas5mKRLm2YcHHe97xGZqoaxDw1qEtSB6HNBK6oV4kF65dKX",
  "key11": "48LbHsxgQjJrWrMbP94gkpCUBwYXM5hf7pCvG38sRq42a4A8qFGUot2Qty9zVXJB7biyPmDtRyJvgbjHyAggJDdj",
  "key12": "2t7CaM83bcbkiagv8cgghkSXuQWJr7MMP9LwK713JWusAKPpstEUqncZhpbWqKscZcawSjtHWK69wBTsAzLMoNGs",
  "key13": "5hW5GtwSdJGr8iUtAUM8X7qhfWELpUxibLFcE89GuqFzDt2pebdTpkkwuWVMWYYt1hL14Eu5W3zCBpusny1tNzbz",
  "key14": "5VacFT9dfTiAdDX5vYEx3man7BpepDcBKJMC86YYcqj7b54MXYgH9Qqnva7o3q6885f8vETdUHjXbkL23dMvns4A",
  "key15": "4hwwSmcrgnzNYtTzXcgKDPHSGSrar7e7uaWn4B4z6oUV3eBAupxuqbci96awrcxkCEwDy6Aa4pLvAYU3TH9zHfSw",
  "key16": "5TBCcw5WXAoJ1qfmE7ts7y3h39tbo5qKjhf78CevLS3cCF21NFnKGCgPoabKDoiUiv8qdy7YGTFNAqC92cAUaUUs",
  "key17": "4bVMZ45p6fpPh8ro1RrVS5cBahyLQniEqsQntPY6xNhrActg1JRhRZ5AmRJt1nw3AkeDvLZzmiM66UaSrQLLNTwd",
  "key18": "2tZNH2N9oQSbc4Z34KSXjJk2Uh6VowKNRrXs8PhbXA6i9d9tuK63fRMY95fE87etyytzudqLDvnYaHK9SCq4Bhsz",
  "key19": "Uwtvherewpfe9Xr4SC7yJGg3TCxW9zRskLKoPe2RY39QZ3iEytUfoWnpfRiAvJsSXMpNWN3r65RKRssqu66t43B",
  "key20": "49R5PXx8uLcSAd6WXRygoDRgJQFLvUsRQKppTXFqwKYwqnqKFscHDBHfMyAWzi1zdAJTSZ8gy7kdALUqozQRFSdB",
  "key21": "4C5ksXKDSBF3kXNtKQQNcCEUpA2CYLdLnaW5V3T997FGRPunbWVXscJbwnuGQrYTzetrsT1skHt8aNDJBNp27fw3",
  "key22": "pY3Fobjw6JP4fYmCrJQVPDa9q4mdJrXM3urvXXNpGjjL7icE9N2KFeooE3wLZ3qCaFYb92i8WEXaqeozeMymVYG",
  "key23": "3e8jmcupjGHtTEWBjebqXo5MRH8ufhec49tkR2yBt8MCGCjz3CVinmB2wAW3XMv3rD6UuQfBbdJLAfs65JjoRN5m",
  "key24": "2xzELR4VUNcpY4rkKcQKLayu5g71FhG1qU1hPz1bqCCKwyCi7UiJkKy76mfAVF73phfFPjB1h5VzA8Jso7bJoyq3",
  "key25": "Q2J3BGj4hZ4yBaU3sv7PJE8VVHsKeyVgsei3jy1mmzL8hGatP3ycuPa67CUPgdHLMrfDQbKyQfZgHg1D7uEeyUp",
  "key26": "4LsAowanDEzUHGxeXdfH4o5oU94yhPx2x4r7Yd81WYAgC21KYa2MUbWZFmKXpLsZhcCZtye67iw2yGuXPp8734Aq",
  "key27": "4nGdcS28qS4U3CNHA9sp2LreZEeKqCLvndbjJsbezkwZhMJqxyDvVubRBXNZq6CTMyaqqhQEbdjoVgMoX8aHCYyN"
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
