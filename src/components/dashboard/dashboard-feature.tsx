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
    "GWirMJvUKoBTxWkCPxBjfdM4Bza1sCPjcaQaHwaMJUXRUv5fpncw2DevNcd1FNzbozowc7yuRZT4r5zJxDCHxju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VujnyNCeW3aVrf1uUdc4MkrMS5xn2TAhQAT6JTScPXDT6MogBRPJLYh4M4rBzdFL27jZ3vibXsCXbusbZhnBEV9",
  "key1": "2GKB52hQSNq2MVpxXwcDfUHa4zScdystawFmd2y8QUiurtDXEK5kBTRuyQAvfjeHLdzQJBDNVhKhpgN9FYLndbjP",
  "key2": "24Gct4TfyxSPZztbH8bmV2W1852dbKudrAn9kbAYcTB4286tcp9QAz2nndqcRZNWsxNuxQmiSSRaaMo6dk9evRN7",
  "key3": "5nnDtR2Pu1ao1vyZG8Dw3iHKVgtGkxCgsEzcdgFawHPTRjm3NttKsQiLbZHTs9mh6zXeTTojKSPwrKnezxjDofw9",
  "key4": "4tnyjVPZxTRP6SKPKKiWBmkYQT1kLcy9EZFHEQ1Fu2T96qaG6vxoV3XiKzSrherQW2VP5JD4C6sJVqcyccGGYBB8",
  "key5": "5Gw6FxcGd9aZRZfxBcuwo4HBwLhG3kFrqbGwHrhFzjE32EXAPjHdM2Eo4jLQjLA6QmgganhHMJFE13ttLNSp9HvU",
  "key6": "4o3f46yu2SCWDFNMqrKaMimeyNc8phbEoKpzR5sWpxS2E7obwHg2RBydJ4giJ63g6pMiyFZ7vFH97rYd4DrweibS",
  "key7": "orwjDK4s749m7SFobh5Sn2ztu4sWiCWDwk645aLTWg4MKFqVNPnpUBts38wkCe8rZMtkhL3ZVmEWQW87e4jSTdQ",
  "key8": "2jHoqe2DzpMM2yH4aT84YfDyLMRg3RNLrvVYyKVrjoXk5MGvxijTj9mRqL6Su7h3Q4xpyyqkiFKUbodSFYkNyhjk",
  "key9": "5LyWMdjETpq8ZwLmzc1YBjG3w7qQuA7KWmMzfuDCbrt4Q3RTonJsTpw63QC9Kj1rXmePxDmVwzwEc2FrmpX6ZFDS",
  "key10": "61NdjgUFf38gEEJN8abstbaYJRzUSQEJA7kVsb3JwHgZZmMPk8788u5QSGty3GuBwGa7psmtxGorCLggogk6y8rc",
  "key11": "4o8cXMCVZTLkZ3PxtqMJXRYfbo7Gjb5W9FDLWLmHF8WLhW169wpyKDbKwiiQWtKjC3yT7FYGi3cuurTXX45tTnYK",
  "key12": "2nR5Y3XE129ui88JBjvg9gmSZ7CMybgUzNRQhHi21wod7sM7b394vwrhHYSpvURo5LD7QrjwuTqfhKtoJSJaFWv7",
  "key13": "3i16tcwEYWNMtwdqrh5JfBw57WeKpmv1WucoDV6X1TAy6ScZ2pLnohSMjLGwmiHbKkaZKfrZ3RpJ47Gv4BhVAha2",
  "key14": "2q2vhB2bEowesgn5BxZzhTX2jPcyb8Uswe6T3GUTNV4UWMtFEFJDGW8i5xPMB5PTKThtc4fhednJEyAtXXCTFZeQ",
  "key15": "4ZyXpRxJoQjaq9HtzpDfxiV3pUNyJtXTPqSSmxMvmUrTrWLJejY9qwxwiu3Lqc5sG4G1742gNcWPkLdsk6VERhpb",
  "key16": "fAV1kMV2YduC5SThBEvM5a3vaLBnazs7k1LbsLB68Nt2nAH3k1UE9WGL5Kaqf6C8REyJJDAYqQTsKzNfZwEjiqW",
  "key17": "28DpVjnXXmNJsW5cfcpNTNnn6oe5FsNVMat9PDJDXw19F9CpdE5gfhchUFjVjMZxfZDoeW5k8vbvxqDGEe6Bxwis",
  "key18": "23vNdCqJUYnnbBegEUJdnTDTo2ge8aSvr4RpWXuigGSMVSMuYY7cjbxTK6rSKyU3MrLvQMuiGDiDUDQwfCt4xv5s",
  "key19": "213rRhH15sKSiyhs5YQLNU2kSg3oLUDFouHEfWEFap9jj34VxAKMftxz8MLbS1XZ7odTXyMaNhSAJUkwPXEodhD6",
  "key20": "FaKPdEtkbrJzeg3pU9GnN795z8SWmrAVmPBrX2reGyKjbqhDntaCPhCrq5JBNn4wnuKUwKGgo83JeBgzAsNrd85",
  "key21": "d51HsuCPu5dvjgbpaRFZ6C8rp4Fn5LYffSBPa3gpaHG3c4kCGVx4ijEtRjJk1dh2Sr4VmVeoRXXFsmfhr7aHVwm",
  "key22": "5e4J9qVYES1mF6my5meckdatSs1SU8q8kmNbhNe47Ucieh7RRSi4AKXeavtwVmHDSdb1LWpxrqoDeiSdY3agDiMa",
  "key23": "4prcZFs5ZqzbRbfqSZXUaBCYmXpb7DN9xd5hNL4RegCTKiCFXZqmrnuTBu8P4Vi2WhhMc43PMxogr2nPyXJGJJJK",
  "key24": "3CyMZdvJNCSTvBMHe3ChUdGkeduZHSaZBAxyYNQwLbENsyrTxsMJz38WViYhudYoJbbBe6NjE64X4doZZMrfRw1j",
  "key25": "3WseA5rS8KvafVePiEEjyHbtsNB8tzCzUGowLnLyMtn9LAeSoKJGCxftWSH5aNbPLcKrc43WgHTJuan6wRdRgmxN",
  "key26": "4neqXUEq3xpvys5LrpsdQo6QpgvMJeGbae6tGP5hWE8WHWhvdHp2hdF25BPBkhs1mhXbNypw8B13ShDvKUCDe7ZC",
  "key27": "2w8N47JwWCL6c6yuc5fa3Truxw2LjMjgTue1gPaJMMnEH78qWTZNRh3mABmqJk9o1r2vytcjz7FkdT3d9zPnTDjQ",
  "key28": "zw6YFVbTAsGZGwgK1j1u4d7pNpn7b61fCxY7UEkyxEFZSSunLRpNLjDUYToetqX2mvNJFEf6sFhfrpY3hqsJi2k",
  "key29": "n1ajc2mP6qp683P6numf6K2nXwMnp5XgBD1PS1YnhvXRQeu8q6ZBGb7oajUkdEHAM5R9Kx94Yz5BHH7PpJDGAwq",
  "key30": "5Z9xs6oUHf46BoQUNzEYXHTrAQ6SpitarjYG7adm13qrC7U2QzgLzEcyd9erZrnvFaF8b9eB4ZE8L75Z9hX95yF2",
  "key31": "4GWMB88aT1oJknBZ37rNqWfYXHqswDNDMT3FPupDjD8MSxoBPa8kv7mV1vXAbxhQgNc9AW1chhgEyThCpFAMdELn",
  "key32": "2czVmXj4Ai2Ek8DdSuLjy5Uva4tybeLWFqy8whRB7L5FGr9xW9iCucECchpSAcfvfw1c1A3VvA4MkBNB3NVeadhF",
  "key33": "2LuGeZHuEnWMc9pNqsq3oJhGtVhodMk9Vwsj8x8zzTjHNVPJvVrrMaTVfLW4zycPNHTvknCgcaW8soaeeqdBruvF"
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
