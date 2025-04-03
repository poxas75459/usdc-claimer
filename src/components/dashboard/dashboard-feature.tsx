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
    "4BPGHD9RiW8de9YxUoBVjsF2KGd4BicsfKfFWXfKvRosMsojF2tseks4a2RgwPUbjzHmcDFa4gW8Lw1FSPwbBAWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NyDCoKNo19ftpY4ifHw3et1HK56M2RYqgLBATouxiFc5kcBtXpJ7MNhbjfeFA2zUcXsc9wN3eVfCZyycxD5hkvD",
  "key1": "4xTYMmYUmsz4JXrM1L18e3QQ7BATY8ZPbTLimHArX1woidaRyCZF9V8fLZHCSBF8BwoHerubd2vi7QHxEuEth8FK",
  "key2": "5LxF1SbY6KkLpJmHJbSvwE2XQxT1JWCvTtaMWgjrG4vqGZ6pS8ECKf8ZFHXyApT4C1sDYQtTYNpY8Tj5Tnw6ZU1f",
  "key3": "58UBwMvneyPpLBnfbvdDP3woBVMUMpfX7JPDepxUVwnH94U2jmJYHXo4fozcx1DKBtqeGpbQZ3DSLDs9RpZVKuMM",
  "key4": "RosX9QdPgxtgm6JGKm7gPGett9jTvvaSZRfC3v2c4eoLQMRxTY85VymDK4i2ksnRTnbhd8e5qBhGzNHfuMwniJ5",
  "key5": "7XHxqEk2BRykuMghW6Fk6Mep7RbR4M4kBPGoNBhesTeonJ3oKsgLmGSouRubh9htgmKXAc3rejAKxcea8ZrU8Je",
  "key6": "3Ph44MTk7BiJD5FKMoqhN3a1AVLJgtLguhoNiBeFqdthXhhq8B61EFzbC6BszjxJpJEDkq3Z2e4hoYiBjFz92V1b",
  "key7": "5zHoiwUhxj5pufaGwnKKjpfRaGWzXTKq5HmSz4veZ84M71YNURMaF38MfcDBTf8jj8ueJtncYrJckpKbkQTJvNS5",
  "key8": "3aiNXxxqAoj1hribpBKFypjXHMTNfw3cEfCbMvg1ieL8x3vejraCTh4DdN2Q21utUxvGCiGAMSGtwqQZZZ6NXwLA",
  "key9": "3dXewfjbSWdbS2xq5mAGh1XowjWPfrmbFmNAFU893eZJxHzUgrsQQDT9jFNRigeSWMwGzv3Ttu7HV2j6hYQ8Sm4a",
  "key10": "581QH1R8qLxCHHFnio8DPac798RERkGT2DMTgEzGoeckBPp6ncrvFBCmh5UPgmZfVxqGnozTF4sasX4hfzoG2KZQ",
  "key11": "3LL3sjdKvz2xHpoQfjGJByPZjYKM8GcgR7QqKnJr8knY2f4nSftH5eXeTnxfr5md9EGgNEoPMypN87SJq2nogjS2",
  "key12": "E59Eaa4QYGMRyia6n2fgdxLJUGMVQatBwQkkwutbuK3VjWeCcpNo98WRZBn2JDqku1VsQo5RKnHbrxEWk3okCDX",
  "key13": "nkkLDX3wxnnwAeripi7dohbuX7fRibc6VfPTt43PQ6qsZ6E2pXjvxg7UGpSSPKFZZ83E6WUNjL1y3kMyiYiTULS",
  "key14": "5ZTieKFxLTDSNNXuZnNstG17e4cL5KHUykrAuaHt9KHuB1oy1Xu74gVqsjkiNS3b8s79CGgQwfx8PZNaCusNARXS",
  "key15": "EvWaLjkiReS9V8jXndkjJprFD7GdjcU6QDt9yoeH5Rsn9E48SaqQqLgsCSha6oVS3eU9PeMnSb5bi5CqUn5U7oa",
  "key16": "2e44sJzPhHn2H94aQYxVfvinZheeU5wzX62g7ZSgM6sHPDmsec5MCxDF8hezKdjUw1Z3ETfVuijaUKZMuAQZWTTt",
  "key17": "5AhxAjDvHw18EVLkjvcNZYQKx9f3fuLUmRBGbx5G8QJHeGY7T5b3XtyAmVkFtYHAUsfRHpgD2yxv5TmgLJVHeah1",
  "key18": "5uV3wDN14mHqjTCbCqmEwCw71buTwRWT9DrwAKL4MB5NMEMeXJTRjgH8PvYK7XW7aoeUbbHdAp15Nw2mtwp7GWv8",
  "key19": "4DQ4RBMDvjrceNGnysmw4LvwaSZxLuKf5XGd8XMjTcswLcbCMwSEGM5gd8tTonNLwfoDuqWVvhbuVx6VUA2aYGo",
  "key20": "71KepHWXcSg9bZh49ExxugQbkZz1iFk8juDLMa5kqxtb3XjysayoZvkRNHLR688Atm2DCAgW1weJR38WwCvYcUz",
  "key21": "2ECD8rtQi5RLqL9JSZx8B7tiUs2kquyxyHtqyDrtZo7z9AZsmJQ7Ls6MFPmpjvhLsxkBQeTHA6h3oCC8zrYm3VdX",
  "key22": "3LVcUzqGV8fdW92DgDpwSAFpsp5j3JkSi2bw7pPFxSbo9dfGfBK4Y4cgkX37JUGingxKgfLYyoC4Tr38ZKmt1Y1C",
  "key23": "4t3oBdoHha2U11HDRMUwVfNdbcUekKkomEJvJoQEG4Eaoi5nk2qL3eWnDQTwBBezkdZWhfLqLNP65JLrNuP31Ebi",
  "key24": "644rGr6Qy2DhKe9bRKxgLKKoFPSFxUUuz1JenkP9FjJasjj7LHGX6RcXinuZvyNRCEXjL7tiq5AUKsiZLAmz2HGn",
  "key25": "4hPGHpZZ63iEygPjvRW55kuar6yBGxdxiisAgD97XvW5WMkPyXUkmsZha28BwQwb2BmRsZ7pXDjT1rtGsbcZSAVQ",
  "key26": "3HBr7AcupikmRzp4mnRdmDsLmCyevURMU5w6Fuf3Um7kQWvXUcDxx9KxvyAAKJKEJU5Zf5rB7rugMhJEYtjN3jJU",
  "key27": "2kPByhm1soYQP5ycoRGztisQLQ6YA8yQmntfaauPqaGiMuhZFpqC15fWb1U3KSLA8RHaKsyrL3Ha3u6jJERySzxe",
  "key28": "5SbVYYXn7kPMQAZjugoY8Q4jyHTduA8Gztqdzw5Bx4BN3EnTDLXcaA9AApNby21qyRNjwVfXyvcEd4qgvMojEtKL",
  "key29": "4HPUBMYNLaYaGjS3huJs9JvYeWT4idHLup4Qf9KjUXgdwTAfnE7ZkeVRDiv2qD74h2YZC1qm79PEp1Bp1TLwekTU",
  "key30": "3juLTTCZ7X8MGa1sZsSuqq4Ar99BXmiNyiehgQq1VWPDv49KEi5jnynhBL519zn8DLSziFcwngx4ge629DSXYovv",
  "key31": "2gCpcncLgqnFekbyMcZxzN2btMhnoUAqK1GQwWD9t9m33UFQci7CUN1URBH2iVDbCc45to7uBizyebNxzsAvxJjs",
  "key32": "3poyFEqp188VordFeiVTjmDbEfYsjoRQUfdRpZi7yUsLWSxz9aFwnNW7DmF4P5EaxmgWayLG5B3MptFVaR1BAxt1",
  "key33": "5przYfGrZJhYPt1WvyzW9Bgqrb1vcjPmKe2UG56vkEyQUjtEjA8JCR3Woms9LBofGv17NaSunQ86QtHNWqaYsDrp",
  "key34": "5Uxdfb9ic2U32Th7dJEPfdW6WFNzGihcEXCyhUT8Hva1orttyDiM78r36sLToKHizBDoQX9wxeAnDR41vCGqB9bb",
  "key35": "FAvagHAsw65HGoGNk9aVeUoyRGxoQSAfTdEfj81Pa5rMyy4csGRJZYLhbSdDSLcSTRj5UahRd6maTbt6mzTSyFc",
  "key36": "MrqERtmADtxJwbED79Zh2YkQ8ZptRUByVuc4WLWNqiKQHPYkqqSunnn7ncZgZUrTLp8K4iyRgVcQbc4UeH7dNH4",
  "key37": "vbBNaWUQVP9oror4MdH7ZdLprxjcCs5QYYDz5EmbxJbu3UpLi8bWDQEoy8rDr5YVjqeHozHYmZ6qzecZQ3ti2Dj",
  "key38": "4CoHotjm87quTPzEryc3z615cZc4abudoMpeGv4fgRmUE2iXMrtUhfhaGegBnpixctgD2n3EFhohVzRZGY21HGyB",
  "key39": "58NQw26GDnifPT6fDJE1JGcG4fZr6DcpXHRQZ69wHJCwi11jKwcxVLnJjMMX5Mfs1ig7eArJgvekUyuNQvnD6V33",
  "key40": "4yc4ALRjbe1AvrcMSsGV5iq3xA39oLiDZqisiqY2XZY8reh2TEGboRRZLfqut2F5w4Zc73nfW8YcaYgi1WddfbzP",
  "key41": "3iAEK3fHtLf4VwJ3KFYZ2MMiHJ3M1maHXFAwzdMYnspCZkoxBpdaMtaEjxNQ2AZ1KJuWc3PFPCPjzAwTU4TUkNHh",
  "key42": "5DdcpW83ZpnKP1pRtWw5KAECGRh1mcYrt19SjMhFrsQKmkXTNE7meysRHyGgXDBySNwBaxq5pDM6XMgZP2bXe57q",
  "key43": "635nA2PCFPrakyJFg9xczefcZpSh86utatt31PvrcMgmAZDjr1eSjvvks9JWxhWNX1kFMZdTUyWCtBNyxzPhi6H1",
  "key44": "3ZpoqjyuxRRQ3N6n5LaZVUYMb2V3RLkLZHhEz7vULFhTkgTuwEDj57d8t9j3nwfn81XZKAxh3VJdr4ds4aZkTEp1",
  "key45": "3Yk7pQsP1YcfGJpC28mD89cPD8AowLGpLFUq9PqNTeeENijHLnLQBDGBxMi4AULrC2aWwdDtAGnV1FhNdpMN9gBK",
  "key46": "3EhccZ165msEwPXHZQXNUc9fJYoBkvoiqBbvsHx77cWAotTUh5VcXUi62zJFDskrB6dVRHTRNa6Kxpxpogop8LUY",
  "key47": "5HcoG5Wccye6UdgXbJueAWRogi8sCB9PDGE6QQZ1sMBdU9yNptAkt3zoNK6ruGCjxXYLpdwbnwB9LoF5C6gH7yVF",
  "key48": "2XJxoZfGQRw6k6KfjkM8rLceFXJaveprtD166BvkiaHQc1rC39t4osuT8GwrHYZBDd3fiGkbv8QVmSbFTEFHV5Yz"
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
