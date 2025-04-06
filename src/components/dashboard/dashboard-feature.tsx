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
    "5Xuc3YbjcnPVAw7TGt1kVFvg9SXo5CEF1gQeHfJADWAEPVtCbtK128shajfHtwZWtzQo2abLn8FBt17TQmspobQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zt6vts6K8AhQ34Dth66oGNTXnGa4hZV3gbnjePhCkiXxqtYnVKaP89kHMJ1RFriGCCwNjdyJLNoquaZL2Scpix",
  "key1": "5mQrfzcE18PhazXYsMsCnt5eL9hrPbzwKEpAsXFZ7tPm53sM8MaepnC1TNZdh5bgpjUKYs1hAozGAdGa3WQYUHhm",
  "key2": "5y6aYnWXPDHq8rVLNVc7oPpNgWqRSYjDyMvtBYno9C3wnBb1dD1cEMwyeDYjj1E5mwBjkFAcMjM9sR99a4EPM8Hk",
  "key3": "FV3Vz6SAFsSvF6RSRJuhqW2og5G6dwtsQFwT2pMT39oniTsnHWaGuoeG2jk9cXQ5wA2DuPnfkSg8Zuc3Fm8w4ve",
  "key4": "3miXGPZthV7VsmBdTaPkUhz5Sp3PGVREVUNpK52M3zSPUiP4NTRBKLiymq5ZFe4FsKB4VgbHbtDamAHqsbEfp2xj",
  "key5": "5qmHkPtrW4eMje9KQdUEPiRumyTs9rcAoe4A1jb7j6dGGs2iQE1T1hTXn8qKUXfC3DEi2Akg6e3HWxnEgCcaRyUa",
  "key6": "5XY4rQXWATZ4VZ5kT5iKbGFhd8xjuFZxeRpef5W7Dm21VJWfH3A7Dy14EpC7YojbwvoisJubQtqiCM8mNkPxNmuF",
  "key7": "2xmvg4KMjNFqYxxMVt78Q6ie1vTrhfkepaeYbPMjbyNAdqRY4Ge1vkrNFVAjPTt8T98EGcBnjsNvfFE9fFHsvDN3",
  "key8": "58ebLPFmBSmByVtjY5VedH97T98HfC8kzYGPRtgRZzK87p4wQwTMe9i9p4wM1vHrbgmDoZFD5gRuAE1Vnn6KLJHz",
  "key9": "3jkQvDPcVB5eeWdfagKnugngsDwp7TzjGaCbtxRyAcT4m83Tw867yB5ZK23U6HwKM2S7wNJriL3nZ3irjpHYMfp8",
  "key10": "59XyGf52ZKx4e2dafvU2qcxSLCZBBGB9zbXzfqNwHVJydByrv1uUmXKu4b63MnaiR2gjsSPPNwhQXztbsVMYAuWF",
  "key11": "2BTinZmp29qujU5atSL1TkUusi6RNREKatKLnha89EamyiwPYXMK7hqhQTSLg8RTNMFJdt9bZRdKxEigDrFXbv4U",
  "key12": "5Grfu7rVkr3MgR4vs1FbQ6KFJEnu5ADh9FDNQw1kDCzzaip9S4JrZboEJMUsMvahb4pBUBNB3Z6mcBYQVwUWxK1y",
  "key13": "4y5d9qqHjVn3sJgcVxnCAAfXDKGPmmiM2eUMpWE3m959ZBrxeMLsGLTaXDW7EEaxCWheJcL7TMBh1ym3ScJRYKqE",
  "key14": "3ZQWBCD31WioCuPJfiEcFkjk7dgx1mHDssY8ptkooPH3HFx5apckUtR6sD9fNKcyD797zkG3GsKLbNFh6VEj4sfd",
  "key15": "3K1sFcCS66EuCMUBnxWTPeCxBx96ULZzSc6UH8v72bBbAbXEujSDb43yMLAV2wm3i18M4QRiFetRNroeAHBcf8gg",
  "key16": "56UHXt2MBtvXVRWYxbVS49jfppgdRCuA1Ze2kcBPMhYMf6WcmTDxNeTahJ33fQnjqNKd1QKgQ8eMnBaZsygUSZ1D",
  "key17": "3z1BAkW7NCfM5BQqaGfzgA89fXtrTqtXreiMhNw3e2Eev15ba1vitgVGt18Cna38TA7onVgzXFyMo9yQCP6f3UJ9",
  "key18": "3U6B7E7RJijYf3QBL8mVCMgKLMtZWap6Ukx1ZWJGY3Tq4JNtFve8CHpgSiKYtFJHoe51SsYFTrcqq4dTdhjfp5Sg",
  "key19": "yRPk96Jr6icSHvPCZQ5tENAcmNQkyc8nsUwcj4utRtzpoN9gVMsNnPi6r6s6GvPpzav52tSwSjrNoJbLUUWppSz",
  "key20": "4YZHbmtogDDn81yhHksc4MPzZSMTkrQdJBTU3ACGWx2WPFVedgwK29m5bZwTVUHbXPVhcHWDDw43KLtGSELmji7Y",
  "key21": "4RjXAUT9VErEVX56gBXbcEWSTodkWLFzeN98TCyZRXRmFcLf4gvmn1pBHypnTGhiSRvShJGeHGGcQMSrXtHddyEw",
  "key22": "5Za7kSUsD7AGapozpUgu39bTmCsaG1fXgSLUHtoAPpj4r9TBgzghUA417BCBqVJoFZWnkVKkXiX14p8VwZkqBsUF",
  "key23": "4g3TZ7c6HrVr3KdDRHrxMe9iajL5mu22pj3NYdeoN7jeuLzuSCBd86aR4u5KiW5NWfTWKVp9MmKyvkFLojoN9Ce9",
  "key24": "4fiSQFRNcBsufqrKqoS3R5VD23rTAeNuJP72NeZv6yPqgTnxsHVHFaPWtidJ6LhxMAeshCDou77ng843Cq1s7GXH",
  "key25": "sBecEoEHYEggc2Lc7bKuj18jvHiQgR6VBzxPZPG1SVNQrpqUdpPzcqHBUs5MoeE3JU4T9qK3M53AJTWcuTyamNk",
  "key26": "2FpSPKJGpBEJf1v3AtxxXvFZC2GsV5Eq8JB4wbsoqSJCc4jUqmKpafy95kNchKPGJYqYMxNUJSC6Z4ftaqYQzP53",
  "key27": "5nhpFxXhwq24ha7HeG8qFESNCFptVbHh1UC4pr3xVboV3kyx71RzdVPSwSthtZrBLQAbtYQsCzy3yy88sgv36aJz",
  "key28": "mKQZuzK3MhKu2bVQfuVLxCmR2FYuUDMSX91fGmjr3eoH7x68PHH1t9y9zxX5NZcgWooyNNbPMzPqF5SR4Et6aZd",
  "key29": "R7rcnvpF2D32dqUpaPGzGpCLM2AvoQSbGdfky53PcGJw4WepJuvUddsZEw2RuYvXNVEWhJv16YmAgDA9UDjwCzG",
  "key30": "4qfmLtsPg6e7Zj93WJAGEUYn9hFphjcCXbHzbGuXWfWrPonMExW2JWak6L9JuzxZSVoHYQYjbFsre38uTgE2GYM7",
  "key31": "4tyCiN3DmSAUBSmNR1XJeiHTCFgvk8RvAuZ44J9wWy5vVPaaM8TJxzUCAX8i4Vs2E3wms39wMsxsG68G6tzYnXVk",
  "key32": "5HRNt9P3knLJXUYSz7XNHfqx7myt6KtwuArwZ8bDnNAvb4UC5JAsA6i1i2zF2Wanospm5FimXm11RuJWr9MX3zAf",
  "key33": "5mQqudyy6y2QqEWBXjasZzbGkBvBxwWWcLFHjKkeD6njtfoyugXQqHFuMzynt7rs2EzbrJbXupWF3B8jdG9M9DT3",
  "key34": "5cZJWvvuKce5uVzD7gJvjz11aSHKLoLkzS4y7KxtgefyDoa5dZ9qZXkwoeBuYTm62FMC1zEntH5BmpDx3UN9HCgs",
  "key35": "62tR5SHJPYHkxTGVaSVoy5SmVX96fACqftCG7PRo9bBRpVJWhfgBjrum8aifYmQdjQRvZy7SWs5eNoNpLgzcNPbW",
  "key36": "fb8uWG17CeVMhHyFoW6WFdrFdg4Dkw5QYKQPJ39NF38GZX3GH57MxcziwkoAMuEUMCnnDEHK7BTYCLt9WJXm94m",
  "key37": "GoUZXPZTGff76M1EyrqxdJ7PB889PFkvcSv2PgDPKNr9GxvQ2kuA5G5mUo6UAZezZbaJb9xL7J22CggSgBqfzjk",
  "key38": "2j2axPXVQJc8MRBH34fmEvMfvF5LcznvsJGcyQ87ab1S978kWmc8JKNAzQhTXCbb9UYkuGtHtSsTLroMev539hzx",
  "key39": "2VetBQBmGjoJnqv26CY9LVqs4A9e83BRgnSk1HzigNaXprD1DDRBaeRB3R9GfTkjkBbSdwyxXUFMdADbakGj1Zx9",
  "key40": "5dfiY9n67fHo1vbNoJujWVesCeqyAU6Su93iTU6vNTBowiTChrPwgftN2gJ8eswqvMMrc2mXHpLk2SYCX4udDJzR",
  "key41": "2Vw74JCLxBbsHYqTacwck62vfDPK7Z5yGfJggsxLxfSp67pfrN9NSNNJSmdZaoiEy8Kc8bBu1LPpPygZP7joTSNr",
  "key42": "5UVssB6z2mfJ4VFg5VkVGyTsGFmdF3QKjRDwxXEq32zo6jXbV9YikVx23Uvp6vgkWXbcA3xi59HnfqUaFQZGvnxt"
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
