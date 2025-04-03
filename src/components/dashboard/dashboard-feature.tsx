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
    "2HfepQSgKF1cBmKmjeGimBYoCdH91jWdomMpXrD262WevDYEotgYy4KVb34MbKFvs8CDDq2MXnNX1E1EunVDWKgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVUe2At7VPsDPGdo38GVgxyVhnXyPfTGK7hhpRasT5YnnJcKSQfx3JzLwtAD1oiwraEZr8kHpL9mFAuzVzpRjoB",
  "key1": "2fGydpivVTefUAM1a9rs5FbFvy4S2BnzN4CrD8ArKwTceGCjnT44DmCHfcaUbb3yEsfiMbJ3ezDjS8HSbWFS1PqJ",
  "key2": "2nLpSfq7qWj6TQNPad5i1EFzqzAdi5QuZJPEcGLo5DV62AxQz4PpFjDRPpiSi3TVR4mUXMhiyhmPKeQRGREeVtLY",
  "key3": "LvAEV7dSYwC7cBTtbGtDwAByXrX6ZJTnCs5Yjtw2Mk3p5rJ4Qxp5Png1uCFZyTvmtTWDqUGvaZHm1D8QiSNKB6x",
  "key4": "2VpWMLByWxcEXR5UZQL94EFvUHxAwY6ezcS6jy2EFJppNsXxAqjUtL3CPySiLYgGAyEwxJGPuwr9cfM1zoRpUbNT",
  "key5": "34nmo6chrgGiGjQKHfqVCrqQGutxWyMH2b4nyQu3njXvyvXievbyMxYnNQEhGiXkgV7DmaLaHUiaHHZvGTYV9KWM",
  "key6": "E6ztf7u1G4CnTU657XJEQFD1jd5yvHdA2HRJdhXMGTo4gTsQKFqG46RASyqnxrT1Ax7kXbQCb3nuMNtt1jPiKsX",
  "key7": "26ZqXPmP2mEESF5fzf8arssyABrnRBzmJSsnaAbQx8wDmQqywd3rzF5cb8Wg863WctpqzP9Tsfw9mSFz1dYpSn9c",
  "key8": "5cvoH3FPzqwsFjAauC1aGTMPLpDvNmv7U3Ju2bRDZphrjq3vfXUofZ4edTp2i7U4w9gmB9jVCvey68qCrGZ17LQF",
  "key9": "5fkVntuXneLGcSXD9bwdcyCQbfbrr3CyVyBeu3BihK6NChUqayPTw5tMKonvpFwmAjhbsyn2HPYnKPjMj26cfVQM",
  "key10": "4Kwm5GRQ6seKpm7vM9fbkv5R2rAUMXJkE2epvSHwQqS23fvD22Dzn7Sd9gjzCu6mmhyN4tdcST4myMAHjpWvRKeJ",
  "key11": "5B4HhwjxDHu71CxfXMxg5FhqANHnpuC4CUvAHVrwi6pRzznv27KcgfWC71Kw6sHqc2DztaQ9823Biz7HPm3zkUNf",
  "key12": "2wiTare3HuxgxPJLXxrYiJ4j2LPDmo3FZdefnQXX9U9nksb4RAz7o7szcmWh4Ua4i26YAg3a6LKqdA1q68kftnaw",
  "key13": "3WESVM93Q8DGgwgikjvgqr9epXpnmu27w7PvL9ybBS7VCGTJRRASb5AAapBXrwbxW7mLBX7pPPmnLRcF1Frev9k2",
  "key14": "5WQ8TG3iZnG6iPhTdEtecE4ynJSciCM5LQjgHKgsGGijeofndLZsWZSYgkmcqyzrFDAdGLHShrqWYDZJrzTRXoVo",
  "key15": "5QAtMKW2FKyDAr6deDFSkhQmrAJ9kJU2J7oUG2YWkTTPnfkLva4fNmeqVMF3pAp147LvvdT6EsVB8SMEnuuNLcmx",
  "key16": "4AKQjNEgXQYFCfhiiUNnRAanDqZ291jwG6HjpXErCMnPv3BMkSugcFn2JwQrtDb31Pa78Ypc4z5seCzEywVqoCyV",
  "key17": "5x5GrLzpsPCaQySXfysMcKjQupTrUn84DQLF8A1ZSqB9arsMGPD2XMaMjTkEJuB91U3PATVD6WThEDJeuSzfxScg",
  "key18": "2QwwpnZHHgrKg7qLexbRtTqrnUodC9Kdi5dnEs7RFW5iK8TvGXKnJDykNCwhUBZCNdjRwM5Rvygf1zVsiy738T4h",
  "key19": "2Hy1ySStTD3QxqdoYJgZJpzvvJht6ye37UmkHtKbvyGLrrtjoYHVzxfJMvzNxKHckWWK4x48eDEhMguDEb2sX4iA",
  "key20": "FoAxGSnBPvLwhDztyt3Vp5CsMRXryCgbggKn8UNAaC5nwi7CKnXP9YhjPsbYLaig69XZR2rwkunDSKuEkdD62DA",
  "key21": "3eNkYjAFgrG2StkCqVbsBRyvbwWWFp3QK6NPxVgg2MasTtv2mR4PYN6HPQacWMb81yqwGUc9HTFfcf1jrimB7C8k",
  "key22": "5PseViFdPnkjAKf1fkLw1ZVgJgNznZpuZLVbESk7BYCqnsf1A1yLwdXGMuwAntsJLG1jo33WdWzBDyXnxTN9gqAb",
  "key23": "41WRorVcepeYpovpiCEDmHA9irBp1pu3n21F3RbWScBepnDeEZZrK1AUgr8jMAPrXwoMkUo2vZhVhdzs874dTrED",
  "key24": "4vNewXACWri4vg7pnNARCKa8oKWY66kfcMpyGMFM9CK2qt6PyrJhb17FFfcRqV36aDz2AuWe9nxy3vDtCVyhQf1G",
  "key25": "3itGShy5sTifLGuzHw4LJG1A2GPJcsDCkpM4F9t8H64NggkCVS7abWffTPU8qucYFuqDzCPTC7CNWuAgh9dkNmRs",
  "key26": "5cqsuEX3nmR6mDrmZp7FgVvHmJ4AdpQqF94QygfeVGgi1W7ytXWh2RzmZX6u6sVFxseXtU5MbjFMJuoCrGyuPuQ1",
  "key27": "21Mwcwzojajd7i429sgAoi8Uk2KeXx4QHWVcZR6Dp2ocT383UPfBPfKiNV3uJ3Tg3XdGJ5bchnBacPFDVMArH5gZ",
  "key28": "2gkaFvN8GP86igzZhQfC7urAub3J9Xr5Q9Znwey5t9TySZS8kRpecGYQXP8B537GPGBYpArWyeQPmQN8RbS3F2qF",
  "key29": "ZTZQytzBTG5RARr9oM1JZJY8BxU9ncqPDZHopWhzXy8Jk6oBAVm9jtp9cm9jikzRwBKpsSi2kCrSnE2y1wiC2g9",
  "key30": "4E1Aqz7bGYiNv6GFc7KZ9QoHdZwz1Rpw5gFWz9bgK9rbChVSkTGtue2bdWR11kfYrJNVzkUEzv7jDnSDDqgcG8SK"
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
