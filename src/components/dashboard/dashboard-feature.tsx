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
    "3FJ6T6UnYAzejYA23fJmbt6y45DSzGMs7FZiQ1gvmR5VjQqKxdGVVLbdjbbi5H8prhF2zmjYMdHya52d1uLcBYhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NihEs4hiunoNxQVzEcTwj6v7CG3KWSc8KqohGzWirCmWKwgpnCgShx88QGHrsVDsbjZQNqnSKt8jSfSR2vaJKFL",
  "key1": "4AFWA3ZXqwA13Q7gZ7wkK3LRjoqxREsj1TR9ofWCXmsR1Ajxj7CaTiR2888bjNaRpFPViTGYBCTeNXyaCBXXaa9S",
  "key2": "xw28rpmzg5rJur4RsVYqgQCMBr2EKU9ubJBrKsFC8UGCNd3wKR18etL4bmXwKeLZuZVtRRcJnc4ZbspXpEzy5yQ",
  "key3": "5AVJCNH9XXFvcL94GoqDUr8DSGKmqQMWJzm7ndLmskKowweYyQJ8nez3ERNSC6Eu5jr52j9H1x6fCAsUwvUMKTmo",
  "key4": "5G9SJuNCvUeX9z2fA1uh48pUVre4y5Sg8pFMoS41dCGwXMY3QQifQZ4yjwZ7oqorU5ZhP1om53aBofzAXLigkmHK",
  "key5": "2FrEC2ATV6R5E6JMKztzkWX8meEVjoKru9ffk9XpPPLbCW3Mz7cWNxcyNwfurUpYF2ZCUUkFdz3fK4Buz9RGmmR5",
  "key6": "2FATMKRJcFntpJj2qBZ4Wpch2Q4rrNwiHWsHvuggAWYCvFU7GGGGsVNnVNBQvXLfmmyi2ouvGQ6MZN8Tr7tPut9N",
  "key7": "5xnMZiLdhGfo1ZBYJr79AqLozqAqEhQ4AzEmrbTfq7UXxkYhMpfe3FM9CyFSftxXu2pGscCMAypHxogHN9N4qRDW",
  "key8": "3aABesME4HqJsgFk6sayJYmnJyHivAn1GUqKrS8TsMwrYgkEEJJZCaJhmwCkZvpwfQZYEGKGPiMrL9punEJZbwKM",
  "key9": "8rt5hyFsSSRmkF3eASkJm7qYUEtFrTvZHuMj63ur6Kbwd92x2dLxJD6HcPbYhchiZY58E3q5rEe4iRF3wkvt5Eg",
  "key10": "5Ew2QvhuvfUyqa4eUQQRHapY8J8vjy31tE2boMsJsfTgkLDPtcv17ZYTxP6nZEsUy2DhQsMQe5aAJmxvd9npS23G",
  "key11": "hBo3a5FKpBiMfZfSrXcgLiXwT7ayZX9uvbdVjm8kTNXQ7GQT2WkV66GRkAecENA8vr8uzV2J1efmGye8QaGn85S",
  "key12": "2r2oTZapBnesw1bHEjF5UXFoqU7bDnAc99FAEiDtcJYxMLEMZLJFzzviZbcMtszubkV8DSDsy25ZpLztmBfMc9wh",
  "key13": "2UZh4z63eAowQL9RQE5qRkmoZt4Hi2nVTCcpEyNKZx3rpP1TijGyCzFT5r1X7XAnhMzTdXkY8Z2Q5pCq4uddebj3",
  "key14": "VxutSjnC49n1oyHmqQYwRsRZDxPXdHXqrcygrPXanFzqTzJPP6QMcy5YAs79Asb43RpFq6jDFH3hUvXMZAxhmcM",
  "key15": "2EdXZfPD181JUy9oZhAKJNLf8tcfKTgr1qSKJy9X5kUQ4c8CksGBokVggN6wR78VBM1QCKn73fsC4cRKBb1ZVsz",
  "key16": "2htN6pk2C8nxckHqS8djJ7fRjNkvTEHbb7sjUHEwNU9fJSSumuHeL9axXws2tQesWaoHDoYp21Kg2mCHxYuMocvp",
  "key17": "5ZDBC84vkKQNy1Vs9Dje8a95bS74UHghtiusXTQxLY14UZzcwsGL4oT125aMSMwCyeXbZMsGi68jLU1LyYRaevBq",
  "key18": "4KAn2GKEZBbeEPHc5gkrpBsKU1LC2eCy8fK4MSnb5AJU3p8QRRgbiQe4NHXSvE5uG4E3yAYsK4eqGQPH5xLkaJFB",
  "key19": "2WGgrt46tQnZ6zNmV1mYzdsGN7NGuMqzVE8Y5qhyX2xagn4kuyFqCgmzNfEBFDyFVL82uotTFLWpDos3pDm5mgzw",
  "key20": "5tFNBTRxGyY75i44zrpYXtKT6rBxNprWbnKhzTK1bSkrCt1Mq5rFiNVhU3abqzThvgR6xGK1ZevUELrQPTHv2J53",
  "key21": "4EKP86dkKare5CDe7GkPxR3nQpeRhWfRp2XX3VFr4pDX9rQ9dKeUmN7A5ftHEAnqHgNnbdsRgQcuE2cC6nogahTK",
  "key22": "25S4Zj4ESzuTQJmhAss1qU3zSCmmoLjmzYACbGLm8RbyWTo77LQqNzSsAAdUNQyUadxVPBHm2hxwwC7V6oPWqVFB",
  "key23": "A9zxuEfAYRTzdgfrWUAHESpBoqg9mEruCL2hAoqSwSXGvRQuLYHtS4SgTygMvRyxtVNk8duovtFJiMuFRVfGm2z",
  "key24": "3vZKRgFewdC7GpoWf2HCrjne8qTqsnE26gFJRkDwEkAVNZNb4CNeVGJmyTCWUE8on3ECs6iFCEvrKwBi8KS8KKGj",
  "key25": "5cGZX7s9a18uVRPJnh8XEcPVCPmpcsepNrHbu92CYHjzgmim6heiMKsPN6zRtdhc721eu68SSTuu3XN3gp5G5dkM",
  "key26": "5p5XtzRd4h7WBp6t3UnbdckRCT2KYtAaRDdtkSZq1wjF7FxMgTBaEytsGa3X18A6EEdj2rZSpEtCEcC4y5Gyssvs",
  "key27": "65EsYNbGe66Tz8aTuz83vR71MR6P9V52jAsnReaBewAeRD8sXKE9U9tATfZm4oV3mQCHLEXwy9p6UVuUqZdGUSuJ",
  "key28": "ZM3SopkP1iYTKGmW8tPiP7giNH8ZbjyhwLByudsq6ang4WaitMDyhWFnrLWQPo76FHt5LTKSYQry3J1eBwGN3uQ",
  "key29": "37VwEh6yzXX87wL52qMRhVsocfxyi6ps33aeahqAYv6GrKMhfnaT37TJYgVURGDsaeofNdP8DVPgA6n7GHikqPDz",
  "key30": "5y4okCa3jsBJ3kRib6rLQUXaUb94LBPD1L3bdK8U3UmVDKRnrKUAyyRk6Udk6Xhg3kC5vq99oJoJL7gJXdXxZyj3",
  "key31": "5omMEZgSndnn5f2bs3BfFn4iJ3Uc77hZ98JGtWSkoa4Z8F3nibPW8YStys7PaUyE1sZ937jidmzAWNbtmvBRo7YF",
  "key32": "27q7qPnZBw9uzsjSV6yMCRDNpYTKSxcNCBbQdcWye564Dk3MSKiudRnQUo2F1aXErbUnhxGLCipjZx5y6S3C8dsR",
  "key33": "46sRyNAb3W9Rgd96GnMZVquHCwm9CDkMJpxMXLzZPDqcu6rvD6BmMhoo8uadAe6wL9YawtF9siQN7cR83fPxRpNk",
  "key34": "5TrL1u7PLzwLZvrt213jwa1LJ8PiV12vDTMCKARxCgkq7oSNT6mohyREym4rB6gPi8Q5R1bN9xeo2hA8vKeGwXvE",
  "key35": "3AY88druh9n9Kkc7iRH2QgpF4SSQZRizSQMiVkphaARrpCd8ARYTKEcs3oUMtfGNKjLF74NdUH4PdxXhr17B5MJM",
  "key36": "65BvfeF1frZuSVC5PeARmuhSkqQz3AhCsBQ7H6RDjF9X818BgFa4Nam7QvvmD5YZC67XCwreZB5zDz9C6B1mpfhb",
  "key37": "VJB3iaPMV2oKEnf7GAe7M7WyYsP42W6LQ8YJEGvniMgvBBDn7VE5C1GJvNa3jetbmLEuYSBhTWPBddaM5Wb2Ez7",
  "key38": "5MqFtt11sthNnP9PeCwAKbxm3as96Rojv3cF7jHgAZu4husuZFikn7StTVcTi4F8mndzFDjecd6mxwvphEz6GW9r",
  "key39": "rwZoZskJe4g1RWUaJVHfLbPsRXE6PEorjWNMErjUczKNpZuZh6kyFWRdua88sDCTET3Kjk3DBAsWkCf9qJY3fLA",
  "key40": "2Xxs9bL2ya9ZQrLWE48XCbNqoAawEdaZCL1WDw1QDVVx4vD7v9dcHdbVBpPeosdkYz6PXgJPMtr3981Ds2CgBJNG",
  "key41": "2Jg322daczGhnfj1fkDuePFLMG3bjqcAjzezEpYKvPCtxSQAESqGjpqx4z4Gr88xWb6gtiQDRymWeXHKRLwWFagP"
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
