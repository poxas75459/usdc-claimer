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
    "GdrvGEmotBibauSFxvqBjDCKNwEeNzYL4UVdQ26wRxTxLGgAcNyqwyLnVdFy2cDPtRbG5d8VyoShdgHCfwxGk8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCd1oGpeGhSi9asrLeG86RHX8RuhL56UMFe8MgSA7zS3b43BXSVHTDLRwzfhEkBVqKPpdCxsn2xyD9RRaFAKY3z",
  "key1": "2nRr9Lo1KeoCs6SFwehydskf2Vb892noTN4DCfaqemsCAvzpxWRrN2URy3TvjJUf8t1QywWWXjewoq7Y5kH8zp76",
  "key2": "5hvsVFgLN7NiTR11r2FUK9Na1SPzCkHQCGadH7r8sjHAMnWifh86CB6gcQV8G1QwsmSGnrC9Q5o1ZznJVXrUczZc",
  "key3": "2fuj2r3oz2Viejmj6ecHBqXAH5eARrBNoevfQESsqcSUeBwqgUXtWdjFvNXi9oazCsdQZB5XyLsEp8WAiywQQtCD",
  "key4": "5JDX1DNZzCBPZhsB2jQU6BM4jDREA7RHkf4ZP8oBY2H7krsMx7PATQ8zHuXpXgL2UrHYnKQvQtHL7CcVnnfFSNHH",
  "key5": "qzMAEHQ2HMtsqFfNqqaZTfRCZiDHcNwYJweh3f2n4BBHtC1F7uvwj4AhVcBrt9vjbWZdi3xXz6Ft7cb6JG6zv3r",
  "key6": "67ZyWLMedkePDivRvij5kWEP7jjXyXkSWfbjWpdnjQc9R36uUGNqcNNArzBCqNBtZ3ioDZHotib9uMtYDoVc42VX",
  "key7": "4nLvCVercf7CpXAbGQ2TVmTX3HBu7SZ1Qk2Rn4hCcDsHE8wp5VKP7S2PnWKbBVxTaSxyBNzTJNe3TGKMFATgvJzr",
  "key8": "5HKdmABqTVGNi9V7sx47acQPwZdRpa2fwhBWtBvN4m6pqkaYP5RwQo33BWfucAijBdFTTGZGGjghed5PGX1GtpRf",
  "key9": "2TRMpoya3B79KorYL3tUUhn5LDsbVCRYwYEMHiRDWmEq7Tns3UFqVacZn1gDS648WRBaHsNEMfEa4WBxcd7mKLLQ",
  "key10": "5TwR8RyVv57fEEQKzHNP8F3t3ZzDeN4e8UYVTqTHELwsJHfciRxNn71uC6cKnUEXR45Gr2LcfesVFLXvmbLGkbhj",
  "key11": "4tXdzx5ceV76GLHmtN4oqK1HkBNXTWZ4Em8DGJmMdFuWhPfF89QyY2YiYF48dcY212QgVmB2oMhP6RcwAvzrCE5R",
  "key12": "2rZDjA5zgMRFXWyxGmzqwk8dekXsPTeCjvutF4JSXdV83cBUtFhDiRGiXsETRsdP8t89sBxtopfpiDVqz2nH7KBb",
  "key13": "2Pf9ABKZjet37dcFwEf8dsQM4YGgMVTseT85Wuh1jJDzbEtiakecpWy2ToqAfCcRDR5rDyizaEq41BxBaSdkSKGU",
  "key14": "nMa1iauQyjKV7yhcdMoqcpjZwCRZ5zhKGwG1mix7PkgwuoNHsxckgS4LT9bw1vPYmiBR9HWrtn3KpoWzekpjWeV",
  "key15": "5R4L4wuRbBF5Hm3hwv6uGH8tFPMWGbEYGZq8jZS7xzFFfk4HMtaG7yTeCyrkt9YrwkicgbCEErWRWib98ATkkHkP",
  "key16": "LwHJPws9fyZW6YLcxBUszk9TxJheEH4r1H572zob49XzWExYs75kjw4MZgQB6Lh2nWwXzDsDbKmFtM23qESo89j",
  "key17": "X3YkCsDqjrAPK6GWhwXB9AqfbPA2ymoyK55Y9mxWa9bsZqMPYjY32ZoZ23QJvDs5XeEvUb6FPV6JL9MZe2cxjBw",
  "key18": "3GpmPUNYamA55F2tAdVHL8T8MLF7op8BCmBooEs1SniY8qX3D2CU4zeUSwhrp9SgaeosnrfDczPyxZ5Tp6Rtgj1M",
  "key19": "5fbBzSNVskNm69oPVshjsxNAEDcbSsJdhcksSupU2KLzfjMo9QZTEbaxDXw9rFfsmkKStPkZv18HdtgcgtxYwx1e",
  "key20": "2xD6hApYXQfsBeQF9kwrkPmQGnM1VoipBa8efke2ubKab4kD1VFcpxi5DeSX5hBgrBs5kAWtpyJ86cJup9GgEKN6",
  "key21": "3BsRLrDngxhkE6MWxBU3sA92ogQhMDcDcq6Tqz8PQLNCG25RigwKx8YnyMh2KgDaaEaD1cMczdQQPGRjpjjshSGj",
  "key22": "2grN5SsSgTzT2yeD6QtzmcvdPp76yA7PRAi7Mo1Nn5EXd64nqiCCoCeiY92FtC2X2x3ZPQ8XwbQ2pYL9sBpr9wKY",
  "key23": "5UXE1mCgbqqW2fjcmeVRewgfSvFPkdc55vrTK6gR197FqZZqbmdCCzM4FQNUX1UhYsCFQmuymdTNBu3zU2fcF3J2",
  "key24": "iyoPr2XXtuEbtz5rQMQum31XkLriiVhSgb782kjUPiVRic4eiEo2sVWPepWcrNrFsANPTmpNNHP8htrbUCUv3qb",
  "key25": "4Q1E2DaazPXgxgrqfWxCKvzGkwaEArf9FicFasppzWi8fLaCEqASZgReLrWtCjq3ZAYW6UpJ4W7prTfXwiFhVx7R"
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
