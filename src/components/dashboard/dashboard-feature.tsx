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
    "3Q1ZhYmAaDiJCkAsW63nrpTK6XxPbPsTYebGXqLv5WWFvhGiQJUPZQMsf3TTYWMYqjwTFjs9DZW8TAMS6GGXyTVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4femE9ZHW8ig6ExcZ8PWCy7gXoNgjqKptmbvrPNMBUUjxzvqpFcu625XDBR9qtbAVoBpYvjBc9X8pXkgwj345EHu",
  "key1": "2kkdvwoxRky8VvJwbqvSr6N8SfEzdnssMKYoeMQiSMhPC7XZfi3qzMHL6giPqDyDDeD4kz3DNJixBynLEMr3KPWw",
  "key2": "4fG1rt7fLNFR24obVyG7KYgc5xWsEVVMzRyStvndT7ovA3yNA7Ms8RvyJGB8vp1LUfH4Uv4rWN8LooUoY3dC21oU",
  "key3": "3m4igP74mdydtgWLGGaKPyudeTwVJBqhiVqoZ6wKffbm5DjFXcpbPav2onqijD3vF1dq66k18wTq88eTXQTysVTQ",
  "key4": "57F9nTmGSHVesiXsHPNBLkGWYBctSF4dzGb16FtYKmtK1DvgN28nuEko2RprwrPkMAvoD2mEUpEBQuHK5J1bVV6E",
  "key5": "62oSb9yqLKctfDdhScs1hUpxMk2yb3uzD7oZTb1LZbhv78EDxvB421SL6SBqebc45mHeFRrTrxN11hATfMgszPrr",
  "key6": "26F9EY3uxNU556N4rUVP4xoQAbUixhq17qbwJKTrWywaFw2gwWa1FQH9tWbAzKUX1h8Rnjh7gmK3jdv4b4vpAg1D",
  "key7": "34PCxSE1t8LMjbyqxgewbHR8QDqHq4hUaiqoQmVE2gGcBRaLcbteYVHr8nGSRycfoTnTuCf7wSSrVpkWjtJicWcY",
  "key8": "2MtooZq7QGP1ZaFjPGsyknXYczmNzwAcecz19pxDe4oK4HgnA3mfFEW5fE9tQWHoLgmMbjzWRyJk8oHZtFzqxoUF",
  "key9": "4qDL3QJS3Mf7ys1W3EhZaieBkUqFwYnP9DWD8Mj4zRMFACLg1aCSDa2nPfHtCYeGtskvm9UXBwjLdtqPpCLdcTZh",
  "key10": "33dNKEECQ9MS71bzGxW1hq51MPyWQULeCgCq5YbuRqqo1fCa59u5Y4GbxQtBpgKDFksq3SFzMeJHxuHaMSGHhThS",
  "key11": "2TGnTTW7cnJ9qVTPD3BgJ42UzCkiXcmEu32Hqa5aunDaz45tR5bXibf6dA8xa9DMMCYMatznvwmrQNwjNCCHN6pG",
  "key12": "5RvNeiTTv8AcsazU9VPEQJVb8qCDieHQZ8sJqFs54EJKpa8cw8zGUYbR3R5j75xVUs5thxCooF5LHyBdhfhsuqTA",
  "key13": "5ZzTneDD5tcse4reL4S4NsbmBC8MbHeSc8bw97kB1ds32fTUQxCZCt53T6QZ3a4Ps4XdTeqvp6Lv1r2T78KUigHz",
  "key14": "CUHwAEZGMm5FEr2LGikT4S4V8dAs3Pb8vcbDBQY3iyKrziqey8u2kmCdcegpcwR9c8D9keso1McfcZQvK9dB26b",
  "key15": "PCztD3dqedSeC2G4AYAYLLwDhviNpN76eiRQ7Q1qZXMqhVB2o3VxADiukKXGCDBqvudgsfweDBiPu4gLBi9fCHj",
  "key16": "rjws4t4LByyzmadD8XPuR5LEBE8s5q9NjjhmUAjbhdQGiYyFjeZENGPmnCX3UvtCb3ruvQnEBfkbonc3sBVDPef",
  "key17": "466a4CFg21Q4fhap4UuP3FzT8cb3ZKf3UHu8G24RSo4KDN7XKZitLLn1k191csKYvwQzSb9vq1prxXb7nebrAEuM",
  "key18": "5TvFcuXv2wovNvnBUBAAa3zs84YFBYVyGnQCN5Wh2ktPoeqdJEyMzS8J3QwQ77QoTEAYTdvEM9o6EF146GB6yPVA",
  "key19": "6rpyJzNgjxTrAVXijFu65ZHXBHs1RQagB2ZyvFHY77419UVgfvQ8F7hFknSNymJKVcPBYiSw3VG5bH71bBqqysh",
  "key20": "3XfCWpaf9DWMYxqkEWALCFHCeCALJ5AAfVKwQ6y7BgWbRrffU7rg51y49v5iPwcKqpunuJkLfwQvB6jguNYKiMgS",
  "key21": "3Z1DpDUuEemLNkb2Ze9J4sGbkX9hbkHX8AJogzVQFdhczcofYVrDDwQN89CcF6BWEGvHWb4Y3hmaxwXitHAS6Tws",
  "key22": "58DRjNtWJameLtLf4Mh7MsGCmN4utjrCMrT4wHAiFbdQ3Lfx43AcThsYyHaQyDCeGdvPNKSJSj9eZ7CGKKBssk1H",
  "key23": "4Aes7fUVjufiTXnGzWie8ATueFjFEAFB4Mx5Rb3TGzJHVdGZ7MAar7iPpCc2F5FQv1Z1ckcfff5mmR3urkAPzMYu",
  "key24": "5t2KK3cAescibyRJ7hR9Pyat6LjUF1big72EsTsPQ1gmXXBt6RymZJETrD74fCmw8uWGBkNbBfSH4v4HLKX1qEmC",
  "key25": "2wHiyF3YtLX4Hy2jwZxjKCZDUXMBAidpwtho4xyMeTGL7X1z1WzX8dkvfFQiY5ypQiEqL1dXH5R1jsEsenMqCM6A",
  "key26": "35UouTSX1uHZhEsxWVFujnWWsSaBcybrcu758KftY8egqnuXQWdjq7p1zeQ9VrmBeUycof5bqRNXwkLijgPvWNYa",
  "key27": "4eqZzmmyDSiBP8bUfABzy8pizof56o6SKwzaCCDru8UmvNreaett3gMnarj2drGsQrKN64KxPwq7S6eLX4nwLy8a",
  "key28": "3DtqSYxJuo1sZYN8szQiPc6z8RRGqiHXomPzFUmERk4jqtRUebgC2bdmEs8TAYmcnKMppaPAYAxUAffdpqkHs5i7",
  "key29": "55ABQtnJZf2q7WBnZSZqDm53aGL9fwKPrziKjoJ2NhwoQpaWWZMnaN48PqnFKd2UtzJ7h68VzrZ4eTz6uUYFm9Y1",
  "key30": "5KLsSxWEPLqMsToamuLoFDqn7akAzQUizLJ4Eb7cSDd2zuQJ26oc3abwrtSoft3pU4bzBbeY9CVpRV1HeJbi5Zpx",
  "key31": "59CGPEKAh8iDDkSGVbQCLPboHtqQpzwB9HvhLxEmq6SaQMZfoCXuzCHbXzEpHCkFUZQo44XbufNxjjdVahNDSkSP",
  "key32": "3V3YiQ1qLQgUbD49LsCg8msKPm2GCcB1dFxVd3q1goWBaNHcE1FzKYmStEKZ9kFjMRtjNZx4uqh4iHiDdxHcUbGZ",
  "key33": "3S7MTq2EXoAKQK1yQ3mJmkVZ5AyWBZmZ4oHqtH53E29qCSAjwFkpcBfFVWH2RrCk769WJKawmYMjW3VoNBEcSj8L",
  "key34": "2aLHfDyknnJ47ohrnnauwdG1rnaFugUxmKsZid1iKLgU3qNs5Md9s4RS1L15JmV2D8PqC6EpdkWxU2MvEPuf8QLK",
  "key35": "2J2YLUbDpZ9AYDhDQd83Mi2NqoYbT7yrcVt944VQCZQNBtg5T4hpQdrG6CPt3A32xP6SkeyCWZeYBVZ56Vd4V3qg",
  "key36": "2HeNttSbZb4NmRBKdn6C7asPn7Ty7A2V3sUQEdkdi2yKPzws3usLCYJ1LDUeogK7FWfrcWENJ6okPQQQp4KfTpo3",
  "key37": "3HQ51ttvrBGDaXG2zz57R1SZvaGT41sUX8vS3wmU7GxkYJ1m9w5UrN5SkucaWHAuYycazxQDgDzjDnF15mr4Pxrz",
  "key38": "488VqWKt9KFV6YbYGmdat2c2o4D96FEvGn6PcFMBkYJEgvh1LiP9B4PCa2LNbHbsoLP7qwPQKDg4Ly5XaczAzaK9",
  "key39": "2Gtb83fdXyB8TLR477CuXucLkcdZUHotdm4cGTLMviD7RQCa7dnqe4eFtxVACwkWCQhHxej33KfGPvCghLo6XCST",
  "key40": "4EpbxZ7akmPbcsajnUw8yvbsLLtfDMybMbu1aY9sx3sBT7Jb6hsba4u961mmUyMwY1AXd4XQTZ37uZywvsuYtjzc",
  "key41": "4F9n1ayPyjQTKQ6PATu6qXf6XReLi2heQ1XEDKmUZnuUaWJn8xBbHH4p4okdbpWBT2hyP9EQrp3utPvEhHiJrWnN",
  "key42": "4ymMFq4ZBVgd3hooEVEPgZk2rdudg5zbGbcwyBUkCWaqZMm9LepEyZpp8q9GzBGm6ugcQh6MVLeLeEB7uoPf5bCt",
  "key43": "2QdHL2ksqTE8WtnqXsjMQX6vNweQToYcMQL7dC9V7J9RrcWVtTMVuZz35wpbJUpXMXLhSFLBsX2q2WKxV9ZqH3tF",
  "key44": "53RUDLdbtf34zTV6aT4QLgtmtDz87LFnunCN3iKrHevU1cHiAntvYu2C1U5rQXFSafvK3kgEMPBjkUpcENwNX2Kr",
  "key45": "3JezHuJSm8qrQqJXb4S9NnjX73ZoznKisiQoH8VvMm6SDtMFQEHc4hmvFYKe4kHaRanU8tdBfxdZ3whnTGycyQLA",
  "key46": "4DyZX8PpWvmpGt2iB9NCiemUPGcFYvSVMKffHVdKGS5juojsvLMfVhq8oGKnfCm8iJbNX5zVdQL9Xcw1aMc2PPRa"
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
