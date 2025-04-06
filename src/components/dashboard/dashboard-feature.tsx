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
    "2Vkgb2f6ZSAwJ8oTwqyeirJW2RwwVzm8abhSmUd2MDYZZpg45ukgwcTZbz1PShYid84NPjoLq16TAF5XEGqCGaij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDZQnqUiWzXp1s7kjacG7r6LoUp73PJZrpFDULnxens2EcdvwkhKorKnVdfKRinxCLzjxTcuGcPCbsnobLMQQLE",
  "key1": "5S1PothvFB1VBLcD8AX1hX7ytVSDSdwErEeriHRF9MH5B2QtYWiGC8oyvbVgwhu15XRtsdqaS5Zad8wKoPy9L5oe",
  "key2": "2dPMmuUegW9AY9ES2W4xLzwQ6okj6UhtcD4TQoKsF8ai52LX5N9N3yBE2FcTeRD8k92kvSoVWcXmrgX3QwtbxUPn",
  "key3": "PPGCyCKVTX6qgDL1H9eZEwygKq6sY3xhHtLFy93ZVhs6LHLsR5hr1oRow8b2xR4px63fq1p5spZBDhddEmcEWdE",
  "key4": "MeSG1TSk12UbsPB1dSUtAL55YaUj7jky5vxn4gztmz77b7Ug2MkVGWEn5uGdJJExq9YGt2ofGT3TXKpSbCZSUo8",
  "key5": "P6rDKb13cEnh2XYtMrEw4uNPYLVzvFnkFyEsTpp1dHa1KSQ7bBzv4mGSCrMqUpcQNe1MVTLPAGfUdCHwW2hTXKy",
  "key6": "5MPAjS2ZMFNtURqDYdbrBRaN4tXLKJiicXGYpwPt8qHourFBQR4JfXMWi4QeBaqspwzhCufBu2TdfYJbagZhhWjU",
  "key7": "3pqwwH2iAozhUtXhnCD7uSLNB2d8v6gjRon24uYN4WpU13P6YsbAxfPhzkCx7oZc4iZVKNbynEbWVRLyu8vatXnv",
  "key8": "5Tuuj6QchbTeKRfPgYQ4ChbCapaifKN27qiRDA3diZCFu947xdCvCF5mUiNFynZBAidSbDfchJJ57DgDZFPoSrMJ",
  "key9": "3F1yh9DEHy3eoweLhsERHpLA9CuLuDYFQujEmoe23TL9MRHDScwiz2KqjZmaySdY5ynSDxhnyEvykGQ4ZtMQXkQN",
  "key10": "5Swq8DcsSg8P8VMe4VaXjKo81Xc2FRZJMoz2BGSc6bKtTxy7y4XR1hGJDzcxoxD1jkCcbWU7hPdHkBydjyGLbiqE",
  "key11": "2CMSLZuApGsdXZNiWGLqqNJ8vUvXYRVwJU2ajHaERSAYGk7y4ccyXJpFA4i24aFYhMzE3y4dG9zitZZayNGxXhP6",
  "key12": "27Vhr8iaAjt6f7xquK7tNwQDxja9fFyXn1Qa6Vz1z27Q8muybiAxpcmXunqUCwxasrQ2un4BAMzJ3m7ocgpyxPvh",
  "key13": "F52MKYVnh4sSsvndWk35yhwZH82fyMETAsEgEBQhndJmKLq9vLM5PfbNvGre8NsghCyQgeN1Qy7KuCDgzieQbNm",
  "key14": "3SpUcYNH3sBujt1cZnH88qAgQNVz5e5AZNZeFHZMkhXZQw1KtujFAWEXFHrNFJXrRx2cEF4motHgskm7ihZMcFLz",
  "key15": "49fzZiiBSbMbnBexxbJGyuQrdp4siyWeJZtqnrWE25pGvsSthidAmSMN76vLDULvyxjVbjicF3K7V8EqhdNEf1p7",
  "key16": "4XjohCY3ogt2Tzohuv7TwnMqF5uxPLpByGFArd8bnng9ZGrKUAKGyB5sfPBnF5vqHioUmoM9CPjQAWoxG7TsYqhS",
  "key17": "256BcP5WuUDsdKuHB6WQDSwTpzcJvbqKdq3TvDoQ6aAeHSZ3ZsEiGsmFJKaZXzwpJXWgotTWfDTu3YvcJM3Pbahw",
  "key18": "3eYEbxT8ckHduFws31HMygYMdy2vSXbi5VicheTAjCCfcoux7ELeGYrfKSc2JHkzEsyU8gZQABVzYbwvvnk1JgdT",
  "key19": "58KraooqDyHtNxsAbSdnGaqXXuCtZR3SSj6vqbCx7CBTuZP6eb3kDoLNc8EENgT2Ky9vXZhz1F3Hvx49PBwRUZQ4",
  "key20": "39ZBKaDTGVAmA4FYYNibuU815tofjy6Xyao3Vc6ESQbMEVTZDUbwV4WWHXfSbqaqT9HAU5ANkuaGyoVC9gvksDyd",
  "key21": "59rxZTbF4yBWx1pgng6ib5uoaVGXhqvNaArHhHA1R8UUSiBjnjhicHfUJL9tMQQQUgXUHY2qeq8RGz2Ump255Mbs",
  "key22": "5SgcY9zx5eJ5PC48cQg3rXjxcoMJg7bYXEqyutTY8oQk71hj5FYkrgTpf2MJ7V2zCJv7cVuyFy7cxPGVEkw4yXU5",
  "key23": "5zh1ATSdfNeowmgKm2MTAnoEWBrnpPL2PzpnKg8tz24YhGofsNVVKFpXgKK99VR5CyXXYi6mfkRiLeeCerwVVTSi",
  "key24": "3k7KX5tSXjiTnrvcNDguytNVDEZ155NQKq1GnjTtm7jmhFw568KcGzNDNpY676hEzAD4LRSv5XAXPsbD3yrt2ow2",
  "key25": "2WDndDJqRAeLKoFQoPSvrhy7h3DMnezV8FCkDEgWkpTWKjKBnTRQSjerMq5TTLLyXLxCdqrZYJme55xeTucqGpTt",
  "key26": "3GMSmQthK1KYmrVMDMpGWideBoGXpZoE2wYFfAmxxSay1183o665GMmoLLCkWpBeYANyAbNwrahjwZGToRpSYcKv",
  "key27": "5SPwETXzChxCZicpLqyemD8BkkmwtdwrHKFbHo3M3Hp7eazgxKuQt8yhV7tGsiqFT1wJLPkRthJd5iPJ7Dgg9zj",
  "key28": "5ox1exGSic3bRYcze1Gd2AiRWpuPyNHQRz1ESGQrb71v9igNJ76UGjWVHgJ6JNXwyFyNYTWPUDYVCKjM3tHskqLg"
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
