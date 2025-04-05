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
    "8sqXiuEc5Kof9Y3uTqBkTgWZ6tBL62ExHfMmuLExAbThrf14v6rq4akysFRtAtXUYjZy5J7WcHtKGWF3ZEayx1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67SKeg9EafHQhWzi893LZxdmBYdWWacyAphdF7eLbjm2KJudCwJGSaRSoJNEJKDq9gh6sMEYbevuuUJhV3hV5Duy",
  "key1": "3WbwLRkQ1wRcpcDppLFo699TDx9kBAzs1M8Am25foTJkhjb1bksUYRYstmxy7xasNGzy1FkETBPBhk7ogR2HGik7",
  "key2": "335s59zb3E63Gmxhxigg3gjafQegfWR7o3ayNCFSPpgdEo4kiKn4fKYEy37hYBjCEoSVCS3ujDEHTY2JPqyDBmz1",
  "key3": "cac8VFXCwsq96sRLW7Rsk9AAZnymZb9FPy7yTTvGQd8B7ieXMujcSRaLywJqH3G7PrjYqWC6KmZ3HkDX8DnY2ao",
  "key4": "34kGzboRmqpFhLJS1vyu77LRQJLQA1WJxSP5Y2uZG2vnEXviAyjXt7yyJ2ZqvaqZ3g9w9spbgJU3Z1XvRZzmCzXx",
  "key5": "2huREC2CtFJaGEQafocXSKKMyJJhFWtdVoqX5NmskYHn9ShpWNGtLyELTv7EGQZwQpBpJfH9hLkHtj8CMJqZfbzP",
  "key6": "4wiSHCLmJGfCsR7GkwXTZqSwtyzWBDaeSx52UJXZbNi7Kto3xvDne95wS6fqTHJgcd5HftDUiHtMkqrBSfggVxxh",
  "key7": "3y8xGiruwM98h68mPeFbqnRc7UtNTT51YNSSg4LBe31fUZZksLvhW4qGuZAJX9hfzkcRNJNqGhtbSPhkVki6PdVx",
  "key8": "6ELJbNE1Uby99ak4a3yiJJiwUxQdvVqhnBAm74aDr22aH48NvqKseerkZ5SbthUG28Zb2q92qjxnPJAA9gZWEjs",
  "key9": "4tc5kgsuj6ef4cyFhQLqxq6XeGiySZc58wtbcuWaUBG4Xocg4vVwYkYcbPrbZThHVsMGgRkiTkFbXZAQtX8cyZef",
  "key10": "5TyFp1qQ11PyNSWRroghFzaqveM2C9zfZV7FrYecwue9yCy7rFCgF5rF6yUFuXm8ffbfyR4j3yvVhX1yqV3gf8FF",
  "key11": "4u7jgLLnmti5qYecvQaPXsXz6eusApJV68NTR8cdcwj4YCdCJpKVkhPewvxzMehcxnAiFEB1tFUTd6AskLDQuVmh",
  "key12": "5Z6hmYTG1xzGtcT2B5vrXgczSekB4zhcrQyDWSQAbWggYf7GWBGawmLX5UCFBYXc9fVxBGRabwceQUwMdEJb5JK5",
  "key13": "2yk1cfXquXAWL5EXPVhLpYdiK3vmaWfshbyfAwLReti7MuAs2yDCDs32rBdvL3ADp2Cib4iiQ4uVG9UZ27nfxg92",
  "key14": "2Ss3K3hkRUo51f1kRb4uKqhcc4JqkwfCt6GCLRjQP2sGENytEPpwPMy9f3jGK7p8EQwRsfhMeq1dY3ZjttGPmZVJ",
  "key15": "3VCV47R8fv8cSFfyqF9MPzSggChNpdWXaT8ZzA4x5cQ5upf34UWd2wj8HS9oZgki5oa1BjNHPitNxouv3RgHS6G7",
  "key16": "2jdq8jxkuJh7KFK9NhvjWqXVLtVpkSfY9Qq7WUqsVxRMVwDZjwyHdxFpT6hZn2gGixADF5PZ8XAdEMomiEroodX3",
  "key17": "45LsNncvBBz9udEX76QC6iUUMMbc4tR1MhftMJpSb4neUGbKMvwSHnsgas9qcxteCeUmc9x7pAbW7C5NJZSU1DE6",
  "key18": "2tvbUF9NVTgbXsYRaTP9WcTVuPoESqb7e1UJhRuJn4KxABYYDNtB7BRHDz9GfuwMipR6mMzbC8uGB1LmTbqiWJXH",
  "key19": "i3gcjT5QM3rhx8H95ZT1VztShHoKj8Yvg2nwuoRP9xCLiNW6SEEQkuwyRMWvtMqnv6q9pqqm48DNN8eexwJRz6F",
  "key20": "2xkGy35vwhAQYk7BXpa5nuT9NBWTzhrt7gppvyNURzX3sd7uZVFJ2oFzFS7ZsaVmjouEq7x7hdcWwywCzp7v84J2",
  "key21": "2yAmGcfxMEMraWkVhfakXVu4hZB4cZDeQMf8BijprE53pxyUysBMF37WHseaxcYMLB41VFjRhhvu9k2a9A31ijm1",
  "key22": "gatGDDX3DvfvPHqRJZypYd4GCeHZyNKyNCNvngLF6vmm9Nj5mmwNyGNAdkZKgzGJpWZCshRTWCUq1tzYSn7CSG4",
  "key23": "4DTokCT9xwBJzbifnp1ie6hM7h9Dcfrm8xYHFFSRfDa76RULecKdBd69g7keMoCn59gN9XVthwKpqh2naxwh2soy",
  "key24": "suKrUxnGyZxjpY1Ph4e5CGcCaStbCLWTrknZ243tSLkG2hMk59rm6rj7PC9byHuhCU9Y2eB12Z3bKKNkUbafqep",
  "key25": "2TnfMnR5GNcsH1WqLMDga6as2XtWqJVnFwnnqBhyzKDusoaX5AeCTfQ1NCGLsVAm2zP1ZRik7BoHGrPB9BP5Qwer",
  "key26": "49AQa267u22fZsjsyVDM4z7kUCcJxTfLTHJCrMGP7Kyev5ypgAkhU4du3EBS7fz7n3gSxj54N92jUKrs4x7EcWJg"
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
