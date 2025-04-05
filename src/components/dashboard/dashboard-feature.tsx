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
    "2qtsthcFz3x6JWPFzrA3dNf6tiCWnYsm4Udv9ciA18AroMfzjjSr3BfT2JEZjSvGk8xrKT7yMEehhEaEWS1daCRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDDK9qWTSbmBEhXtdAiKms2iCtCehtRG827Y5X41Jx6RSAZP6AJeTxBB3euhAboeAz83iNoZp8nh5kBdcGxeD2c",
  "key1": "48rH4Dxf7Zy3gsvCgRUv2p4a6EX12Hx5KAeezaZLXbrz6DNx7qjtxupAFKxjcZEyHHtss3FynEBNrr8MRkMBxZ1v",
  "key2": "52CC6dDBommtxYs3qP7bAfmDMvhcGNPuZwMSM34jnKJ3NUvXmkj7TTcfSSo4bemyRGVsc1ss5x3fWrbSR4cgJNa3",
  "key3": "4naT96y3pXJCzimaN1Kdc3aMmSB2A5KdxDPyeRxtTKJ8jdyxyf6hQm7DgAfjphz1rVqZ7tFzv92hpNgzsuumrha9",
  "key4": "qWLAM3eDpaLeMQHG1n3LHsTRcH2VgbTQW7xmHnjKUDwLukypLXXv5MLXRM9TRM47YbcH7ZP1LC5EZ6vyibcSzoz",
  "key5": "2r5msFyiNG5do2rSyVLyqQsUFL8bcDZGHZtzpPPcQ17fYtMstv9FEZZUsS7ufjJ5kZLyvBj73oDTT2Z1JkLy9DEm",
  "key6": "5KJZkhaV6BZVgTfxaw9wExc5CvmmMRvQhoxCAkXuSkx2dTBxm3HVwkJsFk4wqy2A9HaKsJAt2N6kooEfGW1hpTCJ",
  "key7": "CumixsQyPm3isqGK8Uz7WuJgJjU2GTu41Cj3Smaw3iEC6etC8Ygjo6Zgv2vSRaD5J4G7V39C6rJa4BreA6QCgKP",
  "key8": "yEm4Qfosu5kDFYfiUw7Xt1n2htUr2G1sat4VCEeF8d3sCfkPWQdrW7d1iikyjowZarEG8e3BgnHo47sZX6qgmaK",
  "key9": "2BjN489kA43MDtr6HEBc9aeXEYyAhhCQvqLZga6eGayvo99S6UoWQWf2tL96WUHpikKgBzpj2R7kCC511tZfe7GJ",
  "key10": "3jaEd55n9svnqG3GGZ2qNFoPmeV5HMc3cEHfSEYxjkhYx11tWvxaVeJ3Qzkix3YPYbD27DsurfyJhGvxv44JsQS6",
  "key11": "4LWsmuixzDTJQux8A9ciBatdKVaxqRtN3as3vYrqFwBfgd4QAQdZNoeRr3uTC2rhjo9uJZRe3BsW5Bb6bPAqjxaf",
  "key12": "4QGFJccU3trbZFKWgsSP896i69Gu4w8jD2cnVgrjqJrRzZoN5D3U5EZy6MRzdsQeao4ec7px7sJJsBucqcKqWiKS",
  "key13": "2qpTix5HvqdM2jsV4ADS2tD4zgjJ4EdQRUei5JFGzKvnUGgybSreGvhuX21Cckn2GfaNeXpJrqP6ddowCD9HyDXi",
  "key14": "3VHB8QC6HB7PQ7prXRPJUeVFsnjfAn4KmcFpmNn3H6tBCy5hFBS9DjUnLrqPBNFe7YChTPvmoS2QEVz3y1qvvxNu",
  "key15": "4R5KueWKnbxZda47Q5gUbdKYCYo4Ba38GWUX4eemQC6sKPSrJiRwoZf1FbgQxoTwMAEQa1syTijF5N2FcVjC9C3d",
  "key16": "4C65gWNRmUhLtK4y9Za54LMEtvGdRf8KseFm2CFikC1pXwBkrEx9rDWaD3454jYUDkz3DHCTLvpcseQkPh2sZxJM",
  "key17": "VZgtgZBzs4EZBUMKFkeZrkhK7tLHBGgbkzaPmCqFtcXQtsWy8hANGv43X28oSEPcNpZ6E9X4UWuzaeGWHCpPavx",
  "key18": "33vY89Lod6kq99p5AkrsRa7oe7LAUersVdXhi8emzMCHPEHUVEtuq7YKyDUERGD2DoXauob7fjzxzzg3yHifL5fe",
  "key19": "pcZQVAcg7u7SGRE6S2guaa1RSNg7JbpNxJ8Gn56Nggzhw8i2HMDY3K1dtiMmU4zSXKzw8WS9U7dWv9m11RMVbDj",
  "key20": "662DRU4y1UyVxg29nPX4mtZKFboBri97R6XEAhkNqcyKeyeGQqtxL4KDpM6W1wMjwdUMdsbUX3FXcg4Dkpb3na9J",
  "key21": "5qNDMbqAqiL39BhuRuv128dyKKpNmaBoKT32S6eLkZ98d7sKVBV9Jm8h2wLWt6AUBuHVV35ZbFBLUGEoQm7dxAhH",
  "key22": "1cbAVgQXme71g6gNmKknsYRb8G5LLLPPVrs7a72FW1oSRrXvqoFQtcwRv6qrvL6J3iB7tyqWfMRSsM8EE2Yjifb",
  "key23": "5Y6RC6Lf3wEtZ4oNVexwdv7PHuVwH9xnNsp9Rr6gPiHLCLANNmJ7B3XRtLp1ECCbN15wcCCxVSgz59C5Fuhczp6r",
  "key24": "5CCHzcbU6fp1gMZx5piZEtuR1XaE3maFPm1VHZta5P1kxrqLct1rAyCeeP8HE5CpRbnCUeK2Yw3MXx6tJZp3JKgt",
  "key25": "2c7oj8xQHsyuVu3dU69orCXrYM2XiDpoHGaUwRm8r8iSH957QiYfq6JmJSRXpfd1HVgg7T35DLpGj767e55CBFDB",
  "key26": "k3TrouTKzk9qPwssrU5VUZgJn4LS6ba9KT3YhuASaARatjy9hh6Gz9UCk2bEj2n2d3qyGJECgRpgnZXUF9FLYKy",
  "key27": "3YnZJn5oVcrxAzTehS17NUFCMwfumDtPiDyYHT294jKwQeXwvBpJMhH2H9eScVQMBQeNxTBZvwjoEURPNdV9juRq",
  "key28": "5LhiJoUA6RH8G5pzuNp7oq7azyEind2T2EeTg33WgEbLphw9tz9vEq1FHCpG1iWi3JGUcQ1UWwE6vm7eo88LsBut",
  "key29": "4UCDwXZJUqLPGaygmRDUCcuTGwMbLAxEqNG2ZWcdVLbqM5PcszDwhKZcftshNEFBqDwc3YGF7h1cARcQmoLGgfLm",
  "key30": "3aW6yxfbokvbU2Xm3BBWiLUux88sAioWDE84CsQ5a2Nd44N5dMdCGkwNfKLFcSNHbCxTgGtHMkdXkfUY4HhVMvpS",
  "key31": "xJF724kJrTCHStgmxvXv9kipaqktbKPwEiw1o6ZDttc7CiPX6jrWwi6Q5zj3ApoHxUayk2h1Wyc1RKkqe5u6sdS",
  "key32": "ydXGF47eBsD9VhP9x4WG1dbXqXvD2BUFAVVDywPappViftYM9Ndgqk3grZBoDrf9m4VXJPQdS7ZLEwT3gXN7Cn6",
  "key33": "65NYbgQmFkzR3yQrhgAbXducuemzv2csLmKfoNXDr7Kw2UcHDAUjbz5mvRnTmovX5WhgNwEUPmWiMoVysp3ZZiWo",
  "key34": "4nD715aaRkU39FCz92rDLnapncS9DUd9oYK7zmfjvg5j5yD3ha7SE823W4Nw6CDbnjdV4M3TyobnnirnKxAvN1Go",
  "key35": "4LjvYRKfVrDjUTWeyBRqeLAFFnXCu1N51rkmZRH1bR8VSE8RbTVetLkqN9JLKsZ2CCDWQpyxn8FojFe4GzRJWTdM",
  "key36": "3QxwDYiPfq2u5vMhAFAq51Y1bxRGwcBbsLVia22CwHfsV3Drt972AJehWcxYXB3dhtzqLSPCCXrPdGXmx9ca6ven",
  "key37": "f1czJKGxosn7bXyLfHhDWwYp1zZ9caiAXmEjFvpJrPx3rnpD4GnR8NdJMe92wbiqsjNZrJ3GRVYu2zNda6FGf3E",
  "key38": "4toTS2mFSicJs6SbDRso6bVfe7EwSxNZ4EUWxZ5XcN7ipAGDHR3RqjwGjvXpMtNDFHcFc6Sd5HDp1HZpe95GqFBS",
  "key39": "47UjzN61nF83dYKy6dJCPGHYBQQcncyx1aZAewgsrFBzJJqQtHdZthxHBj5Z8MNzo42K8nuPNd2T86kh7LPM84Uq",
  "key40": "1EmdXqUgnteEi5u94nGKPMLEEXnWCxCeLjxes5ukjVfsuwQs11kiL1vubVgLkg1YvquzKe1s5iCZWxFLQr1m5Je",
  "key41": "3BsEXwZd1nU16hGpkED96WGbzdbgKzpVK6tV6T9hmujG7XbpsCwYJS1iq9qZx9a125eVUZMP5wnNdVMMXcRsa5oR",
  "key42": "6382ZEn7JJ9PjZ2NagFcnjap12UMAmfGm54fcxs8ufA3qpdT5cbnmgcZ5uP6o5GGn9MjrTyHTrHz4hAucX2h5u2b",
  "key43": "xXw4M5nq52hnrahz5eAsN9nJihZ1MBqA25CrL5VZe7xEDTJfj37kGRfmdsLwBVTdBNmLcQtWEWbpnvf5BveYw6W",
  "key44": "43RfsZkASY9rrBPQUu8i8qYMKXacg4faDW32u1K3Tpc2V5URC164R5eqh2Yv1G3D3dWwg1QYRfTfz4u4sJNnPLYb",
  "key45": "2WGJ1Q3bvkaGGU7KBU4tVj4FPAt1bDgzbhG9LoLJqXjEKebAEXLVRpd4PXMs74mt3oCAZXNFmRrmcfvxcwGBdf2s"
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
