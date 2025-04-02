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
    "4KVGzhLcmcFHyt8eTLyDo8qUimjxzwPFsjXCRjJcyjvaTN3uBW55vhnebstqUb8ETr8PPGLHhVuRtoxQRtrR4FA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymoWjYoC5BRJu73vvAYKfHk3yiG4zZwrxK5LyqKGjTNqE3B6dRSyLLgQQ48VGwEPZ4UfaVvCFb5F2PGMZWsoGVz",
  "key1": "PLNr83kR7CqvDWQxJfrWVo6gVWzaGtWUyCjnr8Wef8ChsfhzDa4KwcRu2xqUZLgeMFHT391dfhCoRBWEyhoHXg1",
  "key2": "6TtpkN1vggfByk2fo69zy3AhuVDdEcJgtMggFPDLDKWuzECTeTyraTa1kDQyYgjsCrkdtSQ8eLyVoyTrqGpTKoH",
  "key3": "2q6aeieJVPMRWBvGEMtuBQMvJWWg8ZCpHxfhr4Btf7YQtoDkATrpFGbzL6anAKPu2k1cyPE8nF9e4ESNjjVumX1Y",
  "key4": "39ZupDHkDwo7nrnqDxogJKT3wTYztGLNjAepTNPiH5pWrzfheyHEBYkcgKz7uYVbixUPM9EiTWR1KXLhuzYFmuyL",
  "key5": "DkjfoGa6nHCjW122JtghcjjhJx2c9pTHe9RwNfMYnmkVSUJ4LqPMsYUiivesVbEdofxzErrRUeTH2ZuL538YeK6",
  "key6": "53S229Aha8HoXzS9en3JhwWG5WcZ6QW88txkbKPDjfA9zGMFdb5dgp1LQYywCCw1oEeRHQpPyRdAdd7d5TWaAzPT",
  "key7": "2rgCQiKiPz8cQUDAx6QzYCMADnDHbg3MXTYesB5xaPL9zzavyPLK7LNFy88c2J3ucoHTGHqjzYexkRKCF3qc6FVh",
  "key8": "5bsuJhBERse1JUk2RXq7FHwYJGRwtHsYAnj5PCMmCfiKXnfm1519HCn6tx8fo6cpFu6jbRoMKrkHHR9ZVyrAArBr",
  "key9": "4RQrkUa4Ka5qkqMveSM15FqU2JZKdqEtyXa4n28HREbaDAw94VBvona9HfGMdJy7vFNCXkdLLsWXsCBh43MnW1uu",
  "key10": "54NZwJ48FTfPAjWE5WnVse2eRR15RMkghhHK6geZt4uUzN7SmcHUkBa1UYqgQvaAu1ioHuikkKG9SLvfVhUiCiJ9",
  "key11": "3WREtbxE32uyLyF2pLNNSex9MCU9HpXxh3rM9wTDFr1Scz3Z5oysPfJ4EUoaqmRmN8T87gQfi3qQAUcaV3qPBrUm",
  "key12": "kxkbp5U3xJzLjCr4BCTX3pmFSzFG2xnDUwtTPFp68Vf5pk2bAn3ifUwSUeCjjpUAZF362yVeuiQAGgAwcrGGd45",
  "key13": "47Ld8xY7WJQtGa2VJKDF6ksxVqJMRwHhHP1nLivtFUwTszS6njZsZ6qScVuo2Jx6qgR9dYtcFcx2er5j4xCgr8Ui",
  "key14": "4HAW9xbNBvpQLauoq3WksHAgr5wRWahvMSyK7DMj3AJWJmJ6PXhwtjSBJnzDheyg7YwHkygyrCQdR6iTMaSRdscN",
  "key15": "4SGxx51EEPS64Wnp11dwQQKZ2ko5fEZaY8wQaoLyyphVDchFZDcuAJeGYuFogKiZNZDzrpC3yr4DkSLfDTGUVdLr",
  "key16": "3sNBZTHowVAeD4C8PDt7L4oQaHX3eeFzoiRGA5NftGNEYNbFHdRDwHbpmaZKbRJTvqgUeLBS6d2gpcXWAfPSn79s",
  "key17": "2rgeG9QUsShWd5hgrZYwnScX7uBEufZEcp3ameqAhHCPA6QXL4VAS8jPhnuaHn98HZ4kd6pGcGQ7J5mk5TeBVX5M",
  "key18": "2eoD2r5xbQ29JWibypTDsndLA9v1j37rdCwQSDywufVFUJRjJc8vsxeH6isdQFFn7QZjRD3BJJxTwL5EEbBYncVT",
  "key19": "3mxtjfsUgV6YedLQzcp5CXKtQHEgtrsxRWgcASWdgADRi4AbeJJi4tctEXBJigAZZnGZSzW3xQW628cA15yiGzVp",
  "key20": "2nx4JJLYAAL5uZTsqTGoKDGEXPKykpc9v4CeKqLVpDdW91grRsqWYonAMa1SPwqh8QTewJWYhcHzRZNiEibm63xR",
  "key21": "2RikVyqAbYaZBTc1WGeb8VomSy5M8HvisGLBdz8bs5NXbtw4TaeX9Uqo8y5CcerWHFnNxC5UoFF8QEdCkjM97xP9",
  "key22": "3CvsPUqsQbrp2NyUGYQcQ2JmeVCe7VLvLVnVQr4s5a6TPtXtRFKxjBFHNgZVAR1iWqts7PzkQKwTJH84wE1ZF1ck",
  "key23": "4Yv3QmFua7ZH2S99acxXb4XQKxezbhZeKzxz46tV8qhotEq6dAoPvdneCGJJJWEZSdLTYFTUwW9fDUrA647ESmwb",
  "key24": "4rmDzb6Ybcxuu9tr3TS7Bs4GExBTzMxfYphHeDcvdAstZLBFJYcns1C9k8UUKTy7stRfP2SVtDXzQwZBUJJZZyVu",
  "key25": "3XDCDiTVQtYBnWTrVrWhfPmrgCyU4dkbjELrn2YFAd2Wkv2M8zujJSRseMdkGiYN9vcDFewnT5noDVq9Yo47D1au",
  "key26": "43QrCqhj92ahBvjQp7LPbBZoUFEq8RZcFRv4Rjci7zKyPvKns8UP9xjbUt8gZbuXNwUUh52QaR9XfhJxL6KazebB"
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
