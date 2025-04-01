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
    "2WB7UY9FEuDEyZe9wHs5REPCNu3ghTpCjcyxmhehRYnF1KbMVb4TCoUvceAgLjpwYoV8yoWfXhMUVoHmckhczk8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZq7kPSZQtXXUYgyWXbEeNwE79oJiccDwBgCaPnhJpsNtBvCr4Atf6QLdLWuR2B5t86SdpjtcQCexse6UGASjZP",
  "key1": "34cuWs4NgaPQMXxVPg1Jgj9YPQKW8tWj5wuRnqxmZKgAcmcgdwP8ZRg1wK4J1QJBqzGL6o34iVi1gZ5Gx3wN1qCP",
  "key2": "2zrNSxYR7DqjYWAMBfqJ55TQBkZCCCPkAQAxicy4EGkGFj872cRKowWyTS6SzooSEx7bhKU2ucouCDCNKxn98h6W",
  "key3": "5X8Wwp8kcNFxuKAJoaK4iG7f7YeHq3wsXGFb2kuHbU8QG8MjvayRgSPVGPGrS8e5nz5eKH13pjbmBxzHZEBskdnB",
  "key4": "5VUQVhDAQvELWhBsvRw7PWogMqoyG29rCdRnMmW4yeqnXpAbLPgNaHys3mv7GqZTCqB9LtL6YcebubrZFAbzTcoU",
  "key5": "37yczRm1UnztpQiAvVabatsxTiFVkURE5WUjmpuPcCn5cBUfavvYtGbgmghnsteLNa76LeRBNoRMJ8nnuhp1UrMY",
  "key6": "97bpCAz4VDUMGd7NDt7UqecvVVCgUe8bEJgAsDxF5FKaKGJ4rjgg3CissPCfTCKLBsbJiwFrMpAGFsKXePhLC1j",
  "key7": "2ZGm8BSS6zuWy5WJ3oQYoShRuChv9YbGKk2VKdjCHKbyZyxiBCMFpPmoYbxpusHYrpX41fzD5iybG8EvLjxy2hkV",
  "key8": "4iamNNCFDft8DxywZGa4rPp4C3SYapjzkzVqb2BsMreXJGiw49n9t5CJxAuE4pdWjcj51KXZxTXnDWgM1wEaSbdg",
  "key9": "fmTgq3nmYDdv6erdxzkqaWWCpbL1TzS1Lftw92KSghxNzdoaPSijeMNxbcZCaHk9nmfb5q9TN9Uq5sA3ipX1Pny",
  "key10": "5vhisAkVfZdUBRdJ5BkhRwknqYe7pQFTgudp3VdzRJGAu3dxcNMkbUjBq9esW5S7LM5XgU54L9m3feouNMQRQbjg",
  "key11": "4UxnYt4ibpe1eqvznmTVRDuxGJv5xWkR4voQ2VQ5tkWphndEW4TWfw2aPjQXh9oAmT9kcHc96u45aRxNHU3HpWT5",
  "key12": "4iwERyEu8HoaV1EFtcHq1XHyhjg4cVaPRXANNYTNVqorvAHS35bLs6cZu29Xz6Kt54weUVdTaL5VUiUvzQscVudt",
  "key13": "36eqrrKL7rfJUJWgHgW5ZuGetUmUUmAGrdNZtc3JvNRLAeoK6kQKF14b8yq15a8c2cqQ8jpKb5ZVjn9eUPH6aL9Q",
  "key14": "3ZrGJZamQtRFDW4EAQXAuPHh2rzZCtVipCEEfNfYbJmbdDgSTL2bTRJF3VKbCeWo5GqXHTtYxo5YrXfqJJz7tgTV",
  "key15": "aRcBrN8bCSG74mkaWhQNwVJXYionS2bqjz25RVBsGkKWCC1bpqaibZWNxBzMRHsBdf9xCRrHW1d1oFHYRqNd61C",
  "key16": "66MdS2er7gxBHHhMPpbvPcLy3pVYpK5oohpTsFoMK3N24qnD61x5coNe7rGyjDxftiDJa9ouPZbgx1GB7zRe9QUo",
  "key17": "2jtLL9mGfQZFdb1X7t2hTtgMAdQCCEXAcsKk4mxTbRp1GMPAhB1ydUPvZ8LBGvGCTpD8GCenU2KvzPoAydJco8Vw",
  "key18": "3jBvSpGHUUg1VYcm56KTwyabs41fJ4a7SQgFGAapMWhfYEzsHkdAkEhbsQS2jA4GL6Yzkk19Hw2SYWkppMYMU3mk",
  "key19": "2jq3j9Fsf989GAg1ybJKUg5DMG5FY6xFqkB6LdWZesbfP4dPvsgSrhhrsLAcWrYmK5yWXA5bCAzejSwzeCwcg6Lu",
  "key20": "2UkKMsP19S8q95qMJNc7ofo8pmjfS7vbeqoRmZPEDL7oafM8ng38ckh38ne8rrZnYzAfvPcXZ7SogFjakwmSCVNa",
  "key21": "722FzxgAYTtCQmn8DYKKEZcCsSSmLjrCivn4bTSxb4xhXmdqvZ5cuyiDsqDooJfssmwFChJ2TnLr6VCbRZzaA6B",
  "key22": "3dcYD4UE6muwKCcgSWcRkBemkKQ74F5ixnCysNBqmdeEvAFKE1UwCPaTndCJzGdf3xE3xr275hjGSrQKivBvxGY1",
  "key23": "2yhJ7Q417UW56m47VNDt3eFRbP6BabJf5NGBm5TrUJwWrjGSmtqb43P5z2bcX7kQgoJmLvJZH2XDwX4X2vEt6Sj2",
  "key24": "4nzFfFpMQJPsABHT74RFa2CrGb5T18Rs71KnbVbc2CWzcrjBxptBmnAUsrfUZFXae9vBMMSxEGYjPKMEA7GPx2Vi",
  "key25": "nPszRWJw6KJzTbVPRaV1Erte82TYfqoCNwgdvrux78BnSP68d2C7Fjf9Y4qiGEDhjDLFH3tWWDjhzR5RuqkuYNK",
  "key26": "3dDY6iKA7cFJHF3QT7mj328Jrf3L4JdDaMFjKgLnssB7ogM8svZfR7m4ypvffqiTPP16XjmW1VW98sL5yxhebaEW",
  "key27": "51GjLvRLScVGsGYYkcQXCd7uzKBKYLb32eC4fbR4H11BmXMZzhRiGtmFb53ECZ4jZe3YUeZz37GzP8dnNcCT29y7",
  "key28": "5Q494fEsmxoQe7hf9HWjHkmTdeVk1WurSPcdzGLDHnFKCLdzfmmccNDJ1fEhx3hdDWB1eNbWhJefTQXB7oXk42JH",
  "key29": "2NJWKBQpn4g2BfrfGgAPibN9GjsYnLkqXiDjUB3taeaWjfaTYwp6oU8jVurSVNiVbEwotFm16eh5hzxaYi8RfcDz",
  "key30": "3UQBZJcYt2hYKK626PBkeNDKrvYrFPGJCgrpE132CdQnaMhNcsKRs5HDY9HrFu6NoEaVcboxbDAGGXyAja2J92AV",
  "key31": "2zWfUpwDNuiLVufFb3hb5SzeuhZ7QjooYu3tBjrewiMsVqMTsDYUqJfPHSqz66dhLt52tcu5JXgeDhRAtQPGUuhV",
  "key32": "4AVcb2PeZMqPZfUXexLtzosyu6sJd3PuR4dm4JdS1oauF59QaqiWkG28qV7rjLyJVBjVe3u2WdzcHsocpZxb8nYz",
  "key33": "4NwZq3FoW5zmUqFsrRxNPe7vfv9wArSptQGmBVGRAhRRuSxnUj1duyuxvYGhNdKWkztP9KDBPguti9UCuTDRMQXQ",
  "key34": "4jzZUeiAXTYJPUUKXJAsmBfXGVUJGUbcsoZCukbt8CUW5ejSKsHTU8MgQSrA7LkEqrDGCXTKr4hr3VKoR93gLv7u",
  "key35": "tKrMuMcv5VwCdAYaE1wcq4RMeKHwfwBgr4SoYcALznKahAXbJAExLsMGdVwJg239qkgbnrRqe4TchGUUFU3jwfC",
  "key36": "2H839CNXdLKtQCVgsXBxEmDSdEp5jcJBqrcA3VLKHkX3J7amDoD4gjggjF32HaAMUtL2A4gMRTMuZZy316xBJ79N",
  "key37": "5v6L1F7VoiCsN3H95js5Q6coYyn88CGAY3PEANNy8JyaYWU66U5E7fDYNHuZRfqmUfq6QgL2bTUnVCNTfYqpq3sC",
  "key38": "5eKBRsXPGzeTBDPGqoZuWiwWwc7PbPkX7vpJbUSBzQxhmZprH8CYwvxokGYwPQwsykzftZC6N6eXL8nK5cpC7x4F",
  "key39": "4GxdHnEtDvhhXSbqM7HLpisxCak6mi3kwXv5XQseAciNTdV8KmKx8WqyXACdPWHf3m8prxydjDmiSrVVFw9FkPmS",
  "key40": "EjrkBnbevxnif3notjd2bNxu8iSzLRNo5QcMcqjcS7r5ZDhwePm8Gz515vwJWTXzABraBhoDAWhuKVFMd2RXN4C"
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
