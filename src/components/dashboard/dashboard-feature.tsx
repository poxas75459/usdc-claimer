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
    "63EcNGDAopN9tnvBCnU9L2nKpakDni6P9tTDam3dFiiSqWGe1WdZWJ2FyCHx9HoJ3xWqU7dji1fVTBBQRwMwnDSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFzYuhUjZkq1Mygs6xjhGDozvH7qzzZtVWttTRNuznaXDZRXuBBW7Z35Apqa429nPdQ6AfRYotAWz452xiXCGQw",
  "key1": "2EnJ7HxpJv9uetssryCtHE4hbyWU1hfzUHCTocnkeSJpbBgxBkA2woJixRmrN3MMX5ZdSi5Vv8KwEuZavaJiy47n",
  "key2": "43MQEVSoaEX75FWqaYuKuHSVBsJeuCGRYoQz96w6CexdpepkttMMujWSG9ViLjYdqt12Fei6kDTWYnuhohBtbnB9",
  "key3": "5DJmHU5YAT8MQvLh9vqjdWGAPPVnatQUBy12qJZTLLhZndYXXoi2bt9hSvwMRkLpSFngoeUt58smognbc5TZfG6p",
  "key4": "2AeC7v25yWaHDq5EtgZ4w6sJUCSfj9ZJNbgTCXbZKH9zbmowuHTkWr5z9cUcVRxW5XmvVKUtgkCiHqCod6jBSiLU",
  "key5": "C312eAhS9K4GSBqV5Kt8DUvuLaFraaHjc956ATRV9mZWTbpcjoCS69PDTQFV97dvQ8N9CrV2KWZuSuC1FKSb5wL",
  "key6": "3BK4vxCNUAcwUp55WE2Y4iH41u1Ke6mVDV5NKCS29bP9Aa4yyyJEMxo9F4Zc2mWQZ6LZYAg6dX4MUdLnqR49PY45",
  "key7": "5o7GVdetb2GJj854pgRRBhBx3BgVEmfowMvV1AEdkJsyp3j9Si9NgnhhoRS6FGYoA12emUdUkDK9ybU39rkSpnhD",
  "key8": "4Ts835REqucbKfCdtHo7TTeRYdVVzWG3LJsPVXsVzGjoBToywcFTfgX3FA2c9oKeijbvCvKGNPMARsU3j8VvbD8W",
  "key9": "5rJu1EmE23AAbsMUVCjtbGs3CzaDjwxLiKUbRCQWHrLGnGLHHZNFQqe6EHAQxuiHDK7u2xxAPZcKD7AS7uKiEEkw",
  "key10": "3n4BF3mYZsqKb9pyuEF2nYpGnvUo1L6arJ4hiEYqRJyspjEAaxFdeVvne877pNUaNKLknSA6nKe7Hk9NY1mbEajA",
  "key11": "3LqqAsjpbvf6eEz68cwArkSo4q2fUmyvPDSws8bUEDAo1EBGY217sQWk2Khkd38ryvHBjmvSizs4rz6DgJHHVXdq",
  "key12": "5Qu5CEdvYbWw4zYqRgeDQ1F34Pc2DKYQgbAePrCCE9nWjohifHVryCrRoyVAu3uxb4sWjzg25W3eG7LxLzYViQrw",
  "key13": "4UMR2wKjSBWkMJY5LHosNh8sVkBiMMQQFw23faBHw2bi2NcDhkAKfEyvAzCtwm2pj3qNY7KCudAQRM19Hk9cJz1V",
  "key14": "3oApS5cU4UyDr2NZDDgQrB3HL1Fcc2suQcQxyhyi9rfQRDfvPckQBtc5AEzMtortB6iZ77utyeqNFhqxrDobtBmS",
  "key15": "5YW4Qx9hbuwHgtx4cWQLAcWurTun28RomGw2oD3Qome5DD1zvnjuJFUsSTSxZRCzr38ppLoteJUPFgMuvUuM7RL3",
  "key16": "4PxN6YBd1VyZ6Ztb353mBtvbzwde3sCFMuGwbFkwTSxnd2kh6Bzh1R6fyFYiwKoZxNsh4U52NqeChUettQzp1sbe",
  "key17": "55jGYHLSidKuH5w3MP8mXKqdurQFA7Fgm7FJaHxFSwvN8aymhYxjjjJ3oGQ6fCyT6UeB9PsmZSttAnqovAEEdhzc",
  "key18": "ES58iE54UWokQA1gcrK2AxbuC2K6CuFDx8Hg6x7tYzLsXr1ZdGmEe8LRYx1miESVbFxZ8oUWcewvryWur5rCQMk",
  "key19": "4A4qmfmL7mYokUd8HSgu4MfLrNe1KQx87Z8ZPtZsGmadLaXYDLqndkLr6F6mt7fB3xQEiNVpcN4RSNMnZLM97uWX",
  "key20": "qvhvVFJUCH56SuEQQAr2eXh2dart2VFJPmXyGmsyK5kdcpLjB6gh8xUVYoHPkUuzYux8ZFMHtKVTYkDzFUyTTyW",
  "key21": "59niWYrxSMwcPfy3MUTyssQ239qf24t3r4ycQpuHELdJN5dauuGTL8Fxmj3hMFwBaQtTCKcxdquSTmeJSU1PXn6y",
  "key22": "4pN134g5NyaVYtS5v2v8e3qUdSH9AJxx9jVGu7knkatxJc3U1LnjFvv4MB2jAXcXZmRX4W7UQ4UYzT3BAiZqeF4u",
  "key23": "24LM98TMyi9GXd2NJep4sxQe5sT1mbYLKAeturNKBJV1RhbWie3d72EWyQuxXR8GAG235vkSc17qLZKDnexumNWy",
  "key24": "3PXVUp7ujMFZxqtFyK3qCwiceXMzBH2NqB3PgWLbucqMxWFpu3PXLpzyAxfVdAx1CDgXD15wpk2fnav1M2UKQGAL",
  "key25": "3xsVYfcRGiLfYxhN59Fe1fecE9YGGKxRkenfBRUmYu5z1PjMBbsFmMtXCa5Yt8tETqT3sQWTkThVkWzAHNfbHNfM",
  "key26": "ThK39zp2SUHepWm7okdHq2Unt99cdJ27FNLSqPwRYoo9DkxKpoKt7JVwJuHGAjgpRob2qKfxXxZk7X6wGSDaqxp",
  "key27": "3xUpLagh5nBNesiTuYG2HqWpDMvMrTHrT9dtjeErzKhMCxongmjSGwZrucZYhfQFdBbgJZNnJAjAJAtg1NjSkFAs"
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
