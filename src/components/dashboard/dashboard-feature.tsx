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
    "3tcsMMAqbZRQbbp6Gi7xitV7qAgZqokRtpxFkiFmLWkxUo2UXiWtKX9aa8YWLaLbnNxb9dTQyDnsvQKXvaKc2rQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuVTytJkdMth4ybVD732G8qFPXrgnkPMW5miccDRa8JEPRbNALg4zPfSbmMnv1nEWdvKpv3aZ7oVFfJ8ShjiH93",
  "key1": "Rs6AkfDeX9oTjfoLuRhVhZoBfpPQ2EbSKQfSWjb8JhbAhEJZd94XgZkyY23QsZojMXe7ZtGqLeGxU9zeYgtQbag",
  "key2": "5Kydt7d7yfGHM4uSit5bLHKaHjvDHu7xjWkEprgtU1Czvwdu8499o9vNZSpLwtVM3m5k2DuGp6Levm2RHbJ8wjWW",
  "key3": "3iMmpLR4yj8wu5zsCEuhw1rZqYcoBfEH8DBXRBhMsgf5LDBW7HAMkpjZYVLwagjB1cpWpq19Vk5TPtTuvrjGkLrm",
  "key4": "5JkSUK589UCGKAcERP2mWYbfH9kHVcXuWV11M6ff4fnztbJTdacW1KDek3BjcrLoUhY7Kb8QAuPASLvQNpiP2sGx",
  "key5": "2x6f8BkraswZYtacWy947KSdMAgHhvA56gETXTVmwtr2KCqrVaD5TZpkLfqxt8hCSQ2TZLArdRFmrnvGMhd1VLbL",
  "key6": "5WdtsjomaydPV7XNiZ69kTp8AcaX7A97YzmBALzf2whD5PT6jE9whsNVpuCYwwXE4BcJAAH3vg8CxxgZdLvLMPFz",
  "key7": "2Jo1njnadQEZZ5NLos6vC3avPgVRhBffPRU7BTR7yWyz9bHJj15WMdw4jZw25vV5SBgNkz8SATz1F3rbj8pcEkW",
  "key8": "9wtXEWRQZM6JgBoYcVxPJcaL33u6PvTYSPeET7VG6HKFg2U7o4iezsJ5fhsS8A2qDrBQD3jZkrAS2VC8cACdipX",
  "key9": "nZtkoXcnYgqtGHp1uxYbp5bDyDLTsyAgFwn8Sq3uZc8CugESXwdNmy5nRyutEr4zUhAG6NTHu66XGdxq2cza7UC",
  "key10": "3M5fWxqNbkSUR4jBEnS5EPFY9qx4TKThbFEEWTzYh6dKULg2j2Wo92LEHJttBiu7Qanw9egMGPT2AbmjECtwU7wF",
  "key11": "5mghM3hFDz7LfXMzVQKP4EQzXpcnztVXEa6JSKdq8FozXQNtgxVYF8RGzU7Bf1Nei8pL3j5a8EvU6oWZc92M7RBD",
  "key12": "4dHxTkyDEP3fAjhd1TQ5xjU7squ4qdr3s4noub6hJUYzhEpkxCNNamPHSnQRTGwa8nausbGBdqKuPduRZhb4yBhG",
  "key13": "4btuWMfuGfVcade42BKDYsYvSBBGy7mk5BsL3PUT3RQkvie5okuLyXFK2xA17JSFBj7jRWcXnrP5juaJrMdQ7DLs",
  "key14": "5cLcJW8KFsaYU52gcf9TG82PzoFcCK3PaVqzayWnKsXBCrrQX61pgbVsgsEFCJCV8xmZyEwKMYbANm7BDFFGKvJP",
  "key15": "21ATnECkWWcAwFipYH4yxiv1csJ8dscH8K2CaC7nmwCD8VSrX2jcxHCsaEs8QgQ9sb4MqPSL5pnCXPPqfb6Nf7fU",
  "key16": "476i8oSG2FjqmvoGWvcyEvQ6ve4am9XoZt48GgRv6CL9btQsAm2y4LgLJeuVi5feHTbsMNNMisw4S1RxQEQX9KAe",
  "key17": "4eFeZDJQucPoL7VNZckE2QHdpiNp7A451vzn1sHeoe8vs5n7b1obq1wD83EdLsUqxUxNc3fnXVsRXeQgv5QDBmND",
  "key18": "2M3r9ZGq6oyufP7pgyLHN4zzoK82xeZZiCTfEgTPWUmz64Jk4yv5NBgmDUvan2tWGe2G3VWxBkgh1BSFF8BSXTJD",
  "key19": "42v6F315hR3VHpPj62jcUX8Q1fAH9L26JEFd6Mhw27Yh2faL1XhPbboJHn8YuBJ4LMbkiEAhM24oEpARFMNxVV7S",
  "key20": "qTBhJUjbLPvGDVV9Gb3hDLS2uEHj71XCwyoQGKZ2AsYV4fbbk58AVozp2jB2Z8Pze9rpwhDS4fm3MSVD87UpHHX",
  "key21": "55eMcgWtA5RQv4cLC8pByEY6623Fyy9r7cQfm3v2hyppGXKVet6LmHVgj9CXZNE1VBWbBS42ZC98h2b7tnMvn36C",
  "key22": "2mw4boYNvLdpRRbxaJu6hKXrBpaviz8TRSenzJUm1uGYi2E9xZdBiMA2FcwRHaEp7huXAvU7S1Pyp4EMqNV7iSsW",
  "key23": "3Vyt9TzcCFmWd4gv99zkWxgjTbi5eFj8qMBzMXsoVryRmLphwtoKUSSk7Lsvj7ABgkZMWDFjQMs2yAocj3vtY6xW",
  "key24": "4FCjsMzTQDiZdXEz7jtq4S9SCCSwVcqDQo61WLAxq4TfcgfNN4gJvqywg6EzUVNnxpqrXDzgkGTijVCK57ryWBpw",
  "key25": "CmNqspx6dCwF6pNmCTYHPPcCQz8hwuzNsSbT7YEHY68T6jKrV74SZGZMzEJyhzFxbCAhUt42hqkGK8fzcJy2bzu",
  "key26": "46i6U81JLzvrJzBYN3vojWvFMNymxyzSYdye4ZMTW8S5cFYQDjkDuCY315UWWrae63KgecJh2sFCgr6pGzvyu8X9",
  "key27": "3jqEZBZjC38iiqoe9kcyxZbKoEK91JyidFqAZjvDJBfMwSW3tg5YYzC8SVKXzox9EEByks38mk42CDrqyTxwszkZ",
  "key28": "5XWo4qAynQWnDNH1FhyhVUW4gXwao6eG6UNsCq3Do3SqtKxfgLphBDrToc8ffvMCsj9pXUdPC2rBRwqVQ3TFSom9",
  "key29": "5S2kJjTvT9xMV7JLGo1egZKwo5rEu5o5afY187rMpR8wFPKafrpSZ2qEUzKuwWqeo9EEDUXH4thQj2AwSuBZgwKd",
  "key30": "brwhSRs3PwrS6JcXCWEW54Utz5xqjtFFQAEJTzFFPrTYF7VnjcydE1v2GgqpT8gc7f1XXHphbkq8eibCC1UU4DK",
  "key31": "ee5yUvxEYw6xJHWyA7yBFU8WiVKJYB5uEaAW29sSh1GPJdTRGmwBffoyKDT9mhzCPPzGgn4MpDKP4NZiXvGEhJF",
  "key32": "RQvLmnEzgMUPTUibPBkcdCrLfmd1j7V8NDm2aYdBjzCcHpYDKXJ6wLUSEAVup9oo8yjTXtfGbkBucgX8zHg2eBQ",
  "key33": "wVJciaufhcBBo4r9QiEbAYdqYzrNNdfGehvxdM3zhPxaNtuDTrbgbMby2vD5Xrx7TLBmuhGzyk3oNuTBWKvfiBo",
  "key34": "paPNshBaYW3rDJ8hCppjiJWKxorWLGDcBG7s1BeoN1V2zbPsnhNV5WCWXBE4q7tsiLBbD8PdoFtKm4kJsVbNgJL",
  "key35": "ocyP8rgHF8KTRJDFBYKAHmYKwThBfqUxEfANNMns5aavydwYbxF9aDgFuoiHZivghCUynCtAuD3kVuJ8PnKNzqP",
  "key36": "cm5xfhQ46FAdmanaotVk2eVcjzdQyMGF7sTduiCVemXug261FXttPW2BLT91jj8DcdjX1j5L8okyQGoJSLXtegC",
  "key37": "5qZHQDFHcsfnX46WwWbSSYK75fXEUHHQdhotyHJRQW9Yi4nx8CBBTsfmbjQAG7d7RCNgx9BEHrNrujc3CRNaRzw7",
  "key38": "2YUrCKLC4HpNUmQLHGwrupp2SXZWKkMkD9migukRueCDWX4Uuvzfmnx8EWksgfFFE3iS6eaUUsxYNnfNeLNhTMZ"
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
