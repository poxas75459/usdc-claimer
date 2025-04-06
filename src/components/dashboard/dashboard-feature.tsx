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
    "37WbswrVdvqkzDfNpcj3kLMSHVrDxk1uHzBZx5AdKMzep9wNiHGZ3SsjAW52UWTdCnwpnhThXnCeWLbivxCbD9fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jtMxqY1zZ4JtKXdfrHrPkTRcvHTf27hEfdZbHqgYVKnR9t94o5Xr7HBygUotXjPuH7HXijaadFDfTyCaLXyAvYz",
  "key1": "43uYYtxAhY5LWgxbiLLCYW7xeiWRCFU6fPDh4oZB4pQeWJKaf7pVz2vYY1KrEqQZJF7riXUKJQBGPMQFoU7sVFNH",
  "key2": "3WmaqiFbpEGAT8WR6M2vmYhRtVLRjcQHmXtmbXbuodyjWwDRpy19nmre5h5Xb736iS5ZTGv6KRf3HNP4FjEUCZQZ",
  "key3": "H7qT9SmaXNPyT81m1QLmeekp6VHYmyP7RzsRaCrY9NEbV8hSGhEaK8ZUGGH7kEsj9ViEFUXHZtd3h7dFbkyc8wG",
  "key4": "8EFg1VuyC7KVXMo4sqDuuLy8nTuWgFf1uFd6PP2ahQapLsFvWxb1FhD7nemuurkQtdrbkZ2rxQ8ppzZkXUNXL5x",
  "key5": "3PogihfDTepXD3dHxLhQzyFrKaNd1imiwFuLw7mpsp6d5DDDTHbbE2NiGHEb3Y8JMfDryMVdkDDFaTLFHAKAnQsW",
  "key6": "2aHhxj4SKYBLM3WrSn9AtpYQm74qEatZ2M4hnzTbXYyfitdcbHLJEF6Yw2556jTbk1SB3T3uwsvnm1oac8D9BLwf",
  "key7": "39vm5UZs9Z92CsZnaYxDh44t6tf8hSeEE16RpoaQW1USzi2QDkKHY6nwA18J68mUVagmgw3eZxhk6XVnFy3AXbCb",
  "key8": "63igEVvanZvGbzkAENLUmjkmuJn5GDjZVWPJSydphPbs4h8Fpg2iwN3XEYnFje2WDtY2oiDkoURbEMoJYN2qzSAt",
  "key9": "qbGo98WyxpKhEzq4w852RgsYWGme6Y53MPRqf7YGXBNr5RgHcTYPDFbj36C4fHeFV7J1XSkuHV3vdrQ5f6tC6Ye",
  "key10": "5yom4Erci3BgouFPBDWPEwzK7TisnK96QLxgTeRKAhpSrJ1YnS6GnXEAaPrLVSPdHYUzcKUdR15Jt244s4jSfsm1",
  "key11": "51UHVV2qjLpUdBYFd3T9GfMCFXwmyfkuNMo41HvH1t63Qzx1dW9xS4YTy7Jv8EA3aeaGezsPqmrFQnAiDE5Y5Gao",
  "key12": "pcHfuDqn3EFrKRhfsRm6ccJtk1t8Wbr5LsLNZA6ouo6Au5PjyK37ecNPrgRF6W2P7T5kPQksa29aVfjWK737PXD",
  "key13": "2Rkhp87UZ5rBSoCBMdL9zu5GVtAYLPt6DmbHmFMReABPNinHB6wr6wftQqnsZ6a7JZZhUrXn4tZs4Qijbg1CVwbB",
  "key14": "55keWEjuPxiKEd49U6tLLbsFrhH2VdDtMezA1tSY6bmohYv2mzK2xthqABAqNbpfj4mjoaRbHRMjgBNmsFdEWisW",
  "key15": "4x1bWgBVRNazuNviqjiJjfoCvZ7WgbR3gM7YPABDjbpDiuhBx2F9B81au7BosUPpTzq1XA9sVh7Zg3vcHneAiPgC",
  "key16": "3wde1GkgFzBJtEXa5yKBTK2y8ZXHA8KeWgoVSSU2pYqScSkhkRHopzXjZTiPa6Q8EfBLxV3PFjLmD1jGWMH95AJL",
  "key17": "gBeUNwm2JFCADqjxrhVwdCCbVt9m7nkiznsqLommD79exisyNECcqM65nWNV7LtdfyA8HFPUhwMS32jUfEsPN3o",
  "key18": "5jMHuij7Ps8KsWHUptkAtjbFzsY4nscpDPfgmuCQqV7XxZPe1YqMgRKrBbVgnZw7cbCpsWBYzX73AtY8FCkmwX1y",
  "key19": "2D95Nc9gViCBUddBNdrS2sHC6wMKgvwoWpB5ziqyRoPoQWcmMxgbhTHttYLBuGy4eHfyAPumFZFREypMGhgYEp66",
  "key20": "3RNzkJwU6JHK7UDBH8R6EmDDvjNnYRWqYmJoEYu9oFuFsPojbbsGL9Y4WTHWXKZ6SQ6fRWSZAYDkhPhipZEDGMrZ",
  "key21": "3C6iB4YVqUFR53qG6yRThqRYTtL9N4znfkHvwKM6o2giXPtCmpdZy1LTFNZPwHJFKeEeEHBzPzByahWRmbouLZ1z",
  "key22": "2NmTjuZjsHxt5WuyZiswdzFnHEZEfGZ43j8BF1qvoTeypHEemRFxvusnxfnaiqzfRZfwBPz3t1n9otbP1eac2CK6",
  "key23": "3jDVfKPh9qHcwbjfdKj1GyTpfNB5JWbcDvpv3R449JRDz8VRRbvU1sEZUKeHMc3K1A87FLDW55k1q8S7rPv1n7TW",
  "key24": "2AEqMoqY7qBoAJeRrtKVuxrzoVuc6gxgfzjwxNWcYp5mQTuCRB5PMHVQYUdikrMGQG5Xr7dBhJqZS2GdkbUhoDyd",
  "key25": "2zwAusU7bdVnWsrZLkShDjYbEDgw6YrBtUsgtNrmdms8qYYvvmmrTJPogRPnc3XMuFEMjLdm3UXoae3R7LqSkL75",
  "key26": "4EjE6ZajUiMbuc2BNMrrmwKU1KGMAXsidk8Rz6DUYcbuX8vsHHhpE4jhBUhWhygz7do1ueWxs5drQwpDcuyPCcDm",
  "key27": "2wg5DoqDx1gWZY2pr18fqXuPwxKFCf6cUFC96GSmdJDNdQ5Bt48PoNM7cRYLhMWsCMLEM1rL3mbyh3mDmMocubfL",
  "key28": "5dLRVK6YUDQE9kCfZKoHMc4b76tqXAhL8MZwLqV1Kzp8G4RHweKDU7pidvj2Y2rN2jCA7aDZi5z7UYfPNjavWBop",
  "key29": "QG22v1hfzaLqL4yN7mpQkAThdZrBcvLd7t2Xaf6ZEFudBZcQdjkq4P9WDTLSLmyasMDMgr3bG19jRNpNdPtNdHZ",
  "key30": "4H8AbKVgw2zBSgkmpc4eeh8nUA3DnhRCzVn7if4WWNq9oTqG5brypqv86mFEarQ7megLrtXRjQHFxzL67VVqTnzV",
  "key31": "4o7csSvyBY7sfNcFFmeRU8aiprkpcrcNpDgS695XmS27CHzg4NGBuu5QnQb4MDt1TKZCzzfcS3rGQgi9GE1jJ2VE",
  "key32": "4KVQhKWeAecYzg7WKmKCmZkBqrpCgjxMQyc28im7J4te2svdh7YH6ik3treAMaQDDbbwDLxZZHZSpz5Qw8HtYvhg",
  "key33": "4CpbSsWNYzQCdxXKTuRGLfx4Gn2R9nFC5na7fURy43DaGHLcJEcQw3CNKFv2UGjfdxGmceXQE8QHkeHNoXo5ehsP",
  "key34": "2s2UAigTmDHMRQu3PPKVoSanKK9A5gtiRCRuUj7gjEoQoLa4ZzBELK3Q3GiL4UFKWaSNgnvknbR2bZEZ3QF5iJHB",
  "key35": "5n7Y3Z5QtS3c4gENbNtW27jfckF5DX5aHaaeFAVyP1MbuEdKWhWbGcjqmiZ9STBva7UEVGv4RkuL3KxBUXqr2PQE",
  "key36": "VUrm58TBNVVzY5wCHBqkVVnE29AUPicawm4xcd6HDukUaAgEagByYG6HGdfAe7Rn7vQWvEmhGWNj14vkzyh2wHw",
  "key37": "4qJZQWErDee8vNxKzztpx6hHCq1yg5Z27vVqPzgPM7bXXa9N9pPNs13iYx46H3yaBNNSDkYKoTNXWB1riLYJMEpC",
  "key38": "5Li5esewfFJgg8xGFQgvdeAPKbq89yeJwXpSErxoDuVzarQYeKP1zCMLq1ybQdCCM8zsaxRADae95h16nfbyY3Fm",
  "key39": "4tMgtwc4UkjtrbXyVvyRunbxvxXyYHC3JHC4zgrjn72gVfu5ArwXfnsCQdZ5jNfJwvK2GzSjK1KYNJeKk2Ax4dNx",
  "key40": "2yychUe4vbm798T6vdcf5NQev6u4vre4jqxFKK89cK25MD8KGMCNpdUfKrZsdn81u1T8czz9jiDBa5K17W5A9Q4P",
  "key41": "pjEspRStLwuuh8CG5cQDv23noiCiX24ZMjwA7CHp518mmZ8HiGse3vgUBwPG9KQYV719c2bQ14QxuX4vCzi1LG6"
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
