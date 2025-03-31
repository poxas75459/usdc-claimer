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
    "4BZF7134b95E4JEYyj1CULQ2qiPKahqH2DGSntTCauJB6h6CT5n9UQew2bfCoCcox5DwekAUHAYW2JarCua7VH87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRFpN182sGNdHbtWbXNFBNLD7oRVGzXRgukxGsZao4CSj9q1KYYjwrNp3RPMw3pEecWy2f7Sm39ZK3Fbb4CRyre",
  "key1": "2o16vKCp8XLCwuaBDGtb4UAuMb7B5gkEc2Y1Gz4GhwqyhZPZgndp4gaNFZ5Ytxu7kfyGpoZDGp8YAHCH1v4eQ8M4",
  "key2": "2NEB3rhciBmjqG6BHpfrAWbSsroSKgZFqrxJvoptY8D6aQyctTWt6AbbWvKHFg4UpjB1mG3PxC2WiPQhjbyDYcz5",
  "key3": "67RKy5aTyrYxSNQrbmQMA64MWF6o9dSF5Hht7Q77WJKoEvfmsTcT5TQRQ8bPEpy1kpdXjMeroxn7KqHMDE9z8XbZ",
  "key4": "3rb3QLf4Xpban9TB6b8b9oagf3ermx4gXtCFQ85cwLkGsW6W3qXczgisuGXHNxUG42M64bT56TVmTZuJpRGyRKtm",
  "key5": "mKB4AKTmSMczyyPm1SbW2bc6FAXmMWeqWw2XFqNxLoErgVZ5sYe9DKaydWMNHSi6XGDt4FFnfEbVrDkmFeuXh78",
  "key6": "3NCeLCJqDZgg583Tkrxcq2PgbUece6yuwgkBQXCyVgcuf5bwFAd7i9FzSDcfN2EgaQ1rTQZYgU9NVYXqS9fX3tjJ",
  "key7": "2Bxjhw6nMCD7HkHyy183xbMkAWPYnShBnVwXa2oYWr4LNsuL8bMzeNtt4bPLXCRPUmwW8kjAwoHCLJVAuC8LowJd",
  "key8": "4vMansPsotew2M6Byo2XzxAQrW29nffHXz9MrkvFRHuoHRuTDpYoN59wu71CfUHzAKW7BbexP1BSXqkAatGwghZz",
  "key9": "28kBxBKxHXHoXkkcUxEodsVnwn9ieoqZSgTP4xbzag2hBoRmT2wUhrV8xryUtumetov4hVwhmdAjW8eDXkUKhnWS",
  "key10": "3kE587ueG1oePZx7JzU1RvGgft4pjHZPRGAdUdQKeft5DrDNhXVNSC9CkgqExe7KTJcu8vsNsKgB8XW9BJVy5Ztv",
  "key11": "k4kPpDMueM7uadrwZMzdATXs9YG2gcgQXu2ytW6T3L5jbdT5kBzS2hX5HwyhPUQ5mriSrt9dRk897aAceExqqLi",
  "key12": "44Pr8RFAgeYzBcYnnh1YxBqonU9D2tLbwys7jFYV94nwocsb9yjMR7HkeubjS9Lu3EZH5bA6p4rGEh4Ea7iygoFn",
  "key13": "3GEWMMqsPMbmTb2VG7eRuqsPSGPegu4CUqspemgEkmmMsTA6UL4JARd4UFFFhEHUP7z9batrewz72eUBR4uvUk2z",
  "key14": "66vbSvxweshVMRgJWVKFXHTGrsj7cQPBZqAn6yfn9VkGpVdQ9wCK2pCC4tf2Hsgok3fW6nGUW45jo1JKoBAY8oMq",
  "key15": "4kz2tJq8uTn7uRHoePz858RaFZLkgen41v46ATdUHfMoieK2Hrx1wAe4BQZMpoyJ1yNriss5hZhuxp28h7vhNb1a",
  "key16": "5NzoGsh4bzunUamGFGKDvM9ym9Nt3Gc6drfKqRRDmvJ8MY6Ff4oaASmtH1CNBAkpMMkvJSCZeJbPyaFCmBcwTtpV",
  "key17": "5EXiw3NttwSe2sKjZLNXyz6wmcgo7mSLmTtcszuzqimRHpcUxAFmMAoSEYDGn1dc7dT6PjQYivVSQWuFjYhmx3ed",
  "key18": "f9rMjMZzq3FsRf5uiN2bEtpTrsA98GJZYW7BZPSfVXacqFS7Sda8R9XCv4NirmUuQbGDe3o5K6VCaheRi6tmLLR",
  "key19": "4tNheUrvmVi8tnN9mJLRoUaxatDspXTiYpVv3U2zMiH5kUML1J4TG6wGtsKdCCRG75akZCiR2tC6Qogj4HgdJgHy",
  "key20": "3xi2Vare5k2d898pJGrkXtwkkmHbd7yFCdMS3H15oL6AxJgBdNVhCLctXtA3bmiNQwJXr9JtxTZd6MfebpzFWsNw",
  "key21": "5e5ZQFQhRw99HJGrfCEhCPRWk1766K7cvSxwVeW3fvcB6hnqEyErGJATfVYhUghBLZjRZmdU7EN3EPbBf3qnMbFp",
  "key22": "5Di5gcnrnSuFoL5UCoQjeHryE22919Tc91i8WWSpvN4BLtUxzjH1ZYmQR66CWh2wptq61UvXrLjd5KWhSdN2xRUw",
  "key23": "4on3ZWzeUeyBEBeyVNZthW1nBFoUYXCNnmoAQjghAKsGnN4kZM7esQvv3NuSKD9PiD5KpC2RvivsUpfSmbMaHXkZ",
  "key24": "2wddPb1BfR9smcroswK8nyXKVr25upco3TVpWZXqdvmdQwTrLa5d4sg7DLejzm6WWR4bJSv1aDBqWDjV2bQFxDSm",
  "key25": "3QoCKcXJtUX3wxahmet4bxTTzZ3uY9pcs2XgCCWuqBo63739sYtY6TkaUbfBo3FCcqzxUoYP3DT53aBqeJMq4a6k",
  "key26": "2SGTqKtFyXVrAzujfPtiaZKyM3ketNtBH1whLzWJurv12Xaxov9D8XDwUwi6GwnYPaUAHVzpcTRbBmTrdZvuAifh",
  "key27": "5ESTVNpM13tMjdVxKnb7pu2pjHFryucSNuXmhsZeubLxcmizcgPLKmEMLLxcsX6Px5kVZHVxUR87dW9szcBzswa1",
  "key28": "5W8m9L4Ngb2FqPmLhQ2BdKUHyyDgcZjDiqGYYnNhXjqvhwJqLWSh6wCkwKCEUnvxiofxcRphQWzLr1XgE1cvGF2n",
  "key29": "RNqZUBkx9wXH4K4KESdQueXa5EcYZK1yLr5dGcYrvueXacMcnxCrfHFpMaFdrjpX7Xk7mxkDaetLL7TagbAAVg8",
  "key30": "3dVG97bfV2AF3GNn5WTvzJUFEQQJnCtGJNgBkJpYzzTz27AGWQDmEoYXSNA8HeX9gqfm63coC4hvrECriaBtBHAC",
  "key31": "59tX9VZ1KAW4XRkmHVRcToot38ajTqKcKjeMtGqiugZJkdYTyudzZMCzi39g1G1C9mx5epUWfpomaFUEyfbr3gDh",
  "key32": "5KorDNvNhye6gEABeaJKr8LqzUqqyqvBvx26oLMnev1JnNX95BFaL68nPwbJY85uvo1KTFBVpEovae7CSQuLB4dY",
  "key33": "63uQW46vEfcx7hiLab1GhYZT81T5vtDJLeS67SkgyEe1CfyUPDHgkuVdYDHJQ7gFNkbAX5JFmogH9zTYw8H7S62V",
  "key34": "4dMjAovrSSBcdxmyaQUwBPmY6TMCg2xLWL163yAXZheCUWHf4MeLKAZkfNmmA8ZwzHDPvFLw6TXnvhKiSDYdBpRv",
  "key35": "caCxyADpCwSLHqSteHbyXxvMyHQemqdBXQwE2dDxqAvteXYmCxYX2qrA7VTJXvVQvWwazANHsm3FZ3rGnbSRS1y",
  "key36": "3Z7c7WknyVkf8neb6cm5qZybJ5MQPKE65VgEkvQFWR3mhwvvanz8o8BLUyM7eCQk6rf9WWrxpK6b1WEHvvNMWLEZ",
  "key37": "5gNwWU1vzU8r6S4bycQ2j1gy2i7pzP1e7jGMzUMfpPLWQGheVKYCKz1YtbM96VMgyE4o6UHPzaFePzmAkmvvyctT",
  "key38": "4gnXkzckuVjC5EevtjwLRe6X48QqQ6E4w7nMSxgSJqHLTQhKFDs3SmVSXaVeSvHUQqNaLJX3Yt1pWNSjATZAdJ21",
  "key39": "4Ge9Ud8VdtP21vcnVesNmZfKh711kZtdUpL5bMGsqgv2hNaQQ3XcfB8VWviz9rr1X1AfnNAJZBPBny483bR2X5nQ",
  "key40": "3xJ4CyqTyrDXDZhfH2Hr5MTc8hkHuELsP4yCGiHW3b1vH1iaEPJ3cFHarwZepygU9iESFUKgyqSgA5QXqwWdfV9G",
  "key41": "4mqisSN7deNAcaLZoGHhWUyfvNxe8ZQ8yZuUJaeujBgP9MZ2rqm1ozfU1DmEjKKCijmNqD7DSrr5dq8oaoF1xRPX",
  "key42": "4osRotkLtqCMMxFY2CiwPTHFgWxW6L3Tgr5LbwMixaxm2ncjNwZA6mgMzoGiKQGi7BeNJQUoZMidwQrgnvv1FRob",
  "key43": "5P6Y7anvejZDQnHQCBAGsSvC1kKNV57MbLe8xse5WdD8duumCrQg4rcM11AGwHdTpNMLJkK7nSVpC3c4FyW5ofDv",
  "key44": "1E9YxeE55u1fcRrpEZABXT6ZzUymcJ7ooRkpe7gZAFEA4hWXxh9vNPxKrsvHZLWs4k5Y4odBe2QaUJpTAEnV54q"
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
