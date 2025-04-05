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
    "2HCjg3HMtuUwMwfpDYchHzKmrBoAixHzoszDNUGWiDUu8dvj3idFqeDsxWqxWt65c2WssMaxMp1RtDYPGDib2cRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E8DvWg9n2meU6Dk6RkDNSEUfg3mWbfogTLA2SaoEugf1xEfdLxmLJjQW6vBXYu2EDNj8nJZbpdhauR4xg1vkdX7",
  "key1": "4Tdh7gbpSdM2ghyiGraG39YVAMV87Hd69oDK7BQe4GyVsHnY3QcRc9nJTVSBwu21iSjpfZcDSZ25TnKTanCBhdWY",
  "key2": "43jMsEupYPjt1JpjwZBG5g7FHjwe2EU5Hg4AmkjSRgY3FCRtX8vGRgDUfsdPvPKyNazR6uiNngUSeZ7ZQqBa9LNc",
  "key3": "N4c2bTcPcvGoDCk4JP3f4z9w6hn2s4ujD1Q2kWnaquw2gSbb3aunZQsTGBaCymr9qoQs7kqfaxzfZRkJRRdFshK",
  "key4": "33kjT8E8YrUNSzhZCJbMsg1VadTTaMnrw46pMhwqm3eZZP2fLkBYT229Fbpj2vM4G66NGuBB1Khg75ov3pWniJ4Z",
  "key5": "3H6PFYbC8HRT7EP666mHRUSdo1VyJgKydQuE5u6uf8FuFndmv53xk7kMXN776jt4WYgL2MCMSRG4Sk8wN87G6Nm9",
  "key6": "58LKURy3iR3wWY5RsSJg8fvogosNhaM9qLGxNkhDocAr9sUYqhQG5crppnJf8uEYRtM1vKSGP9kDAwnod6YtR8Ho",
  "key7": "rxbUcw5uuLwZGXVb9B5CK67NmJ4755UH6iMKDszvD2B9gxgoqTy1ANUiuchqhmNshBavGs633UwBXi5SaYCQPC4",
  "key8": "269iKXg22zeoNLACLPE2qGnH3kZ2Uxt83S3eSEzsKT845h7d5JYEWhbaaYQNAEiiUiLjGoTJHa5WiF3WsDmfgGmt",
  "key9": "5GzVTJyf9c9ALspNP5kmh9U4ojSkM4Dz9ETL3qnZWRrZyoqSWP2SYSVaraRykgP9KsMGQQGBzHefxZkSgJYxdnwa",
  "key10": "2QayKjE4EhsLXjeNKJ1m4UtQG4uwqCm69SevNi3rpqfD8sfzJGyRLJGzfFFs1KiDvKuKBXAa3KnJ3EgsaQoUY9cG",
  "key11": "3Y7t6d6r7DuSDKPywQ6Jn169LtPuVvoR2YL1GhyStAMPBoFSDGdDShLh29dCfvSoi3coTjSNocuoFUTFscpotjfw",
  "key12": "BM6yWZm3diQX4pipiGonurRMJbhp9ri5EFcsCp8WBFE2eTzqVfUnoQkWV2QrjbAPaJ1h7QKipZj7xQkzT496Khz",
  "key13": "nnJCVKaaBUpBVRYBgsa62RVpEkMzAwEaBaJPc98kFxvzmUcdrbKyAoyNLA3CLaqNByUKfmpKnN4vBQgbdZgYBzN",
  "key14": "5bQjD4UnfPj5ZEesBspvwz48xRr372PXobHyusRmjz6Ytn2PFrG6nLMAan91ofp8qgUbn74quawrAAhUszAsuNok",
  "key15": "4megV33tZB5QLsK3CWs9UMfY7eyfeFL7PSicM9Xunj1NZneFLQSM3CHYCLpKVYRBHiQuWcDunU7HGVYDvsuZNrCM",
  "key16": "5gYVeJt8e5ZMFGUhFcePkHG3GiqzuFfvPATuejVcHx7GHibVeSyzATAPTc88Ep47x5NGxqqAdJvMD9vWm1dUQ952",
  "key17": "W1m7VweE9EcY4xexsKTytHeJpqC1t5haqv96ue5fCCqtu817a3V18HpX7WSNP5tfeV1uGE9CFwjsVHnMc9jS13X",
  "key18": "MsAbRQsR6grPopY6vPAdSUNZsrs6eKZsfchT4MwTdEgiroGiBiDJVyzeMtBRoHRo7YuWiPMvrRNiPKKT9ivUNwy",
  "key19": "4PWCBokUbgnckXYByLuMfn4a9QmjuSSz1ZsS3VkPwSaPPWL3MbBsvq6jtwftfHpKmuHyTpNZvUsiZcN4aGzyywQs",
  "key20": "c6ey4aQf9TBxSAUhArvtHovH9CpjVnTUkjXNNajfTQ8eUatZgLFdnWvP3t2vWbsFWp6Xdd3Szf94e2s7NebKpnn",
  "key21": "3xDFp6Uzpm4kkpAaQRxqxGJEoFBP9rV3UoEM7crAiAaWi7TQj5W1kgrLUYdSnb82Vjhhc8SknysWk4cqoPS9Qukg",
  "key22": "2gAxrqm32HH5nWbsyeewQewUBrCmx3MtYrYTUwhkyPmKv7dxayqWtMsF8LeiA6nPHsGZBav3Bxc7JrUPZh2ZCU5V",
  "key23": "61Pthd1mG7vc75FGG8vPdeGBpWCd93fHvUrVpQUyULg9Mmf9TB4pW49s8SYAWNkSjN6VB34LbpAf74YAUdjg2hq6",
  "key24": "5tnnM3i7AZv98TpCWTSaho2XZXkDB3wHasoDaLJZqhWBEJ74h5KSrXtnQgX4SzE2dQcXgdvWfPPku6A8h4RWgy3P",
  "key25": "2DR4TFgf6wnmAiiApB2au9i1C644mdS1MdYEbZEsxHtrwBUdDeSoQGi9pschQYavq2GyMo1PvjLWHvzvPS8ebQHS",
  "key26": "2m4LT6oAqrXvn3o9CZrGCHgqjEKu1pdXUGrKzziKGtKcDjPHALZDyiRNg5WABnMkEGXzwrHX3JKgJniSnjfbg5nn",
  "key27": "4gX4WJ9QbvyVFieYp2Et7oRNxE6bp3rU5xtWQE43M9VSsCFxHuRHCdupi3KaCwabeh7UeEbHTBKotTfqAM5L4Aob",
  "key28": "3YgWvho7D3VVwyevg2ifnpDiPhrDfHxwTDgVypkUekVKcyTr6bX1Zr2MAadgwYXkx2xwK5oYgb9NMntQXxGSgVcz"
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
