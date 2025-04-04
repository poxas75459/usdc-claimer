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
    "2PQTMNiRsciwAszPnuXnpDjCFzBzCKypoFCWsibej1CxgzqgMUUhBEFRRygKYJ6VUXAEt7ydtxvhYuKxFfogjNAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7qa9CBfaSgjfCzDha9kxN2oKwwFUqXBq4gAV8MeTMt7nTwUMtE7wCSsiRng1QNNwTvmSdrNMDsCPo93T9RfgVa",
  "key1": "322M9pk7W8LdJi3BvBR51hoNvsVfyLvzQ49zmZrtNfzeNGeEEujPYxaKLejGcDFRbhMc9nXMRtJpJkSnE63XK5Kz",
  "key2": "4jWwVGpfHD1tuv2GFxCrt5GfYjmnjDcnEKHXUvcTT951sdTLWHYWDtGDwdkpGLeo9H7t9ZjoBkF8CK39uFynKwEY",
  "key3": "4QEVgxnPnFm4tKbKtYGgq3sizS891egkSbk9QaC6ppaMPDFyTF8yjCgMX6HF9cdR292NfYjcTuMK4P1EqjKRwuqs",
  "key4": "4BoSH9pWsJKfquZsjj8FLdHW8uefWXvnzdnNJYrjeqP1vSmA2KgpeZ1bJxxRJViGjwWxGregW7rfTJbXqNqWaMYd",
  "key5": "2GwM247sU2HZsNsXfMPtwaCPo1N4GL7D8u24nPZAnbLR3JQ1nJ7CJD5Xu5xb5ekUyhT4YMTY8MQcBJzU8QjmbvXn",
  "key6": "hyeywP1oNsBWT8As5YtGQ7yDsMWuMhS5uf7MG3F52RgVC9KYqCQX7huDY2qp3LKvz6JiqcmweHLZFuhg2eUBfzV",
  "key7": "gCPmWJ4T6qrz71kt5e37m42RZBmsQ3Q6yqW6XYLjRvPoi42vjMzu5ord9uSbMipTSz7YRKZm8qG9rTFLxAkSrEt",
  "key8": "nZZDJk1aNXMyJcPbASMJwmPKCAwo6aVsCXuZxFP5NqEPmVNstb8KE844drr9h3cA9a2XBWYxsCadTCfYEvMRneE",
  "key9": "r1STThNkk92rSstaFFq6PkdvoKnqmJMLxEYMe34xLKUP6GgriMzxd7c6pjfbfm6HE68iDmRqEVPWHEUgWTptNea",
  "key10": "gKkVLne8qX6bfims2AWTqAgGbEEkyQyae5uR5SU342Ax55BJi4Jmhjpt7iH96TLtGGFPPZwQFF1rAoF579SUjA1",
  "key11": "4uN3ZVs8yPwA63xMkp5GXQRS5XQZadVPY16nh6Ed728qBPH6rqBBHcghmAjWV83QaiKjbaSVLxcLP2MWZka3vZTc",
  "key12": "53tDic1WHTjEyuc7uQ81xSmpaR1VmKdcBd2oaD8r82h1nhj3iyv7j6kBRpv1QDxsCQ34ieBNvcGSKS7sixBF4cGz",
  "key13": "3Duw6Be7sA18kEXzyrJXsGAuL5m6Qbz7CBAGvMXSLfnPg5AJyCmNT2b9Zf1i3iPNAw2r8bRNEFdTDNKX9w3Lzp7Q",
  "key14": "4dnMQLNyrYn6eiCVeLuNgtEpCoD6Cb4ub1ixx21bJY6E9yqE7wzwdVpsQDGSunypuYVRofqRUXZrN8VCyJQNQ7X",
  "key15": "6R85GUtHLPktcvMC3yEHZnev4vhS3VvgmR6TrApj7Y7axt5bXHDuMp3CsdrchJ7493Z2yQgCgFtuFSzkGLsdc8f",
  "key16": "5E78ciJSyjKY7wiwh79nfMsmjaMaYzwvZoEnJfzFhMS7yYsYWeSuSZrto1k7uMEYg8Agrtz3wdyx8nHQmPzGZ1Xg",
  "key17": "634kLmD5VsLrkUyaGzZvz9be3KtR73kH5BQ4WTkcLQjFkuQHzcmT4KMxA4aFCnFLvzWYBCnuFCmdpdndycBjFGW5",
  "key18": "4QmHJTVvdALaY6471pJJjWGxniFyTMRMCzDJe8K1BAFn8gGEgQrVzF7vFNCx6AAdG1Edbz9tBW4vrPNBy9FeEhnS",
  "key19": "2aY5jcMiKSjvh5ZeJDdYa2hKaT5cwjBJhQv8CvUX8jbdSe4qh88safdWkFHbK1vmwJ4Qd5rKUd1GAzSCxmMU9Fwt",
  "key20": "5cBtPedLkfM4E83GNz7oZhzD9sNHxs9aBBf3eG1mkmXdpGRGtzWqgxwdBtCPryQWJpPQJwtvXFnuXrL8sn3iNBw5",
  "key21": "4p7yhM2gBKayU7fw3rAU8KrFwq559Kk7or7LftTjze5e5TEEXt27QpVrNDq1dQS2ksnZAuGtTqn6Wp3JYys6tRMg",
  "key22": "3x6oU6UVueycVoSXtonkuobenxmhwp33HKWrk5RocV8czYk5twPTPPBKJVvy48tnxJvFhz5yAsYCwMM2YfWLatWE",
  "key23": "664DPRGE8o353zY9wkFnBV3ubkB6Gb559Z3WQdx9ASq6ogDoG1QL8JWF93RVu4Jhq47CXhJSL8Rid9376J63GeBG",
  "key24": "5Lgr4g2q93JWac8ExaD24d7vzG6K2UZLZjJpm3Weg4veVjZ9krRBhVLdMvu3cUehm28g2fXPS2QjWQPR43v7JU6e",
  "key25": "2NsHK9dnsNi9F7k3J5B8cWUpHXFgugWQaJZkLWtSaGyuXJDG6zb3NYDjtumHNHYUHXngTcZCobSo5FeZu9bmv84A",
  "key26": "22qwShaq5X4nQxEW3pqwR2sBa2rcWoTbM6Cnpe7oF7stfy2TrbffKNuRdqQfUAAtUwWFkjCVxPiVBrdcUkhukywf",
  "key27": "dj8adQiSMnMUPAdzXtSBeBRA2ue6sp9QdwaTVCWrLFcuUZCuYxwydzvqZxitko5WobHxwXBXjDQryB9Vi6HYwKr",
  "key28": "4YsjZ3qBTRQGdrUzoVYDym6sSQXLvYcSL3BhBtWay7HP8deQ2D7x51BzhDpYvydWxPHyAeVEeYbkHgVjeMj15poe",
  "key29": "62w5yNKAeS2UBocjk6cie1suZeYNCfjjFkmAtA5VPM51hSupRybGoRzWDJojNfhHbdur1EUL8jG24sf3Et41UJfF",
  "key30": "2tQtCqKhFpk3x6PyKhwzhfw7FYk7dDZzXszDWZgUA4EhBgj1gdjP9FZPGiQsnb4RaJZjykV7iSUkbWSK29StNGdr",
  "key31": "3i5jZnuZfkBibns8E5M1PAiirWEwi8rBpESDuHbMmMPbxnriDEmxAC9SMdxfAVmHX6VpKd7QVHW6Qv3A3Qohy9NC",
  "key32": "4SbjGUkRCHTcn8Ei5dkipCLuJ9Qz6iVkCZSsHyY83Cyv2stLEYWrJ5m5zpRBDX6oWH3u1DPvVYFMnshkDtyNfMsb",
  "key33": "14DkMydfcAgoZzWC2S2AhsfSRX9TfBwQsEAoaZsgvQMjArG5FvMy1CxwtYtMb2YSp5hDLiL6eozvfRKX2DCZdFU",
  "key34": "gqZMQSgCwdavH6xbPqNDW9oZK4rth8sfjAb7SKLqXLXbJTEH8qBXExvuMZCXfUYV2htWPv61rKtihQPJnpe2EAz",
  "key35": "36FbX43KV9NrhjTCfxBBdiGwA7CoCWscZJZwR4HHzv7fQgiTCwDYqytcmzC8A7BB4WrVAdzmMWna9NiBfGB4j5tH",
  "key36": "2Tkn56PUcRv6mz6myp5cehF9Cb5XhkUR81viHt9ZzqP6gVFPPaHmKy2o56viVCGSRNWrHdJNRHCsUfJwxa72JGfx"
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
