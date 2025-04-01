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
    "4Z2PfboUjCRkBWktvKWYSyUPao6nQAJYEPabdFJPGG9pVMpCL1vda4VBVDcRXkJrwmV58kscaiSnkuuZmknQKsWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhN4AUzcNNofkAQkCUH8drW1eKyYncJy1i7mgQ38jVjQVXckVW5YuUae2QzLqAPmstA4Rkb3KjDL9jVUGyJutdL",
  "key1": "5gDvnmHoYSqJcCqDcHzourk5MeoTdxAMefd87vzjcy4XwQtNMLXHNcXS4xzpeeU9VJiCknSvPTtVv9EP8sEiC8E3",
  "key2": "3rTRazxRt2KQyZ3KmAwbL5BJs5CwUXemuL1TiDj6UUcaidNZyU72H19mjCWdoS3JPNwUCfwTCdgNLfXnEPdnLC4o",
  "key3": "577LuhtEJEz2eDMbYURcrcY2g22GqP7dELGc1oyqr3H5KVxyDKWqx5sJPnukzAptgixHREYjVi7xrx4H5RvGFmzD",
  "key4": "3MRNfYKydgqLdaL4MA2BK3PssPLuYkcAyX4NoTsatXcNv878BtMnDR6NsFemtWxLUNjZUPfC5GgJS56MDtRskhir",
  "key5": "5PCam4bmymtBDhmuj9Ws6j5iM2VnfoeELD9MdkUGu5VTEQxsVqMWk6Br2wpJh2khDcGhJpdBML3VtFt8WXxfPhGz",
  "key6": "357Ji213xq3o1Gbmb8ge7cVgS9ijcVvgTj8Hw5agf3g9h8UTCeojEK4QaCJCv658oRspiaCsZrH6nKqiVm56nW9h",
  "key7": "3kCdQNii1cidXjL9cpXqRe3RSgm7cjeLPyrDYYUHJxCPgrhU2poRmWQqwY8YpeCqjhNnUSekzYJVz2dVtSznGA3D",
  "key8": "3F887aqBUTDFBXZymP4hYvmv1Gx9EphccNmgCxvjq7U2JnNho1Pn3452NtGMaFoLWJoAB6vx8GoQeFstWjRTYQNF",
  "key9": "3ScpFBNvTqHxzdg1NvUHoDs2w2AsyQvQeNUrTQr5JccM9QSiAQ468wCEXA79py2hYkNYB6YyepEdoPd3q2fMXaA4",
  "key10": "hxxvRUR629FvQmhSR3tRumimTnFwmBrgTEm7VK5Tp2NtcdwxTokBdW417vZ1FuDUjwJg8hzzUxVmCpRhDFhLjvw",
  "key11": "4Dasux3TkAkH83HJd5uiNQZYDoFr2BAhb5doQ75Ke44wAJ6CRBGKNmHzU3QnR4FfSm8seRTHyhESdZLC8v7dWzdg",
  "key12": "4vZP9n2gjJfAgUdJxRM7mUCzNnLvzqKzoPJBbxNkVzwCqgDcwHw7vZPjom9Up9Hw388xGh46HPy1Sri3rTcrG69A",
  "key13": "3my9T84LUJSAY6QjCMFeYHgbhM64zoLyBNL6tVXhCo6Cj9VMCN7YCd3DjMqgK8VxD8KcQaSgsDzXyq5qXLqHoHys",
  "key14": "4TQzvrBeC8mgRaDXBrp6DoqkcsQkZvg8rDMC9RppgpcbHcRnJ4hUKYHJyAX3udhEjovHfbuQv9EGi6zvi29PoMM6",
  "key15": "27DF1aa8aNnuery3npvrqq2Jiunwhe2xGJbSABKupDwNPW8f4SftViGuUmFrJnGuJekgmfVXDsHSy8SGBYti1igF",
  "key16": "2Et3FUsQqua2wy5a5TDj5i8DmBhAWtBu5UUccYLJNM89Ms4jMQamdxM7seDbK3DTio47Zexg48yEPV1AYoQWMmdT",
  "key17": "MXh38qYSi4VKhUqF7oMCpyzaoc2F3KupCJtGMSDYwxZSHboNEFEbiRSv8NEEjiHFmkweiZSEFiBVsGaVRQ2NPnn",
  "key18": "MSyNW7SnjaoNdn5ytiVn4rbYm1S6LVs4W2z8g8bsRNE9HsyDp7KKbL4Q8asKWgj18VU2KqewFY7Uh4hXV4fu6Ka",
  "key19": "VbcfUmeqeLnf7gtWLgU3kpHK85nVh4FVVKnAR1XVAWT8igHHXAAfaiU67zV9uaP5NdRMHp9qhktsBMQwAonXtAD",
  "key20": "5Zh8U66ERWqtZEtdtLteCQiYheEvF44ec6UbtXU3qE9v7q6WbXM6uT39ghcCaPBTVuNiBTPUYEcE5ho3QDXKKZcV",
  "key21": "4ZuyiQkeYjCVfkToxFh5rkoPBJAgmY6o4sKGRWYYYjV3iFdZDwoHkJDehN85sJeeS26PwXTwpcvwSszCn2MzozoG",
  "key22": "55BvbewienVanm8oEBVYjvnAWKvjisrh3teLHYnQus7Uv3D4x3pNVuA6nNoGhMQ7vgCGCmutvg3MaA6ouzyaGcf",
  "key23": "3NpScFDfRD8msf8WuJ72fFYtwR3mNxvY3sep9X4f9baHMttHELGCTYNoquBXhNVdhxDft5otzTZjuW9AhhftNYRc",
  "key24": "5eEDU2NeagjndgFZMyhevMbYhAvz5LCuvwVm5vWE2CFQF45mE2WfE5cKCoaFX3ryzoaEZVWQ7yNM9d2UkMEopHmP",
  "key25": "4ugGZQTYfXxmBtiPNXwVCe7p6PAcJVBALgjyj9chMFuqqPsHXdjGwFb5SxiCNkJ5JUT82nLxChZwE5ajeKN7Z13j",
  "key26": "3fNnEEeYGTb4BSwmSh3MEj2cvH6FtqDDQA24VVTZPiCjmUEPWneD53sAAEiMBF3p7zDZmZ4A9uo1qr863PHYtHm5",
  "key27": "61aNXMccmKDfe7Sj9JJqCVxKzMzkWbSswJPRNGN7ocDfPMXzT5ssktaXGEv2SXhzE3UwJLKkV1Gbbv5bfqJ3uQR8",
  "key28": "tiBSN6efrcVk5bsEXybSGA7NPHen1JivqCjwEnENc9mQZGPiMgo2QQhwCkHVehY483CbkAbDvwtMSmK6KkqzTac",
  "key29": "58Rd3zd4W3gzUo75qK6joD9o6ovbWCAawPbysEcq9HJeba4SiDn9M6UnjXcdvhZifmyBxE2BwCQSi2p3cjxQhtQY",
  "key30": "qLUDgukXgLfG3fPi16pyxRLwBsuYQAGBZ9AJ4cjRmp9rK6d9dBkerm5H4xVM4EjQhZX16uafLnk8xYBLCFdWthY",
  "key31": "4NDAgnAhAXPxnyS1TpuyLS8AmVitD6HroCKwfn6VuWB3atGD9yw4aAAMzEdX6xD9w1bjZo81Z6HdjtVWEoa9F46S",
  "key32": "4E1cU8oQznRLfCwZKfZddrcVQTph1eyWHudFHgg7bBcck2cvLZ1NDPmE4Vcq2XTRgRVhWMrdVAWdrAPvszs5uBzU",
  "key33": "3Dncj7WwNcfKsQWZT3wHhHSZeTBKKrz5yVsKqauY9ps87qdNrMCgtwNEncmQbyEDbimQ8RcZYdHZUBkbcSk3PMVN",
  "key34": "53Rm1WZqk6ErAaQcmpp9Q1epyqoJ5ruwkDGRnmnRbWxDrbG2tEhd3WQ1SbYdmBqfPtByyq6TKtW44cPRoRz8c3dg",
  "key35": "3P17fbTeQmkuBQ13voH4E5nCugda3YCNg3jVbBjJDXnpxVB3VaDsm3pa1DNLLtygG3VN7KmoLhyZfxRmrx7oz4oU",
  "key36": "2W1y9hCs2Ka5HNUHcPYAUMHPs7Qfj8KBnhY1hKVnHXsHECyRmTBThKpi2w6qWQpK8AKzpMXQFSzXxN9RCmrkWHq2",
  "key37": "27iQxxiuWwQtkoq5Ei4WUKcMpLHNyvVbU18uYrf7PNad1Yo1gdQRQ6HR97YvU6wiUG2WrYifvzdZuFHaWWE9VKjQ",
  "key38": "31TWMJEoRZSoEzA9NLoN2bkQkJrNMxmDLNRGW7JqnqcFqAm6JtgKrgb5MwzS1ucmffyUMbWm84yYLh11cpMY38ra",
  "key39": "5aqYevGzd5hXEtAK8iwwh5gnaep3SS53Q22XkEu5kZfz42drgp7kbQUb1VpAYzdzrGNkWxioYWbTAGBbVXzLPjWy",
  "key40": "2KrqLGm1a8JQYzG8naJWnfSGfFBtNE7yYqpr6rPMAJf6637sBEGrpZX2kRdpX2YgPW9nAssHH1VnrWkUzgrZxTkh",
  "key41": "2Tu4rqLKWN8e63J3kyAXNuqptBKERHp8v8DoTH4KZAVEv76FjoLtEkRHxSEBUNMapQKXhfUDDrcM2vC1GFYRfdzm",
  "key42": "FZQGdDSLXKY59J8G4w8udZ2kav98eRPzxmv2dc43BZC1aa4EUebrtA6AQRts6RMudcLja4iDvpPBJ7TabZP3DsV"
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
