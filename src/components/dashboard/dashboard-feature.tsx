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
    "3DhFcgVb2uppTZg4XdtwXaHTqKBX2T1tKi4oodS25A5YTQNW2fPSMhdiCKbVob7jZMxsrhmDjs9ZFxEDkZf4EFFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLMvG3dn2PmgsFTYSLgtcnxbrtk231xdFqgfXgpDGtEiTNWCSd8ze5ZM7TfXT4r3VCdpnuEtCHGzswo45PvBJT",
  "key1": "2wE7dUFaK4zqr5WBkxm5qE37SdEopVBkG7u5ZRPvCjguKSXK5QEvxmdjw7xpdKMovbK3wUbRY4557dTGGkNA8cyt",
  "key2": "5cRXiJuqmQfHyw4oio7McUgkY2g67wumK3qhZCxuCF1qjuKSp2LDohevFV4HAc1M5dvRYautEjfme97tU64oUCWu",
  "key3": "5XxUF1GPq89VEp6Ynmm5JYbKvwSRuVNnWrBrx9AjZhCGb1y48BpXnQhhdCiAh3hai9o2J1XVLu7D8xk9AGrKi3Vk",
  "key4": "vUCDhUxTy7SGaJtWyjhzCLaFjB3eWtLsfAUdWgTx2QvSYWYQt7k9FXVPXMFoYWDPc95mrRte7iXULjVpJdmkK4V",
  "key5": "5DjshxLVG771CfiPHwG3w3pYn43czmMPPC9t6sE2KD4eeMyWGqXTifZshkQBNsKzv79B2vbeVM3csynMSmHyBcfu",
  "key6": "4XA8RHoN1qV9KZFiTJ7vLPyrL7rnQ7bKvrD2YAiMvjcmD13ZV5oRHgsnDcYc49J3h9Wxb3zZ2m8v1GgodzQX87H3",
  "key7": "HQ2G6PqeTqAEsqumwFm2qBVxES1HRFLE5hDdi2Cy32GpsjRuLuyPNDdjJkjdSyFtuDU3VVFFXFtTFTNf9rLQ1Sf",
  "key8": "2nJaAGQQYiaL8aDYnVGYPfDNWMCoQssuCCvLGq97zKU112FAXmeJi8Tz8yhu759aJzQfehV6yn9np7HorTfKKNPr",
  "key9": "66Ca9MCUnBepUwvQRhYsbryUaB7jWTiwDXficDfFUr786sU316vtEii3f3SiyADMEgfbC3UyzxhETZpXb4QkXibE",
  "key10": "5tZCZBZAU16ifJCUJa9bExANZpiJxhYRGSb1Jm6CL4n2gyymiXaYqSB4CzSMwnrTy7nbz7Brv6ot6z89FUzbLwsm",
  "key11": "2urMYsqNXhdeVAThVHSgeABwbZ7HLzLiG9T96rvYSTQKUVjEbn7YgedfuvkKPuL54qwreiNPiB375Nua2HaeFGEv",
  "key12": "32ajayykjRbT8UCrMUD1UdbYtD6Nsvec3hod4gX7B6vKEtieGqQXM45EFEp5ekaGovjfzT7eQF7cE4GefEoSVHY",
  "key13": "2o8BwQ15D7eRTWWUHDJZ994crYizz2epStDep6vumWWe98R5Vcs7PedQA1UuSXy1v1PRaz3eDXvujrYCMUHaxzx",
  "key14": "TGBSfJitDpJrvyVKCkHE8a1CwEFdLAiuaC5aUPLouZRiYt3QHmswG4nR51Ps1ngZVYgzEnhji8Crh86TTREcWkr",
  "key15": "4gEVjbF1r6c1Z6iPj9TFZUVG65BARCGVNzaijLGWNxD2gM66sKp9pmQvDiNAPpt9VvCDLAWHJNt71XYngArXfdg2",
  "key16": "5PFbMaRk4RkAYnSXkwHhAM681UHoSGT4zigjYtSPyaffBhMQi74yy5M5Z7X1u2Budmv4JbDzsgqYZpP9mpYa16p5",
  "key17": "2CJPZMm45a8HiFkNMpMdL8kppzSPga1TixDQQAEgHFXKVh9sRfhRH7cCCPsctaHzqKrhB3AaNfWrWukzeapGsk5y",
  "key18": "2Y2tSidJef8yq78GWabRnqAEgK2m8ggsXjUxexxtuDdV6jjkSoNZufUmNQWP3PPqYQJ3zRjQbcYfckpM3nesSTtv",
  "key19": "3oZyh6Eqn2Ki98qMC1JAt1cZ8jtjUNRUgAzgNmR71LHuCPVTz6MpgDWHZbJYuQ6fhHvpmy26Mdnbw5jQdhJMBiER",
  "key20": "581P49FTJtEwQz55q6aP3CqbkxFw6rKi3BDQd7uZhoHTPp1zqNFKvspbBJ3mZzAZPunRGFcPE2FEeiaJw7HU6ZXs",
  "key21": "VDHRRAWwp5LnXAsMcpTuhUSGonf3XpnmXjgeDyxwNtzqvtFd6hqofxSErTGJdUYdnvzKTPaJW9SCrX2GKtKUFd8",
  "key22": "2yk1AwF4VuBnEUKaDpx66wreMwfnjmWASnZaYAMLCQb2wSPk8QLibq4tD7mSNfGBhpq7nW4ukee8jM8kAHxXkPP3",
  "key23": "Bm8kXaawwbSLUtWqFqnnif1cCUVfH1KLBrsMC3UhEXVj4Z92m9v7cZgCkak4sgiCKiB5iS3VXsvoFm6wNuKzEZz",
  "key24": "625jfcDKrWQcKipdTxbZrSUA4HMuq63PLMHpaPUH565PLiANwpCWfpKr4eJkCTUNR8BCfdFzwX1Hw2pipuEm4r6y",
  "key25": "38fxn4HTWk9avhCjzASaUyypeng9cSCBa6Hj86KTYgucz4VYC7JkVyRWC8PGw6H2C9GkLxdUAx65Yzov8Ws9sMxS",
  "key26": "3YonaZAs5BuZgXHhPuygwJdxG8w6RNiPVjNKNnTLYR2S23Q9RUKCpXqPbtkvVkgFesR86hQeC6uagySRNQQv1WqT",
  "key27": "2QimHvNdb7zTTiSAf6P55eHwAmmSxp6DLGBD8jZeGiATc4Um77ShD2RBQrdDbs5WAL2sf2sBJ1jXmKEacnWmUGHn",
  "key28": "3mV3fhFyhMT6QEKjMn6Whf2tNenjMdNQtTFcLKZF42zvj7Eh1W1RzNrzNUPdrxFHxEXkVLETKxMxK8Y53VHGreFY",
  "key29": "3nUtdyTnpNEvBwhsDAsjiba8LEWme8Q3NijGUJzc3bgo7nZMTvL9MTo45S9gFZHCzthbhayAPMecvQyacfUj4fjj",
  "key30": "4d1GBHMiQgpRXrucNYH1Ti9LuM8ut7Tb2kKuiJw4znkf3waYG737jQHZP2av2w9Mm1H4Fu76CwxjQpK2w5exxtEw",
  "key31": "3erBrK5uKrfdabXYFhCMmdCwUkT5VdDJ9713Akyf8FqZmj38191WWX2pyxJh1WY37cVm3Zj7VK22fYfgpMNCqJgj"
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
