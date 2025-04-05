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
    "eCMVo6vPUfXvRpYi31V3kTJ9iS12nAJMNEqp81AfEq9aFNFqE7LDRiMi6uVMB74yzfUwNWyENCCv7WszXjjtDPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udJpUPTNk88MCEnSjSywG7gVoGxNaEvNnLHboZEXdcurM5z33ufWDarCS1Pa6Up52MkcheuLwVkRGYpbecWkSY3",
  "key1": "3dteXLQyAE9QXsUPZsSGjWUeFnTKsQKgrXEgodBGDADSPFR5WgVfhuMbvHXZ5jCRboaMxUqoQwZqGazZB7r7i6ch",
  "key2": "39nuFDTFzwGAS6RLwtvu4G4GFKVr2iihVX6rYSdefHH2qoQKCL1uL75qwuZnBbdhibHBM4vqWP62nacGVXz6gSgp",
  "key3": "5bmtArKViRCwpEDbmpeSVGqHKgQRwpHMGtacJJ3KptNmBffBddrtd1R9rQq84Ti2fYZqcr1BDzBANQ7o7JRs19WA",
  "key4": "2Vw9jxoPjDekQ3Hf2eMLPTQLG5f7vytMpeakwJ2wByMkY8knCkBddeCwrJKLXj135sVsAfLUGBA8enfwYsetEBx4",
  "key5": "61MrJM2FyoUppDY67t7zmkJayMsSuqDxe93MPgjjk9cXQkTppsTJ2gqYQWbp4MVz6C8kg1WdmpaTNXvv17E3L4gx",
  "key6": "2jDsfx9shtrLdTYBALrBLs8zFBwjibTopK7oXcy8H3JQTsdaTqTwV8qTSkueuVPsgFBTenDrfPQMX1Tq8WmNBSXZ",
  "key7": "4hbTvTLRZBiM5vTujuPFE3AXsPUUShL83zM61VUViJM6Ln6Qf7HhTwkHT8UHgQPJ1n13LQJu2qJ6iTSrSoiUmamU",
  "key8": "2PtiQzV1CmCvmDAnJBSasFt2qGq19qvCPmF44mci2HEs1Eysx4xX8qYWWSn2enotjKb1zE3UJrQgg2xjh9pJBUzv",
  "key9": "jGqAWJxXefhXTYjw7X17UWr32doai5pgRHHSLDGgx8zAnQ4ucMtjZUnwNZhg5YBVWbsbXmD8XU5xcxEsGxe9PAX",
  "key10": "4x6PxsCy82JE9FPhX96SKwf9uKyNrEFCCxLrHrqcGZEU8aR5Ru4NSewMgrYLhqQkhXv5XWzW28s4LyBU9vz6h9bW",
  "key11": "26kwh7P5kXvJ4XuY4sytLrHFA7yvaEVh66ZPDJbDRFVWExtB4xQmCkhYNum6b9AcKgrAQVfGUxhohAnALEN6m14B",
  "key12": "4qRcZqTirDujPc7nciCwgShKHhmJpjJ8bRcsrEraHNCTUdB6As8HCKzNPJDjMRHqQ2QydWssKLuvD5Ry9FVKGLdR",
  "key13": "3bwnSUetRQztcdStTgnzsGCPbLxoejZEJ5EwMDtuMz1kcZL5D2GJXFH22ezC1P5rCU32miacnzNa4u12gWC51pf9",
  "key14": "3BLzVk7WMdADPTtkV5uMeWErdjY5aBf364qN3woq4J65qX9VkWdo9D4qafThX7LCawGPKDuzAkspzGNCo7Dm9KKK",
  "key15": "28xnk3d8AQgo7g3ScvMq2SDpR6jFi2Q3AyAAuYLYLnsvF7GMEdaL2nH5CFhYr1V83R5mCtX4UXH5aLrLaEKEY8Wk",
  "key16": "5U5XMmQWiiFUt4yvZ3pPBvN7gUtiHCmpmcFKjt2VuaTrcr3A7Uo6ihwKPWRiAZCHvpVce4y9qye4h3XCjqiP1zzi",
  "key17": "3Buaf9y34NWk5skcCZpDUP1g9kPVHWtbkUt7JcCoZCcXZjed6Kuo8rjgKJjsHxkqUkZXVwsNziVSd7XAheiJQ5K9",
  "key18": "3tzjrt7ToQ5Y3CbHpcmWXLDjZYUaAcx26simwKDnX1ws77mroNJXAA9PpBF3ckixHK6JCibHMic5PkkCrtpjuZyP",
  "key19": "5jGYwfuQ5jSa27aXLHCXzKpYWJbvkidJ66fFKrto6fPRZnzFDW5azwbCw78CYBiQtXr2iWKqSmgvqjJ4HzUHu3RD",
  "key20": "4pfj6pkdcXCt9RetJV9rqFT445jvATbUDPkVejPeSJ2cibJ33FfkRZod143KzWKL139oBvxz86Mn74QmT7vmurhQ",
  "key21": "26WLaUvZB4UmEXq26B9MHy6hUmyddzQvtd7WaHSZBrFvAHtUQM3EKbx528yGv1bkzvxRcdygC9UA7akHQFanTPUo",
  "key22": "527wvFkTMwHCsW7sgHna2DVfj2mx8ztgUcHvLVupZrTGzQp8avMzKAT54R3xQibstBuVEDDjPHTDjR8zVYwD57DB",
  "key23": "BoRmh6BsdZVYb3KthKNx1gSu9RJe3n8jAUmwhedTx3oU8mv34rsbAMTR4rd1UKXfxf4wmLvLk9jPYHTSVYdLG4U",
  "key24": "2kSqE87G1F6668WhnixYgVdKS187Evd2DVWEMKbPTx9eqebKvf1fG74KgEG5hSGJp39t9tzTiDu71LhpHnNdRHL3",
  "key25": "55xCVzbEXCQ61tctUiA95jn2m1MLzuw7oMnPyvVJCErw31zgkfkSoNzSjLAW98Q9G9tha7sgtm2TgvgrFbPbZBKe",
  "key26": "4rSnuZCN812pLPrMAWss2EMgUcmsH4fNV46e13CjmtymXaZsf8ZaGWuQjKnRM4ejJAXNugdWUc8QmLeGaqHyb7P6",
  "key27": "2Bw1byeDkfvEuZRtiXzCHZznziCgsyMX2g6HNbnzqFWcTGuPdzukDKDMgj6QmPcFVRQpaSx7rsLq3hDGUtw5a2jF",
  "key28": "4skzFqFSKgq8LM6S6E4bC12t8f6tSf3sBUbNt5E6yRFvCV9yJiPcNGHBYvUX8WjpiEQ6cnSuQssnC7vNJwK1sd6H",
  "key29": "3oo7UY1Ui62Nu2kTQEJATKL8B3iq9VYuUaPnL5mhNZjwnPGfHxsLn7b9QyRurrozf65RfRrmwnsSfuLfHMWgonbE",
  "key30": "nCCVkhRTAysq8ap5vDMD9ZGfamXTjkp36tS3yfZTc7XnXgcxuMkuaup9SMniQo5Se2VGvENBMWwNoyS8AociqVx",
  "key31": "5pSdKwt3KcoVk2oFoJjxCj9yxpThHF3JdTDgwkeZ86Qo7Y3DHveX6J4hBkpRCbdqSsEN7qWyDqLvxR7PB1mATDQx",
  "key32": "61faAhn9CArFcA4Am6Sw74UMEB2p7VPpXwKt91xC6meGWXFbY13eE5wZK5UFX9RUkfjUgVTQ44BnhFmbxxVBscQD",
  "key33": "5Fn6uTPLpbMW4M3VHjjZGHQKJmBQ4Ln2XpMAzDestATzahdcZFoHFqLZd2uxHmBCdt93m91PK281oTsXzuZ5ePy6",
  "key34": "4JhcLBHmbJiyy7MGtWYJE4yx34xd9xvs9tJLZioPSy8mAABFyWXBomoGG3EAT1ZcHeLst3aKWqmoyHoX5Bc7hQr7",
  "key35": "56JNMjtWwGJPoLzShoapiwk7Ey8mFVbJzhi5SP9VJ1jRbFGQUschxzRxC3c7z5AVarWVNLSuEzJy7V6wnFsYknc8",
  "key36": "3973hyAAUFDWcnj46b9v3TnGypmbox2wtmXiKYbqfF6EAF97RYDiigsx5gmJzR6xcjX5BhYZukwAzwpJQEcdFid1",
  "key37": "3E4PhjHM81shYKyX77p8tPFyY8f3tAgpdXHnhKPFdy6C2fofTJLsmcykiZ4QwPMTMKS9VL5k5sBinTgypQJfeeaT",
  "key38": "4kqdifnTNHJragQWASHnoJz3uqVQ64dVJzS2JjLoTZzDsq55SYJKrX2S2JWDr6B8TPV7gga2SSev5wQuQRWXMEZV",
  "key39": "5rzAPJkJitWLEYJL6PZqB37McxN3YVEWp2aDXouSjkMDt6XYp8XzFkEhGMAjcFSJ7JDLUNkiazfWHp85CJ57i5DF",
  "key40": "3cNorai6VU7Pk7p3LEcnazNzQTUBkbQDL29kKWRFaxSHHGGVQdu7nC74aoGtee1UHyYhkoxK8RoDRLVNN2YDFr1u",
  "key41": "2zetuUckVhBPANABWt5ceUsNChPX6fA6BnrrFaECAWuQQU64ZrBDHUeWLbAaRBGE1qJsVutwihXJJQD9QCsm7KmT",
  "key42": "4pYyCKoXpWgr7UJFdeYgSURquivY88aHxqi2RD6FtkgQswn5WH2DTSdbeZLtoazcyFJ9xdGErpiBwFAHrRiAmWEs",
  "key43": "VcHFZaTFvb17HUghavbfpuRuRRNs6Ap7xfXpdJx9TUGttYEiBNA8ojQZgqrt38mcU8kJySxVfByxLuxziqbbxKw"
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
