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
    "64a6cRMqGTQpFBzzZ4KgpM7PgQ6maY39N4wCJyca8NMsRy1aL8kX3gm5tyBsjTiFubrPzmzHkxQAvDF8dpez8VsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52swPkEKQYL5rCzQSSm5fvGXqsZaRiz479oMQn8c7MxQ8oGdJF36pBpg2aBrj7brzxtDtLZoSUbNEhE1EaPhzxpX",
  "key1": "62fziC2tLmFEcxLsK8Q5XPw7VpoSEfYDa9xrfMw8erjgFpiAdNPBCzeyUW8vtuRAK1swgoQq9TnG8G2trztRpJE2",
  "key2": "5XfvikYBqNaMkJQQGLDFpcykj4jxcfFiFBXwjmFwLjug5F5K5dyZLhuhX1yW6mvpg98DDAAkXQi6NUj1HT7WCLdp",
  "key3": "JovJ36T4osC7M9F75wbeC4FXyK23BpR1rRFdHUgdqvtv7QyzYVgXRX5PFXjKapEQgPFSX9JnSB3rxhTscoDNTWr",
  "key4": "9wcepSaJyQeuPNMekNmbuLKvwJ231r8hyin82H9N3pvZFtdHEvJTX3UyCzaRmJtEzQgkF1DTxHEfidc7WTE9NoB",
  "key5": "43CJtu6MBnyiYt3HtFBrKRmbehMN7DWtmJPMKk4cyMJmd9isrqPmep3kvMaxtTr43kytpq2jnsBZm9BfvG24ioV6",
  "key6": "4Ssbd7ycfMNRBiA6syjjRfGiHKYufnRGvZb5jXn7crz23UqmsvbsGJrSHYQvbj8NsxMGyeN18qFjovNrREfFhYzg",
  "key7": "3BMBL3XeQxXc5nCF1XshYZvaDejnqwxaUX7MwCmAgV3xs25KXmWjfoDyc8PmnkPG2YXEcxo14WagK4Rt3ZB9SKsG",
  "key8": "4joUDeszLUkEq7ZpTrVUDip6ZchWLYbn1ezhsgQnD2P7q98WT4KeYKD5SxZWjsFJp9QxNYszsmVD2ZdWdUZsJg4M",
  "key9": "4NJx18SRBw9ekePsdwSFZ9XUGaby1gQQvFEu5GeDyvnZnL8NAdcbhMwj4odkk5qtew9bv5W6RM8z3dsfiKN3947p",
  "key10": "E5sajZr2sKN9nqsEhcqwfmWt26a88vaphZoisKr9rd5FeN8SmeqN4ixcVY5wP7HNgrcA9kZ4b5varNRceRytc8M",
  "key11": "5oDegkHG83frUMyKWyzaGQW8Yd6JQa7CUnwAYztEEQNVSPmMhAzoE7DWREgErXzomfAicF41cNMAKFDmo7UhGosQ",
  "key12": "2yVk6FTTbWGeAonqax3DU52hDmv4ne9ZpbC5naznui3TF3DN4DmYGLV9HTgWJ9tApfdyoXN3sDzT6bkdUMKZrfY9",
  "key13": "2xhhnN4qwG5Fpznb6FMhdmJpEAxe6UG9JJgtVA46e16txyK4PEPdoDwsRfdL2yTFLL7CPuRBQ7iteb1Ptq8jPjGz",
  "key14": "3GYmdQDa7P3HnfChm63kLxFnWPPFWgy2mHdoBLDdgLt2S8TJJJdMV3C15bZLhtp456PrqXudDnwAbW4eh1j5vF7",
  "key15": "D7hyUR3fJgLqijfrqLgc9Fnts3MuLed7yWNVoPGTbPjAz1HwJADYZJM7jx19Xxy3owsVc2BuLrSaoCXpgZc9USA",
  "key16": "5BLSDnuSFcDdSoovf9FuRLTb4SGPEtvDfcfNGM4KPwYJh32Fa3F21t6FJrGkGZkNjrjDo7h6pLQYiN7HVCrGN4Nk",
  "key17": "3weXkD1tbJiubZ88UxhfePs8RtrkB2Jwrcjmug3v5hLWt8NbS4a3Docp3WE5Z5tjNRV2YBft1akfnbCupRrtCidW",
  "key18": "5J858qo8wBRqyEtLh7SWAQJF9ELFS1YN2yjWEZKF3fMk6xomknUDexEkmVa7VpJR7XoHWemwAiFWiSDfcaK1MDrw",
  "key19": "Groum9twZQcVD5L5p9HjWWM9abmc4uFa7MWE6DUoGaYgy9TZp2PJ2DWPJ524dNXEAn7m4s5ViSsgZN9BJjnd3XN",
  "key20": "3uTis1NAZGid4AxkiFQtHBoRZ4TWKkScPjG4LTVbJf2yg7KUtc4waRkf4uVW2mMU6u6MpAAsMmR7UgiaU4RFG5xc",
  "key21": "5sjq7D3cVdy33abCHS5tD7NQMhaijdZxu3eDrztxBt5KDVhXcqe7QmtXswQVCMe7KGf3iqUtuLTAKBoTbSMyzMd1",
  "key22": "66sL7wbwJvTRudUcZULXbhmpcadgwopQiD4aEzdtPoJJzdChXeLoaLCt6tipQwkyPfooPYNZwWSFcWxC4NfDhcQX",
  "key23": "5jsyAJkeaUHQNtjRoUnbP2AGQUkZ16Sn8uvZBTww1Dnrq6fdpghfAQciafEKt6xEngKR9NsprygexBfS3JctXRW7",
  "key24": "2vrUDbQTiDRAVpgRAyLnPCMkfqTcyRGHp3Th9hRHdVp3eoeBVJB8egQQyrz8EXvBt9obFBzy4iiJsrcfRt71YCm8",
  "key25": "2xmJWoUZzDj91foXtszu4jAei4p837ikrznnT9U7jcKUMskQnWiubn8LzwNzgB8dzhFUgBRVCv3rRuJhHkUKJ8xD",
  "key26": "2Mwadji1QC6pgsD2Pdm9yKivC7bvJLwqEhNwMu5aFUTaYfriLRYcmNfapDexMrTLVqNyM4mHRHomNaGFYni4ARUi",
  "key27": "mUkCYrVtXomGTx8jLppb99RnYmjD1RH5tomk6Xx63uxMmfKcRacbReDGvLTyda44o323ZbFKoha36MoEY1qj468",
  "key28": "3sLqXoWNcbjroTir7kjb1oNE4FeQEnehyL3XV9TSd33tLNPghqCAq9mm4cNvFjXGjmLb29vh79ezkPkR8Mcv8bLT",
  "key29": "2Z9g16CZPCd1RxzhBcDXMxbfquXRSSVq5MNRWccCd6qjreN4HU9CUNrYtHX389hvThdJGNXk5Ayp2VhwMJZkBcmL",
  "key30": "5pDEZH9nE4Tm11xcDnEFf449WsWhtGWkgrHFrhqkd5SRERZbKy6uriqS6S6sqfz266iH5vU87EHg4PF4unxVdFff"
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
