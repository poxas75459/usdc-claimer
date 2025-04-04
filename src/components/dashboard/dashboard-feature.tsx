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
    "46nEYaGyL9k9NYMvP5MpTA5bLjqwANhsJJ39bcrVt4VBhEfr4h6oEDDJZu58sg6XoxoaK3Qh92cZeAjzhxeFVQHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnELnxbwXKcUQSNDLkLau6Sizii8oWWWRVKh77DnxjMEXXZredwfN3ggKcix1UJaYY5edLwQHNiA9oThx3ZfxU3",
  "key1": "5MoTEE7zXbhUWvcvMaTPRFB6RHLLZ14iJ7xGKTnw8icwHjFjJYHSuKZPK8KQmrt2Hc12vwSsSRg3XcsFMVhc3KiP",
  "key2": "3JWdQdXZ3tZF7TRnkcjo81pBuq2QFe8fE1tMhiZTHRfQpJKJ1reKZCxkfmc7UNoKbpRLkVRef49wSrQRJnLKMzZq",
  "key3": "4NQfbA5ipUXzD3nbwiFLo3euFzooypCyZAmMA31VYRnxamSH1XiAwParFS5YeULbsqQL1XFUEHaW6UJHDL3xjPVV",
  "key4": "4r6VfSELMoFBLXPJHijSwHPwXv4VbJFnY93hXVPkWmsKn8xT25eTkaNgvvv5AEjxfYUFvM4PQomrVk9TDP1kGvZq",
  "key5": "4U7mRumwdbdNsfAxVBuCgJLrCsVVji57CkdnzRXcADSMbUacDUzsoxu7JrAzr1Zuq38ucPmhA4Jqth4Dv1oaN4Mv",
  "key6": "5hCT2AJwJm7T7ShKtdkSLBsoY6jQ5myM5mz23VueL1qu4hw5PSHr3ozis3ZbxdbT14MbPiT7M5ogXuzAXV8u9eVd",
  "key7": "44qpSPwjMFLcMmZ4oCDpXXLqC2ZtQXMa6i17bfqgD3N54v6s8iGPBJTEUZMEBB3Ky1GhqRY6PFg1LcbvZLbhunh4",
  "key8": "5Bwz64ihJ6KgQP43sBedMKr69iKARY8RsanuCtDw8qK65NniuQYZg72GdfM1EbJym51xfYQx1XUq6kK8f6fss3yA",
  "key9": "5mH6NYJpGSbiMmXrWBrWYBsoKArQmyipxpa4zhU7edf69uE688rS32krrF7vg8AdNnQMtjdMh9WBx6gSzNKB7Amq",
  "key10": "3MT5r6r734tb95o4jD2QAkJLUMKXUuAUsQEWgcr21bannbHvrcNuUJqbSDDPuif1yAZhjXP1W946vyvQxq9AezJU",
  "key11": "9j2fAWRBvSTsNSZQoyr8UBa5ve9zpCzg5r1RsDLD5qEBcGspNaHhPoD9DhZaGVaHPgNMSTvuMFVDNHp6ru4dgmE",
  "key12": "2F47c2EB1L98WmPy9C2jZ9XhYKS1sQM34YssHuzJnZ91sPx3eHUKHviNTgiymtxmbJ3NYbHnsTndXRXqbTWwkzBw",
  "key13": "323Zw3PSzLMc34nbc46BKw5uhB5Tk8vk79uF9JqBowP5nKPcGse9Y2qFbHB55NysjGcCc9jtHE3mN9muxe4tfYt3",
  "key14": "5Qg89tuWeej7x75A1kTrNMXp3Ntoh1fhLJVMHun8f5mS96iWZn5Rw27va9aphyX67EqMzMUjJgowDyrb14pS8tpV",
  "key15": "qRqboUSqEwWdZuhcHWNqCgMmMWuUZY4gSxN7whGBoi3RsRdusjEc1UttYf37CRsh76zhQBn6owQZYha1C3SX38k",
  "key16": "4B6zVspMnGT9jbPq4QqB6oW6VAzRc36KT4cGoG4V9pL8HHyNMvftB4Ksb8ETRLB95Ewj75TeUVV1TjJzdFD1YY8S",
  "key17": "5nNgzRKWePzQgwaCrM7NjU4wNBtpmW8CyVqBi18QvMoBsDLiuwqQPFSNYtmrzcv6JX6JVzmw7CcpiMiznGdcZrNY",
  "key18": "2DgsmqjbCX1qcKu8fVmVcfBN8zzr4XmjH6fcpKyQTmtTC5SrijpP5UEyisi4QUF65iSnTKmVLSV2zfG2cU2iGvaL",
  "key19": "2zsmPaLmWJ5KZNJK3GbsUg9vE3ZpLjA1jNtE4QMai65qjVjSaL7fVukwatTs29WoPeHF1vbjpYfW4H95wWGJQBGt",
  "key20": "2h4cr9WZTmcnjdQTdzaFkYYCsV8NhHVoaBgCpEUD4hjgvDWKSwTWhTxKGWRVbmtPmr5DPZiK4nW3ET7nqcYr4aR4",
  "key21": "3xrCUPSemNuEuBg7U5fXZUWyTuanXhz1XygGpRy4ni3UHTKbBGpsj7AFhB2pCbWC9WnhZ4PTSEERtEz3dvJZVZnY",
  "key22": "UPGu42b8MAo8ieYEU6AxR837bFnhNnxKyn2DM1mamjiZR8SYLG6GitdyZrreqHZ5RkxEtYpfGQbRwy1JDhAL34L",
  "key23": "5PZeBjUQwSyZ1c4Dgx6Ffn8mkZ13CQF13noGgXjuqHsWEyEjkv1fVoYKge3HfAxKWK1yHHcEfF6avHvc5nbWGTrg",
  "key24": "3YoF7wk1dSFSywz7FR1bbRhgb4dGXskoVboWQTeneuWBRtbGZ2r8WZXPnibybz9wYRYyTQUjjTLVq8eSKuSnUTPE",
  "key25": "4pN3Ss3TvZKtRDJmba1odBsrzstEpmu4wmaFWgEYSwunbhFhah6puhnqGkr1PSKdBQHALYeWbScpeFsG8L7EdWyb",
  "key26": "4XWtjcgwXmzLGCyuuCsuEX5Qrsjns6Bp6QLoLPbwN3hKYojujDnFtcUKfnLiU5kQzFdYwFuerck1aA1SrzHe5jPr",
  "key27": "33NT1447Rg988sXUJbdXAMFZEewykgfBUJjmsCJ8RQQ9ipzpHKHZdgGJKuNknxhdwj4piGDmZxjhGbbySUqtrPFe",
  "key28": "3iehoSLEyfTUEgkoWzbdqpUt8VzkvyHBPZku9QnvTnmoyqMxtmAVmL79NjkuUL3zRdU1AsZQv84NTFeB4E7q6SvQ"
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
