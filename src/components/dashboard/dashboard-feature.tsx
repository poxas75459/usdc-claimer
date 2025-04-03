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
    "2Cy4mF2Vcmfxki1hCP38tnkTx5s11wEABuLCRcNvCfxMeRbiJnPnJmr6aVC3eCtbciXBpSaJnxDo6Nc1L7mPSs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXJmhGt7eY5w6wMWQtnnd6JvFRVjpgdGoPim7JxWPskGbFzWKL197UPirJS1PGUrbKcyaxoUnrqAjSpJTYtxFj9",
  "key1": "aUgMoKCJYpqGS6bVTcRyJnCuLkYjhjJznwLEPfUe2shtevReugU6RbUceNdk5dv27UmWEg3jYNrYj41HGud5A6A",
  "key2": "eEndNtXL3rY1eGxSYQUpBc6CEsvndBnTfRPi1qKbapNrtncKdK5KSUW86iqSv7NnK2ysiWxrnUAariM1dUjV6rR",
  "key3": "TEJqzgtDmXhKLnkgFgbYAgQ7BKrd5DzYyz68ac7D4LQuuzeu1UxEgkpZj3VznTBtM9X5XVjZ12CuoL7ZRtdFjYv",
  "key4": "4Z3SdNLxQCqhKu4SWcBzfT6iBtZpBoB8JewhvgQavRrazWuTHKW13X5NgknooyrqsHUXrqPhrwTjWp98An3tHb93",
  "key5": "2foxSPTQ3bKe6To8diBv3snbXumJDMBebdnme8VaEBFFQaqB7FzLraVL2UiZ1zvAiYdHbaQ1KU9Skt6TcDwajJyX",
  "key6": "4KuSX3WxS3ZZEnpTbQJHGTbnYbKGZL6TK3vTiEH3icAKP3Vrrf6ZGh4ayK8raFdp648KfdzMJdPKzKMQvQx2aSog",
  "key7": "6yjofg44Vwx6QhmdDvyzCiyBtecTKcTRFXUP6ffKfng2L9jDuuF4f3ZdxGiBiRXCwjGV9eP3WupLCRN9sngPiZL",
  "key8": "WLYXXBEpj3v41wwegpwHbxDtuoLsFX1bRLyXBpnqMxbUs6uzcVR3EPhMqhaC3MTfN4aRs6xPfBXGhBSD8zw4pzb",
  "key9": "4Ucx4uzKMrvduJc1uRAKPbWbsWuutXD1bQVTBrCDfqYrmF9iQGigVw1SsCY15Vy2S1wBxjRQw1fD4w8GbktnVKGw",
  "key10": "56uzG89VNbCbcHH4hh6micoqJyEYTYSKdkbLrwZAfqMdtzWacmk7Qo1j2L75vTYaZhky6wiWQPwSrAS8HpEvqUba",
  "key11": "5bDnjBAjaScKVGa8bnhzvZXAkuuZAuZdv6HJRf493WRgBrpb6ocaxi26R6bDAJEJZNZcvTJ1aKLoFVu9ETPixJRs",
  "key12": "3PDNKXp2bJMMNSHEzPFKdPDRXBicECtBKpZcZdRPFag86MkmzLwZDLzSEjfb1hGABiXubNGnw1YPTmGqRywxtfm9",
  "key13": "4C9UbsNnVaQLSb95tJ7qyyG2xPLqNrKfLVUAX4bYCGT77gBpQgmmLX1TwVH9QFiWYUvfjJGm8XPQX5c5wpsQ2AuT",
  "key14": "2e2JG5CQ2qvGQYco9uxY5A3Rbo4FzwLvypFNtyiHTuBByHXqqmnpN4NbS8qzpQrKhV68YrEAyFyeE8Fh57HB9bd3",
  "key15": "5QoGkefB18gwdvrjDwyihDavpNuPBWx2Ut3Y8RvDYUB41CU25YH7kgJX4p8mvugkSeeC6F3W8BU9z2B5gZuXtJCA",
  "key16": "3E3MXGJnWQ4dMhk2LkQF2eKgDmnArW7CRkdfLYDW22jW3pz3DGuCdRYDmRVsiBRnULtHm4csq4n4bZC69NDJQ3kc",
  "key17": "5bM2CYGukbR6gLuJhpVi6rM6H3YmzEoqRXkk9W8u59qtQ1JaFhYZLNEQr4mM39ZchwNkTTQcRjFthCkdFwJkQ9ai",
  "key18": "vBx43afWVKziy2NEffC7Aj6VBaZAwdajifCKexcjLhvQooDxD2m5GXqjL8LSwot2rv29RkE2BewLHRcyQwxxsuz",
  "key19": "5sNXLDZB536kYUMKR4DPqMCxcbT3kqUkxC95Gnn6aUwoTZXj1prorT1qMdGnA1Pyv9t1AEdvocLkMraUdD3h8UsP",
  "key20": "3KWsmKdgXXCRpjyssPSFRPjq64qDa5anmQFwatx449J4HYVTZgFUHN2KBVURxgpEhiLg6b5Ubn6C42rG4GE6VNqM",
  "key21": "281qgHm8nWLHKB7FjWVeWLDok4gGAMcoZmXM4LrNb7oTB2fy2WhRt5Ktzcx8mLyPqaKQabfZ9Qq9KRE3DTTwwP8C",
  "key22": "3MJv1puATvG654JFqHJzrL4cCQqe6rSf7ZWALLJXmJWxXzW6rHHWLARuSY1MbtnoJ5Z9w3u86XSWGaCfdebG34go",
  "key23": "664tSTmrA4dSVuU6h2ywr66863BNatg6YcsXv3wzKZmCXuToHRLj1zLCzRf3zs5GHUoLAXVVwov6BEtvqfYWCuk7",
  "key24": "3DxYx8HsUc93oRoqS19yJKpN2iYWBmnicWLkajbr6ynyT7sHWSTcG9CpBQ26BFzEzuvRYZyCnWMgJaxFYeyXzb1r",
  "key25": "4wDuXKkFo4wFZtVSA9tMwQkAGqphWUT2mUU6u69BpHjAdDyeyw7ev8XQ5BVuQuMVVJhsfsUstWwUTSK2NVJiYpuh",
  "key26": "5a2FkcYovWAVLZLPwcd5KkS7odnArT4betRb9QuJJVnQY1Pi8KBF2WzJKiMKtqct6XiYA8ko5F3Bvd3B2HHFs5Uv",
  "key27": "5MobZJEnmHEAvaKJMTx1saAaYwAYEaXP5JcRhZhkQhRBkbC8SVbgPN75yvV7eWtzQcfRHZeLWdMeysBcpuvViy7F",
  "key28": "4712usDvmsPjbKBA42ZYJwbHCGaRLhHCGjsZRQ4p5SVdaQPeV89NN7za6484RDTjyuZUa5qYxsKXKYTRUDM46yLx",
  "key29": "275uHtt7QQnBiyG73Cz8ADW3qXFLCMdeP7ecbQRSTXbCbB249BmDdgtbpN7qLZ5Nwbm3NhULGVRF9jzKiDz55B6x",
  "key30": "47J8DovE9mrSiGCE2r4p9RavEQwzexSiAS1NGojSwnZd3p3xBViPrgJDwYwtutZiRXnGdsVvyxrXJqQgEMUYQ9F",
  "key31": "qePUHnMnrMvFDt4VaU8Y9dVfMcJCAxN5i3xjVCAaqU7BuxYDSGUdZu4WqV4YbHZVZaJPPgVggWKeK7zf1cZFe6Z",
  "key32": "25E4cmDTqkj1qXnYWxxfPtrT2xTuhpsmxiNCKoaTvsWUrF3dhKAQEJagRPD3BRPJ7dX9Rr7gajQALT7aubHVEBX9",
  "key33": "5HfQ7XgUiX6sf8ccfuGDv3vfB5GffonHdquPxhtzvpkUhw4C6cQBfrCvJZEnySu1oXn8nqL34Z3bibg5uX4hf6VE"
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
