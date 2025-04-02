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
    "519XwjMsodR1TMp8TsPHJg1fCQKd1tNesV5jQLTKJzeDZuhU72JD8gSk93bVMjihpgJSCypTj5jm2g4ikMpo3WWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcCU4T5zd9MnrRn12C6qHXqrtSMu2G9UfuT4fTzQ5HxcEKxN2mL3EUyZrmpgjP85zzuDVBYRvQ6oXPHCBFzx42H",
  "key1": "3Xq7nS22AKG1m41But8BZ1DNSx7oNTDQcE6zLGiVyKfNrxoYNHMxDmTPTDwHaxuAWvU3KYiojNXUhsHUDo77Ux3L",
  "key2": "5xerwK1rRMgeMt38or8iQmSe73binCy88Jknkcn2wgVMW3N5vyiimWpW8Vkw8upGF6Ep17Z5XwXPruS4DtgZKTJW",
  "key3": "bx2i4kr6H8thheu2AXgKk7JX4e62pChh6JcSY4zeYfyhGXSunU4yvNyAnQXKS6AnkS1w8kat9K97Swh5jJwb8r1",
  "key4": "PLz5UxQqe8baauxGMV4DHYoRFCkQQsfMC1Ni3CAyX46kz4QEnR5KuA4ZHNK93k7oXXyBiXTa1SLQ5LGL18r53JL",
  "key5": "LmHF2QdWCG7ptZaCZjSAWxMPU6A5WVzUm3azdGSBtyngDGSGN9BTk4PB1S7FCDMJyeAHBUXtug4f6gpg6aGtrZ3",
  "key6": "SCs6dQbHKrbxoG7ye1iSq4xy51UveYCej5DURTDP9VLcdAmQeqzD1SvyEbamcLYEMJbbMkLcgETPfYEkqiwVmXv",
  "key7": "58zLo4E8wKxP3G4kgeGFWFNSEBhacSRQaug6G3GZuxguKgnVeTBEvV2L8UmManYsAht9hMcPzREy6huqJAQxCocJ",
  "key8": "2u7GWQeKqTygnBE2yqf6yhSW9kpKazCdmprxS1fY2i4aR6kwsEbbBMC5VZaW4Yrjaz7nGBh7e9PKwGDARDA91HCw",
  "key9": "62Db1H9yTqX2dKr83SA3SAoAqHMvF7nBL9mLA78i2eiY6RhVT8Tqc8eGaKS8Sh7eX9dPBWp62UqoK4rGquYash71",
  "key10": "47Q5vN1oKtfzkoYXNMkCcNiRNit9xmvQCNk7V5CcscyP6bCpMiWJxJJf4wMXetz3zFKYyVm2BPXEUMRR7rAAgf9K",
  "key11": "4AbuFQD8swDk2VugZA1xgPWUn3kWKVLckaCLHVXPXDCBUk81JYVmbb91uf9vwErsPmoHP2K8w2gDB5bkVmD1JbaM",
  "key12": "PQ6Fhc8XNwZe52y4AuzZJEyJYRyEP4wUMAMgpp4rWZwHUd87Mjr3z29xhWXJrAXjyzSxW8ksLwmqTejdKH2Zdod",
  "key13": "2GucHWHM94eAEpxWsWoNUgP8jKZ316q6TmQTJu3StWbGx1PFnAgmWKbAyhMxVXk7xjziE4cTwcy2oPWUJqtVoyRb",
  "key14": "2BeGqJYwYPHhkL7wiK2nbwn4A4nWUtCo6AqK9qQ1dkPzsCnHmmsMES1QurKKwfvx4jcZqpBajcBT6ckaUxkrqpts",
  "key15": "2XTrQqFxMPBHmAfup8QeT2JMZMN7YeiZnyMZ7fMRopPGzT7iTqNdAKGyBBdQXuLzmwme3WYyEGDT8SgHqiY9nQRp",
  "key16": "2Mqp3dU4hZZFFFb8dsEMt5s8Buu9XoKHkShyL1todFi3hiFAbogwEQLJ43X1cpCvywpR7YWd2ZnqqHoXrr8A4Nhp",
  "key17": "3TdTDCSA8VjnrQfVqK8KT3SRycVcfAX2nLSFDHnGk1xgMzZbp2RsPfvoiGz35NJ64A8GX5UYW7n28s2MancUPLMk",
  "key18": "2u3vBmLt3GphKoEiuHiWM5VjTRX8ZiCbjvYHS3ENDr78T339QBWiKqGZj1vGhEYMM4W7vDyPLyiTsGxfjtLbqB7J",
  "key19": "3sQb1zwx3doxa9qKrFsbjosxgeqVAZiBnz3zh6ERv8qnTXz9Ltq68CTYUfwejvSbkGb3dj3NCU3Vwc6DHEwjgpsf",
  "key20": "552fKRSZLTTadELRGDBtVAMgQ7RCRBPnMrx3gbyqgR7BzJu4DY9EBoZkYbUi8DGfCKLroPtWvFbjMnrLbCBPUUdb",
  "key21": "2nuyjAFXLp6F7yg59VotEnM5DeHPivQN1A7ME8nL2vHZk1EYfpY29QqPZFPoB6cnTAp5Zd6CzdCPVueiHVeGuoCq",
  "key22": "45qKXdKzYt18bKXt1fYuEvxR7ghHy13T3aAJnYgvr1iBGakrq11no6qYyDrFWenf3RiGXG4YoWZnBHmDGo7hzKgs",
  "key23": "UwXwiuuqmDwSzF773cLPCZUemCfqEFpD6MUGUpPc2Wvs5xv5skK9xLX7YdHHRMSg1U6uFXANsPt1rup71eA1P6g",
  "key24": "44gU5Gk1PcL92BUHFz3XcJZPvLACVFjFL8F3epDz8rzqqYoAguYFD8xAmCwJTCyk1ZVKu8AuzRfDoWD7zQW8rsqU",
  "key25": "2FtTko9ZyisMUdZUs9jhfu8nJ3nXQbN6hpwDxB7eSCr7jbpq8AgASXWEkxbB1ZNUtX3zzzN4tjeqjhpZkg8BVuNM",
  "key26": "KhqTzz8xMFCJdMrYKsbCSVfWZLyXpzndkZCrHJdRU9tfkxXH7k5doHmRAhqY2qWZ3eMETzd7fwnwvfp2eNm656f"
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
