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
    "A9XEjD2a9747gZgjv8FKRwH27VJ8o9dvSoAyuzwVu2MNNsGYhgdXbrpS7fSVafU9huMv4JAsXBVCH5pUd6h91UA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPkrQxge1ef1euaHqKMdRJtRUm8EqP9dmND4249mLzApbgC1YotGvubFPN6UDWFpZkDLz8UHttWw2cK8t6AFtZp",
  "key1": "4L4j5tQvWdXonZBbksC6em6xt16Zatf5VfvvP3QNSSqc3LNX8MNCp13Q19mkJRHKcmYcRqpH3zNkmcQ6QFHtRwr",
  "key2": "3tkYPmAFULENYM7SdCysJPysWJkZWQCFbAuo3Zr1sR1u2MxM54Xdf2qUdYRmjdjb7t6ou8818SZL9ur84iDpS6Xi",
  "key3": "3WYyNvFNh6GxbfW2qJpFTUGZZrhAWp6yXiyeB4CAPDZmnSx7tcZT82TtUBkpwZGoVDyV92FhjjJU8DjYy9V5CX45",
  "key4": "5tBbcvtPPf9R82CKPV67U6cjU4C5LYg5prj5Qvgf5nuzFf2s6UjGZUT6eBesB3MhCqHWnzLaD9VmHgiiAs46pvSo",
  "key5": "KWkicb4ZTTzux9pvK5GZppdhAypeiX4PQkGzPhEb4TNFsjMLHXQX96BCfJhqnPJxnKw1KWNz39RJnpavWqGxcUz",
  "key6": "4SHM2Ys2MjndsEh43bX57qX9z8afJxSfb1U22MeKaPpiCmyQFaVxx8iH61SncrZxzvPZi5hghKpJSXDVa2ZM8uBm",
  "key7": "1RE4mdEWq8t1Za7cBujRR3PGqFPUHRRi7p7VJY7mrsJBRraZqgiTPB9VCW8swmmAyqwWpc3SQQja4TiZkLyZt7c",
  "key8": "4SnVZ2YshgpthHA28DZqUhTgCditSCAX3Bd7W9acyFmCgQQ6YheEwm6yeHahE2ibkJyEM8zs72L8SqpnaXqQ5926",
  "key9": "4C57EBt6ep8GkzF7HCdCYqoPREDHUAsfWWCyzzcB5n4qASXXG4qLqNnmRgJLZ3JUtfTw6DHscikQ6MJswuxauovB",
  "key10": "PorP7U6DhhMwVAKwCoorv3v4XdMc1uDAqWxAB6EZNkoCfbtHkssP8w38BUXEwUVNWeeQN2Me9YNdJzTN7rkKSTM",
  "key11": "3P5mBFQV5SiTUEMTefWTunnFMtcV19yTvEa9X3Cq8D4bpLgCePcDk93nXMDW2uJsvGGYAxMmbwzmuy9xSEQcspeh",
  "key12": "Ekw81YbhW9T2KfPxyvF5zMEPkgoSoh36xzLRp2K6f5BJSB6Jtc2HtNTBvrrxgdQwjnirQPgHJJqYYFBw5CvKV9h",
  "key13": "4a1zok23qgKFd5og6RGoustEKbUUCi4NswaSz96cdZo6QDLsop6jrGPaacYHS7Vmt6VbWGZxMhApat9mMFTLZrq3",
  "key14": "VYtbbVQFQhTLayjz1g7igkuDewkdqXfEkqbAX3hjMCKUFjaUz3CSJkTTz9rvPNBFqvV31tzNwFSEG9zrNVkmLLw",
  "key15": "4Kb6fUMYfBm2Gzw81uU6LZ1BRYg5JG9aDko8SVYA1MLDnvfJeYrxkBLW96C4y4PVupKkhND9g7rR2wuZVkfVutCP",
  "key16": "3W5zyhUYAh2SANekP8NyeCZ7Mq1AYqPBEQe3TPtxCJpQpgBUgnttudYAVA9VXkxzHmuT4aGDbGsbkENAabaXE9Lf",
  "key17": "NiUp4Uakrtwt81tjWytX9h52Lt9SAETiWuv5xEFECcVCfTi5YZEmiCGhFW6s5ZiZ4TpCUa2HBFugaTF9AwQv2Zc",
  "key18": "5ZwTGD57w3TU3okj6ssve94uviYEzRQArViiBp9Mdc7faYYAumoLaLSp6Rc3xiLM5p7HoXeq2vbzatqt2V3e5wvy",
  "key19": "4xkroxPyjWZNy3bJ7gFNerYkURjXV1KazsDk7fc51WiVzmz3twZkkf7XyPM77HntveHRJX4x52ZSYbBdd2gC7RAb",
  "key20": "642SwGRdepVkpktAurgY9U4DKcaL3fLMwuiDKLAgjDVm1APHqHpZnVZgSk6gY9jEbLvUAVfc4aYnAFrz9bbynycG",
  "key21": "3MEGQp1waf4EHAtstkShiqDTNa7XzK5B8C7NV9E1BxKXxL4v7Ee5HtYxBr9a3Yip2Ah5Vnit8aAC2K7S6ZED2EHz",
  "key22": "279WXEG7DPjRcJtsRQLwbr7pR873iRJNH6NFsEzjbuLnT7HhJX7zCsk9fTGUM4n5cmLCMbQvNHu8MCnTfDUJhU2c",
  "key23": "3RNwXpyCbKmhrii1JekNM3y31hmCXgVrPp9n48vePQhQSicP17vMBLvpThLspVowDnACiNEjbeHpEUAuuT1821ZX",
  "key24": "4n4badnU78ikJgUQMvYUPJ6H4YkKnQgaovTC8mDkpZ8Trtc7KBuJcbUfCh5UvKcvwg6bNhYoPtSquwfsDCWCvxpT",
  "key25": "53gdDSnGSBKWcbekbwCYH2iqBGiireSsWwt1n3Bk5FV8ftnmf5WpvCZmbSyLqennHbbhtE7Hj3aiQQvGbNwGYBD8",
  "key26": "3WpNmHEKfskcwsvR2ycCfAjABdbA7UoHJo3FwGaVE15wKsWwJ4f8JXUS1F99gkiBw8nivrDKfsxMCr5jsvNB3wn4",
  "key27": "3TchyxjVmztthyKBERpexLqT3GHQ6PtgSEt6PQAwZW1agLj5pEqvqMRQ8GAjCcH1H5Tisb21DEHPmZmJd5hdmCDi",
  "key28": "2wDGnLhNRP6zy6NcUqhUDw4QCff4EH53hFzi1VCoEVfzUwqrDrJbxGkpEdzx1mRifR9ph3LZTZ3VYwjVTDdg5CH3",
  "key29": "5bMFdzzYsZpSiW8vkKHuZiFzqgmULBD8TXuc2UCNjQwE5YsaR9h5ZA63bHAHDhXhFtQge4nW34edpyUXvk1S5Woq",
  "key30": "4WrTXabmi5TANxBzuAu2GoHgkbs9VLYHcyDGV4G3PVCfg3nmgWL77JPWv8kkUEQ7kreyfvBX7m8MgB4585PmXKPo",
  "key31": "2ZVby2k65MCVAYuHFLiGDzhyQWNfSimcrTy8M22hPsUn8VcC9xtFX6hTWg7MFaPrf9zCPsJSa5PU7Ni7GXdvEERL",
  "key32": "2i9XW7ctpSG3k1uVJ2tM9r4r3YhfUiG8rQs335QNyfMDcRucPAeCRQUq7BW9cDsWAvPDLQPB7n9Tf9VCRqkmLzL8",
  "key33": "2KnJGzcH5fbrJWy16bshPiu5wHJoL1QsWEKvgNydY3dnbmBPWoGhmwH4nGbtddnKJwpYkjBbN5QV8Vt9nRNXGB3p",
  "key34": "3CZoGnmx4kfiZKRkqqFdyfuyL9bgaqE1DuLvZdWX5UYJ7LyENrGZRxSsGV9H2h4vfZL1nS8rdnf4qMh1gLcrHuDP",
  "key35": "2MEx6DYAmmiwdN9ViB4ffYcKvnAqf89bWHEv3oXL2i4gdUgfArNMZNbTRDGeBg9UzcYZLHFswBEL7pNBguxzxTQ1",
  "key36": "34pF7efAiJAK1bcEEUgRwJchhEAZbJUseRjrkZjzCKBbi3NHjyZBaST24jeSPwE6vwWqiBbQHx7rggbnpd1SCgve",
  "key37": "3pm38tVYyEWeepcKn3JeosP58Zyjk4ViF6XAB7MPFYkRxR6YiUo6gFbpeksuMLaRxusmnNgRnED8QEvAEFqSvxZW",
  "key38": "4qcYJ8SSuACyhMKrxovjLLRb8Szb7Hq8GQQC7V3GNJqY2EcwHfbPCCW8zMnfdgPznKdsweNoNknSs7qHVVJcXEAZ",
  "key39": "3a6AbtrDAQTLLjpy4mhsoDrCiHBeBzaifqkTarwfXgkT7GazXaciJpZ8wZggYrpogovmJ8kGF2dZud3hnZb3M1YH",
  "key40": "4qebpnmFB16n6r3NJf2ToRMD7oBF7i6MvwVhzszFvywr75KRNXgYxhM6Ham3oPSJtQoz9s4QK1KRvdPF2bVcCxLB",
  "key41": "4DAw6ECHo5FTKA7WFRmXrtD5U824mQHEr671duKSSskEYEJ1TJKmHm1g1E3Q7MySeCArW2j8sQoir4LuKRY3pZAM"
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
