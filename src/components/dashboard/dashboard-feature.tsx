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
    "65D1WAzQ9JxCrTsXf4FjmFYSHT5CucDRRa4Bz4vT5u3m1JMPTgNoiyF3DywhAxKMxGN1JeCDc6VuqsFynX12Uy2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAPtddH88F74BKbxjd7fEwyG96WBiAzQceePgFDJ6D3TFfs1XguTizY3CYj1H5wdc3zDP38mwmzg81ZXtYza6M3",
  "key1": "5u42iw48JbEFhKbAVvCn2c4UGCr4vXTn8Xg3H2ugxBib7CFxuqAHbmoqWpL8hFfZMzbT2fL96gGrioN7gVYeW8wx",
  "key2": "8Z8ZWY8W4SsJ3ytYwJqdgVY5cvXLmVMFHg8LUVLiRPVYBQZzcL5ikUDtJ82b1FJmeL2ir9qeaUAUZQ3zzSJHuon",
  "key3": "3t7XUnZ7Q7UmRKLwY9j2AEPBLfTiz6ZRVY2gpWbD5KjPLchSyj8Va1bu511VaxFUzSrYCC6Q2Bd1bbS6iPz8SSQo",
  "key4": "57cjG5sNaR4zZLyW4nGm2ZW5bBHTu9RyvzAQqHxGskxwr4Ke6LHZRTtt6SSkasagMg9JYZ3NYYZKFHSjjSC46M9i",
  "key5": "3cf9moUGq2T9wdf1V8kBcjJgCn3oz5HmbGt1X6cr3Jhw1GAiuQwf56N8Eq3FXSUTCacHH5hSEnjUAzyHb6Z6hmbN",
  "key6": "4Woe7VspwSuy1fovCEBnQpKXQw379uYCskgGoqVCdCxet8EGVeEgwexyqwqhLnBCcaBiq37q82UH4UYuN5iLMbXe",
  "key7": "3Rpat96kxymivLVj2cFxt1gH3hSCgwNG2JHXgPCaN1AKoSqm3DHazLYVStznzduD8VjSjsuntcQVJ4FVAx38UhrV",
  "key8": "PZPbvsqqfGfhG9JuCAu65EdKpfJuhqXqdVhrYey2BAcmjkWNhDyFeZW1V3hw5kaRndQCKmwXLbZSyxvP9pCroAX",
  "key9": "61d5mS93pGnxt95jM1DLpycPwQjXgiQWkmNpEpoKzDGupC4hDeBvh2Uyy7G8Y1S9kzaTxSrbGLtPQEHPbrX9ZvwL",
  "key10": "235A3SgQCCEh3vGXWTRpDXdMGcNRdYFXyB3HETJKYrTwr5GBfkUQvn2JBGGQrvyH6Qo9AACrB3neLrVjQJymqKLN",
  "key11": "5LXMizujnFJ6u2Mh9FMw6aU5mxz3jY4ANb6gMsc3PLnMU6UVkHhUWEmWhULGp5BSyJkb9LULrr28fv5Mt3B2PJH9",
  "key12": "58w4gA9kxEM1txSKyi5Bmhn5B2VMx2QQThx11DFrMyDb7e3BPcqS9i193cRRm6pYStKTCHLK812SVd7Vy5jLi1V8",
  "key13": "3k6VMBzyhUYRrF3gWRzjYutXg2MfvnaFeX4utFuaLNapeDTPaJtxjpKa2N97e7mPQyBXwPxGY9rX7hR43WQF3Cti",
  "key14": "5jQ5tPmu5r3YQNAWCxtbZSro5AxqkejPg4n56C6mTAbyoxvfnuVcjbin4DJf7G41CVQpPaoD8SzTp7comH8M2NtV",
  "key15": "5FZwAe2KEpw2TFHb84yzGx2QXmtnYdvHnTsG43BdZei79ZZ3EDqxcFjnFF8EbTbeqP5YUt3S7vz34pBsui4QTaYy",
  "key16": "3UvypBRhUMW34S8jwhwLXEKBTHYsEkp28CRRxedy5cqd5NH8NjSWFq7FyByL2VSsS7ZDjT6YBVo7wp4jnNFMfmmB",
  "key17": "5ZjeGBszi7QdcYU3oheF7hvetca4pQuCgMLHAjeqFp8cnsdEoVx6p7ts4T6SrKxQmkjRRuG1MeJY74TubdfpvdyC",
  "key18": "2q6kZyoB8tznEzmy3fj4yDtkLGcatDrMCSEAVG8aHTyvhjj4EXsRhxx4Jjbu9gL5M8LkTcDqT35cmLv57MtKWTX5",
  "key19": "3Ai4o6HU38AHY1Y1kwavNBgfXR2qKnVZMWD6BLbbW2ZFS3dMuDJtUWqVwcqtbgq98Ntngekgt1kWBz1TPApaMwcm",
  "key20": "58zPAUiKCZAdNwZaj9xMSf2JNkkzFRhZLW5BwoaSxLYooPiQyuNazCcZQ33dV47RuXjdeKhZEv7P24wt9FnNS2zx",
  "key21": "3i1a92CobrpEnrDuMFUtzMAZQQot2UQaNevwh2phkG1bHbjKgQYfuydMR1WGzwku4B2F67FrFvAQAtJe7SthLEi4",
  "key22": "3CqLLT36EJtPperi9v4P24vgsDxHbM7g1Q2SFmg6cLXutZaLULNkYvvzFd1yKozsdZXHYsHjfZuFasx6eGnZ4N9A",
  "key23": "37FMnuASceweERkddNvQ6DtaZ3u9zRpNn5pyYxqiWhADMv78mqqAZAPRxGfYa83HN2MfKy5Cqof47PaFFt4cCUbQ",
  "key24": "63SS4E7wnYeBNxKMKvbmgxrM8qDk4a2LAyKNrVXHrhfqi3LqpwH4wxCBreXBjCQfQenbaBhuuxyoQQRvL6jDbLHQ",
  "key25": "5RHxPFZEYmAMdAgVRuNGaTpvoVQijFxcJCrdiqbEXzyQkdAsfotRuJ1T9CEYvFDibRHv3jGoqtKnvubw86WiZAVX",
  "key26": "2XDcjrFg3bKdziECbGdNYZCMcCKVWB5yAN1NT9CFVWE8X42zGt7HbLwzz4tpZnu1SEeyWnwyGjxsFYLiwHkSh3Jj",
  "key27": "PSTma78YHfWmwxkuhDXh8yk24tTa8DxxxVWZZT3G1SLfU69Bth92bnb4yN4Mk5yEiYjsCfWUYHbfjPhdJwvrAea",
  "key28": "3iyTv1dUjpcGy6Fstsyx4FyXPXTmzLWdDvY6THSrF6XUUhJKJzX4SpQgMZMBoQumGbw6nGE76s7q1HNnaQJkUNQT"
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
