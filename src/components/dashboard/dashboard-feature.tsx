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
    "pAWtmkc22KHq3Yu7c16KxBCxQdHb22hui68bnQHbfooxP6A8zSGHRz2ttHLb7zhYDpLPe7PA8coi93ziGYCPi4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JcuKfWuvQBDekB8RjkM3jsYXZcq4WHPtapZf47SvA6nxXmEBdPnoZTSfnRbfn6Sc3vFjexgZMUqYVqMuo3xhn4U",
  "key1": "2FqZb8upDpEYNEZK6Y7PphxyoUYBPXcRfuJsENsRUTz3JghwUaakRYYLJTXMhahUDikuoMRsofXdoxsFoo2enucY",
  "key2": "343kfvkHbdUYqRcNStg949DMBfLubq28gMRMEG8W9PhJSaWYBR3GkkA5qqGGJL9YiEQiKbV8q25C8S9E6iYEK8em",
  "key3": "2AYSaJMPnpWbaeNwGB5gobyzgzyL2FhwmTZ2UL6itzYFreYbSsrJR4htY29BKFXENcPfr6RPpcarjAKjR2dtMYfn",
  "key4": "f3JMswSr1owFsfw95UdqxD9E9vP7xwQKP7YDhx2XnCaw65XJrV1z2vaAkxQTkQ63BMvExCjTMDh9qFTUfUE4Nnd",
  "key5": "ucCJjuyvC3M7a27dhjWSXR6qBJXRjpU891AzMpcjGCUsrGgcSbRmByByi5nVP2GVhqDyJLX5irPxiAc628me5wk",
  "key6": "5YAkYqN9SqaMzmgDmBFBvz362gXY87nRYw6DP1FQ4C6u5iexZqLpGWBQdZyY4H5yWgbwmoMyFtgFc7N3EsPDJUZG",
  "key7": "434FvaYELLNFXZnfCZyDxdF2YJTHBEh7QWXVKg7GHT743NzYvNVsTuGwzsri4MUtCXdgjWgfH14RLFj94qRf6wfg",
  "key8": "55rkRxYF9GEn4NdrLJgkVAyLAfX7suDvHBQyqAQeG8pDpkEhJpDyQJLzAYPYmTxEsZejEjcGVcTxhkMsKFbCzPgF",
  "key9": "37C6c4yLWAoxadRdvULDcPRk4BapXHCUfcwdEPDzwDQNxb5ut5oqSkKn2rvLAJuK3jQvYoJUFu47hqRQfJT5cb9x",
  "key10": "5GXGbuDN3iJKiMoJdYJ8yPSi6n3ugUjXfN5ophaeA2tnaRMhBUY8PcbTfs4sTxcEauzzPFjabCsjAGeX8Gk5hPJU",
  "key11": "5z3wg8k5xSCz5HRemNZDMHgsuGiSsX3eAiCan31mNfZ25iJ5RARfdvF7hhcTAunGxGZzgzqjBkQsWGqHioe9ntRD",
  "key12": "3s4T3mLEzpFsJov41NjK9yYowTykcrdhXxeVArJAeFj1nh5TxqrAWs3PVFcfYkSdX2SQk2qLfAVUVxPdpkZTHGZN",
  "key13": "vBN6jF435nRLJ1PZAt6BTGGQvQ2n1P76zd9NBaWprBaMPc2bXT57RfdwYRxsRcgBVyzTRMAqAhdYK3NpVqND7JG",
  "key14": "3exWztw7oqhGYhiit4ZUR5wDXd98SfEJN1SCqXUxy37pdeDLmf2o1xLq2F78SYKBMayPW6wZjAfCLZeFFQGymo41",
  "key15": "GApikARbEGHm4WmLz6mRqsARK4Z9q6NTPDgu72pVnLcjPU56cV25EhGuBg9kLkcsJ3nkyP1dpjcV6iiN4V9QVPq",
  "key16": "2oZnc3eh5WbKbCbmnzCwZMvtJG8MigWLPb6YwNTt3tAAvnLX6UTvf1dhmPcLWfwv5cVFJi2t6M9ugXckX5Y38uxg",
  "key17": "ftJTea4qtectaHFRwHJ1x68771jnaDkjDCht57tR7bDR9iTYvtW4hVWDVvmuZUjuFpqYAUKpNftUueDSE8kZTYj",
  "key18": "dTgL7zs2djx4VkGfpkC8fGMHGSJoR9osPzKrqetQBoZXS6nobbSkQpwDARnM9MUtnT7uCN2ZtMHtPdS7dkQcZ7M",
  "key19": "3NeDNUzSau1U1dQqoQZH2UuPZR2sbwysNpCPFytTU2gSNFrtUbSm3wRkt7aHfTTPEcKAKH6swhez2AEwc3Rqv62Y",
  "key20": "3Xdr3X3u1kDjopPwe151YtYFfUkHhGCQFkp9bX7hbf71xTa65Gt3QPKsyLUeBApBYi1oVQSYnCNQH17Ywkf8nCHh",
  "key21": "4yxifgYYFSnH7Z88kg2nLN9CL5bTdyck3Qp1MDWX8gSPWkAxiubqRRsCRuGk9L754iy7BkLxcdsJ2RG5NwY8gDCg",
  "key22": "2iyc4Ps3pXo8bp4N3fMNM9jPgdcEt6jjZ4a3xNMoD6GKujHeynhzZvYfUYGfv46uJZbrdcRNchehh9F9VNj8amqe",
  "key23": "3KCKWDbq2Be2gYP5Qf7rgbjCkMfzLRhtYidHq4PNcPpCpjW665YgEc1DfHzZ2ZTpAkU5n4sAifqDzHA8LH9Bmjh8",
  "key24": "25aBTsFRe7svSvzRzFyCThw9wNNXQPCcjd7eXtbGUz2Z8J1yZmuiHMuutBk8q66WqJbTpoBv43TG6jok5y8Raa5E",
  "key25": "3fuhR3PJL6o3NocA66K7YxTAYEj9mV73NtdQKyannfqiP1CrAfhPG1R7wbY5egxkwb7JPL831URjXCCpwJ37YX2L",
  "key26": "5bV7HKUZTdP9T8mFMxBQypekThRPpwNHZAB5SsARaYNyy3MrAZYzmgKkZknffGQfjiXZBxBetwqyLqksaGPv5Ddo",
  "key27": "CzCY8B789vsWYxETJ7W21SwaF5K1vuVn87BA4QB8B94DdL8wUkEx28aKaggczrE6GvWqt9iRKdM8VP6kePLV9cD",
  "key28": "3GEsLajax1oSEqyTmxJKB4zSwQzJF62tqJFFJSs6n9PywFWQD7di4eKiVknksYvS46TaFZCrgctbJVCRsZixzwAo",
  "key29": "61D9hjN7sD6WthgnFWQRKCsh7FCh9xq8wb9qQ8LboZD4xSMtvDNWXSoYMVxG43tvJ2kKFB8sgRoCMrjDDhpxppuf",
  "key30": "41KCVWzNjX6AxCYqZYpGeCembYGgi9e4u55Hw1jSAq3zshuvqULVxqGdgf75MSVEhABJknwYvTWfrUQSuaGFWawx",
  "key31": "4385DTXWhNG62XVoDYV4e3aLjgqZTSKVnsomu9jxJBicddmG4rbFw78zLeu5uYTaCPjRVauyHubiaBwBFYqpxpwp",
  "key32": "BwQ14XAfm8RafFay8NV1VHzezPM1th2vJq5ZpjumgLEsaYHEggSNTKJBk3UcAwzA72Dtxdaf6aTYbcapWqfWMi3",
  "key33": "67BewXNSVvP4XERvsnu8Z9cF15itxUp9MZsmmR7LvmxUVB5CtV7pRjZ4XnT9tG2bNuRnQPx1vNzCd3xsS2u1zM1z",
  "key34": "2BpCd6PFtKk7i4DLh7tSijDTtfNb6ukm6qKVaRASGjn6nzPFmEZdfFMkh1Dj72jDD7ZF4UEfRUf65zYm2Wce34w4",
  "key35": "5gqL8t1nZZwvEBvDbLLEEjdnzw3tJg7zMtoDeLh5yPbfBYKJHem2C8fmRWHgKnL48sCpoFsZ3cfsSmc7dXyMdSRE",
  "key36": "hveiCZ6QgbZoNUD9Bvb372PhXX1fUgqeD633X3HcbXeZQGt5gEjvYQgSpgGgS6JiBs2WxAK4PWmB7VmoY7mRqEv",
  "key37": "2M38SXPMvH8qXcB6y7vbkyHGY7ENatgnrbFkEMouvZ4pDsx7Wa1bcL1xhumCJmkxh4vsjMJ5SsVFfT7BuFoq5WC8",
  "key38": "TZTSBx17kpmo71WzVDwmJWo7c6VAfcGWWvy5WwBHTvhH81aSGXeh8CcwM638JPuqazXy3MW6tmJWU1TETP56zsw",
  "key39": "2CX1bF8SFUJkQ7EVVmbxPFB492zfxRtHPPwZVUymnPGXCfyzbLLgVzRzf7mitX8VTED1D4NiLUgrWjb8ft1toDr5",
  "key40": "3saiMj4gaQNXkh2cM6sP1URZLqc6rY5yNnSbyegDY9ve1TW4yZt8bFHRdd43i9GfJ5EeWryCbrs1E6WcVgacWrK7"
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
