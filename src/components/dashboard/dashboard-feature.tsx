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
    "4XCYUDEaJsynB4nYeicVRkkxjwrTSXhon44XNtkfc1wBeqUyNgtJeyG2bgTxPAoUgyWtxFSBky5pZrXWFDysvAgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5HUnmLmHUDPyhdFMaY5BanTLLn2hEaLNyASPa1Gq4LBE6112hssgX6VXxkHWuk5tamqQKwfyJsUMHYMjUSGEon",
  "key1": "3P9PrxZfgHs2KjnpDCNVDk2McqoKQvHEr4DAJDehoF9t2HW2NehurKyGuSkxkMA1V9JdtPQELpQkQcNdQtXa2gMK",
  "key2": "28KGs9ePFaiFp7aALZEryvZ8BNEzLNtmPJbfdPJPnZhBtqnkfV7TgQrb6cBLhsJ2pR5c91raz8zdFhejQ6VQhJES",
  "key3": "3feaWKjEuPcWYiE3Tx7sE5DfqpBTVPXAzkSrmmXMpeNcX82sVU7qifqZh3NtP9MdRaK9yWhychEvFG2q9akG9cVR",
  "key4": "gr82fMBhGRFVhDrePVSLzSZjnS43ULC2sG6G8XriUdxn51gQuTRE2yabQP5MC7fD558ZpPJYpeBJsGEe2Ke7k4S",
  "key5": "5vzuX6gzMkHXxmYUV8MSs8PcQdbtYg8WbQah82vkh77iyjFeByjMAZaT8tZtrHvqvHwGFVA6D4VjWyAqBoZ2TXa5",
  "key6": "2Q5vytTo4rtt6YfYVXm1LAvKYxqAG6sonYsQd7qxd6T3TQGAompzCcM3GERdc6mWm8mEW234Nb6cPQnk86n6cBoh",
  "key7": "5GzpyTGXxVFiE91nNu1CTdUKbMCCtmCJtmyszg4GWiHRc5fhcGPvpWNYpd46tvawoQaNx4FFBxUJmU3FWB3NmBJt",
  "key8": "FR5egA8QVR3KSuwFU4R9pA1XDqcZ1PRAxiJ7kpE5Z947DFnnTbbsSkUhx5A6hHa7xvJj63vpL4c3tNCoTH3Zv9D",
  "key9": "2sEWc5eFoJbdcug3sGWLsbYXPh1GsGaaK3rsvEqo58uBvqgLiNYFUuQ3mQSkUZCbdnnVwgeXW5QgWFL9mBxeiRhi",
  "key10": "4ewsViVsrMH7vTrCEdG8VXiNxbsFfMnDxwyTNMenotcLt9MTVkzDnVDAHW7A6MX6CNkSKsigo8Eu4mwqVmP7ayrn",
  "key11": "5rnEmwToiq6sWBcVwtDYHFt7qi6tMADEnZAgA125YDszXN7c5NgxwyeRwae9qR4HLGGKrP5jNZeutiiiF48zeRbm",
  "key12": "5GeH8vswtFstPeKKdAXMpzpqNaLEqw1UwuNGgWYCT2UdsQiDPVknU8tubVeDCH1ctEeDJqo3JVNgMGGkZn6PCjkP",
  "key13": "2te1NPRbYtohq8aD4v4g2LgXiThcdPxy1iBsFHJta6DbvGbaS6YHAGoNwPNEohtLRQvRS16Gs3c1eVDcSHbNFCC1",
  "key14": "PGXTtFy2nsuMTeWZdmCEjoiF7meAQLdVtnoWZEBQGycAvh6wyVafZemhjMJ85Dxqmmwd5DkjggtxLZWyFyqwxyb",
  "key15": "66ueMphTSV9F4kEF5HjCnbAKXYEkR2Zugz2KCQN3sCTbzQadHigeDLwBTfS15gzJf25JHGhPxYaMgqE9WCa4XXmx",
  "key16": "3eUQiB44K4tRJ7dqgcKsEmR1Kfg9wQxUMNnDZTqx3bdqwj679fWzL2HEQ5UQZzgLuFCDy48UPacDbvkWrXA8H3V",
  "key17": "C4b3dsnLtaHnzLKd5FigbDdmLuZTVSvGzzBZJQwmYDJamSK191faKj4kKZE7GW9X6kyrSHzfSYar5ph48t3yjxP",
  "key18": "3dtmsTHeV4N6bynaLVEAacipk2KZZUuJ68etcheZS1GoUXu2hkt5CcfKhchgdzTB6kj7D668vScz7RZgovacvWk5",
  "key19": "5XPE7idtTQZmt5gCQTU14nf7KjJ42bdGp28mpNkBBtPFu3ysu5dzrQ7zB5ZbjXCoFutw2ghkqakbaZHysxApCD8p",
  "key20": "2esPXkd9qygxzoexNF3JkEo1zxtU4oJWXGTybLK6t6eviSsMuee6iVQ5LZVV5vZ2HTVrVcJAqMpzCmRg8RdzUPGP",
  "key21": "4UUEK8YLuTztbopSA4xZ7UuudP7Mqw2r4c66utveTsDosW5xfSW3ZXUiWn9oRTd1RAHGpdnodjd3CpJdA3VJGd1x",
  "key22": "2V9Jaj4Cu8GyD7y6GnWwsgJUUkg3jsSLCJCfB7aQwKZSGd4tutyueADoR6SHCbH9yddzgud8Cg18HZyozVVtWB5k",
  "key23": "2g6eAPnZtmdkqWPQNviCqzndLmMbHx9R8nZwNtcNzDxBgmDEZts6dJBE5xjoTTnuRXvrFsm8DCJb1aNPy2oBGjkw",
  "key24": "3TpgQzfTRB3YPDGNc7Fknmpeht1mZvNi8KDNv7crvbMstdu9xckAmBiCyAjLEwTdCrNk44dPsv7qY8iCit6RFZB5",
  "key25": "3BHojB9CJXMJQ4cKdZ6UYgVFKenjfR5SrLquDtQJY6AHn5WizLspQQM6o9VcoAYmZtM578pkdG9cw4tRS84iep32",
  "key26": "23G7fdDMeirSevX1nJUzL3qvRTSYaH9veQG9xg4KYrQdvnDPJhbyYrwhxTjnyGSsMLciZZJC3V9jgcXkanuj4qKo",
  "key27": "4h5k4kf7tNpNE39hxQmgsSmUmDDNX7MnXx1PSPMb5KaD7UDc7NV45jpkZGbkV93Pr86heFGfE4PP5nUnfrAeo6kS",
  "key28": "5bBxZRT51HHF79NarPDUdEdGNdQvosWKPXJ4LDwEggudodB4cuMr9h9EiHXV7xa6is3baJ7uJcbkWAt98BTAGNh2",
  "key29": "3MHrca1BSMwb4DEQRoD4A6b6xiXJCuqqyfZcMWb6PKk9hmFE9FM289hQ3vKZCh4x48gqTJRd6ujVRSTkdcXZPa3a",
  "key30": "3bEnVq76BpUgQ3KTbzK45G2FCUKcBj7UqtA6q5ZfJ9tQxssSnDsZX6W749nbPgRoGqRxpfKjS6BiL83F5aJBxEY1",
  "key31": "2gmxud4VsTbtdfqoo8Vyh7Cs54ZHswUAB5DRQ8DrjBBMifKMQyi9FW1ViAkxvmuJM8bDh1wbHBTxsZu4GGMnaWKv",
  "key32": "4ANk6HMYjt1rhcJKzaTanLYjtcuEjtQGsQBTPfr4nzq66JSvCq2EYhwYjKyitdzduD9KKw92niAeUaxJiKWoUjNf",
  "key33": "2ooiz3zibmACeBiRB12FX2fQ119H31UH6RMEpAz81YPEvyYb8BUHDhJQ2Egg14xHGyLzZQeVaaznvief8EcQk957",
  "key34": "ejNENiavGQbfELRrYtkXnhL5kvFePegsX1y86tjMNPSh9n6pSJw9iAFzPoJ4yhUiY3AiToAYskfCpYQmRSK5se1"
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
