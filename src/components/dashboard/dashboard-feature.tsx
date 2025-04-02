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
    "3N6YxRQDYRC9gY6xU3EWzCApcRQygxXGNjr3Wmh1gbRwA9yZcEcg1DuFrAmvGvurwiPTCSouxAbSGn1vo348QcEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AF1N79BXeX8QDGAzC7LWumTGiBPtAhh21LeVQt9stpong4e2F67G3KBak1eAqxWWqSCdMBnN96cdtqmdMTBaBM3",
  "key1": "2Nb9me9VAiQuUKy9Q15DM91TkPA6q1kexN2iBS73d9BNLxnqLo8oHicLc2Qt4j1EmMSdHzbuVt2hGEnd8eq8roTh",
  "key2": "27oHAmx47BxZ4bbxRFrcHkpuQ9jByE4trfNmm4hfpQz4nUCMVqSmBsrLKeKam2RMezT4ZMhP9KGwSkdmjhueNCWK",
  "key3": "3s1Vo1odySHR3McUZyQzC8ux8UnN4J3E966TJ1EXmrVBVLCNVXAPkY55L4ZSfrQE8tFSNoPU9XW19Esh6Lvo3BHe",
  "key4": "3vNLbKba9MaX2Z1yrmoGAwphvfpYDHCLuuqxUqiotDBqxoBzkv2CSGuwjiAVmLNB5UJcXNWbf6rw7v5ZL75smWWU",
  "key5": "3NdKK2FhTepNAQ3nqVReCb2N4GfTXUGEGuQxjwgB4aDdKUXhdo6mHJWJuo2kehdg65dZRYUfKDz2FvYD2vZkrTg9",
  "key6": "4cHRuPnUSJTvvLEa8u7MNWJokgyQLSqUgVm9zVmWNnCWcoePdt8QVu4KsLzizy9M7pYuvGkU3qKac256yog5yVa3",
  "key7": "2JpoLwsvtmN8UczktEF6nZrKmPGUdM4WwFdC2YW9XfvaztoqYa9Ho1vQ8oQ2hXsgAdWvDtVP8zWRGgRqQFPh6E4E",
  "key8": "4hDrQmEvo6xaVyrFzcZ32x78SkADeRCVTJoySUakzM16c9J1UGpQXNeGX2DZBsWrrmJWL5z24XSjPKWSdXHgTCCX",
  "key9": "5kkZRBNxBHbMVFgUWXYrYbz1c4MtKMVgZU64cFrwkEyEZr9vxagGWAKwWVBa6diA7xkqipUNjoZVLvHeC2e3vEfD",
  "key10": "5r2fQ35sQHPHpqNadEs4BTLDCFfTuKykwasBpBSSiM81Fn3Z2UKUVBKtdpVLj66acEqdJyQDAiDxSWYK6PqJ48PC",
  "key11": "59axu1QxA9c4ZNcYzwYeiy5DSDGsqptyTfGwEaEd7AGiW6AB4Eo5tjDbeSDFoqcgwfZZtEF2TzimTyr28uCsgmTS",
  "key12": "mdt6ckHqfFjcot9PpCJL38YjbLi2CfzKka4YUZbAsD7fkEojjMp9NEothyX1wZYd4u8cxEDAja5tUxjnBVRQqH4",
  "key13": "4GAQCqG5q8eqh1AoUapKh9u8sxrFfRGC8vTyPQJWBQAWCvCaiBiuxe31qL7RH9nvXLEZ5XMknPCvvewKZoXhgxD4",
  "key14": "4SBfKeDtPsG2tf8x1WzaNs3GW4kfzLdsC1zGjL3vfW8HRVQbt8uqb3cCVom6sDuDwiHuno2wMMotTtQw2UujnLky",
  "key15": "2afpAT5vHUdZNpDHUVkxbtm7R1wErvGa9Err4TCexDxbs1MFStqePMFg1aXn1RarTieq5xts1GNjCzBUYSbbyq2g",
  "key16": "5j6JEo6nLng9qYYvNgft1BL8mwhM4zMLBCSe3o7kjGMarWC1U5is4Dy5g6ikBBCqSi1BLo8nstVj3ezdyN77vBfQ",
  "key17": "2HhKmZ3tzzuS6ntEwujLcSwiAxz5qmSgduYxAME9eEjmFZA5C8k4EpaYsEcbNn57gdM8bSNCXQLHWsxeUSoqjNNv",
  "key18": "2r4x11NqQPiGeXAi2ZWkH6BHu6nJuLArY7B3v7ST26mmdTQfdQUH5T2mJT6b8R6w7bejUX87UUFFjvUpKoe8owNF",
  "key19": "21J7n3zDnXDaHCDWcbbsMTkmktX2znkDSNUTLoP5Y16zhCu4kNvLL8hvfhXDKBUhusm8F45hpAmmi5cWTkZn5QZf",
  "key20": "2Y24sGh9DtYvw39a7msRHiibPvr22YEbnZamhTZoDcShRoYtdCfywSfPGb9iYexcT2mFrTsrPBJq5zkKmtw8E6xE",
  "key21": "ZYsHAmRpxcgQZshgCuCTSErYpPSVN3erDDwVozemW27K6FucyZ1KkpsyuWRsxCTHtikDnQxVAudgEhtxWtWhDi6",
  "key22": "5ngVgPKTS6QxHu7yViwj5mArSLCBkBCrgMyH7T5gESod8AWU1JV63zmYJ5L1fgVszSEHYxT8onB3bbPnSvWbh3nh",
  "key23": "3wLFL2dYd4dDkHDcwxeNiPR7uFNDCQW2QHNVRtJp4WBq7RVANAdjoambkVynBZ5VNsdtjyK5bN7FUFz2uNDHLBav",
  "key24": "UPNxBAvA5fGrYXpYL7RbxybG1nGWgixdiq91hh9e77cey2MqpgcrJS8eJqQuDJL676vPvXGB6cE5SwiwEvKTFwW",
  "key25": "xDXqhiwwVFVcPuYDHxLQWUYhpkHXAiw3eVKrbdVqAsMjThgDr2uaWtYXRZiRwdzH6J38bL8ZppCnGXZ4359yAWE",
  "key26": "48UJ7DrXW5CLzyriygRNhfe6ksALEZJrf3Q1PCZ8JFNQWBbRzvNoiUvTpitcZbH46DbVPtzy29N3ULa9WEWoKRLj",
  "key27": "3YVod1t7NRqUdzqJfYxo3kyxkJbeBGf7XUNwWUGq1z35Yq2BQvvspagT1cDe2bLj2H3gTUtB7AwLgyTmzE4Gw8ea",
  "key28": "2C6x7CnC4AU4kCt1DDJG8HL1m5TmdvbfXq9rhUfu8EMG6ZEHA1HNhqbmnts8DqRDMp24XDH5L8k8QFpW36yF7P2c",
  "key29": "6bgbK93X1kNsBvi9xyQvcE8sndo8iiiKPsFuHa6uvvpFRdFaWueL6xrcKFubSztFTe8mtmF8GgWj5ynJ6MVwqUa"
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
