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
    "22azH1rhCvJ1dETBzkXZmy5jkpddW2KbGvbYfXNfJfssHR78Spisr5HJvUwJ7NcrTj4ZpHRbjHHXNMKXFmaoh1Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zi8iKWd3pMe8i5bFoWjJRDfUKorW5rBaFhsQ38WwkZnPg5zHb8zarz89rUat8Z1CvGaDDkTTbr1F3xUmCiLuWc7",
  "key1": "2tfYHhJdXZ3NRVJwNCcub5nE3QcV5S3nCYFjHroWtnKsuFgbyPqKYthuBQBFEcXDb9BZMrdshxbgxPXkwiWBEriZ",
  "key2": "4BXKCHATUs4LATyZeqEYuPMcKQHi1vR2S82xVvLBMDck1avW4rxhN17axL1RMUnKyhsVthzCfCgGMz6cwd6Xacp2",
  "key3": "3XNknmDveYXkyr6GqHH2E3X8q8uiKWPEpCM3qnibqfsT3SsfWALGx6eQQ9oPWn7nBc213uL1N8s7rJBiT8vAEjuM",
  "key4": "5SYaaGAWxbDJWEnmkU4nYhFiRsdjn8WeMc8CaTcz5qn1MZZQXRVtZPGH76p6PF9c4ayf3zpJx8eG1AveZ8GCuMrW",
  "key5": "2Zp8CaATfVKGdCF7PBP7qUiHiVXQ2HqkC51WZy7gPAAjUEvZbZmYmZBZHqk5CRTDsRwGP8nSVBaPevVp5Wr34pVu",
  "key6": "e4px5giV8FMpKT2MbaKeger9dNvuJHpLzh7draM48gStvqfezHL3thrbruNmj252tT4icYrkBCuNs6AQKqzYea7",
  "key7": "42rVGpkKywhWAo6eJReuAjuhGVp9LP7UvjXzC3vmSyBc7Uwh47V4wEebnCvswu1EEMxsndQsSsk4gUNKH21GVzbw",
  "key8": "vKL37dT7P7pUcDDciExsLZ52Zm2mEzKouopNn8giFVrLuf82STxZeiKb4QGB3XFus3CoxGQ2gDvS4HZESNREzJR",
  "key9": "3tt7DdTFyQhdpXjWWydX1kTsci9Hg2tTGSDbGhJCPiYGQF5okvYhUWs1Jq82YijhgdRdCwycBNqVLJ6j3xwYx9qZ",
  "key10": "26S4ynDaPV8PhHScM1XsM6GryT39W7NhysaCh8zHevkB3LSpLY6dNTtFPGsGW18CVZhmpvPuFcbUiRt9f4SGGmp3",
  "key11": "2csUSHXwVBnWH3cmv5Rx82CsKVZiLNfjmK5MkNXWixMMj44ChYxx31n5ozbWtL2cCHK4tnuqKyyqk5hA4jZL8TK9",
  "key12": "52gvyjYFE3BiKZLfg8H8oKAMxm7hcsUtPzr39Z1sEiQuE2GXiw7Rp4yQ7WcAphkqhF3i68HEvrMW5toUjT8jo5wz",
  "key13": "gLgUgtDWvAwmUc4zZ7DypdkRX8tsk9VANRgipfzMa4Es8EtF5bnK8vCcVz9xjGae9MNu9o1qCEq6vnE347htJuq",
  "key14": "2wtBDCKgmHW1pY4bTNEgpaGnyFgLakAHTbCQgcrpxGUziXEyP37gAJgq9TuKj3oePcEJBJTPbgrhbZgFnsRJZFwC",
  "key15": "31DBfiXJoYcRKTp2XsnUT6yDtqmxDb7X8GjF3yihfHVxWSHGFgiv6Uwaed8qE9mYaWD8cmWH7rftPMepfVzKoLo5",
  "key16": "2arJhntjXdJCdoeZsU4qBrKVpTfuQ5VCsXAUxWRd3HqptiAKEQRqh6UzkbkJXNbNsme63sppRcbXPyJoynUTccEc",
  "key17": "495jGQgZ7pUCHF8DgjwWNn3HhvScVXbxDjvR4R3GgDZHKgDvVkrUwWgDEcJtVmRfZLF6Xs78J3peQr6ZXtGgdWtC",
  "key18": "5yn1ueojR5iZKVqW5Xw7wrF9mJRTe1wwjaGfW6pjqL5kPbHxgRrVFRxmQV7J4kJm5N4ZqdcsA5unyQsjeWJhJoeF",
  "key19": "2s2HPB7xwz5FqiHd4RSdBaYrWvcPkwmpyUWiTXCpXNZNDfUi2jrkCu8rufCaFfssoTLLgrBuWheJViLpn5ZRhYuG",
  "key20": "5adNkG2TLyTrFZKNVF2ZLDDcjGVq6S6epayPSvLubibvar5p5wburaZrNU5Vcm74c3oNxkCqiJMU23mn1mztDrMz",
  "key21": "541FH8FuVKjYKKUwsWp5iuoAbFHpctKxVZyrknr2ZoLgaQGed4tjK2YDEDCQemx4uAvMtjW1QZ4WkkHjXFBYh9S6",
  "key22": "3oBceUpVTVji4CoWYyKoXwNyXffhx697ZgsoQ8GKQYQ9RmXmC4Uwg6sWaPxQhMht1MPP6V36vHcGh5WPfjH7fddM",
  "key23": "25oNo1rXpSKWyANwRVkCXoswiMKvMQLVFeJPk6eF3ZS7hitndWgDCeiLe8QADDTkpfUMdWqRKx5iNdwXjdKbdSZZ",
  "key24": "t2K7N2tBLwKpHYveaXEMJP3oFciSp521uqYWEe2Q8R6dC5Ac4YwdcUpJuPNpJnpbxxefMBpzmFJLcCRWFZwf4As",
  "key25": "2T62z7oq9sMLuCwiT42V9DvXiR884cdwkFUDomf5cTKskZ644DfpLU1xhb5YqiLqCdmdei9dtzJPVWCqn3LkMLH5",
  "key26": "5U4meck4hDNy4PbNDhYtvTL3epeWs1LSuV55EVNUwtJrYbjPPmqyomB3fsQbdJyPqGmRU5PHuW7Bc5F87H8sXudN",
  "key27": "3hCFfMWspdbKkXhsGipguXzY8SkqTMK5ye4mJt5PsFuAh1GEZtfXmaJWMifn5MiequgUEaiGEKYjpMjSiNiFw5KX",
  "key28": "29LZt9hZZVvJaqhstTGtmRtj15JqVyaBnSNfsp25mif2rbSXWq3ygQbfZqEpJwg1LfackzVfQ9fBFnvAh8cpvVND"
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
