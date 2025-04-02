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
    "onjtAQShz18kJQQ9YsAzX4snAkk1A6RPS6diucragLZYywiqQCvajtFC4trMCDKNMXxpKFGS5cBQn6QgLbwQ7qT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51vb2Cjiox6a7LSNqn7nGBjkgTNLZpsoLTUtwrRQ1Dwao2feJueVK7CZcRujrbp3nct2gQS2enxRtd2Z3taT4RUq",
  "key1": "2gKPzwyhWFuxtrHr7C8ZNgGbd8yP7GFyvc42jooByHwqJvzmNLyfRJaGVyCMiiWxnzi2WXdzaXKr71g4QGUfPmxx",
  "key2": "DFcAaFui1wMhQiQuPs8sgHodgUWvG4rE7tn3zwL9v9myUahCcXP8jib9PMrEpcMAwTLM1wie5sTxykMHGEtqY1m",
  "key3": "5U7TSdPunpVN1i2wMeABEptJ7q79RFig7dubqMYj57J7HX2wWeQCCdmC4btZgbtaCfqN27EZUVCrhCx7uLmwMif",
  "key4": "3NB56NTgnv6ynQC52J28eXkDtt7zDJrEbS6JBPKSL7qCeqcXtoSGawqzEQxgwNaWVKpFBknEzFY9W649WBYYDffn",
  "key5": "3WhLQKgqTuxZUwWAJXYrtDL6DXGUD23Rshh7s5fXCZ8XJTqUDHoVXw3TpQ6mYjrNoHWPhvk3YxaSZaPSvzRaB2Rm",
  "key6": "2KLvxdkzFQUymWoWuDzr4yMf4ieTQCRC9i3JQmEjtzagV8BTLipRwomqerB5Xforh3rV7FVBQjbRKShKWAymQ3V5",
  "key7": "2MBZNrkBSMWgkPvW2d3t31EZg7BcyDAy3R2KzVXDK8CUKkPsK5GtJpctWMZi8EsMobhE1FCftvgPAwtmQPecpcXd",
  "key8": "3cc7o8GkB7Gy7Hy7g33D5573fZNLxhhM8KqdLLvo8b4wmasCfM94CNEzq2B1DC41RoLTf95MRbqXfdGwHhpkiqv8",
  "key9": "4ASXtGRHru9zpHhpujnvcnEGzhkJYVCfkbsy4ja7Tj2A7PuR6LYP37sWYxHUCdGLoN58QoUy8mPju5QhqrtvCFSR",
  "key10": "4Kz32b1ETa598UNMXUrgf1HpJvN868iGMKYyh4WdPrW8Hd3tQsmLLjdJnxeufMYAUpUywf9CD2aRQUoYD36QhFTX",
  "key11": "bN6dmwhGKaEmdKL11fMt5CybJocqyeLudHSRH8KnHC9fd12K25Tkqz2ii7hiiCXSEVHT5hss1oMWPmkYhhHYrk3",
  "key12": "47cUphewANYaCfDjQjAT4FwYCtABPUknDLqQhJeCKjmVZm8Z8TpDy1xBSjQ2uLmNBwmndTKGZPr6LiURQrhriDg9",
  "key13": "7LpmhzvMqCim93gZEGMyFvYknb9How8LPtTNyVEzqz7xEZBnS6Fpp4eaKDXcstPx9SArwRwujWymc84h7aD6Sse",
  "key14": "FokuNPyveXK83nB3dAizMnJ2BY2LU7NQQXiQRjEoqawC52dwtKmLW8VWUcXvhhCagG2NcKxDE8Zne61oo81PQrt",
  "key15": "28bn7zFAiEVChKVDPzr2cWcey8suaG1ea5Drb9pJCzYrECXvMBsSmWM1pRZnZB8kcYisvLNAzMvDrsdwGqzzxm22",
  "key16": "5vUjhKn2SMyxD2umwFjJk3sjqFKyTXmET5kkozCvUfJs1Mg8VKPjhF4aFSmLJow5Ta1cP5uurRDFvgm4ynp9tbcx",
  "key17": "3cNHyUrjdKtaGLNTysdWbPyd1Faz6C6JGSiuwPj25hUB3otHBg38qDULKFzCTeqephZhiAhCKQ1BUxkRZjjXqAkY",
  "key18": "32mefYdtT8GB4DgE1f8WnYn2rWJ9Wkd2UpxKyoXLje9LKf4PsPSb2JsgWp4y19gPAkhVeHZPwbiVTJpRaVaX88km",
  "key19": "9C2XoWnRxz5PWEFk6HuAnS4BFhenYXx2tEqDWtZtJRiiQWsJzhgdX26KGPNaYFZSwzVe2izKK4VAwiMjSB15aPM",
  "key20": "5Yt3QdfXcYvehHAzvNF1wo4RXRqqo3c5118GjtW3Gsz9e6mJKM3zEoW9z766r1TNg8w836upQb9KZ6jpFNU8qv5K",
  "key21": "5hnygfxMPas1QDWAeGQvZmmXuMyrTyFWW4rfBDV87VyeCr91Sf8ydfAhnR1B3akZwB4Gtxd6hn5MyuUiFutXxSfc",
  "key22": "3Bxbn1NVpcVFrc1QXLK3oc1y3KosY42feNc8e2NoVjUCGFicvTP1V2SjhD9ZgqGSGxSswmeeVEaL1fHTp9cdQZU4",
  "key23": "5gLmm1jTVP4Svp42bbboX6itrssxpr1ZAcgrJoog4S5eZ2ikukLnLtrNBW6LYTA56Hf8m2ZDw5oyQJpbfAPGPGuA",
  "key24": "yFN1AysKjCfVj3nfDkX4VqMVNhPidy2oyWFmStbo3zF2UH5gh7C9N3HTdrKMfQBpLsnQrmbLVs9fFZ7p7wJfKhL",
  "key25": "39UmMgf1v3DMyKw1chraujYs2f69tSh5KvwY2nq26WoSkuuaA9UKyaR16n3ugZi8zsmAMw1CGQacJm4MpBkGEG2h"
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
