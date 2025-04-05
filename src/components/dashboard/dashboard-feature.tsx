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
    "5588XKKnvv7dkmXSCW7RNCdWHhtQt2iqQHTpL6zwGJnEBNuyjGxfu8j2MAQqZAmSp8741y5CvNvQmevDYZ9SE4v4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T1FXkta9oBHmXBKDVe9shLFfAkWDgqPV2XcvRXRgYiPrhcFUL41SK4DQfBoTVeSZsazn4U1EZYhDniFSvPGRAMm",
  "key1": "2mmCkPh4P5Cm2o3WV82wrrMvsyfb78emwKaXNJ3SBK9u6gBMCu7aPCZWJh6CaW8JF87VPpFpb22edntQXv12w1RR",
  "key2": "21jo8W4mLgTF8YoVaaUgv7ZryfihqiwbU7QJw9VZSW94MmB9E2opWm3XZAzfsyMtiDT49T9CnQbXp2bz9KhBY5XC",
  "key3": "5ujRdUUWUKK44PHAFkN8D2irZUxtRX9UK9Fi8GxtwMEEdLcy9ByKZCFFGh7JT3VjrLzTV1Jy2n6LPYWncSbFp7n9",
  "key4": "3tvKS4XawwXQ98Pt41gDLJNqBK2FAfjKkrYh1k5TbTmMU7XjPWc3B5N6iW1xZL6Kw12CebXVGtYtFxqKpu88iTUf",
  "key5": "46m7fjcCRpuMGkK3C1PucgCkuYVCrtu8G1fHJQVeWhtSfbtw9a7khXTeBMMFuf2RwfwUxDpaocwVXxxAej41G6fp",
  "key6": "4t5QkfmyjDipKMz1mj6UfH1oYLdtyopHPh5SPkfaxd9czajujVSq1SkRnpKmwnmydbBfimDTiGQwKFiLFfKeYf8M",
  "key7": "HwvkdSrLi3kDxmUacdcUgtHGgZTjW75BG3HbTCV3ZHngut7HD3BRdN1LgznK6HJ2bZvLwyanMmUUrhoKk3VXwS9",
  "key8": "3QPGXxpu7YX68qL7qPPnZ1XKPUeMF3pcPLe4GsV7iYWyVkFKiCJkDCJ7EddsxA12rf23R3Jr5yqiTDeAjRuV1Gqy",
  "key9": "4eNore6CPJFh6NyvYEfQF4Gg655BbV4t31pqcs7e4aWQ86ZruMW51PyfuBjQFRCaEqL3qKFXYMgq1dhMq2972cQz",
  "key10": "9wRMa2cbvi96r5AiJNQFPGMxjPfU9WgAzawHxfjztQYpHXREh4PME3S1ShneyX4BPDiXfeiSKEwqRwSPyozpsj9",
  "key11": "4Zh23t8S2qh5HPWQ8csWxBHK6ayJhQGaj4AWZSbgZmUQWDEuVA4MMnzJ7LoQ8LYvw3n1bFLFTU7W8To91A9Z6FES",
  "key12": "53zTLpP2ryoiLfGJgr7srLtoP4QspA3QJ8keFXbyqX2jn35JGeG96P6cM7aHjy4ZCUPv5VwUdPkhu5Mt3zAEer6p",
  "key13": "5cUgKJKyNd2ofpRkC1PTbryZoc6nT69KGuGA2p49wdf93D8qt618UBfBVVe4VheEATt1RuimzuRFViZ7MCbgzqnu",
  "key14": "31Aajkfo9gEfX3HnRqLkCwH6wd47sRekm8nJBLn9PEJa9NWqCsNcEQPTgg8mK9jw5zmbgH3A1ERBbULXSgmRSN2q",
  "key15": "4WPD8UVhjSfGeZbAqjngQHi9tokGasA7wwsufYHzpPdG3Ned9DddzbsoD79t6Qhj9ffZrRvDYvaWm9xiwXubTnHB",
  "key16": "567PvuhksVu3aovCw8XAT5Kh2iWFk5xpuxZC9RbA55KBiPdkacM7vYFEAJb5Uo1QVdkDC4vu2XicbRbxFav62FZU",
  "key17": "2Y8hp71jt8ZjbgSaBd6QSv93X6WGzyqS925GG1boV3CJyAo84kWaS38getA2hTGqW3MzFF2nwwquM258hXkb3Lsm",
  "key18": "3FFb3EnttwXi1AHbgC91HpT1K5iyQ2Aauevya1JWweuCSnepsYwNpcxyx5p2wGX7gxtyEzngXEi8L2hUqwpEPQrd",
  "key19": "2ALYVF3zSe5z319v7yuVXqUhrhBLDCggsTEriwvvNJ7nrd3pyKaBoKeieVDh2fXV4S51jN2nVNXe1bdcNqfypGDD",
  "key20": "51jofmQxswBD94B8yoNddFK6g5hjvyDWzXSjy65dAwpDpSwz7nTUswQQDtdLiqVo6mmBuzKxmEX2xEzhjAkdyX4Y",
  "key21": "37MPGS9YYWzLc8smbtvGEbn1ywaYBniYNfhEg93BPUU1copN5eVYnUC7iKFxGNbyvF2Gi8EpUBY88p6DsuX5sdkJ",
  "key22": "64bLynHmfkdLnDSnghGQkp4yJi4jvgNzj9NFXoZiW5eaJJDEYtgWF47om3XdgTjJDavk3yGVYPqv1NixGnRzud3q",
  "key23": "3cvBtgvcR4rLdgoLXtrbZkAoYYxrdTwdT3XiVxiGA8YADz6wfvPk4aX6tCxdU211kSzDcs78NHejKXPTWbC3TcXV",
  "key24": "2mMAbSD1vs85WJfG8XPnzFJTrJiTYqrnR7ULtJV8gZTvxxZLmaZ1ikb92XiMJsV7r9kCenTPeHGuERBA5TkhGAcC",
  "key25": "64xJr7MBuSg7PLZ6J25Ewi1A6ovZ4ST3ShNfrUiHRmDWUTBR9eryhNPCcAp7a2yS6n9N37muiBSmcSqSaktu1AXJ",
  "key26": "4zdEwXtuFJqFk1xgPcpkJ6KQwZ9kp1jF4Zv7o7LHgaFBnpNAy1epwPkHYHmhL1i8D7HHd9ETU3kH8rtrYziNrpd2",
  "key27": "4ssdbSVjT3b7ZcqBo7GKPNY3ST8TABxbZaix9ChBbnUjB9UU49AxYc92AJsPCKR5hqsXb8fo1477uS4wX4pzg8Pt",
  "key28": "jdHv8e3GbtT8823LMSJvYgtf7dVMp38sVmXLZricxLcLEh4acL1qbeP5TnXobzmKzBSP3cvT5471KzKxan4oF9t",
  "key29": "2k47CkSapa5vPwf3kHCtwitHPFSggqUeYiAYFyLJYjedArhCPSr1uc4VsjzgXrf2sjLAX4c3PB5mq3d7f9aqJ1iQ",
  "key30": "2oPvrsn7cafbN7vYTiabRLwahJ9cwWdkTUTCZWbJgxNTXeFpR8veziejFMpi4BxdKWLi14xrmwMZjsZ1XXmGt3BH",
  "key31": "3MoASMZ1GEFxY5WBTSjs26NtyaxFXcHN3YKwk8B1yvvQUPHTxsBnbfoMLiPgXK6HwV4YWA2NotTb6MShMrP2rLbH",
  "key32": "3xuPtYUQD8355FuGBFSFAaJ9FtR1kQkns45JGbedjvRCCnSYvDjH2qX5v7BFftZFggptcM2o5mEVgjuCSSjLQ9FF",
  "key33": "36ZSfwbzaUjr9fWZth2ZhUBu1jGpqYvGX8ipzNUMwaY8ufHwbgLLsfzwf2p153L1Jyoyuch5N8VYjtfrFyNsQJS2",
  "key34": "42DJHRurykukNgoj4yNkaox8KX748MFSU6QedPJNcwL2YXDW1TygxzFZWsv6TawE1CDgkNcHnpcTN1HiAqLGyEse",
  "key35": "4U8VwTr9dqZ63R9qrFmHmQLmn1RdVwTL9K47HYx1A7p4x8NBDiEALfiNWhbzjtcXCP57926Jn2upqfBazkQF76ET",
  "key36": "4Qq5uJSxd2ShcboU9jnDjugE4A5fmNtuXJT6hQqJmXcM3bEEFVPw8nUC87HToqDRNPHcawweZzz7sfxxfdB6z1n7",
  "key37": "iu6cWj2CVEb6aZs9ar5iMTZtntziMRQtUBJn7CZH7SoUMFN62VQ1pyXhn8WdCF2tgriDirHCQoPo5xJJbxCTDwj",
  "key38": "4cdMxoXKjZp9cSTXRz3C5bUMZ6TSoYpigjekKfK1NxZFo514yqQvm82TbGoU9CEX3eArWtmAfrBGDXZPxW19oWL1",
  "key39": "2ChwDho8mbq2H2vYBXxX98bSZ5yuobCacfS9TRtfX6KhAontg2oVBihn2TmSVPNySVoTT1yWLGKTebwLR2zkz5f",
  "key40": "sWg75gqvU3416nc38cSnp7YbTmLX1gZhKknwV7fHkMH9KyP6b9z9KJbcixDL6E4R42WZJdTjfn6RMUzeMLaj424",
  "key41": "4z5jmv3iYFb2zn8ndV8CnKFrdATUDD6njjaF9R791LR9VQefFEiUtqcvrwykihyA3cskRpYyVXQ86TQiBdSGhhRe",
  "key42": "225xjkTwrXX6st7pnbz6A5fdacc8Gk7fsvemUx8wbd9BrFpXveuK3cAm1TFUG5NLibmFvVDyxio367H4q2xDH6h2",
  "key43": "2VXMSUFNVBduidB9ATemuP6fa9Neo3f5g9eweiFNNzhSqEvCmmwbMkEHBKmKKJHekay6hccZsFSmJLCHUqCjdfTL",
  "key44": "5EWAgHihwpZoFA4gzm8MG8P2UoejJH9XQcoLXvBw8XHkrQMu4xZjSAXFRgdFHsMArqVVCp86b64yGS8Zg8TxA6Vs",
  "key45": "4AJ5wT3eJPeHAhrJoh62DdfmwVoDs74Y4nXi73uJiREfgpAqN8UYmpDCWJ3kN6XfZgz96uMAkF5sKjg5767HzUd8",
  "key46": "66XkTnXLJ7pFKF6BWv5Y6A2JTLT1KB8cq36bj4D3K9rwiyJe2jwzC9Fh2W3J5zYMCCpzbcYvHnLVAv8PaKEyYLUz",
  "key47": "3iG1vWBB9WsCejtDZRPUbyPmk49qebywrmJ9CF8oGDEeioYVgx2gtpF8oKeRL66wUEH4gSE1rMXLfaqif1L2vSiN"
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
