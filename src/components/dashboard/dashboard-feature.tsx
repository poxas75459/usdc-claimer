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
    "2BFPBKFHS69WXgfy8n64NFU8wVDMgrvQUYGKqw3in8VNKFHWhYPTUPekq5Di4UuwBZi3Ue6L7xPywybrWowxyAP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFXJnMpH7PyDYtcFh2dioCaY8LFarTKQuau8gaK1PjbTnGt2L9rXZ6WWwrKmt2CszXbzZYRWGZorYV34aoLu4Ys",
  "key1": "4ENAjSzBB96UuJF7nsVzBJEvHCMtuamNTWyEMykPjk7QHD69RrAtqbt6US73y9vzAfFAR8A3UEGPD35pfh2tUsYf",
  "key2": "2CGMcATSZLZDwmAqmhUv73JyrgaZsWZuVUnogc3Jwqm8d92mkKv3nW7aPBtdt1zTdjLz4zBza3Rbfez6EsVFR8VF",
  "key3": "5gXCB6UPaYhaPeHvZD9mmFjQXaD5axCP9E384uz8tUTHKy6tku2JH6umJo59Pmna8Utkrkjv8aHohpgg8LMV8AWJ",
  "key4": "RTb2DCaZuXzGoNAQkEdQjFTrbdbpyodQuq2GcQXzptPwjAsqfM4QQpmVF8NoMhrWJvxGq7Mk3F823cYCKW1bkgC",
  "key5": "5QSizH4SkmDDTuFU85w72JL9Kw12kqJLrxkysdxpakFjD1UkB2MWeX1hcNDQVZmPUJdoWwTRyHmfMwr7t3PEPhq1",
  "key6": "52HdAvBsDaaGiQRzNttpGXphmxKkAGLeW6tvyotArADhz2urVD5uqdTQgUwn6Ey7529EDXzTsgMiCgwTpAMQqoM7",
  "key7": "588SaRusEuGbo1Qpp7cFzKdEoW3PzehBWEybVhqWVmyFXwokVZGfpKvJXQzmgoj1rokRZ3J8pt5uwZuVJEp8jehs",
  "key8": "3P798b7NTHKo1aZqTAtBrw4mBZXcFptBHMD23f7nCh8iL2GQrgQr6GpxEnxiUfdgcPEtcHJa5inQRXMzUHzqqDxv",
  "key9": "5EVfKvx5RkKpdeoJ452ixXu9T5xRXUSVJoGTZ43Q4JttWSoMGeXSjJyMuwc8KHW4fmJRUn5PY7soqLvhhRWzkXSH",
  "key10": "5RNBgeBDshTfbkh4iWEZCKadkSsiojuccEWadvdSxzVtuRMkMtQDKjmCR7jrmwqbpxLSH7tY15gvwiisq2ijQcGy",
  "key11": "4um4F3uVw4UtaFgunhaLeHFBznqECqbBmqLxQLEnt56LorxuG1kUd9oVeTpHjmuJCYGxiGAcj47jMwrswb1GqiRZ",
  "key12": "54v9KwMSsdJ9TnvZY7ZLNPGnLYqbrYkPhts5HXg7B8VE8Kw67RWU5VNZcrgmECCk6oA47p2wxKMBGMWPAqa4uf2C",
  "key13": "5H3kS7bd5KnqUbjCXnVNSbrkZcCoGxnnkjYqyKf9aGx6drYwR4LmWyW1rM2VkjyZsG1i4SBrszKa7wjTJ9WuxWLk",
  "key14": "sjfReRrAQBFxa8ZL6AewLCEfLtMTL3mDkQEq98nhW4xk9ehmWp9Wuo1ApNk1gnEMqYbta9VC4JKTcTaCkzPNMRK",
  "key15": "4uY8oTdDTuXygRPDa9Tjay8HCwK5ySM7g2sC1oQ5bfFKbQwtMp895A9ufudp2HmkdFWtCXHyCfB2bDvi7HF3RMk4",
  "key16": "5aARTdPWkdqUUMqoEQaWXu5m1B1eZ3pg1QMZ4Gshu4paFBXaa3VkBSToZ9CHJst8xLwbhrgVA2gz473Asaay1WGx",
  "key17": "uuoEpg9jRCwQs6VPT318qEbaRajZrc7WD3y6pBkWJiFQKyGkmrCjXB7nQQdqhrCwbfyLtmcTCf3V8MpxWUxAW49",
  "key18": "3yi4pWpfmFaX1qF3UovJb34vz2D4gbArjfZZKSWd9Hfv1pWEk3k2UqHcPD2kgCteynLu5L1pLjWZcFE7CnCjWuwa",
  "key19": "2QeoC7DRvFqdPh6aBwYcC1yz7jtG2QkQHfbTKYTq1nps4xA4foEonP5LbEeT2Hp3DFiXzd926XgxSXT9aXYELSop",
  "key20": "2ytrgggWUviuZNn6uqZzE3wXc3597BY86MVjdEwsqBfiinHuKsye8iS5ZiHihazeFZexoVnyPXetD2eNuSdVGZAh",
  "key21": "21vQ5iSHgkWiryxc9U8tpR3KDNVhchYk9iGfe526vj2tHsBkaqavHr7vcq7seruTRi8UPaEuokrrcfh52PhEnkhZ",
  "key22": "5FdurTQdTtNHdh2wdgUaq1s3icYjykJBbXpuu5tpevukdYcCan1XsczSZz817UsNdn8TpPVxTjFyGXzG3whFQkk8",
  "key23": "3MqJ5rXDdoj77RGaxGE7ir1TTgJctosN2oh9c9FPQHa6io13R1baRf9cvTUEnstNGHM2HhxPo81jYD6DNQCtJmhw",
  "key24": "4YPyY6VcGb78PKmxjdGpKwfafAMH8oRkh3Y7GbGizrqPwmWJ2aEBRG7Z3SQP6RHtcaT6EcXessKbTejnUJJurpdt",
  "key25": "qfv9M6tMqTYNCQhFuixBFA5tHmPGsBMUPZEaAJ4mWZjwkdz9dsjmXNTdc8k2AqDELpojTixorbFQYNwbLWLz6Xv",
  "key26": "5aCq57atsJQqvSpQvyERQCQfv59HZ71kjSGc7xkh7DpTWpexZKz6v6DTqqsdm6s8tRgDpSx7EM1RJTmSCdP7UT7x"
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
