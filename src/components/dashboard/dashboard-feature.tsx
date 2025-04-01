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
    "3kQG2EcWrJrSmqHTeDx6mW4YZZRLkMy1oVpfA6YsJVf7PXomqbJpaWqJdUPyYDjaB5uxnmYgH1h3ZALRQueCFSSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYBn1tZNji39pULcJT8ycGVs1XbhXer1szWFW5RrMXjTLpQY1hwYH5PJ7RWAA8GasxJ8x5s8Jnyfds1kW4MEFWj",
  "key1": "4dkjNHjMmcHjYRLbxhyrrNmwMknDaAQCazsvqDYkEGG5v3uqGADBW8hHLQnVkkrfoiJydnjhbu4C8vR822jDogf8",
  "key2": "5bdMz9hkQ6Epm4AzBHEyYoj3uSaD2qW8RxyrfbNEaHkgYH8oBrYt2MqeQAxfnfwNzmuyfDnopkwa348kcG2dhzbG",
  "key3": "4L6XVgVPh9KVe2RBZvTwQP7VCANYVy8GfpQafQKyWDqgjH6QbYRtSWmNBFjzzTqMXVQjEd96jArFHKHYftFQAECK",
  "key4": "3sP1wcvYqEscfsgLwng7ewrtJtmNqQb8GRd7dRbdswVJHNvjEBTGZoUsSebpaiCoN6vTE4AdcenLci8oNsxnzWYZ",
  "key5": "3UjUxbVBX6cQgp7SmwzYZZDCR3i3zWkANXCKRdZcat7gfu2kvzYoBowxmyZwTE7JP1P8ZRdV15DZAFN4UEDxqMv8",
  "key6": "47pxiydk5RbX36MsPrTQ9dNZ1r8F9QDBXRuELnrBEY9pGRpsCHstQ9tVNeZNLFnvS3GEGjntkY1ipy65x3ssnUFw",
  "key7": "jJjkXXX7X2aubyEJkqTqVofaB3L22SjsMRyip4hux1ynPoWQYD9p18TVCyS9xiqyvyKHQ1eg2jQa3sdCmoYXAjV",
  "key8": "3AWms9SnkjV7HuU7NrSmU22YA89e1FrHqZ8aXWbhW4SeJSyXEAZVFe7ekQrQ71ERvxmN5ARNT2Nx4v5dJTRgkjxx",
  "key9": "3ZeDbLHiekSKJM3Mb4BenQcfXDRniWbXySCVpuMzgm7Fymx5ujR3bXSQ7CniAVLy5LKLZBwyFtjoHobNrh91rsKp",
  "key10": "58ZTnMW9BdkvGrT9jb2BPxoxxyNMgmfqtPyDLjHSMa9q6RC6MKqFNjMzPSHTjAy8fBPfSeBDczq65Z39NRroUSBY",
  "key11": "4fWp5zkaQDNpE5GpshkZ6ZVb4wkh3aRcYaUhbaoBsdcnnc4vvwP6ujYCQukTtRK4N1Q28SxUkwLCCLTnxvzDmspS",
  "key12": "46ZfdvFtrEXtCoUwUscZtZUn47xXaC1zH8QFu3Ldu7KtxCs4d3UsAofrAj62GMQnK8PsJEMtraaPhCoWZGnJXEZK",
  "key13": "4Kk2jD5g6qRXA5LDUA8RbT53vS1tvbB37j1APW1anvSsCtjgPCc7MukCbjcEouz9zLc798sZTCXwedJ7PGiHkQSb",
  "key14": "46f1v1M1kkydWTV6sAV4QrDDdTrx9kisskoqug3mCaXAxQ475giMpfEawcFWwpHHt9tGbTiQxQQgaXNcfR9q7ske",
  "key15": "44JqmgpxWweLMDqwsHNXoGnn68HrxYPLE5MEDS9Xja7aHecqnzuiH4pDa14er2MPFHsdS253xXCqXD1w1VJtEJx3",
  "key16": "iSSpu4goZRMVheLtbKpnVyDCzipyCip37XgQX9ynyVQ9YhjC6JmNBKvVzon5oMLAdE12CJnT3SZbijCT9xT62vu",
  "key17": "5Ji3Z1SoLLrMa5tz7Jc34aiNT41uyAtFrUdNoBpvaMiYNa6fp92aKcrV9Kjs58axxWhDz6sNGdtiKF6bAUq4JaKn",
  "key18": "5EE9KR9gSunTfo8UTmCYX2JR4aokGaKWyT5GbQRMB8mnPKUKRDgfR6zfDwP1xzU3Tt2jHxJisX8U7pLQK15Lmxot",
  "key19": "CrAsvBHdXjNDnaYp6nrK4zsFHf6SRWnNYrvSRtv1dCdWWCZ2NTHovRthRoouw4PFrm3EXdiA2hfW8vPxS91FtRo",
  "key20": "2pjxj2oBjDoAh1UcCido5ujX5sh8D6FcCinDZFbSFvGf217oU1E4BnEw6thdDzvS9xs5JtLySooSoVx45ti57dmR",
  "key21": "4YnkvA7HvfZXnCF8BE9MRpytQt6rvQw9PhCyw2eEK2mtHKgDkS32R8GpvJGCBYHtdKSMyrRFh2Vd9AgHCVWZ4ngX",
  "key22": "3si1fZb3Fc1gRmcjjsg6KpGk9uZTLscnKxjSEaxTMv4VvDyC8tTt8enkeJ4FGQSsHgQAbwvUyQWyfB3Ux2bNBbyJ",
  "key23": "iVkCuQJ8bDwxGoZxaYFSzFDDUaAmFMvwLwnKacggsbsWnMPeaSUA3WucR9PG29Evi5rTe9oTCV2gKGWpWxgxETz",
  "key24": "5ERGRqwJQWag5XuDs1yFEb2HN9aXSU49c1kChPyV123GwpPaBTAMfpQGvdV2xze4neoG21ZLKMYfcRuwuzdYadKD",
  "key25": "5AesqX5PEPwMHAzSTZBcxxXQwHfEnxP5yLD7idwUKocmEEuxeimPFjo18bykKj58tF8JUC58hf6PSJecor7EUwzh",
  "key26": "2nYf6JK8aHcjunHbKhVKUVaCndS9xw6fuhiDExnLPgFRhWebvBsZF3NsDhPMRE6ZkhbLx1ALtU6oYHWZyQnMhUaF",
  "key27": "ym7EMs5PtVN1Md43mfoY4z34BiwoLAFQCdZ1nzbCJUHYxPhBD8fe8PcHpcG3bB6xwqJ5ZoVqZDezZZ8JMQbBJmj",
  "key28": "3gz9JFJiPdbaADySZUKJsDtTpBp14kR3GZiqBaGxMw4FyPVaQMPTmBBq9pXbCpW2MKZixuWcDFpkbdvjRcwZvRsg",
  "key29": "N3am8TNkoq4T63phR9JvY951pV8BBreLyrxM9kosdNm8fHWkGS9drcFHAUHmFnRFU92VBqiCWqaUn34fjEQXRbZ",
  "key30": "4XShoE7YaegQZh9o56rkcfKPnSCKL67WCJWsKaXj9ppciMfeTbT2WYMnUKoHUSPDZZQ46rPcSZZz1k8BXewpbBX",
  "key31": "5yAfM5Dk4DPUVNHXEZZCS7zDac67rCXi2GorQDonVfmfuLdt4eyWQRPhB2KK7HPepDoSYPSN3FqYXE4XGh8pyn6a",
  "key32": "3TnhovFXidTbDtAjPGJb9yYPKecc8EWFhDQ7kwu63YDKQkroUzPhAQBqmcd739o79nB2ihDHpHFHYh7vSw7tZMzX",
  "key33": "DnkbFXxiG72y4tpkKDheYHuxmbXAt5wCf3c78UqxZ2zEtdqpiCf4JMxHh9H6BDTSDxdF2dGDybLTHUfGLm8WBoF",
  "key34": "2oWaN5ui159Hw5MVf5zznuL4q7NChmp8SQ6mzoCmC4Tyf5dFaSim7eJCsMJkqJgqgK5E2x2Pum1e6oFL9NGh8P8H",
  "key35": "234D3kd1CffW8wKQLtngz9rWGdxMKUJUJmn94e8CX24bNJfKkz3LKFrfnrtFogkTEguf1P9Gfqwo8VDUzexd9nUQ",
  "key36": "2TDjrKsXw5hZD4kTjCp36bCZGZ8689mXNkJ4VkzgMu1J9wC9dXpZKdqfCQ6RzJrtLDwwchWq3wMf6QFrsDeeAyZh",
  "key37": "JBKq26GapoxJnMANWJ91mnSnv4EnvgnKMuJ78nJdUbkWVaW1aAMzyF56d8qo6BXF1JQVhM9BP2ihZwA9vSzKayQ",
  "key38": "5U7hzhFyxcqcyferGzDAyT95xkkDZ4kmoNvkCLdXhMKDuL57jQY1WMeXihKprymmqyZV7QR7YWDiZhSy4wJqaRuz",
  "key39": "24ZbBRdZrCjvLP7c2n3eBPkvTxvrRwMjtaCEWNkXXd7XEYHPtrojboCbRASARkw3S4ZALLrHkrN3DB8U1T5PR77x",
  "key40": "2RDdu98ixU54L8j4FFcgm2sX9zrsT7hVtdcGNertYPQAiTN9duGQzS2Dt2USXfajQgbcFiiA9E1mp15dpBzirzBe",
  "key41": "2fDrPDRJ6y9D7SeTDhFVPcXSuGMZtGVBAnaDd2qBBcy76sGx9CtJgzDRZ8bsmJe1dYhVqCUG7Y2qm52BponZZKMa",
  "key42": "4d68HorUCYwe6Gsa1jRrTF7cxuT3q6V1CLaT1ee1Lx1KUm9rY9jwk4DVBHM34p1XCfKY97h5Bfi3WpP51dpp88US",
  "key43": "4tmpocXLjPXTKTdzCi26L4R5zsFgkU8udmU6cbu5eQN8SL8n2cyH9DNankmS5mrmmhVsyBh3uaz4ptF77RRKpT5y",
  "key44": "1LYnzrhQRe83dc2dXCjiHFBH8f828FcUWPWGfoBQCWKi8UEVpStkaVtfGfeoQVi8h34uaVzwzFn6PZm29yQ9Cfy",
  "key45": "5W76UNESQczLgZqRtgXFepZ8RyDdDKzmaKFy2inj9g2Tmv4B6yLrRxNvHCU8kzBVkp367iBonwddy9D2WQ96SsQY",
  "key46": "3MeXTj2Hzhwqe12Txhctm8VXSjw3Z9TnyBgAL32fv11iB75vsVhV7XPgG1bLhh8ZKAWAStmvQXYVQbuq57NDpRgD",
  "key47": "oET4WkoPdk5WCuy85TjYmjaChTsYpCpvVDip2DMgfPYjFLsV1TAgzicHM3RE5oZ43C1iaYaHspHTxRMKcNnJDjA",
  "key48": "3axwLiHAgZSoEF29PF48p2HH4auNyK5hokXuTvcEbcfxfdAPUC957pqzgs9sicxAPVAqVm9dd3R4j2Pm8oow2V1N"
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
