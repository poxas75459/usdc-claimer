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
    "5F7vzSPei2jfHvBcSNAnivjgf9ZfHimZmbwa6UBimMcdg9EHJP6CzMuSkdenPGvHfDqGr1BwZwGeLJeHtijrd7vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpJpSeRBk2cuwtwwvCVMxxjwA8YZptii9Dm5efiMRD6mDPLaR3wZ3mHqhdJLZC5zbLgk8zw5jArvHEH4b7NmtbV",
  "key1": "59g2eSMUpFjDRGNNoXk5EhbHgGX6gBRb9L8SpXYotpLBXTBwnugouePgKJMnxpewTrYVsrhBbbEekv1831QWbuzH",
  "key2": "5dQgRvjSguWUuChzpvGG3ZqUrJkLjnX7xYfLJxu1cA8Uuy7FZL13x959Mdu8f6hNAazmaxRqFZzfAyqGoUfryxSH",
  "key3": "4K8XH7LHPVxzkHE1sLPgv957aUG2u4svKZxUC9dw4744YBR1fXmpxWF9MdX6frHcLgbL59D47xUUHVo8ASu2TfnF",
  "key4": "4YHyVzMw9WfFY19xQqkEH7pgNSzmYwesPmphk3sx5H75ZCFwWnVN9RYb8BqkEHBQWdoDPYdUUJ6oh6fUN7YqMzTN",
  "key5": "xDanw8zWvu6b5H2Xm1tjkscwm2NCztZeyHHgEeY4KjjrMQ85mZ69zPqNTZZtsU4KcR9p4Q1B2AFmyyrWHLSSngC",
  "key6": "3vzkHig4tWciTBEcNywQAJ458nEpG1RL4fwnfXoh5YDT5VjoAPomrfCWY8bkNQb321WuqvBQQePDoPaAa1rPdhbC",
  "key7": "bwyPRNyR6ULAMQexLgPMXhjDGxLJToHJzYb11ayhhv1CyuobMutAFZ97EVCa5DgU1Z6U7UNDzrYgtDdkHEuHpnp",
  "key8": "2zvbHxJDDt7KkRfx9cvhEixT7hmogXbJDDca9RBxf8mraN6eaCjuCfSbKDrkeMfEV1KZsygHGk6CjijyvALUkUHH",
  "key9": "5tRMCz8WbTHvbqD4fz8Rk9GkcTTZsqM7gEEbg8s1SPmFcsviGMUWobzd1LhuLSjf2QoBQLiEYQxgUMCsiprEccHp",
  "key10": "3Nj4VDRaY5UtHk9n68DMEQWz5foJMQ77VuHMCpwxdaP44dfJMZA4Nv3WFm2mtP7tU3mbw9cG2NCRLn3r3K7NTCos",
  "key11": "sQZQoUZgz2YS7RuPvXDFbGVytYgP1DAG9iZyjbsXNVdzGk6bKvqiJzXDELajVCSSJhEH39prrZLjmvThvKeyvUg",
  "key12": "5nmE5CdNsuHSybWK6LrbcpwxdJ9tSARCjoWkCYs3fEp2DtmDnSFNiRRNhwsNV8eUpFLmZXMcPqagUn81SDtbFBHa",
  "key13": "2Wm8Fg6uLpyTNjUhq2E5rBHZQFe5ZYFstSHxaFpCVYCw4T2sXi1Gx6QFJXvALUiDjxc6PZnW729TpB5nF8QdKXd8",
  "key14": "3rxTVyLZhSGZ5gSqzTdMhgMn3wUuvAnGHW2pLbvijK2JuQhafCk31S5Z3aGoVFV5kDvG6btpKWH4yYpehdxsoCAK",
  "key15": "5dhdFMphVQEgxMr6AsoA9B5Xbk6fu247fGGh8LJiqzdMy5aLS1m7SMSMYg6GYKr6AauSHBEDngdVBqtEukrhVQpK",
  "key16": "3sFUatHB7VDa1Xr3qepBQ7vMSKG34jL8kX3tUVhQToXwftckfwzE3cHFdaRY22AtW5ejMhXBj7WJnmTpeQyRmPVw",
  "key17": "54EVVnQBL5MweMHMJQ4voAXYcpZf9wxe28nZqqpaRqJi3mjRU5oAJuasAUyFgaotW26Z27aeEFmyDvpPMZhLqhLx",
  "key18": "2BcLpAwspAzNgTJez9cNRBau9HVKiv7M68FwQoW8L2u3gEoFHB74rSQBf8bCG2KFUAMPWfWyB1ZLj8Zii2Fxi1aT",
  "key19": "42ZXm4WE2AtWFHvmLWYoBomNvbafzx2YbnFCVpfydiQCrxddfECN9BxHEzRQPAcHXFjnVbckr7wb32ZTjAdfbZWZ",
  "key20": "ER8BRjm1BLnddWs9DwZfVpPki6TKmSY6GLSAU1QQyGtMbEHNQZd1Mi9mYmecwj5H31WFwqF1p7BfU8kuCDLhiCE",
  "key21": "5QUKssWNdZNtupseXJdmpiLenDbSuxkcbCt4HMdXbXJcaDFdEpe7tGGb53iZ2HyU8dRAXTgrrhYSyZKEs1USie3F",
  "key22": "27QUmcXKCcvCqKCw2ofAUofhUtXmnXQgjcUvNJnzoYDgTAkQFMiNzupCUKC4giMwoHaNQ6YgKJD3a3MsehKmc7XX",
  "key23": "5YLuLhs4rytcaynBiMizcjBy5wieN7ZRfnwg1Sz6rezmbuPWtWgF91ULgt5ATpF5tRHjR9EtJRWmRmsdGyWHK1cR",
  "key24": "kNBZNrRR51zcYV1GgPveA1rxn65AFnavu6zwiQ9DGoG7qwE6MYhJiJdQ5JAbLeDE8LoB7b7AG99UZ2TRNWWK2BZ",
  "key25": "3CfBGRZ8GQH2xwwXV5RSqYUEdDNvsm4aZoqvM1GScWDdNUuc35kAyAQNnRg5pc3tHQJq3mNuwHVRPxkXpWEUHaXM",
  "key26": "4vLqmuHiC54v2RJgU3zanY9DhnLF1uq2spEpDxxGgHfUWxK7u3Q5pUn83LRBJwS8Ho5J3zaH6BSNwjFhTkyT1Agq",
  "key27": "42csMMcT65i1rbEMXq1ZXWVwEFU4M9FAzCYtm2SQdeaqifPokQ3qHh6PciD5QdQm1LN7xEPCmpjjch6aQRpLGPwi"
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
