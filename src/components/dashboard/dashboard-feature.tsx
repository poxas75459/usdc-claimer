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
    "2pXtYtP7cSe3MuuCZQGQxJLUG3WQWD5QxAZTPdvxiMTVSk7q3hnSbEFEmbeZZPkRUmimCTq4nzV1ytAy2BVD8y9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qXwJiZ48hFwCDtvgE4pPHJr6puF65wRnAgKY3nNBfVzE2wHJL3wUkCG2iLQPMRMwckzGFWVSmFbdPtcdF6AZSi2",
  "key1": "HpgAeM8BCvjTfYv1QqiH2S1cqD68HDkEVg2UCuBARYhimQHXk37NiwYszG5SMr49osHG9WT43B3Xusqr4DRKqph",
  "key2": "4c1Qr5hTejfjts2Pg4Ejh8AmQf7VZ6jt4uh73N3vcEUnvYH8Nz9YNGxzrtmsPMMvXsAkFkRqQhaBPUVpGFo6L9MM",
  "key3": "5Ww2eWWS4ASTmPG9Py6HCpVV5H545bwMNVVmsmi5hkCgiXxmkcyr9nwRhyo5Xgy9def6QxzyE6SkjmiVgppgqMLV",
  "key4": "2fEFR56xKqjXGkNk8jUQRD42s3m2jhPDCKmVK78MCizeUKCHszQKuf1ebrP6GkWAjboa1xZh1utLgJR6x2HsmHnh",
  "key5": "2uL9xvaHUr5p9PUD7XRiqnKo4cxMuJCLPmYVSqvp2HV8yC7ZtQtAhz5iY4cw371NSLhWgVu5gEsVU2GeVAUBAtLo",
  "key6": "5zfakL86MdZW87qYnRpRGju2xnWxK1fw3J6woyHTX1KoPFmjhatWyba8u54VV4xbks5aUQz3km3TBxPQZxN1SGkj",
  "key7": "5HurZ4NEtzR2i2qgnTUDesPocxBRUkhNe7Bp1oHomiZ3FJZmJyd1vESiL6kQCgikMZ7y6Xt8TFB75qH2dNRyQkN8",
  "key8": "5UtypkUqFwcHoyHKGBshM61mBAGKMJBTcJKJ96xvfWwko8616uQZmgUrWrgj7mgnDCs2Xce1X3qXqSM3EqW7FyvL",
  "key9": "3nvg8BcV6S9HBb2cbJfJcaFR42BV2ckMDshSwahkDT51GguzdomtXNQ6oNFHJX6JnVve7d3ovmf7xG8ozhjUcCRu",
  "key10": "2kszswLUwD3kcDYVtQo9gBKrnBJxb3stZaQAC7LAWj3cHMrEnmF94Auv8WF7UbqzrqBkqGxErNEnWftjx4gLEU2k",
  "key11": "55UmMaFPpADNPAj8gJ8eDcJDBydT5Mu65xF4M2RDPPn5yCu1o3Lh1vLM9sXb7CeL2NmQPhspt6PYS2VUHzT9UhPJ",
  "key12": "2orA736gqNo1vT2SriBibyJgNCWwfrCfd2jeKYKzyg6BfBb8tvo7yZaJSBjXkHXTeL6VVoVDJ2TegeEwxPngSsgH",
  "key13": "4gyZme33i4EAdDrAnm9csV8B9BRj2TFE1qVQ9pqjJhttssovMiTJVXDkC5HUiCLju61g6MA2TJTSs2VGChKCZEsB",
  "key14": "3zp4MrJvdFeBLK7acsaWrkGYbvzDK6gCx4bUWmQvc1uQQppDQonUgQ139xG2EAY5uXAQTDR9nn2Fx9yxC3gWX8bL",
  "key15": "5pRJEdPRitLAgNWhRpQtCRMnEhu8x8JP95FHRd147mvowKSRKDK4Nc41NceozLjNS3uBuS9NxS4QAm9dMGE8mfBp",
  "key16": "szBADqyVxt6z2kWAYSyz8Xp5YuLXadTq1yJmoTEgqbjKmrPKMDULxJM7LrwPq9v6sjYM55UnKHrMjDcFTmMpFvT",
  "key17": "51tJebSs3AMSgyPdGxyE8y8fkvuMjpgLvvrB1AnnN41vxttAiNywE71ZtGptsdEFqnEsAUvPyhr64PnABpDjNkTE",
  "key18": "21c97nvPEzTxhto4TEYAE8n8JeMAir3XzENmuCHPMdgB99FWr6zprqFVMsWriDe7rSbhHPmpFWnD2EcygTn4gNfP",
  "key19": "4EunM2x6zK9pjssqxPzrtfQapkNobXKPbxF7jpuL7Zi25Jwvvc5m9uhLMC4AdxtyH21gpUtHvXFmMcErXhrRorhR",
  "key20": "4xsLBjLHeywLyw2q6DVMP5VF5zdkfes86UG9DSeuzrUd15ZZcxE3pFh6MqjYaP9gp7VTibwo7Damu75yTyvnMaDg",
  "key21": "256vsJtto2jmv3HKRF2WdmFYBKtUyRnoBKqo82cbRbXQKQY7WWzuVJ2ST45zQ2mff2gFt5g96HmYqB2QpveEpZfi",
  "key22": "65nRVwFcTp1PUTvngzPdA3F9DvDUkhWDqr8G52zL8ZQt2rcfCtNZBd291K1iZNwNkwEHFyAzcVLX6TvHx9DX3FKZ",
  "key23": "4qrbesVu5fApC4boFTS9F3aMmiKDE5sBikgwVvrvJ1RnVSbfbvCRuFcNbKQhZbu3UHXCA6S8RdYCggBV6fveb8Bu",
  "key24": "du5wtkkAGjUUnJDajHHEasLxahmd274Tw8yMCqZpyHGhPiyh3iDvF8vYpcnF2fdM3wus3vdNbpnWRWaYNBqwcjZ",
  "key25": "rDBvU2Hj5tNCDn7AoDaAsw3nbx63tQtgyrGcv5Ud9gj3rCNKuLundSEHXDdbtX1nbGZnd5Qmgwn4NTCLzhctvTP",
  "key26": "2xdcAy2UTY1bhCUDvuhNVPypaar6DoJv5z83hV1SMGgYdA57e4jaYFz8MuD8H8Ui1v4WZ1RiC5sgyARwBVaBvWWY",
  "key27": "3KSEL9PKaiztrn6XmHhVt3FnuZMz8tosXTsEibkN4m5YCfeKicUFU71tXWGgFsBzZA6xWPa4Pkmqb8mt1Tv3B2u8",
  "key28": "5pDVieX8bZUVY2GAtQjmzimFRzK9qb6o5R3eZkGFGoS4RF8qB4QxiCjHgbSMgArtGmqxugtyHgq4eSTqqxZDX5GW",
  "key29": "2UKR4vCBDULA4QsmLESLGtrXnDXmNxg1Zp8caX5ERZ8jCYAbS4iFTjfx7GrvTj7z9peJ2anXoYm5CxozbvdU1Cgk",
  "key30": "475W2fEGA7B51wLWy9eTxCutgTabGaoGcCRjLzWPdnMMqSCpCx1Smi285XrgfvPVCgYbknznvhPNeGzR9Yrf5QFq",
  "key31": "5HbCKEQP2MWsfywZ6hS4xXpbFSJyMrhsCNy95NdnmhN7zX8NhBd9koQsxvwUTtYZX7HCTRSMPRXQWE7ikqQRxHCW",
  "key32": "BerMyB6VYChyqZs95YZ9Hp3X5ZbfWM1DWqUFyZRxA7xAhsELsPtpvxozKR4JKNrSDBZ1LD8Ui3dfgUMyCC25XbB",
  "key33": "5FNgCQZj9godc3mSH9atiuRTRqYCk1G5rZ5BDw1j5y3kBPuSV1oYYeXPdAwcKXuLhmT3seFRWu3cRb1UmSirQd3t",
  "key34": "3Nm8THZ2BSr63vTDsCtoAZvXHzkZgr9rVwLHumZV9GwrGQqn4yhHfp8P8pBQ8Aygy8Kwz49whHZPEs5bx6FjzzNY",
  "key35": "2Q2K2aZvQ2z2hAW9bsscrrM2sGPSRZTQBXUECjdscGXppzovWC8KKGvWws2UTAEVvx2RT94xwkec3dqYGZmFmxbB",
  "key36": "4Bzg3bFaakeqvqb5umvXZRBEyiBq9QfpwBWudaov7kouYG1Wd8Kb2uDG458cVf93UbJBsKScX8bBRo7XeG4t97dA",
  "key37": "Rd3RsjbJuU6FkrNQT6CBxCRGbw5kFNRFgXpy5Zeo15Qp6KxiwRpHzyFBthTYXeeDSwuPpEWNEQHUjgPTnVdwNTJ",
  "key38": "ez8gadaU1Nu1zjpfT3KNQbrJGXimTTbfPxLZTqkhMsKd8xcpCs3MMyEDKmRKwwWX9j7gKnmR6dD3CM7gDg8eSd8",
  "key39": "5i2r6pEenRnyyZJn2pCVP6wSFLYydZ1PX8VVxFAasSeMein2wchJzG9HTFHgFfkr8MXK6cma99DaAFpYQRXUyqRV"
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
