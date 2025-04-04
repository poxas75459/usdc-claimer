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
    "3iNh3wT9j7VkvheXBQ62FSNGkFx6xqBMMvQuGDZfD917cDzsELg731pHVWfQLb4ao3LXBYg4qgCKfNTxfDcqTo8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PKKnyciPgCwQ7iALyBsVGdavTBa3UYUMRbps1HDWy4o6w7GgjQJ7sghND98Lz79v63CpE1Ndae3tJYKSV5kYHqk",
  "key1": "pf8uvBZq5ozamhGdo5fFsXhfQrZYZLQxPrgd7L5VZCE6Rw8iCXq7HwBPGLifdDC8ZA7TDQrCJHVCQXMaj2BHMxw",
  "key2": "59QT45iJat732yiRuck18AKc95ttH9aupi61Uci3LXpxboQ1hPumxhxSMYDnE3DfoafLXNmvZ7tKLa9G5RULExiw",
  "key3": "2XzvgbqibRL6EuNESSF6y6cuUJ9tUbuVk32pqq24QfWFfqeM7iw3gxaPxSmb5vXvAtqu5AYmcJJY38NczFvZEYRX",
  "key4": "4qBUdcRaJTpdjZ3oe4c7Ez9TRwTxjwV75g242h6zbZxMoMRuZK8xaKfpfrtHLs4risfTQXLxXqEGY52oVBnjBzpg",
  "key5": "3ts1dER8WHfrgV4sydL391JibTPWgmHpLsL5xAch1zmsTkJf5PK96ZvYuwUGpgR7Q9v3KsQwaUAbd1a6wgad3MJm",
  "key6": "qrghKpB55RuhiKoQ1dMUPHjJPmHTQ9HPJfLqqC7kqFPndYnCfjAk8Lq7RcX7UJGhso3THazSsz4Fc6VJdyfF1Sk",
  "key7": "4vKtjSgv1BcfeDRjxcbS8iXQS5txz19MW5eUUgPpLRwwydw9W2VfLyEBudHUhCAr8PkK8nxftAFVh7V2xUwTFbAb",
  "key8": "47U6N4Vnjnfa7WabWYEDXwf8MwwL1CHJ9d6bubzQmrajHiAtPEwBmCmQ49GQb8dUzwrvKyAqd1mceXWUaUcy8sqg",
  "key9": "4sGAFqhnvzE4HaDaiQZrDWKaJSNqSxPpnwL7hdUcJzU9xLhtBgoJ35jND5dRHaYue1dDgscJmZqDuefpEz4tiVLR",
  "key10": "tPiNepsLBsgK6NpqGHa3MFhc9tAssuZu2YXpbueUVMPni4VbEWgVTPcMVt3eUC211QgaNVTUBzxaj1ENhRtncJJ",
  "key11": "2MsBTwqL39Ws5nTTw1fTjjwScfaDZPt7h1tHgrsy4WMK5KbGs3GGkYSrfE9yFq34Cu9bE1iq6oJQY8XHoLdeNA1Q",
  "key12": "5pq4gKLYWVh9g5hnT1jMpweLLBbn96n6a65bXPnx1BAccH9zhdyyYMRQWD4ma7mnv8qKP9tCrYeS6pdG2HqEjaVq",
  "key13": "3qiSWhWZJFuBBPBCNLnvHV88epX5oGKt9bSLw6zGHCi1JaAakCxfXN7geNy2X6xS2YVbsrgHqDtiSwno8ucyZWCo",
  "key14": "3YmMSRVvQqePkyRCrUyrnDn6qPpbX7tzxYDWXNpPyUy2kgg9TGRU2ZW44pWNiZU6XMYfNnsNvK5XgBufz2yJDiwH",
  "key15": "28mtNmJEtxZJLmgse1FcE7VGNBAnXrfAt6uw3QYKAcM1TyGAnVAf7kEXSGTV1jo8vhVqmNdC8Z3bUXYg1bqfPwMo",
  "key16": "3iWhdPGQwzE4kwsCqPVoJGLRrRt9EhyNjqsr9FF39PdKpzVV6fjCPbgVog5kADhBtcUzrP2ed6SvjaFg3BycNyfH",
  "key17": "3v1eBXVEgnRayRnVoYVBthskQXfo1HPhAxkaabxdD5oFr6CMjygmv3rU9S6KstzruBVT1q6uh37z6kLzoaEhb5f1",
  "key18": "5kftTfmDxKTvpt5Txt5ChuT2CDJhjEiEmM7TFjhHRECDdjkRvHdSNbFCt7NvvxafRhug2VeHRyHhKTLTCg6DSbS6",
  "key19": "3sGftce5LEVU6UoL38itFDuFsEV2fWy9UneQqbqnjyaH7R6ddNEYs1o8tegoHP5HocxbrepZT8naqBmatVMXMT3i",
  "key20": "568ceskGgiwNZMToRsxy89ngZto9JHCHQy5Ayu7oeLSFRwTVphh5HT4SoGuMPSZcMpMd6CwFHaPWEhtXxzhjKc5Y",
  "key21": "3JefcgUdFMcxrSu9AH5a8ZWuGa2TByRvHQLbVGS4ueqWVe6wofw5wVAqhtTyo8Aq4q2LEqzSBz3eonJYLTX4KHmD",
  "key22": "58oYNeF3F3hB1NdGme3tPPNoHcXR6TEosFzP9FKCaNwFYrYny1BFq7cmWJNpd7dEeCjC8igV7xUiyDE9iqV4kWJQ",
  "key23": "4kjXjVfm1MQp2BP7EK7Uww9W7QjHbfBsBriYbLffvRicvNbChcxywwSRrmKjb1wzEt3DWZF183GsuWfSTxJCFYff",
  "key24": "2CmrEj4t2VA4WhD4g4wrX9sKrXEhCAuoHehnpQ5ajGdSmMKNNhHoodYWuQmFoGtaGRg55DhmmSvngfDD3B13i8Z6",
  "key25": "4rXUgZ4Q2SkqHxv2nfFxiFHH9JNkzEUAHQ1EFh6ZfZAbmJr3jN3rMUyFF9M7PubbCuP5WVAGGrcBy9Pz76yY2k3h",
  "key26": "5NUw9X3w9JqUbPhqkysaF8cy6Qj6HDSJrtpEvQwaenWbUeEbbwfLyJm1mS4EmgLCokEBQpBwoJoso7RV1Hni14xk",
  "key27": "53BCv4PjfPdhXWpMEj9a6gpMFVbLhArtm6n6tDxX8kRxhmsDtZCs2HBgbWarEuX4WdPfjStvH8DjMVp8eGj4RXnU",
  "key28": "Fyccw3dSbogq63GrF4cDwaaUXHRczzqfqkJ7fkv69XMnLcTYafZiZv8RDXyPER1P4Kf19vjXx18zFgWU94A1jYq",
  "key29": "CwRdVyb2ReEUcF65SpwWrgybYj7rMmgFDq3bJGvTFC3iz3ELkC41t6WzKBgyjrL1G5oTuEmxjeH4Wru9kkiAGea",
  "key30": "4EeHcwttYrn3caYXJwy5x9m9u4xQxBbTczwMEwe3QHkasc8B9TTfwCjMgTswxNWJWXrXpT6WtjHAyp4Bnvzr7Kpi",
  "key31": "GbB1v7Zfr2ULGTLhEbvzsaCDkF5yq9jjVSvQQ5VEwdffGXAyCXHbAZMcHmUv24p2qcLKjgiywZn4ATZPMqr166b",
  "key32": "2DSwWQyqRg42KihSjp4Mm7JaZBC1ehgtEDing6K4bbYeT1CQXYD1URHgarVrB8xEikaWkrz5nJ7TUPJpj7RKZb14"
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
