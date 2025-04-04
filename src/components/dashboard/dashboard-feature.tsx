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
    "5Z5xTYQWzEAHGPhGFTKvj5HBoM2nC1AfLk47C4yFnARFCPNpEWNg98rkm1HwVh25Ct1BvChvjqHKvG29P1VoeLPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjL7v8AGiAxSzzZP1TkUmhf6z5nWG6JU8fQkSbaoRSbPWSnuR7btWh4GTHiaSrwnx4v26nAQTFwKzqsajhUcTAn",
  "key1": "2vpeJ6BMQAkN9r5cnnQUQUmG5uik64e5Wd2sCN3AS62NC23oUSL9c45qB6EGbAiZBSxkonWpxJ3mUBFQY5kZuVGg",
  "key2": "xS5PTDgafarEb4xCiFpBsNCQ4yuy7hYSosp9DpU1yZgLwaDv84YJUpfYjJvVquXh35rfTaP7xC7LnHpsYQd1A35",
  "key3": "4KApcra23i42Fhdb7foHZgeLfjHRY31mu7ynohFYGNjfQ8sHKzAdCeDKdKRwNeY5GfFQPVXThQnc2pFCTLpX68QQ",
  "key4": "48zWwQ4yWMqakQqstxND4huhvQVwPzJK4TtXy4FXcVXa8DTYXypbSEi9eYKPyCDk6qZ2K4r5uLHFVrRb8oKVAufG",
  "key5": "4FsTcc7RTb3S2JAnaW2W4xJvbcU3uac7dYgzMiWE8jemx4i7gcrtG7zUoaR6Jo1K7Pbwwh3xPhdHTEcrjqKpdGmg",
  "key6": "5wmEqy3Pqb3M5ouV7eTkP5qxQ3s1RuvWgX9bEBeewd3P3pHR1Mmmys1QrpcpE9DvgHzXrTJKzefaKBxr4vBF7MUN",
  "key7": "wPxgi5RE3B4m51Gy5VvrzVKrWBepw2Y8k22vHhSUw7qByPSH9oEA2NUTtFTZz2b1xPgbK3jCNkrV9ZHa3dM6v1x",
  "key8": "518X6NxMdTVA2gDmXU3uktKgj1AEaxqiQFeD51WmG87njdecgy6tC6uCSKwiS3XHwfrvGjAu9onybwqNDRyzXSMz",
  "key9": "5xoBH84FF5waniD5ET5pHBa3yAnuJiXmuUZ6tGkagk5JJRzxCEWeFve52iaMB7teCQ7K3o9kG5Ts8wJWGrmCxZVU",
  "key10": "q2u8aGwMt3t5FpzpTyY7qzR2fWAPwJZsGSdMcYifmHzT6VRnkzJysU7qKTSeVWZshSFdo6YZswhYjTtavbhbQrq",
  "key11": "viXAUjc7Jj7b22g8MFu5eBZoMNBS4sSZMrAWtRh7g3fcuKLEAoH8TdCZ8feEMULqwxsrtoG7zJVWULuyMmZvbQY",
  "key12": "31TEUEd9b8hgYfFrN49eYX4EVDHi5NGRDXYwBDJ2V3pfRYidYfktWKh34fAfMysdGaXxpZfSNPgB6YD4zDv6YnC",
  "key13": "34njahdtMCAzhTDW2mcDB9Y2HJqXgYEGjhG9tGaKRANBDwqWu6uBZXxAkHXPzHqHBtcph1Zt7r6Xx54eVm4SrrJt",
  "key14": "4dMPzcQjwo4rXq3XpVvDpx966Pn3vC79RDSc8wDj9iGzV3HP58C2wSjYoAEECsSmiBDDWaLA2yFjkSvgZMDfQsnC",
  "key15": "2TY9yswSvQKprKadyrtdvW2Fo2GQRyS6xrX5XdG3iH1LZ8PQ2S7BfxRf8QhVKqSzACmRyL35kFzLHjknWNSB3DU",
  "key16": "2Hf2jDnWd8hvhrQ54ot95KDx23n1MQkVAinmfKdaYVXFFa3uD5bkCSTvrbS33oCy2fwxFSD3FPFQy7JjNu8f8JcD",
  "key17": "abCYigLNH63ySvanuR5J1y5EiJjNoJnveeDyEAy5Dv35194xYoBT7oHtfDm5Y4SyZaycVRpoQuZXYi5FfQBboUQ",
  "key18": "4tVcjPxuxJuU9AkgphAqdAMiwXf7bz1EMc318CLpmPhSPKHHtSCpM8fzpa5DT5AV7iTZDTuc1cHuQuoHV6LrRjZX",
  "key19": "2JNn5xYGmqAh83DTpdcEQa9fS3FUFSEpgAYYHLhKx1L1gR98fjg1JxSEj1hxLkdHixbqtuRChabKUfLkmL2Bp3cV",
  "key20": "3anLLeURbqEUYR2HJW5hgTTzk1tPBYHrsHppCEE4s9TGpZDff4MLoaWEemMizdzbfbmrDoxdcqMCmnTJxbXMNG64",
  "key21": "49n5wWr9GppSktYH3bra4p1mN1pqsufHWx9arz4NPkVJoQ29ffRbpbvFMnJjVH69DdJrG6ZLuguNgfdwJijrLyW1",
  "key22": "KyJQ7qJaWpfvFk7HstT4XYmB3932ezNLV1AMPoxmWYWthXsvGajK9Eb2mbc1oDuT36GwkuoyZc1ppQ2ygb2UFwQ",
  "key23": "4X7ZZ1L8nF1B5HqjVYyKGDq9vP9tPh4KnDiVu98Tonon4oaL9aBebZqDaZAHvSy3yxE8h9Cgd7n5asXnwPFUDUDK",
  "key24": "4fV1gtyyHnKMoE1p9PwJcjToPPyJVMJsgmrypwWXrUJ3DgBdtzbLUMMsvtsFax7kEEKiL3pcWdC7Tons4oEfsDce",
  "key25": "384jjU7a9curtKZ1Gt48KynwY1VdP3e4VGGYgA83v3DVEYTZNRssW7wawQPi4dY6EPKuUNWCrY6q5Bbhr5RGNLJu",
  "key26": "37Zk82KjYj1vvDpPzv4bcGNtm95HBLXGtx6zdbUNJDHgGsVzDzF84A4ednw93Fcx6haJEeBUmQ3hgwmtVuXQqm8Q",
  "key27": "2affhPg3q5gxzpbbkECXYejaJCysqGZgB6pcJZWrf82XQWSZicRU634WHAKQXffhvtB8HJJz4azXTRApRthUhZHJ",
  "key28": "4Bng4BNisuupbfaFL4wtqzbUd8RSyFtS2SARLGziXpQ82sM8nTcbuxg9TZVJnL5jbF2KUUB58Rq4jLn9aPKCxZM8",
  "key29": "5ZXTwaeum8mSHGcfMYrqjTpL3Qo78uaXwAS4X4FunpuuCAytaDM74jsusZd74GuFNH9dznmEKzdVVm5eVj7VFGxz",
  "key30": "qLa2XHWFuLMBaLmugqJ6mBfeSY4vMgrB5Ah3rPyT12GuH5Qu7UsM81ACHpni13gisAPYuTQNJHWTkDYjZXpanec",
  "key31": "22PgC4EwL85UhFoGpY1zanXApKXxCCissrrpTTUtfQ7q5NoHqK7pgLvGAWjLoVyFgP28AYwgPMMXWgTPn2yY4ueg",
  "key32": "akYM1VJQXKRFJWcHjy9rKn4AjeGh2dUpfq5bZLH4owzFwNB5TGyQwDCVSmW8Wr27zfGY6wpyvEudpQUzKeMhLUv",
  "key33": "4z6VyPrS2tr6AGkqw2ortVnmrWKSWWiarmFoVK9MhHUHGJ34pbmLbmuKBmRHbuiHbzmxBLN25UELE3J2ht11Sgz8",
  "key34": "5hAk3V38SawiNw791tLTGJQH5eSiZuSeY7BVMaN56fo4TuKNMg6zL3dw4nkz51dTA4UE99T9W2bfcouBdzPdhtvx",
  "key35": "2Q6sanoNKgAbG26LGGGhfd7zT2E6YMhaZJ8QYUpQWPn74nZcKqy6MUEiz9ceE7z6VYq5SFaWUNZXvBwuvNXVQeuf",
  "key36": "4693T4gx7RUNsRhoQpgozcfVA2UvsJiYT6vLVEbKyhji4mtSCZrfnMYABCvptRbLR88ytgsgKRsbdWWachhLUtcj",
  "key37": "5TDMY3x85n5ikwxCyoG1UGzkcuysg7HzT2WH3JqwpBwzMtR48YWcZjVz4Xhg9miGGEF2kCV6KvBDh41twZGeWX3t",
  "key38": "5ctTuRUntCBnNRCchuuUANPN2kVwvMsK9Mze7wjkuEmFaRVaft6SdKuMqzpbGbQnW3R5dDXGrmkZXyaxbS6k4X2T",
  "key39": "2nTa4AJTnLtnsnPRxLJ54FBZcusNRwM8xar9e2YcZvLGowbJ6Fy6Qca1n8st9Gofv9EESfcygewMhfaTLDvM72iC",
  "key40": "bD1RSVqruLrwLp7H2utsPdGHzCbbEkdm9BiHwK13rG5oaHSvhZmDjU7NJPaXGb9su3ZbcK2krLjeQvULBuMKrH5",
  "key41": "sP3YG25brYn9ZvLWTXamdmaUw7YDfZoehf7i4WAEbdTW3TXKniy6AhgvVfeapMhAfgnAThqMziS6QseC2RJYg37",
  "key42": "2FTdP96KkHsNdUPv9bpBXdhAwwaV24NvceGTgQHURymcQ3kBoEzt1hTUpj56p1i4Ui2U4rAPU1SffrVpDBx8rgHw",
  "key43": "2RDcM55U8Kknm3FJN1NAS8xNnHkQAXpBczxaPJVsiAukAZUqfjUERwV9rgV7hhiAhzpVyxwgXTsT328rz4drBHip",
  "key44": "2vrpAtz9YDWLvpewNbueby87PfpR6qBPTMC91tAzy7Btd35zXiZonCg46cgKRBYFnoB3ceJVAGmXHN7wmdde8BQ4",
  "key45": "3rVGWURTfTw4HT7J7w2SjkaiHj1khVWyb5QsQB9PyskX29cWibD9a5dTDiXr9ZEp8XNkEt861UDGQABUmdfikuDk",
  "key46": "5B2r8f3g9r3uJYAP4nLQTe6cqDZ7ut61kFg3o4g6bY9kKM2HfhHe3WaoeAVTTLnfQqpN4B3zccD4XAbZigaoCkJE"
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
