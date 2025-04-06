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
    "eve7HkRoKYBVTxTR11nTcPzYAjsLLDcEqqb9uHffik14mx1gQN17Qhm7pHjVNvU3muoLf4XA1mgcgS5vPNrQkgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47u4FG44rYdCTWsU1znvM9katnHGJ83bZfhjXAMRh83Td6BqkfNZ5W6SseCGi3VobfJ2heqoQgQWbLTeUnLKr3So",
  "key1": "63bSwZesmLBzhwSVGt5e3CMRFXStx156urgzGkCrC5H1WuaraFYD2YU5JYJ9XxBULXHSBKL79feagMazY6ZChHVp",
  "key2": "ohWYnQc2fhxRPUNMnRGJDrEz1vefmuuBWL2t6q1r7nAUs8bNTkdfUEAcaEPH2rUcWsTmRqdKdoLK9JVcVic7Qrw",
  "key3": "5Z9pYHHmG6xUSiZhhBCCEmpFdqtMVx9AV8tY7VybvEqWXj4o99rZmEBwswzcbRKEJsqSe8DfCg7piDSBW6f3oEE6",
  "key4": "EHPszK8a5HbZ6G4LWKTL7yHwvACDzBmi3GcvYihPcKRX8S63b75diEn4CxshyivPmgW2M5cBEV4HkawrJYJRMgx",
  "key5": "2fd5a2uXQ1VjGjW5d74hSpEKARCuLguSZUmxDWms67csc9ZtUBRuEMdSWkziKCygahzcA3xziZG2pUrfsNToUS7M",
  "key6": "5TjuS3xABBU2Fj2QYbumr6LX8LmkRWKG9xRVChb2w1ZcNzyhfjMbQrKHQXf6gMzHNdQdYau5bwxaMaC1ew1Dayzz",
  "key7": "2CbH6upw6Zm177seTW5oeD2eRUsVT82gZsrgBafdHPmt96GkRfW1dmP9zbvJpUSaqtQDoN2Yy9j2X66HqpioTtCN",
  "key8": "33kkxP7eEdQ7TUt2YMAtrRuAH162ZgfuwrAdCU8rdMdrgvAiMLxP4FnhFqjFhxwztrk6ErahbjmrygBG2Pa2oYk3",
  "key9": "2SBGUJkmDrybDWR3nNJZE4zEzQzkjgFUctrDf6xChpGseA93hgtKGy2RTF5bwnA3dE9dcre1beUz96WtZ9hhWrG9",
  "key10": "3EhT4AmAUXbuHzveWwvhAsFHRx65BAB6MsRADSBSNrpwfibo1Dzm6KjdrH7Xb4GA4Rt3C2mCWaagzsr6beY3BXCn",
  "key11": "wRw72dXNkvXvW9JzubLgT6unsmcGCcbebb7G2skbc9z6veWv4rhKb6vGeJYeWCeynihKrNecfxFZGZCpMh2zr7U",
  "key12": "f6QEkfxMddJT4eFbMiXKNFABADY2YLk5LXn3uaF2sa1SZk6ruDhPFWURZ8xRCg65SVHjaVyJYGyVXvXZqByuLqw",
  "key13": "4DdUZ9J9S5mMAB6GXXtFCWDEHUNNm6JyjwDxLfQwYKWz9Dc6QWao2nqtsTaMM9KSYNCPoBPUJZ8ZK7KsxKYQYKCx",
  "key14": "2qBMaR2ktscVqmPtyvoQkU5nBzBwhADoTfoyXUe2eC1V87gUbav5tSoKJD8VFxNL8BVyK9Xm2h4h9ZZx6LLJWizw",
  "key15": "61U9JzK9o7WF8knDm6NJTqByAZrLXjshdJNhf24SUbQvn5TviiENxDRoVCZQswrmPaHAbP61XW2Pb1RRdiJfrQe5",
  "key16": "5XhXdr2UGoC8siyAgNbA8EeoLLZtNdp7hQGK8nwiCFAa3vAwz848eBoQP1En2w6U8VmMQyDcRrJEgDG5ShnnHKKX",
  "key17": "4y8urhhLSpELkLWSgnLjFKn2bHaPskgNWchS7mHYswB3tAf9MUVqdszx14rJCB4r4iTCRbR1GJhVQLVTpPmRBWYB",
  "key18": "5NS145x2PfDmTh4no8MpQkiyR7Yq7fAjbwWKRgfgoGsQNt2xjzpGjXu5LkL8NXcW84eWm8Xhu7UBghfQha7Qwca",
  "key19": "5ijhHdMnRhavhwjybYh3hDb9AiVchrDxKY6GLMG879moEZe8PfQCecPb4fQpQKgw2AzWFk7UrAjrUK9UpeGSwyC9",
  "key20": "2u57Eim1zYiHBhLXeueeWz2Bf7rXx6cqf7MGBAF2oUjbfovKN6ct1re1xU9pXFHNJznuS3bNhqHAmeos4uGkihk7",
  "key21": "8toCN79jiXfWHduUXik6wKJAikSXGqDiPp3gfzD2hhxVtcuUsWyyMv5W44tBKFJys1gHw1AeEG5MKe5a1ZCTVNA",
  "key22": "4vSP1oS61fw9St4FGM8RkA8xrowCRi9QtdQDMfJmkVnEb1JVCHRy6MyHaLSP9gqi4ERMAhGqWASfJz4fbGamideY",
  "key23": "5t7n5dF8WyiSRzKnHmKCtdFevWKufJMPxXFS9kuXaetm9YsZarMPch2hB4mV3Cp833XkQkY3UgnZ7NfXFhsKQWQv",
  "key24": "665CJXXhoVXwWWUHvazxoZi8QKwp4c4inuon5MfFfGe4YDqfL8N1hmB7V1oZA1sePf33pgaPmEhKAEgoSH4XsFiE",
  "key25": "2bX8F7q6TCMqZ9uTywa5y3aCVCW2RqfTEoviCaEPU9FPfzkpwV6N8aoXDYmj8oQq2QiHRfLsXhwJWiDu65Roi43w",
  "key26": "5719uRdCYMQVXZmAcdF4taKDwPib36hacDUspzynkEA52Zz8F73KhohC4uzE35EX3ctTNy8RaPGLxpmyxxvCCZhz",
  "key27": "nMtaJTipX7zdVTC5N7S9KyJPcMuVkQ6YG5Pq4HXjjGxCDrEabEnet8H5CB1kHfzx3fxugyQhsGs8HAd9Vsvgcop",
  "key28": "2pkM4bDiQhB9tDdhNgic8YmkQHBpZTenvWRRt9RhztbA9m2DBtSpvW63DbPwqs4eiSzSRHuSK4FqoWEcti4My3PY",
  "key29": "4fDmXck1QP1RHStgrkZsSjs1TH1DrN4NemgV8Ccts6BrXPCGhGuNgYxPjYjsnmdr58EZqUeQkHuQ8JWftJzTRSNm",
  "key30": "UVGp3XDmZ8iVo38VYapmLdpb4mdkkoYvL13okeJEKG4Lgnvwbgipuw7PowMtGX6q5FBwfeaHuyJTWC5N7Q4RcBa",
  "key31": "2vNcT48bFvsgNpqNwZ4dkcLk895QEGH4wAudhw5UynCoz4FVmiy9S8zW6hxbcB8VWTwkrx2HQLH94jrhGoBeeXHY",
  "key32": "3THy9wxoHr3PS3FzveGgkgVujuMhv3kJ6vWAKEM6yvFXbCsHbSo4HNFy8RK98XgcaP7weVZGUu2kGQhJtJeQWM2i",
  "key33": "2e6K85Hr6GEKDXEBbbNRk1QEXUTpsmBKkswkricWs48r9nwUqT4fCVEoYF34shmjoD6Gz5qkUJZoXjBJefsngMDa",
  "key34": "vcXbztGDMCZL6pSALMPx8uzGtvABPKt8naPQarzC9pNgZ8BJmcVVdtnrisYTLg5dxsVCiiuibbFnt7bYtiDaLzz",
  "key35": "5aCeHopHdYRNCd5MU4uTgFinmjJVjXffTm5E1LdjDQHFqXZyiDrCtXdVb97MfARN9kvRqnLmh3vwEoGHHNg1YjSV",
  "key36": "3iC8xU3DeKfCpoMpW89vFpxjDnenwimACXWRCftcFp6LfEahqT2UNdfGNXUd2K6ZkttZQdAgryEVAxmMsHjxbexn",
  "key37": "2hNKxjqPRe3B9Qvvthnj8swVMZEJyUbQSdGCsFSVK6abGkC8kcxnLv99Ahz6h8CqJqanXiTiJE6MX7Nm3WcAmoHY",
  "key38": "5Y2kY2ADmYd2z2FY1UwbfTdsVZKP8KoULnVKX26PWDfF5b7uonH11sEFw5AF7oxrjYWauPN3e5wueVv82wFoNinF",
  "key39": "Y4HQ9NdHHP1Zf9RxoysDrJFvLVx26jAC2154btqFwBcKQ3jBnB4xTcg4CUZDNL7ZBqkZpw4fUchrgTuwnFDCNJJ",
  "key40": "24yxyGwcU1iNULAhusSDTVQjCan2M7ZUvomrCa2oh3d5FN96ZM6TbqaEimhhztusweYUMyJYGizQWvsrFGjYALVw",
  "key41": "5uW13ULWUgrpLmWzpoythfZDYvNePGwx9SCgEuKAuxT7xN1oxQaMStrBBsRehrNQANQDdzUSDYT6Z7CtRK1j6JxP",
  "key42": "5pBUXWXfS5mFtWP9K4n6zosLDR5yt4EnPskv1ka11PvJwb2PXLipGm1ikqWcXQ5jdsy1UTtGyMd4bLjQQc8MoKNh",
  "key43": "2cjSVoBoH25Xn2i4ATbW95RKCiJ6qSQz988CeDig33wy5i8fCFWDp67usmnC53Hk7Enweij1NxzbS2UUUQC4Xa17",
  "key44": "9rUAPSNEUenY3qVqGmUF3zVM4oBCam6wPrcUJ42gGiKw3beywzTAetbxjsaSz75ABDDzocmrt7J7o4nVVhVX7h9",
  "key45": "627g5JByZS597VPDrmSsxhHGhy8qJ25dgE7HhnZDN9bnmPsgtHd3f186TNE7t4G1R6nRg3rPfkzou2Gs3JchALx1",
  "key46": "5endrR2Zj7rRUijpN6FLzHW8XdQGQpHg22tRvnUvDsKX9rbEKqtXqWEGaLipDS4qRGEzApxayr37y6cMYAJTDcp7",
  "key47": "4ctc1v3hxEQ64NZGaBR3SJrButpfStMgGzkZK5DkUrmfybL1Sq6VozhJAviiJkRkRLt334V7GdhsP9nWqfBcnS7U"
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
