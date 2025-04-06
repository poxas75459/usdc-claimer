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
    "64ZxbzwVEozBEXuq5ff31cA2ca6yDjFU4VtUaJ7hgLrviKJ4ymBAk4TDAL3bapr3ziFzjaGic4eANmbrqkFtksXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mdF5U4GWhjrp2oDDDEnQ1X3GoR1qCkFf5gbSEoStNwGiRXeymruWVMp2LB8xd7GeN5m7ioK9twKM7SaJuSU42Dg",
  "key1": "4vqM5C3CW8kePubJ4dQWC6AavpjHfEsKHHCMjedZSBrsrFK5edJsoBj6NWE9vJy77s2nPFJb2vQ8w9CzRh9Jr8W4",
  "key2": "4AGqQdPxkwNKRmjYzh5XTtkkhj6SRehezojSu8JsuaaCYJT42BsW8YsnfJC2Hu3VqxiLphaihKXbUHAENsHP6uer",
  "key3": "25rykb3egfrvsX6cYk9F84U9hshxx2m2UH3hL6omnk43PawiGt6Grb4dRFCWLdgNSzSLGwZU86tDgCqKqGQpvrGU",
  "key4": "23XBvXcaCWuK5ULgqtWFNJadSmptfK8FVHMLvShd9bHvbsYEzWd1fxHmDDPgEJTa4byp8evhwHuxfLen6Zsc17sw",
  "key5": "AjgxSeZazJNujeFUFzu3xcNNxvapypp52k6woWTyu7M91inxdNSJu9NTTwvsZ3sEf5e1NC6roAcLCi131maNWqj",
  "key6": "2MCtScvDLrk7Jxag5Xe3afuk5DdzZdYDqQaTFdseVTAewKEavBXsgbJpKQ3R75hnWzUogW5urhheD3eX79mHVb1z",
  "key7": "5ZAncRB61gCDRKB1XcTcCfkjofWbVMvLBQWKswkqDL2Crkh8QHKXgwSkDtHRhH5vR7siKzzRdpLjA8Thz57Fbx1w",
  "key8": "2pWeZMjez9LBbL22BZXLXdRQEhuXo325YGeL29p9p2jBqhs6RYnEh7k3Ka8ALxFN8C5tQRhqWcwqH7TiNtEa5McK",
  "key9": "36RQeWQ92bNPvcknEPvispbgPngFy1ozMyPsJQswnnSoNmeVhQHLm9hZAnbpcURGCCFrr5zn7vAK5tYRYZRLmYzu",
  "key10": "2QFZfBGB3ueqLG1ChQHXBJNfGvu2VeA9n3mJHXyJc5aHZk7jfvWEMkTjaaB3MHFPamA9iLsQb471XEJu1pRxhvUT",
  "key11": "b9fG54oYHP7rGXeZ1QdWfFnJJgUfpYkptQRMQ2BhYC4yvRsL9UYf2t7acRuScokuR6ZY9m2Qt5nndzEUTp2rRfg",
  "key12": "2q9hRmx5gpzpruM6kfENWiVX2d4xZBzdoYBJKafe1NWGT5TP9jFfuZC2WTRG6VYRobYgZKokf1YD53ZVkSHGts6c",
  "key13": "3EjtJVk5gyEReAj15TvVLqgrdeTFmfPAtd3MoiV9mqAy747T7Ck9RppxJf9VYBwg1p7UeC4rwRasctMg3fUKiNs4",
  "key14": "4SnBEGjHiCRexZJCYfev2A28qnHPM6y5BYA5gUwurrojpA8ojcfJShCFgqPAEwBr3mbWeWG5v41LqFWKdoABa5vd",
  "key15": "3EaZtuRdjAE5cDHbmQ3fw3TSqhtuBaz1japwpU7gqo5vKf3mNwsgS5PygAQPkN6i22etuifWqeJo6r9dcfC7Uetp",
  "key16": "5SupdzZ4C9ENngojpCt7U4hw6yxnCKR5EiVTnTUPrid3BWM4qy3nJYNuJMt4uwwD4rnx2d7211hmhK7VcTzQCmUr",
  "key17": "32ZUH8NUf14XAnrCpUbiGRfYNvko7T5jjYSbQv64VSaSu6KWPKPgwzydSdPTyMcgfbpMNnRrMmyHg76fP1J8nHRx",
  "key18": "37uUoALBAGi92UUnTzehdtG9ge2c1t8tiNLreAQt8Caj5ay3FXpTNVgz7GZsmqM6nUL7hSdXnFbBGKb6ZBZ5AqbU",
  "key19": "28kZz1Ln5qePC6Ny2FFV4Q7bqo2LLzyuCVBS1mjZmZCKAYfATfZxRzdbYhHy12Co1YnWzjfiSTHox2GJdAj1pnxo",
  "key20": "5qNf3scmiHN1FDtqJFfYJm5ZroQ1sGFrwm47wDxSP9UuDiuB8tvBbgtZhJpxQgAuJEpocn1PLnjmus3RToaDXMj7",
  "key21": "5uB1P3NvdWErBL9bLdEiUiED4Xc8fS35sBuRefNCqo7GL64qKoQSSe2T53o4syjaqHEGeGEiR3XLetLcHSBtuXhZ",
  "key22": "2azfFUzC3QbGHDsKqknAKXzEKGNQTcwXo4GeFBdQCqNt6m9qAUqAu9riyAudkpjoQ7RL6YSeCaZxUpoDoeFvasSR",
  "key23": "MBDLbTUcRvVS1xXHEz224sHHCYJKVGfydhMr1KfuLKE1fdCUADqNiGKjbhceFhcNn7bsddiQEaaMQNZ4y77CTZk",
  "key24": "5u98bB3UBG9yopmkeBLGwr8XkDvxDTJYqoEPk5AcPkdPKjEHjYmFkehrdzLpHrui9kkDsZ41UZYz5XFAojRiR7P3",
  "key25": "61MdSrUsbfwVzyhAf1ZTCcurGhwej8LtZSAxjB6FeZaUjETP1jBZiWiqeiN67DntaS9kfAqyePt3UCEapWvetzQM",
  "key26": "64gyvSzMVHRCyRYHTZzPPyGU7oP6gfDWqbvZi2jAttXSM9GTNGCXZY4TUk8PmLxodkYp4DRvyqxH1QtByhXmSVs4",
  "key27": "cT3hrSZs4vev2h1yRAARfLcjz8vLBt4YB71smcyr78qsLuE7QbVid7BKwDpuFTyKYJc8haERR9EpX322g7tgSJV",
  "key28": "5JnHTkw3CpJfjsQ5dRSZNcWTrVAjf2wBu63j5QvVF4sDNKLyP9iTS8bnw924hsCatEw2ALUCJGsSr8ZyRVQSt3pZ",
  "key29": "2NRkpVVvHmCHRQJz2hLWtLZeWeU5R2w7wFghPhQkTagWFmZt4G8jpzNR7RadMZksdVy5AGNJiBhdjGkd1WvszHDh",
  "key30": "48PhQpqzy9YcjkaK3o3kqHaFoT2rk7oVZdQFC59oHsXGpAfaDnYgnKagByxQCKkGG7g2PkzWyvGbpj5PQNNZpiPA",
  "key31": "3ERQDsy7Vu28J7QrHUGgt7E4RLAdsRZWDucQXmB6xqn7wzQQHzzFpLM6DjpUkDVgYYHCHbYx3yCyVnrZFLVBDeBF",
  "key32": "mJbe6BiQVHaDKWUqRSaYZMJYuTgN3PJuFPjY3ZkS3B3UttVB4QEcAZKp95fXJhHd8K1RmsAThTuUzhewUc6uvR9"
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
