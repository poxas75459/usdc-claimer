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
    "51s1fghHu89hyw9wZzqRwo6ARXxQabArxdufePLjxYXrCQ5oh3PgB7GZoL7ZL19bNN1YH1rdwBWYrg3gyDqFb8ic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eYUoi54uZMZ2n6Y8oVoGeWv5PYhtZzDNbeD9pwSTXUamdPFLnqG9T8wF6AmpHQDxGwV39zanuccYuuJttibUGcc",
  "key1": "4GipvpmnQXDmYcksJz5D6Jao9uGDC45Aksd8pD2Y4VWjragGJabMrHDAPCo76NAK4VAmvdQQnx77sdUZFgcPxLK2",
  "key2": "2EZ2DB1S1voMhtSwJ7JRX9CnJshtPE41DTCkv5xdtMKYbu2Twv3p4YuHFMycio74SuqshbtQ9fSpjGm5xAZ4E9xS",
  "key3": "2GocDA1FnwU8pkKrqz4KknUJ85LebniatRF47ZbWkb6xxQq1xmbHtdKdF9rhSFag1R8Fhkn7X9yWBf1VuFsSkfkk",
  "key4": "LAGLgqMM7MfDDpxcgBdckSgtRrCR2yiXJJV3NVurtvy4WCppbWM7w67EeMvLvAWjPrMaBJ4tQ4BexydapVZgjA6",
  "key5": "49U9K82rL8tQP7fbgMCkfvoExjKW2fqEy6EhTrsWujHXDr4s8qygsDZPCLjYE3Uj9TodqXfqpcq3TZTLJ4PmPwir",
  "key6": "62vSDN6kzCMCZWMJcfma5RCb1c5hcE5MXw4Ht2Wseu2iZrNkSJJFcAXjVtpBCtPd1aEmsRKhd6HE76jE2jgLmZJg",
  "key7": "3NHtrZPpMPwcmGHtrAoL8p8GfzhQ9oXhzpazV7zQMqYeBtkyKqrbydUMtxoQJPfHXFWGUyeCaZEBewNfrhYpLWAH",
  "key8": "gC3EPaZe6iJCtfvq7CVBbq42FuQoJ7MWwizr7XwSCQJrhtqNxtfq95V5P1PhMDEMX6ttrsn4UmEgM4DKCJysgWt",
  "key9": "5kNBGbpcmcPb1NY9aH42SKZZWAEquikzkudUmPtCB1gnX65UpFC87zdE2tRgAwtPvgopg7xfXLSE435c3ergX6bv",
  "key10": "4mz7jUngkPBVryJcacocdVnv25UR1zvRLqy5FCfjaq9736e5Tes2BWP8obuRq17Fjd2EkEWKDDd7UwMAecQti22X",
  "key11": "dSbTPdCab84zuJtaRWh8NGsZrdjfwUsuSqCmPpB97t3LVM9QLGWpoT6Tm11e7FodoHwgtrLXpBT72Q1LNkjPs9a",
  "key12": "4DxkZXPziCqENZEFwPwDTnk4puFtX3N7EcJU6SiV424XzjuucUsjdrm8QCRUr8hGQpW9TFQggCDcqJmGqKxkFwyz",
  "key13": "4df1DhDYSbM91jNvwdreFUDbVM3vnRdT3bM51TuJrziFp8AhVCbhvNNc4EUp5Yh2cU9KhGtwUjN2FTHqiS2VvHez",
  "key14": "64xBFZjTm3CYax8HQcmBrsUtrhabXVCPopGLVGpLskks5kuCNyhNcteJcVLibyZsLXgF7ABQgZcLwD9nD7theF4D",
  "key15": "4te47f9kYEEekHEJmzadd8wCvFWmxLGsjt69FGCYie2Dg97mcAxGzz7R8cb3cvAxd8DEJ6qE9TZii7BF5kBuoRkq",
  "key16": "3TXkXMYegWL3WBEk6GBM5L5UYtJMM5eGdcp9M1uhKoUGKBMHho39QqTpuDJL1qjh1tCTctNJEYfRmJ3SVNgmytiw",
  "key17": "4WMTHMUQFdwB32heBH8fBHyjdowLNfZeM7Z3QMoy9HD5ZCQ1qBX821P2DptbhNFY2Yx1SMCxboAkhcB55trdraGR",
  "key18": "4uyGHpiGjPXUNf35jcFm2urzbUS9azkmsbaUw7rsKkyQw73yEhSrDKsjwE4baRNJqN99QHU7ZK45BkXGYR7sbwQp",
  "key19": "v5EGJBaUSgcNjYxrJmhQV81Na5tPcxdSyC8sjXDuGKP3JvfZwjebwc2DVbCCo1dRy9jjF7zzneT4fw7matnf8hJ",
  "key20": "JcupidhgeXp1E1K8DkYKvHUWrDsQTXaM5BVc92Ju3fs9V4cGHiyuTiriAwDveqz7xUKJhiZ3waEKX1Pudtu5oPP",
  "key21": "LLbsTBJ7Pdd1EQRCEdBUDDNUbmRsGWsbYkNkgVKiuQ5eZzvqkrk1BsZiiYBip31nBnfVp4hRht3NVRrjqduUv8f",
  "key22": "21xSB6LWCt3UYxKdPFCATAPLnyvcEWvW6YbBS94zxfw9C9tjrXySm57KRrf5NVfLaWJbrgYMFAVaHZRBVqSM3MEh",
  "key23": "639zaXfkkJSEqW4SJA1ve23FQESresJfdtzZUuVJ22phVpmEJKXqMAqeohUcw1chdsRrf6b9TBs564wJFF8b5h4X",
  "key24": "3cEoNp4UJzP1R5G9SKwaj3JGxjW8N6Vk6Ga1p2MJHqunXvBynVzSnV6b1TTJNgSqGicJkmbauR4yuspr7x5Q35cf",
  "key25": "36EUkzNVDsqbFm3hxpeSW2kP8sYiiRmwJ2KjHLwjg63oqoNWWPkAHL5c8wjArgTM3uP72gHMMiTYciXVoUtk1q9q",
  "key26": "21tfLucxLNyqAXLkeDmPs3pEDrqqK2yAAoALQua4P66nTeYiLxXvTWeyxQf9KxdpZNi3V79kLjUZtCTcGsjvk8Sp",
  "key27": "66VydJT8PRoNVKYWStU8NqFXDzmxkjq1WcmVZPb3WGUTWYRPF82rgSzncgjBj524FcBPwUXSBhLyJmseeTejn6G5",
  "key28": "2UJLq2sAZNjFJ4Q12yhjyajZZmoZVLimtSKCSLNk3ApUMTR4cjZ4vocNyk3wCpE7A1AARrH8utcbb7WNPNvVwnyF",
  "key29": "4goevP4WU6yCbM7mZhLkQfysvYFpPSepwCvc41xNVKnwm9HtitADhJkHXKKBA9VzDi35gTemLKCuHZKthT8Gfq4Z",
  "key30": "4esJ286ppb2LQyLKvMopgS4xv2jTj2kct3Zg7X2bJekAn6MjsPHYXxuyADARSwkZgR4627NNckBPPgcfcRvN45pv",
  "key31": "3zVQygR6EE3fQrE1wA18KeihAj2SNrMNuY759s76y9RU8iagL41bmdqXeUwcAEXCBgxjmWAq9whjjj9g46soLCyF",
  "key32": "3TazJZ8X7qvsGhG8tMvz5kK7G4x8o9jN2ukp7m9H6SDeLCBdCkyGMWoSPzKRzLLsu5AjeaFsh9wUjAadASxQ4dfC",
  "key33": "4QravhfHFLwAJa5B15nJnz7hJuVCEzfNgZ69e2LrvVkGE5zmBmnuqUwFqMRvYwH48eF6b7Tm1G8NxdvYUGAQxRXz",
  "key34": "yFZuduoJbF9NoL5pzPrPgBEMS8jji7hMNjXg7YknvVVKYGATkWh2av5Fkp1PQ9o36HJTepmVkcQnG5G2n2VtfZz",
  "key35": "4Z5gaB8yngoTVR4tAsMc3wKvRyHfRfHSUhoMBC9ebo8aNi2vo4oTZA6SaYY6iDqwGAVVtkRCUYEYK44cLbN2Sd2E",
  "key36": "34Lbt9WZ1qGyMCXvvDzgv1tvzupdfRRRY419k1okTZSFpyN9pmQLh5HBFRq6xcBU4i1m3LxispTY69xDzaQJtbrR",
  "key37": "y7Eh1sb87T1C1DPqFsJaRybsFX5Zw5DZvcHZUQDxSExTdC6zN3Y9ZaoVu4Gabu9tG7qV82vURkHAWPzXXMASB5E",
  "key38": "4AdZ84unQLm4ayBkBz6pWwaFLsHdMWK2wentef7ktRsWuHQViGXV9Ag72GJzxaFnrvxCyFVbTNsrjJ4iw32wDJwz",
  "key39": "4RcF1mWbX7rfK2HK7XxztHSCb6KmLmnS5EtzzD3SJTSh1vnbo7A45NfGT5diMfjY1aYipLDgbDF4QZSTQenoUKjS",
  "key40": "4tLTwui3PmEyxrfENbszzsgmWP55QFu2yNtKjfq2B4Mg4SobvsjH1UHXHgjUYoTgsvB3xzjdHxpmcSw9uNNjHk96"
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
