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
    "5EMtxoBfZwssYUMc4SMaGcFrhChgxQu4ira7dVhUGjXZbwczWoCoAKZLMnBKWuZtDNK2cmNqFexFVfogVqZ328UV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxuydWE9orQQ5vZrpzTtynX3ozPzNrtMiTxSUSw9FWTRjYBiprZAPc9nV5zASd6Qcz1nxEZeAkB6NJKA5ZRzwPk",
  "key1": "2Ajoe7vLAxL9VGJMnbkXbKBdhp2gX9PxvPTx5UYdsgYJLvMjsQcdiSQddW4BLjnWR1DWTBpBpkgjn3HXscigKk5t",
  "key2": "bkXukd2uRjUgJmNW9pYyLVJvKoaQU334D6dEATdyu2iXe3vTGXCEm49QyMcj26X2zQJNkt7W4ayhgeaFto9xPfE",
  "key3": "4u2BoB2GZrXkH748ScWvqs6zgs4x94wxWP9kwdF9mBPPhWZ3uvmgBFhuEzpg2wgscphJrJLghFs4HD2u11T6GTYY",
  "key4": "63smnBhCtr9gpAeeRCUidZsvCsmNLzEFZXMKMXG4bAbBEoJbTTmLUYfRxoUpYG9Rx3ZKuXYHn6T6JzfnPv7rvzPe",
  "key5": "s2UQBsB3Lr2MJERpM7SMdfFGEamUJ84a2FLxHpbM3Yu9p9j1mUETeBBNMwWYXiJhwjaFMJKNw27VS2dsox1zbY7",
  "key6": "5qqjEX9NrwuiWyZz3bCQaBesc7co1GDHUj5U3P5iAjr3EYJK9JKC2Mgst8aB7jJButqgx6AxiCgAB8JLRFmDwkFA",
  "key7": "5B2U9w5YzU9u9KWjmH1hu4FvieaW61AGEeuBHSSsvyLX7N2CNaGxxxPa8DY74RDtCWhWGyJUnfPzFwuAh5MjND3a",
  "key8": "2VexXY6SJchHqiYFXhX9TYnzL6PbPNapd51gLLWXhsKDFDyh4RfMgVWFBQJkyFuZtRwfbfmCuEnz6cSJqv23CjaB",
  "key9": "2jfkhLFMzvjAqYChMrUSHF1TzdkH8JrECxtBEuH8KvdsZPapq3xdntqDUtSv8PFiU3jMMALmEoZCA62akyZ2nVDd",
  "key10": "2e4YhJY6kv156qjkxYPuKiMuwkehGn8Pp3jbFj9CPhEgT4prP42poAtXkvFjG3agYkEGJTm7yCkLLaJWsuJjVNpv",
  "key11": "MxqKbMuQoCL2xxZkeNAqCgueudgXb1JzaRFnLgUALhan7noWFDskSDF1GDKV2UZhe4mg6aBeV8ryVX3DHKZrH4B",
  "key12": "3VerBML9wszDKfL4aL4t6USAGEyDN5njPmC4Bg9Qc43PRpkBtUALTwNghAXKTWygfs1WsGHbrWrUeLMAFTKLiwmi",
  "key13": "3BnG43HYtkRGfXZ7VdyTbRv7YQ9ZpmvLiprEEGzd5vKyZTUg1w9TmSiJRaw7RFd6iMictdAUQzxeXxxmLRQxxeKp",
  "key14": "2SdTQLf5jTtHWNHcZuqMMYwFrEAPE3SbtxSQ2WWLQBKamz2SddvunLoG3X4Ey9gYUTUodxmgE7PuPj6tp2dthvhc",
  "key15": "3XHipE4YrNKaQq9vbkARc59As5BGfjSS4XXnFUZcLudiTcqddTTBuYfCr3eMBgW7WHxbmFTnN5VNRde8Cv5i7g6H",
  "key16": "5FnooTrumD5MF5TG7fEF8eKsdkZGUF9VcY7Q59WHrDqkcUcbpniDEEEbTVdArAiDR4RaMM94UFsBD4btu5ZsCVgY",
  "key17": "3YsA9k8VS2bh1JWcRoyruqKaok55o2nug3eYCN52gXPgQ1JJMsEYTqpS9T7dB4eQNZeSvKLMBssNVMRMbL9ogvBe",
  "key18": "4iaeyLuYJ7Qs4v4MR4e2HtyhKpy1H4Sm93nZNc9awc8mARHQxpJTceQEdX96SBFBK1tiujDQpJfq5MEYcXUsaE7e",
  "key19": "5mcwiDj2Cg9oV9enL12jzfZEwnDGxgM35sZJfGDNt13sNugU87ak9WffEgBVdPWuUePx2eoVGv1CewANE5sJ6ssE",
  "key20": "2E6aZoduj8jVJdbfBrWhNJYArQuo64vtZyA493sd5VnvP4mt1NDB4VTpPSfyT9F3CPv4RdCoeU24NVZoTyfyCtqN",
  "key21": "5EcWDB7ByBCrms5VWzt8KZwLTNuWG7QfpA2vVQHAQvtVpPEvhVsDo8PCMNPGy6ywUPWQZoQYTxJ6kYMMt6QjrkCJ",
  "key22": "2PxnnoGGYELmPVteyghV95j9LRgCgenKVCW1oTD9hsgEhncWBzNVobXgU3GKKiHR8TV7oTGYykqKwWEChFn6uQAb",
  "key23": "4yNT3DT3DUGUtJamQyvgt2FxV2pbAx14fnDsRJuNCGFWCawcSV1e2SjoYmBX1NMMudHqDrD1wiTZWMCPRRUWPEw1",
  "key24": "48ghVDPkcmgsCke1ZJsYFXs6FTYcT5fb5ncMv813Gh47YgxKRyfcb3Rgp6hadPQDwAxnSbjYsTRhhg5hPwZ4dpW3",
  "key25": "8KkzZG8fNY3W5RkeGArt4TJe4L9pc27bPNSaJspHuo8ijKVDigLSbmCyBUGPDwTMuDr9Zu1WD5QuoFitPM1tLEn",
  "key26": "3T4yKj9KFmT1iK5wkxYPU7QUKekJ6JJMkuFHNce5XFAeibgbqK9LD9rUcfTaWZWDmXhn3xMY4bSMWCtiDdZ6L3Vb",
  "key27": "5eauRk4mMfDTokjb9BtZXYxQTHwJrxBMGzBtLJG4bpebFGSN2i8twmKBWzd67d7RnygbjXhXpzNqZagu9BhFZxi3",
  "key28": "3NH9XG714DdvL8TMkUcJi19uRPLPLSBTn3D5thB439toFqKkuDUaxxdwuXaNoYrpEX4XNkrdi2PndKgMszEhUYFy",
  "key29": "5iN2WCBNG2sDjB2DRizrPYLUQyPiBYLcqfSt7dt4UPe5kgszJERxQtMWqUpRjnYHrwpR8aGNeHP7mSsv6qjfVaqn",
  "key30": "2ZAxA8UsBBpPhsNFxsaCcXXDEQ5y5yPUULdSnbb3e7rczSDgDfFgQFJAXfi8HrEbNXiiYaZhdYFWgQ6f2uVr5c7j",
  "key31": "2DS35pdiJnvaeMz8FMP5AgME7zxLLVLWD9mtZqLgqs8NkzeR1k61P6dHqVCGCLa6X2tcXBh9EXXoSA1oL626DTVb",
  "key32": "5rbUa5spvnbsyi4BJ9pYp7FyebzaptHDxZzgddZwVT47v6XeeUtKU7biauQVDskxU6UWPmFGu2NK3VnMbWT9jFY",
  "key33": "npooXUKPk8fDDc1hSQgBnVV9D4S412yaFxHrbsouy1MGqjfjRNUVLsFzPUHFm2zQPgMvvSx3zvVcfKyZoVWWFbF",
  "key34": "2KCeAH2F45NNCaFnFniAnbMKasUHdp5FdSYGaupfoUwMqenQedzsM3KsbPimJ2fPjiG69kr5oA1vpA1rM4kFQWrE",
  "key35": "436BvTyyVDg4x2HBAt4M9y6s9s3DwM8E4nsquDhNzj658GqpVPRBT8UYXoZaB5KLd3DyNgAwG6LWGM2d1cj8bN2f",
  "key36": "4Hx1kbBBFRNrMvRF51MdrpCdbSyNXe9pVFTqDJ9rCtFxbqNKJ6s88qWa3t79RykBjQfMkspe47rTXXparume8yRs",
  "key37": "35ExSLNY41f9WuFWR44wjRdoNkQBg2ZByRxW6EwVSLuLw5M51hkjF8xLaFfndRNWywdLuf3QEUwW7GG9hUv1awby",
  "key38": "31yHcbWfkkyd5aKVoaMS97K7ZmYeL7gkeVaEEBEZd6fg1PMatJ5bjdcuJExAHbJX2beS1baghSae1uJMLkfHdTs8",
  "key39": "629vhcJhSkpmWeZr9awRMry3EWsQTJRZGX1mEdJ2JnahYcf8UwGJ1u8qg49F4ndp7pHGUi9QAmJJeXr1VjqxDdrZ",
  "key40": "CQrL3byyaPCj4rK9vn5tqsAuejS2FZ2Z5wAePMqQN7q9NQgJYthH5GRcSpEmQgCtM1YwFzePEHLsDLkyYQkycwu",
  "key41": "2veDjvbuMLdZVdmJwnFwta2Gm2ihhwhtsELT53vWvzLqxEDQfKwpV3Ug9C5g3C6YUMcNdpUaRetYZmDYYjyXxNb2",
  "key42": "4uzFFfMB76JK9nMcZ7BLCjxXr9qpuWFdH53UrUTGeJtMKocwDTjpeErCSQp6BAJBvSU3DDudGFjuw8ZdvnPkKk1K",
  "key43": "5wo5Dz8x6VCPdoe4JriQ7Fx8Wxoc2Bt2vqA4sTgPmaiPZvq3AQ344RGKNAHtsydGtZ2p9cwKjpKAjKctFsnaJCeb"
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
