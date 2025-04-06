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
    "21UQ8iMPqZcZ3qvYGitfUDHFk6gF2utbQMKo4rqLSuiUTidvbXtdueNbZRyQZtS9AcZY8VfcAd6CnpHVG54jYuxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ysm45Y93nbi2ucFymiQLvUgFf74LXVP8qJ6iiNrWa2mF8myE3RRNQCAthZihNBxadnnfLPJu3hyWhx6x6sNbTR",
  "key1": "2NNNDzthYLhc4oVReTjj7oPkgbyJhJxq77uw5SNZV4eukY2LSqiaZw1EGwKBHwPxrqJ6iB8szmiHoPTvuE5rj1rA",
  "key2": "7kEw9QseqE9Ec6iyC1M6gg32XmJvWFFjRQ1uDfXEvcTzxWfeFvW3QLFeKytwk5tV3qYUwvT4dMjXQdTDrWyRF6i",
  "key3": "2uf8xXVncDK5F2Y8TA8c1EyV4vgV5vBtaRiXEPqbHPwJdW2hGwRQy4ta3wGPVrES6o5JPaJDQZqCNUPjTxpC2qFe",
  "key4": "2GRGvuErgckhBjpmqvzeeJYFWSud8fbrXRYs1kx68FvB5HtUVBPUfvMhCSvMK3nXBtZqThrcv8P9EHhEDvDXCwuo",
  "key5": "22N9EZHUajVZZLpU1KzR7jAvVBi35XaimuZb6D5yMdmDN7TpACBLSeoGkXP9PdWdjp2EPE8hxDriTstgJj6T4Vsz",
  "key6": "53anSkvt6Po8NQgX6dgnqs2iQttPdJ74sMgQDc5ihYcGVkycGrKmCXarQHLg31onz642aYKZn7KAEmATyzYHSjUt",
  "key7": "nyTVE4sFirwbrkotBVav16tKCTiTDCJB4ZxJiG9oUACjSTFu1MmKMdAbwS1v832bzVN4Nragxp6jc5BokKSiE98",
  "key8": "5LMgpAGUS4mtxaQHKQts3Tfj7zx3Dn2H8beCLyqg24NoUjUyz7BNAUkvSC4WADETmvDuvcq1GJK1HMEG5WwJZDcb",
  "key9": "4AbCSrbNQBYKw7kPL9jx9bnC2npG284CpvbCyzrqYofcxa1S3uxKT2shGi86tJWKdzahwgHNDHk8JQ2fhvEFv8vf",
  "key10": "5ZbrSJBfPgzPNZZHcvF9pKK6xQBbaJsfdkkFVWw8JfwKaz5fsQYSt9J8QzH6kexWi47GWhGsY2LFR9fN1S2XxGnC",
  "key11": "5Q5ucpiMiv9f99pyAziRR8oMzG6Djeu8LMy62mcuxhWBLsZkEfsr1ZeUk3aUjtWi7b4Dr7StwWSDtUFhCwYaptFD",
  "key12": "3SQoDVoS5zLh7U6hRverLMjs5XtSfrpbQc43JKtYPq2gX1TNpUndd2wos8p78q5DExz8d8tWuRYL9J9M7EBo9w2F",
  "key13": "2Y7Y9uENcbz9uNUVDVFasPTjoAG7xcgsfJoPErfTjptpJJHkPQTdyTMAfeNDqszBth1cHNB5yJfS1wWrepVpatWp",
  "key14": "38fnPJLFKAw4TsdQS1eZrw1tvUZSvwiJAiSZbqxRXNUKjrxi6fjeZyBNwjHapSRhANCRiovYa3inotKbUd5PYqQe",
  "key15": "2SAUX4GXVWhuJDCrYNZ1L29GZPP2eAQCuLHw1LVkMjdFYK6E4wSEmyq8xAMGiUiAgqVGyk9YgGJoesbw1g6t55bT",
  "key16": "5tadRAhkSYg6CqZj3TDPkbcWdFuCmmkA8U97eG8kmGcd1Db1HQd3TCXEnAnWqYKck2Le7UzosiZMcxhcmFzzSRWp",
  "key17": "FMp3m19ucjsEEcBTrAYc6LcXD2ixqE2jAUuXY3spEGj7GyHSDMf7x8vS5qbcE9AGXG8M2NCvtGdq5CV1L929xRX",
  "key18": "42NPbmatEC6PQ5SKEbLMd7u2BuUJmbproU9u34bGQmcrELFEwW3oNgyUfLbG26iAsRdjFCdfiYNr5vNSp8UDPKBo",
  "key19": "LLUZzX566SfdRTDCuk8g6RYtfGuJWpPPaSFLfSbFbiL2YPy1VvLaig4JKp94ag47gxXt9EWZa4jUvsHh8S9qSo8",
  "key20": "2tBzJ2NyQLJJoeepzBbSDAsRJiU5KDdcW25uXR4pEGHsYQGyLauSTCcvdRSTmfhUmARebbv9g1huP9HKarDPnCcj",
  "key21": "5XG3HqkbKqm8HBhwRP72FsTnvQzWr4VKUwbA4n66V36UTtUrwmAp6Nrn9eBZjNFba3c7uFuDMiZp8AWS4fcexrhe",
  "key22": "4c5XpZcXbw6p9EB3Fmf19g7K1nDK8mRK9iCjUnbysGBdWae9o2yreGMGMpyf1KM16HSaUevv1wnjjEQqJiCbbPTc",
  "key23": "65gmzu54ESpjPvDmE2J6acWxKvXQtKiSRrfnpNYR2iCgw7X77Chhu4t6s5f7ukUf5fci3dDfmppG42Zv6gH5FcYT",
  "key24": "5gNjCTSVUJNkiwEojqzQDaL8hg6RTepsm3h3v2Li5R3NcYqLUCG58Fb8hWbH6PoJWWtwgeUwVGs6GUxncMAGq5Az",
  "key25": "3gdXktSqznB7YydtPTVHvbGo15NUexgM5Ey4M5sogQU5u8NYK1eGRix4zEVXthyF2qeBoMk6Dw4preZdypioGT9F",
  "key26": "i6kcHjdVhGvj4A4NSwjSnjQ418vrgxmViLQ4x3w2zFKPZFWjg9gh5FjQZTqtDUFsNSndt1FzJ1J8biBTyNfgYhN",
  "key27": "AxfciiSchoDwhmNxcP8GVLckCSWht6CpxL1hrSB1E7H49PBhoxHeT6Frx8SAfuW8yNSizGjQe5pMNVwgivR3584",
  "key28": "3T9KVgvfPBvAALtKWhqFJrpKr6LvTmaX4qdTYBruQ3Q2G4KZssfZ6U24vhy5ehYVAf9r1KmpHoaMCTgkZLG9DDF6",
  "key29": "2KCXFjumY9BitdZkaswCWYxvSUdKDEnj6mE8SJiD5gzU3Qag8W8ed2muztD1f7Ws7sQNfHCNYHjhuzFjFpxzvjp",
  "key30": "38mqPP9V9nX8KxsoNSpej3yQYPMPGdCAao9Vhce4h7Lr2trZ6py2TwiMzZgZp8HCj8P6DLxNCw2QvFpe7zSASBVB"
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
