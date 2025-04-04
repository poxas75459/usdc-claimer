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
    "4cGnpmBM7FqzyB9hJYkxyD5joXY6XVDGvd2S853zJAVHGM9K6FdLNMBjofto9i2y2tW6CnGknF5cfJr95rYD8GVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGFfEpwTmiojDnoSBnRno6maRnd9TwwgkhYbZk7e4J4Tvuo46Q7MGv4CayVvvf8MvNnetVscVeogF3X2rFAVWcE",
  "key1": "4MGPp8eMjJ7defPgXoYVNxDGeBDth8tj8k2Mu5dvFaTNYPnxQVv61FQ7RTQXz6efDqdfU1UXKxo6PFZF97jryWN7",
  "key2": "2Yz7z9eB7VioBVGyJUzKAQrz1fpavW3YBND3g25nPJMSRBWSwdLUGbxanibZDgtbjqn3XnM2MvW1H4J87aQNDdNK",
  "key3": "2oWnnPgN2v68fFm1pkdB5yVfKdTCMUnqjpctVzr6cMZL5vdgPSEoDHt2Widzamn5aXshVh5jzKHJviRcVWHbiDnk",
  "key4": "PdSUo8ptV6DQHX4t43W1xmuFV6q6An473EmEs4eZdU3GaZtq2XRY9r2bWrN2YhUxpbdy72ba8c5S1Ggu6g3bepP",
  "key5": "283JjpCrne3WaRyk7DwxXQbHXBkYNeahoPgL16JjmdVM7SvS65WAoJrzRy3nPoKvJWFWHVVhnMLARe98nxn3PHVd",
  "key6": "5rvyAtVF7vzyRPVLcCoog1PN7SwTWrn5MtmpqsQe4WeaPRCBML4oB4FCh4LUEBzd8XBvL4qDrUNFcbCa9vZhSxd",
  "key7": "Xq7sxjX9ttmJ2zbrgXyNk7QWXrA1WE6uVNvPyrnYH3C4eMMfLbwd6pfXAmgLBkKph8J3Z6o7vQmVuatULP5BEmR",
  "key8": "2e6afCLf4UbB56tygpQ7cCCnKGQqQ7LfEuFDGrnA8qNpSFuEDmZnarRmvFz75rNDg4ToLHn34cpSXv4aL64ACCAr",
  "key9": "29BJosxJoKFGDbGm34JHzPxYwHHsqG4ohd1F5de9qcFsG7wxPVvF22i3jxMCqdeK1LACsFpHZ4oZqcy6UzWKfi8h",
  "key10": "5W67VDtVgyUChdg9pL6Mn6Gmwa9sBvyvJ6nViXP7FhDhfpMr6KG62PtG253d6btV9pHJAbzwR8ud64QhvX3JLRLs",
  "key11": "gY9AD7J3iQK3c7kmRkq9UC2WC9d7ryvbZDv2qGhKUmvXmSezrxEh4jq76GHHzHL8P39eA7SkaoLmmqHULpYS77N",
  "key12": "2fTzyYzaZyTtepofYrf8Lry7Us4WxLB196wL2Ni12XKks2RXgN7Pr8jmWsSgpZZYfnwJt25JG9XgEWYUKDMp6yw3",
  "key13": "4Wzz4bqnqUTmc4Z2T2WM3p7iGviVEHYdNthEPgSxcnkHofKRVZbHwq8VeR2Z8gMnY6qTm2Zdad5KwtWj4Sxck7iU",
  "key14": "5bVh4pHmgJf7iJuDnbBym7ipq8tzBN9dtAwoubK8XbLXHqkRB7o4zavC9QFGVK4yPZVxtVBjMJeTAKDGXZABHMXo",
  "key15": "2cEgyXjZoRnQiz1ZJRL35jCjAKKmn6c45Be4cbGkzuVxxFCKzNwJd5cadQjVPv2wbNxUiQ3EzPpprkksan8yfbgB",
  "key16": "52AkxsFFqPrmBQBUkSPrfBcYjB5kjj7jVNRRwS24FUVYzEncJkoJxK43Um8KbPwGn7AFU9KXuXGAX8T3Mw9rqiRy",
  "key17": "5N2hmmCjgphnwursogfC472B7enYvC8ShjkLFRFfSmuXkNHVX9NXj9ADjEA2PZEgHQm8qnNYfVyRG1JSNYDFrQvP",
  "key18": "3PzUfwsMMYuZbSGpcWN3ZBP75sWBnU1ZqCtdTvUqMgnG3g5u7L44EZ7MsvJSgPJkiEvHp18zcMvCA5syNyuiw3ke",
  "key19": "h23nCr14e5Po8MCBajrZftFkC8mn37QkuvnNgBxg4ih42ikH4Xjpt32diNtbeWhw9a6KGPcf5trcsohbaBGa8vW",
  "key20": "2LmLpEH6Y6Qj94bMkp7obRmGfJdrojebZ8gvvomCqTPfPhQqpA1UFHh5Q4qWtTv1rxAyPgsRg7tZFxJ2dKu2th8K",
  "key21": "RZsEsXCgKYFXX4tmTSiCNcauhf58q8b4RHj8aFpb9NXYcNqBSMHpN2XjjQWpDdPKzdHV5scBbKDmgEPtBaQh5t4",
  "key22": "2V8vaGFoKCe3L91fezmcSn22rJLnkpysnBLu2Nmy9ExVVzhfYesyJcT814X2Fo791LsU8cpRKoURvUbReL4CEK3A",
  "key23": "2TRD5ytAQM8qgexgZubEusm1E1JQq1FzCiSKb7ERHdFKi19jw14RjUKeSJ9RFBrPVrtXGUMhjMG55Tu7f8H348qS",
  "key24": "2v4NiR31tgEUMkWEf6FQpPZRy26YtMQwAZ57fTYHRkvfqAphHLjLMPKFFdjGzhF6uCdF8fX7beskoPPB98KBY4d1",
  "key25": "4G9BMXqQP7KywHbFGedyrinuZjJrGdMUqcbwUSpbm8MqHsLWBKsoQjteQikvuc3kVWWFP3f1vsjPki6UWCFA8bxB",
  "key26": "66LcWZJH58RZVXfrVAPT4Wa2c273pJ5maNngsjxVbD4sNaJyiyuzrM87SAumkJkvNubEjWYxTZSx2FrR7JxMuqYt",
  "key27": "53WzJAUmc9VmkhU8Mp7tx3PNcHgcTKYaUvhZca2X6iLvDiVA3p33R6fkEDaU6Qa39FnPNmg5tF6Xj5ZgvkAQtwmL",
  "key28": "5pcEeczuuM9ZnhTKp6xtVJa4AMKzNGCo4dZNuf5dR61E4vJ1chGFB7d62EBHynPaN4sVF4tCGJEvhS1xeZWF3DwH",
  "key29": "qNEkeASfFby4MqKadqDwCZ7nH8gCLHNnqa57fndL39qjAjy53ZUUhXoTh9iVXEE8dkQUGcDrQRB6qeeDvdWmvUX",
  "key30": "4DXbnj8xagjwetkm4Jc2PGTfedtabzk2MsL4Fu6tmMwUaKLyU1SdQKjaGdfx48iFe8VoVDudvkMkEEZ3HATMhLMN",
  "key31": "3rLn3ay3Cj1PCf5hdZFbHcpovsX6w8cuTd7XiBz257QDyaNAJWaEBCrkZtNXgAaDShBBPts21KpSoUBpbCT2kK6x",
  "key32": "HPrCCBuRv5sRoxyrccAC3z8QcxYyTZKEbCQLHXkVoyzWtGkqoBX3gSj9uPGnCdL1anNctZa9UY18mqK8jEdYG9Z",
  "key33": "5QUuzQ6DZvJno2o5yzdWZkL1yu8FLDF2uKaVGjq3haqWCBaFFpRuMT59TJcoKHrg8kkgaHj4XhhWE4YsF2czm7gM",
  "key34": "kWkze9iEbvhaUcegDY9mFTEkmKtarhN4Wyi5ccQkYKCAghoRJoj4gHUUsm4BVyUjoxRre4fDtMZGioopb8YUCiL",
  "key35": "3zzGE5fFGgsx7PotuwVsnneXsRvWmKUocoKX8kpPbTodi82LB11PoeNAFDUoiEK4qYXwj4H9YRZVhfbRXruCzgMd",
  "key36": "3KJXZtz2FnNuCDU618GS7y3YuZZXcdiKH3XWpw27ifSbwx5tdc5HcAxkJjjzMDUYA8USCEHQNzwFWQJaynZjRiDG",
  "key37": "3oogP1w5AofFWtonxeBK4Lut8w9GH67dKMEU4LZJgxqvPUnS2RNzrXUhBoGw9ET83bawA9diWcTQXuSyLCqe2U9o",
  "key38": "2yjFqHM3VijdEipVuUky6aNumgSLMZDN5jkfehR6CoKPZGEYyZYPbSma6nBQpqKQACSyHN2CLXtKZVDqxYd8etWy",
  "key39": "3ZSHofvbTdkuvRLERfUPs6NhfwciPhNyJipZiCNySzJh1VTGxrt8gsBVrRze5Tsyr4pj4vdnZeYbiwnoeTZpf3Rz",
  "key40": "S8p18EpGijAWK7CwpjeWYHhRnPdhETTgyQ1iE7AyJoKeiHETJGM4doTsvVKwXGDGNwJPjvrk69JriS6621akdZo",
  "key41": "4zRfQwxUVh7VtZdFaaUicg4pPeswxvjFejaPfY4STSb3EQ43AXR3Uan72yiMhv1uQc7PoDQL21vsQTgxiTNpJUx7",
  "key42": "4KpX9rZAZiEDxoai5g8phpWa61BLaNczBC5CGdp8dzAXasSwAhka5WzmJNnE2EP939ATNAmkJuTcamE1XD1RxF8p",
  "key43": "41BgLXQndSxuz7yzmNucV1LU9r7dpLfyTohgYthi7ycKxvxCeRqx1bztQZ9ms2vE3EGYM968eEoyqphjjXWn9Tna",
  "key44": "4NGLDBmw9gEwwwEGj4iTTUj8F5SiuHE8SDoiYmzzbLUJPUMhAXvLMERzfz6QTga712YjX45bL4BSoqYq8aPXusrS",
  "key45": "nUpQuYJ5TRhg4Tda9hCeGph477u5StBzLx8Qw5jXtiPxTND2W6Gj32ADLugqFAdAsyK1a365GDY9GY7q3mmPXKA"
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
