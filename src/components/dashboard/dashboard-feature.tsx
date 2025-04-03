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
    "5iZuUJ2BpqmhDwgwMxGHYDDMAsmU3XfvArsxuAQLDqGAzpJa9ociBjbrpDu7qa8HbTnk4uiR34oxWvsb9Qj51Ei1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNyApyi9HETe3AsDZ5GJZABDeiJxMQ5uioa75oN4p3TWgnSuCMLqN7UAwvCiHNk4Ab9SGEWDbSeehYGWRrDibb",
  "key1": "4iNgfDBTbYN2RwXkMr63RvSr9wQbBWvkw5C4CuSZhU1pPBnxegBECGV6QaRe9D4c344s8BPxjUrdcFSgGxWCSkA6",
  "key2": "b2beGrPa1Yq5Pxx3aHK8WA8hn8TZJt8X5JAZ3sL1Ef5hLaiAbuC6XFk6N8L6fqzMuT7pkDK4r7Qpe45Hgy7qvsi",
  "key3": "4LErUXf36aChKZNXQgggt8K5TniCkTUy2sWWaD68kmiPRPVUB4KFdJkPUvdgd5XGsg2KCe2QSNUNGTU4VBAJbiUq",
  "key4": "2EGkWFKrRh45TtxcwcgAkvL8Y8WeaTJ9TJK9rCPWQz8XBkV25T5k6ApgKbhVNJdRFrx9ksygYgQ7iuS9DzFQapuj",
  "key5": "KB4ptP1yVVEctW8Tv9NXQEcjCYfoLkVJeSU9qadspZkvC7a4d46SWacVVcQmRW9dYpF6rYazHzyBsYKA4TGdLzw",
  "key6": "3KiZ8R3UHLkR5dyUATMaaAsCST3JQSywnKDAmozzrHF5SfD16HhAg51vXHeR2QfDwBFuYrPNGnx6Tqp7bsbRbqzD",
  "key7": "cp5NRKPHMuxB9pVuNSMzgqGgbWhDSKQRYZP5334akw7qJSV1t4qzCfW3ofbggjqR16NrghesRUQSniRQ1cLcNkr",
  "key8": "63iiX4oGxWAHcsG8rwLzBdWG95tyLpgExtPUHZPNJPN6RxqkPhnTiRf8ZWoC167tKHb4vrpPhYyELfa5f4dAB8qu",
  "key9": "nXSZUJPANdvedQFGWbHbyADvdMsAu4gVr1nGCTaFRSGHbwK7BRbFDBEGUGbHVTTYPUgzQvsP6YSDFGruyvB3ZSc",
  "key10": "bS61m8SUwpcnV9YhL34LaQQ36UBBCzmHSQ3qa1aWvBgDr3j2LMpsr8PAwGZQifp743Tp33MwaUHdg5qoW7PT68L",
  "key11": "3wH5dNV2gwmqKVGaqJpGCChgfDzEszPb3c8J6KeQmdmMcToGL4ypMLi1eaKTBhY3inb6LHj4XMiPjCv5DCJLibCQ",
  "key12": "3sy6tAzsizzkSWSMyX2ifR2iFZTobf2xWBuV7eYdBC94HEJR17dgJZAnU5ZyjLhCmAr4vNWQKkkWN2VPjszEssNC",
  "key13": "PqVddckUsH8vqgT6f9gYpAg5Mf3jouMvJWQd4n1VNbFVJpBrncbfTiVAJeHTJw627KFSincUUwvmZ3JSR9tn8Ln",
  "key14": "5m1vr8gMNqwK2PjKUnuwCQzofAqe3JZqes7fLAtwSyoiPMsTNVNtsvM1CqiwnaD5stiKeSQj1YkcVMPsFZJDPodn",
  "key15": "55SvDT2F7h6DD4rhKWNS2x85G8eQvmReMY2TUmUAeMMtpe2XQx52U7qvWGDMENMuXMbK1AVL5yjNs6ARCAiSPoTy",
  "key16": "2W7kikkExTxAgY3abK3X1oedd8H1988wbaouCKi44CJuEDPo2v92tzds9ip1Fq9rDYJdqKzFGZ7eGoRUNwbFoB8B",
  "key17": "5ZqpttqKP3fkEtG9fAdwKYUdFYNPdX9JfEVrJF9nxAG4N2GHwr1ms2y258hnkUsA3MGWtkuHfHXhUU1U1qmKAzCQ",
  "key18": "3JRnVhr6vbVzyu85JweQ8ZESYPARh5wrXQZau9tT1yX7QynyPrRwc14zt4vvofpXd38iKMHvBSPxamVNGhV6NZAR",
  "key19": "2RnscakDME2qU7SFCF4cLScxyn6E4knUnhB7fRsRnRS92xGaZvepJDTgMe4fpryBfWBB8qqigjSgU36ShWTiYbVv",
  "key20": "5WRRUG1WwVAnshgpG2EAhYWag38EUiNZu17MB6CEt3YvkDAQeFoETcmYcVCV9e2oG1xBL1xLG4q4xDHXXtuer3fG",
  "key21": "48jnr9ChHAAVBdeHFrQtSjXRLU91H2gQNfc2oHRGCSzqxe8w3XqgWgr8XhwW6PemtZQMytp15abuUGhLsJ1NcEg9",
  "key22": "nYFhWbbLLGNQf8KDixgDxEFWbsHfMBh7gjvrfc6X3qrZNKTpTCGHYr989m1dH3erDvACsowQyM9QdYZ6JezjKC8",
  "key23": "M4mqVMra8QEHmXux2aFvcQskKcxeU3r1e1S3wjaM7g8BJCM9LnoaEsqsRqhpaqmPUUFvfmaLwWsGQK3KwXmK8fn",
  "key24": "4Q4dtPkgLS2sj8NKVHcmfheyYdwRJKW6WHQ7Pujc4xq8cxFDNBw4haQht8jQAov8deeoF4Mbwbcx9iowwUoWMjGS",
  "key25": "2Vb7wdDUuAsUnZUK76KzoKa5p7a69jV6qafPEDGz7EK5UBZmDjrzTb8JcBsxH8Gwc1Trmrkc533MPHL9StS2r8PM"
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
