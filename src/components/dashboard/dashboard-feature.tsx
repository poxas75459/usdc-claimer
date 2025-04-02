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
    "5bkWLqZPbVCzriZvKwUnPwrnNqG8W2bhN2TjhJhF1D8b8yVEwT9NCtWTF29LZpY2ipXUBkYBkJqM3D6BZVfmx288"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPvkXUuaqH229qWbmiuz3c6NpwsFoAAkGwdKonFxm3E6wK8kEygGyFUjoEytmKp5zeaS3q6RGymhGUt67mNmthK",
  "key1": "4WC572qXNjEmdgHywZKquezomTD9DsTDPquny6X8L95LGhzU1f4jfDtHTs5n4AzM5hDhvoAcftDSmzsP4C4V7XDW",
  "key2": "5H3SaL56TWgciF52y8GQ1Ap9znJh2qX4MqTPidRvMtZW3QkiDJFDRBaUBa2BVNhzwk1ccAyNypLmU1LzTq2KEUoU",
  "key3": "5WWZQZeS7ZWCJaoBmALF7SSKdbYuqD4kH3wxK26qvEUMGQnLadkUT71M7WkEL6sUnV94GYo7iyMmjGk6H2DVBk5n",
  "key4": "2MHjMaS15ZkEdAeuVx43e5jdUupASBfLUjLY9XusrcoSAab7LRvgnD2L94cbcsCsc5ntkwn6TfVwcNdZFGQeTjyA",
  "key5": "4F93S3so12CofzUbFs67dEUxF1wD4wx1iKB6MUgtGv3eMqyCNSVbZ4e8UEYyP7n4GhPGepSCioSVrByMQzTywVtc",
  "key6": "4viPaCuw2CdYmg4MBJpD63Fxxm19KxipbMagY1zmBjysiSJT83D5KwJUKx51VwjuaD9qX1k6xsfR2vbfgp5vvEeP",
  "key7": "t1Q5eMrgoZwWJ7r94M4y7oKdAt7Y2SHABfKJvV9cGQzHPo2KNVSePyss1Ss6g1rq9VpQfsReESxZz6rbXHwZjgg",
  "key8": "5rJ2PRXzS38D6V2pkiWx8duixnjZKZ7q7PQgyJb8r2VaooPjhXy42kmuofGPAjKuYhgxdCC8Ui9sEPApT4PoxghG",
  "key9": "4DFCC1JADaQavnuYQLukm2q9hYd96nMa8ZknQMjLH3KjhT36f8aWMuQnVVV3bW8EQtYtApqVvnS1kFjTjUW9e1Mz",
  "key10": "29KHcbrjDp3wXu1Y7DAsXf3LspPNXxYSAcCwE532RK3vjeqRezEe9hq8BxVAm3ci3MdaBjwY5zJtyCSpp9qkhJi1",
  "key11": "3Tsv7KViVmiTZMzGmMXz2QbY2jRCcJcGmSrUVwCGtYvCN6qkhf4qpi8U48muRTH8vQY5LtdfWUEZQxKaZQYN8uAC",
  "key12": "2iUWi874EMzTSLirAzqCfecc78YCH1JR8vu2P65yfg7hV8JpoMKsq27rrjRF4dXebKEYwAkpd6aJDRfpKr1yZ93n",
  "key13": "uhRwfucuE8YSgKJW6Pq1gDmbvaFPZguSXBrwtb53kw72u2r9QUjYnxigyr9vCk8dJArUWWMT7NwYrECRxuSyG3P",
  "key14": "2eYMT9BwKTdh8wbwtj5yg8DDK1MfoSMb17V411GZT6mrz7Ravm8V4hUeFbN7SG3awDq4EqtUmt4UTjxX8Ec9hfbE",
  "key15": "5Uc9wdhmocc31dDgaWnxpA61HKBCzQfxE6RbGCRhuZ5K7tLxwuQkhXxNQEdHmmUW57FXMymbg9Pn6Z9d2oSDxiG5",
  "key16": "H8sbZcKC8WYf7dYU7BA4C8pWS9jnvTWVoBYSVy36H8ACcp8q9ZewkVer6PVzE91eZrKmJhj7rrymG9gQRS1GbF6",
  "key17": "5LeWR5xQgUuLrT4HwdKCwzKjFnyf9EGdhR5PjAKv6g8QnqrqfWhq4ABQN79ZG79ydRGQKH5KfWzZSory7LeLqhR5",
  "key18": "4r74rRpyu8XnFBDQ7HC8L6Fssv2cqM8CdXatnMvH1W4eGzSmjvEG3aqNiz5NZzj6CEZod4mw8jRybbdjvJPdF66k",
  "key19": "48d3jNG93fhS7u39hd1WcZLcypzX6eT2HgZPVVfKtBr9dKbZQ8CJpTZxKCukhoJ38QCPtkmYeuPnbb6mfkNd2Kyy",
  "key20": "ef1JSz7yUwH37kPwx1NMYyvokvNfosFcQFvEemYSofSM3phZTmFsuc9MXwosEXGsnmaHQaTTtcdugXGkkRm4DR1",
  "key21": "6xPh9udTJW6giac49nQ6cJNsvReq5eWdyjn2EeXg1LMk1fcafKjaghxwup5efvAmkBa6Nx84odxE8FaqUjNU249",
  "key22": "2emZdjT9XRvZoxSywt2hCk4sMJUprqWckRqxDAh7u5kicyLtx4qVncqUQu6c94KTAPA7WryVSmuFd6JMYPoEmqLG",
  "key23": "22ryyxb7GbBnbTMYUPBYJQyatKFEiy7kxYKWnkus79pTb6DTmewXfepndQBrsymNCtfKFaGXCLi56dLX7DMMBh9S",
  "key24": "j6FNXZNXdN8cF7L9CaJUESMoSosdD9ipxwSPTu4F1r9AgNrgPxp8ptWi2ECHUkEkUFi4GTdwRcGco3ttM8dFFPe",
  "key25": "2XLjK2fUtruUVv2m2JLfhTigRe56XeFLq7Th428rPPAA92VWAwFdQo3C1FCtUZ5yAQgt2gRzjcx4bZkFJyNogbQe",
  "key26": "2YjuNfqQEBz7FrUaAXkYSPje6kAQA8UZhHVNYeL1Wr4L3hmaECQuCV3s3CUAQZs26MKyV4YsCtiYptVoB2T4iAae",
  "key27": "3GASFRRKLiswbrCYqbcxT4cyQveUdyMFv9PbNk7i9kW5cjGTLYVhn9QQcfCXassEaxUKoakdW7scxGSWXR4dLh4Y",
  "key28": "y5vyFarMy3857tTwWZjyhcv9QG3oXfWhw7VB3VnrQ1Q3QdgVUYXMRaWP87p6rU4yH1t1MrS7GjsfqqFwZjeRPg1",
  "key29": "4p3X9nx34ditMFzpbKpX9ch4QukBxdYaVSSYfRdRGUmp4Xokm3sCtJJrKCc88PoGnscFa27khxxr6eT6BKipchte",
  "key30": "5Ddt1hwLrQbvtFy6uMN12P3QUoSazfp2CKrGGYC8R7UKKTKpPRa8XDAhT6pFKTpMTPLxNDDoxAEK8ciYuwYZRgzz",
  "key31": "39s73dvfkRu8xZPPnuPRdj9JPuzggjEnP8fvr3QhTR7fjmgSWSjoQYXue3knjHVjJ28tKWupX5nTA2YZyqAhaieu",
  "key32": "2XpsFHz94sBhMGuh4Ws1g5c5ebtjMmrMH9FiCjY8vbQ8p59RwbRxFGa6YRSk2Lgv2Z3r8j17ebbZb21NPwQhtrEH",
  "key33": "2oTF9cK7RgHprtHuv1KBYNwfrnv67g4WXLrwaKBffokfn4EaY5gH7v3qVEn39i6aGQJ5Kf7dNgk83m8bTUy6Fjc9",
  "key34": "5ba71PMuEjgYvsqnUpJq7QukViqU2rs1V43cXqubddbMof7wikW1pFm4gCA81nJnfY5Rxisj2LmicY6EvYKVPyoA",
  "key35": "44ZXKaPaRowhF68rPXnLaQMt3JQHRKd5i771cm7L25Pohoxzi2ntt4RJnrNPiXewi9ZPaSaXhzfJ4GScBdKT1t45",
  "key36": "56NtxPvr39ybDeaSNk8uYuKqQswZw1zNAEX8ihbQMiwyEEChzia4PXSaz8HeTCusxfAaUTy6DEUwdbNAYELjszFT",
  "key37": "5pW7c9sGVM8ryez5vqNBsts2nx9uzd1XFxWGCobj8EGXKNyb32cxwy9jPcsnW6H6BgaKixcmTLYcvibaJA1MEC4T",
  "key38": "37Ame2XbAWcr9WMJcpkvvhnZivvLurAv259wmx7DKBBbqhe5wPeVvDgiAPSwaW51yc8GnHqhn7KoVUkQDwuShQgq"
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
