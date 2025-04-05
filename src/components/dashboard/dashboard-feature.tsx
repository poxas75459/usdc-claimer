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
    "3Gk5FcBwH9qF9CXM15DL1yxq7ofHU7oEwMcZkCxaXKkzFkz8P3Pcpca43njpQ19sAkiuXZJKVUpzsXfbNYrw4zyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cmTEU1gVeRpNweQTmJgLGybb9FnTQvar2ibkveUx7SPaxYroEYbZJXPNYxmg21nL8g7YmtModTmAtgQJVCKx1cs",
  "key1": "2MfTYcy8PfgNo4qA6b43cjWc2Qosq5HVeX1TL2KLJKkLUQGs5a9RLt9rpp8Z7yffRJe5hu99fyskutHyHockd42g",
  "key2": "2AhPnxNaWJzePct6JdvhXZhwhqm7nFagpAtxgbUDbLLBjukwJnmoKhFQ1yMAxQJNED7jfsZY8FtYSRbc95S28gq3",
  "key3": "4TkCKXNCWVrCqyzC8Q9xRm71WCToeCKJw9VZzLBtRZcp1f5tfYmds5XC4WJqZmqhC6oe1rPC6f8iEq27AUxrBgKA",
  "key4": "4vRunDX4QUkhPyarjfLEm7Q4eGVGsdojw1Moyvcy9Mv3ajbiUfKusVZ8tUJgfdZUo4ay6bQkeuruh9norChShpbp",
  "key5": "4R7F6LDN7ybPhcH1fjYrWQVGuUQKLidDSpUMDmmSZSVFn7cmEzw69vLkf7Rdq2W35io58tcvkwLQjfbp2QTnpEu8",
  "key6": "DBzsbFAntMCDyasjfwJKBnXTrMLWgBAAw3w4joJYorTYBBRWc1Cr4n5oWzQQ1kL3VJtGj2hvxgxbaKZgS35EFJP",
  "key7": "4ggokyEnHNbq4t9nrB9jmjSXAzDXpTBmzYrPJvfaqoyeAkdjXP2EqGUf8bKfhjKXhodL6w2DKJvXPFBJUNxRm2W6",
  "key8": "4pJ5yqhiKD53Ti8u9x93Y6ae7AGY6B7CcSEnDnXegBKsKSbEMtZ72BLg5CByXMrw97PEGnuM647LSuzdKFmMbcxL",
  "key9": "wEiatgbnom8M2WPZeADot3yDfUUueCSV3AhGedAQ3LVV9u9RYfiHDm3g1AU1S9CzrqLJmGr1kfsh7E79aq3bhne",
  "key10": "5UwKyXYycDMZheAqMoYbfe5k3crYNAvAGR2bF5pksNyiskbcjdZgUyRFutNnejV8eCmJEygriXyXvXBtYzhYomkd",
  "key11": "3mho96nr6tsR7fj6Gi2afyRmgwrK9JvqRUvknQfVYsvqCUCgPQKWGwi3B1RdfPfeCDMwwbJVb87SBcHaiLuGCbWw",
  "key12": "21tTt6qBCcLqtdcQJEcQ2otwaMWLMgnxWDat2mLtV5j9Ae2pmHTuC4iqdS119QhAmC1MSRsuFWmbqLSNHza9YGmN",
  "key13": "26qKQpAmqvTUbz4sUuyQ6rUjjW8hnvdyfEfTgepQFZLERazVsoYDtNbxie5kKg8kR5TH4E4MV1Wrr7t3ciEJEi1y",
  "key14": "3qifn5gHwVcZfbFkW2HwAzWjuc13hzt2pbQVGHVEwyhGbNbSHndiu24W5rqJPtzsuuFiPJpFzXzdCKQx3Ld9oCV6",
  "key15": "25tbkUphisxNkPkJGxRezKjvPfpWXMCrW89qKFvjzCtLwu9xim4DrRjmJYnLiyGWzPdp426EWDKd4gV45QzahG7X",
  "key16": "4g5uHsszfhSC8SRBNRvzJZy9vc3t1kJ6s6txMZaqK2kZYtKrknXSaATaczUdXDLCsXkYeJX2XTswTFXEVBtbAy1i",
  "key17": "2B2jxiXb8mV2XE1AehNZ6Ld49pb66vfqA4hUeYEc6NkAkXtu3Pk87S6cCUaUb3RLjtokV5WW6zYJiAhK32mQjyj5",
  "key18": "bQDy3LkGaUG3YiogRUeMetPrzTh9WBLfN9wod29oCEoS3p3PeQNJwbLi9uKmW1oKiuYJLU4ZrG3sKsBB67roYPo",
  "key19": "3aanQvFdK8vYWD2zfFUQmXX1jcXprMquTAnoxvrRSJgDCA8MeWf4Xn4wSGgKCRwbYc1jji4U2dHPXFjjCS7up5u8",
  "key20": "3sd4U5NJjSBkbMNgS3yr5hcZKoB8JUnRoTsn2KUU7C1XMu4mxLJN1Ub82khgfQcgJS2gB8L4GsvmUN8soydpayDT",
  "key21": "wowbSV5GqF6a7FhyCUjuPedKsnNULRwicRpMbA3D5uVcXvLwBjXje4GXGAoRJ1LerEx6u6xUiZ8EaDLT6CdydSH",
  "key22": "2t995guoaLo3jjf2JA6WZBTnvbqinxjnSe6cG7yjEFtAXoSUqZUg189rFSuiPDX2gw9UvvGQPYGK3XMPoN6GT5DZ",
  "key23": "4HCt9NgXi3WAAwCHf8NP4QUfrBaMGANJewVuKzV4m6FxeV9xKvziMfimkGTZPHDZ5TPNecG5aK6b9JJqMpKBcUm9",
  "key24": "4jX2e1yQjJCB9LzhkNdaNDVCkQM8TsT6WRUWn3z6dJnF3cusvynKqFFXXzxh655JrdSL53RUwxPujUXZdD6ZrcAk",
  "key25": "4DJUpXKFDfgfdQJiEuB3DxJkYF42D9kfXUXGx5yKLX5CQEDUj2kuDTTVCdL5VEMa6qx4nvRRpyj8LwcDM6KQyrLX",
  "key26": "2At2abNXneroBuqJrY3XvYkqCWdMeTDV94wpppvo5715KH2iHSJzXKJDZ5itfAZe9jxjgYa6TmuCcXjnAikzM7mn",
  "key27": "4rPcmmECRJ6UyZPaREauFkqauWNEonuaPDpz8a2L5FfpkJYhe8q97higTbingunTzEwFsyTtc6FL2EFX4BQSHQWg",
  "key28": "3teJ85fJCGWdQqRu7w76F7Ak8g53FkUrrf1kjYiHE7P9RbGRHRKq2nhHDHeSth52eFDorPXsaSubBhDD5uURZ5th",
  "key29": "3Na7Lr1GpL43pkfpKoEZDoGfLh62ZWiu5zGssopt5ovwmuj6RGkdCvzsCWJgUU3c8yn1AAoSAvnasurHpiEKT4Dw",
  "key30": "5zBiXCSTUFNQnLyHN1rR2bNHgzSKFNEMH5ZGJQM9zn9oYhbQxrHoK9h1JudY4VkdUbiN3cTF3F1zosoDPDUv3wHR",
  "key31": "ubVx4ozVwSQMhzHHAzEbdMAnEdKKsiwNAJq8HPtxZD5Z772AfQ9He8FESaxEFVW7YmsfZB3sMLspHagxXdJXhC3",
  "key32": "5yjU8k4UvtcGggQayu9KCB3SEhFx69SFvXma1idBbAMFD9bE3tpT8xmbmiKCJCAgVY8pWGsS3wNWJ4q6c6y6V5k6",
  "key33": "44VYuB8De2djWtvrZb2hEWia7w7h24s31p8FRKXUyWb37JgveqT2hsPzmXHjgT9kxjiREsPxytjsZTerADCUksYL",
  "key34": "3LVh9gTFE36WJ1FWzeFn6TWg1Z8taEMHHR4zWHwMTagbbtWwpn3njNmNEcyNzSwhaFFGjCQdtgGWiYzo2wiD3uXc",
  "key35": "35mXQb8p2YK66otAYSePW3QwBuqcmf6dQJNbzdhTbgx8orszEfTe6FXg495fwPUGWUwWDL1HK5gM32BHFPiejyv6",
  "key36": "2LxwuHkYsFm5zU5FCNWP4ffgh5pgvhb28vhaH4up4nKQqs8wN51SraVxqwc8wR6xBAHEuUsAZ5NaTRfMAWvLkoff",
  "key37": "2j5vUKmbpxkC9AS7Khx9coUAGxoRoQir8rXhZvo28D6tgikQ38zTriiwV67RQsSgw6wN3tUM7MqRbw4DEBb48LAL",
  "key38": "2miTzkVBaRuqLTkbvQw1Wp9KPXoH11Y8xBsfbatoxbCvz16n8J8PXsCxqsDxgsaoEZ38rTGw2JYxF18io37c6aFW",
  "key39": "4g58Asm5MtQmG2NEW7jSuKEJD5xouQ6Qmf8Dtcpc7zxAJLASXSfA4sgRdJqpues2K7SMRBevhg5fc37xSFuthHnb",
  "key40": "34PXVEx4Jv3DiWDjjxzMadS2n5JRuaFTiTY2qzj9m8FEmw5zsvkDycFTkM2S3sur72Jfa8mayRjTdG1Lad3uN12N",
  "key41": "2pqH1sMQQY9yokP19rhfdobhAAkggUiTcYV6HoVu6dwQcJ1eySBFxgUbS3rrDcxAPA1zmyNDKv1XzzYhwqLNSJQU",
  "key42": "4xwDckNxss87sDcQaoFwLMBRAZCfeq4H8seQozq56EoqccwCyFbwJjhVqwChMZT4MfmDcyNGuGHkVobaFbeNs9T3",
  "key43": "2Y6zPXW3Lrkirt3PAU44KuyHnxKBEaSQa95EsR6ntk3NDGptUZk6yyXx6YydG8zfnVSwtpCmydwaK9YEpygerwKj",
  "key44": "3SG8skp9w9PmvXnkdy69S139y5e9XLvMGXYditecSMv4H8dWX7UAUEnwF9U292gVfsANZdFePV9Cmvckv47d5EfN",
  "key45": "3GbV4Q9YQ7uubM6gfBp4twjL5YFXBHEp4AAbRUhxPW9ZCjRoSvEqsezv6icbzUARrJx1bXrpUPW7JLo2xXSPFSqN",
  "key46": "HSSQAFmDwoGyqn35Jibk1ML4ZaQxZDcJvRQ2xYZ4KGwQdjoKBhTRzqnvdH1Hau6gKykoTYJ4vvDSVqUVjQSN55w",
  "key47": "3459nzmm31XHvhZqKrHgxrdFs7WaiceLuuvjVqdgt7nBaTXpf96bPKzXjbaUA7sGmZEHHNa9yXs4Mx1rv119dGgD",
  "key48": "5HCNPDAq27HyrdhGMeBogdv4QydiK13kfHL8CHajLHFrLogGW3JHGENJyKab66eVESU2djHbmnvcroP23jgL9pqT",
  "key49": "2Zchq53E93qpHn7DXXRbb2ZtXsSpEpvmBKzCotnyqJiq2Lwo8fXS1dtaR8LwSbkbhroy9i4kBn1VZupoxmNkQW2S"
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
