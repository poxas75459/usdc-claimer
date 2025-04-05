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
    "h5SYHTrtmY7s82px4hds8A7yHHKzHrUkxYXnHTtuCYjQMuazwJYz3biW1ZnL4fyuPo9eCYzfRnGYLZeLhMZPC4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eu3gVeydvEiahTCoiHC1nWrE9hFyRBkw4fRW7WfsTaDbPFoz4KKtFzfyaX1qoGXUULXEorFoZFUWTkTXjtdv4qY",
  "key1": "26nz2UeX6Z3choQ163ptGbjG3NWyctj6A661G96PhFdXZ1XiXApeoFXY7oxHH9eAuvtFqNY6ExqR13PDt3nMCuWu",
  "key2": "WVKtS5yBFEUfmLFhxrhsYxox9a1t1n6mBK3qyyBGcnj6qTg4WGNTagcdNz5eLvq1kaVwDMYKbjqvrR4YnB698kK",
  "key3": "2vY2MNNuxPsDEBNcQXAbMeDZoh98KQYHQ3yoBjNsaQM9E9AqR6zuurRQBP42uNsGWL73qNyGNxSdAitUYt7RKPt",
  "key4": "4yrsS2EfsE1QFQkSeJRb6awj7ZUuGA6qjaGsuw4mqzpn5QaoUR5DVDFpyJ9xxTkMR8Pa8nFsbDEengxELFi4SJek",
  "key5": "21CakqiiZn1cSsi5s5TiQm8QnALxku7wnnAYqWPuYrJR5FWnRfp8tCwAnxmM7QDfziGB1eSpchbgvY4ZFeZoLd17",
  "key6": "35NLuUz8ex2kbnnDfEiwfFZD6EHUycQjkfpY6cvXStU5CucE3sY578tEJnKYKt38mgAypBQnhoCjs6cCQanFvbav",
  "key7": "3rDNbWDgRwoFypBDpeHyKkSta6DdbWJvLcM14xELMXrAz5UbS6C5FAbDPhUaVCAUiftSZuTshD1musAAdFUAgeVh",
  "key8": "4f8xySW2YFWgKQcVFYPbhc5GvDpahGBpJgpqWXQjFcpqaSExpcqZJa2M3wpkM8wihKpg8xtVwEtktBbBaRUfqdyA",
  "key9": "d96P6oFdVh5fV5DhzKwzgyi63nK6kEsSHnL7MiGYhhTth4bstt8zcGbbGfV4uDA12YcuZkQZsBV58EtmiZF6j3Z",
  "key10": "3aJPukWLqSkw9VepBv3ELGVZDe3o4mGsbwc4kayLQ4Eqx8qM8qonpQfEpAuN2qaMD6XqaxKpRZPCFgpqaczX4hsi",
  "key11": "22C539pMiuAtnspuZ9AK6G1tppsTJAhykyRre6279AsPD2Gu5VkYKKJ8L4h9b7QEhrj8P4Lmq3VHY9qLNZMJA1FQ",
  "key12": "4Gz6E51qUZhcd2n9EmgvM6CNYxRge1YQZ5LeZT6cx8yumgEqZ3s2ynZdJrdabskv3oWR1hsQmwghJxzUBiGU3QAp",
  "key13": "4nLsfNF5YEVbRqFFcxC9HR6NtTCxVLJ2nc5nc7A699eh2eBfiuJp3yYNSZBRgxAuXZAPSu5dTdGibFLBpJcLi9ZN",
  "key14": "itqt8qFJ7SitRYRCW4KtbRehSN41h148dGR5WJRxcjcy4wnASRKYH2eHuNeN95dthkfVsrScJjAWyMhDmZntPiT",
  "key15": "2BQyifoAkVeZ7KbguqmZZri1nduEGQQbJy6dCfDZDzdVPr5WZf73Qt6N4P6BsA6MEoHgUzVkgujVDbi745LUJwrG",
  "key16": "5mr2JbamERPqMcMwxqEKpkt4Z1Yvp4MdC6QQY56jDWMA2zXVUe7n6YdoCG3u6ZxR3hV1PzvbtixQaFcpPsQpkE8Y",
  "key17": "5CaYF7zez227v2PNb4UBFzSfEghnPG374Poie68ADEwLnXN4PXA5TJZ63tkFGC5dkaPwHXGTeoiMiF8yktuUgoER",
  "key18": "AKhgTaqurnpuGq2VwmFWypS8Moc56UWGfGQqWQaZxqt7C1BWf2P3URE22o6tG446GcMZX2dTPpaUGEvvyjxN26d",
  "key19": "2cHpUwrf5N8v6iCkVo8qeSSMs48avXLg7EspfMafLFSTwF1jv4KM17GNZR4WeosjrexCsVnWkvkXCy6sZG5RsCNF",
  "key20": "3EX51BRYHEbk9q6xsmgh1pMnrGHWq7PtWPbqAsGxXASVtiUBrHVWeWvyT1Kfr82xWS9nD1Za9KZ8Tc4riTwup59Y",
  "key21": "5kXiHYns1EeTkBAheZtotdZysMuszLUez3CbSvWXVBsSvdN63scnCkyYGgQu2keYdBMMiowSxAbcWizBSXthXBtV",
  "key22": "48reYqQAQWCSz92WmdEBV4HvJmG93wbuT3xYo5ioS2Ve4KmAZNHyKaHBqGvGAJjg387niKuMgNx2FR4AzGAWmAtb",
  "key23": "BGNGwARkvNaVPaa8Yva628x8KFaonK8fT5r2gvndYm33P9KYiHn47C3E9YQ8opztYNgbaBdw2XQ3azAd6tEDq5S",
  "key24": "5WFCCZ1wkFaQUSUU6DaLgDM9YUCAYuf6StiiUAC1NiPShuFDaVwLjNSEDVC2chWZH3dk6JgZ9GRHKHnXQqLVgR7p",
  "key25": "4LtozChrShToX1ZGW82Egv86ZBJr3htA8E1tqo8GyK8b4KAymsPD9QyUWX64XbtPRBGCkNTPrECnjsLkaSFwegws",
  "key26": "iXwyoL7MGTb4nPqykbYSyBTazmTamrrPtkdkLyb4XRPmnTX65RLVLKFbwf2Rn6MQ9jhWvKVExoWxv4we1B28Uy9",
  "key27": "5fKTnwCuu6TQgvbEwHqzqxiz647bjP83thwuQzTJiSphpPR36iPpvYfdvB5GY9gLX4xWLH2zKL3CTxvAzv9zCHR5",
  "key28": "ri8B9uRFKqGAsErhXBagZyUqfvW7a2qvRoxx48wLFz6hRDXptsGdWB8MtznkqZH4hbwwZVqdgy1fDwjnr26B1yz",
  "key29": "J7dcRyYSVP4wpfrsuceR9BKx6gd59mURKDLi9cDBfqrL447eAn7CRVLRDfeYcMaAmFyr3Lh1gsVJA3bYqnTgriR",
  "key30": "2RfRWKLgSfQdJDYnGC32kjnTkpwDGemFgVX7gE8hTPud9BC7frRAACEYphYxxjoUDkgGWE2ceQRmEWVfJf8CNdGq"
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
