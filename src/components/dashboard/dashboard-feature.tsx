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
    "51ryodqBfvTKD3KYjBKACfMqVxWejAoRZfcCy7h67EyCQobMLD4dbQKBcxmKBTUaMReQJvAJY7tBZPWzJ6zY6n1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZatqUT4f4HrgWtJuL266LmHM3gKUUZjTjA64U3sVg6wQPDi5GXfZwHimiTt23j3c2Y4cP6zATBHCW3TyvgZtTU",
  "key1": "22NA6AASxSURieLzmHDVZHgHgMjFCw2UcgsCqVmTNmmmZQwRKSCCCo5hFnzBA9NNa7umc7SshTtKtb9w9kJnNmk5",
  "key2": "7jY525Zx9sep6JA4K5Bxp4RdmzEptqWACL3cjAPHYtwqe5wKsbBjMLQ1uawa4cLwMZYPxh8rWdXUemp1onV6yAQ",
  "key3": "3DX26TN4NPSpZ4XLxcmUfwvfMrGYSb1LwnM7bxvxqqA2tMT6i1PJngZVB2um79BREAfaeLHVCkLBtX6zqyB6HWw8",
  "key4": "5ZAA5wq2HX9dZ99wmud6AZhgU58fMPMepU6zYW5DLbAQyf6ZQtFh4eJixELAhpN7T6ostVchBqeb1qPR5txKosv2",
  "key5": "5Cws4we8RcsD3TFrwKbDBCyewdoCzmD96NE7kCWKYfjUaMpK7eP1Ft8LN8SKVTbQMfJJKksd9sTxMRrYtpiQmKVL",
  "key6": "4kV7oF3wGheqQUV6NURd1bDPx1N5pVsEpnmLuUBUrUzvQoAfRGPxco9GZmeyWjsP1vT2ZUjEs771FRvFW27qZyB2",
  "key7": "666AE1L7yTSCBPvXhy1NPFpNPqNaGvTqrLVHnghEe5rkGSnW4Lp4qViRQpVsQ7djSJyNNrHihBrF9skCFAsR87Hk",
  "key8": "4WL7frau19dYbnCdSLXjwA21mwU1No9UT8AidgDUzZvTAQCD1kDHxdPcDc5jUC9fph7zpcp7w6NBBANV5PwjS6yF",
  "key9": "2ANRwNdXb3V814yAVqDG9z2VyFtptiRPmdp2rCavqjpFHoS3ivBaLM5PZ1dDnuGfndA3BkFwNfg1wcSv5dViREiz",
  "key10": "3WtTsYYyoTRkCf949kQJvRqCnujApqFRF3oFqJsutTMWwyV7S4DKFAjTyxomR6Kor33nkTtVda7kiPaQfZQFNot5",
  "key11": "pX9aiRajYDGeZ7VaPYvE3rQ77Y7D55jePjoNR8s9BoATHgsb3S8Tb5UzJ5GrMvJHFoQY4quAeuTGq4FadKPw3HZ",
  "key12": "5U4Fn2A95FosAViQg5fWhicWYEUeiUTTERHoJwokUnVkcDycew6fEAwdxVQpX8HT3gguHSq1KE5w3fjkwVgUgkef",
  "key13": "2MEMoSStLxzkceyBGS7aS7BivdHPvMRpP7QRAhaGcv47AdaqGKtBPqUUBxv4vUStMdJEFZHiTiHYU3M8YuTr3cWi",
  "key14": "5eV8UsCa7g6uHQNKCuDBv82ZNHPDp5Y4eTH1iSpq6LJoCjit7bc4Pn7V6Q2b66nYUk1WAcPTnoPQZY7CtEffHR19",
  "key15": "3wG24vNDKNCu4S8KV9431kwhaySmHeVEmXtTtmdsddFkzcoJqXTgbTC4JUCyWBJmjQm62ZpC9Lz1CE9Vpbtv8q6n",
  "key16": "7uxZKQ3x2J5PqxhYi1N4DvnC3VVNM7To1f1W8UKWw3G8AspkcbEVZzZioRnDrMDW8TLEJV6KCgBcWxWfwSFGEUh",
  "key17": "5BBrqyBjxpggTLFxpbYZVR7Hkcvq4hPVmSHcUZ89bq4J8FNw5C3g1hGxXCyJLE9jvMZYGULmJN65BS65JAZhwJyZ",
  "key18": "5v1X8Hb48vCoxugsCRmDSaBskNcjXv8JKaZ6GB2rm4ddRrg8m4NRh3oK5TyBfGtMjEcJgjEGmJVpUVMjhy8W9AjG",
  "key19": "2HtcVKL4MUUMwJiFdDZkP78oNSq9iiaie3ArDnf4MqSr2B83U5LJY5qPHFhPwA41G3hagRvMyBs3NTEvypdSZZ7q",
  "key20": "3d2N6smbbaKpDfWqRb1ijTyiNpfXB93SrBRpKXVkUQ77moQkiocLJ9qqFTj7oePisQ41vAUg4LAscTuYSXDeg6zQ",
  "key21": "57MKMQf1Yb7Ueo9udawAPXuDXWCJSXXSfX74uFAPNbjSRKyQseHQYmThnvJqPRA8dF13KYQNkPbPMWaUT2uw7rDT",
  "key22": "4Un3h3AvJeF1KFz5RdcWMAaNXpzNUmWpB4pNwieWb8FLVbD1CRg2gajmngQ4kPTzTHmm9LXWavM8FiDmMBEwA7YT",
  "key23": "4vxpWbCDBHreDJLev6ZvKmKWgTEgfxqPYpo5eqi1yGxMs1htJxBgUpshkwNZMrMT7dsmeTSvdfpC8USiakb2f4uf",
  "key24": "3rskxioMuEoU4oL5pu4wgsR37jNtNWdLNpCJ4G4Mrum5kPMWtNyz7FNYfQetUmgon9gTevvwJhjATDeCf6VnYSzT",
  "key25": "2VAXoJ5JmPhEMe2KAVFZZsEjG2rRZ6ZuWT8fFf39pXRX3KxS5jEjPYNjZ7fEkrJbAVZpVmRtzo6M2Dn97YBdh3YT"
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
