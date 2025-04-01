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
    "46Sm3Zfo7wCPxWwVFa777v8VyNd3TKAC47gr9FCVom7mvt6kNd3Z27JEJZXKUhzfZcZuSpakC6ninxmji4ynj2wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31bSyba3Dcz8a9xyJYPFvCHzyDEf5hgj2uzpp2mtBLGcTiY4XcUq8m3d9sNmV1aMXrp7C292Eae17S2saZhAFZ9W",
  "key1": "4TLBrjgJVUZFXgvHo2gT6GdkUutVs3oGpKs6dy8BkUXJxSnRbtMNtuQZrkQjVAcn7WADKST8JhEfTy7VtHCFsfbK",
  "key2": "35iNknrxKcjxziBfwYRncoy2xTv7ySa4xmecHZcUnZTtbFB3vbdciteppwqRu2Z83ciK655nBdHb6Fcvwms1fYwq",
  "key3": "3KYrw1yPqiXiNddMdGKMQwRGwExPogH2bzRseZT3owMuUYkcawf7kenaRaV997z6unF8QctTrAHqzanVaZipe48R",
  "key4": "2dn2yDBa7ZnBH6oufDGiT2W6wt1W6MZZ9e4kjKsVHvKL2spMeAq7QJEuVoqydj4B3MdzyxgUReBE1obofgqNu6Cz",
  "key5": "XndAZV1JT93GXnnVmhP8m3CyS2wCsgsKDsNwYCaYskRQTdo2Bd5YGzsqtxYx9DkqHh8X8TkD2oUcsWVmcdR5M79",
  "key6": "5FTJ658tZD5g5deCnFz7eM3fJRasDdbFxdjn7BaryUxtef2Rcx5KZK2k1fpPUVN6CDPDGNzyhnQQxpwsA1fPxbHB",
  "key7": "25Q2znbZ9t3Q42Y1yzQBMFv93pMHn7KSems469GznFRW373zU1WmX5GkAoptZVtPCy7ej4xDSnRvZ4tX4zPMoasv",
  "key8": "sfeMfWCFxv1G93m8qY6QnRMZyZ9Enzt8cu22eFcSN7snnnWnSeTLQBBEYhxe1gDuamueKinqoL4sS3zSTbVqcxW",
  "key9": "3atibKekbeuLYkLFapm8qQfeVxxfYv7sF92NA2Uoo6YdKd3mWnxDCs8MxiUobqjvsi3SmYLHhNknxpt3rzyVHuJZ",
  "key10": "Ytd5PwmngXSQZcfyG9tDEZ1XzfH8hePnsBxHXGfdKLK3dcaGr8RoRtNArxveMiTbbUKsjXXEkmdkaNsZdg7isJG",
  "key11": "VZeXxaxunHH1CVfmELxV7WUZ5nSyAEA8QYa7oVZszvuDZSc3DyeE2Uja2mDTUDX4mi4zyqbknMqrQVCRToSdk6K",
  "key12": "2UKYcvntQfuS5p6k29SdySAMn2tReXuTc2omAAS11WWfHLSBE4eVDN2dwwRUPaDWvuYfcpP9CpzExNZCKgxnSsiW",
  "key13": "apZ4kLo3ApTP55e6eKaTy6LEDPcbMNVdhL4Rfuiagj8APHyMAuf6EXgRMD1eBXBfPD7R189bqZ39s3f7tiqeU5p",
  "key14": "4nUUwaTi1wcwgJWVBY1y5SQeDnMyndEZLaawjt2DuK8HRUGAtjXAkQj56jPYNJ4qw69urNANWZ1KtyWveatxVbnk",
  "key15": "5qGFY4GR9Rxg1yv5UMRb4zafWVQMq5guzFhyshgn4Gor8jonZ7WHWJN3zMi1yMPnkVPKJc8i59q2kU2ySSaUoFVi",
  "key16": "RJUxxnkwd67AtvjewoMLfwmRyWmo32kmBpBfvKgHU1xASLTy9c7oG2LYzdwaohyqqJZyw6XH7w2nMXg7fFARM4C",
  "key17": "Z8N9DHFxqeKrUmu6fTFb2c63Ba3ZqmV26BYcTNnBzCbRP4re7S85GNtL3jcpRReaeZRvJ9fCTGZgxNE4hLEvsMe",
  "key18": "5udtUyH3uUk6HthiXyi3pCgH5aCQgAJRWDsRvoEVkyrksD8ENVAL29McoD7nKriWXAqEcSmC9wF2VW5hr5H7pceD",
  "key19": "4AbvpPpg9XH44caNnyhaYFVLrD5ZracBHAy6fCSkKAYEMZ29LdbCGDH8LZ9fNiqbiViatuykgTxGefZVctezzGNE",
  "key20": "4gr3S9wgtVFe6P9VEXPmEeb53XZx8qnJ9PhYyU4q35DGVxBMVjWR2HkxaBgEUL7YNfbDPycHHhbmTCg1JviZtNHL",
  "key21": "hXPby7fU9oMyTn7f5Mnunir4JVjHPMbGPwf3jWNQsCrgm1PD11gLfYZVYR7kupjESV2CQ4oZuHBvGG8swngvuDk",
  "key22": "37xAjR5Q3rwSDWuKmCBAoizJNCYPVVMbtHPCrvpbnuj3AzxDLesxkuwbbdA6f6D61PyyXGcXRYMiWtyzhkfggERW",
  "key23": "sae8wS6QCi9hwpH41m9PthAAJNT65TBm9eZFvQkzpsmE1sfqwcJ3o2pgpUanGkkDTyhgN3tT11Fk4cDbx7FMApc",
  "key24": "3V6yw1t9gH3RYy3tdE4KhPDvy7rZykZNzxhPv2YSujfqyfZqNvW48j4XAZgF4CWiEmeJr5SBE322VR5Bdjzj5w4T",
  "key25": "34kDLAyqdkZ8KLacPpKmFEDZWkFviNu5cR4TfwEmXEzMmpMZU6qXdga6MgLGUC541EMsmgqXH5kGecmq22LPzKpZ",
  "key26": "3ggwiYMzYbP1rXLxh5h8eF6qxajbsZWp4vR7kL16CoirCNQDTS7UXYSsp3KKHpnBPEPyWCBKHuPEGg4NSLav53xe",
  "key27": "3gJM9XUNnu7H8NL28PoRqWmdbfJhwTSJ7Z8L5NEbb7iLvATuHr3guYLvgGAPYyByE9feHJWk4oWu98dmpHGpVjXf",
  "key28": "4HHV5aePGgLFqmduKf27yAL3ZcNqFdpUj3TnUhW6LBM4zwAaVuGf739P6U3GSiK6x1qaCQXY4TSsstP2BWVJbhWi",
  "key29": "4anzc9xoPE4CM56CPK3vYUfbAjij39Af7Ccn5Tr4gatp6mAMvsMC4xKvUbMJeGxTp1nos5hmaB8UQsmUjearKu1p",
  "key30": "4b693WyyBpnXwLS2QMAnLFDsmQQ1mQSEZPuyf7wqWrj4iBRJcPhJTynPhq6gyD8m7Awv91iUgedX88WcinDrWD2w",
  "key31": "41AJixPFGr6e99MJL4kdp8AqkhoyEPVXTRubBKpde2X5sjm83GJ21fzzZ2Eh6JqV27SiJvT68gCi1x9prU3CQDJg",
  "key32": "4tawEk2YRiwRGKHxGoGs2rsphGxJQ1taq8Rxs1EMfqeEcEY7uZbB5foc6Aco1p5WTCZEFRsXDRqQHRLWuySXXYAD",
  "key33": "5kEK399CJptUZsWTbHDqo7Ke8dQqFokonRUFJobU6PK5L7pjFtbNzNhzLhw417RrnavCXuQ5raQn4DoHkT2cB4XM",
  "key34": "4AKwTb1ZEov3tvzyDedkUwbMuSuHA1QeVpFQEKGX2fsCbPdntefWnN6r8Ph3NhefBMyFD2nL32uL7xbomMoqKg1K",
  "key35": "3kxDq3K4Kh6CXDiL3e1dMnUrJWhic7bBn75uhVhdsgeX65aBpCk3jLdHfZhUo5S46gX3CZ2W15X5iinNDRAomnQz",
  "key36": "5KLe5CdHTiWaipxCCQzNres4D49EJ2uA71TgC8GztrNCU726MJ6VDwQfaKLQnGvmEmXkd7JP1FVdod8HpiLTUjnJ",
  "key37": "59guf11CXKmTbFhJytTrHYq2MucJmLw11umnrQ3TfU1KrdFhDY13d9u94nnzZCbpquKU58iYJyVHQnw8kBpTeEHQ"
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
