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
    "51bnMvrGQtzaZUA196siuboRERMNFSCg65ebdPPokq68Kuj12zaHjLpFmp6udTEn9Tp5tyHcYWPM8qzaGSsrieCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9F56Z1VgLbwQJDCLB4tYQQKp1etJsGyKkWThX2gvawtDLEhYqKWhYFNke4qQNSvEJTs4mKzkLGcjcnBj3LV8hg",
  "key1": "65UEHqSbowuz8AXYvUFfj4yNLTEB6d7u2JUiLPEgznzMRLEAQiGktArV5wGRKUSySVRMHEveeYT5BKhVyc1b3tmQ",
  "key2": "5cRm4xL7nVZKehswcf1VRf4i8UQeDbTpHmbF4Af3MywKw7C4z7mPSeas2hdfDW1HgTa2L29DV5HL2wDyTCyJezZW",
  "key3": "2nhzfukTnsM3GqcDRuWWiTfp5gC5av1dfG35oEnTExGGoYnXPr3vZtTVnbQ12U1pnZ72WbvjccSTw6wdrnPay7GM",
  "key4": "eVf43jSftiXZXq6ihfmuVvAuBdKNG6biDeq4DwwyZRoGaJnMEGP7PziFAHspUbMLbHbVqHCofq8qMBPzMVi5iYA",
  "key5": "WqH35ULcCvCpgCb32nV6JcaPP69U2GWYYAeUDukrAdP7QGWdUSgUJZEw7uwT3f2TFmS5QQxecubNcQWWzHTDszY",
  "key6": "ZnbkpqxbG52jtSXfFtdDQgySVwMMoCYPkoTBrbpC5MP8Yq55GQ1Bm1dgiWdMd2Fa7etaH57PDu9MCYSRbrSAHDR",
  "key7": "4uvFycxYkxFG5gLwgw4SCghuLtoaK9rwV7GVyzXzPEXXTKaqfKZzi1NGhx3dx8HeTN3FDUkR4JvVwZhC57z7eTVv",
  "key8": "fMYWYhet7LtcDmMuucD1ZrTkvvXdHEsA5hqUpoLc7cfUtXxZ57xNAqVQACdQnNP6cWxa1aBywMVkvjEegedua5p",
  "key9": "4T4ebYbk8rynbJdfb6Paak37htSv4MWV36Ap1QKmGZdyme3rrJvuFQPnz7uCkm3tZ8kRaRyhM3GM1y1ymzu4dNC3",
  "key10": "5GsACE7UszyXAFqWwFsCdTae4QjzKpXaGnC65AQvmJHiNVzR9eEGE4zhRrwbi31M5rZSUADWVZ8VfP4JwKaRvjZf",
  "key11": "mZfATGDLzPCcsFHdH8mqvGo7qwTCko6cGqk31mvuTxC97idisF1GYxSqngpGwZfwZcGpsEiPyZyX63Xb3QCcgau",
  "key12": "3doQWeSY7jqCJsvB3UoNPi6aoqitnvCBzCsfkeMmo4gkdxSHMaNGH6xenZsEr4CRuVWV69yMzxKh9n4DZw7hoicu",
  "key13": "3hpXCZwo7fP4e1MDTaoMGfwQq4UdrTDGBtmbPNvp372UGMFTUN9xkcXVqR9FmUB4PmWcLyXd7DHWcfq2xcZ4J5fY",
  "key14": "T6AvCCN1GufDyGPRUSzu8Fvkg7eMnTTJtrkGyFNh1Yd5kBRAjLSpZ4fAiyF4D2ocy6akSxhDCvjNzUa8FNkVdeu",
  "key15": "Ana2gEU8shHtuqi6jwyTvkVw2CidczboESTzJ6BxotagWBgLKzgw3n6Gc35RBmsiaNTKJSnVfoDRCx9KCQehfbu",
  "key16": "56sELKGkVrpiXC8Vq4hsgXAS5HCLiEak4RU3Bi4WphvPGZqtwN5aZKjyBW7XoiF53CF4Vy8BB8YJpxYY8TJ9Kq5f",
  "key17": "59D5Rey5fnFPJBXTMdAqzTk1ffBp9fh2SiSGkxwkuX1CeiPmeNJ3nTLpSL5yzAEYHVsj1nPfmFLsZiEswxtmuWj2",
  "key18": "oU7Y5bJeTCoi9U4RLXS37igEsCx3Fn1akqMNLdTLvfBgqMMgmgG6XgCS6amSYmVkX6Mta1UFKc9g9dZVdvmES57",
  "key19": "2cgsm9FFhGcdqUppXhjtuFoLvuvYLa57cR9mSNUjhQdnAPuaxnqsTsXxqH9sFyG9BbmvFWQojzinXmpbSxtiVtZY",
  "key20": "3BU1AzqEmiy7uadzLpNXivKodSZJWrGsLJECBbakPC7o6PxEhBcPrZh3TQzfN9swzNvH9ssS5nb8Zsop4wu9osxk",
  "key21": "4J1ykAfsWGenWDG7bMkz8n9diUdJ2MTYam2tACQQogXge5L1K2DwnDhvqwq1LNeTcNbEPasteqmvYc6xexexwgRg",
  "key22": "48nnD7pRJwtpdoHsrjfLatgvm85xMTq4g3MoC9yT7AdHGjp9h7XtTqxTnFg2ToU1psZ5g1k9pJs71rWZf9AnJ7yH",
  "key23": "5WNxykgSmNWd715n7BQ1rzAEHr7swFCX8eaiFZLLGHsTBKcSYqfVWrsGwpq7bhvUSNKGDZtpGweEGpsHwe3H8Bbd",
  "key24": "4hZBnwuAnKAsNN917efDHNYJktb5Q82JoDLTJcEKXWCEAnSSy2xawbkXiuBgdNG97QaMCmGdQRwQ6EaTBnUydjbP",
  "key25": "tTU7cQWkBG9Np5qKYzHBbCMacsu4BLU5BMR5e3VdyAX1smYiTybsm9DPn8jMb6aKMGPTPMHUkwhngtDbfYLaFR9",
  "key26": "V5rC8Enr2iYMxVZsvtLTT9CxYSjg12zfXNfDohfwg5njekaKsv3B6QAcT5QTosiycp7cHb8tBcyQfPhdivFvRrV",
  "key27": "4WYy31Pv1iZUsa3v9Jm2NcWQ4bqGbG39FazLFwvdtwf7RoBYRmASYYqZCKy15sReDFeCdWzx9kfgNJY6J6gXKA7Z",
  "key28": "4nHsvw98QqUW4TsqPfUH9L98HwDPhBNPNE5HgaGdHouT8ikWdG3xxNEmAp3zsz3myCZq5E8BTF8bp16tMznx767e",
  "key29": "4R55cC6Cy8dbAhSGrMGxmR9jxk5UUeCAVxqV9JBKXxFjrMtBkWwGcpQD57Lzyf4LiWvq75RjAVuE8EzPbra3WMrh",
  "key30": "2oDBH2bjatyDGaRtf6Hb38RB274ASDaebDxU28tS7yEcBWhx18DFoAnGjzknPVZCEkgs9tbEmBuCQeQkoQksxaiQ",
  "key31": "3mNoa3FHx4edTDgATJqTjVaeLTKwmLnK3j9x9vruEE32XVvDtskekCsptsBfKs7V4DNS8xA6Ps9pmNi8CrzMQTmZ",
  "key32": "54BANgza3PpFFqTPc6UuiSC1Ncgir37MWPfviyjEiu2hT1gurk1d2QhqmfRzP9MzfatcFLX7za1VyEGTNyQuthYC",
  "key33": "5sosengrzUoFqd3XEHmp6QfB2vTaGbzMPXHBAQBY9aJsTWMv9QA5eCeUzxCJRbNNFEAGH24Y13tTZrbSfqX2pFTr",
  "key34": "2ZWsxKwDPCTGrnTRxdPobYXcXQcSubZhA5rXnGFc6K9PSdcNgFu8UGGvtbZhfbhxJTnbBwynjn5JrCev6FxnRVcz",
  "key35": "3vaqsrs9D4PHjHQNjwPJJ97K2e39WbDnK8M8HxFDHfJjQ7nPRU31gAKx2zRnnVHwZbau1H4i2YpMCKwXLmp3d8ci",
  "key36": "5Lb2tAq4Kaju3LgmmAZavV2pUnMMPCqsMt5hEgwFR5qRbKByxuaH7ntHQVRtHh4ZW7pw2BVMdjQJsgtjACN43CQC",
  "key37": "5rdHuMsL2zkXj7yM4LjR8qW1c41CE6iCC7bxkV4FaFZFs9NoMHqs1byQcbq19qba1cTvCNTL2xKYEmwLsmBW9uJ9",
  "key38": "2vTrp2B9yQFA9bvQoADosW6ABMXVh5XxR56PmJZbZVsXfSyZVJ3ATngEULkL2sNWNz8bve3WX9E5wwtJBgSRu9Xe",
  "key39": "5rEi1gvbnrpyuPZq6kPFAnWB42nUvdbvXJeXbD22Z7s87YPRzsay4Qz7DMSWU3K7TUTDtT57isxFuhB3VaeBU8YH",
  "key40": "4C4LQEAsPPZKr5gz8i2pLyxMkwD6dycykjLgJFzML41GMifWpV4BDjayyyHXZob75u4yMpFMFq95zKE2NWyZHVFf",
  "key41": "3S2czn4jHjVMMq7VCd4jE17riQoK6XJvxfLjgCvooc2Tq8VMzcfpR8UYSkFkeUXnbkHqAgvL7Xz81xbf2SscNg23",
  "key42": "3gxVMXK9e4BscLXHaeQSJQtTzqjFZD9o8aQtmjw9A7mfc6jSVfESUnRWZzqnYXeaqo3uYFj2bQnHeAKAN3LDB1dJ",
  "key43": "HaB7zPh9MVxTSJF79hPrhuvxbNB2At3LAq5rbcnA2XLfP37yLfQZpFQkv1CoB2HadjZW3KCyfqpP2GyLwTNRnRT",
  "key44": "52P6Ruf1V9QDJVvur2GSZQakBUcrFzeyvk62PRDZ7tAueAbQPYhFFP5gNkxR7aUM1pfaW1tTttJD9wRjjnPWS2aa",
  "key45": "2HhiC6gUyVoLF1YvGSz77B6swbPsbAhXaF68qppnat8ZtXgMYRgR792SJ1LsBudeEqFRX9Ry3FVKtoDfjmyMEGwA"
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
