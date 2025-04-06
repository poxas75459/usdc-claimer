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
    "2wZTvhhtfiCjf6xRDcJfq8UzqRSAxRPKfNkfCfhcbUHHrQRpr2X4DGopBv1SDtKsxJxDHRgeJz8rXpX4Dodx8YrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4udt6T48tyb28EbAEdPuvLu1Pty43Sb27Uggxa2H5ekSbvZECJtpWJb3A3X9ej3WokHRqZ1MM15W2Rm8xaDigmcH",
  "key1": "3pzJJGbrzcYapD3CW55Uxcsgb2vHKpki7dJsAL1jSDcyedK9GxV5rERybr8TgsnTWJSgMV3efoDKgRNeJBWHxSeL",
  "key2": "2uv8TRvufiWcMQbkgyj1GLuSXxraQ7wQaS6waUeQB1XRafSYMzMBbX7oyzyoWd6fg8EtncwJsvg7YQugLmJEgeci",
  "key3": "YR8TqLkgPr7jjET4DVSE2RFnVRN3xHtx6epdWfaKm9EMakVdqBgR2r4MbnykVUXvmms1az7RMuT99TKMXiS2Uv4",
  "key4": "5Z48d7CrR1Wi8dw7JeXcaotaCysbVrKsJDMkm1eW1G9qrcHB6h9baoDhgTiYL8MJz8ncZqUJgwjoVcBfV2kQQ3U2",
  "key5": "3k5YYSFr5oDZgPzB2kpcEHJLPpS48Ua5xMMfbYn24Ne7dZKytMU7muz2HLJ5CQfrATEe6qZv3rrXP1BeTN9NtLr5",
  "key6": "5n9cpXY75a7oBHrsdg58gFWw7i4yei8sdRTSAq3dDLZZVJR2A9udBTojYkzy8PVixeAz92mmFVgxKgRGgYNYCnKF",
  "key7": "25TdY8w1mBcRWXnT6fAMyKNQG8YL6rKGgW6kf2mZiMcgvbvN4XWMtRkZ9b5X3QxH4o3YcHT7KGYek8acDcfxCsrn",
  "key8": "3DMpBuDz9imv7Gtv3ECuzPs3F9Vw4USQV7dqrFMbAub7QFoXDQtTXezS1sF6ritaJhnHNjhRabykbFJtrqPnQW1p",
  "key9": "65NyzKmDkVn72dWCxQWzGHexPXuXDyg6ULBCQPks3HAqExDa8egEoAg72g24FSrXBXwSFqs75Zz2rvsg5AbTn1AY",
  "key10": "63hjnkn1oHpXRT93bFjxmoAPmCj4BrqSe7GAY6B2fRwXKE8fhipxJBoupAypvv9tguf8LqkJJkHb5D3VQ1UJSDU8",
  "key11": "63X5NmCVmkYe6C7T2kJDangBq46zQDzJwu5y34v1CNq6aHdxkxYyUeqYYenPZyV8u99w4BqkAkQUwGAPyFiQuYwd",
  "key12": "3b1J4mxzozjmCjnRf11sWJFjPMGRojGqSSAcPLQpGKkkcRxw7o1VCoXntmBjWJ6FEHowAKwjTqs6hYTFkS1X7vRB",
  "key13": "qiYhWa9Kf9q3pLGH4MDhtfdK52KLPjdRvAbSJwUY97Y8i4xLhef8oM4hrEruV6a25So9vkTHEbuTfZz7gLh6SNm",
  "key14": "8NDSVMUHA499mLxkfzA51nKfYMeG4CPhEcRSoK1vqbdsNMdEAk63P3hjgG1yK97JEMhErVdkCHmXLHBHHuPRwH2",
  "key15": "53xYtG7PwMr3L21dszLiN2Z6y4UivbfAG8bFWpqtjxEtJSPY35AfAoGaw7JGwBXZZwgjoyC8fHrzFE8gSa9nzSV4",
  "key16": "tF326WADk6F434NBriTB6rUFAeow9zBMhw6PSai6yCpRUZhFU6qycBZLFcZ2AH2JMt1WcuFkrkRorQgfLZ2cMiT",
  "key17": "2YcaSFDyoYoCJsF3E1VGiaadAdG7uiMBJDPS8vNhnchHDVTozCPFhvauywFPTNqwWReoLMSpFR7EQYp1umd3oUPi",
  "key18": "5vhSCHCdbwMsFBKwY5zrRub3i2fpFyPde2kcpborDayYpZqqTt69tuBhFZCaytuCbKMpKhjgo2oG8UHmW67kFYvL",
  "key19": "PvK7s5qmp24K539tGeW7PtQCn53wr6JwyX7NxxhfVRAX71ejFaMSs6AjdHXUXomKZ4s441NHeHqh7PMBNznioYa",
  "key20": "22Z4Fa7yBr2ZJSJzWr19zCNMJHgpoF4byPEeNGzm34v1xw7PW1GcomnMXBudbjfzBveBQyGFhjRtMBipDNeADnXQ",
  "key21": "4S6ZE2XZp82m7mDtJ7zWJcxMmuNPYod7gNZ7QZsWXoKWiPYgX5oqTdEDTuYghS11AXNhaWHB3tKPmGjpnBuzZdrg",
  "key22": "tdRKazL36EwnvMhtPVzd5Lk9EvXVfLhT25h1BSa17viEMLsMs1RbSpcNxVfUhLo1GDXCKFsSqSsXUoPZrANhGgW",
  "key23": "6ezdgKmDzNDCzE1uUFkrVrY2ksmLXtfyGxgagwAgYAnF9kwXAk1FQk522i2m7DbLqWjX3CoXuyJ3tzWjfckCUZC",
  "key24": "TPYmfqHMgSAnjvF6P8yz57hApiAoKjYM1Hc1b45EhReoMDdtcokWworhtVMfKzPJnJ9hNrXGwNtrQkJihKPA8V3",
  "key25": "444kgRMz3MWHcUwhBDV9FhZBdLdj3ov3PUuv8orQBQn1U4GMAeMTF6Z3UEUNLS5G4W7FWihTqsL8LeHzYcRq4dJ5",
  "key26": "4PaAF6GnvHWhXBzVGrAY8LZGMuzsjwKZe6cUnBgWqDBqjZxjo12yi77GyjVHhmiea6UU6E9bcj3QwirscftsjUX1",
  "key27": "3keiPqqCaEzmvPQeWxNuA5DQH1MJrWFDYX94Cn1rcmmqKRaDpCdLrog91sS93qoEu4BB6aw2CD1X9ZumswSgThb1",
  "key28": "4isaZwiTuRXatiXAGJ4iLKn4vkc4rcDqp41xsBoaJGqLdLVxvH61ZETyDJfQQYwaFRfiF4RJZNWsog4MzojQRqzx",
  "key29": "3q1ecxnJRgfMMLjdqTokwfx31Jnfs5jaaTujcuiAvk1H5xRYTJNyJd1JSzyhVdfS7GMFfHog6YMUNezi9woNQYRU",
  "key30": "22DtfJm6dNreb39aDi7kkW81BLHHoG22xLaJzPaiLZyFndY6PQi7MhMeJ4LcUpnTqsrLENvKBk3rbVpJGHB9boEq",
  "key31": "5b9MZDvaLYfQwR5S2sAey2Ro9JtF996bNoEieZ8mvSkJMfbYvgRZWVbpUHm4sfBSbFht6uSYz1TjzwpkLhc8W1kn"
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
