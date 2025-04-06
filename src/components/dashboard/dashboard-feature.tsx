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
    "4CAEqkCsovpZuQJYUW7q84a6uZ4dn7niXeYbyWFDUYnMiYPjbZ5VcSUkQKva1mXcY75BTdfR7VWRVEoU9FsixzRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YvbzVDfspqMwZY1MyRq7BqpgKaLmVcFnh8nzuYqVuut7ZhZrzAgtBwFh2TiZgdAABYmM8BpXuZoCE8pocyqdkK",
  "key1": "5StQDBNWSmC8oCvFaEwiGZm2LDRHwp2VVejG65dJnmy5jQ4iyReQySLo1gmKXpG7btvEkBbGua76mKycxpF4nHMy",
  "key2": "5M7KXETtSfVvk3obbftjQhm6nBXzALoKmFtGhvFLupyypVayc3Qhd1poYHB1tqK8o6pfQ3XYiHq8pHeYLoC4aDsy",
  "key3": "486jBur6DzmHGGPH3cdDACKdPLhAJz1xRbtm7ipVhwYFkCrMYMFsCQJ34L29DXmEZ5FgkPpm95zuPzEb2M3gYbN3",
  "key4": "5YreRqFHKyujsACB8a7NMySF1npcP4fSm56LFFHgDTpKtEV3MHxG18YgnwWUSvYaySeRfp2gMRMKdnk5vj1gyL8y",
  "key5": "442mzqGd1Tr6Y1NhuqvuDsTYgRWX3N6sqSmmC9oaadLd3hVSGEH1zwX3u4gWncP4R4C5yhTJB43qr5BM5oMouhY4",
  "key6": "58EWWnRu5qhRZ4KF37qgnWeywodBdGUFsARHQe9JnFWF5N2ZMkEp32LY5Bgfn6n4ciAm1yRFL26kjccDpReLtnSn",
  "key7": "5XvBgYMYCaDbcYSyhqeaBLfBYauuRWTRZ6rwb7wayQ16P3idg1aapC2Esqvp1Wo4yZmgHeiVVHfnj7Z9UH9vbhX",
  "key8": "4NoCYp83mejoLyguyqUn3A9BNmeCfsGTk57qHU55BCGqjiddUrZePYubZMcZ5qdL6ppwyMLhTUuR88k3RpfpP7km",
  "key9": "4tLuar35VijwxFjkFjkkDvMbSZnySVELj9KR4w6e8yPVhjPRea9U4Tngk57tR1Cu3n4cbqKuyMjMpAdU8AiSRhSW",
  "key10": "3B6nWP6kSCZ1pmav6SGu9MQEGpHokQ9gRkD7bHMFMECDpTGqrSXqp46EdqvSy6hoK9Ht7caEsvoMNsYXNoA8osCy",
  "key11": "oGq8nHPi1df617XWAhADZq6tbrtF2dNJNAtp8rDLBudCNWnXDuE2smw9wLTmAKu2n4X86s12bp6YspfuHGMJKGP",
  "key12": "4GB5g21HRMgedgAUjekRFZC4Tu2jPrMMXduc93PXaRtQFKGft5WbKBF6K27yLSQd3hqHhb84Baj6hUxKPumnNL8E",
  "key13": "3fdz9YaK4pwmXSeeTJ68vFhjWY1AQhL2ogdCje2zBMLrt6tZKc1LrhcMJHYWc5PLYtzGKy46FmYGPJCsobSPZKUy",
  "key14": "LFVTx6hC3kQ1YZSU41bW1BkGJhWQqnAVkgorZionZfrPuHLYZnakcmUNcAtJTRoWLcV4qrUGa32CqrBg3ukjqWi",
  "key15": "3pch9jGdZsaCULWrkK9HTK3VzAPf7WwmfYKyK6TxTXGU3irsrJy9tifEGKSfCcutpog9Vj4P5x5NLnVNEhbH2vw3",
  "key16": "4VTXtMeB3eKiSVLybsbfLyDf6AvekYV8s8Zm35az1ohfu3kYp5MEsDZxQdpzv8RmTwh3mpWHXfV7GFb6E48fCWUV",
  "key17": "JVfKqS7xrDtZfWonGRynpiZKjAab7iUEQQXgXBdMa8PtkeyX6QKmy4K3Qo4fvhA94xD6tpRPXmGvCybkPLPY6MT",
  "key18": "5ofcbdchnpR3buPW31J63P2rmtTuQmsJ96aWwbeqfRFwvDYL6ivYeZs8BwmHDNE6nJHPkgpTQ6WLsS3zQpsWqPa1",
  "key19": "3RL5BCUgh8r5dzfcedb3v9LfER6Lpu5VZdbeaEU48kmeaZNFnktjyG6otGb4yiGr8eHxBuobBbKGC43UkzyLfDjA",
  "key20": "5PfAjpAt5L7ZYxqjEG1S7T9vm3RsBReAPAJiazKyjanAxjP5sanVAeCuzmkMAvRFj4GQpSq5PmD2Q596X393ztZt",
  "key21": "2HSRS6btjjwNxytKH7dZr6gTi1YSsav93UKRFXD6cTZcd9h3bTqtEqmnpo96nYtG6t66CZU1FHCjrrokzDcEetxd",
  "key22": "2scyjm5BzeTsfgy8VV3FwaWCVrjbFk3vTpvCvmprDiTAA9pMzxxX9kvyQ6ob5CkiQYSEuHuuSCHjWfvhG9mcj1wa",
  "key23": "5wUhpeyaLoTRccKh3oVhTBc1WxRedamLpGNhfByEYKnCWD5Nbx9EdgaSpTNDRM86B6kv2pXnKWPN27M4NuMupx8V",
  "key24": "9oWbwDfTQaAMTz2ZCQaFGHinWvYA3bSg1X1LEXBTAMxNxWt3gDdP4xiCgjncgkmW3BASnmkLCXr7o5t5VC6aoFu",
  "key25": "2NCUMKtbZjummyt2RWaVMDRt4qQCK2LWifq75A9vj1mzQ7qnbXXaqavLA6KZEifi73TmSi8LpRqQHLt5S1oHUsjH",
  "key26": "4dCrqive82KNuBKnwDQt1JJuHF81F2cfjLAJECMcs3fjtVd6rxy7rUKg7E5WmHrNsQRFsBS96fjkNvPQfiDMGPTy",
  "key27": "4TiTLoCtLDF37EQRprUsQfrpJiWeS8wh95j3F613CTEqbU5KrH5MAH29gAWZkK6aqdYFr3rJ6MR5c6f6bq2QNMis",
  "key28": "5DAaxhDCi7rtcprcgiXo2b1C7tkS7Av9zLMweoLnhQGob7jdRWWQU5fFynzWmYq1sjMRJAs9th7SARQPpM1e8CB8",
  "key29": "4yYojL97uRb3y727pQ4vMYjauycdwkrYsZVXGLuKc4YaxyVrbTCZ9g8HZaFgpn3wxSi4nyXwsG46zrha88SY8umU",
  "key30": "4Khirisg5Hn7dMUKFq53Y5vSYdnubk62MeYZyyq1JkDL1vHsaoa7DEA2jFBiyPYHThdirvVgSHBDVs9xuG5Y22bC",
  "key31": "4CrkgmHXcxGUSYbLa9KXrL6eUNz6nFj8YaZeSTSeQr8vRPqWSp3qfgFkeen7usLdKBhckKNf98QY8mLRNSBG6g7p",
  "key32": "4j3RSqUsZN8z891N3y6gi4wQFiSwJ9FmKCmRdcuCngNdjMufVxyA3xiagJw6gUDy5rPXEoyJ4RmmQC64E8oukVNk"
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
