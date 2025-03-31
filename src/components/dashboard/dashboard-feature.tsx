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
    "2hFtTthrcgrC2Yx8wzjL33CfTwYJ2DwcHhe4n9LVaXzguVmXEhkcKbYQyR3aAzMnFA7LWx592d1ucXvoVvwNgNPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phW3rNGbBkbThykZoMJHhAjuzZNH9BQdcinjoKKySniJKvUcWsMCdSEteqMnbPMqJEfCD4c6UBmP7sWxGiAQg1",
  "key1": "5thqnSSHjuKJNUaKgzjzKj6odaFHJFdcfCJUwx6pZSWeF8KSR4EddTokLscWhtRrkhA4N6cKa56aRH6paUdQfFMD",
  "key2": "65coVEvGSZcguHwbs7Hj8W3zPkzEvexeWpYGfUr23CibKVP8ubW2CGSKAp8E5mtHpA99YuSfkScqkH6FiM1nsxpm",
  "key3": "3cas9rUWa4xyy8kxP8wYCpeLYDBRz2zUsF4EF2xwfiwjmj23bkQJeBixit2ktAHFfGABZqbXrJ7SeQ5Hp25FvzzZ",
  "key4": "3Rzj97gSFwsWCzxr667dmbUfiBwV28YhubdtZ4dpLCbMjotB3QkCmiY7RUMYLdQNUaYTnDPNzq71ZCg7hnHkpBN1",
  "key5": "1UdiygFBJgxQE3H2hPgfKae4tRL2cxS5tpwwFuVToV1viDTf3FXhtPSMey5HGQZkVdaeaVQdnZVjYLv5g1hAYfp",
  "key6": "5BSxnK1gKpe771a22WwGu1q3AiREPqKxkj5pQP1LmH23PmmnDWpusprR2oe4bv6jXVm3zhDAS8jYBt19QPnkmZML",
  "key7": "44zKTtgiizTuX9UM7EFcxRaHFqucNa7hsPzDCwSmEww6eAeXTdLxczbpC48MSVbp5ETQksRSEXj8VU7HhPQP1TXj",
  "key8": "2dF8fmZVoa4uYptuJgKup3vigH5bzibKVScVnVPrpgqLQBUvkUSc1sjA1cDhFiC5t2eNcXpxZrKpyzPpSVisRnSJ",
  "key9": "4dVE5rYKyJYsbmDcwg92sv7d9rPcNKpyZu42ec2FHFDw2wa6XZpkHp4VAzW8BY6vx2kmFBFD8wXYRmZRghExko79",
  "key10": "4kfCbDnRZupkPfDRrChcJ227yvrkTaJiVPd9Q2PXvwN1jWTSQnEUpP8v64iFuizUdEFYM2MvqpKfV3aA4ATyegxG",
  "key11": "3oLsTyE4dkFhF6KkbbNNX3N5deXFYZjj9ufnegH2e7beqtL95ZDxo1uuuQhSwzy2ZwDWCycEwpQj4G4Z1UzXXJvX",
  "key12": "4Z1J8pSr2J4KchswND3a1mjDKRuBNgAbSFHE5LuvH7YrmzrdCe9ePGw6zYVZPs5LpkapoF3YHNG2WwXiMJZeh7eD",
  "key13": "5RCJ1Mj6VPARDDcbgdMomEmd1sFmMTek8xPyKYohzR4yu3aohuN3mCafu35xVoHSTLY4g2YcYyy4JepgkqLhEsBP",
  "key14": "5WUFa2wAZNN53CU2fb1rABxeuDEc1qKmTvnxK77Gru447kC3qgbCiBBCTD2Yg2WeBNTMLGJ4xJjKqfnpRGufFxD3",
  "key15": "3BfyFDxZ2CQLpezrmZiUdDGnBFvFN85eAPtFWJWPVqbbYh6Yjr1hyDoUXwQRxpZUzNcydp8k71MtgiXKx1WzsrSA",
  "key16": "5UM3qH4pXSvhg59zsKkntqLCE1C4ddhjXSRK8VdixHQ2a1scvXqQa7g4mtBoE11eMVQitn4anZuQN1MBMu7uKVQx",
  "key17": "GUEnEq3NsRAf2ZrQvNuVstemfqRH36ttNFUvvMRbmKQzfUvo2zoNAoP2j6XBZydBhup3f1Gnk1JQGt1vXpgDuVH",
  "key18": "3yYhDhDcN9UZce4iSCFXqZT3GEj1HauoH65kbBHGCxkUzr7rvqWeLufh3ZRQuV3qBp7WMKFSUJ65wjfwxCdSvhRk",
  "key19": "5DxD7nZ4zPQyCaD9bvHNEhPZaiw5dQBBugq7qLbMbkekEDt1JMFpDJRk7VfS2TeKDPbFwYFWSb7qGphckEHoMA9M",
  "key20": "5RstSu21G7cR6KYyRvbvRPJUt6jijwdx1BSzSRdiX5X8dvN7xwyJUa5sPoMMhDXht6VNuVN18ZU6Sa2bCNyr94Hn",
  "key21": "5aBAVtUqhKvWZPcoBdbcfpq7oaNbtH1vU8CARWysEW7fM2tMePX8Tn4XCzFuFGJcRHW9imCYYDtTtA8Rvfs43QWf",
  "key22": "4FPHMQ4vU9TEBZQxd19CdU3TF7RgVhSmcXmxcZGYE5MooQQSuydDrnviuLVBJJKxBvLAeh9AHpKTcgiCqEAi3ZTV",
  "key23": "FLbW79Ccp1xe9uHYNcwqhRpmKT4oi2s4mMCmc7WBfTZEzFkXVrynz33wdWTCozURaaZfz8sxmW2bLPT5H6jdXd9",
  "key24": "5wh3TnfaYPnApGSXYW2gtJZF5D8M658jNFEezidAdM51ep1rNMesLnbvn7Jj6o7L7Qsf4Q75gNWjgBqA38nQT5tD",
  "key25": "BR5gRjVhrj1kTM1ba26jTNBytDzddC5vcQLQUSsXsoYMPJxyFVbpveYuf4F6eSNaSpKwmnqNYforHjEF5NnfYQc",
  "key26": "SoMNfJzDsMNifsAFosJPBx2zWvK2xi4ZqkoyWXgHDfd8iP68nbmQ2PXwuVh1aS6zJtSysTWXu4g8kPydAtQFJ7L",
  "key27": "57ybPvxDbhUvxhQKLFAmBqW9yfMkfXoedkqZ6jU8zivnGDrauV4n3cTYCkvY9dYupEh6Y1oqK6Wm6EhKYJA45mL9",
  "key28": "21WjfWEpS6Qgex8JNuDU61iKrxooQinvSD1AXmq4itmkVQrgW7QTEVourSeJ9MdnPDYMb3rvpxG9AXyNEUCT7fnA",
  "key29": "5RiogbookRAAPgB7bAPFEHSg9m3DB8tdGGsemz1VcJvK8c6ek8SZNcoCi1nh9z8gs2RsgGHtXFAL7vzHeykXaKcs",
  "key30": "5J3kKrGWGLwX16PozAYrXjk6sk2JgN3HkmeuUmrHLCvFNnzAfehsszVZZEgHdSn8tgXbCAzdnF1F29fLPi7BrVtJ",
  "key31": "cBTa2rgFvnvWw7EgxTHpZV9Fc5jjbYeagVYdHq6aUP6f5ieLfS9bw5Rjhi4SstWDUdkrbtJWtyCNjtWMM2Cah1k",
  "key32": "5gEonvMAw1La94U6dDWAYcUi5stTdNirhitoaCzsRaLPhyqcyxoQUZbYeAdZTkzWUsJdSB1wJYBsELScfjMNS3n3",
  "key33": "4tQMKyJZPYNGGWeUokVbxkNS8anQ1j9egCac2coEPfHjPsSMoTzPoSHGdjsVnP943iJPQzbzqndSSPSCuZTrpwuf",
  "key34": "2JchEbEqYP8piHUbjNGUa45UkZCzMDobdJFitBnhyKP3DxzrkZczA25s7gEuMEbrhyos2sCPUQE4hg6WpP448Vaf",
  "key35": "4CnqropFSPGsCZE1zZb2nw4vwmDcCu78MWv2Jz4eMnbcvqTthBfYVyGYoJCHQcW3betwXJSdhvRbJBgt8qEaT4RD",
  "key36": "WgT1htqv8oa7ivfS1ByuJaim6WetXdbvJzv6eLd2dr8BS8EY4uWZYnvQm3W8bJ597EPeVLCvoGwf4sPjpVy5aq3",
  "key37": "3WKCrjKiQtJJYJ32rUHANvUSL2cFK7okcS5yNvriXxacvcVthzpFcSYi7ZyvGsJWunqEpPkDD9wyWsXnGusrYaPY",
  "key38": "62F4b14Z8LpHonhjsudpaqA2ftyzTJxmj5JhsGHKZDEcV6mVRKhHnQsnMeisLc8zmTqxFQdWuME4xqNQagEPxcst",
  "key39": "3HGM2UsTsUU6jDbBLUTmUhpfAAQFv8mN29oHAzgB1s7NusZSjj5MymQ9DVxGezbBrJDHXBkBtv3GvgFokRcmYpAY",
  "key40": "3vfzwgwYbqkrfrk68DhZN3BWBPGUWgoN4TgnzFCqBr5LDQmRMJwHHjfKt7FZSGaUek9dvPSoeV7zifJ5JNhVY1SD",
  "key41": "64rU7z5vcHK8bgTGLrYVCpefxCHYWKQgtuyio2cBjmHkrDC6GuvtH1fVBiwX9UsxFT4MZQdcEeJi8toSAjBxGyE4",
  "key42": "3mPxwGRCsGKn9JjvpMgZWQLt6G3moyW4EJQCEBAiMGK9R1jC15sGw4VycasAzS3hbiac8Y4VQMQYnssEpJmHxLBP",
  "key43": "4ZSPRNM61cfQ2ok2nwvwjCth6xGGU29AdjX7rbU84L3KGWSED5bpfAnnvPEHg5qtdkjgZSKiFpGzFiBZb6Byk4hp",
  "key44": "3y5nfD2BnGYZNMttfhe7KoHqQjijTgT2Hf4AksSXaCndqWzfrRuuqN1UF1DWCx6jye3wBUj4f1G6QAwSzhDdRfT5",
  "key45": "2AD7FuVZkMaLfTEK8URrtA6mNYgFZtYwSL6UUkEQLQW7gPJ2qZMhJ2Jn9rJTm7JDki6xckSABRwwh7xYfYHXAzh3",
  "key46": "LBfBtVbUhbMhgNCXg6DfX7Wr7cYrSsW4sLR4cu3cxypqhcZv8AaEonumpiYiKnmtVkR2gRxHh4DWXXVViwdefkw"
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
