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
    "2CzeT433E6WpSMZr1Z8qgKVL3PnAbyfw71rCdy3MyJ2JAfFbWtnxqLCDjtjq6V9mb2SoQCxdqDpb95otzmbhqrDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzvDrkJKaM7WUNogc9HvxFFL5nebsQkSjy32DQLbFPmUoCEXPumaJdzRD8ywFDpYSuy3ZuT7BCKZ2Dc54967Hgz",
  "key1": "2BGZwkQxmKpr8SmvJSzPCr6kSgKFyhvBLnBTkrDP1B4yKk1BfvW2kePKHLWEGkd5dFBsNSksVNXpqW6fDrZhc6Gh",
  "key2": "266HAsxyDZYQt3ggW7eeT6koSicJZ2KpAE9k2Gh4z6BCSWN5cyvQePJSAb2xNeqTzoENzjvurdRvTcj5fvCmEUfh",
  "key3": "3aLEZSFiw8hxoRD6ogyadFjKtciw3vfaZjXS7R6ogRdBuoFW1pdKrbnP8GXs6gsZX3mcYeJNvv4c5wSQGxy3zKZP",
  "key4": "2ekhxomj2XJF8fGrW9p2AUNzHbPsqALwmamiWJXGKsiNsvNszWjXMkSdAoaNRQE7fWdcrk6wWA4gUD6VxefbQbMw",
  "key5": "5rv5zWFbtSmVufodTYHHTjKxuFFFZXec2USPQ2YVchRoFdCxx2A7WtzCoTnR9RvGgMeenzervhPehvyytqru6zhs",
  "key6": "cgh1b7D3LiiSgWKV49NE1K2bJTPqduYuBWBbzmMqksQmzyGwPcSBBNkG2RDrVadHGDBqwBkR3sHorf9jzYKzW6y",
  "key7": "3GsZatC9j3AWV1daxoGbtPmcDbQytVTt8Ahp7AnvoGcT1pTxtTekYkAHJbxwKGdgcEpSqcZ9wpjfCUZXE8h1apag",
  "key8": "3464KdoW4ZaN2LLTtQrVoX4TJ8wLLN2xZsBMiLfKjxQaMfDJmfAZbuEYuVWtXTTs3pGfLRrwf73bPuZg9QpyvMC7",
  "key9": "5vVfqBXpC5sHE6zmyQC4YXi7A8zA54mpCUb6899FNGzRpmsCKnXwKNfr45fqR515gSd4Pa4YwgQ5DJn3CLRu4PMV",
  "key10": "27TynXPCk9urU1HcyBNYeCPpb6Sz1rM64HpRMT4dizsHAzX3riqUjQRARrAt7S8gRVRYtd2i7xktPGukCKwtYyP5",
  "key11": "VtqU8bogmhWD3LhB2HG8Vm8UW3P6L8fje3THpC24z6TKpKfGyqp3ddRkgPgu48cuBgGXEu9TwjipRs5ixuzGJKS",
  "key12": "3SBkBC4obmHkmznWmW6eLbWJKbpLFs733UW2HDnUBDKwAoWZNfUywotcMipWEDLhhcPRzc5ob2V7QFTe2oyLpAb2",
  "key13": "5sAQ3L33PuNENjHnnpRv7aM8hWSRMiZ8eUeeUSXqayo22UH7QSdoLNSsJ9kkkhVEM19sZ6Cw57AC5czSsXjcnChu",
  "key14": "4QNVSRwsahFSRRc9F3RTxB694BG4XwMmJ6ksehAsJ8qZehjzEARZPiGSvKqDQykYBqa3hbYA6h2oNjZrxDTYoHi9",
  "key15": "2CGg3ohDY6CynQC5N5jcFVxfk1WFnrNETposCEpPCzUeCnhddHGu1CE8sYManFbke5J4Ah1MtM3HpnzCSHjLcJck",
  "key16": "4XPbpM4uCqWaaKEVfDqhQKpV4Qpznsd5SvUjHiFoKMPiqXvnkaQb6KZeRV2MGbz2nFUux6LKvSowQ2HWJyw1gax2",
  "key17": "4hon2NRjFGMDzXwFoWH5XzDkWNX1DVaRUUrqR7zRpQdkzLn4id12rCcKwjyNkSHuysg51TzTj68TPmARrAgSSVbt",
  "key18": "tCpcxC47EqKJETX3V7cveDbQ7YgxMbVAdwT4o7hozCKeKatNWHghmEVfDqNwzaQc4zpATqo1Pxjd684nQpeenfa",
  "key19": "n7q8TCCHZuw1fzHg8u6RQSSVju5j3L9wN9zPGdoG48455XKSbnW1rtHCkVFgi57PwwVMJwYJiJAxq6dV9v8ajvE",
  "key20": "62mfT4zkcPUuHBpELcnU4FL3zY8AaJVaoH4shizH6Zty7m919rnmnU9BjQebWA5qXyRfCS2GcZYN6QZ4TWdSDop7",
  "key21": "3UrLW5gXHnpfrTCypVgpqXbZmi2X1jKjQFFeieuJev1tespykdhCVDMLf1ieSJA4Am5tXFveQdpMrbk5hCyPbJZ4",
  "key22": "2qw58LtRtju7o2C4bknsaTuN3ARTL2txZu7BQyVgPi6Vkn6htmesRS8j3z8m5koEXMuAmDDWJm4kgh6SUzvNxP7G",
  "key23": "xyx7GZoXPYAxL4n95c7dttS5qqr4GynFexhB9su7uuLTvaUjcWSZWhuhR6wCifYFMURxYHGuEToXNtZxyRuEJEF",
  "key24": "Ko1dAoimiXXZKUCPQdmsQf5xiP79bF1C7DRtkYcVScpsauDKaEpzwKWyhCnbk9DXDGNKtviqTpyGu8CebU15J5t",
  "key25": "5QeqA3S2nk2yGXmC1d9HVmjFnw7f1qomakRMi1H7ewbLGm28QaXgpRRhSZE4jfqmnDFgAAHU6h9cbLJUA38BMbmA",
  "key26": "2R6N1iy7uSCUwS93ycd635sCzVsKdbGoVsvpxReQRaeKKTo4CHCeRExYVxf3sA7sJ9mRkFZEg6ScXL6HmJ7DQVaz",
  "key27": "3W9eX1XPaySUaFJugfGbgRLK9YyKqGgRv3aZ1vt5oTyiVm4cCYkCKcZMmyfunkFgbBYLWn1CBv4wCqMJhkpzgfJK",
  "key28": "2cA2W1VCbM9gbUC1BGpGtUxCBNZyZs5wi3Z23vxkQMffzBjJ2o3poaBzTBiWpuLZWhxLAsTLnpSKDzj7tQ9bJWRy",
  "key29": "2cKQftLchtzfsV7g5GWu9RGgrHq79RpzUWhgaxVkEmP41YquDZxgmcB54EmdRyeZTqkzkqZTiEhz9xeAxd83USHj"
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
