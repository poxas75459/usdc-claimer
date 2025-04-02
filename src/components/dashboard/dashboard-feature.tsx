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
    "dr4bBRWesRwamnUowJfdSw8sLVxieTUxUxAKt4M2GYgwbim4dpCCP7WEFG17bkXQ66JSEJaGPzQ46umA81Tegu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8CCb6XWoRpKrwed7Pkav6fmQTbHSFZq4nvwE4xbNE1vvdGxc6AYW7Mevmmmqbp28AMsiTuw3zf8c1FFgoaiqKp",
  "key1": "bci7ZM4iMQWFu3AG8RbcPoEXZzyCS12JQsesRy2DRnCw4CX83xCMCU4GMqghacBB3CkRVE8xkdWZuAv2uBavBVk",
  "key2": "3FckXmE4JuVKUbBf4gzGx7WNMBC7xhMTn1xABKd2omKkZpGayeLsMWFEVpMGcpXG4cq21ZCcMHqEzA59Sx2zcy18",
  "key3": "EWWFjuwVARTndRc4mE6h2rC5W9PDXN8Hxcpx9FMZEEUbDMUtwXHfBuu4GoV1q6Uq7f3DJJH4Do3Hnkqbeca8ts1",
  "key4": "H2kp5VEazakmeDkvZEDXqm1x27D97Jewy33HsuETMvtwwUVjnjd4CZ58azCQS5H3U6jzLYbXNbjGnoF6X7fa3Pj",
  "key5": "3VjKUm8ptCcqsT5UaPXrvHVYdTuqvyLMRp1aLM8rK5mibC4ef2wtuY6EHmhawrsA3T56of2goejYsRRmsFjaZuL4",
  "key6": "pXHxLbVqX1B9DmSeu4YcxhKydZiDdiaASUQtssvQq6HYAzqqnGpAMc74J61Pk4SKcqLh4T8XB4AVkpXuRmMLGU8",
  "key7": "y3rtyGPywGAXe1f1BK7hnZud2LEpeFHwb6vispmbbnyr1svDJpzmb5VFskJHqcGw2SVYaCwYDv2DJYQ4X95z4AJ",
  "key8": "3Tg4JTckJf39QbK6wtxL7ZzEnripziv2zYK3DQ6kDPzSSNLzSGHDXDw1rmzf1DSvfgr21MRNaWqoRvS9hDRgtva8",
  "key9": "54r7MD2G4aDdvxdvErBmBt9o9V5EN1vgH2PMTxQXsgrivKHxFD2mrCuNyrQq3ALUw8G8tLpPreJpZ5Hhh9GNSXQX",
  "key10": "ZLPwLtjEEwGRDm94qibLgDg3vGcYqBx7TNEdFga7GLpeukXZQ1C8F2DRg1msvHFKYHuBJSGjWMsyvsFPt3YYMn1",
  "key11": "2DAFNPh9bPTChkgFr1GoauRmBJ2fXxDooYTcDFyrNXCMx8vH2kseaHe7ZawF7ikkso9vNoGgGGqnuF8w1t248ouE",
  "key12": "3eqRp1BVZfW5UFcrLqGUApRqAARXYkVvPCCKBNkB2Tk2eazPjuB49nxPjydBUZo5n9gy67n72tPBEtqP7VHFw1xv",
  "key13": "bdTPG9CuWHNnRnsziPJSyuaRf2UvzTYDv14W2d1nFwqN4jaCJaMwuoa9DPs39Zy7q7YsZZnKGspSceG5QXeyy8v",
  "key14": "7soRpC4YP6ELYTgftEm7P7uqPGpoVYbskkczyHJXDNvPsyZgK8QdmKxueZSDmuMLLbfqacwa9pj2ucx1yn6EHTk",
  "key15": "4y5sZnsNSGLPRUUvi48cKNGY4y2Joa52Wkg75eG3vo9QqJ3g64nKSr8BTRd3HPLcsYHgnTpEKGYPmLsFXdCo6qMh",
  "key16": "3FaXLCQxfMkKfBgTpcec1o1jD4ZmAjCD4ZG2dEnFbmn9zT8vVVmoxzoMUxsDt2XtucXRbZLcbgNSpS4CKGrZ6Fb3",
  "key17": "3JgbZpwGAtmFEW4wyUYet7YsJ53Si8aJS1hg6yTrz5bayxWjEF9JBt9Yjas4xKu2HAWuSzpNZcVe2qWnQVNBN9Ra",
  "key18": "2X11dXCWAoutzhPUKFaBwfVS9k9vV35f4Utiz3wvXXmLDJqRq5RuA4A7DXuUCzCJLhKXDzyyuNb1F7qa6dpsYpdh",
  "key19": "5GqXKqPiL8Uj98RhSxfe14tAf4uQEgwjeFwcc26KTfdTKqLm4uGVjC5esDoDxK3g9KED3Vcy7sckqSwjQb4kzdG7",
  "key20": "33xnTZdvV4vhUr3iUSUtXJGpV5V8ry573UREr6qNE9V3ZKRaMGmKxgkMcKy7vvKX9XuC5ih92j37XDoe9Cj4cXig",
  "key21": "3woKhKBtauVCLqWi7VhEz7UgvgEJsAcmbEX6N7pnaUhswSjoJv2Wtzuoz9xwQ7LQ3LnYTnJu8ML1coidyywF5LiU",
  "key22": "tEdWq6kuZhxKrjuJgjfP2QfqKNBWYeX2F5JdhJpCj7nRMmNMTxCanZRnYSapDQnh75L7xMbLKou4H3scCS3oz22",
  "key23": "2nyJucrsUxijMd1muSjJbSrof2BPwZAaE3dz7XTANYqrscSdsCiGtBeiWxW3zYAr38t9toTnjyGHL6yJ7HXL9r5z",
  "key24": "4PRqSywy6mvw7R19afDirFt52kxQwD4PsJomirZY4bsfVvwtnUfZ46nj94DwYk7T17MoCixaNS3Bectq4vFpEPWp",
  "key25": "4xLBbcYXpwM4rXazEq2CZm3BhvLFsmEtpmUdnJNhwWD3JvRsrKnmndx41LaueDLeb8oxAiryw6m9P6qkLAXMdpea",
  "key26": "4e4qSVr1EoUpvAcunFgrL14DbGti8249QNNJWxgrMeYLRsrvPSEmqQW6v26ChMrWqWd7KTjkAVA7FTE2adMeHZnL",
  "key27": "4uLQCYkn9ah5DeVvCndpDt6ppLDU1SVchBv2NCvBW6S86763QCKfYeu8a7dhhXULiPLnDCfunpBMCH5bfQfrjCos",
  "key28": "327xnGF9ezcrRtPzySesuPESRrqX8KfmXXcPWsovHcKGrMS2k3Q7w3tMGks51w5fEPV3EkTHdMMsrC39R4zQMkaq",
  "key29": "ZkdBYUkBRVJ4A23p7jD5JU7uEJKNnY8ixzPbxBBFX4Wq78eFZsHrnWuvoPaBj7Ji32mTcrgwRT8awKr31bZgn27",
  "key30": "4imXuqWehqTk2cMendxRZkAYM1NU3mX2yPF1Z3jYgxC9QWwsE57Nz99qfqfSuCjEvcaYC9erJQG15vujhe5bDFLM",
  "key31": "5Wuez3e8CU7QNMhcZUun3KQBQ4TDjedTBoYyDHy9t2FLPXnKEiDf1aXCBB4yucqdDLDVKJDRL2XwYEyKsChS86yc",
  "key32": "3AcJGdXaUdx9ZixGc92CbhpB49rraAXRwkpDcCLszhfxaV7eu7f2m4RD3y3YjBaSkKHHhuiXipZQeeRjdPEdJFjw",
  "key33": "7NUsraUVRLBKRQuP7o7Cabiok28CjREUimAxUYpP7g4FD6xVsyLWorkYt7jidiSKpuGjrXpPiBfFDn3hQ8uwm6W",
  "key34": "43pcXpZYm8bHeFDHAGZsPnZ2aJ1PhfFXS3Hb7E6REZZco72jEFJ9FEATigyVayJZnHyVQCjvCAYFuu3aGfwho7Lf",
  "key35": "5HxfALpeuXzf7sNHLEPqc6Hn7VeV3bGffswjbrEeHxXGujtDbVBgU44NVy3ekRLXUEujJgqpvwLULithkeEtqGdr",
  "key36": "5A6nChmo9AAu4fMVgijLiD4gXP2EgbDx7VQhBLyZny4isZStrcQKFAPPsiSXMgtxB2gtKu97pA18oG9h9azr6gP7",
  "key37": "dPLgWQZhrx2x9bggB1PsEkmPJZNvk7cdAooA23CRX9vwHa8bc67FZigcTxanKt2hZARwcF4zZsxwjRqMHQk1gx8",
  "key38": "4LDU36wtV4PsdJ34e53AHgn4KgWXsn1LQU8L8H5W4xaVgU7XgPZ2wSiU3uRv56UBh9FKuetLndQKZEPSJ3NYUebV",
  "key39": "4fTcgjPHCWdwz56j2BZmoLoSs8pw15MwpSgMx5MShSggGk465k5Pv6rv9CyRaLTeLXBS3wqaCRgJ7J5DXGtPVyH3",
  "key40": "116DW56Dnak3xKss4uifsjCxkXk3o927XCrZypCJfGJRaAkrfWZkmvqHMCMRqBpUURPxgbhq7RavPseKbnscXL9",
  "key41": "4rXv3WgETQkw9PziHtSCsCMH2WUv7H1QW27zGQAEwhjRSpTMFYLRDqgwcuMRh599pw8v1dcFQLymcKtBdWPmH6L9",
  "key42": "2xM6YqVDsRt38ZZQhZ5tcgL5gLjfkzF5NuusWjSryZnbwn1UEcEhN4TfTYUMPAMBtrFz2ijH7c5fx922Mpm94ur6",
  "key43": "2d4y6bxVDE7mCsU2bGYdPgKMj7VNZ6HZuGh9mMHuqvPaHRZToxY7TDpE37moTvgEQjZkvSNmkFdSgRv8eTLJgGs4",
  "key44": "2XrAYffgvUrFHR6v68M3c3QLaJ8QqxK6VgjFGvrAsx9LgL9mb8DTvcoHF3vutzGGLHqm1TQyXo8M3GFnvmcZFtuB"
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
