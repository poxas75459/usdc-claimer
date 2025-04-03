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
    "9uH2pyBeodXUsxgZB7ChXysx3z5qMt1T3pvpJgDViwDduPdWfAVk9gv4pVQcmFPWYe9wPUa93XHhxG6ajKjDfFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49QPmzGapSqwFkv5C4UA3NbHPhd1Uo4MvF2fhCE6CxZAhLbXRQTbtsscdeVmEA6BP1unYc25cRcK1mVkBPR18EVn",
  "key1": "42WxAyjJnSmwKU21ZkjTSqpxbCtQe8aGxrnsepG2PZxAPS4qs9h4eQepF5LfstJKz1ghtwtDfna8YDs1iaJC4jxp",
  "key2": "4Rp8L9dFva71JLzKiWHTSyiUAD7Jcsvez2anXe8nvhq86nGQsrNwpWkvGeexjpuLsKF9BGTK1XBYLy74ezC3hNti",
  "key3": "2aWMdyzAjVAbNE29xqgZEfn8QXMJ4adVg99g1f99DvJwv5V2ZBYL8vGthuRbXrNFw53qCRS7D4ZL7mv8hgUo7qzs",
  "key4": "22hD3xUTZ6Pj6AzochrRwjvj4whHPuyPapdhcG21aA5DpcuwzpSv6KtHfKs11FXQaoZC4doEm9CqLL5pSJxi4MYF",
  "key5": "5URsZZ44NfAYq1ybSv88BaJKJWVh2m8skiYXpGNvuGAyBacL2EMH1kHcatAMR4oLU68aW5w8poWWfn8Un6RAB1Y2",
  "key6": "4GyyqRZu1kyNiVN3bpfJGQoqMgoEnsacn3dmCPgq7usq82rFNanBoiY6vWVi1UJe6SaDvBx8S2GeCgD3dpPVNN4L",
  "key7": "2SMgRu6NgCjxAdmSaneRCwbbU8QzzwUM4FMG47jYij3Cp6MEjVrAM6ijYqRjjRgPwmaMhzPMBhKxDVndzLn2w1U5",
  "key8": "4a4Zx5jbf3b28k881TaF1v3zKKCTtNhHDzCMBWb5pjjCTLoopaGAi6XusU4zmXP5MNjb8bTPya2jUjP8rWFiiHuN",
  "key9": "53ELScwzpCMaudmvrKYGG4AWVuj3G11zsDwStmEovZmTGrMQ1h3oTautVosJpMVqqvRYPMbeDdtB6wSP7ANjeV92",
  "key10": "4BdPBuc356cgmk95y8AKB8a4xArs4FPDpGgGhbPXSHHqT2vvXSShjnucfFqg11AXPxcd4rRnbk7TrBmAEoSYAAxj",
  "key11": "4UDpZcSYPekAsHMCnkCumKm1KoXmvh1Yo3BHdPN5fNT1vqiGHc2T8Dqp3KyEq4hUAmessuVbspsNyzYkoZaEp6ba",
  "key12": "5G7BYqqX9NMPtB5Q9gxzWWvTd7uA8AmySCwHNcn795kxjHCAaoP2LkzjLQ9bhwXhvpyUeLdfDfNjGbphFc1FKtUp",
  "key13": "2WFyZpv9ERE3KS9PmQqzRh2xa3H4oRnW5osvznAusa2tYVdpwLoPEzEwuxkQ1mJqPUkPGhKAjWoHuwA52WMv4zJ9",
  "key14": "5dx6bUrbC1ksQMoqC5L5S3QGiv347onW559zAAxximSJ5kMRaVAT6rWVXJieeF5C9cszkVZ8MUnPtm24esSmiPho",
  "key15": "4EJJdZSijfwDJk6A5pfvqDJkmRtKM2Q87CNZPvxebpzWGip9kpZ4NiY4c4QssCqrmx1LELY7Cjehn4rQpaCF6AKM",
  "key16": "5Aa1BSeB6dbmHj2sq5eRLDDYogTG8XSVwbd54aJp7kJ41CLXGSoLarZBCpzXuSXhi934UwXEWLkwipK1kN6281r",
  "key17": "xwjgMuQaJkGDTzuF5rjksQmxqPDQcT2b5kEVMSzxLAECutic3Ni3yQnNZ9vX14vP8VShKvjDznsDY3dPxbZvXK9",
  "key18": "GmNXUwqGCD7nKuuzypBWfB3N8WuMdYfKuGuob6FRqTM2pdJKh3DUsgo6nZChjUwCxezXmJJv7nwfCjNgspe4uiA",
  "key19": "4qruvUEjXy1FsDpp3B5TZ52theKeT5QMasRrgDCUtYeUhGUDveUvZXa6akoubwkhku4kfrqVnLsEveJMVXzrRKWE",
  "key20": "5eAcpZuVqbWYFdVwpNVz6uX6ftZxDuUqnbvtgpezymtGg6SuFTKELYMk99e5nKKzFyHY4gr1jH768PJjwC4DArki",
  "key21": "35ieVENPMMfp7cMMqznHSyZxZ4WHciVhTs9tvWcm3Sr1wwDFPTNM5anX54jng87dCMq46y6K4inWe2ua6NjR5N2i",
  "key22": "2ZzV4NGfW9FdkPW2TqZQTM9MTKF8aokmWrFjziAzoHuJ9FWZ6kUunQGwJqVLRqL86yxJCGjTyoNoNgU1T5wYoHFA",
  "key23": "4RdbGEsHaxuXi9q1cxgk7aLuhUy82ofktr136X8LqjcBBVYTBWopLF5XwEAmt2MXVvLwuwKt85Cn55ztBWxJ2xbR",
  "key24": "3m2NeLghojTXe6FxDEHj9CRoTkr3tPivfHhysMZnPnG2RtrPDoZB4sochwfb2XhbC7CXwSexBTsg6BFpWRmP7LS8",
  "key25": "21NXQViDKWqVLGzDVQs1788rWY2pFfLTxAaEskZYPErYf6qbRycotTF1pdSbcUFAYVbBaMrVCPNV42KvMoTGMPpD",
  "key26": "4u3yTw9CtNDYB9zUYL35Dx7togVMpQYSn5Cwdqw89A9TcVn1bvbsoxK6uAMt5X7oasDmeJoixEZU1QT9YrAd8P49",
  "key27": "3gSNz8w15a6FPN1Dconc36Vgk3BX3g14nXx5VaBRhzBPkf6iy7CJvQ53a5pbyBtRY9zXXgZXtifwDokJKy4pN8KH",
  "key28": "DAz8EWrZZyX7beKJytjAas8dCzo6TGkkQbh32GEKhJ4smJtzLj8g6cfCpknAANWy1iAvqEikqjNYnNDMt7Rv97A",
  "key29": "4NJ4k2A1YBrEieNCeY1vr56uKjo8YvgkjeEdMXBSp363CgePekdxEP66zrq9UUrGxrkNkpXsyAjbbn5pwZVV8n2C",
  "key30": "5BFzt7nb2smmHK15MxZRudfD5bViP5g8TVmC3LDArxwSTHUpGfQxSagWUVrWUZbVRfaJU9RHnQ2HMQh8BfGusr2M",
  "key31": "3RdwPAKtqqEDx5XsfKST6heXugUxTQ1knydewUFEyxcMK3a6rwR1sRoNHF96JWK6vvdEQt676RbKf91H6J48zufW",
  "key32": "21Af7cu4UBU5nCUmijyfMcboGh9aWEEeN6eQxYwYg9UxE3dq1hERiCBLaB32WNe5UU8xMELgJKZHS8CcKFSZebsA",
  "key33": "65GudwW3a38Do9cUMJmaAgpjzLRuBGwo3zvZGFk2GMWGsywETTEfvmiGrGqkHsQEfijG8NnNbxoBmFScmeaduVXs",
  "key34": "2AyoKpMArCrZJXe14AB7jEUoQkx8GMRm3zXfWHTTt2aC5szwosiSxMX52Ci32hdPyNoxP5JKds48Kis7agpYR9wi",
  "key35": "mMdN6wws7JMeM1RVNh3UGWZ8MHjj3kKsY8dzjrQLk3nniZFUB13ExqRZ31VxNrq9WRPHXCRkMjjAcqpDWdsEabm",
  "key36": "4rFCA9rigouPSsZ4w4xyhkmJ5MJzj65vztKp4N39LySPgvWjYZoE21eF5hb6rTEtX5XNETCtDB9SWd7A81yvM7Jj",
  "key37": "4cPRP2R6gbZxzfxmrjwE45W4snkQToxkTEYFVL6msNvqY6sJpZMWEQNhvKY7kzmgKzHwNV1Z3CxoJMV68ZE3xATB",
  "key38": "5MSwh4kvYTLF6MNZtMFN8SkR686BiBR3SYupWvnAfyFnuA3xMmjj2LPLsMxdvBtFqVn4ivjKN24B9vR9ZNRJkPoY",
  "key39": "3VQJJHC1TDzodferEWRhGt26H93M1QmFvYrAaxDBD55e7w5nsJd3iN21UP5efbwhajBVKaZgKbLEB1RvsH1PDsdP",
  "key40": "5rUQauadF1uPMV3nbWwQn2WCi4QcWZkhxN7W1vvgLrxmFPDKfd6kRNPSGS5sgUVzhCG92RTQECta1utkYk8srUpD",
  "key41": "4KGkgfFRCg8117Ln6Sd3mfiorrSph5DEEdCrv5H6HVViTyNwA6JYHYttW5ebBW9fXHPkewBKzeBXVDbgRNXe63vD",
  "key42": "5y7iuSYzLRjC8ebFU8guyKJ47X9RsMgS3H68Q4YFgb46XNUxaQAS3GTvqGUv48M4QvP3HT9qwCvGpMY2aEpdjrJS",
  "key43": "4TAkAR4VRQaPiS4QqigcNUdgcgnYZpRewoXkkihoAUc2wUtaz794PWW1ew91QQQSJejynSBuAJDpXjWvWJdmBLoj",
  "key44": "4USipMoRSijBUL7Wcq1Khzb5vG9KpyiThtyrERxeNah7Mzk6s93EofpSzsLixwiz2kx1UCRMVqK1Wu3KJcZgFNku",
  "key45": "4jr1VqDFUTM14XZgTB1xjmBzhBmqzv33L8aaZpLawnXaGF4QnXhewd28wVt8fW9V89S8e6go6nWrK4a34u63kw9K"
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
