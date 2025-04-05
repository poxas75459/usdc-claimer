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
    "BUA3kAgugsvUy2GqsyGvBwzjLojnsXNZVE3RRyUvZcE7e6qd61fmSQbnuFj24zHqVXR2PSb9MaiztBM9Wkux6Tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QFFC35oAmQ5u5ZWRxAvqi1eKCtW2JD7axA7xy5TDr54sXPir6f9ufRgkijFZA2CEnDR1EKQJv5hRnEBjV2sFjCo",
  "key1": "5PhtANheh9CWYGJzSpit5ww362fsWajNxbjqziCFnhw4tzynKYebzP2M2puYbe49qLJZcX8RN8R5QQFVB5wM2uum",
  "key2": "5JE12mDW2mFk3WEw7fq94Doe8bc9BDnGdB3VMyCkh9ognyi72kdj6dTRqmMjdh9e4Jq29oYRATefMmm9mA5cLvtc",
  "key3": "5zJwZEyXNPM2gEoyyTLQSzpHEqZJizYzd4nnGvYLRMQxYQuwh74YHJDTfGV8fNhtB2U1ukzDrBoLGsijUQnEdNam",
  "key4": "KrDFyGDBsyknpdWckJxUBQmWCYRMsRhoxfjEep5o4CRsU2nDcughW7pFFPTDPDDNC5ogaaerSRP6UKMifJgcgFA",
  "key5": "2YXDCfdQcyC2LPPhyN7h8M3ffYLXRgAxSfPbcJpr97a4RejZVJ31QFZ9bJjLses8KD6bWFj2XHQmZqJAZqesuAGm",
  "key6": "WGqYFN7HbJQHgaT5CVUp97dgyR3QfCcuh8mmz4mC8jgfiXoSfrN6tdccQ34URnijhqQoFgY6FR4y8UuV3kzX4nQ",
  "key7": "3whNxrJzHYTzAQFJwd3bDEx4diLghtFsvWLnybVPPZCJBdgNLff6P6Uw8mQa4NEHsANQoYs1UzTHiwF1M6aoeRK7",
  "key8": "3D6x842umqnkmc8tBWvMvbc2jvShpXzrX4f3MuCjZwjfpgrpGc8Nn6UkaW6gHN3xsdqNf92oHcVnonA2wRNYUcZQ",
  "key9": "4SapL4LJd7mvLN2ZermHuAHV3BaDNQ3HqLLvCfZEyKT5WdZYok51YQkgCxtVXzxXdHLriBgKFLnW8aRx6n3eQ8HL",
  "key10": "4Ha3UTzwCznT9xYmoTMwQktQbz85y9bJG1sVdpHz4yxecyV7nmmDN7eQACzJM6r37JBJdwrPsgnLVLNBSv2EKXFR",
  "key11": "4NXq4m1NnPwhq4CSLwmsPReVbNHPz4QmZGXFDTnjC52DzSEmN43LHkNmEuXD5mFT1U5PNXsbfUsPJ6m6mNLivhu3",
  "key12": "3AFXmataabBR6K2e7aV3YNboG4hJrr156Y3aZC1QyQrveJcK8B1J5a2hD8JVQKFwYKqHJ7g5cNvVqHiu5xrgoH9W",
  "key13": "4fDFDBFFYcSL6a7p5Zz1ncks7sWkV6T9GsLJZoAg4ZSfTfrLc4a4FMsQX1hoA5uQJFMKF26vsitUMA2cCpwdTiHw",
  "key14": "8DQsCYx2jBV7GwBvQGv7otYJ4QYRUSegeUErFmm6T5yuSQbjuu2aBcUe87ohFxbAvAeT6PztxbaaUfDcre9kA5v",
  "key15": "5fFqswy1n8yiNu1poJHcDLD9xKqJJSLdpLX5HbMqYv4PMv2Wo4WL8yt1es1JekZrAWv7ySzAEouHuXLTBSSucfq6",
  "key16": "39LJfdjNotrcuDJttuBzff5TNSgqiUJcZYFfeHf1PUMbwye1FuZNxnUCBzsdrLC7ned1F8xdDppD1oHGFW8r4mEV",
  "key17": "55fzeTaiCPWZ198SMCoPxeGgtiGDTrftZUFxHAHenK9BQHQnPixEBSLA5XVS1pB8UWKEtJUcoTJTLco4Jzt27hAm",
  "key18": "e3DxUrheQEJW8wGr3qaMhaAhmHsZrzkmEBGQHiCVSeMH9R5NiVsgogetWwkW8aQXiVkmqWL6jGYyRG339NcbkcM",
  "key19": "2xF5Fkm6rWa9y2zJLfCh8UYuYkbFRQz1X68qPizomYCaxpAhjRhouRkRSWhquWKL2qMr8bap8BhiovLFvLrS7Bwm",
  "key20": "3MtUVsC3mCbF58XPZjfnFD5KyKow5N6UTUxHfvFJPP6gJuRYxjWuMLbHKyY9ihAcKW9EmnusPnc2xzMhozEiUrqh",
  "key21": "BzRiLncEpjaxYkW56SiFgUcakW6bKzjzAWLhVTaJYSSGaMrRFqgQrZXbEosSr1zmNWESScznkHjB5yqTYGyofhN",
  "key22": "3p3LTEdupNoPjGXANoHQ1eWTQvebD7AxVzY6cuXrp3GcRNDdG6U8taKdZrEJ8hh3HGF7DBfz84RoL3hakXuxoSea",
  "key23": "4tPLJZVYm4pZWSB6gTJjJofyqPHLXqFw8pXbfyGJcUrUQDRqhotPemGohnEEeQiFCCGnUhxa8ftbz1JgpEkfeWhu",
  "key24": "4PTzfQsAS9j9vYZhkwMKhBiQHFBnDH4oBK7peiNZZoiiaEDY1ijyXsSQhu6Lm6d2BySoZ6sLQLxNUHQUtN63ZRHP",
  "key25": "2wdWRQPipcgYdtM3256CBKh4sAHLtwmLg43ehXSLd56J7sZEpAJuooB2vXY1XwwWxMkPHYbnMN4gkbMVFXppd3fk",
  "key26": "PtVsbGecYgMHDG82WgVtgJvATyQLb4v7FtAMBinsuwHw3SxYcGSvyRwdNXmZAeEy9enxEYHQ6JSnyWvqZzFgu1Z",
  "key27": "DNvGqCqoVvJAPTTEgTJaKf1K9bd9vPepheRwtcDTsFh7xBTEF917qygTozy4GUUAfys1LCxveL3EWBrakwyZB31",
  "key28": "5seb78hg37MVCbHPdSu3rzz3oEsk8aqx3uAEijznGYjrtGVugftKW6ztPUfjmEAVmD8ajKPwjpgo1dsYtttpdQC2",
  "key29": "4b9JcbXudYCpyLsHVbBPaznWnnDJABycHJfcXsez7yuqRZXmXpzJ2VqZVd8PpyUNRsyDvdUPS7TUkLUGwrmZDaaJ",
  "key30": "5ZvpAjDdC1v48UiFKxZeBKsmw2wM8Scd2XJwoixZ9qc2ryEUbGPJU9vuuLermSgiyHX5MMjUtvEJ4VtkXZog1DSw",
  "key31": "2mK4L5tHmWNSXaNzptRT3ADTs8rCju6QdzGe7CUKHPN5dsY6iGa8bDxkFTDR3R4VcGfotwsfzzNhtcWfGQDCaN9f",
  "key32": "2BE9fqrvV7mFq4fRLsdQZheE4aTHSSNy7wXH1eRsSkvV3jAUMVM9nRHcy4z2RzQgfsW9oWgmbGbzPMPEBrKZhWcu",
  "key33": "5ixMK1K1sUJajb7HVESRBJ3HEqj4JunATV4bHPXYuMpcM6qj9ew3ePzJu7qtE1BLiASBFzyMCD28qzb2MGmeMKxx",
  "key34": "2hyxAybXeBqVkP2bohKQpvTCiyVtQ8bWoR2KcEAU4bLcR7ZinxCqDv13W3W6ZAZnj1L5cxezoLhTpJkt2Vtp3BLA",
  "key35": "35VV45iBBzaVjSBAwjnopEKPXbBQurdpwNF4ZVfZKhAfbdNp2oreGEFzgxPpm6HzK27Rw6k32GJxWA1X5wyS8NSh",
  "key36": "5bRyUMYFS37N7ZpiHeDFXzv5aPjgUTDtEnhVRtFM29zN86Zu8Z9WMdqq4arMrJmNPpNDYYrRjVV33LSfkYMPhqCM",
  "key37": "99a7fNAH5TuEhVdWCtALQAodowMRbdZ2V4SqPWt4dVHPzkyiaW4t3BmkMfgcXtMd1QPCWBoFBrnoJ3Tr2hc2Dou"
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
