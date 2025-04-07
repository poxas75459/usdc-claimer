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
    "2Sx6nYg75emv13MF1X3NbYTgtQ35SEsBxmAXYAyQtV45tiEkF5RNBofevvunUYhkd1wa6d7JjYZam7bS7FKRMZA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zrYccBJEA5ue13xdMEucMriASupEi18rnJfVXU2g4YLcyxhEYmEs9HJUoL3aasemaTkZUfD6qM2avup4FU9y5o",
  "key1": "fEEm8L7Hv5Vj9BKj5RdyiL34GeQY8PuF3pEgfQmEr3AMQQ5aaCL6BFFFwFfTKsASsTytJwxDAmBVigzepUDYHTV",
  "key2": "WLFrXBmZ5XNWNmUgLrQaRbxp7ejJcnkW4jes5GF9c3WujPwnyKBHh4YQWTcvh7czLPLNZHPBSp9vxZmJL4A5Ag5",
  "key3": "4J2M2rro6WiKbzXGmb35ZVNvLWaRmNWsUkuF9ExXatZiru3xdAHwUjPk3EL1mtwcXSoEN2uqYw4K8vHZgwMCHdtL",
  "key4": "4gjqFbnh1K5zUJJ9PE8r5o2eQXEsUtS1YLuwnEFmWq1Lgo4tuNbBSF8afyJP83Vo76B4C3UMedZWWRJqgqu7bWYp",
  "key5": "2u1rqUgRQiLW4W1kBuGqVT4G8voYEyMrLY14Vx8rCtVuN3geDyBySwysYBUYZdsA1yLSZ8kcmMzCc8DJdfCGJSm5",
  "key6": "2eEMvQDZ4SXV6mhY6WaAwQj2huE6QUowGfLVd8Ka3Cwo7bQPXtnStkRrowoaW7nHUCjKha3sZjABio4pqr8mKFsx",
  "key7": "3NKQV3RRkbXSdh8n4bpwrJAobuPJj7JaQgvpWNFz2Bf3uk96G13rycWp6guRVZTx6MUfjX5bcgmSgSF6tGkQeGMX",
  "key8": "4awVZjbA4X3smsgPhr36zg8G6xPbpga4USsNg7PqGJKiyJiA7jJgzpaH6UvbNNa9yZjvqHWoF2rQtVTPmR4KBWNP",
  "key9": "4y2ZhMaMDTnZwSEmp4qMNLSbTarKUJx9HGSmX6k66bhKc3zHjZVEs9HQ1PJpq2TATt3MPNZpvVDu4hFY9a8Bmd2a",
  "key10": "3TWxBPgrgbSYS2YdVcCZVHFVWFsqFRgyxQxT7bUSizsWEtDZCyorgtR46yLbS75YveGrBrH5HostB3rRrgzDnoYv",
  "key11": "4S2y4tiJLySsS5gpticytrRMAXDT1xsBBiQ9WqcoX67N4HH8dZ1u8vXkxb494pHaw8Bdj9AFmjPBowxLT2WpVGUU",
  "key12": "2bdUq39p6RSBNY9V6kip3zsGxr8F3LxLHcEU7DSEis4hruMhjh7HdVxcyMWPsy9hLD1da7rpqa9D5yLsqfFXWie2",
  "key13": "37k748Fh1GaB7heu7Pwob9n1qVcfeMoie6RJUD45B6NiNLGitSet4bUvk4vmEurR49WtW6ubhBkWDid8mHed8pqu",
  "key14": "3VsvVLDrPqYJH3DhSFKwQ75o6gv6J8V7sgQ4FcpSAS6DqhimGg3Th4V3nMUSkNNPu5odP9Suce6rvvjAJ3XvuAdt",
  "key15": "5N3m8e5cPqX8ceNMK6x3BXgDeoeb2NbfRJHesF6qdpCtuG6HadEg82WUjz5R9x9XWFy4M6vALQEP9MnRRJ3V6NzA",
  "key16": "4JQfZyeGDE5po4ZkiqqmSKJU8EE3q9rtmDgKZNDh8hhpCyWvg5D4NqDcMAZ9UYPwLhLF3FurSHaNadV7RC2uR97N",
  "key17": "43sVvM81h3vsjYtMhXbCuwXn39dWqCcEseVi9E9njtraPS7ygpWLnn7dQdR4uyogddmCQvut3zwYo9fKf1Wa7bEF",
  "key18": "64vF6PVXC9vUhAWYPq9bbLPbeLkxWdcc1BLcex99TT4aRaFjExpJU9YpKMJecRcoAo5q7ds97ZhiNh4xzpjgjPAw",
  "key19": "5ds5Hyo1jBTCReGGhrHwXdphcjwnHVMS6uTNw2NnCoBgDqZ6Yef7zaE4b7z3VSehHjWoTtxcVNqTddrYGLP3VLei",
  "key20": "5y8CXCzWF5vr9GHXypTk95NjtuTzAeTFtKypYBrMGMEoK3mVXNN4UadUeC38Z7FiHCKyjCLYgnJqVZ14Y1sxnqNT",
  "key21": "2FDpxujdroAoVPYhwZPstWBiL9HbXB8CmEmCSoNGjabT9nuWVnwPCLc61M9UgcBWSXQHExbjkqopSHBvUfNoSxP2",
  "key22": "45NBnGNyRV1e7AgkcT8ahsrDn3ozkUUWGeZexVRnuewcKybSNtgbWahpwUrC5wNB24housjG5yjYyvwByrfFQBw",
  "key23": "44kS9b7XUfK9gsodjGDK2ffuQ3sV8BRRZqyGakYnfXJYQ6VPE6qkvCiai99TT4XZVqBq3uZaKXnVHa26hfUJxU21",
  "key24": "4CVVD78aC2uvCcoP7pjDV2Eyi2cQAbeoz1gQQUxjdDF3rg3TasE7hnX1WHgLD7f6YpsGfCpLoVPJC9KqNQRb43cU",
  "key25": "59nHNiiMESbsmi7cyo2zypNRgUhda7dDM24jcwnfmjFkhYmyYjaC3biLVbCtUqCR8Exh5bbDybLa1EbuNj9e6EPB",
  "key26": "5Wx13nDmwYyWY4EoL45a9XUxc8dBoEEGiWjhkKhoQgHSGJxZ49F3TGboXiETGmeZwxc7HFzstWPMtDbaLX6wLLdw",
  "key27": "56mtHpnwgY1B1sd6hS1pbtmKw2fYbky8isabVUNhDHn5EBSz8kfFKn4wY4jaiGGsYdM16TJDFjRpcqjQfAwij9Bh",
  "key28": "2Vkskv4zN5xDx4uem9uTWTeLaTFx4SCdb9GPRXmyphmvSS9xY84huFnXmohf2UDERVRYprSeZYBro4Gqk6rPVz4c",
  "key29": "26aLWPwoeA7Cjh5B7p6CC6vyskjKtsAGFDMkRuNhADenWqTJ4Jsx8gGs1onjdhqECYQVm11yz5SjjMLAoNQF6HaW",
  "key30": "2zpPrfrcrPWqCsFYbKWieF2B6hnWn13eVQ56Xbegj6sgh4mZTznPChC2L6hatUvLxv4Gsr2EWrn2ZgBbXn6QJe2V",
  "key31": "4DN7erbuQrgqDgbtBKMDTYJsPHX1VE67wAkXMvYrQMAHskHyZKu9xe41akZL75dEuK1v59mXuoTu5CgczbWHL64z",
  "key32": "3MoUeWAWGAZb2vJB1tsnBpoPrXkMvSj6zzyWac64ig3xyMY57gWg4yyiGPWy6jsRguvaNjyzMJZM61ESp2p9j69w",
  "key33": "372WyRfQcqEnLGq6Z8qrMcBYZzAjcQrmM1Eb4U9QnJusPawJe6QubDFDD1vu1ZYAG7ffhCjpkgAK25fhGtuAjSPo",
  "key34": "L7vs8UQoTygzuQumEERym6YrqkGNZ1Uc2AaMmMuSynbN15DgtwxaEjPvyB9cVUaE25RjV9xiCg4vi9Mcgne3MPF",
  "key35": "4BzRfN84dnnbvgfcDjHpc97251qgtRZpGHL3Mn2W3SytVKH1xVuABu5LwwiddmgwRUDC1uJwaNTz6aRDVbeqBknf",
  "key36": "3CH3UwHkHKtEE6FWMV9jo3k2AdfGKb9VHn752tMYf5hYJZpFZedNn4ArmcQ4xGsQ8248DRmRi1reDu7GV2YRSsrr",
  "key37": "Nvr1iQGdAc2hBC3LyxUrA4AbC7QhV5ntuVdeL8My1SbwM6WWgHEG7iKYh2V1x5pvqXWhWSXszD7PeRFnrw7YLJ3",
  "key38": "5Wf1nNnuuxFFM4JH3bF4D2NQbzAaBQUdEJex1Hazs1BoQVbwaBLnpprqgjpC7pFuwx2i4xCV4Jjc4tsLHajSPgir",
  "key39": "Htiyo1ix3qnTW9PTyKcqZaapnngLTQ5X3vssbwYVTt5AJgxCHsCs9FEfnhywWfe792cAiDsJQ9aLeUAn6HUrzbm",
  "key40": "61de8PP6kbfNnDcmGaPCriWjiEh3KYKF97nPci9rUxUPvjDVi1nexkvnhKE2gLo7nFD9RZYepdzEh6nvkZSZ7Gfq"
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
