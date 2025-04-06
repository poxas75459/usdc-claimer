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
    "3V7L8oxUmynC9WqJcEhyrNZ8Sxyk9QijUJaNZycPPbYRUSq1JKFYrUmunNGmC3SJ43Naw6ihSTYnbvJFwFH26wBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3j6WDC7XTiEgCAEXiix4A6GANCoFMZVPSsQ4QidVqKBJLgPhsUSAxTjFgkDVjbxZxUX5cYmjKiqtkwiNXhZGcp",
  "key1": "2WH1mV8WS3QRNaCRJBSNgQ5J36MQyVKR5WADHurEfjfhn6KJ7pTGtd6qankNGL1XLZLtm4hHcVq81hkTR2Vro8hT",
  "key2": "fPUoNJ14giw43tqWoYbUA4ojUhaHRwyZnHjoVewRHcdFyQXpzScerKwdSwyXA7QVSZP3XvhBzhZjurqepNRy9NK",
  "key3": "3PP33gz4jX5ZFtpQqwNCYs7RD2HghqEhF9WE7tbBL2xs866bCT3ZJLx2kDfahF6vGzCaUpw1ortwVwaZ1Z7Zbrwp",
  "key4": "3hkuWFv6Vdxs7gSP5kBF5GWn6Aj1czQDVLhx8Zkh8kFu7ZaopvphGYxHi7PqhWxenpHpQwRWFnpget5ky1AiZAi5",
  "key5": "x3FmdUBjQpFuf6tgNd5AMigmQubguSb4dLc9XVH7jrEbMJJusTCdF9fbtrpzMFu5rXqaVkYZ9wd4EMWymzavSkP",
  "key6": "5hDBgFKd1cczfenZy2gwnuizkk7S4H53FbAeCZxRv136URC2E2sB4bDfKEazDrugku2kWijkBhL1vTZCMWKeP8L8",
  "key7": "6Ay78dAs3oiNVLkHCixrTxxe8zcipbeRTVSaHLEcMjH2c3ePCG3tDmxJgwV58MwruYbZhMUeNPWDSti9oCDn3qZ",
  "key8": "5e6nqMEbnBeXimz2duXA86whM731Zd84NUz3rwXeMejdMtvLTY2fDmQmRktr3iGL94WCpdGmxpog2dcwBQrpHqCe",
  "key9": "mAVP1KAZK6oy6b9WHLeRb4ZCvdNGzXo3HGDnpF4m7xkMjuAi5p6NqMyiZvMWkXAw3mUZJcH1TBq1MHrSmJuPMQ5",
  "key10": "2WLAPfE5cyXNwQFFTw6nwVvLoCnQnrP7Zaq5j6njaWQzDTFvLgoaD61yVHsUeBUSmWe6wiCiq8gkun5LsVcGBn9o",
  "key11": "58GHw2eknUdiYyV9ADBMPdv4LmDWKSXc5oMpdSgH7bKZrCxxGgDJ86zHJWSut5VYT7xtcqjv59qw9eKuN3y1ibED",
  "key12": "2CtPBsvSXbaSPoEoivEBWMPew1wwvTXnWxLuHDTgHHonr9q9LNqwLNHbj1FwPA2myKHAE5Q2ZYdJTLVmq1JWVssV",
  "key13": "3X2mwfzbVbUFxBJboUK3GNakWt7D4GwrxSVb3WYPcSG6L1KChzt98xm6apEkPvZBKNN5Y6aKkxWKxx9HM1jScCuP",
  "key14": "32BtwS6AZqCwNFrjf8BUs27PL4Kkd8nfXMb2NaaQ9y11oAhaaRVGCfPDUDN2hRyGaUiu931wiUSeZYdPnP56XUST",
  "key15": "3wj7MZDbectD96HEKtK2uQTKz35LDqZrvyeqDbxw72zB8FrqqQbMCyBYjRgJshkuFyiob7c5NnReTxq6UVeBMzcU",
  "key16": "33MazbrGazBi2z6ZWmJ3QEXzLy3jiuEfGnySiNrutNuYZfuZepRj7rHgkAYbArTYF1yqdPyKpKKXhb5BMbzsMgor",
  "key17": "5fvxRPDnepzix3zpWFSo4CnG51oxAPSvPDtHRMaX1mZVn8m2C5fTdwxgFE37QFGjWYLu5m5Sb1Aoa1jC1tdcxLTC",
  "key18": "VDU3tDt1cx1MmyAKxTy7mVRcs1uieJoaYSfYwityxdctAdPBvKcEuxXvZvP5WpzdVW8sQGuj723ahaWjcpHwWGM",
  "key19": "5sZVcgxbrPQTHouK9HyDpXW6CsW6K5KqGHSGPkZ8fDv86h5hq7iJZ2AgFrUTdxqJoNgw2fbPsLR545J9cPXz4Zpb",
  "key20": "56HUmJnUt6y6TQbnPGvCkNnPrYKTiaps9FUCLMTbtivNWZRnp4Fm4SG2zWPZ9pVh17CSGk9fHwpXNzEAGTaWjdh4",
  "key21": "QEPaW82mCGfvKu9E4YpEZ7NUWuDLWy1zxPdzu6mH5HBy3QhfVUKyQcCXSNsMgm6n51qTmkYLegrc1Kyokk2XB8q",
  "key22": "dUihWuLtDnQs6H5GRvqhStd1Eu7YEzAtEsiNS8QEtPXWETqv7N4myVxJ3ctGrZSSMKD4sNhZv6vStropBZbcxrw",
  "key23": "oSksc1w8bBNZzFtMYcEDzC42QWJJDcwp1dM4x9wCnvagEpmH4UJEx5bDdJore4n4MRiKcp2cqQ2rGhJAhWLnFXQ",
  "key24": "2Nkf2r5AQAHukAtWKLEX4Snk2hi4Ls7jHmhKzDo1piHtijvz7f6tAk6sEruTbLgB86vwQr7dtwqWv63yxxCyMFKQ",
  "key25": "3wvJNk8Nhsayx3bvSG7XP14bETCcbfUwuBDFgXSV8K6XQkpmVbUAqeEVtcX2aMgFhtKh1a6epSTjb6xd8sSoVwr6",
  "key26": "4wA9UD9R1DP85JSUFyFLcgqBB4KxRADv68F7icXFDwr7fmdvgksPwPAEMCZpAz7gc3zKKT74Fbcs6qsdQDFT7Apw",
  "key27": "4sq4hbyH7AUX778gRbjKpbJ1vNFCGiEfFu3kQMP285P7Uuw3rD4tN7VRdcZWhXpPbe25widbEH2wCcxo6yKdHq1c",
  "key28": "2jEKZN5pjNWLXu3qCWn6W4GyMnqr2sW4RSE1iQmgL5E8PdCQwfhv2C7vr7iwKuMs1wrnhaCBVDcikruRmBi7KSA4",
  "key29": "535SKtQDQRS2HtD9igMgkq4krmeWS8xn7CvygKiHk571LhnKc6kkvT9zVcrhH3CAhfU9GpYZ46QPTGHE883iqKtP",
  "key30": "3asFX2YsxfaHA2tzbzNfTXCDPiTjsAv55UyQbRSShx1bF7G984wcVZLKdMDKrJCFfPnqh2rRNamAN8yJVTohDCWZ",
  "key31": "v38ED2SQJ4nQLKzvksG2hjd64ayA1SXdK7HTDAQoACAypyqcgiuZ994LBj7uSxj7bjwhpyDuSs9hQNSJiVSpexG",
  "key32": "FnQFXp7HVJAXtmkvA4njQpGyaFMooX1pbsi6a2V1a4iwrmGQZQU61UVi7WdSYKXTWwjxoXHvv1RMi6si2LJkCXg",
  "key33": "4kzdbEwJmbiPbzq9S12FL23mKjqiYhDBx7shpajhu73f8p8RF1P8AJx4FF1yMs1nnixV8Yov4Gu1BB5peaK7yQvj",
  "key34": "2u6h6CYYwFa8Kk6GY5J8DfBxq7W2ofaE4GMFZ3fvFyQsM1CYh41gbNkncHzxRTi9xCnjM6L5a1u7MnX62GYyCcA2",
  "key35": "aCCMs4vXwouhGYHS3E2PnZamYnDGz46R8qxkio1G3dM2UMsw2wf1WVu2Pj8swognZ1j7qvF4FvfKLBZaM1Pf6js",
  "key36": "5nK5DRjwiJqGddxb43tEcZZuk8FJNMg827eRR1jd2qi2QEtqz5VzUx8YHwojBUDNhou4RXhH7upxatUnST7aJgh1",
  "key37": "5B63DMLvqEyAUax5SiKDuwUJPfx92WxwuF2bXdj4nfQvPGxP8aDVhwBgDp57mNinYJKuc7pgG91dD15LQubWhvK6",
  "key38": "4E7CfBrjBEYb1M4iX9SebwgyGbE7jWKus9UVMYAionsbMyXEkybDhXcvkGPGzHXmMtVKVRMES4A6wxniBjQDkJvD",
  "key39": "3ouDGDyyRt2oFEJ1fX7zqYXdbnsuDH1w9BDiwNMFMjcucENen92Rafh5FTAnc2nWWT3JjqF9bWKcsvvPTWFtBTmr"
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
