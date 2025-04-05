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
    "3HtnHpUp4EoisKE2NXfczzVd2wkWzDpgVENX71LhdoP9dy4Fu3BvdNRPDASntd3EUrJZc99jh4ucJZRWQtbjp7dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pM2rvHRKu146tgbPe4Tv9mcTZsh5z7FQTfC7zeKsvg1aJe36JJ3Uo7ACKkk1mLFSPKH6YX28tzpEgvD24nuWuHN",
  "key1": "4uKwe7swAhL53ocfHdRNNvPubn61xNa7yJfg92CzoYsz4NmtpjHgRsGXxeTw1JpWazfNsCfaw9YpPfAzgtZpVZhc",
  "key2": "3HdtXGHowudy27Du8g8NNGPp7tv7KwPyRxP63St5tXovsALtGfaQ2x3h3NkWUFeR9kynkKpyBWzBomJpLmZfPf7B",
  "key3": "34nQKTYA8M75gXfHPmYhBouAiuRMBp7SG4XX4GciLWdwMsvEiPyWR1NTGWvumjG3GbWifsvydPSZYAUqs3Ephjnu",
  "key4": "JCLvRT9euecDHdc9aujA87psmtA6dS8ejN2Jxseb7xwg3SRXyVRxUkhGpqoXy56ntCnCvvaQGjsnLkofGPa3tY7",
  "key5": "3z3KJHb5rakMJxNVLw2AtWXwWmsNG36aCYAAhJw6xqtDQY2sBJ1oQrX15FYZfT1rUdzXwcFq3JBpcFz28Qqd6aoB",
  "key6": "5VgadZ6d7tDkqCW3ruM6Hf3Tz572KhWK9fZiZn8GuBiyi6iHqDBQTuafxLA9rRYUJCN37WVPYczHS572aw8QgGMf",
  "key7": "5YgWfntizwqdZe5AsXNGeBHMgACCWR5awprrMwZzoJKv3pC9Vxw5G3eMjFXYm7wr2imqcQJBgC8aZbszEXULuajj",
  "key8": "3gDbmi7GRQwmfU9Yva8cNK1pd8vzt6KQopjCHzHrXa9WJbcn67rAzAwoeJEX5dAxHpTfXr4mW9fHL64XKk2EaFKW",
  "key9": "WBxWc1KmqLv95DTrCfrGo4SnTe3sZAVZScmrqLDoGffBxwAGG1aApqB77q9iYme8UXvc7KJt8B99Lkn2d3wYCE3",
  "key10": "5TFRkMfJhVynNK7pm1hh97fSmABCJaYPHmZo22fHjPifQsx36YUpUcky4Zk3i3nDBoN5CWdfEZWytRZk7oSRvdtQ",
  "key11": "31GB7EjaCRKnzdrF73qVt9VehTvXXQQSq3RYL694WK1sfECQ3Nw5BH6xKsm8rsAbu6gRSnW5dac2PygxSVMUvqCm",
  "key12": "ziRSEhBa3XFDFSZw361Fb3rqmpL1qpeP2F18SwTyPGuMLRRaSMUzsRUmdunoZ2QSBEeN3E1HQDZ5R3pdPraFjHS",
  "key13": "2XGafTQmjMSnB8hF8TUf21mNB9ZF58Ld7x2P3VbyRWpb3Nxome9XNk3b34Sv8zpY3jshdNNtHi2bXkGeHAsy8JuN",
  "key14": "5SkzkLxfJEwmmqsVAmdJM6FwQVow7y4rYfATHuwwDxuZF3rq2Qh55DMhkoGuH5FGQcnjtb5Nsx66bCdfqR43ceD7",
  "key15": "556g3diWY97ZonUnxQ8gg8MPAykNaywLUBNzzCowcXkpb31o4hz8aXdUqmSfd3eayLeyKVM3yS3Ss2GtUA12uKqQ",
  "key16": "2gVs4toDWYaT1Aafxm7N4YTmgAg4t5ms5R6ksDnRVJzbbynUBVy1KycFEY9uZ5YzvqCvRGYKUyqtaTPAk38JZvRW",
  "key17": "ZVW2hsuXeqbbtx2QY8xXyH1KeoqgPtfGdUruNoUash4A8tTiEs3tU38H6hkDj42bQR6yVgrijqzywAxrrkpwZsj",
  "key18": "2ykuLUVkXxsFJmN6nv3gpU9zXWC3ynaCce6yUPA76xVyV4zrdSwmQNr6pNaXcww3PQGzaA36HGMPfjqVC4KTCYqJ",
  "key19": "xWJk659XurMMkrsFB8H58By55az1DYBi76fii3zQhxXLNKnxz1jo85bpJYuhAQhxjnj9kCsoWLrUA7jGUAjpS56",
  "key20": "49xGmj2nKbtAB73sskWDGDzX7tg7KW4JLAis1RYZL67DVfyZuCeGZGYfZEmWUZoo5N2of5Zr7GKjza4URon66Yej",
  "key21": "3VJg9Vq5AfNxiUhsxvL8Pw9X6owM4kKk8wmvv22bRuqhuc9nrAYe9wRbdLrhUznrqDvRANe4bxnoDZZZrXDfChfV",
  "key22": "3VTgtg4sPDn7ULTLUZJhBo9VfDRh5p7Hx5HCc8xHBr5P9QgQ6oQu4V2gu4qmYcfmLYqq6LViwPCk6LdRuUUhTGsu",
  "key23": "2rnU27jWq6uMEAZSEXRb7hXfwh6Rp1eMYWYQfsKo2xPQYJzpmkkGNZPpm32L4sAhDMiXBFqdcGVUpwAayRAtmPpc",
  "key24": "5mwdiweFn3YirzDX1PetkCCmNev3irStPKupfqRCqFX3TZuV5h5EDVCUuBFYgNXgZ5imeWBU3dxbJ33btUfKysUa",
  "key25": "2cvxYRnopPJiB7mTa6Ewjb77fym99yQKzAcciNSvwSZq9gy1fRM8DtCLXGifhzxGitjQ7D3qeUEwuYYuwqNBGa2m",
  "key26": "34F1Yqiq2gcrqBqNihHGa9NTBdop84sDPqSFjmyP3wW1tDbHWSZyh4fNmwWTiA7oQyQAkhyKXKW1sXA1ZV7QsYn2",
  "key27": "2vj3keYTeCQDwAJSJEUdTLnvYx22SnBFwQt38f7nW8vZu1c3FUSh7TVLPwbkuZtcjbPMYKXcUbxxu3KwESfCSgh2",
  "key28": "3Yoeq24vBcD6R2bFnmKVAzNRjEqRauoB72DYwCsW4Ug14aZmJZD68XUYeM8u6hSugVjyyVCS1poWsaCEcgLVWYEb",
  "key29": "q355TxgNa69jwVUtvRy1xRRg2Ybu4cHvXYgreNyW4gLxpeDvLyUFiohuYQJrUnDmBRqx5qHpJU5x8vuye7aaVF1",
  "key30": "5XB3wk3tswv7fJXs86MyGpL52bJpp2WTPrNdbXx7MmcLSKLkMuaxu6TAaBuCxV16FpbccnmnFwG6FXceR9SjkEvW",
  "key31": "5kpeiPskKPBt55vZMmLmfK97xC2c3RfxsCFAWwLzyQZuqJimQVfoFxcedxNfZdB24nAwiLsLNV24kiawH3dTekJi",
  "key32": "3J8GSrtZm9tH2Nm2voUT9LmGf9NFkUujErnbX4qqKUEMqx4v26f8oLJqJttTJPcXu6Bxcz2t4tSdfdrF9iaDbiCW",
  "key33": "2AZqkzrjSmtpwab1yAXj54uxxYyMzsPTBkCKr3VY6SwysEcevpkGTQm9oHy3quQevyFRWFQcEuUvTeGnHEzSi3nZ",
  "key34": "38WaQSsuitWL8p4bSZFVL5byBXibPZAqk57wtb9GzMDYBAKVF8L9jjnvFeXm6UCr1PKDFXoTFTaCGpgy2vir9W6G"
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
