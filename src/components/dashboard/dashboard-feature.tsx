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
    "2VaUCeZfBs9heya9UbfaD1KnrDfgjkxNDYiwAbxMF2CEBPJrskM1bid3estkKHPTvxBtb2qjioWKEgfAaN1URzUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HCSNciFWD65s4P7g4jGivvUMyehV6wAoUBbxQ9uRKL9KV6syFKhBVR2rD9udv16hfrRaKA7vdHzxCcUUFuuFUp",
  "key1": "5zq72FKKzGMX8hmmqbQT8jZfm7AdoyyK5BcgsyJY5QhuhWpss5e5CQD9rH8BCX45WpTon2f51NXvfRvN35AotkkD",
  "key2": "Ymyu1bHsnKHHht3ojEYfykG9QYqWmz9EzKg2nghsHRLZuhZmPcNe9zhH83yHPRzKz7nLVfMeeruPnFFt4DPqQgu",
  "key3": "2Y2ooXUfvUaeLxhetVVGarzzUhaYoKQD8BJCNf35d4tsYkTHy7hgQh7H24ysRP4nxojUZv1xmydUbioNeEgy3c7q",
  "key4": "3oSQWCMUxAjkbaDHGGsw2EPKWV92guAofhqdELdNtoJp9B7ymxcPSBVVfTyY24p6rcs3fRRdzf2FpSuuhHp66EGW",
  "key5": "61aJJmdQzCLoLnevEjqUoEUMPhFPeW7dYAWs7WLwo68iSa2jujQx1NTsaXpasUezRLcPcP2t87mQhweZ7EryZ281",
  "key6": "63GKXX98UWaTusaabRt9oRKx4ETiBpJvqZ6FovTc9QxkSwZmc8NtmdxWMdYq9m5LkJ5JTFJjBQE6N4UW9HeoeD9h",
  "key7": "4BoLQ7YyYCY3tdcyMk8DKYbjxzk14uTvAE481LwycxkyM6ZJSM1sVhHkuF29nzh9KixC3e6fJma6WKDNLKWvz7wc",
  "key8": "59J2qbasBtYseqikW12EcsNckEKASuThDHHp1SP67MXky9zsredrEQ6ggHd2fpKCAJ4SJ7m3BoL878h9oQNctqco",
  "key9": "oEZ4X4d6isHTyziPmstfqkoX9JDB2fgKNeHSDfESpm6bhJYuGU8uMUuutHNYzbEZxBpTdurzVGXqZ6TJBd8djWm",
  "key10": "4vc3BfY6q1yfe1sajqdvFUYe7jcgq4Fx2eefhz6Huo6CxFtHrdxnxTb4vtxyxXzSMwKFPo9wsbHaSJDgKFZ5nys6",
  "key11": "3GSnW2xy3VXdrdtWy5yirgEn5svg8HDw2197tdnbwZbtPAw39uQzTYLrdUBkKr4TLRYsL1Y97hSGjYBNpZmtdYaQ",
  "key12": "2agCm27VFodbNHLg349SczjaojiCw98RK6G35iBAeR2H84sAmuUsLMPqcBNzSSYSAwd9LjwpzpQDrm2ZZ5FXJjQt",
  "key13": "52qWqn8rmK82eCxQYmbMk2YgFXszUdqJW5fG1kk8nityR68b4X11ctZBVzLXGvvFqjnrYDuM5WDqT6zHmWqZSvf6",
  "key14": "4bTkmTDPSzWucSAHaaw2zzH9ePJX4QbXHoujYbwQjT7oM5M7oSCzjVamYGSqzC1ZZaEmaVWFCN3tSehcYGbchjP3",
  "key15": "4fz9UwRh9tSV5ciQJqVbDEcDo7V2ismic3TsZNAM3ucyAFs3u8RcHQtS9nXb28SecUA7wUdc6pz9kRhYQtitAH7Q",
  "key16": "5WLUVcKAt74SAMemc6U5ehQRNuyY3Kpbt1XCeQHuDGyWME7R1BQm52zBUfoiH6kMpFX4paGXdurfnyrDicGrEa5T",
  "key17": "Baf4tQKd87vHsVoS18ELmKE9hn2DxmGtrL8bgHJxkzSSDvoQDTkMJTbFp1u6kxzhv5jSYvnF2Rw4LXGAGivyFet",
  "key18": "3c4pkhoPocFQSerp5YzYgFHye8q8a2b3rsBfbvBWHLq8TfANT76KLDoBknqTtXK6ZPXZC3RxRPnH3SyyzA7xqpP1",
  "key19": "3Nb7YecUvQdSQbygRQ8aGUFDtseF8LrDjDYfmSDquKgCJVfY656VANcSnqqo22Recy4xbP6fGjLraaVAqEZ1LQs1",
  "key20": "xJRzt9UWgXJTA9pXSB73T1kfpH9ojtY6x6UweRCebjYEuDWfHUxECDPMdjcgESqH1rMsvmbf7C3QaDJb6BaMThF",
  "key21": "5pGSmXB8K5q2HfzW4NBXsDm5auWqpdjdEwr4sjq2pNzYeGauF6wVdopoBhYLt6dv8fRBr97HzaPLLjmRF5tXM55h",
  "key22": "3NjHy8XubNWihSwjCoCo2A4cBWptUpE7UhhAtj39ak4jRjkec8Zpcisqw5PavHpnTJfBXt4QBqjekbH5KzdspZfu",
  "key23": "51WA5Saasgd39f2AnKEnXDxzNi8DVcV4H363vf9KjYQzyD9wfEH2SAkPTSB4VLoXhLMfDMHuEED3PzoTbacAqGZ1",
  "key24": "JumUYF6WB1XKn15Ry3TK8yA6EZD6Ygpd7EBAo6c9jm8m6dgETnWffHyhS8xvTs7H5oyZkZaPfzLJjWZFzsLHRJJ",
  "key25": "3CRyi65Uzzzm8tRdzL8opeSnmdAjJvhLpMnes23uAZzhvex7TUrvcifxFkEpTxmv3MEVypyf9DnGN4adMiTkc7sW",
  "key26": "3aVv3QtdgDTjoKnV8YTMJBDf9TDqB1t6SwocqgL7eKrp6xcB1sbTCLxV2FMLdBQWGK92UpZeJ8kBBs2UGeSG8ji1",
  "key27": "2WhsDfoeZeocWGxto97x6owpQ6DrFbsSuTV3Gfi1F7eSpzD92PFm6ucoDBwtsRPukCDuzfPvk6prBG8YrNCyrnuW",
  "key28": "TGcG63Xqb5X4tHXmunMLnjD3mNb7A5Z33ziFw51Bm8gUP2bTeuPtdbaLjN37QcLEeeaSDJ5Sj6YguY6f46YTQFs",
  "key29": "5vLbUindC9ckqrLVdauaY4SArWv3vazeyrkC3TwHD3YBniedjfEkVxZ9Rt6zDT3Uf2yQPrj2HhpgA863EKkn7gBA",
  "key30": "5LSZoEHmAQNcoSn3abyL9vUQEC349cH2p8TCxKgLxHAJeVx9ryqbMuUMEBY3U7XQmxCx8ULhCyUK6BCJyc8Y1aeL",
  "key31": "3hzYeVCZs49H2Ji2STa8g1RQk4GByNsKzvMLpYPuCJLZWyESmsXknmQc3zfyjUrZ1VHP7vs6VomkGftHqGLf4SXa",
  "key32": "qSySnrVN82H2FSHPnTNmMW8juXXMi4kWhohWycRpLZmfdfc6Ejw8F6njKwWE4RKbQcCY3eT2P36hufnNq3XMTe5",
  "key33": "4B83q6KRgGBimHD6h3LW1o14WfEtC7N1yuhuYrUqejXCNK1R5X68F6ZJGwY9BEVX4rmkH4oGKuaNcLrnxaNgDtZK",
  "key34": "2FAVWbhnhGbq7NRzzUJizCqgGj7YwtwxgJamGBnSgkypz4WbK5hBW57SRhuig5F7najqxNmbY66q2Yx9fv8xxB92",
  "key35": "5ksDRJzeHBnHouLwMNXQDVA35Zj6xhBKEu6i6oKxH1bDCjmxU6FJ1wdmFuyeYTssTwNYf3iLHMopFYyjDrw5MK8L",
  "key36": "5A6dShEdNvd54BiJzioyE3KuymxKSywVbyCzS9us7MFjs1GkysL3KciTGqgcPDBRmtktmHcEA98Rk1Zvp4KjPQDc",
  "key37": "5gW2Hx9Ehizwqxzttyv7yAgz1RjuFaT3RtyuegAcrjgYbXn48v5aC2H87WghwzJGtcTssyJtQbgnZSFxLmQBgr2Q"
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
