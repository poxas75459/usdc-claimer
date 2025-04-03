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
    "65MCSAKFNatAthWHjq5FKAH5Jz6K9VDJdHW1XMCEvimp8PUGooLLGyAwQUTdXzfi4LMxkrMoiH93aHhhN3ichLuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kdCBtqeb3i66ieLHdQSi2yNwwt6SKdaTCaWbbXLjhznoDLuetXRkeyza3zoQJ9m28feUQSiauFzsqHBcmQBwYro",
  "key1": "53tsd5pi5hZ8GLPNKdGBZ5JE5KaiwKbbmxWxTiwSL8YzCHPg8Est4yNf4hH5y4SZ2NGCozY5DpWntxa1m2Aqu1tc",
  "key2": "5dxUGRyQaYyaZgRiAmUVBw9oxDGA6wJQ2iEuuFgManyyBen1PvsPWtaD2VmnP3qHm7kgLgaHucWDRS8LBbDfZat6",
  "key3": "4u19EppcA1iYjvPz8heUobo8PVcbngMJh7sdrZtx7pcGeSTK8poGf5ocHhjY3Yun3NnDqmQChaNJUUKcpwPE2Rfe",
  "key4": "4PGTNq5iuBit4XcgwFzPjWEyjQ7rDvY9RMP4NbJU1Ez2zWJ5xr6MoqkEkFpPfrZUeHMvz5oLfSuFphQSuU5PR53p",
  "key5": "RPBYSnvRx6Wazh3C2yRakWkqZU7EU8gj3U7Ah2w2S2WVufpByu4iofUGhYquesoAQh81bfX8L19GvAdz3gvmK1u",
  "key6": "2u3zcpARi3FHR2Vjks7uo2hdrbDbPFUGvZjk2zRraYd2iEck3egaDuYVLeQp2HZcp3ERojwwjvBEuytXG8ZvHkPC",
  "key7": "4zzjg7g7Zgk88cPg3F7qP7TzYfFG4MRtcYH1A2KmrEzoq8ScZ1MiDKoJcAkm7e433TSeRynmp52xNTbFj5tqaDRm",
  "key8": "2r8h7wu5PfEKNyCR4vzkcgMEgWvGQbPJ5dVL9cvy6xL8K7jN3vQ4L97hWFvc7thJ1r11YByzSQk9Qz9hxZZMoxe9",
  "key9": "4B72xJgzdegqXvDf5b7iYM28VAz4WYUE5sgqr4doW2JN6dNJrHgZjv8XDSNwS6hCR3VDQj1yF1uMDqpn85q9sf9t",
  "key10": "2edhbBr3G3qAND5jMEa2jyCKQDuaGoq8ejxFhWyKx7nqonU6KH4YGK1B4oHVJBcKbvazxz2o9DBB4R7mpKUSZvg5",
  "key11": "46zLiBTSbw7EMYgYWtYKH3MGdx8ec9ZXNZUpoMtLzqkz8rxoxW1p1YQWrM9iJ62KXxQUfTcPP7h9yibgHA4UfXSF",
  "key12": "39vRHYMwaZLC1MM3rsyDsdXiRw3T451WRGMsNRjFhMr1tthjZ3VTkh8REmKJoJHeX95UjSpaU3sCidkVCBEbJUQE",
  "key13": "4aqd5v24aqDaQ3JPydknTjkbkFB1agZ4U43GTRnyhobaVZtyYunHkoo62QJZhcPCMEyiJUd3JYCBb38jkZRZ3fa3",
  "key14": "3SVfmPpKwzbFSycJbHXU7Utmj8LGRycbojsorXDPwr3gV8vsJgGYrCofAfW5gcS34FeSAfBV9PUNWMb5wmLmv9C5",
  "key15": "2W1ow2yESCS3kzh2kwQvvdEaEKj8BZN2mkmfqWR762xSWznAPQkv4zYa7d2L46Es3abK9a3piHEyLNPGaV9uATwu",
  "key16": "42Bv7JGKvk8gBP5dSpELm74SZzixWTsJ5Cg5ELhvvdfUEaR7u6fgniEgUZxjt2Fe2FCSh4oyWHNj8G6UUh84qToT",
  "key17": "5Ke3FHkP8rC2obx6s2dhG5D1s6M5A5tYgvKMvdD3aLt8GryHjMC1nKbzyJ7Nkt5PQwT6m3csQyr239zjFDDsFSPR",
  "key18": "3RjkDN3MnLxsKavSxHFcBLPQZmXZRDds1LULthQexuTV26C3adq3uvEbpLSmNRnhSpUdMQuatPdccUtbpWjkyDf5",
  "key19": "2gaY65bUkqyoXZeP7eFqnGMT9eEcdWWgpughtKtkWZV1GmH7HtQDdLHULyDHzgA3HHBXwzTcK6nDKSTWsyR4ia5b",
  "key20": "4GwNvTWRwafAsrrFu4VkMyNuoh1TmemSk68h8c1N45A2jbn59HuSpbGWmPWZSjFbzFsHnFsiacQAwWDnTtCfXdLG",
  "key21": "5Q71EX9uLUHw9xDVpMyFY1iPjCEUysyu7azryaRWsZJ5tSCRNkVjezuBDbmqituY6Pg81DPfHEY4PQWH5YZKNWPf",
  "key22": "3782MUVyp92Gp86YfrdfEHwMGLZxdV6fYHaqRCAs5m8kdfogGp4fx5q67tt4A8KSsiN79nkeSugNNuJCuyGamh22",
  "key23": "3BErMvSy5dBmWUd4eS9BPpPx39KT7gN7xeM5VcMTnjHjNZw5QbUkaS5srU9A4YLT3L3KBzFetL1jjGyY6dbRZNAN",
  "key24": "4fHnwSEdGAnbwwwVit9U1nJtxg2oH6hn7vf4MG3N3eP2itB9nohLSf9SuBcuYXkCDvobsw9JAzTqNnJ9gxbq4dYt",
  "key25": "3t4YDPdXmkW9Pdk4davgKadXoKnRYBZVfR12vqB553RLLELmKyhogQbciWGCE7hRPbY7MFDLTCVrjAnNZbLLscJj",
  "key26": "2mJjL8E6CYhstSHWhUhLSzJkTDHTxScyzzLN3svMLNw2eqVK3JPpXQGzF4YoyWRw8MEYZMY9fKdvvsdbiMSh99F6",
  "key27": "4ztk3jWArp88SrwWaTsRMTzDN71M8YxpQJ7VBVeGVX7eWsncspXZaocos8q8FRaGSXLtKXyDwVTHPB6BU7CXWmT1",
  "key28": "2Ww1orQ9aderrrcdmDLiDX8agEqhyPV6AALKqiupTkQPX8ZAVMzz6M7829H2W7CxkZPdRUvaJGfo4fWLQvQBZoVK",
  "key29": "xX3ae1E1wKhsTxcxtyi2fRN1qNfeg5nvmC6iYo8KxscMDDE3k61JovVv9UGmLnDTZyYoEbGi8u2rLtWk9NbDag6",
  "key30": "3PAnMA2rmPeYRSi6bq8YM391cFQkUv8XVH8uysYG3VRj6ra3AjBuVmheSahbHUK6Dr6qWG3GWN15TtZwS2cDsoGB",
  "key31": "3ZjqsyukNimbN4hHfWPBqfY3rQriDvYmmu3k6agsUCmDsjUeJQJL8vEtwnCKNwqeCS5R2rF1LSZd9AiVF1nkL3Jh",
  "key32": "2VTaL6DYZeThwdsgWBxQJA9PXVGprkWXVU6yXwV5dmT3FG2cHT9atjoUHbwjFjk3mxYN4YmjtJtVMCJQxUdMshE2",
  "key33": "tNQTyXpdkASpNecwZkw52SUJqHf7LRbgh1Zvb9ajXv8RFzBjbiTBJzXFFWrVHYuNeHS9TCJL9LVTyNUvU9mmx18",
  "key34": "4MXpiq3dfjEzH9q42UP745YTPydaizqRPVSGr2BnoFXNbmQkhSMpFg2zugoKLHdF2pNDfSvaijv7wm99iMkSrscx",
  "key35": "2jY1ka9ZULZMBRRGoB1TR5xqsEhehchbLsebaRRVkMppqqnnBZVAKMQjKhdYbpvoVVEv3k64zykZryW9igLCqoiL",
  "key36": "5zvmDX3AgptWXz5WyuA4DWbEiiqCutzUQ4WNi7AajkXR6zaVQrHrASYom4tKNm1LTwSa5xyYuM8qnFC1a7d3zbSu",
  "key37": "4yaKzz51Kyg7j6S8muWGqQQMvaTAg2ND1sMzozYv8CfSeuC1FguZFvvmYqUnYmVmXiYDfU5FroH2fapcfoVKvwfe",
  "key38": "2dSckAQP8FXjVECx47Uvf4zwnTyQRNbK7rwbW3W7GJos7QExXbpdv6MsVRSqGFnD3b9SC7uU8QNkaqVm1xynAarL",
  "key39": "25Kq45pdPh8qpyGzWFYTY4keDQaFataqsamZZAjesR9GiwmwWUHDxNYT6R6j9KHNVjBNQXN5aHi5QfzsWNtDninm",
  "key40": "3qYvNund7b3D2pNxyfHeYVjAsZzozR988KyU2K7iCqNz4TAiiA8CFPvZGCKerBV4v35GQN5gjnn7BoSWQ5tszdwB",
  "key41": "3GNQN6yDtJNzaGbMk2RZDSo3heK6ri6pcjWq4VnVFhEeXn8FSV1XcB2roboHLMoZqfZoz77VmN5eBNxmwKMPubMm",
  "key42": "4QAHDztPfwSder7ocBACwfFHVYXV8U9g9dYMa6SBE6GCT5exTAiHKxod9Xxpq52zZbSu41NSBSttruvnfoxGz5Eg",
  "key43": "3N5y9dWWpeTWXVQmJUgAoLoyfLW6oeywurA1wcFvkfZfaJ7eJ87HCo1ywbRQNfYrJBL5SDj4pn8PE2ERuDh6rb4c",
  "key44": "SH7cWcUhQEn1J23aEargyy5hgi1VXPVTgjPXGnqUJbtf3Yv7sap9MKhQYjymbfHru47sRNDB9GnVgtHpb2B3aAL"
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
