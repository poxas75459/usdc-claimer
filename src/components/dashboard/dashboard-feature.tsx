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
    "3zYA73iFYi187UE4vaiksGWkER5Wn81qUNMYoMfG6nSzYEgPhH7G7A4fgpEn1hGWfWxwsMiELKcpFHaPnwvCNCTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GCCRh4x9n8aun3sT8GWKbgJVbm4MLnj5EQ6cNBP8jbv9nJ43Q7rwe9AT2NTDVGp58dPh6NzmtJMbUeothyJt2By",
  "key1": "4HUFNZwQciJid5GknRHuX8aR4ASachT6bKNcL4keJYJD6dAb14Qiwom7moXtp1gw1zr9S5b4c5PosDMgRprTUn1q",
  "key2": "4xRnbzy66pwHrYMhScYQxUgbDsYkksERc2UvnbrfAJWbg9st9egAqeXGyd7MHv8zp8ic6LG8WSvbH63Dcd3rbiPj",
  "key3": "48TzATXiorv7GkroE47o1w1WRRyPw6dwM3cMFVtGVgX3o7jxxWRjGuL9HUscdP7YxR63bnNPGBD9o1cj1dKSwYfM",
  "key4": "5bBG6WATPz2L9AHfCSFLbcH6fuRRd4Pj2uoVWh8rtk43qzvechSQZZZhJrDLwqHkhMK39iJdxHvqsGrqgnT8pLof",
  "key5": "h2sBPPXjYnjbBkEuBj4cak4Git6yYXWK14aVSxxmv3C7WYNMP5z3wD1nM87WSVK6wA1wXwQsgzaAQpHvRsAKDc4",
  "key6": "2YWeoFXmuQmwetzeN5CfQhWkHska8MLCvfd4zb91D6nyezLLdNZn7wwgTsmRiyCFp5VXvDqF78mBtvnPEBFc7qKh",
  "key7": "3nPrRUSWq2t2CLQLj83PqhnUdHxxSCvuF92gnMLczwECtsTxjynTFCWmkXQwvkJnsEFhbXJEca22w2grAwSTEk5r",
  "key8": "2vqK4GZmpnaW21D52c3r3eXzaNqw7MBModjRn5M6bbGLKfnKDCkMxEa9uxbpk8CdHCpugFmcn2QHsS87pvewWCE2",
  "key9": "2QUvsPWsvbuqGEy6nHw3Shtf1n8Te16xStteL9nsSn59pjyTxqbQE2HoMZS5XRF1vLKCN4Z5dQ5vuS153s98PHx9",
  "key10": "3wnrQ4Pdem11w7nmcw1eAJMTwYjB6Np3ZrzMLvBk1ZWa37MUE4kibGAiNZR4sNUi7wnxxj7dbSB6k9LTxeeszBX",
  "key11": "SaYCGctKEPDwxdnxmrg2fQaPZ8FdbA9na6sFubFbvngqJkGYAfgVt4gzKphgfyR4e8xdWRSfsSWMr7vx79mYJbm",
  "key12": "3ZkPk8Rg7MuS1gPeggrrBh318fPwLverGNoDwfN8Y1M9qnvbXH187ej32y1n2TgobVPwZZgyRXMuiiVdhawDEaDQ",
  "key13": "5neVjsn9qQYHZsCx51kV6XVEcwRuPseN3ftj3Fpn6sL1wkzTvkanVPMHWmtRDXjTUNHaChaT3zXTjPAKZMjrUiAe",
  "key14": "4gWxHiH6rBXx6AAHC9bTEkxKERpdZfmqp3wJswpUktiW7k1p64JDdysQDDhGfxRAbLtRWF4s5Y5ra4yJtuCxrD6S",
  "key15": "2iJZ1qyfnT9c9JQEJmdcqeWXGXNp7trQvbgNpKa9VugZeQemGsqcrFXsonPJMXqtns6umzmEitG4NEfCHt9CNmUU",
  "key16": "4SWsRfHhB3fiGKuwquznpbnvjk6XxwWyhVY4vRaV4Kca2HkbkPik8i6BgReHYNkkqGoYyZ5i6zr7rHi6yQHoLqAF",
  "key17": "2s99zEec3YPURK6U1sPexra8bL5k7UPKG6UoPwEMLPqcCL2NjWFi8AsN5zbS6cixyXzVUuUbYUUC2GyVVGUMtAt8",
  "key18": "5hgT21TNJXUPXTcDXSUjYWrDys1Gq3bozFWNK9L6K1m28pXESftTpkpMf8Vncafn3CAMz1T5PF6hoVEeZpYvAdKL",
  "key19": "4ii9j4fBGfXiPPHCwquX469sPqYTTb1hrWPLxMSwtZByLUkVXUbgLdxeZ7ZUZXhsnSM8WkNcUK83q1hWzDqo9XpX",
  "key20": "9xUNbJYopnmUxj7FYijRq6AbdUY3XPq4iJsg8REcS5ufFCkPiSpgrcKW4hty8oQnq4W4NKKf9Dhr8Fnkx4j6SHX",
  "key21": "5jt3Z9gHNXu5U82Uz3mhPdErPAhRTSS2NfNDoiLFTh2ZYrjPwtminRaP1mw9tkkdem2vsfxLDBcFDY3iRYiU7mpb",
  "key22": "5Rjh6P7PLHFo2wMcnLCb3MDHvFsPtikHeiSwJsj95mYNSEdgEaWWLMvs6JeY9ocvirdicLuhWBV2ut2XdxKnik76",
  "key23": "5NcyWNjmbekE2xXNzHDwSbMXKavswahEbLodtYFBv4Luo49oNQLaZLziqVMiA4HdxBXYYbmAawNiRhJeFaWmaxEV",
  "key24": "4haDxXCGJykP1Ka49t3E6ZxmkTewLy2F8a4tJbNyj4sTb4bfxQy4WVcv3quhLXSobV5tDL8tcraLNymEa4MQquQR",
  "key25": "5FkK3kS81yZrBPbGBZFK4XKqbxYf19FVUKjvcEtNYK52HBn2G7MRyhWdptwpHNWVhcu1qxDvCABFQFVi2BQz5svb",
  "key26": "5xSpZna8GxKZbpisFd4vrUkBpcD8fj6sVQMHeNetn2bGK5Ja4XwkxNvuoLLzvSDuzuYRzQnoJmQM8Y49vDrfoDXe",
  "key27": "4Uej3AHSrF8gRcJdZnr4Seky7uePW1cdU1oRDP2Ax9kNpkXzxCb2hzZyUheBGVXMDZzFrKwGpqC4qkKUmSJdMnrZ",
  "key28": "YtLPi2wLAxSaE1bgd7QJgEFg7jEw2uUq4vfpKWT8VQYqSN4AspbLB9jMHvNckXft9TVwgGJdyEKyE2bazpSXeBa",
  "key29": "3EABAapGs61hZKM95CxCCJDHk3ht5R4MimY5jbS2WgTzgX4FCi5mMGroAc9VfFd1qQXGubd65aJB213UVKEy1Hdq",
  "key30": "4QnBzQohuTsxc5WLFruUETDWRHpUPvLLuxstuj2Kuu7UwxZkbbaSkBHjztpsDFfoCixKf1vPVVf8BMcBbNkMk5F4",
  "key31": "3C9oX9BiHWjQF8MrqeAAw46oT6Za4kVpGb4DDeLVKSJSdwdCZSD5NRzYzi83u1pbK2dZEiyCVK1C41eeXEdr8eWC",
  "key32": "3zt86iMBJ9PKUK2cthV63tYLYdbenTkYEhBMccMMaHj1xJnrmVFsrHybvLYH5hLxVEedcxN6BBhxzZkjbswdGcai",
  "key33": "ei2TQhsn6sfANsD4XNKYBLUJzXcQtdVm6DuYXo8JjR7UYj6eqGis9C6oWHFX1FvHDxawpqLhrG7chevESqeF2hx",
  "key34": "4ir5pHNXC9xmnravRvZkyw6k6uYnrFBLoM1fSm4Uj8SGtjp6t97Jxw9LKRt2Jpyb9JQ4f6aV6mXP3q6SKkmovru7",
  "key35": "4q1mdpFLEgnDs7gNyGoSAFMHsEberhzBUPmnXzeyoQWNAB7a1mCwnAkyZkGRW1P1y3MkHMd7GqNEaZtEqaYPofjE",
  "key36": "5b9TcKFLTaCk3tWpbbSrqrcYAmbgvKE1KJ8LfDrTzcWCqfXkDaDG9WoDHeNcjKpNpPnf8bFDLbmNzm1AbVNrfFs6",
  "key37": "29S6fh1VcTGpNatU6SUVmYu3pc9kqpCW7cmkNp1inXoaU1m5pzx6rUj9RAjEKroW1Ud6iH8MhvhVqXpp9PS3g3mZ",
  "key38": "kHMHL7QZYdfp2kUUQmYcENRXYBqZMr8Qi8eSQiyEqqVSU6SrAqyCcbLeiEJw21oZ1TXFLCpo3XsFCyhBhiPQuRg"
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
