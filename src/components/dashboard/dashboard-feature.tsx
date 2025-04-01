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
    "63DzU2dRrhqQEwLtah4nRXvKzGaczK9BHQWZzMaNJmmpQ1PcgP94imhK14CpBJQxMV52tH4qfNGuDYpoFGscsjnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFZkV98eLnWCpQ2388BMAF1MTUfaCNhPkxD44592oVWHktvGXqji8TYDYyeKihpsgt4HH5aaQjrXpwk65VLqMk9",
  "key1": "4r2X641TZHRG9TjPC3VzmW7f49zDBjkmkeseVY9PHD9xcrDc17esU3z4nfu12rJjNPn2qZDZeo7T6rRQNo9TyBV9",
  "key2": "4kiQxhcbhjALnQXtMLCRRGJAPAqz5ahkJg5HNaZ4evxTUfRbRBb8nD14y9d2VqatyAmmbEQW4HzQWX5xTMm7w5Yq",
  "key3": "4XrsTZAp7GJ1VDhfrJ49giQ7TQt2NwLF84qm1Todp1YsYFZDztHnWVaYbhsuiKuzdsgpvRs4USNRbP5gPvGjECsW",
  "key4": "5TX5iomQ2DmtoZagJcwQLkEHeyBkoG3mFz9FankC1Dw5MuP376TbhBu5sJj4YtkJSLKy8n1DJRsMDBMHsdXEHTxa",
  "key5": "35ZdyYzrnzVQ1zAL4XFcHcUXN2uGLWR7vkqjczj1f8nqmewEghkwU16yx7A8uVvFdhKMEe5Xdv8Sn5t6a3X3uBsT",
  "key6": "4bmbfEzJYBU7ja8bZqtjCWZLBNtvQkH6cMJ76GAVXfNXeyXkq7aAR4gfuSvMLwaYDdHBr3u6rbFSEtaV8P76L5Rc",
  "key7": "rpAcpVHZRtLEdkVcqkFi8YsXS3UZGaDTZwuWiTZUD322bV8YuftEC9eFcyx3PQmAkdWrTaS3NWh5qiZEkfeVAiL",
  "key8": "3VbkRFWMsAoEpYk78FGxXPGUCteJMSFoG8qdNHpBqe6XnydLzgRvCy2sPrd3MRSkwLfwuPpK25hr7Zi3HmqJdW29",
  "key9": "5ww1rAZZgXmGerU9pxrN28JhTt6n9oFrcjRmGsYK65GAhdGJZ8Gg5mc6CPpsMtKURxbHLXb2k3DXcKiu1NPbwefK",
  "key10": "4vvivWsKnaCRVZaXBfeJ1ifEXKFv1j7WjPv6idV6U6LzLek55SHsV3hih8EZDtVNipQMqGa6cfcVGHenxspJH3VL",
  "key11": "65wSSbGCYB6xLBq2uZsL8JVyrpps98MVa8CrbRyb97NvbcDnNzRpuvVfXjogoNKngzaggz8Ujt66KnDp15gp2Gkx",
  "key12": "3koYLrpd7esioMTtEVUNcREwVoMhnikPLty9GghzZ6vTHXYKYtxi8yjKborH32eDGSHvibrJYsL85L3FmfuEGiL",
  "key13": "3hD39mgXU2KPu5Mvv63mayoEUreRhu2Ted1aG4nD4aKRuHV5ZyChkXHtawoZbLLPJiQmALBUM54Ut2YmxDsC3aXK",
  "key14": "5u9jXZNZRbuhiDxEGvrsa2eTzisvRjUX2vhFtf99KqHDV2L56FtVArKU9d8HLSD6XU57x17SMphuF2YRB1mvhrUy",
  "key15": "2v4ugJvGjrLUZBriqH14MQ1Sx9xxRUhhVEFG8cQ7tiK4r1YkhmxQhw4meixiQUb8BK3a55JFMoLSJ6gBadAok44W",
  "key16": "48yaUm7HqNFwc8UBw6JqfaFPKwLk4kthrvVKXuvcF1yTGtcTZxxvWHJWXU9yjD6N1ntdwSG7qkdXHLki4p1d9nrp",
  "key17": "38ETr2dDnuuiQYRzjizESZc9m8QhXhqbnMNMKdP6qTMWMZ1BtSkx4yvRnri7pjzVtQW3SxT5yGfMB9Hkq3ZmX3TT",
  "key18": "5rCKTtezyMZX6kG4TLjc7sdezE94vM8AW86H9htSQXuMxX82fDBpszCtRMjG4U3Y4pYsaHMuaYjn7ssWi4CYpahG",
  "key19": "5SCkqRx9xZG8uzDXktyUTyjMAgdxf1EvAE6xuBWEZZGaAqrY2Hg8WtHJCkrspn6giixM4fJkABuEygmjMX7Cqbs9",
  "key20": "5FGnfBenMr7Am4DTC1WCrhLanuHi9v6g7F6Gw3jciGYrMHHihtwMPeH2tSo5h87FLMbDQQRAdwaZjs3YWiSwTq1N",
  "key21": "5m1dNXByqruAXktWRfK3nHgr4qgjB2Y5vwKgSNQ4Jmt8iSJ5nMAMNMkADMv8BrzzQnMHTpV6DnjpcALCDcbeA4k8",
  "key22": "5uW5i6YegtkkeYmGDCr39WAqnq981NGuM6WehPoQ2jASAiALzw5watNrxbQjpwJPk7NH6z5muSAQty7mFXvV4fmc",
  "key23": "4V9NPrGToEn9QLGXWB8U9TkwQDnLC12mHswHopgHrM2cuABDNJZRcGKpYXkiXEu3vQDjKEjbsChEMPQvgoY8fNmG",
  "key24": "4WEQ7JXPSi8B22kUqTGK13UQR1eG2KY74ZnR6d77yV2ZSiNazSPH57uChyvEVpTiGnpyW9WQcvGseLnFt11jHWKZ",
  "key25": "gJTKg9ze8s2xdrAyBADdDYWisRpUCVK5RiVStPTuPHi6976mNHUc93KgTADt5xiQYL2nh1MruBL2r4UWrQd6ikM",
  "key26": "25qNqx9XKD3iZT9GN4f2osxBd59Fegkg6VczmLiP6XGtMu74ofu997p4vpzxtbi3sQHKtX7oa3AAxCQoU49MpeEm",
  "key27": "2Q9qJAG6KhRYjmz8as5GkaM7cXXdNaXrnNnDNEP8PbQ11G7sBLYvRXrGect1CAKFLMaXhuFYEvZQKxqEJ3XKSxFK",
  "key28": "57sxhKd11ytWuwKhEUfSxbJttTUUBqVMMi4XvrGJXPndBM4PdjUPbTHnHPZ9WFPUK4gq9i3TgMFK5k8668iPi8z5",
  "key29": "5VQpqLTqAfs5bHin815EBmqcxGyQAssNuaHraFM925EdUhkGtmbPKfNUCdVrEeEtNs9tbyQtAcQSZR1EeeQM9gRN"
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
