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
    "4GqYS8Vkdga14sLx5RuuZEDKUsKvXAkbQfK2xAVydkBj3AXqZBE8er2BinVZYxaBiUQH9fPyHgPxVuGX62ZeX6bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7MFdS6kQx4v5H2J9Sn9EXWradCDiVQuVRXjDTdDBfnGbxEXiLkP7hB6z6X7synbzxsHCkZZ87HQHHLGZLYjTHF",
  "key1": "3cp416TFCTq2k5tEYrAPjmVLCM2X7WibyTFKrWDXeNtPgrgLSyHcmx3LHdgJGrPZsyE76ZbEF6CmmJvtizqe9h5x",
  "key2": "2QtqGD55R9aPAZD2A8o6VgiTnLZpgwAmGVe2PPVjU7Y5cJ7keZ6Ab7hfevv1jRev4oi9jFGRUoWnzR6u4WxkdT3S",
  "key3": "5vQAF3r1MsFaymaoVqvfyHXCkeHxxm4K9L5CtgNwvPYZCVXb39RvxdNdmY5qoMDvJpdKDJLgbeudA4cFU5GX5Usc",
  "key4": "63XNkSkP5MD7FGNX87BDaVmgjqhCdCF2f14btFEiyYenG3yED3gxfDrNWsxW234Mjd3hw289KoPdWLeYZWG9q4b9",
  "key5": "2WjwZUw4eVxzjYBr74TuRZnowx1kousk5pqcFB4oGooSyB1687hHNDaEg7nZyHTNVrUcFAohvEebDxxHaCgWr23t",
  "key6": "36YgJr1GySeNnMzhSfJQtvkuwXqCM2c8o98RhSPMdLaBhYWvBL7cTXyfNRKSLqGLLvTUgdMeBgZa588mts8aYpdT",
  "key7": "4Jt2NEqEfAfKstbPaYkqRthaFJfLDXZ5JyvVnEnyGCAgG9rT8NLy5vzhpCAe4UT64bZWKJ287feh88z5DTWVrBe9",
  "key8": "2LEQXVZsY3B888zC894Gj4Wj4ReYXfB1NYHHHbJgjZZV36RNY1kMVs55ngELajfV1Q7cq8MQGKiDskggiUapev9Q",
  "key9": "2g6TNAFCE7PXBx7TpagXa8cqCGT99VitBVA3WPdmTnS7i4QzQfReHX5J9QQSBk62dCujarZ4AALVZTyT5NU63dKb",
  "key10": "4hyUVRvrrEdCE5icC6f2ouogN7tTEK8Q4Gyzsp36Fs6KKZbquUgE7zHoxsDv3HSoswkyHuAeHjeXEkUJgzcjK9wG",
  "key11": "66QKvCevGQP1aJvhmgfMkhq5kmcn7LQ6SHPYo8RNv82DQ4M1RUvpER3FWbraZKoci9ddw59vYABkkcV9EotXP2WP",
  "key12": "4T3quqqGhoXGPdDGk86HPP2dKVfzajvgwvupyUcC1AK2Lm6QZhU3JMnUjfytfDkJpGT7EPusxyWLurNhsH2E8Pmf",
  "key13": "3RECWgpqZTfqh4TRXDZG9GFSgxMbrq2FnTbHPQEKwreijTbuyHjzFgdRFrTrLx1kjziihtGZH5h2W5jZZyuu5p6Q",
  "key14": "5qnssUB7nVtc4yqK5T87wksgn5xDr7LYRGaMcxMUBxhZ81BTYikcdLvZcHKeUK3yUwi3q34JU2yCrLvW7GZdqDuh",
  "key15": "2UszL5an45Y3wH7UYEwJpJwVzfAx75jWbM5m4nkQjGXvFeSVjkbGadJumBYi2GQ8GRYfMFf3X3fuFqzKD9GXFXW7",
  "key16": "4qLYJqk4oMrGZuexuxbADBYJPYDcuRy5Ns5QonzeWrBC56DYEytjHjNqdv3SijPxrZayESQq9EGxDYMhccgdnXZo",
  "key17": "5GvTqWuryaibKkXTZX17wcka4Yeh4NUv6imXTZnGvCkGwsgTQJynaQMc2N9N39x5rkniDdgGo4CzuLseUdTimQLm",
  "key18": "5vDf4bxtx1DcTVHq5CUiNgLqkjrR2HhX1UX5z4sbK7wAifNvCtkjvGaem869dZUPhQ27YxL93oXyjq3eHdFqMfzY",
  "key19": "2esDMvVNuStiJ8EQMAHXveytrYpExvVEv3gkMsWj2bRPeKYDW5ZAdTJ71c8bfYjeYt2TKrgXZ2L5LKSkuzkXzm1p",
  "key20": "3E7MzTwK2UohT33UHgNPtkwY9WGxdmHPSrq2bgtRehVYX5rQE2qUSvpiVf3jApALrLs1W4Z4X17ak2X46fFShcfu",
  "key21": "dSnnzsX8DA8bpWK26FEA2gDr9bMSCuzP2GfJTfpsaVeksqKY3GEWvAFzuVbojxEJiScmsYcRjUSBHQ13jyMBBc6",
  "key22": "5GWXw6gzTMvf285njZYSqXqyBDS8ibX9psTK9wMpSGuv5mcDABCMP1Hkh5KBg2fAGN4wXNVGarvuzrMiCSRzezWT",
  "key23": "2sDZVAjHsG2Srr56WRAPtJDQueQVLWe3Mj5FXiHybmGU6BWitsWBRo6Uf7cv7VpUF1Hi2rdLJLWzqNpnGMeJuNk",
  "key24": "4XYx7f75s5GVkvepwvmRQE24127hAqm7o9n7vbXGYWYCTo9ZLHvKUdJYhnQGdetRnwfBnaRjMdUQ79zidngnGrbz",
  "key25": "4TcCEEFCgBYgpRNKay1UpjeRJZxRYmL12ynfhB1vsPRTaTkjBTZ81H6YoomxS4NxuJDQ9JEFZmPtRRvvnDM27Tm7",
  "key26": "2DihdEaxHLgmdWx6jirHEuwSviCRcH1KH4mw1crA8p8DAA45QhwabaiGg5Cfe2P7JUTTZqFU4oqEde9J5R7B16Kq",
  "key27": "656zi1FUsjMSUCvznriqnCjKiAUjqjhiqqR6uwiD5U1dZTCdT7ES4sh9rZCVJsCy7hvqYf4JiYcGqoTyabUYdgsu",
  "key28": "5GJWxQjHhNqZ8G9JDnFPkrJQd1Uc4hdYksZ4VHaMr9JrT3KH3upp8brTq6YgWKkGLWUGyTeaCK1HULwuZhfQXTHc",
  "key29": "3FNXVwqzCWyHm6aoaieqWyCrSJeoAZsZ5DYzJp94V2JCRwcjFrSATs6SrQ9N6xQ6SDJZqcXzxfFWkcqfSGC7qYMP",
  "key30": "3fTxWT7gjjpqbB4gm79MALWRXG1DyWa6KP5X4bVAUnDAWGmAWghyM5fEToiKJ3QvKhTyLK9wBERH2NTQnjGfmySq",
  "key31": "2hYDe7PbzptdN5GSWvXEyS1fVChPuHUfWgqnSeVjzoyhNGXGM8ELa2XLmEYLC3YdPTFwNu6UVu3TqgvuWxpt47S6",
  "key32": "5YtaBeadUvCCYuSyHHNr5PTrdCFQv33QfPHaw6bwr86GTsEyQFoNf8fFvDHxCoy8sDRFTGiYF1rFiDbFtGqTXEEa",
  "key33": "5pDhccdcG4GXft9JhayCwmH7WWVbY5pwmgMdeABd7mqbcHeYw6BPzxebzrMXy1FuS4eqwetc4ZRfsreLCBGnbwqV"
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
