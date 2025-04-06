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
    "3dqoZcYJrz9oNeZiE82mWAqW1N7zFZegJ9JiV4s8piZg6PJTRi6T1VQ11xj1ivEhGr94dYSXWcQL6pPsiZxb9n79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4Y4d12VT2Aj1vyxMxGpNBaWRVtZtWFkd7TjHVZq5WFXeB1Sq7tUPjEwV1yfdw9vPnga3xpk16Yr4SxHSkon2YK",
  "key1": "5agSA43AqWd3Y3cQuBaBQ51HJ5JyyQTC8P1p76mBKbj7J4YVqP3fiqHXie4JnLkrZjG84cRHEtp12tpDqSHvYDiY",
  "key2": "2JLxpioLkweUpqtcknfFYfTVFmHf8hEtfMkKSLwmRJu6oAKXSK8BrhCRvgBYXriauzM96TvvnMv6RBrZ1cGpShkB",
  "key3": "4SKGznqm5Dk7nPj762GGLAb7FRGfWbqjhhs2R2ru24mv34k71Sh8aNLp5zUguALkQoJsgA2pbeR4ha9vcnhr3vzi",
  "key4": "3K78wuK1HpCz1VVHnaQ51qxPaMD1EFQuXbRHmgeztPS8xp9a5nppuUL3t6WY3XyysiC4mHrAjDwX1PiQ2iHWPpvE",
  "key5": "5Wx9riA1yG5DiWfbENUgWAfeLibhyaVpfJMibD1dioYouptKaPZm8jfgP1A8ekrqSVmxtNKGHY8kJ11GxsN8jXy8",
  "key6": "3ooKD4Za41MJEzFCwRPdtfcccVEvSJpt7QmsKY7cdaKz3zqGxi9epCZFe91yNaMDmQ7Gcr9s1Bp2EN9TjdpG74zz",
  "key7": "m2nqy7zxTqAvSCNDDQRCN9bf7GwifQxBA3YacEoTdovG216WDB1t566PiX5xCEUJnTXgwsdZYRXfrxTY7va8nbk",
  "key8": "FxpPLKZftxGybF1ofaCjXAQw4Bo76XybTM1g9xs9Te5m4rTiKxHhMbccBBrzG4cDvA97HycJW4uvVAnpHsnb54s",
  "key9": "4FZApV4zg7RY4atkfS9CkdoH1URwExoeVbXAaLyndZ3tdSv6JGJ9fQWXDf3iDqvkXkFdRN466aGa6YeJKk47noaZ",
  "key10": "5qM9ePxkPFFcG7BpcNYfRvQLVCXzdBpwxWrDAzYRuYrSksB1DFvjzUhxb4EqsSJTKchqDdRuT2FhVXdE8dq6UHgU",
  "key11": "5JfQGjWcDuwjKBPVYKLPt4mPYduPY3ib48jwkzD7kB6fsZBe7Ah4ipU2GLgSFQQ7Yoe38AEDgJQBbCKNrtSgrU5",
  "key12": "5azEtsLBULqt5qi9aTVfsTgm6xPhs4EPJSvoVoqjzgt4ptrriviZ56wXWYJMmisEspDvHG4EMec8rdRP6H1fxNbK",
  "key13": "4qdPHdPT7t5QsdVVCnUTjVMxGcPPuCjK4RBHWNwCCQ2acXyu9YKShUnQd9QsbxGr1WR7tuTC36xE8uDHP23zmmYB",
  "key14": "5K5pJcTdz6WpR9r5YFDNEcjjxqo1pvgyAmWHkJcdqWBJC2zuQ6DK937y6mvNg1Jman83WjPomPANUDZAfxGR5My1",
  "key15": "2paLDD5uwerHpYzhWmDT56URnnntpz9dN3puumVeRDViCr8kzMCwfWxV3aQn9B1AetZ3ebwY5UoCArXr7b9hQVSA",
  "key16": "3SvcSF5nhztS8PAFTDUmt4fyUFHiMasbQWh9WMCzi6DGuK5WuXMFWm6vMSS8AeHmAZnubLiKrKDpx8tdSbK6HYPk",
  "key17": "5rJhgQogddyENYGe1LXS17pBDrHkTQYCsr92gHcGADz7wiQbrXLErjFREGETZgQpoXcbouZUTweXCRjWgEGXFvje",
  "key18": "vKES8fQG3mS1Z3qJz69Gfx95GJW29aZkyzHn6P3inC7FSYbMuMVaWq1oEVnszUnBD6JfoJgAxJm3x5R89s886Er",
  "key19": "38nseiynt7j5SCVuTFJSFvb5MQiq7Dr6CYw2c1FDSnMB2cKHsrkrxxN5Mzonwi8odKZ7XsWA74erpMQGquumUzpF",
  "key20": "5SFu39ES5vcAfvxoc6xz8Ee3Gxd8gRuyCkRS8UzHiuqtTzjfogxNNbUjxJ2eq8Br85FdfA9D92VPvqiXmJjShXAC",
  "key21": "5XVWQPq4oE696A7ZY2mYBNmsuiD6DocjjubUsgVxCarDgkJ46MixzQ45LzmPHUh3iBBZF8VC5xDNoDvHfKKguVga",
  "key22": "3a1vb6tNZ5ob2PBNJksaxQ1uZWz5r4xDLwZ1c1F5hEt1dGzippeVuVwBxfAKkffiMsG7z33gbye5v6majn9F5x8k",
  "key23": "5UQ3hZS2UiJ9s5bAM54JCJ9FYhd3GMYfDuWoetfy3G2pFQoyyBivQJqPxnNMFKCRptLRkU9ctCGbPHsHpAb7CXqJ",
  "key24": "48dmU4jqht6tkUPx9UvdXw4yF4Pym8YpVfebrd6btJuWKYdeW2Jk1FQ3e3DRLz4TQbeZ4NS7CGscyb9izkrWawQ9",
  "key25": "3QdyQKrTVpnyzybUXZm597pmR9M2qdsYNppMu2A4CiHt5CYLgu1bdDyn5QYK8BQEjqfYc24qjqdGNGw5DvfMHyGU",
  "key26": "ZBHRpqDxbDMsPCdNp8tC6nNVaSCmsfSP85baVPVWsH83hdY5N2TGga9KzrsqRbtTyjPyVskoQGZWWQzThUGVXvp",
  "key27": "29cXXBi2nxDQX4YL8Pf99iBzUERCB38GVKn9GXEsdqMj52tbbeHQLuoBRDDhgMLMT5twaQZMnPjB9s2UgchSuZDq"
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
