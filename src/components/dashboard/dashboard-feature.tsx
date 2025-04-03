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
    "3SUnkXKPk1ixK1Zzb2oGkymxKrgxx2sQ5dYLLB1ALhypVDT8FaWbY4AuMcWMVCjzouDUKEnnLhYgYe8j9i3ory6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfbpyMUv9f2m8hLQU4NE2rS3L6DRd6ft1h7FSVhFdyLWJMis8SX4hpEuxYzMcS9HJU9SSPAsfVrBA5CtJNx6cBn",
  "key1": "2ivWCuTYqzvxkz8pRY5Ex8AoUSxwyad6PSZ1adGVcVnPJ4B8ZM6y6TNKVckidcwPAJ5XJtpKA9A1SDUqCU5UPajG",
  "key2": "5J5DmAYccB3gHeUo3nfNAwHPgayfr2yDGhPtNUaCEQKjMWfCM6L7L45NQKkrXKPAd8JQUj6BiTokHk3Q6SnGcrvh",
  "key3": "QwddrnjPd9Ar7aNUWk2LaPjCAmVYip89GMeM6ZR6MegUefUEsh1yuN9w8Yj4CKscuR8aujx529ZrsLyMdqJt4YQ",
  "key4": "4urN1tPgSEHoFjvY1MeZWCbeZPW9DGt5mnei7ttChgMMBjKLfUA5VU76rQnvRdCZwowED8DnVbvikK5L3wbtvLcw",
  "key5": "5Xxk7Xbm8yhD2dkdJXBR7a1cy5coFTRjNAT6Du13DdPTrsA9y7DzdCQ9kBRCgLbejUinn7oA83AWxjtNChuVBANP",
  "key6": "5hmGk2So62w5DbZxkZ3cjeyQCvcwSkTQbGaa4C9XDsW6Nw1jiXfNCVbBMEfdULwGgf5Gn8rCg4h2g7crFDBKkWsK",
  "key7": "494MSo1a1wYhut8o4N99rxi5rJ9AQyxnAYJ9DJi3HEcsyxrPjifGtchZDHNAzTRudPRRokjVVTSqqGny3dHD4jmu",
  "key8": "2aMt5ihGc5AqN3Rnnk28vigDtnjkfGNNyzuWfY4THNk6sK8AmxnPhTRKt9oYBnRg9nqedqee1tBjFdmWY53r8uPz",
  "key9": "5m8yHG4RJwVXsii5hGp39uyBZ4sAEGnRjqFDSMripSPPegmZBE19gL2kgL9hwhxiW4V5ubCWK8abe74fRAdLk6pc",
  "key10": "4GkK8ZNbVhB27G9gDWBNTq2fq4gegjw86pAYDVYfyYRQVmhQPjxD5mtNuNkoXBsc6tmMaoUK5xViuLkNFCJPZE5K",
  "key11": "2A1qrHC7ssL8Fm5DmRT43CL5TSLrKLdx6pZAMzsRnWk8vM25N4zPZ3CCS4XhbDtHApojdBwy934v832t4u49Bt3T",
  "key12": "FM8uCxS3rXbgX8QeHU5cgUH6mGM4Adxs9bqkJtbV1CGNDDW8U6sProFWGsEbpY3BmQKAXt8U5mrraB16d4DpU9J",
  "key13": "4TJL1CCksjSMWWBKDP23rHUxSJwiPKjpLyVMH4CMnuMC8MqPkzqjQTdV5xLhoguxgPq29yZGj5MWVrfopGPZiiwx",
  "key14": "3CGuSjqgatbMxmgX71eeCMnkABTY16GFhipnfPDzJbTcSUb9f3qVPbZxLKg3jG6uVqYQqNVQyPTPkhw5VNmpJ7iE",
  "key15": "32RnWSS5CsdwBWWYR46GABjb2ReVqp3FvrMMGu6ceF8swWD3xFhATNjWqEL5dbuNLZiQg9udCRq2xzQNRcFui9vR",
  "key16": "bvz1dFQiFgKzKxKbfaiaSCGvZtzncAmrYh9fZmfgY3pA7QnQgMzHYgTBUFf6dY1ME7ar71PrnnvSyhQYt57RAuz",
  "key17": "5mBc11KGQZfMBXMpxjLM6SmU7QM9QuX2zxfSSnJL73mpssqF5SzQjYHsio2RMKXtajCyfuMxasW49CLspk6S9nbq",
  "key18": "4CVAcg5aat8Zj7ntY5s22nzF12edaMSNJyd1FghiYmBqU4n4912ZBeT6x7XUmSF6YXqB3T5PPphZ16bEdJEHb4qU",
  "key19": "5VEVQUETETqz5rJ3VFrNeD4QvTHns31Z92tKzgYpxsbusojUwQFBoxvDVma8SGe25gYKUQfasiU8fUEcmAnaySu1",
  "key20": "5RmXmuTK28pUNfBBsurFu3Add5GffuZkvv4HjcY3h6HjXQvrxzZFtPCJqwseWL8JMTt49H5vUAo2bcvfNJepVme",
  "key21": "5rzYQK8w4d7H1K5Ep6d5NfG6hapqWusFETGrxEUDcddB3pHmyepR93f1geABPXmBN9r7iiurhBdrnNNmNfbN5V4T",
  "key22": "3mRvRe1oZ2PqDJXhmef1n5VxBh74AE4aFUZR8occDCRbHLdgCvudzy1zqyGQhGMbbmeXapKZrt5R32G9T1SsFeLk",
  "key23": "5FRvLJmd4uQLVsnsHSbqK9EPY2k2rdvNa4R3J9T5Vrzo6P4atAEiktyyrRq39f8nWws26JVL3Y4BcXGnqRnYV93p",
  "key24": "3aYxde1kWYstWU6nxAtbMHdTfxjsZvMi6tqqbH72WdBKGpzbzcq2M52qZHoLJHShAfxQbbYWwCHpAtTjSjjPMM7g",
  "key25": "Y8w2nGQYtfroa4X1RLa2iswuUxirSXpWR1Mvscpz4CR4pU8sbXL76qbGt3XyTFsWvKWLgBtLNcLDiiunPHeWapd",
  "key26": "3U1Gtx6BZDxcEstbrG5xCKU8pQQa81mC9FTXmiSh5Xpjx2VNhndHMRnVNG9S1NU1DXyPnDgDz3uAdEnKMC5EPHeB",
  "key27": "4JDPDEcpUeGKWJhW1qj7MHxbLgCwGzmEGq7Z9p6h6qzcwmrLEPAywA7e1B2aoUSQZbXGEa4tZfzwkh2KXYZywx3U"
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
