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
    "5Ysd1LEjfv9nmiHHuqMkQcR9MZNFU5DMy7UPw16E5vDKUtrR5CwjQhxw7rpTwpeQX4E6ZnW3QyFEgXf1x9WywWFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ESCbnuzrvjRYx2JHMAUM8XH75KS4veCFFVCiXq8fwtLnL1E9f847gpWEidbDqxaVCURaKXMAF8ZcJFcfMiUajj5",
  "key1": "zLYBCKoXHhKKGr9yvUP7LdZhk1GpDptZLc8Ptb6DVAskAMLHMFZATM85dTNzFVNQUmA3xuB6SZAKZm9kpnmEQmh",
  "key2": "p7UZCxiP3iYWTuTMaERUXYuisjMS3vv6XYpatg1JS1E3iqU8XqPwJ3CBfdkxz8CaTEnbqfMrM2v6dRG3N3S13ep",
  "key3": "3bB1zBuL4oDkfRYho5aHPH5Y4R1LWfimygdo6ZD4JTQZFsM27iQTWMhC7zSmnb3qUieqPi2jimwPrA8j5r9L8jfA",
  "key4": "5f6HTSTtpKW7sZSJN9d9cwQR4e8oACm3HBqDe7ZpCP6gfrSBRNYfc8igBx8n8nBYYUs9ET8VBXGCkPC1ngmMqjmc",
  "key5": "5t1TbYwC7Va46yQHM2pRQi9pdGXa3HrZDWFQXMWH5bHEAhXy9u4fQjm8tqs231pcQnjj9JsCjyo34ffuV3KcFnxv",
  "key6": "58daFmaTDao73xK1TPDHxpDrwpeo9d9HZJs6HspVknq6WcCBjgmTvBQvJGKk5LhL8Hw1xzXNttM9PhdbDC6Lmfvo",
  "key7": "2yKLJcczvP1cevY9uXnLDN49m8X2LM4T1FoATeGbMtAyB3dLTerKrsJJPKNJSQp9jqL98a2t7YeCSMH43v2qXxft",
  "key8": "2E8gKFPpTM9Fo9YjDwGz2oRGLtGQVT3iNRiGpJvf6ZTBgVrFWaakBuzRqLHPujGyZsdU6LMgjmHzmBmGF5zCCxJB",
  "key9": "2JtQgRmnJVLMDNoy2FM1Z3FgqxgCvSeFPKgcha4gLnkkMYbjmAZRwJqHBBpPxSJwKUfv6W4WRVX1WQxixY8PJMHF",
  "key10": "3Ak3uoLg4MHGTryVhTqoUcGkwXSnqxiAkxpZgwLiqUeSMGcMaNpM1NzQ91FmcBow9FmytBYKQKWQELMLA9iX5zaz",
  "key11": "jrBX3xrC6kz1ZVh4THCP51ArnpVoRqmgMMnPExccpqcYQK7g6xAv8h4KC6u7LKYchEfTtCQ38FFbZHbP5D9VV7C",
  "key12": "mW8utUKVr1jHonMZZUN9DZzod6PQYtJWHdv6X1oX6gXCg6XXLAmFs2gwxds2StHXB6ZnSHt3cMZCeRkN4zdG7tq",
  "key13": "R8oCS4vnKou6gnRJraiEHnetxm7dQxxiEptEhM87cvYbEibJZWqu3S82WghvHnSQz5dtGiAVGqq8jUkonFkwSv5",
  "key14": "gTbuTAoDzUkFBrUeMyeudb94tMz8exunJkBkWJ5ZonQA5bbauXLW9vdJb36KMRspxpUnPMugz4BUHHJexMX5SiR",
  "key15": "5zmrfLzQoB3WyEwdbTFE22nounwLRXAfGzinE7vpinXH3yQ5FcX4vsvB7g2cir3ocuJupshfLEjwiXhQ9AVXvDzg",
  "key16": "4qkMyrgCe96j7RnjnWGDedXPRUVMbAm3dSHNJYt36vpf9rZC2sSAShsMZ7ex9y72NjxizZdkGhopGq1H3fG9e9dH",
  "key17": "xUUFMv6kvPmfbyyqH2rmnNBoajcoRPUB8iHte8bShiYJo6aRw36uyADfcJTPhYtDbwevoSdJDu6bpHytfsxbXVH",
  "key18": "4T8XudB64uBUpBZopeeD6Fom1WEvi62R2uWhR96GccTxjG3c22scF8KVXAaM78KAPnoAdrYLxtkUW7GbdgFcUfT",
  "key19": "4d6L8fd4DpsWRySLo3CJBfButvVq1ftNi6cp6oaai89MgXqMcne2L6pakyUBh32xiDHSUAbBW197onYm7JnCDudd",
  "key20": "4qiVUeevEPFrVBE1zKddJBvp21AEBQn1NBLLfVzxci9geBN3DY6w4mkP1LjgrK5HgCNWe7e3xX1qchNtSoLKHv3e",
  "key21": "4bxxArhN6F457v1kh2c237Vcs6BFzhACKYb78oEpLFzMJt1FHybGJt2Yn2bqgMMW1xaapyzvEvhfRryuF6ZSbqnV",
  "key22": "2ZoDs233sZaFFKagd5YVS2KP2S667xaLswRJWpxhDmAqnb9Q1Wfj3gxRKJEQP9KWCYeKT7kmZpQsqhURh1pEH4Wh",
  "key23": "2U4zFVQiefYNNJhybhwJzLUiZ7FKsTDdUzGnnh8aW7FR72TXRKKzQo5bN1kn2XQUwLL9J41mXUCnCzdDcMLP1xHj",
  "key24": "9H23Wj3jFqbbTbqoJQNbSyzNKJmUr14NhP7Newj7PL9JWdsJsbrmwzMasTf3pNUVarj4xMMBJKzkAhU7mrZUue2",
  "key25": "4GACH3xpQQ1r5Snd7YJKfYNmhZapzgJjqQFpF6C1C9BARA8DL2RfiXesZPyFi2UWqwV8bAFEKFjjBsD56FDSKtCh",
  "key26": "3ZyVJEFnKTPjNJvB5R41pXHkP2rFSpkMZXhjihgdXy1xBZCtdjdaa12zVQYx4UAibbovW7enWC75qJY8t4g5C2Qx",
  "key27": "5NiovrAp1yuwCSB9AFPpPbRcL2N3rMnUd4wxMnUBhzy16rFWn5AUwURsGhmiq4oTnQEPUhjQKZM65U26xMbgkRWY",
  "key28": "65BiUhJPVkrGDSG1KLLjFSERytCWhPJ2ebw17AhpqUCYfpnhFojXxFEW1KbQdxem7nE1ReL1iVpHZAXLTQRw3omW",
  "key29": "HgVo3m8w5B2vW8nPdcgZzkAqb4XKXzt4E3bwzXSRn4QMXAK53T2eLNtMCSrMSrT6PsQYPW23ACj5sAYjCycfbm4",
  "key30": "56EwsR7aEivFwN7DKHN18nuWtkgtE5UYukfpvQYWJKLxvZL7TPLhHcMGNyD3BVoxR5PxKbbY4Nh2NrD7dpN35Sy",
  "key31": "2NSSVuJvqTCDsccUzk5bmGD4yxBCvS8zxJYgPdp2f2uFQcZTgua5HJYhhMVh7LL17anwFC5J8MeocpdAJ8n7S8uW",
  "key32": "5rNB31pm87AQXQn1nmk5mqSkVQJ7BdvPwFWRKsuMyLHMLe6LfcS4QqVFGYhSEYfdAymS1GEp48xFR4x8ioamH8wB",
  "key33": "33R5hKYcN9EEfsccUBqkBdjYTPbdNaTi8DaUJACUJHqB5F6JexARPG4dKEFmAJyGCukYJwBgVpBDi35Bg2D2nsoc",
  "key34": "5E3sE5VcPC5VEtB5nigKSmSKub7NgNXXXZabk8n8RVykXwXpSaybRSbznZVyHTygQ55mBMWHK387YZhCTEDe8zpW",
  "key35": "3iuLF8qH51izJb71N995wsqW2LB9UuLggUpjjgTmNwdgvQaSnY4Uo8uL21gvKUjkrE73sEU4q91fLgJor418ianr",
  "key36": "3Axit8GebHfxT6oMv5ywNQ9CJ2akKxDNq89nPPsNvpvz9phSPUNwrvpXEkGGbtNHfr4rFKfeishxkULx4RXu5siX",
  "key37": "3BcQ4NsC6fESSdaca3kkjpHafDPQ5Fah8NHibunAmrypCAAidkY5xJXPEaonVDeTtDDRUGtnrPfYj7UAXxJCc3gz",
  "key38": "X26XsTGjcNzbsy6VTCiyGb1m4D6TM3L5zioe4PJvgk5kuJsUoyi9a3rrLqGKVrfNfoWDkeka15oJCgaP2a4BvZt",
  "key39": "3dyiYaUjRrWBQJWS11TAW2Z8xVncNYtAExDy6YgtRnyCongo5riNFSeuqAHmqaU2MmbVMGvgztnVX239UTFYJc7x",
  "key40": "aftuVTdYiPZxduzRxNH8m5ccv2WBKm2ZEJg9D1ZHvwj4o9UAbrJ9ESBYfCfBeEdLWtyHo6ZVxkx8RDqZMeJD3HU",
  "key41": "2wr679z19ushoekMYBhMAokzGnCVRGkfcHtSmDNTJC2yqiPdwiyBHY5dsN4f8Q9fptQpd5fKqGxNixzAUcVBtrBF",
  "key42": "3seuvVmDThgSHKBta6qmC7e5sVEu8MkV9vdR5y2gCJ5W68pW9kbEbn1uY9y4NThesMQTJwcGHRKKLdaSjWtUcTyq",
  "key43": "pPQZTdTPewcG1HVkSH84dhZETr9K3Y6gxKTrCccGwJf11ok8s3BrQFAjv516YgY12HuZnsogKvSFmnUC9PBZ3Z6",
  "key44": "5kWwnUn2rtdsm5JwiHaxzrZ4XK7whh32fF392P88otQrhLfSkRmWK43133urNmwWqnRQ36Mn6kLibHHteNeZRASL",
  "key45": "4RVRQykJtbeYLUaEGU73sVy6GYSZbGVEm9BDUpc3ULRKtjXtafgVNG145tAVdEZi2FoSJNNXbpev6LF4j9dWHrYN"
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
