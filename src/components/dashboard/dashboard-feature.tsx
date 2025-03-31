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
    "5ej5bCrnHAMcsLpui5AUTmZKf3Y8NxCxVHwXAvdJdtv52oF9BjrZKDwJZd9PDnd7rFMZwYob5jaRAzUQvqWUr5x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BhpmEu3JyPMvrpyycHmGwt74PRQfxCYuWq2YdJCgKqeEoRNoSByaKwvMDP6E9JjrbyABSfGxEef7ox8Pkrvczfn",
  "key1": "5JeypwpqxzQQt8zQud5v3uMndSNXvWwXTFFmhq8w7FTeJJU4y2xiaW8EGNruTYE2rJpwDpRAGD7XjG7giiNq552z",
  "key2": "kmuad56QgfdD2Q2MhCcLnjoTLCJMLazLgBmcLztvoNhSwbX1wAqMKsJpjSHdu5rfdPjy9EwtnBEhbiuKnjcaBUw",
  "key3": "3Vm3vc9gNY9NLjjkrgRZAj5Ri9d1oFBdjuLWLKkmfXJtapWDnjW5rN4UFrcqBXvLQUEyq4xCTTfDnQonpagyoB4F",
  "key4": "2JgAGSPLxkNY23dmnN5JUAjGgb52AK8ioPBjqetgs9TxPEnPeQr5waRJz5vqbyYobrLh2X9DHHoruf9yAcAPpadr",
  "key5": "qdCVSVQcVEoh3MJFQACaKpTukyMTnB8N5jP8ss9MX9XkQEeUNgyHYNGWpSZXyakYFB7sNFXg7TLeTbBZ2TUmQBv",
  "key6": "3ATweaJqe5TDAren3RvfLs6AHynqkGw32uzaqfLiHatCxY1RPcLAzN5HMdAnus9JzXdWZsM6hDpRT98QXYPX4Pud",
  "key7": "fRfZYU4AW2V3dBtHkixLQwtTeXFiaBrDzKwGJA1Rca7ZPEqAxxo9T2t2mozm5xUx5xr61VN4HHkpdYDCeMWy5hM",
  "key8": "2VAkx8ZYgsMVKK1Yy9wQpPza8Z6trB8v48ELm6rssB4hu3fW9f93X9s6Hfj7eDpqd1v84hoERvEnxFAQf4VQBoRD",
  "key9": "a4DEcEqH2Aovz1kp9wemNrW7H8GxxvW1dgiqKzi313RWgpPg3mn1KNi9XNQqr72c6FjsFooME2iSS1bWMVsehnj",
  "key10": "e1epLMxNXHoiEHuyqrzh7R1aGFK5sW82Y3rkUuEhZSn97tNfwdZuBCVrLsja87dFe23EgkfTa69vAsw39BDxYyc",
  "key11": "xauBcrdSVjWNKPVzKVjKGYmdqGa5UUxQHFxVx7uSzUQFHkSS6A2HeMDjjhBS1SUtKtbP9kjtD9y7qy6ApDnjCkS",
  "key12": "2efgsxLcSVs5thmoGHdkFqECt6iB9ovV8pKrhwHQSaod4BoDn22ANu7vT7zMSiM7mU6SAZwHwygwEn1a4FwLCfxD",
  "key13": "5vmTmbrzhwoE6iv6v15rJmV8NryEA4XaGTcipwfVJpzbH5uQvFnXgsRxd1eSudsr5Azc5f5LBdYCb3XsGGp6Luyk",
  "key14": "4SXmuMZjT7FwqdHn6hdsaefJ9t34Z4XyLgmW568pin2YTbcxFovFnfQi99iYuFpDJdtDoBnJjZuxW25nFujp1waa",
  "key15": "21Pm84NjZwmkRTuJEYvpVxN3djjmYET2uQoqdM44v6Rd313BGrARAT6ArpscfLAuRJV7Lw67kouKzon6h6t4HKMD",
  "key16": "5AfdY7kEHBypzDxo7Kao6x1aZTWQdQjMYgiVM93dADQVUkV59SswSaE1425YVKaJ8kxMv3wQVRvSs365N8SizRVA",
  "key17": "2eais7PXtn3JC5mYqWfXCSR8BHTynD1gzL8iRvj8HaSG62Lm2wbrCuaWhPSuq9hvivtqf3di7H6pMiEVWjoeEspv",
  "key18": "5GeqBW4rTimvNRqhaJ9bt3VVBirrKUanJ8gNMn5sXAX4AfwMTGjD5xgUjHxGF8uSj1qNg3SYVVsDq4oYFk2zcsaE",
  "key19": "2Ddu4SvdRxu1CyzrRWB5CqLwHaAb5UxrFojzbor5rLVDfYANzvB7emr4Szh9gJPiGUw4PKbaRYS13jHaUKgncHWy",
  "key20": "xbDkncYmpauSdWwqEdV2CcTtugy4NKhSXfHhjNwUrNjQBtcQ4AhxiPFuGWwsy9GM33sawiJgBGwyjNSeEPVRgFN",
  "key21": "5DHXUv4jzbgkp9hMtJscTeQ84YMruWvAicjvghu8TZij9EoX4hxjo5aM9RXJycyiAehwMQqUydm8MW2XDqxo9LgY",
  "key22": "3CGhbYHwBvXE9hpptb2GC8vqEhpEY1wwrG6QFvXGzCNDy7v6A3sf5y7jQkTi2KSDkxvMGAmij7vzHyhLzyFPH3vQ",
  "key23": "29XjFz7qQm2eQDemypNMjAQ68ZFYJF6qX9AA5z8wmJifuQB5gsB6JprpicAjkU7FFJzHbaF3tZpKTK8ojwBELYL1",
  "key24": "55nvr9QhQoKpqFghouc88v7jG3WU4UMz8BTXEUMmwh6H5B2YeLp2uX4Nkei928yyxVjoHYQnBz29niEJ9z3YrtLL"
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
