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
    "3y6xBLhdqtoH1Ji96Dz6qHioWLvrTLPtjbarEtsX8M4Gp4QyBERHBaCRVQ9E9j4QboUsiisVTgGk1sw2DSiScTwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29pB6gDXGvCcT3PhWJoHPukwgGEq7Ji9yHmEAHteB9pxJu48fPbGkkG1FWfrCmYTKKwt2egjDuNjSH83eAkt18wc",
  "key1": "5aqcYu3akfajj99UDNodFicpSVEcNwLdJW9xVYmH3WNsd7gwLJYP7p5YQQZBCxMCmv8c9WoAhX1Sf8wr5unAMDwU",
  "key2": "3Ef65MfWySh546W6rKRTzYPFwRqdYhJJEwFStjAeKyXEcQr27RhRHt6YJqmNrCesXFoRgnSTQbsneLuNTWzQ19Qv",
  "key3": "4tpXs2sYhMLBWD7nyeBWgyXrdCnaX4b5hKjozSs2m1nk3gknkymaniMWifxG3QeK5mEmaMSijjvp9YJn3cfp65qA",
  "key4": "WLHEPdrwFCvoJtdDbep2LXyAqRsU1L1QHnNvBfDUgr7ESAQqXoDXBFgB1meBwiT97KPE6X84gCC7QeCGU9jqCwq",
  "key5": "3GnccUgAoeyKVV9u1YUk2KRAQbsKHvvgEPjRQ7SR4UgFy3MdrL6tqiXwh6avgMnDGV2f6jN3by5zKL5geYSf1qQH",
  "key6": "3XoGiAYFu3NuaQ5vfwQ9J4f1nDWDgD7c3MEYrvUJqj7PYXd28uifvb3DQ5e9V9dmSNyikLzPXxuSLDjVrXBGrNEX",
  "key7": "e4JQk5ZG9Yu8NHu9KQM7EihdG7sRWGhCopQ4w47Rk1t6yMm7Ad6MbxD2iVzSQxJnaDxTuqGupNgm6X6dihNFgbW",
  "key8": "5ZLPJxYvzjsU7VncbQVxtT3ZjcZWyWhstqucM7xQD2ZSiULdCmpsSTq1vkrJYBxw53BxdxXhkTRAVpkvywFByNxa",
  "key9": "2zSiWm3vwQQYgzVUNxFARh9m8DsrnQ8MWrRZbzJeH5gSUMWNSffLDjGAJm1npgaaNhZ1zKChpYxexiqZ5tbZCXf7",
  "key10": "28K3zbyFc9xbHbqTe4S5V6V62umY7JsicvwVpSuG9jphZkEYQiiCTs7Jag1DVESWFDWQBcxhvNk92wDKYfTftUDG",
  "key11": "2JXoPdPzzEQFzYBKNfuH949we9nQsoTisRt1ukqy4kPfURgarEJaRBn9eUv7hve9AnUcAFTxZMdrvn51xWRr2EG8",
  "key12": "4bBoMQzvLebj8VrtnUoyaitkwbLRsjzNyiQ73puoyY77psDwiTTgPuYL8cJV6aRcdnyXW2ZTn1F8UjsmjGX77WtS",
  "key13": "2cq5JqPDxoaGYfkmfiQzeekAXE3sXJT85YtAau93bj12AXt8iDiawgptAX6WhUJk6T4DcFCc9QAYpxwWMS1iwsNg",
  "key14": "4LoY4uEZSddi4UginEXJzuE2cYHmJX4hknmgetA2ceUitujfq5Pf5H5zxLg6LZZVnBMk9HNprSr1ZSj3NFwgeYGr",
  "key15": "4qHBpcqspkK52rtpXxEgAbHeWnP7CeHHpssfUAsLN1nmqkj5h52FiocvtmRDZfgQCSE5YgCQzm7R7B4VkcJaJFBJ",
  "key16": "3zVxhZJS3nXxgG7BE2jYFQAZ4LTpxmWDu46MndMkHL5853k7CHZhFe6yzHYpsNdQK1XjYjJU1vP2tSPcPk5yCpoJ",
  "key17": "3xZu6B4rV1PFn2qe9Jr9HJnG9Gi9cSRnTZg4BEbJkwJBadrfYiLTip9iKhndncGy8oRUvao7ys8TSWhiGeWvHdc9",
  "key18": "WKe5tze3dZYTFfPFf5NxzKTPUySjQdSxKjXj4e1E8Cka53WzF7YSG7fqpnPnV3idY9saYg26kA9QeqxGFeX4ckn",
  "key19": "3S4jtbUVHA4DpyiJttNQBrmkMcfqiMjYvKdd3siStBVqAEshPVmSgUgjEsjb16fLzHkXsEqa2ucLNBR4i4NbU9w6",
  "key20": "MNVYqHoMXL2vKASCAUGZhbYLUXU3WiobEGHupPuJcKCJHfRyDF79sBT69g3MFEFDjteNsmU5HWjurCHhMneCyBs",
  "key21": "4fZ7xN83CXZsETA4CZpd7NHrtR3emeZWUZRKbPBxFxpEBEFh2xTx43iRVaw7i55LCMH6TdhAbJ2a21MchBgPHRiq",
  "key22": "4T5sJ84nM2gj68zXV22gM6nLb8YPeJxrV2ThN1WxUTe4FAk15RPHTGdU4jAD4D1zA6Cwc1c3AgmBDTbMup4bxmg2",
  "key23": "4ArvXxTP9uLBFAPsMWynWvmUVBj7YwDvCXdrijBJCen864pL2zA6KZisV6ibEC7FMJbP1bh74QKtWsWmQQ6UUEaC",
  "key24": "4RiCouueuJktWuQwxfqBAxt66pkFmHifRZ86kUNKaz7fnnTHfff3XiY8KQwotrMXMJSWoGSzGqFT4o6VDHSfWf1z",
  "key25": "29a1edjN2octGUBQJhDy9Uavs5ZhKV9GTC3gASfCUJ7uqrYafbuS8sWjDn3LrVwfHczy8RLRQXFtwtUDG5yAXnf6",
  "key26": "4AyjFVdUwXta4x6VVheAtTEaE5HZZAfm6CayRvouoTmwpC2UpvwqFKNcJXnL9Ty6pRrW3THoiDqQdQm5ABdoVZ5j",
  "key27": "oJKG1jRVb9X7oLNsXRqGiuq7V3B8QuAn4nURyJgxbjZjFvXY42AfVKg5fYEvSfTFeBKSsuoNo7CpBBfDyr9ZnTg",
  "key28": "3EQbyH9PRLV2RsnQWbvPKxN86T8JkL3jZ2HYuS95J9vTxCokWFD1F8zbASx5rYo7qKPwWYtGxDwQvTYw9KZ6iDc",
  "key29": "5e4pDRyZvyasEcbkreicbBYLQqcZpd3qZERp4L6pdWUZEuxnPXBB9STtMQsHLSNT6obVJwbPo5yQ8d1j8i5h4KdD",
  "key30": "3YqtWxZdH7Cd4Nx4MCcTLYhogawPDpnNTERVJ4pN5uxLjorwLzmagG5L8Bgk1hNoKDoBJ7Ups4YLxMkxbiJ78Xt9",
  "key31": "3msEAWUKbJVVk3EuV8SedRAU7stEYdYRSL4o1oooXKxvFt8m7apti3Lmk6TfvNDB5vt2623XZ72aD28jWdd4w6XP",
  "key32": "4Yqk2KDe4Q4ssDRtZPYEfMAKZF75nHWPSrP5hoqmJ2eMz7FnTGZnVJ1xUooxvUqxmoYddUdCjfZUfq1nxiah9L6E",
  "key33": "2RtSLadA7t1kjFWkbjLYQTjy5E8Qx2rTTEtDoeYN33BtFfarAzLNvGAnhduLDLjhkMeyuKC3W6NciT5RyeEMot8W",
  "key34": "673gcpsTXLt3CRQwCN6QmZXg9GqpTTRtYTwRTvVFtyBKp9Ubsb5G4e5oGGTAbUW9Tj26Eg25ABeMpNRxAVSUZzpt",
  "key35": "2n2NVWrJi4xjR42392omJgkBaXkCMwECUY54ABPTfQiFXHcBLWVp14pvFP8smStzzpT7gJqFCbPrPaXoYAa1zZkE",
  "key36": "4PhTZFye3Zc4MZbGzLVg5M1upczjwNQx55ag5faMUg3id6gmyqbW1UeYTdq1Fpsa3W5ooP4NFGV9sc7TBVhKFUx9",
  "key37": "5v1noGoAeESJZ7tEWuXnqjetfc86DN74pyMJJGGhJ7yVkYtbUt8yuQFNsH9HXWzxPTxronL6aAdaz9D2dFC6y47H",
  "key38": "5ko36767ChxnfGkpfTpg4Xa8AEizbxKno5FYVFuz24pjbjgrMDNXhRXAPbpTnXpmLQTN4hGsjqa8ENNL9RLLJK2c",
  "key39": "25iDTugbUfnX21CbvskYefva3nPR4MaRqnhQY2Ah4tJQXowvK94NTRxFiiphHEbSdSfXiB4TGDgxBr9iri1uXBt5",
  "key40": "5M3WK9fdZoZVHxeva6GeEcUdtMt3JaneLgM8LeR8g3GWoehHLFmrS9aDJHVSXDt4Qx3QrkoZYKqDVhzYvJZCvosF",
  "key41": "Lg92euhvAyBsRhC3RQsKpHb18iAzsyRzvrKJxTXGknksJN46AtMo7H2oqDfTJbhsaR2J1womCpvtUD9nYcqVJhu",
  "key42": "SrXLaKxfTFhmyt5ZNrS3rGpxYb7D64GKQw9umKtJkmXa8MawjwqLPFjDotHA5m1ryrtgtmMMBxT6BFW51MsLYNd",
  "key43": "2ufiQkUQg16PdBAEFfVUz851EqTquzHnqMVQuWJ9i4bXe4GnoMtsn1dHbpqMVjqYnHV4vqkG9jmQrKAw9DtxFp9S",
  "key44": "5LBFW45jbubYEyxxwwqFCiE4QvFra2mEVRiaKToyyv8MVSD5XBm7ywXvt78n9ZJxPkeuJzis6KzeP7h43cbkSVe6",
  "key45": "4YwLB4iFDE2cYiEcHM1G4URrJHQk2eekDX45xQBc6MKKXp3gVZ1PHcS4B381xjbZnsU8GrQV5gyCtKB7dv9rTX97",
  "key46": "42Hg6akU41Phwm7kLNTP3LCuM2XBpdXTbMgyhMJdJCq7tQcNHVPV9Z7dCkhmrwPyK6p1cfUgBCYVYjHZPpYvEJJB",
  "key47": "5UaB9GprpBzUsAdeG9a28fmVLR4hTccmAVM1vQwgp61z2TA3o9X4oSaSvJf1zwMaruSHMRxTPA85rFzENkUbQFeW",
  "key48": "4XU87mU4uRjM5mfyWL1717zG2sn6PpeKakFy57SwVeASZMXTWr7AgvbGaFx2pm4Es3khfpHgh2XUfa9hipjp29gv",
  "key49": "3JHw3yCm6Fq2QUpGWxd4cdL9vihiyzDoUPs15qmFV4uNoZraiQN9WTw9hDk9943G7Z1tvWMZVprxaMUMTkbvESPN"
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
