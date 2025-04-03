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
    "5AfbAPrAtfQfGU4J79J5e8JYWQXrESactD3G3znXB3bgpQ2icpdaaMzhknMbijvkuV6dqfmZNYLw5kb7iUtwPHyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RHmMg8ZtPt5rfPKNvrdv9FfQxd6F5144YF2oWrbRU72Q2syDLTASLEpyeNAWAiNdk5EBy7wT9G4bgtWAMWrRKE",
  "key1": "LgRZKzPEhawvv3jNRNjKBQXnhGftJCPCHE3QHT4LWTKHN9srx669VvBECivz8cjYnqEL3ahb7uhGYWvBBBqEkKY",
  "key2": "4koZjhPMKACpozoGosxCNcbwGeypuLXEZo8wSL7QUdtmqK7tfaWNyhks8QrRcWjkNN1uDL4GbGVhXdfutxM8C2co",
  "key3": "6tRcK8uZ7u8ucpAMef3ogv1C7ycXr6F5rfoCVE3KWcStEaYpo6Wa2WjGrEJecGbbEVA4ZQk1RMJr2SbdAbn3Edx",
  "key4": "3XH798f58EkT43kTEueHXuMgfTvDKYhEZLErJjHrnHuFB8PzozGK3rpM7jbowqwqvhLF1Qz2VEGFYc1ZNdRwDYPX",
  "key5": "3poeByerTDexn1u71XWXMeG5NhNXLEm87aTdevDZ23XJ47VvHqAWgpatFVZk5aFSL5SFe9EsuHaxZMjqjTZeVtjS",
  "key6": "4rqJoa35ecCb5V6UDv69hCSJq1S4j4Cw5B4jCHGAry7sPY7wUe4da4HqbyeEsfsE3kLZKDRzksKPBCaVHN3mMVrz",
  "key7": "2t1BtD68bu945YiXLMcrf5TvrEd8w9ZWA2Y7Q2Pi1nkFUq1ghfLow4jNuqHPkJSAsvJ87zUSZ8vakjkoAtbuS4AF",
  "key8": "23jHzAkf269sr9qqT2SjzM8u3TS8vDXpS9rWEj279SEcMzEfQ1a5paRNQr9k5atsR1keRZtNL2U3bPPDqJvbkK59",
  "key9": "52UNvUjDuoMm6yidrRQB6yFFJditHDaU7janeiyeLA5pADxb6U57W5Mh46ZXj2MwimXXpjh5oXpgUifBkBCEADkx",
  "key10": "GZW9cRsLLhW7z7cdw5ctSBpS2ALTEo1Lr1QUhAzzQDnoRadpEkyega3n8QKCX4wm7kC92nqBH4zDHAuULqjRrGZ",
  "key11": "2Vvcu2N4VH9gDzRbuezcjDu8h51At565d1q6QiRwr7Uh1k7EQVbLD8xL6YeUtQbSjTYMugMn6dXDBeg2gUW1YBE",
  "key12": "zot88stGf4ieAWaNfKd28XJ23CChkSKJyHoBFqdMUBEmzrsdnJofw4hwtdK1hswVaQ6kr5hAW4i5yeZd3rAXD9x",
  "key13": "5JNdL6kn1hdz32TRgesTXhJ4hm3VYEGJSy2QQvksQFoYVKkKVoNkFWa6dzPiSU1ToJqHzVVatVE9vPmtT3Sm4tCu",
  "key14": "3hrcJzq6XkBghfRoNpbiZgaeMwjdjBGWoaRaJj6NvLkWyK18hHqZx2xQH3KMqW4dAYCK84rhmTTg1zxAdgrbQxg7",
  "key15": "5ZHj8Tk7S3yFz7cVj4Z4ARzyELU1HYabRbe2gmmHKbPyY3DT3wuPPzYSB3JuDuVE8n7pfgeqUnFAoPsvzh4tR9re",
  "key16": "3LiejGhtWa8CSobRKnutzXRL4LvFofdPxBXLmSvgL97cB8YT38iT2TBq1rgZri5C6arnTqPWTTNCrMgPiEpZiJA8",
  "key17": "52iqvNzXUdYxsngUcXUVAndNXYDAv5tRem1xQTEJ6Yy69HZ7SvQ9xWZL9GqM7itWWkGWmfA1WuYC7NoejiQAWTH5",
  "key18": "BXT3JY71mzwfrVLTSgWj6gY4qjh9ZSzAeQgjGeuhR1N275ChUED6v2e6BpnU8z9TMjbUFFYxYLvtqiEjQ2EFgD9",
  "key19": "4fp7odZh5YGGFQnyr6JuTkhBJvpetgDG4v3HXvEmeRR4PJmjsT8VQQpEkTUR3F1hbkReebnZM3G9vX3GSbnx2a5x",
  "key20": "32vp6sGfb2ExjRYYde684HsQawZj3cLLf6LhoXPb9FxCToFPkB7q416MBvDfv23u1jQYkRUpWxAsqhSQsS2FpdbG",
  "key21": "5JuMtok6BDNmESi3ytfRmUQSc1qBWNa9xVbqCMojejq1CFVebQsB8YtzjChbUjCdTd1CdvW2uVrWZF5dWddAybDZ",
  "key22": "4S879JxLmU8jy7Xs9rUELqEcrck818sndCSKLuHvtWSiSQJLLEx115LNajCV8BUzeE8peVmcT4L6aoBEgVoVk14E",
  "key23": "67SeHYHugb74aRF5U4L6t2o1YZubpiEDuFgNDpeQvYvR4kXvvCUGuCY36ZcFAZphbmLU8oQwoB9Y1XKtH8BXfF67",
  "key24": "5Kyfq4ePQNAyvSKR33LEdzrRZWSJ9geCQpnuUdaeopVRJFaBCaTvmhFVY7qgRajriKgbqtweZJgbLuPx4FRJ3wR5",
  "key25": "3RJE5PxmS2bmxrjrfHmhRm42sWNGZYAbRLeGpvk1RWoM6Pz29C5phRq5Z3UT4DLf6fYVef25XdAQESZibgf3sEXY",
  "key26": "3ADTovY7Mtih1rgYWAZ841YvGKYX9YhXH9dLRJL1zP9cJnx71dnGv2ajt42ENmt2jsqw3Bt87QKAR4wXgaC7RqAd",
  "key27": "5t67aD3VQWYNHdDsasixux4L5CGfsnytqCx55ae8HtkCConnSSHaX8R8pFKRFDS18ctjqTkoJWYWeHK7jZDPhEvt",
  "key28": "32xuAM56BDySTSkdPcNvdxkhFWuH9zvWmu5qXa7QaV7pA41TeUsc4YwGPKWQ863rA66mkvzdrx1mZKocjHWTMVRi",
  "key29": "364fzfYvCGe7kcmSvFjRzHd14p8WdKKPiLXDMq5GAjzHHX1rrrZ7UVPXVsv1Wm3TxAkn7UdNfqsJSSumYLy2W8bV",
  "key30": "22sUG4vM284DKPyLzEgn4s4Ugok3DBsoKyeWLExetYGPA2k5GFQvYk2kyg12CQeEjdX7JJ2j1ySZs7p6g1i7RXBr",
  "key31": "2tVkU3EnSictofvAt22HYz6GJ5Fzkct6mLehiwV1Jn8FUyebAo8RvQcMGyGtQHDdQwn221v3qWmTNUafRM2pYzT6"
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
