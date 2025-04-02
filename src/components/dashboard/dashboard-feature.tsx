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
    "36e2oy2BGSnwp9FFzTvxBqbvSjM8qcwmrNC8s31TkcgcQs85cHh8rrF8rn3mQNvNyapcjijRDf1512GAUAGQ2x1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eo31UuuVgLAkZMmFmf3f1N3DipUYajjT9gSWej9Z3YZ8xzb9UK1tnQ3M8CF5DauUwbNksHE8FFkgGR7Wv2NSroC",
  "key1": "2rCzzNe2JxD4dK6GiroNiWqLN5EdZDWppvPiMz8L2ekuHqdKs7q8Pby7iqrKEC7mdVmjPdzvhqyEGqH7CU2UkSdS",
  "key2": "3QQwdZ2hitAVNSoYN4gtrQuyjaZU7jajYz7tyz6sadHsqoWZyzEaj6223UyWi25Sj2pTf74MtbuxsseAVG143yXQ",
  "key3": "3B7vcLMcduoVKWhJUyqFkREvJXiGFkKsQquUfmb4q6RhpKMoMMyqWi4HwuHXn8ak1otdg6jSiy1U6SDdW8Ga2Bv7",
  "key4": "7TJqgUnicAbK5FBkw6KsD7MdoBdCS3WCYps8EFxPKr4KnMDe4gGZrHa4EyC1ksyznJzJyiu8p3y2udhcPjP3qQb",
  "key5": "3sR3nYFejtRtDsRLZA77HJpVCDTHWJGYidaZpUN6dcELBzdeQxhEUwToxK67aGqrh9mTM2hUsGE4byfSFB99dt6o",
  "key6": "513Fo1FrJw7MYzYZSf7XfZwvGEHA9q8o6KWDoQdS9X5wVyxCTHFgNCkZZG8iXCm3CBjbo14NpQEShvDXLGsZxDdc",
  "key7": "4WTUhj8uPrY8pT4WuFX5qEKmiwNCBbTwp4dTXswJ7Tgw8bw4mM1ehTxxSjQN2qVmAZSyvR3xuXcycVsXQd54qfAm",
  "key8": "5VstLQwrMpfmnVCPLmpK2CE1J3G9Xvz2m99BMKvbn3TV8y1QHSSkbHUEorCa1BPYzJBJc1RNXf2Jm2qxLne7vt5n",
  "key9": "3EfRUGUEw7Minwzyz4oRmCcUUJkZfSMjsZ6dJguxrfD3kPDazmuUs7nytdXoSanYteVhUbc39kbCGk6fjPbk4FAr",
  "key10": "5mPwCnAFLNNHsREAufYVzXvWZUXzdEGX2h8xxG5hQ4X8ajYjmZUL5f54DTJuDmpwH9muC5x1WJEQBXyYRYf1to3h",
  "key11": "2bF89PJn3uwzBfcNjFfuawNsxj4x9XqrR8J19j4XDGdAZnkS1sN8ThM8ZPu8Tz9sSBnaik6o8EnYtNsR9kkiW4i4",
  "key12": "4MEQPBXk4ptC3b6LMPjVpZhQK7TSb21NbPFvrMnQTm8NxZhm7Stx45umHP1ESNrCkMKBswuZocWY34Pu1c6auu9B",
  "key13": "2eK2zhKz63R4jVCP1hGaiqwjftLfGGANMrC5ehf7GV9f2kGpsneB8cZwraLTkQZjFRCwUizJsuqfbawTWpsYo8CR",
  "key14": "y9wvNsS6LgHBQZwYSG8Yunf6p8RjBNQSDJWabkeXKnxaPRnKFhuPbqftRRLkdFkDwPkUm1esXH7zdWYtECdQFZQ",
  "key15": "n3D8fB2VmEMpVxse7pk7wKbLheYa4BtdqQfZFX1bERDeKeH5pVNrcenedRy41fjNenhK7zvD2KBa1deuEB9JJvc",
  "key16": "2W819zvmpHPpThznLUpjMXRWgF2q2jXSbpMkgUJUywX5urbHd9CVV4QBm4s69Aif5mpemduUapVLgd7Hx2PUnsTN",
  "key17": "3Mk44pDAuebwRFwrFP5SnwyVUiSJS3RMD4BN7vUfkCFbfjV4VEXj4nocanxTcAQUN5DoTf8bFYAiFafrhxAsG3yo",
  "key18": "5xi33rs94qR4nurj5dtxwotzvbraRi1XezZY1Hk6QzZQi8bxQJZgkzZU2sUZz262pnZT8Gwe5ZjFH4G8RmhawYbK",
  "key19": "4KJRAGrhptv8jccTxjdsRZ8NaG2XX6SDo7PoxDCg8kjSPton4ppYg4RC9WupWiAETZ7E6UevgvvymUBpDtmrPavw",
  "key20": "DUZgsehG8JFCnuuoqTgQaEcEqeWAETaKDxo1it6RjQRCx7cE5HXyoRGpavDuxdYexPTifsJ59vSrPtdeuoQvH4s",
  "key21": "5qrSNxqd8w95cd7FJWBQ3TbdE2wkLY1cBiWoTJ9st8WJbd4om8dJgdLTuXLyc6UCCMjHNqEb8PWMYY8bi4BkBZTB",
  "key22": "4ftgy5KiCqZeV816sYVfPPpPssW7B1v5xj1SYMuKLVjC6MBQq2E5Q8Seu1yht9VGZvhRubqFNLRLaoVPWGzG7fiL",
  "key23": "45dkUeKGtpxLvxVzKm6TKKktwjXKaoJUJYKRLLLMhpZxRSvMMUsXNX1vCS6LzQeiGK4oH68qqyo37rjTQTb8bXdh",
  "key24": "iAr4uY1be7iyv1fQF9iyPxm1wHxYt5xDrsVSTSpaWy9u5GXdTRxHcfjYKGkxhUeiHkHgMM8k3KsdV3BTm7TesWs",
  "key25": "35TNqfdydwgEvrA3vzoqWAF63YcA2ifAxoMG3Kfx2LAoK3hPRFTkuJZHLqTFvg4j8pY4S233nteBDFNj6BfuhwW4",
  "key26": "2NQwCGrKkVcbp8LqTQ47WGUjqgTJM4kHVkKdAedRs9FrUeTbmjpuN4W2TjGVUYsYuM1sz713QzvmHQ9crxXVBqiy",
  "key27": "4KXBvumfZAYDEcRzSBrsGQHNC2psNUCrj7rTDwCAY8e2zDwP5gPydEQZDJKJqfUkeSDmHTYVP4PWmvnpFh1U6xVo",
  "key28": "5MKVo7Dvpzf91kW93LP6RmPfUPxvuDx3ZepcHuFmsfkgJTKNwL3e2JAEeALKARkGRTty8WTuq3JCrNiTVALQJA9b",
  "key29": "45bRHpHc1wUuzoBFebRgWp1MmMTFqNoQuLCaaMwcGpZifdBd9oTPUBqHHwpRKwDukZ6fxJ1Y7F6gUs6Hp7mG2zUh",
  "key30": "4bdgCFyewXiZQ59Qp3FnYKvUDgonGYsipbgvCefY71uzK9fGUvQVGiLffyNN54XqX2yCFLvvE2vwckWmcCAKXYKL",
  "key31": "JremzwpexokKAcxCz7EzDBCCNtXgyPZ5XJgQZ9Cj8kc9UAJpUqRDTjibqdcEKE1Pr2AH2snZbUdnpF7B8jfzBLp",
  "key32": "5aDiWHuw3mBhU3abtEhozQ5MG5rDgZe8hAf86gMhaM4TwfwAKXoS2MEidkj6qDy4cV46hvzZkJEbsdwmmYszGC4E",
  "key33": "4vuasCBQrexqZG7KzJXctC3fiRHnFVPEUxQ78oHyy57uZ9ndZmBdqfBD6nofUSZaW6mUR2Zc4wcWYVs5FKtFq4Tu",
  "key34": "aUofFCLXwBXxuB4LhMyYUXAZMxKGzKRHpEupJnGoKVsLAkEamAnwayHxbPPyYWdp22iPzDE3tQwrmHVhT8cZZ9W",
  "key35": "5p86TBAdo2fBFJiEJdpXr4ifR7hap5bTGHN4QBwQiccRPswoLAuXt7fRGZ6qsb7wvL4a6NfWetCwGcCx9avU8PR8",
  "key36": "548juBMgUmJL34RHighpueFJm7JnrzsffHS8e8LyRwDUXA8c7tcQUqy9aHYWRQYuJ6JH7SFJ9p8GUYsL47g5tqpu",
  "key37": "3NbVZAkoGhXL5YUSWH35zfo37wGmzeEwDNyxnCB11TMUjRUoNymFL1rbF1NehVCxhTPwgkCQrXkLycoqt7FHobQn",
  "key38": "4Eqb4W8Nx6EPWSpKG8MWHy8V3TuFGjHRFKqEX7A5LP6KVQotoviZCV3KhkQ37MQj7m56d2GA6XFjBhiNN5KmdscG",
  "key39": "5MfyksTZUu9MxMnyX1zetroLhDR7wJ94P7tr1HA8JFqRXSL7MxYyT74gDde3kYhz9WtEaXiq3F6BxhsTNMcmDTkU",
  "key40": "4tvL3EK4RD7FPRH6LgqS4CmiaTHnTCrhHQPDKb7QPtVRJsyDmsxdGTf39twZsJs9zw79kuUC4h34Ymoadyfkko1i",
  "key41": "3GBRNytfuSEZESjAbJ8kTB8y2xKzBMs7nidi9rxRH3BZM2HVEb963F1CL12YJWscMr4j34o1AwDLNnvAKtvaK243",
  "key42": "dF93gKd131tgehcRDQ3NhsubS9sh3Wm6ipMt7HWp9iMHQJ7kGfCLvKYPtQmB4G4AxvCcmq9UvLQQeBPdAb1XzRK",
  "key43": "2PkRgwixEwfYW2NSWkJAnpmownvGhfGoJZ83QkK6ahXWJSZgfGnvLsrwPBZRdVFEjjBN3R6gUdsm368wH8mDGaWQ",
  "key44": "59LE2vCmEjq398rNJMJZjVKvd4qXDnwRe1tEvqueUhSFZjNcmVTfC8HVZB3YhqDZQwUCn2v12P2hLaynBHHoHAfF"
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
