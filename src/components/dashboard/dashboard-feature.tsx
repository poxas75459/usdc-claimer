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
    "3dwayK6L6raRkD46SDxyLTsCW8WzvRGkxP2swPiWtFtB9HyMcanz3w6baFfKbhkko6adajedhTHvQ5MomyC7CS3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wj4p8cuDa1cFcY3EMmNjEYYS6JwHZSYa42BVo9FZeLN6ZhTM9SU1H8hEWYt3QRS3zuytmYPkPRfcNS5vrzEjMqr",
  "key1": "gAT4gfdqmbPCpjgbu6p51o2dgo8X42xrBHEGL8yZZhYzEtLTZSzkcovfQ39JrVJ4Zf95c8fXUnu2r8M6hXwiDfg",
  "key2": "55BYMYEbgjHCMTaKxsRpjD4rVzkVAyeMEcbY18Ln6udK3fY4QgJLDHm64tZYJW34wTjzuAZhipXE9MHX4tn8ztrB",
  "key3": "26V4wVsSFVCCUANbnEU2TRvw7zD93C34KCKzEPdRmZEFjpEeQmacKf8cnBZbyHsLHX9CD6s9y7qTp98FYppH5SDs",
  "key4": "4GzyWjMD3swFHqbqkCF7iRB7YT7PDE84Q82ycGabfnv7d6ZKWid7N8Tj8m2bea86qU6epLoEEk2FMuT8X3x1ynNJ",
  "key5": "2YCspaQEe32R2CQBfot26sMztFWJKFt2W6AFaZxK7BcJbK8f5rUAUb6Ug9Kr26aRHpYbARCwMJaX2M4HT35DS6L2",
  "key6": "3MJCuhumL9KnDMJNsUX1BHVGiv8LqAALMC9DAW5HkavcJHoEhnFhBtE4t2EN7rjXJM5CVySwJFW9w58kJGBy6Syo",
  "key7": "33obo4JwnSDGCxThx4RbEJEvA1dzfcFGPVEapgXUtPnccMscrDmqnhagEM7PQCWe1Ca3pQegyFMi4GKY1EdvT5RG",
  "key8": "5dZHLwWeSAssTuzrd7o1ovHyq8yfQ54PJcpt63fU7EVjFMMEiG6Kv5p82tYJRDsUfCtcX2X1pWzMkwirVXSgwU7p",
  "key9": "2J5NaYBVqU3TieiwpyjWcZhunsckBeP3yuTmSsWQ27QLEHEb2Spd5V4YmnjKgrJTN6N4esR3ZekDNJvqYJipbQeq",
  "key10": "39x81UWycprDrQkf8qXkFJRSyaKoJB9mdYWLrLbJPr7gx3EJt1FQ3RcCNbSZHe26h9vuc7dks6XDBTwP34utsKBu",
  "key11": "3zXRyJFbJGietYqoCxLsC2XvBVFEbj7UZZN5AcbrBVY6CzG1ViASSDYPcZrxu48US3EECbECMuHi1jwNFh6UYpaA",
  "key12": "Y4KPYhbdiZtuF9itiGBUz2jzfyNSc4NzHxGVhfa3hKWD1N4hUtPvHjosJfCzXrJd8Y7EMamjL1fh5skxbERDWzH",
  "key13": "hov2hzEjAuK4PJXayN4XNTPrZEuGY8UELcbdb5FR7JbYJkusQZXDrebEDaHUiMi5L6377ZJir2AgGp2cpSqTy85",
  "key14": "3oTaJNhAWbu8mPRoQoNuo4v5nkgm7t37gPPHZLAoEQVUcSDQVXPm3m69H3iamR6DB5NCt7vXb5gHrXmDYPBNHFFG",
  "key15": "3ZND3CHq4hnqGnwpYZv9oywdfjxNfaFAZ4ADhTjC91RTXTfx9y8xn2UxHqtrwUbhKQtMvhR7j1ujAqY4hgHKyuPL",
  "key16": "47Q7rSoeQG4PiFXwWU7ABR2FEvMP9KZk1xsj3UaFCCdzWyPrZu9esy3Px8WS7DnBnKHfaQsmjmHGkkMg3GytLRBU",
  "key17": "52bZW2N2MkwY11MUcqkFUuWZYmitdLeQUMEFR5tGUVq8E46RYsuMauXK9Rq3zNekpYTRdaFo7wHGbkSMzvyS9N9Q",
  "key18": "mzFKJqWuWUNsJ4ghoj4aAJ5mPJ9Lc8ZoxVWdCsZtt2t1bbSCS6C95x7PGY4Giwmt6h2KnAXNztUBmRAzPAj9Px6",
  "key19": "HJ7LQApjPhN4HYggeuUWpPSBj2KHm3xvnWgkrvp21k4ZiEfQkRyU5FuNLFnny43mCo9mekTCCskSnG9HcGqJPfY",
  "key20": "3wHEEfcr2osBSgLU2Un8J3rS4rZq1h4Qxzu1aageFehwdFNAD7wzy4q77yAyVSBcZXeNYPpoyzZhR9VZ3iJNDuiZ",
  "key21": "3Pw7zvkNfUmxQBsrTY87JjxH1Ct7C1roQuBDestSZ2ZF9F7ngMWJ8RwstLkHd4TxaahPEcgTjAAqVATHp4V5GuKa",
  "key22": "5DC4NLtPDkCYHvCucDwBuhNAhmgLudCJ4UJGKUWkWzK3EvLmcJ3PpBSt17jZjBe3NTTGqsxGL4bAwrEw2cAJ98M6",
  "key23": "2mCXbatKXyCXVtvox7j5Yjm3dmPmXy34KNnKnTviKBxg3ntwY2Zp1vjrsJimmWramMtXrWfNtBRnz8kCY3ChFsCK",
  "key24": "2fXxpxiyEofpKUoPA6XPnRYyR5humeLKJkSUJtDod3AyR3AHVBczMdt1Vzeafv2BWrHXeofX9cxoZaVD4L2Qb4gW",
  "key25": "5NbjHDZw3nphQryJCnBZ7mso9FqFhKnj43fhxeKhPsyj196v71Mh1VJh8tUDsKge37U8HsQUBmdxVwNcGoWXvwKk",
  "key26": "33hVkMxgqCx4E3tFyVgJdmLFX1mESckrhCppvRpzP5qUYgD9yCGVsiXnZbwfBou9LMYSgqYoFFhjKWWxLXLxoizC",
  "key27": "jZqzWMHubrw7cijaiCTV91S2KLfLsWE1QyrBE8ttkqRMjAD5A1zHqUhTkfAkiHUYz9RYgPNnmkRNbY4VeHo8JyY",
  "key28": "5z31rXxM8JmkVSC6Z32Jw8kVBWgJEuajxxiitJnvuqnVUdxLJuRnBXZJHSG4HZHeXGza5Br78ui99b5bzD4EmMZ9"
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
