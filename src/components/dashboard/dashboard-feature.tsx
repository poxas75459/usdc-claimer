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
    "4GdwkEQymdtkqKKHY2xSy5ZeBjSHFxqqCTRxxW4L8H9g7Dkbc3bo584PgKPXLSDEkyudZt3bzSsKEusE7GfKH8VH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E13GDbQfv2uiRVUSjyjXrqVymYQVt5x593Gi2S5PbiuFo9K3DU84Sv1xHWce8oq89unZrvLnRZKezKEhnKUQw3P",
  "key1": "WM89wJVjXEcayEDD6Fky1XkzTJJPtJxS6tDULcKPmqeYA1NW32zor2h4QTLBARiQzJ9QkzjBFhZbLkGQxyJ8mF4",
  "key2": "3py9r5byG4q9cHpCcxwAM1oDWSNFKMKY45XFhDEDH42F7TF8BUskPLBBDmWVGA7GvoDRboEtiJAJnjDAkwcZhs7H",
  "key3": "63aURoRD31ui8iK3oXZ7S35mcJYkXTsxbvtteQuYBuGGkN3GSfpMqFzZy1U3VNLGWw1Vsq2jANRmbmqoK8nWa2hC",
  "key4": "mu4Nuas3Bamju2jXV9wKBwPJZPAByiG3bXZhP2RfzvruhYzabrpiaSknJjhTjiFB4wvqxoqgy1io6221CZ8p2vZ",
  "key5": "646jBm2MQQWbH1yj8Lcf2RHgWJAT5akWkh7PkRLRHXSWQPde9Upb9oDNA9RVuaUrAgSN4g843KpfGfmngrkEKoa6",
  "key6": "4yvGCmWEx6jwjecV9GwwWZZR1NhKkaFVC7JTCT4QgDzRdGqF5oB2J8K4brAvkHGGYEBm5sXfCNUjRRRL1fXUWEcG",
  "key7": "5D4ar2ZjMwoJqfC4Ei3zyXGMu3jaDFnQCiukhSYAAB44okCmruWFZpHdEBdqBXKu3eCXAXhyTGjzqEAXDgCBDGU7",
  "key8": "5srxFDPySkiYfvtevmkdtZnXBHXUh63aCPGnHBBywrrMVyjxcLWNbsfTLYJ3kX7cPCWTanQ3W32qSA7bnVYKwm7s",
  "key9": "4HtjcXmeJLRdFLsiqYiSNiYCTbsZFL75zqhyxgEhm8fNydzJ3N3ccY8LEJemr37DkhzKgDPNDovLtoP5onW76QLB",
  "key10": "6mUU8K5Yh8cYVLwRKW2TbSCzkgp4xxfa3tcxnxug9Zxn2g1qwzB7eehZAKUb7aXLGevc1kQWgaTv2ytqXRDJbSk",
  "key11": "3WBrHf44hDgTVkm5j7vzLCjPAqgag7v1mp6gwZn79E3TFWMH7Knqc8xvhCgv8f8BZcQF5nDKqamspyoNMZ84gMQR",
  "key12": "2M8aieWSZ8XxA4dUjptx4wqmNcGxH5k8ammYNo43gxGrm66oXutTKyEMKugiZ4pdLP8orqqv7yxZuH6MonXFdx1x",
  "key13": "58XdHR8H1KcB3wJPdhT8xCfFzLVAv4qqucJfCmuB6nuQCqT2NnKQWJPoH3Ku571tjKhdXkuctQXu5x7XBdXyf48Z",
  "key14": "jmwC8HnBeXBynD4HMNop8WZuRDTZL8dKqVbQg69jU3pNEoxSCHg9fe5bGSngcw4DB8b6U5GGzwLj2rB7MmuZCdb",
  "key15": "5EMTAkXqytD9YwreBEmdKVcjmosB7F1HP6f9Kz3ivTv7DgnQL1i28g4T7oVgcpRzFSHcVe7gGBDPTfPLzoR8zvZ1",
  "key16": "51B5L1ZpeskLgbad6FnP4m4NHSmdxkY7a68bHgfUxeaLKX2qHtPHrbVyWyUzRsoquF7JH3xANc4mwnBpmcSraMTV",
  "key17": "3HvHFGFCHFykZf3dEWiS1tcBnP6XTFiBfSBaqwvzXGKwb9aqar3ZHP86SvteFXxLHq1ovPsLeWQDkLn8vDApno4f",
  "key18": "37bapDK4CUxNWUJG19oUUf6QzHkS5XMBqwBCok9Mo9s9JX2UGga2G9i6QsPyrXRwYMRUfunopXYb49vQLr2hGUCt",
  "key19": "595vjPAktnuB9VVvtHj2wQ9vP4f72m8JWzxqh9F4poif2VKeENAN3tXG36pWQBRQ4wYp1yVGDszgcrqsomgDToip",
  "key20": "2tHCpHUja5fQ9SKPxHNxE5kb28AqHKwWjDv5YATEX3fCbYCwtxC6FYUS3XLnDLNGTsXbzv4KGhnGC1rZBMRLhZZ",
  "key21": "o72WiYqAgqhqwi6X39SKYhWZRTwtuQ8kKyEgNrezam17kaqwGst2NVPsj7SoUSGTmXsj9d5YB5c6US5avjaHJAy",
  "key22": "5PcmoYo3na3diBYZBp8krq6uidK1A8TGxokJQbW7v3XcNijqYLaqfHyc76FJP6RUMDw6CbMtuhEbsgZH2ehjMUqT",
  "key23": "KyqxPyCVHvgxLEbMTJgWvDSapEoMS6rGLxBjHcBcP8Y9h3pjYPHwVLDUN5kLCFfJdfBaZcCDVirHqbNJ7uAagWr",
  "key24": "5hdbJbfE1VKEVY6ragfy4aR4kE72Whqrq66VJkgtX62muUFmF6tSdN7DPo5SpPUCjMmovFp25spV2oPpuxtT5g2W",
  "key25": "4msrPbsprRq8dZ8CeMNpHE7senaMtoF97jV84FZoV7PigoGBvASNXFLrkStmjxFJ7NHEQuYrzTTzf1ZjsZRqZxHL",
  "key26": "2A9V3y9WPVaxNznpgS3unmhLfUB5GsrkuTLjPhMaWUjmLSiy8sMGXHbg2SuM8YY8vY5aW3qELx6qpsxB29MVmxhx",
  "key27": "4GB8QxnbjkgVXW6oxNcy6hRKfnqKxWpywBibNTaH1bNrfqYYUyCes6z6bGYpHDx2FDNa4UTvh38T42tzob2RDURM",
  "key28": "4tjgD1dy15UbPSwmJaKhToU86hd21J5VoZetbkkDZaWvR25cxThutq1ASAmw9khgH9uVrCyb2UMYcLpFEac4gLpQ",
  "key29": "5oJuJ1dx5n3M8ZUba7BUrgdwvhB76qoVEXHYCnqXxKRiQdkQSa9dsrkPaNCq51NxMjPRdCedmR3XvYyabaek13WL",
  "key30": "4GZ93AXxuiRpFEfVxU2ha6WcJeD53LZPsJocNWTGPWNSU4k3aMBSs4u3qzC4VUt7MuqeoRPtyJwxtxRT7LhVgp9Z"
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
