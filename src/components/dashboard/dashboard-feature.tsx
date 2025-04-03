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
    "3gegvhFDwUHg4Ni4YsHgympuSqrRaJFCeTosgDMSijNrUkRsWiYJBFU8inD1Yh4vWjHNAUB4FmEC5HqkGQn1arUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sedS8rszoALziT7FYUyFxHzPoJ8Ep3CokiP9bfLBuMMrekUCDXBeD2fbuzMmUbHnXXgNr9Xvuu2JNaQ5z1t7QDF",
  "key1": "YQnFxPfxk7YNMekvXZADJLVGPLqMT7ErEobuV6ZTRhaSRGgQmzbWnSmBw69CpEx1E95cAaZMq4XKwp3ridoLSWz",
  "key2": "5u4kkpnfjoJx3QfTcm7mY4YcwEjGfvZvz6dc9bLAd3WbjpBbXdiHUsjAM3HGweotnLHCH8UwaiUxLPV5Tr29yKDK",
  "key3": "2Kzaumni4VfLBkzFdMKKVPbndNrDS4t7tDKX3MVhqw7Kcx3j3gtjULFzk9t6peuEvhLF8TfXUmb3pzmTXT4DPgR8",
  "key4": "5xhbLZEU2UK6HkeVULjGqYNmKmPXcqeRES6WvcqcNybo4xUvoVGEk99nW8zMBd26LB72N81gqmax5w8Yag9jq2zY",
  "key5": "4cjpq1EbFGAzgmpXr4T7eXFJZaX3ASGgvnVTn1Y6mZBCAy6Y4RVsoxNSBxuNhv8271dHWp31gbbF6rbp2tewb99o",
  "key6": "3RaKCYmXhRNKRPqfbgVfXWgpgRJRrCAXccARRnPoMzo8NcfP8RCfzvRujRz2RqUGiTgtjMzTZF5HaAAWDvBetHS8",
  "key7": "5MW9Z7dW4dQUyTSXcBnsaHDd4ijJBppYTRy7e5SDT3omc8fWHCzaq9thmCRdrkenKGBXRNC3uQ8NTQ12fsbrmutj",
  "key8": "4beNRsn456oPY6hLN6LdX69yjeQ6vjgKVTqAPnN35QdZy5NnRyU8u93FXn8qgwwSzLDqfNP3GCoYooJ64LkXHeMV",
  "key9": "5Lv2aeQwTH2aZzEN9AfeA2VCrwsjsYMgYkFw5WytDMydvT4cDcWqziduUQu4JukPCdAHyXqxjZxwtYH9cgYk5KkK",
  "key10": "2RG2pTc8C85dSa4iyCPWD7yE3xRq1J5bQR9uwuakEeFGgEKTTe153yvgTEmB6xoDKvc7gAN3xDDS8nb6jPRvM1GB",
  "key11": "3ykrTVMxNtyav77Nq9Yi8fT9vgYo7XEyhrM19XBD97SWr2NJX7QEZ46sWj9SY8sJ95eKVoRKZKUcar1RkQkXRApb",
  "key12": "2YfWkZTqXYrRruQHvseG4uvxs5RfrtxU9u1xwExrDJfmdtcb77DsYZ77q13pfkpxnG1TNhFe5WieX64nnx5ABUoK",
  "key13": "2oGEBKMefJ4AiQmCvJ7XeTptKgvyfpdSXGTrjgGGJrtdMsXC3Sk5BAL8e3zEyVqwjFbQ4tRYhvRujHyDHiYKgVjK",
  "key14": "y4Fd7GNjkSRyNmGXxa6h4RFUcdZezQ6bxCxK3VynN3TQDABRmuTWWU3xacmRxgNbjwvuRGm2q9hWUhsDrPicadC",
  "key15": "UhSebq8DDUBbaZXMAcgy6XFYxXygmBa2mBs67ZZ9MnayXHKAcNXnCzgsUH9saFVVqkpN796deLXQ65vdi7SknwD",
  "key16": "52jmTHwibKfQAC2Tr8xLcaovpW3vsyW135aCKMXaLoECvuTBtvoQPaXo3FBSnNxsfdxkzGTB8wfpKDoB8wDvz8Gz",
  "key17": "4dVN6eSqFzEqh126wY885db9XDG9hFP7gGPqm2yqa1796db1xKZVAHhzyw97SvWZopVLQVEXtXfhbbkyXpaohYAP",
  "key18": "2EyckDGSbsKbWRsByuSFSnFhfdNofeWQ1iH49WEa3Ze2QU4YoEzB4omqFUK9EoA26Wrkc9R7hvrou3bBBQUhe7UG",
  "key19": "5GxPkJBnXHCzFBwUPwA2kFeeRGRFb4nfDbrMx7AUaPQ4ktYXtthawjFRikf51ZspJ2bhxYzQSxAit6ebyzTRCyoD",
  "key20": "5dsrCT77KFNCAmSheyYBk5xouxzc4RGdPwDc4YHE5to5ATXGkAenKFidVXMsxJhVi4okdrVkARSHuPw7Mx3Wkwtm",
  "key21": "2NFbwRHoihJ8zJ5cizq574Hfzsc1TdurQC3Qu2aCe3uxMvGDjCTRhnDjvGC3mC6MQiWjTEFUkhNB5R3Kn3imnxc1",
  "key22": "3UU1iV3oE2ZcKhRsrHDEQL4d7RQmfmXErcvT2xsrnzpYQtUnB91NAgqc9R1dXQTMJB1JdspsQc3mUqtubBpDHPfZ",
  "key23": "5PHkKrcAZQCGRgAEfxLzH6CcVS1iVWF1GEtgPNHU5yY9xdXnS8XrFFdGyKH19KvHrdACjBT2cxgH1yKPV8FQ38cn",
  "key24": "5WHf1xXZUN2ghS9MeBgjqPsJJAHLfUJ3dyzwomvifZPfeySYVaWPDefdpDYpAX4DXHw6GjZLz3cWcq1XF4H8A6Ys",
  "key25": "5FHv5f2t1526uBats2FrJ2x6heYKtmLZ3MxwgWtVYNPamPLHmn28GXXWUD7Fvn6vdfkxa5cqatYP7uZygD4dEEer",
  "key26": "58tCYQaEcb4tBvcZih51W7rgBv8YuA65aHJm5jihwGAbhxV4XeBg8Tw9hjYywxbpvxQfzuYJ3yeFrDDFFCoUffP2",
  "key27": "5RXtk3wF6dCWsvXv2qmPCKcf9SzYv5RCJKq3pyT5HTnmYe9jxkidnqoS2AcHxeNE8gmCHWvEPsVoNpbDor2V2QCJ",
  "key28": "BoNSNuRb1hT49JcC2xfLXpDotoggjgeWntC5HzxFuisDfdhuDKnSWniTWZ9sgA2fzyAnrZBnCw8QTZBzjd5RYBB",
  "key29": "EEnZpQ5wYusszU5UUPE1kffoeSzkBDTwRQfhondcDjBE4voXqCt5LyJVwedAaF4LeMnqyRMiwy5Xuw3RP47hBGH",
  "key30": "3k3Hnsw2KBUcLV56o2ZKqu7rdwCfVRDKRcCBgEzr4MbQAvRd11rAyyiDWP6XUYKYLdV6hLpS3LYWgbKfFeQfEKko",
  "key31": "2sJ5pqojNbEPcK4eHwPxbx3XSZmirkYMkWj4dtbmCxGTHAnj4Yhc2q4SPmo5r5aXYRmFj1ZEmL421Xm9UifHT49V",
  "key32": "3Bct8JRHB8ax4mhEfjH32w9aDGvFqzhfzVcqiJ3whpcVh4Jv8nx1Si8gjJUYLvgHHZmA3a6mmJRHSTnCiQCVJurE"
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
