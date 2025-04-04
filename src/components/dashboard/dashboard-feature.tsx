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
    "5bHAUEJP2piMCDnnEJGKB5BSHHyPW3CzWEadpcaofofvz2ocpA2KJvgCDuUqeFi26VnNanU15ox3jhRokTRvKApA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVbWWkmKEmeFyokeoxossAYFuGRD8GBqZx8XfhWubWQ1Q12PgG5wzaiUMGt9MjY8dnT4hUohAXHWiFKrWmzA2vH",
  "key1": "5RZk72tugkLUCMGwinzKgpthziJPc3f3XKzjNJRfFi93RSMhoaQA2g5XzyocnNRD2BabKYmoVA1ysuFVCYJSQrT8",
  "key2": "3bbbg4ppX4qk5vVEpiNa3xGkdNumM86upM4smwzAbJnx5ff3DDfFd9FFoxTwjqsaNeYZgfdX5wtgGRVBwAjhAa9d",
  "key3": "4zFALbm4msKByvmzpvzQyzZ5aUNpSYuYnB1RAbfciW5Ta99FoovCqkYBUu5AcWhMdgEodfRG9tqVQ6LPJVmfcRvp",
  "key4": "4rnuXH4SNDm6xTHpDHJdTYpssLWSYdPpehkBMfx6tsUZR8VoSnuFsV3N5ibHepXuyRDuAxec9q9rNM3apJBuu2HR",
  "key5": "3tBrVbVDnYuGgfxha3ng2o4dLWdg3nv6Uu5rVMjPzMj1arHGpTZeNquwmuBb67dCH6Z5F5PtUrJRqnwf2zUWKLHn",
  "key6": "5fSYSFVWtuFVZXA6v5aAp6xEerNPNP5uZMtwwHdKwV1Qogq6bkjdaJq1ZgUCmAAEvguMZ9KmZTSLG9dvKwmMhDgR",
  "key7": "3vuwBoYMtN8gLvdYYPEisfHrdWcY7CZaLJszCrePKq248NTg7UV2TP1gjpit4iXpryGsVRMXEQ8X1Wi57xaDZobA",
  "key8": "37F5RqDTFjusjqXu7JCShEGQ8oyZ5E8wfwHgdGGGdh2dUb8UsE7mNkV4J12tk8crhf5rhxboym7LQ9PFTLRh2K7E",
  "key9": "4Xh2FRNCTJQHKEmuJ68GZmCPfRTAQZoGgS7B7GPfhMfR9eSmp8NrxsfPnwjUu9RHA2NSV41BLUHFdTd3PibKFQ2G",
  "key10": "3rwJEuz6P8QS92K18SLAXJqkoptsky8wy7uRLXGPHwEiGm7yUikgQBAT3VB8mwDPwrDn52E8jvMLtD5xCHq2EWk",
  "key11": "2RUXx5dZb7EaXEAWpLcFUFMbmS5UqFNVPBKTn5UVxTLw6XnUGtUsvowHBGqt5Wo5vRCHKtDU3zMUcLyuiS1HM1Ah",
  "key12": "2gVcJD6ZmdqVkVWKYmoLMBDS9TLjbaRtjYe2sFbRHic4b3exSFRqbMgMqsQk5U8PfRLWiUMf1ELgmG64UUi8SdRM",
  "key13": "3KTtDG1MKR341FtnR4NS5tFAzDPQoBuMKFvBKqB2y67ehEDbnCb9sT7bRWA8NuwBNEatQJiybUxneSmQgbwfuR1K",
  "key14": "82aV8nGGYPmPZYgpnvCrfDE4mjC2kGZ2xd6n64KiksXAdTPGoDv7wdkxv944SKUkAiZF3365MPcQ2RisLFLJLw2",
  "key15": "5Bjp27JiNThUB6FhV8Bh7mZBZD3f4K14VELwcunjHqiWsXpSa9wA6pqpYqHUjNDRiKWJRFPDZ2L5uaBshhPwNnCj",
  "key16": "5VJ4uFqhg89RBKJEG64EJ9yf3VR7QT28UmED8aUWVMgLxx3c79iJV2rWJJYwjyaaVzV7BxRodTf7Vihi6VRA4qi5",
  "key17": "5HE94BMRk3npQSVD1DLTNFmt7pgScWEAw5fFkERdP1PjoTizFwUJMi2NAcj93mckRyuogsewFcCEWmnCJf3cdHZZ",
  "key18": "3WhmBrRSJAEyF41V3qHPGXvdjc1B4MimzdifJM8dRABy3MEXiW9AEBjRE4zaeVitDXqHkyBYKH6oWv7HQejZEmHG",
  "key19": "5xiytCsQDHzmJX3rAFiErG9x44u34R8Nf1TkCLAD3pz4mVBq1unwZRvMdUBSMXdHbnnaG9ofbP1g1KWnCyACpqfi",
  "key20": "3indz3tkBMWuJt6tcAKnEzeCRS6C1g3YRkbWvRur4szbPmxCPoiogqjktWfrqTgMwJEdFjGM5eXxy5ZujPZk6mLa",
  "key21": "3LpnahPnHeMcgmMqoGS51x2aupjCyTN53xduraHHHFu2YQTPtLrjtVU7UKJcDq6pWen2Q7KRKckgNyczVFEgCb6t",
  "key22": "xWwR41pGSz4B13Qr66wsggR9TfuNRzjBpznmZ3reR86zM6XKjDT5uDvukg6jn6a7HNesUguR2CxeU5NipQbEwQd",
  "key23": "34HZQuGBRzN7AAa1GxRnDZgLXBu48B117Gdr3Nsu65m2XD8ZXsG6EgLSL4KoFKjr8qKFt1skkBhdze333Bnk3zza",
  "key24": "5fEee57nBKCkARTsEGdAh7R8dsZQ45XgeKu1iPhe26jxQQZHoAHXTgmjKCUMXvAwnGnfXJzbb5PQuifhRChWdkF4",
  "key25": "DSyVjExBsucnkfxfJZtPWxUAFDktLw2rjkwhJyzbrj7ZaNrCM9FXczEqL3z66Kgtovs5gagqVyZSk6RteNXdqQf",
  "key26": "3uVxjwBtREZgVMfUHQMYf5inXjHSMQJd62kderGk82JjYdriPMT33sfwnBWnJdxXkkTRrrFddggyutZQoQxm9EGd",
  "key27": "59ZCXGnUFcNkupSfk2JKT2XdXHNPtzyuYFdU2nwe36xXW7SupjiP2CE4uWMddpawAvoSk9En4L5HpCVoqgGeHrD2"
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
