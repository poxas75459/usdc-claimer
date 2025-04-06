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
    "5BAuVBLR2355dRoXaoA3bmMpsBfAW4jiRwdoEEDFXrMYAwGKtH9ejpUMqzK6KuT3eoQvdDYZeFcC1f3cYZje3BVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoHbi57G5jzWZLycZqS45PB8zexgGXJxhpva19TT5pm4M3BQWnBe4VCGVtXwGpuZ6tQh4VJgPY4uRKV89QuBFkH",
  "key1": "3HJkozZ6Szs6arbEv9e51os228mqLtMYZiC7Do7SM7erqKjFToaiV8QUSZzKQcyQTkW25pxLE4v1sXLaP6RZZJba",
  "key2": "N3Jr5wesYLM5J5R1UHtHYNt4gdgAKyMPoi22zoG3r7nGAtNgoGgmiTNMkrijqtfMhs7B73tgzMoawDk4QW23xBW",
  "key3": "3MwRAubA8KWAqsQqS9EBamdvf5AV2kLt7EoWSpvouptn2gqYDJVMisnf5HikNTf7AkuyR4PJ6Uese7dHrpVZGBHR",
  "key4": "4jzUQtZi1JJd1dp6S2jPofU36e7wuqMwoCiTN7NRsgoJbrW6WNohm4chQ5K86mAZpUXpCrpr37K3wLPyMo7umShX",
  "key5": "PFsFKVyPN1xZqAZp1cfeWQ1kMuadrFRazMhgjkimVi8817XB2wdBrx4Lvq43nEMbETr4VdUhFJvV8AeKzXeJ4q5",
  "key6": "2t73wZ5wevNdYpPmkaBoWooe2bsCg4a4ZPhFe54b1ThjwB94ZNhY5Yx1veCEELqN6v7CELhkJfXs85T7AvgsNwkk",
  "key7": "5Yw5RQPRH7GeBAvH5L6VWF2xvG6pfqFhByCjaWM4PARJW2WWwkcDxUdLCE6MD6Hoz3gbqAfEgt24hNHNwt9vb9eh",
  "key8": "3tzDb7e1j5A3PUn38nAhzcMTGFkYWGDnKcovH3eXDrZiFqF93EuxWkTuJJk65SSjGea23ikFtSE9D7SryUkuNZUA",
  "key9": "5AgddkgzbSWsgBXW4nzWFWFiTuyQgHyWqQjqmFfqeWHxfmytrRqDjprTr9zyp1Cmdr8yKSsTpto7fWzE5xGkgRku",
  "key10": "Bjo3Pdkgc5mwkTSXyUQjk1zD97b3ESJgbXVmR3VRCpDwo2y4JGXJo4vyTyQ7jB3wGy8HRtqCz9CWi25ybqyWYKK",
  "key11": "SuvDH39gLxVDTuAoExs5jadF36qbDuLAiF8mfV7q5npeu2fApqPaefwntrDUbt68L2MvmR83y8KiXN4z74FTMg2",
  "key12": "3StJJPaACwVxm2tsgF9SeGx4rskFg7ZvdtvCTHFBpP6kqCc1DBtZPZCXmGK26GscqMKD1pC3JsiEE6dKXsCccNUq",
  "key13": "5wZ3nK6kDeRkF4fSTcYxs3BzQJCAftnWp5jboufjgD1dZYt2ygcPtKVK7dSKTaZB6bi2oesC7kuGvpc6wBZuZT68",
  "key14": "NF488K2Kyf1acBCuvWL8mWnVz8CwFUsPQzdVb1UBqiy41tafjFxb2mgsT9MXDhEAhg6465QqGG5jFannb1yRzzp",
  "key15": "3P7KKsiWrkab3Wq1mKaNqEYJbZZAcjK2VJSgdmV9aZKincHvxFZc4JXCGDfCfGVVbPC2UyfawVZqhUWms5mTAhLv",
  "key16": "3cYYuLNGk9tEBT9GDtjjUj7bu7HXXsfJmTi56GNZyev77H6VNW3F343h7kFfnZQXjQTbymBQZbvSihbWgovh2hmc",
  "key17": "4htkRq3NgYM5TkpfTifvKhW4UEqC6Buf7TmzaiWLpYuHvdW6MhGT8PdrN8UnTbiRVYKZ4v4tvtymJyXoeifCPKaF",
  "key18": "hLe8JJvSgj7zz824wfHD4yeMHhcAEKbNg6BgmEyDNBjFWfN6bNAUwJpjokdXtN57q44oZSVjMY1f9qc4inpHNYF",
  "key19": "3nUVdps4tZwSmp11VXFCoxDV3z39BTGUWHZ9awF5FzR5rXhbZsuMGfVjauCCvd4ScgVHPxYPDhYzfiZ8grVcMnJy",
  "key20": "4xVa5NWd2iqJAZw6YMAYgJL1Fu2o5CtCNqQVUjninDo5GdWjXCGbNy5x3goyxQg4af5MpbxEe9B6CY4CSNqJWDFM",
  "key21": "2jeJCbpVQnobMcRWWfgqNjwyGTma358PTA4WxT8B8eSqVawyZ4jQeGyfbotjz85pECmndTp7HbFi4U7DcA3xWd1d",
  "key22": "5dmk3gdabVGMmGRYBWDu9kSnsKHQv9npwwJufFrPdRxRGBpKfyS76bK7u7NxPwWbT2g869HdhDbFmBPZ2tpcPDXc",
  "key23": "4vNaqTJxpH16LRLEyAc6tJ3Y9o86ZcdMF297PDseWHX8odkQgTZMfLtkJWznW6DAjaZ9a48bmjLeLuUaoYcpKR9u",
  "key24": "4GvymY9YKAhTUQHNaAjV4nzjc41gRu8gSianhJQmesmJ5xWaeW5Gzs6PcYgvnqNBxJ7mpDFnCuC5H773GF6BEaE",
  "key25": "zLaytbqHVgXExbdHkK68aDie9zBsCAEzeXn7QoTXVCrDt8TB23AkaegMnXJsRJ5YRrJdMk5EoJzghM9v976Rz3e",
  "key26": "3qGVQxA6moMoV7QtMfWCkDessdxoHhoFzs22FTYZaKJbbXcqbYZUB86DfsPcEXRM9uLd6uoFt85fnM2FKk5Jj9b3",
  "key27": "4h5UBWGaeN8wmdAciFZ3YJGu2azNYaz18yrjhz5sfT7AdycUwRt9g9DSweTCAjpv3o6e4pTTPZDVQG2PMx62YtL3",
  "key28": "4oD1cV3sdaAVDGGfzKd3EPFujPPDb1YfZJfz4CKnDg4Rd1jtz1fxhxHzRid4VTBjHBmkyrg9BquzcapDYUw8zdDb",
  "key29": "6vDM1XzbbS8BB5jLK1TpQoyJV5xBBdgXt6VvpT3ab5TMkhscryynquq81QRFadk7KnyiodqKPRaYEH9rcmWiwZk",
  "key30": "3nc2yz3TmR5UXV247mogviqEKZ6DMhWiqyNBXK67SWY37u618P8yVcZJRFhyywZmRGkKbKnryFoBFGjar2Zjv5w6",
  "key31": "2jZZFaVLjHhXTBiRrynqw3R2X68TGeN3zwnA7RGp6nowhwmKb6Uz5a3Hmue9K3V69uNiqEfaaoCW5fFQk6EgGzDb",
  "key32": "2wBboH1zeATRnM763MWHSsSECmiHRtAZvaY793vg65kyqRDFAYpUZTyfYvAGeeHHPkFigNwYiQUmAqMoVpxJdqaD"
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
