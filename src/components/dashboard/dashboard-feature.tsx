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
    "xw6wavc2wkiywtEvXr56RBA1QeVVZkAziMLF8XuCS59YkEYrHzY94LpZ9psY5eX1765TXQ1WmSvStgdxkejSwew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fiC4Bb4HDxAkyi9DXHGryiSCXX1kMDiApEDT5ztDzUY4LrPd1z6XkVcBwFqXwkL12p58Nzd3yBncKWfExiNajFS",
  "key1": "3afpnppJjNyCD8SKZLoTjrQPNvuNgnrzXcW1QiVkMUNEgoYMPzp2zo44gaDK1JZfhNMFR3EmWUhSn33dHMgwPfn9",
  "key2": "5JBCwgZASETnRvuXgTVVT1EcSiYZL68tA3Eihxx1sVf2S5CRxtzypb8nxme1TjW9p31DGKQKeLK1Lo5pLwYn6vVv",
  "key3": "3RmDL9z4efrsUvvAP2qjf8h2ztyzHenYivfcEyrip8gLcPdctYY9vcQ8giqdncawx7sJKuV83W7dpiB92RVZaj8h",
  "key4": "38mpPaC88MdUSxac1vPNoxde3inNQkDbmWUMCKBHwdqNdMnuhdpALAiqMwFS1vuW6s6N7oFsiEfUVVTQaC7r3ZAW",
  "key5": "3bxrB4c5akdhatQS4wSJn1vGixKSx6CqBJEKxrDggSuoPSSrDyMcQM9Xsf6T9KQbKDFTCkSa8ugwsBFhApynwJwY",
  "key6": "21CqKUJLbnhSRWzozsnmvPkowhTbbAx4EWvgDKJkRnLJrT74gsUrMX1nDmXT5k6FKbSwtDatyVBduKLtU86U9JEJ",
  "key7": "5X1VN5r1Sn8uLqk5GPgPQnt8qfeHNifY9f5m3iVDrniarJWwC5ba7KgNrf22ovEkgMyFN11z3vVqazUbWj6PHsdS",
  "key8": "5aq7DG8H3aLibyrsf47xBcJtqoT3LJZ9fWhpScg3HnrYu7MgjcGVcvGdmVvDYDaNeD7XzNo9ThNAJuWYpfB6vH5N",
  "key9": "34EtW6HDcPPM9HR3AeMA74nS8x2GDY7vyicVuW4JXvJPYk5T9U8C8ieMjkQutEdZJzKn8cZDuxZJzDFtjHRSWnsL",
  "key10": "5uoxHpVRvmjpmPX3mhq9zGbpKBWFNMNPAUwKCqcLKWGY2BWXZ9eDC6wALG2aaKnXSubmi1kQUbz13o2pvsya3w33",
  "key11": "iSkYqjoUZrQJBQ34PkPGzoRs6ndQ33jtU2KTQC67AioXFtvrduBtwWYiP5C6VKusDcXwtzWP4u8nHJb3pztaj9e",
  "key12": "5XccvvNJ8vjsVZh1W57PyERFirEcoTE4Lc254KHjnRtGWPMjyHf2zMK9n6rCTZVYQCThAdbQ3nQYqopfscPcNPM",
  "key13": "3tJqBnhnU6xS5y8VwpMXazhMNsAiFCrRrW7utf3o1HGrwWRRcZyubaZasXuuGvwbUY5eii3gTXD1AUEBMa9iVZpF",
  "key14": "4CFcAjJokP4dWoKfSiYmSQL93dZU9An1eUzhBq8rZfPPKH1ZjMv9Q3JcxP7YpAFdqqGFniSowKQRwF9LEtif6eTR",
  "key15": "5js2m5kXvc7xn1rKrhAsuVuhz8HpxWA1YkDHkDwn8XhV9XmviA4BV8HXvPW88W2gESjmxnfyt1Ry9iq9VLWiYXa1",
  "key16": "59w8iPu9sXYkuNJqaTGYe8EfreuxTxseBK238GAUzjiBQo8otTbcox41DXGGvj2D6je3awJzYokcvmnWuEo98zUk",
  "key17": "5eJKnM1VfrXqZE32C1ay8oBJxMSaH7vG9bwVwTbTEzha7N7wvucjuSxZhQFcd2E57dd4mGuwECsS8NrtdQdiSiJ4",
  "key18": "47gmdRzryoB8FHRWkJ8k8x6SRHiTRnzED3wQi13FB4GPMBte1ZhVagBxMeaC95V3TF8SUoh9HnP6YNnfHhwmbs6d",
  "key19": "oEwqnnAWrfiwwRXcUm2CymmsbSz2aAawhJujKnnbKypxWQYG51NqKZLpdipSBzWrhWewXo82awXKLPFkR4Yfqkg",
  "key20": "32W5GgMQnHK31LZ4XiRrNVpBP1ypPxRyVGPXSk7G5QYozUh4L2th4wEE9nZMjsdJ5RXKxyc63k7Bsv9S6yumPh1B",
  "key21": "3bCnwACahdHCoh2S7tNDGguPVim5HUyqAHFCKkZ2B1G74SH2Kcz3W19xVMmN1Q5Jij7cMqXxNmsrAnok1vReSazB",
  "key22": "YhjYaV2UBreJD6CQ8jcKxU5CraUh3mjToZtoEi1WF1MrNpN25FRxDCSipm6U8eY4Eeyjp2TFme5V2NNZiCpQJfg",
  "key23": "3dwuGju7tmvXrH14mgUeeRqXjZrmvJdK89YXZZwY9YdZy7zeHp5B8o2Hj25LTgWgYYrYSDExvcWqdDSdvRfgDGgK",
  "key24": "3BMQbiqoEhAJJPqrszdrVtThLBiGCfFCSuwtH5bZEZvRvpaNYE6sqWu7kcWZ1f3bkKunh5sRu2mUggbrd4aWat7s",
  "key25": "4tpf8UcSt46aRMKi3ifmqkv78p5wqMiaHPEe8xWARkdY9umVvLC1j5XJkGoqfwewX4MkEGDW3sHfEzkKh6VQQJNZ",
  "key26": "fVfWE8NKUXCj2nqJtBYfwCGCHaUbEtd6wFYbaMJCdU5TVdimyKKkBApPxvCStNHyTShQeCB9bpBr6Knx5Wj7mHK",
  "key27": "2b9h9VS13CFgpjvZuumJLaJQGqpJvz5CS7SN25CiScgrBSmH7zXScuUMG3kbaUcioAxAKKtSLkUZSNWUyLrAk4W8",
  "key28": "53YpZR9HrZ5Xci2uoidGzEXKM5rPAxHDorYUrCcngBZTLnHx7KSjmSEgTcKbC6jcvqwPYbfgCTvydHJPhxyznPxj",
  "key29": "46VGLsHwHEVdmKQc7iC8nbKJexNnKDR42kr8zqxsaTCPP93sLMkdbdriWR6vtBaP3muAFFWENYyZxKWoFtCfVWdA",
  "key30": "63mPRzzMDzscVcMzj9Hxj1htVb1iWJLt73dtUQ2UwoG8FA6kfNdV7dLeW6jhUoYvc8mzicAQcnMQ5q3Pd57nzXQ4",
  "key31": "4oP885uTVLVF3dAGqCZjCd4ENtQn899Uy7ttpk2J5sGhLS3iK7Gf57uU6nsmskfTwXPWBDKSi2hb6rKjHYg1X1Uy",
  "key32": "3sfvvzLd6H4Wxoo9h2B1eWF3YtDPbi1cMqWG9xSEAD5PMf7GPjxSqHz94sqpUMJo11fSunBgemms4boSp4RcTnCk",
  "key33": "4jTVAmKE2KyXjCkgLjmLjC1omDaDou8SXHRm72hh1LUcKwHrbDTxBQSVnfFRwJtDHv44SZ28orhNrj8Jj1tmKVZF",
  "key34": "5YPumAVWKdXBNBmKGKUFipZAjyXPzHDNPhmiGGiguqZ78po8PxpD6FnCNyChDdjMMVpt3rDj65BrEAjHV9neXNUS",
  "key35": "4mPoKac7eRemcnRgytmZvrrF9xEHuDEFCCbnvHqBH9Gy8JAZHb4x1ez3P43opGRS93MFkhSmLThmh85EcaSTzwMf",
  "key36": "3mGmP4fMkt3BH1o9nzpJumZ3TJz7wXEBi6Pk51Tk59df6zsszf2AdzTp5miNGu66M7c6JpHRWxZgMguZxSstd6Dn",
  "key37": "4bpnVucf87xZXJYbLz4sWBMHGCwLEgthFf2nsRBat5rE5SUKRS61fJ6ZM8WcvfJbdPqbaGXoz9B4D3YG4tHUHZnU",
  "key38": "29RuRGzwGCTV7cTHX24CsvCpETyqvXHCCuxA7EHAcyMWLZULeCgfbTQJVBgtYMFk6Vxj6UXeMEM4X4SV3KbFW8e1",
  "key39": "3nwHdRAmewq77wjk355nUSaP9goGxaWDEREQ1THQJocfhUNCQ2ihk63ieYVpUAUT7GLXcibWuzVa6u7i9F7kdWfE",
  "key40": "5wx1a5rgA2NxUKXDnjz1TdvKvRT7jTtR9ggTVeKHFAC1TCcxrn1WRnvSf1hUotPTmQ2vkTsmNANyve1knCmK7k9c",
  "key41": "4bm87zKkz5wyMZE7vXfBxsKW9k26G7bAFN1nNqCPv7cAAuZ9Gt83H3jwufmjTaezCGTyYJUU8afrSzuMBJGTEfBn",
  "key42": "2FiDRvKVTNPMdJUjy96z89LUZjZKAGwLyuKqANkSkzELHU7LNVhdMXFkyCdHVdhQdkhj8SMhpDw7i8xLuE5oJFpS",
  "key43": "67b4mR8gNF9ovuZWsGZX9Xq4TykL3xGRUNTLoWR8xAaZR8knP2LR72R8Cfs4UsYhyj4PhwBQGquao55AWw9XPKmq",
  "key44": "61jbM7gKrzbcwU9PLsxkUqNcwgp9q7dGnM1m82Y1tMdVBtzsfSfTp531NnDew1P3Wym5fTCT6Ckr8RSUNSo8qMG",
  "key45": "35GEepKGS3UvJTPi2TgynpQxcoWwcuSg864Sovf7kUqjY2GVRoPKMA2Cki9J1cveVRqKxtmawGpzRGwwq1grbn3T"
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
