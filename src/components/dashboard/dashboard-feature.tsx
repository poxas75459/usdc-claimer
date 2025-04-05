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
    "5Tgu7JGmwGJbQJea1Z5KXqL3SfdouvtUvqxWb8byVuo8AUjCYyyCD7kufxtx72hZ6idxbxy2F4ZyX17jwj7aDZ3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWV6YpoNdur6t92kDjUWH75rdxYU7YZr42XLBSya9M1x7mLbEaoqNp3Vd8HkTS1jiYWvwM1yhXCEa5pbUzrFykr",
  "key1": "5TzcAF9CQUxFbgoL55E98u4vujMFHdK8gMHbnCtX9vZrGb3NuKZ1vkHdYsJE3hjZ4BCQVcFbuckkAefeDduhDQJf",
  "key2": "2aqkteBzY7bZpTQNBLyuz2PD4b4mY975r5im3aizfamdFDNPVFrWhuGzeNrdgdPp34aBzSVkvokjuJ5W4FtLrDjT",
  "key3": "5nhRqdUJ23w8veod77xa51GqE3zpViLixdwbE2hyYVMXHgbY1o6PA3LfnBCxmzGEdvJq562GN54kW1FTmjN8dNf3",
  "key4": "4r6mykdk8T5tzDbXkKSmoRzTTikg2xDGnzTxDcD2n3ZPKBasbMcJMAjJZ4RJtTkQ3BzuvSv5V6SL7jzn69FpYVwg",
  "key5": "3oC2LgRhgQuYsKDuVDPRJuyMXeu69hUG9g9ou57T9rzNFkg5c3Mn8QcQ68WchbXSuRddXFSZmKHz5XjhE199qVTb",
  "key6": "4KJP9yRMNjKN7c3iDFTjr4FNpbFKYtvMjotWaQ4X2yC5csjv5jkBrJ6WbiJZeNx14AgkEgjph5h4rFpMQG6A96TB",
  "key7": "2f1q1qjSusFYPC7KAQ8LfkP4z9ciFptexrWRZb1fXLZXrdZdjMBQwSJzyeUEouQykWQqSdTR6tnkasUnP8mTxNq5",
  "key8": "45bDAKNdj4B42BNgdb5ab7fj8NFdPkLAF9U1Jnpy4bEDWmPpfdQmwNJtVrmeyDkfs53BnhQewhLoLjmouwp28pNb",
  "key9": "2JJXGNG3tbD9oNsERA5XAMwJaw3Z18DDCXgqCPnRsyjsfENvbh89cVYyCGkXEEko5nixEnuF45sN7wsGXXcYti2K",
  "key10": "4Smx3aa68f8qwxyDKSVGfD2mPJKyrzRoUyQqU1xPb2d8trQ7JXpfr7Ycud4dGKQt9drciJDoQ4EYETyFutzvTA1u",
  "key11": "5NLT6qtrvzuQKVbANwBtu2ug3ooxwFWUBZxsQnLDQJPZrYcqdSvu2FunMSBrKrLxQ4biNSSb4hc4BcwtgzggYgVw",
  "key12": "5oFCDeWRBGp2ZDSbwADUrwgk5yWQZArq2iXKRr5NNJryH6xBp8SBAhwX2MhLKJJfp7QK5ZYsuyisjp2174xgc6D3",
  "key13": "2Cp9gzrUReHc35bbJA4t1iGAmoMrybByMTkqgcRXnceGEdY1LKFc3iL4ruV7tSrJg9hUWNHZvrpCmC9NkQwssw1A",
  "key14": "4Ehe3CoGnYMaZWKBKnGkbFkJVX1Af51GW7mNKvoGQmiGFw1duBB5pZ3TgJUvS8f7x53C3f77eYJS3k9pDbXMabqK",
  "key15": "32VZSrawWcRTHbiMc3VWvrAAJYuN3AgTjTAAkidWMKGEWFxaRG4DDhcFAo8eVRXBwNhsRLgXeMStMRjkkFcQYiQz",
  "key16": "nry2D28NVzRkwQJQzZEFJPZzDfpkdpsczNrkcXkLW6FNoHpjqHtws2dAjJ3KYBeKEZdkYGyYonniM1nGTB12SSs",
  "key17": "3qEUdSkJNVM2xvNhV8mUkUp8JijELqaR1Jq4WwEtQBKYZFyBfgpmkiQmyU7DjEU597GDXGPykdDzBdRxoBFfJ1G5",
  "key18": "4dcki7khJrkFd1ztzuVmXnmnxsKpBz8oMHPrh7dKLWkXAtQ5nkTdFmHaXWTpFXSc2AuyULn6RFztQcPVKPyjDunZ",
  "key19": "2zrfAggGwLeCqhJ1zSSUQqdgM9kXKXzHhDwE96o7ncjxu5k72WprUtuGMpMr8RhtzaavwXNiFSdag5vYCrK24WzV",
  "key20": "jXDQU8nEyzVnWiHV57C5YHj3xpyzLj8dr4Zu7E4y2X8Sf3hRJd6H8Fb1jak3GGL3WaP9Nt93RQFeZrt6QcSYvKF",
  "key21": "4298F4QfgACmLBFKmJSMgKTo9rqzAxhG3Nj3bRGKAaTsDDHKPbH7u8RqKZnm3z6C61ZBJTahfVEHcceYdNFH5MDU",
  "key22": "3JifDLtiTz2aGm8dwg9HdnRqus29VZg71XKjVFnAdFj59YQ44tZPDvuQcaEFugCf4NyfN5sw6qk7gKz9mwm4vNwS",
  "key23": "kBBdTyuVaFuYbar62vzikeceVTecKZcCkFgFqGLPThgkC7YH67TsaVMtFdGz9f2BYkeLzDFMikzxAzWPEkuN4tV",
  "key24": "5Em6YxwHWcJKeeFfZaB8ukAcfkcAaMTvZnRV6npxFrTB8QgjFdBva4sXszL8R8W9zdvSR8NVYGjhpcqditHkgd2u",
  "key25": "5noJabH7X7V8icYan61HBUSNpKXrxrQ5XvygpTrZZ1sULNaXTYA9BvVWwih1HBLoDpAQDLzWJdc1vNK7mhHjQSAg",
  "key26": "3wWYE5LxNrBHArU1RgG1Ud7bBi3vXyVjBM97dNwoHn2THJmrovX9JqESvS1sLxghv3sCyQGKPbjCaPxjJBGVXJrH",
  "key27": "4JZmuJv7tgPSES6GJPBmM6bQGWfZNk3gXDqd5W84MYGEChHscjwjgf3gkqZuVr6kqbDBUCQLRSLeCBdRG4QCqden"
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
