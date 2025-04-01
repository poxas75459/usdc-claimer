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
    "jtP4zqFf6ALM38hKAp478Hs5tRPNi8LrBhENWyWSDf7kFtjN4KoN9QCqfyEcthC82hjbARNi12avXvKRiUZoHtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SxVLPW3zEWott53vLDD9aFET3FLj46CDhngUDS1tCQ7QS5Kawx2fE4Ecg5qcv7m45j1DJEcYpgqJjqRR6KoFEj",
  "key1": "XzxffLatuJDDWvHftRKGpUM3vFpkWSHdU4vgeftPTn4rRyDDZ6pX8Nx2gtD91eBT6DCcNyQVJVaWqwZ5zcBEDxW",
  "key2": "3pkzra8gTUDA11jNWSyw5tWWrx4mS4eU2GWRnBJSVv5aLcyxjtDvZRuaammXfDDgsiHUxDDfufADG7AmtFziyksK",
  "key3": "3BQCn4BARXeANBvNqQpSFBcdhEARCifHrKfXSSY5FRudMDKfAqM2JiwzcJtG5JMbvLeiTq9GLWs5wn2xUuSZDHn4",
  "key4": "3q8whYJK9g4s8S2cuE9GaHKN546z1FGiuVA6dPSLDJrrmiDWTYbdetxJamRYmzSqsaqYDdCEUmmXUrZWjVoFZH8y",
  "key5": "471nRM6rGv6Yxf8QyUGsZWZt9cAzkw3beybJGzSGDDYFVdfDT8RC8qnRf59AtMDUPL2XxU3pbPgcGpjjJkE1W4N3",
  "key6": "432hbZdHmrfvUr3NPeFqBjV8T2MDfwDcXQMZ7tWTwaSQd18yCKsThTdwiuRRJyhck81MJ9DKpeKvv4jDz5qJDg7Y",
  "key7": "3iByEDsLAk7NezuggUvgcPAwQQnVDBcsHNCWffp22UBKYwGWasCfHuYcLRC2t4etXTvAT3HctPXw9w6JSTgfFQbG",
  "key8": "2wJatdqRhEBVvHza42fv5SF3TCgAqV3Q7TLeuebxmmYZhHYRsNqVthijbcFgbmape46baAD14EyqdFEq46fCchKU",
  "key9": "8nLc1hd6B7jYM5LBHaWi5uxxgHvnNrabym6PXT4JWAk83hmwvYNcB3Q9VV3ZLirPou1wg7FMTxpSEvBtMSmZ3jC",
  "key10": "58nLJ11RAkZZuTbaSBY4x76Eph1TNgBUxDPyKfKQhvFkKVB1GZJegyCwi73XuNeodyKeWbuk2Rd2JnQ74kYoth3u",
  "key11": "5hC8NJzBnZjJsZWduaUE3q7dnuJ1WpqTsQ1fCADdon1AxUvpByK5ba9wYQXoKd6AsTbJvrtpdxT8CNaPPq8Tq8XM",
  "key12": "2LGszN6rtmZGJFZRhFM1pWgcXRGxXxgqLpYMrBtYWANn3MiPA4WVb92aSJkDrPMkkn7oqfwtPGDtDNqcPmWebyky",
  "key13": "2RAsGHd4bYH4ciX5Pq7L3XNHf31ipRzWozonZBR7Tb5bBEWbJvE3eV93bXFQr6LhT8ea3gsRfh9UJDN8GcxwQ7re",
  "key14": "4gpMN3oBHe8FwE1hAivWvEopGx6C8WARnTZKDicuqBVy1CJasQSjWcmZiQbZxPERLAgnpfGM4JHVgJDaBM4yhFc3",
  "key15": "4B1A8xN6MMBxuzoUYnSSews7jPk2CqLu2fKg235pqznara2zNBPySF6GYx9ub94athVaRdi2NBH1uCTMnNi8XcoR",
  "key16": "5XWzxPjVaEVpFSjjDhigFtrVMTNnDN8oyGUmEG1qut5nrcFCpSUWKhexfp8EqUrgWC32PC7EAw5NqsY8J7Zc5rCv",
  "key17": "HsfqggyDFBmBf4FxPfvtooAJ1wjXtCxz4qxTKz7yF24kTRoUQxyg139pSWczLBAPxcB38kJAz9utuzEKZqvdx45",
  "key18": "27WjPLzYbQJjoVKKDNryDnQfqKyeuFPnPLzHJ7xavHs2k7xsZzwttymkfiiTHvjLZ4z5k4HFmU4ja12GBQSdsp3V",
  "key19": "2djmJdPaSGUfmdfNtWRa1wNmWjVVaCVvG4AZcZqumDxRyzfaVKnpNmeKSob4nNG9kTKzc16uE97aVtLynurmb56c",
  "key20": "5nBd9tbaHsRJoQPkgYfwLCVi4cirfnYQGxfQRmixJGqTQTHhjj9MgzbxJCyv88E9CYJq5X8FZmRfR86D8kHcW8Wu",
  "key21": "42dM2m3RQSk3g1GZAjJxy6eRiDdoUFBQupbRTw7CsFkWmjvFrrtajMHrCLCztxMZjTaEj2PUeQzbdCmgzvBgQBYT",
  "key22": "22XwhMs8Thi6uhk1YVnHsCsUFd3FYwGKKUZk3LvKPDB8LGP7uEkez8EdmBkPHaXFQgxn7jgwHZGP9h13zYiFzzQj",
  "key23": "5c1qWe1c6YBUe9rTKrkVzm59QXoffXnJ2vjXp9ZE3HdpRKwzLdhokhawbQPLvergiQK1yDdC7wKFAdYfxnYG7iZ1",
  "key24": "5Ceg4Hz1Yd8jQa5rP8FVrqQiZLqtBM4MhGqYxNwfe7KVttDtMRBBdjvskxVygXntV9fPdtqGs81Ff4zWDwoEBeWT",
  "key25": "5PpWuUY3NZARDFtmMyztVzGcXayBsUFAD9MdBxPL8GNNfn5dbngoq1H3WEJUHG8S2J9jEuYuhaVoeEkj9kxHLduq",
  "key26": "4WJnmjnv2gek2L2hVWHvZZqVS76KNBbwNnX1WL9aoWsdQ3xLacTvM6GzDCikjWYnbUz8ZNgW43kRupaVFqFZ5Zbe",
  "key27": "23aowUVqVQdqc4fg3AnAEvBtsdDPcEB9CmtV3ed8SPAw3ndyuhPTEXXsTcRPraRQ9dR51kQYf5NdrTfEchDErYju",
  "key28": "3oEmszB9SZyiUx7nCHwiUYBJx9BhUWU3kmjKXfp2N7DhVL2QjbfN2rPwVHLizHDev7xGPwQfesh26cnHGp7cYmUm",
  "key29": "3icyD8xSCvN388bgZPtcwbpahr4FBhY2Uqf2k3qXxM5BKj71PPqCkUZYetVBxPJwh7TYzAEbWp9PnEtWYfLEbpU8",
  "key30": "gzErQeZUGqzVByRcFDRqB4zzZjVMLAG4kNhQA85FEpAVje5u92c4BYtsSMfJ4rjqFXZbK6fHE5GwG5DnVMGWd17",
  "key31": "Mxkxy74ApuW8Q63XrQ275BWiW6c2EoBk5szogPapEJ9eRwZ8DGgrDJsfFNNqTsS5tErbTugqyUVjDqKcxMfVBNr",
  "key32": "26FbVa2f78XCiv3FdbeUkEn6rADapJRTxsGuAD3TabYeEoDw2Ct4PVNme9uDfqAw2pgcsAoF8ckfLT8YNZ354HvB",
  "key33": "4TGTnYzo8pkFE5MJ5Z2kdfgVhmNC1giH8hRh4ic9hg921KXd2FBq8WR67D7j2kkSLaFzFtgn8ub3Jaf4Mz33JXsz",
  "key34": "TQkzS44uR7MePcpNcfgWXeGPz2uWuwAHFT3krNWfFXYMTaRJTKmJ7WwWYmHXADwYjGNxZYz5yyUSevRFxMnWRTW",
  "key35": "3ujsQ4aghtmVxpYTLyv3ggdja1PZ2gsVrEKnMUEVi4gFhkoqFWcRcz5mZoQBS24nrn3ippPzhV4p9op8eLqxEZU",
  "key36": "4LFVSUycrAa4pcypEnP1KviUHFTXmDrh6MsatdtawNtKV1L5BJCHd63adMtUuYKCTcgYDMPWHbCKtKZzaLTHYGRE",
  "key37": "5YRyEdNxgEYGXFmAoHZpWAbCELSGZUNqijZvjULkZBo2cNRMPcV2Wrt48DMmVN97cqogrcDWxpfx95EotCnhNeYt",
  "key38": "3n6uSUTbXeH9hoWJesyT1crUC5XZy11As2UgYXDszG4dKE9ybqDLnWgvXx3uPk7LagzJiawyi5kJU4Qir99Bm4JH",
  "key39": "62SMptRDyzQaSX3devPZwQmgcuTGZ3SiX78uFFxdty7GMbeZbQi8VQkDKz2ggetjQoykdwibyfoF3YvQGnHmbF65",
  "key40": "4CLLtTZuCPC5mhGSMAvjyT8mfUTAcZWApc8VnCJFiAwMX9tBER2nkVrgftNpQZ594keWk6bGUnwz7LgmcKSpzABZ",
  "key41": "47RKnZXzTYUmJMHZMqXrg69i4PYyTTncQPzedE7CHFZ9B8rcb5PrtJFgDhRddQUJF6ucohkE7rrB5zjACKBF7hTR",
  "key42": "4tNnoHgUYf5bT4A5HTSsKov2JnZiRLL6NogMPTgAxnpht3bRZGDmsWnaztePC4wGJZEDgMVQcfL1VXGPk7kfVfQQ",
  "key43": "5Zx7i23vAeQT7sGjg5avGocRDM5VUr5wJLigAf1gZy3JLJ2nLMNUK64teSTmdx4U12SXqNhknvJHWMrSjD2uBQx",
  "key44": "57w7MoraaFdMcbABnZkmWMMkQjhk8HkWX96NnyN1YeHHeno8dKXsZ4N2U7FeGimTK4kwndhMNXipC6SN6RWWziLx"
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
