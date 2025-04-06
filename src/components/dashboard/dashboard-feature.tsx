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
    "4BjS7BV8RkdZGQmT8c3NPGegakStHeR5cNCKXur6nNJ9bMM4mSekE2vQWabGxDZwcaoqA966ex4xdjHgFHrXp8M2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K76dhFRyPbf1hLtkFJdntHJhtbpSAqtKaUydjqSUynUJnTmfx5Rqt2beVvPzyovVYDH3CQPsNmR8B2dwSVrybwR",
  "key1": "267d5UHCgbzsMhhe1tEFhZK9vG7KNBY48KD53c1cQcQCcEquBTSWLYhNUH6xNmk8BSctFhL3R1px4B7QaYUH6XhR",
  "key2": "2hDDxjfzUCESSyDDYSobGWaQZNP9PStQS6tD8d8RvmfrHxsLmUfpGDVcR5f9HuzQck9ZPfTY8r5rzcaCPgkDuD19",
  "key3": "3YQuXuf4QRD8mrGajeD9tb8wFmzxS8HpuFVYoB5rTqdV9uSbbKv32oE8S3AH1qSzNFDefg45xPzNdvch4Da1XFAZ",
  "key4": "2T7uSsB41twmgTeugYb4YXMWTkNA6HnuHJtBPFyxWpywhyZqfjFMY6djcEZHj21BqyN6rLFDtTTgkDhLAsrCKpnA",
  "key5": "4Tgo8rUKLogDEc6sJuazrL2ZfmTjykPvTxdVnHrQNEUL3dCc37WS3WsD4AGQdvPLnCLzze72BJp3eBGUqJ4gdPZd",
  "key6": "4EChwv4w5VVn8wbekiZWY4KLX6XoyH3od9VGdDSV4ZRw2mJippWUsyjWHmv6pk28TCmeqdz3QXnTgCS4CLcfssZS",
  "key7": "5QjyvviZRMKkeficGwP8CU6GMMLabPutmt5mdDYWJ7u6pjWPfCyWHLJvAKVYDgEJnQmQM986nM69PjKJFMDuwZCq",
  "key8": "4yMLtQZ9MJuyrwVWwXE6TeVKX7FrZQbCHVMgyoAc2zLm2A61nD1Hc5oBjgxG4wXaLPMDyGiTuUFxd3KkCLPQxP2W",
  "key9": "2LZTLHobKNbGyt3jFjiaP9VfYBjhuJ5o2xDEMH9wptpGrQMuXpGiYeDrFkmusAnS3sHUSvqQW11V5DZkbVoS544U",
  "key10": "4RyLJXkSjTJ2pnufuQ4BJZmuHb6mEU271zAezUSAHUNXFjkG58QAm91Zt2yh1JuFyMnyxD7mMTigzmgUhRBWF4z1",
  "key11": "2KoLkCV5mQ8NDZ64Wp1erm9aWPM5sLr9rVwys4znYcViYJB7L9q9A2uW4EDgvsuiXY5CeRma8dY6DDYFhxFMZxxX",
  "key12": "5UNQRVeMgYvSEEheuHQJCWZaNL8nps7vdSD22wFYoa1TgdBPcWvdqZwQaSQH7A5bacLUwcNhaa7xucqE9sozHB8d",
  "key13": "3BwwAukQooPBuUcEh4Zb4KcZoFxEsKJ6H9ZJN3D3ZEKtXRSH8JnLNYv9hbEwM1fVrHvRDxywMAn77n6AYNNrXLBj",
  "key14": "M9aKxVHbCaUrLLE1Ue5TsokHHPH8Dxm2MpPnjNeqw5bKDy6KsTrUJMDK7rf8eqUM9BPVj357629iJoD3aCdxi1h",
  "key15": "1NaAxjCm2fFasKhn7SBYZhr32QD7x2qELyuaUgsK3iKxCoBAHDTCJQAs5enLWxgHUg2r14maqmHQhQ8QLrHokXs",
  "key16": "5Q7bwtjmwMhHG2Mk1fRqBtDYJU33BSja3cd8CnBVTsx4XVRrCyXZ6kqpryAK3kxH3BDyUH6vz2VbPCjyt9Ld1Kjg",
  "key17": "4eRUt2yFa24f8xBTZvPtyKynHcPbQKTtMrnArCAMQvfaF5vjzJR8Usg5t5shTxgZThh85rD1BBdzYest2j6JJwfS",
  "key18": "2kwe5rsoartmE19TVQ8gztdJLgP2jBsVBE9U95SJqG1bKqRmFBBVb6gM2fg6RkRatH3NN8Prb1mJhPhWCf4R2kLv",
  "key19": "47KuyEvF3DBrzNjADpxdf4RtDE9Z1JzcSTheunme336BcEUch17MC6XmhzmxoZaPXreVLAogtgKnaEjwtNWWhxPA",
  "key20": "3rqBgVxohwNZkKxpHiZSedKkC2TLz8NiiqQYMYS1eatQqPdYEcwwrNkNi9kaj6FvrYhznZKiX4sSKXHwZ8r8gfyc",
  "key21": "4bGPTsGV14KmvmETFc8y5DLDAnAKuDtSkeePbFXtpXt4JVVukJKdUQMcBcnFRbBSYSZuJdGPfVXQwupVoHZs4eYW",
  "key22": "5bKdYX2MKxH6i6bfLcFTERkAxn9CXrusFC3byLwV8iTckfTogHaeT4wzVv5DB2aDAw32Tn13E73rFS5sMdTB9hmn",
  "key23": "4FSLa5g5bHESxck8iqp9RWanEt81Jna41SzgnXWNoE6dicCLqLj3YJ1FEhvEhs7BdLUuSwzeK4BNMrb6RLviuTqr",
  "key24": "27EYuG9KAeBWUw3BnddQEDcvSHuBVVdvDMMxwZGmcwogPrtCSjH3p3FUgqBjfgdwojMDTsRunJdG2MPHvdjy4FZA",
  "key25": "2DKkGVmf6smwwpaeHrrrkHjTZnxGUNPcqHy3PEexexCCreoMBFhjJr5pwzFSg22fHeBbTAtfmKPdo1aWScYxBFBA"
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
