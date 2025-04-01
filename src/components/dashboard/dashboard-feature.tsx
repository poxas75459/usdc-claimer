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
    "3WfxKE7FZB5YnBc6oho8393Fz1MQrPrCGEFTxddbLwHTQ8x5dFUUjNLFPp5vgUWyCFoSNpjrJx4v4SEWdmdxoNLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dp1XDwbXeALdbQbPqoUaacWEN89HzCUtdzf9wzbV5CeE9qghB8EECBUfFMBbQCGq5VVsKkpsS89YFN9GP4So6cN",
  "key1": "4BbgkYoqNn75rNhRrVwMKpHWQCcVwiy85KA65ooeojcVWVyZvz4sVT1yNaGKnLuaZN2PXxwHWh4hgcDkmzjW9MwR",
  "key2": "5c7Ut7WyQZNbrLUyw6AGLe8UHPf1Mu87hF12zqxtWqq1aGpv6mCMZakkzraiXQajZt3NqimbTkcAhKiqNS3rEEkG",
  "key3": "3wjmFvcCUYW6tnaXRELKBbXc3NwbnUoLY473YMijepzpi2LoSejamc3vYYbtmmAWUpCHs22188Dnt8Wpq3Go5sLe",
  "key4": "4TFSYC3zdjcy43RZCvbGamRRqz8hAiiiUNoT8jvrym6jn5Hw2uwFcYnnWvf9eypSDVHck5J5tH2FivA6yEZzkgMX",
  "key5": "3sj3nb6Jqefs4mcNmjAndGRoqGG5K9egaxWkgGnBhRhV7FqzHcR743pY6Uquc1qjed54aKMa9TFFGxtvAZcoCC4y",
  "key6": "4rYiZHJEXu42WhWuhYSZV9ahrDt1phJtyxTFk3wiwviAnASL6mWeYV6sVPpJfzFFezuTHEwgYZdHnEWY49xnncHM",
  "key7": "4MawwE7dHYjjxZKPbQoSvoi9tCdTYgt3SBELK83CLMKTL84uPzJCUVDDwd4VXs85QrYzhVw2q6BFE2PsCP7B83aA",
  "key8": "39GK9yhvm8oZerqXH8xvMyGWyoZEjrAPLjorZUyUDEtH1kbcZETfWy9rLgeQqUXyKmCrtQfNe8nGFicBm8LH4Z9u",
  "key9": "U85AZHWdTgA9fSYaVYZCFHD4MwPHeidatjTkRQpJfKA212vuu6mtq7M3yCjShsxkMBki3Edc4V3YhJQyheLQNHh",
  "key10": "4zYZA35J7ZRzhZwCkPgPAffAN4SS5ixKNMTgtqpVFMzpqfQYVoq9QmdREQ9jeK4pY3ynGCqX2aix7oiJ96z9fMc1",
  "key11": "5y5f85frgTBKQs6QH5hxQSe2Vhd9w4DtT1mMReaS4GKYTi9VcXikrEMH9N8X4FdNf271TvS2Ups4yg5kpmjSxvb8",
  "key12": "GDEhdZhcgKbyLAPhvhjzV52DTkzUYm9DHxHv9Rvt4KRh6hVyHazETQvKEVYqZawrcrPPwFMJAK2AxbFqYGg8M1U",
  "key13": "3ighr47vHsk9QmQdRRcsfzcfCmQ7smJKZ1bmXXv3VXH5J9KEDNzh2Fpuoz72YUtgsbzLii1bgUfMVc6SadMdRQQA",
  "key14": "5oZCKxZarycwbSC9JTjDC18LzCwNBHMhmoNf4BPQ45EihKcUqCSRdEHMooEs5e1QyttCiQdydFsDWxn4ER2jhMh4",
  "key15": "2DiSxByFVig7v4iUGsfUcszPdyMW7Vkn3VSBN3JuuDzy2JUHQje86PCgc8YKL9SbbqZ9tTTfsnigpUNbrXa45UWG",
  "key16": "4vFUdGGvV2E7zzYNr6zj3jq3DTVcma7KodDMHPLSzcE4qCifYsVdECwfXvMPVyJEqH9NkYEssK2q6VgEoC6sLgiP",
  "key17": "3DcuqZ156JCZmKK2hEXfpemB8v2kYZSQoYWcxCHwKpyXasnKDKwmaM8XZnkgwhyzdif7HnDMoP5ahQBhYs1WxLyK",
  "key18": "2WH41T9c7G6hQo5FWmoEKEd9X6wqtGictBdJ1z18ojt8JzjokAMK7QNwHPWHRBRCfmLo4YdfmRLrdbb8Sk271hxB",
  "key19": "56BTHzzcrFrF6MsSJQEEcjECXW7yQUocUkbxTDneaj6S1c3krGo8frsMaZs7LHi1H4zxr4PvPSoExReTHmLCzyeL",
  "key20": "4hv3td37VarJHLHTbeSg4RhfXHVGKZjpao4BKK2izscMPwbRcQKp24BfdEf8Y5k7DgCDvvzmJRtrFReTSrkDSTfN",
  "key21": "5JSPUndAwzBiyHEckfLBVxXEGSRf4BjtHE5acArBnyy4Ln52gDu3sbwFmnj6rQL2BobPR8muqVwoJwA4UB45A8xJ",
  "key22": "4xzkPufm2c9pZr7KbA9rQAYgdnW6EUShfftPthTS1Zp8rrFjTpecMPF2Rroz4zvQUSLP8Xi8HyfSGz7wjVqHmXoW",
  "key23": "hRitougREo6YAANdTdNi63hG2hn9UvxPpZQgeWH6TPTmAZBFvianiwkohp9jtKbpwj3i4yZFPMG4ZzMRiphPqez",
  "key24": "2WsAE8TksqMJoB92hj93aaYMvJWT3xE3s7PrteLVVGvqkpCmsNWnPs8soq6zH9HSZAiqdVr8A5q5FUqkY1339LPV",
  "key25": "3gvk4d4Myyj8CUeaubsNFKeg7B6xQSw16kvmDrCWDswLnTwV8a1hpSAvp6v9jusfi4u6GYkrEFtJycbF2RSNrtvG",
  "key26": "5BGUF8BANfmuKHvycRTAx85GR4NAyF6V8QmZJovzA5NCdt2rH3GvavwexDhAVPyRh1JViaRqoHwxJgixyjYccHRc",
  "key27": "MPoiekusEvSNbRT9pBruPZd1RMH8t59iVWaoR8jvat9t8CQb2orYwvC9zWsejiQLveLucjQCsQSErDzZzVXegAq",
  "key28": "43zSMsT5BViZGGsH5XQPmURsSSwZfCQh2CgxFNSPkYHEeSeu2sCdMNf9eoFbY9C6RgosH7V3mi7zAmTxaJJ4nqh6",
  "key29": "rKMMooauHEJwjK9kT5XDVCH9LqNHz19x68R2V1PdE8DpMfvNxZGVHi2wCDiLhJjsvcq7oDpP2AsLpjeTEGxfn9m",
  "key30": "4H5iojVyj8GbN2zryoy5PdzhYcFc7gtsdkNUiiCLeyiUrvHusYrbCBELEhaLoY2QBNxXQyPvpUWLv4NEnP8pCwmw",
  "key31": "67Cs2FZ6L9HdFEaT2Dd65c5Hztenv8PaPjBmpKVHaRBcQoj8qDu72qCMZatUCtXWK4rPKCPcfSjVtiHszWS93Nj1",
  "key32": "5txuEcQ9brQgAe27d7LJjKU5SJ4pErzEFpcTd5cHjnCqhRCwpYuXh9UzjAf3tygXupPUpf43Gr8pcyZcJtqbsfAF",
  "key33": "3TMwUc51KT1vCNbK7Et6Hb2mYgpt62RQrjx6mms175voJe9fSy7Z5smfaaY8cGfSXD3Gwmzvtb6udHpoUADNtsHu",
  "key34": "4fe8V1XJkmqHAsvAJULfPz9WpSk3c2viEx6DxVXXqfdcVg7A6WZMJVaWg4W6FdxsLi9Auu21wJeZsAGhM5L5cw4W"
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
