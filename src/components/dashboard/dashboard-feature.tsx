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
    "2yJAgyuYZrsvvjpBXRdPhgxyVaSdibBVTAdhshryEbM1CinHBfF4RFFCEQwhUP6DzWLY7weghMPgP8ezPkrX1DhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsRqrKnp34Mi8wgwq1nGpU8zVGmiGxFgk2eCuueE44iUxEUvsDw9yNQCJ3yJnHCk4YC8Z5tzbzPfHyx5Wx8fwh3",
  "key1": "3huizoNF9qA6JHcdHLTxm5JKXk2Tj8tMAnipzqQQHMR6jLevneTfTgpnsf1fYoNo6ZXNwxwvriNSidPEc1uPKxiC",
  "key2": "41au7khkoPyvLQ8yK9Sr4iRkwVUTeU9sXRPkpdJdc4q4uS6faAsAviZBXRTH1LonsAw2ET5CUW3Wv7zUVNWXtpan",
  "key3": "4NdGfEb2WUu3motb7FvAV1e7XTrbbsp8Ahqa2Yx7hH3JLG8UbQqCt7UrNG9dmeDX8kVeoBAHqgKoKucQkvoQrwFm",
  "key4": "4dNQCEmmqajxm3nC85i2SGXAHseJ9NnKBBnpnErcCJ8m5aDuNnVn6BZoNx2zYa4qVkkZNVztPX7aMw5JrpozUB5R",
  "key5": "2DWQEC73LfVHM2dTRPNdsjBv3v8MMd3kgXntgRqHF5PMGvQy36a1V3vj2Fa7yZhDichHRvveAwL9w3uCpZvshsGN",
  "key6": "xUcBACx9ySBCH3STHpqhjnZwF27DwWorCwhD659hKxRz1krXf1TvgqUSMYTtbQ1bEzCdegQr8PaMcFKUGTEzMHb",
  "key7": "3yyKmLvak8TP5y5AuCSuR8GMsn7ebYMqgbEcTjHLcWgidNeYzyifHY6A3yCwXoUNXBRxGC6RoqEijpUWHJA9mKAC",
  "key8": "G8qCuwzb3TTpR2SmBvAz7qLrue6z3MAeSutykcBcwRaKWRs8mujie9TpEHHdDatodxD5XhXA914XxQo9R8L3qB2",
  "key9": "xX8Kxa8YePZPTfnRXMqJeGbZfGy3KjujLf2LzLkNg739x7VjCAXtLMDfkPx6hzcqr4GoHwEHq87Qt6Srhpi7gC4",
  "key10": "4XAp5c7YqAAfuaB9aDTfdU2wTnsptjUdh1hWwZGLmhpR6we7tGzi4dyBzeVYK1KZ8KaAVV7rQDEpSxEWPzh3bVFG",
  "key11": "9p6SDhEBqixZE13FXsJ6ueKZmVVDrMBR7GCkaVN3twPLLCq1VVT6RdesVcCtEUen2n5vRYLVGehATVhDHyGb6Cu",
  "key12": "5kQucQv6Td2mqraPE4hfDdZ3cNqSRkPhY9eHcqFxzxWmoCgJBwCGAhi9nfcCTonUANEhMEo9AK8DvnH2Y2PUjxfe",
  "key13": "5qxfrsxcgHzyBRuBu7KsLXSkkZDpENqTMZzXi5ZcDTMnjpc7Wc6d73PHzdoFfUizWTrSFUcB7wJsVuM2Tqjphcip",
  "key14": "ZUe1XmbpXjczeBVz97kKQ3BqC2J5XNxmTqhPSVcXEC9QfFKHmp6Fkd7WhnXDsmuyEhsoNQ8AP6co8VT1f5VwVR3",
  "key15": "61iksttofowZfgQWgTm9tT8nTG5MQt862eMuQwNWuMTk373c9CEnYVaynXwKscVcSRoge33MSs4dHkJcJ74MQRqN",
  "key16": "MANTy3jbXWLv5qb1XxN3HNiTeN7aKMzHA1XyWPZTZr2vXqE9TrB83iDUDD5KrCA5LfDa1RofjuL5RfoibS9piKM",
  "key17": "mrhWoZMXSiiZmSWLX5PEWjUpn189AMXiU8x153Jx6hc76YvGKwK8AEzci96mub754B3eFjcLpkoibTYLGeLnRHC",
  "key18": "tiYWFg2yEHnZKMS96R9hujPVDZ8xMHrjCxi9bB9pfTB1quJy29TfvcbRePuRNqnwwCPdrBbg4F7yPr1q8o4vhRR",
  "key19": "4DgiRHPAY1d5NuWfsvYAN4JCWfFpt77U7iGrAp1JCc7JCaYQ7aYMQgYPbDqM4RoWR6jC9mFvoKxZCd3UpRjHXXgh",
  "key20": "42oZEiWMh1bXy5WL3EgToygjkM2eURp6W21BLANFM6wDspVKwjBCWYq8N7FSAcuhJiMbMmjHEbNsyVoEfKuZB8T4",
  "key21": "5YwRL9yJEnJpxCFfYEG2wkqbg1QjBp9w8Smykh9xwwrQKWfBaMtBsQhHaTXhEUUhgxw8CS17P6cGYPmgZaB2rTjk",
  "key22": "5akGBhB991xJKGSh2TsTjsW7JKezfkbTXtunPw4kFc3cFmJ3S1xzGL2pb1f5ZG8YhnWt4ZxjQoBJxb2JivpRMJNe",
  "key23": "2Cop9ZfbvQJmvoESCDBYW67rnjwbL8FVbSiceAreLL9eNbmQgXvEgW9KPmQsQVxLCDcSDdQYXATB6rFWnkNUy9ok",
  "key24": "5ut4e68QMitjA6V2GavqQfjf8CHAZCUTDkjifhAbkU3MU46etuG4u5GY91Zhad14pmLePnVzGENipzYht2EXRHZ8",
  "key25": "4cPHmpWfBwRDf2USXNC2i3wm7sXpY5rvnrog9sEKL4ngWRfwvBPxuFdNrnvpHFt9jndQTypZJKj1QsCZtsYQMW2X",
  "key26": "4QErByPXW5KPJ6cXgYqVSPMciqkPL3BfXYZ6kB6EC7a7vzpww8BUiFtsXSXcwSxzTnuJJqVcg1zgbMtPdybP1wfq",
  "key27": "3aa9bYZnKgvVmLSyQxRVTh9HEgFhSuqZYKPhbfSKvHLTYGE9LvqXWazWuFckVwNC4E5xCHRNYYg3DJeXmUMM3Bex",
  "key28": "5EUtBUQKTTi84tFRgNRNkzCZs8xqKzBzmJrJRKtbrRGhjVfYPwfAwgay1xYH77QYwkp6TWsq7qxX8sbpHbizbZU5",
  "key29": "2ZrjdMzDYoi9MvBT3pMVqWccBJxwyzmG3YaNRYjuz1PamE1zRgMZUd9BcdzeVBDjEyvsw1rxwiVWURp5A35Dg33X"
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
