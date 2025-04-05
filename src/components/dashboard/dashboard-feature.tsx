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
    "36hqa17e9DFPztwcY1ZmZoy7doxTWcnEZBDdv11p1WuMufq2euEfKTKUCCs5fjCBs8JZGPoSBVawGA2niGbGAAkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyA8znLYUmbQPYmBiHmXgDhAMdagVf1iqQw1BVCz3xBgYi3BFjSs6wbofGiKnJmb4dt3fQZenNSxzWv1P2Jxt5A",
  "key1": "5JZPK2BD1ryP9NBgQZuPPdxJJgPrdM2z6mWNgigJrMd3FMBj7jpKNUThBQ6XRquRBz1i4gdmdhCu3tG2qPCWwHn5",
  "key2": "3QCxE1U8D8twBuhrogpga9BFqRdpVLXhSmHQ4SsGQW3fwUe41MBibJtKQCQDpgrtwjzBEiPa6V5zev8TTFe3buVG",
  "key3": "5haWGCCtBxJZpJ3qEyLCKBFhJNLFRZcJuvjcVtgGiXR1JtXkSw32DCAk4DympDQhSutAws7XRS7rZsHa79RZVnm3",
  "key4": "4knkWcEBEaCt8pjdE8W372udhY9S531r7oxZoMSpNqVE85vG338yqquF9XHKwGrMysjPD8kXwZgYRhATHXBertEz",
  "key5": "3NNEm7WjccU7G3sU19muHS7fuk1LkJNTXEniyWwPekovsLVkav72dti8tQJuPTSkeuUjz354dhA1S3ZtLTyfEvdx",
  "key6": "2QbyUK7ZrG5Jj6LVYXwTARPVVmZANszSZGcrisW46MCUxKKwqKxQBRSvKhrJAPXPwG1m6JuvRqbNk5BRuY1Cni34",
  "key7": "3TPx7y1uf4McXMFBu5mdMVdfa8HkeEFdS4rYRfkF28PC6obsvHvFhmu1pZJpmnaBnMxbnHumymaFZkmRJsdKX9Am",
  "key8": "4kyS1i1By8m4vB7bgGFifbnMvDLtL3wEN1sQTP8AaBoXjZMSKBpdFTyEdNXiGf8SD2gN4otr5yJYgpURqRBsy6bN",
  "key9": "4xPcg14Uyc3NydakxXbL52RkoRE9M8Vzdnr4YnzTgRVNxoQ6P9pJVvWJ7xzW4pQKFE9gzHgitmFoqAXrRf6P3Cmv",
  "key10": "obZDB97Tb17NVdxBbdRSVJyttwM4uWxxynMsmPASQcr5HhtXgRNtV328nXBZPDhMXcWrjp9P6qKFSRdL5x95Gpi",
  "key11": "2NjuJA8mP3DffSeQXLqW5PqoViR8DnieW4uPT2jHvwSxo1tpswwLQM2r71hqyG4cv36rb8JV6CEpiX3ek1g7xaMB",
  "key12": "5wFYFJRW5EADpm6Z8jCRsnvDxh39eKPE94AVxP5xAMXzjsTALedMQD6tfQBF8mdpNAMfGXkgZtw5Mfgt3Rekgh1y",
  "key13": "3cSoiUz473BZKp1Kv31o4XjX5KdaUdJt88oYwWKgdfN2Ytfe7u2989AVBxEJHn6EJ27KEWUnamr8vWLnAPZUWgQ",
  "key14": "wdutuiVmpwZCbmaHme6CEpWooyxboq5MDJ3vpkQ76CH9RK3u6ve7bB1FchoCfETRLeY2E5ZwTo4rtzmhdyeC7qL",
  "key15": "4euef5PcLkgkUDUxixSaf7kbyywcmShAMSEdneUcMULZktVHE3MDxmU1aHGP1V8oassLEqoWcPbqVUmji2KvS7tp",
  "key16": "59DrxWmprYqdj6gGZQ81yFU5sSVWsqEgvVb1JkNsdE1dFEeZQvxEUigPVqpwrNhp3hstZyWHGjjW9rKnfnzjPUAU",
  "key17": "3XUNX8tKitpZ6P8uQJT2noL53RjsEWAKihVhce1Rfvd2mq9gwkrtsc9aabBmJTHTEsjTGjb2fM3Umh1w38PRuReF",
  "key18": "38efQEhKrSrBchbkn7xaGk1VDThqumisNisWYWHDoumuer4zubJ6FuxpNfWbofVhBPiWWDvb14GBVqd7LCWLbpUb",
  "key19": "9GMtJUt2mY7KHCt9zrPTAL3NwJwVndXczM9S4x49WcuMLg7ivpbZy4rbNKRsSfY33ryVYwF4fL3xwD6mbwQAj1T",
  "key20": "5zPeC1A6ofVCqWFDGNGo3kyKfUycJh1nPrLDMfcMBYV6jBrKEM8cz1NJBcbLE5urvhmSmG4AHskwQZ9C4C4e7jME",
  "key21": "3mkGcaUYE9vzTmTtzMmZcHcHd7bQjbh9dTSw6cAxScbsLB5EmMSzKUCht6Yrmrij41FfcYoZ6jeDCLezXHws4yiN",
  "key22": "4XvzzhuaGtFsTLKbkvUENTPe5W1KcL26pT7JcBi4bF52YpGf2aqbcYkuNj21tuLfhVPzfCXRtZWWf1bZKZe4U3s9",
  "key23": "65r4vjuJZZyP2ANWqnMzp9DX2nFhXbNp6jC4HGQDFrWHg7Vbn9sXiWRYy97wptG6atsrJndvDDoKkx39RGVaxVJe",
  "key24": "2aCv9imJzK33HiAJYyQqD6g8v1BoPaYKUaPC6Z5Dw6nXhFPq1pjEtNvENQ3NBKSFdacpnQvzy4i5Dt3fJHKVTMeQ",
  "key25": "41doYRn5JRBL5w7PKHVuFooSBW9NYXVmNMKZtY6gegJpEiakEwddgrgcomzGhHo3EYib8Um7Q3Wh48NLxtFpRVEB",
  "key26": "3QmSX6qRJ7s2pd8ktn8K5Yhf9g2vHvVdSLS23h5zQHJgFpphABdtMeeTzaU2n3NjGtiCtLAUj3wxUEryhcJWUScV",
  "key27": "3yjKx8iKKZXRCLmwUwS8z5UomF51Fnhbnsd2DfnnBrGC68YrGuxpQhyP2k1d92vVPux9n7guAUWE6GwRpGqTkPKP",
  "key28": "3gW32fKW7DJacKg8HnfmyywziXr9QioEmWSu6rqRQ5Vdundz5MHcCUhY6RscKVoLP1VRcZtsvKpzYk49tgUVw2kQ",
  "key29": "4MiBat8PdgTN7Uf4DgoNrULVGqpRABdY9eiBVd46nqSRa2XV3x6MjdNrAGGEkph78QHTwDAsojKL6YyJuF5VmrN1"
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
