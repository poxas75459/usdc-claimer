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
    "2QN1mkM2gjk1f1EN7uh7N2UC5ZQ9CJ9XGUYiNzUisDoSWH1WRHqzZqC1XUAuGZhzQsQPrNYao17rmqUPL5ZbaTK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izenYTyVqTZZzxXbUnLSNLaSGX6EFhT8joMeaj2c9o3659jzoDjwcKzqiTrdjTigMMfbFTnQmYrRicDCjJfYvM",
  "key1": "4ATn4hRHmuQrMcozn9KtUoA7Embj5seQ4UoLmEpSYYpWkrVjWP9rswMiV8W9GBNEMcPqZJ3JAUp1qNuBKeqjFqMR",
  "key2": "3HeQhVeFMicta1XqZrgyxk9PGsjj5RbapN5RZQKusM7iN6keorXneb82ZE6jjFzeyCfmTjwkmf3BL2XReDbgTjGa",
  "key3": "3P1KzxSmGh4Gjny3w13hmtz5Zuq1WTG37xT3YFgvRgzvASNzcNqeqXmETmGDYBhujKK9JTr4f1s9kjXo3kYM5Rym",
  "key4": "5HzGWVDwU8gGHQyFPhP63Dsxcbq5J3qRSPKxtHqEzAVB93wTyy72JR9GoDFSohqgKDE4iHyeJ8unyFfNqHK1Hy1E",
  "key5": "4Toj9KXksPGoutD6mfSRx2EtzsvqStmsNrY8TqNMZyEE8yEc8tRLxXCNz1edUvrHCkAasobBfSjvNGJsPhBeyejT",
  "key6": "4tsBuqiqnQGzU8dMJnhnn3bh73x4Sg6gi2TRrmouaHgChsqzVAigqAKA7VC4jVPFMm6bJqF8TWcqiVriqAa88afX",
  "key7": "ohRXCbTcPpycX2FAQNWwknxkfk5uB3NUAdVjtfQcWSuj3ySM2rWBd5fGD6qoZfDLSpBSSG9kEnSKntPGh6J4Y7a",
  "key8": "4mAjq63Bfe7weRu54DR3svHJeVPDmJGCb3cHcwNLGjWhz2CFdNRCvmezR51Ze1YdKNxkz7sLeJKjBcPjqSY3bXy1",
  "key9": "UNy2WVp1E6vMBP1NTZJKRJ9t8BfDgmrcSFxCFA7qickRkhEW2aZqB794a5Ho29Q1WpUqhP8aAJardoMc1FUvRt5",
  "key10": "2Hqk22y1kLH4gNnU2nQNBBJcHZCxnyd1wv7Zvu5P7C2qzuY1AdCHYACAuJxE5AwQsdYJvrV7iCoN8YjoH5W5NqMA",
  "key11": "u9DSQazBwuvEkMWHj9LBhSaeXvfum4zSs6K7WaB9NPtvm4FCPtKG1ZApT4LSDe5MD6Dodpi92FKqjFCC2tNpRnT",
  "key12": "36uhfPRJH7sybSv319XzN1DWp8UErLGuvf92wLVChjXkSzFGYxw2B4hYnywrdD1N6gfAF14oV1MUc22sfkBWJ7hY",
  "key13": "396b7ZnQ2m1oJn8SiSwsT1UStPrFBppKu86bzU31bzDvbgjYYChG1dC7MjeMqs2kdNuintturmicMsUNq6u59FDL",
  "key14": "S46qY1M4pJWYc5P3rLdwUiJ6iEHEss676TtU9fAZg3NLMin88Jr8REqH6m7RCZ5Hv84rdywwB9bdPw6t9yjqjYr",
  "key15": "4YKvjeoDk9NwFsrsSXDuP99JcPYFz77ki4MWYHgi8HzfUt9EwVVqmRUnhb2ciDfbqks4UdATiMFQBSCqYtG4f2vb",
  "key16": "5F3HJZowCD9RG9opUvwPe9xvwSQJ33gqG7BZ3K4ubiaHJMCLRuvk5QZrsHDQsd78EwgszU3C9jvQqShMBFnLTwd5",
  "key17": "5zwbW3dSdcbyA1Sa5Rf2pWJrH6KhnexBiGnWq3XS3DW9WGnheK9ZDpgncN6rfsQj877wjrYVEDfYu7AgGEkNQTmf",
  "key18": "WRnwxHauSo956GSpwpUPK3PqtSH6QuEWDU8BtK1UxBrJkZ1Dmkg5MyaVojJe67WrSU61BBFaK1JqtvNijmPnMuX",
  "key19": "66H7eoSvj9wmJQBwtpYqytDtQQk93DFYgeg8VjHP3bdiHtCo6rPoksmgF8RkVQrztqM2G3s1WviXLYbpRuBTwofy",
  "key20": "5QAS41sG1fgw389TuGfkgeSucCfLxLT36V2tFbZJRHqjWzU3CoJwV7MQjMFMWsERZvTMCPZH7TWjV6KGTXBVLrSV",
  "key21": "5pXFmtEPybikN26obWtSYWR3nXQthcMA9E5WZ4CNpBYhtRzAnEqVPYYW9nK3MA3C2rM641RpjE7TXpu8Ph6rnKnf",
  "key22": "3h98ufYJ7VQv43Q8rJYp95GzBxoadr2TcsXv9Cdxf2H1LhswRaePNRnjQcbeLY31juhAYLGVJKAaJB2Ld5nVDfBi",
  "key23": "392T6RuZ8ZhtFiEGfFiZC8Zx2HjA1ii2wEfLuwJ4p3NPZG3xxg1dUStYx4kvfa3sdyrs8cAMvrpVSH5KeHj3ZNKR",
  "key24": "5bWc8rFz3ApYKmb5C66iPjyjRN6wWmfAaZy4ofwhpVj9f36Y2zFhMgcaepxBMTZMhHhWGwfmd8VD5r5VivSGJ8Q",
  "key25": "2Y21jgJXw2i6kigpDwF9MNaz7jwwvWMVf87qE13MJu8nw2G4K22xdYZ5tE8DkT4qWXGz98k1Gdh1Gz1JWGL8uqRs",
  "key26": "3DCKbXjeLAULhoPSB9h2r46WXC3b7xrybjgyETkiDTD3pWtDuLYTWPkKq8NSNgyTKuaFS8d5oC38EazeSS7P4wXn",
  "key27": "QRvgTTB4neY2NcMdxvBnYqWLpL7d2ZbX5KeL8JrGechVhcwNRtGQbf6kW7ti8czmvgSZicpvvXyq2f7DMAcJc1p",
  "key28": "sKH1Rof8ZCsa8bHFwwgGK5oQVwCRmyZceFxMAVGwyz6zri5nYmSHjUy3KJzzB9Umr5ZiMrnMyQEV9vrPPRT8W6Q",
  "key29": "2AMiZUTvy8FQTGY8ync5qPeutDLzLh2qh3VtVDxo3kCVSUJjYeRXcvqtfizzm9yW8THnA7cpPYdkuuciAkUozSkT",
  "key30": "4bAJiHQs2cxV1s5uDomBvhiKFGRYUW91mzqFEU6gjEdC3dAB2ZYCQpD1BtGXjYcuZ7wWYGhMgRNoCg48gXMLRrL5",
  "key31": "5KtGoAiH4wY3JQg2X6Ntho8GLciEzMDmC8ztpGiX2mEGSoaFmau2VPCCDq59EC9NJgECduLsCKTNohKqeUKTs73S",
  "key32": "44vjauBDCGsLGA4TkphSp2VfL6JKMCpxHHMcLdPg8xb1kgoVN6zQ33J7tnHdL8qeYVVXGmBNdp5jyFp5YCmd1u93",
  "key33": "35WL7s2TrMmpRPoFaswTUYvnNvw4woiw4XhybXBX6RKEyD3uAWdst6ntUjfGS1e9dyRRi75whTymeyyhetWeYU6w",
  "key34": "5c4pYGBLMbgNNRVf8PAbAxPRmcuDt2tREDHpSZxouRfemqCxGFZE2yZZhNA5g8Dg12tyRJBeqcFTms6unWEsYVhJ",
  "key35": "b5hqCvpAEt2a21qqv16y67yqxr9WiFnhFHnB2ytRjWAawmbbTFyiBrCVo17RJnwaREBnRu372oe6PmHbtJsmx9t",
  "key36": "51CeKromMgaQ2HUs1Rqbg2us11u5VmJYdsdptLCTDQD3d5Awo8KnB8MaE8jDC3EJXMnUw8YdrQN45d8Yer3QFadE",
  "key37": "5Bs6H148e6xHnmEqCkGQMr9VYsAurs1VADjkuxdV8po1dq2LX7SXB59PgDZuFRY61xw9orjD8Qn7andQCDQXDt6D"
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
