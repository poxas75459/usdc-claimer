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
    "5mFGKxGVb1CfNVap3YGzxdW3XJnTHmM9kDAuo2oSn3MxHRrzNkdRrk4fFXPFjgw6DYJBH4Bb9YiH8guQiw5Fdroz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bMbGN71mbCWL1Zn1JW9qBaX8uyz6o74ATeRX3ctHRNYeHN8VM4YAG8RU1Wb5mbxUkAHCV8Y9T36f6Yo97LTUsZ",
  "key1": "4GYzBdd8sq9wL9NST7dX6aXXEZ9gnDLmBG24APueWJBgX5tB4bzRHmRsrNwPn2PoZAdcxRNEtH1iT1NmhL3ajj8A",
  "key2": "YX4U5A1DAX1smgijFLdw1QBiU5J5CmaZCpXigHUeEjg5y7EijKpFAuC7bk2AjxYmjRefXhMApEhcM7BMxA9qbra",
  "key3": "5PuDtTckDa2bmHNgkwvFYuqeMVNsu1mr6RAJEGTzTND5pq8fhtCsVYVFdYDyEg4gsyD7oZftU5gQjzTxcZ5cKAmi",
  "key4": "294JyLJvqtMZSHMUoPGNVk1dyDvJFuCXeM879s9zJaEkpt45N2PEVaPm1xPepUksuEpuGZcS1buE8g6Zd2GNWNXo",
  "key5": "9idceAtwCmXWk4PXhJpepQ5n3pcc4QfpyNjCf5CFqeFFZxtvUiWbZM7BtwW5t9ewFrDpbDH4a3ggTbbr5xULEnS",
  "key6": "3L3LFy7QqPPqw8JkYPzJCxAGP19dwAvULKCdxVpKd3xsuaqVBK5UafCZppcwABs91twZPdEaMCXSpmyQVi11FqBk",
  "key7": "5iMuR5GnAnByx2cbviK7rbHtc913ynJgEDz1A7CFf8WVjU5RufLRZ2tuXUguYEqBnJK5f8PKkUWvEhxLuWj2w3MV",
  "key8": "EoT9xZrTFTaaW4sGZmKbNMwnab8yBLRZMFGUxcdwvzEaUUERd8dwxaCSjGdifE4DQg71oQLtA2rb7HoRizkiwRA",
  "key9": "4AE69nfJX9UwkTJdFupiVqm6YTHRhXG1VX3i6AyzTzdSTqErz3h16DHHYxT9epvxhnSS84FDT12PqWrpmrRmB1j2",
  "key10": "6wbPR171xQNrpviWwN8qpiey3NmDbRf5debygtjk8v9DtAVJ74eBg3Um8QEt9ih1y6MbRBW3FBTLFsa5PB2Uiry",
  "key11": "2PpvepUAzvDEoQ2kGvQHHL7qrqzszwcdarTPNyXVFDYDQfY6RK5KmfX17YQCcsLoRJtWw4447NXhiK4eeWTmVn3H",
  "key12": "4QaQWpdF8p8Ay4UfcxPuBTeCLFo4kNd7cx1jexWc3G8avByMx7YQ8m5STDwJg4WkYk2P3KkDZJbKQWdbNBqUNGWo",
  "key13": "527eSEf1rWW4iT4gPjn3NQh3VjdFSeH9F6QoUeXHuJaaqz35rouPBJ57mwBPyQScfDrz71mHNaEkWQHCzs66nCAY",
  "key14": "feLo74Vg3DTfr8B6ksJsCmmmRj17TUnof5rAc6kHtTbPzbVPdUTUTLuvbkY9PUFfsn9E8Ueyj28q5FhYg751tNQ",
  "key15": "2rXgFMFMFvXmiCuvQMkb2ZGij31LS38ehewMantnXaao3ViGF2eLxBNNmpaDkT4ijmK4ugEPdqXf7mcpoG4dDemB",
  "key16": "4e9vAk2di1JuqjvbLY7k4SHdf5RtJ1LLLAQAdFGCs6E79k5cyb93R5aFQewh11QjG3mDinsGUYGuatiwdGJ8pQTf",
  "key17": "9RbhTWybXiDVw3GRbrxvco1UMT79XKVK479vi1S27A57BBvmEpcDrmqQrqGoFB4X2pkPbCDfFZEzjtTCDvLnnSZ",
  "key18": "XTmGV5xwX4TM4HojbQb5tabTWB2q9LzRbxMJ5JBsJTWrgdjWdxHYtzoTdtV4cfCDFiESb2CYyRpTTe1c6URMTsB",
  "key19": "4RQhA8W6ZUx8pckcwCZF4utc7Xsd4i8vbSPbxCtPEJckHREuU3sPP7d5EwGnBwugwnUxU6UWsFdUajDrbQxFKikT",
  "key20": "2jJnfkGcpKxmCCmm4zGj9GvApRuf6KGT8En5ps4VSyMn3po2oW32tAoV5ceWscRsvkepd3jwAKDYhwUzSr82eRt9",
  "key21": "49yTSGys9okpimadw2ahG19CE5ieUAb2wgJ9ct6gNSwBzzBckQbDsuyXKZa22EvPYbjjrjfc5TbSfuMdwDfPhFeQ",
  "key22": "454mDWwNVm9oW1wTF6btwv7qpjmwRtgM7WRHb6tJ1pYsr8VusdCr1NHDgBEbXCHdbK8n6piAX2JAC9YTShPQAmjL",
  "key23": "H3BVybcFycwTt2HHHVYiXFZ7oaP7czs2e4ENBDbZ2QR9Dmm3msiPJbBJLWqLDALsQzZS2iA8Fc49PgRcC5B23LD",
  "key24": "46j93H5NAN8wb83qQh1G9wYYMLAgxbuEf3GMgR28FteopvgsXoSufUvCT33uY8p74tEkjqQtETKkR3QAxE5WZKYu",
  "key25": "3YeegYWcH8GPjXRAGSVDkAyAREDuycmvFYZCeDed6RPEBJ6t8FovsJed7P57Ytqjrwjk89F7mx44HrcPvAXgSpT5",
  "key26": "2xiEV1pU9S6A7xq19RBSwMDSWXzh5JnEJQdu9CCuPqmMFq4aMs2rarrxSuWb2mDKTX7XMsfsEzpMMFbABqcrNvRT",
  "key27": "5UfL9GbSmJrhXbc8qJqPcUhC7shPB7wzv37QHD21h9fmeRV3sbUz3FjYjYKQvBKL2B7ZAxutWjoUtATee3vSc132",
  "key28": "5FeLNaa59kALChFERKiTjGxTp9N1Q873KhFHuxVkCpCGo343gg1BpyNV7myo9zJmMgtv2LgVcP72VvA6CfP6C6k8",
  "key29": "3fprnuUTHdsCQ6sgdE5MDrasLfNEf8jfdZReQJcpQBSaSyoFWnZwws31CSA17Kwdm9T9HiDNuXnXc48fvexNx2x4",
  "key30": "4i2sfDdK4Zqa8YFt67TeMwF5fAE8XmtwrYtXHd1qF916WuPYkU8xkexucDrFvQGazKwujfxaTmWMw98cubk43eeL",
  "key31": "c8fFD3kSxEeFYPBcJhUF4RehRZHiAWfeVpScmEGP5qVpGs4RLxBzTsa6XmcihXS2s8SKaafrASC8DJMtyTLFHBx",
  "key32": "4yUQZcEH6w1LDso8cSd45zBpdz8ea9gAQtS96TR51ARRtZDAEzXM3jXbo5D9Hb8ymR6MipgfSRzah8B5SkV2SyuQ",
  "key33": "2RNePiFzhbu3qUKPCFAYfamBEaWPMDVvUUBKpKjyazzPBNAMvJhJX5QHQgLq18Lp2aaPnbiLxPK9YVW11YYcPx71",
  "key34": "wuYEVNLJyLwYNzWqR9pFaQj4EdLrGuVHbVrL28s4qYK6ftTcRamdSHJSetc9jEvWm9RRLipqjRnDi5KpgBWkix4",
  "key35": "4x4dxJwp6RdNs8LvWgNNbBXRjDhJHNAdTnWmuwqPjcvfh3pcxg8PfLYyTPuTibCsnq2d1hsxkcexAGTotxkwbxmy",
  "key36": "41iUg9fb6UsxBinKnyKGxjRwJGXbBz7oT2FaR6iDG5sy93UZF8YqPiumMNfkxn4JQFVgZb7ZtmkMft6Rgtvhowvz"
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
