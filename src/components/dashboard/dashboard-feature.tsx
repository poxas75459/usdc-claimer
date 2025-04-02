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
    "3T4gn9mqefWdPEYYLk8hkWrhfRuycCERQ8JGQbnFzafyeKABQLzmfRBktZv1MtRhMhebDWsjqcK2bMD8Cg52jpWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vwtjZ5GqfM9Giwu52rCdYGNJVQjKGqogYTm5WcTfRqR7N8X4a8sDiGxE3LfZ4zzCMDDBykpCEkCQ8NVRovqJBfD",
  "key1": "4Jdker8ggRNJ9Ambbz23Py2GH5CBAFbrLiKfrGcSPiB3zPhhw9WfwKsdebC9Q4Qp32Q8oqjGYjoGBQkjv7wprDhk",
  "key2": "P2ArWuhiN4Rk7C5iuwj2t746aqDyUt2dEynkMYFxKm7Fc6LmX5AD6CmPnSa4woXPVKPcyr2WmHAcfTrn1Z8MwT2",
  "key3": "3ZaxqH8MxVNP9abWFK8cAYdGTGtYjrWfmiGfeUrqgRngjvUtkcfUx8xcP4a1wTiyA9cFNGmDVPpTu8fDXrghWQ2s",
  "key4": "cfhEXHDwCM3mJp4sQ1uYNR6zi9Zytwj7AiMeXR9U3pnewnnpjZ7MPWmLkBQRmE9WDPLag2gihzzS8zsibuzVK1S",
  "key5": "3EWwht74AtryZTHXQzfKJVdcv61UVS8UEDcFwLQQKviXKLEtRhkcQ38PKkXW6TNex7gqrpgk2nvXGLst5UXqQavV",
  "key6": "28Acz9kAhPGif2XxX9wZsXPQYvt8RKrohM8ZGW1NYjBrLaG4Dw9uRU1qvi4FVcgcnSHuN2TtiaaGHvpmZiSkZzPf",
  "key7": "5FZ4uD3kAFwvCsFHZZwgekkMaLfdYfrUEMzqySbPUPdRwM48JQSP1HdpEGa3myW7dnkqw6Bw8wuQLy3mJS7wELQD",
  "key8": "4XgBB9h2RHXUaxeHnfapjiMKAYTQ4NCAeuH6XtNkM5EUiNp7aN6VykCmomqFuCvcaWD9ivHWH8PK53DEa5WmkzTb",
  "key9": "5M5oKx3S91bJ1a4nAdY2fypa4XPVWnDrge5qnqNz2m3MbMPHu6Ev3hUURBmdaSEBr9dT6P8z2B3Z4wwCFBRLc895",
  "key10": "3KwwHWzXHVoU15nts7zg1VNu4uEqjWDvLiWwabcTRnZLnsfBc4rHY8UDvzEyNFPUAprRd6e3cQAcRRcNyc3PLR3X",
  "key11": "4iUTSwEvv5VF4MJ1XwiR9LcGdFWY1ECMgP3rvD56nTApmk1fiCsFG9vhsME9yjbsNmPHZmCPS2NgwxLjk21Ww4Sn",
  "key12": "FxT28PqBxHk6M7cYKDRS4SP9ssT2SfvE76Kwp4W8XkA1QA6YrCz6fE5tXcdAqWPdVjLtoqtRMTi9xHfZQGjDP4x",
  "key13": "4ML5aY3xoDryzhMUMmSzQuKRomZ1br5GtG7XgGTSGrMW6Ai9TefrycMjyB93QxfoiGmRRYspBzo6AfaD88dUiCMT",
  "key14": "2d1BppfSgt8cZGvDymyVvnvyZQ7nDesNgyFeAemAgNawR44R1xauUM3rKZeRttACL2f85ccGrB8Zk9VhpwFPhhxQ",
  "key15": "2tZ24rSXHfc8A219ecKEBvjWfWAd7F2WRzY1znDpjGx6Z5zJjduJRnTuFjw4xmmSrvKaaJgVUuG4hegb9hemqa9v",
  "key16": "VdZToXmaGBLih7BDDaGth3xeY3obMjsM2HJS2Sdmdsjjh9Tki6LzdfkXHnk3cxGiHY32aPjatrMLeaiP7X972Pg",
  "key17": "4v9DTt6Rrjj96GNsq7jXoZj41kkehLJAoD6ck75FjSuzxghrcALDVnEeppNEn7P9UrmNW1kU6yp3v53npUgSeCys",
  "key18": "4mkTBmb9bhc7MLx3CjhCTzydmBx3osrfsDGebZTaCCwnrb2mtaFTEynQkY9ZEqGyKVMXkoyaatu87BhTirQ6deLL",
  "key19": "3NypfFGaLR89WoEu7fGYb8KFBzMNM4e542KCyxQVZNayYtnEZY1whoZYk59gczYDPTePm9NiR8DTcPSuiTp91R5t",
  "key20": "22teK29ScQ1G4N6GMu6snh7Xqc8CpXTpgMVvto3LkdTajQeXRSgYY9s9rEN44kRE9tg2YMfLxfntJphYaynt1g5e",
  "key21": "23xVm2cLQGisAjoN5NoJndNuNKCL16tqmfobSXKU6Vq5AM9DLp8b3T9TKBne4yx7TYjygPibbRgGXh8JkMwVbo4q",
  "key22": "4ip8tYi7amEpca1LPc8TpB58MY3ab7pGUsRJ1nWiEVRnNELr2ccKoMUdV2PN7c4Pe7hiRwvnSu1AcZcnHTdk2wwq",
  "key23": "cQfb7v7ELxcFAEvoNULiV1nSsVmE7KCGKeQVH52vJT1nTjKp798Zq52hvuXV1fEKtZ1kpxeF8AHieCrUYdQy2LT",
  "key24": "2nhZg17swBXJXgCRvEH8wmndbpc9aNK6yqExAtr6chWK9QKiCxesLxaAtbrYfdLbroNX1GsvitekmKMKXFWoFvbc",
  "key25": "ivbLk99B24eqhvnikHafXrDwRnzWGCUdnjzi3JzsqWbGddU9HWMcmPymGRrfmRBN1U72XJ1qsWuyRUZYeFNZL98",
  "key26": "mMrYfGrBpaByWRcrV7xWjrjgZda5UrPuLoz57G4kzYvpk266F56fQzJApNaNPikLJ9r7gf9bEMreGLaXSrUwN48",
  "key27": "4m4qtmN26cc2xXZjqoJgcdvuyfdT3ZJmBVb1W2RaBojJwPG2UDV3Y67YLpuixBoxktPKk1EuGhHjzstQRxGvU9gb"
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
