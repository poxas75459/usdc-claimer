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
    "5ADrB2M57eUUEU6aGCGQJywPFvBNUtRj2eHxpVrwchczdkxFFzURSHsSNVVuNTka9xQEFi8N2XutFY41xs9eadZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WofECUsJkHT5oftkW9jSaq9CkznSVY2nfVrBDkwTsp5kZ4PTsF9GfXuhSVsCJV4sftuQySSCZMrVoTbHjComPtU",
  "key1": "4JvAz73JNP5HMLaCwRY2rHiYybLcruvWMCKN9RTWGYPuqhDA9R3A4GP8iGL4HXTztNCYZqsuRFjAGjxGWR7dytUf",
  "key2": "4gGW9Qf2k8aeiLmTb4vLdzEmdrJ8JjDAsHLeg39AsWsVbiFiGacNDbRdRMqPKPMAB3jJXcziZnhxPTvjBbPmYmL3",
  "key3": "F2ys9CXiJzGU9PTeW9hFVQQ6UjLzYQeoMinHd7aNVBLANgfB6Eh4eebLGkRtqKF9AeXNeFcJuS97FkAejsYH5nL",
  "key4": "29v4CmnvFTUwzJc7BJpCQd3LGHXupbDfHur3gqqfXqRwLbmvKFqqAbvkxGVvFH3jp4PZQ9udA9v3yFJawAJuN4tL",
  "key5": "4n2473oPbZqJHZ4LaiZZRN7doapSP8Ew7MYHjFJMomRKemifD88LLBdMsoUc5QHN6h6Yr3rFuKeYTaSvALE1ca9g",
  "key6": "2EVy3aD7LDKrG1M2e9H5Vfgqg57yM3DtGZVUFWUNWPhsVeWjrDjaUFtBeqdtCvT78pbU3vRNnPnq4MaZGTuoYhAy",
  "key7": "d5ggCQ4jiAuyb5LXH1VXMxYZK9EdsC3ToCbXFw8eycZJjBsWAUepNWGXafrbKTBS5jmx3iKLMAQzvqZ1Hqm2Ldq",
  "key8": "4C21pm8VkEUN1uoexkvkmmBDAn1gw7vB1ECyEquPGPxayDgtC3D1RwvBLawVr7H74PnuMoRiRgc8xygdCzV5Y5dS",
  "key9": "3hqt9UpDpHDEArT6XfoLngWJobH4sBbgA5PcWiprc6uSwNvB4iUKGKaWfhq9HEuseQVHW7MveAUg2tD7CqM8nkRh",
  "key10": "tJXAcVRyFpwsoJykpdushU29sg79whBwumru1ecNR5DU2sgV8BFUgNohty1yCyy7LztWiSZ53hYbJmBoZeWGXbF",
  "key11": "Xwb7YMaYGPmhXGTJ6mCZmTbDBaeLKKAVVapbmBzx2biCH15qfnAbdF4koJparavbmVfzDFi22dVoeSvFCiUY9SH",
  "key12": "4VL3zZmZLaDkgHpGWgPGeN2aSBuDNGEfZyurVTMFeGi9DXQmufZCvE1PRv9WaYx37Pc7qMz32eWGG4GaAVPWf7e8",
  "key13": "2GzTE3EDe95NYeXqSnfvDZbz2gUfDFk6yEAMJiDDUpag6KhkvzL2fGF1pV2DfDBdoESkxNf7TKWW11CNrV6kruxP",
  "key14": "5GHEaTQ1q4ZFkjYA97JNJtopTHNtSGGaRXENdrnXtfe4t3dWW7di4g48g2a7uBeAij7xqaCTsup6xL4tvnByzUEe",
  "key15": "27rbaos4nwb6KzHtvRyXLbKPHSdYWmFP3862oPCLh5deyW6wknLucsdxp3caW7ETrQynmFmwemYMHCpyRyYruFv5",
  "key16": "49RfdWYcqQ82iiHUWWeZrQKdnQg4ESJDWaC741whDwQ1MdfHb6sBZdoaekUqapRkXuMVo1J3wXSGJkVQ2Y3wbX7j",
  "key17": "4NNPbb4qhMqGByux1ZqQEUXJmXRCWjtUkYNX7djWNcxMrzEV6o4eJfhK8cw7CdsjLZNo2y5eF3WNnYBmLzRPQKRu",
  "key18": "5pBrAWbLMPAW41YQLgVX3KQWFdJdNLnfFKsz7yzFrX3pKb78i7xLDS56K42STvE6UuBzxWUGEpsEmxAh2TurwqkM",
  "key19": "uJY8ikjqCEJKzN2BtC31sDkiSVCiYw7twCVF9iXiUDiTNNEAsqxaS4jRzu8smrsQ4iEkjudYEXK945DQ68GKaFK",
  "key20": "KecmackxLEHog199x2yjXNJDDegFwzNJrrhrxba6LhAzhmkZfRmp1Ukdc3N2aNMDUfUzSu9WfscwaaLUSoLmYSY",
  "key21": "4tY25qe5tNZpBGUank8jJpG16yKAiY82R79KhBGV3FwGaucxJdcKpHgUxVywXSFbHB6DaZ4phDWwdN8aJGnRLBDt",
  "key22": "3txGXo6KQHksGjbKikneDTGYm7uJbcqcCTjAjXKDM1MQxX93ZFbFppxaMc2rYqjQGoZpuDF1TReUYVob4aSffYcg",
  "key23": "34TjaMohJYdp4qh29NNM92BLGc6TdJYAwsVi5YiFpaReTbKjAJyy4RACuzdA9AoyXtJcDqmr1VieQbj5Ev12YBF8",
  "key24": "2xdmKyj8LmwuyALW58hvHu1j3x2mFJq5KhDdpPPua3q3irr6BpABanK9PCCarz5dBv6BJAaFLhJVx8MBi9AhxsYn",
  "key25": "578mJDFmkAvUkjqwv1hwTnDUNuQRNebFXtUrdgUDZgiD64kqhnt2K76Tb1n1rRWMaY9ucfjeXy62en21RXnY2Ywv",
  "key26": "3SjYr2GKg9FsYEypa5kZX5aNuSgn7As9bfLEs2J8E9WFFkL9HUXEjvCM8KamN9i5s1MEUehdCUKMhAVoTVpdxXk5",
  "key27": "2MGmFX9GfcJFcMe6PXQRWvmNiEi8JYhSsLW8z85Sd41ZnxS4xtRJCFSMUrDnQfhzKX4U7BLHGczvDEHCy7t3bg98"
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
