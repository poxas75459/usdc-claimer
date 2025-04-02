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
    "62PfQBdqm7DQg4Q8F6L8aVWghydJ7341b8aNPpkcpwz3uU5nHebm8jRqMsT46cZx9si4bLyZhF5B4xSx1r55rMCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TcscP44Jkitnez5cVMvnh6h6kC9YurYeKJNxW73dKCRwqK7n65Be3dyi4ftipGKPSEcGivpbAhTRuAzUPAESKeA",
  "key1": "vYCcxMeYnzdVyL9HEdHewk6joyk9JXmvfxeeixNXNtA8hrGLzUDkkj68kAQSg888oR6ZtzKWPnUeSTnr8JimAfd",
  "key2": "5HwTBy491VXmNMaUG7eCR7ZdyQockQaiFPG4bBaCHPxrKw1LRTpmAnRD5DvX4gmmQSNqe5TkAT4L9SwqNQyCyJWM",
  "key3": "3Kpk5MmVX9qPtvrYckeLg92ApxmVvpofhe9EtndYbL2sgRz7Tpi3ajC1HeZh2wb2nduCgteA1RBPfQrpPRZHWBCP",
  "key4": "4K1Cq2faTsuEfKRX8WyzmN5Q5PMEwa9PJv9VyeJn37iw83CVzGtpeuhVg3n8kQBGmEsrU1n3MmYN34Xn6Pr13bG",
  "key5": "bx7npJifttYhakXQDoRedrQ2PMfibQyNkRYtV8B3pXs4YuHTn7uVvNVriHxB9R1n2TqLRUQUJwcfgdAqtrkuvAj",
  "key6": "5koEZGBo6sZTS3RD8pfRsVktz2EeaeB1okTL3RpQeSsFKBpwD4YVfzLmgBNnRvUfrb6f7audxbMgtNSL2ffTEUNm",
  "key7": "3Em7EocLYZPD49et7p1cRJBzTozGV4MynGDbApSTJi686haW27p2qePkePNPSvDeMPsP4ZswN6b2dQ2uUcQQSnV4",
  "key8": "5RVJh5fZCgu1TUQbsEmCtVbcVJpaZV9ZZneB3jWvKa2s9bMPnaXYDbrSPyd2uc4kq8TRXY4Tz5G4ymHsciCDsFYm",
  "key9": "3nRiDNa5iZW157JVw6W8utLnQ5gVLzmhzk3qE6dg4y1uGFP3s4LnaBqQ2Djd6Pt2UbgTarKiaygF5DymevNbMTtd",
  "key10": "4y9gcdgvJ6JbHKntiFYVL7pEvVw4DrYPrrRVYw6Nvy491A6WoTYSgFMK3kBT7eRZNmXvSyZ6Wp7MK1MnRrNe25jz",
  "key11": "2sJMfKzNTZ1xPJWyhPtt4mip5uLr3hTMFhpb4zVhqgNkLEj5Br1yM3EwLUj3gAyXebQk4gxZ2MwYHzQwgxXoW3rW",
  "key12": "2tBDA7bQHLNV7LBGYAZU4JRdAEvqvkzcaTQDBJi9kU9SPQKgb5kayBTaNQwmZVYYX6ZRDqa7gigWyKRKQKPF5ws1",
  "key13": "4Mb3mNdoPTY757ou6qnQtPaCD5KHebTBwokX7jjpz8LdS87VcHiLgFHDAa5LS6unSiTVQCPrWRC67tntEDH9MfMD",
  "key14": "3hYPd175VMzjGNfk5LAFkTnY9QkP2fEVUKhDpZbxRF78D8fpAUfYLA5CkqpdbveaS9stmQhQ7AeoQFuaRsArnxzT",
  "key15": "2hbfVMFAnQQsWp3TDGjkNsbQjGa379aqp7qTKgWuaYFx9vUT75KXEVQ5vX5gKC5T6Vw56EtSQhMuSmx2k5YEnWPN",
  "key16": "SfHSP3fYf85BeFkgzRMWbzEPw2Zo3ydrfAVnHUsNWbRY9nMU37WrkiA8xAMPj244JLcEVHBNzYFQ9mN7wq33wkV",
  "key17": "5iMVJddH78fLv8BQggxk91eCqQP2RDMGWqJvTdz5pd7b8p1pXKucjzW9WZg96UFzQJYPyr5d1n3NGD6fJKo9Di8M",
  "key18": "5upScdyKb6EeaDmJMtUrs1KMBKGe7i2bo7J6gKP7abBR7BvAig3vPAdRQP2qFF3K18QWSYVit4bWSy15Zf316NTo",
  "key19": "4uy1mMFs8JeozKvWEPVfyXC9Zc2VRLTgPtWMDbeAWJBGc7UBErAbJaUBexHbqmiUHXcfAxTRg4coMhL1XNGs5wir",
  "key20": "5dKTRFB5cSCz36uBZfxAm6vBZWcQeLEQp5DsdL3sVKbKz1gs8vBmv3Kx26oqtmUmMsgigHNbEbPjYrQgKbukvWEG",
  "key21": "5Dmr9uYzumRxXwbSd2sHPMTg4GEjinSdwRVZzAsuwFnSuV4bJ5L1mkAyePo1Toc3Pivn96R9mh8dWLeepkSJV94V",
  "key22": "4fWAXdexKanysas38RD7JVHj5zgxgPEFeJQ3G3QLipAdXNJEcSXRuZTtG5LaQSgEvNkUpSGK4Gf3YuLuhMZB1FDU",
  "key23": "3SFF1hGiGagA6fG7bf2DBB4FTx3UQiE7tXtZ3bAYSwnUyNms3hDd2ywCFj8VyRdJTQ6azREZKBzEtLs91rXenWdF",
  "key24": "5LqFEQDLTjSrwzj5jAg7mzArfcsaLqgM99NMH6SfS53gzmnxwX9FRBiLJgBHNJDDS1m9yEdPNHwLPgY4WChduR7r",
  "key25": "4hY24NiVXR3QhkABvgrCFy3AyUWeQ7Z9219hsgnUcKLRE9eW1u7r5AyucfaY42N28aGfomrttBSfaGp7wLzz9f4A",
  "key26": "WwKbLVMhEKSw4K6RPcj2eVKt2k9Cq9jLshqAC6fcUVkw6bNZ9Z4awvCTXzcB3NeaHj9TqLAfn9W7rpAYjHNDzJB",
  "key27": "4n5NukhepEabx93dcesBRY6hHrCie78s3d8yNMNxR3UJFfTpbbheNcVBYpQXewGw9voktb1UK1tMCinGGEKbXbgQ",
  "key28": "2uEVWqZpPUgLs9PLwSz8aKAV5YBk5YfK5xMGj3LJDAnHwfpGieHSQep1WgfyF4MBYUeRc3peiBvCgo3ZH1oXQHro",
  "key29": "2JKxerv7Fac9wYzy5SCuLkv7jgVAecBaAHzntPZsWHoGY5arWXQfcHf4X59ny44uFQMu4M6sCGPeyjqbVru5NevA",
  "key30": "BCepCUPaoQ3YetckjgaokT8HebFj4oEgCsRZyo9SroAZBnNaF3v1fMw42bjuNXk3G62troYpheXjcH5Eh2wYySv",
  "key31": "5wWhNJxr91epCrQ9qmSNQake3Sz49zquKBgQjLQULcjcMsRXNwVtmniqzmRc5dikTMcKRcLBn4o4tnCSshjmucNE",
  "key32": "3RR54oAiU8197f9t2QS6GnYRFVYpRRrUwYJ94ZMnsMp4wzfEJ1owwX9XPAU7jbWydwWwfsFyYitethDMjHnQR2PF",
  "key33": "4yBGUDdFBFxYuDtzN38bsgPoUiy2MP2HHYoBHRfMN6VhGUT3pNYo96H7rEEHQjKMaFdqQqAra93ipoisEvVNkEDM",
  "key34": "4WbV5bSpsG4LCdcpxKRKbjHHwxWpuc5PBZgeBsRh5ajUwQCjPfa3WHF3foYR4fsH3FEpDxMeaSvZwbN5c5stDPHX",
  "key35": "66zDPVLnDoarHwUyhVz1AM4NEU7RLMSmp15m7JviMD84YbwhtUr8dBLj2DNnU9NDq9LKfddp9QZiMZjiwpixX8iR",
  "key36": "SfgwLbmAXWNopWv6MgDn5ZDBLohDN2aJS4fzKLMt9cFx6dsteKr6ppZXW1zNfU4pQt3Lbe61LRwY7XvGAxKPJer"
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
