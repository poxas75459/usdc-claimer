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
    "4qsWNG8AZKeHbWmcsQRH86JVongXKej8Q3gMqYWYmQTgHmxVJGKWEoQoriCmmtYdTdkFLBKZAZyMz1oVmJhThAau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GE1utfRTe6d8qXnaBchuLNAg86KzjHYpiLtD3X6U2bsZ6XegfBEvxWBNQZSgMPbwGLESUmvCj8TAf89RcAsjzSL",
  "key1": "3FshdaYRE1tfJiPGX9PregmSrUpBumwH1bdti6TnXx6it2M4sz8Ec39Dr8Uhe2rWy7PkBUz4Ut4E9UtAaZNCEPX5",
  "key2": "3QebmMa2KuVL4RrBukD5etRKrRySE2TkU4dg2Q9TrDT2orHGzjpo6CSdEFU7G1121mBt9LiWfgQGHUzDZYSEhHq1",
  "key3": "4qUJPjPfLq7EaNH8GL1UUTmDqVw2V3ihYG3NswTLEBbtgaPGWfYj8LDsLzHNDcWvL5FHMjuaTahnfhQkMD7gKUxX",
  "key4": "3m395mJN1kpjG8cJhFxFJ1wdzYgMTMVYdhKLRbK5bPj8zqJguc9jSRofAYtFBGCrY9u721asfKFiDT3aBLu16HFE",
  "key5": "3GWzqz3PSxeEN4kjzz1BdmCCYwCkjP7aXxJS5Tx3FhyQwVFCPN46YnhgtBbSY7taU3PDpaW1P1NfRLwybKYGVunW",
  "key6": "4nsHpkrCEg9qfk9rfYxuRFhk1mSYs1TLSu6t6Ji61sV3F6UZmD58DrFdUsi43yVvKMADRmLxtaKEU6W49BoeXMfD",
  "key7": "3spFAFddvnqeSonqLQ4v5ecmAwtJDN7GGEGPwe1vmzFMz87DJ6U8CvnXf7JfWE9VsuRjKRa5y7fSAV4evo6bzJS6",
  "key8": "A5sb8rzVETXT4SBEDwgMewENQD7M3p2hkEuCWtsae7CkK4JuGq7HsuBdf3micFddfpsa1KoWyHLt3XBCMvn1mk5",
  "key9": "5UfBbtvQNko5repsieSihjaFRpApw7BxVYJTagGv8LfPHyU1vnykfU62WQygqUi3Vh7EEdqt2fFEi6DYpktRs8jb",
  "key10": "5Zvts7VPb3tzgrzMDscJMLeVbk4WSVLFHqcDsiaAeaLWgKu9p9uiHxvVSGFBEKBnB1cR4hKm9LxRXiqvYm2wSRxL",
  "key11": "23wFMsPSHL7SSzQjLMDhkAVAC8baPAxxFysiZGC8LjM1o3rmMkvKJC4w6ooyfiiMCGrC88DXB1QhZtC9hJ6cfgr7",
  "key12": "56M6ixsNLQ6JSo8ZXnq4nprXWgn4eJbXxfs7NdJbF2bXr2om8UAmxCW3hNDMJSeNd5HSM9Hn9hXNEeEszdf3jgXo",
  "key13": "5twkgggTu4z7agJdGGaUn8EyxS6pxERGMuX7TMnU38NgTQQJYRVPtrS5myHq7KU8usqsPMMqa61FwcBFVVutqvmi",
  "key14": "5fMPQTCFxy6B1AF4inQokGizrCAB2cEdgynsZkgkzgPTroVNwo6yWFttgwoFwpWBQC8cHLritcugMoe2qMovRLm9",
  "key15": "5hriefNGXMMs79qhGoon6n4ni4T8JPf3yEkKrq7rDsXof2JDwRjQnijRLNRYwfJQxwH5dmAKvnAGRHGExCyWTyN2",
  "key16": "2GzcGpijLM5ZXCrcmkTCtAiHAm89TUXt2GT8hRnppg2zc6utZK2wb3L4cfihZXy6dXVVKGrYgt3zDA36ppqATUAi",
  "key17": "3UiuR3ngQSz3wTFLo9iRxrv44oC6sLzpAj1eCiFFnF1CQjMURn9fDHMdgdWxCeVrsxoh1HArbqwPo5e2nrrETUab",
  "key18": "4r4dGdJ21NiA7oAuDLPg1oWfs7Yp8zrL25s7KRPPo3YsUxQAQZUZevjVx31uHhxGp4xShHP887kSjVU1U7Vfcav2",
  "key19": "2f6qXgLVinP7mZhKMKikV17gLoeFDBeQSKsdHPeGfGjms8ZqdbZsTWG2myCGeNRzSb1v5YzdLi1o4e6QutPdoWod",
  "key20": "3DwWqJGSEwfXkXFYY9yyKNWvSFEdurc5euz6apXxLaA5sLL8G6iqbibfhAYvay9FRAW6vYuSCX5qxaVFQaaQxmpw",
  "key21": "5c3C66Nri1BN2NkRcmvVU8mDN518411FHXLXG21frmPBBmyvrNx62AMWmPxfxQ69eqDPrNyCgAtYu2N25SqLwS2t",
  "key22": "4SWjpMgsjPVv6CausUcte8ngjkqCJnNCEaht8kDW2cE8CnrVcWWv9L6mohbkt8vgigMPUBriMQcBSEjuCPx9ecdp",
  "key23": "2P8KP5824qRXcoD23W9TQmbyVP1zWiPkhBZQX5GGvMyQ9NE1pmW8uw2j84NDGzX5iW5MDYZTbBCfN1LuJ8dQZcxg",
  "key24": "5YyPpZYdfatM4zgxqYsboe5PnnnuezRcocwoUGXNki1VzohhgCm7QMe55mQnYq7NoRjEoPirx5tjT5gtP3S8riv3",
  "key25": "4t3kfLTxhJRq8dhRmi2P8dwBZ1HkLzZfYPx7yReqfnZw7aHtmZJNVgVTutTQ6qRCu6kzTpJo5DmEJGnWN3sDxx8C",
  "key26": "4gy4vZtxmFMReMhXRPB7jETC24YEadC31v5eo2QDwunz4Vcnb1Gb2J7T5ZKMebdAjNfkb3EnXimm4A7QpYpAx5dp",
  "key27": "2NpECP96CgKRdR4U8syf5fSqdKCPnnVWQtUHHrVuxfzqrex8bdsFasGKkFChayaAdtRMh8Y5xLpqva65UiFtBJqF",
  "key28": "3kty4N3q3CFiTRLxQQJVe5tZg3ctL8SgFuEFSbC7x4peUn1odffDxDU4diN6T91Xr29rr6nRRuinodAzLSnUsNM9",
  "key29": "4fHAUYkBurmqGbcu2JYPxtfWxJ6Pgm3RA9utu3eEKy4BA3MjS6DcGLieqdXcewRY3jGWsESvQ8Kg9eK9HeMQQZxQ",
  "key30": "2TxR6V9n3W3TU8CL8W48Mes4UvQ6WaQbAstDJNct2Vo4NmG6bencrL6tp9N4QJttsALFP8qWLjb5gZQ5ab2yRaUL",
  "key31": "2n9L72eNNfj1qchScWsJjvsYUhGMroozDLt8NME2XKpt7HgbtY1TAYnCh5afLvhdHQjvZ3sVE8e1UcfuRL9p7zwu",
  "key32": "5ktSgBV6Vz8bfyPyDkdVUUnXtbevcUzzCvyZaBfDmVVmsZGY6tNuc8mTsKZa6x4k4taZWWgHVUgAvg5VFXaJKZdv",
  "key33": "2hGDteiKESd987wsAWk34Ymmjh5ungip8oxZodPYHFroCb7VoguHACW94RYySHQTk6BXyNT8gkqXUErzLktLRfVD",
  "key34": "2gn5fuFym2KLL1NRMe6Wy14XLybrMeWhzGjFZgJtcLdbQMDgJEyEgqbXrq8n4qA3rHSMyPKZesHBoA6CFoNR3iGc",
  "key35": "8QrL8tZJcqWcJxvJ1Xg2dGDqF6PCg6aKQicCT8EcayvHr95MtqucJpJkdqXt8LUQE3zJAfprDxtQHp8Mf3LQsZK",
  "key36": "3o91eTZQqifMiBa5xCXJNynBnnPGPCd21N4pawExhkvw8FYH4dUUAkgeyzsbHyEhWSb2ittUCXvrL997rqPiSSMj"
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
