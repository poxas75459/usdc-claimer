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
    "dud1vFWfXPMoRsWAmKANnvBhWyKfAQkTjQsrCF421Qi3oDVZucQtbenzBjznoaD5vuB23tjBvNSiNyXUFQqDPyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVXbRxfjdjgCFTQL68phKHpCbifWdggnHcSoCyXL6g5CS9QV7QWd3AT94Qdm4mgQfyDubKhhB1kTvzGNYv5ZnAY",
  "key1": "2iMNKkk9EB1qcALqJ23R2FaPqTLhRA1nvdMXJ4Q37z3zEfVJwk4seBURuA6sDfL8VqbaPKzcUcRNuoEvX7AjWpZi",
  "key2": "5MLwT43Jcqmafqf7Xf1UhH7DQMVjxE55o5BReV18ZCMWLZTnx5AJ1StwCM9arRPcLRXSXszGve63FuzrbDdetvzE",
  "key3": "3u7t3kU6ygPcvSyK8DpVu6sJ7YTi9CqMxsv1otzWNkTraohMHJVpYiYcou59WDT1irHQh39ESowBaJPwkAdEb4a8",
  "key4": "3E5LjLvYXsdc2hvXUaGrEUcBW87Vcy2PtfPrbgs4AKWrddovHzDW6mpBnGXgRRMc5xTbxdSeq9XTh9nocTd8DuQ",
  "key5": "3cQV7jNW42CrDnJikkU14D6TdUA9bNz5jdF81hocg8FnYomqFaS9iZZzCx1wzozDHfCqT4j4ovNHrKgUWHbXLBfj",
  "key6": "39SD3dCuCu88svtmmbm8Vv97Z96wXjKxybSsmuREc1HaFT7gk3BinzykizNwqGPntsox9i9Jho1kYrmeBQchDJGa",
  "key7": "4HRJ9kfzENpM6KH4mtUEBAneo6EMDBexKuSFS6nSsFTUQmN7kVZxsLL1Y5eWQkLs9LQ2Gi9Ckyo6VbRocj2kSppA",
  "key8": "Hj4sj7hs1PGqocSaMd6QfxgyVCo46SVZ8ves7SjkAu46q85f9KV1N37JHhMjjndoECQZGteXS5CRo5xMerECM94",
  "key9": "2Rf2JY6p48aWAEkGAEn6FKWVHnuaNuXPybSjx5DhBWuKybFYz78PeZQGeRSi8aoEurKusJNNSHgEd65yTNuhmqv1",
  "key10": "31FENpGoV4CfETWBEHimRLpKbEz9ncc4jumfFHFtsoDhQc1Dak6APUWn8qyxo2x25qAEaJwArg2yXjkNRg4GTaGt",
  "key11": "uxXhCAGGRqvu1cPPKWotmDrtxbXU5ArVZx1eg6hfxQcqYcqUhu41t6JkPNBosw8SUxhU9DUKohmJZ1ZoUbmrKc9",
  "key12": "2mbXoAFT6zHmBS4XFqFApBjtErmxJXhy5MaLWsEfqTa4VBc55veYDT2Je5XVMsqGgFoWVoHaeNZbF5v8JmjeEjWG",
  "key13": "2K5PAVrmPwcLwJ5JhZVzRvcwDUTVBDWwvNGJ1d8mh5TjBPxqc9RPWoo11tFZRAT9rgZiDMW3U4C6hrHoSJ3BpKiT",
  "key14": "3hQz9D2LTtrzyVrKo68245GdxbFMFMXNGFyCcQFsvx2RvvvUoLZkb2WgzfpVggxSzSPiD7hEbdApVKhZc1c6JisS",
  "key15": "28qeQaDrWUQgfTLY5nDgWFvinxtjzoPw32KRQvmkddDnHAwSwJ9DB7KegiATz2jHSXF27simzPiDZCNLPLbRpkb8",
  "key16": "4BGSSeGT1Rj1dggEVzH6UDCcureDP9EHF1Frza3ALomdvGBtDDGFK8ZdrRZ5oeU791VtEi3NAu3dxRjusRs2uB58",
  "key17": "2d4A3PbR8o3e4ofAraLktKA3vFMDkzkLKv3JjPK4x6V2ktFEfvC3Ez3D66LfWkou4ror4GWMKyYbUbKrZ7w8Rc8Z",
  "key18": "3kbbjj8oUk3fme2goJTeEiD8XQYZpTo24KBG5NZguBksGFuTd1krejc3S7K51f4Z37LCEXeF4SUEqjy3d1BYyu2",
  "key19": "2BggvKjUhf8fRtpxipnotttjKzKCfuwcMuChKyTEM6n4wpUjHd1SQFgZ9dFwydk7THdcFnFpkPG4azaVcjq4AFRM",
  "key20": "3m5PGUz2ENEssoHhkBB5ywgcnHZWM1rZjYHMCwV8xSwVtEQaTkZ27jdM1ANidahw2yAYMwMMfYMM2iRHZJGWNSgD",
  "key21": "2KXF7SHWRrZcLB72WwXnumSx5rgAh8Hx9kdTQ1V17NgJTpurPYiXVvo3Rn4fbzBRN9KwtNXTpU6F3oHHMvQEYqge",
  "key22": "291kE8XvfoL4asDAQjWb8CgsZFumDLVxWC74UUsw8erPNswYFqQXPPmoMHa5ajLbyhrtPH5K7jJFL4ieA5tu1BUC",
  "key23": "3aDJDUYybvYKNV7HdMypE1nL16bVYSiUVcoWqatpMREbPa3fJj1hseu1qwAykhFzXTTcaVFSbYCxX93X9sgtDcyv",
  "key24": "5Lbb9WGWKfuXbsgvFDBoxhJAHhVJnhgrudVnL6JgmBn2VUKMHgtvVty4BGLR4qep7J5oFBmJYXguaGg2CnBKZMx2",
  "key25": "dXnSRYUMGiwo7Zjyc6FDRJZpqksdwg18NbysFKXEa2d1PV2Ev8d3KNQnb3QRGrGUhzGY2tbJhyMpARpcqb7zLCe",
  "key26": "3Jd9ke7oXiCDvBHBzqsTJE1tUwzpc7j8ot82zoCcVsa9orySoweoKUySWVFn8T1tRd3rUcbBVAyZFHsndcFtzA7W",
  "key27": "G4fWSPXFbVL3VY512psqhbRCqpfvKL7KvKEnYB3h79XLU48A1jBWbMjjw8hjQ9CwKBBE1QoFeHeyrC92jRxVxg1"
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
