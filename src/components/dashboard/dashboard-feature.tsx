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
    "5iNrdhcgpiCtPY77BYNd1ct8gzCdDHZBgTNgL2LJ24EdEdvYypMioY9Ri4PZDJBsKSCrodES56jw5F8NUYd8Ha9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36uoEgGKKHHLjWUuEvRNY1q1JTGH9ouNKjudyT7KTUaHRnQkaNa12cnWqNF6mXePhAkmntyt8HkJW7fjDTmtpzFE",
  "key1": "2QUQGGjYdVyBH5shdpAWG7joGzX7eMAxyJSkLvyx3vgBeitQKPnkqJedLTmCRfjahCeqNVSQt9WPgW6YRYhPpDUW",
  "key2": "5aQpE19TaTjSmpKxvm1KJHFN4dFjZShU3Twf3Pexkc4jseYHPay7unizD4VANgX9v8XrrZ5i394MFqeu3t1245kX",
  "key3": "4Kmt9xNqQyXedGuG99pawXEZu5ir3NZmJRVthX2VbHfvBNvJZqLfk77Mm2mVfVZN7fBMBbcti6LBYYGgdRDpH7Yk",
  "key4": "eh9HNJo7V15KsKBM8MUY6z3NJEmqwfwCHZWHQPEtZXUGxRLSx8tpM68Lr6doxJFz8SdDRGXtFz74MC3m6Bnae3L",
  "key5": "3gtUuchVEh3hURLgrFzj7TnJAn51PpnzEKbcJJZB5JQpxozGKTQf2TXqvH8sMSsYovwcjBNFzUNCqd5G4VRBoQ2h",
  "key6": "54AKd8B8RcrzoJH5sLX1vSutHgSV8WKGUka369tcAb8ayAEhkefB7iDmCa9ketRvzcFsWK3DNkcnG2mfdcSWDFPX",
  "key7": "Wiy68Yo6DyJ6tQj2zeZRe7AmEEiJgQhftCasvLzDozn14zdTfi4UkaDFET5xz6Xoh6xMfXYUp3LroezhsNkvNci",
  "key8": "j8RgRod8UUBLXkwuDqeMBywD58dDAwwcWFYnFgnDfs65UCvGAtqSiwVect98HokB19RWrgVPwQVPpHho1GPU3F7",
  "key9": "Efyomp1GYmxHwg53gkFEYyyNcynHU1VzzncjPRBgGky3FixY13B7YWrSHfSv4oKswF7EFoooAYEf4txy3zN4RyN",
  "key10": "3KxPGr6bwF5xa7XYTsd1WRgS32Sn1BK6d88bNU4TXTx8e5ELYwGqJPPrPn1Cm3RUKQaPVkEVTGVQKmNKUFQoppD6",
  "key11": "51Q5LXP1BtwvnVEQMq7EtFnGgr2EeR2JZBwMoFNRzAD1s9LQpFqoXtFNs9vYXAHLm5PBpgYx83Diderzjin24gKf",
  "key12": "4ePdKxRF3Dp7iccvWUQAyDuUHT8jtDKXxu41XodyNpScsGE29B9dTH5tkoPDRbWpvYZUVFsFJTQiiaVt5z1WFkGA",
  "key13": "35SuJjke8SyZo4dM18GuKdUXgqAxj4u89sn1zMK8jNC8qXYj9sr8QcteGTQM6dBJzSZK861pKfrc7m8WSLFcKzJi",
  "key14": "mrC9f96HpqJQCjqEzfy2zUxWo8twxBYUuMij2dUhgHDBWLjB7zqCJ9kaBQ8mqAuGYerSues2rigncWAXKUwsH37",
  "key15": "3np4UFwSwErXzpLvzf2YWPftvaH2Y7BgZK4exooSDuiC8C4Tx1HmXSth8UEoVJ516VAiCvHEqADjyX9Gg33pH1wi",
  "key16": "4ocLQPNeNRUd6ai47Wedhzo9kBTAewoD45QqYScU1swrXten3rgwtCpPqdQ9Ege5iLGWdi7WPauvZ4mV7RKcna9r",
  "key17": "FiPHzFiU38m5JpYUDWZYh5RiSSFhF7VE9zpf38UJfBbRDWmDBMhK9a4XettuyBM16YLPruCeTnRwcJA2yRcV5ZQ",
  "key18": "5KA41XiYssc8Be2Wh7bCkcxmy4jYbGC3UGbcWTtGX4ZaA2e5dG1GMG6ZcjQobp26BkEvKnmuxVGC7idfDFgohv49",
  "key19": "24wCK6RKwwypUhL96ocL1h8dw9YAv3hRxb3fdYP1F9m7bnj193Df3pfv2EdQv7rWFgRfTE7PwVBJf4JkH4dx4G15",
  "key20": "2eXhbgtzAsEEysi4kE9KJo7wCCcxomkBRHUvbN23BrQZv6jBxXphvoja3CNiHEoFpmvZtwiGS93kSvKxAYfDRRMA",
  "key21": "25zC5v9fVQkDeiUX4kXui54hJYzKeHtdMdMPn5Mjjjs3VuqcUP2iWNRz2JCPAQJ1SNk26uhoZeq2z5e9bSyP2K94",
  "key22": "64ZNXSGPekCAvSzuUDj6kZroPCweGu2tj3X57cf8qsRu1haF5RDqwScEKbgcMXxhQvEN4jmXj5KqQo6Lh35G14FD",
  "key23": "4DrjK5EwUD88VVk3C6Lpm53SJaUfYt8GkToAYfLqDuzeDH6Aezyvhj8RLwrRFK19QrU2Csq9ogp481UMaJGA1Lav",
  "key24": "3Px55kSjQjoxZGSW6nLtdEWzx2C9BNYdjWN7h5rcfu16AfbhpV4sjuVCjNKZ6AUAdGJFp95vQdWgDHrmPjKErx6a",
  "key25": "4AMU1Se334y8XHGDRi6Prg9UdhdTXZTpQqfNyysx3PXAcm6XnNmsGMdgMwyDyCtixJXGk29hR4yeH38AY3CJUCY5",
  "key26": "4ZBoNQ8ygJyn1FdMs3Gk7jmToo7muL14WJ2DjvtYMu3bAjuywgdknZnkV3yrvSSLnbi3u1U2RtUHxvnSeL6LnmwW",
  "key27": "41LEngm2T8ZJHTq99hLCWnYwPgGwiR1DeU6mYXEqWX8DqhcW7WnWcnoduD11qzVZt19CrTevQ43UAibKxzRWpixy",
  "key28": "3yCDZLitJiE3LTqygBqQgQ94XxaPkR5zHQoCumrUsTcuvD3FByjEeXiUELzTx2dspmxVZFWrDTqQF4sA94WMPbs8",
  "key29": "rUH2Ytzwq3yJYb5TBG2UQmcdJAVBUc1eMGiD6mm54iRbgk1zPhcaJFBB825rPYgfFeiyL5kY3Z8ztHHKqBV45Cg",
  "key30": "2BLY5YvtWKa6w4wcoFpDDFYp7s5jYG41eXM34dCAqS6i5ZkZb2BHDTyxfUxnjDza4sX6UHdvKmaKTstiiRxrkeTh",
  "key31": "5hFSWrYYjQFHJGW4egJBJRaFFYHJ1VL2rJ6Bed3UoywaKoHmZUwGp91VZyNFfsFB4uDeRn11rsNCJYyBBkg2fVfW",
  "key32": "276TnGQNqmDK7Cdqokct7Xns4KRGjxgZmnr8bapvMPtvwwePSWv5nPkmoAwrwD1gN8fSfG3gK1MjiWs8zmivyxi8",
  "key33": "21UjYhbz7RjggMVk1Ff9SJ6xVDFzf8qizEtQSaRy3wB2qQMs9jBFNkZRheVbWhNWGTmi62tdgE3oq1qhTnNs2pSf",
  "key34": "3LRchpvR8CiEzpdXH21MFo4UDRrC9rfE2yUB3Qsek6u2Q2kR3F1nxoeK4KgsLnm3nAePDB9VbgWxU7iVHqST9XaM",
  "key35": "PYypAtsarMQyGXjBwkpjJYmUGfKCziAGy6WMLCSJfwCwwQK96rUjWMdtKZRNxyShtxRWRHFZ3KTr8byw7GtqoFT",
  "key36": "xcJ2pZP25V52Kkny5CSBx9Dth33fQAdbvxYaYiVEJvoLydafpPVxKS3bVAfoWUzJNY4abg2X8UYRrWzkvsVcjnu",
  "key37": "4JnKeLAGTDSn73SCb9bimT1qvBRxtg8X9ps9AvNAL7PCD4Ec5uhms2Vj4ZyGaoE19bjiGvT61uj63WPoWQ8ZoAos",
  "key38": "Zo3DqBgrkwatz3cBLZoTaSVak2p5CttzcLpQFDqmp6fJzmY2AcYd6De3XRCiujQccSQvm3YS1CXHZdPzzVqatuT",
  "key39": "5mhCcdsHBBRPizpG65CXYWgxbmLDLj6koNFqpPrwncuLVnPW1trMeg5xjbtoULuTcxMtg8AKPNq6gJyyyRH8rr21"
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
