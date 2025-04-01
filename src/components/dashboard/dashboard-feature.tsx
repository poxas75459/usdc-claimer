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
    "5nqdgAmvAdDZbzxhKXfmMZt27H8dftGWfgpVufSinhsvphYfG2U5Q4ySAQNxAoR2xhEk3B7PBuHJzp7ew3Q1gNGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CfKeomDij9vSwwhAtqLXx35wCr56ZRNKLUD9MK1DEpqL2Xbkbqu27PXMtSQPxAosdWDkyDjmJMfnR7ybBzsEfDM",
  "key1": "2YZD27T6vkgrHePe248E2GTMnaRTW3XAqdHeR3h87sVtY5NrQTmskdgFPpaseSBLybYPBDLMZEDDPQinZnUy6t7a",
  "key2": "5bYBEunM5Gy8roWcvtETKPJrtPwmupM3ZEmogzTECDqWm9rsFbVHEDHGPrqc11NNB8UEcXPKYJMFXxLuz9Nv1ZWy",
  "key3": "Bk1oxfqEfNfimXuXsWVNXDm14nxX6HyjxVqc587bEqt9AbC5VvK87iNzZL6Vsuaiyh3TycpPZRQzwgJ14rtZrjP",
  "key4": "5czQpZiz7RqHuFdEHPXFaW58aJE2juXSeCSA4Q7k79wzMPuKrsK4q8CnQNmiwfg7G8a515sFjn7gsYVDzkyHkkj6",
  "key5": "4pKrmixGw3fZ82aXHDTq8meMaG7Qr4qBYES91geeXkXZ2bKNJgMJ5xk9o9gST9y9UxiDEFs2R9dmU5E41JikDy7j",
  "key6": "4iCDHkivdfkPrQ4Qbrwq4ab3fJDfK49TkUGWGpngKMGj9xJyJ2gphufRccxwzFMYm8UNRJFs7XpSwBft3XSVLfnX",
  "key7": "34SrcQsoYtmRT6g9FV5HEJTUeqTczmHYv7ZSBLuYZCMAErtdtaayMT9WgMLsCG9wJUi5x1S6MJg6MSzXwsBKCY73",
  "key8": "3nKbGSGDLqiHxGjGmMEh5eqD2NocAf28cJWkn7MRXasUWS7njj3PWyKMhtuDAJgmiNuRujCDeQJgMiovbhMZ2Dt8",
  "key9": "Ddc5MXKQCSMPbVoQ1yweA3rsYj2xvLMKhednAeX8FhnvnUdWDGTuAg7sZNZWfEkViHWMq8KUi4rEyfHSRb2AXLV",
  "key10": "42pbbBommXchQfvMF5geu7ys6Dxu1fqsmwQELK8aD8qZW4XWvU75wKwSRkbkkrAKsSVKmEhujR2ivfYuwSG2sw9o",
  "key11": "45JcwkDaRdyPWruRqMzyp8EuVUcBsr4MwFtzUNbY6yoDXuETga47ETRt83n5jJwGCEPbUyCif2vRb2TgTrGtfXbP",
  "key12": "5FeQKmUgV1SnvJsu5ecEWxySdzwDo7ZMVFeKvsanqqgQgCAYPSCHo2noce3TrrLEgXCHwm2BdCK426LKS5KTMcDb",
  "key13": "5U3QzdS7fx62zubktmChcwYpUD6YkB9fjmYBekcWcD2tqyq1EDXQa2tf6QP6EWw67XCxatQbTzUrVqRRp89gz7ce",
  "key14": "5DyNP3Sg7TezJRKaGypwGYpsUReCqpW8yvn5LMQzawntS8ZCFZVFMgyhBoejKW7DxKcN1Mynvy16tk2ZkTyu2aUm",
  "key15": "uh2WsY8zEDW2onX9euvEeZ1G3uQEgTQQK1QD2SDYDvosxo1x1EeodKFUafgBYpfHwgKE2KRqYxrdXYu2Vdr91Mx",
  "key16": "3fqnkrjB8ZtccKsgMonoBsuebukfo6sBSHKmb9B4821zq2BDt15Fndaa8VNiAtm2xBCoDVCRpuzXuuZCQKuHXy6y",
  "key17": "59EqHE1dCUTaouhzK5X6wwrRS8xDihey9CGsiqmDfzQXbhKn5No6WGNBh15KES6YBo59S1gGdgSHhTGSFbcKhbKz",
  "key18": "PWnE16oKKUD3Az5uVYLdnj2nLra6J4Gf6jKV3XaMqsHg8iPBX6EeLtGGm158oYom9TRF77mkBQMj5zowXosmRuz",
  "key19": "2UcQyrgo9Bw7EJTmeVPtti4C31TBghdwUZTWGcXycUutnyPr95EMEYMm9Xc9QmJd2gPM7F5mgu7KaXEsWR3A7WmN",
  "key20": "3zk3WrFsNQnHaFQGmq4CwbjZHVFXzG99v7ikgPEsMTHEzAuEpof8hgZyaq3iKqQFh6t65MCmRYm3jWPgMANaqvFv",
  "key21": "5tgNZe3xSaMb3t62TBvJJPZ47ge2aS1QAAwaGeGbnqAxLn55wg3BmjLKBFgytFuxqi63gjeV3BCBxvEAygxQwyWV",
  "key22": "3teWa5f9Lue4h63sgdUPtEPd1XZzAcmpKrUm1cBsohpNbZwrxbPUUFVZsxXhiKzeL3WF2yNoUYBpgJwQvCJqzAr5",
  "key23": "SQwfWJj97XzzAvU53CNtk9ymW6EoEipSgryMLrx5FG7dkVBeWD5pvN6jTt3c6gYuvFwJ8cpoZYz8vkE2rWgnSCN",
  "key24": "P7WCcHo7qptvSvvndjHELKEqw9L5aSgTEoMyPXLkKx1LuMX53bbPzo6jHA8dZDvmvKw9PUuBZzqPx8bH2uuZdJd",
  "key25": "3f4gv6rGorFpAHy7xBbnqiwspXNUVvtDPipDsmAci2zhEm5SjkA1o39pZGWk9nnc8Uoer9FbhAWzakiwA8XVnKeN",
  "key26": "4U1qC8NS5HqHXBzBQoDdBcEWwNrijVkN1oJ3gaY2hQmdsYt5QUx9DEGXSEVq86rSHu4tZoq7zNQu3KwewiZHN2Qn",
  "key27": "2cL2BGQeKwEsSNVjSutLPEwnbeQHskMr5zgg7GNBiVhw4GjLU6j8JXF1RFWWzZ2vBaFbjmWKN7aUcCd6vMFz7rTr",
  "key28": "27u96aT8m1Uc91NC3XujchP3pnPy6rictHi1359z1BACEZxVj71utTEyorvwGTyuZAVsGJHaUEYskntbTHAPRPYs",
  "key29": "3p9Kah84WJUHoXJdBBx7iZfLEuH6rsvcu9B2HuFRorVeXtW3AUx2WMByPJtNiP25avkoj1AWXJNr5LsUHYf2xPPP",
  "key30": "U5LepDvwHAdEeC33hPxeykrij5gFdB8Xu1Ts3gadYhzrQ2ZE9mUqH9BRHhc3f57VCbHHvR9SAtaEP48x45sHWWw",
  "key31": "5RKJF2h13S8sGw4ahkNcjEDMkuvX1b73vbaK5tHVrD67Dx9XMV1TkYpcLLfqvrpHSmRhP4HkUABDTFoU6KYkNDTV",
  "key32": "4kF9ims6y6NtTyi8mDabWb6wjTgSjRCZzLv4gKHWpsPbnSR4xzqEyNozzhvrU59oMjVmPaoMsH7ReBCp95u4rFsR",
  "key33": "2yZAnvkpTZGdYT1oRufuebbQKdhsTXWZbXBaRwqVsRTwV8aDhhF87YcYfSyGmFdAKcaM1yPDe7FwmRtRGLWK8ob4"
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
