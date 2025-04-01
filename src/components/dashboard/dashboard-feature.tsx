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
    "56g3P61qtBd8LmTNkSVJtiWmXskSUDP8yNYZ5FZSx6L4i3rXZCgy2RdZdpZxJSYvMVRvww5UKRtzM2Tuba9fqLM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JddZmTXPLHHgdZTXnA55cCo4vXJXcoHmLJn3Htt641rke8SY5myHwVTwWHL45ngfRAaERYt8Zcc5CT29ZpNUgQh",
  "key1": "2vVTBFP1WMhsKUYFFDMXssJT2jdd68o5Mq7yXwKRkZB8g2NNBtDSowALHeDnG6eE8Qh6g9Hbp2YduM6wfGHRuvn6",
  "key2": "4nDz8oxi8F7zZKA8A6HNAwmXZEj2LHNLDVeUQ61YrNYSo6ywUYfTacPW2wa4s2U4bWxQfiwfEFzvqWkSzwS1ZD8m",
  "key3": "RdV4A7FE1LajdbmDDnDdaZdRXE3HtjmRSaxWwFckuF2nsCB5cbVVtHus3Fau5wCffG8S17eTsPcURN8sWRTFp9T",
  "key4": "3eLQ56mWaykjWPQUNQB3ohvus29HrPwVTCrP17oUxn5N4siQqpMmXLo9zuWqPNJiK8vuHU9LKC5NmNwNGdQSooY8",
  "key5": "5pv7nGXkaArbQ1e25fqEhXLBcL2zdJAEqzuuvSYRnD2NXQKStmsGcSHDsfhi2WJvfxwoQVRvHzwXZd8oY7f6jUzD",
  "key6": "3uf2jwQhhv3y2BxEFtUPKmE7ywW2vNjyYrwRjDpgzoG5HF4VniLF14BgA7UoCq12HF4Qyfok9WJCLj4ixTwZ5msV",
  "key7": "23PEk4gTeTLoV6NyLzjfYQUZAu9bmycbtNJ9WSbaiWaCYJDDTSVh2sxxkVgRP5R5kKZVihQpwT6q4tALPYiYCeH9",
  "key8": "4Qx21nV31yoJDVN86n17yCGAYCBG11bKCjd7fePGiDhTq7pCbJreRt92kwEnQ5Dk47mhbz1sB1oe2G4eifAhnAJi",
  "key9": "3y76KHhCi4TpJtA9CuS6mgWGJJBbqNhAYymohsktth6u9FicKLrwRZAksbsJRRQEiF2LrPFE5kcEB4xBgXNGaPqr",
  "key10": "2LvJoTcxXbnsAx5aVZtfKbxBorZy25NuaQopo5Fvmqus3XyhtLyS1HUhkJcUSDb6GefbVn5PfR2GHUR88N43ytBz",
  "key11": "5tfqxRJio7nenK822k7h29FXYADKmnypMjwk49LiuJTmsmucvEmW1EpaRBV8ofaX1PDATrtSRVMPN5bHeLGa5EWW",
  "key12": "5YqVfGttJMxNWctYYNW4oPHWzvuvMKekZTWBdaHzE1oBE4R2thGaWkQST3UVhGkXQn4Bk4z7dsmEGiAPUgbBzMmz",
  "key13": "3rmC1sSibagKoF3KC1aSkB4uNGZXDMCspYi3jwUgdZCNKru5QMgbYzuQgVSfPiei4XcrpwH3CFRnc2d7moBnkSW4",
  "key14": "4ezstcQAE5z5eqepjYNZ6mGju8Y8pKqAFe32D7vxKkf1EoGNVwM7PdEb5jq2fQA8CrDQ1TyXum7NSW4SsMkDfsXK",
  "key15": "NdbxPEAGKehk8j8BxH3KYeo5FKuY9x2FQL1dPFHST9wzwNN9nhQ7vWnjekGvkqMGhUUh66FXwEYiper9GWgajxd",
  "key16": "5sYQ8pUF4SRJorugWfzhVvAZo59PkdouXDdESZ29EzKFyGb62RzNqM3rMTQ35eZXWkjsetudBu1zDLHQfC4XWT4R",
  "key17": "YQ3DbNPVag7bXTf7k1WLnwrEoAYv3gLxDqsXf3d7DYo2F9zxd5t8gKQa1RKHx5Jpe8DGKS13uxN7HkXRT9VRLFp",
  "key18": "3dhhRtcDxwoFgmj6159261TV4VAJpWho1RcWwWXpMe8ZCnh2KofDRSDzH4Uy1CxEKwTqqw7FBzwCEAb37BKbcKdH",
  "key19": "5DhMhKUVGuFpx2hy1zEybwf7Z5dA3JGMvPMk4NeEWVxundUbAsxuzrxPtn7hou8EWTQB1uBVWhhvi2JQHVPzNbwT",
  "key20": "4iR27ugab1ghQoJwKnxtiWxhpEfEKXEEpSRRaMmfTAE7dh8EvVfZ73PX9xSQAzg6p6jQm9YkKjBUSGy6f4RJoWV",
  "key21": "4dkdLQJtJi1YanE2g3ucVFKR2aLt82wdJ8Lv6gPU6sWojNEBTLy4DcBbKsGCSQNrKpLZPJq2HRNABfExn6KwmN7f",
  "key22": "4UmgZvxaGe4BchHaqBdnhsU3d63z3okPbks8a86KxTgVTT2rM9vHSMuHFNkVACd1gUiaR8dmeFyN5rMnoow7dVt4",
  "key23": "2oRt5U6JirLAugX384AAWg6PE487v6Uzc4brcnm1aX5ukep8ahK2XhDSVSU675Qkzt2zH7ADRa2tKkTAbxCg2qHv",
  "key24": "7AHVWafrHkrDYbUfAbhqUf98zqQqMRBsp6XnZUiswMua1jSxeRuKaEazaqLStDHWXD4zLwaZpiE2wWCFLDrrYcp",
  "key25": "UnBjCuVii8Qs4DMPEijHyKdF4FH1nYTZnpiVF5Hbu4NKHHmNX6kYf3ktDTRu915DcYz792dHZ6pPeyfAZuHZaEt",
  "key26": "2VrXcvyiKtDg8Xp3dxXxQR3JF2o4B8AXG8czpHeES6mnZCzRod6p1jTmmpDcLZS8H4R8mpjwZR3WUQ758QHgoAvH",
  "key27": "5goQsVVzVtCd9NRuytWFH48Ep4E8wkV5NwDWXdMwFfUb65o71nY6JVVdwLyhAsFs2243rinqs2rrGRwCKttsmYd9",
  "key28": "3WJknMxMeXVZksspML8Dxp22MNHf9Ya5H7zVtcsQV9jTTSPnGYSr9ytD8qPmGLL2n11EsRJVuyimTiTzD7qf1jm7",
  "key29": "47VxFcZXEF73xGLhzU5SrCmsksBzNDkoXpbkC2PtTupiiCX8hMb5tTYi13Tch4uhEreoaT9zQcZoiS1LeECCnQop",
  "key30": "ENtubt3qrbn4n6SJmSDMp1GhBuDsaEURGz2cVrBhigJgznYPgGAukFfuBCjPrGsWV9pxufbqcEBTU6ZG6JFVTgp",
  "key31": "45EJjkKQqboDMuHf9gis1TMTm1gMAL87u1HP7zZCZSsYTFq53TpCZEbjX1y6WWuAJzng7fMSC7eZJVr6vEp4w6U4",
  "key32": "knBc8wmYYhFiBXpeSMyAEAwaafQAMA2UumFcUGgzdqgDAj1RkkCMFzui89ehWsZtjq2dUJWe13xHbbEq4asjbbB",
  "key33": "2JuVTVjvEPfBfHKhVu937LX3vgdajDqCYpPkirwHa1GW7uVo2eGt45DJEZTsr2NbyFX6VpnngVkLLaRZ2mgiAiBk",
  "key34": "Qj8RwgTiG7EPm7c7gJPGoeZ8AvsURRTnKQtDLuetXdg7KUcyeFKsmvazoQXStupaZUJaJEHQzt9vZcUHra2ce6c",
  "key35": "53S2cD4FKtdFJDHeqPLebZcPyvuL6n37xZmPS4FQyknhGxztK7ZzM9pDYm9vHorj7Q3dT7SKKR6eY4YDXiY5TYEZ",
  "key36": "2FXP1uL8x8yteTw88hNwKMyMqmNB4YEdWutB61324U32DkdNRTXFRv3tRmxv9ihbQkUtB3KwMVWUjuttSHq3Nr1L",
  "key37": "5Kbsq7jUGppKUCxKoUzkGmSHzXW5n5krRiRYFd2H9L5y8tcSxBWJCugQRL3GvSPU56Pq8PUAbpDn3pzVaCQaoUGf",
  "key38": "31MWBAciCorQMiwxoB9NCxgsH7RXfgY6bLAsZEzex7mHqCcwfxvw5hENQtzCrhtAXXdWUzkkT697CDeatSDMPLi1",
  "key39": "znDKJ1HW9HEVk6j7d1rRDQcZ3YS61AEEm8yatHGjFtoA29Jd8RGWoXuNSJonrDkfBmRpVcdtvM7Nhz1am4aHvhX",
  "key40": "hhDPipFCDChbSZHXbcbRrqwigpz7wCw2rhjWimeKAiu4jhyWaL7LFkcQzxHEmmg7ZkuUjupFvF6XbAPnaf9s1TX",
  "key41": "3S8N8TARoi8mKh3rFEqZK7FYw2YJuLeGRYXT4ggk1FyMqha9maUqXrt2T37cUd2j62nLAtWuz4TMYcipH1MvDGyg",
  "key42": "3tMn8oxku4T3USfjybCHrteCgGdJu8uW8PJVgxD7pf8Qg4VHZKNFXq8pCgvQiAs7DRaGZCwoTz7Dd9K9gUr1NERR",
  "key43": "5NvZwJXEfQ9qBcfz6BaDZJpS2FjukNqw4br4pqMxhqj4DSdoaARBkFJs5Ckr2kKHxEf31TuZWcPLxj9UvnjkrxPq",
  "key44": "2n7A5VSQvw5P1vdEaa9s7M8mwr2WNiq4aMR8tdJcaKuQs7eSU2pB2YvM3DFK5kDDHFLYStMnD9brZfXHJ88suYXq",
  "key45": "2J5gPWEqTDRFHKnWWf6jzhbPtBfzJp5KWkfD352Kc21E84mcSovEhUXFUXKQ49aHzukRWrfy1HXNnvqpH6MkDmd8",
  "key46": "4rTgjHsWEreYFn9VazqqeGtmgnWcG9NFU2RvvAgHfV1vQf47CZVoZcT7yc48oFRjsZuamrPzSwKVrMjtUnAt1VCp",
  "key47": "5eRAQ36RjXQR7MUHTGrbE5BYmgNBA94n41A357wf6tjFxgqUM6QgbgJchKzAVEkjLc4odKX3sutdyK7M4D4fiMmz"
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
