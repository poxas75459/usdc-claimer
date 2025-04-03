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
    "C8A1ZJbzC1U88ZihQXVhXtFgaawRLA7NpLcdCbC2bunGbX523SfNdveMdDX9rDTJjoPF5AgHVyjHeTSYQ2d1FGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJMxYftwAhzb882LdpsrHkxycfc7mtfGAnXxKZnEXeUhwgMJU3pTiAehKu3HSvY7ehJ9BkCqpWFsGpurNUeauzf",
  "key1": "2RCgwRUKbwa87P6akdRmRbMjMhLmkohFf4ULK849rdRro1tznVxoPSrrw2kGpdAmmiRHLTuim7eLaemUBijaUUYp",
  "key2": "4KkFp4xjExsHHkKmmakf71jrKFhCPxhkRPsZFkFaejD8MUtw7268tE6Mm7VrVYb8Ux83wSWgxsWRPCbqgGg5wJVh",
  "key3": "5HXSAM4ViQ6BtskswFvXnG9RHGxNj13tSkTrdYYVAcba6mppLsBRcqN7F7UFf9xieKfVPdZ5C8wPsufpcjHqn6ze",
  "key4": "5jUJZ7deXEvbGxpSrFA7WrnxwomnbDamUwajhWYq5y63SopRavjFcKA5zG8ARavFikSVx28ir8KNGE6N1jncAbTW",
  "key5": "5qR9vfHSXuFLynEDpR3JgYVyhnArbvLi7b6LfC911mZAUxj2SLLKgHpjo36MjkyypgBWmcjrKKQo6EV7iM23czaf",
  "key6": "5zsuLdUM4tNJKnBo2xGxoKiPiY6JgSDmG66XHq4fY29ATwAUFTxXZTXMXV3aL23D8kA7jbVcM4XcHQkHrr3qrhhQ",
  "key7": "5morpDeitiKKnrD1knFei37UJ1HNcXiFezA7xj7ptpfbekU7dmDGPTjDFwbjVhAiomdNo5V8RUQpBeUt2Hp8Jb9a",
  "key8": "3FX65D7Zt64owVM2ixSv124ZsJYvErBuUvbjE94zELTBjpPGJXj9onv4reuu6G5TF93AhSiHYfk6cBPNKAsCxViX",
  "key9": "33Ub1RLjUXwKEmonLk6CH3mWgtM59iHkkzrgje3WCRqHVFAu19JNqdNA7CZSecBVwKmd3yWxeLkxJQYkEMbiuC6p",
  "key10": "2cwrGt4iqts19F1snmhzBKTAWp59B8VE9taEN7ghqaXqohctXDAA2PYcNE1ZpwUR8XUP53BKfSrEgwtg2of7LCU9",
  "key11": "mGJKuXfXRniv9i1n14ijoJ1TGULndqM94gCYXTTMo1zYcNv8U4DgEyv9bnEVX8VfJTahcvHCw6icpNan7HTfFhj",
  "key12": "5WM742WnxPWKkZGFgfWmzvYPwWdvXsWJbuaqRySqxKp2XrWKph2RVfLBwMJ7mwHHjaLyrxxJxHCsJxFK8UrV6guD",
  "key13": "R6JsmTnfNiZZazVXQkDWz2NEbTQJd9TfXipRULZYwHdn2R2cSPjs2RCP4VdkT5SxNM2EBjtBL4S6vkHavy5SQso",
  "key14": "KAgbb5wf9CMUDzRBE77jPAhrbTxZttUtxay4whgVJv7e2GMcpVcYYQYuuEspqy7sYNhzA4YhcWtSRGUkV3GLwfz",
  "key15": "2n1vhRtsikr78HuDNaPbWHRfpWvK42Qro4ytJAWugHw7Lp4Xnb1AvMpHzFGU3JARgNFDKpHAaK4dfHHHvoXekzMt",
  "key16": "oRwGoCtZeU7PXL1YfYaqhizjGLK5Mcf4ugRTh8w1nP8AEsoxW41FkUPp3mp2W6XARUh3ayxcGe4VXcQ6u3LZ3Ms",
  "key17": "2sCYnoPngPzkc5HgdycNaBJU9WYyS7irFFgbMYufBPmKx5USckknckpiS8GvxRHUnkR5mrjc8FP7ZJuDYm8qzWnb",
  "key18": "2kSRmtpYejYRCvpmbUc96Uc7YiY8kg43wNx5SnrhKzqRo8n9U68TNgTayExxS6LkvEQFecu49gGpRBs5Pco8hMpa",
  "key19": "5XciAGHDwDDUNKCA5jiyftbd8BnHwkFwEXiPF5rwVSmJJJmVff8QuRMmGMdZpJFYmC5s9Nm31q3B1S3Nu84c6wXn",
  "key20": "1tcdNZStNXQNsjVBMnYUmCJKF5EXpHvwHSkz4kus1qKmSDJYatwE97DaumCECDbrQVutYs3EWqQEzwSgjUekDco",
  "key21": "3wm5NEsBznzxDgTAja1hFwSj9JGu4VTXxHyP8hWD5cUnwJrNWwDvWStXVM39j566RziZS4KhnXuqKGAmvuqUtWmk",
  "key22": "33NY4nH4yzTMCyYwyAwgZtoWENiceFXMge68yA4xPBipHa9VqZWhXteBK2Qom5e6Kf2UjSr7HHR6EoGWqu6HKZj8",
  "key23": "22PiXpbh4jMqojicjWqEyatLT9BNfCBc47xvjv4pdY54fycVggayfru4PcusKgefgHuE6pmkyTc86LVRz2NY23Q9",
  "key24": "4RSxb7HnMUV1Gdh3JM1uEzj5x92Dc4FtYdAdPNzJSiRZLt2HGJ9d7xmh7bdvNq8jpa68PCe7RNjbP3Rocq1m8rgN",
  "key25": "3otWsonXK4knhVNHwXKT48n2mH91rwgCom5AU9pxKYGDSQB8KiET9SBnSDLeLhh3xUzBCmvYpedXyJiCLx1HPxLB",
  "key26": "5MGtBEh3BxeJMxvrEsi93ZKUZgJn3g8LqAMqdVVs98ki1Fg6vbUip6cFgg77yFUdLioVCEp5khJq3qtBreFVpaNE",
  "key27": "5anV68Z6xsZMPtzJA3daqoihMWsDUnXZnJtL7UNzXZYREQtmry8j3wddbiL7tr6Jm9rLipsxeAGw1ZMuUFUfCPQr",
  "key28": "3dAkTJad6g3zNfCVsf82pZaFdzBYAihNGN99N9wKVhHsY3V2cZwN8uoCuzkLLe2j1K9wMseC2tYtqeBFgEUELcY5"
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
