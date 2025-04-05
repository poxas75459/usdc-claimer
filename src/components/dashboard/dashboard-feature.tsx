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
    "57kvh6KLZaUdFMhMEn5a2jRPYqYhKuLEgbsgsvWZxwoVPxiF9VifbPsFLUGxhk9ajtZgbUKY7P1TtsFX6LKhExYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BCv9BMSEbWnKNeNhqnKq8r7bcyzTJ26wEjqg6coozcaE2ox2AX1ZpyhPhcauduJjiyAufiNS3cujtxw2E9Y67i",
  "key1": "rk3jkjzF4VmDwFPRUb47jYhuob81hR7agqVonZUvnTYw16yrUh1iKkrNsoDJkmwHvLbn9HgnMnps64FkckfvDyy",
  "key2": "3PR2q9KEi7JjoVXKXHQTcbsNQjiZGxhbMTHUkHzfPyFcQQL9S8GSuBJLGYkMkx7aKG1o9TLRGbxGGPte7gmJHKT6",
  "key3": "5dfQiANBuHtb2onp1Sr4ZrN2DUchyR9kAc4RthSgR7kuoJgTSPJP77iZWNHb2HUGy6RaDcHcA5PDxfqv3Mf7qXZH",
  "key4": "5rmcUjEUxDkZwSprr3mGasQrfcBiAfaLSLTycQV8jDaLchDWyyAHUQ7bMdv9HjSs6ja8m7QuKwThD7f5sc2L5nkd",
  "key5": "2GtNYZLUoUxZvBSigpw8LpwzpBDCPyEW6zgqfF9aqwkL6eKKLo5RoBDQLCoWZ7yHvMCZ6ftbU16hqnyes8BskoDp",
  "key6": "2QFetnAh7y6wLjX3gN3ZaiDKtpEVdSD5RayXp5xqkBUT8BvHfwnrCiHn7bcZmMdJzzoEQQdCoggp7oMgPh9nfkZR",
  "key7": "3kdE1ZQBAnBMQqRX8rKoNpAjC925TVhQduf7zoTWybZA2vtuAJNKUH6rR7pQQSuCFN8aFJHbHzg6g2NKPNxKBzU4",
  "key8": "3ikvz2fYKgzxT6GKB95uT7Tk2DEWYipmfea3Qmia65iwXn11kKDFXyHefW22NboYp1zSdSAo4c7S8PLSjBzHyPRe",
  "key9": "5ib1DH5RFVtxodfQuAEUmD97wMXeUH7a2a6HftuJBSbiXhHzFx2rsp42jSLhm51Xb9YJ2dr99gWhwnfMkDTZESD",
  "key10": "5UTChAEP6Wpzc49FCJxW4bpPHg44XTPJvc43y9iqcq177SahYyPPu7Q6yA9YAHsYmJmLLSKc9RuijJmekm5CgzpE",
  "key11": "5ZDKY9rToD2z8uqorhTH2ydU72DdGNBBcDof9XEmwrLFJsL8tEppnRwTJ4tzPthXv6URaZWLzLqJif3FMAz26JFC",
  "key12": "EwuTpY7tAFjWnzMGjUKqaHLFVT6f2erYKWKD7EYr1KgQ9Hg7ZvEC9HwhQcMpXaJAdKeVgdtkq5Ab6vfeWE8cSC5",
  "key13": "2Nrt8fBFJSorURKBAeUmQ1sjDeLqR5HWvmx3sSG6onxvbaVUmzJkHHxtpkLGMSkWzroc6XYG5DPF5fjN1w67y3iq",
  "key14": "heF5shKzx3XXyxLAH2cB127SVFvhvtDWenXrRSTS7oAsfBvF9Pkpej9XykzCm7WZDHbXV5fHDH6KgueB7BMCZWu",
  "key15": "5m6sL2SMAjEsMXfWrYG5rAWJ8bgujvWW1tvAyvRLffLSFUESMC8PF7KbGdMK4vSAfMXHZdfnqGMzWjCD61kNRw49",
  "key16": "28TNHCyucq92CXqVDJZBvZFtpuTmNgieV8QJYkUnhJJWbC7eAU7GwWSAYrjZNC7Gk8hqkiTEHPbeZ3tJYv7Zqv1u",
  "key17": "5bYo7hAg4NRkttSh3yrZP8T7gEzy4PwkMarcD1JirmBFyD5wmrx5yW96UoLFT1KsJXtQKrZuZYejHCHtixjBFEhr",
  "key18": "RGhZWmUA3BzYTCvueCCceweaKgbKE2gGUqwUkjZKjZxXiqf4bZYgEjBcerE8ovwXYXQMGRvPGG2hVeKpiMSyimy",
  "key19": "523nK2SheLM9CCTP2jYsapSecawqKpWP1AU38rC9qVDGA47w76u6sNoiWCXugswUPBZWWhUgBiLBpfiJ9VhAohdK",
  "key20": "4EWUBk48zEKBkJPHNje6A1CjhPvJ6U88zPvvuRhipNKsnZDRhyFu3aoEZDt5dXTXSpt34LUWz9UgSKxfY31ttK4j",
  "key21": "3GG9HpY1GH5WcPtkDEvHaFV1cXWXZoCsy73UFPjAG5Drwer74hSjRWkZ9JQWQpwdqR4sQPCHj636zaJayDKbepKD",
  "key22": "fTuUFxLj6sThc7fSEEcAocjaoSZVaufYgbsu4WaCsykLoXZD6SasVBCBjGAYeBYKKA2iixvKqixgEVFXM3FS3pZ",
  "key23": "TiWU2FHNgEyySgcnoF8GN2huHcWPmKmwEo7sfcc7oaAXAfHfwR16yzRGzXrCNqsNQbK6AznSRC1PJL1mfbCnF1o",
  "key24": "3EozCSs2RomThEGbPageq96QsUa68e69TJ3CgyvpDebHWUbhzLG4MY3n4i9DNffKU1frRaNGqR21w96XfFJrybtd",
  "key25": "564Tr7NoWmBguJwLAiDnssgfiFWW8FHxstW1CbDGwaGDtavaecoN7J9Wj1sHhHBNAPeCBLxNwVPk8HoceVL8n2G4",
  "key26": "4fAmDtm3x8JsYxEPcMeXjhYi3KGxZ6U8cJG5XtfqxuFDdUfFSiGzabUE9dKLGh56v3N9sQpEoh4Ta3GaKUaSzU5G",
  "key27": "4ZAAcQcZdkfxGfhrfKouGRAKdnt5kiDFkoMvWe4MDZBeokruSetg5V5UNPFkLsinhE5cJPDLcwZkNnFm72UGdn9A",
  "key28": "3eXvdt5isEF9vqb3d6j9NQ584VjT3wKvrVVHr1htMsWDx33c6puieiH2MHrNk3Z7a7uCPG25HQDZUAvRV73bxAkF",
  "key29": "2gWn19ZpYcCAwTeeQkxtxZ8ZLrmwz37G5XkXMCGpNTye897LQoRQcsuCX8bY4TNNWezQsDDq8YFbBGuQnX7AMBJj",
  "key30": "4sCzhhhy57jcpixr2xJnS4XeEPFf4oXgPduUDpcuQwq78guYQZuzXYTSMEuyuVoaizoYM8pFv6iexH6cPcfMBoWt",
  "key31": "4xrA3b9WujU9s6xBULz7yAw7PXa6n88TKfX6kfvY4WzrevTT9THGwKPLW9nop92BByqW9KjjfcZSbAHHVeTBS8y1",
  "key32": "4zdB5TcxGfesRAYMWXUM6bfSVdkSnXo4Uy919KYDcHqV5BnLj7AhyiHxrdMroVPAR2pqoq8msLWVu7QdJhgGadBY",
  "key33": "544QFFqBu16yPBMaEmmfD8AcM9mEQbf14nnorFZjxZDi4JAU3kzuFQJWzB7utSvWcB66HRTrJbmvJ5vinsFhuE12",
  "key34": "f8ByPsFLGedL8GVeVjzspwzp158jrHXsSYdeGu6oz6dZ6FxDWCtRctGUD4psTigH1HaBuP62kwU4GcJJmNa63Ya",
  "key35": "3RcfAFpQAyZY8iorKW8m71sucScwNob861gihJtJkkpdyY8vCX4BpYiW3BxeUSwB3Aivv2uWM6Fs6U1YbKSmrE4X",
  "key36": "312kJKLGPVMhUB1kks1ffkkvGncEUiq5b5sZ4QGXGtcJ7v95dYkwBoBS2aRbPNoJ8xT2QJd6P3L2GekF1rzX2BzZ",
  "key37": "5zrGZ72b8reYV8r38YP3DSaskTTUY2SsdhQpbydNWgRstZE1J4evu6UugWufmm2JNCfaEgnXCJCDasjAQnJTx52",
  "key38": "hfbuFUJyygMWoUEvcz6sX58fHLXBzqNiqrHZ9i42MwtzLxwMLpi2qRpTTH7KoX9gfY8HU691ozrLpdoZZ1oByfA",
  "key39": "55X5vBfqcHyYBvPskykYDyriV4rTEhfQRmYUC4Q61X3oEs7uMT6fu3cwREy8M35oKUc6Aa259nr1bkivtxKE7cPE"
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
