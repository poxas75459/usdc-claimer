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
    "2YhBSRC3EBjtX9gRSoRPWqd9P2j4aH8F8TY7xoYaM3LbA7roZvbFXi5A12tLV726cq8uGXquR8UMPYjMf8hoWYc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9kvgxQ2CyWVpJ4JMua9JFrQjweU9wggqszdE2Q9tZqg8jeat3LGwdLa5FRTV91wukgmnnsHo1ufQiLvuXBa2R3Q",
  "key1": "3fqxEha5trpPg4WTPJXaPMa82RZ11kGgHVe5U4mDgtD7R9315T3yRFQqJZFb4N5762BsKDyM1vHskcvYBe6pehWS",
  "key2": "2H5uRgvYpm6AAwfLzkzExR2eY6nisg36fhq7HPrJaUwYeQmw3WEts1B1RtUpPRVqk9coigkzvwpQmnFAjdmhshXR",
  "key3": "59b45UNL7fPd4cy1pVZU3ByQxWMmfiMZ1UYKhyaBbx7V6Jz1CamhNCWu575KArgU7JLgepLuC7QfjDghTPLCHKoq",
  "key4": "5eHNsG2ovLgaKFaZBj7RVBqsxCvL3QqhcPLK6GunYSbr7twc4b77MYMxxbXLgg1zu8HuurvtgU5qYke5UMAyypP",
  "key5": "4bWiuxfW5zQDybysjwKwb2dM1JBzUw1ZuJUrszmhUnsKGkpqHvdT4bbdikFbuqp1Ydu5m2wsT33LaJ7Rr5GgoruW",
  "key6": "bMtJLxHKeGsbb944hX4oibRAPYAFbi544dosx863kLjhRv2ejtxdWD4TMURXfq1FXqUvutHhpKyeMUVxB7dYAeg",
  "key7": "2nhHjwa6fuJTB7TtX7fCdanttdjKMXzmSuu3tzrmv3ehwuh1oRjSmHnxu8b89NnV249MNjcqRCmu9fNJzNE5aEca",
  "key8": "5SqcRtsM4y5GSmh6YyRQfqovY6FbQru63aeEHXCtaN7kfBjPEp2pJoEERJ6VoXggwPSXUGAPkcqhuM2FVFfjjkXD",
  "key9": "5FhHFvNMLT4nE2Ls8SLYJdpANEsZqub2Cfh4fz2c3VLD3oaooW6BDVMeptBmBDRUCgvzra4fxEnH3vXSK5qmPqcR",
  "key10": "2r4dPxvvdYtnrUmZwm6pCTUj3eijvVNz4T9ZcpQ93GBeknGbnUjnMLE3CjKEQ4Ydbbfy9r57qkum5Tdjvmfv7iaw",
  "key11": "2YSjoNmYW9pEGDemieS6fc6J4gr1BqWxpRSDobp38NUXgZTN7o61gp96uWQ5wNH8kGpsqVu1MyPsfN3Z3dWgvCpF",
  "key12": "2DaU1KbTgDPVCpshNBQyY7ovfutuQvNcKpEtCoMLREJNtXNus9yrcPGNr94vCh2paczJ8zaCaRZpzpD6LGB4Ah2B",
  "key13": "59DQy2tFSGZzzFwQcCWi9BtGhcAuFRQi2nYzLZWjEmQ19P1PYLFAt9USRrqdDAoZB6WYEkNYdns66Y5VszX6STLR",
  "key14": "hdNcGZcjG9Y32Vhp1g7ztho6EYCPpnDWzeY6PDTUzrXLhb7qfRJ2zVmAQE7DkguRq6PkC9KP3beqqeYPz4F1yKZ",
  "key15": "3s6NoVXHHEXNVTrrBB878Cudp3GX99pU9wUBGbfost7zdt6aUbUNmrkJjudu4UNwyTc8pvgrpM8n55ECPzYZEdxF",
  "key16": "49gtaH6ceZKLPExzyGvryvaCcuX263obEcKcf3u4Umkw8SkwaJFQSxcC38Hm5wWGek3MgB6KGkQpH7oxHix1XJK9",
  "key17": "2KwAE5DSyP6Uw9PBtKF7cUQazQ4wD9EDGN6pRG8imnvy97tsfnaBskbys9rBJ12jqQdNMEhMfNAK4EFFkqYXmdio",
  "key18": "4ZBFkUMKn4zobvYtvDgxobB7EhfDH1xmJR73XEsRnrYsQdQTbQQTAj9taTs1tsVrYqWjuG4PWzirQaz7xfKjLbgd",
  "key19": "22ZEt9AJXq6KoHHvNGFkokE9mq6iWGn2w9wRE8FvuxSd5FYXSqxUD6deoSeBGz9HHQxHxYQz7vCBqHtRVNtWVMVX",
  "key20": "3whoJ5a79p9pLw5wCMLhVVzGhUxTXZskuxuYequsoK4gfJU9ngKUiYiomAKoUnnDbC2Knk43cyqbJFQcg92JTfXE",
  "key21": "4UGJoM3o6UXxdQDLPqL2s3zEaSyVCWa8EEg18G2p5gvMvh5iyEtom2GLqqYQFpvSh8xUKv1w73gehfGJnpxhUBub",
  "key22": "RFX595odM8ym2t77ip4jR1TiAtmHiNvY5uwGH2rRcexmieajix3KDx9mwNHB9b6ei9zfuvJ2d6ENNyNKqTJJGUG",
  "key23": "5HbwKPTCw9tMSPneupGdSi2p9Ae3cQJDPUhVgZdTJEqBct9LGGhPBSX6CFZJkxSKHbD7FDfehjtjd9Ri4nzS5xaF",
  "key24": "2psHKbjWnkFWAehSGiGzwjLDhyWuAbcrfm2yThDg8gCFu6dCHb214gxpBHaTuQHYjCtf3XcUMkXP5Nrgvqk5S1oe",
  "key25": "bvBfFtTwGdm4HJ3xTkhTR2ymoEncQbxEYxUofGFy4zAifzoYBdzneopn9h9oHpk51oiUBLo2YAoxniU7YV3vJkx",
  "key26": "3yDXX85HfbXcSDHo2kZhgLBBsy3J4emTbTgVRGn8z7eBiGJ8QbqmBZiwBXXwLHGBYYPEnWvrYNmZyhBFFBXSP3xu",
  "key27": "LNZp9xXMNbNA7iTXKDSnJzJr1Pm85sT3KjoKv85taHoC6Ucov22x4xQqkAfZBy5DYW8NMhCKg1jHp5hBhj8oinw",
  "key28": "9Pmc2LJ68vkaitqs17SnJ4KxeepY2b1duH7pKPFSHCdUm6Htt5CpbG3pvvxgQsr7SJnimzrHWYQywNo4vDpHfjv",
  "key29": "58Q887MjmJW1PRbFbETatheeKrktju6qsdykSwS5wrkh3hJob5znMpDJJyBqNJhioybyaVczdQ8XRcxvRoNuE6td",
  "key30": "4toWN9FGMRCouY8jbdT6UhbYSCExYqewxsHoNbaeFKbV7coCz3NfCSv9RTpXrJ9eKAbiZmyNc4fmzvRki1X7NeQs",
  "key31": "2U7rkJVdyqwREe6gqC85W2yDRXo954hibzV3Qw85XADdcHUKMdE4uhQGF2EsPo7myWNVyeihVohvjrZXVYZJdXM",
  "key32": "2LRiRNF9YGEVNgcaynfVNnrWPkfi5nKhUgXCJTQiS4nDu572UkRM7YDxZyxzQzfDfGs6AcseRBY7fTDmxPsE1LDM",
  "key33": "2zTGGv8JKSVExR5kFGLHbPZsCwrmfbJA1r13TAFMZMUoQ9djVrp65urZgCWDJHg1Jza1Sb2TbYcvcoxpBFeRkbZM",
  "key34": "FfiWYHsvX34G9TYNUDbMtFrFzyotK8386EAare1GECuv7sikX6Eeh8BZ4JzDXo4Aa3kqcQePMeFA1PLixLqRhTY"
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
