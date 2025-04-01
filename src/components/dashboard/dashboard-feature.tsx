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
    "5QZDeHFwWbZhc7LmBdZvD9uTzepP4QKDZKhumNTK3wYvAEfSukR7BXRqpzPo7Eq6XJfKnS8KQ2KQyLPh8BtCb6uJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sX8zrrqoSZhWPJuM76oqQR81zZKJDG73m4ogTPpwR5sAMSqpbfvBcztXVGzHkFPMHc5shHwUDmwcjzR3Gy2URG",
  "key1": "67owZQWC19o3TNyzbk8dw4k3G1xnuBugxCNUebrd4ADqt5phJS1j8153sPU6HoRk3e1PjZdWmhfzqYFotophDBRw",
  "key2": "4cxGmxnhinjFXuQzpdh7nH6Yvwn7SwzwftgGXbqgPP5t5YjqE7udCLdMJfJccwjoU7aYL5mXD4KQnexq5atktd9",
  "key3": "63bqnMjcMfMgvuAjAVPoPaNS2dBAQoPeu2NgPjkZgxHWpXeGGkgAstJwZn8rVHFMjK9uZRTePSKZbSaYWGZMirPm",
  "key4": "zKyGZUMicZGfjWS4RVHUyqxTbBXzUPaC6ieqZMW7DXD9McLkHCMv7Mt1J4NoJQQt8JpAZACCuuizNunAB8QoGcW",
  "key5": "2FVT2uThgMmW9HzwqnUj4nvk9iRWdpKChsi5ynqg1ZVM9QeQV5eneHeb7XSAzAVuU18pVDZc5k8TdfwezL2NgRTC",
  "key6": "ufgR7PsPgQ4w8iLxJnuocQRBC6JnX8wi88twMx63sQiLyMWxhcCqt5ehBzomcbbgMhNmpnH4Waa2dXh7P9hmUBD",
  "key7": "44Nkf92LtQPWbUmCiwBWzviran5SaUVj6BA6vJARq4A9tTpgW2rfH5jYsRaHdqrJny9vpRxALP76KvmQ82g8wK9v",
  "key8": "3c43t1FzhhdsBT7QueU74zj9RKuYW93FjKDbbBSK2cxqGZePvXVSf4kyP52cHNJ2Y4pVTU2BJNMKWzMHqwJH1c3c",
  "key9": "5y7bv9AuqkWw25wzDimQE76awAw26wgzgZnciRXEaeWoK66Pzt6HBCzNENCcRx3TMFkLznpZgZARb66kbCrCvZ2v",
  "key10": "2wqtbZxokU1gXqyb6VpmNVCaBQjK4H8fQvXRd5cYQ4ZpHhA9ouDWaZHi61irPy3CuAnYr6XFreNiUaa1xPgiyjhA",
  "key11": "5jVb6rh7C46yB4XHR8Kb6JoRQucnQvvMeEhyqArFb6KUCLsN3A6abhuy85WDhjvoAaEXgyWyTzcpnmMGuXn2S84i",
  "key12": "2Ek9T44NtASdb8ad4uowuZ2MJwbrctRGiMhdWzpG7pT76yLQUq4tKg7aHwbfp9Pyw7KhXdQqJqv4AU5eaQPrANuU",
  "key13": "3qadgVGQcFhvbby7ugyDYANM1y522pf2AYrCgKrCYxmsuUJUgNf9kjuG4W89okydocyLX2ab4d4rRJABEQ5E3xtM",
  "key14": "wCnLJuLcBsiHmLz76oidkEjXWKjNTKN1eCUkkEynFB5Kftdb89qQnVPLpJGEYPqnS18h8Ued5Pd2joo6VjSME47",
  "key15": "2jGvhKAdZuajGVkVj4mVfnXwnD2tnKpAhDGdhFqCLXyxuESBaTb2B5xboQN1r4YqAopENNtBet3dNSDnEsJYbjVH",
  "key16": "ehefx8SEoof4C1FQ5wsWAJhSFumhaz3yqnjjyarXBAjcNJnB1cvgeenQjFCfStgCXAKbryjFz7GPmoFpCNjeQZH",
  "key17": "5s1D7xqCsnqRkVMbubh6rZETcwoRUYXGkda4Qyehs3o7WZuQUE6tm5v3Cq5e3bmf4esrVc5x7EA1jHQvmo9iUK89",
  "key18": "cjTKizBDzbQHLUZH61LDzeKqkQfSsoTeVkeuziQskjP21SsnB4iBwNC5UJf4MUR25d7YYR862KwpjbL3xn6h8Ch",
  "key19": "3kFUVQMdUJBihRURRaRH1jinuUtWPDg8rDRuw2a2bJo1UQWrgyYqiVxaJtfX7Axgzco5QTGn1PrgyWLj1JDBCLuT",
  "key20": "3vw2Q5WPHs7ScAzzWJ4bwQqrs8B8Eq692u9ff1dE3Mp4pbAbV72SNQNr1xZd1rshGU2CMuHfqu8pHuB6TMhdTEiE",
  "key21": "3S9QsvT8bWcYQkmTwa8knTdb59yukj9K1gKgDmVz62ocsJyT4H3p3mopaBgSvaEV5SjznKLXetiNk2QW2QeeEDas",
  "key22": "d2yCTHPZ79KSYJ12433FEwkADnGbZHxVYSseapEJDycAWu7QvE5ntEdsKHUqEyWPjG8uEF2UMePPhzPqYWeUQD3",
  "key23": "2dsoZog7YQhGSToPFDzdaMMme5tSk8Dyu7AJumCHiZrLkLCMLhKVofGNbve2SutBN3ZUHkW5HX9iDuy4SC5kso1a",
  "key24": "2rKvEkCQ3mUJW6c1pHn2ryZnQSih9UERKiuiUWwJHHPtXp59vQAg4UkztiwBtJnYZ1kJiqDjaU3XZTSr9T9CcMxv",
  "key25": "48bnNHzWqy35FUTdaPDtiR4EQCzkDTdKnXF13tTF3rm5LNz7VpFqGdKGt8o2yGWtb1ewx84SEUPM28iFRSTsQ8x2",
  "key26": "2FiTvdEfaRcnfevdH73jA5ZQ3NxVc7T9mUpuao1rshK8BgHPKbVKig4m9CLwmPbGhgoC93LrnbVWC3shKp1yNcQd",
  "key27": "2J6c1duG9duSquEproE5gdf55CcfG9ncrzCHe4gWL81yCsi5UUUuVPfKNuoSrRkk7qvMT52AQ39BNyrfnQyoNiGu",
  "key28": "FAN9xhTmPnerW8pXTdy5kP5goaMRoAbMAxCpTNPE7RoMzs6XaVMz7eQeNYoRuU9DMvQY4nekzwg1NEor51QDzb6",
  "key29": "2Yzq5w9sgxmCRyJaSnCL7oFXQv3pDZgeUxUwfMqyK5yykKXoDxwQ5uKaze99xEshMqQ7fYtpEBFG1HLt6Np2y4Ma",
  "key30": "4rjLPX2kATH7MwRRa425XG3VvdiPn98evnfpVwThXagqcNejSVkhzeqCBBqMQ43YAJZS5YgEhvAp3b4sgidSUsbk",
  "key31": "VndM67A3jSUwTPZUioaDjKEVwTMyts57cmt9cibiENjGdg6eAckzxdS6mZ49Nxbtp3aW7UgDL8WDnmyK5i3Gxg3",
  "key32": "4czzSdPA2u4K3rzaFyiAcyTNgDaAYrjG77fYDMUX15Q4eZxQDfdr92PJJ87kqQ7bpzbCp3E4j7Fc1VoGTfRFM6fp",
  "key33": "zgtXfjmjB9tKjZ61FYnbw5pWUqmiJukbhfw2bcxn7yTP92qt4EVNFgdt3n3wcQ64FPzahfkp7Cz62u928ifHSbQ",
  "key34": "4VaWjC5ueg7AXRtdpj1U2yFr82kF9vsWyNBsHsammSzurFbbZeW7JaVNeeBJVw2BeU9Fwq2aeT4hgSB8yNpuTxfC",
  "key35": "bVAEJjQdbTAZSwmLRjbv4c1yx899C21WgBCyZqV1D6QUZjwByivPer4R71YoLgC4HxTK786v93cNnDkGuq8Ft2q",
  "key36": "4NUzGXkNZC5FoGhdjfC2JqThWDVwhcqZyYHiSepRB1JtLSdH1c8HCXAkBfk2RbwPmkkwApGLbE8gwf1PZNWrktse",
  "key37": "2tyMkseE5t9ywSgjm6Jcf8M4fVd6v5KMhpWfBzaGANFFkWxB68oTz5bXo6iaNqCzZcND7RWBL1D42RWUKTkrHyta",
  "key38": "17zCSzGtGuGxuiAf4Ue48ngBuZap5TMjLzZMPcHDqGJawPsXaxHkGLQ4ZJycCEUPKHQDbaEJszhnUXW9EKXC9UE",
  "key39": "4nrWS3mEhGPkhBCCwxHeZZXiCqxdmAMw4BWoUo5acQMQrR62Gq33J5xSpFXJdhxpJKmyBo2476WhQWbme4riH8jS",
  "key40": "HeoBtbDojyPabKg5x8AmvnH5g3nYAPrU72K9aUMm5YecsYjdSJUBLVzgHsP4y6kvPiuZUetT2F2byDcxEJ93f9W"
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
