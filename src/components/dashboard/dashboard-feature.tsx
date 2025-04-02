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
    "79yj8MsnpoZ2za12eUUqqovrNUs5HW8zyNDt9fk5txAG7v6z1q2PLnKjtvUfEyCp9TwYuYNEEutWBFKRtpHVoHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15jp5ohJeDzLYyE5FuLKuCqMaJdZppsQ9UukrZYNJQKKErrR64WjX6rfM9vEkT6gPHc1KfKVQmt8smRC3wGcgw9",
  "key1": "SyQVDYShyLWXsESJRer3q5YTCLy6r5ia3BsYU45h9z2ND2toLmccbXrkCU6YzXfdgGqgyLgbbJjX5v9uU3zFGy8",
  "key2": "5PuFy9g7FX8FakECt5VZyzrUvLgZc61YhEjxvvdQ7Zb1XdjJLKJPUy2yab47fEcEv6adTaJvwYQbgDLaspXuU3HN",
  "key3": "55vBFj1bnrQbcQ2crxB7pV9JgxyQLNg3LXDKjEHJTUh2HEU7jRyzme2kpRx4TmS2cyorm9Ksrzrg7U8ERpQoUQz8",
  "key4": "aiSV533NxQNn8XxheK5YQMHRRRYThBLEq9qWUgPWfmA2xXETK6uki9Ee7QV5Vf6qnngTPVvKYJ1bG4JMUmmVr3E",
  "key5": "5jZnkhiQA5rGTCdKxgRfaW1Sbga8noAB4wnoUgo34m8XJk2EpwQyjxbFMmG2dDhx3DVE3BRfSGskC5LGu4Sb3eis",
  "key6": "2baRdFsu8mZXz51Mn6x7suyRiyoGwB2XirFZLNQqYMS9GRsTF3FMRHA7EoojPmgfHS1YcwveVcMiFUgE4oRdRrGe",
  "key7": "27XY6E8n3Wf6p64gBHoTjw5wNY6X1zSHWigeqEKvts1VaJAKAtibUSTJgrAtdpVojadMVwAdgWp6kR9EGTyoPjfT",
  "key8": "4gR4v4jJHzSjcLDXJJp7RLxbsEBcTsggBza5jj42FCcaGyv7QBtvwXKngNpM47EJfyXoFG7B8BZEmjrQfLA9AuT1",
  "key9": "4rTgm22CQoqLVEWhRE8DmRVSRzAJLDk3bobhb5DAArpUS6tCjdT7iv6rvZQSrLx9ddF1JGXcubSWtNqpb1cMrSCK",
  "key10": "3SS5qk4dVEDmsj4Kk3AEos2nJQDzwB1pAf9oAYeAD9jJRxk2V29AURV958QJE5o79XjRcBWXbRoeDF2piHgYhEjw",
  "key11": "5cCJw5dugNwagXwhGVJYd52Y998PiWtvERaJ8DhhE4SnBf3GdrF1XSGTJMJVmukWotyRNEqTK7qzzYzJScpL4e8H",
  "key12": "42MgrcQkRtSYJ57gfgNu6cdLqsJdheJoTEryjwbvXD62bftnoHxLZjt64AFoAKDsxsp3sGn56ZV2aqC63A3WkPRk",
  "key13": "2VvS6t1vuheJMKrZ3iRrAVzaYfEwimsEk1TccswzSfXC2qQAKUyFVvvX48DAQQnE1BNAs91iJEGFM3ZUQ7nNU9jJ",
  "key14": "4mpPqJMUxJoHpweqzdM8waLmNfeuzxM4VfrqStRTkTCj673m4uHBuj5ZN5hyKky2qo3f2mJ1zNdvCVtCH7v1Xq8y",
  "key15": "4sE61hgT1YptC9u15HFAKPaqrjSPDKahvMX5pCDJvWjZnXNx165ZfLQcnd4PXFYKaSuaveWZUg4ipiVWoyJkiBkg",
  "key16": "4wHN11Mnz39hyQWDrE1PUkE1BQa8A7TurRjrp9EwcHZ9yBSw1ivM7M1SoFuNybp9i8UFWxtSD3BJbHaezDdyhi8Q",
  "key17": "4xP6RCzxAcBNxwghnGXCnoYFkupLwydmMHXt9AtEadiRm2DNCc3oAmhf2NkfM18JRsze2fswQosCM78nPQhtHci",
  "key18": "4USaVvDM3SS3Y81QVoPb1EoV1ZVao1RiBGNVC6PyjibDyt6znrENaq4n2dsBJZjyLY6urvp9h4t5bXkTj6bBetdz",
  "key19": "5n5RDogu4udQSxcABaTmuGRrkqPxb45VVBd9GXwuJvCSMTsriDBN8TYa8FPTnw4EWR95XkLkGPPUEwxAhGXUkgQj",
  "key20": "4GFhjs72QiJNJXMmZV9qShoWJ6ecJmoYUpmZRDqQxcdX5nwyZpb3rqhToo1j9z19yPRPNeyKSiD8tsesBpRcn8n",
  "key21": "457T4Lcy7WfCDF8qUf2Mcp9jRtgzUTnBUPiZJS6dZiMZorndyVWDemaAGinm141y9ejqsosdxf9ZT5Z8KsPpkxX3",
  "key22": "31je8EKGcYGsamJeoqHg2Sf9ajZH2dzWbg6amNezen9NhsZra2EC5TxoVWrKyKN1uQ5Kxt6RD9nd6CeJS3gTxaZC",
  "key23": "2UBtAT1AeehRYu4ZpQeE7DFxUFEq2z4uRW5WbrsxrVux79TSgt3KthhLqz4rfhVBWTL1C7YwFhJHi91EEYmaLDW6",
  "key24": "567F2cWADXPbB7z4bg1ffCqLaiY3iurmLB1vArHMSHQzy1mr1QmJzoEEUNGvqXedPXKrGKVXX56e5bmiS73jDrdE",
  "key25": "5JwTif14rWkHFauDTkHdaQCgKDLYjtuUALv4mGkGAM34urFNTfjEMTWdCBuS7dGwjDYxcyHF4zYjC9zFbMVbcnbA",
  "key26": "xXXEXf4Bj1whZPFdVMq3PUDaxjPrrKUQRUey8na7LP1LSA2tK9Eka39FCp7fPnJBxN11MvQtB5NXwYzzGija8xK",
  "key27": "2QXtNYpY3w1C2aKZJJFNWc8pswzS9RpkrtU9CMKxXnTwC8apjBPuvbbNUftRcbGva47LhsQUXBSXeJepQopQRa8D",
  "key28": "5CFKbEucxBRRYn215KAmWjK4SUv6fqsVTC9C3CxMUYFbDUvbq33RV1yd58ja7QcYmYWKDAwC9nRhjFfDbvWpEzBY",
  "key29": "2zqUJgmG6BT5kfnmkRw5vcxRgdivtGVwaTgumrBcimKStfouvJFFn29PC9D1wi9eDdxAZtnhE6o9do1mZD2EqC9k",
  "key30": "2LkE3kTVv5cxYGiArGn1gGwDFeaSLj2AwPCwiY15bTeZ2pZn6g3hhxX6ncnfWRmdgu3tp2BU3szwY1Cem54uzj13",
  "key31": "3c7CMpDQoCCN9Mzvye6CkW1DAnDrgVxAHUWoTfB5tTxFuW6JmVdCh3wnqApk9oTtfm5LHnH6mbNJVkqKHWRK5Qh1",
  "key32": "129qTxiWbw5b1vkmv9Jg2f9nmxQr2iaz77c35BN8VPj7iwqYpm5hcmUanHcZDrhX28CYDRHwUAXT3Fe8iKAjXwy1",
  "key33": "2tuAEt2B5J6vfe6xJqmz5FMJvf9cFY536uChwTwVtTidwsNev3K5HeKAJxw8gNQV34B4RvgYVQvUMyZo9uAnRsNm",
  "key34": "5Mv5QTY7BQQHa7WRkxV2X6UPKqYpjY2xzwRVVSMfPn9SZHohfk7iTcQRKt3KDMt3o6JNdKW7Wbp2eVMoKnTMtK7M",
  "key35": "ma1BgNvu7WJWUPnjddGYzgEqtwRroLg2kZwe2DZ16gbWx2SxyFayojruRJpGuiX29kvx3f2g1bDdXDmpCg1e4Rb",
  "key36": "5kPmVrAwd7V1WMRFrVEJonCeQD4A7EkrrGRyfqQm1CjRwzgkvckAJi3fQRUpmy9fkVLfCThvgcWoxVkRPJPSNYJn",
  "key37": "H788wkEmFyGBtVgp4ewFNwDbZLUpTQa6jU7hLHVTwTb41ubvv4YT4Hx7ART2VRkWDgTutGerdjCJ2hCrYYUvYrB",
  "key38": "4dG6HA1MdGSdRD5TYThXLJKgmpvXCJ18jT9wLmwLtMA76yp7GU5TuGK5BQx9iB7kX25N6qCwkBwzRfd23mDoGbYK",
  "key39": "2LtjKyB2YHXEuUv9aLFTBfELwhqq2npVYc8HAvSdjfoJwUq42n2rCB26GxeKYMgraqe6QFkpw55gAaVkWN8zM4VN",
  "key40": "5KU92pediqDuHk2PnGz7mcscbx3gfUG4ijpgbRY5VQrh2nhpRoWH9WaoDFpTLoU6oLSkKgRG3LvFPHMRH1TyEFky",
  "key41": "4W77XxcVMhrYSnbKeSyYQR9oPci7PKCoqKRehvSMvJdod6q1ijRzZWPM4dKoeGYtVW2QoqEfz4PHeGFZ9oqD9Cfc",
  "key42": "5uC2kfkeTyQgjqkYUN5uGo2qBfgSrjTwfgH6dz1xijwGa3HWAfcNuNWgw2vqJs5eX5YQ3i14idDdKGZAaQjoHBPo",
  "key43": "3e7nkWWm6mfgunK2yg8fZqjx8gV1URQwxq9J3BaNTDYD29agVcWf9HSX1gtaufJQJAW2rUgF2PDhsJfQFCQnTg7T"
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
