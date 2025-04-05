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
    "2wfquzzUKU6FprDwLY2VweJFa5o22Qv73d6hrGBxP22AUrtJw7qWRGvsu5caye7j5WgtnQ8NoDwmDiyDcSkxUr2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHmpCYjmtTwcRp6nHT2VWyZ9wuefyp5uzqy1YsNmiHYJJ3rwYihcEDe4sgJAbHkeVPPP95oFzJy7pzkk2XDSL8K",
  "key1": "6qw5PFqEeQ4HaiiDNkYPFkhN74UiTNLdMyCnC2sj8sojQMdz9nPA7ksYCYLa6cMBYuhyvaxFuxXZsn5WXxWrTDP",
  "key2": "53vpRsDBaYXKeFeFCjqSLZtT4mK9WYcLV41oJ88vVRbrujUhj8Jw7fqGRmuNj3CTEkdUH1dbNXzqjTauioRzymtP",
  "key3": "xXfcRrYsDd7mfUDHrEn7dYakQNcLLTBF8UwFGJF8TLmCvTX6dtTskJ1BB2FvrmkfPNHxvqyssN5YaD37obB2VCz",
  "key4": "3jVcL9yxKekXHLghpSuke1Tzw9Q9RU9LA5cmKHwmt7cDTgmby4UyrkdxoiDS5twD3urEJDDEcrq1EMEKFases9jM",
  "key5": "2uXyB2755w4eNe8dFzsuJdQYJ5RxchCj81pZHSvqALVCCHEBS4Mo9eBeYSa7QXPUcyoR72PqPQ4YntriBpQSENHM",
  "key6": "4UJ3WZrJkj8646sXd2CxYakqEAiBuBgbrm4D8YbLYCH4GuYRpkuh86uU5gwf3LM1RbE6i2hXd1ZBSw8yr6AqJERa",
  "key7": "2n5EsNUBJbbX64HTTcVZjsfyNJ4JByDYijtFufQYKDWC6GRxEoi1Hs1BXhPfGQjnMpBztxMAR9AKK52bQ5f2xEx5",
  "key8": "2drGZPi5b3DUPT5pDVVhq66njNsgiNyqxUwfM9upThCZePXK2JaF5mWo2pUfkarbyskbYBUM7h8cHZZ1Xmi8hznv",
  "key9": "3do2REH1ZcvKjjcXBhcz7MzYPPcpxqo7xLuajk2SQhVv33hxhRTFVb6hHuqgvzeP9mAC3C6NjWTQjo5HRi3WUd74",
  "key10": "22DouL99mnNHeaHpbcQSLXZ3mmujbVRkBCRr9MHJLCcZQMD4PDp8ZBTtMLWNpoeHEWy5NCop4y5X8PqPgX4Bsym1",
  "key11": "3CdMVupbCxYpQuhHMxajbVqCr8MQMCpbnN3Tf5pFp1EaVgFado2NeyXdzDXntqbWwEctfC5mvPsbREbE9uG4kVay",
  "key12": "2mrEiRT5CN4MFnNXxaJZeaG1iEEzT1nb8VMH1r66vpiCq533WkuiD2rouncJKAXTpZLNaoBsULmtKVAt11N384jT",
  "key13": "4HUw7x4QvxwJqhSFJUVw6EwK1dAXShBdcrj9iB76GEBjgJW1c7r4QFAt2SmGX9Tu9sUwZmNBw3bztpr46mjykUB",
  "key14": "4sofcGqM1WfsboR2pwEdzA9iQdmGvDLAQon1wTXEmZWnuoRBDQcN53dTKQH6Fyryqt9PPdtNHGVqS1jPA6zRM62M",
  "key15": "4sPhrSSSBnrd4fRbUySNNGkqqSTQstunV4ZtZmRhZ2RmyUPC7mVSsRFUP8bLCUzg2JHe3UbfCL9YocE9KZenq3Re",
  "key16": "3YBBYAPQYMrEdrLDe5FBg239M579YYdDnPwdN44PEnpbAC8cJWw3WtDKf4MPtMarNxiUmJCZhuYqnMKzDr3ZvTij",
  "key17": "4BjfJ9xrZzqb7EE2Z9MFaFnpd9eaV6jpVDKHiRPCnnK6CSkgRNjkJNsqfR9oy8xnAFmYsbhxK4c1qvckL8nu6TyJ",
  "key18": "3AkV1twb9eSXdE9xyP3evDq3sS4kcCLfqjGsf56fcfbP2HtNJ7iurEaLigsWvJgUEgq7K1fot2YhTELWLsjaKLdo",
  "key19": "2Y2hMNajuE4XoC9KjDeyAQ2Wpcgk3fvBq5RaBTNrz34Nh7NnypbMTLKnULoB9UnHErrKmyZQ254mEEKv3nSLChVF",
  "key20": "58q2B8UWXSuLoSnJD4LVYAN5wa4eMZe67pmRWMXYxkBsw9XKfFTgU96b6wKzEDvwk7Fr5dfw2Nb2rK9BMeovnEWW",
  "key21": "2tmFi2gmVxYZSezgBp2SDkWAYvHPrpmpXQcjaTkYJ6p4ReEgyQKsVNG6ehrmNicBDoYH2J1jRgTbFicW672pj5WP",
  "key22": "348yxNiQwWu5R2MPL5znom4VCY7szaRva6Rf2rDaubhpxzipBCG6M3xdWN1CncUrgv9uWyD9ZT8GRSgG6N72Exvy",
  "key23": "2WsWtLbJ2AtRAckkGNhwD9GRie1bHtLvFbsk4sPeAXG1q6f92QcfBnd5GkLYpuoXangDsM8vbeurTdbFDBsWBefU",
  "key24": "3CVQt5WAzSxX7xvgBP5U3hovZPCU8KB32fzrM31snSHBVv9pKsyLgwbAKxJf8WnsvZ93vtbRXieA6bUqhBpFLu9V",
  "key25": "5EJK6DT71KAJ4hKudQc3PYpDiKxJpYaJsYgTX7xxBj8sHPSpqNvnpZiHeaEe68vFcJXDNKrG1chQXLPPxV1V2tG2",
  "key26": "1DBx7YyrWUtPfr8zXpoUBZsLEP7a2u1HpsU88XDM8QvKzimMY39E8ySvkrtYCysguiruma5hxpWfh78PsgtHvT5",
  "key27": "4ypx9Qr9jefgJ9QBmDmgNiJwvwZz69EF9CFu4C8Qjdn2o2Dvjb7iUr1weSchANopoGf1u4a7gG7VPZ7ZAZ1bAbXH",
  "key28": "3zor1YkQTidjYHmuDT167V6p3oagYqA5YjRdXgZKd1Hb3UuDv7zPUNZZFg4cnp4histSc8LCsNmjspyyeNdYZZJF",
  "key29": "35p3ZFqckArPzVpnHinsKRR7xQoiFBextqHYWRrgEHFyMpNkvt5oK2MXtWw9AQrFL167516Kq2RBLRN7seFz1RYs",
  "key30": "5YP2jFqGZDq1adnE4r7W6yUr7p96cYQX4bMUSVbqkGCu6mvVyaogZt7kj95x4p974J39Q7jEJFE4RwKxmLczRunx",
  "key31": "4axyrQ7SEkYafGFmDVRtXV6RwyM5AiM9LT6D1BXmSWeE1e5SdmBmU1FFYQhYxmPzAFhs2dExaYrGhhebppFPQqGr"
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
