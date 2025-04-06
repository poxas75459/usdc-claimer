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
    "3u8D6FnzEQ6WFKa5QTP6vGyLHdckyS216C5ZwR5z5iLyKMHpCDYppKpxHWZndzH6i7z1ZkV7KzjyeGYywM78uaeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V5FgkCxkfZQXAiHjQQYZmETNJ7CuvdM4fd5tqjtcLqVJyXTqhEiPB7X79n8UczVJ4vURgJjKtrUH8YATDRQjV8Z",
  "key1": "bDhhZi3BcjRx7VXS216PzcTBrL7vVmwWGMtRnE6MnCZpzmX4hhBK2rPXRajFRT1PVHzMJZJvGfweAkyMkSr9iQo",
  "key2": "8wLV3xzBXgEULhLc6UcBxKE7P82are84BAk38Wu6JuRoQgc7PQdpKu5iASqHrTifttu6ktaVdsg771P5LXwsokg",
  "key3": "xvhp27WXpwdBytpeTXTMwioqTLwZU4t1qnYYRwS9HaMBHJLEU8v7QPDtAEH4x17xytuMYDiDXcng7Yx4AT586rh",
  "key4": "3rfJBom8gxUWAcWokUE6QroAW6ZJU4FrZ6KgufvU8tGFFSaKKB6dbkdvwmV3UjEXLNvxcWoN7xZgNxeFg2kzSkTA",
  "key5": "ntxCNAqaYwf5LTqfSj5B5v2R7RPZEjaM2EVxPSFA5Ag4DWJdENhwJyFrW5gntb8AUzSEKJCwnNDKePszRepMPTh",
  "key6": "49stHUfR2mVSBsE8pnBLuCxcNkgyUhDMnDRef42zngP3iikdf6gSXx6wk7HfJxxeTd3qWKjTq1NM4KnCFmMjCCuC",
  "key7": "4VTnF3s56mZdPgbyMs1pkzPenqqEkZMLu1scSC5BvKkgziPqkZyRAE8ZoWwZiiV2BqBSqRD1zqpNyDuDxkzgtWN4",
  "key8": "4iSYpxAzx82vTUf86W2ewYAHhSXEBK2oy5CwriGKqs9mboRYDujhr33KoWBAMCy3f6X9X2UZeDb37u8N5HqXSrAd",
  "key9": "7CdJSNMa8EcNZW5HMU3eSgAXkwBpy6xHZDJ6urwDwfn857H9ZaAEiNvPScDND5mEpwuQwV1pr77B9zYNE3V6G3J",
  "key10": "4TZo48RZ64YDoUTiWuetXaArmrbDwfR25x6JSUHfWWAn5sYQsAYazNVEsiyzKxabV2JwNTmRrxEEHV2cKjygFQHp",
  "key11": "ivcAFhnxTAfWQZMrKF9JfLsa3QXBAMDF9L9mccrtb8xpogz19pdnDpzfKLnGeJPSrfgLE5AQ7UFSz7aEJBhNxf3",
  "key12": "2Sgo7FEQ1Caf4FDpYQxYj22oWPoN1k6ZffRoXpXpJv4cvk5HgjuimjpwafP2BAF4uHXNTpCeNF6PX3kVAnh8Ssf3",
  "key13": "TrLJhF3ShsvrWm6PGWcEBP77vGAKDojKis3mCVRGkr8YCpny6HhXuejP7F24ZzJoKPVUzpZrWbE3jd2qoXHaRo8",
  "key14": "5kTxPZ87jnjQ6cU2NGX7t4nCfGBpKmSHsdx99xhJD2ZEenZiuFcxGHXcHtRFv9KbQ4RD7HMDscj9ogbdFdJ9Mj19",
  "key15": "4CFsc4Fmuc7PHoYzcSPq6gWat7kgTD24mi4JicCuvKHwDA6YCdkPGGJTMHXmcBXxJzVGqpkR5qXGzi3kkPKrhFhX",
  "key16": "2o96phz7dXsx8LBY2Ju5wjq4yg58oCDei1j26oqpLu8UnFXYHfq2V5x9WefsiyVrzjNwmkNdtcU788CMpNvArgZ4",
  "key17": "Gge1eJQdMkeYEtStrL76LA3ezQzyGRdn4CjCGYxjYUymeCUoiQJ8TD5CsFq4DZ68wYQibJtSQFmS9vN383QfkKP",
  "key18": "48duPRBYm9t1SYciDiZdU12zGLkbvh7AzmEgZKsjYemacY82vhxAnYkXRBxJVwu47TjJxxNYWCXQtUDsHYpFTfYa",
  "key19": "3ZTWovSZCP2uauhmmNAQRNLnKKqutU8yZnH7782VcdCt8btR1XbH6YNasjhH9JdTbhtEaeCaUUHWMcYwCXsy987g",
  "key20": "2VxRG7aAitvkaKm6no3Yediz9kREe5xG2Peujm9r6XYHVWwZJKfjM4JaHn2pCViVz4s7Ho9ywkyL52L4bEtAjbgM",
  "key21": "2A5EXvmeoW5bHRbjeMCopYfvzy7SpehVcs6sp2J7ttykqPMQtL2pqTTezKyxwrpp7UKN9tpWK5b1bNNaM85LL7dW",
  "key22": "4DMG299ChG5RSyLqUAJ86PYfFPTm933VdvXsPyoDpSw5tU6DpDrTrFhMAkKrwG3RaYNLxXVd1h3XLCJYUPqahNTL",
  "key23": "56d27H3o5zQJAtxAJmw298Aspfr4ud3Qv8eoxT8Dhf4KWGx1oAZWRNnAyMhTzacZMgQMXHpShUzx4n2JTprm2PtY",
  "key24": "218XvWrxMndhJae7McYQ24dmYqP6UUq6LxmChTfQCmfSXYhVyRPr7qzEnSnvzUFJ97mmm91RqKm1GT8m5mGqfTH9",
  "key25": "4jWr1fmqURRYYJPFKj9RNATMaAiFpY3yZFnJ1CfPAD3jz4vmvGCYz9wWnDnoRSzn3JsBAZQerbJCiYcZSm8ZgxGH",
  "key26": "4R83fJ4PFJZJeCV9YKHsovDAcrQtr3Rpth37VHffKiqewCptMhcfZu65afKtaw1YYhNKKSPRfdbsvN9geJpz9gmp",
  "key27": "QCUkrcwncJXzPCB4SGetKSniu4pydWvWWeAeaGFLaPtH1c96i5qxCnEizK8KeZNEz8kaAnxpojEQQ9ZnoXeAADt",
  "key28": "BP3EC5xGVFJzoUDkFz62ye4gKBGaRUTRYyCQyC2EuTi8jybZp3ToZnMbBZSGaTkpFfDWE7KNyc1PsvugtgmAGz6",
  "key29": "5D33mm5K2bHznGhpJ9anTHEhBa5gArTf8eDYztkdD4msf1GeVYXHn17gEjensciwt29wsCxmvbA1woVjkbw8V26x",
  "key30": "GaZWBhzCF2piAakX6uTunBPfrwVquWFPjSFzaqfB9maWwGhr2scfCvwAvGyb6Dmjg8yeSkBy5vs1f5nFTJjpJVk"
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
