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
    "67Zmi6WFqnqB1kqe5Lz3u8pnP6SzqFMHamUjpFzh5DiuWeoTpkLR9EzTAn3XKD212fgobgtTcCrny55W8E4nyATx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9cZ1NTuCoD7Nqd7G9gXcTA8UYMuXedf2cWiycMYqxcVpiCeUHkRzKckCZiL8D9FaHVTmu5VrQesvcniZt7rfky",
  "key1": "8EUNpYvscXSmtoNwahxcmGtSNqmUKJUVZEnFk8fpZzo1VX6btjGq6DxPFP5FLcY26kqC4UeZ2a8VqkZfamRi3qR",
  "key2": "3GTu8muvGxTc3Mx1dpTRq2fsrBWKMNN64SCsufmQi34ZTcVqBZCaZF17m4hzfViLJ1jzwgdZazzHm3HfN7VSbmby",
  "key3": "2iyfCNbJywBbdFUHyRJroYPfF3k2KFUS1EDGftGFYU6yaoTtwSYmX3pGC23dP8E4zDxe9YXrysYPv2bL4PRg4i1H",
  "key4": "63EyRMBt7GLekWVStSbta9qgCSre3jnfqHbF9GLC1S7ZiCdNHorWRSwvbqqzh7ZsYUhs2cL7ohxJ8PSsVKeMsGFd",
  "key5": "3M6s3zhC4bo7khJKixARQeSyAr3tPab8QSyCWmvAegYWBQnr45j7fAkV5aA8cqfmB5EXemed3EZynVPsvbrLoHht",
  "key6": "2LXNbvLcjJS6LUsifuPoA4nRDRzr8hRebhhyxwUpHpi1Tp6a5oPfUUNgR2Cwen4ABDXmVUgfEAgum4zYJiXz3Nac",
  "key7": "3gjGBgwLbCfu6v9sx3Y3TVM8rXysTF9LFd9oqRxYJjeHCQyxv7QLYk7Xy5x6DN5387GkYHiX4SUtRzYtXaEt68dg",
  "key8": "21W2PkVqvXzbS9TTUGLVyDA2xETS1Ef36q9UFJnDxBQm5vLMfAjUdz8V8eVszXxNRFML8j8GDLELBeYbfFcjjk4R",
  "key9": "9vMA26KoxjbXVA1eDAimgmuB87D4pgzdYK4jAgsWnxGamrvm1cvZBggcrtJ11tTgkS37yyQ1iA4qG3Dxyy4Drjk",
  "key10": "5cRmAbQ1FrFY8SvjkmwXPTrtwpqKqzZfoWM5QrPnaorAPPi5GGXD3ZPnsCb1QFP51CYBfwz4LUU2U3w1K4CvZqwT",
  "key11": "dDHckcWCjWRHVsfXBFRivtVBc4y1sdXtiXJcbrk9K3VW4CB6o2mKzgA36ekTsBPrnGSSfpuDy1A8i3DFTUSeEVT",
  "key12": "4v4LoqAz1V5qjedetFHR2i9tVUZ7w6H5ysFNF2rkqriuhzUGugcUJB6ewifdqKyMwZAwtV41YNfjeyVWmCGNYWSN",
  "key13": "62TKKyKnPY7YPePXvR2DwJqV7KxJL3JuGehmLrod4XUtbHFdmvk9EdwnczmGGBDMMEnLjba7hA1B3SQjdmjKy37K",
  "key14": "4PQ35Z5sHAASqe9vdQ8tqvymUKnKprGCZnMc86hQ6ofo5o2xFi5iTyKNmE9yMXuiMSHWmbiE3XuE8VmZcMniEVX6",
  "key15": "VpfiGiFGYcMibR45DVkMsbcKYPxUxtuzVdkkLuDMxpP1TjpybfRS5uma87iM2i8KK7PKtarPDrWWvPwnWkLHuce",
  "key16": "31gxyC5PyGK5xJT4u3eJcnrVTLQ33thaT98qzHs7WLPVPRQNEdh9DjjYhpKiyGQRXrsgymkobwEvypBBpLBfGrg7",
  "key17": "2TtYFL7pcBiKNkS1bzTUkXeCRW7ryH6bEze4HbV43tRfBGUFCmgeeqkA1SmJEgUfvQmKyRt2UpHHMCiovzd5cJGT",
  "key18": "4cVeNQMWtbHrsFsM1BRUJ1om7M1cBHWZEHjoiEnHzDjwJpUQagPaRXUm1daHNAGmAEPAoWXk4M8HDvhxkPrZQWE7",
  "key19": "4z2RFaJ2xjcPFgHaMW85cEziR42TBpjKB7cpVg9Ejt8aiqMtexEEF3KeGcFh9Q946yDFVrrJMDLcSSaLsN33VWsh",
  "key20": "2hmhE6usRH6dBDLARSktYUAVSLg5nfdMzLcMeCeC2VX29rVvsQeB659ncWY2ub6JsSt5VoCuqqfdv2emaipPuyi3",
  "key21": "vpikK2UTp3JFgWDXB2xvfDB2nLg17VgfJymgfu5Nk4frDwU72RSyefejBRGQYMDzLV4gAvWt6EtUKiv25tjEQ65",
  "key22": "27myMmiCT6gRxWHVP8hcsch9JbWCXDQZLTiy9wPRLiXGDegedbPFYDSQDyHdYa57KTgR6fr3N3jLEgLwr79mBzDt",
  "key23": "4dBz1Z5rqyynWRQyNQkFHkt7oMVWMEBjKHm1MhYf9MPDttkZZrYqkd6xyj7jKsNBZanioGoVsJhDfccx2fk2JCqC",
  "key24": "4JdzMuTf6FNQaYa6XpDXc1Rp5bMpBw1BuEjSBJgE4o27UWhZ6d9Q4y4Fsh72uMBeGYBX3FTc9XcgC7hEiBysTKLY",
  "key25": "yKEo94EhpQPqKGfndre7Jkmc6DRMdoZT2u7iVg4zyFKNR56gUVWXtqNkXzRxv1ejBd86oNBLghExowk8RXQwGt9",
  "key26": "4p1WcvmXNqT6TghxTbn3BUwD5goErCCmP7Fxt7vDQuRiwandqmCTGr3eC76dyxoTDJauNcxzC5EFg835bDGwjZrZ",
  "key27": "3oVpHKG7VnEbWzat4FC6udQfGamghDo9xnL7mVp8fcFfraaPJP2aDUw7uehuqk3pwVehhJwZ6FBRL17QYhCyFzgS",
  "key28": "RtTsvBHXdkfmSu1j49ch8zUV64HCmayKQzodAetc62GVTJvsfy3ZsA2QHhP8AXSe7bVxZbRKAwYF6eGHeYbXpfY",
  "key29": "3uFaLshs2ckwTSVEvz8WTK2mxKcPknb6pYhnW7LACv2TaroCo73i48C41enJxqz1g3MRjq6PhttfPudGFQbLvpnv",
  "key30": "2fuMLtTBuR42rGvGzwCDgFVPTPRZtTCxz4ww7zkdyGBXCeKLHLh3cxmmrn6p2KW1EHyytZvmV5c5NzAyofsMt8su",
  "key31": "3QEzUBi7ZyWERsfeSKjoDkCsveNSdysp9kPvYGTxGjLjA2w8DAtR6fKEuKupjLB7sQQrJAocodpXNmahHD1jhsB7",
  "key32": "4ZHeatupWXWBUSWLJt8aYNKt9AVYvo9B3T7V8fSNfBNGDhgSJXVPZLY4aSxwhwitp3Fd3xT6yaL7RKFtWUCA1ezN",
  "key33": "2hhrc7mZQ3YBWqgienfDh1DaEfaeRGD5pQdLUgicoJGCPyDfbKotWDV9je6NaDZfGgCnZkCNKB6jM3TBq6VfNFtR",
  "key34": "2tHVPfjDzqF3dBER6QkmZQeWk87LJESr4cRJFL5mfQVuPgFw2DAnRj5rzxxAjBRKVkbhrQKaxrgHPR3SLuzg9ViR",
  "key35": "4URCGv8Z4VCJFyaJxUPgsyx28MkP61GRp4fGbNJhkQBiJJUwWG1KCyThtzjPxwixMoC2C1Nmcrv7sMLkdyYyEr93",
  "key36": "5JQuopSKcarxQ3kYWjxX2kJTKg6fGo1qmD3v3hcumQ66nQEA2hA5PBWT7SiUkoTHjtMcbfhMWPR2RDxjSCXFo6ge",
  "key37": "WANd47RhQPBZXdzU5R9ko9SrBuBzByPpFZTQjcWAeHiB3xwFGnJ7AznPT92RZWhN5nwUifo6Zd1s1uXW9Smp6eN",
  "key38": "FQNDsLeTSdMrJGDrCw4CujsJDKWCgfouDndAU1jMJb7U9Re5pFfgdQzFDAdyM4C4QaJ4dD6UztsCQgRzKVfCk2j",
  "key39": "2ccgeQ2m8NU5adaUM4Wj9jZTY5NYMaj9tCLPLvXYRkcbasto8wKy1qHKVmhu6Ts8furYT36YydQbcWzfucP1UjCc",
  "key40": "2sn4H4XCKEzNWRyG9kGAr8CQHPDEkowNmXSogKK1NVqbKTpmei4K4oFVfFsxprpiSjqYJMnmatNswbgoH3WaFCnE",
  "key41": "5gFL5yn56WAg4NDm6khP2PHqTAXm9AYAN7xZoGs7whRMG9rghSzpVqyq6vsXaEVcgWBMEPWXpigrTWp9sUHNSXxo",
  "key42": "3qwFkjC89gwNcwq7LY2Fx9jhULmeUcVHCpQcBivJKdsHKMcii3FrJdstn3E9ox7cVMWKanTJn47oRrUCtusTuQZp",
  "key43": "2yTSJomfbVpM7NvShmNuv63BfcFGuqGpaDghyHzW7A1btTQxuxUvbDWCcuwgVEJcVFJgEwADXRjP9eA7iTckkM8d",
  "key44": "3AeZFCT36Yc7pY9cEYK3hSNKaThhWj6H45oazPYEb4XW6vq64Pe8zbbbSetKDsoLkPANZ83hqmJxvUWqiAWadJQ3",
  "key45": "5k3XJvRPM2B4JF3tSJYqYacCtawazXipAPYEhHf3ZsjzcgxExFn8rRTj1LJU7kYMe8mZGDPtk5ueF8YZvtXqNUf9",
  "key46": "565KDbvSE1tztMUeEQwdu2uhc8zuVNq5gFADDPuoyCo3jML9JFN9Qzh8MAA8GMJaV7K4tVpuJEZ3XFca9CCGGxVR"
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
