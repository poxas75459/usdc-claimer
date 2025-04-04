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
    "3pzq2LBiKgSVR1RJfmq4MovQKZgufLfRGnU3cSPmBcVGej8HMAv5to1SuCZAKxZX13hmYwqM7sy57yRBx7mDQg4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JuTD22dxJbxdud5eaFabb7MPY5yUXvFrRGWwNtYNA8sZjNJp2BvvSuRG4UEsBiRJuz3qJVtxaY9CGcRYGNthFCz",
  "key1": "3S9rpGPGp7SGdAUDazkq1CGrm6eBSbn4Dvwira7fxcKPNBH4XLdCS4nh4NAdLJd732TFwgnAckoMUcKk45WqfZEV",
  "key2": "5GrmRrtSbf8e7icrSZqFokn6REuQ6seoCpQY7kmxbQeuHtXTETXAu7kLbQdEfCgTQLbH4CXMATcWYqzKPtGV2oNq",
  "key3": "5VCZE4oLSvEYoXKWzGfjebBFEZoESEUdhg2ZBvWn8gJTtuye2xYkZi5696xre1A6TQtyzWa1Z8mAeo6JivHMKt9k",
  "key4": "2jYrBEx7aw7X18vatwiDrvczM1cjzj1KppovJLimfxeXQLgwLuQWzBZzC39VbTLiGgRQGqu6WmGx7b9sW4W7cS2y",
  "key5": "5C8CT3KpLKTrC8V6AjtQ1emQ6SA2p5ppY7Y1eav8wmzxtwsyy3Yjzh19YbztrVae9jGrhnocuAM8XVpfbPYoL3mG",
  "key6": "Wk886mn65obPco3EKvpGzvZLeh6pEA6BEta5wqsFQ6yufNWKavWM2BxQ8Yz8fauLuSgdeCPNhQWdWYohxnVv7m2",
  "key7": "3B7v9oqbL2tR3U4cnGZ7NSnZ3AEhnnm6mjAfGpKmeBmg285Ec8uMPKndmAudaMByhZqpVZ2gr3t95iiaRQbWZwrU",
  "key8": "22PMQcAeUDERJ5RwFKwoGVQnYM4CDb7d6hqwV9K6rE91owJYQqjFqY5xq4APYtALWvkfCTBqy12F63bpRf1yBK5v",
  "key9": "2etaDHH5n5xPsYB9JW6fxhSpx9F6nv6JmEJDgbNiPkjE2LKxJHzzCtx8bLQKexti1iLCYvN9DtBzCgtx8adDiZqC",
  "key10": "5aCZQMSSqAQise4zKEaGDrww2LKF81mHSo4zG8Wuvh4Swos1krYCE7dkwTznextRmsWZx6WHq84BbR5CKXBdpADP",
  "key11": "3Hf7HxHgtF7Wava5DGq6QHbDotGfdQPf2y5AZptQSZZsQwpYkYgtSvXBn2UeTvYUCVRcryPKfMWBF8UrZ1RRSTin",
  "key12": "3S3smTFWsScadMf7735QkaAGhrTQFCWoDgJBygMarHEvfadDvJwGoqThmY1bAfsiR7nkHs9tydsWMgRbFp5P9wUP",
  "key13": "3U61taznnfXrotRtcEJfM9VMDcguNKLtCdx3W1YKnAWSYP7QDUM7bBuwm2PhnF7csGDvfefezKN3FFSEG1hsPub6",
  "key14": "2GPN5sq3H8f9Mgi88GaT6iuM1qSynqaNjqNqmUotkKmt5zVhUbF7zDDzu8vW7epdhfTDwEMjHptjPyv5gvrBFyJF",
  "key15": "2H7ABKU9Fz6NfRhV21JxmxUNC4GXcnSTWbDNgahTop8qgn1ZFLEdMubvgqjMNcu5ZbtuDHbe3UUezHSCrWrXGWJB",
  "key16": "4Q4zePGxL9WkkLvvm2CCjiBHvCt3dHffAWt5eLkSLjBLGMLtaifVa66ZNwLKSLKewaad6v2FzGRqqi5z129h22LD",
  "key17": "5No3LhrYdbjgjWYNEbU6W9y3aanDn2YgSht2A8B1ereoR6pyi8G6DssHZfBdi1qTBtAXvgVvRnn6TJBckTgcYEir",
  "key18": "AFEoUSopQBUs6pvbHiA6tfLNEBYqW96amq51Pyf3gZiNb5o5f7qCMYAcig2VNRrnMLHa6BZjNyWJ8TEfrkJkRBP",
  "key19": "3L1zinh5JpMaCeJm3f9Py8HmsjHRc3QR211NWMCYQUqaQcZiRnh61TVQGCnTEVKayYXVqc7GVBf54mnAKN5gPxLS",
  "key20": "Uyi5tEQnK6Y2f2PpoZuVqXtk5CzAdiX84CwuyKpPvaDyzdY91wKRNmSnKBbngevgQDQXtCM4EHXvWggH2cSF6me",
  "key21": "UxE1G1NfZpWLwhh11x5wK8TpmK7GoAr23euhvTL1gErqqFxPhF5iSfpvdGpuAVYMqu3Lv7oZa59YHVhseH2Yy81",
  "key22": "5yRNb14M54CVFMBMRpDuqA2vdayQBjKB7MDivdqc6YnPuNRVyx2PzuhNXDod1zqdYimqSyvE3VvwrByGS6XPXnuC",
  "key23": "5VebJFRhuaZAcksExyNwV5XwqYMHMaJSDHEXfD6pZachuLKV944rMGmWHaZ61niYtE4HbKiSQNerArsZ5xTUj35H",
  "key24": "4ypDU7TX25FtqCgdXF62wMfcoz4jyjmsYTAR1JUgyx5L1wG9m3GnCdcbY53aSXrcRWRFqNEEC3i23A7dZf5JnLnY",
  "key25": "3Vj6BBJAzdnCTRJi6QTYGMowg9kcDxX5UdqMac3SkXLGKcFocG4LPxZxaAbRR9uXYpJ4RX815dF4xFtkFW12Ja86",
  "key26": "4KGM1gtV5DJ5D62EByG1VmzLYD2fZh1afUAHS652YF6LkTgRFb8f7pEcVKBU3GFH3DSiDq2GSvS251HxZkzXKSnt",
  "key27": "4AnDwGzwDWNJ4iVEn7QFWvrA3oZUMUKU3RoGky2QG1BDpqj4mZuuTpC8EmaLxWjnu1FgV7Ho3sYksubsZ4q4eKGc",
  "key28": "4wWa5QNccQkvsMYnZUpttt2WThktkmZUXs2sZm6XvbrFE9AGb8QigRvDyrVNdXtx9eDZy2jbg9hR7cQjxa4gtRsA",
  "key29": "Dpf6uaxP1Lo9763xmtRKxUsTbzV87KrGnGsaQogv5wvaXdnEGp6Zqfx4L2j76kBUGdc1uUhEPgCgkknJDT2f3wn",
  "key30": "4aFNj5d5RWzQ5tV5DdKPAi8JYAgGoBXXWxHZN1PhgJrbYoSrcMAwyBdrSa1fnMo2o6CzzykXXa2aHxacLWyKF7HN",
  "key31": "5bz8NR7a1V6UEiqAwMQhT9cZZJKNu5rtMsy6D1PCz99xMb9upR6SeNGVS27iTR6AeghfeuiLVTvArgX4kEarmkPw",
  "key32": "6372CKMoBmdP59z16fCPM23ZgfcnPmTqfeUaQhG25wyiVQFT4CLU6cMkDW4diVxd96gLWvL49wGwk3PpQiyw2Ueb",
  "key33": "CwG6BUdBEcdevKbTrhL7HiNowbFKfeKYfvV9RrKWKh2CZJwPNknsGofg5VoeRYqbp2rVJRcgnrLbuEaPjWwyw8b",
  "key34": "3TxajiEfjdzjec7krb3miWaPtoh7bSSSp2jw8sR6rnwrwExVtc8vQ7AdWWEidT2ENTTmkjugwid3yvwfwsHZtHpy",
  "key35": "51vhea7EDrpTFRcP1QQsR9wGbQnkUtbEuXPFCZfMuwxGwbEyNLKh7Q9ReZCn3Bv7uxdHWuY7rCh3exigVLQJMQzy",
  "key36": "2dHKjeW8CTiHC8BAbmHa4nNnzKCZ9aYmNrtS3pezW6kWNP1QmPmrTJ4QA6wDTHn3WniiKP8z6zn1NiZ8KUSABQ7R",
  "key37": "Ad779zrSPHPrHBXd5NNphgpm5FHk7fgiDgTVDt6tRLs1Vq8L1FpFixZoL6YYgQnfYe7bBpb2JkSVGtV8M1ny5hp",
  "key38": "5FnUgwM1HmXNLYzQnrnvfBEUHU4RwrUVCw8mmXmHox1Z8SaaPggemqiX2fkiZjezgesqbPdqzSpJgknusHCreWLn",
  "key39": "5dvMtK34SnKFGRyj8KKnAGuERRnD773dEbd49kGJqmfrzBbtbtvRNSAAe9Jo14XWGgYf11SkBguSYzSgA9LpK5fP",
  "key40": "3tDoamvXVqk9dnSCUM7QuHXKwnA31gBT6UrehYy2v6TmhHyzrwvnBaYKUFeUS76gmEMSzds72o4ixJLTWtSg1VGe",
  "key41": "4Ku5mja3ZDx4PhTE2vPkSBLeCpRsJQe426f3utW8CoGz8h8VYrNHcs9WQtJJVRHHyMNfaNjyNd9YkpHMH8JRrcfN",
  "key42": "2EdmhdLzboxL1scm4LrFMtVapntFrJ8DVbmTfeKtwwqvNgu2DvFiwfrWKqnoThFc2VVLTFJmdAT5L9KvWkCnUAUc",
  "key43": "5QV9zouhaSAzrgDGZv1K3Gx3nfZyVSVo7jkJtvbpdz4ASCG5gmj883qVtRwbh13x2Pv217Lh5AfUCrFmonyita2s",
  "key44": "Cm3fsc93SVmJbqvMkxDnabgNVDUnqfP5VMGLpRzszMfMibX4ng7gpL1hJWJg4PwKM18CmME2k4R6mk5g1fBqVyS",
  "key45": "3XXAZD9scVKTvBeTA4vrWDbwjJKWS3BmJ9p9wAZ2VEbf5SA832j6QGdE9nwYAhsZjJpcsYcQ6JWnPvEPHVbjQNdL"
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
