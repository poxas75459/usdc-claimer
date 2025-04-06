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
    "3YqMwzWBfG12uyHmyQkbFkkve6uVHnWUB7fFGBZmbVj3EbcAqHyynxGfDHEiKkY5Jv4X2cdpNjixiww3DywhQ3Zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Jo3WbJTgNWNGXMJHj4oLgBsy9Ly5ARENoz9aQiFykNhpBqQfPsLbMTzRnrQMLxgfCWMxxGScAadc6ebAVbhyVS",
  "key1": "3xuKMHidWY5Q36sQQvYRs3wyQbHi6UexYRqTqkCsfpQQksvg4jFJKNnza81tBM79Bvck3RgagPVymJc69eZUCrUU",
  "key2": "4FqF6UycVERFELaph9nS3UkRMXhFgE3kLrXEYbh4FyPWm5TxPzcgoBxNM6ZC9cjuF6htjvkVAHpLUjovz9yj6ocC",
  "key3": "3VK8jJ7NWWMjBuosp2oDP8yRDktadnZ2yzXLb5zATpbFmZqXaArrTmNgq11AJKGTyjSixhqB5pQspTFUNXAkdYt2",
  "key4": "2ES9aNhrY5sSrWguAYfcuYQRbJxRCWMkwHCzt6v7dCTwhdexULpZZUSseXYkS2ahUP6sNpYpdDCX7WTRenRZrFGN",
  "key5": "2BCdqnfDiZwvVCCByd4b3j7tkExrAEv8UiVYFd1VTEVq1GnRXGBEZyZJM5LuegXCNc4ehzRNfnvP1gMgHuG2Jhdb",
  "key6": "53vwVXBJypL2Ldda2WvqWuMDUp2gXp31vCBdXRFiu1UHGtPDHDBmSa87o3D74wNn5hiJC1nvcizwSU429WMMGs4C",
  "key7": "9q9VxMCs1vvHaoNn34a6m9XND53BuTHTtPZPmuD54tJK9vH2qS25B8Nh4kJtL3W18RPPtHjpE5vPDJznck6PiXS",
  "key8": "5vW36beWvAJ9VeZ74W9dHYvYp2LWQvZ36SfCEMhwRQYv4Y1arAKYQovCSufB7KGXoED5VwxXXsLKzjZSkd6qLNPm",
  "key9": "48cKunm91afn6kAhNrB7HLhLq8uwwnHWXSGsXcFBsA17Dc5SqpuUpCfYX1P5GZAk7VrGVsVm5UcLoin29hhXy4m4",
  "key10": "3PShaQtSLoFhtjrmpfiRp6wi5tyD4cCZLFZQzFYUDE9mj3iWq6rxuDjpmF3HV4GnSTAAyeA1uK3KLjMMpgU4w6RX",
  "key11": "3Ku5EvSG1qP3VrCC4SNKYLhX6gMQTYVBdSqT38mbtnp5G4PsLtEbTMMbVKBpmMQc3Szes4roEfKEGM8EdTm1YjW2",
  "key12": "5XJFibKb78ftJPMMCnFGGWBe5GcE7PY1ma2aNCV1eSikjoc74F1q4s6eyxe9MoTFYDD8g4FzGgMXNbk3pFCVDydw",
  "key13": "4JynxX7TBQd92P24ZztFb3oSeGb8aXr5wqDWyTpEGgLQserAnHDPDWcp9p5p6rST5XBRx67qxMkvVGmY3K6wRWhC",
  "key14": "5wFh3DrBG6pGmFmp4bVseK4Gh9bW23Rc4QDieUoo34Jhr8CJzGHGaHD5R2FeRNSYx2yzrnYq11uukLQr4gc21W18",
  "key15": "425EYtrnVPyEdkqYYKMkSZ6T1GjN8be7xrDVMccmSNuzmKLncSkv52KQfs3EGWrotpgcbbv8MNf1NAkbKEgGXcHh",
  "key16": "3KGAmd6u9Lw5YEE93MB1ffBwVvCZqogwyrMiP5R9LBzoqKWd1wU4Yxxy7XjggbqK2LoSj9NBTbyzAMyPhhkYmkFH",
  "key17": "3RyxNcCxpYxEQwcic3jE6Gycd6vcJqDUi1AJMG3nMyFPLV5qFqjbjZSkFv6XA9n2TNKVn8Ktca1X1oS3NqtQPkm5",
  "key18": "4oD37actMf2waAcrp3pjqHZLNAeHBog3AvhtzjRYadFPUZSpDbaBSEDDJ441wtZoE3ScLtjSoNrfETdSPmQqV9YQ",
  "key19": "2kGVek3jAKQpxxgQ2w5Exs5tiePzQrQCMrAhaDC3nWRrSYDwLttVmP6EDQ7za9dWcQPt3udCi3JGYKQTsEjRhTHa",
  "key20": "2c92Ab7iAucpJ1UpGA5saTdY97UDM75WYdeAJdTtG9FJkYsQci9orJYSYccyWf9rg7yqzf8rZcn9fi8PgJFwzKya",
  "key21": "3ABE5tJVbgD7GHc31yfPa6UPdRY7ZH75mZ3BpyS3bh2GYX4U6sTMBmSDMNUguLCzpQnttQ4G3cBu1bUMSYFdQmHf",
  "key22": "7jzxwa598C7yh6p4ifGqfMvwoYoGmyZBrjxB3SibD6dMRYdFegxfTi65M4BPBsKxwuhQtoUePp2bvmz4oQioQhK",
  "key23": "272527XRqeincqYA1sMRCwmAMsu77sFPMh1Ckhom93DwZNoSuq2JhUdckVPY3DbgscXY28LZqftVMQESsTkW7szu",
  "key24": "4XMF5akTi6WRYR9faNGxZgVDHtr8h9MLDTuuktCoV4gP4AqrTgDRUJLb5Za4MD7LsSXZSmPEbyGE46WrKmHkKDGn",
  "key25": "3YXNNmmGhpGAC6FhEHd3EN7EwDN44tn5NoqvztXyvNfb6GXkb3T1m9Af9mgpWxStJp1u8BrXzwxZWN6Z4kXJ9BTw",
  "key26": "4gyyoyQ2FnmUeJfmReY9zWtzfZiHfs9VtxNVXvfyBZfr1fhLY4L7C5QEfbgUt8ddXQTMfEQs6AV31LRQ6S8VRdNV",
  "key27": "7G3uAs43ecoCb5usTksbJP5zBmE7MyttPysfvBSQopiLMQQF4RnFGxKtnZ7KENGQ4AwEAP3R66gdEkzLLqZER7T"
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
