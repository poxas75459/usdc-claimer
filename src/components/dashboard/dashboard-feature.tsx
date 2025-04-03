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
    "1McagDDkyMCYL3UvGKN46FJpXQKjiadEiiySSPpR7xHE7qFEoDUnyHrrBoZDsJKUPVmQgv4Vx9Yx6tbLxFaoD6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z3oT1wSz451A1zcUBMNBBcT8J8cEbDKk2CWLz73Gdhod8KHcDTDF1zpocPKHKShH49zkKhAuxaD6CykgFTMspxB",
  "key1": "GXYuFL6WihASfAjRoDF4cBMjXYKDmDS3hTSAvLmEcSQxCwYFZMvsddMAXiaZW9hXCXKEZ6Mt8R67WGYHYBjJzmu",
  "key2": "5XdqjAX7KMVxr2K6QrZbxCGqiKzdZ9R5i2ahrZpuqXFwWXmLAoeaehhLdcrhDGRe6djewvpHBUCypCELF3WPafNA",
  "key3": "FDS4Z72Po1SDtpbkxQMbhbZscCdfwzFRCfGqois5igjeFP2dYF4LLjbAq1QqNsEhix76MBGCR3tK9gZVJdn8oxN",
  "key4": "3L76FtHtwixpv6MWM5fWT8t79aR8jEy88x5dfYE2pr3aF9GPfSwranqtGA6Tke3XbiXfZc8erj9dtuWUJ931YarM",
  "key5": "3NoRdE5mPFttvBtLHNCfV4GpM2tMEAMaLVsLzjzgm4GyXCju8r2SaekHTjTwqGHZveAKnt5M4KG4kR37h9GMMgSh",
  "key6": "41ao5KYcaBDYo4v6vVMG7iyZHYtHftFyVubSmrW2RKuxmsaEQqmrQq8f7s37hkU6ueAuS6QoVeiSU6hBYg4YP3VR",
  "key7": "4CciU984XRBQnUKvgYSXyHRwPLX3WGunXj2zcQ5pHGb55KvyxbgAtHSSVUKtUtE6gkTiBdsDqtUauy8ytec128L3",
  "key8": "5UkcV5uthogDPTYqckntUWx1T6zVZMnjr8ihLq9D1KnFtjzxP63MhV8den4JxZxhDScgRLyYEjVEUtMW1SnHCE18",
  "key9": "3aUUCqWyF9rCA57iWT3hmzoC9Rt71gD9Vjt2dx7yg7EuwtKJB63MgCCxKVqmKtsgrkWgkM9fsTgAbHpabofHHFgp",
  "key10": "3fPWqQpkLJaWrekysfaYyoRo6YRBDLki7UXVHzRGy7eDBhQjTHy4hYYtuaj1hYyUS74AJGVeai91vCThtaSSkhR4",
  "key11": "5oFQVYbHkk7x61zG5abH4HfiicHZ8hZ1kexmqKB8MEHPBH7zVecsXEvcpr1Fv8ieWug18XhemKUk1KRcHXbDm1Hh",
  "key12": "2dN5DvUgHhnkMRjSXMcyS39RtX5gKiGQZjMJ4FRrN1UZfDMZiHy5UTqh27mc4qpvwEqBWK2yYShzg6LT1RnZfmmE",
  "key13": "FDu8UDTi9htG6x1H9Hyx3baqWMt8RZYq1iySRJd3VV9qSDcqAoKFbBGREhHmaLF4W6eYXPnPJH8bp9wk6jLMaRq",
  "key14": "KfA7rQZLAn2Fc3GKPB6fT6BPY174JD8PGkRpdB89zQkmB8yBWnw5LawwRW9daWQsa5wQXiGF8xLbYXLBooqGsZZ",
  "key15": "23ooaK6vY98tb2hWCgaop34qYPP64k3shfwXETfUqheJEQs9q8kYucn5i4VDXrYzoyucmH6Sq3X1S9eoBR824Ux9",
  "key16": "uWZAP6e2bE56CX44d2i7vVeF3cyHyNefFsqCF25pzmJiCLuqpWJhyDb4JWiqzXh1WKPiAeWdcSZpcbkRhSZShnk",
  "key17": "2PLHXPeV6dzUkJcbyQnXbxXYPf7ehS6zunwZSnQySiz6CbPrSDqN956mgBeUmKpkNbsx2GSyymg2VmHDGdCwGyWN",
  "key18": "3B6LrDU9WcGujSsre7cmRzuD2kP2ZcPTyFoTyHqpVCLzWWTRxd5SPTkUghBH7T9gZL3GwZazf4gLMDi1SmYRK5TK",
  "key19": "xrxSQiAbptKsX3shPLwSJRg7JGorv3rBKApwvoYDassC33dGd7FzoswKbfg2WXonF7ePtYtpa6da8tpv6npoykd",
  "key20": "5CNRUPYg1teCmGDwXWgnh58qTxzA7EbgLqqfiGuaBHojQ2vowdi5H3Ubt7SRqDNnTBdNwtDbfZNUt6T4dAfufRtB",
  "key21": "2Qa7sezH4Qd3phiANo2TYUEFdc2S2424nqHi2mDNtkrnWRhZqxQNsGQqztXyVJNAAtuhFCKuGtfwDGMAbAbbqpmZ",
  "key22": "UNEVy4Q99S4wejUARuU58YskTSNPfnYAFaUDD68XeMcLXoHkB7u3PSRevUphLUzTS46EAemGRQmx339MCwUXnGy",
  "key23": "3CNzE6wRwzSxXsUo7euMWz7uTKdqXb7cvFhu2bRfCRtvzbjqixGYXC19ksdqcBWaTCi7MLvVLzQ8utQrCwMq5cse",
  "key24": "38t3N14rsd7yBhQsexrRmqg9QXd925PSseEAcEgWqpEP7zzu8MdJhDWvDkHvTg7yPdUn5tydAEHT2k2Ymnupdm39",
  "key25": "2G6ffboaUwhktr4zarZkHG9GRjPaPYnGvNPe9ME4u4odRVrCAgymGD2KsoBggAML8cZLvF4xzLmBsEpeijzZmEa4",
  "key26": "NZvsAnA4n6XpbrAWV74yJwwijKt9gkZQ8irjy4wGiohATNEj6sjJPaSHitVAzydEtmUkFz1XEGy9GRxmVQNuXYA",
  "key27": "xsFMiQTNYHy85vbV3o92EKCN2tztsox4Eg5pCzkQBKXeq9iCh5bTqyyyCNcNRbQAgFdhfm9uuVsDgoNJ89RMCJ5",
  "key28": "4amtAJ3UHqWvFsN5g2pbtnZpnb9wSoHVYNThBahJwJyDvungSo27ZSh6Wv6cSBFcf5QyzwzDfeNRgvAY3CWq7nF6",
  "key29": "5GRpPEgfYvEN8hwgu2DBpaM8RXArkWw1C5hcgTYEW23CXhmFf3z6rhVHqBvaDmajAMKfxuTHvkfbsjCUDTMk9T1L"
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
