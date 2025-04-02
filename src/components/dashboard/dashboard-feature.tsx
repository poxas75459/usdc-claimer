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
    "UxQaSFzMjEXrK1We34Q6FryFMTGcnm6bR594Hyw3cYFyW61Uc6ofj7gMqi5EH5avgvTnEWE3vjuD2bZQ12zHkkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8oMWcTgwvpQqx7FeSDtUGXruCGdc1GoxGYDEq772BTrmkeismjp1ZsjEfDcCJPgCd4XUErG3dweHLjpTnKRnJ",
  "key1": "3EELqotpZmFcXLioy93vZLFQep7WAZojbqNW7Fdogu951Q8tTBL4Go9vkCgoanRQSqPBUzDhVzu2Wf5NynzbwK1o",
  "key2": "63A8VknTmPbWW6kusvST7aLckmMmkvdEdWCYL3afkGQ7N28WfkPebDRwnYjW6sBcqDiHn8bn4es73DmPbp8puGuv",
  "key3": "3pbaHYA8WLf9pmKTEG3DW3Enq8Gg7Hv2FCpch5FeVVVSvYMwqxjXFRq7e3WWrp9e6TEK3fGboVdv6Njg9ncqjeXL",
  "key4": "2QugoBHFSV34Cap9pVuCpdreDAiL3bWo8xeRdUvmxo4kBVErdLpjs3A5svFcXQGQap4ZrED8yRQAtzep7RNEhmcJ",
  "key5": "4vj9k83BkTWvsbBmFSdJjAit57SY9xgrGsjdcoArN5cF8o1gsHXaqhcXpsNXcCXGyu2kpMBzKMQKjgdZJxAcejtH",
  "key6": "3b8RHX96KbmiP9GirrkspVu9idATZxejzvnKQ5K85XLqPsobPE6HzMbFpVghYFnwjJknWF9mVprnRmCNN8HuNvxE",
  "key7": "43fAiuhc6xeMYd37DszofGSC9oog5vXSLffkLPnMAqxMM6FFoKuRv91BrjYPGTrwYN5mk99gAQWy3WeH1pmuTB5K",
  "key8": "5AD4ZnwkfmNnpxBhYoEr5SiagzvoqkqShxrP8q6rujgBiUZ8Possq3WLon2kW9cHq4kquv62k4M6dkirrnQSPzBQ",
  "key9": "3fHSYEGjufQYQWcpGcymSowDpgMebJaN9mSaJomCo3J7Njghiz4yRYFxLhKMDimimkgnmaUMuLQUSqdGjk6cdv7v",
  "key10": "3eHB9WcSFqW6i2xoEQnH2B16yN7Z8gH2itXRh2h3nG7ocdxBUWxHobqmkrHKacswfPmKZEitt74F2dRBgtNp5Fvm",
  "key11": "3FJdFwwk1G6Rm81zggGjtJsWx2YBJmnC6chc6seSVSaYFfpj6QS7kzS6KCECogdDHKxyXcYN2qzCxi2FcBd7chV7",
  "key12": "ZThfrNVmACnGJnPRYtgRRgB7VMWrjJzF1GN2555HALnTvEZemrihFxe1QRmDDXSPbqRPf5B2WdP7CCA97xr1HqA",
  "key13": "5v8K2bWtqrNiTeqS5ykbpquGrRFrKejA8mLhK3byqCmTn7LyqABiwLhvoDPQDbcBWQQeszZioEMuwG2xmRtxfPv",
  "key14": "25BtgSuPR9wYCDsyb4qg7rGk649XsGPWFHtxpEksTwzFadDF9JrKM3uFbq71VqgnBZ1QX4pJThr5aDdKjFHtXrr6",
  "key15": "4VrmX3SyymMi19Ket14ZZs3tGAm5zUPDY3J5RugCQ4G1jjiqdxLQJM469TVRMSSR9FKYZPK79Fdwd8vwBJCbMos8",
  "key16": "3cFd9pTccdbLEdb7VKmPHoef3VbzJKox4qiUiM9YEAyyPdmL3m1bP49KMCnH6Pkya7QoQFcVWfwsmJ42MV1G6noJ",
  "key17": "5wQRR9GgJp3pEJNjCbbqbuU8mvPKQyk5B9ey98U6kkNfo5fC8J1x1mnv7bwyG2dPCJtyYJ8qmngbFWAqD5yLCAdQ",
  "key18": "4nGUw1MuzNSxJhivedHpL4wkmVZosDzWi7T4u2rYEKpi9pJwFdP9tZeYbde1qReXpdhTj8yFY2EFrpVCiFHLD5yo",
  "key19": "5u6ukThd3vHTGv7YkdtHrTdoeiqFxSsSeihvz1f21X3ycAeXriY7SJYAP36Edyrz9BNPBqpxL78VsiMkhsJJrmYs",
  "key20": "35FQs7u2bpBhhHqsmecVwhiVMrf5cWDDyHQXQmvvdUUj6R37ZeRRzsS44eaLT2j7QBmHd47xKGUEm2iQTm3yFBw",
  "key21": "4JhvCpD9dNfWrJ3j8L81ghVq1U5mgyb5Pfda2WkdDxpAkS3KShtNPnmA6edrWwF7EokVCoj4yL6xynN4kfBkHT5M",
  "key22": "2diZBaSGSkfLSmnFC6c4cNBD2z7QGc61ANjjokivG7oFUnpUuV4sPPgg93xEgcHNYj8ocbh21554E5HEQvugLGSu",
  "key23": "SVFUMLHn9Jxv9LaKfXujpwnAreXCBPniX2YPBaosWhCB2ajvz4pLxtt8K4ErGpJ7fpL6qVQ2zXpgoA642CGw1J4",
  "key24": "3AvUpuZopMJ2vrrRridA3dEmcGbM88r42x12pZGYTJqT2AxdWzVDJGWYH2ii9LkTUEgoG97iAuEShEgeq4xjDheE",
  "key25": "3qJ9hVqZN3ugZvyc5GyQNimM7yxRmHiwk5s7NN2L5KjaRJ1oz4AsQWNBLxSEL3FyJx429AxkUiUGMCf1GWQ5DpNs",
  "key26": "4ZwM1WbbQiRPvDM2JdMeV7KQtUNpBb2VKUsVMGf8gQ1igKqDgjahjjWgwWcxmHQ2a1rj4hfW7PgYZd6ekuEZs95o"
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
