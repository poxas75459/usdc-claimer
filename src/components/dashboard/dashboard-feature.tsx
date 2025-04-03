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
    "3QYd5n9s8MCTpv6rKE8XGibucAZRttNTZ2vx3h3asNkJqRdHNWnkkj8w1CkwRyDtCTpzJpfPnpvEQ6fCqHGSADyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3GiEuPgFFNb4wrLnZDDN5xg8sMBefZWE3NDTL2QUgRXjETTcYQJhFJP6qTdyJVWGRzDkmxttQ68a6zz9rWABUQ",
  "key1": "4kBpkwQp26nU1SbyA6gCSWUZinzywXE9AKzy22i6EsUT5fKksbjR8TfXNkTBcuqeEyh2Bd3JjQY2mMMXyUojJxnX",
  "key2": "4rKyBBnU51Y6yUxhr6hPS2VDKBoxpwLDS6rGpEZkhyJqYq69J4DzTPRdwZdcY3XfWQ87tikn59r158f9LrEpSY3S",
  "key3": "3y4g3ri1vUjpTpxb6J1HG8co31q4XR66qt5wjo7ajGjDQXb1o8RdNbgEN3QmV9ZST8NMekTL8xxMxSEGLViyp9nD",
  "key4": "2WcKYLSgQGdSoPFCLkPZa1WdDjPaDxkqcviXTHGd42WfdcMc4grdvcHrhxQt8ezKfdwYRYP9SgP9WdPEFFhrfGuN",
  "key5": "2TuJu2cLRK7TG9Sf8GbhkWzAVdUxvcqgZ49GLQNNkUadcCTY3LLhny2t9FhzAbgPBxQRJwhdUqHfubRsh7yX4NcZ",
  "key6": "43R9aH9TowxJRiT9TT4eJxL4Zq8QmgkVz4yEMX9953RHXJQS1e57UZzk9vhCorxUkY7UkAV26De92kAPboo7UC7s",
  "key7": "421bjVFAx1eLSaxjJkTXE89AXtsPqupZPvhCvH6oP4mVFvimg3RdLA2cQLV3pnpMGzQB6vcGCYrgP82WpGxybNSU",
  "key8": "5kFbyJ49g2RxxCxZZiTeoZY6HL7PuVT4MZ4CARLCpqPUWe954kxbr9rXBk3dTtqs6139kS9HN895CeXbqTxghvsd",
  "key9": "4VA5Bs9LiuKJETnxgMfvmhG6fhdj2u6QaHYad1nSvByxw8RWw6hii5FTiCd4ta3qq5ikd1DVQKdGz5s9uaBn6TPw",
  "key10": "3Tf76hufoMNyRRcfdCkgZHSyWSKDD1c4mj4XeTngo9VQTby5kqJ7wuQMEptYPGzB5t4Y84DzZkRJU1859XckhACW",
  "key11": "3GEnniDQzAbmQEifGCepK86dpyNFycvui7FvRgPMjFRjR7zaKLBM4RaHuxzZXQjLjBvkmcJBfDwGRa8EDfFPPSFx",
  "key12": "23qpJ9Gdgn4z3BKf9qG7KKEwQmNoNRgvNTiWBpP3uQ7ALbg8EFdSLBWvWKvaSYCsm2tq87gbgDr6stJJX3cLpK2V",
  "key13": "3ErCQdW9mc4HzRkLgYpKsS6uNmXsyo9YBxkd9zUjSr8drvxCchdAcg2iwWM1c3uZE2LVvGqNFmZ5JddWXDDLX8Fi",
  "key14": "4PbsfXQTx8rCySNw1vAScYxoWtjHh9N4CRmuRivxhnQMyaEvZximdagTCYRwqNKKwdPU1UZwN97WW6nruwbFmdjo",
  "key15": "5jSikyu9nKnPGvHMphFs3N3LZ5WMziRFM6HJraHHd3rAF7ZRVJ7PC8ZyACPttTVHmTyEUXx9goibkkLRzcD8qWBx",
  "key16": "NW1s6YEbqYhucZottDhoyG41ZjHNT7yYbvbnTHUk9vWrdd3xjQdFueFZiufzc5YgT5yShwM2AAdbpkEVC51XRgE",
  "key17": "4myUCAymHrxp7Jp1NFVpc1Z9PLdz7v6V66y5dw7otWbkQWGcdSC33uFbQgWRbH5Nex85cxQnH2ZhtE23k57Eg9ka",
  "key18": "5HdC9SaHTcK3qfpL4qS8x1JUk4GQevuonPJejH52UvLLnNBnfGn64f1NWcumkbxzZ6WRbExmextfmg4XvnkUfuqA",
  "key19": "3Fy2AejhhyvCy83YH1eBGRPnh9k3ST8gXtZ49JbYtUTARpJWJPQhbrHkh9haE1YesUem72xWKr7XvC1HU5mw2T4D",
  "key20": "5yBTP15Q1kgovxts7c1LktW8diKTUAKoGenTKqd26uB4ZcoLmVqRe91hMpXuNncqjiue8dvC44xzqnC4BTu8bpfm",
  "key21": "61r53EBtpHBLV6Su4GUm4qVbWEL4KfwAvvCJpXHmqagozqFHJCWV7VY6nnSoBiDniMULpwHB3kFgxW38fb4CFnyh",
  "key22": "hASFmH2sjTwXoUFoHkxjbBSoYBnnaGMtfQK6v3vDPakXA5ByRn9e7Ekf31m8NX2DXiT3R8SQmxLQZzacuQ8sno3",
  "key23": "5iiZHeqEKKmafGyAW74a4EXrnpvUeTSWzXB8THqoBXQrwu4p7Nvqm7Lpa3C4HAeCnBoUr6GwQtRyzZ2RzR89YTfj",
  "key24": "4LqxfyFieVuEV2qWEwrRr5mAa5gofV8xv3y9XJE2e7Wrycw7xdv386bQwj6fTrpKdKSMWZqwWAYFSHWLvsxAAwwt",
  "key25": "5psfJ6PHMdSFonmcux3XdQR3KChVunxghCuM1qQ7v5dbiRn6CZswE1YXyimLRRGGe2oquq3rZe7BX6bq6G9tgi3v",
  "key26": "537ao8AeazzaPtrnzTw3XPWJUXUsTE6Narmb3Q67vdyu6GK7UHwPeM73Rkc3UaKQAnDmE4BPEjXfvKkuTk3mCqFT",
  "key27": "5aQNp3p296hLrqQSJpuKkjJ1by625dbEcPtm7ArheT4HyXgC4e9VrvRXFwggLLtBdkDmE7oEoxDmuuFgMTSNp3Z7",
  "key28": "4wFj2h1xKxvmww8czZ4CeGHd6JGEoNMZY72hZAuzJV5kVtMw5WZhiBwErAjS44VCkmvVGEmadSz63PBa1sLdiBUY",
  "key29": "2CXdNgbncsKDRJZFu1Y9QCnw9bCzc7VhiLCEv1KCFo5hstoTH9xHMuRBRzUWuXbKQUnjU89uz7We7XUCFivbrmaH",
  "key30": "4tP5id4tFYP1xXCDRorScfwPF7ULBnyy92BYASodNEgo2ZR9NtMkFDVkZK58L6PBAXrXzuPFndZrZgmxXPPmoQmf",
  "key31": "5cBBJtqkpJJrnpB7aTH8qePmgcNjQvk8VsK4rwjkPjLLWM43Lh5LqCaqQtx7Ygj1qbiWRU5sGcei4b7NZhJeoajN",
  "key32": "2ZSWJDtgb8FqF32TKJc2JhNFyM1QdDB4RcCTc31aNBETTBRLdELFjhdpDydnkezzhvvWzrEdHGLmWfEKqrWpED1S",
  "key33": "4TmTxgaUZr8FJ5iPtRcJSQuxcCyxbACKYPVir84wUCZ6b28NTmoSvV92NqT9FmdbDjXHVAYpZkEJJi27DyjgUumG",
  "key34": "3aPDYQRm3i1xXJ7LsPgtpuapfG3pUYyDLGLUpy8i9o89ctMCd2xnoWrQt46hsqMdgiWgzMVRWj1KxsnpCN3uuETV",
  "key35": "3DFG4emRf4u147HcVuP8WsdpDFxWJGUA69pA8qcJZjmVYL2BML3ht3LNYd6Zdx7FivS5VsgmyMHwQyc5VAtoh7qK",
  "key36": "3i3RzMaEoEumMCTLa3dPtLXEQSLTa3DikNPBv5zzMkwFbEKVuxwrBz6DXkjcoEso6Zk6LC57sBt8WyaeiLw1vfSN",
  "key37": "49h65uscEjXyGrN3dpjrcTe6rn1uoerLaQdgJ2PsehRDudg8Psjy6a9VVoHs2J1GHuaXwVPxSFVKEb31cMe2syPE",
  "key38": "2v8RPNCHA5amfrTFFVLEMRKqKdcPbQ5VT5MoM9odv44DKxmPxK6hMY4WpUboDUtGFtF3FwEhzKhrHXtWKo2Aa4id",
  "key39": "ZmrHbXYBkC9SNpx3nJdCtLtsH6gKeGKT2x2APrNeujm5jPmiRoETpjPeYJZxsYcxWduTWfyzSgoBRTfDYsuFXHp",
  "key40": "5vpe5qBszcmg3SWUtjTGGCqdwhY5RUU3ZEoppRdaYiRF97Pag9KcpWzbBUsbCsAUFX8shqFCidWJ81ojZgfSgBax"
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
