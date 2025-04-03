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
    "4SZoBk1s9xMgnPzZ3gbf5oAMriGRxy6dfgJLFsjucrSjVtboku4b1ApWyjwRrfmRVAgZPDGEiZc6wJkkNMgZcTbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBPeBpEznEe8HvmVZenxsv1g5Puh9QJEsd7QazYyB1D8MztVdypVzCjKXrcjpbDEUAcKJ6WSVKPEKMbbZ2jsYH8",
  "key1": "5fr1PtBVzKtgypGy6cdswx4zzeU5XAzmMmrsC2HDoGME3rLrSH7PT38r7guYxFBECCJHhASVxCkiPqg6dDe6ui4w",
  "key2": "3iFSV4oeKqR4ZFkifKrtU3tVZRDTG6JF7sNXsoWzhRSs8FV6e63bq7a5mz69U4TbUmchLGaKToHEE9hyTEMb2k2J",
  "key3": "5fob1jUZcedU7BSb5K7Cwh2ThLhS16KC1Ykw5xA7yA7nYsxateK6RXiQnioyqqB5dWAsyTFKAd3kUGPkNkNtHhfF",
  "key4": "4v3vQyWEvCyPZ4p275MqmKCwoLikdUfD1F6FJ6u8z5DhoxcuuPSYFGzhJ8gCnvPauhrSGTDrLMt97Q1BLoWSY3od",
  "key5": "HgwGy2irC1pAcJViq4XLtmZwi6DS3ANSSCW63aqUSWATocSFwe4s3fDy5QdtKgfDLp8M6zD36jz2yLsvB2PwTTn",
  "key6": "8gKaqkZ3LprS6RAUTPNAbU3vEnar2Vr4DTLcDdTTXrD6ZbZhXEfXqR8oRDYwGzQSLqYBFDhae3Vyb1rtEsf1Akb",
  "key7": "4W5hwXEptygMnAMYNs1rQ9g4XnS5SnchCxefWzW2TkS3gKpYRgqcsFmxGb4r2X7Y3nfbv1sr5V1D7yAUr1bJGfaE",
  "key8": "5XYd4BrqsejhY9FDwZscTa15bwSxkhMWagfxpZsQg95pdtvuHpNHSkp1QbtvTjafZqG5XCuVzNsoRcPL77pSX1fp",
  "key9": "pQ4jEXEY4GUcbsTaFM4yw8auFX6S97qJy7PnhkeQpW27nTAPF3AGqufJqvqQWvj7CsrMKqfHtM6NBSC93m1zfdg",
  "key10": "46NcgCSPzAoFtfMhRjrubbroQRfz62kV4ECeaq3p2gFShmPHAarWMb6SzcWVeADMpxyWwCQ96pnbAzoP6Cbw5YzN",
  "key11": "1fgWX1N3nUKRpRsCAkB9wBuJAGJPR2GP5etgFsAL1WF65mVi2EaaRhLxxgyzp1NqeEUNMFSgdUTTmXcA8FpGCHX",
  "key12": "2bFwH76bgzTm7ybSz4RLuddKSvJVRgHbjmGYQpMR89swDEUCMTuBritJmhJNxbCKY7vaDEzijFQYPtRfvRDRx2W3",
  "key13": "3iqbCeFWXDytVPVtbxa73gciTUeRhUjvPYNsxSvGGNpKgJgqiuueK4QNEGVaBgSkoSSTdykaRbej3ekZ99poFceM",
  "key14": "5Q4r1yEokbSyNQU8zGb6zVMXvyMeVZPvqiYejb26qFXsHzySdfmyzkGKEPvqjnyFEmeYTYLA78Tm9BTSeEZMGN5Q",
  "key15": "5PDW2Pa6Tjcp5MFpeVCAuBfVavph7VWtgiAw8cDabhhFsD1JaBT2BZhbgA84AfReQ7q5WsaaLrHNdcX9DrtGkDTU",
  "key16": "5Q9xhmkkNw8qpph5oqsVFywvP8sw9JGT3kJix4XCskXJRDKwBDgxqjeYmdMmwCeKXceoQ4U8fLY5WH5HAwQWwf8u",
  "key17": "quusNPRFLSSA4fJ56iVYQNLG9WWtV21UjTgimpLRJVvHcucxovdwRsbfY2VQXHAGGpHmNFMrTBwEzmu6hzG37pz",
  "key18": "23cLWAvUddRpC2vqRs3aWyipYE54CdMvsVE2YaA3GcXpWdKrLZ6TUzTSXYXx1uqqSTEK4dqVX11durv9QuZMYvao",
  "key19": "5gTa2wucPTvnRKkjN9Fp9yKzyVfW1kKfRYR5PdxHcAcE223iaqUthkJpqQzvn2kCqVRCW2TFVQPs84XVJVyeHMyN",
  "key20": "2p1hUDg6QuDdEPeB9uYpCDzcGB3VQQJ4iJynzSwrK6fRF2hhCUsDEmYHSYDZoFa9XWTse5kYsmkwU7raKPrZN1Yt",
  "key21": "42fxA6m25iv8TyUUPYJp6CYDvXMmRtgP1kr3xfqckVbAuxybKyJ2sCWe3DgtyUicZtNXeAedW2LUXGLsDWpVoQnM",
  "key22": "4a6GJ3BnfMUkFKqmRu4FFeQEq31JZ7yFCK8meTb7cHSpYmySQV75QLpf6PoSzGxyEteovmPCPwrnm3srW8a7cYWj",
  "key23": "4N1p98HYE89CMvd1mXtgnDWous8bGFjsHgfVjWwDFSrHcSUbdeA33GfuqgfazaMtW8SBnSUoMy9u5EwgXsY7hFws",
  "key24": "3UxPCasKjfGsbRUktFxrhRRuXXi4VcDeaqYNkTDfvKMmfBEiTGNTy6yV92q9Hxese1brKV5TBYJeRRDCRYnyZSYd",
  "key25": "2Ky5Fqk5mdkcp3DFMNBWJU8SXbvScnDdQvcqTmoRfBEE1cap2W8sTrdffivDN4DvPYHss2NTZv6hPiVQWkfCg5oj",
  "key26": "tHqUVuiGjWZx7Hg5d75cWapGoJZkQ94mTS8g9SN1K28637U8mzsU5R7jxkpCTkSMU4K9G46rSAq33kyWgToz25f",
  "key27": "5fGWjzERhpomPmRvg45qWUHMQZNcoysY5mjmX3GTZyawqVsLUW8Y4zHeB8YeeTAsuY23NQUxYATtzQ3X87Bf4Ezv",
  "key28": "4mnzNatqHEBwaTkFW4GgPxHP9uYhorDrH1A9nKMfhQso6JVrpjeGGYC369VicuLvhMDEUy7fgbvRx3mbZQSX5Wsg"
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
