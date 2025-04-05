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
    "3z9g5EYDQRimfLRoKbfsshBQDFuYnmsVfn6nYZ4JVapMqYq4SNYmnvGL52r2XnqzRGgboMFdiqCW3d6bEppYf4Hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rhr68WmHYzfpKyrmfbkTBAjiyvJa7yUyCWhuLG9xCvxxNdN6vLSkprss4zZ2Mkavhpv11dQoFHCih7iLtzYMGjY",
  "key1": "5WHpHRg8cwAshcmAyq2eXyutsNb2kSJ1UgVAP8pUAwdQMBWaVVPkBwYtfKmSM17VUZiZmNkJssFohH2Rb2PfvZtc",
  "key2": "5GoY2UVRfADCbQXstKyjQt3HLx8CWAmQdLPpFp8EWjrUoNBcSR8epqHEAPzm2BySpQ8AUzRJkgMZ6sH34EtGyWzN",
  "key3": "64uzCkttJ1MhFnndVe3Fea9zxVkRGx9VBdYZ1KzF8nXCZA9USnSfXbxUpGhdzo5VYUWdMox6M6pp8zNdYyys9zAE",
  "key4": "5BdoQm9i7Kz576WyBwfz4nGNvpLuQCKvxAtCv84CqS7ymVqHnUxetVRA25amRgrLos1qJnGC9sEkYZ2RyQNLgYHH",
  "key5": "24oTQEsqQz9UnZheXPuLdueNGotuHTdf7Dw8bA68CTDkFgrwEuuEhM4Po9nQ12ZHwVVzyFbeBYSNYwqQEeAHpKr8",
  "key6": "4queXexrCERRHqHLjjn3G19B47aRx4RqATiD35SEKxdHcSGwj6EPp5SePjNFrM4Td1gdYvh6MasWvBKrMe8yt3Ef",
  "key7": "2kHfYiNmdz3kwu9BixG9ejYi4PKrHRW32CJEjusuTRWjdRaHc7n4LGbSCFeFKfaNeSN18HoFUT5wKpmgK88Zcnkb",
  "key8": "26wyf2vyqT3U9Do6vWZ1Vrx6EKqLVrxJmrNkXDMswVtE8oQBiXndGK4WPrpUhdeVesNoLzyFgtUhZNe4XFQ49vsP",
  "key9": "5xu4teReWZq6FRNHUiGvjq47TDHseRT5krLqkT3P11DGheSL9dCE752wS2htxXo8gXFB6b89oyBRfCrvpoo58oH",
  "key10": "3L8EX8mTe5D8k3x5eXs2oZnqWty41EYBwexUDW8f8pcduvvVai3EGUVRYi9L62fym7UJ2scbnx9g9TyNgZVDGyoG",
  "key11": "acbjMXdDUKuVoxKuVdMVV47EZCuVvu6PCAd1cXMsNUJvPvJk8Bv1Fuumem7hd1rVCmvjHoV2xNqphVnnNsHhQq4",
  "key12": "2PpSTXmc1vtpEQNgaibux6yBZJdd9DecuGVg9pDALbrAax2WtKJ3MdGPbu6P9uLZohVLNEULLfqVrbCEEngRKcru",
  "key13": "pvUdtRdjnXUFFaFwWvw1C1UR72m3oSGE4Tjfs4Z9emx4C2rRs3ktfiV2YEaRknBDDDbpEfoyRk7P3AHybvSb9UU",
  "key14": "5pn4jt2pmrFeCCnf5ZaVkqsJCzcBJXsh3cASwdc1CuPPkQbYHA54BbyUin3B82h1HhCfnrvfMkkQZyhdVrhkX2Ha",
  "key15": "3bNMamZTNBDvbD4QGzwRtaT2zNaRLaeGNmqzbMGc6R1Mvf94bAcdPCv617bDrMq3eui7rsvygZBUNkPoVDCh1YPn",
  "key16": "FpDigFNZZRnAv2LAEAtecCEDtKub9shNQ1DbzHDEUgaLFNnVcCqo7L6mrhuAKUJHxEj7itPkmWdJtudu9VVtLEp",
  "key17": "5kinqKAUkFsoRqUfSSb3bMeSdEXSRuPoWMexripkd8mZPQB4kQ5A6GgW8ztGaAwM4MHXVmXF18b3DQ7D4Jx4D8XB",
  "key18": "41WRuVp1oJdELEbZfLaEX2hihWshwkiQ71LMAZTNUeheUGxq81wQBtynmFSj9PRVTw4TZAGkWS7Db7FGEeNd6kB5",
  "key19": "3Yj3bfHLJ6dcFSHwsp4Zm8Q1rRzw4dJ5H6gz2y2h6kTdrYrzo631n3bxeTc443EdLrvKc2g2m5Uu5ywZL22gA6fa",
  "key20": "5BHcvqTaeEh9QnKLYMuhrMDMEdukJUhb6d8ceeuVx2h8Va7GFNmYKf7PYscLqkUbLuXSgwrPd4RipP7E87dPDjKn",
  "key21": "2iSdUTPET8ZSokC8UHqwYHxBiyS2V8Z4jbbitcVJ9iEcPzs67tCZfnzGHhWC6rPAe3PieEY3J2MCoSNXRSKSbh1Q",
  "key22": "2TjK28vtExTdp4AsCR5K9N6Hz8s24i2P14woQwEyhx2dwKKp4rxYb52DhHBaUPnf6DdNwLMRdowxFNYZufNDM8z",
  "key23": "3Fjr1jsFfZRpir5HpthgRoKHmEVzkUJmvyiMsxrNwi5j4caAVs6gP5as8pkFVrtJQGWXQpovMeFuAsfQfhq5wiQX",
  "key24": "5oYsZApBu72fhkEitUu4hyc3YizwjrZ27VKFSxpUdGxQjzsrxPS7rvbTFQyXJP7wLSiF3J5USyjEdY9UgLWbVyXr",
  "key25": "5xLVW9qYdbaUBAVRJJDSdMNXkprR68gBNi5jPnR3eR7fSpCQkycJpZ4yoi3gdBJXYpasJSpkkCTz8w8LNEebfKYx",
  "key26": "5be2rTKTxDGduDNUN9Y85JbmRYU51fb2pmw2UA3Gx4tnjrcb5DJTr7WZuZ4d59D6ZMgTFRe7UNUNNLvfGrzb6KeF",
  "key27": "fhaErYprfofwbUZcSfJ5QRBKDg3GiQNxUbfBkiocJom49bT8Uc6UghLSbyugiGfnH8LrhNqyHiaAMuv4HiQyfuL",
  "key28": "5D7tetW5eHa4h3JyFoSXcvYSwGbLmXwRK6tbcChti3nw7BYaL5bEZ6CxZw4rU5XvBx4PmEqm1uoJV9c13vPKrTFG",
  "key29": "2VaBhNsFPvyveWfsqmaGTnTLeC6Vi1JFsECf94FJdHEcn37TrjC1oupaiyQAYropJin4SiUZnBepLxJqoRJNoF6Y",
  "key30": "5AvtevYrCqEehtHhWt6ATjFJb97MHcefLYNppGuH2d8uY8pnDkiev3tA3kRjPeqXVNSBYiS6mgSQwHrJ2ZqHLH7k",
  "key31": "WAyhjRdTS5N46HbHhwEYSuUJ1GAaHFpFsaDP8t1vTpuhTsMnN1CYoKcGoaB6pYbfaW7wZZHKuZNvtSzYWuLBRhP",
  "key32": "5uh475KK4LF1JdhjHfdurSHJAL3r12YmJhY9gZTFsVp7L1wdajoeHhnWeCBBGyn6yGTxCniughNuSGCo46Jg9Qn8",
  "key33": "5esyi4q6JCqCtD8Q7o4DqPsABEsAJbkFA7oczPnt83R7xg7xQjHKU3YMrAC4rA5ndymXLFPWXqGLfT4cqSjry5QE",
  "key34": "3qYagt1KZKp5oEFfPzQZpWNzyx5WQ6Hr2KRwJzJLNJcAN1cKiyDE6zA3FGXaAY1RpqjBTKsgttaYYJeTcJsN7yxM",
  "key35": "2jACLuZCzSZDGTF86UMRy87jXkrEVBe1GAEmFszNXvAQe5gw8djqZL1oMcYfcj91KJSYs4PTuZ5BQESrGGBgpuLS",
  "key36": "3VmwTh73gfRYHYJL6utk1VtMdY5sNVsP8iQNg3fZLaks1T9D3oWCqktnXHDY94R5jgTXsgm6kpmF8uPqkvrgTt5o",
  "key37": "6qBxgTwQsavTDL8HGkDeic4FVAbBgPRbCuBEvuyzwdaARS713gHHPEZSZEPzDmGL5RGjqxvd6WkRNwpkLN8SozL",
  "key38": "5cenC6CRS9dgPEH53KqWYzhwJ6twNWSKaSLuToAjD33Ur2jjJw6KcGvwzL2TPDwxZAQijvoBdkFYvc3J3bnoQjbt",
  "key39": "3v2iyag5pAV9knCN9LunF13pMaRnUsQaUw2hWifcvJVMVjeCKAgGDPHvU8qbRcBWiqBuKLv38W6GmNkxEdGip96f",
  "key40": "CHDcZWfshj2DupnBbH2zC2wKuPWUSkWrTvsYb2A5qw7qP1gN18PwBKpicC7qyc2rtRisbJ173eLMF3LcEvQySwd",
  "key41": "4fUwtw52UsHuRitt3Nc7SFqEsP2th9ktRicnzQAyddXbzPQK9AbBJTEmy7EXxr5VsFJ3jvBTiCTL8FKX9oEQf7RF",
  "key42": "61CWBJaUKDgWNtDbPhXjGZsUu5eK21qi898aSDMn2LAS1jvFwT9VHAHUPXbH2Wfirb7EBr6TbF3wy29Xm1krCctM",
  "key43": "5AsrMoFzZFNACK2vYZnUbPEQrpATgtuNDrczfoboAn5TBETnaDRCkTnotKXRiHNwvEcLkenA6i5uJtq7or1R6MyH",
  "key44": "4QD6z4TYChsTv7oQNxLT3BCr1xkp7qsXHqYKb9mdZZy84hwxhfTt2P3t8v9jjFbCLcQoRSis7hbgFiifx5G5PnNF"
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
