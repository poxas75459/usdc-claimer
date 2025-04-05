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
    "4KGT2bFAMTawSCqK7Uqi2tawLkiZzdQYR1cuwyoBZ9JqnEYTD4gS8CeZAxAPNE4tFHaBpy4y6phYQfm1ySWkt5BG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcyX4EhxR5HT959zZSja6KDBg8BMDqUvgtjKCb3RRSeYy5wMH8zpwoF7J6sX1XJRj5BTjeH3KQhpv2hchCtjs85",
  "key1": "2J2WscQaFm8Qfrx84o8hdgERJVz2nYFU2SScdjvxx8P7n626eeTrb9k7evJe8yRvuarBozyWBxoAiaLjtvRQNq8C",
  "key2": "uzfLiPyS1EPNQHiar9rjgp15M5DNVqqAeX2sxKyUF2KGgXKHRNRtZy4fiXzmRqQAzkpkSDsoSh9ZtG4axpVtSYK",
  "key3": "3QPGeKyHkYZnRzWC3wEKJLrZrhQ4QksFEmgaZ6fCEziarabJn5bR8Lp1HLCP2BzQEgi8h4QgK7DY9CwBmLCpUdBk",
  "key4": "YcvjnECG1G1kw6TnBEo1kMxwnhMAVRh3gugauaEXUXXjkgCm1surn5dgtJzu4sUkudDSsNDnCqthLSbCHh1kgbK",
  "key5": "ZYKsTGGgWLuZZ16oQ1Xf1VV2HJSXK3L4x7bPZBDTvegSH5iNswjGiAhTm5ic9TebnmdWzKCJRtX8mvR8Z1K7tzq",
  "key6": "dmrhawzpsrzD9gLTqfadXHhTexuXsMtqe16tSarSxJ1tvkynMkAkxUGXYsBJKSEPEV79LZHDW2E9zzyZKzUeYgQ",
  "key7": "2qRouivRXHSruBzPfLoYHiYAXeHxGr2nSJynzwbC3Wdrm7Zue7mNTdy15AvSzDCpd7i2ZKkMKdRRNTvV3j1Q3fbV",
  "key8": "3di9rZYHYGX444gtNCYZwkUKqvyZ8pt3R2dLduJX2Sm2ZSZ2j7eeTMJyMHUFV6Kv7Kt9qL17FeUN3QmvC8kRJUtt",
  "key9": "52Ba3LmBV69tDjPsWyGvvJSmgDppUfYD99cjzLJGiRaBvV55HKcLjaxuEC3j7bVCw6xWG9xE4skfHgXJGVpufTJf",
  "key10": "3QTNhcYehs6BXira7ykhhRAKrkvMpZ8zSj2mWMFsgSX4NtHgtUJkn5XZNo2iDinFVD4cgLfzpj1vgeV9rwXumDqx",
  "key11": "59KvT1eVRKCzYzxDh8B54Bxvu6ExpDDvhW7QQMGvyCfoJkNaWBWEyJ5ADMJpq5rUmEu8qSVwAEBfBde6WrYKxDa4",
  "key12": "21uqaDk7mvFMzRsmAdvPk3BcWaXSzL9KjfPinwjQPegyi1ipykvAmay9unvcCe2oiN2JUy5fEvfmZyyYq1qxpdNZ",
  "key13": "3hZ857HSBV92qrMZDbbik2hSzU2mQk5cLZ3s8oWQf9v5JhhXZ3CRiaBonp93uqcw49pk9nHA1JRek2HtS5R377xW",
  "key14": "415Gug9KiVRDVUAyJD9zoeNB9AZCthsudxfaUtKxwK4QeJfgzXo9cjiGks3w8ur1HvpjwMf2YaebwDyopyEQhRz",
  "key15": "668Qt3Zn3LkrvFVRpvv8jxmo1JDHVdKuie7Hx9PjT5SSXPbjKmLjbdX5PJ9fTGAwEr5sp65ayrnDT8bmq1y9VHaK",
  "key16": "qYACMHNbf9nMapKhVKA4KKDPyu89CRAxn8hsygGQdLqSEc1dSHXcQfc4F6ogS44smqtivZrahoXyyNEeLQvB7Qe",
  "key17": "3djNcanm6kkpFhgNHoiWBDTjVPjFRpXEr8GSwxhrwrpaf9No1ia79B8nJazGiW6cVZbJ1WT6yzCwa7v7tYQ8RutV",
  "key18": "28cyKh2qjF7YNEZkeDCQq96AwGDG4RFgoB5CoUHktrVZs7q55zJ6U6dUL9t6VpJTyLnVBG9Rg64suZB75MEJ7uNn",
  "key19": "5LaEV3qK93BzHvo69R9iYAkYu1uNX2tMbzfuHsQQ4rnvwQe7wLbBz58W9Sg6RktZ9iXSfD1YPTpWYeGQUQ8PhQin",
  "key20": "2iGcKYtHTgf5EvKjouJk4dszWb951TK29K2cgGgajeeAdkUpDLnGEQChMdVdwFPTGad4FxguQyEYG55jrcgV5UJb",
  "key21": "4P3JTiMshGJUnnyKsmder2J5E9YETaeTe685zgZ8MiPLBFFREYmYCzk92yzEm2ShFaPP3RSzmaxdRM3KLTYARdUi",
  "key22": "mqC9QNYZyS7LBKB4bLAzvNmzj18YjVeu3iyd6bTzTBCPW8aWqcNbf7CTxYoLSmiWk7X8Mz7USAfx73m9XbBUnPq",
  "key23": "4RJkK7bSXQkLqqfSCsbpRoeCT1YaquXcraCF8hRFxXJMwRW1sVGpwbPrURrkvYbzznwA6DxsXev9gPhbpHsHSbXY",
  "key24": "3gVE7vQ6ignLUWab751x6BALMYFYCo11Xjrc4mznGLR4Ft71tGsvfRTriBmzYufVeXzBRuXyjDtMWLJEYXiDvgEy",
  "key25": "5ETzubH7ZbcY6DnHfweQHRSLEgXYRNYCVYn7ntPeeJMZGkkzkGMsxUnQPz69WUFXaY85TGkr3UZP5MPSMfHAGzRo",
  "key26": "3yPtt6kUE5m1HfEPNtk2jf3VzicrMpo6ScTPETLneASqkwuzVPxz1CiLSdCZR6Y9zrbQwmZS7v32eBwSvgRPvewL",
  "key27": "2KAzJ2CpdkB9Nk6qw75jf5nG5FQLqGFN1559EDtsXqhu4rEFu7u4kcFq9hLGtS8nLMYgjFFEoJR8QiYVHtvWeKuk",
  "key28": "4gfHXc1k8eEH1Rur1UAaJpsbY3HndnbB9WPKBfD7GFmX6haTPtmbJq5uwpFphJspr68rfPAM4dnNbC8tgW3ABaJC",
  "key29": "4Gk9THi8oXJ16dAyETiumA9iFHbtyRkTaxVGaHdg2q31Y9nvkGiJv2snGLRhVCLXViAVQAXitzasSNKuL69kzWQ9",
  "key30": "5EZ58UqWcpG9cZxy7i83XmdTWDYmHzKrngjdgtNe8vdHUWR83YTnPX66JWMHdS79QUmjZLbxt97f9ctaxcs6tMD7",
  "key31": "638diJHbrZqzfaQMR1VpwKMLvytDD7wj6ZYdix1CkkXR6BtG65NqffKxuABSoyYPT2rW1K9StENCbu8BSeXRowrC",
  "key32": "b6dD884C4E3AAHeU4FvYRS9gGkrtVkxK9GcyVdw5b3eRpXFCCGFyAgMkGc4ftjif8WCPuw739ckPmJXY3UPKmdm",
  "key33": "2nzaT3uotAPLUnQST4ZWbFHc227mvoHrP6p7YDHJ1a1SAnjDaTXVRPCdv4bhHZjCdGdjcxnUzztuZ8SbSiEhY5H8",
  "key34": "2UG2Apdr7uUhXQFz6vGJToQohRNvRFQd2G72ueufsmnvBGXHjLe9sryYrksDBFhjZUkBpgmJtnEEUmwZmfdAyDtG",
  "key35": "2FkgdXwSruqUcZTivwQzDZFCpQi4T5oGoi2VE3KMSKUtT4amKigukH1voSK1fuaGi5bs7XoJnr4BaSmM5e6fHMs"
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
