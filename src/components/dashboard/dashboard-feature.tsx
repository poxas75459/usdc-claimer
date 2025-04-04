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
    "4yBCsN7MngBTVSFtfxRUTKLrPUF5C5eiBi8NXYiDzo9fGurxEwtt1TENE3bFkz1fZB4S8MrMpef8jG2hFT829ivZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fzuq1YRumEkYdJi4Aw5zKEZwhsAYwVuJRazKBH8NUcYbn6K1Fh7teyLRv1ByCcpf5qdgXZcFDrZJg3GRoS7L9eE",
  "key1": "5DAYJqnAu4jnQ9cHDuFtvEjmQtZMdfhrQ94ro1zUoYLa8U5WETp8FpodTTETKK65NrPAQ8DQdDcvnQQXcSHyuHyP",
  "key2": "2KQxyTgVFdJFPXzuoXhhB9iRqfXBLEkh3SKqx2eRA577Q1pqGJX9PEdD8vcDHSyErQEGkfD4etYMLCUw3VGZYCvQ",
  "key3": "7kdKzjHg8hi7C2KCMcqgnW7eNQSWwWvkLMHsmGnR1jrEqZjegbhYbBbPtVFiqDP4cugtDx1HdyBwqcv4D7oZWmt",
  "key4": "rif89HBRXPJWi1jjvXGN4Q5txZ1Prsh6w9jwZoVt3QDrsZR1fYeGihjsxSyYsDocaENicwTNz8G3qU6u2MeVESY",
  "key5": "cYcV6MuGyLkaJ4vziSeQFaoMUzuHRGr8q4Z2EAKPbQrLhozStXUZuzcRUnu5V2CZkmuGXuczscnMKDif5VUD8TB",
  "key6": "3t1gD7FDcdaWn6bGEtsEjfAqp7B1suagysdLYyp3u5WUrTd4TsnkhFh1sSFWy2iRE974QsPXCneLcES5Axh8zcA4",
  "key7": "38mVsZnTgzsv539P19nhUj7zix5WHsx6CfoxGyXv5KZ2Efz6SYRneK9SiUvwGuXPpg2Xzsxf3WVbkC22Mmn3gd9Y",
  "key8": "3hbQXWpCSB9JfhobkyvMy7DxKbCCsaF8uEQQqAYrH2ZNUeBodC59BrQSuTZ81acYo6oRmkeg9EFah4u2GPUugiGU",
  "key9": "4rkm1N42VFVR88WrXqaFfp7575ituoDmVN5HcNBQRcovxVwWMAmuutrVyeFgWLvk5NoX4yzDMPwpwWAKXk7gYDv",
  "key10": "5fUzb1ypPTf4sRwyPhM5YXjLxqrnjMK7ScrBnjvLnBBJhKFDnj4MsqixPb6oFFyL3YhP3sNe6XDTJ5Uxw6Uy4cEM",
  "key11": "5khDv9eovN4UWNgGSfGHxyTQUwigmgjo8RuTpkgpq9AHnAFaRf6CVUBD7zbJiLMTmX3axVFgpA4vZRMESg7GbEiB",
  "key12": "52GeD6VetjCAXVrBes9mMDgZ78NbVJhkzPYhWSUBmVxVkN2uf9GJKChCTfb4BtsFW25uy3qCpaCvuwBN9FVhwp1a",
  "key13": "4A378kBynaprUHvfEuu6XNfWoE6H9iwhxysVaFgC9h8o6rQekgsnnB28H3BaM8BaLF9mfVVNmd6vbzcEyRJCyzvr",
  "key14": "36VLHETRHCtdXDkftMNnoXCBuk9QsxciWt2mmrF1hij2gUEAhY5qsZcGZdiziR29waXAfGCLEqmgLijZQB3qhzGJ",
  "key15": "5EwhqoVffS8FaMz6RXSdkFYAPfJJhQYbMoSw3X88xXfSjiGHN1W96doaZaAsut9RcWr66sSwDuoNn2pgrFmzqJcN",
  "key16": "2T3zsQLDTczadbxAEff3exgaELDAKkissvadu3er294C2YL49SerzBi3YoednZNaa93Xzo5tiA8YbdxWcR8HBh25",
  "key17": "2xmgs1PZVdKpDZezP8ZF2VkDRViRrkdtDNLnzM4bHuXLMUc1PZ87TMrVcq6Ed35GyiwBK1ubwC1jrVtvCkEvzP4E",
  "key18": "5Mu8n5PbUmwapFxNnxLbHGAyLxgJEpNHq9aXBjq1ugG5spVdrjTp29xDpVETD38DKx8ajMiGkbu3ikeX5ujuJ1v6",
  "key19": "5KrH7SWs1xQyBgrd83SpL3yuGRzFBP2HgtdQnuXSAiCnkAKA2asTJL2zJGkKXeW7abCJo7t48v9sYHZTJgKvFqYX",
  "key20": "3mX9FEnUtnv2cXS2RKs5FUfUwHihhPUbhakpQY7U7GboNHSL5MoDDMBiqTChh53a3DEm9BNNWwi9rcxDqJwNqcqL",
  "key21": "JJbyLF5ndRrn36ZS9A1av1ca4BZhZ7zoAebyjhnJdWW6VmGD47eKrWkC8PkaoriVWhgo3S4P6KcHPYR8iKj2NNC",
  "key22": "3mAceAU3jNXvEBUFUfgHtHJt5ybb77Jo2NCkNdf4169jW1MjSfEYsjhtLx7Y3irAq5nVcjeWUsTDrhzLnQmBkQ9s",
  "key23": "4qVqU4UnhRxXDiwLpRxNk9g9x9ZaAhSrZspUyfMchibRY49JczgtVqLWPtq5qeRtmzVawug2JMYzjCo1FzkB9Cer",
  "key24": "4N6gw4yvGr9iboFhAxXGfFTRBnKh5tyQDhz6b4odVpYTDQaq8Vx2REMfv53savjNBo5AVV6QMFUXzRs3gB1mYVWg",
  "key25": "13LcX1quqmdPnHcy4XrJwM3ekzLGSK3RSCixxwMvVYTSVkxZUke2rgKzbB7xSZ5ZR7rrfKyQAsVW82L5xVvZDZp",
  "key26": "2bYvC9jkbnajTcsjAPa48j9BSXoJpS29LttJtnWiria94hbMWFVdCxyfDZnNfDJ4rmJP9yzdC8he4oFxqYGWwZ3E",
  "key27": "3DHRRzvfoT9vTyXbh9fLpvvBvRfKbopqWuLcuqR113a2s1fxCBDMZiiwMDdo3qPstbu6CG3vdNHMsQs4h6Y9bLFM",
  "key28": "3cB3rXfKJHhjdL9L8Td9kmWtcnEYGkLgrAzJj192z6Dj1s1hnXQ2bVALKeaZij4ZzAWd72VK8AEJhpjVWeVRMB95",
  "key29": "22Ui98TzfZkRWHk555LDXVwi12QtrmJQNcmydxjH3ZB7SrFZ9t5LRdaAbtX6zmhaRbSj5pwZ9XoCyMoBBkNmuovC",
  "key30": "25aagjrjyxYAzUgWoV4cczmdsStfJv2ybM1f7MA3MSn2J7rGZHdmYsT7zrsLs6fCx1qUPC8SfiVW8xX7BNeoTvqp",
  "key31": "2QNqZ86fK8b4ar3svo1xRom3aahH2zt7nDi6Knt771vcdCXsD8FV8HYD5j3H2TdM4FLskPHNkYsdH11KoVrtwmSf",
  "key32": "4F8cDvbv3kEK5NceFvXvDpcHd4NdgHnHpdC6iyS3AL8W7YETfXcqFYx5LmmPThx2mvZJzrgVjgPWr2rpaqyiXVp2"
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
