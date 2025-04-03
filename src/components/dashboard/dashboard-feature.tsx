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
    "5yGyQo95UpzH5TGnbgvmxr2QnherNbjuDwMmKHnjbR4qMoSpRNBSRGrvr1ReFtBWxJgzfgkT6uDb749ShdnNvvHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GyRL2vJeSkRcSWKj2q3UYnzJ8cqJPRrHAVAMrx6if5u5faDAFZfSncioYkLSNT6VSX1CsS82hEmG9C75LJkNAd6",
  "key1": "3BHhV3iGQBMiYsGyX3kbKgmaeQsZxmSWag7BHv6GUTZyLwxy4RhFVNrH6yY5Btq4QUNwC8RLbRByyNsAuhxiTPPk",
  "key2": "5JqQfKAdRbqocY3NJHdXTMzTNZzXqYZc9mFKPLDzmMq4tbmh6uZrFrMQCyUAfyr3Fm1Yqa2Af7mzZsCGyGFEivNn",
  "key3": "uHCYSo5qjKtSnLaZjUgDVgDLnYuucMLum7zVPEUdfW5pxGqVWUdf4wWhUaoS8mH8un3dQdDB1R2W2pHxGfY3pXB",
  "key4": "AC43PhmEhY5WgRc6mhystcBuTCfdKWVxDpir3iiTUMFDqZ6G2uYPEoeasmHReUb5HZUoQDqwfoLnBUP64GvKSGX",
  "key5": "3t3647N7DMrGYWqmSyHmQN3oD3tWqWMTELy6qPxDGXrP2vBZHt7GoiZccHmkDMoVW9wJBDx7L39QZqTgx8bVGiPT",
  "key6": "4NgdWnfq82XehkNrVKe6KZVPHY7n8FpHrQ9zgvYFHtBCRiVqHcbq7wy9KTBiaM7YxYR3A5XRraHvoTh4htqEKuk2",
  "key7": "wcwk8UdhBf3EWjHheMSxaEosJBim3sZW1ghyyu5GHUyU5wgNKBAiDCHVfca7GDjxkEs2JrPw3PojkyWWHyPEK8Z",
  "key8": "5rLeE9fz2mL2BJwj24Bao25FG2RV8WXENe1F4a62BgBFUfn1tzjrksYF9K1YdJm9ag9B5YZcCpnoyFfztxWqJYCy",
  "key9": "5XNDwrQPxMsSXV8zDuQCDnrAnicQRD2CdYtUnc226TYSGnsW7Nj2Wt7E7hLYzbfRYtrFj9sGGDLjtjRX9qfqjHJZ",
  "key10": "3wyWCWTdtNBmW4N567uTXzYQ2z7AApD31d4CsxcEq5ZhiFV2hHeZakPLXURMRU2y5tT47oxFkeJg884SVeHzkC8T",
  "key11": "2KkYF6NZWLCwTdBvysWM9Fmm4yY6qGCbsU3riB7RvdZCpyhom3PcMUteKbmBJPPnbCNiMar3uoSWQuRpuBXVB1JQ",
  "key12": "3pE18khgZonUpu9yWf9acpM49ZY8dG1SHitxAPFguP1LX8qukX2CucMWnsZopaF9dLF3w59LGEnLFAo1jZxMU8uj",
  "key13": "29oFyE7sSA72sPtGofZPvyZoo9DbCYcRUBp1GvAihoUn2cj9Rqnb1mnPLta8ErkzjEZzEjbPFS4NjShWE8qxFV6X",
  "key14": "daRskKvKs2fLeV1Szq5djhB6LsMdgYgap1622ekns4gW1jMHXLV2QSBD9g2rnaZ6ZfDBeZmM8v5bFf94HghFTaP",
  "key15": "63VCLFFtTzdWGqKxjfLq7pFfZLKrvybft4pP2EJSpEPjZiMAbf52GnuavhK84zshkNGfY59K2FdcBVmVsgXC62ie",
  "key16": "3GsrYnjwphwyyn3raYdvja1UwNtAnX9Hzrk6gpWU67vXrX8DaB7yJZAdDWgk4Wt4fpXhBqUHoFK3mNGC8nspZyEg",
  "key17": "zojzgsqAJDmRrkAbifzVuevHtuG8bRQwdKL9RnxShUbHNFjSFnuSvJWB2zMYpMQHXZ2X3bVSCJDWg36R1kXTPkB",
  "key18": "hTY7wcuGQNv1zziMgNgJeesUP6QrK6H8sbDwRzpLbGSR8LCWNNxTQhkWhKwzMTV3eT4XewPuvFy3vLfPk3NiTUk",
  "key19": "2uoyT6ohodZv1n1v7D5aVxcGWAqRxTwEDeLq9kKSQpaZdwh6qQCwxJa267tp9Mq71ZLk9mVgFBkNytJBbySRJuNc",
  "key20": "3paSwUxPJJ5qTqhcYxc7W5Td6V9UsEbMoHAhWHd6qajLAxgsCbMFFFCssohfCF79sCEJZR3Liy8kJgsNsyb9gxxb",
  "key21": "2AoFEeq5TsiBPfbkLNjtmuf76S9z73De1ZrvmN7N5USuZRaxWQrpfShZM9ZRgvne4jFs6hWBLLWhiLEKgyCmdzzP",
  "key22": "45YGATK3RqDPUg5eGPapJMFMTsj913Tnu76N9ZnrU2LJTDvzoaJPWdbvjCkDmBxGfuV2dULmsmV7a11fe6qCcg3z",
  "key23": "2BKmFxdaFpMTa7dRDNKQfTR4UgLHPkcMSPvncgRJN7icjVaUWp6ZYhqY4yfAJXaCxEqDH4Pj6MxpXUx5i61tHDwq",
  "key24": "3bveMMRaagc3bUzbDy4ApNubSdk8fJykxGCfHvqvBiD87bMtspG5B5BfWkSmgz4LzQZLv52MWA4bG94M2D1TpuiC",
  "key25": "37ud8AAbFfkMcEsnRd5oSXRhcngAG7jHcHpNr5mnEFUyUxy8BxKUspDDbSER2pcWr5N19tNm49x7L1dY7EhQmK31",
  "key26": "3AMSuDjqhL46FLqRNyzHq2uYkvAgCjiLcnNSBcHE6M9Zx77EohJFQWmFHSbyTVLU8WwJtSvpyJFuKhXZW5ck7S9j",
  "key27": "362rMkBS4ifYQtk5DeegAB13TzNBxoWHBm2w79PBv1GhomRWvF791yfVr6fFNirSpaCgabNavJXYcYnv941cwmTn"
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
