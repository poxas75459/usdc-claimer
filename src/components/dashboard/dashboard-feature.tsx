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
    "e6AwWwTB3dCokpM6si1ay3JN6A2eDG7EWMRxkbhhQhPnNxoszZHAR46r8TLUw1Eocpbo7rzEjbWjRFqjRQj66jV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z2Bz3NLDA928yWpjpvP9PqKhwtqQDzLeZBToQhFJM2EXmskMf1ysPpZ6YfVWSFPa7t8bxRvxnQSsDUgjrBsGS1Y",
  "key1": "2rWsLN7r3HcMBqbKFUVb1W1ZeM37aCZhjKnyy6FQuTo253qMXDhHHMk5ec1pjEjYuq44GaLWRFKLkrp3p8gQLEFm",
  "key2": "66MMhpPyNrYCmXhZaxvaYshyPubWwrLYuxRcirvEcmSnKyAqs6mvvpwMGFYpYGdU54YvPtTkLKTskEztpqFhRSpy",
  "key3": "WoM2W4k3UJf6Ads7W84rdnzHTgBZwPebzdR3tah9CdHuPsbBMWuQsQARHiGEpcCfow1vBRyR6Vi9ty1NUAX3Wh2",
  "key4": "3YJjTEZrEzr9H7VyVQPCTCcoLm6GuvRqpErFG1ztBmLNAiVExJ6GWXeF93uSoXQrGdkNf2DxkCNr3PP5BCS4yMK7",
  "key5": "3jQkfQeFDhDPUAec9JdbTexg1ThL9HW3KTyVeiY8Hp8qZdGd3Ar8WmCraBCZyPmgiBU37JiEbkvfH451Nos8hbYc",
  "key6": "5yYbJw4ZhrLKJUY3TDGJQQ25sW9wbn4yvJLUoyqqsvDdaLpVc2N1xkobNFMiFmmv1nATT8fNxSv1VBq6PdoUZUhn",
  "key7": "wYGiqa8XxXd7padfMCjt8FVG5ZdeHLMi4K6SGT3jY2iPvj1ZrQrPHXong69dhxkAXDWAbbDFFiruH2bRob99s84",
  "key8": "2kgQWTnKm2mNJkB6yF5XMNxUPe2aj1G8SwTNvZNEMBt9cKt8k2y7Ty6DHfDdRJLYLxV2gdH9s6M9iMBa1rWVHb74",
  "key9": "28U1Gei8Ze2eGBb3EuWnqNWGFeqERDifDnNRextAxunt1iki7kL16gfXMZqRY6sV7HVroApRYnhbhDLkTzKg4Mx3",
  "key10": "3yG1V2aTFwa7LmXvK2kkfyVi6LpUE64UYy4UvToknRHcTjYSKmvFoYTk6AXmGw6rqxx9hcBFUgCP4DwEY51h8nSb",
  "key11": "4EtxCeogPC855UWinGav8AfqfCyGPAha5pWTaDNua6qEagPDm7TjiMyu8bFUtLCMPEjGJm8CjVhJeihDUCwQGKQz",
  "key12": "3DGVUfxVSi1MAjM7s8rDAGz3GP1XkWWRAGzUp3ea8eRW3zMAYHWNPhfEAQ85ym584c2g6xUEDuKNN4vYkWQVvQRW",
  "key13": "5ebEoGA7qszxbZ2FLNpdm4XXLeRTGmWgftjkwQuExvkVqDXJxjnSrLN5g2tDSnq3ZjqLFbfZAMg6jyVcXD9b4paV",
  "key14": "4uEmwazAaRwgv3gkGQWKuKRLPmQ9jc6b6ABX1Qoo1XYfTEgscy1u8zArz4o7AA6kXHDSunjwJ6VXfrRd8JesQp2o",
  "key15": "26a49JADJn8CeL18L7XQRD7ueF37TCqTF5S1qN5m4yi6xU6UPdAm9ZY6fgxMwZkSZ2tvrjTzjMX9CMmUjDA4Yx3U",
  "key16": "45d8nTBkCdz2Y2FkUnMdj9qJPKHf42TLtuz47mSCxJTtsyKtLdxFwL4gVa2Kp3XCfUxHQ3gA1wpf1YzNavz6r67z",
  "key17": "3sdBuMXx51ztovNR7pdSeHdDaKNQPw5E33YvVzA9PfzFdkXCDJ6p8f2p4Fc9ZGiLMVRejKPfo56kx52iLsDt8Xor",
  "key18": "2wtzVuofYUrwy54nqmum137Nh4sawPvsFBcp8g6zoYiG6WyB31urqcpxmR4swTM3JYMhN3VtXRSwFBudUGCksEoy",
  "key19": "4epBi3cepgqoHZGM7K3vhu2qvU61mzQXmPuHekfBwpKfketgtDB3wsZsoesSKhS9iQUBHdtzEWxRGXuYSZ5TagG5",
  "key20": "5iYVXGaA1ZfsvbuCDqafXs55Rm37Lo648D4bHL51rBbwgtWQX6R7hJMTGYY3fd8MK7iQTbw7Cuoth4q5DpBtLKQS",
  "key21": "21qnkTYjBTA1Jbag2tJRtXHdq6VDTTCGumysmRM21GruqLC3DQfWUSgWhzZZ48hQrS7FBpJAy3XY9J8QR75WWAiJ",
  "key22": "HAHCyQo4fxkmxGX2WibQdeV2tvjxDAiYiKMCdQNm4duio74wsR4xyq9qbwZK181i1FqdD4kVgR7fxdJcZrZdJoG",
  "key23": "5BWaGhp5XmgoSFACrLo2eC97KQQkP6BjdCjwFMw8guNvb1JWU2Sf3xKf2VuB78jPcPGeuuhwmWLLEM5uMH2E8aJG",
  "key24": "ptXb9pMqvpdHuezjuohZvbusW12eAsi24FmyvnG5opH16QAjqEWECGaZYYKhbdwNuK1r5XmtJZWiPW3UhcUpaEv",
  "key25": "528LiRbjSVg1QtBUqexkWp3i7BHCJ8qx4K6uSzGPTuF9H4FhLsrUtkWDZusebWXD4zdEjW1mMUphK5o7ueY4HJmp",
  "key26": "a6R8Uv3p5mgnn4tESx8RrPdgo3FWQh7GEohU8XU2REfWUQXVFJG7uCvAtDZWAcBYzyGdniar5mmBC64uWCtRauf",
  "key27": "2ru6RdwRD3sTfDVd8zcR8uEvYeurM4zeAum9TZZ9Mr9V498GZrcC9qED3RnmppGd2PYPJw2cDcw1VhJPbbQJcoRS",
  "key28": "2VgK8eC1nxQ7sRSUrpJrS4y31wLBEEHEdrhimaVVukGexJja5Jt9QuQMHLVYCUBXwbmro8CqwBThhSUiPE7dxwBQ",
  "key29": "4xq2qssTv4AcXf1AVVUFywV5Yh7X5YPcxLhHPeiWMW2uxdw9i78kgpf9x9axVPDLjEroCKPcBCXdEQijfXeCKau6",
  "key30": "5NbdpXSXAnvXxpRuNdMJk5xcJYGTavVgCjxB9yJQJaFhdrhFnV8TFbX9JtmjGzA81eoce4vRwa54foTJqRBjZC3R",
  "key31": "3W7yC3KuHXN4fBL8evJrLLjuCSn37wyndxUEriePwv1eXZStR5v2DGYqz7qe6AzN1hsU5uJ8QZEcdDwn6B1bZWQJ",
  "key32": "2FQgeCQPXLct2x4xTBuNi3jEMYuW4ASatJFjbkGdh4kDea6ftKgo8969U3FAAT1BaGfF2jY8a8n9fc4rZJ9xiKZ",
  "key33": "3NFWtqCCrp5XEphRAzABJbkaJoRerXvxtzfsE2amiPTcfMscmtur9GUnFFWVqyroABgtjcXrshToxQhDauXsGcMP",
  "key34": "5uNQD9WG6bKbEoZuWnBmPasAU63G1oW8QE4WA8yMLQJwzSdJWkgCZd5J75jnJp4hPUATTEe5UPwscxSzA7cJ3Ymv",
  "key35": "52C95b4qf1JyyBH3SmnXCyq8UrfqR3yXu6gCsBkJspX3DtvZ7dcrkEqQ3dRj7gF2n9Rb9RSXASVNYHXyk8yf1xve",
  "key36": "2RSyd55S4STWJWWv7agz2PofY7eWJn8Q7fNMry9go4PnngH5VWV4xxwwiEkxTSHX6JVSks8ePSJvrm8VD1ufw4R1",
  "key37": "zRGMeRZLJ17gH22uamrc9kmDwCwPu9ij7oXWGNaQPDtSvUoQ9k4vGVGoWzmYETcXmEtSzd59QrjCGHkhAFpi7Yn",
  "key38": "44mUakS8xeyRCMXUUrh1J6yBtbJo1X8ZL9j45w8JhHnhdJ3jNr129zJWNeCxMrPuNijbFisTHL4TYh1tKfHguEbR",
  "key39": "4e7gF31Yd2mcZhugT2Mjgh35WKi6b3AxoqsRZZykcL3bus499LfxvWy533YzxH8q3AWf4jsvWTwDCL3TkuKBzjNZ",
  "key40": "5dSs6ZfMbFLqP7efuwBaQKd7yxxcBQNeZG5qw3dqS57T28Do9pBq3gr7nyV3D3AZ3Z8h9s3fmq4DB9uzBwcVA1ZU",
  "key41": "ahaW3WtYLsniCZjwhv9V42fQQaHdEQGDuxy1LfXfCrZzUAyqLAV5J4uV9xoBGRt9TBNZ5sfFt5mVdLcHUrp8dTo",
  "key42": "4Y6b7JVnvsC3ipsEMpTHNKDRyNdVvCoPQ2FHegFmnKAN3pWtbQrAC6xiocfvt7ZtSNW3tA83sekWvMzMs1SbG2Nq",
  "key43": "5y2dbCtmQdaUJrhbdQTz62ar1xL2Ac52UR4FhHrbv2uBgS2E4ar2xMCwgyyPSCLr3nRexuP1s4PzDn21eGvWu3zR",
  "key44": "5gZh2HqK8iZtcyzvDRvVLhW5zGjZ4r1D9dzhDNPqrG31ZMjMd1JgncL6UJ3TKHvwQhQcpk8ycqsYDmiZqKJDDRj5",
  "key45": "4x2cnaXiCQp3STDypCx8zB3wxArwDvr5QNK9b73pjcihzxfTUfZRC6t6QiHHze2zEXyvprgsQqhVK6j8Z9ijy3VB",
  "key46": "21Y7PfRz2sqUVQNhjaGKce2Dv2GN1S1jTRTDxX9ufZBkVu1qk99fRbe443FKSPZLXRxMWRDqh3PDPqUwqjwtctMF",
  "key47": "36nBUkzA9tkgJjZHQTuhZMgv4zHpHGVtwFYywD45jie3x9iD8sJ217HwEUc8y52Kn5iexRZ4JxKDS96TQjcW22YY",
  "key48": "nfMSZ3rwT2t9ZyR5hre9TkvN7DuAKLDpkxL4C4p4kav1rHErumtSepzYzABBMU85a985LbgUsZP3eDy9NdxhEsq",
  "key49": "jMvS9WznK6jGs7enFW8x5ie3bcf8j8f8dZQLXpZExZL9LDbXsEBkTDUbvcYuAW25XVC8M9TTPiXwZAfnTEGSvAY"
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
