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
    "3uXHcX2nibfX78YBDRahed5iWAU51p5ngPXcZFxR8mAkeZEbtzMFQyeiSECeQGqgT5msRVcJeKY1tqmHjphREfue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aN1YMXNXEL1DozCqoE17muCHEAcLZzbuNEBy3dApUzzfAzocXfV6SGnkqxUTWtE75cSg6c3rtaJYGjJAvzoaiNT",
  "key1": "7YuxsiNziBY9gLNCw96EyqRmtGXvuLDP7ze2AaeDR9ww5ew5nuS9XbvkFBZ8U7kkptGGnoZfwpuEDuWEcRq5Z5D",
  "key2": "Xuop3c3geLVqMQ1KczzauMGaoea61fgEZw4KBxXjFHjYs7tqkgJ2KazYZ6h9ptQ5Ke5yTX9qG3UvkDjVVwZUMCA",
  "key3": "3Cxwi6XutfZfAiX6C7iWWS61SMdg4FLPRCSUzyNBK2guxM5BWC7eLg2MZ8q2z3dmVUiN3Duuju9FRXFybzrNq5pe",
  "key4": "5h95u1ikpdf2P9zAoJaYtW4vvERWYoseC9NcR8Fv2hGeunWW6H9BJiV4eCCkW6y69hxwyiWGuSiuRaSJVfzouAm2",
  "key5": "3M5WPMJG9jxGSKNAkRaMrxADZ3XPB7b6Jjx4FmZh74gWtYeuH1PWtU7MtvxZZVbNXEz635LxDuTmK2sqkSzC5Sdr",
  "key6": "3LbxMmKbssy4SdHFRdqZ43GLtVemA1hxstHkikK8BAZdJcVMxiJyuPBKx1xZ8pSQNR7vovGzbtLBsUCXif8Q1knh",
  "key7": "5ax6KAJSzqsyTiT8eCfk6aF6NU58H3TGJ6ENYe8umd1Hw8GoPARvq5DYzobbBZBpS5UEBoxB2qjRy7vLK73vUX3r",
  "key8": "r18ucqgLtHMgPiuWCHuo3R5VmXFuvt28oq43xSZGeLjQjE7vF7o62nESuuhbfe7u79ZtCuJEZRqmetJ4UPj6Btz",
  "key9": "3w7xXMz5h3JdiVETSctKrYi6JqZo7NPr7Lhwk3tz3hdGnoTXhS2TTeaK1WVRf7y4NMxzDgDGyP2HzbKqQsWTGTtr",
  "key10": "3QSigntEvDu6yc7E7Xy1gzzfgw1dFUnTwMudUacqGaSHcKiCcGi62Dr4neu4rfUnJfC9cHzwNMy7nZxosTeJPf5B",
  "key11": "667xhn6aC2pW54oUURyeEVUySC19xzLy84AMUB3ZiUe94fePs2EH6Xkdq4pYCiSTiDuu5S9Tbo42XQLBajCxbVka",
  "key12": "32cPAmQj43rHNYpxe9VZsjxVYBVevQn1QQw9za5uR8HfUNAF6PRsgqtn42dPBFy9TmtQfwvn9TGWDF9kBiEh9iMT",
  "key13": "2CAwuxowPxnuwfdsz4U9NYrDi4puLxQNwc3bgoXcENREz5STYFkDUfDRNCnduNpWPQgDQm6h73quAeui1Avn89hV",
  "key14": "TmrUDrLcRcWKKpjYtsNK6kqe1yfbRWTR7HUYJkNWEyPfuE2ErgiGEbMrDi8W1BSnHuYxcP4m8ngCDEopWpm22iD",
  "key15": "4b6QWzUp66LSP7QkfKP9uiFRz8ZfMzin3uHLq7TTFdfxoSH4MLFLTSq1sQuxS7dnaA1d9LQhR6kkwf7iGGY8Y2Ed",
  "key16": "4SgFQjh8KbA4qYz8DwQqo47TdQWGg9goviXySBYwmMvu8taeVnXoE5drT4QHVabRCovyd9ZipvUGrb6NnqSmjU2z",
  "key17": "2PaC7W8V64FnGS2cKj2JS582ZmQkkAV8WA94XG4fEjdzAZegJtuvqYiDM2e1SzUCCNYAYCX4H6NzhBcJpsLiEjk1",
  "key18": "2yh7jiKx5rB6beSzyKjzes4kWY7vLEMntqmPq8KmzqaTz4Xqw6gEmSMDqtDVNpbSJt1u2yrAqTNrm67Cm4nmsvig",
  "key19": "bYTYtt6DDY3gPTXfCFskA8WWt2kSKqiDr5VsvZsrDEepeexA6Q6LwdfoSMetsRTaSw3KUePDTo7y9HQtvUKMwnV",
  "key20": "2xDZHxEbNEBR21T1EnhpmhNtHomoccq5PCL2NfxZpP8XHxfobNespKcEFTE1o16YBR5ZMXNHufYFdpyry7MFaxKw",
  "key21": "4Wq1wZYphZ8ku2pDcbQpT2PyKMSDjg53TxDfk8sYnQgjzr6JRijrTo3hvXNrrhnC1RQDcYmpuqf95kk5KD1Qnstn",
  "key22": "5dpYajgxBvS5XQPh2ewJ8fnHbbfY1LHUSputsmGk5FuWV55eLR2j5oB9Xaedvg5zumVBtAfPL4FCPrU35FGWbGEP",
  "key23": "2r4g74YXzgoAbcghrvErVcak5fiBg7cPU4xyeTcLp8JGCUVfbhNdF84wvdqXoeNGKV9soewKNnBpi4VsyhG9iRxM",
  "key24": "5iFDMPxgT9SKAGSq3mGvhLgFVdoLfpqag4rbeSDixNaSR1gPD4KWwRkrMSHY1NTq9psicVMLiaGzjAwjmLrYSyfK"
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
