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
    "4FKHgjXed2frvr2mriC4yYRWKGUiLcod1MVpxg856xuk6HK6kMmaDF8798RTS9NtJz3TVn8TTQopTDNn14L4oBhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bd9QkyA7x2s4j44TLNMyzKqrbs2WrGzcxgtcBKTdttfC3v48eE7i5R2NepNuy7YEjVmFNiUuxBHGoxAPaj9gJDq",
  "key1": "2M2njtu21mkoPnfLHrWV4QUWbYTiVefTiogJDxNvqNnKuGy5pCLMBBNHy8U1cAEw3p2mPJ8mFtwtUypNswwWG56Q",
  "key2": "4KzvmAhRegD2CM4PgGATVXtqzhbo5twBPJMJgqRL6vDxdbz13kBSwRQFSY2f7SuwVoEp5H7Xhe8NZJ5MxZqpBTgz",
  "key3": "4a53CPoG46rZMQ6HvpwfqcWny9ui36U4U1wH54WYnDCMCAoFQmzMiy995HXsaQJT6xYgK2NSiRFEnWFzwZRSMWYA",
  "key4": "XpDKQFVNMXoLnP7GbCMp5qqcMSeyBmpZi4UGHkCrp3RJiTD1k6qRR1dnrZhVPpMWgdeHciP74ZnfHGvTcmZiJVd",
  "key5": "51fqzYWXEroxD1hUjdpw9gyg3naaCCmXr29T6sMFHhKPToiowgoGqMxBdfK6xX2QQD7xA1vSzaYmATRTCwrcQRxt",
  "key6": "3gH2D5eVMknjESUDbwgTL9B9fRpH71X2prEZfQjQdsRvnsAgXaFZ7UktL3qQyXBVvC8DiD6iyBKBKQYM9SUWEqFo",
  "key7": "5EpftLeTcMG9ykTNkKQy6TLBLZ4MxPXViZN4jNMBPeYro12UGdoTMxSGXzobz6zYA4eUX9JUihenZbeADAVcXNAw",
  "key8": "44jCms7MNL12kUgH5Mcv7wttbmcpf7N6HxwvY6w46xbxJBM19UFBvhBrUo31eTqucXfVciFsTscwzaDumXLX4LKG",
  "key9": "5bpjrAnZMyGUkGxUqrF98CvyDy6ysGfyRxD7SyBWTxNz9vXjkRHagD5ba2M7G2DS3tPoxD8wNPu3pEiXwwxK3vUF",
  "key10": "3C4gPzvMN7usqjPf3bM4eqYuQt29EcEHzGzHKLujiNnXyzDZuPiifD5RtacHX1n2EsTmSgHgGYTW41v1w6rA8bua",
  "key11": "28juHa3gJLMGnsV3TVMEshVcyQ6BhcpqTamTMGC3PsMqNWtbnendCrKpx6nGP1HAeNbiefZ99zpdBuj6PKCbotG4",
  "key12": "YNEfjFSGMNxsrweZFn8U5XJDrbc4QRPUckkzwRuoVH1Cv2SGLyTChTBa2TEQr4fqxV96JQbPYycg47bATv8iAt2",
  "key13": "3TFvxygkMovy22ubqXiGHbfCrHFhvJRqCz45NFim14QkYfk5siPPZt59DiWPzjMJeCxZqLXTdTwsUieSwQimbZYo",
  "key14": "xyw2JnMf6M7udKrhcd2id61ahZ1V5xDJdcbJjxgsD1ZuaVpK3tpEYpb7h2Lcj3ZLzd1u57bhFo6423u5B8RSZSQ",
  "key15": "Udwkrii1wauhWcSpSsqqoNkTYss8V7Wp31LfdhfQhXZ8YTMf9mpxH5KYQ1SQVVbitXh5CvD92D3xHyqBm9EA1fG",
  "key16": "5HrnRuJytmbTrv5XwYzFmkx8WXLuKjD9xjZvaed4wXLVvrG84f4s22PdSj1qQPw4BBsKaRx9md77jQJWbBBWVZeh",
  "key17": "aRYYj7jGutGUUA5XXw32XMjfKubhjHJkgBvDRoWUFytfZb5FsSneazDHqjX9736Mn5UG6GFBCcAXLYS7YGwk11F",
  "key18": "36t1RTkSgVakAZwQLWHBqkw2R1pexWFrfDKG2KKdnt8QRVLXP8CjF5ACdbiAkWBZasUYFu9oLzkURfhC7ydNZ7SY",
  "key19": "4YuiLmzEUA1aMf37azTCH9HQ7JB7jrecQesNHiorhHpXd5JfBUMzKnC97qg5aagtAZWZzLDdSwhA5nW7SUUqb4gS",
  "key20": "MBa36KyhxjfFknQd6dt4yeFGHGMWeSGvP4QPgqodR7JpiJohhJMKktu8a5ecioxNv3PHJNpysGHbTmYoQEDtdsf",
  "key21": "3AhabWFQ3tQqCRmiXquB2LkXd6nvB1zbZY8VzNkmrR3S8EPURkZaY8tqLvKGuWgdEha7S3GRUgRf4F7fHJCdqFGS",
  "key22": "2cLZLhVmBvLZR5r6hVpUbp2AUcha4kQMN4DiB7DeZTHyXnTPQkDYXSF1VznkYkVjeDsEtYFaTMqiL3v6eGgdB3MY",
  "key23": "3VNL86t4QbKaXzW94J8fp53zf8XZSiocCaLAqLgVEyRrzdiRgTrqrmXRtszLnEmV12aBZrh8MGBo4Mnd3zvsR5yY",
  "key24": "4E82VpSeoW9HvEWC4EhCtJqbZbLodSz5GkuBTTKXhxxFAtiX6nNSup8NhM7wCx1Pif1iwTpCWFiHMvpPKdYLyEF5",
  "key25": "23XEf34Wya1KzBcXU7mmxeVpGYmhu7LgvcSwCK6YY8r4o6MfQkmUNPKctehq9TfvP6VTL7fusDbxniiqu6GePRaZ",
  "key26": "2nwAP6EuFSPNBVijRe7hyWV8zZRnh9HnEhSf8VkUji9UXLV34jQbchoHspi6bxvnJfz1ApfdVUoNk5zkyToQDw7G",
  "key27": "cgqwHRi2mFyC3wRgJmYhyxa3bN2u6ZuC2op615YQZR1duLbiM2wPdaiDg45yNheH1GJmg3reyqtYkxHZzfdmin8",
  "key28": "57QfCXvGdJTSToZDsAjja5AADXhmMLXyJ5BZ2JM38RuF2djxJDv7gZyton2M2VtryRnZE4TTa9ckMZnsP6JiEQ28",
  "key29": "5ETHe8kzG372mnLt4oWmraukycsz28KtphbfM54ieWuzJHrqmWUGxaesmPuSDwxG78nNbvArx9QSTRNjQN7qG9hF",
  "key30": "4sbbLaRhR2spU7eNcyRAmT54cdsVqnu7H6oG1xo8g8XNaHfTH9AcSyctQYtxKAvbZZ7R96dJcR5xxRaQAaTVpR7P",
  "key31": "fi27Jcufty6Xo3dVCq9xcSzqsnSmjwduuee7QT76gyU6xxLwMEtXs7wn1oksgXv7JA2mdrs1ttnDjjasd28zxDZ",
  "key32": "2Ewp9KgrhJjXVs6NsY3e5yCxHiKvhxRSTZ8oePey1hHd68L7jrKN4GoCCY7bCit2jHNmDQWgHcv913LESMmaAKqH",
  "key33": "4xAFG7gW9Lcr8y74DUjvPJV64ExwSGPZ9BwVGh73nNcWFBV6y4BAbT4iJFsyLrfQqWE4BPHNvf7355u2JBMZKDYa",
  "key34": "4i7WVWjVdqqKBK3A2pEtwspJHwir5yRMRaqM393Pw8VWGJxvKgZ5CVw6idww47m8kYKVAfgMusjEWTxw4UM4Xa5w",
  "key35": "yS74y58DCNGdSqng3m6ujbZ4fXCDSrS8JMw9zG4SjeCM7PFT86kH1wZA41LN63YaBF4WayPeiQv4SEicoRgRswz"
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
