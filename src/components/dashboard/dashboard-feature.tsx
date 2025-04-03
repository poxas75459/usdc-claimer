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
    "3DWrEGfVteuzwKsU9a5vHqbixQvBxsGSkgCneNse3pwEAg13wZx7NFLKC2mQstrfdzqtNqkskgYXAhku6V8bTu9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2do2CKCqVgsoJGrr7YRYhTwDhHHZM2bx17Z7ZCqEjHDRtCeGHsLBzXrv9tq2j94uzzijxfzKpdNhPtDbMTgysFpX",
  "key1": "2foUUvFskW2WaBXt9xKNwaEfs4VC56u1kPZCNcEs7nQGjebG7gmKXRfrRcCwRRYwnZFd5yE5oGRR8ayg7CavyqyZ",
  "key2": "5gPga6aYu5XuF4wdwCAqonM5VRVzX5m9ARmFdFMkPZYp9oxBzebdiKJYDqQZNNPLaGEbJTud2o3z8iAp6Gkf4xao",
  "key3": "4pTQfgs3wA3XqfeJAUd3bZfkEV6taz6xC9PYDGAaWzy3bLNVbrV8pGFjyyWXy7Q882ZcS4VmUhqt6vxF7runPN3W",
  "key4": "49bNHSHFce5T9bCzQbZXWuyxi3NMgjTwLgC8ALR2B3MNfnqgTEmUunSxXzfPtMH5s7PZPwX8iRHEiWJpm4pxdyyS",
  "key5": "eFkWPnbgzf6MuvRQHm8LVKvEN7p2XYicMFAHGawacnFUVCEMG2oS37ZjjxpocifVVGesi6u6aGEBMDAzKdLQ3Ci",
  "key6": "vi7vzuA8R3KFGA4CiEfpBx8p2LjUBPo9bEwt4yvqKHPqWEsusVqWbn2x3XWEwoVcXVubwcxMfmJbRuv1RbFx1Eo",
  "key7": "4bRSq9aiuDyHLgjne4LCvaB4VwHDyNv4mV1w9o8buY8EapRu7YjHvufNjbhocHkzJRxVzHsQjmNkhUGYsvpdgYcd",
  "key8": "Fw7p9VSjeS7cdzmH1tJQgKscCsHv4tmET83DEPweFXDPJdXmSNYoHzfvRt1X9n5CLbcaR4ZwJejABFbPefqUeXJ",
  "key9": "3rRtmPnNpTLT2w9YsE9p4JjjSTVdcaitXLd4fPTH5SRSRuRz4bhbDefMkPMCXks1gb6FV5YScUbKBf9rwzaAa2kf",
  "key10": "3qCqarjQA8cvcbWfXWZ6rXr8kp6T47KsDyjtJhGMQsGKs2AB1LoM8rzwdaDuq5A3swSfmx9Um2GgqfuEFakivMFL",
  "key11": "5hD2aYrWwKXXviySbfYusPwoh1FrHuLuGYbEvhiUUEpfTbtAsn89cVwmTj4ERFbtNgr5we7vx1wUqBufYYuPESBQ",
  "key12": "4tf7fv4uMfqyhycfmAcMMxGEcBxJeekDBh2c8urs6Zd2SfqCNG9QxVu9psgLTgvqDtwqua8CzNX9bNR5fpa5YvdB",
  "key13": "FNtk1rJKDKGTzTXSmRrPkjUEiEGBNREkfqW1s1dytmKqYcC1zPQg6H7rhgxYtrycvvihjfWb9uCVMntMyxmC6HW",
  "key14": "3ahN7fw1yeaSf4Dxm7unxgz4Ar9RcBqZiRUpJaERtm9PsFtahsUe4B5Kk7XLASNG3zbjosGjdTPst5yjfnEr3tRM",
  "key15": "2SkY1VMeTrW4HoLUCmMMTkWQB16CPuUVEidLZ2LA7FV2n5YwTYqBKXSWenXsdzZwC457UDwSs2mTUciSoQf86tgS",
  "key16": "5b3KZ37EXHudatNVbj7w13opTDdtPjC6SRukCsbrCYgBzif4WTttmUS5TGX7cNSEkeKw3c6saamPVizmgToEdvnA",
  "key17": "2WcGwY2y9ea7eT4NbihePXbtpwPCEp9nggtFPtoWzDCmBmcKaFjkuGwzf49GoXgdUqihdYtAXTfwhv7NpU8Zv4gF",
  "key18": "FFoXUieePwJxgp9Vbe5XvVnzWHt6fhzP15QckPNnNKAD6dMNV2vW76mwoLJJmHPSsFaNXxetJEN8zkgK4pfvew8",
  "key19": "4jxZ7gZ49V1QsDPpJVPFr7YaLXkNsoRgTG6XXLg4WmJFQpZKEAzLtQvCEqkwzWrdhK7PdEriXJ8ByiH6jt7TH5o4",
  "key20": "2sd7CYXC3NDip8SgZWxJKPuohoVrQ3i52YJWqBVZS6eC6eyPnm34SLuSzYKR5QUxFiYygpGshcHt7GHTLK427LDc",
  "key21": "3JUYZneBUvQLsoHPKuoBHB5iwCsZxKE57QVNjQp5B54VuPzK5K73R7YLndrTYygP6udwYnf3FTdidkGKUkgc5APC",
  "key22": "3LA8cVvQZgtXr32T9roDELvJ6AKuV2ma9ENxp4Gr2GWJALSdSeg36VojiovvHG5CcvBhWA5fjPisPGH4pKTznZDZ",
  "key23": "fc5yDzYUbKVo5KHkVtwwTcQvuiQXwpjxMGfNqfDMjsqctFLKHyfGPCtN8cbD42SHJ7Cz9xBJ5RW6JcmB8jnXaEA",
  "key24": "oCBavV3xPuxaFu62KWZakxViRNA7XqdVPk53fsb4DbDVgsXg8ydB9uTshx2rmifCfcw6KqCw4dMNuT31AF3kSpx",
  "key25": "5zFgT8nuqQfn2Tdtp7bCKncHSFtEhG1QBKYY1quT6g58SXSbq5gkJzReQ6jep1fKwWLy4PSsZr5CGNcNpHdacMeo",
  "key26": "2EbTK9aG4tYyNyXAaUzxCjYzzKxSr29z3RySmyLeKhnW2dQ5fMTPGJWNqdgragoogRYBcCaF6qiDGoMHe7UF7jmr",
  "key27": "4gURvUkCsF5za2c6XpP2KQqxb9tVtQCGMVaKzyvFeUWShq3eewAtNFGRrePVgdYZ7vSWJCQDiS535RzuzWBqyonD",
  "key28": "3HHHabKze3Hwq3tP7eCeexppHAYWdpmMxLt9ZXyjkU8b1jgJVMU1ybjMbHqKPi78xLzZKsK8Cc6KwdTL2DBXWQ3v",
  "key29": "4XVviYtgtSBPvL3gCs839aaMKaQsMQHEawL5cL8APZMidJmQUsvQc73uvYLAacMcQ5Wd9TNMZ1CEDcdS51eBHS2m",
  "key30": "2M7rk6quUZL1bmqjcjJedAqosDzNraZigcjfhqWBB3RsLx51d7Dyw88rqpZuoq3W2YExQsuD9wEoEMY6aNNF1Gt2",
  "key31": "3i3VJJCdLvSca7HCfh8qgz6x4GSeXNbVF1tH6KSsK6w3nPefiHC7bjG3LbTrNF1jB7Dqa17WGwdkLNWf316UAeBZ",
  "key32": "Zz4KEaTwRSEsHUeZZ6EqjzZo3c7hPpgNUCX6VU2wQmhCBikdNnTEpCksUVzz2XfvnnR6e7TV3cF9hMJ5xak9Wgc",
  "key33": "4QpfDQnETaFoQ6UsphWXRiC7soSghqVLvJScLaKr66s2YcetAUuza92RxPfevCEZYFNCki9Vuy1bupjtefF9cex2",
  "key34": "54PnCALS51nBqmZdqYTqJi3AN3ZT4vVQr3jAFdtencEUSLnN7CyDt2ppju2xw2KY5coyGBqnoQV7Y9v8tJSJ2WkT",
  "key35": "5PEuKD3RD7WgptUxWhJYsUKWJqkhY4oxZAzYEDnPmC1UFKCpGL7xHFzpS9s4mEqe3gWhBhqVQ7VJpNmYst4qZUkM",
  "key36": "5JhBWTMYMtcgCoHFTXubFkj3PrDi3SKa5maFxGxMzVSTLbu6WkMqu9o4gdX5qjA5JqqoKw95HiWRwRP6SzzzgqeD",
  "key37": "5SFHsZr7syeD1ifRYm3y8bBDuf5Nt4z9NeTvHjd2bUcgPef9FKN9XYfsFhw2jnsk8M4ERpnugheeH1JCyAfLNosK",
  "key38": "36epj2ycMH7nAbBRGDY1JNiEmZp8H4TMmb8E9DWQdTqhu3fHSNbs2X8GN1AmL5TMDw9GBoUn22ueh1QHyUyUPDvJ",
  "key39": "5Vzg9KVkDMKVjP8RVraC1xM1gaD6hFw3vX7Qi3To6awJkFX3mWUeiHrP4ywuvCmBPjanmUfcC1fG6TtDQkAZ9ak5",
  "key40": "3s7BFzHrLxAz6KFspqhqoVSwHVwsAS4sGsuVFq5D9MReXjvNTFaqkAESmd5U1jK3cEHJ2JTFmxj9deGYdgrPMxEB"
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
