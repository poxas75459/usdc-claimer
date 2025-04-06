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
    "irsT8uzL9Buop9eNomrzDVMWA6QYwtvFfmZz2k7dhYrSTWaRxvsAjZpCr9obgNJhTKxqocJ95bzuwyyiNRtPntd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mraybLKnG6QNiLwvEespD8mFPErnYCedatc4ueH7Uwp9MHku3PTgqoCaUfAAFENXeACzRAZbU3L69owbaUVFpoR",
  "key1": "4Pz5A3CMsr9LFbX87UZLFdTassBYuQCjbgNMXdWjFFV2KAA3hYPQiPetizqxniLcpfHBe13dZABWCnocE4KchT7S",
  "key2": "k8SmrKu7gDaAXmjPZtRRtLCxrppSUVmbnoow7weCux1c8CUvfMp4ctoDrgKLgafuSj9ZzVmmhYf8iBVDsEzHYsB",
  "key3": "5QxJjobMKRWAPERougT9nDvBAQK5YoQScnuBPFSq186Vzn9TpoT5MLnw3FDJzt5BHgSYwdM8pKSCNiWC1jdmA5D9",
  "key4": "2qYt8zknY4jV5JNwFaMZfhfqGKT5oK32FKGX4UPMd5a7Rf4qwPhoHSMjmvbgDaH9Gt93NA48N9pyKmpYwhBRDWq3",
  "key5": "SnE9N2V9miTfPSx72oG4kDb8eZgc95TBdgFKpade1sMr111fD1SGE9Lcc33hJybuDHXpPEXVCsHcWEWt9JqudP6",
  "key6": "3rhf7EBN7MzaeJQ6HZiKhQzWVXHe5q5kvdaeY2XGb4eanRH8wxGSiCNiVn31TKkmGC3kXF5mvcj5tbby2UzMyDi3",
  "key7": "Pc3oTzvwbRD2jMUCEsCZqfgXP6WbWBRYsGEQudqEk1jwzFhuq3xBgNkptBR9BtP5zY9WScu2YcjVtgCsbcWYcym",
  "key8": "2THE5o2wT3yebucz5AQCj6ZR7qgNEkyemhJfZyNjkRY1CFdAE4t3zYmpNZCqxU58fWMhRvz9Qkjhpm5FuzxhKy2J",
  "key9": "3zbamnSDCmryyNA9eCiZEfVxBa3mTaGWPy4vpMk6WDyfKuaTg7y3d5Wnb3DJQt7pcUD5DR6KhtSAGfuetsvCgZi3",
  "key10": "3MPHqVVLUWQ9WhxhCs2vVoNMkB3sm5ur5H3tEhC8sfeLRqyfao8zuqauFsXD9uCtchZMTKzKBGkoKhGRwfqMspwr",
  "key11": "3PproCha3wqEnEbs3Q9UvdRJxHiTUQCtLUT2GCyG7UMEXA75h4kax4qdEuiy7YbDRDjraHDuw6yFRQUdqsPNfrGw",
  "key12": "5ED6hegvwa7zyM4GR9zj8jTzURv3ZG6uw5oJtdvXYuj4KQWyVW9XeSt6FxZS6pG77jJUuBbKLJfxFjtCYTA6yhTj",
  "key13": "2eZoRs9vMNkqE5otQiA9ydhFqRnb4MpEzHL4XcvBpcshGiQfRwFuLs4RHLzJrHxySUARp2Yd2qGeK9TZ3zu3BNJK",
  "key14": "2Jrt6wNxaihpKSWZHvPwgNNABJVswfpFo8CQrD9zVphbyDY3dTmugb4gzsGhytuRv2wPqTNFc3cpFxyc1NT6QdyL",
  "key15": "22yTTBoxpBgCFBN8eaeVMwCaHVmJi1ymAVofdoQYcdrhRU2HjP1zipRPmfrftHJHfqcW6SwKwyVwW9f7xMy3rcm7",
  "key16": "3Z7c3jW4aA2FaeaJCrBkuaXDMaK9zkxGkC9Wcykk8ztqfioRfE83LLBLT9tMdX2K2j2mVMkVAEpnEprebRtdR8LF",
  "key17": "5fvaUGzUbJJNu1hQXVMnmQhetUtCKtkbLPTT8jiCxHcWhojfBNN5drBMUh87XeTeh7XCuniCFxMMW8W5qa1VYTyr",
  "key18": "4ZcuYtch3bo4q8RHsGthKwQ27wcU2MSH1B1Vv4LkQcEsgcWPc46vSTpevAARy5jaWFsPRpkLuCpsdKMJTFyYZuLq",
  "key19": "46Vemd6fQMbRhygZDkbeB3kMWtU7pKC4ZEJypud2CApkFs2KfjLcgJexY5KaGG5BZadd6oBWViDW9Wh3XD7TYV2c",
  "key20": "5kQm1Hqpeh5wtKeFyNvHJbax4PzLgGzWHfUnijpbpC6b5VqrUhZSp5SpKudhBYggYWxzhKUo4SQYinZ9Bkx6NU1i",
  "key21": "2UsQzFeQR6HhBEUW9Y6jDCnCQEcaGJQLmztp881BHbdxzw4z34YxaTXufqmQAg5FVCNe9PUZwtJyiYQbtWkSsst8",
  "key22": "23xo8ryC6arb61RaLaMeijYyj1Hi8ve5k6sUMNFbqdFLcZ1ySsSoexjMQiK5Bgg5xnh7YA9m5pNNT77PLbrarhnZ",
  "key23": "3s1avWSXiRHESAwi6cSb8F9neEvvNMHQm5GBsft8L78rBFnz8u6isxEtaXzUngZHratWiuhQVHpkBUqtD6bbQuwS",
  "key24": "4WYDEg8nQr8YDMsU6mPYDSxNChX1H6kP4o3nXjQS7Fg3Pr6RSn5Xz9XeoLTTvXshezxP2XwgaMXdLc4qZq4P4gGs",
  "key25": "3bd1tCvsqbotZWyjEP6rmYGgwQgKCHRrud9iGqfaiWoUih9UkZ5uXzmPJLkN4VbGL2BPeHuDcjZsEQ6GMqdWuoep",
  "key26": "4kjgiCThkqEhEZUucsR9BBN9coWFBCw6xmYYJrnbfu3ECSmHdPKffJvAbTLY1SwmvC8hC48agSWKbTjEcoPYHArB",
  "key27": "3rRd9SiqWjcNE5hXs1i8xrfgBp1phxrzJc6h63WhvFyz9qrgsPc1YTQA4rMfHw911u8NxKexsQFNNL1J8zDsuNYm",
  "key28": "61pbJakLrfVQu3o8bwkLmEzeW4TUTzcLkQPb4tkmY4DfHokau5Ze5tsJp1RCtzLTU6ivygXDbqxeknUJ82YoKxo1",
  "key29": "47BixBdrVQSHrssTXv6FJAiYqh5jj1sntf8gwCBm95vM9JVQkD4ji8JMHDHMMRyBHKP3EuF8DyFivEs5qnQQTqEL",
  "key30": "4g1XQjYLrFEeLvy5vsFcwYxkkBfCz6hmb53wTGR7fJdpQvxYVUvBtRjshdV2hQWYevJJcPEy6n18611mfYAurT99",
  "key31": "5G1H9qxjp9NxV5io9wTXExmHGC9psBUgvLHuHP6Xg2eYtVF4cmqFearqMz2XFMcmGQiM7X2s7xnXdPAEfz7TrHgR",
  "key32": "37muWN5p1mAuBZLkLm1neCmxr1uVXVyt4ZfV1Nuz2Jab5LTnB7gFZCoLzgRnKotPtLXS9TcoVmYwDo14oC8tLRrg",
  "key33": "h63bZgFwF7YuBJY8AEKYCj3ydo3kaoKrTrF8SYmpA7gh2xHx2JhhhLx25sHz2SYYYtVTutpeV4Qdj742Xzztppt",
  "key34": "5Gkz49tWBBzniPM42H1kFkos3FWv7qeAp1n9vEtttgnhqyPM28tk7DJRU5dGuaRAGwskB3kMPttWupcfCcLT63fr",
  "key35": "412CJQZDhJMmGEb4hyK8hhq5y2aoenj8BiTEDJDpHuAQcQ24hzBanAwakuF14DQEcB7BW4kTQbUSCKYnveDo4ASF",
  "key36": "6628j99hV8dGwmr6YgC11Dk1pbpfmSAQBo2y2BefJPXedaxkVVBhn4iykdVjxU2dhJnNTse4xCrEfpKWkUhvrYXx",
  "key37": "vNLqZHZYpuHURYe769aReE21mE71MVpwNBSJPbnqYQP62Ei4csYk227RtH355Ym5KMTYfMDUvrZDm8BuYov6dBp",
  "key38": "3VGNvdpGPNsvBFdg1v1ekvmeatiuP43RNaCgzig7j61Zf2aT7DwVqWg4EW7yQLMn3tSc73h2NXe2UHtKcLH9uoEF",
  "key39": "aM5rRxRd9foRMT9h4vWTMSbYViSaVWv9t36P8ZfdbSsEzXxo8SaeYmQFBe7yqWa2SqXPWXcJpDiQpPC9wTFaffT",
  "key40": "2MmSAWQeUdYYBNvXusXXeyBFb3i77GmikHAZNAmwH49eJiA5nDtJGEnkUA7FENNF9MVxsGwJ96zUTi2ox7gpBy5b",
  "key41": "3rmHex15Z38H9VWjs2XeXvbZY3vjCo1k9QiTn8MvA9WEtaUDTRiUeAv9woVxRCeVQLLUqszYcu5e9XVcThTuTh3L",
  "key42": "5j34kiZWmVNsgp6guGrpGJxXqoMHQ9ChhQCg2Kufa4EUBRXMXauJAW8iRquRWaPAMCnb7r9uWtMbWYcnbSp77fnC"
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
