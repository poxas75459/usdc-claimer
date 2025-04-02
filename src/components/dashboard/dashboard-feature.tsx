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
    "4BMgQBN7JEbFgqfHvwLK21UMcFBsHv8M7KmaKJjcNAEp8A8yUrwBoGXBdRMXnweug9kqwzYoVUcR7h9Nra5ejh7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Di3BpTuNELZNhHsbMT3vTQfFZfAGeUHq7QqWpocbWYVugYz1gK4W9BLjKKivwBKyQQJNN5YFYtjRmzSjetS5g57",
  "key1": "2cpBjzExLiLqh5FD99TXMdhWgLcVsVvevqsmdkGvFRC3y5SmnmRZcnTZsDRFpL4ng21zSoUheUqTSNKrm1qyYATH",
  "key2": "4UGNycy1WyGzzH9Lf3S7XR6rqLyN9akXDcqgAxDH87ryFczyZ1Zvg9s9CmgFdSXRcrwcGLL58C1qm7hreqhFY3DE",
  "key3": "5HqQ21j2tW3q5pikBz2vH74fFwjgZ9UnZntbx99Qfu7L6wqwW8uWAK1T7cVgSrwVHYLMymV8L1GySpbjUUWaULJB",
  "key4": "3s8RUqk2KJ6sqj4fG7iHBpmfAK8dgYuLrEi39UBtZHjWodmnDfCSGXswhFaKe5N36kVExd2xEmfZAbwD2MZgHpSD",
  "key5": "5BswAF1gFH1gUe5x6JvAFbmd22Jgef8z9SaLtTMmSW5eMzNBgHxGrzTWVY5BGbUm6NhB5xGfjh2z67iEoALJs8Jm",
  "key6": "5WqtbTTNjqVT9bVJzsCWF5ZnquXtNwT32e7pVQQzrWJ4zV1e2z7bbu5SbVBj4wmqXCjTkyNypZmjdMc91zfEqnq8",
  "key7": "2dZU7xVPhCE2XGFY4c8PkHqJ6Ty8X2QB9ajyaC35NQMofXbEQ3frQRLtMrJ484j714dowHixDnRikX6nN1xXCEJE",
  "key8": "3XvqqLeu5WVQPMDUePqqNCDNQuAkrYKx48keCwSEgABP47zdcnYr1ua5Wd9Vd2Gq95gc6cJFLxvjTA7xdSjLULda",
  "key9": "YtD8ibRqtcCgCkZGtSJpAfDVB2Wtw3GZLHZVWnNeqM3QFzPpcua4Ve1SpWA8onirjMft2TAcquiP6peDoxitZ1D",
  "key10": "F1ghMHUvReB3qDxAQ2CtmQibvdMES8mXYg15NAR74ZbgtvAnshduod1Rqtd3dysQLJRAMs3ftUrsRNGVWtSpC1r",
  "key11": "FmL3hACjvJeHm9fGKEfCyL13HqbYBsKfs8y63QwEJ1a5AGNB3pcpUqBd5cR3z4k6MzFYy3Ux5dyr9mAfatkqPdD",
  "key12": "BEUHcKUmuMYYtQDUSVixpWa4TZxo9wj4eQs4dyN4aAx5sKBurqyNEENHXP5HWbew6wdhbXwmAu735VukGUUnnxr",
  "key13": "h51okPuxq57WtnLKyQU3sJwWLRfmAcPLiah77WAZu1uvMw2e5FT3nD8tVcnV3xmBCriEev1yME4XTEHSnWxY9ft",
  "key14": "4u5ZTUXtKSEpQyYyrFrsYDo3jFWJtUrxED2PyYBxqhFmkuJyYkLdLiV3F8Wz7hfMvt5PXmS8dwYgAkfSKXmkg275",
  "key15": "5i3995JAsrvXt7mGQjvNDdvdv3v2cx8ydGbRjk2ARX7mdXPMkggWnsArzNBq98Nt9dyxj5KseErNr6fUdCyUbiSD",
  "key16": "vPkkPESUgcxaNRNaqXFWwwCLQMt8jeNCGKNLBeYzAPAqHJzbmQQKT4K4JUE5w9szGiTkfjTVfxFfii1Jr3cvzg2",
  "key17": "n36SVQcYnJATTcpj2hyqsXYN3sbASjWBMvjQktEMK8fxPXJfvCAPL3gDq42vWCCry4AFpMEs8PcoDyhSKKTwbHs",
  "key18": "65VdogCEiZNjakSDjxJFaeiufrEf3kdzoFgsqTM9y1eCCP3XuhyaU6KB6Vh7sgtgxCSyTGqxuqVgoBi3wg4Hp2KA",
  "key19": "ttt4eZGov2Je1yiDmLBR9XmfbUfzFEgeDymaFG1Endb7dXPktWejupJG5yF7vGzPsdfhTSapMTgDXL1iiGt7Fa6",
  "key20": "3Sd4GznnE16C72UFX2PqUuM59oZako3s68cVNTAZ3uZKBb7swtvASqG7HL4KMqtkKHLNZxY1VqQgG7dYsszykgU3",
  "key21": "4Y5q66TdYT1FmYW75Vgo7za2aYCMA98di7dgVwtjW9ueHFpcGibJ2KtvDCL1jeMM2nEZgdLekXLDtSERcNcpUZ3G",
  "key22": "5m3QahC4NcxjLehxhkE5EMikMQeKm3eyHRThhCfn1z9WEkGWt2LYQx3rZD2i2pfmLPjM5ELcoU1QJCEgJGA5B9Xs",
  "key23": "4BjYbu3KvE4W9KxT5kGofC7VjY9FtnTwynvgezS34vDAfqZSB73uTKpopt1ui4FeiuMLgyS3yQUSfFXpPPkaPE8F",
  "key24": "4phEWtNuFtmCiiUYeY8UyHuuNX95fMYK8QcUocZm2PZ34sNVxL9DRkb61TGPgcQcwTADC2bHtgw1Yk8ew1KhfK1t",
  "key25": "2i2BQCzyG3jwo2t9Qwt4sUfZ3rWkneNfLkKqmRNLFurKCjzDFq43r5G5W925Gzg1m7rkWmnUwJXUTNbwZ2qJkTsu",
  "key26": "yYY18Gf9nyDWLg33wA5XsQnC3aFizoNDZMwyMqTA4qYkJ1sBVTmRvS2U5donAUZ84sXQ3HRtFhY6WTxVrv3bg6o",
  "key27": "4GZwnbQL4dyup46zh5SPQsYY53ZH3f2cS8YosGhSYhQZnupwMYJ14uSo8iFG7m6HsC9EcH2UGsrCH2VN173r33Ym",
  "key28": "3KdGEABrnvfYR3H6NL7G11cdZ4YrgpS41ep5kxdZ9jHfYb5QtymKkWquh4LuMkvPWtKJdD8K1jrUndRTv3qm3iNk"
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
