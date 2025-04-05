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
    "3iUDRrW9BLzPc72QFqZhDvpDNsHnHa1o89cuP3ejyELuuRQJhgaWABxw2Cj16kGh5pB62GAV8QuW52V8iUsHX4rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K1RvAEbGZ3vt4FFCqozXn4aSY1iHGKEnwRr4LpyUw637RMBTMAzWaUDb1x19rLUfA2iw3s8SC6PyVE9NDQttv7N",
  "key1": "2h5Bbn8nizBeEiPc81hbH7oZqhP5sS8qFWQsfZojpVjmFSvSNu78hGwrm158PqQhjLPd7iiJYkMqUyqNmTbtywDa",
  "key2": "24pANRh2yzhqaKGMLn2weKD4sQ3xZJy2asvK5G6veXnaYaE1XjTqbXNek1at3kteWHCNCEMtAYjL1keuPUUEvENH",
  "key3": "5uUKUWwH84BSuHhR8Y2YJh9jgXTujDr6x86pVnzckiCpmRgLMtXBmMaRWt8k5eiFp5KaPLZR7tqTHEocDzfAmTwY",
  "key4": "2LC7y5rJtPQL6AepTwg4VFfu5LLbRRonr7QeLfuQKZ9jLK1xd9FVDa2WGGut2SMvjKef1MH4Xr1gF3sXWQhXiU2T",
  "key5": "dPaKtvArBuRqxtydfjTQToj8kQvitHmfJT25EGjEd2y6Yz5SkCMwHhXSJxEKHAEZGSWTaJwBKzdNTotm3vRh8e2",
  "key6": "Kz9iXZ6FSuKoauQoaMuGEw1Zf8CN7RcsoAmT6NK4dqk6ds5DQJ9apixNx93rp763DXjg5D7yJZgdwhdy17Lhoj6",
  "key7": "29UwpYXo5XbXAGZBqBqxtWdvkStsmnPbhcakqwzJ1vxdyj563LZFEtp9ZTkHSy7Gpvq9wq1KQNyMK1STybCa17ep",
  "key8": "4oSSxCR3qHZSNFxJKAPQxaBUA5xVzGJPoZrTaoJZBvhiJVmPCo2ST8sem3kvF8PmMknPLVuYKXCfWuiKkZfQYoEi",
  "key9": "25as9eQuGHkrKogwzkwzadtYJ3WKB6JTAGoQ4hc9f38t4CuPkrMef8TGbqk66yGhMnwvW8Wcahf5BxKeygBb61B9",
  "key10": "5MzLhSYp1GhS1uHG8BwGGaVj9raPxjAgocLL5bDk2KM3CW6zGKvR7oUKJUy6gVjwNkVtpWjATLVHMvbXb1Xe2aVo",
  "key11": "4Bi564D94tcqXadR77ndrxibL21K8SdyEcUPSyBzP35EAu5fM3VaX9eT3MvZEZRpPX6R3WzCwVQt2pK8BLucNsuW",
  "key12": "2jfQFhX8vfNUssY58js6eEKdqz87BjbCgCUW22Ei7NwVUtG4kN3eY7Ydu4hcex5MZfE4QAJrMibK2oKRiAvLpKmw",
  "key13": "bfEkLAZJSMaXf68hdDnibyyn9mmCt7Go6gQQiAnvMKB7tmDCeret713yrM7S6k1d7FuE2uCtyoZoTZxxiVNDEcr",
  "key14": "4XMCvajZCaFw3gincdEofktvkq7RQNBzP5MJiE1yRGmbR3sScPhEBvaX31Lga3irJxUQ7eNfwRKwXjwkVx9VW96W",
  "key15": "3GwsuAMBSfR35U5LLbmsdwjdwRFpTnxrrbzn38eT3JCAgAJpF2PCbLPT3TaNKtSVnaiM5qu3VHtPDjag7nG7TqAk",
  "key16": "4T29cT6LUECtf51KyCTids3UqaUEW8CzcATDTn9nquBNw27i3okrQJPiCM5AqhNZAF2FXKPRHtfPdJmoTNRtHsGz",
  "key17": "2wA4tVmrxN3KGSHN2kcnyUXizjJpAgq4MEHU1LkD2vwCXMw3GdYTGD4HkQgJSQ3KnykFXiFTMtA5VfMmLj8nK7aU",
  "key18": "3JT7eHBS3f4V8muMkntvdFuy2sa259mhobvxsKejkpBTx6VFJZRoHLcpMpiC1uAkRshJxwDng6VRVETokvUZyriU",
  "key19": "2NpurDQWMVBdscedymMPNBAmhChAuzZy8jWCyTtmcdVQPExadxkFoFrkXhsAX9TVTBeVixaQsRAv3xzYa7twjbgj",
  "key20": "JfJU1XUDqmvt34Yaaxog575Y5XHPpGuBzzeL4pyDtfMx5E8YYG6J6J5NEgVCFEE4V6dYW6MJGBFWomYXx6q7CQj",
  "key21": "3vghcCMPD58o6aKCrbDBWNUTMd8Dp2Bzg4VAa5JHavvoDFU5SMkgjjwxF3Yhy9ipsPHKUzVDEjrm8vbAkhP2LzEg",
  "key22": "62L46MHnGv5vh9QdPVRzcc4gERG3izTtufYEKEQYi1f4ssiJpUdahxmCGA6TxAFFd2PhPw3zKfwmNjvzeVRF8Q38",
  "key23": "si6GW5SWuXg8oJBed6GCSmyPFfaiPXTweQHQ4WKErzSyt6gs86Pu69HqJuRDB7ffRXf2BzN6EWhqxhGayiFdX6T",
  "key24": "3FnAR5vvdSMgKFJSk9xemzpNEfByejAszzU2CzLdMsqVXMiYsfJNN9GTo2rURpZD6sUsiQe8qKWNasG8PKG69G43",
  "key25": "54D2oCkkKyNgnWLVm3QpAyPUc4irA56G7viKNAXMPW5svAjnpfouRAqYPpcGUs91sk4NgeeRp7frdHNc2qKK31mn",
  "key26": "3LNn8iHSTUbGPPXAcTomjaDQwJ8nCsKnQhZ8CBoxWttY27UAFaQyLNDaPDhw3etnr5jz6fPLXi62GS3P3n6n2PgG",
  "key27": "3T677jKoLE7FxBgZYRvttcLhLrxmuhid7wdieiPEkUQdvkTNfNbTzPPBpwumF2H3g6NeBboETk4tBMk1dM9wJcmR",
  "key28": "2Xiwhyr6V7Pm8c3eBfRfvrjT9WcBQGYdE5dwsoFMFNW5RUrDQkLPcLt8aS6A32ja2EEKjbsb7dH2SbCq6sSXhRZm",
  "key29": "2dKQJxEy2jk8oEedgQRJabyVVtQcY1bNQbRTXV2DkBgDnS3J97hbyUMStCKgn7K11npjAeAXVrtBo8KodjKb8muy",
  "key30": "FvnmVopgbCh8cuTQfPusvBjCm4cb5ZJ72CFrQ2iDUxhj6QNKa1QjdmY56mbwXqk5UwG83S1BJwjWpnpM6zv9ZGF",
  "key31": "3qR1BGhqqLAC3bGXhahXgdM5RTeb2npRGiGgeSjXJqjGnZZjuFdDqjtb6xMt11Wh6kwGr2b2BhYJ921URyHBhMFp"
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
