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
    "5PbrHdajNw2PW5a72DvoyuQZvhrMnCohkcHAoPrdMRYWUnYp4dRKoPJTADofScATEoGdBgeFSTTPkw9AiTLm9vVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EEJuNi8gwCUcDeykMigKQwcpW6wQxV71Zjh4vZjX5BHtb5tBH2mPd8fVuWrPHWcAjsaTJYdVvhJiHxunANHvUUv",
  "key1": "3JnaHn5cvDLdecxvndLEV3gbww42by5GDWYo23chmLvwcBQXNdJvv432AeJXwRepqvvyv5rNG7iPrTZ63Xyxetas",
  "key2": "5jQzTHCQNGeUhFZDuaiMdViWEeMnXNeLghds1YDHLN73CDZYRQ3zCKeX8t949vYZzpMbMKUNXhBvskA4GJaZyLY1",
  "key3": "qHwQAsBBFexZ7qwWoCBwHC7bBFMpqJk2BEi8utngvBoGvnUBjjQyVsbPbRJfM54zaYEkpYDNnDtVdgo45ULBCsw",
  "key4": "4Xg1Ayy1dLGa5T6FU3tsXeMM5a24SzBDCDvU72v2MLXzwta3W6d8AdFULrSbzERqktQuimottmbEuW4TeLHPFzB8",
  "key5": "3G4LbhyYAGPPQaanRnF9v7dbEU3x555smbnVSTzWPY3rNGudKbsYptrwHXGaVzMqzEbZasKR33sJnLnU5ugGJwkw",
  "key6": "BLAMrVVjKMqA4ehXStaJTPhZmCYEqJcqGhScVAax8r32c8EcLQY8PLSQ7iAzfVbJ9qjFHRvMXVJyUFz1FhK8fTT",
  "key7": "3Nc2NtxK9pfLoXeM2cV2mZ8y2ZJuCiFEfTZAiEL5avGqXUpzYcZQfAYoKDN3H2zpud65CxmVWgY9s8WGrbRwx68H",
  "key8": "2WsjYPTWdAMxBgWbKE9dNN1u8zpYRyWF59ryqFDKqc7dAz39fU5bZp7xq3pJD7trHrFsoAEXf57RFn8yd2ZnP8HX",
  "key9": "fXbG33XrLujMUiUG9H8RRCVLtR9ccXSSc3h8124yN9At3x16NxMRkCTJxjTMpS2vkhCFQrqoAceatxenY6dvPJs",
  "key10": "4yPAXAPEd1Kg2uYRWgDLsjTEB1vyh9rqo7VYqq9b8haYcaZ3kFmhG8B2KyAQgBR8PxjuHV6vaSZNk23VFgu1FPh9",
  "key11": "4A1CcTSqFsLDmDtqSCBTMyCtQSkZVndmvQ15ubefGvD1u2Eu2Zf9E7uJXZCb9CVx8TNA6KaY7ZyyQ5gMF6DGvJwN",
  "key12": "5jgEmSwNgX6QayuJpGdrjhQG7dhpAqjTrPBLuec1HLwa6Fu6RQTWVzq7iDYHvwtTSqNMTa7L8geM71XrAwdgA87Y",
  "key13": "4vwqhBrGw6UJtdpbaXnDWZDSojqSKUueT35QZSDEhsPZKuafnd2ZfxhUsrpyd8rtaNcj9A3iedeAao9PGph3iExz",
  "key14": "5g9USj4iEHd3CRMawNMHaYed8Db8qz5kd5yo6MLUF7QtfzTQohChrtYsUmDW3QDxJDSj7kYCksc8afhnRSjJc1fa",
  "key15": "rPJq6hpBXCvuRrcMTKj6MTyWFxDWZcErdW2GDJTLraDHC6KyGt9JQDLoAxZgeRCD6tbq12BKrMoxGn7pQHP9XR3",
  "key16": "5CkpBtNtv2t99XCBQrzdXtJuohy6mpXfUvuXmKzEuqA751UugZbxGEXLMyRPBpngvz8ZLi3z68yUSZQgBpRiDHpN",
  "key17": "3R8tPaCoLogAccEhLCUPSqiR6ShhLDX5EKm8VEGRbFy1Z3KTBvtpTcvjMxYjKyf4TNGT9NjPNfhtAnCVudrytLeu",
  "key18": "FTgTX48hNAt62QbXGqqvdP54BSfg8Dg2MeXMBK9DfQwXo4C86sWR8JhBV4ZgmM6vrNxfpiVoCFyJUi1vKkeF3to",
  "key19": "2PUWgANvcMwXBwPsTQi2fGXQ8DqM1thFsFb7gQ2wbeJh5P5rHN5ED1DY5aejhv8NT6mkJBqCQEXh3TNA3pxN8Ps5",
  "key20": "2KE2LJhCQz9153vYvWix7xXADpJe354FJ7CeNFnAtDJ99WYiPS5PGd2koqMFoPw3J5Q1pwjc7rhm8y4xzitFjkVs",
  "key21": "2riNR1H3SvbKXEEmHJBKyMpwBQGzfmW5NpifM2bzVdXRfFESgCiYddAJjJC7JCWS27qg8rGPD14uVPaw7vFTVu5x",
  "key22": "2sKFDNDEr6WTqsc8ECvC8DoJZntybug6degX45wAReHyh1sg14syCa3QgwtBWJBs9vJkBSPWpHimjEVeGM9NtbRc",
  "key23": "4ePxUqRhBFPUmGQBpV32XYs6EvW41N6BE1KGXTEE7KAwr2XEadwseag7qSHVtv1UuXX93p6eLn2gz6hjx7xmoHYr",
  "key24": "24trn6wfFMJnz5x6mL1NywLJq6JVsKsEQXGzNcebLdMz1DuGmUXicSCTTS7WmZWe9kXTEECn691WHbRU8Rt9Cbih"
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
