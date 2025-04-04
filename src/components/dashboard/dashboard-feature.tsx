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
    "3yK6KjuvjxRmdrg5L5E4Jb4oSqTRNYWZxfwaYNhsskZVmAbGK8AXKEKujqFFQatB8cgZ2Y9zQsjh7UuqojwcacLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBah1uqiFSHWYnwt84PjyBeDXypdwUR63npp5ipzNBNkiHfDSBbo2rwzfkPbrcVprydwV4tAa9GGfCMcecJFg5K",
  "key1": "3sho5S9x95M9M8kqeNrDFptxo5cby5S3itniFVqu99SesvwNZ1QdM78DZ7CUpjjCZVk7BHKv5qX5jkSjra1HgKux",
  "key2": "3jTwxRrzM4fim9iPi85QXyiFkhKxTNXCwAjRY2HzMtRX4WkDHzCLKnvcwiy5PbJCdu48mJjcH3r31NcGnqtUJQbR",
  "key3": "4pRM9hiqobCnLmqS1K8XtBBF6FJ41ZYDy3psZTork4LM16du7L8KM3Yqq4SedAygcpwJZZLnApnkLxtsZh7DocPX",
  "key4": "4G9cdqYd1bRHwnj39xgdaHZs3mWT839Zk5vBnsKkfNtSbZL7o85kNUe5g63LpMfY9VYvHWBXVzJ5Xyr1gjdQvncc",
  "key5": "2Jof1Uja4aHZRPikioTtH56ac8RJ6pEgm2jaBbTVyVm3RctJFMADAw4zFaCYJPAEAsJnJbqNEsK7567UAeExPJEN",
  "key6": "62WpjjZLPped7CCRe8bXJqitzA4tyG2AFkiM6CggNqZcNT7BdHeucx2o5uEzej3C1PsKvukauaFR2eKqDe9XC6Cn",
  "key7": "4tX2jJmUcgfDnowFeKa7kLpx4CAr5BR4rtdWyUmuxa4xUg89PHgXticA44ZcNB46WDXa5ibWLFBFRQGAWca64yjf",
  "key8": "rEKhphsTjSdGqsyxUG5xbTFZiCLX4T2b3wqwzB9mFFzKN5gqF47WXTQRCGrU97ibiF7M9RsdzbatmLtucxk5wPE",
  "key9": "2NAu7qkbmVoSyLhjywP4acMPQgiK96eyLmpzNc7rvzvi6xPDXB3yPVinmGdt9AJHMv4gUKTau7XS2xTtTNpxFgv9",
  "key10": "5uh5NgbPvotUzd3VcvmSC3iXw7SndjVV2MxjpgCmVgBUYUb8MokK7uUDe5pF5THXmJJbqGjT4aogCAo2Hxx5QXyX",
  "key11": "3fjw4hNERENqU5ykxw2dxt3moAU5CeY3kAWpDPHxLjyQBCDBwLTU4UXiLiQD3r5348dFVXGZpxm6Ec7bt8Jttnit",
  "key12": "LwkjmV4B9ZpPKW2Kf86WSgT7WV9reEAzjH4HzxEzR9dsmJE6qiL5XHroL4em6QXroAkFvJrBrhGUbcGkr1wC2Ao",
  "key13": "3JsK9QCwLs5t9F2ktvpEuEfn9p4AvWhSRXnPiYjjkpvnRcs2cRXgNQaNQkK4jW7a7JJFkD35cvisKPVnRFyQFfxY",
  "key14": "3ycHFdWGp28p1diVGXmm35w4wX86Dh4QyruLkQdhAY3kvcEXSMMTQ1mrg6ZE9Er3uc6H6Rza6PPBgEuhRQ821vfM",
  "key15": "2vQxif134EWbud9Rg4HeTkk7wiWenEE5HM64dsb9EYAntuFE91cYkxBg8vA4Mk6qkKFhuLAwjsuzTmYAoVwQcejB",
  "key16": "wwnWHikavw6Ahbmznnczt9JnrYwoTc4WubHwCMsgRnccoFwJRsdfEAkd6YqqMKcJ91dUJd6RoiKG9fvhckoPmJX",
  "key17": "22ZAZ2bhdjjnuiWdMK7s4F3md9nwkk7ti8KSpBBYRtN6nYXtEr3mQSxpv9mUbGJcQKZ6wmmMueK83bCo3qyhHbEm",
  "key18": "F7x7pVojVwXJD1dQtzjmj4jDakDTmR416bSnfAm52G2j9tXGnJRrwpk2ZVhCjFuazmytTdmZtCGEdAyCzwJ81nA",
  "key19": "nzeFqFGRno3Ns1oPyi5dkFdhQvhcwSbZLQCMTdoyFicyqCaDz4zgnEmz6B9NRWxpswMkCYAihZ2c3ji3PgmSczj",
  "key20": "4dN4d7k5J2x5uMY1XjGkvXKhewvXVpGDJLdhyvF1U2inz2tTVATYA3dGU6MMFBCopQhq3jcevLPDkrw4eogYMUZh",
  "key21": "4wR1FjvyQmQZWa1TrTakneEXkN2fFq7Urz4L2XiQweP2wCazpe2mAe7Ph2CrGwCv1dXaohpTjR6SdQXevQcoXgmk",
  "key22": "Dsqkzatf6Jrofi1Zs9Bs7FnSfsy8VwNijEEjjgS2N1dvoWJ17HY8obpxqy4SUMysYpmnuSqdouLMkdqqkKwiw2g",
  "key23": "29boEqi5mUBq5FUKJ67gDVY9eoGM7KbZkEgVXBkyaWpJ4ftamLvSBgaqKLctMVFjg6c8g1VPNU5JPzkq82pF7H1M",
  "key24": "523T3SgpHLRv7PQbxDe4nrV3hddtqvPu1ekRjwpvigu5XPG5TbWgTTcyAtTdndAe31iBs1UUgncvHGxpqiNAdPWf",
  "key25": "5cD2kPK7EwSxD42UBbv4STn15vjUjUWzTcqre6oQ9rLPtvAhDGiHiyB7SaKbpibvF4YDZUtjSNgBv2BWu4c6GnVT",
  "key26": "3vrt4geNhpS1LC9m4jHS7piWUsQmX8Z6LmFaNa34qz3bZTpty8i1bVJEHVhgMxsCdJJsTEnE5JDcShPtmC5azL9y"
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
