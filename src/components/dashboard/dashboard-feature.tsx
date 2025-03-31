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
    "MRbKLiJYDo8dQoCGoWn6xDpKZveBoiXtdoLr2VT38wZzCKm7JSseaQN8eT7rTVbuT3VPv1H95VSJQZV9PkaECLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzSFqUXQxb6h2DX7NphBq93DqQM31L74d7ZQyHtKYcTZWkPJcdcATdXGhugGurehZNR4ae9fPrHEGQaZ7FmiJey",
  "key1": "2xWPz1PKXTyo99v7coJTdNrc7vnLuVZdKxF3gGwi5udzXeC5EotE6q3bhzKsjsJPWZCUFrUKFMJMhmXRqBGCNyPr",
  "key2": "35GfA9JRd8rqAsGVVmbuM26wztkrin9UQFavZhXge5vArwdsgWfRTBCrKEkrLa3DRmveM75FoJdLe131cRHdA3mR",
  "key3": "2KrMtETjtjzYeBpzQW3gdmDQYZgH1C6yyQNrau1EMPjbm22i6z5y6RBcKxvS4m6b9koFeVKFbcT1bm3pnWnbxSqb",
  "key4": "3U6Q31guFXBefiXMEyC3FMAGHs5yiBReYecjPQGujjCEECKt1Acjz2AerFPJVN4DRBoJNZA2XfnJ4jzerGv5CSTn",
  "key5": "5ZmTp7d8nYfqbKyGc5VjAXz2haMUUgtRcXYzZLEWstz34mhM8F8L9K3wVu2jDvKQdKuQXBTMpqXGULUeYKznLHEB",
  "key6": "2omC92ufiERo7NApswFjY1eN6qTnFP5DUoLhqmmHzKNRVanf6ufVcZg99yGaf6F23AgBNZbd3PuEGqr4Ji9iePF9",
  "key7": "2Hx5TVTLPaT2a11qEVemMP8X5HVyvJoU6MkLPLoKZjSk6uv1amkyikusiAYQANv3k3yadEGFt4VZ1aeJRueQ55SN",
  "key8": "2oTncP179P6jsnswXeTrXXQk2NxFCzKi9QVJYsdzjHRPt1hXsPWKXxTnmrAL8MyQSoFpffaFzmSAvrmrUCaYxZja",
  "key9": "3RYgJHSkxzfCx1LpvPG19BNp2jTnx4daoaWBrsd3jfGodcVfxaqsJ1HLLCpb8nSiJLgVLWk2zdxtcfpHfMg91SyB",
  "key10": "uXJA9j5UF3jR34PfthVihRtM5g4S8jhVMR6TUiG9y9WWK4J7ju1tw34BbjEeWinspcdzENQwdqgbHbDmmPR8fn8",
  "key11": "5NiJTcSAWHno4vna2JASrxVywFjYCsts9yjfLtqDbpXZxR8PMWZbCb6PJRXqgd9M7jYVXWLnQVtLpqin5JGP3X25",
  "key12": "5WXcrKDd7MCFQrES9SEm1rBUPXaRUr3H4UDfH78Hmp26ZUex29w359LtpVYKYK3KnsiR4QMr5vawxVEupw55oogk",
  "key13": "3xYy2FryfkJwmXox3jeGd31NBVqeEoceb1yJf5J1YtWbMBe5DycpdURETNbqHnVHYGdgjsqxm44bPBeJoRC6XLt1",
  "key14": "TEpGDECW6EN5ui2SXSEf8uvp2QHxmQKFzQCQw4By5KRVGHKT8sKpqS4XNfEgadQMByz85TtNCGoS8jwzWcoRpEw",
  "key15": "5684vX5mJfFpf2x3KDDYSnGtXXjrRFSDyZ3MugNEdbnDZ4cmq7pjXzc6VcuMK9h2HddkidkwMgQfjLHRY1qq67rZ",
  "key16": "2EyVt1op6Aai929XRtmsh9jWYd8iJQk4mSE9jGoYzVbkhMx4tRC3ppBjd69ndn2Vn77CcmkScWHyDTF1HZJaMLii",
  "key17": "V1DM74oHhEiNBuG3Qer9QNhWGGWwXGvoQHBLxBV6vNAyMeP2RWviUUacePfb1tAK44asaLwW9fhPApxwuRdd7d7",
  "key18": "4oXrgPT96ogZZJnaYTeCyVaDwMVqDpthceNxp6sXdNTjxBtAApGB2pdcghckCF74oPhXmUiwHf76t17LnpzG2A1Z",
  "key19": "4MTJEveCrNaPMDEXmxphmgha3sBLC24YBavEsb3tvEcpbXs1qxXa7XAgc1omemL6Fp2JGuZKTXwshGQHaEX4tULT",
  "key20": "4T4CNJpj4o3myWHbHfSYPFChcwauqc5qP3FSDVvJYAMytGyXL7mtgCDx4itFYtxQ9hMVkbSG8QjZCTbKi6CWrhox",
  "key21": "492CMgVTVhWp1qcW8KzDUftuafGLyewfYWmaGYx6LzE3fb1dNbu4ACZLdv8wMeJfAehdPyf94r7caDsXMEGLuU16",
  "key22": "2VU9Q13r8MW87B2q6k9sB5azDgqkqt8m48GoHSQENzTtxk6C3vWhtUWfpWJeBSW9Zjicror5DCo5PWcrtJaoVGYF",
  "key23": "551itC4Z5bnV1DFrNFXvRc1ehYMjArRAMqn377asJ54ijdjbbVpswMp5ueZrNM6cjYsQUJLsUgtSpzJkz2JEhhLL",
  "key24": "AJSbKxAeZZ3TnJiKv3eEiYtsZMqhgniNirFDjoxfWxa6z7sQsawat2z2uLYDQJNpQAjM4BonAew5iHPBHDEfEyb",
  "key25": "5VLdU9dHCGgkry7iWRowUq1qEhepVFFzyQRSWtVhc1RY1R7Cbfi8bv4M51p8kRtEikveG6ggHVs5M9jEmbbyApMt",
  "key26": "61iBvWAgiyPoRV5Vs5MBDxegW6eyzkEU4qqGfqvFRewus8TkJ6jVGa7MocWeSk4JGeBNWbPxQVvbYNN5i2XDVG35",
  "key27": "qYjUxP4Q8r7PYC7DHXomMCzhSJPnUYLSFP1e1pQPzWrxGmUxC4YxCBYJ5NU46jTUgSAg3wAC6h7o5gfcyMXJ5Pf",
  "key28": "5tNkxYdxCwBBi852iajU2n4RtMfD94dQ1dQPE1UfoRhcvf1nBYPEbGAKVrZdBxSUnrpsrcJyCGSYEo7Wdg2Fprzx",
  "key29": "2boiP74EEacEAHagbEnSvJ8o5tsEc2pEB2pTPCZ9T5knZdHoKbubzbqCASYso2CdAMPTSpZDN1BAN2akhMVVNLEi",
  "key30": "fF73AvQPXa5CZzKFtp9egPineTacDs67tqtUAkiZ3wMTYzmAABWaGQM2WKum1aGCiqherxt9DUAQ68otN9GftQs",
  "key31": "EZ9RTsDv2M4NGin7mkjvgudxxQFB1w27R7PRERPptirq4tgJ9dkY9Ku97XtqWhi93x5icRGx68JPNKcDaeAzuAL",
  "key32": "32kzQAcKNQHWuTMYpH4fEGre7LD6aLnd4xusQxA4qmwaXVFkZMSBMeF4kqy4FqMP7T4azQZE7CXcUXnPnJVTVGTv",
  "key33": "5AQZSuYCBFLLVZJBBGSU1bz4UPpauWDeN8sUxrpNSvBJRyDTckm5JBLKXy1dBvsaYSzCC4DJ2UNoWzd9HJWRA1fr",
  "key34": "2oMqmtxxx3PBLNhPe8cGo4FYc9BDm1WTmzqVe2aPQPnSwVg3pf5cfQJ2pL61RM2V6WAD2do48wMeHjKsPrRFMpAi",
  "key35": "2gX5kS8sZSUmXWZXyjELZxyUpCow2x77Qyaieby18FZX4PW9kRVPNJpqkXMfEykdrkePXtU8FYkW4wTd2baAHcw4",
  "key36": "3ABqAaQ4pVHxhYWm7nN3ayc4DBxxeD7TGpe1Mrj8ttapLv4TmFA354JjzZLbXGdVRfFSXfc6EyZ5jhcqFVdNnCiJ",
  "key37": "QjwZFcFUBBfdX3FEBx6FJimYXw8ew6oPX5LgPcfgNSw5V6zbE4UD8puQJn5iAtUD2JpfqbYF2xwehtHJ3M6Ziai"
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
