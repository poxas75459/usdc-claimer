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
    "VvbcgPB8i7X5N1PS8quWJ4vrftJvWK2V9HTJYAUJsQngpA1Xb8syFq3YVLnKG8C9Z11nfAhCXqd7WgTeSzZo6qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9N2QAE1GvCHCTwJDWPUwC8tHvkRdT5qriSQegPWW2hVeFWw7nCioG9XbSTdgS3WKGmB9tjHBRUUr23KbLLCgZU",
  "key1": "16Do8S916ecKgpktRiuiGefhZcTi63fRpLkKK8KnNY8zEENCnJ9Qi6mDvMUmj7roKh1FkEssRfama9PnKvZ9z1s",
  "key2": "tnTguzV8ejrs2kkHE1Xx9d2HT8kyCEkRAxiBrSqBPTxzEiQkyGAHibjY6zroGmYViXboYehuEGnF2LyfMMJcEiy",
  "key3": "2fMDFnXvzoBbsiUDc392UyDkGfbBCDgSgSxAXznD4UvmLJWF3NSj7fVthD4DJSA9e9zuFSo7JcgCMsnmXP8Fi4n8",
  "key4": "4AwPQZeCGhPRiUMLQ53KJ9htc3Q5dE26oPg8JZo2fESX6WYCEpXz5LEhCvsTXUFxXdQZrLAdYtzqcuT977oYru97",
  "key5": "65qPfa7Wgu5ApS2siXghFRZ3v8mV4Z9V1JFNqAbTE4X7m72BeeejJ1DNmGB4sUqUhcpjLswbtm9QV8WogP6ujt4X",
  "key6": "5doiuNXGbJmiXPceDwNwKm5nV6FsZG2Mxm2jGgFdqMEYSRgX6VGepcbEcUz85ZTQZG87LzZdn8pvfGkXN2ocNzQz",
  "key7": "4WwJpy8h7UrnbJH9to5k4EfH7Y1iY7BDhUVfUxdKUhTCxDVpXtWhr6CH27sF7jWT4BAyoGsHicNyzCYyFh1TgvgC",
  "key8": "5DhxUcRrGbXBmrtJLkEUm3ZvfBmKVoMjcG6Nky3f7vAtcZrJC8xneGgVm2W8PJYjGtHCwhbMcrjZzTRCvcKpnV6k",
  "key9": "2LQHjq6jRynohudXM578xinbehHtoVwBQRZVCz6nyN1XiGURsgj6oCBr4Qo5RKMx9LEEJk3vQEcKeYRngyii7fd6",
  "key10": "2UbSBn19BTD11b7Y1bhNvNEqXUZr7WfKzfnnADMcrjNm16EEkkEPJVmpXnfhbXEjJ6VutSBYY9UP3nLfKRUEyvXp",
  "key11": "fE5uFJPnsyJ5wdbWCmyZftb6Gopvh8so3kfyQbmZmqJhm95GyVcSB56xTbgEeJiXuSudcRTdrMKAc14b99oMmLR",
  "key12": "4E3tjzUYnWHTR5ibexBAQBnjTN6ihRZfogKc3ftfk5PDgtU6btMfuyYZvjNLUwPokb5Gg2fAeP7z66QxpJin7psK",
  "key13": "2Y1gCvz2qe5zMB61ypAxjjJacA2Nngo1k5H2DtyksSTuvB66EebuB5zubaHY8TBDhq25M15qbe73Y9RWUtyvXgfU",
  "key14": "3DdWCrGzYDaMEb9z3bwnWZF3nLK8eCcdXbiowhiY6gP6xHzskqxuEDvnuY3Cj9L4EXWzHg9Qkm2wKUNfRebPkKwf",
  "key15": "jJU4iVNJ2YSCWn1WiCAUnpHfyyuDPLnqYZogdVuL5T4kEbYus2CF9d9VDHUsogqd5BpbtrDwn9ZbD6VZDNFgW3R",
  "key16": "2jV6BL4FxYc84L7FrPMfakTUL4BRYRs1YUfQVZuydGSb5rEad7CkUtnzKFBf1SsffjFPPX8HSG63af9Z7kjoHN7d",
  "key17": "5cYpkctB5H5aSUqAj4VRESoYPqqrciC9Eq6WbwgD6cWnFcxGfpKfPJWqErSnyoykRCKPuZ4ncygiC4WnWJCCp3Gw",
  "key18": "5F5ewbvjTnvaznKTG4RYU3z9xoAwvxi2KwdY6cjxiSWVwRqyWQhjGET8z27SRp64BL9CLPbQYqAxihdcKNr8eK5S",
  "key19": "49zCuM6UiAWzbjDuWcYc6KnkuaRzmqsHW2Nzq54rsmx3NGN4ZePXP4gkuTkzkD7zzskBix4iHRTZvtNYq1LpA8dN",
  "key20": "4QHxjsvgEbpVokNE9xuyjfKVZqnYivPkAc1nBo6JcxS1oiFktPt6N1AgKMiTYpL8y93b2bp4pWoYPLua1jUssEkD",
  "key21": "2CRACozhKbEwMP33zcDabVEpJmXWWxaFcw8ePWeL6pojZT1mxJcesfYDz3W3FKQE2SAK5qMD7925fZ51T4sesCYX",
  "key22": "VPwFPjzbSHQc35rpbX2rAJa8tiJp8cnpDNmSXEHusqQcBun4HhRnF1wnnQCEyQ5ikiaMnQpK1KB11hTaVrrU23j",
  "key23": "8ucVY6QVXQX946DCHJg7ZyXXoem7qj65zaPEPMwXo2dLJ6HhQY3WxyqhVzGvEA2R5riixgnMbjhjwpFs8AHhmaC",
  "key24": "4xwKLfykvKgQ9Ms98zbrRL1Nc1MhVmb9N26CSJ5Y7nB4xLz5tdXYp6sPZL4oU669CtpY5ycWGvP3iMe5ztPc3Cy",
  "key25": "4X3ShJfSvekyCmHX7XRqq15aFXsXENWYS6bncNaRtgbbXANbSEDre47ACM1t56fnwTrw1F1SUDdskNdvCpL6ASW",
  "key26": "24hyA45zFxLFcmLWSTJ9f5pd5XFBFuRJN44ihSnLnc72x3nX1sooXNfarQ2HUrxAhy11nxvAdCy7TDVEX26DbcEE",
  "key27": "3Ah7etzVe7jAfMC5UWfzNhianHSDzE8akiXJ1dGEHyVvAEVWzgzxrdqGrLDCotbFiHqmhyyucrehCmCZ8neUbMxY",
  "key28": "2Y9BRRzsKwsPTWaxB9nv7Z5xT9t4XMFAEBSR5n711cqXcfJ1SaJuKhybBhC2WHzutrCkEGdAiuuMcwD4C8XWBAT2",
  "key29": "4JdbYHPgPDU26PmMN7nYav2EMi5ynkfVL2AATc4PPyVuhTETPfnvGAa5Qygzorv7N938hJeeiQ7f7hAcLx2ZcoFb",
  "key30": "2ARfNekfcZ2xHYLGemNrLUZzZrnivGDMkXyaB2GsGq3gzmiDzB8zNT1fn5gMtX9CXAS6cqzro4agG5DWpZDVpTj6",
  "key31": "rfRZ3nirCLqrPPP6tB9jVeCatAAPtZzUG2JEXck6t8FGkRqNkH7xJQdgt2G4997ZV1Eskm3MenkMsRLjPqHfTqM",
  "key32": "5janstg3N285nVdSYmwa5KDtUQ8Dny65d4nucQkBhDv3PT41Fep56jrbxZktpXsptizNcZFg6qiZDashthjKHnwM",
  "key33": "5vjfqicuT7hPSvKoXGvKLyf5LghG4S5cMm6WP1gV7JWpgrWZHoz4ymP1WhqvBYVZMh6ZNbtPertD87dDyJbEa1gJ",
  "key34": "2PYrL4yTn1pZkXtJcLvGddhZf8KjKSpa5VoAZczuGtPy6TrxSyRKSUkvL6xQZHG37mMSbAQNjVbb49k4rfc28iXm",
  "key35": "4f2pPQLQhJmbMAKqQZR4QpBasBFmucAUrpsLjx6pWEvtZbUyjTsNtL2diggmoNxL6pEdJnKp1rCm9gfPQ57WDqRt",
  "key36": "4fu5eDksES5iSVWXA4WNtWbBmwx9rMaVbqAxCriXhWomw13AaCJW2jLeBJiERLcUw9NketJNbqz5hv5mhmaskqdH",
  "key37": "3XPG47yLM4VKNBkbk6fYdxA1HFiN5Afzi8D6hLE65isUkGAqK3oUaLLZrsDJEgKxGNhv9qzVeZCDpxMAef88pBSZ",
  "key38": "vqEajQ5r1zFEiBgg2L4n4m42aoBtFH7L4KEG9aczXYyipEMXZHqQb9tuukKtDLYoVgXc1cCMFfj8FrS1yRRjJZJ"
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
