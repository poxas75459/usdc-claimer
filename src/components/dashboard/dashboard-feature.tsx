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
    "5fK5rXfQQhtnwt41T3qqDggnYNtmk6XbxwhZTGqyjC1zRj6Djo5YgHp7CcVMBPgsdauUf7QECucdQqKU4ifyGXJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JNZ6ijZ3HLyb1Cr3YiQjyLgy95jH8YCwb9Jt1YKXBrxT8bzusEQ42HA6ehXqGxhsnwiNKyXn8dPmHR24KfRnee9",
  "key1": "3G9qf6swRcjbMpE2DtSeeH8dCZ9cYUS9CmGybJiJzt6JupZEAACDnFPUKAsrkLdPy11Q9Gw8xMmzeaKtVnmtSvKv",
  "key2": "4PsNuMwDmNXTCEm4zAvG7SzKCa4Mf7F1W1KGb3D59HqhzoF723meYHYpVjQtgWCqGjYEzYH2rkzrxE2Z41ahWByK",
  "key3": "2x4kTqtcuzFf3rvAuaU4bVLMwLY8qRShJGzc4LLvGtquBNUG2DefBdE4WSDczaAyjiCQVwSXogHChy1sFhj8vnCR",
  "key4": "4GefiQ4vvUu1qMWydhPGzpvwFAbTAc6QF1M2DDXVNoUQFcadGMYyjWdzdqw2NcKqVGvnRsV1GX2mpktY8D3yqfH2",
  "key5": "2cdb7GuR8FwPoPsoMAKVHWJPaURLG2NWTVggREfUdTWEoH7UBrzYkbBUdBSG5nP5dLVAoZxUz4f9ibpv51Thweig",
  "key6": "45agQ1uWpbnm6LWCriZCv4obXBfHGSRf5waST4oZ21ALy11pvKbK2fMuoTNhZFpbWo8wz1nwHXi4UkBCQnkoDh8Q",
  "key7": "axpL1LeyUYRLCi5PyoSZUP9mLhv5JHCsRMy6eGryDDzmPpU6h267DUdGuEUZR6pXnwqdxnaznhu9oY3xcAcYBZN",
  "key8": "pEgMxGahu4px8JaVbftGmpdAC5SPGQpif9n3LVLAGW7htP6EjK6hML1jjPTTfa7UnqxZriowbcqr4m68MT7DHbb",
  "key9": "5eQiC1DBQP56bmWUWHZC9zWsHrgiCaoqmfdYFr7c5jC8B8DxJWBofxjxuWatEQSzegz7nHCVCWnAwjph1MMiswqg",
  "key10": "3taGscyMB8Hb8baz3msRKRpaGtMvmyXdSeaE1Y8i8mfqdwkWjntmHWLVXyfFcRg3xt6S2F2HxY4E96XF1LhsW3b1",
  "key11": "3FYQpb91nkCKTonH9XoykWRmhLhF9yzfJ7pFm2tGM8apzb2yBNwa2ee4P1VHV2RTH55qoNCzFa9VUaM2YgEMPKy5",
  "key12": "3Yvje8EhEXEx7LQLRQQm6g7SUGMZmhQ2WQQ7bVYxhHDJis1A5LRV1JxrwXYL96WPQGDoeoCGMsNzA3jU1HJUXbZC",
  "key13": "2S3bkiNb9bFxz7uXNtdHS9eKorj3DPgV5fiMkK3heH46CmSLTRXCCVRAM4mTRyXeWoRfKuyx85i3N86DYP8n1pcP",
  "key14": "qyT9FE8dkB72NrYwNv4AiD1ULMf4FAd5gDuvp1Ys1yGFFEyrh9d6Sjm8PP63eGjTppk5Wh7ZAiJairdjkb8SHXh",
  "key15": "4PTboZEwuiyu3VdsVoZP8JC9SBmD2drzZRbNo7aQRRH8wC4qsEZdMy8qPLMj1h4XnnZYyYz2eDKJnEYhHS2x8wVZ",
  "key16": "aq113A77N8HvsktyuLrHyKJFQCoyugAyp23L9GmcDm3gs81aL84MecVBNdx1Tn6kQJoQMxWWSQQBazyWV5zxMT3",
  "key17": "5ER7uptKBZZZtHiTKwN481Nu6mMb1seYgXk6cHwPCekkvFZvpSDK5BHR9SHb6Npma2RYiqWuJrNyyaAz5gCZomhc",
  "key18": "4iGauuiBKtXywjwRKGL3MXjt7N3TUcNrrB8eH916CJxcEfMPSpHh62ftCXxgMaV75wbMtAR2q6Lx44h6SnE8Zw4p",
  "key19": "5gt7E7VkumcP1yKTKKXHxwYvC5n9Qwd9vMaD3At7DdXP45QHwFytSWQqVTh6HV6ysjg7RArLK5PQxqzBh6Q4UU3b",
  "key20": "5aJof8JE9NLgaRuvJTtm8jjzfLMQKn8dEBXjcmRA2DWurcTi4ayXYghQEdS1yheycfUnJryCXeqXx4FyJTw7HH34",
  "key21": "5s9TWCvwkUMTNTXUSMMXFAXEXuHnxLwindxBUS7UyoRgVMgJhhj3cP1feXQ5GreKdRKM22C7DzVQz3kkLf8MfMwR",
  "key22": "FAX9K2fkgxQgwCMpfeSfrF8bRwGNx4bqWSaE8dBqf21Ng4u11fgaQLJsvPWZLZFq3Ui65KUnv9qaNr3cjNPNs7G",
  "key23": "2Ruv85ZtDnYncXZY2Ng5Yfnb8bVAeTJfPBV4yh9yCesRN2vArkDow8Bx5MqdHvrgej3Kg5dV2bezarZkx9kH55F",
  "key24": "2PXMzNvZxDxed3XVhmCJuV9x3H7sgerQztkWuPJvYEbXXokSULGKAZFZKeBNbqjzPpC79HGfcCfehYyNUcNAtJAr",
  "key25": "4MYY6yc62g9K2HwMqDBLXa1Mvy3L5Hyqqn7W6iXC1bX7B2qpv4nSxr1YyJxRZxirTVFoPkRvC11j3dx9dar25TU7",
  "key26": "63ccjGsfYdV2Q5TY66G7K4AfaRedAeVJ1jPsegwh3iZv99Qe1efEUcZtp991zuE752vucvAcykVXJ8Crznv148Px",
  "key27": "5TwHn6UmspRQD9KqPB3MNinXXQLPW2AHpDst3ySnQmpcPvJNymuv4dsxS6vmuqt6tc9eUYLyT8EkNQKUhnKYLPg1",
  "key28": "5L1GCe3fZs7Rgdeg1zWK79LZfKSYMNTE8eJeNWMkbkviowQUMN6TPXZiSeS5wvQR3CiT9PEqeiakgbWYJz9cEHXE",
  "key29": "33naP6XzoULyMqoEGA6JdCJ9ajJd5M8GgFZYstayWK7hnXUuPg9wWi8jgu9SXL1CcgumwM1kcr9osYVSpUhPwjTD",
  "key30": "5jm2WigKPTN62vPzEQ7vuEhuZrB8UgHRAaMoWHZyxFp6horPpLhZSoN7WfN3CxeF2uUf4mijTWDCEFgLbR5niPTS"
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
