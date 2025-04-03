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
    "7roiwmNwmqGVeD4dGZyY9w3vFx7R5zPxT5cz5jxJM88w4Q1e5vuVaV8f9h6YCgdCM4pjbE1HLHzQ2WrJKGq7TXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMS2AQgPkGaKknAsY8JR9WzoqSeWo2T81wkkNSA5XzF2ta4S9LvuSvaAkVSEZcV1kLDzQ6tPHsTwCPDEBDCmFPS",
  "key1": "3iY7WzsDZkSfN37jT5ujCavHETrCb3pVDDZwg5GMQ4JE2bVvaMzkHvbsTVhryHnyDXYtB28GsUKW22nHoANM4U2",
  "key2": "3e3KxWkCEK9JnpZfCfvwyVHwTrFSed9Cx3Jb9h4tiwVqg89kHBzqdbjf4NNLMEnStXjyteRogM2n5S4iDmw85zYU",
  "key3": "3H8yMGgKhSSqSxYLfdk9AXk5FtVjTTQpxRATEJNDD2zBdGxSHBL6dWU1K6hsjrsU1Lua3boicahjhhaKP5DRoBbv",
  "key4": "4dzuju2ddqJQzPqsTKV8G2pChq3LbeNugSLowB2QfDue3bw7ZUmAWN6T5H4Gjd7jayNFRUkMZpGLskgvkbimEgmS",
  "key5": "3rsmYvMCgQazgGaLHMVhoCDa6zi4QK42o6QVK3aW2MeyBqq6oH2Hn5xV7Mg7V7cC8yWYNFALJtHYEpHEA6SzXFqV",
  "key6": "3xSm2H6VQB7xVvutueWNxaYimLR2T3QGL6mjAD4nScMtYcg1eNpuEkUxL8oYrzMxxFwFMV6a4YJE9yMhp8tB2Nh2",
  "key7": "247gjKHJaeuBDwXk9nyVHE243AJqiJkCtGN1WRYKpeFLoY6q2igebaECC716A4GhoRLCsSBQGbqwHvSoHYMNwnPE",
  "key8": "2T8tu2QeRzBo67rBFnymTYQv3syFVZKKTHmmSNUvZ3UzoaRMDiLzM6F6w5ziYbrZS4zqcE5ShDn7DFfvF2Sid7YM",
  "key9": "3LfKgV3Wht4GGxFJR45u6i1mMCmA81NLZ7YcpVv6fMXKo9BycGPwcLtygRQfqp91g33fENL6pe3SrEBYnY2cJdXq",
  "key10": "3EJ87BVTkHJJkfoF6os6j2zqNQjVcXo8wtuvZj6fjKtCPhaXkUxLBnoxphvygXEFxBja2Jg5XjN84hoQPqa85uNX",
  "key11": "4hbaKfEZ4aZ4ejFvgcBAJCkZNwKm87662ESZFmSwGEieuwphTMgT28my6FuyLQSK9Vx3oFLk9sdsGsmaMTkDvXft",
  "key12": "4DBJSydDea9HVhbeVtYQJ3RkjhExJERUeciSyR2rgjj3ZnLn1KM21knyXzCvMi4Apcao39kPBAeYzyNdEco3YBk3",
  "key13": "yMx9oWC4fLqUyRBEi2RJAm7U9DRgohPBdHffUFpM1jZShQJRGSXtNHXENA1oqXS8WPnoLpFeuMjme9gjoz9X1K6",
  "key14": "3ftRGx4ihWTK38weFva1dRLG5deKn65ssveTxTqAnbvfSNS6y6QVipXJGtamn3Q5BDJHEmBvW4TSUa4C29qF6MFJ",
  "key15": "fKuta5NVwGCDsrr992UQoan4uxEkXPf3nJihcNehjcNiz86RPj9J8e77VPhXd8fEcXSaFXzRjFTsDtyXnzcjhzQ",
  "key16": "2XeanWHqzycubYQga43XerKeimzjksrc5WBgFJHQeDdAxb6FoFNkAeNNj6HHCUzjZeRCtey1zey3uL7hrybgZHWg",
  "key17": "mUmodnftfDPbuxPgJQ7UvRGopm6PHBCC8xzkfhV2ht895mDXhMiQmUXsPXtoBrfypiapxark8DDZeY9QtmNajBJ",
  "key18": "3Nds2f5pi12F1fsKBhfhqD4csSRvmNCCFwzGjXZf2oWwvdBAb3MNAJ8xKKWR17fttvEPHD2cx9Efs5Tiuw9GfieK",
  "key19": "3mAKTSeGziAT6U6JriMDfBt2A9LKeHL7J6VSLfVf2269vFAQJoCYWXqFYCW4bqdRDU9YBtwV8vTRqyTbcWjTxTYM",
  "key20": "5TQAjKQRe7bcuFBkcSWHcFiqqVJW2hqHfegrXqjHCyNMBFAXrUprwXHVSoHk3iDaPxQ5HsBBHW5JEAyVzAJeKLu7",
  "key21": "2xpQU1R1aUvhY4R1gYwLm79twaGpv1KJGpbZGeie8fwEy8gB11uShsqQQtXddTVDcCtQybLfP1WsUwHkVcpJ5gCk",
  "key22": "5qZb67btTjMTqNW1EEpkv9usimmtWFrGkkq8TXP1qSysTbtWBpbPqjM4WjZhnfYMRg4UR3b6awmT7pTXt8gUMgzt",
  "key23": "3bVwWHPmxNtUzDv29k6dw67Fx6NkgCDKFUBfSRZSFuc7b2ojweyg59CjgfJp7Cy9YKuRWdeUtaUkHrTGv3eYzPE5",
  "key24": "2T8f14G4jNbnMdsFgvkojLddfxzxRzUSZvtfEDwm8cC5qzeKWLQ2qcWFfajNbWFUBdwbu7YQz91dSAMC2Bosb5rK",
  "key25": "4gkHXz7dQ7Wu9FbRFAmDLNfepnk1qfF3uHjeTAENeS1GC71uat4sef7airV7k1ZrgKXifqd5PC7bDntwKmDoBGeC",
  "key26": "4ziBZsBqVFSCtHuP8tehzeYhMjAKWJBhthMQqJvsiWMZubC8cU5Pt7uncsbSqP9JFFyStBFSGNop6hRs12CPmh8M",
  "key27": "3VKAow5h4xiWVj3UXT8v1vqb5rvdm5qpgY1ra9BDdmvCP2w3RW2W4wkhhrD1UhjLTpzNdUnNi5DNFB2AMEFFqJiT",
  "key28": "5RD7DCGCCqHBGFyzXabmqCoTgNW57nzwjYpDCFdzYWz4EvGe4i7q3P8r9sHoQfXx7YASuNjWjbtNA8vXPBLf5A6d",
  "key29": "CXSGCuQAafAFhKCjbvYiLch2D6C14JUMmqB43VNwenFLo3rTWo528zz1YY83A8V6wTUrdeo8dnWjvoXs26GdGkx",
  "key30": "3AiyPs1gDYcR3DekZ5SpiReqPRJutquFGPDVopDzKYZgXUZZC33hdQHxbsYsZYCJxnMQqoDidKzrJfzQTE3CYNuc",
  "key31": "VdZHso4cfhDcaN6syaruDgD1JKUNwWxNz6oPDGvsMSvD1aBtLwmUjEXt2kHb6NMHRirmHZ4nhVgGaq2HJDCiWke",
  "key32": "5JG1SAqguVtMJuxMKPxQPuGBWYveNkM27dGwXUi93vJygBkedfEwH3qCH6A9Qr49c6j3eZ6FMYxdAV1ZWX9KG5xQ",
  "key33": "DUAQtXbeBVWVZ6ung2ubJbNRmoGtF9v3UihgSq3c2Vw1GSbCyERt2j4S1soQPk21wUP53EAgduAvzfJYuGT9g51",
  "key34": "B3BSU2Co72uJZAxG47gDMinfzNbTiL9NaaU32u5vGbVMHtrWHrYtbibrdfvgfbXHSFQ3PdZ3FxYeseQZURTLMxX",
  "key35": "4bo8mefqv98FQrv2ySqWkDKSELjS9mSecym9qiQmpjubbDeSLJFUcxAXZ7C5g7kP1FxjFYeQDMYT5NVFi72LZWwK",
  "key36": "2adjp6TQQRwStWdbkiFy2xtUAXcpE4DFKyPWtRWadnw5nwTcoaGLC1ZHLcJiQ8ip8nJpbzVoA3trDZhF5VGeC8T1",
  "key37": "5BEJAQYUQ6kZ3QSM7hcyAbxT3fv94k4qzrQx8ds5QSoRqZjk3JST6o5NbCF1ciQJqyd8ye2N2S7JXLc5RTyXmz5V",
  "key38": "4gtKJW8cpS5ve37T7rCgJ7W5qerEVDvFEbx36uuDhcxAYJmvnUNzvGKHwoWuiRWYPmu6u5bBGnCDGTJ8M8CKHYhF",
  "key39": "gi4aeqw3a8Sa89nVE8CJPkezaSSq7d86QsuPMV1CfBhdrFJewgZ83LY8PU4mEXyuSag8vtXquNCJmB8Vkjo192V",
  "key40": "3JgvooEmw136qULJd9HTbdYGqsDFcS9bUtq9Lg9GLUL4og9wDbcDcuJ9CTB1Lc56AFDprVQTZ1yCkUo5A7Sn2NrZ",
  "key41": "5jvmCvVETuESh12YDPECxqjKBjr9VKbdqjVvqm1fw7mAbzSxLdWXwb17KqGBW6Fqy6Vq9M264RgoUvnSxo4T5oPe",
  "key42": "5oajcT2uxLDKbjeNFVdKKjrUKoWkuJXnsQveutYP4dPfqRh9EcmcfmV7XrzhBUyz3nxo177FHER5nbcnxiDCxFjS",
  "key43": "5TPn7nXfWoouZpjU14ZXx5LfNH21trge9H4nwZj2xpEbEd1DMhDrkwd5xhTdKuLPiLRCkfCAUCVyAw6F4fCdiTL9",
  "key44": "3yLN5pcuo7Us4yEsQLxmR7gTgjkXVSX6L9hufbr7vGTmk6UbZxwwvF46yCYHkDnHZhX4DfhrZqxLbo2Ama7JxPoG",
  "key45": "Pzru1tFC8sDD3FGTMMowzrBa5tbML59R9StVJZfCu82pqSD9fmucuPaMXEcusswToqaReRrvNoGLitxxjq1W3jh"
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
