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
    "2rd7DWokqJnKnbyAjC3Pf9LnxoJU3CUR5Si5b1jKMCNBSWD78mZfCNYxdc1jSoX2TPoXJ2tsnAwiZFJQE8FeeYBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWB1yvbtALmXGtp8XWNfikvuVYM2X4ZiyGaJFx7ekmtfxoLJFpGmgx7a6zURTdpgasVoiS93SKfdLF22pdihx9T",
  "key1": "4qFXBeiZNd7uEAWTtezHBAx6hGrmvaQTdhPcVChiCsGfAxsCQ5vrQ1wHZkwfC84sGTZbg7K6uKrgbMHqsMuTUNwK",
  "key2": "3qBxyeNpNdWYJma4xPjc8NGS6shFa9NEJiTcvEJ3QXG89sXhBPTJCnwbjTdt8MDXYmWoYdzCQyJD8x9FDaFB1SU3",
  "key3": "4MrdPRc33EU7nLwecg9j3eCpKD5R6kfP6zs92rivrr7GV6EhrTJPALX6dScnaZz8QW7GqT7vNG8K2c6XWZJK7Xsg",
  "key4": "5VUa9QbqrQo5gHj5KV2gN9bUK9zwnebc8DAcZ9hAadUTX7cEiXSTuUbqf9cbxT3UKwAi56BUumgARPhiwBN4u6zi",
  "key5": "4vtrYHhgPVhZS6PdPGhgpfu1r1fEx3pJUmKJyQNkuwbyc229cSgmSawevh4Gmr3WYYKbwqd8C6asxsxQzw117i45",
  "key6": "2EXpBYF8bfPzAoWzcAgcgAv5dqD2Xcw2aAbk3q2ipFARqwHpZTRgnBSkzXbGN8vz99ZV2Xxbq2Pf5iHCVqMJ5nBm",
  "key7": "4XjtCcutJ94pyER35vLdTmn2ZrCngnFjgPmu2sVZZPi4ZbYnRTHsyuJD8g2hotNhfdzB4UKqVEh6T3LYi5Jb3VBu",
  "key8": "2XEVYv8WCd1kAPbqLG5fyyFn84sSNgJtxSa2NDLqJgqAELhhVhnen3fBmbVja38ARTnWkYHpHZdC8yYqcKcDKeLc",
  "key9": "3PPLRkrBxvRzNEmBgMJCqEHdpGjyBt1RZFPG4TnRS7aDthCCA3vv3HoEfmiUzVvZpnN5VBLGr4KmHeZEany1DVGb",
  "key10": "5MeXtVnS4th1bMxqZ5ptnNptZrgdKJpcpzdy3yKZJ5qum3x44VaUpuE431wFsCCEYP9mkAeiB5D6KeypqyBjtLqH",
  "key11": "4KpaaoV5w3SmornRmoLfEw1vBNtK373PbJd81G21LTUWFgjFkkwMgtMmdsXhGET2G9sWpFjmakw2HpdMb7Gohhep",
  "key12": "obtoGALJwZMrjosjAchpKGZ2Na4rdFwi26R92dCh4MzDgPsxNCWVdDXUqqUemPGSX65ygwKC1Saq9NnZ774EXkx",
  "key13": "2g4WLLFg3wiEogPybYJpLGKz9AMkurxFLro2m8QJSGMfVHFs83gQNBa6kEcWSt2Mpzovy3Xu8cQHgpGowyDgMuC4",
  "key14": "3Lb4TFKcAWx4tZWjjn815AtCaskxtrTyafKECGix1nXYnFBv4nZBLeXczV2Vh3meCeDd7nanhoCRH43EH6HzL2eR",
  "key15": "5e95Z3uabwASrEsawgiB5V5ZFesnUh2gVo5ayXJu6Qath2JYfYLowFxY9o5yCVpX5ih4EZacKFRReovmnaUU25rV",
  "key16": "3Q3QEarEg9vcJPrxH2Dq9jC9qDhV66gUbvr77xuRJnYgeEQDPgsvR8RFrKcS6MBFMFbdtZNpPHeEmuX6Fvg5L6UJ",
  "key17": "4HRk4HetvfA6A9ZY6Hsa2p9jh7k4pgJGXWhZwkya8e4XJuQ5a7LQ7MqU6uwv95S2VFKToticabeQWvgnRRvfhTAY",
  "key18": "59tNche8kAoJiQynmLjZkzAiFkx4DFPpFbSuPH2rPg9AeQtYLsKZAFxvwt5m6E4hS4exooL6RT1rzgSwDdom2y65",
  "key19": "44r9X31pwkHf8a3uenPWDzd5bT2uotRcvYtJe3qH2xR2KkDpfrRX9h9b92vMRGXWYfq4NJZRN3dj12CwW4wYg7Nj",
  "key20": "5mpKdmhJRy7MHdbosKhsQgidMhNgPcb17BQyhfYFtPJ3qQA35Zd7MmE7prXq7VY64kEyPQz9wQUqdBGzJ8eQ2gpn",
  "key21": "HaVFXPLb1PUmxAr935z5eBMqiLMzJPUsYEGh7zciDFUvuZnSG15odDBbYJRgeaC9mUWpQBUkfbSzMqPrZuHzVLw",
  "key22": "44S7g2V2Sav77SDGegLs5oNqo1YnT2y7MgPNsxrS6bZLLU2M3evtmpTQQQeirHpssCKR5zFg2gtpJL9qJjtR523h",
  "key23": "3Dm6ipYctADD6DEykQTmifjv234HSPppMHoRb5tvY9rnWQGnztyas3pvLzSnrNum1Tcm3MtWd3T52X5V3Eir9ine",
  "key24": "2TmtKqeaKwGHMyJ9dXvc634TbMAk2xG8swxvESojJQYiS4WhrjGpVUfw6CpTLn5nUuzBpSVT3hNeW8gHtCd15AzT",
  "key25": "2pDeA1z4fwFrJaHKiDrG3YiNLE8MK1g9MKpkVQ68jUxHv8Y2787GezXMmeBRjKymXAU5jFVXFTJdotE51RGU16Ka",
  "key26": "Qkmhj2UmeyNPGeuMiHa9ZjgVLAScRWRYiFAoLBsiqgbWgheg4EfcgxKRRpQAi4njmCjkcMMZhXUzK7WDDhgFZBd",
  "key27": "Lbu2m43CZSfdRcbYMuQqksv2ngkG68PDMDPGQoFLWPrGqAiMvPvzi4DpbcMJPH7MonuJAScjVbhCYJBSSJWD9tx",
  "key28": "3qzMkeXv8WkArkJqcFnwz4sjZGr2k8JV6P1j69STRhSxptWd32sCkyn9ka1W4iZR5pJuGePUg9YGRZFREw9xmkBj",
  "key29": "5TdC4FuaynSQMDVvVhTZEA3NnhuX3LsJ6cu3Rp6RnUX2RJLEsiH4RvCMeswH2rCJ4UsrtMyHpyfmDU2x4WzZSAtT",
  "key30": "4X8EuNsoVzi1AvTqXbXzkAWotpwG65SVdGsdZrQSiqiggzSiiaiGFGtC3eGv2rPbsH2GQcAizp9xtmCE4ZVrHSU8",
  "key31": "2C4ZSbH6gXJAX8HPQJQkzPgKL2jkJmFFiTiikSrtWuVZHoXaEj5kq4hNCNytbSVK2URsU5HC1BBvaKrg7dLtF4FV",
  "key32": "3RyB64uVUP3Yo2kF13uTY73aw6iahieLsNakHNPBpReSWv2yFHeRCAhkSrjpj3Y6epHrLPytRRPNJjFcvUPyhqrX",
  "key33": "JPMtwmTYzWhbjyNRLXfPaCCbbj9BRt2zzgdH45z8ecFbQw16C9bx9x8iAHrxLYJFqnGseZR8xHK5gzKnAwuUEHr",
  "key34": "4YGA2aUA4TjHGJJVFVGfVKQXK6dQhsj7kHkpqugwz6dLeV5HY1kLN4MXsZxasXr9zMhDHAnYes2Pa8ZZPr98ta4m",
  "key35": "29f4a5G4uJPRnz4C4x9qkqsEeJcauQUkT1gmu28jM8PB6EHmXTaPCX6pisckyqZoqFc8VNCJBmS6CKApM1ghh1sB",
  "key36": "3xTbL9UjBpJGcBrjAwb8z1Js1XeF18QMQqvMARa5swwCasxJ3m6HPx6dFZXVjD8upeTAFNCovSt6ksmimquqCKWe",
  "key37": "P5v5GTGFrzpBwJ2SYNk6F2dxWHtm1bttJyFwQ8smyD3enftbNAt6knAE723BBSKd8NfCVHbSoH1wFtosrWGyXXy",
  "key38": "cCfnfocvSz6SiLQkkhTyQs1EuMHA2C24FvyU6JWUA6Vh5KjkxYN4p2xcyNCBzwzYuXn38ZTx3tTt3TWRskVDBjg",
  "key39": "4866Pb8GVZtGwENagcgGZVSgcRQH9uoV9AvWG9YqA2Fb11xN2ZDvpUJfk3gn3swPAiLuPDtwYbqg5ubiyoCpcww9",
  "key40": "43QjHUjSy1TrUdi9xKPg4AWWkSJKFCmtCWaBbYxFBPuVJv3nLDGWqGbDFJMDX8dCbLm8T2y3ppW72GFPMeUkFAs4",
  "key41": "2SsvjBsk9xFuxj6YbCZeBy55Ra5XRY2vmYPz9rrmqekSxEsS61n2yDaW3MR4dEJ1surpUe32jYHhDLiQq6LbUpNS",
  "key42": "9751esQT7Y5whXE7EK5A97cftQ3L2WnpfPiMnsYy6bTXnCXYR4CxDpTMMrLAxbuu2iwN1LYho1T2RzHDAgL5HP6",
  "key43": "3GgPj6QRQGGA4v1hZzCANveWTYykQFsFtQkKf2eeAFHF1u8TNJvwwCBoN7bhB3A2sHMGxWa9R7HjRGgPJeCdRAAQ",
  "key44": "65xVSEHnKiDMWAwL4rw55XrurLSjU1R68yR4EFeDV4ZZh9xg53JJ67LPGYgcYZVgfyXMsyDvGGKPLWew1PEDAkAs",
  "key45": "3JHoR9HJXBtY36CWfpKYRSfg8D2aPv7CRF1RgGMzkDd17tUU2AaZrjF7ANZb33u2rE4ksVc6beNkshdXJQKprVjd"
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
