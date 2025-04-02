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
    "54qDSF4Fp6amfKff1NWSUqoecAspQu429sHkSbm9FyMdQnexxBg6npL7nSw1xDdk3V1x8q8pNiLjGLPLcAfwLuJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fig5gLMTDhJ9YwNB4iJx7WspfStXNGrDj2bc4xgg2sChJBfmd9MADTwiuNHQh5aGEEpZjRq5qW5QR9FCzFpGioA",
  "key1": "4X96dyWyzGmmX2wQUutSasiR3yq3KehgmbbtoNBjecV7KEsLauB1Kond7aTLveNNZyevjqG5BhSjyhGRKtsMpawR",
  "key2": "244iv5JLimRAbzGsqmrRXooqL8GbdeEjdhG8MoMzm3dHsxGeBJ96jUxprSNKiynhpssnnLHYtjY7oGLN2rTWCdvH",
  "key3": "5RpW2HdBokppBb98bi3ab9U9Qy39z82MjHz1vpcGCSGQQGkF5Hfq1izQYJTGAzFbXX7ymqeggirJgnj4qXRTLVwD",
  "key4": "27E6iGgvTRbEmpdH7W9nZCSMDc7SVVf9641U4Po8QxYnq21Kf5hGosMeu6KNRQTsQe1xeCXEE8fV9ApixEpjhbdH",
  "key5": "2NGar64wHE3GyHss4jg2fe4NLHVoMs8P1xdLr1FjW2e4fS9Zxw4g7LgaMKQg6A7xQFYJREmJmRmsk1gTra1djJqs",
  "key6": "3WQkdXgRJALAC87TYJDSG7tpkgYr1aompbQkgE6Czr56mYxU2ScjrVxf8UL1YAyChuchxmhKXBVra3A5dAP7SF8u",
  "key7": "2c2o8bzGsGwkst8gkjam5JMfsV4QWjXQbWNzqhrf7w2TARGgBpatW9YtW5GyuHYShbxGyVW2X1WiyadhMjxGQFNR",
  "key8": "49jy66EYrUsRst3jDGqpYTbLjXpT77TFejPfigPsNm78EmeqvJyJFzmYLmZSz4keieBzowxC5bv7jPyrTb7NmZMz",
  "key9": "5HtT4LGmC4QvVmDs3RyyzVhoKFnpRYzxKs3C6UaGoKSbEeuqALpYxDgzaqqTdbwDmgj9NpPToK9Wjw27fff6FrSu",
  "key10": "4inNqqCvkrjVmNBjSBUtwudKv4UKMLGNzxpp7RrX26vyqJdWEYsXkou7HekovJtEYYsee8ZpGrMnHSU7qhtM77Eh",
  "key11": "4ytvLUuEMNVgwrGVvjcHemXmWmp6TbRfU237gVkU2mJP4XvtSpp3XXYvmriLA2Wruy4Bgx6N5TkUKpmFFXJGXdg7",
  "key12": "m8GXKE4PW35EsNnAKTaa31HfpNuQBYY94hrRtotpyKg4p4rU7bRBNx3wM7mpAqqNGhARgJY9cCtnk8sx8AfG8cL",
  "key13": "2dVJVJkDbdANiiNZX6sEJt8Y8Geb8UW9AUnSWAJ8FRHms2GH5zdaeGx1TMk1EWkHHyNdt7YSrWGVE8UyzGTjfH8t",
  "key14": "2DMxkSqFpp7bCjrUuFoRJMfoefDhLBZ71r8bKvfT1eXvohD4fh2boWBoYrBJ8ZnzFoDgr7ku2nLPHXzPeSMAZZ7H",
  "key15": "3Ee13a5c4cfQzRR8iac8xofsLb9WP5uZ8oaDJZSZRMUdQnoqKPBdQ64sV9hv3BZ5juABfEzMPpuMnz3qaxEDjntc",
  "key16": "4duncA254yABVCzXYswm3nN1PERonh9Q7Vkh9MsjL2LAE4Ne7kLK6viEtWh5CqRDHYeV12jLpyCP6QheHLwybXuK",
  "key17": "2XwcydAjy8yhFjJbdptknWn4MVXcP2QabEdA5MeDA6gRPtSbaHTm3i1xthmeREPjSpyz45rv44nK1LRhQAww2dSm",
  "key18": "4Pjo3stFUuwFjySsdhwhN88LBVEFrd8mciAnjdurtdgGJv6p7XBkcjvQcwAehTepYm8WaabvDX7ES87uiDTGC3Rj",
  "key19": "4MJZo3zZGSArN2Skz842U2vsjx7JgRjRwY51yoQoMswrnga72DZ4MVYkecTW3XyTtY3Rk3FBS8nYZgUEGA7vdfDA",
  "key20": "5SPjXTQ4tHbtMCoANKFpPUragujLrX6nYLiErQJcBqpKJBH5eLaq2eU7g9WACuGUremBDKJAkWQ9Eh9y3rYFpwes",
  "key21": "5S6mtjHyi3tTb2z2D84bWkqL7dskk71F5PavJcLp4pgXWPntY42kz4q9o3gkeGyJg657EMe2fqmFkigVbm5mQYmy",
  "key22": "5LS9bcuSzDBQoEKDXwtXtCWtMEdTnvjbQCnTwGaryBWv8HQAs4qedZEM8Xbc8KDLmXNpF7DtyVY7hMSoiDFQgwZk",
  "key23": "3qCSYRSDDzC4bvLMewKVtyzQRCGFuXiC8nN2vpASM7HtUzV3JNZ7vLh7mPGygo7fJx3eJA6RLz1KuKsvioknNdNh",
  "key24": "5DqVMLky3rksfVPQGXRFQeMmvjWAj8emfzh5Wd1zPYpnehS99tadB8fAyPMHmxSPAUSCMN3ju3hXc84TDziaud4L",
  "key25": "2F6TpEBxDhcpLfmit4aSycNED1ovitzi2XjnnUkit5HKKM27DKW1tyk2cgAVCu9pQZLHyrstBXJrEeQiKPNkSuG2",
  "key26": "5DRzwdiEwV6gcuhKjWjHpusHn7DEvgCVPtRemcxqBtaFRA2ybEyLpMBeXWErjEeiJ3DDcJwChmGYdJVfpQ8GWv3x",
  "key27": "5raCLKdCFEx5djuC1mBzfgJJnAdaVYkKQ4dKYbxhHidML4UjRmF3NvgPK2sQxc9q8MUNAonTG2s454AfsdFV7dK5",
  "key28": "5qWgiybf83s2TRFcfdgCyMz3TrdskGhA6xjoXyUCkeuHxAy9Tq3Sgw4LYHkYQiEE3TpRFxQrZKPeUA2hUdjvLMTn",
  "key29": "2k9QEArcUFvbxMMxbT23Y2JsVFHXBxK2e5ThKWAAbH7EJyhsHhC8yW1gBxDrFTHAUSMggRviK828inVoMizAKTaT",
  "key30": "NE1oFmM5oJ5pidfAf4H5ejQdLxTMcjfJgSeojeH6XT5W2WRYA6DjY9GKQWPWDjq7QJWzGrQdmGNDAvjZALhhdyY",
  "key31": "2QdRZcP32DmerK7PLhu4V4hY3CVVUAjqQCbM7RxWwgZjwBMzzqY1uTrTSMiabQhGVkVu3waKn2RMzHiPewetT8rH",
  "key32": "3utd5n6mu3x2g4DWVBPpuB8BTkwcQZJseXf6AdiQNVw5uSyBFNCBhMmRfgfWb2j3qsDZwohwdAQvBNAhSRSiYTrf",
  "key33": "2sW4edhs735s9x1rHqruN5qoV4GUQPK54bDrDW6xBP67nni2hT2NyZYUnS1f8aPLq8M6yqK17ihZkoZSh7eBVckT"
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
