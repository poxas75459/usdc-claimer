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
    "3hWExXWfYinGt2BABLsCKURSE6k6ub7ntZaKqsRoTmGY47suEBVmD5j7njdz7WWVnZuunRgyivns1384BSnKmXoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KL3WD6gVkuKWtxchTMSjQZnA4CJKkPFyvt54oKxiX9mjP4THcDVpjQFaFA2BRGcHfhYgSEGNMzRrsTXNVoUfk39",
  "key1": "pZLrLYjVA4WouXLxpPczVEMRoU92zAAcSE7MNPY2fg9zERTzux7e6ZPWppxPWBqQ7QoxnFo2GLCaNhMYSMj3y7t",
  "key2": "m2nz82UYxh8YfxqcjutxP9DVC2Vuuf3hLoajzVEsCD2V6RYSJb5cuZiqRT9NwiXQFPLQkkkmVCYAq4xcw5xQK6B",
  "key3": "4WsFrgEunYtbeNyRNWPKcv5DmbkkqZTr8E3epbe6RoR3SKTAr3Uh4UNfDZZsuL4gr4fF96evXRnqpLPayVS7jjC6",
  "key4": "2RRChPiG9RWrR5tDxfb5oJ4nHVCkd53F7kdaMY8U2EZ5mjj5AGxS32ZHVDjDohFv2CmUHjos5t6quqgxQo865q6W",
  "key5": "3Wun3a3JzFbTg61LGo5v9388uRvquan4KWBxM44cGs6QDVhit5gFmMn1SPDXPLnBwztjA7hH9zNFPA3kXLfQ55JC",
  "key6": "odjsk8pzD6hhDRg3Kfzf4nWCN8TpBpjYHTuwwrJengCVoiCoy76YZF52Xv55rdoHjvbp29NonZQeaSFHHRUc5z2",
  "key7": "3CwbrMgpXDmZAVUopMs36LjgPWSMQZDkRKuqrCaR2MKjoBhVv1mYf1eU54bfnE59VTiJaHXTn9MMUmZVP51h9s7g",
  "key8": "5qwFiXB95yHsQGhDBcPNsJ2HR578TtmPDTPodH8YAbreHzr6iB5vkm7MMxJ5Xzo7WC15ZFGp7BetV1rJGAeBBBFm",
  "key9": "2kav2DvGFbYNXxEFMugVxCYtFGB5dojk5oj3ak69ysKetuiGmnkrZyYVajKjTTofTxtyWbP2bDwivqFGRrNvTbr2",
  "key10": "3GsWDwPzn3byZvFN6efmoG39F67yYZfuLLvH1XTBML5YocqpW91k9cPHfHqE3w31t1TaFK3GVRDKNHkU2gZGMQAW",
  "key11": "5YFoCyAM155MQ8QcyGp7c6gQXkmwB4Tqefzbhu1TnHJw5Dhcn12qq5JZxr9WKUsmtzX9c5rETTATKaNWdz3DTnwZ",
  "key12": "gctnHLZw1jZx1EARqnXZfxwBdBzH1G6Uc62Yqqg69p7gnLEF7XYs8mEZWfHRKVECY1BeBCGwfX3MNFJUuFiGKJf",
  "key13": "2avLrqGYjwKWcBsXVsfPjmgGq7kKczQPPoY9qtppdKysj5gS9dnpNRcZYVaYUBiMj7jM5BhvATnTrxaJPSAbUnPC",
  "key14": "3xhCd2mYNxrRRXwLaoVArRsBHJe92eiNiybHdTxBsc4tskn2ueh5YveZSUNGD3qQVr9Rxaq7B6qi5Q4MDM6W9ouz",
  "key15": "3C5G4Gf8igsFubgBF3N6LtiifGxqmZeSBhSV8VJrfRyYp5PuRA4Zt86vE1YikgyZUPVmpTFqzYvAaK2QQoQ4dcP1",
  "key16": "4EW142ADoziCU7eQXhw4mNTJygggLpFJJtPm9RfK4xSyPiANLU83ivKLdNjhzjUWatoCevK4ofG1jhQPgwDP3ZNN",
  "key17": "3tC8GfimEZXQv4wLLfSDF8hNMHQAkcd9MMBVyNstaeeWNe718rxxUv2n679TVzH3UXDTVWZetEZbGA55PW8tuK98",
  "key18": "5Li6ukVQKpMAncTvWCi1W3CZmj5hWeXhtoKqQARmx97UaPoJJb9Jf58vdmKPAphuBjkDTjD92FJ3sdQuqyxFtD4H",
  "key19": "shEP8pBcQvGWmHueYQWZdkaHBiujgbU7b8qNh8TPmES21BGBAJ6daXtutttcVQEscbVh8BX4VGuxjyf7LX3tsGW",
  "key20": "3TjGGmoWSqXAGUbNF17MxuHJtB6HdXYd96fs2EQ2HhKkEzxysapE3PLU6MQahywCD7Wzeq5rVAHqFKaMcSf6hCNh",
  "key21": "44Fe86g6jmWWDStcUMQHtRtG5Dmsrez2Yb5RTJcvGvHU2CNfwqqCo3ZrB7UBeqJEd4egoTvH9oMKc2G5u1ZaWenB",
  "key22": "GQ82ufwQba5Pkir7Eq37wWDBWYQTMq8JiRkGS8gDEHzzrvE2nytKjRvN52LNSKJro64fLyK5gepA5dPehaDRaaK",
  "key23": "2b8cBzoxJov3APHYZAFHTvqnZLd2Nt2T9R1G7GY8RH9Miu1N8GbZUuhYnvUjrap35LtiUJdAez5Snpo1T8M5PGVn",
  "key24": "5eWPVXeReLoBJqxZRzoAv55r5m9kEqC6FVX9wMFTLtqST9H2KWH6rRrPqaRbBW8vi7CXqSGEqvgSbqhexqoFXfSY",
  "key25": "5RPaWeXfQfXAEtPxVAZPPatBLoGM5jvUCdp6uZq49TbnRW1jbpUQ2m9qaWhHZXn6Q4wWXarFfDHHWAdojYze4Sdo",
  "key26": "4Wzk3D7EtoXvfD9BiAQbAj1SHxjwiGgd3c33g17E8r9jWmZjBWoPAsicfu5wJwTHgDpo3bPVipbNE9QfSmjVA9iC",
  "key27": "662Psm7dBKum3o6U8NhMMZd4wiUVBNTdVb1dPAXirvqzB7Qm3nAYCUtFuuEdzW13UMA2VA7m7qycpH22aQfHFq4T",
  "key28": "QmnPkUS7tyfWmZLCJXYKoV6eXepHuNLgPnuJiVkQdaReQN1wqMidu1BuFKcyQZ2yVTLUQUjwAM3ZCkujSrmwQNR",
  "key29": "67raTgSjZu4jTaQNLjaX7T4piBjeFHiJbukmF36EgkBAiWqtepdPwJH75HXQjHkuhaXN246iTME2SuU51Cvwby1o",
  "key30": "2wGnqGYcj9WXv8zSqfyhqFUpwb8ft4oeUmAU1dufYuJwvMRRL97gNMmbLKMdc9Azv2G4NubaMF4WLLDhARXQ5HkX",
  "key31": "24SwE1ahDSo6wvU5VnQW5c38hp6EYdAD4qnVDV37REZHszHeWL57kREuzEV8QVCxS5g9gAiNBUFSmsU3tWJLzd9g",
  "key32": "3DhzoJz1F6mVUCyyvQ4qTnCkSRD8aWHfskvrJ8nFwsRBHhNXcJaebGCTQW3bMKYeT3xAX4XSgiVjM5gGYHhzZmJT"
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
