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
    "x72a4CQsDM6psCAAfcip2j9ybCRanGtYUXtoNSPGUpY8hjSui6NNh7B6udpFHxcSgHp2ikKNoiwj2nJ5kcgz9sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJKxvrTcMArkdkTwCmQd3RFZND2dnd8ooG8ywUYDB7PCk7hy9ubtvgCoksqC6HAYE6Umbrbs72za829co3nAy5B",
  "key1": "2rjqnp2iNnZxxAkEACL1yumb6qcxVhAh5A1CHxxshFqKh3KD2phr6ZHvNT2mFVxQS3QoT82rW9R8UWNFMSyAuqf2",
  "key2": "2iLU3FNfJ3UcdqMpcQUo1meX4YWkYCUcNdTaofvudQtbYj8xe9aWyPukXnhrbqpzqjKiMZx1m2CHcp9Jid8nCsnD",
  "key3": "4BRBzvnnS1YjLrLNK7juC7rcPbF8jfBp9jq71XPQmUNUvACT4cf5enxobMsLBmQi4xA3UZFqBPDEiDAyNmWDR5pj",
  "key4": "3K4ekYtvhSzbaPZaV6PJzkHB6iNmidWX6wAKoPavffrhuQTsaAk48FWVgwncFEzkVYyNLspMouJeMLFryt99NKcc",
  "key5": "5Ymdjp5E3dgWhAoShxrgVSkEChDVvtmmcydVG7gEBt6uqzCpsJ7dLsyHWWC4pnz5Stz91X49a5z84sDDaJbKY1jP",
  "key6": "vJB9cBob4EQsxeenbhMNqfngsCWg3irEn7HWjwnUrkr8RtpNevL1TuRn9bXfmj4TuYabtfPbS5BvhtC5PqcNHDn",
  "key7": "26WjjqHXAi6J68MUSuxheyE7eAmjd5xfr2hMzA1xsTmj7BWCfGV665mRPMTeL5STWG2o8U19VcpGfLa8k9T9WSPe",
  "key8": "4S2afmyVqgXstBTmL213KfZ6kKGjAuT4Jki6mccpywGncM8hWRtGhRarPg7jqJ2Ge8SASbNaSgLMFgWoNiBCJXGX",
  "key9": "62mcH8N1v1HcET6Ew2VZJotBC2zNZL2ZS3C7tow2CumN6cqFmdDBdnWUJ7FL77eB9pbYh9NvYoM7eTDXuj2V9qBx",
  "key10": "2kqonMZycEuELH3n3oLmy18D51UYAZfXPdyCBi7vfeFqBePSPusjvxZyRBeFTNUvZCZzqtYtCTEPWvBU1S9gnyrE",
  "key11": "4Wk1PukTq1b2QjPqhqNPBQScCx5QJsXVywHV3PC7hjZ3YSc21os69QbcAkvfkT6PqLcViMhQ5D4XKbkAxF7eY6F8",
  "key12": "44GEk7WH8SwA7KvV3b1fBbPfkME7Gq2FyhrcdfUL9E3sqRUFUMM9UJ1hyijEp8k3Au34ZPaPGtx2yZSYUwG5qTME",
  "key13": "9A7dPJEaQ9tAufhRa23HcPJnqncahAJc9kG1K4Txbu3BXYmtYYv8cBoKLhBMwuGrZ6gTMap7agmEVX3cUVXUPzS",
  "key14": "4wJwY8EerAqUnsejYzxTNvvHPwvYimYLoropZsUJ2yvYMbHyoe5EfAaRQaHjJKABR28vdPCawBQ8ZavurJLTacW",
  "key15": "3LrxBZr469MBtEoKkTPdqtU55ymFQNWDRevJXMrt1y1fpGHd4DdorciwjYmiiP82e8WH3CY3KVgwiKbfCsRPNFQn",
  "key16": "2XD1uT49Hy9hZwnpz4zoMQRfhyev5addjsDrWdTLLo8aLT4tTUR7qrB8cAoVm1uDfdfCtfUmTV8PE2vKVA16qG4j",
  "key17": "4CabZu15m6URVjHZusGqVEkryWNkXQTMkaupzd5E8rDs4VgyR7PYbrQmtm5pjbZALxUSQpG7ToqkpmRm34e8eSjV",
  "key18": "3s5J1aEmyKgWXSh6GpbUkSPxaB2CugR7z74KgUFCgj1J49CtwFLvRNFVpZv8E3Rk8YpFfdZanN7u3xPh84JsyjVb",
  "key19": "5rJEwioszHGsBqwU32xyjffHxcJ6oh6fYf83G6CR51BywcEHkmAniqJr38tgRh1MGm1FLoNzoufRXVG4itaftdid",
  "key20": "4Qqvmz7f14YAjE3iVfAgytkPd4b7vsi8Xa8dAZC9iuaebna9VmACNpv436xmUatdE5kfLuJU8jqmcbKZyqGSTWbC",
  "key21": "51v6XurCZw8aT8Zpe5Cgtffrqw1MZqq2AShrhKDcgLBQx9ed6MTW9cUG66BKq6V2QCY3iZHW7zrRQhfN7Js5nbtw",
  "key22": "2eABsv1FAvjinXhgaqg5mxYgHdVUCr5JbdjFZzKVvbfifqqe2unJwrLbgbGxmfsZR7wSnvFfhEgYLExm1sc61NFU",
  "key23": "2JgtDnXGpzZ9Hi1sqgX8ExYncN679NTMpmoD1xVnKwDVbp93wa4EUgrr8TnrCSPnyZTXF9tS1zGSvHgMbURv7gtL",
  "key24": "kj56gcXrqJGbJKQ5XVSPXYG5afKxSYGz73dQjtxd2YxCo1Ghsd6eJk5hpS8ijYwRon8GA5z6RHP2uAmyoPLxHom",
  "key25": "25hU62wUDMM4jLviyYjZabs1sezJuzTWnrjgiEC5YkwtTTH6HLxVF3tKepqxQ122rzfoQcozXGYa3ZSuWg8DEWii",
  "key26": "5fzAbBFjDTpZYgfmrnihF5AE3qTUCpBtkbK4oh8xy4bDbzWG9zwXJ2V8QNyQ2rQsoJwif5nfQYcxtahpa8w2uYA4",
  "key27": "5ueKS4LdSu5x8eDhuwFH9HNwapokXNerWhPcSHpT4XSEwfDfDriQWjshgvdSh9K6LeTNShPK6DJs9GZM7Vr5Fe6s",
  "key28": "34DX9nHJTURjAUjoGsE84BEayE1hPUvyhE1MMxiyWSQNBgQ5RBNh2sAKguCfDdf3UKYP278JAYpU4iLsh3Zz3ypA",
  "key29": "4aq5Pwuc1NTdSouC5DJED4GDg8XMyoFiBv6xKcxoprs9bRjm3iyM5MUpon6tXod53E1qEZUrut33bDLUPBMfjnYV",
  "key30": "38mQnQYRg9rUNT3mxQ2WdFnuczfAx2gHigTuSBoUpnFpESaATgpH9AdrAe2oxDpWPDQvavBKD5YfSmJaZbqP1FxS",
  "key31": "4DACnFy5fLvvh59GPAG6AjadxS61T6evaJLaECtbsT57DjUFZAgojt1v83aWnvsk8UijvR9YtdM5aXiTjiETBFZq",
  "key32": "4z1Ynx66RFZqZhkqynUBhNatar3RgA4m312SmHGaSqRP4mL2N5zybjaLUg6gHottiwTKRmoqJzBc5WnkkXxtQ5aS",
  "key33": "5m96HbTxjaDh1pHvygr5TL8hRYWdebbGJFyMBtYBeB1uh1fVfEpjunNjc6YwJDFsTNb35NA6DGZGSjJDU1YfC9NX",
  "key34": "4f6emMymAnuidmXTDsxBRRFyMP8qMgzMnk3JyTytxYx4wEP9xTEByEs9nScpmdirFsSMHh7ThrSxsSh1mT6uNKDR",
  "key35": "5u9CHxYyGQnarpENV9EVeRLYycyJ8Xg63caKkPimweWnxvEp2a6UmMzEWHPwmC3J9dce2GVEKGPhhRTq7ipdZuGc",
  "key36": "5gvXnEbwMX1aQoQeQ8Metit3CubMwt3Vg3M94L7KDb57R3u9xoXPMLdG3GgRuCUK1rBG6Vuv2N6P63VpeKZbEqC7"
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
