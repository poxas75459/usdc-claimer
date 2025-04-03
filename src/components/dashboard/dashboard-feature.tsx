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
    "4M69W9jjxbU4sexCbGumuExC5yfdYXu1nvqW5sb68hN7hKuz9e7asmPrem7kTmgb6BH1ST8Nqk6tF4yuMfhEiUfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMozwzk7qzPqdS8sdyreP8LWUEhFLdZhrC82wqcEDu6tuxCf9TYrkdCctJgcMf8S3h2xWMVXeXCYSGFGrFCShKG",
  "key1": "4fsfghzuVCzWh3uiLRwvEn2m8phEgUvuxrQLACJBYaFbkoaWNeKtWpAC7PjxnCkiMeTkeCC3CPJWoU8gn6KC5jic",
  "key2": "292U1vEbUteEY6JvKZN4S19NP5PvhH9uBWm12wGPoNU3iuaKRZL42Qej5TMa8sKaSRXpLoCXRuyA2aZCwkP7ZDis",
  "key3": "EnqaVPrkSDtoHFSzAeWyGWHBjZmjrGLnV3fB5BkNuNg9jtocopMaNLCQ9LRHeRB4i9W2A8j69mcTtbqwRa73zUb",
  "key4": "4Vt9uSiX22qkodCcv22eRJsSJo4VzTWGrFvo41uLSuk62xrAj2TVUj2ZZRwXGak7Bf8avCMbno2NRbyTPsPvGjVR",
  "key5": "4ChBzt58QuTpmvQuEWSDakX9b2HryPLwz9WSLztPfGDn3pSPkUZkxySBEeNybnFq4g4NdXrURrMakSTukXLjcBpC",
  "key6": "3kcBKXeQXffCKWb37ZEAsGP6DJtnp6WEgek4Lkrzzx4TvNVFHGKgs1PeYyRK9Qk19JUxqq2iEqbzdqKkw8zMZrpH",
  "key7": "4cwLURZ2jCvqFiAbPiSF4hWByv3FsVzJ4FaUCgTZZx5EZZzPnSTxGv3LAyrFH3Q4TQGnXgBGkGvmTEwm7L72auSy",
  "key8": "5nwA6vASXR36MYBghLjQCjZkANq87DYn6WSoxiW93uSLxPhbaa2RAj11BtLeg8RPebvqYnhach1CTxsEuvsx3Jro",
  "key9": "29KKkqi9tLpFe95mipTt5jJ9QawDbEXGJxgEybEFFKMQbdb3KxBrpHW7QykysBAUbc4tvcANCyzZBD1EM3HC6iTg",
  "key10": "615RC9GmbqvL4B1LkMKKzGmHZqbUDXW31JBqiSFBZygxBky91sxT3S9Ri8rZy5K71XQmVaerKNuSH7VUtSrqT66m",
  "key11": "4fjaxeycmX5PRaysQDzeriYSUA2k6VSUiREHb4xhFyHx46ozNfMYShwxxRkxvEMPHffRhCgHNsFCykpnigQmU772",
  "key12": "3NPsX8bsiR3BkrSrZfKmoQkGTfNF15PAqXiwvNggQtZYi25U3DEzqZyanGgAcq6ijmzHQbSWK7tqB2UpXgE5CG2Z",
  "key13": "5CZ8AGsRgfpyPGjjEArMajFE5pkLcM6scTKwF7rnKpcYgf5j1NvEbmaXt5Rx5cA3kGAomMyfAAr1ySF88qiPgw5y",
  "key14": "4CSkkEtAQqq1uSbcbty3yYLAbvPpiUMeoeHnxVmSK3BmwfpZvrpKwYAckkvSteSWnUNrnez6mnjUSUP35LEV32TY",
  "key15": "2fHGkrBRMqG8ntjHT9WqqpWEYbQYy2WFaGhMo3xTnQsFaxxGtXif1yCtr3Fch6guytPo8gM6vU4QtZiCAmXT62Fp",
  "key16": "5CarjwwBHV9fTVJFPPhc5KddViEk64N2UFHmoDUYipagiYBzLTSAeUnKrrBfbr12AVsUZFp2ED5qTRm2tdZHbG5E",
  "key17": "3RKuSp2ggpJErRHQQ9UKPdo1zqqp58VzRzYekg1go8dF5xSHX8P8EgjLVeYWpy7MHkrdQMjde2ofDmLj93Lxo9J4",
  "key18": "5TWRqqPo3M1eSmCa3r4mV1wRFGcToCMAAvd7Rt3jeSCtznT4apr5gSrw2SiqZwXitKCdHs3yv2NiPsRp85E9Kz9Z",
  "key19": "63x53H4Yhn7MLWtW6EadFfQpwfEocfRQRTYrEwqwGSaPz5hBGEjMXatGshNviA8QiciT51cQj6ww5RGgnTyTH3UA",
  "key20": "3UGUQBwcHnLnMdTQWJ23R5zVMa4wFiAXcT2JiAUPF9r3BRBkE1B7XMvS8qPyA66mxNSmjNxc81JEoePPB68RQDpt",
  "key21": "3WRPmkM7XDpxyj98tfWKBVrDp8Rjd2rBoPYhWh1SXpwZ1Xp3JmQ5BNVF5xhTE6V11p79tLAD5cKXnUvq1VPbexU8",
  "key22": "5d2Nt72tNbTawiXCwZCyS6LNNoAJePLktVBZ1sXb5kK3BX4zmp1y22om8Tn9F2hS8oufDTkvAvz2PPQSpw8RF68a",
  "key23": "47Aaz8rFV6VsQeoFB6raHYzqinxFLgBeTi7fEwdrk8uwhQu6T2iarWn82D6s852ujWBXoUe3FV653B8Bhes8aXMs",
  "key24": "41TN2Vdg4Q3aUy3M1xKfUKeQRVSZJtnBRzi5JRHBUEjFThXd5c2TuxkdBhCrEDHtHGva7yXTxdhW9JcaVPaMfGV3",
  "key25": "T3v42uYr5mDuxcqfnmBUAKV3aKhB5i84QpY15KextUvMm5iSAimp4cQKbGgTRyzqBngnGzmQA5ryn2DUGekP4LW",
  "key26": "3cicMHJWHUhpvwfT8gZRwZX1EGfyewdGvPv2kSZUrzpWR93irRWxSmPDrSsy12s4D5C1vVQmCKxKXwKmcP1KNLyS",
  "key27": "4cp98dWnt6AkcKXQeCghoGVgJVW1uA7hwnTGKWvaxti13wFyHun5uiuZecRBSXTzPwPUYPupzkG3DSQutW8hXK6V",
  "key28": "2eJiChoMfrL1X2Hc8yw6N2LsmQzKR4MbyzjfTPu2CrHpTeHiRfjQ5DnkrAvsiMB8ZGFxg99tATnp2nzGdSqBgf4A",
  "key29": "5QgCKPQqFJc8CMQVMpxvrCLyjuWJuvvZ6AQp4B1u8tU4rdRUnPRuXYR1nexpPzsU2xRk7e6LW9GGuKZNNJuqryak",
  "key30": "5KJvnUb6bZxvncV25BHbaohENyjAhqjxZkS2jFo85UJ73u7dcs8Cu7pfKhGYHfj1dcc52n396DBzdvaZLsYkMcpr",
  "key31": "25BiD6vU3RwAua9XnswgCwvgMaEcdWQhpYuhLEqbwaaGtUGdtNgFCtBcdwf1E1DwndG1QCvdVRTMnpQmQXQfc4R3",
  "key32": "65uaPZfYfbC9tddSY5BgWERAYhhYE68cstfwkYA5NFr7AS2csK8UuxrG7HFT8rG6ESRqADXxADiKpyVF6pikbrBp",
  "key33": "2JUA8Fy5Mb8rhQg2RueEzgsawecJgAfRzXmiS5XsU8mrbjTkSgXgaev8vFmHycBJGvm31JUARvBMwQZGLgRRxeg8",
  "key34": "iD6K6hXdHL2Kuc6UAbTYDBhH8Jr2fcymzbX1v6x2hf3tenRJfrme3JcxJdvBgNvJrjfBPqRsi7gNxH8EMbpzubL",
  "key35": "Q8J53qYUf4xNey7SyQhqH19hezvNyiR378xL1SY7Q58zF8q6PB6FdhjBVCm6cZNSsqXKHUiGNUaZwJpjQX2LVhu",
  "key36": "5RydoPjFhkmHKmpAkj7DHWbk9dTLGRYmAhqRDDkYdgxShP1eQWWBo7aAT5fdvR5NuSAzUeZmDLiwAxkjpCj3BcJj",
  "key37": "8uFom4WAgtTwztNJgRL3fFdcjBchPnjQzGt9JQwg9TD2ZpdoLRRJFXVfZo6D7zJe91Ja2umT8P7b6wn82A6gAyf",
  "key38": "3PDKDMY4o3Ek1FNzdUY3FrvwogScURfDXjbpJfn4DEv7suYyc381ZQrGEycDHv3ss9GjQMKK5rkYCAeVUpZxDEJw",
  "key39": "4nF6hW8tviHtFyGdpTCCvM7dbzHjgm1AWV5D14AoqnV8hNuJyRQzuToGWqCQHSHK85BdZVq9ZR7YmAQLMjbnsyKy",
  "key40": "maMh1Yg5zQizxasXHbDdtjYWrFpZtq54GnMbiPFR3HFZR8epp5TrGbqd2wXdMJ9fADf2BJJJddjxVi62RXYhytV",
  "key41": "4VNk6NXPd7wbsbbBv7N44DDnGBdKek7ZNpGy7p4wucbewB21FV3GcFKnqro7cCkDfGLUuNvocTh7YMRAjojB8wjw",
  "key42": "3o8Qp7ukJZUaoo6rjLbUSFhUPjo71Szcevit4XLYf3Af55ZfJmRwXn3G2yHP1XbDoKXFMP2Cx7eAs3P2AcnQXTAj"
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
