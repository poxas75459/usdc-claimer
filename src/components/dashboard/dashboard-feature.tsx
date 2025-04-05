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
    "2hMCASxwdy3zgzoexUCHZWGENnjxmh7Rf9koRRmqwfZR6yCowCsYbzLyb5p4oU3nRLCHie3WEu3HLoCLQ6CxBxYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kpo6RT7aAU55FatfAM4wGYWW9KkfXDCtm4fT4SDMRF97TuxGqMv2b5cMCe7FQaryaXp2NPGTgAFwfLAFQ9vZr92",
  "key1": "5CHkDCk4tBscSoULtoB4HW6E9RSP1d5Po9W9ksGqizrouftB56Wz8cumHhau8Di49HXFn1FdyE8dfH7ytqwsALRg",
  "key2": "3rLFXD2AmdnFgxodZyp1goU9bbjBNHp5nXwP1utFmdnhc3mHFERU3G2vWGL2wFtTbutDbWfcxj3bG4TcKy35HSai",
  "key3": "2RfvmVnG8qsvzqRJ5NDAtNLu6LzyWp5JLfG7LpAW6HjJKsapEXprhCk4RWqNngqfY5qnEqhwMHoCRcKW9vLEXtYn",
  "key4": "29i5cdbHnJ9VF4v4VhdME7fvrL7LLfHHFxuLqiTjFX3YtgZ5YjwEfCZLVdD6QU9YCUGEbopNGfCcht6tyDTGPaJm",
  "key5": "4ArdJREznGAwtt47pz7PtsZAnTk15PsaJ6xaRRMGY8e6KatksnHG4GXRwt3rgic7SNwC5ENrA6smzdDZn2QjRvH7",
  "key6": "3gnp4SRCLbuN5X8ifHEXHu4uxaAMRGvnRWFPv8Q9wAQHCnSd6kJsciH1EDAU6nWXaaYjJKJAKS8L87SSV8b16e5h",
  "key7": "FxYfUhBRSQrXkJFvawcQ6XNVHJAZEeWnaG5GATREuTmzHcYrnGtzFNMwPNDZTJByBYke6BUjmuWPfHYD997o3gm",
  "key8": "2otvrCxhnnRw1qvUg7AiZnEpGTuT9KXBsfqNhS9AJPwJBpxMo3EfJwq5Z1T7AaZSuuZ5JfmbkYgZ5LxDXNupzxqo",
  "key9": "7UWXfgtKe7RbuAUWgGj3NE24yaCyDA23JtHrDRSAVwexZLDasYX2dcDvZuX1MDb9WgWHmdMMD6bxsB51ZMQJFn7",
  "key10": "3WzwtrkqasRY6vQD9d38abLzVeRGPum33jVrvfV6tCKxVcriXSuscJLXCtCH5keCqzrCQDiKpzJkF5qJkvAPxBaZ",
  "key11": "3syQKiSX9VxRroVaMbvx9spYYWfJuARkha4kg7GYCTnGuSqmsLcGfvF8EbR6ZuW7BjMrqV8CVc3rXp93Kwvwuu3F",
  "key12": "2RZGqzuUGp5pBhk373fPf6W1KzHxToLbLBf3yuXXmoCskLSrhuYDPiQhdtkoBiTAnR9DEMoaF76f75LxPNx7iZkc",
  "key13": "53PoXwMMzR9c7wLfrwAVq5v9vJ8q99eR8rqDpYqD5R7tnyoyKoaaZDBtuXL9ku4w7Xcm7KEEbBr1ENVoAzeFTNuR",
  "key14": "2KhdNddim6MykTrjzhRsjhRWTxvY5DPyrttLnuDSBvda4NYSepsFarRay7Kz4KM5iFneZzMx5WqdocxUphwT1Q4u",
  "key15": "5jTtj4Xa9S3Qkp5z5PhcfqGJL49J8wMETf7uErqDwuMhvg6QR6F2pPFMLWb3ZkyUM8h7S7wotV4TJwuBdSPzzfR7",
  "key16": "5xLzZfBHPkMwENoWTHCgn8wgrr1tLGPfXLVG2MPhm1bzt33m9f49hWJeQ8YcGmwiV2vt53dUuedxt4XeJ8stpRDQ",
  "key17": "5f2HW63x88q8HyddFsiV3gXYhVPWaXy8xTha9gkD8fUoARA7o4vAbjHHt66ftCk1mLkCLJhMnMKvjfFVKkkuDSNy",
  "key18": "3XLQz4uo2kKASitoYAefVGWxRYaU45FBxKLggAVWsRivToZYtEZRQg9bCgaxThbDbYeHcX6tT6u4pFXDva8edG3w",
  "key19": "YKb1ZJHdywq4oToqDZ2SNSDukKcMXV8UUv4X1ZF3iiZpZvjZwMuwz4qV2CYvshFo7oCaFcozFUvehHTrusiqEQs",
  "key20": "5bujuLACs7atsEP323TPUEQTXcZdrXVbFk2aZZBdWD1MGc38kaqN8sxsxXNF3qMSbrW3KRwGVjZXU8LbDiSKewPX",
  "key21": "2REnGRBzCJ2PsXqybVYfb3p624NqEXBhbpzV4hbmS94z35GCKXanXhQ3mMHhAUqhvvruWfqKoukrzRMDQNAtjFgy",
  "key22": "2VNKPb8hDf6AZkLmdB2Zf5rJNBihTatQd3evivnUXuLzibBTzr3WrY7pSRH4E7SV85zNQ225zmDiiPkdkVdMw7DC",
  "key23": "3gXiyHHEqvRWuwg2dxa4qDsqDu8uQBvbxBnmJxtAwVBwP7RfdwAofMtZf3748ZXUj2t4S5vgqD1CZFoBkqpfjy1C",
  "key24": "XVmvqRm5JPXsimCbxjqrmH21T9vo4bxkPnJeLxYDw8FkA9GRdzUyHHQ6JpwNbnFtuSfTJBnb6MfaXthf1jhFRoc",
  "key25": "2vfyUXDopnWcvaesuPCbSEtVERrfgHHfyzpYyNiPk21yW587zaLFRS8FGBmhnVZ457EibjEtYeBFhpeQjxnGb316",
  "key26": "425pVBC3GEStr1A692QdjwGfiPZwQhLMQVYScRZGNwcrGdCPcEGjfwHpSkrTVwxhVp1FaTyaKiGFHp4UjBPkFoEU",
  "key27": "4XiRaFDBD2toeCrQNkNzY7bmHNYRNdCaWd28wYRHCZQSEpCyYMRegJcAQVhxKpvzquuWa6bdrUfWYXHkTYx8iP4H"
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
