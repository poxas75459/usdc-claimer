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
    "27nngbDT4eJkTBekQfKZ7T7b4nYXgBxaKRyMy3y51rrYmLPoKcgaoooedbpVirNUQJU3wKqTAwvrKBq1j6DaDs8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TBEGm1QPDtYi68EhUr78RXaggLy5whXASVuPzGvyWnFK7brMdqqtqe3VxjJYUBmuEwwT4N357JybWH6UGYdJCWj",
  "key1": "5wsGMfTmJk88wiT47hX24R738NFT3bYhtNsnWxLUH1hQAFGeYJz3ohowz33x2ZgVvhhRdVEHtjCMsvEGxc4jmaft",
  "key2": "2m5zSKZZMfgrwfxRTBHRCeovp4XmfUwc6qTQ41F2i2nuT1fuQz562qjcNaE6P9ZUbAWpKaqYQVamtMyihYXtx8D2",
  "key3": "5AU8rfj8z2EHDn1eDgfqJFr6WNuHfBvssXovdEUhq4mNF8uqyQBdQqvGBSEDCYszfAG41HJ9FNBuFxNkPXe8C8bx",
  "key4": "5zp1BNQE5iM1tqv84B54vWwWvHxuEeeQ3Dg5fPw4a5yfGcYbisGNUzYARHe8RTrxidpXRvrDfwrEAXPpbyfxuQMV",
  "key5": "4j5WYk1fRQccsbztrvnBxofsmsGFAMWHrEZXnDj2fdrws4P2PTdrN31Jf1UBAVvR4pcfXE7SqFajmyNCzLxZpEMm",
  "key6": "FZGwpLdRdhg2SzeXkVJFyVkhsDM98ZbUQk5JvojSKoVKgxGWjtsdkb911WvLLxobbj4JXjrkohX2kVJ6BMY26Bs",
  "key7": "2JEJzR2m2LF7RAhhktzpfLtifvGb9Z3awpY7FMiQUMQTBKMWpxFog1tjEbLhjGUrmukVavGFFXXVJrZ8gCR3AL6r",
  "key8": "4V3sq9rJs4mF9sxcsrNZvCo2LdwtDeR92qTmeSep7SnVbCRoh8GxpNx72LnTFEkhZRAR4CXcLxdarmnuUdaA5Rcz",
  "key9": "58X3ZiWpbsn2GrTjNXeBamQujmfiGs9exmwNpim7bUm18TeJJyBr41z4h6mCP7CHUqgez2nKj1SAhXmEywFQr1p6",
  "key10": "mKbM24MS2zrXjSsDSTPX9yktvjocCVuSsVgkNsTwoUUUTaWqimbEtZiKjg2kjHcyCNvbaXtRzN7T7iefgjX8PHw",
  "key11": "ihK2Psx5mvGL8mBYQD7YNKouoiTtZs1iCkDSu2nWxBh1PBS1c5roLu8iikxKPRfytSLkVJk3d6YmkbagxFpLkdH",
  "key12": "E3Yq1hYwwVn4vaj9aEKGsQck78vS4mnVnD4ZGuxtTSeYucXeW1YQqfSJLceanYmDJZpht21AgAmuYnqdroPnEZk",
  "key13": "5JhaPkHRtC7LwLLG2kB2LWxgXUBoYnFn9Cd6iRAAVkQywdKz2ai8HNnW7Q8j6sjZNKCfAiFDKj5r16RviVqyKDkM",
  "key14": "5Ag9xoXWeegkTzrx1s3BqJbnU9hdt9SqEseA3qwwVsQJncghynSWk6WXogENGeDd94WTEgLs3eXKqM1V9dxPh1FX",
  "key15": "5srK9mjTm16rWiULB2cMMzTte4JnB7ZmRwjGM9sSWJuY2cid222aok5e4yw6MFT2WqZy7Nah35Y4F2HD4zhDTEwd",
  "key16": "4qFSt6vTaUzjJFGTACLuEfWkVYaGsNMJ3XtUBUAhr6rZGoCQ3eq2wccGABswJM4bX1hLjEEnsWG4S4Riyq7cPrGW",
  "key17": "4u78wh88PBn92FcfHjzqZ8k1jpqbwvyXoqEbveJhs5nEKkDTGBVzXzD2FAiXHG1HrgAf2Ly67gSS9SyUm19QY1jM",
  "key18": "MtDZ3EQR3XgqoRFh5DKaquFpSHw3MTR8Fz4oBe1FVbD5U3qH8fhJvhtZko2MXqfaTdMT8ecveqV7V7aUDPxipMs",
  "key19": "ArPtBjrHy8GVLZH8cgSR3uA5Qjw2yyaZESFyeGvzfKEdzggEBkXJMLB5QoKLCfGXr3bkE1pokawe6RWK1WRMNf3",
  "key20": "4c3AC3nqGDRTnqLHYkxCSJvaYMaSioYAhzXxkxnDxPhz8gYjFxU2Y5evgoaAVG9yFQviDpLdg27EPKwnRD2438Gk",
  "key21": "kzMGmn9JxE8SCSk6V8xGUyNvDTYY5qT72PzzaVr1eikqdN8Tw4trGqGF1f6EjVmDR1s41i1vMXPxe1CxotPxyCH",
  "key22": "3sJWJsenhiebPZt1hZWSQGR7CLwnnfMkYzPsyBuxcoFXEbr3ipxGYLQgWBpH2tBKq7Lkd5cVXyB7kj8X5jXxu5L7",
  "key23": "2nbmVGnRYoobSWdkF21dkFh6JzFBX1X4BQasiooEv2JYaMLR15Rm8vkSapbEp9GJSJnnVS1UpuwkGLnbTyXn1ori",
  "key24": "2sHKcDsbvAjFvvMAh429bnqHor2hzbCQ8TSLVNy2Ed41Jmujh2enGyha8WvhrudajKiecnAz2r36Ggfh4pYJCKop",
  "key25": "2a3fDFmJqD13k3JtXgeMd7LJFP6cUhdqxj2WgEAmUztvTipfVF3vhfcnqQ9tbVXsUteFt8nySbTNTKFXJJ4GfGVn",
  "key26": "3sekryPbEH2xvrMFma5kWsDcqTyrn5S9Hi5JnjDg55bgQfRsVT6R8ZoF67tc97edV1H63kXssdcbVfH7qtRAhSZ4",
  "key27": "4Fmige6Nzdb9J8brK1972Sb2zdvuGyTMfeQvG95N7q6YM2fJy2FAKY4fQaxPPrWYizEML7iesTWcS3HRnjP51bGg",
  "key28": "41H6jYLXyXxu4HE3pRmwJa25mMZ82nKxx1DbDpRsdXxmZxAYbKqinz1ETbKHBi9bdLPdHBPQ67TLCfk4xSf8DjUo",
  "key29": "4ppVPbVw2NnZMz9rnaFteDd8BufrGdJSxv5dL7Q9MckoV8snBv2wQNb6tbdTS7nEKKeDJwufZ5VV3KzzPwAaQU3A",
  "key30": "5Y35JoiuAicSEbRF6ZgD6dymbvfzdeRKr15BjFC9mjkxgoCCxYPA683DrHDA845yVnfMVJtYQcgZpau7m2hfZKuS",
  "key31": "2k8cyuHShKFudLxRKSLwqNMKfnCmCM9yNXxArWw59AiRuepXYtimQkSQqwAHtUxvA9VBsBNcwpmS1HkJFCYzvTVu",
  "key32": "3gthd8VWex5AwitHDA3Bn5r2Nu2tec28JkqXJgR2T55pexmHNvmXX3sTdrxdbbQy6qNHCXJL27n4hd7KhqQsaEWg",
  "key33": "4EAb41uEbEW83GCmUnJETiC5b93zVGzVcV73NuJN3WCJ6yfCWCwGvZJoqxyiofH9R5tbZDRgwA9K5quZEGVZbi3o",
  "key34": "3Zs63HqH8oCQSJhNGm7pPU6Uyy7jMiskf1ZUA1nrL8qjMys19JtLm3waxULgswEYFRBk5oJCwgWTG8EPzbHFdTxc",
  "key35": "eMHbRt5bConWnJEtP62KCgypDoSpWNWMBouMGqktsBTYeaCkCXEPmF7p64SNynZDyhqEuga1GTemvLNM7qwzpeH",
  "key36": "qaHnxFMWrZfxzy6Y8r9bD34KE9ZFmC6kBfR4DK3WcpHNqEg8Zz8sf9deq2b2ihHh629PKapJR8PNATXV8ZLE8WZ",
  "key37": "4vLF2CezMcJrtXS3MiD27Md8jf5tMeUP7yFCLJQKwmkttAahyYhoiScuUZreKTB1MVuhGSi25YpvgZ3FKfE5QWZB",
  "key38": "3Fm7zQe4Nm4Ti4fU4Rimof1TNTanwu5mToQBPXUQn8xdg474dg1F5rojF9Hs16VaUURr3uLydWu1xxPeuFHX9nMc"
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
