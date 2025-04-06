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
    "4GaghkuCxKaGxvcCRtTyhNuBtCGjbgJNKztEzSVrS4kpBCh1YDQynMqVxafQxsj9f5d7outWgec6u1VS8PPwLNY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ax9EbgjazyETnwZucJgZvDsPMgGskxA7i1mSBPELgQwx2g8sUv72kR4sj84P6quqLWC1aN3RAHcipJfBsC6ACFA",
  "key1": "4SNDHeL2qQEYsVidHKkBDpFLj5pMn14H3dQw8p5JQyGeJDkuWmYrHbroe5NQASTHqTuGFhX3KZmpkP2BET1i1cKv",
  "key2": "43hsNTWCXDkuQHt58q4784a5izrtuBDGUmsFM4KwWr6pag7rhpjipFay84MzxD3LjFTV9CfX7CQp3aP4yZ2n8o8N",
  "key3": "5GLCiAcZwEdecZUyhsgwjPy4v2NqcuEL5unhsTp1jX6HqUQUjodjYuEs6nsyHptHEBJABtNkhzP3SgDcFrtnJNWd",
  "key4": "h458aRX5GaihtmFMkDQ9PqNmSrvkVsAoDgupnWMWReYZoobpt7jKSfQT9QwP8cygoinLydP321LmMQqzqM7jg9N",
  "key5": "PVJ97riveZ2pPSJs6eAktYkm53QMXmgSJJiPjYbZujfH6q4a2EiwcGbJ1mdVH4SwxW7uR4zc7BsdBUdv8tjLnTu",
  "key6": "G7jH9PTk1AqeTuwrTKudTQXrUbd6bHsqsh9dcwGTMx5UXZEvhwjpmCAKh7dnRfouAJjhSoTztdQdifoHTTfqxUg",
  "key7": "4UztpKoYUaC7LqQJh85bZ76f7JPkWQGvxExxgEXZL2dkcWVzpCeqA5h8GMBoBW2E52uMpc5T7bxecfN8DbNjGTz3",
  "key8": "3NYv69xmxEwjGqCTWo9Znh4ndNGREDcdvNMPqSz9kZKSiZoCFuhP1oabW2ZjeU1tJ8V5yujgzLsnh2A79dXPh93f",
  "key9": "yu7xg9aaqGSBT3TJ1sfeZKr6s3WLKXpt1DtpgAseJeBPVzbQbRBakipYWSetKjCoKDpr2hGkyAagnEQvGG9aMHx",
  "key10": "4bTSps8Zn8d7PC5EPkFdyQw3Tqpdi8Z4aZHkPvVXuuqwgQEgvHgmVeGkDMiSBAgbYhAHPduTsyX78xgjUHS1yJXZ",
  "key11": "2152X27oiJA12GD5DfB6PLG99ZyUaaQAh66ozkaHiajSLgwPsEWCUFea6iatn6ZCQWzTEXX3HVZRKZJiSeS7ZSmJ",
  "key12": "2BTezrmzvGoYeZuSYJz1uq2rwsbTbZxHiobx8ajaK4ybC95XFuGcPMpXgJThmPbvzuBFZsqyonWQxn5i1rQmsv38",
  "key13": "3LxzhsVK4RcS7XYacRtkpqRJM52uxTMHhP28TZWGBPkbrMU23ZgmAT4FmuNroqSP7sHUcfmbM51nWpHeVcDopgJU",
  "key14": "3eZhjmcSWimE2RsXJcuRJNkD8G8P5Hm1yqvSDvhZTTY5CH4XAEWbDxPEqYR1VnyUGZzcrhsuTX5xXkA2o1VDBbog",
  "key15": "3iPt25VRyie9ye2WqMcnd9CbHnaJodAViT6VpeBcSpfvXgQXgErYhuG1ENLfG7ngFfJdcRh4kiW2FQteVywDzPqb",
  "key16": "4REYrstweFBF77HGdLnuNQB9RvoGApLt4X61Rvd6n3HupBS5FkoquC3j2xoXc3NFruEnQ1dQRmy4jV2t1gJRT8oC",
  "key17": "2nyWBtzARQRKdnWTfhpb7WrWspQ9a3C62SYUpm94KhF6EU9U7YxDffLa5EG24TZ12ShpWXvioEqZRxBhCcvF4qmJ",
  "key18": "27eChCtFWcicbnGQ16dWLvLCHkf6g7WALwBA8nmSf8hnaesxMXuc4vdDce8uySdiLQpDS3UP945yWLeZV3dxxcSZ",
  "key19": "5GduhqpwD688gmU3St5YCSQr9dNMAz5Ucn3xjZyKC7P43HiB1ZGqDd17nCmTTpM5GopZmQJS2mUeKaqgCP9iyoDm",
  "key20": "4PtGzKjBN5KhTrE2awWWq6UFH3gDx9bMHM2Tm1b6vKUhhdYVH3CPK9Hi2e8tVaCYxBjXkGM1z6o9qC7WHLJ4wH44",
  "key21": "64K4BukwEXfYqzoE22UCnByhKiWN6RrgfLA3DRiAPdPjaGjcUrA3whe8AzvoA1ckgbhoHSNE1mHZbMZo3AKrZFZp",
  "key22": "5r8XyYiZnvrSiqzKXiPtAZ35b6baQoh3xM6ednQyRUXAPNH5ziYgzgZXyejd6gzzWGBnrpAPA41rDsNtBB6Gs8dn",
  "key23": "5ivxWC3g7hrHGnhaeKFkgrkWaqcgWGxFUkPmZ7jpget6UAqLxwos3wiirxhz3UVDRtUHq9Kv8fa9dGzUrrKKcPRk",
  "key24": "5iG6tCtZYhznFHHxVCrpyJ6FyReytkCB7bwJ4FxkDi4pnzYrrNBdkyFMvs8ViQmKMVpcMTmMUjYv1drPMr422s2v",
  "key25": "5bx3oq31fgLosFNfGbeNSes6LneqAMSzLAPPYPJJuF3Yhe6yh8YCuDAod4bTvN3MTHrXDPrbdvxRvsmyCVuH86go",
  "key26": "3mv7JWJsNmqaeGUJjjwrNv5osdx72FvpEGBQszqS5UrQ26EdhkZ4n1FATd17SnLPHFHwoYmo3ZwQcQRqAxofotYM",
  "key27": "5byC3xTQzaC14CHkPmGL9ucpmRy2mDuBiqCFTedN1cuW5sJvmuSHnSRNSryfCSUFx2ujkpkWMKyQF1DQuiDaBGUv",
  "key28": "61YT1ADCg4JTFYBrPyGqhk4uigQe2z6FowwdsfMVi2HswZX9rT9u4RshcThBRcY4Cg6RhJCus8t29zMbmm7StY61",
  "key29": "Fi8BtvepZKKBL4pyis3ygFKsrN8Xeq7ZJy276XsD4Lum8e1QKcSkRtsWx5B1Vhe5yM5eLeLemrDsvBCtBEY4cDS",
  "key30": "32tR3eDNnyWn1fR3Uzy2fNMKU2jFZENHgVBrj334sDpcGSxQqBi8e39DgALjkd83h3YazpGyTfkW4xtz266iziQ2",
  "key31": "3gDdaAZib1ZBN8oBwFxrLAyMFotXAqyd3BFGievimwvT1ktR34z4pjSsod7VSai1GYufYsrXMbusFCVDngRrMQk9"
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
