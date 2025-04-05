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
    "44NBRNgx2nP4KHsDcTd8GWgiWKxLDY9tBGnijYPAxPtjan7zTcNGwtMpqRUavcaA5UD768kAPyzqqMvkviZ3Jwf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhqC3SU3iLVnvLU1RmxeoQASQu2QtMo3aSpPJXYmtNZcd8FtXPxy5EcHWkXgbXGUnCYBbaZt1Ef2KU93JSWSMXe",
  "key1": "4CEttK2t9chdMRf61QYUwqiPUDqu19HUrNN5kyJ3vgP7C2fEaknybNUpTXLxGf685MseDfE5MZSStjiXvy4Mk9Fe",
  "key2": "5H5DcgtvNQiBtn6zAbtdBRsYVW8i5YjrQjKCAJbMMvM8QY91eXzHUgWYMXGk4zUxSQF7EkKiApZxBrgQJoHC6ygx",
  "key3": "5YgvZEVSiTqqFepVMeJnAcLsmYvsUsuBE42MN15wNYajp2CukV4Gd22nLwQhtiTfJCTyXFDjxdtkRw28tLj4ZQU7",
  "key4": "5V65ktzraQvPsz6thN9i2NyP2Q1XiphQDFSPT99HnyTCkm9dZJkUtEv11LUspkhYsPThg1wj9sxAfvwXurvReW1w",
  "key5": "38Kx9YhvJyYBCtbPQKYfMjgJiy8YkE7fP42mXnhczCAMBSiBbJfBvdS1QzRH9yqsauGKssUPmtLDRy8RecdsSKrF",
  "key6": "52PB4f6toU9Gpw4T4BNUcyj1MTbtZhtGVJyXKUrt4eTXT2qExjUJCdYAdiidLUwBzwwUq5kxYERANKnUWcpNWNni",
  "key7": "2r5bERSgpfjAKA1eYeuitjtdCAQAWmvAdNyqn1ktb6Vzg33mjyF5vvRB1RizHNA6q8pxVHVhr4q1XkEnbKxdgcre",
  "key8": "5SzNHt9W7ry3PZBdc8G85sWowJqLwi3XFMNJszn69pbZgvRcxvu95D6RCr3RBWZutj2mrsmVdfQjVqpyv6aY91Cx",
  "key9": "3xn888ehipY55saBpW7Ah5pvZXAobJ17VnDyk6ZuQqZmYZThUvCzafXJ3cscKPfowP12t1aPSNz29EXzA5XmFfAg",
  "key10": "5yD7ftQgMsu2qvmgTtJNCqusAJJhBVatYykeLNiuETVmzJxHbiQ6C3rhtcjb4Bd84Woj29LpoVbkSiYBnpfVQnmB",
  "key11": "31TBma33VU4M1HWKW2vr17XUz3uTC6LUpKs1N4YMKdR2WsN6MkrdEbLeCAn6DqhBiJZs9mDYoqWra2xFGGxXTwGP",
  "key12": "4aFgvqyxCX9ef54pvV6J4Dr7Yb8cMcqpxLEJiqadMSxaHxSFwMbgV6a4mhDrK2eeT29CWor7ZTCYeSBS4Kt8bcD5",
  "key13": "Rid2eGSpAmLFYCnG32zxXJLxjHeTae7SarxjoVe9zBKuALyTKxG1nWat9mV7EMxWEHmFwHMip9cKnL3emXRXzWa",
  "key14": "2tAEkcufcVkxVy7JoWY1H2UJfDiTyjpMM9CZ5Pn71L3vmRXWTETnSpUJPiXxi1ZDeZtE2mfZjzHZAX2XhJ2LzKe2",
  "key15": "4j6RU2xbHtvNWsSBvYc7cEN68bTEBxjGk54xQBdk7uc5ZNPHJHjj5ET2zuH4dq5uCpAxf7TMndZVATTpDyBoU2dJ",
  "key16": "4qq4XiMz8N3vimdY9AKoGxGD66iHvLkvocCYk2jyMdtbPLkrcv5adAiGhb6GL3cRaiZtijRV3jkAnhC3ENZheW99",
  "key17": "661ucf7iSEm1G7Z9V4cxe1qtL2BaCBsJUwHMgpsPwiDrBArx46YkHb4ekGv5Kunye58WBHBHvwMGDiE2jPp5hSiQ",
  "key18": "5WjqHGnCJY743gToTPdQKBgx3ELiQ4imQ6Xso3drrm9Hrw92j8boQNoKq5hZ5cVTkgbmLg2eGhqgHJutPxiXJDHq",
  "key19": "4p2sv8LYSyeFURfcVfxnXeKUVoJXrEBA3kYEyBZ8enFuQpHenUMSaLgL3VjnzWt1YXxCxZmcdyPzfjU111skYFuu",
  "key20": "3A8dyNdiSEZm6MfTSyBbBr9FAZWAjBqn5zHMe9mGotQ5GDECTtAzqTM4hvvWm2H8jSQ5zyvyzngm4pxyVVA4LrDB",
  "key21": "2EbEETdTEnwLTurNqHvgwkCxW9T2zeYAs4YT25pkb4LDeSZwQ5ztoMgDJJUZ1xMn1BoAow7YUnQ62pvN3CeHNsFN",
  "key22": "33QLMgWMphexLDuxu1Sq13QaVV87QSMKVXL1H3ewoyAnamfjATCJASreHUaqCi5o2YYAqjcCz1ZbmrSwWK1F8MHv",
  "key23": "5zkmZ7xDNZRN9Uuoo63mLVystpkuaGEYHmWLLpz1T9t4wqqAFUj6vNHicX8wTgeaqmUx6ZLSuQPNvbnFsNsDRsSz",
  "key24": "5T3uXdZckxNKCCWwMeG5Sy5JMg13goV7WvbHCkTyEmXyt2j4hKpTqjo6UwijAPwsWwgLT2qJQxzqT3tufAGMrnCw",
  "key25": "488vdAQMW1TBHLHYixe36b5cZnEQDCAcsDJi9cshMtpVVgjARiNkMdxEdMMbsvQEYsvmxezeZ3t61pWaxFwwCusn",
  "key26": "3pUPpGHu4k3ZrTSJSPA8RABnNFV4wcKwEqBcvjatuKVPDopUo7P7wARKHw1Bj234XiKY8QmbARrzGsv4U4Ef7sfK"
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
