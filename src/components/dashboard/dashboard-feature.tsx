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
    "89RCFAzKak7QnkFXaM4uVYoHSJofrjeXoStuYeQWxJDA1X933EAemLwRH2en99HuP7Ry4Vi7JgtbWMC1sS9F9pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32khRBMgTgrpmSha6khxnUXWfepvVF4dJMECdBU6upYddmkCSvKH2Cp95oERGvjXYD6xRjw1KSYg2nosFrfpWsfx",
  "key1": "483skBjT3SfEZiYEqV9khjbGv4mXGNCbKqwVrMK4VpuSt28bfYeCoWs3yXcfRVmX39vyc2QT7mxP3r5nAEXgRZJG",
  "key2": "3yi1J1R6F27j45ZJMLB39YDkgcWpNovrNrhY3TYMH3FmuYVQX8Qno7YEcMvExWM4xNZfryaXyT4SdA6odaNysE4v",
  "key3": "45gGK5t9Aa5CLFSwaMHVkGQgMNF5pUz5YYgXogonpGg2ie4o9yATpQAVBRMiaE2JkGMzE6oqXFoLkKvJEMuhXvVa",
  "key4": "43Tfe41YG3QRBd2vUbnWwecx7vCXQJUjdfBsGWRsJbNUYFXjh7FmojuhAKi9DKaW4BA2i1U8SXqfsxi6693McbkD",
  "key5": "4rn2y1FToH3QN49MAdyvux6EBzqb26Nvfujb2KWipnDavSQ7Jf4BUaGEsGSkqFaWBdPiUQmfeLoMR5u9B3EYdvhf",
  "key6": "34Rz68Dw9y24ZA3pNBGgX98oeMAi7nWoHbnrZuc7T8dUhT9jEAjkJG1CmB9tTQM2gfRr6fzqvH2yDAt3c5fWpj1g",
  "key7": "2TUTR1QYJsuKHWmThDyTGvTVqT3TzsQbJa6mJ1aBg49hAkTETuFpnEDJZ6Mkpgftwk6wdbqGDSiceZcVZRJ1v7FT",
  "key8": "8eu1uLB9N2K44KpzXQ84ZVk4xJtzmUSBmXePNH4UabsWUzeNi3n2RidjAQo6qvfTZgAaC68BBbJN1CGdVoeECBi",
  "key9": "44B6PDZyzwQEmWeT2PaqHt5nTeP6YduNF9BBtL9maohgn1Q1HTnCLAX3VHcSdKx3nU28R9RohG56SfzUkjxNUaeg",
  "key10": "9PzuZQ823FRhRMchDEjqdKHupZ7XD2woskkraBCkuuHCGQLKgmu5qVugkZFuLK1U6A9ZysqnqWPKigS3GJP6w9K",
  "key11": "5uyMA6ZRmKEKYiNKHr29SsgTMYVmwKMPUWKwdh8ieLSUcs5nfsZpoRAx7eeT5yRZ2DHLWiDZ2sMc5Gx4UKoHiJ46",
  "key12": "5BLSczPCb8vWfdL1KT2KrYsR7ym8WuQraMKStTwoSDeP3GvBEUjQyofVd2GMvYjdRfTZi2T5b8xNvt6odN9eLHgm",
  "key13": "4jrKYNgxz5RxSVcCh7nWyJrwhrsUF4fpYz6pwMYqmKCBGy146umK2TSvsSoVtvR4HWYbnfLb8yV9rAi1h6iZJuzH",
  "key14": "5ZAQdpLZvkF19M5BYPjfz5ybiZ68wGZQBw6ESbYbP52Pk153JXeHBUAdb2689AdJjUNcPCsYxDE1gSd6q5qzYy4Q",
  "key15": "5pEFjT2vhCVDBNRgwig3PtTL36SqGPZhBPjPvo4jo1mBB6PZw5AZBHo69e4aciE2ygBhodMpu6yg5vHQDEPSPUav",
  "key16": "3ebc8Fz8Ze8Sgy1yNQsJ2NWUeR7uMHi4hMut1rDdbbLepMWNvxWmhrqvYfKyBeDBqAeuc8iioG22xMwgi3VWyGLQ",
  "key17": "3qUCZqgu7YrsnGaQST72DCoxeSGS6S1MK7pRD4TTBhkkPVRgyMwuq5ugAk5MV9i9Xz8f49xVgGoxFw1N55YksDEy",
  "key18": "2TcuTPWvtPxReniY8T23FyUYKVfhGMCvNySUXBjLBhb4QAWMxTMUJ78eV3Hp8ETLPE1Fewv5oVpPASmbPAzpRjgy",
  "key19": "29R2jmFmKWU9y1nCzNjnuX3ocL48keGw66WY2NwMEff9FrJYSBvR9TnAQzAUGCamCY6CpU2y1ofJsjsc89wb3gbR",
  "key20": "39sTkMt3g2KDBAYqh2YK7EtaeDhF2x1nxgoCx6xgJ4c7hfSVTyhgXQu7GFjm6TYxeXGLEUQvNCjF5wmNXAV4nA9Q",
  "key21": "vaYK49YmErB7LP6nhgh6kcNDukUHwZ6QNYxX4jy7vATTW8U2y4mvdGRVr7TxdKxv8Fezp5kBbiw1UYvHgsqmdub",
  "key22": "4YxKtCFgVFk51jx64EJ2gXhnFhBbCtrE3pVaC8keCAA2SAfMJPQyufyZNebdr6GqV1Q5FHyBDqH9zQ6zc6aXcHK9",
  "key23": "tCrt7YQjfaurnaZVfw9n2WjoYYM1dBfbawYu5xXmqtwHhDcmPmGepGJR88M5vwTjGoTU46FKvD9r7L9SpUk39A1",
  "key24": "38veiYrciJBY7jWiuCMDejrxfMCXZGXKEHqjWAjBGXf9DQeqQMViYo5kvczU1x7SjV9nFR4wonemnuoZoFVeyQ5a",
  "key25": "3Q8UGKSibEJFcWfvmDZNabptFU7UURQosh8Fqxi87kMCwUpjVM7Zj3DumXoj3ZDRb2adpAGb2LLptbwqrfg3K9cB",
  "key26": "qQMHF8uPwmWMG1N3YLR1nRmz9cWQ8whmNnpRZCPR53HmJnNsFjVj1KQNWiosJJeSNcUcQSw9KiL7iAFdia3UJgX",
  "key27": "4LBu51geuHZnwyoauhmKCsTgbKAAuC2jW8xzTJ9GXt1yzZLZdv6ey1QmTWPekouNEmJWzrR9MhbUyGbydZDSbvZA",
  "key28": "38z7sKp5pbjdAi4zwNHstJ8gbqGgpyBvYzHHWj5xEcN7ZPPwHpUfjoiw4zV5YHq2VndVyQqZVrWEeMN5YuNtPXmK",
  "key29": "4geMoDVYVgRUbu5T5Zhf6Kksb1mb61PSvAoDrsQ1MFiia5psNYGcJaMo6ahMZbP5c521emXqhyMft2QNHcdFvvQH",
  "key30": "5FZP25koGMiGPneCUpCyJENL2fSJHdpUvPAAvJo9FYXNRaZFBqMyFXfTaYb12su98qMTJhfADUKzjVHQFX9BAymW",
  "key31": "2oA6WA3Kdr1c9LiegaLHmdz5LCJTYEdTcmktHocLpUxvbNwTB46YTJVJTmuc7zT6QhKKyLtr7AxrbDULse5BE2YY",
  "key32": "3LERfKb7ZnxAdySzeXwRjAEReJw2EqtnJ3qAiiS1gidCdcT7vcc5XAMC6tUqQydWBgXrcHSzyY8xBoHe5vnCvqJW",
  "key33": "tsuCMN8TiuJ5goNBWa9C2zDu8tC8iafSKcsskL9Z5GZFRPCWzk4sGv4zKcE2hXKDfC4sU6qcN7sgGLcD98Z6EtG",
  "key34": "5pVzv1NTpRA4es5Gxmhoigbnt1iqDmDmyFgsHjqatBEQbkpLw2RSWaok1B5E7HC1jqvD4dSbNHBpSo7okTjrinzD",
  "key35": "2hJbyeo2deDfe8RjnVJ8MFyQLvaaxHrfqicSm73yxoNazp8khcmLqVXQGdYRdPxSC2mVUnc6MW4FMqrJXtNFGpmJ",
  "key36": "5ddkHouC9v396Mn9kiuBfpX97NJUPogmswMkfBrk1pS8EfEdaXzs1ADzY968Wx5N2mxDmE1vUBpqgSo5BNcaVfYY",
  "key37": "5TVPEct8qrZ2WQ7G8virgu3PW6aNEUqS8zHeGgu9ov9bsia4NRnJ95Yvg8fKCie3qqo3RdsMLuLEsYVWoKMMX6db",
  "key38": "3Bgxyq8FBhSvL5Mrci4L54pJ7Em4PoRWPYgPuUL5NELXBpKG7BYBzyaY8ccohwpFL7JFaz3ZG63GEzujzTfh3dqv",
  "key39": "jZZnWUfCiQ7yDJ4SHsWdhVujojTzJyq4iQVSoRcu3e6puDfprLF9S3BcMBeFbMPmzQPJHwMc2BW34D52X9EzWaw",
  "key40": "VFUfdNbs7m5iuoLrGrg7XPNpbVW6WfV4U72Tcs719kWDk9urMENQKocenZ16C83sSf6iwZkekXHuzpPwkV8971Q",
  "key41": "3MpntRxAgCYNwTNVuGfoSinoea5mgoThpDCN5ntFruZg2cErWy3oiF9BxmfGXgFzcZEynyMZzPjAeV7tp64gFSPf"
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
