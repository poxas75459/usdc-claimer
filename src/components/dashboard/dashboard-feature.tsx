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
    "3vy2vK9guPZBiH8ru9J4MvikZVKdv652TmCaqkapdGQR19ob97oUYAAqz2HpGvjino6qrNhcgRpmZtVjSCd2NQuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpmDByKfzYGgUnfysDRVJ6BaDuV1cMyu9xk72KDpiR6pESCiXUQrfc3KzyPofpGMMFxJKwjSoFw1mPsAifKMt2c",
  "key1": "4ZddPB72mt3PjzZKPwbdg3uUVe1w3PqJAV8Dy5QzSamAvg7e4DyVWgmFavJ4ZDK2zqgh3yjRGEAfYCYRmDTXF7YD",
  "key2": "3AaF4gNb6uiNnPC9u2NGrCHpBFKsQfLVLVuhZrbLEifXGq6uaN9uqrqaCpwaLmuNdd6x3XZ2N4BDuB6VLPZSfC8F",
  "key3": "31nQtMfapgrssuQUxKTJErmvsrxBHpmiUbc8ouUXAVhwXwsdYHDC8uWVSn4dqm45JSVEh9Vt1A6m3M5yM2LfvMs9",
  "key4": "5hC1aJoDYesoya2ieadob8xh29Yh1SxGdeJ4in2DwLXrL2x5i1Z8nv6yLjTmeHkEenD9PCTEAXeDvoPdbT2PKRno",
  "key5": "bHwTpMKHVx4ZE9zQ7Ys6EmXD17989YyiBBHEkRBFcKJx5MEDz82Rct27qTBmaav4m7sv4tSmR9cDTGiFEjeMvyZ",
  "key6": "jebhUR95kV6APDjiHwWDTbXWBXQy6FCyr5izBR7f4CzKNrta9PAb58dPopoZZdTdwKcNbZzdDP8iTJb7uPhDUnV",
  "key7": "4cK3DXs66AYTdvPL74eDAjdMBfc13jjbzdBGgJtwkXgihz89SzW7iRJpUnMUng3xccLAaGDTE3YZTi1P6R9ebyGn",
  "key8": "2AnmJL1fxj1uKj4FMWxgh913rxgQ8zunvR461CCdLvFfJNprHw2RFQ7f2x2yQUu2G523CLXQivdkqbEePKwvt8L",
  "key9": "65ngqDwRbv57479wUi7odkdBbFNL4arxttEQUvbyaPQHG9Hpfkr3FqS9L6x9ymHdMx9s93rbBexwsAmnd6FHrkwi",
  "key10": "3Q1CcPiWEREDSW9do58meLkyfbeBp3Exw1ZDWT9YkeAhYcYp6cyXWwSKP1t6R6tZsnXfhqPK3FLfKGj4voPUBD25",
  "key11": "4enhbReCYj7LmfA13r8prtG8JQs2GdbQQPr1N847mSJAYWbLgVRuRk1xTsvNq69HZEHytwuvpjFBPJzLFRzDiUDd",
  "key12": "4P8z6zLdcMSKPRhpRZqnGV39FKCAjCoVmpewLTab2MXBPw36aHrxq4zD4ATqcKzR4N2CurzYK3D8rtUzVpxEmwHv",
  "key13": "45Ctby3CQEK1KJvC97jKhtYF6fY1VysAptr784VTTYQYzniGJVq6rmNPvJt4VtTh7Kc8s1FB5cnEtdTjAgPE8kMs",
  "key14": "8Q3ZZ47L36maNKx5Y1ePaqKkLcCHEqfUbeRQNjW5KsJxgdF54uL5CpaPiBEChFrzJtM2qJYEtL1ReT9LGEKtif3",
  "key15": "4EgT8jyJDyJaoKHk1RhW3Bwdfz2nV6EiYC1gWLbmGAWJmZXXw6ngSgQmr2PZFy1B8vv8V69pXAwgGGvyiUrmJz3y",
  "key16": "55dBFYdR4dMoPcoSoHx8XEvKsDt34wKgaA17eWSD3AJE3eUpJk5Qf5GakHkbsVuDRvuzCT2DTEmfM31psyPrzTUQ",
  "key17": "kPBhFSdA7RbXuSWPBjkMvvuhti7NkgfGB6aAVCsjWosEqjzVKKEk9vLAfoVRrb3Qp33k8dtUuCoLy2kdXW4GyEa",
  "key18": "2Fxhsag1hB8qsFpyZigEhktV3CWHds3ztjzHqKZrLnUHAvvxAb5vpxVSepi1abq3EFBxaDqvMi6nsMqtVZDRTQcU",
  "key19": "3aL6VrCAP4bd952EsTzvtD6oYNEfby1vm7PRGzVHCgTokSfsfkK47YEZNaGoxsbcAgZ9bETCtuA5DV1ftgQAvu1G",
  "key20": "TaZvLsACfYtxiTJwBDF9rqPBxFnWtZnnGpYR1kirG7pDVpPvR3BnTYAFiJ51j2viyQS37mSgssxeu9h2MK5fNvM",
  "key21": "36gwvRka5ETnxpBuPb8SjfDLvSJqsAF8php1pfv2zcgrNPhqjVGF4aysN1FzArXkitxJUxXogPeAqUVXSnsFA5D2",
  "key22": "bT4bdpGQnDZZZttiwXspt4jeo6VLUEmfJErmCwCPkRmQK8wWhn4Gyo1ii5Hdo18BkFcpuXzgsXCnQdvkWtASMct",
  "key23": "44yTbZ4WPSKqpd4sxKCXJJC9NGE1KRdooeZCkqufBWMBam7zBKHbiqfTSEUG4jydQTMbYCJKS4mzAi1Ntkh9nJgA",
  "key24": "5eg78AkHgbEobNzf1bmcF7EuSixqYsjKprrcwNfvQzDhvudkwUq676nHFUrsH4GAkNCCwUKUu9ndnT4FhyHLpE7y"
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
