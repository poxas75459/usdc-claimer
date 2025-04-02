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
    "2XnHDP6nqnhtkWZWPyXhSAjommfsnTEyRBt3uz2wdRSek3WRuHnP2wAoUcFciQubqTyXoada8DqEF8tjMHUqvh5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWeiuJ1VJFnbgHQcRGxWgHbtWndr7v67BRkt9CMYUh8LW5iDRaaJ7WsFw1CwbmvAgMosBEv556RUpM8kZW7SdkT",
  "key1": "4rhE46nZMn3QNkyoWuLqNuxy44mtXdmWtEJVj9VaXtXEVc17JerxCt6SouwSDHGLBqjbf5MinZFEDFqcFYfyqiD8",
  "key2": "53PYtKuqHMgy7D81Pk2zhFDWu24XvfCivUQLJcTQuRx3TDQF3mb2RNGR3VyMi2NwXzcXSpqsankVnYe9g6DF2jnP",
  "key3": "1xp19N93GiJCctJHsieytHwMwco4ZFBXv6y8XVhYeZmZDJ9gipFgJbmbsab3rNzog1qBieJED1koUJN225Ts2jP",
  "key4": "3eeYijM288baV8CQMApS126ufC1hoHjGyMGaDZtiuXczoTyp1Stjk6jm5vJBNZfn4xg5bEufNX965ayJYrdzv5Fn",
  "key5": "AXnatdyCecK6gqD4wMfxAtcvnvKWJ3cNzpELB7aZ66RG5gdVLyBabERoHJZwxaCUYtDz9VPoBWUbDHbD5Zf7Mm7",
  "key6": "23NNManjMdztP4nEU1zAqkZnc1gMLBeoBcbxw33RH4RbWPbsLeAdNfQvbKLp12C4pXUZL4bpuQn11Cp9xyn69RPm",
  "key7": "HhuRjLZpfwyySPfYpR7ipTnxZgfQ9mytWLXunDg9wHqA5iX5w2kgESPsZvofSHgACuqphjxVrmrQUJd7duiPQdp",
  "key8": "4dKk21fgGboyoLmhNTTSeZJZckhiP9Z3WNi92ZFD55h4LAtqxGJmKhp5AUyaZatGRPyizrdEKENfz8PLfoKPNmkG",
  "key9": "4REhFsutKEheHMvpxxfQKd885CkbZ71HwSMFC2Ds6jzvHWfiJxdDJta8qCB7cfqinPidePYWghGiq2Wc8Uq5pqAP",
  "key10": "5A8Sn5Q2pmpNh5FY5ov91B5NyjhaXC3mr23pybUPePnBdbCbk9iuPf1QnwdJFLnq1abwgenQgACZtNm5bWFHavko",
  "key11": "RAbceMBZwsoMwQB8iv9enoTiRfsDcndtDCfvUH3r3ADCth4EJywtYo88bMemyDu3eu61Fouw1iT7kc8eCShrRRq",
  "key12": "66avPLJ49rERVNzRBULxtxLpkutuM1w4R2p5eZYzr5AyHSPTPrzctHqUouoGNbjQo9FBEV9CT7PEj5CGtkiYYcRE",
  "key13": "5otGqD7PTWx8zj5vX1Xxo3TeeWxfFv6TXx81qLYxws7oiX3AZVUaV1eB6hMVd5haRgGjW2uNuFSqKm69niB3QgPS",
  "key14": "3uDLhfUEzAZcvFeFD7VfJaEEES78qrcS2Dzxbb7DNSVrVsBjAF8RFU3FNJcNyKgpBcTZNdfor9jTGHoeZrCJsNiG",
  "key15": "67S5WUsX1HX5mR33wdLKRqjxAagTDTv7D5C8HWLGGYt2BtUNgzdEtVhSbRsh8dTV4HrCVbB5bgejXYmw9UDYp1T7",
  "key16": "3uT43bCEudwMUVpLB7VYGdEuFScHySAG9cAY6j9xKj9FmJVYAJ4ZKvdu2JtwrJC9Xo9Md7SyuMGnv2wVercqLvVR",
  "key17": "Qzco6Z2rhZurBW22kqDatAsvPaiR81UU4ZqfhyubKuvrkhc5sNrMGHq4ndoN4qc8mVoBceSJxZPuWb1TqTKyCMh",
  "key18": "3vuNMM2xMKqTXKrQ8Q97RJUoLPpDSPQ6ZjeYti1V3cNcrhHoJwvqBHhDSxcvV4aAzMmYpcfWb2tkXP7djFYA87VM",
  "key19": "22kac7VEVhTQUEjPvmZYiqdk6aBce5pTU66Fk35w964wkfhfCqSLzDrZc1bnmkTd3oT2Xge6guuUatVae5qap1s7",
  "key20": "2ULKXJymFwoqU1UgmuF5mayxxiREyCFtrKZFcbX7DnVmY8wCXnJhm4CdDhwNGeuaSrythKxwVJU3G3d8FoMHA8fe",
  "key21": "3GUvoQNVnbDLg279Qo1hpVshnGk53Dy4EgfSyBc3zt5RfHNhyChmjUQAQnAenHhnJjLD6VP3E5CHZ4j2Ffack2Nr",
  "key22": "nMCGTrWCZqGyqC8r4GGmWqMrELyFvC1Xf1LnjkrzzJzb5ZATPpNqhcTn4fZzEeTm6qfxqQDqeMUqresA6U7ujt7",
  "key23": "RfmBNjWbZ36yjWS693AfegDGUixKspAWRDCNVF8Q3aY72Qo47ASmUcryVWDwcrKirrcMNbNkgpdMYpzpXhxtakA",
  "key24": "2BYUZFkGoMYK2MoPXx6XCx5UJ4rTxh61ShZhadrpVXffSY7cxiF1YgfAWeNqVic7vSSFAvtv3oZUhbWofgvmrvNP",
  "key25": "3HXcM6ddLAXSp1c1FcSMc5BE3n4woArPp1Rgdgw8upaKcNkVjBZBnzZLZpEZtdJeSTecgSwimiCV1VJk51MJHfEz",
  "key26": "26qpvhTTja2YzCBBgfvcoNbrnCXjyHBKgHNF2N2tEKXsXyTWcqKatp8rTqw22gp89fCGZfFg4ErgVrJGHKukA1xQ",
  "key27": "5GgcaaEro9eMoNF2Rxq5TUM7MTnfMLt2tdM1wxWtN2Pq3zh59uwTvuoTN3JF4cjeFAWTgj8WuDaQmwEkraAcyQ23",
  "key28": "572dWUnXWXN9D5pjNz5DkGd1WEPabV2JDXYh8C5nv7bJf9sLndUX3QBLiea7T8ume4V2XrMoFxWVPy1SzXx2yAkf"
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
