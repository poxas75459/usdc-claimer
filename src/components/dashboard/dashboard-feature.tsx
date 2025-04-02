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
    "5kfp9ZMYY6bKxwt3UGCCmQUrVeGeo7kLYjJFiaNrEFgAse4ecTyoorPzPfiUJmV6EgwjC9vNWi5385RnoFAraria"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dc1oegTHQgKoDYWdByrNc17K2jA4gAbehX7ZJ4t8KHMs8F6GxVDvbakCjNQRXf6QgSnpqLnjm66fGmqXLokRPUQ",
  "key1": "4Ki2VEFNGCnk9CwAjH44aWscCY4Z1kkjTtqhSeMnyqpqktutyF7tLsriRsW151uCrnMPV9jrZ6iYc8u9nA4bhQAU",
  "key2": "2Hz8WvhzgTc11QqUehfk4gQP6qJQWJ3SLEpnPhvNwgvPU1dTEVpybdAMyZhXA9TzykH43FfWBUJH4ZkC9eC7BwHr",
  "key3": "38yvCTdJpScotvLjHijS37LsG9KCP9uewSTrUqM8zLkVEbbNfH2YGSXphpaVb7ZmuHhXhTvhnhJe93L7ojdPZYRX",
  "key4": "3EhZY5BKZAhQFbYqFfhBg1ZGKPrgrvtNMpBHrPHgbiUxSxjuntc4wCWDUCdAcs34J8KW2CKwouJHi1NXpWzfUr88",
  "key5": "toqWdqcm1h6XFxArHpnCm85Qswxvoz779bKb6DXCkYbUcm6H1AsHZDqQsQvZHhorysyAM2mgKLrjVMmxGbsxLPM",
  "key6": "48iEHS4uHTv5pDiz4JtJi3jbzMw7iuSjXCgPB1YYE7LEFcib2mDwnH2DxrVsT7krUbJvAYja4VCTVYZDi4RenVXg",
  "key7": "5DdM6QbEEQuusSnauZVdLhkBNhcp8S6XUc3L3g9qbLDb9j6t9YpHKR2utE5wn3L2eoKyyzm6JZ5hsPJmeRTWoqCE",
  "key8": "59YUJb99W5jAGnMYfU8skRCm29sFjut3MLTgjQk95iqnF5joQ7axG5vG7izZDFAytsMkhaJvXyQix2y6fU9pXfmg",
  "key9": "2Y7eBF7SuZnPqDzv9myefXEJsFDcDWm33YKR3fde6muT1ZkMJMGNMAMCuSSX39rY43zsPQKho3eQxnR7abuCoPBw",
  "key10": "4UCEk8aNmZyF6ShRAJ5xzMU8sCufZCXgoFULSCYePNxftehqbtn8H9gaVqjU3ioH5GKsLAZvMfXsFrSuVfpY9PVb",
  "key11": "4rFhriPxwcPzh6yco6eN8vxBRekkaobsGkgMMxtF9xBvYuSmPphCNFkDwHbTKHNuwfvRqXSnV2fDK3Yo1r8woD1T",
  "key12": "5B9R9eqCyEy3VEqYKdvXqQMPAzQUekRuYVqRGfhABJNvMfQkeJ668rvNDAre8vB9S1KHLL81TxDrQUHYVF5pUbf9",
  "key13": "5RCRoYbkvNLTE2XAuVhGXTYKRRh5Tn13QjaiD9zL1Vd79xd3XR2vf9tLqYLZ6hHofY9TmjbXgP5a517Js3QyoHWk",
  "key14": "3CxrEcLgwMpeN2GEHwtMQ4JDNhQmAHxRVBRZhWkZZ3xDE2WeYSuP49eXfjZU1JXGZC9P1rd9q8hsZJMktySVxhBz",
  "key15": "3MSmpgNaE3BnQGRCzo8Lt4ofYvzQbEy1qJAEtmKN7ZzZiZ922YTg4u2WRKmCPXgxf63MTMpar4oYxBeiNWYHRG8V",
  "key16": "ZZZj2FYqWiZENYTw2CqbFuKiXkPBgwrfWdgsDuLKPCZg9rngSohFHbPgvky3ZfPCz1VqVR7t1byCUTC9sA4xe5J",
  "key17": "2CcANcnHrmH8g9vcLs9598kvX5GAangJA7SUoJhzNu8QWrCEfMLzxvSwpv1YA5PD8kt7SeoSt3PZRGezA61kVdYu",
  "key18": "66Pt3ytjNmsg6cvs3aWB73s4FXHmkqdVokjZQMQZ5waNoBm4dnhEDtYy2zVuidWhp2xPpjzRjMSkfrF3hd8xwG3w",
  "key19": "4ZNVAvPWJmCuMFpwjpfGoTxJTRD8j9oD8xwrPMPRydqcnKDD7vLCLc3eR8sgNniB89cwzEiSiiSbiW1KTntTaURZ",
  "key20": "YFdeixFAsqPTtSxBM7rCVE3nz5vXvXeTeYkNbRh8BJfheQtUMyrKucr9b7F4YQNdKz9jhy9Zr7MZdEHMCLC4ZCs",
  "key21": "5APSD6h5z1jQti1rSieC9keNK1DSKQrw6KavEACveTTG6c4FRsDL2TyNsVkaLVycmkbug4cvNuPbdyDUZ5ny6M9P",
  "key22": "2XB6bnKzD4xnDWVZv5rziL9ofoTLk6s4Lo1RfaGGF6hjtTTkKw6BxupkmF7oia8REGCY26KfjLMs3uVqkVABBg5D",
  "key23": "2JU88Ga74pWeNvWUWC7J3LNSQqiFSS6ykwYfkHKuQ8srxYYBBwKGeyqUucRoc7S6s8zwU6GMbUKH3F1smDCNEvid",
  "key24": "4KycyvAZ3FyA5vubL7UoyMNNRQCdNmkd5AN5KyTHGhbMpbm1GcYwqNG9PF5noqm8kZGKXV5k6vBzT2gg6Jw2bS5d",
  "key25": "55HPTPx3d2tiRvK86i2uLuHnrYvDGbddHt87exbWrcze8jucf6AF64c9eW4UgCTp3eJf34FnbHHeksDG7pM9VzhT"
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
