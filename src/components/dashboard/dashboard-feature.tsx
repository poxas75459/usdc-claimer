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
    "4Ufexmk2P4N2LLrmHsVEgnZokg4cjLZ3RqDQXhi7q2iVmZLjNCeTqUJi24XeCNPpDWZ9KAK3gZxHXjky9Psxsthv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4JN74AZNoBzfAKySzLLoLYBfWFT6JmpdnZf2dMpXkpZxUSMRa7M86XQDVcj9zkz7j9LJt37aznUt3gfUr8wFdr",
  "key1": "5jxqzUSgqBxgEdV1AKr4bDQRcWf57H69n2Tsdzj3oTegPS6qGd9uGsYJmmWC6fKbqSLGjC56GLbnaDKTTLrEVLu1",
  "key2": "5C82fByykE796kfPE6AFUeWtCV77NECuK69Vci7mg44jL3wtjCMN6trEv6VVsvrM7vrkwoXo1qUXhXwcoyJSZLDy",
  "key3": "3H7PrE93PYRLq3fiURr8gg9hyNsSuGaE47jcLvjotHyseKvVWXKtuMEy4ukN21pFwvyNQyuqiaE6rVeuf5tnFczD",
  "key4": "LDH2FHux5vhRWrDcgK128g9PZvKZkVrBiiNAtaHmJqBuyokT4NDPSVBUWtwuToTJJQ11tzhcSSdgLst5ZQC6Dxs",
  "key5": "YvfYz1RYZvTZq1XNTeFtWmU1EPWHzxdE3ouCFBa12W5LRVsNmV34bLvCk1JTR4KUxKLyJQd9AyYgJ8CquqGFMrT",
  "key6": "4ombwFAjEMLZJE8zvf2BY4FmGYFLKnXb678FvNmpMeToyHKs22Zz97RWmE598rpU5obdJP73bv5VMAyNjXMrxA6f",
  "key7": "2nDp68qJKV8mjNGLqs8NKAXBceiQoXcJ4TDRFZkSuEDcHdca78Ke6SZLSTtJbmyUwy2Evg7yTimtek3NBpqFC8Zx",
  "key8": "7jQgGfBBxpERRiFWNT6e2MqgXBGv3HEum2eMHz84hWZ7zQUTr5SnFSNn3YXTL8wHa9TnrEmCDhZ8NKpdLmBwZpY",
  "key9": "43upznic1uFv5ceobRBxGUzSdezWQuGdxBLVgLJsLwmU4sRsS2u7cnXDujEsSWz6sGXsfLGYsdXBgvmcwB7xfWZf",
  "key10": "3sP9kh41qrK1r41CpRGvJ99sn47Zup3kh3kyD8jLtqqyaauNB7VQ3kDSgcEafbggR2rbo3Npd5BKuDCwBLUkxmaR",
  "key11": "4FLmRWrNM3pY7cGDxvRFLjdYKpWQMsNCVqf8bveKLPeNz6Xq4F3qgWN4LH1u8726h7HkCFiJEGaF5Hc9fwVBfyms",
  "key12": "5ekudRMPdjSB9R9pt4emDj9WiZSUXCapW35AS4Af67Vdoa6QyYkiLL3Xfo8Y3A6anTfbMFfvTfSKrsQeodsVRJEH",
  "key13": "3kR6cQdaYQzdsVBnbpKNv7xpQTodiep7K7c5hrkvpyUuE82t128MBmrwvN22rajpBPhynqa1UNBbAeqMLyENW2Nn",
  "key14": "2eB39Hs87UnpNCP2oRZMVfDmCeegP1Bki8NevaWV9aKMBDvqjdCznzmVQH1G1p7kFCQgfyWxsDqChTRxpWf4PDC3",
  "key15": "5pA9NhiRFPnCD9jmeKom5UqjpT83eHPq3yJcbdaoGAqzR4N6cyeyZ7hEe6AUfdXBaEFzaiy17BwCNqfm34jeAiKq",
  "key16": "3vnBN5yJ7XnY5A5ksUntv1kKFrBur7VQPFkqeBzutFvoirbzx6roCvWJfoEWssyYqNshheR5QTFzmYUnFpcy9QRH",
  "key17": "3aXTMWtVkQrre3GbB1rzDd5SvDge5orKL8dzFDa6X7kTgMT8KBHdoQ2pTtdXMjKWmyDLSzbFewCFXnsjLwxM8ebj",
  "key18": "KSuX47VbaPinHLADqDELr885LbjvjA3buto8b4AzrKtczmuWqFXqmtKZ3AxXiWNVyb4w8PnpbpsdoYAn13skkPX",
  "key19": "yViiM1FiRCWWeJcaWV7pBWwRN4FFSmhugiG95w2CueXXAwHPTEX5Macoai9iZNiM71EwjrxVLdMsKig5XiX18rW",
  "key20": "39rhw51f6jsic83T5iRj72ahF5sZn6GMqT2GJLypG4ed1L2r9v687PDSGV9JpJxjrraHix1LgxRTxCFVVv6japrN",
  "key21": "2yMLhCyQFRNVS3KY5pnfqimigKBGxEkRjkCGwxivReoYy2hWWxUof7PAwT3w4g4r8cv14SQgLi4TrKw52j7Qj9yn",
  "key22": "2DshU77PSQWQuKnf1o4aAyLgnZgE1X9Nx2DU6MVCunhfQV1rdj7P83oR2aNYN1yRqyqRhKWDqWd6B2GLHbF7uEFx",
  "key23": "3MiGFX6sh5FeuFYY1T7hEspyugasgSYUNrzbi5mDHppnrkqD9FqHbfdRBNbbbUBRVReA1gHq6NCgrjVRiwr6NBfZ",
  "key24": "5qosehGz8VC3E9pJTpebxHMPBGPgWzNr7zuR43RUL9hN3J9f9ZWMxq5aUX1vTAyFRe9LMaLDNwt2w5Vdv8BQCUtz",
  "key25": "2fMeARiPvqhg2DXBooz72Rng4a5XBunk6CSxsRhs4nevLrZTXrJ5u4Eqzv6T4iYsoNVSUnwP3YGURRHrca6Lq5jz",
  "key26": "2HZNeVuhEDaT9DCYMfaLBMhKJosFThK9zDYYMARWbEpi3iLsF4M6zJaF56o3wDRWqUKYvw21sTua1ZU5GjBa3DVe",
  "key27": "St2WnzhBPqSY16kSHxVXegt1K7MUiUGWfSbWgmXZaJA5wFqvPvieyBU52hvyX9uZadtvBC9G66KQyzw8MiVvEkx",
  "key28": "26GbbfkEpW35SoZ2Tyji34HNHfXaZ8tPNDWvpYHuKPe2Ppi1PnSvQZ5dfWx1SXvjFSgUxvsF5bsE53RjSmVPChMF"
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
