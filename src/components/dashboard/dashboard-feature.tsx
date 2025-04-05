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
    "65vY3WwDyhGfsYvtpoHMRvVvqVN4zwr1CbGyhV8ZrbM6wYe9kvWup9Az919s2y3YywwER9Mm7SLFJsYyHLkW3DQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wiGcQAKxFXayX53p8MxpS9uLtSqLsh3ovSKfj4ivemVFUAt4Y44wRKULPju1txWMvbuDq7tGFdiUnCnvEPzvuL",
  "key1": "5Q4HizDKBeCUW1FkzkSKzsrA64zQvzNYZnuM2ufPFVYrv9DEztjsSdMzbGMWfw1vb6GQhTTYvTf8bdgZcftWVfQo",
  "key2": "4B6gvf9Y3QZsPRFVYzfdaarZyxLEm9K7Xpj1gTuuALwq93BNmnaYz1AaMiY7SD4dReDQFbVqobLHBjpp45xGMpoG",
  "key3": "fHAQztLj3JFZFCkPW4jhnSChDR6jTjZdi5nwLiLAKoSPgM7busoFZszi4mtkyBc4nJouEMY3XuyjCUJGNCNJEMf",
  "key4": "2sWS8e7PN1mBXJi6tT6s7RJZaKhecoMZPEybeBNxYqz5u66n8PUY6r9t3926HQfVUFkNZopSyYJ1haUVm4W4VQzL",
  "key5": "3XTpZtqQKX29ZZZRrxKiVRhDRAcz2uQMUGMJsLNbXx92c8Jv6JM4vxC11ZzTBxyPYrQ59Qzw2BqNAdZjcqrrDVcq",
  "key6": "2PHZu2FNHw8iPzD4oSY8bKfNo6RECmBRkEYqY7exHuj3iwHHi7H94vqEQsD3JASPQfJ6Nh9LVnrHprscquUGcmSK",
  "key7": "2hhkoN4NEgbsWqFU8qhiR3kzM7UNwf7TZrbCzMcvCc3LC2s33uHokvkuLm4MLmL6zXUrSV8H7ktubwjFdyBeZZ3W",
  "key8": "3NgeLbXY4TRXgxc35JRw8P6m6ecsaNmXPMVHYxxRGDeCFVMJnGk5UghLUqQ27KYRPhReu5QfXyu2bai3qhAb3A1L",
  "key9": "2ed5P5jFSRHmu6MnoRDQVF1yx6GPjLL52s36YbGDSBm3CDUw7VBbddbnXQ6eUR6xyxXgA3jnoLUXmQELyTY7VTLx",
  "key10": "5QY63nfC8MpzryK5vRPwb66sUfvUH3KdaCCaqTpEfposiDDQ6Xy1wDFP579Ao5kfDNPn99eu6J8MfaaaHEYVwFjF",
  "key11": "4hM5KPrcrFRQJQx8XFrT6FchAYsx7WFRjznjK8RdqG6u1mZWv8WVuPPVTwi7YVx1xMHj4Ke4Y57sjEf7ci91mkup",
  "key12": "4zFVjRT4QAHAirzVgacqaMhxeVSxRAG35d39mxWWrmMHs8cGyxU3pfMdzL6oCKTx4Nc8rHcW2vFp9RqmqgdiXME7",
  "key13": "4aanUT633NhCzFL2he3JKjgjZ5bFdNP5poG24oZgBiGgVkntrhpxEaBwYWCmS789tyKDqomqfXhVLMLSdUsniBco",
  "key14": "fmXjeBshdr6P8uLtm64RdfY4JFvZnVW2u6kvUP7UJyFDMSMWcveLmwgtNyugApCiTqZzDRKSzzkoEtswQs8PcvF",
  "key15": "3NLXE1D3VcXKA4T7ffPK6xaTE7prTMwFXqS9wmHbR5eKyVayZcAZywaEMNPB1VrtSV9Ehbuo64whfLobdZPKgMxV",
  "key16": "2DiiNUCMVak5xbcmzFYBbGPse77R1KzUnLiDLmcpsAwPQv972bRh1NbMaJVYLPXywXA73XYhKeNCbjVszWBaPMJg",
  "key17": "332gSJKuzRLRFkZhTFN3tcsoDa85ozBw2E1hEW4G2gUgMYJdKaN8TrjkswByzxdvkreQCUo7D13GmfYPTp382prK",
  "key18": "PhpeEJQDxkVGE7ayCLntJcnpJntnEkURAWp19JGUG5UcNT95cgkLEhgQJ1JC7KmEi1BPDDrDy3WN4ZSb9ontUma",
  "key19": "3mGeGbM9J3LeMGdfy6MCuE3Zze7xL5ZPt2azCihsNQk5EpSpoWZNbRvvuULjWNHGJGzcFh517YQHwzBmyt8h57iq",
  "key20": "5EAi44rNp3MgLLBEY5RooruvpRmyn9PwJdCQRN2ztJXLDZLrnFtw8i3W6nF99uvifUyoCqmUJvfh6gYUfdmBaSHC",
  "key21": "4nsAqPMGPhmUX85T7WM2AE6kNC21Pcnd3EcYNrLQHBn5nBQEPs4RYbeo5QEu2ZHQTzCEmBSfVC7eCUgdWV8qVWTx",
  "key22": "3kfRMTRqafnRgAtXgABZKPe9xQLnyJgtZi5GaHdWbgC6NNrN6GZYzbpjDPorhSMGKMcanDkB3VqCW4EviKnnmk8y",
  "key23": "FFrxwNggqQvPQpNiR5JAqiwD5u1a38fQnNeVvH1XyCj6LL2DfyYNZEnYkg2UMr9JnS9uZek6TRNdnPHEvAXwUBs",
  "key24": "2XmT57rK5YyDPXsDgtcSFcRVMagcQkpANAfW6YTtCUvUK3coou9zWyCA4RHJpf3SafimRzvYyS7Cwu5HrjvJbyz3",
  "key25": "L1dH7xY4RoLSec6LbrZnJUPcDdzacvpeAt9jFQ6KJ5Ky1dgooCjwYcAKKaHWv6HboeLDjasfKBsZaQNpkzbTddJ",
  "key26": "5oAq32Z9z7w6F9D8qK5DJxLuLi26f9rHG5H1ivMbjvCTK2JE8Hh8tNFAhM1tyfCR4H3e4rsYo8vHAeW5icwSHMVr",
  "key27": "59nhS6ASbvzr5xW1aJeLWZBwwBAvUrxGJze9hSzzKyYLzZK6cM6SHkrDrd5sUDUbQA4jN1FcruPjjQPdsRJzKZAa",
  "key28": "4cM6PzWEffUbn8Y6FebKqu1iauBRv9A2sDasjsJuSchbgFaboqEKPiePCRAo7y7RL5FNPUSUaFoMkA77Rd54ykJq",
  "key29": "2ervPsE78f1YYRYDrFcWuK2qfciTBkLKjryeertmWohegzJDDbdMQxZh8kmUczvxPnPZdUDG2RR7G6qJK6kwSv2c"
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
