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
    "X4MWLuzfX1E7gNziQhUsBrKbE73PQBMV6xYHvGGDcUEEAHWg3DdrD2fgnidtjHaZrzHcXQw8xM6wc7HEyGfQjxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4TegSCYYA6FPmpxDoHsxPLiUQ9J3ohpMLqJ4ffvNHePJESM3kB2MsRULKiyDguTP26Zb8a3KjKhdg6J8YK1sFo",
  "key1": "2wN6SFA5qBuUryBv1v28JYocwxrLvfcQeFmVZ2SxWvXizTiFpB22EB8xfYVaYaHj8L5jzpq4vUZrhVHc1mH9bFGN",
  "key2": "5NoL5G1cM8RyrhLzD6683XfhRk4JnXS358ShcRq3MNiTTgHRFVVbT2khdn3kUQYUfpobexkydMgZXSMVgb1wnH4M",
  "key3": "2zHKDYuDpNhw57BrG4YwfLKRZvn3ctB7YQy69eKn5uSdMPduf5fYzwgXxUHMQmPsxtf9a3GmvAZAY1nVN2oMjfRi",
  "key4": "2q9hksDuu1iNcpCYRKqU1j2yt6rLVNGdhhCZ8m6XTGSpSaFRtgUQbUubJUJDHeraxfSkGjTyxjJRu24EUhgzr5W9",
  "key5": "jyQwz8cFGas2uUkGSe2KGs2NocBpSXEP2uHAbTuiqMM1GBmxqchVTkRgkKFypXy4x3hp8q4521XsxNbfD8FxkfQ",
  "key6": "2crs4Xc9TnYaAnYKzkVHdweN2pf65T95vC34caEoJXP8ffENpncBEMmnVn5xatxZUqxD3LYZhoiqeLXv6GCSsPWa",
  "key7": "3PxBP6ieu8iE57aZHk82WEkAFoPgBLdcERwnmJcGWi1EY8BRmnJmiH744YQqzT9pQD8Rscxd2gced7WMGucHd77J",
  "key8": "3pHDzHanQP9HpjXoErUt3MoZ6PP2ofwr6EgSk8SjxJhNJwMVdiHqjTBBTaXURTnskZ2EV2dJiTVq5BMHXThjrfWt",
  "key9": "5dxYHREWQayg9A5yhGpoFKgKtmkLmxfrUEQ8QpYXAS2xQQpym7oezxkgz8Nv4QhoNoJiQQD64zkAh2YLPHRZ7Gmq",
  "key10": "3tEXtyAFnhLNNWD35bXG6AvLfopgLuujtNgmdHVVvnNmqVHYsSLVRSXKwuayc96nA2f9ksirSz2ZwE4G96fqHu5t",
  "key11": "chRRiy2aKssTDKSFrGoLnjGzmt8Cz4usTYxRG28KhG4zfZu966bgiYruocgmfLhV1m3my3WYUm33KvJSvF695sU",
  "key12": "f8364ynfxAurPc47phRWSbqp5iVmwVE2tDRg6CJhjLgzCAT5KDQuXki6cLVXZqGanMb9ZjpXzQypA9vdA47x153",
  "key13": "5QmyQSfsSoiySqCSsPuQo6RjoAh6sT9j3NuLhwUdpBsFiBtK1tGg3BjbwWrabQmNFbDNLhfXFinQJfztfTWgKPiX",
  "key14": "4aZtUcHJpHQfDEjH89eR6V1Sih6dkSS2DmZTv6Nwg3GvEB3zFE9H2eXFXhZi73zUGRTzgB76S3KSMEuHiHV87TGR",
  "key15": "2BXHDmDVkJzRZoFDqfhUqeYVy89Scb8SE2vS7my5Mzowx5CzCU5cfRxoUEn5gAWGwGY7af65UaDHHii1SEvVLQLb",
  "key16": "33TeHKeBuhm3i7dyfjGxLyECdSa79fRADPRnbjsBbCjDnTYau9HFiRNgKrzxq87aCDjC5QC21k8BypxJtsEw2ifx",
  "key17": "5v16xhKHSuuecgYF8VG2Vhk5FsDajbwVi2TnCXzUaUmC4FyZeTXvbHiMwMV12K63CgymGwQtrZwk7PmEj1JRHgyM",
  "key18": "4oi11r3jKrxZ3npe4hV1Qk92vsaNHJpA3TLdAx8c7YJSDszEC2yH8Wv3q89GjRTmhdBUU3rpgdTM4EUrV59b1u2p",
  "key19": "4mG7PJBZaZxYHmwtwuQkvvTSHAhUpiX9YBqmdjqn6B8wE2SYamz1fLjemugrvPXqtQ36EXWaPF4KFZh63DwCtzjR",
  "key20": "2B166wXeVXvRvEStM4zUshbWATiPVnpKxZggPZoT8TW7g6fWbioAf1Y8UPqc6h8aa7jgdgdfhqDwT9AMtjeHW3hY",
  "key21": "FJHqVhRfHcJmbUZu1oKJVcgyFEegxkoViMLQ5uDbvxVE4pTmULf2Lbhp3Y2dFbe7oBSToGC7QgXGzmXRH98urAV",
  "key22": "4ceEMrW7AEtX8vzQHmsgZ9iWt6At56TMbvKV7htnuBht6v5BdQMuuU8UNRfFRXd1qDP7EXk3ttGyWFsXMZTDLVVu",
  "key23": "YUGoVoRAu9dPytZ8tzJs3TRZyvpuyHabAT4GiUz8GFn2KPGYuvN7uD2xYGYmTee7CerMsm1h9UdDq33TmsAN7Dk",
  "key24": "3zpn3KEYCXXpfiVqzin1u7u3DmiMfvUFcr3LsfeRqB2HbkMoAhhnRDd5qTyu48Ghu9yX2KZ2aXwezhEy4Sdxngb1",
  "key25": "5jAb7CWw522CzzVCe1biosBdmuSQoRJonpxdG1SpNpJxgbEAZgxW8DWCXEza7vFe9PwkPubqVEddtoEUNsU2kd6P"
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
