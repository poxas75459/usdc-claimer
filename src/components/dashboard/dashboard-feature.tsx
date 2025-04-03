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
    "2erLViPGiDKAsZEHGd9p1jA1DqcFxdeD8BQWVhxfQEybbVKGXYVhXUQHMcA5baGT4f1ZvYgQRjpDmNTZTCXMgiu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vcdAXcwwWMMDvYzAPq3bKN9vV3xpEvVMzL2SerjV3kMDbRjMNjoWhSHqd6BK36oqghFpg7BnFUo5JuM2ZG5Npn1",
  "key1": "51AoH9FqZd1ovNqAB3PWAiHtzXuVgUXyjKwpgTMDwqL87Bps5pdavDuM5H7qBLiDsWNxsQtx61pTu1bg59LXAvYV",
  "key2": "5quM3kfck2KzqWUVm7gCzRMdHpf8nCCJLkZ138q2aAnN2ibiDPMaj9Qbo1Dk7QgwZhoBk47ihMuSTWXEcdmF7hgz",
  "key3": "rNniMzenQT1FbkHvEpSyoBuKEPnBtrodj4oTGm6GR8ZTGxnTMXGfvrNefjfaHTj6zn8jSxB5ESod1eaWP9KuExR",
  "key4": "5SNoATKd98vBLGVar3mFxfUsdT79m2SRXrKR9J4TuaC99C1Kz4G1FACGXfAJmMuKKtSj64MqFbgVbibfTJP3H59V",
  "key5": "daNuiZSB1ncncsPMRSGqPa6KKiGWwfMHM6ncyFVF1Ki7GMj9cMuRHLyiqHU3KpoEPsWMQ6hQYTP9wqVAHk28nQL",
  "key6": "4qosqgSScjRf1hK1DuBqAxXgC1oGup7Yn8uRdTqxqEdq46QU4vv15kLVQwmELAKSWsi2RtV6Uyanj5yk3kSfHbve",
  "key7": "cuNtsSuCnyEU8gK7gKdgPCVADXTP7hjBKs5QK82DgzL6BjDWXa4iQKREVaNiesxZkSW7c7KPMwGQzq7zc66D8fk",
  "key8": "33YczAoqX16CDcdAQNG6tdtUWDDazuyLzM2DYb24xoB8XnwsRuWDGg57R7BBLHuD83YD54JHXL5mGfkyUEAp5YTA",
  "key9": "4UQRfBTpi5JjcGzhqrh3EpHGXX1swsDhnvwhqsVM99sTEq4Ve4jjdVo4bB3zHGGK6cfvPWtcQV8dUCLhiaZcdEc",
  "key10": "2X6CzbwJ2FLyrdKvwriduUYmDiiCC96L9xYQA3ZaGTpZGq6bWKvuBgBgpYaBdEaj917Z9sHeFAFuQhEvLmRc9oGD",
  "key11": "34zowbAuXhvBSevMktFFLG6JJYypuvgTCLTLKvhWrMCpqE3F5N4s4hJmneuJYoFn1p3ZKNtDyfxtusPUBnDDmGtv",
  "key12": "22PAGjto2gGbpw7a83BYfMVZLX9xGxowzFtRkimbF3wamaGURKQDR6xk4AZnKFU7rhb56U94HS8TFwQpe2FBgYKV",
  "key13": "2mZYK78LyeBjpovt2Z7VQzyyQKot9wW5YZVz3Vt8BpmPeimp578JcURxA6spkxEs6tymoe68zCGsL4BMtrRPmsGg",
  "key14": "2p3Uz4MAEPoAbBJwyDuTwcSUoT6vPNoCL3Thfmmg2ZV8gYQDow3FxcpbPopDRH2yupj589QGSp9QfBgoeorgoGUn",
  "key15": "2RWDcP6RiDLdznVetNCD2giXQQ2p7eMTj7nXc1rWMVSYkp9VGL6imDZwr9wRUnA1pq6LxzoxQurnM9nzQAaPY7iZ",
  "key16": "4RxmjerYu4BevLgr3e3mY91jcgW9yvHBv9h2SJDwv5DqDmVas8c2NGsR5TgzkesmAzKjbwqvNGn7s5tLEmwSWGKA",
  "key17": "5gkFSA6yZ4iCzjE98Uo73SPSCpaU5pyiN57kEjtLTakC4sJZv2QZ3Rr6HHLgJo2MGpEF6t7fyLsho2PCRTjA7VpK",
  "key18": "2nXqCtspowTo35pDoBXmSvJJx26L51hWeMN7CPEnUKpYANopvUTwMN2e2HADpEuQUgqbUF13kr2qaLQQ2a8AwBsE",
  "key19": "4eZRugvc2v9DSF62QTcR4L1jtG9W1sNiMwTQ4ZgfJQhGm86FZ39GPZWXYa86QR7RTbDtnPqvTw37gp1C35GurEc4",
  "key20": "3EATrN5gnj4FfbPjsX4EahsxSkZBLAftVkQCfohkGpZo6XeSTjdwGeqdmLyU19y19rVL6LjC1HjEnUZHmw2Q1hjX",
  "key21": "3aL9UEAu5vsT4E3TjGs8vjDqBxVuznsY69kriapcCxVibJ4LYjVjNBpo4uPftXFb6huau7Uc6nvvGHFVqRHF1iBz",
  "key22": "5XEMRAqzqWxHn471MXaXfPx7jArgu3yZJeg6rVEd27vCyb34g4Mbz3RAY4NSjLpq41aQgRkfdNM63uLG2SFYiqer",
  "key23": "55he3DWjNbzxfAfdB8Gv1fL5JT7DVPqmMNSZQp1TVx4HQk9WrK2uZbswUW3G4ySU4cxRf6tNmiwwixQKv42CE3BK",
  "key24": "5W2hWgMn6btDZFUPEPGuscbnGaLLjockq4bxtVH9GxqZSKMaxVbNjrqcH4AFVoBxjuYQFMpdLX6o8AkUZXJbM4WB",
  "key25": "2Q4bgfgNo9FixRBFjvircpjfRPZJbg5bmXAjwvXYGXABH7Pasy9NESdsopPHCmxMtaAbgRXD4VMxGbVS84UHvW18",
  "key26": "28PiuYZ6BMCPLtjAHCdVScbnos5bHAuWGgewZGQHRn2C7uneAS5KVyB7VFyBgJrg1gWKpPy1vDYtFWdPrvBMHFYi",
  "key27": "3gHpmcF1ZyPxE7EMyXrZefNbPdUgmL1UoNLpGuMvLK8Fmt7CoSE6HbPE6RnXGPXeYRWH38iT7DHnut1ahudxbFQo",
  "key28": "4tkZDUMGyf9Dyph2JtVgye3Vd11wMaWMUx3g8psj7DhjASL1TvE6HUJ18NvD9DvcuJFXPw4NQEvnGW4BfnidNmpN",
  "key29": "2t1NgapxPUvhRGPwUTqVnAWhyuwWpHKbHvBg2HxFmyALfWunk2Rt7hhPczo9xiJei6xTxRZjx1m4aVTWgnJk9ctK",
  "key30": "5TJfH1ibgBoK2P5WzZry9iJqhGcqjDXofbKyheCNDb54WsvYsW7g3MmPJNmfYL7VLg58P14DCuMDQUAKngnK42hZ",
  "key31": "4feKdhzFNWvimLut9pve9iBdcbZRdQNiCdCieEfd3ruSJBRNSRYWHYMjXqtsZhYFwvVLDjtfvu7qHdqXHuDUg58a",
  "key32": "5j2vQTnEe5SmTkKJb4KuCVLjzDaDcjiDBexfQBKNEEYPb9EEgCYQhbdArb5fHvXMA1rmubqu2ZsrmnQB6tBRJBjx",
  "key33": "CYvgNdsSSxtNbSvjgzVWiaCLy7NeGW7coJ32UnBZDBcvFq9CAi9V1RKAoHhVfZNKWDDVSP47XGzSx5XWdrcyQrS",
  "key34": "4VAJA2LZMVY6dR2dhRbCoc65ZLc7wqffxZSac4MnoCpH2pagxD5vn3ktwxCGhp4x8gRZsTnnoqShWsrv8AWSN3Qm",
  "key35": "qAGYFK9WYYjgd5LBRG1EbqtH2go9jDzJUGpts8euLdGDiQuc6nyMhprjgMKJWzq3QXcxW14eW5wtRmm6qJxdzV1",
  "key36": "4uRKh1cqxfWrA1dcgjK9EqvF9vPzCexkfPB56nj4jcxtNef6ktRY5MJ6RqfPEhfPuZsZjzaYtVhmJPX5Sx4tLwFg",
  "key37": "5e61oJJFuAFGtiGd3NAFjK92UJtUsN4gDd64zv9gPPiVS5QBQJtxazQvsmgMArBSDhFaeqvksgf5Vj8hnewAbw8M",
  "key38": "22nq49GKxS46KPNDb8YqPV4zVDR9mr46A5hZnUm99rzmTjZbTro2qFF8fcQQ58wTKYHrVmxGMScT7ShHV5UvaVL8",
  "key39": "4XhLuKoeam5wtRxh4oVgZt6nWENQc67EdBucwvxhE7CbxzN2NS12rTyjmJ2QYBQs7vrJP9iKkZBa1CAZ5Cb8zV5F",
  "key40": "5tXdf9XDLEL1tTn3qtcpzdeCAZ112wbJbX6XEzm96PvipDnSwh8ZvrchZFebvbBvUVGr5jfJE9noVer2iTPyxVu1",
  "key41": "497CrdJpdM2dADS7KtKrwVuN1BWnfmewFpsYhogy7TmzciaokWY6inGkeJoig51SQU7ZZFb8NBjY7goFXvMhyN1J",
  "key42": "t4wQ8MqoSYaB78MmizMN32WVL1jzzGgWhh1uDeF7iNdKs14w8RWux7Ba5yoWm1oqfgg6gp96y7uqYsGdfhJnYRw",
  "key43": "3ovLShJx7KsXrrcj54NvcqF14NmcCmpjaTXUfxxa4YTxqYVyvvTJReJkePyXyukbZYLtRpimJXntFLgSxWH5RHzS",
  "key44": "2Prd6TaUaRVraicLdMUaJT5a7ze99Wi7HHUC5unrwnMLdYqw7QnLxXx8vnX1sGy85tr72mxD1UeetDzaGuoDeZE3",
  "key45": "4NThSYFPnEnkNgqU6MEothx1GepXjHEfa8yjzK7sVwotPa74tEWNAC6QsWkf3C15fZntermKvyT9g7Gb1fFvdGfm",
  "key46": "24TYMBhmLgY14PNGQx4jeRfBNdzezErLBoJVhFAvJLrfDajJdW8X3Tgi2sDqpEhYyK33xDX9AmbXLLuLV66t3njS",
  "key47": "3aSwFhpw1E2aCR393qY6QTgvtZto8DrF8nTbjHoXYZ5AaXkqAUvNyNpzKNsr4pjfdyeYGrFeyx7F1dcbxQVizyby",
  "key48": "5DAuNz9Men9JY1BEWh9sVGDmB9Ha4YjPgvhh9qpURte7ezRXRyXdNi8cy147Eh3VeXrQqwXJy8ySgo7bwZo4G8dY",
  "key49": "26wTi4cUzGmjqTL79M5PUd5ugf6LZVRUf6wKhLzJtkkAMExXCQrUXm45TCxDnX1G5BsGQ2hNfZsLztDc7Q2bN7GB"
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
