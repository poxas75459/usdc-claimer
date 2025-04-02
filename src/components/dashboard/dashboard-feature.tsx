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
    "f93mpCzZTsMt9EDLAzhtaEnBgttjpzvuxgYH2oVC82yNkANQB6XT9DTd5agRY4FkNcxm42PRfLDG6neahgf32R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WmD3ivzgnggFmXnCRtmgWXN2CUgPVGmMdAeeqSD2Uw4zibRCGudRM9wrSmUSHynMxUdcW2itq9eKb2rc4SjEHDt",
  "key1": "58JUGeD7G8TXGV5c9pvHDo5L6FNciU554Mu7n7jVhYAV1TVbhT9CbYHyeSGrKCN3PjNxwhGvtpk6DqfRdfyRLuAM",
  "key2": "4YcCGr7M9t6KR5nk3Zeadb7J18rcjuJ9XepP7kd5bmyLcPJk2kq4cjEjB7gYdWRpMGW1EZTzeZmWgaSFive8fEoU",
  "key3": "YD2hFgrS5N57heJEvqLxhb9Xzdtvp6BohPVozNLZPWMVVutPyvxidF7i19eAEhpuykwD4x9nqgH7rgPB4yd8pwK",
  "key4": "4PfiMv2vW6gGMgZXY3BbZxSYjmHpvvJM2dXMeZL1snjGj8K3taackJW3AE5nL1zSsBoSnsG98M2Yr8hun5DmWHhj",
  "key5": "2gh5pJaxpXzE5vptXuTCtAuu13VnGkuZSauBpDP19Rgh9uB4na2kfG83tRXGJJyDTnQ3yXDVkk5qKziwENLtRfGg",
  "key6": "3UYAsWTQzH6utXbsPNTc9sZu4gPYBCdgwLNdj7yFDD1EeFnYPaZQG7bVdX7SZBBV8DXdd1tp5GYXa8CaWU38eus3",
  "key7": "3XuQmj8MHm5p4MAZXHL3VezzPsaW647qnr7BYrEMKfDWhfatVKJLWannYxk6tj787fkoX8ry62BPMt1XrZNX4fzU",
  "key8": "59ziDSD4eF1756ziiPgcMvKUtsdaDrVCLXA1fY843buWHyBT8oenwqKfTf1oT2V89YJDrY53d9HeS3YZM72gUyNP",
  "key9": "4V8LVwWo4MxxHc2CBJWZppZMPBJe1uP9W8pVWq57bTb2aJmQ8drAGP2nujntGesUdXsBso9KhgyN8yg5KrLYaiMt",
  "key10": "5fG86mQycJ52cgWbwo1TdwKcqUcMi5Pp4QCoQZ3MRgqZSEUkyN7BTNFGdz7PCYuS4sUaLugkHoKLrCktLt3PESES",
  "key11": "3Stxz42AHRHp2Vm6E4TTuUBEQbZy61akN9ccmYEsHMdeHkYYK9y5Jo2MFUfTFV9QpfmdzZcicB2jeCVnbgU3gqAq",
  "key12": "2BG3x4rjjChCKWVTAydFskyTKbX9AAryR2d3RXACm1RqSbAmHvTr8CVJR1pA73Lo2yumpXzna7FY7Y6Fcw854A6E",
  "key13": "5a7AViybrfHjnsgbcwBjkPi6usA1CbYkNpcmn8ocrNHUedMpv4bauborAMJa5NN8BUuQetGpgDQadcV4pFNeKV2",
  "key14": "2B7u45HY44wMp9pAcVQy27rGBwRr2KuXBQZ3BPo9k8dMMW2i9eB2Tjfc6tsDweVqLtpZg2PEaZxkKf1ZTRfvnDuW",
  "key15": "5VC7eqb7V7oz4BzHixoHkdUUKWG2CeC1ZwcpaoDFJvhccASuZfjqbrzyMSRCDzeDACm2gnDeocM1LDwcXjByPA8D",
  "key16": "3ZfVWmyoeL1tobAh27C9puWgzzjLqfJXCkSsZNTk6gUHFuxKbNaACodQ8LqcMY8pGowHTEnraDzKB5BhvDuygr5T",
  "key17": "tnDBvnr4mGWDFmxaiZvdQ2KoZii9hRKGDqnEbLRSkopsnYXwaA5DM5MUecJarQDS3CXefsead46UqbWfGzhZr7G",
  "key18": "3pkCoBBz9wmWaxS8q4Zg1jvg8niG6y6SZ9cxZm6Hmtevfzsv6YTTWGBsYxHzV35yfgnMnJKhuXmUYU4aQreCXzbH",
  "key19": "4QBVFSJhCGTK3HAXWTaBscFRqaqG7qtreCXdqyDLEDBmdQUAyfcRaRJxAYyps31SkiHQQpV7N5N22nnjkyxf5DLU",
  "key20": "3tg1SPqrZck18oUkTtZS2wU5dnLsJzTQbYq7qYwLPBwmh8tCZiXMxPmj4ajmdRKjAbL8oi9DgC4WUUPjVQKvwee7",
  "key21": "3ex7F1zMhXRX5MEEuFrXYNgEVRowWoNC2JabthGet1PTXiksDbkUajx1Q4fG7DBP81VdMafCfdXTkgBv6TV1TTJe",
  "key22": "48uvbpBDXqdds36o49PWddjxfrJLhsx1gzgj46m6kNnVEDAuz2Th6pY2dJMgbufJzwM8NF5kAeUgKMqGoBRqPdqm",
  "key23": "3tg7MXThSjSKrBpJkfAQpDA9MpdetMvtoyGLe8L4m3YPC2fukYXjdrkpydpc5fL1P24uS1AXBVzK2HVCqm6R8hFG",
  "key24": "36ggsQmbJpYKBTSPND6smXwugdq8RG84ChULeeDDRChmNK5o1kLroHTb3S3TU5GoTP6Lg32eWu6YUBYx5d8vsuQX",
  "key25": "5EwWbwjrAcAEatrU6iHF7ULyZZgP1icJgBHEKYgdRmBJL7aerSbRXqgaHRBvohLHjTSfVKVPvjbLyxwcLxpL2qJc",
  "key26": "4QT17bojcVULJaBtGWHxYgWKMCbcWPLjX268EUnf14AsDH6NfrTKu8mq2W3UkV8kZTkSBSmnzMrAY1RUHHoosbk7",
  "key27": "5HGMBFqTRPHMJmNFrwzRmpqmSsLGyq4U1pEF57ToK3Nn3c1ApGVyYhaGRD5EhfDwaohsdHveFy15vixnmtUwybF",
  "key28": "3djX346H4KPo8G72vcQkeUivivvk9G1DLjVQB4UAEkxDfoYAjEzThYreTHGGPr7MmjhuApXPVLbJEBan94wAuNzE",
  "key29": "42QPmnEAZCqjDMw83RTRKAK68WeSdXtfpDo6k45CtcRxE6A7oqQ9SJLLKMqYR1Uq49b2f4baQrzHfJoxKPHHcZDe",
  "key30": "2cfrfKyiT2fZZdxoeDbApZHW5skon8Jc8Z9r2eFnFCUfPYaXrvckf6oFveoa7dLp2cboC6JUQSRZWNZd9yoEPKYK",
  "key31": "2JwaKtQ47vuQRw9dYuxdbXEMGvFC8N8FRqSXKeFJDBkFJYXQDT6Qygu1GUDa9iebKN6dj6tqrn4Ln77wEknNdJXu",
  "key32": "23AczQ8NdTGZU9jGwS4YrWvVPmG7quWsdqi8uxibye7WsYL12YsKE52skf9bgd6ry2eE6t6eQ7C93Wys3cZHUfp9",
  "key33": "39FhuFkrbgLRGB93GefWcfifV8W7rsoiDttgcLnsnuXZCyCjYrb6WHWAjVLStAifHtNEQ3iULvrACGYfd8KZGto8",
  "key34": "qJuSwjS2oPKWs8ZSUqH86RpKot7xjSWq6L37SdDFsnKn9a86wf9ciSKPn4aNDTbzZS6YvP1PjkThdspDFnx2USK",
  "key35": "LtL27Qy2jjrLRyq5vtvqMHwBQ5yesrq551eKvkLKDZSzz8dD5VaWyJWpyiz6dpTYivZ9G5zQ7AmvSjtMbjHEHN4",
  "key36": "4VpLT9awj2nyss7wG35q8jhssHfkbvDAxecVFrBPbH1fs9q291UN8aBRRgzDLjDttioWDjfUj3XzGFwRGLMibrF1"
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
