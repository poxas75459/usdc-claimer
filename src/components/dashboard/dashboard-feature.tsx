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
    "3sauVQHGP295pT9QVSWCfsXNKMixcJ4G4aaZYBPaD9oba3KjdmVK9vwfrqkN6rT2yLw1vat6z6oUo8JczWHkUUST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbY4te2YmyxbgMuBScLYrSdeqqk1jCfbhhF9H8zNr9qGYcqSio2X9z1SdMqVPHPBPRtLAi9FqmR391pJEeLqMxY",
  "key1": "3rp4gaJLMiGx7oJqrwZTzT48mmD4qxVZUtAUa6rnw4Sm6dih8pbSfpzAF38bLrCsn18XDeWzqXj8TxM8zHHFbcEs",
  "key2": "2nMeVgucPft5RWJPYMhNKiUz5AbmxUoZ1tzstR5abhV6QYd3JFYTy6MxJW5eP23ZD1WckCehJTwMMUVU5USKppEr",
  "key3": "3GmJXbf8bMdWHT9jYK2mb84g3McmH3kNXRwd77YxNt7EVnqE9fDXQPsHNgc8o7Xxt5zivcZ6mDu8nj3xcRUSzsXt",
  "key4": "3BXHpEZD1inQuosASwcFaGgTFxhMtZ5v1dsLeet4K2cJrLYCh9nqgoW5fMHyhnXkc4vXANQJFhxywovfydGnAd6E",
  "key5": "gUPBH7yCvaf2GPw6dwMPoePHQ5Uzj2ywukfi4AtYyREQnD8mdNiPimH4y4RBnyPZYgztnj3jndryoHccurgEsNT",
  "key6": "4znCUwC4wPvqxKdd3CowXHDKRs2yPtxJgSD1CD4mcnhypiat7GN45wLXppEo3aMYjeFLNEafodpbfQxatnnBBXL7",
  "key7": "4tixauL5VF3Tw1vfix2ni5g2DXbGqCuw9FsycgDCyx6nGRYXQg6vL4LFKUKmdYt7SsNAqbdTMUf5SX6LjB4DJLQY",
  "key8": "2ckoCRxNrTuDtBpouFfBSiNApj9xrMAt24cGTMqcssPY1z3giXFGn78GLRYceUF7aemybij32tvh9TgRoL2t4PuN",
  "key9": "4LBp4BdX9xFdcDvhfcfHvj2g8CxhHBsY3jMEPwGHzhLgvkirxTDKQan1BC7Cevm5GTsnzBXjxcPgxQ5LFDNLAhK1",
  "key10": "2THUXeE8R5Lao7Xi4KxsqMpfXsXZwVr19m7aq1ZbpwDzgVa2coCi95vvjzb65WzWwND7DfL2m3AEBM92YA3xuNeq",
  "key11": "4oMDCsqiZRU5G57w8FhRBX3yk9aWt2hnaR2GUWcThaCJnJJ96tB1SiNjFB5i27spM48B2mYSSDNaLzurF1XAuK61",
  "key12": "2pFMytD8z3bm8sjQY1sByoyqNbBufBXxV3sZuMHYWxge8GEKu5JhbZ2UVbuPKKSmJ5SAfE874SEhqzqYgNyCTRTF",
  "key13": "4VPjg3SA3su7QjLzksaYagoHWfHShMWSnxs6FCjyrneennzz8x8CnxvPAE2BujpRvj3fKXnUMNTdQbtd3nQ91wnE",
  "key14": "5w65czZqaB2n7mCbDwRxsrgt18Uqon726B5kJnhqVrbGyRoFMXsX4jbXFN6hoMLNWgmFvK2rW2htSoNKvev8q1oe",
  "key15": "5daiSBBCtSHWt4whqW24zdn6eCBpuftyQpodCxn6bnRg1RbNqpsT65QU1AatdtejXmXKvfvFtkAuw21Dz8rqQtCW",
  "key16": "4xusw6h64ko1iB6jU7gTwo4S7oo7mwfHGmDJU41BoTfTNgU7Aa3MnCTwG2WQRwZRxeWv1yRz2VKmAeReEMERfnGF",
  "key17": "5uQT6sGqm69dmeYNGqx7taKWwDAKiKc3mUXiC6g5wxEYCYPpqoVxeo1nydwVp2x1SdhJjkQWRrkGvXrSeBrHhwcR",
  "key18": "3JBwzM93XZU9EcGydzhPfoumQfSSE3k76u7GiEQHLSrvZRkZLtu13bZAbTn98jxxTrbLXfhMwg8LLYro4cnGvrR8",
  "key19": "31CfMNDr6TYkMUji9mS5cVMXy9f1a3u54GyZyLvaeHJN7Hy4zAC5ozZ5h7VvqfLDc3QejPkER9zpQixem8EJ1zk3",
  "key20": "7RryVKT3c7YFg7HcB525KpQPMGNtjQwxWo6eG5UPnQoVg3JBRWwj2j2o6Nfr3Gs7KAQutAJYEmHPh2q7ZaPeJh5",
  "key21": "4GGiE3dEK1gxw778c1Sb4FoAEvHW1dzqHzuxyegYHA6NHSekrfUDbLrSjGvmAzj2QmpV2TpGBpN4U68Di3LwfEX4",
  "key22": "53coW2VZreRyRua2doEMR29H6fXfqz8sRmPbvEy7wu1C8A8JidXMX5ujHHNBkQJAYkP2STxkNFC9LGTq6zgvKmHV",
  "key23": "fS9X9yvPoH5HPJAbXXPk3gdkyj88otznAhsneeaT6nvmK2bFaM3UyPzi9YLT7BvQev249HraJj2TqT5x8xQzzEw",
  "key24": "3WbjTq5kBQQRgdjTAGJ1zR6WBTULBDFq5UfGhW2ekx6hQf6EPomRJC8x5N6eSrQtNLwt2tvtFHkzPJFHMnUEPCLN",
  "key25": "25ncCvddUq2ButnUcUZ9smwSGTBPJT3rLAY3zs6JVCHD3JmmWoUTaS6xzgUv2mTk3Vvvi5wPvHSo23khYwy4xMv8",
  "key26": "2KNngaUCHKpDcoDnJgxN5P569qa6LdieGtoZ3fKgtRxsm5VLqhzx75GLx9pFBUEKHxki98Xo3sR6cfjwPQHXrhpc",
  "key27": "5J4MtXYgUtVGKSUQrfDwUN8pkUy3iPZ6k1x2SZdCcs1CVtsM1oV9aWLVQWdm8oXyBwaVhXoFx6B9oB6sRN2ueR2M",
  "key28": "3hyunEtoPbPKAFHU1xXGLHvcsA9U8Gca8iDTo54HjhUQAUgFD2WVjBmjX5ezceJcRsm2CQST59Jzxkp7BgYeVRGo",
  "key29": "4fR3E39SKv9VvXhGGsXv6Avtmq9r8L3dreVFTmFUKPocU34S9sNGTh6uDNMGaDbhTL8nVf44Xy2wovtxjsFvQEFP",
  "key30": "5rfo6AboZM6PUY17rUktmeaQ3YhgKPPJNs3UZwKuYsWvGa28Kpeh8vXfveQi5VEPPxZvmHarPvKwXJRaqG3MoD4H",
  "key31": "1242sFtZXZJrHUZBYepwM846NwMfBkdd7KUibraFBqiftY254ymNsAJHS8Jaq8WauPeB78F39gdSU6Z9uzkNKbgk"
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
