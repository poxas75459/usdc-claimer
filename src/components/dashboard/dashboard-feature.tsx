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
    "4e5SafevtjHyZxBiEdXqvMvHUpoCA9UfFZkh47r3nx1hSK3PoP4EcWK122N5xzGRTgpVva43HJCvf5FsXzeav96z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rgr1azycAA3n3KrnQ3L4Y3MzjMs7x8mMnoDWtkR1pRBBjzCEMCrMWqNxzX17aSKrgQapZAGFonXAXGNayhCkqwj",
  "key1": "3eP4Pgk8MBC4L1iatTMh1YE1mAQACMuSGKrPSzHxdLWwFuo3LZ8ATC8qi7koF4odQPb46mZFMk9mB1hXQnMwUJTS",
  "key2": "2xPxYLq1ojWMcrUc7M9p6A37coH95EpQodeKG6mT1NcY1bdkdtxBaEtfRe7Vu7E6BQUY3cqEiJmcvK6nSsUr3YDJ",
  "key3": "5Eu6MvEScou78fRbTwRknzcNQrkN2qYbgzhV1YcUVgCRKDyqfD8bjA2BNBi4NwaxqjkyyyqE2XYc5ktgdDYqknpH",
  "key4": "45S7WrmzYR1JmmJn3DQbdYitVYAi1yV6vNrbRhHnMD9nsc35w4TLakZ251tmNqxW4WxHnP17FgeR6Bj3rB1d5Zoo",
  "key5": "5vLogiNV1LLa368dvY86zujNd4za4RfeQwZgLbi7SXZm6pyBATNCCcqtFYb9GamH1gWB2kVUtz2AF2mjh7FpUjWm",
  "key6": "2naeDvAv3hbwtLtEDLpvC9Rxo851zRGtHm3zGrJPsEzdTXcams4gW8ENgb89GvqQ7s15kkiUEo7AGyUDMRm5QrbN",
  "key7": "zLKrvZ8Dw64SMJeoUsA1LszB2Tqm2C5RzvV79hGa7Eib5ytzkkzfHtQs4P1TwJu7Wat3q3yYZxdrAviDjqk5nTN",
  "key8": "3rDcPoJKF2TokKvoGsVg5HVv4neWK2yhifANpigDKMWxP3UZuiuuUpp28oqGMRUrTk97AygDD3Hx2aqmgzjVMfTx",
  "key9": "315jrr39Gw4TM8E4CNknf7yTqbSEY7dkuTRu1dWqoCn8Nosa3tCXawowtjmoGcrviLa5mzM6DKavNr3d6KTA72vw",
  "key10": "6hFYixREYnr4HDXSpfBWwDzbcxhoyiKMLKuRYqTQzVw9gj3UM8BbuZem3qBoLsv1vGTT1v1eqFZff8TZD2n4j2h",
  "key11": "3vghrCeiEHd8gjsL43we7ZnZUPup8PJR7zYZdkud2tvCdZqw4Jj6a67zVgKvY83pWAFge8hqyECrpaLEm59DnTby",
  "key12": "3eqzo1yj4Ko5NRS9pPcLK6qBC6LiH9ws1ugZuxp2APnBgpsbkmNQUcVf44AMBZgMpHaVAVMj1MH4aDytN847heG1",
  "key13": "6VvXboBRqN7JSuBeMeGrkYEERzkj7YSSry5gzutExX2cnsagxTxJQwjHtC3fbu7HNbr5TVrDc8SnBfpC8jG1MTF",
  "key14": "5n3vQ5ZZcywagghcK68rVMojbYyLLAfxDwgFjGz74VUaqY136B7wLkt2KGB6Tuc3Fv4qPocm8ZLXmduMDjq2Bo5N",
  "key15": "2NsbYbeK3Zf1gf4YqgK3BeUkvLtXH3rX4ZKVLj47ewaq5AvYhufMtiAunyT7o6p9r9DNMhDZovV831YS5WUwznfY",
  "key16": "JHYZUzaAwmFoLtKe5fPkFAhGLqD2ppYRY3UNiCq9cfqY1s1V3uCTaQGXpnVM6ddUTPteTGUuzJhTPLS4fu7wK1J",
  "key17": "4iax37XTKHoeiZdKFkzH333cJkyRReCvWGXUgRnAGQkWjmdYutHjpLrtdWTWcWNoGgjTMRC68uYFMDEQbsfh7wFi",
  "key18": "2bzyYjJiQLeJyn9sUZdE1SQSDohdNpn2V6ZHcBS1tu1kT129xn1RgRKUgA2wL7CYT97YR2na2fkqfrdk9TpSoreo",
  "key19": "4DfAsaL8SQuUZ6ugU725hmwJ65wCHEUaDsDfshCJr73mXR8eNQAFC4xkHs75fnZ5cWJZgT7ExR6qQxQTkiVzVfD9",
  "key20": "9s3zX2KuffZs2JscQ7jAtXwRhipkBDZYaJrkRQk9YwFGyrctYz75cE6g3CVTfBEoGrftZodDPo4u6gZNdbXgz9V",
  "key21": "tgDAjvsCpfXZvVZeXetCLHqjJKFE3W33E6vMd5hv7SCEzi9cehr7UAd1Vqezxeekxs4AQPkmezgBwFPz9nuXwHL",
  "key22": "RVBae2ERFQYqkdvmdMitbWLLj8dV1Z96DwUFmT3SxfyRnwarEDu1eHKgBpdazUoAdf4KqFHu5vJ1WDNdBAnei89",
  "key23": "3iSiRxjkY7NGYVWVVNxVuYu1qmm8FTtiJQBjPGnQZJ7s1vUGWrQ2SQraomjievKWRZ46MXCezZQqnV5bbiAQhTM5",
  "key24": "3hZ7BDU6X2QwbX5cZa9yehFVzn3WLAKBsXEbpxnJoFHXKXhyD5DGXSZcC8YxY1HdRAmqZVNnvpN8vYv69wdk7q3h",
  "key25": "3om1FwVGStfVdN6ghD5FksxGjKeRXw6K7AoJCcw7aeGEicpwxJb39cmFd87MjJsBnmveHRZ758mcDwcffV65mZ4t",
  "key26": "4NMVBsSF4ZRUiwnrHJTvZFEmHuj6C8ZrtbcdbuYbnoGLwkttdHWAorfo3WhnC8a5GjALHAriXaYuFWsvDEH3RiLY",
  "key27": "2Y9j9xxspP4ka7on7ponYZ6kD8hPZPLsDyBXmyfKRi8nFVUjyVohSbomfto4kroGa25Z7wuxmDSipQmoswjmLk3m",
  "key28": "4mHbW8WDSGpw6XTs5CdzexkBw8ogyjw94gEU4jgTw4EXA6xKUgfVeyM5PUnb5S2wiHqDM1axN5G254vfa2ryDyUC",
  "key29": "27mqmpkiZoA3MtCgV6n598Btavg95na68k7fqFn6mPK1yCYN9dAKMtnxoi9nG3wbkb3hxtUqZpWbQEyr28XM95Dz",
  "key30": "22Xanu4qBkGGNUq3SEqyZymUrZwVrMyZRdsFnhR2aFnuCHLVQqfNgJ5PMHhc2gitNyCxg4qZvoZCyT39yjBiTj7S",
  "key31": "4pi8LsctrYZjze11KVhXQXXq1TbQAkos61tzkPWio8eyn8Xg3U9QbP8KcnGXqJqJRR35ffFWB7jiqeFKdTyohwbC",
  "key32": "4m9RgAyJBQUDTd9ZtTHzqkgRPgJJjNXHQy15CkXXZz9qTYd5XNHDwWwhNbm1HYN2a5VXSRPVg2CFhfNeAMqJyUMc",
  "key33": "515qXsSobfGc4bU941F2JgXVhTvjZCTtkKe9VKabAcMx8AumWjXg91CR8W3FvT27jC8V1E4cwPpXMKJ2UxsnH7vM",
  "key34": "5dXybiMFbg9UrYLFZRAGN93txp1YQXub5VykLps14Rif6ygaaRyxV2wdpsG3zz3xmfkzapyC1Q53RP3edutDnQM2",
  "key35": "4fDmkZkwHJGDsJm6vciygBjTHFYxiAyWBQZB8eudPinFpW6yr3PkZmBpEJeLw9XMRE7cKZ2WGqgJ9rs73ue7bgXS",
  "key36": "5x2pduqQzEDW47fq9hFUS1AaXGsVaCzRGD2oeY3tdrpAumehaVtPZxwJyw5dRbsNHyPzSwwkMHCmSfeeY7sDM9a6",
  "key37": "5HpothUTMSpe1uAkCpdsTYwpVw53wyycvtmoneynvVf7Y6MPfKSTnH3pMDiAKA2XGZWS9q8e5iDAwG5YtUVZUzkR",
  "key38": "2f7y6oEuzCBrjwdwRvoZUAuu1UVJkME3W9id1RagSTFZqimmx96ce74Cs8r6EDwzPCEG2PdKkFe834orodUe82vH",
  "key39": "2GbQchZJcRqn1maRbDshi8Q5v2PsSUAQkRu31gFTTCPJeFCZMzhUi24pZnSE6bgaaL1qZU6xEe1SsYsavtEp5r1q",
  "key40": "28cbM88BN7KuRyFxGbuMCRrsjC6t6GhriDiPJVEpTYpi2D1y8Bo8fbpn8EQ4wszd6WVyCTeSdwPPyAENivDvgeP1",
  "key41": "4MwwPvea5LQF65xzywmdFa5BT1XFYzE7b99aimH7MaJesmGVJxe7geCXAH9rkM8po6xM5rdc22sotxwCE1rU4Y2G",
  "key42": "5K7RhYFmQ6SV9TmJeZhpDrNyTPpEdQJ5fRumrq9y5VaJWXj42KPc4ZKw8Syf899JMerRJqZeXmoh3GzzYbLGiVwX",
  "key43": "5i1q56rqXtqcFi71bsQ64dnFwaZTLhx28FNeo5xw8p1enZgyZdDxVMSh5pzKqBx4HmQh7ePoR9vsh7d53RMKPkSJ",
  "key44": "2bSeKJDuG71tT2EZif5X9yhLBipLNTQBQEMgDMYsabdmgpvHkpK4zpRQmg2DCDmU1ppD1AhcmfZiYUXxDSYrgRnd",
  "key45": "3PZNj7JCJpyKRHDV66QLhq6qnbXAugbEhe8idixMXrzmR8a71qkVU7q28HawUJwLQ83AoMBioKrJmHi91ygNBx6"
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
