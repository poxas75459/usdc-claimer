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
    "4VMF6uJDXNGQpY18Qc2TdDt1jV6FdqQuUf2gssycJMVzrvZ2KUgRHqfjeA1AGN65XBUHBaubkmGvaqHuYCtW9Ujh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8dKFxaDfYTKBjMwd3EhngP5eqihmzumnTnMiZiTWhHxiRkN1ddmbzaVe3JXsWCaDWP92GUGcuGR1zeahYB1iKQ",
  "key1": "3MC2jyMUvGDH7wyMrrwjXaKWeSBkDnN3APr7qW5qwjbXGQ7Fo257hcc14ELMccXncZ45qvKMEcA7cg28r98qFXbF",
  "key2": "3uebPd73pwrxpcvq47qWMsvLwj8N4ukRDETj95QkBqzJtDZ1Akzh64kupBDereZ29j83Pe5rqeoXKdhWCcatTiA4",
  "key3": "2L2uAdtgKn3gvxPJTJzfHDrjeWhZdn8P3DX2biLuvX2pxyftbwkxfsxLmcg8hnWcAYGQdEqDaxbriM32UwhFNiAZ",
  "key4": "5BLgZrZ7ryLqmWWsr3BZocU6gyoXF3ZBidEjC2uVGP7fao99TAoFLhxCRjXuzD5XrmEhb8E2AgYZnKywxAeLp1J9",
  "key5": "25raoqTpsqfPorQg9c7KetPqAcLY4axywMjmA7Ak7EkMCmFEEJKZ16MxRLK9hZqkCPwfrgGn7qei7BZUMjHQuD1o",
  "key6": "5pAQModAEqHBbyd6bYy2d8Y2tMT7BUcBKypA176PtuQwFbypDsY7pebounmQReuUb4kxm7J7YqzBTngMHKoqHJPa",
  "key7": "2ghAPmrq7Mv6S6bpwADZvd1eAnPD2htmYTMKwrtk9f2p5qszPrSYvrArzD691AhEuK9JNSe9DAULpN1938vmCF4e",
  "key8": "2dem4ALaevz5S7N4UgtU27C5gixTNGTmWQvegrr1zPSLVn2jzoqiXW6wwyxepfWStAxRbtN9o86wBE3HbEgLVeFw",
  "key9": "53CHkFeGWXwsQLjfWqDKZcoF3oQALwuk5oTErr67AwpEFT3PBFzT5kheFAvBq47BtHShmM6aHguFUuwjmzUHxUfC",
  "key10": "8RmfQXSTH9Ji1wTZf5UncVuhkQxncCWnq6bW7Po6hTAgt1tjY8UjMEPGbzZJ43zf6ksQDJeaRwsokGuWCJNCLQQ",
  "key11": "4zGnQFKwigTXV572UsJx5EEWB31sTH2zqxnNvPbeNY41V5GcPUNUAH6AyVHwBfdH7UFffAT9dnuuFgXF7Z1NRLX",
  "key12": "4gHrhjSd6qL1MNyFEpM7i5ejwTa8QYzZGK3PqVhf7ZLCpk74anGWnc2qfX4qrjT7HLZHzSe48278ubFdPDEiDAcs",
  "key13": "2ixGnNSg3utGK2pZMrxtKVSDJfpE7HFc45WjgER3pprpm4YUZppJovr4YbqdV8pcbj7pEgnnNVV43cBYXkD2whL",
  "key14": "2qGmBrKB4msXCYVvwvEm9pup8a4Z7rxvw5WPxfQXEdTxL3eGhFuwchZJ8N46oURJATZmyN6jGNkjcaooSDkUjKZ5",
  "key15": "2vHSqaDmDm21ajJj7rbkCjuExwC6UX9T1htL8gxCgF5b8Uqar5GZJR1QkZwioToPLwxvCAZiwSaktRja5TZBceyX",
  "key16": "5MrvCgzjW9g4MWKxn5bKfUnPPRhfghpkakbAUCUNJzySQxAJ2eDmRnukKwUHfFkzjyoXJeCNQn64xT8YF9B1cvzE",
  "key17": "3cmtVSMvkpR9akrsdKRbQSd9AsuA9s8dzzB2Q6qFWD4Su2V4aEahDxs2DgCYeKyoa9CbwjknVazXiCr9VvCEU1R7",
  "key18": "4VJ7AWTZkgHx9ktJ9jXnTuCDuMXW2Fi9qEGpCr6cb2Wx4YnZKxeB2QLyjCj11fjTPeaDyCMRgb1gsiSVLB1YqdN2",
  "key19": "4dzT7cGARkbKL1UYUdPFoDY4xQpUJvFb2nhxeMFCLne4XfeL96WGXkSw7uamwdhxeaRp46Qh1xjYZQNWpfVEhF2A",
  "key20": "45NY6g3i8mcNEVgXegv4DPwsB4EfBprzaohxCMvqJexV2hRWLy6pDAgsPzGBsUtkBH3u3taRpj4hNSgdsxbzbpzU",
  "key21": "51PLAyXKKGBLd2zzPnEFEsNc9NcvMrwoT5znudJ8NugiD5zb3sERysALRKADN5hFTLpo9y9FYvyeyU5fvNWQH3pS",
  "key22": "3U29hhe4b58DGtky13afvB4o2nYFdes6eQqK723vBPL8TXKc85J9bHyjmcKk5EPJycrj8jVncztoSTivGhHcVmQf",
  "key23": "5EJxTJgygh11qMuvZreLtnyNYKPEtna3M6j5JUPRfD82CNBMU8KA43vPW75fgau9Ldik7MZMqY1WTQeHaCK8paG2",
  "key24": "5SvEzzJf4sAsxb7GWTsssFtHC54mvP9wyNHuTGtE34JQ4R1oxrf4R9tUvWtSsUCCHnJQScuVszm4uzyYkAFcD4jN",
  "key25": "5b12LAzTLKRRtPQpZpbR42LofkvSMBgPi99Tx13y5ZmYa8ur7mP86YskWpMzLeSFsNvZrSF4ACAFG7WLPzr6ux8Y",
  "key26": "3KQGKHyhfKFhGHTPV3Cv3F3zRLYy5PN5W1qPjQKSW2o65qyGVMrkJq7yvPgSqyE96HQJou2jQxGJpRmDN2jw5i9t",
  "key27": "444pfBz4peij61FskAy5wjYGBcfwKYdQquUdTXdLJZv8gqYAryKv5LWD8hcT3ENMoi6EQMHraLhUQoUFXsXErUfp",
  "key28": "44aytueNEYdFfwPF32K3orN2nk6bYxjHJsu6wsyVF5V3oZainMPizMF8nR6E5V3aPjYySpmUXB1Xa9dTEMgSgHAz",
  "key29": "4gYN6tq2S3NU7i57rPCcEmDZbH24bgtfKCdWUieqg7AQa9rEUPssjGpA9vFRRPxyAXA7S6U1oXKZFBUX497Ejvkt",
  "key30": "3ANTPPxteS9jE4o6jDMLvhxmNH84aK5BEFrSpdysykH3vuXufXtmfNfnuc7XLHJZNvZhGcZNAkahCQeeLMEui8ax",
  "key31": "PbzwnauY1FVyVmcx6wmeDn7QKBhcFGWJZrL79tZuFPTs2Coi5vvjeSd2TUzPx514iTUEtmN3sSomex9k45XJc9B"
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
