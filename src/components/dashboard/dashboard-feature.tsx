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
    "5qAoEixthMYL3apanQ1LCyKxLbeTKVYbYs4rhAwnjhCJbjsKk8LgYh6samzH41oYVbnvMHzMJwhq6Kb3pwC5feRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAt15QG6QwAKcGHDFCPaa5tv8LV7cvjiiV2wWeNrkMPt7rKWKuagciGpsB1iVwZqpDd5JCyQ6qud1V5gHAn49Cy",
  "key1": "3y32N2wgch1PMGPuvqiSEnMUa5wuTZH4h22k18JtkcU8zat7UKw9zUdc8Yq2LJSABBThY7TH23d6pFJ3LxiBugzS",
  "key2": "sqQ59qAPtQtsNUr8suFCUbsFtxkNVEjPwXDGgoE9KnXWZpN3B6bJkYbAVaKGuxKgHGmYFp4yn6MUuYmhsPYvVme",
  "key3": "3Vg6H9pJibu7tiv9pZenFKTQ3sb2qs9Bxy8CrHwzaJJV8pjhkds13Df1d4WjnP75eBDSzo9A8Ptz3XWri6R9Xp8E",
  "key4": "56fw5wRxPU9YfJ53RJNzhMm9HpPsvivvpyVcF25rxG5BwJAtmuH8Z9X6yG9YU2JUuiJTwitks9v1sKd6thzzrNfV",
  "key5": "3qnn4ZraqYaNqC9JSgof3Ns2EZ6iU2TUdVS772djb9dgwqZyKm3gqufYfmrSJTvFuYqqCytcwbCndVyajqnjUUwL",
  "key6": "DurMCVatVTSbK3XhdaYGG2tc6PLERJoCPzp3hxLxuapQsqXG3Am9CBzeqXxQf7yw4PMHTG5WLZFnm6Dk4mTtxXn",
  "key7": "3Z8YDYbgiC8QgD2fGb5HDMUdnkyjDn7D2BfgGqYsuSTar5xq4WKAPHSjrwj8Euu5xYFGoKUFFTwaoyDf4Fz5yM3r",
  "key8": "4FBSgkvhzyKavXXqjxnD8drangsooaYpxmhAWfMbsF36TUwGhwTnNetCMJbkRKW9Y4345ryeZueE2es5JExT7cB5",
  "key9": "2xaoDgr76Nwzrff99pDNPtN3ENzmCAejjaR6trpbQtiyLm4512qu8qHQasmZV2ddapBqmDceu7AVHACRkSpATPiH",
  "key10": "3fARWtGvV41xwfSetNCqmKiK6Ek1TFz8iuDeZnR3HoiTvqEGLXYuoB5CZZc8EipFd92pHovdekWc1PDJrHSa3iyr",
  "key11": "3sxf1JnAukjmjucCrEf6H7o25k6JSoiZVZABUBLuq2h7BvqLQ2bikirKhranuGVNL92BEWi1GuDCfMjvB2JTgbrc",
  "key12": "5Tj4F2DBJ4qpiq2wpVGMoGzy2BtQjcwCCX7N995ybQhJuD118GNxU2SzHnbL8c3ceMifaxdLi5GkE2zC3tXpCegQ",
  "key13": "3pkiq6RNXmt2sB8MTtKHPmoihvVrTfi1ZSTY68RUhjJ3WJiYrtE75Z7Eiok3bVaXqPceJfNefB2WPSdVeU3AR58a",
  "key14": "3passHXQRgmzbVqawgbwHNPTCSDHXrcSPh86myKpDfTXBTwEsL5K4Ycock1wuEzvtZuAuMVbHxcYuJRQxGw2fFLT",
  "key15": "Cc8DfXByKZpjudsnBbckvofgxCeNfK5xJimjEvSoGD1a1Go77524MtjzxzJrQLroTcv9dT1oSiSZQEMgLQ7apx5",
  "key16": "215w8brBHdCXG5mrWDmXAuoCzSjdfKiuta4xUJMx57CfuSf2LmdA1JY8GmW9Cn2ERmneQV9FUSGjH39tSMFHtNpD",
  "key17": "4MxQjX3TTLikREhYcow5VmXB3WF8K9F34CyfKPwjXoNFEzFnQpPpH5qoaGiSjeeTTyzEfm8ZiwvCR72GvugHYTrx",
  "key18": "3eN4r4HoSX8aSwYNc2FUDCNVRuDPiQNVwT8W9mYiMjCuptDxmDd4G5KmsuEXBEG6m21rPrEtp2aQUbTeFZmPJxoE",
  "key19": "3Vx3TEY6gR58DMvc6P95DX2dtRYZHfs3HXjr8iyveyYhdU462NqrqginoxZzPaSkvVEDvEVwMYnySP3sMuPdBYbq",
  "key20": "ntgszB4oYovmZp9i75fpoiKavQ61f22eqyHZZt7UgR6JDLW22S28fU7zQEj9sn3AFwb7fqNpM4BDxmJhpsMtL8T",
  "key21": "5UgG8Q3V3ZPfSHETUnvPq4WUbEJD1DZttpyuPA8foEPvwEQtM4GX5APgaQQjaYhwHQbw4PT2d2rEZT2feXdWzxKX",
  "key22": "4hqUYkD65kFGfpCUMdoHwRCvGhMZ4Q3WRuxDVAMKVftddxJrW91ZfG4sH525f43E5PSnzJS9pPajoTBiu63doBD2",
  "key23": "2wXV35JmVJTfLT1VnNP2jtEqepHD5g2Hnw1Dmtswy4oRAtDFE8rXP8QSTTh9C2Pj8t9fJ7RoAGcFSjLnDXqQsf58",
  "key24": "5FSB7KhY717udgGnE7PVTp7pBJ353WeyXeVvLFercgXEZzxNMYdyf9XvuS2wcwLBUMf5zqjZNTs9MUnCsonEmnQ3",
  "key25": "yX5YkDxV1jUuZH1yJ58Ds8vsVMZo124TJ9NNruHHswU14LoBfPKBQQ2ajFeP6YTjwRdVwb7j7TQRKZx7oa8rMXH",
  "key26": "ZVtoQgnTLoJKtJinpMxgxMYiWYba17PzxmXitFBzXAbFD3diZqzuB7D11HJjwHoMG7EWB9JnHBJT3wYinqyC63R",
  "key27": "2Vx7caVpMEFvsYssoU3jzW9Fe6xb1eyHSVBvCoqymKEhHD5j7SZa2ZyghMyYxFbWxRDiygmJKRNw72xSnRUmZaHU",
  "key28": "4vFLfUA6j9zHei6BfecVzazp47BfcBpRnBer33sQrRrTGBFTR1TYLyLJdDVvhTSdBb4ZNpsLCvX6f5xW33NAq7dK",
  "key29": "3VTRNe35xjeGpfUgfk9S9u5WfYQfuVvzCPnbC3rh8pXdgdE1kQtvKv9875qwbt6VgKvwrxC1a6Jp7jr4WAfBFu9S",
  "key30": "5CrdxhTxnZ1eriKe9eZLuQUvyDqkyAeRYi2voreUjLstja57Xi6MZhQEepaBU58KQ7pFAH2WLX8QyzXnrBsgyWfT",
  "key31": "5DwGhND9g7ygnRv5SqyzWrcLj2JHDXWt9ZLdXtQzmFhFAQvTBNHw9nS9iH8RDVngTQzj5gdsgdGfW5zAYjsWbSTm",
  "key32": "3rpbPpYoP62K91gQg5UDTaa37XCHSLzSrWMZPsSc5pAR21A7qMPCHkNUphhLGNA6heivKPtsrNJdY8e9XdEHwSVY",
  "key33": "5btSGwfK3Ww6JZuFtg8L9Efrs76f4fZGBWTyuWpdyorzPyqLv5kLWn6CaouNZiFfygFxpTM4FCrG9th2xbr62PEb",
  "key34": "2DmiipyewJeikjyG5brPPSLnFyq9S11xvCaFNekeRW9T5r9BXAc9pveBLaZzeg7461sKNzCx4RjUjqgCtH7YNx4d",
  "key35": "NgvmnY3vvyKHeLDYof6Ch9WsdxpWzG3cATu1rotypiUxLDR6rGeCczFNyn1iagb3iJyd7Fwkv8a2REzr3XXQCd9",
  "key36": "2Gxwnzna3NEYjWev8DeUUkoE4jM2DQ3d7zMbYWfZwbFUDHi2rkyVE9uSaJd3GqUsMvjeT69SUSgFxvhdW3uH5wnf",
  "key37": "2mgp6N2Wxs88DLimiL9k7NcUvJ2QK4xYatJPnXine3nhTnEdWCquEKcK8Ri5krgZQzTx4D2sqeDFFm2RD1z8RUva",
  "key38": "57sigumoYmeUQ3JLTC9C6AV4m1V5xULjpLHXcpmsQD3vWHGNhqa9Y1AaoJp1rQqQfkjJyzhUEWfj6RoPie8BS8rE"
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
