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
    "2PVgTHTs85QNT14CCfdaJbNLd7x1xMgatbUnEWgdud5LyFQutYeykQS7oh6PM7Fud65UFmDBjyu9co8Q2hFYsCFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LhNRUavXdjtstjMaMEyHavtQnYm9ZU6wyTE9yUJJX4pDqY5ghfKhcpwK8VBCc55EaNhvTv5QSpCRPjYGdV5uweJ",
  "key1": "5BVYEx5da6G7HUeMnVEx7t3gYNLRiEGesuubN5RB3etvCNFERvA44eYyF2DB1zpzYDXgxCzwBbe9TPNG5CvsLnCu",
  "key2": "58n9GjVdyrgvYn6DxgN3A267zeqkc6x12dFp8AzAPxTYE2F9Z5PZZGVpjARJi5zs7cMyWjvvUbKSpQqdGFVPx8G5",
  "key3": "5un4JQwudZgQs1NsarGp8Yffkz8U3CpGRyVrpVRhq8mqJSrLuHWWST3HoBWKFtKe9bMKFQwbTMJFdyjMUSest3A",
  "key4": "4JCAiW6y5peznnae9sQ2DpojeRDpeF4FkweW4UY9CPXaeeJMvCaBotrzLTD4LEmw3nG8nS8yxKFrebRr2CdoCDtd",
  "key5": "2HCtxz6oFNc7fZSh7WkB5rY84TcNrS1WfSZ1kBgKSeoTMehz1i2Q1jRrW8Lt6Yo9VbVVZHZSWAuwcJN1SZpUKfyM",
  "key6": "3sUFFCfTfniJ2smfipPz2qkdY8nTiSHZ9XGJSzJatpNoZzaCwsvNAGG5x7FjwXpR1seHfwfErtkDPPpxjM2wbq4f",
  "key7": "5tJSxaMKfSZvapgRYvA6maYWSZDAE34StMZxvMS34xpFJ6f7XRxHq9goV2dHCh5zL84HALjx546nD7zzjdJW3nFV",
  "key8": "2EGUDdK3EsXaVsMtzwR17tn8sEbR7GsbTV99D4Cy5hVrNnaM5n2QBcrRAqsm6mrGhPTYb3CaZBzg7NwapbBXL3G4",
  "key9": "3X2Z7X7TM6YoCdafhj8xi7NmKe8Sg5Lq667xGxYXB4cJvi47yW8GBo9icdreFEnNvTD6aarmrJTq5oCrr7eg9eL4",
  "key10": "3TKEpYeqMTPVTYVEWbUARyG2QqRfoXrKcTsUrArADsA4sQMUmsmyFq8Lirb31a5fQo3X4KG7yVHHnv94eLSAj4er",
  "key11": "37JQhPhaL3xVfJBLsTziMTQdUQNYj3F1g5S5K9fkQTiuBN27HZrMi5YMZm47QRioEd91jDHaGsLigfn7TqXRb53F",
  "key12": "451pCmhSre7k6zS42GieGdnZRLZWTdsDqQhPX1c7zeNRBFGXiXEM8JcihigvZsRMpX3AoUSaEAz84Tr1yCh2CcS",
  "key13": "zS1yXEcmfHL1yQtNdq8d56bgo1BSJmBxRhSyYBa3t6yJrvFYYd7phGdVj3hbH69N1uUw3CmeA3f59P3sqPA8iTN",
  "key14": "4fVRpBFwU2AUFngARpTA3wnagweWVFDmrNqjt9fsvPpPTCPLGrpxW1t77ZziTw3UnAewsn2ABZk3JmDYgc3unMx",
  "key15": "3KwRNQJi7haRZg7ArSXn3ozr7X3WXorkYQTPyCFRJaTmtH6NNgCqSsH8FSU6QV2SxJgRkunhdkRgiu9ofvo7QJAK",
  "key16": "47NbwPKnjumGa1oE1tfXuJee7aUhHUaEzriGwVuX1m7dSR5Gkph55L57MYJuGMmdCPnp81rsung4vwGMfepbbEnq",
  "key17": "5QMxHppoPrW7Hq1KQVf9vTjNw2c19nFAMs7HpCyXrTtMQNdnQcy76YhqCaqU45aX5qZN2nK6mnmkC3cHtw2F9hTv",
  "key18": "47hNBVxGRejaKkvKfJMYXj6FfeeWrXcgg49bXYNNo4Uot3Nb5doEcEdLf9KiHcbukGSfXF9yF7nqxk2qftRZmx5c",
  "key19": "4dHQ1FER26251j94K6TExi1vZyRSk8ewKrSnM3dFyqxSa8EvM9Z8kgZ9KaSqbnGLafkvPqxCRKZ4g9vFoKxvpJji",
  "key20": "2F5vMV2cDEduoA1jzGTQ7Nc4pNebCBVgRE14FkcyLJ4MvMQr6urccHebemR4ZZwgYEQwTVEWvKzfKfkzYqewAMqU",
  "key21": "3zdKmDh4LRyBX3YPdjJq8PGLBBApbHpaaK11gfYyYvaku7s3Za43u2qekxE6wrEZYut8udC5JPpH5puR5S4CGaEY",
  "key22": "4inQwEDdAYgT93X6C6Sk7J4qTrRbwaSGtNFX9B6BRB5rEHew8QULdyBg6XeF3u8MLZJy3frfsfmskp1nqRVDkECf",
  "key23": "3dpnEnKdCPqpzf1P8YkuxU3hAZefPgskCuuekLs5VzxFoBcmRSKWU9n4UyC6Rz1BMjtf1UQBWyA3XdXoJuBW3Jbc",
  "key24": "4HcEYpLggwSNRdoBZqePgAWdfGXcyhj9nT9DbkK4EscGMf3rjHGACjgv5LX1GeUMidKEqy64DSEK1nWnEvJQxtNa",
  "key25": "2W7QBMysoU6vNisJSJUSzZRh4zPdSjtsEUshfL2yaywJ99e1mCdHwAnqMMHxgbcrsf4GcwCCS4rDWjAVMrfXi3LE",
  "key26": "2pzYHFP5fU4dpRT7sP2vHZWpQo9BTkq3161TnBYSbMgsH2onZTvdCz5iftP95nQteZhsPiB7WnKLSbAyGPrEtFyR",
  "key27": "3FDs8HEcXathDjRYRXPSY6vKosz2L3eUW4hPFKLC5CUKuGnXfCCkcvu65TJYhUETGwj1kfJ7dCkNVdvKFwhtvjgp",
  "key28": "34U3seCGHNaU63gaAwDrkNELbmTzmEbnT1yqLENLgwmJpVra7UPcfiuTd21xmvm8gB4AH2ctd5vh1iTvaDPpqxah",
  "key29": "23ehChv7tSc1A3w7M4vCzMXM1XzdGy8wCUeLvZ8omBB68Ndev63ARX6g2cjqZYnDexSFuv44HjDPapQhXZ9Vrk1T",
  "key30": "67RQv3ThhrYyeHHa327VwaxjvGTqywaNNVMneNhmf9U9xzL5ZZCEL6ks241BdHfrKcV76TUZDvU77wqShggHuitu",
  "key31": "3uQCiKP7VTtV3FsPLtNtZE9TpyziaSBqhxaySYSkA1iMAufC8MeLZB162jGg7qha161ka4ETRxiPsh4BP3nC3ZUx",
  "key32": "51WPrv2trhpDhK88fqun8ePAPBG3ZfTBrq2pp1SaMdCHDUd1JdLe3WZBtwszXpvVaqjswCRdrdFTfeGZiHVeTgRf",
  "key33": "5SBYwnwLTm4eG24wXuL2FDZJDD2RnH5JMCGL7SmnxJZpmzr8fXCp75JS1ZB4YSrSbYTPVGx7cySHm6yyoHusTHew",
  "key34": "3xRUuuhFBH4j7k2XyykNXJMP94CwVX9p119DhErBePczPoPf7jJK7biESMv5BUGJBT3rQ1etUqsNVUu1oDKXPr7p",
  "key35": "5hbM84ipRYcTTmAZvKhwyssWUuQnn8sz3ioXvSGfpCCjyna2CUpnspuLDPSSGTHamsGBnLtcAQ41f589pFQYrRLf",
  "key36": "5HyDdxUrcRprSxAauZx3bHkbArb1zwXn6tRXqpasnjVt3Y1M3PHdqDXuS8qxcVjs5txP4RUsSfJKWi64uk5KLxcg",
  "key37": "J4A3vDEweTdfEZ8ttFn5ecwJav5J5n2Yp2fbcFd1QqwmEKMo1EnUV97cCqHC9Ef5jQnyhmp9Yaz2C6YQMxvF2B9",
  "key38": "iFa9PDMM2B4CF67QAoeCUnu5E1rdxkpt1ueF6J6Sf1kdn99DiW74W5H4j4AdQKCWD7j11JqSJYE8NdrA3fUqBFb",
  "key39": "469HJBkrmjQ7u9RphdYGo2NFhpBFFkCgQNsNBsyHHayGrPh1Vo5Fzri6iGQxFxv4PcKYggF4WdtCaHwJVCae8At5",
  "key40": "5LpasUyvo8Dj3XQoqFrXfeDDGNJwq1HKjy9DDbt77q9GSXMQpKeLJ7eNGwbn51of9gwsTjv3qWzhoQM9QpufGEii",
  "key41": "5dD3XL5du2Kk86HJqu6s5QXXayzQqck6G7Hp3xZmTswjRpFoCHPWnZMEkjRnWLiE19dWVpNbSxsqptNvK4tfuc1s",
  "key42": "3jxGQmRzKv1Tn9UFyKkBb76tkHJ9hSRx4WbrkexDiYKJs52xvNwoFSekGZHgmk5LDDx5KKVg5kPwmJXahTNV5kEP",
  "key43": "YJ4AXGjHYp2efCLsJiFsinsnuCB1iX8Z4NJC3i6PdcFrCExHxcYpksyS5nYwX5iCXQmYLSVysRFRGDEF4uLj6bb",
  "key44": "4JTJtWyzG8fuomwGHeVqRkDirQ2DeC7BvYrrALaGWTABaj9G3oE9kz6SVLVCjkGktQZ7eyKfJPvgLbxrVVUqZbX8",
  "key45": "3oG2h8FWDqVry2sUSyoCscTB5o4forDkhmdoMHvj6Nf6J8wwh6xbxmViEZWK6ZuP2xc3DTx7i1SCX3U1JgZBhKyS"
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
