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
    "5ZarLib8VrGZmLZbN2ztH3jcGgW4T1wmeGRUuxzbCtCqtCEnrxCBYUuttqxc4dctwsGYgwqf2vrauhcxvtgP5ji2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bf6jZaUqaMnkoHEq3j13JtCqj5kT6WQeTxK1WfnEbtMqCgeVNbZ5FeRR33eYXEd3RyjbKERDT8i8ECTan3TpSRv",
  "key1": "8ft96ZCDivSSYNmK2F6EMTPoMHivpQePPbH8KNQweSUEnjyC4vANrPRATd8EVfxpPZCRE2Ex6BwnXDi3q6FgHY5",
  "key2": "FLuEVMPdwp38i5phcNdhzyhLbscZWvfwcYdAL8vBMzJF3LueEGt2CHZQVo1fwGSQ2QSgwhL5xQUgrm1C38HaiaR",
  "key3": "FyLcyWEGaR7CWsDgpihhy2EuwzrLWk91hKx74ULnRLdzaugKUR8FyBYh8qLZJSXR1vAbintgZugKNBhPpvk7JZf",
  "key4": "5WCdKfLrTQisGXvuZEcCKN3q9soCJHr5TDvfa6wa2hX6ikDBWm1pypsihwanx8R4rQLTS6sTBT73EPmCQTpu6Z89",
  "key5": "5qR83YrMPuEkpETMrLXQvHWPBJa7WdQztk7YhieKpGr8vyixqxMkYzqzkb5vGG7ccbnwMtvTwoT1hX1CWGnwu6ur",
  "key6": "359rgnRGjWGxGXfaxgGzX2BmWZr1YJyNc76ju6ZFxEcRVxfYqXo8PUDD953c7rxYgvtqKka7qi7VfJcG71DbgeUE",
  "key7": "55L1sye3enTjfgBA39pnCAzv4PhYx62D4hrT8dUQgxekRiwbBnBcVcYzxKLR82BeQvxr8rXBGX1B6kAzB45s95ov",
  "key8": "3nTkf88eRYasqCDBT112rp3cRUtWvGneqFcRh5fsN49JmMQQWZJY5tSyf1inLETCYZ2fGkFynTwKVbbPxEGjz15C",
  "key9": "44xz2CRzoPnewuNMgpLeKqq65Rv4FRBpLPNfjB2D9us5HPAtFu8THivMbirU4UTJRBjpkN5u9vP71cBRdb5uYQj9",
  "key10": "5aTXuBcfDv8dFssxxoiUr85vBbcN6gqf15nzAx9CPiozo5b4ZuWrDcAXm7n5k72XW8TWnDKj5G1HAQ41DXjpCw4R",
  "key11": "5SstgWoLmC4VGZWeZiWaDTEXrA5YJ7geQhpDhCLbCQANiEiRsecfE8m5TMHT9v9f7zYAys9TVWJeCrjYGTNYY6RU",
  "key12": "5gLHh3UZ5vWcZJMMVe6QronCrKWKkAZ5TfJCYVHDCp2Xh5pQdXxJq5yQWvodvKxuDxxSngi8rDGakWudWKGMQfRf",
  "key13": "3Yhew4cZ1BrhE9yCNXyCJR7d5gTJB4NsSGhUx2ca1EFwRRzSW3VECJnFFwQKGHGF8YqnVNoc2WTLtCCw82ydD7CX",
  "key14": "2BBu4ZpM2ByKaNAXJLdotkNH7Lq9RsNPJ8PZURqFEK6N8VjsGT3zUiLJdzSLZrSMre2qR7XWf6XB5C6bhZKeJt7M",
  "key15": "4BHGV4wygJDmhBwbLrpgPPQDJw2cPwPG4FAHGx2pm3V2P5BNq7oyHaC3rSwWhVwV7o87pe5vEd9Ry3ZD3GmWAR5e",
  "key16": "2LxgcbLcjbed4WyLG23GpkD9uw7aZF28Lv64noha4AKwK6RMBDEAbpL3aG9fHw3uTnEnSA8nAPdyPBZeSSc3ePzH",
  "key17": "5aATe2yLNQQPr5ZMNWcCf1SpT65sFXvcacJuJHiDNbJKZyo1ocziQ23SKNcueCkMYoFX5gUzNePhnbseT5SUWTXD",
  "key18": "2QdBU99SJA6sW5X8QVK3QJNP4orbTfTeKfs31QtMnbD9zji5FYND7UHHnhnBE5i78M1jBfyh1j7PQ5DDEbyHCR3m",
  "key19": "2Z3WrubuUZYhQq5RrzNkUb3WDR878Pwggf67LfGw3ePSBxATHdBG2tJs7oS8VNbL7jrAou4XX5vbzL2NAEBRxdcV",
  "key20": "3gNqRyCF3KQ11pAeeAvQ9VkVmUMo7NaofDErwFAux7gdhVruxCrxFASuN2Gp1ZEr9EFvbCNJX6pK75Gk8eSRAAf8",
  "key21": "2wbGy57Z8L3Y8FUA7xoFfmbnFT6JSDhyczRjZu4zUWcpFMnqPJZL3qP4URN1i9JoyGTCbGfnP56t4nTVnsnp54Rf",
  "key22": "3GFfeEa3EVxFX3fxgCdHuDSMmBUzg8nasyDCybQLu4UepjfqvTkFo2bw4oXCi7gDorayrRgVGavXMyEx7hwQrRjL",
  "key23": "2JDoz1F1W2BuXsrW191zuVGaRRHPyYF7uAjmJZ5B5Df91zV32VCx9dmF6BZD18JsmNaDACnFUCXktsYC916rLsjc",
  "key24": "Qopfj3Gta3eGq68QsPxTXAvU6FetEy8foWiH4ARZQiRQzRaot1RZEiYZbHzMn9CK7Y1LVr3m1ybaoYQZtpNHENz"
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
