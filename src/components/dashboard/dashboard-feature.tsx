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
    "2CyRowT48ZbnumA1Gp5nx7BEN4c86eRgxKXfQqPr8SjkSREC5nXQGJZUj9viDWhwktiy5nppyk2PVhnEKBGzrAkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNrUqazxXfdjmjusyTyXc4pXWrgvZQME1AZQtbwPbKUXYLB8Yhfyk8ZWwNaA41v2uindTfCFTJyEdXeXPHAvaY3",
  "key1": "bsv7T6U3GLXviQi3NpCWaZmb1NVs284SiCEYKwxWRupDoq2mhqmJhHNJCwszXKKSn54JeB5kZjkufzhx3aSXam6",
  "key2": "2TTbhTbHGRxXDiLaHimaVnUbgSHTWFUis9gYFfhQyjYS1qJ93MDcsVx19uZ1kjVXhvhj9164k1k3V4jX2UYmZrUt",
  "key3": "5vukKVzAieVtw8yGpsqPuE1zhDTF4mVQidcToFiauBtEmz7N6zdFq7GYHiqYmHkz3HY478P99Pb51Jhhuntp5pM",
  "key4": "55DYSscnhUAzsfrz813bnQzaJYqF6Xkiie9gXxLLeswrY4E6rXJNwmfNYDxVi7anSrNMnLfUCWzbSPzL4dcu6ZNw",
  "key5": "2DsEqgVFJv4NP1pEHw7gxdjzJGiXrQCMVoyjX5niWnCpCBzZrMeayeG4EZHdGUFQ4EaStCVLxsGJEEHSahWoJ4P5",
  "key6": "49RH9sxTTWrCQyLvRzajV9sD6aXBHqiTeeP9Yf4YzEAtVz9fRm42NYboSLKkvE4CpLAaVgNU7xu6EPwnrosHoqSn",
  "key7": "cu6VY8kj1vmXA88GoaWVuQ9dMBgzJKfFumLxxhrBrmZpXomrzgKvktCgMLDNTBUZy92Y5oVq6bmwayLa6sw2MPW",
  "key8": "49KUDbUMHdLcBmsFKuNdH1dp6b3KdKLrxfZFiSTyNLJBvff8X7tE1UGmySMDpHRHQ33C3n6CJmhCdi7unyJhhnqw",
  "key9": "56upHgz67BHqAnmfFk6iftvnqR1TNGaUhpSTncN3WkGCgmKkc7AG8ipmZbNjfkhmeaFjxnE3KGq9X685woZo2Goa",
  "key10": "4H1EJsiggQGwyAMqC5wAgSbxoNHJjMg1YyUaC3mRAsvA8tuhzPWRbs2qTzCQQZNdZ1hF4ztSWsTZniqQyPALK9GH",
  "key11": "5Pizqxvdxiw9voBjYg1UVdvYE5iBkxtLNK27P3JqyXSabp9FwcPKM2xtjx3HLFPkceUAXu6Cb7bSWoueN3XS5VAD",
  "key12": "4G3z3tJZnyMjnKf5QZJc6vNWEzqXdAQcZMRNnHmnQN2TyVjaW3eMLtuj8YsopHmTCXknK7AjXfDrJPbsZ639jMwb",
  "key13": "b6ty2iSpe6fX8tbrSTGbHqEkAG7B7FgFaXLLuTmhjGnzEeAqNXskVu1qn1KhZn8RbSWowdLDpeDkiEphtiFmUMA",
  "key14": "DXaD4oi6C2SAZFv9WNwP9dZWZgJApg8BnND3cX9piMXGXXc3QqXViUqHTAw5aibtj8BciB5Wfz3w1y5dCbH4Zzu",
  "key15": "eMwxcEVGytd5YmwcDNdn3havjWXTKkewvqGjFXWcQyYygeiR9aiBnDgP2Y626nfASxzxQR6GwEjso5Dm6g6SCdX",
  "key16": "3axGSkedU9Dc16asTPVfCZ3ZrcrwtTLZdk82wqNFqdktgpUFMNUPYKrjG9sQpjuCi8r7uN68eQNjMiJhHGBT5mo9",
  "key17": "4uiQdeikDPNmGtbTZ2jpmkKwCxEp3s2EjVtxkvuA8yTjjLMKBs8qXZ9gArNgkgjh3Ha37h678L6MQGyBw8as6Y8B",
  "key18": "2NRC3zKx31B6myAJ5erTZPAMFRutY3e8QWmaGBLDN1CR1aCk5T1bf4RvWMxk7KJuzVrMdTichpwN9NHQLciE4Ghf",
  "key19": "5BtGSA12dvnSaXGiMNRYPTekB9GkBTjSNi8jHvZLfYqvHe2K2DDwKQcwzzryXuc6YuZHKCKaB8fJpEPnCXKk1RoC",
  "key20": "638bicA4L1beQvRbAry8Vv6uFM2JgZ5Z7tovrTDY9e68o7KLC6jXZ6wK4dvWv6THemmU2jCoMMsocsGhp5LkAbhH",
  "key21": "2RRSCRndqEeELK6R8UVLXBiVVsVmD8fK8bhvvsTor5Jfx3qFDWDPNzaP5BwcyFeXbiJ8eAWPz1s34Y7XmUsMXKoo",
  "key22": "3SwLLC6BAHjZ8v5hm5L6Sgxyya5Nt5vPEx4frN43ZX8PXUihxh27u6GyyH5upD3Wxfp79ZrLWkoc8Fh2gByJuJt8",
  "key23": "71z8D5Z36Lhb7C5UMVcpGg84Vmh8CC7dw7h4gvMydofEDCP6VC3iB6P4QjqSmTmPGqgdkAABEQTMFBvjKQNYwaU",
  "key24": "4MeCaB2yP5YoPiXYqRqKFH4T9sie5c5c2eWSwyaqvBzcmNScAyN4q7vL7cnvex1hCVUER8vMPD8rFVhqjwS9crtp",
  "key25": "4wwgeRdtfydd8adVyo9e7JWjsmfk6Fz46PRjdN26oU2xkH5bmrRmosN8AyJCqUSUuEpMFadWQQuMDVC96ED8PJKb",
  "key26": "5UcPs1x5PV1fSjiikq5AdAPrZTwv7THppBHbMmcwH4G7N11pcJGPza2jVq7kzNiTqKRHt455uphQQ8Gi8e1vqtEt",
  "key27": "53nB7JrnHyUHEXGFiFr6wg25FXuxxuEayLdMKRzzaj8PYHdi9fHnTJtW8Sz9NgyZYgTRnYo1fpQpGhdwPPKFi7dR",
  "key28": "4YByu7LsLpdoTE6yf2W1aDRAwyKd1qCXQnxMHArrDSdZceiXtjMQzEaaCcxvfvoCdhG99Rxk7HE4cHrdSMH8qeqH",
  "key29": "3GtHa4WmcmEy2Y7AfaekPa2Gyd8JovgP3gM9orhhEhA966K9MgXwN8MVcNxM2AgKL82naj7cPSpVveua9NcGDncD",
  "key30": "2p7aFZ7ZbycA1j9UwUanwPhhtRWKVBgu9hjn3gCeegjHZSHcuLJuPaJ37jRs33tobuaJvaDnimiNnh5vE1KoKJeN",
  "key31": "3r2iUfV2uynApLsGs7AqUihMaERCNatB9eBRjig58MahLtoEkqXoKbHrhKpZdx7kVU6quv8FmTwc4sLL2L9hk99D",
  "key32": "41NTMqTTteN7cjDxnu3NUTNxHnwV8yaXjzjzbNCaBYoaSmiXdMmLEry1gPPD8AsfLrpTyAvmUK5ZY5v9XHGTHFFd",
  "key33": "7CQz1hz17o871tBcvRvjNFVqo2uLouPTpzPhte6jq4RMe6amr8bjC7k3ru9LQsvfJM781HAWRaEjycPMq4K9bb5",
  "key34": "Grza7NBh4LLdBj6VTMFRdCqoGJ39AERo4c6FhGuZuUnqxVXBFNkJ8YRKgB9Q7i19s61Ha53ME8qvXPPF672UZJY",
  "key35": "MiNLDLDYCRPwtVvuZcxJnjLNFWwvH8E78wKb7Nyer7vfQKuj6miDANukNqvpc9f2TEaxCybNw82nCQKC87rSMjU",
  "key36": "26e1PJ98iNTFyCmbAYApqva1w2zFactp1ux6PysQUwxSZ1RCfCSvrhscr7z4LWidf4uYDGimgevfMyFULMyxiYE1",
  "key37": "4jCWitR236LJxmRwoDAJNweZF8HZm3WcdXkKVbFPJmpdi59vKKT7Lig83GyuZcoCUjYBmeBF84t8dwjGU4xKWhYg",
  "key38": "4BMbfCsx3v4WRj13RupDA576izB99X4ea77VSgYAk4R6XUiPL4gw1VKrWDEXsD8Vrd7zXQssAgcAkgDn1FUmw8ji",
  "key39": "3hMBsGtGnNmEpJ7mXNBgFCFvtFfmejKdDgyytcoLirwYRx9Vadmj4E9msq9gGbH6S7mJ3GTRZvAbrU3UifdZ4gHj",
  "key40": "2vkfo4gBpST661T6N3RMSTkr4vStw9bJxPY17PJYDePp8Dgwk6vDt7btte3gzSuftTppSCkSGozZo8KYL5p2ZsPq",
  "key41": "bLz588amfVoX4ToqVLfLihVCvPiUf9Sm1sjzpkXLGwZ1C2XDZeGCG7vVomQuqW6vDTXm6WDmvzCZLFonBq9rXr4",
  "key42": "5Se5j838JY5iP8rkxgNxZr5eZXmQvaQuoqo1vZRvNN8162ijpmoNGyerMiGs8asVeAsRz2vvocrKzHSRW8Nnwh99"
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
