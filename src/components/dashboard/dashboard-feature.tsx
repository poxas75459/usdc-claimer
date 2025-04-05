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
    "2pRR3JxiUFfQ4LFkWzqjhoBUfbrCEdxDuuSP6LE9KjcYf4LvkvfCKwNTCHfTX12zM4P6gf5Mqznk4vfZbBZPDpKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HZrWy27taMkVHsxMfhAegGT2tWA9XrUkH9DLxZ7rWhXcVPKqpg9pPZDgSqHNTrk5fNbeNwsV6oYXpe9D2Pm7xXM",
  "key1": "4E7hpxgcsGn4wFrzpM2VsyyM4RNmDis7t6GKko94gKySfF4ZLr2uBwRYJizzQzt5a2Fq4A8HrsL7Rx3HoirXD1xP",
  "key2": "5bwTEEfNPwiVtrXYjv12hooDi4uFPZCPNNgE8LBUY8XKU3KFvNJjh68SXoHpusFXmt3m4mdKX76rdPxVg2bXtPoU",
  "key3": "4N76thqjPwvb1yG9JiFQcsZk5uG5UVNp2Nhkgty1918ZFcZwHFgNZiznGNNqUaD3M2vB6yAPHDjgv6ZHz258FDem",
  "key4": "x2VhuucCEAkyfyf3ySdTxbF1BfWmXw66G5Vueg8b4Z5hCU8jo7RGirnqtjrH12qmPVLQZuEmxFV5ZNs6MovmUq6",
  "key5": "2ua7XPdfoQdctYmsJdCvp1BZyc43NPjsxyAFxY9XRWY7EaDdPwqNy3kaU5tmkJvur4dNCvn6MYQ8qgsk5FVAMtV7",
  "key6": "NkKPF4URbJKoHjpr4pvsARVjFRpeA5wwjuRrFXHQy6LjgUuh3oH63qyqdERisNmUKcmDMfWAxNatjh92DBHaQEF",
  "key7": "3K26LzrQgMfyZBHqGYJouPGpSvdzZGTmBaksGZL1jgRsmcVCyKqfD9jLycggXp1kwdfnGNWugftBKbWxHjAtN3ro",
  "key8": "4UfqVRKGVhPZFHToS7Y59Lmr1DiQcWwSwaPzMnVAZePd1hbM1zbmFX5QGZGJNLszYJiYXKa3emvnDpCM4r1FCen7",
  "key9": "9dmjZFjGZKUR5BKxkRnTzVzUwLMpF7KYJWdi8Ld6g1bSJxzsWVS6BWwx79f9YQ9piZ7u13FuM1skY1EHuzNVwQX",
  "key10": "3aDftiaZCyT5o6KUfA4U4aMKaxRgWWmp2qf2HEdoKJ3cnXRuJ9BczGJpHM8AMGjgPDJcfpccKAfs42L2Rg8oHfa6",
  "key11": "4H8KKQ8vTgr42NsUgsK7Dnca7yfQXanZtwh8CwD6SG2tXDLfKZd7Hfxhzwy4BnND2UpQPhFMEWG2FYpkwdSGTtuX",
  "key12": "4BkLdvqXaxndcW4vZ38GrysDrgMhBno9GK868AVJzu5gkDWT9ztq2LSp1aMTJhgTBEPP59C9YZJRRSHAxY3yTSrm",
  "key13": "4aaWPFHE7Hs6ze7cQcDh6ywtCwMEHrEPUcVTWmy1AGabNivyEehyCBawZCP91wSk41xwLQrndhcqBAWrED3WM4TJ",
  "key14": "RggCAUHyynjA45D8AzKysswbvSXVRLHPbBGEqL8JHTaTmtj75hN5KaCACoPu5pe1gtnPqktg1W2VNQFtPVMoz2R",
  "key15": "V2S1Y8tGJ1LJdzFUmJK6o5eKSB6odabTu1nh5xyj2oQF8QgJdAnYpP6RRrb6poL8HGb8HtpuaY4cAujee7zcshf",
  "key16": "4bG4ekgnY4bpYwjcD8Uuge7zpGQCX1C5t29Wr8BKdRsTrwUB2VR7mUMrwP9pSD8JU5h6ZkXtGBBfBk4D5Ed28Uvg",
  "key17": "4RPaMqudr6G9ZGN8iZ4T3edjbzJgVvk9kCCPtDYkV96gNwEK8pxRKujuhAuQYXX64L8f4FoJu5TE7u7xrMNtnMUJ",
  "key18": "2a6npLfhXpWBBSDSggeFz6k7EzjG8YrKt1uP6zmGMcs3QHXGCcppdEucHjixnqmB4YriTwDQjGE33jiBfUxatkVL",
  "key19": "2UgurfBz1fhqJK2aqdzQ3UUiZmusR431FV7gvyUSfS9kMCfAviEaSnzVpd7BqVAfi64ZW1NMVeSwNJEwt5A71rkW",
  "key20": "2rFjFNMBcrMg6CG4v879vh4QYMud3LFXL2kmeW4D6ZVeSpT99cueeT6LZc5ngkzyDQeBpTeouvh58qKeUg4wShfA",
  "key21": "yqmaia23tHTKAC7Q9nfbRL5Q7op2B94zJqMBUBN8xar36CchPX4ci7rrFsoQgLjUz3WoyuLvWmH6QeWUSh4J8VQ",
  "key22": "3KivzEmUZoAU2EAtEyLuUQJZ4XD7rxqhZVxEvKiuQ7X3jGkJrJccWJGvmcm62Uskxuj6biJcWEi8ZTr5iuEy6xuS",
  "key23": "5w9VsttigbqGm9bBB5DmaUognSeemANsst19E5iK1Er64EPBMbdZd1JFu2DKcK2z3NEYtQSkbdiRF57eREGJsaXV",
  "key24": "64RgZTtys4oxD7Y5gcfm56aMbU19VBiGfYrdMeGaoQ7deTq9w2CzCpXxQ7YngGM6P4eLLdwHJWg2LaC8zTwPoEN1",
  "key25": "3V2udEynkRbccJ2xSiJhC3hcWHRqzcvUbwX2ogbcGKkk7FjmEbtJRRoHFxqwaTbZn2mP47yhKzTcoEorDPxAGYeb",
  "key26": "2GD4jgSLnGZKFDwaYWQQrLx6TgmixVeJJwo2vFEQ4GyZmEsKtxFy2rTTnwrS9kA3MxGcswnM5y5psiTtyQ7SxnQ4",
  "key27": "5pHwRSxsgzhGKCUEmjiAD3u3FHDEREf7ibTtU4gNJKCpfpsopQmmuGBnRumUNj7HmkKHYBztNx6yf637mtquDvUL",
  "key28": "w5n3yCjFJb9Q4xJogwpaN1URcU6d9a9C65huYpQgVfUVwN21y86HemE8kyVHuHon866fjDj5AcMnKBtLnrRrhrb",
  "key29": "54Df1qKy631yKHAC4NNz2cWwcUQTi7fatQvTm1J589sRD3bnmGj6U89Sm2tpAKEMhg6KZtZHq3AC5JYcFxxKGitj",
  "key30": "654xxsBoyFK8hxF3eEqayBxnzvbHGmqMFTngKbRDiGTRF3SakWi8kScFoZ818fqMp4M6LK8untURi4MU3QQXND2X",
  "key31": "2Bn7fCLHsJZE6qeNbXK9d89yUKkRPQtpuNDeYx8ebYwFCnbUUHEu7nVf8E81Js4q4wyg4t3Fwc1F52B8c2CbwssJ"
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
