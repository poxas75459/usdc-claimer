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
    "q9ivbuFtF4XC9fCoh5mt2UppLfGbBUx3aUNoFEx3hkeqF23rQNkM4R56N7rTdTSVLVB4jKcizf8NLor8uSrafVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enCTvy359e9AW7M3iSsbxEMujn48saSYT8JeKbthr1ypBTecj8H7gvnvrvEbySCgQkgrH7VyFyY4Eo91ccNDV9",
  "key1": "3zCFL4iQV8dHuH8TEesxWjZ4ce4RnLHgz9mWzLRCtnW1D2RdYxEuK2rjjqkSP6w8YaMQ2n8GNenFieaUz53ijeto",
  "key2": "DRTPeBUeuyNhNzB1VJkGrzQW2fvkS3CXL9PoaVjbmKG57GZ5wSxGeQ5S6tzTY8f9jPU6meRPzmfs2DVB97S9URw",
  "key3": "35Z2cL8VkAVZv5weyzQhstTDS8AUveyL3ssJCp2VScYy95GsSZyyFnD8E8oeAx9hptAbj8RrTveMRfPQtm1r5SHE",
  "key4": "48JDg25u5gSpY3XSj8K74C7LYp3CwYBk6mBotGYXGU8UnuFYNCzhfxTgZwf9wAPuSG6yxQ1ZaLMPpi8WEGGE867D",
  "key5": "5srcEkP2mUMiEF1TFcSxnwae2Jb1Mf4MuPPytGq73ym96dkEAxsFJRpCmnB3dP3aRQZST1TszDmvGCRAvf4ongRj",
  "key6": "ENDDjQnqirw5b1Q4csqSN7m3ryX8QAXi9qQ9KPd4SJTimYHv9fuybX8Xrw2HGSjBCmQfHomMKFEMWqJifh2Tp1H",
  "key7": "9Rc6csspfJfFnshcW5reSwbDPYBY8oCjnGMuGcGKdsiRETEqutherzrztXsFCb2h3eidLroV4Pcc6Wdg6oy22u9",
  "key8": "2YoJnpcCzrGTH2xrM17LF7jCQB5e9Z5Sw6X8n5juCWZ8ut1NQTi6f8xcQRjhab6WpdtYDZkxgnRS6xycG6dZWQCj",
  "key9": "2F2mmYJja8KFrWqNK7qaKcXDD5paZmZUFcaywMmcUkGvkPoFpaayn26Zza5ib9se67EzQk7QA2ZXHSGfwph9vkB4",
  "key10": "3K6nAqyaGZA2KxayRmhbWrM5cfGYfxckcdb5Sykwxw6iGJUjg1Ni5NFoi7HSJTU6ci2NcJwP3qJHArQfmijx83Mu",
  "key11": "61ur8HzVECr3r8qMvS1o9kJFsgyWgF1hAXTdZUtGHCKZ15pJ7fa4dAuDvBuj6ywXi9aKFToYq8NrM37XJzHuPUBt",
  "key12": "2FzvhUvL8pM4SWQuwGYvhWRZHjmMqEeDCDGsNEnq1KEADGpzfm63VSCooQCxABq2KfSVXLxphk6QjZfPApRHVZaE",
  "key13": "46WU5MJMAgx2pPkvuDeA4zt13nKiBS9csKsRiFCeoi2F659xUPwgdcozLMP3JwbeMsfvvBEojW9mU5B3LKd7xYe1",
  "key14": "5dzX9nFn516Nx3EAVyWegjuKFm8Y4eoN8ucbcQAmYLTzCid2kAKRxSsZQen6WRp7mSTjDEdSuPnfudGVVKDHMQnQ",
  "key15": "3RnUTMhqej2e2DUGcnnsaqYD9qgjf5nLe1N2mwdt848JHcGvVUJCWQPt6ehQqBHKub28DqHLUp81EGx3EVgLPWaH",
  "key16": "3ER4i6ikPrU5LPjGF1SSSPQkzsjHVpF494abGUWNmUNAEKdUxn2uGmime1wnMer2MoW87VrK6fYHXUVQMme9AiE9",
  "key17": "28dJeWeYGK9nK9LedX262mL7KrxUBLpBS9uqMoeSruV2RvhXVamo2pCnhMZyyT3YpUBBp4VKuAXmFXCsH32VtmT4",
  "key18": "236dsPaC8kCWBaua3omUCWKxdHWyuVQBtNBYmh1LxYiAtsoEyiFwuF5GnKd6H8QigHbRskbcZE6t2esDDj917mx4",
  "key19": "2BTJfjK83pmAHvaWifpGd4tBVdGPjegWJnYFrty8Z1piVwzuQ84NcLRrH2iz9PpDisbHWRsvDcFdBQjDEHYp8ZVt",
  "key20": "5aKzdfxLRYYnXVSZLmWtUyinnssDyDfNZiCq8dd2GHm5WLprQ4Xz82S2FjkyYtV9QV1qoG5u2RzShGEQ2JqSGq3T",
  "key21": "4tZ6bG2nPo3GrTBcL6aSZ7aeJBPQMznaiYdjHnrNcmEV52b7jfMJ2qeZeAp73icCPJ4UKPud2M5Y7NAGyS3hussS",
  "key22": "4iSNcWV8hFQRKYwATbYpMvabcvzm319hn8Ff5ULqCSaTxsfMTxVTcKjBqtkbRVGLw4NxTy6fFH54B9m9nxVnnnDB",
  "key23": "5eNrMy8qxmZrkXHBGpG1LNTrLx4LaWPeUbEekDstvpgHgaPWtExjFitL9sZXdqnHrEm7xFxC743cXkJsmveEB8gq",
  "key24": "3NHZYE26MUPDUy33frnn8P75XRKEMVsHQMkfx7CY8HYj6JNviY6BSbAWHLepZLjWX6Zh3yvxphwWPFpGKzqps318",
  "key25": "5L67zxoUYd6fKCYYHw9L8m8mrQpj9Hk9nkN9hYj6dYz4uUyoEppPjNhLkjCrbhucjn3kJuZCCTdZ1QZS3qXdQCAK",
  "key26": "3eAEi2Ncu7jThFdCAwBEwPGbqrgrNJsk1VmuhMm1Eh93gWRsfjg4ycMw2qMgwY5uLJBBTygwuC6VcmtVZSrpLLww",
  "key27": "5qhyqgbxpoHNmisHARSbDo2abtobkpbRCHUZLv1hvJijUSnWarr1p9EakLEy2oH2iyQpPWmyfwsmEiqYrzNDCVHA",
  "key28": "3UUojx3S7igw6DjASp7xdrAyScAuyaFpUht5Sciv5uxt9H9NxtALsfV7ErcfeMjwHrPtNGEVerU72srMA69ARTSj",
  "key29": "21ZjEAPATwQhsRspNCVteTUH4aHzFX8Cqat5uvMaawbgEVPVSC2yDukzL4rFfjPiJdLYSyLtLDcz59WDQ9jVqFZQ",
  "key30": "5BpmsUV6is9D2G5wa5yWp3iETV2QgwyVYdBcSv2t1RdVJv49G7Drs1rjP6RgjU1XTtA3ALJtBhnzB3HMWb7ebKch",
  "key31": "3w2Mb3JDkdMfRQzjfPREBExtwSj9mWRY8bu8qM4RAAUnxQ8gurH7z68GQ2oxVpxNZebPYcYCeNqGASfWe9ykFsqC",
  "key32": "4fL9HeMoePH2pCaEVqQbLaJM9HGu7FD7xNhGsFUc9BiKFHvWY6PVnrnauogFEkwGL6NwRToRnegoyZZLb8wDj33p",
  "key33": "jg8AEVhhM82PQebo7oSz3JCt3pBgBe2S32rMPitT3KM5QHG6VkU3fQ79wHz5fBaGGRJe943kSsXBjZUAifuBmA2",
  "key34": "3tLaLioCTRUTdF62YLp4obKuucu8hdfdRVrdTwWAvUnhhSPPgfdmvCW9FitzUw1gEZXmkZounCKU2NmSJy5F22dV",
  "key35": "3sqpdxunsFUpMP92SXXvWHmxkAEXH7kWf7gmPn7HVd3pzTpLT2zSCZ7uvbWZitFBLLH49kEZZ2oPruefLYxhMGCh",
  "key36": "2deGDDY71HyWm88mS77zz2Nt5L5T6nASV8LQSoZoePNP4Fj1ZQqFVP7cf3LPD2BbYe4TPDWuAEeM9NVyhkmK5BZ",
  "key37": "nri4N2mScU7jCxWQPuKirFFj8zFUcj4DkTZmfWAKc86eQeNiJPGhK3aR73fnWjvjZUhN7WSSYEDzqt1mPZXV5DE",
  "key38": "i3B5ND6mFVR9a6bFCmK5WN8nJ4s72HA3ZjsQxEtfsXGWEKYV7g2MkgRwF7cG6NvRSdCGBh18CtQMQS2Wd9r9dXS",
  "key39": "oxkMWL8DRBnQ1vn5vhubK6tkuLbcYhVnN6YUGuvUoioTj1L9Dporx2NrveAKxcpqGYZvxdhvLW5815ouaiGyAWL",
  "key40": "61FEeQxeuVnq6RrCChGsDavthNwmCdgishZJxEaFS2KAMi3q8sWG25NKdroV7yxZM3R1RYMsVhkNGmqbQiuGcvDw",
  "key41": "3BGTomHN1NWJdk4mALMcp17SRZqfuG85cTgdcnd6smjmgsZJtadQXExDsMXwE4ZyrpCpAYK1QZAf51MimbTtK1ui",
  "key42": "3ZCbBQJbTyXtqAzsZGbLnYnWTjHKgm7XZ6U2eKhijmKZb5aFpCGZFwyzztCozcfF6C2gw4SUy1XADWsELK8H5HXf",
  "key43": "5znedZBmwSt3LdsA8y8oiBKgTVYRRZNk1W72p9G2vnFQZE4QvUTZdRWZXuqZ7es8mUMbYgt6BNGGLoejDNSRZ3B4",
  "key44": "c28fdVB2oVhzg4Qj9H2SxhzoxoByBLmgvf4CMcZiCfDckWRMi2zkvVJKDNiyFXuarhboEg7mgpuvzWEq7TBQnTM",
  "key45": "3khqabAV89fbQe6octTxVrJaTdn4Z3SLyoNzsQo5t8Beiek99BzKosdYnCxagUKWj1AhxvVNCsZzZpKiMpcyq7DQ",
  "key46": "2ANNfvWEHFHoCGZzYbH9Ljj7BZLspau6jrtbfDQ2oAaZo9dRHcKuFCtWa6EnamBMjTuFuoJY2BfjFkNdYFp9PqjV",
  "key47": "3p5rh9zifPKSFJpyhCyMaZmQiebXFLF4yjagkcWJtCQ3fukQtnda2zoqf3C4AnJ2JHCi4PbGfok7QBB4195mtiaJ",
  "key48": "3BAcyohiXScTDcVRBQ2R34eEk7xWdssgcrEJ6VQNqJkyt4YGU7idCvf4YybrmkGDd8dKbWgFPSpYPcfwSt76ws8H",
  "key49": "3D8VWEGoUJYYudCS9TLK2z732b2pfXaPv29zEJkga2VLUqBNEktkPerrYnFXDpXLiNXetzvYYLsM5dncSUn71bGL"
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
