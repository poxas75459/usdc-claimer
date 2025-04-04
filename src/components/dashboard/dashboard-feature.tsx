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
    "2KCYDYbyNzwnRw7HxtSK9W63dMA3UGj4ENffibYqpg7U2bStWdkfCtAfrzuM5zzrYfobFhGQ1mJtQc9g8nDj9U7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWHzaBN5HCcyTY46VmSvo4D4i2mZon5HFW6NhkWsHt38H697SNFQEijUThPpf2gmLQhKTAd5WY2EJgrXhXDMmQZ",
  "key1": "3ZCd87ySkeeJ2WaKVpJSCQNwgfczd4tTrQY5FpxYnRQy8D19uHgKkR65wCGYXhYAaq7wUj7LzbExjLpzDt7EXWf4",
  "key2": "4pG7treR9YzAzba85K9qpyViq6t4YqMSY6PuKLZhFNvA3j8kG6M29cHEUXqhBgFMVKPiTdxMKhNKNcJ3FoQejNUL",
  "key3": "2jrUvLNN32z33G8JmpjSg6equwx7J6H76QM4GENY6WQ8MYKjRp3ewGXXk3w8B2rUmgAygzqfMkGpChZSPyDa4Egf",
  "key4": "3WmDfH25TKbcvtxbpixpYsdAP6W2gPUgMY1FDMzyr5g4fWy9KF44kv4JBVXyqAWBUA7wMhXLTsQQpTBGAbjoDw1k",
  "key5": "4wFvksrCgumkKD1CpCH7kuy3pG5r1n22hpRzW8M68eMRzwozZic9x8c7RyUZS42xJ5PsCtnqKF2KprWDZhJCrd8u",
  "key6": "4HNDz6NkSn7mEQ7Cc3FVdNtvj1fEAjbvuNZtmScFhS977hxJ8txBV8bDCbpspUwxhBtVqeLFvSdP914Gt6xnGVei",
  "key7": "4cyakmTNWiZQpG64qJtsAWetV54vJ2QNHBP4PDiQ8XcEiyKBqhcZ662296VXzoEem2wAaKYSofBvtrBd3dFWVAwP",
  "key8": "4DBv9ni6XWbjk2wcaPjeTR6Nb1TujFQVG4xpXXDdg5E6foxAPB4Cw893dxrhHDXAthYnNbg8R2z1s9df3QceCKzH",
  "key9": "2SK1SxJeVBFu5n431bz5mfWgzgngYPbqzrxqxPcEHELLMuNeaLqzfimQDetKC14TkdtRGbJGLZMc55LnSDkzSYCd",
  "key10": "25QCDbT8uvo5zQ1q8ArT5EY35wYxTTzbqWbne5XTKCspkgdY9ZZWLcvn4CjogREehwVEqZxoqj1ao2tzqhST25nt",
  "key11": "5uiX2mZyP839v5NXAuvXDP2p2HAnmZyFR4KNT3EvM4NNMTYT28eFsYmZD6C4KhfbXhwiYcHv94g5aEekL8v87QgF",
  "key12": "47jB8t3LoxoN7M5uu528HChc4C9TBHoxgH8RvgLgdMZX6ebFgjbFnBanuCE5ADCk4kFztJ3ayMPW19n3EKKi8vvE",
  "key13": "3oQfpGeELm6rw4qSkp57NsGvxktcrKaPQks6wxmTtwAS8C54WkvMGNV7NLmPBEtTRHhheEcfT2rACQQa1RMBZtjT",
  "key14": "4j6ZbfMd9bsfz9pHpgiZY8VbPavxVh4JF5vYHbpVijPXUy2FtA3nLkuYvd9vYeALrXSBYvX4kS42i16EfL2wpY5o",
  "key15": "5ZPcRQTX5ey3CxxUrBnp9xboo2bkwCL5FQjmmtoxGXQWEBqtuqTSXzLqXuUTEk1cxCcLkMLm3AxfoHRFXJqP18Rx",
  "key16": "2pbz4yTkpaShf3qenxk3mvyh3uiSRDbvNroom43yN1rGVDkvJZAQCgEyUHqkEUhQmbtMNKz38xUPrZXZo7H5PZNr",
  "key17": "4bVqUUaiTC16MTNEhxEmCgpdWHnAVUudVSnR9MtNsEHiX7gRwpErMFuLC76NRYF9XitycqZfL93DRCMiiKpwkLTm",
  "key18": "4vExAWmgFcAAsaxeqNjeDH34tBQPp21PSigNb2Dib6qoiQhR1PHVFYg2F6Xjo2bB77X59StCibWk9NLiwsz3YeWb",
  "key19": "BLSgjhsfBp1KjqSH7WHVuWRLUpKx1qkCuKGrSD8FvtNcK1yjvVHcXdJ2PWf5C9SQg2PBAuSBsWL4TuQR1w9E7jm",
  "key20": "4XZnJBy7YcQVwkmAYg7UsnhKQ5ft3AvGSzxoUo4hUF8LjC7atHvSfNGNAN9L7VDgDLN1B2cD6YeP1NHkHKtjEXjB",
  "key21": "5bsjpcMzE3NChfz1vASUeQaErP2PNQExUyQHMChDWEjBEgU6hUbCa1sPCyB8eoexfoAkT1NajGkr6fdud9Z8ETzT",
  "key22": "5bjeTCTmPvvkbp1LVJHGHNtrHg1Hfx8Q7PVGVJtiTKm1uRFFGtYatM62AphrqVLsVfH2ngqgPP7qodh5gtXvKWJJ",
  "key23": "4PDA5f1jEVFyije8Y4JfgnCWkaACGsWqorGNCw3BHpRBjQWbHYboUWkV9L6RSPw6Mh1XCXEoFtMfdAyeN8rmtKyJ",
  "key24": "5pVTU7bxN3gq6XWEpMwHtzD9Dnqfobq9w9GBGzt912B39wkPu4aFLm1GmcHqQ5uygVgtzqP3ajWLRE4uJP1KJdsx",
  "key25": "4Q5RzFZQEtU8Z3ba6HkaELb3ZeXwEMiAsbNDU4DhJTchVW2y5Hz3FXPWt4bh4QMysy3yLAKNo5VTKj2mxfBLvqbH",
  "key26": "364z4yL4WvzD2Adr4ibdTNMeE9PStGSFNfzpNk4mH4fm6Ne71DFfphnSBctjQ7GRYPL84FPYsTfASi2a3HviYJF5",
  "key27": "QnvXfTNixvwMp5prS3Ntxff5BhnhCfP6ndCCwxkbZnvQBzMCxmkAt43Ru2mqF34ppeoQ6A14JR4QEqaSYrgX2rn",
  "key28": "5ZV1hBvryfs1DKyY7hdixwNrYufeKq6HgLfWjZDphfqPKbmXfv7GDToJe4qMJDCd3HMgRMvUiCm4Khtb3ATg6gNF",
  "key29": "4hBWAzwJ588bcudoiQLKTJJkgjxheFjtUdcLMJD6Vo2oHL9evgjUURU6wgYwTgq5kXbWaTkhGcfdt5Au5Bmtun18",
  "key30": "61WXSniV5oUKs2Rh7Hyp7Z3LTrgLYgwj53CCXAT1S9tJhtBNRownq6p2FJXb29nYNRw446xGiJ43zNFL4RWTgAAN",
  "key31": "4osraUSLz9Metu3goz7GZbwzLtJVu9THx3KrfbAWgK8t9STW8ik97YXjumg82TTdNpSx8GuCCjHQKVoEuHyQPzR8",
  "key32": "avFty8a4i6yXfAwcii1YmZUv4XXokEcr1u5NaHW8akbT22JdsJboVSh3ve2J574PSiYS7XBs7fMSVTyjd4D9h1t",
  "key33": "3q5NXGkw97zrM5tooPFGzZdL6BpTuA8uYTFtbAni38Bzvzmmgkrm8BjdZLBRDCA7DM8Y1AXQ9nmU2RaA15M8c9cr"
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
