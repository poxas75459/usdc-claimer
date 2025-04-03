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
    "4Jo1tSjCt2VUxaMiFoHnZNSddFXMHwGFeHvkhufmHtuiE1bHp5gAuabx3uHQzq2Aw8yXpad1DzneNUo64os8Z5Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBuNWvvPV1Srj3TCg5xmc4U6Ks96S8z8sYD5SrdnQJFRscDfaPUdJRvJSTMrk4b2cb9J1aqo9951pJwumkKLbNm",
  "key1": "47oJ3bkox4sxLxEPZN4uTPGvFHpvASWVXeWfedHDMMkgCrQgdbybGudg9g15Az8dzaYiLVKhseNtdjKAzKckkydx",
  "key2": "4CGEessjZqgu2Se1jr1n1N35xfcZQtYxPG2FhNCAYiiRWWP428ftw6iTCV583J4ktB8eyJ9EgYzbVRibV6ZShj5D",
  "key3": "2RFXLqJ8PCfrRU8eCYKP6UoXP4jkpUGJZrG4eu1yzeoZ53FyKjqeSrppM6FwA11MNBdYgDw2459Fw7SBNE8AWSJH",
  "key4": "5v8wKNWCkAfXqq2VzbFES1u33rYRk5KYAiwJLYCypEPZZMXczSxGSjoGfV8D57vZ38rywPFc3RBSe4akPkaxs3ZT",
  "key5": "3kZQUPK5we622ugTQH5qA7o7XvLx83G7RxRC9rs8enodsNZhPr8wtg6rzstdaELSo2ov9sdjsh97cz7njBeEeXqw",
  "key6": "2e5zF2cohwFWySpdSmzm4BELu6xMKhcFokjPAC32x7DDcGxRkvpZAW62LEtfApfXpwFxdhFwwcG2dbS2TT9KvDDi",
  "key7": "56DshpzzYHZ2SJDKxeymKqTHM23RVdrQNy9g11BXg8dzRJrcKNFjqsWw6xWaMQthV8WSBjJwedSYwFmHnMMwdZUk",
  "key8": "3YpMApA4JyAJq2v8TSGjD52UdoEhEU4a3fPcWtqFVPCPrP7YZU5aHcT4vQ65RDhxSw68VkmYDPBiFXgohmxozUTR",
  "key9": "42fzFu3GjnzWVfjRwKRYYknhPSB8csR8aWkReaKmARo2HW7gurNbPPQEZroqPPbmUQahjfFWT2Maz9byf4VtgNWo",
  "key10": "mnds3C6Bdz27gSvQMYGPJtKEz2n4ZBUhd5RVkPhgVC3SyqVcwz7kYsKyN8sBLoe4qTxZtkf1JRUFo3MREnpQB5H",
  "key11": "HG9G8nBGEuy3akvdjzmn75HrWdbkjjReEan3QFHaCTuWg1QrWmTDaEYSeanPWU6rMUpK6Xo2xK1dJhNkcZJbbdf",
  "key12": "2MMMfX1XSe6392ziwPzsPQEh3d9L9EWEur2dTmckjmaNVhKC1YfR8pMTJu5UgBf8WX2sygUB85BLVvU7DBPTTz2z",
  "key13": "2YQ99haqLKZcMdY1uKDrDKEcbRKPnh7YvTErQDuNXKnu7MYErh86r9h5YtS2wYGsUrbnvLpe7XCPLTgRgeVjDZJH",
  "key14": "4AvpzFS3ZuGevw7U9sCaF9dBLnAhQZ7HEv5BAf5pi1wCaZvaezD8mMSGXpvQ9BkUPXXYDBNncMLJVn6NNFStKqgU",
  "key15": "2mFeXyP3zqGftPUUzjXox2uSRow1zUq8kNCd4BddTJRMy2qD7f8oHm5zTJzMMLV16YRQby8Xd8BHsR34gy3AzQd2",
  "key16": "4h9UVhbiHi5bXzgNp6mrLPY5zg1XQampCr13Wfj7Xao7dt7bt2yZ7RinUuL4yWgDfV16FLuaWgLddiqrUubNa8NR",
  "key17": "5brJseAB6ecLwmTmRFtis3nJ2haoYLag2VBcChMEXG9FFZoNHP415ydyws1SYfPVXdAyu2oA3M1w3TJ3rP5Sm715",
  "key18": "5uGznnXdQvciG82CnpPJrUGwGepiN9zbhUcrAK57xzzgojffQQ1uQZNggxCuusFqyRtGJeQvSj4KKbi9weT8weUt",
  "key19": "3iMUZZ8iPiazcCkZ9nmCv444E4uABu8LmZ8tpQoVZsY4tvHX8rVUFQe5TusM9P3HGkb9MdCFaJPwFFhswfPghLtx",
  "key20": "3sfxgq6ckWivPAdfNgkbxoo5obKKHq6mr54GutqDQdjkoHsghDFcBzWtqKpRLsjD2pTBQQN7Ut3f8SFxa3b1UiT7",
  "key21": "3PKmy9MsNZxgUD66DV8cn7ad1U6TA86RTGtAaiLfQhcbZpYb9zoEShft32YUFMkUSWz1tYVa3k3AWz1sSuXSNCEu",
  "key22": "HxrPyxh7TaELY8urqLwyHX89LnUfs9SCLWaf8ZzFCmWUAXYL92ia9BBxfRRXMQ2GasjERDrJQuqbwyTUiVXFRcD",
  "key23": "2qsh4FTxT8aUZCJDan78bwsZeTa54dbavmkNy3GBZxsf74iChSiswanEDnK565jBonGD3qyRJUNc9aQBsmEqpdKK",
  "key24": "2XmXAkEY8uPZsdByDmkms4Gg9mGVENroYy85erKqLsG5iqqwdm2DHNYneNwipjmahWK1as2tc9BFvoSTL2vxBwWU",
  "key25": "4fAHGCNnTH8rt4iouzZWxM3JdZ7nj3c3UHzYrUUpmFSZRqF5HdtxwJHD6N2DmitjyoVxkCx9RpAsU4taHiGHRdzZ",
  "key26": "3qBEjmmpeu43Rmu9yWbVihrXG78rm7jZSr4Qe1VET2zuykCnPfaUPAxJ69bLEiEBmLmDH2T7fc4bajvJS21L5Vie",
  "key27": "5jGQ1YyDCw91sx2w6hBWBCEf4k3qk5akUsnvyYSBuJSMNTbySeQjQ8kVHz7BLMm4ybqq1rewRnHFHj9gb9ymKJsr",
  "key28": "3a6tCowfrEekbMMLWjsuXDdqFxdfpaAqbCWyqMvJW9jf8Y5NqtUu5YJ4PyuEeF9HzujWVhHYzhK5Nej3B1TVFVpi",
  "key29": "2LWpDRdoysSEajc8o3YfaedbTM9Seu9G9ayCEZpn2Dp5dc2M1XoujNnaLrdfA43TvKKuxVJWf8H1L11RwBsTEmYu",
  "key30": "4vZDp1aed2wvn37Pk1sHXCmdGAeG32Gn2Rt88xsuGcgq2GrWy24pWsyLiv4TN5mFpFpnEwp4s2vm7pizsLaZgVZd",
  "key31": "4uEQYRi2uao7W7TBsvKbi2ywWCDx2dHMJMHPDy4qeaAUzvaF86yc6WgULJSeKDzoRA36PYZ2B3HaXzvvweXvaSJW"
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
