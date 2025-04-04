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
    "21c7b4wgxcmDgPzdJ2ibuzXmaoh2HP6GqTsrMnUeHWQcb19JHsG3yPotUfyoVGDbqqt4CWqni3SvUwt7r7KRK5N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42HGB3ETv9Un149NkRQT9S6QhgtHwaMgB34QRwkJqddAuH5Uu4jCFcVeVBZpgZfdwbqtPLyKEk3cLDtWSr8nCGPd",
  "key1": "jJrQADBXzCzgsJLTnpRVXfFMx2nYbsbXAjr6nRqrWePcKzadoxMKovZeQTSBLkCN5jhAY9skzkUduDcpiCfWzGN",
  "key2": "46ffow3vK3cZ4MAXe1ftwfi9Hzp9PEY65T774oaABjtvHFr6XqrePkXRQcyDFjjNaDUiB2xYtyjXRcdAVdfM2bNV",
  "key3": "2Dhq8npVvREAtY7jbnxFbrz3p4AkpuicvP85rVPy65ayAvmq2zGpJw9cheXfRmYWoKwyG9npiT43kvqrZqNZhTBg",
  "key4": "2g15s2DzkeoCrRnEcpVzPzf5Z1Rtqc8KEyPErWd6bATsAvYnMxSfVVxJG9LpxxgSSKoDXUsJznN22417NAzmhyuA",
  "key5": "21iVxafMRRp8fx3NBmni8x3NM9DoU9hLqQgpzsECev4ud3eUEdaQZ1aG5iz9cpRHefrBXTcU3dH2k2cyV1UBLmTZ",
  "key6": "4mL7hSycgEYADiB8ieAofMqyArfgYv15i47yJ73jGmHU2ucM6BwgB8NdrryMGMWYSCCv1gxmAWiE2yuvvnpUQydB",
  "key7": "4co1qEQvUEVXtZA1FsVMmi4sz9ViasY1QC2JUSL9TPJEQiAnmoVn16SPfenrCm2ERd7d6PKBynXr6zb4txmMS7J4",
  "key8": "EuthsPeU1pAF17GtrykRi1Cdh1voX2bUr3t5YGAsj9xCP1LeBSPRojwsdTcRftDqVrADJqfJHSZFsmEfXu7Sv9w",
  "key9": "5DuZmQSi7tL2k3kSxgHfNtiKDcM6yfgsTiSQtdWhtx1yCj3V48mU1CjRrZXkmd9ehmbSDe4KumiokaoMuKsmcYWc",
  "key10": "64yUUqM2DbgDaJjjP7EitHAa7E6YAC3kQhhFS429SsdLsa6iVfhrbUu1Lan4KVmsgHeubmXModMi8pzDi17GDgZ7",
  "key11": "q7fUhXxZYd6nk32V1sQV4zhQ2DwV8R2PC6TM1XuH2JPQBFLHmxF64Kp6QxFKc1bCTxfmVNBeMdWa4QvHswmmguj",
  "key12": "4STMcgCs8hQc4QyeHSNd1ezUEoTmqgdyZ5e8cDo3FmLKWgiNPG6exHmkRWMKERTmA71UEMoNfss6amCUsrhU9NwB",
  "key13": "3x2fDZBDZt3G8LbdcJpyt5iVjnrTE5SrkEWitJf4gnTbwFup83GuDCRy8wMSJjnWtgzwMhS75y5gaWDKyUmGNjwg",
  "key14": "5aCUyLw55AQjUnvoa118ZmjgPm4zM2L85kPMZRrdukjTLGYMd1LTs7eAQx92rV6vXUofd3246gZU58sxx5Vgseas",
  "key15": "qVQWLpXonfJY4eFixcNddDkwE1yr5spMip97zZCU54Y8nNTFQPVBzVCa1iyqWGStVpZGs44ekBhwCBFQXdY3GR8",
  "key16": "2fH1veTtdUevWacS927mPa2Rncr9P5XgAqUSGfWocLtRTmSLcyWKLhvuT2tDYtb7uRiEay4ngpafqGsKovaADNoo",
  "key17": "3wQPQpHF5q2L8DTz9zmibgRmGKa6pFY39Uo6Wn8U8WimbWcCbCcDX1Ufb2BjRXsesjTYc6nPNeRKuC82hsFu2itC",
  "key18": "4CxnnyujnrtkquFzRkXw7CoAH3QXUVuRvJuf3HJ4LfiBruFbqE351QGhnTUgpFioWEarJWS2K4HoPoyuwFq5waqH",
  "key19": "5vqbP7AeJXmLTHtE5gGHME9MhhaQrT395jtZJQEmDVeCsknTMK4gA99pAQ9pRQgNV7Y81RVbgR6yU1dQXETbBYBs",
  "key20": "sEApEVSfSv5UJT3bw4y6tcoKYKZ2bv4ne8S11TxebNsTCFMN5KNQZPZpttBGvcUqd6Zh6mZCwiT4BttSNvtM3Y7",
  "key21": "5ii72heAh3xEdhz4NeyLMo2uEj2sxyUDPADxQ4Rr2tE5THu4K54PhgJ8CEnbQHv2t5kUDd2kk8ZzsSAZz4jYnovd",
  "key22": "3yUwyqX5Jqhda1sLjcLRGbVSo4uETrFAJtSgfYWnQ54bKRnJsrAT6LcXGW7MFfDmNT4c55JyrLbRqTs2T5ticvNW",
  "key23": "5yw7aPTxM5YjXq54HLzVWT7soXFNe824UDtXB1yZjtGGDgi5MaAmvrqdCrFbNZfiUCCqst4J81qjMuN45rgmrrDo",
  "key24": "48r9FLmeTCHEgdZ156A8uqmQzQktfgADEnRte7sBs8x6ZhapJaVhTxiouBHq8MKLqghbnhJhtHX5ZaD7cN3KLPb6",
  "key25": "48LNmpbhzt6xZDxgSVr2sTSUEgTouvEVH39pCUvQyYHMW7aJvvNtU6cBTSWTqbFLgmTo8noqoZL3Dm4mCc5rKbnE",
  "key26": "3rNzQhY6Xcx9tiqoCyNKvzn4dBUxCYWT7s4fuaAs7StMRshGmDiqH1QgyvdCA6XcXXrbggUz8PoNy364jGTniDtr",
  "key27": "4QuKHMg7bUd5eQcABtN5s7bb3XD2zvE8SfShUgEn3SdgBmiQhpt39cdqSaXbqxMCfPGBvDWbBY9Vc4RRjX3mE1p1",
  "key28": "2saMBshNTkZm8wmbTLj72XEnYLrygfnNDGsz1ELEmJBHRnhfteMPW7QknsnqFdR2igjUCBmo4sNgp7ydsmmts7nL",
  "key29": "2aK691DEDiPah2ZctiUVug58cKk7yjNcbbFAsFYbd1ZCChBbyhxnFcYf29zY4SgEPB2aH3YMRgTJKUgTCR4pF8oh",
  "key30": "5gKuC5Dde676cNbReq9fUkj2n9ZWMSDEc8zkyv1KVPSDsGURPhdJbey9Wj95KHxAYxMKaVBTFo2g9nWDCvZt7NFD"
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
