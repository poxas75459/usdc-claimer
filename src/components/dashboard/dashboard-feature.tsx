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
    "359Y7aAhjwnAkGYsYVTit6mewnMLuPbzxM6n7k5xQP2gAS6X81YveZFMMZLX5dDQkS3N89VnkwNnYyxTp9vpgUy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669wDaaKPNNbWvGEfsg3aHF87je9jhHMQkq14UaChBVEDXfzanQBiYeciNh7CXRjXM9oPDb2Xc8K4Zyvu8b6EfbP",
  "key1": "4GpbdYvB9x6ZguYqPo64TozZgMadupvHFhkmohKNhM3MAtJwSRLVGkK6DgHdv5cZhfKNDcUbLyRTQLhKPjF5ZSS7",
  "key2": "58VZjg3ur4ZNsY6kfwSj5LpyWuiNChrMVGQNYAcraXKCBEMEh2Rr6kQzeouCX79a6bsEQredZmHRTVkNN7RSmUR8",
  "key3": "WRsJixSjmy3PHaqoiEFMBfjaszg5rrUTnpfHmHnWBSnXbMYiSkHjJ3tiTjPPchPQnhMTgKhWkDyX3HxGPjdS4uo",
  "key4": "4Bbh7pkRdNzpKxnYZC9MHwVpheETLARg7kvzsgqu8GWR8gn8PGYYjGP8aQphKbXH6ALbzt1kqZT4YLM9TX5kaLQp",
  "key5": "2KmreK7BoLyYqNGcq18vySdr3Ps6YApBBvmiFrPUQD2agmjv7scZo5kYnfeqbUs8JQNwUpjWDb9yZcurzWBD4C98",
  "key6": "43RsNaonSPivsbS3a3mZYghDjsxsx3mL14sCwBfWKthM6Wgk96qtaeoY6QhbyWG8VmGujpFfph7d6sxLoSZ6aiEM",
  "key7": "3dAA1JzcrStDWWi3NrNtoD7yuNooX9hA1JuyBQEDnqr6URGYnN2tTtScEBFSm5tZpp1djuWhGePPdV1KxeMeSiMM",
  "key8": "7Hv2sDwMgfpx59yFdnRBm2X8oBsdvxvRUCjHfGVHHdmbMKbCjsdZ6E93g72dR9FDepfmfQWRnNC3QtRN2FEga4X",
  "key9": "JSuxijgkMdKPMatqGtr2zJTmKsiBpPssgkDCM58d2ef5Sij5W56j1P8TvfhHc3p3okZ9exG84BMFYSRWPeBhXde",
  "key10": "5cFkUuHSWWunWDVVYbEwaGV74j3Mbqn4oo1rEM6sJoYwa9SozR3QwQboPpEAS7xqfdSvmeqgTpTUf53nQLS6rHZZ",
  "key11": "2syFnQwyKroSY43fyjgFnpdbPRDMQh47FRX5SSF8uR5rJKYZX1wWqLqDAntRM4Sm9qpKbXtVrwEQQhnW4K3TXhhD",
  "key12": "4iQgfrXRPyqwRvhM3b4EK8JM4TtxeEmaBue6avzKCczPfBQuL2AqPek1DwphgCG8rhpewHCpL5ogHBH8hiTM868j",
  "key13": "4noANh24DyhakDVxb6xdLZbNYKhertpyXJy5bT4iaxj3eZuy4wFQjdkVSnfZMhjsRf45hZq7LJDujiBsTZw9HoBx",
  "key14": "3HwG53UDf5sY2LbZT3vviDVuiLCdmJLhXuRXo5ARvNtyfEd3D522BTH6P2x8f8uRGFwEDcTM9UfcTEzjHzzCKmPR",
  "key15": "5qBDQpE4cSoGrFpmxeQEfD16JbSsxnrFGaxUHXEuGv3Y4LkWAN9dJD7AJE3HWvZEeWMoSsaPWLQzf8PirkPAGAaP",
  "key16": "24zN5kj564YSHg8BBNY8Z2uAC2NExVRsbon6wf54Zfv5Lb7SFSGo8JsF5NwLtE14NJnxGfvAh6KwFskTM6MJ35Qr",
  "key17": "5U4DFuv4PhFTyUbVXezz6xtdByW8xTJwHJjGs2jLZWt72o7xjS97oUVBXramseQZEtp8KiJqDNoTZgfV7VVNbkFx",
  "key18": "3QB3dYoCd7c4PhuN9FVCAR2mk5fKMV6m9JCVN7T1CXuYQsnRFCNBGM6JgMBaG5qPTwwEEJGhDQ4QS5HwgaAhHtah",
  "key19": "2vvUL262hWEoTt1z7sxs8KBAZVDADksPLJY3njxHrZ79NwCj9xizDwPr8dWvie6r9fwpQWKNNRyo3zA9jcMASkP5",
  "key20": "5wM1SY2epQuHdDSqwxg3bTs178Rzvn5WivyHhakccgDFBBNXeeKbSLW5P65LDHtggQfhfZVT3pYiS1zvNZ7waUbf",
  "key21": "5aYZPDoNtwdbGA1BuE9PvfhjMUCSLwVn9oCL7q9kH3w734NDprk4TcAn2CF5heDzFWrm5iRBcp6eq1P68jU5jV9p",
  "key22": "3tRTU6R4FYWAC4st1waTZpWuEbfTRCSrHMSLPr9FVh93K1PifMtaUjEgMrsrMQ3ZvmsFGYXWDSN4b7gdbBYPcgdA",
  "key23": "3ou7a3krt9P6in4keGWY4paQd1pooLbpeERrCc4GAz4RoSuLoB9uqBNR5CPPzqDdxMEEtUKwSpLkKP11dimdc8L6",
  "key24": "5zmaXVzPMvED3GnfeWT5sBprdT8xozMSp9JMC372jJW3Vtn6tbzPiu65i6szeetyoFsZf6f9pS31BCYVBHvg1VtS"
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
