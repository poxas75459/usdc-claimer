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
    "3pnkLwDs2JcWc9JLi4KunkcrRkVBBxEXchsP8TR996aATXV3M6MfdA8ZFeQ79uo5zrAYJf3yejZe6qzwKr6CzaQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ptghQZtPrb1qLYwpMkFqXGrPp6BSXpGdRHS7F3VfNiQzTx3eCKgSxMMHw4Mxpu5SFWpeuRe3L42SCpjLa51gNA",
  "key1": "3c2WiyJx3tt5KtLZPVpcrNC8uMiv32Ahp75T6WSU6dL8oNM2wU4BrM28ec84Lrbc9mtAd1RWZGEqsLvz7wn5xH6b",
  "key2": "45nvZHk72TjpbBSSbTtfxT456THG5bYe6LRE1sijkRgRVgkknH1AYBQCCgaWEmPoFCNya3Y8jbZwrQC1MRcy2Cmp",
  "key3": "4VXuTDNvR7rLm4Zd9XuRoDQRW5eadcVed6PeabKMstQx4eU7xP8eDXAA2jDjMkEFKR2Hfq6K7Bhj7XWpRxj64epV",
  "key4": "4dL88rxWuDEBsyEt1BSZDJgrsMugdYkD8tECAfpkWbMzaS1TDDpF4eKaUzWScsbLgfu2xuDhEr16cFM9tUhEydNj",
  "key5": "67g2Uc2z4TmL59vvdr3JanYfS7yP8au26aAmM9uiFXaB3zMACqepm9evdm78XZ8XGew78xigv4taiPve561nscGN",
  "key6": "2aioDNpNv8encwh89QXotJt3m89q5s3JgNgbiirBHsv2XqmZKMsohG4VzZGNpV8AbpM2bfRkQ2hs9AyoH8N45YEY",
  "key7": "4kW9D3xWQmuK4FeAPda4oiTacM7YndG2CWFxamSNuSEiWgbYmPSww1oPiW28Rq5UpnnwJpuT1JuxLYNCTV4sri9Y",
  "key8": "4NReNHd4yrjm5kLgnkDUS6MDfBXVp8Fmmu38scikXDbVNsE87vnwmWA9mZKjRcmVLWLFGvdShBaqfDGaMNmS3SGf",
  "key9": "22yLMMdgXawxgXv4uufAwcQNUGT4c9hEeHaN2fomN8193Xr72C4MWBb6MZ3F2LUUkrGnqiBek88KFXAsn2Ns8JAq",
  "key10": "59xAbq4x3nLiu9dxKKKQmFhizZKnXSWQ82oXH3zStMYT4juyuQVmGwRsHK2ddf8vb2iRG3qmzc3UP94asMPWhhL2",
  "key11": "4DV9VEZMrYbxrTwoXAjV6rCN96X4XL7ERvv6n4gocnd2oDxWv8gL5tpSH9yh2C2iRUcjszBedtKJrYGK9Vq1enea",
  "key12": "2wiAX7FMhGCmVyVe6KXSKh8gampVsHgqPPvVXJhZCcxrgaA2itX6vnpCXuFoqQ6UYBj5VnCgpHFrPTUDCxq9oQH1",
  "key13": "4w96uCWzDSfMhxAEvuG4vbogKoeihVvL9Rpm43yp2tZKiFYXjZhWomJAC7thtSNvRvQStLDQ6NTy7R1P5XQ4gbHU",
  "key14": "9AVWPQevwpa9NHU4VDTjD14BptyfhsZEhBYk2mwkvTikeeFuoBRn6WG3uQSrktucW4SGYUDQULT67oJTE3stePU",
  "key15": "ms82BUTVfCmyeULgqTuuMTScGgsJzymuBbwVLqAPM4ab8XCNo6f3W56nWzjytA8gFTKvoC8FJnaasrrjtvfJd99",
  "key16": "4Ce5kCXN7q48X4wtrb1RSRN7ief3S4fqx4VLpfJvn32PBqLRHjZ3S98eK8j4H6qvGrezv9XPs9bsXmujEFq4wwMG",
  "key17": "2fbu2BFJHSxKxWKtX2Z7snP4Mr7y5HUM3wZGNTF6uaKZqRgg5mKw5brHFviUvnHg5QNtJbz8iZmRXxSSSautJWEb",
  "key18": "3vaQ2GY1ixy581sif3ckAdfziLBVxrHUB1JQFs9ZNieWkYAKuASQNfA5WUc6k1LLJJJc96KjXo9xAAi6c5A9cxuS",
  "key19": "2rmUHZdurH6AFhtiHQVxYaj5S1MPrag9DxQScu9cbzJyqeymaTQnAzuJhM8xcVFHwbpwZqTcsJ1riSy6qSEccNd5",
  "key20": "RZrEAhv7CoybKHHdgACnMCZGcRp61FkLwniy2Mg6oR4QV2rh1br4yYNbLaXQNCq2SKabEh9xadkSWU4siZY3xQf",
  "key21": "4RquzL4xoV3WSDPpUhqXmUHKBmpsc53RH7fbwC2JpQrJH9YtRwNpkwhmwr9hydGbma8c3kJTazcUeE8L1PSKFJM5",
  "key22": "4uQ8anUiVsmUpvseaQWBSCQeGunqF5AEESCRzde5i4LdYmbiWgrxReWA1gmcA2XxZyTk7rKuuqKMtp1czF9BhQxk",
  "key23": "3BfxBYSpKMDX9rrj6uAosmVhUA52FzwJZi1ekdWKhAbAGRinaspwds1kYmRky7ykcWoAAyvw55EPPQnEEHSiuay1",
  "key24": "3TXn6Mb2yyrE7TF5r1tsp8CUyeQxtP5jbX9VLzGu3zjiitTtiyNdF25hJNHbxn9g9wXjP4ByBuyzKYX7VyeHqPr7"
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
