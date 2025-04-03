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
    "2QUE1j6TBTA52ffEn9JaRzFU6c9ZvsMKykaxik3Hjtr7YmW5RfFPcH5o1y6qj9vrt41LUn6Jhyxjsc6aR2tcpPAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ruKyTo8sDqHgnQe6aGKgPGxLS51oATwtTMe9c8KKxNFP8bSPo1iZAyTBmkkYs6uqqzeXp98YMy88Xo6PMRo2qgY",
  "key1": "UUmNUFMTi3AyB3RWY5ptK2gLAzoTusHraLrd4Ny8kcJ16p8dB9tnCoH9FqoEJq7oZ6S75gcbYw4PNQiHVAe3t1L",
  "key2": "462yLZF4QUMQ6cmzctsuyEvFaNUafhJxr9djYbVyjGfDQe3GfAyag5K53acf2bQCQyrxurSEgLA4Gbi6gSCEEKVZ",
  "key3": "2c6U3NTQWjWPogLkHVqzh1Chtg2t1SReDTXCVNs5gcoWXFRc9vQmQLc5cwcG9DsSoTdLmbNsWiVC95SM4bctEbXL",
  "key4": "33NSgwbEMt7prZyQ9wX8qmxeuzPaji1h535TcGhrPrDupbffamSU1Y3nFzxpzwMLiMeXkDynZgrFVXJXRmkwioBT",
  "key5": "MLR9M6bgKymaKrh17tqWVbnqpmefUs2eLtyVPDHvFvaLZUBZg2e4kMMNgRuMfHcEojbTosB7mHZL7bdX4o5UkFE",
  "key6": "4KQwxzHB2JmUBL9qnWXV23yMRPVpUE9tkuehBWV6C7AGqNVKRFbZkjFB35FNPW5aMiyS8LRRMyZsAFiJdsozvCZk",
  "key7": "58XxBLiUyZS9PkoiXgUCGxzV52DetDAEzWLJDM9Gr2HcGnqK2SfX2Zenuce4TqrrVdffHuHpYwsMXhbEhnmqUXGo",
  "key8": "snaCPAmFu1w391kE48HJDZEYnqrwjZg1jUfucwean8cxLzzoDAGXAXBUYqWr6fG2uBcpNT2hEa8386VTPJSoRUK",
  "key9": "5iuDgM2WEVkezUDmnWenwQqgWUCysmXgM9RHNRmEMK19WfX6WFvadLdUVrZFWSxQ87ie5xWuz6uLCtG1Zewz3gGe",
  "key10": "pHgML5FHf11yr92VMdLVrLqg6HMjXRjo6fzX87Yh7jtxTqUPTLenNKTBzdE3KBvKkBjAb5ucNM9RvZ8cdv1RukE",
  "key11": "4uFzTBAadZnYbcTktio6iorqK36mzdGsqaWv7RTMiRpCuQc29jJRBao1ooYGbteLKJzJrSjjACQZpvc2PhGdpm1p",
  "key12": "7Bzet4JdFwzJv5hURd6cv1viWLdqYhHg4Qa2zdwRZ18euFwMKwv77wysedFMkorYpNoq7jiQnkV1PJ22eqDSDpr",
  "key13": "2jF4k5ugypDNZgnTJJjrLHdFogB3WqkGZNhcutGixL5NH7FNE49tsXZCc2WGysLCLDf4SsFk9boB1qisFPqWZQLb",
  "key14": "3HGgku9u6RqcKAMUdsM8iGgAf2eqR1T9x3V6Ucb6Fd932omzJ4Qm5AeKU5cfeyjbz7bisQHG9ix4J7K5dygeuYtb",
  "key15": "4XFzBV3dgsJcSa8sYuEAigmGDkhphn6UQVhgBFwQutyk1c6r3nz8B36EpFN66zmimZfaG4CGxGzrMe1eQduoHDW",
  "key16": "2e5t4SXQjmf7WFbqkF9hsF771qUnWEdvapfqPPFUQ4RKacXPr3kX2zn8Emd4Jtx9RFiBS3HNJBk4bxKFGbgBTAvY",
  "key17": "5X2gWeDmfx6uAWqGuYiRa8HbD8Z95LRAkTw9VdcwPdMi29GQwJkew1tSJKpbCaT7xmsq8tUTEBZihefYR4LyJhqB",
  "key18": "4vn5uL4vGWE75uVs9WCErCjZ2pSx58QMJBgmm12XtVTNR6Rp7jLNHmX1qmWq18BYgkRLqPYHGJGLBPreWeTEbCTM",
  "key19": "2watNPa6sdhPV6sCc8M7EimTP3DMb9RahhQiRSPD8qiL6YFSWKajf76GxHMZwNCr7WTmu7XYwWStYpnBvuTYADiY",
  "key20": "ikRpHAz99pBT9GFHULFMdVsf9RU3z7wWyY5pPB1ZHpH51dLXmJTeUc4aNXG6KsWnKPSmLc49BMeciFJVdPv5bfT",
  "key21": "5x7GK9gAbGxsNu4bnjcz4vXuQvnZkpFmHWu7D3n86xMbJ3j48pUV4kyKQ7MhivNVn7oq4vCmsGNyYHoMASiD6eRa",
  "key22": "4BETCQFoF5dmd16wQm9R74Y9JuqA8zpy2mKQB1WEvXbS9UqP1XGEHPZ1GoPZc4hTmQ7rX2GoDidux87WQiC7jmDH",
  "key23": "2Sm81DHgbwiZZiduwHyAgbgQHhpMEDjVSAMd7FkhKgXD2Rqg1xqjP63UMzxRjiEP5TNB6DyoyYknYwbPHWF1nKw1",
  "key24": "HdiY7rtpEgVhffwMfH3fw749STecm8rEVKEJNWaC22eLFAqThAfjWBaQjLGxV7Xhg4Lyy4Q4A74mmPBPutT1NqZ",
  "key25": "2YvveejopMrFfhfEvGwgk37564JDnYq32aBf8XM8tGt8zKRaa6qAQHsJmtZu4Pj34kBEGMNBi1rzk2Ss8dSRqP6h",
  "key26": "5hynoTnS55HyNLuMY5uecG47hLhVsAcCBvpvzDavuHm7wG6ZCRczzFckaF3EzyDGt3cV3fnRYE4y8FTUU3M87jk2",
  "key27": "3X4UMCfqkXkFqoXK1kQG8hkLYeL6BANtHWRu3ubvoU3aB5SPNCmCMX7xhP6JLtwwYHpCG5x1iYCeSLAorHHuccEH",
  "key28": "4k7ESX1qhhavXdsDjNJg4n7HRyTyGq3iuqPv8eMQLt8aLNQd9VKjy8ABFPhFg4f6kPja9wFZEpqxsyoVfTzxJMhi",
  "key29": "dfC4Wsk9VP7JMRxewDmahWfDizBmua17dqpb1WG2myK1n8zqQsyXKEMo7thgGQ9kPzGD1VZJH5i131MPaTDqhnv",
  "key30": "5AieKqFSLAiVZhG8aYFb3SAjkWaDrXPbrhApNVYdBDmd6W7hDR4BzAy1Xbnu2o3M4gh9WLr5dJ5JMbaBBWjHs8i1",
  "key31": "4y1wpB5JTo6MM2M7EHb2Yh7MP1xDnoug5bLtbSmKJDZUcthoAVTXxY8mthUahFZY8LAR465diQyTdC3nyPYTjohZ",
  "key32": "bsCMhTYVU5gNHtn8WNj43BpM5sv9DCQqJ7U5BhBPMk69HiHip7JncCAkL35P1oFYoJhSHxvpRAPUP62sPQG4PJs",
  "key33": "3CEJpdPiyHWciB1ET6Dfco6RjgVTxF9CMUmnSjJKcyJB3onLcFGwTa61LDBr3yJGFe3DEsvyJ3Rtd7zRexbv1YzU",
  "key34": "TEyj31L3L4CJKCkJAVnNxM4rPKpBHSKwVwZBQE3LjnNTXd1juz4JWcTn86SwqExjadJHMYYT1shFxCBvo4UwhbQ"
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
