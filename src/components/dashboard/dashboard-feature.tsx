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
    "nwvagBR9cgFjEcZyuwsiHHnkQpvRbXgvTh8toqJjp1vLWE14Ebik756UBuYbjFcxfwRfczeugs9jNKqk2BJhrqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ch4qCjuAwgYBCA2Uhmu5tzM6k9av5YPfwWEVs2JZirL898q8WSCSPNFgf5kKFNvqAFZVTaz7ihyQw25bqnmPbid",
  "key1": "3zNAMpy36E1VjCHZ4YwngD7ArovMb7xehCyTAxGDZo7wAtXBQ1bXQ5F5MFLd2y7c7FaCEMhvbJtUvtRo1tGWyZ3i",
  "key2": "5HUhnvjTTwUw1gc6NHimaWo7D7bwZjWA61E3tgP1eHyFo7y69iaRDWi9byqUpoGKTNU5CT3PndF7Cm3UKnT266FA",
  "key3": "43Bm3uJ4i7TN9Ffv8ecz5jJHAcihn2rHetfcM92xGW9Q8pBAVDd4W44P4yVsLJdX6tBGZoS7oP4Qf3xFaf195NS4",
  "key4": "2DDZe9dN153RYnTuXcDxwehJgHWpBrQk9UcHLbq67FFY1b1CuYnUqRMckSYNSDCmib1ameYL1u5npfMKv5Eu18uQ",
  "key5": "3kQvJeDjLDuw61ncKcKLVEw4AjGRCzRB2PA3oBT44yyhfEfhESvehzev3HFca4JCQyxLLiny8e8rFbr6NMeT6ik9",
  "key6": "5pdQ24sxa3bS69zx6zwaMPDz5Qg71yTZFjZgeMH7V4JQvrRKU78r64A4mqJohHw3nu6SnyWCaePdnVz73XoEvDsc",
  "key7": "2bmKdXBfaAGwa9q4hyznuLCEdD7nNThNXkitfCMruPXWVKsnFqr1kG2XPPnRJJKSfJexL3Key5YiyJuhpKts3VWu",
  "key8": "5ViYJ9Bttve9njawipcM3ZfnraTMtKAqDALTNHoVcbThY794iwhsMBm6eviaPqRPSxAxBwNUuVP6tNGpjUHJpdTy",
  "key9": "5nxniX7LkqNJCLdpY9tyV31691fAMjt5h8EVA3RPuPJutLufnQwRY6YqH7qW5aGPX1y93myJAikm1vcNyCufL15L",
  "key10": "3UxVvuzMMYahwzvqzUegrqXDc99fTRuj9dtFbLMY6ijo7XkRPYjdcD4KbKKN9EbajvKc1M4BaDekM3AL1YXM3CZw",
  "key11": "3iNdupsRA7JPxdVorjb7S1vJR3cSGgVt59cogUGB3yLjxJCyJZ4874cEaRJKztZhyaJm9RNGAtMGoke3byF9q5XQ",
  "key12": "34MPeqJ3HBmxJTmESPJQswmwUjPNuNHEwxea44mgFPF6fzY6DJH4bUHDR9qPorCQJqUn27Vv7166hTDbb8ZbMRcE",
  "key13": "4AHNsFKtSFiync19EzysRMykuKqvSUTFDdGbn2MbM85RqBg4HyJ1zY7pWxYx5zPc3atZbtWszNLxHWMCJ1MKQZRe",
  "key14": "2kX2GT3o7RG4kMjXe2AiigZBt4zS6rXMyG1VCH3hSaMtrqdjjdVbcSFbCAtJ1B3V78zySwLxNMbzzGZMyPjrNkQA",
  "key15": "2CiK7CGoJ5iyNZ44xt2VzCAYxLTJRQaVsntGVNMKPNBikpEU95kQnbS44kKXvGwC71WZ4PYSkggESM8sRNqikh7X",
  "key16": "5xx8ms6pz8iN3ebrWdkcUwH7NueJ6AvF8yXcGMBmmzCtMXffs6qiFqVUgtHcg86mDokgT85gWDEgHBAQUWYDMEtf",
  "key17": "mwPrR7xk1XSzFqDdeZNhmaeiVbx9XSYkLoMrxZ8PTnPfeBGSww8eBQtj9TKaMc9UqqaAirZjpJAxznej5265N6c",
  "key18": "4bB3F1HJhnV6G7YRaULh4x2juGqKQcwWJwZ9HAXr9j6Fwx2yAKnAdo71CBoWDpMRdATU7EoLVuQp4RNcTQ1g11es",
  "key19": "2EBkiVoiNhG7GYEJRAL3yauVRRboqVhUyPA67gEQSEpC3kCvHVpEpiFW9ip8z1gwjTx9vaufyKbiR6n56W2DWPzd",
  "key20": "2yqcsMLN7LFagnaa1Mj1mmSfkmLuVzxYpuLs4q2dLzid2oVfskTWoh9rFCfM9tavqRxTn5fxtCJPPCM6H4c4z7tu",
  "key21": "3AuZopQmVa8fv7QBmQ7MZNTQ1X2Lcv1xDmpWXskFs4V4hMTbsmEtFRiR5VCtB65wEonPsPYg9PirHmeWniN4BMpA",
  "key22": "3PGcr3io2Pz3o9VQpQ3TrcYESYUqWmQME3ReptF4RDBZf5BnuMLgBsSGKRczb3AtwTfqtvnwVvodkrARxotH9wmj",
  "key23": "fjS8ucdHdcKwNHHFcUaA1Rmz3U4vTVYzeQkTdFCRcHp7KkSWmzjxRDX7K989NFXvAbk31ftPvTu76s9ahLyrjYK",
  "key24": "GeYaRCP4vDvcVm11uX1nZQgkJ2rByeRCGcNq81sXMgvyWTqJfH57iUdy1TdrizzswMKosvAmY1UsMVKjhEeKyoz",
  "key25": "EVDTc8pNx1VUwRWhA23kStPmbzXRLrZy52MtcEd4c9X3xrHDwVo8QFrexRK2z8MUHsJnRCpJHNkw7Q76koX5Fzs",
  "key26": "3tRsMQTK9W9gLYFdoj32qVHLWpxcLBNJra4p11Kzv9Ty6dq4Y3sDpt7XP7b7gyifVF8JqwdRXnzjpW4jPGFsz5Nx",
  "key27": "4Ky2sgBYzoQDBTAiXFkrt2NK8v939Aqt3rKWUEbWJTzFC3jcoufcLZw1qYWH8i7HBWNSP3CKqXpfUkUhBoBs8apN",
  "key28": "Xfan3GGyTeCiV4dzwEW8aRKteaqCiiXEXm1FW553SGqhbzM3o8Z6D7Li98WMatvUhrZNuH5VJxBbL21bqK5hTkN",
  "key29": "5Fjy1NTWVeZxm4SiTffkMVgZ1M4XvqyDyMf19f5vBAgPqkZUmw22gP9VhWMZNLbEKyd74nK6DtFxWryodwhgeeQt",
  "key30": "5nCatQDi7pLnRaELp3Asf3rBSCYYJvQQsRJ3Lnjv3Cn7Jaiz4Kgy5LXgygYBdbrrtAqtDoqhNNQHrp4KZTCZjbVW",
  "key31": "3NFDMeSXKX5Du6VBj69a25NzXdiujPd67ugxGcFUeFSN7RGoYvTrxQJbMrdizBYs6udFGDSuVScaEJ2YG4Yvyg93",
  "key32": "rcba2u5n1mZDZciHAdv1DXZRvvv6jp42BoqhM8XZrzMKEvAidq9JoahB7ch8Gifdx11LwQrf91cZR6tdY2FLuuy",
  "key33": "4HpRB7PTrUduPt3uq2C5gf6bjLvWajY5HQwdhSdVxEK7Bsg9Ru2jHKYpr2jSTqHZWQMVQqNqUoeQePd15UBfT57q",
  "key34": "3vFUerYUZ5x9mjT1MVq7wHDep4Yc1osRsG7EbvLVuutjrakv2gXbLDecYvfnBsgFQVC2iCMrCyxA86sBGKgCJL7G",
  "key35": "3pga1au39c6uTGzcMbLCUrEysK21FpHFvY3DAWTWqXwfJozHUS35VZcLTDLmQqcNCnhKRWVjgkkbB6eK1NY7MrHm",
  "key36": "2gvMS2j4D6Dk222uVqWuzLauybVxLTQ3vngf9wgMkGW8iydyVvzKWXj3W31nfSFbLw2uQu92hfxYkK99F1NkMmXE",
  "key37": "5Cy1vQzHmL8dFEs5cWRaGCakuCEmpjr1J57LHwNGmuDbs3U5f2tL6o6xzGo5iMAX6qAUDUtaqChn6V9hwqGYZkYz"
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
