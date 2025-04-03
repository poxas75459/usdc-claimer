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
    "TCCdikJ9CbC44gectFw7Kzi4RfMRg7qKhvY5EJCLfUFdTUL55cwzSpipF7z6KdWq7A4NS4Qbb7RrjtvCC89nPvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TdDV8kfRM4FczhRPiBWSFio71AmzBgPETM2EqGWVoEeDGEtMczzRBZwFGLdEE2LmWoJjJKFRfpdgE9VZ1T5fXC",
  "key1": "3aoyfjDaV5G9ynmFtKpedcvyCVvQvnos1pjM8YEEjo2pfSzurCDN83AWKifRoAt5QGdJzfPS68D8RDnyjfCG1J4h",
  "key2": "2GHZpyrUrWQfU8fmBmbotG1Syi2CdyHoBiW9mQaj4sZ3z4jwpSxS6kVpTgkEUsE4AhVJSspEVWPYubL8ynZ3DrF2",
  "key3": "3jQSj141RgEikAywKJxU9iSMJG3srtC81AwegN9BhfENCaYf2b57tts4wgSQj4kUccZhSiDMRtzfXVKzQRAmsDeJ",
  "key4": "5K7szYG6R5fsxTdqWaJHdcTuP3i1ogTsYLyp15r7geJhsaupUt8fu8bMJKynC9Ga5zCLVQCghdFYqaGEE38YJL26",
  "key5": "3f9Vr6zJQ47dCx2W9Gw7rhMbtbEPZPbReFmBcR5tbVwu8ZQW4nQZKgoLvm61FvAhPSp9jCZmWyeWYWBzEcy8KNHY",
  "key6": "Bmpa7mRNZ7pmBfp7RfafiXDX36UH8Afk14eh7EiXwNWxXcbq5fA9VmeCXkyr85tn7CX5Vbd9GzyuZ9ETG6o7oCK",
  "key7": "2Q8fvRqwDffeZ3jxCKAMn5zyTrgQATAQPpm1SFfnccKjwmR8Yt5hKQEYAS2Lq64b7SfBkscVw7PD1Sp68fSFU2oL",
  "key8": "mb6uvXFw2NAPoBoG4pLkBwNFSv7BqrTTD5qDmbpghbc6V78bHuwVJy5nmffo3QmiRx1SS5cenaxsvvHCkfg675i",
  "key9": "DPSAKLtiWzFoSVd6W6Pr5te3QzNrkS7f9H6REvT2m6p6TXBM1tSKGsyLdXstucPUWubiZ2wjWgEXksBgn9skNS5",
  "key10": "57oDcSwQc8vNLqsYgVz7korfwoiaVbm2583stBZntETHZ1hKWCATvXcSvp5DGXKeAmmV956K7nmcVZxdkk7XsGnX",
  "key11": "2uCq5rAMcR5qRY6B8L6xeQkftp6vtXxt4sfTVLLjDu9m68eBnBX8W87rtS8hvqD1kjxexHC3Ke974WgYZGxtkFEq",
  "key12": "5bu79KAKdkjLUk6WYLxLHbSvT1xBsUxyVrCM6qSGbGZEtyDVZPbNNa4izk4jLqzwDtPJWF7VdxyAHvkoqyBfVVwi",
  "key13": "3NHoCkkYgPAucnq8LCW2GdmRpKRBnZNuFDbANa8iLf79QehLyzkTzoc7G3vq2uvqsQ8BRbGL7wR8fEUim9Kzphek",
  "key14": "t66bPxFfSCxhSi6soyhEa6zyG7YZ568amLgW9P8AXMXQ53Z9tWEnbnSmkHLXDRGHkXcE4LYTwcfqY417YwqZysU",
  "key15": "2NQ4wxPuWDMAceo4BScpekSe4SDNjGSoBr6X3pifUPucu98jgWhhj8m1NDhrpz28cRWrhcvG5Ni1jfBKXspe7UQz",
  "key16": "3App7ySzv9tw9kV56sAUyuENg2U235daduoLwpLcNAv3EQzKSoHPY7vzbzn7111KMFWX8Kzqux7Kqc7o8iBiHsTc",
  "key17": "4hbXZsWdjjb69Q1GKu5rwnC4ghXhi9X6wTXQ7GysYsETrUjmzs6noYrBC9dqdNVqFBGCr1g3boD5MWVcJ1xAp4ag",
  "key18": "4taVyqBgVFBGhPKH11poCNx27xpyamqdYQU6rp9UTJUL9mEwtcYEwC6t42VS3pdbC8RrbGMKT1Nq21roHQEw34VA",
  "key19": "2b1gyG1bTfLBmo6jDJYGhvUKQQGLn6AKYiNrFAE5YKMJo1codEGNKkJBHeo8wgwW3nghEong3QpY3GW8TCtt5nSb",
  "key20": "A5jdsxJuUQrEBCmB8c15A3U5JBdBJonSg6tmc4GgQ5gC9GUxXxsrUYRRVhvgjkMBM25eZkTRHpGxNnYs6pD8dSr",
  "key21": "2bVwXpUhaa51zaVsbRJvk1Zk1f9u8bt1tA9Ks8Ndxe8CcKCfPJgKiwpwKjygk1CheU4nxBttFHXFr8nZEgVCD5Kn",
  "key22": "5ivgCyBoKMkFoMZ8FcVuhXmiThVGYSZYgH5fJPL98MXs6DcygoDP94BSTMWaJmKAZe4Lotwferj3QmtEetcnCKK6",
  "key23": "5HBQEWFAbnDhDnkMe5W3QsJ4TPZaJXA3KmpFzZMPPwN363AfVZr1fzAFGTkNi61mKNcDCwaG7iFuUxS9GhhewAqg",
  "key24": "4bY3BvYjuWdpNaajw6EJ4ns7VwF7CjqSaJX3jZXmEMmwbDNJpz7BbmNqzzq6j6hL3HjZ5cZFteQkSWShroXtYb95",
  "key25": "5hbKB3C4Ww1SsFsj9SeLrfPwgUU78jTkYhKR7JnLDp9nWtp2D5Ybmc9Jtzzq4B6dBLnC34GS6Q5PuYME1HTBDMPV",
  "key26": "32MGykBm7nm59x9CaaQqfLFpy1iKUxG9PguyF6sCsynsAavqN8iCRFqXPe3dxGThkoiLqBLVNBhHx3Xkjmf7njm3",
  "key27": "vZPAfCubdzfeusH1qPQShkxAJtBDL7AJ2zRuCr6wXLmp9MfLRLctPv7cxJDU8NiaaJEQ21SLX7hL9Yv4SgpiAf9",
  "key28": "oFLMyPtVkqrERktPQhmH7xuHJPidjZpejFHxkhC3sYKznFqqN19wm2JwwVESBtvMem2hRwu9EmN3zHeXDjpDBJa",
  "key29": "5MDLmyD3DSiDtM1KdNjByzb5bLJjKkQtoQqPuABHfHwdJUiUgk9m4PweiUzCH5ARDKpfcTTfNRQaBweZPJ29T1Lo",
  "key30": "62axSxQvNDcYcGKLJwBXHHJaRToJj6bUtARb4WB6WMB8KJn6JqG6g6F7UdwKXNRaioT2MuweSCU7Lu6uXsNWgJMz",
  "key31": "58DZHRRomXJvyjbCGvTRmShnr7ckq1X8WMB6rxgqWeWh73yFx7PWZCFR2khgByrcHxbRHxJfWg9iheV8ZLeCMXGM",
  "key32": "5XBP1SCpTgeUPi6EdmBS6RnGbemAB4K3jyzR5zsFAGKyYMep4dRL62WxKqZpAsPN33axQ3MnDBfzWKPjuhnLfANv",
  "key33": "28FmvSzWSzdYyrhpQtcpuc695Dra1vrisAYX2GSzKB9hQmYQDecmEPjQwnHHzaSnwf3qQL3xvRYBLBvysT69CvzJ",
  "key34": "31pkpCzdpiHyESKQDtXy854mwbp5htwUWCYe2nNTeYGTGugnUYnyfmANUmXYNgY3aY15P8Pk4N1KSEdPkbMngcY4",
  "key35": "3ZZrhoEv627D5ymPFGbbw7oicbKE7cARcdqvMpGHrzUGJFREhzi6RWYUt6ESgnMKmczpQoy7UZnebrG66AjE1FSp",
  "key36": "CRVFi724obHjrsanbF3y4yEna3JqwLTS66EUUYZV1exnhARCZ2kY6LDBt8yiCgcVBMHSLfPwzgzfRZWWMWZvSgw",
  "key37": "5Fyf1niuXMFEAKUfJSaEYeVamgWsdeo8YfPLUSbmLL828XQvrL82vmDQNEc9BZ4fsktnTUW4Bna1bvWSkb3kh63d",
  "key38": "2DEuGRYV6WL4BD2nFvzEEpaxPW575oCTZtP9xCx6Pmkc8endJ8mN2ZqunZEjVCGZFaqPxUUSzt1w33u42KCruc4Y",
  "key39": "BEQn84DvH1QxxVGcpr69ko2CPv8uoLkKUgYHXwb3gQvU3jQ6U5zFrKJFMg8Z8gT1MBPPXkMdHVajShqAP9DRLDu",
  "key40": "4LoFYvh3ztc7egfpNjuW2tRdGA2VNtCSFEtoxmBwoXdYiicMbtac8yr19TmFcXQAGtVx9nc5rjLZm1W3MeVqpFGG",
  "key41": "2VErA2bvXWqS1Gk16i8sW9jAgHC1WM8D2udCqrCVRLFbu2xiWtDyPhpdGgBs3Gx4iJgenRuZixcWFFVKLuu9URrH",
  "key42": "2W9ksrLAwmtwbrqKjrh3cTDDAMDFoBNu81VFoweREnumxewBvmmEbJpBRUTQxNRMtn8vty8nQ6eH9DaJheNCVjFP",
  "key43": "NDsvuSMmfQhWXgLQDiaViSY217tLkwUphLawRRPv1QsgqhFm2K6Tz8SA1H5uaVtCJsSTx8s2tBRxUDrjAyKJXdX",
  "key44": "4kWqWJ8ULHANCar3WbxChjB22w8krv8EW2JEh7woZqhS7LUuWhoiim7LsDKKbjXsrYbHhtdi6UHaC76Lyoxuejzk",
  "key45": "4GNF25upoUfFtsLMfztrukYhpu8aoGV1CQbusFbvK39xoAKBtDYuyy8fwDAc8yCnnzSJxuhUXZQdF6kFu5igcJv3",
  "key46": "46VeugxZDdmxUkmHGEaB9WUjJ8D5EBz4DVoWqE69brjeUVpdjuteZFBEp63PYgTFyNPR6UrU3a6QGhfVqktjCnjK",
  "key47": "NkgWrK1Q5Xsp9LEp4RHrvrQJ9yaDhgDWmMHeKphwUCeLiwADYcXimZPKXpYXd75AfZ7ftGoYfy2zDvx3dpjHKSb",
  "key48": "42LGdaxKn8hexsGsSiztizhJFqfy7oTrvQSPkYpwbbajdghEoG33DVCyRinYDb272PdxNE9tVQo8GtBvNxGN8vY",
  "key49": "3mbbt35TxBQ351odrcr8v6gJdrDSr9FaUeJdb1tMRgMR3Ltn4aMULUdgbTnAWVRiYGuLJnnVKwSquaTovCn4HPjA"
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
