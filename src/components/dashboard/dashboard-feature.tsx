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
    "5RUGgwphhZSL6cKTTQnu7owrdoCah39heG1EjcbhBrrH6dq4FvAycGP8vfm8P5i4LLWf9iFFc2g4g9gRTnGn5EhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wb4cMHsDwaKoLUajXWuqDdnQrVEmqJSsc4PhB7HAniYeJJLmmmXRCuAhTT8VpqCNhcfbXMmTV687YtWqafy7CMf",
  "key1": "sN1YFayEVCWXy5aprujniaRaBfYGS58rW6XByevMSeT6w6Q8VvnV5JDaQFjEcRz4eqa97DfoPSZMQdDE3oU1ZaR",
  "key2": "2iT5nqubvHK7D6EjHtVmuMGFkavRadwU3QzMYdxyFiGcCsbZjFcgML3soih6XtjfE9dKvxSbPw6FQ11UuyL7Bxtu",
  "key3": "2psPhVTsohaMjREZP4RydqRWkfWddUq1aZFsHWQQTXpyecCuMAbNawDVWEFsjtqovDNAF4WFUhFfUXHK4FeVo854",
  "key4": "38VsQNBCBUs6wiyCWH3nfVU18WH9NSJGKJht3nFZzz9sNMSPzR25ENerQ7whDZX4ncApg7VREYh8jRwmpx9K7iZr",
  "key5": "5H4S7iLDfZaUcAw4se53yw6B2WJ7ePa9gnMycb9Y5HNN2HbHyJc8U6XyV7XSSFQgdDXWyDx1jwTiBJ3tm3KB7N2s",
  "key6": "5TQrfWsx7cvDZFE8u1StERjisb8gqyY225wauSKco1mZKMZ71T2nasorv7Wqp7bBAjDHqXAieSy8mU8HmmNDqFKT",
  "key7": "4NwFUWA1eezECfHBZtQFdKpnTgedGa4FaGe6xNh2yyfDmAmepa9v98ifL5VReGe7A7orvWyXipDyD8vSB5TsQG4C",
  "key8": "2aMeKmFd7ZgWVjnzx1MVa8CgFmR8E7p9uJGKnAdXqMnUGzFcAH91n2gLZSU45kN4kHfMJ28sPLb3FGxNfZD9dV3m",
  "key9": "4jYGoe5dMnkkkc5FKNfrZLhB33KkudrZvJBSeekj1EGoNbgmSwKqoZoaovjmucbta2vaYukxxd5DNmzLonKnczGc",
  "key10": "36Kh1XJxcT64LDZp9EkKzrws2H7jU7Ppqy57x97Ao3KwgQriRB5VEGWWPN9zj97GXGFSszGXsQuVUQKChv9PGEQr",
  "key11": "2wjqpE8RjroGyMCxrjKj1t2KS8b75ZV1sP9F77FPPuGuHPtBQL4fJz1TaFAcYvQfmY65551A4WHE5pU1Pbu2if8C",
  "key12": "2kXCedZtWS3iWtxNCBnMyt4EYV4GMNZ8dXk5PkBAcvhCn1SAi24QBb7JPS13CPGePW8hC5jHkjV7HFqikhiQEsDj",
  "key13": "3cgQFVvnA8Zd3cjZMzx5tbnZgEWT5UxFJDjT1udWqY6SViwFi1dEcy3JXMjTQZmhLUL2pvFweG4LPuT3Lu1xhB51",
  "key14": "51DnzfxkYt4cH8eE8HJPcN7Bjr5UAUieSy4mpqUvhuoN6XLvfyo4mX7HEe1ASHHXA6qhJEEGPQdjC1NbKqze7cFQ",
  "key15": "ofwLNDp184Ec15Z1J2pCcV55QqoqudnMaW85ESZ47HrbZKSdZRywqjH2SW2SyQYCTXCTzPUQNbHeCNtP5LW4xuX",
  "key16": "2PAdA6x92ackHKU71kFiKJTCbeLD4riyU33Z8RMk5bJg8Bis3JSvMWfH1G5x5u3LhzrkJ7rhaALMjtRQsD7NfEBA",
  "key17": "5yccRYeZB6a3DUhqjjzE2dfvwVfSawqpiE7xigVqJVHywV7vZarx6DosVY8iChmN9NyEmbPuyy2iGqPVoDdXz1NN",
  "key18": "3Wep57rvL5TGnLn9Ajm8nTVxz2P8NqVGKxpNVrUyEVfZACCiCkZRHPyCFU8gTPZrXeAFLsPkRNuuUNJ64EyBFJ9R",
  "key19": "2kyjDNkkx9mT2vjsHzFiiqT9QKuF5SVvS6v14QTPrVJpcAV1QXKP2U77mwysLFsKd52N4eNHgkTjGzqUurofzLP4",
  "key20": "4KzWpc9AhMusAQiJ13cV3ieKCW3dDdDNHttonw26KuawskVuX7pyq7Tge47rRhtLMQyrnu1jCPjWqeK7XbPoMQbv",
  "key21": "p677uZJzke1qcggyyod26xaBAckpA5vvzDfN1A6AMn3aFfw3N9XjRs1AYSv1fNuYW6zx693FZbqei1tQMwuuEvK",
  "key22": "2PoKheG6pofDvwBjPWFFTkiqM2G1wNHiRR7q1HmQBWz9XHFVWpNH7CU4nxwd9qTr2d593M9wZnjPnw59ugSsYerU",
  "key23": "2RHKeS2NEKUhvDnXbDjYjgE2rXBax4CQfeRiNwS234EqNmM7qPeyB3tEWmyECrZPKnAyFRNAsMjrnfSNSfdoT6hd",
  "key24": "22iEzFfjDdnGHpveZymLoTMt9xqVxk7fVAkMoTxYpp4WgChfjirfES1J8q62im7hW3DK4GqxHn84Rd1sxqVvqjYt",
  "key25": "4yK7Ai8Y8s4UsGDnLgeUN9wxmEjFdogqj5M8suA6NYm9cH2sGx9KjiFAPH8J9jBeJDvL4axkfMfkbHc2NHiS3tX5",
  "key26": "2xhAvP8SDYnGWW1Qz5eCWNgrNc75S8USqbHBe3WQxuX3KDsrwQ9VcK1YgZhKV1kwekutGhtWPDveXBGQETz5AWS9"
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
