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
    "ERHCkrov1G7qr66fnZJ5BCCaED2Km57PVqMpscqcWRYCsGe8LWS2Hn4Z77jUg2nrcqeixHj3BBmHvykcs4CRn9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJZzQKnbBcApFeXG9Nw3VE6aTwvBxfHZfqB5DcmtsRYopqaRyJZBaWkFpyfez8rVNUeieudHdDEc1S9vwcCEpih",
  "key1": "3LWXLNGvgvJRWT3wps3Hp8yUGmbHJVVr5yDJJWgwyW9ggYAqzsSwjAyFcgrXyeShNzcQXgYcayCkEYgbT6iYz2ws",
  "key2": "3ht9GBU5ufpZax97TJXg2wA1soK6r4HFzUoyvorjFSd84C7Tsc6f3EhuTyMpnMZa3nFFQvxLmm5pJYTS9mDp9xpr",
  "key3": "2EYkcETQv7v6WA31by3ikmEY9EUREMPw6MKZNFrBtfap2f2cUGjLewV3zc7tZxKgX1wucwsye3VXnP2izaLC3eiH",
  "key4": "5yyh98aXw66b7FnzhX71hsGf3uK5BeJdVtYidi7HoSutobKVfBBDFFRDzrmHUNTc44e8ZUza3uW6eEWnBCM6cya6",
  "key5": "3fPBxY3mzLUiqqUVYqdnzGxQ7X1LAJa6npym9bsfvpbTuKTHKFc71zVhYbc1ujpB7iRWvnRPnPkRPvK3BSDXGpfQ",
  "key6": "3W8bUzZdT1NvPYdyxbhXTRap5rMUYxP3y7ikSdDZCGTV8ts7kPN39CUTP9EvwWFR3wNFFZhsNgKMkTcEkvwtmF6q",
  "key7": "54MswE7xzjx3ApHLkxQmq9FWutN8S427ZXdDbmfXhro8U9So29acGmyoCKEoSEWgpeUDp7NGbMHmeVrL9XyFABJ9",
  "key8": "2FxJ6B8TB8CpY7dpv3bMg12dmBPmhZpmZFLpqsvMf5BZtMochhP8Sj6MZ8QwnG7DYUYAjLnYTUM8SsckU6FNgpQj",
  "key9": "5rhLnwN4Pka85hWwnNWbM8e6AFUhjRKV9DXxBMTzpxV1gvwo6rTKdMwVxdc6J98yezdWhhHesGwdzLQxm9XkeDa6",
  "key10": "4V8U7nttHFz9CWGP2tV9ZqeEuLeNNg8e3F3Yw1QDVriuGVmUn6y2ANdnzGTJgwEEc4k7UMn1YRe7CTJ7Kn9Ezn5F",
  "key11": "5Wbok8tguMuYpqgAXPupHGv1Rpk78NKnLrx1xn7oYixp7aNUsGVCitBxaSsKcspdb2LQ5529K2F3h8fy8AVSFyvT",
  "key12": "y9trB65oQgDLg4cjjaKzrseqoKqidNzQVtSrjFFGQhbQGW7DjkPnMmnaGwGTJ3x8ShvZKAKVfmgLx5s2bAcfbr6",
  "key13": "5GGR2c1mYq2xn3fijmZ3S3hu6bFJKwwNU551RBfsNzb1WrSKjAHUJncwGPhvVNxk2paSVyA5EFy2e7SFi2aw9RsR",
  "key14": "WgDxLgFjSh8vm7AqdpEpwCDBhbrDynRSiySgSrn7c4LsVzUuEC37V5wd1FWFZwKdgZetEMgaBKrcKaet9p5Zepa",
  "key15": "5JfzMa4Sb2bMGw1rqE87vguifo9jnEUBcRyCXwnmdkp4RA8boK4fTidk1Ws5ibSockvsvMNjtSCF4BNudbiZfDK8",
  "key16": "5Q1NGwFsbsLGk4MgpCekH7nKC9KB9rTMqPFfXRuoxv5Ztx27DpV3iLfgrtKrDF43FhgSTNgtam7prvZwyQEufvzm",
  "key17": "2z1g6aPpvEh22xRDei52Z9pxK1XHSAq2h8MuKzSsKTEKoR1oWvCTNwDqV8uj9dpBM12mAsgPCdr66N6dvwwqQmuL",
  "key18": "Ramg2ttnkPUm6h2kVhU6ymk1p1pDyNTnr398pY1sBKjLFM9DhTZCCxVgPCHVUe5Nwu6egEmXZKnNKRjF6zHvtBa",
  "key19": "jdVwze4rLqKQMFoeXxyDVFutyje95B66BhgY6o18eKK8r6EwwRCaiQ1uQqM24X3UW2KyHek9WUHnFgwXG7HQTav",
  "key20": "5LSCV4JuJ3ByVxWodt9b4Em7KAy3pYwiNa8y9wvms7Kc7wMuzctAu8S6adsXeizudL8ddNuStdUVANzQUCGMUs6S",
  "key21": "47jynwCgG2Qeh8TLCxFgTYsPZQkfcSCJU8L7e5MqAJ6nXbyHjcB7s83b2dgBTxFUWaLySmgBkYynmzUVMyKwf3Am",
  "key22": "3UjjKM7kAtRy2Nw69fC8LM7FbALwvM3QbdR6t2J8LLkoqNZeNdk2tkNYuFsFpRJehqcQ272U6Q3WBxi1AKuCCoyp",
  "key23": "9gGW7TACLeSyQZcXTEFcezmjxy6rAdqdUs67pwyw4kQj92U8NzfvKBKJvAPmPxJpd7cAfwMSbMoMtiNgQzNzwto",
  "key24": "2DmT8CBqESpnauqzqK22XWPVetqLkn9keUcgSVbfnJvnURT5TgAeNT8PWFDNQur1LZewtJk2hAkVUfiPx8VBS3Ft",
  "key25": "57Sd45ohDvwkDqx1k7rbkpic4b28E2ZnGCUJjxgzpqPQxAFAQFnhojBGKZgQVhG6L6SWTPt9TG9yVr1fVVGFo9Px",
  "key26": "3mQLnv7p9gEzM761MEDc7SxaEiHBbRWVLrWMehrr4JNQpr8ei6soAivCjg1uGjy9x7L8CshgxT4UHMqPN462ZbRs",
  "key27": "4z8TomGSEpBdZLZn92xQMmCseWsJkzpeuUBbeyaWB7JTvGYiMsCBZFALaAp1nbuRoXKonTrfbQBWqFUp1qeNME5F",
  "key28": "24k8BL18kpasGxH97zANngpECgZkSghXHKPNdx7PUX8ttw2EmqDTHJpnotzKM2CFJ5CHRd9piqGqpMygFhQUFGzx",
  "key29": "45CFwN3nxi7nAofsLySanibmsUFgForPUtYpvbdfHnytpNf3MCtXsb4xE95EpY6eZgH6ftzkihGfDZBLFmtNSwkm",
  "key30": "Ddv6oEhL3BWuh3VoGZq3QHcVgvKCLqEj1WYWqvLzhNcksf5cZnNqkx7Rm5WQBD9Ch31m9oeGwaVKCkHEaXCskG5",
  "key31": "4u2cuKpX8MWiju8jnMTyKnMkmWN5A6nWTMXGFmLaE7APMskJV3eDQ5Q37yGAPC6Wx64WFSnZ29GnBtncByKYqoV7",
  "key32": "3y74cqHApExKAyQT3xEiFBNN12NfUf2nGUxY5WAc8SGoXHJEYxCgadfefN396FeyzCYa7DmAjTGYQGw4LTvUdGKU",
  "key33": "6rDzXQofJWoyJppRTJr8own9HBFwJ252nECxCaEvZvssbq8VnwYysm18FkwVui4irhKu4TtXGh83YpwFsUL56BR"
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
