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
    "34qR63qnXSJZgWwtoQe4KubmadJKLqfq98SRbpDffJ1DS7PxCTennsZXD5kDi4uYmEVSjvyq64EM1Ynx7s6qUpXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LmqdPexqBm4134uEg9AhMnXQT23Pdu4fix2vmucXDEk5vDXEJYnJQGdS4d12bFp5RfvdVQskJzeeBDzQRGWEvzL",
  "key1": "4h7oNoLgMQ1j2rQ3w8hPjJV6nPfFhzuntM4h8UfZf1UKQLbGnqXo2eav5ptaDDJSi7Mhu2dDr8vWojNDxPFnWgdL",
  "key2": "j8WgwGqJdfoUgeW3NRBwiU7tQqRbgivJ7yan5gmovUufkfQipctfTUJrsaXnkurG7ZX3gDbgi3z1GJ2Lc5W2g7f",
  "key3": "34n4GnWTYoeXFio862VivyKo93wjVrNVwP7NeQX7wLbo1SNawwtGZitMVZk26UFmCVMcE8T3YcaKQcoJzrqzRbz4",
  "key4": "49F5D33euW6yjC4DDZeRsDqwhpoJ8bhqtSFHPnrbTNEq1UVZDFwRQxtarXmu6F2yzFGgcnRsveY4YoJhoAbGr27B",
  "key5": "41PJfWWNnHT5HuExwdY5QstH4rsmL8aDUpo3svoG3EW9FpM8kUT1JoqMPaE5Z8uMbju8n3K3PEM8ENk8d2UZU8Eu",
  "key6": "4KnE3VFhwUVMHbYFKyvxGEc5yeofMs3BJHoWmfmr1wCaqKQ3yR1wkHA9BKYxe4N97dGmxgGZY3MWeHxQcstt5Cex",
  "key7": "J1MXWgn3m8v2t6KZVrnFhHDWPHscvzreDV8KE2qTrb3SUss3Pw6Zy3RWubfqemmqctkhL4MKPDW7PpPNpzfxNBc",
  "key8": "5NV615LLgaqaghArRFjg85PGz1tzLiwJCYdcygvJcx3vPJVtLLeqg7wjxyYMoWrp6A1QArbG3T6bRvwf7UijoMdK",
  "key9": "4mbbwsPMy2jSYUqTJ9HQd4JfrvUguWxADHj4i8U6Hja6xefDf8JNkG5krx9yKFc1U5rVKp798qfRuGubNwYFVhJE",
  "key10": "2zc9Z8YSyADAMTBnEpX339dpcXJ8oUA2UVGZd53KP4LdnxjmF1KwVBEErnC7zQSaMmFh2hsyXrrxpdVmi6imFfJM",
  "key11": "3MyyZ6hvBmRxL3MgDNAbDUY1sChNAqvagPZWKrS9Lu8TcHBdk3ZWBXq4rNm3FDjxG2SFf4LpYjvqNHSqJqnpsCef",
  "key12": "3xsRgoVeRNVKotMuqJy3BrDcMuNE142fFaEBUCanTtao82wAjnCKfueJ1nngdGGkEme6MpRwPcscrQAy6qzGmuNa",
  "key13": "34WFBVN1iHcje8vxJfoFhzJDsi3jwstZFSfpRR9d5LdDJsrHFWUeapX7EGeoar7CD1QcjbJRvNzedioeRMwywFAC",
  "key14": "4KueL253X7rdnXeqFdRn52eQw5GyYW8UW3qiaeqAHqaFeyFasXC9RhGpb5yX9phVo2SrWv8YSb6821gguLmwRRoN",
  "key15": "2pBZwAiW5iKnB7TvoAEwUtgnaHhbYyg7hsJGKPs5pssGJ4QebhWb5XXBGsXU5vzaAUpoMujKEM87cJ4UGcBqzxyD",
  "key16": "2XsCUhUfQULZng7hmRZowPPCrYehf3znBpidtmK3jwjSMNHZTg9xaVVKojXQGe4aozj3kqkigmrT6v84M2kynmiZ",
  "key17": "SW8NkofBTrfiPETjmuZeWggoufvzqt2dNKJTpF7zGGb7e8Agn5aLd6DGK65iLDik5weJYJ3aK3MomZQv8rKih7w",
  "key18": "32yTp4ZJ1TCLByxX9dUAMc5m8irFcYHkSCX1fQGSRGnBLwNk73UeMawQMRDRLSR3JhNDb1Kf1fWLNH1DyvwreXyo",
  "key19": "4gpRFxopV7uX8i33LqRYD1YbW4iWsKbT5SEtHDuMsioLj5kbY23P6mp2i1qWTrDWDMCbhRrx8jWVxkPV8nGQkchM",
  "key20": "3EeN1foUdrnM1QooV9R5svrE2LCeM2X1QuccVYe5QAAP67Co5m8eByPvidXRrsLnZLu9aDojJ4p7dPMdusAvwgHi",
  "key21": "2BfMdwtZHKHfAhG6xf1EdQxp5uahKiUHpU2PMCxs29qKJrSHPq3NMWbhoraiVPvnncV66pQk8jb22z6EihJayD2",
  "key22": "3eigYmYPWdYyTWZBffwDsySxwamsMDaozxiLfXUqidyyzbMuk1ZS1she4dcLGC2GQpSdhru6RHPCB7Pi5rYdNviN",
  "key23": "4hACbakENqEEneBu47AFgcfSJbR2FeeSGu8iwUMYw14g7ft1Mn5DyJk8bwpTy3JGMWS64j4qiJoQhiCxSsLoECYh",
  "key24": "2yo99Gnn5m1GcGXTRBLpiGqiVKxxt5i9kowo6AKgVPu94MoyV5XmfBcEb8Eviw3PKg9Wb6cNGgBEoDsVYrHF41dY",
  "key25": "5cDSA9pXZndQ6J7vAYaAHaKkcEWt1zmN4bVCe5zMvg5v6RFKeX8pv96J4WR8RcGnF1c9AtSNNPtVmcvStUfcAsTj",
  "key26": "3BZkr7jyLFd4fSnJoRqozdi4Kdd8NgvnLTGXqYb3zsasjvLpvwxoSNsiS78Gf36HX6WhssQsE8nF6Ue7DfLQtHHW",
  "key27": "7gmRRzGGNFTb4zgKsqU7owR3m89Bju3ctRGUJXLXTc75L3xx3G6MkfTzKAxb6a5CFHLcjMvjWbqMcnARHVcu1Uo",
  "key28": "22qsUkuFz3AN7D9m1nRbYnb8bdHACrx9xaMZyX6Cw4QykpD2YiLDWZJmhv3HDsdDVqaSGqymdvS7ubdWkvJGSgDX",
  "key29": "3v6ngknvRE53B7EjyfbYw8YHwwAomRQDF1Y2zbLcDVSf6aq3T6Ch1zZAYu2J3ijqEv6LMfcZiQzMZF3C3UF8ZBNj",
  "key30": "re9SiLdyJYs3VvmPeqRGzd1bhP5ypoYqDcG22UyvMuouemMSKDtePwPgLKoA5mkSr7HtRMRRUKFNvWy1Gc4RiXT",
  "key31": "34c9k71LRbEP1CHKF1bDzN6oFSEtY85i1yDK8TbFBj374GBfNfSrTLT3dStR45YxMzYWnRJ7cfHEmnXMMeKdagu6",
  "key32": "SrXbTNCUzf78taLQvsZPPPUh3bXWwToCWrbw6HftfnxAJ7LZeJGdaHT6Zc1XoEUX3C4SgREXCB7Wz2ArZg2gnc9",
  "key33": "2pxqY5P4Yq6TTa8GXjK7pLuuz81EiY9QKW7wNMcq7dRWB3J9ogkAVnUX3kKYNtcBUhuRm7CNeNdfZHu6c37ETrwY",
  "key34": "3VXSvafNiMoKNmXT3V39imiNiH3enyWnawvpww3URiDS67vTXjA2KqhTaNNkxvKZsbnprT4WgsLfHEnZnCWxL3tz",
  "key35": "YBVd9RvJFqN69kDTEivABicTbSHhDvMGajtPM1NeZiDkyDiMcvSbur5bBV4nRJ3sJsP6gohLB1ymMQ1PVFHPpmf",
  "key36": "NuaJP7CitZv1FNWktx1KJdxEHeMqvUgUEXDMnmZmDrhp4FMDPJsCEN79SBqZ1jqtC9x92JAPKQXqQUCc3cxTo2Q",
  "key37": "5xVHqVj9M4u1nw3wEL5pTAx5s5sFPskwu7PCF1TP4L1dkNjs6gEU5VDb8QroHg4vbxLTkS8Fs12dPW578QwsdQte",
  "key38": "ewfJ4PQUsSKm5TqAFAbg5VJVhqzWVMgaENTWheVAeUs7bmwq8hjYdvP77LYBZCMhyBB2AGL3ZMZSHXHqCoQ64az",
  "key39": "SkficPVeDT8mo4vW7nxXnwjxZHBwHXzCqXGifG3vP6ozHqcfiSDRFgLN9QA3qkCiR25XHCcQZZ3FycNffPEBVzN",
  "key40": "24s1gVLLVA2D93bB8yxPa8EZ8zjz7ZW9mmEUotMHB5tKogcGbYRm6deYDF2ZYDkdwpXTBQMPZdoiGU4PWJsxXQ6V",
  "key41": "619ezzM5Ndv1DvHu1Be2Dncjieu9jtNXB55pBbFmMJEic1VrRuBznhSBKs2vxvFMF8sNKoBAMf8qiviY45iP9Su9",
  "key42": "2923xrb9UT1K56jvM3EDXjH7Gu9dVEzuNNSGocA9qFUgpuz7tpaey6mEyw6yww98A2kvMj5FAGKTuKaUvsdsUqJ2",
  "key43": "3XTCVfkhmDmAMuJKoReemQ7Tshp416p2yXRvJ3LkcpvqK7aJWCFNGJPjvwebVvPmxvUpQc2fow7dKwis5vnLJAmB"
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
