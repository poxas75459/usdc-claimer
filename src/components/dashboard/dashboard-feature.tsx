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
    "5LDPmH883bmf21Z7RX6xaSCNt99cssqrkwEPJ2vSEnaQzFPsqPdknLKRr2aKFQVnok5vNkUgWbvRgu9sm3zraj3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F5tuRCwmo4XvS6eqingSSNRSKeW7PfcEdfTg2fCq7SMqinCv7j53KtFL3rH1P83k4RKeazA3TFnA4NmiwGMRLw1",
  "key1": "29xRjk6EcNGiv9NByYovuEjMYbXycHdwxeYPucqWfLnid6kMNsLAemFLj3TxxRHNdYEmgMfA7V3wuj8PfD1U2J8f",
  "key2": "Fd4ToiimAowczkuKTPmQh4Ki5AC6t9szC1oCT5YxfRgf5GTEv3mFwhHiL6SETUy7W4baoTTPwULsDCJRn8q9jiU",
  "key3": "2NsYiRnQ4dAR1HcWdHyDpTYuLYrFdbNBKDUY3RY6ojukybD3Ee1SyFnGvS1rrfavCSSNWZmzA8Utu1vYV7fB1Goq",
  "key4": "5TjtzFPWpt2FqrgRxG9TuUvEbMxHFH416eZHL5QEcsj7Hy6TQx6LEQVJCEnNBoonnM733Gzco9skPkVbFtZ4DA1F",
  "key5": "proyUJrh3hA28xHj1kcQExR7r7DwLWZsGka2EyNMXKeQy8aHvfXz3s5dDZ334CrHB8XtU4pVz9DsDCR6ZiH2n1C",
  "key6": "6SBVFmpHCZXEuRdA5z1Cw6VXLdY656YbmtGArWkEW9J29r1uBJM5CxfRDWfoRbMxtFYgRpmAH3kAvcFik83Gpsh",
  "key7": "2myfBZKPTtW4LaBv9CPR2m2VTEaKTUn7X8GH8pCmiq1p32LXniD6oRJii61CUWP6ESHyvYfdW6c1EzsiunodujiZ",
  "key8": "542VM75MvRaZvLr7DGBQ5VX2ACKtzMzBxBxi2ViaYcWp4JszLPR5BNGZsJuATha9qna7cvE26Kxd5RhMJNG46peE",
  "key9": "5T7Y8JXRp6FYkMcZ7reP8hh7vnGxpGwfhaQdVniRPReSJDh6T3dQfgnLhPctXc9a4oHR4GEnxVCFMQyvSi6sEoZd",
  "key10": "5rPkrTM3ZQhGZ4qksZrhnpJJ96Ew4YAjqYCP8RLrc97K8JpN6ZaqhvxMgCtZCTjyfLgX6ETbAM6PdZiuRuDwNL42",
  "key11": "hHPwd66T5ezSm6Fo44djq319bdgLSeph34221YoFxjkPfNcfpX1jL5aDbXqdmjgvMTevUpjPkUCJsHw3BNWbWDu",
  "key12": "4LFYWkNUFhi9RonzPYBhxpCcTVMoe2XVVchCCSP3mAD5KbmzyLtcXbiQyPSMZfT1W5aMbBjEkA4SLU2tQPV3MWSq",
  "key13": "4rLgXAFLzj9JuaEGYNsf9kdXnhH6YQZsmXciWFG2v39RmDHXBxfQ3JRk5JUspuhbXa832ce4BrLp9vGdJwFGtfiQ",
  "key14": "dhBemeTWHWESjEbG594oqPNTrSsBvuJjanGL6kYvxb47pgs9kiecpBqu4ASHNBCPgMnpyAg8EH4tSPYnPRPvEdw",
  "key15": "3nxyZbCK2LQT3LwaGMqKJ2dabLMUX5JukadbN8CrG9pp5pRw4yzsQxjSkqhQTgQ3SKDRw5QZ21eTk7k7JpkUG8DH",
  "key16": "vLu9UoN8Qh1EECipEzU6xGxsixREA9pc28WF4mrwHgfmot5fEPMkrgWYRCXHXxHuMperZ5kKfyQLKx7ztj4738M",
  "key17": "4oheFSvhbCfAjTkokhJze7HaaRhKdbpKoDD2R2tCnEyy6Y7Pt1TpX8st9wBztDgNJCvtpbLo14APUYvA5g2j3X8r",
  "key18": "4DApKAw966qYR5gpHjKsUTDA7EoDdtDxx6JvuRprzR3DiE21pkKq3nNbWrbN8ht71sMPp515DtmathuiYvv6bnmB",
  "key19": "5WQDnhDxSsUhrY1KxFaMoQBrNHxGyE85mwrPDcFiP3SnZXM8SC8V9DAmCdVsazMLnKLRSG3dZ4TY7jUJfRoF4kB2",
  "key20": "234sVSgZ8ct44FbN92t2TZASKNrEzV6kw5iL7xAvXSPsr5FmzNzbgbSbeuZWjdPj82SRb86QVbPXZT36vdLg1esR",
  "key21": "Rzey3DPJt7mW6VGTsxd3dzME88uWZhP2P9wa41nLm6Ndx1umxEUFYvShJbNbNisyi66XiiRreiS1yvYRU5DkNCT",
  "key22": "zU6xDxpqbL13VoCLagxk3szRorVwiXKZtzVRDTeo9sEhSn9oTyxJ3xJHJAX1hckx2cvQgdfk1GtAVo5wDB1NQi1",
  "key23": "2bUCc7phB2G9uzxCMwYD8YqKgykARo7T7KY3rp3XMnRAzP2fgnVg9Y9BR33uFoTUMpQZMM2vec5Gi6Hw3t3t8VUf",
  "key24": "53Sx6tBaguQR8ijbdANpvgVAaUxFPpLRjCLQhZTQgv7JxA6UNx4N9vStyKKTayKRWGQ6eAuye4pMEHVezFrP4f7K",
  "key25": "5rMXKYH6ZpjHcuw4Mp9X8Ra5biUwBRWoQcQWbeLFSJaoVUwTo3ZHqYNThYafBgX6u4WHTCaBpKyUD2bq61xuUmGE",
  "key26": "4yhhzxJ2w45SfPieUqG97TSbjAVtx9Q8hzG3FWJTdJbucBgbTiBU7BVR76vKL82CLKj5x8qdX6st17zrcNWQAQmX"
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
