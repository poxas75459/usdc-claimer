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
    "3ZUWJUYDekLgdhBj3CqAhRS2zVKTRDY3QZPgz3hmbrDmjM12UKUp24LXAnXUTzFRDnu5pvF3aAS3RpWjmxNh8Jin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGRSEFHjQYf2BcCg8puHRyXvLgovWcgkeoy9R9c1cHyWmLoQz88DwxNKSA5UB1neguxNNMYvJZKAWfaYPdbKq4Q",
  "key1": "GUW8hhTX2Lyi7J2PxHi7BYE7frUrw3Ni4v63T68UtMVgFH43NPLsXUUav775S5xTWzugRXkBLCzP1xcXiSM8ynd",
  "key2": "4RUJ2ho8vRqZejuAeXkteZ5zoQqKjmaBZnJQmX4qw3qZx29r6tcvBMU7AVxzQs1F2qw1EUZLoSGzDF7b5YbAmNsw",
  "key3": "32yX2oAYpwcnExC3Vspo2zA9F4tibsiSgybdcPXn5WkVjR4FUgZMb2Z3CsR1UpA3FoRo2kwHwncZPEEerQ5av3iQ",
  "key4": "ghzLxeZuyYC2pHocyfdUyHHaYrPWEoXo2CNMCjKdbVfeqZXTKErEukhdPTywMQdRMay2Q4cE1iX4GWkscvJiUcy",
  "key5": "4W1ZkF2TZu8KzYGyDB8yVCqZ3U26CiLDV2x3PWKhvafmYQESTWuJG3Ds3yxth154aShmQpcJq9vcDn4Sb42ifJMp",
  "key6": "5WkmsUrxLgcxNmwwRxF6CL1bSZnw6db8eKsht671Kmx9SDtdDGXJjDD5NWEU4bBmQ7T9FCCzkhsegL6NJ4w9hQHZ",
  "key7": "4Q5CfbbH8Dir3Th9ENvgFVurf16uv4SVCP2eX7w5f9CruLRDwpYEBmo5pxycSpfHhU5CJVyDtVBs85Y8dDXqrvHp",
  "key8": "2nWjpvCKN4nRQDWJrYBdFv6b4agrZVXkpsMZwY7oYUWu6XqTG3FraJMAae8aZerKqtURMiGecWD9BsteaKNFQT2k",
  "key9": "5e1MgGvNH7MGNpPXG96V4PjptgWNQdYZxk6xHcAB3SyFfW62uXYrhQm7c7c6hpNvRcJVYFCYVddUwVhneb1kvBez",
  "key10": "4xQF3Ld87ux7HMW2EFxrELHPKwRmrmgEDCLDMLbjAT1fcg7HeUYv46CQ2iZn5w9tEXTnVoEuxvZ6dUW1yP7WeveQ",
  "key11": "2FGSQaZbXXUjqqbvMWteqaGuifjnqJcUtfRZpnNHzT4mLU1LtefjUt6UeEfopJDHsoXYRizTDs5sgR3FzeS5JFEx",
  "key12": "2jq2BiuteYfsDJS4NPZojpcQeXWMAVJCbZ2kYER6n8cmkKLQ4NbQJRVCk1deCiQm9cPeUa4ByRyAomoMBkA8vyiV",
  "key13": "21LcxxspLmWkSUUJsW31ri4iVdfuLEVijtqH7xLpTddERiAVBNu6uKy5vewVjiVLAsuyGdPLasUQufRyrVKVXRbf",
  "key14": "3pWtUDg5gNtvUDS7bnABUDSYQSSCUdGB3fwdAYtH5TmirAc4nnxF7vikqPktvstEUjGs43SDcuRPBZw4Jy5c1ZrF",
  "key15": "3kGRCq3fUMAqvseVgYv2e4TfXnqaYK5oe74i5f2Mza4KFfTqPedcENbLJHLMNJU9vBnA6hrYQy2o4eWNPd3CYRzk",
  "key16": "4QmkFGpogXKgo9uEEvzTcozLRUbszAYhb6RJoitYuskgPnKTN44A4wzFPDpgnx4A7wF99tBTUVfSUPXgJGAUvJwN",
  "key17": "4AUrNa8NQW1mXcu7EEEGs1n4NgT8CRLkxjWwYMA83NJQmPvqJVac5HFWp3EDGd5S4bG4ptY1aqv1zkmjM676Ph8r",
  "key18": "2MKyTZTiw9W3uWEXx8VSc4pPtYhxX5uvgvdgGZNLHAJA1YQAXk7tjCpDA6eZ1zRRQoxjsydekvkB7bFKAXcNgTNh",
  "key19": "5a3G4zvSYTFXDS5jVgMcwKWC4matVGS2WbjRUMius6xKx2FLYsSdarpewsjUcrjuzygRkxm8GJAsMfg5w8bX7LzZ",
  "key20": "7G2KiPwrQuh1FzJTNu1z1Ugnfncxbcm2n8Y21hetMLRkErWFD6pwxjbWgg8pUXr9Ph4NEcnHzdNrMqx8yjA16mm",
  "key21": "56zHxmpocHE5QVaCa5wmLGGt8Ho3Kq6jxdkyP8SUdi5Labeo5uszVMXqBz2jjhw7X8PtuRLw65eTdeGRWpFMUWTm",
  "key22": "2zPxfBxeXK3Ma7pshyFfhPVTiocDSYsc9BZzYvTpCd3E1x9e5kpVXTKwn1eM34C9KsTwVhGBds1spgh8hzuVjVxc",
  "key23": "4Ad8Hi7h7V6DNckUSg54n9sBLWjNURwQLpQofFjaQfbJw7PtPzizk1cVLdRLtUXUXKUAUAx2PFH1KFNAnjsQTaAi",
  "key24": "4ncEVEZhEubyLn32eUYoi67Lu4mV7bzdEvyW4sEYzTsDWPnj4NLh4b9HCahxu3K8ffvzqpHadqPui7ui8UhAD4Tc",
  "key25": "4Z3feVrJZGqF3sKsE5eG9gEzU55iCj3BJu2KKb4AxbrgjffyFvXw7wjYT5q3fbSGkrwnxAbRTNvzr77tCEvRZWdL",
  "key26": "3S8PRduzfKxCG3zMheYzgkc9VNNBG5L61bAEUmn9cDaRRvEontXsw7cirrg2F5xm5gXvZ7eMRmtURVtETgK9GgdJ",
  "key27": "MpXzjaddXzDuiWXkKDeTvRyPyMHDcuxHZAQ13i7PAweBYpjVLNrHWLJhpJXfAngNLBWunyRfbFEig6EAbTd1oF6",
  "key28": "3kZvVUqdnnYKq4UJkRRvxRrDCMzxCXCynd78jLrX1wqBhTqj2gTH3J1ES1fwgqdg3gUCj5t6bBoNvC3ddVqFN1i6",
  "key29": "4Td8xSCVguCGKdrvKCniYQ6Rsp31YS93GyH2VgkW1WdfcDRAxHvK4YNJUX6xFtLPPZTzQRX1XquxQMbiNCwSztgW",
  "key30": "whiS7k5zwYCSiA1SZziKCriC6v9n4fSgDNp8eoVF6M3tFH2mCBUR65TLBfEkbAXs3DuTcWbs8bU8HCnuzJ7pBTJ",
  "key31": "2KfwhY8SzurY6hpieLNzfdrp6MfWK8cginLzWxPUk3tLboEvU7JJH9rGTkRrYNnhY99foq6iVs7ipZS32URTikid",
  "key32": "3AwwY1komscD9kPsUqJ7UEfdqDTaa68wjGf9HD6bV6UkuqbD5gxfwvvkUM5nZivVUNfVAuZiUrH8rrMvnnBqNfGp",
  "key33": "3FAucKBed3v9J1AxNNkGhpVTkVmewvMPVsRy6hSEeukkS2pkWVxiU3nfzaN47N8HPGZagtFWMBS9uvUKa4vBwcoG",
  "key34": "2mQffdqgjqQqG6kjoq2K4BBkJrEZFBwzUaQbeRauz3iWwXVVsHb9LvgyxBtox56rz7m5HuD7Q1Bm3YSBTVKuQhB2",
  "key35": "2T4naMLswTLrnjp56SQyu2utfyJGRj6fwk1Hi29ockR8payNMJUMDFcr9yxVAqxEnUb758hsdxH6Fyyrp32haeE5",
  "key36": "2ET1AmovDnEqNN2C3FZ4je5bjom1xcCZcZrMnKU7WEe53EhcFiguNFiPkWzBr5dZPHntcjyLZmXB4Ju1Gcx8jVEs",
  "key37": "2Xyo2VFb4ivAkAcPM78yQRoyZwuDvD26NoXCkJxgPWXMv2kEXE9jbnep68yPFahZo8j6GWUekv954fRHJzvDsiG5",
  "key38": "3dAR2YigdUBPkLw6GvyZmrmvfEU7qjt17Rr7pgLaocixncfLRsb9PmquDV9MYgZMJt1VFM3TD4SXbVdGZ5hgfTRN"
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
