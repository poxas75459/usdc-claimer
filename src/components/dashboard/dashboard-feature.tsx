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
    "4wAAzVpXSztDHoEFdC6pMpV1Kh1hfCQxYgvNxwP7C7AUWPCSsMuCdygd7h8fYkoGSsbZ65wdYsXZbZMeGzPPwWHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzSy6QBgQixB6tewPa1LwhRcH5sBzAx5Xe1xPfCw5S119sfoW89dTFAX9agfprVcRXdH6FoTSqpEj4nX3FPQWqj",
  "key1": "3KBHDageSCiqMxCcYS5ip7L2VB51Vy48GvvyN2A9ekWGRcJkHYVw9dpgFkVyDE7E9RHFkHTsm6L8G11sZ6Q7e2bZ",
  "key2": "2push2FLwhTPig2iV37epZBSZnCvHktmptdp2iGhXWCyrcsAbL59ucZNZcbmecFWJ6AGWmoNzst5xPncAzguwcYF",
  "key3": "4LowinA2PMw7TZf2VbHck2KgitDgL1Eg5Jkqme9dLt8ei5BQJR7qPi6nxUnZ2BvQevsJcuJG6KqzGMYYNDHeY3iA",
  "key4": "57TTU2owGiEcTe2L5suVch9rfJ6pegkPiw5MAHvfwaQLV8msyhSVQPHyP9dzLSdfyZLyUx5nsVP1paci1gYX1Nz6",
  "key5": "ognPi1iL2qSWgTxKUPAccYMyrcYRbBJNhzqnwQ2YtPButPg6qrtddHU98MJcpzYv4bdQTMKTE3vovubhZNFtUJA",
  "key6": "3joKcPfH1Boh5k8W247gJ9JeJbGXTEfc49hSf8WFFfj3oQ8ToScfRybraTq35gsK4VhUDpAUDfepFeB11B55Pni6",
  "key7": "3BmFX12PTBU1QJ9Ja2iSF2QQN5UAJPTh3H3WvpAN3r41RftvQVN4KKNi9AVyX3gmG3eZzuCj8W3aVempxU3XS3q",
  "key8": "3jdHCkQ3upEsjN97qY2rks5bbQS32SA1XV2u9CrkSrThck9AuAovo4yrVbZ3mA9aN9NXcPsL5fgk9bAHeng4W1Q5",
  "key9": "2Da77MBgfBPgHNnQMgLLnjHPfzqsAHjdkU58HzcsF3rp1Ws3JP21VCv3G5Tz9ADLr1isUMGo2MZS5DTGyUHBX54x",
  "key10": "VYi621QD3Q52rWjr7wQaEpgGcTDH9SCWRcF5o29tLwEChyPmQSuXDXc57M6SfuyGwCnKD8qUfMkoU8dk1CitPDW",
  "key11": "4fpv73sB351Lzvkg7EBBjTgoNtNUfdizf5DXTD239cSmpmCopwEBuUcuLKvsNkMkUR1YmzaWHnbpoK8UdGi6fnh8",
  "key12": "3d5rTBNTp5CmVKZffa8M85jXGKuSGD1TVUqM5qJzFx6oboZtbzMMBCn9cE8tfxAZLnPUSiV2n4kfnWWpU4CPL7eF",
  "key13": "5omSQWVRJZ4YbxW3nCQfLJZQFPcunA9nopRNXvuuSce2gD44wacdAhTuTJVbfSENSEUqVoGBBegWFPpDmsner3qC",
  "key14": "1k76vrmH4cuyAuHzQW7XwtYNve4yvimmz6JUECRRXHNA2H5fgJJzyzdYTF6vXAWZagdEAzCFNdhCAeT2dH3T9fX",
  "key15": "3EFPhdtUDbhFEfyPAPKfK1tsWWCfREdSSZoozg15z2EAsNkyuec2op1964PUqAreWtvevWALjHM57P3sMCFXwvdm",
  "key16": "629HPsrwC8DndxogNwWZ7LcKqHueeA1oN6nehdF3CTeuXPjuPgrAmizha8gj9gHx3LQxUb18gkUkLMi8yT59Y3gD",
  "key17": "2F18KyhpPajYY9tXnuHGMUBgZXVzPGKzuVQwuQeCeLhJQQwzVAxsmoei7RwJRSiwN1Z16MGRT17DzXZaabGBMs2k",
  "key18": "2cDHZTPjXtt48Vz38Y9USPtxCF2HEP6CcXMZnDcHvNUgb7ozWoVv71Ji5mWj3a6t11daFKx1WgnSuy2Ru4SBQSHr",
  "key19": "E8PHdKEAWU97X5PJWsDJHqpLjTtoQLBShVhUZsCAhAcMNnqxN1tafKYUkXfdxieMw8kY85FSzyWUSgMQJt1MGo8",
  "key20": "4F2QFkm9fkR5294KQGMFC5AkfA6FazcrTTPZwwFHhMKAgREMNyuJ7hJfnc1sQkzKQ6USd8ZYGMUFeBs1JexwcfN6",
  "key21": "5pmUYRMxp1sV9NMJ3R3XZh3oizB2Ub5b8gbDhosoD6fDtGkkXXftq4E8Gf7toGBTAnPwgdWBkw18CQKn5corXjXZ",
  "key22": "63hWPyxXaq14ZUkuXMSU9qhwj9bqiLYu56odizcrxPy1AQJiv6wQrfDmbVWpLx1j9BeL9znGh8Bof3yJgTwWAsG4",
  "key23": "5z9zFHpGpTwY3StM5H9qAbkNhTfjMBpLoEQaq14tsmwCHQr7id6hhNTfyGbxoZkb8J7D5gZY16CDW2MzSwYLfZzM",
  "key24": "2GdZJPnyxUdG5ChCpSAeRqzWTmpxSJaXeidNV8o5TuJBcDdTg3knZmwNh42MrDHdAjGZkEARia4acfd38GF62iTd",
  "key25": "5aBXDbBb6hH7cbKHPNdPH736AnXix9DToR6WKxKHVLRPfTkAqWg8gZ3dNmnka4td8VTVCRnwvHsVT71F6iVMGFGp",
  "key26": "emBc9eCoAHJn1TizzyVKoYeC6R9u3rHSfC6vzdcL3j4RXEsLVPEkJNJXHjWgPN7oC4xxN2N2cnZuCTaFDoEoG1E",
  "key27": "5dRYFE1fmfksie3zR1nSrpCNGFXF7UWQnVDZ8MfgjPB1ACcTo6b2hgxLtKEZ5KvhL1iKqsDZSbJLUuxPXtfmwmVm",
  "key28": "5qoV4U3rVNB6PPu6v3fMTxGEpDkXU4PjeAHvDaZPmSGDNuVnaojKNDZbLAn1mUANKLtxi5niGY8hGmvPtJKyHN6p",
  "key29": "LsLUCPP6232asBShUit4PziuJedoUBJx7d8cvAG4hbjDz2Sa4MuoUWNGB9itkjHcbzV1DiWMc7hjSb2RabFSkVW",
  "key30": "5BytQKDVUfcJ9adPkvMqzy9jmEKuRvTsMDuy8tuhG7bXpCmtaxZPxCsoWxnUZoin3FCKdzJFcZY9UCkRgdk5dMku",
  "key31": "5wJk7rUoQz2qsVLeXcHBBcNwMDnxFToAWY3QzfmTKqzxiNVneCPMosEag6cfUQCmkD8od7rnj1Bxhyu5NPCjmgoa",
  "key32": "uZqSAsewcW3s4TgccSff5m8VhETanayD5YY1msuQ9eBVhYVzDLDwfcZMqSDTC4mZ6PuBKGxNUUTjHGHDPzAYVp1",
  "key33": "2ndmRxpV3Z8eGKC1FL92XqT9jT91vfFcbJP7roayWkeNJ3wvn3a7wvtjto5sH13XeQkEj5J2WN4kZtNRyqGjbv76",
  "key34": "2KnW23B4Pak4eMKC8nmJUW8FT3MgQwAJmsNuQLT7hM1JRDfP48sHai93ZehTqtVmb1QVLi5mrvYcXsLiJeormB7z",
  "key35": "4PGbsbHnkbFWAWSsbFcmLvJLzXspxMqFCqSkdNTCa26FRVrmZ28i6vbH7enjABbez24RKAwa9D768LZS5fuGV76W",
  "key36": "5iWaYMP3oxW1cwWJB6C5yfKi3REMRTkANwzrHPkWZTEXsZYXV4YPABcxeTZZ1w5wVPbUh2SEPMogtJBmnCgCGnYA",
  "key37": "4eiVP93GgJpsNe618PkCeqPyvUSVkU7D7BRYs7D8TY2bTDmbSWiLytgJmZau9ccANtSXCjdNheEwNBY8UQzN7c8u",
  "key38": "3V3y1U6CPLRvLHsB8az4sEZrUyt98G5wZXJJjiuP5P63LxYeqRf6Hp6KvJxJiEd2n4E8THg1pBbBnDqdWkmPYQd1"
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
