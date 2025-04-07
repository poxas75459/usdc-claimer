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
    "2ZAFA9uPi2YUSQDYoypM4STsYhrAvFwJEEKEqh7fbJeCAgmtoHAwDVGTKbHeLwxSjX1QUPkCg51sQSq3Cy2CYzLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G6EBPdwmw9gHiDTQ3hMu3MXrFNS8XqXS2yF72E7WGwpRYdyF9zTXa6qjiaWHmbtcf6tu1zCiXVEqcJ7DkSGXqLe",
  "key1": "4LFji22X8mf51ZLPVbTyPkEMVc8Uf4oZGXw9EgdXQ3gUb6xG3MFARkBPp4H7Qx6m5rEwgmtPbZQUoqSXyR1dH2EG",
  "key2": "tLM6b6RU2T5B51vvRppSjmD8fFYzibo48ChARtccKC67PCBTTqDymjX3RTo8CwtwRapS1sJRSLLvJtEmf7XrqZa",
  "key3": "2pp4ufbxiZdToerVznE51Tmt4eQ8fNKu7WrsCN5B9g9Axi7XzGvRcN8BckYjxM9xpJtBK94eGm5KfFYsV5wU5b53",
  "key4": "3Gzt1mLMHYC45mFZucMdvqa2LMWcsaozYpfpYK736sDBNytNLaA2CRy6GM5En5AM4fQAURrQZkzRAxWzJ77WrJ8e",
  "key5": "2wQ6AhpkEmiUpoQjbZosMfpDN9j23jvbPncR7VmxMonaCTromCLqHtznp1ntdzjxDnthk9E8ie2rdVteQznSsfVu",
  "key6": "5PQyTZWPWsx6pwyayEyK72W9qoVrXW65JqXvS77k1fyqdQPRhGuCyZh1mP2UvhGM8WGovhvzsVShiT56iBbYeM3m",
  "key7": "2sMjWpxMPJaZZFUKXZ2PDE4agBohcyzfWiVff7uU5SQSqK4HiJax4yHPomWzdVWu69K5XVwKZ5szBFZ7xSEivWzJ",
  "key8": "G5HaGGnGMuT53PDF69tHpcvqeq3dJBoEJNA7pgJ81JbTELduji4wFM8EDy1FK3BQaaEDNv8pd6ezsp3u1p6VegL",
  "key9": "3u8uLr8YgbQb4wBpmgjd6ZC2uD2LjmV1HqFdEBm1nfLbzJfrGPWjPTmKwWxmrJCG6L6hHBQCn1hYzts1asghyBnc",
  "key10": "LewDpvpnJbBvnvNfPrVpjqGuMAiKkCd6QMby7adAktWKRRsdyo7Sxm25ZFJYCcTzYP43Zrio7xtCtzvsKK4GEsQ",
  "key11": "4fpCuzEjE6psj1LdmaK3Snye7RQprVD7JifQb2yiERcqPqZMVri18AxRxiKtZD9PcgmcLiPNA92cPXbC6Tv824Wb",
  "key12": "fw4FMbZjr8SdUJDZjMqXkmUbqxC9mFkLwjWwfLKP4VHacU8yDaYFH7pHg9vcmukd6BDyuEvtNeEpeHWcMyN427Q",
  "key13": "3xhxMfTGNEmJt98MgGR1QaH3HoS1mHpe2bZS4BDY8RZS2TMd8taniGnhTiDKAm2hPFWBR8miGu7sDfg5dLMKXKqg",
  "key14": "33or2tApHo3PM7YavZN59qxY9FXtfLkAWcDDvAWzqezevohvnUgnoQ5WqAr2Fiq5CDzGHGdb8oUCyERPKhWYSsyg",
  "key15": "5f4DkRHsCZhduc9ULadrGnCKurNbLJYkAiqutvsp9o5kMQVRgZ13DXSkqoDCikyAjaPsxuuGMUw7WNsTsqzoattF",
  "key16": "361Hgf7AEnByzhX2SBM7gwkB6TKDawwbu6EToytkUKuXei3tSozcrFqFWM3pPaz3CpQx2YLQxghCy8uNrToUofXB",
  "key17": "5utPBMXu1R7by1bjPkSjpyZB8gvdJ2ZWmr6Dgo72UyuteYhcPZTUWRgFXXhYKtAhAeFtVF9LT6csgE5MUq4DDXZt",
  "key18": "nTqhPWiJXqntBoUVxtmQr4C5djTouLjLeNkPhUQhciU8zcMJG4GuKbbXFDTWwYVuKxtnueMJFqSkinKchPcuYtX",
  "key19": "3EkNKcozXSAPkAJrDxuvPGYGhV6b55RtUKALtCBausHQwFVZHK4TyoWd6hVq5HjaxZTK9jjQNKWWN4W354hCUGTB",
  "key20": "3RDRg5bduz9FrBLy9mrGn7FDNAn95HXZKrqNaUkRbTfqXs5LJVxjrMJae8RB1EgExHvGFqBMD9QLsWQV9aGkqFWv",
  "key21": "3G6GpF7PRBwpSLsVWYoWAMnGvZHMcUeRff88JCSANAyZAn68hXKNP95WmEoEHUbgWjhfzDWTCnSzg4Xv1JtwfuHX",
  "key22": "5H8tHwxwcyjRw2MxiVpfscxXYGSLxmuzxDW3NjKK45zV8aTbtsJFjbo86XPfEFAskdDwdxNn1YmRvdbuVHLyQDuu",
  "key23": "az5tQJRevXWBanXRJSF8gANPSTGkX2pRhcD6s6n7dFB8i41yvw9fZaWwkcRniyhiymGRdnv5usVTyFhQ5H1Lu2F",
  "key24": "4cSAUVc6TsYGTLQB3rKVGqeXvpqrvyDAZZSXqNZkSW8Kbs2mhfKVximLFSiCd9Ua1NdKGbpHKi35dAnNaLNZoHvN",
  "key25": "a9vpckweQ45Afoq8akurrK77izNFRV7fzwH8pApRBmU787mG5V4Fd3yet8DXc4wH1H2impjvNucvtz5KRfrtwEa",
  "key26": "3QkQ95nN5jJJVA1DAZUwGK7TdV5GAmd3u6LkFvRAMBDCbSh1fS8fjvQckVovzhRwKzcDrbGyugiv7A58oDtE7raJ",
  "key27": "4DDEZ4T56EXuuCjUa2yQNUdpD9YQajUY4CsC4daz8zm1FhVZqUq2cZxU23Xy9VWUWrR75u9bfPJs4h1yXzRHG3gV",
  "key28": "5mmvY5FimrBQhMpfVeWpA9qNx8kcrMsxJ1oWHkMJZcdyvo5VVMu4CRqCdGU4JFyVgF8nCRhDztcXHXykhEN8Kv3X",
  "key29": "3dAisXLLFm9w9UTGbvRATuTfNjgQ171s1iuF2WUkDUqMDHEpVWYkeLAqmHqvK5Qmz2UwKK9ps831DL7ovGnYt6HX",
  "key30": "hSWjrZoirctTRXMoLG2REDdKnu6aRqjC4sMgEc9FhdbXgZJPvUTrC2UEG6ZiCvp12AULUDqMi8Bve5p1KKFqv4y",
  "key31": "44cK4EsFodpAjgAaz6MJhVP42P9hq4xhuUShFcfZS2pqc9pDR532yfc1qKKxuDXbijAPSWVYpSr9Fxpwg1rDSYQY",
  "key32": "R2TFyv7N5cz5jPy8CwXqKHAcDY98JiXip7b1NFwY52bXGeoe4fWVwZubuFiX78UARLhNmstnKEh1AeEZboWSZQX",
  "key33": "8KNrSNS3mk6Abwcgaccqs7kMd5YfLg2iXTR6PRvQeTUmCutSUXQkYWRNvCri7eV8ZXjBYFcbzo9LWGxdFY3Zo6k",
  "key34": "37gb3aQ1YfGr4v2bDtfeYSH8ZEj7XBSQU5W1ntTitKDbgSLV2Yi91PEExupyzc4mP1fvUhJ7QvpYQNK2ycvDSt4F",
  "key35": "2D84YX16VyJjyGzFLfqRLFE4pSx1Wq8aBohWvkzr5sfz3fh6JzqoB8GCF3gaNEThW9K2Pp5YhDJQtEX36TXA1wbE",
  "key36": "5ddcRwh6bA2UamER24qCnheF8xhn6cggGE679fRLtByr1XDYLY85wjpM9V2UHTfSoCbZmT4YjK4uBciVGsV4CkZu",
  "key37": "4ENimm5xa21DQWKKdjDzxmPb72rJH4dxKeg89hVEgfNpBzVFWBP8QhMpsTQemzG6CAAXdTwRuHtW2vSfKmFyksUY",
  "key38": "5TakvYjkLsnuPn5zcHYH4mYcH1edDh1zGxM7TNnhykvgVqgzBBXM68JDTL58NsNbG9bgb58HStzuDzhGGDjMM5CF",
  "key39": "5mK4FJkaqmVmdW5kw1kZrnXuA3SVWc2FyYZawmzNJwH6XYFnHEc22y5641MEpdGpax91E5A1tpmnVCdeHLRLmowG",
  "key40": "4X9zCnpvzYQKXt8AB6Mi8YH7f2uPXjfo8di3CjCSDNyeays1Xhev3tvrdvKiwpQjTiXbWUkpn8v8wT7Exi2wo2rc",
  "key41": "tag7AwZimG4zi76nAxBAv7aAmCCQ3q2fkHprDvGMJoDFWAZtSnZDUV1Bkfpx1hEJinJBh15aZGZr6RGLZXSWNca",
  "key42": "45YwNc6xnMf21GAn3u4WRombZENmdWWEqntaF838XDrDusGKcC6Gvk7gw5WwJtSah2XGcvMnMTe1aWzL8CzWvcsj",
  "key43": "2zW2RzabUyT33b2akLS3B4oYiPEmEFNnmPYwYFntxpX34ZJaQ98Eh3gRkmzdhgFY6E4cnoUbzkuTU2FTAgVKDUK3",
  "key44": "2CGe8FDTQqrtBDs5gv8UKvQuUA77NbMYZp1skPZnqmxNzaybUd3ohnV6unTf2uHXi9V2ufg2pKMS4iudAenc7fCR",
  "key45": "unBnJuMUMyFoqSNzUqfLx1YLLJakM67WAnPwvjMkgG9PSpBW6oG99KJQktBTo8crmwbBmwhepAiDZTSeCg7CRLV",
  "key46": "5DnuQzJxBU6ZLBFVNyvxeVsCktNhXER84pne35BqsXDbV84EgFigPJArc4HKEPMd2zKYzhCXJWGUNksgy6yEcNUH",
  "key47": "3p3hJRMEK4KR84jbG6i3iNACh3KLrgWjkfMCTyse8bd6vyYaMXqRGL8RGVSSwt11yC9sAxWKXAifKHG5Wi66AQHu"
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
