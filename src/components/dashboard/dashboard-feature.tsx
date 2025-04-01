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
    "4LFiZEUarj4VTf5iwf3mk6whAfNYy2DZYoaNaZ3GeEBmJh4iR9QQ6GxvaMfcotXWHjeC5R9CFb1wfZEVUZPFUqcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XURXW3rg57KuZWvyTmMPevk2Q1yX9dwjxSh8Edrqr4ivue4hoGJKgWPgY58SRbANriz7oRJ4ftcWCCBr1HjThH8",
  "key1": "2vUJcFF5mA7ETQv2ADmRqPyH23LdYccPUZpx54eE8x1dxhe1nJjGkZGCbC9KWDTUvBAc3GEoUmrXYn5NTqEs8p9A",
  "key2": "4Kyeg89wLGMMif38RvjtA6JteP2ie3ADyRYpKQ5CkpkM1PjrMmJrduebEWXaryTYrMPWdcM42xdwKrGbTVUVn527",
  "key3": "3tLmYAocey1CUj72CAJNW8HTsM49YBhsjh5H8MXZumymx98udWqNUjMnRgvVhxVS1keMkcNQLUDw3u9xsTr2Tcxp",
  "key4": "4aampwiUrKzp1JYrFTwbnxTxeR6rnZmptYhuxJTd65AGaMUTxF9NGtwB3d1tKbnSmvccefLM1h2CpUNptCMiXreB",
  "key5": "41DUbW92z6UTJEDPF7Z49WrqGsiHaVn9qybuV7vSEhurV29NgNNos9cysqH9v19bdGFoB1roS9ZA8xSQ4X66WhkR",
  "key6": "ZP85cdwjtbtX1weuCebF4KbEYD7VNaTsZcPfHDNxpKdsphHkUio4WTVHsSYXQvGVFrsnnNSgtzBzLe7vKUEzLra",
  "key7": "5GdidBBnPUKDXixrofRfkrTUNxuC5UZAyp6bgKYUi5dhLPcpBT5caQ5gU1BDmeuHN6FfUwLvE5UZDVAQBroMLA7p",
  "key8": "4hgrCYJLaaY9e9KTnBxF682LGdsnfQGtkJX9DLyb9dq8iSmFnhL8aGi7MECrkEskh974RtB9owRTCxvzG8ELGhE9",
  "key9": "3f9Q2ua3MBCE8vwf7Tmqns3W9oUurdFVje1figeWkJUq3VkcrWzoT2iMwTmVUW4XWne3GC5pfEuRyT9PWsLRwLM2",
  "key10": "2qvT284YrhWmsyKMoL3YwU6LjPeig1opoSYVsMBZPY8Czxbr7LGGVMXMnNqF8MkphrSdHXEHfXBv5vc73aTiuS7Q",
  "key11": "4T6j8VWMm1nbHjm51GKtNWzPbhpFx3xaNj8d4BJhih8aGSCWugoLR4XckdLXaRKXJyhnBqSYHdNCVTXc1mbYSDL2",
  "key12": "5ZTjwRXtsT2qeBWDrKo8vbg9aCYMuCbGQqyYHsaayqX5Ba843QU2LfZJAf5xMA14zQqznYrFH7N52gVgnsnW7uae",
  "key13": "4wPpFDBhFGUSyKUTRUkXFhM2MwMVnHfpAzwT4SGkJBEyC2WHS4CvgivSsa4bEypuAg79dy8hgcRGT65FUwJhAeyH",
  "key14": "2fZ14UJcaufncTjmjkq7S1xQquYrHhtyphruJ4pi1Lz2KQ8rEVj2nAHnPip1xJyavFiEhvB7c8w4nE9dWD1iGcRB",
  "key15": "4HJiXDcobzS9bxUvbhiL7wnRFxHtuqqBdJTkPc78DyehrxsAjeGcUG5wRWFDowgexTYBFoBXHVjhsViJdJVUeBB5",
  "key16": "2BtHr1zifM7LY8Yr9VLv5pmdvh7qZgr6STecb8vJNt9jcsyNhaCANdGwBtnArwXPztmcsU8wvzF9SYGCjHtRrpRG",
  "key17": "24L2fiZWMYiE9gH1paBAzYLSvWqpcXWb4rrtB7HGUjUxZkaYjLeVzTMoRasq4XamgBFZizauB6cSc51rDj6rLtwC",
  "key18": "3fjGMPqNagbGpR3LJxgD9x2gYkyHBsGWNxb92rx5XhCGrfjj2MD2XR53YSW2v9tq6ECKa3YwLqEGmBqV2H1WKysH",
  "key19": "3ao448KW1QvdMJA7NAWBAVUDDrDB4sRPsMAv9UVQCYYmYaWkb8YrYz71cDRyy4gN1zM39jcRkrHoazXk1QSVmBWU",
  "key20": "4UUCq23mKtgPyFUdRi6ja1M7FrDPXaSa5WzgQ3phFQZGtnGn3Zovg2dkF4HSPpVXPHD3488kBrzj4EFTh5fdmoRD",
  "key21": "51NDRw7as967dwuYZBX6p9srXrC5GAMGtt9Bekk4wFnJd12mKRDTcTdcCAYDe4dtDxwUxDDkNuwPhPWRoQXSEkkK",
  "key22": "5CusKZ4ZiX4GPqu1fmTN4Xa9qTC2Qc6hhgyzDUC4AVVCuMwihJKwVXWzQWHQdxGNdrDwX5EWyiFi7NZxkAUsyvaN",
  "key23": "2Jq4XKEckzBFG8vH73DTPD3VMCy7t2JMkNJP1nroJVJLfyrnFSUGGthiXYnjYxVxruc14c6eRMCFCJx79UAfzXAd",
  "key24": "2LzSTVMciAd1pHNY49YJ8DB275Vn9tCGSVwFHrKoWwsvNnoisjaatfwyeyS8Y9GDF82tvwdDDzeSR6J2DngDRq5J"
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
