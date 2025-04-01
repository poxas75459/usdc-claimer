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
    "5hNkYDHGRi2akmd7XJR98tdMNDoUEqZjvpbKSVDk8LTDepTZ8iVxcgxhhSi7sp8DWAN2jka77enxRuGaD8LVbAb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzBZwJNej163Gw6xk66pWbrfoXykJdBouGdgyGgYtmuszD6FGWq8bDZCKZJoMsFL7ioYsdZWWisszjwqRoiowTN",
  "key1": "ULHHgBK6p1DqmDnjFAuuDaDue4Wahc1JSxvvdxumZKxHAFRM4A7DhCJzgxkV8SAJ61y2xHEM6npJQZQ1vQGYaka",
  "key2": "2FnhgKoJ6gFR5SEGy8SgLguMVPcyUry82y6BRa42FTv7928dv8vbJ6ib93HmKSwQgJbE12h4GnnP21EapXjibCqG",
  "key3": "2RfgDR1cfzxaSLgSBCGdk2a6dr2vUVGNjvPp47V2q2WQUg5r6HvGK1r4Kby4uMDW2vFF9RBzjhJLVrD9Nv36P3be",
  "key4": "5UAibx9bfz5PkeYBJYgnUeGDYCpcCAaKJF8j5LDvDtpFvrAfuu9pjK22j9p8LokvmjMPwkhEKtUPNMbGwrqMKYeD",
  "key5": "5gkGsiL1qqEX2W1fyqNvcW942KZsriA3FcRT8zTRmAKyHiDwCL2C32uhBVb7q4BtZRgwLn2pXAUoHvxsuo2k549x",
  "key6": "5wH85CgsRKEFcVZXivtESWpVJSCCxpjAb7r2gUwd8naDLXHV5mYsJQSkdyC9BABDdpDtY2FZDBvrhnJrhzCKQKPg",
  "key7": "2i8g2QUnYQTNhCJVQRuGpifASTAfwpL8Cc6iF1oNxmYuGbvKVQqk1NGHLjZhrrW8bBYYJqPDqQ5aCyRXmRvukm9u",
  "key8": "5iwkFpr2razkBEctvUusCpKngpxnYjVKcY2Mi7NiPczhFCbh2tqiEWM1FjYixMZQKJkkj1epyctyEyiuYRdmqmue",
  "key9": "4ZN17qiAEuXjVYeWcdrsDCyNF6nA4Xfeo26NGhwhUTKg3RYEP5hMdgtjinFPHT2oh3XChH3ZkDYpWEyaZyYcJYbH",
  "key10": "4Wu8r8rr6tHhpWLF1KnLbtUNgS9P5uvKDBWWZTsyqvgpehumtct26NfjXtVRdxKrfka7tGbaQf6NZBmf47P9NuRf",
  "key11": "4J5Jh6ypwzU6AVcqqCKCu1db5Qb6dyWdLpAE3XTNoNgLutkehedJSMSusVt89PUPSVcT2rGZeff1PSbZreAYcdxG",
  "key12": "eNQWnYC7C6q8g4Gfw8koYVZ3THfFv2PnAZfyo49xJyD5fWqmENhysQwbANPxLykXXDY9HhWYE7VjhubA3GwNCGZ",
  "key13": "3jufF2mTFXvME98J5ctibKt2fgXpTqWqZpsMm942qv1koUECNL7xB7faNNKaimudoxHRxsJUjKLUY2wd2rZ3QvKd",
  "key14": "4dviuVTnfTCnxd77Us7Mi574GCiPaV4JCoFgH6ow9hXUPvRG7MrBtU8fkmziDCoYJ5ubxSHmRX1sA3He6u7m6BnU",
  "key15": "5iaYyGZmSzZjg4LoevcLrd3mir5ZNdXgzU612MWZVd4JxTfcUAUdtcGv4fd8QKK3wdaSfqQ7K8oaVLfjPn9ujq9e",
  "key16": "23yjhRZsgoZAb1PZNZeRUsXRAZP5bS9LZyUiWfL8TzXmjUHBrsVpzGBEHxxLvZdDY1o1rPRJtCLaRAttsMhrugG5",
  "key17": "4ArSm2kKLGWRwX2mMaVaRvgpi4rizCB2gwhaCRGKmJP1QaatEATLUdHMtEbhi769FZfdMJTJCnGgCVCzJfcsbPLD",
  "key18": "2LAqhDMb61UAoYaXFV9bmKx7MGFzGCCeirE2zxdSZsfJBZoAqoH5hrFjK9Vo41EaNqcoSHGKTQ6eBD1q6XwWYVrW",
  "key19": "5KBNz8YMTy87PJDMCHRmsdSm8GddvmZvYVRXTMz6DDGwx3bnDzrs8C2rNnhzqSzrjfQgDsxoppKBqaGzHArPpFda",
  "key20": "X6VPPcPQTGZ9JdUhnAiMSqhqT6oiaSc85ux1gLCkg4EWA681LiPK7RqqZCK6MNmGd6seHuQU8JGkJ3iZanbSmqn",
  "key21": "5cUdKigcRepiCMnFEFgm4vzZ4f4GSumZMfczsPp6GCwXoqdC9Gfto34STLwEpfxtX2pwHA3TStpef4daN6zRgRXv",
  "key22": "dVuPAwfbyDBmHirj8FmsaVtCLXNtbgg8b8HK7xGvGT42QZdWNpYiMnjotwB3uSqJg1zxGRYjLj5VvQncUHQxvJQ",
  "key23": "RSdB7VveWXPkAZMrrpVB3TFqTDEc72StCxwgNQSkoSXzYZyFhx83bK3TXbKNjhCqcEPMykgip1gRJJRen1eyA78",
  "key24": "2MKXmEPWEkkrVGpUTbZZpagweBw6c64m66QRN5RNm49YMqHHc2duU4pzRH3fzGktiXp6MpjrWp3GV4VNSqBoXj9y",
  "key25": "rQHAoSAs67zfizAfzFS497kNFFuKtZS1PEGGtbsYeasw8QLroirGsPcrVTqQvt3xk6qDELR29KkDzqYFdiH9LbN",
  "key26": "dUgBFZEzgESQJox5bZL54ZU9ApFeP7zkqFcZhg8XqePen4bH7uR8Dpf8VLvmLC1Y8Qginvgjdm9428AQbUHHfRF",
  "key27": "2vXBnhLV6d5Lp4fkSDDTrUyTqHfZEro3Ff77wGY58KQfq5JVxmnAmmqiM23swfNSMEV6nNcRGzxgZGK24zYFkpcH",
  "key28": "4zPqq9F3iQCin4x27Ex8EnNYzY4NTNY8rhb9TrbZrZFpJfPcsqBfdTjBvYYEirR6dGMnrjaN6PaUKDGZ3rnbU2uk",
  "key29": "5qvetSELejy9hcidNEMuZU4Kn7zb8eb1wbsD5AxDBjVNNiFDapXm3ZVQTpuXK9B49kUGx4cpYMN39H8rXKTHnFEv",
  "key30": "5D7r2emF42ipJ2VkrSskhBd3MRt2ZJpnT5WSrKVf2DznZ9WE3Up4c3w9WQjjgaKZ2k7rG2nabeMQ8T8wAqicC64",
  "key31": "3BvJnjUECEQvdZqJ5yj8ZxbQb1YEhR87xXW1wjuHj9nLA9v4ZaDu8GR1bn5sVjGeuaw3btfXCtAMQfnnRWgsvXtQ",
  "key32": "3KFxwSExY6Ekz6MMM3Ey6Dra1gB4LiHt97zP3DzX3cU1bEThiV4d9cfU3NwMes7es1rwBw3Q9mGHDccdVUMRyoqG",
  "key33": "2pN2NtTHoRFUAgVbsz5cxmoK8E4RvBKDqP7QmUgXHhL3GZZphqCgWD2eQACCFckxTshDDoXuisadphQRmdy2PANB",
  "key34": "4Kk9ZoQJQUm1QxewmN4HJRz96u2niiFNq1UmMckgmr62KGK9Hqhi6fVxeNJRChjpCQ5xL7DuEBCt3imdcmH6LpWa",
  "key35": "2iWxh2QqZcr39gxLV9Endioga95rTqFDBVVwixiE8uQ5Tp8yLmpjEnCPiE1NRgRuxGDj7hGignYoU5hQEGBKfULm",
  "key36": "5TXWCcCjXaY9oToGeRYBQxhd9D5iTHc4d4zXnPHRyTUPRkUgpnwfqtjm8Pix6pjbNWTtm4HPGtdC8W3gw9epscqF"
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
