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
    "2LDxJm6aqRspNgwg1RBNZKG76Zy28RLZVLy9jQLTBtkymkFDreL4LARYSdp8JgAiVXWwNsNBemgS4BZ3u99srBW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pgiypnq5zJxmWWHPgxPkGR9i9awvAqWeXWa6ngqyGYdEMhzUCJCMq1667R5NcDHCS7vsNF6zJwub7ip5umiq1h",
  "key1": "4mZxMnFuFndKDxLFA2dhbkQaKtL3X6RX3sXWvGxahX1hg1G8VRrbEeGCvsRrbkD1ownMsTB75QSb1CWYu32uLgc5",
  "key2": "vz2YvB5E4dujuGD3kDKudmcdNpCV5Y8iUHjGYN9eySNHqwh7s3VLEzsRAwBYfyxtpL4DuwXo3TxYGPoo6nLWAbY",
  "key3": "C9x7f4x98cdKXbcddpQ6pNxbyLMtMgJii7jPip3oDJ3XZDCyVqZJcVeMwVw5rAX9NEmcRfwinXHk7LD9yVnSb9B",
  "key4": "51aJySxmDAU82RGB97HG1MYMhdk39s86Qz8xjCWrmmADXzABawAYnr2gKmCrnwHFVcRuV4Wa3QG3fxruYZoFTpQc",
  "key5": "2BZbCmc4Zc8EzmUtvyZri83qMceSo7HDXUUNdbP7KrY7ytxYcAnw5bjxt1MFTfyvKkLG24oNHzSyDdkgrGRZ2zti",
  "key6": "61XJWvV3cigfik2QvbSEE1y949gMkBTdcMFkp5XWGxHqPCckSsqQNKpduTURutykFhWRFagMD4VV6mug8L1Fa2ap",
  "key7": "ogRAAk6kvPHx2AR2pHxLVyMXn9a1GWzo9jALv4ik7TYk7aDvZFd4y2LTPsL4DJA5yz9H1FfXEbJZttjcs4uV9Ef",
  "key8": "5orV64RnWpA85FB4wmxkZYTEQuTNeEUKfXL9J3psqwRg3CMJBJfUiVyHtvp59rQQZQ1hjmRVCDdRLD4xUDoLsM51",
  "key9": "21TjtqMLa825vkbwCxn1wBkdhU64ekhDYF4AzwyabrQ7XCSyQew5CFejS1Y5KrAXogX8FUrEMyHz7EWyF5X9iRkC",
  "key10": "2vY6ySrr29dR8a22eHAmGo7XMmy7g4MKDYotBRXh5fi3Z1VE5Uzf5B9jNTxfkpfrtZKdRsHrY3kGCLXTFYqCR9wX",
  "key11": "4bGwhXoEs8pwdeBVSgXxnM3DBkw6BPqYBMpZXJPEwQtXpXeNuGkLKxCjisvp4C4jXo3aUTpoaqGCF4uMWptSK5NH",
  "key12": "38bQD1bg54ozVVAeEWYgxfrfuwyaujDdmVAkFFendNYcUG5DopNo5Js1stLrjueqRxEEWNgthJWR8PkQPgpdCLhw",
  "key13": "3LSGfTR3HZuatY69EnGT2e867rrtzpJ8JAMt1TDcAGs5a9yyfzUs7FhCUGAsWghYzH8jRN2JKcRj7gxFC6jCARJy",
  "key14": "4vkaoEVSG53BEFRyfWU31ecLTQ5DPCHToSSJsXvGHMrLFDB65UWNc3RSipUGEX7LTQK1t1sJ6c9dWN4fYNJaSwix",
  "key15": "3gS2eod9T2y5si1ibYD1QstNZvRVEWsN2xAX8DvhQxGtmUMe8tWwUCs28kh8nnXkbRy594gR3UX2evdrhvuSWRPK",
  "key16": "2aDhV1C8j3L3q6nNyrqCZdfjZT2cXEe7kgMgWMot4nj4LvnXQWN3cQgGhf61jNuNr6CqcYV8rx1YmggeWFGuZXrP",
  "key17": "4xQTTrheZbfwFJK8aCEv2Lf4KL98SugoNJy1Pr3rmu6kFBchksq35HjQy8Gpmqa965SgquB1tFzsfvD6kjy9gExe",
  "key18": "4Yg498ae4UqDo5nHBGqCFyqH4YDsWPgV3FvfXFS7pysDwS2HtaYvwLu3DfmgAxDon9wjcgccEtZ7UL8nQPd9gTWj",
  "key19": "3GeWpWfJuwzACmt6n9LTxP66gekVMXwL91hKai2JqnsY6SwyXvkkdxkK5p18sMJXLZ4nuSfK3A5BNPWfyxGTcWv1",
  "key20": "2W8jh66ivoPvX5ghKyaPsja23J79C3w44a5RcB1U58YpTxWhYduspEmycGH5VE6e2u8Gg7Eo7LjqEjeEkoYBXQQY",
  "key21": "M3yoWo7RJPxr4A9QCQ1MWPheiZYDj8wG8orQ3jbChHQKHBCfGLhw5Hb2GXV1KZ6BHk2LqNj7f8sKKuY3i73cE2S",
  "key22": "3NnK779VSXWdb9rCdZqnymqCUfiVoACzep4dQD7B2QAECcwZV7itdhkG3QvT7T7LEkXngqmzCvS7NSS8v2dkughF",
  "key23": "5rdThqVMPFanudbvRc1hgMcYdrFs7Y2cTfUNLqgdAGPtzWqzr1EL8saCvSJEqVnXZCfrmx9iqQwob9qZgmEmaKVt",
  "key24": "aYXWuV4yx1JibPPopULQz7RMFg3hRUdqQJUM3cN7ZS2SmSXW7cJ5nYSs1JEm48ND6FoewFHvhtVfqbz4cth5z5s",
  "key25": "57btCHe1TKo6dUSvuJchyQscNVRy4oxkQjLh4cFwU2aJHERZKopkwF9kPSkPJxokFqGxZWxasSv43sg9AqX1L4w8",
  "key26": "5ux5H4o9HToE8KjFSFn6G3MfqaXuSEzxfE4uHddEwSkjot6kRzHEiShvsf7eZa2uPcb7hTVcMQTfuTiHaHfrvFvj",
  "key27": "2cc2HzN46fpPGw1v1SyAXaP8Z8zs8JzfDkKdQiVPA5zTtd94e9rVRh128QfLGwQmn73G4ApTvfp8DxTX7hCRYQNf",
  "key28": "4Z6MGuoFYWYLeEd1M8JHcB6GQsm1aPq3dNBdBbY6kwHCQ1oYdJLuJFE6FgHQPwv3uNmohknKYn9ZDfyHWqvp3eGW",
  "key29": "2PoE1WncAsBmUZQECuuByRMgYqgpdFzLfTyYSyLADgHpGcevsfFePibUgkdRpJe6QPVykUNUVYXtJEQPH7dnwnX2",
  "key30": "3cRYqNoWpp4rpp2eBfLxSm6snD9P2GhYX5c2EV5nWceJ1gFN47U7FFVzECuPrfJs2RLDsoxCA5avMy1jRrVmSJgy",
  "key31": "3gEya6EwMgjYq7RwLHWsymYwoY3ThXhtRzqLWCodcJUqFf6m1GDcKb35H98ivTbjp9E2ukdUGsdRcKm76CLTgEYV",
  "key32": "4yXMDUpPqTwQ1J9t6rzocMjHcLM2NvAFcpTzSBgHr88ARZDhj3ug1xuBkqnG3DC6WpGbd7eVvWk7HNPNiUtR2oXv",
  "key33": "sgr163M6aAe7BH5pTtscK57JAb3e8zHT3CwtxTEo53NAy7DJyK6SSJ1LdsnHVKMPMxtKMKpDbPu45LnZxfQzRfQ",
  "key34": "3msPsjmQy3wWkoMKnsArnVyv4z1GJUnT7WK8uuK9QABHEub6eh6tuPtMbRds5TALFJ7WRS7bzkhcKQMKmWd8qqf2",
  "key35": "bEeGZndYRU64XGgT8FGJVFrFAaakpoZ6TsjXc8Tco57F8Agqwb5WtaEXEYfeJXM4aHBUC168SD95sHfgx7aBdyW",
  "key36": "4e5NeKWw35Ryw751GCghWfn1aXygpuP2RujWRt7hSD1dJNQaCjwWg9XiV9Gze4Ht7FSKDANrBJq6fHJzGtpL5Wqb",
  "key37": "4nNVqFwgeGhjrijzBg4SN3tqovQoUFToeHZchWouuEjUJ1gmYyunN7ow6DHLXPB7LkmtyQS9qKBC5vwKaof9wQmb",
  "key38": "2ioQ7Z2MWQ8WSESpt4GEuZCKuogYEWLy8jAzQMTytML9CD6Kvuz3w3pvC4Tsr8CnubLWXU48hTo1pptfx2pWynu",
  "key39": "4hupc8BS3uHpPFdAf6fwnmgnWBXgpobA7Y5BPuZJvzN4346sroDP84UWZMP4LZTHGNJ4V4PvKGoceC35U2dyZ3ZN",
  "key40": "4ocvnhjM5rfdFyBbZsfAWwbR73sWXkzJ97ZQjEJ85Nj3XXYCaAV7ZW7YBS95kCeY6dd7C9igUkRDggpqLe6WCnVG",
  "key41": "5qKbyewVaXdq2j7j4PrWaG7MX5fE9R9Xhg7yFhEkBPuhyPRZ9n2mmiQoEdzWPs9WEFLT6fMBb5nSEjrterUMCLZE",
  "key42": "A4rUTMM5hQM36ReLbAQJaAs6ZHYiJ5bU3g6weUAhUBDoF8Re6tQkchNa8B3v9Cp1iBkm2yYySRLwr7u9ZK5Rp5N"
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
