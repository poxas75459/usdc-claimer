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
    "2xwXSwgZvPiX4LtZ5K5vAKn3NrM1qMmwE68UrVTAHom2UzEYV1L5Z5qTBvmmCMFjVKp9UoHaWUL7g7mEqyBbEWds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smFus7EnqinB9dU5zWHeQKP68m5yVn7B44vEct4majF2tkm4Exb9MTwANhS9BxA1WK7Zg9uU8TyRUGb8prxGDuE",
  "key1": "FCp64Juq6XscQjLeqfgm6oz7nNCUSE2K76vW3u5VZWZU3nyMUyjvEpWn42kyTNE7NMzT3Fpy7YMta3KEt6e2iQ3",
  "key2": "45UYdhnevpY67Y2UkBRDzHE1qFBCRZ5qMz5hfpgJVEndoR7qAJ3NMvEhfA5Gz7fcsTzxKCg4V1e4FS1QN4ymXT11",
  "key3": "PUL1FN1Rh54wpbVq4vRENtCHurDHAzu6PXcgEsxxkzz1i77tQB4sUkVsBvF7jUj2s97d3jGyFMk2DrbmsdarkMg",
  "key4": "2ty1Pc9N92faXAJ7tAdoqD2AXnXAUk88HTnWu5PUH8gK4nBMThn6WQ2A41RZyPVHKq8pzrG3br6vu9MTAdWdDiUP",
  "key5": "2BEc1ufc8imvJuQtfLG2yWg6Zo5ogdXT1TNmkVrUFjaoYTmUJNwHuZb5ntvfXAf5uW9PRsPvAqLpY5jqs5h6bjgJ",
  "key6": "2WURVSEnaF57ettMiP4SDCYpkqqY3HA838v8rN3d5zsgKAmRossvxSBwtUttdyb8haUJWeBQhmVJd8oDzcqP4msF",
  "key7": "4PjCzhu3gTB2MGMytcdGoqnnfbgXgfZjWTb9kQrmSAPFQ36H2MbcRGGxFuKMUudxmGHhiUG6cg4sWtG2j74RDtiJ",
  "key8": "2ndyLWSzAHL1FoRFiehakSVP1TPoQANzX1KZBXgAGHcbMXVGvqcpfUethb5vqU5zurkBQNq9rfHNzAdAeMYdtyJk",
  "key9": "4gk5vSiBtFzx78fmcJj5bq2nTys6fHTw3n1Gpmn5rf2adWoupmQ4foxxorWsdZMEgnNF5kQzTR6BY6dMfAXdEZPZ",
  "key10": "2gUGikJYs6SBzhHhEyhegGfQRbkWNxT2tVJfZBchAAeNTPypUqQ1EcBnnvvVRTHzeiYrBGLPeAmtA2F5CfypkFVc",
  "key11": "5phgBT71xyfa6wradFCLUpKSw3PrL7JPbXpaaGG1ZpJh9pDNWwcsWyr3QxDW9pAd4Wbtq8tXokFjmQQ3jDoSWR7x",
  "key12": "22M73oUHZBn3Yxore7fhpLWokpYdcj6GKnSExvX3oonkpSqvKzw1w3GgG9zSMVY3sVf3VN4VcMnf2WqGfsBY3mHY",
  "key13": "4c7UBeXe5RydPwo6e7rNv39n21Hzg7xvzyrhXb1seTbVGyh2tc3LCC7ExKsPgQYA3n85b3JU275heQdSDFFYpvEq",
  "key14": "A3nLv6B3dt1cbSRAmEqRnYmSMKJmWp43N4F5UweCjtAmdsuTgUgqtc7aiViVDsd3Er7NCTXq28MbNUjUcpKaQQf",
  "key15": "56vQr3JMDns6duDMPSPQdZky9kXgVfhap4U8xHaCyLHwNt2zaoLHZ1GD2ueXppwngBUwwEE9NCf4Sd42Mqt5YVeU",
  "key16": "4SK9DjBFrCbeXwroJ22wkUvkQxizna6kZcs9GtsivXYy2sXgUqaivKjmp9yep2YRyS6NYGjXQaTFD3L2JcuEVsNA",
  "key17": "3Ei34j8N245iMhakDJpEMxqdaju7xCSFhas5JjG5VSYRJwu64wk8hrv1FzcoSgrQuc2xAGYYWGsweAH9ZwVNo7Vf",
  "key18": "5ERjN9WSRzneyNwRoxhzj9gJJvgJxaKZR1oQaBCJFfbw95DpnWkeM3PKVCCVpQJ6uZ3cW7P9JJF7aRXFPqaQDESa",
  "key19": "28owMRqbNnDQ37DQdiFBi5NNKPJt2zXVfdNWxtMW5CpuAuz6caWJcbFJKNNwUfpRmkzikULdC5fU3vNzwQpEU4Wd",
  "key20": "U4hbyxVihXsryRdoSoq3yRu533tvn62QVnpGPgimFt6MYHYNKD5t9mzEyhJyTeUAC31hfNytDfA1uFfp4LBFXJW",
  "key21": "3HELrPbf5TjDUFMk9xZadAKPR9foJpDFJiawLJCtub56LqBQkPKfJEmjhxgKG34KQuYoe4uNdY2rqNAAcLVqSz8E",
  "key22": "4faws7sTbCSyNenmpFREgpQzFVMW4EJ6Ht9jjFK7zcLay3F57ikaKuHX93JaY8D9Lo9Ty7zgr1fAUq5uAbNHntTN",
  "key23": "4pALqfTPaUXbQCUVwE35DabyctthHahSkzSscvyeuXewNQNv4966isHCCGnjtaiuBksL2uNRNmDTvS6UwtKHniWb",
  "key24": "3MbkEpj4DSnc95up5kihFj4cicDRwH6twA769ApiXrDHgWWZYXrwoi1fsBqdCWtUuXbpxwvJdzWt8fvoNLuVvNTG",
  "key25": "3zymFxxiZrfz7chbXjznvMPZTYZaBj3WrPsEvX99S21tNToxZwJGbXkvYiqupUi4mwNJU7fWpeNwEbCq8rq5rivz",
  "key26": "vcHC3UY8SdXNUAitLz9At6xPZeDPe8MffXPUKojoPSxzfK255Va3KrEeYgWiN4aqhaMpwCZRCk2NkTpm9bLA8ME"
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
