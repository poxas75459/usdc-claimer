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
    "5yguMawCj38m2NjU5GkTJw1VLLK8BT8VaxNkNBCPFKey5fPh3FQ2PTPxfdrwnUqczVdCJRM1TANZvGXhZcTmgDdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qo2EUJpvLuf2bojvKzz8HS43qTeedMFHkM6NwKmDWUDHEWwDBquEbYmFThUQidsyepjqULKEwFvxttParjFmjVb",
  "key1": "5fMojRB1dBqomHdpMpwozB8eMTpHQVUZaMDgi5jLh91yN4SMEdBg95B1637Ld3dSPjfAziJEU9gKA2x1JN6dYEhx",
  "key2": "3xKbJkg9Ze6uaUaWHziDjmqQoumdvvEvN63B7XdZxHQd7ggyWCNRySrsrmtHup7HwUnDDsFpkCQyMkGxicuCnMyo",
  "key3": "oRTT7HPuTQEpWcqaNc9KkgWrWx4bvKqT9rzDSct9Gpgm9YujcQEheCqZuiEMr9YThuXkFuob5PoopgWm88pp6m3",
  "key4": "56subtfjUEDXXfQzFtq2tAeAAE4RJfoKeNjAAcYEpGREcGs2AUx99gSpWxFGuEJ3vUDmc6kzunyG4MycfTFqTsJT",
  "key5": "3fVGVh59hTNi5p2MywXHpq6chRBNGuQZXK4zRstvozomZK6H9JRcVPDagnMYnsA2pjrBgz6SCr6o23qiRgENN75U",
  "key6": "4gkJV1mXGkeV5ARMxiXdMxDRL9cP2ZzMSUY2SuEvMwkyrhHWhdPcGcAQFuKeNyd9UVfdn1RnW2ubRFYnj891GnK1",
  "key7": "ALaDwehHBCKx7NrNiN8R73AsqNWpMDFVbA2UVsY3ktxpYmrfK6SN7rcdY7b5aB75i36bUV5pVVTJJPH1n2RZYxN",
  "key8": "3wbf38LitoaSwLyzAzWouVPV8vBjeEX9eMQepT9rsDXob65ourARnTcpsHzBoWs5eFPJQ435jCGekhTm5ugANkf7",
  "key9": "2fSLgAiVSVmkhu9RsXp6HyfcUS8ydfmnfYN6sdDYFxExNs1ndGvg7cfFWvbCXtBB6JytmKZR84BLmjVcS7AUV23R",
  "key10": "xH4o9HeKBJ2yLNcGapiQ1cwHkdjJHPZUzcCj91VByFgyp21N8j9R9S4oaMgXYmzywB3sWHMsm3CepNU7yPxzWrN",
  "key11": "3AdGHxhWoRVVmCRsxF3XF7c2mS3zD6dquQPMi3LazaW5gAp3eotw1j9dbrgp3MeQw6QFX8Fzgrv2eVbw4YsGLwGr",
  "key12": "2sQFNKevSz5Auif6X1ArFovYo4BQki9BZMGEfKcNRxShvjBaq5ajYALsJgmtsdJjePdF5gPRXkvbPY8bbKHDUMPK",
  "key13": "3f215AM9C6d19vvGfEAp3Y6Vpo2uXtjrvMNqR1zoDnD2cwo1qJqcs4hihm58TLB8h1PUj7WfG1y1hn9NEp4gdXwi",
  "key14": "2qQHLMtGCFGEenQJuSYwYtr7P1bhE5Z6eZRM6SaidPutHkqRZhx7rLVHryoj481poPmKKX46xWqGNB2yQ41fpD5P",
  "key15": "3K9KG6b5t1v9DWnpikDYPQukNprFkLLi2Jz6zaf4mGeb5DkTwcnEajFCDzjR3Dbz7Ax5NXyj6nof3BKB8oAJc7UG",
  "key16": "2DywC3Qp8tWhZTsFSExRGKtBurptXJy28gqaZb7JPqcwu7kLyo77Zi9RgBKZx3BEHfp46MX5o9ddvYowHKkTwepf",
  "key17": "2e1W5vLLZgsfegoks9QkeYLBM6R9LtmYErsQTBs3aejTET5Ai1d8mu9oapq7fTT34cpZCwLsCkm38TfQhugHkndG",
  "key18": "4HEB8e1tNyeuh9JN4XmQFiHRqUTxHPuHCxnm39MUWcXgdXoVnkhVTTYQv6cM2pTMmRvkZoTNWc2NYZzFfdQRF7oN",
  "key19": "5CuQ5SNvEZHSU9LR2VQNNrhS61UBeMCPSaQzUb9iPn6gnsFHv1xpvdVLzf9MRRDtyDaAuarXnaJq5AA7DWEudxPB",
  "key20": "22qB7WkzTTqiHDpRptSXzeemAqieqhMxiS472of651At7UTxQcCHtnrWE6MC8TBTERA5qQpGeYQB9SSmFwxUgNKj",
  "key21": "27vvkfwE1STLHDrou6xRFY2XE35LYAqGnPtEK1PdNmNqEUopswTaXzsxxoFDJA4XFr9oSLTj3xunz2dEb3hqZwLS",
  "key22": "2CCP4SgN6T7Ztr9vUHvDfz6R1yWsCpmd9n4dCrpwSEacsqeKEpApnMt5dFv69MMUN4W1qj8a5h382rCcHVkBww5Z",
  "key23": "4JkP3SuQXft7dKjqk8Ei8SYSEUETjndNCBf6XF1JrvknhAQePQCMstk8WEn7gx6rxk78tGZkMkU4yXq9TuECYby6",
  "key24": "2yuPAtfbuKsfY6mU3XPsWpb2DmeM6BJNJJMzc94fSxeehzWM587KjunZ1YH827WLLN7ZhWyPvtHBtkgRJUW1yrHu",
  "key25": "2fWDEESxZ6AvFnaM6CRVhy1J2gDrrjbw25R8t7M7ivZGyChRXVLCbJ8xiEyaR6vvmSVWdLsgEsfCyWsL1MNAVNZs",
  "key26": "5WiX4rCmhjuDsdQd9PpnCe6unwJu6EvR2gJGX8z7M2JrxMYpXcD5jSGaTbLurkcYCs9L3d8Ax5Lak5jYWrPLFZ7y",
  "key27": "5MxhH74kbPRKL4Vn95tBGpdWJiu5KMVVq2tLeR4Dk9o8wP6GuvY1xNVWrDeCkdut32XdjWos2keo3MyENyTvMJVQ"
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
