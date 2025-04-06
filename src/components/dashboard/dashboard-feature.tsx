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
    "5BnRSaNvvmihX3XpcqvGnWX1p2DUDW9YKdkCbjmG3RmaAtvkKDF9fhpL7M1WvG7X98q5HaZKjGfs2RPxomdsr6dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3i3dPbFPtNMMF9YbNk6EBihpy8ezBDBcfTH1d7wPXdLvDyN3C96nfSJaepdqoBmEkoKUDzrvK9X842iArhDYB3",
  "key1": "2ragSqyCvokEfAddUWJs4gFk8nNNBGDve9svrjhdJApfVh18ouegZ3hf6zwRKT93KcFrGmro6fkY1m3poAXimeAz",
  "key2": "4k9TpcK6zXkNMCNp95ady96RtZ2UVBW2vr5reFAqVbYMqnNwfSQNrDc3PB69skixW5zGahirCWFE34Z4tq65JFN8",
  "key3": "4c3UDZmKsjqEdEiodnvAeZxfqLmtxxHvrAZPi7Pyr2Vc6DB1Hzq1NtVDdUoqASX73fifMSRYHHK8Mei2kBEthyDx",
  "key4": "5W1gfV7tFiJtoHhSdLX9HufXSuQdLMa6LeeXFrHv4xQ6L1wvHGkkW3kmBoGj8AiVyMNgrdEDZBTixEw2C6kjucrV",
  "key5": "HyeWX4GoxcFwWNGUebRiA1Hj9bBJMepCjpwk8KRnHhnMJ9SGAs7csedQAtujmbFyYznzhyMnfCouVTPLLSXwfeY",
  "key6": "4pwPJdZdG5LjAGr4jj7GYurByhWMk8tgwiGWQ3AiJRKarhxx7dmvMSY3gkrTj3Eu4DmNxCS2PcwaqBCRMBA8f2k1",
  "key7": "CwHrukS7M5PMLa4wBJpun8mh7Z6SH9HEtr1ULUwQKaQXjw5Aij5r1HeViHc8GdogwMsaZ9PhtWfh6wCTbsRZbSC",
  "key8": "WJgwpEKrbc4aAKco7LUivqGebRiaa7bRaH7g9doYmoRJD7P5DfVRxQ5zadGQgnpsRso8tC2A2qZ8A1S2ATzbmbr",
  "key9": "3fcbhCTMTwSBymyAEVCfnNppL4iEViJW21ttas7LY9Ady9NfCxTCTLdMkEiWriTfWHF6GQZKbLeHUw3tbxH23ZRL",
  "key10": "2vsnR7vEGmoxVfFKaqRjUYp7NRAQgXKJ6mBmwxqkQ9Mpyb6UeD9k2nmiewgdvoXmFc5RwqFpxpXuUVv8Vtt4LEJp",
  "key11": "MZtFX2eXZqqyU5az6LjgJSDAipQstEnLfwJFigHAZX6iMBoZQtHamfdL2YbjLSbKrzDwT59gmrTetDzbFhEpUJv",
  "key12": "4SASZg9CW2qUasC3JbG5J8wpEPi2zYbL5yrirtdmET7mZ9tKkENaYkBnkqhggyMpAapztnCabpZs1VADHwcAKxTT",
  "key13": "559wFEio3DK2pciXYxnyRo9Dqi9AbUqwArEz97BWxnJaETEtEjAWDyuwAqWAiDkMePz4QiD4KmKLySVtL6pdEcU5",
  "key14": "5E4ytCK1xvbEXPzU4zYHECS365FntEHfAkYESbwg95YsdG6qXD2MQW1cwqbRCygYjuCvcQYCanVy54sqZQjYTFUp",
  "key15": "jvwzrKsewutyzrsZGU94MLNGNAhWEEg74mUzq343RQHAy5RMLjZ6aJddSP9epxjmi5jT6wJ7UAv3U8rhyFLcyPW",
  "key16": "7pqLfjykJ89S9Nnrj5yCpfpsfKJ4GsXMb2oXUZb2guwLZnnbMTt5Uxfdrq3ijYvSP9KyMLfBrCjjSYPebDBfv5T",
  "key17": "XYQZoTH5V9WaDJwCb3RReeXN7MD8vxd2kXutkGR4si7HDSrBNqZZ1PptGLcqmqZLP3M5EKZN5thG5zAu3WF5FZd",
  "key18": "3CJE4h4DN6pByxRVj1GJeSBrpgQ23caj1zuhhrRUVumb5GUVHCQYC9z7GE3wXCRvuBEhiqm9vgMaNpDg7tnAZ3RB",
  "key19": "44tNSJ8f1fD2Paavwnz2xxFCr6zfSVz7RcMHNQyBz2yatSybAVLHs9n34D3RrupQsH9gEH8NjqZjCCnjtgxytTgj",
  "key20": "2Me28kk4zWXRpi9xHw9p3krNXxKZFtr4X5TvTJU7nbxDZ8TwTw2enUgiwWTUXZeKRJWezgo9i13WD1PFgaYjBDXt",
  "key21": "3CW45Jz7sLrfUSGd6ffv4iqSQAsgVPaW9iioFd1ZeKyb1veJtUH6FSxpEBMnpuxchC2xQbvngDpBBTvPufhXWWxW",
  "key22": "wXCHkeWS5AEUfjgS6L8ZS4w95ka41iSmAZxHDm5bkqSfh77Bo8ZvRLB9T6xYSPmJLNKvMhrHb557b614RwdDu1B",
  "key23": "4wupRJBSEgGTtJHzdzMLBJMvjzAKX2L4knpV2RekDgzbppnRVMsaAozmMGnxWXqyWoa9NAmN1Xz3RjHpJkwGF8KX",
  "key24": "3LedSr19LSSzmbN8SZX1esL5Fgjsg6AHJc4JphyqVsbsgTxYHRe91gwo9jtKe4pmekr1EBLD2duh96pGZkdd2BgS",
  "key25": "3vviLdtZQVNNQBAonJuVtm2cbmuHuYHDqb3VQZGUGy4C1Hoi1hsV7WnnFAdk2ggF7CNTR9MGw5EJuKQaw7GeusoP",
  "key26": "44NLhQVvfTJniu6FAd1qfhzrizhd9RmVu9qaGsyJvHYPTST8RY6jBdoB8JAJyzxnxS5e2HKpEqinZwArG8uoFRQx",
  "key27": "3xuK2hZ7PH2ZxGftMyGmN8LF69wathMHXRgfSmkAUTqKBu5E7kVvt4AydtjJBpTbCatVqvnreX88Rrzgg1J5QpRg",
  "key28": "5JjN1CYwKLHUg8UZNvNsY1GWhtNrpTUxYHVpTfaY4684k7aYcMP86s6SwEUDjSJ1P878ETqp1SM9AMbNYvgLdo3G",
  "key29": "5MrRHKXnrzeMN4ze4C1uXPUV7riDujMfuavEM713vNTGJA1TitYfGWkR52aFczpT4McbZCruQVQxFQYYRQf6XyDf",
  "key30": "3VWRZ5TrP8puhQjzGL7wyWR88KcBZu2auWevcbb66JL6h8tdJrpX19C9Pm2AUacZTy6zSAEcbZudnb51rR2uZ9Ka"
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
