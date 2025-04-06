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
    "2BF1EvC5sXkitRPhBU9unfq6yBX7Kk7cR6gfKLcNayL2tG38J3GXznfSL1Zp9DKvPdzpPcNWJnc7pUuXZWW5MsMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDWpZa7BkrCGC4kjKtQo2ToUYLpVqS2JiFRotLHaaxmRhUBjsgCdEacVi24m9rLQtyTt3RiNJVyNcb3Ed6CnBaz",
  "key1": "hsCG7wiyCfDFvmKfC6GhdWoHXsBiNTHVxVh4CfQaiz7TLkNtvxRaUiVCcjLemj6Z8cGuiaNfvBEbgea3qiBSsMW",
  "key2": "4fLVNwb2Ekft3XAiczULbqvBgEeR16u8Va25sf7ucuiQeEtDGPdoxYx8aiun5rboQA6HKMkf1CyU6X6qdDSoTe5D",
  "key3": "2RpZXkqukvDvyYKvZqhR7Cqu7rPXTjngKtgeTnJ37jD7jyWg6ZiuBt99f7ZGbndckxXbpMWXEP4hV45Msuzy19QX",
  "key4": "5Vm1dzXrUdRTY5PqoLYnTRWxQhK6BqGDqGgtUqZdgvdD6TXaQpErhkCMN7ekqmz4CYFenH5RvRVUBoBwXrVTzkhD",
  "key5": "2nSouCbthry8QJeMsZsfsMhZsYeVK9TrbhQaPD1TBnnrf8twtbbS7ZNaNyCDThLKotbPEPnow2X1icpyuTw1nu3b",
  "key6": "4viQuq8HoLdWpZgs89LrMqvizmBo1MwSbXPu4a4e2fvU7gMV2YszEdNd5bm3UUVQPEryj4ouxp1GAFxyKfX5RfNb",
  "key7": "3DyW5G91CtyavDACokQ5JoT3Zbv3W8NEU4R3rBY63G1rvnpnyHoW6UnR9khGTH2LVdUHskMnND5kbSwx6TCR9sDS",
  "key8": "5pQXCwmeYmhYTybuv8UhWG4D1fxFTyxQwY6Ru9tXXsMvrEtxJgPzq2sLA2prtdB7xvU3FkSZAJJdqhoWcrJHnydd",
  "key9": "iC3FEUeXoR5xndoj5QwWPwsgrxX35xsDVW8YppXyMgcoUDet9K3U4QM6Nw4ZVDzhC6A7dW55rakvZEeZmuBKjZ2",
  "key10": "62y4AQJY6eYCb5CwXFGQ2aK4BYrjyt9aGm9RR4LDqCUZ8T8fafk2xsxpFoB6xbo1mCiJoU22BSisRfNtu5D6SLLF",
  "key11": "2hMED7toBEe7c4pvSVy5cMSmbghCkmaxTg4rpHN8JJMHmr6Y7YSLnAdMwD6fqYnwtcgkxHHKd6bQ4Tg9cbAkwoH6",
  "key12": "31GEDSrud87dReGBGAZnZR7BHVcAo78NyMoMw7Pk5Vz9xRyiwKR6k48LMktHG2NPZwvuKn2my5PqQ4YeGnxNMD8Z",
  "key13": "2aHt2omwET2L89BEJANX13c2anBDsB8n6jgfKBXcsv6zfo8d8WY3xSGiLt8EdEE2kVLv9qZawtUJ294qb1ufrET2",
  "key14": "2QVWC2KaLaBDA72qpFA9hY8gvXdojdauFWVmL4v4tsdkgmuKFCvXfst5ozejqvPEYew6cvFJ3XGEf2NMmacAbLd1",
  "key15": "bkq1VZfT5UiHnETiVPqUWiTU5iQe8RvpBvWhZYgUEqemPbD1Ecf5DzTGpsvYiB8CYCZo1B59PGXcxsMCJjWGk39",
  "key16": "4U3BbX7nwWCTuGguFfPDcm2KWQYoby4UbSrgwvVyS5d3G6MWDuG8BBFpNwgV8yoBcHWbig2qGbkYdv46fSRYoS9Q",
  "key17": "TFosQBSJit4oBDxsuuuNN8xCxmDCRTpARCLybwkVeSuoUSnwwpVfjaJfS3hV1hzLr6sJKWoKmaZ1h3Ntcocceoq",
  "key18": "wmNggVFkLVrFCANG1bnTdv9JbUwkh3NaCCij7Uto8moVES3BEsEpZob1RF5rzn4NxrEw1Y6gLf56M3CVVr54TBN",
  "key19": "3FLVexmfKoh7yw1DvNqAq2s6xp6FA63AkmFeHb53iK3R7cuYyqiSwNJnVKwbfPmAcnPoioUkikWv6SVRG6HYvZD8",
  "key20": "2GCJj8zihBQGx9KNnxjmC4wXaBEhDExxzngubuM1gfsLYgAcrcq2pryRuuy4JR2WMh5tyrXaEXB2FECb74sULKcg",
  "key21": "3tZA2wBamFxWN1MB7vEDJTkuf8sJ8XqzbgcSrXYtJXQsfRTq3kZF5xUSLVnYdDhVdMwXePDtkuxcPJdipsFy5yve",
  "key22": "4RnZRuTiQyYKq4Q8YURCRPEpXAARgSgCmjGxWLfLmWqogqK6jQoeBxLGbQMUdFgjgrP4NxYr94jS3CN7wiDLH9qz",
  "key23": "VnxmxJZxME1DxCVr81V5X5PkWFof7GHBpPTiHaPG8eLhTt9dXxd5rmPi2QU9xE5RB5cYk6RNGsZrcjBDWW4bFan",
  "key24": "55pDtPJBEa4kRFADCP6ANk8BLSBLZbu1WUqzfmLyr36nosc3Dbkx3WzTN6Aq5YS57RnY19VrbfbvyNrqF1QNw1FL",
  "key25": "KHHrokjabNEmMvS18WPwrFdvuxK5224tc5T4oN26oK7SxngqKzBTw8dtHHVaqE2xYmZvhRbc4RNKt41gsZxnEBy",
  "key26": "2Upb2yvfXGUaCVjjNaLN7mH9o5gNUnNo9wSyBDFD7Peqz11uZ4EESy7DPr8KdmquTqGpjxJ2yGXZnC9fQ8Hg43jK",
  "key27": "3iRzGdFtUcSUB31tV9cvHd9pcTni2BqNGkJ74AXYCNBRBq5V1EEmRDtafS2FFoGcNe5pA1ow3Nvgfohtd6oSH21R",
  "key28": "2MtfWFLEHfixJzdDVbte6RwBaXa7hbgQH9mtpcFQPEYaR84euSb1QgHUFF3cqTnUW46x5Zr7ezYkpmp4BqYkDPeR",
  "key29": "4D76gS9dHD4i278quFLWua52uEveB8ncfuuEGztJ2sjotS3DgZmQe2gtGzYMZxApMLPb3XQtEYcE4G7kAxE8AKBA"
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
