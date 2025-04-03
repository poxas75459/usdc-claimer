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
    "5VD2oJ79x3B7fxt3E53HLMrd9zRzHwCHvbkXjzRfGfCB4WGwPuxPvkb91DqKu9Ynswi5xCg7bn7Y2DtMzVhBoYES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2zzSttsrM8sJk2vTTXLvGxVRutuWLfcJMq2XofyDGsZFHGBBakFYNozfo5xn5Bt5RGUywPkQn7bUxCPjSxNapA",
  "key1": "5bGFXzKsgJjEFvZ72BfbjgiEF1jJn5qqDLi5xxnYtugEDBVh3fuHpZxsiddJcTFdWAQMp9UPuEU9cJZLHjute4LU",
  "key2": "47s65NCCum1Moqte8C7pW1Wv3LfnrTJpiRaENUY7i8VTwdLXRMcbcYxgMBEeYB73BWrXZv1TKDH5QH5o3bsoidrY",
  "key3": "5RwEFQSCsDPZaAK9i5f2nyCYDUUfzczghG2LdZsV7BZ54qkt8ohz2ahA74aoscULkhcL9o3EVnQRZoyTHJUxCjRy",
  "key4": "4Q79bpTSoMy9V7UsoNHPUu9CvAPoKWF3ueZFfr6SesssTDRzVxXTi1Pb5PDYQCX5dFpPiSsCdrUCLyCTiHWwJPWs",
  "key5": "3H7vHvg95RJPTVfoxJB7oNtZui6jBgUQ9JEfZ2LZoJZv7cFi3FTYPW9Qu2GbF1HVcEHuXcLC15pEzdyVrrJh9W3j",
  "key6": "Jatqc7DihVmtzmronJUSURverqtXRqdeCdjLYXq1geL2fosWB4gg8VSqxyWZQoHR3FD1xu7sbxeY3DwRkDsidD7",
  "key7": "2qUM1JMFZxZZLimaH1UyCYuGWJ3w4SfdsC6YPV1H9PBmJNF5wiVMwK7jVtpWazyG2E9Qa7AxZL59so8LL2pFop9g",
  "key8": "5KofW2vimHSHo3eGMJDnceXgu4X6uWWk8mk6VA1w2W7f2Gn1zifNxFi4vcNaNawvsRDbkHgKdE9GosHf52YsJrrY",
  "key9": "5y5kcpULCcD7AfsdypWDyUMnAxusutqKUB9fwCSXr2Jx3MLZNjdt7CyLswscJKEgqdqgQLdnZdDYBc9vXZsjjoov",
  "key10": "4gHcRsMQFL2HkKAyMeSYhUiZXfhLENE7T5ksr25WjfiC1JLkxec1BwADwibAkDEeeTDfBTYCKNprpHHCfMEAZjEF",
  "key11": "2S8wYr6MLKpxL44FjUMYsv6MoVhgeU8MG7ddP6gqdFGo31ZVtVtwbt4A5CsFXuAE8nJu9tLKmdwi6AhvjSVSWs94",
  "key12": "4vkmh1ibYVSPNkuY5MHa269DjWAoAyZ5s6kAp9NZvZNDx7HiohFJS4wPhq29eVhKQ2ZJFE5Ahqi47JnVxn2Gcsh1",
  "key13": "36SPoDTJXNPRNg1VAfisp48pjsZqGuvrmDBugjSbwJv8Xqwp6nsCZys6sLsGNzLWZeTVYAjHR9go48NECLHcA3Bz",
  "key14": "5KAz79SwzYgibzZU7mufr6nKtZNqqXiejijyYVmXvQJqQ9wNnyA8YaFVAfkWcVEZgZUsZuqe7HPHtFJTbPTdA4Nf",
  "key15": "5NZCMs59gdE2XisMKh3YPP9mPd36UsZYYxGfreTZCUiUBU2hYSh6vH3WqYHLWFa5VVqmUXqMQrQBtKCTeo4qoczS",
  "key16": "KqehYtUcz1oNuqUaR9CGi6sU7eZdDo6F9i9hbojqBrFgp8pQCEBzdbsm4Vny5DjuUP4bLntnHnjigRQYLyXmDEH",
  "key17": "5VTFwWPhGqzWYyh74puuudjfLtocSNSZQ9rmBLAA9cSHQQRRCCnJhz5RwKrdBt78oVcGUvGRZ2cAYS6drwqUKaXv",
  "key18": "3fdcF3jkRvucTE5FYENk7qMr66Swfu9avbXfdA8YqGJMwWR41ZJ5GU8mvrPPLf5e7N4KnG3egT27drHMTXHDnGp6",
  "key19": "5qbupD53aPS8HMb78MqyuYY9kQUffZiGoiomsr9XDipVTyJGR67EGGujLpv8X6RWwdtWFZ3gKc3hqVnCp3R5sm9s",
  "key20": "2HAjDoVfhNPY2jtNtpJvPWvzCYTvUwg7LR22ZEPVmZLq9gp86x7T1EsUpN2Xyz2oaCaeYc5FBwRMr23jo8dLf3JM",
  "key21": "3VBXNyotRhWRm9Jwznd3C93qWMYn9smWc6GERGQe4FgPen7UiW8Dh2eTKfEeGmKVpchV6JgCn7UieBMX53yZ2Q6W",
  "key22": "4JZMsDmY8VSvE4ox2Ar7hqCLLHiUth98CWa7ibaYAHBGAWhu5e9PJZeCiL2oDS36BME1bhsWQGMtTnN3fFL4FGsS",
  "key23": "67K6phkPQh1F8GavkfMQkP5hTNGH4PhM1voct3EJm4aC2CNRtQXiyLMdgtopbDxFZjHiGAEjKiT47E9hmSVpxLNL",
  "key24": "2NkJk7QhoKUW951yzMV5MQbkBarw8StfMGbzP7eWmNURtCfcgZkQC2KuPTWMBASkM1U8PMdpbX6MLhDwK5oEGR6q",
  "key25": "EEzN6ZHWPs8efnBWpFP9XsvHK3f84DeEWyZyTmWgDtVhyxQQ2zZ8ekUfBDm3Xe8egV8RpuB1MtjjFNpNwHKoDC3",
  "key26": "3GbKU5CEnxxs3RwVG6SXeJC3K2ZRxvoHu1FHF4NiLSMaxBnogUPDRCLoCTpuNgiYt3ARRfeqbCLYbzdrnkhGV32n",
  "key27": "3uo3pkpj2ZykKhmk3meVgxYD8jGkFE6dxeWDGGDJZALsnbo7EBHs96cbgpt2SHWijARTLE1wZ1vzF6rur1T2CBMx",
  "key28": "Mj93eB7QKB7Yw5yxf8nEMXgviLxoLv9bDMJo55dJEeqWJHquTyoYKJr89PeijQg3Tvrp2shFP1mPjAo5Nopa87Y",
  "key29": "5Wz8aprJnrCpCi9yaJejN8JEDB7AqoYVRrrhaYgtzJE7Rjb7yh21bpNSgkAvSgrVFdCyomizgfcQfmdSZLb6x2Wu",
  "key30": "2JbSE2RCQpYFmgRXFajZxfuR3hq9mSkjXc7rnqAWdzuVBg2TmvLp47mnZFTtHhEjZLnSFoZccmYBqss6LmD2Br2F"
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
