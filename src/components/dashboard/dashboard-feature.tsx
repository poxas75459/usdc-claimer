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
    "5HiS9sdnSEzVN86kB4PsCkSi3Sp3DKRkKpctpYBNDgb2R2FV7UXiVL5vo4HTdXm5uWfCJ9ZFnZMh6VrbqZkmkTqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eh8gsZhggKpSoGZmKkYeg2oD9pHqhLrVWPUho22kZqBweabzYG9Qi8Roi2FSA4xRFSCxLu1b725hAPds7PtVUKu",
  "key1": "REkmQg8wwwmmJmLqXHZ9xWsGwaR6YE4ydegDCSjEsoLesjQJQ4gENWPXUingHSuGhhdKTXHZdyeuABjiSJ33EwP",
  "key2": "2HAFafDs6ceNnmMRu4Jz8CiPNzkHaRSLggQUwRe1f3DnYxR24iMk1GZQ41JoDi1UwV5pTkFqZ852VYL9GA6nDKKn",
  "key3": "fZQRC6M6rXsc1QtPc3SNJzNWLtcBM9VtcZNKagyvZZfwQ6xtD2xNwNL7T7fkhpExHHapaZ8P5qu9nDReNtFhWct",
  "key4": "3VNpPGxUAichxTidqJeeXQjKG9V96G2VqSonoop3MfgeajzNvBTTeXactzDqbh7wreEXSjdxLuaUFmFKVYi69TTk",
  "key5": "3KJcb3Ugwh387sxpiUshsFcMLEi7tJE6VhSKKnsX92TwZrZbWAmRKhxNsbMq529oTGiPwYmdsnZvLDQ4h5pmc9H2",
  "key6": "4K4JLRbyayNJN65SvHJdfoGDBYJAQ5LngAabi11K8TvtU6P6CvcL8jahWmaAuc4nLy6LPpz6cvNeXcVKomDn4kr6",
  "key7": "25aVnDbQee6K8a576KSnbBVHAV3WwxGFUEmR1vHywqyCCL8s5q4xhMv5gyR4LNCzLx5V8iMN8ajv959LZd5fE6yS",
  "key8": "3RPASRP5voUY7hvgrmqavy2hH8iSM1jcMHF7PSh8RRm2DHgAxj8DAjP2WYWBfxodGqo8jRBmQZrFbe9pJSYhhGvm",
  "key9": "4igViAcrEasa6zUQfU3eKJzSnyXABq7erqjFRsrk62XfyDqHv7ytnKirSsS85bX5xcpf1Cj8JoYsGFThxdVqvN9C",
  "key10": "5qxhsyhC1VvUhXfwwAr2ndUBaffR1YkADW3tmgyqYjF3K9LCQL5BkbTt3rTZcgdEFZoXwydP4rx6EGJV7m4QBd9w",
  "key11": "2v3rPZ3cGsVpi2AVQanFqjHoLoAiN9R47Co5n8omqxtMRrfXC8XjbpoG7pA2e3TTwZp89RHSL8BPKbDbnKL5fPwV",
  "key12": "45KHzzetZvbctSv82xoaN2Yu9yRnfzHPFHeSciXM421rZa273yPhDfYB2exoV6JJTUJSbRqwdJNB8Ea5MiCFuqMf",
  "key13": "22GSq5S6J4Z5VL7E1RFwSahFVkKXDNHgMD4PhtfLVCrut9rKY4sK4TKbz5NGy4zXeiXwByTcv1P7jMqGuAC1p4AH",
  "key14": "5xzvvsjbrf6LQDq6xk3R6sGbN5ghuf2UUDKRMKoBcsuf7vnnMW9hMQCwRpy6xv2wqavAtZKr7FUo6dYEEFaPbPX",
  "key15": "DjXA3B137fALP9PakNgpPxGFoT3iZBLewfChX8EW5M3CXBnAYgai9fFqv6injSkFZhs7iAZaKjEKHGW57JbJkL9",
  "key16": "5b5EZYxca6sFHDYNTWZ1agqxPWiCBMv9KGPVFSymNgN4w62YZmBoqUouqddWL5iZ7ox44YqaR3YdZyEi4jcWmZXg",
  "key17": "5RwXqp2kLeRHzmSGAJhjmyUqqc3BzMZNYsrxegnzSLX1CcPPbzJuoBdJyMZc5MCxmphRNaujqEii63NpWybBAVhh",
  "key18": "B6zAkM3Lqc5BKY1Y4Hiw8AY14uN3Y3vZNB2pubpp29afa1boiFZpnA5BbTNsPBumCAKAYnzkfjAmexRFbbf8EW5",
  "key19": "2T3NvAMRivbiVGozA9B7Za1khd126dHZFJs2SrFwQXTkEaA9AeWfBevAu1bzzvBoLj4CvQ8EJCfECtqCYKbR1cCN",
  "key20": "5cygmhXNCr9f1cs4HnFip96rmp8Twp88cVTaJqHKzL48EimdrU357eRCrUXR4kLh78CUDweGdP6ySrzjyBm3nB2u",
  "key21": "4HVAb883KTHzDmq6BdV3MWxgH9ucoRYHzfWFwUCJvp1JbA2Td2K6ULqpVE7ktymfG2pTS1dMPwLdsEyyPvV9TwoP",
  "key22": "y81KCVFYvPnConB7ocCHuzwrS51n3GJH2kHBTJ5U6Bc2kyHRbi68w8EUM9MGqUo21HGBHR4SUT7sKwyQZMgabB9",
  "key23": "5vPEEbkRvbosqcmqK3Vg2AcUn4UySeFEgB9LNqo5nHmziT2XFyF86mucfHx7jL4SoCeG6mx3wjKLU6dXr4QuM2Yg",
  "key24": "4AgNiaFFqCoit1k1dRVG3q8AZgFrpA6Cxsu8xwwb31k61vfLiDGoQAwWLScwKejkt2FMjeA776mfvs138i8QR8Ck",
  "key25": "3i6dzXimbqHPBXWRwX5w4jj2K3xWgDEsAVdeU8xBGM9b4fUrgQKjkUjuaxUEsuBi5v1Di8k7uS9oENySNvv1X92r",
  "key26": "4t7zCJfZUTKXRr2UU1njuHtvPTEwHi95Qet575xU9guFcSa2N3p2E1saGBtbTgDnECdyx4oQkoSN77eiVCq32RGs",
  "key27": "NeEHnRP97xaFHH9zPChshndxtBRtg7eQMbp47omyvofZj83TitFrPfNpQjf632VQAU1EfHGuhhv2GcGXQvsp72Q",
  "key28": "3DavdMckW15G5qfCmJGuh7NvT6SHqLuydovei5pzofYDsYwixmdTKqNAcLs3e1fueRr8xxY3xj42ptMz9cqfthsH",
  "key29": "2MbMF6yVeY8EtByWL95ZXir4CRahEXet7anBEo8WeiSDdryEZMqqtgfy787TUnWDy1aTr8e3kXGECaagWKLC4rHp",
  "key30": "2wpeKM9x8pnSDFMuzbHa27AsUBrPWFpSfZApommUkVsNfGcGMoLk3Ds693X2FAqHyVHb6hd6mMu4xihBKoR7e7rM",
  "key31": "34KZnUSaQQcGF4BWbECoaNpzVTG3uopPc8yCsnhRXiwpnGmtnaPHytjASkoda8Q5dWSg3Vhq9dkFQK9Ps1nLyEHk",
  "key32": "uCyvoH2uZXtHwUqbHJaybfRSYeg3ywTg2SNyurzMT4UtgbtjUQD9ebAWksPeWqqBzJCZJtAsdqPVNNhTSiy3orj",
  "key33": "4VXahjZCfXyQojbaWtjmyLUrbviHYmYo4sRZfjWsJmLEoyPfVymtbGe9aW2uGg4EqgD55vu1dtqqHK5rg2ZN1KKa",
  "key34": "3yiNYhmV6HxknjoKnNYgo85zes9VrRPXcjCeSvsG42G1Qe61iaBMgkUGacx4QxRLmiNg6XrhUkAXrkxbagSt9185",
  "key35": "uVZmrjPkyx9SjjWuCNdALnK9eh6DjXMy4ra9abV987Rto2QJh9SVZy3EkXasjfotht7Gyqdnrm6DRpu1nJNAgzL",
  "key36": "2tmRkGPLnN5gBfdqHSyqDrPg4mQDi78NC3WsqeaF4BUNdf7L33bhn3LtEMo8iffH2R6nvLKVhxgbTGBncNVK8PLC",
  "key37": "3wn6NkyjxVTZaMgLRQZb5wkYEpK3BVYNGetFamnBUjoF8qBStqoL4BzJZANmhGjE54r7vLhEBSX2Gq5ti55RTcvs"
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
