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
    "3skpTAHygs3trtu6Ju4em8LSJtRwGE5s2Gd7JkLaVtiBN6XdEdyzXh6aNbVsAaRyLWr9Hvy3dRqUmTEyFgdnjAWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3RhjihGsDzWa42Mrm3TvAJmGXErQD3r6m31w16L8o4AtsuGBoK9uKQrWbcdkZ6vS7tPAfpmE5nwQgDtTRHShFr",
  "key1": "55JvAMBrej99aamMpKPdri3R8PzwiYdcAeh3RUQfrkjov7jipnP58jqD9NHJoYNwEhhatd1dum1QjkmbYE4eYsZW",
  "key2": "DV5ncH4tCowFjLtBMzYQMLVg43Bvbm5WRYXeqqZVym6KChR5R2dLVVrkEr7Jk7Yt8WcyPn7BMrB9ZiKXz8dnCLo",
  "key3": "3VEZP1Roh4vqr6KZUwayfXpD4gXPaCiaynS918REBrZgLDd7KwPhACypTjAH2k8HkCSrtR1oLZ7FKQUhoxfGLs5X",
  "key4": "iSUyfK7HuxwFpBbDePaWLGAQmdwpQKVkYHicA2QnUjUwsHJsyGtaoQNttmkU4bpzmjj595hKKxiaWuhsxWmEGEu",
  "key5": "5zvKH3itwRSR3SSj4jFinbi7QNed7G15qQJFwj1deDXBM5xTcm9jDiwhxm9C9x186NfJ7aRNGYKg6H3gYuDkTtxw",
  "key6": "2XMtTPvXC6Nw8nryfEFygc4SeCaGyPHsGTKSv7D3Fw2YqjW5mwfnrMJS7nheuky7euB1bmsZ9KcuVfNBem57ea9m",
  "key7": "5zvmYoyLL7AtHCG4ak5vyoxyybvPqxs8bV37iDh7uBSaK1FnZg1X8xEPxpAEXJ4hjhXdZs26RSzAPq2Gnsxh1S5t",
  "key8": "2yaqaSco69ZtBrcT4uYdAgCeMdKbt6XQBzzvHTzKwiVWD6TfVyo4m2RLaGm1ymrjkqa1rMXZhSDWh9n2H4tfY35t",
  "key9": "57QjLKfxSGVPwguaJ6UpsgdgsF2nus4DvPFgKr1venp5rwUjELk159Q9bLjGVcYKCyhE2ooLCYgTJyoFtWNNc4pe",
  "key10": "5dzZnpEZpChciau4sewzQrAvDFSpCT643SGZ5FUXszwJiaqyS77ViA2xg3yhj5KAwRTDtR5MpfVkcRuBSKf8MTv3",
  "key11": "5zuuDaw9y9zC8gpYVYL1AabUC6c5YmHBLy6wF9Mk4zpQAVY6KBcuZGMqHNvfs3oadvoy5PcToCBHFTm43uus7eqQ",
  "key12": "67NjP1ZLBLTHxParyCUgARW7JiKbZwtuUMRcpgGZpakNhCGQf64vP7uqYHR3AjN87uEuMPwoYKYWZs5PV9kAqwJF",
  "key13": "3YLjtmEHoJQ6NTn54GPxt5Dc9tNuWKxj3foNB2rgsiJkdcsUAGhcRyfzmErLyEDSKq6xWe4vg3DTu7FJBNGN3SCU",
  "key14": "3GqaTs3nfkNdeYBbeuQZEJ4Mw7Q3kk7s9Yc98kTSTiTyQ76rEQGj5ykExdkSyvXBiG96SaHt2AJmmgN2mDy2JFSw",
  "key15": "2y42M1RGb1DJDXpAJZYrxSWGyCgE2ZRDwy1i6Y3Wjdy1VXZYWbGaMnRuCgxqm9qCvXUfvbt3oFRyWek59v92hmPp",
  "key16": "2s2TB9vhzZDgyLZLdtReE5y5VESMesWj5pwqTtwFXEqJ8Lkj59qKv9aYyjREc1PeSz5yQhqrnyyuppahsPbkffqr",
  "key17": "SH5EPNzVUhJEk85w5nfrqBtzziBkRkD7taJXMwMjn4neB7ZchL1bZQr6HtiqT7b41ZjjJ6aeb92gBYuGTW2XmJw",
  "key18": "52XENxjesfrUNczKhJb3HiTsSFjmPwfb8ckpJRMLQEnUDH9Uirrsqdj48NFCepQGnxH5B4dggV1LbVYLdGt8NPiH",
  "key19": "2ShMDYUkxvMbFrUqBBvaEFSWLEEMtN2sY3H26yPbJjXM9qAG8yTPqbYRNgPrfsPYw7bTYE6oJ9vMFCYmLmsSuw2w",
  "key20": "3Z5ubj5VU52Hojtq4gFAqaD923J3F4ziYidhT5zNrWxTkM2bLvuWwoRZ5Xq596zt88qRKaHQtVUSPsXsnoWmZTXn",
  "key21": "4nVHMz2GzGev7QPLhDaFDh5P78EXvfJwoJxU8a9miJFQXWYuNAMhtV183JyFnQnWprC2Dr6aByzznYrHB6Nyyyht",
  "key22": "3t6LUpE9ABuMYEvHZSeXTePdjvqw7ZYcjMpgYMmMDGDhrQkMjzvWrsYYHLc7aKj5AJgPnzZoh2Di7pfEzHJaicbc",
  "key23": "55uyA3XJMeJMG897Bh73JDKi1i65HvZpx1YrR1Rr3qkJtKSU6BqovmYumWk4ouu9N97Zr8gtacScAwK2r3XPFcop",
  "key24": "5uxJPyUcavviRV2VYpFyFe3jWnkD2LG7i4LT69qLGb5KSRYk7d9iJkCMNKxa3DYa6YvjBLETDU65YH8asuAF47kL",
  "key25": "4kfkf5Ef1kwLFGf87GMucfLat3sRZkKq5DdcnHs5knp7rdHMt8AR2ZrM2KFPufDz96EwsSUkYSY1i3Cyb3ie4JAg",
  "key26": "5c4rtqVuZHcYu1QPMiNfvZKj7SHZ71o57U8A3b4iEBbDfTgCMRyABXJ3UuPHWPcEz5ohuh83Sr6VnuE9rX41TbpU",
  "key27": "iJeW7Et9SztYdbaFkUXLhSJ8QhZeszztumRgAiiHiAmVT33f3ZSg7Mr3GbfuLGnFcDHxHCLj5pwPF8Yoj5qSZFf",
  "key28": "5Yyc1Nbq4HnFUViPDQqA81iYhR1qPXtuXr5SrwETVnBhfJozzKLbbiAEbJR42RNGN2BTFRNr6KWM6epZL4iPxYYe",
  "key29": "5hh6qP397g4NfbHWHr3wXGKXrosjZXfpr836Q8JFoLd4fMMpAhBj87GD3MkVR5MMGMdBjAfiFNDK7RQABgxwdFNz",
  "key30": "3dFD9AMm5Vny6VV3vzJLz9t5euHH9kmAEHffHKJJtS2uF3T8YJr2T8778RfwUsnD1hAXQY1e6qTXQkiz289Vji14",
  "key31": "2bjjkoz5qZsVXjF68RWJ4mPc2bf8BdaRfzr5hZf5zyEE6M2jmTBR6hYWArdDVKeudVGTz2wfUe4mKnitLtEjGkre",
  "key32": "5M2zWZvPEuqxz6m5znLWoAgi2cL766jpzt8PxPubbsufTnTuAp4hvnQHib7eoD396BBpfYfLBrPzLVYBafjWSvhZ"
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
