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
    "2xsx5P1kvitCy8DJmT23XnY1mgyagJ47jYYjtb1STuYRFsDwFejHZ6Mx2NcSbBizGvKW5qaXMnZEX7SC9d6iCea8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVm6rTDGSfjWKLVEUnYJNGxcbk7Ehi4GfDgk9yELxJXGiYoAEpWBkcj5zjuRZ178jRuaBj9tZZDJoKHeYZgwDfZ",
  "key1": "4QZDtJg1XsKHxVg2dJAAfWtM15SwKSmVuNT23PtioatEgW3RNkB4U56y6D91W8XV9cC5FPKUR4trsSzPqRhjFgaL",
  "key2": "2zSEhBv82PounGrxrnmaefgGmuE2Zpkpv77UtxsXXTtqPs4ch6sfnY7UVD7YCS7bFrUtfW3JryauZZzHjoSCA1no",
  "key3": "sdVtjJpXdrXXJsfBdFXo74m1sMevkkjW5PemEzzcNGNRJtxVmNLcgLHVm4dVQ2hdqJSPHHDRV2BKYbHqxiBS6zr",
  "key4": "4HEkUBJp318ohSSVpbejPoKPHxgYoyKHYhXt7CfV2kGTvNvNdf2GuaAbgYif3aUu8wFfYxpLFTyaRboTtq733Sdn",
  "key5": "5HGYJpZtySbGSgcQVbPhoShzBzgN5eXx8cpX3jc4EASFZcp96rfq3tkz9yvchSvX63HKb2guPWMRVJegSsCG7tDX",
  "key6": "2fUmfP7x7BCD85mZZCvGagcXTKhc4FMVsndyXYWkfDDHypH87Rv9NA8fGZBuEr4Y2Nu9u74CkoRSsbeVPU2rjWDw",
  "key7": "3nAHdu4CeNsvbrt7p1hzEHDhL29kDDLCWWQ7QBWbxzwWonCpatd9DqRSaXJgtWXbERp5b5P29d4GnpXahvheCrMa",
  "key8": "5sqcFFmcq7PkTApEXxVvtafvnYd3d9VSrkBUhLvSXhJtNk7eTB1hkCMFeYSs8oE9brkdjsp2fcGXbCg7tyMti3SQ",
  "key9": "bBZs6nLT5WXpktko62tyCRzcgHn2cxvCptAWrpoDWSMrDBhLfM6Gn8QL9cHTdwAGGwGpFFeWmkRkUuv2HcVkxVG",
  "key10": "cRMZQbjn2NLYxEtEAozCfp5b4e7eYB9TuxxUPabY1xnm7uFiQQCZocPkUcPJm4k7NbeRfDsWAKn9Cq5gF3q3VZo",
  "key11": "5sbVJwG2TYgoypmDyBi5saWXCN6bExUxZFpdL7hQCdQCCmnDpJefiJ9WndShdEyT5uCPBCDh7FhWyrPm11PfXDUe",
  "key12": "4szjjN368Ut1pnC3cm6DBTjE1RRcZyqdKddwiaVDa7e84S3EwVrb8ywPwg1UrL1QzW445RsFoLsLVLvF6DmXZ2t6",
  "key13": "5mmN8FpTcPEPEcjzjA7pUwik2YeSxgvxzaxWdcxG3CG582oBVBHiQWb9QEEpKPbYZC3tEhHPGY5bWKKjcigU5cGf",
  "key14": "3tHnuhBQ9jYcANXen8MUD4MXRLU8e2U7uU8dJjP13LPfJNXV6fk6rW3scmagvfpaj6koHwRGJB2xSgmRcSgJCZeN",
  "key15": "4FcgYzEB2uMnKDkyFnVAyPa9RUr5ftNymEQiT8nms7NEQpp6Y9zr7cWLdaM6Veit8LkeXnBcxdUMhX4X56kVNmcS",
  "key16": "4emspD8Uh6EbvkVD5ogzjmTy7Gt1ueMh9L22jRicnrXJ94zhkJaEKtjPug3SeoeNpKNNP3gmmRQRSmcpygGzFQAM",
  "key17": "3oYr82fqNdNh7DWcG2GGWfTeLEQLnB3Morj8pMeNAPw8wisbPmyqR45oZygDCTmeA4YmBTmTkGdJFDU1Y1qsKQFp",
  "key18": "4edFgZX2nJaKtFhXNryqqQPaDCeusVnyPVq62mczptF9XGpubNpFwLdWJ7f4Vk1QtsFepYUFBWFfuKRtgCtjAGRN",
  "key19": "2kZvpt4foB9UMRCsfAC3F5UrGECN1TLEnPoiim9D9iCFiPYFSbomnpn3zRsnSBmYJGXiiaKyAC3QsXUiFNSetdy4",
  "key20": "2KXHjSddZGR1CeAj1Apsn3SsdBhrQdJdrEn3QTKVdyVHn9RvBdX397ff5B4ttHhwenGerykhnpgSnY8gv84XncUZ",
  "key21": "GtnsUXq32oX9ky1sdkf8AMvhpdTHDLXSbm46AJkMDDZ5FYrXNZuzFRyYxfx6mkHqHBuo9693aYkzArcCYN2Q3Rx",
  "key22": "3QLcP5aHr3voGnSUkmGTfTNvPQGrPS5JCgDp5puTRuSELf6CcVPLPxL2gFg76M2cr5vkKBVXsXpbTQepinok5xmz",
  "key23": "3rUMVUUcvkr9tJNzH9bcxLbHVSg2vnpB33ARvgEGLRR42A2EhuMR6zu2L71ZK9RiyDgf2C6tkxEnhMH8nd8FhMbV",
  "key24": "34LxvZKtCh3G7TbTQJbDVtREVTfYfdWALmRpQYRBjYUXq4wF421hVvprQbadYFMqMLq3WyPAnehxJcaLVwyStfJT",
  "key25": "596WVxG5PbYroBmypj98hHsWfhx82qyzueZTtqD1Dds74NZJ36yizxoTWmbFAgnsyTw9FVqaMapUZVoChF1hhwiE",
  "key26": "5Kbzvnh8d5Txas87VUWQSdfn1SPNDcYdGdYnK3PrtbNQCN4ME1vaxiRWSCUsw13wiNKsfS49i5cxfHgJKijRVUQZ",
  "key27": "5mE8d8osHY4AMdmejP1EQP9McN6yp2aUgqgjfJ2k9BNPQXXq1Y5FkCcs71VSbFXRtxRi355kf66ddEdsmZJvcDmG"
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
