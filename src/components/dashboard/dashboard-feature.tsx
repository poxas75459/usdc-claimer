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
    "2HhERuwCM8TpHqyJ9QJccBpNM8As6AkUFkyp1PX22152sccFYn8rb9juGdkzeadPiF4tFyAQKn3x4w6hPQb3ZP2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzcCT9an14AMc6BgjeguK45UvN9UcHD5ZtD2n6LWVCLWoWGHSvwtDw3kYMATXYuoHjZV2iAP1v2WaRtraa6seA6",
  "key1": "5LGVovsQDKWhgh44FDYWM6kgSMnG8bwo8DEcSthnFyPo9A8x2xV2Ry2A9G2qhEAMacwehdyLwKvJxjEMubDpGQZz",
  "key2": "52V9HWyjwETqQCcYAZeUDvDCfGMaGBdisHodZ83vjXyiubNrZXEn3CLN28To3v9TQCKo55YR9MYCLdyCqoDsPqfo",
  "key3": "3XzsVjiykuLNbRZ6VRd7NTp2Dtv4LfkNCLho1Hp3yN15XraxCYeVXcBhugHiDgsiEG4hvPpURekXqVvPURaZQCjR",
  "key4": "4MDm5y8zuByHMyovCoZuNixd9QASh4s5s8LmaMmi7p5hEBXBYjjDbpZW9wfqdybCWdFjAT7JR7r4nyJzpz7ou56q",
  "key5": "4ec2H7XNyBCuRHsCPPwgEimkCETbTWpqKocR8JWfo5fprPkgo1B4AeFJeKhdHiSTDCvpLRaq4BLGwTKUc3Wf94ic",
  "key6": "46MnKmYP122DpUtwVYv2FfFzGB1KasxDAjTpgKk1thSpPuuWbzor8R1WgnGRinr2jTt8dujFnwmtMmh6z484zVzY",
  "key7": "3zE9gyqFDiFdRRTfs6sdSR2qQ175EvLKABob77Xr2XZUwNxz5Sc3nt9Xs3kEbDX5Rq8oGC54TeShBt9pkVGoV3tZ",
  "key8": "37VnCmy7f9iqAMRVdnonzVv9Br1DECn9PX9BLNsETTtgdiDjrQ7x49jKrYKDwoMYERGtko6XVyCiUPJdkrzhHsB",
  "key9": "5rMe5oWoqdY2X955u23WLyxRMDgcWexBDYeQq6R8WzzsWrSREyApQWEB6EwPNqMeXnt5uNKL4ZfRYaahFUm47LDL",
  "key10": "5Bncvjnd3bsAgoMs8yRnW1fvEREtqRENwrEWXXeHe7g8xnWhNEyjm79ENcozDcdV2FMT4nR94Btf71AHKTZobMwP",
  "key11": "4kTHJmCpYFgTEmtL3B4TAxhDAmuosy6by7vGaEiL6uNW2uEej39hLqHYNcTz94fXkp3K7Em2dYWkYH5X2SjMGiWj",
  "key12": "33YgxSBcazhYHoXw4bfSXHS7Qdkhh7ZQCDuDzk8CdVLj4tpo9qYVVE5dM1B2dpv5M4Hg9heAats8tL6KBnVddyuL",
  "key13": "3id6kB5FNwKunJVtWyh5EKYNEazdvNU9AhX9UdFLAGjBjP2eppECnjyNVyxoQbhTKNEDvSocm31EntbuFsoQLbYG",
  "key14": "4kN6CV12EvQoALB1GsehsyBzVwPSH748QER21zYq5H5usL1Nma8aKASt3xqzSjbau6X5kbB8qiipq8voy8dWgbML",
  "key15": "3zhy5oprZQXL7hZn7AWDXwqbFjtpCf4HUPmtNmEBNFR1e7byjz3pUM7DwUfgzPueaK2DtqUzddtbaB68caTaRPDm",
  "key16": "2EJMPwdX44sKj4bNQxWLyhmcJJwGDoy5WWG4YsyABKgVDQW212pWZoxc5imCG6zUCNJvRjt2b6QU6QhnEA6wG24c",
  "key17": "vvq8tSHUxFfCWgL5pnM6P2oRuJEnQEHLzCuwNPQEjLT61N7ZsQyFwZ6o2ZpgXKeZ4Rqm5e1t32Zf23euPHynDfP",
  "key18": "4XsgMewxLtsETR3KQuYbmkCo1GRVzUu686roNfBtZ8w8VwzCk211DTfxHmnWK3YFiFSwpfqekkCaQVhEN2H9pHD7",
  "key19": "3WPhB1qB9fFmM66LLkwfNRvogLgcztThydHXJ9PtyqisjNpt95K9ufLEeqYUaFJRib3dFDMTbBT3eoGCark3ctTa",
  "key20": "5cWb8ujj6uGuSd1596hkGSUod2DNfXn6aqkuUnvvwwESdS712AF18mufbNmVRct8YUjWiZaTaYR5UgrvbiDsr4qF",
  "key21": "55CJHVPLKjQbVHsrC4BiD5MdgMcE2f3bAiACvs4Km84FFNMpyKej8Z8rc5wJK9T1ChaHpNWHYwcWLgjmsxydFyrv",
  "key22": "3NqSZtjnxZhT4hY32dDuQudPtCvYD8E8pTwtYx8oy67oENxL2m8oftf3n3GzUWrYPT7Q23kzbthHByMpC2bWpftk",
  "key23": "uj6eYDLqzJCPKbWt2j1eha4sEE1B4ivk3mkVgGARgeSfKomTZAR6abxKTyWefj357GptqdQtAKD5Qc1GipTYxJb",
  "key24": "5Ft3Ck4ZfaLT1p5FgJ7dTp816Ghf25PqrSrucJHx23yDYXNgEZ4aZaC3jTk6Ch1T1RZpqdi1jeNDw7Do3kvPrbbi",
  "key25": "2cC2agsHAPaAcB4NeJ86PYru6xjYjWfpFAQEYyq9jtBGRqnTZo5RGwDSoRKwQEH7z1DCFyq3cZm5CQEjz36dCTxV",
  "key26": "3KKBMxKY6c9okgWkbyJnhjvJTpWV7BgnQ3ARY5dGK4ZrttUVfhpVLwrUbnP1ZANTo8SEWuiJWF96RcgpexF3UXeZ",
  "key27": "Mmkxt6hh5se9zcHn3KXKXpAvrbYmDLEvv1w2253oTS4sx3cerdmxca9cr1WjeUAHn9VMSa7ZomLLBFjTjXt3tQT",
  "key28": "5Hur2AAyJXWfEP2T1nd1Gs36CZDBaXi62E6FqrUouJ6YHYg6T4vA98APsC5RCRuChBk4XpkECsxCjx4H8RgtSMro",
  "key29": "41EGLqsV9ZggJpGxbB3Z14TDm3B8s6UgtfjKXgrNDNV5XAu5QyQnNaztinMxrEsHJfNihKymAHKGdra2nHDYuQW6",
  "key30": "65qnrpYT6vgmMMuhDTeEsYDJkRLTeuYXBr5uQkKEMugterJnjAHs8J9RmSZAW9eVqyguArgzgsjTeNzoLJmtS5Xq",
  "key31": "63DDLcu7sCEgYheiB17frc7dzMQQBxGPCyL3qqw7F6d3qxQjz1nb6Ti3NBTWTs3TkASbBsZLPD17GhZGQD1Jopty",
  "key32": "2PFCBJSpd7aZx91yXoqZFpbDH6eKf4zRLa8PPjYgbYiwfqE7vmvBDB2gj5Tw3XPcMstZGM3D2WnQ8D2ic2osWFPs",
  "key33": "2G3YNhX3XQgiZpKXSEdpR4jJjTivEKUQy8KcGmb9KxM2qDuNauWJHCDiu6f1scxQZm4XPQ1yj2mWvSLWH2trm6Mb",
  "key34": "sv8EwKfP1rah5LerNNk7aRcemaZ2KVMAgHR6ejMUYVzszFpN6eyZaJmpGJXVd4sAEha8rcpLeNi31vjbv3xEaXz",
  "key35": "2fAXGNigagoGyBTCdtC4q3524g1ZSoxxEJrAizWsgYHoqvhXAmYy9vkJ5ovKeWZBP64ieRk9cehUtVT25Fq6Zgtv",
  "key36": "5wLGynr8Q5zsjBzfNkUc2xoPMmHyeTD9Y4uQfbv8PXZnzPH8N92WPGWrDLZeLG3ea6SK2nssJscGADadvNNEFAEP",
  "key37": "3JWcRJmF8mn543stWNuP7nkFRjEQfQv9wwBmj3PBaTNvU7LSGtTHpre6gjEkA1MSZTamEbhP5pv25yBgCWTExVQ9",
  "key38": "5PyadnmsQLyhmK3f9yzQjw333jFEhHeigLxV8qMjg3F3U6ABSGRauaEz1ZyT13bpXTM8rqbCxEbzbtTMRyDC8BFQ",
  "key39": "4CT1Xvoa6m9qhV9MeaLv23J7DJ9hNshURCtS2dwWbrqLt9Aods8mAmdsbMF476PGxGxYBkKdK9QW4ESN8zdWJJHB"
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
