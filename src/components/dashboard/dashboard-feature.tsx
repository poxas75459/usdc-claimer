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
    "2oLZRoRTsdFjEXVdLoUZE5ciTJriz48HmptyCrAgJwyyDJ3xZTvc11czeNFL1kNrv7FggKYtDuNvwC1StFv3H4uD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3DFzu1eKUFzedz5xSNGtWY6TDf2aECL34tpG7LC7314iWUQPUyS2bK5mMtCL6u71re7sLUy6xFMsNgEnWfpcVv",
  "key1": "4PffhKLBtNbnwN2VahxEyuAXk2uodYpxkgMgdaTQ2qwCtuKEbpErE1JDxN6ihCALzgtTaSKwCbktLGUDhtqHp6BY",
  "key2": "2QzdUPvNV62FwJxXQuu9PF1jyv61o53ZQuY8NqPTEyw6k5PKq5xGv97sHMY379cu3YLjpehYe8fyrAkMYtxApVR1",
  "key3": "2mkiKoAtP4cB6hcw5rXrVKYMuwND9cgYoThvpqTVtdo18AEUhRws3XV7dEYQvbAf4ywwRGqNibdgEpPK1UL3gBYU",
  "key4": "33LbP4BmwPcshj6hfmVaRbwX2S9whYhuLRmukfRvXC7YckepddHVCYb4BsR3sVA5L9FzR9By5rqGsHQzJnfuG2fQ",
  "key5": "47MDjfFTiosAdYDyiJRH1aJX82xrWSKidQBD7Ht6jm7SKfdWNEWVgiVvvSdZJiATWyTJJtYJjjw7Wj6asCQSsvam",
  "key6": "nWbwkwKtVUBxgt7tW6g1xHDoZoZWoggUumz1AFM9eBcizcYgv6oyTw4TK9WB2TJFMvGRwbxHi47abSyptoPrhkF",
  "key7": "46LeFsoZoFGZ73BoC86yJhzDs5EqoyGTdjoUoucQ3WjCF6wVSewppTeufzJurkoRScSPjxKMGCq8ChPCPe75h7rf",
  "key8": "8s47YGksbHVgoRoKhSLBwmkQjqKM2whumpTxv6WPfZGf3hxtN7XftQ5bfxNsV5PexWz3CMSaGhNcW6tZcQUSGw5",
  "key9": "C2t5GpEY7WWgixgGPG4ddJqdBMWnfUNe6JYrPdaMxDLt8W1wHMMC3mDVgZLazF7hXe7FW4Hxe8NK1c49KD4Uwds",
  "key10": "BfnNGaMu8i8ShBKWbF6YWAw5i8yRE7e7VSnPpbV6SQLciGrsh4oNXAi94NiRZEHtgotztRKzhSwR1FncA3RPK1L",
  "key11": "5LxwP4prJZAvkveeUzqTNJmLaFMekKqERoPJwrVjbthB8zPKnsfgcEU9ErxZjqvcg3vZsjaMQdWCA7fr2sGDuekT",
  "key12": "kLoMxg7CHfDvmooEoipGkjxD4R2iQAbqpQrHWAu1xFRJyGnW2cHsfW1Nvbe9FdynSVZgQDYeuTowzTTFarMAvkq",
  "key13": "3LdL2J5QdwRrpe586px44oHsUikBa3qi7ncQeAEgbDFhRRp2sWjVo2PiHdLFCo5nc4prLdCrHWoFSXSC1yWBFei",
  "key14": "VsmJtqNLkLdF1xUe5tDtKZVCfH1qH5YvUnMb5oFC7Up2Rm8wwBftZ4BPPZTCNEFVxFUwagp9a5TvA71Xx2ECFrF",
  "key15": "66J7srwxxGLDGJXXR9AWqHDbZkN4DdRW4usM635nw3vNgoKPxPypZWt4atkj3YefgJ8oqV8gs3GvwW9rSYy5b4SU",
  "key16": "5ToUtUWbMTiRtxdncvP6Xg57uLmjrzcJwjodrcpff3QQ2qKktGyKBhQcUmBuh698kG8Dekr1BY4J5zMrnUrvo5WU",
  "key17": "2WkeTAfccK7CPs5vsEH5RBDKeYLSWFLZREQGHbogwBFABZ6BHP5hwqEMVzx17fvrNYcgZ9mRbLh8HbrK7m6Jjxm3",
  "key18": "ZBqsY6oQDXoS8x8SxUS9qy6bamuWebV2c52131NdUvBVVvnEiW7z3S6mPxAxmJziUVHrccD4hBHZTXyLpzSrEvY",
  "key19": "adJJ81Jgm17U5r1kFJJQYC1hdUYGCBGJ1LwNsUaV1GiAFQ8sqSEAj7nJmzqhsfuaxRR1N3t3SdcoYes3kHWYYhX",
  "key20": "3BnEqZAsE4XsEYVaN9hKR9T2viWvLMEvqVecAQex2AxDdLjaoLQmfskAjG2VFYMNanfACCeXqqnwErzXrA8qLAf",
  "key21": "w6ss7V8BBfCHFWEnGHKLNC3o3Q3XSaT7thVFVZnpjxwXTYCk77dJxiXfEWiNDTh1zE3cGsAXrgFa6G38JCxvKHd",
  "key22": "2QSFpD2u5fZYU6nuCopReTBZA3UFn3ZxVCCUMxPQvzeoDXA4e2oTnyDQHu7GsQXeDx5FTzSke8ZhuoFGQiLUHU88",
  "key23": "tPGfvSZyuxCzjJHHFwHka6ycJNwHvi84sGKU5vWVBCeZiVmFcSxFTX5NvtgCLS71KWZRzLW4ZqHSfsjUT6dDGha",
  "key24": "4doFrX1QWguQjBYtVaLtC1Ezs37APyUwApEKLQ1tm9SF79As8Q7yEtZzvSemDKTS2HyFg56Pik7Uq473rbDUAyvZ",
  "key25": "5YJYqsrQXqkRNytgLdADQFhbscboU56v5252gREHc3DLdr5cc2tYJ5wwzqxvTsN2BjDcwUi2KiKJfvzCgebCbtFZ",
  "key26": "uia9CaTdzNJTcotDqYmNxihbcTJmG1acPyWGsopRftr3H5arvFfsumfDnabBcmA1WSFMcsWW3yEKenRUmd4h8yP",
  "key27": "38eK6qxw2MrLRmG3EuZXKNsZxrESyLznYFkJud2pyEgkDwYARGbquA9C9B6EkKenMxrwcE8zPnNsXsxw7VaBTobk",
  "key28": "27sP76xfQHgNyTy8UDnfgbiXyD3VbNooJxjonyipKxprbontPTCDTnCRSWpuEHs6X46PYBVV28w7M3WRuvvNEsCW",
  "key29": "46EWEsfepf3CJjc4JABsnvhupghrPoQ6xb6FurnsqwWnngAkK8sPaMGRtVhQruqaQ8zh15afETg9PLxC94MzT45S",
  "key30": "5asn3QJMBbKFQuQ9fbG7HHKid3bJRgTcPgnVCXcA5bSzmFi154FFwzw71UEhrjCZVCE222DfJWjrHxGooD2efBK3"
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
