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
    "4zuRiAx2pkMN1Tk1X7BwVHrwXJNdmWYqteqNmx5vEaRLZcnxSFUvtZP24NMo8V89WdbZB2kLg9B5aYEtMvpaDt1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iBYeGFNAZ9RRALNRcJkPbsZuov7jpWFVjBxE3FFa3dng9Hieje6bzqdMkUDE8pca9927pxmp5orzSxA6H4fxt1S",
  "key1": "31EmhRu7X4dFh5ZFCuNBCAbD3kjSBrS5BfCDYqox4vV5ATSAPn3fYF1xcc3DH6ojT3fGweExfpAWknzjtD9hx4xy",
  "key2": "58Gbv6MBwNG3ZQ7EjGjdtvSPchWEQQBBKersfbrTSoCQxvPBqaZe9H5oHRw6Mcicxo5r1TgZjrE4xQ6CokR3XTtu",
  "key3": "5hYmGgBHFW2dYnFWMjNv7abBfaBj5ezD1x4uGzgH18bPHHbeBbkV9JtUNnzQbQqB2771WiLgPxaptuxAHGoHhfPf",
  "key4": "2heUo429QAG1fXoZBBTshtPyAjxoQ3c3uPVAS2umErQFLPDuLAZgrmAqacz6uF9PVp3dx7dfKt3dwCh9UYUGeSNi",
  "key5": "5yk6uZDdoGT8vtHxKLMHfVX7Pgi9P9a4cLv1tF1NjCjADm6huvGfdGRiXyzbw5YSSBCsbeZ8W8og16QhLccaMvsp",
  "key6": "2M1f43avkFLfQk7GEgscNac4JuWUN8m31ZRn5fLTC9ctzHjjGdVQjzUkL99HMHVNRrd3AYVnpb355diMQmVgijzo",
  "key7": "5FBDXWPUWeD6KRjg7vwjffUztj1Up2cRVCW2ewj7EcJX3MK6g9AyTRKFaASK8w5xceSC76gJpP7JNAdqx7k4XrHA",
  "key8": "eZHbLtVF2uGgHvh4UBuWwU4waU8LJmj4ursN5ALpTekbRQTEMVwcxxY3UjcEfJH9TSKsNtmXNEZmHEFYNh4BkC7",
  "key9": "t1Za5T4BViuRhDx2BBJaxc5LdpY6pMEMNpTCxfiF6scYgEEswb7kknXbWLkHgCnMFTpxaWLcewSK2geX5U5BL3W",
  "key10": "5n3Lqqw5nr2pHv573uyNSoySigMJTgu8SWHqmyz3Pg7iQftUEi9KjHhwaycqbCZCzfUq766YfpAKBdG1TnBKz4Mq",
  "key11": "26E4nSM7V259FigppAps3XuyJzMTFi5SBRosFSkP1aC3q1AWwC45vLsn9WKrEEfJXrh96R2EcmTX9TbSAk84MqyE",
  "key12": "5u6JB63fbPhLXN8NtSQa8QSfCyqTHybTjDafKQbcmBDusVxhF1pnWAW6aCDBFXkWfVuHPX9aBUxNhZP5rJKZTMwZ",
  "key13": "5ZH3himdWaK23ymaEt3o3RuBYu1hoSwwUmxkJ2pdRC9soZWqBn6BFTA2bb4VqUFb7VfvB3VYrdqQ5jPeWCuK3qMZ",
  "key14": "3LdXX2xudvbmfStDKSWaAoD12p4Zhz82nwCAkUuVQHbPmcfbw8ddDWfKjnKiTYTQSPGru84xJVi73Pa88VhVEtec",
  "key15": "493VZqhnyCcP73mttmmuRbyW7VL727Eadot4WfaBStgHsWnzQXnfXbSreYuYQx5Xa97WWBiJRQpxkoq6PR74VRnR",
  "key16": "4KRDocjwu2GV5Cggb8uFkL6FbUo9yD4GR2R7jxsJnC17o4gvBhUFSmYN3cW2Ps9RFC3zqwF8JhCCnKkVd1Yn9Bt6",
  "key17": "kDcZuLUv7b3njmS2Yzr2hsAGDBWobi9vzdumFHkNfdFyyMboD3cDhRGcUDcSGjmb6qoHnV4987tN145Qqa2JC29",
  "key18": "5Hh8LXc2SxiYm5f4pMqWmn4tVKWFcuXEHTsyDZhAsdSJxGoXgbyCnnZ1ejuBu3k8jMdA1v6uaB6sX2w7MKqbi8a2",
  "key19": "4631TVuTCoxGgdJDQSG8oeugqbGt3a9pczBBqMmRDWbvjDMKCvkkDZGuhM9Sjicixu3HjDceaD8LywzWKPb28PYF",
  "key20": "5UBgGGHmDdLN3HTp4WPAt4fewiiD5apYDPXHeDdyAvKgGoSi7kJs7EEAD79H59MGJhVPooM2ooV8JcqffFNP7m3V",
  "key21": "2vVm5dnPLEx3Z7YJrhXvRKUt9GUHypJ5wHPmUKA33NWKgBcbV6dK1RNcGQfjm78RTv2HCgBGmPBTj95tXXNaWTFk",
  "key22": "4mptXVxy73dgLsG5wT6ez1NyoNvs37rx9Kx2amMcAYSNrGgUtcYe48aCVd3jywYLNNvB9EgkkY13QcAG5DVEzHHx",
  "key23": "3aoNbQNfPwZNTkoNjmDCPTncbAVUPNZqgeGV5knjjURUkWwS2oZBeFLqcuP56LAKqyJKTmd6ovDiJCYepJxeWJQt",
  "key24": "58f9NFFL6nycPFMCDGYiJoHaG5oQ2zgBPKmgKmP2dvQ1CAMYPKLZGUUGNMHPSZYHCuRj5RE8WtGHjt7JLeXTDrKy",
  "key25": "53owQLTWQUBpwDFGTb41BTAELioo1xSVmcFx8tf9R5zXiE2ZRtPyiAJ3LjBDi2nEkhS2b9KULkXTCu4SuqhRwUfL",
  "key26": "4eWpGGxAFPp7dBAmqkKPMJhEbKZDbatGceqvnL2A3c82hFe41GvGU63WeZPjxMKSK2bttmFTUQUkDJE5G8TpxCf1",
  "key27": "33H5t8wophAVhbieGXDVL5eebo7dn3wn6eeEVPjAy4x6wnhDh9Rg8WxhqZxDrFePDyF2ztYvAbijJL8AqoZfgQcW",
  "key28": "3eRkCBkdb4TCHgtxbsnCQL81aF6tkgpVEq7rSu2Nt1u4YDkNEs3BbGE7J8YJN1VFKH48xNqyiYJaEeUys3PsqNnU",
  "key29": "31Tw76YQ7X1uKmcAtw9VEcHcXhTzVUyZSL5hTGkrRUTC6JgiGr1gGLw777mKYpTmxaSinJiTck5XPgq6QfxzTi79",
  "key30": "dpEYEM4enztRCzZeryaDMr67mh7NzRziAT5tZkntoZCiAMWGrdLLyaqDRsPWVKKx4SdCvMaCnTbRGzqowReW4ec",
  "key31": "2zJwUX78RQ6ed5wCZwFB4yr2omnSi5cVLCit9e5WUpDxqybhE3tbe6BLN1KmUMvjeiPxgbXnMWhvp1cMLqeJT8R5",
  "key32": "7jifFQJ5tfdjcgFkeKWzdNhSkE3QRNF9rTNMhFQZR3TdgHxziB5sB1xaw2irPXb2jhKp4WYo64XuCgGgjTaY3uC",
  "key33": "3MW1iG5Txvx1SUzkhp3hKagU5GtFTY6oyAj3Cx2gXtw7riFSG9dLWFMsY1CrgXJaGAaakpP68Y3WQkRXrFVLHWij"
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
