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
    "G6GzCJ78t4jnZ6ZHH4yRBGpZUWLqjh1vYoDCjT11YLSfcCYM9hkRMC1ctDdEErxpQ4JSDpv1RwWiHxV9MdBfRnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kf3UHzJ9yiQfQv6enPyE6MCJPCXFAtBT5h8vGTbprUjqSZj5w9wbCHmMwnEdmumDtwh9fhkKeVZKDq45eieoaFb",
  "key1": "5id8Wobhw1j3UfZXFTPK2jqYQbcgm97o2BkpXyA6Lmm9Hy81jyF6JF4oeRqF9ByJz6qSxFftoGp8PuSH2pNx3Xpy",
  "key2": "2kJ2La7mXt4czjp7VRP98r3mQSmB3iHWTAdk1iGb6TrkUXAwvjCZAwioDzRrAQhxxTEW8g8Y4JYR1bCKzjxueCDR",
  "key3": "2Zt3DYo5ZRQXeeVVGTRwxw1VhJRSnMYVoZnpAjnU9Fd6KRMo3Q6bg251nUvULE1u82i5rZRqkAxsv5hB9mddSZkd",
  "key4": "3Qyvqav6jhJFbkAqEhwz1MJRviWjLTWr1FtzkiwRbUKJjWTu3Sbb8kJ3gy736Y89dX6fwsx51ruCnQgesZkbQygJ",
  "key5": "38Kjvgvwjy4VjwTCEB8aHYtaqytyjppRXRgzWKfpTiU1PARuCKbsVn1CDug78vtGpAPLmNro36ezR54FDjKGPy2P",
  "key6": "3nYKkhgFxYtTuh4eQ6RiJAhEoSav6oqvUFMseTx8Qz38xbcBj4yuxNuJNwxw4k2NLtG8R3v9HBd1Y5bTFUThkVCU",
  "key7": "4Rvq88SkCncMqNgRiSVUdXDUwDVvfgeJ47rCKtL9E9tx4PcvJf1KX36p6dAJvnWsubvog8WGhMEWQoCVe9TzoSXo",
  "key8": "5pubAFTj4b4w94y3dvsSGzQrWpLhZv57fCJEk8bUaMZ1LBumwUE9hFPpxpMzsCBYcMqgjBE6roGQbLMeoivvNH2X",
  "key9": "42LuWYJvgyLfCARrpMxgceZGrSP8wetQoc1cRz5H3uJMMivhUM2hBu8bMAG4545kbLQ6Mf96kWtQwTqduSS3Bot8",
  "key10": "5kpZYA53pmsgdMKAqE1pocik3u63hvZw7hzce6Jj3E7WQQHEE7kyQT312HXDwLSr9GjEQSkWn3q9WiYN46AzxyFv",
  "key11": "5w2urTJ5G8gqwzJ1pDk6Jr1qWsefRH9T1oP1QEHDQfyPbzT3FJZgbEBa2VzJFAto8LitekTjFSaNY3X4uRifBrap",
  "key12": "57WDC9kzQBDLSc61E8zfTfYAFgssGy7fEzZSYuvoHjZJyKVSHL3sQvbKwsxC66NNBmrYXZ4sWsbQ1wbE9qr35mRu",
  "key13": "3RTwdFMtvQjB5HVKCHTwnkSYhWSRbNotEy92AF43JEThmBBX6qDDTGfAR3ikYRydsaVbA6XzTtVJyinBV3SjGceQ",
  "key14": "4iLEXFS26Hb95uEPbJNqkWoqGpEmn8nmnF9Y6DKFY1FUt9VYm5F4k6viAN2LjbTtEVxYD4KZJmx1H6iCNiYL5MjN",
  "key15": "4jLg8NJb44Rqq8KaWYxtBm9kDiV1y36QNyUkRLyAAswNbxBsaMTSoQFk4XjzW1SYp3zjhQbWAxocrwKjmfD48Zbv",
  "key16": "2ZYa7u3YStPe4ASyzB4v9nwwFoGEN3TpEpevsKT3gJnMJuU4rjytYiVTb6dL2YB7V78cgmPEAUPa47VbyAcNWYJp",
  "key17": "g6ri7YFAwBiCQt3Pwk3WybCv3SjqLiN5jMTJS2wT46uW9zThhj6iuGzcp9R44dKVPrv4mbr9cSfXAcdAtCGVVGx",
  "key18": "439PfKoqkwEGgBuZbYRDv1CasC7rQ3CcvAN9qGRfR5aRrn5Xq42grAPDHBzpy7oZgxqP5Qs5JYgMBc6TKpsRXJh2",
  "key19": "4ZGYeWgCS27dSYShGEZE8qdtRdL8yrB5KupicCzWVuuyvdHMr2TsLzaRJoSDXLMSrqibqdjjbbodXX784EdPjEzk",
  "key20": "3cLVuXBbh6phm1VXzwUAX8zB6VUrx37x2Bc3AjtXDvo5YFU2p5z3Qe5xADS7ktdGQD5ECDGtfW3xBbpdWKzTxumS",
  "key21": "4hBKqQcnmK5QA3haQitnZvhr4mzVj3ex5uaqXRmZVR9uVCAXfPuoUnNLN87V1VW1DH1DSy7Ra61m4aN1rDm18HsF",
  "key22": "385hWgcyYGRTgdsNbZf1cdR4V3KJgbtGQjEvYraJZTsWNWmPnF7HmidFBQiCxmWgABVvVAYQEMowkGuuEVWsMJ8z",
  "key23": "5FwmGZyaqukMBv3xfhR3u36ejnFNahEScGpitVvhUgMw8b6VExeVm5DqMJaKdBBkUxgNS8rtJXuVRBPtKDpAMQuH",
  "key24": "2BnzCmzci1YezsH3HHxhdTNfs67sRrCT3Fjwqm5xjQZzjMk3PPiiHHScPvoRrxxuVaoZ2HG9egJDc3hNw2rNBDyd",
  "key25": "4SAGofKkDFVB4BeABZwuzDTiBHsn5EWKUMg3kdrke853o2n8G677eokq8diQ5PousEGxLk761n9S1fmedygfMZ5U",
  "key26": "3HpzUZsVz7unoETheju27gqDADLSJRWsKSXZP6tDCEyWhbb7PcqsoPvxZCT2SzbDZu9Y4Ntd8tghnNzbj3Xi9Rdb",
  "key27": "4P9SJd7BN75BhXh1bL2dJSf2PiqULB2XMrYCqLdgFA82Q7iyHXCevyDQa8drF492rKWeLfF2VdrAHmpDS7QEzvoo",
  "key28": "4HH6sTQjgdmgAzrLYmY4fRuHtk7ECybA6RbvSe6TuaK22L8x71QWJ9v4LGWbvzfEUi3rtYJZfDAYrqELV9XjpUSZ",
  "key29": "hwSPq8jhSLFStwaBJoCGmRUMuWjBWVvYwY3qvihKL61YckZL69RQaoXw7aKPtUwqZe4x3neRZXP6m9bT4Aymgm3",
  "key30": "5fkQZgSc4yFELbpKArg2JP2qQ9uSzWSj9RZVrUgPPh1G3uenunQECtSNR5asKNdUhXSrHpzUArqju3mYuq2izR2d",
  "key31": "4LLy4zRoDaBwSdyergtc45EChxatkfHsPzncuuvgdDSwJMf6kLuqShTxUtzw2uNtnz3YsGMtN4aurBzHFs89ijxj",
  "key32": "i339PiKfeckje9aTG4KVx31QhVfsaBtHEoQmXKqZCtgerNVve2BaT46Hwi9L17NJAEb2VWf5Bf5ErSQ4FFT9mvF",
  "key33": "4DrFthnKcXHfqowUE5YWUbyLa1Z1opZnSQRdnJknSdpQMXatz4NhcHti2nnVoKokMkzM12Ah553XSXFj9qifeEER",
  "key34": "56D5GHAYZ6UKNBbvgd8ynngctKyXB6jcer2HRQWkeeds5Vg6eF4CnTh1DU2fSGNP1u33bwvMFsX2KSxLYTGriBvi",
  "key35": "ZH3fAzzecqk8H4xH37YRr1SGy6RMD5gaNLre8CE5r7mqvGPHMRd2FoiquzUU5i6MC63oUJ3VUsERKWmVLrnfRLT",
  "key36": "2PZ2fKVXQuwhi1DsDPjuyjy3if8j3K7SzzFsz3ZQ1rF2Mi3bMHGivtAcTGX3Gu9nFsJy2vsecPZ2dup3biM21Jki",
  "key37": "UXDfxaoBD41KyEnBhoF79EjunFpKJczKuYxX2nSUc4UqvH5nxqspD3YzPgUhLpoiVbc8TT8Qkqmk6wGa1SHNgKr",
  "key38": "K4FBtdWEnSj9EPJSjzyixH7dyDZxsPkuCp7eCxekRviD6BB72qZAixuGnLAaB73oybk7j8AnoTgwUHf9cQgP33F",
  "key39": "GkNqi9gMjsFwbVJvuJBYtZGJkAVrLRHaKpeXuMWHarWqD1fxU34m9JTPQLUgb5yGyTbgcTs91iuPqxQ2TBZWQpN",
  "key40": "jS2oWGxe41EvPHFqSmqVFPa4SEXnEzT1rv94epqCuhgUqxcbQ9tr5TBfzSo5C7p8rmrdTo9UJTCD4DdeWKdbvpV"
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
