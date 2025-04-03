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
    "2uqrwCmQB8PqV2uGLKWYho2EPDKNijnKeLaE9w4rmBu6BdBsTbcsvD2hUpmpUJMAz3KnXhZrzrDMd1wY2LxN9whk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddLXNCqnXNEvTtpLWC5VM18piK6hq9aAr14SWr31xyjWQ81T9NkoQwy3cTpKXfdvysxnXdC1ZSwu6hECukm4g5h",
  "key1": "3FA29dShXu6D7H6h4mgcQqpq7wsQ8VdhE6QfLVH1Mnj3DbPstp8tshBEmUk7owe8bjpQsCNAJ4Xn7jUvp8Tbakge",
  "key2": "4P1eqQrZC3riuqmNQTNpC8xo4PnE3AnW3y51vzDaypyJa3kEiiroY4vnmmAyEUCS7shNHqvCYpVYVZ8W42S3dK3H",
  "key3": "3x7nNBTt2VvEyMSSDcTnBfx7oCgTcz1Fd5r2rNjMtVu6WrFu7fiHVrVU4rE8MwNdGPJhDcPFwnMzsnnZLWHDBGBh",
  "key4": "4gNCFGbPrbFifdZJZnLsaTmsQKDCdVeLQbXMcA5BHBJoWyEUaadgbodDWvVhj7ESp2LFG6VYxsFjCD3L1pde9Du3",
  "key5": "dNEhwmQRiDjwvxUyGrRoazL8vpTTt2nuHechALQPrt4V1QL6tySwUK8xm5xDKxsXfGM3hsU59hubMid5WAnWRe3",
  "key6": "3Tas7eLXhGMzSXiAT2qND9rSVj6jusWLw7JxfNdy1iDp5RXkLCipQzGayyNzYj9dG6fLv7Lgr7jX6sNmTvcPYrXa",
  "key7": "47N3TS3bXNzrEPLKyM3LvUQr6knxjk35H7mpt1Cwc72JVybuzzva3tkQUc24dyCMk46m7aWs8S1xT6FddLbTuFRs",
  "key8": "5AUMGCfwc5qTxr1iNUDkQDXQPiHtAuX2wqyTsb67fYpwijhu4Q4L5yZCHH6RaLzSL47Mfj5zfLpmVbPNNH9odeo6",
  "key9": "mi6hJEqDDwuQTZfU4Z8anmoND77Fkruw46oeQRsskNa1XzYqqPe9XYrV5zABW8rJTbQyrvnrpmypysX5YpEAZrE",
  "key10": "5jBUPbUt3sSHS8JqaUXUnqGEf2UU5cvAJzqwBAChdBtuK3Gf2mCjzJuaDaLho2CjcqzxgGcWmGGUvAtMzqEvgwGH",
  "key11": "2NKjpvy2pax3ZApEDFLVSwx5y4RsH2rEGmU33eMwfGjPXzfsdUtwm6ef2nboNPvBMx48MhRWA3JjhRGVLSpcj6Z6",
  "key12": "ZJs2rnRG1VXyAY8X64BTLhCZG1n9FWnbJw8VJmem8E3fDQyPWYTbctcgAuJZLb3dFK1TJ3pjdqWnJER34sKsocM",
  "key13": "5YP2EfR2HzfG6E55grmLdt7hQM2cBEU4zZGchUqZQemrCf7LXVWcPWJPi7t98EhdPyrzHsCSGi9JZiF5apmzyZzP",
  "key14": "3WJEc4UtAa9jkQzq8vBgh1FeWs8SZ7TRMWmF2i6P463xHnqkRgoYRDxoEaK3fU7j2dppkCK2cBuNQ5Kjd4SFZZiP",
  "key15": "4hDb5CAX2EJse6wjS7Xjco5F8nNJcj4oEhzi2MXEirzG1aKQp5riBLL4kGkh7KnZWhAa1udsmSYnbx1dNYRzN1rW",
  "key16": "4r1WoDeDqH4xjXXc65qQUtYTgcFFFdQ7oakc7rtsDfMUd1tgNwTY3h5xseF726W5Fr64jYrNrEKRutk5DFthKZ8i",
  "key17": "3hMwmo6BzBou8Swnr6dze8gbjqna3xKY37TL7x9hhGwQQ3xqL2kb8rCgkkCJDPVA1yfRkSE9HwLSzBg1R4gCGxRi",
  "key18": "3J7mBwV2eRFH5Qyr5ktFi9vkMFrazoZvsXVvtQaotcWqVcD1orCRNLDczfKfokiXhTUocsS2PMeMQxDQciDCXXAB",
  "key19": "2wPRp9izyLVWzBe1Dp7SL8GYAMrc9z6JcDFAHh5XPvz7ekRth9XpSBfunpDND8NwtxC5LFLxW1GtPN4JEpetQvPS",
  "key20": "27TTM4DawY6X2WQ52fbGr5mU6cBL2hPqSzmpxtN8P2MnAnEJCNtvq6XrrbEX4rr7csy5LJJF62NSkdkHUee1kNFf",
  "key21": "5xGcC2PogMEQWkauF2o6d7G793RvRJvtyGADuh7k48P3iP9snptCsFb1ssKZndN9amyAoTxwZ9xarkK68vvxanxn",
  "key22": "4A7CCgWzTPncy3Pyhmxq4F4K43CH7PorzpbNoXGbmGrtBqEZbP2htGP3XTdhMLgwWwtwYbUi92rqSBbqsRKAneUw",
  "key23": "4mX2UzD6nGDukaHRLdNYE6YKSsirxmTc3HG9vmqQpipZHYX2Y4ZHg4cPtFoeFc99JXQX6RxxvjTgxyWFAArYfc18",
  "key24": "3hPr2rzW6pub5opTdsyLN811PMGy3HBtnYaLx1QKxN7PBuZiL4XYfi38wiBTKoqNwyikirPKL7DhWcJozc6w7zj3",
  "key25": "XQscXWbFcSC5aKNmF1K4jogdQ48ocDXi9JyfixV7W59r8LBy3DkWtmWfk6pyhduq7qaHmJauvz9AgCuMkC14NAt",
  "key26": "zoRVcxVZCTyUkwgsGnJAdGHBPXaNKeerBjeRtj6rkkfatC7H3kgo9PQq5sceefTDEx25Y8qkw9rxyuX3Vv45JC2",
  "key27": "2BEyQvT4T7Wda3hbGd6pkwV2nxT5SSXhqx4n1PTbEJafmXYJysewnuzGGNyuLvwooK1FacPDJCRTMLgLCPkEKvya",
  "key28": "3u2oxiityJnrnprijHT6fuUJASzh3SRZyvexftkhyuddxWHweLYZAduoW3q3N2XRChWQSZBCZR1BS5Mi5kf7wwKX",
  "key29": "2rMWw7jx6KMXvmxc8L58YBujkHG1SyHXAVuSASJHXRD7y31PgXg6SNcNdcq9P8HnLBfYMtezzAUbdB1CZgB32QDK",
  "key30": "551qi3vPqAedGx2tjv1xWWSPn3AA25FP14SVU952XAQ7h2ccecf83gsH4Bne8FJneAXgJonynrutHuoYgiiNkZkN",
  "key31": "udcrCsswU9t2RGGiFU9L2gcN4Vgfa98JWCEHfS4B8b7Sbom5mouxZWNVYTnjqeCLk587TyPYxEhhBcECvuYmMwq",
  "key32": "5WqQSGm61cbM39PEkRGKPsCgBpoKNfQJ6LeTUsuyv6xih52H7fh9W8UQLgk1q75TRmcR34zXPgY1jJSmT92zWmhz",
  "key33": "5ufA2nwMkWhhimkEMc7PnRCj22p2bJGkCyQaeGGGjandPssHAJtm2kbDGgfDa61vGBur6XVPV75LNAwNQ52Xbqnp",
  "key34": "3Yn5xjepZxqhesaEMukLFiPLSE62KtkGs6AMRZUamhy7PepvsAFJNWZqTaNgLUcPan8y6MQBFsMoJ3f31o7z2RVt",
  "key35": "4tuHiWocCaTstTchPAFGVhKg8dXDJVgDYUbawqGms9GWo17TQLQb1UnKRRHEr56arhCtpP7oWL5gknTPx64c9AVC",
  "key36": "QrYF9daFh3mBZVkZTM88zL7Q9jJEJWd7FXHpSZPkvyVbuWRcGvzr3ecD5Vnf9XFUWueNJvnGPjJ6fWb6APGJC3N",
  "key37": "3q599nvPzgr3yX6wbLmUDwwzYGATN1QREWVTvAbLwdPXkPrWZRLncrDLCt4QzjHPgWAMZu7urXbhsDLrUJYyrdiX",
  "key38": "65y4wVLeJEQZBQuEqwK1a678WVggRjVzLsrtDjYHSi1HbxSdarqkkVNEUHnAtrBRcTr8LgQW5WQhtYpSFkpeacH6"
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
