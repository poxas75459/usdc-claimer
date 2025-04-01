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
    "4NSmMe2mFQhaXKCLT3sDbXJtJLc4rwRFL5JmBLRT4NyU2hN1dbhxKyC2qjcoqzvtd4jZeoBDQou3GjDffQNQpS6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abWKzrsthH3vXN6CXY4J5pZR9zsiDkJ3zChWKGFigzKM93SH9SbavWxzAShiietANGVLbkRTSUdzp3APpmAu3kR",
  "key1": "zLYi2Kxg6ZTjJQcLoAqms4RoWqrw97NwLjA6nhWJczS7WRsZdgHr6NtAhbp2Jwmss2N1Qx9rhHweFFkK7WgacrS",
  "key2": "4Vy1tmkX4Dh1BC9QnDpaFvhYoZD2hEjYRX29FvzhUGyY4jA4x33ZoCqoC8v3yLwagi99mE8fpkYMkEV2d5P2pp8w",
  "key3": "5kHpuWbu27tNvbc7UCJ7eKwByJZyyh46rZthchcc73dUP5iHwiuVHxMdF26eJoj3ye6TkxM4nabk2ACuEcpKp3vd",
  "key4": "3Bnf8DiVkyFWFQAdbVxPPR8DkKDfBRC3KTuXSxKHFVFhi2zcnTiWyV5wPvUbM7NhqM8zwXoReL7qb4gCJVSgdTv1",
  "key5": "5A8XsMyk8rAwN8Nh1j6nefUeGBsrKvzy2LWNtXmyPHQTALyuym9g2ALCGA94cVBiUR6VQjHp3uPAXq9U4SV88tr5",
  "key6": "NGyear4hVtR1NEHV8r3ahqLcsqefHMpbZBeGuqNkpHJQNnQ7oUaAghAA5tumJkEvvVaayxZvL7CTzceUyrfUb8g",
  "key7": "2yTFpmTVR1MH8equHMoQkfW6wRFKQQscMHGWuFAXjZb67WW5W1cXc8taZV4fQNn4QQ1KFoKTSEqoxj9K4udy8tqu",
  "key8": "4su4G8eX2tbZVirp38k3jrQwV4dLTC4eCxuZAkjbTpraH386G6nHDhAwmnkmQqp9XxQ41K6xcBLbmgKYMxoB8HE6",
  "key9": "2VKd8LUyzZ6kAAMQQRHxoaw228ESkk65KNRx3BuVa4SLKzFZsidbVVf6YyCjkFDGHa1MMGZe2ndWCaBWoH3QCQJi",
  "key10": "3SdfgfxHydLJspRVdvqv4B3oWRanz6ax7BAn98jcAaZg5ETCxKqBP2Ptp2R63fA8WWpsopfz5KUDaEX1yEKDvKYb",
  "key11": "2GDdjQQwtHwQiGg73SDu7WomuZafTjxrHoJYWxDWFPUESb7pkpcHghTuKYJgMt7Qnx4LMSpc8Rk9vxoeXvEuPgzZ",
  "key12": "3PXZtnaDMQyZxq9dNLkHHWBq1m4d1em5p3Z7A7owytFzTeqqe7Bxj1ZU3zsUpKtZPvH8ZsTPNpLUhwEYRMTJYME2",
  "key13": "mRKXRH47zDA7mciW7BtS9NZbgLA3FQ2Xaja7gg16or8pExy1YwffjfWLQNdoWpN2tf3jWv2wp3NJqj8qi2CsKJR",
  "key14": "52EyPesxdhhJqxTgBpM8Po6yN3zvJyatiJ88p4EfvCCecovBuVeWQhVEz6tecHXYRN3e8LoS4CMWFJr7pYuM7sAb",
  "key15": "2wABwcPWtUHewe9N2PrjtvCXw8G8so5wihP1nnaXETknmiC1wP9ANCJZUikUA6brgccKN3w4sC8Q3dDuFCV4ry35",
  "key16": "2MkmX6EFXMjVtrH8dLyJqbPmK11rtF2nvvkerLr6UocqfaYeTJ2Mwanw1o3RYEv1T8J6J9t95KPNUt9syDsu23VQ",
  "key17": "5Ya6jqtDpgZ5VZ64hP5vuHX6RRRjeMuSLR3kpmaYsrG3cwFPmWnpywkX7Dn9P9y6EK4XDCZcnfTTMRTe1i9vKx91",
  "key18": "4TSGAxRr4Lw7nT5YA9pryar2v1R43tX3b28RfyUGSB54KoF146KXmryD2R9Ub3QF3ypFNHkDDdS8XAGHAB6PYNYw",
  "key19": "5hVJDm7ZMswnXzvzEZmRRpCAF4TCRGoWRiPWEDSYtEjSNRcsu42HGsRdXim1ugKEP4XhiEEBKuAdXLJ7YoFPkwMN",
  "key20": "43eTLUNgUJwf66ri58cgjesWCDwWc7fxhGUKsPdQAX3cdWycYnVFXVhdTtWbkG62CBxPsQYc94cQKx9jF4s1s2ao",
  "key21": "4uX31PpKUReCMpqHzFLi6QDBvdHTxtuRtJqYVPq4ytxN4ahrbzK5j19DxTkUqUWrkRLF1TF9xd8suPN39tc4eZfk",
  "key22": "56sNUp5omWKaEGoeSF43bEedPmMEWU8mXbyTLvkpk9znc93AwEFKe78Lphcs1F2Hkxvoj21252ztwxGACv8XLsWy",
  "key23": "5Ag3TUvTE1R3cY3xCJtezazk2JAqoA9E8GRXbFeUSQbnrE8BJvg4YdhERLi7jdt4PLrpYZ93yPMgRn4J6BWJmToV",
  "key24": "2pXurKnVJWVPzVzupMeGRFnzX1WA1zRdFQWVwxbRX2nXGBYvEh5GrjpY2xJzCJrmiQKeP8H9r5BgV4CGjinNEXA8",
  "key25": "2SAN2c2P2czQYJqqwR2cTznnDbhCBb8keW4gjHQXbHsGmqnK6xErUhwGmcFahYjUXSPRBPkqWRGyrwH6n16GDhrf",
  "key26": "nqgRQ6LjfL4RfQdBsnKo3DUW87hfEAzLGY9edK1zF1pptoXbRr3V1t28DfmJkoDqb1GHhf8SNwuaEvEpg9kjMc7",
  "key27": "2Ba5wCu1bSuR3JjpdwjpNS8mU3vsnpFYDUA3KfS45ZyZQSXY74tpsCy68ASacuxsXxwb4LQyTPQKCV46wEWLPeHt",
  "key28": "32zGkdBUUEKRB3AaK4Tsv68hugRJH1tkoFuzyV6cydqTxQrNxBA2MPCGZvABUXowrBmA4uM4UepxMEbnBaMB6Gfa",
  "key29": "3MvBH2e58zC34wncqiYW96ZkiLomHqBykSRBoTDvbHh5p5MN1KA2CLwHSJ9HQC8bPAA9KWNuMajsrxnUf8caJd5p"
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
