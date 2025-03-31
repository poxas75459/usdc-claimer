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
    "5k6YacT4guLQP91S8afqLSLUcs7rNbj51fUgCZfVtxuf4BJg9rVD2g1YNbkZ183eUDYPvw97ubYTp3QC6qB2uxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnUfKmzzrQQuSYygke3t8mbbekJHBEt1TMovXvDTh2aR8Vkud2tLEfoD8XwdYk6YDay3zeYsGKKuYmT2VvtrafS",
  "key1": "5cczU225pJQi6wMbgB5UCTRidZbisF7SaUSxexpfKjxwzntj2EpCkTshJDSCmrzkZ66QD2bnMFZp3Sc8VxiNSQh5",
  "key2": "5wmUSTYVSRe6d5DJnseeUALoCzpEWL3B918KAQHW9TMNEx2c1CF6xqZxPvTmAJgdeoZN6cmfsYDiLRZRzoFaN1K4",
  "key3": "btnusV1LEFMkCYwfQ7soooE19MRfkwKERULCNUcrbEBX37Yr51rfN4S9386VK5wWESi1LczhQyYqr3XSDJDNYXq",
  "key4": "4ZGFurMpbkDr8PmvDpa9WFAm1vMzpc7by5T47HwYZwPzGPFvnqqdqyMiJ2ujjosWb7WVX4sfSEccNDYZz2Atv2Wv",
  "key5": "5wiyhWWaX9Y8n3UkcCcXoqaQSR6yQMB1u2kLYqN2bPCHRiy5W3bKEvZGonutw5pomALQYYCY2Sra7nzduVgFUB3K",
  "key6": "2ezXXuVXES7KoJTLUveZCZZp6KXaa2rE1cxGQGpKkQhM3ppDNg19gRsoaHZkj4FFvYsCZ5VHqkNRuxpHj2HcdXVg",
  "key7": "2MmnjvVpgjs4xNcfvMLfXHzT84XxiPNkVzfeehKgEWR63NC7TnSna3g4s7DRkh3u1XzMXdmi9Fzi8VcUFCfJwbFy",
  "key8": "9tZ2qSZ13M27pBd7EsjCcoctqsdbPABHrevFsPQvYkigaezHYBQU8ipc43MSD4moTvkbZKqPJRPem4jWPBPJpsC",
  "key9": "3KrEFaA8KwArz86KZCthhLcfxxoWJTwPfTNgoV8cmU3RTw4iXUjzr7oSYQxKngKqroPz7jfDAgAc8jR1uy72Tw5q",
  "key10": "48bWspqFty7LggAQ6GzCXdsczzucnEWSqEzfNS284wsmc6DCL149kNu76mPYVjKv2MyaXwFyiJ7N6uFtsVnfqnMm",
  "key11": "3e3btBtcnAzqa7ZGMWugWUD3aifPD6YB1Ee5uU76UrzeVpbTAzbnCJacnkVaL13tFVgMH1FnSyxLw6BkNGPSwQsU",
  "key12": "2AWR7TJrzCsBm14JJ2riMShk5CjjA3JabLbchQ6awXJVFzVo8XXbtc5FSLaEp3VdStNC9ETyZou2pyDVar1ik8V9",
  "key13": "3ZrUrrj7LV7MWNQLxD4mUbPX4aFXAER2LVBhQAr7KX8ea9P96JSYznU7jD4oKjkLLJ1XpuAJ7P9up2UULE7wKgbG",
  "key14": "Z3dxPnNaqX7YYAU6oGR3nr33MhUjRdYRJvJc7RjDK1HfJ46BDRPQSPJ25ryvLHekVwqYGZA81bWxmrK35VqXEpg",
  "key15": "34BiAx67dBWRtyEeb4XJvLYL2NvkiHxPGQxXjkwRVLKkJACQN7MkHtQn5FFZkz8F6v7kcTcZeB9Z8YG6UmuxkiH8",
  "key16": "22CAkxq8eG7qyF5FYwquzLkaSC9rSogDzvMznnH492WfE8X9Eg36Ho7Donp4ummMfLNbmKDsx6F2pAY17XxzqecX",
  "key17": "4u5C1Aorstc4vGyRivYCqskSQ8n2fRpSBovL4n6Dz2i52hD33CVqMEfSAuevDw7Ekfnbz7UHELnRXmJnDE1oPGgM",
  "key18": "25GwWpj2M9qm4n1wyc3t6N6cLaya9Fm9P2BHif29mKSx2wTDj3CVJaVEsR7gmBmizcb9U1pMqM39G7R4eXASqUuP",
  "key19": "2kzNzhKXnY1SqQdXrTxFYybHcSHUVKJjSjjjSGDHmCcfLWXmARPdhaqSBL5xETm2k5bSJzTGnHQZosna7Yq2d2fr",
  "key20": "2Jk83recQPAUW4hmr4S17BHFZspDWUg5hD1RGqwejHd1xSHryhCduaBVoX7Yk73bg4wCJfTXemHWcw1aLuM8dzag",
  "key21": "5oPhvXgs7Aaz4pckXTGUTjp3guCWmtmuiTWMdDGHYqAXrSaUG82B5xNmARppdmsyhNCj1N49XhELfg3sdQDze3CE",
  "key22": "53UEfFPAuVZGsA7LDQrFSpgT4UcgZm7NC29uux11x1QEmzebG3BvERQ1upzMdtpvvN26ebzFCkwTHXrd1395CTpN",
  "key23": "5QSmiAvNVbVrK9faJWDBUdgHBDH3i481uKdAw61hyVN2Ss8kBub9MsgfMGhJXmJD2BS63aWBAZXcURGXnGeaSNon",
  "key24": "4aZojyYechVJpeMCnJ9hUJkZeRBmMR6ujSLQWPx1T8kkgPhx9c91fADQMF3iop5xRNGWk7zi8huQT4CNY4cYMBa5",
  "key25": "2qBrJrnNY9PuWj6qwXSVFBeq1bK6ujqwVENuKn4B4oqtbAhG42px4frnztQ5T183cCDeNtZej6XyW54RQJN2eTWu",
  "key26": "3xzsJAvx4wvXrVohBwJoxwSddQefyNAqm49bbgc5MRhLQqJQFDcqNQLqesPb96A5Dae5r766rh9isgFXMzHqbtqy",
  "key27": "29v56cqCJjegWZfpyiqAv8UF2KJBUoXHdcAH1JA23jFV1uA1pEMLPh1xkrXimCrdqnHZ7x571HGcg5sksZZrmFSX",
  "key28": "4sWGv1dEqZGQkWYwbgwjhbxsKN4DkzTnrXVcj4HSxyH15bLeaxBh2fn7CdmicAHikntkufbDfiYKgz8NYUwLJC3W",
  "key29": "5ra8LC25yCjiHW2UEqnzq31ziCQGnYFAjoon5yupS3v16ZjsNo8ALJ492ocBz2qWSJ9M4skACSxDztZk3tEXeRxc",
  "key30": "5VBdBfMPurjnHZkoSYnxYXCQo3SvVkyrZg6UB356HPd53dSdUmh5sLyHDckCsQR8UW3oZMKydv7m6ypoVPrg5bZP",
  "key31": "4YNeztp1uvQ73ekDmDa5QuTc2kZDL6s1jSYBZs8CyS91ZHjsYBC9z76zcEPbBayrEqzdnEGCkrT8uijkKEwwJ1T9",
  "key32": "3Wa4fA7LzJte4JqP6yQmYsrHJGV1PD9XpKXucJEzUVuEuHdUtqEmFmb1HPQB4M4zG3kjNP4waahQJVVpLYE47Rtb",
  "key33": "3dPmeyfNP19Ynj5jeSWBb4rnGR3tpYh5yTDfAHUqpLS5kko3xecB6QpdDBwem3tdVMfskRVjRwyMd67PV6QPXBmA",
  "key34": "UNJJhnk6izrqCUTpSbMiyzC5njT11L2nnYNuj8xby4wxZGbMmqhKbUSXv5s2tzwAA7JQQAgHKzMbT96CHfnArhp",
  "key35": "2c5d1DvB1yuq6nWrYikxpS3xdJEUPSK8rE51jeBRqHArrn94XDmqeRKVFnRraspTPMKTFsfhxwVXx2GCAYC5kzVJ",
  "key36": "4BKKmoxHnHpBsNSbfHGFPF9aF1FJUDcTNGmyAPp1gzaxyxWDAE1pkyN8iqemHJKJjKpWt2qp58mCVXxLvcKZ94YB",
  "key37": "61TpDKwtmyfwu3q8iMj7nNUJajgk5kRDsSRzrL4zR8EJnrJ448JUDQ4hrakFz2j9ymjFYkmZ3WvAtX1cqXWTqtXE",
  "key38": "XzgedAtx1hKdK434hYNz358qGSQhCrtXkJCSnoPtjLFPB3R1YKEyJzowMvxNfVT3kSbQNcmjD16qXMDGNKg9wxS",
  "key39": "8sjCDK9YkVBPgLMaDxVPMcosLnopoHLotSB8rvtGtEdKt2R5xcYYbbkagg7F5zodgU4JHagU6FZGZivAzvaKEo5",
  "key40": "4AhjB2zV3ywH3RreqC544eByTkUNpw6yvaQMXMMxFmGnMFHq3ZQzoutYtFW2nGqgNY5FqBqpfX8ZYXFX6GM1bgfd"
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
