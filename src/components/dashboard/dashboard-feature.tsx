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
    "5iyC6192GKk27xz5dsAsx16dTG1BpRTgLN1P397r4wLsTeKsptXniW4iUr2r4P7k75GzjJmvN5ZmFTpuH5SmurwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDSqg5aM31ZUt1iaGDLHu6EifmgAytrzK7FqEg96Us7nJYxZJoz7mVLjuxqMFpUT1CQeFidVKyjuVb8tWpvHJX5",
  "key1": "62R8ocEPQAix4HVpNT5i2rRtAPAyetDhkqx1HiYhmsbMj4k3onqbyQVo1Xvvoc7MR1ECMySNLDTfTyA4nvLKsxD2",
  "key2": "38cWBzSN4WncubFKUZePj7daLtZbNA22EPb2p88iQoh7QPpnGekc48iNJEenN2bor7CaF2JbA6CY1QVfPvzutynj",
  "key3": "4sb5dG1Vzi5ePSZHp2Ks3vgoWj4y8i3nJ13eka1yV7VRR8j6vdFkMMAjf8zucZazSWCojARK7exMvpnNoXhX854p",
  "key4": "2WnM58i6XKsdMwE1Ecegzuh2LuLFEsZFAwXb84bw4GA7s3griCcmVTxBf5K4QsCLbYp6DXoBXnSqnsfJFzUMfzA5",
  "key5": "2rq7juRrRVL2JRV3SdqHGyqFUF4P9Q3sACNk2zAR53AsxtbD5YL2kM9zpou7Lq5p762ZqBhtxyzTAe5ZYJTDG2a7",
  "key6": "2ekmSTcC9FNmt16Ym7a3ZcuGYVeyBtxF8pQHfvQvhd6J8ZrjAWdF6WSXwEgHvGyK41XdHTytQ585GpTB1QA8YMJd",
  "key7": "4egmmYZVnLjg9QNmquFF8CwxEAtNmxmvZ53dam5wEJwnwdQbfzYPsfHp4vRYxQ1LjmfFnMptUDygjC9uzkZBSKG4",
  "key8": "4uCaDUbGq9yupwie6HLGpHae3J47bKUo4KRoc88UgwvSdhKbMULC1G4NhY9KK4mJXs1MMEHZt581Lhp1VcR49q4e",
  "key9": "2uPTks8QVbbNbw62qd6K4wGxmsLPUysQD9sw9TS8T55DHAqUJdZxSctYGBEPxnBJSiMbKRkuDgm2P8cikJdq2tJh",
  "key10": "4gbkSCpa1fqYahaAUUqJ2NV2AcdwdGhy5A6wthDGNyDBbLmiSwVsCGdMyV3d31riSLaRZpux5qy892f3L4G2oHi1",
  "key11": "3CgaAN1jurqLuBUjGpAsEkSYDA3xazL2qfTRW7UCkuX4FxxUn3RYTd6Tbc8kWoG1FDUqSn3zAYQQ9TkH9vkRR5Bp",
  "key12": "4ZjAFgwKCVx2HUcA6Ujzxjrciibsd529wALBZ1d1ZQxBKJtA6ED32jWDd924H996ZDd6gmBcVg3bQyaRYYZQA6hg",
  "key13": "2S4FRBuUAdqbrxkfZyGXmBn1HbMekUvVM42bSWQRfTCqYMPWtxLozH8jeGuQcK8vGxpvTzD6XoY8XQB9v217rvNr",
  "key14": "4ChUpyfvANQJdFBALbzivMVmqKqrY3QnfybffkTXVzSwMiFCm9HiUVkXe5ygZeoF6fTaAwAM3V9rFDGcUgrs7esw",
  "key15": "64MGLq6qT8p6hBFnJD6anxy8JkqY3sBeXVwjYmLWUtDArD53HZnbP4TpfuvKJDp6TXi7iNRHo3DspoUfR6S52N9k",
  "key16": "45JH3KMZxsNuTtJTfEhoG7KvbWkboEqXqqb6iSAE2LuFEanS7eehLc7gZETSafhN322S3V6WtS2Bu7VbHZ7UUaHS",
  "key17": "5Cxv8x9YURe5YLk5yVWRbQ4xiByZdZk1g7NQipJxjtxhU8iBehwTHpJskNzhruc2op8B9y2Jx9AmFMjTdiuBMMb2",
  "key18": "3E9TQ8UMXE8XS3Lkcrx14KN5JYsHQ5uneV3W5UjmmWDF7yxMS1D7wCXu9RjWQsSQasJ3XRixtpMCybhnTRaWPkdT",
  "key19": "5WEenC5b98a9sM4SZCqQUSXbMQ8XBmsqRZeB41cB9Sv1zf4ik7VMqGqttu7Z9UifeUvgs7KmEeMLgRjytq3tbzaV",
  "key20": "4uRhA2ckUVj4Twfzd9UwXVPdvdmggCdaFJKsEXTqo25htrP2z2gDYJewgWSoKndfYiBhvdV9MkLh7bwhXeTikCAS",
  "key21": "2ArZXHubN2nXxLHbTAYefhqGNsZvczbLp6EHa7Yj84r1cfy4ZTGbSR8Yq3enTo9wWvy5RyuzyeXxS1xMzsYxJTaF",
  "key22": "5yXonwVqpLkDmqu9TY9z8feKc967rVS69XAXVq2fsf6cQYrwjZ2JdMKevGAHaF67gM9zxg8QM673ePm8iPuRGLP9",
  "key23": "4TZMM8z3FH3y2VhaJq4jqufEJBy2Nhjp269mzqsWBgnWwB8LBXFR1vU4m9JXHB1z3FSnLbBxLNypUApK8iwZJW9J",
  "key24": "2nPSebGMUrjmpqTnftqaQVhbaT2A6qq26Ubg7VuYfCUZx1Ccpdi219DzU5NRWDT61MS4j6CPevTr3QA7GuYnmzrg",
  "key25": "j4uX4Pp727eiEGwrazzWHvYQkgX9cjtxE8mkn7ZGkjSj9VkYaGjz646b9bxbnb31ccQ2Qeu5bz4bb7CZ7M1URJ7",
  "key26": "5x5gKW9VGnhpXSVphXodk7uLDUDrSyvtoez9dd1gZfrmroe9i55QJHJu7irH6AvU259ZXJmoHiuhseEMrHvAc6Tv",
  "key27": "TEbgJJQPpfCnWoXCA9NEfzukKsFoePDPJs4U2KG6NFmvEPT3RT9Sgq1awC71eDeAPHi1hEwtwVfG64js9Z4adwp",
  "key28": "JUVt7zgrKTvVxtt6V1sze2gxyo7MFsCTWt4X2sXp7i8Cqnc2MoJ4EC7ZkbKB42hgmBuNmYs85EHna1G2uDoq5vm"
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
