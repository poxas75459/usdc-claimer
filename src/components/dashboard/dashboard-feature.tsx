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
    "3nP4EvdGn9jy8b1berVjiNoa1pbTd1xyFe7pRwuWncJdfpK3YyixMMcCh48imaQwnd1T2QkNsRChFPbQmN6Yu3aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjaSJRpvWaQ5eXyphsnw2kEQB6xvBJ7Zyj7jovWVoA74NfL3qDdeaKoFS9Takr8Gsqqi7PtDH23ftmWgv8WDgNm",
  "key1": "1QrzNRdFu2ZaRp96Vq9pwEai1Dptxa9FHXPqaTHR3mUtmBjJoo17PDEg6jwuMHeQbQRiMyheVC5nwh5F9hDUy3k",
  "key2": "5zSrsB4ZJZZDkjDwZ6zjqnoWxA4WZmrD61i3XAxCEpiavyEvxwrpwfe7eEaQrc84CmWbyzjHAqojf8cSppij8Zh6",
  "key3": "4dsyAfnS4SwzEBJFao8oN8d96oqGTChDtVCfFCyspdQTukBphEC7oyWKc2Dj7AaQ5YpqpVwByAXNqSSXMWdrLb4h",
  "key4": "FZeXZkuWjoEG2jrwyxMYAd6MMRbFNM3CPeYdqcMqjz5CsRvDDSB1wAHyg8GfACiNuPen2RUEEcQi6UkBDKH769t",
  "key5": "3oQjjkTxAmQm7rGsxTmmEFGhkvQAyQ4BKa9fXBKmy6g2qJ95MG74CkZ9X7sZFdCZyq3sW16XK8KBrMV9c8S6Nkst",
  "key6": "ipYX9imLizbGVA4WXLAEzMdnTrM5W4YcTuu7cCyvZge5ptxhzsdcm5vHW1GrZn5Q3JxVH5t2AVGjGvQLBeeVLBS",
  "key7": "4Hdudm4xjbhJhwwr8HPzYQF5iDtXahMDSaRBfwRmFdePTkWBU6X7wrWXxTYkXucD5jsyFSLTxZPaCSXRZhXrStWG",
  "key8": "5khuhKwbBseQVWuHf5C3MZN4d3kbFE8naaqaw4jouTNu5JCBcDn1tRVxd3ZkeVJz1Qnx7Kk2VwZxXn4NnRksNTyG",
  "key9": "Hum1LGzu7CFxy9C7QVqhQHkXzPPoA8UQqHqT4SSe43BQoAC3uALzYNyJN61XRD4tYC9PsmNfiLZ5fAyhHMCDUQF",
  "key10": "67CGrWGijYmLwgpV63g7iS8xC5vxhiDxqHo976dvoyJtGt74SeQsJmz7u1gsbyvuaWUCqzWXGeFG195RooJxpYAq",
  "key11": "3ZqXvFvqFbhvNQzwQ5kTYdfWRb4ZrRZNJcBCAefBNLan9oRXbJU1pXywoP2JbS49bEVP9gYZBrmrZQsEfsLQT8eh",
  "key12": "3aEjBEg7d2JQkHYirHKbuXkRRJMgebHARKStwRHp7AGy7PiBgXSnkV4sB771M3AP6NkQYRV1wRL1Ht3a3pH8MTix",
  "key13": "36erhsdxzGCP5toUsH2p9cd72hyCEovqKJyP3RCnF1EzL7bs15KGJojMgsa6bokCEz8uRLW63C6ZPTNSpuTBuUPL",
  "key14": "5Q6u354HvecVoJ5NfHLq9L8QBt3P3aSTxKZgzY6hUFRv1WBvKVtRqpWcgA51ved3e4CBJCHeLrRf1PKGrqMXDE9P",
  "key15": "3yKFoHfmPUd6SNBLJi1S88BLwnCvb8fuGob6gUCpyE2DcsnxLF6dq4vEBqxTn6LuJsSog9duK5PwnHzBX1xWPgnV",
  "key16": "37gKkvgoP3ZgfqqYnaarFHYTAVyoeqHGx4Q26LLrJQfGzaYdVCyv9p4nHBuGsHVCGw1C5Bgwn4aHJkr9LMu3jFTH",
  "key17": "4pQZaCnLEdaa5von7cD7GQSw6NhRqzcnYhecmbYMery1TfNkyEJyaZxuQHUyK5jVva9SeRMimSsnewXpkp8dqo4B",
  "key18": "2hHkgU2bhkW9Gm4Exoo9ndNWhQxNYCdnYC86wPytEFbzgJZFoqXtaGxYZ3vk3uGoFtC7NPyuQRP4hNLLZ5zHtVRv",
  "key19": "2JaxT65D8fVxRLtxUt1Ynr3ca38EKgPjotUMftKupmL8idiCkkg6a3FMgVtYJvWfyv4WHJLFQty8wGPXExqqpQ5L",
  "key20": "4wQDUGoa9KNi31A3KSazEBgKG5mpqzbBK5E9pPWJ8cpnrgfEHsmnEVuGtUcjBxLEZx5vCikJS71np8H9YQv6YX9N",
  "key21": "4hwUAiFeEP1tjDQXZW3aSkYJzxNiJ4jtBCunJyvryF4n7BU8MfEnuhyrZN5BbMm7TzxVbLjmwot2Tb6NwHjCLCKy",
  "key22": "5Sx1nXiEmPNwTzjRLpmwhZKcMka22hyiVFoqYwsj6A7ritkY8v2MtNBy49ba3zkBmPBYGZ9rDWmbT8Du4mY2HeZS",
  "key23": "J1xPoPjgnP5rsqroez8fxNpstNu3ebvApE7wKyc3Y7rB11ayEiphj3JsyJwVFAd6cKij1yxdxoXViR7s3g2VkGe",
  "key24": "3kxAYg9pcKaHjnq1XEUFKqHvy2Uo6f2i2Hd76PACP7bDcVLTkAMUUsarqNoU4hUT2dyajpqHqfvAiP7mVrhZvqzH",
  "key25": "62HojfQ4KNmV6JsmVQkine6VmFAnVfaiZeVXUWCfeS79KbMMboZwsoFDQ3JHgicnSU4fXceU61fwq1SVdD29QTJd",
  "key26": "4PkhJNcXu5M8ZYkWyciLGn6EKRewB51U5C7q9pV3PysoP7Bc8nv3nzvQpDccVrfa4WQyQwUC3okusznJEqL5sDB",
  "key27": "5aXM9ktej4SWd4xB1UmoKHxEjyssTXygFKAbRXJyuLLeKoS62RySRpYDwyhM857adarz1tRdT1PYguzeQTxz2oma",
  "key28": "658NTkCsd2mExALrEK1YM3c72Zje24nFZEb4H3vvwMey2jhYfMBr44jofsGMweVpcgTry2cng6ox5DECGzhWKKGp",
  "key29": "DykKwaeEeb4tydzV5yPH4yiKRcRxa6cUa13JFw1tkEZA4gUGNHt4La5Vaa7UHRMvH5ivAq6rJKY6ag1CXHkrNji",
  "key30": "tNwJFERUUdDLfkZcgsw5cc8EubdbQCzRjvoJJvAvZuezsNSFuHoBqmGZ8XP666Cr5pkcvimRdgDXZiEMMfBVxwo",
  "key31": "4Tq8Sn5CL4hhvwTUi5hna65zouEoLtTjpKazXe2iHqBQNiNdVR1EEBm25hSaAmJgcbyGE5skB6XmHp8LURZBHr6r",
  "key32": "43GUPzxR2Y9WfxLKirXkvur38Xghm73M3n9ytv8ise1eLmwtHt8jEK4VZNDZunoKJZbqEkTAsoMZvtzKyFoT6KPe",
  "key33": "2o2RhTbfwqpRhRrBCV9gec7HJmheYaJMuxB9Sp2ovS5SJ8sYo6jt8R6QksTFVKPu8YSX7e2yBNkpRsJmrdP4aAdT",
  "key34": "2dDuiMntHUfuehTMbmAm6VpuqNWGjUPLuMycU3y4GdhFMCrBWrnoa2SXC4GdtnJHkaNU3o9W6rqXLJDm4ny1e2wn",
  "key35": "gc5FxxTNs28dJHTr21co4XFGoSPjCtbSXZce3ZNE3eDnsAUeiuckvdhm3soGV5RnsMbDSXUr3StSEs78Y7m2JBP",
  "key36": "2wonESvU9sPmtGZurwqW3jXaaf4QQ8PGeLZFKAKYwTozBrWwFdSg4qsQSheGFqauXtaVceQB7FCbPdSJaV9vNSzq",
  "key37": "Po8Y2E6B2HKSwnTXUTwz9MfnTibXecwGqwrHakB6NwgsbvxwYvdLvaPibGAHtjuybEKex6ugWvoUrdfkHcUbUsm",
  "key38": "5N6hGNTtZGFzoSJhaqoeLRLuwW2z7WAgJ6N7m8PQRZxYU3EGF6Wh3RTmvwgxi9GwTBvffDqGes9coyHSpUsHqhw",
  "key39": "q4AAbXuVdnDrLD3YCDm7sRumH6cx9JzKC1TFMrwe8UbYGo9FbU9ayd4KGPa6kkNnPWvnXWx2xuwJQHALbF7dvW5",
  "key40": "5kJRJPHH6oh7wLPfBitBwHhXttSRbGDu4qgkRVQnaFp8sAMWH7eqtpLVFtsyXuZumeJmWrifgPzz79j1dXCFCcNr",
  "key41": "5LEBm57wTxScMbKoYHZ4V852k2SxJeN4bHrA58vcb1wxALRMWqEtbrWB4nGXDJ9QCDTGdAGE9GyGqkuDyAg9iSVu",
  "key42": "5uQvTnWpQ232oTHnVdsa882hMLBU86MFoVC4bWkWf6BSASMQ5ivPTKVZmGMNmL5FMD9vsZYJ6zXM9rrPPpYTfnkA"
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
