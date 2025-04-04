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
    "5hcduciRUH2kKdhxv6pkuGdFtz3dWFVGFSSmrdtqNzL7A8fq6UVRM8kpLr3y9YG3ERzTF5P4hGsLadzisfN6FtTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49iSR8pymysKAEoNq61VtYFwp6XimtYtdKEawD2hBtQUdMk7GYuwTKSE19UfJ2e97ceCC4NoXCyFJFZxdBZKzZA6",
  "key1": "3t5oEgvavqvYNsQRg37oRS3vV37QgVtveinQRJynM2fCtgDtvmQ5ngWntPF4PBVwDApnQx5vds185g9HeH6y488W",
  "key2": "3Dwszs74ay4P3ooFYdAs6pVS4PZowhFEaSgq8w3dcoHuYvNrVWfq65kSAAZEyRPEpVtELbiYvFxFGrdz7woKmd4o",
  "key3": "43m5HaAhJYqfbj2WnUboGT4MhTRwsKqfetCgrFXQEhY9QBFh3ysdZoyKqppwyTrZRZTVkNvd5cVTtg4pgwroPBF2",
  "key4": "4hopv3CZb8DFjjcAQbznkLScRbdnsYoxTGqGJYt5zaPF5m5G6uC59yzkVvTd5nFp3AnuZgeRJtJJD3ZG39avwSQf",
  "key5": "4qUv3PezLrmfJSuHj8pEMxgyJiYLHKsB56guU3hf1H2A2TR92uu4S6QRwih5xR5JnPuknVZ6DzKa8HFhQoH4DHYT",
  "key6": "Z9koxXJirEZ5tN6J9qmWUciWCGq7hbJ1Y5Gw861X1i4iNgRhtsT5fo1s9etBHZYSqY1k5o41aEGZD1ZXviRNWip",
  "key7": "36AhSgh7mXo3NeWJPr7HjGPErNabWtyhTQzVQbLMWNjPCfUZymMe4yVj1oYgAJU6ToneNAQiADSX7c84QhSVj91d",
  "key8": "4Vo837QXt8RHdYPTNTAmsAJZVtqmpmdcMDQvR14d4gMgbbkoQLXHpBJFDo95eZxA13mbvhM84MwgnGUnc7sPY1Gg",
  "key9": "48iyZoF5ySjdewJXUVQmveEc6tR72qw461D7hC67oybWfd7RXcMubQS6EHE2HEYC63sv6XdQGYbAGKYjMVVWztyz",
  "key10": "5onAni3M8dHvYKFt17XBRwDUjV8998WSz7j3z4xvM3xMnReFGUUYSjPEzRoV8LpeAbvCFSSZ2zcV9DqhW7BgLijF",
  "key11": "464eW2NNGoj34CsScD4KQmoM6FGKqu1jeD4UapmP8qzae6BS1WGPMaLKNDvdxcbFTDJyyWeLLiBKsy8L3GnrwVKR",
  "key12": "2YSXhDohkAvmi3pHReJwQEbZzmdKqucxX4xzMdR929pHVhwyvYBPesnqdm4sbpRnWoaYRwjNpdJTZgc77P8aymit",
  "key13": "39DdUEdt5MJsJ4LU9Td71mYnsna2x5gXKFSv8hWZPjBsnPqesA9AxSzUcmFSULhHp3QV7R4J6D2oanTWbqp6joXv",
  "key14": "GyYS6ToBURQBsy5decKvCQSDeQQjhSSH63FUDH6DFVuJbkrCXfmCB9uFKaCq5uYKoT3Hb6W7RsYVZJVKpZBCqEx",
  "key15": "4URmiGoRN4cwKWRFNRqzSc16MyMzzSPHVFJRYwK9c8wu9h3wiTtei7paLtz5VoU2J2zS2GYfEvEjXrt88k6wc5N3",
  "key16": "2EkULohSkQqCah1oFEsSTNZhDbiAjry8webE36Rj4TJ5wyVefCeupczbWn4pNHPnJx6etwQaY9eC5xuQraGkeSt5",
  "key17": "5LwtzruRXu9mbNChEYuuufrt1UL241LFoUNCXpSNMkKi2jz9dmWgYX5ZYE8fL2WZtDmEdKAyxtNJD15srjcsjTaZ",
  "key18": "2taebmM6qtkf34J4KBKmT3H29sRqNdptgZRBDZw8rJ3jRKeBiwdWGnbvEA2xauy6CTg76SCCwUxWcLngv7FB76rq",
  "key19": "4EKCwtDAZ6vi1zY2SL2HnbQJ28uK5GHFbS27YjUtzSsSzrB5RJzhtLNAysaoTNZxGHydKF1UR1bNmvxP6H9JZ6Kj",
  "key20": "3afNrRSw8pzgHcwzxhRvpUyq89sZA8YurSqsCLKtpSASCDa2EYZYfHeiCUTzs4R1oD2BDSNrrwjGi6A6ef1aT1nR",
  "key21": "4nkuzpDT53cwRLAS44o3apjpUcvR7j24x5nty8roPTGg4XsjeABzCAoSs1r5j73ownswFzNBoTjDBfaYUGPvFzAD",
  "key22": "2s3vzdUjWy3JZruqtQ8pmxGWkiTKvqhHEGuEz82xSotbahCv6LGLMX5HjZJDiPbogwHFqRKakDpgJihiAwndHmmP",
  "key23": "ckdAugEqTs3Fw9RPgQVdGLFdmqmP98Y7uKMtSyt28UESSHyvwjDKCgnERmp8kBe1UA8du72ixVRwWsaJPEpv9Yy",
  "key24": "3kRThCkxwwz7YX8dHgQEYmWAcYifCPoTHtX7hoth9rCJ5ukzQ7J1Mn9saKBnzEFVPCEMiXXx4eAjeAKcU8GNE7xr",
  "key25": "2NHCK2oWJ6Fp5tjKP6dErPnqdZG4SdmDChYEMUxrPRCKkbUYfLJmkE5K85e8RMUU3GeaQ42opnQXEW5KCMhgAFfQ",
  "key26": "ULHvw2BivFSxhS5Pfyg1wiCaP1SvYEurENu2w9ptAdF5pMwLTY7CCrMds6H7DURCXPLZ1sS25JNo3h8DS6cEBwY",
  "key27": "5YdHBr4GLCZ4Je9u3Tyfac66TnKFTFmWwa83Vq4MwUge2iEyVMXbhRt2qwzqDKe5fPjgrMqCa7zXn3kygUc12wLp"
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
