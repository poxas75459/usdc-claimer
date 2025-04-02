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
    "55QtAHsveHjoz52c4xokh3JnyNs3tTnMbAAZHKDy916kU3ZP1t2dWppRMBUqcFR88fojKFH4v1gd1njYoY3T5GBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GdLmvirdahMKNdErbQyhV1un4f8Vg3b3v1dxdVhTnFXNA81eSS93qW61exofDP7XeDdGafrFEzHpy8uoCyPBxqB",
  "key1": "YXPzec948TdSDYTitKYNk9dPcbQzLBzd2hVrPs39hCtpUDbchbVeGTxXD5fXsRQ8ffzbmVmRHA5A8EraxD4G8Hg",
  "key2": "2CqiHCmYc6B38o6we6fBRVmCe2tcsV7BmaeHHZ2bJuQs2izPKMnL67293TPwhjbTLAHefNrLJGSMife7iTRLnGFU",
  "key3": "5YJx4tYx5KMxkepPjDF5yKeXGFsvj2oTyzUK2BzBLD4gCw6t2XpZmkuyFUNsYjN5ag1xbBF4cWZjzYTENQhPiYp",
  "key4": "2YZnhm2oszW214D8Hc1EWUt5uQGWozMVziYj8dK6vgZHJnU4QftWK642dcL7fZpBTV4hg6MPhFj1sggDt6m67nRu",
  "key5": "qUwyYZjdVR2zUj1WsSNLjNA1b4TV9TsK8Xc4as33Zu41Kt6rYH8SyBBvZPh6Zku6tgwggbU4pDCvemUdZgZUh3e",
  "key6": "4XozNZe6rT9kEVGyxt4gLMGhAcuyWascpU6AoDhoJ3aecCoN99cmoNoqGxTob5Tc38Q4Rq6LXHkuDKhAQsRySybz",
  "key7": "LMwRkAzEAXxQhk4yqQGsPR25VWhjNbj3SRmuEomsbYiBKh6qCHSLsDhHRRiABQRKQtZtKzqBcSusW4jV12317AZ",
  "key8": "4eHLAVcK6Tq3uaBGR1RipHPzWJf9grNEaStUyXZ3rjbNRxbmwPNoenswL33KCVNRngdvn2JTDJEC1WzPc2n2TeyM",
  "key9": "5fm7cm3YocdgEceMWRm5ztWVgAVixWucKVnm3PKrsmtpY1xRyKD4VeYtgWubJgRYefq1BozQGbhQuMzCHvR9hjnD",
  "key10": "314gpJwcMoJsh8QsCa4xNoW8NjFaeGtQsaoJ7HCx8YFALyGu7fJb5zAim2k8LJBLwnugXP2ZbtivYkxogNYvHpaz",
  "key11": "4QH9x7SEVDhuTCMuaYs82AKAVg5SKAvWFAJmqwQ5wXoH5KLfgqj4W9fS359BC77H9XkBjxhdAHE2JHEHWa55Xe3H",
  "key12": "agD5Th1yJ17uX2Uir2hX5NdbXX91zrEcsrpbxZRSNcBhTemDH6dhayCyamiaNJFANd1ektPpoGXgiNgzjZ2eado",
  "key13": "4rvHKjQbSvn3Qg5RyZ4LKCmuj5ijTHfYswvoemVV9u5rtes8a1wMSMbBmDvy6AeU5kyLXqaje2AfhRFNNPwNHGqB",
  "key14": "4eTHQu7BCiwZmAL6LfVAtvPKw9KAfc8yGuQp3wCpF32XVzQy7UBaYDcHcZVYB3UqBmmX13WYqhWFg5nTHE4UqHwg",
  "key15": "5VPH2RsbR5vdWez3pb4jptLpJSidjv6grS4kRJdAAxJoET2pjHDaDG2wyCkpx6Hhx6bijXyEFqn2pUK8UyMChcqx",
  "key16": "4TPF25MZJgo1dMGdZWXFNN4CV9iNCd3W8KdqkHLJxic8JQrqkt6UZvNVecFKakk4UQy6zE4m55JZ7dUpSvBc58rv",
  "key17": "3o6LNBmet1TW9JvZFXHa322jVnMqVu7irqnnhW2gApcucko2pDv5h7RHaLbSrorjByF1yiMrJZeXxJ1QmrLVd3z6",
  "key18": "63gQo9XiGU4xbn7hPsqyYt5FkMz9kp3rT4hSyjA4t1PhTXSsNRfYL6XUmHAf4WJ5cgtGvNTbBxd6F4GrqXwygJiL",
  "key19": "5XHFKizbkimrXNjexGuWZo88h7XfLs8puK9BuiZZqXTXxTGwAuyjMSfpvFvAFvfZ5b5uENhHd8ZovV2zntAX6Lup",
  "key20": "5RitG3CsKKeFVwb5f1xfDDxdjGh3CvEMN3GXeeaEFWggZoVv2Amzgj1rFoaLUog661Pue2z5GDxejpLQJj2iRHmX",
  "key21": "TDM423cUT8PdXs1ySpVHSALMiwQ9mNyWUsMmAUgMVhdwKtk7XyptPJZrnroeV8bspG7HKGa8RrQZbDNR5RC8Zab",
  "key22": "4Bq564Dx3EFELDosCsCyPtR947Gdf6VfS21eJvAaZS5PqtSGnQNjadXSP6JFkCtxc5oNbj8mus43y34HXysp5HUH",
  "key23": "5W5UV2JHqfZDxF3zEPRuQBP86SgZQHTYFWEh7Tj5jjcGEKFQ6yxvauk67fiAc81DnHKtg5h2SQWjDGn33Jy8Cob2",
  "key24": "qpHLfCL9xfg42F2RNDeGBXa95omR1prLWiR2dYA2TNeU5UGVkdJRvjxP7iN9DyXbd9fdgT7MHhefy89zmUAC7w1",
  "key25": "5mMnHMwyZ7dvFYLkFUAfb7xdHcdAgZBHbayzBffz1EWCND9tjbcNtBfAAwWySVK1R36QCKbw5HUHf2dH3Dqyn4Ri",
  "key26": "3B5kYYD3uby74bPweW22tMJihZmZ6HV1BLEQCWTMPvHNosQAfBNwTaUt4AH4z4M2172dvayjboV6ChrF7fqJuSSz",
  "key27": "4wvjUwhzyFAWA5xcFp31UHspbmHJwpstHKvinpy9CZG21x1jxguihu18vK31G6YpXiS3xvfGav9vFBopUZWJGiph",
  "key28": "3XcxFg6xBCsS9BBhxYo77kC5WkPx1js8MsTAwm2CLvLyK7G87WyLeyBewrpdrcTRhqzoVbDNsosNcyu8YX5g9s8y",
  "key29": "2fHRNkDphJbzqd8eHfSZ4HwMWSPYcr66rU5i3DRZN16oAd1Qbg3dkpuiFFzzpbFpqvL32YLYNkaM36xEAN9CYagP",
  "key30": "3d7C3jV7Rpvc9rUtKCzraj2gHpRyj2H1tAALy6oLYhiK6JpM2utXQhe9GrXGkFL7ojuT7WCgcubPndqJfMjxihwR",
  "key31": "5GmDadFVodvsQdm8iYj2eRuNYc5P3QoSHTYJ9cdvCbCTN1UembGsgxvEPQbw5QkowSaY4mvCnQP6Sx7MV4wW7MAV",
  "key32": "49RePVwaWcmiAmSmEyjwCW7RnVxno7PPpiGa3tjocR2MioNBeTSGDdeV7GwC5iGeeynDkuFvUBxf3xk1KXspeMRV",
  "key33": "fTjUvXHUpu12jSDMY7ZtBvP3R3NPtxa7sbUy1kR8tiJYd9pDSS5msPCYYG632VB2YZSatE29uAbpXyocDxgnBiq",
  "key34": "31HNqD8j5QHFxpaB8okMRYxYMuz4cY1we8NXejFoDvPmWd42CtZd6pBiJAVXGwiPNqqfTVGWMabLWQzXhD74uQrj",
  "key35": "2KWPCtawRAvnEWmG8cvv2TnP8eHcSYFRcoMr2fgXmTRiNQ2crHobdJ72EYe1JkECa7rYFfhkNcoDgsbRSz1NhqP2",
  "key36": "5WJwCPMRRtvFyRekrjqnMmmsefcN75foVx9ei7XtpnB76FCT5rsmeT3C6eqQ2LWP6SrhpZbhq1s8kBP4poJ8Hz47",
  "key37": "5ig3WCT3VXLNRBJoSb9vtoeYAxaBzGFzJbu7qaN4R2YAE95enmXjtJ6r31MTwNPhS88QTzMvni2Mm9AUGaRicgxw",
  "key38": "2bDbbHvPCrrf5NbCMY97Bubv6ZByahP5CGeC5Lj2XgRHLJSSnqwfcghirWhNQzbLRieTU2bi9iVQw538Gn4w63g3",
  "key39": "28w7RJgAbM7cAnqSdMddWvy79GRbbJLQSCjRJLYau32zLZdAo9iZy1PPAfB1KuuF38WtxLrjifQLEBwX174DTUD8",
  "key40": "36cN2VPGfNjVA3xR7w4XGfCH9kRh7mkdjKp5EBiJrBDJiTey6dYFFreNndbMqAGG7RuHPtLB7jyHLpGpb3N4zgo1",
  "key41": "2D38HDpWV74JauKx7CrTSWiWba1oUcrPQLa3BTyomFAjM9iErZEsb2GYBqRzQv1DQ6TQypwyNJcckQEBA1zEVBMW",
  "key42": "3sLnnBFTzy8yQRdj9Zb3SSFUuqhgKJeWUv2oxucNMhrwgsb5pjLBp7VZAsMr6BDvahzf8FPZ79SoiPfxjLHdC7Ud",
  "key43": "2tV5gQGwo8S5R5JGs2RaXDD84p7527YofBqHioMUvTKzG8vW2CxEDdgqAwmMfpGMB5p5vv87NDBbHPc3ZWwXq3mQ"
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
