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
    "2WN2cuURvABD2c7TNfxoJEdWEE74dCVJZ7pWQpp5dU8bMv476LS2UAF3QAf9ZEqEKZL9engHDnuWWPgLSypZDcRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZ6scifXDbao72NLoSnCFbppHHyko7tGXNtT8BPSfCvr6ZMe7xrabroev4WnALQgvKqkou5rjSRVWYBYzYGHjk7",
  "key1": "QEFrxn2DtF11wKFJnUtMZU3hacyZLowkf5s6LZb8Ds31vKHGNBRGHCt3xJe3DNmsBW1iRUSWB7jNfQqpzpfhzTz",
  "key2": "4kfMg5FRZwyEqfksxyntmMDpMiW8BMUuHsdudwDk9hhUVcHtjUraWRohodXKMuQd51bBP8QDJbTxmeUWB4DMCVsW",
  "key3": "2ZoiJEV5YHnemWQKvodMRg5J6BuVrEaJyzUc3Jayo9NzJXp7LL99KnCgWetVL6cGRNmfRkZzGyAoXAz2Lo3tSnMc",
  "key4": "4AsLxaH3K65EubyFebTGihY2EjCDyM76tmeGWZgJv3Ltwsb6ZxAAXG57Fv22QRhhsg19VpZNBnwnPotUZGxmqHuf",
  "key5": "KgLFjsGJ9oKgu1yEnWohDjy27NU3GQo7vng64fzmSrk9LkWGsPYXZHn339xbEnGia2zRqsfDA19FJL52FmHGTKB",
  "key6": "5NLTb3oYbeKTPvK7wUt35VKhQLAkkCjYzdVcHHmdezXHb33zHUpwpnRY1gBN3Ui22PmmmKX33W3MatbX2MknmZs5",
  "key7": "DnZgrpRpNVYGhHPBLxSBCkSUTeBgrk3rxAShF4NvpFTxAm4TpN4vjjUSYy5nUxX6gu4odqBkbGPuqa54YjL3w5X",
  "key8": "3A9c5TtupxczWyQGvGJwa3PMDeGLUFTCEmUu3BgxcmTw4QJs7zZA29bxssFxwDjXRnxFxDVufTJD1aKEpuynXefA",
  "key9": "3W1wdNqLTJ4biaF2ghDMFcTF616is7eyD6XTVRzaX5AhUnvji6qQS4xiNX3trwxJyz4fnAzddb9epGEHEsnkTqb4",
  "key10": "2uh96hmxQZYcfuYgtuUjnC39HGsF4ty84VjuDHEu8JTWotoQkpRJ2q7xogHsNCu2752Ta2fjL6Co3ocmtSZ5BGjD",
  "key11": "4nZNYkEw2BynZKfmjNxemfhcvjUjMpWmA2orQE5CRQSDJ7zqik9pZYWkB7e91TnasrTsFoNFtDbdrxe3oWRM8npt",
  "key12": "4xoGytmELXnuNGbrrktmXPGm56wvqD9VW7QwyNCYzNgwCahr9Bw4RQ9D2PGak1B8ZrLuaU9MzQNRdDt9VgxZrgwN",
  "key13": "iyKbeMymeLaiXLbpXFMp91Gbkj1XLQH2qdBLRW37mgntBUieLkCkC4rxoDD49weUT3NgdPYuUZsWo9zwDVL3AxH",
  "key14": "5hGKA3vxrwGTDcFfAuEKe9eXeGbEFdd6K9QSwkQdmeohFSPQLGM8ZsjsnF7gk5qJhkohTSwRAq1gP8aNzzyLTTMD",
  "key15": "4vSJt9AUoZUj9HcxBnCJkCEFktNaBLy1BoVm2jWNhWTrXw7i56VsGARh9XxjJeV7v2jk4nATYFJSiv6osMjzqY4T",
  "key16": "5dxuNSh9PdqUKSiMp9nK8vKQ9j8F9kGCVtF4hLFcXpZfDreipQyLNaDXvSuwnKjo4ADMb7J9VFnYwp8BLTSRUa5Q",
  "key17": "5ppgLahxotDh18jR4bPaCU4zpkF93rE6A6xp4iNd2TwCUHnbcwgJCPSnqJQ54LUWe5AYhZ9Ts4gTzWQy3f2rSC5T",
  "key18": "3wHLHKUehYaEe2jfhMLDn5ynAdiJYkKmk6DsrzH2GQiGHxbN9kegq6uaNGX32oGyvEyfAhkQmxSFmifHsN8rKjZ2",
  "key19": "2j92oDsRggsvDtLHsBF5oBcxj8q9B4XwyRukeYjdJoYmEmT5tgB1qg9HuFuDU6aAE8WurVRtrFwzrsaoBGqifUpt",
  "key20": "3EPx4ieT3FicaBwzK6vGY5Dm6NLfbH8aWLQCJNEDGjKoioeFoJeUs87JKFPP1VuJV2ddExSoQThK8hcWk82KRG2H",
  "key21": "x1jviPSzryfmSvP13NHBm6w5tEJ7zGqLXYMYNCfvaQ9nNU8jxG7KRTYc9untj6wQCf9whYAQuKE2pxGivyZJx7M",
  "key22": "4WWrzfNyhtkQxzbhfm87pXxivHnZsrt4pYfgHZ3pUP7uurdWDgRmLBMFXqJxYNMHGQneD7VQgput18GC6TPv8oAX",
  "key23": "RNN4GqLcQsYabJfvEEceB5jaFuXCjg7jvN4AiwcB1Ev59qNMUQo4qju5rMBxVuckRFKrmQAdbCcAJHEbciHaqVF",
  "key24": "29MvwTQfcRZrQf3DRvv5H4HByeNBA5feULvKoFS4oSa3VRAakCUaZtUnjW1tebAWJBgGMVmmPbfyEbLrQHGQxB9s",
  "key25": "3sh8J5cfaspAKmQMEYsrWRTHiPFThnERxtJd8Bt6BsEbEEt97qFXEDyTuTeL4wxWqnbYzRtWLuwRzxhRKgwonLWW",
  "key26": "2bwnG6R3oChpm4vbcpSJwQV9mfwpiNKKmUTK3exgcLEsJ7rqmhJh2odegmto2iNXPF7pvMro4B9E54yuoFyKn3wd",
  "key27": "2NJHGzFPsZM9avGAXvtuCQmQPRG4MAyRyntKoHLZN5pwWGRPrfYQRgcLXomng22tzV5KBQ8YPNCr1kKc7Dhiqb6b",
  "key28": "5UVRWL34mewy44eAbqMRc3j4QeKoocWkRBZhFoVHRAk5jHr9YAM7QdRBqaewzX2b4sWL4koparN8iRYrSZBopX1W",
  "key29": "4B1fgGQAhS9Qs5CvUnRp2weKf29k8F6KY9ZhFJrH8YZLjq3VQuZMk1wjYW1MynWGMgAfw21V5c2RoCxPhBoDS3s3",
  "key30": "47SFDDystPTsw7UvhgHWcuDATdo6QeRT3Yqj2eHibt3oyyb2yKF4s6SqrGphq7eLXtZGxtPpUmXVXxhUGssEDaKN",
  "key31": "4A2HtDVWj9GykJPTfh5qmGWxSTVSvDa1gJptZNdxwMrDKHmHwUmCXxURwcqgQwAn9dsjpf2wNTTWq2pECpem3yBZ",
  "key32": "MVZRH7ygfWeXzyMYHM68h4zcvVU7tkfC42EDZxFgUuH95EuYT11e3qT3FJYsagfWoC1kadm2hSUzxgZQif52Wtx",
  "key33": "5AiEHX1ry1CfuSJmUUS1uvgcZjqgzxoxt9N8NDETW2N418kmhS3LrSkGFoN4LavsAsmTAZh2GeEQTHFz8BCNQxkx"
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
