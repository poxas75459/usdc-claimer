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
    "48yAZvNhDzydm5cZTZCMwoq65Wk8c4VnZEeSCHQHvT7atKP2iEmonFa6DnYJ9mnRCs7JV7Etxi9w1z5tUcidUAjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yK8y5dNctjv7mBD3FN3nN69cH4D8Lb9ZQPPLcvKY83VVbVPjMmDAXgmxi9LBg1aoYbdm2EruSpvBTYNiWvMc9Xw",
  "key1": "4ccNvYSk4nTBFCtooXQpLA9z3aBTKF7AeCF8qiAFifQFLczepVRDLKgHABGQRWB9HbMnycYqbJXMPsrSboFerVev",
  "key2": "44rN1EsdQQRabAWxGEF8CJJfCQsKPmYfrX1bsieQuAZVpvMEGknZho4G6ygR5Mc6nddHVxLu4sbpRLQ2rSpQc9eB",
  "key3": "49wgAknoAvUZmw2snYJ6D35tMeVwWVPKjMXQiwqQdpJZeBLkGfms3A9XKJJHxrc9tBEKTYZaGynHBKWejouhzUKc",
  "key4": "33kFEYxzxHB9DecXfzPjjAE6ccgmHtnUSpeAQf29FLjiAExBFQf3rG8Bro8FayV5yXVY7TGro1Qf2gZ1HEPASPPu",
  "key5": "3Xh2b8cCivUTV1T9ntShT2eTbGuFmMBfDkNbpLC29UsKgwufxEHki8mzp1rYrhYiMNBAyCMYVGHrStB62jtSFSPL",
  "key6": "4S61qGLu48QRRzdG4R7v5QjFRqPEUgC6wPoFLyihXiUJXArauk3t3hJYod2QxHupcgKdzn7FbC56LUBRaeAvpqov",
  "key7": "3HWN98wFE5zmBiRQLPn2rT6mYYGL4gxFq2QFSJMeZh2hScVKw7CqLseVVNys6k9MVZBMo3H3sUZTcPZ3ywVBTtpg",
  "key8": "2PuhahSNDV1bFZZboNcSNNsHLNGNF76FmbNQcrQDnCqDvh3kapjFSVPneZts3E74bQBR34LbU7CAJs66GNQEVg1Z",
  "key9": "5o8NUqA2hwzyeJD7UMUf7DTVLFJQzzwLYzVJUeC26qiXJhpHD7jURPNnftUQE4dCjCEWXVFy7ZvwLv23wf3nZ27q",
  "key10": "3w971m3sRnokbrEDFvCXqF2sMnmgW1uUt4YwGEcxaFGSQ2frqakFUM8fy52ew4rzofQyLBJAFB34bxtyfvuiYA7b",
  "key11": "5L3TowZFd2Dm1RNbL4GJTt4TtL9P89HYY3yegMzKCTcvEJsFFncr8Z7YmcF9c6eB9NmjMfYtfjPoD2un6J8Mm1bg",
  "key12": "tDvpTdRMVsuMFnzbNrwHgAdmaa5sy54qpN5TnMC2YoaEgXdw8tWp5bKaMSxYTy1YQxWyt2ekyGcPp5Mkca48xi2",
  "key13": "577AuvEEpK5oTpFijCxEB2betyNuvow12ykjub5SyboauwRXSbp5tV3rBSd1TVzX36QnSwabrnEDed6Ycx2FQzoN",
  "key14": "2XDt36DWiNKt4g76smyqjXPR9AXyGB9Ju5PKm3int5iD2MH4iukkqo4gUFZRyi5oE69Z9wfC8sUXVVfTFTmyMgSu",
  "key15": "3o1ApQaUTuVycnGqxE6xvG4FFJwRe6FCoCUQJphKLd6CDxVsVqqD8KPLswmbbgFXJW4n4sPw3JgSbbs517goDuJi",
  "key16": "Ty1DUik36vHnNWb4xLCvKnz71MwdcJBQ71nvGMQyF8mbe1bSNwBjNC12HsT4AK8mbwzHvzZZKGPx3rgK3NAGU5d",
  "key17": "Nrny379wupwf8bh7KPDxyt5aHwWtvERKpvsPPK4THFPwRMTHQiqSSua21TxGruXk1VQvrDWyinTTL8LisKLS6nk",
  "key18": "4veBSceJwfhxzRhnFWPiPvdLpcx9FbdUQNony7jexP1i6aXvs6WURF4HeWFXfQFuxq2y2u6W9oCRw38wZkM6UFdR",
  "key19": "2tiLNqpeYpsT1vZ9uXbrp1CxWw6azS5nJyEbguPx2BHoV2ubuVgBABgxCA4TLRB3Am4twPFuMrdZAWUm9ciYdk7k",
  "key20": "3K86H56xGuS2cqgJWCjR9kto3uT6Hoicx9uFUmyAkc6rw3n34jCpfCnb3HaQ7odjBH114XQyF9wv7r5tBRLrHXnC",
  "key21": "3YkTbanL4Pesa8pWYJuS5q1aRabe7kPsj3fSNJrDWyeTDKNfmvVeRRYxh7wTe3B3Y3r7uvoXEmW5NjwVmfh2VrrD",
  "key22": "5irwu8p8dWwRkpvjcbLnDUisWVRtyu2Fh756A7begoPZEWDQ5fs8cjo8XzjrkM96JTokngeLzSC5AuvRSaX9Grma",
  "key23": "xuDrpQRZy4wnPNQLw1sUjjMVJ84tQuHGRVJDi28xbbTAQBSfHfeCnP9GFdHsmM4w3NQ4YKLNbJKuUe44WDKSVRt",
  "key24": "QnrLxRCrunjK9WUKLwQ5LwjLCSSj9rydfJKpA9WKZVMbuBCftgSXZRQjSH7jiDfPYS3bqveGhyJAKyRL4RFbUNX",
  "key25": "rpuLjbwvuYK9vFb46Jy6fn6QoQE4eo9bYfNRbcgdF2GmnzjkMKFSJwEP8tiw4DYdcVRxbmZYWXvokoEi8d1gavL",
  "key26": "2vvyvkbSy8oxdnT1SqD8vE2uW9vXDWRuk88tTeJetwXBuZXj3zMq9muk36qyANAJQRMDrnJKXq9nor75jikf8SZb",
  "key27": "4j9pb8pj6mFWQZ8FUkpBpakgNoHsJGEZ1aAqQoeKsK1JXcJJTUc5pAtAepMr7o2cccsuRa28cAahEgVaujtwd8cM",
  "key28": "44jtGMhaAjTyYLsKw5dFQ6QxWaEr8ts3A6eJrwjqUatsxACt9537Fsd1MfX8BvmKVM9htDfEVukFevbKUwMjPyLP",
  "key29": "5PPrEb5SCt3rCCUHYf8ndTxo8MCUmMTnSEuNkbp3poN8fxN1jqSpv2bgCD9ymJiUvmtoeRUBvttFA7vNMXW5RKnE",
  "key30": "5zpnJFag3mS1Y6zykpgJHMpEsSbVgizyECyLQqoBQ9AWvHYpgUEZxPE76UhBCdYC3J6otGKpGZfGLGDRtu7PkSks",
  "key31": "5UcVSoYURoEYAciRzd7mPTFeCqqM6SXK8uXUHHMpdcR9tXa7jgcDfkqVHqY7yahB7wanrBNT651BVrpiFosuGiXE",
  "key32": "tV6thpa4tLi6AiZuB4WtxGVLBdLhN5smTzovRiP9roZozURUcBPkNz7XxVR5b7GcyvidW3d3m9cZT4v9ucbg3gv",
  "key33": "5A98ExP7QWJT21N4q7TxNLyG6YGAvKYCxFXshhhjXLD1XbBBQW9MtnaFjMFC6mc8d9hy7oqf3PNmbRgTNyskRmsH"
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
