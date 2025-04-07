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
    "5UMHhb7Wzp27AGyDPoFWnzyRKQrd2hiUt4XSgSUBTNGGK7N6GQSC2QQ7rnq6kdQxvf9rTvpMVkcLEb1EBCJwkEj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xbWMMjbxQp4ogynxoXrTXNfcNEThJUSPKRuaPoTMWcbS74MddutRja1eKFWgpTNHCmBgG5JjiPrZ6yq641FY5ey",
  "key1": "2tidS67C6KXoQMibAejzQLgGWo7zT5i9w3WYiuNAZ68Y6RbCMftbrjTocFncBKsfLbaKLmdn3Sh88mgy7ELSMZdX",
  "key2": "4wpSkNo7THCNTjbimXnvaT6n5ZhnEx6oWAtumvDGfbBVW1bB1tcXzm6Kb4b3D61w2EjSNdrRos7t2V2vER726cBm",
  "key3": "NLcx2WiR2sy4EUX1hkvxtcPTgjxYp794PcN6F2uCss7C615t24ySQKBr4ToMu8MZ3iGnFZQDnbdjZdcos8oa4Ur",
  "key4": "24BeR1i6Kg4akTXkTfBopJWSH44tyaqgLW9JbrQVaQmKujqshtAhUB21rs6JSLVNbdcWYf6Y5F8eHEaNgWEZvCRJ",
  "key5": "4foZQiLFxvqZqpf1dEyPpKWNkJVM72pZmJaG5yREr13KiMbRqcB1SWXwoudfKKSmUDtubQSrXanHnix8M68FD535",
  "key6": "3LoAe6KjKWYh2jt3UpPygsk47JZPd91VTduRgCBAmvpfWf2St9ZwJCo9ooV1PMx5bj4WSzkEF3c7JCxwyPVXNrSW",
  "key7": "4ngVJA5vkfK1HMiDFRYDNC7Wq3SATk9mR5zRNa19UbGnKygcQrum3LKUZBJYmwZFyWiZy8wrcQuYdyuNfkachXnN",
  "key8": "2QYWPeZHHDegVPwjXxCxjCWYovqJb7F611kHswWxRzEhaXR6Y9ir3BDHE4fgzbLsttK85QoW1b7ttoUv7c2tjqHd",
  "key9": "2PDAME7tzxjjbyYuwqLoAbHjL4yC9xx1ZfNdyR27FL9rowFjGrhvxTynYrGy7JhjbUvgmxTj7eQpSSAFQPMSG2F8",
  "key10": "oMHtu4xf1cL6dNZYevHvkvym52oFnyK9ZycnZsmbG9QdYfJWEb3Ag8Sfj8L1PAZLSDGviA1Mi8kUVpvsw27ufA9",
  "key11": "3ZipiUqBqiJE3frTy1Xebm77xw2Brk7DSPHbXTEpWYouZXsjUzgZUhJNkpDuazZx6SYH2i88T8qmzZe5z5mgmu6x",
  "key12": "2oe6VNBTDFYmuPACoabkgGHW8Rqq3qQqKNCdWnzvNVkJX8v4JN4GGeLUTZiNxj6Eux5sTYHrjx49fJDZ8JvTAVjo",
  "key13": "3RGDRGy64fVeGX8ujgduu5juAt7HBmqLUX4tgBse3J8Dwbit58ouURq9tbgisvsRz9hv3yxVpBu1euCfj4FFAssv",
  "key14": "5GdaHofwn17obih5uPTi6M7E7tPrE45Zj6EmpjJgXhxfhZwEn3QsYeA5WzfQcxqNViWbpPoyZo6ZadC9FQTJBKu1",
  "key15": "3k9MqZEnBvdxmUncPjzZTwJbuZn1E7gJuLdm6B1mxWjfgQU2BPZR7wNaXNzDLo7pVBifL7LdASjm8Rd2fjPcYUoB",
  "key16": "5w3WWHTCRFKnch85w9TUDTP6S26yZCisvGaQmDVyE7mg9XppkavThP5xgDDrt3AswUAVXBQTKQ3wpRw3F8opE3bT",
  "key17": "2M2VxnFhEsgZbwTqCart4ubVketNyzHWJ18EW6nKTXB5ZPmZYpXPKX2NrTdLf2zXqBTCdSi8ZUA82QmaYn8N4kuW",
  "key18": "2HwPw1Yr31mgCAxQ3UPPjnNuSBrCdrCP6946M5e997x3Utt7FfKxrCm9oZYBEquxV4FHF1zxTiVTjqMSJLT1eo3G",
  "key19": "4iHcZ52t5m42oKFzvyUpZqCRE6wNkQBKGVkjQJKFcJvem7hr4WX93DiS9Ri7KE2MXRUYwPo7wHL1pn2QxqnJW9Mx",
  "key20": "4xWyV4rKdv24x8somvn8DjjoiUsWGCz7GAfijKwmSrujVUnVd5j8cf1BgnTtgo67c5CZXFfruYS6QJPdMocr17t3",
  "key21": "4WnxbtCBAqukLnkBGMCbQq3rKKu5Dcpkc1KaixCdoTAk6AS4u1SSDxp1j7RjVghx2L2HNm1uVAAP8RVba6NmTo2b",
  "key22": "2bwxKJP8ersnasiva87XvEbAmGgUzqEpAhXKiPbi7MB2ct7wxingqDUM74Qt3zZpF1a1Xn4aTXdANAwScC6raRKS",
  "key23": "2tFnN8iNMEN2EZMikkaGfsdNFmaHW2FLSaMRmH5FFn7Y7vgX7MAPXL56V4Xo9ALxkjxYB4bSh1JBA1eHDcJ73bNb",
  "key24": "6c6dTVDL8cNpycXsetwB6p6asVbbJMa7hRkEE3YwS83SiTD8VAfQN9dsErybtUy3fHHrDLxXFtwQ18VDxE7hVB8",
  "key25": "4VXfSZpoZoX8EKZ3q8xCohgMj7ivBx31jbjWPhewyn7WrmQy2zZnw15PEnVPy7Am7S7uWRWDMvh6QP6WzBbRHGr2",
  "key26": "4EdbUHYQfsE1hpUMu1wXzPihuSdX3VV16E2cbvycvf2Ndv9wnUQjdZyPCR86Z5ix3ALfiMrtJZQiFWPGAbog3bt1",
  "key27": "3NdzrsQHKwqw2mJV3NEspVwUwMg5QvoZybSv75x6o1TF9tE5VcobkMz8uBxLo6fdonc8DuQJrZrZvLC5b3HBPrdj",
  "key28": "khPYAEmGCRxCXqqnc3dDohshfLHWREMdrqELdGhKt5C4zwiDa8QQgasPiVumzy2t3Tyu83eDUwFiKGASgU1mDvX",
  "key29": "236CPjr3HusxrqqxXPM1Qhq82V7YJ5Q8KF9ZKJZcSA8xY54EJBFrPsjp5Xfhc71MWoTWVUEfo7YnPwoVxfavJdZ8",
  "key30": "5dsy4Bbw9oT7oJdsFo7GVzenUeMA3rFSQKfamr3jZMWkqWt1uViMdozcqZatB5BAPgrf5sc7Yo2Ds9rgL8muPVHX"
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
