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
    "2KyJKKLrjXGzzkHyNu1MbHwGN6Phkva3F4BNRwA32qCFHupRdfPCYeEyMid8cqnM4SswHDSREzjgJj6kHStWiyRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1wfCSGCyaF4WsNwdNTRjnVsVsT4h2vJivecdZ36hYdUjtgPExgx6eMzKzQQhfdQkrV9D77yKHcuigK6qREX8gt",
  "key1": "pEPg4r3s4LwF5VxnmiNT6gYjeKTAEqsMUaEsDPT9msqdR79krMr6ZDPRTFhak8UZCagUjCVemRXH2VHVe75K4fh",
  "key2": "2Pg1vgswFLx944XD6JCBTyJBQXCtcivt3KJimz2jbSNCveZxuYVRzip8p5ESHFs7Qngrm9yXCM6ejEtskTkLqmni",
  "key3": "3YpHhE7Qf93jYJ9cWCeUHu7nC5ZyPzqATcwyz6ar2bmBUo6255VJ6i7SsWhwSXc5ncKd52SxEkAZLuFaawThwfGE",
  "key4": "2RmL5nfGBzRzERh2qumQYQurRaa8KHiUwoYnfyNHKtRpSnfiSeQcqBc6yHR21dChgRjxdELB7tgSd98wqXedcHKm",
  "key5": "29NxQ3yky6T7zR3Gn23YiQejso8MtUv9hCap5JGiBUATeRpovDH8FwrcSeeTYNwwjD7vr5h8tqa9eaMjd6wPc6kN",
  "key6": "qMRtvJmt6yVpaZ8sGugCQmjKZGMC4cjtYjGpvroQciqv9wB7Hb6Kjyip1fk6CYqUWgmAK9SZPPZJewTXmruzRha",
  "key7": "vP1JeHQ36XsC9Nsjnbj4hXtm8HoeRh6oo7GA7M5gKauR7VqV41vrjLzd4mos3JMwbPxd6FBiQhSFtmqntLBpZKB",
  "key8": "ibM2Edzqm6K6p271KutrZLTo7FG5EUyLW95Qwt456iY4e4xLiFU4MC8waPPfNi1XubRqFJmkFyczexpHzfUx8Cw",
  "key9": "4EJXm6dcXLVK7Yb1foEFv5oAmGtFrwZJFNp8nWnkMTLWQ8ggj4EwQajcMj2YMi6cNCn1gRe5Co3h44XMABLf4wNN",
  "key10": "2BLRShcgE2zJb7D6LhWaq3wN9EcUHjFXt5ta2X7QwCUW2JgoVoZUvWWtFSmZ4Ljzd5LAJUdhL9wiqYCHncEjgrcu",
  "key11": "5X7aRD5oA1f9EHyfMovqyLYUQxScnD9DBdyqzYY5JN5hCWgGgLTX1KD2hPxipx6KkjEgs71VkagWdKduvZyRVLHL",
  "key12": "8SjtpmezkNA3eRAX1LnZs9dx65pqPMEPfFZEFYSXRcWJDF2R9npBHYNrEL31XxbHcZvPJgXEcx5ECk6Nz2onXZ6",
  "key13": "3HesH7DqrUhQ7AnqH1p4hx59G1weDehZECjreuFoumo6ZPT7wUDCRekYpWcSiV8p5E8JP2dv2QDjvMZYrCfX6oM5",
  "key14": "Aksaq41DKAZCac3Ls63LaVafMhi6umeuV2v8wMPT2KLZ4hHg8Z5mtxvUiLA9yAPbsXUhxbtCQJzMCMbeCjiLN2d",
  "key15": "55vU6vjD1JMQLbeXFEr8cAVs6zBj4CHEVeWeGBDVT4M57xCT8FkBXjbqAbQTK87CgteTHxAk53K3WYoxvseQbsU1",
  "key16": "3AydSmcEtGRVZS5JAQao5uJfsgF2UfMdQWCLG92AF25sQ83Z86tfXeK14nu43FbWmNqUvu3iggVy3nvdSGbAjwW6",
  "key17": "2YnJe7wgdVrfq1r2rpJ1mahaj6hoP2dTYKxvi2yJNiQhiFqkx5K5GoJBGpQQaNiMKQUSZRYQeYVYKM4nrzG4u7ak",
  "key18": "3T83Lu1rdVmaGSktdMVL41zyEpoobhh6C3W3BNm9Wbhd29GkCPw6Aju1XLEiVyHg7JSXW9mHsqNDmuC5CiLNidDS",
  "key19": "SaabefvtRTEABZuahrRFZXzcHzchsZ3PfuV6yhM1ADfobGr8cgXm93U2c25sSz3mUm1ewrufo2Ut9V4CesKyRJ1",
  "key20": "673KB2Dtt4WUbrBkPkKU8RFDZtpnRPF8Wy1h98hddJEqdd4CSS7Zi3Ag44oMDoMiSZwmENgX5JEW6HQPiLDLQQX4",
  "key21": "38JydDc9fHTu2cTAfCqo8ohAC5MwKNxozgRKMaE1BHtmfAtH5PYw5pNvEcnCW6HdRnpTqgAervjgKDGtwztvZ3Jq",
  "key22": "2Fjq5EemWxph2RbYjE5fhroRq7svKSP92NNYUxSrx4hAu2358qJSP2MJVuiEvz6VPgdNEWDfsyT9bnU1HsVtmriF",
  "key23": "4vZ5qvegJjxD1RSoWcKviatGBfitKzFShsofoXgmE1eQX5WRT4wsraKo86AkDh8esR7uFjgoXi8HcAkY28LpeJKN",
  "key24": "5yFtNAoUp3R2MSsLud3KLPBCyLAYUUByPxAAohoYoA1ExX6E5f7tBnrV2hoo21mJyT1viNm8HgVNxTkz3L8M1iui",
  "key25": "5zg5P6TZcQJYf7AM4Sf8LxBEwEgt41F8gD8e4F4vmC9nJ5amhEgzT9f3GU3kP1BFUxLgoowubDrFzeGhgnrTGyRH",
  "key26": "4TRDe8bKLk8XY4L4mGCSccc58n7DBXsVyK1aHeR7s1DZiFbieKkstwBnTc9QZHutC1xBzs41U8ftLFTYtGEQL5fr",
  "key27": "317jtbhyyag7hZKpsHb7BBDoqQodgQQ7jt1RuY5SU9UhYWDQLCsSntAtRzViJqiqtj6fhDiKrjjrAvwGSKkr5bmX",
  "key28": "gcwnr21CxrHBibagsAJ5qTJvVGyymm3jLTPJgyRZgi5d2P4hyeWD1uxKQ4KD2sxfUcciFJmU5KPd2beXzDXibpq",
  "key29": "3gZht5xssZbrKufHwDvpArdfiU98kWLQi2wUegYVcK7sz2iDmjnK6KkuDUeLRkM2vKtjFxTZHXZsooZdkJyar2EP",
  "key30": "GBP4dF7Y83HUBcVthUHcmiNnDL3njs1GniD3hAsUBWnuxp3B5WzbdJjM47Zwv7vVpUG5xh6nWp82KaLzeY6ehGi",
  "key31": "4BBgB6L9XeBL4kXoGN8hmikMKYXMcmuGvbXZXafUiwQbDWW6KsD9c7BDcDY4UcjUbte9wysmzG1GXgStGPvzxNP9"
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
