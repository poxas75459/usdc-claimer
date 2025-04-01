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
    "2j8Qtsp7BCJiejxwWZYERRZRrec1msbtUJkNU98EyCWBMdDLX6Kpvmzf1PLdZxZmBB8zuDR5TbaBURPF4ppSKJzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZBCGXyMpP8P4HMGVWkdQmn8pJQEFgyX7XPE9ur9gDdwzYfrhCUaxCrjm5ywNmG3NfK7Jvo2hzcXwQk1Mh8pP7qx",
  "key1": "4cxuEWXfRFwyoXoSFbxXzGTwQ4HfjcaBV3xhsHkqZbKKov29nPUUFcFSXcKNTG9odxiafdZyRZcebWnuvFdLjGKz",
  "key2": "zkJ64Xwr9rXqYJ3xsJyScuN3K93tMKTjgSUm7zYjDNs5GtT1FVgAq6yG7AYbTRoDraNXH2d2CwXehVHKZkDai7Y",
  "key3": "5uXCSzAN7RppsKPo9stkjCxTrbS6xy5eCsTLtVHcHfiZozuu9qLk8PAZsM6fWWBFunCrGVWfdvFq3yXxy6vzxrrH",
  "key4": "3dqjKCP2AU2pSjKoNa83fAKFr4hxsKyiokrPNdUJ4rBu9p8ppezVjqK3bWui6efWiaNBroww3AAocFXmR1pPTTTE",
  "key5": "2a8dj7Fg3rhBM83awNP8NJvFLic4gYor4Cd4sppjCRv8kMKQ8V44V79x6Mip8T2FgfW2VRknwRRi8C9Aes9hjD6b",
  "key6": "vnWeeE2cBRrdbphfbUyHeSwxFehWqKPirSmsPxC8FcneWTGhfKKjtYAhAr8ZTYZSA7aW1oaoGsP8H8SdQTcQLoz",
  "key7": "2PSLJJhiC64swsNjZwT1NKvqfVpNJvbNWGGg7aHWubuzpeb9XfB5wp3k1syCgFRYqwVznzqvP7BT6hSqL5KVUcXK",
  "key8": "439RRfaz6sLztDX7Pfb3dyeGGz68r8XHqG2qcbmnvAd2D4w8iHU8jKfuHytGgrfc19uXMC6yJt8Tf2JLRBGTDid5",
  "key9": "bEX6nXD11jjxGRDmL5SQKwj2YfofNXp9YARmuFz5fAXMNjmYHbqwsG8GSCqrztphTk92Ay78WD6mZzKx7FCz44h",
  "key10": "5ZkbWSrEJtwAgcYntdWUQFfKGro2E72z2rB5PitvfsZMAeDhQTF8mpzNgUd5tF97vJxQ9uT2sMQxonpCHL6JwTUd",
  "key11": "2hugnrdAjAztERv1BR4gagaiv281jJPjoN6LB49541PEn3z3WxdvQgWFjSDzb6iGDW19jYM7B3ECBsrpKqycghgQ",
  "key12": "3NHxUz8SGqQbGVC3aakmth2db5siFe4wk3RSdg7KAJDfvbKT57U15fdd4CcoUyH5ozizfebfajuLsFr1qk27mykA",
  "key13": "3w8XpMkSNFQAvskak8gekd117MxeYzvKuteW5jMvtYFwKjVmQy5vK4AUB2XDxDrncG91gAJ7iWJsb9wE3msQwVBi",
  "key14": "h7YVavh3YKGhEgitYuVSTcq89qE6oFBGH588vUfPdATZGAewrDuTsCnkAUzXJgnYP9FPcm4wPvmydv5uKiddXf4",
  "key15": "5r6GHBciNGx7dGmodELYPNNqL2HP2Q9iWBq9d5P81W4JygP2h5hKdf42AaZVZpLNKNfp846Sd1AvZRjj4JnMpJT3",
  "key16": "41FqSf3u8EumukKRNSJ7C42rsSahYhL3piBJThmyFBM9P5wrnWYGF1e1qVkPS4UhgXfF1zTaHg2dTeapeVNUTysb",
  "key17": "5JzZjaH1aUDHxmFANwhamFDnhWSUHGo4X5wvj3LDzHYw4ZbL6KdRbjgNeK6SQpSASiELne8cdtLSfBZiwtyXr4Gw",
  "key18": "2MTqAbjYixbwg5gnReQXCCL29c2py1P9mJAZpm8dm5gCmpxcog5WmW365ytxB2ihGoZxpGQyuUFAZABTfCTogbPU",
  "key19": "4jYdGLA1y71SxubgkaJ1nM7ukXjzT7p2xoxkyKUGD6Roo2gxbHoTcBRtUTLJSULW2ytcrRcdPmgXtj1C38oDBKrT",
  "key20": "5SuH9TDxV78j12CqUbQPkA75tUDfQgayedYzVCT6LCAYty17muDuo6rR7yJWNKaitjtAfqhuA63vx8TnTKGpj6gY",
  "key21": "JS4oR8SXPwdFycCR8Z3kF1w7W2bYgAuRbYDE5BwRaDANMTXNr6MmdxDaQc89SC4t74wm5J2xjQSSFCNRkNbTpcv",
  "key22": "9Jy6cgvm2ZGtyxpgsqfo3U6XwsjnhS5nmT2FLCkkeaRty7kMh8BxiiAdAYMihPgqexRrW9SCeHUkdaeASEMctu9",
  "key23": "644pJkM6vzkomYxCHaYNYbbiP4Jik9Pei61ctM8vSGrF3GuonKHF7FtvzUcruTFpH56gGeuF2Jntue9FFg2Wh45N",
  "key24": "vfWvvdEiHQLiG4Dbi4qaRLxKsTeevZXmkcdvY4GumnZT6wNp66XpQcTVUXF4MgSm6yQkewN88zZAS5PAxUucwmH",
  "key25": "5p1KNCPsUqiu8WUR2qMysQ9RuDECCxEiB8zdKi38dZtfqu6aQ8UamKhdBuCmX8EZ7EhotED4EY85DkGECWvZ71de",
  "key26": "6A8Ld4QXz27X9bnHjoEuXz83ztxfdSWg5YNQ25Bmx5kQf9Ab4cQTYXpbCyhXr3fR4S5xtsFAo225Bt7MkxVAbMq",
  "key27": "3dve6TVhoFfueLJhyrt3QFqLWsAeSjTe2T8Umsb6wNztKF4BkumbqK4znDcB2JssEEcHFgHEBE9kXEKdmUeBaffK",
  "key28": "6FY9CEV6DmwuEjLW24qqptypHwJteTEMuW71C34bQw3NY2xjMM4sAdrdVmvaqMcPYqhCgB1WosC1YsK6e5mnaoq"
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
