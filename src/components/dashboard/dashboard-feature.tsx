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
    "58k2kqqbuzY4Jtx4gCgZmYsYXdHj74mJ2NqJ9G4xxd4cGgCrnYbLDQkfJD5FQG65hp1LhvVDaQyPt3SNMEzAgEYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhmNv3gKA8fmEAdAshcGtZU8JqB7nRJpj2M4E5pptFADGu3Bd2F356LfjhSyAdFCe4r76Rs4Mxq1KfdLwkP59Rs",
  "key1": "5AukK8YSurQTDpZwap4Hkyoc4b2S1Rrj2PU2yLcoqVWXPrMFFBmKAZce16DQPrxzQHSPsA4Dk9EwpcUsmX7gxvC7",
  "key2": "5wsBQKHXVzKM4nEwP6RHEBUAaPPw5Lx3pSSTAx3gkUTXfKYzBEPUPRdthw3w1DXXVJvdGPNRDhAGL3ZZNjnqpWUR",
  "key3": "2zJ3K8WSLfw1E9HW3RJv7my8X5YrLDYjpfdVQNbepULx1Myb9iydP5Pn58LmGPszbaqPWfN1b2HNuKoVrFGz1oD4",
  "key4": "Tn62T86AszNXUCkRiDwM2aLYDoFajJzNrjZZEciqtDKRUqqkLVnJkaRh6MWa35wxuFkvPiv1fmndnvmTXwm9rDX",
  "key5": "ij4WsCHMMDXB2TdQ5WnnDCcKzPKpmVXBbrDbHHPp9iE4fCa17dsVjtNB1ifmaMpv4VjmSMp3FK9zgk55cEA8g9s",
  "key6": "54ekAkVpRpewG2YB79bQwDpn29FbGrSdxMqwgtmJfDbUHYqdNngUs97cSZST2HEwX5TBYW8MnbytMaV9oJiqBfT2",
  "key7": "5rzMSR7PdvjKZhL7h9Ru2pYpkVg7xo8whvVh1DtgermcXFWUMcmTCN1zvbUsKWCjcZpAFZsWspMbH999Mx1pMxmj",
  "key8": "ukvfhMgigPdu1apqTpVp87DEuzoCfTMf8qyNjmy3qtr5jof7LNx2ko4L3Lqe2MXnaX79pxQqEnNj8x52LJGoCTV",
  "key9": "52X5MfuiTepGk8E4kGhUBeYbhfDdX26mAXL6uE6RdZfv77BGNyv74VoGeae7sNE6oACr4fJAwxsypcMYUJCbLCZq",
  "key10": "3sU3L4pj6NkyfEcaXbNF5dpJjKiPPzZ3MSHRPwHW2fRmPooM7a8KxWzhL5hS6HSVAUa3MjFSJJqBNFJBZoyZYNLS",
  "key11": "sE5i8CDp9d5LnqR1ppxmf7j2rXso88P8wYagXU7RK4XmvkHq2V6hWe8S9DyKUojqp11nuzwxVeVE6ZsKZFSzxw8",
  "key12": "5NtFu6y9oysT3RR7zaP1Q47wW7gbA2iUyjLKktDHsJNzRuRj1trpfjafB2A4qKbMTkAjBYVM5A1Fkn3pMgd9mLdk",
  "key13": "4KdUUHcKUXdCM9PpuBiQ7wRxWMfrUNbfzrzJi2CjUMijZiqxvQ9GfDmJ65p13fq7T4oTYEZpyfumc8SWUWSLTjJL",
  "key14": "2ZpTdN7zomE3nQcsjwN1nKMe3ZvRRdqg546HZQq4xhwMdGLbbTAWGVMsXi7vQcejGnLtD5Sq6re5ANjFaS9E9Gyc",
  "key15": "3pi4tKCHZxgPKZZUcBRrA8HwJSYyT8H49UQwP8BuVJYTrr1xHbmaAL4CrA9XnL68ZPhv8xy9RcxuBAmA5EXC6R85",
  "key16": "29BRVd6drCQWx7oarKnFvvjTN6eXADuVfKDWFE1kZXkffP6kwqFjejvFaDaZZCVGTHeJSgWPk99w3865uUSyLKyJ",
  "key17": "3LZry7SzmxiHzwonxjdpA6APFptZwK1c3MWwrERGyaaNyce3mQLj7N6VwpNv9qAn6yAkEAYDaiyWq78fmGtqNgJa",
  "key18": "TthWNRX5CA7NXibGDstpEcoRLnE1qcHnximWLzKeGCfShPyKG1eoLw7MdwzPbGLKpJpCYmd6abiRudEPw3whpj7",
  "key19": "KxzKhN5MDwx57o3GxmqaFccaQcmBKYjzCGqRN2XFC7acmsyBEVz9kiMCREt1W7642gySNwYhgRfyNrgVAN5VcxC",
  "key20": "66hue51rBWBcLLjyysjjpb5YBcspe2Waawh6kKDH71eLJu4VxfJVAnwverqAjpgSgwEhppwV4PKAwTfisxyyLaSW",
  "key21": "5AQALhvBpnuxuCQG1DkKtkEfQXUbY2JUBpVDFYgfq9yV6ycySp3Ti59M2vjdXzQiw6eZ1eBnPCmbcSuq15gcmYcb",
  "key22": "3dnpVcxV7Mhp19gvn63PCpvjWHn9szn7VkA67g8k2St4BQmNryMe7Gx1fS7j29UErfaewMQRCCNF7wL6FZutEYkY",
  "key23": "3wppGUmc7f3GLhM4cKQ9nczSuQfq37RefA64mfzpRdqKQFFXMmDevK21crepXbseQbEfmC5yjsvob6bhrdJw6d2J",
  "key24": "3FDqtPtxY1AsU5tv5F39CXzmT9scJqo6W73JsmTNLPqzrF332qSZ1j1RW9rZQwe7ewNgDNHVRCTPTdpRvHQx7BCo",
  "key25": "2smg86XPSU3gaJoUc9vP87h4htdpB55qw8GHz5YYSt3BUxJAD9Xtq7QTjpV6x9UiADbJrM9Hi1edkj5wrSjhPHtG",
  "key26": "tZzAtpxTaqkGBJsBDJTFZV5DVZhNp6Vqt1bSNYZj1U8SiiqMccPPqJ9yCr83rau8L9ZbjZdZky2KkUXcYLEJahd",
  "key27": "4qMLpZxjRTetWpVPbQYd828wTJQbZoYxyE18ExZXP5GKkVYxe5f6iq4HCbfCyQYgNwuf614LwnrrHDnxzQPTPTYy",
  "key28": "3UjUYdjd1DinREssgf7DpFVPk7btjwcxSMnGAuXUWVwhkaoWTkEw5aYMbBLTj4qykWm99774WukFWYRtzfQzkK5k",
  "key29": "2GdHTdYzBxSopFqLhuVisMKdVKNWrYw9duDyVKwpcJSBZXNPt26gkXkzMABYGN7x3P4gfTqftoEtv7cAe5HU8MCd",
  "key30": "4NKENtjvo7zBnTkouvjn4VSpsDaDBA5x2aS5M3buwRn34MBJT4sZiSwymNvX8seHab6wHfQBB15oZSWysXzfgmn3",
  "key31": "58vz7BQXsLijbrK14G6JySEH78Vj2UHStfw2xZxwZ7M63WwWK9uqmyDiavqzX95ZLbhW3ycp31FxTgSShro1HA2L",
  "key32": "462aiVVAESW6eyHErhNdWjkkdykBaCLiLbKe7Fndn3eppYfE6R11B36ZQc5uNL5dKaQbgK7bssEimVCgbvVGsMAG",
  "key33": "2WzZ2U73AVZbfLduuApHEwZfNcYmQroiLHFeh4Nu6fuKdsCBaC24PSPX2m3z8aRqPnkYENVZMcJTpirRUmY3Q2vs",
  "key34": "2LoLFkduHTg5tXSyMgUFs6sRVF2RQt3C4Lj8EtCahq3BtQJBxNUDX9ktqjqshpiF2FQ1co8bCdmRGWcZrCNSrWjb",
  "key35": "5dFbELutMriQSxesrcwiNS6FUtDWUBYUCcCsPNhyDCUVYVzLRGWouEpTYJUtVo9tsnAfUg7avak4K9hd31D6rMCE",
  "key36": "2TqkjtwVY5LUJB81WSpEgDHNqh4nJBc1FJLmx4Th1rfEDLK4r8zSCGGhSyTWTfS3zjJ8btTehsZEfa1eEG7UqmPx",
  "key37": "2J5MsMC4fdyvjvftYVJrDDtQ9eTTMQRHgdhtrq8YPN6DwAq8r8hg9oZsiyxMHmNXKmpECdBtBKqf5Sg8F11zvg5s",
  "key38": "2ZdzxopUoKbyo8rfikEKG1iUc1bx9dwS85aopq81GLMnmYvHNd8vCMFRNPfPhvWPySQvuDuZBhofPx5uP4sQ7fn5",
  "key39": "4uf92jG2q34AFGHPLWVfrUPbbhzzwADbm6g6AMW4YcrEA3wC3pyaG2ZEV9vTppSgp11KqBAPc59tar24ZZhWfUBr",
  "key40": "5LANX1fVvmrtcBCYekHU5jwa8CJqc5MVtZoxn6mer9M4uQxRCyQRhktrze6yuJy3uAkP9rc1EHFVVEu4VVWg2ge",
  "key41": "6CnWWKjucrcYkng5Pw45VU5H8VtYkvTUPm8UB2se5Ls1vaey89837h1bTLRB1bRP4Ef3mvoeMrQpe37nhkURtVS",
  "key42": "4E1yFvPpitS2MSRfBX6tyyZPonSymMgrhCEuALU132SakKT3HVK3BpnD19TBJN6b6YKcXVBXhsQwQRujF3caZTqK",
  "key43": "2FL6q2BFdtp6SaHD9zrTGHycj6YuHH3ix37JiMDLcECm5d66vs3NCmvSmJpfkehLccE2YCkVs5ABiXUwWAdARQtE",
  "key44": "5zPPpLe6Nv5wE6FtNBfDkfsnjzvy9d7TJiVCpTSiZei2BtM696nLCfWqyoXSvGNnYnXrQkZbAofdKDEiT8DQEaUf",
  "key45": "5urkjqz8GA1kemTmdojQHr1iBuBfYXHKKeqHBcDsxZjePLjsak1RE7JBigsrnNX9pxc9a18CJfUFV2c3MaodMmb6"
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
