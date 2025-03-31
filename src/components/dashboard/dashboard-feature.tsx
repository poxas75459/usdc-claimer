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
    "3EadqHKbvTnoC8g5HVRSBAkXxztD829c8vFq3YJk5G7fBPLW51aRjwt2jgzt1TPG1AetYheJBMvk8Y4zHg4cxu3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2n4GtQQUPmKRRZwBPQ6mHEydQHeBk99zU67DwjyL4us8iSraEm2cSVhuJJPfoajmt2FXhS9RMsbzdi9ga13Kyz",
  "key1": "4zyed3inE64NP7idz1c7i4LTx8tCF3CcL2KrwsShpmqcp4kopU3G1Vneb2USCobEpd2yHuTwp8KPMXQAbQz2sx3h",
  "key2": "3jqXcpvWptrTqrph2enmKq1fhgbVbfaP979aLaCULa41ajXr5fqKSiCDPLSXQquso4wwfQrBE1b1HqyTDtG2ocYC",
  "key3": "2h868ZUXJhmPrRpAL6EBZRe6s7gectytdZfeGtWqscfa49QPzEahtUrjMAUg9nGhumaFR5j2nEMGkqoeBeJqd2sw",
  "key4": "5pNuBhGe5xF4WF97ZQRL73JDWfZp9m8G33ysb9YCDhk39jcVRVa3kuGUHY6xKKGwiK6Pfh1dT9qHoBkEgqyGm2o7",
  "key5": "RFs1TJTYRg2ELAvYAzRYHA9uKLcxoGvs1UvXT2wsK4bqUaQe9KtJuVcJHdVMDUneZMBiLc9nFxkS74YTQC4mts4",
  "key6": "3iX8iSNuW9ecUGx2u6KJrnQJLzrSLmwNts8PM1NsZ3pPPi7NpQjUkNf6zhVehNoKtDheEmPLFtm4brMQKekzu6Qo",
  "key7": "3R7VpCUfcXbJ8UcVM5F1jJazRPUFuCbWSS6FFB8Csfp1dNpuCCwDAaWbS1WnrQ1oduewVPUqThJsd7bNDWphHwLt",
  "key8": "Y78PJHbwnax34qCJiVCPT1KrDvbY7M7fKmcNn5VvBrvgbFqo5ZRWww41pVthLrsiMdTADZTfqL5DFDGbBdvXmB5",
  "key9": "L1MJL2qxDvaTZvUsRB8cuh3nGKyPAypaE7tXVpDiUgSR7tSD94xg2jrsJrY6W5EANnhVocPzM4thDhpYQCvZrP4",
  "key10": "3FUzUJGc29AWp1x7PUbuiyrgKh4ShGDz2Z6AYN4puV47zvJvMZiFStGn6x2kZgEVJnwtpD4CAn7snv23QhyFRpHL",
  "key11": "5bVotqN2F2KxAycA6oxgr5ATG8d9XKapX9VPUn8w4KRKqHhFdALUKAk6TCUf5rb4D5AWHfx5cNBL8JtHxyUTsTMn",
  "key12": "2KwQiodEG3ntUYgA9qKF1ZoiJ8Pkv2fLAfG8pY3X4HbX1TVra5UB18G2bBwU6YPrDNKhkU1pMoGjMVAzFP4zBJhK",
  "key13": "2MTAKUJT9ZbUisbZtCvuxPWcGVqmRMimBdC4KosCpKj1VtiA1h9WfHVRn1ntK7FZmEbPpkfipVY6cmDQNsEYPXQ8",
  "key14": "2aUWPpxyPhcVot9whKKufXKYGyTFuvE3zwGZZNRhrvuJhm7kjkm7h5ABgfM4zC6NfzoYBuMzJrbohxgGyMX81ZHH",
  "key15": "CDv8nWiXfHz6ESLaKUr2MdEVsWd6JASudGMP6HHh5vHMQweVzf98kTDPjyo9BsFyefvHLdNykVk1NU1d9KGusnv",
  "key16": "5sjzouVr1Z5kXbovJnV4fyhQBdGJAyz3PfHvf7XqnLY3k925fyPgAnVt1M9FTMxz2sfKQgoQWVx73E1jmra3DuHk",
  "key17": "2A3bFr4chzQdFJoRLHnCLSkkz2qvSSAVJnD4W7cet5wDNNA8zKrGQPm7wBBPL1pXsZv5RUaCiAiWbLrLaQNfDhUQ",
  "key18": "2EZCcMRmoDXBfqSoycphY3Zf6cXjqg41N7Tgv4AZTF6Zth2jMJDQHQbCTzqECMYXVVdSthH5poTuxEx5z9JWcRK7",
  "key19": "4Hg7bZCrWLkngoyJg4WAiCTPVryB6Aae7uAgVwzPd8FxD8g7bjmpUZuZrnWwNkbMsKEfXmrnoCCJYFCKJTHLZkNQ",
  "key20": "4FKqoc8G1L7z88GEbTwsyceke8hxpaJEP5w1N2jwgc3Tbq4NqnhmgjqfjTZkim2VjGbjJ7xfUEdd6HJrrU4WqzzF",
  "key21": "4CVFMSQAg938618nzreyW8Hgf8LYa4Cpam9GLn16gnCDHSab7dR9jrzEQVSXLJ1aTFnrqfRaYwGfyLnmN24q6gfs",
  "key22": "2fpjdt1wpYZCaSyN2zhtE98RMt5ExEEiZG2eynLAd1RJ3bJXPMKqWGRFXxAHQ1uYibrg9sF9EwtyyCRCiqgDWKYG",
  "key23": "8xVmE3LEV3Pec1QRRbzWG4iDbebHHoX8ymDE3hzydojKkj7JRdtEensXR1KwENYfwsh5KVESQm89TjETDcVjBxk",
  "key24": "62R7LxwkY5jFTmTydTnVvxrGjNTpzsGNwKvvUVBQHeU9ESn9V73BwZC2Wa9uFxxZXSwsynvu5crmFPKTfKPvCDAV",
  "key25": "5kPPjCNH1kYxz1UaWqqa1SQBBJ9cEr24bdYBJhM19os4rD3HLKbhjL6PV8nshHtCjfhVFMY5MKnVjHg2SkrTuptj",
  "key26": "65ugGLtt7fy1QBjquThk6Ue8MmfCsdrAJK2Bo8nnDXsDNmipFnbaTPccVB3LJKb571SuuQWD1DWg4xyZG74M5CFe",
  "key27": "3wGbPqvyPotgXsbBf2ssN7yxWuCw2z5RTUEyNTtn65xaRwpuSaiyajMgFZ1eXmZdSuABahzW6c8MDrYWGFg6GCn",
  "key28": "4SqYyhBNRANPhGrzXtkAmrEFfHYjv3a1Mf9X6UANVLxL62ttpV9Z6DwgGsjuhoTU79uLvNpjS1q5eNSat92EhWtG",
  "key29": "MbmnJpEaPEmpkmtwvXacacLmGAEk6oXW84MS4diWmpkjV2AKSocTH7ubUuVHgq6KehsTxMcfAm8PuSTpGXPjRUM",
  "key30": "2KxgVYKTpfZBMnwQtLtQ3XvwJzJ9X8h2tnu5QRooE2qFthQq7Nvq79vbw75sfih9eC3VBnPmVypQ9vDAgewpceMR",
  "key31": "39QK6vwc4SMr2dwN8qQvH5zmabj6mZ3Co6yEcj1XBAX1SQcgxz9xKoEL71cbuJ1HaaQu2AGGe24zWMPPC3DCYBz8"
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
