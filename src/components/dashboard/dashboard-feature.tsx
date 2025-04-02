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
    "5CGmSoK2RY3y66s5qCNLUVz5CqCQb3rgwCeT3NvAQDbwwM49i41T5haiZA6s93fQQq5sKHzHUMdbiFXbcJeHmcHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DkkJrrBeJJUagvxibyma9tbyx1LBrKmpJxXCJ4TsojV27Z1htWnWyFv7UqtFoQ6gSVzfUrwfF5eshWeP3MENQ3Y",
  "key1": "2ATddh6bkD3Rp5k5ZEKUFdRRu7fZjZPBKoTqPLPTXydtXwycc2195m7Sv85f7dpyDf2qK6hEu9cJqPsCiXxfpjTN",
  "key2": "5c6GPvJzrzEJhvFjTPeVb8pmY7CTRaXbQSjq3vKjZXVUgMRZwXP4qdN5GRsk18qDKCDu6EyTmVsc3Y8XVdPdwhkg",
  "key3": "ZFJSPtvSg9SaihL132hpeXBeab5xd3Pb9L3rrHar8XzeTuHQUZ9MQToJzoVhMwMHihyg9CDoLjv9F15UMnkEM1M",
  "key4": "3EdgyEykY411SjmECWUdPdVNhYSL2mDtv1wuvVW1sU3qaUfgiMxnTmc2zRACih8XAMSLaSWTDyToWXqjfHtdSUgW",
  "key5": "4vXD4kFXYGymWchqnvhnRmsGbxKzLVBVikeprFQA34U9cjGWoBMirna4PUcqVdkfZX7Zp6tYbe3PPkomMSj8e8PF",
  "key6": "46vGZyTzLtKLMG1ASphTXrNkWFSW3hKaTLSFzqVvjJtDbbixiMr7coSAdeF9XZDJZ65Pzc957YqezJbaZDcnxCXZ",
  "key7": "3x8QJmVB6iWG2qxtZsQ24ovb9q1SfeksYJPWrb9br1XqQoPdn72uQVHGZ3m83JGiWy9JLk2vhvUCD6xeuVrttdPA",
  "key8": "2iPX6JXEnRBFiQUTY4eRbW12kntWKqfmfSciQ5E7qNh721iD2WnbW1mHC2hr9ChRABS1kN38FUZEFXubSwqKKVNC",
  "key9": "2bmshwmMGvnvdAzLr2fBsejeemvb7gEzi8JFwXUkJrurmUNhfcYrfVJA1K8mm4WLd1JJK31Nn712zYTk5TZP8zhq",
  "key10": "5nc2vhfwghVpGG6azov9957fJ6xrgJEuWkZU1oNBBRWBbinDuiaNd5o5yVJSJtzCFMmzSgGCpYFytbYcBarQCS54",
  "key11": "4xBeCM7pBMW91tTF811Lf7sxUSnb8oLWwGikimjHJsPQkhSk4hXp4FyichAzE4cEh26B45EiADjuGxGBKGivVZgv",
  "key12": "2PsBU7FqnyLVZ7FwTAi3TidNi8p5LHpRt8vH4CLjR1ReX2Ki5mG6fM4TkY4MfShL8YWsQ9Vg3cKXYrfX9bRvKFwC",
  "key13": "sz3JXBiTNXKAzZaW7Sqh3G11ccxZMFpu1VHfSNVELc9iMCWvXPaH4eDCWFR8BvcK9zAUsNzFgZt8cWKjVPb2z75",
  "key14": "5EUqtUsZe1bBJ7teNcYhqBiZj6beg7xwvevLHNJpbC2PNWHfU1J75iLjgPugBcFwGZPuLyLdHJqPsyh9Emg3r7vC",
  "key15": "42iPXYVH6ymSUrqRDbXXBgSiUGwhbEdAWPZG6eDoejnjhHsoWBbgPTpLy6yJfmLVenCApupuAGvbSvjWXtos4gv4",
  "key16": "53M2wwuySyZirqG3a2hrZ9B3ZSZbCmweEbi2QtrWMgEf8rtouSmpt6TY7nSbPPA5XLuQizXsubsPrRL5YgKJWd6T",
  "key17": "gH5FiasZNWenyRpVmeWTCzEQjmDot1ynXbXDkRYsoyLZtrYx3wDhfKrvkWeUBAJHJGohh1dbfUC58JWZSQejWF8",
  "key18": "4vfdbcqhLqUVYw3dAS8JpAo53AXYNrcNx8cdqQ2wvGHY4SdsHmJyHetgbqZqLwWjY8u2qN2PoHsVf6e8RyfzX9P9",
  "key19": "NRfs94w15jxT4vJWdwq7FgPYW1p1P4zpF4anHXgEtW8kx8BmJaCEECap9PB91xLLfH76hNyXGerHM3JACXepPSs",
  "key20": "5APCnTsEEH6EMQGrsJ6FNHrE5cJogHvmNey2oQ6MuF3MkxKaGa43pGP2HbzvfBmYejbcUoHBdTku1YqPTwfzvPV2",
  "key21": "4ecxtXThCR92Zo4JNBpKaoL32se8QUwTdJDrtJUmdarm35NGtwVyuqnFj2xmHzQ1hwQ8moDcBVLgExEUmgQBXjUq",
  "key22": "3LKtoZXNuu6YP5oUe3EMxswXoiAfVpPbk4JaTXcFXqg7cyJVQ2jYzwhRzoDjY7PubD7pxTcRbdVPbkZv94Rhyt9T",
  "key23": "3vmmMRZbwnhtFwk4GiNfoVfLvTwpekpnpBJv1EL9inJXMZneJJ4JQfvE6EhZP3eGWgepSDmmTVZk5ucyeiGHYD8E",
  "key24": "Xc3QtzzFqgDxDRyUkC1wLREcYqhpErgnYxCSgqxsqMW5VKyCEhQa4gJ3FSKbYFSFLLftVJ657vt69UcagtddPoC"
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
