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
    "2YsLQUxLn2yC27fqDfWcmjf5ifr9CVycN7bcsgpt4AGTjTLFvsqLs7wrF3Z8W97FCJVKLopTX474uhLb4EM41XmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DquWCyhMuhRezaKTsnvSAVP7uNPzEWgNkv6L1gQGworThStVonqu5RN9YKfJoLJvqBmmTFCoQipMxFfXJJMtuMo",
  "key1": "5vyy5Dmn4hm2ofXp2R9K9Ft8L22z8bdx14RJzMmGi3N1mytMkcQV2BZacqC3Kt8fRySbpompmbYwRoJi1K8CK8Sn",
  "key2": "5tmqmo654jKEcvGXUAiWnPGBRGSvKhHqTrbmPXPViZH7Dzx8GpZeWnpg6jQSLeU7P7dgAMV3tRRMiFg5h8gWeirq",
  "key3": "2WqFaK8Jmcxi6WxmDKUq3jQ5AvX6E3g94kRoUzDupcQS1w4jAyqvt2HWUovybYvE6TJEaYTfFcmmgHdH4ehzXk8P",
  "key4": "4raRwThw6u92Jffi4fJSN7tq2PHSBe21GfmbNjJhurbfcFCRSvZastMmy5EfSsHz6Hu7LaVMXZBNUbzAT6Q14U6V",
  "key5": "5TwgS2gJvZgTA5PJMW2TQ5PBZmS58x9hL5gvM3AL4WHnQCombiqZZUFqvWApggB55FdksZ2xaB5ZSseHt4paqZUB",
  "key6": "4xen51YzybjbYyruCE9eXXHr2DSrNiyVs2Ywc4qoARLwfwz5FP5YH1gxvL6y9yCTuFWRu32cCkfzSZYM161z69sm",
  "key7": "3LNHxxoQewnsAzUP1ct94uZrAzKeNnQFf1UaDEQcC8ctYvGQBAzzemDXiaF6o1Nmxc8a2eNeuygp3VAgiLSk7ydq",
  "key8": "VziLhwq9jk2sRpD9eH2RAzpAYVJsr5WWo5QHb4vAVhKqQMht21DhbMr6iLo5ya7tpdQMyenCvWfrez29yMwHTuT",
  "key9": "22JqDuo5ohMb5GL1VAZazJmFbf3qzn8hN9WbnCpLrfKentu33suS3LyffHi8xzPdJfJsxxBj1GG47tB9j9sm83z7",
  "key10": "NoJxUGdgeW9cmd6UXmfXPVUWpgu9SDrMLnEVuSGNnKsUkc938Bav41Av6zfuxVdAuC6Dg5S46TRzGDf3fy4qpnm",
  "key11": "2JBzAbt6TfGHHckYU7JHM4USLrxDYsx5pWCV6KUWBeG5sStjVGzpuXhWXiSCUiWuwMx9ejH8PDTNKrpKEfZVEyVu",
  "key12": "LL5AGi44LtNxotqncEj6Ewv5mVDfueYGTym5pqq5y1JswesMreeZeC9MXyw8Ms46cGASBKXW2fQoY2sdYEcQ5z2",
  "key13": "RPHHBg5D7BRmj4mYyJKkho8cHnWdzmqscMXtjiFQyuZxm6Yqko8vnyFEvrZ24sAPaiRAQW2ivKGyw99Bz3aq1Tp",
  "key14": "3CRgrSVV1TFfRTHYJQSRDrZeZyrKnQ2VSERbXh4wBFjFKrSoPAPRjjqJwzd83ihYNE66tV7PKwiH7qrcNeSwFEBz",
  "key15": "2V4mz85f1QKRKjVF6dG2GPNrW7FPu92MsggBpgQyeS4FAV3pKzZ3C28Kg6pB6zhj437JJWNLgzhNwNMA5J6H8vTf",
  "key16": "3g5XJEKC1acZpusBtHUTrbJBT3HuXwu6rq596ZWiHGXxpjC5bA4gzp9fZhQPMxcDiYN3pNKwuUW3UnUbbJg49D7a",
  "key17": "HGjWQZPEeWqFBrcLMDL8fiGwPT3FDvBP2QZ9FQJGUy72HEH8z3mc3wUfWeVUS61spGw3ZCFq8uqmqoZdFNZtevx",
  "key18": "2s2ToP8hPXxt7sqTrCMN4kZPaDesY96AvzLZ1DCSifJVxZZxSTWAmkv5gJo2FhgJh36QAoow5fNwRBD62QrVZAgR",
  "key19": "4F55maZZdLLv1d8PC62yJXbF1DkwZgUdtHtMRyXWoy6q39N8LMahLHBN54J4gP1DZfqt1yhv1VZRk434U7qdydtz",
  "key20": "v6GjDxTqkZVNSNVwgJFn8XxGon9LEEpKUrbnRasgyQWgfNFiYGbS5zZmxREhYHL2C9YwzdJjdU7R8C4ToAhRcfb",
  "key21": "5Sj5cpHSvbM5muGb41gDtFB7SMzpq3w3ir9dmX8kwvsHWbzL5qYefYQKR5nf8yfJwLoD74NgSjMU71BbkBhGNW4f",
  "key22": "eQxoMMnxwstxQByFbEkJFRnhTmqrhoaXL1vNdPNtsNfYidLhd2o64V7f3c5VGK9fJo3BECam1Fu55K49pX4VEk5",
  "key23": "CkikFKjPga1cLcidc5MmDrWNz7T29cZs8k36TucvtG3KWjVGgQJpXoK5Sda73A6RYJpyo9jcCx6cHtF3Ur2gKLP",
  "key24": "3UNh5qLpkam5R8f3EKd4ZbuZMACVaX39niRuuZzKotR8AqYDjZq2eP9dnRE7mMRAzNVkJzmBQLXz1kxBvhEtBaYQ",
  "key25": "45VsFhkMbznKue78dqzUoWK3PUEUtwberCcLRLnrHPoJ1WtQiAQ1iFaqDBbbq55kNRU5d9WXYgse5gzpd8msXP8f",
  "key26": "3ecbTxVQv9QkXC4QtCkeciMrRqxanpZwvZstLPdhVrDqWu5a6AhwnMjUp512E2nArQ2fNpYkHdH2e7Z51K6LPXRP",
  "key27": "39LsexKWrPBvAB22nfKkdenX5TNe6ZBXPiFsGxhZkqefuo9mZ6kk9bRt6azZxkyBPDXQ5qjYRr7hhMqctnkH4EZV",
  "key28": "5Yr3J926hzJNQL2c8sFiohjA1AjUJurXCrmbwyz88rt6ADJG4LgGSd1s3BXEXWeTwo482z8DU58cpw354tgvry2k",
  "key29": "2wHdAEMnxahJcUsr7ZbrZs4jWbDXmETkTx2tirY7fkajeuSXRKGrXeFoY2XE3yW3nPB84GohXa3dHMybKcRXViE1",
  "key30": "2GWw4TRTuLCZmSZKtM1zMxSwaamfo4ZWFBc7mzMKtzt9STZ6HiX9oimNphvxkoefL2oaNdkvz9UNZfmJ28QNh97X",
  "key31": "5RBse665WdoQei7cJRMdZ3Cf7bZmsdmoKhfFrkZXRWHYahnyCo9hqDMTqpaaMSecBqTbB1e2W87TBoJwfy91Qgwe",
  "key32": "y9By5enonoAr9Tisimau5WK2oKqzAZ66jkKDAuAXYBA2ZsDvyYa6rcroDwYrd8iBs67qrusZ73QD9fgQoEUF2Wh",
  "key33": "3ik7csDbwKTT4KfdqDw3xZEuy8TebFS2oaocAFc8YxbuHXPsae9JQz5DRy1j4rdSjjyjoNkAUcC9UR24gWCdVs7Q",
  "key34": "4F3bPgaGAZmFqkB6XkF7Fi4Dwwzx3zWggGeBgub9DHAWXuXxdz35nFENvDxsUQXhsfDY2SGF1JCbk6nnDSpptofc",
  "key35": "51LtMBzcUDPD149PeKjcQMBzbT5CUv7t2hHVmKvmk39XKs4TAzc6eki7wRohPg9uVJnzMm7ucFR4JyBh5adH4VRd",
  "key36": "4LVKcgkBjxgENF59HCV58VAnSSK4cVaZmPDX5vUHrJrPkh4oFB5KHVLBa5QuoKJrew1Y1iHhFsD98QyFD9UKyCuL",
  "key37": "Fk6k5cttCa4i7g64rAwDByDtoL3DM2376WoYNhQ1qpeGBYXaKwHMjnh7iMJ5XUkuzMEZiQY1xiC7QLg2uNdcJuE",
  "key38": "59r9c9rmQtagwEU3czj2HGy3kowpzt88S3WFNJCrYDd5tjPakLcGnDqsyVpMQKFfbmgK4ZwevBZ3m8YNZWJ4Ld9k",
  "key39": "p2YnQ2anEqJ8V7rci64TUn1rSkXRboV1caXVAJ9XMxMjgedCf4a43BMzmXGdbJzyus87smbX8vRgPzXugBKFwEG",
  "key40": "2tvDjix6ksXx2GXvTSDGazDR2Zgjirn7Yi1DCr6YAFGvGLmu7SZKf5FZBHKPfJc1Nhsdc333zP5aYU6GDqvYgfxi",
  "key41": "4EJYipSCYgc5FpGGA3tgLVVbgz7o7Vcm9vE9ou8rdeBSS5nQEzrA87cH5GrDkcHdk2YBNVz75GURz1Jdb4RwWZL3",
  "key42": "5d6aps73w7fWJ9DKuy95aLoq9aadu48Paar9ds8JpuMsPB3RXmxGzYcGQGn4LvoVDTyqAmFXDjPU2jCbBaNH1u8x",
  "key43": "5HfXCueKtajNrGK4BKxvCVioRrKqjr1jib1JPVACh21dzwEAX243FUim1feQMEVkuaaY2JoLYVaHLJ3RjbYF7CyU",
  "key44": "2SL33xTxqh2J8H91GvtFGXFcWM64AuHqy9JTgeeYT5ZMzWSnihe9JmWhLk4AzWR9j26nfpzDG1jiX31W6FvryjFM",
  "key45": "YsuShCQzAQTQhwwULasYRJb2ojJQv53VuppxCs3za8o4ksZxNjmrAmW9krJkZEPDHfuK2Cxm6pg1VLkTvFcMZPQ",
  "key46": "AmxaMdDi54XbrQ3oT1y2RhSvXtvjEfc7SFkgfHMkTa4KZG7RdPnT2KKNz2jsLzxu9eJvChLhiZzCtQxCBp4sT7Y"
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
