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
    "4H4YMJRTPwBT6MqF1DVZqgabvfWps8cEi1nB8rJSwR6Hwk95xrwHF2YeSNgiNt6oPhzN16Y7dyqHCrmRviEvfKpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YruAdGmgTUNBYbdVAkJa3UEqKN8ESV5mtCzxa8er5pdVMJp1HV7a6qy85vGgy75xD98ZEy8oFcs9kGEr4fjTnAQ",
  "key1": "57ifpuzJVczuysDJ3iW3RfsebujGSfch45wQ15A81wcU2cvS8KE8dcaQVm4o4ysibU7dwDZZRpo2tb7zEjWkmreg",
  "key2": "3iwkkc6Eyur6jHV8P8T7tFPp39gdshz9E76fxG5aXPKhdVabupvZJarLnr3CmLkuq8rJw5CHVD2NBLMXuavWLX7c",
  "key3": "5vr2C55ATnZ6twwRkCi2nEpaHQsDdDQTZmhFfKK1R6gvfNjDG1dvpE9fCgptxJsuhWdorLQ5qLJgVBKqgRh2eciu",
  "key4": "4xq5t3qPkcSkGqXFMb6NbYCvMktmvoR6pwgrtdHgAWvLqcjdbV1bMr6i2SkWZhB35x8iyQ3MZxyoLVA2PdpR9wtd",
  "key5": "4UPXWZQeta2VtSNRT9CePUjcm7ott4DBdrBT4c5yNS3HPnjpZ1aW5Ens1BKAKq4DbbPCa5VWkrRfRH6CFdhofQJs",
  "key6": "4xxsRh3DrF7b78XJQapVTqUZGakHtgQoCwnn5zEsZyCzGfWu5EqMDGzx413UnMvP7uKhPN7pR3iAtjZDXJhbaZox",
  "key7": "3bDR98MxmGruRg1cyk2jpei9fiBiyUkNzxdt3Jqj1Psy6DJ6HGM27QGCoKgv4JEpGuEi99TJPuPKvCEh37kPjLba",
  "key8": "4WSmFmSNa6pLmztXWS3Bvonh6dz8wuFWRZPA1vK99icbJfWS4Acm1b4AUZUrucfbE3bDW2TJ4CSxZ7Na6uen9Wtm",
  "key9": "5y3vmPPa3Z8wYsqY2SHqmcsgayLUprjvgGJuA3SpkrGpn5dW5M4sRJCGdJTSeHQkqQtXfBGtL7Y6yLpKC3fRaZCv",
  "key10": "2i5URieAaVoz2dS4b8o6vSX6t6sgzkYMezCBhCKz57EG3hUk8piVMCCxAUBC63py3LMhSnJwXEK6aMo69DxcJqnR",
  "key11": "3b8t9fR7vCFwHMucRfc2mDhQNTV9g3pDGfzQTZFEM1sq2WDawoNx3Z5ogpXvNnjHMZCXmYJL4XosfCakcTiYNVrg",
  "key12": "5C8iEwdHAVniXqxUHCTjooxyNxKCvkJ38ZEA2Kmg9sSGZoCNZFB19jz6DK2cLixBHAp4Cpr4BvtwaURNaHzPhavC",
  "key13": "XyVYQaPwQR2PME7Q16G9rcS8uzuoQk5Z3WWJoB4zgArqvNxGEpMUGmZ8v4e8EEDfqCXzsSUaJYYiq75PUf9msUk",
  "key14": "3kuPNGkRswiBXjFVnxcAwcLsQM7yAX9AsQQwoDCQFET36tucnBA62DPh9aJwJjZiAr7fJheM7GL9LasPSZbk1CRP",
  "key15": "baKqWx3VPicyBG3Y2m5LKx9L8uP2WaCXTD7X3VMSn5GwXEUjYW6nBUwZfsPa1x1ku57meBXSdzLNbZTrWhCTf8X",
  "key16": "5hUStzXSgAwGFqSxd64NyH9S39r4YiJUZawEvxSS5tWs4pm12PLy1WG3KYCYDMZ1bAtM2WyVAN4uGuQBzd3MtLGb",
  "key17": "4QmAVqvXCCHpn6EShsVfGiK8BTELSYaiuHsm7jzj227QCDUbyygKn3Qy7RCBaqCSSmi5nTpPq1FZM6LcJbTDo68G",
  "key18": "5jwsvPS2FCMv9PzpMPgz5HTHT12hLJeHVCx3Ua7FhJY9Pi4RFMbBjBd9J81epnbBPAGz96DWYBXqRe1bTm4tZJca",
  "key19": "5YT5T18GSngxq5U7TpF5VzJBiXcS1MpXsB45PHEtS9z4yBDaK7DE2qxqHaP9zd49FYceduoTd7c9qFCiiw6phbvs",
  "key20": "34rxSdjLwXcykJoDrFfk5RwSXtGWJrJjG4yELyd1kRbsjx5J6yNeTPmjsAeiiLj93jeAsQ3DSbieVmQ1mn5FQDTR",
  "key21": "4SneuZnRTedswVuJQBF3HPrboieuoknZeUcTqxun7cfLZEL9ebnxRMm1RWa5N2g2H1gtGBrRY5V4wFNZXYgHrEK1",
  "key22": "Ai9cBu5ruveyP9hZuM73DnPRjtxFseScQz79ZyqG8kjJCRthHcGgaQi7kjPGop2qKTbSV7SAELPD3Zhpmje4aRe",
  "key23": "S8uQosC82CfyPZnDUTerWft84gwkEQ93z74QMX3pMdmTMPmFFhggN3sAzdZteoyExsuGndruKPo943qC8K2GTy7",
  "key24": "RqoZDbHSz1Fzffxap5EbLxj1msVR22AcgBPVgt6oxu126m5zHaZ9fH7BAsjGuZhcfFdMX1EqdtNeQKNZxrfVKye",
  "key25": "3isvsmECphvKXkMbxV4Jv5Zdbi7wChYJCtrs3K36zCMHcAGZdpy7Yi5UfoaRCiFQ9eiPqGZz3CiiDttMqGBb1KDW",
  "key26": "4K5agRjcNmx7Q7TEDPZBW1gG6paDSFgXTuViiTRSzCygngw8wrTRYsAufuQn7qBBKx1fqvg5t5AfjvYve65rSdBj",
  "key27": "4GtT5htsvUmBLP7qxzor41pP2tpWKpYzrda5cJms2zedFhot8A13sG2dkrnFAoyaPotg2RNackkoDwvwAJDDbCAF",
  "key28": "dDqCLUigamokF7cXdjDVhGKzteFJGJnU54AFLGnudWCb4zj4qGp657UKYgR8BsgWbSKxa48jvaYEuHw9MUtSS8Z"
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
