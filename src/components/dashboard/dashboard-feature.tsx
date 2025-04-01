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
    "4cjLA3pT5ubaDyGDg9AS7Rfm5zq33qt3hLAa6m2QRqBQVysi85NnkZ5kayuGoWCvWt6ghDV2a1EWqW7wk3wmcM6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4si59HK1WVHyDjJhveHmzvSzCp2sFyLaT6aR6EYzAxpfjsMHuhtwvsMQNA9rfW24mEroZNok8PKxm3vTbx78PUne",
  "key1": "3Ckf2Ly82pLxA8LgWGowiPAiY9k4EmbKKy75fUt1MFWdsuqWDW7gfoEHekYWXGewPJZth1aeG2nAP8FQWZpKjrb8",
  "key2": "5c47vKGkyeZ95q76ApoTkMZUZrtofRnFtzeTpYvCPNN1WXTa9Ac6SNn5m76cFEafPgXVBBWH2V6i6A8NGqVtAtGk",
  "key3": "4TQnzkJ3j7aPfgirfRr8CiXo3Pc9VCycgwgGMiJv4za9Yp3e94x7aSoVj2kNMGe4Z85zSRQfxVJSRPKAAwThv1zt",
  "key4": "5enxMJFshW6nfbncQYeUxMvBDisQX8SiRhUNsowbmXsPr4HbFrfNHyx3qedYfdvSGSFYwtpTyBzBvxZP5DSzyzHs",
  "key5": "3Fe7akEw5RKh8Gn86hejXg8EyobQZM96x5pMWavCpMLmozrnLJxtj6JRivMSxXveD2GPFbctdr4FqTZUVXp9mV68",
  "key6": "3kaaCi6KmAfSasNPteigEdibD5KX9Ewhm7s5G6ufQmuajwGBmrckUL5YasMXR21H6VJYGaVGjWDpHTPmvr1gqX62",
  "key7": "uV7Yhcs3sPEQteigAYQ6HESgrmdwYLGqxv9CKTCPeMAkU62NLtKMvQSv6LJHkj5YVuzTonmwAZq1dthjAopbZQm",
  "key8": "3nrqqtrbAz7R1J4iwpUo28ANCzhEWNyyUfEwjdJGXbjfav1Suvo2535qbv4DYoSbovKbbcLTzMnBkpi74kRQAZeA",
  "key9": "aKL9R2jCB9DcMPoe8EA9XBRocM7ne8QJsYhBbY4sez8LrJeVWhW8oCFVWf89RVDvxh92MDMtcg2zm2V8taSKp23",
  "key10": "DRqSgJ9LV4FLiZ1ZdairQdiK2YQfb2a9XygCZtRm3ng51hiT2H9NoBb3LenvjJgzgm1ssRFikPjgLaG7dU8ZdT4",
  "key11": "X6LFDNnKTybGnBBiER8VLh1CRJkP6zC2M7MoHfJrTciej7h2HDjdkK9EKSBx21PhEGi2Ydx7b9yHDDFne1wNHe9",
  "key12": "5vxuufmG4iTi4AJe4bPPgXx3cQSXVP4LGKpudtRGz1UhwGxJJkYtDXKYjn5RnwgJinwtfLWLHrLh1Hkj3rzVhEsb",
  "key13": "3VatjA8YRTh6TCThSTwSd3brLUHpbHjHi47Mh9gPmNBqdYs2YjV1SLQwdmJogTzPcfXVnzpbS9mARcu5xYuyMJhh",
  "key14": "5PtR7RUJfqJspD8zRYb79RoJspSqkxCd8kXJjJoqa9eMtJTCB4joAfoLVwZvJGtazcvd5vJnEi8FhaCCb2Q4vm6S",
  "key15": "4pECtP9h1uy5sdHLb3kVi23xRpHrj5mAZoe8XRuXaGNwKnh3vemQ6GE6AsNRHnVmbYYogTveM6dcj176AoaB9fSY",
  "key16": "3uNQwomSJ1n3nJSJHt32wvLtJYuWWFhPy5dR7o498euj564b5gE2gTZXXRMHrVbQYUm4qQBmWbThbAYuWyrprpfA",
  "key17": "3W5x5oucMCzXgDM6TvW9Dt63snoRAQxGUCLKyxXaL9cAi4gQDb8XLBhEgsxpMyRptCfzTf9oUwd8gZLzkfAVwDQe",
  "key18": "23TGdtu3DFgiFo2S5qvNYkrDsXLVD6BxNXYckWr5CMj49ZYinktuXstBjZfPdkWfxHGhCeViiBC6EXF4Udt3DtbT",
  "key19": "3PcjCGxTWkZXyMgHnQC3gLJdMEeCXwHCwA85XGwW77PTA5XoreasMchZNYGD5jaBrFbyevQj2GEVtDvS6Yf6bM2f",
  "key20": "28SuFMbSd6FnmY9FtLAeu7s7HYTEsGaemHJiBwqnEvQ1gW9bAdafzrnJSf5XhBRGpFtozD443R77Yy4QTuLZax5R",
  "key21": "3HsCeQfwCWMZPnQPzRMTj1S93xVwAhgyCxKKFwzLAQUFGdLj37udmn4MQ5Gi66ytpniBEK8WzDmDbBPtpszV51xU",
  "key22": "5hPWpfuaDwFATGEYaZCU5RNo4Eq2wVcNedu5p2rP4wS6xb6w27XHyvjByZs32sPUKNPAo8iNrfgGFBvC83kFVj1p",
  "key23": "2qbH7DAn9HTsu7S4XxiGP9kxk3FieXTbhxKrftyjUJFNJmJoLzecrgjMCdMVY7Nk2oNxss8FVfbivon2f7riX9gP",
  "key24": "5HsriZCfk1iKmbmDNQ5u85FgeJcru55NyagkufUzfCujY3uX1RDHqziKoTbsbwW2oTs5nwDmdHBf7bRjJEZSTTGv"
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
