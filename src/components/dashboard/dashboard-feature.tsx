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
    "brTabFAi2VJSwL73BcVin3suRuai4jzioYmuYkLFAPrEXc1nkXjHrYvgzyQQx9kjbyyjjFhsDREgHtejoLLcyEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBJpSi1pddrnpVAxeVZcD1k2uW7pHpMwEDgm3AvgLMY9qsMhzn9a5nmNZjztfuZBzjmQKYtb5NZeEVLMJiiagmU",
  "key1": "3E2PbumJ6oYiUinRRRNA6hTZNZVZtfyScivRZFifZeakKc4dGmg9Cu1kYjpRfVLCq5njrY2UwYNrjoVJdjXudFEX",
  "key2": "417UvGhB7hL3Gai9e71vdgtZf3D2wp9toscCspxwZBEG5MR8586BWw3FJZ4DTyzVSnosQTFGoF6yh8RHUBVDPE3N",
  "key3": "2YjvwZQQXoEdByzYQXPG2HphGvGuBRtVCpBqMTWQE7oq7Db3JiKiNuhgz7r12idaGC9T2uxhirKws3c2NVPF1wZP",
  "key4": "5urYLQFo6Ek1VCuvjXfE8T6XQXS6oTWEYqQFr8a3v6fdYfo4g4SUdb7bTDrQTAHWEEwKZxbx3hiCoHqLx6dQNmvZ",
  "key5": "4XDn2cFMTgau7PqRcxM1vbVpTqUi8AJ7UqEG7T8yZfVcTqFBtgjYgSDyPiLkS9w4r6XMbWrXb3tZPa4McWoNBePW",
  "key6": "3LPL9ENuFnXdPu9S62FmScexiUP5cWtJd5RytefsrtAsh2ysy28e8Kirnvq6kjwmXQvPmmNc1BbgHUsBnkU3wsMK",
  "key7": "FQmtFpaDAMvtNJK5vzcrUKq54PEbWUrpZGicEQdRHNTdhao7Y4RrB9eHWBpkgGyRFVSrLKtJm5pm7ZC5wfMXvrv",
  "key8": "KSC62EpKDBTFUf6CC98CbYCk6N1sdnofSkTxtfsSWjLfCP2aVmRyKytA5hyiLUWti9dPiDS8FohRYqMF4a4TQnf",
  "key9": "4X3JhuoAb5LaHLMhR9M8CY8FQpJh23VK336W9gKd1vUR8MqnP2uV51MgoeaLb3fosDFqGzSiVTyauxFv7Sv68eTs",
  "key10": "4GcTFKrBC43aQhPezTcKvoEuYb65qFowJyucHFGxEma4ozKKv5tDVowKos4sw3r2aVzfKsJC23Pg5bvX9LRTnNMg",
  "key11": "5ygoHGz3LfQ7xmdgFX8BG3NYGboTBEwhKgEumAkCACapum9tTKjcv2VDL6JLT3gAJGV1ZvpbSE8HBdNgtSDhKxLx",
  "key12": "3rWDXK52VHi4UFA6ncyz7f1zif1JHAyPqF2y8fzbCi4oh2yMDjZapdKBQvtGJhWwvsun1aW9WB3w8vZoUK5p8HjY",
  "key13": "2tpcqHJRuJ6APnREHCK76BzYAQ6NbuamH8VqbjgZyJCofrUDawG4euo9rmpo9nRLzV67c51tMubcZKuWaqgu1nBo",
  "key14": "26xsp7JDs3LeJTZTKJdDR3GfnKa2NmDYfKDR2fhhwg4FTiJ8NUsvcoiEDxZaPNoEqhBCjpuH1Ktizjp9FzefUr3A",
  "key15": "3L95HRGUCv4qYppPMvcKYz4SNX5YMAS7KEKP1nFv2W9GfWzZS4vbpEHJyAJtcDeEWvo3Pnbdnfe2CDnbVGmEbi9q",
  "key16": "4VbY3ErtUks7k79ijoyUnNurZrAhMTSnG7nR1daNkMajJmono5w5wQr6sKeSYFMRVeAxDHaRR3YGQBKuWKpAR72a",
  "key17": "3ThUt3wSa5t7mnYqUZaGVHZFfUzAQQYiV4Sz8HQBC4aF7wPUUYyV7euFY9QAG3maELWSu3ZiaG2oiGJqiLYSeb32",
  "key18": "54stxcd2hoTU1orgKaupmB3zN2dhrWP1yBXdaddh6L9McjDxRMzS1d8DTMTu5Q8fBUVPbNT13Dn2PhSTUS3sUD2z",
  "key19": "4THf4oTKH9pGZ2o8Ue2g2uAi6d969Z6A5dUrhGoPa7GZR4vnxePgXfRsb4tis97hYGQrrx766MipSigK3VCTaDWQ",
  "key20": "5epcqkxFPkNWEkjfVfaW51eEJndSmv5XQMPS8Sax5WoZ3HUcBDg19zsBCzRXLTwB4EeWwZnyGAQzpHq2UKXpNSXo",
  "key21": "4e9mFJyGsA53SQKcCAwVMbAh5auzJjGFhGABDroZinJRhuWFYGNNoEhRbXc3pSUkpZCnm9EoPgZGgaN8JJxzWpA1",
  "key22": "5f8TwwW22hbj97wU1ASFCN3Vq6zgBm83CtTfVxK1CtKjTbNbuURnxZcZ9aNF89hrgijrSj7PgrzJ3HGKgU4anXCK",
  "key23": "3XSxAHc5TgnLjoJgMRNMXkQYNp8tWv5Vp7KeYqGaC6tETqCiuAh2qnJQ4iYvKM54sQZpsSTepTWhR2gWgV4kLNg6",
  "key24": "2KCJiG4FH8nrXW4xpXaE6xdqq66qhDqQdSjZB1sfZhGjMrB7kbU6JncnuGKhJ5HveXcaFmWTrDbuDSix4yWwheu8",
  "key25": "vxfqo1dajCghKmEzkAu1qbAtxMcTKAFuXLcCR9eFsG3z8XTmSgawp44o9MNqVqsTCr48kMzpQeLZrNVutCpK1RF",
  "key26": "5ijzMbvW8P22Ca5MomnGYxA1nx1HPCPGENHuabLzyFY8qCFK6iMyd2KF582fSxJyp5bu9BXrmX4NpZG3i8vkDvr7",
  "key27": "2PWLPBwgjcUowqmtyzDRBLW4vVWnQc8rpy1ebTVgiLFxSbmQ5DquFE6deBmccpnbqRXE2ERtozwvCSkhRnDDaB42",
  "key28": "4PDqSD3umgsJiLQbqQMKKA6ZvUVQHmSRs7vyS37Ha25GvRmgDKLMZZYpTDtt8FRvkGyt94W2Xy5ATtGdQZn2H9hD",
  "key29": "2FRVydcHCK3NtNGpK7VAJ6vNQ2kz7yRcTYYukEwF1U2mXwyYyh3TVHZUpaEhJ39LHWnM8DNjyGv5ppSPKzvG5EbW"
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
