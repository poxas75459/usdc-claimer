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
    "2Mo9zbZPwX6dvhfQFVJLEsrQfaLa6Ww6fXfYDBaM8EswgpqPNKEmWP2riFg9fEpAuoBTSABeeqCuYpUxdYGNX6C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41catEmtJdimrPtzQRQx3CxwwEMbYCtSZYVbXywJMUJD75PYHRp3hhQCgnDCbuULRBxSke71gZZounmAcAK1h7nK",
  "key1": "3wCLRHqewfeZoos6rx76mE6VB9ieFsooGbnWoRrQrnvKELwV7kkfDLNq2sue85TicPGjN5xVtYmueWociRR5s62q",
  "key2": "5m8LGD1NM1KGQSBHjguepMMgfRoFxED7MmSc2WXzh8jHTw5BMQN62A43kQh3N7q7LyEMUqKRuhq41L87LZJrjT4s",
  "key3": "5871FiUUDmqWa2MXjRqf2g1xrPywpLhEQQCxS9Ang8aNYMFXZURuxzinxNr5K4AQ3NJVorf3p2DZU3ZVATKPFnuN",
  "key4": "2K3NR8GqH9CopTw3SrF5dgFwumG6Ce5epW63aSaRHGrMpxzn7NrckAcixMPstMQCQ2WUb7NT2zn8ZD1kfZtArgPj",
  "key5": "m7xuPHXHk4jKzdksyPLPW3YWGLwp28w16VqNa2H2ZY1LmHQF4banhcLF1611D8AUMSAYauZN8byS1R3TutxvDGx",
  "key6": "2SjmWRBkca5eHcXCmMNP4GhBLSPjhqj8ZiESdrxo6zTm53KpDVtDPRMC6Ka5ejAZwYm6DjowN95wekb3NhGGQrSP",
  "key7": "4LFCTsokfdG6AAbU6VXrgJ8xduefUKvk1kcR3kADWw5zyyTm8yVAdgUmx4KBqEwovPqgtfkxoL5LTyBX1E2tr4Pd",
  "key8": "4vf6zKfBhApE71R4y3UBVgYUVKxEUPckqN1a7FkodgxrE1jiwwXSFnxZ8frFedKpRBKqbs2y6piS2R2PmdnNNHa8",
  "key9": "4NeDWDcrxoieJx4Y5gE1hvuC8MWpQgUpn1NsHuDfAdTLdk1xjW2Zd6NKmQxu38VxmioAa7S4sBQ17nD8LQJYuppi",
  "key10": "5n1fsPi4kZ5gdbR4z9yTPwKBJp4tvQkqnmtydj7oT7aw3BTVCiACw3xDEFS64h3uNouvNNvRzLM2xPNnRd3n2nDV",
  "key11": "2oFRQne1H8s9kdmmVEU8xBHiHjfn5YHeWdnNJJtoXPhMVHvinmYLWodYDbUYC7gFeyrmUE4uFmQmgaRC9gXmS818",
  "key12": "9bxRvue57Csjhz6JiJSU9UmzQUePtGQMJ7cwWRuzvHMxmSJgUTU4S3AWRMzFycYXiBfGsudTFTJYELXee7mwsjo",
  "key13": "2e2NJR76fXV7mUnr7YZzPoaBqiTsbHxC1yjbnGTa83bWYMnh9WE2N44pN2aRz117YzHFrr7r4nBeMGhHA1SwRCzr",
  "key14": "SD8KDH83JvxDew6EbXGJ18weqF6fKkUSoeHntDerXfwQdxd8KbH8earHVycKFY2RxwGrWZNwrPG7eTEXB14adBM",
  "key15": "tMYxScMrMPbocpC2v3Vmt7C8gEPGDBFFVm7tYi7CnyNWQjoNYGLKShCJfXt26PQZE7jfBWi1PMy4iaqTjikVedk",
  "key16": "RgCfwA6f4ThLvnAWdNpN6f8B2RdqYVHtqy9Gg3Zjxtkt8qCD8Y3g2HMbMduZ5CAXdw3ejqBNQujNDEukEY9tPjC",
  "key17": "48rkXWTuFR1mqYVjTM6CGn3BvywKVLQQnVdAcuqjFj4ffJDxgAHod991AEzkUEiqnCCapXBdfurjh3H3xLHh7aU9",
  "key18": "5K4k48S9ZKv5bdtuCYrG2dsDiHDGPGkvGKjQqjzrzpvybqwAMAhZo4EWa2Z2yEtsZLpTZRPicLm9q5RaJ9MneMNX",
  "key19": "8mtsEyrQTRRyAYc8WaKj4NNoZQfLgiDvgvzM6MK1Cs1tW67nZCyq82VFn1sv2w7EccniixhkTxiGetoi1LGtAaa",
  "key20": "Q5rjJKwFLQZNucnDZFAC5dGmpXQDAEteBQt4ii7kiz7hZFoPERHe68NnxWZFRNE13psSUbhj7ArEZC3DFXjpcZw",
  "key21": "24jYSkd8bm4LPHxA8QrQ5VDxWmXXn8GbvdhDVgacgaqjvmZWTVS2vFNqTtcMU8tu4GGZvPE2pFJBFmfwFJz655Uz",
  "key22": "3X54zeDQ8RNxttKGrpj1ttWRisrMYrAyuKUfDM5r9wcozRAsLQ67g5dLehL6Yai898dGmwyxxBDwPP6HNBLVjpMP",
  "key23": "XNQgg3KY1NtLQQG9VTSHbi5K3xDgsuVhZf5SDTVAN2NBBS2Me8bdnMiSEByhMDBnQpnTpfYQ1f7WHZQtmH7Ti3K",
  "key24": "pBEVHDLFQXMqn62iaCoowCECD6GbBnZGdo31WS9nEDVhpu2Vojp4JqCWPEjYWZ1XrRN8UyoBbvKCUoN56CdLZ4N",
  "key25": "5pa6Ykrmrpu8Sj9ipWcPgHS27nkTBjuNpNuUpbB36EVpWN9guESXzHB5VrngPwPfcnzZ7aESxSEPSPdo3FtCqX6K"
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
