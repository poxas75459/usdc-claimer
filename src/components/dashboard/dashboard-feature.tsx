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
    "5WjbA87jPu3vagi1xnGiHvaBntrApZggfpSjKPeL2xAyE8YXaK85jzKoBCm29KzxEXngnmxPKPM3L7WhB6SwsvyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEokPFosovesuUjakWQA3YrHfudzHtZ9ZRdj39LfUYNTzrUR85E7NXUkiQyscSR3Zez7muuvaTsyPeZAzgTMo3J",
  "key1": "3SX4JandDtxedMwbGMjLx6rsto8c5WSL4DYKiksCfwnExWCvpma4BXXnGYRc8ctZx5BeuebpiidVgF8HhZ5au2Ja",
  "key2": "4K7BPq2YoNiEVuXEYNwpfKnqDRi1qC7RPBZdAS3bMe1PKoBt287E4UXQwxeneTiGYAChJnf5879BVHpsTk1EdFEm",
  "key3": "3EfFiSUUoZpbhmRtHR9D7AkN2MNeu3ddLKCZASqAecUF17RU3bh8BA9E1vZyVqqh5YHGpS52ug8c6rzgYrbwMMVz",
  "key4": "3D7NdsFNLApGDoZb3Cw9haRuHRrWJKbcj8iJHG3HMRc4qK6RSbqsC1xYT3jD1UG91cXJeybq6vDVTVFN1454g6QE",
  "key5": "Ph6QsUJrxUfULemR7pSLPPuS7pHgJE7Bwf34BNMvzohgTLpT6aZTUx1t4wieiCK8sCkPXEnzqB3SjRj1CeD3VN4",
  "key6": "2yem36NSGBL6y3LGUXV3CzZ7qGU4PgKfy2Zbp85vUSQKs2aupBkejxkcwJY61aRB4Cjf3EQcjZBa6it3dS3wLUg7",
  "key7": "2G8Ys9pTc9LDbyFCum8sGPmgNw5hbXpaE4FN49AgRkMokbT4FmTuo5KDf9GwfRMQasBdBjweAHwsd566zsjVAz4w",
  "key8": "4cAmrcrnjvcLh4hdJJf8PoXQ7qh7KG1srMvBW68qhapPQkZ9ytsVsVonpML2Cvi9zCwNcG9h9Ne7dzzsLuHYvpfk",
  "key9": "5vwpzR5phK28Usih2TLcAXRUdZAwCyFnA8ArE6SryY455CwkJkCouRoEqMDKoVCuPZGoXQik8ZtM1i6mnWq5kGUm",
  "key10": "34eVitLM2vzdt5GJQXU9n6VXne1GM1sS4QwaJSGkWxFWWAZSQL7J7pJbfj6ctXCqwQVaoMGnaHaMi8Vs7ZcvsrXC",
  "key11": "fbczAYXVUC38brj9DCEPa6sQ44kBkFvE67vRLNvcRMy2B8txp6JRRsKgDTnE4qik3xMinCwXuT7chg4sDQiStqQ",
  "key12": "5ciYfg8LhDwneguQZ3eZJF1ssWYiyVLJWrkrxgiHpxGV62MVRQmqsmeYWcXTquU3xzSmooVdT9qfT9DiL89VaDAb",
  "key13": "4wtjz998EzXbmej9ojn1iGmaMkT1RsA8NC99vW1pHcEWgAe1iVpcERxgYpsxw51x1fhV2SkJbVQRGfyQk3UaJntS",
  "key14": "4egXFapCgGDodE2Xm49r2bPLtLLoLG36PwQunY6Rg8HNeMVfkiERXmm458m7xGUL5WbnPbCVo5gXPug338PkT36Z",
  "key15": "2gQg7UEoD94ZS4SKsdAhqwEFVSPu4dR6EH7wRaAaqnGQwhWr4WmRmxvrdjro92qHKxs9TednR7wHBBZejhRqbuKU",
  "key16": "23FUFK5qaTf9DqFNRXdtgthpdu259cPxSkraHwJFsXk3htq5c1w5N4qbT7gimZJH56fRBW4Ay93RGtomnkKQ9Uek",
  "key17": "5vJH2r1XfaFWpCf5AQoS8SoKgWDJNJCRUZaEBA4SW6wHxnkU8v2VPmVepNwNXDcw8TPfMzKD2LYGfFpizYcKcdjs",
  "key18": "8uJ6wzPRA85krc97wFPm8oLRPPK8GEf4bQRkispWiNK4pZJ4kpuStigFUWFq3EKXazsr7eYEhZWRBzS8vjAx1XZ",
  "key19": "5kJrTTHnjxgtt4pAPXQdz1ZPFp45E1fmXaqA3XhvPismKzHrbsERah8wB1wb5GRThSHf4haJ2AN8RixEqEvWrDVR",
  "key20": "5xNndb3xbj5XtXBujeXLyxDkjqbHLL2GHuAU8AcsofwaC7sGpCC1DQr4CwbbYapmW2neSvirzYqDudriU5xxiJ9t",
  "key21": "5ThEssjjZzLGTSJRQ1DemrvE3WmUYXQCw3xAvdYRJiL2HmHFyRnVneNW64Q3PqvmXjit5odu8fyWtyEaBLKyTBEA",
  "key22": "66isVbLzNs116vgGCtcBSSfnByhJfLzRq2hMQMs6nXFmKpr6RZRWBHeHX1x6TRhuHqBFQEMW77GQRHVczoJkd5Ng",
  "key23": "5JATo2NePj1PSuF1tTB5KTW7rtSGzdNVGQLhwKB2i6vnGpGuvvrb5gZva6ajFy4RDRVwhDHcaFCtcT24R82aiCDb",
  "key24": "2rSnFy8p9PJk3oF3DjCTgrT4TGxdw6WtzmkhnYaQyC3MyasBSp7BwKvj4wwFiNz423cqfdACkKjfVeP4nAj3efM4",
  "key25": "4U6bhegE7AzMcP9YvSC1fSqnXiEP3yqVNFwusMnvaekuewCpVnGtBzrsgiWU4CaxWvsPh5ruWz91ztkF5sx8Bm6s",
  "key26": "CYhTBRYHTnQfX5KsNVwVhjJqj9d8okM3ZsHDscb1XKXJYVr8LhJBKgk9W6px8uxjm3jgkrCDxLuQYPqSYwiaMGb",
  "key27": "5X8zAV3AnKE1Crk1pX9Jk9GVMFwRgT8RMZXbwaDBLyMFevQoU24FjeCtPxCuYSmfzuop4NTAusLygJPQxuhSzjMV",
  "key28": "2GJ35BFe7LkXRDYT7fTToZzQn3fGHL5zTtMsP3q4KY6nScfqBR8VodQSq3XiBXSwHcKE7ubiByeyKvEQQKfmhZG",
  "key29": "2bqpzuxgi8bgQVGRgpftvD4b6uXitd6Ehdsma69pyxFbXHYK99vmKv1SRhYnbFhNeuY1QDRhnki4KYbpKCw2Pf3w",
  "key30": "2Fi8JXZvgfxXDTbCwopocoeo5tx33K4aWKBfwQYXbeYCxdfPsEambDqJbfRfHuNQPsY6zZepDiy428Vg2FjPWHGT",
  "key31": "3L9HGQx9sXFqQgNe2bHgNn5nLmNTnoR9FipUi5VgbpGrqXvDXftpKLFFNdu8r8LkmmZDszQwzh6ZgobnMVcCiUuK",
  "key32": "2wQWApwxw14horVDk3sPpXpdH1ZYVD916svz9pPeTFFPvmCpV36qEPJTE4wvwqGubFYiyCBnVZQrSCaAxh9Y5kq1",
  "key33": "2DG5eerGFTp38jesk2x6LUPPqkq7CVMhNEW7exzaE7gEAPqmwpkxdSvWM1oroSeQZyJp8eSfFda4Mrhswa5zwacW",
  "key34": "2DWn72Vk97UXVCQ99GEW6SzwdJTkhHg1Gz73BHPzydierbaoZEuhaNqWKDQWaFwGNW5Dz7Z44MBjNY1dTSJuQAiy",
  "key35": "7xGseBL9LWbVXmid97PsVdhr66QotaCi7s36untx3jrFPJYvTsKJrnpLwUPf24uYMgjcQf21Z9DrTb8phNgacDL",
  "key36": "5JXVteZ5YxFGhtgTtSAdFW9N6Wi8X9XqxKPeg5MY2GuXWTsuVKdUAMAKvvHYzNtcqwruF9NKUwpCfzNfSxbYzbnr",
  "key37": "3W56Kc9eo9D7QwkqqYCuNRvWKzdtNF2cofqxvMmXs3GoQr4TPnkNrJhbm1iPBug9bh3SGZdCAdveLd6JitCLfFZf",
  "key38": "4C59AQWuGnZkBn4ievXKVnYBi6QZ4tdJZsoSkrEM4CPWgZsSXRjfPwBv8EEuHM5esyFFK5ndmToQFyrqRrCm7zxv",
  "key39": "UyKpdcJGhhfwaKhp7cyyfFfuAfSWvgM5FAskzLwhvmZYVygXdRUx4cbjhAgZ3JwaVAHUXpDYmv2QLw8EswH7Vr9",
  "key40": "5biunHtN2aP9wnE8R9X5EQQcgrYRwqcGmpRpLMRpnDNByP3FHWDAaZt6rVj1tSAgAW33tBnJLsKivGTVefRvmypZ",
  "key41": "28CRAtKZNGG5YmkhnexYU6hXPke4osodXs5btnUzcZmoqXz7cV8apPgFrCNuBWzYW9o16b98eCSSajNudNhhxvBf",
  "key42": "2at1n3TjD7CtrYkCpBTE8cXSAnNhsrK5kE8F1A3kxYuyP6vrYofx8T2ZF4LHCBe6tLYrSEPKdnab3LTpW2ZX79D2",
  "key43": "5RQmrzLDXqfYMkLSQAQrb84xvCCxTDofAGvoUEMo884XuWv6wSW63oZpoegVLVR4J6vMHp1YthCc6WeDcej23s81",
  "key44": "5aan2dEu9EkmhvQBtU4oZmfS4ewN2ZAHiA9FmN66RryWDAfBc7fyWuFXvnEbL5ExcfPk6KDFcrPnX6PuhGGBDfjA"
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
