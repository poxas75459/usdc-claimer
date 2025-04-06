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
    "5hRVnEtBAdkdXBxBfb3UFCEUJjkKwasJhBBxVCbRvURdeHnpXp79SGCEd4hfRVbf3kZA9Nt3N5zXrAPuA9uhnh8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hY8vwxsjuzJwXYci6dMaFevYwC6AohN2cTSKz2CGCBeu2Aa4fc7qnBYfxQEPQydWL18Z6DhiYaqYmPFUZcjN3NW",
  "key1": "3BWYxwtmbx2r7ZrPJ6hmXqdxHqNxApNdVaSeV3BeGQiBvWnUZA8ukjLsXEXh9RbdgzmZUbJSSLZt6W7pdwBCGTZR",
  "key2": "4iKRGkB49qDwwu89w5eS9iH2Fw2Hxb6RAuM7em1eSyMtKtunyPZYBToJDx6qKCgbJimokcmtKoBiK3bGrvge4UJs",
  "key3": "3ca2w19jB5KSJeADmuxwZEV1Bsm69UA8m57vxsAY26EgSi8QS37XkUkG1vE9Vttn49YicE9L9UjqqoCXMTFMqtuw",
  "key4": "VLazH2MSd9bGcHEx118HHt7gwVda7BNapneN2LoEHsC2PwPjTVH5rearETYCTa5a6wNYHvESTCGUERWFiN2rELE",
  "key5": "8qS4Dy12ppDdsaS35ehVJtfgGUQN393UJhjqnp5k9VmHcU3FapA1ixNA2d6oBJHW3sn9v4rteBvxuNDNGLbU9Qh",
  "key6": "3WZUBBVTq7mkWftaQL7zvAwM5RWmF83NBPAqAncizYotgR6F2CqRTVRSGKZjGN4iqThi8z8AxJM294cSGgUUSk65",
  "key7": "4vCjV8Sf1Q9MLGjTsCUZykZUsAvXewiSLBgRpFpQSz5L82KwdmZjE6j2X1XqRAnwojMzCXphprxErgWTVtf4aE8C",
  "key8": "4cCbPvfiP6gQZQbwcKr7QtPP62cTjDHuk4Nw3dBCHj8eK3x887DUe4JaCwATHAiNpNXrPBCzStLWLeywbxMi4Sm8",
  "key9": "5vAtCABNuLoBYk2rG6JqARuHFMXJMBKu8EbVEzNfZH8DfrCqJzGKXChbfWVPedxVJJojZWz9q3FRLpSVd36MA95d",
  "key10": "2EnpzgApMdnP6zMBG5BJib8m6qZAsHdoscDHz7YKnAF7Cqv4p6b6CCWCK9ZH7zVLT1yLUNXovRWaSPoCvEoN8cAU",
  "key11": "2ovpEpd1sjwVmEiueW3fxYkzsGwV5ByAp8hX1p6yrKy34zY7taewBhkbUc39CJFbDMHkvNVkHDha67G6Q8hdtSE6",
  "key12": "3q4uDUFse7MzptvPH8oMm2rAo3P98DrwaE18WD5yboh4LcBrPbWFZHqQ1j8utMSXzvTEPgdqHLbBFmrUGJdswVQw",
  "key13": "4f5WyYNXcAGXiGAS6MWojgrjwQzUi24qyJyuHXfXJtbD4Wm12VLkvoN28zZeozHW9GwZNVTpBi4RL6EgrmxzqjzE",
  "key14": "2SvGDMXGb6peyRVrmWUAjGQj1SCkfnjVNaw7Ata2ugEBbSJuuL2EBKtpZyjxbKx7PB1QeDW1jTb7WLnzfPrWtWdg",
  "key15": "53YERfrTCxfMuQvCbWrQ84RfDs1x9otZhtgGoNQHA3wBQF12iFhUz8J7VQ2ry8tNqWjuFVwZKFEM5qm6od9GX75A",
  "key16": "3syPo6q5Zr9NGwJ5yzrxN7EtyxvLVTkrT4Fwre5G3iawJPkAhgnQrNwAH7y4mAUoZiLTocgXWaezPF4S2wLGSgCQ",
  "key17": "4LtkF44mner3LVexVM9fAKDaqbdn5C8vBDpYfCYG5suLRZaTkjz2BoJdPP6M1Qz7LDK4aBHCi8WNgE3tfJb8Ujhz",
  "key18": "5Y8gm3efeUTf1tN65tJV3EkEA9y9NXYTztxJSxPD2P9dGhCVjdCRoVLRnwgnwjNja44jVZkpFKtXqws2EAHBCLaq",
  "key19": "2rojXzidaqywJ3ao4zhF3guvkConf8nKVkGGamk3gzUvk9sfBDbpFxSJQyX6VFZsvrLdoVkEGa8FgpHa9f6deHDg",
  "key20": "3pBQnnjguRuvB3CdqKcfoUa9HpW4Cp7c1hofnVkK5JE2e6JnBkmoyxG7Z6nMbvGJRSeyPAYniuBgZw9efCp9DVq9",
  "key21": "F4djnwQE16TUb4CSKwRfRpjwvBA4NdmQ2xaAvU2pddSnQrfpNqd8V4anjTvXj1vFZyvrBvbuiCF9NCn2yQqSq45",
  "key22": "9iPopKWopsMj6iwm89hiJyYnehq7rWMZseqV82zfneEbrRDFNhKmrcHEq9tocRbj4tdkQA8UTiGAGHT7ZZnVVZ7",
  "key23": "3UyYtNCb2R8raiWmXnLTthFosiBMaVb1hYfJnTRCg3r7CkgNsBVqZXRSrqnHxTE2Njr2M17ArvQwVeKZepwHf1nB",
  "key24": "fWWEZ9XJ2sqaxJctZksA2c326iPK81joxuZMNw2RdscbLuE7PZEteAqreHKBwcJm9TkSyd46yyTjxRVbS2S2kwR",
  "key25": "5QhcE5z4xmFihCrqq9nhAup8TCgBagtGT46S626R7ArQNYyS6VqLtLsM1AJfsMA9aiShrg5B8dxKmz1tbiPHv7MS"
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
