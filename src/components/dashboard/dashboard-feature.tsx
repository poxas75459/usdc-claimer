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
    "2orz8xUMWAk5yDLxPiMFT75SXvNChKNFm2wpVMpTJeoq2xZLNhSnQVpaMTDa6CJ1KjuNEJCuGEzpkwip1WMSwFJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDS9MWdpQwaMR1bqgcurhmap3DEnrmbY2KWkxQXZag4DjB8rNwSpqoY7LJ2TRxCWsPuf2SQqSgEgKT9QQJSMJGz",
  "key1": "C66a8JbhxxE8pb4ayRZqTYXEcWkPHpnMGauXhp35u4UHUNtcGFWyPQTBoALppcHsAPcMAEgiNsrVjcSzeXU447S",
  "key2": "2P4MdBdi1VU8V6XVQdHmLBf9Mf6V6yrvuE12FagraJHot4GxttxJvAGa7kGmnGJyAi8YbzMFAzGyHonQ94hXZvWQ",
  "key3": "5NHyAcp55nWbnWQiSvcdvdRA9x9V56eEbwdUY8KafBoqrVacFzyxtKTa7E2ZbSKunHWCm7ErjM3TYbu2pa36DJK1",
  "key4": "231HR7uBE4gWQ4SiLcse3giPDvnwkNBCCpE2jKswAboUduco4pbZ9JvCmVovDWgFLCisBG1NJQGVBphNpH6zwtDm",
  "key5": "2E6iZ2nHCKfgjcpmRqU25dVrDPqtX7LxMTCwAG7NbaE75ahD5VxsRE3aVkyThKosH2EUJwoXJssCPsqrreAsx1hM",
  "key6": "23pnLced2ZD5Jthi2KRs5zpPFgK7eWhvkTBpSQg7WPQYpJ37EWAb4vTDPHUBd9V4SXFRSZTPNYKbKdEVs5LR2miJ",
  "key7": "62pFhpjhoh4WdafeRcND4gX5SsudWq97HrUYxmash9KXaLnQRX9GPvL4FUgWUjbnKvHMYHjdAj4nq1rpbrKhHcxf",
  "key8": "WJEted6GoiNYPP9jsvpuVSj3Kvyvw8seZWYShuSBhs9GdDKmebDFHPfVxFPwSmeYBtkua2oyeYvvqfhfcJv6XU3",
  "key9": "MBbUWDwED5BU7oEvY6tnFQb8pK2HwKKeKdSbsKi4NUVfPkYA6woCUj3kEHkvyLvN7hxNqrKyScTnfLZFYknVB76",
  "key10": "L5Qp7uRwJgZT1Aj2GbAb274VUrv9YygfvuSdACTNj8SZ1oAqNf2eJpAgj7r6EZ5dUnz2c1CJySSwCSjoxJroUK6",
  "key11": "CgmgATH9GSurfLtq8KS2JkAsBw92Xca6ffkdXwURX5uu1JqF1CiSisHT6W54q5PioxzeALa6G8BeJEVbGbHyzkb",
  "key12": "rky8PJaFf8uZ8uGmqHJCHwMDE6ZdFgjYsLWmzCH1EjuDAvLUtkuvceKZXhaGa4aLsjsrvbfnReQK342qf55Tzok",
  "key13": "5uxEDzmZcEvyos9V36m4NJVwaHKCgsttnEr5Di3gMatnjbSRUn8B97rJJUii3uF7g3KKVqUiSNCncvoYg7WwkqBM",
  "key14": "2HFayUsFK3foYd2QbKNzzd7xS4o4PcDx2y474ogUbXcFDAYESVXzwjoAJEnEmFMYcsbnBGNUNREDQJpu95PYetbw",
  "key15": "2AoTDrjcefdbT6ykGJeemdmy4Pos9i79JAic87RV6cnFFychyCBS5f7aduCdunwBwGrGD9s4Xmafy7uYkuS6Ly9K",
  "key16": "5RPJD1gh1YnE41v2fRyRo9FPhzJAN9JvACgYx1MmfsmF51gj8GY91ZcNvPATEJPsLHTeTmU16VbXTCmphyyuPfdo",
  "key17": "vGWr4ngdZrBDdra5PJV8Zj5hUyAcy2cGB3pqRJSP4MtSFwsJ5f3u126qdkey2oSHwCRPb2aP5QizCD1kvmZiUmp",
  "key18": "2cK8R8Woxq6M49NMkMm5XSgvPm2cURhspXTQQVFAT99m1y5A3RJq8nV4JDcARDebNEkt3K4Z94sYxmxCceLjsBj7",
  "key19": "2nu287vyo2MBRM9Dn8MQ7Vx9BARKWsdYWFMc1wkG77T8K6AshbezxoMAJ97u4g15Xwxu5XR9HRSTDTCAQ7S2d9EB",
  "key20": "4TowSvoSnKANaS3dNzpokZK2XZTu5JzsWVVm2EFhvyDVadTJvhMz8h3VQapbNhhszVWpQDzJAKno6NRc3HszUHyZ",
  "key21": "5zKKgtoJ6Nb8ms4RC4FUmJ4zsY7uPtKp1fgVVJN9pks36a1JeH7xbzWd75u3gE8U7qcqRR2h4BULtmatXuNgxoLz",
  "key22": "eHJYD4MyM1wVSrUcmQhikR3M44QhaDTw4iD67qD9SRRbaT1ojzHgEVLYuUBgfKHJqP3rcdvbDi5WuujPuHkt8ju",
  "key23": "T7sPSZFtjtMnSNe8EaYKgQUCTXRj172H4eqWdxxCYvTokCNbEPaP2QPXujjuCCrXeBYffNKYQuSCWVoNK16W2An",
  "key24": "5fuCV4Uzp28kCHEm3wbkwoLoNMU2FUtX6zSzqBdkqcs9Q1X6e5jThYtyd8WiixGKYSGnA2rhZADp8RB6iyQksqdg",
  "key25": "61HTx2HQyu24J1v5Hi6UzV797GGDzttuJ6xUKBsEp2jrzz5qxy6oSwr36QHLf56q2PJ1AwHNJPB61aN5btqjbiGs",
  "key26": "4SNw46YQkZ82GG3H2HQ3ZsgDg33hcam2TGQRqyhyhyUGfArr3jeZQ5c2vUKkHHcb5Jt8FwFMDGdx4sbjjdDwRuZN",
  "key27": "3opStdy5ARjnD6eijdqRgdGdX3NyZhUdvWpBWLctaE6DAmySf6q5eUiTBkF6XJeKTqZydReq9uQxEeqfYkVhAvoW",
  "key28": "61uN5yppBmyprPfWfGdDoZFXzEXJq5kBchCJHbERkAg6nqE862pPaMGpcENBdtnZyUjHBcPuL35rLprDZb6mkGG7",
  "key29": "3UPBEkcwFjYFXaoj91kPkTaEDuRwRq9whBpdWSDn4jnfMiEiZqt8WEsrTszg6LAtjNFca3DafNEMjXzFm6WusMZh",
  "key30": "5fgg1Ess8q5bS6ebaqs4KqZVJnuxLZN8nMBqfgAMp4QXQRKmN8ne2Dps89f9BTwoWvaQf7WGL7fy4qeBA5QNyiXy",
  "key31": "4qF2fkuLWDhWwUahmPFtRS4BERH7oUMj81niVQBgFy4p8rV5s21SWDv1LYFDgRtWyrFhARvAY491SGUmYMhiQ6Sr",
  "key32": "57UZJQ1WXb68XMZtQYPFQh8LtheD9bzkBozyEgV7oi982bCFYwX4T75bZAHxXcndxLy9Mxhf2eksrULJPECumRWW",
  "key33": "4horWAvATvvh5ipQUDUvq5Xs8QakftEVc1DK5vtVCpoSdb3KjyF2xw8hqzuNMsCjtbtirYSJs8YEXQktpZ5cG9y4",
  "key34": "3z3QiHmXAFtngD4kNoaYzPuNgLGpFd4bQYq1JPbhzeYaaQMgXp1nJ7BeKTXeQATz3QqtD1JJsTu9iZGi9r668qNN",
  "key35": "5fK9dz3qEyMwSEdFvuiEc7KtHoJ66xd6dg5rx21R7teGn8YJNFfJCu9ZiSVTed9PY9q62t6KyQdZnz6VftUZSgeK"
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
