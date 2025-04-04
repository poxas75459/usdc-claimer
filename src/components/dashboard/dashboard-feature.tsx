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
    "3iA6DPCAhm1Q1WhEA8pxLhGSCyAC4mZYknvpwYwQQi1WGRqjFWeBZaYx2mmmGDRMPKENq2SeDRhPXRkArpxTxrCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rjPrhnZQofYMQfqiyZuk72LGXHgYin4ifnscBkcDsTvwem2n3Nod6U3Bnj2PbW9f2ZLQ2djQukig2cvJwMMY5Ud",
  "key1": "2jsivFoPV3eP9XZyzHgk3PnyTKNS31vjKkCjQd35JNpBLLQe5b7Ue56HhR1iSzzVraDBp8fGQ76EkV3Q5Q8aBfme",
  "key2": "3JnrUoD8Jid7jvqXJNoo6ZUZXpDMj9rK4TfX6KrqjBMWXGzFDUT7jfhDSyRz3vgjCPXUVLtwNc6q58n9paH9sMav",
  "key3": "2PeYSR8snD5Uto76PxQCxY4JBfWBacYRPCqynz7CFkSpWuMWdgeiiTzozxMZbnKtY7UpoS3HVr46ij3z2JCrdjdQ",
  "key4": "5kcKE3WC25NqEgdEE4NT7BRnu6rahwZBR1fn178kTaDC1bRsJUewMzkN7wdzoUiqauGvgHDA8YfchwXQgeD4T4fR",
  "key5": "5Qppd6sv7M23siyS21h9DxV8TH8hfWNKQNEhpCQDqcuZu5QAqUPRcseUKqseG8AcEFNWDbVHGe5nx8C2JYtbZwkB",
  "key6": "3HQK91A2LbsRdto4Uz4UiL52dE4pTBFehivijXYCzrZfZFpSswx9hY2QT2QiKkuEcuG3ndGJxiPZNo85g4xfvpu1",
  "key7": "5WsBVCqbzuKFGBLs29wd2fPS7DCM8WBsrNHp8Mm8WSs1VZjGbP3pWqsjShFHw8N7dS5rdkuvxBRHF7wsB7aYSUza",
  "key8": "5REeS8q4ZD6ZndLAVUsQ2jhwXPK81q77ycAHvAuqdR8x2wSBXVxU2huFXkgNBKBR8Lzdvad2AU2K6tVXL3jJYa2d",
  "key9": "2TMgrXiMCfWYVsYLnSVjjmcrMHdX7cm6n8W3tsaJESmsHBXxHWpqepYkYEM7dvifwKaxE3wqTtUhTV8EWUZsBgMt",
  "key10": "5ZMLkfm9W3KRmWYafAPfGF6a5PXsq3URqFKacTCwTPBFDZsd8HqeSsmAokXLGEbfoZkp3ESrCcGBq8YTa2g1Jo86",
  "key11": "4avXVt6VvL3kRCLZnqVxJaG4MxT1toL8aKKRq1dy8JgFVvu4rN8uQcfL2gRSLZa94qbawLhYNj5pUdraSuixFhm2",
  "key12": "4XH8NoVxFyLqP99avBfNoWYhR7eBpzGJFmP6R91GzhnXQJHzx3nBPwg648VhpQZx2QohN2TfcHK9kM3sxcj8vraH",
  "key13": "2qvMzdqtdnZZ9UsLymHHRuTMCpj1Mis2zHhVWKv6AeD2WZcWS2H9bK9UdVpjTH5JRYX1r3BnSQaBahhpdY86tz1G",
  "key14": "2wgJuPbM3ekbMyXe3gyGafTb3adfUHhPJ9fpTBVY7t4MBT169NPBDMKWnLKutYkxZHFwP3ydJwYWj1SjHpuhXdro",
  "key15": "46TyZaTbHAkqiZReckeReHYaVh2aJMPDhpbjGSZgdw4fCTHwAuJLL2YyCB6pWijy4kohymYteKKhLfqTaiWSLrJN",
  "key16": "2FZK4cDf4LndUeaaY2pYSsYoXC1RdMxXkuCiihtPkS8ztcprsZo4QyLan3G3ZUtN5ThwZ9zB334NKWsTVsAB6Fmu",
  "key17": "33F6hoYR1cNEdv1keWveY8uM48EugurUEHRBxgWLiV7ipf836V4eoDALgr9Tk7UPyXRN9nSkjB23C3Cbqq7gKKER",
  "key18": "GD8dgDnaJMRsWKyzavzqP7RjhQf48pf3ZbejWAk8beFBVjPyzUi6qTFPAiwhMYeAfUmKLg9AAL27ww8WsUfoS8J",
  "key19": "4SmZd9a8LHnbv4BMqTAUVAT1nUf7MEWvJHhkNy6b6FDXo4qNZPyhDCwNcro2c2cBZTK7DeMqGBXsZgLtP4kYUQiV",
  "key20": "5TJPh83Qva2dmj8juJTzokm2H47djzUE6ZNZbbLX1BU68cmfseHWUY9rDG59zjiDEdheNArtSYdzGqYrfuUruh8r",
  "key21": "5MjZKmHZaDY3Ru8TbTrUBhhbudS8sepN5SREUs84yEjGXkj22yrT7hY1Hqn2jgkUXyzbWLDmmj2wY5jHfpe1HpaY",
  "key22": "4acZSsytWN9te6HWsrm6jQQ1pCvrznvMaJ93EZkirxRmPcYVyBjPGpy3phfSnh6tzpq1kFq8NRQXURdQwmak7Zws",
  "key23": "2oN3eQfhrTKeMg113MTFPzfFZZXtANaG6bnhNizm9RhQeUJfwC5nxTE6dNgc2HWuGP1T6Yf19J8XuwSUMt4C8rWb",
  "key24": "VWfV7JSHAJqCPFfHUwWu5ASicyNqcna8hSaxivXagaKEGmpnARmHskM4a9e5kvFtzKj8ADinnYBkfEDmMcB9WZB",
  "key25": "4uoYbcyiuHwdhaDTqD9MkBPztv9N9dm8EVijReGPkDpubvGmFxi89nLD9vKnBqZmWB6atr6udXkoAMK3x7F8812x",
  "key26": "42xW2T1P8iTVHHdpFsF5efSQphCkan1DXrkLh3KWYMJWCTqedezYjH3sFus1qwZRrFaxmx29Spc36F38SaDrzH2D",
  "key27": "3wGDUR4EdX92B2H3o974Y84nEKAXUYYiUjVazNKjsad1AthUfKzdqwip79mySwoqLPXAnPNjWu6aVdPk2CaqJg9d",
  "key28": "3ocvuQe8CQn2fgJTkNXEGkaaW9zdXeSyWDjdEdzHCvWna1SNzRcGutAktPd1zpxvtZcTHvJWdFUjQxLvDT3z1pLk"
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
