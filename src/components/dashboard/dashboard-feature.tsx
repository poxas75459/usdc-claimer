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
    "3Shrn1Mu9mpiyz8oJWQ3Ddg7XN6zsmceRVuESHGvHLyNqES3TonvrEw4Q9JhpJVVx2E7ijd71a4f2iXCb65rdzn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSQiKjq3PwpJ7mPoV6gNiEvU8rGYqm2ueZpd3KC3MEMnWiZXjDxY9G3d74BCgdyK2G7dzZCyo3dNiBwkBb17AzU",
  "key1": "2VRe3dBKBHk3dNLJ95AyQappLefVmjQ2Le9YQ7MejnswTujZXQDcwT12tF4aM3MASZbqbCwFrnTHKxUim7JFx5M4",
  "key2": "RKnoKDoPXSQowdpDjsUyscvBPn6AkKLuChLkocKK9NmB3GCPno9oPYwnboJ4kipMiC6hLpBH4hRWbaYo5GUg342",
  "key3": "5CfbKL2S96fCXzaJqZhwdk5zb2yQpK3tqjPsQT4vTzakz27fDxGmCsn2RPyn73SEuvRWsi8cCGLJdLcVtY54FRw3",
  "key4": "48S2Tbc4M1HdMQaChmv4T7nbC5cEa5EyPMiirPRVFNuoQDXXZnv4gBHUV1Fi4hAM988kxSpjvwpxkTDZ2hgZMxbs",
  "key5": "4MRgwezu4RAJnqksTN879AfNUuQLGJwTXXn6DZPk7UzYWedyY2UMguagMWCpu9BKZwL9CCuLhrfEuDYrLHWaXNiC",
  "key6": "3JboJJA3C37MXZcgGU4pnS1w4WTsth9k7PArZ2YxQ5GgoX2tpU2jfaKwWYHkRWxZDtQWC9YgWjKmmuwL71nwVTFx",
  "key7": "3NKU9KdEtjAhHmqSd9pymT3BNxdywYhNwkbpXwcNWoRUTFkyb8GLGFXt7UGTTpfNEnzPQhqdvmc4hqYbSD1JjTc3",
  "key8": "2k9C936foiYoK678GjHHeeN8cen2cmBNXqFyQWU7tHqzCezs4G3ayiYbc1NsvYpyiXvf5oYwFMUKpV4RGYUwzbRZ",
  "key9": "56BxxEDbv3V6FB1YizxrgbCcJX3jPiTuVZ1SG77ZKfmeV49VewPW4e7NyngJmYGwzNFnBYWFF5YzZbJ5YzoKrPwB",
  "key10": "XQJikkh58yf8eX95uq9tCJVytq1HbJ8Q473h4J6fc7f8xZGtZhbKyxCEMpEr5Zu89YJXEvgPiEGejT277E5kDKJ",
  "key11": "2NJL3c6diA19KjvpjexwxSnXyvi2hGMkt2jJkaHwsm7yZzXTT5rQfDVpiPd5V5YozSRCHh2wAeDkYm3515w8d5ZC",
  "key12": "5VuCfqMDqkeb95r1L69TSDkwwUW5uN4NWp3uspJa48gcGvERDU4HA7Bk6pV9TpeCf4tZB56SjAEv9LZ7njEqXCJ9",
  "key13": "2Bssr91zSu1revDa5zEzLN3vt3qToyYZJndof5dAVFF7Keb1Mdfqtiz6WvmtquGaaXFA3sn8fKirM1spVYuWQgue",
  "key14": "5HD5ChxWVDuF4D5WATAH5Lmy2t3ChfoCGMxwt2WDys7DgwTPQTpPFQkk8G7v2DpwuqbuQDjVhfG2t8BYcmETXT5B",
  "key15": "5XQSKuHhku445ijP7nyKMAv2H9XWkpqAVLzjxq3qy1TYC5XbBehPr7cXodMiejrkjncUFrq2dyUgWJ2vsBiF7iAd",
  "key16": "2pi1E5C5UJcLABeaadzGYFtJHkSZQcZU3Q4D7kM1Wbt1E3xRpu9GABNrQtBkfrXXRgndpmm8TEuopvoY1uicZoc7",
  "key17": "NFZej3yo2pyCdRFJCCHGusgxBfiR4JYBRKGhMiXYy98XWwEgfJNwvQL4GdAi97hHTst6EBazVVhAF5CXdSUdXbF",
  "key18": "3VFVwN7gk7MrQD4Kqciqpa2tA6tVgoGr45BqWb7vtnUjQiGH7GDedqd7ZxJMC1HFeNNVpbHSY4HC4AWdJnvMaT1r",
  "key19": "3TJ6VnCMcA6UvNjf6fgpYcaQdpQuUiq4Eo3KNHVfxKCnF4W8MaHgqpYoNwMP9X83wWUVA68w83zMfkzpKgKtargX",
  "key20": "5mBVahC6t7AnRcs2an9CcurNDbk2kJL9pVGiRSve3N9k4uHoRnjFPCyAbQjujLL95f265zdqeZATHtq1vtQePfMP",
  "key21": "pokMMvnrDQkrEdymy1dbAPwcK4kyx9p786NDN7GoErdZHCoLhhZL6ZZN3xghhSxUZMNXWTChnGvZRiBSXbX8GGG",
  "key22": "DY5L9u4tuAyDuRU7dygbnAe4f9HQ2MXmujPSkCrAy7LmtGfR2J628pVkpNoVVcLNyY8s341ioi8T8hRZu7zNjbx",
  "key23": "2MX9RPekzoNBi3y2gxBKwzm8Xmy38QJwDuRTAE258TrEdKyRtLjTErvH9o4fJHJfjrbhsgCg5jv53vaqzD34GtpV",
  "key24": "52tiK5bdiZH9QhmvQ2etxtkgcNz2eEDXEP2uJemsESpVHNByDjhP1ahatjQaTYCqHZh7dQ5f89bkxNCx9waYBLRC",
  "key25": "2V41QrnpM2mgs1eJJQUXomm1fsByRewBuYtdSZuvJopZCg1sk2sxSWC4S9X7bLx2AjjukPkk3ZxxiVVgTShowfQW",
  "key26": "3TEyP6VqvRUrmDzSqo7twrJVYPmqMp2UNUq674qZw8vSiSDb7Lb5Q2ybCAjs3kNpDVhqRqkj1nsHUPSDexBLiB7H",
  "key27": "2kbFNoPHc7CrGTLCft1bnQEM5a1jsm48XRZTgkQw711uHEYUX9tPKrCVX8yFa6uu94KaiDq7DdB4t7GUMe8DVGyz",
  "key28": "547EyWbg3vcZJeZCP11QuxpUAweN8ZuhSXcqWYqpW4ztPpqF4s3LeEjjPC36nERF6qTGWj9EDnR98AQG8H4QPMsk",
  "key29": "45nBqm6mqqHa9z7bnwJoV6r5rdB4jgpbTCFNi9qBzJhDLqbgcGKKBy8ghTUGviDyVjLmvXKRUzZnRizHBnSLJoJR",
  "key30": "NvrYJhU2AnywDnM4ozVHJSWEMjtPXYp9WQaH2v7pmL7dsuZYoXuFu6P8UHN7LFXYJgy5EqUVECZVPUJG4eNjbLP",
  "key31": "5vFmgdmzLYLqQ6mZNLhGqxvyAtryaC3bW1Jiy1o6d8qacrhrvku2hPsmoyT7yZewSVPoHKnEK1am4HC16wboifBT",
  "key32": "2dVzrjSDEmLjstjFjXPkoye7D6fRZ6Xvfkzmg9eNHnWnY2sr7ynaKVPEtckeWSDNzaMp5HjvK63eHRPhyobfm8N",
  "key33": "2rBNLBgAZreBNgRXGroW9bypaQDJ7PCzu4G7cGyDzAvxeS3MiT5qDRTU9VF7n8S4FQfiYaSPvTRtdhyfquXg32YH",
  "key34": "5VAkBjGsYSXTL7RrAFQZUj7Xnxo3PGhuHMWv47wh5caUhJi4yzmoE8eKfzCofu6ntAw4NrHioVMjJ2KGm8sdXvE4",
  "key35": "4ETuB2divnj6UF5baS7UtPVC9J29VUonVsBQhi6Zn4uCpdtQseHPKHXQ4PJptivHGzkGusqoewuy2EdEMwvMp3Xu",
  "key36": "338LyuCJ8Gq2CGDvXMgAX5sMnSt4TBposE36qZBf2aauBn24rbTiNF1i725C8zhdADybu7vxZXT5vk6N6LfhQcSV",
  "key37": "2HUAxeZuHqVEfgzkjADC77a26ovQdsu1yEReFDMBhyk8zWaLs5pqw222wGJFw9RYKH7Byn1NwNZmT5yjifnhXPui",
  "key38": "3HJdxrrffLVmYjD1okJMzp2RRdC3yu4UmazcR2n5gcTkm9BG1HVFa81h4mawPahTThVkd9PvcwDFSek1J8iS5754"
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
