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
    "4jW8kjYGp22awaWEmMugWxRuGUHdJvDYjPCEdCVjiVm3jDdKN25t35FARp4pEtdFAEjR4tkFn6BVWanm1DMbiKKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rURiXNrWr1TyxeqKj7koTB53FvVZz1PgnNrqPJGhtJRPrZmbUry8rqe9DdxGq9reQcMWQTj1sHEkrHx6WJDeC7E",
  "key1": "4RJTC1Xv329M1KRLHBkbbEkpYhxJXJ2j9txyiLQ8xs3MHgtRuWsziUWfUuKM1MAUJTgZhPcSSCLrvpca2eM86xze",
  "key2": "iTtjdzFD85ZB4ACzuSjj9Lbcmj77BcbwMwQwpGHSP1pYnusKQvJ45xCApyKBZS1bn3E4SfgFGvGij7hDVQDt5K1",
  "key3": "2zVAqAe4WMtCW95dwH3AhVx8JdCVoj3XvRT6mnXtsS9qa21LNzWFYrNRoMt7HJM96j95dZ44ESWDNL39odEoyV23",
  "key4": "gscfMkj6Zk1n2ssmBihXPsDq5bK9Rpwb85WWmmvV1JVS8vVgd7XJQPteUV5yK2y5j5TdhicK78LT7M6PYCNz7G8",
  "key5": "4QfrAUxtG4Ue1hcDpN2GN37o2NkVXD98VxYvBQij8CP7xXdDmLsgUdjstyWLE9bHGGWrJWWEQT7BLipQWb75LXJA",
  "key6": "4nVFyb7DoioMijHdwHReAv7xQDhi82m6ZfHS5oFgzEAsMa1hwyw9awq2RQUw8qmbzHiHFJhyz5EuppxGipxE3iRZ",
  "key7": "24aEN4vbZQke2y8v1cJzUCBSTtzKPzVCHUr227f6t78EATpVgrNcSyJihF2kdS3vr8hqj2qa8nwtTf8ctSfVZUEx",
  "key8": "3G3f6ybspQwiiWvrejhA4aC1DafuPNFYJFtCZyVvv9KTrYqCsU4r8kg5jhi1A8FWkcyg2P3f55Y8ZXYXsitxqzFz",
  "key9": "4v3B8tXuuXN3ZQo5iK6r1sZS8rfv2WkTX83hzpMeCcfsM4PHnAt1gvDsHQHQPViuoc9Psp69zePwrPfc3FmkKnDE",
  "key10": "3FhKFX3XkKpcAQh5iaWZzJ1aQGPchENCcjr33NNjMfkGtNseVVSNDo5wwX36J7BXWDNPJKF3pQgzsWhjgFLkK5Lj",
  "key11": "4MZ7zxKgzKcKnn9ZGpzJ93fuGJJvaPBAy6YAmp3HfPC7ooTV8nuVFRYDQ4QmeyQXpAgvEVFEFjXwPjiFxtYJAXNf",
  "key12": "2gezvTVt56nKhW29xEoiEvL566MEFMQZF5ahRJf4aTjUNjxHKnxYKBx35GtP9KnvzeLo9t8wsKH1n1gc13ANqkxw",
  "key13": "2hcDjjFiUuy5MiHBQcjUtgVG1esPvsfmsAFU8ERuv928THVjvc665J49pGkayzEh3RnEo5XuWKkKP6ydfxikAUYt",
  "key14": "3aBNKmRbQXCEPNpGrcWcqRhQM1WysiKSfcgLeuyWn8TFCCQYeAVoqYwjZmYro3ingiCQFXnP2HEzEEp1X9aKQDDn",
  "key15": "2hE3MtQypiGpGqVqKLzA4NgesoSxvpveY9aVnnPZAALWWA5srx7B2GaYTm2RQCbjC7auRt1FbBdMdUyxcsCJ3ufj",
  "key16": "5uuvFx3v3h5VHMEHvPA8VDTHXZhXY65fMS2bqNkHR6CzCVEpWtpUH3TkByS17wrvyMXmacmHMQLG37HS7VF9NXBy",
  "key17": "3kaqLJWtyX8wfzLBYhe5j5dgDxxo3Dd6wFbEcjkxKQs8PDi8h64oWGzwUGRx88sRQmJU7qEPyPgBu6jnrDH5uopg",
  "key18": "5Dcsgk5fPssgzAMUiUAfXYtbufgwuPBUSMNEiVKP5kRJmUAt1od3feaKdPkuGR5jBgoi9doQoti6c7wfMaRF4n7S",
  "key19": "64ar3ZPZHKjHnb9VBgkCUEemivyYKRq8wLB9uyxY8ffCx7YWwjazivtMauFYUQgR3zDc1B6xdCXd9mu7rStoKXEs",
  "key20": "4ARCsJeZkBFgFSyGcwujc5M7WD2hSZ2zzut7iUdkApGmWksuZmzL4yEvLrdo5wXx8WrPNLr7LJeBFRCchhEuQAKd",
  "key21": "2Pm2YDBzQMPX9mupWDjbEEJyqPAB8o9aUPxpdwiB3eQDBxfGoVM2Ajkf1gzUBTCfSqqaS7pv9wfACSYsWR8iENb7",
  "key22": "pyqRmXiP51vrjJW29CnxEDxwNUPBqKJ4tqNvDatYArg2tRr6BBTinMYfumLNfEp31k72jBx85XxBeA17EZMU6pD",
  "key23": "2qLgLGCn8qeYyv7KEq5UCnaXLeS8k33FEEd571bJVbwKmrMPLfCHm8hVsqZp86svXj1dXZ23igE8UHbuHaEcTpKH",
  "key24": "2cyqHEWKNMsB7MWxwzPWAEvrStnz79deNa8F2ueXPGMSTrVgAYEpu6DHPSnxCXkt1bc7XxCb15o9Yg9LHhbaHK5",
  "key25": "fHoaNmuVVYmrjofaAreNZjScbhovsXcDtsr9egrycMXvg23TLWTXaHCUUb4w3g3azRtojaVyzKocHgrQdVpnEXY",
  "key26": "23pYjvGQW26GHpoiiiGbKVm4rwpfNYMuxLkzGq157XXmLYqjv4J5Gk2FLKnc5jjm71PnJsE22u1wqDpcXzZ7VkWW"
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
