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
    "2SyodgMuwLGbtjegiYmWLH5kpa1n37CVxDZA1AEcspvsg22xepjUm87F48bk4SL92jaC2tyvnoosVmcPF5jhE3yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34hUcUpago2MNqKpdMiSxtFJa92wRZMf9ZQVHXJYfJNJX38oB92u2YNtAynff4DF7pyWmW16ss2uVvjcuyvkcFap",
  "key1": "2sVW2ags2ic1t7wcSokC1TRP8w1GcR7SS74Uy9rPthDuuKnYxvMTzxJnn9H6w1EyLov3d7gfeFQD8oBX9xJ6MwrS",
  "key2": "Vx2ssX329TpfmfekrQXgqBsEFvjG6X7o9CqUJXqmEjWXpzpuqvpPpP3Evkr2CfmJFsh8AnzVp6qeSVBgjW97PiW",
  "key3": "4t7mKJ65RR4dzjZRXBLJqbddVXK81KPatNSNRfqeNGkK5WPndApoUD9uinoEhccj3pzFKcwDwiBqmSLAoHD6kpjN",
  "key4": "61qLCCKMdsA6LQvcVE6pzCEzc7tfBpsAgwcW1k5hWoH6cPMRw1s7t6RcpgvGR3eVAXQAk17rjWUyerM7Y8FoRKqq",
  "key5": "5sBBcpXX6gUdb9P1RrVYfgeJFJqfaHnysMg1x6h4SWbUmR9pwQXESx7PXU71yDMNH5EgAKqUbcUH7uAJtEf4qjGL",
  "key6": "4t7HtR3oHcRR99vcoWromXUcfTo8c5fSZ216VoCxGsSqHWWqFCrtgbKzn3CMA4t5CZadQyARoUw5Z1XwVbzWZJMw",
  "key7": "3DD9TDsxtXxLDvPyFU8wrQHwLkS1zQKaK6thm5UNLoKGZBBfZ44p9vFqq6DSpeZKTkJeMDD46GAoB3DXk3EbD1Vx",
  "key8": "GhhYqMk7rWeZk3m5ggLEVHRuRFdeatkryKhUxwfjnbZWZcCoijKykhnbDFurRSp23J6igFDBue2Lz6a5yH1bQnN",
  "key9": "65Pr2HByoqNKe5tQqFqr1u23LZazweE43h8PAZMoQzbwFgDZKDgm97WUJLVnUtGS13KPz9wPwF1PYSewLLiqQjvy",
  "key10": "4BZbkPXiESdyLD23nQefcQDCXhwSXWiZbi9fnwis1h3Ayq8L4EDLC1Agcz78k9dFHndrK6Yc5fVX38RW66T854TS",
  "key11": "wC99jF8nxD76S1ssoEBnAVsFk3vJPHg4zt1K7no358eZPjmkzZLr38rWPxvy8o1UgLcRubpuxdcyXSToMZ8ft76",
  "key12": "4JXJi1wv3AqegZj3EwaRihRCGjzRSTLhBFJ4umaC1bnEBgLgYjM9TXvLMhL86LmNpbyizXFm67h558mZGMYjR52Y",
  "key13": "3MVZL4nVhtArNTwNHeHAWtauDyRSXYGHyPoRfMxxBaebwu23Kdk3dBVTb5c3sYfJhLWbwdTi3VWGUa1HLedUb6QJ",
  "key14": "2dPGD2fdEfhS3ueUXnwr3BLmqDVwR74M2UXUhiEn6VGwhYzq8s8Axw6XdPrYrw7Hrd9HHAyeZcznsL7VZbe8i6dA",
  "key15": "8vkfpUfT5sXfJEFj3pYgpgEE6vTeWFvrWt2sMTgfco3CHxRP3vmMjg4gPdtUvs4L8ep8RPcbKiCyQE8THibkxvC",
  "key16": "Eik7v9Abg1JvTWCX8GeNJ1Aj8jeaQEyi8hrPKkHpJ73cF3KLBSg9nQdoKGEoVFdoGXyJ4ehqSjgWqttXncmHfVA",
  "key17": "5qV5nivbck8xLMGCntWkLhTmmcr511ZubimpwyUf46gwPhhY9UiyVtKaRDbCKTJc8vE9hSjjbdLRYk6ZS7uUCLPw",
  "key18": "3JagDXJ4MfL2MQBWyRxkbVgrWuT1GRkc7zwLbXEX959Rtrxs9WYzmD8ae1wjLZSF8VTHALF7hsfoDbENbJoGGnVv",
  "key19": "4Gc5AawvYprqF6wP9VVyRasGB2wH4S6W4xejhowfGmMTk4fh3NAdeYzR2dhCpuMzdVEn8uQXD2bVNcnonYo7zpSa",
  "key20": "5N3Qo3UCk4EymY8rq88PvsvJDRb8JjzoG91GGaKeRqUnQJyZ1gtfoqKhDeVeGQGqJTWVyLKZKVekzrEmL2ifBUUj",
  "key21": "4DPdewtL4chLqhkLHg25XdUZyXqyVXCmNCQvTfDrpmFgBYRbdzLTmzx5UbdzpxXvCBdFusYj1rHJDcUP4SwbyFoh",
  "key22": "5tti5Y2GE7dJwTZk5TX9r27AaH9gDBaE6gSp19bXwyN7neaGYjUJs5abEFDjd1sLxUMKz4qes5ua2xJNtu3u7xGf",
  "key23": "21PUcE3Rzr6ib9Ah4VGVBDzxhTCapMDnWSFGefCyywdKAV7L9qjXh5WvRCx19TBQLeg2mh1fbAo8Ziv4bep3Apjo",
  "key24": "6qf4juvuEiqZhPPWCsUcK54yWKtisfop8eerKqb7UPkdqKqNnMSqfeFZg19xWt96NpnkWHnHLRL6BaGoH3DxitD",
  "key25": "4kT8v8BcJbrqRmnCUpSuuqgf6v1z8o9AQmCJTqWXJBmVpo2SmSu8JtBHFhrfGg5KWjWgH9HM7qVPb3uardP75Kwq",
  "key26": "kj4M4qPHrssGGN6RNHado7u8HtNfSRbg1VzUH3vMiq5LrmraZXNtPixs2x3X9SPhsYUAAtdSmo5svSjvAF6gNfq",
  "key27": "4CGVpAG3cY5Sihz2Pj6CCssQWp3fr4BXokpPC6RwdaWmLvbJxzDskSV265hqdToan7NSgLSuqcn4AGYxkvWaSCFk",
  "key28": "457JuGGnvotAVoLvpxy6qH8bju5s3L24Hqv1Pmpkvt9q7yVDkQWcWySpYv9oXr6QGdSHMFwQLuyEhgcqhk68LhsQ",
  "key29": "4fmCt5dxuwmeazx7zT9zNiUNCcaD68WfdE7vPZAHuYVFo9dqesYKQurMpD2VFX6TfDLHeXBPxjMCLyziE7aWBnNt",
  "key30": "5AGXBKCGe76Aq2pTusRCLTrEMrk1t6uxu1DAT8wx4X3LNrLv4LJ56Sz89ovHEZ5qa8YFyTgFhHX6jLeucHt1W3Kq",
  "key31": "5CWYCuxV4F8AxFZg1RE25cyn5rtit324WWV4LfbDmoxzTTowVeguQZsjnC6YS4gNanaioSx6ruFdfGyD9rFKLmF4",
  "key32": "61vweGNt8myx5GNpXmoVMHQzfzZR83F6TQNYK1QqucMzTqpuUR5WaZrisKtvHq9RiXtG2oF7wR9bpJ456Wyn8NCA",
  "key33": "2msZqVFstrwXRcbdS5NNBAiWdSwW2rRJwq1c3RW7BufgGghr59VbahyBWt5H8KNdaeZzJiNwdoYeeSZsPzw51pbM",
  "key34": "41vSta3wPdmzRwkJuV8F2Qah3XH4zs2JFj7Q5eZ8VMvaDHj3pf3jpqEPhSaUh19yNR4CA9C1XVtefPviAJGk1UpY",
  "key35": "hVadfmZxmu47csq9LmyjXJL7xestPi5HviDdp5d2QTRsnkAa87AtURrQV2DCNxdFjEZ2kt53yyEt8NQ5fu28MRj",
  "key36": "3AjeDSCXZcFLi4yTN6xUm1aCr3gXHLnCqwiURvXDHjDcZXLT6kKJRqqUYDdL9nyhUQdcTsVTDYhLPNW4KhXxyrG4",
  "key37": "4Usz1SECRBydVyT7NrBnbxU8oF8c3kErVkFMevk8Dk6B74KGdZSgqbkqVFXQSCA4jdeR2Lgtd3eKiCWrMXYUvi8A",
  "key38": "2m7cfwPyTbP8k75rJ3dkcLLoJasroyfHHwcESJBt7Qx9YTpchhmhnniCaRuEgxzQMYDyYmcU62trxXpExh1BjVQA",
  "key39": "5sg2g29s4aGk3QJTjC8nTYFLygApfyHwXZi96KysT6187J44BP4FTg14GTPJVK7Ao3irQmhtGVsyMcMcmgm4v5EF",
  "key40": "5SrBm8jKeY9WJ3i7qAZ4ugXxNdPAY71Ef8j5GUaFRTkqeiXLWzhs1jm1n6LLUJnzrmzE5YV2begSnrppUiDMb4Um",
  "key41": "2Aw38DtQ4srngBCzSKWpEkAQbdUThLdeFBGokpPodbmfEzHS4WK87faFbLjxjiZkQ648DRrtWCw8XTUxp2LMqzax",
  "key42": "3RaZa8jWouV5vBLBpSSqkb8HG4AC6rPdbBN3c5zd4saB9i2EBSFx153W2cvu3NjTok8tcsXtMmKiVnUp12houumN",
  "key43": "2ASVkpLQf4ULUKL2LK5wPVt4nDrSX6SJCvQaGswdkFend3unTZwZTdtvxQyAsvqrGttWTrEY6LkQv3aTo5ofL3cc",
  "key44": "533Wa5WkWYkiczPYN9u2Tyt1bVBNTEowqxJvhpp7s7SFi8wrNHHMeS5u4REEGQnJ6TP9ED99RxQmX7BNbN4GaeUT",
  "key45": "67ZedDxbhTpaGShNoNTwVrFqdLTRzVK21QZeuVkPn5W2QVFGAthDaZgwE5eQRacLpsYJz3M4ZQmsjspnG15MtSzT",
  "key46": "5w8FDGbsA76zFumpCTgbW6a8qhvRVora6ztgqzhhB19vPSzzpuTosBHpGqmbgxZLV8sX9n61KZx4AmKfQKq44rRS",
  "key47": "5cw5gUXvJtFsJ7kdAuL6WQeqX8EDpz1ihZVDLcRr2vbjnweqiQaB8FcLFkVgEmffpazufwKZeG6VaPCcBKfxrrcJ"
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
