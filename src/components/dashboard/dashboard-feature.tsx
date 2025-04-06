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
    "4XE1tzGe5rc2rxcs86YS9FpJBdFqeyMFCBeKSorXAEZsYLUuXndq11mJzuZxLBcmPcVRwkhXr7iuTJswdNQzWSb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H37oesZuyuiiwBaeT5eqzxfjUoC4qLAc1Z3DqcfrVkh6U4ArU9mHKE7TSt6SvxairZXpxbLZwvfmryRbfeM5bZt",
  "key1": "35PvQF755yAajJTjYm6auxWXGnjrGkC7vx6zPrnaXXqBTvjyyn6kuHiFxjAhVHJwbLENPPYdTm8s2DK5qfUPSmRm",
  "key2": "5KMsPqfqFDYTdN13hyhDo8ZG25bXz9YmupsgNT6xWRupDjswWr11KnqiR6dccKrmLUpMbsFBmKngUJqJDhWaN42z",
  "key3": "MDPSVkNGr2ju8XGmoiPUYeQhtMnvi1RYmBxZZxsQvVe4hxmSdB59vJSaDoyLgr4Mf9nfKkxPKXURfbjuUPMNFFV",
  "key4": "59KNgMrRV3gMVKLVqvxQQXq5gpvsjaTfaeynQDiRmUeR3SgNqdtKhBd1ma2aSvKPsCFeSmsMmCRszwYiC7PozV3L",
  "key5": "61J5Yp6LogU93EcsP5Y9iWeyHnWCR3927NC2cXTnki8wJ5UMernWKuMgfRsskRaNibS8LTz2CrxQNGeySY4pSwPy",
  "key6": "5G1Thz9HPCUXdS6bSUzpJdASpFyznemWB5fryuHu8iUgu7HtrMqWG1UhwAaMjsr4oossPPT6eveDW1x9V7svfEqM",
  "key7": "38rDgXa18sjnc18XUHWvdzCoY24WRmZv2czQ8aKCbuApSQkawikHrW1psewFdZtzTwqpjw5iyraT8Wp2BPrEe2t6",
  "key8": "4XB1XcDoN1vvMeMVWLvyunnM6BDh33JwDLEqK1nmqfwyjk2zJk2EHBip44puksbcpkTJjFnGyCiq7fxChucGoQD",
  "key9": "55PRuF5saPN7vx32xLsc5dLXxRdpbb9gvGiMv98gFHSmU9nmtMCxuyHNNrFe9HqZNCfAketk4DLviHraKbWBAb7H",
  "key10": "QRXNfcKjrU1cdxstZbZt79rcvTejA4P9GoYS4s39ipxaC3DmwjbJe4EQeUCr2vvEvxKE7KwqZAaiFDaPryvdnjn",
  "key11": "3MTUYoWrNjkr7KF6LsUwXarsKP3nSNoX6rwS7K6amXwhLRRZF75pbbHzRwoF5sqj2c2SVJEK8QNFe74u7GJuwaJj",
  "key12": "4FAbDjo7S4NpcuEBayaxuFqiZNP48nELEF3HKRi9bbf9nKMsuL7priPmX2osB6NmmWFcZCXqcZ6e1qXpPkBLrWvy",
  "key13": "UwavdDogR49Ka3cUXKNrvnpN5A2h9BTQVkdzStnMJzq6e4oZ47QydMRQ6CZvSxAhjHi9C1nomSBQ2JHoxh7wS2H",
  "key14": "SCHuLmEMuKPbmfxUzSPk4gqAsXoRxsUzhvcar49cT2RTR4rxbXxpvRnfHryEpAB9Gy4Z6txEgbfjUWfdCFZoAuP",
  "key15": "5BaygvjoeV5pm3teyegQqP7zt2TeTciDD2e9tYAhFmFsNCiovadVMDN5f8BvXp1CC5jf9GVdtzYyB2H5DbaYN4tx",
  "key16": "4Qd9bmDXFGZLzMK7BDW2ussinebsoKNZZEKHCecmWB4YFLo6wPC63QsNiNsN2AUE6M6y7sVvWgoYwgD4dbHqe7by",
  "key17": "5hDo83dPencmtKVdZDaeVNUFWeiKcRT5LAG5s7US7gqa6yYgSbzWTwL92Q5BYJoTUS4ZhnbqKJzRL5cFYyPEzySH",
  "key18": "4XmrNU6kvrR4ZgRj3AHRYKftS6vnPog8CHRCsKSLTpC8C11JEQehLcoHpP2gGWxb9CuWEe5UnufCWnhveWtXahTc",
  "key19": "5XVqVmukuaxnruDCzWqhTSYRCfqMq9TNxb9gPJFwfyjmEgrmfqH9Tom2nsBLmMQszSFwdyRpMsDHgp7gMFf3cK8P",
  "key20": "PaY1yA3Rn1zBifM99V76DQ7ANtfiyQXqQJZSQd4wkvMHUpMMP8umpqE6AqPaMPuLHE2HA4wRbLD7KDDrs2D4VMq",
  "key21": "RRNsUsSzTmYWc2UCpiALLMz3Q1KNydWL93VAExJeUWXsGqozg4Vk2aLhY26wgMTYp6GVHu3hmfeWCM6hFKXR6Dk",
  "key22": "5qoNK32qMSpXjWBPkt8EAQCo2uhu1cgjmdxLbapUSYFt4HzLzjK4k8CSQ8WGdb8RJG1u2ZxB64C5dTgvA8LzV1of",
  "key23": "2CtEoX7JKGdDNxHR8ebdh72VRst16vZmZ8Ro9VKpNfY1TFkRGMD2m64hgC8WuNh9BGpTr5HXknx8vrc5EMqNN8Xv",
  "key24": "2ULeUVCHtRBY2PMXsDudz3RVk2682CETemqqADJMXojxfsT8WATzWNW3Rfrh1onZABGSsgSVA4rArhQd7b6sTAfM",
  "key25": "2NhBKCAz7gJVkmJ1rtN9dsXoEapcazELN3jx1Tgc6b7Lc9JvRdXgbd5XSjdEDRjdFjtwj6E47si2ap98LNVyEboh",
  "key26": "3i6zMuLBKWhQVvqwXWaVM2p4CDKohXXkqbMajuZBAaNufSy8JcjZsmNJxKaPnGJZn1JnUBEq16mCXQbbrLNDEQ3h",
  "key27": "2GcSgQwCHWLg6eAHM2qR8jSwS8PX1qt3XBJvb3ctrwQ5ryZbVFwod64NmNg9Cp6FNzowVUZCRbeVyYp16ycaEgnC",
  "key28": "4FZN8ZzAdZzqRJ4vBdwXKs7XVreZYc3UNRamknPHj8mat8YVHSQ2t7ojDPck727KUBY9yvFStDhBiLEHnqJoDPBT",
  "key29": "UHJMWbh98YucyTo7qAQsLRLYMNtFPfazRRAmkvMD4xLnjhRc81K3YkPE5FNJQ6ZW43pHRZRfKjr8VQSUhE4kDCq",
  "key30": "5CKXgwHwhsYFN5Jn7g6Tp3bYN7yPF24oM3z4Eg4WU9FYP2amCi4NPW9onzkMJM1Kb2oA2oQxStkueTdVfczqe2yc",
  "key31": "31MPbyQMSyKUmqnMp2Ucia1McPn14vkVDXpuPhPoKc6dBS7e76wzisoaWRAqXf9YzTPCx45Z4o6oQeSsjXG9HhpK",
  "key32": "4nnJeTYLynQnVzadF6nkCi1ovcZRoz5dtQA2Ux9z9wrwEk2F7N2KQ4vP4PfFutwoX5pG5UDERpgCR6Nnmbxid5yN",
  "key33": "2X9C3E1HiBwSDjc2LoBSyLbRR7c6HsRT668nKYCZTRDepfCw7K5XhxSpkSPVBTderGZnVgLswMZhuYJw2F89MckJ",
  "key34": "PFmfCMwx4E54yAc9MMfyB1Vd5Q97hzmBoUjWFsjVpEgbbweP6jKSqkoRhkCwYv7MuhutnP8oxvLJLQLb77ByGjB",
  "key35": "3VdtsNL7Yz7buiybBsiqbTsMgd5QjNoW86x41TVFmWtjcBCTSgMgturJ82tnkuHaWYaBJkGA5nR96AdqxggDo8iE",
  "key36": "5cFA6fbQ8LgCLmtYCMYJYgZZgQwJhqbLhDSP2iBtCqs9yfK1VCihAqfbNFx2J4Muh6UpuiytG8RVVTUrrSoXEZMh",
  "key37": "4utkR5wVTybu4D2dbXGhMKn67CKx7Knw8pxgS9uCA3FnvoBKdz5Y36VHAxY12eDyg5CFpXBMNRB3q8gAy5JeKj7A",
  "key38": "TaejZf2DCf8Y1pCHcMTrcLt4Y6r3MdrqhNu5sHzdTnV7f6BnbJFykzbojZYw137swZBVsogh39qwG4ymgWp4zV1",
  "key39": "j1BeprPcWCBXgpSvFRKnQUq6PPPB75nHp3NntEYmhPYg4agcQQSydWbLfpgZr3yfmDshozkKgxpGmn4HNFbenxw"
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
