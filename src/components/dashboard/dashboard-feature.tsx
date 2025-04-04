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
    "4c8DgaXgVtouAGKEWxaN3BMgZcfGKxE3D97H3RQLp9iZzymgroQtWEzH4Xf46Jqt65NypbD11rcntoNHgWDBHhKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WT61tmfrRDdAMiGQ4W7NwzXZ9ZKPCMbvLNyJppL4FBLv83VL7ybYi91duSVfXhE8Br5iKZAxBRKjYCqPYiAupou",
  "key1": "5fUxKcYS2eUWAZEU7hvyQwjqvfBmCDya1YpQQM72ZjYhkb5JWY1a8N7mW5Aggmd2AQ95L8y3M7cZWBv4kWvb6kW5",
  "key2": "ujYbq1RXKh6KDE5f7EQwK3MKt2Kp8dPsQsJQVCtVCnZGTHT97wt6zD7jN1sjbwzYtdeKQfc61V6zpW3zztU6t8a",
  "key3": "2APMcD8YPuqQcw3FgnnmUFw6Q91jd5K4wJ5sQHeBT17E3FrojqqWvdfewNzrWi5pYH8G656cRbU2dHYtixQQqHd9",
  "key4": "5QsJXU6LDw1NMeEauDstuqYNkmw3h3vHS4whuYR63dWdHyCVyoGWdpTDnWbdpb7XfuU6pFjnHt34QcHsozVSrmgS",
  "key5": "5NuyFxmmwrqs3GUMydsG3QCsr92LiqRRPDVkurLc6kAeUVMfrKBZv8xuiFBKTBfz7XeAy5wXRxssHqNqwR3xneZy",
  "key6": "4UHDrAKtwaJEoAAYxB6DYZoJY44PkDcbcCo65VoBxQrcsw7dAKbn9EJDJ6M3Fs4vKtJstZ7BJvWLCUss5Ny1fkbB",
  "key7": "3rgvnFRmQA8fMdSPwMUnVreyBRFG6AFRyz8AfWmY4i6ndZKeSDi75ygYFGz1VuQdUQurErqZuCSQWGYGn5QXsjYY",
  "key8": "4TWWT41zDzSeUzxdfKmj1vJTwuB7FYDD5weVriSLXJ9JM8ZEDU8NSv7bn7S4c6jL8XJnY312Kp22e83PqQUYZVwM",
  "key9": "4shvkLbAKf6NtJDUe7er3jq4NSCJPqFFzp39UAgV8ee1XAXYgiMyPEHHNTSnL4tj1AjBPVwVhS52FjpKJxPMpWWC",
  "key10": "3iaa86VcFn59xerm1erozBNVZa9Jq6SLaruZ42CppFXmrUCrghJ3UT1dnNzyyzdTVpbxchj9URmFeknSMhwMhsNg",
  "key11": "36erLRrT8dAo3znsDUawu3wo89gKAsbHqL1RZ3xkcpFBbiVL1AHbRmT6PCFCQ5rZn8SnW8pweCzQpkY9iLQBUQ5x",
  "key12": "4zD3NA5ju7m7Bwj3gcVsvzVoPZd9YDabZUriQXFiKbtnubvT6eapXUhQvnmEyHWc72hLzdkPPwreeY8RPCCsmxah",
  "key13": "4cWHUBXgA7kJN2G3oKQaoKfqt8uyuFhpbTwv44KfwEwH6mE9p3UFyFstVzu7sjFoxgtGTCxPAqm6R4kvdgT2Qsg",
  "key14": "hmEZCfpdpLHscQ2HVcYY1c7ccSDoormMuugJ5ywubuNVLebgnHgThaCTChwgdtwreYZk8wYacSUzqeFqLLjkmqd",
  "key15": "2475Q4hqP6SEgD76ApCzFSA3CobyMiKSgkey7Y9L4JbGUsiFr6rLcSqGWRd4zAnVLhq3hK3D2SoZUmEUd64ckuuc",
  "key16": "53LDCDPFeNkgfpD9ivHhJE2aWwGfda3ndsUV4Xeg9Giy24AsyCg915rjktVUQjFAdkpfGDZQzfDF2KR58gRBidfv",
  "key17": "4rX8wsKeu8uM2xgJWfhoy4m3fnpURRxBTjGendxKrkPXpFYRytQf2DieM4LRPkh8vxN46MZYvaKbuiVqnLjmNouq",
  "key18": "5vB4anFy3Kbz33bkByndQzoynCQPpYDYcyJne7LzoMMLFLAs7p5btmAy4aofKWVoKLm5Hy7ng6jNko4PnZ3TwW5G",
  "key19": "2Ti7bqujT4Lci5SZKt4CZHnkTgKvdTP9zG37iS24MWWdgf5GdEmM1KJpEpWnDsVZW4ei1hEEKLJm2mnXYQf6BK33",
  "key20": "sHzfkfe5Bwfmu7S5hSjBiqvsYocxs4Mqwoa6SrDBmxnWvkBtUpJyx2LJqLRMmJ8mK2Df8ExEUe8nMKY89c27CuJ",
  "key21": "3FUZYeezHCgx9xjYcWJK9VaFSCgukpTqokWGPe8jo7LJL9bSMyeVYBDVuLKhyyXRbdcHMb1iHF2EevxEVc2qawCi",
  "key22": "3JQ5KUwxxncKPVLkx2fw28KiyATCxDKnYZTPaGDEonEXiEiYn9uiejo5uAYX5GWfEA9Q73DVFPctzWdeio96uC1",
  "key23": "5E8tLSvWC2mxjkJtoqeoTszY1uwAgk4q3mZFdWtBjVPjBXNzUV3pztQYEJwmycQn53XmAts3s8QNr6frPoGcDvw",
  "key24": "59tTV2x1AhUFrQ28Smu2GKssLS2bK2TJygntKEry6TBm8TFHpDD3ZHvf9hdnMnRN8m3Jv2bKtQDHJgogKsUq9taT",
  "key25": "577cvqHJ6wJ5PerMXFxzQinTYD12JFTJExVQjJxAySVQrBxuN3khtth2uyt9USpD1YMNf7rYD5DWwAHbd1SXzSPC",
  "key26": "5Ew7PJ3uDfHXygeoitB6VHJviEGB8QJtGEN18pbh3rJyhpgfyEZF2f6nUZDAwsxzK1ZmU1yq7xtCF2scYAqsCC8v",
  "key27": "5BnV6GaDfpviXgSZS2bEWqLnzSPgEZWdzV6vSPn19P5GzDTMzm8QwHPmaEYzqQZMNhZayX1u1ca8RGVR9iGbjKSW",
  "key28": "2sSBAEqg1SDDAc5ePTKU64s7rDWEBikz7JWt5rvzCUpZ1yXGpfqrU6wBetcfyw4bCirFYgGYvDCXX9P8jteUEVpr",
  "key29": "4jNX5G35vLvwYrMFWLo7dVnwKYJHTACAMKjARszK7vykhs9Qy2CXUt1xfMUnEXBkBG89NDsEvWzYA9vv88HBRBSc"
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
