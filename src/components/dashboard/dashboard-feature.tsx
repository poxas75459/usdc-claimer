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
    "4NrHAj6yuUhZNDYrVBH83H2o4AX6dvFrpcnuMCkUXp5cAbaJymgpaA9DVmRogXzdhxkt43zL5MaDh9hYREpFedcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R27U7F6SPMrMMkRwHjQRd18VBLyAmPpUsLPCTcKpvWoEeb8RGwBcHQft3fA4RHphYDC7AF1Lfyno2VhXBd84H23",
  "key1": "5U3eQxAfS5CmsHcPZ4w1t9XfzQYMs9nJ4foMg5mN6YXMkSm1nDanir8KqH43umPFcBVf6kqepAJVmfNWzuRSSsVz",
  "key2": "3DcrJn3RWbu2cCWR91b2CndsQrrD5v5GsKnA5WDfqvB9wEjD1GXPNLwNVsiHwEtArsHquw25vEu2p1UpwusYKwrN",
  "key3": "2ApFFc7t5txR4k5dn22xwAfbgTsxE13WhairTkD7Sr7GyBhBHEiNL9zbhUoo92Us5ro8iZduAweTsadUewamUtqP",
  "key4": "2ZcVagMnQkPVETEyqqaMQf3MPYmXWtqzq71gfmFJc1dPoTL1tJ9zw3wd8mkUp461veFPhV5ZC8vd4GPyus5qyyRa",
  "key5": "fXVW2zRinF8DzguYn8sUEo2ZoHZcgY4fFEVLTs9cbiZp4wNMj1UTzBn2KKFhQBp1EnBZ2s5QgssMfN4R7vwowU3",
  "key6": "4KagxNYuxTTFQFn3yiDLWCmWszkdFv6ChYZciGZkh3Ato17h7gG7LoY72Br6xKWNyMgSaD6exPvoPEnXJQkyXQuy",
  "key7": "2QbBwDSqTqwqQeHnzwsZEiexwFiQdBUC1D9z4Bae5W1RLYFFtGw1yJW6R8qPvKrWQ7U6BDwciMXxMorVYVKv2qJF",
  "key8": "VW5XmLqB61G45k5jEqTdFEiNNXFnwcR87abRgfn1jkb7d5ypXvgqmzQjLXu7dRdsJAdkUFpezyrkNVzijoHFftC",
  "key9": "5Zx25eKUQBDUu79fWfkDWxA6tabFWagAkT69cVHBHKYNvNMBkk1XxJHJTRpYCfXyS2HW6ZMf9s3f8MtRDmypJ79Y",
  "key10": "4qgv7E7PdEfHNiYNJAPfZffaALtYAA1MCFG185avgsVjkrU6prAYZtXLKK3QERtzJLPtvhH8wx3AKSJgrYP1M3Dq",
  "key11": "5KJJbteH1to8MUVNJ8mkg4S9wQegyZvMwGB3NaGvb1LkStkXMgAusyNgMPX5FrveWava2zuPdW9JT9cWzTRV6gEn",
  "key12": "2JtKPWfAxu5jUaEs7nR5kynadpCjie4ySmL1eJu9BsrMyDWCjuNSM98SDbRB1twWdAE3RNCUYgBm87tgKNpSmJH1",
  "key13": "4kjBaeFBKK9U4VmZVK61E4McNYSfJD3pvGTovDyr14NBrxn4LrnbLKiMASC2TnsAZQoUoHabrvT2SAtPCTZYofJY",
  "key14": "3vxtAhN2e6GNzkQR53B6MH8DGc9wJiiS3pb5cLKWknTn27aiwfrv6QhAHR7MW9UtWXg9i6HXAuKzwQZ3i4WHP62T",
  "key15": "5Crg2yMiQDmjzCbJkmpGVqKpBtFGDoybykmmZEg3kGVfRottVrtstXPBAedhmUh2zxJJXZvN7YJri3rx9eDU9MCE",
  "key16": "3BaNQb4YJNZ1is3ffjmTNAMf6i4ud6wWmp4K3bUok4c55v3diTp5vaRaBRi2tiqZsBANvEqXMEiMvU4ozy9npwog",
  "key17": "3hcxha2VyZmVCM9it6pd7sy3PUoyCvczjhpGckabBW9GHBtHRnRP2eUJUKHxdCyC2Pu5MeswEN78Cr2C3WfrwUpR",
  "key18": "4VwQdBmc4YsUv2tZUQdfSR3SHpDNMCw6jCTCsQqyrQUuACrEvWc3Ww368uFo9KB7gppn9dFrFJJV9D2uvvQ17kcD",
  "key19": "2mKdNrqwJC7XrViezLuDnGixKzLvt64VBsdYSFkNm7oQoApJVNnwXU8hn1GcfBf6CkRJrjtQdBrFcPPX7TWZHXBp",
  "key20": "4hrJAbZeFKC1rb1nmS4nzgGkkjdpzjTRn9cYn796zVk5pbCPo2ys8Vtk42MvoBRA6odBNKsyocxE2XPSXRspkF8P",
  "key21": "2EMGjaZAyhA1Sg3VKwaCsvKt4QNc2F35GsnSYBVXBAh8gRAWccVQ9SoNxWctWRTpdBenJBmw3k6vtpRaktQkEpLp",
  "key22": "5iFRzbu4yVwg7BKPu5Ez7Va6sJmX3KAGLpMkmz19vRvRHE9yRGbBEds4Z67iE9tCJTro2nFN1xaSXjRKbJHLvf6U",
  "key23": "HNsQpHQDxYSuv3DNozTWkVMSDoKfpjZdB4ArsX6fDenutRattP2R73u1QJzM2f7mKnAyQd4okcaw5ABJWRB4AfL",
  "key24": "38SP1UbfXq6hzjUPTKr34EaNmvzq31uNpFysghoyDjnYwfUxmJzJZNtR1sY4YqmBS7nQnAiNeakfDbSn5Mny2yNi",
  "key25": "zj5twLrt3tCiMruGPksLEHsmN82sBqTi6Pqi4aHTWFhrYuhrWcfnuDJfzBrZDT2WYJiJL6Lthr9BWxcJX4JStmH",
  "key26": "3g8rWLn5xXZbya56v9xomYB6k8ixwJpMVdkb3b7mPW5mxKW3t6WfbXo8EwkXJynekaryq1zVyo3Sew893Axu4twA"
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
