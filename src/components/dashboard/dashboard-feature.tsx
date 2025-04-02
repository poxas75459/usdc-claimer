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
    "54F7tH1GT9vCdVWVNQCmhAFNQBTjqjAq74BsZjB1iPpSh9jmzyEVX4YohReYiv71ZaX6Dui4Ag6ppsh5B675abiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BRBNx8SpmTHZGRrpYe5tMcz4RV8DggrZf27kRp2EUFcunmtq7CjciWByR6iAKx6sCrJ2SUk8b6TD86uCxFMgTcZ",
  "key1": "2LVAyPwEyCBc5C7Pzyo5N6CcP1c8VwEPjWRxRHHkawEKCwys1zDmsbqVpTuWw91s8PVA9mATQsRqJFjiyLpsLCW7",
  "key2": "3Lnuzenx3hoUfEtSEVSAHSiyCX7sctjZ3EZVFrguGnsYNTj5gUsThZmB5xmjNnp35gSyewjhMaaXw49i6S4qZxaF",
  "key3": "5dpmG2ygmRzwt5dGUmsxVv5SCWtbjMpoR2bFeEQkEbxNDV2uQqr6TXUjU4hE6cdcMejoczUjRBNJZRQhCdz1p2S1",
  "key4": "3gh4m4G4N8ocpRL17pzRUG2h2pfubJkJQKFQDsvZwyUfjTdvTW6xX2ShgjUrFQAGC2VuNnERG77dmf71nKkH7xvM",
  "key5": "5GppYg4yxtSJMJF7L225zxLhuvSrMQjgzFQu4sqk7NMyz6pSo2QQfUPQ2K4q5K6svmdr3QNhSVhhFKpjqZEi7kZF",
  "key6": "5JjQY5SZ7N3vpARCxGFK3qTktARrTnwmFhtzUvUzYkxUMMHdCqQefXkV4gqmVzy2ZwfiBXcTymVrQFXdJT9XuSgY",
  "key7": "5WQkqWFkucviASK7PLcd7Jp7eJ34PvMnnV1wrxF6K24yiT5YNnd9QhAFSfL3jmAqA7PFSP6u8xZP1Z7TTcnMxDvW",
  "key8": "23w6SCx7jzf8yEtyHxn1fnpamce7L1kzeKJZ8SwEb6FEgVi1mnRF24Fpvw5NeBGiTFEiGGrE2yTgUDYnDMuJjP7N",
  "key9": "5v8C9TiejJJpLyLiGgCSHH1TBzc29EBgXUc3ATaVhzapxTUTKqgqvW2tVPBfcVJn8dnrnq4v7cPGbLegfirDtimo",
  "key10": "5RGjCSkZuHBWVBu6TMeRqLxVcQFwLDiTUZRNHgkxSmBvbka9EMFkkRNbrcLZQzgCqX73JpJDtxUujsEbmLZD4j76",
  "key11": "3L9oKguo7MnJ47YaCLdCn3yqzPe21DehZLmqeMa9a35aZEYdpyLEQLSvP4XjwhSf4h6j56pDwSj5NQLZGuS2Tpgw",
  "key12": "2EmSpFQnr6dEhZx53Dp2isMu2Bh861v36RdWLoNr4SKWRAqEG9CkFGFvs5TkqLNcF2UxPhit8jwfrFvTrPfaC2DA",
  "key13": "341QYnh2skTyK4eNBMzicEVFBivJr1Upru6q5itsnjdXTUSC3F4JdaiQfimvaFFcfuDNjrDddJSCN151DC6wESaU",
  "key14": "KmyPZNHM5VYDQy2riGTSYRaJStmvhft9ch6eKuZDdZeV7T6ykddDHjc46XEJG9uuf3HeLrv1UfYokoiwsgqajLW",
  "key15": "fCTkj2EUKwntFpXywxt1nuw1BVxpmLBvJggtwLSYHrTXoumF58GtSwH2cnuUZsHp9ewzdrXbJbAEde49aDbPWYU",
  "key16": "jAtcBocDoCYoqAVc8KX9idHyAUURPrBfMEP6N85S58EuD8zFhWSbCFVagEMYMxxHFWBMogUzAZz4KBxG3HAbbeP",
  "key17": "3ca7baoiNo4g8qdhvEcpisSeQUcX21ysiKxAVMcy8gWKHEK4khBoYgA5gj5kstb5v2cruvwZmugcxGDWW3m1pqA5",
  "key18": "5cMC7fvX67mmj1hF2pyCTGKd54aWEugVPmrQEevhejKMyz7BwxxtMYENbfpYtAubtJ6xPep5upSm5BLzjPfoYCfX",
  "key19": "2kpiMyeJs2Bxh8XUZXzuwPHFLsi1gKpJnPWidEKehybdYG7zgcwDLgR6zaCg2TJnb8Gm1U5WpvRanWkMhVdCHrx8",
  "key20": "27WEZa1qLiG9xT7dc4JwmUi9RbzRoGUV9iDhEsCUJvTZPU5typpyjsGjjh5ALnf5QvRR3r3ZBLcBDDCiDFvR1fJE",
  "key21": "UnT53kuR9ZLzUh1yA9ZRP2dMitU2Bp1WjKGpn9666vcwKExjYuAVkYSsCVt3BbCouj9QksQeCukQZkqG9dyhCmB",
  "key22": "2GG8gTkFjXsZshKmszzr1XcYG8iqK9XrPuLV2LW9X8vMvM8qCsUjVEkyL8KzdYwA4wChvax3yEPZKPY8w9ZqordV",
  "key23": "2FEUg2ivp5weaPXEE81hWkq2iWxmf5cfohf8cLCWYyCXBKW39x9Y1kdeWndS6zvoiMZb7ccU86uTdopsNjPhkXaX",
  "key24": "2Qmg4ni2uGyFPfy2JRNEXUbRFdHiyChN7vBhJJSbaJDsv2FRsdMnyhuQQaY8KDgfJZCQgCTjG7fE6zx7zF8yZE3b",
  "key25": "2NCkdNBriUVMLHNas8WsKbBYW9NLbBEKiS9vZVJvxQ8Tt6LXF5zdZzpcgkN7NSsS5wj1yYNYHCyLMWUT488qf2Bi",
  "key26": "4rYo9JfU1S19VGRownkAgMYeNbxztXvVqpkoA9Zv3p3tdxYX7eW2tLx82KFZXrM8DoYZKD7eKfW8jWSqxaBihGMB",
  "key27": "27EQUov3PEXCSVRYfKmyfrMutCpyRtj3UX2Hqm1xs4rW7kbLzJcD2YxMcqb2veyxAhnP4d34xtQty8xVV6uXJMV9",
  "key28": "26pVvxXnV7LGVjYV2xqf3Pa2xzsNNDW2dQRXBcMHPRRzpD35dLmdCfTtwanyfhq6dzXkFN9xBUGV1cXCywDD8Ei8",
  "key29": "5br3AvA3ibvyfq7rBgYr9wuMQJg1iFaizYGwzvS522AMvvag6VTBrZQpBTUNK7gpPDDP7L6fFW9M9ENRqNZEKj1S",
  "key30": "4Yx2xSHP1ooBTEszKqN7UoE5EBD74j29YswT9WFLPe7p1CQxp8s5JGSKt2oYviqMimngPuteQgWYH1ZmUsRjUzzG",
  "key31": "46WwVngiw3nBAZGZw9H5iWGKUNpo8Ca4Qz9cMdFdwj5aT1CUH5CmavcWrPxireUyuBZNGmSqtb8XywP47BXjGSxg",
  "key32": "21iyeAqbzAnEDyWQsDCe54B1VAwG56LDFxx7pwG1BWD4RGzBFMp25fPSPeqGMxVTFcUBpLpq1CJDvT3MD2Ew9EK1",
  "key33": "3zA4EEtmAabqhxDk5BQvTRh8ZyagD7aBD1nB3suKrJE3JZQ6YxAw9qnYz6fjq6GgqWYiQJzVWfW6fHWGg42WsGnJ",
  "key34": "CUcPD6LZYNYssmLXER6mZVARaG9usshbwPYHgQUnknL75DfQK7YGAfryKvKTBuKr5u4atdhdZvhQsZYNv4LUMkY",
  "key35": "4TSrWbiucUXp7E8iAWYjn1w1mC6Hz1shMPU3prQTXcM3VN2TdxNFZc9dMLwD6vBNAZqx3H9YGMrj8jymhEVmnHYC"
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
