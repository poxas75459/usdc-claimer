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
    "J8eB2L97g5hSBvzGvrKpQVGWS2EMzcAdXMuFsAnTG7BmBtGnNVTyvthyaGCs43jg1fC4PSsRfszm3tjzRFEtE9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FVJnrV537g7nwt3ZZ5P3H4Wg6oKJ6aWrtGjddPtsjXL7uwXxG5eYqrKpVHA59xUYz1Z4QSvGSBpB7uB5CevFrBB",
  "key1": "3htA6gWysExPmGbrAtZaGUjeZMXqCP5aegz9koy9MFRqgbVGvpahphrkoPn3Ui8sWxFjrEa5K15UTdn16nYygzxJ",
  "key2": "25hkXhxU72gYLrQ7LUeAEMcrAyVPiR4JkdjuxRGNjkWMT7hhzRbPNwXq5N5pozYqBCgffQen5ov61PUAF8GKXaHn",
  "key3": "4YFsGCesshTeZ5f7FoK6Tc6fSjyzVN8n8DC2KFYR7Lzc3oMXWNWpBTENXm4i24Ge4zeiE6rftbaNJEG6DvwihhNk",
  "key4": "34JRHFvJK1M3mFZF4q4yT7KagCEARmH5rV8tFPUe7a1aQhxAGJ2jgcUAud1Q7V85KfKVCBFwoHRcWCFvEgmTEeiv",
  "key5": "mTXneSarGV6NmQpGTct3xGkTeVCUimniqheK1fDpWSEef5YLUNdMwuL6BDyAue9MzgM1DPDqpbDJ6UEcJUyhTux",
  "key6": "3SR9TCuCvm1rU4mVLnS6SMPcgJpY4nJQSo7t6cjGVtEJutDi8VRtt4EefMTMW7WYXr4ft1977Rh4b6iQRFx6caNA",
  "key7": "2ZeWAvXwNVCUgxyVh7Cz5JvFHwY3zbAizNyyNc7Kb1RTSWsAKmUJ2hzL6fmQYkuoLhV2zye8LCVHTFYK7cb3uGe9",
  "key8": "5TXTusijheL7AAaKpS4HjSwXX163wou6sZhJJn5yczmwANdDNTAk76HsB7YxCqTaCQSt59NDtW7sWMFURarfrRZR",
  "key9": "31iHK9LUd7qq2X6d92K4rswAapg5Hqm7YMHY4pUWYMAYS5TdGwZCK7Hh9tqmHucQuJN2fWfq8HPucetq556N4Xey",
  "key10": "3VPx2zcCJAYysSNp8QD6R8KSeEKKDHZGb9adtVaukoHZhXtVJJsnnKrmd4X475FyZehwYQbfU5bmgsG19DCHckUr",
  "key11": "4B6in9FjRUz6UL1LytUZp3tqSjAMLsbrJ8c5NTCSuduCmYzeC1GYud7S25H8CJM5gCmh39qAosaWV9HyoNuA1Bjv",
  "key12": "4s3aJkNHJLtD8Fsg5pCwGBG59J6d1fNm4rwCbyJagMA6qLrWF1nc7f9deC3sFZGTVMy8nqxTm2bJvDc7FmixatB2",
  "key13": "2JYYLcWdV5KBnTUe36oowQpYaNaoVBE6qzMYWzJGDW9KDddh8XUkAYxo9qirsAE6JtS8rCLqKMj5Rk2796M9VE63",
  "key14": "2knZmzXWXat9uesRqXjT8E9s6qGMQC6iNW3m2b42NjivdnLrgCnddgP3fQFp1uH7Ht1Ln8bppvXPepQ1oS5bf7kC",
  "key15": "4TR2NRQfUotk4VJWLgsUnLyWVBdj63zYwSK69mVASBmyw8Q1z8MB4ZXfNBdaZp7gawaa3faEvXGK3ZLQkjsrVKU",
  "key16": "Rt1omBNJVoAxT8fUgcQLWRPDpGFWx5qjRjDNEQmRe6ot9qDuWE1SXL5pghrporzFEP1tcUM5y4CKty4ymWPZwVs",
  "key17": "5d8AohVv25NDrd1SimDZD9GjQbc8FE6zy6sDohYeuxb2RB7k5EimDBpt8v5N1h3Enk7TEiJhxJsSmJyF1iwBq8Tw",
  "key18": "2sp5dp8wqjmm1yN5wBvMMPEKnpR15SLuQ8esfvbA6W7jUFF4R65sRFXWKH3bJVjKRkeAPtqygSyUsG9HYRft3G29",
  "key19": "5rPRcuQKLRMAezihixudx61zuM4hzvn16cwFxo6EjBDVinTeSj68YcempaJkzB6Enk6Kj5jYbrEK87XhSXj1unAF",
  "key20": "5gNyqDNs48VpztfFJ9Djp3rmSJ7ubJuq4bX5Dkj7uBCGnBHSdMGsgAC3HREBFdLUktKPaBEFSMTxTWdp2thBYRq2",
  "key21": "4hjCcSWmPZSE5HsZXLNxCuHg2M8ciJPe3X4hcxKQsHUxtoztoqfe4LJVnbkqg4JqwmeQMsgxja4rUX6kHyHGBQJ6",
  "key22": "5bCuuwPHXQkG2e5gCYqRx3UMxtoLqLzxW5a6ss2ocpZfzEZVhe3sbggrrPMMthznCxf1eAngEbG3S8yRCqqQm9Cw",
  "key23": "3NrwgKzRchDgcUrsMy9KpPytxkP7LY3saDV8cAbdw4CYTyKty82d1Zvwy2WmUTRwRKKywY3YJr6m6cVsH9vLnf8q",
  "key24": "2r1Z1iTKg4ZGmmXVmpA8c4t47BR5Z8X2fYVgDZV31VTuw2B225YuiWkt3TPwEiBNgBHTFQpt8ENZ1SsjdjJBkTYf",
  "key25": "2HTBWAiJ3EVHrFXxnaHwQXfy4aKFfhSU1z9QunADVrEebeiJJ6d4tSCGyq2aWG1XhvyGgM5mKVko92s7QEPE4UQb",
  "key26": "38vuCRqgdGMvQp1bp7JH99bANL48aFKpg6KPoeEpEQvbvtmCaiR1y7ccfB7h18dfgufDib128CM8y4ERW5DbVEet",
  "key27": "4hzyCKyYLJRtefmLEpRW6JoJFwvLcfqBYcdShhjoyd5JDEkusjf3zJYKFn34SW7PBeTRZk1nPPU1AgHAMgam1dbB",
  "key28": "LLSJpbQMBbXBdK6jAqg3sYFoCTbsBa3i8aHnYwJf8FpasLy8cV4Fg9in7LrciefcAa2pRHHUBfQU1RBsScpcp88",
  "key29": "3F9yZ9ADdF47Rtq3ukWUTnJ55He2hftMs5Fw1icMRKeiG83vd2yUwT3giYQFXBCYPT1nP1jGQdznEfwvwyEhm4iz",
  "key30": "2mMkmYqsAeW444EjM1xEA37heJRsG3qNEVLVn54idgew5fdSM1DT1a9oFBdYCmciMJdT2ySA2SvVtx1AyUqTGey8",
  "key31": "32tjJYopkLsUANY2WtJPGPcNGzqZ8UYaNRqUnmfnf8s4JRuxHPbNP4PjT4yaixXwUWQNGWcfjPCkbVZvWAPfSGSW",
  "key32": "3HAru4vnZVDPrsrRwkdairoZkrL34amzVsGmfnjo45DknRHf1y3DSaQ1yT8fdwZ99K7onQdjWgLhNrYxFTtYKrSc",
  "key33": "48M4FbS1wwmegwYzEc6dGzsr77vH5eyuoX3xkpsgnr94jcF1M7KZjiDfz6BNSVo27aXBsvHNXaxdLEXpV53ZJDa5",
  "key34": "35x8ZkW7fUWBptmVyQCADCiRchtRT12qotPFZkyqVKSD26KVkYtfemPMwwcwJz13xijdTtEJ7zQpSZcmYVVqBv2e",
  "key35": "2hABQmTYZimqJDdquRp3FmSsUitBFoDYMvDbYsqtMP5NKTwfC1vXwEzeReVVBmKaXzY3CUHqmVgb8g8igWyLceLN",
  "key36": "2E1VMzKC14QpLTZ3ekfS5h7NybxEMXofG2ZeYyJFR67FDM3vEhJPKvxpomdBTJ88XPWNGoRMcDmAwdS8hucUyjwe",
  "key37": "3QixZWETh9MeM5UAjypmpTgXGfqVDYnAqecnCsGo559wUYZP24R4TdXyR9s1wuHRnKyH2fAVKxCGHM9Tpa9Eath7",
  "key38": "P52EPrLpRCcHkEG99XHsRLs8r8kvT4jPFkYDEasw3ixrQNa4hHS2uY5zBm1uCBbJyENcQPrE56rsHrbQMNHC2MU",
  "key39": "YQ4AU7LE7XZ5sbtuhxU1RjJEMRrgbBDG9hiw4cvDEWS2yMAjs9y745MgrBVHeThaE7dtjfCY82ax9FiVTVewCeU",
  "key40": "jpVCMiUirv1NzH3gVLKxVJhgV3WTNp8LGyBZ6h8NFTj69TrBhUzyoLWcjD9d4FhfKC8JBCtcg7frNdWczbamLj3",
  "key41": "rsSWXgMLwexm1NA5kZ9Q2Q5XCNWe5txSNGqjRDXhAqsfthmW37WSNNezEekDFNn7QJhfW6Do9HJCYeeFZdU7UwW",
  "key42": "3B7kPBU2EMFmrLjMaC1Jf4ti7u1E9tgkaRAFxWxod7NnK1fRLBunnEgPk3QZFgWWoKBqoZXBGDig2LogxRP9Eyi9",
  "key43": "4shGUPupFFxPaDAgWfiMcPMbG7Gihfqboi2snMnERr6G5isfFFz4mN3qEHB6CBgoBSHLaB8M7LD4J3SX6Zx3NhP5",
  "key44": "4XieF2NnRV2ar97mfpQTmvTNTsyHZXZjSdwsauu2gqiFXc4TGedfELTd3zPnnDpyDQrzQJzuRoNTe2cJ4SWaUTZg",
  "key45": "3pjyteqwqRZMGca58kLMBvQPsiHRsXhUSYzYDZx3br3yQovGFoD682R2avdx4gMzcCES6tz52u2mqKqsqo3a7D3g",
  "key46": "5kj7TmxcyE9kJGpLBSTfHxBGjDhnmaBrVHagWMZ2YkzGBzMDa5LKGgBGkEdzHw6EUhA1TC7NanijiSLYwhMcYo71",
  "key47": "KUQDmpgckwR6nrw1AJ9qha9E3EQT73qYJuRgrAAp2C3cmVBFmFTdzgUeREt8Z4N4CXa48Dp5xxiSdMcHcfaCKfV",
  "key48": "FdW4KtUX2CxoNbnc7r5D5GBtdgwGznEQENdQJiyb69Coxhfw5VH2erHq5QfSSTxDMWE4S2zkAnnkBHTLcASjgye",
  "key49": "dLktqAem7dsBWhV9QsVB2XEvv7BkhZ3zeuhkXX9EZxCDsEXLUgaLaLe8Kcf8dPd4caE1ixhvcab1rU6StgNyVDy"
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
