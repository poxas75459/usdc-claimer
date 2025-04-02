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
    "5ZhNguyqP25bvY1LWnBwbBPcpvNKor4V4JDA4QBQTjxdKfYU2WNBsQF9LpbpxAQcgJpvC67JSyMBr8gPPML5L9mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58E5CiRwoHKhUcam9zDNSioQLwxLXsevZhtgYLpvyRnTSwDV6kX5cH17UdGpxRs9NZquYXzzNoQYDY2VoYWXBENx",
  "key1": "4p5RdUGzwqKVdMVX6PKPbhALnaVQEvxgZFHRLfs2zk83eReyKqqsYvp4uZEjavoTnRLWvsJSmZxxBRu2bpmg9ty5",
  "key2": "5cknmv39kEpEG5CCmjNZSJ29JReK98RDGc6tb1XSrRsGeuvei9b5NSocQRk2nUEdPMTzFnUBXmBiswnwz5WMfzwq",
  "key3": "54ZZyTiYBjZmVEo94ZhSm3vAgzzmupUC2Vb6YKzxTMSQJcSaYb9bqtEJp65C7qw3s5jjZPgChku66rDJJLKR3eEh",
  "key4": "4g191mfjKyX1ursRvbQQhLwe1esVHe8ju9EWnxpfptmEi9gMioaRrUmpMoVWhfb8ePFLoEdDBNDncompr2rdgR4X",
  "key5": "2mmdRPCxbQeZKZukGf2QrCpi3hPacFWJhhiQXgDQdSLj4ecsFmJwTxMt4urSWG6CfSnVoUa4peuAce7ANCxQBLJ4",
  "key6": "4vE4wzLrqwKZvoX85NZWRjXGtuWPtJAEPKejPxAxwBkq2RzRjLUCuMv2J7JjiiVbd7NKemdrq9bk44MNEvswZqrU",
  "key7": "2yYpzSCVVb56oKaSkqnLjjAxSin2hrmimDvtmvKFo9NgtBZ3krJCWJVNnzmCTbKN76uyP5nhny2xGs5HgDk55Auk",
  "key8": "3GkwJyZyRLruDBGhtZZwspEsD533uAujzDJWuLFNoKxHgw8EaiVuMzGkhjmA61WKLy5o2MYuwBDPoLFsmzsQfnAk",
  "key9": "672KbWfsi8sPj71nTW5ntF8NMECgHJTNsusK7TiJa6JpBgSpGvvQExjxo63gUkNGVJmzk2fetXpFswmBJLzrZMNj",
  "key10": "5BA66Q7WJ5CwGjFtgWpWMGjBWG9H7rpMPAZCWdHP9k3ursuEoc224Kr2pZLEuLpZ2Jdqi3BTRweh3yJwpSELmgjb",
  "key11": "2P4L7b7upM8Mq7icw1bEFzXMCjrG9po3wGcqvPPKrCKH7CpfjhMKiDW9Tz47XP51MJeBsYLdrjFZ2yvRJ4kZE4qu",
  "key12": "2ZyYpRzrtwSYJ3bZiYeu1LRjrPc61k81shixK9DqnFbndVDHGP9rdXavxQNncjPPQhNZ2oojNBgm4mhTuAJrBY6J",
  "key13": "3Cxovg23nhJQYKar2K37bjCVCLzp2oXFYTYa67zNiBF9k4Tjn7X9pBkwBXYxZHHRvXH6GzYd6gc9PEZwaUp5T65q",
  "key14": "3D3wtMY6YjSbP9389ybDUN2L55FPQHwkKGC1J9rGF254XFde2srQvPZ312bNEbkaEk6a6sbRVXsbsjQKB9UhZFa8",
  "key15": "4fGRrVP1mBSVuCFWTMPXL9M9toQAxX5yMnwcLsUJPBy2gQbG5XhZPgtwMU4vuxikERKkhXRXRWB2RzD3nRjfz5ZK",
  "key16": "34R9tHzoPrycp6HfFgg1SL8WzNGNrT3c6xpnrSmXmn3yzwMrpoTeyXep1MyxPpd3UwWCJNyhMf3JRfQqRZKb1VTn",
  "key17": "3aDGuXEyFvTyoTnphYcNhiPWHJ2FRgBpubxHQsNgrNENSoiLxdv2FE5zHnPsAMiKzPnTWEJj8t88V4HhznNqbgjp",
  "key18": "ANSELtZsKSvcQF71HnhUxxiEwqG7TduZPRxtCWPutcxBb1YreJbiZo6vP5U3cDVF3PmPBpXa7Fj72wfNfkpRmji",
  "key19": "4CHRWg3PNDLW3Rm6CZ9gDmEsTq8KFFLKNKggzNGqovwzPgwgu2vUKeww2rjMN4DU1oHDcNZy2XX1e6nK8aw7DWzP",
  "key20": "4vxwBecH6wy6sHMXGA5Q23ZLFhRTigoyaibP4c12X6zB9EpZbT5bdy9Uec3NzsUCPVcaDHJTpyakg8nHTXheYWyG",
  "key21": "RdBvqAuV1jnEBUYZL4456ffVhPEUkB5h92E8Tg34jp7T8Aj9KT8ijdUVnbE7M5TNf4STkhdESSrPFnRryb12pFo",
  "key22": "3HqMWypK8vcDhe3dA44SRAW9M4cpSpsbBcyFesdMybpBiQpN8rBC3gsDFHSzTnRCFFvv7Y52iSrfFDUTpQ5wXhS9",
  "key23": "3M43oHToHMo5981HUWj3QPkexeUFETuuFtKzDZ5d1mVnWsxuMAADNfP1BdFRamC3WeBNz5nA89JTLfcnErc1ekW",
  "key24": "5Nv82NcVD7cgkViGWG3LeF3fSZhe654NnhCHA6xrTcErbdfmwE5x9zKEDTRqvPEeezWyUc9zhuoceDNeLU9ytd1N",
  "key25": "JCZewspNAuB7gjSoA7AcAQrqBMv2eMp472NCjSKoBc3tv8sj1zmMgfG1hoxgv9RPMzg9esgRLaon8h4xfXUDniQ",
  "key26": "4qqTNvFfhpGkou39JrR894g1ECkiVCaueCDPtv9aymZh8MpknjNzbTGHgYCYWwG7tCicqg8hQqxW3fohWMJ1d5KX",
  "key27": "yaBBZjAuXp5kC8xJNYSUYT92gBidoqjZ7nD7dxs7k95Ff1682SmvSxoGiM6wK5MQJuDvCs9onWGodBnHpcyiHFE",
  "key28": "3F3y6WnpS2eWd7YkLbDvZCKvWRHxBxZ79213pftyYRNYwWyxeWkWRJU5QakhVZZtcW2iimASqTihduSvJN2wxGjJ",
  "key29": "3jBpCp5fA9LuWbAM6uDgn37dZNxpGh8CT1YbNxAZu82a3Vx5NHJHdAW8wuMW3Cx5qC19N4SrP8cUAePWW4AdXB4M",
  "key30": "3tK7aqbeCq7s9n2eGnvC4AJ9c6Ju3vEvSUZWwbqvxhTrFwWHGRRUxpK59LfewnSzrpu6owBBAkeyXWhUp5vwxDdt",
  "key31": "3qys9pqLaRy1fyo9W7d8FgrLGBpoLoHG6NFdYeKkux8qKPtCwupxYHMnAf3vJ6xm7xLczB2e46aF1nZknuyAffZg",
  "key32": "4WtHYXSCCfTLTzc9wBHFZSuTSHvNZ8YZnzxmrdrmWByuwYhS4EPSirGVW2RrCEiurBSjKPK2jnpic4i1CE4GWWiV",
  "key33": "5gKL4tc7L75ZepZGqR9W446318HUL8exDKffdoS3R9wu5DhzUpQnTTjSF3aWbX3Wz8RjQ1KBfnYLZrD1d4LVp418"
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
