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
    "cLLgu2ZcBUELk6FcYsAyhhWLBLGpT1Rv9ETwDMdFrfj2RWC8HwjSLRMByUxeBgD4c5dVse8mc1tEq385vXGLf7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zzkCzGy6kdEEBPpRKWeWfQx78eW3cShjGb74rtwy7CTUK7V1fkDygSNoYyQuTNYtm2RgEnH7AUz1pFaitK1dyjn",
  "key1": "3QwUvMCiSK84QN8itUtEkwwAxjSwPz4G338MFFp5y8FyDSE2irybscS7X9gsCMTM1XyYANbEUtaZdp956yUHV9VV",
  "key2": "4tkbAni2ATsHiqiumkdBszbTuvgFj4th6sPpRog2QJFSsdzmBbjzRcu1twbMcTAoYbCGwAfcnV2n4LZxs9PQuGbi",
  "key3": "2o22sknK92DJRZwM5zAvptsC1J3Ega26xenog6bypsw51TCEtsRaUSmKifTYT45f8Tkk73NympvVHTHdHLyqaRAU",
  "key4": "5WFpmMasksdRa3m79MfFKmGjbtWDq7q1276bmr7a5yGVoq1dBPtm3jGYC4zUpmWhe7woH857WuyweWSSXz2D3iM9",
  "key5": "3UrwRxisLt9ocnevW8H4eMXaBwUnH1YsYH6Gcb4LMu9twQKhxFGmMJuK2obWuSwr1MV2YtiYQg8znuhwPWkY5Yez",
  "key6": "3s84HYszUfYpQBs2RC5ZaidSsx4H1FDuFQvotHNK5kp1LqAn98yjFjN2aKSu6KRmhkZZQcg8iuZEZp69dAcJPFP6",
  "key7": "fWTFYyyEYBS1c2pxqzU17FqRZ4gKTptuEuBzmSnvkQfNZ3Exi1HMvcPGALzi2vzq3AFPD15t8iUNr93HrAAmUYB",
  "key8": "ujDpZhsYrehTK7YgKovftvEu87F29YjpKNR6M6RQrRiGKSFvbJoC4dF9zN1dEL9w2VUZ6LX1pyKiWCUGaGRV5Yx",
  "key9": "4s4uFEBxk9yv7d6DGqKgmpqgExbCo1efn5VQmCnh7ePGvygyVFvD91UwY166SmYE45wryd6JPcM9KvdjueNoVZLR",
  "key10": "3ZBGjoQLyuprdS2dtfmdJxiV3S5w2SPugbNmeeHEXEVfLUduu9YSawNFnBDeWSxP92ZVhvTDyx3kDDx1j32pVQHa",
  "key11": "2cpM2fdszxjqbWjqnW42f63G6wS2gCFq4ABNAN1W4UG8LCqnxcHCAfmgazPkTZHN4gY3C7G3PrLgSZ32UWfDDUNc",
  "key12": "5a9AtYLLMf5uYPLr71gkiwngCxaK4mVw6BXNTVZuriCUuX3X4ePkoWxRw8Q2kRwK1umY8WHHRmBSzsG8fRh62jX2",
  "key13": "2z5AR7xPQu5HVg24ZYvyj2hR7DHYmNjLzJ3zo2wQekEgB6H3ocX4inH81ph1SBeDYWxsSbENDKn4DMfEPEkkugAG",
  "key14": "5V26i7M1paBK2dXDEArTUBsn4nFDfDh1rAVNLAR3ZDs3SN2Wps6zRa4UdJkxuekfaxD1dQkh4JuTMZbMYFgf88BM",
  "key15": "wb9FzosGQ3S2ADSjbvrmSFT6hoF5osKRWns8GqJFeq6fLWP7f9hqoaTzb2jnK15HFiN1HL9AByJz4MjgfSY9XpQ",
  "key16": "4hHn5YwiLkPfTQTCquaAa39NaUR4fFMXVhgXmdQafznUx8Bp5XpZmGQ5kiZZkHdNwhNrQ8aGS6oYJvq4bJqnAa13",
  "key17": "2Jh8vT38M1CpiUovRiFigQU52aJTd5x356NfXAW8nQgaDgheYspmRpuckm4pr74A6fQd4fAD1aFFSS1XoyRRCN9W",
  "key18": "8tvZKquP1u5eP4hNV1YZdCqmsX9aSPcP9SAGXyyaGntgXfs5Th7f9rHhXDAZNohR6YTc31rKEZMV774kdF2K7Vq",
  "key19": "2TGNCGaqSFoTwsW72DXM5DaTxiFdhYDnaV1PUZRWUYgFGdcGRSLQ1iRFEZz33vnDy42rQtYDRouPUKquupadRrRU",
  "key20": "3Z5jbKkY4FFGXX1wHVEZytNxQFmp8iEJPzWV1PjqwSnJGMPvKB6ZH4mbbYi5jBeRjVShpGMe87Cv7UGW1gXrChYM",
  "key21": "ALQVNouAvVun4KNrPUMYFDMSSdM7HmGAsRqJ16U9384gUJn9eZrFEkVVyhsEcHALpWUfynquKAwmmyLJRPDUNig",
  "key22": "5fC3maRV4C47q8yoTjHRzPnumxpAJ4nkKqqbo8VeBHmFXGptjZjtV6TkuXwzk8Wken39NTUD2e3FPpW1u2NHvdaG",
  "key23": "4RX3LKRyug3ohH2qAgD9iYEARuL8h9tNUWAUmb215AFJt2MjVz8Vnz4ApYg858Z26cC6EnRL1WW84po8pgir35iM",
  "key24": "2HUnmjkkRXoiix7HTx8oyBQpMRU7uqhArRpCZkRT8Tf7wDEsg3veJKqUMKaja77azej1HEdJJa9wtS82h5pavgCD",
  "key25": "35Z4pi9MxwcS2ktA8MvRa3fYciVTzwhvZbFJEsJvpVFDQoinEzX1Pu9Sizkr5mAWyxUqHX5vYZM4G5rwpXeLG2Ex",
  "key26": "3HyNLDvANZC4DdWobShcANJKK8Pvjnty6jNDoTpWh76hAUanhGrhjJGyAhJj579nysCPeR1xq6ZhWm43n5xmCai5",
  "key27": "46hX1DbxmMudXChZgesjYgsWQiC34Mrkqx4pETTBfXzW4paZd5bwn6pHpvaWPoxRKgtcogKimsuuBvgrapo79rVn",
  "key28": "4fwdb4gfsGKkDFWPKEFQvgfUREbpAMwXomx2bveYoMDq5PaPi7X3EFocJJ4QssjSJ5MoaJvtPcFMLBCGEjroT13a",
  "key29": "5sWe9mxZgBBRSZPFFFnnGTZ4qJghfMMgdQQQA8fJU6LhCErKLqEzftwg816F5AstaoryVt8Tw4udgVbTtmzMmDLP",
  "key30": "4Lj9Ff3mjrmdd7nmMi3y9B2a6JhY8y5wXYey2fxgjD5PpX2BL3Gnk4rPT3DZpCEj5yur2vydwNGvDZG8sMwcnKnC",
  "key31": "aJeLeVQyVrNVQFCauVQHJdxvMKKTFk42jKv1HiM3VVQmiW9mcXLs6HeJYBVqEEGbKEG1EZkGthpWGhkKUR8T61P",
  "key32": "upjeFpXWC2CdsCwx9r5hAaQecj8heVjSMoQLRzopUUuHsCGVSoQVFcPqyWGqnyiBHqaTei1gUfLV34Z5dY3Bdu8",
  "key33": "5nDewrmcqRVERTHisbZcUodJ5fsGgTTm5eipbduBPoWZnkhUbagunqVyuYLZ1hGn73nECttHTGbZ6zs5Dt2u2au8",
  "key34": "5H2NWND2kJuwaKhxbShgyPCWEXDtHNRnZa5h5GhpdTkML8GYVBuB3mENywNfbUhFNw9dt1c95e22pWG2a7WMPDzh",
  "key35": "2eL2U6g12Jv5XGpJw5MSWbdo5gpihJh1yRftGWMjbiXmeZaXEKori1QJ16g9Z4PuaVRR2FPW73DvFUETNkrP255i",
  "key36": "4MGp8EbDY5G8QgkY998poMWbQR1pywjYEohVHcSPTpc4HJfaXv17sjpRRXNv8VNVanoBjBhjRZWg24DPnsKD6d5s",
  "key37": "5TvnJNEs2TuyB3nUomwei87HHD8ySTKdSsQdPiSMkUdVPuBrZjFKyZbLdyM4HrfcZPJRoydaPBjQXnwooMEpKHM3",
  "key38": "3kcoNxx7KRhxdprUJmjcY52apHGCACvZhLAbgyzJZE1x4ieiTMo3oiNyABSCvbwSPwxruqEAjnpJMn7YGXAruVZZ",
  "key39": "4naBKJ6igFkpyoZ3dSWFeQ8ffG4gmyWWouYFtUVVjoH7V6E9Jx9JZTg7s9duo4EKRY9xo5rQKb4cHxWuFB5mvKuA",
  "key40": "4m4sKAXtsnfZmnaHbo5zqDLnLZEu5G2QVdH8KLFFQhJSbvP4spcD9VZjzYawTRPPjahL9WTH4a3NZ2JF6cM6De2L",
  "key41": "4oHwHbyH2wFePLGxQ2Rtp3nDnRYmHgcP5xCUrEVHfqnWYgEJNMkxC9eG2GPUbTCQqiEeizorNpHTtmrcrj724haP",
  "key42": "7L3WCpGqRUASNAZevgSnSxmAPxXJxnke4D5WnvsNfXxzP5xWTrmDdj4keWFHmNs3ZcCg6zYnANEXRfjzA8PbCrB"
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
