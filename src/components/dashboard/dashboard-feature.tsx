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
    "3d6N5ea9rzQBstE9UTwrBFEV7HdodEtqytpajuUMC7TdMnANpFSH5rQMhKzw2xMQzYY8VXKLHRLgpEAN2kVXGNRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eG81kmNQP1A5RFJc4FvsmYRovUPARAixdELPXJiYBwaJWA2VaFg6VmZvf8w46wGcN5XeiTB7iFYpKYXvCrKGgTq",
  "key1": "2aHscVem3WmmWGNFx3GMcsqWzHqEXJfX14rtsQsyoepmsAaJXabroapKpzv8Z4QRgUoBX1fUiCFswthPsevhPCZF",
  "key2": "4M2RyaXRYUJc41NCZs4uVjxG1XH6mvkyX9a2SHnKPhfoCeoPQ7vXtceB5MwQgQKwwZ93mUHJrfqu91QYKu8kFKw6",
  "key3": "4wsCMwRt1mMYRMS6RBiMSNZp4kGrz5rg2yvwhvykj3SzoVTQTq6XfYbC6TnyDWo8zb9B6zEXbSeoMTpRGo3SM9EV",
  "key4": "VuSi8fbGDhDmtt5VYbDjkmBbc6vyq34J4mH3F8reMwqj5gHgtHzk6cv4yYLSKcvYN8WFgKzTtt7trbjMzXZByJz",
  "key5": "26PBFAWuHAjDRXZKpX9d6WZHddiodVDLHtGGatN2aF8f6GS4D5TkNbSEYpCJdf215MsNHDHbCcbWqbLLL7JBcnMj",
  "key6": "38R3FauCZE6xh6JAeP6Bcy3TWSJxQEE4AyoULp3qRfk5ZGL4FPXdkKs7FVEHGv8Kw5ZJbxqf1rdD8q7um3A8wgoh",
  "key7": "5Ghzgr3Qxt6QSJjdZHZMReRMutkQPMj5turD6U6JNxSaJCeAmt8MDGogEMrS1HmYvfbsn5eyPGsgW4DVysP4HxHS",
  "key8": "piggURUnZ6s7X47PmgVGp9wdH3XUpe1s9D7ukH5bm4owN5FRU7AzPwmFffGLzSh2Xq4fppauu1DB5XLrNTKUt2n",
  "key9": "53GjLSVSggUP4YtH7XKrRakK2aHszxWvpHv45kqQgvAFyaSJT3yucTsrqhsPmhNrCCETuTMusnzQzBHp7yyZnVtk",
  "key10": "5CWcaG5JfPL2qSZLDWGf7WVNMApEcH3EFzcNUAHLEjqNNfbfbYU487bQR2XJwKEYTwB8H8ecDWPAtFfz8m7GQCZi",
  "key11": "4EwCWGpRAbKi29RnxzSckxqHVZouqDEKKgNbdstZEQGB6mBPLzC3zky9usQBdtn2np1tX5sSLZWyK1bkgbcdt1J4",
  "key12": "2EcvBkZBK4BxyWzvL5CPiCvbs9ku7ZRthjay7HdRZRGACbj9DvmBDEKpdfSsJ6vJCQSSyWoTcnXxoeTXaiN4Hzf7",
  "key13": "5Yk9sArdioqdA2FJS1pq27U2ur5Qqqvk5w2yJurf9Uyu3HTxJib4oL4f6djcncj75MmHu6mtQS2EQPvpAhNaufoV",
  "key14": "26arhMDG3tFVCiPrjdZCXyBdYPYqDKc9H85xpqG6JT1xUkvPa4oq5BSF1YP1kmJSAjKjfHu344nKLsegqFZfL6pA",
  "key15": "cydtcQj36SWnpinDnd1M8gwJN1CkheEkDMcyVvYFygKWVT9Nu6YY3TvDxADj263ECQXaavo4Po7skj25eYraNv7",
  "key16": "5Vi7S1aBmQ7EJVCK7gsjrk9fuKy3KPa3PjMYuETPb6JmWKDE4azdJeSMSv4pKTNPQFTZRqgP819ZD4PK2txH3cvz",
  "key17": "4Ssk7Z6m1YukNhdRXV2NNPnTUx2n8u5ZN7ZDZKn7VhRhV43sDCNrBFumJcK7YEecjTiW8koP2qL6RnmSSqZr51gz",
  "key18": "2Dt3TKtYMoP1HsPYL1xrbUoMoFUKZYExkz9vtV7zoC1RqAHEaJGMiYRNNtwE4HEDLp4T32p35MeBqFnAeez16iLG",
  "key19": "3XuyhHsZAWZeg1NRqYAcAd36nnCB2pNaagspHf59nDp7HLgSJG4n17j8ZnE1yghHYyYAeR7gmvC1hKXCoicNAkri",
  "key20": "56dzsAyLTN4EN1L1ogo4JbYC5iKAVoYrFC53o43n3zZ8HZaEGQCPHxXrYgJc6n6vEYZejDGf94XLRXFFRZkFfnYX",
  "key21": "3QWQvfFvqELVWbFmMRSRg1YVhisky6nXQATah7VTE3wNzyC8VQjRW6RLcfYvZbMbePZZDt7z12AqJx1krSVsmMGM",
  "key22": "3MT4mU3KuQjSVqR9q6RmJ4VVDFKCh9UTErAW85e1UdHYKw64bpsfn8CS5LpA26U87eERbHqVKuDxyvcx7SUsCshP",
  "key23": "2ddhP8eWiAGATCZpBMoLYzaM6TSA7HWrtRWDm449DURRpfFiVo59Tq7q5bn8UmLV7UmfR9h6hUa1vBQpemKkugNE",
  "key24": "2Azeh2Vzm4aJbf9YYEwB3KP2dJq7BVso25H9fmsY1aboi1Z4eHjchNRhxP5EMrUUpJHfHQfM4yK8D75LZqiftRLm",
  "key25": "3pAUm37B7gSAwsCfG6Ur4EXnRBbf2Wonn8NUAXkTYKFS4GBSFFr6vNqqU5hsGLezm35bUg6scqNG6GUon8VU5KS2",
  "key26": "4wJvnGKqhFgBCqDZvGUKvmPJsGzjjtPHPPHm38QsWGxu9qxoYWA9HHyvV5g74Pi2gUkdc8BRsRJx1L9LWKKcACvc",
  "key27": "NBa29qoLeUbSzSnJj98FgSRYGLnGQmBiUAEGZyJEWTAGGasTkE4FmD9ffGAPUDpdCXQyJtULwwPXHYgUcDUdmKh"
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
