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
    "3jsXLE1QUrBcdkpzAoQN7xLwD5eWRBXwPUAsZt3zTELdUjksoF2PqD2MWsN53sAFDyUpKHedfNYAnScTZY7vg7d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jNfLpY7nMk1ihv5Mnz21XdbNuRDUC6p4xHXuyVQYHiEjrGVbgLGGHTyikKhNJjspbSVj2k9EK8BLE27QihLfABS",
  "key1": "5g68bcfyJhwidtUJeGoDarJjeBJRwCxWzSg97i1qMW9NQhN6DABhgQLeNixTk6pxfaYay5mrjrEbMpSNvDkAopmR",
  "key2": "3YjzxNdWV6JJTNqsmcNrn6dGczCmfv23mGCFYF42WCmkaaaJGKg4TkfEqzjefw6vSVATXYLuUCLL2npS9MvKVeqm",
  "key3": "4QVX4wKe2ALJC4rMqsXuCLwBmLjFnrFc42agXkTb7pXTRU3VZjezwYYSkjMaiB2u8sV3AWAbQrchZHKrZYAGRpk3",
  "key4": "3PKeJugwJFpxxM1hBSkDYMN6AykmdZozntFQfTyB2p1YFDuXEMFLfyJTx6WZ9rEETaK5d9geGK7JkzN9CUYrrP3A",
  "key5": "4BLf8nqMWUUYL4JjjU3z7nEq8xnmoSU6o4c9NbGEbRT8UdhUwDUesTer9yMjNa6YTBaAdoGpvVQL3SgpriSpx85F",
  "key6": "5PnLL9DaNR4xiL745MGSN9JxT9Sq3r8XEkYK2kUvHMwB5Mzp6RK3kaRvkYtuVMjZwkJGaEtsbBD5WszYSw5E4hoy",
  "key7": "4sF2yrmQTdab9Lu1tpCf5ys2vToVjbkKvsUWZndzpbz1BuFf6hYofVePGbpzcqDQurFLBaf9aurK4iysukQYHsv2",
  "key8": "57Ac4HJj7dC5MdDkMtfkVMN2kWN3183aCRVxBusmYQifB1AfMkwvttaTRL1fZr7kYJNiojy6oMSsgeNCM2FKDo3d",
  "key9": "4zGdd4a6H7sQ83cg7nbV4i7WFSQy2y9AG85yDtvnBeEjtNqxuEXb3UKWvB3hzukiEmcd9gCPf1niYb3gb5MYwzCG",
  "key10": "3XeZwsXTsL8j7nbGkmEwswTfTULopHpzMdz3uhSwxQvWAd3ZBR54J8v4srHz9zoSvTyyF55Ch6N3w4poJhHHw2dY",
  "key11": "7KkxsBtrPbiKkGF9a5tW6kgUHXsmBPrDqFpKWTH26SABdiJt2CjgbdjVNmH5JcRvd1CMuY7JwLnU7ozoxFRZsAh",
  "key12": "4naeLpqRueR1EsQdWhGNYR7aiVpkGoJ1wmWCFrVVWZCeXGSy9uqVPbzYXSRA7PLCoWUrm6f78RZyKarmVVoexuj4",
  "key13": "4k5zhX8QsM62Txhg89f4Lf72Gifv1tKKn1Ep1mCvo6jbbAcs2VLRvwaPxzfYYpTeQte1ecpTrGvSPnFDxKLkpqw6",
  "key14": "2YnHpTUbEF6bZt6JsWbDarXs3JnLhKNQ47CbuPohHGNeTj4bGSCATAxKRPsRi24owq9RtfsEEdCETEMAzhardXsw",
  "key15": "5vdMuCWo6rzdxKCmQkxoBCwZ9soAkp1mXAVEnWt5j7v7TXEbu9SCccMY4STwPtZRYtaoxx5wowWdAVKoaFZ8CUB1",
  "key16": "5N8VmquEUVx32PYjcjb8U2TYzjyZ7VXokdqGs3vFYivnj7WG6YnBJnu7eZowMwS4r6wQeTrpgQAE9PBQ2r8terzW",
  "key17": "gkZXpd8u8wbRiH6zE6RNMTkzyYQqh1VpNa6MVc5sEePQgEHfrRmLF4P8GFMeKt3YMRBoSSxRkWfJsw2qsmgoqaJ",
  "key18": "Hvj8bJuWapXfqidCfZS68cL8rAk82QZnxuCUSX3eFD2dFvr9qvbdt9EezdbbyaCEYTZi6bd8fEVybXwUqF7yNeV",
  "key19": "4ZR4ToaK48oVkPyetCq2WYFVFaoxfLn8qr7WbmDcaKfmJ7EErMC34qtwqx13WAo7BcwM77sbKW4Bjb6jiiZVy9f7",
  "key20": "21MW4KaqoSh5Jqvjx4qkZtZ8EE62rCrfnoapmWw5zptsPkpirnas3HWhHUAeKgZqxn8puxYS5xTy92BUa3wxvAqD",
  "key21": "5X4uDactuDyFQtc93SUTVzVPAvqjx6CVWh5yrxeKknrcT1NToYCfu6y54w9TVMGb4V9syEmfrXXk7ngscwTi4tYz",
  "key22": "5MojT2L9nqa4rrYwDsZWMWgbnua9XkAMVirnLBdJYqz77S4NDF59PTasc8vU7kdhfsMhaKw7zzeqNVVyqPkLSEhT",
  "key23": "3USjjNakZhanc6mXZ8S6FtffvWmDzKALTV3kbqdJG2F4DTqdEsn15k8AQKeZ6bEG6wyejN8VZ5cMbQJP6F17v1bk",
  "key24": "3YvJRaA2jHPSD9XUUJBP3wG8P2o5jAjHD74tznmUAwAU9SHCbA3U1FCwtmdNZNvP28a4UTqCM89cLyJ6FapDeqqb",
  "key25": "5spULESoJBbXQ7j8cmvweYRBrgPqkVzV7FpVeT7b6xjRLDv6KNsqSWDz7ogwSYWFt8S5CTFHfnVSV88CHspF7gnU"
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
