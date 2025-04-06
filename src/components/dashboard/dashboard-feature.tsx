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
    "3H6rctNNrXrTQzssFPeshAeZyJFSfHsJfZr54dAKgiXeReoGhzCKQFS1s4LuPViffjtFQ4xpa74dBuv2ApAZ2cp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SzGKcgp1F234oActXGAuUpwhtgXacnyCHQpUo26KiekHUUWq8nkdZGJ7ARqvuMBSkXT3NGwDTh7ct2uwfzVCqY",
  "key1": "XHTv86bGiAbWUHvJ2xL6torQebbZ4QDczowpMZ5Md1us3bYWqBGp3Md6twK3fNSXaUxzfVwhjy1yvUx8ofukP9B",
  "key2": "52XBzaMc2rgiYpkpohCEu3sMaxdABb3v2R1iih3P9qiFMMXMZ7AZczadsqWavcqLpeT7Pq1gvWfbA9aFyNBg7rm2",
  "key3": "3mjtNASpDtSfm2YChcXs4Tg8vHnYK7NtwZ8hxZ3et5EhHs9DZpueRM17Pt1SYcsxHGgp13bnwq63B4g8xs3rAi6F",
  "key4": "59mKXJG4oJRHLRpiwXooyDoB1NkdUpfQoNs1T4bEzKQoMUaJoprYmhmdepuvwT42VxV7G8Qc8Cydska9oTWVehDM",
  "key5": "2j76xCihgdP7Rk5g5QmpHZjp1mFAysVNhboC1HpQiryJAn4k12uLkZJfwBuzoNNzYMwjuBxqCiU1LexWndCHdmJD",
  "key6": "5xvT5vGc6zrYrRkWhy1aXPTH1tev4GgtGNXpj4aYJkRG3MARxKXh1E5dXNfyjW2hK5WCn57S6d7j6WLCHQ4Aamuu",
  "key7": "3mgs6h61mc9sC2y2SrdeFzneWMo1S2hbAmrtqPPStW5hMi8JD1JzSvF26Vpq9fzt2GUED2h1dfySxTTpb4ucybeG",
  "key8": "4rFAsLH5g1mgwaUr8Kxv6uHsBe6kZnso6RxfoV9Pex8p5D6za6cGA2zLXXZzx996nTXCijUUmdRY16AMYqomUhkj",
  "key9": "5zN5kY8qs6uA26UCgHJxPLdAsyunKEm1awEVP6Nf7jwaJQ1uXm9fyGhiSoWV2FGXXjTf99EGzv35CMt22BEGtqFU",
  "key10": "4nGkjY1BXjZSXRYogL6tYTMcduwFbGsLz896dPFJNM6cbG8FxNuzYtdP7ZqMzD5DthHhCjhJoFdEzeLCKRTagJxC",
  "key11": "2THTXeQsskduWAV7WxofZE45NYx5z615hTRVB6rWb33PEPATEgYWD38Jzi98YzTUSmKkpzE3dqCZWFYGXhoeXcmP",
  "key12": "47ixD6VFuYz8sThLS2uEK3P9mhwZ8fmN9jDwR3N4CAiTuuZN3VWj5J3bBaYvuGJGCG5GTyVjauShqat7Hg83ohHn",
  "key13": "47tvYAURGhvu41ryR2BmUruYHM6a1voL9J5p9zomU9581jwH5wDA7kgBfswwxTCHWJSNa1CZYaCh1anPuShb33S3",
  "key14": "4y9pUaXJVCwxwhQxnK6ZtCMCZicyZafjUdQKhaYXFoY4jQg7A5zi79USbkk6gTPwRJaAN8jQFoSnacSzpVQXHn2a",
  "key15": "7ksQZ6VL4WgGGRyxkmsDhiWMf7MgF3KpPVxrJGUQ3dqxv2VSUs7VbhbGwzjcTHe5mvc2XRg7fzDp1kNMak24W8Z",
  "key16": "37gtkTCJS6znREFGa2kSV5BpDFT7x7TFytmAHGG4DgKw5sCyRzU2ZRsq4YWecxoDSxai3DBfgpUa3cRi3Ay9Kx9J",
  "key17": "4jYtEJbtVEAJgsvMiTtbtWaT9AECDUFej1KyVV2KM4zGpA3nuk6vvQ1MocKVYZHe8s5ESFWThjvb4EBt2wCmwowC",
  "key18": "2V9ibABvqha1NfEv7c9tnTu6zBpWA6fYJSgFevvk7qm7FrZU1mQmfsAmSt2HTPq1KFqFCzVRCCv1LKCCyr99KTAk",
  "key19": "4KpgJqFFi5nuXmfrukUWSPmmEiAb5RdB7iCrNfEVuBmPfdfNbT8cZKTrcRXWbXjHnFmXNQ4fmCmzZyHToopdoFXK",
  "key20": "3bSEEVLi2fvHgpDY3ceNybQKGnTkv1YhdNurWW6NvokgDVDDRL6xMPRim2ww1pGvCqV3aC2q9w29iphw2xKSFKeg",
  "key21": "3NN6ik6YUEfH7XyrbyUygY2VF2tGTqBKi3HGvxQCYhUeeuC5HVpDG5FqkNi6ZQvdysngNqT1kzbDr2mgb3TLSUPB",
  "key22": "2kQ85fT2gXqvvuwjZwGd6gjETfjKVUSG7HB8yEVYDQisBg55fhKfrajEW7NJgHKqKq6F8A24bthwtDHN61Hb3iLj",
  "key23": "5h9CZCNeN48BNCrCDdpiJka33dfaj2EsPG9FnkuZBzRbavMCFZfwGc8ntC8QS4hvpuncjhyja2ZKkGD8av7duLP7",
  "key24": "2ZA5pb7x7Pm2RPp33LpTq66GiFSvitNB3QH5azXVcFtm9J9g7UhWWKhB7yZe3LS3pfYkcqijAnwNNh3YWtDGEcJn",
  "key25": "3hwugL1tVUycXPfxmXXSQqTZd1Ri23zvaNu4vJLSvk9f7aQ7EsrVjKujJCa1cmPMFprnT6tVytYuFg8sbPzEnM5D",
  "key26": "2G29kqRNHUNmNXjREW76c3eSjXRTFcU4NeVCvsvmhQUhW8PZBob7rF7ApS2mkBxksheCG1Yvi2fV2xXZbbgBUZC8",
  "key27": "2YkBa5aHBt3SR3Awcsduuru1Rna3ansqJByHhZEyhJJVubecCsgX3N5sR1PXicnvdgPtEuocVDKB6ZwwNSWPZakY",
  "key28": "N8MfTvWknV7U4vkotuLCFx7Hso5uEWxefDtqtwG94yPCmd2NYSsFzMM4r8LPJXJFqUQ6eWavfUhc6DATWmab3B2",
  "key29": "532acBkg7jEFQgyGUcXH31TgvyE53fWo6gzwhcbSeS2EA96p4E3txCitegyrr9QBm7tateRghUcZafyqXjWfV9pC",
  "key30": "3SZY9BjjfTGLkiXYdFPaYt8K8Lrj5xeLEigHk3comUG6kEKbHmKFCmMt8x5NDTttfp54jEDM6MZ7UKM5FdqfRWxg",
  "key31": "4r1ixrcsjUGp4FJQ2MpgfMEcC9VGJW41DLZ3stdbEVKZcsbXsGyomotudhbFrh3Ed16FYbGT9Zi9bNvqsWe4kBgQ",
  "key32": "2ko7ncUsKcVHMdQvL4KYp5CkcwTWM1o6FauMNJsgh4JDS7EGGfZGG9x6zVQSncMPmtShAjCs1LpwbportUpV3Gud",
  "key33": "4ifpc2NV9kYUKTFyM1YzpYd4Au9HgDHm8icMkiyhxx4Mbi2ojWgpM5NiQxZN12PwHAMCFz7fNQVxYH4Ya3FuJKQ2",
  "key34": "3wAu2do6aT8KBJ51WNULzenBRnfk2RwviyJ57PVWRkgTA3y948vivAnBfYxtTzbJo9wk14FD8mEEqzheEoSuuQCF",
  "key35": "2ZyXtJG3jxHTLwuCq6Cu9RPD4Y6s2NPj81XhNBtKHfiF6gv4ujTuwdD4dqsUALPkeNVTqqFqhyRA6C2K9jecQLjd",
  "key36": "4quNZzVcfH4MrNB5i7t7oCWmk6cJL6aWUuW6dprHpttdrEqumX3E6DbSTmQ648LtcvGsCCestcqUUMq2F19JLWJv",
  "key37": "2fH2yLxLVSyXJAapZwAQh4zVS3oQJW3JUAkRGRPJEUkyxV4FYTsYsQCy9VeTWRtxUTH2VMUhF4SLV6A3rUVGeXJB",
  "key38": "4g8CLgkUFgvVeTDNPCh865iKEQraNxx3ZYPaqqrd6CzKCK1peRUrWGXyKLeACrhpxEh8H95oEsPbWDN5PuDq7iyM",
  "key39": "JyZiTg4uCJvWueZ9724nSfhnc32Nag133mgYry3kUKSb2EYz53E1KqunMHHwr78oxHX7LmpoA182D35DX4aJhjr",
  "key40": "3mnczbgW5ZNPPiMxCFaRbjaSUWnEW52AkP3APUEKuvH97MkgPnSQhZ9gGkxXTEaSDCXB5HTyJpJ4g3nYECdz2gqE",
  "key41": "3h1F7mV7ophyQjRP9VewaGbr6iBokmpWH63VZQWEKezPRxmYN4WbjhMih331ZvAumPmQXwJ316GesWszTqLzJzSZ",
  "key42": "svmbpmwkxxxUqX9MbXNBcsqBFryjQ3apf2cwNTmfDRvUuo2zTAbvG8UG7kTT454mYaA9wdSDFHaRjwnKii15tmN",
  "key43": "4vm5YT6W6Vt7YpDzExcoxJL2yPGUtJcdjMYtn61exaDrJ3DTRtNevdUJi3YNsTNGHDDSZz6g6GbNXyjexNMeM6bS",
  "key44": "5S4VBBCxR3ZsEjgPpXUJC8KxU2jjUWSyNr2Bum71MaUMuQSaznXHoboqoyGwraxvHK5GjmP5TckRtgFo98mpcvw7",
  "key45": "4W7tpxMyH1P8ru2RZKsztkJH2YyTRPuqVPr1rvqkPXse84iGrkVrgrVr2hx1opQBwkGuJk64YAnRZ3FVnjkYufsD",
  "key46": "2x6vAegfK331D3KTg3TdHa1zW1QwnV96KGXRhpxAkWWN8YLSsfM7rVu9FYzzrtztP1hEYU4eXjUtvfvU1CadtVN5",
  "key47": "4zWJxwsMJSkGjGYv6KY8KAr78Go6zkpGLVtVV1b5ccKzJ9hJLu8jN6ALApqPsd3799QrNmfGnbnp4U2CbY6u51pG",
  "key48": "4dshyygKmhQMaK7hto5pPwJu83nAJLYiBVYNzyHAK9jTVcJvfd6JnCzP5SwActyiZmeEXuxGP7K8s6dur1ZS77H2",
  "key49": "2Modg1eRFJCg9zikj79mY9SG9gRbDNn2zK48sAPkVCwR2Lcvf5iHwULogdrjJnp4xEvgjk5hfBjHUTQWtsNf3a7Y"
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
