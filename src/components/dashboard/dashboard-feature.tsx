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
    "cuFEQWQDrvYJsF8edntD5p7KrSumxMrEAmJ8udCAVk3H8WgYJimVrcXaj6r64eyyxEiMG3c3kPfj734pBgNXAaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yH9au7JUjT5tXVkNCiPRHYFs16DL91TvRtqFjqmyUJWjcmgnj5qYJ1jYfAfzrHxUC37Nu8CXrArdaCXRZAa4kCe",
  "key1": "26qixDSmDyzFuqxxYWBg5Ks9X4gA5747ejsbGsN2gzMQGHVnt5oW2f84k3mxvcCc8iY9S8mxVzhYnydMrBBnxqbS",
  "key2": "BHpYaDEpehFT9WRvDv87qvmCVwkvHWyK6RiAkYpSn9u5sHN32WsHEKVu9RY6TCRzZiFyjfPM6CZs2pxL2dZ8vns",
  "key3": "4MQ6JZvMZCD6fzJjLkXV2sT3fzEUV6Hsq7QXi9ewcsEextouWcaEw4sczGggL1LhFNxjy9CYcTjGmGwhsd7h5SYu",
  "key4": "teXEXdgPm33Dd9GB9xZFmhkp2r4RC1uXmVza4cXTxWPHnjNccKrt4DTnE2QJsGWG9TphSV2Mg217gJUd7skae9b",
  "key5": "3FEFNZC3gB6qf9GcnZwADMBVSQZjhag6q7szcTNyvv234uXueNS2yDr19jHC7eh4fpgWyKt8pnfUs3mh9YKZXjHu",
  "key6": "27HnW7wVpH8FUo5bjx8wuGtvLYqLPoH2byKFaDqJJqet822rhyn1fzhGZQJQxzmFsQrqG5tLBqkNpzuk1LktSjQy",
  "key7": "5YGsy7CGWQbz3D6SANSj9RjMguAwz2q3P1TZULW2mnSTKkGU5JS9pSGov8fWj7hWi4wWS3ZYgtehAR1GNVk1n1cN",
  "key8": "5BAts3eBnPqZwSD3FNmXB2M6571tomvdQdK1TjPxRDheeMzz5V6TzLg4aBFArjSS67Sj8epMnsxjyAURycuGayiQ",
  "key9": "kVuAgN2cGAYGqpLNAa937AwGrdsR7zaicLKD8VBPoGUWYYb6T2RooszGVGnFTiNVBTLmMjDTqBm3F59m8irGeKA",
  "key10": "3KBxLy73jvzTsuiz3Pjb8canWsCpqLzixTifbterd1mv9hZz5xva1DLxAi2zPtAEEuk2cptqwqt3d7vrFCqwDyW9",
  "key11": "3hgKvVBt3hXwNym6uEE6YxdUvXXMHAmDH9tjDsWNpaLUSekp1HKH9MrDRbiQ1HMEveHaePKFcXNXJAzTjAb8GLv1",
  "key12": "pDaHAAhjoz5s6sXn3p2vnu317LPcrAKyM3DWqG9B36C8wyyjmbrJ1FCF742EhWo9muUGAkVdWWHtK87NyvSk87J",
  "key13": "5cHVMwBLvy34AjEFhTifBitcDwJVhBnJqWUo6Nafq1EKuw1RShyGMmrtSt5t94ZNWSgeKYewGKRGPGnp3axTV7Ni",
  "key14": "5qiPWvnhEGt5jqtJskgboYDvBKnUsytLv9tpc17EN2TZYNEYrc5qpBkyq1KDik1R1wECVYoGLpT4fwqgZY9Gva1h",
  "key15": "HDvmzFxnoAU9ZkSutRFCVngMHR3s2p4qN6YvTEU4XRv54vyHxJ8NbJQuse13qbfGBxkcgusP4tCLaw8dX8kXD4g",
  "key16": "2Fi3zJyKT7NrNhStWJrzLgWFt65igCaRUVC3vWweP3TNJnNP75W19qjbvXwaG43kUGbZ3PusUuvMNYtz28cShFW1",
  "key17": "5RmnWMq5nMFAqMeNzZwZNr82H89xo8YyVr7WypQ4Z51zkV5mtHEUKKou1VQ7psLvrXc6ooDiamUgvt6nCnAdELrQ",
  "key18": "3H8iS26bZtPQTU1WAJQqtNDCQw5RVFgUKVePPZWEGxpJ1bHYWQR2cBV72cMkMLD2ptsgRUPa4ond4vXvwo5ewQMV",
  "key19": "2YoDmTHpNbv2rv6Ni3Qk3vsPYT4Fyb26KTi7WR7FGR6NCZz2LrmkiHJuoQgUdz48e8SmDXDFcetN4wd2Ch3MeHZD",
  "key20": "5J4G8Uasu64R3YHPa9MwqhvjfuG6AKUTVwMfRLRzEiPLQdBVM8b9xkD3HccCXBwz1p4MB9YrLkcmssbQ3cbWhZ3U",
  "key21": "4WtNaGhNrWEn6DwE8skomAYmnTy2YUZkcyuRo3zovVdmkmJwripVLzqMRyRAG9kSMYEa35Mej5W51ENjoySo8Nxc",
  "key22": "5DdREmq3TdtNSXXF2gPfvkKwenKzLnh6y5rfEye1DvVouVSBhPfeCLA5YvRDhTtD31XY8GL6EhDSmV2g9Nf9zSfm",
  "key23": "4fAYJizVDp2GmPc15axv1QnYzauAxBLpf9SK89Fk5Mi7mtxxTCDskvJ29hv1qPDhdQuCiTx6BHHttzGn66BrRZFV",
  "key24": "2RrWX37eyTyk8pjw3oYkKMp4kh5Db6bk5w8E4ehy9h9MCbbrwoPgT6dxN1DxBd4tJPonnn32hGtzxbnX2qyG5Vnv",
  "key25": "4fkGFfk5U1VhFuZHkL7wBzuMpDTRNHPjVii3WpgPZmZVBt7NbVRP8WgWAr7bqCF7ZJUy6nHA4EHJb9M9U4P5t7SN",
  "key26": "5bAQjsS2qnnh8qVx4f8SBJcKKKV7WaqNUTtdxKjxnCN4WjAPoeNpV7gMfou7mJczj8HUMqAMq6dwaoezQcsFrfhh",
  "key27": "xtjRRUp4GE8Ba55osXFisaxFsLyT7mgXozPqkVKkMf3P51oc45NaDLpfUmRjkXkjQdPcG5ExkkKYBR5ADMzvAMU",
  "key28": "2R6HafG6KYoPo6AziefRbMWrtNuVuuSnoA6Jbci8hWYereTrEf83P6F7wZWuFqHDzj5qNSH4fMvABWxkwQYspaAh",
  "key29": "3gm39KpnmfEzSVgrDjZrCd8VN3BEBSM3UeFmprXGCrcUYwwkKLDrEsxRJvQZPTGcniZDX4asSMuKNwD1LsEYMJXE",
  "key30": "3BQkUvmEjfGpiWxY6fmpjgcQy1z2J83Pngvm6t3mNmu3miFQTHLQ7kArXAkJocWrFzoy2cScKHCq6BTBCJQxum5d",
  "key31": "3GjJysjtWtQv8fJZSPbceaVxEjKkV9fjuHBtVvp46hunzeRjACV4QHx938RHFRWv4QC3Kugjz1KmkSScbew2obxA",
  "key32": "3VN6zsxe69CxMLY87VTBTwCBfJvAXWLuyr9ieW6LCMnaGqHDxEcerZSuhXbfzXegwvk5h6jVBB3yYxKT39HnHrnQ",
  "key33": "4WaT98cpeh9LF8TYDV1kS3JQceoXeR4gUsyoX6EHjhmoCbYNEzdbeLMAmcoBmVzXKekh2S3BndTSKKtfVAxeXs8S",
  "key34": "4wsxFtjU7RnkxX9PFQbPkYmXaUvtquZHQbFAupPCDPwLSxNkuC3BcHb4GN6ncifQwemCcAeRJKuV79kuDEvBdD8V",
  "key35": "4FbiKbcnRcpLg4C7Wq1YnyrwDoHb83exc2GvGv12ZTdSwG41JNkgaRSX8swpvVSpUevDVxaxw4LwE7q7dT8nuGm9",
  "key36": "3BwCEoBm9JLwKP9cdsRiTntuSP1snnamdY2fdsSKMqUAZ5KLa6ScDopuNYNbjeV2DvDZfJyZ8air1nECrbxUWEki",
  "key37": "2pHV72BRYgU2juej26ZRpgsQzb5RnRdcD422pUqrsHW1HtdVhXh2QYGJgZGNpPBJyshzrvbJQLkR7sCM7Bc4yb5m",
  "key38": "EXgLV1iQJCtjaiJqnKtKBz58shEAFCfwA3Fk8J5NaGNV6o4SDCW9THAELbZrS297Dzkb7kou9FPYxKeqqfG8Hce",
  "key39": "2yKqHAA7qu99d4fGnWTkMuShQPAzwVepbrgrjEygY6NMJZyAvnPHc5LJpapyTLaoqVtqxBvGQY7assrZahToRvDG",
  "key40": "2DDxKpWgfLMgagfAMZcvJby89s88dBEfsFk82r7qr5hW7RqFFi1pnEKYbj6vpn7BoY7hhotXZMV93sQfrY1Ve4Wz",
  "key41": "2S29uv3WGnCa6C5xuU4MrYMyM3c2UggJr33Q8J1wBZTibwhRSdejsekj8GbC9PsQDGdJnrqQUS5fbfuuAEZz1opM",
  "key42": "4otnZRmBjqDjPZiewKvAJR82UkJHxzWeKDZBi3wCsj3i5ToW7gXLHVBupvUkTj9hr3EJaQnL5bvZb9VPzuuJ2L2R"
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
