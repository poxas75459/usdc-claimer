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
    "2sG2S14BvTbCXHoMwpSPqQ7nwHnpnwJw9ja8g6uNJSiHdKghVFLPc3eQ3hAYa5GCt5br9XkSrf49CPmj3XPRjERh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9xC6VCJgjN6mm1iNnEc5ST3kseiBw1H76EGzxMDCen7N1yLKW3DskEQNAPYnH65y1GsvSLTWLUn7mNYzh87QEY",
  "key1": "5b61QRRrZ7rBSGAGMAP7bc2ydzn2ZjhfnQGYKtmB5yuBLzi5NxPUdmJQHELe7AhhyBKLbSXbE5rtCqzEoiKyQZov",
  "key2": "Gpv5yqRrjPvdjBN2TPToHKdg9yoveiawGKfhKWYExrSCMxaqRxBPdXBGEjPmQT4LLoVdULTGZvyieYQPqrZnyT3",
  "key3": "2LrvFhnxb2Gik2vywXacW8a1KZZFKWs7BjJzPJjV6g8bn4hwB4WBsdAeokFXwieBWFRGsVMBmKB2zbhm8Hy9J7cC",
  "key4": "4qcdiHdjETAg4Msa3aUeXfzrCgrhNBbFMWYw5m7E6rZ9nK3v46duRVkjJvtnyk6QDm9cPGTvF6kxJC9FKDpk3y89",
  "key5": "2FMiWY4jsCD7AcBfDLYWSLtMfhA53iin8HAWesTxCrqRgHV1S7NvdTzUuA2QLUNtK9F6keKDDLXJ1edfYvEYQ4d4",
  "key6": "PK1hJWU5s5kvBnXaQo7fNc3Se4C7Rqs88VfoGsNPCVQQScufDKyyZsyRjASUMk4DU8wV6aUvRzE8c5i3j9NyExJ",
  "key7": "oXoAMe5Qqy5QwNXTvQHie5xHNUus4MYwHmu92tygvw7tCiQfM3tvzjz6sjAuK5YrZwhTVd4FzuRRptDhAGT8nrw",
  "key8": "2rVS9g8agT98M8heVtBiw25e6rGugM9jDmJJvxGJVAUxzbWL3hpFn1BBMteUMuEAZKpXXB47DjD8m476iejVphJz",
  "key9": "49ua3WCnD3ftrNjnTapES4De9hNsNZn2DmwZWg2dJ7Qz16CeaSX9bTLfxehhM1VtAP2sMfvyLiRFDmHNHL8GBD8m",
  "key10": "5pDbDN5nVtDaYkT8MauTkyAjLz5zNHAcC3vRYxwdnKagdzGpymFUX6nws7adh21JBaa34KmunALshq6ks1JJw46L",
  "key11": "hoRbn535vGY2jbwq78ThpY2UGTWUAMBbymz3m2v19UUa7QiWrY3micSPyS22CAUZaHhtxNiuMiyP7SKhgGPdFK2",
  "key12": "36pVVTquLmp3LjHcrgKTFxDbxv8ABLdFLkM7NzbFN6fQxY8grBnZQ4j3fvA5CugCJy7tWNQ1TEVdo13qA16WuJb8",
  "key13": "4b1MF8cEHntgAeMRZj3BWBXNbhGMEjidktcqe78HWwqVinS45okG2HDSEBco5GBsQs1qty8TMywofe2ofSj5BPFG",
  "key14": "23inutKVW2ihzZtJKx7P1cB4Hf7SxgQDdd7Gr7z5cGL1jvhh4UqhrHRzMhXDZUCkcGefSKAn5eRGRbx3QNJutncQ",
  "key15": "56Hr25Mb8keHJAoVmQiWrvH9gTSsgLoSXLU1fBgX2BAbyzTiZH6P98g2t8XejAnyXCJXdXoLGVuvbY4Lz7ryeBVQ",
  "key16": "5tPhig9DLYZJ5KPa6VYE9aWW5ZMSdtBGEUVfLVKfst81w4Nhn2wswRCzp7Ev2quJxUCft6P6kZ2m9FsdwAEAuLZS",
  "key17": "35gvoV2gGk27miJ5EjMTk4MEGPSYiDPVU16VT7dBGP2VNy4XEAbp7SGxizoAnugYLwH1dRMaroQz2W4mizhfeih5",
  "key18": "Lt5dyWfAD2TmmPu7gpHRHYdMcaxFnF2ZE3o65sSRsXsTA4j1Vezt4Un63CLmww5UVVJ8NiMh3FgyFCFrEeUhiPj",
  "key19": "q4cfgHWeSt9edsbtVRzo1cnZAgAQPAYzsczbAtxwuPZe83rNLnUTVdBxDwhAtBQNANefFmNX4rj2rS1by1Loxg7",
  "key20": "2JdwR7rWHbsx3uBPjxeNNM1JX21F75nBzQPzScDUuEqVo9jFZhfGkFkCaCFmQuNMiN76sVsE2UbJwacWoHhhFDAf",
  "key21": "2rfYJUnjMajueNmcpNuxPLK2GHMuisZ5i3MAbHhWDNGsrzxsX4LyjkrLt4jX7BkSrCVFh1YGPnu2ttTu7sqEKjcm",
  "key22": "2eBggVUbMYn7WiGaYXHLVQrAv7R6VEdtck9Tf8RTfnZw2hNP35SWLVnuTjwSZuhAmhafWhzkNVHXikyAvMguwJ1M",
  "key23": "3mrNQMerZGpM82jvUS7w8M9LZAhwmWSnWcF7t4CnkCoUmHgaDWtjErG68sPDd7T2YucHZf5KK1WEobAW8wo9r1zS",
  "key24": "2wFbagVNV7fBth936wJkSCx4exAWQeNbTEhSZBDUQmEn1ntKJDaTk6HRnJmYQRdW1FC16kpiQ9XvADuq5GSykKMT",
  "key25": "2dGgkiG1a3tiSaKLLaueEoeAPxbEhwZicy1wAWcnmPvzZzRnNuqhkQHRBKGHTnUgPrt1HDTdRabU5A8rNvLTBzHV",
  "key26": "2fm7sUPzm5vDYCQaYy5sfkmQV2a8XKMN6CGRVqn4thwqDhx7XmKpJ98SuHGhAtuM6YFXfi4mHau8BT7NdR62NC4c",
  "key27": "3QthXmYAz3quV5K71JQsRNvqp2XWpAMeTZ1WEooSWQPtR69W1AeahuRfyswea5yKGqAU7uyVsUDcSn5KGEwGMmr7",
  "key28": "2MhvE4EQjV8TJnPEqQPWqyBQNwgiFZD1Uv7BD7DEW1kFohGrVdinwXt1QLdZgR3ZWhBBLrCTUYNvNfbuD9UjuS4E",
  "key29": "2txpC4mWnQ65qcrh9yp5iK32eYLiBmidc4FxHZYMhPwcg8GVCG8Sj7BTWDLxF4o9d2dJ9wYDk2a55WAq69gD3jxs",
  "key30": "k5EbG1GYTy5R3JjBnTemi1n7HnUTBRTbpyPvNxZtvZcjfXJ3SnrEZE79JeozKF8jzkcwr2TJCMWrVXWrYqZNrxM",
  "key31": "5ViDAhPCAMftMJbpZjWdNReUGfN5TVrXdE5frhxad8iXq2mhaD6XsLSpLfm678iTR43r3cbhAq8FQtnbSSg1BZWG",
  "key32": "4EHiEmRb9J2KwW9qk41ZTjhi1aaKRNPotUtEQYJEPwSog1f9eimud7NnJeYkn3StCGNVVH8T6tNPK9jKnjkZxz7S",
  "key33": "5vdUX2Ek5TFg29ocCBSDCoUbZ3q73wxjpyzySj7xki5jAG4jLXRbTBbi74otv8Y3iBBqwM29RRedb6S1xGbRpjf8",
  "key34": "4Zx8AHWMeKTJneMeJJYm6WB1FnZ2fLFwqPkU3XwZ5QBHEfAN6NoYbgx7Phk3HFxGrk5QUh9vnbxRgR5BKSwkUyqm",
  "key35": "3NLQGZuFWGvCY6PB4E5YetguMML7guTTcVr7NAQ57UiHkjQVsbmJA5KWV6EdsUuC4eVKr8y2oLJKws4mT3TUnQFo",
  "key36": "5kFBiYdr2WWv462PavwUFvoa5vaxak1w37nRD3C5YWhPSKEKKd5TRMebuGZgJ8Q5Ss2BPbHfyPsxkELaixqQ6etJ",
  "key37": "2DBRKBDYw86G8CnRv7WBxpjNdxvNUd6BFS8rPoW74Ppx2zzZoKysRRMc1rrovKYqDAhm6yofMqsMocNEVPiinQDs",
  "key38": "3DQKZaexgmHicXaidHJAc1KxN1UHpR45wx6dYZ8whLERaWiD56gJC43CAoXxuW1vZ9MhAxZMcy8yAkRtSTLocnyK",
  "key39": "5rDjQdgQevDX6cyw4k5riXoBerJGbBX6UccM3NjVrV58XrePYwyan9xzpw6mg1BUF4EMd4U1QMyqmaoJEhKWcmsR",
  "key40": "5x5gqKxdyECrLxyveeNa8qBqRVvCAmgc369HjcL5LY82EZKdvky6LdK4na2S17H4KeZkJseFig68zwpb7Wkw8Sxm",
  "key41": "4wv5v5VPPrigDcQmyciCoryL2RHEd2zTWJFYtba4Z9JAoemTFvDi4GX5S6J7b7nn8c7PuYX6f4EBd1y7j97UBhuq"
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
