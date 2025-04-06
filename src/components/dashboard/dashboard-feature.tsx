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
    "2sSwP1pnnF524RFqZzKeehBwMuqQqV1Ln2JrWSD3q4PWMvbm3TiqvAaUHYHgQiexXdFcjG24uk6nPZmw3FBFh2k4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2em9tJwu55ecptoAoKTCVoTYVnLKGAcDBzaBn6YNiHLQfJ73PR1iVmhyw9zyemxSh1sriGC4mtYk6j8oxErxAAjc",
  "key1": "QaovFPEtqkW7EgAoocZaVM2rx6kMuYFoPG46JAN1DiKGEqeNPNjaukwyzf6nvARQnskdRnaWY2nQUcRqYp9ZpZX",
  "key2": "4vH8UWTeyLmi388L7jgaHeNQ7HFqzo32pK1QPzmeH3iWZoeA2sRcM5rSZyhazgCTJq87LpdYDAiCR13pFmoRqwnj",
  "key3": "4yg9Z2JohifuU7cD9W57aqWGTQMtTvqnqYTLK5MSZWT1e9upWdwp1HvdtUuSrhuFqYzDBiDhBiVGAkMdTxPhX3Pb",
  "key4": "3UVfjGEwk7rERisCUSmPDGQYNiySa16L4pnjwZ382NhBmMs594KMqN68h81qU6aCmGpvJmUUiFK38MhHQLhEDZMM",
  "key5": "2mPyMaJSV8ebFSELVZ1CsU1cGUzMiN3XdmVbDJ1UGGVqcmNJNYPhFg1spWycB9eZ7bqYYeBHL8zLXHJxoLVbPhQ4",
  "key6": "5Up3jsMnjUvjdpefGBQbbtv5QvPy7XEyNDdu8ArRG9mkx2DBxghnsrkSiCdbuDtSUNXh9KSRTr7CziPAUpASwu61",
  "key7": "4RqLSf8dg6kLWvc8ao868JXKioTsjuv1hGCGTAWwEp36DQTNSX6Ps7xtE97w6PtdohTF18Hd1Ly6UTUKkmvjKh98",
  "key8": "5j9MtPZZ5PmSURhMTxxAuhwqbrewyRXGQQ94sk9ivcnHBBPfndr4vrAYzQxCXhfYDRvciaGnPkzW3bkajvAhy2L9",
  "key9": "2pyMKFeQFBAL53dDD13HSRQ4RWYM2kjBNoo5KqfLqrNTb78ZTGvAtkKQxhSvtJpxQDXoUd88knLpiFYFdwvNe5zN",
  "key10": "3Zp3eAwmBar5ovWZGFnLEGFwHvAhG9ceuimSKGCuvDsQZEgQ3GE5BFBwMFFp6jUJALxL2Q3nQdJy9K3rztZ9FRRB",
  "key11": "2eMW14nP5tB6srEswm3prF4NXG93vUfXsa3Ze5JgGiRQtVcvGSizTPmKCd2MoPgF8VBjqSKh99qvmSkTLdaDFdXr",
  "key12": "2R5HvH7KwECW5TwFnvrxFGsK6J57uvcWPkm6P9SC2HZjztQ97F9xhyKB511cQ93x9WozVmmLmVgekZPh34E3Yzxn",
  "key13": "2dTQ7NTUTwxjDjMTYiTs8xVJmGo3AarpH1ViBLbT3Moi6E3RUuJ11hq67adwrHMNEc2u9cfEQA9BFDiXyZreLn2U",
  "key14": "TPwsYN5kCwEkJpBGcCzEy1ckRAqBP9zvDGVGZu4vS69Z6jikmCFnhkLJFKsnmkWBxuqEgZKtHU5R9vqbJwNH3QX",
  "key15": "3Fx9LFLNoG1PciBBAGTiYzi7fjnxenq4xfQW3KBkvGTL3P6dprX6A5CDjwMpHrM17GTShpZ9XYDEcZRvEZsyKJat",
  "key16": "as1PAZb4XzBfKmbxajZ4JindM97Zzhd9hjnWJ2r3m5ZK8tiSrn55RUswsgn9caZ8BXwR8btpCPf4JCGoQ7YQttM",
  "key17": "4ucfGHiixzAwkYtBh5frCnLRaturU2iGNWNDVmiNNsmZtfPt5WsCdwRQaN7y91r4KRVSF2eALF1XpStk2cMVitAi",
  "key18": "2AYtuAvTeEBNbqrCYt8aNHfha8Atw1GXYP9GvgZ3U38XzoGXnDJrLR6WJBLdUqk5zmyVH3YYeuxiKKSM13HFs4yW",
  "key19": "2QzgA5hzwq3YGWce9drTmz2BbFiVP3X4r9e54FM8KAT74X6rBumWNP5FUcjFwEMa3ksAXACeLJd2o6xjBawgJ7k4",
  "key20": "4dQC9d7sj9xGDgGkRxxvUK4eYmj5m3h9HrsCjvXtHj5YdrwoynHCXrJVwc6oBewhnQxTtzUiBfuVtfP4SEYqfSqy",
  "key21": "2cgG1AkpduxX9UtU3LmyxeidzVEJQHMh6zBVTajGBrACY4Ukyq5h6FkDkFV2pAF1fS6ozerPZtxfVwH2sLeCtHo",
  "key22": "FewyxwwGvHH5QeqxFsqtKi5aPXArE34YrtZ5VtgCksC4of4DGe24XEBYXM8SgPZFEW8BzakjEEYaruE4FENANKE",
  "key23": "2neAAvmEDf6i7h5UNdCa3SdpcscnPSvUSPiddmdRcpD261g3F2bSKHCXL7arTfXsf5sMioDZCsf1w2c5AtHQ4dZK",
  "key24": "2ERorP8VyPGMoqcVpuJQF9oJtmBc4x4pB1LgR852282gEedKxpYchh6innVNyxP4fmHB4zh7nArnYj5VQSTj4Pg4",
  "key25": "4PHKZiPHL5FGKtcq37hSPbwn7EV8EYybW1mJY6XHYZVqtsiAZoAfcrP6XQzrjZtuGhhKbhFYkvbi9gnxSNX3qhei",
  "key26": "zW1uPyZEa7cqKW9aq9Cpq9BUEGBxdoU24jHWmRz21caXHZrhkSZrtjAEhP4e6Uy7HrTy8Dzxb1uz8z27tMB3exe",
  "key27": "38gY2hbCnTPKCLMm7YSsQEH76NdnWDWvwvzezsLF8oacijiCgddLmxbs3LohWtBwV7xB8zsa26JTHXgCu752HR45",
  "key28": "61sLSzYoTNmMrAaJA7H676VjyvnDseSYMNZWRb976xS2o8VDF2qZWLVVpU1Nz2mhMWd9naGr4FLeeJxcnnigRB3d",
  "key29": "3T1zR4M8HKRuNLW1hCQ2jbiVrP3b6cxgzoWFX4v9zygHHwqjZRHX2JWBCj7BeUfePesyZzVL9fWTd3fPLCboaD7L",
  "key30": "27zsV2PdUeFNVETkMRDMoAirVQMVMwmzT8YqyTWoeFZSnMC8FTf1zBBJDWxK55o8xqCgAK2FjDhxAFzi6MzM5aCV",
  "key31": "428DDbWCsZB3obzcgz1fTDMisNKcF6zk2pNWrxWMijPpaRKemqN7Z3deDb4CRVLVtE6RC9LdW5Be1g27tUVXa83Q"
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
