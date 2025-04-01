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
    "7jcZxX2rtSsxstVbdcJGcWJHAxyp1dnmtMnRA9Dvpz42XhDgUSBw5gfpkPyuaBaSwoKTwEmfkAKeGPuyXu7ie5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1EeaWS5og9hKj8kn8DGzrHYWQpQnKAhV2NGqap6dE5ZKfZnXf53Ei5MMqcYbRexS7ZiLLc6nEF2gnz8kzZVg5Z",
  "key1": "5nGu1QiypeiavYexE67qDsZVWQULcagPqyR5zikAmR4f45w1BrgoFHsNNS57YF7Ektvr1wF1xKbktEfLhd2eGBNK",
  "key2": "5utU6629hYJR5yf5Aq3oR4tin8yad4tVMseK4gkwGQ1kzXxk6CHfURq4EaHGCVMSJ8SvmkGu2uzCDpUqoVABXjub",
  "key3": "2KwXZKUeEjnMovhANACGAKXfxcyetbGkDw6RojewERXBnn11xHxQUdBsuuGr9kdbCEHeKhD5cxt8TFFDkyiN8RgN",
  "key4": "3bc9QaPe7f4wJyKP3fSMRnmsLvkAGcmmEbkDZEDiWyZanpWGj7PF8bsNyYpSpwqV4XscL7FrmGJCZ1KCzrtCxAW1",
  "key5": "3dkSk4ZS6wFJiMcz5cA4bPagPjZ29gJFiNj7AZahLSAw5LZUKATbpGVHnszyPCBaJTeyUBVecjPZkZF7UbBtkERJ",
  "key6": "3xSd3GerJTc5LtCXMUf6cfVAwTX2HJ1WHeneoATvrDEghQmUMxfFeDED8rEZNXTmG79rUqjmwa7HyFXGPZ3GADB3",
  "key7": "hCNVbm4KPGUpDkzvDWfAkNnjnbbtw9VwksEMZoJWaRDVqqobzfmcDR1dtGtZ5cb9sNAVERmAssMcxs7xMH27Wky",
  "key8": "3dcwrQVuCJ59sohDSW8RzVDWkFi3nGPMp2NXbFT1XBUqU1Ba6VmmisAdL9dozofQ2ob8myMWy3aoGt2KfPMFDN3e",
  "key9": "4DB2kWDQ9uKMntedvRtWC93AwT1b1jSQ2PEfJQHBND9s5b6pX4HPQUP6KotLnSMxyJH4pdEKCRHdM1XhhVLokgXM",
  "key10": "5qumzSqrsXkEEjiN29eZigGQbyLt81a7uQutA1qjtLzhHAP5XWxAAdV8cCPm1KbbF7UDMpDmmZnVui73Y2Rp2JfK",
  "key11": "5LQNXVPNYTZ9x4P74krxMGaApujysrqn2xg9i27mUfrPhXTEvzVBEpgHVYGcDSNcnBgaPxTVfWW6txKKzSThgywQ",
  "key12": "3U7odbazk3DmYSxgYvDWJRwiF9iG3H5Y43vPDzkwez7VYJe8Exh3WA397ATfDSQvV9DhLSFgqM7bfsX9c6dsaGBt",
  "key13": "3vr9qF6neFWut4Vygq7S44DHXbJtzrz8Ukfgip6WZ89hKF9EN2KQqHy1FZNcTAAwmEaFfZyY5UENLZ5G9Pd25uiy",
  "key14": "3GwESDmYi2fjfcaFJnwC3QwBwWB1s94HQnDFaS46zX2z6LuT5fVnDdnYEb3kvrbbgdq19GLLa1JhLYYQFiBCt3wE",
  "key15": "5JShG3r2UggLZrkbCi1Q1hJPHrK1xacJ6KLupwc5Du5kHYHnXmdQwr6aELkqo8bC3djEQQSNHnFwFpcfa3tysU3P",
  "key16": "3eCaK6mBmFLcgoQdNocAhqjmaF6oSDPivNGMzzZ75w44ZVn9ev9gRWe6iFeoQVdcWoLnjVEH5v3B2nJs8JuU9Ec5",
  "key17": "G5d8aHrQb9gVKCs3yuiqu4cvhHfsxYyBWN18c69J34of1FEsavjiKnDdrkqVnYzzT1vsrgGXZJzPuswDRbKvP28",
  "key18": "4vZcVdkCgT3xGN5nBHUUwyeC1b1HrDBjCCkb8qZjPidnDToW82QiDVEwnt7hB4YFAVetiBc9KZYdV3aFCiNG1NZh",
  "key19": "ao3Nuc65eoRdYpuadUVbXC31McJVJfsRoV1zQEwGDV3z47t5x9pt1QEHaikYG3wuFHPUutZhrJB76PDRpwMNQrw",
  "key20": "3sT8tLRkgFPTQSxY5Dmt41aSjsLQa2JxtEF9A5zo539hSQe3vAVRFR3uw2BUyYEQ6dW8c2FNuoLGMt1cdA2Qsedr",
  "key21": "33pYm8dmTqBCN8115jyLnFR8ycr2o7tKarKXvQgfU7hDcKpAbiTmhzLrHb57yUpHSkbPzWdYoM9QaiWL5W549LQ9",
  "key22": "22jP5z5js58XuEwLidpPhPjPL966ihqbwcJxxe5ZYCENeoVXadREGrpj3JCaaAeEDMXoFeuiUfEj7rHWFhaB7aeQ",
  "key23": "2LvvEku9kRpnzwoYqdqLpv1kwQK7c66B29nmsuLc8BBruPrzCCq9ZNnD2ZCnedLktrcJcmx7RSuzjLwg2nBRfEjX",
  "key24": "34zJmhyy7ptLVC4jdFnAgWMD56Fy9aRvgDMsciFUKHFmfNr4uCMCopmGSEbAGwvozr8i63pbrAwaaCap1itALNt",
  "key25": "hnKqyuktt134hdzPG9kfRnLfkR3sg4HVEKBnc4ZRFEbcEVb6epaT3yKfKZ2gzSyghhQEWqLfGKoAgPSMzdeWcVJ",
  "key26": "5ChmzfBnHq38Yc1PWizj7h3SBXAY52Szwr97v41JWfqugQU1FAjwKUQbuhtcaqx5FL6uzenbawaaPnNwEHgQ5TFE",
  "key27": "5TFYnfLkGzXcBgHAr6o2ENVCsdd8x3xxqVwkmPkif3U5nAizjKj3BgzsWVKQP9JDGEsJfLeYK47o4zXziqNg9jrT",
  "key28": "5aQs53nepg1EPRicXhC5GxTjauJGcgR7bazwSsZbaNMUXkaoQvxZzVrvYkn8pBNosJwQBmUs3Estvimq33aAxG6N",
  "key29": "67Ma37d9y2qNjVS6YbXuXHndDwKcsVetiVZAZZvJLCJ3zgPNRexhPjPmDPUZ5ewLTdqGcLtTRaam9GR5vxX3mR5C",
  "key30": "38zT146ojcgNuJHB6CesDKULJVVPebXz48o3yXM9gJPNu9ho6Lozeq4HheWywP4kn6wPtcwV6wBypct27Jw35WSq",
  "key31": "55V22kCT7HYbrH1e349oxCWwDP5H7kL3BrfYA2eqbjVJTFTHVKXmgZdLjf2hErvykXEp9P2uxgjfaJJ9QPmrnDQB",
  "key32": "2iEfP1tcj7nCHGnHLioxpWfmjPr4CcHN3NME3fMby7c4gcQrZhGfTonsVHiws4nNGJaADG8v6BPMcGeh1xrdCTc7",
  "key33": "3peG8Qv2ZmQxiLMuAEcmuQXQGS5aKxMnBtJ5rcjEKP2UtKCW9Xni3L4uYihGeHZDg1Bt48najFfiW3PuX9PpgnoX",
  "key34": "5kKQNTRebG9KWVB5uDRfxy8ckZwyhWmY7s6Mw9eDgp8MsiEUci25RnPMN5zx2ATsx6DZUXUUSLcrHgan59ump19m",
  "key35": "5j6RvfJmQnxdApmx9V8MSurxXRvVfVBm2Czj6AbTuf86fJPkP6yMZcJ3hvarokKzRKnBxhRHRFB5v7FuMLvHZxKY",
  "key36": "3RbhYDqHbQDtrY6NihXSpVMvkT8ZCTsciSmEDeGTpuf7gWcNZ1LEP8tBzxazTwoZQLNUoYnhmZb8higFjyvWE6xb",
  "key37": "3F61Bf7Jf44YpHeVkXWQeoTujubfP37ZCuWHrrFvxmx8yAaE2iaH7wQrBbwhkyoZFeePQ9Tyu1fQNHwW4nC7jpGa",
  "key38": "2pFP2KNsiiYjhXKUhTgCBXTuD4kUeA7Ez8pNu73Uo3BS1vmP1fNiWhaN1JcLQMQBNp3wkgp2FDuGTWvG7htReSKp",
  "key39": "4fD6oJ3w6db6GopWAQ8jP2bZtjfuDnNwMXrrbANAVFmqvo7aMkm71YTcEiffXbV1jhgLokxF2DszV61NmWjXSEh9",
  "key40": "64ChJkeifYs17znUXWpunrP8uVueWHxVSmNPZHXhk33arpobWrT9jLqGj12hWHSWQP7pNuwKvfMNFFCvNXNiAYVz",
  "key41": "411eA1eubsYqehVLC3MgxWRDtcC11Uc1qwyKHTrVxU28TpWpb1sNMR9TQMTgBYkM6Bhe8sTRmmRXX9gNsjxNJrzE",
  "key42": "96mj2E5z3k3WtQPXwJkSmd4CjUqXjLHzvNYGfCnNMxrxopMjnMjxEokBwBDyoqE9aBjAmVkDdyPVm5TbUpCoFAk"
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
