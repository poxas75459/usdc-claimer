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
    "2n6hkxUMwBypEyMA5oF1bPE9L1ZzLtstethCMmLAzKMxcBLZKaS2xk3trqzrfR3x9SvtLfHcmJ1CWTu6PzDrtGcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oo7YLbjiZqcDMtFVoapQxzw9hKmhtHb8EVUWfrWtE38WBAqnYjPEK9bdsKSFDcHkbJmYBaZP3btWcbkmTHReUUx",
  "key1": "3AJgGZxYjJFuZ9TuGBgFZ7Knef1CVPE2bZRf6tbSV7uyiJAo4XBMfZGp1XprWRoS9Ma6tvZ82gEuL6anpDaqcaDL",
  "key2": "KrfK43euaPpdSr48PDTWkVRc7irovvGYLahY3cbkiBJMRAwiBybB9fbVD5uzqHioryYexUjsoGgecChq7b7dzPH",
  "key3": "3MMUtRsTJA4HXFDN6JDdgU8YGkgNjX7pnYxLWhgHmXhqkaBdy8KX6zYHQu1751FAbabsJTFcFxNuh4SaAGYftTKS",
  "key4": "3sgb2iVePdGwU7NbJvLqzJUhkyoh6VGxRs2urpfieASpoFxNMy8bbNf1Y2fATt4vohuwELiBHT6G43t7VkS9DuJc",
  "key5": "2CyBWJo1vWeYhxkWDLbr2XMXwp2dDAuauqjNsP8c3EFB3GfSMrLaFQ8mw4h4Q3AK7o3aw6dL24xBy4CKMqjPVmr1",
  "key6": "48cbfScWsQqrLcVhpWvok1ryYusnp1krbRviKjABVVoXeHyfZAmDNMNnpEwo5Ma3Qt89uzCTJvb5uPKFGWuAm3bQ",
  "key7": "sa5DPUQEUH8kcr6vvu15mhkoto5vLgsFJQepKm6uBeptHTDZ8AmcUU8WGBUAdDYK7wTeaxBkWHUR6U7JK97MBj1",
  "key8": "26JNHBiGgvtXLUnJehiK1JgWaUN7SNyWorJZkfB6Edh7gboZZre2YoxQNPm98X2x7bPac84Sfmi7P5NBk3hXrSDe",
  "key9": "3y5FJMjjyURcycWKMfpvFjhHTh121Lpx3ELqtFU86XXn8L1wdRAzDvmFYCty7bNPDE3o1JTDB7vcwhfWpG163e1V",
  "key10": "2susxi56Fykcc9nC99X5R7PhwXFZjZECKEL4X2HGykxFnPSFveUDeL1AkMHWwii9pvriT21or51v86YjvusFbhug",
  "key11": "25UofkpMVEwt6ndnFAXdV3pEQ1CqSnMSZcdgY1zryWwNEexAk39ZwQjT7e4JrTmLyaCSCNdvspQPjQmHCw3fs5TW",
  "key12": "3WeVsitD482B1vFoyP4DhaF4NzUGKQ11LDyHcwSonGhBXkJe2VgZy8AJ8DYsCxix3aUKkE71GnNFYh81VBMJZWWt",
  "key13": "2n9qSjmz6QdZ6AZzkhkGuBNmYHWMXoQm1PunFPun6YFRTSfJ61Yq7meZNeQvnZHosZkP5azGC7L2VL1mweLx1NYD",
  "key14": "42sX5mZfWLmanTYjiMmWEMj6ZyFJBKgKqdfGvw3ajAHCTwtpBdgQPTXeuQYfP9mxxdEXfgBts3xZvkxbpokiCYb2",
  "key15": "2KRcDxhGVfpEnfFwXesnRojssWDfeB1auKT28yarpoYtxBJsc8FvNWEJcyyx6k4aSQ6w32AW3pvKY423XTwWpnFV",
  "key16": "3edinyxhfXFkprgFryNwS25VEJCQzkYJY6XRPkumWsPuiXA8HFn7pN21ysFh3ucbnGAGEK4stBMd8teMJYyzKrbU",
  "key17": "5tCxwXbVjVFbLf41pDf6YnLWknAymfFykDKoad3GygafskdPdxcAbGysuc7g4XM4c3LwWYA2Z5tNbtjJQsVXtAX4",
  "key18": "3Q5ayUkrULrNL4odhZomtuz8nvRqVJ4rizqdd1HjopJMXB8JWVNjUL5eV9A9YLCChnDV68Lsuh4xGPT9mQRmMT1E",
  "key19": "B6G5msJmuLEweGRauKdMwWDXPGVRMH2RTjaXUFnXMXL2PWGzJNr3CRFJ7HmBNzbcitXsuCBev4CfE7M4o6FAKsB",
  "key20": "3jgQQZ6vMdmtqm9b7BGDWsavjej2jGr9xGdypNLCtVL2XM2fkdNQ56oBbitF22ERT8mhxuzhepNQVsmPpY1Axm4n",
  "key21": "4xw6yRbddksSDgSZXFRCjtKsGuN2K3D4QfL9azA6EGNSV4rQbHuqbmDFv7peXyb5jmjxd2tNNXJfexbB49KzS49H",
  "key22": "5khKLaXZZ2CK75DS8Ru4nbx75QkWudf1wT9f3tEvh77wz3WjLrVjUaTx89Vtjn9TmWKuJpAwUUoMhh6Dc5W1fSkM",
  "key23": "3LeiQS9yc5gpdnzJWrfN1ndSNFkHujk8j2DqxG8MsToaFj5Cg615UydcggjA2URnVqBsgXV6XShDchUzuXHi2sEH",
  "key24": "zSKRVaWxVWAMTYfEyD4HwvNRuctLVWdEFFr7KHh2hfz4TEVNF1bvz8835czLDBaSC8xp49ZoFS34UaP6vzVgZAj",
  "key25": "5if8fUAQvzxWgLK88yCrTFvsuLJwu977ukauTsEujM2GXEUBug4YHwuD5Z1YgmXZFoAs7JS3HewMg9bpHVQjB8Rn",
  "key26": "5gwzw5xQiY55yMCZCPvwx8N41bgKFJp1mjieHVWbt3wkZegEZzaUbqRajraSjNr4s3sa2J4ZaXQsDtJmBnu1Y4L",
  "key27": "3WnpBSNXdfmWZHdStkmDMJzhwNed3dMcatT2TsDxs7WD6XLaEcSgnUTTNwfnZLvsgzguLch6RU9WeKW25pjUvMzh",
  "key28": "3Qi2gkFbUAFkFAfN1Dx2RLcNZppEbET8ixMk2CCwevBg22rs3UDn6fFGeAJouv42Fbo3u55Eop9jEYtBeiRYkYpV",
  "key29": "2cuQFW5bUr8o3ZwZruGwsnSLdTYqN8JWSA5PDeCz9b1m6wLaNwqfaR6yM75kF2SyNXpRYrubtm9fNEugmmPnLrfX",
  "key30": "4Zp6beM2qqrPjmDX8BHMK2xogE1a9eraSAwXp6g2ivUhhvwMkkMkGaC6UiZpiPKEkmsvuQKferuupdygaoUqx3Kp",
  "key31": "4nCoz8HMtxv4xG74dkbrdeqX3ToD3sydVVy1uZoEKLi6KyTR4S3DRT8CNQ3kqYMdbgC7n38SUXoLXUBZn9YhVEzg",
  "key32": "2YPEm7PPcjz1NGZrcxUevNTjatFLYSiYCtFGrvTALeTGctjCB1y1Lw74bDwAEzi3dhE9ySGhwk6NGozuxH7dMb9c",
  "key33": "1QL47iUA9QKonupQbUbzw2LBWByTegXGaJvyaSHkDLpbDXfyXFu2jxunRCqR4KvtoVVopjXE6kKSgMonM7yXFta",
  "key34": "4g6X36zPJVp15QxCehHG3JWjxp47U3PnjrSoou2EaYtGqPxnCCai8EwNSLGq8ScLg3QBqGQkQRCMnYpZhMNDrKUd",
  "key35": "QePBYZyLd4ya7hJpkqYALRGbEJ1BjbqdGNr9PorQBeXKeDs3NNmiabdXYSU7ctDJLDwY5TVpjrzkqDwvPfsXH9m",
  "key36": "31LwthK32dPTGux4G8LS6w6sRuZLzREGUfoD7NUfYat51NgvjMR2iAejrGVmGwbrQALLThx9YpZSFecCoiJcWfpu",
  "key37": "2ZYD9XSzZshpbwGCRLjrYaLZRghStAG5NBz9sF9NmXd9nnxjfVAo5FeVgxRaBRKLY5TPVKWSuaqLHcaYV23ogrw5",
  "key38": "5xS4M32woSLXLw4MhKeKcF96KG87BH59Yunht12Fizmhtq2ggs4B63AVcvefyu9dbnFpuwzBBzdDmJxmyr8YocPD",
  "key39": "3sinXQZsWzzAc9sSKAemxmzrGVJnncMieCcER1f2NouwWJennJ7e6iHvzKHCpp7WGKookTNBrpD8fbUhp9ZPw968",
  "key40": "3sqHV3939b8nTbDrrqs5pN2tisppczf7QsXkANAttfvaneLQiRPQf5VEvnjWV99zsdidsab6ujMvhCbWZq3jZhaV"
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
