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
    "4bTTFd5nHczgMtorACvHXGjn4GJz8Wr7FaWfM2EeuWBD4kd7PCswWzBHkZyLDFetjfpdhGsjv5PfoGDd2oNSaQ4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EpGB5E2EY68hTkFyTiw6a8p775bVVn3DKgq3vhvN3zMNmw7oeF7GFwaLa1rvm8xJhky6zZQNhYyD8Fz6agKbg3a",
  "key1": "4uafenG98SVXGNNFHRSHicsr6iAPjoKKFoNmgCU6wBzxSc2bBWk1dhe4yLW3f2j4wQAakFdgLq74yYqS2DsefRaY",
  "key2": "4eqDFubsuhEQnzQ8V3QcbAG2LXc1tWfSS24yM8udHo9ACbamCkgCdweVu62PpEZK8aSPok9znKYMfyb7iuahWVhJ",
  "key3": "5uj5zgvJSMKG8XrQFdNxXzyQAQxXwZsAxSimcoAoAnXoEQqLrBVP4JqdcUtFAY1KKtnYnu867sE5VvZ6p5PVQuhy",
  "key4": "3wBqR1jxJ2CEuJK1LuDJLhkXJTYTw9N6tHLSUgkcf82o1gpatMmhcaKSLRZ5Ejvy5goYT8LUvyowt8fSYaZBZgm6",
  "key5": "4cobShSScT89YrCL5ewRUjg88esNBt4pk4jUfoNnHsUmeAzNRyybq1B4PRPCsC2SS7Diey4Uzse3fbgcMqZoFuhk",
  "key6": "2QuGE7kACoToaWk1yUZaY8RzmN7piLs4i2o9GkHNkJ1q53nXmSCz5CZJntbANKDnzVNSpX9V27kUeiiprkMaaRj5",
  "key7": "XhVFa923MX78AcDRMBUwwVsJim7qibGyD1RwN9bvzC73VWxbjs5TJmngTSKcr29irAxyTcDnUgAoxBd79phFCBS",
  "key8": "3vNbLMq3dW1GvNyYjmNQyxXNWjoLnNt1RyTyXmhhxZ8FEDNc7u6MXu1915DkaApvDMh3nr3FUPrsdu8hN9r6Fk6T",
  "key9": "5Hgwd6bdAQE7CsVvhAYPdCTWDeYVX8qsK3UWrfDF2jA5NKgNx58J7gt8m2y5vxEXMzArggRjR4W1MBBg9ReBWChd",
  "key10": "31zV2FhzbkrJkKDKNDNUH6U4qRX9v5WSXp2sujCednXvtZubKDAtV2qmybMZ8cyrcZVXFGwB7qZVec875Rvkahvn",
  "key11": "3c5Xjeph7cD8rSBqz5c8pB7aEE14KPihWocuZXpgJ6XCaikerdi1Kyq6KhJAigvw42QJ4PZqSMfJ23UDzZC9RAv2",
  "key12": "2N5LZmqSsKXGSsibFej7bboYHkH62aYjXvwEyuvzZEQcgXNMJ1fPcFwgLokcF5WckQhyNpwmY1J2ZJSQUdbZBSz2",
  "key13": "2bYMy6KicbgVznSue5zqZwNkk28B6B37sv5bxUCVedgcQ6P8pNC4bU8w8roVsWbdb5orbVCV6vWzTFjPwg1XUidL",
  "key14": "yN6eZVgLtLDyCji6sLc12H8Yenz5yidVtAX4o3wwon5x25AWtbTqfECXCUC2m24ioHAm3rxewUajpUwmhGsbXB7",
  "key15": "651Q1UgiohR13hH2yx8BPB7cnJHgmamv2y2F3wrVLgWninuwtTcU3iYetG4ixYUZwhy2jjFTaTUUBTmG9GDwjNse",
  "key16": "4F6AuT92pzSxT2BoEGbeBXpijizWJi8n7tLRqya6FMX5tEBdMVs7Ngq4khrciSyfiiPbMB3i8VH3j7k8aeJiDGqn",
  "key17": "5HvNWeVEqicRmfHqnzFDt73ULyRj4yFbdwfVecvchF7KdkbxdpxBa1xb2nPJTdSodBmHRo9Y7Qv4LYLszuahfMxT",
  "key18": "scXhyiE8KLdYm2Q1bDMkJZTSN29CnUZhJ4LD2wCeKTs5YfLYbqEw63gMqB3naJ4oksgLQsbfcNpMKcoBr8Aoe6R",
  "key19": "4qPSuUX3t28j1vL9m31MtCJuDkjpJJbHnJp3Nzqk3fzVudwXSjpuBrCkNS3boqmpNZymvvELbHTv5JFzXbtBmXHt",
  "key20": "unqWtJdyiJtpjJNhHSfXU1qYyWFb8dC5pCo5LKX12k1pw1MfkrJxD15ojz7W438f2TYWarP96DL8vuAv4dXpiq4",
  "key21": "4APqdFFMV7mHeLwLh4sSfTkqRdfiRHT61JniczoejM9ufAe7quUCH4URZq3buWdD1WgP6TQwM7rERX29K4aJjTit",
  "key22": "3WhyRqV4jxhzDNFJAHgVvN7BpfVgHsTVFmxVN7d6ZY6eDKHRo8vxpm9D6ptHyrttebrNx4W2bKuitCLvBWZzwPFe",
  "key23": "2ANdrGgvfWApWAxaxZU5iyZwN3dh5QqLNoC6b3779icro9oTaiAsnsGasRRDfvCspHxcBX8jR5zekwZzKKKryNz8",
  "key24": "VNFDYYWG4Tm7SUGJZJBX5rgxncXNBgudaTHwFEDKgLRYFER1HD3diwQN8mjy1i6C5uov5WBrthpsmmJdR6F3suM",
  "key25": "3shR3BBndnmHF9KkRv3qhiV1hX5ckjBzH7i3zGNqad38UrezuVNuTGY7AKMC9vrYfbCCXA1hGCXshEZzJSLxb3Qc",
  "key26": "4eGZ9uDZvZMyBEHNUShKZywFzKCwhyonJ8vct6Fk2heq5Q5y2GCq15rW84SXPE9CmcCKT3RWAEugxY9zo1HXPK77",
  "key27": "3jwSDxqqmHxX75njr6iPwgbMGn9VMmnpHKfyrw5TGULk3urfkz6hLzFb5tajmTZofvVG6Kbm22PZz4BS9wLGb2Xd",
  "key28": "3Sr5RtsD4GpbBBTu7RrLEWTbQjq5ZmGc7dEL183P4vZ3QBwjxWm2o1Zj9gTMdESGCT2WGcDW3kPnqVCKZWieRgYX",
  "key29": "2wzF9Znsn3zda13gDGi8fW82gSknVYzxHa1vAzdVLeGmpvCPH47gTVDZH3PMhXV8SX2eSEUzxqeZHdpud8pJzXuW",
  "key30": "4ZinxqBCEU3xbDJzXTNXcJ1UZAEa9RK6ZgfGmqZi1eieCfZkRnHj8qWTrotHYb7sLQ6vuYVpQMDvRzriMSzrksst",
  "key31": "4A6iZkNTq1WYVrbM6H33mSGUVKKEXswfrXJnGawJqLLJvgqYqZGaYPKgw3CSdJA66eX5bKFqLNPDj3Svn4KiGFp",
  "key32": "2fkbANZB4QgcT7wCrs4Cg9yaizEjZtCQ9artMg2mCSMK1z2FcJStsqtABqs6jqDaTS9iwHc24YqUEVrcKaAgZcSq",
  "key33": "KTUeDeHvQyRegci7a5ZVXRwBZpusX7XB1ePYmC74Sb8vVJy8bTgPkG6zKwZqLvGT8MkxNGsar1eTC3FX1jXhHdj",
  "key34": "625NPAuuG5Cv8BuzhJiFHXrfynT1czAjBqjimKefA9oyuTLqmmanPmQAsREkQQdcHYPnctj6131GF4c7ZB9LyPBg",
  "key35": "5d8EXq4Kb4qEVTDcpaqJCtvnGnUnmrLnmxhmvGdosmFhGtMyBfEyr7wErnPAieS6vmK2sPULzjUGBv4zJctXDXsC",
  "key36": "2WDm9hCNTzDcGwcWJQ28fnHeq5KNFpnPmasXbR8PQW8aRcYdTUXC1oCn9M9XaBxrq2xEVrBwrejE7bDWoCNw6PA4"
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
