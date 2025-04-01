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
    "3crVny2Vs2W4ubh3STPkRhc361t1PKera2H32ZxbB1DxonLXe9tvPkHKVa8831UsTYfRTn6yNZTbiLu4bKD7cvYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kdx37B1PJd8ZSxGJswrJtJ7gR3LwKqrAgfYcpLXc7rfzJgrv6jS8drN17HtfkFXuqMYDDvE7KFFM6LbKiqAk7DM",
  "key1": "3uuCF7bbNxFfu4TWmRoavSQ59pqLWhVmuJAeES2WUY6dGwVwfKmRV9Z4cH3cahDvYjgF5VnGoKEp2qYXvEeLhBK5",
  "key2": "5iBMqE4ytFLwtAgugEtxStuGezLdGbDYp7e5ct8Ne4ifqfE5f5goJUJmRW76BWo3Asm7ehiRnctFeG2gNJ2g98Bq",
  "key3": "3Fi9iMvuQKsXQ5yXSYfLCi4jREzu5xWBy6VoUNocJ4MwqBi52rGSG14sSkCjLubTzvEYYhNq95e6YqvjR2oveKqQ",
  "key4": "tLFTN15a999WuXY6KcX2AEcpVanuhg9H78B9WUvvyWBGUZvPqtPxy8VXMw4Xce6pbFSkWAZSqAwiCHiAEks2cgS",
  "key5": "DwzdauB2CRarEPwDsPfQugAXL3dv92b8L1J82VdsL6oeRBSkAFsor2TSNDvaoBodAJUSyCth1EyH6jjMSSaUFWp",
  "key6": "5YcrXUgMGJhLutArcuu1Ucat6314SygbhoF6THmxBMn3ukuDWUBmf3Abrzrw66TJzD6tMmgcDchxTrNvasY1yF2V",
  "key7": "FLzKnV58NjFXKW3fhd2sVyMYcNqwUXkMRjLuHREdhqBaPudr9M69PpaNB9H9bYz1eM3JfDFXPNQdBRvWgKmdCmQ",
  "key8": "njXEwZwMcdwQjyA9RvSEWYGyuxUAK4xL2kum8qkftMzx35WVSBdUQTGPrSte6jr95UhE2ULchE6qggL4H368ATm",
  "key9": "5PLcDai3MCV2DKpotV5xDGjhsXbzZYLD7CsW2omzd1jbdWurgrp1rmNG4u5GtCeQBgRfPHtXNvtVEN7EnFRiHYSi",
  "key10": "4qhQARqeExt47Rnya1VBNseG2mMdAoKvE3Hev6LxX2UmpCM826JkP1tXdsfmLRrNzxfPdA3Lz2EifbVe45yZAeJU",
  "key11": "PgTbqZRFSYZgM5M13VoGCxxQAeR67jLGchra31rNqo25EQxZZb2wR6DisVwj1yJECVe5BwkX1Mf1TCqCYtYZCTS",
  "key12": "y3oC6sjbJP3kVyupQhsFctpamGY7gMQ7JXyxDAopg54oRRLH3Uu5sFjCNKReCm1AxykmvMs73mcxYR93UaETc85",
  "key13": "4c7LKGfBX8ikN63QVhW3xmbegMpxQVfuDGT5VxRfYDej2RZKAw5CsFAot4AWsod7aUzxGRrgvQkCUyq1s8pSQzi7",
  "key14": "28RjQMaUmrXitC3p3giFWCJ7dir9Z6LxbPC1BG2Fpc1KMvZ9Tkt3kWZeQvTWW77HTdjXXFwECrm7D6fu1kGX4nYu",
  "key15": "4uwTApkuJ4q5BiAN85JbyFcePKo3rXDPif31jmLZwqv1NR1aYnTQnAdYZkbHqHpi1X1B5sXiNgAPCheTWc9yH2ch",
  "key16": "3Pn1SsdCkJSfq8o7zZDJWsz47Yx6gSaVENqLisJDdhnkwmArWY6MXL3cNrCoEYiARwaVrtVkhnSnStyXK5SF8neT",
  "key17": "sAXhbx2JLwEav5EtsdEkA4THVjC2prSP6AbRXC2MrHNxCvqKRGasJDWGwK2k7vDo2mX6JW2yRrQ2xRVNKMxSpx5",
  "key18": "2Q2knb7nQVF2RRdxWQWXc8jDRn2EEKDknSamyGqQN3YQPVHTuR18DRejGQssYPnpT5FfuPKEkSZmg2Hq9u7jNni5",
  "key19": "kFj68igKeT8KBqsE1fqzkNzAHuoe6qey9kSaA3n3VsEhS8J9W6aocfUNUNEMYsDuDqUGiULyM4CMaGCwfX1yrue",
  "key20": "2onb2MWjuaxf9QCvCoqKWKxAdc71Wtzkphntbmyz42JBZeck1ouS4EtvKajSJKJASU7hNcE28892dRrkDhnBJTMn",
  "key21": "4qK46fNDREqGNL61x5twEQBQyGesDmE4N4ZjoQcD4HxQNrPaR9nXitK6JSypGJNWTUcrZn4p27Sxd15vFrHWZomH",
  "key22": "NkQiYw5aEq1YtsACicDv9vYxJEpWyBiyyKqJb4JHVQeyL1xr4ah3imVReEynxLfuaumVnWwBVLsrYeW8VddA2n1",
  "key23": "3vLfEPty9xGUR4a83UZQ9us2D64pCAtVsm3GpTEtPLDfjDwAcHTe8WgN8sudFWAcDzdNWuHDq2e3svgQQHChZzdR",
  "key24": "3N5riK7UxcKPxHRG6N7nH6Qz28g4aLvgvktr4NYQiyoZuwGVMrHweY8b42Xeykdius2dsSdeRJFkNPjgFxs6GSyt",
  "key25": "Qsi5wMN7vVHjAjwuzGrvAN7mk1h4wZanPFvrHimF2VddX1ZsyU9apkT9k4tAtFJxB3VoHKutLW7GFJUv59iWGYE",
  "key26": "3Dnfma5sGRmHqrgXUXk3N9dbKCNatyMvByHRiv5Do8VBnJy8Bb3EZSzANNyZa6q3X8aNgC6VhEsWJwwqmk1DGfu6",
  "key27": "5xt8T7saqhFpKjaNxWdp1u1ZjvJXMyihFBViBfBCZ6pLDA2AJa5D3jp1HCB4j68kfA2P5rqJcvBmHdZQmbTZjHMS",
  "key28": "3dETxZx31kvAb3PSeSTHhb5WNu8oAWgH92MgQcYpZJndJ1BHfP1Z1Nzwzs9FhRUsTinDFjv2GtK4aLQettvnfBiH",
  "key29": "6LCxH7zN35bCgMwma5jKJSzoSaxgTs5p5H9jXaadsetXzuTGRu6aT9E1NXBnHLmKb6xm39VRBeKfg1ibgvfhotZ",
  "key30": "5nmVmqVPDW23Q3xnfLpRVg3Bfh1XoLHYfdMG4chVYCyc43VghWacKC5tj2UhPb1pKWo62SrLw349hhVVqr7v5Pgi",
  "key31": "BsTpGQNkvULaab95erAr7dQgwKazuyC94EeW4nL7nTD2Vd4fB1RDHj9j1SCEgySy654Rfmb3Gigxdf8uJ3QaSga",
  "key32": "3kMWVGoQoVgmgwMQydSDgKs9WE9rVo9pAkA2uXn9KhuZyNYNnCCwQXGW6EDL1Qeh1a32SMUnHnxwU5oonj9imVQH",
  "key33": "EKbSWjiXNHVdd9M8bnDpzKK234ZQRMAxxtaR4zLnUhyB89rPaWVSxyh2HpDwjc219GyeZUSe2VHgjFWN9k5cuk6",
  "key34": "4gPVBgkk9CZdAcr5prZ6uN525XmBmiMJvzTTXG7ST7FEu64Zaf1SUzUH9cBHzLi3feB3hpKPfM4BfqTXwkrxcSPb",
  "key35": "3SVNV3JkSexfGwUj14YNukyeQZNKBeMCqHXedq7mQfrwndCQNBM1kn79z3f7aEkf6qCa67pDAd6jCvLX9v3ip88m",
  "key36": "3LvPrX3X6CX9nao2PFCxisH7aPqLBhDhquzxquZuWQrofyRmoXgvn2RhoAcgy2ojWaGcm6QFNo28N1vKMHVCFmji",
  "key37": "3JzfLJNY632XGbEGU8nEAgRND4mCWZQ3DgyR6vYe1X3EdnW7YeaJDrJGinvLe898uiyGG9aKSRANmahyR5uizcDS",
  "key38": "WfLy5HWR8sXUeXKMF3HncLgCcuVkSxhjqoN36RFewutgNtv3e57tZPKD5Pk4BxG3N4pku65GSy9HA6W1c1dE7YA",
  "key39": "5f4LBGqFAgULy5bZBZ3Na8hdKWse66cwf2232qfhzUsEAmA8Qw6oQuVzoyHWoQ9ySu9EKqCtsoeZfvUY21XxU2E2",
  "key40": "59nzLrv15strbvrkcnB2G3cBFQUjhfeajcNSWLKrhuMHmQa2EDfFvkNUQuzRbQaYQ9MZkPVutab2Y1uxJGybK8Mv",
  "key41": "2sYv86J6h3kdi2omCzckhnZLoj5BxoYaKdU3kBnFYuGYsMy8m4ibSafPjFA25k8QMvPGgVsZeJZiWGBSDfFzriv9",
  "key42": "4L8thLA939ZgbWVbtZXLZMHPPASUbFu7gk6jHQjKFkL5CJgGTtmPbDSQmRh4Vmo7e3W3yFsb4YDj4zhhjfe6RCCf",
  "key43": "3UvjDNuK7431WcLY2LaZF3UhyNxTac5ztiAafSGvYGRizNcTgaVca1MuCUJ6jyVBUB3gAFQVaC61SxaatDDhgLvu",
  "key44": "4jDbQWVo6Dxa28wqSf3EQUkPPYrYzocaRdskjygEnRB4TRwf8bNiV4Zwpf3SRrWBK7sMkGLi99TZHbmYjRGzyZER",
  "key45": "3cJuWfgmRKxKsBxq13j1vgbBmjifwNj3gS4YTLRJZJTNZJ2VsfwVSNAZcRoTuwxTUViuPhz6BcqzLsoMZcD5sBXu",
  "key46": "5wUCLFPdYFARyyQ9a6B31Fmj2Y3im3fVoQiKpzSWthHZwxBcjcDLv6nfEP1MFifEy7KKaGQM1R6f8hUyPjYdoPyK",
  "key47": "KxQE7qShaCTPbFnvrdgA4sYW2AZtZotgwhkVn9dEiYNVZiV2M8AEbYnJT1hdV5CCoqiT8mNQGhKqsDELzhYdHoL"
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
