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
    "MnJJKSCMvu4G5H373bWNsKQqrC7rDbjL4ZHpPyrvvP3LZSeN7PyFgucaBqrjd98SBjgpRchbWduKe5qZijnu2q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGz6MoEryumyAatxEmqgv7PjUc3LS2pc9NMpu5nExkrbp7BxAAdvqWge5QKNU9DNeaYNx2HZSf2o1vzGi2JV3UW",
  "key1": "xDNBh9pSc6SuQtsvrLoT1nAQhtrzWNxi2YNMeZfNcJ8jjRsf67JVYgo4KMyrC35yg59D1v1jmFF8oXSWGUk9kh8",
  "key2": "DfCTwHuF1BqeYPRoUtuTVgjLrwS6X3UtkNduHvV2J3dUcuMwadznjEUVTsHPtujfbX41Pa3HmSJWmodnC6yfqJL",
  "key3": "2J5LEdCRNd24TVemDrQ5d8URhpL1Va2QTc8VRo7oYKZem6t1MePbWVSffZqjHifeyK8GoFMRi6QMsCjJKpDgXv9b",
  "key4": "5XWDPSgTe1LwRrBt8WxPa51XS9FasvAW4zHhRAEPnCqnf8GsW72u8bMGHrmco3CjGK9AtJasLiCuYQcCfZXgkMe9",
  "key5": "3JBQgaE7dwcNJvsGH13qLurt9veVu1uWAL2uswZjf3Vsa6aH6uLLhfLJw6aYYDXkmX5JaRnJjNGUumav3KT36d5w",
  "key6": "4tq4ZEsApndeBQybfAVHBxXxaMuc19HVALe1r6qSVrbYgReUipreTbDreLBEaqFkYxKvZwURnkb4rCvTRaEGez1E",
  "key7": "D4ZQeJpRmiS1n3ngA21jZnunLGZbmyuWbBVCH6xRTfM7cmRUhmtecHUaSrnZY4j3329hZxx46GKXw5c1kyzQK1J",
  "key8": "5ihr3tugLTK5tmg66GkymMPjT5L11aokvLV5byBATNu48MJp3nYV2mStU38caZCHvMpcqfkZFpm7iZP9jeBTYTW2",
  "key9": "4vcMXW4ipAawVG89Jb5qJo1CgWW4JDdfJ7Ttws8MQbYJQWwW9zx9eFN8RVmhFrNxE56ENpeFwXQf86hJ1FHhopPo",
  "key10": "4dtsZK6Ywsw5JHBQLC3dMCSKW9a8g8NP3CFWpdXW93fY3vht2mJkuAAVR2oQw59J8r8eopmYT5LhWh933xoyfqtb",
  "key11": "61aKeBrQfbYC2NCEGFSgBQUz8Tv5J58dyrnY46cWkTTSd9y3MFX7uzV1REUP487bH7cdkTrNFnYYQnNwVtsTdNQX",
  "key12": "SiA3uUvNJsEviKtvkTxVFzUftCob6MyGG3FUCMy5AQio3TZJueyvTj5anYKJZSJHeyrFTxKWLuhuAcjUki9CveN",
  "key13": "2MaqjL3bGLBA64vTvVdPRv9BdmZKzu5rTi1JNNroDvtMmkAGriWcCQM4z4uWvXk4zcUU9Jqh4GjhXyYv8kQ2YsSW",
  "key14": "2sBdw6198x3e35foBFKkyfywVt4GQLvoLALEQHiy4bFG8TpABAZ8HaWPqDpgvQzW8GqHtTZbgC8RRKxfVpbGhKt",
  "key15": "3yyqiYATbxmmiR1PwqhGd8Dd7GH2QwYE5aiDUuzmWGdZgLvgeuHcGD6BoqTLJqakHUd8gX6PKW5sntA8c12gcH1X",
  "key16": "2qpgFjqnL725gbovPG5RGGXXWNmwZvm1vstN9eJxiUd1SzszivCdxFYJxheKVrVwKcBqEkWX6rdzfyJD9oGMhGG7",
  "key17": "3fpztuMAy3nBHmnGN23dXcp1NwhnhHsngj9G9EZLhqpcjQoh1fJoPvjQE7BukjVGXVdaVTbe56H8tEUVvDK2b6zj",
  "key18": "3ZUVxBs7Qm5j4CWqn5oU45ZFpg36KU2Q53RgSLGBhoKgcCw8KGMojQURfsb59KM9CijWSZdCJ9UfsDiLokPsfSbS",
  "key19": "4zuSF15PNczqp6fp3VkvKW7Gmo788xvk3wux68uzUt3utLGBB6vmcdfvc2v1gY2LSL1QTPkWETNxUFNabFe2qSK1",
  "key20": "2wv66trE7dCoLM7mEKP4QSfdqVX4FkDGiiVUUA66msaBs54t33rRukzWS1q36XKz2E6oZMQNtkBNwbWkxqWHLBLU",
  "key21": "2r47ScxEQ4bz3gtgytBMQMjU9x5PqGQK24Wr1rhpEiy7QKg87uNqbuEdb9rZ453NHLqW2XXYSEu3GAPJgzBoBFrW",
  "key22": "5FN2eKSWr7zfUozTEweHnapa9HfCp4B8xmnLMGPVZRA3Nbr7MKKW5hqLHAU6Z44mTZSJWdxEfaWaBgMv6MaDQtBp",
  "key23": "5a7RyPk4feFAWV3trm3o31bHdhkynPpKeUZNAxiuVJRWdaKa49Cur4cwTNNUByBnd94ucTn1hHH1QniwPTetDGVQ",
  "key24": "T7NRWX8cMX8kgcBNNBDkdhzdaGuDWNVdnifCN7stzTYT7XUHQEjZxCoizhbBJmZCFcLGht5LECPhUwT8RMk1nbe",
  "key25": "2QChLimyyP8z9THPJvDwBtS5L839NVXWfo3u9kVqQAuE1LnUoBFJNGrVhQP2kN3cugEqY3NJn8XCTfd8GUygVGoc",
  "key26": "42amG6YYinf8qTbDVoJcaGm53DzcgU8Jcqcpe9PzUpiCCE98kCJGmtDdAQsW1D5UmELFbm1CjcvUBTrRZwrdHqEK",
  "key27": "5V8HxQJ7VwqmgtkYTVc4Ydz5whzFd7L24PUt97JbHkzV9hP31AZjtE2TLxcrLpdw7wUHSht5CQABS3WpPUSW4Jm9",
  "key28": "4n6SkM46PTtLGsgeDwztDNhiaAv5QQgLMoQtoDTwtr3hQjTSg6bnFDb3fDYvQrGvkSmvvunFrLXPXVGTrhffrNWa",
  "key29": "gAXb86GaiQNZkA9Ek7VP1V1kQMWSpqiBLTAoCLcvheYQ9AEeMUYGb8qdbGHHnwcdkCbuFphaKwu2b6x5mTqcJN9",
  "key30": "E5oYDYA7gzsjB5jiWc1PdbPWSwL4PDcPAqwPGSkUMN1s94C2PGXhePZvLKYJ7RbHn9bpyEMtXmwUUGZY3NzbM5N",
  "key31": "3AzHtPhtiPTan4LuygQiFY4HLYDZNZc1KbMYyxRz7wnDjsbFqQPw9J1x9Yt7zVwjsMKYs74h7rfxXU7epnDQSm62",
  "key32": "QriaDzNif4ZEuaB5XrR8aGwZtXNmSHrCzCfgWTKumb2wD3iGSdamXTFq6TmHdNbB5AvmbNTZFTcsWKSEMCSZjzS",
  "key33": "rNS8VcMkdi1HKfiBhfXXrxk2KfLcfgWiQ2H4HCpfvacZrE3Mik9h7jBE8kasmdT76vgEWrHYGnft2MHVRyFDk75"
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
