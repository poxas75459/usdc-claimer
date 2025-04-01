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
    "RqzyQL6JTJCaBXJBTGWiK6E62cDk6SedB5oatj8QKnmCFdjr2YryUCedGieHnknuTKZX7HBzvfJCT15tF6j72DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZuY4bvfkfvoYn4smdaNtifpzNyD5odu3Nj6xWeYTNoWJYYCCmxAFCFD5YpoKtc4kk5FKSoft51oV6S8w7Y3hyUK",
  "key1": "44c727TyZoYx8kBixZWcTp1fTWuqdbxcSZd2vEQrWJj1kcbKjhetRtXuaWeWpJ6mZPYzWdspfQMaXEH8jyXoiFAP",
  "key2": "3MkUFcbabsHgAUbYTrrnnuVth8vZCKjZqmAuHFDo2LNittQ96JskdbommiJYgnMj7mSeDg8abAxkfiZrSeTYwWwu",
  "key3": "bMAEa5nCPgTwn2RXpiiA8esRSm6RLfUDPgB2sRmXjteVrZhbtyXThZjFxAjsBQZWmMupVZWCndstfbTZ8QjmoJH",
  "key4": "M2pFoPfFDbZ6JqQb5tyUrzQ7tA7p6sKropbaehNJpZw1pp59ECAyrwo9291QeRQ8rASaPTvyHwiRjus9jQRRFW1",
  "key5": "51xqm1nt1Vv1fVy5hUZbhEk2vh92YjbUpgKHcr4iv2C9n4Bnk5Qud94ytGoELocGdXXh3Vs6kqNDUT7wuTo5utwA",
  "key6": "21qk4XQ2zC86YiKt5My28UUupHYeXdcGPt78XxaDigivxgyygU9PGwXehgvhJ7M3CRWzNjsDiDDRd2sq3cwC1wQA",
  "key7": "2M5PvWcttJpaEbwWEEfnnQi5wnMC9zRMAv4SYoBmGxmPNz9Qx113Pr6zHKddHHGTXbsF7jPquavEiWK3EaYWSmDF",
  "key8": "27ffFEXL6wjGYXxDriHpGxyiM6rmTwgsQKLrrGErV6rWNkcVUEMNgxbejXvBqvWkL733H56PiswLkqWFt9XRiJN8",
  "key9": "3pkpCvScigAwoaxRBx4Di2AikyHksMqBzY6gVM3ozuTr7rxkm1DDxKZQNBtTKqXdnJtsXEntQ1qmk2LZEr5yugxz",
  "key10": "2ojV1mCUsdjrTXw5LGjBd1GQAk5zYigRoGPvvHkf9qHmn7k3nj4L3HB4BSRQxekPxnP8LDH4xfSFiR5RbKWEyMGg",
  "key11": "3g3C7YBjXVHJ1S54L7KN9Qok1VHB1Wy16Gnwfnfx3tQ12vUQCDD6xhUQ4eXZHsG1WSDtCzGDdR3RmGdqDXqEgKQ1",
  "key12": "sixrtWzEGCF4yoexzj9gMegGGnwTCWZbY7VZCUtwJHbkvsjF9dKhRwriyi4iAmjTuJBfmTUdMVgq2WZSq4RNrXe",
  "key13": "htACZjJ52g77At4bL9Q7Cn61aCHz1gG7uGFSt55Capx5BbbdCX9WGffkszqmCNYDcmFvwLmxCfRQpo61nN7XUQC",
  "key14": "2NDTQGyUTufPtamUV3KvrtwWuaB8TaNMmA16QMomXNunE9eq8uRZWUrD5jbyVXgEvcv2PWrYUTJw9UrukWij7Kqd",
  "key15": "rpxqZ8Knucsud63SeqWE9PtsqbMxRvg9rQtrSKuyfZs3ix2AWznS6MaPaHu1nM7P2CaLSL5fMg5cZVxK1SbXdCZ",
  "key16": "5USKG46fE69jbcixTsFwcLbax7sna8P8HLdaNYMYwS8154cvwHxkMDjXHcBbidCGuTnb4sZWWJcWaPfAbx9cxZsK",
  "key17": "3kSyFZitnSVFdyNCUdnkoYzW4nBTn28GjQsWr5aeuLkvWNNgrkQ5t9TbtMakCzczWMPunq6QphMVfqYofFHodPWz",
  "key18": "4F7PUsuQxnq7RvKEJU45wphTRWQdzpGVcXYim9hJzPkVSMzjTHaeLqaGUtGidywfzePNx5xNxEqLeWAA7SPSyrpg",
  "key19": "77GdzPqUftZVZ4tBqYucPii4pi7srCYMGxNxEaQbsF4Hgf8yabyfb9MGjrpvFoMkXET5KD1aFTqRABiUhkSTdJP",
  "key20": "5kFSsEiezybcgjF4VYngvHk8RJvYu8WFRYNpVoEjmXqzLX5hZ94D6EJ1pGM5XkdNBd7dqeptVEuDYF1usn5BBVKs",
  "key21": "3b9H6ZV1aBeCoennLuBkWsqPyLUd6C1P2HCKmpLfKvjNvTDY89GbpBQSahDGWjrTDN7VbcYNFVE1V7FsAtkKh28D",
  "key22": "8AYUpaFLJxwQ93RsTjeuPsc32tjahe5ch2CaUfctHqeaofhrbYyiatDuNAi2xkfwEZxrFAMieHLuKmUMjKL6Po6",
  "key23": "3aw6vm7Mg57zKfD5fF5ibgmwztdts5pgJMgH45Uj2vdQNEA5uB1r7G4L2GLsBgSHMX2JXR6rtYPZoyCpwd2m8U9e",
  "key24": "3WCrk6DJ2jpi7WHgJMA55RnE2BDBUBC5hex2if5LAiYryn4r8gut598kvdY3UfyBaVrNEtLRxCV96CvGo4AaqLCW",
  "key25": "54jGYFyLftvJhsHcqaYtnPf4nC2cRLuzw6LjcDrPcJALaVMDuGrr3GTaoZwfARkKPxYJ951MVWNdFnnz2d2ar5Q9",
  "key26": "56ugwKf95tC9e7yjpL29BmA2JM79RbYZkFLML5tuJR3VaLEFjVHBvFZA8kU1CHy23YehV1iCJN7VvNHSEk46Bqez",
  "key27": "3anQDkYsSm6HqYTYpiFotgxREgstDrWvYkaP9U12qBqR4S6ZNqABNCKayWgK29ZRUAXgmcR5cB5v4eXPhizZ53JE",
  "key28": "47uDQCrbCjGkT8LmAcpbJJuPifBFc4gevgoZm9XHHgtMXsyfoRHcRGMLNbnJ6jezZhCRKeSDQNs4gdAXHmBRMHnc",
  "key29": "2KH44Pi2xYeY6LaAtw5Tt23b1iJVdvzhw6QWHdJf6m4GAbudHRtDP1TEBkb5BtSzMr59VCqoN3dzc13Y2ybrccd1",
  "key30": "LVSNmZNNxUPshwKEPEL7aAksnfPbJXhzAFrQ2YZKEDXXjqQBrFVDVhNTtVmaTsUDuVuwvGvM4bAok6mwWy4rZpP",
  "key31": "2zG4TgjZEcctdQDKSzjfja5iU2eYFi9zVo6Mt84iroWpgbQUGQf5cPXWSWgq3n7SJcD2QH96o617TxTnco87Q1F",
  "key32": "2RDSRidu1ukFrEAHt8pSeY2ykP5ZFzph8QLpNKgTonrDbktWL9J1RrMv7Y7XcAgYrUYBxNcv3PrbXVTfKkR4RZ55",
  "key33": "2Gf3WZRFDrZ4binQhFDtTr4d3Xvqxzz5JAUN8sEMd5dekynaYt7Xa8VE4cwJYCcKdZcGZGXymgURTwU5kN3rpXCB",
  "key34": "2TnauxjDAmW71ojj1s56kQv7SmR2PjaxbS1D1dePdTzJMob3oKJCz88zHwSahZ8VR67R9RyQRMFVSm1pVXHAzp6m"
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
