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
    "5BDb3oevxft9HHYQ3h15zXihaHPb4ku43TnHs3eMNkyEeCSFakjnP53mzfWwvGa41PAr7YLGwXRrRfhqQ7hDZfhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63sueDDtiKBGvCGrEAWdx8xxjxyCEU7mpuVuaFJNF2it7t4on2kHG9hEo3SYz4vdTNnmt5XiivRYa1ugBBSiRPXe",
  "key1": "8oo3aGdjAAJrSKEn53zHtWTNig328XZMynugJHVkpM9mM2yHaMpsDKb8mvTDYShYga17sqUyLtPMHs3Tk7V3sHP",
  "key2": "5usDW7FwUbztXMosnbNZzLu1Ag6yuJfk6ikSfdG421wz4yNhN2JkVH5cssqkK3xHms5o5QmJxgp36hZ9fheGc3Tt",
  "key3": "479q5nKeT4hRGtdNvFfuzYsEr7rG22vt3wZEoEXovWnW3iHqrbdVA1uAq3jDcHv5izuQPcJVWctScaJLcvMGCkWv",
  "key4": "36VeZtCjWyNYokWBNC8w81FKEmBJcnmqKQ3nfV5pvp7GfhkUCqSVQm8kBG1zPhndxKY2DN3sa4qTKuz48fSTCdzG",
  "key5": "3ZJP6bkwvZktSqYA9tv5U9EMyZBAmsDgzxapPfgKBCrLmdnp9ce5F1EtAoxrr2dL1jsgrrPKPHMb5RoeQHTRAEN1",
  "key6": "32Nsvk7LUyPRXeVJUobw2vVvQMpbMcvVYoqPXntZrQb8gSEmEGciBcJTPeWxySXRpEb3FDyb6VPkGXmywRAhcwuE",
  "key7": "5dTxSbQULRrxeeoSfLRiFgA3rG6Yww6ABi8sG4PRn7MNrcZJj4nBL6joaWqb77CQdrVRKEchAsgqrSBho2uAKdKG",
  "key8": "3w58SuszebYqqxv68axm8oKYmnTmJTaiJ4yyudmdMmXpiaQydkoLqXnhGdz77fDrL79VRzEkhqbwgTuvJY9B4pus",
  "key9": "2NGbL2c98bdtVctKhSH3rEE4eV2msQDMLmqhB4hj938DgDQr93KUEC9SGD7SZbUAt8QCR2FETFQn1LyLqVzTYhJJ",
  "key10": "56NLDDF7SFiMUSBmKLQikKtbLmJyz23pqbY5pEKko54vRRuAXQ31obzeTs8mYdYTPEPFRtjpPwvfMt6sqmVj2aEA",
  "key11": "5LS9JjhCp14PbMgeabjj87pN1boRsMUxncGrbwyU6X9JBzrn475gfUk5eXMmTGr5CCBhwea7rAPXUK32qSsf7Buu",
  "key12": "PNU51fA8goXyjwiEj8tP94nmw4yxe4jiFhP4kZ79UgJv1qbQ6tfmfGPEAL3nsqN21taBZio9wgLqsQAuCfQ8cJV",
  "key13": "3fprrcLhqhXpffzPeqKxzPRhg5m4oEb7c3MYzoYZ3thUET3MTpEHWpF45UNJqmnxRbTw6EkNcftcDbBv9yywSb7M",
  "key14": "2FZPbATe4eU5bokwgHgT1ZJdEPiF1ZgSGriFSgk48LHo7ikGs2BGhSReHpjNJ9txYowdfLaXKNSw6xXJ4Mog1Xch",
  "key15": "2xrMp6p4ZsmzTFSoLop9GbWvaQfD6FUhNJ17Yaf7xXjCPShK4GDVKVS3o7kLYM6iKgAdoXZY9nTMiLitBFNELU9G",
  "key16": "3XQapU5DFZAca3VZnF4uPixBArzDBTAuey1oKkZACB88U1esLV4fkr2Tu5XoCiAiLwYHZ9PDvwbM8kcVc1eHzc1E",
  "key17": "4nowtenofL1T3XQTL3pVNK3iZGDf5qAFuCKemrpHeNY4rxSMwL6XcXCx7yC5r4MjGEa9xuczusHQgSAywGzqg4u7",
  "key18": "5TXuViS1fP8n9ngEpFu7aCmz6Zx1WAz7Co94hWUsGipFVrpENAp1W6qhuhMj64phdLBy34w8YuiuA8RZ6YtqVDz8",
  "key19": "5j87Ytjc6zC9UsDqY2aQmpVbjk3GMnNh9ryqZJSPUGyyNQBr2agcuMRmvRfcU4H9HhdpStCVb2dpX9n9XE8hP4Js",
  "key20": "mX94fDDKD1aCTFDAnF6TPg2KDrjXvjofTB9KG9phj9Zv7JY1Uy7EyipR912RAH8sueSN6eDMre6x2NNRH3t5riU",
  "key21": "42m6wfdEc1v5EbhbfXjG59izd2Pjmi6DTuZKBXu4nGYPxk18EmC7BPgwMM8qKW2H2KhkaEbRqvNcUtRAkZ3zj59i",
  "key22": "3F2f9snidQWCataZmgumHZhTddmyfSpFR4hZS3ZRBit6Y5dJF8h3xqfDX1UBivtBSnRawym6YQbnboCn4hr2x3rn",
  "key23": "UKsDURYrtTkcRSjo3gDG3JKdhF6PRjnMepypGVxCFrrxou4gSNt4Lb6VB3vMs7cVGTLARL5fkkA4YncfveQdCEt",
  "key24": "5TKTpHFMJEPZAxv6FK9Amc8BBmeN5N3K4UE1LNdivhixYUKz4NwTjj8xEMJbJcug2LJPtdULUi9dUJ4CqoXTBQwY",
  "key25": "5a4uj9ZgWQw7nz72rsFit8ESkZw4QqDnEUMjWC18DLyLyY8w1XYbK57CpKzSjiPr9yU4vxGmmcYpVruJiacNuec4",
  "key26": "2DqwwZFVvLiriWc5zxuVYWRxngeFRwzfK2gUCy9QPJHWcdkv7J3KN3YvCorPDE588ZN17RM4rDmCQdwkt335vDMS",
  "key27": "22c9LSvWKceTKRd2WbB5mjc6rsitFTHp9hUFDZCyg6FMU1voTGy4FSC49wDBE6f9Te3DJeAZbhGHf5NNW6yVrYvP",
  "key28": "46tjrdX9FRgHYoaNFLjL8mzpmKBvTGANSmZioeGfJuELHJ1xKA6EGEWixj7n4TMyTTPa6ASmLP1q71VgYc7WbMEv",
  "key29": "5YeXuqZarXH7jS9dzKjtdBWExigTUitfLjncpEzuFMBSvPpKyVWcuJYBrZPZ5m1BhetTWwyUD3EobhV3yXtcZHPv",
  "key30": "5N5UcJ7aFvbqHeSy2kd25rLNhGtmVPNwQM4Vs8cCAG2kpR43VWvn8hZyYPwRHVYvwEKkxRnNXLtkXQjM3ibcPgBP",
  "key31": "2UeteEnPK5ZQCD8zaKXfmvTFMrZ7uV4ggs7DEpYbB3Q1oC6dRc9xH7FATMD2RUAyZCbQTc19epNgyeqNRnovxg38",
  "key32": "3D9SpQGo1vsiaHqmHQxGBw5XfPpJ3rwzEV6ieVtGARX6CG5y9VmGuVvBVZNTi39iQEsNTvnQgW8k5RRb6tArFMvo",
  "key33": "PjKEBDD7wgmB54kSDrRPgezDyfaXbfWad1qiiyZpYVA6y8jQfoxNmiqBzGbSxzHiu4aNgr1zWgzbDyMr1Ln49BX",
  "key34": "1eKDg51cJQfHcWmd6qrfhD3d3CqHUWfJy3PNGnQqgiJaVDY9Anmnd3civLtgNfnpxmL27HUJ7z6Td5E5Dyf8HC8",
  "key35": "3eEouSFKbWtuEQFJsrzNQZ16G7qXiq77ShRtpDc9j4G29U7Qe7WRKtzEJMwcz3iHawxexVM1b69Peb8ZvQFaZpj1",
  "key36": "3yewGv5WWU2zt1JpZ2P5sLywUJChi9HjDgxNSvrruG8ddDJ9zku4fUmyQTQv9KdcutcdygDZwAok9HasodLwUMPt"
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
