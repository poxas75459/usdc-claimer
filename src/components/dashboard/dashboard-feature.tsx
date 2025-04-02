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
    "coi76na3taAESNiDqX4L5Nc4gT5ca5Vwzi4GgQGpksdbBPCNYDtKG96gEfeACKVqizs2nhZj6nk5m9WWiFrnRCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWvjzLNA6xiEasHnTst7ysGefKDfaGpMJRJTtSRKSjj5kxNuaJ9Mj37DpJR7jziXposHV87hEd4ndEWSbY8LYR9",
  "key1": "2bHGdcq3hE3ZrYfG1iBEu9ovjc2zT98M5CKfV3JD5nmD4heASHzx4dSL74mUrskigxcjJqnm4TvN9LD3L7aaThsH",
  "key2": "47F88uRZ3T8xP65rNHXZuMdoV1eTDXZGpJ8pp1cPdanoxdASLRyWqdzyvBJPYiGB9wbRTcDUbmbWb7aG4GhZUtg2",
  "key3": "3JWGgb4uduSX4onnMgUVUUJWJpM7CzT46aGpswmZjt4JUwRgp7Lao7HuHLuAcWpo5xha98PfLR7MCzKizxsfyTha",
  "key4": "5WNkeaXmvR9CDU57FvqDVx2FFTkvdttpCnJYxkDNtyweH5uRBWQ5Kr5LSgyqghebjWiJhL73gS9T5Nd6rTdFzcpZ",
  "key5": "3dipgjN8e1bkxCa655fHUKW8MxfNrm2Nwyhyvya1PjGf7AdGw7WvZ1QQ5BvfCNh2QC7Bxf1gCKR9yM81vaTKxGE1",
  "key6": "5f4RatzeJmVNqqmVWKa5PGibfN71sULYX7JxsZeuk91oTVNeomcBWbXYgWFiZhWRX6pXe5qy7HuptueKBPtrLhA7",
  "key7": "4R6mkXwdZfyGrNWtrFVaepThgeqDfs2gsMmaUmhmksDGeWDiiaHrru48riKuDwVpEdFqsiTDVef2PLcj4JKLzHJ",
  "key8": "33UZUZ6z31TFMPF1GoHpSwBERQDTxkg5TeemKzcY5mozaXS5GrpTMA2p219iXQd7Gd1PQbqAA162nst5WoC3W6PV",
  "key9": "2PCoodeJKUWE9fsqupynrzAbRedzzguc7qetsGMKeeNubxCB382rgXctPsvtwbvscyf6VmsmE93V6FAxyo497Hce",
  "key10": "4zU6fFmm7jwH5RHwUXasioT3EERJ4Ax3JEAJ9eobUgvK7kdGSxDQ2odM81Gkk9kymQt9jDzQ9LkFnCUdKcdENt5S",
  "key11": "3J6EnPgC2dq4yKv6YhSTvypVgCpMiUAti8qv9gKxcbAosCCsYRt48Pe2pfZiBGrWbpBpsrmEAGunp8aT8M4si7kL",
  "key12": "MLV6S7vax8oE4Zx9x29ovmXcC7oifSy7nMe31K7YJ9TQGrwfznNukPHgxH42C2MTRJSyfhBcotTxV1eHAXFBJxe",
  "key13": "5iTFTQpfKrjgJ4umVA3K2EYhsg34keLS34UxMMnxv5ksg8KzfA8t9qFVVguENA1sxSQqSgLzKzmRBS3XgiC9QoMk",
  "key14": "3z4sqzphaphMZhoDjvQPjqycsk38TBky9NRa2dMoYF8VHMBbDWuWv2MkySMgG7zjsNLZYJ9M4BwnCHPFScdovgwz",
  "key15": "3iS1dtUcVqaELU7V6PvBevkXPRYnXp2S59RTRQk2Fe2QJYoWLhsy1ECPMTmdKsBB9dMbNPAqiGBfjECRVwEk3sJM",
  "key16": "25vpS4VumgGPB9uKsGNpV84UszSC7yHuNKVXDdD8LaZMrVPsWuVfEUEonrdpgi9g1sJbK5gwEatvxPAJ11EB7JKY",
  "key17": "5d19usZ7vBX3vYbbnaSKUw8apQNa5XuHfk5zN8xYKMoVAaGqJCMoC9X7UXjMyBLaGukNuautxNezoiDPJitAM7Hv",
  "key18": "4LcfAyPkqZ2wvPwWuaftqAf2fuNiBNg5CJTbfSaZ7dQasYnmyqPV85KvXH43tHjnBjGHsfdS4VUx2b8Bq8rRPH5P",
  "key19": "57JiP3UDpJLMeoiNfBKJEByGdvh8e8W6dkrwNtYWuKuuo2wkvLD1DSPe3DjULYsbdtzXz9cuHBFyrPfDqh6Y6KLo",
  "key20": "3dYLTuCdxmpVviZBb7YcMRDY5qNSFVADNntdQG7U9b9vxubgXFgkYBzxKHpA3vccKacSucPyU5DCpVwUkZcjrHRQ",
  "key21": "63DCxMNRsWnJyrVmftRLd2k63edresHvoCcFR7gdYU8iLiuCifcCAirsQdqp5nMxGQ1FfLw3qED4Bb9TFdXWuu8K",
  "key22": "4RKikEffNZQJbE3nQL77uwhHDrT77guY4ZBZbso3b2a4SpPhQe1Nr4BxvvPvA89U35mmB4Zu2UGhmxbhyFHJT2y5",
  "key23": "5rsUYVd8AbxAmpyb1vAkE5QpMuV7sxYv3j5zxECGFyjJjmmH2ZzSqsNkWoJqNBv9uP2CEZY2q56c1UGonpfPNgiC",
  "key24": "2Qoaf3sNTA6yQErBFaMdqsom8pyDvZfdWKwQm7MLJYG344wNn1HKDe9Xbz5i8ioYkZLLuuEBJhc7MMw8xbz7TB9Z",
  "key25": "61eJxBrcJYeCqdwrpqqARrdZD8GBKf357wRBwMKLTZ4EnZaongUXbc8nuSPaEV85cHZEUdQGvrswHkCFgKEGxbUU",
  "key26": "9KDVu7ua5G3xRTNaXd5xxUiPMdJyJTYY7e63TEmYZVrtU2Da1xobzN5f94SFnp5CqvegMWtxvaNZXeooqbSh4NZ",
  "key27": "2Ei769hybD4G5M9kRMokJqYGD5pkMAssAk5v6JjRYUgdKzexz4dEZnHMfSXaGFNLU35TaxQWSzM4zNgZevBz6NQJ",
  "key28": "1jFPMcGnEgZEbLbAGMNuBtuui5EhZzMhcWPhvCy31pZSBu6Ug7Ep93etDRAHi487911nqCgWJ32TVmAeM9LHk6F",
  "key29": "2fsBCUKFVQYkzH9fxRsSMwY37MgjGuzJbjmHguVeyBqw4A5m6hW2EiUVdrQx9k2bciKLF1kpkasCsw9VtrQryXoi",
  "key30": "417eETUBy2EnwA9vNmFPfjrfccXWwZLafGZBYG2UDrK9QQTN2DB87xzoUBrgwrRYhVoCJueSCPWZaDvz8Wv64Ghc",
  "key31": "go9aDj3eZoWVD4uiCEZFzBiDgTCCSxo5re6LuCfHoMumpUvBK9jU1fKxFR63iKHFkqdtpQ7V7gpyCESPitjd1gW",
  "key32": "5FvmJG5sASaimXM1tFbrxUxsTTz7sj7EmpsYNcEyAVUKt2J6AgkSrqzqVE8xoCaLchNo2CWtAfzkBNZP6Bwmx1CS"
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
