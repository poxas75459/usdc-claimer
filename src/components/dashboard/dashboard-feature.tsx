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
    "BDTAXcdSKh25dqBRvMaYQzSPWYk6CbcdP16b9hVHMWJ29b4SEhawBgZ1bt4MfFxERzjqbQr7HGVeJm1rujybgtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D9kp5KDd3sBQvKerUUoiMNh2cJGSkNR3HrMxsvEeny6VZHqor2KY4KkV1d4e9DqENr99cHV5mTzDnAbpv7jUTd6",
  "key1": "2PQmoXHCvR9cNihXddpibx5xYhPTm4uVPSqrCTJx6wR4rRwVVQLwtpCwnzbTeoBnNPpNePeqsE3YYAoG9e1ipteD",
  "key2": "44FM4KfmxUuHVPDNmtfn9VfVsJEESQnW8VmmjYmY5Qv2EtarwfTKWvYwEzUmgbkEeWCDYaYuGKNG9Zy2Cv4ajX7F",
  "key3": "3nX3T3Q8dLxQjz73uHoa5H53Zp3hFsfTDypy6biUdMyzbdJSoc66bi7eUUBB93txWn5V3UP1V8jcea4M1ZUf7YyE",
  "key4": "47LH8NVsx8sztTpovNRsDAfve8JhaK4bbfeUt1pSssNEKjdgwqULDac6NoknCQ2kYTek5v5E2RK5A5DKSnmqQWi8",
  "key5": "2svhEGPm9e3o2eXUNY2EeuPCA8dTYwdkMKKxSSXp8t5xCXHvuEziRveLAvpbEL1fYqKXgEnV8iAr9hGT7SbfGaak",
  "key6": "3jvMywCKAQhterct1jqBSUQMHUXVNocW5EQAppk3okoAXp4HHxx77vw7h8hpY2MjKMSAZMJzbzxn9TALc79oZf5r",
  "key7": "23iHuQtJHFWi628eExn1UW2sNk7qUC55aR7UP6JcaA9SjzFzfR4puRgzAviPFceE1UUgzhmebaB4dbaMaE1RCz67",
  "key8": "55uzUigVYdx4BcHgy542LNeMdQj2znA76gjykbVaKsvyr6N42mHustWydjtqLzULAroxHkf6zPE8pwWEkoyFp9US",
  "key9": "3imcSBxbPHQN4D6YFYaL5iESeB5SpEKDkyp3SdZs98ajqEuBzEciFGgZ4vtXCVq3FiCT47bJafimPJ23qP78ub4Z",
  "key10": "4FEXruPhA6azwCKBKg61CGTQBsc7rLmKfq1SatwMXPmP8pCKF1ewP9Dnz4mvFgRFmpmysUajctmgXXs6inipa4gk",
  "key11": "3b4h1GSKPCoJwvUtaypXDyKfLdQmSAxM7AW8zVVB3Zvjsg7KEbVjVwqWLFEEWDA7QRkjREFhVwWoEaiQ3aoNtCef",
  "key12": "HzQDsjxnxXg3x3MCCZF1gWMAkCehJMGzJWWu87WpXqHRFw6ojDeaB3yeYNNHsdpu2172fmjBBeK8XfKFHqgC8y4",
  "key13": "5YYpRdfkbT4DcEUPMBSoHKkp7DpXubhCai8iQwh6xxyJgG9ohuis7f51FjetNxbc14dekWE6Khj15CkLiUMghbxV",
  "key14": "49H8DiDdXcMF7zrhnZbDo88GNbXVdF271pdUXPVtf6mM2ivzAufphsw3bH6P5tgRxYjinNw5txuiw2B6T7hfTiMx",
  "key15": "XCYoyAgZ44PWTHQPZateGew3LJG3PNiz8h98D1mfnJuHxyRxBYucDZTNkcQb7sMiRsWkZMGjwy7WKrvZcWPnpZv",
  "key16": "3JzJYaGhw2pgMFh2wCSwUuZJoR1DpEn2Qy7ogWGTy6W1zJyJoLcD5c1zAjRYXpy9puNbHJw6z3EUNuW8gf7sKN1Q",
  "key17": "5zNhbDP42uPgFrtKc1Z5HwdjpQhAqBXmQzgLAnFska5xNd6iJHznfgJgkPcvWMg2KUfFHMd9rw1Rx1a8y5AaS5jU",
  "key18": "27f2Pu2vQagM3SEbwFdKby4Yr9YD1v3ZpShbSEg24uttej1oRfquapdWx7zd6uZ6K5BrPvpQatrtVZjX4w3Bk2dK",
  "key19": "4skSAqZuYCLfBX6ypdrHoRVsrjaejokgpwAW7LCU3FfWxUvVdTiNKXVCsZ9nu6kP1Bqjn7YQp8u5ihouT4ovmrX2",
  "key20": "22Hs4eBTbhzbAwLxhHrMhV34e1ibCpYtyZejEEB6aZvoYeNTjFpbhnzscXF3VAeDSjxrKQ8v8LVxKh1o5Lx2UGpo",
  "key21": "pUct3c9dMeqMLGkh7wyRECb4vBjB2EUVjr7HJo4TEsvSveb2A98v5QwFoCCNNU7ujqqqXjLD4jDAxxQBXbB7Xhh",
  "key22": "5AZ8aZoESa4DNUHc9Wmvo87L4asMjucaC3ei65QpCCUsTa1qoib6zqYc5ZvxGykv4vNnaaQLEcuuAtH2pdpUYtvq",
  "key23": "cjDpTX4YBfRg72E4Ne9Nwp6Mc3LTWyo17KyjxoeFfm42LtrLyh5Z7VrxafzhPiuC68xacRSfoErV8SjtEFX3jwm",
  "key24": "36QUEpnjkBTQzxwpXLJhp1W4H3M6KTUPkLkaRWk9S1XB6akAHKKAyvsMeKPeSutErAwu5TJSvq8KHg39xtoQAtiK",
  "key25": "3fWYu6RZTzP8VCq99CphjCcMedNpQ9x4xLubABcy1uaa3HwFJQr7FuCqYAd4dk2xb4NwXyXheW4kPoaCNEMpTFyJ",
  "key26": "24z4kNY2sP6ktK1TG8xAcFePxZNpEeNCoWgdjiGtNetHBecUJVXVWZHnLQ8vzdvECXLSjjeLvR3hit2dFrEFxzsK",
  "key27": "uvWK2Q65WGAAEkmr3w8u6MytyaooPRUC4gi4kBcUqwwthkuXjdKT1HxxA3rMBp7VFNdHxMbbZFag6wdjHCrP4A9",
  "key28": "3qWJudemXPBDHYkku3VdZEPSkNjGaHQfg9KPqVZJigLX43TLtcu5MeVNF8imnzd8Wx9SZcNFWWC6dEWSf5pDQnCT",
  "key29": "4ABsQnqgZComLBN2LMhJD3JUHkyyYsghjjourcrjz2PGr3gNUjCHP7e1teT3CN1yFhmhuvv4TcAuZXP98MbKk2jv",
  "key30": "37So71JYjWk8ZGDJWPsdbVwvjp8SXGUPTC2aoaWhahjsfbcDhzaYe2ee6aM7LjfEJxvwpYxrjtppbEsSvH3wLtRc",
  "key31": "4t8F3RcCkqVj9ZrXPDnaxgEVKLEeFXq6z12XpBtCAvqJKKfqijN7J5S7M6dCR59FirH6qdvCjPUZprRApj3AKNTy",
  "key32": "5ogCavhAFbWYwaCKx9eHKqLLMs2YMYS7gj4YZkYfoTCcwNcd6xNnDVKvp4HtMdvDhs9ey2pTbzUDdJu6Z9b2i5aU",
  "key33": "3AoHySArWGP8rwDV6sRiM1aqNMmbufmwpHotrgUNxbEVUdy7TJHq5BDsLsgDPzKkeEPVVXnar1QhQZbjt8fxvr4q",
  "key34": "4bVNz8oHsGEt1fWEpHqzBJjaGuk3iZ8KUquZUbGna1iKzFqRv9zyYoyhhJzPADh6t1qxaWVynruTMh1ngmKzQjpd",
  "key35": "5B4UMcZ8qasfyA4SBFRQ9LGMJ8ZCuB5LWeu97UoQitaYyGVPmLggJNAEogEDiLFaFTWqxN9D4R2UFKZ1Eq22NRxm",
  "key36": "2H95GE3LLt3eBCnHQw1F7nqwC3jQM1GL7HHdcSzDW1XjR1NYvRTfp9h5vtd69FmowDTwimmuVrYNqjxpnwXFADDM",
  "key37": "3ozMSnUyoNrkFW6PaF5mqmkGBi4JgZDeUqED6n36EdF6RPf2bftUiyJ5cqaugG3o8ASyWruVjcJSUS4ckgSbvVdW",
  "key38": "Sg9f8Zva3ru4dCZXJM7KLhesYN5LjY3Lp9sMVpDG25L2fsjqwgtRU8KZTTkmxkZpH9Xtfab1eVAA1f75xr7mFh8",
  "key39": "4t78ei7ydkdyjAtk8SVfZDyHAf7PrP2L63N5orofmfR6u4guGKGptftrDaFdDpoN6iDZoKVHxLXYpLjAeq35dV8E",
  "key40": "vbXdRtsbQHMzXcjSV9UkZBJXReASySjJM5tujnRGXJuYyJabyVH5nYgdMZhQdpgewCTDUGo1bPLr4UniDapnSm3",
  "key41": "3CvuCpE7BpFF421UJjvVm5kTgwJrt1vS1JJtxta7fyUtnHVqDnr5pHPzYNopnoftmcyL3VFEWLf58YXhXXUYmSC5"
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
