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
    "23YkXTMtaVCHUquKT7Kg486jUvu8XWaWh5AAgmxbpa3gExpaCttUvJN9YxgzaHZxwxySima389D8nMemxVfYs2o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6WwXrUq2JsV92dVA9cXqS77bmLnbPV9vpTpX321SQ6vYy27gRepNnppeydcuvJLcAEQnjEx947bnzPmDGDPBbe",
  "key1": "5C2Cm1Sbfc6pV5USamZQw9hgHFwVAWkLRiMzdbo5cUrM6QqHWf9ULsrGP5GPqJggx9UuoK2YxeBeJVCHgU9s1rSh",
  "key2": "4iZKZwVQoBGiWDWJJRZJtfpDWWKKdpBHPGwVMmGfDWiQHa6YHKDMGoYe5UkZvcnHwDBEinjBmtf6KAk4PbkPMms3",
  "key3": "oKMGuXFMdjuvnUkyBEgzgkYgJNKqP2XcbGbAxqgfwPqZkygd3kWGiSRKQZDjorS7foMtVQcKmyQhit9B5itTdra",
  "key4": "5EHoz7FBA6YLuQ5qBtZZU7b1aEZQL9twToZ1sxDPHdp1VtH3sXvaqUZxtjXyB6AQW7m1ZA6fWxcZg8UCBPfsMdXr",
  "key5": "449jAfmEgq9W9nLYiSuDZqU7oZM5ehgPCB96eJW1WtdstnqnmMRpjJzieebD5nGoiCj7obenWJ6YapvRb4FmrS8n",
  "key6": "5ZUCMgGJCEPzHakA2LzDPWLNPGskgGVQK7dMTp71zPMviQgPcWzcSwLSfqKszP3vED212av83zEC17SQvXRamycE",
  "key7": "5QPjnUXfgmNUTGm2jrKGkxfnSksXaXJBUoaNF8qy4BpNwfBPfNMHbxaMiMQNbrF7MPhbtqZuW8cLrub8ZnXPRgjJ",
  "key8": "32LpeocHZHHCzozbNHb1KcgAiZB7ZCKWToPtCYpZZKfwuqxNkGzsAwarf5QH32sNXvfmVKu2oWchdih5DjDqfrTh",
  "key9": "FZyHXLzuv2UbbcjN6Xvr8KVLVf1CqCze5KMFcxq8bVbhdP4YUzGckPb3aWXL9kERpHV24mWnwXZiKbNi6asmehk",
  "key10": "5irGKhEcMNEYCzFMdm6nMX5u6FywN7hJf3cttrSs6ax4ff16itzxwbuU81PSLtnXCWmsaS4RQkcSKdNowNj315qp",
  "key11": "42eDvvV6gfzQdDy8gLGxEt8oFoKuEwbLyrbaT8qn1dQwd7KfRxt46EvZoGhvCq6EnCwrF1TeVCToxo15dGK2DhJN",
  "key12": "2PdB37G4LXLSmbtccpusQ8bb1pvh3U62KHDG8XKwjk6rxMUG1JTqsQLc5yDvLDUaULfjPmRdPjfuCJuJWZYTR4Rg",
  "key13": "5AHk7A9hvfy2gE7wQPutLytQnJZb7WvvmNBL6CWzRc4iJZ5aufVjaxKHkqx214Z5GqNf1VLT4nvpSyZFV3zk8iBK",
  "key14": "5XrhfPX7mSXfun1joCvrwfrZLjEf3k9bGmeniBu1ffBkX7L84bHeEVxc9H4jPH5KwwxBc9LNcNhfVz6G1S8omm4y",
  "key15": "823djwtJeLdrDUfBwA82uLaH9VzDAPixmWH87z6kerCNrKDTXNdokfJN6UYDuEDPve83hYcWMRd7kGFnNM5nVdx",
  "key16": "2P9FNpn9YP8mi6xs5sBGzbSP7qWAsSeepZ6hRXvGtDFhFYS2d96rHnYAHXvRHzemaUzMBdVs3Q9CAepueVF3fvfc",
  "key17": "4S1Srssi2sjoWoKfbcyFtkcrGyQKdGX4VGb6dDkHPs8RxFX7DBtZTyouRTmquMhQ3aFnaoPLX5bZrXyDWETSDSor",
  "key18": "fRivi1zsBTKDV7zA9vRRMZyuyiPn4P7y8N9CyCs9HWPfmSy4Lns9prdvtJp7oChL6nw1M1GU8tbGQDFGWxESJmq",
  "key19": "2tqhNnx5biL6v8anoAjqtq261BFXntuHLPX1nDBnMBcuVApkDHC3Sr4BXAxny2jdx9tb9s3vhooLyP7pUdo48CBm",
  "key20": "NutQbmSmHNo4oyLLXDQcmHNxhiA5MVoRfaUPtJznrDHiyiw812FKtDuzA3fNDKgHg3ETJQoM5beuFT7GGznFuG8",
  "key21": "XVP5xrUZALJJCjeBnjESYmKQ2TGwWiTLUK5vu76LvrxcdWpWbWzikykDsyedCYrq6eVovrqqpPnmwN56tSpi7jq",
  "key22": "32ZbbSbkvmoYm9mjyjo3Q87BoCY92YVeKdY76XGwVuaNVpjr73ukac3Qvo7A6SoeHG4hUhRYk1s6yyeoHZpE3FHg",
  "key23": "5h9t8DPibWAidXF9sWLG4mq9KPJAxAQTTki225pN2qh3s9ZfNcqFxsrAF1YwojBk5TJ5S4qyyo3rNsxHnaG7E1MK",
  "key24": "9FxhGBwpfCSqyteRb1Ep71WRFDoyzp49fZowaRuhbKe2Vohpw86AFmityLYTQ6QGoAZTUGuBXWyKdKMuffu2XPr",
  "key25": "3ZbjshRYzbDkvR4YqejKE3neQ88poMgus4wruQ3yAQ6ykaHsc8bwPqWDxJ8v2wYzZWTGmu9qq9amzrouTKE6scCS",
  "key26": "4nV82dVnprBngYMNke5vgTLWNKYuSZnqyjEKEXkJbv7UEvtrkg4rFUdr438hsWEVS42vsTj85gAdfPqe6A7nWjqM",
  "key27": "4nxZbSoWoGfoCYJwqmt7bZoKpMdV6RCWzFGvifUqeCBuTJWhEyPBcYM49p3GVH2PFmcKNMLW6Qdru639vKDY3tWF",
  "key28": "2ckDXq8E2ZiSVGxCnkZkT9KMHzg8rSALv4UJdCfjgW2HcJvSGBA5b58KkSSGiVf3SPYJn9ygar2UEvYZa34xfoBC",
  "key29": "XjRa7t5TZjoqRRVxw9viwCaxgUP46p16bBB84m8xvox7eV4FMJbA1erbJHZxF1FVEYkku2oJ3xuHT7S7tycHcJu",
  "key30": "2tJDbpmt6iqLQzyse1V3FdL3cobMSMUWvxqqiy3myju2fkrvRKcDCSe1YdKngMKCSRSjC8Gq7hTr6q4qvwgFMQsV",
  "key31": "8VsKHzqyfoDUgLNjp6usqVGEcV34HkRRAwb3MZi3Jixj6ZCr3VNvUvdFnPc5xUwqxMhxUs38fddLcNBiTNmc8Qf",
  "key32": "5eSJJkD7TAeD6cXe7kPtfSNbuVPuUT1ztQTdfjgBBBtjoBUPrEgKCdsojLkVaRRdp582bn1hcsHGnWwHsgaZeg8k",
  "key33": "4NXw9u6MpaZKo1m4KBe41cEkxEFjgAHSZtcA4RRmK2YppR5VYVKg3xpSs9z9SYHjoDgjhPsHFQGBL71GppoVH89s",
  "key34": "2xrMn4W2YJEtjwCuWWanf8AZGACEb7VktAiYEnd9PuRcb8WWTo9pvGD4KSvyDgaPVJHw6VMbPHM3CbaFt1zY4dNJ",
  "key35": "2doQ8KcGtFRPLKsSPwGdkLqup33wcw5swBCZz6H9KfujKiqUmAR7gQVJtLFr1J7E56NoTFd8wYkrD9K9cfiRmrig",
  "key36": "4B7249JvxpMUoBrw3Gyr45smrZzag1UW3ZYCQHz9pNbeiKH2sozyD1rK7nq7XrNFew3Sk9iwUdHuvPpt1bN8txhD",
  "key37": "3sB8UvTX55sDZejiahRPVga1cY3nGDLzR2AMrBQVGo2BiFxavTQ7FAjZZeuFyLjSKH4fybpcHduacekVoePr52PW",
  "key38": "4bhrCLjnvxmVfu2cnnXzi54FBAQsWCBFQDMkLm2gksdpHt6nPDAsCaCKk5bf6GJLUeXHazpokvK8aGn4VzQkungC",
  "key39": "3Z2rtH5y6Hr5BVmwwATy65VJ6icXTgankW77KF8i1riL8DyPNzFcihoyHdRCUZ3ojTeiQq8mvPfTXyQt6WgWJ2eN",
  "key40": "3C6SYmHo4YHZg2PyLUaD6rpsRVo9eJLWpAjAxGEqh8WchnfoxijsT4PMmkxDCaCCxHu7NcSNbNVvDi4LSDFkBJG9",
  "key41": "5rjyKR3kMgb5pJoD5fBmdMTriJEJozecnrv4VrsGF7KY2A6ni5uiQjPy1SyXP2NKjiSgFQt29PDQsZnCHEuFBE3g"
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
