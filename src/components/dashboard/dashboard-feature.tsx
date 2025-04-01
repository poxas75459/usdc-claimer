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
    "48haxWKukCmLPbWzAAw2eenJDBEr24asPa3EbDwGh1qeNNYUjQ1s1g7T18fcezheLWnVF6pGM5ajUbVPzRbo9erq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WtdueK1PbXxjpnXmbv41Bx92osDiNnYvqhN8PaDY2zfHteT25VQA4LkzZYbC4YqmugJVK9KKuoQSrrRPjbJAVK",
  "key1": "2iP7voXoBuf4BHsdZMqHzJScYXWnyjtmMuxp6C4RVSXKPyaUFAAHTVGgNh2MThMZ1RWRyni8MpkxC3BSHQ1m2ZtP",
  "key2": "Vv6PBJ5xmRNo9PTRrNCkSw8gsZr1cxM8wWbgonc2EFt7urAi2RrjBdXj4wLmwxe5M6M5TP4wqnc6o9ZupGoPcds",
  "key3": "3ve8U4LsB8xkFXzBXBg6TCCsyYffFasWni8DVah34bCAb75ZQgH7rcySiZSUv9BjoS3y5u5upQKo7Jpf5x8vM8GL",
  "key4": "XTBPyqjMXYHafiHPQNfdkDb6B6gLx5hHGFZ2rcASHfTnXmrvPnWUDWVuQ7tuUVu44mE5iTNAGPhj9Ut7xwEMNSd",
  "key5": "rWHpPP66ZBGHydv8cEHoD7RpPwsShaQCtJWFSMzio62mcChVkqdXS75sp8GH214po3wtUDD6WY6TnkECxoA878P",
  "key6": "2xnvyWukCQcnRN1PsLeq1geBZK5f11xmXLJxsuJEq25i3pXs3xUBWVmzjVxTSA3gqrPLMyAkDPC7xHVshpAV2SLQ",
  "key7": "4kVw5H899JXkqYaTGB9LdzmmRMuW3MTb6cQRbDJDv2pzQ77tTHSoNw9JDtMJZPsX4muhkM5hUPuJ1eVDzUaMBZ6v",
  "key8": "4FaNaGbffh3Fo1rtsyPBaP6nfyGtBkcGMdMTKPy1Ux21aQCQbMgw1njTySHrAxxRG4bpYcfPHp3qPvzB5fJG23to",
  "key9": "35RGDfwqbXXjS8Ba4fdUDizkQrWqkXbAmNUiutXKJ7wz2bitq3QbhK51KQfrPWbPj9saJXXdzQ3u8Difrv7spwLq",
  "key10": "2nQNd7sgSq39EGbEcAgQW42FiWpykiov59Zwd4Ge3Z2Zkcgp8k6JauL8tBgnczKf2rsRHEc8HwgJRry1xpxSdxkA",
  "key11": "3ACoDhvVRbEDxuu2tU48fdDyGy3pvB3Bp3xYF1ZGX3w7V6x337Ja245QDE5nGc758fv5ogyz3BnZfgt88UM7ajvX",
  "key12": "3P13bnpMZYCiPa1pSbbaoq7i4Ly755bGHCMAqGbj4DLuZgrhZp8peg3ThAsi3rmXM9wXtbCWco5nejiYzoMoFKhZ",
  "key13": "2JHWDkhJWBpAnA5sUqtgdc6ZnP9kpqB6r1Xjwfw1AD4qukzwyCuKDVYqYoUfCXwbJntnHgmFaDTPnTzaoWF9p4P7",
  "key14": "53JYkzGmmnDWJk7zawFiNcfSTkHQYc9pX47HbDJz6cicYcZ1ZMxbe9EGrfayM3bgMRC2NPhqquS7iJoD2rpodQxV",
  "key15": "599Drz8rofcXmjnzxwgSEdGuyxQRzC8BSQmVckrtiDwiry51iDTWKChHcTpyovDCcGxxsx2pnnB15ntBAaSTK3TT",
  "key16": "5mQNMHsqd3wHL8kq3SmgMPJeCqiJX5QDD9zTs1H7aApbj5zGyAuPHviDLCXhLFjKFnN2vDiAVsGLDrw13nMjCVx1",
  "key17": "5xscFGHUMBeUCmHX4DSt4pZbmkuzck3kdUScpLnRbjcN3Q5q33nVAf2c941gsn4Doq8Z8ExZaUP5KZ7vRY4965Xt",
  "key18": "MoR7f59U2NsyPmvuxWJVHZACEffTzo5MWew9J6Ecp8dHuUW6hKfQHN6wh3tng5w9KzjJAZ9JLi6w87K22DuSkfo",
  "key19": "4xfDy9r8wPZWGCc1GBWApQimuaXcK8hFvVN7fENKjUGTHTTsv5j4h96kjunxfuChKQkBwoYTWPp4yHR3CzqdeaoS",
  "key20": "3DpPgT6GuyNAtXX4tgBMnGCFJwowZfuyR1LgoGGumdLLpNHjCiiBVD4oybdJ8NenWNKi3iPxZGNkzzTXPWBrXMQ3",
  "key21": "4NsHD6USqjm6nCAwsGGLGi1i11E3Rg9nxLjYAYjCdfYPn3NKdDTJfP7RDTgtcheNLnHYzcxhB5SUPi4o8aoKPnRR",
  "key22": "2WrQQELMpXiZCrEXaboN6A5JGa9HGkLxkyhsxnBGVmi2ZEZbtr1cA8SyWaEym3izUARHCRZ2SCpN14Lz8S15iR1F",
  "key23": "4xk9HyZULiQX3KrcHMR3Fz3EuBdWddAMNMV91N9i71FC4w8WbMtWioePHVXzPUpHRnePj23Y7Y1Gjcosggp5AJoG",
  "key24": "28nj1gf7y5HBqTpxcSXSgBjKsR6kaGFd8D1YoWPkLjyUP8gKGQSbKNV61fsFb5CENaoeTzBbvcK9K7N282QvqhXY",
  "key25": "2P96RHnX6NCn5GaVEnE3GNB23Pdo19nAK3GYfgP1Wgc9s2Jtj6oLsQYHvyaiZWogTT7gpyKyFR87fywgpmqUDCKC",
  "key26": "4xHXjYAjb4io7UT4tqCZRj6V4WNnMQAoquGQAWZAoNmXrA4tFbubsYd41cXGkS6Hzo5beqN1Nksox5sPaWioSzxj",
  "key27": "Hf4HJLkHtHy7txqHifNAPtYyTu56w6r9fCh39jvg5VGASp1wznmjvV89tcgm8GC5F1tLeGqGnv9M6SxN1Vtuy3J",
  "key28": "5NiHXezkovARzMWy1LpSD11Wsa5oeV2euekhqgU6hpZ4TuECkwgTV2EjiqoMZRA1r1qL8wKXRpM1FF8D36qm4qB6",
  "key29": "4cvLpxqzK1p7dta63R1m7DyB63pouTXst96n28qDhHnTGMp2PiPRxYcowaYcwWCH49ck1cpfjvYmU9bh2ERgDimW",
  "key30": "5iZPVoyo27Ce1upftU2emY2fkrrWmoyXJ3TUZk5WY6hPF24peQbQh4Cw9J35hP4f1DcqLFpxgu2YifQKnTBvwpBD",
  "key31": "5JZ3yeH4z8FWrxYjhRCgUZeuogdeEuzfafwWe3yB3rYzznyPDBLfTKocFmSox97ctEKYpvY16i11vucfehPXENh7",
  "key32": "5AQiC4dGU6nC3JTzQw1VH4BrdcBR2MFF6DMdEv17Y7b4UCjdfNSmJ5UELMvDdnN2ZuV9MJ3wTLK8dwNWJxf85bha",
  "key33": "31tH1zYtUH48V3QYyJB9JcgefhDGQYDJKe2vdybnHSVKx1we1uWfRj2GFLR6v8fPDzUb9txxHkt5UVVnLouZaFy",
  "key34": "5a8kXiYJAXtVpPcvMCoiWnd5sz4U18AxsmH3XgeKWaoGGB9QF156Tx5wHRqZR8vLvcbroxpvcGwyhkxTEQ3fG8yG",
  "key35": "5QVpXjXinvQiJmmBKJCnA6KNchEXKbEeq9r83jKnak8uM1drAqdmknHTQb2ev1EjKV59aDVYn7KCJa2pJA9DXm9a",
  "key36": "5ZKQYahDLKTLxhsBu5Xa3YKTPzZrshAwm9LmoGuADb1MDpeM3SSrSmzpt6DG1fuHRTSBXVS3JJfkavXabUTMFK2z",
  "key37": "2VXN3wst77j5tAr55rqhDLvSDmyYVekR9VmA9AJPfthGoGQaMC7bBvtcXduef41gmmMVMYBAXPC1SkfNx8waQaNR",
  "key38": "5WTo9nWX2wTB8wRHGLpMbYBkY8jz3MvMHBnDTsfCr4eUubQmn4EAXh5gdKQ1Rr4fgWEykWphu9vTrWErCn6KgEsw",
  "key39": "37hzacUWMGRCurQAe38AppTg1mznAKcrLbXSYQXM3MT4N29iXc6RV86desmP64ucDH94EMBtAmmhPPWVXWhQmEWF",
  "key40": "2SzDJrNeuuzrr2NwTr7Mmw2Myih4SVqcp13BFQmFpb4pbAcoVTzjEwpmBWfQ248FxMdiKuCUWCw28bsUgfPehXst",
  "key41": "4Ks1LGRrHvrk97BDt6WcLaJ9bq5fUEDHmobzKZZvXRDYShJwtNuRg6oyzxaix73ArmtzXvm2Uve37ZDnMMXVeSBm"
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
