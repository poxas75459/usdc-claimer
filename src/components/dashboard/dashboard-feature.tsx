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
    "34wmXTJHfLT669wPBrrMpz4Yz5Paf221hMN219p7f38AnEqpj9f9eFaChRKAnMTDmKZjcGB3VotPRaGLYEwDukN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDGCsggDhTa5DKCKhyUv4YSsUUfGvyMhBmprgTQrW47K2SZcAbUKpgSamHUJLdUTzL5UBtcaWAUSQfenUw6GCDg",
  "key1": "3dnAyYLiCZpjo8g2oucpeEYio4tKbP89sau7H1Y1Z6eeRPG3LTPsuDXbmqEJpcdiBD7LSWBxRogUW5S2qBcydrvs",
  "key2": "9Q4ShcAEXtjP6b8Fr7ZhDw9RCuNJmQV4KAuk5J5opfdjXLb62CCMm7DC5BfgENSSGMXQQgHFoEjohsRtvZKNXS6",
  "key3": "3v2jdap5UwX8YpKaqZ2s6d9uHfNs4H9g6GA6yVoHb2aNnNBADuohLvqsJDCh8bf59BTYSrUD1zdd587BRDXqRRZb",
  "key4": "5mxetv75YSHyGu56nb3akjuUwkxNZxJnedC2nTgj5cCwVXgzcVRMTkKAQNtnsY8zsLE3ySNqhcvGYPTyqx7LPUku",
  "key5": "MYBaR69a4CP5A8htNaDEGwGaVrAVEiXiPfzLVFwqP4Jop8tjDU53Nd849KhbNSBq1azZXYeEtPdrv6Mtpm1VFmx",
  "key6": "2auXZKwPqwGEbyKEmAQAHnJUhzEKfDyiFfF6iB25JaqiM4xPzWwWdUCcag11YJV4EGaxAZnF15ZbRr9X1hh68NGp",
  "key7": "4yw4hKfZgTNBLhAwHUnyUGCyXoTgFpAzs39ge2izfRFFMNYRAX5kQLx2ErNK69nnShaL5oiEiqP3nUYHpZaC7hjU",
  "key8": "5fMUGAC2bJyNu6k45qS4RfqWHybXsCsKVVr1ErppdkibBZuUcQWYz6hjJuZ3SUXhf3oVgaQu7viyBD7nwiR3VLJR",
  "key9": "31SvJBqKpEvoopDW2GNrGdqaQNrqBM2nyX7XHdm242sQcV1K1ZiNnPGnAyBToi8jCWjA21mEWe1G251u1Bg9WpTv",
  "key10": "2mKHH2erQ4RuKvSfk2vcG84fxxY4DrqvBaNpcmTVJCgmSQeLALodd4qbCeZUaD33vZYxv9mwy4XQ48FVqVg19JuP",
  "key11": "4eU8Xd8WikhzB5DUwM1hunkFEWgkabfRt2iQUNh8p2LfwUkLBu2irnp2SdnKE1DXPX6gvwAdis312M66spcMHozb",
  "key12": "3VE1k5Xk21tWVXqkm47HUpiwbdi2ip5gcpd3fba5fNkKZqX37y6XVLGEAmFHkLfKKKyd9625BFFFW3Tt911AWmxw",
  "key13": "2FATKLTfbrU7Bje6yWA4j71hVgnjCe1DuVdRsLwuyKvknMKujkApcTXSsAKxfnn4jRZRJNZmaRbUGqFkjKxicRKh",
  "key14": "3VhT35KyqEJqsFDtBFMRUSsygwKGWkgMyfuGvcgAWgD6iM3pbKk9hX67T1oicN5ExuyvksBKmMGL5uN3WNViQusy",
  "key15": "24kkEfEntpreBVWJvSJpcsKqCDAAGe2T3ywK8cWfKx9JmdtJ6CRthLXTmyLxtjM8Rq6vGeHRwqLmSkSShvfbngSE",
  "key16": "59RRoLy6dSt9uKzHHwY8KQHxptmvdsxKQUXno3P2VjyFMRV76tzGRipGSgAPtGxnXSaKTExzwPP6fyvaYydK7xJU",
  "key17": "2HyBzavwV9Z6md5SRab7XMYDcp436YDdMQ3dzDAJ9qvZH1fW7GRD2RbC6pvozguDLqV7oYPhCiAUbH3ums3Mjhvb",
  "key18": "2Q6otDhg62X2TZSiew9y9mhmT3Nuxbu3sndPyFEiFBh2bL8k9bL2sMgfgG96Vgwf53zPk5bXu7AQj7B8ShFNRWzH",
  "key19": "4ibVtyGwpkXCUrapQ2snvMLdGdzEbh4imBtRiZop3wc7hLDDi6ceEhgzA6hFcXAFnZLGj7MGYPbDar8DPWNwiuPq",
  "key20": "4zsupFYrp8vL25rFynwmkvLk1HXhbHKaRpwcYyRp1R5nxyCgCUKkzmvf4PnGMv3HTeJYuTw3MeSRqBfAt9WxwgD6",
  "key21": "4HtKEBPaa4NWM9fq2BXbjh6wZuoyt6LWVFXEUfy6NPWVxjvx83LbphHXmLq8siiEhFbaQ5FiGNERJ12wFfkWdoEj",
  "key22": "2vP6on2WX5Z3KcHiythSTcovo88BZrezZNedKs5HaC89QrXKqZer69JHGY1HuefBKQvxVwR5rRc5J8zCi3QL5s1r",
  "key23": "32Vq4wfNczmzbzBYxLGN2h8FtywHHu1rbbwxiLSjvn8QUALdJHN7B2cwRSvq58LcSk2V9hYFJKHxfkrjyEhTDXiR",
  "key24": "4e24aXUyvstNeqCVBjL7w4tDyDzsX9QVKGRBKcHCYavm1gMVmd19itGQjhsUGfTmGz2fotE2mRGbFVhtcA992WDF"
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
