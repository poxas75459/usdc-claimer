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
    "4Ws8tTD2LenCskJ97MeHexuKkiiLRcVvZHWZsCHTXCtug4uPDnwgbvqCmVxd5vVd5f7ZGkYGGozLYsfDgU93qstp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kewxCV4ZikwdkacusS6eeTwxLQmyxKkyhnHnm9MNWq9YkwZbGwr5V6zHktmZaWLj5zgaVNAvWfUPjsyrHS69XbF",
  "key1": "5W2CpZJcdaSSZgK8YsTmFfCzNJjxq5f6iLs2C9qQioBXmiquHhUMCiVatUEDn5BddfyVNgogwnQckPHi2byEwchH",
  "key2": "4cvPFC2zL67dmn6E5HdpVEhc4MSht1PWWuCS7knBsx434Mpzk4tu9eJEwZLskeCtHbvR3rwVSS2jzd2vc5zr4yFD",
  "key3": "3usK2qb6VX8TABERNQs8W22c8mKC7imKbixnEYf18AVeTytJtb3wAeizByx34G6L53WVDtKTMkjCGYwkRUQZybkU",
  "key4": "65yVKfkyYaqEXebCJn2Gfa3QUyKoqBVEcSQtwWxnTnzGcJ63ZxFyXcASk3aJhtzrKBx1yFtQ7bwHVNdK1QHzVGL7",
  "key5": "2UrR9pdBF56tRekiYXV7n1tFHAKg295772AY3iZYdUwJFqoY3rpEGHv2MrTEiUApQr1aicV2RuYeA9jCDfeEaLLS",
  "key6": "5RYnhuxb9Ks4PLEgGoKs5JLrQ5V3UPbiEtMEyP6biVED5fUvw1NbxHonocodeibUbPPzvtGK6jjBmiXB9VikUuPV",
  "key7": "msjS4mshVKLSi58GcEvbyYKbpariKU1mP87gBYp4UaifFk1ZbpJLaiQ7wH7vhe5cjhi4Ffs211wgsuJEmy7Ueei",
  "key8": "4JZHYPSXSCtH1f16mh3tj2YACu1kPmXW2qFdztWYjSUBfjTyiHPPRWstpsD7SQbNGkoMW8gikYWMadVFTmeoDYdC",
  "key9": "4CA9w7TccUcrFWCbCaN4U51dtGUXeywvhxkTArmkwJ25TbUVhWNgT5rn98Eornzdrz2jRG1PuEfyFCrafjupso1H",
  "key10": "4jF3cF2aKHCQmXVHbXmtjjyE8ihey1abxRku9HGXm2YzKQo5v3U7jhU6wV8akAAuFJ8h7RP2FD9Me6UuoCNbWCT8",
  "key11": "5avGy82wYY58G9FSBc17J2PPeeVbWwKPnLAtEXuCGZdmcqrDeXYotaiBmA1w8c4Lx5cxpUgHPkbYZMXckDspQnTx",
  "key12": "4CyZnsNjR5hPhB8yE6mgsc8g1WTx8JkL4EMt4FjV82CYZn7hcJaX2BctqL7mozBRzTidGZuLyi4NZQai23ktiSM1",
  "key13": "57ZohSpT1sADC1u4wM4BxXUH9qzJgS33UdpNm6Mo5qHsZW7moQu2x7u8Me9BAfLURTLwMFqgPMxkevMyYKkr7Bkn",
  "key14": "4i4SyxhShohbfcSdFswKudYSg36J2Lc6662sAfKtSjLn9LcEr1fDX2DfNDzm9mRDn5tjCCDA4FqmHVpyn6QJqZeh",
  "key15": "5WNEtcxBhU8qqTs7spWNGWgCUg9JRhGq1hZiDbqQnLrKKt2uJckWLftBAhR4mrFH9WpMEQhptqzeAc3b3XcSwptR",
  "key16": "3ejipsRjLHUu2PptPD62Nh4qJcHPdGMdCPnnc2rUqb7MeRgPk5RRPhDA8bstdWWDdgnLdXfzXYALcYKsn8HQ9J42",
  "key17": "5TzRRQRyJbkWbFW1X7dDmeb6Th8uGLH1wdmx45s2rJV2UsTki9EEpVEBxYUXo4w2how1TpGwRfpGdFiJwLBMPQ3f",
  "key18": "JfwmccyWPLLr9mNEWJZRgVMN4Sx6kM7WdarNuzy5xFLpBi151m6NRxQtfpmy439KEYSix8eNMPV9wvtsk6hs5A4",
  "key19": "4a3U94GeZB2x2GWHjSbvnsNaKCgd4nGzHdQBhPF81pZneQq8uh9kRe2G4NF31Y1XJydCACenErFkvc1eRsdugMVi",
  "key20": "2eu5WyQZ3a4CBkKNYvJ4vSRHzh8naNWqsGowPwQ3Mn4qQ7XUUB3tKPmVtuGw3b6B3dv2v1CVSPNQzasK5uas7a1B",
  "key21": "4zL6UQm5LKspPc4t4rLEERHnVJrKJz88BRCk6GH2keg24qx4CaXY4zRAJEP67cbp4T3H7Y5n7pxdBxo79meKEysv",
  "key22": "4msXxm7L4fCdXZ6ekSYgdWsGTBMSHCVk7o2cHVvZCSshun2gkwVoMVwABpjBdm1vKSrTdDGW6DsSmwXhZURb6bcY",
  "key23": "4NV69XbWUKzTYRXFvaW1EgY4LdXNV5a7ah9DRuyEjF1A9EZb1NMWQktvAuJwHvLZ5SXpHi8heW5J9rUjSLUEHwcg",
  "key24": "92VcER9qyzcZkrqSDh9otHo6JVjSjdeymR4CovkzKHQd18oBaPnz1r2gPciimaPM2CEEQV18ke1pmDuoQDqS9MX",
  "key25": "3FoDciJahU6s3mNqF2Zdg4vr9DMei3zRFPwzsFCoD71jkbgruGJhtFuMsZYSfqAkqrKGLdGoQmfAeNZPYJLq354",
  "key26": "59rF3yWxWwbBXAthHAnuTjk9GVwpW4sDxSbnGgQ7fkofGrf3UuoFgMyXiDWPpZCeXPW7R33QzA7KpBH23nYeu5Qv",
  "key27": "4UFti9MhayV1dKHhxEoH8VP5vzxXYauhdiJpN7M5PMtP1j1Fox9pc6HbVBAjBT5HY6wSpvq6McoHF42UoQwJvb4h",
  "key28": "37GXEWYibJkHMoeTHQZgXzBs5rom729edA3drugjXR41znm1FSXqgKmFmiMk24rnedyrkBtZEJqoms9yKdmrgNDa",
  "key29": "25cSaY4HZijvwsYjR6kb2vtgkFXUyvCpsEutgTwQmCeTXsAM2H2scFv7P1Co1CmgyUfszNLcu6osk4kwTiPFVjpn",
  "key30": "4758JniKdREgrs7uyAqX8bz6PFpJk6YA5kZUzU6sWmLNkbUeiEqvae3tVT11fyJdw4tL4PQYApB5QRffh7WbqApB",
  "key31": "58BuojzxqXKSEC8VGLM4BrmwFL6uQrH12exN8eMmcsWx4tF8QWpqt5oHu8NRkDCdWDyWiexzkSp8ZNAADfdZiVDk",
  "key32": "65cBJiNTGE1E854w8DQHuC7jWWqs8NZXHN657HGDnBP3j4SM7WdP1F924Tuqj6ZMudytMkBvyhmPgQYvES4BY9Zt",
  "key33": "4UZagag9JtAS4k2nzi6fRfCTm5TpJLdXvgLPhhXvfKvL2ySqfXCog2XkMVk52GCkhKtfCuEjTbq7T6rKXA88FkCM",
  "key34": "2ZbXmhRKaohfWRt4rjLkeYajoCq2wbxEeearCWZUyThEpB6ypW1PVUpFMFecVXV6r1gm5eeYzQfT9nr2mUSw4y4A"
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
