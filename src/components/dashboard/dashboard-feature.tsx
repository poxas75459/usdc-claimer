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
    "2kmsWZz6kF8TGnHqZHcz3gbWtyvxvbeCGy8Ekmq8ceqcyAGFKhkpjNBZCfxSaegEbtv8gEPSQtAY3LiJXsQkqutS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jb8C7ea7MXhNCRdmKFe8QDEKSjjUWwuhhPaiSMonD4TXATh2kRSUw4AKLhW3Z4KFu3sGazYZyhAd6pYcdQH8EqU",
  "key1": "5GgV8zE339zzuZYLnuqe7frZiYKadp1fKSiuBB2bn9yBaQxGLgLKiTV9vffDjtSgwHsDDPSQJmCrd75b7vwEz5F2",
  "key2": "3WMZ9YRErjGVn48DJ7cPHfWRuSmMwBTF61HJpHGMU2RuP5EXPmQEjFtgucb1zrG4FPxq4mTtYA3MbCgdUgA3PqrS",
  "key3": "vXpqKxnPAPmztRRerwk77Q8BeQDqLgmEuPZiGqPcecs7kV1pq73eQ91HvndvcA7JYamhW7CJmVcfnnbvfgut4Pv",
  "key4": "5D1FFkLk2BBB32JmeFgc3zPEsP65akTyZjQNWZdSgBfVpXcbyyjWLcx15wwsnogVF1rvCELVgi45peKJqX1qRGoQ",
  "key5": "2Ugs4MoTT1JqpkCjQBF758YS3QLBTQV53t4GaVShN6i7TAhgjFNmgayPdvYA1Ev2v83qRMYjEkW6dpLYUWdc81cm",
  "key6": "zEm1crSWd7e1mGZXLK2R2P3HTDbLh7fa8ekXd4n4ieLGBWoD2puhoVnUYsnsMhCwmwQJeuhWdBhAKJUmB8ZcNXY",
  "key7": "49KnkJPtbvsuYbwCY1xuEwpmzCLuQfKBTaZTB1GuZiThawZ8Tcq1xyovsWAH18DDWBQMNkTeQm52f5jWhSH3wGnv",
  "key8": "hH2KJeeTGoAQXtFYmJLbaaFBQykzfEmhtrkzvHDPFcLb2JzWuffH7kDiifLNijhYnnCB3kXMqFgkDkeqNmvZdoX",
  "key9": "2wrQV7wvCag4WQrxAZAviNjSQqLexUqyvU6igdV5MZmKYjC53CnMNzDwWRNSNnW5KHnDSBApLr2SB93RHpgVyFjQ",
  "key10": "4sbnsMsiHXQyhznXTnA4zXUxKtZz9CM1Rk6q487opuN6bjeiAs7mJFDQQ6QBV1BZfS4p7DNZkiggi5CUPrQkqE9Y",
  "key11": "WWBhRFhPRA3iXYtJAU7fhZwMgEsEDZeuLuPtgxvBgF4bgFjHAJuu43h6XaEyLyobWLZ26WcjLwAXDAXeyAn2Pem",
  "key12": "46N4ALB3pj3PpcZ4LPykWVMto7TdWS8H5tRKyW4ddTFC4GSRTAx7GpjusCGN1ra9NxJReQ7EqUjzGcAzfMYGqeQs",
  "key13": "2NUiS6DpPxKaF2p5QSDuNaos9h7YsKd343xZW5s3oftRgiREnFnWCRgDJD4NZS2oD9MaKwQmdf7djfRhUvFwXdmn",
  "key14": "4BY5hpQdV9Rij6Yt6tpfXjMX9k47ut9FaGUzGvy2z1Lepcz13qgMjMsgzVRd8wrRsxuw8DDFnPwnK9z3yWRgU1GQ",
  "key15": "GnRNcoQz3wNpy4tPRtJJ4VG8jLKY6aGYsDHWYhSTAaHJfpzZkWi4EVB5KAu7QB9wNiqxHCeHaE6X5ppGTWQyzkq",
  "key16": "4XER22ajLmeNjTUp2nYg9n6pcx42P5mYTwBcFxHHLvNydmtCpQ5i5b9nxs4B9vEWkR7irfbJBjhXi7K7diPUputv",
  "key17": "63tgPKTTJ9BkcbLupXS91kwVLmdbRF16NhgigVRJLEj4Q2ws8Awb4H59wjGFCyEJpr7PfLVyJ96sdRSgXfBQGmXr",
  "key18": "5h3AjjDeg1sKpeBVPYgVQj5dM7gDkSJBxaAMEK9jyHR9YBq11QWB9cgNeZkQU3ADnkNZHWQopRVUjychorofCeAd",
  "key19": "3MHUTSu67jx5h344bi1xb7mLm4KKXsBqxnX4RoDt7Ji3mZzNnkDqrYaodS1RWfHERP5d5pHHV3gBLa6x6NEMb3jH",
  "key20": "32Cpc6sMvZP29uymvDDCWAn3J9WHuVtPMQvhNzbUimKiQC6gdefmf4WUbChrA3RfikdQ24vWXZiKKv5hTih44BSk",
  "key21": "5oHbgRacPD9jy2ckKZEHCTP4qMx9zPzvFkJLFikDCwHbD38T7Mbt7tSxsHod9TiUFVAXA4nofvQgJUKjjbbPmN7T",
  "key22": "5kKD7zHJofnfCub6J7WARn4LihxXSSKZMTZaNb6MRvHipRLZG6E8TaE9KAsqfmCFGWTsHEZ4q2JoHuDCXN2Ro2oA",
  "key23": "5S7S3JtwxGes1yRSXebfQZbm421iV5PxCuCeVww35ZNo3uFrCWAwvi2vhoKhJ1n3hTxvDEsh3KgQNArtg9yAWKaU",
  "key24": "2g91Edzo9U2CEwuFEMn8ybC7p9hTE2x5rGpkRaucToc9rKzG8jZCKiGfyqWDuDnAUZT9orPfT3GYK2gnGzLkgMnR"
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
