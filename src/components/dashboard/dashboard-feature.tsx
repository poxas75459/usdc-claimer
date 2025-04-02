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
    "2NR265E8k7hUDyBWj2QS4cPySw3mWfkSHmK5xDFgxoJJxx1FzJ8xc2smgcENnKpQSDP79m92nYwtGkma4vWLaciF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJC9eXKG1JdYPNrQyNfVoAgFT6JQQKSaunBy5MMAr281RQ1qKLDRT7aruZ7L5zGnQ73rJjGzte7zBGXM9oq2hbP",
  "key1": "2FAXGQ2C2Dy7FK6pfCzqxbJWrxMYz6oDeLWC1ktagDp2BJiFzb2MKGPcjkKXaENj7GtXVtchSeeMCwbYc1yf6iV8",
  "key2": "Hz5Xd72Z7D3nxVnvSY9vdUbLVNHMiwArpPLD9WXwd4ncoLQpRWAPMr7qLYWsrqxMByixZxnm981QGynEQPFQeJM",
  "key3": "EpPURHrEFQuQn7orDU6ZpAMC4u44SVNoieFBoqootx6UfNNM98QcXE6xS8uy4p6ZeUz5J6e3x5h7okuaPCysmba",
  "key4": "2bJdLDU881aYStaQKG28Cv1NBVLCVJCG6zgC7P1hpYEY8qmdsmm6y4TcyAyTJ35gVNuEupHDAsgCtW9ZjAz91h9z",
  "key5": "62Faa3AKrLrDB3kEEAxCsQuvRPmcz8cac95muXDC6YHE6m8cYTyHvnf2nEc7tkoyvRM3NcXR21rm1rkNK9yYTz5G",
  "key6": "DKb8saF4M46yqtFoiJoFE4ZZjizvAs4ThUfj69oQ5HaacpD5TFGK214eVeVhQzafE1QFwrMGrhbbUqKVfed5V63",
  "key7": "5ryCkCwppfczjh2CApWGYqdE9VMFbvwUzEemwik77txMCAaUeqiK6dYqrp7N4ZqfU5U7GyNjaF4BwGkFSX5vkMgV",
  "key8": "35fzSbGeKfdTKne9kQSWycSTGFnrEk1g8RH8YasCe73qUD3SZ6zK7urDhNE2o4kEDR9BKmp7WyZxk4QKWyu9VBut",
  "key9": "2HuFcoZwH1RjiQP7zwgpHRqaLUfGymXTBgfwUJ2p8iyXLAnv8XQfHJyoV79jNBXiZocmjGKMhjY5BHjypGmEcvmG",
  "key10": "4ayCJ7GZCWUxCm8MXQvBtPSmJLAnR9M1vtcwRqVkajmJDW5nJ74uxQo8GaPLSW7sWoFCyAtfkufAPsCxFy9nKYai",
  "key11": "1DM8uxuQ4dENRiBEpnL8qBuLk4zHYBBh6khNmbRyTHzZnr9qnpfAyY1XiXTm26o3ZeYcWJ3XJQD7AEr54QToTgw",
  "key12": "2nasZyD3cbYfHKzAAWhgL2iq3xArZQxBZJ47Af7whTagEodTpi6JYBXRwpJy7uUXbfSUexb2VE7iBcTkr6gQrXPq",
  "key13": "33jk5MgChouJoy3dftJTsZcpwTEfrMDsDrtWVomZZiU6oWC3F6mEzvaPYMzkoe82xnLvLFqm29ykaUDUTweGSBqB",
  "key14": "2kDbU89EntefxcpdJ8EwBvig4AB3YNgHvBKSdZSL6MD343BcNerRLwPAfnaews6jKmVPC66mZMwJCxuWXM76ihbn",
  "key15": "3pxgEEuvSkgYFera8GCK8oitCVHVpKVLzx4a8D8sDrdDZV7m3VJ4FWG38rj6yup3fYKp9c8Q4rcToYTWvm6bcADF",
  "key16": "3YyPperWymUHotFQU247BRBVuQAs4uCmAP8iwsxMAGrUd8tn3YGyS9V2qkDtaJTSXq5NxJvqw1JRkkdyXrARnp7J",
  "key17": "3VRBtyJ1oU8KHSKujZJ68Xf3Bc5N6dqnEjErLAjbCwwF1xB61tyrBpJ5juHzDNTziar4rb9QFNvkZmLzALgVf9pQ",
  "key18": "4iL9TJRsaJk8m6dwLb9UEqcoRjR4Ue45spreNRVuGXK7Mi7cmd9mBaZoBX5GnigDKBriHcoC7L6HkJykgCtwnu7z",
  "key19": "5T5BxhTqJx7uQph7KmFKv3crdviCWfHkoy1R1eAyt5oUWbPpZMPUVLvwXme6xUHry7R4itj5FfyTpx7gjUZUBgRD",
  "key20": "2oe7ozqds4vVLjZJePgPWaLwvM1SiMXWT3mMVpf6Wxk6KEGtLRNTnfc7eAiFqRfMvGGmLByjgYrJbFTxdMUDPt8M",
  "key21": "4wzpn4SGaxGc4xeV9kmE5Ckf9ZK2tydeTLnjPnp9GvPogZF6fL7f9dQp9152AjGSp4doBRc5dGUAJHpraDQwRBVP",
  "key22": "feCsQXCQPtv1J8ENN1tqfdC125kue5k3HQd1y261Tkk9f5pa3oWTK4MVccFNpASi2hZW5gQFZjbdVXB8gkM4yqk",
  "key23": "45z558aY31K7ok5oSk5yaAURnEVw6p5AvuahLGVg5sueMm75yqVj9R8zAVohw7VP5yh2h3VGZje6hF18akwzH7Sg",
  "key24": "2CTiyY4iKNqMEPfoo2Pi9RPbc23qufr6HmEn26WCNW7TNr8opyRG3BiwAL3PdySTBPVdCPBu6jwQb8QncyXKbtBe",
  "key25": "4BJZMuWHKCSWRd3URKRrSkwBkzh4ucTuRGGTh9eYcfWRi8iyCCGDawu7SNdgWDKQ4cbrzCmMToBd6C1UTAtXhYMY",
  "key26": "8Vp24dD39k4Fguru1bFigzEzXE9QttH4gC4vrjfezWyKEpLmUJ5XWbsqABkdnhoNoH8GrJFGEGtHyxsD3eLXXat",
  "key27": "5TuUEGVGUrVbeyvofnUuLocgtaQ9LPDbCfEAUzBVbZLP5pQfw4QQUQ3nEcRFSby1zrKBBAYKUhL2YQTdbTZxRkno",
  "key28": "3KQeFKDrUYuYB3WEvr8meKYKQexT94amTgZhBsDL9acx43hb9oqoVLEK9ZV48bH1UWjmKQFHchDkn72cCpkypcTp",
  "key29": "pvJXHyvuuLV4fCow4rmTFBxWQQuvTTGXmCPKtf5Q5WbXhdzBfFa18xZNHcjp6HSGPCaVgDvFmQAVPpGTrUC9E25"
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
