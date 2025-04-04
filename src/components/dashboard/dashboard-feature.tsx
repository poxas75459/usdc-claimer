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
    "626LF27QSBTmKNxeu7ogTc6YoYE4Q6N6DfFpUL3LgHhjsNzNDcWVRK9kzNXdQ89eLuesSKwjt6Y3Vm4FQJV8ksFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uM54diTvb1vS28T8nrgpEJCV1pj5nY58KQrPjsjf2MhHnjw5ihdCYWHQY7Q8pCRxsoSv7CF5PLGqLzVU7b6QKPC",
  "key1": "s57TEAecbCy7koB1353gvJYXwqVuDkpGCZkRaWDHy7u63dLKgrXy4DVSdydGehukYrpvzyLxv4BQLigsFjUpqvx",
  "key2": "33mj8kLr27by9Dai7xaVhn75nWrMXRf47Y2NYyUtNtD6xrEsXgkMwQKc3NNfPvKbHGePvYb48mNMsCSLXkDfw6uh",
  "key3": "xv83oUp1KCT7AjTaLEFXPouPXeyTggA52t2rbS4Hve5ATP84bU6x2YeaRYEJKzVNBrjnbrHBLTMXSez6uitDXSv",
  "key4": "4FA5jbKPZ7n8srhR4SZn2VssKnpejaFpZvdcrFCBGBdQEH112TfpUFhs7UsAkfzHrk4QguFC4FFyfoPcgc1sBay8",
  "key5": "27mjqRPHLtGVEVAup93hrQRhzqMebTHSRqENo1PqEvBh1stMkpRUng7ED3QXd53nVzVPJcjchg1e6ypGtu8r4Vda",
  "key6": "2kLKEobaUaytVfRrqnMMdeKudp8RfPMNRzRciBsUPVJeCvAn7nCME9tegYpnZjkQECfqNHwnND8fdezn9yEVvUg1",
  "key7": "2phj1P1N3GhubcBjLji9F5T6cnQJdtb9YKhkoxJzymq5hPwp9YouGfQxmVeJDwee8wFMzmoure8N9YRPQuDLaxYU",
  "key8": "3nKjpH7i8ctDisZXPuTSpM8hrQuWNNuyiPgG7iRLSDT9VizzGJG9ULZ1Vu8A6F1UeY69gX3zJtvAt4dgkno1bsUb",
  "key9": "4d4VukRw4vF6irJcNwz5qZaD1y26Py9q3kALPd42W6GEaZVDReoaRKAp3KQzRMgm7DFxFCJwwLh9k141Mby4vKu7",
  "key10": "eyR8znRQ2Th9tJWiuijnuWBpGdURid9xGdtWCicd68R2iEmxXQyESYLton88nXksZyExgUR2n4Lm3uZ5g1RYo9e",
  "key11": "55WaavMDsDN2EfEVJGQuRfYuggxgz5tgkP1eZHTSszAHfPzLcZL9tNNaeYoSuYfvjgqnwJkVGgBQZ7HxinEmce6r",
  "key12": "4yu9JUWZNWzunSLvrsS94qCXPxFZLMc1V1dWL3SDYmfCa5wPndajDCRP9XpnRceyrk9nqoMwSHdtvyNizbgmMjst",
  "key13": "3ZnXkyQsBvfJ9PH1zEtxXFSvFeVRdxZzQTNEy2f3aFEepMbNwd65ZpZ2s5sM7QuJLpnPq9evYaJizKRGVb2iLyGV",
  "key14": "3hZwpYEfkNZxQDZ44BivS8Rwp9QL2YgQfvxjHxN187SDSUUdhcC67zBeVy6xvLt7kW9WjGvee1r9a5C9i9MdmWoT",
  "key15": "63GXoDLrZrnZJR4anX7BvDGurWDjg8rny1VA6svbDa2T6hr6Z54Yvx2s41QSavxQtDZcYT5Vjsmce3Lg5bcUkxmk",
  "key16": "4TomtkXCxAaif1oqVjffHtK88xqMwS8zz5Ub9eT78LYRpsChaSJk4anDx9Ecy5zEb1JmTkCCDAVLvCTwHtkMWFTR",
  "key17": "nfT9qC965CsJXMFTFBnT1depEpuVq96C82uGH5HDp8A6jtVFaqcXPuRHKTvp2omtaFaBFQFE2dChE3hfQxsryF2",
  "key18": "4bLMHUmz8bvF79DGafvgaAxm2M1qAmjKCJEPjR1z2E6vAbcADCbsJt6DVxf4YMF7dR6kQBpMQaSHaNUFSWKUNPTz",
  "key19": "3zT5pTpoDNkyJgpeHS3zoFMKKymmxBswCfBheus21piYAmmvdSyjmuHF7cKTHYNHpcQ9EJia5iTDjE8ApoKT3Mdg",
  "key20": "3NkypNJDiueuziYUZ7sU4aFFcxi3k4gtb1y16u3b9Swv3igyTVVn2ZnbuD51vQjpy2M5KtTf5xE3Ff5hup5uEWSv",
  "key21": "5P5D43ezr1GRxbS3scvYcAfgHX6diJ8Z4X1vT8hHvC6i9kq1wYWGvAEp4VmtUGfchCVQ6RSVZgYbLPbg3fNbhSk1",
  "key22": "2wHW4YaS99jZ476msZ1FRAQoeEiJiJhvU1FytjfAvfMcEB1HKr1iKxw3PWYsh7ym6jrYt48iK7tjfUGKMMcmuYmC",
  "key23": "4SGdu4xsBZ5REvfRrZFNs9kxWdKpEwK2U4aVLMjJao8dyQ8qghbPUzRcHYSNVz5xYW2kyU6v429n7wgagjanVyGN",
  "key24": "5Vxu8TBmEXXeReKbKJoyT8MJB5gEC5buSJek1MFaDDQwcUcNzc5Y9S57ZCVY11s7NDzbHgaNjLz2eeVGBQqxc7q6",
  "key25": "5HuRDkZiUnizkukr9LDWZpR7YGWaMFheYsfHooP6wgdW5T22J8MHhmD1VJscAbd8HT1gyftb95ws2F9s76hkWqWn",
  "key26": "5bkjDXCGY3dWVLZerA4WqzTaHMRFARpL7JdpYQizBXJUg79no8HeVuVUar8rChCHnJAXbUgnqr7MmTADhzoGyLDk",
  "key27": "66bdDQ3w3BV5s7o6rXtrmY35BpwE9iDtYXRcM8CbnoXQmbdwnU7CUxYhpjLGE1iwvsJZZB234tdNucEb3m3jX2DL",
  "key28": "3y4JKCAPKjj3zeJV7eKppaYSyRzjSCkL9QLmSXEsStAVrwHsUZznm7WsjBZzeTV44JX74Xzk6r5XfraS6Tj7ChJ5",
  "key29": "5B7kE7V1oSA2N9RQWXaYh25ydQ1PWjC4XXRsnaxYKavGvLmMyryeSpVe8keX5vEtrbJ5GnP3RggNUtJw96TJzd9K",
  "key30": "41RkFKDNmUhUFr1EmkEpzSgTkHVw26yovw6LgFn8Q9sKryWtoqNZYYD9SD4KAnPkTscMgZAfT1M1ZdLVdfhZvA8M",
  "key31": "4Ad8BY2vJwKvicrHPWwDnRE4ES3RnB5UnSfhhBVjNKbtLiJnTcr3v9uiTDeXmaQcmuQi7UyYdmmoMrUj7V4DxUaM",
  "key32": "32LYTU1QKMWgXrZ3XWtR8Muc4hp2v4uvKkctsp7rDRpUBJRUrR4ciw1veb2fkG7VgKvBqEj1bqGcmasgqrPQibVZ",
  "key33": "5r7gDNLYA9W5qrbzCC7cmGJZHuS5aGPrMPaVhougJPvqkGgoZUyXVYneE7WA5pJEiw5NzWrCmaxDXMGZAt8erWgK",
  "key34": "5jWFPzd7NymFvSufVaNdHSMfRDr45pJk6Bty8aY9ZvVE86XxH9gTBmKc2qMjRLHTwhBtHoEGNoVgCZjx1CsGdN4d",
  "key35": "Bg37Y9sfxbqE9qU9gQSokfkoYggDSeojN7ai51QUeZ3JEJV1AtD387WPtwXtqZjcrpuesaamz71uigsBnp1zSUw",
  "key36": "27EfYdopUZCfhfggTyMzFfQLpZYDhfY8sFwY8khq9NhBL8TVmgQkKLxNukAC4jMoxphkUs8WbEfiFZB3fuW4CYhs",
  "key37": "27pMYygB6NN4fAERW6Fr3pm6GQNFDpE1JML3ijJgKE5yyYjD5RV8D1nxp4zSL4SfsSmtKCyGim55rdRbD8k6YUsq",
  "key38": "8vrvJRvdrkvdkgkbrpjVz1p12BKPvaB2FPRcqvoHdHTDxDsVVS2uNoF2veCoan2xeMjPemSxLcgSCz6Ld3DbMoL",
  "key39": "A8B1vrf893Ew6so2M3PP5ZScdP84FhoGbrE8AMehpV27CjyMdoxtbYUFb1tYWnSQ7k6UmQR3jswZyoUc9djNLXX",
  "key40": "4FLvu1jyQVNmNHQboX8TbmkwpUJwsYhFGoPJXqMKQdVS8PAqNtomveyJtBLwATmJy7yXEcBMieW1Ex7WAV1aonX",
  "key41": "5J4AubW6hqZK9VWUAREZQbBjvo9D2V1RNznrti2RrvJmT66xAKoy8vWwWaX5b7K5PucypaoLfD9TpmovGUFCKWQK",
  "key42": "3YHShz5fnSXX563iG4mX8DJyX9BiAd7aTBqVYzcFaT1pJi5zLiz4mNP4xfjS2ewgqjm8cNmguERmedwNoQp4HWex",
  "key43": "L514dvF5SyQDqXzD94nm9WhT2HdLDYGpk6LznjfMhQ5jZEHP6NsYq4c7sxiDxcz9eTpSqCErpezsj3hpp1q9uxN",
  "key44": "2yQ1QDikuVrhopjkBmFMofvmWAHz8SSi478GRiM3eMQtNtLSyQWhF7HHJCzSk9fhppogeD5yEYXoNraewEgsrBL9",
  "key45": "3bzFPPS8AcdstHiTzYksKB1ohK5JfCMQivRvNG3S54sT3bHAfNfJKpHUCvVDnCaeooeYVpSrWSLHbShWMoqCv275",
  "key46": "54tVE38FfCk9en9NJ7Bc8cxC3T7JcbB8d3XLkDX5MvwJ9xiAtDUyAYeAecAWBZP1bbiBug3gsME5nwE5MzdsA5Pg"
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
