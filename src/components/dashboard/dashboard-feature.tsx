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
    "25FvcPntV2A2UakxzP84C4QnAWzGmFnixvV2TtBLnkRPhdfqUiS3cS9mobSo9r7pLPEEj19GxRF6uKD19QRsziZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cXiDGhGeGrxhNqdj4kD9M6w5xzUM8AW7bMCagmiByx7CMYzACRPgVsCLcyXnCME2pkBrxU7gSdqUnqfXHBUALHt",
  "key1": "2HhmQAcGLRJGeK7aQaKthUR6b1fn1YXrfSRKBh3Q6whG2ECKyJvmSKsxDiWEv7PMwP7SWvzuV1LdzA3tobEC9uSZ",
  "key2": "2hCcebAXDR2e9N84QQxDueT21eSdzi7TbAKAoeDFDzaruXKJc2U9L4wwoNCkqhWDs729QP44Uj6qesRV8X2AsprF",
  "key3": "65JaYoknAzZJqkZgaNvhg3fNLsLGK7nCXkMdHRJoD51Un4PycycWLPJ2wW7Phw8DCFmmA5sekeNn3hCuDBAQJEnp",
  "key4": "2s9V5UXgtP5dyMQrG8TVnXGaAKyDj2HajY8zE5a9XvDjyLkWJPzCvBqczWWmRaKfcmYf2zxE9nyPffBHJhb9buAz",
  "key5": "fDDb5TUBd3hmgsojp21QsMECV29nigXCoxT4naPjFj13S2eQBK5RFUstsa26rJiyHFLWfY7LgJGKkNyXpYUYTHo",
  "key6": "5jKDeaCWGHHsLYKNb4L7q3CeKcvUfrfhhXR1gm7NaHryAfdHyaARdPudxuJ1D7okHqNxwzLXUAkhjaZtcD7GYGZw",
  "key7": "63aBVnBM7wq261wSCL91nc2zvshgyieS3jZ3zVBGYsJ2oHr4za8grLrvJwcqxk3kr7XphF62QDHpG3BMRsHjZh7L",
  "key8": "2gtCiLNwVH8Mva62ivAAKrHrLraC6RBGPo3QipyDeibHETntbZEee9vj8tjvs5SthXgCQAjFDQHZTd7FNt2oaSeh",
  "key9": "5RTgNvERHcGYypkExevqFDSnthHNVgZhneqKYRiZzoAa5WrLmWD4ftwNSjYYCe7yanRNcAYQ4bo7DcLh5M3JCeSn",
  "key10": "4Dv7HjwqFRhFeuaU6c9W7RjgYzRVTXLNcjxCNVCeM91oj2uciYyMyANjgUESyAjfPqyd5iYsW5UX7xXho2dphzTM",
  "key11": "3P6YoyMFAwwAPFdtwsEuFiHD38AyFmxyGJ4hu5B62j5vtC4Mc2rhjuhnMr7AsG3e3h3S92soLd2QtvHxX9mm1V5n",
  "key12": "3zwc3rfx89ujjs6sL68tFTNeapJvYZj8bKZh2E2UqKSjB88vAqSpQipTqtBrJL6ShV9QSe7iLPDPz2e9XbxuMgA5",
  "key13": "43FHsV4cVSjLsiPVnGB2G6w3Ntu3xqn6vs4fVyH8okTsQmy549tqukUhfcmtLwg96sExopRzDU79ieAbQwn6XYNn",
  "key14": "4tHtyLpGcsfs6hskryxGaeb2sa3Tbmg92LbkJe8tvK2ortbzXtG9SftfwaaymkKcmwA7DskQd3acjbXyB14Dm3bE",
  "key15": "62bBbh87F1Xg2uXWM5PHeeP7uhDLsYJYKctPqLNdQkdpymsgNisXNDKdvKF25FpwDGnZyoMYTg6XG46ihD4pAPBj",
  "key16": "cbDmxSkn91tVcHmX5PLkvqvUV7irtNjzPoMJm9FJfgLKAFq2FssJmkriCxXnE19eT8odTyFA9p7DfBaYowRMRXd",
  "key17": "5zaLe6nXaCt2N6KZBXC2gZMSqg2SydiwWo4pS3yXFRSpmpu7xhZSmmAAccxv7DXTZGAd9BqeTVrfHiCBgzJpj3Hs",
  "key18": "65GBdP3yFUst29yFZtB3tJguty6vPwqdV68L6PtTxh3Qy4ywY7WfpwiDccawx86qwpPSpUHefgrZHXSK4VyXwFyZ",
  "key19": "2hDySLT2qLZG6dP3qwavVpaGMrpRLnLyCZidDFK4dQFdSSezJanbnQEU1F49gZh8BFy6fbRigxw7QFkajdPuuiyx",
  "key20": "27VtwCyijg44khz5QD8jHXYEtUY7vqPwaYiZgTPgWc2EMURkaW5rR9jDTQ1zyt7WHWcz94iSHFWWx6DyfvezxJ15",
  "key21": "49CWo8PYoaDw7ffvCwi7rCu193oEqcoFsrgiaEfhVzqiutA9ivcXosb3C1W2d6LDkYt7cDjQXho2DSxrHcv1By1j",
  "key22": "HccVWJN1f1qdHfC6spYa4WWzMWyEvp59TKzv3NPqGYh3G4DUQYHaypz3BEcaZTPGUuJ5zJsGkWGXHkoAAbtitSD",
  "key23": "2WzJJh9wcjZGs9pgXVmFhG3XVT68hoFqKcESgSvBchUMFEqUh7vjhraEFUYtGbWToPhJMerYDf7pjdhQx2748Kqh",
  "key24": "N6PRXGcaa1w5xE3HJQAkEGoV8yvhAwXSLCSYV9HdAHNA5QRgm3kFgXpEhsWo6zqFKB1KBUX2HQ8VTVsuzWTuZd6",
  "key25": "3PksLrkk2ukhXPxQr8LDXehvw1S19e7H159booh51xivc67g84fHTfsJEvVrbYcGjqGTKoU5TzRKcNT8gd3tUaAN",
  "key26": "2drtYeekUJViHfHEPhUuEAQ1kMfnCAzJ2pVf752T2gH8rEzmHs3qXdRqruC8LGqwzRY6tSVacxpj4E7KXwpjRqnP",
  "key27": "613PJJ8DeGMiJymx3Eyv8Vj3cMqmZiLXXo5WLY4YK7BBzu7KQLVA19PfzNXHLkrGwowjF6iRmsiC4vCuCRLwVUAG",
  "key28": "5swFxmHMMyRDCw4zpgNkt7eFZwteqxQSPnCTgNwtgW13tUBeUJZGsT7WvaZ9xUEnHoa7o4B3PC58vhNoocrSgTMu",
  "key29": "3SGF1p3LWDYV5oJfMcqNU8sbQyfK6DSWHr3YrHAtpjD6Md3JhMt9fgBqHxsJRsSM6pKBk92TNcj26bP2EK1uUyvM",
  "key30": "icRDAySuqVVLVzwQAqRPLdKuoGhKsJikR3CVRWW5rovByWtryuLH2n16DVVE46KhAY78QyU8mp6iS4UprLPJfDU",
  "key31": "4kM2Kts25Q78sCZqcVmUhUjqRaCmPgqCKXCfo76mwZUacFpdu844QS2pRLuCT28E4kfiPX6qkziza8curET7iKfT",
  "key32": "3C4x8z7nAaqtVxV8jdtV8oPtJLwK5mSsn4oPQYWssFqtXhGiyRU5pQ8sxZU7q5WCA92ANVbPvcpWuUwAzc66SD6X",
  "key33": "5fgHgwaxhVHcmnsG7ENrcgbq8xtdNz7Pi2NFgJC1dDAb4hRDWAfSSNucnp5E8k2h9MgUyzDmMT1VSEzhThh6Hifj",
  "key34": "5gbrJkTwg9xBGQ2zbEiQca1J68gttEBySRzL1kTsCYvr61PXaxoVdNXT1ZL7SCnueBux8K8L9s59JJh2BZtdb4WM",
  "key35": "aG5r5L3gRU5HwqoDs1aEtbAUQPSDjtho2GkETr8byQDcS9eypEUZKHu5CW54rDukY1QuUfRXWoKUGZTz7dgPxna",
  "key36": "3wMmuzd6nv5UMET7hhPXYYi7X4GHBJmPk4vhQnsoUJvG8geaLkyZG2Csf8yVA3C5tpYF69CYJpmkUWyN3yoHaU8K",
  "key37": "2JZ3qj2oWG27PDiSPWw3G4ey4x1BDkk1Hhj1N2JYg4Gt7VgKB5ZbxwRFkbzK9oXywgs9qHBE9L49cGKswvpuh8Ej",
  "key38": "23SoyduEUc4skmZ5xnzzXsn3y7QYz6gubw3DLFQYovBkFSYHdJ5uWYbbXLcCRrdNoRNDx4CTZ9v5ap9pUYkYMAKT",
  "key39": "5SqacaUjhsjL86K43LdYLJzRCkSCDDFZBPCivTBoFMcmtyuQpAwRgrMsw2a1CPSYwhE2EtEpKqM7M81xiWidQR92",
  "key40": "h42BfxiuAqP6QR7FiDinWg1ccxeBC9FqU5XtCZzLyRe8uNbiq8LUZBhw9v7cN2XwbtC8R4o8VMT2vgtsBs4D1q8",
  "key41": "4AuFJhco3xsmpDYzLosAKiGx36mtiyhdszCH7PniGv4CrSEAEjNxACq5xN6toJvgW7pmCJYy6ZxHsXc7Gd39unUM",
  "key42": "3Kf2wYfZht7MpEUrbYaDtDrjnAw8S1jbqrySYm2AXTCme3gV3VK4QHZzRVqsX25Ci4w6hwDuixRtygnB7MGKuoER",
  "key43": "2k96tvpnGHt9AGSECKmGDQfWqvGKoodNz4RhHRzDdHUQGF4XJEyJMJwS1cEBQxrRR23PVkRzgHV2nVpbKskYes78",
  "key44": "5vkF2EGJnJBrnxsJ3K1y6P25Pg91SCmmpNw1xnoXw8LYj55Rye9GLnb8YpdY9WB6s9u9Qj5MVoBCS74vgsK3cmc4",
  "key45": "5SEaD7FcnT4jp2J9fcFFKzBbGdik2him5xqMSBPGhFWJgkMyHW9aZByxsBALdUU1st2a6bUA3CsdmNmqZcmhmzDP",
  "key46": "5sQKHGSbnuGSgqs9EUYQQTFniWs8NsGHhcUiNVe1NJnDh4nEdYA4WyK8JtkGCgr9PU3beV5oRDXe4WhBE8rBQLMH",
  "key47": "52Cj43jsPB3XsCWw1yaoUFYYUrGAq87LPwcCsN3hMthH7GTrPWWvoqY2EQd2jsxj8F8trobiBFjiSv9DDsa2t6b2",
  "key48": "3o6PUqcipukEeoESuXz4JUkKTejHiXATh9JERMzRoCbRSeSTTpUEtYMF2cu6dp9DxZnYkbhXjfobq8i8HuoJqgE1"
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
