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
    "3XN4ap1v2sx9d4ouDfT6vNE1GyUbnYjAVdihDo1jEreabu9rJ8upcKKj9Gb5m43yMSFDG8uqZi3f3ZBcip4dZ5fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAXzoM5zbXVUbSoaSBPPcV26FM7diGWUurZKg35wfHQ1YDi9Nb4YHDh5KPMhr1zvxyNa5CKGEVKAsLh6FSrPNXF",
  "key1": "3N9kE77WPLaDF7PnvDHaqH6At22txxb6ZeFux1Xhpv5FonTmCo74cPtP9Mpfzf8uk9P8eVSC2aCG8Ra4zKPwb4zp",
  "key2": "2WKZYE3VxVw1QPGmQcNhVJpxeQw75fdwru278eoxNy9J4nNNVtieHgyGNTag1GwG3Dq28CQP9MQnN6mL5FLHVc13",
  "key3": "kWkkJGcChPQYUCDmRJGriLTmHxPhE87DvwCihucv41j7svbjkyQSC9GwyGeMVwXhnMZtXg7bwpP2r2kvrEGgARc",
  "key4": "eQjA2NCn7HPZtUzAMjWDXNb3cSABpEFAEFaAHFSt2ixQBGQmk7F6np6qUhRkC9BBUrotELsCoGiwcf46yZJ6ztW",
  "key5": "3ZqWxD9Ebt6x6VLu2UR2oTBZQW9UTF96aiRWSH5GzPEMoFau9BbgDCdzFQ8hT22jv49qq9ondGo1j4QdfRtUNpMU",
  "key6": "5DtUrUxB6YoVTnxLvnJJCywAj3MEi1qQQpX1AazhNYHvpessEJMZv2sKJLJnh5mCK5VdR4gxbXWJiF8VwRT9N46d",
  "key7": "5xpTyo4kNAFKAiApYmaxk4WHYpAMFBL8Njp3HYqNBVb15PUoHmWfYgxxD3WdQJq2cZFRMWDAk46eG9FijjYgi9ns",
  "key8": "1E9w32Gw7vjwyoDK1Gz7WJN6pD4bbD7RqMhkYkREy2EHkayrvsGCLteJLHJyUMHp6sf7PzvY3m8c8bzZwbJ1Vv6",
  "key9": "5mCAoyhwdZQA1Vgbo2oFL6Tn4CRuvbG7p1Bi2qgzM3twheyQyzSrWTxJDBMbjRaEtm76SF7PrPsZ5nEeHxSv5JCf",
  "key10": "5b1Shb3qZXNbrVa8C4NtQTHC3ofL69md5jDvogaATNWQrnX8RMBZnhxGgVmiqUwF3BzyUfvX2iBq3u3yF5EYGF4f",
  "key11": "4sJz87V3Sj1YwsXBxTJFkde4Z1rSLGb4STnDMr3mRZ2ozZM2UQxjBaeDFUVUpGuDbeFHXW4D3BUAqoCVJU1Briab",
  "key12": "FaVDUdzUNHAmvPCtA4Kt15VdpjGCWDXBY9aGboH1UVjr7MuUYZ4eubThMiQ17K2JDYyM5zwJqs3XoQoMbZ5CmG2",
  "key13": "39TGYyT3tcgn51ndzwg42CFYeDr3KDrA7DfgmXy1ryNZvWWXCkjpJ5PTcoCUyaGvm3QUeenw4AXzq1DgBDcbJJWn",
  "key14": "5MYSMYArB7Hcja5kBD1RBe13tS3vZcKJSfRBXTbP42ay8uFEm1c3ARWjbJVAXsbdeoyzPDm5zePLEWewzSQnAtoZ",
  "key15": "aWeD74suvTftTvSPfPfuNMN4cXMG9f39CQhuuRLGhtX7kwkJZMHFi25bkCrWrXqM9jCcqjDWSWTVtg1hq31LVMD",
  "key16": "4wXGGaTHBksrhCtQCzDs16ScF7XveyRmGHC81T5tYYhWheWR21y5p975FSjRLSqVp4N3N9Gefjgdnk5Zwe7iN3x6",
  "key17": "4XtzhtwSbRQfwEqKVHwoEXqKfjRSxFFwXh1mv5rmtbpnpiHbZcfJnxzkRirafhrj5poahWWPUxme8nfrzfggQxCg",
  "key18": "2ZvVUqxfXGkjYa7sBzhsdJopRXSwxrUmLDvY1WXzLGaDwizjLEiEjun5qCzej4Z6LQDqLUEbMDhn6Xuey98fUMuu",
  "key19": "UVkTw256uN2CRXomG5zPmUXr1G4oAALxMJyorDZM56t3eu3xHt9beTPxtKJCbV2mizczJYF5ob37QuWiAqy9owJ",
  "key20": "U5Yn7cEhgtM99QYeT3WsSj8536mvJPbhTrfYaRiLiZHhiWpaW5svXmdgScfGiyVed7R3sqGv9gL2163xaRSvjFa",
  "key21": "54AWVMsYryd959hgjp8pE8B29sAJo7bfWq8HVLQmdLE8qxUeCx9U5SGV7xTRxJJifbiDYsuhCgXUciBTruLmY36W",
  "key22": "323ycUy49pdARQbaPzPLxdU3PMDYxdvf5X5vGw7m8rdpd37WaFfwK8NoHNqkaPt3zG5WzKYWHfpTMqNEMcY8wDyD",
  "key23": "3NMTQ65C7fPoRWeouMtvhq1YCFc8ft3VRUCY1upMMRvQ25F6yEnKzBzoTDDbYqVY4vnFGLTtS5vTq9vVZYTXtQ4K",
  "key24": "533xSQVJb8XXosdE3yMv8HuMMwABUAebdYaPKCRfym3Pbx7Ko8ew3iFtd3kzj36nADFjShPWGbEK1BDhSLXJCxsk",
  "key25": "5kmmXWYdf7nUfdLcXEvz5zDGyS6fftrw31Ljk1QwRuTX3Xy8HK9CJqgKBuSbisRwtrd5EXPfsX3cxjexWCLxvPbf",
  "key26": "TUZHBFBLk5egJN63PRV15VjzFbr6n3eVgxVCiZKoFKbZc4nf6aQY9mzhnd6LxXtoa2LhPcpnECLcvsySEh9njio",
  "key27": "3vN1Sj9UxGh5RPtSWTqAPFuSyuotvWDDiGSsMQPpdMa5jEsFTEaZX8LESyjpjkbD6A5im4MyUxMJa5SpUBPbyrnT"
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
