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
    "5qK8v8gxRWtrF43QDQAGLcQnNN1jrL5f1nVcKYmEofDc6ekkaguJJxfcyorGzWsC5AfiBspLRjaWKQwJG8Afwcra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3kbP7xhxSv6j7CRnSP7qyJxWgpJ4aSHhncGmm3Aa6yTzfr7G3A9Qc3C4MH6d1nCTDqyiNEQDkPEDApLEvw7ftq",
  "key1": "3PWtKftBv1raE8AMzB2gzrNtRHG1z65QbY86LKM6tQwuV8qMkp7UxkYdj7j4UpbUC9zTnXWB2etyHQxkBQH3fHm3",
  "key2": "2FfrxTEqYHwFUHM9rkwzt3Rr3iy7VPnBhyTtpU57yZUuXVCnme7UJQrp3VLUQx21uMtcXRdZ5CLy6wNkEvhsaT66",
  "key3": "2bCSZaheUkR7wr2tYkWTnwUnTpTwdhtstqno1WaULtUAK9TVk3Xv4bMt2PwC7ZzpxbJrmYfiBViBtT492T5MjPWR",
  "key4": "3doquwh6fs6dgzZc4hDzdEY7WB7BCrRPjy6cHedz6ZgvbsPSkAo86DdqugPGBdxkkQDPjf6hJoA2csQvg2RWwSjs",
  "key5": "47UaRveLNMEjstXrGtdH2XgBfmgrULGXWoAn3HtXwna3qgzmxQHmPi5s61vtaBvtuuxPnc2VCPr36szSarjahetX",
  "key6": "Y9ymRKM78wS99swPYD2mgpjFrwD4mmmw78GkviZZWwzQzGj1idXXjz3Jw8jv8YUjx4Xv2rxNz9DSfz4Q2ZVhvyx",
  "key7": "3WofFnZwbSuyg298zcfzMHiX9mCgnHjkSU53KXKaBL382q3dozGGPRc55ZhzUh8LN4BwweVhB7SxaJykGXGaiLMo",
  "key8": "NKEmqdTfbsKqiJCcncyfaRAV9Qj7gJo9gf1mmMbr5YmsJYG1wDK9jR9vogtu3xBC2Rb8mF45Uw1wmY6unWewdmN",
  "key9": "2PpeqCvwGgn9Nr2JLgNnfscq54KSr1H4zaREsWPURXEoz4jvJmHNyKpM9zt8v2yi3sKomTq1gTrCjGrrdUdPwudV",
  "key10": "3YhMHskAmypVNGJtLeHMb7gnf3oSCXzSGHQa9NkRtuU7eQNA9yshpKEzGGLZfeVfS4gWVpbhfgoZJzGZz5nE5SRz",
  "key11": "21BmR9zCrhyFZsUqLqy6Uo8E17E2rmAUkqNvaZRfF3LQS9iVB55Cyvo4SHbDrZNQFduZwiRkiRjzkrrcTH6vHifG",
  "key12": "4QbYYLQ3W67NZvwDHEZe7kkzEjuSrcXcNE33ekstCikEGLAue4QxVExJ1SXoZVsUTjiaRJmpczuQ5VE7sC2NFacs",
  "key13": "FnaeRBAx4UkuW9XmcuzUEU5eGr13QrwgKmRiB36iSAHgueSQ8gA4YAq14eA64cqAwTUae8oS9psciXKExec3vMh",
  "key14": "2SLt1d79JeM5L6pnBTwxwaBfwicJnjQcQE1osFJMJuU5XXrgqPg6nFbWUmPho7LXdUPQo1n2Tq94MQnhiZvVxmyy",
  "key15": "23scmBdZUwnLCJDrjdvnLveXaQk4gi4UHGN1SijA7bAxzvcKa8FHbvZH94nTsRaZrSVqRZY2pR1tMpuPiRZH6WZy",
  "key16": "3ZJD33Cyrge7McaGxNnjtjq78F5kUGkvHLhq5e7konf16owK6h3b4PKc3qYw36hLTtFg7nCUF7drZVJs9UgCvB51",
  "key17": "2D7buNLof3Hz11UBmqiq6eEzaF15mZxbJYiTwgmcd3HkmS8c95GLGdNUUNyi1fgarTZGjsj2Wa7DLePEZaQ7WrH",
  "key18": "3Sc4mtJoyZLzKArYdkjsZsyPBMb2U28r5QhBuKXWi39jvwfW6XUa9V2h2kWkueeucm1Cp7HXdX1UbsvCFWvYmyok",
  "key19": "51bdjkAy3KWvfSPCtJd1xxAsfPjqkcD1AvTVNnhsvMo2BAx9gt5daBEq3En8ah2n3AM23sERzho5gNR173PwCvrx",
  "key20": "3NW5a3ZnjjDfLq6ipKHNHefQzq58yQogXbkjwzWiBiWiqRcCWKLsUBAnniB8SiNWt8YPkfkniYYiiGikcTdRz4CM",
  "key21": "2sPpVpjvNb4N3SUJaLh5y69GoRPRasitC2kubMiZ4UpFwessirAy7oKyddzUzb67cU2hrtAei3vUPqxXCZ33NRB8",
  "key22": "3t7UkKgnPk48BYaDVFaxM1HUa9RT1dEKHrfAaTv2ymyrErKTfV9vZPi8hBbXVGnRmxBjT9fGYXt52F15a6pWi9k3",
  "key23": "3uQbrawhWuWzPBu93BTj2jzJ25WnLD569LpWVE72Xq1oehVp74PQqHYG8fB18jH5QPSSJwfrHriALyVjjPm5UpUo",
  "key24": "2t3PgFtVmSGEJ1BxTcMPhir89W1njrPCJsuM876L42vS7yofjyGRDDwxLFDgWpSx2jjYy6VWBLzcCaBFvsq9WRp3",
  "key25": "2gpAjTHEHv9ZFM6SGK4KmsyD3VWv9LXZvkCyeEoME7P9qqNwTL2qXe7MsGDcL9e6PvxVrXiBXBQSHwxE8tVUdTGk",
  "key26": "33eLhgphtAELBp75NLB4GLsZmCym8P472joPLhe3oXCD2bnJJJxWQqbiFqW8xYjvBsQyKJWkktVKzEfXKVGHAqrn",
  "key27": "4yLfNHKRPLQu6kPABx6pYPoaSsZG9FefJpkYDahQ2QSG7dxMfF3QDtHtrpiHG18MiinHMfbVqhGR3TpNUfRXpT47",
  "key28": "5jJy8nfKGHz4iH9stPcwCe6DWkfTJrZFAcA7Ro28rwjhf7W443DQgFmNytt9LmxLb8E6TE9f2GA7GX8wt9iHqxi9",
  "key29": "4HbiwDA6gusgZFwFtW2KiFYaVFjzAAobCJvtgXNP1vkp7LiSFJjuxqt7qYaXetCNqARiRqpS8sFbc2ZZK5T7zpk5",
  "key30": "2Qwi4utFjhDUYRiM8Xnym93ahW8hZDDpoUELAT2SEwxuC66QagquWNdRjr2D5w5hLFNogcMYPTxHN5F2ELfNG6pG",
  "key31": "5Gn9KWZBTF8DCP2ns9oiWy5NWdcvr9RhJkceBbSevjKsVYRh8UPMEdwdpoVasmyaSpqfdft91nXmAzC54HiCnSEu",
  "key32": "4kpxmAN1VSifCRwFBHo8YSNvwKksogmCJsvHoe74NXcxHBagZVkQcwiEqXC84NbpzSpMYxP4Z2QsYgtgUXaeNT1p",
  "key33": "Ho3pyfV8RsZPQBCx5v3s5RrVD97jqGFFL49vDnHYZDY7ccHJCoJKRxuMhwN6gwpaR7kNt2sMERS2bWFGFEbbGDg",
  "key34": "5pWYDrqNRQRFuJrZMN9qSpdpsTMbqdkDRYSyorHhn9UsDpvDqQWW861hnq1MNk8CEbLUs4ye9H9KY3pjUCu1gqqs",
  "key35": "4os5X789zBmnG6HwAYc9bhtiyYN37Um8LW6XoTBrp4vdHUurXCXswTSLP4vhbEahwmn77rYk3iYF1ZyVLQhZ5Zsj",
  "key36": "3cifDUABW1MmdnrFzX8evkiC6tb4D9hfaGqdkjBTy1CWirqxFVLgQD562ybMtgQW4WLnWM5ikGYHtQy7r1DCk7g7",
  "key37": "23zCDtSYbHbzFgsMbzh6NwkVvR4Upq87D3Urpkji8LTHVGd7mAo3txVmmQY7VxAFsrnM8Vc7EcmV4xdAeHvjzMnT",
  "key38": "2fZftfW1v2uz7TkWTuCWRWkxX8o8sRny7avnHotYsBPu3zaJ1zHJtN9DefG5EUN1m2kifn1HnEg3pfAgwa1HuJ2p",
  "key39": "48m9ZXdNsePFLLzhm9NppapaJR3zZCGpDumbTLiLj32mTFFE6T1P4LjpSszQefVo1Fp64b73Luy3v7E3dDqJwZ7f",
  "key40": "42GSoUpUjUrzk4s2WqWbuQFDsnuCYLZemq7D76sQzmg1K7VeS19MKvqyoY8ENCqbLcvE4QcZxkyspeSemL15nGLL",
  "key41": "fxYwuNomzxTZfUcGXmWKTNBJgV3i7RHY7S7zsMvPdMQ9QfSw4D6BVsvuQnYZsU3wFDKATHGDS652jiKUANkKVFt",
  "key42": "3pKm5rGib4UVxLbr64nQBxT5t1dn7heeNBUk86k6ijq7NEJoYy9QCzTu9PUBPpzeadyhhGAuqBZgM2iXzmAzD5pg",
  "key43": "234yvneNCjJi9xM8KvUDqETS5XUGGY3D4G3fXt3zbmoXLoXCbwZseTWUbG9wJd7gtBvFo8JyzaGkRz5AdhFZDGc9"
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
