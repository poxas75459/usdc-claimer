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
    "5jLvtViKN1GerUifE2Zb9nhpvjSuMEw3xvbRFym2k6Mjkh7HPioYGrifURzTMGXZ6Vkc1ZRV77qrZCzC9MtrtAwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z45tS3nygCHkG59PgmRiRfFRm1h5AViepdnsTpSvQuBdtCCzaoq8qifAb1qfgqKUdzhfpLqzUMGGxW5FMKfdfdg",
  "key1": "3v3kYURMnsoHYvPYyjqG8zHqXTddWKY8JeW8S9enHT3DgVtPRQ66vqRwiRihZJd7oPnZ8ph4CjzRojiNbjAETz7o",
  "key2": "374a1usrbCNFxfQLL6s9Y4HtBtPQs4bJQ9UhMviNHUJYRV9hF3uEKropzoQo7uvygaiVytGHFK8BBMTBYFWAZFFe",
  "key3": "2LKjgApjeNBepBMYo3fnxAKGfVEtHvxjBGFnUL7xwRSE1agQQJ6FG1uzgXF1zH2VbnjK37QCerm9n7j1MwkZ626W",
  "key4": "4j5VLFgEPPizb8nQL4tSBa6zNwPD45MpRBR8D9BDCmMUfuvMGA1S3T2VH5H7ALMdUTkd1gBPrvEc89v77ofYJdcN",
  "key5": "D8uFaRedk2ct1tFSvDnCbwxuS5QUrcnNRLXkRCbZ6Jt6iy59ofDPNcpMWWxtcNGKBLdyzWwsjREe29g8naFzyQQ",
  "key6": "4CwMAyhDRTHfKPeJfiZGYJrRTYMMrrgLqd8YoSTEUSjRs3HcexUar3y1vnAXj9njnMryAG9oJTZuffQ7yf2nthap",
  "key7": "G3WtTv68YchXrFwxP7D9zd8CLrPB189kuJKxxYdjiu1THAbQUVF8Gi1NmzpB6tnYuaEnptCiCtixCjoCKw64Bww",
  "key8": "S2LmmpBPUg3xCBCMPMQhoPfJTkbD5zf3dtNGNTqPTier4Q1SyZ1FVhWxoCrAN94U3nBGGSksnZgBsxAxv2SAhtj",
  "key9": "3E7ddwnyXWuf3CvEQJVTmZkyigtDRo7svoDhgKcHHhqkghSUZ6gaAWyLodY1mXNgDSJkXN2mE9qoinxjPxTd2hvZ",
  "key10": "4sELWL9Y5XDvVFUp2uexJk3htLSfHjMu51FajwtMXUAH4Rz6LtsxBRfmXKU1C1dFDhzVsgDyRiyBHxoWzed3Kpnq",
  "key11": "szVEgpfiiY7YRWCFmzUkFPeyWd54YwEVX6Uv5KBzMmwY7YtJAEd8ETCbi4EHzF3P7xMMtnutXuLDP1d2ku6mZLe",
  "key12": "2xMf8bp81xkJQqyuMi81GXnCf3fWhASLSEhwZGxcWNWWDSy32Amv5erJt7uQuVJxtFaMcGN9TPz1VAGnvhZVj6q9",
  "key13": "2BTyvX1WQnovDMtN5JAnRX8HyPxZqKbpRHvE3vGLt3RmU8EgWkRfGsM1T1RwHTpBQwtmy59qGG6op2t3As8wo5Mz",
  "key14": "2cvfmUaMqdxmF5RPprkXS5N5a5z1WpQfxTnVFQ8L1cX6bAgbGCxW7m8pZBsqKsUgqS5mRD89csSYJd2LsH6eohwj",
  "key15": "5kG7ed7xtzX1xKKYqGG82uuhjUxy97kUCFg2syJZzyTS3HNQam1J962FgiCSHaL7kaB42Yqmqk4vTwPt1bXsHreK",
  "key16": "BmDeWHPE85iesZSS534FwbsbNZsyiCrRUxMNzhDionFcAhHvzS2HAUVnHSbJ9MpEJgdg3SSmCgWJcNekRGxsqwG",
  "key17": "5cJwcku9rTV1ANYNVamWDv13YxCDedGDbaetAiKgohyMSkLYurMTwVxH563edCRBGpcsyadM6mDq1AmyYXZeQ14W",
  "key18": "D2Z5MhAzWUdGWmAHoXKWBRyjXzLz2xAWU187VDeXrkE5txztENV9YHbkBvsZvcSkoFF4hPkoq1pqWZCUU4X7CW1",
  "key19": "DnV1Hsb86Bwdv7TswzM1nx6vDFt6saW2HqzLqcJ3GYeSyQJppjoBNwcsMx9xx9SbSCKfXnnk2ujf12CTXngZyHh",
  "key20": "QFKz35YnD1EdkdPrUqeVjdoBfDD76g4udgs3ZmZMuoSUG5vrjGEyZDJBWdjXWaqX8DLePunvk3H35xDK8Q5QmVE",
  "key21": "5MZBZivkt8v1kZhbdfDcWnwVW4TfjAaSarBq9jF23AWYbsTMyd6wt1rykz62z3sduxKCLod2fGPNPgjaxJ9RbAMs",
  "key22": "Xeq2obJxvsPsHZvZXvQbfPx5Vu57BVZcdGgPdu9WizXQ8632LdkuppwrZ42F2iuZVurDBhsrJr11NTEne9g9oXq",
  "key23": "reXTnvgDMWk9Pe78ATDy7Sb3PU3g6owX4A9hfzcssVFLDQVBccqLLyFEmRwyeX1s8TvZzLyakaen6eLCbWXKWhr",
  "key24": "2MPd3dbp1TivA3JPhbnLbRrnNRS4WXfnSp9fLTy11x4gvU292A7Dyen9hT2DugS97XrpjKDaEhk8nvDwxgxni8tG",
  "key25": "2HtUmKHRivqtW7UXi2zjZDt3DZDMcs9iEspdoA1AnjpgkkBR1YV4ZNRA8qQcYsCzoXpTtGmVUtadud9BKpAWyjhK",
  "key26": "3EVNJa44fTdU6eMKPQQadmRSC5er8TLau5UEHUydgjRQLLC6k3GSBjUHrEwedRgi55tVJN7CtGn1KfNDCrRifpSo"
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
