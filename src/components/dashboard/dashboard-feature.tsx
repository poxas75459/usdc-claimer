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
    "2frrXuJfiChSLy6MSEfa3mKuLT87nf5jzTY3uh1MoSnH2eK7knUmMBQEEgN7soZTgyMyfhgVqD9KupsH46ckWWAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iTqsx5j4v2nbgzu6VdU7GFTa9J7sznVDs4QGAtv9mB4yZUgMzhZ91cyoapJdUbjJZgTigb71UwEKTZaq5ehAJmj",
  "key1": "54zxdbsiX2aPdms5bnBkw7fEh6xWqM1pReUuE4Unot8cADpJxju9AUVyK6MkfVifqPNE8ZZcb9pF2v11WTDexHku",
  "key2": "2cBGM9a9NoFNhhfAnQKh5BuXBJkBkZAGgdarEfziqLJvHbzdARUB4bux5o7Vz3rp4zAUGGGEe7GgLa5oWyZnhqVb",
  "key3": "8oVRkgiqJWQRxwRf79ShYPgd3nnfFSXjZ46Jr68MvsUmNUo28MY5gXinKQ5hVTn5u65ZS67rJRBhmaitUehb9XA",
  "key4": "5qQ4iiZW2x7PijqeAkEQ6rLhdWj4wdAZFRm7irYqHhWQVDzvoeNH77bDmfyPnUBZ5Dkaqw4kid9X8QML3XEn4Hc5",
  "key5": "4p1fCx8z65nqZ4ghLr3gAzuyjw1o53zc8CxsbHsJzMqv3rBo97A9NdkcAaXX71oT5afpRwYbWWzD3ui18u4iCgMF",
  "key6": "54tL4CY9kQsX3wLF5g4bSCdPJQbfG73FGikrwrwGXqqPKD46emWBKRYcFpQ598pBPPWziAFgjoMPpgBp9ZYPRAsA",
  "key7": "4jk6QXgDZjmDcRW6y61s1bVKpQdL1h1AUD8imvi84PQndrQukZGar7AKoMb5q2GTQXagdXrimshNBSCzrdCURVC6",
  "key8": "3bF2RhYjtqDgXAW5nCYK1TSmnqtBMKDmmfSoySxUczWZUQ2BFL96zEAPzQjNs3AhDa7zdssVUMyHHNnkt22rTnCP",
  "key9": "3rmq6L9eBzEEnAG62y5rgwfkdsWBbH7fTooi687XLo7sj4vkSvXvAtGCUSoqavwZNoKdXUCd1SQGwgHhAFQDLnC5",
  "key10": "298X9UfFRT8WdHu2whJeM3zUJ9LSiusxVH6zEfJHC7Bx8MwHZ33uE3nrkqGpefPpRBGoqSG87sWbQwHEbmZDKnyp",
  "key11": "3ZT8Lbe25g6wXo9weivQhbphBUjrhDe7DmRBABUoMKmGP68jjrHxUu8iTypTBixxvUYdmK4GUopdMQEPW7eAkvb4",
  "key12": "5CuCH9xfq5CKQpxbm49b4gpY1Hk7qRHFX6Dc1tPyatPPxXxQP3wTsMAwqCQ4R4kdkAfkTjggbserTYUUDMYvswhE",
  "key13": "44SCumbzbggBkaQyihc85UqFKkGbGhSKM19qBPPvX8dwArqk4N37mXL3tvHzwoU7CJaKcmGDo1Ccyb4F67aBGspB",
  "key14": "TEcZwTrpmGDGNVj1NnfsYF3ocRXofSMVjQzsH38h3eMKa1FrgvTSnfmvLtagdVCaPc75mcheUwXyePBMDyCRK5v",
  "key15": "21NRBPhbUmyJLjyrcsnFEeYZbMRi4pnrAqtY6EwLyNhXndvwKnirD8BoZkX3tXqT5JuXiwsTvaey12XAkp33kvNG",
  "key16": "rQoVGRgZ22G9sFDzUwhND6Ak5RnQAvf8suScC7ELFziL2g7cbeGnsVpwCyBLebuiuxBNYEbC6MZfxFiZrCjk9q7",
  "key17": "4ZJoeLSjczsi65s4ZZKLCC6Pvb7LxWfUG2TzULqu2tX8qwVqarQrGrvmoyFnTgUgxYjPnx2s9nVEbzBsyih1ySM4",
  "key18": "2jjfbciQz7aFY4QRDxKZ7D3vf4ZpwBVReSFf2LPWHszp1PRg71fdhA5U33MkbPorENyMxiwopDDZ2TeMKfNxaLEt",
  "key19": "3R5reH5Dp6pWWz4mUSCqyZQswQpzVv3G192mf6JzwmVtm47n681zsjXvC6iEeqNGsKkRiaxMtmeg9tY1qrWGm1CD",
  "key20": "3hDqpQ1GBNRBE5sBLVcw4iD3UviEALL3pbD5igMPDBYVaEyxs8jkXAA46tqDxTZqkJstT6DHA1oSzw6ruCUFsLJ4",
  "key21": "5rMK6HnCBww2GRRtYt5wDqefK7Jw4MUYZrDi8tYbW1RfY4X6gfxYvV7oARYJDpy36E23nb7zpLP7C4AGPBv51AsG",
  "key22": "FXhYYMHoxkyRtTgAEs1kZbnJMH5UeuohRREZt9fF6jZxmeCejG92RpM3bBnnuGWYnVq9JT8B9uWXLU2rn1MfiGo",
  "key23": "FmoDwVdrAV6JxqXwDn6vyN9m8pcE41uYd6QHtATWHPMLFHcBkuujQhRDdTpEByM4tQ9X2TE4v7P5AQmZ5ZpgQTx",
  "key24": "3yFnaU2n6WLRMfpM3RfZQJZNpWsinHoYAq6S2pGs9ruDppVq5ngPaLCm3uEvoihGtZccDUNUHXcpWidVAq3A4Zec",
  "key25": "2wX2RJoFNept2jembiUJuoZkzqiARuVtH5W1i7tSfJodw2MsTsQXLBWDVrWQ8rwnJAP428bwQnQhzAWeRtDunp8j",
  "key26": "4jD5ikFiPx3EWiZq8XKLjuYMHRmhz6caj9ejBXUSGBVMgKJpTXVZoQuj3j31p2MJwax6nNzKTUvCBpiJFk8oAVm9",
  "key27": "5qRwDwbXTdBEDKPsY44GcRGBLP41rEHSh3kvUDuEMzx3gx9545i5xjBzxikQL5FdFbM4pnvjtXFykHUScCpPj9X9",
  "key28": "5YDq28uEP6eTY3mfRXiA3nd4dEXrLNJZGKHi4nf1zD1QDfoqsQoiqP5T6ES58hLiurZrVcLGvsmrB8QBHTZSi6xe",
  "key29": "4n1fxLq6CyVztCJFUuhbWbtzx3joLEdR6V8iXeMJWg1mVWGQidyBdeKPHmMw7CCgVPhPFiiCp4BWhTg9UgpErnW9",
  "key30": "39mZrpfRnZmE1zEEUgV7u4vY75v6mFEoTSgSXukQomMqbox7dBQ8kqrc2nU6CAd43t3QuNqi9jeuXMWYtyp8C9vG",
  "key31": "XGdg7GnjRg73YrsUFgQWPLjSLEGav7fpS9RiWpFiJL3ti3UCQDsAcWiAUv1jrKK1KHRTa9EDMnCbdLA5uqVyQaB",
  "key32": "5CNMw64uTn6ENw5GrxdEe97fiHpJmT44ND4wPMyxPpySE5pMcfQxpgYrhUqa6j1ssAC6CCHSmeGXSb1ctUgyMU4h",
  "key33": "5VwZSDM9As3jLv9Wf1nZDNwr6Mm1yQ3Bx8wZBWaYx6LMcFDZfQ5R9oJ2eEXQUiYRqwjVMoxzNEyJhak5NgfeujrM",
  "key34": "yUXN8ZFNU8GsJdMWiivsWkwSCs1J5SbfqyekpQJmJYEofkSqdEajMToWKK1uMfVLuHiR5eiuEo7g52yTwV6cbDq"
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
