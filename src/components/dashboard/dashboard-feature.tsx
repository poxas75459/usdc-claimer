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
    "Af6PuzY8YGVXhgyQ1gSp8GjGKYis69kzQiipYyBzupFTT5SsyjcQ9PyBERPDz21HJdiffdRPRuCAjNyYwjectnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUQjq1gGHL2ymB7etYtP3zbkctbkjNbRBn63N6yXD6CpYeqyqNExoY2PVDgEERP5nisNUrr3pXTQeW6yGGGnr4m",
  "key1": "3Ks1PwmNqERARacxNWRZvoVHTcY5PziviswxH4eaUf2tuDXgJxaY1QrcTYkUVKwa5W4LPjux1j12Q3Y6mJu9ckXg",
  "key2": "61qHrvHv3DnhXFZcyencnSJtETWxqw4wZAECSwzur43Sh59fC5wN7itRJG7YTPEWyGzt4YYcJubgbkjvNwzDbiW7",
  "key3": "waofY2Mjvsh8psKvdEmEKpCvjFcdYYeVu7MA164TTXuMqzTsmphGtB6g8hAqcnZwsqChkwjC2t4h9xaEEJrFRp3",
  "key4": "3Y5zDxnF8QCRXzsDaJ1rr3EtLL6mxSy8s2M68AvzYVgoMnWT68hEvQ4Vw94HB3fECi16dtEUQkU4uSWACS3aSYRt",
  "key5": "4dpQKNcTFGnNfm2TPbcRn2hDFEFNkD8eLssuakhmB2bBXQfvZR4y7wy22V16G3nmAtKyiJwzunBS6Yhp3BBX81ai",
  "key6": "tFdWa9UbvGsKdNtSCBKP56PY1mH5xp4kyK557wV5LCqgqGaMzPRdnyZqA4E1sM88ajd4owpAnn5M2C3RsZjgzKo",
  "key7": "5rW6MNiwJoCAQZfj11wse2fDrVLi1tkZSmKDoxE84hgf9HVNfFXVFzYdR55iFNZ15PyJ6rQYy8VR9vYQXVsWuc5F",
  "key8": "3EgRKCpiQJf25HNtazQtaHWhaC9k93SKU7PMcUJgJ9zwfr1GUBucq68marGT2HWyGXL7r5cw7vLjRn8LCvSZ4Tuf",
  "key9": "66MBiAJCyMKYnXm2yjEdrhhth2tyi3oWRuXBHVGmjsdQYeKhVnKW9QJJFvBHMuTmyoi6wo3DiJ7wQx5VMMYVRJmV",
  "key10": "3tSgK2tmHJngu6ec2LpASv6eeKUDRQ2p8NszuT7DLXXRPBxHv4J2oLWRMK2Cifraj9eLNYrSc32BmiQBSMeihpAq",
  "key11": "DRr6SGDRr877z9q95RB4uRgL9pwR7gF6ergifDKtGtCcFGYp8JvxTkPB9Db1a9nGXzQUdwqGqEHSfwS73jJgnCm",
  "key12": "2hnzHtHB5JK9hCkGKxvfM4zWzRRmETV7MosPfqb8ocWQDZZ8qA2JADAZCvNsQwfHhC3o64ze4Bc2huKKFoZG4xwi",
  "key13": "2BtW53VuburjxCXZHbHbB9jTfReW1u9RyoTQywZnkTbXpt661UBdcaZJFL1PU4UA5N7PUUfxgcu7cUuwHUaoVJU",
  "key14": "29ouccynW5v7yjmCDsrfiQFK51Qjqfo975YMX6zgMErnBj9QTPg1T8qJu1V3kV7JX4y7hURmyEGgosYeR6kcH94m",
  "key15": "3GpRkoCQ6A5q1PAyz5fZJFaKkia8vZj74njNrDvtU4pG1dMgC8h8rEMD8gavHVUgjZ7H2P1GcFdpAM4L873h4KEg",
  "key16": "3wM6kHuHtovs4A1p2TG9oid31rZwk4KMHpDptc5mYdmV4ib39S6qfjyBC3kH4Aa2PmyGXSxqAvJdZQjQX6v4JHMt",
  "key17": "2ieZ45LUq6YiX9QiQshuJ1NyS6nnsi7RKuym8dhNfSoFAkKVhJK2VFfniAC3bKUucuDegi2KH3Q7qSEmjU5w9aaw",
  "key18": "5dGnzm9o7TWK3oiJ3iKag6KVzc8XoVp3HAnog5wN21EGosJra5Qe3m3Atv4PcxUvu1pdLvJfjzwgGXKcoMFfnjYa",
  "key19": "2QgVFaAmpGW5dM59FuW3s41JPNKdRuQTiTwDtgL88hdjMkRcDrNDhePMjM248YJy4j3y8VptTmyBFT4akjdfGR1A",
  "key20": "aXF87z7GZcRLJ79P1zPbynvv2zfsZQwNNeGP2vH26umFboJgp8cNzkw17L8zfi2tYAE5uRphoMpupm8o2itTkFf",
  "key21": "DKcuUtGBdHGXsjwEYkc9oAatCAumFLNuBZkecFsWc2EL8mRhyPxtCfskGgwiHWTHosEz7ApsfPgProys1Cg1oRu",
  "key22": "3cgL9fmBHkaHegYx2cR8PCBoyjM5WtH2HvY2dgJJSNWiQZ3UTiuJ5DqzaTgtomY7Kw4vG1v9HAogjjDUt2p29DpR",
  "key23": "2a3ZobjJaY41ZUaYXcQDjuJ48RYZunf6huyXkQHMmWiZnHkx7oWbraGBs1qrCEzTMhacayfoJzC9iccHKyaFhP2s",
  "key24": "4vJch99KZo5ay8uogFfeVgw1jBykG8Z6zjP7y71T5aJcf39XHa2LEDhhdkjetHgKo3xM4wXogtTbhp2UfDnmDQdH",
  "key25": "5T5b7eXCWJZ5ZSNkYXFPTuYZJsyULvqf6uLozFzTHymueAKP53yXCpsLfRgAZRvaSsUfrLrieTVUhJHhaAmbUf3z",
  "key26": "2PB9PyBi9HuCQgT82RADZXw3PU8MMQPUuFhkNvE8vTFJEa7FmMRhwH7daDYCemJEA7ckV5Y1FiDxHNBTQZnZN2dY",
  "key27": "2zjhVcCy9YWGwCjqTxNvKfzwHRwBWmC5hsefLTnb65vizdwVexLXiEnf3j8UxDhw4iXGYWZvNRRoD6RYnsVZ1aew",
  "key28": "5WYPUwsmrKYx5Gn9xWfoHuBmUzG6t3nuPNfQjvWjPdS1aQYPVMh9H5ETsEX2ZxC4vXjCrsY5Pyy7QRT5sKxrpqqq",
  "key29": "4FHC5JqBNs2BRgCAzfr4SNmCHffnSiD4Fp3Ws7ve5z5n7EvqaBMpf47ArEg58d3dReE5H2uBoYoSLRdujUMQHrmV",
  "key30": "2czkgZqNicUrgQzRocPfWnqCUaeJh6dmr9vxRTcXSDgV6gj3FVGyMfruMrkDaCMHfPgFdfRjnevR2SftHx9j2Qu9",
  "key31": "5z5erTPnHN1GC93pXeHtdxRz1xdXoBa9hoFkJKiJtEqgsPb6ouTioKXWPGfpsrmqXxjbqupm2tzXWQcNW8KdLtjr",
  "key32": "5tmHsjNmb35yuMHC6nTrauVDZ4ffE7Qa43RdnqiFwbCss9zHwWrWRRdvUo1Tva6joHY3ywyKfb9tdKicM7mj2toj"
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
