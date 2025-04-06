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
    "26pMMTZcF2T2XtvYPnNawusxdtLyuQcUqmxK72kyJnwaH9YWEvnjwM16UtLzJoLLSt6uwLFiUkG32CGLobP6JrVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDRMCrmuFRoZmb89kSUCtVi1WdwehnPiUy9UrNGG8NfgoGZzvd2JK2ZAhkY7ZakpNfKWmKAUWS9s2b662mvTq7z",
  "key1": "455M6mxKNAt5ZT9UK3Bx5FoQJaUs3R2Y7C9N4BDzgkUE4ZL4w2CqMVdk72ZqBi8nxKXhBenbSB8bL7P2vmYtSzj8",
  "key2": "3Tm3A27qAD948FSwcfKXpPSyrMSyqb3otFozXSeusjjXsvBk7EVuQwoC9Z9Nvkiu5rRcwB8YHJB8GrDRJPLdeTct",
  "key3": "55iHamVyQ9pWWXEKvXnEFEyoK6WMBkF3iNMTeN4ZMYgRVJG9NqJnZMwAG64MHv5anGXMCrVrDZa4ijVrfXqfPWAj",
  "key4": "57APdUMu4ujXbobW3tuCDPjmrU1GKCakAYkNLVwwWGhbp3WbZzrd5ignqHPNzZAvLPJyKTRj6JSX7q49ReiRkq1Q",
  "key5": "2bowvaHCiqpXdX644RyiyYdDX6Guw6b7Lndw7oeNSD4ftfxK3Yw1t41FxUiMfuiXeguqh4bwSPh17xShXxXqxJ3i",
  "key6": "2ebTS7QgTt6Q8KXmCifhK6PsVftJ8zY8n9xXJmmeNXbZWfRX5j1agqpGVJFeEHpbovDSdB2ao9J8bNDJa5JKLoGR",
  "key7": "3ckU47cBgUtCH4aPLVUmL6ZPBKu8aPQMtZ12zcAnT9PtdJ2azFBoFeF2o1P1gyF3Px73evTRBPAF4ucAfz7pKAcd",
  "key8": "23tE4GxorGWv4x4xcZYMVGriH3N4CYvSkZyr8ZhXmX71VceKg2kfr7FsGXzHQ5doW5x7amtanyKw79qfaMUXFJee",
  "key9": "49jQ5NkdgiVyK9PTbhXMc45cCdSEtFbC46185z1zTVBjhf8UQC4dRMgvJQ7HmkwwBbetJGTVip1Zr3cLXZrnGy7X",
  "key10": "5XRXRDpoHKmhVH6yQQB4Don5NxsCCmDZbhHDACK1RRZJ7EEkZ4pM8EVGkthSdasD3kBEpZZ6YgKSRLiw4nTLZ29x",
  "key11": "NSvvgsRRjpMTaGWrNTvgkzMWXcDtarp6Bm2xsFPP7goazD4UkXbCRAayQWcMEchHkekZUgoBq9YEaF5skKsaf9D",
  "key12": "4CsfVy47Y5vKrBUcgDNrL5Y7eZQURS1qJYLLLUpdsNBugmTq6guGix41y4e3DhXHWcoWrHYssC6FnYc4Behr6X1N",
  "key13": "2MJ8MFzJnb4XGBJeap3DspRd1N5St274FTt4AodSn3hMTqzE9zrKFbZ7LE6sphaDbDnW2aUjkx3sUDB7pyNfdvz4",
  "key14": "38EGfznBqgUu5QxVStKDxKUnUuojc7spU9kePYDqny2nqUVhtegb45EDAe565Y1RQjPwa35X2LF3wdT4r8LuM18F",
  "key15": "4hsw8tddynPSuEiQo5WmzD1BW5i6vAZbQTeC2sh5ZxMji6PDkvUujhNWme7vF6NuxtPWtrw9FTLSWdHm9jtvf883",
  "key16": "2Lxdcr3mboAgyewDD7AHmCWnn2X9R3pL71JZxRngaVTJp3jAY8YSRBQJQSgGx4jp5mi7WtDpg9DGbZbjYhcDUZpf",
  "key17": "4sb7UcW1mQfDA7YKyXkw23MVukq7n1M53qDD8nHoM4xCZmzziuUAtWBBbgpwk2nE7ieBp8z375638LEYsKX4LTZQ",
  "key18": "KX3CLhPF6zUPWbpqiHDRYP7wsD9WBaXn4vEYNguf8HQL9a6Dp2oZcrtxoZERdJyANPsaX4QnExw95bhzieZ7xNq",
  "key19": "5RJD1YWK35UwCu9nGYPyhPCReAngMTVngMbdNTUdN2JQmywAt56LShaep5Y5vuLHsmNzqWQb7mX476XC9vCNsTYV",
  "key20": "3FqeEeavbreVCfuTKyNshCEX5Z16miEkTNsQdoRbFXmjsx6HRMnA3tEJ6ags2eYoGGvTy1geGTZGLhQZQMqJiRt5",
  "key21": "2GQDBhF1YYbUTEHYY6uhCNG5fEQ4DmBEkt9M3EKsqkcmPNxsPLtaJmv6crKs9D72m7FtkXmwXrTtWpdcAcuk6GTi",
  "key22": "3A57UmpBTWXMrn5pqEBhPXCpdbuxeikSB5td3qvAAnReiRMZnjqpshGsXgasjHqnJhTjip8wjJbXCgyN9VLKQafd",
  "key23": "616EuLPmNKBi26qfwpm6Rghif7nijBD8Zuk9Ti3WJ5NANAdNr6Yzq8MgFA5AjufsHFcH13LZAMErzghYFNCwhNfC",
  "key24": "2aBpESWoy2bVYtoZnSoqSMhNcF6Qy8ps7Q2UZMV43SEFvJvXrvPuSWBA7sZVvcfArnW6oAH84Es6trMaEMSMaHq8",
  "key25": "21qSqoM1aPVzMYY5M5qjr8jah7ZNQU4wwW77DutdSE9C7NoJTqD7sFgbjzcXUcFsCdSiFKZiR3PsDqnk7BmrrFf8",
  "key26": "2Mb2QC2gNQW5CVWPVKbnKuLTg4Y5SLb2h96TC7VBS6MCUTSy4iw9o6UvrosJxydftkqV1cDvicdd5dvKWzppDgEa",
  "key27": "5n11fvsgCycwpqLBTHmSU7QE593vVpE2WUN5hBuRkSY9tEnGBStanmkGPPMa4nbBVsd5oWFkDBq5Z2FNuEWjm25u",
  "key28": "4Qf3fzzLM4PWjDkkyrcjXTcnLvSnyefC29nmtFbzy2sWzBSXSzFiyRC5fSDsa8MMni5V8tNC4cPjVNNRLpmMatqS",
  "key29": "mxzvnPeitTSeTPnoP6T4mZQ1rW1csnZHyJDJDav82PMWc6qaPcWo1hpMYo1Fq5kpsrhAsJL6DffU35apqwk8yjp",
  "key30": "XLpo4BZpoAttuE8x8ksqobRsZLmx2CAv3QCvB8g8qRen4Ajxi6gfeSMExCNenVfLxsWPZSu98gE6iznQZtjgDQN",
  "key31": "HV9tspLd27NHgPuaqUiGsmKYLJbbvv5AHJPdkWsz9EXpg7rdxBkjNESM2KhX2kbWHxPwLZ38HLLq1hdaf5JCBSA",
  "key32": "4ipXvKr6fYYcoxYpKnDbnFyikPznetRdNoEtzZB8JRrogfP8gdaetvCGwhha7QMHsh6uqetXmsySmimGF8bjPmf7",
  "key33": "2SqVYJn9HjCqZuBnZtun3Tx9YDnbaVgrPuAmbaCbPpqnqk64fcBWDdMWf8BPGU5cKK5FZs9xGmuUnSKk4CJQ5zYQ",
  "key34": "2H4nxaVjDVggmNYg6k1SyAG7ae71ar2ZaSWZENrFygvYGSSUq5D56NUdvMHuVtrNJPtmHeZd5xHfpHpLhR1vKLFK",
  "key35": "4rmzENGLS2WEvqedSQ4pmyyd661yEdwSzQdABSeCMmnESwPMd5ihGTYPvYDx85GhAbnLMC2oWJofW7MHrDqLZsMh",
  "key36": "3GhyoLhGgXxVUdEeyNFqgdBZSvz3fQAR733vbw53N1ctS45jDZkfLVnZ9xB8GW85wn6zxw7gPC46kz9RvhUTGK7w",
  "key37": "4GU913RFvS7yX4Dk7jWyNdUKzSXRfk4h3pLFBJrCET57xZNdNTMfkTV7Tm8R12Jv2sX3VhRH5dGAtge2PSHK5oHh",
  "key38": "dhegRoraiS3xiityAKAjrMEaEMshfNRmKGMcrBZXK6so8xs4sLYdQ5wLuHPbhog3nxHEryhq9hnKbScwuxhTECD",
  "key39": "2kWtZJAGz8Udr7cUFRCSPRvmhe4JXRUHViQzNwvH1js5bM4erPPk7g4M82CRQ467Gur7ME5dMeneLYWxvJXmrjvo",
  "key40": "5FCNtPddoYhWBN1AbuMfgh7p5PdX2R3y5RXmdwowU5P6ZtEQkxVDWzXWcDxoQeKLyd4YxukMpp2g5dsLQTaNTgfG",
  "key41": "dYGm3iGheamkr8HmgumRydBvBjL6BpVAWhymKFhxKHEC9NgsqT8AoB1eySWCgopf8364kMSsVW5Am17bPvUb3tu",
  "key42": "4oWLFLNLZErVtFbzpkVGvXMuiPPfeTymVrXW1EwvdLXxSxsfiWGSqEJfFQrFWJU54RUusbfsZXEExTbhqQ7PuikN",
  "key43": "38MQuYWCNUMRecC8J3u4eCrn7mW1ZLYDPHqrfjrWE6LzwdtJ1SQgY6WrqY11SaLhM2UZ7UrvjGYi41VHzuKeWwp8"
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
