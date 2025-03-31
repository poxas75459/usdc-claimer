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
    "juNUtVBpEcdWd6k2SW4cABJxfXXDS95tw84UtiXgRpBYkNVFuD9TNFkJW8ZD1TdtcDbamzk91K1mCSMxr8ftiEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TjePg1bgYzApZBYu8JV5XmWGuciCLXfjfgrGEXTYgYS57eUJCSfLFuJ6svfdyfn5M26Hqy63WLjzrPmewR6xGVZ",
  "key1": "66ohhYuyXfSE85g4GR2YffAP8DRqeBo3EbGDSE2dJzZ8JTmqq3qs2Kc2CfuWxQ4Zyen56shQ7m1pBjyLvedASxm1",
  "key2": "5Hei6Qi7AAkmEQvGfaYZsmuwDCWP7rmeMNrGvcyazGVUE9efQFRh5t4Tszp2Bng52e7ySvFmXUheW7edqqkXL8UH",
  "key3": "5wNL12VCm8HvD721GywwBYW6pnKg3iPaN7YPG94dWJc81vFWM3H3g4M5k9iCCfJXAfa3huHVM35nVeaP7XYhtWnb",
  "key4": "5RhmH2HuTWcQUMfrBzrymPLuPJXfXEWDkM4T56SzYemmr8FsEPqAN4egfpedDWDQDD1M6vt3FEfY55L4pxyo3fwD",
  "key5": "2FyPhcmjiaeQAnJSZAMDY2oVZJCSAjibyDzvJhVNpKC5B37C49xWnnXEgCoMiS4CtrCX97ierY94rrCucEmiijpJ",
  "key6": "4cHMDBwAnAJh3FqrgTX8VaeMTFU5S7DCt2JbVE95w1TNSBixH5gCLF9gLJbr3oM2PGKVPHhqBqVsknf7eeXjeanC",
  "key7": "3drozgMgFo9CnVfXBw7wrGwLakmR7RThnQhytV3goZzURTvLd31JxbXqkUvMEbN8iJo1h94e1D5Mzgy6F1LLb15r",
  "key8": "fHmd6gHDXUTiCgjV5ssdQYwoBGWWPNS2jfrApUpMdtsuFauzsHWtjvbkrn8Vx13unLfhS4XBwFTyHxBo7JVhCm4",
  "key9": "46NugDaZbdSY5GJxDgQi7cCzhmY1teZQ7rEJg65pBLtb6sgP9YHBrzZw9YoWcum3japJSYkfffJw8jHsV7f9GfEH",
  "key10": "57nvzJVC3FBH5MBJ8gcaUU6YQP5sdLARQBaRJL9ymnGafeNm8hjuyp8gLbQoExSWgBwkwDQEV6rA8L48CXK5w6Pu",
  "key11": "4SWbkbrPGtpsYUrNBwowYDmDVRWSV1REnKpmaMgf3dG5oyLYLdBVkKjWGpuZUugP8y4KYbL9JrnFxLJyx4L54JQN",
  "key12": "342pcrXzoWU38YrKtA8ibgEbt1orZAotSYHptgJED2cSqafVoyaMRs4txrx18nDrnyraYPRWR2BpvjCcUzV3VeCh",
  "key13": "4ajXBixLPpif1D1pQG4UMVj7zLF27oKcP7NRNN83XhnJD9REseVujvVR3e6Hvjb9cGitczg68ukzvdxpsyH6obvC",
  "key14": "t7oWp7Fro5WhB3h4xukEtC8LtUWWJf8aHpZZE6WXKk8hs3b8hdGgTq2gRxr2JTzwWX61hQu91cuWe5BMMoPYxse",
  "key15": "C8rxTG4UK8tSdJYPf9NK5T3pjh9V2FZuvCBUnpFNQ866MRk4QKwNjts7twNTQy28S6DUHmp1TVbipswbp1M1tzA",
  "key16": "2peTyArC6H7kPJ8yG6ZqF24LweUzpeeeZu6ATHDG41VYSwJHh2CdLwBJm6tARui9kcVgdyn4wfs66fvDtHpn6Ndf",
  "key17": "4BHUqygaqGRrYmwsTzZnoLxNRtuQxeh6wL5s4ME6PpSfyq1hYiZfWBuvqQ1u5tZiCfsoLXBqXs4q1J9cdwWBMDRR",
  "key18": "2ZshtU1jfFf6cGyjTs7fGULUg3oTZ1mZxmQMz1R4mjb5RMGjkBGEbChgnDTeaeeSMiAt85wgNXPhpBVKUb93h833",
  "key19": "91BNbiWAMybfgrbLZpPvR86jaajTmfJcwzgjL1ud7466VaC5wvU8sqvfGwqvRxcJEnhE41sEBueVVSYcbUqExuj",
  "key20": "kKX4D7zF6wY4p6BFiom676b5XDwRjwX47wx5ae55cuJCgWMuADMMuAZP3WZdjyqZcdAFNAVWc9bbG15gnZxXBZD",
  "key21": "5v3tp5xpSEZ4STYRTE2gPj3YHBq26ahM8zpQHTYYdFbq27DxWbsiZfUsrHYLwwAu2Npwbzvqers69p3naFi8vYqQ",
  "key22": "4qTdwoEEdaYuvU9qrVngamDTWmcGT96Af2BoM9nXNZjDdaSH61rJLVN782Fycs2TxY1AtjTHpTdunB3kY61BqL5m",
  "key23": "4JvqBYnvcw77Wp34wcFFtv1JpMLCKfMarmBWfMs28tzq31gGnvtzwfBqSckvHHucz83qPkwKVuEK2b93h8Miq6oo",
  "key24": "3ad9dSJ5Qm3mLyrJjzGHdtPKarrLMSdRLEEitiJVfHvNY8eWdUwLJQmjiGw186MEa9Ryfyo9qbBMMTDropdfesY1",
  "key25": "4rgzbHbYWLcjfu8PTNKhsRj9Gu4Wq88Be9LdvB1oKoEXzTPMA8LCpqdwvkoQyzG5YajaR5cqYqFXDeQf45gw665y",
  "key26": "3WJm3PEUg8grjoDCwNuPymoXTbUQYN567KYB5bafVXnPiZSJymhUnrLaVhUpyrE9a4zk6HU1tAQ52rEsVUoPUszh",
  "key27": "4ftGJiFGMuZDwbGLmcXAuHznS56ruVoHkG6bUahVLrhWqUTvT83joSz8kYnUFrktQj66gXh9RacT7C4Egso5Wrd",
  "key28": "5rFappfBrZ1mgG3xABDjLtorYqaytd5gUzB6MR1YF8Kf69ko2D2snG5TgSYyzke1c57jiF51vvuFurbwdYjVFP9U",
  "key29": "3f5Hy5tFPmE5n8ChZvaDvKK9vH3HAb5mmeAKjRz5UYRQTqwSM1GFUedAkN12PVsJ9Q6PFhqhu5Y29WWidxtU9nNj",
  "key30": "2yKZUDLMMTddyMoMPez3yJLtMk1whmBJAT12USqm1wdrqsLQSWNwFHRi45hdBYHi9wfY961rbBB7MLsQKuL9ZYsp",
  "key31": "38BURTC1HPgbeZiPgoTxLxQj9PL6URaRTz3BPoNyE4HRysHsyixG7ibEryApdJQpEzQaPigVStsHxrMmuUN2cYQz",
  "key32": "2YnrVCqt4yH6WQ6TAmRnx4ZX9ihaFYHPH1dXFUeXfbzqpAHd6s1oZexKphBk6kVnCAnmTX2GsPXVz4ax9RQzhS75",
  "key33": "axiiQtmKHF1Z4zbU8xnu4D3o2gQepQhwWWM8a7mAPLdW9tnPRdViZryvX4KWHgSKJR3ahEpnfsvgKLLdgtdJug8",
  "key34": "2PQQ17WMbTb6GyAYyCM9APJxnU1hSywCt95UtAA4XNpoBJCa9zHx7yynDMV7zxDgEEEJwVTX84rr1tqWRJtrGFd3",
  "key35": "5ZifwvLtRiwbPfUJnkLfPCCkWoA9vtgr9cufJM4TVLFJ7W3RsXht1YP5YTh3S74LkaiQAwtfPUVhAz4z6uH9rwFE"
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
