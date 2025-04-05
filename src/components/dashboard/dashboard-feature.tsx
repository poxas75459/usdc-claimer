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
    "3ZbEraTVoUvjuLumHyMK1XZEzvgkFZX7DMoEt5W4im3u6cLE9f1HEWobadGaLN7WQwNwRhELjYZmmvPj4s8jtLtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGk6624MaNzSrrT2osnMph4nEfAZPUsoPyoxHvfCxqovGbxWKTdsXvHymp18nfMsbDKyuwbnhYCjtyT5jVA2mCR",
  "key1": "5Ah1bowWwv5zbq39uSb2Zgr8UUsfKUwhGrAgAbRFPNqyausjL427DtnJv6uKhTu15zutLrgN8VoE6DjJ1g4epT9Q",
  "key2": "5nmsmMdktZ7sDHQbnMCePQa8rMz7Lh2d6VQdtc8rZrpovqnwzAJxvZvo3bDYpB6u6CWU6eD2LLjxprB54A1VAd26",
  "key3": "5gW2YC93Vcx8q63qiK7kjJEiZ2L2Y94yjns5e1m7qCqqCiNeBPi6uzQTsmKJykwZyRbxQshPJqBcSAno9QfWaibe",
  "key4": "2WrXQ8PEoiurT8iVohrbhF2CWNPo5yVq1HzPH8KHZ1VzJCGt9wao39i94pVXsnumrvr81UGgNry8ZmBhFmNtRYmG",
  "key5": "Abeo6dsPg2RNTgvApBWCGz1uw6KTitw5ez7h2AcsPkaJaR7DV3EGWf4oWPHQfvZMUyffrZgVaUQFtKNuULtXoDP",
  "key6": "3UaUpQ4wMhicMsvv6DS2MjtL6LXE9TZqeXQgyNqyL8egYy9wbnrofzX5y6ru7FHPiNHJvfwfPuQ17YvEauo8GSPn",
  "key7": "3eJoYkBct4msn8p2WCZTEyWzK5esTjM28Gx7EA8YaeRdFdmX3xyBZZrXydDZQuNLGNoecw6eeQzsue1XBnwSLJXx",
  "key8": "NNVoJotZF2B8nvYH5wsCTY6fmxQGU2urJkHRAYXcVxxsijj4RL4ApyDgbtMACEKgrk79wEUaAob28qxBMDYEA8B",
  "key9": "5iecBij412NXCdUsgeTJX2MF8mpteSUL6DN4xdC73sUGj8FAix2zdyvaahyuAeFJQRAYdvvw3DY2Fb3gDQnQPrTA",
  "key10": "2A2CUt2abyWRxLaitrYHNxCMicR3ZXevckQsKrnGqYZoQbZfwHSFdEALAwQXzCEWgHTvPafDif58af7WFV9RW8rz",
  "key11": "2t9rfCeJfuwH6AvZGAVTZB2WrrYCczRu2hQyX2u8LY3FwSJMs7xpVz4E4TjDRTgyYCEKR6Z1LcNf69EHre9ihadn",
  "key12": "5QB3PWuZA8ecnXGLmi3uTy6Y15p7ER758YLWxRMcoDUvPSXRfg7inqr7QV9y6qhhQfwPBiBReFG6Xc4HJnsryN9F",
  "key13": "4ShrNT2VGeXgVaMzSK3qckZENhWk4EZ3xgMihhTxdJ62sFdT4kcqCZtSsqwJWHCgYyBrQRWkx18vyHceaxPrvKUv",
  "key14": "aUY6957pZuYWLtkARLUvF8aHoc9wcrnCyoLErsY25M6wNem1LB1SAtS2aJnwFJvt3cRREUhVBT3eiQAUFcRnkkH",
  "key15": "2cdNpxzK7P7C853ViqM1r49ryELocPUcq641Z2kepSVuHE8sMgnryKRJ2phv36UxFEEjFiQJ5zgim2aARajwsNcm",
  "key16": "5kD9PFSv4CpiC9isNrEwLXQtSCCwa6XQbchMTDdfHdw7ds9Wpu4WhLhW7T315N7jXfXLzuBRBaricmPkekxLdYme",
  "key17": "WrhJTBX92wT6ZiupnAVBC6KLgDUzYhzMWa3C9eB1Jab6ZV5oWN5djw5WoCUmPNudfdvXxsaD6pkTvw46W6t5wiy",
  "key18": "5AgPToa7DBchXohbHLK3RGnRmKSEsaDK87reyLi2yFXDSZFute5GBCTqK5mgYHzYZUQVWYBGhkxHcuJ83nQquh6s",
  "key19": "5thjoFG4zCs8UGk5NjR1gKFYjB9SyCAv57q4vwM5KoDj9N8eRnxAafwiKqukgvegG8dny9dcitZhmoG9SUWdKVTe",
  "key20": "4LnuxnD9F2geVJTaoTz5wPHQfrMKGPpG5ZYfAiagS6F9zYBvDLPmsiVUUkRsQmtYyJAsSNLTmhsdsNH7b6WJSwY4",
  "key21": "2hxjE1cWMQ22TEUme1KMNui8NdGcfmeVTGAtRNDamk1ToaH16RaAsZSfqwg2ziU63KPtjbmMgnzx2dM7N7MDPC33",
  "key22": "5k22kFPuzcmuWewv366nKF4FPwUPuBeMnHw6HthjyGR2pUb8GNrBpVNFhnbUsu4aFbcTApd3bNfSJtPBintUjj8X",
  "key23": "5NkvpXahwQn9weLp8GsYqtqWbpboZmAQPFSU97fdk6NNSidxPymNmoKexxffKSruqWVDqT9rv4Vvfk9cG27YB5Jk",
  "key24": "Vya3pFTyTBzznuyb2UVm9Ajt3tZ8BcxxWqn7SnUs9WdxxhRMkH5aPKTpXxQg5DZQkpXkT2gioUbedvz6mi7Z2aB",
  "key25": "3KW6KViPYd92afSCtCKzsYwAb4dPNmyRdiQDi6vhGD3PY3DSs3AtEU5CfzJpuH7X8SyxiJ9qPd1WTVgGLcFUmzvc",
  "key26": "eXCRHiag8xdAAgkTt6XXQQvhWdCma1VZ7mu5zQMJmpHrnKoZDTNZX9KaxQFXCA2g455nAwFyCqjVdRUub9db19U",
  "key27": "Ybja2yKevZVTgr56cvvK5ezAzvftYdZduZLw2DiH2w7XRxmSbX5syTcpgZmQRjcrUKHhdsWMRRaATPau4qPBJyZ",
  "key28": "4Jveo1Kj78eaX7yPVXt2UKFsG3ThkGCnj7E7HHzTFyc5RYW8JDFJ4MCrLmK7rvr24hv9yhrzzvwiwFyFR7cD1Eoh",
  "key29": "uWg6VcWZwGmgG6GTfutuF39hSCzani69PDoseom5meAashYb6m4bQaN5HV1jouXfCTs616WfZhehdoYWNoSQQkF",
  "key30": "3Lv71Tnh5oeLvwk4km4kkKZay31JA9xkFsNBQE55asLwqTL5EJ8CFgFBSKsNz9yY59ZWEFyLY778gnUXEpBNy4tP"
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
