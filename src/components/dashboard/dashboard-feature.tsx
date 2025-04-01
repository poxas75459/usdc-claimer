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
    "hSmHqLWFZFFmtLVHHpDKYQ4RYxQiExM3hotVALS1nC4AB4veAaMm6NJGVd7RwNHXyEv5kKCoBz7hae6KEJ3FKK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmrZYpJCh8VrJCjWTsgePgTYc8Hr8pbM4CENbf5oB5d3abhG92AP5GqbwuN4PbHBALbwncpmyQZvsRd8TDs2fH1",
  "key1": "27FBqMybNWM44cptzmqiZHxrjRsjmiuLW5yz9PLwJpSDHB2GxQ4iVRZCWU22VZ7enrTLzaRJKL5GJZW2EDX8uyUa",
  "key2": "5uaEWknBEa6FxrmcfDHKEzk1gq8omXspJnTJiqWgbCJMP1qLhm7gK5uTBUJFgsKCE3hodt2QAagWmmQhuskkckuL",
  "key3": "8cEaBwRxgHDg4S9VJd6anx2MZsyfEaG37ABdobVL6ST38rhjRPP4i9F3aKMCWkHeTGA1yj5ojpXr8t7wbJ3BcRW",
  "key4": "2KAFoHM7cxXqNBd3vzptKeYvGNGz23qkv1ymCKMiUymdA56TNqmEmZtxwupWsZmEL7Lv1Mum4dFzKnBmNJtZvEbe",
  "key5": "5JyDMb4QJyu5UMHdzN55Tv6y1MXB1tzjXxYoNX5xMfY49yt2afXxzGVA8GgwQb3x9Up7maRMmmGFyhfDaBsdNXfw",
  "key6": "5ECz6N8PEJArXAQGBTyYWpgqqn9XGEw5pYZXyGN7viPJuxGtjLqJdtF8JP5B9YLCsZ9xeDr6EeJdgh9Vg1WRj3gn",
  "key7": "4ViYg8uJaZEBSwkf9VR9V21DMgxkRuwHYCnnaiL7so9Z84kY63j2QCvfRDFUf5vSywh181Jng4kWqF8YKWMwir2M",
  "key8": "35H8ssgw1sZ7tkHKmHsHKyCYi79XjqZTmSbdtx4g4Bde13wjxBWJF3gNPjMcihUzcjfsNXNe88f7PRW2Q4iQ5JbV",
  "key9": "4L7jGvzqUib4SuYZVzasCLPGXMhRtRE9xsDww5CF2ReXzH5NvLdzfVDntn4Py9FKNVzrMzzRgmjMwD7C6z1n9Uur",
  "key10": "5zP5Jqd2ZK7QJj8ptcvs7f3J3A759pj2TzhzwjkwvTo4dwbUxHN4mHP7ycYjknrwLjT38uLFHxiMY7oSZ6JLtuRC",
  "key11": "3rDYQPSExqETpomRcjeaWnWH2YyNRPsMaHktXnss7FRZDJLmJ44mLzgejiUnrmpM7TgoovPB3dyXS2QgEiaWFw28",
  "key12": "dVupckSV4BR4ES7mAP6MByusMmMdVFR5L8nitmwVPVZMs7fk1deSa2EkL7H6F5EJe227tvniwfEmHehzdz8E9vt",
  "key13": "2DDCUmWaUAWjta2JkmLnAYR88TDeWcQEYgmhXfiHjqQxChdtKoWcddndmWykNwxceR4ufmWd73yiysEG7iQDt9zr",
  "key14": "3Re5qymvu92X97mnjz9qtVKVpVpzGRKebWfLhdJUsyGa1MZwwJLg2itezqEnG8bRetAaZY8daxgtGcMvX8MaN3ik",
  "key15": "5gBjyQNpNojrSSAVnGYTVQYXKv7pD4dKbLSaHXETUF83t27FDi6WFjG1YJ7NPt7hppAcHGZEk3AGT29nCdfqdgj3",
  "key16": "3pLViD3mnVzgfWsAf8Ne8EmfSanDq7pZGKVarV55Ff9Cx5GbNXZdHjnXJqfjwfEsHPBT2Fqdk2NJQwW2hnELXs9U",
  "key17": "5QrWKLoxjKgKxkJFu4rxp9ZPtYNZf4VDB9HTuAtegKwPc7rqnrjocU1LpFP9MAuW5ANS92fdzm5efKMTek2iyA9N",
  "key18": "3ukEcPUS9RERWfDtPXpWk9CWCZfKUvLspb6Nb4DdmtFChsnJC4V9X8FrXtbx6YnrjyeMo5uCVbq7AXQ9roUfFe7Z",
  "key19": "5Gakt6G96MFLNM5TgwgAaubcKsVypQMMt6Wyw14LK6wRnvhYdEmMhbNCAoUmodEk3dTi5ieTCfEZbuvkFwtA3B4m",
  "key20": "2jhJd1rEAYCBsBCWtQPnWy7CaiNpJoBaBjsqd3TkthWXmL2z5gyuLAF43UoQQZYxkHPGUA83KBtpCdCsHv4MzwFD",
  "key21": "29PNnN44rH2jADLocxVx4gqvgd2iLoPZ5XCNdHzGxiuK3A2Jas7fyyq9DgE9ZeSryZpSy1jJ5eBi1wkkurjG48br",
  "key22": "2z9irxE1Vqvk5kmnnKNyYyJRa7ZFbT6LgFdst6exyhvHooEcsyJ71dHKGqF3rKxxo1pfiSDVQrN8Z4YDjFa3FQZA",
  "key23": "3cBv2tRWSp8RwP1tpckUe2QXnTvytuUr1atiffAWDtHyP8TANz4SC6ooaXdQgZmRLPV7bCjTDqHG6UfNZ2obZdCS",
  "key24": "5SrNEeyCLTLGGXQkbaWUDvU4QSVKRqfgUQ9ZvyTzjXRLLSeEQs7g75VrNwu1MFf8uUBi48dxV7u1Ddy1e9giQGGZ",
  "key25": "5GBbGCWLacVpac9kDoEmULbV1JAwZmikTs5eEhktvcnLKoYd1JzsEogFAMqwhLjXYEpmTpkXgLpQRm1gJbfwKB8d",
  "key26": "4ymMtA2cjM7xRG4cHTqTuN9Gq5AHcnXEsYZfXHmzEzm5E6Zcbz5qyZxA3mSYTLx927g28ceZ8aM7WiAzDQqUEBxx"
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
