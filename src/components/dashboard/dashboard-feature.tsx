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
    "SQDbirXG2Ybj3pQK1e5CDwZL3M1o6nmadsKvr344xaHDRnJFPfWbrhqUroRwj6RoPSdEfGtFDrCnKJ7WzFrUbQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RpttMGSynVcYVCLX4iUZPv7Yheg8iuRprVFVc9KNcHLeiSkxM3cCBbLkNSULGnZk3nst61GUnezssteGx7EQvFb",
  "key1": "4cpEdmADUnV8TbNjq4xS2SgaKHxxTngYWHj9LkC2h8ZTP4DGfizDSURCzbQfbUMMvKRynLMHx6AtY1vWR7NSs2br",
  "key2": "yfbCJefRCZJupiyt7QUGGddL2SA41RS7Er5LLrbFPYXjnzTrbn22gfAWkAPR4mXEC3P6Hq7CwCQX3K6xS2qwoRA",
  "key3": "5QHYfFLEzZFdLDTpioWV9GyrnvGgBQ8mYaUXeRRfquWgrEbBfsTnmPgqEb1r3etxVzJ8w5e9ApJU7PbQNZ1MPePi",
  "key4": "5HHMuodDGV4mtEJHvEFH95ecoAhQQHamsmyy4vQm1p5DdUDXZkdy7DfghreAor8xQB3TWuMeVGzuPFBPx1KWWbtT",
  "key5": "412AmAHNT8JDi5rJcrD1KA77aWXRMDMkk3hH1Cgzz3uzYv2GvASQejG99H1zXjRiJhMMobt8hk2RSiriHyUVmmGE",
  "key6": "2UHeDbs826aFauABWG5HoofUwvVe9TgRwJRNtSHmF2Zy2VvqnVm9EF9AnDPz2q85wde87LhnLXEB7w5bNHQSqSgJ",
  "key7": "QBRcZBid2FN6HqcHJ5XwR7r8GmYSSXGAXtDYMGcAwWrfRDbxDhsSKk2A2Ap5cS2bJ37S3titut3wpwG4pRiajxu",
  "key8": "v5Hf56mvdR2mvJtfWKZuwks6nzBsmgi2c458ycaiyJSJuGNSkcvvjCjK5Xnk8zHLaDNZZBahd7XUHtXsGPu4dik",
  "key9": "4guzksfGKjrnp3be1XC1WECdAJiek1VLUA2aUbaqekAKMNF72QBxB2uQ2MJDncgztWoAtaZCbFQeJyA2xZa5ordN",
  "key10": "5Pv86AbeSaByAZATzik3DtfvXDGY4tz7KdDaM2hVDHT7SuDrXExhCS9hFGVDYmmDYBfoiSMfrpAkKRfaM5Lfu8xQ",
  "key11": "2y3WT9prZvzXEMwefaosfoN98YrcxZcN5ibR8mZoaj38WaTHqHMFuDtRndMX4MokyXH3cPgT9DARhZmWfj3YUzKj",
  "key12": "5i8CKZCPFm1HxFMAf5f1XgANkZJWtVhAYMfLdQSg8xWaqhAo278mSPZb33ko6zZoJB2r5uhYKhhPCeqVH5PuiqR1",
  "key13": "3vpxTerNs5CMyyfCdYJqRYhPmGiqxDsmaqWNWFYwKHBsoDKUj6LouvnpihyYPTshHfJ9MaBzkqdzFqstwrobjoRc",
  "key14": "2ju66N3m2qWd1kzu4EJuXLJsBKVSMVqGZeDQgKoVCoUfa5rGwworo9cZqMnnRHwixQVzLhM2uvMZL5ZmLsJxHF9V",
  "key15": "5Zh85XR35nDi257ZePqHBxfkd7e58Lgs8AUXi9NBrx6kcqryMBau7auzX9xnfELHNBZeNPEvzEUMAiSJVHK4LwoW",
  "key16": "pUMLKvFioVMU8TRE4DAuWcvMzEW3X6XXVyUyaMMqQcyP6b26wU2QnRrHJoibuVk8Pgm8U5M467zpuifwAFy62pN",
  "key17": "32bBqz5DU7yxBsfMUQXfqRqXtMqtTd7ePDHu6dtrMNUiQHjj5VXwfqhX7kKAW8agrQwnJDN9fLz2hrB43F7yy67h",
  "key18": "34F2swhbsqELbn5wqgZBAgWQweTmbfWVCCDfT9T55dTfKBkvpHJpQ6AjnMiAzqpVd5VA7q8v1aNr95Cx1LTRNE8N",
  "key19": "hduH7ryQi6iaXiM8jvQxRqJN58fXgLfRy2JHyY2Befutz3q2AkhuGw2H18e9Zk8B8WwAq5xiAZ6bgoaPoXruDsV",
  "key20": "5WWoqvVpNcgkWUBRa1PwYspnfRxg4QpYuq91CAf5T7tZYBLohktaEZxgFRytV37PtT7aT8TPTzGoScYEkUFc8btE",
  "key21": "xdtCro3s83bXfcH4i5zc2Z7gfXHJef64X14pNFmt3xEnWMK7JCTWipBK5bWmK6saKrh1Rk95YS5FUwSgjcKq8N1",
  "key22": "4ehpjXg4DERycBk59dVQB8xGHKmeuQ2T42SEFisVEPCusYiCNywHQSBpgvCP9Eun9YrZmjXqHbfow5vT36BwTagn",
  "key23": "5ePaeBtx8Sv7MWi34R9mBaZhp1tJxoZDpVNkMt55nya1uaVZKpaQk6h1qATiVw88LHHeRY5meweNyY4Lxi3VpcSn",
  "key24": "K5v5eB3eHpzQ9EmW3BGtiZJ9ShArzkuHSH2JiGdVyiwLzDUQNZGt1QTHMNTYhpG2QgxVajtKzM2SX1Wxc4vA6v2",
  "key25": "5yM6rEw522H1N8otur4bC5J9qGnJxfGJBLNTmz5krsTvH2bvnG7oLpxdF4S3swEsTe8y6mxZcCUfeSQ2QiZvAWUf",
  "key26": "2LJC65CnKBaUDVKPekGzdbC8PJQ6TqS57QxRCXCZRfmfhmf2AzSTwQpRRYAByBhKQXq421jsbLzUmpxitn888XfQ",
  "key27": "5HxvJypKPDoPXma8CPfeHiSZaLh21y5sbHP6Brmdj9vWvSc9sFMauffoWZZvfaceSM3z9bDRc5NRE7SHoBMFGJHY",
  "key28": "4EYDo554p8frzStGQyQrLfod77vF57Vzea5DR985zpwR1PtZUMJEcY5gCKBp2FT2cKaY182syJ7ncL2LgK7KoRya",
  "key29": "58iZmgmphCpadiPeyQawKU3dLP3ZrXuKzWGFpRuDmfNDutsTREddV2TLhPRnCsrquu6R88KmxkZwNKPoYeTe1KTF",
  "key30": "4Q2J3kxrfeqDsZMJkt88rNxzZ9aWw9nRw76aLJyLFhs8jkEuB5NPM3bdqVyfy4KQ1WGU7hZpsYay2UAFe3KjYPFo",
  "key31": "3YAqZGy4AfTRSzBuuDr8GUktt2naqLQoJon82X9eADZuZN971KNS2sFFRLRA1sm5eEPXsDrrCz1ubQGfS2urgZNC",
  "key32": "27ZdGHAb9rESDyDMMQDQeFZMoKns3fg3HpbXj6SuhseGm6MTzDozS7J9TqZ677b4feeNuNkD9ConA8RmgF7qsPo1",
  "key33": "5FcJRnUU3ky39xQL3mMct5fLfaVoMT99kvezRCTVPPbZ927ckktebtt9GbqdUTC5G1NjkKC86qTgsKPoUvFw354M"
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
