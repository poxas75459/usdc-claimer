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
    "UQPPjYt9VsicPf48bBsy2PeDVK3DpgWoUuh3oo9VCaEN9BF2goH7MgEfJcGCVDU2UTGjDC6C41CTw4TALmmWThZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BujSX6Zwk5EGb1SLbhtEsRpPWeqGkJnDkz9cpwMU5i6epE4sspJqQVxkMrZrvM5ffZSA3RGRHHHnwMbheRqBJ5A",
  "key1": "67JW9D66HPELRnfKfSc7fz6os4fMqAyDFCK64zH1aZAZ8it886F9aKReiXpx7heCR7JSbRbfxCrYHzefrYREccLb",
  "key2": "4vnDDm6w6GWrKBJ4wEdX9yN1Z2eyj52FCz4afhAPzZXxCr1cTQ6SHbANoQ8gXWxdiMvnnqio2gBSexYGKjrZxg14",
  "key3": "41LBWV1MW9qXTLn64RL13BZb3Beo3mjkt2dQfVftuVHUPyGpT3RTyhNcLCt3KyApZYcJ5AvqF9fYSNrhnU1XGk2H",
  "key4": "5uxw1wwBp7KKB9bUtdppJN2LcNk8JBQAwvoan5H92LmVSFzmgAP8nZgjNALHyePHNFzJ3ntJyk8PcLqpsx1aiUQw",
  "key5": "4cJQ32d5yETYXJ8dv4Mmta7DKXvCAxVgwKm6riusw1BqwDyEiaiMXeHBK4UyhCZq9kD2SK4WP62b1hXAQKCRo4fr",
  "key6": "32cQ9E5Ayv2b7kG91VCcjRTPQDXgkZHjY5iCweTL19UyYC1rQwJFnCCYDphUyzh8XpKcqGZLKNZRs78UrMkjsKcV",
  "key7": "h8RvrPciiSwRXs1hs6QLFy26EFJTYzbSgLjdrxtZj2h3bMXoZ52nJpBKQ1LNz2FV66rix1uDQDbHEDYRtsingAT",
  "key8": "q7ZoJNqEnGQfjcChtJF3RVPPMokB1aCt9Pjxw49ehf5yJucYTintNmPvBAFtK49J4ht83auXXhkjdd4yvDYB3kZ",
  "key9": "26GHVFwh2fwGy3QfvKgRjcTJER4nanfD8p1A82FpzTXbm5dcvJ4Px2xLpvRj99c9uRgnPFW1ACqHueqhKTLEsQf6",
  "key10": "wqzvUnsNsChcRtjcajGt3G11mCaKBWqdFcDpLgj4VWVjBw3ZHTxgoUXq87BzH3yAtN7Dtia9gNfX6dS9P8JyN3d",
  "key11": "UFYsTEbP2B7VgJMyQyDnN9gAusRArDS75b1obK6CTQsk9XgWHHfCUSM3uAqR1jWzm1yH2Emsa22F5c5PsBd78XB",
  "key12": "SA3WHGCHu95qrBmQCqQMSCRTBXUw8cEhcVhBMtTqLZha5kHKnappDgoZCZDifK7EkWgTNfsGSTzztNodS2g4rSs",
  "key13": "4CRKcGDPYbxy67DFZnyAveUAR1WhBmKPib4MppTgwL4XykaUnZA7MQ7EDovoR5xpSsnafGFTHyivTEh4cGc9cbkw",
  "key14": "5AB4xRCH3N6tTfvLqy24qk3ZW56HfKx9GPvoYPYowdNKJUzzCt6ZCP6Zd76CjwjEBUx97q7hGYASzCgtYzJWY5Gu",
  "key15": "2eKL5wBeg8DWK3eDkxMDmVYjsJaV3zJMW2YQXLAGuFwttGcrdNPir8RJQE76qxBSd3WowoJX6tDHKXf69NygoPdp",
  "key16": "3jZH5PwPbmTzn1arZCBEjzW7DyAjj44xaJGHEC7qmYLUAEmu3ZvVMnWJzzGT9cpqWkZRc3fnhiu91xjT9cNcwwCi",
  "key17": "5C5nkMo7r7t964cUyEs7W5yHkByaiyg4EVQozvEbrX4uyFgvzidaHDUsKYh8xuRaLErUbtw5WYJDuYwbSNmtfMxD",
  "key18": "33xVBAmxm2QrHq1ogLSAg775tQ3uFPU4PJG74mcnTpgx2FyhCEuoQuBtCBUoxJffrff1FCJAZHknozXPh8E8p1hG",
  "key19": "3mEowVLzYzK9fVRBgqb5VvxjipDaZHYEZBru4sswADiqmM5vcoFynvp5gf6AZ43jeBBH1ENdeMF6SqAw2YepAgNd",
  "key20": "3cE6brvBUHFezj5i8WwTQv8oJSXedUgvMDPXeQ5KGYZ6egej1XWifxnd8nHFjG6vh7vrFmdgisSFqcgRFnGeWbiq",
  "key21": "3Fo1TGDavZr5mukiJC4XD355yLRof8jFk26gU7SXkn1QpPZDcXRdFGtBFyyjQqqZu9MLRDt1ai5TdDdu14Z8gKED",
  "key22": "2QWUSiRf6TgfDqveuA1kgKUVhUjfzsvoxkqYqc4HZa5whKbE2RbLFJecSpLjaWy5HKfCTV6WVABQq9VB9zTEQ3iK",
  "key23": "3tejojNedqSo3Gf7UFFNYBDZvgFKN2mqrn1adW8BTrygMruYGqUyUu9YAfpRh1iBAEdeBuqx9RMQTWpso2enZVRw",
  "key24": "2xSPBZZU42AAjjUmZgkZZU4hbzVKEVDomqUwBNcwZgemGxqW1unBozhfXtQEMD1Kzi52nHPPJDzE6ASkUqzgxUkU",
  "key25": "3H3rNLeZBPa2SndC5rYxkwEjaCKyBZmt9esTFSjnFypbLu6VhFKh3jfFmQdUrFTTdQdiXussxgDa96m3vDSvFJh2",
  "key26": "kn47K7wh3p3aSR6kKi4FqxZXFZFAXJGTbS853ubHoENeat8dsgEcZhuf2U9bBtoiykpVRpryevsiFwipUXFGonm",
  "key27": "643nPKstd7f67AEposkvu3UyzQGsDrs4Vzd6FcP2PVHtHSQN8syVtNYv6ApiWGYuhPo3RGMcokyV9MaKM8WoPTPd",
  "key28": "2ADr2uHUgN57oufHE48a9CHB4EK5DwQhmjUzko4pWyVrgXTVg2JLqcEN4PJ8SQjEoMcrXMZEH5bvLXCzoUKFgHaX",
  "key29": "5vymndq4jJGCBZAeUL3azqx5N6zuATGNdnjFtrTdg5ZyS8rLLiieFH9nnYQkj337Qh1khUeXoW1jtrwBCJ1acZrc",
  "key30": "HZj5kCB71YEXG9DZrAnn7vsu2erg8vBpFyMe66nTfyjhoFLL8RugegsqnZf3GQAW51XWYAKNhSZe8ExC9whwVVt",
  "key31": "3PsxLD3ZNiHSVUEK2XdRZ2i6poWLjQPHW1aMoJp2qadNYu9AwdeNuBJhFzTzuCCdCet1aLg6A4np4fgVMXEGEVHZ",
  "key32": "3QbtiajeNLah4Tyxw1RQjhV6CqU2NPinsCv5hZzvgvWa4d3cGk2ZsSVwDmTT95Dz5zM5hhsTFn7asQcb5zkYfnvQ",
  "key33": "5Dnp2ZZjXME6fbDb2RPYqozTPZNVQHG5mRRv1h8qKcTzXZk6N7Pu7aybYfcCKmvkPXtHwBN5vFyyrTmwtmqLgVWa",
  "key34": "AzBNyp63stYkcUZLerQ24z1Jdo141WCHRKnbhZcEuvjfKHv7ijVj58n8KkX4wZDUwa1jSRZ8sphCdqgEdX56GkU",
  "key35": "vjkpgEggWPnGwfp9wqDRvNg1Bt7qh6FhS17HAmnDiU3mQhegwHnh25GdinoVqcSW76V3ejn1EUBhET1MB3z8zhC",
  "key36": "E9aKokERnabaMhdNABEZoqTwkgvvsvwGuEYs1crVZQYD6pFsxYesYxAWKXAxencTY7gvEwmyjqn3q15aGaY9cvv",
  "key37": "3AJDVFEtyqtFL6Qr42jxvvvyQSpxsMnmuRPRrvdfYsXE8dFgMyQmUeuXHPgg3kRsE9knuUddsRAHzsefhUPjc1Xi",
  "key38": "2nv3c1uW6phMWxBVfPaZLR2MH6X3zJscHKvGtzPxLD2wPsaGnpvT8zbibAZirkmsCvhbrCoaVqayYYJ91YJ7VNeD",
  "key39": "2GWVQ9n7nHT1BUX7WSQya84vj7StmXfmPWz4YzJLyG6d89oEVAznbYwrTnkLYNkjuYYS4iUjbPeWy1n6cTajeLfR",
  "key40": "2zvCJUnjjxLnvXynmV9uhkPMQ5M5SGoDDXovFdAFoid4cL4PRf7d9YyTHvxjd1i9LEuCC8xmD6H7uxYFrENN8qb3",
  "key41": "5ZwnY5xNiy46nFMPbVEGTbpspU348ucpa31mrRnnwrNBmTAeZdtPHEGGhzyn3LdJhPmtiRtS14dPRmJnmfafuVoQ"
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
