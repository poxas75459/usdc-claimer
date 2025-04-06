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
    "452cc2g2AHR822nNKXMS1zPohCS6NCGVwVib4L2bVGFM4Las6goLAPGM62CpMbCMSGc4CcBuuMRrJALg95fSmV2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xmc2RUEqrABMR5gQUGi2N8ubnqGxTeVQ6LufyH1zw4pEkgyHSm3M7RQr4Fj9ZFE2PhqXJhFTx6sC7kS68UbuRp",
  "key1": "3bMk1sfgbBm1rSntshFCr7QP7gWMkKeapm1Gdw4xM1dwfMH3cc2ctNQGuk1WTr3mHzQhqJzdNFzswmQ8wiDALctT",
  "key2": "2FdkzGC4C3q8v1qUuwi4jyfEnhqGDHyD14UAtZFFQX78cYpTYrseuatzbEVqZ4vzDE6et32WBETpuvQV5ESDe5Bc",
  "key3": "3vLLWv1Rs6Q3DdjFcKCtKbSxZpTnvHfpyvvqG5dv4CEGbBNhvM596R6bi485kZftgThFaVGrmRUoY8QtjbRdYjZh",
  "key4": "4FxJy572QBSoqF41TerZCQJRERG2mYTPp5sKV1fgWrRVQUHG2LQDix58kbyzsns1pFC6wDGkh1RgKyUyUSnuey8f",
  "key5": "39dHUQAuf8ZRt8Vy9RJj99oxQjrDy9jTS8J5Un8cbr7qWDn9GhmwiG84p73XP7RPSdNn9QFP7seGHjmxc7HAMfUx",
  "key6": "3RfAt2G9WQE8ymVr2EiyMwnii8fF5v7ai2kFDsfSTEwPv1YHgTgRnk5qnsRuKKJqChZqT3w3sBaWxGULXQzbVn72",
  "key7": "3d5sA81fPAeTss1LcAMbNgHJcaVPL4HcqNjwJ2sXqq6teQbzuoBmSB9NNbZo5to8u2GfV4FQPc1tDL3i81Ywam2T",
  "key8": "q77hsiUeWwmcJtfpFvUMAtxcZuR7iNzMpNPcezEgjoPqJueSDwgpN83xEdUgWcdwWpaL2vTbyEsQ3E5rKQGAqHt",
  "key9": "bnxyGQiUxdFNxRv38zCKM99Kcwi1gCiJCFwczZLuVMDiJdJ1Hx8bumBTWz5L8pvAuXvgq6AMteUSRDjHwgRqNEn",
  "key10": "44VvabVDAvTa91EBZ3b2rtVgd1HeQbKdpwH2hJ6R1RCAre4wJ2UNAMaRThogo36QVPfnZLdcMVziPnC9GjdGi2hg",
  "key11": "2mRnqfKke8hyafwCDTf9423i6XFhv7BUPaxZRBuTYx35hf2D6Ai2jf3WBnvdLeykKtC2FgeZXfcJWy6sELS3dzQF",
  "key12": "28xpMuxSUtpeDiZ6kNZoBq5E9S45tBGZqEfEBRXgFrVS9vYxNvjmZPeUAXay4fsdKQGBELwizqx1po3xttsuk8zD",
  "key13": "24Ue3zSivfpff8QNyA3MFcEQBdFbAcZt8fKQ5ihvXiSnLnLhyntz5Ph13MNJQ3pErirB4ASWEZekM1GLAuCNm22P",
  "key14": "2jW4G1hxK8CPMbtfZLzkJZfVxQPa53vDBJR64S5eyBARnqUQiuQ4Bq6U68XdXvgiGe6wRYZg42MRw2choYT2ZvQg",
  "key15": "yfYY9Mr8CQwZgxLEGPa1umJMue7PVitq6Vwcy14ZLDLhJq7hWc2tp36Xayi5pLfWH5ASZv1F8tATG1SUD2SmSVi",
  "key16": "HbvtoLaPNpPFHZ6mibmKvHnwnmEgJohAM2uLUCwbHkSC9xGA6ahEbhjdRAhVfz8bKX1szWpov4jvmJKuxU73xYi",
  "key17": "44ByJ3jn2b6EXsdc2HXo94HReiZpUt2MJnMvJBhGsKf3EM5xVRJqZZ3R7hUu9doSZcu4drqpVNV1bwA7WKySCPSp",
  "key18": "4RCZSnCpqRruBfpXFtJg22JoXA3qHTAG5ZdqWpqkz8tfnBH6YJKpQqMi843fXUULyUgZUsqoK5WoqWPMhXhUL3Tj",
  "key19": "bCUsJPWZuhCiHDQTGYBkhkt6ovBipEpqXNFZy3ebxmwZFbRmUkm4ALrzZRfAHjaHxcxGTMeKJRST55L26XKLxbh",
  "key20": "FcfGuo31UfA1VcZHufxBQ4Tb44CPcJvrdRz4nqyde6PLURkdymWJM2L6V2he4EguqiEstzhzz4qjctVX83MBnvS",
  "key21": "2ngCsQWU2DMnX25CKEd5Nq6Fqu3Pk4VSHhLczpWT53qZVu39MGxtmM5haY8ADH3MtAnTABwzF3LDjD7foaZZogM3",
  "key22": "5xGk7GBRBR5ZHT6eL4Ah2tvUeGk6JFXcJUQp1gi9zHYUeW361YtzbJKBTUTroMaPdF7BoPtdDmXqE4aNP8rKQvRM",
  "key23": "3wcAe7TD8m9nFp4hs9EMCZ8QB5RtzQe7ehJn5GFfKNyZqPmn7gdQoZZesT5myAfzVivnwxbmdsfuW8abde3ELcmu",
  "key24": "4nYAbdKaArRhfaQXvz52ptEnsueYSJM1LMFLW3eiZkd36AD1ENFatALJdmN1gM49uj2FMSnpF3NrDbaTLiwPXNqo",
  "key25": "2F71F5D7wtwL3Y1ApptPKLaHLE4p8CNFBasyJbDqvq4hU9PV2st3Ft4vaEZsoU5i5aq9L9Jx4N8roXzvxDPwfvMq",
  "key26": "2Rc5BsQdJmeG66wJddyyvcpumyvUdcPdkvyHdVWSABd6EGkCVxxEcikh2qHLcUbm6GztRvj7fbLzkdukWkY6aBp5",
  "key27": "21Hwj3YHCmtc76AcmFwH5wgrBz5XLDQEzboXQG8ijZtAMQnVnJcFm1nZj3kgnfqk6iykKdoznPXE7cT5h4m4eCoA",
  "key28": "WCbeLDoHxqZGtAvDf14QkhSCcfihb8yfXMyAXzGRbcf1u4tY9jHVeXu6CoaL7uEgxffg3AJGGY5fqVJA9X5gDgP",
  "key29": "6md8oMmZHho3h691ZycQsgg4teKVs2TTwJ7rMKSPWZ3DgoRiWLav83XeewMNxMLX51iDJMAqW9Xz3MTnVwK8LfC",
  "key30": "3GQ7L6ZeTBeFFPJRsXdthkBeCxTwPqpmeL7BqzRww4gqFp1wLp8KKS14c99y7zP7pDtVaW3uaxfncs9R3rKSnPM2",
  "key31": "3GXqHhkKHrQTdomDCmbgGUtUDiqpjcx7QXevgJyCY32M3PPA85KocLKWbhCz2zEG5JbvsCyJBpzK8wuuL2CJNaf8",
  "key32": "2doyBx5gxvkHK9fKtJVGA62EntmrysrbYjELY2XvLpz7Em1KzsdLbNJ4L46JX3n8e51zUmUZUfzYzx12oH8fyhbE",
  "key33": "5qtZmZnUMLLYpPG2DZAuH57gpt1xomFsE4JHpeGRBKN4cfW9ubBFUJd2R5eQiMtzRHxj7CgEJyDwgGQvdTjJDU6e",
  "key34": "YTUzxsZDJh4LEPif1pWQFYqULLR3oTV5T1nzg4aXd86joosHzNkLbiG2KKSZJKirkzM2KqHVPgNZqkavrnsyqHs",
  "key35": "3QrbijVbGtonWWmwnKDNZ4UJ4mag8jvKNjZKvY3zy7PmydsRtfp6axhoyjjTYWgqg3a2UZZRpqZp1TMcDaQotLVr",
  "key36": "Kv2uABG2u7dZ2YsZJr5rkXmwkmomnX36C7tEdVwEHxzMck6HmWrzacsyXLm2PRGoBByBvyPf4HCha9dEDatskEt",
  "key37": "2tLXfJtL2CBXx1xdpN8rXVJnAS1VKpRiJtXQ5StLcPXttZvTBpZCHttd6aXuhPCyFTbYn7tUa8ZdcDnoYmuiz9J9",
  "key38": "5qskUQwvVWyYVagWVXeHs9vwsZjku7kmjFacv41LFdbNQvifn9taBezy1sE9H55k6c5xmYtMRmxfVXkn7yNh4rM8",
  "key39": "2FWAXz88LtUbg37Jb16JJNSoXfxPK8ftm5HtPXFm6pnnU8XCeaAq6sYsNfXNHyJjtryW6LjKPqT18WTWSmsS2KC6",
  "key40": "3WGJDkM63AmughRsWFSsU4xK8bJdfRMpowV7UT29twWMJX51DK4szBBFNu55C2PCTyzTGfgDAsnpjkZYRCmD4UHN",
  "key41": "5UXfZCsQZzjxE7fW36U18fua2ztKgPHdP8pPQqaTBo8wE5ak4fMgesZUGXpee9TZpHiXCgZZRMgQ4iNbokWF2KDC",
  "key42": "5CwdUAU8iR9N2EZHAuiCHGR14CU54DWa3vdpVjwDE5pDaHYtWMZUxFbXQUQpWeuYjZcqChg7FqWvnT2P9xLPWKMc",
  "key43": "3uAE2LPt6b2RArX1ePEbLdP5jm5LQCDRZaCtVH7DX7rkhqrkMe1F8s8GHzCpCvV3rZR6XxdQUWqbmpz7SXKyTsvw",
  "key44": "2NHXLNfGwoePUKzLDMu9yNt7LgXQaYiEuyATPm9qqTw4SrKzAYJFogPywiYEkNVASEX28tZrarmhJLsqd1y9sMnx",
  "key45": "2nfoiVZTKM3WmG7oGbm9AkN4H5dadCbnF2FuV8ZDDVhpUMyptQEhKNcXTxD8xb6FUdbgpDZkPSyNS6EmznRYkyqq",
  "key46": "62exTP3Uokn4AG6zXBoqrwjJCumq9vZwUpAeQNPYiSTBS2M6Ns4g5ucVb5ytVLq9vcyeR2Bj4Fo3HgBQYN1qza2E",
  "key47": "4R2sssRF1gZFKF1zhLyvkYU9rcFLpeDqQBaxpAi4SCW33KLPD5Po75TK3CANwuULvEvHVhEnjf9LiduWynhpaBfY",
  "key48": "3pkxkTkpFVqpVqapRznHFg3jLTfDAGEN888JjZpjL112DjdvXFon9VorHeiYGwjBU1GrLxkFWqgwnoNw7FJTTeED"
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
