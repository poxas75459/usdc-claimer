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
    "VMenqSrsuVunc638QuwZ7fyVoMUkNXQkvpZ1eak4YvUCGc4QR3Z55YoVLTk7otVPu1f4YKfHAsq64W1ghNwBNdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8usMaaWECAyUZFFimBJ7ALbErprFKoom7HLaSmxF3by2Qp3YBZRsYVAnhCvjg3YdoN4oFW9hVCWdnMFwQm8SDj",
  "key1": "3DCDY44UjcN7Vf3aW2G7iUj7hVvYeU1Sjc1TxSi6yN7GRaz7gpcB7Boc6krewjMFT7VX5SSXU7NPPQ8gWVubjvds",
  "key2": "8LD4CVyFtAVHYXF968CCcWcSmNdJp3DgNeBqiThRBVjwm2aowjiYyqbhySNEvcLyNyrQdBCxxTy4AYzXYTTDvpB",
  "key3": "5Qhw4DBVbth2aP1LLdWXCyABi5Td3rTb9Yjubdr1nusqCc1vcYnNh6UETdQr9dLSnTkQtLcM6236bzpbRJYf1byc",
  "key4": "2MdieUakrqJfpYVCmeXZ3roc5t3mbUWfEGL3S6KEwfezPKg8wZAoorRbM6edhdjhipP87SUhMHvsvb3ASNzBVarR",
  "key5": "5Qx16HQqf4CSV8gbPTNrtJi2Gk6S5ZbknbTYj9bMPegnUCEoyZabg6aLdrKjgh9muZi55iyWpRrPht4XKkkH4F9F",
  "key6": "3HQbh28jgrmwj3ePoikJuKUJcBwZCnjfvi3JowidgGNeqcJuy3MjaW5pLdpd8LGG1aWSwmU9N7GYTFkk4RRgiahU",
  "key7": "5nH7tWNsn3SiDnu99ByxfFvqJFghnBgcqTumfgNBNC1toLR1t5YZU1fUjFzqbtyXyVRYxaYkvtaT57cCm8PNgkcP",
  "key8": "5WetZhSczhpBJjYTncEEXK2WpAMrihYvaASE5MEPtTUdmEmVE9AUa6AkxZoQZ2Becpmgd3aCBJthzhEYrFjxxFqY",
  "key9": "gPavc33u84qrVvTfZ3smmV5NrRv23i8cKTPKMeJi3cMctZsaLHzcnKMi4VtAZfgWnv1hfrKBysBRNByDYGWjEWm",
  "key10": "3aTs9ZDuyJNq5pNBUgrJGFUoNNpbJK2zqGMh9RGCMAfCkaDHKJFA93e71htJch2n9qDFM9TACd6W89uNwoiqwHkp",
  "key11": "22SkxaqPdkbabVyd9equtqM5gComgjvDdPnkDgAotbvCDJe6vCZKRQ6aBmoEFHvbUR97dCCt13TnHEw3Bir2ERjb",
  "key12": "2LkqWmbc7Sps3jvReic2NiQU9tHDBwbWGDNq72z4x7vciCHoCYwb7DuacadczYzu6gTaSZy4a3WFtX9hmSwxDM9y",
  "key13": "5thpzsVzSaUKEGRT4qy1kbVN3moHNFcZeEWyDv7LLxipJHYnyUPa3RkjswxKmaYWjv2dgRc5fX95wm2CVxDMfuSv",
  "key14": "5rwxWrio2vgk4XXbL5G7A8nM8Xa1p8mScQx8bK5mTye4oDUrTsh6qYbjsGdWGb3T337iMJfa7KLcj9hyAWdwZxx2",
  "key15": "5XqRsXBsRyJsnjkEGL8g5wwibBjS1nbCJ4VvqrH5eBVXnMCKmxmDCrTnvuTM2TyXYL1iQ7ydDFmQCuwnzyKYgUHA",
  "key16": "8i62sHin6QNMkD5VAi4ttaZHHR5BKzuRvUa12vEhaiQJaNnFn3XExWqorJHRsR5NyAaob2xhWRU1iUjVwmNiHEA",
  "key17": "2J5vzkt1vfnNKoADRCbHnsCAUgZLqftBE2LjKPbpwF5cMAKhNJihLsh821uWPLD7iijD21g4B4pbTjMDihxHYoiE",
  "key18": "2PFgGKirC1ydykAo1xZMSmxAF6FeaNnWHsGYhmFJ2MgWcfNWBVqYevfr3MMaQpxCaMeazqri9DMFPqxJPgfXPzN9",
  "key19": "5ynHKXeCeK14ZckrGFi1CEsMQ6s4ykcHKvqPtwhzs1mUdEd5qGeu4nvj1wYyxY48dUmComvgnVXCemUoDw1E6qix",
  "key20": "5tQD54j6oMgWLD8oSZbEZ3vDDazZfTKTS37mQS2gEkS29a7Hj6X3N2jU617zy8UCUxbEYkeLVjPA2W7EpW7vy98t",
  "key21": "5aMV1mMA48Zqa5fZEeRH21SP5afKU6yfuUut1wFNBTShqDghcworfreE3CumqE69rh13DnYJZx82m3T41AiRn2dV",
  "key22": "3wJ7w2oexGn7ztgdYw4dgKBaZmZiyLbjJXwQWLXcgGZN6iVCRSVXrCzrMXziskPoXQMAmPqxpoGVpzdFpmozXoYS",
  "key23": "2Bx5gozBi9psYNid6vq1Zw3P1yfvXTdFqahCmLrf9JJktPyRzvwnM1UNzJtey9nvpBfauSC71AD4D9berqGZrLcK",
  "key24": "3Bj5wXiyvppL6ewhFA9131THoBeAqfj6xGrighA6s5cYbAjorfPRCnvUfoMDhxXjhs7PbdUV6BTUxzRihzdcpsrg",
  "key25": "3tgZfeWzT9JmU2DYDXqCMcpaJcTWiMu77rXwUyPGvZZtcERvPrTSwiJdWZ8ff9HcGCA5QdPacgVwra1rVkVXPhvL",
  "key26": "5M1hybjuCvALAaTQwZt7EyuJiE8Mu2Whu9CR6Um2KhNyGemssZkEsE4xZu3t3qqomuvj7Ux3rC86monr7X43Ewzq",
  "key27": "2Tjzrdsc4nddT7t7FwWkTr2gk6EZkFBjgpbDtp94XPL3pAdNH7BusKk6LFdGZ1oa7VGhF2rPbvp4jCchkvrTUxCK",
  "key28": "3fKFdFRF264NvDUgGxxZM9QMaA6EuxMwPELEEbScFLMFdQ3CKG4iALNej6xZmrqjwxogj5aStYzWgWVWJbSHvv5r",
  "key29": "34hs9ysjVMjk7zJvjVb74SjJk6p84yHC6MYqZ8GSafQRbd9AC65BTtNDkXb8oSpw5nuuhi6cvBVstHzNCgJsods3",
  "key30": "64Q4bUYDoG9waJ7mWd9NtWdH9127z7kpdnvr5TzGvdzNK61pKTWqCMNck2jB44CF8GdkPPVe1n4DGzCbEFqqkXRp",
  "key31": "2us9eeZNu6Uu5G9AByXTLfZYeEv4j7dEXL8isFMRos6eMZU2QBe17UEeUYGkeVGFr2HQjh7zaKp9ZhQfTScDPLa",
  "key32": "2TkSXNJtU8NCZoX8v9TposVtLtksSUS42dxJV9M2HYuKh4h6p7kme6gBBYkRvDcVKocA8LDhDzGmdQDLc9g8K1HQ",
  "key33": "h6KLgsK2jsU6dDTJyyfSG3edDutyrSaa1EE4cLWjqY2MXioee8i2PMiXStiXn6U17AUS3jdtHwTZhr7KLepf3Kr",
  "key34": "363WtJG1owdzEdFoYMRLfM8tSqbcXu86vpkKZEt9AwgyzdD7qw43vKSDKM2aB2wSBoiLQ1Auyfp43onBmtvmmqBg",
  "key35": "51UYfs8TvfJ2ZVzPyfCaRFzeU5fmUXP3abP8KGxayCy2b1LFrcvPajGMbdpoAs4xUt7bTkqPYzCfFnWHrnXk8vg9"
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
