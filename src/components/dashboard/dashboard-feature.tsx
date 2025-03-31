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
    "5pVARAbd9hzEHunB8oUT4Y1iywDJSr6YdZWEMcLuesDY1iD9DxAnq5DwW65XR5AynDP4cCGXKbvTDmcbZU5j9Nxb"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3okxY2M5xRpsF7VtR56N1Sd7rDA8kfFso8nV4aK2w4kmCw1rm789WxRVrg3nfnJG19W9pzgCA4QpkPzrmooAaneQ",
  "decoyKey1": "4FUrvjzA77pAH6Vx8hAu8icnfeN8TGtpmr6JaAbHG7kg4ywLZ4CE9TdkrB9GQr2hdWHsTPxSrk3zp8c79fnXufES",
  "decoyKey2": "2psfQA1V7VHhqYPV72DKoBL3AfksFWYh7XNxE6z1w76Arq5b7BMT4xM25Z6nGqh4fBcGa5bir8CN8P6egVUVR2KE",
  "decoyKey3": "3do4cLPGoUZDfDdR2Hxx2D5C3muQuBiDiqorBAVwa8RbQDxuGxgqnDoVLGX7rErwChXaPxDUCdDWk6jEC5HjNjGB",
  "decoyKey4": "3SGp13rYqiWQDVxJYDBNuJw2NXwXsynDr1A6L2afNPZuHBf5E1sFw2726ToDuXjAj6uMjXuEhLsbix7Cecu6r1Wd",
  "decoyKey5": "5VZ95pTA6AQVTVEcNWtSqwWUHJzUQ8HxuN4YRjDxRT48izrCr1FT7AqYkfW9jzqdEi9vkm3WzY5ZRiYdbVQEXKCe",
  "decoyKey6": "NVpGiP6drWi991TH32FWa4Bpb9Sezsff8kb2Lc5a4URF7HEmLFY8AEZkQmZAcgHETA4cmtwuwYqUuSbAqP45Ya2",
  "decoyKey7": "3FnauP3prZ1JUiHnuzHYog3Hi6kLvKKyiqa3ykPtyCmcHLiQKECXxqer4TdoBC98GS2vrdRfMrpqiuZLpYV8K1pA",
  "decoyKey8": "65tDzAMMaFRUKFQg7ZSMWyJSFM1KeViPmFVLuumB4iRtCWhhK3v7gE7c2p16rqDXNhzXHayVyrmgEairKBAw6GkE",
  "decoyKey9": "2L6Py8wtLHhwSNQg6CchKDv2jDJZKpTzPmAH4EPWYKLGdCJYgF1aHvLKKK4NvBvGwXuaX1Hzf7qhzeueXqCzfFYz",
  "decoyKey10": "2C3mkCFPB2vam9JGxTsZpqaT47ViQF3FeN64ywufXyE3iQUfdKCCUFR2jwX4GS3Te7UDgV48HytfAX5PCp4xCumQ",
  "decoyKey11": "3R1MMvikcbYkH15FPVBaTHebx8bPJAdiaENP5pm5MtUsFbiqQcTneMs8AYJSaHbuUChqMR1fdNj9EQN19VY2MRia",
  "decoyKey12": "3kSkS31xvU9sj4TDRXNrbBo2xycnt7T3BHXadU2d2iD4LvhekHXyVKZGdJwLoj1BDuPRA3o5Qix6DEYv1AiePFHJ",
  "decoyKey13": "55QcQYJ1XF8CLxMD8BC1PpfE1aaX5EFhj5eqdk9dtnNxZDWoWqketWRgkYkUzJ45VTz611ryUmGmDVC2UNLAPHHn",
  "decoyKey14": "5uw1h8PDJYouTNZEd67fKWfuuGDJFcMFvKAiYPWitvpH4EnPEswxPNHioXTPXDn8H2VmfKHQWhQ4gFLje3NHXa8v",
  "decoyKey15": "2NYkzFfjDasMCMBkLNxMRPECoDj7HUAyrrS5hgmbarKDrTXgZ8vuGrQ4PiC5MmRaKJKcCE6GBpPj62we287HJysA",
  "decoyKey16": "3UAEJUUVJhcKKSUWENNs5fJEoSxhYSC4VhTDwvTXeY1nGUvhPhaAoHim4W6oug2jFw9jTiSz4KpopPkXxq1KVYWm",
  "decoyKey17": "64dMf7bqXorTjqBsmarpWLmfDeygsfavZmskcU1mU1ZwsLV3GnVJy8xwem2QBhCnUVyu5KUJM6Wyqhv5xooMo8ad",
  "decoyKey18": "5nX7gPksVBtoWBmqNNj9HitNZpXnBCFB7h6GSKskWLYWP8qE7wXYjs8ChA3FLZnymF1pPTJ5T2rwMfjLvQptTVvt",
  "decoyKey19": "2DTBAdWzuEma7GLiqyWbSYgE8BxfxtaATaZsi7Y66M3MU6iSjzS8B9q2yFCv7t8FBBkE89LQHeaHcmNZqgWqsT6S",
  "decoyKey20": "7Z2m6Sz7fzdWp1qvX4JPKaTQMdJ6XCEwQtemMH4QnSU75G1T4WkZtLsFYbXRzHycr9VbFg2RJ7bbLLD9BzousDd",
  "decoyKey21": "4Bd1ibgcvxePNiQjqj3Qj4BXhq2TZgZDch223VXzVVwu4gPNvSdf9dNqMc2Qwnn7AGeXjzi9Yq5h9Xh4GAjs5bDx",
  "decoyKey22": "5LGKwVnSVAnbT8qZZA3jqYM35pPfmDyeQwntQ3LK7wrLh9iWtXXSNxEC2dH45cDyhFh6H8kJEmWj3ypjMibQP6nx",
  "decoyKey23": "5WENpkZbUtMoqJXQQudaNcyQceMt5a5vUznoqB1oJoQYjWiy5nb1jg4WnJ18D3BLnyDTHev37Tm13E8r9yNvVzfA",
  "decoyKey24": "mGQM2yRRNF78nHoCvNPivFPKLTwGkeJr28S544iTMvPfhzB2L8EeCQDX61VktLkefP8WxMVKvNraFRH4qLAvVwy",
  "decoyKey25": "5L1B4taPcqSqxhGR8Bw3pr3okFqTJPbpvw7LHman9kPBqwmALxN9Sk5io8XejoT3maZTezKv5ZVpNxFn6HPLHWkw",
  "decoyKey26": "3rLHdj1WTsYYtS1yVHLALptaqBVWYdtngkcSASSGUVW5eqPQg3JXhf9eLFS2T3KLr1gBKEoYwzJ4Vy6pCW9Mgt66",
  "decoyKey27": "QWmouzUjAQS74T9zMARgLECdWrxcAgV1Xi9UPndy3HD4oj8DBJtNC3b8FhxX1CxiUuuzYWezakagBasyHAqpKAK",
  "decoyKey28": "xHHvHtFQLqR5NAQYidtrEQKo2SmHLyhjqtA99JGWRbSoTYFe5kXazuYXX6LyFEWiQvNRWaLHEcisKAzLo9fjTnE",
  "decoyKey29": "358KHvUBMQhkQ4n4RvzWCbW2M1ewzqgjJjuceGqsPTsY7MEkGUAfGXGRc5godjAn1nPrFJ8be1kGpUkMwX1cizxX",
  "decoyKey30": "5suiJbZc7g4xjEv8tJ4g4xHb82nRGGdT9faWMGGhAJooo1tqPk9jkZdfuBGey2CzuoyygctBfWwptRv7t7gMXpj7",
  "decoyKey31": "K7Fpeb4rGsLHvPZN9f8YDKgguvrmmmRojiFKEjLSo4X6CEF6b9tediN1zpG8boiNqVtehbvxob91NWd8N3xdgS6",
  "decoyKey32": "2NZ4rTWaGrJ1MuVMMnrqbhw7LZ1JiJhhntgw5qakTDH43NUQ7uYrpbPWfyeNWpppEpx3kuVaWhZeh6okDGQqBBqa",
  "decoyKey33": "62ym3CYywCtEqTkURrrbbuAvdvyQTtZcaByyFUoPCewSGYc4czavh2e1n7H1CZxSmkBhMc5D9m7EqhEJtwgSm6PA",
  "decoyKey34": "4riztP2XKdRL7eEHpJDd83knHrAW9T18nQN2ZFMtUp5oeqquf4dbL1NVDWqFZ79oR4Ef1QEZv1rsGxQeKiisRLw5",
  "decoyKey35": "3tZs89D3MbxFpGDDWcPGw84mWCbnZYT9wc4rxCSvKHRHqW9bhE3xJKep2BLczLMmGZspisCok1BKGpUv15ZErac3",
  "decoyKey36": "edQS3ybSXa61NyX5usD2q7ZrVdNhHtMwrTdj6MfHKZrmBjMsxCcNtpVNtrztnqaCUAwqsx8daGT9MN4xh2nqpnv",
  "decoyKey37": "5ERWWhhzM4qrfLhWnp7T1scaEFkBSrpjSFJNo3RpsiToEazECZzDWgP2pCjU1cN163EtdMPNPMERbvi8dLjDe8zL",
  "decoyKey38": "65N4ESvPif9xuoyVTxjiGLkxBsyYgGmsMyMg67HFgXDcHisBjzu6B8d2qAunMAwYzdykvmKEGkRWruKpCuap5Tie",
  "decoyKey39": "NxmTwWrdnV3Ae78bySK6u3GSmiEZT8uWUhdqcxuahnnug95MhRScZ1YYbuQGV4pX8K6WjRhYAiAh7cr6ZCdPdME",
  "decoyKey40": "5fw68CKAUFaiUNsxDpgwccXx256qDDxZawMxSjj48ECgZKsadmiDBu2bRrjbCbuk9jN98QEFuMFDyi8NA851SEfR",
  "decoyKey41": "5VBzftkDF4bZ9aF7uoKoM8HTCcLXR4YneW37ckYNAUtVqjnX8wj1RWQv9FdfBuMrbJgdoQXTQvWXq8JYvPjMQcjw",
  "decoyKey42": "dRXBXCqp9R6Kt3ajHFKXH7BFLh1jTS9fPvJQZ7ZNbnSa5pr6Y8J7FfvCfnmybEG5xw7uXJxLCi7WdhV8mqfpqm1",
  "decoyKey43": "4qHQtdx1bYG4LxsgTW2obHKY51MtrHiGa4TZV7kRHHUx7QtA755ucNPhWpy4Cod81WRUPqSz2Lw5qjLxQRwHcnww",
  "decoyKey44": "4sbd4QT3bBNXozB9m79xbQwXsmpMJR5Zi5THaNwamZQFHQgsQzc3X4C19rnHSFxtop9QRv9HRaMkgLdwsGtWfkYk",
  "decoyKey45": "3UBfGmiQT669wLckdtw53LhVXqBdKKCjqXhnWooT4KYyYyfe6w22D1XEtEkuuqqo15fJVzgNdutUbfoDtZs1K2qr",
  "decoyKey46": "5bex5DvAXVJ32Yn6GfRAHcZtQ46mZvymMPj82DP41oEUtJh3ws8LP41ze7i9Aks76vSwwCgbsxAKTdb4ySg543ct"
};
// DECOY_KEYS_END
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