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
    "BEtLHHu7S95dfe9GnTzSV6ENyo2ansbwe2guQp9YPJYdb7ncthwqt3YZACXP1F54viWFo78wNYVHeQYJUUaK8gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDfFAtTTe3pVLUHusymFhtdWbv7Wiogq6v7QNVqULcQdJAUdxoPS8TwDBsovRJ75HaXqLi4DjqvCxxgpqEjTEpJ",
  "key1": "kvYqgXDH9gZX2wex4TLxBswZseXbmpxy71MpBCTP5bX5rWtYeYa9vczDwekZUnrDBHyxHq6MVVmHEzXMeAy8NKg",
  "key2": "4XTd4E1TdGxQ14zwd2J3igXKrj4gMo3bmpaf9x9YCW9eJ3fmxi5ScSLkfU7HbrmCpBvHcBLgZKrNUfHutaAJZ52y",
  "key3": "4RXEKZygdUBeaxXa2h3CBh7D66CfwXXmyxFLkLuiqKnmoeAbYzGEdzxuY29BAdvmnf9ktU9vsasntvtFvYYE44oL",
  "key4": "3hxvSKFC2WsS1hLoshbxxrT5cBp4Rb7n8THqwDJbBsbMXuK1qPbvkpEGZkgm812ZMgifG9mBqFVMyH2jQdMDDChQ",
  "key5": "2x67Mzp5gbi6QXsJseusBVeHKS1jxAun9BTJ6nByF7Crw5rujst7vCHPp4a3ZReXDWxTNwtkuno4FptDwcE4uREa",
  "key6": "5JxbBttWfapsM4xk9QaHogLVz3wqnLUSTZZypw8XSYrsxeeeCHdr5FJ2bnARamoePFqNz8Jwh1AfVLEyvzb4onaJ",
  "key7": "4QmgEQLzzGF4Bcuji4N54mn9RmX2WKhR4u8XqM6BkMru6iytCJrExBgAxjcVURyJMkoJKvGv7kmUG124ujT49yyu",
  "key8": "4hqQPGGoZNiLnDzXc553XP5DfjFHoKWtLEBQHnD3DcrQgKKQPUHob8TyEvSfmCtishYPjQGCxtcw7XKHvTTgMbd9",
  "key9": "n18rFniUdxTsSpBs7MLY18FNF99cjWvtF4a1WhVnAF1Zg5jK86iTPmMXYqwdrYzp5tpFRFxbnrH7TQkn5CNUxhw",
  "key10": "4ecC4WJBAQ7H29j5efnhYput7Btq8s17MfTFucKhgBy2xbNZN53oZRfRaiuBEzkoFgVC3QXmcTqpLifND5Pdw9uZ",
  "key11": "5TtDkN7zc3vc3f5WfkzdkkMw3KgJ4vsbM8k2n9ncQbo8Zq3u6WSfCP5KBSCmSAgEUNHzZpy1jRJRs2T4aXYppnS4",
  "key12": "5oVeKarDAHF2yGJKZmkZorYAxzTacQYk2hZ4n7cCeBWV1NsDKPj7u15qhykpvaefYySKT8AutK7mfTLBrQUGvR7W",
  "key13": "48TgUABAqoPSLKbjpnm9MiMMJVhJ8BzCpiFqinv68SApkGcaHJd9WpPRotoWo9wdqdY64tSmf3PTzgFA7LPcBbMm",
  "key14": "3mpqdfS2vtE76xZVW2cG22cs3sBGfNCaWsL1TP539oLpPR1HDwp8gAhsnF6wrZeDtWytB2eqmR8LpbJRDJtmraN8",
  "key15": "67ZzCDV3bhzvm6o9TKfxAhpAK5TBFk2wYw49R252bRohTg8EVPFutVeG6GXWdEqnMDdrefhDk8qBW1c8ZwwsJqKP",
  "key16": "5DkPdaLU98TMMdmG9UQYDGqhHvGtKUiuqd35xqRbG5kKpq1SsgAFcxmGvhCdhJXtcR2cJPpuadW5BdkkktyuYCfK",
  "key17": "4Qr55gCeBBNtos2m8fcoAnFUzjQgULHcjyNXhRacCQuT4NQomVms2WZ75ejLHEHNzxbV5ALepviyRDA3YGi7qJUt",
  "key18": "2JAUgkJLnuPsRQoiP2vbQihvEL7pXGoKzBY6pD9DZCGsGFCnGLMM5riYBtWu8HGvmUDE961Wi319SfzhnywS4QFm",
  "key19": "63Dop4QVL8mLMk5CsPVZ1BPVGwLwK9bqzYyoLUBqGL8n8WNhxJW1Wb4qA82uFNJG29fvorkpfybLc7DRqthktUvC",
  "key20": "52yQZaE33xYB3SwT5uDfYDEXhbTdvo9NSaRTVu9SkJXiV5kaA3hB9ML6Eohkn5AzBA69JK4m9L6VV8XB4wXZp2Qc",
  "key21": "3btw34eUvupT8gv1s67eJatvoXy41RCmxAKugSke2pcHbTAagSn8VRQPkW4SCpxgQt4DSQncjZdc1nmEQ3FmzZfX",
  "key22": "4tg7J6RfAAqqWfUrnVnA3fJBTpydGoMHeWSoiSibJJPo7kvv5qo7r9mY635ve6nZkDfEHd4kjYmSskS9PnjSVSJq",
  "key23": "3qB7o9EqJTv1sVkVnTNjJrotejbT8yefDfk5YicdBybwEhDDyXR8HsYJcSaUjqojkKfB5FCPsWSE55y3GVSVx7wg",
  "key24": "EwspPKiyMn2A5yKFT5WzVq5US9tigCd9Bp2HvpVvVR1dj9okvU6g5ZUvDYG5CRsy7qheUvyi9XKuFnQJ1r7hyVj",
  "key25": "2ufi4D2n7VBXpvAfwiYNNmWXzgXtob3RnxUW9xjFpHnvrYG7ecab4LyTDg6axL6ft1SHm9vdisPZYtKMdqRjXRoU",
  "key26": "67pP5nYYhpsXF9ZQC7iNyC4wp9qTqBwfMCQQkRhzkc97ZeUcnptgVZqsJvyZdrJrZ8u634nqiJAgPBnUWppsA3U5",
  "key27": "3QpL7iuBbTsHLxGYDq1RLSVKTUnRmCbUMzq5TG72sc8rBF9qiWX5hqH9gngL3L6vswyDuguotqaG1rWbbtXj4ZEC",
  "key28": "21qhCbvHJQfRvP9zFSzVqUVgJ1aaqUBDii5x82R4kG6EJuCZ3rGA8WVoNfEa9NKsG9FESdZebwc9YoJRgkyfb5zg",
  "key29": "35ZPs7x5VdaRdNfUkAUamsVg6ywFkzQWjRBfjxULKYJKECjQHRB2Pm1TFqKYJP3uZFThVfEspcby34Qt3MANwyns",
  "key30": "5cEk6C5HVb6yERbB2aC8mvwn14Ka58Jh1WxiSMHL6XmbxLMkWzhU5GWSAcLEqM7LmVGT3RdKubYVBozSf93uA7GK",
  "key31": "SxHhJVM2Ln7uPLAxVagE1jVKh9aztPnqZtwFcb7XSkFRTPvqze6TUYDxN5bn2x391nYF1JEBSLWH2qwXtyWoepG",
  "key32": "3fgtifSbq4yFycp9dUUxuiaifRqYy4rAAkqY7BEdSG7GEND51W4yJ7hRXbVDi9SrqtgCQqvF5qbUUzx4iGzFKZBJ",
  "key33": "2XP7yvCoFiqZhijCwpxpJrCBiKkcZxUKpVUGc1CBuGK74HDYxCYuyazoXSobVDkcDmaJ2xxNXSioMKeLd3571A4g",
  "key34": "5RFHPnYZcRos6MauNQFtsaVf1rD6jMf9zERPGARMQStqo1J1nE2K1iSVtK9WTdpv6gccgNg5oMihEuPriNeykAuF",
  "key35": "2r9wAkFfRng7rnBTVZMchAAKeaqcXqP65RCAfGuvZPtxFnV2jJBxwD5TNQzKenQJ7PbmcGxVUjzAzJm532hTKxVT",
  "key36": "2jebaH71P94Fs4Pk7kwMnWQQDYFp94DtJDycakTQF7Y96QjShr2LnF5cv7Yh53qinYm7AxBd3rBR6tWE6CCKS99n",
  "key37": "3g2ztauhiXv3q3kLqrc3bdUo9bKcVmxJEu3ay23d4MKuKygeJkdF1oM2ygxMugADNfXVXXMvvXdJXtndrXKxZEvy",
  "key38": "5KUamj52zdKPv7CecjQJ7B8qqcgE4sGs5nL2Qcy1jTYw5L93QoNwx6xre9SNaPEHN8KWKqvsBfwxL3XmjZ4c1hWX"
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
