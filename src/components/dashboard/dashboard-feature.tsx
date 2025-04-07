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
    "5mtJ5h8a2MQx2BGTguatzJ46jFJBcoGd1BHGydAysS7rjuS8m9HPr22oJ4D7THV6JoSyTFAcziLQW8WGeE8M1cdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dzmNApmTGHfJZsTY1yA8XkxS9gxi3NtaEjXHU9wAt8Z4GoCTSBLWNvBc4zMtgDcPga8mP6rwfTMgRmSjyJCJbE",
  "key1": "53GhHjBPmiGKRSyYTonVJDPzEW3v7KUzkpnLesYiur4vNs42HSm2ri5dJGTSq4x7GvPALreTbSbznDVGypX8uTMB",
  "key2": "46TNEeaHtHGp3jWdYvg4qfWsLvVREwbvza3PWhyvLKMmNqivWB8AhjRDZ6e1J4qbxfmEqCXy7k8ZW238RJrL7ddn",
  "key3": "3NJtbNqohzRNVJmKHwdZXucmWMyyzvVP8X24knG4SFLvfd9yT87vk3y4hdW7XfD5pcu5KPbgrHa1aPvZAdVr4Kgx",
  "key4": "3ZaDbYP6ytqjRYSZphYyb8Vd4GPcEnJKtNbfw6YZQJUuYmCzg5BHZA9YuFUrsFt7e1wZ6BbxahsujnSh6YQ8nGkk",
  "key5": "4EbjGQd3oTywSpe32UFXQgcBJ6etyQUnRhjnnMByWXMZb2kcP8Kmr2pXCbH2vNm8Lupd1W22egoyE5DqgBq7KBTr",
  "key6": "4P2T7fKkLSy4dZjGDHnevhdfkE8Np2xHLAu2M49FpLjd17FkMYHH2oXL7mhrh1MYhAc9asuP5bVn4zDVkBecghGY",
  "key7": "4tPXZ8sNgADuekCd41acYvrBbYTpn9kx2od1hkvVWamDD1MeTZWAGzuuzghjBATCWF9pAddLLZNkvkSKyMXbyMRV",
  "key8": "2kdD42LcYBjFLzisMt3m2VbA7dQEwg1GHUpibRgZoxf6ddRLDTy1toYeujUCZHL4WHKCVQv3JBzHuCeejRskBUNi",
  "key9": "3yZwscbS7iEsd4EWE1HUsrZAjEeRVv9f36MPrYTMF7oyVCxq1DcDV8JyTTXTHmVF9cFren75wZMTVWHCosYhrNXA",
  "key10": "2oF7xkHhpXZc4aXFxAsz54A1xy6h3gw5VTpjhhC7PgdvE9iRGexJm26icAcz6tYvPr9fqvFpvM2iTAu3QHVxTobF",
  "key11": "4WBcwTEaPg3R9MrjNJeUecp6c78My3GfzFNCyp6FkEZoWXm1SUv2PPqjbYsvzanLHYJxcqCA4h7aD3Uimq4AgFqA",
  "key12": "gWSzaScsiL9LdPzR9g3aTaSN2G4wCrc5VWhFWeDeWa1WgXhL7h598yFUV55McZGSA3C9ZNmXeyPpzu2ouWujLS9",
  "key13": "5J5HbUZ2ZWrcrvMqGey1YGmjWw9ce8zeGjixDb4xqbTETKA71YwiWewwHB2tRKVSVc1PBThPSqgjADNsvaSTGTFc",
  "key14": "2m9mHFsf7HeyakFo31cgMjpL6NzttMTscQYhBBFDgHosHKtoQa4GR3RiegaVWsCERSxRTXa4qe5kSNEeToyGFQ4A",
  "key15": "2593CbxJkQXLjYbo1qnywhPN19A9cXXHKnTziMod43TjBDgiZEsBZgw7Qs1H9BS5Qg6j1U5EHv3y8uSCZjqnqj8w",
  "key16": "4WZMfkfF2E3XYpiaXwxHM2ggRRNXWahn6oiP3VXXJoBjd463AHnKyWuBoa24x7XrEpaCoFwVjKm6EwVcVgTWTM9o",
  "key17": "xxzZCCJCnfst9Zb9w5eFhJUeVJdjvwsjzB86uycKeaixY5ewnviTd3tnAx3ibiZKaxTfZnbxnXEnhSDkZCePbZd",
  "key18": "oReQBgS9ZQLhyZcNuA7WyaL8iJRfGQ2MyHFCv9bsnJJfwSCn4xoveX1sSvGDvSbPs5xrrsggan7XVth7VQrSKxa",
  "key19": "2jAczD2ErTQxLc8HU85EhV1ddUH8uYXszBrjjtPbzLw16TmcHdrzj3iKZtbcqNByiDCGvsxGwqrVEJeLzNR3K7bU",
  "key20": "56JZ8uQ87uHxpTmv8WAkno7sCNbY5BvZuyLmjq4jnyTUXTQEot7u1Qtz1ZcrF7D8umQBg2xgjSqPqpH8CJZHc5Ph",
  "key21": "4ARYsn16kpLgyBkde1n6T8uPezwSiyScs36TbgQvLFWYxFFMYxUweRctagAEi82vwpbCFNu2kak5esGBT8Vsyd1s",
  "key22": "37oZHTfS3ZUBLow9vtfezKCzJfwE318VCoV4JUtZQVVvceiir5wRGWAA3XZEzJwrR4RdjEE17hh1epP7P32FSjgR",
  "key23": "5wCnZDSdGpVN11ogbDaYhj2vvvjVHoLLKqgaHHDzn6RzBYX8ncoWs2qn1vVxeHts8UjPabr9G7yxSvVZRZU7Ncpb",
  "key24": "TyJSkhbC4Da3u8vQ7TmToU2oktjB3WQKbQpyhLPhGK3zw2iDQFEaLVtLWLa71TwvriMtU4g743j19AQDpQshGTx",
  "key25": "44cx7mZfuDeJcUs2bDJTwMxMP1kDpULoKhJYeykBdMeGTs6DL89YiUJMQr6pz9R8b94KDitcPpP7sxhwDcAPiizM",
  "key26": "52ALqjXyURg9xwqExGP5nNyAcaSSmaDaztGgW1PdAENTrWGHsyatE9MjuMp1WdnHs1NLYiVvRpLW2WxRey5AgTfR",
  "key27": "iVnSJFzfBfMHMrgZqLdzHmkdX24oNuMayy7P1G6WGjQuQ6sSsTYGqjYcY46BoiNtXfDhPNDSA3mRzZyMCpXDh2Q",
  "key28": "4g4G1dU6GmvS1fJbue9hHiaMNGxcYxqvZTUw3BthpN9vqkUH4G7G34JYLbnELnbF3ZFFaZ3a9uaAyc7N3snhA494",
  "key29": "GSHGi6qbKrKjnGyxUuc6DE18Gn4uWK4sNn9K7vj27pCVkso1eqtDJ1B2gP3LU9W41wp7FJLo7jE9oheDm2Pv79U",
  "key30": "2Goy3L8dKw4Afgttski8gWNseqg3DyQhXjGWizad4u1y6QNiTgy3FHTKE4N9C4XXS213bVEjCCEFWNU54iLiqHuw"
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
