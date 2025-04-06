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
    "3xrJM13MpXXkMBZ6Pw83cV9vLuZT7ZY7Scf7pzuFPt316QiNg8HLNZcjW2BNLi5QgGkWdxSqCacGM4nBHBjZGpo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P4M7NHEsQ3qDrgRubqWg7N1YaQiP3P3hDKP2YK6YjCVQkxtf38UQ3s9S31qM3sTPup74dyR98soYoAYV7Yvudi9",
  "key1": "4uoM7frALSvRe7iK4ExuoC6867r9bxpMFCSgKdvi3uZMnfb4ew5FoYeRfpDxHu1nSTiFqmb7ZBvJ49y9kjHwurpG",
  "key2": "21Bwux11ET9B8NpidAnp2EMJVXppkFzJMYLUBW2nHTiSBbEo7o7twqLXWUZ9AfVSSD6chYDRUBTA6cGGh2vGVogQ",
  "key3": "3hJSAcAbG5GCx2T8LLzdyVGbZfgSygprRW4Ny8FB3ju7SxyndKkv2PKUFmaf9Jrh3YEusuZ28FwdDHV45wM7eNNd",
  "key4": "5YLnYf1pSTXN8ekVFtfL9uZWASdckY6gT8Mcz1G5x9ftWsH4DRVQav3KYoueH87uQAnttEmwAqmRcbhdVVLUGbsg",
  "key5": "ZyAkWZ6wVRDDTqCYv5oE4Gu4AEaVg1KCHtZg6Tns2HbANHvQpLDWh1YC6uCr1cGmSJMkv5kuHRQohe355fZFUWj",
  "key6": "5mu8mxu8DP6BXhAdNZQ7qVPpZVisrVeyeKZsYJBSJmM7kH1emr3MgYPbCxEtnWprwsxjb6XrKyrZyBAuNoRXuqoy",
  "key7": "SJApQh2yT6fFYpds3UzVNE3sd2ZR8h6SYv3qp4pB1oC4irVzKfM7UiETqW1vGusopRYhx3CdaZRnWxyzkgQ6vWs",
  "key8": "4qPUdbJwovmosHYi4ZLw8AakdzTVyXFbUx2xrNeuvbJ5KUmTKVrEXSmqWEK8DCmVQCpYgfNrG2iNHTiaayEKToAd",
  "key9": "3JyiiC69G2XsQcb5UNpoWVx9djHD24tdrfLu5bBi3R8GT68cDwwd5bCAt5VWEr97zsffAcgk9SnTx8oCrLne7Z9x",
  "key10": "5DrbGdfUPpQFUmBtV2wqdrM1ctVLASi3sgmrkMHmXSyhbuyawcUBwPWQtABfXmSHrw11Cbo1oXxaG4FEo1xdLVEX",
  "key11": "6HxxNnZTEujhggZrM2auY9FLx2wbvYNeSPjkF5HWpXocp2boNGC9bPTCe37pCaqWxDSnqwLvfLjej7bFFrEQ3yw",
  "key12": "eFMG9Bd2cJEQweY5Zr1tMSwpa1Td4fGn2yTWJsS1nuf5NWYoVuwTcfW6gTdjadBYJecpBnMFZmwHs2X9EDNQyqt",
  "key13": "1wqZV3BGDpqgmR5YWrXfbj1uhWrcawPMGbcnaxUcCmETetNT15xBsXVwZzyiwSeRCU8T1gf9TrLbFy86eUdqiw1",
  "key14": "58nyfr24xLrBsTg3boNckYTWXjDKUetjDxsJ2amXiLGiABB1dSb9nWwSqrh9epMuBFp95DTeniLA87taWJBZ5wzT",
  "key15": "NhoPbEVnwpHGurbqqaxd1FoYfVASGSWxLz739WupeBHuEZscU5reNvQAziz9MaCK1jzwipgh6F5Ajjt7xKYmCGN",
  "key16": "5LE3D94VMB5cWCAekoqpajzgwYxEXStpVpJ2UevfcB42GRHnrkR1C64VnoC3tPiw2ErwYberH6UKv5nkwjkLaahu",
  "key17": "2AMwGoef7nqZpcaMdfhi2VYn5utCe2SrbU4xxwq3JAR9oLGTUYReMQEF2wDmrHCFaWTyhnqYYpq5fy4THpoPSeQY",
  "key18": "gVBaUajUTPBurT2nvGkuzqscHdDCqm5tFwrQzFmS1RkgPw89UYy9WLrq7T7VwadJS77RHseBF6nLS491iQ85rco",
  "key19": "Q4BYEU8YwA55etzgn1JdkBg7WrR7jZXAAPJ9ErKwedgKy75CUP6GrhPRsVcZcT77iup2AzqzA3VQ9DzXfBeQehi",
  "key20": "5w1HMRpebCsn5PLJcFkpdQNY1Yu4NCeCFUEAF8EcGfcDAfA1ZyymD7sUmi4Qh66txurqUsAaqZw5gpvUMAFXdq79",
  "key21": "5uLmqYkDRp4TNS8orRXvomkCdAXuQxnz4qR1QLq2zKqVGgoLxtxiFTBt8A36cTKXfpWMNkLsRBiFG49K61DACDGA",
  "key22": "Pu8mpucwMTdQrtEaFU3zB2fjKm69jAyf2V5X3MYaeFfxonHfXRDaFx54wTif9X4BDBdZU7mSybD8Nm3wa1N3ZWp",
  "key23": "2hizyxRD4Qiox2PHm53VjJfj7uci3JaYdWiGFjAJfHCAvi3QSBU1FzpHUVdT1SBLHTicAUhd5tvuydJCwkjP5Z95",
  "key24": "4izWAFJvFEqKGKH6n3H9783VncngL2Lt7c4KEKE15YyXmPP9fYdeHixDW8goDJXcAS99NCKyqcExk3C4RKSBFb7p",
  "key25": "424AxuJkfjg6wReCGEf4dN6zbpwFJqhwRFydLXRTSoTn1Z6PsHDixugjZgN6Qvb2VMsoAS9Mnw9z5FBtX7UCZiib",
  "key26": "4eriodBxVCwpkTfLrQTcWqc7dFg2rw6RCkgmTjJNKnxyqZhFBFAhLKX36pjgrh5VwpXh6pUVH8XDB3deTRQ3cufo",
  "key27": "2Kfx2AHLcYfEfXQU9rfgaV4ygaDm4MUxVWY8twyto3xsYc3whCm1UDQm6yr24RqLWVs3theWvGc6Wthxh15VeUs6",
  "key28": "2MTb2hfmodEebbDYhshYFzzCFewYnivLMqT3kc7o17hJ7Vsp9qKTPo7QuUHNjhtxSAb376qWSa8H9PkQVDjhkZu2",
  "key29": "M82mr6xyqmyoFRiWgvommqU4XSmNsxc7W85QjnvHXhiFs2WvhQ8d8rt89D7iKZxqGsEhsDVsVSN3by1Y7LaYMkb",
  "key30": "4e6aF6i3zuLswAQnDPKLdQqsSc426SzxfJekkTs6Ekot1NeNNDw9oze7jm5MwECib8W1s8t8aDneCAB1353xVW2N",
  "key31": "5rixmqDTtHssRT2TdVejsmNqyiA2Q9o3B37QVqb5qgT8kmgAc86C2hDpBToV2gzd2Q4xdtzJm1gEp1MQWxX1JzmC",
  "key32": "j5cBGub4cPn1uNQNoXzCjarGMTedadRUH7RdFZWcup4sM5FdDCCEHYzZf6rzvDTxVRc6nw798adn7eQgBG4bLCm",
  "key33": "5cf2k5t75XJrNQYshiDtR1ngHLjytsGXQ2Fkgr4k7xsZhSbo3CNPmLfFLNCrcwwFXnErE4u7E3jqdhzoPzdNt7Ky",
  "key34": "5wGoNX3AcqXsixcXzE5zMGYGaaEJwuBC3BvQmTzQ2jzn6qA7gHdeENzZYV95jsgGzybbTawQpGsC52JHpKmX6oER",
  "key35": "aynuiX8nHSmcjvSyUfiXc3hRXtGYBvu5jE4AhXNxHJaL8c8wozprj1JfYMBckFqSVfYFPFdct22DLJz3zJsSSuG",
  "key36": "44WoAgoCE3WNwmi1J2sJ5ndpvAXTMt9RKQvCq4j4GJRtJHwXCe4PVoNFEv8nUVGrTd5XBBJtPMpQbBDwsJxUE2LM",
  "key37": "BNLBJtXrbioaNXy2WECJgurkR8XfYYWjSu7Rd6TVHKnWCF8MoHYX8yJujNVX4bHL9BAFJG1QMAkwncgwbcSMDSf",
  "key38": "4EE4Y31Fqp8DJyaTgy67QL47dh87u5nogXhgx3ZzY51SAkqpZdSGMYxRa4MT4KQJEjZWKdDdD9zfexLb3kNpu3wH",
  "key39": "32wCF8PraXNbc1CvxVeuraxD5DfcGjAqdJ45cfSkBiYJqgp9zTn3daytQjk1WiLS6hQpjrJ9Y8L9nQgQAyZ3yVYY",
  "key40": "3H3dS85vB5Q8M9t7ubbGyYniphiwo2ZsU2PTh4j5jnsCGEDz7nFQnyurrf6DXUmDdAWuSfp9uhcqK4NQ1M5bgTHi",
  "key41": "366JHHyKs9QCtv9SCjrh5Y1kZUBjDsciYrwarZJdrH2G1Z5bs1ecpys69vDjpdMPxwsYx845HJVxTgeFRs2YNKKU",
  "key42": "3bmqJ9uuErvTpGfyffGkCzx6shu3BtW5mdvSu9wB7HHYNK3rrzu83j8jqJxoLMPycx195k2gAtkQ9zN1CMsTQw7w"
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
