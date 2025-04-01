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
    "5fLrhotRjWtRZ3jTbvvivQ9fL711B3ieKtuy7aAbPCjAS7cg4dYyEXbT646X4yYrYbyHkxoJ6Zf3XJ1dhuLsUKPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WiGvFQbXScATdGrQzJkJDCvXvgxAqCb8ysRkWMAWJonHCvRXdb8aKSKqh1abv2Y9gMd5er3kmWZRXrE6EQBzuXQ",
  "key1": "48EgSyhi43shL7j5XVeQcRbvRzuZFxy4VpyesZLmPk4N7YB5h1319jqZQsDrgWAwCeVpu9NrKCy7EjqAvQXkLNLv",
  "key2": "3aZtfnKhgq9bRGcizcTiVsbbKjPghYxxhdS9yySHTR9JAPWNBgoSM19FXuY5o2aAWseaTxzKEvYCjbbmcyA9N3Md",
  "key3": "5yryguMi4SajG2wnLmQCgyRyfVtfeb5GUZ7ptauq9isZepdbUKLE7kgDWvxCQWn8baqgTtRPxKSa4XJur5hENPPS",
  "key4": "3WMBYG464fmDQSQVSzGNJPCtENup3LudUvwdRXMnopo4tCL8Fu2XHBE2LurFs3sfmxKqhSSXbGg6xzbNaF7AC7iG",
  "key5": "3iUFBEwwTKbQ75T7og8bvyv5wpxx2YUJEMqzimduY29tFwnu2bgspcFPcXBwChRz6EZwKKhzFSq8t36vEePDRtXm",
  "key6": "32r9sgLcmXPhieyLVej4Zn7cNfMvRhAE2pr7eTFSCqZZzguk4r2UqeZcgWa3yJGixuRArC8jz9GZ3e3HkknWFA7f",
  "key7": "5WZmLddQrMc4fk8MappDioMHpvZgu9b4STY9tN5bRiMKAhTCvurdyK6tUvbz9cJPAG1xm9UuCtXMogeEFef2QDJk",
  "key8": "WuduRx3vCxC722KjaozxDnTLsgf52BwtuiM8yKVQMK2qvjT92xUFkYnHQDNVQyEpi2CTU5K8MUMcZGKm9hEMXjM",
  "key9": "5jk6jGJwgncToYQLmqEaJDLCZk26wvJiHrwQv45sVPqKv5qYocE18GPn72R68Ru35zGQrFeUWgVvWDVvYGMAK4Sz",
  "key10": "58S2Q8BAiGabEV3nTK8QxNAz5MpuZhNLGLqVYZRk8FTNeTLEeaDcFgxN7dckQhc7SN2929ABA1x1vAZXVB6b5uFP",
  "key11": "4ixmfQSsThQQZ271dJPJ1VaHESbniDYsNf54wupSzNrt5CTSq4vrTKTLjbpN8N6F5Kfd4FEBByGzVRpyd9KKfUiK",
  "key12": "4vSBu9NgPBHLEYHZdmFNHS3PNhhpKs66skERTaLipf2DDEWbnzb6t1q3Xz6RqbNWKVMyPioRcsCqpaHxvNHMbiNo",
  "key13": "4UiM6cP3fwLPCFH8h5AjLtwJM3CRgKQjMigzeL3rwTorkmNDTbCNKyeTEDvT6MTipDATfqAGVERyfGPiPtFzJ9G8",
  "key14": "1qCNPah77GceriFjZV1QirNRDXB94a9o6WXL9bF5Sa3v5qXYbUuFY3rXUnfSEdmBz7d3RPjAcuZQFJNMmCffNBi",
  "key15": "m1LhycAF22Y2WbqQz8sMJtmWcVtAACKRzo9AdUhJ5Mh8R7jE4mwimhoe4qyFLTbc3TJbQFCXYP1g582dm3R6UyC",
  "key16": "4e5fbWWr49CkYmmHDeBuW7hx326KYvpYLQeQm2YYnm7dhmgH79Zw3pYrvqdkN8KTmyZgFzRkAdKLyxJkvigYDi6V",
  "key17": "61jDn8DDNXQ2vFtP93QZj9zKGq6TGi3kB541D8wjszJg16TqXfXs3WVeqiAReL3CHNpx6FgsQegAGFsEpfQTcqta",
  "key18": "5tknvE8VeHeh5TU71qZyiPjmLYX8Pyaqe9U5eUGfuyoMaNzLNynhqX3sKtmEuZJKACBoyUf7vUJxf3wEGeKM82UD",
  "key19": "47kUDF4ZppyNYQvkY2kc7eXqKm4WiGxvHHvexMMk6dQqyekjy7QZVrJ6uQEhQen5KT1m8E8qUcEKk8QSLeyhE2bM",
  "key20": "3s9bRUQ2BqaMyzig12wavyw4idwxmW1d2oJiTN3TBRBhELwsC6dydEaGYV21Nuj4ZguXaFPJafGTRVaagsqHw1oo",
  "key21": "oHgvreuVWEHh2esZ68GwVmmxhmLxMUWEGGRvSzPYgwUDrkUMHz93Sm2YLmAyhkGcYSYXgpyxpwKRcsesTixSYcx",
  "key22": "tRKZBXXrMgY3ukhj253M6q5HuAp3kGNxmXuaJCTuaPVHNbfhUbpdkxLe4kd8cT5BvLyLp7pxSo1LrtUiCQFZoUf",
  "key23": "4XZN5y4aZXuiKvBnZK7GgSrvcs6Ga2EdxtAZ8BgV19C16NgAkULMou2Qrp5EDipMBigguMrQRoMSM4ohv2ZcH7w2",
  "key24": "4Z4eKRSxPMeXhYzoEPooNBkkDUUzgvBsMtBeerDMysLEa3Li5onhSWMZ7yx2sN3hqRmTCoKdidBBNGLBTcKhE8GP",
  "key25": "4yit3uS6CvV41ziMWBBB8gx9Hb3A9hpJjYQMEWuYnUM5MjzGC5vEyPgRMS4VpnvRV5qCC7EMqjQAvaD4hTA2Mzhp",
  "key26": "29y3h3hE5ZASu7H6a8rvjKne88XHAtZWLzEt5J3KFga5KocABw2rQGtv9ZP27PxWkbfaQJHDzrso3KtomeckapuL",
  "key27": "ioprg6NsaPoduvA16pF8oT77x2aRXvXktW96F2NGRYcwfVswYmJw9qjsyhX6Sq1egnVmHLwTJch4vJRAxgik3rf",
  "key28": "46enxtW6JBixXZKj8Z1U1uPXwKAf52ujFi71tua126X51rMxd7swapFq5CZaztE4cd5PnJ2qU97CUo6LYMGrupKQ",
  "key29": "2sd68onzY431npTVeFwjeyiadPxhVpfup2kg5psGaxtzPVqB6SUuUUZ5poV55VuyGQ9tkVMQjZwM8sZ95hYbUo3V",
  "key30": "5siGvoVaMNAEZZ1ppxaStNosF2vAN8pkoW5SRYuMmM4jk2CCjpB9P39YkQjYK69GLFg1AzAZm1hjRjQ16BD6Yc24",
  "key31": "2pw6n1msgXGExM9uvzPEWcsGrjSrBw3yhnFVFQeY25izzqawu1moWYH9LTYUg25osmaCxYKLeRcA76GRkYvZQXRb",
  "key32": "52bTFmYAfohP24rmdnvhAuy7FJLL6V2LSu4XsuJj7LjoRP5WZd6AF7USSHYPDQbQhxQabkRmtnbLsyggM1YYMvyu",
  "key33": "hs4o19zsuYXpZJ3xdQhBxRMgCW3tpcmt1q9R4UTxatkKbJ1Qt7yLS6gSzsHxo6vemwaSR4tuLGUC7DfGSu8xRKB",
  "key34": "3bwTAnCMgkwXnAdnJpmYp9DfcRd9NNQAo367gq4xzFnSPitcJKr7nvZFBrDf8AaSo4BUi9MG3LvrvCUFjzaqAihC",
  "key35": "4omk4sFYP9GH5kn6Lh6q9c44eqSaoftGMiRiwyyjrisDyaNeusB8NhzAHFH7MnnH9vEWT7Qu14xJ1cD6FN67gJkv",
  "key36": "4sfQ3vBD5Pr4phmX2zY24C2wVgWAKxMkRWnYU5XDiU5fFwet1D16jbwMM3R61E4WwMSn8FTKYtVx9Rc5XPBPhM9B",
  "key37": "65YRtFAHeoTREhAjCAuGdJhpzEUCcCrJwetaZBy2JYdFkarHYMLPX6ZNPZFi6vZawTNBhuG1aKko5xj2AA69Eqt",
  "key38": "2y2oacPzdYHjAe9L8q5DuVLrhoJsZroV7r11EgxMeY3W6TBbBEzk4Z6Cw6CVJBPkRaWqL7D9yPSXkQAoMhbipesD",
  "key39": "5KY44WFkRe4fTvgQPpodJvGdo6sYyLxz3gxw2j5P8dGQjTySMbDoaazqvB5y1TXLp1vXfpvVp4XKoUnQEhgU6Ku7",
  "key40": "5Jb23i5a4JxWB9evDuF4ZgAiKj8LKVpdnbx9Bz4jtKEWSHcNq6NXREAaJgxZaVku5DpitQGnqmVF1iDuFxYjeZXs",
  "key41": "42tDi2e7MucymfoX2DgDAkvBWgRr32Bmj8phdKnHWKEtVfv95VnAwupvWJRPf2DCWZwGy393kvT9PRV8NeuchG9o",
  "key42": "5NxVc4Wka14uXyw85ovNtMjHpBbCSB5CoUHPyKodhdecrrtRW3j4AbQaiiHxd5PULsFup7uncNBxMaCLvnzZbT62"
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
