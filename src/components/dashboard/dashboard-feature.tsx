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
    "3zgk7dpyg2Sb9mAmC6B89PQ4z3XVjtdnbFisJZXYx9fbDWZG7Eo71k5gyZVpPhHczP9KWjpyAgrDkdVEnhHQr7z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o688zQx4ZZFnJpuTLCHkw3inKok3q2DAUvrjDRcycZZHjpmwAjBPGwfN8rX28gHxBvfwaBA6fZuM9fn5imNhutD",
  "key1": "3qYgjgVY9jQiHJyn1ipKT3TW9G5ZuHe1xDRksvGfzX3FoshtF5yy4MmMo2acuchABvWAcYdkBzUuNYKFcV4PjKNo",
  "key2": "5JYaU8PK38DDrwTvH5ALVxY8w1P6uiVVF5mBGJ2GsiHBHXZrkUrN2WwCSw4VRypNXdFW58rNobpt8gC6141By5eq",
  "key3": "2GNThs8Npoh4ux6QHMy8x8n4Vh9QTGUrRxnHkZPUh9zhjjTE3KQn5REYjFNNkFZQMGH2869gJd1tcTvdg2pLmjE7",
  "key4": "4aHMoTfhzs6gn4B4MUQFWTLNCBN52Hg3d8gdtZit3u2b4iiaYHqfkTFUBMP1AuvxEhVtGHeSizS6WAWBfhao4sAz",
  "key5": "57xgwk3DMwANh9HgNsbNLBoaAUg4yX2iB1Qu47iu9GJTNPvyvRrUFHJGiew5dUUhAwB4uoscuABHmVyh993jgoE3",
  "key6": "3JZHqTV8ET1YSUVeMZjviDW5ow5TvqstVgx2Tj6sKtKRtDV5YFZcvYCvpWSC1TRXAENtxorT7QxZVKYMFdhPpVtR",
  "key7": "NsyZqdhWcwQ6EjaBoGZ8B9BJM1etbRj5PGZEJ5vtnRGCLa2Kykh4ngmL4ZNTxcZN1guWNh1ADDMbNpuMpA1jx3r",
  "key8": "3a7QPtZZNdj5YAeYfxz1oAaKut9GsJq7J1vaN4vtTK3zQdgyEYnCUHcVKrS25qqZj99ahtMZ4GS54WsTpW9z6bJT",
  "key9": "3eu6tkcU4yLazkTkGKjM42y1U8dqJi75MFCnS9NuQqzHm82E5Hwr9hY1CvBkm5mhFY57xDFhRa3j6KSenXReMEqR",
  "key10": "2NKBkU8vFeVj7dKfNsmSX1UyQvfUsYCBU84v1Yq1YeM95yqgnt2oiaGeA9hTgKiBR1QEktj9odQ3FNmSBmPbnCjL",
  "key11": "3MtuwxEModD5vPzQyC8EucUxTkpaUs9QKjX8T9hxcuSq31VKjPpQGVFgyVNvucPQXEnPdnDvQtLzHZ1oUp2w2hU",
  "key12": "3B7BCBLcBFis14VmYuYo9J42zBUYfhJiz9v5Xb2NcaBsR8DUpnJGWFMowTbYTQ5DsodH5ne8KmzZaRbDKGfjRiGh",
  "key13": "3pyAbD5SVP1jV2b4br9GQ7JYjgacbRXvN3TdghZWzWt2JXW5L5MAJQajtdy4XTYMxECXSSdbiomTZZtJFjqNwWVX",
  "key14": "3mbniCgHy88xvA39r1zr74i7KJ4erecvCmgn7GkZt8mBsdH5m2HjTcx7taV5TQSCDRgiZzJdad1tmBWKsmoe6wyp",
  "key15": "5tBmyVV5CEaSgm1Hwo5SnqStH99Wgispzdj8AQjisDtzNAmtKrMuvxbv9c7x9ytfdoC18bqAcbW8CGeBto5H1cUD",
  "key16": "2rHp5FgUd1UTvfdSbrNr8uRNomUWJHVjjYMXutw1B1XeEsPzbEUoDcJEsdFbnDQf7Sr4tFy3UBY1XcrhwnkfXseC",
  "key17": "2wo4x5qquc3q5ykBEqENvYHWMXrzFLaAYAVpURxAC1FdHBd33fed31RWHb6u2jXVLrdufQnpHQ3uAwojZ4Pw56dc",
  "key18": "4ejTgtzwN4puk2kEWGzqcawM5rB1nsGSmPMehA2rE4cr5L2EcRRsxNK15rPypiZMUJXH19khvmzcxg9DqmX5NcP1",
  "key19": "2rKJLLHf2RqodzA2yoksXp9E6B3PBqm2mACwVbs9cNFGKc8E1P7eGNgVDaa6h73Pa6HGW5ZNMxNmKikrtCFro2mT",
  "key20": "3PhGfA17sr7UBaXYjrAWJto29J9A3iiuxDyzhrEaSXHtSZQmdmDyMLaaWB5S4TTbtnBHNu9zwdn1vRqs2awE5SMK",
  "key21": "LAGbdCwPHGj1VHsRAQoVRXFcn6hE9XgyZ6CrNeR5v5a4QRprxECteDcFC1ueF61MzYk6VcZKs7qrqQH3V5d6RG1",
  "key22": "567BMAazgemV3XLQtxgzreeEHU885QF8w6vPPuWM2H38hSoDVRGaDzUpYavs3QujdfJzYsxTRnRb4qri2nEJ9V5N",
  "key23": "4eGizfbEH67JhCerXAFBBp8GCAhWim4U7QwHyces93qXoi3axNgENKiaEnFCvn2gVfrt52dKKc1mcjHR7pnJERHv",
  "key24": "54reDCttmZ9sbUcyQcWmzuAjAYR2urPVkfW6RqonpXXJrp5Vr4ALsikcB1wo4xFhp1hWjkFLm7BTvrKL8N5Eeij8",
  "key25": "5edMDyL71roVRhQUHq1oTJ7tJoQ2zKM3weeDofVbKVQdnefzzpLrkLs7NUZFqMoytEgyzESfJ5pCoCJLbg5EVVwC"
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
