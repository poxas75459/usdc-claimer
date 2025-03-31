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
    "41mhHH6KuhBaobBQRmPb99ceFxVBwstKWg4dLb7JYvYjt4jeVC1v582eyCWquJve3RAnsR26zRy44kPavGDxDN3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43irLuzCW8qd4XL7kbDsuVivQTggACcfNV95DU8oN67gWcPMsZLcJdCFfg6aM4y2uPuPHsGL5X47sp26194XZNcf",
  "key1": "3Qn9ApqCiyGx8xLYVg3pF7a7tmUh4vbTW3yT9c1ia3s5nkkSBGsinTaD5SBEWaZThDCWq612uCrCZxdMAdJv39o9",
  "key2": "4dTu6RptB2pURo5BaGWPUYS1EM127L2CJ1czoYqFi4zsmvHqMn4HnEEfLsA9Kc97cV34FNPiTdxAmrEtGss5Mat",
  "key3": "4hftwoenhLWW2N5jJUVupp3rqmV7wA84qbkDmTTAdcDgW8uAQDTeNav561sWB8sJWmVpQzBL6zLTnbN1WmRSZWRV",
  "key4": "5W3d1586UEFGRaASfnuHnbPHmGVdT2EHbuC6yZQtXyCfcEJLHQe9JXE3LGjWzDcy3nHbxpgVGPPLGyRjMi3orxfu",
  "key5": "5qt92AqdDt9ZAmZDqjzwf29qnrM31BRYyShQeweSpXfBgFqjwiPUasNuKRYMMx42zaTLMs1CFwKEhYK3JVvjdWE2",
  "key6": "4EuKWoL3Y585Yik8LUxyMxWgMW9B8G6KVUTmJCAnPcBh3sgUdmeCzszNmcwq7bgweWpQGjDDhyma1YWvx5FJLrzy",
  "key7": "3cJgnGNek4SJRH114UQVB89JZfY48Da2fWGgrFyTCYcNxLxTdSevwDWbyY21bGCdYa7kBrEqoVgVuzfoSev4VptY",
  "key8": "62SA4jtsaBkHXRfQiKQoT6wAtN4NbHa8BGZiJJoSbytKorc8A5wDTFViHmAnLJ84ZcVuYKC2fWXdQtf3Sa5m1ida",
  "key9": "5vUXTW9t45W1Sp2g3cvLJwRA3nx133Pi5MbzoA4yeucJ6YDpahWZgdzuHBpYGxPNKeG37196NWyUqV9Rfot7sEAY",
  "key10": "2xSrW1ypmkEM2bVaxwMMrFJc4xMWJZJwYfHneFMpJbonKH7fSPbnE1hk44tdyM9GXeEdM7b5CYVEC2dvbfbz6LxD",
  "key11": "jYf5tW5hLQnqFYSkjPJpUmcZfPvJMrQmUxfTU122aA8yPTva8Ldy8NLLZhYFHAhk8eufaTwJq5rjeW5rZtJXbcG",
  "key12": "2L4bFYkiBzAey4kWHkUiWksiFVCDHQ9jsrrquUQqa7wZNPNWHXMBSVMAFvi3cvowdU2uSsqX9G6yksL2mS3WbL1D",
  "key13": "65f8fL2RxbToHUATZU66ukyfNdiFVMxKjTv3DRwzV4irDpYPEwKodwNkit8oAnbdSVpuiLP9d9LyVzq4WFd6Kf1M",
  "key14": "5wCP8qrepuCPzdhcQmAfiWxViqZREAjMYqgBauMBFvk6vUsQBCACD8GkzzGs4aBUu2ZrbeBrMK4UZRmCUkKUbd78",
  "key15": "6r8wUqEF12sSJMpzgHT6M3FM41Y2oh6bUeoqM4uodYsFTyMXJ93xs8RQs2zs9P4DjWegULw96N14Uz2oQsr7mkx",
  "key16": "56HJUmewxtG6fjXYRebnFX42HrGMHMLuKPP6Zxdoe9m2XNfbrD9mygFTSKayUzaPH2sQsDUYrQvCzYv1rS13858K",
  "key17": "3RBMwWm1PvJUgANRWk2tWYvGsQBKFPqy37YnuYsZ8WkZMF44FxMBmKStnoBUz8puEzXXgJjPjMo1UjhCCfMHKKE2",
  "key18": "gj57yZ9XEWcd5a4BbhBk42XZQSSRBnDLvogTunfNxc8zyqu4xkGTxT87HSMEwug1uHzCNEEsY91X9vmCNW21MHz",
  "key19": "5SYsoUykz8iNzF6EtWoBp79xW8QQXJdWQazxS3mBpwGUgvmVR5KvaLxk7uBtDU2LfeE6eB5TnvQnfuoW3itTfG8j",
  "key20": "9uJasToMS2YLm1GqPfVp45nDMrwCv3aHkeaUpniReYoyT9VUR4smquEYm7M4Gn2DBEARJ5LDdNTTs4sPF7v8cai",
  "key21": "4BdwJukvyboziT8cVEnRX74iCQgi4K1zYV43NiWX28wvNdWi7YWK5rVkc1ecjgirsLFkhfHcraBr1EK65DdGWsVp",
  "key22": "3S8kuBi7mjXU5FF4pbudqsysAXGYDczvwsB4v8B9dSrTbSUKJSF1aWAun8Dj7DyTWnBFPormXemCx9NqTMi1hkN3",
  "key23": "Ku95r1UMEv4aGYiWiEnWvUWajEcyC75EmhfwjuMbq9bHeWPPPJXAE9LZnKzrgW3bd6RyHYzMtBog7fbFDuCYuej",
  "key24": "27CPonDhYArqazCH5Vexrh8EmKC47vd2QqkNmopJUsbyv2HaSKvjTn3KM4m5WEAWQ9Wti5KxXLgYHL8KfKrMEnvW",
  "key25": "2K2K2YZKWXAGZE9SEyXYTDxmRC4twCMgciR8FtkL499zbsWTRSF516tCTVEiBfTUnfZJxoSrtuknT6rg7meCwFP",
  "key26": "3pnsAvPo5oGdHuxPYuaydPQKBwRQKFe3PyNoRG79KDELyUicEf68Ue1suBudfKswhFCHkTb8YVhzqaGeGUkD5GSp",
  "key27": "5mZx14rvzSr8g5q4VNrYXBuuAjfj5tyYW9Piykn3hTfuq99m88QRbXTTo5FZkTtcGTddr1JrvN4EJiuc27DaoAdu",
  "key28": "4jRB34A9THTnURQMws5UhUNgJeQ1hP35JFFHgdqLUyNZRPN9xxrNxprLv8fex7Rcg3azeJ2LN5xJ4LYhjubemn5E",
  "key29": "32m8dJKE2XfxViaMLfSLMEERF5fDgMNjUHjPXVXqy2wh72PLui9p7hbtRGFPvfSESd7gPrjTZmLhe8X6DEWkzzJt",
  "key30": "4CFcx73fAn1qot75JJ6pqKRFVtq4iKtSGS1mebQf37GmZnsMY44MoXDaeo1L9PpUmc1nt9dNuiwVWpD23GegvuA9",
  "key31": "469gHZhZNF7shKDc2x6dyudQB1RZd1Tf8ZNatnrAFbBMkuuf2LKfBBYydVMwYjP7sqw9GncE2Jtb8xaUnuP59Ghm",
  "key32": "2L8WcLu8aWXY7irk51V3Z2dn1syTdgNuRSCj8V2ZqCRwEYgBibGJto3aofaEJ94XupXm9snkn1s7wM4EGTQM2Jov",
  "key33": "2DbVwd4MjwoqFofyFD43xwZQ7bXStsnQFAm79J1awoNfzaLAU4nFtJD7xp8foxND4xGzCpAQGogcbRAV1tyWqztT"
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
