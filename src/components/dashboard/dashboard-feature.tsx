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
    "3DoQQcufQeNbQbMYhgHurHA7FzjK38vXsCNFRYWhN2MtQdTpWfKGZFEcVmU94aw2tLkqSqk9JbepNqmWy6PMmz6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WvWmXoBvC89g6Dm4tkESbC1BiRRLwF9fGSAQQzdtH4HFAcYpvGXoXBwB5G2jgnKEU5XsAVTqc691snPtMjzxA62",
  "key1": "2GVx6TqhfsiNnt38tQLgEAAsmhKZra8qm3ZiMQ3Scwsj8PBGLRBcofc5pS8uGYRX1qKHmZzw8RshUL1S4ifH3rhc",
  "key2": "2bwjurTb8mYryEr1mPwqVqQVxDe664p4TeJoNPGCFeFaPLQFTjUNg8rSVKdANzpacLJJFimCXRF9Pu4r6JitiaAb",
  "key3": "4ZDbALnLHvZ7AbQ2EndzTvBLcGPsszciHcjz1hCCzVz7iHfMN8LaQcr3VaX2oUYej4yZs2RP63RJZN6KZfRTpMUW",
  "key4": "4XkoDQippcHKnmeKkpqdUUKKCecGWSmY3XpcuAip2a7QFuaQt7ewCPbnSEHSC5QXDCRS6DGhk35mHunHuRtGxCnC",
  "key5": "2zqZbtU4c8UJQiAsRW9g75dBD5heqwtXqJrFuSS9PfY7fruCa3rGdVWLdCej6FHJ6zWfKmFVyEWibHkp6G3FsVr9",
  "key6": "39SHGtiWTJ7G2WMVw1Z93GFfGsbi1saEs2Y5fh1C7E27rcfDFfmKg9mKX27Bd61V1mHmkjYwnj7o2mQdRmF9MW6D",
  "key7": "5MZG1mbtiq2k4FNxQMehF7ezkh7JDgHhYHjShZebq5rPoUjVqosewp7L16sSrJFCtEj8xMENW85tLi2ye2DELQ1n",
  "key8": "2Tv75SX8tR3E59RoerftC5F8iVhVAGVVjUFvZEx9vyWMGV4Z3vKT8AsMBokyRjH3d93Ze3NPZbrSTPwAY8cFbnCL",
  "key9": "4M5VeMFwTkZoGaVx28HBmx7vRKDkcePE3zSHDvutAFrtZxwrvnYjbLtaszqKjtkk3jjbhA8A9cepBkcr66b4ZHF7",
  "key10": "5NvXtMCPZcHHtLAUZN2DofbqNF1BGJoicU2XN2XN4rH2nR9Zje4m1DEPb4zZezuXHB5aoPrsazSjYBEoZLTJVhKD",
  "key11": "2CiSQNYwA5TfEa8mZeit4G7fLxSTnfaiA4QpxyDAoDVmGioHnrhfk9fGGkrgEUHHRY6K6q4Mj1URBseuXLfyqPwS",
  "key12": "2pCeothRofnJErhi4shxzMzBjiX8KvRhbj3L8WuoUmvLbzeoSDPBdnAY8HRuzfF22kK5BrRhL3K4PWMAJy92a3CQ",
  "key13": "xxAyMdXyNgfKC2veSyfNJJWTbDUhj31cx3DRo477KhXmDmP6CGDzahH9tJUYwYcXjoGJ2ncLx1vBMNMkb9JUtyf",
  "key14": "5C5wewSvQ7jyuHoo316ST5JBNbxoL91H6c4zMj8U5s3sjYnRTHuPABojMUqoGzVmu13PCwe4T4VJsFMk34PLruS9",
  "key15": "4NjTD7M6444f4323Qk8BHTquiEdzpFdXBL94yCQN9GmfK2rUrT6qgc4aFmbyfpNnEtebwrxxWgdUqjjjwbMfX2Q9",
  "key16": "5NrLDf8ETeqmLAvpwZkmPREjAkhZ8UuZbEnpXwif1qRGNYZFSm6Uga2K7eo8FBhhV5aEV2bbDF7EA8furnCqJ7Xd",
  "key17": "5BRSzCxTcBcjupSZkCxkCp7dHUqLBZLaS7P9pb5rFPRdFLAHLtWqwNJmRptzB6Mopj4QvX8qZC9xJJzUxf69uvgi",
  "key18": "R1hWGq6tFKnLXzxpTz7fVofy1QGXfw5JgCWghBejE2Bg9YpmFLWtrSBgLmZUcPK6ukz7hwE4vQEAeucXSxmLyUM",
  "key19": "4517AxUvPXQjQV8uqUGmKGnRYw47GvDomxTmdLs6tKZCCVj2mttYSZ59cmd8NPzBqqrX9at8DQ7GoL38HPUVp7B3",
  "key20": "nx1QgrL8eoyCbqk9Yf8w25MBGzvJ7ovH9hkRh7xNCr7MwXQuTEcUXLJ2QGdz8dADf5SDYTXSBeVvoetDzcvy3fS",
  "key21": "5Cfgf2QEy9ndDdWGa2pZwNyE1sx3L2nCZkZFFCVjrUkDQCrBw2yCooa8FHjUk1wUWCTJAKBmwDY4zwXt9ifiQHSr",
  "key22": "3R1Q5uJo9bojdeGNBvZosSnyK9MgFVfKibPNUBY44H6Kvwzo3nc1N7oCeVhDXuye9fUSqpm9cbMkEauZVACMgE86",
  "key23": "4d9dtH8QLRYmQt8m69KgmeKp1Ba6wfJT5p3v8FPXinJrJYChMfTmwKbKkBMrK552LV32tc5GQfT9qneF41z3fpAe",
  "key24": "3dupETph45nyDd8k6XM12giSsctTsrdSseZz93ZSN3huVPQNWG3w5VeuQ7v15vwRV9VscDj3sSXw87kzRzyNXcGy",
  "key25": "erMzxy3oaEvNUbp9uT1AfZyAjKneMMAuMd8RuW661jMgTWitFaca3HRAh7RL3bR7UhSFoanrHnrAkhNBD9c2KoU",
  "key26": "TW7WuWTDnKURKnwtR2wHHvbz9WAZ5hRipHS5MUyzY4L7sS6NSTkLUv6LRnTXqZ4rdq34MGkyCA5G6NMbswGeP8k",
  "key27": "2SbFRW4of51SAU4VcQ5x5mgKNm382HNatgtWirHGgTUgr7x9Qx8rxU9dV1KgGn4rLkYQAHeczaK2w43m3LLghkNX",
  "key28": "5seFrk1wzRRprpyM2jsEDr2wJNdmp89BJVQJWYSESi8UtcPFu1kj3SgFmciSpPhcoYc5Ank14TjVq9C8Jnqk4kW7",
  "key29": "hebejjgL9Hhm1cQuursE464fd6HMLXhFJL6BJRTunZ1Wsj3bcBRzvCnwGq2qLakqt7Hmvp9bmUtayRGPrdW3QF6",
  "key30": "66i7Wj1DTWpoKa2zaEQEqGdnkM6on76LJYZ95EgWLNnZ6zcDfoRKewKUAa8fA1wT3QUHWkC5acoeJJaT3YdYykvu",
  "key31": "4bm6N2vcYB4j5X7varrrHrbnoQrESg9MHRpd7JzGADiLPm8rhvgzzwhPLSJYMf1EW5badShtGX1ajfpnKEQ96CUx",
  "key32": "2gm4UT338EkEW7ge7RvqWgGBetPmceyCWZzgpN8c5a4fGiSA9CmhUDgQiwzg9ExwsyuP1iYC1XQzxE8SzxDjdmTq",
  "key33": "1bGwC5s76XXDjXjU6ukN5hhxgM7eEy9v9HweduQSX6gMBdYf1o6vsDL98qFowPCgKfiyCNQNwLkwJJ1tUmFdrvF",
  "key34": "2j9oeWh5YvzNxhJFcmtqp2bGqLHdswyxLHGSLnGX6SBRFBc2ywNwMGZ4jEaR3DBmVwByEARy4EaYHKmQacsc6wk6",
  "key35": "3DeLf1Swrouf6dh1hMXZUTUg83zweT3MAZuNCZeEKfihXytjVVwjC7KNLgADPZgRc5L3TjgnCgnnv2ZnWRAJffar",
  "key36": "KmuK6ZVyHVNUV7vmwLQh6iWhcnjTyd5Dnv3KpcqyR11faUPqxgHVL7uMxNhgFaNMHgBriGWPAhPK7QvqmpMGyut",
  "key37": "3YRcspwFGygnvG6JEWpmh5jSnwYMih6U5LpkPR43RLE6XSEsUq8XXrCoSRZUo75EjBZsjqEKWz7TNt2otSCyGmbo",
  "key38": "e3d4ziDmdjrhM3Ne6EgmPGxrayVdcGJKBuX4yw6oLM4BdAQdkGypHc9dtqNAk1xQ77LWwoDop1fNMHdtmijcC58",
  "key39": "bctzGfFrkiDJ2c3xKM4CBe5JLYVceaR9jpBUMoHp2bjCvkQw884ZkD8F6QEArPsHoeCa2GJJFQT31VqVVSXrzns",
  "key40": "SKEYZoqNmXpAxrKt6ursPsXKkP84DkhvkBZp555bd4kNScn3RPigwCGDXiDyruAz8v4AXZmCwzbkPBmdwYdzArn",
  "key41": "3DxQaJW5tDTqpD7ozDEYwATsN7xXk9c2rPnRPeTTV5VFbsKavYqwmEtRWvdAvwXZuVPd15YbBRwhe4yW5Rn1eFp2",
  "key42": "3tKjjCbfXHPQKWNn8kt1G9tZ8FT2hSk65vWqDf4wW4UNZ87GLVt1t7CWWxmSD87RhaV5aZQJKXqfiSoLvBRXPGV9",
  "key43": "2CtvFZX3o2ZxJh2XTPLQPijikFAjYStoWp6pknJoBnp7qgssyVe4Cipe6HXv6s8D94ViLcnwZStpcrS65J6bCi8E",
  "key44": "5V143t2p7pj2pzrQ8GZNqNoETbcXBFVcfWAD8WuSVAS8dVsvuRAWVGXQq7P3hukvjb1B4YLRNE2emGtr4EGEMcDR",
  "key45": "3RCPd1EZgk93wgfRxbrAW4gCiLwoWX2oyk2V6LYqo6YRSEzLxvY5bSsFkZAc2f4ofNY15CkHG2r56pzAmvFE4KAQ",
  "key46": "371U8oJUyykRf2wTEtwhBPyTiTaP21FzmZxAwEm61vETScAriFDs47MG2wtWsSLsz7oShM1snpeBNU1UuZPnXaRS",
  "key47": "Wm4aaJaRCLrpgjaLoGpPUtpuwfhVmymDaE7MMjzv4K3ViVjVNWnw9BSc5aW6u1qDJgTZ1CdPHmgHcrrChYMFYZx"
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
