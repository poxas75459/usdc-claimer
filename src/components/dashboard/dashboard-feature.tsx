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
    "5wfDXhcDpRy7MHsjxWkKGdp1VWsmVrvDRNahLNwGV9Gi4VSapVRtQowYhgaRyRCBoaspUWZ4z5sQ9aGJbyUbpfSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJQvFF9Q5UmfVGZJ5NtpKWW1b9ByFJNtB7LFv5zfmDVumjziLF6qeLiXoFxtKuHkqFqZc9GNDVL5Bdatk4kY7uN",
  "key1": "2ZkkAzaoSsB6iNozXZXva15GY4dihQoED41XjBcmC97ZsXe4HFYSwwA3sJddn8nCRKPbcwRzgSMejtRUdcDPrzhJ",
  "key2": "5aQaEpNF1xoEVpf6SoS3GNERBN2MjrRitSW1DaEVYzmt4HCDpYr6w5jz6bnowqssRvGb9KbSUHh1hs4j2zZHm692",
  "key3": "5PzhiQ5AW56AzqTTEWnpdF7JM5x7KHn6AmYhJH5dDAfLudJ4uPYXgaU5Qn1tiXesKQr8yjmQX194CBYBJABmAQMx",
  "key4": "vyCtL5D3fhciR3Dot8esuQSpC4XbAwtiZPgsHPM3FKCPovYWCtFVx6r6B1RiyJ15GuGoYLNGqoBuJEEh5UF5UhA",
  "key5": "4s6q4sq6E9ocgT9HDQzihXJnpTwaouxWpoW6y5aaWSR9G5takxXBxDtumD719J6gRtCicWLJu4fxb9bn8C8DJvP",
  "key6": "1HsWfK3ZAHaXF7rsX92LdMzhoAVENgLC677vuJZJoH5YJkeMdXoWn4W7TwPcfGjiCK7zMYa1hehjtgGvjUHSpGp",
  "key7": "4XRSyGTiYKqYoQsGFumq8qPDXxS5BnmqUrzfSSvRtKSRoniVqEjKDSHEXKA4QGGcx8viJWLsjQqHgiApQTC7aX6R",
  "key8": "5kaEAnE7HVkngUS6eC447KSVWt7rYevPRDLayijA3PqWvte1z89Nj7gKpaxwsb6R6pJAmNj6MknxmC45egAT76XX",
  "key9": "2BsnfoWLvHtVa1WEjEND4FFWC8ABDHJNgfbQffZqrPiaaddYvuxXxJT9wKP48QjRzD1YNwKorqvx7Cmy7wFsVsy3",
  "key10": "4CmBitMmSnBWNhSb9t2KeUUTDfCmai3G7GwsmGfhyUeGH6FHetuMyTWb9Kf4U8iD5cEBSpdZUon8d2L9Mow4B7pb",
  "key11": "4RaSzofY85E1eK3kDpwf4S2UdxdpKoaacSzysvyoexdguiN7WwocXrCyWPS39TmWoKbcsUsH1ESk9sH5rZ26YpsE",
  "key12": "5QcUEDPfgUiXPRg1SrFVgDXNErCSnyuTFfmM8JWpGZ7aEgHtjhX73jKCwbk4D1rYLfQThUEFJPaozJHKNhxPt11G",
  "key13": "2J2q7EPnHyD86HiXHcCDBeDoZ7wLmyepAL7gjoYcGpm5xLXZ8jyceyL2PeEgS2yeSd3uzk2UK7zN2uYWVLfoNhAu",
  "key14": "5HNKKd7no8zaJUz8tHxyGrYd1LR3ohYBHaZ9H9NvnyV5QyN34BNYV24ixbsp22hpvTMf1Cvq81PgWzy9otbk2znL",
  "key15": "fH3X5KgrNxPhvdzYRnEU4K7W9Jys7i59D2qgXsDD8cyvL1mujUwFPwsp5iG7Ag983CYjE8gXRkTtuVHF1QXdX8V",
  "key16": "2CDunsznnUFqttY4Sdg764PmuW7CHMEMaqovQZV4GedKZ5Wmj6sao36vCn7ynr5eMd7Xms5b6giVKpfkY7sLC3Q8",
  "key17": "2SriFsAYdNCdHQFHws41a35rn2EuBMCQrTQaZamcUnu56MQZPFj4iCRoa8x3an2kUkgnexE5b7XBgwzZyXiY3p1Q",
  "key18": "Jr8zRrBL8fUKuoWb6dduweNNFtsRqta7rC4QszeUEc4SEUSnTUsKepLAH1mH3258Kbim6PGBASZB2otDaSmTRR9",
  "key19": "4S4q5KPUe4qY2awy4zWeap5TVipT9Frf4RT4L3dKJJmKAtZBJmAwY7uZnme96U78ESFMqfM7QwwDqyt7htJhZTZZ",
  "key20": "5UwEG9dapsQDxnGuxsMSozvkDmSw4Ci5JyocF8QXUSPdaAfvAAuX2NR7n98NxYBtSJKKG4FPEJxoFxvJJ6fwjxa7",
  "key21": "5nUCaJDLDYAMDcDfGQ4vowM4ZngDaZyMGLRTWfhcZQp7EocJdMzTCirggN5Gx8wVrkhsAX6i8L5SxCThQ6mFr5wW",
  "key22": "2ZLP3wNJBavRactS7Er6knXN2K5yFLZj7Ks1ZsqHF6fG7VmDQ6gCpZmAdXLpBtsBWNcWL1qbChLtYgCbFe2GcGBg",
  "key23": "5p2fYkoNWfSXKdZku7SpBrzbnHyZK3mMy9JUWEF2ULTajjdKsx1xypHoJiBuwJPMAywiFan6hQcoT88VTKSxbAo",
  "key24": "67EnhzJ9h14EUUDW22MpJxPEaavFXwrjmbxhDUeBBQtLRNDyijwiViv6VCiew47Esv517BefUQ4jdsTdXYzDfB2W",
  "key25": "4NzoZVEmXYh75QzNgrPXWRFnqm6L3snqfQfXLneQbqDeTApBK3SmvvPiCXowQzzKNoF7tzToPqZgWGYyk3uAn8Mx",
  "key26": "4RnzJBXJPbSYWXgWWg3K5g9PuLBA5kVnCxjhsnnoxVHW5ePUQsKoWWGbCT3PrQw4G9AhF2USTAfFvYKMjNjsX8W5",
  "key27": "32fa7RxxW9rv2YfAMwBLFnP2RvhTFZ7Z3i82VgTNpwg85qRFZHSqoMw6B6BeVxHfeLmAL6LP7BwGirVWZoSYYp3z",
  "key28": "4UiMDBrxhj26JgQ2aTdRsSDCkTHURWikAz5FKTFweVCoqvwEkqerw57Cue1hTsEieZfbDMuvMpCcDsGuEtkhiQBY",
  "key29": "62EwC25VBdrrCUEXmk664RXfvqGFgK2SGHuzoMmCLFHzNhoWFd1ZHUnBj2c7JAdA9W31WEwHKBCTSdDjGhQpcxY9",
  "key30": "5DkQYJPE5pmFWza1uDiY6J893gf7GLGPdYeasvzyuTQ2xPgRCDCBHrqsvhVNLgVatqKcP6ywRD3yHpmcbHJ2v62f",
  "key31": "2Eo32uznX8rrUQCTiaGZo1k7UXjFZMLAdkKeAg4YLAywVXwZcWNmLaAVzmi88BChd1hxL92AdTxC7S6qnQb6Wjau",
  "key32": "5YJxrc4vBnwfknUCyJgZUKp6SDz2SJanF3xG6TpZfe5sntG2pmUgwjaHkxL1ugrsiUeFHjZG1Hy4muWbNVrXQus6",
  "key33": "eTAJrxofrT7bQJVUTVwgcrGnt8Xd7sBSH6UBkxBcLrSDhUzkqT6EXwHBYT5gGUSp1nPboXxVfjvTurmh1jxJkp7",
  "key34": "2jZnJMQ6GuDKkgZeuqBxzvqZ8AQszg2S1LvMfLjmVY5u1QoS6S8XtujAgRQseRAHjTsczUJgNitfvUekXgSghHYq",
  "key35": "4ZCx8twmiRdiw2r9nefKAaJdK8QYwV6S2kWxtHHhtvpmAG3R3hP2yiKtEosFf5UhsTiUdwvax3Zj6ZyxTuKKaupp",
  "key36": "3GarbsoF1oJRA6s6Wn745bMfkq9SJ6DC6N4zx4j3gp36vqsk24dyAZMNoJfCP8sorvxB574Nhraa5rQfpCJDHHy7",
  "key37": "4Fg7WZeJyZVAYov6rXPZT8B1Q7NAYDQb3V6jBTAFVHUUuzgJLgt79q5cdSMw5YbykjJXRQr8cEd9N5JXvA72hS6A",
  "key38": "55kjVo54NSe49gkTUbbwYmkodyHM46ci4BBBjhZBdivVMBAMQDcMTMoHbLG2DmC2RXt88eVEQoyhjDajkVc1B78D",
  "key39": "4WXJ2JvZDgL8bNi2kbNCtpacnRQRsjTpWM2h23KLJG6tKGuqruKY5eLju22NYGb4b9ioRd84MVZGjJ2GcESLsf91",
  "key40": "B7PKCueHzJxSLRBJJFneujQ4eiUcZVg4bFYre5TzhZXEByhgQ23Jx3zoo1VbFsUcKKaL1h33XhKKiMC4HjZD3Vu",
  "key41": "LrXD6jGPpxvYJRjWyKqAYMHjPYLBzHT8bHs6FDUhptaMfjbbjWhMDcmvmP8x6bxhiLwx1agdnJL9LfRhiqek4YU",
  "key42": "2b1GunBCkwRXHCzUW7cRgjPTgxqkP3Fx544T1shfupLeZbJNDqBuNPTvAMid4m6wNieUmpgWnJUGuhEBcKTkXFGx",
  "key43": "3VKJyhkuuXuH5rmVfQhsUtyMrVv88yAqdf7jXD1zYREHYgPZppfrgxmAhkPgzHTQxZJ9BiJ72SdrBs8FdsnRXJUd"
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
