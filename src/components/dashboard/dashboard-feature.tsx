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
    "5Aw1JebiYXXRG2YXK1RvmAxu54dkvKMQU1hgAAv4znGjpcJepy8ZwbkAa9T7vEBe9kNPD5vLeDu64kTVfTHa6Bma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MEw8SQ3txrjRaSei5o5AJifhUFQFDJJ2P81mcGmjuozKPMnc9fp8kxwef1z9WaKNpvjjafbGXw7LHUm1an7YreJ",
  "key1": "48iHpMiq4QYkxBZRfjYxXgw1y7vEbjXjb6pyqrqoXLk3yjDYiFbWZb4JRY9qo9ogRz4cvTcEEb9t6b7c5KkkzW4w",
  "key2": "YRyFaPZRL6TyD9ZnQCTpw737bMLqL6YXizeb54beShMiTg81prWf9CxQX57tVBm9qup9zJBSy9N7t8H6UGbjBrH",
  "key3": "43Eer4c89MpA7Hmohxp5PrvyuTtScKRzYrruBGk7arEUNybqLoSm5DvqdLm7wRBCGdatynLeJmSdbquBBTRm8VFu",
  "key4": "vMt97rdCinmqRHrtTFnmYNCGRTJhpvCBR8YyvXZuz13hHJ6iY1WrETkoD2i8jLeZid6Wva3CpihgEUAuPJTToG6",
  "key5": "5uaStLPsRKhPNhh9rAKkFQ4doFUtiGYKscV924fFdbNM5zM2Eq4CHjtpMPB1DDT1fWuxiGePG5N7pMiB8K8vVjbJ",
  "key6": "2JMoTEhgoMY9tfqdA8VdQSmDtw8GjT75f7bDfdUzfDMravdYhvJSNJZaxAenGQMfXYnUmbofbazRT5abh5E2gyJv",
  "key7": "LZBzmmomN1vbLCvG7Bwaz3cXuoNTnsvXVfGahB7BB44U9xYwPWEKf7UA3Fgywrc51X96YMJfdNhqJMQGY1ftLE9",
  "key8": "4DFDZpyPYNsn6iXCpLJvNeK9vsmvZWsBQD7FcBEjqyZSwG461P842a4iKg6ZeXpe9oEArLrKbpBqfVZDrESUuCQP",
  "key9": "3sYETMrX17LTU9N3NrZ3egqhqGXnbQNuW1CjqdmjoLmdNQfmbcPhQ6FjjJKwhyuhiHL64dahmfFQn5jmPxN46THM",
  "key10": "43SRNxrfjiDMsvi1vLBTQ4j8iWdvvS3qd5KK7WktzFHHyQBzfxJQK5vasWvbreNVFkaUe9qXiphbxdcFn8S8z88U",
  "key11": "4YFndemPvwW1o8Rds4PnweDw92E94D714whRWXicCWSSAYhAuL3NGnKTXZPTjUN8AfGehTkNVkwqg46LUo5cceqo",
  "key12": "4LATFhQEmktGCfDSSp9YUVZpLCCJVYbS7M3Qz5moezkpxuUmW17sBSRgkxDA5T9jAa8se4BRmgTemeaVwfH5QQJE",
  "key13": "64DEHkzNM1T1C6kJawm5HyrJBKZUnCYGmMDLdckp84oxbs6YTX5zH4zHWpAYKcK2eZ3L1wQpgLa52KuX6HMw4YNF",
  "key14": "6UpJ3LthEeEgd3jaMXrjdK6xs2WnodK5R557V9vt4LY1nQq3EByRYadAoiwDWYLxxPTpSMqH3fpBDrM7T4a7fH7",
  "key15": "2cEZe2UsM9qjxKBgfjxnZamD6BE2r25Jffb4jexkCB3ai7zk3jn6EvPV8wXMgNbCf44ErLSvWpeS8m3NURFkGFXn",
  "key16": "XCqpYKzrRKVxNQxbtWge1rii947GpDTLBZxazovC6PHeqTTKfi4n2TxrAgTt3C3JmzTpBPiMqF2p6JNY1mcrtVM",
  "key17": "5hLJ49BkBs8NN3VYyvJ3cdY5mvRzESDfKqGkF76tTDbqWri3qbDd49HeaxGRBAEJ55sLiauf31sh6SfCC15z8zof",
  "key18": "5Q68z5RaVGSSfx97mUkYGDggPeyEjNsN3wgLsD6jrSYFAV9gEHEo4N5gUQ9HtFpA6Bv2Ra9Qtcehq663YMeEFcfe",
  "key19": "5qx5yHWwHwkdxeTNoiCWAQzzVDn7TRUNXEqpfECtnATczMKJLDPb2jdHLdRnhipkTh9TZD8o9HYeUTjWhTDjh9Ac",
  "key20": "2v5zQ12TpM2Q2CGNXMD1QCnrGyPg1SsU18uEHZ923kAP5gwQ7nnj7pLR64LNN2ZoWWbDoborqkvt7Z8m1yJK2d7s",
  "key21": "qhqN9M8cQun44Nf73mrmQWfNiQZsgkLVNcE9eFFERAe6ostSDDC6EeFKad5cWV9DUMmf9DSakAn6cgkW2Gnim7s",
  "key22": "p7WBuDhVngHvHrjHKuFDhkd1MJfEeCHreNAFhAn9g4GDXJXh19VjcUY1da8LodhXJueQrvwMXXFBAZocdRzFv21",
  "key23": "48E8KbUbsp2nfNiGhNdVHbWgvHQemsuJdjwr9e3gSPhYidAzGQ1tHfVWK7ydajytoB5kgm18Qu8WjxMrpHyDb59D",
  "key24": "2nVRA1JhTG53cQ3MhJenySkLDLzDDGiMmwvdUgazavDx27Fmrue5z656aw42js2uAnXx3ejmtGqKuZK3tKpYk9be",
  "key25": "2zro6ggHHKe1i9hZTSsgg94X5p8kcbGKFetiosckzJdLKDiCNGP2NZkYapoWoh3DzdxUp8wzt8yqehggEGKq4jzo",
  "key26": "4RvGx9XhshcfGaa7cgn6oQJiMvRyQAgmeZwuivsVbnGPkDQMHntEFBM88fcNJ8qUUoJzRkTYh63bZKoLUkzZxo48",
  "key27": "4yeUATnRA5T1mfBFjnCk4jMdTzqZUHytFHpYD7GkiqL2FgEHukGo9sJaZu1JEtYtaBTv3kqxYX9tmE8r91G6CDoB",
  "key28": "4VpfKt6ts3i5tE5pnFJzUkAn681S7TSh6qkpdyMfXhVziEeD8Zwe7s6UJrR6ZY9TquTCcqAHEWHg2SuxynkPdMMj",
  "key29": "3YeB7T92NWefGDphVob89nHZdAFyw1LGbyxMSjmeFgr4o69sWb1i7TPKNDLdaJyscU9ucJEnPAB1a6BXPTfkuXEv",
  "key30": "5PRF73gcHP3F2kxutAGbm53dpE9YAJFBK44U1oC1YAJKJXqXVCjnkA5QZkbQVisqCLXPHYNZ2z9Gve73JxGQyZ7u",
  "key31": "37djNiD6fLhveYV1W7gCEmev3c8EVrnjbMTvbtsJSWRw22hXApCa6oP7gJSZqf8iA25CGtr1rm9xYadWszMjcAKy",
  "key32": "49dE97XSHQi1WVoGmT5ZWr9TW9hgVH1b785VHtNGjTfECCMDbyBkZoUC5pHtGUjReBG2HK9E7szBoZRLY4iKy5s",
  "key33": "36XHSt8BRtGvi6EhpVys3eLFC5h8h6iwFrsJB21ir32XNH6EgHtmmi8nXH9J3cCu5UE5ckNfK6nDoHnaRPbGS5LH",
  "key34": "2ESiUL5X6WzkdPiPm6JEvvxPDYhiB4WqYDuMNQ3JPfdBphbCfdjp78egXJDGcZSmUGF6ZZuXwmiLxDNFVHiWc6Zq",
  "key35": "4BoWtEzmrXyygyoC9cNAmbCnPqPbrMKySr9DExwPGiqP8dkYdt5T8z9tK16LKc7VzoJZjKn6MRjbbTBsTfCex12W"
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
