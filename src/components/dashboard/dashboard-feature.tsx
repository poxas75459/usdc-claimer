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
    "34NkH8KxP8ZCgT291AWqb9tH2DZ5CeTkyc5MmEUNPBQzsKPFdK8Ff1JZgA46aQGyYBCvFMmrHPHeGgmANwPEtGZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jzXaUnzmZq116MTMcqcmeGvxv6GRxzNj3mCP5Xi2bhUS7hBeRoznABYqSS4LxSKM9pAPNJhDQNKjtC2chWUMFM",
  "key1": "V1z67DryBUvCsaSGKta5LPGq8aEJeC1Qx7KZXPngAyagXyiXp6b1ApEdfMddjsKNQx9ry8NG2vhyjRMK9YJQiDJ",
  "key2": "5HhNos5GYgwfLmPMzGRPhQ96QQDFTaYsivov1DXoXCsi5owhQnJ7zLLGNK9LxnhT9aqoisvMrmCk8WQJM1HXmDtE",
  "key3": "53uwdQVnu7rucZK6bpVBsxbA17LGhYiPb2QE2wDPq4xzyTGR9ZnyUbbwk5xM3CDb4UxuU5tnvSGGmntdhqnr2wTv",
  "key4": "5Da7XvJMq4f5swp4hR9ZiHTENXnT4M5XLoR2PyX7JAJELRSPaQr2KSNSa3SW4sJVCjZ5yguwVUFoEtvdA9fAA4tH",
  "key5": "5pCJF2Rqx6X4e4WM1VNCc3qc2dVaue5L7kxVQfZ2HVav5cnNreRPMa4nvvLyiS47EDko1HBuQ8B8wtxjfegJKvN9",
  "key6": "4sKj15kVe5U5P5NwUg7DZsfg4Ei3BNugCVvNcYTTgUxX58ACZXoL2ACUngqn4heGTij6qmW1EYWPXh26iYdfTaXy",
  "key7": "2FJcnfsFM6XCuf5L7mopz1FMnWm5FtjWcqWrfSZjwGkY4eBA2bmEU8543pKRYeZiAYzwUSW9yRd1fLWrqF4RxTxv",
  "key8": "Fz16aciufcvdfZruojHAeuxBFoMfQaY1pzV8irWj8CW8NUND1NYUaPYcvmv6qGbqoRfsxbXARGprs8911mZerAH",
  "key9": "4pS6eDDL8cWJWuCfeS9EyDNAimNcyMYVdVcK5on97wJ8gnHPGR8YuE4a9qGXh5VKqx854GPdQRkSm9KFRUqxmjQS",
  "key10": "4R9YCcPyMfzAFwTDrqsNKnhSjZXiSxcFJ2h7cbkFK6nucN5nrbDu5mNUMvm7kEq5RektAVZR4odNRHAgYHhD9q4P",
  "key11": "5TFEc1UaXMVa2N8tZw24buoFcxV8qdQa8AFTtLDnaBPdSKbtedkM1DQGYcB5k5yKDQqKJm73LY8Pk8ABbQgXdSVZ",
  "key12": "S1JD4KjLVeWnkz44X34iC3B6CPiBzXq1x1djFKK9sm6LVmUfNUg1S5f6uuasDGcFYv2z1kyQNBSZuGQ7pJHQKNV",
  "key13": "5RWTkFG9RXizvYkFe92xHj35deESGkK6iwkpqD5fFoN23BL7dXEQtFu7oRiZS9bHntvW8va16G4ugHqYWTo722Fz",
  "key14": "3RJDmUiAiRTwTAd2r1323MooPcXdjpJmAJyXvYH8LhXow9gBeurEegi5uzRgsrwKMXnHbfdwAirL9avivh191FXn",
  "key15": "5syqdD8pHqVckB9fTA3F43YgStA5VrLSSmisyviXVUPgF7bzMJwjRZgBZZjSA2kxSeiqtC5M1c3CJigE7gJQSwxh",
  "key16": "egGstfgDibTAfYZMrwULUyMmMK8rFmk6Yk8t8NC2CgLgW6xJpG6zLsUkj9D34W9zzTniz7vCW3sRwjQKUdj46if",
  "key17": "2BoyrESSJLpsBNSpxkNhspmJbdy3qMowLRinRNhh3GY8UCL6NgEbswV43bsarrNAWdJLuNoLiueV4wg6sx6GFbpK",
  "key18": "2eazjDgBibpLWpY6kWudq7nar7RsEX6qpePmTXajm2niHvDgVWgTnRT23GSUwSdmAaodPGUgb8b9t2NjagxQBh3F",
  "key19": "2kLuyGPs2eLLeR7vF2T75StrCCvBWw6xtyiZm2UB2GzHWpH6XYEs9pHJzx2snnJwccbYmdSWrdMof7NjQeRtH1i2",
  "key20": "5rmKSXJUAvZPiVWMHBdesBFmxAbAeDWhzcv8YLrEmiqDESxwGq5vDfqbaG5U4UCGewHV9L3aNkMSFNmThoLAXYY2",
  "key21": "5oJhe59XsedTkogFotpBrVJfQaKpTHvRBE6ipnZS47X663KRms5PrMJg2THWucMWngPcWEWdVVv3kkCY6dMUijxT",
  "key22": "4a3dK4vhS1YJBV8WQXwTauddwkhYRkPgHCBQyG3ZWRZwY6uXrXBdkyn2U1swCg13Lc1z6gdxRH8AmwshLSNEESCd",
  "key23": "4QhxmZaVDonUbPrK4Mb452o1bM4u69bPCvFBF5oKm12xk7XtiQkzm5ty98YcdGEwjhpmHdxNECdYwb1isjMjKZSz",
  "key24": "5xD1n1WnuxeZ81HrRoPSYzeZiVqwz8Fzr8MZi4Uuc5pkTayjxvKcuwNhNoh5W5APkGC2aDDViPFWGfxd755zTbtF",
  "key25": "4gQ8QBHxXsydwH3ZrmAsNd2d6TGxogM7ju3QxyHqm1PFncwGqgbiU19VKBirv6cyRKjpQpynGCJe957Tqh919X84",
  "key26": "4sDd1pnL75NFUuLvyKS3gthnmXVcju3Pxa3ZcjYAyTA38USfQgAiAYPWf9YJF1QieVeuk7jdpwB3B2E1kDvGKtwH"
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
