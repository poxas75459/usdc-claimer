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
    "3S57ZGDDPJDCQ4kBcrg6npCzm8xegnamWJPojz4jZAX3o8mK8eMfuYqvbjq4gbk1u6C2aTzeuPCc2wBV9ee9Y1m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dYfcdd17BKqZoNBjFixw23fpZNDob7osTJa9V4WhhVZLUXMffYYJGYAkafQLAbZ65rkacwVYqUqbixkDzBUnupP",
  "key1": "ax3aKkQF2tJ2C4xua1RX2PL7WS94uEUYdT5bjDBZHtZReCuUXg1HHP3JpX637UduifXGW8Y1uoYCz72oAHagQS1",
  "key2": "3LEabS6AYtUV8HV88M2dUoGaZf8SECK8PJGnQW77w3bsQx12V1VepVBbDGV6xSwejapXzA8ZMLHZUfnZ6fNGJiaY",
  "key3": "4cUQWMTCM1Fra478uG3p6PT31GWbvk1cSxfs7HsGS3x1G2syXhQN9493BkPDu3rkRgCi3BcnYy6MoaFsg45gGhep",
  "key4": "G8NCxBH8jFDYUXiz9ZhsbM13kmu4rRj4eJWosV7Hfa5kmeVeDNHZ87WAJSh6ch1jXAH46RZ2iu3G9L9sd5CzjKR",
  "key5": "BgAsT2YEGdXay1fxYUzUiyjZVeoGkg4Ejhz1fs4bzVVjZsMHiuXWHeuQ6zRE7V4TcYybHvxTj8SwYNYPFfbCmDH",
  "key6": "5MunSuqW62M7o7QBSyVb1aGesS7CHXSiTNULSumHkas7wquzt4ioYux8wAAK1HL5jMWi6oadYHahcb7jReSJVfaf",
  "key7": "3igodxHPEGyKNRupsZcRX12YJnWiPdBpAoTETrCBhjAC8pEdTLH25ZADQ2nBymJWKAjFYyywbJYAY6ZAWjswQJv6",
  "key8": "3KTYiEaqxE8pik68kLbRegyuJ7o158uENS5ZN8Ef5GkNsLNLJWAAPBse1nwkPb2bV2ugUbZ4aa6SwAkLRgHdx5q9",
  "key9": "2fa1dZ37USaqmHnHAa4njasd5ebfRnXPXK5ANKwuPJVUeNvzwpNsc8TTkVAhwhtteDC1j2zX8P6R7WPLSik92eQB",
  "key10": "3gcVzbTxZxCK9uKbwZYbUvoKNxkL9tWYpum5YuKai1bupBt7uRTBMRsCV92peHgAYwGvM8dL2JT6tu7Jb27dCuqD",
  "key11": "p7R8zCcK3KrVWaT3stRYRvEoWsoXRzgkGy7fvwzTwNW9ig8a4kW3zkRnntJubF3xKPskrdWGE3U1y3YJ5e1MzeP",
  "key12": "51GKnWWDHNKFM3pVAVo1cnYozJ8fcwx5jkuxmUWPpw2CgrNGNUKho844Dv9sf2unqxf84HyhgCtG4NaJqJNdm5DN",
  "key13": "445suTZnfgjviu4gw9L6j7tdXLV5pPeDrkBja9kwCpBgNWg9HTVopqYRrHud2AWmCfCERDa6ySRttmVSL2SEZHb4",
  "key14": "2Y9yGZTCFa6fzgqeMqxT7nYnQtHL9tcM2Ty6b8x8qVrnH1XN2s1CFEndKwEiUked4KxuYg7eLyKtS9RYve72zkK7",
  "key15": "LavBLSnn33LYzzVwP18j8XgXjKKNYsnqeq4vAMtA7MbtyYN2uDADhA49ZnuYxFTnzBWSfy5nShyvxFdGP4YJTit",
  "key16": "44sgWyd1Mt2a4ja9KQfYAsL3mNYQgfDdjNQoVqwjpvcCejTpioCELUbdcAmHLiKnSZ6pQyL5DTTN7nUMcwZypiRq",
  "key17": "4A7sgYHPwp5mRg8EVZf3Ed9KH65hcBLX3bPaXdsgHqk3u8kQRdyY11ZN1Br9fjQC9Sgcw1uaj7GCwuVbsXZDePu5",
  "key18": "2kffp52iSxaS1xdzTdDnNcSNtEoFUraqhD9G2Ro9DhX6qSZovQrG3FySfM7f1ukB3oLhcrqHfDgDER1H87goqmpb",
  "key19": "5ynd3mqXbLTYK3Eubkix5denRAafQ7DLAZZvMzCRQrDBxgQvoHS5jrxyFk3BsEs7HR5b7Ca9N4preZcUatFx7qkW",
  "key20": "5ZYG8EcXVpviGY34xnsa9Qja6UbmPyX7uFEGft8wucmKXdD3KxRq6ahLfdUHUUXStQNfjU18UZ8PPkVrzkGk94QS",
  "key21": "4pmQmj19rk3dACkFTBAP2pHp4yaFqmeirbb19fSvwQS1xDBQqPhicBhJ5kxFfFLH5x34WQG1KryKoHGrVKSZb36F",
  "key22": "2jZopA3vPoTF3WV4haXGE6sLw7dfFWrdWx6XfRbaRpnshYY4HW5Qq9QGBPWe2seDHk1SE1nAQip6z8rE2ddrmZCC",
  "key23": "3yQghGmETau7GrSaht9U4M5d2TG9N8oU2xQ8wGSwKoZVMwJKJcsQGaFqnJ3SyfigWoqPv3jT4r8JfAtWu4JP7grP",
  "key24": "3jATpSCFnPG8XJZqVBX3Mpp3FJLsen2UHZ2QC6paErAQ9qzS2XyiGoMxTtuM12MAubmEYfdovfe4wBdcED6REiiw",
  "key25": "3Z446LTZgYSxqD7scGuRXShu3J9ur2RY8fhhZDY63Agr5CkiTKsRJkEr9WaDfWVVhkA4UMpg5yfVnXeSuztz9zaQ",
  "key26": "ihPAiSBGANNx69HgiVASeBG6AUeVbcLTshivph6QZwwHYeaCgcMFWGspJQPjFG5ZEHsrbWrwkz7FYgNsH2ofyFL",
  "key27": "39D8aYbBL5xEn8zTeh8i2umWFz4QYuPnBiFGxFuZuXF1TUy1Mxp7ii3UskWuSQ2UtoiMyT8b2P4CNDP1MhviTa9n",
  "key28": "3ayWwd7Hg8fk5sCCFyp8wMdNdX2WCQAfZCSWmeCuLeTnMQjPjx5WfRRKC3LYEa92Etcg46uCf3mtL47RmHCfTtbA",
  "key29": "2qhqicjeFyn6NoLyFpu891pLJB3Qwd5qG3dgZXGipJZmyUXB7t8JqZ4WihE56GuDuCPSL5MCvZqfyczHZ4PNBnX2",
  "key30": "5sB6jqLgXoSKn7WdhSkGxT3yfof62KJ1S78rNZHMFYW1ZMrSz8ke42mbvfq5Fa5rLMdnSZ9HAHvJu36N9Hv7mo5"
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
