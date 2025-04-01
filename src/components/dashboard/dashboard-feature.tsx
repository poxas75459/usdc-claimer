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
    "5nvUQ5P2spZHwCpnbQ3AjtPaZpwfNXvq8Cwz6MZZgL62YcVtA8aqZ9yPbjzszV8kXVgTamLRxUYQ2WrCpxbZiZLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57E5tLkCcocq15PKsvp4NfLmhB11gQ7GZgki9eDZqf1E77ZVdH4cDxHmjXpNc7sfgk6KCs6558Bc8T2umBiU2dmj",
  "key1": "2veeS5yHm2M8bbseAmNAeFXPRRTok6QK1EchU7r1oGkteANNrh6LN1b5PwD7kQbuxzxy3RDSN7V8CXyWwjKiCyXv",
  "key2": "2Dq9fdNKdehUJE3T2PYENBfSHYXxsbZ2SbAViYQSAGFHsv8AQ9nFftTtkqgrNDQSK8XE8495xAnj1PjBDBYHeuAy",
  "key3": "2nQ7U3hWKfFQQf5PtzdjDqg6Yd9aSGBkHv8Cq2WzNmXzHFsuN3rhQn8zHush9NtuhXFv6dv3T3ckGgAW1dZFHkHo",
  "key4": "4HnnMN79csWnHfwfLcRNKasLMktgURxtfFFaGMhjMpSh83jpfbSqZNy2ME1Qz9BHCJWyHXBEWA8JDivRRmzXRyzC",
  "key5": "Lwd8wPiLTxnfF7Ds7pqPnJsge33uKK6k2owLBtzf6GgHeBqGEsgD71FanJaPo2cozm8iFBzzR37cHJGw5QDkajJ",
  "key6": "3aJXqAN7xA9WUjbqituRrLUTx6JuJr7fJo6bUEiexM5z3CeKfKuL8pGcHpjSPxKUSpQrAKF1S3cp9aadEy61MMYE",
  "key7": "3wo16ShKhQHe4Zp76qegLLzgfAvbb2yurr9tf5srARAn2YjMFPWkmXZ6Pg7mX6a4o4KFz5GuFoZrHWPufHS2AH3V",
  "key8": "5LYvMazrbr1h3RWmDtS4UjCyohU73N1XGcpTJXKAzEguxzvmXRAJaejUWcqXiBRr1o5HjJWPpfPac1uKjRoxs9zQ",
  "key9": "282DdAwGRCrVDA1ktT9nXfvnVBAV3mTrfggGnAs4MBZ3Phr5sBxa9Koh3wBr5HB1WqFi4SxVpciSrf18zdQmNyVZ",
  "key10": "YieoLxQuJGtWAdbkGJa5rb2yqQLGvvukEmUbY815qmXoredUZ5SqSac1i83fX1pBh3HFtNQ6X82m3wWz9XEjWFq",
  "key11": "rYAJVqoV32V85K1AppGj4KRtE5aWgtM3jS8nt6nWTSEAP7ifPrx4EFfCCx4AzcqGjXyCE5S9KdChXV2prT7bRXy",
  "key12": "2wEJQGBLPnUfMBhWSNEh3Jxv1TgcMjPTor3zjez6STWAxE8WGgqvnvLeKYWwL68YkJfa2NoiX1JktHcT4BK64NMx",
  "key13": "2oKym4rcUZRF6KF8cNj1hUCf3X7qDRCA5WJxEacBYGneHr7oU6ve7Geg1udSgdXA6XSYtBfuh6oXQFSCxbFw8Bdd",
  "key14": "CTX4wsVCPEtyGqBb4XB44CCaTybvSbSoYMtoREGSsZKKQTMxEoY3qk3wjFn37zRDd1mzns6oNxHpYaUAhFapT1X",
  "key15": "3bdCHnJrDCrm28c4dxbmFyZYno9PxD77gfpzKaNihaKHDiGR2dTXZDpC9NXWfvxFWQtKzWHKiTPscCi78Ed9GLvp",
  "key16": "654o9KXRVEbjc6ntFAsa2kfdP9jEquAJ3weKFPMsXMpf5Z6dmgoEEuPQ4iGQUQ5X4sWoRrwMg9w9ncLGz9J2q5uR",
  "key17": "Dg8yfbw7TFQnTGof4nmnbAPSNhbX2JqZ5Kw8JAy33WoiLSwQcAUAUpwC2HGx6HATGpYSiz8nM9Ugqeu3QH6555W",
  "key18": "chmdz3Ujp6wXFzmRnUgio5rmoSaqH4e6gKz2HPsvFnjJTmzqrT6APHcNuAXx3KLBLTDjqTeqa7kJF72HdmGVpZp",
  "key19": "4VXNLRdsYq1yDnSUoQuC2vGegZKZu57uaTpkCyfaBSCtqsAJQcu38giAJz6bYSnRa2Tns3G6BFcuCNUxZpP9DxJp",
  "key20": "2izfTDfB3kZCX4a4cyMsXZc3yb5DoRpw5ZE5M7w7qgvqUDCTd2ZzaE9iPtaduRFYU8tJYU4h7K6rpYqEkeWeuiHj",
  "key21": "5xWgEhTvN9G8Gg81TaFjFA1eN2YMH3KjJYxVrSYsZjrFuYBR5KDb1xgrbaM7cgwU5L91cHPpv6M8gRm9P2fojjJb",
  "key22": "3eNUJMJEzyvcqUMatvP3wuKSAQG2oaa4wzLsmgAWR6kogqRE4TathBGMRbUjFtX5BUAD7tybVp4oCUs6WM19VDtu",
  "key23": "23oQa7UWpB6Sg7X7uB2FA6A9KvHVF8GvkKVRYsekVDPncPKVsB721d1bajwJuQzfjX3ckN2rm4JbN8N5rTvYaG95",
  "key24": "4STdQHNDtHxEZogXqohnnhNAjzLNq1gjDun5dJbmfowrGCP1Nk6noVMNZwisAWpAGHAKpKbcALRTnCNwpvtsp56G",
  "key25": "3rVvm1CiXpooD1dpQcfk8EfuFyDUkXUhKmkwY1xSz9ME9p9C2uJd4RffVCHDu13XXskCDvrxQrQ3YGLpmqtSxK5Q",
  "key26": "4wNdK583PTCFSKK1Ts4CA7tVXJxB5h7R1emk2atAs1xBf2SPaZZKMQReuE6NAEEZqufo2d2SvHKsfqZsSpDcuEET"
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
