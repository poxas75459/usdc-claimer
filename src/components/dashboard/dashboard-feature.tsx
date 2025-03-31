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
    "hujxRh2HS3hC95Lpj36ekeYNqDXoq7Hry8vfbWNnQda7pVATAkFkUUzQd4yLJt9q5HNWjKNAm4JnHiE1aPxh36P"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "437vEz7EPp9SAvygsX1RPVcd9y8a1cp8Uc48ftXVuWD8a2tm8PjhRgwzabk2Q6yLvz1ePQGPDMuZ8bMTXyqx57YC",
  "decoyKey1": "63zQLudjtJ2P7cpbrizDJUF7WbAuXd38HZQtg1KqniW7S8RT5oxz53oQsuHoxqGgCVo6ivmtNAAqPV98Y4iJH97h",
  "decoyKey2": "3AtZPUkqSQR89DxpPTc11xtucG825WGoYLgRVJM7ZvoJaYeqKhvHWrHbULb4szfRVDXUjdisb7LJtRf5t932mNfp",
  "decoyKey3": "31ZWAnrmyB1t7sD3SSnwh13Xiy5NxVj7U392M36SE9PrDsZPCu99a26PfUtLorzHXi3GN33T5Mm21bmaPk21WPbi",
  "decoyKey4": "QPsfKT1v5eQik9Q3TgNhFkUsSCFUHC91SH4yTxyy4ibKAeJPxG58qW4LAZMAz2jHG66n91vZNmUB3CchzLPjaos",
  "decoyKey5": "4t6y5fFqSzzKnZuhQusb7W6716tzmqBDAQ8AYaxQ7nxVrGkyVvfGNGSajTF9CufLqBJCLWKhJrEj4aBEgoWz7SRd",
  "decoyKey6": "4XFKaQuKnBH8zUVzuujL9ajzUDJ8ME2BBR7FGUWM4Cz9fYmWrMVm6RCTvgjUi3xBn8eoNUsAEENJg7a8MkP1kt2F",
  "decoyKey7": "47RwDgHtnR6iiP1Ze71N51mpNvbSeiiyWqBawJ2qna5LZnnUHhcq3EZEFKw2jUUYzhbbz3eDSRoToyWSc1mXFdHX",
  "decoyKey8": "3Ee1jkx4chie9qBaus7ve2DUf3VgfAUwQKb1oUZHUcyZb4EpkZnZCtrYvSjkdsr3gcYpHMZs6x5NaMs56SGCuLie",
  "decoyKey9": "3kHT1tVB2Mm1TAWokahhK2EnmvChaw6qyZebLwTA4VnyC5eaxsrhC1XZ5nUZMZL1cufLChczunQVehaYRGyfZHuj",
  "decoyKey10": "28aArSCsgEdGcdZ3iJqFoUAj2g8bF8dSWT78ahYiRTwN7n7tbzZ72RQBXDkJBU8u1Mud5QXw6aPjQvVEbyQVtfSy",
  "decoyKey11": "3RfFMSrK12FhnjPm6Bojoy9myxhbFk1HTZgvEjGiVBq68G7zyjsdemhTur6jPJy4BNwWNpF6f2xkQegEWXj3rT3",
  "decoyKey12": "2pKSENL27NFaxKaKRbBJiz7C4vDp6i1kWztcrkj4yzymBCzUTyGVxZUQF6B9L9oGL4Ufig8JkALqgXDXwZszwDM",
  "decoyKey13": "3EqTJWpzc9TVCxHwWtHXRo1xoDqdbJHS9U5qxYSqBeqxv26L98c9dX6eXPKw3x5JkEBit3LZi6tQ9b9KRjJWJja",
  "decoyKey14": "2DNJ91Gv8SQRpd8sM6VHtwEzF7pAA75edtBug2DgmTuGoX9Riz18Ny2mCPHtphDnjpXFpf227ewUQbHF4saHbsJv",
  "decoyKey15": "4DPXDfqiPJtbgWi3YxZYerYpEexxVibc7U1DSkRgSV2QwtaCuddxbN9aNwbaQR3psvPQsk4rdSr4pxwBuWZpX4Ed",
  "decoyKey16": "5ch8irzAiW3R8tYUpVzJqyHoibpLWaR3XBwjvvTzNv8oLWygrmDBYAG9pp1URvoR2W8DBpS93D8ytPD4nmGkK75W",
  "decoyKey17": "5EYcCqfGcWzvFtURpamETGxy4k3rS9Yssyeo4D75u14nT2nxKpNm6fS9wdfQ5mv7aArEDu6n6no3SbR2WxCGpBgC",
  "decoyKey18": "3yK3SLXM65cCiDJJGRvULbbgsu9RSBH8SbdEqP7G1ipnmzJFhiNxVxB5xNtmEacFrLSmDWvjsBh15qxorVeBQ64d",
  "decoyKey19": "5pGr73ciVACs5JdJXU9UBNTcrMEMGnTkjii6XfW7srZZaiukEPyThzPpJarNzbfrZAdwPyvTuvp5iqE4SRo6svu8",
  "decoyKey20": "3vecsov16aK6poK8mbBjwTdbP59CACarhBpZotzs8KuURdocUinnGMQYqR3yimBaukJLPGNkjaanQGK2rVExanYQ",
  "decoyKey21": "5r2oKs6wyqVAk6km4C97DqAW2ZtxvpQrhwDkAKvATZSMSkBjKUjqFrmGYfD3DPYvg6LBbLrteHSEfcZccBZgZZCU",
  "decoyKey22": "2HBcNUiuiVeuwPaXPW4pkCN9Deh3Z67omtmwLrobvojucSPy7BRkByEzqhxf4LXyomk1YxV2UNYj4yEhrqrEKhXk",
  "decoyKey23": "4w8UNFw1x9okmxQXYLVa5n72JLGpnpXrEqTktQDmfhntARdNTsjGe9Uth24CuZZrnZCzxZR2zZFSGQJhaLQX5wVT",
  "decoyKey24": "3GbitSQdn8MxXddJ7bPb58hw8MuB7FeN7AUHRymrssvq2TEXFzdz3pHFx7bDmdtQZWpnKij6QACrwFb1LL9ZBSvv",
  "decoyKey25": "5AY4Kv8MDN6KR34KdK6Fq4cb5K4E2bYmHrJEi9Z7LKKfXm9LeqZm9V3atVDBqsdvvqnMSSVuC52EnixCEMtFuByG",
  "decoyKey26": "ignXa3fn63RCEbhUKTj1XnU5fTMHV8qwDjbV8c5rN7XMRAnHTn3LbR5SW3ge8EEEWYHBAgAA6kjkAVzxzKeiHWg",
  "decoyKey27": "341e5b5WQrENXif1ExCQLqYGFUBv1cKoEYz5Zd7s6YM9bmGUXXBkicHGD8arMCTkt8g3pys47kTjcYb2saoVH7pP",
  "decoyKey28": "4c3EdGAMfNWHtMSuo74hg7hsDozN4WHkLvRXpj2TBgo3nguCLHwfU9bZvWMCngY5T1bnY5m3MtNqybK5c7suaRz8",
  "decoyKey29": "CumFFeCBqgDwdvUWoNiFpKwLaXRwqrgzLB1ZNPfN6JUxZX7cQBpvHGpK6LfFEgXr6S9d7dGQwub8yKE691cqofQ",
  "decoyKey30": "4bzZLCdyXvM8HUW6wTtxiygJGUhgJUL5UMTyzAXufto9VM7cBH81frgqbtxK8PioEYPicDBiZc6TRn4a6aVTpwnY",
  "decoyKey31": "4QN16yBY6dgxx7RKKsoSf5GNw2NnAaaimxquSKm8usaQQLPAw1m8kXYzAv9HcHVHSNkmraDXPYmz15XREyBB2U73",
  "decoyKey32": "W35jFaP1NTgc1kT3QawS37hpRmaBLTec8gxZXemp7f16MvvNBtqTR2G6ZRwjcEhyPC1RNV1DH5uQ3C28aFmt6KL",
  "decoyKey33": "7FGh2Z4MMu1gb9VPC1H2NKaAMsHRnHe2HbQ9W1PzXZ7vhpZ2wgAT12nyRgAFJR6wkUjmNyZ8EafzadkMsGJysUq",
  "decoyKey34": "4owwFENonjqhXPqSAGh4c7cJMrTnAm2ixaXS9ZZKuQtzQu58cjiTtuKdKqERW7m54WBd4se45Z3Ph7pnqqyDW3cH",
  "decoyKey35": "4U9fsBE9w9iYtfs1LMxe8wryiTeRL83Z29fH6TjJRoTUdbBJVfSy5gCeZ1n1kqiePDQ3YUH4eqZSgghnsTdrXgpE",
  "decoyKey36": "5Z8k9Rxv7MJgyq8Qh4wt1Do6nMQyrsx7R5q17kQA7vT1DufLn7yWDrC1Rjk9kRb7srJSXrixCH9K7xVF7jdrhpTn"
};
// DECOY_KEYS_END
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