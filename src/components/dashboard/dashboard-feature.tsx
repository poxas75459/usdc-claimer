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
    "2bFmfYQPRufq2zb8a3RLkDqFqmFWpwGuNpVNsisGretSabWqMk6yerkumq8TQFKx5Y1VkCw9UVJ96TgjH5E8CWhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pt1WHGDvvZq56iNX9fznG8ReStZqX6F9V1juWYdCkHNdH8g6gweU9xHbQ1hW8PabApt7dXjP5kNKu9TAbQZudnw",
  "key1": "2FU4u6eAviZCkXLCgMJmsU9R9y7mzzHzXvfnvbEEf5cTQPE2eWp2Go2JWM6D7sbc8SyuNgTbV3x2PWSG2cXp6acG",
  "key2": "4BeSSpQr25KzhdHhu2n5xHuN9MdLmakT7WqxPTnRF2aKnhsn2CgVbSurKLgNh7xwExSruNBg6pqYDtdXSFvtDo7N",
  "key3": "3kQg3syEZL4z3mQsMMUok38LFQiKpkRd91GpiRQpJeioErykuDAuCuoVhJeW2aEf4TGjieXVXDnMwTDr4k49H2bi",
  "key4": "5NPDzkRQSKKrrTan45rQuobkoivbYu2PmNiE2yNjCu7s1HS4B4pVcfmBucLQiAbeGRBzmNh6R1VamVxs2yD3KJt8",
  "key5": "2tVRrsBdpWSpNdfT9LDrWLWjgqC3a3REVY8h1psUVZgMgHs4ZRxJSspcKVwF5CfqToXePEQ8Lt5SCen7Ng3YA7Gn",
  "key6": "4G2rnfUUhzJkPBYop7Th7yT4wbMB3xdSrpPs9DFn7AfZBv98Fk4jP15YdTPggctPbCsnLLx7bZsX9eJHdHNe1v6P",
  "key7": "3vgqPxWiTns6He2Cj6Qhrc54JDdhQaTC5jeT45TVSMMVPsbz76BG4TSBtxGzc2vvikH1N58JVKcYTVm3zySGkBUq",
  "key8": "37WBYkjqWZRYTCdPts95Dnd967MkMoWgiXsMbPCWkyYNo4A6PKvR8FDzBUmTEsZXP9RN4NPB8UaAZf3Vum7gL14e",
  "key9": "DiyaKyRXgzFg5rzCfDYejGr4vN9cZ7xxoZipbhaHjqT2BEszMzQi8AYzWz5axu4G8fCUAfvz27ym3gFP5TVwb2H",
  "key10": "2uvF3SLKSJPCTJU3et7XVvno9cbJUnBbXgvr8vP85Tmjw89Yw1b3TvRQ4w1QDnr3v6GR4sKe2XVyAfJJUMk7KMBm",
  "key11": "3gx4s36sYjP3rCujBbsc1fRDbp36jYDN8y5XMUJYKVVDq3CN7FdCdqFqzV1tfJy1CJgtb2e1PQBJ49MV2f5FTSjK",
  "key12": "2zZ93sFYsBHcTtQ8N9bHqDC3FAzDow3EWF1zAJuqQvzUvX7iW4ripu4nWscWNHMnFhHyY8yeCNF4rRcXiJDKRbnD",
  "key13": "39Ao2VM5bydJpe13TS5mUhkZcbw7urYGsX2K5Z72SjmTrCcJdXbr646f7YDNcLVjaaY3ubzd6ffKJJvguPn6dxQ6",
  "key14": "49a6urAiwNojqhMhZL3E8ZC5TWJvNpDRp5f2MpquXzWrWtCeQZDLdFTYJt4kokQEUmf8yibf4EHnm3BuD9no7MTf",
  "key15": "3siXYL7dgP3mWup37uk1ECrN7g4aRdbsGuyu8iAVW5MLmJnV4gd7NjSu7f7eg6TdKtZc18E3kbEogynGqQ6LwsM1",
  "key16": "5nFyxG5HUhhSeYrUZo17Yp7e3dUopfiXrsipC6gbgc8NZ2pkUA87n6Vw4m5RyamMTR3DuwVFz8fbuWMV8cewsUiU",
  "key17": "36xMjmTNyRUCbnC1VybHi4itjbkJxNMGuwax4XRvdc135AY6pa7gY3FqJwyVjzLqeqmTLL9ymqpivZa7eS8x85R",
  "key18": "4yNfhDmKRJ48bTZLg4gtG5e9DuSshS3iutVoBRnjiMGKA5yqFTFdSW7EC6d5fuFXRdtmhwcMJfPeK5LU2GJpGACV",
  "key19": "3MFpvZ1NhDywMZEN3wPaHmUTFwMoGBkxHn6fc76LT4B42GQzzPGJD7KTuvA1ytvBEZ7QVRiHMLwg4j9TCkojdSSH",
  "key20": "2QceG1cFPEJr9bCpEC98KaJuMrHuwcbKDoMt8bsymCaPZWvyzbsVmhVtjGAYmvm66iUaLroqSNhLvvG9nJwcz3LQ",
  "key21": "5KnLaUH4qmS8veM1BudhbBme4mTB6P1T2oYwXGnN32n8FZg33uY9AiLy2VqYgRbQ6RQKK5wj14DxmYgxK661DZGh",
  "key22": "42gqHve5K1Viw5GAZJZhKBqXk9DUaYDHs57vzqToxxzFCBN8MbxeAEfvrtUB71SnFqxWsYsRPEK8Buwbm5Y6asFe",
  "key23": "yzFGzcEd7jV4LvRNUK2PuDQ4SU2X7cSom96KZUbQoNJSkVUmQ3ScGwJmco9g2K6yNtNM4gdgcAnxGPTbsjMTTsy",
  "key24": "B2EZi9qbCT7up8Rj8wSyVB43ppHpYSdbkVFbr6d6XjjgRJJpK8W6ERxgxHVijLDrPe6ZmpqDZLRdTXyaghSs8FA",
  "key25": "mN48uAZB311FSuEavpz9sPup6bGqYGJrCfgqHgngPHGX9ZaDrCmLMEr9648RXDTaWC9Y6xN9cV7ebU3bnmHbjg2",
  "key26": "4Qvvac26CfXxM4oGR5EYjAnSruxQ5wJzV6tEP9dYAiDCom1wiobo4SvfyuQb9joUQKQ27rvAUMxZho9AjgLK23vZ",
  "key27": "2JVuRFSXzkZqEo7nwogd4HCMPuFCaCJdc9pjiFLifQVmvkaeLcmzyxwSnGbhsxbofEwsPX6PZWPtGotz88JkxnYu",
  "key28": "4ntuvkCtu83THQZu1fRV2NW8cwoEfSDLwsoLiD8bQ6oroPqxeXeGi2vzvUQHsTZuqoZq41BVATL1qTWyvnBXeWKB",
  "key29": "5VbADWFE3Pb472BTPD3JcJcm2hD9vJ6rE5dbCoz38UyCAThf1ps4STb6nv4JVAv6iBBaBmPH7kLb5LGtyG2ziVrK",
  "key30": "TyxcaDJfG2PoK9gUgiUENVWKmjtFmtED4MfHP7FeujaJh6Vtw39VbAo7ex4C8ajMCisrE7un4SQb5Aoyay582R4",
  "key31": "3HN7aTQYqk74pacL6Zep2jyzqyS7TXxUPeQjogHkPGfyW97hJe3CxDSBj3FPUWsjJJW5ybvbPbwnK7gX9UKdNACh",
  "key32": "52Ssv1UtCR1TWwsG5feppYnWRiC8qA5rppzisumhhaT9TATeKpsXj1T35YdsZJr9P953sJLjfh699J5rX6u9qmfx"
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
