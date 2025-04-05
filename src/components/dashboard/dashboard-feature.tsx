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
    "2WjdoN7kdUyZtx7sMH4NXNHVtoFRyBzGLs3nWRPaDmbw7AFr2fugfo38vn3VTFMgNodTVh998pfD8kqci8hTRZhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYVkyq9srVJ2dZUWW3et5FpHVtS4birRnoYbJJrZEvHoYAZm8TPqYRxK9dMmTzkAm73snw73Sp5dNEkG7Vm97pL",
  "key1": "3tUgH2yj7Pds535q7PdTgEiG5zdeppiWdixqnykdJVBbUUdMLDikhy8rFEi8EZj7ykRG7TUMMo2yWXuWosjmvufa",
  "key2": "WWuafaS2oFq2TCipGMNrpnnmk5VVPPuTUDmM7EXNcNTbEXWrL8EeeQBX1P3DbtzuL72rYpwgg9BVo5aTB8jKsbZ",
  "key3": "416yCMqhP5GDv35Dd5UXtYWCSEuRmgF9mHdn72KZtDt8sH2b8h9uNrQVWrXNBrGp33tJMPBRXGjHQwu8Ja3KyPpH",
  "key4": "127x44JM84pWPahrNH4ca7mYcjVUQD1wsEhoLddqBtk6KRf1WcjgyPJY84rmzph2ZnHpxj668RRfRsDknh7cSMrW",
  "key5": "4gbVMn9nKYP4NR4VBRScSKwXPVhTaZJg3tAyQ4Y7cdLXocVDsLJUtE4Fgw7vneKoNZbuBkys5QgVqPZCirBeps9s",
  "key6": "2Sp2UzTTL1MARz2WWGJLzx1DiJpkiyjqTH34piGZrqk9wkSw9a3QSQnfcNuHdFqQVLSuBT1aaeidYBQmyvB1dP33",
  "key7": "292XZdTZtX5hpaF1xJqhVTE7Diyf4LnXTQeB93SGHj2HVMYso3pyDPjuYk8fPsNzH3TwLoew3HxN9zStjZQ1W82L",
  "key8": "3kQnvBK4MpwasK6EAkJAdi9UyRNAK7iGBdGiKb7g2Yj7R3b76sxiyNV1riATJxFgY7BuxWLWJ4JmaGfRH8yu5cBs",
  "key9": "3RAw18ZToxagr6TFdtSbP3DsMCiX1rTLC83w9dnx2QRbXJz5ZMw86k5xSPSvvDfyThSXwCeGg1cGPSCpyNsc7sN2",
  "key10": "5RHwivJxgns3DEHyC2f4tK5VMogAb8cZmvtzavJjztDnWFv13UPfceXyyPRV4bmrAQ9sC9sMwgxedXUfAdtxauoP",
  "key11": "3idxKVgoXnUhWL1Zhj1roj4STEJcAX2s4xhw5orWp9JrV6N5WC1whYg7cK3UVWsrqro87ye7U5J5MmRBTZuxWTVU",
  "key12": "fRTDMFUQvnz69VBUkhapjtgnTkChErz889N8SB6Uo66Rx1S7pQzmJHhGVCoW6LvN2KS76v7BkVSdj9UhtRrDW9P",
  "key13": "25KDaJfdDrivCqzxCeqEwvaqxCSrwcPNrkPRXjy3CFCBq8T3UrNiKuZoM5smLebNnbQJvnCWfg6Zz3XJL1WFAzeP",
  "key14": "66WC3znGjU3xaQ8wMqTs3NiKn4kfWAwF2xJbjXNX9YA7LkrMptkT8cMKsBrzx4VeStgbe4L9juUj3SGoZ6kdSQKy",
  "key15": "3aWn9Fi6qmNcXpq6ew7XDnToVHLoF5sT4CyXdYGcicXW4r3dvnz5wLFfzPEVsAinXvGnEuGza9VRt4EGAfSkZehS",
  "key16": "3Faq1K6Z3YggVKmcTc1d4eQdttPfWhrQu9SmtL7f69QhJqp5u3kxywGshguNjTafHNrM6rrks4DD1PxHtcCQXv3s",
  "key17": "3DbZAsW7VccNfK3t3LzDGjksZF4wRDUDyQvwiCTdjq7fNYj1AhaV7iD1dLbU3r5s7VLoq5eWiGigaXq1BpHpXZdv",
  "key18": "4iQ3YHDB9Ehi3ac5b9rXqdnoCMLbF7t5P4cTo3TEiYkEvWETFTxPEy1n2hZWFcTwK8AaDQoAqG3Dp1bdjpiuwgCT",
  "key19": "3KkYKMtaKG722x2FKvTtPP8iVQfd1JYMH1sdtjXCQVhCHnL2mk3rQybuVigvmmmPy2RH6PtS7pA6L2i7Hos75Gez",
  "key20": "21BxQJKaEYFV6DSV7BjB8x5WmMs3sGghfpvocsaxenEPaT9eUyjd3at1P822kLG5qgiEESUm4Y6jcFa6gAPrx9pm",
  "key21": "5xg15vB1mP3qZv1fLburX4ysZpni3ca679VawReEdBaU7uj7ktxb3QtEyVqjpiUJ2VkFQSxZtNFp8moYNqAujtMQ",
  "key22": "nQGyYQVQoVkqesFUwssHmJgdvZzmAFhAVV3jzQ2HSQLhMeVM6q3EZGMFWNbET7sup8wVRRkceZ3wJi3khJxJde8",
  "key23": "4aEpF3ydgThQN8HB8KWEWyHudFJg9uUEnAdcFDJaw1MQaXZ2Motb8UBNxQfQWu1dQeqvFgzWeHzKoaLcwPrwrAnh",
  "key24": "44Hmgj4o5Bk84U9RNxosazuSfEXefr65JqXs2fZwv7tAgkZypYU5bpqq2vEehzCKfD57kmrGiG2QVybxQBHoudzt",
  "key25": "254Xab3UftsB4MjX5vWhhmENeR9Pt9Q6ejusrArPUg2u7AwDRkDft9MNGRgA9s6xcoDr5DaxaRf9zG4QV2NRyUWs",
  "key26": "5YZZSkFqQEpYvxsgSCXfSS1QPxoj19xKszo3h5GPxoPNwdRiyhNQWDnsCmpDYPtTuwtCtYEWiwp7FiJCVkdRZCaD",
  "key27": "588coZ3xbHNREsZGFcDLDgqUzQ1tJejfNVJndAFCG7uezdocotTR77Peq7PuF8VrxPo98Cy5fDarM4XSSbxTKPwd",
  "key28": "53dTwZg33EoFAa6CcYMruUjzzpDETGTK7EXBBorkDyfwzq3C7evraUxUd17hRBg1rqmYy7KhTyWHE9dw7vpY3SJM",
  "key29": "2J8sGvQmxYnro8npoHUVypZoHAzrT6F2gLTTwAu1wxGMZer1VHjkZWCdyrXyRQdkH7zodU5AYnmjV8UWe2az3GHF",
  "key30": "46RkNieqKrVSXm8Kue6QTEeiKKFxayfmPVoVLREm77wVw77nhYNx77ZCsN8RN6kjK6BWbAcx71uSNiv9hWkgY56D",
  "key31": "R7yu2jWKhjpBnNJh8u84HLuYXDZL378Qdw6WrYzaCzKj7uuKUWnpAtgUAuM3kxGRY4viHBqiimXynsKYejJXnEZ",
  "key32": "4sm89Vhpzsjtk6rfJaqNSRXzrNufGXQPn8Ssv9JZmTc3QJkYAavX7u8baRrW3mZvM7MaxqyB4JZ63QXeNL8enBbZ",
  "key33": "3k66eoGV4T3ypz85FKZuugjzmxTbvbYL3y8du4EbcG5QsnK9BtvV2sBihrs99tXBviHTzWuRbJdFiucBkJgK9aBL",
  "key34": "64GHs9ispGrT9UTUW1sUSt9oRdtes6LDKF9wymeQpbmff5uU8gr17yfvgUxdmdUGo5SsncrT9AT8LfA6Q6U4ZwjV",
  "key35": "468dA4q1zQyZSbvtXBV9oRXQGfe93FpTNWs9VKt5LR7Qq8gJ7fYhyReApawsEcFQ1SsyVEy9g9H4ihS2UCaE1dPw",
  "key36": "EozMa6tZHwBUiPmvdu2RDD1CWRBeauDLaRTxMLnyDZrnsz7KAuEed56BEpeBBg2CVejMjb3eL8BCVD88aCHATJS",
  "key37": "2x6UBqFYrNZzARXU4MLyUFGf2nnMfkbvPfdNnJP42gLsTdKWYqx4H7rSvzLiKVg9YNn8Cgk3NBSRP2SDH9MZBqMY",
  "key38": "vF4Kxvo4oWkrfNanCGFQg5PUNKVPqL7nXmuRn28g77Zy1Qb3Jyx4BpUPZL8Z7VJjv4Qx3NUyZ5naFnS4adWBLwh",
  "key39": "5vmoixzL8Z1rr8Y63Cdh6nsSjxNRHfHZAXrwzRpTehJJiydrc1cWgGGNL9SZv8Si7a6Qh5uSj3veBqqMDfA2pWWi",
  "key40": "UuFski99KbrgMW8diZFMmGUd1mo1ykCEzah37sZhNqiNQDyXZQRd7u2apT5NU2rqCMdjAeZR8LxL4p4ReDVsAhW",
  "key41": "3wyC7ezi13qKopEJ8frDV7h2PmEfeGVXyxjQeVxwcJQukRPbCweH2gBADaRDbTfq5YDTBuDWwk2WZMBQF2yUPzGE",
  "key42": "4uBbTCzchzLJnrRW8ag8yvfK6MgpdxAZYXxhF1eXs1EAjCUJfTRWi1A48p6SCeGjSoegqCjuWWdo3nohRvEJsTxU",
  "key43": "2VNTRXWDZRcZAE4nbJih7MKU2XzPBaRKsipHdYA3E563jC3uK6ytbWBJ47MWZFbdoXbdaWYHycSFgHgSDBBx6Du7",
  "key44": "3QuHcSjzsxzfZDzDrsoS9ThEr7bDJyxLCLyMt1MKtq58PTKbWWmCqGiqKfQYnkd6HMM93KCcAwc8Yutj71CZUvAS"
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
