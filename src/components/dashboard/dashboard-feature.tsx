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
    "67AHfK6kzHyN9MZHKzzyTVZ1mfbExGkvWJpv28XMkHHNjCWZjRmpojTzu1TPHFbwHgsZSuz1jTdoh84riBNNoNpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5xLs4p4WWkVz3otBnhKCxNFRGgppBHLb33WGXNQKmcQFq7WZTe19dbP6VVv9izjeNwvRWP95D6rnPbFLvgBGWj",
  "key1": "2fEXtN4ikYdViHmEp6JP7bhkfGttMhZvS59kSY4dwEC7xcQRw4kJrntZNvyn7DL7tKCcQN3MLc3LZsnzTuyiEUbU",
  "key2": "5waLd5qtQsuAhhoTuahDjFVTBx9Xtwg5H9x3V55TerPDS57CS8VmmYRbC4JKwLcW5ZngSff1dvBstZ5r8pkXgXUp",
  "key3": "iZHDEkaonNRMnbK3FHz96oxECKabkgCy2PNo4CvzKVYQnc34BnVRNd9oT7Rc84Bwb8cCVqMuA43k8ZYFZh3UQW2",
  "key4": "vN34ED9q47VPrGkBgoQYk9tcM8yGk9cxDH3WXMXUeuFRjhkDmPqcioMg8z24JEZvrz3FiJJFpYXnYFxibNMpduL",
  "key5": "23vKMEvvM8EsoHXAJYbrkvvQ45RbetqFp1xg9htq2oLve7NkGGdx9DuiBYinnVMApLnEBemX8az4QWAy7CZ5pGGA",
  "key6": "gZ6qKBJxT5JoRPEHDsLEJdsWPEa3DevveuVe4dAJamWwnvqU9ZFYd8q4Ra6wmMp8j34pepBXLb2fjAfEwUT8LAo",
  "key7": "646bRumoGv63dVpQ2ifMFcJNr4oSjns7RNLW4mzb95p8uMgwEh3afeUpbpndFPHg8qdqoxZ7RniUKGcprnEyqK2G",
  "key8": "2y3Ft12zjwr7H4nE91uBEQZcEC6XkqdKH8XqjV2VDvFibQLAthqoPLpxptgKFA1qNcCp5mxMk6Va6CBFpnCeuR8y",
  "key9": "3XsmVUTEsD9FHKj6CnghcbvL7d2pE5hTR2MBHtQY19PiHbnbypynG16DJHbp1PtYB2JNtCtLfe7BVHKJaHgFR174",
  "key10": "5zLGzzt7S8woXDm3XkLQWNcE9VkjojJbNswgXiDnyruCFfDvvSmFRTPNaXbaoJYYHR41AqS8QUdfCB4Us55hkWbz",
  "key11": "2YreJxLGKPVXcjRkzcUyJqEKqifju4xCf9xwScLt8tERsC6eaxHiBz8erMaKyKCuHMphre9MjLtHf9JhyUTt4TPL",
  "key12": "32HqiHTxryLE1fJj3aPG7nVPnBcb314kSDRvT7wt2jZufZMkGH3gyTfEmNbvZExB1tUF6rgxqVtsqriPknoyCNq3",
  "key13": "339fd8Gvi7CD6t7VgCkTaakuoGAjMjSsmXUK6ocgpbyEv1LEgHXZcWA5ysp7dXV9i2g8JJAphCGNK5nwbZ7WjVrG",
  "key14": "4j134yQvykXih1fHXQjQ83Vri1ASiouhwvZMaGRhpkag711GZvGc2m9exJ1eDMoAErPQChKnAxsSMP1xirKtzYvz",
  "key15": "5jUQAc1U47PyyEGmGK3UCHFyhQjub3s1rzxy3jeh19PNCvHRAX7focZYzUkJnfdPkir72yMK75Hft3JQPzZJ2sff",
  "key16": "2nVwimFYRuE1B3uhnFQ4A2uTXadTESCKWDdJZwkaxGDQJyJAaBSe5CqV5r97zdbBH1YZAjjAGtuwPgPgRxZCDjHe",
  "key17": "474qbT33PVDd27F1bKaoKzVM3RAJ9Qwz95xhcuAzqWe5edk91aQmAvXAqYQ9GSyM386iZq7WFrb4e3an3ACup2PA",
  "key18": "29iLUrQf8Pd1A2GBMEtMLMoT4U8o1Zp4zeppRPrG3JfaxV5Asieir8sL2oABEPVts6nC2VxktrkN8srnmt8KgQQ4",
  "key19": "3DvyQNFb3qTAWtc7FC1QMVagnQv4u6qsFpMb6dNFDYf9NgEq4fWRoUny22rCj1KLTtNgg4mD7WrQVR3d6ZbrHQzo",
  "key20": "5Jq9xgC7bAVi4N9wpcBDy2S9VA8E7Je7tj52PoLBC88qG9ipsaJp21MnXc8WWjxMPXingQFKawnwoGSH9TGXyEpA",
  "key21": "3hten9QRWNKfhmt3XGfe3eCWHXVsse1VdRyZKwqEiNrRY2iSgS2U99wXGa2gVY2fh6BPrT9qsu8gBnS8oF2cFd4F",
  "key22": "9JFcNeVm29fk1X2N8Px5CcetUTSNFLdpoRohBTtHFHCVo8G4Lt37XCJMjKFXSDUdMYprejcGhtB1orEezZJSrt1",
  "key23": "46kC3XfwDouGYV5f5XumhZX2BZkzY3Cpz5rpf7B7C7HNhbLXqgoLvcNfhDR93q1SqQWp3yTNLduhQAsJNL69pUrm",
  "key24": "2yvZE4ur4dEk2w6ntGZxmZJyT85AAFsa7gBDHtvrmyVuEewm7aoZgEpGd43VoNTXW6a3CFXzSTbvrmmFnkijeE8x",
  "key25": "2Zk9za162E1xaK4GDP2jEBhL6xR6huGuaXzRF8H8QmpfYcdSh19KUXf8YFiZNPx2xU8XdeUijNgjmgefVhrSfPV9",
  "key26": "49xycjEsmFxYMsnvRct4sJHmDf4U6pCjU8zLHh24YWPJ6b8LjL1GhMyaZxRb7RZG8Aims9LDcsPsc3KBurZR65LB",
  "key27": "222gNmCEXMTX2sFPMoWEkqj8TPbhRif5GtXxT5pmrQzMcmbxFiSFxRumBCkkgN8uHHJfcabr5AAnX1damVi2YWm6",
  "key28": "5cs4HFHXFkNzE4RBPwHHB9etLqp2mRkQeuNbZL3sC97NT4fkuVbBoX2v9D8T9Dzcz3hRqJVPWqiuCZGNaWSGP81c",
  "key29": "3N5RSioDDLyBbT4j4gteZyY2FERXB11NYBdiQfqCb4Smghxz2hbS6iWRBTEWCDeqNoSnCwhksnj9eAjKFxQpuLdt",
  "key30": "few6HFwkHtdPzLWSrknoB5EYXkPwPdgFFjCJL69KtsfeAVcbEPqFt42ibZjH6V6FzMG1aenFDrZoqH15deTsZo8",
  "key31": "58rSZy12GRf6G6tTXLnms132p7urzmaEif1jBs73twgyPcsA5TSKmdLkR6ZY5JSdXzPYBLQVBytwDxCJGYPND8ys"
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
