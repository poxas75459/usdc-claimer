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
    "4HkbNR6C1bF9e1j8Lq7WuVAzetJzaUrF9cgY3Mnk9rqYo1oYytPddtZQVkR14cD3UBicYC5s5pRSmKv4FMykLZqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iM5VdRKe3WXmHjq2N6h9aya5qovGhne2HmB8VhePZr4eJefRdZoMLGjMHspVVhVNCkwoNgZZWRovziHvX7YKV7G",
  "key1": "QEB2GntRK5dqRQuwsKBvDHqAA8wYANJcfqrRUGawrP5dgeJhTs9R34qLRkZyAVmKVpdc3mrBEFWSL6vD1CfqS6c",
  "key2": "5dGxtWv96KyxDnAQqKWYQfrHoGsZkfbzeMAVFusPLsmPL4x319batGzVRbvdwpZTVrnmQNGo2VQrKKbfiUHenHkk",
  "key3": "5iPevwbeWXek66gHggbYHwZYRiVGFze1vTaHGdGWgdiJywFGu8WHzgu7TugpY5ejeDirKbeLSZRkq7DmMeS4D1bc",
  "key4": "4iswvZ2vqV9eXLtxMuh8dxCmJiuw5CEVcPXEewVv3HHUtV9859mmQjZ9RbsdEfHbAL8sSdHwshTQHPFnE3zSMkxE",
  "key5": "355q134LJLbZtu3vvdLzD2gis5GjVBiMoi5wVuNbMpWPEXg245x8Fuj6kKCx4FiyoNGU74rBmJ5Ffk3x4fhd7pDk",
  "key6": "4a81riH3kBTHc1ZGcEynZtAkKiYv9mxbGLcnv7WZgePQmUyarWD6aeCAUX4Z7fSS3tgNTQCr2R2aHKN5u4g736C5",
  "key7": "Uuj5kRnP5KkAfWWctFyWHQvQKiifeVJfr18A1jbbeHockgwKFa6cSdsV7SuCo6SbnX8Mumb5aK4Gp1C2u7DoiiR",
  "key8": "3bgVoB5RT5CwHfTjqkrcA242rhBu35xU6Z4As9uHKjz9GEQ18j4LvgiRC5RqZHW8H79jw8WeVRVXtc7YzF5hBWSG",
  "key9": "4SMXLin1ft9ZeQWXk7h3PhhzaWP3KkFLF8Cs5ePdSRiJJUweAxYuuEsnHe3duRsphuJrZaNGxJWURSUDLdmFYGpG",
  "key10": "34AdMsn2egbn2ETSVu8x4JPW3BRivNC61CkVzrbUDvGDi9tL6Wt9mrN5eKKa7vZ663pidWMz8TNs15U1niMc7KfT",
  "key11": "4qz73GtsBYQzNKsPBPcY4Ce1CpWwfRPsK6wz9vG62Vc5WUVDD77Vm8puN7CpenFHRrLFPjJCMGXPjLhXDLjz4Bd2",
  "key12": "4UjLUBy9YhfuyCkN2ksmJvty5td2GBbdxD7ZkDLCVtJtGYthJoA8MaS7fZY32NMgeWyMJjYCaVYtDattM9oMYXWZ",
  "key13": "3Y2f3Yv12sNg5d5LYo3HM35QJyxzLk5B8T8Qk4wL1uMSEGYfE82uxXURZRv6johtrsEe8n6aiPbzaxs884QEaxYU",
  "key14": "3VxgXq4tvnmdFFjJVZgd3jzpRUBbjdh9qkzadJ8jCPPvGAiLKLYpV3oxWvSDQHEST2BgU6M5xnVRzGcKSyywDWhP",
  "key15": "3X23ME7cEzrzzHLA3ALVnc7X2bJdWhMqqX1d8TNxGceVJLwunYuFHiSgs7SxHRY1cAByHBZci5BNHyC6DzWQpoxs",
  "key16": "2Cq5ogemvb8unGKKND94fTKQLzCyXNnw96Q364UEgdXT9S6RKNytc59J6Z4GmNhRdJXxH4mPUneCuh4JTFp5u3CN",
  "key17": "4nWoszMwop4GDo9yxEBwbg1fEdiKr7eydZ5arQ5dju1Xo6hqNBZf2jZwskBSqmYJCuzNWoH1oqChMUC4nsACYQHm",
  "key18": "2gdA39eqnKpFE7Z8RwZsDy6ZMZhVurJbVbGvZQpy8sQnUYF7kviMyXyoyedvMMtd771fGYp998cEjzQwQY4hAaJa",
  "key19": "2Wtx5gxEugH7tigZ1kFqrvR7CoHJW548FbYCQJGGUnxH2Ns13aRNtTbaMm5FauhE6XuTRXycghqNjBRPEysMQ5wA",
  "key20": "2b3NvADLqNYpWJscMqNgt7Uc5RAVBtjuhq7W7MTuxrTknp8yzFHBAW6EJtDGf47sNRuc3jJa1odQ78f2KBHzHg27",
  "key21": "43fWbr9NGRKbedidGGn8dpxpiQkU8ooEQiqfbXmUu8ZJgJ6qyRj3iBWKwBRSqDM87eWHerRN1hbWomxAV5YADiLz",
  "key22": "qAsXNf98yz2MXpdXGs3PJTP8uA2eS27oPNmPK2nyh4X5xdy7wLBzyKZpEesntd7gawrToeBur22SKtr4PiDimDK",
  "key23": "5bAwXV5zN987EHxVi5R3j2TMmVB2Zt3c6y74aQ8XcA7X3wpVSJLePdm34DGjYatUHGaSHbAji8wEwjZEyfDb7KQa",
  "key24": "e2Nzp16puihUYXSyTbDMeg7378PpTzMYK6qAh9VyKV9BRwPzDvLU7wd1UxEF67sPd9ExrEt4wEFxw68TgpunU8F",
  "key25": "2hL4VHkVhfnoSQ1rSGfbP6LagizKfp83kSUTnuNzADV7ViHRaXnJDmMKYCaBd2jh3SRzTr9EVpLnWU9ii87T1cxN",
  "key26": "2GnRYZUng3HvoxjweaVHXLZbm3xv7zoM17cqx9geDbNvmafvF7HBzBXzNVi2BJ7UBhD7f1A4u7BLtsvUEGo9RPDo",
  "key27": "3cjF39oVgQJQzBdPamLHueRXqcjpRR8Ke35Gbe4REoADLNuNgKLBP5oVWPv4hp3kHAkrVqo7y2z4aN4r7x5TxefT",
  "key28": "3WCxEvzk4ceB9gjzrTvSBBweNmTFZqaqsFUjmsNLENb9oU7o1WNXaonUkXzBWEBhcVULY5xB3cTBPn1cxoYPs4y5",
  "key29": "noNxb39YYWi8vXotZjnfbEALagtAFhzLPppCxLhQpSisR3KhzR6xMEfKDBDoRpVwqDyw5Vg73eMJS7EzpNSjMko",
  "key30": "2fL5upLJQ44d7B7sioGraAEbgtuGoyUYUgzmKRTys1BpsiyYzwFgFstEJySzrSFpPLRABZkNZTFGU8RdG4UpD5zD",
  "key31": "3bxNuv541AnPXcd2cBNkJKUQ9PG6wLuVxsfgK3z7qmGh7k41z4aaPFHBvCSyUBs6qZQcRcUrCKQQSgJqDLRWyG2n",
  "key32": "4LcXWxC6LNRFGmGU8exQCysX9NW6V3jirePqAjydKcNLbct8pTKjryzX2E6HPg93FvXgMouiuiK7TbocwagiH62x",
  "key33": "3QXXX7NK4KfR3RZT2ZN65G35fm62Mfw8vFFLdJBSUvS92JRCmEvebng8cJBj6UD95TQYHDWYfuc9E8etLZjJ1pbi",
  "key34": "4LGda5zmV3yztyH62StCuxio1uuPyxZ7YhAwtjjrqqjEaVtQABUSo4pT92tnWdsH1ZdzPCiuvacdnfrVV4KqmQ6A",
  "key35": "2BnMtx2rjsz1N4Lac7t69aWG7Sdmz3xaNZgDa2GSbUDZyxBUXWpBwfsTFUeMyWfE8cVjZjhauJ9JxuhKhQtvAyA3",
  "key36": "WQxwBF924yd5cmiojbc3EmAJ37cR2QYkSgp1Q9v1V638pVyxHMoLbzeqwzZ5cLWWQMjjTFFCNhVUtkmLawZdskT",
  "key37": "5B6d59hwr3FwzA1MFqnDyGieTiCQJ4mDKvGY7hgpay8yuYcRtqb1f6qL8JHnUd4VGCds5CrzzSDjtP3LPE6tCyLk",
  "key38": "55NVEMyeEneiX8VQy3Yj472YuRT38RG793LHTjG2t9jZUko14BQ6Tia8ExU6tpbaUgzK9zFBmG4Ge1Z4BJvGvwgw",
  "key39": "2gNcZxbou6JvBA1jerdx2zpxdFgkG2qxk2SX3r4skFi437163rXjLa7cX6huNnXbSX3BPSJxR4DFNUZWtCSBuLwx",
  "key40": "4bTyULjT3Tnm7NFhAs9cqk5F8uKXAueJn2edaNEoxkmyA8FrPTEVoCvyq2FZ5UXiodsSwdVDPzMb9oF9J2WBo6NY",
  "key41": "2rGbNaWyTEph2A4AbBTu2FdbUjkghKYBocTQWEcJmtrTqZYAW7owAYRyAmfwGnyqE8p9NWwoF3kyEzkZt846UyYi",
  "key42": "2p4wP5FfipEKHk4tfwzDYsXzoU82HAqysNTeEBXDwJUW3kLBpVQTXCu2KxBKYgsPEEsHnnVbPQ5K5YRhT5ArLTBF",
  "key43": "66uAZFz4pwk5nThc6T1HMDAR9xBNRgYbEuxje45XPPRzCBht1c3rsx37VMXqkCgDLGXz8mjRWb5LUnkqZnELN9tv",
  "key44": "22AjdH1HH4wpkU1k2dnC4Ve5PNuU1SvmVGvVuawc3rw9quRSwagB1cQfwJ1Lk7TV8Kfqb9Twzn8C1XfQ2fLyuWaL"
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
