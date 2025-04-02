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
    "2xJs4ZqT4xLk42RHgHy5crZNdutqV9G8htZodftDoBGjL2RdgdRjFucsWAigf3qT91st37ZG2CGi9WiQqRqPHdda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgnJTYRUPQrX6oahmnEurMQqzSDPAJwjJjqTCuG946A1McDTRsMgDi94KkmT6Xu9m55GeRUCsia4WnTJ72xBNje",
  "key1": "5fzeGME44HRZyjx2LNwEYysLL3xvCZeuTmrHM8eN5K2WfTaYkKiPYGNoNhL4WKkAdevbttSDwrvBgJosJeGGeS2o",
  "key2": "2tKfZLz7DyXfcfQZ9gPLDXpPGd1cRvgJn9KCkvk3xsNMnDJgpTZng464ZCN39WTs3LvHkEfT9RaVCTWSJfkTH3BJ",
  "key3": "4nwptGdr77ine2pB8bhXiZDg4bRsZ87bs4xbC4aWvPwj4kbt34ptUN35XHgZDF7ho4myfGiWdMCsuwQGN4pURjs3",
  "key4": "28kZr28RRc6k5pT866BqPC6CAHy79uDKmJbjA8NmNn5hgwKbQ15Dt98fkUGgsV1wcYbpZWqVEsZafX9BzMf1T9tn",
  "key5": "3foUwCuS8vwo9x9KiNTGYmw1qJLaMuLFXdCvgant5frt7SJwaWiAjuruEAQsE64Qe1PMEnA5X6TTPbgQbXd9GPJ9",
  "key6": "5uzFrQhPrSS74xSq23QbvjVTaFtQHgELcpdnn2g5Bu13sBRq8q4oy27hDi66yx7UoChfR5cxcrmYfebKEFW5UxU6",
  "key7": "LVSLbWNXVckEpJwmgTpQRKWMrdkeLEoEhjoEbVLce9MhgtETT8YcKpqkaKs7gPxJEizC7S5qS2jChX8FWz5DnYV",
  "key8": "3YhQzfd6UcAr3QyQNSVknUwqEce2Kuan8xe25Jno88ejqLmCVSFJe45uQGcnE3dRRrvxv6dBS5SgiZsBrhRahn5q",
  "key9": "5T1AHNKmpfTfo9hEWyWGprfcgANDyZnM6ibJfnfhhBWTb3qJNRn1tqaA6vRd1MczWfftnRs8zKELyQm46NXMEywQ",
  "key10": "3uHTsKGZX4PKMzisFZpAvXw6vPWqmacTY4Gz1o8uhEvyRDiM95uk9ReMY65SvDamEt3wGN3ui87oQ97wN4jW5MpP",
  "key11": "24dtuEFKpodhCQx5m64a6oGRTRsabUV8UkTwvPuvkdH3aDcUDs8KAHcCqfGCUQNBvtnzu5ZFgmBPqgFCZrAh1w53",
  "key12": "GikhqSZ8X2d5PubmWZMT8omFsctMQaQZQEY8XyzqwuWr4khiucZd1W7Qy8Tcvpd3ihS2zqRyApSdqVZiBVrZPsd",
  "key13": "aba2DqntPTQGRYnsVZmcWWaJp9nvtnvcYrm91fZLjPyu2KjeaFaoRTq82Wj4huNmzQQJB4Ep8WQ58DHso36mVxb",
  "key14": "618S75E2M6zRZvoYwumYg2fPbmruD24m2mPc7m8oLy5Kxwvmwyco8DfPa1tgjC6ozSPkfg37413nFnb6dZ9MFkD4",
  "key15": "557uqmtURNREziBkMqtBDcvtTHQT77k6sD6HhoHEePW66B5uqpRmjUK8EJNLPYgWBgcwJjZtJY9rh5rVNmMfuBHc",
  "key16": "2ZwMkEhgWhzFKFkqnz9hpBm1bYg7vGXh8TNFZ5SXjnRJ1Qbyy11LaRKDwdC5ev2LBULm3CQyaPZLKP5iBmW4JzYY",
  "key17": "2miXGn4GBffTb1wscbhyJ3vLwpyGp2LZKaT8QvFkxybMnAdmVVQWRGcXKr5fEw1M56Z24DKiT29LEd78RtBvtAs6",
  "key18": "p43r3QX78bZJmyAk6pLkon1oxUJuCeKPU43ivYVf6YkmfgkiKzrbzP5HegmMRUnbhuZtYwtFvUkdUSkEiTUycQJ",
  "key19": "R4Bwc9Z2Yu5xTV8AFzZNGREvLC7M9e2rY9VMadZfEfir6t2yTDpTtgCNLQdPVANfstNhRQDK2C85QRwc6Z2as4Y",
  "key20": "3az4KhRCtn5Dryyi2mbjLyPTGaheq9gqdMa9kLcU7T9uqQ4hdZavdozJhvEX6XCcPdLwpU3xLG4mYsBkVycRQqqZ",
  "key21": "4CAYSzTLTFEEE7hTETB1sanG3Nbw26Ta4PzP6H7ZvaoewWgQH85BfUVEckYEgiXewEwmcbn4qp7uYu142WTv3rFF",
  "key22": "3fttRrop2ttgKBZzjM73cpVAVp7vQcQtsAXoF9KhYZijRGgBaiZSBfPx6SPNxAezDiVWbjiMSuiTuHtgmiEa6AmH",
  "key23": "zpAJe5kTd5FsFAcYSJ3AWjuwtzmP6mZJ25SKKqGVoH6YdxMezVUgD3GMgnPM1KLpw7MwRcBeZyj686XMbSXMuGu",
  "key24": "5dKSbGYtTBL5Hi8rRhWYyydpCUz5nKxPeYhsYBtHXSohUSnLZNszZd3wHnLy3f6AgQ2LzduzuWGEMAvtemo4gDjk",
  "key25": "5g1KTs868qTtoo3W2W47Rfwt9THNrGSVQoTnjgkJwtrG3NgSXJUbLMXj3cAb3M9qrWnymscwj4K3MVSuzFy9AiYf",
  "key26": "5iNcLmXzmxJwc3yvvWVD8VQwimuP47sayQ6kUJcpXSsjjwVavrRi5hfaz1PQwKe9bNac4ZgSMVQsc5zEUyobGCnu",
  "key27": "5TsPzzEVWH5PqywybD7nkNRYJtdG3MhuAsYJua2EynNo3euN5btw9UM8R1jhueijEwN6zr1w8cS8Kmv9nD5RdkgD",
  "key28": "zGjYdkxQd93XjpzM83S9ArCtjMB6DqKoWoAMsEpEqw3DG21f1nZagxmesgnWgvh553PD21EiPRAMtS9THnhskmW",
  "key29": "54jnrE8Ja78MpQyZHqEzTsGuGs8iGQBLkVmYWnRS1nrazcfSyeanQt9x95JvVM5Pxj9H1jRy9QyXtN3MUJTGnRQ4",
  "key30": "4AVxGHsXuN4DDvn2kt31bRQAHzCwjQ2P6m7dnnn8vrrKhnYx49L9UFuc3AZ3WJcZkKQWo34HHtFqN7oMbcdaDDW7",
  "key31": "4aukqxG9yBBnUBD8Y1K5e6Pw3WiKZCH4rgeZwciicdDtTUUdnBRoHAijvyj1CARVhUB3UpDf3bJbtDz7dnSWwdmS",
  "key32": "5fmGK3KtubJktPnpT3LgkaoovRnnMUgpsLSu7JAkqddeKVEaiuUBhmU9a9tfpLL2b8TZ1TEQsPrzZtzvBEPCToXD",
  "key33": "yWtzN3cbDYzkvvGnKtA16CU9ArFsVn7KXXjLE9Y5kPbYLfx3jdLbU56RGS7m5QtxQAhLwLtYig9GVNK1VRXVgmb",
  "key34": "35LadCqmaRZ4kVsyJmbkmCMMtW6gBfV4HvFVTuKTE8i3cQBWZKc3HU7MnLyoimci8bHJMVgTXXqmbShBRVpMwVeu"
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
