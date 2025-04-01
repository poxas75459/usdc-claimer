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
    "3pxrSWNGdMFkYrLPpro6rhPS3bgSLCdv72s6q1g2bU2ZrKNBwokPWa25tP2ZzkkVZruWNCs1ULNcHyoEGwWF2jEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DkPF8z1nh1r1ZMJidJfuLoKoiPmKeLsSRXL5okXPGzNRzrpJZhEvZ5Q5WDFsEjeZ32pbHceq48kUD1544K2XJUL",
  "key1": "4vJTjPdDH9pdC9kxyzN6JjoSKyfuS9m9fghXvaKKS5V6KwpCMdGB2jDyfGp1j1nms51H6WL96paVDLbvKNjEojt9",
  "key2": "2CL1KrxLUbihE1ouFRFEtjgAep71hgHKs3yueWjRtdtzhckvf5NuHhvJDrxpZ7TBTocD72EbUMXcfi3vfxuMyrAH",
  "key3": "5Uoc5a7rdvUYP4215w2ynRGz9mLUvsy1v8WWfW1p5tFrvBwCTfEsaNym4xm9ocSoGc7i7vdrk9EpRnbLa6Rq8yX",
  "key4": "5DR5hyqC2uf4Tmu3Smb1Vh5zvx1fSrV4Uy6oAhv7EvgvKWdoB2LiDM3jPEMgQi521gmsycXDv3u1Mg242ZZ8UNgd",
  "key5": "2xoXKaGBRxJCtQPML3EchYyaMtFbQuwhX5GE9dXWZZTUTdEehXarJfqm9c1bYyz36ppR82fRbMEhXvjgWWJNjeMc",
  "key6": "3ALm7NPbBx5ann8aCw6m719pPvs847XupC4W3bWPh1rHT6CFcVDMfa7fCLh9qYVGuje5FPdEM5KHuMmhDvfxNBre",
  "key7": "2fZta4PNsKMGdmdMafX4JoqBSXG3GGxbKUtBZ8mpCEmasZPDstQFfar6B7Px7rS3CfbHSy4mToSNJNArkoHPF34F",
  "key8": "3Npk1SQvkfZbhgiCzLnhdjqvKgBYRKeDzACaXMbfAud8zxxcdw9wmzNMLTGbFxH7rnz1BLgtV23rC16Do4vWxfKo",
  "key9": "2DLte4H4MhhxFLDUQ9t22gSEhDHcBCgNWSn1hL6tZsqQi9fcPj6SsGo3kDhRBXivRqBwPk8Lwb7yLaALPRs4t11x",
  "key10": "2cKyYMMucvhMeZeh5ub6ZbGKrCxKfcv9MDCKxjd2RxytY7YERZXDbLPLCwG8nZkioApgm74my5tVsoeCBK2FrT22",
  "key11": "5z5WsHhchHAPq9NbWbiW8D2fcZZ7oLKnRjsfoQ54WQy4kyAgXNRzd9dVrXBhFJdT8M5bun8KGnCgmH9hvGQyT1e7",
  "key12": "2qomD3QSQh8nvcBDEUEDuxkK2QYjYvVragAG1eCRss2BujCnfvwBeJZeaaSM7qmGgQhWsz65uDNEyyk8tSvWCRHD",
  "key13": "4UW1U7ki5Z5CwQnvKzKppnYjyiL5cAWmrtLNB7xxMpyCsKUFCKXoFYKNnx78P1u1Wj4P95ww86qpVGJbEPrXQwdD",
  "key14": "38eHNsrkzCc1oK88MZHSNdT3oec4AG6e3gVfUsGLRKgKKBMCcys9ixSusbqm5BpCMs44vHMAZFqkYG9B97NGcmBu",
  "key15": "2JcJCLBmaCmJsUiYSZQUmkg971u1LzC9VbY6bs2XAVZtKBgtJRiwxg4iJ8WSQB6Cx5kkvDb7T9KLaHHHj5GmcPkA",
  "key16": "4wm8jeVpjvZQQQdi5GASiWWAJmdLPCBQXSc3W3CNEa2cCJisPG9j8t5o1sk5w4W19M2drTXQVjgyvFqzNMdbzG1Z",
  "key17": "3sc9JGSSKH992saSduEmPcV69jd4TDiGaqVAo3wjxrrZqHWApfL6hJEBeQNNAtQqTebm5PHuomGsTt2JN4vvAMax",
  "key18": "3PYEhGkEarcjmyVjnNqNTTy8hg5rnPnMDX4ZrVPA72S65iN5CfmaGt3P8tx9AhWZrAn9fVk19ntQpnoi8vzCx1QS",
  "key19": "2LmCprkVXmpt5pvCeG2qbVv66KWA8XoEu3XdkgaAcCnxYu74LCznTEv2ZfnaTwDFxmQskWcNw6UwK3GJ1s8jqN5Z",
  "key20": "b52f4rruZ1PcCSkpSJh8SBZKvXC6uBWdb3UDDa5ytDqXuZkGSSpMXfdvhVEA4zropw5gfoeEALHSZjmkTFi6ut7",
  "key21": "3vQt2tLLZF4vp2uphdoTEYrPM4xQQw6W2uch8raKLFjJk8UprAS3G93vztsQHkRC2Gdp1TLGycqSqaHzBMuVnVmk",
  "key22": "UxsCDxxmx1VL6qgh6JEeZhZ7xo2kP1SHGmQUo3nTNN58aZeHLKDmPkywKXN2VpszZes4RyYDZXpcyDga6g6hvJZ",
  "key23": "3zvrypwcRgXWTpQ9xuPEFspYZek4ZCDPTdCZarKd4VzTwypWLBW7t5Af6CBDAY2vt9i8WM2ocYkfk6TMgkXzpnjP",
  "key24": "5m6fBGKuR2CsP5GE4Etuxi3wWQ8CAL3odasuHRM6bZ4xNBPJGQ4zxXCJHv2tThHZ2wZ18bgyFeqj3yYcZZGfQMnW",
  "key25": "3ZqBfYch15ihxenxj8v6wv5Z8F7WdQ6M6QbVJFabmKvyQfdeqU5xyeXKa3Z2zwo8htuvh2oZnx4MAYSMyKHx4vyK",
  "key26": "3msb1nyhHfMyqGDnahek5RvTk1fTM9KzLMJy9MZUj46QNFVLiiBcMuT8etq4A9HtTKZvu5BXAhbeeGRA5G4hgtTu",
  "key27": "4xb1Rm9XzpEMw8vUbCoCaV1eZUFaqPmzymxnAqqv63Swz7BjiHDXECejSW7bjNQeL5xaq5PELhycRnFtba5NB3jf",
  "key28": "3uwJ6vYb548km4UQiL3kv7ExRex7Qc4UCjwYq567jad4DHm2ASF4D94852XrA1meJih6TfMsubAPgfHiDEG9gjhx",
  "key29": "B44sKJ4u6wjFKJUuCqBH8oVq5ANhd3xUBDh6Sywmx1Z7EKdEw78QUPXpTps5rKNpJqVF2Fzb7YjatKfn8yayNzj",
  "key30": "21MTjX2RmyMBVnrvpWqYGF6y3YF5tPqwCz27Vk2MxiRU8NjekxaogQ1n4b4ozTfKLkAc4pcSbBt3EqFBhRQqXE2y",
  "key31": "2MAiZQqeUhCkNzAyR5wXLHDs47V6cYg6s7zQ6u9LqtXtbheJ1yDB1QG7MuGHKqzyvFcVqvqtacxaD4EDAcb1SXY5",
  "key32": "zgECSEy69W62zVHnrFiycFoHFghHankNfMwEVDFdpmBqUpD9eCWvNDhWyt3gdHmzGRiJqY62dCgADkPoMj2bgYt",
  "key33": "3TParYefYnY3MzaSRA5k4vxW877jkUAVhHLawzerfsx44BPfL8yPdGPEzJXnsYjouW1VKthGqpjqN2ufmkPFuZfd",
  "key34": "5BnhCmNBhCew5EfNcrpvyi5n5a1LWWN9fGoFhwWLuJDk9qBKqFnR7PzLWW2Tty7GgthrJ9Lz4PH1RGo4Qh8FUkh4",
  "key35": "458te98FaAhHpmpUiYChz2rc5szCpgJDqbY1AerHZDqWAUWMKdESyE5Dt3NaXUt1pU7CKsxrViNarsEJwgrg3xiu",
  "key36": "3uj9DshiCt8AtYau3gdapPAUe5yJ6CwxuSg9ue4Aao762QPTp4pf7ppMbNMinyWyeMhBy4PH3ZJA4mvVExaDAkVt",
  "key37": "2oM4PFLqbPr3rUdchHs3fssS2BHeVCXMsRvcBCuGFyb3GvFe56jjk94MvFxh4pXw9dLSYGUqjtvCi5dhudwQdrpY",
  "key38": "af7CwBW9Q55qDbRmCbMgZ7AMeoGvLDZmpdW2tAvbRECDgi6twrgASk8iMWAt3KxJZ9zBnhizfVcGKVBLiPCLjWV",
  "key39": "4RBo7vCaE7Q46a5R2bM9jMc5oPCc5cBoDHqqTrhTe2VA3sAKDjEwACDLoFLbpHvj7MUkfFHbkCxVmnjCR5Hy9b56",
  "key40": "555s5TmDrUobqkXnFiXCUQ8hmuaXf6kE7kxZbcQDYWKmCAci6nGgGpc2VYucCBCWFpnSgFsWorLf7A5kQGAoEPpv",
  "key41": "52BSDiky7UK8jPW3WKU7ppKPnQyTr9fHjpkCxFZhwEo2vgeaAr5uEDuHKMHQEJtrWTKHXsf8UQmiQP35TZx9qsQt",
  "key42": "2Qinv2xRFa5AeK5DKHiMBmYJWQpSwMDYFHzig14xoRMuK4fp5p7eqers1DioRKxH14LL8DxoqdZsveKLfqgpLmWi",
  "key43": "91aJNqV9gdLcsqqeni2rsLAHoMo7JEB4TSZqb6qtJsLtCFdQt3uKqkdvgvGjDn7Vi87fqztaT7dksXsT12iBpvt",
  "key44": "4Dxe1hD1fHCyCVWtAdacJarvMwR9PFMDmAxPNLuiZNYnfi9MG54CH8bu7ZAhkZbStthDXBMCnGX89VHAvGTAZEdN",
  "key45": "XUgo1wcY5HsFQ9zxPZUBzR2qRgu1Mb1gxmuzKjw2PrYL8ha3t2TqtASDmCXuLnvK4kJvXWPm4KrSqsgCCyf94cA"
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
