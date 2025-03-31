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
    "9N5Aj8taNWGxDbf7hXbTGKfFQtwAJ6Ry9Er1o469EfqZeKUMrhhnC5yRPksyxSCMAMnfDBvJNZVChiKmbkAqsyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xeEPAvfazNBsimKweinzpbGWyThJpWqmheesCMSSamfJpejxv6wXP6K7QeZKBU6z4vEx3PmDDmyvaSVpPHHwkwS",
  "key1": "4kaQdzc2J9kw27zLqZ5DqUxukVgXt3h6PXc4rGFyBdxNXz8Zdc4UGFMwrxeFr73SDxPE8Z5gWaL3LTxJ22Bi3a2k",
  "key2": "abDGVFRacVUfrwjjRMsiaWffFxH25uurvWjj6VgaUCZvYokWRbBczaUQM8jA5TECDXn4XFTTnbmP6qmfizQaJgb",
  "key3": "3TNxh9skaq9u9oeoRTEQ9EW6ALkgb4ME12foU6QNdhiCCfWVmEKPmWW5BoBKNYYMtErhoNS7yeMe4JLoxFGoNXgc",
  "key4": "3Ys4eVr8rrhrQyETbFSC9WD1XtzBbCLyLUzQLZh2qq519cpUF1hTUV7EcJxCzLyFTiqrMofzex2eWajNtsJy8mWk",
  "key5": "3ZexX7rm9NPLXNsYZUzPy6XyxPAyZ1Xc4khDZREnBSb5PbMBW527YXVVv2NM2NKyjSqFUrpfDapoxp7KKz2xZDUS",
  "key6": "535Z9VCTuqyCgaBAvrVYZxdWXAUoVdmb5rkRz1utwCqJP463Cg8GGX7YiWwWCSXmKnb3XsdKBVspQpCzftqFgc5X",
  "key7": "4PYeSqAscSDZGAwPxX13Rr1nTBx7DuozWmVEnmYSZDgy337HqeXdu2FtLqPp7huuus6Ks8gCEM5rsmN8GtSe1Rqw",
  "key8": "yh8LgTjDgnFWjaKgaN1oUPokVHxiKwq8gg18AFmeLXkroxPfjGvxZreErWW2RtxgFKHS6QeciWaBo5g555wuDKr",
  "key9": "2dExSYFWGeL4h8LokaJuEz2BMLQmhqZtXDmtaRibw6sm8MtzfPPfG1skY4Wg7rMLxfgFQPEup4kMZt2DStRAoRRM",
  "key10": "4yzykYipDmjxc6PtEbxNPt81PuZth5EtYEsbrkYrBhJRQCLeV9mvCn5zgRiszaus2wgQjFADP6hCiZsQjkYrC27k",
  "key11": "eAG2vetov7ep25ASjX4Rb29KcuG9194J5NVjehkWes4tqEbSaYUd6f1SseVCCvG24d2ANU6GuERzZ9FGHBbzoof",
  "key12": "2Z6tJnH5gZZQKSGUP7HhQFLNZz9v34CC8ktJK3p9Seg7qgXUZAdgvWr7LXpdt7S221gSMhyNEKtCmf52jnNWYUCc",
  "key13": "4P6g79HDdrpdTjLCbhiHBXDmgtC2LixBsvjKDVwNLEEf4rgHRh2ofFtMxoAaKTwc7j1cyctfNEm5FSjfo55YSKdZ",
  "key14": "2xQBqnr7untr619w6DKK8PSc4KnygyeDSV6ERFQzEL6tM2b7p53reQSLgp8KGs3eJ3XQu9H5yLv4BmVfUi6VWQmP",
  "key15": "UyJkT45Cg1XD6M2pCY4J342WWFBawM7JC2FH6tFwHTMToAWwU1dcqrGzWWxCKuSrVtFpFXQg6sJAV9tbHTSs1JQ",
  "key16": "66EpDcSkTMPrzjjkiWojTf2ps8mZLWaqjnLeZB2RVF8Si5BdPa9CDSZsVzTHZSjqnSAzYB6btrU9yGn59ZRhT1m9",
  "key17": "3jsUpUYxFaUG4SskJT38Uoxu2AUZ6tdk4hTvhtLRMiZ2vA2REMNb7GRgr2X6tLZe6yauBVU95Ljps7PZJ9hA29DU",
  "key18": "3bAfKRkq115tW4J179a2ZxWtv4d651AwV3nq69bVCBy2sKGpx6sAZSY5vrDDKwMKe86Jb28ktXEatELbNaukbtQG",
  "key19": "3kguf8z21WSPP5EtG3eCuwr41ypBBpGN17q4PvoXf4pbKLFCdNgqWtjHhw8r6QEP66wahRAGs8tyd2nPwxM3V2nr",
  "key20": "3PToxpcnJ3eZzwbim6aGXrRr8XgLHpG9m53wt8A6BpwNb2khMxdopBU4p2Hwm1BYJWN4Acm4QSZ3JNJGCXox2aWA",
  "key21": "NiFtMZUrSgMMSJNiNE2GgqG28Rqq9dMfnN6BKXpXpSLnMnJk1hAcg4pe2HzkW5GVen8UtjueDWzvvesKuVf4MQP",
  "key22": "2FszuCcVMxGSsVaKj9bwf6x3tvJ8PPohTM3iAcGBRPyxMzjkysGwyR15XpKihYFHGBHmHquyy2ogwsnsMSk8fHbL",
  "key23": "5GYocUu2GANGJSd9ofW7UZbX3Q8EmSeLBpaQWTTrhCouuV3Kfs5k5fznMMzXdTKuyiorUBtj5bsQ3E8PQgndzsZb",
  "key24": "nci1DrGW6uYNWefhcYqeLyv3TmyKCnZx1RUypre7x72zNPKCYfdjEGZgvkYvYazCDRStuVEnGtPfppAtajrHCt5",
  "key25": "2vamh1FHbuPB9Gh2c6TCdZf2AJTwxkjZsqS6YZScaWQdYtcCzTbVH8SAQhnkC38ZiqDmDdo5kJAw6NidqFsaQc8B",
  "key26": "5j7wVjRCrW2di3wee8quQn6ALtFhGJ6Aw5L8aEL124XvoL1wEK9EwZJ2M9RBPKcB8EoPENMXrYNYxrMdUtyBACY1",
  "key27": "2PogpwVsNsLUxJoXVQD2CjZfbAwnb4QTxnqkEksTHLYj3Qqr4FGGQQTMsRc71wx3eTxyd96CBme3zDHTiHu7sbdo",
  "key28": "4nmLP5Mb8GdLSA7Y3nprxS1sbT7yX3GmyP2MtoPACCtktQzstyjN78ez9JhMGpPmiyPcUsmPAjW1fWwk4A322c8z",
  "key29": "2ZP1vnNSNGuGLSLQm7u8Titb2zQ2TjEZumukrJkCeKpbbbh4jLoNzED3jrgoVLURbLBiTn45S6qzyxSx7EYnJ8Fj",
  "key30": "sarMnaq3jZuucdivLN6PAyDpjjfkqU8CS61VFDJn26wJoDmNui99Z4vsmTNr6ASjH2kLFEyce1EfVhRAT3kHJQv",
  "key31": "KG3EmhSEre8pn3kWazgW81St5W8TFvRm9t5wpFRZviF8ZtEL46ffE2pbWJia8e1FPQRKMZKZGrRoPkjM6LXrjHo",
  "key32": "zRpMTvCbFDKPDSFeb7ZnEQicwiSgvEBocuaWDvnQvGRNDGye1zdkMsZWuzcxgRvtZwB6CCbFbMmGMVJKMNK3CB1",
  "key33": "9VVxpMwvDxFq3GhziFJrvDj4iufn2JeMjq4KsnLpHYdcCgAPUPKD86mUMFCqBXe8ABigAo9LEAfH1rZ6MfCkTvm",
  "key34": "3db76DnqVA7NhYs6hTeeywTdPa4stoPs6TaRTJ7479QsSZgtYzkYmRJ6B5BAqjXNEmrXowaixaRSozJprSYgV5U2",
  "key35": "5momTk3YYNSa8M6ocdNUAjR1by4Cp2ZfBmjk2WNvtm2bWr6U5Hr8TjDwXaBqUgGLQx3nYTQEf1nnt9vFKRXxX3Tk",
  "key36": "4brkoJL54JZ9fwQqSMfSuPQ855RNVAAkSmnQXFAg8oALXfZrjbztL698XnfHCCS4zqE8KFLQcLCgxgQ2DVgcpBE2",
  "key37": "4zVRb7DDjDnMjZv5e1xchGm4rpAvEqCH3nUJg4fzHLhmUn2u3n8Ph6h5RjReMhvEbh1hb8cJv8vL61hg9UbBQGzG",
  "key38": "3voUUFA9HmTk9B3U8Sn58uuKqr9T18KvMP8yBD3qTgrnLsMBTw2NBALKdF1bmQ5mPaAxHbiJ5KJmFtYgJJFRLz4X",
  "key39": "4FgJpwTUgSamZuSSXzhqUTuTinVYxmCbYbLHDyQHVUfao5z6Dq6HUX3rbUFhmo9yrjKseqxdQwmH32tU9cjkQFEE",
  "key40": "5fdUDzQS9haLEPajFMsWwhUPZn59F1E66Uu8EQMrpvMxZUk1msDNWKQC5SzdLV7ibVgRQWTMS1R4KbMKko7zmFQU",
  "key41": "3ovzN56ZfZMd6G7HTGEkiZPramMLiAVWhS9mtTemSN38qavfXJsXN4eCrLMUENJKW9eZjAuMUnFVdaXnXFgTtKuM",
  "key42": "2qLTWWcUstRUY4RZQwY1yav5TRdNzW9vv5xhLXNUbLzvoafPKkrqqRcmnqGPXbVasdbsq4zsHg5Y2Qccor8Ur18H",
  "key43": "5bPQwF6iX4tVs9Z6e4jPYszJZ39Y7HhhW3uA9XZDg3hpkWdLSzsDtQckp6kLVHhGbRBfSLxAomYawHRxGasiaAzf"
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
