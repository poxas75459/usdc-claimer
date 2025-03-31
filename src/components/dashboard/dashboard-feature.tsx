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
    "25xnobkxVgsKNwhuNpqrQjGYN5SfQnkCN5aWegjF4XjjKWncpkBtpf6S34kpCsumKzk98U8GzpNJrSutgxepHtzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKRSn6E17C3rD8V952eqzbvrucUAng44zg9neSwQZvQHSxB41ui9sdxvCu4ziKuQVJawA3dNBADUoD2SHFWSp3",
  "key1": "5bZnw5EmuaGx3MeY7DDqHfWLUykWq3x1stn8d8Pkh8UR3gmGy2bcdY3qKPWTgE2r4hGVg1e7d8TVzyVgPxsXsrbR",
  "key2": "2Qsk7hnEiS7W2ijqqPJ1WrpYHhjqnij5RAQdkLGmFue6EpF4BaoFxVSx1TNajuACeqqSKQY8CeVqkYJypjEWU6QU",
  "key3": "kpwYmXPAg5qg6yXsYAGM324PHrUrwZXqxyS66k5VUv8gAD4vuoN9JRFYc6T7qEtyKuUr6rnBpK5cmPMiUATParM",
  "key4": "d1mxwBLiwFRh4SXTnRPcaQ23MKZY2o8y6q6jLRixaiksUDuaFAskXnTphdfJq2wWT2WsnTk4EEk61N2XDGGxp4K",
  "key5": "3V9frZCbpjG6jwUrzzQRejyngodHa32nmgiJqkGoRMCE1HWR67h1LLWEyuX3koZuhbGqc71gK3esA2fhSMXZVzuG",
  "key6": "vvDmonp8UNnJvj1WXAd58qU1Q6E4TD5goRXTzZi25BZizxEZXxr7YEmsjjqJPRc2XVVhKPNpEzoFHufgG9x8ftV",
  "key7": "54z4Y1VTGLVivbEkD4ptNn59c2B6EJwc64EVUP6QY3FdTWUNBGbJMZdivkLyeHyygKEUCtg2Q4BK7HU4eMudRZXv",
  "key8": "5cX4c9mrZAL1ymwH8WXn71GARDo8bGLULQ5sqdaGsU58gUqNXCE7BGMSZuKHtumjfg9W9Rv2w4AhCEJqzWABB5NX",
  "key9": "3q1aiPHEEHdD1iVEP2NXVXEgd3SMSqWa5omTduBxwiYXwj2kBMVa3hcUmCjfJk9sAuHKZoaHgxv5yZo8YjmCfeyq",
  "key10": "2NJEGDfh4aPm9gwceuPRVtGDJzkiJb1pnD4Z9f3naub7vikr1eojugrPG7iJarkfYQzowYZJbPVsoie9oDhVJCBs",
  "key11": "4ZcZv8yq2MxiRAPnqFmtLZcrtb4qAYqMQZa27m5gXS3gkHvQ68XrarZjkvpDfziTaQcLvSdy7UxQFSijwo4ELJt9",
  "key12": "qwaB7UrXoZqNG8voVNvS9JiEKfH42LYmYaX4YTP2gYzJbQiuXv5pg41XLAnnA3sQR4crNGHM3P1MBVny3ENuQpX",
  "key13": "32sc6fCGdbKsy3rzaXjDyiaFsnZHgNemGC3KpWpzRyiycf92xzCM6hGk61gMUqXcXgfXP1297a6BCw3rAGHnQvcw",
  "key14": "A49un6tNWChGFcPkjzGP8vhxvT6pJ4TdRgEeDjawNkEhxi81swnuAsYufwYX9eMB3W1vgpn3CGzE6pAindY6GbD",
  "key15": "DPJ9na2HfxS1AJ3TSYtWpzx755jeJGQA2QMihChs7oK6e1oVJBkkcDriA4Pmye86o6yT17FgmxTotYX9MDYEDPz",
  "key16": "5DPxpHgCNZEZpKCHsHLNk2L7AReXg9Z73g349Yrm17J6vcvkCg2SkZnM23jbegmdxzoVadNXaKEB1L3bNswqPLcR",
  "key17": "5nm5ku2KMjUTYZj5YDERQbyD6XDAtAwT3xdfgfQaSi98ccD4sVSmwTxt3XC4CrMTN9idYTC9GfGb75viKRq8EKtk",
  "key18": "5DLoGTVmF2psFScbEKyUmEKP8uy3GXeNX6zMDx14mGU67RWe3o9eLGVoS1vqiTQLfaF8iwPNv8gyxM3MuaWnhuBE",
  "key19": "5PtJwLBUegaQAVr5BGb5wsWUVScB5B1vEqWiXZxiJKKdHLpSWzhhoYVYRJmcCjvSyvbduN8Mc4khY7DFi9KVWGYH",
  "key20": "4F911URvreXFhvXf7XWf1Hp3CmxDSVwdhZFWMeJEfm9pH76iBHmAVTXeekg4o3yGPMJqTLrnKmWPzpCFEPZ5UDy2",
  "key21": "4srbYEYd2qPnJssEnzmvUmrrkrjuUJFNBVpBt2RFS5bfv32KeY8pmfJkejJsKhty8JVc4tKMfds2YbxJCdxRLrdm",
  "key22": "2kMATTfaxBk6g76ZuRHSgWDCxQVgoHZnvSKcB9td3hKM6EBizwFC7inWVbd6VKh9W5RNCBfooTvgbCrB4kLKEPvg",
  "key23": "3EahEvmkatvzDN8BKXvN57D1QwKB4mFCXz7Uu6YwJuEpABgWAs1h345nQaALsVABsz4HGquEmZ2dcRBphwot5v2V",
  "key24": "5gafEHNaMEHze3kEe1HtgHF7Nw7pmp89WHT3ddSPvweKL6oPqkgdYjXnnTLdE1dWAGMVNiPt4UndRuNXDyhryAhQ",
  "key25": "3XqPUNJwbGaUieAsVuGzKb1t2U7A8KdNdxTE4pMJEhumWJxJNVMqwC3aifG36EJ18UpivZzfAAsXDKdfuvjTSe2",
  "key26": "5UGcQf9eESqGMnNAkYtzBaY774jY1orF1edL59tua9uiUcXcFfCRkxawTZ8JLFXiGGJGjHdnBEyhyNbcxcAER55S"
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
