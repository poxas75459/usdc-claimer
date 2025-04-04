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
    "5UKhTdUsmw8Pe5hFjcgdz43mnZw58tyEcYtm3XxtDaA56z1Vyj7XjLwtvRURxnr16yShDb2aHRRXqxANoRZq9E6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvWHNHbUzrMLiWWyrCkqqr33ymD2EqPn8xexh5zhCvVDtFkTTtVrCzViQ6DLXn8dGd9uPE8o47x5t7dZHJZktqT",
  "key1": "FTQ5yqm7SQkGdbSNpvge3oQDZ37vbyhbaPnNiE12U6EG2yUTg5Eru2fk6MDvvZV5VQer1BDJ7h43SwkXrjDfWGi",
  "key2": "4kLJpmtMgt46kQckVK9aBarcBZoToweyNDWsUn2Ges67KU5gZSHdpTXRAxxtWcsgAm6Vd3sG7JTUa8cAtEeAqArE",
  "key3": "4mSobUAef1xiEHE8LuPmYYfzuVaLpjmP7Hd5vp2VNfPnp1MtSY8ziJeCik3AiWRJAW7kp8iPEKYouptUZvHkoJmj",
  "key4": "5T2NKhwaAYnuSmtLfrMMwqoWGZe4Hvg5e7t2XB6bNKARb9NhYEA5dUTgZ9L6gAvLCfMLffqUvU4JBNR4nNbDiXCU",
  "key5": "4GAwentMC64de7iY4xwWiKUx721pyKHJrbNfwCUUSo6ugZ8jg5eCdFhKcJc3kC9yY4RKHGvjnewYsxkhSwGdXpiX",
  "key6": "3ovshFR2YYcSmuogukDPAB6XiFeT9gmpcENvBE1VLZKHMY7Q1k16C4RgXnGekmfLyJ1FWNovrgM8xrp7R4xG2RZq",
  "key7": "5JP82YoqPG3g62LvtreXwyYzUdDLaTsfuj9TqHpvLUUi865C1W3H3CETMqX3A4CrScz2J3dWLJbeoYdpKgiDYzKR",
  "key8": "5rTttmc1UfvZhWTdaD2UieUvh6LKyT69h82m2KCUfztG6FL8dnDgsjv9B8gJESDr7xzWw75mWRsNxnNndyKuPAid",
  "key9": "35GrmjQj8LxzjLWfWaTtBsJuJU9UjnX1uw3h8yVSX6qkE4NRWqN9DuiXTirFZh4JLcMXZZna1vkiVHe6LwZ1i5h4",
  "key10": "2SyWvDoZ1dBFaAK9W71zR9Wr2NHPKPGJx52HsRxnBM8DKjqdPJdCj63iZ2eRs8o3nVYqaeGs2yV1xP6CoXYbU6z2",
  "key11": "2JrUuCpyfS1PtDrHzpe92kZtCHqYkHSsgSvoQuJGzmfNyx6wH6dnJYxfXDx9pkb18HFQPZ8vpuFVSK28MS4ZG19q",
  "key12": "2igVx76y2H6it7WGuEY4QUz37TwZYCwjPgg9LG2VVmrqtScfZeeTTdmhspSC7y2WppuR5NcDoMEtmtDtQ33KrJEa",
  "key13": "fNKiCtFa7oSaYKfq14UbRrQ79D6M1iyvwATuFfcYNfk5eQsRKsqFqN8rsASZxbdth6o7tM84uCLyATqk5GmoREZ",
  "key14": "3H7EGvQCsibG1fcyHhRXwd7vngt5nXtxv6Z2vG3LDTCvWScKWMKF2b56QMnjRNddHUCXFph7UDRCecmHUnQaatNy",
  "key15": "22KvvZSdB8pZ73Wh94GZcNtCpU1aJeCrzcxXU9BKw1ucxECHboXvPKXPa3KHs8Y1SBdSyBSCbaxR6q5UvauwzPMK",
  "key16": "2nNyiwn5mEYGdQ2W8ykAGYygTyMYDcqzmu24uARD2qGHRQaL7r5hYgvg87JGJP2nDNq4wn7GWFcXwJTgTgt8JosB",
  "key17": "4tPxK5TK9BZLiKZnF5sW7ByRxPwsGzgaC9FfDtzmximaXZKFAcTneEgmCiNhhxzTPVrptCuBxX1oPwPaa6jw3r3o",
  "key18": "3P1fBftu9LCHWD5XrG69X2RerPFpQfAu47GcAdfgVoCeA9jAVqaw8gaBYvSmrKPQuiTcXagA778QXscrGCajHNfJ",
  "key19": "2y12NfNH5HNpJ1NzaaK72QtYfCcZgcCf2THVGciwRqh8Z1pE6s7uKvv6mkwxh6XiTdmtEFXijuEHQ8zdw64n6Umv",
  "key20": "2W9jAATCT42Zfig5JsiUnBQx75G4S5zH2iYmfABe9v1ZCrfQmsRCg8aHZWJjzMvryZPpUp9CUgtcyNAwhz9mwNgp",
  "key21": "5RjFM4Zww5mmvNmkgPMmuE894u4YojiLYd2jguQzuY927uEgbMAPmvSdfdDEFRKEVTzSYrQoFNfPHJi6fCoj1eVY",
  "key22": "2AdgQUi2TfgBVknXYPqujZs8xRP85Jj2Ebod13jMUHGDvNEVBnfACPdFxLgw3tsSjUH2vbCWDH3wDoHwEZXsSYEb",
  "key23": "4Npz2DH7J71zsRwPfsr8mG7NSdrhLntRFcoimkqZa14AGnzxTcepiEaTfehdg8NdrzfMNgg1TQUu6M536A8aQmEW",
  "key24": "2ZoeQFUYwebSw7Kyz3PgG1uGZQSEpeiGMtcqoz9AbLXdBAFHc38UzMacmhJXZkos5kWqPCmYMXE3YNVshTnjwCBN",
  "key25": "3m6bsSUhPcdTEKAY8AKyH4VqKnogHhGsZ1WnNDXRjYzca8nkjQSk24sVBBpDWcJMa3CQaC7TmRUQtCbtcWGyiu5S",
  "key26": "PpLJhLSHtuhMCzCH1Vu6rSsfex9iHP4hTKvrhjYuisvBYfVgBzDcwkHiPyk7w3RL5SRQVA7Mj7A5S9kxRzY2RB1",
  "key27": "3NxczgajTjiH5isfppaVNykQrQu4oQEEkELvqt1ATg3e1SFET5BwjQfxrHXFkeiz2JgpN9o5rYzL2zvL3BqV6JoK",
  "key28": "522QbeQZLs33iB1DsgFzLD4R7ERARek2zg4EmoKDREBxor7of1m6wspEjAZSFw97HJ2S4KYPm1K7j58hTUcC8yHK",
  "key29": "4Ph2jf59ScgVub6nCcRBJEQE3joCq9cz2jVQdYHApMa1nUXwobeZxZ3UmS3F7VAYBw7wcDmvuXMmmgFxATCjtw4j",
  "key30": "4sDgNfX6iweRBt3uPM4iyzcGD8A2HrnePt3EvabKvcis6oJoEiFjEezEo76qcXc9gbrGRppQevVKis6pRmYT3S7Q",
  "key31": "DFoNnxE4wffeQ3rfQEYpsQZibsFeRiN7RuN288xgYJ4LZ6W9abyhFiQGUWEdkVRps7qiN8y68U8jVJPD52RotvE",
  "key32": "2Jz2FoefhpUjFgvwHkZUWPjUWupAznBgd7EYmG79vVq5ZSin6kYmasn2yptFrJTV77Cwvcwry4dpeiz7upj5MQji",
  "key33": "21nFFre63ij5CBu8K6NTJxp9QxyZBxi8z95RQZm29DkBVViifkmJMbcv46TMj67NXpgijsREGa4nLeYG4z5k15yZ",
  "key34": "5WLmbZNnAXLC84YA2k9HXPAQRBnNpwEVdsACB776EaaCbY2LZJcpY4YRGLMN3udZSznxKAYD4bi93PWcLEDoYEoz",
  "key35": "3Aes4TnHA7LdKbUQECKCzfMurYxa7PeDKMgZGepnFs8jTNqYQQWkTuUsV8sL2zxf177tzxQVcsbgZx29ZVJv8ipQ",
  "key36": "jwJKLz6bbDNLvY519xB6QWXL1WNQssd777aJDeKLVmTXhJWSFJushJ6aofTpSbeQFsg4M8iHHoKsDbNTkYrq4KV",
  "key37": "UVsZjU1mDGcgWwEwGqMx163pZco8LGGz2QXgb43ntXMuHfqYzxVDnwEXPXkuDjVG2KhrPL2VnmVnhc7QQHCahsY",
  "key38": "j6QoohmYM7c7DgdoLFFUx1jKeRW9NFRAMcjTQgneButHeRuhEmGFudPEmK9HpUP8TevUbQUCokkGnEQwqKGgPtV",
  "key39": "e6DbdTyT8bjezhbHD3QQPRcV5RnSMu6sB3qD19Cs7fEyoczuqf9Ge4RHnYzPwRP2x7PJLH4vbg8rkzp2wHbAMDa",
  "key40": "2oPPK3uX3DPKxGRdQxw64mSatsxyoSuL2Hob5rPYUpDziZHxjqRxXNBkjM48jtGZiRhqD7Mgut2hqyN6sNkHvEPa",
  "key41": "42PD3iYZq4ryDnAgUMp6CMe1KoMKVqqmrmhipcDRvNs6vjRZo4gUWWLRPpn8KBvDdRpw8PJvXBHtLHVgz5GNPDbJ",
  "key42": "3q3Lf2QJJnZ7VYrMrHRxB22C37KWK5iEmh6ZTpQ8YHL4x6sFQNknraYSh6PdeNepDowJMaRsgg6B8ASiG7kn8PUn",
  "key43": "3W9LuE6H6obfFbXJ9fJHtSF7V4915zaP1LHxBSXZ78Touw3EozywWGfBpBrTixkm2EpbpNw1YtqBJkvgk9nUaNXg",
  "key44": "4t6MooYvds3fcM3N3QDZF3AXCizYd2JgoC6ci9VK75HsPZE5WMgsH3HFQv16PUGUHyUjABHtyUuLx8rfKnf4CmW4",
  "key45": "2HAxkRNpzZVTgdQ5jgKEcY6dyKwgy2sZUDmHfqjZiwuPHufYppdmykJPSPssXz8yC6rA82Xkz7sVR5Nv9mKiDcPr",
  "key46": "5TNBdFuJYNq5FU97YrC5CmBVzyvPDccD6fb1qDn6QqsBQJTH2kBr1PyaJTkUDj2r8NdkQCFcD3pMiH2gex4zbkGw",
  "key47": "57PBJdL4iuwPNqc2NWioNpXs7p7bTYkmBpVeSY37f4eMdFm4oC9FqeyceECHJss53sd1rtrvKagowUfgFVLZzcWo"
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
