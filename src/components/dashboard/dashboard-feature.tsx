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
    "4g6kYVHMqDy4pMEp9s3ZJG8GFY7rSHknKXdgBB7cRffXzxdkBRPoS6urNjLMMLK6mthU2iXmsBas7gSPV15ja4UN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kN3rVu8cPAtgrvGgTF9hScJsK4DR3aYw3PZ8azvvbAsW3ydvX1vckDrWBah5bRH3f7wqEosc6oU4PbgxLYJWD3V",
  "key1": "5BSC8JHtWgdz7wsBNubT8jnvtZiSvpY5TkYvXM4PDeNED9SQ4zqkHfNNRiDtDrVK6D9t6wUmPGVkScUXHvQpvmi",
  "key2": "2C6rk8ogsx5Q5MchGzxTgoz4j2hsLTV7PcEfWjJNt68rb5RT1KgytTX3QHd6Bioq7qYLNy9qRN7PP71bN5P3JnCN",
  "key3": "22xNrrA4GjeZvEMGzgPQsmkhzXd4aLq83FaMRhetjEvnkqoGYyTBZD7b5NH3QuKCn7oMczzHsbaYBmQyWrTDHTog",
  "key4": "4DfZ9gakmkMedZDWGxtiJoLNacv6Yj9Gc3xJ3SMWxcbfVqByGmwCY45Cn6nYmzLLfP1WABjhZPApfjT8oWcNEJcs",
  "key5": "5F1PmZNkP3FDHB8kXjEm7Zx9dvUihHsstZudwMku6P2wKc3cZXjuAAL24LKiQ8wVCjzTRiJGNfvAXHPgq39UNzGK",
  "key6": "5NYX7qcdycbnFKBtgKZ2KjbZJ5StgoGph4sF2TwFRgJHZMsQWtjxNauWGEmjStRHuuWDMYmcHbqFhBxaM5v4WFMc",
  "key7": "34x3kwDaVpSQz5EQ9MyZEWCtA6WWyrXHvcq2Ludx66uPYcaxEhARyVPt6SDvZgArAAFCCXYFw15uvKMtHdBUC8Af",
  "key8": "2da9z98bgdbbeu7Eb2CcmEnBeMkbVo3KLhWdVU3MtaG49K6vRTr6pWzbvvtDa57RUQBQg65Eggi35ZAjD9uTSnYy",
  "key9": "PNb4bDbUZMxo5rpVt55Hxn9xMvPf2jcz7UZuQRFRsqu2FoZVAFk6GDcA6nz3b7jFodLMK9dnU5R2Tk16sqjzCex",
  "key10": "3iMGmPssb9ZwigZcvVUHL46wpoHduqSAEks2vUFoHrBJkvW5TsW9zi5qZnZcAPmFSKPwybj31d2oCXphdgPVJF8p",
  "key11": "5aWEVGKa9AYWyqCr4aYsMVLwgd3o9ZDYecoCL4ubvEjMF3uR17ZMKw2T65JVWoR4B3Ybfa5rH6QYHhPe9QSTMk6x",
  "key12": "2J7r3gVmQFEqhf5JUT6HKBGFEeCuMUN5iwc2Mz5WVwMav43msTVQRoafkHpuFSKtu8NUwEb8m7HJfmKhr1UhCkNE",
  "key13": "3corbNMjaeeNk9U9roSmRuzaJ6ArKRjRRoBEnrkSLQEy6c8XS1JJB1giGip8R4jb2dm77GZex75zxfEdmdEDGBFc",
  "key14": "xfFktiJTs9FdFtTPBxTQNqcZDuu6eJ2XqPQ5KYFKSfE54Q7S493zMDvFuTGsx6oe1T82WbWPYGaHvo4xYECE1w7",
  "key15": "31fEZHFg3YaZ5XWcGLhD5Qsa9HDBGshT6a4dDVTCuQxdmczbRfgdLc1smYTxJuncuFF3DLvtpZ2Y4vouKki9k2F1",
  "key16": "5384sEfGkjqQSNy8FDzjfxd3tHkNeCe9QbJgZZ7gJVto6A2me1aYoR6vn2DSLM9KYe7P2m1RDKjUHzihG2nhCdqS",
  "key17": "5ytvsb8kS9ZsfLzXuCkDLbgqZuUw343KeMBwHL9wXC1Spv6jVAwNQGvKgwLst9mgGyuLx1QvkBEzzxQaTmL9EPEG",
  "key18": "3FsX23DjBjEfVfKe69npK9j36HeLzMoNYZLdJY7dfsq1pdBYLmg2Yosz6J91koYmLfTScbAvMDnxNn6PqHRQJzbh",
  "key19": "XT374ue5JGxWVEyR1kC2js2CP9cYT276BWmCN6SrKmrq6rL238qyzFJBC6sMFs1cp1euD3mxWhEZ42DTJtiaJfB",
  "key20": "4QHinHEyZuJpMRtdjcqDkYbs7YroXEzNisrzWVUhQhi667gd8o8DgNtDtqPaPVbSjKwWJ8DSwCoVYX7nPGp9oP4e",
  "key21": "k1avZCXhxZjLhnCcWWv9gqFVKCGGceCAc2oyYFF7du3iJ6cr3m4e5Y3vFbmgB98XCVxQoz37SWWtTRt8yuZtJwM",
  "key22": "32vHNEuw4SoUfx8ebFJuGQw2bVd5D12ezpeLyRjiN1Y4vJGtwNK28hHmBGiiNhzgq5TDPqR334v9Qfs1uzLg27L9",
  "key23": "4nJHw8qU1ViHc7V21auqWSC7PqaNXKA5ZJfcaDfnqihtdBXzsPk3LqnXFy4sGN9K8WacWHCcwuK1p4USHfX2dTV9",
  "key24": "4eTCkbXdMFdoD32c4kidjzAiRsnPn6VEEtcryHRVQHug1HSWAsbuXaLWpeKHZ9QfSeiyNwVzQmDXcvo3WTVQXB56",
  "key25": "3aWoS8uxuT3uLSttMXod8LZC4wjUz1uDqHyzGsGM2MwPWUDDBZ6da4dvZFYJR4PbncVyYZH3gGVofDdjcTSypsoA",
  "key26": "4c6vchWDeseSLkn21CwjjcRaXKFDYZp8fgkyDeSNwcCEZ845wknTQSckU3WcFrG4QUqpAXYqcNhhXfn4uVrdbMdX",
  "key27": "2tYWupZRn4Rey4ZT3ermqwrfYKFoiLWqYnA8dbM2CjmAFNp4i4g7smJpCE5mtptcA19yFX9Z2Y1gE5TrF7jeN7z",
  "key28": "3CZNbwe6oaUpBgxkwsF2pb9L7XeVn4QtitEasceChVzzrJfy6v9HRajx7WgByi3kmxW2ytzRQHFkh6NKX3P5Mtwm",
  "key29": "3KhyEY61af82Vd9N1dzQZWs9F5GUUFwzhqveumXqaej7CHdQpe4N4CDENVLG8JbfTdxL1SqaLuVHAxPSmc68mEWn",
  "key30": "4QfvseyQVF9rZiEF6HBM81ETy9hw6ntY3eJitutbdivTJVoQ91zno1sPK5zuzc3hooDac9tzz74brSw1g6RUsqL2",
  "key31": "5hHGYiS4QyMhmHYoj4jZisBmZxJMRcHMiErV6V9FMNk8zcA9tfPfww3gDkyn9wZnWAHBAxoj1DzDykDPe1PtCKF",
  "key32": "52GM7JAZoonrLJ3ataRXY8krCLJ3eB1bu5LiRgMuP9C8j85WspCWodCMBY7aFTwML4iv8jEVK1usxjzmy45QGgoF",
  "key33": "5dM7g6UA9rrkDM9Ptz3dn6GokdTg4qBSMs89rpHArH9zDtnSPD86YwHJtQZUqDNXcimVpwp3WSj5Pw7CZVmsiaZs",
  "key34": "5XCWUqecyGvoDGFviURtAYckYdsrdubQpCRhJ1ekaKoptf2F6hfxF6gSbkdZyEJskc97zWRudynDVp5PESqX5oFz",
  "key35": "2rkgJnuoJwCrLcTKRu6HrX6tAKuaAjNM9yuhHYnGNsJppWXRrzE91Lu3jD6xcwaW3rYB4PCjFe6RU6FHQkHjNvrB",
  "key36": "5k9tga2mwwMYmsc9b2RLBicafb5nLcWsg8v2Bk3TYg19SXCxzYbqjNenqJC6CRSsPnkzw96YrUnJBBfiUJZLwBHk",
  "key37": "5negczo49NdjnswM4jHoER8x7QwYiC8kcMLwjbr7RwpLidcwZr7gjdicSbdZcNbw6rhY7idJKTYAs535zYKzNkgK",
  "key38": "dsaG5T1rgUSi36PByuDdVvHJVSK5af9rRognrsa9Kx491cujN1tdMmvHq38npuuaKnmTeVPPd2Xa49F293fGhrC",
  "key39": "5fU4gZm6iyU1JSsDy4bLqHQrwHuemXx2cJVLAFDFfYW4dp1qnQazuMeXUAD9buC7Ptt8Bp1y3Fbeq1cwioFv88Mv",
  "key40": "2P7MBMwLNVM147YVkLB5ezLpY3myKiDCJfBdPnZ1vMxrxRgRG22c1kqwdjhyrA7AVAasEVDCw8Vaxw4YHsGob2Fo",
  "key41": "1hdPQm49kgQ38agrEXPVTEHGbTfZHC8Pm78tiLwiyNywguPZpwrEp5PKCRabcZtQSVQS4qLgqfMZZKuYj4RsMuU",
  "key42": "65k314MSD7XANfergpTj51R4Vnk9gKLx9agvhrEAiDDUZBTQVwtips9vMesh8JKfy8qaJUBj9pEkoVfLN1Z51bsG",
  "key43": "3iQacSNDtchtt5S3hNXxS9cfsHLYswPDdCss1Kas88tstezWWsEn9RA4SbnXr2DK7NHuhmigWcBAsfQjcq6Hpq9W",
  "key44": "Z1Y6Ynq1kuo831hLFeRnkSkucFqgfN8Y9x4eNaQAs9v4TTovTFSZbP8oEPAPjN3C5jTxK1zL6Y1M9RqTLWAWxpS",
  "key45": "3LjABa6Z91e2ar4JQGYuvYFWJoevDvWH51VqvpDLZgAzcpeg8U7y1tf7WCUYjsyPD2xCWUuHK7nGqJcucLUjzu6H",
  "key46": "c28Lzv315WMAjW8zQwUoVL54tfnzU7PFVM8nZbWSbjCNnhnS4jdMrsq2wGikjqM8avW8cBL6K5ju6qRKNo5AcLZ",
  "key47": "4Fmy2gGu6f8kQfREzjhbCXV1iRDguUurNjq1mjpNpGi2dAbFnhejR3bxaCrf9GsQGPa1DDVA6SBKfvBDwhjhk3bq"
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
