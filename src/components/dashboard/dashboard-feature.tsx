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
    "4NhboH2uW3eMppbvHXE3HsCRAcaLCxPchWGB1V9XpucP7miY3M1AWbAio6rBAEbmLx5HQYE6j8viqnyWr4YDbLkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oS6MUA7TdhSbZFJdn2DC5Feidr4CVPMqVrzQkEhFAFYSxSCxu9s7SC9sPWmxb49jQNKogcs6PGApbR5BpcTWxvm",
  "key1": "ZHq8ECR3X7HkyrM7FMhJtLFqgXJqbYqWmvWTUKjSu3CFnkUxTZbZEtfdb8gkJ2us9ShXbP4dWEg2q7329F7fHfY",
  "key2": "5Qd7cMFreCNCY5C1MWHSmeKEhSaTKZHRAaq6ZrXdRRBfPoYbUV4U87sJ2Qa1VdB7cXoQFdzxBWtFNqu2up7opnCH",
  "key3": "5sBVxJwN22zHz8zFXMCbtd56GaqFFbjUdBqSLCBTUCCqKKhetch7WP7pVnZWL3nRq1dxjnr4HvpTVh1cesaqfsVr",
  "key4": "3nuA6iK7F9r8929zcDG75kf9JCWhoASbSpgdm3RXiwUfc76nuuU3jj3PNry3w9s2RRJhkX8NbTLi21Nk3dTczrVf",
  "key5": "4NpJ3fvARRNefspGGvR19fUA1A4ydJG3nr7FtxmfMrHeHh6iYd8iVHRKM2gtR2LDwGCx9FQLv8gvE2Y9rXKpjZ42",
  "key6": "4UrR5ipJP95sDp8JLqE5RQ8oDdJKQLHBQgwG5EUGakp9HHjSHojM8uYihWmcWyrsyh55J2GzXLGnV7XkgJ9J9fwe",
  "key7": "4Pjqx6JYYgUYgmqvcnc5qJMrFKfPJXKofXQsEfG2acXdmUk6eAhjPqscYheVwFF8YuE2n48gdfLEp2TehUyLP55Y",
  "key8": "62Zc3Fiu48mukqQAn8wkcjCUiX5vmLahGd1wpBLzUGeMg1eTqviGgt2CErbFhuN3R97k8TftnFFA2uJ14xNDRshT",
  "key9": "4XwRSUXUMFwz1SoQDv9M8EhgYQmPsu4FRyjVCLXurDkUDsjY1Q3UwJncGeWUmRBn47CchMR6r7EtrSXKBP7WS34J",
  "key10": "TUx3rACTJXVhEYbxp3r9MLUVAHiPuFn5GJYDwXhiPmuLeKkrpB6AJwcdk5vaRZ8RXiYKxZkw2SrxjmM1XTAYhG4",
  "key11": "4dZELKxd543yHXRQAjKh8xw9gzkjCY2G5Ex3ouTkgjtkjYzf4i943oAF9DCbm75kjk9zQeFUS5tRLSaVZ3iWkFPT",
  "key12": "2vMoeJMDA1dy3fiubuoyMDjWM3tzsLdXfT2Q13VP9tRaYmuu9wGL57Y1HCXbX5rTL1J7RmGuW454RpJpmJ5sAXDU",
  "key13": "3nVD7kbCnhnovGXebRqm6sTEtaAAGjXG1EGPziYEpjWr83fefvAhfJcH4moLC3w3TLbxCzdUeMsuvb75RC8xTwrG",
  "key14": "45fQAJb8inChJC2ZRKStzhE9CfxSJCMaFdUohptXqk3Xv41HiSoZqF2erWESLHXqPNopGLDw3vQCshYnhCmsYcAU",
  "key15": "H5zMHmJnHFVX8LTobhuFmFrTUraKo9rr5kDVHFGWSdqNFYYQ73eQt4NepqnYBwF4Nv9cG1D3cM1k1P3sH38n6om",
  "key16": "cCwNwz6jfnp5z2tpt8JnWwyLKaCP2s2t8vD47tPsrijvQtGMJxytfgk413FpQjDpm5VegkjJFDzr1cBwAdQgzYp",
  "key17": "5LiFPCckkKzdXhLkDYTaWpLKHcMYuuu7zcunbvHcA3Bv2d7Hz8Yp8AtZqV3cfAXsSeF9cgw4A3gkYzWTVqfNiyrA",
  "key18": "2FW2RAHH46L5XVneRLNHCkAPtBcdWwtddskmxeq23MepRxPBk2PmWWbJHgyX5KEFNYqK7KcPFnFMj2yLanE1aYMu",
  "key19": "4jagjEDMu6ZzhFaSNpHfvj9Rpfhvdyixp84moB9A8o4PX6H7G3XKMQTTZVLuPfSMBqHvUb3Nmo3U2tN6vPB5zcYH",
  "key20": "3jwyogLMfDqCmX9WnS1pQoJmj161taQXepBExBFKt7EGhPNbDyFavcfhWCuqX8BknwCQ443NAtKmsqmPHt3fMwDp",
  "key21": "MsQL7vGPPH7X49q9FsVGMs8evPDJALbmvQ7u3tTMbL4f2QncmPNtdxTd1pnyekK4D6k2w6AzXRqcHcUSvXY72ZL",
  "key22": "3hWPrE42vh2yvLAxagM5Pn7g7g8c3hn74TodsejLoYBvH5sXqjxAvW661tKvtqTosL9h3EdCVbD5ePEQxvP1Co8C",
  "key23": "5z4AWafo3tU7cwhEQKL8m5KuAFk2QyWNQWTxRg5gQAyxN4oKmwMgtFdKRHDFHjHWsYpYqccRgKmBJXHyae3PF3sa",
  "key24": "xUEvsgitnkzujRtHKmJcnv255ZSFCNMsgCuF4VfABbo5KWeLWipxhbeWLHKEh3yHrmdPV1bL4ZTZYm7kAfbgjNS",
  "key25": "krnqmuwEByPRNEx3Af1oweJdfjuxovw1aX4dC8RgUotKy7xdxzFuSMQybbEEnprVLB21EidUyBAgRyK4zJ3g2L7",
  "key26": "65WKEnCKAhfehBY9dxW7NMAuy3EAYfQzERKpMZT2grNFGYVjHf5gQnc6AKT5Rmj5Ze3ZUPeU9KXTpM1D6fqFs1rH"
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
