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
    "wrufgUt7mVcu6AaT3jM1wX1pkvHLg2rAgD8UZ3YoyeLDKC2GoM5GkFxe4Hp8Vkgrs8nj2ct95pAVEdurPjKotez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHxN2t7T83ukvfmYC6bVk6xnk1n9UKeCrBjGafmK2FnNoX5CP6bpMWwYdNScDDef7M4nUDyZjxqD3d3weqExny4",
  "key1": "3NMh58rQoWZ6GdNpdHX4SoxhGn1JZuosjqVwDu6XWSfAHLzkXNSXNQYdmudbYwJnxxKfeFNJqZv6eCgiw6ZAtEwL",
  "key2": "426bohonHXQA2NfmEx173X4UuWb7ercZ3gWT35depjb395kjj3qg9coZrixaP9JryegEqZzMnAWHh96gj3nPx22J",
  "key3": "2WS4NkULa8jPeQ7i57zRzdQjAQgLcGzpxEMN1wjMBJg4MPjmiWc5isRYquCUxpzmCmSiWN3JMsr6EkoAVkx1y6Ew",
  "key4": "kqkgipoGm5GYVD1n9XMFeLBqBRLHf62ea87bY49JEWVohDp52n2brABKvmxGkgc7VN3GUZuBD2rMWoGD1QSiMvy",
  "key5": "2K9s1JbF3UfhzF3KbEg2C8Wont5eP5NTzmNsU8XUiF1cd3RGnrXSB1Mba3i71SqaB6g8EcgmTvoM7rEWi7NRJFHg",
  "key6": "2vuJSbqcWEn4hnxm8mEzb5H2AZk5Q8n1e2qmvvzyFWDxzpFa41dZ2EhcoJ6fEktPDDCYv7T9kSym45JqTdCxj54Q",
  "key7": "375wogKZ8dzKW4f1mHhGp8aeCTMkXtRsgwTDdqQAW8vPkyQCs3zYTMQj3dYiAp7YfTu2iLwaTsJi65vRdG3eYBK6",
  "key8": "3TwHioHonoW5k3kLnYQwUZ7SxtufbV9aZDAAd7nCGUr7J2BAk1pSYXxdyDBHVTX4bQGMjULQG63fntGuVG9rzTbt",
  "key9": "3M1qPyRg1isNG43EXhgsjRTMqBA4ExrDdf414HXUVZzfF3KJFP45h7chzAYjpALE8xDeeLi3Ds2MtFz3xPL3X2xK",
  "key10": "44iqEMxxGhhULRtxQgAN6nBB1PAXwg6V7rXMLnBiX1NFJva95DqoSbFWi8NJcW6Psb5Wenzp1zDmMNGbCJN7mxWm",
  "key11": "2zUs4gYC8v22AZ5wmgA6PEEZptST9k1SwR9AGA4J6rZ6GPwxTaSqE6yk8xvHKAmg3dN1qpxaadjpbwnhaHKMAXbR",
  "key12": "3pENxDVAK3r4srEiCGiSW6i4fV5WoUuevzTXPUmUnPXt83ZmMLPGHDczjBwRkxSQFdFNDKpRjNk5QRtSXP6RCth1",
  "key13": "4nd9LJbCP4m2GjgLtR4n7gUtFzmN27c5TuFDWED63D1JCZGasPnTUNwQn6AYLTABq5mqsj32f9hp1kc1rSywTXtF",
  "key14": "391CJX1pcjAGWSXdFuyJsD7WxgkwtZ58JpkChGg6eFhYBAsXCT5BtZW1zK1LD8CuHFzZre7HPeLysdeNeDwREwgh",
  "key15": "3792W16kqDb3qZvegiX73WFfqvP35qXd21dvbwvvatR5EoAo5gtieJfkD9NcU3zJ3M2V5o7coRZ3UNGoijQW9xXp",
  "key16": "4vYDiGxpcqv5RfZaca9VW4MhnZoNpWVfRV3MGYR5hnQvPLMgYHmj3CyvBv5cUj7KsoC1GH3kXVsKF2ogh5g8Xcq8",
  "key17": "61DCjVZQqy9p4cfuWnGKht7k91icupARvHjmHje3adsiPSnUmbitK1bQr7jZ7GggeWpeQoM43X2tVrohKf9bxu9m",
  "key18": "4KmF5TiMwY1AcpbND4Tia2ysNCwvhZps65753ggeUVpmwu2eDNbrpGsjb9kdSrcqxeEatj8zBxUaNiv6Vp2Ch3oZ",
  "key19": "54Jf82LwdyGp9c1RnKNVXA29arcQeG73YWpXNpCTUn7MrnbTZR9y5TKkm1bCPFUELGunwFoVBzexEBtx7osHA8nx",
  "key20": "2n1UWRfwFFwxVzmN72oZw3Cs2n1kW6qPvaAG5ZPGEwrUyGJsoTbabF7GHwV9VJuAVCtyakTv5SSTAyjdJt7LWSbz",
  "key21": "3hJ6oeH1mh7wJiZozfhCYTeMf1BAuCFb9Exbdv8gaJGjJspK224S3rDHbdEYAyJDcP8Gp8cWoDeqBzQEzQQwXyki",
  "key22": "2MTHDpvT7YwdPdHNqYxMc1iiyNnWLB2EAdcvCF7F8CUcZuHBKUcThzf5GLQj7C1sBPNJAL3XZpUtVA9eWNQQn64H",
  "key23": "5ZjfbPamobjMH7DrDBdG4ucsAsatST6xonvcjfEtWuH4kh6NhzGNsXDchAXY4CmLMvijBYrBC1V2EEcHCxKwdJko",
  "key24": "45sWeJEhzjQjSAA3kyqWgBJgdD5e4VHzdgGVPq6SuyhPWnnrejN4EdjzLeopttw5sDvRqEFAqLZcVyeLn5JNDDfB",
  "key25": "32xfHxKSdVocZAjQDQ48Zyc9MZUTfZd9gJEKyUtsZZwzJXeaSJVmgfbAmDsKWVYKe4xFcZSgj5rAbaapHU2SwDP9",
  "key26": "mad1HsmHiCKYWdJYg9ekCZU2aVQkZ97pJCk1nQSKSgtVTU7ynFYNqjGTN7nEQsQyNFcn7Nb1kcXVWQRpRBmTH69",
  "key27": "3Mm9HvaSNWUNBfoBcrFbfR8up5nmYPZkhTdyQZ8SqNtvLmdbvwL2tMA82aSDFoVLB35s7abCwtLHae1NydJmgauV",
  "key28": "UMRPFWaR4GqQojzjf8365b6vwiYVhz4gNVHXFz9igNBwG5x664Ru9HLteYQs2BkKX3aeJH2CN7dFPUXYfXzKCom",
  "key29": "431FrxGsYAMHbTrvp3bJfFykf82YPYBSqUVn1V22dK7LGBKdF4kdiNb3kaxoPyvw17Ev31w2Nj9BjZoF35L7RPnC",
  "key30": "rBLB4bs3nw1AzsjMqq5ndzyAVqP62sYNSCRhZXFQdjLwdjf9Fwc5oqotyMfFRReEMszUr6oJGmeBBuZLTZM8F6r",
  "key31": "kzrkMUc6V2pW7gkjc6HkWvmPxbbFuzUR1TDyQmawvxebTofSsNfJbqNEABpNPtNVypPvrzTKnkApsg92zMfLZd6",
  "key32": "3hwPFaiTtDDcpoywmhQLibUvUbSNhitrJRe7kRFdtsuztKktHar54UQ537hzYbueEJaFM3e8fFY7dnSBnPCjydYB",
  "key33": "2yy293fwsgkz19PCFjzVLNQpt5cuMKM6s1RhdQtCnpY6p6Yz4kr68oGJ3PfSn1YoLXn9oA86BYXJFqZtqSntAJRu"
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
