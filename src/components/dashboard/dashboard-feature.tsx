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
    "58NpTaxV8Eo25QSUeWkiJpo6NGFfC7oYqc99cxvaHwr2nch7FHpe1JpH7XvQePr3Hby1ALexdBhsJWjpaeyttNRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4363zrA3rQUvgrDFXiJNFMCuNMZrGFTUf4GhR589pd15FL3UbNjNPsig5cPPHDgkycMYjam98bKMZo7WpNKtVoWZ",
  "key1": "oJmonAYd7DrJKGFRDuvCzjW1cCGQYwwKuXWaTumueCT8spH89fuyYtnZ8uYLjP1j85pbcRBaf9jQvmnquxtkXWF",
  "key2": "2Tor2rtkPZyMmcRb1srwZKkbrYjoJVKtnJnH36CpQ26tQFQ8HKfAzrfuFSBTYDranUg6M6YSxWGys6i2GNsHUdi9",
  "key3": "4H2sPCozda73kj4U8K5eLzviKyPCmCTLcG1drkcDKFazXaxLGE5YNvpteNn6FxsJArS8yLhbozgTVGj82a4WBVLj",
  "key4": "2aCpVFux8EAK4E3fzMC8zWAXRcTQtJHDbeVJy7ahfgLJrh1BHkQVQ49au2sAMz3VACqXWzp4WCEPsqKBo7SncfLP",
  "key5": "39kKkvQEmWVykShotjRgDsgHSKnmhtPfEnMQdnGuekg3BH83DaQhxh63A4pu3UdHHDJ5F81rE5rDNi7WLiGanCHd",
  "key6": "2uZVmvD19YFvM85e87DrWodf1dpV3hWT8hukcLqgvU11yEtqgNUr4zcjRZ2vxYKrEungYkFmX2TYqyxKNMefW6bf",
  "key7": "3pXUw6xRZs3MKqVVTYv8Yz2K2qyn9xt19DVau7F2YUvsWEmi5XLtP6h9VbmUYTr8rCB2YRvPn6KQTMKPJ9ZN9LRJ",
  "key8": "4JXUEU5q9yYSc58Ue7DWoL8XQUyTysVKsfvXr5pGyzs2aL9toz6snPRo3j1BViNsZn5Ux7yfioGCoFxHC5AD5tAV",
  "key9": "ii3aTsXVySe3419VpFnirVggzKaJHLUkccMgjCrT2RVGdBBXjFzEiEuC2gFYmL8CkEkg2HPw8QirapsKqj4oDjA",
  "key10": "3XhFMYbYKRbekP4GXkdYMft4oeQXsmEuG2gNp55tp4HvTYMv6T3GGNqwkiedVJVpoZirZVvwTT2scJA8SuFjC5TY",
  "key11": "5mUSSfcfM7bnNdn3TUqo9cjVd8LbVYdikMd6V5gESRrdCKmyp4nTPDhtFFHNbS4iekuCRg6eWaTWpKSCHYzi4H4G",
  "key12": "4ovA55LgSvsZtVKz2hrTgFNXpreg4qrnxyNrdkXkhTEFrPnHUL4nQfvtnibu1bW8WQPDJgoXbKHtDwybneYLSqJJ",
  "key13": "4bTeHb1YYmtg6FSxw8cimAjVHu2qSjDvGhyUx7mv2yBu7uzN2cix2BUL1qpi8x3cceinXteeq3h45PEbziymnGq3",
  "key14": "2JKWzBPeykdtLG1FD5K4M2KcyPUM88KkegY8Bri6xiNnNrfdGvPTRUUS1p2E4HJdRVL4YnqV7myjb4tA5nxDazhg",
  "key15": "5f9yMQGi7CFxJskLxxeNTG7S9Mi33sVkpdz13uQ2K41KbuzsFDBUMCVjXnEC7MjbigyJ9S3GAFsT7YmeNdjmPsFA",
  "key16": "3QdwruwSkuJ2SPG1dBrdbftBa2fDYJBrTrHNRyJ1uKQFUp2z1di1gjKYjfzstHTmT2mww9XG5juMD5UaxRFaC9gs",
  "key17": "2JXK6gyneDWVe1Lpr2iMgQkVawrdsDYtBs2AkJ2StZ7SDCCyuaeU8xeNUqZBr7YmVQ4EqMupY2dbq1sodmNdsAV3",
  "key18": "pqdRj2hEJE6HuHL4ibvpX7us34aSsDL8RMNaDCNSwvqMinCoefn54tbkALE7DztWTcd1mS5ffs3JgLdeZuQJKxC",
  "key19": "5UN3izpGCEZYC6Qe9baeDxjMBMP4aNmabAW5r8tGvJTYgJmbJ7YCcceCrnsJ2zN42bqLQ845GVfPqTfTNagkrfsa",
  "key20": "2cV9uEWTkPrivnEFsNmGoJftPNdZcKyWmAHJaVNz1QLAHtRyqdsxsfQ2LBFgVAAiC4fp5mCNKRHXggR9NaJGFZJr",
  "key21": "HLkP97RnEExfr2BgSH3vUnXg2rvWTh1o272f7RdoPaiXmSKAnLTn81UHPDZxrvCwt9fQJmCR73wzQyxEzVzbBJE",
  "key22": "4svXxp1C2Yx91JZkj9ftipfSbrVbe6qCDpDSJxsXPnFNY9Cgvn4UnVtFpe8Z232YvfFBR4Su5uC3jbFWqZSgWKHh",
  "key23": "67Fi1JLdMyWYt4zyStXkyVDTBDJLPMRYVNpXGGrWuPF3pk1S34iybm953uRFrv53ihP9HGcvyw5bdcmGK2ZYWaWb",
  "key24": "5zqeaPATzTo3RyLUTjZmLNDairTEdAXf4bZuQgUGMgmXvqnA8JrmfBpR7hQrr4KoP4M2GG9wqpa66nbVpHs9wmhJ",
  "key25": "HE8mLH3bEHzm412BAB4FZAQoDF5ccJ6jBzqf76by3shWvAYBGxm4MjB5kHEBwMaQ8GXvmxHvtj7dEvnCJRsnC7F",
  "key26": "5vR6b3kv1gbGyBrpfNhbjkKVfsAYPpmaLzHRTDNUbdDT3dCpD3HmCXxLqxc43mx2kycasuHFKPNbYYFzsR2ZfJPy",
  "key27": "4EThV6GkEsZZY6jY2CfeA7Ctc1GDekau9QYr4RNGCos7nQdrXEynQqpnCM9hDsb91cJgVL7bew82gX3zGQhUVLAF",
  "key28": "59J9URW1XArptLnVs6HA5mjaRnfKzam9cbauyWttaRXRoNsaT4fn4oUQLAQVZHaeyLQgmstFzxxAbfKZQiFA4Brn",
  "key29": "4tbNb55DMWRdVKC7sBSeAApirKVXAjS9ZWDwp5FXPKmhyH2LPSYcH4DpDWowYS1wttF3XgP14UvaWJyNSsfyKoUY",
  "key30": "5h9o8QojxF2JWn4twCZHTBtGngeiaAEPKSV6fCE1VD4TzFNt4BQzK4Nhduc9s4yQ1Dy8jBHZeQNP6fTSckKSmopR"
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
