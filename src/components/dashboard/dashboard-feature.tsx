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
    "dpa8TokGgWnL9TUEVaBdbrNziK9wZqijXKpN8wxrq3SeKqjW4Ry1LAstuMgNftj68haUP6RTYBByRqGPG6pUPPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5phd2AT4sRfuXumuFXDmrPvA1jpHvHCyJuM42yjj5Ao5ezajbs3wkuqMxQyzJnwxmpBnb3FjJVmXrs4no7dqnEv2",
  "key1": "8ejvMe2iangidNoRzJzRqd28i1jqZM8dk2usPNJ6B7me1Zh8pof3tZ8iF2YvZCcYDbYKCJVrui325WqrHUZzWy2",
  "key2": "62hUJPrDw6EnvwUpzHezubSNWCHSrAZdbEaCKME8WJtGvqksR3RNvq63ezK8oG7LmeMmbye4Qjr2KePmNN91fkz9",
  "key3": "3T951XTbYeAVMMVZxmsQadE9csgzJoCecvnmtGLdoKyn7DTdxwE3Ts213rxkNXaTKoynKXwmre7UDNtF5RJsLE5V",
  "key4": "2Q2UHkhoKsYDEoZWQUroh2KsT6rdkdHrDYgJQZPgFbGgWCQJuEVas7JbeRLFkda4Fbc2ACJCBUneqA8NgKHsDigL",
  "key5": "2fHSBcmyjb8pkcnq6KxMGrUXKXZXr8dmp4y6jd7BCnhxLMvUk8mSNXxqR4stWKaAGT4n5jrnve8kDUSQiQt183Kc",
  "key6": "2BHaWCMLGVDH2C25J7DhWJ4UL9havSymRv7wbfEToouVLCPC439Qtk5TQM3S4dF4Y4ebDuYddfRndrRHYtMpQr2i",
  "key7": "2q4wB3JiDoB6gzfD5rStsN3PH9R5GoVBTrqu2y5XuNia4vJYGRUrnRtEwMjGzZiMGSpvGXqQp5LKCAhhzGpoymwt",
  "key8": "5RTBbAoFun5iypF9dw3jKHASWzxzzcsu3AV5Lt6RdCL1744ESW8GFCchEJE5n3ftzhNvnesz976DAJsbaUgC6rYY",
  "key9": "5EyYFzyTe4H3E2fvDTeKNUiat9XYFJ2fHpymCd1duVJiQgLo2wLEap2HCtdn2k9EinfTCRphUDD8yNJwaxP5R2rd",
  "key10": "2Pc5p79gq6Lc4QCdPaQpbE4UEc62VgbfTCt2ubmME4AwCjGMJFPJWnvXZrmGS8E1oDucc1ASv4V7SKYd1eMmhb1P",
  "key11": "5ANZpai2pwNLzHgo7oL4DjG8BbdLpwQdPe22KzdJeSs6gLswtuDAkm59hEsA4NMTHAZL1B58thbXEDSCnszwAzb9",
  "key12": "3FKoDzB41Avz65HUhuVh1ZVoA1VoSNexXQrtW5UeWWLP92FCPBKwXyBknv3LKDF73Av2yNWRiuSua6HLKkAmyDAe",
  "key13": "3R7sMHUwWwPSMUnCx2JH1JCtB6is4nKaXbXRabdq6GtwJzqxnML3VrjJF6oGDLMHj6PE4TcDNLeUAtvo4RC95F3U",
  "key14": "22yoFVpr63g5nR5XgHSbUgqot6g9M8spYYgDWrsHHmphSZxUT5cCyctuWxntCRUthgxuNMGeMTkDkaYXr43j34T1",
  "key15": "35uvasXzHLMN3Du2n4iRVGFW6Ra6m1ZtSS5RicqmUtYhMenVdfTUfGxvRM5grnwDupNWE8wwpJiWqGFcbgrT3gTg",
  "key16": "kRw5YAHBhcmqxqBJsmcywyMpH8bN6y6QVFb7yi4WMizxV3VzhuBs6v2bcL1cWSgYgvQVQKpo5YYRLjuMXAnh49u",
  "key17": "psNEHMPjfL1tcXezxfBPqfTXeEJWt5Dj2kHBJpReS2MX7BpaLwcJre5VqbFvRzakGnNrrfw5QfCPtwZY4dN53AP",
  "key18": "5YJRfAmGBuRcrRumhVK9zbG1oEe2uwR2P9oVp4c48SP8awVbHYSX4Het2bWnGVPM1T7SFRgXCFsexDU58x6ZiE7f",
  "key19": "5boRMBgRBSA6aKi3ZwDzZdJyrGhmigdFTjmyhB9FigfMF3zkARjs1EE16he16YGJxNMTEKhw1LnjQbCP4esEXq4c",
  "key20": "tjy8ZxSnPhkVBzYtZY9LuxrQj5tV6wcrLzhhYjPnTyL8mWJgyT8S98rWUmuW7WS7xehtJFYhezgB1urzGMTmUkU",
  "key21": "2FCupuzFC6XXFwwrZHKuSvduiyfSpjjr9wkuZadoiMcLavvCowPgxXCS7fBEkwjXkksRCjSDNgvTBJCXgRTxr88h",
  "key22": "4vt6fYjV7DDhx53W4yBCp94Znt8Kj3Dg68bFNPJDhA3fLWuPuG734wEYKQHcocicKDBJZAkygUxvmyAJS7kpmkGG",
  "key23": "3hHZDYn4CgrndutjHF7MWTe3ob9iaTxQMuWK9ZXod61TWxc88GA8t8KD8Km7Yzc4sWKRYrPjghXG3icXnKGsDzq5",
  "key24": "1jkXpAPxqnzxRTnjD6LXDcM6GNzS6TLQgp7XunyL9aYg2W75fYjVoFEXeCqbH8sYmWKXbLR6oWoyRZhr5JxYvmf",
  "key25": "58LSDadPBmZYD99vE645RY6e634akmkJLU6dEHrp8MAadameBxNMNA3HdfgMQbqa9G3HyJUXffzRVqBNa8my37Gd",
  "key26": "2uA6VWQ514t75J5Y9kiNVwmBmy4VkmbyUZAoWxYwDcv1cTUpfsDzrtGXXuZjm2dZAjykRMRX55UXQc5o8EqLtN9B",
  "key27": "5QW4mNxE9LL2xsyAtEbXvXiy31nHW3TYCvdiXeDoRe5ZwPdXRBwtfNgmn3sF4GNZBVVzyd83FtubUWPxszhNJcK2",
  "key28": "mv9qP2H3ygkde2TdSY1Q6UoaTR4iHunWRtG3a6UYJV5yBeRYrFfXTWNepVRz5z1VNJRj1rsuXoVfsroTJuUE3qJ",
  "key29": "4ivS8VEA3NAxmezVYp9kRdGsX8Ccnk2YNngoM1jQxtfrKJATo9x7nJXrJ6GjYqVZQW9kcqskd2HCBMwSZq6vxgZg",
  "key30": "5m1dZcLzdLMMHbEnZY1k4xgn92iiZy6wR888ewujEPyho2PR6grkntejtZsnqCSJrqTSeeds11sivaKAypvXcjbX",
  "key31": "3Som9PcY1i6nAAAdsML84r4crxWatjCRY2eUEf9M3sHmdQ1dbqc2DGjgbP18o4WfDAvJMbNgKRUYsVtHKW4vhEwQ",
  "key32": "5o68E8wvgSdsqnhMtofNRW5TDNHHKztmvXSKTvzRHXwbmykqd3cb6om3Tfv58vtbRQLenau4Pjs41Efi5tv3rmfj",
  "key33": "ABGLxnk59676ZffteAWVEacsgbVNFbwXV5dwWfnNN5wnTF3WHiEyR6Ghr1S7cz794VES2nDrA8m5EGjZ56b2cm6",
  "key34": "3zrCxXg3Uj6AN2VmVtpDWiY7M9nYme823Rs62QToNz1eUYrUGK1T4wdtBGWRzrV2XDHHyxWhdpe88EoWZ8USm3NS",
  "key35": "2EfFTMaCa9atc7WFwKYqVFcrogkJXp21KH13XRzrUckNiVxaK7zRfeDvaSZb9XGfjh4xFMX42MnjQbHxgDVYLGcH",
  "key36": "3tng2CVwBtuvfADGkgbfpLksz4WGYzDacttzAeAM7DwwGzbWBiRZ4M9N8NtDfTnWToLfhwMFgQ9r17SfDZn96XrF",
  "key37": "5ztsvZHiAbxiCckxMj37xcqo1MkQvpeJmDQvzDxdK9dHyxVC92Ui9GByWdpvWXhwPSN4fCKwSKr4aYsc8raexmEE",
  "key38": "RtHydXZifXKSdmBFBCUz85rDGim152Nep4nFZdL1SvLgiiooq573adr2QQU2kPzztSEzF5hTdQbQTbrUmwaq1Tc",
  "key39": "4DSGqap78mRgHq1ZWuyZDt7eSNKxr6mbJgy9DWryLNrGB7omJHfF4i4Zei8bYjKdPfLo9hGYBXinfvvsNDVyf29i",
  "key40": "2k3PDKuAn4gYf3np9SEUMCHJfU9f4ey3uJDwqXfVZKYu7ELhajmGL2STVfwh4DeAwhNFx39PMMwKr7wvrkKMAnaV",
  "key41": "439WH6HmH5XbjZYq3LoZbCK6HZCeuLmuciGAA9ag5GsMMtMZx3azsSJfLPSHRGU924pYd1zzgfuMPijQqrX4Pyjv",
  "key42": "4mDfR1JRrqdWGxSC3CqPdWMH8cKd85YD57Zygj6JetRGsMSe5Yx3GaRpB6NTUvFi2251QYRZsaeCE1oPt8XNpPMq",
  "key43": "2vELgqVaWuz3kxLLZwA9DwwN1NyF3jyn7KddurDswSGcR5edjf72bWQ1GB8SkAMmACpyEwadNdcrUqTC2VxTDF1V",
  "key44": "C7B8qiuDrbZPQ9t8u8vQDRRUtxQU3fCcsoFCzgryZNQoK3cQUZCzFznVagQ6P8LDKuyp7hvSVusU4C38CPZXcCJ",
  "key45": "4axTGfhNcUGmz5FsJrf7dhU5qe8SpDNuRftdX7Q2zMJix6L7LpPJcy8xqSttiUxT2fTvW28U4Q9eQ3YA6yZoTCbt"
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
