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
    "3BTHARKUJXTa21AVunp4ksUeBd4AQPmgK5nUUPnQ19gKXeAC5Ge7cDbgYbpg3KrXNVh7yDPovWsVQ5qMSJA2yQo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kvk5icWuBXFiTkZdjhbTvWUF6iULkAwzMCT58szxEJP4NjfacC9Su893zZqnTH9UCF6LogEuaskiy95ZZbwuVae",
  "key1": "4WnRz5cb84t5xBTVuBhpg9vnkYkUZZi8XjEjMC4KcEEJq6hmPUfy6noi3fYbuJcAtTQCDrUNX9uJNP8c69ee52sK",
  "key2": "27PbF1FsiqYLf6DHeBk6dhAbxPQcxF5yJsm7wnqCJgRBUrDe2ZNK9Uyaw9gfSWegu7E5cJrP23UCJJd8oDwj3iEp",
  "key3": "2ooLBht1gWm64Doq7UrXtoytgfAUpK3Ga2oUVf2CALNeooMPWr9WUcPCh3wMRaFqEMNuLdJVA3RJJAyT8trfabCQ",
  "key4": "51exV4XEtBeQuoYNrJkjBzL1ZLbnTuZgzkeZhg17s92ufF21oo23JYyzV6BkjiVXnFxmegSucGkjNTeeKgU9EAJb",
  "key5": "FfTurEgaAnS1JozAbKBBimoeuf6YmTGAorgQGxa3wbD5rGmPf56jpG2YZjkVhuPAKKsMvb9DSeHpgWepz9ne4JC",
  "key6": "4cHYb3EmddUZg2CyJgKQcceMLgoMY1Ev7d82M8hKqrPCTbbjKdHnPBoGvsRRq8UBXSFyrrRC52hrfEkYkHEDFWJv",
  "key7": "4kmt3sdopgzkaM28eTfK75n8nLnsThXqaB87gPSofVULsf3SZ1RvL5j58yALyqWRR5wNgxXrHe1pNH4LiohGUGbP",
  "key8": "3Ver3GbXbACB2udghCnecuNfzvpq6xdTkSAzvix82UZLB4dRJXNNsJaGLxLdFScxKrKPqjYJquNEm9d3RDNUHpgD",
  "key9": "55uPJEfsLDn4rezsZEJ1j9TcC23YfEfp4NLR1gnY7YV5ftNEYTPHxhohhvsqhq1WgUux1qaGWdkdk4N3kkH6F9K",
  "key10": "59PF3HEXG6pZYLhNervtLiUv5RvUTuQGXXGFZX7iZJLajMi44CqJFNH2C8iXp5VdvDQHVDXFF8a289EqwW4E2Rxi",
  "key11": "4Fojp6kpMdeJ5rKWzjuCL151GgFZjq4UgUp7nifha9YtidaMvE4ce32iL5VTpuMAX3PHPcodDNTvm6nUbCabJir3",
  "key12": "5VTzbd9tGYtSf4JTvTUQ4J1BPbESwkFCNVjxV8tPhWqWNenD9nYDyvMcb3XHpDLMk4PR87BLpqdEHsXoqi9mPHPT",
  "key13": "321q4vX6ZhN7KPeUva4gNdpYwxumU3YDcKTiKFeNfJZraGUDxmACWZ8HzCFTmSRfaDcyQ8e2gCZaKsVmvN8nzdUX",
  "key14": "5od6qBq3BYkUsYNispXg4agYkq4SvBGDhHNbzMckVxCSkCmR1dz4zzqynab9Z9zhTfDu9NC8bpng2NQ2FXvqRKaA",
  "key15": "4bBboykyEokVktLwLVvV2nZN5XjazCLYx995N5wsQjGAwmgegggueBhbDpfTp8RzU61MMyqjzJUw3isngQwsCiS3",
  "key16": "5HCCjXTAjsXrebRZQwRqiMGRCbpYs2bJuocJCLaFNjMoJvbRv5xUnvbKBvNvk6EiwTdMfcEPipCnXREUHqnU8Ft2",
  "key17": "34jkyRbPdNUiVL4Y68XhTGxquH5HCWr8ntxoQ9n7ZJUzzNz912Py59ZeTS2yGcr5H15t2xxYRYcELegN7yn99Go2",
  "key18": "5T6VvgLUHP4386jTHThD5fsNCJLwCtohxmEnn5KwiqdSYrnBnZzCbGgFnh4XY2zdULYdFXAUQji4BmcGgZoKXsqV",
  "key19": "Fazo8gGSRkCstPHnCnKXruxqftwma4FpPgJkiqiTN4BSsE1PqaZCdnfiWf4uhkpZR6z9SAKKWRzFm5EDR4TQ1ej",
  "key20": "3CFxsBK74iEC6LpFZwZexZbq5X2BL2isj9Xkft4HFRDj4UQ3prU1RQo1rnu1qUJRXaLw2hRvG3dXQDxmWN3ozA7T",
  "key21": "3HptDUoNGkirPBjDqz9zrYxZNv41upfd78Cbop3VXBe8m6gtDtKteZZLmkEDPxMFhBk3DPGAmJvSgC43J71G9Tjf",
  "key22": "4xtHCm322not9Wpn8m5d4zpnxbXMUz7axUSTD3v1iYUeThzsQBiY9WUcUNi5u1AsrYbk7n3e8GwvJSscqw5B48PZ",
  "key23": "5otTAJU6KE9hideynogSd94BuiU1fWqCun3jyM3upH84DDC59jMXXNF7F15psgyJbSA6AZZUBuAB7JnVBgwBuStp",
  "key24": "4TvxWazHyDSXfpRNid9cVMnkD1gJ26kdi8XrGPiqUn4qcm4pmnWpAyXxcDEmgGW5JPCDHkVzCuoV4gcQgb8vyTNZ",
  "key25": "5iYaBRVFjHuNSaXAdSJ9iYgde8zWoV1LUonqQPe7oBtLBjuqKf5WTwKMwMLxufDj3b2wdvry3Vh1DWe5WnpjzPnY"
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
