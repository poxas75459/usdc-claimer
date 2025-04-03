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
    "3hUrS1MLYb44cXGon6bcAryBUu6CStDrWZZtNFxNCmEkT38gr7srdvhnqkbPAyJPu6YunJasda99FPfCzcrvkVrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r79K7Gq8WUi2y1uApGUhmEFwHjfjesJXk4dGyUdxqT6qgwZAu4sbtZb6weFFp6S2FzbCdGecPgMNga15x4v8V26",
  "key1": "3QUFzUJJfKCW2RQwNhwAWnutKB9cUURE7buv9dXQa7k3nHoBdtyoUJFeoMt3rr8rp13Z5we7NGu7ZAknSX8xonTT",
  "key2": "4oReQG2JnL8npRMt7TRUCfAt2HLdKdoUva5RxJs3uh7HshUJQ2dsQygknvKipxdfp1NaTQdHUsRxXYDs8nYJpaMa",
  "key3": "JPjuLSPNm7RRA9poy4iEaHxHpdwySW8bqdrGcYjaiUrM1bzENUZd9DfZjXtq58rBdi3mRUJx6DVwYqAFLNQHYFw",
  "key4": "4SWkLXDpkKVdZTLaYji7dXGrGnEPVTMr6y5Smp4rWr8V2T3aEoBburnfwSntYyVBRpZ43ELd49StT2Wss28e7JA7",
  "key5": "FzoNVnQbN93vombdEQtg9GYH2KUEB47h3v5pfJk5NyzJpuemwciFbcsxdUg2XDiWUr63XsVdZ4DPegKQky3bWsd",
  "key6": "Jv9HEyKqPvZupcbhCXufHr1aZFy3vTLiH2afMo4VDB4L2PgB63umanaJJWjhcQ3qEMacmMyc7A4TNTE6sjCgy3x",
  "key7": "5bUapYkD94G8zc9gJ39TJUFaN1dRCAAGBgUMCM2tcE7JbDWtiYxd8jztsg96daEhGav14AxAi3YGYRfhY9GWxWzL",
  "key8": "5eFYqqNBKaaQ8Yt6yqtzxhPEoVJ44Tuo48Y32MrTp1Z6ydbgCyQX81oSQq7vgzpcrsxZTsb6Y8iU84d3cgcf9ZBR",
  "key9": "3YvvP1aWdHEUnX1tSJZn9PjRok72RuPkve2fPT9NmNQzmsQwbbsT9hq6wdQvMjKL5LXc7cnYQ5ZFD3McWhTF91MQ",
  "key10": "LUxTqvWESDbheYNJPRy9W17S7FPmRHqfx1hvTWhUSF32ksPzGJhucJuGcJ9ZMNmS1DaXzroRkpt23MWjHLSrbS9",
  "key11": "ke4V5ER8516PQUynsKeukqQHtAnB3uAxFngpDuj6RssZXvwKwfK7FMdNxY7b5mRNJRArzHQxnxsraPUQ7PQAvJQ",
  "key12": "5ExLb8k5B7X1C5NJgLaD6PZe7HmuuZEKiX182Zt9XNhRM34Fu1vNm1Df2pvotUmD3wT9PKh6Q3jjX8nXP4S9TkSx",
  "key13": "2RKcPAqp3BpmUY44NJVSgCVoYKRPKAdVUdTqgLLhJ5uvw1ASLB8v13XZpbeeoBwNencANYcFppdqLehjVkCUVPk6",
  "key14": "38xDbDtrQ3DYqCgWRLdhb92FKG8iytD2NAP9LZGT7uAjLpmD3SEN3fTFMzT5baFrZWtSsFsw8TxvQF5MmQd7BbMD",
  "key15": "3E3m5rjDqkfTUZsZEAqiqevHk2UWWLyHnESHthmQNuWwruMQM5Subd6KemAaYAeYXVT3Kn4nNM7fbEt1MfxK2Adf",
  "key16": "51qcFcHA8f98rnjkH11ouY6SZufrZh8paGZ9pU6UyYADTT5BRDzfP7yyjAVci3dULipU4GL51mr3oKcoHSUuPT87",
  "key17": "5HFz6mCpksvXyuS3fXJ7SPRhKSuoP3xsrUyGJ2ra8ue1hrBrxrk9nTRuUeHztorUDnfL562UCQ78u5BHb3KYUb5L",
  "key18": "28E52daTMJuus8EQQ7quAkUhF8oadG8qLdfZSyPEe8AVW3wb7vrUKaKu8YMZ75FtstvRZcYqfTjunpgnAdV7v1tn",
  "key19": "5Dv3kEVB4NYRSrUywhk57qH4AgDoVdbH2PrWwQFuoif5S1zvGZzPpYng1Cjx3K4VQKs2RrcuG6fvjZFP3NYySsiz",
  "key20": "4APDKmBaSLW9HkDLCp5y3nSmPdTcmj3kjukydzMFBkzue2ptDiRJy7CgFo2qisTWry83vhvPkQSkeNyxLcm6Katn",
  "key21": "3G6jC1i6dvdgDwfSu7sxdyznzLpptiTCxNK3qpUhVfUhzs1aohqLmDmz59qvH7XgsbPewP9Kj8TSE18KThXhY3Yh",
  "key22": "5uTXQddEb7oUAmkvU932uNWT5QWgheLs3ZSaNmRMRjSNEmrN9ZKoQy9QDscDUnwWHawHL7DUzfxxBYccKBVasqWp",
  "key23": "5reGajcFqbQeAdz25mkoPxDYMznhhyLgwWJ3spzz1uCyBT7yYwEzX23qeffTTTfj1Waeryaf5kA74Ensnpdar4GW",
  "key24": "28ApcGb8t8MSFfHZsqnCUmPnmpHGyaSo8ag7Makkf7XJvDRd66ZefjFALUPrsxob7d1s7AwW6L1ZTZ2cwQUWFwVc",
  "key25": "2tFGGLQyEe1RZmQ5zKR8sseoad2F93iJuqGkKJbm9Hv3YnpYFfHKhsFbYKQXkSPRm654e3zoWqwAyxxchfrJEZMd"
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
