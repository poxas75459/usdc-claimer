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
    "5Pu3dAKKaE7kjcPxuFQypDtbRi5MpXeYWL9TgchRYLK8LjJUY4qRdtHFkS4WmUivAgimAJtVHxKNDn5Foxa1XjC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5zyFVyxXiUa9cDCFySUUddTzcv47oaVbp719uB6aSno1zQLfMML4ZiWnoAQTNJ6c6dc71kpgSehS8iubD2ubgK",
  "key1": "3r7tydvcvZY8GEEBZJGtwFugFKWAemuAbVikTDLKf9sXX8AD3vr1wRodtM57XPC3zLRkoAoMUGjcTuQY7ziw4j8A",
  "key2": "5TsU2FTwmChJFfmv7n58sy2ZRmTNPbxMGQA2EWSduQXgaFTHbvEH7p5QdfDv2RxNhtJzMnkTbgcw4er8wXwQ726y",
  "key3": "4vmVhSBpPH5EgPkXETCxHoKck49obYgJjARF9RfLZDiFo31oegQmVuokpPTmRJg63bJfvrZNgMbhUmggLQcVeZQ9",
  "key4": "665w1M2ZHqLmL37poHowCdak4cYta27Y26HP9N8QGXWek3WYCZYo756Fm7zsjfm58Su2QB7cjGAUNNo4bTAVXkhA",
  "key5": "3if4AoNN7hvUqqegAXA3UKS2axprMy8EJ6JNsg8g3n4P2sidjH3M1QX95U4nJNSkzmu4HYC4BJvNcHZAEEPtCzzo",
  "key6": "43Vo6kdgNaUR2c1jkc9jXsEZCystedpcG4DtdvnJT9Sf8ogucFwBX9rkXGRFMWFv7e58zUuJvoGtd4Rwee2GTwhz",
  "key7": "3nLKvgpQH2jvrLfgLudgEvrsU3Xku5N7WFFUUcRZR12W2N7HrSnJGzv2uFQWcekd1bsrrH2yZn7NocUyABaniWnx",
  "key8": "4AEohw2MP6iT6m3jTGt27yCKHUhYLL5Jb2U9bYARkZyPpF9DtE96umc8meAL9LiX1RaPAdybjnuiwTRrmJGVJ6ZU",
  "key9": "X1Zen252J9Qs16cN5wVobP1sXMitFwTabrvg5Bgv9Eb5LEWJXAmACaYeohXtN33CPMoEZoGZDA1wgu3QDBtZZkJ",
  "key10": "vm3owZqyXzZeNVSzuDknd7rweQu2qQhhEQADG9NcavQkpY2kkPvhqQmtzB1jAyKaeuMZTfVHwwxHsRns4hmypLh",
  "key11": "56ie3jhyjhdTBgD3jqvEXUwMurWayWgHLCe2xK64jsNEFBEwt2pXsaPAXD48Q1ddxJgVzjN89xhcEbvxi7J7nWGY",
  "key12": "3QteGCRrivMVaHMDf99ckdEdBDp57NqQYtFyo2asTZynzxuPdzbEB1hZCPKz4gLrZU5QGDmnbzpnRK75uamUhFuq",
  "key13": "3dWvSLWUxd6MBuXxvLKRn9qt9n4fGntdXkv54Ac8MabiUuwwuWToYXwiGSxNNQXbB22bJVhUjfxnoW6pdfZ99xRg",
  "key14": "31YQyrwiqXdsCFzssgsjy8wgciAbvEgEhunCyyEmnLNg9tFL6dzmhWiaXDof9waycqSsa6fMR9XNScuDPeEhQfqb",
  "key15": "5okjNThLXPrMbH5QnGX9XoBVxLShN1JJtAVqXpZ9q14M7VNYpUNSsKaPnr8ikrwTnHe1qpfx6bSz7vGZMiTb3A2w",
  "key16": "4fC34gmqQbLw9L3c4rwjQSHa3ZmtAVpExg1aSPRNPEimYngjxwUXPkjsmoxGqa8B1x4dTu3zwprmTccqLLH2Aq5K",
  "key17": "5sqPefB7UY57a6wiEWnnZL8oSeqEUqLPfubssjed8Lf7YWc1e1ejdu63FcSLpdEW8v9QAPjFby8Bwj7WBRudtaLs",
  "key18": "46UDaZiTX1MQnJQLjnDhjtMdK8PrqXRcMEajV9MBGYhRFymsmz3j1KmFTGJk6corNaydd6Bq8UfCdq7Lzi1PNh1f",
  "key19": "3M46w84vgwivWYZSEXbagxpRAoqCmuAu9BSxbi5TSSdwZ86om9tgPfUQZuFwRjW5s7DTsphMiFLFLF1YyPuSb6F1",
  "key20": "3MqxpozZwSyqqSpMx4DdkJGVqWg3ZGmT7U33sQf6iv7mkEeqszrL37hcgqD7NtcbcQmVviYCFKWzu9D4rn9JuJ6N",
  "key21": "3NLCUGUJJ2qzLpFUduTpQzje3dD21w1RWNxnX9ZLuVzD43cLvdYu5Gm6HdHB6rW5hREtnfynbDLFUB1ZtfQfy5Mj",
  "key22": "4TP7obLL4bBETHQkFEWz3M7ToKcC8nnLPeUkEQtVCTGzXHs3EWztr4dNEuYbmA19sHQ1zKdgNSSkE8cEtPLGTRPP",
  "key23": "Z2psgVT5yTtAEMxXACP1VbEdUhC5viiPgY7vGZBqfnGWb7BLxeDHqzsN7TCTHt5yqPwAbrKdFPXAQ3wnuznVi3r",
  "key24": "49u9NFDPUdn2KK1D1vpnK2yy3iwhrozW43v93YJmNjZR3Qh88Hb5fkY1bcSAG1wKmdt4DsZL33yextB7ndXeJQKP"
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
