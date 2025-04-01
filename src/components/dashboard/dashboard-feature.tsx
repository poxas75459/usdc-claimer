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
    "4Nase7zSrdQCDDyFaPD3TyhkooPkG2MXsmhKdQHH2EkcWeATacXouqzyPYNTLKj5KAbH2GjTfXDTwLnCv2txzAbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqwnu1tFZznFRGbJKLxAJAR21BjxZ1R9iP4TNeQxnJFnFfwyzYBDu9mxGcd3MmNXwi1b7hFMUBGycZ2fsHfAPAc",
  "key1": "47HeQEGni3SMfPCYxAhw2GSFKcbArNHHEyHByF891XwJQpZ6DdbkF2nHrHgP3NJaaCZ3BDqY78M6RBb5rM5urBrH",
  "key2": "phF7DuQepgePa2wsF8WVPXZhv69xzPr4Ztz9cp4PnHkDnu9kzPa8fhNSdsXiT1dZWDFr9DAtn5c7QfHxuKHUU6e",
  "key3": "2KpkWvANfLpxZGtAzipT6wx89xxmtoCP9q5kX5t2dmQm6M7pXsLCyB7CHBA3eW7g8Ka98PhJHMzhZuqXH7tV9HDN",
  "key4": "24TT1zGmhGtdBWVds66VhqvQYmLd1DuymEpv33qgGpX5wfns4PgSgANrDQrUmfheyGiooRgDrBL9PLGZh3T9TtBr",
  "key5": "Gd1VjB3yjZL5iCXSFXdrz4QPU24jd3i1B8kuMbWszicuJwMPG7ab3jGACT99SY2xuaoweZQaEr2QgZvo4WL7AxK",
  "key6": "4k9Kj4xxotXP7NG6PXmYmjo5Ajpm5RfnTaK892zbkibywGYPrypqtw2t5LZykf7DCjndioAsanqomYQ6UQ3q6Xat",
  "key7": "pp2YosmSAZiD87QAdvmov5ayWVrRerrBcWNsPTvWLZkQSgL3tsnFpzoDDZRcfK9hEMBZVqFxTJjBnhXmHgWRWZo",
  "key8": "4b27i56QZvtcTGkSwryJoifSVCoSKcTu3Fonyry4maPoqVj65cdkoTzfBJ1xK6VY57CrejNNVgvQHgiNKtynGRSb",
  "key9": "2BjC7y7Vp6StB5dd3HnsgPG8jq6nocXBkrEdH4Ta782MLcnn1YRFMXpuN4iNnm4LPUZ9x9Z3DesEtauEoZoiYgsS",
  "key10": "47LLJupTo1228vWNrhoY62HQMCSsaCYHGqXophMdVhpV814Zquetnn5G43czfh1o6rNyguPKkeMdzqHCbJ8do17X",
  "key11": "39ASwzQn8V8DETHULJqz69Z5cEA5coF1a1jSTDBk9bhiqa6S1c4aRAXCeGAgMLaFbHDtPeRbJ3n8BsNAnrJn57o9",
  "key12": "3RLJXrYgsEaBMCZPy28hJvwsDYiLEJnPuD3vr5erzakRQn5PNcn61jUkq5XQPRBi8gdFevst3nYWmBeTqtE6VRn2",
  "key13": "2a397KAZqs96M2aRkkpX4XsnZHiUDwM3oFc9Vo56hoBsoF6exZEMX66hDNiuq27dR19v6yED9tK8jbHo5CVfDu2E",
  "key14": "4XsPu91d4J61q6pJemqEuEXJ7F4Dik7NCXshjcJVVfxXJ2FVUxC2YESdHerEtUrgJaQfTaXvrhjqL8wPguBkKk5P",
  "key15": "2spZGEqjWdhhrVMwWiafFWNNRdLkE9mNVnP75qrxHB6C1hDtJB7KzB6YsWBngEmzQoN827FP2EEFxtuhPWrh32q4",
  "key16": "ZqEn5zrXhBRjjFjPc4aFQzhYd6HyroSR7yLG84bPRD5DYUGHGPiEpCaN2Rue2wm7GNdWJ2G4XbZX3ZRzPyfYGD3",
  "key17": "4dr6sAz3fFQJ6PXTNfGNcNsCCTF6cG5UAeZNcsLav1uaEn37qarVKZWMmVCfPnLksyv8uSFixF6XfMsHywsfxo6X",
  "key18": "3HL1kv93zP74Ge4r85BzpsQAyff7WmzUmJvqHnott2pPwaToVBjrjWHf44AS6vGSpmsqsckSFAYREh5YXHRrTq5u",
  "key19": "5SX3EKGWNBWZPxnRpii2cWPBbrhRuJruqcFQKKm5TCHXxeLkkc4auTAfVhjx1erEGJoas8BPt6bA3upgU91tnjYH",
  "key20": "36nCMtheGJo1BPNcz8RHS5RdeMwNGTXaMjYp8KJHvMxpLNW3RAqLPF92cLTchyNdpd6d5MrK1tUEknGxCJL4rAHd",
  "key21": "3f7HKpnayenjkM2FcbfRk2QXgwMxbiwbVZWqPDinSAwXR1nDe6HuXsMiP9vHuNUUE3vrUFs6cX1BHjPFDPqee9Tr",
  "key22": "3GBVgWdYtge7zBcdUhcrsC9a7DcvMrxc5jz88WqxGrQPTeYVW2S2M6MpnwYSSZURANC8bNdGUencLHHRVpbxKSYM",
  "key23": "3KMFVCqRHca2LfZnFiWA6pSSRZnF87wbQFCTTAy24Q6bx87j5fN3AVCL9L1Bn4Hfb3wRvDjuEw9QC84JwAN1p73y",
  "key24": "5rXEcuFsCNp8oXjaWMnuJdXZdLHaG8G2CGdWtZKaGTGwxYy5jc4rDib43Y2da3Ce8fxFgkUAuPakNPi2moCmGDBE",
  "key25": "4JfNxCRsxPTseTotsTyRwBdatDPPLzrsdThii8c5o4hA9gUkDP2koNiBz4RNJ1fJ6zur6yAAzZVgqsguwusfqe6p",
  "key26": "4PDfrJgjSk8P3STE8YD8N6C9YjtJLP333JzqCdYKiZXJEFYxK8JkA3daS9hjswhnndBKoMDAMgLULdHPmsYCo78Z",
  "key27": "22wmGJbyCQ8DMCuaN5SXKJQPxiEsQ8xbP3AGffrD7n7ue5noseoUBRapaAW2EZ7q5wMd9cFXxSXMLVCGUvM1NTCa",
  "key28": "Xphd4DVyAXcSPUPJtjXZmiExFSGPVz4yD7oZRwWTVdxdoWwjaijP94xCtzDvHk5Rwbqbd1PHGZp2todFPppBvLD"
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
