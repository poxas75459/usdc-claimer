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
    "ivH6xvLUKzNryusC4rmwRNpRVsD9DEWnyoCy3KWvDL5aRg9gxoz4W2JWCunjy9rpiLPzd5viRgXeBwxEWXEZTo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iAy6VBscpY39PCGGNcAujvERCCnWx2uaQwDcHPSEMNpDBgL1K7QceHao5JwkWuiNPwRghcTDdepPQA7a2TL8Pv4",
  "key1": "vudeRLyBbkf24XpPTTdxpgZWUY2gn1cSrCDTy4KdW4yFiRNm94fDRpG5gFuRbNvxEqq2rFhiaXUndesJWHegsPK",
  "key2": "3yez78G92PWvrdYUqKZagVf8Cucs6UBy8mwaE1AmsGNX3iC6Kg65nYtmvMgXKy7Hu1X7MsXu9Hsj6Sf6AqD4uQku",
  "key3": "XoxuoYnzC54euMvPXPUHCwvMQa3YJehWFrEMfgEDpefpXKPELDChiUiHWCUbmX3odjch7C918K7rDk6N3DxT38E",
  "key4": "5NnXUEuLGZZQ2geDPDkt99bddtDJcZ3WdS93rjZR6Y6Gn5PmCQEDLgfj9qi3bakqXB7V5Sz38kSBEskryFEvZ1FS",
  "key5": "4CJFCTmfr8k7jH6oxquhxjy6apMYJMoCbjzPzopAswghGRLEpnvEWKCevNgyM5eWH2DLNJeZBaRTmo7GgQsMYB18",
  "key6": "5YeUEReMbd354zMPYLg33GqRgSayUrsfHBRJw27RosFK5pLz5rT8hBZ7KDxsQnePx6gjjZ1SZAx9fMC58RxN4HBo",
  "key7": "3p9emedTB6sVoP4nsnoKN7ArWa1dVP7YtNqwMNtfdS8dXn8ahdkYhDUzAdkZaXh527S3iW3ysRhkg4fhGEa9FnCP",
  "key8": "62zymFqS7LTmDm3fiB6tskiaxfD36QDCWrApR4wavwJ7V7W1zLAGey7CvKCHZL5ni3Yx1UupA1VF5SNZ1W6LbGUM",
  "key9": "52HeEEwAi2suSUQf8hKKf7M5j2tFHDxtm4Vnvea4DTKtHL4Qr46jFKNph4ZToA1MGuMBYTSAB1pE7yvAecgjj5kj",
  "key10": "2nVhsB9DM4ygUJzQLHGvRBGejBUt326nM1Cegq7TaEMVpdfGNoT9nsiTQWHW5tVDoxAyBNpX97BsnbBqSTrhS1Ly",
  "key11": "2bQfqqrYdbaNmbnZ6kehxUUUBK1qtZRSut5hDas1VbeDLEjmNTVASMKgrtEfmPz8BWkWrQVCWr1E5GDbkNgPpBdb",
  "key12": "4S1fUD85wGnW3CEfzVVzevfQU2xVwmGBQx9DDMcm7Va3aqZZjqEzdPpvuseYaVmsuDqLwbHZvkgxSkSYF3QJAHXC",
  "key13": "5LFfDvPmjFmspEj4PzynsMm5nFFVhdrq4taz6ZNMgTiSPrJcYnETXGdu2PZUsYC9W9VJJ4Fo1KWpgECSpW2HjP6p",
  "key14": "4bxeNFzsgeU4WQU7xKZYjbbNDyMBi8Lh4v8US7DvbzTPfx3sFsZT9qeDrgN2Kkf5Zc4QsPZmTtK2rpvH8gajHZtN",
  "key15": "4Mncqzh3LbPJqdehteg7YoLegx1CRsPnouydnNWWRt8k5ANwqrGnyLLEAhaywwmQYv1znnJitJYXEwoZFSP7uCYg",
  "key16": "2Suyh73QhfGDS6e6Q7ECejzqcMN2oxYypvmAA7mjbzcHw1skZfSKVNWYhLSkiqoG6DHffjLVz1o3SJTn3rFjmKoY",
  "key17": "mR7fPy4ZsNqSSMY28y59Z7sqwPhoQkcZnXv95kM1AFCxPxYoquZosUhCEL8maFsXDQmY1fT7csSiRQXYi2xmUKv",
  "key18": "2LiknVspPHCQMApd5fiR7x4pP2QjjG1HHgtFdRx9dC11gYSc8nqbevQN5GhZJsu1MQDrA3LDK9rpZLuy21HsSsJm",
  "key19": "2vKRsDJDBCcLuZ49PVZaBq45hFdHB1qhLG6ftT6UJyxA5LC47XDiR1q824RDUNQu2geQp8z4oh4r5iDYxiQErUMx",
  "key20": "2t46sqphVVWBd2cijemhjTjUz7q6KBiwUyjfcMCmtuChBqsCuHGH68bqJeASQXgxi1AE6NtQz1WeThTkbTNoFgDq",
  "key21": "4GxiAJDb5h6cF6Wo5MXymxok29ozCbvwg9bttFVajXsKaGGaW11Ker4iTre5cMeCppUEqWPpKuYGYUnYL1yM34iV",
  "key22": "5KE9tyfjEKeCdkCWQGFNd4Dqy4DCA4LC82XswJh4URUDfD2CJ6518Tta6duwoCbMc9ENieunZbEMTjiZhtYwgax8",
  "key23": "2tu68afMLdkeayPrmiqDQKMVBnQwor39fcM8WhR7KSEvEr41p8fz39wdHFWtMRhwDjwroVMBHS8dEdnY42Yy7Jb7",
  "key24": "3AK1zUnkRzoJutpwM9YgQheMJxuLoVqUubUzuJFquwUMEGtWg49SCF5bEX4QDonttJzUo2s49hQrf1BoCrK3aU25",
  "key25": "4HaTTLBnGHETea9ArZm5DZxqLsMtTL1t7hH2RtdWrRsnWHyXjXAD12BjmndHs5qCXhbruwegCL8opP6qg49utB9Z",
  "key26": "3HcqcjcGuohrS3efYfUfCmBf2LVWNMskcfPKKbZyCcCkdTDwBmqWxYs1sbfks69kXq8AEQt9EojwsVeRWUka51MU",
  "key27": "3yjShcGgWobzVtp2F9Ck2MsafYv8ibvcWnLLBvjpBu9DQEMgMCBqihkPmYp344D6exz1JUfxkm6xKRQ1Bdiw9emg",
  "key28": "asfLbKfaueVrUDnCiR4V2B1HjTdaBinZvat6VhN7nULZeM58jdNpYZszReY1FNHvRxi2cRJRMcRgWNQgeF3Ffqa",
  "key29": "3LigMLQFJXt6yXdsRziT5D9DqFVmkLDdnimNnYg6dMUqrhaG2eS4QRN1MhdyN24p68uMxqS86WANN4yobng4L3Rc",
  "key30": "57fWNvm6Nu9eYracSxrMKdEXX6AGFvhViT6roRjbAZbg7jCJhK7zvgZowXVQptgZaaUgA1UnoCyVZ7kLHFQxm8UV",
  "key31": "PfLdoHGKbLkrLob6fo9tdkP4bM3kktGAR8ybGLBcA7TJRwfxBNFqXrtHtBfkUAtk6tSRpMGsSmiKWngLtKafHND",
  "key32": "4stNSq2LUeJRGWUrJ32bf49By3ZMEU84HE2HrtQMBNpxi6qza1dFoFBpCxuGJJXqaRRt5hbbuDgUUx72Tzo9Edhg",
  "key33": "23uSX2ycAXKLYDuZqZkkAztKwXEegaT8pLnj6aUSHdP29soJ83opFKkc5qbvUZ6kNiSHkBFS1BFRsNPgKz8YvzEB",
  "key34": "qY859BvmHWLR4bc5Nob6A5EytQcCDHvnZVvYoFDFfrs8ty3xqHyVJJ4hvGieEdJQhWhpiJMjYPxAcSqQkDPpdvz",
  "key35": "QmUbDUZW9912vpYdhipHNPwghX6E32bSWJqteerh7ymfMf3wAtYKjESLALKPNnCqyVFH1E5YWTzm4y4p8Egho7U",
  "key36": "2fjuMGELgp9AKWVuirPSmZ6efLiwpk254zVx8WFJARjuufdjxdUoDBs2167ba1sSu2t2HxLSdtvitii6B1CGFx4w",
  "key37": "4iYZjRUywevzAmpVAQVg56Ymr27Tb7K34f7YqXx6pZXeSVMaXwNP3ZXkGf7mk7QyZU2xJeGcy3C61pzApKeqAScZ",
  "key38": "445S3je3WDvYmYmEuhe6YMj7QY2CgeXcoLyhUXKNvHazFJ8jtR4ecXJ8Q9z49jYz8GFmchKBAxNKXZ67kW8BZcEY",
  "key39": "63LBbb2pueJpmUBJwn4Cezm8jdXbxh5YDqfEkHhWpBa8xdekw2A7Mh7CYREB2Rj8j1PJGMVF5AHodcU51MBRuNPD",
  "key40": "5W8xWvdTYCSdGRyo3arCe5wjs3mCh5ECAj3R7zpvnrk9TTp1hbSXvVg8m87jYgqLFBJ46DTE7b6E2aPt4RP7JhjS",
  "key41": "4Pt15taxocaTJZQ9bXUFaYkXycrZJG3HrW9Q5aFAEwCFhKibW9SSJCQLZMLKdbvCHv6jvobZXzDu6bDMojy9Jhkh",
  "key42": "3TZCmU8Mxq7umA8SMyijviZdwgMPk5JhDvA87V13ENx7FSVqLgQVDk7Fj3j87QqEc9KutTpyj845Gw5HWdWdtXqY"
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
