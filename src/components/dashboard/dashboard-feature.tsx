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
    "26E3kDCVmxEKXyLQfxk88BpDFe9imzCedGd7xEsaCfaj6BzVds3yqTyfMoE1QJ2zgn1rUhQWP7rbqPqJjMVaW8rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLLsZNwPGewbJzhXZWCFnPHh8vX5D6MwopGjQ7cdEX719CEwMh1zvW7ELkbhuRmq2APvoNUx1ov1rAP9n9uQd59",
  "key1": "4fHuDFw1t72PJpxgokdHjaqdxBD9LRNQFD1ovHPE8XHiA3MUqhEg1vdHT6DtfFNvCLYRno5j4NJEcPUKbvXa5qTP",
  "key2": "iTJoFFYxCo3pfbGAT94Z7P8sNxKkiZAcviaR6FaZHo8pPDmdHSrWbQ9v83MocbJ4roSH4MD42syteNud7sGj37p",
  "key3": "2zEFdxGbY6vnsyYG8S24cKpeFaDAf7EWNjMeFKAragYBN44wfQZPSHg8oPqrBtiGcEC3hcKzMdkUK3T3XfjQEAnG",
  "key4": "48vPFLSSX5NBPFEM3dafBkquFFWM4Gi1VBHQheGUfxqg37msf26ZCoBhSKkYbHgW96Jt9wkJFMUfyHzDMVeduSYN",
  "key5": "moHGaD9KUWazWF8MJDMozHS9BLQrxpz3CRR9B3WCkRiCPKQxqcora4sXaGivo58Tthyc327f7iz7SJzAjHCp9uh",
  "key6": "2nkhdJFQUq1cTPYepcPr52ym6qvDV8d5eRCndbF673HYoMZmcYWVa8m8nTjwdmYc7z5m9wQgZaabdeFAakpdagQd",
  "key7": "8T1F9PZECzhDyDiNDWNQRnzQo8DVacU8aJQay2uc8bNFtsh1zA8TfQfN6ETME2ffsbM4AxjsLV98mpVq7qvS8Z1",
  "key8": "4HFBEcG2Zraomc7FVXfRDoLch6Tt2f6DDufokPeLKwQsHKSz9GY8GeCvTY6b7iUevEpBCaRk5EWK5RA6b9yjJmJT",
  "key9": "29mm17JGKhMUVAEL6y66cCxaM8a7FHesHoFZ3coYgCaCEAYoChE4e1kRhFr4JDuLVat6XCa2NvBS5LyKFUYhjffz",
  "key10": "kWf5rnGQiFadVhhbbCGADwKLaA9Rgcz3xfwVtLDqqaj9tmjPn1CzvsQKTq8e9Tsj8BwSRqeaYfnoWT63M7uraBg",
  "key11": "4RnxsBpmJTEkfbKXrnavR7FR1mCpzqpq8fhFaWKPXFBvRNyFCCWoUK2gNzhZP68JUWCr2gDTbqCq8HWJwZKkFkii",
  "key12": "2omZJuSAjVvSrDFZic5rKTwxmS7rpkhr1qNU8RsFYDgaQKPh8KZmPTPNq72LpwtrCoF9oQHrDvuyt9rjo8Vyr8zq",
  "key13": "5jFfNLG8odiMaA9GeZ2AE8Dx3FLxXwKfUPchPHtevbLsZ2skDVU33WeAgKBBoWLTfaZjm726vydKoAMS8HDasspJ",
  "key14": "5ZZmL4qM6Sw9adhvDuk3UEBiKLhD3ez3YUn7f9odJrpsJGBoRaE2GmdCqe9QNx5Td5Cop3WE7GXqbrpAx4kFeGLX",
  "key15": "2EuTCisiDmjZ2UfdqKx8DMNg6juWpiiNbHMFKfPdh221wDfEvHaJqRCRbWEgLPNGv3e6BHpZShWU6ZzNfqdhRv1A",
  "key16": "2zvpVK56yGcFsuZ4f894aqGv2GyxzvsyBdLtLW6DCP26iAEqiCwoQbBTUT8E5fttVsvHcYA5BXbTSz8TQU4bcXok",
  "key17": "zEhHrBEqHruAyrxyMdNyixha3UAcdbLtsxtk83TLAwuDNDTArTWiMNKmCbfY8taXqbrvBABypq2gtC7riVXBBJB",
  "key18": "5C4R7b8NkyEo7Agxxwiuy9jKWj4Z69cK1TpdJ8zaYXXm3DCuZnNUoNGJoRo8JtKcpHXsuR4dW7gfbjaux3RtyKVU",
  "key19": "5JMnFYB2kF8hExusmkaUHgountwbSzMGSEUAuwMaHigxecKuExHiS5oDAkYRgjmFzVLHFnrVmK2ncibF4mSUhHem",
  "key20": "5wov82yMR8bHdAKkPuTQsjZ1KpJEY1JT7hoGNEKu7jrEJqdvNtxhLAtPPpHL59tifAKkDUb7jf8bmfaKNMqnt71N",
  "key21": "48TFASCDM7H4pfSvaJ2thdHqojmSH15knYWz56VQ4ynSdaVs1jvvDkkvLRrsz3UA7Zvxpy2Edsg4LXkjT1ysAWRb",
  "key22": "4UeZvwap1XtiswXuHj2UtVDm19EVG45kDwYHKNx6fyDfJGVPJU8d1y4BzCv84Hfupu9UExApbvwoBYdR88g1TzbB",
  "key23": "2RF8Qx56cFKJErCvj978JLciw13dF8PRMsovnXyF64sfbngQa8N4HLcNpN78AgEsy3bYy8K1cEiH2WEX41Q5fd1t",
  "key24": "GH6DDZnmQoEUZB6hHyV1JWCppPmA3D3EErcDBzF86LXpmgakKci5Yznsv4KiMzVEwByqG5tDsF4TQkdNB8WYsPT",
  "key25": "2YzXUtWNGY5STChraRokE3REimEAgvtVDyuLFTx4HssmiHan5XL252w43BafR3XHouPHGiSnYtPHsv29EcVzvZuD",
  "key26": "39FqUqUC1VoaJbaidXepoC75hwY7YZyBUtoGxCimbUQryfzVMD5gvQgke2qc8rw7QekTnbXaPGvvR1FQ97m4w2wi",
  "key27": "59hZZwCGyNzoVQYQkfRAX7fQeEijCHe5kCYWjiQZ4qo4mCHY3FWgRVnxYHogJ8dx37uXJNAnBjgL5YesgzP9JBVy"
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
