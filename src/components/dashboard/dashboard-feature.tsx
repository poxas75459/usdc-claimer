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
    "3UXK1duMLvragRD4ugq6GsfSmwGimYQuesXS4cJtANyrYa1GckgQ4xu7hJWGLGeS1daLd69pAo7ZJoaEwEQBnrK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amW7s7TWhVSQARuojbbJzWV3SSYfucNNBnBKyNonv3skRNT8yNMrkrEnPDxcZJXFfozsfjbBHG3LkM4SVDspsgY",
  "key1": "58pHFMHSTxx7JaSXi9xFzQ2U2sfHiWRoZmDgCuDaxaV6jqjg62FtYEMJ6oe5VmaYbXvWwp7FYfhrBrABgvfJDV8c",
  "key2": "xy1otLqykgqzaiEGbTCjZ8oR9P1r614Q9WYL9ixKe1256MKeiK7ZLb8ZqXpduCRHhC15QwYukC2awTz69XWKoYJ",
  "key3": "3tBS1qxCF5yt7zD7mMuoP3Amz6ANRebRLwtZrgVDvi55c6HvpeZnfojXRXVXjuRDP5EAmVSJpH6pAEcYTwrKzGe4",
  "key4": "2u9T1oNj1fR2WMXR9ngSzLED8AompKwVc51ahPhZW2mbBTABRaWPwwLHt5PiLT8AEBvXofpSk9wt3ketdHRZ1Ap",
  "key5": "4QJ5TMi8qVWtCJsEFyxrUHeBvm3HhQ7vbsvrcvnaxTdAmoa6TNHxU3hsWjLUGRAQnRDNCipiR3RTXddRCFduNM9H",
  "key6": "bprYv7vyAFYnbJ4ALwjqUexDTt59Vheu2CdZWj5Kze4zRw8aVRz762NouT129DdLfjvaBE8qGTYtPdv3RVmYMJR",
  "key7": "53EYfBLoQoAH4krFTFGkpgwuDEpiRpLg5PP6Fcj3SELhE5GFBPjRDX9w6PE2tXQnQqioER3xvNbpANruEFRsyfu2",
  "key8": "5Q2cdus6aRx7ZWT9K126X8PA5PBi9t63cSUrQTMp2KhgnEtJHsy2qmBhxULktuQXxyBHz479CLhzi2NkbWVrBWsn",
  "key9": "2hWSUkE5uS6ThV1y6vZipuhBdsJYAp3Hy9Cy5UkT9CtFCikhUPcK6MwMLfPCi4PBnQGktT8dwU7Su8ymgu5KU5DD",
  "key10": "4RxRxwbYCbbRNpYZ5T4GEiSAMEexpXqumkqs7RAstCJPeJB1R17Fzdb4LGKGzxXZdSenQjPywAEdUjfLaCzr6zhx",
  "key11": "5cBxee2EDWqTzCQMDgTLdwHiaYPJ4tcJ3TTcFdAqmzzXjDAowvt5ax7VdFWCbriwGybVdrF4fSHJdXytoHS4EScq",
  "key12": "3UFoGgH1WP3gqk5i6AXGz9yDmfPNfMLkQ1TbqYz8fForrvN56y2eTLdJuQrW4k5KDrNxfPwSfJUC5ajewPYZrH5q",
  "key13": "5YLXq2G7KEusNmSMtLgVBAzwb6M1F7Y5cLyaHnZtp2ciHr5WiGsbpftgELcPqbWWCNYHVMszUvS6UQzapsJLdnHT",
  "key14": "mw8hRL7rLJLWLRvdAsKLKwQLkgvDo4PLkN3r6AdsyPeNwrykVMqpcDgeq6QhP5Jm4vRSur5bcnTjF9BfrA3r8Dw",
  "key15": "2GYucr83p1Et2paJxf86vmHrqtaj1cZNwJDuxhAt1pg1FKCDrvyDR2umKPiaPkxcbczBT8n2M3RmrxT53DVDPbj7",
  "key16": "2F7kgRHqUTY3psL7jSZpkWXNvBFwhkrERBaAZrodXCtegxnfx5P43pxv7aijDKMwTjn3C3tffoSaP49AhhRtWUwv",
  "key17": "3Y6ptLfHM63agvGFguGtFYyKyX3V4wBsjKXjGArDJ7P7hSNRPXqZcVLxDpDyHWFSiBggwABqB1huaJ4VeaK9iwXP",
  "key18": "2D6axHmFFUjW6dMQdk9DEHRZPQspDoX5srHSkkLhs4Rfc6Wk57vt9Bxdxy4Jjh8KrJvpMV216TZfPge4aq9HD3Tu",
  "key19": "5sbQkKgE8DeU6PZjC2mSQBorHY5guwAAFArRumxezGzvb541bFP7ohmZwEyvwwcuQ5P1ihEe7HzPUmALT6jBiWp4",
  "key20": "bxsy6SC9NThMqdher7ihx5HCosKpCpi96gcaxPDJEDWZ3Xp4yC5jzhbxzQH7YPU9aPb5JAr4v99NZ9J1sUSrB8H",
  "key21": "5uQUowUnReDvZXuksPeJdKEngNEM6GVjQtoNfA4xmQTBwsu7b8F6MVuydmt7TxVT6LbALDdkaR2r3QAC1gjJsgAe",
  "key22": "2UDrNHPQBJz49Jw6eq5UsE898WG43PEsXi8Gea5gkBKYk5JoTxtGNB4XB9GWvWqptLH8mJpvB9mtUndmJTWdin4y",
  "key23": "oZtjAsboY1WjYMfks1PxXzUd8To1RJaMbAegVw6Rpf6fiwEUoFkSqdreqDVemeavTBnJH3pMfWSCKkJjxZ88tz8",
  "key24": "325d62e6uqZcaZJ48gksjouS6rFbK91WBigKMck771Vq5xpXDWn3ZNqUbX3dKAKVTBfkzVwdGcAq48yUqtXDVCMS",
  "key25": "2EMmGb3mEhok7DtEoVYrcaK6pmGG1kew937QQXkjhfrF7pUjVqazstJx5wbYgcomEm8GLNDL134MhdPSfro7VJFX",
  "key26": "39rqmfi4b4mycnkq5TevQyAwThzhmC3dYks9sJNZT7cMszktpn3EpoJ1LyRcnvreaU5xdYyKp77U1kCERCcGXhqP"
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
