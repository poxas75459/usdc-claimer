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
    "5nUEZgqWKrDLp8rsvQ8wtA2W9PQsYvy85aghfP29oKATzrszeF4SRGwAmhUhqkvLMEJwpnrtGkNRbR7yypvFnpBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LwBL8imKRUydmrVpt5c25MmbhuesoQahvGm6W6VVJ3yaqg4y8SXyb1aSCT99zjw6f7tba452ZTNcgTTEEq8MuA",
  "key1": "24wGxVd8stjGNvfFWC4nuKJkNEo45kW3gNX8hyRk43Z5Qaqh8u2UonPLhDgAKDBrqpaC5hk2fTmdLorsunohv2X7",
  "key2": "3NB2fgSBGcdT2KAMtCUmZSkyY969T2GKRf51ZS8JN5ruscDZvdiaSXrNAR1QUXKyrqcs96LoNy8XgiLaiE5pnuVp",
  "key3": "3LHUHfmnrVfMFiU3PehujDN2CmbDmLL4MUZQGA91bV4CyhcSJA2nyYGisDqBMRPFri9beHqn3AfbCiZSfZuyTjG7",
  "key4": "4NeLmkYD8aZCQFXVQzd4SBSoSniNshkSHJT9hVXNUF9cVbeepbBwkKTrcKW6AuSg5s5ood3kRexUeyWu8KQtuHfN",
  "key5": "3fgYrH9yCUbE16mJ5vj4u9Tms6NYqVQsB8NHJ9vgFHq7UUy8qFij2nMeeWkFbzcP7zuVb1KLeS8cbNNdi2RdKPAN",
  "key6": "4hUzE8Cijx46rbunXwDVPE6GX62h7BFekd6Mw5Dqaoui9MCYe8wx84vrxFV7v36QfdamSMezhv4KXi6qfnYB9xNx",
  "key7": "bKTokQDw7kGQJNvn9KtKyabVrpCSLDJW3J9DaivrKM5qrRRPX1GvciVD97oHCjb9nY9RjnYaXUbJNYz2XrXy84p",
  "key8": "ALn6pD2h5ev9fEaTHNPxQpoQVVP2yrYhn8HsZ6TKL5CTkWpuVuAnZ89isr9VQxELgeRwL81SGk5znmHm5jYeHpA",
  "key9": "4PejkFR5m3CNhpkALGSTxxvnMgymkqXazfagHEsQP8NDzXS4CGW2jZZhGZVJqZXLnf85ngCobM6K9DJHd15n7gAm",
  "key10": "4RsN9o5MqbXwikJGXtF2rkQN7v17PTuqW9BwnGxrKfR2k9HA5R7bCAvyEpmWceb5j1gpB1Qkz1GnVSrDt4sgZWJT",
  "key11": "GEcMuSYzC8imGU9SKx7kVGtpC2igMeUzhtAEYDyps4N5bYZ3C8WsaUAgA5SM5oTFMsN7NTJ1o1XE8nK8YvKE6Ci",
  "key12": "ViaPj5XdG9rPYf2gHbkB3ETZ6tmyUxKA6hK41tpiQSiYwBo7fTxtFWSmFkuE891vP3Zd4Nv4UL5u2auJ6i6PdfR",
  "key13": "3H4KM7w1F1iGKqWb85GZjgjRkBx8YbRtEDWLxLskDqZ151KuWrddpG1vfCdbJRYz3QWXxo5napZAvjg4iDC8WR7V",
  "key14": "2iudgPCbMHi5gWxYCAD3iRiYHKW6T2vLS9mxrwoHytYx1zogotv6Z6y3mP5TXG22UnGJdSecwYz9iuK7xbWn5uWH",
  "key15": "5kBNW75B1gPh2dkQHAhSn3qEHN63CrKUEeFLr97r3fyZFfuZbSaSkyGz2RmW9uX9GJZ375abP6TtSkfva3uxDs4R",
  "key16": "3uQu5c5WGgKrwKpZdGdcM5UAHMRN4EhuJstnc1UDoNPh9zWE2sgKMELDMa7a2zRxZfs6icHRJQ9jC3tBmdDgH2Zu",
  "key17": "532hLGMpbrSLjZVwdqwProefMf8FYkFnT75htBA2vHdfY4vutpPk5Co7nD8Xdj2x26ysTUqM7HMMiD7z8NgJBJKd",
  "key18": "5nHoKL3oPjdXWtANkJtPiPzEEs8AofYqsQupoh7KXXUya5DH8s3WRwhanN8nV8Vw5hDUkgDPxYrSY4F8yhmMSRVc",
  "key19": "3qVnNYx7Kr3ua3jBzc3DS8C7eMZfE4eicBj1VCRnYMcYTsN77z5Qqn7fiS2CRHQHTJwzrCaVMR5Zmij8trYzp8GE",
  "key20": "5o4KVkbXD8HozJhEfWtuKCtVaCNFLsfv7SPVLi3wWvtfmAkL2sswLNXm4vtT7ReuR213QGBvjyWe1uVNiGfvxFek",
  "key21": "qoack2Zd7h3Nw3oSCMnkX9pCUCc6GRTWw3e2aHTAfDuHNYQQs37S9wurGRgsfg5UE3Jzxy7yNage319KX3Eh1Rp",
  "key22": "5cMxtY7fDB3TbyDqX2G4PHznFp6XjfLXqUjDpk4wDfab2qAxTEQknAWEbCGQBsTNK18afSQL7B6FsSiMMyX2gTGB",
  "key23": "vrrZA2MwreHxeoHV55gpx5TcUsitKnkGa8xLJh6i74sWFjiM6uZdz4Nmwy165FnPir5oNPAsNaMRZT5yPQCfwPw",
  "key24": "4TTMgSEnMRLbzWStPyaPsZsqrgBUtLZwCTuoWLDw5435KRGU4nEthuK1vGQtyg3Dz4mJfqnuSTonuJySrmeX9TYF",
  "key25": "2Yu4X3eo7HW6MXWNAAo8uKjZ7VKHcZDkrGcy1mSRt3AVsQg7pk5ansAGyREgYwS8grZENuw159qHGuRVzsqfmgnR",
  "key26": "5cHX4xPCiizgjbK5os1DWMipmNJdZDaNLwQpRwTzZesq4tv2nCK16ZYzHDhSnFt6x12p9KD6hrHgFpdZXk7aVdFj",
  "key27": "354PUKb2HdLvw332Du4JHfGzLcKDLvNqiZrJGwW4akGSnvcGGs9e5pGye2kFDHRWyV7eFsjYJuFFzBEK5vYooyVi",
  "key28": "3fMtepJEGS6mr2j7yHXiB1qsXYPRJB3S2qPSsqzNFbBEiQm5T9eq8kt3LiMPKMB8ts57XXJoJnzWrA3eBFfnzTMP",
  "key29": "515pfHKD13Eyac8oVboyB2zqqNusBZ3D5gRJYoT3jZswvMLL9DUvDatwm7V2DTniE3A7rcG3oCXWbbRnPETUXbLj",
  "key30": "3acrx8diVxT5aMwUdV5sxqnRrkiaG3g8twbeJBvmWyXfBwQKZuxi2FVEzY5cMzFv98yP1ay33RBE5TDEZXayCCGs",
  "key31": "3wTpjLWbF7wnFqVw9xeGhmDoGXWZCyXBjwGE4cPLFwJVPsfmTVGHpQ1dcH3EwE6K2RF73tfX6gVwejoBbvEDdqmr",
  "key32": "2yFih1m4VPQREhUvAYvFnkWnj6VqdZBQvBYFu8RTfgETgUBPyMvPZoJYiiUzFeaG9yE4fen43EFpn1WLydeCtMMW",
  "key33": "YRa4tHc8o4c5BaAbsZvNAWbyqfmyyHGBF2mujUttwXptHipYJsUZRo8n9FBdSQKWPaeNXQ2cFPxPzmVz1GdPNwr",
  "key34": "r4jGUKGoATF8epGUMu4MNtXRTT6geRCqqv7ZyJnGU6bPykxuc8YKuPgFk8o77tf1EZ4uNeUUG8YQx5YSfzv68fU",
  "key35": "2dUCt13L9Mf5xWN9ZMP2Sqn1DbYdeL1iM7eY4zia4ZPRe8MfQSTmnWPcScDLzBCiqMuS542sdCyLDiysYJQC4ivn",
  "key36": "2MUP8Rw9zG73sh4BuC8C1rVispLR1RZTEaA24Yx3KzroSCHFFczR7vRUQAN3J6Cw9bBRo714GNNFhJQEdP9ssTFL",
  "key37": "4PTFJJCiXaccXsDLLNHrndQ7zJptwBZoHny5ZxFLCZJCYyiE2kgLTG7xt8N3ZjqkkvxanzraZ44ffTGudCLjaRof",
  "key38": "5p1jrNARQbQStJpCW78zgp52erd12q99xRj7Zd7Dy9qNvXEiVDWK4Bra5UVuorWvgKtsMyRBxmQGXcrzS53XLqpe",
  "key39": "AwxV52aPQsgRx8gcLZwhBH9Zz33bozsQd1n1gx5TWQfA7mkGEibERJmT5EgRWESesgjnq4vZ1HmCqLwjEtpYQjV",
  "key40": "popXNqVE1vxFQEwbujkYfhX8B8CcxFj6YYjeHVn1dAsq4m658AbrGeRuzL4pE7jrftYbFVHqvnogFXbWZVtho6p",
  "key41": "3vsCfjLVMkrQHxucnXYpuV15WWkQk8UP5Mo2GfwkMDGevspsJjjez1YsScq73XsyDir1MLfGTWVb5RNmc4tijCxf"
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
