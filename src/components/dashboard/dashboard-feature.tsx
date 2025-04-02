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
    "5QsjLdM9t732W1fzVVTc66KKz26KbNsmpiBV1k9V6fKGyRLf36B1tGXewwDArm72vyxsstHex4YvCw6dC8dU2uRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CTzJeACwGoiR1jfXXKP2LRx5qcyrNzhru4fyWP4N2dFSAHWPQz9vZwygDWRBqKcRmAWU8FSDMGCFBDuZm7NejS",
  "key1": "W8BTyDJ31MCpyYgmRjdawf4R9pAyUCgPhGaMWhDY6YneDzsSJq9Er55taVmmspsctXbJrWpgUdcKfBfuW4eCEqn",
  "key2": "5Ywzn83rWMqJ5qfYsciqDNpE9j4pVtGif8nhA5sFaaykZ4GyiKE97Q71XuLbQ4KGWLWqYXAWHjo2uVaExREex1wR",
  "key3": "4fBCZ1d2ct1PpfE9VZ5sX4BxrDawh4o58vqyFhYnJtqCuEvoZ8XH6y2vaEq3tiQ4yg5NuCrnSceFFj2FTG39RXM4",
  "key4": "22VVemvL788V3Nd15i3U7o4nWSXTTxX5ynD2CyTCMHoPrNoCwyVwUVzfmMm7B54L7CMo3bYjBptcjADsxNC5bSq4",
  "key5": "2Qg9V3NSo1FSefhKzPMYw5dSAkR13ji1viKEE4gjnGh1XMhsaVYf4a8AbKCgf2h8gSipaE5eLX1JBHmp6asQNXAK",
  "key6": "5mC5Zp6qy1Q32pVtzTCyNckUCVQyPthsR2DM1kxcuUVUbpBMa8dNk4aYjxdHJsunnScmrfvCShnXxaw63W2Wa1iQ",
  "key7": "52GiH3aPJEB7CZ9CUwMGjva5jjyJw8F5sK7GiyQxDyoa4ErjxKMLM2mZHcKN2cehiYcdpQaxvyGxTEDBTLfSwQhD",
  "key8": "ZhDtttQziC3MY7GBrajDd3EhPN951op3qEKG3WTwKNAJnhkk6vzn8LZ7pXdnBQ63XU6UVbzanY3dnYpynXSfzSN",
  "key9": "5zKeG4jisoUu4Ws3GhXy5qnThF6anhdAjERaARtYMxSdN2pzBUst2pLTLyc4SC4cJiyc1J3x8p2F8gfSncyLQFK4",
  "key10": "zMKtu5e36wpZjJ4zPy8w2vDqaAudnhDv27hCcHxf3JkRq9YwZcvBSs9efiAH3WRAYHwPoDgh2SXj39nwkHbKrRD",
  "key11": "64eEMrLJfvYKCfHeNscq4twa6XcyXgB32RWmq78wRuibLFaEEX7HCpJgYvtDBzchA6HqdjV5jxBScduiLF4FNnif",
  "key12": "4iRpmRR1cMem5sfQBT3bt327dmcNR4mUXHr14AxPcoYGEs37yUHbLbSd9MyDeR1jKFATGDBWtV3CfDghZAkgsZjU",
  "key13": "61U1s7dgEU1BLn1B2SR3MVyZpcWWrhGijyLRG3DGtNUAChRr7g3DsMXeLqu7xuqqUzrs8M6iiy8ryoTp1GcvYyD9",
  "key14": "31YFCeU7smxZCYRfVMf8yUQLF22Y9H25tMsN9AnqCJCn6CKDXAfapsDgw2iDhx5xDjKKnBaHwLJRBFHFyszPtMRu",
  "key15": "2QgFM4P9NtV5E3psjFg3ofzhA6qnYbwhBnDNf4KMZqipxiEecqRfnDuxh8vjDnPy9UxkQrzYJcACKQwXygfqPH7g",
  "key16": "uaD1GR9g9RJEZtUdWvXKyrVB1TtRNxwMZuFRHoiZdeLU5MUUigxeTN2JhiC8mR2gh7KKGqEFBpJnnN1EZWUSZBR",
  "key17": "4Ebr7V1UgmohAkAPTqbEpPw2JpeAjDwBRSCaFrn5qitV64X5g54UjNnmmLLGAgj1GsAUED7jBL87HdZMeP1M7shH",
  "key18": "57nzu9ZCYKhLFA4Qo8seyUpNjYWkUdGjPcChi37vVug4vHidFtNZG3tUn7xWww9iGAt8qnTh4qGiYgfPDaWicZ8c",
  "key19": "5dvJZeykGURRUbia5JJ5vpBCf1jd2QW6rXKQpK51DGLeR2JTVnNawiNAXZxp7CEt5WZ7eBcAP2QJUiBDeeKdiF5W",
  "key20": "4VG4C6pQusLUFmztGdKteKvQ9d6G94gAWTJLv1gyVhDvKctTXfjdmrXZwDpAGnsYDEwWGQnRchUJmZNgQPfHfpva",
  "key21": "4291dihETPszv3g9uy1Bv9pZRKtbbFn6resm3KeSuvN9bWz5cYZmh8EDHbm7Zq16BcgQis4fpB43YNfsBPXJ75Zh",
  "key22": "4U7PdMN2z5CzrQJQXMAYn7W8ZcrJkkBLhEbfBMfPReqeYJNJ147DKuSWBckML5o6EtEFQffeQHmYXKj9BmJjys1T",
  "key23": "3BH9EAREGrSXcLmhSP2KXA3zAmRAEVUc1UgPNwQjHBcQ1dZABnYHfcTUF9ystfc1duGLTqGy7YXDhzPcUxECHftH",
  "key24": "3Nds7JB5KjonxHTDnuCPvof81ucmn8U16ZNqYtGN1Ud3zwHqaPpSM6wb4L8My97TjiFXBCEAAwp2HtwhEeTaacNc",
  "key25": "4dNTZqgJhn5micGfiqibhAqksFokxLpyvRUsmkj2qhZsWzgZaA7SmnHKwUU1YYb5i3tCtnAWQWN1mWYJzmaEP6Kr",
  "key26": "cKZTYVLVW51Np1xc9tUGidmWEsnK9XVnzb6z9nQRhfJSEcdnJZpy2BKJWbMNCAK9iY3gnvUs86K6WgTMiqSUZLv",
  "key27": "4xVsXEUHUTF6gqSbtTniRUveqhFsa56sMxuMkeVGQRGLpCbTLuNRXzwS51cq3pygddUFcxNYtBsVwo6jCHimgMJM",
  "key28": "55KBdBawSyzaQhBu24jk7yt35JrooSS3pjdMsrMzivk5JcWK25gCy4sgQKUr91QwLd9yqF4cVVkLEK4tT5h6XLTJ",
  "key29": "2SUdw7a5CxZ7PPpbwPQsUmGwhCQSYME5RqX9bWSAcXk9HAiyD4wXGYyVWTFy9nN8dovGqD3eQkpEJURBeZXMjmr",
  "key30": "2wA8uoDNEPZJPVFLKZkz3GGENrssMWLTo64MkJXeprzmvqFEtvgwnwaQXPjJrKsEyYk4yWN6ww5Qhf2XRaXueUre",
  "key31": "2yWiWm29WEELsnkn9uZNgA5KiHyQ9p8ekDj2sbeZokDTxzHcXfFSFbnZ27FpyJbJXKLwU3ja52igyfAv8UBTM7kt",
  "key32": "8cw8sxhEkCRLWmndfs5YhFhDovzLHiZhP4YTLTB4Xn58FTNHamJNsCrVfG5zwmMxbN6Ax6qh7Fpbx2TcNxTtJtd"
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
