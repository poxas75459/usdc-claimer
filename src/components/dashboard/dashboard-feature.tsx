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
    "5piThRpzxJbCZMbqKmaqgeYW9X47NowjgxCWfrzEBBajtDz6yK2wE3BoDgz6ihsqFQj3bEwHb8i2K9ouRJiFZhXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61s6bhRQpwCtifHSqavJioAYnHavNgw8XEM849UUS7TUJQJRo314Zo8bZ52NZBo8RMkuM38si8Cj2eF4a8b1Jy1Y",
  "key1": "2bCJhbGqW2WEiFUNSzR3L3mBVZsPLmRQGpunQhKRd5c5qhxEmsitNVrnJ7r4i6whoLuZ8oc4rcy2rAjDUaGiUtyn",
  "key2": "3avAWaYwBMxRvREzNiKugFEVpfK1jyv7z75VgBjs6Hy4DN2ZYgPZepWuBC8eDCXr9SvmUBF5FmFzaqbsK7FLcbh5",
  "key3": "3RFRyansYXsGBL1ritxNjGc4DG2WUTuKn8c2xm9rWWjzjCcB6FcLB6AbNPo2iQXvBGJwKvTQTPrpsqiXdJQsvhcL",
  "key4": "4D4zgw9DvUkyuUZAXXC7Lqwjk279bUDWiMUn62RobviHv1V7pSCw8NDdFDnEWkTMFBwXV7YivfBtN4Le7maTH1jK",
  "key5": "QPpRjBb2rrAkPuSJXrbgsRSrQyrp2d9bQ81YfezJwuavDxEmRPfksohHTadHsdpzDG8Zb2q48jwesZQdu9TdUML",
  "key6": "2sK52FYbBK1UsuzCuFbybD1Wwhanq8nmLBWkjfT8PB2xV46fma8QKKGkdjwrYL5zpBzPyFycW4QvbfCHL5qX3ceK",
  "key7": "57ex4iw3LXUrRE8jmMjJjNih8RAbTVEzKres3fzrtrEqJkxV6cJ7crR5Yi8GDuPd7CnNmETWuw8eg3Eix64Dc7rQ",
  "key8": "5Luz8e2wHs5rfPkqYXoViK63ZwgxqX3q6aGwx3kwMMB14V4M3ZsdAycLtMLafRZiyTD5XgjiBUTxCFRaZf2xnHo3",
  "key9": "2caMZve3dAnraFy3AN5yvYUYfEwqNZ1h9vvwZwf422FCz6YtNuSArv2riv1v1qgkYbTEZNxn6CdRycnfUnZDRMMH",
  "key10": "xjdxYi2jdxgvVSbbJJ9M6qxhwz2Fvb92xE6vY1bRHFFR3RxD24ose49UQ8kUrwfsCdWGWRs2Lbq4wMp4TsSxKwC",
  "key11": "4bn4djnJJr9NUK2phr2q8vgoQiHyWdFm735xVuVVupPrBceGF8FBmdwYZ7JM5LTd2fLd1hdb6qJkkWBZocXtAiv9",
  "key12": "5XYGk27xUUM6k1ij1UH79JrfgFVqr6yyp321TLf8FrFZGc4fBeJw2n5zkpbufiWkUUr1u5gXbzPsiMd48D9iRgCB",
  "key13": "4Yfs4dkCru1y8hAj2Nn9K79ERRac494eypgWTcVGR5qKHbFmZJp66PLhLJvy3bto6rQ41isRwdVFE7gmu4XFECo7",
  "key14": "2ytymD6KtrGY2rEbMP5eR4DXRER6Fznr9XL7qBP1VWh17XbqV8Gi84L9bjw7JQyn4CJTkjhjbbpDz88HJBZpfoZ6",
  "key15": "432Kiho8KqbDJv9HhJsFn6iZdsma716ptDhD6c8Y2VNj1zYmxiqPmoXhcxz45A5tpkFYDHPgL2SH95MpQeHLqcpw",
  "key16": "3fZ3LZsthcEPR58538LHFVMyownnN5S9Y1HMiawQKNq3QGhkqNDZ7oPyQDuqouKbHqqbCP34kTcAKQZGdFauuRGG",
  "key17": "34ezfvEaYes6xw5bzjL9gVB6ZtaYndorAJcvZXs9SNdRYPabRo533aFuZ2Chx9vCB6SQYJdBjL1GEhVJ4mcah5CR",
  "key18": "2aWxKyn6VBfVJMsbYTDfTK7MaM6b3wzyCNiFMbdvqVEunBAVpbAuU3jZv9Z1y9XK6E2sbUsv2EvwcQj3v62qKo3Y",
  "key19": "4ySJsEiMtfibgRePEXkdrhoVTGsxRMgLveJwBBafGYh1u7Jdj2JQgMyNUJtfYoPy6UDhLEfw2mh192Wd66JvREZ8",
  "key20": "5owXcRfYH6yVvTJyP8bUMChA7JUx2yb9tnygiZ7ThDaT1Kk762Dmdi9QtF11eFmNRf4eYzSbEjM4GR6m4jDjsSAB",
  "key21": "21xhAZaia9ZUFYZUrqsjSSrMfpnKtaptGVMJhdxfri6iij291Ltjetj2XEBDvxFwQ98yAPSCMTbrA8178EcgLSeM",
  "key22": "4Hm7qk4BfeoSoLnsmYswJVSymYZQKWs5VBEct3qZ7uCeMBM3ZYMcpWFNtFGc5BpufJsUXR1VGEvktN1qiKhzDVfP",
  "key23": "5iqvZA2DNTit9EADG348mZm4DmgWesy7XHXyXWqdSPFyQQM2SGuiy1uffqih8xDCRkTSxmBsxuGLHrjWSxjNLCYQ",
  "key24": "34fn94zg1Z6ndo4iVL49rf2p4tJ8Wqnv4fs7eEpzzTMARaJnTA26Ug1QeXmgzib8QK5ionBCGi6MX5yL98CotoTp",
  "key25": "5FNvNzmoGDR66bqhZkagHuzWULNu2uWq9ojdnwtvtMe33kUDRntv5BSfaFV7JXhvbVzGCuX4RXssp5xw9kYu7hJa",
  "key26": "4GDDT6UU1FFUDgp8qD4BbsFnRoQzAi8PQrh9sYMHPQxQzQJ58XARZSScqcPQPRnHH7cW8wAnHY8yZcdJ5kVgVqQ5",
  "key27": "64s3ZeZhq37gJ5xvdMWDob7DZLdJLjNFEVg2zvDtXqpNAJdb8ABEfUNtdLoPzqtWU7RneFcev8tgwG9wS51ArNsh",
  "key28": "622Jr8fCwoviJUbYHLaWiRJqL5X4busP8eDs3AG2ktLWeyvsKgqYXpgKQq5b8MH31WFA9jS1ias6xeBoFeuZmYmE",
  "key29": "2d4FFGiUc1qpa2VwHud7nwZzmrxtxHbyT2AedTNfS5nNhCFKCashad9cDboEUBhkbzie7jm1mTWu2t65tZvzaSi5"
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
