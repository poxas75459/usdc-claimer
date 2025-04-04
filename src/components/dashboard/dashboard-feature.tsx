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
    "S2fxfRSSvd37GgctYLtdHnjPDPAKpdesTVPsxiXB8wa7wFBitCPRxgtAZbnUK3ty6ANcSJhZwBmHFqYyLwvFFsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFtJrzqxsTYYQiTXWetn6DYc1NKL3B1NhXVwbhx6PCNxFrQGvY9YQfHVPhVTGK91c9s7ynWQs27qR9xwFRnkEtX",
  "key1": "5PmbEgs1Y4LCTjDjHagekrLHgANTA5CehZUxxdsSCKaEg5b23xNbUQ8itYzD6eVx2bWwJtrpy7Cz1vwvxDg1vQDS",
  "key2": "3qEgw8YyKumnNySsvhSwChdubWT7wQccmCckC8Zcs8BwfjMFH7kUfJpnKBDfdPfS6QKrRxtuJnthCAUEqFzvan7C",
  "key3": "66A4MjzjEJVd1dGodca8pc3zxY7nXb94QAbQGswe3rKyMmhgWwYfi4U3KpTYuJ6vEFhzDkjVPu54CHAX39nXrNug",
  "key4": "4Wfo4ywZvwX1BXrzYKprYjNfUyDgyNCQK3uA14AMxY5fvCtqgSgC59ehMgLLpNXoUS3bCf9RSfYfUMehN9qow65W",
  "key5": "3kTNtxt53WkekZ5dg5xb4dA6tcTohZ6RfYyuEhYeiJRHhLwVkbxYS6L6uFwp4JKwpcN66uUeFqjizStHiSwPaRj8",
  "key6": "58vk3iA5oWzvvffs4yKhVRuJin7ipySWJXC794RHAQzVvUMzZjHSpVaA24BEJeT1EGGMZ2zbrAtAgUJ6MhUnALMG",
  "key7": "3wNVzfRXxobQWZjmnEz16jJuZnXBdsaA33fv1zw6hKHAgXhkLDgxSHrwqB4kiQqptJUzDvFsZpyW4qTB2GbMihW",
  "key8": "53UaJSobom4nGZtemATyXb3JgCzk3QEiPrF5SGwkboeuv9ANj1cjwqm1Eq3Nfrrbk574utmihbREjZ9NFeFEZAoG",
  "key9": "5XdTNAKodpZcMZ2Lr19g3bVsUwt38WgujTk7wpsn9RkFh3hPRqLagiNxNCZ2hescevhQoC9vsnxkFD2c4JqHv977",
  "key10": "676YbmaxQti3DABipH7V9Fz4pyPVyruJKYq6TTVLiWkJQtrfGXfEyGdAjyb1BHCx5eGKTRsbZ6t1DDZ3Ti9kLyrD",
  "key11": "5T4tK7JaDzShbZFUPFhWkDu6wo52ecoTRtDLDGpfxWLpS3dKQb9A4rYUPPPyWyQWTVyvpNyXeV8H4bq8Ptd9R9tC",
  "key12": "3fCSyAVD75236RBNu212wPZsDm7v3pcwxrUQviWcJyY5MC7AahAWP1V4QniZ9Rq1nFT44ZNVZM1LK7W2cVdqQEQP",
  "key13": "53Z7EcQM41EzBr2xNtxnan36kUVf8K9wVwK1gEGK8P7LyETsmmEM7o6uz9jdXtgu8zdwDNrL8737zeHHJgR17bW8",
  "key14": "2VB8y9NC2AW7Xp5pSaG2CrYvBAr873wyJgaZhr4zPeSeere8Frm6ykUFjoHfEcyCfT5PTBqvJKazx5GkafrQPPxM",
  "key15": "AA7sxhMGAq4FureH8A9XotyfA7aMrM9DQfP2USXTYeaMRAW8kBgijtsBTNWMy3SwGMjWqXPEtuf37sdLXpbmdN2",
  "key16": "LoBJ3K8vfXyBzGHD1mfmfVrocfnrpMjujjGX1WLydwgfmhTUta9qc8vFNPvrbaAT8dp87CSsmUvUGpRpHnnz54b",
  "key17": "5UjYbCXXYAw7hKRNYbT5zzgC6xKkKaAgtjBPBTHFCiiiCV4kpfp7njKrBzzgPro9gkJyDUAZaaNref7NCw9xWJ6i",
  "key18": "3sP2KQaoGjnFN8nukVR726JdtWLYvU9s5sf1UvwWPNUEyLnB8PsbfCifsmeiGHWvUjTtgnHHS6ZobyFMtjNcmS6U",
  "key19": "4sgn4k8buksbjxHwtkkdjQHx66suYRuoqFHosXqTQMbM8EU5Dp2divheE3HNjpAjhX8Xd7t6nxkH38Rf41G8sU6q",
  "key20": "3G5YpFQr6u7NBezJCtk5jfqmtgwxpPCKxBC3Yc9k9m3FaXg5iNDPr5irvwtF9PqN4pNSrnhLhhbQ2J3ErroFTVWE",
  "key21": "3eWLiWGeeKg1WBKiHiwRqaQUpXUnkxErE45R6aTtzcy4KTMuUEqgKxsRqCy226oVPxwpYxduzVaEhTNANdV1KuKe",
  "key22": "3qCyYHSC1aoL1g2SoRQ7hH3gotg43vP5x8NPW2a9NziZrT8CV4MLhVKF5kTRpnFHUuq5wxAwEYd9Q1wKshxMJXHa",
  "key23": "4nG4jDESgi2ftMadhV8VSdL1xqGSVGTqFzroGvdkBH7t3NM78ZPLczsTjbHFBGZGWfBxvLULkhisAp7SqgtLaAD9",
  "key24": "4YFf5k69wdhpSr51CR7qkpwJvx7SWsfYtDEHN1YpAj2GKac1NfNEdmoZ6AEL2nsLV2VPbgH3XCpdR2obnnUzU3BC",
  "key25": "4UKyYUxpBqTTty76STG5jNRRTT8EaYK3Mca8U2bqNb38o4sH1ushRMXk38v259nGT4rjeQyFg8pQtaCm8thMLsur",
  "key26": "4PsD76V3Tj5Y5FHpqdXNiji1XNoW9oMAFjmt6jANPQzCVkjhZeeDnH71qGTHyXxv4icCFqRzoGXdLrZeu6Lc5Tod",
  "key27": "y3cQhmuMf7hfWzxLsgHU8FY96DiTSLnBabvbqk7Yfk8ueky9dWYzr3F8jxq5xg3zdSTeUr3myVrN59qLppFpEjB",
  "key28": "4V9spRrUK1yFaNbpiP2V9e4LkcyMVHqz44F1hPdjAq27rjyyvj73YH9F4KZiAYhxyPqKidRy5mjQLiicFhxPxsJv",
  "key29": "3cNZWBSPJfwKAVMYNc7bjjMdvyDDXzF8GwYgS2BASDcdkEzpLse6AJEEjDF14Gdr9PD4vtVh68MgoQLWTth1fQjT"
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
