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
    "4kwJaN36n2vpJZYY59zZYsf27b36M5zZDuKezwt52vyw2qfopdcGzFYmzQYHRnvxcSYJWUsfTdEwwZVoeqQ2a2bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzmA2t5YiW2LLkugbrZPd1PUiWNZMPX4jpFiEdutWUz88Qm5nEcJ52GhPQZHX97WiHhQw1XNbvApCBFr2pJUyEk",
  "key1": "YzFr6Rw1H31yxaDZAnnVzCi2EcnWWhhiqydNKUW4YVwLwNKEm6fvbqdC3ERwJc73yyLqe92pjxKPjWa4LWAFHYD",
  "key2": "56VyNkdxa2m92dpXrAiGFsvZmFEopw4oXNJPU5YHDxCe1xgT9A2ne83fAPiWtjYTiAmxLJU62eUVLeidgHxLyzDV",
  "key3": "2XqseyWFZpfx1SCEofMFLccrV5QWQTGATqrGQYkEQeBgWv6pvPA4BB2TFvYmbkG8LJkSUZduifubknLdXpXL4CHJ",
  "key4": "4prokyyRH5fyFBo1fZJLbdz4zrscjnbVDeBUrLCVCWihAVYkY2fHuH5o96BSkBRHbDScNsoBMuNtMjfjgM1GTxsB",
  "key5": "5oC3tq1pPrGbJZ6MD2yCv4ou8Xj4w6qU7x39Lutmgh7bijDzBPYoLfj7abk7S1U4Pze4JhYvhv241NWMo34tqVvy",
  "key6": "M92W6SF1sdR64cZ9KjwM2tTqbcHRaVU54ox3dRcrgiB2Sjk5K5HRL3eUW8HnMtQsT99rZxGQWegEeuj8uqzcTAv",
  "key7": "37AmLnnujcWwyktmb3t7iotwfRgXCELrNadz5U1q59Uzku7FuLiswB2T1w1wR7uQckhx36jo4JBd72y5mZopH3tc",
  "key8": "BkcBCRyysVHhYqUTeJVxe3WcFApTJK8KRHY4JNuTmq57KYr4SPTrhKzBhqXpAZi9hZbUpGvss45BNocvafBrrGm",
  "key9": "5FahB7k79aBwcFjByMMd9RgsmrwEdi42ZFW9BNnPWY2BHgqciFgvn6HDphzqfKmcQAPJPP5NGebTFPgGSNUoHawM",
  "key10": "2TphAu7zggg35GLfisXgQKhAhvuV5H4rsukeBNrGZqibgUJR3pFByLnKu2CUsyRoQevjUD7T3SqjAcgh8ezquUGx",
  "key11": "29DGMu4reR1iiXumMr7Y3YqU8SDzA6PCFtc419ACmm9bewHw6qC8sBWTY6724p18cAnrZA1yKQTfVNMMUYu5J1uw",
  "key12": "5vdA4J44qsaMDMCwfk4W6VcjZ4bmwVEG9sToycxmENkD34SrCpdophc85aXb7BiPExGj9VA45aj9zfXHLZjFNXAo",
  "key13": "kzG4bGJKfJS1xjqbtFHnh8vtHC1HXizqRSDthaYHRLirPNjQ1wAnmSdTnfgYCg5wEmQkyi9KBHpyPUMwVq7h8CN",
  "key14": "24MPZj3gvhvTbAuNftakzBsgTcv2VS7xNPazicXawu6776syWsZb9P9ApUWJEytyL9w1nJv1UydzW6CKtbGmNVoW",
  "key15": "3s4iCYCwJNhmyHXj5Aorrio4eTxzejvE8c3a3tkdNTp22Mwbmqk75KN6PT459jgnb3dJ1pjRAg9RowiGaqKi5KGF",
  "key16": "33ER6DcE6rQDvY8pN9KV3SFAvbSAtJ3XwjN6RhbXeqCVAbgJptmQYDyjNWUG7i2oVP1eno8fF9R3RceQ3gQCwBxU",
  "key17": "5k5c5mZv1RwoyishsdhDKPvi5X4fbropwoubiUxjHK4B5GVjcutQFbeU7R9NcGBp2vT98sRiSJDznbjh7hKfZWdS",
  "key18": "4xFkLygHAh34tB1eJyC1No1yvLgYWMp1xtnPR7YSv9xYLnnk83zkZMdvmcCLJdbHbwa6vqh7ULGDiLZNmsTWaBt4",
  "key19": "2RBkU9bwjxZV5yA1hXob6FjMwU1bmK4TJWTGswJtrFHodcBXjXDoeHCWkMRC415NaViGRvW91SDpoTN5it79zwVz",
  "key20": "2nr7KEJz6jqaFUfapMRnFknx4t8pwtQxuWHGFLVmYCpVKUerLZVGFhdVEwDGFGGtxz9L3j2Z8SXAxU7pGPJDfwZe",
  "key21": "4CpmaQv2WaQExSYuvfhdoAQC2iTES5x759c3NCY4fh4XMFZ9boQQ8f1MRP6NoDh74Sp6mV4weicpvsJvP6hTXddj",
  "key22": "ggwxpgsQVBj5Lf1zyMwdYrRzkaf9nsFuAzM8sUb1eBtiwnYexfs6GWr6rZ2YxcHDUPDM7TkYD2gCAmAUnf3n8ZH",
  "key23": "gfN5qHsimtVSQKp8w7cAdGUNRxAhPVY4cvp6cMhuC5PYi5v9veUzJs1d6GTMTJproiwBM8xTjwLjAndZc8igEbK",
  "key24": "46nCRBLzZrS1i2QaGYrXZX14gWDyzL1H1vYo6149TZKKvah3drsvMNLC757fFHDu4YAQnJnTCbGWjz3sHAjtzNB1",
  "key25": "64TF5SADZu5Aw1X3zGoHfUZSbRyU8oqVunTzr22aeD77mtMp7NcvKVewrtGWjftvJaMyAmQUrUZGmMx2yEKoMJoA",
  "key26": "FRvg4mTN5QgM733pn2nAxtKma9Xxq5i29ZCztsUmfWkK7ifquQoyUqRYoutCFx8ZeTTaeBLYNU2ziDHQZGb7NMC",
  "key27": "5rc59cZrTA7fmGgKjUSEZUvGigjETnJq8A2gAUGQ3LCfEpqYws1YKfsFrX7Gyd97LaGy6W7rKV3JmSLBXnTEU4nf",
  "key28": "4V9zNp2Rqg3rkgVAQ9wLicGQ4tmQoJxnz4jXQCKeTDFyGncu8sb8EpDhPAprUq9PqWnJb1mePfrMV3CRzvRiqP2L",
  "key29": "4sPhKGyLVR3JMsWu5CZufnjj7g3wBDpdt59dvYdMA8c3HvsscKbZmbMLE8Mr8St3JjytYkvDEPA8QWmrq2ahNF1H",
  "key30": "67Lb9xCEDr3ER5S3afJAWRpgCCGSBS4Gt5amv3L1MZwthTRuYVDufyyATSMwyvZd41fWx5bkmm5CmLBrM8EtqKhM",
  "key31": "EGkmZ9egkMXyLcMi19e8Vu7rgxzHdPViBH1zKRuHdavvTRes2xz1yXq9MJXAZTRc5YW3PgWHKrgEp82UMppP75a",
  "key32": "2SJdz1dDmzUbsHXbfw2U9kT2CWpWTFY3xdJSMG6TydqpKfWtF2ixPSfmP7iKDdAboKx5UernVcKTrkRKCGpc4HmG",
  "key33": "44DeBkPRgHdiEcEAoaaKkUeGf1tYZHE8najP6jd9zgLz13VHVKRevznVjNEtA5MmEm9rBWXYwnwJ8gP6hhjRLYTq",
  "key34": "BoCccAeRMsZooaE7F2RC6GgpgteAzcdEb6VDzanU5sb5EC7md3SwQzNXDQgvLLVWxAdsBpZP14erzqffJUMoRTj",
  "key35": "3SUR33RNxam3f9tfETfeFfMoGv7Fk5HpzvAd8rvR2eGRwY5Kr1Fm3ZM1orR6xcuWaQg7pq6Z4Cx3WsmRBAq5Z6W4",
  "key36": "3cZUvtDC3BuZEo3igz86sUUb9JAM5gUbcwh8Po34E8xFBmy73c24PXuGh2RbsMsu6iGfSQoRMnWVG2DmHyBLYBVN",
  "key37": "3N5LFgiCQEqmBpVsrDU8KGjkwox8Hpaav8nnftWr3ExBpbWMX9XNzDRegAgwHH7KsHpyvtfJ6b1k18rv2Q6T84fe",
  "key38": "5UJUCCP1KVY3yLviDChn9TYaFyZkVW4r9b634hcJ1tbfUNJB3J7qLSi3A12GUwqV5dHYZHBcM1HFUy6Y8UjfuLrr",
  "key39": "JB2xDqoRReir7N9yxU4kC3ajVHewRRhScGxm2TKR2yFsXNA9ycnc66NGnjAA6cPFXitVqZd6r9XUvsnz1LC1ayu",
  "key40": "2Kvz1VvGWMp83Xdg4rhTDZmQ1bMvjkgnzEAhYXEUzq51UHvbgcaJffvPhmFGV3AW8uHESNri33Qtq54psxX4PWdw",
  "key41": "3e6cGA23pWbLRgULrFUBGhidqktreA4ktFh1vr7UBMNnDYH6Sxs4xSg6rJontKUvQHuAk8TxcLQs81eQkRUV2fx8",
  "key42": "2TBs5ugq8LRx2xqaE2BzyexJ43xuY4SCZuQ2aw46Vmq5VXJnPvMDenvjjmUyNH17sjs9cGuQLGkkcKA117pbuBPh"
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
