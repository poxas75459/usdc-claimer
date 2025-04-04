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
    "6bH2dqWChsPkiTpZzcGdAz14uW9fmohvxM5ESSTaCJLS6HcRWiC5Sqk7dfFw4YatoEsggAq52hN56ugDvgpQooJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qcMXCJKNEmmDq9Vh7qLuRBKJpwy5r4KkW1k26AHosQpPanRrTWsz6ZfoaFzWePBzWQWwXKnz3VLbfj6UiZn9mC3",
  "key1": "L1RZ1x5k7UnMsuMF2uxpcAXDjram8LnPyU8f4EExkzPMRz5awwX7AQfaCh8Qh1aVaxgmiefZ5GwxWza6oPyXpjz",
  "key2": "3BbptqJx2atq4th6pS4hfx2cEzrc6rJSTavFmzxgCv1PcDYWkyK1pprBm8WrVeKXBkEqngcBeNUjq7C5sKs49F5Y",
  "key3": "5Lppf35QEyn4qoG2wx9u94y4SHFgGk84U7UcmYjBT9FJHDoC4Ehdx51MRaSnE4RkvyDj1E6R5s6gcCdeYJLnNmfY",
  "key4": "5PiAJb6BJsm35c5onWvpRxwk7TGoa6ZcBFDiUrH1uUMxzdu6LoLJtcZFtASaqtQtV1aCEPSFRU84pwtPrytcEXiM",
  "key5": "2w919ywSYTktNED4xp63YgFS6AJj31afE9uYW9Qr88GbKD3ZP6EVUyWpbiN9HMf9oNgsmcKhjfKXTwu9uo1LeQwX",
  "key6": "3CvR551eiy8512Dnd54h9v5mfenwfW4ffpyygaES5yFUfkxqYEn1wDaQYSGS4Vh1XqemK6ga7uWLHn5Ay7AwQxJp",
  "key7": "5mGGKtEMHghCoZ27QpEc1TSLyAnnqx3vKD3vnd4DNAzR7uVj3kVs8LpTym4JrMWoqLpoosJxghcnCA2d9NtnEjba",
  "key8": "3Z4jhJMiy21UjGMRzZHbupGFZ2B7xN41AEobeFD3P4sD53H25Bsyuq5kJEUNeEwoYjf3YAHW4Dqu5hh6gcrfaBHr",
  "key9": "48c8cdWrFaB58oBEaa5HwTDF24pLEFHpxjrGTHGMs1BABDqkgWE1mNM2h9nmq1QnbGN4CT3SkCib6bkvmApdK1eX",
  "key10": "38ZAFA1D2umA5dC1zrvgB18kizNaxVW8EgrEnJStE9oEMMtvjaHpzok8dK11MkmAsNcBAVamWxjepSszAA2zGsLB",
  "key11": "31RQwjXNKmk6ihgPUbgSnX3D2s292wbGU466aLYVggMkPZbntYhPwQb1uH7Ag6jkpv2Xiw1e8Tf67THFaEE2VMe6",
  "key12": "2A4sFXWX9jq2Y7GdJop9Po2pYpNqUWnQ7q5eDgUDu7NqeWNeVWmdtrLeoTTbbvRHgKrxvhFN6mtett5GahtSVA3a",
  "key13": "2cGu96wJvNZSJdZvysPporKzKngrGUoaApmfJcfJXRS1Rjhymf773kGam2dkvSPFrbjEdwGy8WMSZMB1JyYhrk4u",
  "key14": "5pcncA3dwMUzACYq5ATaTypo84GmGVJXtA8T7xdrqijishARAJiVS26mchCk1rGveQx8qtEQDWbgCmpHtMav27qZ",
  "key15": "31ezMfJ9z5L6fHKqu44qV4mwewi6k7qpvQ3iUsRaeYku7EQffgkVVQsyMCMUdiyutHj6UyPQuhzU1HENxCg2WmB9",
  "key16": "4nFekVzYRwbu6pdBggipbRD7xXcK6eTQuVpjVJZCC8eBwn76c8c5UVQKCbRwzuKJWeP6CfqBcEBojyNCQCzH52tS",
  "key17": "3UAAH54dLxnMd7zs4Dfz7Fp38vHuWpmYZWXs6rCyMqELieEXvwSY7bE6SKNV1xexJYHxgCnA676yQnkN8qxCJ2mm",
  "key18": "8x14e6xYhw2xeyddk3gonGPkvttgK7j7NpMf8jSxMPsP8aM786UMCrrsCwwDd5VJKbTQVfdi1BnBaxSwoV21yAC",
  "key19": "4fUUL23A98ZoMDcMNtTUt7PHZAiMhXKydNbe4w8PZPoSr2wbmG9mAAPnZPSBrWFTv5URt1N215vTiQrfiBr67oaY",
  "key20": "62k2yXDXrFT9gPKoaSZjB5Khpzxs2diq3YvsbneKASb3osv37mtmM6TkSa6t46624hPMYwFnYQyRWr3nZUGiDns6",
  "key21": "65AdNazKXQhozQrdEh2oZnXAohytcsAqk2FweZNHF2DUf485VsTzM2XDtsH1Cc9KJV6e4jFLfno6ckW1ixaEsKWJ",
  "key22": "31UZmv8FH87yyocQJh1yKEnPNnYgUjpJiJtDCAM5WQ7d71scBgjxahujqZ3ymevcVW14fbG1WAgtetceAapiA1Ap",
  "key23": "2GryJAXAL5XydoSRSHPAhowf49cF7mk1gg4VRFdpu4qetC1FnfQfrHSVtcWXyoHQcgWL7DUmNM2g7cMvoB5rhNKz",
  "key24": "3zMtorEfYVfsoGNC2mZZ1PWysykjtvXq1HUCKLemFnDddJe6mumyNqBb4zy6a83KUUHzjLHyKZ9UKcjk9PRn6qTB",
  "key25": "2gaUEMCigyQiZ9SmLE9FfGvq1KsvATQ4VUj32a1tbZXrw4GnVeDHrBUrH37iRdMEvZYRQGTJzDNUoKnkPkGU5nzX",
  "key26": "2MyxHc2TjmFpowUqqdSNZrAbTUS9aXjEQEX3hdrzkVRXMiaPG6NQpNExAQn31ny2HhRRit74Jofzuv6tpM6tWdB6",
  "key27": "293eLNGxq1CU6XkGzLGym3kNBm6c5etvV78tP4tiTmF3oSeswhVkVzb3TCF85R48KMVkmgW8AnxVbxmK3no8YeSw"
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
