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
    "2tsMSafqGdSWw1iKh5pdySKN5xCXtBm2UjtQh5qn6m6fjfiPNzVtzT8xybNY47ShkJtERamzTS8uHxqgMHuyRYhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpgLnXZvdkWcojWQ7H3zEnHD8eFvFJ4LPQEtP7AdSFPLocatCvreGUh7UQFJRWkJn79EFzoTkDNmEfD9RxKjK4v",
  "key1": "3DPphY9XHKHnmToNeTb67p2Vwj5geHHkMRi5ijrPw6PBnP2UVKuRPrRQ2TbwzV3SkTk5BwkuUmhR19fDSm3z1sKt",
  "key2": "mmXwNeCrkKyrYiGKKjpZqcHhqK1LWJktA1s2cAf51rm93NM3sKwzXBZTzXQ4Dp79d8vuW6bZwGZGHCQWwxcYHvi",
  "key3": "4KhDPWehodPEDVS2DJuBdug8wesa6diXbvCi3LJipqhtM1Zs3XWDYmDpc82NjSuc2Kks1k4tKqotLntfgEax14rW",
  "key4": "3jUaMoXjUZ8mWJ1LbZGWxdCYKx23k1RUgvaECqajN5TsawbUBjBtAxB1wnS2NXiRNhw5PqSFudCtbCQhod9s7yCT",
  "key5": "2RGyGD4pkTSwwvMaHLFLKmMMvDLbN59dstS6mQvQqSeT4XyqSJazTxxNqGxvmRM3CGVxn6TGPbPXCJ4oeKtM3LkH",
  "key6": "4b5xw5YVRzqmx6zLhFzrU5tJS2cfgGbAnATcpzy3q95wgCK1VrqZcWp4aEZFkmBLnaJPESFbdqX5JxMsWVcjsVLY",
  "key7": "3WQph7ugPPHZ2shH7CEGLxuDKatQFQECt2cUcio5wjJzYPVisAXixgFSZk1VszwM81MDssGFbz8aBjNbErs1Nbkw",
  "key8": "42fSAXGEktqnCxo14FtUxCLKufhunPzoH9CGqBcNEC2EhaYsTbsCTeorCpfuqx91e1ujLmqAzdKANtieB89asFAm",
  "key9": "352xNBH8NKJQk5GZvmjfRptW67ACZvcsMhSpfdziMhsMZ356ZMKDtm5o4FoXmKcFZLGbYYaMUKaKVsKH4JuLevp4",
  "key10": "2g6cSH6D435kUz7nZhqYMfEgSfneaRWtZU5YfmvWBfPwna6SPxpje2MQdyEkxB6T26RsMZJSKHMKdq68g6FTgyYi",
  "key11": "4DxakSYXhnbotpHo3f7CZ3DKfGZ97ZqguBdeAR6FxK3QBDcWL3mKMRv2QnGCw41oNpuL38TLazXYH9Z2Uoe51U5h",
  "key12": "9rymXnE5e9c2bgAbTW1jXi18U8SyJMS7fwQHkP2QSt7dvkE4EKFZUHSVz7HcoQac4mEudTBWAbL9qL2i2vEohgh",
  "key13": "ag4rqPrje9nvEecC5FfgQUdPk6jc8738VQyZtqr4ACYUetFqGTRbaVuJCJ2uEJyxfBaS3eWxcYycAhUj6pdybYQ",
  "key14": "3Up2q3mgFrGfJspGG6ZRQDU1WC3H3EFbMcCP7ABgHtaXuTa3nQzYGgKYSBRuPgCpS3AEoHY7v7b9UtcJqkZSPJbX",
  "key15": "2jWFS8n8jmciKTYyXgR3GMpyhtMXg7T5r9q5iJwoxSYqcuAhNtiSQXEydSegFoEMkKV2AeyVVikk2VqTRkhpCcWV",
  "key16": "2fZgjrLDangyeoGBpPqbgii6i2iSVsurth9GoPX5KkBrMChVDVivLkGZNTsb2eHcJ6Ufy1vVzoXuJg1Hb5fK6e7b",
  "key17": "eeCkB2hm5zyLKmTFBjHiRpegfBfniDag7Vec9Za7z2cQvzLHkaxQAJYDnuUgpwU92fApV9Sj3u7sUD7HqEyPpc1",
  "key18": "4aMJbqdfjnwvY446Gp8c7L8KHDGP3wirAa7f5HcMMViX2yv4n9UC7rGCG2en43xb5JNqjH9dXLVgvmKYZ9C4JNy8",
  "key19": "3HsUR2b9NzvJvKkCd3qfyog23AbWYXy3j8TfFwtcZRV5yNWPzdx4owVbDvPLfno3GHZtQBvgBwXVwD7jV4koqjok",
  "key20": "5y44ggoVrf3RQFKHsqawUbki272euuyWyCY8kWD9sWiJrmc7c6A8HJCLK5NMVCFiWWvjrMdpaDXV6X6UwWrhj8WB",
  "key21": "5BQXHAzReup8TYX2naN7NRCdcuu5JbDVU19M8atHw6KFVQG2k2P1cq94QUSBt93ffMqtjWdGMb1LNdY4i1jLwZHi",
  "key22": "2JrSvWbMd9iM1t47QSAGH3Nivm5Ho2AQ7ENdUcR5EQPMkFEmKxuhN91WEsKYHhv19NCU2c7Z5dYRkHirmMvZPqgf",
  "key23": "66buJPC1yN5PLBrQaxnvggzaTyK7mkuF7mi6Dz2aGzyJqyneVAvzS19JwZdT4eAPQJnpEUxdfzU9ZQZTaZNjN5SV",
  "key24": "wcwY6mJheEojj4d3thFiDr4KHbf7KrtyotCZLWyXaAsMLUWqKiu1uQj38keCUC9srGy2yrmpBWp6k5XbMKvtUZf",
  "key25": "5VLTkc6xg6ySaxu94Dg7sszoNinchnYptTS56S4Ehi8KZr1VeaupE2nCmYkvNJLnDxpzzG39WLkmp7ty7yXxCcDb"
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
