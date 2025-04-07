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
    "4L433VhNB1qG69oEkABkdK6xGdy3kLpK76QxcWffqQdyHCtpAsmm14WpQND1b2qJQUUCjYr2gxxWc9rjqjhTx1au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qKbdMXHFZVdB6QJrgGurLDUxKoc9anXM8K5NVdRGafXNTqk7nyydNphqGKpiFnmmwLydnJSskfaKfr5hzmQCJ9L",
  "key1": "2Js1qH5pfFu5ERAxndKLvbzr2SxeT3mSfzaq8zWesTXs11yPbroCCjVfv6t1ydT6YEDFCwsd55a7zt7EXt7tWvCA",
  "key2": "5e8pdhnBNpzm6kSepPSu7tB2thkkK8KMxS636RACmmFDBvBAUUjh1e3UQwouiFJsxJiGyK6YerEMv1F2XHBcAgU",
  "key3": "2FFQLf5aTcuNHPSsEahb7UdnEHZYA2v6K5uih5GUFa8jCTA6BcE1LoTAiYfMcAA3iW2gWEurEjXCpymbuwT3qXgY",
  "key4": "fbWhLnT4CE4wPpEWHgDMUh5steNV3DctDRhQcqVimvpPMx3mebL91zJb6tFM9BvjG13ai9Zx6TZnYp4bHrq4qks",
  "key5": "2A3WABJiyYbGKjj4pGzHAa7Y8vPuAqiR8dKk2TZcme2HPdCmAATDhhSYdu4n1911sXi7DvCEdEirJs7UzwYSaL14",
  "key6": "44wYwagC2DS6cinkRepjZjmgJf7tteTXmm2fvPco9MMkxt22kkRsMYki1YeRghyBtFYcW73hJqNhAXiUMsEA3voz",
  "key7": "V9APMsCt5wHW4zCHHa1A6gYnDQQsW8uBSh4asxPbrsga7xwwdKUqPoeszvc3mq1p31oePA6iUbJSeKAptVkYuii",
  "key8": "2gDiFwJricwMJ2v1cJFxMKZr7VkCdxqm2xiNv84fXgKd5VNBUYAExMNVW3xR1F5RqR1vDfbdxVooB1gDAwBwCHQ6",
  "key9": "2j9rXUwJFdFqjbYECk6JvzfmZEb2CyXYQH5rW7n4rRf7LCTfeNJmkUbMX4nYRzxUH11PDUzb2VMrrA4fCMeYQaj",
  "key10": "47XiGG8Vi1nxkN6EWutYeX6FTi2GaFaCnQFPQCEtXcpvTfkLieQk7KeHZcRqpok7KXYea7c7QVvL89DhDUrt2nR5",
  "key11": "2q3E19egic6A2xnGMS4YnEMWe8Jd6rfhGsMEUiFkYYwVM6YYwk5EqgJcqX1LpGRLxNJrghZ9o2f39zR9QTPtgqA9",
  "key12": "2bTrYJsadQgP4EC8eJQaAmKChE8bhTL1xqEGbLifkXZuZeZmTZfLM31vx4rrzZeLhWTmo5mUP3rN5BeWvbeD4bf3",
  "key13": "nyCqrJFe8zfwciQoYSzafjRcrdDma1GoxbSCXT8DD9EiAdXL4YVzhLP7ETUNKDdAJCwdivqDiXDdLemAz7RXQyP",
  "key14": "3Hfcia2hCDa1JP3wgK89YEpkqM91x4nHvaZhHcXegjc4bCC57dE9xw9xkppa7N63pwYQhB3V5zGPsmWvESoJxM59",
  "key15": "5ztquEPgzYn6V1Pd9xhVhpg336NrjqKoovAXpvswceHWBNLWnW2nPgSz8bsk9ow7MC2otwxh6t6n9ADSAkpXw6dk",
  "key16": "3gMQdy1JfhtE2DaJzUq8T7eNcMTA6oW1witHN1pMVZffi2F9d9Z3FgaQccMomU7xquBC4racDHCEFRuLajEKVY1K",
  "key17": "495v8Z5TMD1vuVABhpZ16TruEorCpkbDt7xUHNYevFWT7MKrye6qTFN6tYP4V7M6xwz7D3Bg1qJXhNeWp2AVak6e",
  "key18": "2hvemv27uVpAPn4ptW61FDSRiywdnXvSvmHiX7bEVua55vrrJNRak7sB2uRka4gwtHXuiyCMGPEFKfC6YTHQ27fA",
  "key19": "5UsCtBXe4pvL7E5gXjEF1Xtur5gd9kVbwDgryjgkbkbW6QPFHajxuYaESndxWhHtsVDDeCnfhshT4mohSKYFuQE",
  "key20": "4CDzGqYeVEDnd8KUgczX8jCWGf6xuDT9cDn23EJ7YY3bHVjrEqvwfaTik3xyKhvP15mXHGxFVpQ41SKMQKwvU9fb",
  "key21": "AdLLuZTZDCcT8RcJzpg2nhWCwKrA92Z1Amy6qgWETNEUErDu8uk2jAXHiKNoVNrK1BeAsnSoBNNad8UTeWv2qmD",
  "key22": "RxLUVcr3MvAZFGVgHTrvR3WQoJs5DUUSC2yMkEG2EgjwABGNSHp4Y7BaJDioBXXrjziweXzNtoAsroutfy3R1oZ",
  "key23": "3a2ngvdt9G3e1BBrzt2Mfw2qRWq5H3qoePq54hrFX2Qf2eRF74nAq25NTBJiBzN37fFH7x44cdzPUbQdjkgotZC4",
  "key24": "4PYYaJG3Vn6dy45ddEcHH3HagKdaUotiW4xMonkmmJGTfRnLiZUNxeSiCMVYgGzbHXzjZm4dBiLXXk6QLMzywkP8",
  "key25": "56AWEnkVKDmDomPxLuih6vYSmUWVf6UZZHUwZVqF8HMUzr5ZkZfotuLFZ2hR3QhGPnxmKfD6BZy67mMFDSC8g7p6",
  "key26": "2KM8KvbvPBufA6CxdAkMtfkfPr9HvZsYU155tZHa5VcZvA7KKh3XkuoUarB7YqBbZq4MPxWSxQpS1ApSVGFVK24i",
  "key27": "4pWgZHVs8VQf7a17JbNcq9KnkGHka327jFKR84TP7K8c6rAYVhScJ5FLNkP2zxMHNZuyA7pYZAkEuPsyCiqsMb6y",
  "key28": "41B9wJWVmx4zGjCTNtf9k2i9nebAuiQw9zevugycQxsZwY4zR8KEtzTEoD7yqsNrMJ4HtLi3QUwtMbxPkHnibbBs",
  "key29": "5Aa9jkXo6zTTw94Jw24DaTZqWsCqDmWc4NNqLM8gcD8WQhd8vr2DdwgjeWKr83KyJdv8Xyo91wRoqthVZfCPi9ZU",
  "key30": "5JPUwnJPEmb1c3ZqpZWh8mzXjrebXa16eYgmfy4qECm5RbfPaMV8kkD5PYPL7k7XpWoxfPkAQdPfNAMwJZhvpuLw",
  "key31": "2vbRr77afbY4UxTEcwim1JjBJdbZQCfNdDzio2mREh4pzHCEScActHSNfN5tpzQhBwUzGMcpn3kNPMgPwhtK8FAz",
  "key32": "3ojK7WNo8xqimaZQ9vBidaMjXCgpCWp1xFoyCYYvRAYiLuMfH43cqypFCzB7dCWCCeqXTP8BMo6npTvJ4pXdu3EC",
  "key33": "3G3RYNDsqHYonGMp8RvpkoVZD41fsEjkKPEnCPzo9igyDe2z2WTBRzdjtuHsEeQwLwwh89RceM5qGqVsAg8CtaMu",
  "key34": "5Kd1itw21DmNtKsFvEVVMLGn1MMixc6cixbVGa2kr1cWLfUL4rUbzUxK1dUUfFQXtioMyBaTEVDYw1HU3GWzimAn",
  "key35": "3SbuuVRM6NkqzhwQiyeVue6duzQf2k91Dy8KC3wEhb4qfrsEQYwRcwEKY2rLsbo24dfGeCNfVbyPoKkAtbC6vHjT",
  "key36": "4R9rrucBHyFVeiDHpUCL2qnzo7ThoYMzEKpGenrFBcNtMN3ViJxFiv4Rc4VwizHBTKaDnwjnABMdFkPv5SMGKCDc",
  "key37": "524c1SVDdHpEu3gkmLAmaBjsAi4em8wqEixDBPLMSLZpX7jM1RFps9rTqRoGorrRHCmvmsrwmoaRXpmeSbKHWEYx",
  "key38": "5ZSGa86qXyEyiVAAbLtbCHT9f1H3APUHx34MREtpw54bJiurfsCdPnYDdHAqob2Jo1hXieBexG7dyk5YChkECvFG",
  "key39": "3auZ8seFpBB6JHeoRfuuHLJstBJ5gnaM6ZhDyi7U4RdAnTgbyrh9YxxoYotAXsmkgucAoK8PE54naRjFmUcFZS5Z",
  "key40": "5dfrYsx5wP7UG74E68eKv6z1Z7XENGCLDieWrq96GVP9CW4QSqttCUuyM65KvC99XwqGCDvJiDQbHycgMdeuQsw5",
  "key41": "38kjWUfQ2tSayJr7Q6BEfW2nkGRj15KVYBMjJezNHf7yEWTzp6bca5hmbdzywbGjVSAuJHRwLydpf9uRqm7JVJBu",
  "key42": "5t25QwcSJ7Xi3EhsKb6Zr1CyvuTADSAbKEe6GQRafU3CRB5vBGgnwT2BLtNNPBMJknAfNCScr1gEVEGB2SHrkjch",
  "key43": "v9CE9J6XeNSS5iBRU7utfZntBnDvM3zmiQGYFpWt7C4NY7w2JBFc6F9adCuUAzgdNw2hazxJqYfeGHevHhG8Ugk",
  "key44": "2ivtm8528UrgsVy5zvGCMVNw46CvSHkvVkbMBSYUs5HsN6PvRDCcxB8x2PJs1vkHvrH4CgAZ6g2wMa9cV12vbhNG"
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
