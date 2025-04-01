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
    "4j5bi1taQmxB9QZaTL3EhHDxPcZ78f4UitdGMtDsi7AXgrCfAKKoGFewydw4BLERznJzZevTPhMS7RR2baizBtYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACxPrR3k4UGn2E1yNow1jRAcYjaBdxLr4PFEqkH61mZ1gNZrjznHqocyvotjBQ4cA3wsabq6hzFvNS7QMwoxtQV",
  "key1": "pBPmEzEt8Cu5nwNmDLWU8dQBcSUipuMvQRgiZJNHUqNhGnqFTgaNozUAPXA7u3Uewbjh1qx4S6LQyk7Tg9DW2Ch",
  "key2": "5g41KNZvredc1AivLhByb6nGHxAuK2szsmTmqN4Pk61Kx4FdrmYYbCEfe2UDwgwdrHbowtKj1bqsDTZzHXEKs2GD",
  "key3": "zmLxBcJc8duwSzZ2DNm8DoSziwcemqXrNiqKYNuWVLgLmzMgjFosPU9eNoCBHHw9eChdjtV9LapFPwaTDpBoBMc",
  "key4": "618jJGiX7tv8aeUuoUN5jRVDkJHtX4pNiFRhaRT7VEe8ZodYwiZHzHokkpEyxmJ7KiweYNHfcXhxwfYxFjnh46Qa",
  "key5": "67F9c75x2P71ZUYWm7oErUEtNMSpacRjnMhVWxoeVN7dHCkQwdX1FRsuTXReyiX4txLSWnc65rHkXQvL6j6NuAwA",
  "key6": "3NR2Foi51YQTJCxTsi8jrBEToSrD5nbXFKYsyyLFSApCz7VqDazwKpfKgun16fPUJFvh3ioMDSTkxmzYQnW1G3ZG",
  "key7": "4mkDFnGr2TxPbxa6SjhyUn2dHKhR8j3FpnP8CDFJPsheH68Q5CpQKs1TrLP87ws4TorMDsCeVWcSSJYZfmm5wuSu",
  "key8": "Tsko5nYksS1LSLgncVcCqQtxd5nYsRxdxaph3rfx51xVFTdRtNcnRs6zjk7GowJnQSxWuuB5HnqCVTYZpVatoF9",
  "key9": "5NFYHowjN1Am9AMEhubUBGz6Uv2MUpoHbtBNZxAsDYfXCRE6aXPEAdMRzRLk3wXqZ15fShYdfoptVP5UaRGM3vfL",
  "key10": "XdkZzTg9h4GCADmoytArNvW7d3nbA4siaYWMy32M76jSdTTBSCj3DXuUG9j7YsKYeHjpDdT7ju6kZVhMEh9YCWW",
  "key11": "5tTp1AjN8cgX88BaAujgmeBFsBP2sUKZP5Qsgo5f2oDUxWTgGojng9rxLFM5wqsSBE1LZtA6MHjZA4nDL2WkWeb3",
  "key12": "3W32M5mN3VFG1JHd7LhRdnGWViv8zxiR7xgFYZZqoYGxx5s78aKGP1wT7ygFLR7qtBhup9jSEKaUQP9qDhSEW2GN",
  "key13": "9erV5DZXanXYRdhZhyhWPnEQ3EbAGmT6d4zi6RLqVfExztT5JEoyazGmR43wsxiCjpEMQCMUBNr5g5MARHVswXG",
  "key14": "5XNXxR4uHNavsaMkcjGdYxtQJeSzA1KHNk2Zs3sSNvAkJmoBbZhaMEuL9pbDtpb4fgDrw5nonZ4uzAyQw1fktYAK",
  "key15": "4pnnU2opuPMURQA2qGbUVErbAZvekgKo1JfEJa2EZSLSFryzqTk3wGN6Pf1HxKPcPwa9bc5FTaQkenFPKMS6A91c",
  "key16": "3uCuVhsixSSvQnfsW6RFAgE4ZJJaty1w5jQYaZSuRsgwpfzXLuAwJnVyC4vALyEE2ZTEwHnq4efrbZT4JrvRhgEr",
  "key17": "5FHhdtDNSL4aG6goXoGHSMG3hLXVbpDs1FStigDVNsEa8sba3c1K3Y1BzrQPp6wSGzbkHnDWRVme8KmbedntZYmA",
  "key18": "ViKYgfdaBtXhnrpPHKFLdKR3NdMGiVfQDBE4fHQBwpwt4KehMWtxGTSzsbhRM5pbrBA8Xx8XEJY68wKuw7LdKHQ",
  "key19": "49wFUWmejnx7YwhHxHRRyVttdLUrhHxQ7CuD5XYj1Txs7b8wDaS1qQfWJqL2KcHgrELQ3wejRy2vN2DdETfxjxBo",
  "key20": "bnmv8Lvj4ttsSvPnBatK8CiTgxgCvP2YDpn84r51bthCbmq6xenz36MNjqXtyTkGTceiaVieSvcNJrMHwMbkzd5",
  "key21": "5MXqnaMxZmbz4C5moheBnhxgupgN48C5gVeaUVNEEDXqMCDH6qSsXX9ZJR4ham8txxxhVizYe6ko9MHhGJUATZXh",
  "key22": "44YCEduECbL1qfLwbmCxR3PgJ7eD4tRsAjytA5W8L5JTqTiBn8gVwnkx6K1ktKevWpfgyEm82r1kdSZSiAvR44nR",
  "key23": "4jmUcks98iPaDLFic3u7wNtp3QLg6Bw3no3ASxqHDhUuyq5nK9Bub5V3fbvrjg5aByGZCf71reCAySMmiBvmAePW",
  "key24": "3S12gPFf9hqu4obtcmBdQyVgiRr21hWVGN9Z3TPJyNhyZyAwaeWcfcN61zDWrnp4jXAmvyTNB3ZxZCzXUXza7hoD",
  "key25": "7sVw2wawvHdpbapbvZ7QqRCcRz8KxWDcHSEx9AauY2JHSMoVemW7rYu2czDFM8RMzbggWbhjF6mrkcX16wCcXEw",
  "key26": "3pCPD3eX9Zx395KKTpieW5T9FWSshFDqbpL4huZJZLtfs8sEiZLc59y21odjH12S8YYtWUfGGsZw2GBbcVUNKvjr",
  "key27": "4wzrggRdGnWFfGVGS2Z8srJKuZ9DFBaz5nyWG4FgWDMTgPGAKPpLd4rqSGeXRAWjJ2XYFLnj86UKFC7qUozDNQbJ",
  "key28": "2K9ojhLiLwGnYJiyuKseps5cuG9jxASuNpnm8PVuWwZcfXr8evBKp6SLB3Qr2kJB3SUjnNgTXF84782NqLXF9BZX",
  "key29": "52WFdzk5XFCQPZMqvR74KBE93f86uet1ypXJMhRruYEbsvoBPtQ5HFVdFLeQ4L69xYruYHeQHrBCVLfgxU6JR44R"
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
