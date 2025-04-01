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
    "4mpy85aLcqkUiA2JbPhYBNVLmdJyhECNN4rMMnuPFdd7TMTXPfTjXcXaCgdipucJS3cjUjGmg9Nry4M7an2h9nSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5knGxPUzUEss4okNK9sRG9gNhdFPcYkAwqZrCkviq689EUYubPQ7XfjRtdvof2yeu6FH9Kb4LqoTavzJjtweUaLf",
  "key1": "3qbnh7yoYwunFPiXghJ1ZBMfG3KpABPmF38CHa76puLaHz1LyzbK95ok8fCu8Jbv7AuKdzPVMm5NrNywbAL11UML",
  "key2": "TAdcqUYmMwfmRWSqpYQsvB2hQtsX6oP2kQpq9LqMbyibQeMqvtXrLbVarwrp5w59QQ64SDKPiNbUvfFQZ5SVurQ",
  "key3": "64uF6bpzp8Vves2u2w3B6oseHiyhdoAHF12NW2vBkiCnhSHj2TnfwGKvi25TTFFDYrC863DQS3jFuvmhr5DAxM2Y",
  "key4": "258iVDhjVZ9uRdTQ3gBFocyohQqLoEgkGTkpV7qf2ukBzpAjb7eX6KTuCEhyUeXXqQiSmgeUGEssQ561Y1jLd7Fk",
  "key5": "67T82HFYPfw9EFw35VGUEC5jsVtdZYoL5oxcxqnGxFQCLpzHi93aTANFvXSDkZ5Jgg7UggyhcY2nVyjGQkHSM184",
  "key6": "DhTLBwEKuV4BMg47MXURbHQUUGGqmAsjDE7mSggesvTbtdFZ84HVoyB3C3apzAdsreuVjQMgRYHZvmzp9DcHXSi",
  "key7": "2CJhoJRHTVhN8BdW1tTCdtjZnBMwKDswTGu8diWPVXEuBwLfF49no3yfYw8REWNChHTVaEmo2hJcj6PeyiMt7imx",
  "key8": "5MhUaqZZ1F5ajfHSRoxr2oCoECUrHvupAzwqdH55gnbo1R6ytsFqMVxJWXXGbN2RD8i69B8NV4qdi3iGSB1yZGTN",
  "key9": "2jVLsRQ3oywGZ1kEuuvhhagGB6DJni2Pvz7CkHG74epj4vvdHmscWcjruqvCWudoBZ2kCfDwJxWy7W3WXWPZdFs1",
  "key10": "ymL8wiCDJuRxiNejCfE1RqSa6LH5kxjqcGJokMVhh4bCnhG9qwFrGW1ZttRLh8QPdjeSeka6V5taq4VstvJHBT2",
  "key11": "PZyMbWTZKQHf9PiHGBXGkG6WRC4HnM4YLcYsu3faZuw1RKfoNeAAktNAXNxSXxhFauE9hWqtkHYEaJJYE9vYGEa",
  "key12": "3GoJaJQEKFHKSkVmVnpFaS9uLYMCRcFYbEwX37nfTNufqua8q2fWekvQ85PEHJzeLaCVNe6LYMcZCoh2Q74Mqawc",
  "key13": "2zjP7nfF356wYQGMB9hi5ykpG4JcwnMHxGCSQh1cgFMxDM5SjL65nzP385q4MUny8iJeU9hRA57xoCMG6mT8CoPu",
  "key14": "5Ptz35TRsm7TeGJP91xcgUKhc32XWU7P3dufxYKD7UWRvWougDfNyTMwWgsE9te5DKiFL2Ev3FXH1xGG9nYfEiwH",
  "key15": "5ZHyVocexWa4rEDUk192HWnPeTuZZmqsmY8SMDezqv9NLJc4N7HZ1cnxaHXGRbZLywLJqaLBW6Lo5fkker159Dpt",
  "key16": "45LTehokuhJh7JMAC2C1VARXCr2YNd11MjeQS4cFz3sbsNPTMpKQ31BueZQqaVhtb5t9iqaNrAm44gbMRfifbcAa",
  "key17": "8pyCDFv1LyGUcDmELKAqouHQqrrRiEnDJF6yisoRgKXPbAMK12K14zyA761yvJyVk9xBkoAFR5GQrzqU1jWQiRT",
  "key18": "4ZqnJTKG4XX1HFV4YHzByJRSypAZWHGwVpAbvbNc25GKYDxjv7xscJzs4NpitcoYfnuvHwKdYcNcEKfuE1a4SaJb",
  "key19": "5KhsQrwy6QZzPvvA477AJBqojA4LKSQLKwFJof6Fw6hWgHw58xwip5TYH8Cd9v3HGKP4Nwj7usvcN151ESaeriX3",
  "key20": "3XJgMRnMq6Vam63m3nQkErx6bh12zeM8g7KEeNd15USBcfeUSC9s5bN4UDsUoFGJWHauhKXfCnLdPanb4K2cvNRv",
  "key21": "2MxZVyUnE1zH1CqusuRMTPatZiE9UfdpxxDjCmmN3Y8BnnKprrCW7Cvov35bVL3nBmr51sNZRKSR29W7uh517a5P",
  "key22": "5JRCrPJXMN4WwEgPDbY3JddTy9FLqJhVDxVRbS8kwAuXQ7YxeqKfRCH3xGxJUKoxTPX49yxYooTLFZ8Rax9T2KRQ",
  "key23": "3jcSCJ7wbZVg2BVakrZR5swDc5TUA6dnGXQLboLt2aEfiGLgkhkL9PRRH9tLdgS9LryLa39qJYhBTS34tfH6wVY6",
  "key24": "5UvStDj1PooTf262YRvwwDJVkFx4n6HysSM7BhVxejnx8gzvkL2H5NCfrP2Ru7X9j2Nmjzj39PaGFpSjLCP75ySB",
  "key25": "fqVCv4mGXS5wjhW2FiJ8zuyafbRB3iDbix2UEiiRMEN4BME7rAcFPP6292ckA5sxRPG5orEQFnSanPUh1Xz8FZL",
  "key26": "5acfEV3d8HKno9isPBkzywN5QXtFx1Eo9akgKKDtKJ3trDgNRZ98fjNg5NZF2zD9gRtBghMxe2enq8bYq88DYYg7",
  "key27": "1C3SKiMLqG63A41qL19HGqnw7pHoaFaEh3AZ9yVaYHV8fgpH8s44w3jLqrHnHCSm29tzYSTDLtMCUCQAr2VSBEp",
  "key28": "5iMrHUrxBaFB2EyL6FbrEL5yQkUgN1CHxKtb4qkXgZeA7JPtGS4NYR4WUc265V7g187XRFJ1aaEChYz3dvnZcxFE",
  "key29": "3a5vETnEsbiBaBn8C1pVapsNEvnWJk3SYqUcJgraU3wL2LSYHKjcCSBVqtbwRc3EphVEDfWMZDS81PJNpwdkKf4E",
  "key30": "3HBZdynvHRuErhpfTEGphwgXNQTjNbbeLqyF6LkTgefS6rq5EStMkYULNEPz8Q4qkjDyGQtqZcNhe6iQJVkB8EQC",
  "key31": "4sw51eY7L1dvfBAp3mHLEthWFoPFhQ1w1wY7cwhG1DVdzigk8vxzLBHg15F2Cy4pGzQVXKdUkCQvS5HA7sgyA1Le",
  "key32": "fAPXe86iyD6MC1ZTvZzvw8UFyWpaPoZrpDL3Ab5983Kc4VEP9f3H4sujS1uF5rSojktxBCSRX4oB1ptQebrbTur",
  "key33": "3pnKFfpfrnE8GruSMRhWGKKnvp3FXpEiz4DWXXp8dgypuxzMHMLaR228nxEQSQcMfvU9CRh66rB4QGVGcJao6KjF",
  "key34": "3w7qYgu5CquyMKEPxr1uJqFcebegRWYwHfaVuriRTFdhuKVKSbdAJW7pWZf4oQs9j81LT5nym17CC29ZXKNTCBHq",
  "key35": "5d5tBLBFqRhEBx2RhVd8mkzcBqsyDgv1PZLn2U7UAvhbk33stS6tT7jGxYXZKjJADzfBhxjemhy4PAM9jHKzHr2B",
  "key36": "DywVwzkuXtmWCZuGw2MLmrnwRy6G5LguUFSvxY5BwgGAvww7UnxQzvo67N8DH7rULn7Y9U5angUJrz5TvpRfc1f",
  "key37": "UQ8pc8aGX5hCc85cryjRghipbvbFBdgGTvjTffAmUKUqGAKZLbFrP4UKipSYEy562zsAY2DyMevn43d7BsPP5n7",
  "key38": "3iR5N9AD2DSndwCd92Cf3WCrtbVWsRiBd4pxQhpZnCH877AHQNC6AKvuFkWR3kCvRA42Vv1Wai6M7Jjtkmqq56L3",
  "key39": "4b7UigZLoaEovDY4FJwLcKHaoiPcqMv2TvS8zyRqzPac4U6o4kg1SdYhEZU2oyTHxTPE3i3RvXs3PYs71MF8Jyw7",
  "key40": "4gLa18dNdMF1VRBAEQBUQGcCkPJc1fvFn1hFeigxgyz72PszHNgpDrnefx9hgz2sJUu4SXoZd8k5usv5GxTcCfj",
  "key41": "2nbpF4ggr7LQvV3UTCGPZY27udNJ1xb1sMJjkoDQK9KConr2yqqUCrxc1uddmkwXpX2LVuoBS8qZ74WWpaatHkX8"
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
