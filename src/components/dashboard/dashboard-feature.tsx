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
    "ja3FNxvsxruPuuap3i3We6XfExNyK36jZBWRCniiLHUrg1aytsQtB48UZSZmrf4g5vQRXpdjVgMF3SUuTo8JVvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FwhYuCL9fSEPaS4Xgo5R88DbE522BekNxAQTekUWfZguR82c15psvEDC1mUtwUqX88JKpQbNPwNBvzvJwLmUPRc",
  "key1": "3Jv8Mtyt1d96JFPLrcjYy3Y7CeKFw4W3q4YRfVbjRGiCrN1N6AXYNvr3v1eCM3eS18zK7gwApYA6gnS4VxzL4edh",
  "key2": "3eNMZhFm4DcdZyCQhhVJEVY5gykFcKhz8nCJfTrH7ePVWrM26ssMoidJDch8SJ8cfWbG5vV6UZpL2Fj9d5QLZjH8",
  "key3": "3uEaY61xNkEubKXZK9SUHwR2dQWSw1WpcDrqyQtTPYo5KTg3mdXWj9qvnDMnG4eUbdRAtEKEZCBgxzUQbRZS3kb6",
  "key4": "4HLubQhH1GuxJdf8RdL1VP3PvYtdBmLwxxCS1ztszkWFUFXs1QBV5g8vkffHh35o4BBowmRAZW79FCgakBTci5bz",
  "key5": "5kHKWKtjkonaEfhkyohVR8pWMzgquNrqtum8JyFmQ3PMJuN14DRQrQ3qviqB2Ayynk8nZ5HBausb7ABSkmguJW86",
  "key6": "5JfRn682c8RVnaaAs7Aj1ivz3D2LjQQRRm8n8nCQYT29zDZ9ymaQ6nLtspdx2UaVoHx35dPwBcGX9P98xDuRHEkX",
  "key7": "2cCcHQWGTUjQst8NG3UbsiVfUUyufonaoEXkYzags6xG1Kg7ozuJfHhhjb5a1FiefQu9reyyP2BbfFL49VCgvvgG",
  "key8": "5gUgomLeefiaaoSBoYDf99bPiSmRJ1gjzsXHBToFEijxNrNFuSqycPdQpJarN1oQsYjYtZXey7S1DribAE9FnoHP",
  "key9": "5NE93DmDCfzjp2BgcEQK8J8cEmaGcp82BMQm7hKpVPdkgjDXe1hRMtcC4MPgaua5sX3hP8QLd9TCyTThjiZEyKEk",
  "key10": "2bJtjAjikTjLXN7jRqMbNMVW9aw8bCnYS1cDXTeEBfGoLWnvLjm1tDvGgB38513BRh1Djy36m18HrNmCgBcgjeQX",
  "key11": "T1XKNejYw4uUv1SSMYGpf1weoZ35uwXCoif8CiRcRPFTAw19TQtZ2Z9hpPjdC5BvTBE4YR8acHbfHsfZkeqbgG1",
  "key12": "3FbMpvHUCKfXpp9JpaWtJQrzcn3MX3G9xK1r4skoAwWPvyFhSDh5XDnES7T7iHCbkxHQTPAiV8z2vaJ8xoo99DLS",
  "key13": "wYXVWroWKABxuBJB5GJGT5HkWG4mCEjKRfdRawH5DZ1DnP2Enf3WzyLBe58VZFUtBf6qnkTTU5sj5Quydjixjxx",
  "key14": "5L9qGHJaBMxjy49jV8ZChVghxjgxD8xaupH2NzHrakcFRAJCqFDecxURgw3t5pVrk3mDb3y9wp86ERSP5NBa3ix5",
  "key15": "2kH4jiiSid18mtXki1T8hvRWQW7EFof7iha49Bb7eHudVLRWMKCRJDH7RrC5WYo9zMga6UwexrLofGxuYBMi81NX",
  "key16": "4fXdjhkZHphDx6eQRE1PHNc9KYKGFRvynWqoVGfwccFg12UeBJCrk4kfhJPL7poywKsAiPHaRxor6sBU35th9DtA",
  "key17": "3dnF6Z2CknzuQJpR2Fn4aqUTTWycYBczQ93T4v2iduyHHDDC6s5S2zBSYjVguzsRwR61ZrT6VXgbSJpThoJeyTjP",
  "key18": "4nXXEU42RumxD4QVwRfDCGLRVZXwaLqhmQ8g5bbsWYZBPAr9qLs8enqAHvzA1CPqygSmxnGLf23Z15og3BXarukH",
  "key19": "3FjfesDTZm8HiMYEpc96GY4on2iFU6c5tNE3cXtvaNqFJ8QdGXaYXo2aBhZb8A5NJvP6MgfTodYtyokxNchCymJv",
  "key20": "5Ww6y4FG9tt8YATRyGKwwPWgmHGuUefRFUZeFLWrnnfb7qwiz2jyM86Z4gJB6WTwXDyBjm7SLQMBVGvF6T6dTELC",
  "key21": "3VbbfWxeziuCVk5FRQFLp5una6TUgefNymQt17Q4cKCDP8ctD85461qHzBz5jhcWibaatoXtG9zPzCRTjgcn1qwy",
  "key22": "2rYYkUkPm5Bjjo3ocNggd7DJpniUTZTTfHYA2jaYAHhsX5hpgneYL2yiJrjePx7rdNCcWWSn9cbFwgz6RX4e6qp4",
  "key23": "4jN4NhsZiTuTiaxY9841JNd6fYu6nF51M2sTqHr6CvtHEikiAKTwmFAUSwqcX8SDQgkdWSj2Unm37VXrWL8kHuW4",
  "key24": "4d3fzDJy4Q3NdE7U5SLUnhCXvh9211ZrJfCf9kBipyG3r6xXT2uV5QTtxirxLCvr9o1WLJcg1qqi5mCmLhfTg5dU",
  "key25": "5yr2ibtdj3ZFcia9batBLUfbDAG3pMobaDmAycUGBrFUP5WRriVLB7ouByn2wJ41WaEjdDnStm4TCt9gbcwnaB5g",
  "key26": "56nvKTpMVDad2upTHCNW3HUuSuMJkoB8LziCW39WtR1N1Sbkdz7Cp5xiZb9ajPKZjGH3L6SixqJ4GCaS5yh3aLqm",
  "key27": "2upQhLTgKHEzJDNccAw6nNBomUMFMWeC1HEWCqLWS6sUEasHTETFw2FkBR3YFt8UUNQYzxtR9PUTcSVBT1oTCS6H",
  "key28": "4XgjV4ZzHfBc38ma9qpDsneq3PdBPNAwr8YSGyzA8bCBYjD9TmStDZ3qJCga5DHLqRzBDK9xjHCuUDWAFLegB37o",
  "key29": "47tJaK6FM3TtUQ1HszirpS78K8ViDEsg3vAPYwFJCWassMbnP4irNHgYmAuryFsXET9PA8ovaS7PP9zQtXGLL518",
  "key30": "4UfjMw5YXyZniJg1dRPw4YCJ2fFQV61RH2uTTNMMD61RD19anmbvypjuBP3vWssYDTGP4SSw1n9KezmkfcfxMWNE",
  "key31": "4nQ2UNZHZRWzgNJbu7oEJ6FAWJesJ46oyjKAK9jmksFctt55EHZSsrXoiUMQ8SQn9Nf4vLg9L9a5QxdrCgZUACH6",
  "key32": "34oWzhEVdoeMs8d7P1naPwuVswRXyMZPfo2Aa78aTHpXYjQkNiFgrifzFVXWjCSRD2kfb2vgwpkezt1fusAigimX",
  "key33": "5d2AUecrD4Cea1DSjZCgA4GcNH4tMTbtj8UqTCcTp8188BCrWkkxmfh6iQL6LX3PfRyi1oAn6W7YWo8uLHtYTLVi",
  "key34": "2s4cLJwUigiPhgpkodhB9mv6rxUufkwowuiEhEy34jRj6SpgahcMMMkbm9tM8XTt31sTsLfo8FwPrGLESx5uKAja",
  "key35": "2vMNMTVSc5UuD9iFDdcR8F5WMUsa2rsS1yf9gPmNGUsuVHdhmYapPeMJDX282gJKDH96fJzQLmbmHVcH5wjwV3uU",
  "key36": "51Wy7fJfodVszD8Esx2vbcMenVbUQxp3JLT7DMeKCG31o8Fgn8GBTiAvEu8EmtGk1ArXZCJghuUnwtEfwhjMUYyL",
  "key37": "5sZsibD2quP9jpEz4duRRskVfrS4Sk3UuHnt6NnNDNp9fB6oKUdXV7v9CHDD9TAu1FC9S7vgfY1PSFDzYNFrAKk3",
  "key38": "3REyBXoMQDyQTjJC6XmW2L159htucV8ipTa5cPN4sbS83LXTPhspAnB3rQj9ZKskdggZvaK1dHwXHT69EqxekmZ3",
  "key39": "48wRsUpMFcdsAGExMHmCnzrtA9jXfAFMoM95pHSzFkeqPtakPvEftSqMKPu9pU9kmYMBR7SpXSuTgr8MDApPsme9",
  "key40": "YPrCpHrJ9W4FaUFZVCddKo5dKCHq6qAwUCa3he3qdwj2eCk3hapMVAATH9Uyiq69o7ZQBujKzgdxo7jQBndvLrF",
  "key41": "5vpohuuMug5RcmMPkDJPnqmws8pJCFBjK3dJeFYKsL9fqveaVXc5FcF11WECapHLStEdM4MVMXQ9XE5KFF8MFeYi",
  "key42": "57KHp1xSgseqGGZsjAJSEtkkYve2Zs7vSYAhALrXryW4bYJctJuA2wQEeLZRJZHM7HXZueJ5AopdicF4V3KcufGr",
  "key43": "2bjC7USHjisvBohCyurd1GW29L7dbtn3YajkEzv2CKZnPfDqNGYmJCo4jEP5AqZrX88DZu6U6a2nhPrsSGNxtQsE",
  "key44": "5MHK6RsoSGTrd3oiaNEZfEgVr5zTirNoHHZhr2iEyp6ktVZzD2Fd2dxNnmEdGAgB1fVKjaxA3QrFp2r3AUjtS8yE",
  "key45": "2uFcSddfw7P67ABhnJxXo7k7D9ksXEtzBvNxexWbKcoyBvfRrGCsWrSXKJKM7kGy36j1cJGsdM1Pc7UDcDqXQcgT"
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
